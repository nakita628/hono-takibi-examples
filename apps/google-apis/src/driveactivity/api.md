<h1 id="drive-activity-api">Drive Activity API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides a historical view of activity in Google Drive.

Base URLs:

* <a href="https://driveactivity.googleapis.com/">https://driveactivity.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/drive/activity/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/drive.activity|View and add to the activity record of files in your Google Drive|
|https://www.googleapis.com/auth/drive.activity.readonly|View the activity record of files in your Google Drive|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/drive.activity|View and add to the activity record of files in your Google Drive|
|https://www.googleapis.com/auth/drive.activity.readonly|View the activity record of files in your Google Drive|

<h1 id="drive-activity-api-activity">activity</h1>

## driveactivity.activity.query

<a id="opIddriveactivity.activity.query"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/activity:query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ancestorName": "string",
    "consolidationStrategy": {
      "legacy": {},
      "none": {}
    },
    "filter": "string",
    "itemName": "string",
    "pageSize": 0,
    "pageToken": "string"
  }'
```

`POST /v2/activity:query`

Query past activity in Google Drive.

> Body parameter

```json
{
  "ancestorName": "string",
  "consolidationStrategy": {
    "legacy": {},
    "none": {}
  },
  "filter": "string",
  "itemName": "string",
  "pageSize": 0,
  "pageToken": "string"
}
```

<h3 id="driveactivityactivityquery-parameters">Parameters</h3>

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
|body|body|[QueryDriveActivityRequest](#schemaquerydriveactivityrequest)|false|none|
|» ancestorName|body|string|false|Return activities for this Drive folder, plus all children and descendants. The format is `items/ITEM_ID`.|
|» consolidationStrategy|body|[ConsolidationStrategy](#schemaconsolidationstrategy)|false|Details on how to consolidate related actions that make up the activity. If not set, then related actions aren't consolidated.|
|» filter|body|string|false|The filtering for items returned from this query request. The format of the filter string is a sequence of expressions, joined by an optional "AND", where each expression is of the form "field operator value". Supported fields: - `time`: Uses numerical operators on date values either in terms of milliseconds since Jan 1, 1970 or in RFC 3339 format. Examples: - `time > 1452409200000 AND time <= 1492812924310` - `time >= "2016-01-10T01:02:03-05:00"` - `detail.action_detail_case`: Uses the "has" operator (:) and either a singular value or a list of allowed action types enclosed in parentheses, separated by a space. To exclude a result from the response, prepend a hyphen (`-`) to the beginning of the filter string. Examples: - `detail.action_detail_case:RENAME` - `detail.action_detail_case:(CREATE RESTORE)` - `-detail.action_detail_case:MOVE` |
|» itemName|body|string|false|Return activities for this Drive item. The format is `items/ITEM_ID`.|
|» pageSize|body|integer(int32)|false|The minimum number of activities desired in the response; the server attempts to return at least this quantity. The server may also return fewer activities if it has a partial response ready before the request times out. If not set, a default value is used.|
|» pageToken|body|string|false|The token identifies which page of results to return. Set this to the next_page_token value returned from a previous query to obtain the following page of results. If not set, the first page of results is returned.|

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
  "activities": [
    {
      "actions": [
        {
          "actor": {
            "administrator": {},
            "anonymous": {},
            "impersonation": {
              "impersonatedUser": {
                "deletedUser": {},
                "knownUser": {
                  "isCurrentUser": true,
                  "personName": "string"
                },
                "unknownUser": {}
              }
            },
            "system": {
              "type": "TYPE_UNSPECIFIED"
            },
            "user": {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            }
          },
          "detail": {
            "appliedLabelChange": {
              "changes": [
                {
                  "fieldChanges": [
                    {
                      "displayName": "string",
                      "fieldId": "string",
                      "newValue": {
                        "date": {
                          "value": "string"
                        },
                        "integer": {
                          "value": "string"
                        },
                        "selection": {
                          "displayName": "string",
                          "value": "string"
                        },
                        "selectionList": {
                          "values": [
                            {
                              "displayName": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "text": {
                          "value": "string"
                        },
                        "textList": {
                          "values": [
                            {
                              "value": "string"
                            }
                          ]
                        },
                        "user": {
                          "value": "string"
                        },
                        "userList": {
                          "values": [
                            {
                              "value": "string"
                            }
                          ]
                        }
                      },
                      "oldValue": {
                        "date": {
                          "value": "string"
                        },
                        "integer": {
                          "value": "string"
                        },
                        "selection": {
                          "displayName": "string",
                          "value": "string"
                        },
                        "selectionList": {
                          "values": [
                            {
                              "displayName": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "text": {
                          "value": "string"
                        },
                        "textList": {
                          "values": [
                            {
                              "value": "string"
                            }
                          ]
                        },
                        "user": {
                          "value": "string"
                        },
                        "userList": {
                          "values": [
                            {
                              "value": "string"
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "label": "string",
                  "title": "string",
                  "types": [
                    "TYPE_UNSPECIFIED"
                  ]
                }
              ]
            },
            "comment": {
              "assignment": {
                "assignedUser": {
                  "deletedUser": {},
                  "knownUser": {
                    "isCurrentUser": true,
                    "personName": "string"
                  },
                  "unknownUser": {}
                },
                "subtype": "SUBTYPE_UNSPECIFIED"
              },
              "mentionedUsers": [
                {
                  "deletedUser": {},
                  "knownUser": {
                    "isCurrentUser": true,
                    "personName": "string"
                  },
                  "unknownUser": {}
                }
              ],
              "post": {
                "subtype": "SUBTYPE_UNSPECIFIED"
              },
              "suggestion": {
                "subtype": "SUBTYPE_UNSPECIFIED"
              }
            },
            "create": {
              "copy": {
                "originalObject": {
                  "drive": {
                    "name": "string",
                    "title": "string"
                  },
                  "driveItem": {
                    "driveFile": {},
                    "driveFolder": {
                      "type": "TYPE_UNSPECIFIED"
                    },
                    "file": {},
                    "folder": {
                      "type": "TYPE_UNSPECIFIED"
                    },
                    "name": "string",
                    "title": "string"
                  },
                  "teamDrive": {
                    "name": "string",
                    "title": "string"
                  }
                }
              },
              "new": {},
              "upload": {}
            },
            "delete": {
              "type": "TYPE_UNSPECIFIED"
            },
            "dlpChange": {
              "type": "TYPE_UNSPECIFIED"
            },
            "edit": {},
            "move": {
              "addedParents": [
                {
                  "drive": {
                    "name": "string",
                    "title": "string"
                  },
                  "driveItem": {
                    "driveFile": {},
                    "driveFolder": {
                      "type": "TYPE_UNSPECIFIED"
                    },
                    "file": {},
                    "folder": {
                      "type": "TYPE_UNSPECIFIED"
                    },
                    "name": "string",
                    "title": "string"
                  },
                  "teamDrive": {
                    "name": "string",
                    "title": "string"
                  }
                }
              ],
              "removedParents": [
                {
                  "drive": {
                    "name": "string",
                    "title": "string"
                  },
                  "driveItem": {
                    "driveFile": {},
                    "driveFolder": {
                      "type": "TYPE_UNSPECIFIED"
                    },
                    "file": {},
                    "folder": {
                      "type": "TYPE_UNSPECIFIED"
                    },
                    "name": "string",
                    "title": "string"
                  },
                  "teamDrive": {
                    "name": "string",
                    "title": "string"
                  }
                }
              ]
            },
            "permissionChange": {
              "addedPermissions": [
                {
                  "allowDiscovery": true,
                  "anyone": {},
                  "domain": {
                    "legacyId": "string",
                    "name": "string"
                  },
                  "group": {
                    "email": "string",
                    "title": "string"
                  },
                  "role": "ROLE_UNSPECIFIED",
                  "user": {
                    "deletedUser": {},
                    "knownUser": {
                      "isCurrentUser": true,
                      "personName": "string"
                    },
                    "unknownUser": {}
                  }
                }
              ],
              "removedPermissions": [
                {
                  "allowDiscovery": true,
                  "anyone": {},
                  "domain": {
                    "legacyId": "string",
                    "name": "string"
                  },
                  "group": {
                    "email": "string",
                    "title": "string"
                  },
                  "role": "ROLE_UNSPECIFIED",
                  "user": {
                    "deletedUser": {},
                    "knownUser": {
                      "isCurrentUser": true,
                      "personName": "string"
                    },
                    "unknownUser": {}
                  }
                }
              ]
            },
            "reference": {
              "type": "UNSPECIFIED_REFERENCE_TYPE"
            },
            "rename": {
              "newTitle": "string",
              "oldTitle": "string"
            },
            "restore": {
              "type": "TYPE_UNSPECIFIED"
            },
            "settingsChange": {
              "restrictionChanges": [
                {
                  "feature": "FEATURE_UNSPECIFIED",
                  "newRestriction": "RESTRICTION_UNSPECIFIED"
                }
              ]
            }
          },
          "target": {
            "drive": {
              "name": "string",
              "root": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "mimeType": "string",
                "name": "string",
                "owner": {
                  "domain": {
                    "legacyId": "string",
                    "name": "string"
                  },
                  "drive": {
                    "name": "string",
                    "title": "string"
                  },
                  "teamDrive": {
                    "name": "string",
                    "title": "string"
                  },
                  "user": {
                    "deletedUser": {},
                    "knownUser": {
                      "isCurrentUser": true,
                      "personName": "string"
                    },
                    "unknownUser": {}
                  }
                },
                "title": "string"
              },
              "title": "string"
            },
            "driveItem": {
              "driveFile": {},
              "driveFolder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "file": {},
              "folder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "mimeType": "string",
              "name": "string",
              "owner": {
                "domain": {
                  "legacyId": "string",
                  "name": "string"
                },
                "drive": {
                  "name": "string",
                  "title": "string"
                },
                "teamDrive": {
                  "name": "string",
                  "title": "string"
                },
                "user": {
                  "deletedUser": {},
                  "knownUser": {
                    "isCurrentUser": true,
                    "personName": "string"
                  },
                  "unknownUser": {}
                }
              },
              "title": "string"
            },
            "fileComment": {
              "legacyCommentId": "string",
              "legacyDiscussionId": "string",
              "linkToDiscussion": "string",
              "parent": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "mimeType": "string",
                "name": "string",
                "owner": {
                  "domain": {
                    "legacyId": "string",
                    "name": "string"
                  },
                  "drive": {
                    "name": "string",
                    "title": "string"
                  },
                  "teamDrive": {
                    "name": "string",
                    "title": "string"
                  },
                  "user": {
                    "deletedUser": {},
                    "knownUser": {
                      "isCurrentUser": true,
                      "personName": "string"
                    },
                    "unknownUser": {}
                  }
                },
                "title": "string"
              }
            },
            "teamDrive": {
              "name": "string",
              "root": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "mimeType": "string",
                "name": "string",
                "owner": {
                  "domain": {
                    "legacyId": "string",
                    "name": "string"
                  },
                  "drive": {
                    "name": "string",
                    "title": "string"
                  },
                  "teamDrive": {
                    "name": "string",
                    "title": "string"
                  },
                  "user": {
                    "deletedUser": {},
                    "knownUser": {
                      "isCurrentUser": true,
                      "personName": "string"
                    },
                    "unknownUser": {}
                  }
                },
                "title": "string"
              },
              "title": "string"
            }
          },
          "timeRange": {
            "endTime": "string",
            "startTime": "string"
          },
          "timestamp": "string"
        }
      ],
      "actors": [
        {
          "administrator": {},
          "anonymous": {},
          "impersonation": {
            "impersonatedUser": {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            }
          },
          "system": {
            "type": "TYPE_UNSPECIFIED"
          },
          "user": {
            "deletedUser": {},
            "knownUser": {
              "isCurrentUser": true,
              "personName": "string"
            },
            "unknownUser": {}
          }
        }
      ],
      "primaryActionDetail": {
        "appliedLabelChange": {
          "changes": [
            {
              "fieldChanges": [
                {
                  "displayName": "string",
                  "fieldId": "string",
                  "newValue": {
                    "date": {
                      "value": "string"
                    },
                    "integer": {
                      "value": "string"
                    },
                    "selection": {
                      "displayName": "string",
                      "value": "string"
                    },
                    "selectionList": {
                      "values": [
                        {
                          "displayName": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "text": {
                      "value": "string"
                    },
                    "textList": {
                      "values": [
                        {
                          "value": "string"
                        }
                      ]
                    },
                    "user": {
                      "value": "string"
                    },
                    "userList": {
                      "values": [
                        {
                          "value": "string"
                        }
                      ]
                    }
                  },
                  "oldValue": {
                    "date": {
                      "value": "string"
                    },
                    "integer": {
                      "value": "string"
                    },
                    "selection": {
                      "displayName": "string",
                      "value": "string"
                    },
                    "selectionList": {
                      "values": [
                        {
                          "displayName": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "text": {
                      "value": "string"
                    },
                    "textList": {
                      "values": [
                        {
                          "value": "string"
                        }
                      ]
                    },
                    "user": {
                      "value": "string"
                    },
                    "userList": {
                      "values": [
                        {
                          "value": "string"
                        }
                      ]
                    }
                  }
                }
              ],
              "label": "string",
              "title": "string",
              "types": [
                "TYPE_UNSPECIFIED"
              ]
            }
          ]
        },
        "comment": {
          "assignment": {
            "assignedUser": {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            },
            "subtype": "SUBTYPE_UNSPECIFIED"
          },
          "mentionedUsers": [
            {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            }
          ],
          "post": {
            "subtype": "SUBTYPE_UNSPECIFIED"
          },
          "suggestion": {
            "subtype": "SUBTYPE_UNSPECIFIED"
          }
        },
        "create": {
          "copy": {
            "originalObject": {
              "drive": {
                "name": "string",
                "title": "string"
              },
              "driveItem": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              }
            }
          },
          "new": {},
          "upload": {}
        },
        "delete": {
          "type": "TYPE_UNSPECIFIED"
        },
        "dlpChange": {
          "type": "TYPE_UNSPECIFIED"
        },
        "edit": {},
        "move": {
          "addedParents": [
            {
              "drive": {
                "name": "string",
                "title": "string"
              },
              "driveItem": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              }
            }
          ],
          "removedParents": [
            {
              "drive": {
                "name": "string",
                "title": "string"
              },
              "driveItem": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              }
            }
          ]
        },
        "permissionChange": {
          "addedPermissions": [
            {
              "allowDiscovery": true,
              "anyone": {},
              "domain": {
                "legacyId": "string",
                "name": "string"
              },
              "group": {
                "email": "string",
                "title": "string"
              },
              "role": "ROLE_UNSPECIFIED",
              "user": {
                "deletedUser": {},
                "knownUser": {
                  "isCurrentUser": true,
                  "personName": "string"
                },
                "unknownUser": {}
              }
            }
          ],
          "removedPermissions": [
            {
              "allowDiscovery": true,
              "anyone": {},
              "domain": {
                "legacyId": "string",
                "name": "string"
              },
              "group": {
                "email": "string",
                "title": "string"
              },
              "role": "ROLE_UNSPECIFIED",
              "user": {
                "deletedUser": {},
                "knownUser": {
                  "isCurrentUser": true,
                  "personName": "string"
                },
                "unknownUser": {}
              }
            }
          ]
        },
        "reference": {
          "type": "UNSPECIFIED_REFERENCE_TYPE"
        },
        "rename": {
          "newTitle": "string",
          "oldTitle": "string"
        },
        "restore": {
          "type": "TYPE_UNSPECIFIED"
        },
        "settingsChange": {
          "restrictionChanges": [
            {
              "feature": "FEATURE_UNSPECIFIED",
              "newRestriction": "RESTRICTION_UNSPECIFIED"
            }
          ]
        }
      },
      "targets": [
        {
          "drive": {
            "name": "string",
            "root": {
              "driveFile": {},
              "driveFolder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "file": {},
              "folder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "mimeType": "string",
              "name": "string",
              "owner": {
                "domain": {
                  "legacyId": "string",
                  "name": "string"
                },
                "drive": {
                  "name": "string",
                  "title": "string"
                },
                "teamDrive": {
                  "name": "string",
                  "title": "string"
                },
                "user": {
                  "deletedUser": {},
                  "knownUser": {
                    "isCurrentUser": true,
                    "personName": "string"
                  },
                  "unknownUser": {}
                }
              },
              "title": "string"
            },
            "title": "string"
          },
          "driveItem": {
            "driveFile": {},
            "driveFolder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "file": {},
            "folder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "mimeType": "string",
            "name": "string",
            "owner": {
              "domain": {
                "legacyId": "string",
                "name": "string"
              },
              "drive": {
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              },
              "user": {
                "deletedUser": {},
                "knownUser": {
                  "isCurrentUser": true,
                  "personName": "string"
                },
                "unknownUser": {}
              }
            },
            "title": "string"
          },
          "fileComment": {
            "legacyCommentId": "string",
            "legacyDiscussionId": "string",
            "linkToDiscussion": "string",
            "parent": {
              "driveFile": {},
              "driveFolder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "file": {},
              "folder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "mimeType": "string",
              "name": "string",
              "owner": {
                "domain": {
                  "legacyId": "string",
                  "name": "string"
                },
                "drive": {
                  "name": "string",
                  "title": "string"
                },
                "teamDrive": {
                  "name": "string",
                  "title": "string"
                },
                "user": {
                  "deletedUser": {},
                  "knownUser": {
                    "isCurrentUser": true,
                    "personName": "string"
                  },
                  "unknownUser": {}
                }
              },
              "title": "string"
            }
          },
          "teamDrive": {
            "name": "string",
            "root": {
              "driveFile": {},
              "driveFolder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "file": {},
              "folder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "mimeType": "string",
              "name": "string",
              "owner": {
                "domain": {
                  "legacyId": "string",
                  "name": "string"
                },
                "drive": {
                  "name": "string",
                  "title": "string"
                },
                "teamDrive": {
                  "name": "string",
                  "title": "string"
                },
                "user": {
                  "deletedUser": {},
                  "knownUser": {
                    "isCurrentUser": true,
                    "personName": "string"
                  },
                  "unknownUser": {}
                }
              },
              "title": "string"
            },
            "title": "string"
          }
        }
      ],
      "timeRange": {
        "endTime": "string",
        "startTime": "string"
      },
      "timestamp": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="driveactivityactivityquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[QueryDriveActivityResponse](#schemaquerydriveactivityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.activity ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.activity ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.activity.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.activity.readonly )
</aside>

# Schemas

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "actor": {
    "administrator": {},
    "anonymous": {},
    "impersonation": {
      "impersonatedUser": {
        "deletedUser": {},
        "knownUser": {
          "isCurrentUser": true,
          "personName": "string"
        },
        "unknownUser": {}
      }
    },
    "system": {
      "type": "TYPE_UNSPECIFIED"
    },
    "user": {
      "deletedUser": {},
      "knownUser": {
        "isCurrentUser": true,
        "personName": "string"
      },
      "unknownUser": {}
    }
  },
  "detail": {
    "appliedLabelChange": {
      "changes": [
        {
          "fieldChanges": [
            {
              "displayName": "string",
              "fieldId": "string",
              "newValue": {
                "date": {
                  "value": "string"
                },
                "integer": {
                  "value": "string"
                },
                "selection": {
                  "displayName": "string",
                  "value": "string"
                },
                "selectionList": {
                  "values": [
                    {
                      "displayName": "string",
                      "value": "string"
                    }
                  ]
                },
                "text": {
                  "value": "string"
                },
                "textList": {
                  "values": [
                    {
                      "value": "string"
                    }
                  ]
                },
                "user": {
                  "value": "string"
                },
                "userList": {
                  "values": [
                    {
                      "value": "string"
                    }
                  ]
                }
              },
              "oldValue": {
                "date": {
                  "value": "string"
                },
                "integer": {
                  "value": "string"
                },
                "selection": {
                  "displayName": "string",
                  "value": "string"
                },
                "selectionList": {
                  "values": [
                    {
                      "displayName": "string",
                      "value": "string"
                    }
                  ]
                },
                "text": {
                  "value": "string"
                },
                "textList": {
                  "values": [
                    {
                      "value": "string"
                    }
                  ]
                },
                "user": {
                  "value": "string"
                },
                "userList": {
                  "values": [
                    {
                      "value": "string"
                    }
                  ]
                }
              }
            }
          ],
          "label": "string",
          "title": "string",
          "types": [
            "TYPE_UNSPECIFIED"
          ]
        }
      ]
    },
    "comment": {
      "assignment": {
        "assignedUser": {
          "deletedUser": {},
          "knownUser": {
            "isCurrentUser": true,
            "personName": "string"
          },
          "unknownUser": {}
        },
        "subtype": "SUBTYPE_UNSPECIFIED"
      },
      "mentionedUsers": [
        {
          "deletedUser": {},
          "knownUser": {
            "isCurrentUser": true,
            "personName": "string"
          },
          "unknownUser": {}
        }
      ],
      "post": {
        "subtype": "SUBTYPE_UNSPECIFIED"
      },
      "suggestion": {
        "subtype": "SUBTYPE_UNSPECIFIED"
      }
    },
    "create": {
      "copy": {
        "originalObject": {
          "drive": {
            "name": "string",
            "title": "string"
          },
          "driveItem": {
            "driveFile": {},
            "driveFolder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "file": {},
            "folder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "name": "string",
            "title": "string"
          },
          "teamDrive": {
            "name": "string",
            "title": "string"
          }
        }
      },
      "new": {},
      "upload": {}
    },
    "delete": {
      "type": "TYPE_UNSPECIFIED"
    },
    "dlpChange": {
      "type": "TYPE_UNSPECIFIED"
    },
    "edit": {},
    "move": {
      "addedParents": [
        {
          "drive": {
            "name": "string",
            "title": "string"
          },
          "driveItem": {
            "driveFile": {},
            "driveFolder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "file": {},
            "folder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "name": "string",
            "title": "string"
          },
          "teamDrive": {
            "name": "string",
            "title": "string"
          }
        }
      ],
      "removedParents": [
        {
          "drive": {
            "name": "string",
            "title": "string"
          },
          "driveItem": {
            "driveFile": {},
            "driveFolder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "file": {},
            "folder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "name": "string",
            "title": "string"
          },
          "teamDrive": {
            "name": "string",
            "title": "string"
          }
        }
      ]
    },
    "permissionChange": {
      "addedPermissions": [
        {
          "allowDiscovery": true,
          "anyone": {},
          "domain": {
            "legacyId": "string",
            "name": "string"
          },
          "group": {
            "email": "string",
            "title": "string"
          },
          "role": "ROLE_UNSPECIFIED",
          "user": {
            "deletedUser": {},
            "knownUser": {
              "isCurrentUser": true,
              "personName": "string"
            },
            "unknownUser": {}
          }
        }
      ],
      "removedPermissions": [
        {
          "allowDiscovery": true,
          "anyone": {},
          "domain": {
            "legacyId": "string",
            "name": "string"
          },
          "group": {
            "email": "string",
            "title": "string"
          },
          "role": "ROLE_UNSPECIFIED",
          "user": {
            "deletedUser": {},
            "knownUser": {
              "isCurrentUser": true,
              "personName": "string"
            },
            "unknownUser": {}
          }
        }
      ]
    },
    "reference": {
      "type": "UNSPECIFIED_REFERENCE_TYPE"
    },
    "rename": {
      "newTitle": "string",
      "oldTitle": "string"
    },
    "restore": {
      "type": "TYPE_UNSPECIFIED"
    },
    "settingsChange": {
      "restrictionChanges": [
        {
          "feature": "FEATURE_UNSPECIFIED",
          "newRestriction": "RESTRICTION_UNSPECIFIED"
        }
      ]
    }
  },
  "target": {
    "drive": {
      "name": "string",
      "root": {
        "driveFile": {},
        "driveFolder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "file": {},
        "folder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "mimeType": "string",
        "name": "string",
        "owner": {
          "domain": {
            "legacyId": "string",
            "name": "string"
          },
          "drive": {
            "name": "string",
            "title": "string"
          },
          "teamDrive": {
            "name": "string",
            "title": "string"
          },
          "user": {
            "deletedUser": {},
            "knownUser": {
              "isCurrentUser": true,
              "personName": "string"
            },
            "unknownUser": {}
          }
        },
        "title": "string"
      },
      "title": "string"
    },
    "driveItem": {
      "driveFile": {},
      "driveFolder": {
        "type": "TYPE_UNSPECIFIED"
      },
      "file": {},
      "folder": {
        "type": "TYPE_UNSPECIFIED"
      },
      "mimeType": "string",
      "name": "string",
      "owner": {
        "domain": {
          "legacyId": "string",
          "name": "string"
        },
        "drive": {
          "name": "string",
          "title": "string"
        },
        "teamDrive": {
          "name": "string",
          "title": "string"
        },
        "user": {
          "deletedUser": {},
          "knownUser": {
            "isCurrentUser": true,
            "personName": "string"
          },
          "unknownUser": {}
        }
      },
      "title": "string"
    },
    "fileComment": {
      "legacyCommentId": "string",
      "legacyDiscussionId": "string",
      "linkToDiscussion": "string",
      "parent": {
        "driveFile": {},
        "driveFolder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "file": {},
        "folder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "mimeType": "string",
        "name": "string",
        "owner": {
          "domain": {
            "legacyId": "string",
            "name": "string"
          },
          "drive": {
            "name": "string",
            "title": "string"
          },
          "teamDrive": {
            "name": "string",
            "title": "string"
          },
          "user": {
            "deletedUser": {},
            "knownUser": {
              "isCurrentUser": true,
              "personName": "string"
            },
            "unknownUser": {}
          }
        },
        "title": "string"
      }
    },
    "teamDrive": {
      "name": "string",
      "root": {
        "driveFile": {},
        "driveFolder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "file": {},
        "folder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "mimeType": "string",
        "name": "string",
        "owner": {
          "domain": {
            "legacyId": "string",
            "name": "string"
          },
          "drive": {
            "name": "string",
            "title": "string"
          },
          "teamDrive": {
            "name": "string",
            "title": "string"
          },
          "user": {
            "deletedUser": {},
            "knownUser": {
              "isCurrentUser": true,
              "personName": "string"
            },
            "unknownUser": {}
          }
        },
        "title": "string"
      },
      "title": "string"
    }
  },
  "timeRange": {
    "endTime": "string",
    "startTime": "string"
  },
  "timestamp": "string"
}
```

Information about the action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|[Actor](#schemaactor)|false|none|The actor responsible for this action (or empty if all actors are responsible).|
|detail|[ActionDetail](#schemaactiondetail)|false|none|The type and detailed information about the action.|
|target|[Target](#schematarget)|false|none|The target this action affects (or empty if affecting all targets). This represents the state of the target immediately after this action occurred.|
|timeRange|[TimeRange](#schematimerange)|false|none|The action occurred over this time range.|
|timestamp|string(google-datetime)|false|none|The action occurred at this specific time.|

<h2 id="tocS_ActionDetail">ActionDetail</h2>
<!-- backwards compatibility -->
<a id="schemaactiondetail"></a>
<a id="schema_ActionDetail"></a>
<a id="tocSactiondetail"></a>
<a id="tocsactiondetail"></a>

```json
{
  "appliedLabelChange": {
    "changes": [
      {
        "fieldChanges": [
          {
            "displayName": "string",
            "fieldId": "string",
            "newValue": {
              "date": {
                "value": "string"
              },
              "integer": {
                "value": "string"
              },
              "selection": {
                "displayName": "string",
                "value": "string"
              },
              "selectionList": {
                "values": [
                  {
                    "displayName": "string",
                    "value": "string"
                  }
                ]
              },
              "text": {
                "value": "string"
              },
              "textList": {
                "values": [
                  {
                    "value": "string"
                  }
                ]
              },
              "user": {
                "value": "string"
              },
              "userList": {
                "values": [
                  {
                    "value": "string"
                  }
                ]
              }
            },
            "oldValue": {
              "date": {
                "value": "string"
              },
              "integer": {
                "value": "string"
              },
              "selection": {
                "displayName": "string",
                "value": "string"
              },
              "selectionList": {
                "values": [
                  {
                    "displayName": "string",
                    "value": "string"
                  }
                ]
              },
              "text": {
                "value": "string"
              },
              "textList": {
                "values": [
                  {
                    "value": "string"
                  }
                ]
              },
              "user": {
                "value": "string"
              },
              "userList": {
                "values": [
                  {
                    "value": "string"
                  }
                ]
              }
            }
          }
        ],
        "label": "string",
        "title": "string",
        "types": [
          "TYPE_UNSPECIFIED"
        ]
      }
    ]
  },
  "comment": {
    "assignment": {
      "assignedUser": {
        "deletedUser": {},
        "knownUser": {
          "isCurrentUser": true,
          "personName": "string"
        },
        "unknownUser": {}
      },
      "subtype": "SUBTYPE_UNSPECIFIED"
    },
    "mentionedUsers": [
      {
        "deletedUser": {},
        "knownUser": {
          "isCurrentUser": true,
          "personName": "string"
        },
        "unknownUser": {}
      }
    ],
    "post": {
      "subtype": "SUBTYPE_UNSPECIFIED"
    },
    "suggestion": {
      "subtype": "SUBTYPE_UNSPECIFIED"
    }
  },
  "create": {
    "copy": {
      "originalObject": {
        "drive": {
          "name": "string",
          "title": "string"
        },
        "driveItem": {
          "driveFile": {},
          "driveFolder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "file": {},
          "folder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "name": "string",
          "title": "string"
        },
        "teamDrive": {
          "name": "string",
          "title": "string"
        }
      }
    },
    "new": {},
    "upload": {}
  },
  "delete": {
    "type": "TYPE_UNSPECIFIED"
  },
  "dlpChange": {
    "type": "TYPE_UNSPECIFIED"
  },
  "edit": {},
  "move": {
    "addedParents": [
      {
        "drive": {
          "name": "string",
          "title": "string"
        },
        "driveItem": {
          "driveFile": {},
          "driveFolder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "file": {},
          "folder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "name": "string",
          "title": "string"
        },
        "teamDrive": {
          "name": "string",
          "title": "string"
        }
      }
    ],
    "removedParents": [
      {
        "drive": {
          "name": "string",
          "title": "string"
        },
        "driveItem": {
          "driveFile": {},
          "driveFolder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "file": {},
          "folder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "name": "string",
          "title": "string"
        },
        "teamDrive": {
          "name": "string",
          "title": "string"
        }
      }
    ]
  },
  "permissionChange": {
    "addedPermissions": [
      {
        "allowDiscovery": true,
        "anyone": {},
        "domain": {
          "legacyId": "string",
          "name": "string"
        },
        "group": {
          "email": "string",
          "title": "string"
        },
        "role": "ROLE_UNSPECIFIED",
        "user": {
          "deletedUser": {},
          "knownUser": {
            "isCurrentUser": true,
            "personName": "string"
          },
          "unknownUser": {}
        }
      }
    ],
    "removedPermissions": [
      {
        "allowDiscovery": true,
        "anyone": {},
        "domain": {
          "legacyId": "string",
          "name": "string"
        },
        "group": {
          "email": "string",
          "title": "string"
        },
        "role": "ROLE_UNSPECIFIED",
        "user": {
          "deletedUser": {},
          "knownUser": {
            "isCurrentUser": true,
            "personName": "string"
          },
          "unknownUser": {}
        }
      }
    ]
  },
  "reference": {
    "type": "UNSPECIFIED_REFERENCE_TYPE"
  },
  "rename": {
    "newTitle": "string",
    "oldTitle": "string"
  },
  "restore": {
    "type": "TYPE_UNSPECIFIED"
  },
  "settingsChange": {
    "restrictionChanges": [
      {
        "feature": "FEATURE_UNSPECIFIED",
        "newRestriction": "RESTRICTION_UNSPECIFIED"
      }
    ]
  }
}
```

Data describing the type and additional information of an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appliedLabelChange|[AppliedLabelChange](#schemaappliedlabelchange)|false|none|Label was changed.|
|comment|[Comment](#schemacomment)|false|none|A change about comments was made.|
|create|[Create](#schemacreate)|false|none|An object was created.|
|delete|[Delete](#schemadelete)|false|none|An object was deleted.|
|dlpChange|[DataLeakPreventionChange](#schemadataleakpreventionchange)|false|none|A change happened in data leak prevention status.|
|edit|[Edit](#schemaedit)|false|none|An object was edited.|
|move|[Move](#schemamove)|false|none|An object was moved.|
|permissionChange|[PermissionChange](#schemapermissionchange)|false|none|The permission on an object was changed.|
|reference|[ApplicationReference](#schemaapplicationreference)|false|none|An object was referenced in an application outside of Drive/Docs.|
|rename|[Rename](#schemarename)|false|none|An object was renamed.|
|restore|[Restore](#schemarestore)|false|none|A deleted object was restored.|
|settingsChange|[SettingsChange](#schemasettingschange)|false|none|Settings were changed.|

<h2 id="tocS_Actor">Actor</h2>
<!-- backwards compatibility -->
<a id="schemaactor"></a>
<a id="schema_Actor"></a>
<a id="tocSactor"></a>
<a id="tocsactor"></a>

```json
{
  "administrator": {},
  "anonymous": {},
  "impersonation": {
    "impersonatedUser": {
      "deletedUser": {},
      "knownUser": {
        "isCurrentUser": true,
        "personName": "string"
      },
      "unknownUser": {}
    }
  },
  "system": {
    "type": "TYPE_UNSPECIFIED"
  },
  "user": {
    "deletedUser": {},
    "knownUser": {
      "isCurrentUser": true,
      "personName": "string"
    },
    "unknownUser": {}
  }
}
```

The actor of a Drive activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administrator|[Administrator](#schemaadministrator)|false|none|An administrator.|
|anonymous|[AnonymousUser](#schemaanonymoususer)|false|none|An anonymous user.|
|impersonation|[Impersonation](#schemaimpersonation)|false|none|An account acting on behalf of another.|
|system|[SystemEvent](#schemasystemevent)|false|none|A non-user actor (i.e. system triggered).|
|user|[User](#schemauser)|false|none|An end user.|

<h2 id="tocS_Administrator">Administrator</h2>
<!-- backwards compatibility -->
<a id="schemaadministrator"></a>
<a id="schema_Administrator"></a>
<a id="tocSadministrator"></a>
<a id="tocsadministrator"></a>

```json
{}
```

Empty message representing an administrator.

<h2 id="tocS_AnonymousUser">AnonymousUser</h2>
<!-- backwards compatibility -->
<a id="schemaanonymoususer"></a>
<a id="schema_AnonymousUser"></a>
<a id="tocSanonymoususer"></a>
<a id="tocsanonymoususer"></a>

```json
{}
```

Empty message representing an anonymous user or indicating the authenticated user should be anonymized.

<h2 id="tocS_Anyone">Anyone</h2>
<!-- backwards compatibility -->
<a id="schemaanyone"></a>
<a id="schema_Anyone"></a>
<a id="tocSanyone"></a>
<a id="tocsanyone"></a>

```json
{}
```

Represents any user (including a logged out user).

<h2 id="tocS_ApplicationReference">ApplicationReference</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationreference"></a>
<a id="schema_ApplicationReference"></a>
<a id="tocSapplicationreference"></a>
<a id="tocsapplicationreference"></a>

```json
{
  "type": "UNSPECIFIED_REFERENCE_TYPE"
}
```

Activity in applications other than Drive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The reference type corresponding to this event.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNSPECIFIED_REFERENCE_TYPE|
|type|LINK|
|type|DISCUSS|

<h2 id="tocS_AppliedLabelChange">AppliedLabelChange</h2>
<!-- backwards compatibility -->
<a id="schemaappliedlabelchange"></a>
<a id="schema_AppliedLabelChange"></a>
<a id="tocSappliedlabelchange"></a>
<a id="tocsappliedlabelchange"></a>

```json
{
  "changes": [
    {
      "fieldChanges": [
        {
          "displayName": "string",
          "fieldId": "string",
          "newValue": {
            "date": {
              "value": "string"
            },
            "integer": {
              "value": "string"
            },
            "selection": {
              "displayName": "string",
              "value": "string"
            },
            "selectionList": {
              "values": [
                {
                  "displayName": "string",
                  "value": "string"
                }
              ]
            },
            "text": {
              "value": "string"
            },
            "textList": {
              "values": [
                {
                  "value": "string"
                }
              ]
            },
            "user": {
              "value": "string"
            },
            "userList": {
              "values": [
                {
                  "value": "string"
                }
              ]
            }
          },
          "oldValue": {
            "date": {
              "value": "string"
            },
            "integer": {
              "value": "string"
            },
            "selection": {
              "displayName": "string",
              "value": "string"
            },
            "selectionList": {
              "values": [
                {
                  "displayName": "string",
                  "value": "string"
                }
              ]
            },
            "text": {
              "value": "string"
            },
            "textList": {
              "values": [
                {
                  "value": "string"
                }
              ]
            },
            "user": {
              "value": "string"
            },
            "userList": {
              "values": [
                {
                  "value": "string"
                }
              ]
            }
          }
        }
      ],
      "label": "string",
      "title": "string",
      "types": [
        "TYPE_UNSPECIFIED"
      ]
    }
  ]
}
```

Label changes that were made on the Target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changes|[[AppliedLabelChangeDetail](#schemaappliedlabelchangedetail)]|false|none|Changes that were made to the Label on the Target.|

<h2 id="tocS_AppliedLabelChangeDetail">AppliedLabelChangeDetail</h2>
<!-- backwards compatibility -->
<a id="schemaappliedlabelchangedetail"></a>
<a id="schema_AppliedLabelChangeDetail"></a>
<a id="tocSappliedlabelchangedetail"></a>
<a id="tocsappliedlabelchangedetail"></a>

```json
{
  "fieldChanges": [
    {
      "displayName": "string",
      "fieldId": "string",
      "newValue": {
        "date": {
          "value": "string"
        },
        "integer": {
          "value": "string"
        },
        "selection": {
          "displayName": "string",
          "value": "string"
        },
        "selectionList": {
          "values": [
            {
              "displayName": "string",
              "value": "string"
            }
          ]
        },
        "text": {
          "value": "string"
        },
        "textList": {
          "values": [
            {
              "value": "string"
            }
          ]
        },
        "user": {
          "value": "string"
        },
        "userList": {
          "values": [
            {
              "value": "string"
            }
          ]
        }
      },
      "oldValue": {
        "date": {
          "value": "string"
        },
        "integer": {
          "value": "string"
        },
        "selection": {
          "displayName": "string",
          "value": "string"
        },
        "selectionList": {
          "values": [
            {
              "displayName": "string",
              "value": "string"
            }
          ]
        },
        "text": {
          "value": "string"
        },
        "textList": {
          "values": [
            {
              "value": "string"
            }
          ]
        },
        "user": {
          "value": "string"
        },
        "userList": {
          "values": [
            {
              "value": "string"
            }
          ]
        }
      }
    }
  ],
  "label": "string",
  "title": "string",
  "types": [
    "TYPE_UNSPECIFIED"
  ]
}
```

A change made to a Label on the Target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldChanges|[[FieldValueChange](#schemafieldvaluechange)]|false|none|Field Changes. Only present if `types` contains `LABEL_FIELD_VALUE_CHANGED`.|
|label|string|false|none|The Label name representing the Label that changed. This name always contains the revision of the Label that was used when this Action occurred. The format is `labels/id@revision`.|
|title|string|false|none|The human-readable title of the label that changed.|
|types|[string]|false|none|The types of changes made to the Label on the Target.|

#### Enumerated Values

|Property|Value|
|---|---|
|types|TYPE_UNSPECIFIED|
|types|LABEL_ADDED|
|types|LABEL_REMOVED|
|types|LABEL_FIELD_VALUE_CHANGED|
|types|LABEL_APPLIED_BY_ITEM_CREATE|

<h2 id="tocS_Assignment">Assignment</h2>
<!-- backwards compatibility -->
<a id="schemaassignment"></a>
<a id="schema_Assignment"></a>
<a id="tocSassignment"></a>
<a id="tocsassignment"></a>

```json
{
  "assignedUser": {
    "deletedUser": {},
    "knownUser": {
      "isCurrentUser": true,
      "personName": "string"
    },
    "unknownUser": {}
  },
  "subtype": "SUBTYPE_UNSPECIFIED"
}
```

A comment with an assignment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignedUser|[User](#schemauser)|false|none|The user to whom the comment was assigned.|
|subtype|string|false|none|The sub-type of this event.|

#### Enumerated Values

|Property|Value|
|---|---|
|subtype|SUBTYPE_UNSPECIFIED|
|subtype|ADDED|
|subtype|DELETED|
|subtype|REPLY_ADDED|
|subtype|REPLY_DELETED|
|subtype|RESOLVED|
|subtype|REOPENED|
|subtype|REASSIGNED|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "assignment": {
    "assignedUser": {
      "deletedUser": {},
      "knownUser": {
        "isCurrentUser": true,
        "personName": "string"
      },
      "unknownUser": {}
    },
    "subtype": "SUBTYPE_UNSPECIFIED"
  },
  "mentionedUsers": [
    {
      "deletedUser": {},
      "knownUser": {
        "isCurrentUser": true,
        "personName": "string"
      },
      "unknownUser": {}
    }
  ],
  "post": {
    "subtype": "SUBTYPE_UNSPECIFIED"
  },
  "suggestion": {
    "subtype": "SUBTYPE_UNSPECIFIED"
  }
}
```

A change about comments on an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignment|[Assignment](#schemaassignment)|false|none|A change on an assignment.|
|mentionedUsers|[[User](#schemauser)]|false|none|Users who are mentioned in this comment.|
|post|[Post](#schemapost)|false|none|A change on a regular posted comment.|
|suggestion|[Suggestion](#schemasuggestion)|false|none|A change on a suggestion.|

<h2 id="tocS_ConsolidationStrategy">ConsolidationStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaconsolidationstrategy"></a>
<a id="schema_ConsolidationStrategy"></a>
<a id="tocSconsolidationstrategy"></a>
<a id="tocsconsolidationstrategy"></a>

```json
{
  "legacy": {},
  "none": {}
}
```

How the individual activities are consolidated. If a set of activities is related they can be consolidated into one combined activity, such as one actor performing the same action on multiple targets, or multiple actors performing the same action on a single target. The strategy defines the rules for which activities are related.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legacy|[Legacy](#schemalegacy)|false|none|The individual activities are consolidated using the legacy strategy.|
|none|[NoConsolidation](#schemanoconsolidation)|false|none|The individual activities are not consolidated.|

<h2 id="tocS_Copy">Copy</h2>
<!-- backwards compatibility -->
<a id="schemacopy"></a>
<a id="schema_Copy"></a>
<a id="tocScopy"></a>
<a id="tocscopy"></a>

```json
{
  "originalObject": {
    "drive": {
      "name": "string",
      "title": "string"
    },
    "driveItem": {
      "driveFile": {},
      "driveFolder": {
        "type": "TYPE_UNSPECIFIED"
      },
      "file": {},
      "folder": {
        "type": "TYPE_UNSPECIFIED"
      },
      "name": "string",
      "title": "string"
    },
    "teamDrive": {
      "name": "string",
      "title": "string"
    }
  }
}
```

An object was created by copying an existing object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|originalObject|[TargetReference](#schematargetreference)|false|none|The original object.|

<h2 id="tocS_Create">Create</h2>
<!-- backwards compatibility -->
<a id="schemacreate"></a>
<a id="schema_Create"></a>
<a id="tocScreate"></a>
<a id="tocscreate"></a>

```json
{
  "copy": {
    "originalObject": {
      "drive": {
        "name": "string",
        "title": "string"
      },
      "driveItem": {
        "driveFile": {},
        "driveFolder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "file": {},
        "folder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "name": "string",
        "title": "string"
      },
      "teamDrive": {
        "name": "string",
        "title": "string"
      }
    }
  },
  "new": {},
  "upload": {}
}
```

An object was created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copy|[Copy](#schemacopy)|false|none|If present, indicates the object was created by copying an existing Drive object.|
|new|[New](#schemanew)|false|none|If present, indicates the object was newly created (e.g. as a blank document), not derived from a Drive object or external object.|
|upload|[Upload](#schemaupload)|false|none|If present, indicates the object originated externally and was uploaded to Drive.|

<h2 id="tocS_DataLeakPreventionChange">DataLeakPreventionChange</h2>
<!-- backwards compatibility -->
<a id="schemadataleakpreventionchange"></a>
<a id="schema_DataLeakPreventionChange"></a>
<a id="tocSdataleakpreventionchange"></a>
<a id="tocsdataleakpreventionchange"></a>

```json
{
  "type": "TYPE_UNSPECIFIED"
}
```

A change in the object's data leak prevention status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of Data Leak Prevention (DLP) change.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|FLAGGED|
|type|CLEARED|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "value": "string"
}
```

Wrapper for Date Field value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string(google-datetime)|false|none|Date value.|

<h2 id="tocS_Delete">Delete</h2>
<!-- backwards compatibility -->
<a id="schemadelete"></a>
<a id="schema_Delete"></a>
<a id="tocSdelete"></a>
<a id="tocsdelete"></a>

```json
{
  "type": "TYPE_UNSPECIFIED"
}
```

An object was deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of delete action taken.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|TRASH|
|type|PERMANENT_DELETE|

<h2 id="tocS_DeletedUser">DeletedUser</h2>
<!-- backwards compatibility -->
<a id="schemadeleteduser"></a>
<a id="schema_DeletedUser"></a>
<a id="tocSdeleteduser"></a>
<a id="tocsdeleteduser"></a>

```json
{}
```

A user whose account has since been deleted.

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "legacyId": "string",
  "name": "string"
}
```

Information about a domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legacyId|string|false|none|An opaque string used to identify this domain.|
|name|string|false|none|The name of the domain, e.g. `google.com`.|

<h2 id="tocS_Drive">Drive</h2>
<!-- backwards compatibility -->
<a id="schemadrive"></a>
<a id="schema_Drive"></a>
<a id="tocSdrive"></a>
<a id="tocsdrive"></a>

```json
{
  "name": "string",
  "root": {
    "driveFile": {},
    "driveFolder": {
      "type": "TYPE_UNSPECIFIED"
    },
    "file": {},
    "folder": {
      "type": "TYPE_UNSPECIFIED"
    },
    "mimeType": "string",
    "name": "string",
    "owner": {
      "domain": {
        "legacyId": "string",
        "name": "string"
      },
      "drive": {
        "name": "string",
        "title": "string"
      },
      "teamDrive": {
        "name": "string",
        "title": "string"
      },
      "user": {
        "deletedUser": {},
        "knownUser": {
          "isCurrentUser": true,
          "personName": "string"
        },
        "unknownUser": {}
      }
    },
    "title": "string"
  },
  "title": "string"
}
```

Information about a shared drive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The resource name of the shared drive. The format is `COLLECTION_ID/DRIVE_ID`. Clients should not assume a specific collection ID for this resource name.|
|root|[DriveItem](#schemadriveitem)|false|none|The root of this shared drive.|
|title|string|false|none|The title of the shared drive.|

<h2 id="tocS_DriveActivity">DriveActivity</h2>
<!-- backwards compatibility -->
<a id="schemadriveactivity"></a>
<a id="schema_DriveActivity"></a>
<a id="tocSdriveactivity"></a>
<a id="tocsdriveactivity"></a>

```json
{
  "actions": [
    {
      "actor": {
        "administrator": {},
        "anonymous": {},
        "impersonation": {
          "impersonatedUser": {
            "deletedUser": {},
            "knownUser": {
              "isCurrentUser": true,
              "personName": "string"
            },
            "unknownUser": {}
          }
        },
        "system": {
          "type": "TYPE_UNSPECIFIED"
        },
        "user": {
          "deletedUser": {},
          "knownUser": {
            "isCurrentUser": true,
            "personName": "string"
          },
          "unknownUser": {}
        }
      },
      "detail": {
        "appliedLabelChange": {
          "changes": [
            {
              "fieldChanges": [
                {
                  "displayName": "string",
                  "fieldId": "string",
                  "newValue": {
                    "date": {
                      "value": "string"
                    },
                    "integer": {
                      "value": "string"
                    },
                    "selection": {
                      "displayName": "string",
                      "value": "string"
                    },
                    "selectionList": {
                      "values": [
                        {
                          "displayName": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "text": {
                      "value": "string"
                    },
                    "textList": {
                      "values": [
                        {
                          "value": "string"
                        }
                      ]
                    },
                    "user": {
                      "value": "string"
                    },
                    "userList": {
                      "values": [
                        {
                          "value": "string"
                        }
                      ]
                    }
                  },
                  "oldValue": {
                    "date": {
                      "value": "string"
                    },
                    "integer": {
                      "value": "string"
                    },
                    "selection": {
                      "displayName": "string",
                      "value": "string"
                    },
                    "selectionList": {
                      "values": [
                        {
                          "displayName": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "text": {
                      "value": "string"
                    },
                    "textList": {
                      "values": [
                        {
                          "value": "string"
                        }
                      ]
                    },
                    "user": {
                      "value": "string"
                    },
                    "userList": {
                      "values": [
                        {
                          "value": "string"
                        }
                      ]
                    }
                  }
                }
              ],
              "label": "string",
              "title": "string",
              "types": [
                "TYPE_UNSPECIFIED"
              ]
            }
          ]
        },
        "comment": {
          "assignment": {
            "assignedUser": {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            },
            "subtype": "SUBTYPE_UNSPECIFIED"
          },
          "mentionedUsers": [
            {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            }
          ],
          "post": {
            "subtype": "SUBTYPE_UNSPECIFIED"
          },
          "suggestion": {
            "subtype": "SUBTYPE_UNSPECIFIED"
          }
        },
        "create": {
          "copy": {
            "originalObject": {
              "drive": {
                "name": "string",
                "title": "string"
              },
              "driveItem": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              }
            }
          },
          "new": {},
          "upload": {}
        },
        "delete": {
          "type": "TYPE_UNSPECIFIED"
        },
        "dlpChange": {
          "type": "TYPE_UNSPECIFIED"
        },
        "edit": {},
        "move": {
          "addedParents": [
            {
              "drive": {
                "name": "string",
                "title": "string"
              },
              "driveItem": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              }
            }
          ],
          "removedParents": [
            {
              "drive": {
                "name": "string",
                "title": "string"
              },
              "driveItem": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              }
            }
          ]
        },
        "permissionChange": {
          "addedPermissions": [
            {
              "allowDiscovery": true,
              "anyone": {},
              "domain": {
                "legacyId": "string",
                "name": "string"
              },
              "group": {
                "email": "string",
                "title": "string"
              },
              "role": "ROLE_UNSPECIFIED",
              "user": {
                "deletedUser": {},
                "knownUser": {
                  "isCurrentUser": true,
                  "personName": "string"
                },
                "unknownUser": {}
              }
            }
          ],
          "removedPermissions": [
            {
              "allowDiscovery": true,
              "anyone": {},
              "domain": {
                "legacyId": "string",
                "name": "string"
              },
              "group": {
                "email": "string",
                "title": "string"
              },
              "role": "ROLE_UNSPECIFIED",
              "user": {
                "deletedUser": {},
                "knownUser": {
                  "isCurrentUser": true,
                  "personName": "string"
                },
                "unknownUser": {}
              }
            }
          ]
        },
        "reference": {
          "type": "UNSPECIFIED_REFERENCE_TYPE"
        },
        "rename": {
          "newTitle": "string",
          "oldTitle": "string"
        },
        "restore": {
          "type": "TYPE_UNSPECIFIED"
        },
        "settingsChange": {
          "restrictionChanges": [
            {
              "feature": "FEATURE_UNSPECIFIED",
              "newRestriction": "RESTRICTION_UNSPECIFIED"
            }
          ]
        }
      },
      "target": {
        "drive": {
          "name": "string",
          "root": {
            "driveFile": {},
            "driveFolder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "file": {},
            "folder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "mimeType": "string",
            "name": "string",
            "owner": {
              "domain": {
                "legacyId": "string",
                "name": "string"
              },
              "drive": {
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              },
              "user": {
                "deletedUser": {},
                "knownUser": {
                  "isCurrentUser": true,
                  "personName": "string"
                },
                "unknownUser": {}
              }
            },
            "title": "string"
          },
          "title": "string"
        },
        "driveItem": {
          "driveFile": {},
          "driveFolder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "file": {},
          "folder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "mimeType": "string",
          "name": "string",
          "owner": {
            "domain": {
              "legacyId": "string",
              "name": "string"
            },
            "drive": {
              "name": "string",
              "title": "string"
            },
            "teamDrive": {
              "name": "string",
              "title": "string"
            },
            "user": {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            }
          },
          "title": "string"
        },
        "fileComment": {
          "legacyCommentId": "string",
          "legacyDiscussionId": "string",
          "linkToDiscussion": "string",
          "parent": {
            "driveFile": {},
            "driveFolder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "file": {},
            "folder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "mimeType": "string",
            "name": "string",
            "owner": {
              "domain": {
                "legacyId": "string",
                "name": "string"
              },
              "drive": {
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              },
              "user": {
                "deletedUser": {},
                "knownUser": {
                  "isCurrentUser": true,
                  "personName": "string"
                },
                "unknownUser": {}
              }
            },
            "title": "string"
          }
        },
        "teamDrive": {
          "name": "string",
          "root": {
            "driveFile": {},
            "driveFolder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "file": {},
            "folder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "mimeType": "string",
            "name": "string",
            "owner": {
              "domain": {
                "legacyId": "string",
                "name": "string"
              },
              "drive": {
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              },
              "user": {
                "deletedUser": {},
                "knownUser": {
                  "isCurrentUser": true,
                  "personName": "string"
                },
                "unknownUser": {}
              }
            },
            "title": "string"
          },
          "title": "string"
        }
      },
      "timeRange": {
        "endTime": "string",
        "startTime": "string"
      },
      "timestamp": "string"
    }
  ],
  "actors": [
    {
      "administrator": {},
      "anonymous": {},
      "impersonation": {
        "impersonatedUser": {
          "deletedUser": {},
          "knownUser": {
            "isCurrentUser": true,
            "personName": "string"
          },
          "unknownUser": {}
        }
      },
      "system": {
        "type": "TYPE_UNSPECIFIED"
      },
      "user": {
        "deletedUser": {},
        "knownUser": {
          "isCurrentUser": true,
          "personName": "string"
        },
        "unknownUser": {}
      }
    }
  ],
  "primaryActionDetail": {
    "appliedLabelChange": {
      "changes": [
        {
          "fieldChanges": [
            {
              "displayName": "string",
              "fieldId": "string",
              "newValue": {
                "date": {
                  "value": "string"
                },
                "integer": {
                  "value": "string"
                },
                "selection": {
                  "displayName": "string",
                  "value": "string"
                },
                "selectionList": {
                  "values": [
                    {
                      "displayName": "string",
                      "value": "string"
                    }
                  ]
                },
                "text": {
                  "value": "string"
                },
                "textList": {
                  "values": [
                    {
                      "value": "string"
                    }
                  ]
                },
                "user": {
                  "value": "string"
                },
                "userList": {
                  "values": [
                    {
                      "value": "string"
                    }
                  ]
                }
              },
              "oldValue": {
                "date": {
                  "value": "string"
                },
                "integer": {
                  "value": "string"
                },
                "selection": {
                  "displayName": "string",
                  "value": "string"
                },
                "selectionList": {
                  "values": [
                    {
                      "displayName": "string",
                      "value": "string"
                    }
                  ]
                },
                "text": {
                  "value": "string"
                },
                "textList": {
                  "values": [
                    {
                      "value": "string"
                    }
                  ]
                },
                "user": {
                  "value": "string"
                },
                "userList": {
                  "values": [
                    {
                      "value": "string"
                    }
                  ]
                }
              }
            }
          ],
          "label": "string",
          "title": "string",
          "types": [
            "TYPE_UNSPECIFIED"
          ]
        }
      ]
    },
    "comment": {
      "assignment": {
        "assignedUser": {
          "deletedUser": {},
          "knownUser": {
            "isCurrentUser": true,
            "personName": "string"
          },
          "unknownUser": {}
        },
        "subtype": "SUBTYPE_UNSPECIFIED"
      },
      "mentionedUsers": [
        {
          "deletedUser": {},
          "knownUser": {
            "isCurrentUser": true,
            "personName": "string"
          },
          "unknownUser": {}
        }
      ],
      "post": {
        "subtype": "SUBTYPE_UNSPECIFIED"
      },
      "suggestion": {
        "subtype": "SUBTYPE_UNSPECIFIED"
      }
    },
    "create": {
      "copy": {
        "originalObject": {
          "drive": {
            "name": "string",
            "title": "string"
          },
          "driveItem": {
            "driveFile": {},
            "driveFolder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "file": {},
            "folder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "name": "string",
            "title": "string"
          },
          "teamDrive": {
            "name": "string",
            "title": "string"
          }
        }
      },
      "new": {},
      "upload": {}
    },
    "delete": {
      "type": "TYPE_UNSPECIFIED"
    },
    "dlpChange": {
      "type": "TYPE_UNSPECIFIED"
    },
    "edit": {},
    "move": {
      "addedParents": [
        {
          "drive": {
            "name": "string",
            "title": "string"
          },
          "driveItem": {
            "driveFile": {},
            "driveFolder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "file": {},
            "folder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "name": "string",
            "title": "string"
          },
          "teamDrive": {
            "name": "string",
            "title": "string"
          }
        }
      ],
      "removedParents": [
        {
          "drive": {
            "name": "string",
            "title": "string"
          },
          "driveItem": {
            "driveFile": {},
            "driveFolder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "file": {},
            "folder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "name": "string",
            "title": "string"
          },
          "teamDrive": {
            "name": "string",
            "title": "string"
          }
        }
      ]
    },
    "permissionChange": {
      "addedPermissions": [
        {
          "allowDiscovery": true,
          "anyone": {},
          "domain": {
            "legacyId": "string",
            "name": "string"
          },
          "group": {
            "email": "string",
            "title": "string"
          },
          "role": "ROLE_UNSPECIFIED",
          "user": {
            "deletedUser": {},
            "knownUser": {
              "isCurrentUser": true,
              "personName": "string"
            },
            "unknownUser": {}
          }
        }
      ],
      "removedPermissions": [
        {
          "allowDiscovery": true,
          "anyone": {},
          "domain": {
            "legacyId": "string",
            "name": "string"
          },
          "group": {
            "email": "string",
            "title": "string"
          },
          "role": "ROLE_UNSPECIFIED",
          "user": {
            "deletedUser": {},
            "knownUser": {
              "isCurrentUser": true,
              "personName": "string"
            },
            "unknownUser": {}
          }
        }
      ]
    },
    "reference": {
      "type": "UNSPECIFIED_REFERENCE_TYPE"
    },
    "rename": {
      "newTitle": "string",
      "oldTitle": "string"
    },
    "restore": {
      "type": "TYPE_UNSPECIFIED"
    },
    "settingsChange": {
      "restrictionChanges": [
        {
          "feature": "FEATURE_UNSPECIFIED",
          "newRestriction": "RESTRICTION_UNSPECIFIED"
        }
      ]
    }
  },
  "targets": [
    {
      "drive": {
        "name": "string",
        "root": {
          "driveFile": {},
          "driveFolder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "file": {},
          "folder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "mimeType": "string",
          "name": "string",
          "owner": {
            "domain": {
              "legacyId": "string",
              "name": "string"
            },
            "drive": {
              "name": "string",
              "title": "string"
            },
            "teamDrive": {
              "name": "string",
              "title": "string"
            },
            "user": {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            }
          },
          "title": "string"
        },
        "title": "string"
      },
      "driveItem": {
        "driveFile": {},
        "driveFolder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "file": {},
        "folder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "mimeType": "string",
        "name": "string",
        "owner": {
          "domain": {
            "legacyId": "string",
            "name": "string"
          },
          "drive": {
            "name": "string",
            "title": "string"
          },
          "teamDrive": {
            "name": "string",
            "title": "string"
          },
          "user": {
            "deletedUser": {},
            "knownUser": {
              "isCurrentUser": true,
              "personName": "string"
            },
            "unknownUser": {}
          }
        },
        "title": "string"
      },
      "fileComment": {
        "legacyCommentId": "string",
        "legacyDiscussionId": "string",
        "linkToDiscussion": "string",
        "parent": {
          "driveFile": {},
          "driveFolder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "file": {},
          "folder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "mimeType": "string",
          "name": "string",
          "owner": {
            "domain": {
              "legacyId": "string",
              "name": "string"
            },
            "drive": {
              "name": "string",
              "title": "string"
            },
            "teamDrive": {
              "name": "string",
              "title": "string"
            },
            "user": {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            }
          },
          "title": "string"
        }
      },
      "teamDrive": {
        "name": "string",
        "root": {
          "driveFile": {},
          "driveFolder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "file": {},
          "folder": {
            "type": "TYPE_UNSPECIFIED"
          },
          "mimeType": "string",
          "name": "string",
          "owner": {
            "domain": {
              "legacyId": "string",
              "name": "string"
            },
            "drive": {
              "name": "string",
              "title": "string"
            },
            "teamDrive": {
              "name": "string",
              "title": "string"
            },
            "user": {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            }
          },
          "title": "string"
        },
        "title": "string"
      }
    }
  ],
  "timeRange": {
    "endTime": "string",
    "startTime": "string"
  },
  "timestamp": "string"
}
```

A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[Action](#schemaaction)]|false|none|Details on all actions in this activity.|
|actors|[[Actor](#schemaactor)]|false|none|All actor(s) responsible for the activity.|
|primaryActionDetail|[ActionDetail](#schemaactiondetail)|false|none|Key information about the primary action for this activity. This is either representative, or the most important, of all actions in the activity, according to the ConsolidationStrategy in the request.|
|targets|[[Target](#schematarget)]|false|none|All Google Drive objects this activity is about (e.g. file, folder, drive). This represents the state of the target immediately after the actions occurred.|
|timeRange|[TimeRange](#schematimerange)|false|none|The activity occurred over this time range.|
|timestamp|string(google-datetime)|false|none|The activity occurred at this specific time.|

<h2 id="tocS_DriveFile">DriveFile</h2>
<!-- backwards compatibility -->
<a id="schemadrivefile"></a>
<a id="schema_DriveFile"></a>
<a id="tocSdrivefile"></a>
<a id="tocsdrivefile"></a>

```json
{}
```

A Drive item which is a file.

<h2 id="tocS_DriveFolder">DriveFolder</h2>
<!-- backwards compatibility -->
<a id="schemadrivefolder"></a>
<a id="schema_DriveFolder"></a>
<a id="tocSdrivefolder"></a>
<a id="tocsdrivefolder"></a>

```json
{
  "type": "TYPE_UNSPECIFIED"
}
```

A Drive item which is a folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of Drive folder.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|MY_DRIVE_ROOT|
|type|SHARED_DRIVE_ROOT|
|type|STANDARD_FOLDER|

<h2 id="tocS_DriveItem">DriveItem</h2>
<!-- backwards compatibility -->
<a id="schemadriveitem"></a>
<a id="schema_DriveItem"></a>
<a id="tocSdriveitem"></a>
<a id="tocsdriveitem"></a>

```json
{
  "driveFile": {},
  "driveFolder": {
    "type": "TYPE_UNSPECIFIED"
  },
  "file": {},
  "folder": {
    "type": "TYPE_UNSPECIFIED"
  },
  "mimeType": "string",
  "name": "string",
  "owner": {
    "domain": {
      "legacyId": "string",
      "name": "string"
    },
    "drive": {
      "name": "string",
      "title": "string"
    },
    "teamDrive": {
      "name": "string",
      "title": "string"
    },
    "user": {
      "deletedUser": {},
      "knownUser": {
        "isCurrentUser": true,
        "personName": "string"
      },
      "unknownUser": {}
    }
  },
  "title": "string"
}
```

A Drive item, such as a file or folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driveFile|[DriveFile](#schemadrivefile)|false|none|The Drive item is a file.|
|driveFolder|[DriveFolder](#schemadrivefolder)|false|none|The Drive item is a folder. Includes information about the type of folder.|
|file|[File](#schemafile)|false|none|This field is deprecated; please use the `driveFile` field instead.|
|folder|[Folder](#schemafolder)|false|none|This field is deprecated; please use the `driveFolder` field instead.|
|mimeType|string|false|none|The MIME type of the Drive item. See https://developers.google.com/drive/v3/web/mime-types.|
|name|string|false|none|The target Drive item. The format is `items/ITEM_ID`.|
|owner|[Owner](#schemaowner)|false|none|Information about the owner of this Drive item.|
|title|string|false|none|The title of the Drive item.|

<h2 id="tocS_DriveItemReference">DriveItemReference</h2>
<!-- backwards compatibility -->
<a id="schemadriveitemreference"></a>
<a id="schema_DriveItemReference"></a>
<a id="tocSdriveitemreference"></a>
<a id="tocsdriveitemreference"></a>

```json
{
  "driveFile": {},
  "driveFolder": {
    "type": "TYPE_UNSPECIFIED"
  },
  "file": {},
  "folder": {
    "type": "TYPE_UNSPECIFIED"
  },
  "name": "string",
  "title": "string"
}
```

A lightweight reference to a Drive item, such as a file or folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driveFile|[DriveFile](#schemadrivefile)|false|none|The Drive item is a file.|
|driveFolder|[DriveFolder](#schemadrivefolder)|false|none|The Drive item is a folder. Includes information about the type of folder.|
|file|[File](#schemafile)|false|none|This field is deprecated; please use the `driveFile` field instead.|
|folder|[Folder](#schemafolder)|false|none|This field is deprecated; please use the `driveFolder` field instead.|
|name|string|false|none|The target Drive item. The format is `items/ITEM_ID`.|
|title|string|false|none|The title of the Drive item.|

<h2 id="tocS_DriveReference">DriveReference</h2>
<!-- backwards compatibility -->
<a id="schemadrivereference"></a>
<a id="schema_DriveReference"></a>
<a id="tocSdrivereference"></a>
<a id="tocsdrivereference"></a>

```json
{
  "name": "string",
  "title": "string"
}
```

A lightweight reference to a shared drive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The resource name of the shared drive. The format is `COLLECTION_ID/DRIVE_ID`. Clients should not assume a specific collection ID for this resource name.|
|title|string|false|none|The title of the shared drive.|

<h2 id="tocS_Edit">Edit</h2>
<!-- backwards compatibility -->
<a id="schemaedit"></a>
<a id="schema_Edit"></a>
<a id="tocSedit"></a>
<a id="tocsedit"></a>

```json
{}
```

An empty message indicating an object was edited.

<h2 id="tocS_FieldValue">FieldValue</h2>
<!-- backwards compatibility -->
<a id="schemafieldvalue"></a>
<a id="schema_FieldValue"></a>
<a id="tocSfieldvalue"></a>
<a id="tocsfieldvalue"></a>

```json
{
  "date": {
    "value": "string"
  },
  "integer": {
    "value": "string"
  },
  "selection": {
    "displayName": "string",
    "value": "string"
  },
  "selectionList": {
    "values": [
      {
        "displayName": "string",
        "value": "string"
      }
    ]
  },
  "text": {
    "value": "string"
  },
  "textList": {
    "values": [
      {
        "value": "string"
      }
    ]
  },
  "user": {
    "value": "string"
  },
  "userList": {
    "values": [
      {
        "value": "string"
      }
    ]
  }
}
```

Contains a value of a Field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|[Date](#schemadate)|false|none|Date Field value.|
|integer|[Integer](#schemainteger)|false|none|Integer Field value.|
|selection|[Selection](#schemaselection)|false|none|Selection Field value.|
|selectionList|[SelectionList](#schemaselectionlist)|false|none|Selection List Field value.|
|text|[Text](#schematext)|false|none|Text Field value.|
|textList|[TextList](#schematextlist)|false|none|Text List Field value.|
|user|[SingleUser](#schemasingleuser)|false|none|User Field value.|
|userList|[UserList](#schemauserlist)|false|none|User List Field value.|

<h2 id="tocS_FieldValueChange">FieldValueChange</h2>
<!-- backwards compatibility -->
<a id="schemafieldvaluechange"></a>
<a id="schema_FieldValueChange"></a>
<a id="tocSfieldvaluechange"></a>
<a id="tocsfieldvaluechange"></a>

```json
{
  "displayName": "string",
  "fieldId": "string",
  "newValue": {
    "date": {
      "value": "string"
    },
    "integer": {
      "value": "string"
    },
    "selection": {
      "displayName": "string",
      "value": "string"
    },
    "selectionList": {
      "values": [
        {
          "displayName": "string",
          "value": "string"
        }
      ]
    },
    "text": {
      "value": "string"
    },
    "textList": {
      "values": [
        {
          "value": "string"
        }
      ]
    },
    "user": {
      "value": "string"
    },
    "userList": {
      "values": [
        {
          "value": "string"
        }
      ]
    }
  },
  "oldValue": {
    "date": {
      "value": "string"
    },
    "integer": {
      "value": "string"
    },
    "selection": {
      "displayName": "string",
      "value": "string"
    },
    "selectionList": {
      "values": [
        {
          "displayName": "string",
          "value": "string"
        }
      ]
    },
    "text": {
      "value": "string"
    },
    "textList": {
      "values": [
        {
          "value": "string"
        }
      ]
    },
    "user": {
      "value": "string"
    },
    "userList": {
      "values": [
        {
          "value": "string"
        }
      ]
    }
  }
}
```

Change to a Field value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The human-readable display name for this field.|
|fieldId|string|false|none|The ID of this field. Field IDs are unique within a Label.|
|newValue|[FieldValue](#schemafieldvalue)|false|none|The value that is now set on the field. If not present, the field was cleared. At least one of {old_value\|new_value} is always set.|
|oldValue|[FieldValue](#schemafieldvalue)|false|none|The value that was previously set on the field. If not present, the field was newly set. At least one of {old_value\|new_value} is always set.|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{}
```

This item is deprecated; please see `DriveFile` instead.

<h2 id="tocS_FileComment">FileComment</h2>
<!-- backwards compatibility -->
<a id="schemafilecomment"></a>
<a id="schema_FileComment"></a>
<a id="tocSfilecomment"></a>
<a id="tocsfilecomment"></a>

```json
{
  "legacyCommentId": "string",
  "legacyDiscussionId": "string",
  "linkToDiscussion": "string",
  "parent": {
    "driveFile": {},
    "driveFolder": {
      "type": "TYPE_UNSPECIFIED"
    },
    "file": {},
    "folder": {
      "type": "TYPE_UNSPECIFIED"
    },
    "mimeType": "string",
    "name": "string",
    "owner": {
      "domain": {
        "legacyId": "string",
        "name": "string"
      },
      "drive": {
        "name": "string",
        "title": "string"
      },
      "teamDrive": {
        "name": "string",
        "title": "string"
      },
      "user": {
        "deletedUser": {},
        "knownUser": {
          "isCurrentUser": true,
          "personName": "string"
        },
        "unknownUser": {}
      }
    },
    "title": "string"
  }
}
```

A comment on a file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legacyCommentId|string|false|none|The comment in the discussion thread. This identifier is an opaque string compatible with the Drive API; see https://developers.google.com/drive/v3/reference/comments/get|
|legacyDiscussionId|string|false|none|The discussion thread to which the comment was added. This identifier is an opaque string compatible with the Drive API and references the first comment in a discussion; see https://developers.google.com/drive/v3/reference/comments/get|
|linkToDiscussion|string|false|none|The link to the discussion thread containing this comment, for example, `https://docs.google.com/DOCUMENT_ID/edit?disco=THREAD_ID`.|
|parent|[DriveItem](#schemadriveitem)|false|none|The Drive item containing this comment.|

<h2 id="tocS_Folder">Folder</h2>
<!-- backwards compatibility -->
<a id="schemafolder"></a>
<a id="schema_Folder"></a>
<a id="tocSfolder"></a>
<a id="tocsfolder"></a>

```json
{
  "type": "TYPE_UNSPECIFIED"
}
```

This item is deprecated; please see `DriveFolder` instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|This field is deprecated; please see `DriveFolder.type` instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|MY_DRIVE_ROOT|
|type|TEAM_DRIVE_ROOT|
|type|STANDARD_FOLDER|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "email": "string",
  "title": "string"
}
```

Information about a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address of the group.|
|title|string|false|none|The title of the group.|

<h2 id="tocS_Impersonation">Impersonation</h2>
<!-- backwards compatibility -->
<a id="schemaimpersonation"></a>
<a id="schema_Impersonation"></a>
<a id="tocSimpersonation"></a>
<a id="tocsimpersonation"></a>

```json
{
  "impersonatedUser": {
    "deletedUser": {},
    "knownUser": {
      "isCurrentUser": true,
      "personName": "string"
    },
    "unknownUser": {}
  }
}
```

Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is not currently available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|impersonatedUser|[User](#schemauser)|false|none|The impersonated user.|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
{
  "value": "string"
}
```

Wrapper for Integer Field value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string(int64)|false|none|Integer value.|

<h2 id="tocS_KnownUser">KnownUser</h2>
<!-- backwards compatibility -->
<a id="schemaknownuser"></a>
<a id="schema_KnownUser"></a>
<a id="tocSknownuser"></a>
<a id="tocsknownuser"></a>

```json
{
  "isCurrentUser": true,
  "personName": "string"
}
```

A known user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isCurrentUser|boolean|false|none|True if this is the user making the request.|
|personName|string|false|none|The identifier for this user that can be used with the People API to get more information. The format is `people/ACCOUNT_ID`. See https://developers.google.com/people/.|

<h2 id="tocS_Legacy">Legacy</h2>
<!-- backwards compatibility -->
<a id="schemalegacy"></a>
<a id="schema_Legacy"></a>
<a id="tocSlegacy"></a>
<a id="tocslegacy"></a>

```json
{}
```

A strategy that consolidates activities using the grouping rules from the legacy V1 Activity API. Similar actions occurring within a window of time can be grouped across multiple targets (such as moving a set of files at once) or multiple actors (such as several users editing the same item). Grouping rules for this strategy are specific to each type of action.

<h2 id="tocS_Move">Move</h2>
<!-- backwards compatibility -->
<a id="schemamove"></a>
<a id="schema_Move"></a>
<a id="tocSmove"></a>
<a id="tocsmove"></a>

```json
{
  "addedParents": [
    {
      "drive": {
        "name": "string",
        "title": "string"
      },
      "driveItem": {
        "driveFile": {},
        "driveFolder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "file": {},
        "folder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "name": "string",
        "title": "string"
      },
      "teamDrive": {
        "name": "string",
        "title": "string"
      }
    }
  ],
  "removedParents": [
    {
      "drive": {
        "name": "string",
        "title": "string"
      },
      "driveItem": {
        "driveFile": {},
        "driveFolder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "file": {},
        "folder": {
          "type": "TYPE_UNSPECIFIED"
        },
        "name": "string",
        "title": "string"
      },
      "teamDrive": {
        "name": "string",
        "title": "string"
      }
    }
  ]
}
```

An object was moved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addedParents|[[TargetReference](#schematargetreference)]|false|none|The added parent object(s).|
|removedParents|[[TargetReference](#schematargetreference)]|false|none|The removed parent object(s).|

<h2 id="tocS_New">New</h2>
<!-- backwards compatibility -->
<a id="schemanew"></a>
<a id="schema_New"></a>
<a id="tocSnew"></a>
<a id="tocsnew"></a>

```json
{}
```

An object was created from scratch.

<h2 id="tocS_NoConsolidation">NoConsolidation</h2>
<!-- backwards compatibility -->
<a id="schemanoconsolidation"></a>
<a id="schema_NoConsolidation"></a>
<a id="tocSnoconsolidation"></a>
<a id="tocsnoconsolidation"></a>

```json
{}
```

A strategy that does no consolidation of individual activities.

<h2 id="tocS_Owner">Owner</h2>
<!-- backwards compatibility -->
<a id="schemaowner"></a>
<a id="schema_Owner"></a>
<a id="tocSowner"></a>
<a id="tocsowner"></a>

```json
{
  "domain": {
    "legacyId": "string",
    "name": "string"
  },
  "drive": {
    "name": "string",
    "title": "string"
  },
  "teamDrive": {
    "name": "string",
    "title": "string"
  },
  "user": {
    "deletedUser": {},
    "knownUser": {
      "isCurrentUser": true,
      "personName": "string"
    },
    "unknownUser": {}
  }
}
```

Information about the owner of a Drive item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|[Domain](#schemadomain)|false|none|The domain of the Drive item owner.|
|drive|[DriveReference](#schemadrivereference)|false|none|The drive that owns the item.|
|teamDrive|[TeamDriveReference](#schemateamdrivereference)|false|none|This field is deprecated; please use the `drive` field instead.|
|user|[User](#schemauser)|false|none|The user that owns the Drive item.|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "allowDiscovery": true,
  "anyone": {},
  "domain": {
    "legacyId": "string",
    "name": "string"
  },
  "group": {
    "email": "string",
    "title": "string"
  },
  "role": "ROLE_UNSPECIFIED",
  "user": {
    "deletedUser": {},
    "knownUser": {
      "isCurrentUser": true,
      "personName": "string"
    },
    "unknownUser": {}
  }
}
```

The permission setting of an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowDiscovery|boolean|false|none|If true, the item can be discovered (e.g. in the user's "Shared with me" collection) without needing a link to the item.|
|anyone|[Anyone](#schemaanyone)|false|none|If set, this permission applies to anyone, even logged out users.|
|domain|[Domain](#schemadomain)|false|none|The domain to whom this permission applies.|
|group|[Group](#schemagroup)|false|none|The group to whom this permission applies.|
|role|string|false|none|Indicates the [Google Drive permissions role](https://developers.google.com/drive/web/manage-sharing#roles). The role determines a user's ability to read, write, and comment on items.|
|user|[User](#schemauser)|false|none|The user to whom this permission applies.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|ROLE_UNSPECIFIED|
|role|OWNER|
|role|ORGANIZER|
|role|FILE_ORGANIZER|
|role|EDITOR|
|role|COMMENTER|
|role|VIEWER|
|role|PUBLISHED_VIEWER|

<h2 id="tocS_PermissionChange">PermissionChange</h2>
<!-- backwards compatibility -->
<a id="schemapermissionchange"></a>
<a id="schema_PermissionChange"></a>
<a id="tocSpermissionchange"></a>
<a id="tocspermissionchange"></a>

```json
{
  "addedPermissions": [
    {
      "allowDiscovery": true,
      "anyone": {},
      "domain": {
        "legacyId": "string",
        "name": "string"
      },
      "group": {
        "email": "string",
        "title": "string"
      },
      "role": "ROLE_UNSPECIFIED",
      "user": {
        "deletedUser": {},
        "knownUser": {
          "isCurrentUser": true,
          "personName": "string"
        },
        "unknownUser": {}
      }
    }
  ],
  "removedPermissions": [
    {
      "allowDiscovery": true,
      "anyone": {},
      "domain": {
        "legacyId": "string",
        "name": "string"
      },
      "group": {
        "email": "string",
        "title": "string"
      },
      "role": "ROLE_UNSPECIFIED",
      "user": {
        "deletedUser": {},
        "knownUser": {
          "isCurrentUser": true,
          "personName": "string"
        },
        "unknownUser": {}
      }
    }
  ]
}
```

A change of the permission setting on an item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addedPermissions|[[Permission](#schemapermission)]|false|none|The set of permissions added by this change.|
|removedPermissions|[[Permission](#schemapermission)]|false|none|The set of permissions removed by this change.|

<h2 id="tocS_Post">Post</h2>
<!-- backwards compatibility -->
<a id="schemapost"></a>
<a id="schema_Post"></a>
<a id="tocSpost"></a>
<a id="tocspost"></a>

```json
{
  "subtype": "SUBTYPE_UNSPECIFIED"
}
```

A regular posted comment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subtype|string|false|none|The sub-type of this event.|

#### Enumerated Values

|Property|Value|
|---|---|
|subtype|SUBTYPE_UNSPECIFIED|
|subtype|ADDED|
|subtype|DELETED|
|subtype|REPLY_ADDED|
|subtype|REPLY_DELETED|
|subtype|RESOLVED|
|subtype|REOPENED|

<h2 id="tocS_QueryDriveActivityRequest">QueryDriveActivityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerydriveactivityrequest"></a>
<a id="schema_QueryDriveActivityRequest"></a>
<a id="tocSquerydriveactivityrequest"></a>
<a id="tocsquerydriveactivityrequest"></a>

```json
{
  "ancestorName": "string",
  "consolidationStrategy": {
    "legacy": {},
    "none": {}
  },
  "filter": "string",
  "itemName": "string",
  "pageSize": 0,
  "pageToken": "string"
}
```

The request message for querying Drive activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ancestorName|string|false|none|Return activities for this Drive folder, plus all children and descendants. The format is `items/ITEM_ID`.|
|consolidationStrategy|[ConsolidationStrategy](#schemaconsolidationstrategy)|false|none|Details on how to consolidate related actions that make up the activity. If not set, then related actions aren't consolidated.|
|filter|string|false|none|The filtering for items returned from this query request. The format of the filter string is a sequence of expressions, joined by an optional "AND", where each expression is of the form "field operator value". Supported fields: - `time`: Uses numerical operators on date values either in terms of milliseconds since Jan 1, 1970 or in RFC 3339 format. Examples: - `time > 1452409200000 AND time <= 1492812924310` - `time >= "2016-01-10T01:02:03-05:00"` - `detail.action_detail_case`: Uses the "has" operator (:) and either a singular value or a list of allowed action types enclosed in parentheses, separated by a space. To exclude a result from the response, prepend a hyphen (`-`) to the beginning of the filter string. Examples: - `detail.action_detail_case:RENAME` - `detail.action_detail_case:(CREATE RESTORE)` - `-detail.action_detail_case:MOVE` |
|itemName|string|false|none|Return activities for this Drive item. The format is `items/ITEM_ID`.|
|pageSize|integer(int32)|false|none|The minimum number of activities desired in the response; the server attempts to return at least this quantity. The server may also return fewer activities if it has a partial response ready before the request times out. If not set, a default value is used.|
|pageToken|string|false|none|The token identifies which page of results to return. Set this to the next_page_token value returned from a previous query to obtain the following page of results. If not set, the first page of results is returned.|

<h2 id="tocS_QueryDriveActivityResponse">QueryDriveActivityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquerydriveactivityresponse"></a>
<a id="schema_QueryDriveActivityResponse"></a>
<a id="tocSquerydriveactivityresponse"></a>
<a id="tocsquerydriveactivityresponse"></a>

```json
{
  "activities": [
    {
      "actions": [
        {
          "actor": {
            "administrator": {},
            "anonymous": {},
            "impersonation": {
              "impersonatedUser": {
                "deletedUser": {},
                "knownUser": {
                  "isCurrentUser": true,
                  "personName": "string"
                },
                "unknownUser": {}
              }
            },
            "system": {
              "type": "TYPE_UNSPECIFIED"
            },
            "user": {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            }
          },
          "detail": {
            "appliedLabelChange": {
              "changes": [
                {
                  "fieldChanges": [
                    {
                      "displayName": "string",
                      "fieldId": "string",
                      "newValue": {
                        "date": {
                          "value": "string"
                        },
                        "integer": {
                          "value": "string"
                        },
                        "selection": {
                          "displayName": "string",
                          "value": "string"
                        },
                        "selectionList": {
                          "values": [
                            {
                              "displayName": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "text": {
                          "value": "string"
                        },
                        "textList": {
                          "values": [
                            {
                              "value": "string"
                            }
                          ]
                        },
                        "user": {
                          "value": "string"
                        },
                        "userList": {
                          "values": [
                            {
                              "value": "string"
                            }
                          ]
                        }
                      },
                      "oldValue": {
                        "date": {
                          "value": "string"
                        },
                        "integer": {
                          "value": "string"
                        },
                        "selection": {
                          "displayName": "string",
                          "value": "string"
                        },
                        "selectionList": {
                          "values": [
                            {
                              "displayName": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "text": {
                          "value": "string"
                        },
                        "textList": {
                          "values": [
                            {
                              "value": "string"
                            }
                          ]
                        },
                        "user": {
                          "value": "string"
                        },
                        "userList": {
                          "values": [
                            {
                              "value": "string"
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "label": "string",
                  "title": "string",
                  "types": [
                    "TYPE_UNSPECIFIED"
                  ]
                }
              ]
            },
            "comment": {
              "assignment": {
                "assignedUser": {
                  "deletedUser": {},
                  "knownUser": {
                    "isCurrentUser": true,
                    "personName": "string"
                  },
                  "unknownUser": {}
                },
                "subtype": "SUBTYPE_UNSPECIFIED"
              },
              "mentionedUsers": [
                {
                  "deletedUser": {},
                  "knownUser": {
                    "isCurrentUser": true,
                    "personName": "string"
                  },
                  "unknownUser": {}
                }
              ],
              "post": {
                "subtype": "SUBTYPE_UNSPECIFIED"
              },
              "suggestion": {
                "subtype": "SUBTYPE_UNSPECIFIED"
              }
            },
            "create": {
              "copy": {
                "originalObject": {
                  "drive": {
                    "name": "string",
                    "title": "string"
                  },
                  "driveItem": {
                    "driveFile": {},
                    "driveFolder": {
                      "type": "TYPE_UNSPECIFIED"
                    },
                    "file": {},
                    "folder": {
                      "type": "TYPE_UNSPECIFIED"
                    },
                    "name": "string",
                    "title": "string"
                  },
                  "teamDrive": {
                    "name": "string",
                    "title": "string"
                  }
                }
              },
              "new": {},
              "upload": {}
            },
            "delete": {
              "type": "TYPE_UNSPECIFIED"
            },
            "dlpChange": {
              "type": "TYPE_UNSPECIFIED"
            },
            "edit": {},
            "move": {
              "addedParents": [
                {
                  "drive": {
                    "name": "string",
                    "title": "string"
                  },
                  "driveItem": {
                    "driveFile": {},
                    "driveFolder": {
                      "type": "TYPE_UNSPECIFIED"
                    },
                    "file": {},
                    "folder": {
                      "type": "TYPE_UNSPECIFIED"
                    },
                    "name": "string",
                    "title": "string"
                  },
                  "teamDrive": {
                    "name": "string",
                    "title": "string"
                  }
                }
              ],
              "removedParents": [
                {
                  "drive": {
                    "name": "string",
                    "title": "string"
                  },
                  "driveItem": {
                    "driveFile": {},
                    "driveFolder": {
                      "type": "TYPE_UNSPECIFIED"
                    },
                    "file": {},
                    "folder": {
                      "type": "TYPE_UNSPECIFIED"
                    },
                    "name": "string",
                    "title": "string"
                  },
                  "teamDrive": {
                    "name": "string",
                    "title": "string"
                  }
                }
              ]
            },
            "permissionChange": {
              "addedPermissions": [
                {
                  "allowDiscovery": true,
                  "anyone": {},
                  "domain": {
                    "legacyId": "string",
                    "name": "string"
                  },
                  "group": {
                    "email": "string",
                    "title": "string"
                  },
                  "role": "ROLE_UNSPECIFIED",
                  "user": {
                    "deletedUser": {},
                    "knownUser": {
                      "isCurrentUser": true,
                      "personName": "string"
                    },
                    "unknownUser": {}
                  }
                }
              ],
              "removedPermissions": [
                {
                  "allowDiscovery": true,
                  "anyone": {},
                  "domain": {
                    "legacyId": "string",
                    "name": "string"
                  },
                  "group": {
                    "email": "string",
                    "title": "string"
                  },
                  "role": "ROLE_UNSPECIFIED",
                  "user": {
                    "deletedUser": {},
                    "knownUser": {
                      "isCurrentUser": true,
                      "personName": "string"
                    },
                    "unknownUser": {}
                  }
                }
              ]
            },
            "reference": {
              "type": "UNSPECIFIED_REFERENCE_TYPE"
            },
            "rename": {
              "newTitle": "string",
              "oldTitle": "string"
            },
            "restore": {
              "type": "TYPE_UNSPECIFIED"
            },
            "settingsChange": {
              "restrictionChanges": [
                {
                  "feature": "FEATURE_UNSPECIFIED",
                  "newRestriction": "RESTRICTION_UNSPECIFIED"
                }
              ]
            }
          },
          "target": {
            "drive": {
              "name": "string",
              "root": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "mimeType": "string",
                "name": "string",
                "owner": {
                  "domain": {
                    "legacyId": "string",
                    "name": "string"
                  },
                  "drive": {
                    "name": "string",
                    "title": "string"
                  },
                  "teamDrive": {
                    "name": "string",
                    "title": "string"
                  },
                  "user": {
                    "deletedUser": {},
                    "knownUser": {
                      "isCurrentUser": true,
                      "personName": "string"
                    },
                    "unknownUser": {}
                  }
                },
                "title": "string"
              },
              "title": "string"
            },
            "driveItem": {
              "driveFile": {},
              "driveFolder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "file": {},
              "folder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "mimeType": "string",
              "name": "string",
              "owner": {
                "domain": {
                  "legacyId": "string",
                  "name": "string"
                },
                "drive": {
                  "name": "string",
                  "title": "string"
                },
                "teamDrive": {
                  "name": "string",
                  "title": "string"
                },
                "user": {
                  "deletedUser": {},
                  "knownUser": {
                    "isCurrentUser": true,
                    "personName": "string"
                  },
                  "unknownUser": {}
                }
              },
              "title": "string"
            },
            "fileComment": {
              "legacyCommentId": "string",
              "legacyDiscussionId": "string",
              "linkToDiscussion": "string",
              "parent": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "mimeType": "string",
                "name": "string",
                "owner": {
                  "domain": {
                    "legacyId": "string",
                    "name": "string"
                  },
                  "drive": {
                    "name": "string",
                    "title": "string"
                  },
                  "teamDrive": {
                    "name": "string",
                    "title": "string"
                  },
                  "user": {
                    "deletedUser": {},
                    "knownUser": {
                      "isCurrentUser": true,
                      "personName": "string"
                    },
                    "unknownUser": {}
                  }
                },
                "title": "string"
              }
            },
            "teamDrive": {
              "name": "string",
              "root": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "mimeType": "string",
                "name": "string",
                "owner": {
                  "domain": {
                    "legacyId": "string",
                    "name": "string"
                  },
                  "drive": {
                    "name": "string",
                    "title": "string"
                  },
                  "teamDrive": {
                    "name": "string",
                    "title": "string"
                  },
                  "user": {
                    "deletedUser": {},
                    "knownUser": {
                      "isCurrentUser": true,
                      "personName": "string"
                    },
                    "unknownUser": {}
                  }
                },
                "title": "string"
              },
              "title": "string"
            }
          },
          "timeRange": {
            "endTime": "string",
            "startTime": "string"
          },
          "timestamp": "string"
        }
      ],
      "actors": [
        {
          "administrator": {},
          "anonymous": {},
          "impersonation": {
            "impersonatedUser": {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            }
          },
          "system": {
            "type": "TYPE_UNSPECIFIED"
          },
          "user": {
            "deletedUser": {},
            "knownUser": {
              "isCurrentUser": true,
              "personName": "string"
            },
            "unknownUser": {}
          }
        }
      ],
      "primaryActionDetail": {
        "appliedLabelChange": {
          "changes": [
            {
              "fieldChanges": [
                {
                  "displayName": "string",
                  "fieldId": "string",
                  "newValue": {
                    "date": {
                      "value": "string"
                    },
                    "integer": {
                      "value": "string"
                    },
                    "selection": {
                      "displayName": "string",
                      "value": "string"
                    },
                    "selectionList": {
                      "values": [
                        {
                          "displayName": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "text": {
                      "value": "string"
                    },
                    "textList": {
                      "values": [
                        {
                          "value": "string"
                        }
                      ]
                    },
                    "user": {
                      "value": "string"
                    },
                    "userList": {
                      "values": [
                        {
                          "value": "string"
                        }
                      ]
                    }
                  },
                  "oldValue": {
                    "date": {
                      "value": "string"
                    },
                    "integer": {
                      "value": "string"
                    },
                    "selection": {
                      "displayName": "string",
                      "value": "string"
                    },
                    "selectionList": {
                      "values": [
                        {
                          "displayName": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "text": {
                      "value": "string"
                    },
                    "textList": {
                      "values": [
                        {
                          "value": "string"
                        }
                      ]
                    },
                    "user": {
                      "value": "string"
                    },
                    "userList": {
                      "values": [
                        {
                          "value": "string"
                        }
                      ]
                    }
                  }
                }
              ],
              "label": "string",
              "title": "string",
              "types": [
                "TYPE_UNSPECIFIED"
              ]
            }
          ]
        },
        "comment": {
          "assignment": {
            "assignedUser": {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            },
            "subtype": "SUBTYPE_UNSPECIFIED"
          },
          "mentionedUsers": [
            {
              "deletedUser": {},
              "knownUser": {
                "isCurrentUser": true,
                "personName": "string"
              },
              "unknownUser": {}
            }
          ],
          "post": {
            "subtype": "SUBTYPE_UNSPECIFIED"
          },
          "suggestion": {
            "subtype": "SUBTYPE_UNSPECIFIED"
          }
        },
        "create": {
          "copy": {
            "originalObject": {
              "drive": {
                "name": "string",
                "title": "string"
              },
              "driveItem": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              }
            }
          },
          "new": {},
          "upload": {}
        },
        "delete": {
          "type": "TYPE_UNSPECIFIED"
        },
        "dlpChange": {
          "type": "TYPE_UNSPECIFIED"
        },
        "edit": {},
        "move": {
          "addedParents": [
            {
              "drive": {
                "name": "string",
                "title": "string"
              },
              "driveItem": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              }
            }
          ],
          "removedParents": [
            {
              "drive": {
                "name": "string",
                "title": "string"
              },
              "driveItem": {
                "driveFile": {},
                "driveFolder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "file": {},
                "folder": {
                  "type": "TYPE_UNSPECIFIED"
                },
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              }
            }
          ]
        },
        "permissionChange": {
          "addedPermissions": [
            {
              "allowDiscovery": true,
              "anyone": {},
              "domain": {
                "legacyId": "string",
                "name": "string"
              },
              "group": {
                "email": "string",
                "title": "string"
              },
              "role": "ROLE_UNSPECIFIED",
              "user": {
                "deletedUser": {},
                "knownUser": {
                  "isCurrentUser": true,
                  "personName": "string"
                },
                "unknownUser": {}
              }
            }
          ],
          "removedPermissions": [
            {
              "allowDiscovery": true,
              "anyone": {},
              "domain": {
                "legacyId": "string",
                "name": "string"
              },
              "group": {
                "email": "string",
                "title": "string"
              },
              "role": "ROLE_UNSPECIFIED",
              "user": {
                "deletedUser": {},
                "knownUser": {
                  "isCurrentUser": true,
                  "personName": "string"
                },
                "unknownUser": {}
              }
            }
          ]
        },
        "reference": {
          "type": "UNSPECIFIED_REFERENCE_TYPE"
        },
        "rename": {
          "newTitle": "string",
          "oldTitle": "string"
        },
        "restore": {
          "type": "TYPE_UNSPECIFIED"
        },
        "settingsChange": {
          "restrictionChanges": [
            {
              "feature": "FEATURE_UNSPECIFIED",
              "newRestriction": "RESTRICTION_UNSPECIFIED"
            }
          ]
        }
      },
      "targets": [
        {
          "drive": {
            "name": "string",
            "root": {
              "driveFile": {},
              "driveFolder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "file": {},
              "folder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "mimeType": "string",
              "name": "string",
              "owner": {
                "domain": {
                  "legacyId": "string",
                  "name": "string"
                },
                "drive": {
                  "name": "string",
                  "title": "string"
                },
                "teamDrive": {
                  "name": "string",
                  "title": "string"
                },
                "user": {
                  "deletedUser": {},
                  "knownUser": {
                    "isCurrentUser": true,
                    "personName": "string"
                  },
                  "unknownUser": {}
                }
              },
              "title": "string"
            },
            "title": "string"
          },
          "driveItem": {
            "driveFile": {},
            "driveFolder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "file": {},
            "folder": {
              "type": "TYPE_UNSPECIFIED"
            },
            "mimeType": "string",
            "name": "string",
            "owner": {
              "domain": {
                "legacyId": "string",
                "name": "string"
              },
              "drive": {
                "name": "string",
                "title": "string"
              },
              "teamDrive": {
                "name": "string",
                "title": "string"
              },
              "user": {
                "deletedUser": {},
                "knownUser": {
                  "isCurrentUser": true,
                  "personName": "string"
                },
                "unknownUser": {}
              }
            },
            "title": "string"
          },
          "fileComment": {
            "legacyCommentId": "string",
            "legacyDiscussionId": "string",
            "linkToDiscussion": "string",
            "parent": {
              "driveFile": {},
              "driveFolder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "file": {},
              "folder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "mimeType": "string",
              "name": "string",
              "owner": {
                "domain": {
                  "legacyId": "string",
                  "name": "string"
                },
                "drive": {
                  "name": "string",
                  "title": "string"
                },
                "teamDrive": {
                  "name": "string",
                  "title": "string"
                },
                "user": {
                  "deletedUser": {},
                  "knownUser": {
                    "isCurrentUser": true,
                    "personName": "string"
                  },
                  "unknownUser": {}
                }
              },
              "title": "string"
            }
          },
          "teamDrive": {
            "name": "string",
            "root": {
              "driveFile": {},
              "driveFolder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "file": {},
              "folder": {
                "type": "TYPE_UNSPECIFIED"
              },
              "mimeType": "string",
              "name": "string",
              "owner": {
                "domain": {
                  "legacyId": "string",
                  "name": "string"
                },
                "drive": {
                  "name": "string",
                  "title": "string"
                },
                "teamDrive": {
                  "name": "string",
                  "title": "string"
                },
                "user": {
                  "deletedUser": {},
                  "knownUser": {
                    "isCurrentUser": true,
                    "personName": "string"
                  },
                  "unknownUser": {}
                }
              },
              "title": "string"
            },
            "title": "string"
          }
        }
      ],
      "timeRange": {
        "endTime": "string",
        "startTime": "string"
      },
      "timestamp": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for querying Drive activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|[[DriveActivity](#schemadriveactivity)]|false|none|List of activity requested.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_Rename">Rename</h2>
<!-- backwards compatibility -->
<a id="schemarename"></a>
<a id="schema_Rename"></a>
<a id="tocSrename"></a>
<a id="tocsrename"></a>

```json
{
  "newTitle": "string",
  "oldTitle": "string"
}
```

An object was renamed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newTitle|string|false|none|The new title of the drive object.|
|oldTitle|string|false|none|The previous title of the drive object.|

<h2 id="tocS_Restore">Restore</h2>
<!-- backwards compatibility -->
<a id="schemarestore"></a>
<a id="schema_Restore"></a>
<a id="tocSrestore"></a>
<a id="tocsrestore"></a>

```json
{
  "type": "TYPE_UNSPECIFIED"
}
```

A deleted object was restored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of restore action taken.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|UNTRASH|

<h2 id="tocS_RestrictionChange">RestrictionChange</h2>
<!-- backwards compatibility -->
<a id="schemarestrictionchange"></a>
<a id="schema_RestrictionChange"></a>
<a id="tocSrestrictionchange"></a>
<a id="tocsrestrictionchange"></a>

```json
{
  "feature": "FEATURE_UNSPECIFIED",
  "newRestriction": "RESTRICTION_UNSPECIFIED"
}
```

Information about restriction policy changes to a feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feature|string|false|none|The feature which had a change in restriction policy.|
|newRestriction|string|false|none|The restriction in place after the change.|

#### Enumerated Values

|Property|Value|
|---|---|
|feature|FEATURE_UNSPECIFIED|
|feature|SHARING_OUTSIDE_DOMAIN|
|feature|DIRECT_SHARING|
|feature|ITEM_DUPLICATION|
|feature|DRIVE_FILE_STREAM|
|feature|FILE_ORGANIZER_CAN_SHARE_FOLDERS|
|newRestriction|RESTRICTION_UNSPECIFIED|
|newRestriction|UNRESTRICTED|
|newRestriction|FULLY_RESTRICTED|

<h2 id="tocS_Selection">Selection</h2>
<!-- backwards compatibility -->
<a id="schemaselection"></a>
<a id="schema_Selection"></a>
<a id="tocSselection"></a>
<a id="tocsselection"></a>

```json
{
  "displayName": "string",
  "value": "string"
}
```

Wrapper for Selection Field value as combined value/display_name pair for selected choice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Selection value as human-readable display string.|
|value|string|false|none|Selection value as Field Choice ID.|

<h2 id="tocS_SelectionList">SelectionList</h2>
<!-- backwards compatibility -->
<a id="schemaselectionlist"></a>
<a id="schema_SelectionList"></a>
<a id="tocSselectionlist"></a>
<a id="tocsselectionlist"></a>

```json
{
  "values": [
    {
      "displayName": "string",
      "value": "string"
    }
  ]
}
```

Wrapper for SelectionList Field value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[[Selection](#schemaselection)]|false|none|Selection values.|

<h2 id="tocS_SettingsChange">SettingsChange</h2>
<!-- backwards compatibility -->
<a id="schemasettingschange"></a>
<a id="schema_SettingsChange"></a>
<a id="tocSsettingschange"></a>
<a id="tocssettingschange"></a>

```json
{
  "restrictionChanges": [
    {
      "feature": "FEATURE_UNSPECIFIED",
      "newRestriction": "RESTRICTION_UNSPECIFIED"
    }
  ]
}
```

Information about settings changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restrictionChanges|[[RestrictionChange](#schemarestrictionchange)]|false|none|The set of changes made to restrictions.|

<h2 id="tocS_SingleUser">SingleUser</h2>
<!-- backwards compatibility -->
<a id="schemasingleuser"></a>
<a id="schema_SingleUser"></a>
<a id="tocSsingleuser"></a>
<a id="tocssingleuser"></a>

```json
{
  "value": "string"
}
```

Wrapper for User Field value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|User value as email.|

<h2 id="tocS_Suggestion">Suggestion</h2>
<!-- backwards compatibility -->
<a id="schemasuggestion"></a>
<a id="schema_Suggestion"></a>
<a id="tocSsuggestion"></a>
<a id="tocssuggestion"></a>

```json
{
  "subtype": "SUBTYPE_UNSPECIFIED"
}
```

A suggestion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subtype|string|false|none|The sub-type of this event.|

#### Enumerated Values

|Property|Value|
|---|---|
|subtype|SUBTYPE_UNSPECIFIED|
|subtype|ADDED|
|subtype|DELETED|
|subtype|REPLY_ADDED|
|subtype|REPLY_DELETED|
|subtype|ACCEPTED|
|subtype|REJECTED|
|subtype|ACCEPT_DELETED|
|subtype|REJECT_DELETED|

<h2 id="tocS_SystemEvent">SystemEvent</h2>
<!-- backwards compatibility -->
<a id="schemasystemevent"></a>
<a id="schema_SystemEvent"></a>
<a id="tocSsystemevent"></a>
<a id="tocssystemevent"></a>

```json
{
  "type": "TYPE_UNSPECIFIED"
}
```

Event triggered by system operations instead of end users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of the system event that may triggered activity.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|USER_DELETION|
|type|TRASH_AUTO_PURGE|

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "drive": {
    "name": "string",
    "root": {
      "driveFile": {},
      "driveFolder": {
        "type": "TYPE_UNSPECIFIED"
      },
      "file": {},
      "folder": {
        "type": "TYPE_UNSPECIFIED"
      },
      "mimeType": "string",
      "name": "string",
      "owner": {
        "domain": {
          "legacyId": "string",
          "name": "string"
        },
        "drive": {
          "name": "string",
          "title": "string"
        },
        "teamDrive": {
          "name": "string",
          "title": "string"
        },
        "user": {
          "deletedUser": {},
          "knownUser": {
            "isCurrentUser": true,
            "personName": "string"
          },
          "unknownUser": {}
        }
      },
      "title": "string"
    },
    "title": "string"
  },
  "driveItem": {
    "driveFile": {},
    "driveFolder": {
      "type": "TYPE_UNSPECIFIED"
    },
    "file": {},
    "folder": {
      "type": "TYPE_UNSPECIFIED"
    },
    "mimeType": "string",
    "name": "string",
    "owner": {
      "domain": {
        "legacyId": "string",
        "name": "string"
      },
      "drive": {
        "name": "string",
        "title": "string"
      },
      "teamDrive": {
        "name": "string",
        "title": "string"
      },
      "user": {
        "deletedUser": {},
        "knownUser": {
          "isCurrentUser": true,
          "personName": "string"
        },
        "unknownUser": {}
      }
    },
    "title": "string"
  },
  "fileComment": {
    "legacyCommentId": "string",
    "legacyDiscussionId": "string",
    "linkToDiscussion": "string",
    "parent": {
      "driveFile": {},
      "driveFolder": {
        "type": "TYPE_UNSPECIFIED"
      },
      "file": {},
      "folder": {
        "type": "TYPE_UNSPECIFIED"
      },
      "mimeType": "string",
      "name": "string",
      "owner": {
        "domain": {
          "legacyId": "string",
          "name": "string"
        },
        "drive": {
          "name": "string",
          "title": "string"
        },
        "teamDrive": {
          "name": "string",
          "title": "string"
        },
        "user": {
          "deletedUser": {},
          "knownUser": {
            "isCurrentUser": true,
            "personName": "string"
          },
          "unknownUser": {}
        }
      },
      "title": "string"
    }
  },
  "teamDrive": {
    "name": "string",
    "root": {
      "driveFile": {},
      "driveFolder": {
        "type": "TYPE_UNSPECIFIED"
      },
      "file": {},
      "folder": {
        "type": "TYPE_UNSPECIFIED"
      },
      "mimeType": "string",
      "name": "string",
      "owner": {
        "domain": {
          "legacyId": "string",
          "name": "string"
        },
        "drive": {
          "name": "string",
          "title": "string"
        },
        "teamDrive": {
          "name": "string",
          "title": "string"
        },
        "user": {
          "deletedUser": {},
          "knownUser": {
            "isCurrentUser": true,
            "personName": "string"
          },
          "unknownUser": {}
        }
      },
      "title": "string"
    },
    "title": "string"
  }
}
```

Information about the target of activity. For more information on how activity history is shared with users, see [Activity history visibility](https://developers.google.com/drive/activity/v2#activityhistory).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|drive|[Drive](#schemadrive)|false|none|The target is a shared drive.|
|driveItem|[DriveItem](#schemadriveitem)|false|none|The target is a Drive item.|
|fileComment|[FileComment](#schemafilecomment)|false|none|The target is a comment on a Drive file.|
|teamDrive|[TeamDrive](#schemateamdrive)|false|none|This field is deprecated; please use the `drive` field instead.|

<h2 id="tocS_TargetReference">TargetReference</h2>
<!-- backwards compatibility -->
<a id="schematargetreference"></a>
<a id="schema_TargetReference"></a>
<a id="tocStargetreference"></a>
<a id="tocstargetreference"></a>

```json
{
  "drive": {
    "name": "string",
    "title": "string"
  },
  "driveItem": {
    "driveFile": {},
    "driveFolder": {
      "type": "TYPE_UNSPECIFIED"
    },
    "file": {},
    "folder": {
      "type": "TYPE_UNSPECIFIED"
    },
    "name": "string",
    "title": "string"
  },
  "teamDrive": {
    "name": "string",
    "title": "string"
  }
}
```

A lightweight reference to the target of activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|drive|[DriveReference](#schemadrivereference)|false|none|The target is a shared drive.|
|driveItem|[DriveItemReference](#schemadriveitemreference)|false|none|The target is a Drive item.|
|teamDrive|[TeamDriveReference](#schemateamdrivereference)|false|none|This field is deprecated; please use the `drive` field instead.|

<h2 id="tocS_TeamDrive">TeamDrive</h2>
<!-- backwards compatibility -->
<a id="schemateamdrive"></a>
<a id="schema_TeamDrive"></a>
<a id="tocSteamdrive"></a>
<a id="tocsteamdrive"></a>

```json
{
  "name": "string",
  "root": {
    "driveFile": {},
    "driveFolder": {
      "type": "TYPE_UNSPECIFIED"
    },
    "file": {},
    "folder": {
      "type": "TYPE_UNSPECIFIED"
    },
    "mimeType": "string",
    "name": "string",
    "owner": {
      "domain": {
        "legacyId": "string",
        "name": "string"
      },
      "drive": {
        "name": "string",
        "title": "string"
      },
      "teamDrive": {
        "name": "string",
        "title": "string"
      },
      "user": {
        "deletedUser": {},
        "knownUser": {
          "isCurrentUser": true,
          "personName": "string"
        },
        "unknownUser": {}
      }
    },
    "title": "string"
  },
  "title": "string"
}
```

This item is deprecated; please see `Drive` instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|This field is deprecated; please see `Drive.name` instead.|
|root|[DriveItem](#schemadriveitem)|false|none|This field is deprecated; please see `Drive.root` instead.|
|title|string|false|none|This field is deprecated; please see `Drive.title` instead.|

<h2 id="tocS_TeamDriveReference">TeamDriveReference</h2>
<!-- backwards compatibility -->
<a id="schemateamdrivereference"></a>
<a id="schema_TeamDriveReference"></a>
<a id="tocSteamdrivereference"></a>
<a id="tocsteamdrivereference"></a>

```json
{
  "name": "string",
  "title": "string"
}
```

This item is deprecated; please see `DriveReference` instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|This field is deprecated; please see `DriveReference.name` instead.|
|title|string|false|none|This field is deprecated; please see `DriveReference.title` instead.|

<h2 id="tocS_Text">Text</h2>
<!-- backwards compatibility -->
<a id="schematext"></a>
<a id="schema_Text"></a>
<a id="tocStext"></a>
<a id="tocstext"></a>

```json
{
  "value": "string"
}
```

Wrapper for Text Field value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|Value of Text Field.|

<h2 id="tocS_TextList">TextList</h2>
<!-- backwards compatibility -->
<a id="schematextlist"></a>
<a id="schema_TextList"></a>
<a id="tocStextlist"></a>
<a id="tocstextlist"></a>

```json
{
  "values": [
    {
      "value": "string"
    }
  ]
}
```

Wrapper for Text List Field value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[[Text](#schematext)]|false|none|Text values.|

<h2 id="tocS_TimeRange">TimeRange</h2>
<!-- backwards compatibility -->
<a id="schematimerange"></a>
<a id="schema_TimeRange"></a>
<a id="tocStimerange"></a>
<a id="tocstimerange"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

Information about time ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The end of the time range.|
|startTime|string(google-datetime)|false|none|The start of the time range.|

<h2 id="tocS_UnknownUser">UnknownUser</h2>
<!-- backwards compatibility -->
<a id="schemaunknownuser"></a>
<a id="schema_UnknownUser"></a>
<a id="tocSunknownuser"></a>
<a id="tocsunknownuser"></a>

```json
{}
```

A user about whom nothing is currently known.

<h2 id="tocS_Upload">Upload</h2>
<!-- backwards compatibility -->
<a id="schemaupload"></a>
<a id="schema_Upload"></a>
<a id="tocSupload"></a>
<a id="tocsupload"></a>

```json
{}
```

An object was uploaded into Drive.

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "deletedUser": {},
  "knownUser": {
    "isCurrentUser": true,
    "personName": "string"
  },
  "unknownUser": {}
}
```

Information about an end user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedUser|[DeletedUser](#schemadeleteduser)|false|none|A user whose account has since been deleted.|
|knownUser|[KnownUser](#schemaknownuser)|false|none|A known user.|
|unknownUser|[UnknownUser](#schemaunknownuser)|false|none|A user about whom nothing is currently known.|

<h2 id="tocS_UserList">UserList</h2>
<!-- backwards compatibility -->
<a id="schemauserlist"></a>
<a id="schema_UserList"></a>
<a id="tocSuserlist"></a>
<a id="tocsuserlist"></a>

```json
{
  "values": [
    {
      "value": "string"
    }
  ]
}
```

Wrapper for UserList Field value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[[SingleUser](#schemasingleuser)]|false|none|User values.|
