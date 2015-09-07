<%@ page contentType="text/html" pageEncoding="UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet_2_0"%>


<portlet:defineObjects/>

<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/app.css">  
<!-- html container for your angularjs application. This container will be manually bootstrapped, as ng-app does not work for > 1 app
on a page
 -->
<div id="<portlet:namespace/>angularjsApp">
<h1>Example AngularJS app</h1>
	<call-portlet></call-portlet>
</div>

<!-- Create portlet/Portal constants (urls etc) to be used in the angular app via injection. -->
<c:set var="angularPortlet" scope="request">
    <portlet:namespace />Portlet
</c:set>

<script type="text/javascript">
	var ${angularPortlet} = (function() {
			var portal = {};
			portal.portletName = "${portletName}";
			portal.portletNamespace = "<portlet:namespace/>";
			portal.resourceURL = "<portlet:resourceURL/>";			
			portal.contextPath = "<c:url value='/'/>";			
			return portal;
	    })();	    
</script>
<script src="<%=request.getContextPath()%>/resources/js/jquery-1.11.3.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/js/angular.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/js/app.js"></script>
<!-- Manually bootstrap angularjs application. -->
<script type="text/javascript">
		angular.module('angularjs-App').constant("PORTAL", ${angularPortlet});		
		angular.element(document).ready(function() {
               angular.bootstrap(document.getElementById("<portlet:namespace/>angularjsApp"), ['angularjs-App']); 
           }); 			
</script>