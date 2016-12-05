package js;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/path")
public class HelloWorldResource {
	
	EavesdropService eavesdropService;
	
	public HelloWorldResource() {
		this.eavesdropService = new EavesdropService();
	}
	
	@GET
	@Path("/solum")
	@Produces("text/html")
	public String getAllProjects() throws Exception {
		ArrayList<String> parsed = this.eavesdropService.getYears();
//		Set<String> keys = parsed.keySet();
		
		HashMap<String, Integer> meetings = this.eavesdropService.getMeetings(parsed);
		Set<String> keys = meetings.keySet();
		String str = "";
		for(String item : keys){
			str += item + "~" + meetings.get(item) + "~";
		}
		
		return str;
	}
}
