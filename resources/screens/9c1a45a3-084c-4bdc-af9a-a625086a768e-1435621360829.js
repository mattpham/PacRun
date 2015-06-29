jQuery("#simulation")
  .on("click", ".s-9c1a45a3-084c-4bdc-af9a-a625086a768e .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Current_row_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0fc0ffc0-b558-482b-a8b7-9f9951866247"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_6": {
                      "attributes": {
                        "color": "#08AE9E",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_7": {
                      "attributes": {
                        "color": "#BCBCBC",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_8": {
                      "attributes": {
                        "color": "#BCBCBC",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_5",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_6": {
                      "attributes": {
                        "color": "#BCBCBC",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_7": {
                      "attributes": {
                        "color": "#08AE9E",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_8": {
                      "attributes": {
                        "color": "#BCBCBC",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_5",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "120"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_7": {
                      "attributes": {
                        "color": "#BCBCBC",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_6": {
                      "attributes": {
                        "color": "#BCBCBC",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_8": {
                      "attributes": {
                        "color": "#08AE9E",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_5",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "240"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    jFirer.parents("tr.datarow").trigger("click");
  })
  .on("pageload", ".s-9c1a45a3-084c-4bdc-af9a-a625086a768e .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Panel_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": ".s-Input_8",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": ".s-Input_8",
                        "property": "jimGetValue"
                      },"mi" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": ".s-Input_9",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": ".s-Input_9",
                        "property": "jimGetValue"
                      },"mi" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Favorited")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "RunData",
                    "element": "#s-RunList",
                    "value": {
                      "field": "favorited"
                    }
                  }
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-RunList .s-Favorited": {
                      "attributes": {
                        "color": "#FF0000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "24.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-RunList .s-Favorited .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-RunList .s-Favorited": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "24.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-RunList .s-Favorited .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Header_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-RunList_1",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datarow",
                        "datamaster": "RunData",
                        "element": "#s-RunList_1",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "favorited"
                          },"1" ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Panel_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": ".s-Input_16",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": ".s-Input_16",
                        "property": "jimGetValue"
                      },"mi" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Input_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": ".s-Input_17",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": ".s-Input_17",
                        "property": "jimGetValue"
                      },"mi" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Favorited_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "RunData",
                    "element": "#s-RunList_1",
                    "value": {
                      "field": "favorited"
                    }
                  }
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-RunList_1 .s-Favorited_1": {
                      "attributes": {
                        "color": "#FF0000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "24.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-RunList_1 .s-Favorited_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-RunList_1 .s-Favorited_1": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "24.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-RunList_1 .s-Favorited_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Panel_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": ".s-Input_23",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": ".s-Input_23",
                        "property": "jimGetValue"
                      },"mi" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Input_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": ".s-Input_24",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": ".s-Input_24",
                        "property": "jimGetValue"
                      },"mi" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Favorited_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "RunData",
                    "element": "#s-RunList_2",
                    "value": {
                      "field": "favorited"
                    }
                  }
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-RunList_2 .s-Favorited_2": {
                      "attributes": {
                        "color": "#FF0000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "24.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-RunList_2 .s-Favorited_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-RunList_2 .s-Favorited_2": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "materialdesignjim-Regular,Arial",
                        "font-size": "24.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-RunList_2 .s-Favorited_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_6": {
                      "attributes": {
                        "color": "#08AE9E",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_6": {
                      "attributes": {
                        "color": "#08AE9E",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_7": {
                      "attributes": {
                        "color": "#BCBCBC",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_8": {
                      "attributes": {
                        "color": "#BCBCBC",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt",
                        "line-height": "10.0pt"
                      }
                    }
                  },{
                    "#s-9c1a45a3-084c-4bdc-af9a-a625086a768e #s-Label_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_5",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });