```
zone.js:461 Unhandled Promise rejection: Error: XHR error (404 Not Found) loading http://localhost:4200/app/contracts/shared.js
	    at XMLHttpRequest.wrapFn [as _onreadystatechange] (http://localhost:4200/vendor/zone.js/dist/zone.js:769:30)
	    at ZoneDelegate.invokeTask (http://localhost:4200/vendor/zone.js/dist/zone.js:356:38)
	    at Zone.runTask (http://localhost:4200/vendor/zone.js/dist/zone.js:256:48)
	    at XMLHttpRequest.ZoneTask.invoke (http://localhost:4200/vendor/zone.js/dist/zone.js:423:34)
	Error loading http://localhost:4200/app/contracts/shared.js as "../shared" from http://localhost:4200/app/contracts/contract-list/contract-list.component.js ; Zone: <root> ; Task: Promise.then ; Value: Error: Error: XHR error (404 Not Found) loading http://localhost:4200/app/contracts/shared.js(…)consoleError @ zone.js:461_loop_1 @ zone.js:490drainMicroTaskQueue @ zone.js:494ZoneTask.invoke @ zone.js:426
zone.js:463 Error: Uncaught (in promise): Error: Error: XHR error (404 Not Found) loading http://localhost:4200/app/contracts/shared.js(…)consoleError @ zone.js:463_loop_1 @ zone.js:490drainMicroTaskQueue @ zone.js:494ZoneTask.invoke @ zone.js:426
```