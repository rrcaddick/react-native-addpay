// This file exists for two purposes:
// 1. Ensure that both ios and android files present identical types to importers.
// 2. Allow consumers to import the module as if typescript understood react-native suffixes.

import DefaultIos from "./add-pay.ios";
import * as ios from "./add-pay.ios";
import DefaultAndroid from "./add-pay.android";
import * as android from "./add-pay.android";

declare var _test: typeof ios;
declare var _test: typeof android;

declare var _testDefault: typeof DefaultIos;
declare var _testDefault: typeof DefaultAndroid;

export * from "./add-pay.ios";

export * from "./add-pay.android";
export default DefaultAndroid;
