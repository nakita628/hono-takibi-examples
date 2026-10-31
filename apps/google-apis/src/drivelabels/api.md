<h1 id="drive-labels-api">Drive Labels API v2beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API for managing Drive Labels

Base URLs:

* <a href="https://drivelabels.googleapis.com/">https://drivelabels.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/drive/labels">External documentation</a>

<h1 id="drive-labels-api-labels">labels</h1>

## drivelabels.labels.list

<a id="opIddrivelabels.labels.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/labels \
  -H 'Accept: application/json'
```

`GET /v2beta/labels`

List labels.

<h3 id="drivelabelslabelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|query|string|false|The customer to scope this list request to. For example: "customers/abcd1234". If unset, will return all labels within the current customer.|
|languageCode|query|string|false|The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.|
|minimumRole|query|string|false|Specifies the level of access the user must have on the returned Labels. The minimum role a user must have on a label. Defaults to `READER`.|
|pageSize|query|integer|false|Maximum number of labels to return per page. Default: 50. Max: 200.|
|pageToken|query|string|false|The token of the page to return.|
|publishedOnly|query|boolean|false|Whether to include only published labels in the results. * When `true`, only the current published label revisions are returned. Disabled labels are included. Returned label resource names reference the published revision (`labels/{id}/{revision_id}`). * When `false`, the current label revisions are returned, which might not be published. Returned label resource names don't reference a specific revision (`labels/{id}`).|
|useAdminAccess|query|boolean|false|Set to `true` in order to use the user's admin credentials. This will return all Labels within the customer.|
|view|query|string|false|When specified, only certain fields belonging to the indicated view are returned.|
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
|minimumRole|LABEL_ROLE_UNSPECIFIED|
|minimumRole|READER|
|minimumRole|APPLIER|
|minimumRole|ORGANIZER|
|minimumRole|EDITOR|
|view|LABEL_VIEW_BASIC|
|view|LABEL_VIEW_FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "labels": [
    {
      "appliedCapabilities": {
        "canApply": true,
        "canRead": true,
        "canRemove": true
      },
      "appliedLabelPolicy": {
        "copyMode": "COPY_MODE_UNSPECIFIED"
      },
      "createTime": "string",
      "creator": {
        "person": "string"
      },
      "customer": "string",
      "disableTime": "string",
      "disabler": {
        "person": "string"
      },
      "displayHints": {
        "disabled": true,
        "hiddenInSearch": true,
        "priority": "string",
        "shownInApply": true
      },
      "fields": [
        {
          "appliedCapabilities": {
            "canRead": true,
            "canSearch": true,
            "canWrite": true
          },
          "createTime": "string",
          "creator": {
            "person": "string"
          },
          "dateOptions": {
            "dateFormat": "string",
            "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
            "maxValue": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "minValue": {
              "day": 0,
              "month": 0,
              "year": 0
            }
          },
          "disableTime": "string",
          "disabler": {
            "person": "string"
          },
          "displayHints": {
            "disabled": true,
            "hiddenInSearch": true,
            "required": true,
            "shownInApply": true
          },
          "id": "string",
          "integerOptions": {
            "maxValue": "string",
            "minValue": "string"
          },
          "lifecycle": {
            "disabledPolicy": {
              "hideInSearch": true,
              "showInApply": true
            },
            "hasUnpublishedChanges": true,
            "state": "STATE_UNSPECIFIED"
          },
          "lockStatus": {
            "locked": true
          },
          "properties": {
            "displayName": "string",
            "insertBeforeField": "string",
            "required": true
          },
          "publisher": {
            "person": "string"
          },
          "queryKey": "string",
          "schemaCapabilities": {
            "canDelete": true,
            "canDisable": true,
            "canEnable": true,
            "canUpdate": true
          },
          "selectionOptions": {
            "choices": [
              {
                "appliedCapabilities": {
                  "canRead": true,
                  "canSearch": true,
                  "canSelect": true
                },
                "createTime": "string",
                "creator": {
                  "person": "string"
                },
                "disableTime": "string",
                "disabler": {
                  "person": "string"
                },
                "displayHints": {
                  "badgeColors": {
                    "backgroundColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "foregroundColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "soloColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    }
                  },
                  "badgePriority": "string",
                  "darkBadgeColors": {
                    "backgroundColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "foregroundColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "soloColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    }
                  },
                  "disabled": true,
                  "hiddenInSearch": true,
                  "shownInApply": true
                },
                "id": "string",
                "lifecycle": {
                  "disabledPolicy": {
                    "hideInSearch": true,
                    "showInApply": true
                  },
                  "hasUnpublishedChanges": true,
                  "state": "STATE_UNSPECIFIED"
                },
                "lockStatus": {
                  "locked": true
                },
                "properties": {
                  "badgeConfig": {
                    "color": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "priorityOverride": "string"
                  },
                  "description": "string",
                  "displayName": "string",
                  "insertBeforeChoice": "string"
                },
                "publishTime": "string",
                "publisher": {
                  "person": "string"
                },
                "schemaCapabilities": {
                  "canDelete": true,
                  "canDisable": true,
                  "canEnable": true,
                  "canUpdate": true
                },
                "updateTime": "string",
                "updater": {
                  "person": "string"
                }
              }
            ],
            "listOptions": {
              "maxEntries": 0
            }
          },
          "textOptions": {
            "maxLength": 0,
            "minLength": 0
          },
          "updateTime": "string",
          "updater": {
            "person": "string"
          },
          "userOptions": {
            "listOptions": {
              "maxEntries": 0
            }
          }
        }
      ],
      "id": "string",
      "labelType": "LABEL_TYPE_UNSPECIFIED",
      "learnMoreUri": "string",
      "lifecycle": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "hasUnpublishedChanges": true,
        "state": "STATE_UNSPECIFIED"
      },
      "lockStatus": {
        "locked": true
      },
      "name": "string",
      "properties": {
        "description": "string",
        "title": "string"
      },
      "publishTime": "string",
      "publisher": {
        "person": "string"
      },
      "revisionCreateTime": "string",
      "revisionCreator": {
        "person": "string"
      },
      "revisionId": "string",
      "schemaCapabilities": {
        "canDelete": true,
        "canDisable": true,
        "canEnable": true,
        "canUpdate": true
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="drivelabelslabelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaListLabelsResponse](#schemagoogleappsdrivelabelsv2betalistlabelsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## drivelabels.labels.create

<a id="opIddrivelabels.labels.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "fields": [
      {
        "dateOptions": {
          "dateFormatType": "DATE_FORMAT_UNSPECIFIED"
        },
        "integerOptions": {},
        "properties": {
          "displayName": "string",
          "insertBeforeField": "string",
          "required": true
        },
        "selectionOptions": {
          "choices": [
            {
              "id": "string",
              "properties": {
                "badgeConfig": {
                  "color": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "priorityOverride": "string"
                },
                "description": "string",
                "displayName": "string",
                "insertBeforeChoice": "string"
              }
            }
          ],
          "listOptions": {
            "maxEntries": 0
          }
        },
        "textOptions": {},
        "userOptions": {
          "listOptions": {
            "maxEntries": 0
          }
        }
      }
    ],
    "labelType": "LABEL_TYPE_UNSPECIFIED",
    "learnMoreUri": "string",
    "properties": {
      "description": "string",
      "title": "string"
    }
  }'
```

`POST /v2beta/labels`

Creates a new Label.

> Body parameter

```json
{
  "fields": [
    {
      "dateOptions": {
        "dateFormatType": "DATE_FORMAT_UNSPECIFIED"
      },
      "integerOptions": {},
      "properties": {
        "displayName": "string",
        "insertBeforeField": "string",
        "required": true
      },
      "selectionOptions": {
        "choices": [
          {
            "id": "string",
            "properties": {
              "badgeConfig": {
                "color": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "priorityOverride": "string"
              },
              "description": "string",
              "displayName": "string",
              "insertBeforeChoice": "string"
            }
          }
        ],
        "listOptions": {
          "maxEntries": 0
        }
      },
      "textOptions": {},
      "userOptions": {
        "listOptions": {
          "maxEntries": 0
        }
      }
    }
  ],
  "labelType": "LABEL_TYPE_UNSPECIFIED",
  "learnMoreUri": "string",
  "properties": {
    "description": "string",
    "title": "string"
  }
}
```

<h3 id="drivelabelslabelscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|languageCode|query|string|false|The BCP-47 language code to use for evaluating localized Field labels in response. When not specified, values in the default configured language will be used.|
|useAdminAccess|query|boolean|false|Set to `true` in order to use the user's admin privileges. The server will verify the user is an admin before allowing access.|
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
|body|body|[GoogleAppsDriveLabelsV2betaLabel](#schemagoogleappsdrivelabelsv2betalabel)|false|none|
|» fields|body|[[GoogleAppsDriveLabelsV2betaField](#schemagoogleappsdrivelabelsv2betafield)]|false|List of fields in descending priority order.|
|» labelType|body|string|false|Required. The type of label.|
|» learnMoreUri|body|string|false|Custom URL to present to users to allow them to learn more about this label and how it should be used.|
|» properties|body|[GoogleAppsDriveLabelsV2betaLabelProperties](#schemagoogleappsdrivelabelsv2betalabelproperties)|false|Required. The basic properties of the label.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» labelType|LABEL_TYPE_UNSPECIFIED|
|» labelType|SHARED|
|» labelType|ADMIN|

> Example responses

> 200 Response

```json
{
  "appliedCapabilities": {
    "canApply": true,
    "canRead": true,
    "canRemove": true
  },
  "appliedLabelPolicy": {
    "copyMode": "COPY_MODE_UNSPECIFIED"
  },
  "createTime": "string",
  "creator": {
    "person": "string"
  },
  "customer": "string",
  "disableTime": "string",
  "disabler": {
    "person": "string"
  },
  "displayHints": {
    "disabled": true,
    "hiddenInSearch": true,
    "priority": "string",
    "shownInApply": true
  },
  "fields": [
    {
      "appliedCapabilities": {
        "canRead": true,
        "canSearch": true,
        "canWrite": true
      },
      "createTime": "string",
      "creator": {
        "person": "string"
      },
      "dateOptions": {
        "dateFormat": "string",
        "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
        "maxValue": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "minValue": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      },
      "disableTime": "string",
      "disabler": {
        "person": "string"
      },
      "displayHints": {
        "disabled": true,
        "hiddenInSearch": true,
        "required": true,
        "shownInApply": true
      },
      "id": "string",
      "integerOptions": {
        "maxValue": "string",
        "minValue": "string"
      },
      "lifecycle": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "hasUnpublishedChanges": true,
        "state": "STATE_UNSPECIFIED"
      },
      "lockStatus": {
        "locked": true
      },
      "properties": {
        "displayName": "string",
        "insertBeforeField": "string",
        "required": true
      },
      "publisher": {
        "person": "string"
      },
      "queryKey": "string",
      "schemaCapabilities": {
        "canDelete": true,
        "canDisable": true,
        "canEnable": true,
        "canUpdate": true
      },
      "selectionOptions": {
        "choices": [
          {
            "appliedCapabilities": {
              "canRead": true,
              "canSearch": true,
              "canSelect": true
            },
            "createTime": "string",
            "creator": {
              "person": "string"
            },
            "disableTime": "string",
            "disabler": {
              "person": "string"
            },
            "displayHints": {
              "badgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "badgePriority": "string",
              "darkBadgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "disabled": true,
              "hiddenInSearch": true,
              "shownInApply": true
            },
            "id": "string",
            "lifecycle": {
              "disabledPolicy": {
                "hideInSearch": true,
                "showInApply": true
              },
              "hasUnpublishedChanges": true,
              "state": "STATE_UNSPECIFIED"
            },
            "lockStatus": {
              "locked": true
            },
            "properties": {
              "badgeConfig": {
                "color": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "priorityOverride": "string"
              },
              "description": "string",
              "displayName": "string",
              "insertBeforeChoice": "string"
            },
            "publishTime": "string",
            "publisher": {
              "person": "string"
            },
            "schemaCapabilities": {
              "canDelete": true,
              "canDisable": true,
              "canEnable": true,
              "canUpdate": true
            },
            "updateTime": "string",
            "updater": {
              "person": "string"
            }
          }
        ],
        "listOptions": {
          "maxEntries": 0
        }
      },
      "textOptions": {
        "maxLength": 0,
        "minLength": 0
      },
      "updateTime": "string",
      "updater": {
        "person": "string"
      },
      "userOptions": {
        "listOptions": {
          "maxEntries": 0
        }
      }
    }
  ],
  "id": "string",
  "labelType": "LABEL_TYPE_UNSPECIFIED",
  "learnMoreUri": "string",
  "lifecycle": {
    "disabledPolicy": {
      "hideInSearch": true,
      "showInApply": true
    },
    "hasUnpublishedChanges": true,
    "state": "STATE_UNSPECIFIED"
  },
  "lockStatus": {
    "locked": true
  },
  "name": "string",
  "properties": {
    "description": "string",
    "title": "string"
  },
  "publishTime": "string",
  "publisher": {
    "person": "string"
  },
  "revisionCreateTime": "string",
  "revisionCreator": {
    "person": "string"
  },
  "revisionId": "string",
  "schemaCapabilities": {
    "canDelete": true,
    "canDisable": true,
    "canEnable": true,
    "canUpdate": true
  }
}
```

<h3 id="drivelabelslabelscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaLabel](#schemagoogleappsdrivelabelsv2betalabel)|

<aside class="success">
This operation does not require authentication
</aside>

## drivelabels.labels.revisions.permissions.delete

<a id="opIddrivelabels.labels.revisions.permissions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v2beta/{name}`

Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

<h3 id="drivelabelslabelsrevisionspermissionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Label Permission resource name.|
|useAdminAccess|query|boolean|false|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
|writeControl.requiredRevisionId|query|string|false|The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error.|
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

<h3 id="drivelabelslabelsrevisionspermissionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="success">
This operation does not require authentication
</aside>

## drivelabels.labels.delta

<a id="opIddrivelabels.labels.delta"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string:delta \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "languageCode": "string",
    "requests": [
      {
        "createField": {
          "field": {
            "dateOptions": {
              "dateFormatType": "DATE_FORMAT_UNSPECIFIED"
            },
            "integerOptions": {},
            "properties": {
              "displayName": "string",
              "insertBeforeField": "string",
              "required": true
            },
            "selectionOptions": {
              "choices": [
                {
                  "id": "string",
                  "properties": {
                    "badgeConfig": {
                      "color": {
                        "alpha": 0,
                        "blue": 0,
                        "green": 0,
                        "red": 0
                      },
                      "priorityOverride": "string"
                    },
                    "description": "string",
                    "displayName": "string",
                    "insertBeforeChoice": "string"
                  }
                }
              ],
              "listOptions": {
                "maxEntries": 0
              }
            },
            "textOptions": {},
            "userOptions": {
              "listOptions": {
                "maxEntries": 0
              }
            }
          }
        },
        "createSelectionChoice": {
          "choice": {
            "id": "string",
            "properties": {
              "badgeConfig": {
                "color": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "priorityOverride": "string"
              },
              "description": "string",
              "displayName": "string",
              "insertBeforeChoice": "string"
            }
          },
          "fieldId": "string"
        },
        "deleteField": {
          "id": "string"
        },
        "deleteSelectionChoice": {
          "fieldId": "string",
          "id": "string"
        },
        "disableField": {
          "disabledPolicy": {
            "hideInSearch": true,
            "showInApply": true
          },
          "id": "string",
          "updateMask": "string"
        },
        "disableSelectionChoice": {
          "disabledPolicy": {
            "hideInSearch": true,
            "showInApply": true
          },
          "fieldId": "string",
          "id": "string",
          "updateMask": "string"
        },
        "enableField": {
          "id": "string"
        },
        "enableSelectionChoice": {
          "fieldId": "string",
          "id": "string"
        },
        "updateField": {
          "id": "string",
          "properties": {
            "displayName": "string",
            "insertBeforeField": "string",
            "required": true
          },
          "updateMask": "string"
        },
        "updateFieldType": {
          "dateOptions": {
            "dateFormatType": "DATE_FORMAT_UNSPECIFIED"
          },
          "id": "string",
          "integerOptions": {},
          "longTextOptions": {},
          "selectionOptions": {
            "choices": [
              {
                "id": "string",
                "properties": {
                  "badgeConfig": {
                    "color": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "priorityOverride": "string"
                  },
                  "description": "string",
                  "displayName": "string",
                  "insertBeforeChoice": "string"
                }
              }
            ],
            "listOptions": {
              "maxEntries": 0
            }
          },
          "textOptions": {},
          "updateMask": "string",
          "userOptions": {
            "listOptions": {
              "maxEntries": 0
            }
          }
        },
        "updateLabel": {
          "properties": {
            "description": "string",
            "title": "string"
          },
          "updateMask": "string"
        },
        "updateSelectionChoiceProperties": {
          "fieldId": "string",
          "id": "string",
          "properties": {
            "badgeConfig": {
              "color": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "priorityOverride": "string"
            },
            "description": "string",
            "displayName": "string",
            "insertBeforeChoice": "string"
          },
          "updateMask": "string"
        }
      }
    ],
    "useAdminAccess": true,
    "view": "LABEL_VIEW_BASIC",
    "writeControl": {
      "requiredRevisionId": "string"
    }
  }'
```

`POST /v2beta/{name}:delta`

Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.

> Body parameter

```json
{
  "languageCode": "string",
  "requests": [
    {
      "createField": {
        "field": {
          "dateOptions": {
            "dateFormatType": "DATE_FORMAT_UNSPECIFIED"
          },
          "integerOptions": {},
          "properties": {
            "displayName": "string",
            "insertBeforeField": "string",
            "required": true
          },
          "selectionOptions": {
            "choices": [
              {
                "id": "string",
                "properties": {
                  "badgeConfig": {
                    "color": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "priorityOverride": "string"
                  },
                  "description": "string",
                  "displayName": "string",
                  "insertBeforeChoice": "string"
                }
              }
            ],
            "listOptions": {
              "maxEntries": 0
            }
          },
          "textOptions": {},
          "userOptions": {
            "listOptions": {
              "maxEntries": 0
            }
          }
        }
      },
      "createSelectionChoice": {
        "choice": {
          "id": "string",
          "properties": {
            "badgeConfig": {
              "color": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "priorityOverride": "string"
            },
            "description": "string",
            "displayName": "string",
            "insertBeforeChoice": "string"
          }
        },
        "fieldId": "string"
      },
      "deleteField": {
        "id": "string"
      },
      "deleteSelectionChoice": {
        "fieldId": "string",
        "id": "string"
      },
      "disableField": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "id": "string",
        "updateMask": "string"
      },
      "disableSelectionChoice": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "fieldId": "string",
        "id": "string",
        "updateMask": "string"
      },
      "enableField": {
        "id": "string"
      },
      "enableSelectionChoice": {
        "fieldId": "string",
        "id": "string"
      },
      "updateField": {
        "id": "string",
        "properties": {
          "displayName": "string",
          "insertBeforeField": "string",
          "required": true
        },
        "updateMask": "string"
      },
      "updateFieldType": {
        "dateOptions": {
          "dateFormatType": "DATE_FORMAT_UNSPECIFIED"
        },
        "id": "string",
        "integerOptions": {},
        "longTextOptions": {},
        "selectionOptions": {
          "choices": [
            {
              "id": "string",
              "properties": {
                "badgeConfig": {
                  "color": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "priorityOverride": "string"
                },
                "description": "string",
                "displayName": "string",
                "insertBeforeChoice": "string"
              }
            }
          ],
          "listOptions": {
            "maxEntries": 0
          }
        },
        "textOptions": {},
        "updateMask": "string",
        "userOptions": {
          "listOptions": {
            "maxEntries": 0
          }
        }
      },
      "updateLabel": {
        "properties": {
          "description": "string",
          "title": "string"
        },
        "updateMask": "string"
      },
      "updateSelectionChoiceProperties": {
        "fieldId": "string",
        "id": "string",
        "properties": {
          "badgeConfig": {
            "color": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "priorityOverride": "string"
          },
          "description": "string",
          "displayName": "string",
          "insertBeforeChoice": "string"
        },
        "updateMask": "string"
      }
    }
  ],
  "useAdminAccess": true,
  "view": "LABEL_VIEW_BASIC",
  "writeControl": {
    "requiredRevisionId": "string"
  }
}
```

<h3 id="drivelabelslabelsdelta-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Label to update.|
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
|body|body|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequest)|false|none|
|» languageCode|body|string|false|The BCP-47 language code to use for evaluating localized Field labels when `include_label_in_response` is `true`.|
|» requests|body|[[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestrequest)]|false|A list of updates to apply to the Label. Requests will be applied in the order they are specified.|
|» useAdminAccess|body|boolean|false|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
|» view|body|string|false|When specified, only certain fields belonging to the indicated view will be returned.|
|» writeControl|body|[GoogleAppsDriveLabelsV2betaWriteControl](#schemagoogleappsdrivelabelsv2betawritecontrol)|false|Provides control over how write requests are executed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» view|LABEL_VIEW_BASIC|
|» view|LABEL_VIEW_FULL|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "createField": {
        "id": "string",
        "priority": 0
      },
      "createSelectionChoice": {
        "fieldId": "string",
        "id": "string"
      },
      "deleteField": {},
      "deleteSelectionChoice": {},
      "disableField": {},
      "disableSelectionChoice": {},
      "enableField": {},
      "enableSelectionChoice": {},
      "updateField": {
        "priority": 0
      },
      "updateFieldType": {},
      "updateLabel": {},
      "updateSelectionChoiceProperties": {
        "priority": 0
      }
    }
  ],
  "updatedLabel": {
    "appliedCapabilities": {
      "canApply": true,
      "canRead": true,
      "canRemove": true
    },
    "appliedLabelPolicy": {
      "copyMode": "COPY_MODE_UNSPECIFIED"
    },
    "createTime": "string",
    "creator": {
      "person": "string"
    },
    "customer": "string",
    "disableTime": "string",
    "disabler": {
      "person": "string"
    },
    "displayHints": {
      "disabled": true,
      "hiddenInSearch": true,
      "priority": "string",
      "shownInApply": true
    },
    "fields": [
      {
        "appliedCapabilities": {
          "canRead": true,
          "canSearch": true,
          "canWrite": true
        },
        "createTime": "string",
        "creator": {
          "person": "string"
        },
        "dateOptions": {
          "dateFormat": "string",
          "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
          "maxValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "minValue": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        },
        "disableTime": "string",
        "disabler": {
          "person": "string"
        },
        "displayHints": {
          "disabled": true,
          "hiddenInSearch": true,
          "required": true,
          "shownInApply": true
        },
        "id": "string",
        "integerOptions": {
          "maxValue": "string",
          "minValue": "string"
        },
        "lifecycle": {
          "disabledPolicy": {
            "hideInSearch": true,
            "showInApply": true
          },
          "hasUnpublishedChanges": true,
          "state": "STATE_UNSPECIFIED"
        },
        "lockStatus": {
          "locked": true
        },
        "properties": {
          "displayName": "string",
          "insertBeforeField": "string",
          "required": true
        },
        "publisher": {
          "person": "string"
        },
        "queryKey": "string",
        "schemaCapabilities": {
          "canDelete": true,
          "canDisable": true,
          "canEnable": true,
          "canUpdate": true
        },
        "selectionOptions": {
          "choices": [
            {
              "appliedCapabilities": {
                "canRead": true,
                "canSearch": true,
                "canSelect": true
              },
              "createTime": "string",
              "creator": {
                "person": "string"
              },
              "disableTime": "string",
              "disabler": {
                "person": "string"
              },
              "displayHints": {
                "badgeColors": {
                  "backgroundColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "foregroundColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "soloColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  }
                },
                "badgePriority": "string",
                "darkBadgeColors": {
                  "backgroundColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "foregroundColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "soloColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  }
                },
                "disabled": true,
                "hiddenInSearch": true,
                "shownInApply": true
              },
              "id": "string",
              "lifecycle": {
                "disabledPolicy": {
                  "hideInSearch": true,
                  "showInApply": true
                },
                "hasUnpublishedChanges": true,
                "state": "STATE_UNSPECIFIED"
              },
              "lockStatus": {
                "locked": true
              },
              "properties": {
                "badgeConfig": {
                  "color": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "priorityOverride": "string"
                },
                "description": "string",
                "displayName": "string",
                "insertBeforeChoice": "string"
              },
              "publishTime": "string",
              "publisher": {
                "person": "string"
              },
              "schemaCapabilities": {
                "canDelete": true,
                "canDisable": true,
                "canEnable": true,
                "canUpdate": true
              },
              "updateTime": "string",
              "updater": {
                "person": "string"
              }
            }
          ],
          "listOptions": {
            "maxEntries": 0
          }
        },
        "textOptions": {
          "maxLength": 0,
          "minLength": 0
        },
        "updateTime": "string",
        "updater": {
          "person": "string"
        },
        "userOptions": {
          "listOptions": {
            "maxEntries": 0
          }
        }
      }
    ],
    "id": "string",
    "labelType": "LABEL_TYPE_UNSPECIFIED",
    "learnMoreUri": "string",
    "lifecycle": {
      "disabledPolicy": {
        "hideInSearch": true,
        "showInApply": true
      },
      "hasUnpublishedChanges": true,
      "state": "STATE_UNSPECIFIED"
    },
    "lockStatus": {
      "locked": true
    },
    "name": "string",
    "properties": {
      "description": "string",
      "title": "string"
    },
    "publishTime": "string",
    "publisher": {
      "person": "string"
    },
    "revisionCreateTime": "string",
    "revisionCreator": {
      "person": "string"
    },
    "revisionId": "string",
    "schemaCapabilities": {
      "canDelete": true,
      "canDisable": true,
      "canEnable": true,
      "canUpdate": true
    }
  }
}
```

<h3 id="drivelabelslabelsdelta-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## drivelabels.labels.disable

<a id="opIddrivelabels.labels.disable"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string:disable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "disabledPolicy": {
      "hideInSearch": true,
      "showInApply": true
    },
    "languageCode": "string",
    "updateMask": "string",
    "useAdminAccess": true,
    "writeControl": {
      "requiredRevisionId": "string"
    }
  }'
```

`POST /v2beta/{name}:disable`

Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.

> Body parameter

```json
{
  "disabledPolicy": {
    "hideInSearch": true,
    "showInApply": true
  },
  "languageCode": "string",
  "updateMask": "string",
  "useAdminAccess": true,
  "writeControl": {
    "requiredRevisionId": "string"
  }
}
```

<h3 id="drivelabelslabelsdisable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Label resource name.|
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
|body|body|[GoogleAppsDriveLabelsV2betaDisableLabelRequest](#schemagoogleappsdrivelabelsv2betadisablelabelrequest)|false|none|
|» disabledPolicy|body|[GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy](#schemagoogleappsdrivelabelsv2betalifecycledisabledpolicy)|false|Disabled policy to use.|
|» languageCode|body|string|false|The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.|
|» updateMask|body|string(google-fieldmask)|false|The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.|
|» useAdminAccess|body|boolean|false|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
|» writeControl|body|[GoogleAppsDriveLabelsV2betaWriteControl](#schemagoogleappsdrivelabelsv2betawritecontrol)|false|Provides control over how write requests are executed. Defaults to unset, which means last write wins.|

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
  "appliedCapabilities": {
    "canApply": true,
    "canRead": true,
    "canRemove": true
  },
  "appliedLabelPolicy": {
    "copyMode": "COPY_MODE_UNSPECIFIED"
  },
  "createTime": "string",
  "creator": {
    "person": "string"
  },
  "customer": "string",
  "disableTime": "string",
  "disabler": {
    "person": "string"
  },
  "displayHints": {
    "disabled": true,
    "hiddenInSearch": true,
    "priority": "string",
    "shownInApply": true
  },
  "fields": [
    {
      "appliedCapabilities": {
        "canRead": true,
        "canSearch": true,
        "canWrite": true
      },
      "createTime": "string",
      "creator": {
        "person": "string"
      },
      "dateOptions": {
        "dateFormat": "string",
        "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
        "maxValue": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "minValue": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      },
      "disableTime": "string",
      "disabler": {
        "person": "string"
      },
      "displayHints": {
        "disabled": true,
        "hiddenInSearch": true,
        "required": true,
        "shownInApply": true
      },
      "id": "string",
      "integerOptions": {
        "maxValue": "string",
        "minValue": "string"
      },
      "lifecycle": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "hasUnpublishedChanges": true,
        "state": "STATE_UNSPECIFIED"
      },
      "lockStatus": {
        "locked": true
      },
      "properties": {
        "displayName": "string",
        "insertBeforeField": "string",
        "required": true
      },
      "publisher": {
        "person": "string"
      },
      "queryKey": "string",
      "schemaCapabilities": {
        "canDelete": true,
        "canDisable": true,
        "canEnable": true,
        "canUpdate": true
      },
      "selectionOptions": {
        "choices": [
          {
            "appliedCapabilities": {
              "canRead": true,
              "canSearch": true,
              "canSelect": true
            },
            "createTime": "string",
            "creator": {
              "person": "string"
            },
            "disableTime": "string",
            "disabler": {
              "person": "string"
            },
            "displayHints": {
              "badgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "badgePriority": "string",
              "darkBadgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "disabled": true,
              "hiddenInSearch": true,
              "shownInApply": true
            },
            "id": "string",
            "lifecycle": {
              "disabledPolicy": {
                "hideInSearch": true,
                "showInApply": true
              },
              "hasUnpublishedChanges": true,
              "state": "STATE_UNSPECIFIED"
            },
            "lockStatus": {
              "locked": true
            },
            "properties": {
              "badgeConfig": {
                "color": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "priorityOverride": "string"
              },
              "description": "string",
              "displayName": "string",
              "insertBeforeChoice": "string"
            },
            "publishTime": "string",
            "publisher": {
              "person": "string"
            },
            "schemaCapabilities": {
              "canDelete": true,
              "canDisable": true,
              "canEnable": true,
              "canUpdate": true
            },
            "updateTime": "string",
            "updater": {
              "person": "string"
            }
          }
        ],
        "listOptions": {
          "maxEntries": 0
        }
      },
      "textOptions": {
        "maxLength": 0,
        "minLength": 0
      },
      "updateTime": "string",
      "updater": {
        "person": "string"
      },
      "userOptions": {
        "listOptions": {
          "maxEntries": 0
        }
      }
    }
  ],
  "id": "string",
  "labelType": "LABEL_TYPE_UNSPECIFIED",
  "learnMoreUri": "string",
  "lifecycle": {
    "disabledPolicy": {
      "hideInSearch": true,
      "showInApply": true
    },
    "hasUnpublishedChanges": true,
    "state": "STATE_UNSPECIFIED"
  },
  "lockStatus": {
    "locked": true
  },
  "name": "string",
  "properties": {
    "description": "string",
    "title": "string"
  },
  "publishTime": "string",
  "publisher": {
    "person": "string"
  },
  "revisionCreateTime": "string",
  "revisionCreator": {
    "person": "string"
  },
  "revisionId": "string",
  "schemaCapabilities": {
    "canDelete": true,
    "canDisable": true,
    "canEnable": true,
    "canUpdate": true
  }
}
```

<h3 id="drivelabelslabelsdisable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaLabel](#schemagoogleappsdrivelabelsv2betalabel)|

<aside class="success">
This operation does not require authentication
</aside>

## drivelabels.labels.enable

<a id="opIddrivelabels.labels.enable"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string:enable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "languageCode": "string",
    "useAdminAccess": true,
    "writeControl": {
      "requiredRevisionId": "string"
    }
  }'
```

`POST /v2beta/{name}:enable`

Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.

> Body parameter

```json
{
  "languageCode": "string",
  "useAdminAccess": true,
  "writeControl": {
    "requiredRevisionId": "string"
  }
}
```

<h3 id="drivelabelslabelsenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Label resource name.|
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
|body|body|[GoogleAppsDriveLabelsV2betaEnableLabelRequest](#schemagoogleappsdrivelabelsv2betaenablelabelrequest)|false|none|
|» languageCode|body|string|false|The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.|
|» useAdminAccess|body|boolean|false|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
|» writeControl|body|[GoogleAppsDriveLabelsV2betaWriteControl](#schemagoogleappsdrivelabelsv2betawritecontrol)|false|Provides control over how write requests are executed. Defaults to unset, which means last write wins.|

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
  "appliedCapabilities": {
    "canApply": true,
    "canRead": true,
    "canRemove": true
  },
  "appliedLabelPolicy": {
    "copyMode": "COPY_MODE_UNSPECIFIED"
  },
  "createTime": "string",
  "creator": {
    "person": "string"
  },
  "customer": "string",
  "disableTime": "string",
  "disabler": {
    "person": "string"
  },
  "displayHints": {
    "disabled": true,
    "hiddenInSearch": true,
    "priority": "string",
    "shownInApply": true
  },
  "fields": [
    {
      "appliedCapabilities": {
        "canRead": true,
        "canSearch": true,
        "canWrite": true
      },
      "createTime": "string",
      "creator": {
        "person": "string"
      },
      "dateOptions": {
        "dateFormat": "string",
        "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
        "maxValue": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "minValue": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      },
      "disableTime": "string",
      "disabler": {
        "person": "string"
      },
      "displayHints": {
        "disabled": true,
        "hiddenInSearch": true,
        "required": true,
        "shownInApply": true
      },
      "id": "string",
      "integerOptions": {
        "maxValue": "string",
        "minValue": "string"
      },
      "lifecycle": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "hasUnpublishedChanges": true,
        "state": "STATE_UNSPECIFIED"
      },
      "lockStatus": {
        "locked": true
      },
      "properties": {
        "displayName": "string",
        "insertBeforeField": "string",
        "required": true
      },
      "publisher": {
        "person": "string"
      },
      "queryKey": "string",
      "schemaCapabilities": {
        "canDelete": true,
        "canDisable": true,
        "canEnable": true,
        "canUpdate": true
      },
      "selectionOptions": {
        "choices": [
          {
            "appliedCapabilities": {
              "canRead": true,
              "canSearch": true,
              "canSelect": true
            },
            "createTime": "string",
            "creator": {
              "person": "string"
            },
            "disableTime": "string",
            "disabler": {
              "person": "string"
            },
            "displayHints": {
              "badgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "badgePriority": "string",
              "darkBadgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "disabled": true,
              "hiddenInSearch": true,
              "shownInApply": true
            },
            "id": "string",
            "lifecycle": {
              "disabledPolicy": {
                "hideInSearch": true,
                "showInApply": true
              },
              "hasUnpublishedChanges": true,
              "state": "STATE_UNSPECIFIED"
            },
            "lockStatus": {
              "locked": true
            },
            "properties": {
              "badgeConfig": {
                "color": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "priorityOverride": "string"
              },
              "description": "string",
              "displayName": "string",
              "insertBeforeChoice": "string"
            },
            "publishTime": "string",
            "publisher": {
              "person": "string"
            },
            "schemaCapabilities": {
              "canDelete": true,
              "canDisable": true,
              "canEnable": true,
              "canUpdate": true
            },
            "updateTime": "string",
            "updater": {
              "person": "string"
            }
          }
        ],
        "listOptions": {
          "maxEntries": 0
        }
      },
      "textOptions": {
        "maxLength": 0,
        "minLength": 0
      },
      "updateTime": "string",
      "updater": {
        "person": "string"
      },
      "userOptions": {
        "listOptions": {
          "maxEntries": 0
        }
      }
    }
  ],
  "id": "string",
  "labelType": "LABEL_TYPE_UNSPECIFIED",
  "learnMoreUri": "string",
  "lifecycle": {
    "disabledPolicy": {
      "hideInSearch": true,
      "showInApply": true
    },
    "hasUnpublishedChanges": true,
    "state": "STATE_UNSPECIFIED"
  },
  "lockStatus": {
    "locked": true
  },
  "name": "string",
  "properties": {
    "description": "string",
    "title": "string"
  },
  "publishTime": "string",
  "publisher": {
    "person": "string"
  },
  "revisionCreateTime": "string",
  "revisionCreator": {
    "person": "string"
  },
  "revisionId": "string",
  "schemaCapabilities": {
    "canDelete": true,
    "canDisable": true,
    "canEnable": true,
    "canUpdate": true
  }
}
```

<h3 id="drivelabelslabelsenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaLabel](#schemagoogleappsdrivelabelsv2betalabel)|

<aside class="success">
This operation does not require authentication
</aside>

## drivelabels.labels.publish

<a id="opIddrivelabels.labels.publish"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string:publish \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "languageCode": "string",
    "useAdminAccess": true,
    "writeControl": {
      "requiredRevisionId": "string"
    }
  }'
```

`POST /v2beta/{name}:publish`

Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.

> Body parameter

```json
{
  "languageCode": "string",
  "useAdminAccess": true,
  "writeControl": {
    "requiredRevisionId": "string"
  }
}
```

<h3 id="drivelabelslabelspublish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Label resource name.|
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
|body|body|[GoogleAppsDriveLabelsV2betaPublishLabelRequest](#schemagoogleappsdrivelabelsv2betapublishlabelrequest)|false|none|
|» languageCode|body|string|false|The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.|
|» useAdminAccess|body|boolean|false|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
|» writeControl|body|[GoogleAppsDriveLabelsV2betaWriteControl](#schemagoogleappsdrivelabelsv2betawritecontrol)|false|Provides control over how write requests are executed. Defaults to unset, which means last write wins.|

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
  "appliedCapabilities": {
    "canApply": true,
    "canRead": true,
    "canRemove": true
  },
  "appliedLabelPolicy": {
    "copyMode": "COPY_MODE_UNSPECIFIED"
  },
  "createTime": "string",
  "creator": {
    "person": "string"
  },
  "customer": "string",
  "disableTime": "string",
  "disabler": {
    "person": "string"
  },
  "displayHints": {
    "disabled": true,
    "hiddenInSearch": true,
    "priority": "string",
    "shownInApply": true
  },
  "fields": [
    {
      "appliedCapabilities": {
        "canRead": true,
        "canSearch": true,
        "canWrite": true
      },
      "createTime": "string",
      "creator": {
        "person": "string"
      },
      "dateOptions": {
        "dateFormat": "string",
        "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
        "maxValue": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "minValue": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      },
      "disableTime": "string",
      "disabler": {
        "person": "string"
      },
      "displayHints": {
        "disabled": true,
        "hiddenInSearch": true,
        "required": true,
        "shownInApply": true
      },
      "id": "string",
      "integerOptions": {
        "maxValue": "string",
        "minValue": "string"
      },
      "lifecycle": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "hasUnpublishedChanges": true,
        "state": "STATE_UNSPECIFIED"
      },
      "lockStatus": {
        "locked": true
      },
      "properties": {
        "displayName": "string",
        "insertBeforeField": "string",
        "required": true
      },
      "publisher": {
        "person": "string"
      },
      "queryKey": "string",
      "schemaCapabilities": {
        "canDelete": true,
        "canDisable": true,
        "canEnable": true,
        "canUpdate": true
      },
      "selectionOptions": {
        "choices": [
          {
            "appliedCapabilities": {
              "canRead": true,
              "canSearch": true,
              "canSelect": true
            },
            "createTime": "string",
            "creator": {
              "person": "string"
            },
            "disableTime": "string",
            "disabler": {
              "person": "string"
            },
            "displayHints": {
              "badgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "badgePriority": "string",
              "darkBadgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "disabled": true,
              "hiddenInSearch": true,
              "shownInApply": true
            },
            "id": "string",
            "lifecycle": {
              "disabledPolicy": {
                "hideInSearch": true,
                "showInApply": true
              },
              "hasUnpublishedChanges": true,
              "state": "STATE_UNSPECIFIED"
            },
            "lockStatus": {
              "locked": true
            },
            "properties": {
              "badgeConfig": {
                "color": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "priorityOverride": "string"
              },
              "description": "string",
              "displayName": "string",
              "insertBeforeChoice": "string"
            },
            "publishTime": "string",
            "publisher": {
              "person": "string"
            },
            "schemaCapabilities": {
              "canDelete": true,
              "canDisable": true,
              "canEnable": true,
              "canUpdate": true
            },
            "updateTime": "string",
            "updater": {
              "person": "string"
            }
          }
        ],
        "listOptions": {
          "maxEntries": 0
        }
      },
      "textOptions": {
        "maxLength": 0,
        "minLength": 0
      },
      "updateTime": "string",
      "updater": {
        "person": "string"
      },
      "userOptions": {
        "listOptions": {
          "maxEntries": 0
        }
      }
    }
  ],
  "id": "string",
  "labelType": "LABEL_TYPE_UNSPECIFIED",
  "learnMoreUri": "string",
  "lifecycle": {
    "disabledPolicy": {
      "hideInSearch": true,
      "showInApply": true
    },
    "hasUnpublishedChanges": true,
    "state": "STATE_UNSPECIFIED"
  },
  "lockStatus": {
    "locked": true
  },
  "name": "string",
  "properties": {
    "description": "string",
    "title": "string"
  },
  "publishTime": "string",
  "publisher": {
    "person": "string"
  },
  "revisionCreateTime": "string",
  "revisionCreator": {
    "person": "string"
  },
  "revisionId": "string",
  "schemaCapabilities": {
    "canDelete": true,
    "canDisable": true,
    "canEnable": true,
    "canUpdate": true
  }
}
```

<h3 id="drivelabelslabelspublish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaLabel](#schemagoogleappsdrivelabelsv2betalabel)|

<aside class="success">
This operation does not require authentication
</aside>

## drivelabels.labels.updateLabelCopyMode

<a id="opIddrivelabels.labels.updateLabelCopyMode"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string:updateLabelCopyMode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "copyMode": "COPY_MODE_UNSPECIFIED",
    "languageCode": "string",
    "useAdminAccess": true,
    "view": "LABEL_VIEW_BASIC"
  }'
```

`POST /v2beta/{name}:updateLabelCopyMode`

Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

> Body parameter

```json
{
  "copyMode": "COPY_MODE_UNSPECIFIED",
  "languageCode": "string",
  "useAdminAccess": true,
  "view": "LABEL_VIEW_BASIC"
}
```

<h3 id="drivelabelslabelsupdatelabelcopymode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Label to update.|
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
|body|body|[GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest](#schemagoogleappsdrivelabelsv2betaupdatelabelcopymoderequest)|false|none|
|» copyMode|body|string|false|Required. Indicates how the applied Label, and Field values should be copied when a Drive item is copied.|
|» languageCode|body|string|false|The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.|
|» useAdminAccess|body|boolean|false|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
|» view|body|string|false|When specified, only certain fields belonging to the indicated view will be returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» copyMode|COPY_MODE_UNSPECIFIED|
|» copyMode|DO_NOT_COPY|
|» copyMode|ALWAYS_COPY|
|» copyMode|COPY_APPLIABLE|
|» view|LABEL_VIEW_BASIC|
|» view|LABEL_VIEW_FULL|

> Example responses

> 200 Response

```json
{
  "appliedCapabilities": {
    "canApply": true,
    "canRead": true,
    "canRemove": true
  },
  "appliedLabelPolicy": {
    "copyMode": "COPY_MODE_UNSPECIFIED"
  },
  "createTime": "string",
  "creator": {
    "person": "string"
  },
  "customer": "string",
  "disableTime": "string",
  "disabler": {
    "person": "string"
  },
  "displayHints": {
    "disabled": true,
    "hiddenInSearch": true,
    "priority": "string",
    "shownInApply": true
  },
  "fields": [
    {
      "appliedCapabilities": {
        "canRead": true,
        "canSearch": true,
        "canWrite": true
      },
      "createTime": "string",
      "creator": {
        "person": "string"
      },
      "dateOptions": {
        "dateFormat": "string",
        "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
        "maxValue": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "minValue": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      },
      "disableTime": "string",
      "disabler": {
        "person": "string"
      },
      "displayHints": {
        "disabled": true,
        "hiddenInSearch": true,
        "required": true,
        "shownInApply": true
      },
      "id": "string",
      "integerOptions": {
        "maxValue": "string",
        "minValue": "string"
      },
      "lifecycle": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "hasUnpublishedChanges": true,
        "state": "STATE_UNSPECIFIED"
      },
      "lockStatus": {
        "locked": true
      },
      "properties": {
        "displayName": "string",
        "insertBeforeField": "string",
        "required": true
      },
      "publisher": {
        "person": "string"
      },
      "queryKey": "string",
      "schemaCapabilities": {
        "canDelete": true,
        "canDisable": true,
        "canEnable": true,
        "canUpdate": true
      },
      "selectionOptions": {
        "choices": [
          {
            "appliedCapabilities": {
              "canRead": true,
              "canSearch": true,
              "canSelect": true
            },
            "createTime": "string",
            "creator": {
              "person": "string"
            },
            "disableTime": "string",
            "disabler": {
              "person": "string"
            },
            "displayHints": {
              "badgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "badgePriority": "string",
              "darkBadgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "disabled": true,
              "hiddenInSearch": true,
              "shownInApply": true
            },
            "id": "string",
            "lifecycle": {
              "disabledPolicy": {
                "hideInSearch": true,
                "showInApply": true
              },
              "hasUnpublishedChanges": true,
              "state": "STATE_UNSPECIFIED"
            },
            "lockStatus": {
              "locked": true
            },
            "properties": {
              "badgeConfig": {
                "color": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "priorityOverride": "string"
              },
              "description": "string",
              "displayName": "string",
              "insertBeforeChoice": "string"
            },
            "publishTime": "string",
            "publisher": {
              "person": "string"
            },
            "schemaCapabilities": {
              "canDelete": true,
              "canDisable": true,
              "canEnable": true,
              "canUpdate": true
            },
            "updateTime": "string",
            "updater": {
              "person": "string"
            }
          }
        ],
        "listOptions": {
          "maxEntries": 0
        }
      },
      "textOptions": {
        "maxLength": 0,
        "minLength": 0
      },
      "updateTime": "string",
      "updater": {
        "person": "string"
      },
      "userOptions": {
        "listOptions": {
          "maxEntries": 0
        }
      }
    }
  ],
  "id": "string",
  "labelType": "LABEL_TYPE_UNSPECIFIED",
  "learnMoreUri": "string",
  "lifecycle": {
    "disabledPolicy": {
      "hideInSearch": true,
      "showInApply": true
    },
    "hasUnpublishedChanges": true,
    "state": "STATE_UNSPECIFIED"
  },
  "lockStatus": {
    "locked": true
  },
  "name": "string",
  "properties": {
    "description": "string",
    "title": "string"
  },
  "publishTime": "string",
  "publisher": {
    "person": "string"
  },
  "revisionCreateTime": "string",
  "revisionCreator": {
    "person": "string"
  },
  "revisionId": "string",
  "schemaCapabilities": {
    "canDelete": true,
    "canDisable": true,
    "canEnable": true,
    "canUpdate": true
  }
}
```

<h3 id="drivelabelslabelsupdatelabelcopymode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaLabel](#schemagoogleappsdrivelabelsv2betalabel)|

<aside class="success">
This operation does not require authentication
</aside>

## drivelabels.labels.revisions.locks.list

<a id="opIddrivelabels.labels.revisions.locks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/locks \
  -H 'Accept: application/json'
```

`GET /v2beta/{parent}/locks`

Lists the LabelLocks on a Label.

<h3 id="drivelabelslabelsrevisionslockslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Label on which Locks are applied. Format: labels/{label}|
|pageSize|query|integer|false|Maximum number of Locks to return per page. Default: 100. Max: 200.|
|pageToken|query|string|false|The token of the page to return.|
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
  "labelLocks": [
    {
      "capabilities": {
        "canViewPolicy": true
      },
      "choiceId": "string",
      "createTime": "string",
      "creator": {
        "person": "string"
      },
      "deleteTime": "string",
      "fieldId": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="drivelabelslabelsrevisionslockslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaListLabelLocksResponse](#schemagoogleappsdrivelabelsv2betalistlabellocksresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## drivelabels.labels.revisions.permissions.list

<a id="opIddrivelabels.labels.revisions.permissions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/permissions \
  -H 'Accept: application/json'
```

`GET /v2beta/{parent}/permissions`

Lists a Label's permissions.

<h3 id="drivelabelslabelsrevisionspermissionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent Label resource name on which Label Permission are listed. Format: labels/{label}|
|pageSize|query|integer|false|Maximum number of permissions to return per page. Default: 50. Max: 200.|
|pageToken|query|string|false|The token of the page to return.|
|useAdminAccess|query|boolean|false|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
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
  "labelPermissions": [
    {
      "audience": "string",
      "email": "string",
      "group": "string",
      "name": "string",
      "person": "string",
      "role": "LABEL_ROLE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="drivelabelslabelsrevisionspermissionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse](#schemagoogleappsdrivelabelsv2betalistlabelpermissionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## drivelabels.labels.revisions.permissions.create

<a id="opIddrivelabels.labels.revisions.permissions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/permissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "audience": "string",
    "email": "string",
    "group": "string",
    "name": "string",
    "person": "string",
    "role": "LABEL_ROLE_UNSPECIFIED"
  }'
```

`POST /v2beta/{parent}/permissions`

Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

> Body parameter

```json
{
  "audience": "string",
  "email": "string",
  "group": "string",
  "name": "string",
  "person": "string",
  "role": "LABEL_ROLE_UNSPECIFIED"
}
```

<h3 id="drivelabelslabelsrevisionspermissionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent Label resource name on the Label Permission is created. Format: labels/{label}|
|useAdminAccess|query|boolean|false|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
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
|body|body|[GoogleAppsDriveLabelsV2betaLabelPermission](#schemagoogleappsdrivelabelsv2betalabelpermission)|false|none|
|» audience|body|string|false|Audience to grant a role to. The magic value of `audiences/default` may be used to apply the role to the default audience in the context of the organization that owns the Label.|
|» email|body|string|false|Specifies the email address for a user or group pricinpal. Not populated for audience principals. User and Group permissions may only be inserted using email address. On update requests, if email address is specified, no principal should be specified.|
|» group|body|string|false|Group resource name.|
|» name|body|string|false|Resource name of this permission.|
|» person|body|string|false|Person resource name.|
|» role|body|string|false|The role the principal should have.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» role|LABEL_ROLE_UNSPECIFIED|
|» role|READER|
|» role|APPLIER|
|» role|ORGANIZER|
|» role|EDITOR|

> Example responses

> 200 Response

```json
{
  "audience": "string",
  "email": "string",
  "group": "string",
  "name": "string",
  "person": "string",
  "role": "LABEL_ROLE_UNSPECIFIED"
}
```

<h3 id="drivelabelslabelsrevisionspermissionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaLabelPermission](#schemagoogleappsdrivelabelsv2betalabelpermission)|

<aside class="success">
This operation does not require authentication
</aside>

## drivelabels.labels.revisions.updatePermissions

<a id="opIddrivelabels.labels.revisions.updatePermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/permissions \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "audience": "string",
    "email": "string",
    "group": "string",
    "name": "string",
    "person": "string",
    "role": "LABEL_ROLE_UNSPECIFIED"
  }'
```

`PATCH /v2beta/{parent}/permissions`

Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

> Body parameter

```json
{
  "audience": "string",
  "email": "string",
  "group": "string",
  "name": "string",
  "person": "string",
  "role": "LABEL_ROLE_UNSPECIFIED"
}
```

<h3 id="drivelabelslabelsrevisionsupdatepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent Label resource name.|
|useAdminAccess|query|boolean|false|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
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
|body|body|[GoogleAppsDriveLabelsV2betaLabelPermission](#schemagoogleappsdrivelabelsv2betalabelpermission)|false|none|
|» audience|body|string|false|Audience to grant a role to. The magic value of `audiences/default` may be used to apply the role to the default audience in the context of the organization that owns the Label.|
|» email|body|string|false|Specifies the email address for a user or group pricinpal. Not populated for audience principals. User and Group permissions may only be inserted using email address. On update requests, if email address is specified, no principal should be specified.|
|» group|body|string|false|Group resource name.|
|» name|body|string|false|Resource name of this permission.|
|» person|body|string|false|Person resource name.|
|» role|body|string|false|The role the principal should have.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» role|LABEL_ROLE_UNSPECIFIED|
|» role|READER|
|» role|APPLIER|
|» role|ORGANIZER|
|» role|EDITOR|

> Example responses

> 200 Response

```json
{
  "audience": "string",
  "email": "string",
  "group": "string",
  "name": "string",
  "person": "string",
  "role": "LABEL_ROLE_UNSPECIFIED"
}
```

<h3 id="drivelabelslabelsrevisionsupdatepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaLabelPermission](#schemagoogleappsdrivelabelsv2betalabelpermission)|

<aside class="success">
This operation does not require authentication
</aside>

## drivelabels.labels.revisions.permissions.batchDelete

<a id="opIddrivelabels.labels.revisions.permissions.batchDelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/permissions:batchDelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "requests": [
      {
        "name": "string",
        "useAdminAccess": true
      }
    ],
    "useAdminAccess": true
  }'
```

`POST /v2beta/{parent}/permissions:batchDelete`

Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

> Body parameter

```json
{
  "requests": [
    {
      "name": "string",
      "useAdminAccess": true
    }
  ],
  "useAdminAccess": true
}
```

<h3 id="drivelabelslabelsrevisionspermissionsbatchdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent Label resource name shared by all permissions being deleted. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.|
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
|body|body|[GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest](#schemagoogleappsdrivelabelsv2betabatchdeletelabelpermissionsrequest)|false|none|
|» requests|body|[[GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest](#schemagoogleappsdrivelabelsv2betadeletelabelpermissionrequest)]|false|Required. The request message specifying the resources to update.|
|» useAdminAccess|body|boolean|false|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the DeleteLabelPermissionRequest messages must either be empty or match this field.|

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

<h3 id="drivelabelslabelsrevisionspermissionsbatchdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="success">
This operation does not require authentication
</aside>

## drivelabels.labels.revisions.permissions.batchUpdate

<a id="opIddrivelabels.labels.revisions.permissions.batchUpdate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/permissions:batchUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "requests": [
      {
        "labelPermission": {
          "audience": "string",
          "email": "string",
          "group": "string",
          "name": "string",
          "person": "string",
          "role": "LABEL_ROLE_UNSPECIFIED"
        },
        "parent": "string",
        "useAdminAccess": true
      }
    ],
    "useAdminAccess": true
  }'
```

`POST /v2beta/{parent}/permissions:batchUpdate`

Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

> Body parameter

```json
{
  "requests": [
    {
      "labelPermission": {
        "audience": "string",
        "email": "string",
        "group": "string",
        "name": "string",
        "person": "string",
        "role": "LABEL_ROLE_UNSPECIFIED"
      },
      "parent": "string",
      "useAdminAccess": true
    }
  ],
  "useAdminAccess": true
}
```

<h3 id="drivelabelslabelsrevisionspermissionsbatchupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent Label resource name shared by all permissions being updated. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.|
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
|body|body|[GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest](#schemagoogleappsdrivelabelsv2betabatchupdatelabelpermissionsrequest)|false|none|
|» requests|body|[[GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest](#schemagoogleappsdrivelabelsv2betaupdatelabelpermissionrequest)]|false|Required. The request message specifying the resources to update.|
|» useAdminAccess|body|boolean|false|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the UpdateLabelPermissionRequest messages must either be empty or match this field.|

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
  "permissions": [
    {
      "audience": "string",
      "email": "string",
      "group": "string",
      "name": "string",
      "person": "string",
      "role": "LABEL_ROLE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="drivelabelslabelsrevisionspermissionsbatchupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse](#schemagoogleappsdrivelabelsv2betabatchupdatelabelpermissionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="drive-labels-api-limits">limits</h1>

## drivelabels.limits.getLabel

<a id="opIddrivelabels.limits.getLabel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/limits/label \
  -H 'Accept: application/json'
```

`GET /v2beta/limits/label`

Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

<h3 id="drivelabelslimitsgetlabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Required. Label revision resource name Must be: "limits/label"|
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
  "fieldLimits": {
    "dateLimits": {
      "maxValue": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "minValue": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "integerLimits": {
      "maxValue": "string",
      "minValue": "string"
    },
    "longTextLimits": {
      "maxLength": 0,
      "minLength": 0
    },
    "maxDescriptionLength": 0,
    "maxDisplayNameLength": 0,
    "maxIdLength": 0,
    "selectionLimits": {
      "listLimits": {
        "maxEntries": 0
      },
      "maxChoices": 0,
      "maxDeletedChoices": 0,
      "maxDisplayNameLength": 0,
      "maxIdLength": 0
    },
    "textLimits": {
      "maxLength": 0,
      "minLength": 0
    },
    "userLimits": {
      "listLimits": {
        "maxEntries": 0
      }
    }
  },
  "maxDeletedFields": 0,
  "maxDescriptionLength": 0,
  "maxDraftRevisions": 0,
  "maxFields": 0,
  "maxTitleLength": 0,
  "name": "string"
}
```

<h3 id="drivelabelslimitsgetlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaLabelLimits](#schemagoogleappsdrivelabelsv2betalabellimits)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="drive-labels-api-users">users</h1>

## drivelabels.users.getCapabilities

<a id="opIddrivelabels.users.getCapabilities"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string \
  -H 'Accept: application/json'
```

`GET /v2beta/{name}`

Gets the user capabilities.

<h3 id="drivelabelsusersgetcapabilities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the user. Only "users/me/capabilities" is supported.|
|customer|query|string|false|The customer to scope this request to. For example: "customers/abcd1234". If unset, will return settings within the current customer.|
|useAdminAccess|query|boolean|false|Set to `true` in order to use the user's admin credentials. The server verifies that the user is an admin for the label before allowing access.|
|view|query|string|false|When specified, only certain fields belonging to the indicated view are returned.|
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
|view|LABEL_VIEW_BASIC|
|view|LABEL_VIEW_FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "canAccessLabelManager": true,
  "canAdministrateLabels": true,
  "canCreateAdminLabels": true,
  "canCreateSharedLabels": true,
  "name": "string"
}
```

<h3 id="drivelabelsusersgetcapabilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAppsDriveLabelsV2betaUserCapabilities](#schemagoogleappsdrivelabelsv2betausercapabilities)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_GoogleAppsDriveLabelsV2betaBadgeColors">GoogleAppsDriveLabelsV2betaBadgeColors</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betabadgecolors"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaBadgeColors"></a>
<a id="tocSgoogleappsdrivelabelsv2betabadgecolors"></a>
<a id="tocsgoogleappsdrivelabelsv2betabadgecolors"></a>

```json
{
  "backgroundColor": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "foregroundColor": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "soloColor": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  }
}
```

The color derived from BadgeConfig and changed to the closest recommended supported color.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|[GoogleTypeColor](#schemagoogletypecolor)|false|none|Output only. Badge background that pairs with the foreground.|
|foregroundColor|[GoogleTypeColor](#schemagoogletypecolor)|false|none|Output only. Badge foreground that pairs with the background.|
|soloColor|[GoogleTypeColor](#schemagoogletypecolor)|false|none|Output only. Color that can be used for text without a background.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaBadgeConfig">GoogleAppsDriveLabelsV2betaBadgeConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betabadgeconfig"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaBadgeConfig"></a>
<a id="tocSgoogleappsdrivelabelsv2betabadgeconfig"></a>
<a id="tocsgoogleappsdrivelabelsv2betabadgeconfig"></a>

```json
{
  "color": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "priorityOverride": "string"
}
```

Badge status of the label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|[GoogleTypeColor](#schemagoogletypecolor)|false|none|The color of the badge. When not specified, no badge is rendered. The background, foreground, and solo (light and dark mode) colors set here are changed in the Drive UI into the closest recommended supported color.|
|priorityOverride|string(int64)|false|none|Override the default global priority of this badge. When set to 0, the default priority heuristic is used.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest">GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betabatchdeletelabelpermissionsrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betabatchdeletelabelpermissionsrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betabatchdeletelabelpermissionsrequest"></a>

```json
{
  "requests": [
    {
      "name": "string",
      "useAdminAccess": true
    }
  ],
  "useAdminAccess": true
}
```

Deletes one of more Label Permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest](#schemagoogleappsdrivelabelsv2betadeletelabelpermissionrequest)]|false|none|Required. The request message specifying the resources to update.|
|useAdminAccess|boolean|false|none|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the DeleteLabelPermissionRequest messages must either be empty or match this field.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest">GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betabatchupdatelabelpermissionsrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betabatchupdatelabelpermissionsrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betabatchupdatelabelpermissionsrequest"></a>

```json
{
  "requests": [
    {
      "labelPermission": {
        "audience": "string",
        "email": "string",
        "group": "string",
        "name": "string",
        "person": "string",
        "role": "LABEL_ROLE_UNSPECIFIED"
      },
      "parent": "string",
      "useAdminAccess": true
    }
  ],
  "useAdminAccess": true
}
```

Updates one or more Label Permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest](#schemagoogleappsdrivelabelsv2betaupdatelabelpermissionrequest)]|false|none|Required. The request message specifying the resources to update.|
|useAdminAccess|boolean|false|none|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the UpdateLabelPermissionRequest messages must either be empty or match this field.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse">GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betabatchupdatelabelpermissionsresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betabatchupdatelabelpermissionsresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betabatchupdatelabelpermissionsresponse"></a>

```json
{
  "permissions": [
    {
      "audience": "string",
      "email": "string",
      "group": "string",
      "name": "string",
      "person": "string",
      "role": "LABEL_ROLE_UNSPECIFIED"
    }
  ]
}
```

Response for updating one or more Label Permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[[GoogleAppsDriveLabelsV2betaLabelPermission](#schemagoogleappsdrivelabelsv2betalabelpermission)]|false|none|Required. Permissions updated.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDateLimits">GoogleAppsDriveLabelsV2betaDateLimits</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadatelimits"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDateLimits"></a>
<a id="tocSgoogleappsdrivelabelsv2betadatelimits"></a>
<a id="tocsgoogleappsdrivelabelsv2betadatelimits"></a>

```json
{
  "maxValue": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "minValue": {
    "day": 0,
    "month": 0,
    "year": 0
  }
}
```

Limits for date Field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxValue|[GoogleTypeDate](#schemagoogletypedate)|false|none|Maximum value for the date Field type.|
|minValue|[GoogleTypeDate](#schemagoogletypedate)|false|none|Minimum value for the date Field type.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest">GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeletelabelpermissionrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeletelabelpermissionrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeletelabelpermissionrequest"></a>

```json
{
  "name": "string",
  "useAdminAccess": true
}
```

Deletes a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. Label Permission resource name.|
|useAdminAccess|boolean|false|none|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequest"></a>

```json
{
  "languageCode": "string",
  "requests": [
    {
      "createField": {
        "field": {
          "appliedCapabilities": {
            "canRead": true,
            "canSearch": true,
            "canWrite": true
          },
          "createTime": "string",
          "creator": {
            "person": "string"
          },
          "dateOptions": {
            "dateFormat": "string",
            "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
            "maxValue": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "minValue": {
              "day": 0,
              "month": 0,
              "year": 0
            }
          },
          "disableTime": "string",
          "disabler": {
            "person": "string"
          },
          "displayHints": {
            "disabled": true,
            "hiddenInSearch": true,
            "required": true,
            "shownInApply": true
          },
          "id": "string",
          "integerOptions": {
            "maxValue": "string",
            "minValue": "string"
          },
          "lifecycle": {
            "disabledPolicy": {
              "hideInSearch": true,
              "showInApply": true
            },
            "hasUnpublishedChanges": true,
            "state": "STATE_UNSPECIFIED"
          },
          "lockStatus": {
            "locked": true
          },
          "properties": {
            "displayName": "string",
            "insertBeforeField": "string",
            "required": true
          },
          "publisher": {
            "person": "string"
          },
          "queryKey": "string",
          "schemaCapabilities": {
            "canDelete": true,
            "canDisable": true,
            "canEnable": true,
            "canUpdate": true
          },
          "selectionOptions": {
            "choices": [
              {
                "appliedCapabilities": {
                  "canRead": true,
                  "canSearch": true,
                  "canSelect": true
                },
                "createTime": "string",
                "creator": {
                  "person": "string"
                },
                "disableTime": "string",
                "disabler": {
                  "person": "string"
                },
                "displayHints": {
                  "badgeColors": {
                    "backgroundColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "foregroundColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "soloColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    }
                  },
                  "badgePriority": "string",
                  "darkBadgeColors": {
                    "backgroundColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "foregroundColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "soloColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    }
                  },
                  "disabled": true,
                  "hiddenInSearch": true,
                  "shownInApply": true
                },
                "id": "string",
                "lifecycle": {
                  "disabledPolicy": {
                    "hideInSearch": true,
                    "showInApply": true
                  },
                  "hasUnpublishedChanges": true,
                  "state": "STATE_UNSPECIFIED"
                },
                "lockStatus": {
                  "locked": true
                },
                "properties": {
                  "badgeConfig": {
                    "color": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "priorityOverride": "string"
                  },
                  "description": "string",
                  "displayName": "string",
                  "insertBeforeChoice": "string"
                },
                "publishTime": "string",
                "publisher": {
                  "person": "string"
                },
                "schemaCapabilities": {
                  "canDelete": true,
                  "canDisable": true,
                  "canEnable": true,
                  "canUpdate": true
                },
                "updateTime": "string",
                "updater": {
                  "person": "string"
                }
              }
            ],
            "listOptions": {
              "maxEntries": 0
            }
          },
          "textOptions": {
            "maxLength": 0,
            "minLength": 0
          },
          "updateTime": "string",
          "updater": {
            "person": "string"
          },
          "userOptions": {
            "listOptions": {
              "maxEntries": 0
            }
          }
        }
      },
      "createSelectionChoice": {
        "choice": {
          "appliedCapabilities": {
            "canRead": true,
            "canSearch": true,
            "canSelect": true
          },
          "createTime": "string",
          "creator": {
            "person": "string"
          },
          "disableTime": "string",
          "disabler": {
            "person": "string"
          },
          "displayHints": {
            "badgeColors": {
              "backgroundColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "foregroundColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "soloColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              }
            },
            "badgePriority": "string",
            "darkBadgeColors": {
              "backgroundColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "foregroundColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "soloColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              }
            },
            "disabled": true,
            "hiddenInSearch": true,
            "shownInApply": true
          },
          "id": "string",
          "lifecycle": {
            "disabledPolicy": {
              "hideInSearch": true,
              "showInApply": true
            },
            "hasUnpublishedChanges": true,
            "state": "STATE_UNSPECIFIED"
          },
          "lockStatus": {
            "locked": true
          },
          "properties": {
            "badgeConfig": {
              "color": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "priorityOverride": "string"
            },
            "description": "string",
            "displayName": "string",
            "insertBeforeChoice": "string"
          },
          "publishTime": "string",
          "publisher": {
            "person": "string"
          },
          "schemaCapabilities": {
            "canDelete": true,
            "canDisable": true,
            "canEnable": true,
            "canUpdate": true
          },
          "updateTime": "string",
          "updater": {
            "person": "string"
          }
        },
        "fieldId": "string"
      },
      "deleteField": {
        "id": "string"
      },
      "deleteSelectionChoice": {
        "fieldId": "string",
        "id": "string"
      },
      "disableField": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "id": "string",
        "updateMask": "string"
      },
      "disableSelectionChoice": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "fieldId": "string",
        "id": "string",
        "updateMask": "string"
      },
      "enableField": {
        "id": "string"
      },
      "enableSelectionChoice": {
        "fieldId": "string",
        "id": "string"
      },
      "updateField": {
        "id": "string",
        "properties": {
          "displayName": "string",
          "insertBeforeField": "string",
          "required": true
        },
        "updateMask": "string"
      },
      "updateFieldType": {
        "dateOptions": {
          "dateFormat": "string",
          "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
          "maxValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "minValue": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        },
        "id": "string",
        "integerOptions": {
          "maxValue": "string",
          "minValue": "string"
        },
        "longTextOptions": {
          "maxLength": 0,
          "minLength": 0
        },
        "selectionOptions": {
          "choices": [
            {
              "appliedCapabilities": {
                "canRead": true,
                "canSearch": true,
                "canSelect": true
              },
              "createTime": "string",
              "creator": {
                "person": "string"
              },
              "disableTime": "string",
              "disabler": {
                "person": "string"
              },
              "displayHints": {
                "badgeColors": {
                  "backgroundColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "foregroundColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "soloColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  }
                },
                "badgePriority": "string",
                "darkBadgeColors": {
                  "backgroundColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "foregroundColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "soloColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  }
                },
                "disabled": true,
                "hiddenInSearch": true,
                "shownInApply": true
              },
              "id": "string",
              "lifecycle": {
                "disabledPolicy": {
                  "hideInSearch": true,
                  "showInApply": true
                },
                "hasUnpublishedChanges": true,
                "state": "STATE_UNSPECIFIED"
              },
              "lockStatus": {
                "locked": true
              },
              "properties": {
                "badgeConfig": {
                  "color": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "priorityOverride": "string"
                },
                "description": "string",
                "displayName": "string",
                "insertBeforeChoice": "string"
              },
              "publishTime": "string",
              "publisher": {
                "person": "string"
              },
              "schemaCapabilities": {
                "canDelete": true,
                "canDisable": true,
                "canEnable": true,
                "canUpdate": true
              },
              "updateTime": "string",
              "updater": {
                "person": "string"
              }
            }
          ],
          "listOptions": {
            "maxEntries": 0
          }
        },
        "textOptions": {
          "maxLength": 0,
          "minLength": 0
        },
        "updateMask": "string",
        "userOptions": {
          "listOptions": {
            "maxEntries": 0
          }
        }
      },
      "updateLabel": {
        "properties": {
          "description": "string",
          "title": "string"
        },
        "updateMask": "string"
      },
      "updateSelectionChoiceProperties": {
        "fieldId": "string",
        "id": "string",
        "properties": {
          "badgeConfig": {
            "color": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "priorityOverride": "string"
          },
          "description": "string",
          "displayName": "string",
          "insertBeforeChoice": "string"
        },
        "updateMask": "string"
      }
    }
  ],
  "useAdminAccess": true,
  "view": "LABEL_VIEW_BASIC",
  "writeControl": {
    "requiredRevisionId": "string"
  }
}
```

The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The BCP-47 language code to use for evaluating localized Field labels when `include_label_in_response` is `true`.|
|requests|[[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestrequest)]|false|none|A list of updates to apply to the Label. Requests will be applied in the order they are specified.|
|useAdminAccess|boolean|false|none|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
|view|string|false|none|When specified, only certain fields belonging to the indicated view will be returned.|
|writeControl|[GoogleAppsDriveLabelsV2betaWriteControl](#schemagoogleappsdrivelabelsv2betawritecontrol)|false|none|Provides control over how write requests are executed.|

#### Enumerated Values

|Property|Value|
|---|---|
|view|LABEL_VIEW_BASIC|
|view|LABEL_VIEW_FULL|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestcreatefieldrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequestcreatefieldrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequestcreatefieldrequest"></a>

```json
{
  "field": {
    "appliedCapabilities": {
      "canRead": true,
      "canSearch": true,
      "canWrite": true
    },
    "createTime": "string",
    "creator": {
      "person": "string"
    },
    "dateOptions": {
      "dateFormat": "string",
      "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
      "maxValue": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "minValue": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "disableTime": "string",
    "disabler": {
      "person": "string"
    },
    "displayHints": {
      "disabled": true,
      "hiddenInSearch": true,
      "required": true,
      "shownInApply": true
    },
    "id": "string",
    "integerOptions": {
      "maxValue": "string",
      "minValue": "string"
    },
    "lifecycle": {
      "disabledPolicy": {
        "hideInSearch": true,
        "showInApply": true
      },
      "hasUnpublishedChanges": true,
      "state": "STATE_UNSPECIFIED"
    },
    "lockStatus": {
      "locked": true
    },
    "properties": {
      "displayName": "string",
      "insertBeforeField": "string",
      "required": true
    },
    "publisher": {
      "person": "string"
    },
    "queryKey": "string",
    "schemaCapabilities": {
      "canDelete": true,
      "canDisable": true,
      "canEnable": true,
      "canUpdate": true
    },
    "selectionOptions": {
      "choices": [
        {
          "appliedCapabilities": {
            "canRead": true,
            "canSearch": true,
            "canSelect": true
          },
          "createTime": "string",
          "creator": {
            "person": "string"
          },
          "disableTime": "string",
          "disabler": {
            "person": "string"
          },
          "displayHints": {
            "badgeColors": {
              "backgroundColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "foregroundColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "soloColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              }
            },
            "badgePriority": "string",
            "darkBadgeColors": {
              "backgroundColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "foregroundColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "soloColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              }
            },
            "disabled": true,
            "hiddenInSearch": true,
            "shownInApply": true
          },
          "id": "string",
          "lifecycle": {
            "disabledPolicy": {
              "hideInSearch": true,
              "showInApply": true
            },
            "hasUnpublishedChanges": true,
            "state": "STATE_UNSPECIFIED"
          },
          "lockStatus": {
            "locked": true
          },
          "properties": {
            "badgeConfig": {
              "color": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "priorityOverride": "string"
            },
            "description": "string",
            "displayName": "string",
            "insertBeforeChoice": "string"
          },
          "publishTime": "string",
          "publisher": {
            "person": "string"
          },
          "schemaCapabilities": {
            "canDelete": true,
            "canDisable": true,
            "canEnable": true,
            "canUpdate": true
          },
          "updateTime": "string",
          "updater": {
            "person": "string"
          }
        }
      ],
      "listOptions": {
        "maxEntries": 0
      }
    },
    "textOptions": {
      "maxLength": 0,
      "minLength": 0
    },
    "updateTime": "string",
    "updater": {
      "person": "string"
    },
    "userOptions": {
      "listOptions": {
        "maxEntries": 0
      }
    }
  }
}
```

Request to create a Field within a Label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|[GoogleAppsDriveLabelsV2betaField](#schemagoogleappsdrivelabelsv2betafield)|false|none|Required. Field to create.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestcreateselectionchoicerequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequestcreateselectionchoicerequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequestcreateselectionchoicerequest"></a>

```json
{
  "choice": {
    "appliedCapabilities": {
      "canRead": true,
      "canSearch": true,
      "canSelect": true
    },
    "createTime": "string",
    "creator": {
      "person": "string"
    },
    "disableTime": "string",
    "disabler": {
      "person": "string"
    },
    "displayHints": {
      "badgeColors": {
        "backgroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "foregroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "soloColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        }
      },
      "badgePriority": "string",
      "darkBadgeColors": {
        "backgroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "foregroundColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "soloColor": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        }
      },
      "disabled": true,
      "hiddenInSearch": true,
      "shownInApply": true
    },
    "id": "string",
    "lifecycle": {
      "disabledPolicy": {
        "hideInSearch": true,
        "showInApply": true
      },
      "hasUnpublishedChanges": true,
      "state": "STATE_UNSPECIFIED"
    },
    "lockStatus": {
      "locked": true
    },
    "properties": {
      "badgeConfig": {
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "priorityOverride": "string"
      },
      "description": "string",
      "displayName": "string",
      "insertBeforeChoice": "string"
    },
    "publishTime": "string",
    "publisher": {
      "person": "string"
    },
    "schemaCapabilities": {
      "canDelete": true,
      "canDisable": true,
      "canEnable": true,
      "canUpdate": true
    },
    "updateTime": "string",
    "updater": {
      "person": "string"
    }
  },
  "fieldId": "string"
}
```

Request to create a Selection Choice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|choice|[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice](#schemagoogleappsdrivelabelsv2betafieldselectionoptionschoice)|false|none|Required. The Choice to create.|
|fieldId|string|false|none|Required. The Selection Field in which a Choice will be created.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestdeletefieldrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequestdeletefieldrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequestdeletefieldrequest"></a>

```json
{
  "id": "string"
}
```

Request to delete the Field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Required. ID of the Field to delete.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestdeleteselectionchoicerequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequestdeleteselectionchoicerequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequestdeleteselectionchoicerequest"></a>

```json
{
  "fieldId": "string",
  "id": "string"
}
```

Request to delete a Choice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldId|string|false|none|Required. The Selection Field from which a Choice will be deleted.|
|id|string|false|none|Required. Choice to delete.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestdisablefieldrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequestdisablefieldrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequestdisablefieldrequest"></a>

```json
{
  "disabledPolicy": {
    "hideInSearch": true,
    "showInApply": true
  },
  "id": "string",
  "updateMask": "string"
}
```

Request to disable the Field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabledPolicy|[GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy](#schemagoogleappsdrivelabelsv2betalifecycledisabledpolicy)|false|none|Required. Field Disabled Policy.|
|id|string|false|none|Required. Key of the Field to disable.|
|updateMask|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestdisableselectionchoicerequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequestdisableselectionchoicerequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequestdisableselectionchoicerequest"></a>

```json
{
  "disabledPolicy": {
    "hideInSearch": true,
    "showInApply": true
  },
  "fieldId": "string",
  "id": "string",
  "updateMask": "string"
}
```

Request to disable a Choice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabledPolicy|[GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy](#schemagoogleappsdrivelabelsv2betalifecycledisabledpolicy)|false|none|Required. The disabled policy to update.|
|fieldId|string|false|none|Required. The Selection Field in which a Choice will be disabled.|
|id|string|false|none|Required. Choice to disable.|
|updateMask|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestenablefieldrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequestenablefieldrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequestenablefieldrequest"></a>

```json
{
  "id": "string"
}
```

Request to enable the Field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Required. ID of the Field to enable.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestenableselectionchoicerequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequestenableselectionchoicerequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequestenableselectionchoicerequest"></a>

```json
{
  "fieldId": "string",
  "id": "string"
}
```

Request to enable a Choice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldId|string|false|none|Required. The Selection Field in which a Choice will be enabled.|
|id|string|false|none|Required. Choice to enable.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequestrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequestrequest"></a>

```json
{
  "createField": {
    "field": {
      "appliedCapabilities": {
        "canRead": true,
        "canSearch": true,
        "canWrite": true
      },
      "createTime": "string",
      "creator": {
        "person": "string"
      },
      "dateOptions": {
        "dateFormat": "string",
        "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
        "maxValue": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "minValue": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      },
      "disableTime": "string",
      "disabler": {
        "person": "string"
      },
      "displayHints": {
        "disabled": true,
        "hiddenInSearch": true,
        "required": true,
        "shownInApply": true
      },
      "id": "string",
      "integerOptions": {
        "maxValue": "string",
        "minValue": "string"
      },
      "lifecycle": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "hasUnpublishedChanges": true,
        "state": "STATE_UNSPECIFIED"
      },
      "lockStatus": {
        "locked": true
      },
      "properties": {
        "displayName": "string",
        "insertBeforeField": "string",
        "required": true
      },
      "publisher": {
        "person": "string"
      },
      "queryKey": "string",
      "schemaCapabilities": {
        "canDelete": true,
        "canDisable": true,
        "canEnable": true,
        "canUpdate": true
      },
      "selectionOptions": {
        "choices": [
          {
            "appliedCapabilities": {
              "canRead": true,
              "canSearch": true,
              "canSelect": true
            },
            "createTime": "string",
            "creator": {
              "person": "string"
            },
            "disableTime": "string",
            "disabler": {
              "person": "string"
            },
            "displayHints": {
              "badgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "badgePriority": "string",
              "darkBadgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "disabled": true,
              "hiddenInSearch": true,
              "shownInApply": true
            },
            "id": "string",
            "lifecycle": {
              "disabledPolicy": {
                "hideInSearch": true,
                "showInApply": true
              },
              "hasUnpublishedChanges": true,
              "state": "STATE_UNSPECIFIED"
            },
            "lockStatus": {
              "locked": true
            },
            "properties": {
              "badgeConfig": {
                "color": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "priorityOverride": "string"
              },
              "description": "string",
              "displayName": "string",
              "insertBeforeChoice": "string"
            },
            "publishTime": "string",
            "publisher": {
              "person": "string"
            },
            "schemaCapabilities": {
              "canDelete": true,
              "canDisable": true,
              "canEnable": true,
              "canUpdate": true
            },
            "updateTime": "string",
            "updater": {
              "person": "string"
            }
          }
        ],
        "listOptions": {
          "maxEntries": 0
        }
      },
      "textOptions": {
        "maxLength": 0,
        "minLength": 0
      },
      "updateTime": "string",
      "updater": {
        "person": "string"
      },
      "userOptions": {
        "listOptions": {
          "maxEntries": 0
        }
      }
    }
  },
  "createSelectionChoice": {
    "choice": {
      "appliedCapabilities": {
        "canRead": true,
        "canSearch": true,
        "canSelect": true
      },
      "createTime": "string",
      "creator": {
        "person": "string"
      },
      "disableTime": "string",
      "disabler": {
        "person": "string"
      },
      "displayHints": {
        "badgeColors": {
          "backgroundColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "foregroundColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "soloColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          }
        },
        "badgePriority": "string",
        "darkBadgeColors": {
          "backgroundColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "foregroundColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "soloColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          }
        },
        "disabled": true,
        "hiddenInSearch": true,
        "shownInApply": true
      },
      "id": "string",
      "lifecycle": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "hasUnpublishedChanges": true,
        "state": "STATE_UNSPECIFIED"
      },
      "lockStatus": {
        "locked": true
      },
      "properties": {
        "badgeConfig": {
          "color": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "priorityOverride": "string"
        },
        "description": "string",
        "displayName": "string",
        "insertBeforeChoice": "string"
      },
      "publishTime": "string",
      "publisher": {
        "person": "string"
      },
      "schemaCapabilities": {
        "canDelete": true,
        "canDisable": true,
        "canEnable": true,
        "canUpdate": true
      },
      "updateTime": "string",
      "updater": {
        "person": "string"
      }
    },
    "fieldId": "string"
  },
  "deleteField": {
    "id": "string"
  },
  "deleteSelectionChoice": {
    "fieldId": "string",
    "id": "string"
  },
  "disableField": {
    "disabledPolicy": {
      "hideInSearch": true,
      "showInApply": true
    },
    "id": "string",
    "updateMask": "string"
  },
  "disableSelectionChoice": {
    "disabledPolicy": {
      "hideInSearch": true,
      "showInApply": true
    },
    "fieldId": "string",
    "id": "string",
    "updateMask": "string"
  },
  "enableField": {
    "id": "string"
  },
  "enableSelectionChoice": {
    "fieldId": "string",
    "id": "string"
  },
  "updateField": {
    "id": "string",
    "properties": {
      "displayName": "string",
      "insertBeforeField": "string",
      "required": true
    },
    "updateMask": "string"
  },
  "updateFieldType": {
    "dateOptions": {
      "dateFormat": "string",
      "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
      "maxValue": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "minValue": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "id": "string",
    "integerOptions": {
      "maxValue": "string",
      "minValue": "string"
    },
    "longTextOptions": {
      "maxLength": 0,
      "minLength": 0
    },
    "selectionOptions": {
      "choices": [
        {
          "appliedCapabilities": {
            "canRead": true,
            "canSearch": true,
            "canSelect": true
          },
          "createTime": "string",
          "creator": {
            "person": "string"
          },
          "disableTime": "string",
          "disabler": {
            "person": "string"
          },
          "displayHints": {
            "badgeColors": {
              "backgroundColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "foregroundColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "soloColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              }
            },
            "badgePriority": "string",
            "darkBadgeColors": {
              "backgroundColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "foregroundColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "soloColor": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              }
            },
            "disabled": true,
            "hiddenInSearch": true,
            "shownInApply": true
          },
          "id": "string",
          "lifecycle": {
            "disabledPolicy": {
              "hideInSearch": true,
              "showInApply": true
            },
            "hasUnpublishedChanges": true,
            "state": "STATE_UNSPECIFIED"
          },
          "lockStatus": {
            "locked": true
          },
          "properties": {
            "badgeConfig": {
              "color": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "priorityOverride": "string"
            },
            "description": "string",
            "displayName": "string",
            "insertBeforeChoice": "string"
          },
          "publishTime": "string",
          "publisher": {
            "person": "string"
          },
          "schemaCapabilities": {
            "canDelete": true,
            "canDisable": true,
            "canEnable": true,
            "canUpdate": true
          },
          "updateTime": "string",
          "updater": {
            "person": "string"
          }
        }
      ],
      "listOptions": {
        "maxEntries": 0
      }
    },
    "textOptions": {
      "maxLength": 0,
      "minLength": 0
    },
    "updateMask": "string",
    "userOptions": {
      "listOptions": {
        "maxEntries": 0
      }
    }
  },
  "updateLabel": {
    "properties": {
      "description": "string",
      "title": "string"
    },
    "updateMask": "string"
  },
  "updateSelectionChoiceProperties": {
    "fieldId": "string",
    "id": "string",
    "properties": {
      "badgeConfig": {
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "priorityOverride": "string"
      },
      "description": "string",
      "displayName": "string",
      "insertBeforeChoice": "string"
    },
    "updateMask": "string"
  }
}
```

A single kind of update to apply to a Label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createField|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestcreatefieldrequest)|false|none|Creates a new Field.|
|createSelectionChoice|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestcreateselectionchoicerequest)|false|none|Creates Choice within a Selection field.|
|deleteField|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestdeletefieldrequest)|false|none|Deletes a Field from the label.|
|deleteSelectionChoice|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestdeleteselectionchoicerequest)|false|none|Delete a Choice within a Selection Field.|
|disableField|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestdisablefieldrequest)|false|none|Disables the Field.|
|disableSelectionChoice|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestdisableselectionchoicerequest)|false|none|Disable a Choice within a Selection Field.|
|enableField|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestenablefieldrequest)|false|none|Enables the Field.|
|enableSelectionChoice|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestenableselectionchoicerequest)|false|none|Enable a Choice within a Selection Field.|
|updateField|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldpropertiesrequest)|false|none|Updates basic properties of a Field.|
|updateFieldType|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldtyperequest)|false|none|Update Field type and/or type options.|
|updateLabel|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdatelabelpropertiesrequest)|false|none|Updates the Label properties.|
|updateSelectionChoiceProperties|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdateselectionchoicepropertiesrequest)|false|none|Update a Choice properties within a Selection Field.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldpropertiesrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldpropertiesrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldpropertiesrequest"></a>

```json
{
  "id": "string",
  "properties": {
    "displayName": "string",
    "insertBeforeField": "string",
    "required": true
  },
  "updateMask": "string"
}
```

Request to update Field properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Required. The Field to update.|
|properties|[GoogleAppsDriveLabelsV2betaFieldProperties](#schemagoogleappsdrivelabelsv2betafieldproperties)|false|none|Required. Basic Field properties.|
|updateMask|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldtyperequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldtyperequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldtyperequest"></a>

```json
{
  "dateOptions": {
    "dateFormat": "string",
    "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
    "maxValue": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "minValue": {
      "day": 0,
      "month": 0,
      "year": 0
    }
  },
  "id": "string",
  "integerOptions": {
    "maxValue": "string",
    "minValue": "string"
  },
  "longTextOptions": {
    "maxLength": 0,
    "minLength": 0
  },
  "selectionOptions": {
    "choices": [
      {
        "appliedCapabilities": {
          "canRead": true,
          "canSearch": true,
          "canSelect": true
        },
        "createTime": "string",
        "creator": {
          "person": "string"
        },
        "disableTime": "string",
        "disabler": {
          "person": "string"
        },
        "displayHints": {
          "badgeColors": {
            "backgroundColor": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "foregroundColor": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "soloColor": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            }
          },
          "badgePriority": "string",
          "darkBadgeColors": {
            "backgroundColor": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "foregroundColor": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "soloColor": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            }
          },
          "disabled": true,
          "hiddenInSearch": true,
          "shownInApply": true
        },
        "id": "string",
        "lifecycle": {
          "disabledPolicy": {
            "hideInSearch": true,
            "showInApply": true
          },
          "hasUnpublishedChanges": true,
          "state": "STATE_UNSPECIFIED"
        },
        "lockStatus": {
          "locked": true
        },
        "properties": {
          "badgeConfig": {
            "color": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "priorityOverride": "string"
          },
          "description": "string",
          "displayName": "string",
          "insertBeforeChoice": "string"
        },
        "publishTime": "string",
        "publisher": {
          "person": "string"
        },
        "schemaCapabilities": {
          "canDelete": true,
          "canDisable": true,
          "canEnable": true,
          "canUpdate": true
        },
        "updateTime": "string",
        "updater": {
          "person": "string"
        }
      }
    ],
    "listOptions": {
      "maxEntries": 0
    }
  },
  "textOptions": {
    "maxLength": 0,
    "minLength": 0
  },
  "updateMask": "string",
  "userOptions": {
    "listOptions": {
      "maxEntries": 0
    }
  }
}
```

Request to change the type of a Field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateOptions|[GoogleAppsDriveLabelsV2betaFieldDateOptions](#schemagoogleappsdrivelabelsv2betafielddateoptions)|false|none|Update field to Date.|
|id|string|false|none|Required. The Field to update.|
|integerOptions|[GoogleAppsDriveLabelsV2betaFieldIntegerOptions](#schemagoogleappsdrivelabelsv2betafieldintegeroptions)|false|none|Update field to Integer.|
|longTextOptions|[GoogleAppsDriveLabelsV2betaFieldLongTextOptions](#schemagoogleappsdrivelabelsv2betafieldlongtextoptions)|false|none|Update field to Long Text.|
|selectionOptions|[GoogleAppsDriveLabelsV2betaFieldSelectionOptions](#schemagoogleappsdrivelabelsv2betafieldselectionoptions)|false|none|Update field to Selection.|
|textOptions|[GoogleAppsDriveLabelsV2betaFieldTextOptions](#schemagoogleappsdrivelabelsv2betafieldtextoptions)|false|none|Update field to Text.|
|updateMask|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root of `type_options` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.|
|userOptions|[GoogleAppsDriveLabelsV2betaFieldUserOptions](#schemagoogleappsdrivelabelsv2betafielduseroptions)|false|none|Update field to User.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdatelabelpropertiesrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdatelabelpropertiesrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdatelabelpropertiesrequest"></a>

```json
{
  "properties": {
    "description": "string",
    "title": "string"
  },
  "updateMask": "string"
}
```

Updates basic properties of a Label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|[GoogleAppsDriveLabelsV2betaLabelProperties](#schemagoogleappsdrivelabelsv2betalabelproperties)|false|none|Required. Label properties to update.|
|updateMask|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `label_properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdateselectionchoicepropertiesrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdateselectionchoicepropertiesrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelrequestupdateselectionchoicepropertiesrequest"></a>

```json
{
  "fieldId": "string",
  "id": "string",
  "properties": {
    "badgeConfig": {
      "color": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "priorityOverride": "string"
    },
    "description": "string",
    "displayName": "string",
    "insertBeforeChoice": "string"
  },
  "updateMask": "string"
}
```

Request to update a Choice properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldId|string|false|none|Required. The Selection Field to update.|
|id|string|false|none|Required. The Choice to update.|
|properties|[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties](#schemagoogleappsdrivelabelsv2betafieldselectionoptionschoiceproperties)|false|none|Required. The Choice properties to update.|
|updateMask|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponse"></a>

```json
{
  "responses": [
    {
      "createField": {
        "id": "string",
        "priority": 0
      },
      "createSelectionChoice": {
        "fieldId": "string",
        "id": "string"
      },
      "deleteField": {},
      "deleteSelectionChoice": {},
      "disableField": {},
      "disableSelectionChoice": {},
      "enableField": {},
      "enableSelectionChoice": {},
      "updateField": {
        "priority": 0
      },
      "updateFieldType": {},
      "updateLabel": {},
      "updateSelectionChoiceProperties": {
        "priority": 0
      }
    }
  ],
  "updatedLabel": {
    "appliedCapabilities": {
      "canApply": true,
      "canRead": true,
      "canRemove": true
    },
    "appliedLabelPolicy": {
      "copyMode": "COPY_MODE_UNSPECIFIED"
    },
    "createTime": "string",
    "creator": {
      "person": "string"
    },
    "customer": "string",
    "disableTime": "string",
    "disabler": {
      "person": "string"
    },
    "displayHints": {
      "disabled": true,
      "hiddenInSearch": true,
      "priority": "string",
      "shownInApply": true
    },
    "fields": [
      {
        "appliedCapabilities": {
          "canRead": true,
          "canSearch": true,
          "canWrite": true
        },
        "createTime": "string",
        "creator": {
          "person": "string"
        },
        "dateOptions": {
          "dateFormat": "string",
          "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
          "maxValue": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "minValue": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        },
        "disableTime": "string",
        "disabler": {
          "person": "string"
        },
        "displayHints": {
          "disabled": true,
          "hiddenInSearch": true,
          "required": true,
          "shownInApply": true
        },
        "id": "string",
        "integerOptions": {
          "maxValue": "string",
          "minValue": "string"
        },
        "lifecycle": {
          "disabledPolicy": {
            "hideInSearch": true,
            "showInApply": true
          },
          "hasUnpublishedChanges": true,
          "state": "STATE_UNSPECIFIED"
        },
        "lockStatus": {
          "locked": true
        },
        "properties": {
          "displayName": "string",
          "insertBeforeField": "string",
          "required": true
        },
        "publisher": {
          "person": "string"
        },
        "queryKey": "string",
        "schemaCapabilities": {
          "canDelete": true,
          "canDisable": true,
          "canEnable": true,
          "canUpdate": true
        },
        "selectionOptions": {
          "choices": [
            {
              "appliedCapabilities": {
                "canRead": true,
                "canSearch": true,
                "canSelect": true
              },
              "createTime": "string",
              "creator": {
                "person": "string"
              },
              "disableTime": "string",
              "disabler": {
                "person": "string"
              },
              "displayHints": {
                "badgeColors": {
                  "backgroundColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "foregroundColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "soloColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  }
                },
                "badgePriority": "string",
                "darkBadgeColors": {
                  "backgroundColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "foregroundColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "soloColor": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  }
                },
                "disabled": true,
                "hiddenInSearch": true,
                "shownInApply": true
              },
              "id": "string",
              "lifecycle": {
                "disabledPolicy": {
                  "hideInSearch": true,
                  "showInApply": true
                },
                "hasUnpublishedChanges": true,
                "state": "STATE_UNSPECIFIED"
              },
              "lockStatus": {
                "locked": true
              },
              "properties": {
                "badgeConfig": {
                  "color": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "priorityOverride": "string"
                },
                "description": "string",
                "displayName": "string",
                "insertBeforeChoice": "string"
              },
              "publishTime": "string",
              "publisher": {
                "person": "string"
              },
              "schemaCapabilities": {
                "canDelete": true,
                "canDisable": true,
                "canEnable": true,
                "canUpdate": true
              },
              "updateTime": "string",
              "updater": {
                "person": "string"
              }
            }
          ],
          "listOptions": {
            "maxEntries": 0
          }
        },
        "textOptions": {
          "maxLength": 0,
          "minLength": 0
        },
        "updateTime": "string",
        "updater": {
          "person": "string"
        },
        "userOptions": {
          "listOptions": {
            "maxEntries": 0
          }
        }
      }
    ],
    "id": "string",
    "labelType": "LABEL_TYPE_UNSPECIFIED",
    "learnMoreUri": "string",
    "lifecycle": {
      "disabledPolicy": {
        "hideInSearch": true,
        "showInApply": true
      },
      "hasUnpublishedChanges": true,
      "state": "STATE_UNSPECIFIED"
    },
    "lockStatus": {
      "locked": true
    },
    "name": "string",
    "properties": {
      "description": "string",
      "title": "string"
    },
    "publishTime": "string",
    "publisher": {
      "person": "string"
    },
    "revisionCreateTime": "string",
    "revisionCreator": {
      "person": "string"
    },
    "revisionId": "string",
    "schemaCapabilities": {
      "canDelete": true,
      "canDisable": true,
      "canEnable": true,
      "canUpdate": true
    }
  }
}
```

Response for Label update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseresponse)]|false|none|The reply of the updates. This maps 1:1 with the updates, although responses to some requests may be empty.|
|updatedLabel|[GoogleAppsDriveLabelsV2betaLabel](#schemagoogleappsdrivelabelsv2betalabel)|false|none|The label after updates were applied. This is only set if [BatchUpdateLabelResponse2.include_label_in_response] is `true` and there were no errors.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse"></a>

```json
{
  "id": "string",
  "priority": 0
}
```

Response following Field create.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The field of the created field. When left blank in a create request, a key will be autogenerated and can be identified here.|
|priority|integer(int32)|false|none|The priority of the created field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse"></a>

```json
{
  "fieldId": "string",
  "id": "string"
}
```

Response following Selection Choice create.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldId|string|false|none|The server-generated id of the field.|
|id|string|false|none|The server-generated ID of the created choice within the Field|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponsedeletefieldresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponsedeletefieldresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponsedeletefieldresponse"></a>

```json
{}
```

Response following Field delete.

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponsedeleteselectionchoiceresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponsedeleteselectionchoiceresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponsedeleteselectionchoiceresponse"></a>

```json
{}
```

Response following Choice delete.

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponsedisablefieldresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponsedisablefieldresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponsedisablefieldresponse"></a>

```json
{}
```

Response following Field disable.

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponsedisableselectionchoiceresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponsedisableselectionchoiceresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponsedisableselectionchoiceresponse"></a>

```json
{}
```

Response following Choice disable.

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseenablefieldresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponseenablefieldresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponseenablefieldresponse"></a>

```json
{}
```

Response following Field enable.

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseenableselectionchoiceresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponseenableselectionchoiceresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponseenableselectionchoiceresponse"></a>

```json
{}
```

Response following Choice enable.

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponseresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponseresponse"></a>

```json
{
  "createField": {
    "id": "string",
    "priority": 0
  },
  "createSelectionChoice": {
    "fieldId": "string",
    "id": "string"
  },
  "deleteField": {},
  "deleteSelectionChoice": {},
  "disableField": {},
  "disableSelectionChoice": {},
  "enableField": {},
  "enableSelectionChoice": {},
  "updateField": {
    "priority": 0
  },
  "updateFieldType": {},
  "updateLabel": {},
  "updateSelectionChoiceProperties": {
    "priority": 0
  }
}
```

A single response from an update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createField|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse)|false|none|Creates a new Field.|
|createSelectionChoice|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse)|false|none|Creates a new selection list option to add to a Selection Field.|
|deleteField|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponsedeletefieldresponse)|false|none|Deletes a Field from the label.|
|deleteSelectionChoice|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponsedeleteselectionchoiceresponse)|false|none|Deletes a Choice from a Selection Field.|
|disableField|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponsedisablefieldresponse)|false|none|Disables Field.|
|disableSelectionChoice|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponsedisableselectionchoiceresponse)|false|none|Disables a Choice within a Selection Field.|
|enableField|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseenablefieldresponse)|false|none|Enables Field.|
|enableSelectionChoice|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseenableselectionchoiceresponse)|false|none|Enables a Choice within a Selection Field.|
|updateField|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse)|false|none|Updates basic properties of a Field.|
|updateFieldType|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldtyperesponse)|false|none|Update Field type and/or type options.|
|updateLabel|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdatelabelpropertiesresponse)|false|none|Updated basic properties of a Label.|
|updateSelectionChoiceProperties|[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse](#schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse)|false|none|Updates a Choice within a Selection Field.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse"></a>

```json
{
  "priority": 0
}
```

Response following update to Field properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|priority|integer(int32)|false|none|The priority of the updated field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldtyperesponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldtyperesponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldtyperesponse"></a>

```json
{}
```

Response following update to Field type.

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdatelabelpropertiesresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdatelabelpropertiesresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdatelabelpropertiesresponse"></a>

```json
{}
```

Response following update to Label properties.

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse">GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse"></a>

```json
{
  "priority": 0
}
```

Response following update to Selection Choice properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|priority|integer(int32)|false|none|The priority of the updated choice. The priority may change from what was specified to assure contiguous priorities between choices (1-n).|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaDisableLabelRequest">GoogleAppsDriveLabelsV2betaDisableLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betadisablelabelrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaDisableLabelRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betadisablelabelrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betadisablelabelrequest"></a>

```json
{
  "disabledPolicy": {
    "hideInSearch": true,
    "showInApply": true
  },
  "languageCode": "string",
  "updateMask": "string",
  "useAdminAccess": true,
  "writeControl": {
    "requiredRevisionId": "string"
  }
}
```

Request to deprecate a published Label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabledPolicy|[GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy](#schemagoogleappsdrivelabelsv2betalifecycledisabledpolicy)|false|none|Disabled policy to use.|
|languageCode|string|false|none|The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.|
|updateMask|string(google-fieldmask)|false|none|The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.|
|useAdminAccess|boolean|false|none|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
|writeControl|[GoogleAppsDriveLabelsV2betaWriteControl](#schemagoogleappsdrivelabelsv2betawritecontrol)|false|none|Provides control over how write requests are executed. Defaults to unset, which means last write wins.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaEnableLabelRequest">GoogleAppsDriveLabelsV2betaEnableLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betaenablelabelrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaEnableLabelRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betaenablelabelrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betaenablelabelrequest"></a>

```json
{
  "languageCode": "string",
  "useAdminAccess": true,
  "writeControl": {
    "requiredRevisionId": "string"
  }
}
```

Request to enable a label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.|
|useAdminAccess|boolean|false|none|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
|writeControl|[GoogleAppsDriveLabelsV2betaWriteControl](#schemagoogleappsdrivelabelsv2betawritecontrol)|false|none|Provides control over how write requests are executed. Defaults to unset, which means last write wins.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaField">GoogleAppsDriveLabelsV2betaField</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafield"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaField"></a>
<a id="tocSgoogleappsdrivelabelsv2betafield"></a>
<a id="tocsgoogleappsdrivelabelsv2betafield"></a>

```json
{
  "appliedCapabilities": {
    "canRead": true,
    "canSearch": true,
    "canWrite": true
  },
  "createTime": "string",
  "creator": {
    "person": "string"
  },
  "dateOptions": {
    "dateFormat": "string",
    "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
    "maxValue": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "minValue": {
      "day": 0,
      "month": 0,
      "year": 0
    }
  },
  "disableTime": "string",
  "disabler": {
    "person": "string"
  },
  "displayHints": {
    "disabled": true,
    "hiddenInSearch": true,
    "required": true,
    "shownInApply": true
  },
  "id": "string",
  "integerOptions": {
    "maxValue": "string",
    "minValue": "string"
  },
  "lifecycle": {
    "disabledPolicy": {
      "hideInSearch": true,
      "showInApply": true
    },
    "hasUnpublishedChanges": true,
    "state": "STATE_UNSPECIFIED"
  },
  "lockStatus": {
    "locked": true
  },
  "properties": {
    "displayName": "string",
    "insertBeforeField": "string",
    "required": true
  },
  "publisher": {
    "person": "string"
  },
  "queryKey": "string",
  "schemaCapabilities": {
    "canDelete": true,
    "canDisable": true,
    "canEnable": true,
    "canUpdate": true
  },
  "selectionOptions": {
    "choices": [
      {
        "appliedCapabilities": {
          "canRead": true,
          "canSearch": true,
          "canSelect": true
        },
        "createTime": "string",
        "creator": {
          "person": "string"
        },
        "disableTime": "string",
        "disabler": {
          "person": "string"
        },
        "displayHints": {
          "badgeColors": {
            "backgroundColor": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "foregroundColor": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "soloColor": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            }
          },
          "badgePriority": "string",
          "darkBadgeColors": {
            "backgroundColor": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "foregroundColor": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "soloColor": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            }
          },
          "disabled": true,
          "hiddenInSearch": true,
          "shownInApply": true
        },
        "id": "string",
        "lifecycle": {
          "disabledPolicy": {
            "hideInSearch": true,
            "showInApply": true
          },
          "hasUnpublishedChanges": true,
          "state": "STATE_UNSPECIFIED"
        },
        "lockStatus": {
          "locked": true
        },
        "properties": {
          "badgeConfig": {
            "color": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "priorityOverride": "string"
          },
          "description": "string",
          "displayName": "string",
          "insertBeforeChoice": "string"
        },
        "publishTime": "string",
        "publisher": {
          "person": "string"
        },
        "schemaCapabilities": {
          "canDelete": true,
          "canDisable": true,
          "canEnable": true,
          "canUpdate": true
        },
        "updateTime": "string",
        "updater": {
          "person": "string"
        }
      }
    ],
    "listOptions": {
      "maxEntries": 0
    }
  },
  "textOptions": {
    "maxLength": 0,
    "minLength": 0
  },
  "updateTime": "string",
  "updater": {
    "person": "string"
  },
  "userOptions": {
    "listOptions": {
      "maxEntries": 0
    }
  }
}
```

Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appliedCapabilities|[GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities](#schemagoogleappsdrivelabelsv2betafieldappliedcapabilities)|false|none|Output only. The capabilities this user has on this field and its value when the label is applied on Drive items.|
|createTime|string(google-datetime)|false|read-only|Output only. The time this field was created.|
|creator|[GoogleAppsDriveLabelsV2betaUserInfo](#schemagoogleappsdrivelabelsv2betauserinfo)|false|none|Output only. The user who created this field.|
|dateOptions|[GoogleAppsDriveLabelsV2betaFieldDateOptions](#schemagoogleappsdrivelabelsv2betafielddateoptions)|false|none|Date field options.|
|disableTime|string(google-datetime)|false|read-only|Output only. The time this field was disabled. This value has no meaning when the field is not disabled.|
|disabler|[GoogleAppsDriveLabelsV2betaUserInfo](#schemagoogleappsdrivelabelsv2betauserinfo)|false|none|Output only. The user who disabled this field. This value has no meaning when the field is not disabled.|
|displayHints|[GoogleAppsDriveLabelsV2betaFieldDisplayHints](#schemagoogleappsdrivelabelsv2betafielddisplayhints)|false|none|Output only. UI display hints for rendering a field.|
|id|string|false|read-only|Output only. The key of a field, unique within a label or library. This value is autogenerated. Matches the regex: `([a-zA-Z0-9])+`|
|integerOptions|[GoogleAppsDriveLabelsV2betaFieldIntegerOptions](#schemagoogleappsdrivelabelsv2betafieldintegeroptions)|false|none|Integer field options.|
|lifecycle|[GoogleAppsDriveLabelsV2betaLifecycle](#schemagoogleappsdrivelabelsv2betalifecycle)|false|none|Output only. The lifecycle of this field.|
|lockStatus|[GoogleAppsDriveLabelsV2betaLockStatus](#schemagoogleappsdrivelabelsv2betalockstatus)|false|none|Output only. The LockStatus of this field.|
|properties|[GoogleAppsDriveLabelsV2betaFieldProperties](#schemagoogleappsdrivelabelsv2betafieldproperties)|false|none|The basic properties of the field.|
|publisher|[GoogleAppsDriveLabelsV2betaUserInfo](#schemagoogleappsdrivelabelsv2betauserinfo)|false|none|Output only. The user who published this field. This value has no meaning when the field is not published.|
|queryKey|string|false|read-only|Output only. The key to use when constructing Drive search queries to find files based on values defined for this field on files. For example, "`{query_key}` > 2001-01-01".|
|schemaCapabilities|[GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities](#schemagoogleappsdrivelabelsv2betafieldschemacapabilities)|false|none|Output only. The capabilities this user has when editing this field.|
|selectionOptions|[GoogleAppsDriveLabelsV2betaFieldSelectionOptions](#schemagoogleappsdrivelabelsv2betafieldselectionoptions)|false|none|Selection field options.|
|textOptions|[GoogleAppsDriveLabelsV2betaFieldTextOptions](#schemagoogleappsdrivelabelsv2betafieldtextoptions)|false|none|Text field options.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time this field was updated.|
|updater|[GoogleAppsDriveLabelsV2betaUserInfo](#schemagoogleappsdrivelabelsv2betauserinfo)|false|none|Output only. The user who modified this field.|
|userOptions|[GoogleAppsDriveLabelsV2betaFieldUserOptions](#schemagoogleappsdrivelabelsv2betafielduseroptions)|false|none|User field options.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities">GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldappliedcapabilities"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldappliedcapabilities"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldappliedcapabilities"></a>

```json
{
  "canRead": true,
  "canSearch": true,
  "canWrite": true
}
```

The capabilities related to this field on applied metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canRead|boolean|false|none|Whether the user can read related applied metadata on items.|
|canSearch|boolean|false|none|Whether the user can search for Drive items referencing this field.|
|canWrite|boolean|false|none|Whether the user can set this field on Drive items.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldDateOptions">GoogleAppsDriveLabelsV2betaFieldDateOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafielddateoptions"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldDateOptions"></a>
<a id="tocSgoogleappsdrivelabelsv2betafielddateoptions"></a>
<a id="tocsgoogleappsdrivelabelsv2betafielddateoptions"></a>

```json
{
  "dateFormat": "string",
  "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
  "maxValue": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "minValue": {
    "day": 0,
    "month": 0,
    "year": 0
  }
}
```

Options for the date field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateFormat|string|false|read-only|Output only. ICU date format.|
|dateFormatType|string|false|none|Localized date formatting option. Field values are rendered in this format according to their locale.|
|maxValue|[GoogleTypeDate](#schemagoogletypedate)|false|none|Output only. Maximum valid value (year, month, day).|
|minValue|[GoogleTypeDate](#schemagoogletypedate)|false|none|Output only. Minimum valid value (year, month, day).|

#### Enumerated Values

|Property|Value|
|---|---|
|dateFormatType|DATE_FORMAT_UNSPECIFIED|
|dateFormatType|LONG_DATE|
|dateFormatType|SHORT_DATE|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldDisplayHints">GoogleAppsDriveLabelsV2betaFieldDisplayHints</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafielddisplayhints"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldDisplayHints"></a>
<a id="tocSgoogleappsdrivelabelsv2betafielddisplayhints"></a>
<a id="tocsgoogleappsdrivelabelsv2betafielddisplayhints"></a>

```json
{
  "disabled": true,
  "hiddenInSearch": true,
  "required": true,
  "shownInApply": true
}
```

UI display hints for rendering a field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|Whether the field should be shown in the UI as disabled.|
|hiddenInSearch|boolean|false|none|This field should be hidden in the search menu when searching for Drive items.|
|required|boolean|false|none|Whether the field should be shown as required in the UI.|
|shownInApply|boolean|false|none|This field should be shown in the apply menu when applying values to a Drive item.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldIntegerOptions">GoogleAppsDriveLabelsV2betaFieldIntegerOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldintegeroptions"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldIntegerOptions"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldintegeroptions"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldintegeroptions"></a>

```json
{
  "maxValue": "string",
  "minValue": "string"
}
```

Options for the Integer field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxValue|string(int64)|false|read-only|Output only. The maximum valid value for the integer field.|
|minValue|string(int64)|false|read-only|Output only. The minimum valid value for the integer field.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldLimits">GoogleAppsDriveLabelsV2betaFieldLimits</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldlimits"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldLimits"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldlimits"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldlimits"></a>

```json
{
  "dateLimits": {
    "maxValue": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "minValue": {
      "day": 0,
      "month": 0,
      "year": 0
    }
  },
  "integerLimits": {
    "maxValue": "string",
    "minValue": "string"
  },
  "longTextLimits": {
    "maxLength": 0,
    "minLength": 0
  },
  "maxDescriptionLength": 0,
  "maxDisplayNameLength": 0,
  "maxIdLength": 0,
  "selectionLimits": {
    "listLimits": {
      "maxEntries": 0
    },
    "maxChoices": 0,
    "maxDeletedChoices": 0,
    "maxDisplayNameLength": 0,
    "maxIdLength": 0
  },
  "textLimits": {
    "maxLength": 0,
    "minLength": 0
  },
  "userLimits": {
    "listLimits": {
      "maxEntries": 0
    }
  }
}
```

Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateLimits|[GoogleAppsDriveLabelsV2betaDateLimits](#schemagoogleappsdrivelabelsv2betadatelimits)|false|none|Date Field limits.|
|integerLimits|[GoogleAppsDriveLabelsV2betaIntegerLimits](#schemagoogleappsdrivelabelsv2betaintegerlimits)|false|none|Integer Field limits.|
|longTextLimits|[GoogleAppsDriveLabelsV2betaLongTextLimits](#schemagoogleappsdrivelabelsv2betalongtextlimits)|false|none|Long text Field limits.|
|maxDescriptionLength|integer(int32)|false|none|Limits for Field description, also called help text.|
|maxDisplayNameLength|integer(int32)|false|none|Limits for Field title.|
|maxIdLength|integer(int32)|false|none|Max length for the id.|
|selectionLimits|[GoogleAppsDriveLabelsV2betaSelectionLimits](#schemagoogleappsdrivelabelsv2betaselectionlimits)|false|none|Selection Field limits.|
|textLimits|[GoogleAppsDriveLabelsV2betaTextLimits](#schemagoogleappsdrivelabelsv2betatextlimits)|false|none|The relevant limits for the specified Field.Type. Text Field limits.|
|userLimits|[GoogleAppsDriveLabelsV2betaUserLimits](#schemagoogleappsdrivelabelsv2betauserlimits)|false|none|User Field limits.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldListOptions">GoogleAppsDriveLabelsV2betaFieldListOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldlistoptions"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldListOptions"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldlistoptions"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldlistoptions"></a>

```json
{
  "maxEntries": 0
}
```

Options for a multi-valued variant of an associated field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxEntries|integer(int32)|false|none|Maximum number of entries permitted.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldLongTextOptions">GoogleAppsDriveLabelsV2betaFieldLongTextOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldlongtextoptions"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldLongTextOptions"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldlongtextoptions"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldlongtextoptions"></a>

```json
{
  "maxLength": 0,
  "minLength": 0
}
```

Options the Long Text field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxLength|integer(int32)|false|read-only|Output only. The maximum valid length of values for the text field.|
|minLength|integer(int32)|false|read-only|Output only. The minimum valid length of values for the text field.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldProperties">GoogleAppsDriveLabelsV2betaFieldProperties</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldproperties"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldProperties"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldproperties"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldproperties"></a>

```json
{
  "displayName": "string",
  "insertBeforeField": "string",
  "required": true
}
```

The basic properties of the field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Required. The display text to show in the UI identifying this field.|
|insertBeforeField|string|false|none|Input only. Insert or move this field before the indicated field. If empty, the field is placed at the end of the list.|
|required|boolean|false|none|Whether the field should be marked as required.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities">GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldschemacapabilities"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldschemacapabilities"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldschemacapabilities"></a>

```json
{
  "canDelete": true,
  "canDisable": true,
  "canEnable": true,
  "canUpdate": true
}
```

The capabilities related to this field when editing the field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canDelete|boolean|false|none|Whether the user can delete this field. The user must have permission and the field must be deprecated.|
|canDisable|boolean|false|none|Whether the user can disable this field. The user must have permission and this field must not already be disabled.|
|canEnable|boolean|false|none|Whether the user can enable this field. The user must have permission and this field must be disabled.|
|canUpdate|boolean|false|none|Whether the user can change this field.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldSelectionOptions">GoogleAppsDriveLabelsV2betaFieldSelectionOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldselectionoptions"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldSelectionOptions"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldselectionoptions"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldselectionoptions"></a>

```json
{
  "choices": [
    {
      "appliedCapabilities": {
        "canRead": true,
        "canSearch": true,
        "canSelect": true
      },
      "createTime": "string",
      "creator": {
        "person": "string"
      },
      "disableTime": "string",
      "disabler": {
        "person": "string"
      },
      "displayHints": {
        "badgeColors": {
          "backgroundColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "foregroundColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "soloColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          }
        },
        "badgePriority": "string",
        "darkBadgeColors": {
          "backgroundColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "foregroundColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "soloColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          }
        },
        "disabled": true,
        "hiddenInSearch": true,
        "shownInApply": true
      },
      "id": "string",
      "lifecycle": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "hasUnpublishedChanges": true,
        "state": "STATE_UNSPECIFIED"
      },
      "lockStatus": {
        "locked": true
      },
      "properties": {
        "badgeConfig": {
          "color": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "priorityOverride": "string"
        },
        "description": "string",
        "displayName": "string",
        "insertBeforeChoice": "string"
      },
      "publishTime": "string",
      "publisher": {
        "person": "string"
      },
      "schemaCapabilities": {
        "canDelete": true,
        "canDisable": true,
        "canEnable": true,
        "canUpdate": true
      },
      "updateTime": "string",
      "updater": {
        "person": "string"
      }
    }
  ],
  "listOptions": {
    "maxEntries": 0
  }
}
```

Options for the selection field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|choices|[[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice](#schemagoogleappsdrivelabelsv2betafieldselectionoptionschoice)]|false|none|The options available for this selection field. The list order is consistent, and modified with `insert_before_choice`.|
|listOptions|[GoogleAppsDriveLabelsV2betaFieldListOptions](#schemagoogleappsdrivelabelsv2betafieldlistoptions)|false|none|When specified, indicates this field supports a list of values. Once the field is published, this cannot be changed.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice">GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldselectionoptionschoice"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldselectionoptionschoice"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldselectionoptionschoice"></a>

```json
{
  "appliedCapabilities": {
    "canRead": true,
    "canSearch": true,
    "canSelect": true
  },
  "createTime": "string",
  "creator": {
    "person": "string"
  },
  "disableTime": "string",
  "disabler": {
    "person": "string"
  },
  "displayHints": {
    "badgeColors": {
      "backgroundColor": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "foregroundColor": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "soloColor": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      }
    },
    "badgePriority": "string",
    "darkBadgeColors": {
      "backgroundColor": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "foregroundColor": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "soloColor": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      }
    },
    "disabled": true,
    "hiddenInSearch": true,
    "shownInApply": true
  },
  "id": "string",
  "lifecycle": {
    "disabledPolicy": {
      "hideInSearch": true,
      "showInApply": true
    },
    "hasUnpublishedChanges": true,
    "state": "STATE_UNSPECIFIED"
  },
  "lockStatus": {
    "locked": true
  },
  "properties": {
    "badgeConfig": {
      "color": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "priorityOverride": "string"
    },
    "description": "string",
    "displayName": "string",
    "insertBeforeChoice": "string"
  },
  "publishTime": "string",
  "publisher": {
    "person": "string"
  },
  "schemaCapabilities": {
    "canDelete": true,
    "canDisable": true,
    "canEnable": true,
    "canUpdate": true
  },
  "updateTime": "string",
  "updater": {
    "person": "string"
  }
}
```

Selection field choice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appliedCapabilities|[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities](#schemagoogleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities)|false|none|Output only. The capabilities related to this choice on applied metadata.|
|createTime|string(google-datetime)|false|read-only|Output only. The time this choice was created.|
|creator|[GoogleAppsDriveLabelsV2betaUserInfo](#schemagoogleappsdrivelabelsv2betauserinfo)|false|none|Output only. The user who created this choice.|
|disableTime|string(google-datetime)|false|read-only|Output only. The time this choice was disabled. This value has no meaning when the choice is not disabled.|
|disabler|[GoogleAppsDriveLabelsV2betaUserInfo](#schemagoogleappsdrivelabelsv2betauserinfo)|false|none|Output only. The user who disabled this choice. This value has no meaning when the option is not disabled.|
|displayHints|[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints](#schemagoogleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints)|false|none|Output only. UI display hints for rendering a choice.|
|id|string|false|none|The unique value of the choice. This ID is autogenerated. Matches the regex: `([a-zA-Z0-9_])+`.|
|lifecycle|[GoogleAppsDriveLabelsV2betaLifecycle](#schemagoogleappsdrivelabelsv2betalifecycle)|false|none|Output only. Lifecycle of the choice.|
|lockStatus|[GoogleAppsDriveLabelsV2betaLockStatus](#schemagoogleappsdrivelabelsv2betalockstatus)|false|none|Output only. The LockStatus of this choice.|
|properties|[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties](#schemagoogleappsdrivelabelsv2betafieldselectionoptionschoiceproperties)|false|none|Basic properties of the choice.|
|publishTime|string(google-datetime)|false|read-only|Output only. The time this choice was published. This value has no meaning when the choice is not published.|
|publisher|[GoogleAppsDriveLabelsV2betaUserInfo](#schemagoogleappsdrivelabelsv2betauserinfo)|false|none|Output only. The user who published this choice. This value has no meaning when the choice is not published.|
|schemaCapabilities|[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities](#schemagoogleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities)|false|none|Output only. The capabilities related to this option when editing the option.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time this choice was updated last.|
|updater|[GoogleAppsDriveLabelsV2betaUserInfo](#schemagoogleappsdrivelabelsv2betauserinfo)|false|none|Output only. The user who updated this choice last.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities">GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities"></a>

```json
{
  "canRead": true,
  "canSearch": true,
  "canSelect": true
}
```

The capabilities related to this choice on applied metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canRead|boolean|false|none|Whether the user can read related applied metadata on items.|
|canSearch|boolean|false|none|Whether the user can use this choice in search queries.|
|canSelect|boolean|false|none|Whether the user can select this choice on an item.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints">GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints"></a>

```json
{
  "badgeColors": {
    "backgroundColor": {
      "alpha": 0,
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "foregroundColor": {
      "alpha": 0,
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "soloColor": {
      "alpha": 0,
      "blue": 0,
      "green": 0,
      "red": 0
    }
  },
  "badgePriority": "string",
  "darkBadgeColors": {
    "backgroundColor": {
      "alpha": 0,
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "foregroundColor": {
      "alpha": 0,
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "soloColor": {
      "alpha": 0,
      "blue": 0,
      "green": 0,
      "red": 0
    }
  },
  "disabled": true,
  "hiddenInSearch": true,
  "shownInApply": true
}
```

UI display hints for rendering an option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badgeColors|[GoogleAppsDriveLabelsV2betaBadgeColors](#schemagoogleappsdrivelabelsv2betabadgecolors)|false|none|The colors to use for the badge. Changed to Google Material colors based on the chosen `properties.badge_config.color`.|
|badgePriority|string(int64)|false|none|The priority of this badge. Used to compare and sort between multiple badges. A lower number means the badge should be shown first. When a badging configuration is not present, this will be 0. Otherwise, this will be set to `BadgeConfig.priority_override` or the default heuristic which prefers creation date of the label, and field and option priority.|
|darkBadgeColors|[GoogleAppsDriveLabelsV2betaBadgeColors](#schemagoogleappsdrivelabelsv2betabadgecolors)|false|none|The dark-mode color to use for the badge. Changed to Google Material colors based on the chosen `properties.badge_config.color`.|
|disabled|boolean|false|none|Whether the option should be shown in the UI as disabled.|
|hiddenInSearch|boolean|false|none|This option should be hidden in the search menu when searching for Drive items.|
|shownInApply|boolean|false|none|This option should be shown in the apply menu when applying values to a Drive item.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties">GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldselectionoptionschoiceproperties"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldselectionoptionschoiceproperties"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldselectionoptionschoiceproperties"></a>

```json
{
  "badgeConfig": {
    "color": {
      "alpha": 0,
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "priorityOverride": "string"
  },
  "description": "string",
  "displayName": "string",
  "insertBeforeChoice": "string"
}
```

Basic properties of the choice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badgeConfig|[GoogleAppsDriveLabelsV2betaBadgeConfig](#schemagoogleappsdrivelabelsv2betabadgeconfig)|false|none|The badge configuration for this choice. When set, the label that owns this choice is considered a "badged label".|
|description|string|false|none|The description of this label.|
|displayName|string|false|none|Required. The display text to show in the UI identifying this field.|
|insertBeforeChoice|string|false|none|Input only. Insert or move this choice before the indicated choice. If empty, the choice is placed at the end of the list.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities">GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities"></a>

```json
{
  "canDelete": true,
  "canDisable": true,
  "canEnable": true,
  "canUpdate": true
}
```

The capabilities related to this choice when editing the choice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canDelete|boolean|false|none|Whether the user can delete this choice.|
|canDisable|boolean|false|none|Whether the user can disable this choice.|
|canEnable|boolean|false|none|Whether the user can enable this choice.|
|canUpdate|boolean|false|none|Whether the user can update this choice.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldTextOptions">GoogleAppsDriveLabelsV2betaFieldTextOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafieldtextoptions"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldTextOptions"></a>
<a id="tocSgoogleappsdrivelabelsv2betafieldtextoptions"></a>
<a id="tocsgoogleappsdrivelabelsv2betafieldtextoptions"></a>

```json
{
  "maxLength": 0,
  "minLength": 0
}
```

Options for the Text field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxLength|integer(int32)|false|read-only|Output only. The maximum valid length of values for the text field.|
|minLength|integer(int32)|false|read-only|Output only. The minimum valid length of values for the text field.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaFieldUserOptions">GoogleAppsDriveLabelsV2betaFieldUserOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betafielduseroptions"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaFieldUserOptions"></a>
<a id="tocSgoogleappsdrivelabelsv2betafielduseroptions"></a>
<a id="tocsgoogleappsdrivelabelsv2betafielduseroptions"></a>

```json
{
  "listOptions": {
    "maxEntries": 0
  }
}
```

Options for the user field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listOptions|[GoogleAppsDriveLabelsV2betaFieldListOptions](#schemagoogleappsdrivelabelsv2betafieldlistoptions)|false|none|When specified, indicates that this field supports a list of values. Once the field is published, this cannot be changed.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaIntegerLimits">GoogleAppsDriveLabelsV2betaIntegerLimits</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betaintegerlimits"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaIntegerLimits"></a>
<a id="tocSgoogleappsdrivelabelsv2betaintegerlimits"></a>
<a id="tocsgoogleappsdrivelabelsv2betaintegerlimits"></a>

```json
{
  "maxValue": "string",
  "minValue": "string"
}
```

Limits for integer Field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxValue|string(int64)|false|none|Maximum value for an integer Field type.|
|minValue|string(int64)|false|none|Minimum value for an integer Field type.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLabel">GoogleAppsDriveLabelsV2betaLabel</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalabel"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLabel"></a>
<a id="tocSgoogleappsdrivelabelsv2betalabel"></a>
<a id="tocsgoogleappsdrivelabelsv2betalabel"></a>

```json
{
  "appliedCapabilities": {
    "canApply": true,
    "canRead": true,
    "canRemove": true
  },
  "appliedLabelPolicy": {
    "copyMode": "COPY_MODE_UNSPECIFIED"
  },
  "createTime": "string",
  "creator": {
    "person": "string"
  },
  "customer": "string",
  "disableTime": "string",
  "disabler": {
    "person": "string"
  },
  "displayHints": {
    "disabled": true,
    "hiddenInSearch": true,
    "priority": "string",
    "shownInApply": true
  },
  "fields": [
    {
      "appliedCapabilities": {
        "canRead": true,
        "canSearch": true,
        "canWrite": true
      },
      "createTime": "string",
      "creator": {
        "person": "string"
      },
      "dateOptions": {
        "dateFormat": "string",
        "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
        "maxValue": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "minValue": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      },
      "disableTime": "string",
      "disabler": {
        "person": "string"
      },
      "displayHints": {
        "disabled": true,
        "hiddenInSearch": true,
        "required": true,
        "shownInApply": true
      },
      "id": "string",
      "integerOptions": {
        "maxValue": "string",
        "minValue": "string"
      },
      "lifecycle": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "hasUnpublishedChanges": true,
        "state": "STATE_UNSPECIFIED"
      },
      "lockStatus": {
        "locked": true
      },
      "properties": {
        "displayName": "string",
        "insertBeforeField": "string",
        "required": true
      },
      "publisher": {
        "person": "string"
      },
      "queryKey": "string",
      "schemaCapabilities": {
        "canDelete": true,
        "canDisable": true,
        "canEnable": true,
        "canUpdate": true
      },
      "selectionOptions": {
        "choices": [
          {
            "appliedCapabilities": {
              "canRead": true,
              "canSearch": true,
              "canSelect": true
            },
            "createTime": "string",
            "creator": {
              "person": "string"
            },
            "disableTime": "string",
            "disabler": {
              "person": "string"
            },
            "displayHints": {
              "badgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "badgePriority": "string",
              "darkBadgeColors": {
                "backgroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "foregroundColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "soloColor": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                }
              },
              "disabled": true,
              "hiddenInSearch": true,
              "shownInApply": true
            },
            "id": "string",
            "lifecycle": {
              "disabledPolicy": {
                "hideInSearch": true,
                "showInApply": true
              },
              "hasUnpublishedChanges": true,
              "state": "STATE_UNSPECIFIED"
            },
            "lockStatus": {
              "locked": true
            },
            "properties": {
              "badgeConfig": {
                "color": {
                  "alpha": 0,
                  "blue": 0,
                  "green": 0,
                  "red": 0
                },
                "priorityOverride": "string"
              },
              "description": "string",
              "displayName": "string",
              "insertBeforeChoice": "string"
            },
            "publishTime": "string",
            "publisher": {
              "person": "string"
            },
            "schemaCapabilities": {
              "canDelete": true,
              "canDisable": true,
              "canEnable": true,
              "canUpdate": true
            },
            "updateTime": "string",
            "updater": {
              "person": "string"
            }
          }
        ],
        "listOptions": {
          "maxEntries": 0
        }
      },
      "textOptions": {
        "maxLength": 0,
        "minLength": 0
      },
      "updateTime": "string",
      "updater": {
        "person": "string"
      },
      "userOptions": {
        "listOptions": {
          "maxEntries": 0
        }
      }
    }
  ],
  "id": "string",
  "labelType": "LABEL_TYPE_UNSPECIFIED",
  "learnMoreUri": "string",
  "lifecycle": {
    "disabledPolicy": {
      "hideInSearch": true,
      "showInApply": true
    },
    "hasUnpublishedChanges": true,
    "state": "STATE_UNSPECIFIED"
  },
  "lockStatus": {
    "locked": true
  },
  "name": "string",
  "properties": {
    "description": "string",
    "title": "string"
  },
  "publishTime": "string",
  "publisher": {
    "person": "string"
  },
  "revisionCreateTime": "string",
  "revisionCreator": {
    "person": "string"
  },
  "revisionId": "string",
  "schemaCapabilities": {
    "canDelete": true,
    "canDisable": true,
    "canEnable": true,
    "canUpdate": true
  }
}
```

A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appliedCapabilities|[GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities](#schemagoogleappsdrivelabelsv2betalabelappliedcapabilities)|false|none|Output only. The capabilities related to this label on applied metadata.|
|appliedLabelPolicy|[GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy](#schemagoogleappsdrivelabelsv2betalabelappliedlabelpolicy)|false|none|Output only. Behavior of this label when it's applied to Drive items.|
|createTime|string(google-datetime)|false|read-only|Output only. The time this label was created.|
|creator|[GoogleAppsDriveLabelsV2betaUserInfo](#schemagoogleappsdrivelabelsv2betauserinfo)|false|none|Output only. The user who created this label.|
|customer|string|false|read-only|Output only. The customer this label belongs to. For example: "customers/123abc789."|
|disableTime|string(google-datetime)|false|read-only|Output only. The time this label was disabled. This value has no meaning when the label is not disabled.|
|disabler|[GoogleAppsDriveLabelsV2betaUserInfo](#schemagoogleappsdrivelabelsv2betauserinfo)|false|none|Output only. The user who disabled this label. This value has no meaning when the label is not disabled.|
|displayHints|[GoogleAppsDriveLabelsV2betaLabelDisplayHints](#schemagoogleappsdrivelabelsv2betalabeldisplayhints)|false|none|Output only. UI display hints for rendering the label.|
|fields|[[GoogleAppsDriveLabelsV2betaField](#schemagoogleappsdrivelabelsv2betafield)]|false|none|List of fields in descending priority order.|
|id|string|false|read-only|Output only. Globally unique identifier of this label. ID makes up part of the label `name`, but unlike `name`, ID is consistent between revisions. Matches the regex: `([a-zA-Z0-9])+`|
|labelType|string|false|none|Required. The type of label.|
|learnMoreUri|string|false|none|Custom URL to present to users to allow them to learn more about this label and how it should be used.|
|lifecycle|[GoogleAppsDriveLabelsV2betaLifecycle](#schemagoogleappsdrivelabelsv2betalifecycle)|false|none|Output only. The lifecycle state of the label including whether it's published, deprecated, and has draft changes.|
|lockStatus|[GoogleAppsDriveLabelsV2betaLockStatus](#schemagoogleappsdrivelabelsv2betalockstatus)|false|none|Output only. The LockStatus of this label.|
|name|string|false|read-only|Output only. Resource name of the label. Will be in the form of either: `labels/{id}` or `labels/{id}@{revision_id}` depending on the request. See `id` and `revision_id` below.|
|properties|[GoogleAppsDriveLabelsV2betaLabelProperties](#schemagoogleappsdrivelabelsv2betalabelproperties)|false|none|Required. The basic properties of the label.|
|publishTime|string(google-datetime)|false|read-only|Output only. The time this label was published. This value has no meaning when the label is not published.|
|publisher|[GoogleAppsDriveLabelsV2betaUserInfo](#schemagoogleappsdrivelabelsv2betauserinfo)|false|none|Output only. The user who published this label. This value has no meaning when the label is not published.|
|revisionCreateTime|string(google-datetime)|false|read-only|Output only. The time this label revision was created.|
|revisionCreator|[GoogleAppsDriveLabelsV2betaUserInfo](#schemagoogleappsdrivelabelsv2betauserinfo)|false|none|Output only. The user who created this label revision.|
|revisionId|string|false|read-only|Output only. Revision ID of the label. Revision ID might be part of the label `name` depending on the request issued. A new revision is created whenever revisioned properties of a label are changed. Matches the regex: `([a-zA-Z0-9])+`|
|schemaCapabilities|[GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities](#schemagoogleappsdrivelabelsv2betalabelschemacapabilities)|false|none|Output only. The capabilities the user has on this label.|

#### Enumerated Values

|Property|Value|
|---|---|
|labelType|LABEL_TYPE_UNSPECIFIED|
|labelType|SHARED|
|labelType|ADMIN|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities">GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalabelappliedcapabilities"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities"></a>
<a id="tocSgoogleappsdrivelabelsv2betalabelappliedcapabilities"></a>
<a id="tocsgoogleappsdrivelabelsv2betalabelappliedcapabilities"></a>

```json
{
  "canApply": true,
  "canRead": true,
  "canRemove": true
}
```

The capabilities a user has on this label's applied metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canApply|boolean|false|none|Whether the user can apply this label to items.|
|canRead|boolean|false|none|Whether the user can read applied metadata related to this label.|
|canRemove|boolean|false|none|Whether the user can remove this label from items.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy">GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalabelappliedlabelpolicy"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy"></a>
<a id="tocSgoogleappsdrivelabelsv2betalabelappliedlabelpolicy"></a>
<a id="tocsgoogleappsdrivelabelsv2betalabelappliedlabelpolicy"></a>

```json
{
  "copyMode": "COPY_MODE_UNSPECIFIED"
}
```

Behavior of this label when it's applied to Drive items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyMode|string|false|none|Indicates how the applied label and field values should be copied when a Drive item is copied.|

#### Enumerated Values

|Property|Value|
|---|---|
|copyMode|COPY_MODE_UNSPECIFIED|
|copyMode|DO_NOT_COPY|
|copyMode|ALWAYS_COPY|
|copyMode|COPY_APPLIABLE|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLabelDisplayHints">GoogleAppsDriveLabelsV2betaLabelDisplayHints</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalabeldisplayhints"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLabelDisplayHints"></a>
<a id="tocSgoogleappsdrivelabelsv2betalabeldisplayhints"></a>
<a id="tocsgoogleappsdrivelabelsv2betalabeldisplayhints"></a>

```json
{
  "disabled": true,
  "hiddenInSearch": true,
  "priority": "string",
  "shownInApply": true
}
```

UI display hints for rendering the label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|Whether the label should be shown in the UI as disabled.|
|hiddenInSearch|boolean|false|none|This label should be hidden in the search menu when searching for Drive items.|
|priority|string(int64)|false|none|Order to display label in a list.|
|shownInApply|boolean|false|none|This label should be shown in the apply menu when applying values to a Drive item.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLabelLimits">GoogleAppsDriveLabelsV2betaLabelLimits</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalabellimits"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLabelLimits"></a>
<a id="tocSgoogleappsdrivelabelsv2betalabellimits"></a>
<a id="tocsgoogleappsdrivelabelsv2betalabellimits"></a>

```json
{
  "fieldLimits": {
    "dateLimits": {
      "maxValue": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "minValue": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "integerLimits": {
      "maxValue": "string",
      "minValue": "string"
    },
    "longTextLimits": {
      "maxLength": 0,
      "minLength": 0
    },
    "maxDescriptionLength": 0,
    "maxDisplayNameLength": 0,
    "maxIdLength": 0,
    "selectionLimits": {
      "listLimits": {
        "maxEntries": 0
      },
      "maxChoices": 0,
      "maxDeletedChoices": 0,
      "maxDisplayNameLength": 0,
      "maxIdLength": 0
    },
    "textLimits": {
      "maxLength": 0,
      "minLength": 0
    },
    "userLimits": {
      "listLimits": {
        "maxEntries": 0
      }
    }
  },
  "maxDeletedFields": 0,
  "maxDescriptionLength": 0,
  "maxDraftRevisions": 0,
  "maxFields": 0,
  "maxTitleLength": 0,
  "name": "string"
}
```

Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldLimits|[GoogleAppsDriveLabelsV2betaFieldLimits](#schemagoogleappsdrivelabelsv2betafieldlimits)|false|none|The limits for Fields.|
|maxDeletedFields|integer(int32)|false|none|The maximum number of published Fields that can be deleted.|
|maxDescriptionLength|integer(int32)|false|none|The maximum number of characters allowed for the description.|
|maxDraftRevisions|integer(int32)|false|none|The maximum number of draft revisions that will be kept before deleting old drafts.|
|maxFields|integer(int32)|false|none|The maximum number of Fields allowed within the label.|
|maxTitleLength|integer(int32)|false|none|The maximum number of characters allowed for the title.|
|name|string|false|none|Resource name.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLabelLock">GoogleAppsDriveLabelsV2betaLabelLock</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalabellock"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLabelLock"></a>
<a id="tocSgoogleappsdrivelabelsv2betalabellock"></a>
<a id="tocsgoogleappsdrivelabelsv2betalabellock"></a>

```json
{
  "capabilities": {
    "canViewPolicy": true
  },
  "choiceId": "string",
  "createTime": "string",
  "creator": {
    "person": "string"
  },
  "deleteTime": "string",
  "fieldId": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

A Lock that can be applied to a Label, Field, or Choice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[GoogleAppsDriveLabelsV2betaLabelLockCapabilities](#schemagoogleappsdrivelabelsv2betalabellockcapabilities)|false|none|Output only. The user's capabilities on this LabelLock.|
|choiceId|string|false|none|The ID of the Selection Field Choice that should be locked. If present, `field_id` must also be present.|
|createTime|string(google-datetime)|false|read-only|Output only. The time this LabelLock was created.|
|creator|[GoogleAppsDriveLabelsV2betaUserInfo](#schemagoogleappsdrivelabelsv2betauserinfo)|false|none|Output only. The user whose credentials were used to create the LabelLock. This will not be present if no user was responsible for creating the LabelLock.|
|deleteTime|string(google-datetime)|false|read-only|Output only. A timestamp indicating when this LabelLock was scheduled for deletion. This will be present only if this LabelLock is in the DELETING state.|
|fieldId|string|false|none|The ID of the Field that should be locked. Empty if the whole Label should be locked.|
|name|string|false|read-only|Output only. Resource name of this LabelLock.|
|state|string|false|read-only|Output only. This LabelLock's state.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|DELETING|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLabelLockCapabilities">GoogleAppsDriveLabelsV2betaLabelLockCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalabellockcapabilities"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLabelLockCapabilities"></a>
<a id="tocSgoogleappsdrivelabelsv2betalabellockcapabilities"></a>
<a id="tocsgoogleappsdrivelabelsv2betalabellockcapabilities"></a>

```json
{
  "canViewPolicy": true
}
```

A description of a user's capabilities on a LabelLock.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canViewPolicy|boolean|false|none|True if the user is authorized to view the policy.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLabelPermission">GoogleAppsDriveLabelsV2betaLabelPermission</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalabelpermission"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLabelPermission"></a>
<a id="tocSgoogleappsdrivelabelsv2betalabelpermission"></a>
<a id="tocsgoogleappsdrivelabelsv2betalabelpermission"></a>

```json
{
  "audience": "string",
  "email": "string",
  "group": "string",
  "name": "string",
  "person": "string",
  "role": "LABEL_ROLE_UNSPECIFIED"
}
```

The permission that applies to a principal (user, group, audience) on a label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|string|false|none|Audience to grant a role to. The magic value of `audiences/default` may be used to apply the role to the default audience in the context of the organization that owns the Label.|
|email|string|false|none|Specifies the email address for a user or group pricinpal. Not populated for audience principals. User and Group permissions may only be inserted using email address. On update requests, if email address is specified, no principal should be specified.|
|group|string|false|none|Group resource name.|
|name|string|false|none|Resource name of this permission.|
|person|string|false|none|Person resource name.|
|role|string|false|none|The role the principal should have.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|LABEL_ROLE_UNSPECIFIED|
|role|READER|
|role|APPLIER|
|role|ORGANIZER|
|role|EDITOR|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLabelProperties">GoogleAppsDriveLabelsV2betaLabelProperties</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalabelproperties"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLabelProperties"></a>
<a id="tocSgoogleappsdrivelabelsv2betalabelproperties"></a>
<a id="tocsgoogleappsdrivelabelsv2betalabelproperties"></a>

```json
{
  "description": "string",
  "title": "string"
}
```

Basic properties of the label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the label.|
|title|string|false|none|Required. Title of the label.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities">GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalabelschemacapabilities"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities"></a>
<a id="tocSgoogleappsdrivelabelsv2betalabelschemacapabilities"></a>
<a id="tocsgoogleappsdrivelabelsv2betalabelschemacapabilities"></a>

```json
{
  "canDelete": true,
  "canDisable": true,
  "canEnable": true,
  "canUpdate": true
}
```

The capabilities related to this label when editing the label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canDelete|boolean|false|none|Whether the user can delete this label. The user must have permission and the label must be disabled.|
|canDisable|boolean|false|none|Whether the user can disable this label. The user must have permission and this label must not already be disabled.|
|canEnable|boolean|false|none|Whether the user can enable this label. The user must have permission and this label must be disabled.|
|canUpdate|boolean|false|none|Whether the user can change this label.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLifecycle">GoogleAppsDriveLabelsV2betaLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalifecycle"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLifecycle"></a>
<a id="tocSgoogleappsdrivelabelsv2betalifecycle"></a>
<a id="tocsgoogleappsdrivelabelsv2betalifecycle"></a>

```json
{
  "disabledPolicy": {
    "hideInSearch": true,
    "showInApply": true
  },
  "hasUnpublishedChanges": true,
  "state": "STATE_UNSPECIFIED"
}
```

The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabledPolicy|[GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy](#schemagoogleappsdrivelabelsv2betalifecycledisabledpolicy)|false|none|The policy that governs how to show a disabled label, field, or selection choice.|
|hasUnpublishedChanges|boolean|false|read-only|Output only. Whether the object associated with this lifecycle has unpublished changes.|
|state|string|false|read-only|Output only. The state of the object associated with this lifecycle.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|UNPUBLISHED_DRAFT|
|state|PUBLISHED|
|state|DISABLED|
|state|DELETED|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy">GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalifecycledisabledpolicy"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy"></a>
<a id="tocSgoogleappsdrivelabelsv2betalifecycledisabledpolicy"></a>
<a id="tocsgoogleappsdrivelabelsv2betalifecycledisabledpolicy"></a>

```json
{
  "hideInSearch": true,
  "showInApply": true
}
```

The policy that governs how to treat a disabled label, field, or selection choice in different contexts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hideInSearch|boolean|false|none|Whether to hide this disabled object in the search menu for Drive items. * When `false`, the object is generally shown in the UI as disabled but it appears in the search results when searching for Drive items. * When `true`, the object is generally hidden in the UI when searching for Drive items.|
|showInApply|boolean|false|none|Whether to show this disabled object in the apply menu on Drive items. * When `true`, the object is generally shown in the UI as disabled and is unselectable. * When `false`, the object is generally hidden in the UI.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaListLabelLocksResponse">GoogleAppsDriveLabelsV2betaListLabelLocksResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalistlabellocksresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaListLabelLocksResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betalistlabellocksresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betalistlabellocksresponse"></a>

```json
{
  "labelLocks": [
    {
      "capabilities": {
        "canViewPolicy": true
      },
      "choiceId": "string",
      "createTime": "string",
      "creator": {
        "person": "string"
      },
      "deleteTime": "string",
      "fieldId": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

The response to a ListLabelLocksRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelLocks|[[GoogleAppsDriveLabelsV2betaLabelLock](#schemagoogleappsdrivelabelsv2betalabellock)]|false|none|LabelLocks.|
|nextPageToken|string|false|none|The token of the next page in the response.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse">GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalistlabelpermissionsresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betalistlabelpermissionsresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betalistlabelpermissionsresponse"></a>

```json
{
  "labelPermissions": [
    {
      "audience": "string",
      "email": "string",
      "group": "string",
      "name": "string",
      "person": "string",
      "role": "LABEL_ROLE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response for listing the permissions on a Label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelPermissions|[[GoogleAppsDriveLabelsV2betaLabelPermission](#schemagoogleappsdrivelabelsv2betalabelpermission)]|false|none|Label permissions.|
|nextPageToken|string|false|none|The token of the next page in the response.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaListLabelsResponse">GoogleAppsDriveLabelsV2betaListLabelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalistlabelsresponse"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaListLabelsResponse"></a>
<a id="tocSgoogleappsdrivelabelsv2betalistlabelsresponse"></a>
<a id="tocsgoogleappsdrivelabelsv2betalistlabelsresponse"></a>

```json
{
  "labels": [
    {
      "appliedCapabilities": {
        "canApply": true,
        "canRead": true,
        "canRemove": true
      },
      "appliedLabelPolicy": {
        "copyMode": "COPY_MODE_UNSPECIFIED"
      },
      "createTime": "string",
      "creator": {
        "person": "string"
      },
      "customer": "string",
      "disableTime": "string",
      "disabler": {
        "person": "string"
      },
      "displayHints": {
        "disabled": true,
        "hiddenInSearch": true,
        "priority": "string",
        "shownInApply": true
      },
      "fields": [
        {
          "appliedCapabilities": {
            "canRead": true,
            "canSearch": true,
            "canWrite": true
          },
          "createTime": "string",
          "creator": {
            "person": "string"
          },
          "dateOptions": {
            "dateFormat": "string",
            "dateFormatType": "DATE_FORMAT_UNSPECIFIED",
            "maxValue": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "minValue": {
              "day": 0,
              "month": 0,
              "year": 0
            }
          },
          "disableTime": "string",
          "disabler": {
            "person": "string"
          },
          "displayHints": {
            "disabled": true,
            "hiddenInSearch": true,
            "required": true,
            "shownInApply": true
          },
          "id": "string",
          "integerOptions": {
            "maxValue": "string",
            "minValue": "string"
          },
          "lifecycle": {
            "disabledPolicy": {
              "hideInSearch": true,
              "showInApply": true
            },
            "hasUnpublishedChanges": true,
            "state": "STATE_UNSPECIFIED"
          },
          "lockStatus": {
            "locked": true
          },
          "properties": {
            "displayName": "string",
            "insertBeforeField": "string",
            "required": true
          },
          "publisher": {
            "person": "string"
          },
          "queryKey": "string",
          "schemaCapabilities": {
            "canDelete": true,
            "canDisable": true,
            "canEnable": true,
            "canUpdate": true
          },
          "selectionOptions": {
            "choices": [
              {
                "appliedCapabilities": {
                  "canRead": true,
                  "canSearch": true,
                  "canSelect": true
                },
                "createTime": "string",
                "creator": {
                  "person": "string"
                },
                "disableTime": "string",
                "disabler": {
                  "person": "string"
                },
                "displayHints": {
                  "badgeColors": {
                    "backgroundColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "foregroundColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "soloColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    }
                  },
                  "badgePriority": "string",
                  "darkBadgeColors": {
                    "backgroundColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "foregroundColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "soloColor": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    }
                  },
                  "disabled": true,
                  "hiddenInSearch": true,
                  "shownInApply": true
                },
                "id": "string",
                "lifecycle": {
                  "disabledPolicy": {
                    "hideInSearch": true,
                    "showInApply": true
                  },
                  "hasUnpublishedChanges": true,
                  "state": "STATE_UNSPECIFIED"
                },
                "lockStatus": {
                  "locked": true
                },
                "properties": {
                  "badgeConfig": {
                    "color": {
                      "alpha": 0,
                      "blue": 0,
                      "green": 0,
                      "red": 0
                    },
                    "priorityOverride": "string"
                  },
                  "description": "string",
                  "displayName": "string",
                  "insertBeforeChoice": "string"
                },
                "publishTime": "string",
                "publisher": {
                  "person": "string"
                },
                "schemaCapabilities": {
                  "canDelete": true,
                  "canDisable": true,
                  "canEnable": true,
                  "canUpdate": true
                },
                "updateTime": "string",
                "updater": {
                  "person": "string"
                }
              }
            ],
            "listOptions": {
              "maxEntries": 0
            }
          },
          "textOptions": {
            "maxLength": 0,
            "minLength": 0
          },
          "updateTime": "string",
          "updater": {
            "person": "string"
          },
          "userOptions": {
            "listOptions": {
              "maxEntries": 0
            }
          }
        }
      ],
      "id": "string",
      "labelType": "LABEL_TYPE_UNSPECIFIED",
      "learnMoreUri": "string",
      "lifecycle": {
        "disabledPolicy": {
          "hideInSearch": true,
          "showInApply": true
        },
        "hasUnpublishedChanges": true,
        "state": "STATE_UNSPECIFIED"
      },
      "lockStatus": {
        "locked": true
      },
      "name": "string",
      "properties": {
        "description": "string",
        "title": "string"
      },
      "publishTime": "string",
      "publisher": {
        "person": "string"
      },
      "revisionCreateTime": "string",
      "revisionCreator": {
        "person": "string"
      },
      "revisionId": "string",
      "schemaCapabilities": {
        "canDelete": true,
        "canDisable": true,
        "canEnable": true,
        "canUpdate": true
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response for listing Labels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[[GoogleAppsDriveLabelsV2betaLabel](#schemagoogleappsdrivelabelsv2betalabel)]|false|none|Labels.|
|nextPageToken|string|false|none|The token of the next page in the response.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaListLimits">GoogleAppsDriveLabelsV2betaListLimits</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalistlimits"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaListLimits"></a>
<a id="tocSgoogleappsdrivelabelsv2betalistlimits"></a>
<a id="tocsgoogleappsdrivelabelsv2betalistlimits"></a>

```json
{
  "maxEntries": 0
}
```

Limits for list-variant of a Field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxEntries|integer(int32)|false|none|Maximum number of values allowed for the Field type.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLockStatus">GoogleAppsDriveLabelsV2betaLockStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalockstatus"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLockStatus"></a>
<a id="tocSgoogleappsdrivelabelsv2betalockstatus"></a>
<a id="tocsgoogleappsdrivelabelsv2betalockstatus"></a>

```json
{
  "locked": true
}
```

Contains information about whether a label component should be considered locked.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locked|boolean|false|read-only|Output only. Indicates whether this label component is the (direct) target of a LabelLock. A label component can be implicitly locked even if it's not the direct target of a LabelLock, in which case this field is set to false.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaLongTextLimits">GoogleAppsDriveLabelsV2betaLongTextLimits</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betalongtextlimits"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaLongTextLimits"></a>
<a id="tocSgoogleappsdrivelabelsv2betalongtextlimits"></a>
<a id="tocsgoogleappsdrivelabelsv2betalongtextlimits"></a>

```json
{
  "maxLength": 0,
  "minLength": 0
}
```

Limits for long text Field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxLength|integer(int32)|false|none|Maximum length allowed for a long text Field type.|
|minLength|integer(int32)|false|none|Minimum length allowed for a long text Field type.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaPublishLabelRequest">GoogleAppsDriveLabelsV2betaPublishLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betapublishlabelrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaPublishLabelRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betapublishlabelrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betapublishlabelrequest"></a>

```json
{
  "languageCode": "string",
  "useAdminAccess": true,
  "writeControl": {
    "requiredRevisionId": "string"
  }
}
```

Request to publish a label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.|
|useAdminAccess|boolean|false|none|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
|writeControl|[GoogleAppsDriveLabelsV2betaWriteControl](#schemagoogleappsdrivelabelsv2betawritecontrol)|false|none|Provides control over how write requests are executed. Defaults to unset, which means last write wins.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaSelectionLimits">GoogleAppsDriveLabelsV2betaSelectionLimits</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betaselectionlimits"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaSelectionLimits"></a>
<a id="tocSgoogleappsdrivelabelsv2betaselectionlimits"></a>
<a id="tocsgoogleappsdrivelabelsv2betaselectionlimits"></a>

```json
{
  "listLimits": {
    "maxEntries": 0
  },
  "maxChoices": 0,
  "maxDeletedChoices": 0,
  "maxDisplayNameLength": 0,
  "maxIdLength": 0
}
```

Limits for selection Field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listLimits|[GoogleAppsDriveLabelsV2betaListLimits](#schemagoogleappsdrivelabelsv2betalistlimits)|false|none|Limits for list-variant of a Field type.|
|maxChoices|integer(int32)|false|none|The max number of choices.|
|maxDeletedChoices|integer(int32)|false|none|Maximum number of deleted choices.|
|maxDisplayNameLength|integer(int32)|false|none|Maximum length for display name.|
|maxIdLength|integer(int32)|false|none|Maximum ID length for a selection options.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaTextLimits">GoogleAppsDriveLabelsV2betaTextLimits</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betatextlimits"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaTextLimits"></a>
<a id="tocSgoogleappsdrivelabelsv2betatextlimits"></a>
<a id="tocsgoogleappsdrivelabelsv2betatextlimits"></a>

```json
{
  "maxLength": 0,
  "minLength": 0
}
```

Limits for text Field type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxLength|integer(int32)|false|none|Maximum length allowed for a text Field type.|
|minLength|integer(int32)|false|none|Minimum length allowed for a text Field type.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest">GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betaupdatelabelcopymoderequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betaupdatelabelcopymoderequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betaupdatelabelcopymoderequest"></a>

```json
{
  "copyMode": "COPY_MODE_UNSPECIFIED",
  "languageCode": "string",
  "useAdminAccess": true,
  "view": "LABEL_VIEW_BASIC"
}
```

Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyMode|string|false|none|Required. Indicates how the applied Label, and Field values should be copied when a Drive item is copied.|
|languageCode|string|false|none|The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.|
|useAdminAccess|boolean|false|none|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|
|view|string|false|none|When specified, only certain fields belonging to the indicated view will be returned.|

#### Enumerated Values

|Property|Value|
|---|---|
|copyMode|COPY_MODE_UNSPECIFIED|
|copyMode|DO_NOT_COPY|
|copyMode|ALWAYS_COPY|
|copyMode|COPY_APPLIABLE|
|view|LABEL_VIEW_BASIC|
|view|LABEL_VIEW_FULL|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest">GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betaupdatelabelpermissionrequest"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest"></a>
<a id="tocSgoogleappsdrivelabelsv2betaupdatelabelpermissionrequest"></a>
<a id="tocsgoogleappsdrivelabelsv2betaupdatelabelpermissionrequest"></a>

```json
{
  "labelPermission": {
    "audience": "string",
    "email": "string",
    "group": "string",
    "name": "string",
    "person": "string",
    "role": "LABEL_ROLE_UNSPECIFIED"
  },
  "parent": "string",
  "useAdminAccess": true
}
```

Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelPermission|[GoogleAppsDriveLabelsV2betaLabelPermission](#schemagoogleappsdrivelabelsv2betalabelpermission)|false|none|Required. The permission to create or update on the Label.|
|parent|string|false|none|Required. The parent Label resource name.|
|useAdminAccess|boolean|false|none|Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaUserCapabilities">GoogleAppsDriveLabelsV2betaUserCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betausercapabilities"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaUserCapabilities"></a>
<a id="tocSgoogleappsdrivelabelsv2betausercapabilities"></a>
<a id="tocsgoogleappsdrivelabelsv2betausercapabilities"></a>

```json
{
  "canAccessLabelManager": true,
  "canAdministrateLabels": true,
  "canCreateAdminLabels": true,
  "canCreateSharedLabels": true,
  "name": "string"
}
```

The capabilities of a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canAccessLabelManager|boolean|false|read-only|Output only. Whether the user is allowed access to the label manager.|
|canAdministrateLabels|boolean|false|read-only|Output only. Whether the user is an administrator for the shared labels feature.|
|canCreateAdminLabels|boolean|false|read-only|Output only. Whether the user is allowed to create new admin labels.|
|canCreateSharedLabels|boolean|false|read-only|Output only. Whether the user is allowed to create new shared labels.|
|name|string|false|read-only|Output only. Resource name for the user capabilities.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaUserInfo">GoogleAppsDriveLabelsV2betaUserInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betauserinfo"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaUserInfo"></a>
<a id="tocSgoogleappsdrivelabelsv2betauserinfo"></a>
<a id="tocsgoogleappsdrivelabelsv2betauserinfo"></a>

```json
{
  "person": "string"
}
```

Information about a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|person|string|false|none|The identifier for this user that can be used with the People API to get more information. For example, people/12345678.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaUserLimits">GoogleAppsDriveLabelsV2betaUserLimits</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betauserlimits"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaUserLimits"></a>
<a id="tocSgoogleappsdrivelabelsv2betauserlimits"></a>
<a id="tocsgoogleappsdrivelabelsv2betauserlimits"></a>

```json
{
  "listLimits": {
    "maxEntries": 0
  }
}
```

Limits for Field.Type.USER.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listLimits|[GoogleAppsDriveLabelsV2betaListLimits](#schemagoogleappsdrivelabelsv2betalistlimits)|false|none|Limits for list-variant of a Field type.|

<h2 id="tocS_GoogleAppsDriveLabelsV2betaWriteControl">GoogleAppsDriveLabelsV2betaWriteControl</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsdrivelabelsv2betawritecontrol"></a>
<a id="schema_GoogleAppsDriveLabelsV2betaWriteControl"></a>
<a id="tocSgoogleappsdrivelabelsv2betawritecontrol"></a>
<a id="tocsgoogleappsdrivelabelsv2betawritecontrol"></a>

```json
{
  "requiredRevisionId": "string"
}
```

Provides control over how write requests are executed. When not specified, the last write wins.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requiredRevisionId|string|false|none|The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error.|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GoogleTypeColor">GoogleTypeColor</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypecolor"></a>
<a id="schema_GoogleTypeColor"></a>
<a id="tocSgoogletypecolor"></a>
<a id="tocsgoogletypecolor"></a>

```json
{
  "alpha": 0,
  "blue": 0,
  "green": 0,
  "red": 0
}
```

Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alpha|number(float)|false|none|The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).|
|blue|number(float)|false|none|The amount of blue in the color as a value in the interval [0, 1].|
|green|number(float)|false|none|The amount of green in the color as a value in the interval [0, 1].|
|red|number(float)|false|none|The amount of red in the color as a value in the interval [0, 1].|

<h2 id="tocS_GoogleTypeDate">GoogleTypeDate</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypedate"></a>
<a id="schema_GoogleTypeDate"></a>
<a id="tocSgoogletypedate"></a>
<a id="tocsgoogletypedate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
