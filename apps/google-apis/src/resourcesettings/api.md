<h1 id="resource-settings-api">Resource Settings API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Resource Settings API allows users to control and modify the behavior of their GCP resources (e.g., VM, firewall, Project, etc.) across the Cloud Resource Hierarchy.

Base URLs:

* <a href="https://resourcesettings.googleapis.com/">https://resourcesettings.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/resource-manager/docs/resource-settings/overview">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="resource-settings-api-projects">projects</h1>

## resourcesettings.projects.settings.get

<a id="opIdresourcesettings.projects.settings.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Returns a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist.

<h3 id="resourcesettingsprojectssettingsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the setting to get. See Setting for naming requirements.|
|view|query|string|false|The SettingView for this request.|
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
|view|SETTING_VIEW_UNSPECIFIED|
|view|SETTING_VIEW_BASIC|
|view|SETTING_VIEW_EFFECTIVE_VALUE|
|view|SETTING_VIEW_LOCAL_VALUE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "effectiveValue": {
    "booleanValue": true,
    "durationValue": "string",
    "enumValue": {
      "value": "string"
    },
    "stringMapValue": {
      "mappings": {
        "property1": "string",
        "property2": "string"
      }
    },
    "stringSetValue": {
      "values": [
        "string"
      ]
    },
    "stringValue": "string"
  },
  "etag": "string",
  "localValue": {
    "booleanValue": true,
    "durationValue": "string",
    "enumValue": {
      "value": "string"
    },
    "stringMapValue": {
      "mappings": {
        "property1": "string",
        "property2": "string"
      }
    },
    "stringSetValue": {
      "values": [
        "string"
      ]
    },
    "stringValue": "string"
  },
  "metadata": {
    "dataType": "DATA_TYPE_UNSPECIFIED",
    "defaultValue": {
      "booleanValue": true,
      "durationValue": "string",
      "enumValue": {
        "value": "string"
      },
      "stringMapValue": {
        "mappings": {
          "property1": "string",
          "property2": "string"
        }
      },
      "stringSetValue": {
        "values": [
          "string"
        ]
      },
      "stringValue": "string"
    },
    "description": "string",
    "displayName": "string",
    "readOnly": true
  },
  "name": "string"
}
```

<h3 id="resourcesettingsprojectssettingsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudResourcesettingsV1Setting](#schemagooglecloudresourcesettingsv1setting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## resourcesettings.projects.settings.patch

<a id="opIdresourcesettings.projects.settings.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "localValue": {
      "booleanValue": true,
      "durationValue": "string",
      "enumValue": {
        "value": "string"
      },
      "stringMapValue": {
        "mappings": {
          "property1": "string",
          "property2": "string"
        }
      },
      "stringSetValue": {
        "values": [
          "string"
        ]
      },
      "stringValue": "string"
    },
    "name": "string"
  }'
```

`PATCH /v1/{name}`

Updates a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.FAILED_PRECONDITION` if the setting is flagged as read only. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the setting value. On success, the response will contain only `name`, `local_value` and `etag`. The `metadata` and `effective_value` cannot be updated through this API. Note: the supplied setting will perform a full overwrite of the `local_value` field.

> Body parameter

```json
{
  "etag": "string",
  "localValue": {
    "booleanValue": true,
    "durationValue": "string",
    "enumValue": {
      "value": "string"
    },
    "stringMapValue": {
      "mappings": {
        "property1": "string",
        "property2": "string"
      }
    },
    "stringSetValue": {
      "values": [
        "string"
      ]
    },
    "stringValue": "string"
  },
  "name": "string"
}
```

<h3 id="resourcesettingsprojectssettingspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the setting. Must be in one of the following forms: * `projects/{project_number}/settings/{setting_name}` * `folders/{folder_id}/settings/{setting_name}` * `organizations/{organization_id}/settings/{setting_name}` For example, "/projects/123/settings/gcp-enableMyFeature"|
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
|body|body|[GoogleCloudResourcesettingsV1Setting](#schemagooglecloudresourcesettingsv1setting)|false|none|
|» etag|body|string|false|A fingerprint used for optimistic concurrency. See UpdateSetting for more details.|
|» localValue|body|[GoogleCloudResourcesettingsV1Value](#schemagooglecloudresourcesettingsv1value)|false|The configured value of the setting at the given parent resource, ignoring the resource hierarchy. The data type of Value must always be consistent with the data type defined in Setting.metadata.|
|» name|body|string|false|The resource name of the setting. Must be in one of the following forms: * `projects/{project_number}/settings/{setting_name}` * `folders/{folder_id}/settings/{setting_name}` * `organizations/{organization_id}/settings/{setting_name}` For example, "/projects/123/settings/gcp-enableMyFeature"|

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
  "effectiveValue": {
    "booleanValue": true,
    "durationValue": "string",
    "enumValue": {
      "value": "string"
    },
    "stringMapValue": {
      "mappings": {
        "property1": "string",
        "property2": "string"
      }
    },
    "stringSetValue": {
      "values": [
        "string"
      ]
    },
    "stringValue": "string"
  },
  "etag": "string",
  "localValue": {
    "booleanValue": true,
    "durationValue": "string",
    "enumValue": {
      "value": "string"
    },
    "stringMapValue": {
      "mappings": {
        "property1": "string",
        "property2": "string"
      }
    },
    "stringSetValue": {
      "values": [
        "string"
      ]
    },
    "stringValue": "string"
  },
  "metadata": {
    "dataType": "DATA_TYPE_UNSPECIFIED",
    "defaultValue": {
      "booleanValue": true,
      "durationValue": "string",
      "enumValue": {
        "value": "string"
      },
      "stringMapValue": {
        "mappings": {
          "property1": "string",
          "property2": "string"
        }
      },
      "stringSetValue": {
        "values": [
          "string"
        ]
      },
      "stringValue": "string"
    },
    "description": "string",
    "displayName": "string",
    "readOnly": true
  },
  "name": "string"
}
```

<h3 id="resourcesettingsprojectssettingspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudResourcesettingsV1Setting](#schemagooglecloudresourcesettingsv1setting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## resourcesettings.projects.settings.list

<a id="opIdresourcesettings.projects.settings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/settings`

Lists all the settings that are available on the Cloud resource `parent`.

<h3 id="resourcesettingsprojectssettingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project, folder, or organization that is the parent resource for this setting. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`|
|pageSize|query|integer|false|Unused. The size of the page to be returned.|
|pageToken|query|string|false|Unused. A page token used to retrieve the next page.|
|view|query|string|false|The SettingView for this request.|
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
|view|SETTING_VIEW_UNSPECIFIED|
|view|SETTING_VIEW_BASIC|
|view|SETTING_VIEW_EFFECTIVE_VALUE|
|view|SETTING_VIEW_LOCAL_VALUE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "settings": [
    {
      "effectiveValue": {
        "booleanValue": true,
        "durationValue": "string",
        "enumValue": {
          "value": "string"
        },
        "stringMapValue": {
          "mappings": {
            "property1": "string",
            "property2": "string"
          }
        },
        "stringSetValue": {
          "values": [
            "string"
          ]
        },
        "stringValue": "string"
      },
      "etag": "string",
      "localValue": {
        "booleanValue": true,
        "durationValue": "string",
        "enumValue": {
          "value": "string"
        },
        "stringMapValue": {
          "mappings": {
            "property1": "string",
            "property2": "string"
          }
        },
        "stringSetValue": {
          "values": [
            "string"
          ]
        },
        "stringValue": "string"
      },
      "metadata": {
        "dataType": "DATA_TYPE_UNSPECIFIED",
        "defaultValue": {
          "booleanValue": true,
          "durationValue": "string",
          "enumValue": {
            "value": "string"
          },
          "stringMapValue": {
            "mappings": {
              "property1": "string",
              "property2": "string"
            }
          },
          "stringSetValue": {
            "values": [
              "string"
            ]
          },
          "stringValue": "string"
        },
        "description": "string",
        "displayName": "string",
        "readOnly": true
      },
      "name": "string"
    }
  ]
}
```

<h3 id="resourcesettingsprojectssettingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudResourcesettingsV1ListSettingsResponse](#schemagooglecloudresourcesettingsv1listsettingsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudResourcesettingsV1ListSettingsResponse">GoogleCloudResourcesettingsV1ListSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudresourcesettingsv1listsettingsresponse"></a>
<a id="schema_GoogleCloudResourcesettingsV1ListSettingsResponse"></a>
<a id="tocSgooglecloudresourcesettingsv1listsettingsresponse"></a>
<a id="tocsgooglecloudresourcesettingsv1listsettingsresponse"></a>

```json
{
  "nextPageToken": "string",
  "settings": [
    {
      "effectiveValue": {
        "booleanValue": true,
        "durationValue": "string",
        "enumValue": {
          "value": "string"
        },
        "stringMapValue": {
          "mappings": {
            "property1": "string",
            "property2": "string"
          }
        },
        "stringSetValue": {
          "values": [
            "string"
          ]
        },
        "stringValue": "string"
      },
      "etag": "string",
      "localValue": {
        "booleanValue": true,
        "durationValue": "string",
        "enumValue": {
          "value": "string"
        },
        "stringMapValue": {
          "mappings": {
            "property1": "string",
            "property2": "string"
          }
        },
        "stringSetValue": {
          "values": [
            "string"
          ]
        },
        "stringValue": "string"
      },
      "metadata": {
        "dataType": "DATA_TYPE_UNSPECIFIED",
        "defaultValue": {
          "booleanValue": true,
          "durationValue": "string",
          "enumValue": {
            "value": "string"
          },
          "stringMapValue": {
            "mappings": {
              "property1": "string",
              "property2": "string"
            }
          },
          "stringSetValue": {
            "values": [
              "string"
            ]
          },
          "stringValue": "string"
        },
        "description": "string",
        "displayName": "string",
        "readOnly": true
      },
      "name": "string"
    }
  ]
}
```

The response from ListSettings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Unused. A page token used to retrieve the next page.|
|settings|[[GoogleCloudResourcesettingsV1Setting](#schemagooglecloudresourcesettingsv1setting)]|false|none|A list of settings that are available at the specified Cloud resource.|

<h2 id="tocS_GoogleCloudResourcesettingsV1Setting">GoogleCloudResourcesettingsV1Setting</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudresourcesettingsv1setting"></a>
<a id="schema_GoogleCloudResourcesettingsV1Setting"></a>
<a id="tocSgooglecloudresourcesettingsv1setting"></a>
<a id="tocsgooglecloudresourcesettingsv1setting"></a>

```json
{
  "effectiveValue": {
    "booleanValue": true,
    "durationValue": "string",
    "enumValue": {
      "value": "string"
    },
    "stringMapValue": {
      "mappings": {
        "property1": "string",
        "property2": "string"
      }
    },
    "stringSetValue": {
      "values": [
        "string"
      ]
    },
    "stringValue": "string"
  },
  "etag": "string",
  "localValue": {
    "booleanValue": true,
    "durationValue": "string",
    "enumValue": {
      "value": "string"
    },
    "stringMapValue": {
      "mappings": {
        "property1": "string",
        "property2": "string"
      }
    },
    "stringSetValue": {
      "values": [
        "string"
      ]
    },
    "stringValue": "string"
  },
  "metadata": {
    "dataType": "DATA_TYPE_UNSPECIFIED",
    "defaultValue": {
      "booleanValue": true,
      "durationValue": "string",
      "enumValue": {
        "value": "string"
      },
      "stringMapValue": {
        "mappings": {
          "property1": "string",
          "property2": "string"
        }
      },
      "stringSetValue": {
        "values": [
          "string"
        ]
      },
      "stringValue": "string"
    },
    "description": "string",
    "displayName": "string",
    "readOnly": true
  },
  "name": "string"
}
```

The schema for settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effectiveValue|[GoogleCloudResourcesettingsV1Value](#schemagooglecloudresourcesettingsv1value)|false|none|Output only. The effective value of the setting at the given parent resource, evaluated based on the resource hierarchy The effective value evaluates to one of the following options, in this order. If an option is not valid or doesn't exist, then the next option is used: 1. The local setting value on the given resource: Setting.local_value 2. If one of the given resource's ancestors in the resource hierarchy have a local setting value, the local value at the nearest such ancestor. 3. The setting's default value: SettingMetadata.default_value 4. An empty value, defined as a `Value` with all fields unset. The data type of Value must always be consistent with the data type defined in Setting.metadata.|
|etag|string|false|none|A fingerprint used for optimistic concurrency. See UpdateSetting for more details.|
|localValue|[GoogleCloudResourcesettingsV1Value](#schemagooglecloudresourcesettingsv1value)|false|none|The configured value of the setting at the given parent resource, ignoring the resource hierarchy. The data type of Value must always be consistent with the data type defined in Setting.metadata.|
|metadata|[GoogleCloudResourcesettingsV1SettingMetadata](#schemagooglecloudresourcesettingsv1settingmetadata)|false|none|Output only. Metadata about a setting which is not editable by the end user.|
|name|string|false|none|The resource name of the setting. Must be in one of the following forms: * `projects/{project_number}/settings/{setting_name}` * `folders/{folder_id}/settings/{setting_name}` * `organizations/{organization_id}/settings/{setting_name}` For example, "/projects/123/settings/gcp-enableMyFeature"|

<h2 id="tocS_GoogleCloudResourcesettingsV1SettingMetadata">GoogleCloudResourcesettingsV1SettingMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudresourcesettingsv1settingmetadata"></a>
<a id="schema_GoogleCloudResourcesettingsV1SettingMetadata"></a>
<a id="tocSgooglecloudresourcesettingsv1settingmetadata"></a>
<a id="tocsgooglecloudresourcesettingsv1settingmetadata"></a>

```json
{
  "dataType": "DATA_TYPE_UNSPECIFIED",
  "defaultValue": {
    "booleanValue": true,
    "durationValue": "string",
    "enumValue": {
      "value": "string"
    },
    "stringMapValue": {
      "mappings": {
        "property1": "string",
        "property2": "string"
      }
    },
    "stringSetValue": {
      "values": [
        "string"
      ]
    },
    "stringValue": "string"
  },
  "description": "string",
  "displayName": "string",
  "readOnly": true
}
```

Metadata about a setting which is not editable by the end user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataType|string|false|none|The data type for this setting.|
|defaultValue|[GoogleCloudResourcesettingsV1Value](#schemagooglecloudresourcesettingsv1value)|false|none|The value provided by Setting.effective_value if no setting value is explicitly set. Note: not all settings have a default value.|
|description|string|false|none|A detailed description of what this setting does.|
|displayName|string|false|none|The human readable name for this setting.|
|readOnly|boolean|false|none|A flag indicating that values of this setting cannot be modified. See documentation for the specific setting for updates and reasons.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|DATA_TYPE_UNSPECIFIED|
|dataType|BOOLEAN|
|dataType|STRING|
|dataType|STRING_SET|
|dataType|ENUM_VALUE|
|dataType|DURATION_VALUE|
|dataType|STRING_MAP|

<h2 id="tocS_GoogleCloudResourcesettingsV1Value">GoogleCloudResourcesettingsV1Value</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudresourcesettingsv1value"></a>
<a id="schema_GoogleCloudResourcesettingsV1Value"></a>
<a id="tocSgooglecloudresourcesettingsv1value"></a>
<a id="tocsgooglecloudresourcesettingsv1value"></a>

```json
{
  "booleanValue": true,
  "durationValue": "string",
  "enumValue": {
    "value": "string"
  },
  "stringMapValue": {
    "mappings": {
      "property1": "string",
      "property2": "string"
    }
  },
  "stringSetValue": {
    "values": [
      "string"
    ]
  },
  "stringValue": "string"
}
```

The data in a setting value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|booleanValue|boolean|false|none|Defines this value as being a boolean value.|
|durationValue|string(google-duration)|false|none|Defines this value as being a Duration.|
|enumValue|[GoogleCloudResourcesettingsV1ValueEnumValue](#schemagooglecloudresourcesettingsv1valueenumvalue)|false|none|Defines this value as being a Enum.|
|stringMapValue|[GoogleCloudResourcesettingsV1ValueStringMap](#schemagooglecloudresourcesettingsv1valuestringmap)|false|none|Defines this value as being a StringMap.|
|stringSetValue|[GoogleCloudResourcesettingsV1ValueStringSet](#schemagooglecloudresourcesettingsv1valuestringset)|false|none|Defines this value as being a StringSet.|
|stringValue|string|false|none|Defines this value as being a string value.|

<h2 id="tocS_GoogleCloudResourcesettingsV1ValueEnumValue">GoogleCloudResourcesettingsV1ValueEnumValue</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudresourcesettingsv1valueenumvalue"></a>
<a id="schema_GoogleCloudResourcesettingsV1ValueEnumValue"></a>
<a id="tocSgooglecloudresourcesettingsv1valueenumvalue"></a>
<a id="tocsgooglecloudresourcesettingsv1valueenumvalue"></a>

```json
{
  "value": "string"
}
```

A enum value that can hold any enum type setting values. Each enum type is represented by a number, this representation is stored in the definitions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|The value of this enum|

<h2 id="tocS_GoogleCloudResourcesettingsV1ValueStringMap">GoogleCloudResourcesettingsV1ValueStringMap</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudresourcesettingsv1valuestringmap"></a>
<a id="schema_GoogleCloudResourcesettingsV1ValueStringMap"></a>
<a id="tocSgooglecloudresourcesettingsv1valuestringmap"></a>
<a id="tocsgooglecloudresourcesettingsv1valuestringmap"></a>

```json
{
  "mappings": {
    "property1": "string",
    "property2": "string"
  }
}
```

A string->string map value that can hold a map of string keys to string values. The maximum length of each string is 200 characters and there can be a maximum of 50 key-value pairs in the map.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mappings|object|false|none|The key-value pairs in the map|

<h2 id="tocS_GoogleCloudResourcesettingsV1ValueStringSet">GoogleCloudResourcesettingsV1ValueStringSet</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudresourcesettingsv1valuestringset"></a>
<a id="schema_GoogleCloudResourcesettingsV1ValueStringSet"></a>
<a id="tocSgooglecloudresourcesettingsv1valuestringset"></a>
<a id="tocsgooglecloudresourcesettingsv1valuestringset"></a>

```json
{
  "values": [
    "string"
  ]
}
```

A string set value that can hold a set of strings. The maximum length of each string is 200 characters and there can be a maximum of 50 strings in the string set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[string]|false|none|The strings in the set|
