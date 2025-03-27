package com.example.plugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

public class HelloWorldPlugin extends CordovaPlugin {

	@Override
	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) throws JSONException {
		if (action.equals("say")) {
			String message = args.getString(0);
			callbackContext.success("HelloWorldPlugin: " + message);
			return true;
		}
		return false;
	}

}
