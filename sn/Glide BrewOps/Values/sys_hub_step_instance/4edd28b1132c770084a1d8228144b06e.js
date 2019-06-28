/* 
 * Application : Glide BrewOps
 * ClassName   : sys_variable_value
 * Created On  : 2019-04-02 01:08:22
 * Created By  : jason.mckee
 * Updated On  : 2019-04-02 01:08:22
 * Updated By  : jason.mckee
 * URL         : /sys_variable_value.do?sys_id=4edd28b1132c770084a1d8228144b06e
 */
(function execute(inputs, outputs) {
	outputs.APIKey = gs.getProperty("instance_name");
})(inputs, outputs);
