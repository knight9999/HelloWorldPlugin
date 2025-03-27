#import <Cordova/CDV.h>

@interface HelloWorldPlugin : CDVPlugin

- (void) say: (CDVInvokedUrlCommand*)command;

@end
