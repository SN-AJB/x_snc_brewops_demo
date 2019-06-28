/* 
 * Application : Glide BrewOps
 * ClassName   : sys_variable_value
 * Created On  : 2019-04-30 00:50:19
 * Created By  : admin
 * Updated On  : 2019-04-30 00:50:19
 * Updated By  : admin
 * URL         : /sys_variable_value.do?sys_id=7e3634fedb853300f8e6d6aa4896195f
 */
(function execute(inputs, outputs) {
	outputs.APIKey = gs.getProperty("instance_name");
})(inputs, outputs);
