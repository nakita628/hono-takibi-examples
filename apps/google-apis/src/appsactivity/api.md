<h1 id="drive-activity-api">Drive Activity API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides a historical view of activity.

Base URLs:

* <a href="https://www.googleapis.com/appsactivity/v1">https://www.googleapis.com/appsactivity/v1</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/google-apps/activity/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/activity|View the activity history of your Google apps|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/activity|View the activity history of your Google apps|

<h1 id="drive-activity-api-activities">activities</h1>

## appsactivity.activities.list

<a id="opIdappsactivity.activities.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/activities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /activities`

Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.

<h3 id="appsactivityactivitieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|drive.ancestorId|query|string|false|Identifies the Drive folder containing the items for which to return activities.|
|drive.fileId|query|string|false|Identifies the Drive item to return activities for.|
|groupingStrategy|query|string|false|Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object.|
|pageSize|query|integer|false|The maximum number of events to return on a page. The response includes a continuation token if there are more events.|
|pageToken|query|string|false|A token to retrieve a specific page of results.|
|source|query|string|false|The Google service from which to return activities. Possible values of source are: <br>- drive.google.com|
|userId|query|string|false|The ID used for ACL checks (does not filter the resulting event list by the assigned value). Use the special value me to indicate the currently authenticated user.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|groupingStrategy|driveUi|
|groupingStrategy|none|
|alt|json|

> Example responses

> 200 Response

```json
{
  "activities": [
    {
      "combinedEvent": {
        "additionalEventTypes": [
          "comment"
        ],
        "eventTimeMillis": "string",
        "fromUserDeletion": true,
        "move": {
          "addedParents": [
            {
              "id": "string",
              "isRoot": true,
              "title": "string"
            }
          ],
          "removedParents": [
            {
              "id": "string",
              "isRoot": true,
              "title": "string"
            }
          ]
        },
        "permissionChanges": [
          {
            "addedPermissions": [
              {
                "name": "string",
                "permissionId": "string",
                "role": "commenter",
                "type": "anyone",
                "user": {
                  "isDeleted": true,
                  "isMe": true,
                  "name": "string",
                  "permissionId": "string",
                  "photo": {
                    "url": "string"
                  }
                },
                "withLink": true
              }
            ],
            "removedPermissions": [
              {
                "name": "string",
                "permissionId": "string",
                "role": "commenter",
                "type": "anyone",
                "user": {
                  "isDeleted": true,
                  "isMe": true,
                  "name": "string",
                  "permissionId": "string",
                  "photo": {
                    "url": "string"
                  }
                },
                "withLink": true
              }
            ]
          }
        ],
        "primaryEventType": "comment",
        "rename": {
          "newTitle": "string",
          "oldTitle": "string"
        },
        "target": {
          "id": "string",
          "mimeType": "string",
          "name": "string"
        },
        "user": {
          "isDeleted": true,
          "isMe": true,
          "name": "string",
          "permissionId": "string",
          "photo": {
            "url": "string"
          }
        }
      },
      "singleEvents": [
        {
          "additionalEventTypes": [
            "comment"
          ],
          "eventTimeMillis": "string",
          "fromUserDeletion": true,
          "move": {
            "addedParents": [
              {
                "id": "string",
                "isRoot": true,
                "title": "string"
              }
            ],
            "removedParents": [
              {
                "id": "string",
                "isRoot": true,
                "title": "string"
              }
            ]
          },
          "permissionChanges": [
            {
              "addedPermissions": [
                {
                  "name": "string",
                  "permissionId": "string",
                  "role": "commenter",
                  "type": "anyone",
                  "user": {
                    "isDeleted": true,
                    "isMe": true,
                    "name": "string",
                    "permissionId": "string",
                    "photo": {
                      "url": "string"
                    }
                  },
                  "withLink": true
                }
              ],
              "removedPermissions": [
                {
                  "name": "string",
                  "permissionId": "string",
                  "role": "commenter",
                  "type": "anyone",
                  "user": {
                    "isDeleted": true,
                    "isMe": true,
                    "name": "string",
                    "permissionId": "string",
                    "photo": {
                      "url": "string"
                    }
                  },
                  "withLink": true
                }
              ]
            }
          ],
          "primaryEventType": "comment",
          "rename": {
            "newTitle": "string",
            "oldTitle": "string"
          },
          "target": {
            "id": "string",
            "mimeType": "string",
            "name": "string"
          },
          "user": {
            "isDeleted": true,
            "isMe": true,
            "name": "string",
            "permissionId": "string",
            "photo": {
              "url": "string"
            }
          }
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="appsactivityactivitieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListActivitiesResponse](#schemalistactivitiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/activity ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/activity )
</aside>

# Schemas

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "combinedEvent": {
    "additionalEventTypes": [
      "comment"
    ],
    "eventTimeMillis": "string",
    "fromUserDeletion": true,
    "move": {
      "addedParents": [
        {
          "id": "string",
          "isRoot": true,
          "title": "string"
        }
      ],
      "removedParents": [
        {
          "id": "string",
          "isRoot": true,
          "title": "string"
        }
      ]
    },
    "permissionChanges": [
      {
        "addedPermissions": [
          {
            "name": "string",
            "permissionId": "string",
            "role": "commenter",
            "type": "anyone",
            "user": {
              "isDeleted": true,
              "isMe": true,
              "name": "string",
              "permissionId": "string",
              "photo": {
                "url": "string"
              }
            },
            "withLink": true
          }
        ],
        "removedPermissions": [
          {
            "name": "string",
            "permissionId": "string",
            "role": "commenter",
            "type": "anyone",
            "user": {
              "isDeleted": true,
              "isMe": true,
              "name": "string",
              "permissionId": "string",
              "photo": {
                "url": "string"
              }
            },
            "withLink": true
          }
        ]
      }
    ],
    "primaryEventType": "comment",
    "rename": {
      "newTitle": "string",
      "oldTitle": "string"
    },
    "target": {
      "id": "string",
      "mimeType": "string",
      "name": "string"
    },
    "user": {
      "isDeleted": true,
      "isMe": true,
      "name": "string",
      "permissionId": "string",
      "photo": {
        "url": "string"
      }
    }
  },
  "singleEvents": [
    {
      "additionalEventTypes": [
        "comment"
      ],
      "eventTimeMillis": "string",
      "fromUserDeletion": true,
      "move": {
        "addedParents": [
          {
            "id": "string",
            "isRoot": true,
            "title": "string"
          }
        ],
        "removedParents": [
          {
            "id": "string",
            "isRoot": true,
            "title": "string"
          }
        ]
      },
      "permissionChanges": [
        {
          "addedPermissions": [
            {
              "name": "string",
              "permissionId": "string",
              "role": "commenter",
              "type": "anyone",
              "user": {
                "isDeleted": true,
                "isMe": true,
                "name": "string",
                "permissionId": "string",
                "photo": {
                  "url": "string"
                }
              },
              "withLink": true
            }
          ],
          "removedPermissions": [
            {
              "name": "string",
              "permissionId": "string",
              "role": "commenter",
              "type": "anyone",
              "user": {
                "isDeleted": true,
                "isMe": true,
                "name": "string",
                "permissionId": "string",
                "photo": {
                  "url": "string"
                }
              },
              "withLink": true
            }
          ]
        }
      ],
      "primaryEventType": "comment",
      "rename": {
        "newTitle": "string",
        "oldTitle": "string"
      },
      "target": {
        "id": "string",
        "mimeType": "string",
        "name": "string"
      },
      "user": {
        "isDeleted": true,
        "isMe": true,
        "name": "string",
        "permissionId": "string",
        "photo": {
          "url": "string"
        }
      }
    }
  ]
}
```

An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|combinedEvent|[Event](#schemaevent)|false|none|The fields common to all of the singleEvents that make up the Activity.|
|singleEvents|[[Event](#schemaevent)]|false|none|A list of all the Events that make up the Activity.|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "additionalEventTypes": [
    "comment"
  ],
  "eventTimeMillis": "string",
  "fromUserDeletion": true,
  "move": {
    "addedParents": [
      {
        "id": "string",
        "isRoot": true,
        "title": "string"
      }
    ],
    "removedParents": [
      {
        "id": "string",
        "isRoot": true,
        "title": "string"
      }
    ]
  },
  "permissionChanges": [
    {
      "addedPermissions": [
        {
          "name": "string",
          "permissionId": "string",
          "role": "commenter",
          "type": "anyone",
          "user": {
            "isDeleted": true,
            "isMe": true,
            "name": "string",
            "permissionId": "string",
            "photo": {
              "url": "string"
            }
          },
          "withLink": true
        }
      ],
      "removedPermissions": [
        {
          "name": "string",
          "permissionId": "string",
          "role": "commenter",
          "type": "anyone",
          "user": {
            "isDeleted": true,
            "isMe": true,
            "name": "string",
            "permissionId": "string",
            "photo": {
              "url": "string"
            }
          },
          "withLink": true
        }
      ]
    }
  ],
  "primaryEventType": "comment",
  "rename": {
    "newTitle": "string",
    "oldTitle": "string"
  },
  "target": {
    "id": "string",
    "mimeType": "string",
    "name": "string"
  },
  "user": {
    "isDeleted": true,
    "isMe": true,
    "name": "string",
    "permissionId": "string",
    "photo": {
      "url": "string"
    }
  }
}
```

Represents the changes associated with an action taken by a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalEventTypes|[string]|false|none|Additional event types. Some events may have multiple types when multiple actions are part of a single event. For example, creating a document, renaming it, and sharing it may be part of a single file-creation event.|
|eventTimeMillis|string(uint64)|false|none|The time at which the event occurred formatted as Unix time in milliseconds.|
|fromUserDeletion|boolean|false|none|Whether this event is caused by a user being deleted.|
|move|[Move](#schemamove)|false|none|Extra information for move type events, such as changes in an object's parents.|
|permissionChanges|[[PermissionChange](#schemapermissionchange)]|false|none|Extra information for permissionChange type events, such as the user or group the new permission applies to.|
|primaryEventType|string|false|none|The main type of event that occurred.|
|rename|[Rename](#schemarename)|false|none|Extra information for rename type events, such as the old and new names.|
|target|[Target](#schematarget)|false|none|Information specific to the Target object modified by the event.|
|user|[User](#schemauser)|false|none|Represents the user responsible for the event.|

#### Enumerated Values

|Property|Value|
|---|---|
|additionalEventTypes|comment|
|additionalEventTypes|create|
|additionalEventTypes|edit|
|additionalEventTypes|emptyTrash|
|additionalEventTypes|move|
|additionalEventTypes|permissionChange|
|additionalEventTypes|rename|
|additionalEventTypes|trash|
|additionalEventTypes|unknown|
|additionalEventTypes|untrash|
|additionalEventTypes|upload|
|primaryEventType|comment|
|primaryEventType|create|
|primaryEventType|edit|
|primaryEventType|emptyTrash|
|primaryEventType|move|
|primaryEventType|permissionChange|
|primaryEventType|rename|
|primaryEventType|trash|
|primaryEventType|unknown|
|primaryEventType|untrash|
|primaryEventType|upload|

<h2 id="tocS_ListActivitiesResponse">ListActivitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistactivitiesresponse"></a>
<a id="schema_ListActivitiesResponse"></a>
<a id="tocSlistactivitiesresponse"></a>
<a id="tocslistactivitiesresponse"></a>

```json
{
  "activities": [
    {
      "combinedEvent": {
        "additionalEventTypes": [
          "comment"
        ],
        "eventTimeMillis": "string",
        "fromUserDeletion": true,
        "move": {
          "addedParents": [
            {
              "id": "string",
              "isRoot": true,
              "title": "string"
            }
          ],
          "removedParents": [
            {
              "id": "string",
              "isRoot": true,
              "title": "string"
            }
          ]
        },
        "permissionChanges": [
          {
            "addedPermissions": [
              {
                "name": "string",
                "permissionId": "string",
                "role": "commenter",
                "type": "anyone",
                "user": {
                  "isDeleted": true,
                  "isMe": true,
                  "name": "string",
                  "permissionId": "string",
                  "photo": {
                    "url": "string"
                  }
                },
                "withLink": true
              }
            ],
            "removedPermissions": [
              {
                "name": "string",
                "permissionId": "string",
                "role": "commenter",
                "type": "anyone",
                "user": {
                  "isDeleted": true,
                  "isMe": true,
                  "name": "string",
                  "permissionId": "string",
                  "photo": {
                    "url": "string"
                  }
                },
                "withLink": true
              }
            ]
          }
        ],
        "primaryEventType": "comment",
        "rename": {
          "newTitle": "string",
          "oldTitle": "string"
        },
        "target": {
          "id": "string",
          "mimeType": "string",
          "name": "string"
        },
        "user": {
          "isDeleted": true,
          "isMe": true,
          "name": "string",
          "permissionId": "string",
          "photo": {
            "url": "string"
          }
        }
      },
      "singleEvents": [
        {
          "additionalEventTypes": [
            "comment"
          ],
          "eventTimeMillis": "string",
          "fromUserDeletion": true,
          "move": {
            "addedParents": [
              {
                "id": "string",
                "isRoot": true,
                "title": "string"
              }
            ],
            "removedParents": [
              {
                "id": "string",
                "isRoot": true,
                "title": "string"
              }
            ]
          },
          "permissionChanges": [
            {
              "addedPermissions": [
                {
                  "name": "string",
                  "permissionId": "string",
                  "role": "commenter",
                  "type": "anyone",
                  "user": {
                    "isDeleted": true,
                    "isMe": true,
                    "name": "string",
                    "permissionId": "string",
                    "photo": {
                      "url": "string"
                    }
                  },
                  "withLink": true
                }
              ],
              "removedPermissions": [
                {
                  "name": "string",
                  "permissionId": "string",
                  "role": "commenter",
                  "type": "anyone",
                  "user": {
                    "isDeleted": true,
                    "isMe": true,
                    "name": "string",
                    "permissionId": "string",
                    "photo": {
                      "url": "string"
                    }
                  },
                  "withLink": true
                }
              ]
            }
          ],
          "primaryEventType": "comment",
          "rename": {
            "newTitle": "string",
            "oldTitle": "string"
          },
          "target": {
            "id": "string",
            "mimeType": "string",
            "name": "string"
          },
          "user": {
            "isDeleted": true,
            "isMe": true,
            "name": "string",
            "permissionId": "string",
            "photo": {
              "url": "string"
            }
          }
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

The response from the list request. Contains a list of activities and a token to retrieve the next page of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|[[Activity](#schemaactivity)]|false|none|List of activities.|
|nextPageToken|string|false|none|Token for the next page of results.|

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
      "id": "string",
      "isRoot": true,
      "title": "string"
    }
  ],
  "removedParents": [
    {
      "id": "string",
      "isRoot": true,
      "title": "string"
    }
  ]
}
```

Contains information about changes in an object's parents as a result of a move type event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addedParents|[[Parent](#schemaparent)]|false|none|The added parent(s).|
|removedParents|[[Parent](#schemaparent)]|false|none|The removed parent(s).|

<h2 id="tocS_Parent">Parent</h2>
<!-- backwards compatibility -->
<a id="schemaparent"></a>
<a id="schema_Parent"></a>
<a id="tocSparent"></a>
<a id="tocsparent"></a>

```json
{
  "id": "string",
  "isRoot": true,
  "title": "string"
}
```

Contains information about a parent object. For example, a folder in Drive is a parent for all files within it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The parent's ID.|
|isRoot|boolean|false|none|Whether this is the root folder.|
|title|string|false|none|The parent's title.|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "name": "string",
  "permissionId": "string",
  "role": "commenter",
  "type": "anyone",
  "user": {
    "isDeleted": true,
    "isMe": true,
    "name": "string",
    "permissionId": "string",
    "photo": {
      "url": "string"
    }
  },
  "withLink": true
}
```

Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the user or group the permission applies to.|
|permissionId|string|false|none|The ID for this permission. Corresponds to the Drive API's permission ID returned as part of the Drive Permissions resource.|
|role|string|false|none|Indicates the Google Drive permissions role. The role determines a user's ability to read, write, or comment on the file.|
|type|string|false|none|Indicates how widely permissions are granted.|
|user|[User](#schemauser)|false|none|The user's information if the type is USER.|
|withLink|boolean|false|none|Whether the permission requires a link to the file.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|commenter|
|role|fileOrganizer|
|role|owner|
|role|publishedReader|
|role|reader|
|role|writer|
|type|anyone|
|type|domain|
|type|group|
|type|user|

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
      "name": "string",
      "permissionId": "string",
      "role": "commenter",
      "type": "anyone",
      "user": {
        "isDeleted": true,
        "isMe": true,
        "name": "string",
        "permissionId": "string",
        "photo": {
          "url": "string"
        }
      },
      "withLink": true
    }
  ],
  "removedPermissions": [
    {
      "name": "string",
      "permissionId": "string",
      "role": "commenter",
      "type": "anyone",
      "user": {
        "isDeleted": true,
        "isMe": true,
        "name": "string",
        "permissionId": "string",
        "photo": {
          "url": "string"
        }
      },
      "withLink": true
    }
  ]
}
```

Contains information about a Drive object's permissions that changed as a result of a permissionChange type event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addedPermissions|[[Permission](#schemapermission)]|false|none|Lists all Permission objects added.|
|removedPermissions|[[Permission](#schemapermission)]|false|none|Lists all Permission objects removed.|

<h2 id="tocS_Photo">Photo</h2>
<!-- backwards compatibility -->
<a id="schemaphoto"></a>
<a id="schema_Photo"></a>
<a id="tocSphoto"></a>
<a id="tocsphoto"></a>

```json
{
  "url": "string"
}
```

Photo information for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|The URL of the photo.|

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

Contains information about a renametype event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newTitle|string|false|none|The new title.|
|oldTitle|string|false|none|The old title.|

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "id": "string",
  "mimeType": "string",
  "name": "string"
}
```

Information about the object modified by the event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the target. For example, in Google Drive, this is the file or folder ID.|
|mimeType|string|false|none|The MIME type of the target.|
|name|string|false|none|The name of the target. For example, in Google Drive, this is the title of the file.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "isDeleted": true,
  "isMe": true,
  "name": "string",
  "permissionId": "string",
  "photo": {
    "url": "string"
  }
}
```

A representation of a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isDeleted|boolean|false|none|A boolean which indicates whether the specified User was deleted. If true, name, photo and permission_id will be omitted.|
|isMe|boolean|false|none|Whether the user is the authenticated user.|
|name|string|false|none|The displayable name of the user.|
|permissionId|string|false|none|The permission ID associated with this user. Equivalent to the Drive API's permission ID for this user, returned as part of the Drive Permissions resource.|
|photo|[Photo](#schemaphoto)|false|none|The profile photo of the user. Not present if the user has no profile photo.|
