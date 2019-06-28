/* 
 * Application : Glide BrewOps
 * ClassName   : sys_variable_value
 * Created On  : 2019-04-02 01:03:47
 * Created By  : jason.mckee
 * Updated On  : 2019-04-02 01:03:47
 * Updated By  : jason.mckee
 * URL         : /sys_variable_value.do?sys_id=83cc2871132c770084a1d8228144b0c1
 */
(function execute(inputs, outputs) {
	outputs.APIKey = gs.getProperty("instance_name");
})(inputs, outputs);
