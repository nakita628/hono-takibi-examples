<h1 id="cloud-debugger-api">Cloud Debugger API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Examines the call stack and variables of a running application without stopping or slowing it down.

Base URLs:

* <a href="https://clouddebugger.googleapis.com/">https://clouddebugger.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/debugger">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud_debugger|Use Stackdriver Debugger|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud_debugger|Use Stackdriver Debugger|

<h1 id="cloud-debugger-api-controller">controller</h1>

## clouddebugger.controller.debuggees.register

<a id="opIdclouddebugger.controller.debuggees.register"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/controller/debuggees/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "debuggee": {
      "agentVersion": "string",
      "canaryMode": "CANARY_MODE_UNSPECIFIED",
      "description": "string",
      "extSourceContexts": [
        {
          "context": {
            "cloudRepo": {
              "aliasContext": {
                "kind": "ANY",
                "name": "string"
              },
              "aliasName": "string",
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              },
              "revisionId": "string"
            },
            "cloudWorkspace": {
              "snapshotId": "string",
              "workspaceId": {
                "name": "string",
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                }
              }
            },
            "gerrit": {
              "aliasContext": {
                "kind": "ANY",
                "name": "string"
              },
              "aliasName": "string",
              "gerritProject": "string",
              "hostUri": "string",
              "revisionId": "string"
            },
            "git": {
              "revisionId": "string",
              "url": "string"
            }
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "id": "string",
      "isDisabled": true,
      "isInactive": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "project": "string",
      "sourceContexts": [
        {
          "cloudRepo": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "cloudWorkspace": {
            "snapshotId": "string",
            "workspaceId": {
              "name": "string",
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              }
            }
          },
          "gerrit": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          }
        }
      ],
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "uniquifier": "string"
    }
  }'
```

`POST /v2/controller/debuggees/register`

Registers the debuggee with the controller service. All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method. This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.

> Body parameter

```json
{
  "debuggee": {
    "agentVersion": "string",
    "canaryMode": "CANARY_MODE_UNSPECIFIED",
    "description": "string",
    "extSourceContexts": [
      {
        "context": {
          "cloudRepo": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "cloudWorkspace": {
            "snapshotId": "string",
            "workspaceId": {
              "name": "string",
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              }
            }
          },
          "gerrit": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          }
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "id": "string",
    "isDisabled": true,
    "isInactive": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "project": "string",
    "sourceContexts": [
      {
        "cloudRepo": {
          "aliasContext": {
            "kind": "ANY",
            "name": "string"
          },
          "aliasName": "string",
          "repoId": {
            "projectRepoId": {
              "projectId": "string",
              "repoName": "string"
            },
            "uid": "string"
          },
          "revisionId": "string"
        },
        "cloudWorkspace": {
          "snapshotId": "string",
          "workspaceId": {
            "name": "string",
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            }
          }
        },
        "gerrit": {
          "aliasContext": {
            "kind": "ANY",
            "name": "string"
          },
          "aliasName": "string",
          "gerritProject": "string",
          "hostUri": "string",
          "revisionId": "string"
        },
        "git": {
          "revisionId": "string",
          "url": "string"
        }
      }
    ],
    "status": {
      "description": {
        "format": "string",
        "parameters": [
          "string"
        ]
      },
      "isError": true,
      "refersTo": "UNSPECIFIED"
    },
    "uniquifier": "string"
  }
}
```

<h3 id="clouddebuggercontrollerdebuggeesregister-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[RegisterDebuggeeRequest](#schemaregisterdebuggeerequest)|false|none|
|» debuggee|body|[Debuggee](#schemadebuggee)|false|Required. Debuggee information to register. The fields `project`, `uniquifier`, `description` and `agent_version` of the debuggee must be set.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "agentId": "string",
  "debuggee": {
    "agentVersion": "string",
    "canaryMode": "CANARY_MODE_UNSPECIFIED",
    "description": "string",
    "extSourceContexts": [
      {
        "context": {
          "cloudRepo": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "cloudWorkspace": {
            "snapshotId": "string",
            "workspaceId": {
              "name": "string",
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              }
            }
          },
          "gerrit": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          }
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "id": "string",
    "isDisabled": true,
    "isInactive": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "project": "string",
    "sourceContexts": [
      {
        "cloudRepo": {
          "aliasContext": {
            "kind": "ANY",
            "name": "string"
          },
          "aliasName": "string",
          "repoId": {
            "projectRepoId": {
              "projectId": "string",
              "repoName": "string"
            },
            "uid": "string"
          },
          "revisionId": "string"
        },
        "cloudWorkspace": {
          "snapshotId": "string",
          "workspaceId": {
            "name": "string",
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            }
          }
        },
        "gerrit": {
          "aliasContext": {
            "kind": "ANY",
            "name": "string"
          },
          "aliasName": "string",
          "gerritProject": "string",
          "hostUri": "string",
          "revisionId": "string"
        },
        "git": {
          "revisionId": "string",
          "url": "string"
        }
      }
    ],
    "status": {
      "description": {
        "format": "string",
        "parameters": [
          "string"
        ]
      },
      "isError": true,
      "refersTo": "UNSPECIFIED"
    },
    "uniquifier": "string"
  }
}
```

<h3 id="clouddebuggercontrollerdebuggeesregister-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RegisterDebuggeeResponse](#schemaregisterdebuggeeresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud_debugger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud_debugger )
</aside>

## clouddebugger.controller.debuggees.breakpoints.list

<a id="opIdclouddebugger.controller.debuggees.breakpoints.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/controller/debuggees/string/breakpoints \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/controller/debuggees/{debuggeeId}/breakpoints`

Returns the list of all active breakpoints for the debuggee. The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics. This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.

<h3 id="clouddebuggercontrollerdebuggeesbreakpointslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|debuggeeId|path|string|true|Required. Identifies the debuggee.|
|agentId|query|string|false|Identifies the agent. This is the ID returned in the RegisterDebuggee response.|
|successOnTimeout|query|boolean|false|If set to `true` (recommended), returns `google.rpc.Code.OK` status and sets the `wait_expired` response field to `true` when the server-selected timeout has expired. If set to `false` (deprecated), returns `google.rpc.Code.ABORTED` status when the server-selected timeout has expired.|
|waitToken|query|string|false|A token that, if specified, blocks the method call until the list of active breakpoints has changed, or a server-selected timeout has expired. The value should be set from the `next_wait_token` field in the last response. The initial value should be set to `"init"`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "breakpoints": [
    {
      "action": "CAPTURE",
      "canaryExpireTime": "string",
      "condition": "string",
      "createTime": "string",
      "evaluatedExpressions": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ],
      "expressions": [
        "string"
      ],
      "finalTime": "string",
      "id": "string",
      "isFinalState": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": {
        "column": 0,
        "line": 0,
        "path": "string"
      },
      "logLevel": "INFO",
      "logMessageFormat": "string",
      "stackFrames": [
        {
          "arguments": [
            {
              "members": [
                {}
              ],
              "name": "string",
              "status": {
                "description": {
                  "format": "string",
                  "parameters": [
                    "string"
                  ]
                },
                "isError": true,
                "refersTo": "UNSPECIFIED"
              },
              "type": "string",
              "value": "string",
              "varTableIndex": 0
            }
          ],
          "function": "string",
          "locals": [
            {
              "members": [
                {}
              ],
              "name": "string",
              "status": {
                "description": {
                  "format": "string",
                  "parameters": [
                    "string"
                  ]
                },
                "isError": true,
                "refersTo": "UNSPECIFIED"
              },
              "type": "string",
              "value": "string",
              "varTableIndex": 0
            }
          ],
          "location": {
            "column": 0,
            "line": 0,
            "path": "string"
          }
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "userEmail": "string",
      "variableTable": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ]
    }
  ],
  "nextWaitToken": "string",
  "waitExpired": true
}
```

<h3 id="clouddebuggercontrollerdebuggeesbreakpointslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListActiveBreakpointsResponse](#schemalistactivebreakpointsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud_debugger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud_debugger )
</aside>

## clouddebugger.controller.debuggees.breakpoints.update

<a id="opIdclouddebugger.controller.debuggees.breakpoints.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/controller/debuggees/string/breakpoints/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "breakpoint": {
      "action": "CAPTURE",
      "canaryExpireTime": "string",
      "condition": "string",
      "createTime": "string",
      "evaluatedExpressions": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ],
      "expressions": [
        "string"
      ],
      "finalTime": "string",
      "id": "string",
      "isFinalState": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": {
        "column": 0,
        "line": 0,
        "path": "string"
      },
      "logLevel": "INFO",
      "logMessageFormat": "string",
      "stackFrames": [
        {
          "arguments": [
            {
              "members": [
                {}
              ],
              "name": "string",
              "status": {
                "description": {
                  "format": "string",
                  "parameters": [
                    "string"
                  ]
                },
                "isError": true,
                "refersTo": "UNSPECIFIED"
              },
              "type": "string",
              "value": "string",
              "varTableIndex": 0
            }
          ],
          "function": "string",
          "locals": [
            {
              "members": [
                {}
              ],
              "name": "string",
              "status": {
                "description": {
                  "format": "string",
                  "parameters": [
                    "string"
                  ]
                },
                "isError": true,
                "refersTo": "UNSPECIFIED"
              },
              "type": "string",
              "value": "string",
              "varTableIndex": 0
            }
          ],
          "location": {
            "column": 0,
            "line": 0,
            "path": "string"
          }
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "userEmail": "string",
      "variableTable": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ]
    }
  }'
```

`PUT /v2/controller/debuggees/{debuggeeId}/breakpoints/{id}`

Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service. Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.

> Body parameter

```json
{
  "breakpoint": {
    "action": "CAPTURE",
    "canaryExpireTime": "string",
    "condition": "string",
    "createTime": "string",
    "evaluatedExpressions": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ],
    "expressions": [
      "string"
    ],
    "finalTime": "string",
    "id": "string",
    "isFinalState": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": {
      "column": 0,
      "line": 0,
      "path": "string"
    },
    "logLevel": "INFO",
    "logMessageFormat": "string",
    "stackFrames": [
      {
        "arguments": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "function": "string",
        "locals": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "location": {
          "column": 0,
          "line": 0,
          "path": "string"
        }
      }
    ],
    "state": "STATE_UNSPECIFIED",
    "status": {
      "description": {
        "format": "string",
        "parameters": [
          "string"
        ]
      },
      "isError": true,
      "refersTo": "UNSPECIFIED"
    },
    "userEmail": "string",
    "variableTable": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ]
  }
}
```

<h3 id="clouddebuggercontrollerdebuggeesbreakpointsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|debuggeeId|path|string|true|Required. Identifies the debuggee being debugged.|
|id|path|string|true|Breakpoint identifier, unique in the scope of the debuggee.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[UpdateActiveBreakpointRequest](#schemaupdateactivebreakpointrequest)|false|none|
|» breakpoint|body|[Breakpoint](#schemabreakpoint)|false|Required. Updated breakpoint information. The field `id` must be set. The agent must echo all Breakpoint specification fields in the update.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="clouddebuggercontrollerdebuggeesbreakpointsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UpdateActiveBreakpointResponse](#schemaupdateactivebreakpointresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud_debugger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud_debugger )
</aside>

<h1 id="cloud-debugger-api-debugger">debugger</h1>

## clouddebugger.debugger.debuggees.list

<a id="opIdclouddebugger.debugger.debuggees.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/debugger/debuggees \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/debugger/debuggees`

Lists all the debuggees that the user has access to.

<h3 id="clouddebuggerdebuggerdebuggeeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientVersion|query|string|false|Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).|
|includeInactive|query|boolean|false|When set to `true`, the result includes all debuggees. Otherwise, the result includes only debuggees that are active.|
|project|query|string|false|Required. Project number of a Google Cloud project whose debuggees to list.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "debuggees": [
    {
      "agentVersion": "string",
      "canaryMode": "CANARY_MODE_UNSPECIFIED",
      "description": "string",
      "extSourceContexts": [
        {
          "context": {
            "cloudRepo": {
              "aliasContext": {
                "kind": "ANY",
                "name": "string"
              },
              "aliasName": "string",
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              },
              "revisionId": "string"
            },
            "cloudWorkspace": {
              "snapshotId": "string",
              "workspaceId": {
                "name": "string",
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                }
              }
            },
            "gerrit": {
              "aliasContext": {
                "kind": "ANY",
                "name": "string"
              },
              "aliasName": "string",
              "gerritProject": "string",
              "hostUri": "string",
              "revisionId": "string"
            },
            "git": {
              "revisionId": "string",
              "url": "string"
            }
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "id": "string",
      "isDisabled": true,
      "isInactive": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "project": "string",
      "sourceContexts": [
        {
          "cloudRepo": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "cloudWorkspace": {
            "snapshotId": "string",
            "workspaceId": {
              "name": "string",
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              }
            }
          },
          "gerrit": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          }
        }
      ],
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "uniquifier": "string"
    }
  ]
}
```

<h3 id="clouddebuggerdebuggerdebuggeeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDebuggeesResponse](#schemalistdebuggeesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud_debugger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud_debugger )
</aside>

## clouddebugger.debugger.debuggees.breakpoints.list

<a id="opIdclouddebugger.debugger.debuggees.breakpoints.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/debugger/debuggees/string/breakpoints \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/debugger/debuggees/{debuggeeId}/breakpoints`

Lists all breakpoints for the debuggee.

<h3 id="clouddebuggerdebuggerdebuggeesbreakpointslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|debuggeeId|path|string|true|Required. ID of the debuggee whose breakpoints to list.|
|action.value|query|string|false|Only breakpoints with the specified action will pass the filter.|
|clientVersion|query|string|false|Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).|
|includeAllUsers|query|boolean|false|When set to `true`, the response includes the list of breakpoints set by any user. Otherwise, it includes only breakpoints set by the caller.|
|includeInactive|query|boolean|false|When set to `true`, the response includes active and inactive breakpoints. Otherwise, it includes only active breakpoints.|
|stripResults|query|boolean|false|This field is deprecated. The following fields are always stripped out of the result: `stack_frames`, `evaluated_expressions` and `variable_table`.|
|waitToken|query|string|false|A wait token that, if specified, blocks the call until the breakpoints list has changed, or a server selected timeout has expired. The value should be set from the last response. The error code `google.rpc.Code.ABORTED` (RPC) is returned on wait timeout, which should be called again with the same `wait_token`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action.value|CAPTURE|
|action.value|LOG|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "breakpoints": [
    {
      "action": "CAPTURE",
      "canaryExpireTime": "string",
      "condition": "string",
      "createTime": "string",
      "evaluatedExpressions": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ],
      "expressions": [
        "string"
      ],
      "finalTime": "string",
      "id": "string",
      "isFinalState": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": {
        "column": 0,
        "line": 0,
        "path": "string"
      },
      "logLevel": "INFO",
      "logMessageFormat": "string",
      "stackFrames": [
        {
          "arguments": [
            {
              "members": [
                {}
              ],
              "name": "string",
              "status": {
                "description": {
                  "format": "string",
                  "parameters": [
                    "string"
                  ]
                },
                "isError": true,
                "refersTo": "UNSPECIFIED"
              },
              "type": "string",
              "value": "string",
              "varTableIndex": 0
            }
          ],
          "function": "string",
          "locals": [
            {
              "members": [
                {}
              ],
              "name": "string",
              "status": {
                "description": {
                  "format": "string",
                  "parameters": [
                    "string"
                  ]
                },
                "isError": true,
                "refersTo": "UNSPECIFIED"
              },
              "type": "string",
              "value": "string",
              "varTableIndex": 0
            }
          ],
          "location": {
            "column": 0,
            "line": 0,
            "path": "string"
          }
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "userEmail": "string",
      "variableTable": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ]
    }
  ],
  "nextWaitToken": "string"
}
```

<h3 id="clouddebuggerdebuggerdebuggeesbreakpointslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBreakpointsResponse](#schemalistbreakpointsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud_debugger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud_debugger )
</aside>

## clouddebugger.debugger.debuggees.breakpoints.set

<a id="opIdclouddebugger.debugger.debuggees.breakpoints.set"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/debugger/debuggees/string/breakpoints/set \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "CAPTURE",
    "canaryExpireTime": "string",
    "condition": "string",
    "createTime": "string",
    "evaluatedExpressions": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ],
    "expressions": [
      "string"
    ],
    "finalTime": "string",
    "id": "string",
    "isFinalState": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": {
      "column": 0,
      "line": 0,
      "path": "string"
    },
    "logLevel": "INFO",
    "logMessageFormat": "string",
    "stackFrames": [
      {
        "arguments": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "function": "string",
        "locals": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "location": {
          "column": 0,
          "line": 0,
          "path": "string"
        }
      }
    ],
    "state": "STATE_UNSPECIFIED",
    "status": {
      "description": {
        "format": "string",
        "parameters": [
          "string"
        ]
      },
      "isError": true,
      "refersTo": "UNSPECIFIED"
    },
    "userEmail": "string",
    "variableTable": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ]
  }'
```

`POST /v2/debugger/debuggees/{debuggeeId}/breakpoints/set`

Sets the breakpoint to the debuggee.

> Body parameter

```json
{
  "action": "CAPTURE",
  "canaryExpireTime": "string",
  "condition": "string",
  "createTime": "string",
  "evaluatedExpressions": [
    {
      "members": [
        {}
      ],
      "name": "string",
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "type": "string",
      "value": "string",
      "varTableIndex": 0
    }
  ],
  "expressions": [
    "string"
  ],
  "finalTime": "string",
  "id": "string",
  "isFinalState": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": {
    "column": 0,
    "line": 0,
    "path": "string"
  },
  "logLevel": "INFO",
  "logMessageFormat": "string",
  "stackFrames": [
    {
      "arguments": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ],
      "function": "string",
      "locals": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ],
      "location": {
        "column": 0,
        "line": 0,
        "path": "string"
      }
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "status": {
    "description": {
      "format": "string",
      "parameters": [
        "string"
      ]
    },
    "isError": true,
    "refersTo": "UNSPECIFIED"
  },
  "userEmail": "string",
  "variableTable": [
    {
      "members": [
        {}
      ],
      "name": "string",
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "type": "string",
      "value": "string",
      "varTableIndex": 0
    }
  ]
}
```

<h3 id="clouddebuggerdebuggerdebuggeesbreakpointsset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|debuggeeId|path|string|true|Required. ID of the debuggee where the breakpoint is to be set.|
|canaryOption|query|string|false|The canary option set by the user upon setting breakpoint.|
|clientVersion|query|string|false|Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Breakpoint](#schemabreakpoint)|false|none|
|» action|body|string|false|Action that the agent should perform when the code at the breakpoint location is hit.|
|» canaryExpireTime|body|string(google-datetime)|false|The deadline for the breakpoint to stay in CANARY_ACTIVE state. The value is meaningless when the breakpoint is not in CANARY_ACTIVE state.|
|» condition|body|string|false|Condition that triggers the breakpoint. The condition is a compound boolean expression composed using expressions in a programming language at the source location.|
|» createTime|body|string(google-datetime)|false|Time this breakpoint was created by the server in seconds resolution.|
|» evaluatedExpressions|body|[[Variable](#schemavariable)]|false|Values of evaluated expressions at breakpoint time. The evaluated expressions appear in exactly the same order they are listed in the `expressions` field. The `name` field holds the original expression text, the `value` or `members` field holds the result of the evaluated expression. If the expression cannot be evaluated, the `status` inside the `Variable` will indicate an error and contain the error text.|
|» expressions|body|[string]|false|List of read-only expressions to evaluate at the breakpoint location. The expressions are composed using expressions in the programming language at the source location. If the breakpoint action is `LOG`, the evaluated expressions are included in log statements.|
|» finalTime|body|string(google-datetime)|false|Time this breakpoint was finalized as seen by the server in seconds resolution.|
|» id|body|string|false|Breakpoint identifier, unique in the scope of the debuggee.|
|» isFinalState|body|boolean|false|When true, indicates that this is a final result and the breakpoint state will not change from here on.|
|» labels|body|object|false|A set of custom breakpoint properties, populated by the agent, to be displayed to the user.|
|» » **additionalProperties**|body|string|false|none|
|» location|body|[SourceLocation](#schemasourcelocation)|false|Breakpoint source location.|
|» logLevel|body|string|false|Indicates the severity of the log. Only relevant when action is `LOG`.|
|» logMessageFormat|body|string|false|Only relevant when action is `LOG`. Defines the message to log when the breakpoint hits. The message may include parameter placeholders `$0`, `$1`, etc. These placeholders are replaced with the evaluated value of the appropriate expression. Expressions not referenced in `log_message_format` are not logged. Example: `Message received, id = $0, count = $1` with `expressions` = `[ message.id, message.count ]`.|
|» stackFrames|body|[[StackFrame](#schemastackframe)]|false|The stack at breakpoint time, where stack_frames[0] represents the most recently entered function.|
|» state|body|string|false|The current state of the breakpoint.|
|» status|body|[StatusMessage](#schemastatusmessage)|false|Breakpoint status. The status includes an error flag and a human readable message. This field is usually unset. The message can be either informational or an error message. Regardless, clients should always display the text message back to the user. Error status indicates complete failure of the breakpoint. Example (non-final state): `Still loading symbols...` Examples (final state): * `Invalid line number` referring to location * `Field f not found in class C` referring to condition|
|» userEmail|body|string|false|E-mail address of the user that created this breakpoint|
|» variableTable|body|[[Variable](#schemavariable)]|false|The `variable_table` exists to aid with computation, memory and network traffic optimization. It enables storing a variable once and reference it from multiple variables, including variables stored in the `variable_table` itself. For example, the same `this` object, which may appear at many levels of the stack, can have all of its data stored once in this table. The stack frame variables then would hold only a reference to it. The variable `var_table_index` field is an index into this repeated field. The stored objects are nameless and get their name from the referencing variable. The effective variable is a merge of the referencing variable and the referenced variable.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|canaryOption|CANARY_OPTION_UNSPECIFIED|
|canaryOption|CANARY_OPTION_TRY_ENABLE|
|canaryOption|CANARY_OPTION_TRY_DISABLE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» action|CAPTURE|
|» action|LOG|
|» logLevel|INFO|
|» logLevel|WARNING|
|» logLevel|ERROR|
|» state|STATE_UNSPECIFIED|
|» state|STATE_CANARY_PENDING_AGENTS|
|» state|STATE_CANARY_ACTIVE|
|» state|STATE_ROLLING_TO_ALL|
|» state|STATE_IS_FINAL|

> Example responses

> 200 Response

```json
{
  "breakpoint": {
    "action": "CAPTURE",
    "canaryExpireTime": "string",
    "condition": "string",
    "createTime": "string",
    "evaluatedExpressions": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ],
    "expressions": [
      "string"
    ],
    "finalTime": "string",
    "id": "string",
    "isFinalState": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": {
      "column": 0,
      "line": 0,
      "path": "string"
    },
    "logLevel": "INFO",
    "logMessageFormat": "string",
    "stackFrames": [
      {
        "arguments": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "function": "string",
        "locals": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "location": {
          "column": 0,
          "line": 0,
          "path": "string"
        }
      }
    ],
    "state": "STATE_UNSPECIFIED",
    "status": {
      "description": {
        "format": "string",
        "parameters": [
          "string"
        ]
      },
      "isError": true,
      "refersTo": "UNSPECIFIED"
    },
    "userEmail": "string",
    "variableTable": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ]
  }
}
```

<h3 id="clouddebuggerdebuggerdebuggeesbreakpointsset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SetBreakpointResponse](#schemasetbreakpointresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud_debugger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud_debugger )
</aside>

## clouddebugger.debugger.debuggees.breakpoints.get

<a id="opIdclouddebugger.debugger.debuggees.breakpoints.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/debugger/debuggees/string/breakpoints/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}`

Gets breakpoint information.

<h3 id="clouddebuggerdebuggerdebuggeesbreakpointsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|debuggeeId|path|string|true|Required. ID of the debuggee whose breakpoint to get.|
|breakpointId|path|string|true|Required. ID of the breakpoint to get.|
|clientVersion|query|string|false|Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "breakpoint": {
    "action": "CAPTURE",
    "canaryExpireTime": "string",
    "condition": "string",
    "createTime": "string",
    "evaluatedExpressions": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ],
    "expressions": [
      "string"
    ],
    "finalTime": "string",
    "id": "string",
    "isFinalState": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": {
      "column": 0,
      "line": 0,
      "path": "string"
    },
    "logLevel": "INFO",
    "logMessageFormat": "string",
    "stackFrames": [
      {
        "arguments": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "function": "string",
        "locals": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "location": {
          "column": 0,
          "line": 0,
          "path": "string"
        }
      }
    ],
    "state": "STATE_UNSPECIFIED",
    "status": {
      "description": {
        "format": "string",
        "parameters": [
          "string"
        ]
      },
      "isError": true,
      "refersTo": "UNSPECIFIED"
    },
    "userEmail": "string",
    "variableTable": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ]
  }
}
```

<h3 id="clouddebuggerdebuggerdebuggeesbreakpointsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetBreakpointResponse](#schemagetbreakpointresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud_debugger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud_debugger )
</aside>

## clouddebugger.debugger.debuggees.breakpoints.delete

<a id="opIdclouddebugger.debugger.debuggees.breakpoints.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/debugger/debuggees/string/breakpoints/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}`

Deletes the breakpoint from the debuggee.

<h3 id="clouddebuggerdebuggerdebuggeesbreakpointsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|debuggeeId|path|string|true|Required. ID of the debuggee whose breakpoint to delete.|
|breakpointId|path|string|true|Required. ID of the breakpoint to delete.|
|clientVersion|query|string|false|Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="clouddebuggerdebuggerdebuggeesbreakpointsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud_debugger ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud_debugger )
</aside>

# Schemas

<h2 id="tocS_AliasContext">AliasContext</h2>
<!-- backwards compatibility -->
<a id="schemaaliascontext"></a>
<a id="schema_AliasContext"></a>
<a id="tocSaliascontext"></a>
<a id="tocsaliascontext"></a>

```json
{
  "kind": "ANY",
  "name": "string"
}
```

An alias to a repo revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|The alias kind.|
|name|string|false|none|The alias name.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|ANY|
|kind|FIXED|
|kind|MOVABLE|
|kind|OTHER|

<h2 id="tocS_Breakpoint">Breakpoint</h2>
<!-- backwards compatibility -->
<a id="schemabreakpoint"></a>
<a id="schema_Breakpoint"></a>
<a id="tocSbreakpoint"></a>
<a id="tocsbreakpoint"></a>

```json
{
  "action": "CAPTURE",
  "canaryExpireTime": "string",
  "condition": "string",
  "createTime": "string",
  "evaluatedExpressions": [
    {
      "members": [
        {}
      ],
      "name": "string",
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "type": "string",
      "value": "string",
      "varTableIndex": 0
    }
  ],
  "expressions": [
    "string"
  ],
  "finalTime": "string",
  "id": "string",
  "isFinalState": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": {
    "column": 0,
    "line": 0,
    "path": "string"
  },
  "logLevel": "INFO",
  "logMessageFormat": "string",
  "stackFrames": [
    {
      "arguments": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ],
      "function": "string",
      "locals": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ],
      "location": {
        "column": 0,
        "line": 0,
        "path": "string"
      }
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "status": {
    "description": {
      "format": "string",
      "parameters": [
        "string"
      ]
    },
    "isError": true,
    "refersTo": "UNSPECIFIED"
  },
  "userEmail": "string",
  "variableTable": [
    {
      "members": [
        {}
      ],
      "name": "string",
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "type": "string",
      "value": "string",
      "varTableIndex": 0
    }
  ]
}
```

------------------------------------------------------------------------------ ## Breakpoint (the resource) Represents the breakpoint specification, status and results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action that the agent should perform when the code at the breakpoint location is hit.|
|canaryExpireTime|string(google-datetime)|false|none|The deadline for the breakpoint to stay in CANARY_ACTIVE state. The value is meaningless when the breakpoint is not in CANARY_ACTIVE state.|
|condition|string|false|none|Condition that triggers the breakpoint. The condition is a compound boolean expression composed using expressions in a programming language at the source location.|
|createTime|string(google-datetime)|false|none|Time this breakpoint was created by the server in seconds resolution.|
|evaluatedExpressions|[[Variable](#schemavariable)]|false|none|Values of evaluated expressions at breakpoint time. The evaluated expressions appear in exactly the same order they are listed in the `expressions` field. The `name` field holds the original expression text, the `value` or `members` field holds the result of the evaluated expression. If the expression cannot be evaluated, the `status` inside the `Variable` will indicate an error and contain the error text.|
|expressions|[string]|false|none|List of read-only expressions to evaluate at the breakpoint location. The expressions are composed using expressions in the programming language at the source location. If the breakpoint action is `LOG`, the evaluated expressions are included in log statements.|
|finalTime|string(google-datetime)|false|none|Time this breakpoint was finalized as seen by the server in seconds resolution.|
|id|string|false|none|Breakpoint identifier, unique in the scope of the debuggee.|
|isFinalState|boolean|false|none|When true, indicates that this is a final result and the breakpoint state will not change from here on.|
|labels|object|false|none|A set of custom breakpoint properties, populated by the agent, to be displayed to the user.|
|location|[SourceLocation](#schemasourcelocation)|false|none|Breakpoint source location.|
|logLevel|string|false|none|Indicates the severity of the log. Only relevant when action is `LOG`.|
|logMessageFormat|string|false|none|Only relevant when action is `LOG`. Defines the message to log when the breakpoint hits. The message may include parameter placeholders `$0`, `$1`, etc. These placeholders are replaced with the evaluated value of the appropriate expression. Expressions not referenced in `log_message_format` are not logged. Example: `Message received, id = $0, count = $1` with `expressions` = `[ message.id, message.count ]`.|
|stackFrames|[[StackFrame](#schemastackframe)]|false|none|The stack at breakpoint time, where stack_frames[0] represents the most recently entered function.|
|state|string|false|none|The current state of the breakpoint.|
|status|[StatusMessage](#schemastatusmessage)|false|none|Breakpoint status. The status includes an error flag and a human readable message. This field is usually unset. The message can be either informational or an error message. Regardless, clients should always display the text message back to the user. Error status indicates complete failure of the breakpoint. Example (non-final state): `Still loading symbols...` Examples (final state): * `Invalid line number` referring to location * `Field f not found in class C` referring to condition|
|userEmail|string|false|none|E-mail address of the user that created this breakpoint|
|variableTable|[[Variable](#schemavariable)]|false|none|The `variable_table` exists to aid with computation, memory and network traffic optimization. It enables storing a variable once and reference it from multiple variables, including variables stored in the `variable_table` itself. For example, the same `this` object, which may appear at many levels of the stack, can have all of its data stored once in this table. The stack frame variables then would hold only a reference to it. The variable `var_table_index` field is an index into this repeated field. The stored objects are nameless and get their name from the referencing variable. The effective variable is a merge of the referencing variable and the referenced variable.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|CAPTURE|
|action|LOG|
|logLevel|INFO|
|logLevel|WARNING|
|logLevel|ERROR|
|state|STATE_UNSPECIFIED|
|state|STATE_CANARY_PENDING_AGENTS|
|state|STATE_CANARY_ACTIVE|
|state|STATE_ROLLING_TO_ALL|
|state|STATE_IS_FINAL|

<h2 id="tocS_CloudRepoSourceContext">CloudRepoSourceContext</h2>
<!-- backwards compatibility -->
<a id="schemacloudreposourcecontext"></a>
<a id="schema_CloudRepoSourceContext"></a>
<a id="tocScloudreposourcecontext"></a>
<a id="tocscloudreposourcecontext"></a>

```json
{
  "aliasContext": {
    "kind": "ANY",
    "name": "string"
  },
  "aliasName": "string",
  "repoId": {
    "projectRepoId": {
      "projectId": "string",
      "repoName": "string"
    },
    "uid": "string"
  },
  "revisionId": "string"
}
```

A CloudRepoSourceContext denotes a particular revision in a cloud repo (a repo hosted by the Google Cloud Platform).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliasContext|[AliasContext](#schemaaliascontext)|false|none|An alias, which may be a branch or tag.|
|aliasName|string|false|none|The name of an alias (branch, tag, etc.).|
|repoId|[RepoId](#schemarepoid)|false|none|The ID of the repo.|
|revisionId|string|false|none|A revision ID.|

<h2 id="tocS_CloudWorkspaceId">CloudWorkspaceId</h2>
<!-- backwards compatibility -->
<a id="schemacloudworkspaceid"></a>
<a id="schema_CloudWorkspaceId"></a>
<a id="tocScloudworkspaceid"></a>
<a id="tocscloudworkspaceid"></a>

```json
{
  "name": "string",
  "repoId": {
    "projectRepoId": {
      "projectId": "string",
      "repoName": "string"
    },
    "uid": "string"
  }
}
```

A CloudWorkspaceId is a unique identifier for a cloud workspace. A cloud workspace is a place associated with a repo where modified files can be stored before they are committed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The unique name of the workspace within the repo. This is the name chosen by the client in the Source API's CreateWorkspace method.|
|repoId|[RepoId](#schemarepoid)|false|none|The ID of the repo containing the workspace.|

<h2 id="tocS_CloudWorkspaceSourceContext">CloudWorkspaceSourceContext</h2>
<!-- backwards compatibility -->
<a id="schemacloudworkspacesourcecontext"></a>
<a id="schema_CloudWorkspaceSourceContext"></a>
<a id="tocScloudworkspacesourcecontext"></a>
<a id="tocscloudworkspacesourcecontext"></a>

```json
{
  "snapshotId": "string",
  "workspaceId": {
    "name": "string",
    "repoId": {
      "projectRepoId": {
        "projectId": "string",
        "repoName": "string"
      },
      "uid": "string"
    }
  }
}
```

A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshotId|string|false|none|The ID of the snapshot. An empty snapshot_id refers to the most recent snapshot.|
|workspaceId|[CloudWorkspaceId](#schemacloudworkspaceid)|false|none|The ID of the workspace.|

<h2 id="tocS_Debuggee">Debuggee</h2>
<!-- backwards compatibility -->
<a id="schemadebuggee"></a>
<a id="schema_Debuggee"></a>
<a id="tocSdebuggee"></a>
<a id="tocsdebuggee"></a>

```json
{
  "agentVersion": "string",
  "canaryMode": "CANARY_MODE_UNSPECIFIED",
  "description": "string",
  "extSourceContexts": [
    {
      "context": {
        "cloudRepo": {
          "aliasContext": {
            "kind": "ANY",
            "name": "string"
          },
          "aliasName": "string",
          "repoId": {
            "projectRepoId": {
              "projectId": "string",
              "repoName": "string"
            },
            "uid": "string"
          },
          "revisionId": "string"
        },
        "cloudWorkspace": {
          "snapshotId": "string",
          "workspaceId": {
            "name": "string",
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            }
          }
        },
        "gerrit": {
          "aliasContext": {
            "kind": "ANY",
            "name": "string"
          },
          "aliasName": "string",
          "gerritProject": "string",
          "hostUri": "string",
          "revisionId": "string"
        },
        "git": {
          "revisionId": "string",
          "url": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "id": "string",
  "isDisabled": true,
  "isInactive": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "project": "string",
  "sourceContexts": [
    {
      "cloudRepo": {
        "aliasContext": {
          "kind": "ANY",
          "name": "string"
        },
        "aliasName": "string",
        "repoId": {
          "projectRepoId": {
            "projectId": "string",
            "repoName": "string"
          },
          "uid": "string"
        },
        "revisionId": "string"
      },
      "cloudWorkspace": {
        "snapshotId": "string",
        "workspaceId": {
          "name": "string",
          "repoId": {
            "projectRepoId": {
              "projectId": "string",
              "repoName": "string"
            },
            "uid": "string"
          }
        }
      },
      "gerrit": {
        "aliasContext": {
          "kind": "ANY",
          "name": "string"
        },
        "aliasName": "string",
        "gerritProject": "string",
        "hostUri": "string",
        "revisionId": "string"
      },
      "git": {
        "revisionId": "string",
        "url": "string"
      }
    }
  ],
  "status": {
    "description": {
      "format": "string",
      "parameters": [
        "string"
      ]
    },
    "isError": true,
    "refersTo": "UNSPECIFIED"
  },
  "uniquifier": "string"
}
```

Represents the debugged application. The application may include one or more replicated processes executing the same code. Each of these processes is attached with a debugger agent, carrying out the debugging commands. Agents attached to the same debuggee identify themselves as such by using exactly the same Debuggee message value when registering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentVersion|string|false|none|Version ID of the agent. Schema: `domain/language-platform/vmajor.minor` (for example `google.com/java-gcp/v1.1`).|
|canaryMode|string|false|none|Used when setting breakpoint canary for this debuggee.|
|description|string|false|none|Human readable description of the debuggee. Including a human-readable project name, environment name and version information is recommended.|
|extSourceContexts|[[ExtendedSourceContext](#schemaextendedsourcecontext)]|false|none|References to the locations and revisions of the source code used in the deployed application.|
|id|string|false|none|Unique identifier for the debuggee generated by the controller service.|
|isDisabled|boolean|false|none|If set to `true`, indicates that the agent should disable itself and detach from the debuggee.|
|isInactive|boolean|false|none|If set to `true`, indicates that Controller service does not detect any activity from the debuggee agents and the application is possibly stopped.|
|labels|object|false|none|A set of custom debuggee properties, populated by the agent, to be displayed to the user.|
|project|string|false|none|Project the debuggee is associated with. Use project number or id when registering a Google Cloud Platform project.|
|sourceContexts|[[SourceContext](#schemasourcecontext)]|false|none|References to the locations and revisions of the source code used in the deployed application.|
|status|[StatusMessage](#schemastatusmessage)|false|none|Human readable message to be displayed to the user about this debuggee. Absence of this field indicates no status. The message can be either informational or an error status.|
|uniquifier|string|false|none|Uniquifier to further distinguish the application. It is possible that different applications might have identical values in the debuggee message, thus, incorrectly identified as a single application by the Controller service. This field adds salt to further distinguish the application. Agents should consider seeding this field with value that identifies the code, binary, configuration and environment.|

#### Enumerated Values

|Property|Value|
|---|---|
|canaryMode|CANARY_MODE_UNSPECIFIED|
|canaryMode|CANARY_MODE_ALWAYS_ENABLED|
|canaryMode|CANARY_MODE_ALWAYS_DISABLED|
|canaryMode|CANARY_MODE_DEFAULT_ENABLED|
|canaryMode|CANARY_MODE_DEFAULT_DISABLED|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_ExtendedSourceContext">ExtendedSourceContext</h2>
<!-- backwards compatibility -->
<a id="schemaextendedsourcecontext"></a>
<a id="schema_ExtendedSourceContext"></a>
<a id="tocSextendedsourcecontext"></a>
<a id="tocsextendedsourcecontext"></a>

```json
{
  "context": {
    "cloudRepo": {
      "aliasContext": {
        "kind": "ANY",
        "name": "string"
      },
      "aliasName": "string",
      "repoId": {
        "projectRepoId": {
          "projectId": "string",
          "repoName": "string"
        },
        "uid": "string"
      },
      "revisionId": "string"
    },
    "cloudWorkspace": {
      "snapshotId": "string",
      "workspaceId": {
        "name": "string",
        "repoId": {
          "projectRepoId": {
            "projectId": "string",
            "repoName": "string"
          },
          "uid": "string"
        }
      }
    },
    "gerrit": {
      "aliasContext": {
        "kind": "ANY",
        "name": "string"
      },
      "aliasName": "string",
      "gerritProject": "string",
      "hostUri": "string",
      "revisionId": "string"
    },
    "git": {
      "revisionId": "string",
      "url": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

An ExtendedSourceContext is a SourceContext combined with additional details describing the context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[SourceContext](#schemasourcecontext)|false|none|Any source context.|
|labels|object|false|none|Labels with user defined metadata.|

<h2 id="tocS_FormatMessage">FormatMessage</h2>
<!-- backwards compatibility -->
<a id="schemaformatmessage"></a>
<a id="schema_FormatMessage"></a>
<a id="tocSformatmessage"></a>
<a id="tocsformatmessage"></a>

```json
{
  "format": "string",
  "parameters": [
    "string"
  ]
}
```

Represents a message with parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|Format template for the message. The `format` uses placeholders `$0`, `$1`, etc. to reference parameters. `$$` can be used to denote the `$` character. Examples: * `Failed to load '$0' which helps debug $1 the first time it is loaded. Again, $0 is very important.` * `Please pay $$10 to use $0 instead of $1.`|
|parameters|[string]|false|none|Optional parameters to be embedded into the message.|

<h2 id="tocS_GerritSourceContext">GerritSourceContext</h2>
<!-- backwards compatibility -->
<a id="schemagerritsourcecontext"></a>
<a id="schema_GerritSourceContext"></a>
<a id="tocSgerritsourcecontext"></a>
<a id="tocsgerritsourcecontext"></a>

```json
{
  "aliasContext": {
    "kind": "ANY",
    "name": "string"
  },
  "aliasName": "string",
  "gerritProject": "string",
  "hostUri": "string",
  "revisionId": "string"
}
```

A SourceContext referring to a Gerrit project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliasContext|[AliasContext](#schemaaliascontext)|false|none|An alias, which may be a branch or tag.|
|aliasName|string|false|none|The name of an alias (branch, tag, etc.).|
|gerritProject|string|false|none|The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is hostURI/project.|
|hostUri|string|false|none|The URI of a running Gerrit instance.|
|revisionId|string|false|none|A revision (commit) ID.|

<h2 id="tocS_GetBreakpointResponse">GetBreakpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbreakpointresponse"></a>
<a id="schema_GetBreakpointResponse"></a>
<a id="tocSgetbreakpointresponse"></a>
<a id="tocsgetbreakpointresponse"></a>

```json
{
  "breakpoint": {
    "action": "CAPTURE",
    "canaryExpireTime": "string",
    "condition": "string",
    "createTime": "string",
    "evaluatedExpressions": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ],
    "expressions": [
      "string"
    ],
    "finalTime": "string",
    "id": "string",
    "isFinalState": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": {
      "column": 0,
      "line": 0,
      "path": "string"
    },
    "logLevel": "INFO",
    "logMessageFormat": "string",
    "stackFrames": [
      {
        "arguments": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "function": "string",
        "locals": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "location": {
          "column": 0,
          "line": 0,
          "path": "string"
        }
      }
    ],
    "state": "STATE_UNSPECIFIED",
    "status": {
      "description": {
        "format": "string",
        "parameters": [
          "string"
        ]
      },
      "isError": true,
      "refersTo": "UNSPECIFIED"
    },
    "userEmail": "string",
    "variableTable": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ]
  }
}
```

Response for getting breakpoint information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breakpoint|[Breakpoint](#schemabreakpoint)|false|none|Complete breakpoint state. The fields `id` and `location` are guaranteed to be set.|

<h2 id="tocS_GitSourceContext">GitSourceContext</h2>
<!-- backwards compatibility -->
<a id="schemagitsourcecontext"></a>
<a id="schema_GitSourceContext"></a>
<a id="tocSgitsourcecontext"></a>
<a id="tocsgitsourcecontext"></a>

```json
{
  "revisionId": "string",
  "url": "string"
}
```

A GitSourceContext denotes a particular revision in a third party Git repository (e.g. GitHub).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionId|string|false|none|Git commit hash. required.|
|url|string|false|none|Git repository URL.|

<h2 id="tocS_ListActiveBreakpointsResponse">ListActiveBreakpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistactivebreakpointsresponse"></a>
<a id="schema_ListActiveBreakpointsResponse"></a>
<a id="tocSlistactivebreakpointsresponse"></a>
<a id="tocslistactivebreakpointsresponse"></a>

```json
{
  "breakpoints": [
    {
      "action": "CAPTURE",
      "canaryExpireTime": "string",
      "condition": "string",
      "createTime": "string",
      "evaluatedExpressions": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ],
      "expressions": [
        "string"
      ],
      "finalTime": "string",
      "id": "string",
      "isFinalState": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": {
        "column": 0,
        "line": 0,
        "path": "string"
      },
      "logLevel": "INFO",
      "logMessageFormat": "string",
      "stackFrames": [
        {
          "arguments": [
            {
              "members": [
                {}
              ],
              "name": "string",
              "status": {
                "description": {
                  "format": "string",
                  "parameters": [
                    "string"
                  ]
                },
                "isError": true,
                "refersTo": "UNSPECIFIED"
              },
              "type": "string",
              "value": "string",
              "varTableIndex": 0
            }
          ],
          "function": "string",
          "locals": [
            {
              "members": [
                {}
              ],
              "name": "string",
              "status": {
                "description": {
                  "format": "string",
                  "parameters": [
                    "string"
                  ]
                },
                "isError": true,
                "refersTo": "UNSPECIFIED"
              },
              "type": "string",
              "value": "string",
              "varTableIndex": 0
            }
          ],
          "location": {
            "column": 0,
            "line": 0,
            "path": "string"
          }
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "userEmail": "string",
      "variableTable": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ]
    }
  ],
  "nextWaitToken": "string",
  "waitExpired": true
}
```

Response for listing active breakpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breakpoints|[[Breakpoint](#schemabreakpoint)]|false|none|List of all active breakpoints. The fields `id` and `location` are guaranteed to be set on each breakpoint.|
|nextWaitToken|string|false|none|A token that can be used in the next method call to block until the list of breakpoints changes.|
|waitExpired|boolean|false|none|If set to `true`, indicates that there is no change to the list of active breakpoints and the server-selected timeout has expired. The `breakpoints` field would be empty and should be ignored.|

<h2 id="tocS_ListBreakpointsResponse">ListBreakpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbreakpointsresponse"></a>
<a id="schema_ListBreakpointsResponse"></a>
<a id="tocSlistbreakpointsresponse"></a>
<a id="tocslistbreakpointsresponse"></a>

```json
{
  "breakpoints": [
    {
      "action": "CAPTURE",
      "canaryExpireTime": "string",
      "condition": "string",
      "createTime": "string",
      "evaluatedExpressions": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ],
      "expressions": [
        "string"
      ],
      "finalTime": "string",
      "id": "string",
      "isFinalState": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": {
        "column": 0,
        "line": 0,
        "path": "string"
      },
      "logLevel": "INFO",
      "logMessageFormat": "string",
      "stackFrames": [
        {
          "arguments": [
            {
              "members": [
                {}
              ],
              "name": "string",
              "status": {
                "description": {
                  "format": "string",
                  "parameters": [
                    "string"
                  ]
                },
                "isError": true,
                "refersTo": "UNSPECIFIED"
              },
              "type": "string",
              "value": "string",
              "varTableIndex": 0
            }
          ],
          "function": "string",
          "locals": [
            {
              "members": [
                {}
              ],
              "name": "string",
              "status": {
                "description": {
                  "format": "string",
                  "parameters": [
                    "string"
                  ]
                },
                "isError": true,
                "refersTo": "UNSPECIFIED"
              },
              "type": "string",
              "value": "string",
              "varTableIndex": 0
            }
          ],
          "location": {
            "column": 0,
            "line": 0,
            "path": "string"
          }
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "userEmail": "string",
      "variableTable": [
        {
          "members": [
            {}
          ],
          "name": "string",
          "status": {
            "description": {
              "format": "string",
              "parameters": [
                "string"
              ]
            },
            "isError": true,
            "refersTo": "UNSPECIFIED"
          },
          "type": "string",
          "value": "string",
          "varTableIndex": 0
        }
      ]
    }
  ],
  "nextWaitToken": "string"
}
```

Response for listing breakpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breakpoints|[[Breakpoint](#schemabreakpoint)]|false|none|List of breakpoints matching the request. The fields `id` and `location` are guaranteed to be set on each breakpoint. The fields: `stack_frames`, `evaluated_expressions` and `variable_table` are cleared on each breakpoint regardless of its status.|
|nextWaitToken|string|false|none|A wait token that can be used in the next call to `list` (REST) or `ListBreakpoints` (RPC) to block until the list of breakpoints has changes.|

<h2 id="tocS_ListDebuggeesResponse">ListDebuggeesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdebuggeesresponse"></a>
<a id="schema_ListDebuggeesResponse"></a>
<a id="tocSlistdebuggeesresponse"></a>
<a id="tocslistdebuggeesresponse"></a>

```json
{
  "debuggees": [
    {
      "agentVersion": "string",
      "canaryMode": "CANARY_MODE_UNSPECIFIED",
      "description": "string",
      "extSourceContexts": [
        {
          "context": {
            "cloudRepo": {
              "aliasContext": {
                "kind": "ANY",
                "name": "string"
              },
              "aliasName": "string",
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              },
              "revisionId": "string"
            },
            "cloudWorkspace": {
              "snapshotId": "string",
              "workspaceId": {
                "name": "string",
                "repoId": {
                  "projectRepoId": {
                    "projectId": "string",
                    "repoName": "string"
                  },
                  "uid": "string"
                }
              }
            },
            "gerrit": {
              "aliasContext": {
                "kind": "ANY",
                "name": "string"
              },
              "aliasName": "string",
              "gerritProject": "string",
              "hostUri": "string",
              "revisionId": "string"
            },
            "git": {
              "revisionId": "string",
              "url": "string"
            }
          },
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "id": "string",
      "isDisabled": true,
      "isInactive": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "project": "string",
      "sourceContexts": [
        {
          "cloudRepo": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "cloudWorkspace": {
            "snapshotId": "string",
            "workspaceId": {
              "name": "string",
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              }
            }
          },
          "gerrit": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          }
        }
      ],
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "uniquifier": "string"
    }
  ]
}
```

Response for listing debuggees.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debuggees|[[Debuggee](#schemadebuggee)]|false|none|List of debuggees accessible to the calling user. The fields `debuggee.id` and `description` are guaranteed to be set. The `description` field is a human readable field provided by agents and can be displayed to users.|

<h2 id="tocS_ProjectRepoId">ProjectRepoId</h2>
<!-- backwards compatibility -->
<a id="schemaprojectrepoid"></a>
<a id="schema_ProjectRepoId"></a>
<a id="tocSprojectrepoid"></a>
<a id="tocsprojectrepoid"></a>

```json
{
  "projectId": "string",
  "repoName": "string"
}
```

Selects a repo using a Google Cloud Platform project ID (e.g. winged-cargo-31) and a repo name within that project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|string|false|none|The ID of the project.|
|repoName|string|false|none|The name of the repo. Leave empty for the default repo.|

<h2 id="tocS_RegisterDebuggeeRequest">RegisterDebuggeeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterdebuggeerequest"></a>
<a id="schema_RegisterDebuggeeRequest"></a>
<a id="tocSregisterdebuggeerequest"></a>
<a id="tocsregisterdebuggeerequest"></a>

```json
{
  "debuggee": {
    "agentVersion": "string",
    "canaryMode": "CANARY_MODE_UNSPECIFIED",
    "description": "string",
    "extSourceContexts": [
      {
        "context": {
          "cloudRepo": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "cloudWorkspace": {
            "snapshotId": "string",
            "workspaceId": {
              "name": "string",
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              }
            }
          },
          "gerrit": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          }
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "id": "string",
    "isDisabled": true,
    "isInactive": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "project": "string",
    "sourceContexts": [
      {
        "cloudRepo": {
          "aliasContext": {
            "kind": "ANY",
            "name": "string"
          },
          "aliasName": "string",
          "repoId": {
            "projectRepoId": {
              "projectId": "string",
              "repoName": "string"
            },
            "uid": "string"
          },
          "revisionId": "string"
        },
        "cloudWorkspace": {
          "snapshotId": "string",
          "workspaceId": {
            "name": "string",
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            }
          }
        },
        "gerrit": {
          "aliasContext": {
            "kind": "ANY",
            "name": "string"
          },
          "aliasName": "string",
          "gerritProject": "string",
          "hostUri": "string",
          "revisionId": "string"
        },
        "git": {
          "revisionId": "string",
          "url": "string"
        }
      }
    ],
    "status": {
      "description": {
        "format": "string",
        "parameters": [
          "string"
        ]
      },
      "isError": true,
      "refersTo": "UNSPECIFIED"
    },
    "uniquifier": "string"
  }
}
```

Request to register a debuggee.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debuggee|[Debuggee](#schemadebuggee)|false|none|Required. Debuggee information to register. The fields `project`, `uniquifier`, `description` and `agent_version` of the debuggee must be set.|

<h2 id="tocS_RegisterDebuggeeResponse">RegisterDebuggeeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterdebuggeeresponse"></a>
<a id="schema_RegisterDebuggeeResponse"></a>
<a id="tocSregisterdebuggeeresponse"></a>
<a id="tocsregisterdebuggeeresponse"></a>

```json
{
  "agentId": "string",
  "debuggee": {
    "agentVersion": "string",
    "canaryMode": "CANARY_MODE_UNSPECIFIED",
    "description": "string",
    "extSourceContexts": [
      {
        "context": {
          "cloudRepo": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            },
            "revisionId": "string"
          },
          "cloudWorkspace": {
            "snapshotId": "string",
            "workspaceId": {
              "name": "string",
              "repoId": {
                "projectRepoId": {
                  "projectId": "string",
                  "repoName": "string"
                },
                "uid": "string"
              }
            }
          },
          "gerrit": {
            "aliasContext": {
              "kind": "ANY",
              "name": "string"
            },
            "aliasName": "string",
            "gerritProject": "string",
            "hostUri": "string",
            "revisionId": "string"
          },
          "git": {
            "revisionId": "string",
            "url": "string"
          }
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "id": "string",
    "isDisabled": true,
    "isInactive": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "project": "string",
    "sourceContexts": [
      {
        "cloudRepo": {
          "aliasContext": {
            "kind": "ANY",
            "name": "string"
          },
          "aliasName": "string",
          "repoId": {
            "projectRepoId": {
              "projectId": "string",
              "repoName": "string"
            },
            "uid": "string"
          },
          "revisionId": "string"
        },
        "cloudWorkspace": {
          "snapshotId": "string",
          "workspaceId": {
            "name": "string",
            "repoId": {
              "projectRepoId": {
                "projectId": "string",
                "repoName": "string"
              },
              "uid": "string"
            }
          }
        },
        "gerrit": {
          "aliasContext": {
            "kind": "ANY",
            "name": "string"
          },
          "aliasName": "string",
          "gerritProject": "string",
          "hostUri": "string",
          "revisionId": "string"
        },
        "git": {
          "revisionId": "string",
          "url": "string"
        }
      }
    ],
    "status": {
      "description": {
        "format": "string",
        "parameters": [
          "string"
        ]
      },
      "isError": true,
      "refersTo": "UNSPECIFIED"
    },
    "uniquifier": "string"
  }
}
```

Response for registering a debuggee.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|string|false|none|A unique ID generated for the agent. Each RegisterDebuggee request will generate a new agent ID.|
|debuggee|[Debuggee](#schemadebuggee)|false|none|Debuggee resource. The field `id` is guaranteed to be set (in addition to the echoed fields). If the field `is_disabled` is set to `true`, the agent should disable itself by removing all breakpoints and detaching from the application. It should however continue to poll `RegisterDebuggee` until reenabled.|

<h2 id="tocS_RepoId">RepoId</h2>
<!-- backwards compatibility -->
<a id="schemarepoid"></a>
<a id="schema_RepoId"></a>
<a id="tocSrepoid"></a>
<a id="tocsrepoid"></a>

```json
{
  "projectRepoId": {
    "projectId": "string",
    "repoName": "string"
  },
  "uid": "string"
}
```

A unique identifier for a cloud repo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectRepoId|[ProjectRepoId](#schemaprojectrepoid)|false|none|A combination of a project ID and a repo name.|
|uid|string|false|none|A server-assigned, globally unique identifier.|

<h2 id="tocS_SetBreakpointResponse">SetBreakpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetbreakpointresponse"></a>
<a id="schema_SetBreakpointResponse"></a>
<a id="tocSsetbreakpointresponse"></a>
<a id="tocssetbreakpointresponse"></a>

```json
{
  "breakpoint": {
    "action": "CAPTURE",
    "canaryExpireTime": "string",
    "condition": "string",
    "createTime": "string",
    "evaluatedExpressions": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ],
    "expressions": [
      "string"
    ],
    "finalTime": "string",
    "id": "string",
    "isFinalState": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": {
      "column": 0,
      "line": 0,
      "path": "string"
    },
    "logLevel": "INFO",
    "logMessageFormat": "string",
    "stackFrames": [
      {
        "arguments": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "function": "string",
        "locals": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "location": {
          "column": 0,
          "line": 0,
          "path": "string"
        }
      }
    ],
    "state": "STATE_UNSPECIFIED",
    "status": {
      "description": {
        "format": "string",
        "parameters": [
          "string"
        ]
      },
      "isError": true,
      "refersTo": "UNSPECIFIED"
    },
    "userEmail": "string",
    "variableTable": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ]
  }
}
```

Response for setting a breakpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breakpoint|[Breakpoint](#schemabreakpoint)|false|none|Breakpoint resource. The field `id` is guaranteed to be set (in addition to the echoed fields).|

<h2 id="tocS_SourceContext">SourceContext</h2>
<!-- backwards compatibility -->
<a id="schemasourcecontext"></a>
<a id="schema_SourceContext"></a>
<a id="tocSsourcecontext"></a>
<a id="tocssourcecontext"></a>

```json
{
  "cloudRepo": {
    "aliasContext": {
      "kind": "ANY",
      "name": "string"
    },
    "aliasName": "string",
    "repoId": {
      "projectRepoId": {
        "projectId": "string",
        "repoName": "string"
      },
      "uid": "string"
    },
    "revisionId": "string"
  },
  "cloudWorkspace": {
    "snapshotId": "string",
    "workspaceId": {
      "name": "string",
      "repoId": {
        "projectRepoId": {
          "projectId": "string",
          "repoName": "string"
        },
        "uid": "string"
      }
    }
  },
  "gerrit": {
    "aliasContext": {
      "kind": "ANY",
      "name": "string"
    },
    "aliasName": "string",
    "gerritProject": "string",
    "hostUri": "string",
    "revisionId": "string"
  },
  "git": {
    "revisionId": "string",
    "url": "string"
  }
}
```

A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudRepo|[CloudRepoSourceContext](#schemacloudreposourcecontext)|false|none|A SourceContext referring to a revision in a cloud repo.|
|cloudWorkspace|[CloudWorkspaceSourceContext](#schemacloudworkspacesourcecontext)|false|none|A SourceContext referring to a snapshot in a cloud workspace.|
|gerrit|[GerritSourceContext](#schemagerritsourcecontext)|false|none|A SourceContext referring to a Gerrit project.|
|git|[GitSourceContext](#schemagitsourcecontext)|false|none|A SourceContext referring to any third party Git repo (e.g. GitHub).|

<h2 id="tocS_SourceLocation">SourceLocation</h2>
<!-- backwards compatibility -->
<a id="schemasourcelocation"></a>
<a id="schema_SourceLocation"></a>
<a id="tocSsourcelocation"></a>
<a id="tocssourcelocation"></a>

```json
{
  "column": 0,
  "line": 0,
  "path": "string"
}
```

Represents a location in the source code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|integer(int32)|false|none|Column within a line. The first column in a line as the value `1`. Agents that do not support setting breakpoints on specific columns ignore this field.|
|line|integer(int32)|false|none|Line inside the file. The first line in the file has the value `1`.|
|path|string|false|none|Path to the source file within the source context of the target binary.|

<h2 id="tocS_StackFrame">StackFrame</h2>
<!-- backwards compatibility -->
<a id="schemastackframe"></a>
<a id="schema_StackFrame"></a>
<a id="tocSstackframe"></a>
<a id="tocsstackframe"></a>

```json
{
  "arguments": [
    {
      "members": [
        {}
      ],
      "name": "string",
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "type": "string",
      "value": "string",
      "varTableIndex": 0
    }
  ],
  "function": "string",
  "locals": [
    {
      "members": [
        {}
      ],
      "name": "string",
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "type": "string",
      "value": "string",
      "varTableIndex": 0
    }
  ],
  "location": {
    "column": 0,
    "line": 0,
    "path": "string"
  }
}
```

Represents a stack frame context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arguments|[[Variable](#schemavariable)]|false|none|Set of arguments passed to this function. Note that this might not be populated for all stack frames.|
|function|string|false|none|Demangled function name at the call site.|
|locals|[[Variable](#schemavariable)]|false|none|Set of local variables at the stack frame location. Note that this might not be populated for all stack frames.|
|location|[SourceLocation](#schemasourcelocation)|false|none|Source location of the call site.|

<h2 id="tocS_StatusMessage">StatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessage"></a>
<a id="schema_StatusMessage"></a>
<a id="tocSstatusmessage"></a>
<a id="tocsstatusmessage"></a>

```json
{
  "description": {
    "format": "string",
    "parameters": [
      "string"
    ]
  },
  "isError": true,
  "refersTo": "UNSPECIFIED"
}
```

Represents a contextual status message. The message can indicate an error or informational status, and refer to specific parts of the containing object. For example, the `Breakpoint.status` field can indicate an error referring to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|[FormatMessage](#schemaformatmessage)|false|none|Status message text.|
|isError|boolean|false|none|Distinguishes errors from informational messages.|
|refersTo|string|false|none|Reference to which the message applies.|

#### Enumerated Values

|Property|Value|
|---|---|
|refersTo|UNSPECIFIED|
|refersTo|BREAKPOINT_SOURCE_LOCATION|
|refersTo|BREAKPOINT_CONDITION|
|refersTo|BREAKPOINT_EXPRESSION|
|refersTo|BREAKPOINT_AGE|
|refersTo|BREAKPOINT_CANARY_FAILED|
|refersTo|VARIABLE_NAME|
|refersTo|VARIABLE_VALUE|

<h2 id="tocS_UpdateActiveBreakpointRequest">UpdateActiveBreakpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateactivebreakpointrequest"></a>
<a id="schema_UpdateActiveBreakpointRequest"></a>
<a id="tocSupdateactivebreakpointrequest"></a>
<a id="tocsupdateactivebreakpointrequest"></a>

```json
{
  "breakpoint": {
    "action": "CAPTURE",
    "canaryExpireTime": "string",
    "condition": "string",
    "createTime": "string",
    "evaluatedExpressions": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ],
    "expressions": [
      "string"
    ],
    "finalTime": "string",
    "id": "string",
    "isFinalState": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": {
      "column": 0,
      "line": 0,
      "path": "string"
    },
    "logLevel": "INFO",
    "logMessageFormat": "string",
    "stackFrames": [
      {
        "arguments": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "function": "string",
        "locals": [
          {
            "members": [
              {}
            ],
            "name": "string",
            "status": {
              "description": {
                "format": "string",
                "parameters": [
                  "string"
                ]
              },
              "isError": true,
              "refersTo": "UNSPECIFIED"
            },
            "type": "string",
            "value": "string",
            "varTableIndex": 0
          }
        ],
        "location": {
          "column": 0,
          "line": 0,
          "path": "string"
        }
      }
    ],
    "state": "STATE_UNSPECIFIED",
    "status": {
      "description": {
        "format": "string",
        "parameters": [
          "string"
        ]
      },
      "isError": true,
      "refersTo": "UNSPECIFIED"
    },
    "userEmail": "string",
    "variableTable": [
      {
        "members": [
          {}
        ],
        "name": "string",
        "status": {
          "description": {
            "format": "string",
            "parameters": [
              "string"
            ]
          },
          "isError": true,
          "refersTo": "UNSPECIFIED"
        },
        "type": "string",
        "value": "string",
        "varTableIndex": 0
      }
    ]
  }
}
```

Request to update an active breakpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breakpoint|[Breakpoint](#schemabreakpoint)|false|none|Required. Updated breakpoint information. The field `id` must be set. The agent must echo all Breakpoint specification fields in the update.|

<h2 id="tocS_UpdateActiveBreakpointResponse">UpdateActiveBreakpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateactivebreakpointresponse"></a>
<a id="schema_UpdateActiveBreakpointResponse"></a>
<a id="tocSupdateactivebreakpointresponse"></a>
<a id="tocsupdateactivebreakpointresponse"></a>

```json
{}
```

Response for updating an active breakpoint. The message is defined to allow future extensions.

<h2 id="tocS_Variable">Variable</h2>
<!-- backwards compatibility -->
<a id="schemavariable"></a>
<a id="schema_Variable"></a>
<a id="tocSvariable"></a>
<a id="tocsvariable"></a>

```json
{
  "members": [
    {
      "members": [
        {}
      ],
      "name": "string",
      "status": {
        "description": {
          "format": "string",
          "parameters": [
            "string"
          ]
        },
        "isError": true,
        "refersTo": "UNSPECIFIED"
      },
      "type": "string",
      "value": "string",
      "varTableIndex": 0
    }
  ],
  "name": "string",
  "status": {
    "description": {
      "format": "string",
      "parameters": [
        "string"
      ]
    },
    "isError": true,
    "refersTo": "UNSPECIFIED"
  },
  "type": "string",
  "value": "string",
  "varTableIndex": 0
}
```

Represents a variable or an argument possibly of a compound object type. Note how the following variables are represented: 1) A simple variable: int x = 5 { name: "x", value: "5", type: "int" } // Captured variable 2) A compound object: struct T { int m1; int m2; }; T x = { 3, 7 }; { // Captured variable name: "x", type: "T", members { name: "m1", value: "3", type: "int" }, members { name: "m2", value: "7", type: "int" } } 3) A pointer where the pointee was captured: T x = { 3, 7 }; T* p = &x; { // Captured variable name: "p", type: "T*", value: "0x00500500", members { name: "m1", value: "3", type: "int" }, members { name: "m2", value: "7", type: "int" } } 4) A pointer where the pointee was not captured: T* p = new T; { // Captured variable name: "p", type: "T*", value: "0x00400400" status { is_error: true, description { format: "unavailable" } } } The status should describe the reason for the missing value, such as ``, ``, ``. Note that a null pointer should not have members. 5) An unnamed value: int* p = new int(7); { // Captured variable name: "p", value: "0x00500500", type: "int*", members { value: "7", type: "int" } } 6) An unnamed pointer where the pointee was not captured: int* p = new int(7); int** pp = &p; { // Captured variable name: "pp", value: "0x00500500", type: "int**", members { value: "0x00400400", type: "int*" status { is_error: true, description: { format: "unavailable" } } } } } To optimize computation, memory and network traffic, variables that repeat in the output multiple times can be stored once in a shared variable table and be referenced using the `var_table_index` field. The variables stored in the shared table are nameless and are essentially a partition of the complete variable. To reconstruct the complete variable, merge the referencing variable with the referenced variable. When using the shared variable table, the following variables: T x = { 3, 7 }; T* p = &x; T& r = x; { name: "x", var_table_index: 3, type: "T" } // Captured variables { name: "p", value "0x00500500", type="T*", var_table_index: 3 } { name: "r", type="T&", var_table_index: 3 } { // Shared variable table entry #3: members { name: "m1", value: "3", type: "int" }, members { name: "m2", value: "7", type: "int" } } Note that the pointer address is stored with the referencing variable and not with the referenced variable. This allows the referenced variable to be shared between pointers and references. The type field is optional. The debugger agent may or may not support it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[[Variable](#schemavariable)]|false|none|Members contained or pointed to by the variable.|
|name|string|false|none|Name of the variable, if any.|
|status|[StatusMessage](#schemastatusmessage)|false|none|Status associated with the variable. This field will usually stay unset. A status of a single variable only applies to that variable or expression. The rest of breakpoint data still remains valid. Variables might be reported in error state even when breakpoint is not in final state. The message may refer to variable name with `refers_to` set to `VARIABLE_NAME`. Alternatively `refers_to` will be set to `VARIABLE_VALUE`. In either case variable value and members will be unset. Example of error message applied to name: `Invalid expression syntax`. Example of information message applied to value: `Not captured`. Examples of error message applied to value: * `Malformed string`, * `Field f not found in class C` * `Null pointer dereference`|
|type|string|false|none|Variable type (e.g. `MyClass`). If the variable is split with `var_table_index`, `type` goes next to `value`. The interpretation of a type is agent specific. It is recommended to include the dynamic type rather than a static type of an object.|
|value|string|false|none|Simple value of the variable.|
|varTableIndex|integer(int32)|false|none|Reference to a variable in the shared variable table. More than one variable can reference the same variable in the table. The `var_table_index` field is an index into `variable_table` in Breakpoint.|
