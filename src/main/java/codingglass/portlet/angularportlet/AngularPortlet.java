package codingglass.portlet.angularportlet;

import java.io.IOException;

import javax.portlet.GenericPortlet;
import javax.portlet.PortletException;
import javax.portlet.PortletRequestDispatcher;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * The AngularPortlet demonstrates how to hook up an AngularJS UI with a portlet.
 * @author RBester
 *
 */
public class AngularPortlet extends GenericPortlet {

	private ObjectMapper objectMapper = new ObjectMapper();
	
	/**
	 * Simply forward to the JSP to bootstrap angularjs.
	 */
	@Override
	protected void doView(RenderRequest request, RenderResponse response) throws PortletException, IOException {		
		PortletRequestDispatcher dispatcher = getPortletConfig().getPortletContext().getRequestDispatcher("/WEB-INF/jsp/AngularPortlet.jsp");
		dispatcher.forward(request, response);
	}

	/**
	 * Receives a JSON String (jsondata) that gets parsed into a codingglass.portlet.Request object.
	 * For illustration, this method then 'echoes' the request information in a codingglass.portlet.Response object as JSON.
	 */
	@Override
	public void serveResource(ResourceRequest request, ResourceResponse response) throws PortletException, IOException {
		Request fromJson = objectMapper.readValue(request.getParameter("jsondata"), Request.class);
		Response responseToClient = new Response("OK", "Call OK for ID " + fromJson.getId() + " with data " + fromJson.getData());		
		objectMapper.writeValue(response.getPortletOutputStream(), responseToClient);		
	}	
	
}
