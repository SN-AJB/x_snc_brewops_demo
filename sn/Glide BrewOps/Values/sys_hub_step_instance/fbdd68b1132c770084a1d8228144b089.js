/* 
 * Application : Glide BrewOps
 * ClassName   : sys_variable_value
 * Created On  : 2019-04-02 01:08:29
 * Created By  : jason.mckee
 * Updated On  : 2019-04-02 01:08:29
 * Updated By  : jason.mckee
 * URL         : /sys_variable_value.do?sys_id=fbdd68b1132c770084a1d8228144b089
 */
(function execute(inputs, outputs) {
	outputs.APIKey = gs.getProperty("instance_name");
})(inputs, outputs);
