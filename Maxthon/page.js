javascript:
var myRuntime = window.external.mxGetRuntime();
var mxTabs = myRuntime.create('mx.browser.tabs');
var TabNum = mxTabs.newTab({url:"http://isebaro.com/linktube/?ln=en",activate: true,position:"afterCurrrent"});