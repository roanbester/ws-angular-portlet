package codingglass.portlet.angularportlet;


public class Response {
	
	private String responseMessage;
	private Object responseData;
	
	public Response() {
	
	}
	
	public Response(String responseMessage, Object responseData) {
		this.responseMessage = responseMessage;
		this.responseData = responseData;
	}
	
	public String getResponseMessage() {
		return responseMessage;
	}

	
	public void setResponseMessage(String responseMessage) {
		this.responseMessage = responseMessage;
	}

	
	public Object getResponseData() {
		return responseData;
	}

	
	public void setResponseData(Object responseData) {
		this.responseData = responseData;
	}
	
}
