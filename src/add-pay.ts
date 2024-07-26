import DefaultIos from "./add-pay.ios";
import * as ios from "./add-pay.ios";
import DefaultAndroid from "./add-pay.android";
import * as android from "./add-pay.android";

declare var _test: typeof ios | typeof android;

declare var _testDefault: typeof DefaultIos | typeof DefaultAndroid;

export * from "./add-pay.ios";

export * from "./add-pay.android";

export default DefaultAndroid;