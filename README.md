This is a test project to test TinEye API in Vue 2

`npm install`

`npm run serve`


http://localhost:8080/test

Click on the test button and check the error in your browser console. You will see the following error:

```
TestTinEyeAPI.vue?e606:40 TypeError: url.URLSearchParams is not a constructor
    at eval (tineye_api_request.js?e53b:145:1)
    at new Promise (<anonymous>)
    at TinEyeApi.request (tineye_api_request.js?e53b:139:1)
    at TinEyeApi.searchUrl (tineye_api_request.js?e53b:259:1)
    at VueComponent.test_tineye_api (TestTinEyeAPI.vue?e606:32:1)
    at invokeWithErrorHandling (vue.runtime.esm.js?2b0e:1863:1)
    at HTMLButtonElement.invoker (vue.runtime.esm.js?2b0e:2188:1)
    at HTMLButtonElement.original._wrapper (vue.runtime.esm.js?2b0e:6961:1)
```
