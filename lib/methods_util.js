import is from "./core/is";
import bom from "./core/bom";
import dom from './core/dom';
import func from "./core/func";

const methods_util = {
    ...is,
    ...bom,
    ...dom,
    ...func
}


methods_util.default = methods_util

export default methods_util