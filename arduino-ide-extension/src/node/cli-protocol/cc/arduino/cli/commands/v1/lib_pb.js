// source: cc/arduino/cli/commands/v1/lib.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var cc_arduino_cli_commands_v1_common_pb = require('../../../../../cc/arduino/cli/commands/v1/common_pb.js');
goog.object.extend(proto, cc_arduino_cli_commands_v1_common_pb);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.DownloadResource', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.MessageCase', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.InstalledLibrary', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.Library', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryDependency', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.MessageCase', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryInstallLocation', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryInstallRequest', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryInstallResponse', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.MessageCase', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryLayout', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryListRequest', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryListResponse', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryLocation', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryRelease', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibrarySearchRequest', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibrarySearchResponse', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibrarySearchStatus', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.MessageCase', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.MessageCase', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.MessageCase', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.SearchedLibrary', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.MessageCase', null, global);
goog.exportSymbol('proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.oneofGroups_);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryInstallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryInstallRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.oneofGroups_);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryInstallResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryInstallResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.oneofGroups_);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.oneofGroups_);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.oneofGroups_);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.repeatedFields_, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibrarySearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.displayName = 'proto.cc.arduino.cli.commands.v1.LibrarySearchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.repeatedFields_, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibrarySearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.displayName = 'proto.cc.arduino.cli.commands.v1.LibrarySearchResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cc.arduino.cli.commands.v1.SearchedLibrary.repeatedFields_, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.SearchedLibrary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.SearchedLibrary.displayName = 'proto.cc.arduino.cli.commands.v1.SearchedLibrary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cc.arduino.cli.commands.v1.LibraryRelease.repeatedFields_, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryRelease, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryRelease.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryRelease';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryDependency = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryDependency, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryDependency.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryDependency';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.DownloadResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.DownloadResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.DownloadResource.displayName = 'proto.cc.arduino.cli.commands.v1.DownloadResource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryListRequest.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.LibraryListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cc.arduino.cli.commands.v1.LibraryListResponse.repeatedFields_, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.LibraryListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.LibraryListResponse.displayName = 'proto.cc.arduino.cli.commands.v1.LibraryListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.InstalledLibrary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.InstalledLibrary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.InstalledLibrary.displayName = 'proto.cc.arduino.cli.commands.v1.InstalledLibrary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.Library = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cc.arduino.cli.commands.v1.Library.repeatedFields_, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.Library, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.Library.displayName = 'proto.cc.arduino.cli.commands.v1.Library';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.displayName = 'proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.oneofGroups_);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.displayName = 'proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result.displayName = 'proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.displayName = 'proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.oneofGroups_);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.displayName = 'proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result.displayName = 'proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = msg.getInstance()) && cc_arduino_cli_commands_v1_common_pb.Instance.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest;
  return proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.Instance;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Instance instance = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.Instance}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.prototype.getInstance = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.Instance} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.Instance, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.Instance|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.MessageCase = {
  MESSAGE_NOT_SET: 0,
  PROGRESS: 1,
  RESULT: 2
};

/**
 * @return {proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.MessageCase}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.prototype.getMessageCase = function() {
  return /** @type {proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.MessageCase} */(jspb.Message.computeOneofCase(this, proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    progress: (f = msg.getProgress()) && cc_arduino_cli_commands_v1_common_pb.DownloadProgress.toObject(includeInstance, f),
    result: (f = msg.getResult()) && proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse;
  return proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.DownloadProgress;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.DownloadProgress.deserializeBinaryFromReader);
      msg.setProgress(value);
      break;
    case 2:
      var value = new proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.DownloadProgress.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result;
  return proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional DownloadProgress progress = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.DownloadProgress}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.prototype.getProgress = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.DownloadProgress} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.DownloadProgress, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.DownloadProgress|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.prototype.setProgress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.prototype.clearProgress = function() {
  return this.setProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.prototype.hasProgress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Result result = 2;
 * @return {?proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.prototype.getResult = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result} */ (
    jspb.Message.getWrapperField(this, proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result, 2));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.Result|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryDownloadResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryInstallRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = msg.getInstance()) && cc_arduino_cli_commands_v1_common_pb.Instance.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 3, ""),
    noDeps: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    noOverwrite: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    installLocation: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryInstallRequest;
  return proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryInstallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.Instance;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoDeps(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoOverwrite(value);
      break;
    case 6:
      var value = /** @type {!proto.cc.arduino.cli.commands.v1.LibraryInstallLocation} */ (reader.readEnum());
      msg.setInstallLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryInstallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNoDeps();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getNoOverwrite();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getInstallLocation();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional Instance instance = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.Instance}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.getInstance = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.Instance} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.Instance, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.Instance|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallRequest} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool no_deps = 4;
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.getNoDeps = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.setNoDeps = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool no_overwrite = 5;
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.getNoOverwrite = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.setNoOverwrite = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional LibraryInstallLocation install_location = 6;
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallLocation}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.getInstallLocation = function() {
  return /** @type {!proto.cc.arduino.cli.commands.v1.LibraryInstallLocation} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryInstallLocation} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallRequest.prototype.setInstallLocation = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.MessageCase = {
  MESSAGE_NOT_SET: 0,
  PROGRESS: 1,
  TASK_PROGRESS: 2,
  RESULT: 3
};

/**
 * @return {proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.MessageCase}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.getMessageCase = function() {
  return /** @type {proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.MessageCase} */(jspb.Message.computeOneofCase(this, proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    progress: (f = msg.getProgress()) && cc_arduino_cli_commands_v1_common_pb.DownloadProgress.toObject(includeInstance, f),
    taskProgress: (f = msg.getTaskProgress()) && cc_arduino_cli_commands_v1_common_pb.TaskProgress.toObject(includeInstance, f),
    result: (f = msg.getResult()) && proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryInstallResponse;
  return proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.DownloadProgress;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.DownloadProgress.deserializeBinaryFromReader);
      msg.setProgress(value);
      break;
    case 2:
      var value = new cc_arduino_cli_commands_v1_common_pb.TaskProgress;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.TaskProgress.deserializeBinaryFromReader);
      msg.setTaskProgress(value);
      break;
    case 3:
      var value = new proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.DownloadProgress.serializeBinaryToWriter
    );
  }
  f = message.getTaskProgress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cc_arduino_cli_commands_v1_common_pb.TaskProgress.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result;
  return proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional DownloadProgress progress = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.DownloadProgress}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.getProgress = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.DownloadProgress} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.DownloadProgress, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.DownloadProgress|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.setProgress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.clearProgress = function() {
  return this.setProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.hasProgress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TaskProgress task_progress = 2;
 * @return {?proto.cc.arduino.cli.commands.v1.TaskProgress}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.getTaskProgress = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.TaskProgress} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.TaskProgress, 2));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.TaskProgress|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.setTaskProgress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.clearTaskProgress = function() {
  return this.setTaskProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.hasTaskProgress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Result result = 3;
 * @return {?proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.getResult = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result} */ (
    jspb.Message.getWrapperField(this, proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result, 3));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.Result|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryInstallResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = msg.getInstance()) && cc_arduino_cli_commands_v1_common_pb.Instance.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    noDeps: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest;
  return proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.Instance;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoDeps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNoDeps();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional Instance instance = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.Instance}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.prototype.getInstance = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.Instance} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.Instance, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.Instance|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool no_deps = 3;
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.prototype.getNoDeps = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeRequest.prototype.setNoDeps = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.MessageCase = {
  MESSAGE_NOT_SET: 0,
  PROGRESS: 1,
  TASK_PROGRESS: 2,
  RESULT: 3
};

/**
 * @return {proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.MessageCase}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.getMessageCase = function() {
  return /** @type {proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.MessageCase} */(jspb.Message.computeOneofCase(this, proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    progress: (f = msg.getProgress()) && cc_arduino_cli_commands_v1_common_pb.DownloadProgress.toObject(includeInstance, f),
    taskProgress: (f = msg.getTaskProgress()) && cc_arduino_cli_commands_v1_common_pb.TaskProgress.toObject(includeInstance, f),
    result: (f = msg.getResult()) && proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse;
  return proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.DownloadProgress;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.DownloadProgress.deserializeBinaryFromReader);
      msg.setProgress(value);
      break;
    case 2:
      var value = new cc_arduino_cli_commands_v1_common_pb.TaskProgress;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.TaskProgress.deserializeBinaryFromReader);
      msg.setTaskProgress(value);
      break;
    case 3:
      var value = new proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.DownloadProgress.serializeBinaryToWriter
    );
  }
  f = message.getTaskProgress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cc_arduino_cli_commands_v1_common_pb.TaskProgress.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result;
  return proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional DownloadProgress progress = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.DownloadProgress}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.getProgress = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.DownloadProgress} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.DownloadProgress, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.DownloadProgress|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.setProgress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.clearProgress = function() {
  return this.setProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.hasProgress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TaskProgress task_progress = 2;
 * @return {?proto.cc.arduino.cli.commands.v1.TaskProgress}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.getTaskProgress = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.TaskProgress} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.TaskProgress, 2));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.TaskProgress|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.setTaskProgress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.clearTaskProgress = function() {
  return this.setTaskProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.hasTaskProgress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Result result = 3;
 * @return {?proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.getResult = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result} */ (
    jspb.Message.getWrapperField(this, proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result, 3));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.Result|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = msg.getInstance()) && cc_arduino_cli_commands_v1_common_pb.Instance.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest;
  return proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.Instance;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Instance instance = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.Instance}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.prototype.getInstance = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.Instance} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.Instance, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.Instance|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.MessageCase = {
  MESSAGE_NOT_SET: 0,
  TASK_PROGRESS: 1,
  RESULT: 2
};

/**
 * @return {proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.MessageCase}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.prototype.getMessageCase = function() {
  return /** @type {proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.MessageCase} */(jspb.Message.computeOneofCase(this, proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskProgress: (f = msg.getTaskProgress()) && cc_arduino_cli_commands_v1_common_pb.TaskProgress.toObject(includeInstance, f),
    result: (f = msg.getResult()) && proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse;
  return proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.TaskProgress;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.TaskProgress.deserializeBinaryFromReader);
      msg.setTaskProgress(value);
      break;
    case 2:
      var value = new proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskProgress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.TaskProgress.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result;
  return proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional TaskProgress task_progress = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.TaskProgress}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.prototype.getTaskProgress = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.TaskProgress} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.TaskProgress, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.TaskProgress|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.prototype.setTaskProgress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.prototype.clearTaskProgress = function() {
  return this.setTaskProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.prototype.hasTaskProgress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Result result = 2;
 * @return {?proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.prototype.getResult = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result} */ (
    jspb.Message.getWrapperField(this, proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result, 2));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.Result|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryUninstallResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = msg.getInstance()) && cc_arduino_cli_commands_v1_common_pb.Instance.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest;
  return proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.Instance;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.Instance.serializeBinaryToWriter
    );
  }
};


/**
 * optional Instance instance = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.Instance}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.prototype.getInstance = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.Instance} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.Instance, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.Instance|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.MessageCase = {
  MESSAGE_NOT_SET: 0,
  PROGRESS: 1,
  TASK_PROGRESS: 2,
  RESULT: 3
};

/**
 * @return {proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.MessageCase}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.getMessageCase = function() {
  return /** @type {proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.MessageCase} */(jspb.Message.computeOneofCase(this, proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    progress: (f = msg.getProgress()) && cc_arduino_cli_commands_v1_common_pb.DownloadProgress.toObject(includeInstance, f),
    taskProgress: (f = msg.getTaskProgress()) && cc_arduino_cli_commands_v1_common_pb.TaskProgress.toObject(includeInstance, f),
    result: (f = msg.getResult()) && proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse;
  return proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.DownloadProgress;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.DownloadProgress.deserializeBinaryFromReader);
      msg.setProgress(value);
      break;
    case 2:
      var value = new cc_arduino_cli_commands_v1_common_pb.TaskProgress;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.TaskProgress.deserializeBinaryFromReader);
      msg.setTaskProgress(value);
      break;
    case 3:
      var value = new proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.DownloadProgress.serializeBinaryToWriter
    );
  }
  f = message.getTaskProgress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cc_arduino_cli_commands_v1_common_pb.TaskProgress.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result;
  return proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional DownloadProgress progress = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.DownloadProgress}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.getProgress = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.DownloadProgress} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.DownloadProgress, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.DownloadProgress|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.setProgress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.clearProgress = function() {
  return this.setProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.hasProgress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TaskProgress task_progress = 2;
 * @return {?proto.cc.arduino.cli.commands.v1.TaskProgress}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.getTaskProgress = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.TaskProgress} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.TaskProgress, 2));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.TaskProgress|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.setTaskProgress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.clearTaskProgress = function() {
  return this.setTaskProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.hasTaskProgress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Result result = 3;
 * @return {?proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.getResult = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result} */ (
    jspb.Message.getWrapperField(this, proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result, 3));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.Result|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryUpgradeAllResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = msg.getInstance()) && cc_arduino_cli_commands_v1_common_pb.Instance.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 3, ""),
    doNotUpdateInstalledLibraries: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest;
  return proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.Instance;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoNotUpdateInstalledLibraries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDoNotUpdateInstalledLibraries();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional Instance instance = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.Instance}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.prototype.getInstance = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.Instance} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.Instance, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.Instance|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool do_not_update_installed_libraries = 4;
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.prototype.getDoNotUpdateInstalledLibraries = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesRequest.prototype.setDoNotUpdateInstalledLibraries = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dependenciesList: jspb.Message.toObjectList(msg.getDependenciesList(),
    proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse;
  return proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.deserializeBinaryFromReader);
      msg.addDependencies(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDependenciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LibraryDependencyStatus dependencies = 1;
 * @return {!Array<!proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus>}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.prototype.getDependenciesList = function() {
  return /** @type{!Array<!proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus, 1));
};


/**
 * @param {!Array<!proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus>} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.prototype.setDependenciesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus}
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.prototype.addDependencies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryResolveDependenciesResponse.prototype.clearDependenciesList = function() {
  return this.setDependenciesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    versionRequired: jspb.Message.getFieldWithDefault(msg, 2, ""),
    versionInstalled: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus}
 */
proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus;
  return proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus}
 */
proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionRequired(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionInstalled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionRequired();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersionInstalled();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version_required = 2;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.prototype.getVersionRequired = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.prototype.setVersionRequired = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version_installed = 3;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.prototype.getVersionInstalled = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryDependencyStatus.prototype.setVersionInstalled = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibrarySearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = msg.getInstance()) && cc_arduino_cli_commands_v1_common_pb.Instance.toObject(includeInstance, f),
    omitReleasesDetails: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    searchArgs: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibrarySearchRequest}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibrarySearchRequest;
  return proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibrarySearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibrarySearchRequest}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.Instance;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOmitReleasesDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibrarySearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getOmitReleasesDetails();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSearchArgs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Instance instance = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.Instance}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.prototype.getInstance = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.Instance} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.Instance, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.Instance|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibrarySearchRequest} returns this
*/
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibrarySearchRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool omit_releases_details = 2;
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.prototype.getOmitReleasesDetails = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibrarySearchRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.prototype.setOmitReleasesDetails = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string search_args = 3;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.prototype.getSearchArgs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibrarySearchRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchRequest.prototype.setSearchArgs = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibrarySearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    librariesList: jspb.Message.toObjectList(msg.getLibrariesList(),
    proto.cc.arduino.cli.commands.v1.SearchedLibrary.toObject, includeInstance),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibrarySearchResponse}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibrarySearchResponse;
  return proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibrarySearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibrarySearchResponse}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cc.arduino.cli.commands.v1.SearchedLibrary;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.SearchedLibrary.deserializeBinaryFromReader);
      msg.addLibraries(value);
      break;
    case 2:
      var value = /** @type {!proto.cc.arduino.cli.commands.v1.LibrarySearchStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibrarySearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLibrariesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cc.arduino.cli.commands.v1.SearchedLibrary.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * repeated SearchedLibrary libraries = 1;
 * @return {!Array<!proto.cc.arduino.cli.commands.v1.SearchedLibrary>}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.prototype.getLibrariesList = function() {
  return /** @type{!Array<!proto.cc.arduino.cli.commands.v1.SearchedLibrary>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cc.arduino.cli.commands.v1.SearchedLibrary, 1));
};


/**
 * @param {!Array<!proto.cc.arduino.cli.commands.v1.SearchedLibrary>} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibrarySearchResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.prototype.setLibrariesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cc.arduino.cli.commands.v1.SearchedLibrary=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cc.arduino.cli.commands.v1.SearchedLibrary}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.prototype.addLibraries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cc.arduino.cli.commands.v1.SearchedLibrary, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.LibrarySearchResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.prototype.clearLibrariesList = function() {
  return this.setLibrariesList([]);
};


/**
 * optional LibrarySearchStatus status = 2;
 * @return {!proto.cc.arduino.cli.commands.v1.LibrarySearchStatus}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.prototype.getStatus = function() {
  return /** @type {!proto.cc.arduino.cli.commands.v1.LibrarySearchStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.cc.arduino.cli.commands.v1.LibrarySearchStatus} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibrarySearchResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.SearchedLibrary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.SearchedLibrary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    releasesMap: (f = msg.getReleasesMap()) ? f.toObject(includeInstance, proto.cc.arduino.cli.commands.v1.LibraryRelease.toObject) : [],
    latest: (f = msg.getLatest()) && proto.cc.arduino.cli.commands.v1.LibraryRelease.toObject(includeInstance, f),
    availableVersionsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.SearchedLibrary}
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.SearchedLibrary;
  return proto.cc.arduino.cli.commands.v1.SearchedLibrary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.SearchedLibrary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.SearchedLibrary}
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = msg.getReleasesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cc.arduino.cli.commands.v1.LibraryRelease.deserializeBinaryFromReader, "", new proto.cc.arduino.cli.commands.v1.LibraryRelease());
         });
      break;
    case 3:
      var value = new proto.cc.arduino.cli.commands.v1.LibraryRelease;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.LibraryRelease.deserializeBinaryFromReader);
      msg.setLatest(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAvailableVersions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.SearchedLibrary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.SearchedLibrary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReleasesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cc.arduino.cli.commands.v1.LibraryRelease.serializeBinaryToWriter);
  }
  f = message.getLatest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cc.arduino.cli.commands.v1.LibraryRelease.serializeBinaryToWriter
    );
  }
  f = message.getAvailableVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.SearchedLibrary} returns this
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, LibraryRelease> releases = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cc.arduino.cli.commands.v1.LibraryRelease>}
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.getReleasesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cc.arduino.cli.commands.v1.LibraryRelease>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.cc.arduino.cli.commands.v1.LibraryRelease));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.SearchedLibrary} returns this
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.clearReleasesMap = function() {
  this.getReleasesMap().clear();
  return this;};


/**
 * optional LibraryRelease latest = 3;
 * @return {?proto.cc.arduino.cli.commands.v1.LibraryRelease}
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.getLatest = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.LibraryRelease} */ (
    jspb.Message.getWrapperField(this, proto.cc.arduino.cli.commands.v1.LibraryRelease, 3));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.LibraryRelease|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.SearchedLibrary} returns this
*/
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.setLatest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.SearchedLibrary} returns this
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.clearLatest = function() {
  return this.setLatest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.hasLatest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string available_versions = 4;
 * @return {!Array<string>}
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.getAvailableVersionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cc.arduino.cli.commands.v1.SearchedLibrary} returns this
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.setAvailableVersionsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cc.arduino.cli.commands.v1.SearchedLibrary} returns this
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.addAvailableVersions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.SearchedLibrary} returns this
 */
proto.cc.arduino.cli.commands.v1.SearchedLibrary.prototype.clearAvailableVersionsList = function() {
  return this.setAvailableVersionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.repeatedFields_ = [8,9,12,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryRelease.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryRelease} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.toObject = function(includeInstance, msg) {
  var f, obj = {
    author: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    maintainer: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sentence: jspb.Message.getFieldWithDefault(msg, 4, ""),
    paragraph: jspb.Message.getFieldWithDefault(msg, 5, ""),
    website: jspb.Message.getFieldWithDefault(msg, 6, ""),
    category: jspb.Message.getFieldWithDefault(msg, 7, ""),
    architecturesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    typesList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    resources: (f = msg.getResources()) && proto.cc.arduino.cli.commands.v1.DownloadResource.toObject(includeInstance, f),
    license: jspb.Message.getFieldWithDefault(msg, 11, ""),
    providesIncludesList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    dependenciesList: jspb.Message.toObjectList(msg.getDependenciesList(),
    proto.cc.arduino.cli.commands.v1.LibraryDependency.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryRelease;
  return proto.cc.arduino.cli.commands.v1.LibraryRelease.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryRelease} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthor(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaintainer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSentence(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParagraph(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebsite(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addArchitectures(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addTypes(value);
      break;
    case 10:
      var value = new proto.cc.arduino.cli.commands.v1.DownloadResource;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.DownloadResource.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setLicense(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addProvidesIncludes(value);
      break;
    case 13:
      var value = new proto.cc.arduino.cli.commands.v1.LibraryDependency;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.LibraryDependency.deserializeBinaryFromReader);
      msg.addDependencies(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryRelease.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryRelease} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaintainer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSentence();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getParagraph();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWebsite();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getArchitecturesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.cc.arduino.cli.commands.v1.DownloadResource.serializeBinaryToWriter
    );
  }
  f = message.getLicense();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getProvidesIncludesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getDependenciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.cc.arduino.cli.commands.v1.LibraryDependency.serializeBinaryToWriter
    );
  }
};


/**
 * optional string author = 1;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.setAuthor = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string maintainer = 3;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.getMaintainer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.setMaintainer = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sentence = 4;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.getSentence = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.setSentence = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string paragraph = 5;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.getParagraph = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.setParagraph = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string website = 6;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.getWebsite = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.setWebsite = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string category = 7;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string architectures = 8;
 * @return {!Array<string>}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.getArchitecturesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.setArchitecturesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.addArchitectures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.clearArchitecturesList = function() {
  return this.setArchitecturesList([]);
};


/**
 * repeated string types = 9;
 * @return {!Array<string>}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.getTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};


/**
 * optional DownloadResource resources = 10;
 * @return {?proto.cc.arduino.cli.commands.v1.DownloadResource}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.getResources = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.DownloadResource} */ (
    jspb.Message.getWrapperField(this, proto.cc.arduino.cli.commands.v1.DownloadResource, 10));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.DownloadResource|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.hasResources = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string license = 11;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.getLicense = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.setLicense = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * repeated string provides_includes = 12;
 * @return {!Array<string>}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.getProvidesIncludesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.setProvidesIncludesList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.addProvidesIncludes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.clearProvidesIncludesList = function() {
  return this.setProvidesIncludesList([]);
};


/**
 * repeated LibraryDependency dependencies = 13;
 * @return {!Array<!proto.cc.arduino.cli.commands.v1.LibraryDependency>}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.getDependenciesList = function() {
  return /** @type{!Array<!proto.cc.arduino.cli.commands.v1.LibraryDependency>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cc.arduino.cli.commands.v1.LibraryDependency, 13));
};


/**
 * @param {!Array<!proto.cc.arduino.cli.commands.v1.LibraryDependency>} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.setDependenciesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDependency=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDependency}
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.addDependencies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.cc.arduino.cli.commands.v1.LibraryDependency, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryRelease} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryRelease.prototype.clearDependenciesList = function() {
  return this.setDependenciesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryDependency.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryDependency.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDependency} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryDependency.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    versionConstraint: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDependency}
 */
proto.cc.arduino.cli.commands.v1.LibraryDependency.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryDependency;
  return proto.cc.arduino.cli.commands.v1.LibraryDependency.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDependency} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDependency}
 */
proto.cc.arduino.cli.commands.v1.LibraryDependency.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionConstraint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryDependency.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryDependency.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryDependency} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryDependency.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionConstraint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryDependency.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDependency} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryDependency.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version_constraint = 2;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryDependency.prototype.getVersionConstraint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryDependency} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryDependency.prototype.setVersionConstraint = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.DownloadResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.DownloadResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    archiveFilename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    checksum: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0),
    cachePath: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.DownloadResource}
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.DownloadResource;
  return proto.cc.arduino.cli.commands.v1.DownloadResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.DownloadResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.DownloadResource}
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setArchiveFilename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setChecksum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCachePath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.DownloadResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.DownloadResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArchiveFilename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChecksum();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCachePath();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.DownloadResource} returns this
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string archive_filename = 2;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.prototype.getArchiveFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.DownloadResource} returns this
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.prototype.setArchiveFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string checksum = 3;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.prototype.getChecksum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.DownloadResource} returns this
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.prototype.setChecksum = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.cc.arduino.cli.commands.v1.DownloadResource} returns this
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string cache_path = 5;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.prototype.getCachePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.DownloadResource} returns this
 */
proto.cc.arduino.cli.commands.v1.DownloadResource.prototype.setCachePath = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = msg.getInstance()) && cc_arduino_cli_commands_v1_common_pb.Instance.toObject(includeInstance, f),
    all: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    updatable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fqbn: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryListRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryListRequest;
  return proto.cc.arduino.cli.commands.v1.LibraryListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryListRequest}
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.Instance;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdatable(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFqbn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getUpdatable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFqbn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional Instance instance = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.Instance}
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.getInstance = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.Instance} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.Instance, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.Instance|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryListRequest} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryListRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool all = 2;
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryListRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.setAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool updatable = 3;
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.getUpdatable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryListRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.setUpdatable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryListRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string fqbn = 5;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.getFqbn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryListRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryListRequest.prototype.setFqbn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cc.arduino.cli.commands.v1.LibraryListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.LibraryListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.LibraryListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    installedLibrariesList: jspb.Message.toObjectList(msg.getInstalledLibrariesList(),
    proto.cc.arduino.cli.commands.v1.InstalledLibrary.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryListResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.LibraryListResponse;
  return proto.cc.arduino.cli.commands.v1.LibraryListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryListResponse}
 */
proto.cc.arduino.cli.commands.v1.LibraryListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cc.arduino.cli.commands.v1.InstalledLibrary;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.InstalledLibrary.deserializeBinaryFromReader);
      msg.addInstalledLibraries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.LibraryListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.LibraryListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.LibraryListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstalledLibrariesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cc.arduino.cli.commands.v1.InstalledLibrary.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InstalledLibrary installed_libraries = 1;
 * @return {!Array<!proto.cc.arduino.cli.commands.v1.InstalledLibrary>}
 */
proto.cc.arduino.cli.commands.v1.LibraryListResponse.prototype.getInstalledLibrariesList = function() {
  return /** @type{!Array<!proto.cc.arduino.cli.commands.v1.InstalledLibrary>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cc.arduino.cli.commands.v1.InstalledLibrary, 1));
};


/**
 * @param {!Array<!proto.cc.arduino.cli.commands.v1.InstalledLibrary>} value
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryListResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.LibraryListResponse.prototype.setInstalledLibrariesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cc.arduino.cli.commands.v1.InstalledLibrary=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cc.arduino.cli.commands.v1.InstalledLibrary}
 */
proto.cc.arduino.cli.commands.v1.LibraryListResponse.prototype.addInstalledLibraries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cc.arduino.cli.commands.v1.InstalledLibrary, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryListResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.LibraryListResponse.prototype.clearInstalledLibrariesList = function() {
  return this.setInstalledLibrariesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.InstalledLibrary.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.InstalledLibrary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.InstalledLibrary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.InstalledLibrary.toObject = function(includeInstance, msg) {
  var f, obj = {
    library: (f = msg.getLibrary()) && proto.cc.arduino.cli.commands.v1.Library.toObject(includeInstance, f),
    release: (f = msg.getRelease()) && proto.cc.arduino.cli.commands.v1.LibraryRelease.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.InstalledLibrary}
 */
proto.cc.arduino.cli.commands.v1.InstalledLibrary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.InstalledLibrary;
  return proto.cc.arduino.cli.commands.v1.InstalledLibrary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.InstalledLibrary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.InstalledLibrary}
 */
proto.cc.arduino.cli.commands.v1.InstalledLibrary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cc.arduino.cli.commands.v1.Library;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.Library.deserializeBinaryFromReader);
      msg.setLibrary(value);
      break;
    case 2:
      var value = new proto.cc.arduino.cli.commands.v1.LibraryRelease;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.LibraryRelease.deserializeBinaryFromReader);
      msg.setRelease(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.InstalledLibrary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.InstalledLibrary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.InstalledLibrary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.InstalledLibrary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLibrary();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cc.arduino.cli.commands.v1.Library.serializeBinaryToWriter
    );
  }
  f = message.getRelease();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cc.arduino.cli.commands.v1.LibraryRelease.serializeBinaryToWriter
    );
  }
};


/**
 * optional Library library = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.Library}
 */
proto.cc.arduino.cli.commands.v1.InstalledLibrary.prototype.getLibrary = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.Library} */ (
    jspb.Message.getWrapperField(this, proto.cc.arduino.cli.commands.v1.Library, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.Library|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.InstalledLibrary} returns this
*/
proto.cc.arduino.cli.commands.v1.InstalledLibrary.prototype.setLibrary = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.InstalledLibrary} returns this
 */
proto.cc.arduino.cli.commands.v1.InstalledLibrary.prototype.clearLibrary = function() {
  return this.setLibrary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.InstalledLibrary.prototype.hasLibrary = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LibraryRelease release = 2;
 * @return {?proto.cc.arduino.cli.commands.v1.LibraryRelease}
 */
proto.cc.arduino.cli.commands.v1.InstalledLibrary.prototype.getRelease = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.LibraryRelease} */ (
    jspb.Message.getWrapperField(this, proto.cc.arduino.cli.commands.v1.LibraryRelease, 2));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.LibraryRelease|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.InstalledLibrary} returns this
*/
proto.cc.arduino.cli.commands.v1.InstalledLibrary.prototype.setRelease = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.InstalledLibrary} returns this
 */
proto.cc.arduino.cli.commands.v1.InstalledLibrary.prototype.clearRelease = function() {
  return this.setRelease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.InstalledLibrary.prototype.hasRelease = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cc.arduino.cli.commands.v1.Library.repeatedFields_ = [8,9,26,27];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.Library.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.Library} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.Library.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    author: jspb.Message.getFieldWithDefault(msg, 2, ""),
    maintainer: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sentence: jspb.Message.getFieldWithDefault(msg, 4, ""),
    paragraph: jspb.Message.getFieldWithDefault(msg, 5, ""),
    website: jspb.Message.getFieldWithDefault(msg, 6, ""),
    category: jspb.Message.getFieldWithDefault(msg, 7, ""),
    architecturesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    typesList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    installDir: jspb.Message.getFieldWithDefault(msg, 10, ""),
    sourceDir: jspb.Message.getFieldWithDefault(msg, 11, ""),
    utilityDir: jspb.Message.getFieldWithDefault(msg, 12, ""),
    containerPlatform: jspb.Message.getFieldWithDefault(msg, 14, ""),
    dotALinkage: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    precompiled: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    ldFlags: jspb.Message.getFieldWithDefault(msg, 19, ""),
    isLegacy: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    version: jspb.Message.getFieldWithDefault(msg, 21, ""),
    license: jspb.Message.getFieldWithDefault(msg, 22, ""),
    propertiesMap: (f = msg.getPropertiesMap()) ? f.toObject(includeInstance, undefined) : [],
    location: jspb.Message.getFieldWithDefault(msg, 24, 0),
    layout: jspb.Message.getFieldWithDefault(msg, 25, 0),
    examplesList: (f = jspb.Message.getRepeatedField(msg, 26)) == null ? undefined : f,
    providesIncludesList: (f = jspb.Message.getRepeatedField(msg, 27)) == null ? undefined : f,
    compatibleWithMap: (f = msg.getCompatibleWithMap()) ? f.toObject(includeInstance, undefined) : [],
    inDevelopment: jspb.Message.getBooleanFieldWithDefault(msg, 29, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.Library}
 */
proto.cc.arduino.cli.commands.v1.Library.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.Library;
  return proto.cc.arduino.cli.commands.v1.Library.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.Library} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.Library}
 */
proto.cc.arduino.cli.commands.v1.Library.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaintainer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSentence(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParagraph(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebsite(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addArchitectures(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addTypes(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstallDir(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceDir(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setUtilityDir(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setContainerPlatform(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDotALinkage(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrecompiled(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setLdFlags(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLegacy(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setLicense(value);
      break;
    case 23:
      var value = msg.getPropertiesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 24:
      var value = /** @type {!proto.cc.arduino.cli.commands.v1.LibraryLocation} */ (reader.readEnum());
      msg.setLocation(value);
      break;
    case 25:
      var value = /** @type {!proto.cc.arduino.cli.commands.v1.LibraryLayout} */ (reader.readEnum());
      msg.setLayout(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.addExamples(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.addProvidesIncludes(value);
      break;
    case 28:
      var value = msg.getCompatibleWithMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
         });
      break;
    case 29:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInDevelopment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.Library.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.Library} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.Library.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaintainer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSentence();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getParagraph();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWebsite();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getArchitecturesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getInstallDir();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSourceDir();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getUtilityDir();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getContainerPlatform();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getDotALinkage();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getPrecompiled();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getLdFlags();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getIsLegacy();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getLicense();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getPropertiesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(23, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getLocation();
  if (f !== 0.0) {
    writer.writeEnum(
      24,
      f
    );
  }
  f = message.getLayout();
  if (f !== 0.0) {
    writer.writeEnum(
      25,
      f
    );
  }
  f = message.getExamplesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      26,
      f
    );
  }
  f = message.getProvidesIncludesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      27,
      f
    );
  }
  f = message.getCompatibleWithMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(28, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
  f = message.getInDevelopment();
  if (f) {
    writer.writeBool(
      29,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string author = 2;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setAuthor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string maintainer = 3;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getMaintainer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setMaintainer = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sentence = 4;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getSentence = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setSentence = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string paragraph = 5;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getParagraph = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setParagraph = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string website = 6;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getWebsite = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setWebsite = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string category = 7;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string architectures = 8;
 * @return {!Array<string>}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getArchitecturesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setArchitecturesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.addArchitectures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.clearArchitecturesList = function() {
  return this.setArchitecturesList([]);
};


/**
 * repeated string types = 9;
 * @return {!Array<string>}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};


/**
 * optional string install_dir = 10;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getInstallDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setInstallDir = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string source_dir = 11;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getSourceDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setSourceDir = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string utility_dir = 12;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getUtilityDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setUtilityDir = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string container_platform = 14;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getContainerPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setContainerPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bool dot_a_linkage = 17;
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getDotALinkage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setDotALinkage = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional bool precompiled = 18;
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getPrecompiled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setPrecompiled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional string ld_flags = 19;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getLdFlags = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setLdFlags = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional bool is_legacy = 20;
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getIsLegacy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setIsLegacy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional string version = 21;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string license = 22;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getLicense = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setLicense = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * map<string, string> properties = 23;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getPropertiesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 23, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.clearPropertiesMap = function() {
  this.getPropertiesMap().clear();
  return this;};


/**
 * optional LibraryLocation location = 24;
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryLocation}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getLocation = function() {
  return /** @type {!proto.cc.arduino.cli.commands.v1.LibraryLocation} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryLocation} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setLocation = function(value) {
  return jspb.Message.setProto3EnumField(this, 24, value);
};


/**
 * optional LibraryLayout layout = 25;
 * @return {!proto.cc.arduino.cli.commands.v1.LibraryLayout}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getLayout = function() {
  return /** @type {!proto.cc.arduino.cli.commands.v1.LibraryLayout} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {!proto.cc.arduino.cli.commands.v1.LibraryLayout} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setLayout = function(value) {
  return jspb.Message.setProto3EnumField(this, 25, value);
};


/**
 * repeated string examples = 26;
 * @return {!Array<string>}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getExamplesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 26));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setExamplesList = function(value) {
  return jspb.Message.setField(this, 26, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.addExamples = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 26, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.clearExamplesList = function() {
  return this.setExamplesList([]);
};


/**
 * repeated string provides_includes = 27;
 * @return {!Array<string>}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getProvidesIncludesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 27));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setProvidesIncludesList = function(value) {
  return jspb.Message.setField(this, 27, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.addProvidesIncludes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 27, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.clearProvidesIncludesList = function() {
  return this.setProvidesIncludesList([]);
};


/**
 * map<string, bool> compatible_with = 28;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getCompatibleWithMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 28, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.clearCompatibleWithMap = function() {
  this.getCompatibleWithMap().clear();
  return this;};


/**
 * optional bool in_development = 29;
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.getInDevelopment = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 29, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.commands.v1.Library} returns this
 */
proto.cc.arduino.cli.commands.v1.Library.prototype.setInDevelopment = function(value) {
  return jspb.Message.setProto3BooleanField(this, 29, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = msg.getInstance()) && cc_arduino_cli_commands_v1_common_pb.Instance.toObject(includeInstance, f),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    overwrite: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest;
  return proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.Instance;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverwrite(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOverwrite();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional Instance instance = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.Instance}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.prototype.getInstance = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.Instance} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.Instance, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.Instance|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest} returns this
*/
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool overwrite = 3;
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.prototype.getOverwrite = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallRequest.prototype.setOverwrite = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.MessageCase = {
  MESSAGE_NOT_SET: 0,
  TASK_PROGRESS: 1,
  RESULT: 2
};

/**
 * @return {proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.MessageCase}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.prototype.getMessageCase = function() {
  return /** @type {proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.MessageCase} */(jspb.Message.computeOneofCase(this, proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskProgress: (f = msg.getTaskProgress()) && cc_arduino_cli_commands_v1_common_pb.TaskProgress.toObject(includeInstance, f),
    result: (f = msg.getResult()) && proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse;
  return proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.TaskProgress;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.TaskProgress.deserializeBinaryFromReader);
      msg.setTaskProgress(value);
      break;
    case 2:
      var value = new proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskProgress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.TaskProgress.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result;
  return proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional TaskProgress task_progress = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.TaskProgress}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.prototype.getTaskProgress = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.TaskProgress} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.TaskProgress, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.TaskProgress|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.prototype.setTaskProgress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.prototype.clearTaskProgress = function() {
  return this.setTaskProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.prototype.hasTaskProgress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Result result = 2;
 * @return {?proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.prototype.getResult = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result} */ (
    jspb.Message.getWrapperField(this, proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result, 2));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.Result|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.ZipLibraryInstallResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = msg.getInstance()) && cc_arduino_cli_commands_v1_common_pb.Instance.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    overwrite: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest;
  return proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.Instance;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverwrite(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOverwrite();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional Instance instance = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.Instance}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.prototype.getInstance = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.Instance} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.Instance, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.Instance|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest} returns this
*/
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool overwrite = 3;
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.prototype.getOverwrite = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest} returns this
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallRequest.prototype.setOverwrite = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.MessageCase = {
  MESSAGE_NOT_SET: 0,
  TASK_PROGRESS: 1,
  RESULT: 2
};

/**
 * @return {proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.MessageCase}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.prototype.getMessageCase = function() {
  return /** @type {proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.MessageCase} */(jspb.Message.computeOneofCase(this, proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskProgress: (f = msg.getTaskProgress()) && cc_arduino_cli_commands_v1_common_pb.TaskProgress.toObject(includeInstance, f),
    result: (f = msg.getResult()) && proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse;
  return proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.TaskProgress;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.TaskProgress.deserializeBinaryFromReader);
      msg.setTaskProgress(value);
      break;
    case 2:
      var value = new proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result;
      reader.readMessage(value,proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskProgress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.TaskProgress.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result;
  return proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional TaskProgress task_progress = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.TaskProgress}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.prototype.getTaskProgress = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.TaskProgress} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.TaskProgress, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.TaskProgress|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.prototype.setTaskProgress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.prototype.clearTaskProgress = function() {
  return this.setTaskProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.prototype.hasTaskProgress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Result result = 2;
 * @return {?proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.prototype.getResult = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result} */ (
    jspb.Message.getWrapperField(this, proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result, 2));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.Result|undefined} value
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse} returns this
*/
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse} returns this
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.commands.v1.GitLibraryInstallResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.cc.arduino.cli.commands.v1.LibraryInstallLocation = {
  LIBRARY_INSTALL_LOCATION_USER: 0,
  LIBRARY_INSTALL_LOCATION_BUILTIN: 1
};

/**
 * @enum {number}
 */
proto.cc.arduino.cli.commands.v1.LibrarySearchStatus = {
  LIBRARY_SEARCH_STATUS_FAILED: 0,
  LIBRARY_SEARCH_STATUS_SUCCESS: 1
};

/**
 * @enum {number}
 */
proto.cc.arduino.cli.commands.v1.LibraryLayout = {
  LIBRARY_LAYOUT_FLAT: 0,
  LIBRARY_LAYOUT_RECURSIVE: 1
};

/**
 * @enum {number}
 */
proto.cc.arduino.cli.commands.v1.LibraryLocation = {
  LIBRARY_LOCATION_BUILTIN: 0,
  LIBRARY_LOCATION_USER: 1,
  LIBRARY_LOCATION_PLATFORM_BUILTIN: 2,
  LIBRARY_LOCATION_REFERENCED_PLATFORM_BUILTIN: 3,
  LIBRARY_LOCATION_UNMANAGED: 4
};

goog.object.extend(exports, proto.cc.arduino.cli.commands.v1);
