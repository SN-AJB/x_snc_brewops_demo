/* 
 * Application : Glide BrewOps
 * ClassName   : sys_variable_value
 * Created On  : 2019-04-02 00:58:20
 * Created By  : jason.mckee
 * Updated On  : 2019-04-02 00:58:20
 * Updated By  : jason.mckee
 * URL         : /sys_variable_value.do?sys_id=0b8b6831132c770084a1d8228144b010
 */
(function execute(inputs, outputs) {
	outputs.APIKey = gs.getProperty("instance_name");
})(inputs, outputs);
