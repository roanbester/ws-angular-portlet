angular.module('angularjs-App', [])
.factory('callPortletBackend', ['$http', 'PORTAL', function($http, PORTAL) {
	return {
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