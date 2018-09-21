
/* App configuration.
 *
 * Currently only selects between AJAX and localstorage API class.
 */

const IS_API_LOCALSTORAGE = true;


import api_ajax from "./serverapi_ajax";
import api_local from "./serverapi_localstorage";

let api = null;

if (IS_API_LOCALSTORAGE) {
    api = api_local;
} else {
    api = api_ajax;
}

export default api;

