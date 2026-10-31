<h1 id="google-keep-api">Google Keep API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google Keep API is used in an enterprise environment to manage Google Keep content and resolve issues identified by cloud security software.

Base URLs:

* <a href="https://keep.googleapis.com/">https://keep.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/keep/api">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/keep|See, edit, create and permanently delete all your Google Keep data|
|https://www.googleapis.com/auth/keep.readonly|View all your Google Keep data|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/keep|See, edit, create and permanently delete all your Google Keep data|
|https://www.googleapis.com/auth/keep.readonly|View all your Google Keep data|

<h1 id="google-keep-api-notes">notes</h1>

## keep.notes.list

<a id="opIdkeep.notes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/notes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/notes`

Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.

<h3 id="keepnoteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Filter for list results. If no filter is supplied, the `trashed` filter is applied by default. Valid fields to filter by are: `create_time`, `update_time`, `trash_time`, and `trashed`. Filter syntax follows the [Google AIP filtering spec](https://aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return.|
|pageToken|query|string|false|The previous page's `next_page_token` field.|
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
  "nextPageToken": "string",
  "notes": [
    {
      "attachments": [
        {
          "mimeType": [
            "string"
          ],
          "name": "string"
        }
      ],
      "body": {
        "list": {
          "listItems": [
            {
              "checked": true,
              "childListItems": [
                {}
              ],
              "text": {
                "text": "string"
              }
            }
          ]
        },
        "text": {
          "text": "string"
        }
      },
      "createTime": "string",
      "name": "string",
      "permissions": [
        {
          "deleted": true,
          "email": "string",
          "family": {},
          "group": {
            "email": "string"
          },
          "name": "string",
          "role": "ROLE_UNSPECIFIED",
          "user": {
            "email": "string"
          }
        }
      ],
      "title": "string",
      "trashTime": "string",
      "trashed": true,
      "updateTime": "string"
    }
  ]
}
```

<h3 id="keepnoteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListNotesResponse](#schemalistnotesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/keep ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/keep ), Oauth2 ( Scopes: https://www.googleapis.com/auth/keep.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/keep.readonly )
</aside>

## keep.notes.create

<a id="opIdkeep.notes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/notes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": {
      "list": {
        "listItems": [
          {
            "checked": true,
            "childListItems": [
              {}
            ],
            "text": {
              "text": "string"
            }
          }
        ]
      },
      "text": {
        "text": "string"
      }
    },
    "title": "string"
  }'
```

`POST /v1/notes`

Creates a new note.

> Body parameter

```json
{
  "body": {
    "list": {
      "listItems": [
        {
          "checked": true,
          "childListItems": [
            {}
          ],
          "text": {
            "text": "string"
          }
        }
      ]
    },
    "text": {
      "text": "string"
    }
  },
  "title": "string"
}
```

<h3 id="keepnotescreate-parameters">Parameters</h3>

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
|body|body|[Note](#schemanote)|false|none|
|» body|body|[Section](#schemasection)|false|The body of the note.|
|» title|body|string|false|The title of the note. Length must be less than 1,000 characters.|

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
  "attachments": [
    {
      "mimeType": [
        "string"
      ],
      "name": "string"
    }
  ],
  "body": {
    "list": {
      "listItems": [
        {
          "checked": true,
          "childListItems": [
            {}
          ],
          "text": {
            "text": "string"
          }
        }
      ]
    },
    "text": {
      "text": "string"
    }
  },
  "createTime": "string",
  "name": "string",
  "permissions": [
    {
      "deleted": true,
      "email": "string",
      "family": {},
      "group": {
        "email": "string"
      },
      "name": "string",
      "role": "ROLE_UNSPECIFIED",
      "user": {
        "email": "string"
      }
    }
  ],
  "title": "string",
  "trashTime": "string",
  "trashed": true,
  "updateTime": "string"
}
```

<h3 id="keepnotescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Note](#schemanote)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/keep ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/keep )
</aside>

## keep.notes.get

<a id="opIdkeep.notes.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets a note.

<h3 id="keepnotesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the resource.|
|mimeType|query|string|false|The IANA MIME type format requested. The requested MIME type must be one specified in the attachment.mime_type. Required when downloading attachment media and ignored otherwise.|
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
  "attachments": [
    {
      "mimeType": [
        "string"
      ],
      "name": "string"
    }
  ],
  "body": {
    "list": {
      "listItems": [
        {
          "checked": true,
          "childListItems": [
            {}
          ],
          "text": {
            "text": "string"
          }
        }
      ]
    },
    "text": {
      "text": "string"
    }
  },
  "createTime": "string",
  "name": "string",
  "permissions": [
    {
      "deleted": true,
      "email": "string",
      "family": {},
      "group": {
        "email": "string"
      },
      "name": "string",
      "role": "ROLE_UNSPECIFIED",
      "user": {
        "email": "string"
      }
    }
  ],
  "title": "string",
  "trashTime": "string",
  "trashed": true,
  "updateTime": "string"
}
```

<h3 id="keepnotesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Note](#schemanote)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/keep ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/keep ), Oauth2 ( Scopes: https://www.googleapis.com/auth/keep.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/keep.readonly )
</aside>

## keep.notes.delete

<a id="opIdkeep.notes.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.

<h3 id="keepnotesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the note to delete.|
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

<h3 id="keepnotesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/keep ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/keep )
</aside>

## keep.notes.permissions.batchCreate

<a id="opIdkeep.notes.permissions.batchCreate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/permissions:batchCreate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "parent": "string",
        "permission": {
          "email": "string",
          "role": "ROLE_UNSPECIFIED"
        }
      }
    ]
  }'
```

`POST /v1/{parent}/permissions:batchCreate`

Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.

> Body parameter

```json
{
  "requests": [
    {
      "parent": "string",
      "permission": {
        "email": "string",
        "role": "ROLE_UNSPECIFIED"
      }
    }
  ]
}
```

<h3 id="keepnotespermissionsbatchcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent resource shared by all Permissions being created. Format: `notes/{note}` If this is set, the parent field in the CreatePermission messages must either be empty or match this field.|
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
|body|body|[BatchCreatePermissionsRequest](#schemabatchcreatepermissionsrequest)|false|none|
|» requests|body|[[CreatePermissionRequest](#schemacreatepermissionrequest)]|false|The request message specifying the resources to create.|

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
      "deleted": true,
      "email": "string",
      "family": {},
      "group": {
        "email": "string"
      },
      "name": "string",
      "role": "ROLE_UNSPECIFIED",
      "user": {
        "email": "string"
      }
    }
  ]
}
```

<h3 id="keepnotespermissionsbatchcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchCreatePermissionsResponse](#schemabatchcreatepermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/keep ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/keep )
</aside>

## keep.notes.permissions.batchDelete

<a id="opIdkeep.notes.permissions.batchDelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/permissions:batchDelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "names": [
      "string"
    ]
  }'
```

`POST /v1/{parent}/permissions:batchDelete`

Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.

> Body parameter

```json
{
  "names": [
    "string"
  ]
}
```

<h3 id="keepnotespermissionsbatchdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent resource shared by all permissions being deleted. Format: `notes/{note}` If this is set, the parent of all of the permissions specified in the DeletePermissionRequest messages must match this field.|
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
|body|body|[BatchDeletePermissionsRequest](#schemabatchdeletepermissionsrequest)|false|none|
|» names|body|[string]|false|Required. The names of the permissions to delete. Format: `notes/{note}/permissions/{permission}`|

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

<h3 id="keepnotespermissionsbatchdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/keep ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/keep )
</aside>

# Schemas

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "mimeType": [
    "string"
  ],
  "name": "string"
}
```

An attachment to a note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mimeType|[string]|false|none|The MIME types (IANA media types) in which the attachment is available.|
|name|string|false|none|The resource name;|

<h2 id="tocS_BatchCreatePermissionsRequest">BatchCreatePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatepermissionsrequest"></a>
<a id="schema_BatchCreatePermissionsRequest"></a>
<a id="tocSbatchcreatepermissionsrequest"></a>
<a id="tocsbatchcreatepermissionsrequest"></a>

```json
{
  "requests": [
    {
      "parent": "string",
      "permission": {
        "deleted": true,
        "email": "string",
        "family": {},
        "group": {
          "email": "string"
        },
        "name": "string",
        "role": "ROLE_UNSPECIFIED",
        "user": {
          "email": "string"
        }
      }
    }
  ]
}
```

The request to add one or more permissions on the note. Currently, only the `WRITER` role may be specified. If adding a permission fails, then the entire request fails and no changes are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[CreatePermissionRequest](#schemacreatepermissionrequest)]|false|none|The request message specifying the resources to create.|

<h2 id="tocS_BatchCreatePermissionsResponse">BatchCreatePermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatepermissionsresponse"></a>
<a id="schema_BatchCreatePermissionsResponse"></a>
<a id="tocSbatchcreatepermissionsresponse"></a>
<a id="tocsbatchcreatepermissionsresponse"></a>

```json
{
  "permissions": [
    {
      "deleted": true,
      "email": "string",
      "family": {},
      "group": {
        "email": "string"
      },
      "name": "string",
      "role": "ROLE_UNSPECIFIED",
      "user": {
        "email": "string"
      }
    }
  ]
}
```

The response for creating permissions on a note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[[Permission](#schemapermission)]|false|none|Permissions created.|

<h2 id="tocS_BatchDeletePermissionsRequest">BatchDeletePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletepermissionsrequest"></a>
<a id="schema_BatchDeletePermissionsRequest"></a>
<a id="tocSbatchdeletepermissionsrequest"></a>
<a id="tocsbatchdeletepermissionsrequest"></a>

```json
{
  "names": [
    "string"
  ]
}
```

The request to remove one or more permissions from a note. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|false|none|Required. The names of the permissions to delete. Format: `notes/{note}/permissions/{permission}`|

<h2 id="tocS_CreatePermissionRequest">CreatePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepermissionrequest"></a>
<a id="schema_CreatePermissionRequest"></a>
<a id="tocScreatepermissionrequest"></a>
<a id="tocscreatepermissionrequest"></a>

```json
{
  "parent": "string",
  "permission": {
    "deleted": true,
    "email": "string",
    "family": {},
    "group": {
      "email": "string"
    },
    "name": "string",
    "role": "ROLE_UNSPECIFIED",
    "user": {
      "email": "string"
    }
  }
}
```

The request to add a single permission on the note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent|string|false|none|Required. The parent note where this permission will be created. Format: `notes/{note}`|
|permission|[Permission](#schemapermission)|false|none|Required. The permission to create. One of Permission.email, User.email or Group.email must be supplied.|

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

<h2 id="tocS_Family">Family</h2>
<!-- backwards compatibility -->
<a id="schemafamily"></a>
<a id="schema_Family"></a>
<a id="tocSfamily"></a>
<a id="tocsfamily"></a>

```json
{}
```

Describes a single Google Family.

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "email": "string"
}
```

Describes a single Group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The group email.|

<h2 id="tocS_ListContent">ListContent</h2>
<!-- backwards compatibility -->
<a id="schemalistcontent"></a>
<a id="schema_ListContent"></a>
<a id="tocSlistcontent"></a>
<a id="tocslistcontent"></a>

```json
{
  "listItems": [
    {
      "checked": true,
      "childListItems": [
        {}
      ],
      "text": {
        "text": "string"
      }
    }
  ]
}
```

The list of items for a single list note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listItems|[[ListItem](#schemalistitem)]|false|none|The items in the list. The number of items must be less than 1,000.|

<h2 id="tocS_ListItem">ListItem</h2>
<!-- backwards compatibility -->
<a id="schemalistitem"></a>
<a id="schema_ListItem"></a>
<a id="tocSlistitem"></a>
<a id="tocslistitem"></a>

```json
{
  "checked": true,
  "childListItems": [
    {
      "checked": true,
      "childListItems": [
        {}
      ],
      "text": {
        "text": "string"
      }
    }
  ],
  "text": {
    "text": "string"
  }
}
```

A single list item in a note's list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checked|boolean|false|none|Whether this item has been checked off or not.|
|childListItems|[[ListItem](#schemalistitem)]|false|none|If set, list of list items nested under this list item. Only one level of nesting is allowed.|
|text|[TextContent](#schematextcontent)|false|none|The text of this item. Length must be less than 1,000 characters.|

<h2 id="tocS_ListNotesResponse">ListNotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnotesresponse"></a>
<a id="schema_ListNotesResponse"></a>
<a id="tocSlistnotesresponse"></a>
<a id="tocslistnotesresponse"></a>

```json
{
  "nextPageToken": "string",
  "notes": [
    {
      "attachments": [
        {
          "mimeType": [
            "string"
          ],
          "name": "string"
        }
      ],
      "body": {
        "list": {
          "listItems": [
            {
              "checked": true,
              "childListItems": [
                {}
              ],
              "text": {
                "text": "string"
              }
            }
          ]
        },
        "text": {
          "text": "string"
        }
      },
      "createTime": "string",
      "name": "string",
      "permissions": [
        {
          "deleted": true,
          "email": "string",
          "family": {},
          "group": {
            "email": "string"
          },
          "name": "string",
          "role": "ROLE_UNSPECIFIED",
          "user": {
            "email": "string"
          }
        }
      ],
      "title": "string",
      "trashTime": "string",
      "trashed": true,
      "updateTime": "string"
    }
  ]
}
```

The response when listing a page of notes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Next page's `page_token` field.|
|notes|[[Note](#schemanote)]|false|none|A page of notes.|

<h2 id="tocS_Note">Note</h2>
<!-- backwards compatibility -->
<a id="schemanote"></a>
<a id="schema_Note"></a>
<a id="tocSnote"></a>
<a id="tocsnote"></a>

```json
{
  "attachments": [
    {
      "mimeType": [
        "string"
      ],
      "name": "string"
    }
  ],
  "body": {
    "list": {
      "listItems": [
        {
          "checked": true,
          "childListItems": [
            {}
          ],
          "text": {
            "text": "string"
          }
        }
      ]
    },
    "text": {
      "text": "string"
    }
  },
  "createTime": "string",
  "name": "string",
  "permissions": [
    {
      "deleted": true,
      "email": "string",
      "family": {},
      "group": {
        "email": "string"
      },
      "name": "string",
      "role": "ROLE_UNSPECIFIED",
      "user": {
        "email": "string"
      }
    }
  ],
  "title": "string",
  "trashTime": "string",
  "trashed": true,
  "updateTime": "string"
}
```

A single note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[Attachment](#schemaattachment)]|false|read-only|Output only. The attachments attached to this note.|
|body|[Section](#schemasection)|false|none|The body of the note.|
|createTime|string(google-datetime)|false|read-only|Output only. When this note was created.|
|name|string|false|read-only|Output only. The resource name of this note. See general note on identifiers in KeepService.|
|permissions|[[Permission](#schemapermission)]|false|read-only|Output only. The list of permissions set on the note. Contains at least one entry for the note owner.|
|title|string|false|none|The title of the note. Length must be less than 1,000 characters.|
|trashTime|string(google-datetime)|false|read-only|Output only. When this note was trashed. If `trashed`, the note is eventually deleted. If the note is not trashed, this field is not set (and the trashed field is `false`).|
|trashed|boolean|false|read-only|Output only. `true` if this note has been trashed. If trashed, the note is eventually deleted.|
|updateTime|string(google-datetime)|false|read-only|Output only. When this note was last modified.|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "deleted": true,
  "email": "string",
  "family": {},
  "group": {
    "email": "string"
  },
  "name": "string",
  "role": "ROLE_UNSPECIFIED",
  "user": {
    "email": "string"
  }
}
```

A single permission on the note. Associates a `member` with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|boolean|false|read-only|Output only. Whether this member has been deleted. If the member is recovered, this value is set to false and the recovered member retains the role on the note.|
|email|string|false|none|The email associated with the member. If set on create, the `email` field in the `User` or `Group` message must either be empty or match this field. On read, may be unset if the member does not have an associated email.|
|family|[Family](#schemafamily)|false|none|Output only. The Google Family to which this role applies.|
|group|[Group](#schemagroup)|false|none|Output only. The group to which this role applies.|
|name|string|false|read-only|Output only. The resource name.|
|role|string|false|none|The role granted by this permission. The role determines the entity’s ability to read, write, and share notes.|
|user|[User](#schemauser)|false|none|Output only. The user to whom this role applies.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|ROLE_UNSPECIFIED|
|role|OWNER|
|role|WRITER|

<h2 id="tocS_Section">Section</h2>
<!-- backwards compatibility -->
<a id="schemasection"></a>
<a id="schema_Section"></a>
<a id="tocSsection"></a>
<a id="tocssection"></a>

```json
{
  "list": {
    "listItems": [
      {
        "checked": true,
        "childListItems": [
          {}
        ],
        "text": {
          "text": "string"
        }
      }
    ]
  },
  "text": {
    "text": "string"
  }
}
```

The content of the note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[ListContent](#schemalistcontent)|false|none|Used if this section's content is a list.|
|text|[TextContent](#schematextcontent)|false|none|Used if this section's content is a block of text. The length of the text content must be less than 20,000 characters.|

<h2 id="tocS_TextContent">TextContent</h2>
<!-- backwards compatibility -->
<a id="schematextcontent"></a>
<a id="schema_TextContent"></a>
<a id="tocStextcontent"></a>
<a id="tocstextcontent"></a>

```json
{
  "text": "string"
}
```

The block of text for a single text section or list item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|The text of the note. The limits on this vary with the specific field using this type.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "email": "string"
}
```

Describes a single user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The user's email.|
