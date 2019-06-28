/* 
 * Application : Glide BrewOps
 * ClassName   : sys_ws_operation
 * Created On  : 2019-04-02 00:20:55
 * Created By  : jason.mckee
 * Updated On  : 2019-04-02 00:21:44
 * Updated By  : jason.mckee
 * URL         : /sys_ws_operation.do?sys_id=1281607913e8770084a1d8228144b011
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    var gr = new GlideRecord("x_snc_brewops_demo_filling_equipment");
	if(gr.get("serial_number",request.pathParams.serial_number)) {
		// can get fancier here and require some body info
		// or can just use the fault count increase as the input to kick off a maintenance flow for the builder

		gr.fault_count = gr.fault_count + 1;
		gr.update();
		
	} else {
		return new sn_ws_err.NotFoundError("Bad serial number");
	}	

})(request, response);
