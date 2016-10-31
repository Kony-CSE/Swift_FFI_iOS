# Swift_FFI_iOS
Integrating Swift FFI to Kony application

We are supporting Swift and we have created a sample app using Swift FFI. 
Build the application in the IDE and before run the app on Xcode, please follow the below steps,

1. Use Legacy Swift Language - No(for Swift version 3.0)/Yes(for Swift version 2.3 or below).
2. Objective-C Generated Interface Header Name - <AppName>-Swift.h
3. Defines Module - Yes
4. Runpath Search Paths - @executable_path/Frameworks
5. Objective-C Bridging Header - $(SRCROOT)/FFI/<AppName>-Bridging-Header.h

For the given sample app use the Objective-C Bridging Header as$(SRCROOT)/FFI/SwiftFFI-Bridgeing-Header.h and use the Objective-C Generated Interface Header Name as SwiftFFI-Swift.h 

Note: You won't see Swift related build settings in Xcode until you add Swift classes to the VMAppWithkonylib project[This can be done by extracting a KAR file with Swift FFI].
