angular.module('angularjs-App', [])
/**
 * A simple service that'll call the portlet serveResource with our data.
 * Note the setting of the Headers and data as parameters: this is required to make sure your data ends up in the resource request getParameter()
 */
.factory('callPortletBackend', ['$http', 'PORTAL', function($http, PORTAL) {
	return {
		/**
		 * @param {String} an ID you want to pass to the portlet. This allows the portlet to handle >1 types of requests.
		 * @param {String} the data you want to pass in as a js object.
		 * @param {Object} The callback function once call is completed. The function takes in the result object etc (see angularjs $http).
		 */
		submitToPortlet: function(id, data, handler) {			
			var objectToSubmit = {id: id, data: data};
			console.log('calling portlet with data ' + data);
			$http({
				method: 'POST',
				url: PORTAL.resourceURL,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				data: $.param({					
					'jsondata': JSON.stringify(objectToSubmit)
				})
			}).then(handler);
		}
	}
}])
/**
 * Simple directive with input text and a button, to submit some stuff to the portlet.
 */
.directive('callPortlet', ['callPortletBackend', 'PORTAL', function(callPortletBackend, PORTAL) {
	return {
		templateUrl: PORTAL.contextPath + '/resources/html/templates/callportlet.html',
		restrict: 'E',
		scope: false,
		bindToController: true,
		controllerAs: 'callportletCtrl',
		controller: function() {
			var thisCtrl = this;
			thisCtrl.resultMessage = 'Nothing yet...';
			thisCtrl.submitToPortlet = function() {
				callPortletBackend.submitToPortlet('myData', thisCtrl.dataToSubmit, function(result) {										
					thisCtrl.resultMessage = result.data;
				})
			};
		}
	}
}]);