#import "HelloWorldPlugin.h"

@implementation HelloWorldPlugin

- (void) say: (CDVInvokedUrlCommand*)command
{
    NSString* responseString = [command.arguments objectAtIndex:0];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:responseString];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
