# ws-angular-portlet
## Overview
This project demonstrates how to create a JSR 286 portlet for IBM Websphere Portal, using minimal dependencies, that uses an AngularJS UI.

+ Unique(ish) namespacing and portlet urls so you can add > 1 of them on a portal page;
+ Fetch html and js resources from portlet contextPath
+ Bootstrap angular manually, setting portlet/portal URLs
+ a basic directive doing ajax call to portlet's serveResource
+ display result from the portlet on the UI.

## Notes
This is a maven project, but I have ommitted the mvn repositories, so you'll have to add them based on your company's context. This is due to Websphere Portal being a licensed product, so its jars are not found in the opensource community.

The portlet is deployed as a WAR with no other configuration needed, other than a context path.
