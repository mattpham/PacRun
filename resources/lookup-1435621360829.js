(function(window, undefined) {
  var dictionary = {
    "f145c470-65d3-4236-a362-83e0f026938a": "RunPlayback",
    "8a4897e9-b064-4cfa-b08e-6f61f2d8ba02": "Splash screen",
    "55e00d5e-7936-4b4b-b24a-07fdec5593ba": "RunActive",
    "cb0f3803-4298-408c-9cb5-0872069fc61b": "Activity",
    "be198cca-f82a-49cb-b166-d801e6d66347": "RunSummary",
    "9c1a45a3-084c-4bdc-af9a-a625086a768e": "Run",
    "12f95033-51c0-4a0b-bb64-c80c715ca252": "Error screen",
    "7d402923-c46b-4a1d-8fc1-8e0c4f450e02": "Log",
    "0fc0ffc0-b558-482b-a8b7-9f9951866247": "MapInfo",
    "dfb6c41e-c33b-4e01-a3e3-a7bf1fb1a229": "Home",
    "1432c19d-c891-4d09-9d9e-a0e9b91f9494": "login screen",
    "98f2f8b8-4ac5-48f4-8170-50012a422ebb": "Friends",
    "742367df-871a-4fbd-8035-52ea69b34cb7": "Essentials",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "22ddae66-3594-49c1-9f14-f627215508ac": "Run"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);