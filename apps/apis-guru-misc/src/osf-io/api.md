<h1 id="osf-apiv2-documentation">OSF APIv2 Documentation v2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.test.osf.io/v2">https://api.test.osf.io/v2</a>

Email: <a href="mailto:support@osf.io">OSF</a> 
Web: <a href="https://osf.io/support">OSF</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="osf-apiv2-documentation-addons">Addons</h1>

Addons represent a user connection to an external service, some addons allow for additional storage, some modify user authentication or add a redirect link to a project.

## List all addons

<a id="opIdaddons_list"></a>

> Code samples

```bash
curl https://example.com/addons/ \
  -H 'Accept: application/json'
```

`GET /addons/`


A paginated list of addons configurable with the OSF, for read purposes only.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "categories": [
          "storage"
        ],
        "description": "Box is a file storage add-on. Connect your Box account to an OSF project to interact with files hosted on Box via the OSF.",
        "name": "Box",
        "url": "http://www.box.com"
      },
      "id": "box",
      "links": {},
      "type": "addon"
    },
    {
      "attributes": {
        "categories": [
          "storage"
        ],
        "description": "Dataverse is an open source software application to share, cite, and archive data. Connect your Dataverse account to share your Dataverse datasets via the OSF.",
        "name": "Dataverse",
        "url": "https://dataverse.harvard.edu/"
      },
      "id": "dataverse",
      "links": {},
      "type": "addon"
    },
    {
      "attributes": {
        "categories": [
          "storage"
        ],
        "description": "Dropbox is a file storage add-on. Connect your Dropbox account to an OSF project to interact with files hosted on Dropbox via the OSF.",
        "name": "Dropbox",
        "url": "http://www.dropbox.com"
      },
      "id": "dropbox",
      "links": {},
      "type": "addon"
    },
    {
      "attributes": {
        "categories": [
          "storage"
        ],
        "description": "Figshare is an online digital repository. Connect your figshare account to share your figshare files along with other materials in your OSF project.",
        "name": "figshare",
        "url": "http://www.figshare.com"
      },
      "id": "figshare",
      "links": {},
      "type": "addon"
    },
    {
      "attributes": {
        "categories": [
          "storage"
        ],
        "description": "GitHub is a web-based Git repository hosting service. Connect your GitHub repo to your OSF project to share your code alongside other materials in your OSF project.",
        "name": "GitHub",
        "url": "http://www.github.com"
      },
      "id": "github",
      "links": {},
      "type": "addon"
    },
    {
      "attributes": {
        "categories": [
          "citations"
        ],
        "description": "Mendeley is a reference management tool. Connecting Mendeley folders to OSF projects allows you and others to view, copy, and download citations that are relevant to your project from the Project Overview page.",
        "name": "Mendeley",
        "url": "http://www.mendeley.com"
      },
      "id": "mendeley",
      "links": {},
      "type": "addon"
    },
    {
      "attributes": {
        "categories": [
          "citations"
        ],
        "description": "Zotero is a reference management tool. Connecting Zotero folders to OSF projects allows you and others to view, copy, and download citations that are relevant to your project from the Project Overview page.",
        "name": "Zotero",
        "url": "http://www.zotero.org"
      },
      "id": "zotero",
      "links": {},
      "type": "addon"
    },
    {
      "attributes": {
        "categories": [
          "storage"
        ],
        "description": "ownCloud is an open source, self-hosted file sync and share app platform. Connect your ownCloud account to an OSF project to interact with files hosted on ownCloud via the OSF.",
        "name": "ownCloud",
        "url": "https://owncloud.org/"
      },
      "id": "owncloud",
      "links": {},
      "type": "addon"
    },
    {
      "attributes": {
        "categories": [
          "storage"
        ],
        "description": "Amazon S3 is a file storage add-on. Connect your S3 account to an OSF project to interact with files hosted on S3 via the OSF.",
        "name": "Amazon S3",
        "url": "https://aws.amazon.com/s3/"
      },
      "id": "s3",
      "links": {},
      "type": "addon"
    },
    {
      "attributes": {
        "categories": [
          "storage"
        ],
        "description": "Google Drive is a file storage add-on. Connect your Google Drive account to an OSF project to interact with files hosted on Google Drive via the OSF.",
        "name": "Google Drive",
        "url": "https://drive.google.com"
      },
      "id": "googledrive",
      "links": {},
      "type": "addon"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": null,
    "next": null,
    "per_page": 1000,
    "prev": null,
    "total": 10
  }
}
```

<h3 id="list-all-addons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-base">Base</h1>

This is the "home page" of the API you can get important autentication information for the user making the request and get links to other resources.

## Root

<a id="opIdbase_read"></a>

> Code samples

```bash
curl https://example.com/
```

`GET /`

#### Returns
A JSON object with `meta` and `links` keys.

The `meta` key contains information such as a welcome message from the API, the specified version of the request, and the full representation of the current user, if authentication credentials were provided in the request.

The `links` key contains links to the following entity collections: [addons](#tag/Addons), [collections](), [institutions](#tag/Institutions), [licenses](#tag/Licenses), [registration schemas](#tag/Registration Schemas), [nodes](#tag/Nodes), [registrations](#tag/Registrations), [users](#tag/Users)

<h3 id="root-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-registration-schemas">Registration Schemas</h1>

A Registration Schemas defines the range of valid responses to a registration. Each Registration Schema is composed of <a href="#tag/Registration-Schema-Blocks">"blocks"</a> that define the individual questions a user responds to. Registration Schemas are created by the Center for Open Science or an affiliated institution and periodically migrated into the system. Registration Schemas are updated and deactivated using an internal versioning system.

## Retrieve a list of Registration Schemas

<a id="opIdregistration_schemas_list"></a>

> Code samples

```bash
curl https://example.com/schemas/registrations/ \
  -H 'Accept: application/json'
```

`GET /schemas/registrations/`

Retrieve a paginated list of all active Registration Schemas. Registration Schemas describe the supplemental questions that accompany a registration. Registration Schemas are read-only for API users.
#### Returns
Returns a JSON object containing `data` and `links` keys.
The `data` key contains an array of 10 Registration Schemas. Each resource in the array is a separate Registration Schemas object.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "active": true,
        "description": "This is a test form for documentation purposes.",
        "name": "Test Long-Form Registration Schema",
        "schema": {
          "atomicSchema": true,
          "blocks": [
            {
              "block_type": "page-heading",
              "display_text": "The title of the page"
            },
            {
              "block_type": "question-label",
              "display_text": "The first question, put answer below."
            },
            {
              "block_type": "long-text-input",
              "registration_response_key": "Q1"
            }
          ],
          "description": "This is a test form for documentation purposes.",
          "name": "Test Long-Form Registration Schema",
          "pages": [],
          "title": "Test Long-Form Registration Schema",
          "version": 2
        },
        "schema_version": 2
      },
      "id": "6176c9d45e01f100091d4f94",
      "links": {
        "self": "https://api.osf.io/v2/schemas/registrations/6176c9d45e01f100091d4f94/"
      },
      "relationships": {
        "schema_blocks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/schemas/registrations/6176c9d45e01f100091d4f94/schema_blocks/",
              "meta": {}
            }
          }
        }
      },
      "type": "registration-schemas"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.test.osf.io/v2/schemas/registrations/?page=2",
    "next": "https://api.test.osf.io/v2/schemas/registrations/?page=2",
    "prev": null,
    "self": "https://api.test.osf.io/v2/schemas/registrations/"
  },
  "meta": {
    "per_page": 20,
    "total": 1,
    "version": 2.2
  }
}
```

<h3 id="retrieve-a-list-of-registration-schemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a Registration Schema

<a id="opIdregistration_schema_read"></a>

> Code samples

```bash
curl https://example.com/schemas/registrations/string \
  -H 'Accept: application/json'
```

`GET /schemas/registrations/{registration_schema_id}`

Retrieves the details of a given Registration Schema. Registration Schemas defines the desired supplemental information that should accompany be included in a Registration. Registration Schemas are Read-only to API users.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Registration Schemas, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-registration-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_schema_id|path|string|true|The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "active": true,
      "description": "This is a test form for documentation purposes.",
      "name": "Test Long-Form Registration Schema",
      "schema": {
        "atomicSchema": true,
        "blocks": [
          {
            "block_type": "page-heading",
            "display_text": "The title of the page"
          },
          {
            "block_type": "question-label",
            "display_text": "The first question, put answer below."
          },
          {
            "block_type": "long-text-input",
            "registration_response_key": "Q1"
          }
        ],
        "description": "This is a test form for documentation purposes.",
        "name": "Test Long-Form Registration Schema",
        "pages": [],
        "title": "Test Long-Form Registration Schema",
        "version": 2
      },
      "schema_version": 2
    },
    "id": "6176c9d45e01f100091d4f94",
    "links": {
      "self": "https://api.osf.io/v2/schemas/registrations/6176c9d45e01f100091d4f94/"
    },
    "relationships": {
      "schema_blocks": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/schemas/registrations/6176c9d45e01f100091d4f94/schema_blocks/",
            "meta": {}
          }
        }
      }
    },
    "type": "registration-schemas"
  }
}
```

<h3 id="retrieve-a-registration-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-registration-schema-blocks">Registration Schema Blocks</h1>

Registration Schema Blocks are read-only entities, they represent question prompts and form inputs known as "blocks" that make up a Registration Schemas. Each block has a designated `block_type` that determines what type of information that Schema Block's corresponding block in the Schema Response.

## Retrieve a list of Registration Schema Blocks for a Schema Response

<a id="opIdschema_response_blocks_read"></a>

> Code samples

```bash
curl https://example.com/schema_responses/string/schema_blocks/ \
  -H 'Accept: application/json'
```

`GET /schema_responses/{schema_response_id}/schema_blocks/`

This returns a list of all the Registration Schema Blocks are contained in Registration Schema.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Registration Schemas, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-list-of-registration-schema-blocks-for-a-schema-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schema_response_id|path|string|true|The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "block_type": "page-heading",
        "display_text": "Background and Study Intent",
        "help_text": "",
        "index": 0,
        "registration_response_key": null,
        "required": false,
        "schema_block_group_key": ""
      },
      "id": "61b79f9eadbb5701424a2d5e",
      "links": {
        "self": "https://api.osf.io/v2/schema_responses/61b79f9eadbb5701424a2d5e/"
      },
      "relationships": {
        "schema": {
          "links": {
            "data": {
              "id": "6176c9d45e01f100091d4f94",
              "type": "registration-schemas"
            },
            "related": {
              "href": "https://api.osf.io/v2/schemas/registrations/6176c9d45e01f100091d4f94/",
              "meta": {}
            }
          }
        }
      },
      "type": "schema-blocks"
    },
    {
      "attributes": {
        "block_type": "question-label",
        "display_text": "Question 1",
        "help_text": "I am a question",
        "index": 1,
        "registration_response_key": null,
        "required": false,
        "schema_block_group_key": ""
      },
      "id": "61b79f9eadbb5701424a2d53",
      "links": {
        "self": "https://api.osf.io/v2/schema_responses/61b79f9eadbb5701424a2d53/"
      },
      "relationships": {
        "schema": {
          "links": {
            "data": {
              "id": "6176c9d45e01f100091d4f94",
              "type": "registration-schemas"
            },
            "related": {
              "href": "https://api.osf.io/v2/schemas/registrations/6176c9d45e01f100091d4f94/",
              "meta": {}
            }
          }
        }
      },
      "type": "schema-blocks"
    },
    {
      "attributes": {
        "block_type": "long-text-input",
        "display_text": "",
        "help_text": "",
        "index": 2,
        "registration_response_key": "Q1",
        "required": false,
        "schema_block_group_key": ""
      },
      "id": "61b79f9eadbb5701424a2d53",
      "links": {
        "self": "https://api.osf.io/v2/schema_responses/61b79f9eadbb5701424a2d53/"
      },
      "relationships": {
        "schema": {
          "links": {
            "data": {
              "id": "6176c9d45e01f100091d4f94",
              "type": "registration-schemas"
            },
            "related": {
              "href": "https://api.osf.io/v2/schemas/registrations/6176c9d45e01f100091d4f94/",
              "meta": {}
            }
          }
        }
      },
      "type": "schema-blocks"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "next": null,
    "prev": null,
    "self": "https://api.osf.io/v2/schemas/registrations/6176c9d45e01f100091d4f94/schema_blocks/"
  },
  "meta": {
    "per_page": 10,
    "total": 3,
    "version": 2.2
  }
}
```

<h3 id="retrieve-a-list-of-registration-schema-blocks-for-a-schema-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a Registration Schema Block

> Code samples

```bash
curl https://example.com/schema_responses/string/schema_blocks/string \
  -H 'Accept: application/json'
```

`GET /schema_responses/{schema_response_id}/schema_blocks/{schema_response_block_id}`

This returns a Registration Schema Block by it's ID.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Registration Schemas, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-registration-schema-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schema_response_id|path|string|true|The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.|
|schema_response_block_id|path|string|true|The unique identifier of the Schema Response Block example `61b79f9eadbb5701424a2d5e`.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "block_type": "page-heading",
      "display_text": "Background and Study Intent",
      "help_text": "",
      "index": 0,
      "registration_response_key": null,
      "required": false,
      "schema_block_group_key": ""
    },
    "id": "61b79f9eadbb5701424a2d5e",
    "links": {
      "self": "https://api.osf.io/v2/schema_responses/61b79f9eadbb5701424a2d5e/"
    },
    "relationships": {
      "schema": {
        "links": {
          "data": {
            "id": "6176c9d45e01f100091d4f94",
            "type": "registration-schemas"
          },
          "related": {
            "href": "https://api.osf.io/v2/schemas/registrations/6176c9d45e01f100091d4f94/",
            "meta": {}
          }
        }
      }
    },
    "type": "schema-blocks"
  }
}
```

<h3 id="retrieve-a-registration-schema-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-schema-responses">Schema Responses</h1>

Schema Responses contain user supplied responses to a Registration Schema. A Schema Response aggregates all of the the responses for a given version of a Registration's Registration Schema. Schema Responses are created when a Registration is completed. Once a Registration is completed the Schema Responses for a Registration can be revisied and updated by using it's associated action endpoints.

There are a few states for Schema Responses:

  - `initial` is the state of a Schema Response on a newly registered Registration, to edit a Schema Response you
  must create a Schema Response Action that triggers a new submission.

  - `in_progess` is the state of a Schema Response where the response is editable and still private, Schema
  Responses are editted via a PATCH request as specified below.

  - `unapproved` is the state of a Schema Response where edits have been made and "locked-in", now contributors
  have the ability to reject the changes, however if they are not rejected changes are automatically approved
  after 48 hours. If `unapproved` Schema Responses are rejected, they are returned to the `in_progress` state. If
  `unapproved` Schema Responses are approved they either enter an `approved` state or go into a
  `pending_moderation` to be accepted or denied by a moderator.

  - `pending_moderation` is the state of a Schema Response where moderators have an opportunity to reject or
  approve a Schema Response that has been approved by it's contributors. This state is only reachable for Schema
  Responses that are associated with a Registration that has Registration Provider a moderated workflow.

  - `approved` is the state of a Schema Response where it is public and immutable, in order to update an approved
  Schema Response a new one must be created.

## List all Schema Responses

<a id="opIdschema_responses_list"></a>

> Code samples

```bash
curl https://example.com/schema_responses/ \
  -H 'Accept: application/json'
```

`GET /schema_responses/`

This retrieves a paginated list of all active Schema Responses that are public.
#### Returns
Returns a JSON object containing `data` and `links` keys. The `data` key contains an array of 10 Schema Responses. Each resource in the array is a separate Registration Schemas object. The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "date_created": "2021-12-13T19:31:42.058Z",
        "date_modified": "2021-12-13T19:53:05.015Z",
        "date_submitted": "2021-12-13T19:53:02.837Z",
        "is_original_response": false,
        "is_pending_current_user_approval": false,
        "reviews_state": "approved",
        "revision_justification": "I made a mistake",
        "revision_responses": {
          "q1": "Answer 1",
          "q2": "Answer 2"
        }
      },
      "id": "61b79f9eadbb5701424a2d5e",
      "relationships": {
        "actions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/schema_responses/61b79f9eadbb5701424a2d5e/actions/",
              "meta": {}
            }
          }
        },
        "initiated_by": {
          "links": {
            "data": {
              "id": "swrv7",
              "type": "users"
            },
            "related": {
              "href": "https://api.osf.io/v2/users/swrv7/",
              "meta": {}
            }
          }
        },
        "registration": {
          "links": {
            "data": {
              "id": "jxtek",
              "type": "registration"
            },
            "related": {
              "href": "https://api.osf.io/v2/registrations/jxtek/",
              "meta": {}
            }
          }
        },
        "registration_schema": {
          "links": {
            "data": {
              "id": "5e795fc0d2833800195735d0",
              "type": "registration-schemas"
            },
            "related": {
              "href": "https://api.osf.io/v2/schemas/registrations/5e795fc0d2833800195735d0/",
              "meta": {}
            }
          }
        }
      },
      "type": "registration-schemas"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "next": null,
    "prev": null,
    "self": "https://api.test.osf.io/v2/schema_responses/"
  },
  "meta": {
    "per_page": 10,
    "total": 1,
    "version": "2.20"
  }
}
```

<h3 id="list-all-schema-responses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new Schema Response

<a id="opIdschema_response_ppost"></a>

> Code samples

```bash
curl https://example.com/schema_responses/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": {
      "attributes": {
        "revision_justification": "I made a mistake.",
        "revision_responses": {
          "Q1": "updated response"
        }
      },
      "type": "schema-responses"
    }
  }'
```

`POST /schema_responses/`

This endpoint creates a new Schema Response with an `in_progress` state. A new response can only be created if the current schema response is in an `approved` state.
#### Returns
Returns a JSON object with a `data` key containing an updated representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "revision_justification": "I made a mistake.",
      "revision_responses": {
        "Q1": "updated response"
      }
    },
    "type": "schema-responses"
  }
}
```

<h3 id="create-a-new-schema-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» attributes|body|object|true|The properties of the Schema Response.|
|» » date_created|body|integer|false|The date the Schema Response was created|
|» » date_modified|body|integer|false|The date the Schema Response was most recently changed.|
|» » date_submitted|body|integer|false|The date the Schema Response was submitted for approval.|
|» » is_original_response|body|boolean|false|A bool that represents whether the Schema Response is the original one that was made when the registration was created.|
|» » is_pending_current_user_approval|body|boolean|false|A bool that represents whether the Schema Response needs the current user to approve the state transition.|
|» » reviews_state|body|string|false|A string that represents Schema Response state. `initial` is the state of a Schema Response on a newly registered Registration, to edit a Schema Response you must create a Schema Response Action that triggers a new submission.|
|» » revision_justification|body|string|false|A user provided string representing the reason a new Schema Response was needed.|
|» » revision_responses|body|object|false|A dictionary object representing responses to to the revision where the key is the block key for that the response. For example in the registration response `{"q1": "Answer 1"}` the block key is `q1`..|
|» links|body|object|false|URLs to alternative representations of the Schema Response entity.|
|» » self|body|string(URL)|false|A link to the detail page for a Schema Response.|
|» relationships|body|object|false|Links to other entities or entity collections that have a relationship to the file entity.|
|» » actions|body|string(URL)|false|A link to the Registration Schema Actions endpoint for this Schema Response.|
|» » initiated_by|body|string(URL)|false|A link to the User who initiated the creation of the Schema Response.|
|» » registration|body|string(URL)|false|A link to the Registration for this Schema Response.|
|» » registration_schema|body|string(URL)|false|A link to the Registration Schema for this Schema Response.|
|» type|body|string|true|The type identifier of the Schema Response (`schema-response`).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » reviews_state|initial|
|» » reviews_state|in_progress|
|» » reviews_state|approved|
|» » reviews_state|pending_moderation|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "date_created": "2021-12-21T14:10:32.665084",
      "date_modified": "2021-12-21T14:10:32.665111",
      "date_submitted": null,
      "reviews_state": "in_progress",
      "revision_justification": "",
      "revision_responses": {
        "summary": "A summary of what is contained in this registration.",
        "uploader": []
      },
      "updated_response_keys": []
    },
    "id": "61c1e058e88376000a90e5dd",
    "links": {
      "self": "https://api.osf.io/v2/schema_responses/61c1e058e88376000a90e5dd/"
    },
    "relationships": {
      "actions": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/schema_responses/61c1e058e88376000a90e5dd/actions/",
            "meta": {}
          }
        }
      },
      "initiated_by": {
        "data": {
          "id": "zpw9n",
          "type": "users"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/zpw9n/",
            "meta": {}
          }
        }
      },
      "registration": {
        "data": {
          "id": "e4ygz",
          "type": "registrations"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/e4ygz/",
            "meta": {}
          }
        }
      },
      "registration_schema": {
        "data": {
          "id": "5e13965879bee100010a790f",
          "type": "registration-schemas"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/schemas/registrations/5e13965879bee100010a790f/",
            "meta": {}
          }
        }
      }
    },
    "type": "schema-responses"
  },
  "meta": {
    "version": "2.0"
  }
}
```

<h3 id="create-a-new-schema-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a Schema Response

<a id="opIdschema_responses_read"></a>

> Code samples

```bash
curl https://example.com/schema_responses/string \
  -H 'Accept: application/json'
```

`GET /schema_responses/{schema_response_id}`

This retrieves a single Schema response using it's id.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-schema-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schema_response_id|path|string|true|The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "date_created": "2021-12-13T19:31:42.058Z",
      "date_modified": "2021-12-13T19:53:05.015Z",
      "date_submitted": "2021-12-13T19:53:02.837Z",
      "is_original_response": false,
      "is_pending_current_user_approval": false,
      "reviews_state": "approved",
      "revision_justification": "I made a mistake",
      "revision_responses": {
        "q1": "Answer 1",
        "q2": "Answer 2"
      }
    },
    "id": "61b79f9eadbb5701424a2d5e",
    "links": {
      "self": "https://api.osf.io/v2/schema_responses/61b79f9eadbb5701424a2d5e/"
    },
    "relationships": {
      "actions": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/schema_responses/61b79f9eadbb5701424a2d5e/actions/",
            "meta": {}
          }
        }
      },
      "initiated_by": {
        "links": {
          "data": {
            "id": "swrv7",
            "type": "users"
          },
          "related": {
            "href": "https://api.osf.io/v2/users/swrv7/",
            "meta": {}
          }
        }
      },
      "registration": {
        "links": {
          "data": {
            "id": "jxtek",
            "type": "registration"
          },
          "related": {
            "href": "https://api.osf.io/v2/registrations/jxtek/",
            "meta": {}
          }
        }
      },
      "registration_schema": {
        "links": {
          "data": {
            "id": "5e795fc0d2833800195735d0",
            "type": "registration-schemas"
          },
          "related": {
            "href": "https://api.osf.io/v2/schemas/registrations/5e795fc0d2833800195735d0/",
            "meta": {}
          }
        }
      }
    },
    "type": "registration-schemas"
  }
}
```

<h3 id="retrieve-a-schema-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Incomplete Schema Response

<a id="opIdschema_response_delete"></a>

> Code samples

```bash
curl https://example.com/schema_responses/string \
  -X DELETE
```

`DELETE /schema_responses/{schema_response_id}`

This endpoint deletes a new Schema Response. Schema Responses can only be deleted in the `in_progress` state. Once a Schema Response is transitioned to an `approved` it is immutable and another Schema Response must be created to update the Schema Response for that registration.
#### Returns
Returns a JSON object with a `data` key containing an updated representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="delete-a-incomplete-schema-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schema_response_id|path|string|true|The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.|

<h3 id="delete-a-incomplete-schema-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Registration's Schema Response

<a id="opIdschema_response_patch"></a>

> Code samples

```bash
curl https://example.com/schema_responses/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": {
      "attributes": {
        "revision_justification": "I made a mistake.",
        "revision_responses": {
          "Q1": "updated response"
        }
      },
      "type": "schema-responses"
    }
  }'
```

`PATCH /schema_responses/{schema_response_id}`

Patching to this endpoint allows one to directly edit the revision responses on the Schema Response of a Registration if that Schema Response is in an `in_progress` state.
#### Returns
Returns a JSON object with a `data` key containing an updated representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "revision_justification": "I made a mistake.",
      "revision_responses": {
        "Q1": "updated response"
      }
    },
    "type": "schema-responses"
  }
}
```

<h3 id="update-a-registrations-schema-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schema_response_id|path|string|true|The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.|
|body|body|object|true|none|
|» attributes|body|object|true|The properties of the Schema Response.|
|» » date_created|body|integer|false|The date the Schema Response was created|
|» » date_modified|body|integer|false|The date the Schema Response was most recently changed.|
|» » date_submitted|body|integer|false|The date the Schema Response was submitted for approval.|
|» » is_original_response|body|boolean|false|A bool that represents whether the Schema Response is the original one that was made when the registration was created.|
|» » is_pending_current_user_approval|body|boolean|false|A bool that represents whether the Schema Response needs the current user to approve the state transition.|
|» » reviews_state|body|string|false|A string that represents Schema Response state. `initial` is the state of a Schema Response on a newly registered Registration, to edit a Schema Response you must create a Schema Response Action that triggers a new submission.|
|» » revision_justification|body|string|false|A user provided string representing the reason a new Schema Response was needed.|
|» » revision_responses|body|object|false|A dictionary object representing responses to to the revision where the key is the block key for that the response. For example in the registration response `{"q1": "Answer 1"}` the block key is `q1`..|
|» links|body|object|false|URLs to alternative representations of the Schema Response entity.|
|» » self|body|string(URL)|false|A link to the detail page for a Schema Response.|
|» relationships|body|object|false|Links to other entities or entity collections that have a relationship to the file entity.|
|» » actions|body|string(URL)|false|A link to the Registration Schema Actions endpoint for this Schema Response.|
|» » initiated_by|body|string(URL)|false|A link to the User who initiated the creation of the Schema Response.|
|» » registration|body|string(URL)|false|A link to the Registration for this Schema Response.|
|» » registration_schema|body|string(URL)|false|A link to the Registration Schema for this Schema Response.|
|» type|body|string|true|The type identifier of the Schema Response (`schema-response`).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » reviews_state|initial|
|» » reviews_state|in_progress|
|» » reviews_state|approved|
|» » reviews_state|pending_moderation|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "date_created": "2021-12-13T19:31:42.058Z",
      "date_modified": "2021-12-13T19:53:05.015Z",
      "date_submitted": "2021-12-13T19:53:02.837Z",
      "is_original_response": false,
      "is_pending_current_user_approval": false,
      "reviews_state": "in_progress",
      "revision_justification": "I made a mistake",
      "revision_responses": {
        "q1": "updated respons",
        "q2": "Answer 2"
      }
    },
    "id": "61b79f9eadbb5701424a2d5e",
    "links": {
      "self": "https://api.osf.io/v2/schema_responses/61b79f9eadbb5701424a2d5e/"
    },
    "relationships": {
      "actions": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/schema_responses/61b79f9eadbb5701424a2d5e/actions/",
            "meta": {}
          }
        }
      },
      "initiated_by": {
        "links": {
          "data": {
            "id": "swrv7",
            "type": "users"
          },
          "related": {
            "href": "https://api.osf.io/v2/users/swrv7/",
            "meta": {}
          }
        }
      },
      "registration": {
        "links": {
          "data": {
            "id": "jxtek",
            "type": "registration"
          },
          "related": {
            "href": "https://api.osf.io/v2/registrations/jxtek/",
            "meta": {}
          }
        }
      },
      "registration_schema": {
        "links": {
          "data": {
            "id": "5e795fc0d2833800195735d0",
            "type": "registration-schemas"
          },
          "related": {
            "href": "https://api.osf.io/v2/schemas/registrations/5e795fc0d2833800195735d0/",
            "meta": {}
          }
        }
      }
    },
    "type": "registration-schemas"
  }
}
```

<h3 id="update-a-registrations-schema-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-schema-response-actions">Schema Response Actions</h1>

Schema Response Actions are objects that when created cause state transitions for Schema Responses. Users use state transitions to submit, approve, and revise new Schema Responses.

Schema Response Actions have a  few different triggers to cause state transitions:

  - `submit` is a trigger to transition a Schema Response from an `in_progress` state to an `unapproved` state,
  this freezes edits for the Schema Response and allows all admin contributors to the Schema Response's
  Registration to either approved or reject the Schema Response.

  - `approve` is a trigger to transition a Schema Response from an `unapproved` state to an `approved` state, this
  makes the Schema Response changes public completing the update of the Schema Response. On Schema Responses that
  are associated with a Registration that has Registration Provider a moderated workflow the `approve` trigger
  will transition the Schema Response to `pending_moderation`.

  - `accept` is a trigger to transition a Schema Response from an `pending_moderation` state to an `approved`
  state. This trigger is only valid for Schema Responses that are associated with a Registration that has
  Registration Provider a moderated workflow and only possible for a user designated as moderator of a
  Registration Provider.

  - `admin_reject` is a trigger to transition a Schema Response from an `unapproved` state to an
  `in_progress`  state. This trigger allows users to reject purposed changes to a Schema Response.

  - `moderator_reject` is a trigger to transition a Schema Response from an `pending_moderation` state to an
  `in_progress`  state. This trigger is only valid for Schema Responses that are associated with a Registration
  that has Registration Provider a moderated workflow and only possible for a user designated as moderator of a
  Registration Provider.

## Retrieve a list of Schema Response Actions for a Schema Response

<a id="opIdschema_response_action_read"></a>

> Code samples

```bash
curl https://example.com/schema_responses/string/actions/ \
  -H 'Accept: application/json'
```

`GET /schema_responses/{schema_response_id}/actions/`

This retrieves a paginated list of all Schema Response Actions created for a Schema Response.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Schema Response Actions, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-list-of-schema-response-actions-for-a-schema-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schema_response_id|path|string|true|The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "auto": false,
        "comment": "",
        "date_created": "2021-12-15T13:17:21.845573Z",
        "date_modified": "2021-12-15T13:17:21.845622Z",
        "from_state": "in_progress",
        "to_state": "unapproved",
        "trigger": "submit",
        "visible": true
      },
      "embeds": {
        "creator": {
          "data": {
            "attributes": {
              "active": true,
              "date_registered": "2017-02-02T21:32:45.495000Z",
              "education": [],
              "employment": [
                {
                  "department": "Social Neuroscience Lab",
                  "endMonth": 0,
                  "endYear": "",
                  "institution": "Institute of Psychology, Polish Academy of Sciences",
                  "ongoing": true,
                  "startMonth": 9,
                  "startYear": "2016",
                  "title": "Head"
                }
              ],
              "family_name": "Okruszek",
              "full_name": "Lukasz Okruszek",
              "given_name": "Łukasz",
              "locale": "pl",
              "middle_names": "",
              "social": {
                "academiaInstitution": "",
                "academiaProfileID": "",
                "baiduScholar": "",
                "github": [],
                "impactStory": "",
                "linkedIn": [],
                "orcid": "0000-0002-7136-2864",
                "profileWebsites": [],
                "researchGate": "Lukasz-Okruszek",
                "researcherId": "",
                "scholar": "CHyWD84AAAAJ&amp;hl",
                "ssrn": "",
                "twitter": []
              },
              "suffix": "",
              "timezone": "Europe/Budapest"
            },
            "id": "zfsr2",
            "links": {
              "html": "https://osf.io/zfsr2/",
              "profile_image": "https://secure.gravatar.com/avatar/8a25f4601ac997f113b3145aa5cf907e?d=identicon",
              "self": "https://api.osf.io/v2/users/zfsr2/"
            },
            "relationships": {
              "groups": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/zfsr2/groups/",
                    "meta": {}
                  }
                }
              },
              "institutions": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/zfsr2/institutions/",
                    "meta": {}
                  },
                  "self": {
                    "href": "https://api.osf.io/v2/users/zfsr2/relationships/institutions/",
                    "meta": {}
                  }
                }
              },
              "nodes": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/zfsr2/nodes/",
                    "meta": {}
                  }
                }
              },
              "preprints": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/zfsr2/preprints/",
                    "meta": {}
                  }
                }
              },
              "quickfiles": {
                "links": {
                  "download": {
                    "href": "https://files.osf.io/v1/resources/ytg45jbs3r/providers/osfstorage/?zip=",
                    "meta": {}
                  },
                  "related": {
                    "href": "https://api.osf.io/v2/users/zfsr2/quickfiles/",
                    "meta": {}
                  },
                  "upload": {
                    "href": "https://files.osf.io/v1/resources/ytg45jbs3r/providers/osfstorage/",
                    "meta": {}
                  }
                }
              },
              "registrations": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/zfsr2/registrations/",
                    "meta": {}
                  }
                }
              }
            },
            "type": "users"
          }
        }
      },
      "id": "61b9eae1a7d8ac025c4c46d3",
      "links": {
        "self": "https://api.osf.io/v2/actions/61b9eae1a7d8ac025c4c46d3/"
      },
      "relationships": {
        "creator": {
          "data": {
            "id": "zfsr2",
            "type": "users"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/zfsr2/",
              "meta": {}
            }
          }
        },
        "target": {
          "data": {
            "id": "61b9cd62eb66180215222669",
            "type": "schema_responses"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/schema_responses/61b9cd62eb66180215222669/",
              "meta": {}
            }
          }
        }
      },
      "type": "schema-response-actions"
    },
    {
      "attributes": {
        "auto": false,
        "comment": "",
        "date_created": "2021-12-15T13:17:37.195568Z",
        "date_modified": "2021-12-15T13:17:37.195597Z",
        "from_state": "unapproved",
        "to_state": "approved",
        "trigger": "approve",
        "visible": true
      },
      "embeds": {
        "creator": {
          "data": {
            "attributes": {
              "active": true,
              "date_registered": "2017-02-02T21:32:45.495000Z",
              "education": [],
              "employment": [
                {
                  "department": "Denfense",
                  "endMonth": 0,
                  "endYear": "",
                  "institution": "Institute of the Stars",
                  "ongoing": true,
                  "startMonth": 9,
                  "startYear": "2017",
                  "title": "Developer"
                }
              ],
              "family_name": "User",
              "full_name": "Test User",
              "given_name": "Test",
              "locale": "pl",
              "middle_names": "",
              "social": {
                "academiaInstitution": "",
                "academiaProfileID": "",
                "baiduScholar": "",
                "github": [],
                "impactStory": "",
                "linkedIn": [],
                "orcid": "0000-0002-7136-286X",
                "profileWebsites": [],
                "researchGate": "test-user",
                "researcherId": "",
                "scholar": "",
                "ssrn": "",
                "twitter": []
              },
              "suffix": "",
              "timezone": "Europe/Budapest"
            },
            "id": "zfsr2",
            "links": {
              "html": "https://osf.io/zfsr2/",
              "profile_image": "https://secure.gravatar.com/avatar/8a25f4601ac997f113b3145aa5cf907e?d=identicon",
              "self": "https://api.osf.io/v2/users/sfsr2/"
            },
            "relationships": {
              "groups": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/sfsr2/groups/",
                    "meta": {}
                  }
                }
              },
              "institutions": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/sfsr2/institutions/",
                    "meta": {}
                  },
                  "self": {
                    "href": "https://api.osf.io/v2/users/sfsr2/relationships/institutions/",
                    "meta": {}
                  }
                }
              },
              "nodes": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/sfsr2/nodes/",
                    "meta": {}
                  }
                }
              },
              "preprints": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/sfsr2/preprints/",
                    "meta": {}
                  }
                }
              },
              "quickfiles": {
                "links": {
                  "download": {
                    "href": "https://files.osf.io/v1/resources/ytg45jbs3r/providers/osfstorage/?zip=",
                    "meta": {}
                  },
                  "related": {
                    "href": "https://api.osf.io/v2/users/sfsr2/quickfiles/",
                    "meta": {}
                  },
                  "upload": {
                    "href": "https://files.osf.io/v1/resources/ytg45jbs3r/providers/osfstorage/",
                    "meta": {}
                  }
                }
              },
              "registrations": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/sfsr2/registrations/",
                    "meta": {}
                  }
                }
              }
            },
            "type": "users"
          }
        }
      },
      "id": "61b9eaf13cddaa026ef7245d",
      "links": {
        "self": "https://api.osf.io/v2/actions/61b9eaf13cddaa026ef7245d/"
      },
      "relationships": {
        "creator": {
          "data": {
            "id": "zfsr2",
            "type": "users"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/zfsr2/",
              "meta": {}
            }
          }
        },
        "target": {
          "data": {
            "id": "61b9cd62eb66180215222669",
            "type": "schema_responses"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/schema_responses/61b9cd62eb66180215222669/",
              "meta": {}
            }
          }
        }
      },
      "type": "schema-response-actions"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "next": null,
    "prev": null,
    "self": "https://api.osf.io/v2/schema_responses/61b9cd62eb66180215222669/actions/"
  },
  "meta": {
    "per_page": 10,
    "total": 2,
    "version": "2.20"
  }
}
```

<h3 id="retrieve-a-list-of-schema-response-actions-for-a-schema-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new Schema Response Action

> Code samples

```bash
curl https://example.com/schema_responses/string/actions/ \
  -X POST
```

`POST /schema_responses/{schema_response_id}/actions/`

This creates a new Schema Response Action in order to trigger a state transition for a Schema Response.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Schema Response Actions, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="create-a-new-schema-response-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schema_response_id|path|string|true|The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.|

<h3 id="create-a-new-schema-response-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## A Schema Response Action from a Schema Response

> Code samples

```bash
curl https://example.com/schema_responses/string/actions/string \
  -H 'Accept: application/json'
```

`GET /schema_responses/{schema_response_id}/actions/{schema_response_action_id}`

Retrieves a Schema Response Action by it's ID.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Schema Response Actions, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="a-schema-response-action-from-a-schema-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schema_response_id|path|string|true|The unique identifier of the Schema Response example `61b9cd62eb66180215222669`.|
|schema_response_action_id|path|string|true|The unique identifier of the Schema Response Action example `61b9eae1a7d8ac025c4c46d3`.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "auto": false,
      "comment": "",
      "date_created": "2021-12-15T13:17:21.845573Z",
      "date_modified": "2021-12-15T13:17:21.845622Z",
      "from_state": "in_progress",
      "to_state": "unapproved",
      "trigger": "submit",
      "visible": true
    },
    "embeds": {
      "creator": {
        "data": {
          "attributes": {
            "active": true,
            "date_registered": "2017-02-02T21:32:45.495000Z",
            "education": [],
            "employment": [
              {
                "department": "Social Neuroscience Lab",
                "endMonth": 0,
                "endYear": "",
                "institution": "Institute of Psychology, Polish Academy of Sciences",
                "ongoing": true,
                "startMonth": 9,
                "startYear": "2016",
                "title": "Head"
              }
            ],
            "family_name": "Okruszek",
            "full_name": "Lukasz Okruszek",
            "given_name": "Łukasz",
            "locale": "pl",
            "middle_names": "",
            "social": {
              "academiaInstitution": "",
              "academiaProfileID": "",
              "baiduScholar": "",
              "github": [],
              "impactStory": "",
              "linkedIn": [],
              "orcid": "0000-0002-7136-2864",
              "profileWebsites": [],
              "researchGate": "Lukasz-Okruszek",
              "researcherId": "",
              "scholar": "CHyWD84AAAAJ&amp;hl",
              "ssrn": "",
              "twitter": []
            },
            "suffix": "",
            "timezone": "Europe/Budapest"
          },
          "id": "zfsr2",
          "links": {
            "html": "https://osf.io/zfsr2/",
            "profile_image": "https://secure.gravatar.com/avatar/8a25f4601ac997f113b3145aa5cf907e?d=identicon",
            "self": "https://api.osf.io/v2/users/zfsr2/"
          },
          "relationships": {
            "groups": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/zfsr2/groups/",
                  "meta": {}
                }
              }
            },
            "institutions": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/zfsr2/institutions/",
                  "meta": {}
                },
                "self": {
                  "href": "https://api.osf.io/v2/users/zfsr2/relationships/institutions/",
                  "meta": {}
                }
              }
            },
            "nodes": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/zfsr2/nodes/",
                  "meta": {}
                }
              }
            },
            "preprints": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/zfsr2/preprints/",
                  "meta": {}
                }
              }
            },
            "quickfiles": {
              "links": {
                "download": {
                  "href": "https://files.osf.io/v1/resources/ytg45jbs3r/providers/osfstorage/?zip=",
                  "meta": {}
                },
                "related": {
                  "href": "https://api.osf.io/v2/users/zfsr2/quickfiles/",
                  "meta": {}
                },
                "upload": {
                  "href": "https://files.osf.io/v1/resources/ytg45jbs3r/providers/osfstorage/",
                  "meta": {}
                }
              }
            },
            "registrations": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/zfsr2/registrations/",
                  "meta": {}
                }
              }
            }
          },
          "type": "users"
        }
      },
      "links": {
        "self": "https://api.osf.io/v2/actions/61b9eae1a7d8ac025c4c46d3/"
      }
    },
    "id": "61b9eae1a7d8ac025c4c46d3",
    "relationships": {
      "creator": {
        "data": {
          "id": "zfsr2",
          "type": "users"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/zfsr2/",
            "meta": {}
          }
        }
      },
      "target": {
        "data": {
          "id": "61b9cd62eb66180215222669",
          "type": "schema_responses"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/schema_responses/61b9cd62eb66180215222669/",
            "meta": {}
          }
        }
      }
    },
    "type": "schema-response-actions"
  },
  "links": {
    "first": null,
    "last": null,
    "next": null,
    "prev": null,
    "self": "https://api.osf.io/v2/schema_responses/61b9cd62eb66180215222669/actions/"
  },
  "meta": {
    "per_page": 10,
    "total": 2,
    "version": "2.20"
  }
}
```

<h3 id="a-schema-response-action-from-a-schema-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-draft-registrations">Draft Registrations</h1>


A Draft Registration is a object that allows a user to edit and revise a registration before it is registered. Draft Registrations allow contributors to coordinate on a single registration, so they can upload files and change Registration metadata before the Registration is archived.

## Retrieve a list of Draft Registrations

<a id="opIddraft_registrations_read"></a>

> Code samples

```bash
curl https://example.com/draft_registrations/ \
  -H 'Accept: application/json'
```

`GET /draft_registrations/`

Retrieve a list of all currently available Draft Registrations for that user.
#### Permissions
Only Draft Registration contributors may view draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "",
        "current_user_permissions": [
          "admin",
          "write",
          "read"
        ],
        "datetime_initiated": "2022-04-21T14:56:05.674349Z",
        "datetime_updated": "2022-04-21T14:56:05.908546Z",
        "description": "Test",
        "has_project": false,
        "node_license": null,
        "registration_metadata": {},
        "registration_responses": {},
        "tags": [],
        "title": "Test Draft"
      },
      "id": "626170854968470203611e2c",
      "links": {
        "self": "https://api.osf.io/v2/draft_registrations/626170854968470203611e2c/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/draft_registrations/626170854968470203611e2c/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/draft_registrations/626170854968470203611e2c/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "bibliographic_contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/draft_registrations/626170854968470203611e2c/bibliographic_contributors/",
              "meta": {}
            }
          }
        },
        "branched_from": {
          "data": {
            "id": "yt5fw",
            "type": "draft_nodes"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/draft_nodes/yt5fw/",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/draft_registrations/626170854968470203611e2c/contributors/",
              "meta": {}
            }
          }
        },
        "initiator": {
          "data": {
            "id": "gyht4",
            "type": "users"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/gyht4/",
              "meta": {}
            }
          }
        },
        "license": {
          "data": null
        },
        "provider": {
          "data": {
            "id": "osf",
            "type": "registration-providers"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/providers/registrations/osf/",
              "meta": {}
            }
          }
        },
        "registration_schema": {
          "data": {
            "id": "5e795fc0d2833800195735d0",
            "type": "registration-schemas"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/schemas/registrations/5e795fc0d2833800195735d0/",
              "meta": {}
            }
          }
        },
        "subjects": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/draft_registrations/626170854968470203611e2c/subjects/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/draft_registrations/626170854968470203611e2c/relationships/subjects/",
              "meta": {}
            }
          }
        }
      },
      "type": "draft-registrations"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "next": null,
    "prev": null,
    "self": "https://api.osf.io/v2/draft_registrations/"
  },
  "meta": {
    "per_page": 10,
    "total": 1,
    "version": "2.20"
  }
}
```

<h3 id="retrieve-a-list-of-draft-registrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Draft Registration

<a id="opIddraft_registrations_create"></a>

> Code samples

```bash
curl https://example.com/draft_registrations/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": {
      "relationships": {
        "registration_schema": {
          "data": {
            "id": "61e02b6c90de34000ae3447a",
            "type": "registration_schemas"
          }
        }
      },
      "type": "draft_registrations"
    }
  }'
```

`POST /draft_registrations/`

This creates a Draft Registration that can be used to edit and register research.
Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.
A Draft Registration created by this endpoint will not have a Project linked with it by default, but if the user includes a `branched_from` attribute in their Draft Registration creation payload with the value of the `branched_from` being guid of a Project they have permissions for the Draft Registration will be linked to the Project. If you linked your Draft Registration on a Project, your original Project remains editable and will now have the Draft Registration linked to it. 
#### Permissions
Any user can create a Draft Registration. If the `branched_from` attribute is provided, then the user must be an ADMIN contributor on the Project being registered.
#### Required
Required fields for creating a Draft Registration include:

&nbsp;&nbsp;&nbsp;&nbsp;`schema_id`
#### Returns
Returns a JSON object with a `data` key containing the representation of the created Draft Registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "relationships": {
      "registration_schema": {
        "data": {
          "id": "61e02b6c90de34000ae3447a",
          "type": "registration_schemas"
        }
      }
    },
    "type": "draft_registrations"
  }
}
```

<h3 id="create-a-draft-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» attributes|body|object|true|The properties of the Draft Registration entity.|
|» » category|body|string|false|The category of the Draft Registration.|
|» » description|body|string|false|The description of the Draft Registration.|
|» » node_license|body|object|false|none|
|» » » copyright_holders|body|[string]|false|A list of names of copyright holders for the license.|
|» » » year|body|integer|false|The year the copyright was made.|
|» » registration_metadata|body|object|false|This is a legacy format for `registration_responses`.|
|» » registration_responses|body|object|false|A dictionary of question IDs and responses from the registration schema.|
|» » tags|body|[string]|false|The searchable tags of the Draft Registration.|
|» » title|body|string|false|The title of the Draft Registration.|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "category": "",
      "datetime_initiated": "2022-05-03T17:03:50.288542",
      "datetime_updated": "2022-05-03T17:03:50.560153",
      "description": "",
      "node_license": null,
      "registration_metadata": {},
      "registration_responses": {},
      "tags": [],
      "title": "Untitled"
    },
    "id": "62716076d90ebe0017f2bf42",
    "links": {
      "self": "https://api.osf.io/v2/draft_registrations/62716076d90ebe0017f2bf42/"
    },
    "relationships": {
      "affiliated_institutions": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/draft_registrations/62716076d90ebe0017f2bf42/institutions/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/draft_registrations/62716076d90ebe0017f2bf42/relationships/institutions/",
            "meta": {}
          }
        }
      },
      "branched_from": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/draft_nodes/nmj5w/",
            "meta": {}
          }
        }
      },
      "contributors": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/draft_registrations/62716076d90ebe0017f2bf42/contributors/",
            "meta": {}
          }
        }
      },
      "initiator": {
        "data": {
          "id": "fgvc6",
          "type": "users"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/fgvc6/",
            "meta": {}
          }
        }
      },
      "provider": {
        "data": {
          "id": "osf",
          "type": "registration-providers"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/providers/registrations/osf/",
            "meta": {}
          }
        }
      },
      "registration_schema": {
        "data": {
          "id": "61e02b6c90de34000ae3447a",
          "type": "registration-schemas"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/schemas/registrations/61e02b6c90de34000ae3447a/",
            "meta": {}
          }
        }
      },
      "subjects": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/draft_registrations/62716076d90ebe0017f2bf42/subjects/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/draft_registrations/62716076d90ebe0017f2bf42/relationships/subjects/",
            "meta": {}
          }
        }
      }
    },
    "type": "draft_registrations"
  },
  "meta": {
    "version": "2.0"
  }
}
```

<h3 id="create-a-draft-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a Draft Registration

> Code samples

```bash
curl https://example.com/draft_registrations/string/ \
  -H 'Accept: application/json'
```

`GET /draft_registrations/{draft_id}/`

Retrieve the details of a given Draft Registration
Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.

If you based your Draft Registration on a Project, your original Project remains editable but will now have the Draft Registration linked to it.
#### Permissions
Only draft registration contributors may view draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-draft-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|draft_id|path|string|true|The unique identifier of the draft registration.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "category": "",
      "datetime_initiated": "2022-05-02T15:43:22.981108Z",
      "datetime_updated": "2022-05-03T13:08:47.334711Z",
      "description": "",
      "node_license": null,
      "registration_metadata": {},
      "registration_responses": {},
      "tags": [],
      "title": "Untitled"
    },
    "id": "626ffc1ad90ebe0011fc7601",
    "links": {
      "self": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/"
    },
    "relationships": {
      "affiliated_institutions": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/institutions/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/relationships/institutions/",
            "meta": {}
          }
        }
      },
      "branched_from": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/draft_nodes/ng4w2/",
            "meta": {}
          }
        }
      },
      "contributors": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/contributors/",
            "meta": {}
          }
        }
      },
      "initiator": {
        "data": {
          "id": "fgvc6",
          "type": "users"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/fgvc6/",
            "meta": {}
          }
        }
      },
      "license": {
        "data": null
      },
      "provider": {
        "data": {
          "id": "osf",
          "type": "registration-providers"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/providers/registrations/osf/",
            "meta": {}
          }
        }
      },
      "registration_schema": {
        "data": {
          "id": "61e02b6c90de34000ae3447a",
          "type": "registration-schemas"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/schemas/registrations/61e02b6c90de34000ae3447a/",
            "meta": {}
          }
        }
      },
      "subjects": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/subjects/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/relationships/subjects/",
            "meta": {}
          }
        }
      }
    },
    "type": "draft-registrations"
  },
  "meta": {
    "version": "2.20"
  }
}
```

<h3 id="retrieve-a-draft-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a draft registration

> Code samples

```bash
curl https://example.com/draft_registrations/string/ \
  -X DELETE
```

`DELETE /draft_registrations/{draft_id}/`

Permanently deletes a draft registration. A draft that has already been registered cannot be deleted.
#### Permissions
Only draft registration contributors with ADMIN permissions may delete draft registrations
#### Returns
If the request is successful, no content is returned.
If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

<h3 id="delete-a-draft-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|draft_id|path|string|true|The unique identifier of the draft registration.|

<h3 id="delete-a-draft-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Draft Registration

> Code samples

```bash
curl https://example.com/draft_registrations/string/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": {
      "attributes": {
        "registration_responses": {
          "summary": "Test Value"
        },
        "title": "test title change"
      },
      "id": "626ffc1ad90ebe0011fc7601",
      "type": "draft_registrations"
    }
  }'
```

`PATCH /draft_registrations/{draft_id}/`

Updates a Draft Registration by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged. Note this will not register or change the machine state of a Draft Registration, it can only edit the Draft Registration's attributes prior to its registration.
#### Permissions
Only draft registration contributors may view draft registrations and only draft registration contributors with WRITE or ADMIN permissions may update draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated draft registration, if the request is successful.
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "registration_responses": {
        "summary": "Test Value"
      },
      "title": "test title change"
    },
    "id": "626ffc1ad90ebe0011fc7601",
    "type": "draft_registrations"
  }
}
```

<h3 id="update-a-draft-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|draft_id|path|string|true|The unique identifier of the draft registration.|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "category": "",
      "datetime_initiated": "2022-05-02T15:43:22.981108",
      "datetime_updated": "2022-05-03T18:34:29.504428",
      "description": "",
      "node_license": "None",
      "registration_metadata": {
        "summary": {
          "comments": [],
          "extra": [],
          "value": "Test"
        },
        "uploader": {
          "comments": [],
          "extra": [],
          "value": ""
        }
      },
      "registration_responses": {
        "summary": "Test Value"
      },
      "tags": [],
      "title": "test title change"
    },
    "id": "626ffc1ad90ebe0011fc7601",
    "links": {
      "self": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/"
    },
    "relationships": {
      "affiliated_institutions": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/institutions/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/relationships/institutions/",
            "meta": {}
          }
        }
      },
      "branched_from": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/draft_nodes/ng4w2/",
            "meta": {}
          }
        }
      },
      "contributors": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/contributors/",
            "meta": {}
          }
        }
      },
      "initiator": {
        "data": {
          "id": "fgvc6",
          "type": "users"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/fgvc6/",
            "meta": {}
          }
        }
      },
      "provider": {
        "data": {
          "id": "osf",
          "type": "registration-providers"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/providers/registrations/osf/",
            "meta": {}
          }
        }
      },
      "registration_schema": {
        "data": {
          "id": "61e02b6c90de34000ae3447a",
          "type": "registration-schemas"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/schemas/registrations/61e02b6c90de34000ae3447a/",
            "meta": {}
          }
        }
      },
      "subjects": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/subjects/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/relationships/subjects/",
            "meta": {}
          }
        }
      }
    },
    "type": "draft_registrations"
  },
  "meta": {
    "version": "2.0"
  }
}
```

<h3 id="update-a-draft-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retreive a list Contributors from a Draft Registration

<a id="opIddraft_registration_contributors_list"></a>

> Code samples

```bash
curl https://example.com/draft_registrations/string/contributors/ \
  -H 'Accept: application/json'
```

`GET /draft_registrations/{draft_id}/contributors/`

Retrieves the details of all given Contributors for a Draft Registration.
Contributors are users who can make changes to the Draft Registration.
Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

<h3 id="retreive-a-list-contributors-from-a-draft-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|draft_id|path|string|true|The unique identifier of the Draft Registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "bibliographic": true,
        "index": 0,
        "permission": "admin",
        "unregistered_contributor": null
      },
      "embeds": {
        "users": {
          "data": {
            "attributes": {
              "accepted_terms_of_service": true,
              "active": true,
              "can_view_reviews": [],
              "date_registered": "2017-04-26T15:39:29.779518Z",
              "education": [],
              "employment": [],
              "family_name": "Tordoff",
              "full_name": "John Tordoff",
              "given_name": "John",
              "locale": "en_US",
              "middle_names": "",
              "social": {
                "academiaInstitution": "",
                "academiaProfileID": "",
                "baiduScholar": "",
                "github": [
                  "Johnetordoff"
                ],
                "impactStory": "",
                "linkedIn": [],
                "orcid": "0000-0001-8693-9390",
                "profileWebsites": [
                  "https://test.com"
                ],
                "researchGate": "",
                "researcherId": "",
                "scholar": "",
                "ssrn": "",
                "twitter": []
              },
              "suffix": "",
              "timezone": "America/New_York"
            },
            "id": "gyht4",
            "links": {
              "html": "https://osf.io/gyht4/",
              "profile_image": "https://secure.gravatar.com/avatar/a61b3827662ddbc604c78e1c8f6a3636?d=identicon",
              "self": "https://api.osf.io/v2/users/gyht4/"
            },
            "relationships": {
              "default_region": {
                "data": {
                  "id": "us",
                  "type": "regions"
                },
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/regions/us/",
                    "meta": {}
                  }
                }
              },
              "emails": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/gyht4/settings/emails/",
                    "meta": {}
                  }
                }
              },
              "groups": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/gyht4/groups/",
                    "meta": {}
                  }
                }
              },
              "institutions": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/gyht4/institutions/",
                    "meta": {}
                  },
                  "self": {
                    "href": "https://api.osf.io/v2/users/gyht4/relationships/institutions/",
                    "meta": {}
                  }
                }
              },
              "nodes": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/gyht4/nodes/",
                    "meta": {}
                  }
                }
              },
              "preprints": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/gyht4/preprints/",
                    "meta": {}
                  }
                }
              },
              "registrations": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/gyht4/registrations/",
                    "meta": {}
                  }
                }
              },
              "settings": {
                "data": {
                  "id": "gyht4",
                  "type": "user-settings"
                },
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/gyht4/settings/",
                    "meta": {}
                  }
                }
              }
            },
            "type": "users"
          }
        }
      },
      "id": "626170854968470203611e2c-gyht4",
      "links": {
        "self": "https://api.osf.io/v2/draft_registrations/626170854968470203611e2c/contributors/gyht4/"
      },
      "relationships": {
        "draft_registration": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/draft_registrations/626170854968470203611e2c/",
              "meta": {}
            }
          }
        },
        "users": {
          "data": {
            "id": "gyht4",
            "type": "users"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/gyht4/",
              "meta": {}
            }
          }
        }
      },
      "type": "contributors"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "next": null,
    "prev": null,
    "self": "https://api.osf.io/v2/draft_registrations/626170854968470203611e2c/contributors/"
  },
  "meta": {
    "per_page": 10,
    "total": 1,
    "total_bibliographic": 1,
    "version": "2.20"
  }
}
```

<h3 id="retreive-a-list-contributors-from-a-draft-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a contributor to a Draft Registration

<a id="opIddraft_registration_contributors_create"></a>

> Code samples

```bash
curl https://example.com/draft_registrations/string/contributors/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": {
      "attributes": {},
      "relationships": {
        "user": {
          "data": {
            "id": "guid0",
            "type": "users"
          }
        }
      },
      "type": "contributors"
    }
  }'
```

`POST /draft_registrations/{draft_id}/contributors/`

Adds a contributor to a Draft Registration, contributors can view, edit, register or delete a Draft Registration depending on their permissions.
Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
#### Permissions
Only project administrators can add contributors to a Draft Registration.
#### Required
A relationship object with a `data` key, containing the `users` type and valid user ID is required.
All attributes describing the relationship between the node and the user are optional.
#### Returns
Returns a JSON object with a `data` key containing the representation of the new contributor, if the request is successful.
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {},
    "relationships": {
      "user": {
        "data": {
          "id": "guid0",
          "type": "users"
        }
      }
    },
    "type": "contributors"
  }
}
```

<h3 id="add-a-contributor-to-a-draft-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|draft_id|path|string|true|The unique identifier of the Draft Registration.|
|body|body|object|true|none|
|» attributes|body|object|false|The properties of the contributor entity.|
|» » bibliographic|body|boolean|false|Whether or not the contributor will be included in citations for the node. The default value is true.|
|» » index|body|integer|false|The position of this contributor in the list of project contributors and in project citations.|
|» » permission|body|string|false|The permission level of the contributor. The default value is 'write'.|
|» relationships|body|object|true|URLs to other entities or entity collections that have a relationship to the contributor entity.|
|» » user|body|string|true|A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » permission|read|
|» » permission|write|
|» » permission|admin|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "bibliographic": true,
      "index": 2,
      "permission": "write",
      "unregistered_contributor": null
    },
    "embeds": {
      "users": {
        "data": {
          "attributes": {
            "active": true,
            "date_registered": "2022-03-04T20:13:35.594990",
            "education": [],
            "employment": [],
            "family_name": "Dominguez",
            "full_name": "Paul Dominguez",
            "given_name": "Paul",
            "locale": "en_US",
            "middle_names": "",
            "social": {},
            "suffix": "",
            "timezone": "Etc/UTC"
          },
          "id": "tmxzg",
          "links": {
            "html": "http://localhost:5000/tmxzg/",
            "profile_image": "https://secure.gravatar.com/avatar/c16b8f65c6ac5dc8511fbffab8ef8918?d=identicon",
            "self": "http://localhost:8000/v2/users/tmxzg/"
          },
          "relationships": {
            "groups": {
              "links": {
                "related": {
                  "href": "http://localhost:8000/v2/users/tmxzg/groups/",
                  "meta": {}
                }
              }
            },
            "institutions": {
              "links": {
                "related": {
                  "href": "http://localhost:8000/v2/users/tmxzg/institutions/",
                  "meta": {}
                },
                "self": {
                  "href": "http://localhost:8000/v2/users/tmxzg/relationships/institutions/",
                  "meta": {}
                }
              }
            },
            "nodes": {
              "links": {
                "related": {
                  "href": "http://localhost:8000/v2/users/tmxzg/nodes/",
                  "meta": {}
                }
              }
            },
            "preprints": {
              "links": {
                "related": {
                  "href": "http://localhost:8000/v2/users/tmxzg/preprints/",
                  "meta": {}
                }
              }
            },
            "registrations": {
              "links": {
                "related": {
                  "href": "http://localhost:8000/v2/users/tmxzg/registrations/",
                  "meta": {}
                }
              }
            }
          },
          "type": "users"
        }
      }
    },
    "id": "62718748d90ebe0012c38815-tmxzg",
    "links": {
      "self": "http://localhost:8000/v2/draft_registrations/62718748d90ebe0012c38815/contributors/tmxzg/"
    },
    "relationships": {
      "draft_registration": {
        "links": {
          "related": {
            "href": "http://localhost:8000/v2/draft_registrations/62718748d90ebe0012c38815/",
            "meta": {}
          }
        }
      },
      "users": {
        "data": {
          "id": "tmxzg",
          "type": "users"
        },
        "links": {
          "related": {
            "href": "http://localhost:8000/v2/users/tmxzg/",
            "meta": {}
          }
        }
      }
    },
    "type": "contributors"
  },
  "meta": {
    "version": "2.0"
  }
}
```

<h3 id="add-a-contributor-to-a-draft-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retreive a Contributor from a Draft Registration

> Code samples

```bash
curl https://example.com/draft_registrations/string/contributors/string/ \
  -H 'Accept: application/json'
```

`GET /draft_registrations/{draft_id}/contributors/{user_id}/`

Retrieves the details of a given contributor.

Contributors are users who can view or edit to the Draft Registrations.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

<h3 id="retreive-a-contributor-from-a-draft-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|draft_id|path|string|true|The unique identifier of the Draft Registration.|
|user_id|path|string|true|The unique identifier of the Contributor.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "bibliographic": true,
      "index": 0,
      "permission": "admin",
      "unregistered_contributor": null
    },
    "embeds": {
      "users": {
        "data": {
          "attributes": {
            "accepted_terms_of_service": true,
            "active": true,
            "can_view_reviews": [],
            "date_registered": "2017-04-26T15:39:29.779518Z",
            "education": [],
            "employment": [],
            "family_name": "Tordoff",
            "full_name": "John Tordoff",
            "given_name": "John",
            "locale": "en_US",
            "middle_names": "",
            "social": {
              "academiaInstitution": "",
              "academiaProfileID": "",
              "baiduScholar": "",
              "github": [
                "Johnetordoff"
              ],
              "impactStory": "",
              "linkedIn": [],
              "orcid": "0000-0001-8693-9390",
              "profileWebsites": [
                "https://test.com"
              ],
              "researchGate": "",
              "researcherId": "",
              "scholar": "",
              "ssrn": "",
              "twitter": []
            },
            "suffix": "",
            "timezone": "America/New_York"
          },
          "id": "gyht4",
          "links": {
            "html": "https://osf.io/gyht4/",
            "profile_image": "https://secure.gravatar.com/avatar/a61b3827662ddbc604c78e1c8f6a3636?d=identicon",
            "self": "https://api.osf.io/v2/users/gyht4/"
          },
          "relationships": {
            "default_region": {
              "data": {
                "id": "us",
                "type": "regions"
              },
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/regions/us/",
                  "meta": {}
                }
              }
            },
            "emails": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/gyht4/settings/emails/",
                  "meta": {}
                }
              }
            },
            "groups": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/gyht4/groups/",
                  "meta": {}
                }
              }
            },
            "institutions": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/gyht4/institutions/",
                  "meta": {}
                },
                "self": {
                  "href": "https://api.osf.io/v2/users/gyht4/relationships/institutions/",
                  "meta": {}
                }
              }
            },
            "nodes": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/gyht4/nodes/",
                  "meta": {}
                }
              }
            },
            "preprints": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/gyht4/preprints/",
                  "meta": {}
                }
              }
            },
            "registrations": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/gyht4/registrations/",
                  "meta": {}
                }
              }
            },
            "settings": {
              "data": {
                "id": "gyht4",
                "type": "user-settings"
              },
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/gyht4/settings/",
                  "meta": {}
                }
              }
            }
          },
          "type": "users"
        }
      }
    },
    "id": "626170854968470203611e2c-gyht4",
    "links": {
      "self": "https://api.osf.io/v2/draft_registrations/626170854968470203611e2c/contributors/gyht4/"
    },
    "relationships": {
      "draft_registration": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/draft_registrations/626170854968470203611e2c/",
            "meta": {}
          }
        }
      },
      "users": {
        "data": {
          "id": "gyht4",
          "type": "users"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/gyht4/",
            "meta": {}
          }
        }
      }
    },
    "type": "contributors"
  },
  "meta": {
    "version": "2.20"
  }
}
```

<h3 id="retreive-a-contributor-from-a-draft-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Institutions afilliated with a Draft Registration

> Code samples

```bash
curl https://example.com/draft_registrations/string/institutions/ \
  -H 'Accept: application/json'
```

`GET /draft_registrations/{draft_id}/institutions/`

Once a properly authenticated user has marked their registration as affiliated with an institution, that institution and any others added will appear in this list.

<h3 id="retrieve-institutions-afilliated-with-a-draft-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|draft_id|path|string|true|The unique identifier of the draft registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "assets": {
          "logo": "/static/img/institutions/shields/lab-shield.png",
          "logo_rounded": "/static/img/institutions/shields-rounded-corners/lab-shield-rounded-corners.png"
        },
        "description": "Lab test",
        "name": "Lab [Test]"
      },
      "id": "lab",
      "links": {
        "html": "http://localhost:5000/institutions/lab/",
        "self": "https://api.osf.io/v2/institutions/lab/"
      },
      "relationships": {
        "department_metrics": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/lab/metrics/departments/",
              "meta": {}
            }
          }
        },
        "nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/lab/nodes/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/lab/registrations/",
              "meta": {}
            }
          }
        },
        "summary_metrics": {
          "data": {
            "id": "a2jlab",
            "type": "institution-summary-metrics"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/lab/metrics/summary/",
              "meta": {}
            }
          }
        },
        "user_metrics": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/lab/metrics/users/",
              "meta": {}
            }
          }
        },
        "users": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/lab/users/",
              "meta": {}
            }
          }
        }
      },
      "type": "institutions"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "next": null,
    "prev": null,
    "self": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/institutions/"
  },
  "meta": {
    "per_page": 10,
    "total": 1,
    "version": "2.20"
  }
}
```

<h3 id="retrieve-institutions-afilliated-with-a-draft-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Subjects associated with a Draft Registration

<a id="opIdnodes_draft_registrations_subjects"></a>

> Code samples

```bash
curl https://example.com/draft_registrations/string/subjects/ \
  -H 'Accept: application/json'
```

`GET /draft_registrations/{draft_id}/subjects/`

This retrieves a list of subjects associated with a Draft Registration. Subjects are formatted here in a flat paginated list, but are hierarchical and nested by specificity of subject matter.

<h3 id="retrieve-subjects-associated-with-a-draft-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|draft_id|path|string|true|The unique identifier of the draft registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "taxonomy_name": "",
        "text": "Philosophy"
      },
      "embeds": {
        "parent": {
          "data": {
            "attributes": {
              "taxonomy_name": "",
              "text": "Arts and Humanities"
            },
            "embeds": {
              "parent": {
                "errors": [
                  {
                    "detail": "Not found."
                  }
                ]
              }
            },
            "id": "61e02bee90de34000ae344b5",
            "links": {
              "self": "https://api.osf.io/v2/subjects/61e02bee90de34000ae344b5/"
            },
            "relationships": {
              "children": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/subjects/61e02bee90de34000ae344b5/children/",
                    "meta": {}
                  }
                }
              },
              "parent": {
                "data": null
              }
            },
            "type": "subjects"
          }
        }
      },
      "id": "61e02bee90de34000ae3449e",
      "links": {
        "self": "https://api.osf.io/v2/subjects/61e02bee90de34000ae3449e/"
      },
      "relationships": {
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/subjects/61e02bee90de34000ae3449e/children/",
              "meta": {}
            }
          }
        },
        "parent": {
          "data": {
            "id": "61e02bee90de34000ae344b5",
            "type": "subjects"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/subjects/61e02bee90de34000ae344b5/",
              "meta": {}
            }
          }
        }
      },
      "type": "subjects"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "next": null,
    "prev": null,
    "self": "https://api.osf.io/v2/draft_registrations/626ffc1ad90ebe0011fc7601/subjects/"
  },
  "meta": {
    "per_page": 10,
    "total": 1,
    "version": "2.20"
  }
}
```

<h3 id="retrieve-subjects-associated-with-a-draft-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a Draft Registration

<a id="opIdnodes_draft_registrations_read"></a>

> Code samples

```bash
curl https://example.com/nodes/string/draft_registrations/string/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/draft_registrations/{draft_id}/`

Retrieve the details of a given draft registration.
Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.

Your original project remains editable but will now have the draft registration linked to it.
#### Permissions
Only project administrators may view draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-draft-registration-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|draft_id|path|string|true|The unique identifier of the draft registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "datetime_initiated": "",
        "datetime_updated": "",
        "registration_metadata": {},
        "registration_supplement": ""
      },
      "id": "",
      "links": {
        "html": ""
      },
      "relationships": {
        "branched_from": {
          "links": {
            "related": {
              "href": "",
              "meta": {}
            }
          }
        },
        "initiator": {
          "links": {
            "related": {
              "href": "",
              "meta": {}
            }
          }
        },
        "registration_schema": {
          "links": {
            "related": {
              "href": "",
              "meta": {}
            }
          }
        }
      },
      "type": "draft_registrations"
    }
  ],
  "links": {
    "first": "",
    "last": "",
    "meta": {
      "per_page": 10,
      "total": ""
    },
    "next": "",
    "prev": ""
  }
}
```

<h3 id="retrieve-a-draft-registration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-logs">Logs</h1>

## Actions

<a id="opIdlogs_actions"></a>

> Code samples

```bash
curl https://example.com/actions/
```

`GET /actions/`


A log can have one of many actions. The complete list of loggable actions (in the format {identifier}: {description}) is as follows:
* `project_created`: A Node is created
* `project_registered`: A Node is registered
* `project_deleted`: A Node is deleted
* `created_from`: A Node is created using an existing Node as a template
* `pointer_created`: A Pointer is created
* `pointer_forked`: A Pointer is forked
* `pointer_removed`: A Pointer is removed
* `node_removed`: A component is deleted
* `node_forked`: A Node is forked
---
* `made_public`: A Node is made public
* `made_private`: A Node is made private
* `tag_added`: A tag is added to a Node
* `tag_removed`: A tag is removed from a Node
* `edit_title`: A Node's title is changed
* `edit_description`: A Node's description is changed
* `updated_fields`: One or more of a Node's fields are changed
* `external_ids_added`: An external identifier is added to a Node (e.g. DOI, ARK)
* `view_only_link_added`: A view-only link was added to a Node
* `view_only_link_removed`:  A view-only link was removed from a Node
---
* `contributor_added`: A Contributor is added to a Node
* `contributor_removed`: A Contributor is removed from a Node
* `contributors_reordered`: A Contributor's position in a Node's bibliography is changed
* `permissions_updated`: A Contributor`s permissions on a Node are changed
* `made_contributor_visible`: A Contributor is made bibliographically visible on a Node
* `made_contributor_invisible`: A Contributor is made bibliographically invisible on a Node
---
* `wiki_updated`: A Node's wiki is updated
* `wiki_deleted`: A Node's wiki is deleted
* `wiki_renamed`: A Node's wiki is renamed
* `made_wiki_public`: A Node's wiki is made public
* `made_wiki_private`: A Node's wiki is made private
---
* `addon_added`: An add-on is linked to a Node
* `addon_removed`: An add-on is unlinked from a Node
* `addon_file_moved`: A File in a Node's linked add-on is moved
* `addon_file_copied`: A File in a Node's linked add-on is copied
* `addon_file_renamed`: A File in a Node's linked add-on is renamed
* `node_authorized`: An addon is authorized for a project
* `node_deauthorized`: An addon is deauthorized for a project
* `folder_created`: A Folder is created in a Node's linked add-on
* `file_added`: A File is added to a Node's linked add-on
* `file_updated`: A File is updated on a Node's linked add-on
* `file_removed`: A File is removed from a Node's linked add-on
* `file_restored`: A File is restored in a Node's linked add-on
---
* `comment_added`: A Comment is added to some item
* `comment_removed`: A Comment is removed from some item
* `comment_updated`: A Comment is updated on some item
---
* `embargo_initiated`: An embargoed Registration is proposed on a Node
* `embargo_approved`: A proposed Embargo of a Node is approved
* `embargo_cancelled`: A proposed Embargo of a Node is cancelled
* `embargo_completed`: A proposed Embargo of a Node is completed
* `retraction_initiated`: A Withdrawal of a Registration is proposed
* `retraction_approved`: A Withdrawal of a Registration is approved
* `retraction_cancelled`: A Withdrawal of a Registration is cancelled
* `registration_initiated`: A Registration of a Node is proposed
* `registration_approved`: A proposed Registration is approved
* `registration_cancelled`: A proposed Registration is cancelled

<h3 id="actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a log

<a id="opIdlogs_read"></a>

> Code samples

```bash
curl https://example.com/logs/string/
```

`GET /logs/{log_id}/`

Retrieves the details of a log.
A log is permanent immutable record of a node's history. A log is created when a user performs one of many actions. See the [actions](#Logs_logs_actions) section for more details.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested log, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|log_id|path|string|true|The unique identifier of the log you wish to retrieve.|

<h3 id="retrieve-a-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="retrieve-a-log-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|read-only|The properties of the log.|
|» action|string|true|read-only|The type of action performed on the OSF. See actions section for full list of possible actions.|
|» date|string(date-time)|true|read-only|The date and time at which the log was created, as an iso8601 formatted timestamp.|
|» params|object|false|read-only|The type of action performed on the OSF. See description for full list of possible actions.|
|» » addon|string|false|read-only|The addon associated with the connected node.|
|» » anonymous_link|boolean|false|read-only|The view only link added to the node was anonymous.|
|» » bucket|string|false|read-only|The Amazon s3 bucket connected to the connected node.|
|» » citation_name|string|false|read-only|Name of citation associated with the connected node.|
|» » contributors|string|false|read-only|List of contributors on the connected node involved in the action represented by this node log.|
|» » data_set|string|false|read-only|The dataset associated with the connected node.|
|» » destination|string|false|read-only|A dictionary with information about the destination for the move of the item on the node associated with this log. Details include the path, url, addon, node_url and node_title.|
|» » figshare_title|string|false|read-only|Title of the fighshare project associated with this node log|
|» » file|string|false|read-only|Dictionary with information about the file involved with the log.|
|» » filename|string|false|read-only|Filename for the file associated with the log.|
|» » folder|string|false|read-only|Folder associated with the log.|
|» » folder_name|string|false|read-only|Name of the folder associated with the log.|
|» » forward_url|string|false|read-only|URL that the connected node forwards to.|
|» » github_repo|string|false|read-only|The github repository involved with the action represented by this node log.|
|» » github_user|string|false|read-only|The github user involved with the action represented by this node log.|
|» » identifiers|string|false|read-only|Dictionary containing the DOI and ARK ID for a preprint associated with the log.|
|» » institution|string|false|read-only|Dictionary containing the ID and Name of the institution associated with the log.|
|» » kind|string|false|read-only|Kind of the object associated with the log.|
|» » license|string|false|read-only|License for the associated node.|
|» » old_page|string|false|read-only|Old name of wiki page for a wiki rename log action.|
|» » page|string|false|read-only|Current name of wiki page for rename log action.|
|» » page_id|string|false|read-only|Primary key of the wiki page associated with the log.|
|» » params_node|string|false|read-only|Node that is refered to in the params of the log.|
|» » params_project|string|false|read-only|Project that is refered to in the params of the log.|
|» » path|string|false|read-only|Path for a file associated with the log.|
|» » pointer|string|false|read-only|A dictionary with information about the node that is linked to the associated node.|
|» » preprint|string|false|read-only|Preprint related to the associated node.|
|» » preprint_provider|string|false|read-only|Preprint provider for the associated node.|
|» » previous_institution|string|false|read-only|If a primary institution for the associated node is changed, this will show the previous institution.|
|» » source|string|false|read-only|A dictionary with information about the source of a move related event for a log. Details include the path, url, addon, node_url and node_title.|
|» » study|string|false|read-only|Dataverse study linked to the associated node.|
|» » tag|string|false|read-only|Tag associated with the associated node.|
|» » tags|string|false|read-only|Tags associated with the associated node.|
|» » target|string|false|read-only|A dictionary containing details about the target of the log. Details include the path, url, addon, node_url and node_title.|
|» » template_node|string|false|read-only|A dictionary containing information about the node that was used as a template for the associated node.|
|» » title_new|string|false|read-only|The new title for the associated node.|
|» » title_original|string|false|read-only|The original title for the associated node|
|» » updated_fields|string|false|read-only|A dictionary containing all of the fields updated on the associated node.|
|» » urls|string|false|read-only|Links to access information about the file associated with this log.|
|» » version|string|false|read-only|Version of the wiki page associated with this log.|
|» » wiki|string|false|read-only|A dictionary with information about the wiki page associated with the log.|
|id|string|true|read-only|The identifier of the log.|
|links|object|true|read-only|URLs to alternative representations of the log entity.|
|» self|string(URL)|true|read-only|A link to the detail page for the log.|
|relationships|object|true|read-only|URLs to other entities or entity collections that have a relationship to the log.|
|» linked_node|string|false|read-only|A relationship to the node linked to this log.|
|» node|string|true|read-only|A relationship to the node associated with this log.|
|» original_node|string|false|read-only|A relationship to the original node that was associated with this log, in case this log was copied from a node to a fork or registration.|
|» template_node|string|false|read-only|A relationship to the node used as a template for this log.|
|» user|string|false|read-only|A relationship to the user who performed the log action.|
|type|string|true|read-only|The type identifier of the log (`logs`)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-citations">Citations</h1>

## List all citation styles

<a id="opIdcitations_styles_list"></a>

> Code samples

```bash
curl https://example.com/citations/styles/ \
  -H 'Accept: application/json'
```

`GET /citations/styles/`


A paginated list of all standard citation styles available for rendering citations.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 citation styles. Each resource in the array is a separate citation syle and contains the full representation of the citation style object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/citations/styles/?filter[title]=open.

Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.
#### Errors
This request should never return an error.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "date_parsed": "2015-02-16T04:16:25.732000",
        "short_title": "AMR",
        "summary": null,
        "title": "Academy of Management Review"
      },
      "id": "academy-of-management-review",
      "links": {},
      "type": "citation-styles"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/citations/styles/?page=115",
    "meta": {
      "per_page": 10,
      "total": 1149
    },
    "next": "https://api.osf.io/v2/citations/styles/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-citation-styles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a citation style

<a id="opIdcitations_styles_read"></a>

> Code samples

```bash
curl https://example.com/citations/styles/string/ \
  -H 'Accept: application/json'
```

`GET /citations/styles/{style_id}/`

Retrieves the details of a citation style.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested citation style, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-citation-style-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|The unique identifier of the citation style.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "date_parsed": "2015-02-16T04:16:26.233000",
      "short_title": "APA",
      "summary": null,
      "title": "American Psychological Association 6th edition"
    },
    "id": "apa",
    "links": {},
    "type": "citation-styles"
  }
}
```

<h3 id="retrieve-a-citation-style-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-collections">Collections</h1>

## List all Collections

<a id="opIdcollections_list"></a>

> Code samples

```bash
curl https://example.com/collections/ \
  -H 'Accept: application/json'
```

`GET /collections/`

Retrieves a list collections, either public or related to the user
#### Permissions
Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.

Comments on private nodes are only visible to contributors and administrators on the parent node.
#### Returns
Returns a JSON object containing `data` and `links` keys.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "bookmarks\"": false,
        "collected_type_choices": [
          "Research",
          "Teaching",
          "Community Activity",
          "Meeting",
          "Other"
        ],
        "date_created": "2019-09-18T19:24:28.751486Z",
        "date_modified": "2019-09-18T19:24:28.886438Z",
        "is_promoted\"": true,
        "is_public": true,
        "issue_choices\"": [],
        "program_area_choices": [],
        "status_choices": [
          "Proposed",
          "Active",
          "Completed",
          "Archived"
        ],
        "title": "Metascience's Collection",
        "volume_choices": []
      },
      "links": {
        "self": "https://api.osf.io/v2/collections/"
      },
      "relationships": {
        "collected_metadata": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/collections/ezcuj/collected_metadata/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/collections/ezcuj/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/collections/ezcuj/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "linked_preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/collections/ezcuj/linked_preprints/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/collections/ezcuj/relationships/linked_preprints/",
              "meta": {}
            }
          }
        },
        "linked_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/collections/ezcuj/linked_registrations/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/collections/ezcuj/relationships/linked_registrations/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/collections/ezcuj/node_links/",
              "meta": {}
            }
          }
        },
        "provider": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/providers/collections/metascience/",
              "meta": {}
            }
          }
        }
      }
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/collections/?page=2",
    "next": "https://api.osf.io/v2/collections/?page=2",
    "prev": null,
    "self": "https://api.osf.io/v2/collections/"
  },
  "meta": {
    "per_page": 10,
    "total": 11,
    "version": 2.2
  }
}
```

<h3 id="list-all-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Collection

<a id="opIdcollections_create"></a>

> Code samples

```bash
curl https://example.com/collections/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": {
      "attributes": {
        "title": "An Excellent Collection Title"
      },
      "type": "collections"
    }
  }'
```

`POST /collections/`

Retrieves a list collections, either public or related to the user
#### Permissions
Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.

Comments on private nodes are only visible to contributors and administrators on the parent node.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

> Body parameter

```json
{
  "data": {
    "attributes": {
      "title": "An Excellent Collection Title"
    },
    "type": "collections"
  }
}
```

<h3 id="create-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|

> Example responses

> 201 Response

```json
null
```

<h3 id="create-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a Collection

<a id="opIdcollections_detail"></a>

> Code samples

```bash
curl https://example.com/collections/string/ \
  -H 'Accept: application/json'
```

`GET /collections/{collection_id}/`

Retrieves a collection, if the user has appropriate permissions.

#### Permissions
Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="retrieve-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "bookmarks\"": false,
      "collected_type_choices": [
        "Research",
        "Teaching",
        "Community Activity",
        "Meeting",
        "Other"
      ],
      "date_created": "2019-09-18T19:24:28.751486Z",
      "date_modified": "2019-09-18T19:24:28.886438Z",
      "is_promoted\"": true,
      "is_public": true,
      "issue_choices\"": [],
      "program_area_choices": [],
      "status_choices": [
        "Proposed",
        "Active",
        "Completed",
        "Archived"
      ],
      "title": "Metascience's Collection",
      "volume_choices": []
    },
    "links": {
      "self": "https://api.osf.io/v2/collections/"
    },
    "relationships": {
      "collected_metadata": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/collections/ezcuj/collected_metadata/",
            "meta": {}
          }
        }
      },
      "linked_nodes": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/collections/ezcuj/linked_nodes/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/collections/ezcuj/relationships/linked_nodes/",
            "meta": {}
          }
        }
      },
      "linked_preprints": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/collections/ezcuj/linked_preprints/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/collections/ezcuj/relationships/linked_preprints/",
            "meta": {}
          }
        }
      },
      "linked_registrations": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/collections/ezcuj/linked_registrations/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/collections/ezcuj/relationships/linked_registrations/",
            "meta": {}
          }
        }
      },
      "node_links": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/collections/ezcuj/node_links/",
            "meta": {}
          }
        }
      },
      "provider": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/providers/collections/metascience/",
            "meta": {}
          }
        }
      }
    }
  },
  "meta": {
    "version": 2.2
  },
  "type": "collections"
}
```

<h3 id="retrieve-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Collection

<a id="opIdcollections_delete"></a>

> Code samples

```bash
curl https://example.com/collections/string/ \
  -X DELETE
```

`DELETE /collections/{collection_id}/`

Deletes a collection, if the user has appropriate permissions.
#### Permissions
Users must have write permissions on a collection in order to delete it
#### Returns
Nothing is returned in the body

<h3 id="delete-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|

<h3 id="delete-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a list of collected metadata for a collection

<a id="opIdcollections_metadata_registrations_list"></a>

> Code samples

```bash
curl https://example.com/collections/string/collected_metadata/ \
  -H 'Accept: application/json'
```

`GET /collections/{collection_id}/collected_metadata/`

List of user created metadata for entities within a collection.
#### Permissions
In order to view this metadata it must be public or a user must have read permissions for collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

<h3 id="retrieve-a-list-of-collected-metadata-for-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "collected_type": "Document Analysis",
        "issue": "",
        "program_area": "N/A",
        "status": "",
        "subjects": [],
        "volume": ""
      },
      "embeds": {
        "guid": {
          "data": {
            "attributes": {
              "access_requests_enabled": true,
              "analytics_key": "c438e67a7680113ee310cad8121e520bab632f3df95d443a4fadb0cbf3af890acc0d91ab6499297ec622bb827979c6005f13a80b3eddcf87a081667e6b2ac3da6eff414dc659b19e3a473f8bf7ef295bff3c036c955c8313fa6ce1da1253e74592e0b399940ca9f099b36923df8c11622d0a1768ae53f79a6061da76007061207f299a0e507f1ff47baeb902f2c403f0",
              "category": "project",
              "collection": false,
              "current_user_can_comment": false,
              "current_user_is_contributor": false,
              "current_user_is_contributor_or_group_member": false,
              "current_user_permissions": [
                "read"
              ],
              "custom_citation": null,
              "date_created": "2020-05-11T17:57:58.725950",
              "date_modified": "2020-11-20T14:31:59.946554",
              "description": "A Good Node Description",
              "fork": false,
              "node_license": {
                "copyright_holders": [
                  "Test User"
                ],
                "year": "2020"
              },
              "preprint": false,
              "public": true,
              "registration": false,
              "subjects": [],
              "tags": [],
              "title": "A Good Node Title",
              "wiki_enabled": true
            },
            "id": "2vewn",
            "links": {
              "html": "https://osf.io/2vewn/",
              "self": "https://api.osf.io/v2/nodes/2vewn/"
            },
            "relationships": {
              "affiliated_institutions": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/institutions/?format=json",
                    "meta": {}
                  },
                  "self": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/relationships/institutions/?format=json",
                    "meta": {}
                  }
                }
              },
              "bibliographic_contributors": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/bibliographic_contributors/?format=json",
                    "meta": {}
                  }
                }
              },
              "children": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/children/?format=json",
                    "meta": {}
                  }
                }
              },
              "citation": {
                "data": {
                  "id": "2vewn",
                  "type": "nodes"
                },
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/citation/?format=json",
                    "meta": {}
                  }
                }
              },
              "comments": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/comments/?format=json&filter%5Btarget%5D=2vewn",
                    "meta": {}
                  }
                }
              },
              "contributors": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/contributors/?format=json",
                    "meta": {}
                  }
                }
              },
              "draft_registrations": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/draft_registrations/?format=json",
                    "meta": {}
                  }
                }
              },
              "files": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/files/?format=json",
                    "meta": {}
                  }
                }
              },
              "forks": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/forks/?format=json",
                    "meta": {}
                  }
                }
              },
              "groups": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/groups/?format=json",
                    "meta": {}
                  }
                }
              },
              "identifiers": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/identifiers/?format=json",
                    "meta": {}
                  }
                }
              },
              "implicit_contributors": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/implicit_contributors/?format=json",
                    "meta": {}
                  }
                }
              },
              "license": {
                "data": {
                  "id": "563c1cf88c5e4a3877f9e965",
                  "type": "licenses"
                },
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e965/?format=json",
                    "meta": {}
                  }
                }
              },
              "linked_by_nodes": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/linked_by_nodes/?format=json",
                    "meta": {}
                  }
                }
              },
              "linked_by_registrations": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/linked_by_registrations/?format=json",
                    "meta": {}
                  }
                }
              },
              "linked_nodes": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/linked_nodes/?format=json",
                    "meta": {}
                  },
                  "self": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/relationships/linked_nodes/?format=json",
                    "meta": {}
                  }
                }
              },
              "linked_registrations": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/linked_registrations/?format=json",
                    "meta": {}
                  },
                  "self": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/relationships/linked_registrations/?format=json",
                    "meta": {}
                  }
                }
              },
              "logs": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/logs/?format=json",
                    "meta": {}
                  }
                }
              },
              "node_links": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/node_links/?format=json",
                    "meta": {}
                  }
                }
              },
              "preprints": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/preprints/?format=json",
                    "meta": {}
                  }
                }
              },
              "region": {
                "data": {
                  "id": "us",
                  "type": "regions"
                },
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/regions/us/?format=json",
                    "meta": {}
                  }
                }
              },
              "registrations": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/registrations/?format=json",
                    "meta": {}
                  }
                }
              },
              "root": {
                "data": {
                  "id": "2vewn",
                  "type": "nodes"
                },
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/?format=json",
                    "meta": {}
                  }
                }
              },
              "settings": {
                "data": {
                  "id": "2vewn",
                  "type": "nodes"
                },
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/settings/?format=json",
                    "meta": {}
                  }
                }
              },
              "storage": {
                "data": {
                  "id": "2vewn",
                  "type": "nodes"
                },
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/storage/?format=json",
                    "meta": {}
                  }
                }
              },
              "view_only_links": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/view_only_links/?format=json",
                    "meta": {}
                  }
                }
              },
              "wikis": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/nodes/2vewn/wikis/?format=json",
                    "meta": {}
                  }
                }
              }
            },
            "type": "nodes"
          }
        }
      },
      "id": "2vewn",
      "links": {},
      "relationships": {
        "collection": {
          "data": {
            "id": "ux3nq",
            "type": "collections"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/collections/ux3nq/?format=json",
              "meta": {}
            }
          }
        },
        "creator": {
          "data": {
            "id": "794j8",
            "type": "users"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/794j8/?format=json",
              "meta": {}
            }
          }
        },
        "guid": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/guids/2vewn/?format=json",
              "meta": {}
            }
          }
        }
      },
      "type": "collected-metadata"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="retrieve-a-list-of-collected-metadata-for-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add Metadata or Subjects to a Entity in a Collection

<a id="opIdcollections_add_metadata"></a>

> Code samples

```bash
curl https://example.com/collections/string/collected_metadata/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "application/json": {
      "data": {
        "attributes": {
          "guid": "test0",
          "subjects": "5fd228b7e64e1300aa99ee15",
          "volume": "test"
        },
        "type": "collected-metadata"
      }
    }
  }'
```

`POST /collections/{collection_id}/collected_metadata/`

List of user created metadata for entities within a collection.
#### Permissions
To edit this collection a user must have collections write permissions
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

> Body parameter

```json
{
  "application/json": {
    "data": {
      "attributes": {
        "guid": "test0",
        "subjects": "5fd228b7e64e1300aa99ee15",
        "volume": "test"
      },
      "type": "collected-metadata"
    }
  }
}
```

<h3 id="add-metadata-or-subjects-to-a-entity-in-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|
|body|body|object|true|none|

<h3 id="add-metadata-or-subjects-to-a-entity-in-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Specific Metadata for a Collection

<a id="opIdcollections_metadata_registrations_detail"></a>

> Code samples

```bash
curl https://example.com/collections/string/collected_metadata/string
```

`GET /collections/{collection_id}/collected_metadata/{cgm_id}`


#### Permissions
In order to view this metadata it must be public or a user must have read permissions for collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

<h3 id="retrieve-specific-metadata-for-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|
|cgm_id|path|string|true|A short id for that piece of metadata|

> Example responses

> 200 Response

```json
{
  "attributes": {
    "collected_type": "Action Research",
    "issue": "",
    "program_area": "Child Welfare",
    "status": "",
    "volume": ""
  },
  "embeds": {
    "guid": {
      "data": {
        "attributes": {
          "analytics_key": "",
          "category": "project",
          "collection": false,
          "current_user_can_comment": false,
          "current_user_is_contributor": false,
          "current_user_is_contributor_or_group_member": false,
          "current_user_permissions": [],
          "custom_citation": null,
          "date_created": "2020-06-05T18:02:28.254638Z",
          "date_modified": "2020-10-21T15:47:17.646448Z",
          "description": "flaksdjfasdlkfj lkjdf aslkdfj sdlfkj",
          "fork": false,
          "node_license": {
            "copyright_holders": [],
            "year": null
          },
          "preprint": false,
          "public": false,
          "registration": false,
          "tags": [],
          "title": "test",
          "wiki_enabled": true
        },
        "id": "zw4sh",
        "links": {
          "html": "https://osf.io/zw4sh/",
          "self": "https://api.osf.io/v2/nodes/zw4sh/"
        },
        "relationships": {
          "affiliated_institutions": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/institutions/",
                "meta": {}
              },
              "self": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/relationships/institutions/",
                "meta": {}
              }
            }
          },
          "bibliographic_contributors": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/bibliographic_contributors/",
                "meta": {}
              }
            }
          },
          "children": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/children/",
                "meta": {}
              }
            }
          },
          "citation": {
            "data": {
              "id": "zw4sh",
              "type": "nodes"
            },
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/citation/",
                "meta": {}
              }
            }
          },
          "comments": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/comments/?filter%5Btarget%5D=zw4sh",
                "meta": {}
              }
            }
          },
          "contributors": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/contributors/",
                "meta": {}
              }
            }
          },
          "draft_registrations": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/draft_registrations/",
                "meta": {}
              }
            }
          },
          "files": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/files/",
                "meta": {}
              }
            }
          },
          "forked_from": {
            "data": null
          },
          "forks": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/forks/",
                "meta": {}
              }
            }
          },
          "groups": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/groups/",
                "meta": {}
              }
            }
          },
          "identifiers": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/identifiers/",
                "meta": {}
              }
            }
          },
          "implicit_contributors": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/implicit_contributors/",
                "meta": {}
              }
            }
          },
          "license": {
            "data": {
              "id": "563c1cf88c5e4a3877f9e96a",
              "type": "licenses"
            },
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e96a/",
                "meta": {}
              }
            }
          },
          "linked_by_nodes": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/linked_by_nodes/",
                "meta": {}
              }
            }
          },
          "linked_by_registrations": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/linked_by_registrations/",
                "meta": {}
              }
            }
          },
          "linked_nodes": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/linked_nodes/",
                "meta": {}
              },
              "self": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/relationships/linked_nodes/",
                "meta": {}
              }
            }
          },
          "linked_registrations": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/linked_registrations/",
                "meta": {}
              },
              "self": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/relationships/linked_registrations/",
                "meta": {}
              }
            }
          },
          "logs": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/logs/",
                "meta": {}
              }
            }
          },
          "parent": {
            "data": null
          },
          "preprints": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/preprints/",
                "meta": {}
              }
            }
          },
          "region": {
            "data": {
              "id": "us",
              "type": "regions"
            },
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/regions/us/",
                "meta": {}
              }
            }
          },
          "registrations": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/registrations/",
                "meta": {}
              }
            }
          },
          "root": {
            "data": {
              "id": "zw4sh",
              "type": "nodes"
            },
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/",
                "meta": {}
              }
            }
          },
          "settings": {
            "data": {
              "id": "zw4sh",
              "type": "nodes"
            },
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/settings/",
                "meta": {}
              }
            }
          },
          "storage": {
            "data": {
              "id": "zw4sh",
              "type": "nodes"
            },
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/storage/",
                "meta": {}
              }
            }
          },
          "subjects": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/subjects/",
                "meta": {}
              },
              "self": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/relationships/subjects/",
                "meta": {}
              }
            }
          },
          "template_node": {
            "data": null
          },
          "view_only_links": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/view_only_links/",
                "meta": {}
              }
            }
          },
          "wikis": {
            "links": {
              "related": {
                "href": "https://api.osf.io/v2/nodes/zw4sh/wikis/",
                "meta": {}
              }
            }
          }
        },
        "type": "nodes"
      }
    }
  },
  "id": "zw4sh",
  "links": {},
  "relationships": {
    "collection": {
      "data": {
        "id": "ux3nq",
        "type": "collections"
      },
      "links": {
        "related": {
          "href": "https://api.osf.io/v2/collections/ux3nq/",
          "meta": {}
        }
      }
    },
    "creator": {
      "data": {
        "id": "nsx26",
        "type": "users"
      },
      "links": {
        "related": {
          "href": "https://api.osf.io/v2/users/nsx26/",
          "meta": {}
        }
      }
    },
    "guid": {
      "links": {
        "related": {
          "href": "https://api.osf.io/v2/guids/zw4sh/",
          "meta": {}
        }
      }
    },
    "subjects": {
      "links": {
        "related": {
          "href": "https://api.osf.io/v2/collections/ux3nq/collected_metadata/zw4sh/subjects/",
          "meta": {}
        },
        "self": {
          "href": "https://api.osf.io/v2/collections/ux3nq/collected_metadata/zw4sh/relationships/subjects/",
          "meta": {}
        }
      }
    }
  },
  "type": "collected-metadata"
}
```

<h3 id="retrieve-specific-metadata-for-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add Metadata or Subjects to an Entity in a Collection

<a id="opIdcollections_metadata_detail"></a>

> Code samples

```bash
curl https://example.com/collections/string/collected_metadata/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "application/json": {
      "data": {
        "attributes": {
          "guid": "test0",
          "subjects": "5fd228b7e64e1300aa99ee15",
          "volume": "test"
        },
        "type": "collected-metadata"
      }
    }
  }'
```

`POST /collections/{collection_id}/collected_metadata/{cgm_id}`

List of user created metadata for entities within a collection.
#### Permissions
To edit this collection a user must have collections write permissions
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

> Body parameter

```json
{
  "application/json": {
    "data": {
      "attributes": {
        "guid": "test0",
        "subjects": "5fd228b7e64e1300aa99ee15",
        "volume": "test"
      },
      "type": "collected-metadata"
    }
  }
}
```

<h3 id="add-metadata-or-subjects-to-an-entity-in-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|
|cgm_id|path|string|true|A short id for that piece of metadata|
|body|body|object|true|none|

<h3 id="add-metadata-or-subjects-to-an-entity-in-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Collection Metadata from entitiy

<a id="opIdcollections_metadata_delete"></a>

> Code samples

```bash
curl https://example.com/collections/string/collected_metadata/string \
  -X DELETE
```

`DELETE /collections/{collection_id}/collected_metadata/{cgm_id}`


#### Permissions
Only a user with collection admin permissions can delete collected metadata
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="delete-collection-metadata-from-entitiy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|
|cgm_id|path|string|true|A short id for that piece of metadata|

<h3 id="delete-collection-metadata-from-entitiy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|NO CONTENT|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve subject metadata for a specific piece of metadata in a collection

<a id="opIdcollections_metadata_subjects_relationships"></a>

> Code samples

```bash
curl https://example.com/collections/string/collected_metadata/string/relationships/subjects/ \
  -H 'Accept: application/json'
```

`GET /collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/`


#### Permissions
This is public for a logged out user when an entity is public.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="retrieve-subject-metadata-for-a-specific-piece-of-metadata-in-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|
|cgm_id|path|string|true|A short id for that piece of metadata|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "5fd228b7e64e1300aa99ee15",
      "type": "subjects"
    }
  ],
  "links": {
    "html": "https://api.osf.io/v2/collections/nywr6/collected_metadata/zjxhs/subjects/",
    "self": "https://api.osf.io/v2/collections/nywr6/collected_metadata/zjxhs/relationships/subjects/"
  },
  "meta": {
    "version": "2.20"
  }
}
```

<h3 id="retrieve-subject-metadata-for-a-specific-piece-of-metadata-in-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update subjects for a specific piece of metadata in a collection

<a id="opIdcollections_metadata_subjects_relationships_update"></a>

> Code samples

```bash
curl https://example.com/collections/string/collected_metadata/string/relationships/subjects/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "application/json": {
      "data": {
        "id": "5fd228b7e64e1300aa99ee15",
        "type": "subjects"
      }
    }
  }'
```

`POST /collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/`


#### Permissions
This is editable for a user with a write permission for this collection.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

> Body parameter

```json
{
  "application/json": {
    "data": {
      "id": "5fd228b7e64e1300aa99ee15",
      "type": "subjects"
    }
  }
}
```

<h3 id="update-subjects-for-a-specific-piece-of-metadata-in-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|
|cgm_id|path|string|true|A short id for that piece of metadata|
|body|body|object|true|none|

<h3 id="update-subjects-for-a-specific-piece-of-metadata-in-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve subject data for a specific piece of metadata info for a collection

<a id="opIdcollections_collected_metadata"></a>

> Code samples

```bash
curl https://example.com/collections/string/collected_metadata/string/subjects/ \
  -H 'Accept: application/json'
```

`GET /collections/{collection_id}/collected_metadata/{cgm_id}/subjects/`


#### Permissions
In order to view these subject it must be a public collection or a user must have read permissions for collection.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error, other then permissions errors.

<h3 id="retrieve-subject-data-for-a-specific-piece-of-metadata-info-for-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|
|cgm_id|path|string|true|A short id for that piece of metadata|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "taxonomy_name": "",
        "text": "Example Subject #0"
      },
      "embeds": {
        "parent": {
          "errors": [
            {
              "detail": "Not found."
            }
          ]
        }
      },
      "id": "5fd228b7e64e1300aa99ee15",
      "links": {
        "self": "https://api.osf.io/v2/subjects/5fd228b7e64e1300aa99ee15/"
      },
      "relationships": {
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/subjects/5fd228b7e64e1300aa99ee15/children/",
              "meta": {}
            }
          }
        },
        "parent": {
          "data": null
        }
      },
      "type": "subjects"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "next": null,
    "prev": null,
    "self": "https://api.osf.io/v2/collections/nywr6/collected_metadata/zjxhs/subjects/"
  },
  "meta": {
    "per_page": 10,
    "total": 1,
    "version": "2.20"
  }
}
```

<h3 id="retrieve-subject-data-for-a-specific-piece-of-metadata-info-for-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List All Linked Nodes for a Collection

<a id="opIdcollections_linked_nodes_list"></a>

> Code samples

```bash
curl https://example.com/collections/string/linked_nodes \
  -H 'Accept: application/json'
```

`GET /collections/{collection_id}/linked_nodes`

List of all nodes linked to the given collection.
#### Permissions
This returns all public nodes associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="list-all-linked-nodes-for-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "analytics_key": "c438e67a7680113ee310cad8121e520bab632f3df95d443a4fadb0cbf3af890acc0d91ab6499297ec622bb827979c6005f13a80b3eddcf87a081667e6b2ac3da6eff414dc659b19e3a473f8bf7ef295bff3c036c955c8313fa6ce1da1253e74592e0b399940ca9f099b36923df8c11622d0a1768ae53f79a6061da76007061207f299a0e507f1ff47baeb902f2c403f0",
        "category": "project",
        "collection": false,
        "current_user_can_comment": false,
        "current_user_is_contributor": false,
        "current_user_is_contributor_or_group_member": false,
        "current_user_permissions": [],
        "custom_citation": null,
        "date_created": "2020-05-11T17:57:58.725950Z",
        "date_modified": "2020-11-20T14:31:59.946554Z",
        "description": "A good Node description.",
        "fork": false,
        "node_license": {
          "copyright_holders": [
            "Test User"
          ],
          "year": "2020"
        },
        "preprint": false,
        "public": true,
        "registration": false,
        "tags": [],
        "title": "A Good Node Title",
        "wiki_enabled": true
      },
      "id": "2vewn",
      "links": {
        "html": "https://osf.io/2vewn/",
        "self": "https://api.osf.io/v2/nodes/2vewn/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/2vewn/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "bibliographic_contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/bibliographic_contributors/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "data": {
            "id": "2vewn",
            "type": "nodes"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/comments/?filter%5Btarget%5D=2vewn",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/contributors/",
              "meta": {}
            }
          }
        },
        "draft_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/draft_registrations/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/files/",
              "meta": {}
            }
          }
        },
        "forked_from": {
          "data": null
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/forks/",
              "meta": {}
            }
          }
        },
        "groups": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/groups/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/identifiers/",
              "meta": {}
            }
          }
        },
        "implicit_contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/implicit_contributors/",
              "meta": {}
            }
          }
        },
        "license": {
          "data": {
            "id": "563c1cf88c5e4a3877f9e965",
            "type": "licenses"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e965/",
              "meta": {}
            }
          }
        },
        "linked_by_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/linked_by_nodes/",
              "meta": {}
            }
          }
        },
        "linked_by_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/linked_by_registrations/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/2vewn/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "linked_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/linked_registrations/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/2vewn/relationships/linked_registrations/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/logs/",
              "meta": {}
            }
          }
        },
        "parent": {
          "data": null
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/preprints/",
              "meta": {}
            }
          }
        },
        "region": {
          "data": {
            "id": "us",
            "type": "regions"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/regions/us/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/registrations/",
              "meta": {}
            }
          }
        },
        "root": {
          "data": {
            "id": "2vewn",
            "type": "nodes"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/",
              "meta": {}
            }
          }
        },
        "settings": {
          "data": {
            "id": "2vewn",
            "type": "nodes"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/settings/",
              "meta": {}
            }
          }
        },
        "storage": {
          "data": {
            "id": "2vewn",
            "type": "nodes"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/storage/",
              "meta": {}
            }
          }
        },
        "subjects": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/subjects/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/2vewn/relationships/subjects/",
              "meta": {}
            }
          }
        },
        "template_node": {
          "data": null
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/2vewn/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "next": null,
    "prev": null,
    "self": "https://api.osf.io/v2/collections/ux3nq/linked_nodes/"
  },
  "meta": {
    "per_page": 10,
    "total": 1,
    "version": "2.20"
  }
}
```

<h3 id="list-all-linked-nodes-for-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Give a Sparse List of Node Ids

<a id="opIdcollections_linked_nodes_relationships_create"></a>

> Code samples

```bash
curl https://example.com/collections/string/linked_nodes/relationships/ \
  -H 'Accept: application/json'
```

`GET /collections/{collection_id}/linked_nodes/relationships/`

List of all the node ids linked to the given collection.
#### Permissions
This returns all public nodes associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="give-a-sparse-list-of-node-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "guid0",
      "type": "nodes"
    },
    {
      "id": "newid",
      "type": "nodes"
    },
    {
      "id": "test2",
      "type": "nodes"
    },
    {
      "id": "guid4",
      "type": "nodes"
    }
  ],
  "links": {
    "html": "https://api.osf.io/v2/collections/dse23/linked_nodes/",
    "self": "https://api.osf.io/v2/collections/dse23/relationships/linked_nodes/"
  },
  "meta": {
    "version": "2.20"
  }
}
```

<h3 id="give-a-sparse-list-of-node-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Link Nodes to Collection

<a id="opIdcollections_linked_nodes_relationships"></a>

> Code samples

```bash
curl https://example.com/collections/string/linked_nodes/relationships/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "id": "guid0",
        "type": "linked_nodes"
      },
      {
        "id": "newid",
        "type": "linked_nodes"
      },
      {
        "id": "test2",
        "type": "linked_nodes"
      },
      {
        "id": "guid4",
        "type": "linked_nodes"
      }
    ]
  }'
```

`POST /collections/{collection_id}/linked_nodes/relationships/`

This endpoint allow users to a add a node to a collection by issuing a POST request.
#### Permissions
This returns all public nodes associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

> Body parameter

```json
{
  "data": [
    {
      "id": "guid0",
      "type": "linked_nodes"
    },
    {
      "id": "newid",
      "type": "linked_nodes"
    },
    {
      "id": "test2",
      "type": "linked_nodes"
    },
    {
      "id": "guid4",
      "type": "linked_nodes"
    }
  ]
}
```

<h3 id="link-nodes-to-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|
|body|body|object|true|none|

> Example responses

> 201 Response

```json
null
```

<h3 id="link-nodes-to-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Nodes From Collection

<a id="opIdcollections_linked_nodes_relationships_delete"></a>

> Code samples

```bash
curl https://example.com/collections/string/linked_nodes/relationships/ \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "id": "guid0",
        "type": "linked_nodes"
      },
      {
        "id": "newid",
        "type": "linked_nodes"
      },
      {
        "id": "test2",
        "type": "linked_nodes"
      },
      {
        "id": "guid4",
        "type": "linked_nodes"
      }
    ]
  }'
```

`DELETE /collections/{collection_id}/linked_nodes/relationships/`


This removes associated nodes from a collection
#### Permissions
Any user with write permissions on this collection should be to remove nodes from this collection.
#### Returns
Nothing in the response body.

> Body parameter

```json
{
  "data": [
    {
      "id": "guid0",
      "type": "linked_nodes"
    },
    {
      "id": "newid",
      "type": "linked_nodes"
    },
    {
      "id": "test2",
      "type": "linked_nodes"
    },
    {
      "id": "guid4",
      "type": "linked_nodes"
    }
  ]
}
```

<h3 id="remove-nodes-from-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="remove-nodes-from-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List All Linked Preprints for a Collection

<a id="opIdcollections_linked_preprints_list"></a>

> Code samples

```bash
curl https://example.com/collections/string/linked_preprints/ \
  -H 'Accept: application/json'
```

`GET /collections/{collection_id}/linked_preprints/`

List of all preprints linked to the given collection.
#### Permissions
This returns all public preprints associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="list-all-linked-preprints-for-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "current_user_permissions": [],
        "date_created": "2020-12-10T13:55:03.994648Z",
        "date_last_transitioned": "2020-12-10T13:55:05.046084Z",
        "date_modified": "2020-12-10T13:55:05.252565Z",
        "date_published": "2020-12-10T13:55:05.046084Z",
        "date_withdrawn": null,
        "description": "Research physical language morning consumer front population.",
        "doi": "10.123/0",
        "is_preprint_orphan": false,
        "is_published": true,
        "license_record": null,
        "original_publication_date": null,
        "preprint_doi_created": "2020-12-10T13:55:05.230155Z",
        "public": true,
        "reviews_state": "accepted",
        "tags": [],
        "title": "A Good Preprint Title"
      },
      "id": "zjxhs",
      "links": {
        "doi": "https://doi.org/10.123/0",
        "html": "https://osf.io/preprints/slug1/zjxhs/",
        "preprint_doi": "https://doi.org/None/FK2osf.io/zjxhs",
        "self": "https://api.osf.io/v2/preprints/zjxhs/"
      },
      "relationships": {
        "bibliographic_contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/zjxhs/bibliographic_contributors/",
              "meta": {}
            }
          }
        },
        "citation": {
          "data": {
            "id": "zjxhs",
            "type": "preprints"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/zjxhs/citation/",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/zjxhs/contributors/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/zjxhs/files/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/zjxhs/identifiers/",
              "meta": {}
            }
          }
        },
        "license": {
          "data": null
        },
        "node": {
          "links": {
            "self": {
              "href": "https://api.osf.io/v2/preprints/zjxhs/relationships/node/",
              "meta": {}
            }
          }
        },
        "primary_file": {
          "data": {
            "id": "5fd228b8e64e1300aa99ee17",
            "type": "files"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/files/5fd228b8e64e1300aa99ee17/",
              "meta": {}
            }
          }
        },
        "provider": {
          "data": {
            "id": "slug1",
            "type": "preprint-providers"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/providers/preprints/slug1/",
              "meta": {}
            }
          }
        },
        "requests": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/zjxhs/requests/",
              "meta": {}
            }
          }
        },
        "review_actions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/zjxhs/review_actions/",
              "meta": {}
            }
          }
        },
        "subjects": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/zjxhs/subjects/",
              "meta": {}
            }
          }
        }
      },
      "type": "preprints"
    }
  ]
}
```

<h3 id="list-all-linked-preprints-for-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List All Linked Registrations for a Collection

<a id="opIdcollections_linked_registrations_list"></a>

> Code samples

```bash
curl https://example.com/collections/string/linked_registrations/ \
  -H 'Accept: application/json'
```

`GET /collections/{collection_id}/linked_registrations/`

List of all registrations linked to the given collection.
#### Permissions
This returns all public registrations associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="list-all-linked-registrations-for-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "access_requests_enabled": false,
        "analytics_key": null,
        "archiving": false,
        "article_doi": null,
        "category": "project",
        "collection": false,
        "current_user_can_comment": true,
        "current_user_is_contributor": false,
        "current_user_is_contributor_or_group_member": false,
        "current_user_permissions": [],
        "custom_citation": "",
        "date_created": "2020-12-10T14:36:42.195364Z",
        "date_modified": "2020-12-10T14:36:39.925278Z",
        "date_registered": "2020-12-10T14:36:42.166193Z",
        "date_withdrawn": null,
        "description": "Half believe though on significant.",
        "embargo_end_date": null,
        "embargoed": false,
        "fork": false,
        "node_license": null,
        "pending_embargo_approval": false,
        "pending_embargo_termination_approval": false,
        "pending_registration_approval": false,
        "pending_withdrawal": false,
        "preprint": false,
        "public": true,
        "registered_meta": {},
        "registration": true,
        "registration_responses": {
          "summary": ""
        },
        "registration_supplement": "Open-Ended Registration",
        "reviews_state": "initial",
        "tags": [],
        "title": "A Good Registration Title",
        "wiki_enabled": true,
        "withdrawal_justification": null,
        "withdrawn": false
      },
      "id": "qrwhu",
      "links": {
        "html": "https://osf.io/qrwhu/",
        "self": "https://api.osf.io/v2/registrations/qrwhu/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "bibliographic_contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/bibliographic_contributors/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "data": {
            "id": "qrwhu",
            "type": "registrations"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/comments/?filter%5Btarget%5D=qrwhu",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/contributors/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/files/",
              "meta": {}
            }
          }
        },
        "forked_from": {
          "data": null
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/identifiers/",
              "meta": {}
            }
          }
        },
        "implicit_contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/implicit_contributors/",
              "meta": {}
            }
          }
        },
        "license": {
          "data": null
        },
        "linked_by_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/linked_by_nodes/",
              "meta": {}
            }
          }
        },
        "linked_by_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/linked_by_registrations/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "linked_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/linked_registrations/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/relationships/linked_registrations/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/logs/",
              "meta": {}
            }
          }
        },
        "parent": {
          "data": null
        },
        "provider": {
          "data": {
            "id": "osf",
            "type": "registration-providers"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/providers/registrations/osf/",
              "meta": {}
            }
          }
        },
        "region": {
          "data": {
            "id": "us",
            "type": "regions"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/regions/us/",
              "meta": {}
            }
          }
        },
        "registered_by": {
          "data": {
            "id": "9hr6c",
            "type": "users"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/9hr6c/",
              "meta": {}
            }
          }
        },
        "registered_from": {
          "data": {
            "id": "4gnbx",
            "type": "nodes"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/4gnbx/",
              "meta": {}
            }
          }
        },
        "registration_schema": {
          "data": {
            "id": "5fa1bb678ccd39001e96c32b",
            "type": "registration-schemas"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/schemas/registrations/5fa1bb678ccd39001e96c32b/",
              "meta": {}
            }
          }
        },
        "requests": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/requests/",
              "meta": {}
            }
          }
        },
        "review_actions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/actions/",
              "meta": {}
            }
          }
        },
        "root": {
          "data": {
            "id": "qrwhu",
            "type": "registrations"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/",
              "meta": {}
            }
          }
        },
        "storage": {
          "data": {
            "id": "qrwhu",
            "type": "nodes"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qrwhu/storage/",
              "meta": {}
            }
          }
        },
        "subjects": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/subjects/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/relationships/subjects/",
              "meta": {}
            }
          }
        },
        "template_node": {
          "data": null
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/qrwhu/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "registrations"
    }
  ]
}
```

<h3 id="list-all-linked-registrations-for-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Give a Sparse List of Registrations Ids

<a id="opIdcollections_linked_registrations_relationships_create"></a>

> Code samples

```bash
curl https://example.com/collections/string/linked_registrations/relationships/ \
  -H 'Accept: application/json'
```

`GET /collections/{collection_id}/linked_registrations/relationships/`

List of all the registration ids linked to the given collection.
#### Permissions
This returns all public registrations associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="give-a-sparse-list-of-registrations-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "guid0",
      "type": "registrations"
    },
    {
      "id": "newid",
      "type": "registrations"
    },
    {
      "id": "test2",
      "type": "registrations"
    },
    {
      "id": "guid4",
      "type": "registrations"
    }
  ],
  "links": {
    "html": "https://api.osf.io/v2/collections/dse23/linked_registrations/",
    "self": "https://api.osf.io/v2/collections/dse23/relationships/linked_registrations/"
  },
  "meta": {
    "version": "2.20"
  }
}
```

<h3 id="give-a-sparse-list-of-registrations-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Link Registrations to Collection

<a id="opIdcollections_linked_registrations_relationships"></a>

> Code samples

```bash
curl https://example.com/collections/string/linked_registrations/relationships/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "id": "guid0",
        "type": "linked_registrations"
      },
      {
        "id": "newid",
        "type": "linked_registrations"
      },
      {
        "id": "test2",
        "type": "linked_registrations"
      },
      {
        "id": "guid4",
        "type": "linked_registrations"
      }
    ]
  }'
```

`POST /collections/{collection_id}/linked_registrations/relationships/`

This endpoint allow users to a add a registration to a collection by issuing a POST request.
#### Permissions
This returns all public registrations associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

> Body parameter

```json
{
  "data": [
    {
      "id": "guid0",
      "type": "linked_registrations"
    },
    {
      "id": "newid",
      "type": "linked_registrations"
    },
    {
      "id": "test2",
      "type": "linked_registrations"
    },
    {
      "id": "guid4",
      "type": "linked_registrations"
    }
  ]
}
```

<h3 id="link-registrations-to-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|
|body|body|object|true|none|

> Example responses

> 201 Response

```json
null
```

<h3 id="link-registrations-to-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Registrations From Collection

<a id="opIdcollections_linked_registrations_relationships_delete"></a>

> Code samples

```bash
curl https://example.com/collections/string/linked_registrations/relationships/ \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "id": "guid0",
        "type": "linked_registrations"
      },
      {
        "id": "newid",
        "type": "linked_registrations"
      },
      {
        "id": "test2",
        "type": "linked_registrations"
      },
      {
        "id": "guid4",
        "type": "linked_registrations"
      }
    ]
  }'
```

`DELETE /collections/{collection_id}/linked_registrations/relationships/`


This removes associated registrations from a collection
#### Permissions
Any user with write permissions on this collection should be to remove registrations from this collection.
#### Returns
Nothing in the response body.

> Body parameter

```json
{
  "data": [
    {
      "id": "guid0",
      "type": "linked_registrations"
    },
    {
      "id": "newid",
      "type": "linked_registrations"
    },
    {
      "id": "test2",
      "type": "linked_registrations"
    },
    {
      "id": "guid4",
      "type": "linked_registrations"
    }
  ]
}
```

<h3 id="remove-registrations-from-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|A short id for that collection|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="remove-registrations-from-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-comments">Comments</h1>

## Retrieve a comment

<a id="opIdcomments_read"></a>

> Code samples

```bash
curl https://example.com/comments/string/ \
  -H 'Accept: application/json'
```

`GET /comments/{comment_id}/`

Retrieves the details of a comment
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested comment, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|comment_id|path|string|true|The unique identifier of the comment you wish to retrieve.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "can_edit": true,
      "content": "comments about things",
      "date_created": "2017-02-10T20:44:03.185000",
      "date_modified": "2017-02-10T20:44:03.193000",
      "deleted": false,
      "has_children": false,
      "has_report": false,
      "is_abuse": false,
      "is_ham": false,
      "modified": false,
      "page": "node"
    },
    "id": "twpgrpv78d8s",
    "links": {
      "self": "https://api.osf.io/v2/comments/twpgrpv78d8s/"
    },
    "relationships": {
      "node": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/gvuew/",
            "meta": {}
          }
        }
      },
      "replies": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/gvuew/comments/?filter%5Btarget%5D=twpgrpv78d8s",
            "meta": {}
          }
        }
      },
      "reports": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/comments/twpgrpv78d8s/reports/",
            "meta": {}
          }
        }
      },
      "target": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/gvuew/",
            "meta": {
              "type": "nodes"
            }
          }
        }
      },
      "user": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/rnizy/",
            "meta": {}
          }
        }
      }
    },
    "type": "comments"
  }
}
```

<h3 id="retrieve-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a comment

<a id="opIdcomments_put"></a>

> Code samples

```bash
curl https://example.com/comments/string/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {
        "content": "changed comment content"
      },
      "id": "{comment_id}",
      "type": "comments"
    }
  }'
```

`PUT /comments/{comment_id}/`

Updates the specified comment by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
#### Returns
Returns JSON with a `data` key containing the new representation of the updated comment, if the request is successful.

If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "content": "changed comment content"
    },
    "id": "{comment_id}",
    "type": "comments"
  }
}
```

<h3 id="update-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|comment_id|path|string|true|The unique identifier of the comment you wish to update.|
|body|body|object|true|none|

<h3 id="update-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a comment

<a id="opIdcomments_delete"></a>

> Code samples

```bash
curl https://example.com/comments/string/ \
  -X DELETE
```

`DELETE /comments/{comment_id}/`

Deletes a comment. This action can be undone by setting deleted to False in a comment update request.
#### Returns
If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="delete-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|comment_id|path|string|true|The unique identifier of the comment you wish to delete.|

<h3 id="delete-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-files">Files</h1>

## Retrieve a file

<a id="opIdfiles_detail"></a>

> Code samples

```bash
curl https://example.com/files/string/ \
  -H 'Accept: application/json'
```

`GET /files/{file_id}/`

Retrieves the details of a file (or folder)
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested file, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
### Waterbutler API actions

Files can be modified through the Waterbutler API routes found in `links` (`new_folder`, `move`, `upload`, `download`, and `delete`).

#### Download (files)

To download a file, issue a GET request against the download link. The response will have the Content-Disposition header set, which will will trigger a download in a browser.

#### Create Subfolder (folders)

You can create a subfolder of an existing folder by issuing a PUT request against the new_folder link. The ?kind=folder portion of the query parameter is already included in the new_folder link. The name of the new subfolder should be provided in the name query parameter. The response will contain a WaterButler folder entity. If a folder with that name already exists in the parent directory, the server will return a 409 Conflict error response.

#### Upload New File (folders)


  To upload a file to a folder, issue a PUT request to the folder's upload link with the raw file data in the request body, and the kind and name query parameters set to 'file' and the desired name of the file. The response will contain a WaterButler file entity that describes the new file. If a file with the same name already exists in the folder, the server will return a 409 Conflict error response.


#### Update Existing File (file)

To update an existing file, issue a PUT request to the file's upload link with the raw file data in the request body and the kind query parameter set to "file". The update action will create a new version of the file. The response will contain a WaterButler file entity that describes the updated file.

#### Rename (files, folders)

To rename a file or folder, issue a POST request to the move link with the action body parameter set to "rename" and the rename body parameter set to the desired name. The response will contain either a folder entity or file entity with the new name.

#### Move & Copy (files, folders)

Move and copy actions both use the same request structure, a POST to the move url, but with different values for the action body parameters. The path parameter is also required and should be the OSF path attribute of the folder being written to. The rename and conflict parameters are optional. If you wish to change the name of the file or folder at its destination, set the rename parameter to the new name. The conflict param governs how name clashes are resolved. Possible values are replace and keep. replace is the default and will overwrite the file that already exists in the target folder. keep will attempt to keep both by adding a suffix to the new file's name until it no longer conflicts. The suffix will be ' (x)' where x is a increasing integer starting from 1. This behavior is intended to mimic that of the OS X Finder. The response will contain either a folder entity or file entity with the new name.
Files and folders can also be moved between nodes and providers. The resource parameter is the id of the node under which the file/folder should be moved. It must agree with the path parameter, that is the path must identify a valid folder under the node identified by resource. Likewise, the provider parameter may be used to move the file/folder to another storage provider, but both the resource and path parameters must belong to a node and folder already extant on that provider. Both resource and provider default to the current node and providers.
If a moved/copied file is overwriting an existing file, a 200 OK response will be returned. Otherwise, a 201 Created will be returned.

#### Delete (file, folders)

To delete a file or folder send a DELETE request to the delete link. Nothing will be returned in the response body.

<h3 id="retrieve-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string|true|The unique identifier of the file you wish to retrieve.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "checkout": null,
      "current_user_can_comment": true,
      "current_version": 1,
      "date_created": "2014-10-17T19:24:12.264Z",
      "date_modified": "2014-10-17T19:24:12.264Z",
      "delete_allowed": true,
      "extra": {
        "downloads": 442,
        "hashes": {
          "md5": "44325d4f13b09f3769ede09d7c20a82c",
          "sha256": "2450eb9ff3db92a1bff370368b0552b270bd4b5ca0745b773c37d2662f94df8e"
        }
      },
      "guid": "sejcv",
      "kind": "file",
      "last_touched": "2015-09-18T01:11:16.328000",
      "materialized_path": "/OSC2012.pdf",
      "name": "OSC2012.pdf",
      "path": "/553e69248c5e4a219919ea54",
      "provider": "osfstorage",
      "size": 216945,
      "tags": []
    },
    "id": "553e69248c5e4a219919ea54",
    "links": {
      "delete": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
      "download": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
      "info": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/",
      "move": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
      "self": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/",
      "upload": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54"
    },
    "relationships": {
      "comments": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/ezcuj/comments/?filter%5Btarget%5D=sejcv",
            "meta": {}
          }
        }
      },
      "node": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/ezcuj/",
            "meta": {}
          }
        }
      },
      "versions": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/versions/",
            "meta": {}
          }
        }
      }
    },
    "type": "files"
  }
}
```

<h3 id="retrieve-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a file

<a id="opIdfiles_patch"></a>

> Code samples

```bash
curl https://example.com/files/string/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {
        "name": "new file name.jpg"
      },
      "id": "{file_id}",
      "type": "files"
    }
  }'
```

`PATCH /files/{file_id}/`

Updates the specified file by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
#### Returns
Returns JSON with a `data` key containing the new representation of the updated file, if the request is successful.

If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "name": "new file name.jpg"
    },
    "id": "{file_id}",
    "type": "files"
  }
}
```

<h3 id="update-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string|true|The unique identifier of the file you wish to update.|
|body|body|object|true|none|

<h3 id="update-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all file versions

<a id="opIdfiles_versions"></a>

> Code samples

```bash
curl https://example.com/files/string/versions/ \
  -H 'Accept: application/json'
```

`GET /files/{file_id}/versions/`


A paginated list of all file versions.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 file versions. Each resource in the array is a separate file version object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="list-all-file-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string|true|The unique identifier of the file from which you want to retrieve versions.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "content_type": "application/octet-stream",
        "date_created": "2017-01-01T12:34:56.78910",
        "size": 216945
      },
      "id": "1",
      "links": {
        "html": "https://osf.io/ezcuj/files/osfstorage/553e69248c5e4a219919ea54?revision=1",
        "self": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/versions/1/"
      },
      "type": "file_versions"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-file-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a file version

<a id="opIdfiles_version_detail"></a>

> Code samples

```bash
curl https://example.com/files/string/versions/string/ \
  -H 'Accept: application/json'
```

`GET /files/{file_id}/versions/{version_id}/`

Retrieves the details of a file version
#### Returns

Returns a JSON object with a `data` key containing the representation of the requested file, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-file-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string|true|The unique identifier of the file from which you want to retrieve versions.|
|version_id|path|string|true|The file version number you want to retrieve.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "content_type": "application/octet-stream",
      "date_created": "2017-01-01T12:34:56.78910",
      "size": 216945
    },
    "id": "1",
    "links": {
      "html": "https://osf.io/ezcuj/files/osfstorage/553e69248c5e4a219919ea54?revision=1",
      "self": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/versions/1/"
    },
    "type": "file_versions"
  }
}
```

<h3 id="retrieve-a-file-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-institutions">Institutions</h1>

## List all institutions

<a id="opIdinstitutions_list"></a>

> Code samples

```bash
curl https://example.com/institutions/ \
  -H 'Accept: application/json'
```

`GET /institutions/`


A paginated list of all verified institutions.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 institutions. Each resource in the array is a separate institution object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include institutions that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/?filter[id]=cos.

Institutions may be filtered by their `id`, `name`, and `auth_url`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "auth_url": null,
        "description": "COS is a non-profit technology company providing free and open services to increase inclusivity and transparency of research. Find out more at <a href=\"https://cos.io\">cos.io</a>.",
        "logo_path": "/static/img/institutions/shields/cos-shield.png",
        "name": "Center For Open Science"
      },
      "id": "cos",
      "links": {
        "self": "https://api.osf.io/v2/institutions/cos/"
      },
      "relationships": {
        "nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/cos/nodes/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/cos/registrations/",
              "meta": {}
            }
          }
        },
        "users": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/cos/users/",
              "meta": {}
            }
          }
        }
      },
      "type": "institutions"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/institutions/cos/nodes/?page=2",
    "meta": {
      "per_page": 10,
      "total": 15
    },
    "next": "https://api.osf.io/v2/institutions/cos/nodes/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-institutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve an institution

<a id="opIdinstitutions_detail"></a>

> Code samples

```bash
curl https://example.com/institutions/string/ \
  -H 'Accept: application/json'
```

`GET /institutions/{institution_id}/`

Retrieves the details of an institution
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested institution, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-an-institution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|institution_id|path|string|true|The unique identifier of the institution you wish to retrieve.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "auth_url": null,
      "description": "COS is a non-profit technology company providing free and open services to increase inclusivity and transparency of research. Find out more at <a href=\"https://cos.io\">cos.io</a>.",
      "logo_path": "/static/img/institutions/shields/cos-shield.png",
      "name": "Center For Open Science"
    },
    "id": "cos",
    "links": {
      "self": "https://api.osf.io/v2/institutions/cos/"
    },
    "relationships": {
      "nodes": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/institutions/cos/nodes/",
            "meta": {}
          }
        }
      },
      "registrations": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/institutions/cos/registrations/",
            "meta": {}
          }
        }
      },
      "users": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/institutions/cos/users/",
            "meta": {}
          }
        }
      }
    },
    "type": "institutions"
  }
}
```

<h3 id="retrieve-an-institution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all affiliated nodes

<a id="opIdinstitutions_node_list"></a>

> Code samples

```bash
curl https://example.com/institutions/string/nodes/ \
  -H 'Accept: application/json'
```

`GET /institutions/{institution_id}/nodes/`

A paginated list of all nodes affiliated with an institution.
#### Versioning
As of version `2.2`, affiliated components (in addition to affiliated top-level projects) are returned from this endpoint.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 nodes. Each resource in the array is a separate nodes object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/nodes?filter[title]=science.

Nodes may be filtered by their `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`

<h3 id="list-all-affiliated-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|institution_id|path|string|true|The unique identifier of the institution you wish to retrieve.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": true,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2017-02-08T18:27:00.135000",
        "date_modified": "2017-02-09T14:19:23.054000",
        "description": "A project storing mp4 files of all the webinar videos posted to the COS youtube channel",
        "fork": false,
        "node_license": {
          "copyright_holders": [
            ""
          ],
          "year": "2017"
        },
        "preprint": false,
        "public": true,
        "registration": false,
        "tags": [],
        "title": "COS Webinar Videos"
      },
      "id": "qpxv2",
      "links": {
        "html": "https://osf.io/qpxv2/",
        "self": "https://api.osf.io/v2/nodes/qpxv2/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/comments/?filter%5Btarget%5D=qpxv2",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/contributors/",
              "meta": {}
            }
          }
        },
        "draft_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/draft_registrations/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/files/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/identifiers/",
              "meta": {}
            }
          }
        },
        "license": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e96a/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/logs/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/node_links/",
              "meta": {}
            }
          }
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/preprints/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/registrations/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qpxv2/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/institutions/cos/nodes/?page=330",
    "meta": {
      "per_page": 10,
      "total": 337
    },
    "next": "https://api.osf.io/v2/institutions/cos/nodes/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-affiliated-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all affiliated registrations

<a id="opIdinstitutions_registration_list"></a>

> Code samples

```bash
curl https://example.com/institutions/string/registrations/ \
  -H 'Accept: application/json'
```

`GET /institutions/{institution_id}/registrations/`

A paginated list of all registrations affiliated with an institution.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 registrations. Each resource in the array is a separate users object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
#### Filtering
You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/registrations?filter[title]=science.

Registrations may be filtered by their  `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`

<h3 id="list-all-affiliated-registrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|institution_id|path|string|true|The unique identifier of the institution you wish to retrieve.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": true,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2016-05-26T14:56:27.310000",
        "date_modified": "2016-12-14T20:48:58.147000",
        "description": "This project contains the materials and proposal for the upcoming OASPA 2016 Conference",
        "fork": false,
        "node_license": {
          "copyright_holders": [
            ""
          ],
          "year": "2016"
        },
        "preprint": false,
        "public": true,
        "registration": true,
        "tags": [
          "TOP Guidelines",
          "Open Practice Badges",
          "Registered Reports",
          "Prereg Challenge"
        ],
        "title": "COASPA 2016, Center for Open Science"
      },
      "id": "xemzv",
      "links": {
        "html": "https://osf.io/xemzv/",
        "self": "https://api.osf.io/v2/registrations/xemzv/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/xemzv/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/comments/?filter%5Btarget%5D=xemzv",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/contributors/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/files/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/identifiers/",
              "meta": {}
            }
          }
        },
        "license": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e96a/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/xemzv/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/logs/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/node_links/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/xemzv/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/institutions/cos/registrations/?page=3",
    "meta": {
      "per_page": 10,
      "total": 22
    },
    "next": "https://api.osf.io/v2/institutions/cos/registrations/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-affiliated-registrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all affiliated users

<a id="opIdinstitutions_users_list"></a>

> Code samples

```bash
curl https://example.com/institutions/string/users/ \
  -H 'Accept: application/json'
```

`GET /institutions/{institution_id}/users/`

A paginated list of all users affiliated with an institution.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 users. Each resource in the array is a separate users object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
#### Filtering
You can optionally request that the response only include users that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/users?filter[family_name]=Nosek.

Users may be filtered by their `id`, `full_name`, `given_name`, `middle_names`, and `family_name`

<h3 id="list-all-affiliated-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|institution_id|path|string|true|The unique identifier of the institution you wish to retrieve.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "active": true,
        "date_registered": "2012-05-31T05:29:01.320000",
        "family_name": "Nosek",
        "full_name": "Brian A. Nosek",
        "given_name": "Brian",
        "locale": "en_US",
        "middle_names": "A.",
        "suffix": "",
        "timezone": "America/New_York"
      },
      "id": "cdi38",
      "links": {
        "html": "https://osf.io/cdi38/",
        "profile_image": "https://secure.gravatar.com/avatar/37fc491096861dae49fe23ba665af56b?d=identicon",
        "self": "https://api.osf.io/v2/users/cdi38/"
      },
      "relationships": {
        "institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/cdi38/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/users/cdi38/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/cdi38/nodes/",
              "meta": {}
            }
          }
        }
      },
      "type": "users"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/institutions/cos/users/?page=8",
    "meta": {
      "per_page": 10,
      "total": 77
    },
    "next": "https://api.osf.io/v2/institutions/cos/users/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-affiliated-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-licenses">Licenses</h1>

## Retrieve a license

<a id="opIdlicenses_read"></a>

> Code samples

```bash
curl https://example.com/license/string/ \
  -H 'Accept: application/json'
```

`GET /license/{license_id}/`

Retrieves the details of a license.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested license, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license_id|path|string|true|The unique identifier of the license.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "name": "BSD 2-Clause \"Simplified\" License",
      "required_fields": [
        "year",
        "copyrightHolders"
      ],
      "text": "Copyright (c) {{year}}, {{copyrightHolders}}\nAll rights reserved.\n\nThe full descriptive text of the License\n"
    },
    "id": "563c1cf88c5e4a3877f9e968",
    "links": {
      "self": "https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e968/"
    },
    "type": "licenses"
  }
}
```

<h3 id="retrieve-a-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all licenses

<a id="opIdlicense_list"></a>

> Code samples

```bash
curl https://example.com/licenses/ \
  -H 'Accept: application/json'
```

`GET /licenses/`

A paginated list of licenses. The returned licenses are sorted by their name.
#### Returns
Returns a JSON object containing `data` and `links` keys.
The `data` key contains an array of 10 licenses. Each resource in the array is a separate license object and contains the full representation of the license, meaning additional requests to a license's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include licenses that match your filters by utilizing the `filter` query parameter, e.g. [https://api.osf.io/v2/licenses/?filter[name]=apache](https://api.osf.io/v2/licenses/?filter[name]=apache).

Licenses may be filtered by their `id`, and `name`.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "name": "BSD 2-Clause \"Simplified\" License",
        "required_fields": [
          "year",
          "copyrightHolders"
        ],
        "text": "Copyright (c) {{year}}, {{copyrightHolders}}\nAll rights reserved.\n\nThe full descriptive text of the License.\n"
      },
      "id": "563c1cf88c5e4a3877f9e968",
      "links": {
        "self": "https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e968/"
      },
      "type": "licenses"
    }
  ],
  "links": {
    "first": "",
    "last": "https://api.osf.io/v2/licenses/?page=2",
    "meta": {
      "per_page": 10,
      "total": 16
    },
    "next": "https://api.osf.io/v2/licenses/?page=2",
    "prev": ""
  }
}
```

<h3 id="list-all-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-nodes">Nodes</h1>

## List all nodes

<a id="opIdnodes_list"></a>

> Code samples

```bash
curl https://example.com/nodes/ \
  -H 'Accept: application/json'
```

`GET /nodes/`


A paginated list of nodes, representing projects and components, on the OSF.

The returned nodes are those which are public or which the user has access to view.

The returned nodes are sorted by their `date_modified`, with the most recently updated nodes appearing first.

Registrations cannot be accessed through this endpoint (use the [registrations](#tag/Registrations) endpoints instead).
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/?filter[title]=reproducibility.

Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.

Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": true,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2012-04-01T15:49:07.702000",
        "date_modified": "2016-12-08T21:45:17.058000",
        "description": "",
        "fork": false,
        "node_license": null,
        "preprint": false,
        "public": true,
        "registration": false,
        "tags": [
          "replication",
          "reproducibility",
          "open science",
          "reproduction",
          "psychological science",
          "psychology",
          "metascience",
          "crowdsource"
        ],
        "title": "Reproducibility Project: Psychology"
      },
      "id": "ezcuj",
      "links": {
        "html": "https://osf.io/ezcuj/",
        "self": "https://api.osf.io/v2/nodes/ezcuj/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/comments/?filter%5Btarget%5D=ezcuj",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/contributors/",
              "meta": {}
            }
          }
        },
        "draft_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/draft_registrations/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/files/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/identifiers/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/logs/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/node_links/",
              "meta": {}
            }
          }
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/preprints/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/registrations/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/nodes/?page=1954",
    "meta": {
      "per_page": 10,
      "total": 19536
    },
    "next": "https://api.osf.io/v2/nodes/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a node

<a id="opIdnodes_create"></a>

> Code samples

```bash
curl https://example.com/nodes/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {
        "category": "software",
        "title": "An Excellent Project Title"
      },
      "type": "nodes"
    }
  }'
```

`POST /nodes/`

Creates a new node.

On the OSF, nodes are considered **projects** or **components**. The difference between a project and a component is that a project is a top-level node, and a component is a child of a project.

Additionally, nodes have a `category` field that includes **project** as an option. The categorization determines what icon is displayed with the node on the OSF, and helps with search organization. Projects (top-level nodes) may have a category other than project, and components (children) may have a category of **project**.
#### Required
Required fields for creating a node include:

&nbsp;&nbsp;&nbsp;&nbsp`title`

&nbsp;&nbsp;&nbsp;&nbsp`category`

Note: Nodes default to **private** unless the `public` field is explicitly set to **true** in the request payload.
#### Returns
Returns a JSON object with a `data` key containing the representation of the created node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "category": "software",
      "title": "An Excellent Project Title"
    },
    "type": "nodes"
  }
}
```

<h3 id="create-a-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» attributes|body|object|true|The properties of the node entity.|
|» » category|body|string|true|The category of the node, as selected by project contributors.|
|» » description|body|string|false|The description of the node.|
|» » node_license|body|string|false|A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).|
|» » public|body|boolean|false|Whether or not the node is publicly visible. This field is only editable by project administrators.|
|» » tags|body|[string]|false|A list of strings that describe this node, as entered by project contributors.|
|» » template_from|body|string|false|The unique ID of the node from which this node was templated, if this node was created from a template.|
|» » title|body|string|true|The title of the node.|
|» relationships|body|object|false|URLs to other entities or entity collections that have a relationship to the node entity.|
|» type|body|string|true|The type identifier of the node entity (`nodes`).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » category|analysis|
|» » category|communication|
|» » category|data|
|» » category|hypothesis|
|» » category|instrumentation|
|» » category|methods and measures|
|» » category|procedure|
|» » category|project|
|» » category|software|
|» » category|other|

<h3 id="create-a-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a node

<a id="opIdnodes_read"></a>

> Code samples

```bash
curl https://example.com/nodes/string/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/`

Retrieves the details of a given node (project or component).
#### Permissions
Only project contributors may retrieve the details of a private node. Attempting to retreive a private node for which you are not a contributor will result in a **403 Forbidden** response.

Authentication is not required to view the details of a public node, as public nodes give read-only access to everyone.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "category": "project",
      "collection": false,
      "current_user_can_comment": true,
      "current_user_permissions": [
        "read"
      ],
      "date_created": "2013-10-08T23:31:56.153000",
      "date_modified": "2017-01-18T20:46:11.076000",
      "description": "We are conducting a study to investigate the replicability of cancer biology studies. Selected results from a substantial number of high-profile papers in the field of cancer biology published between 2010-2012 are being replicated by the Science Exchange network.",
      "fork": false,
      "node_license": null,
      "preprint": false,
      "public": true,
      "registration": false,
      "tags": [
        "cancer biology",
        "reproducibility",
        "replication",
        "open science"
      ],
      "title": "Reproducibility Project: Cancer Biology"
    },
    "id": "e81xl",
    "links": {
      "html": "https://osf.io/e81xl/",
      "self": "https://api.osf.io/v2/nodes/e81xl/"
    },
    "relationships": {
      "affiliated_institutions": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/institutions/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/nodes/e81xl/relationships/institutions/",
            "meta": {}
          }
        }
      },
      "children": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/children/",
            "meta": {}
          }
        }
      },
      "citation": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/citation/",
            "meta": {}
          }
        }
      },
      "comments": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/comments/?filter%5Btarget%5D=e81xl",
            "meta": {}
          }
        }
      },
      "contributors": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/contributors/",
            "meta": {}
          }
        }
      },
      "draft_registrations": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/draft_registrations/",
            "meta": {}
          }
        }
      },
      "files": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/files/",
            "meta": {}
          }
        }
      },
      "forks": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/forks/",
            "meta": {}
          }
        }
      },
      "identifiers": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/identifiers/",
            "meta": {}
          }
        }
      },
      "linked_nodes": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/linked_nodes/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/nodes/e81xl/relationships/linked_nodes/",
            "meta": {}
          }
        }
      },
      "logs": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/logs/",
            "meta": {}
          }
        }
      },
      "node_links": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/node_links/",
            "meta": {}
          }
        }
      },
      "preprints": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/preprints/",
            "meta": {}
          }
        }
      },
      "registrations": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/registrations/",
            "meta": {}
          }
        }
      },
      "root": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/",
            "meta": {}
          }
        }
      },
      "view_only_links": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/view_only_links/",
            "meta": {}
          }
        }
      },
      "wikis": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/e81xl/wikis/",
            "meta": {}
          }
        }
      }
    },
    "type": "nodes"
  }
}
```

<h3 id="retrieve-a-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a node

<a id="opIdnodes_delete"></a>

> Code samples

```bash
curl https://example.com/nodes/string/ \
  -X DELETE
```

`DELETE /nodes/{node_id}/`


Permanently deletes a node. This action cannot be undone.
#### Permissions
Only project administrators may delete a node. Attempting to delete a node for which you are not an administrator will result in a **403 Forbidden** response.
#### Returns
If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="delete-a-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

<h3 id="delete-a-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a node

<a id="opIdnodes_partial_update"></a>

> Code samples

```bash
curl https://example.com/nodes/string/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {
        "description": "An updated abstract.",
        "public": true,
        "tags": [
          "cancer biology",
          "reproducibility"
        ]
      },
      "id": "{node_id}",
      "type": "nodes"
    }
  }'
```

`PATCH /nodes/{node_id}/`

Updates a node by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.

Nodes can be updated with either a **PUT** or **PATCH** request. The `title` and `category` fields are mandatory in a **PUT** request, and optional in a **PATCH**.
#### Permissions
Only write contributors may update a node. Attempting to update a node for which you do not have write access will result in a **403 Forbidden** response.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "description": "An updated abstract.",
      "public": true,
      "tags": [
        "cancer biology",
        "reproducibility"
      ]
    },
    "id": "{node_id}",
    "type": "nodes"
  }
}
```

<h3 id="update-a-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|body|body|object|true|none|

<h3 id="update-a-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all addons

<a id="opIdnodes_addons_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/addons/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/addons/`


A paginated list of addons connected to the given node or project.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of at most 10 addon objects. Each resource in the array is a separate addon object and contains the full representation of the addon, meaning additional requests to a addon's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="list-all-addons-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "configured": false,
        "external_account_id": null,
        "folder_id": null,
        "folder_path": null,
        "node_has_auth": false
      },
      "id": "<provider_id>",
      "links": {
        "self": "http://api.osf.io/v2/nodes/gaz5n/addons/<provider_id>/"
      },
      "type": "node_addons"
    },
    {
      "attributes": {
        "configured": false,
        "external_account_id": null,
        "folder_id": null,
        "folder_path": null,
        "node_has_auth": false
      },
      "id": "<another_provider_id>",
      "links": {
        "self": "http://api.osf.io/v2/nodes/gaz5n/addons/<another_provider_id>/"
      },
      "type": "node_addons"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-addons-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve an addon

<a id="opIdnodes_addon_read"></a>

> Code samples

```bash
curl https://example.com/nodes/string/addons/string/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/addons/{provider}/`

Retrieve details of an individual addon connected to this node.
#### Permissions
NodeSettings that are attached to public nodes will give read-only access to everyone. Private nodes require explicit read permission. Write and admin access are the same for public and private nodes. Administrators on a parent node have implicit read permissions for all child nodes.
Any users with write or admin access to the node are able to deauthorize an enabled addon, but only the addon authorizer is able to change the configuration (i.e. selected folder) of an already-configured NodeSettings entity.
#### Returns
Returns a JSON object with a `data` key containing the details of the requested addon, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-an-addon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|provider|path|string|true|The unique identifier of the addon.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "configured": false,
      "external_account_id": null,
      "folder_id": null,
      "folder_path": null,
      "node_has_auth": false
    },
    "id": "box",
    "links": {
      "self": "http://api.osf.io/v2/nodes/gaz5n/addons/box/"
    },
    "type": "node_addons"
  }
}
```

<h3 id="retrieve-an-addon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update an addon

<a id="opIdnodes_node_addon_update"></a>

> Code samples

```bash
curl https://example.com/nodes/string/addons/string/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {
        "external_account_id": "{account_id}",
        "folder_id": "{folder_id}",
        "folder_path": "{folder_path}",
        "label": "{label}",
        "url": "{url}"
      },
      "id": "{provider}",
      "type": "node_addons"
    }
  }'
```

`PATCH /nodes/{node_id}/addons/{provider}/`

Updates a node addon by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.

Node addon can be updated with either a **PUT** or **PATCH** request. The `external_account_id`, `enabled`, and `folder_id` fields are mandatory in a **PUT**, and optional in **PATCH**. Non-string values will be accepted and stringified, however we make no promises about the stringification output.

To delete or deauthorize a node addon, issue a **PUT** with all fields set to `null` or `False`, or a **PATCH** with enabled set `False`.
#### Permissions
NodeSettings that are attached to public nodes will give read-only access to everyone. Private nodes require explicit read permission. Write and admin access are the same for public and private nodes. Administrators on a parent node have implicit read permissions for all child nodes.
Any users with write or admin access to the node are able to deauthorize an enabled addon, but only the addon authorizer is able to change the configuration (i.e. selected folder) of an already-configured NodeSettings entity.

#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated node addon, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "external_account_id": "{account_id}",
      "folder_id": "{folder_id}",
      "folder_path": "{folder_path}",
      "label": "{label}",
      "url": "{url}"
    },
    "id": "{provider}",
    "type": "node_addons"
  }
}
```

<h3 id="update-an-addon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|provider|path|string|true|The unique identifier of the addon.|
|body|body|object|true|none|

<h3 id="update-an-addon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all addon folders

<a id="opIdnodes_addons_folders_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/addons/string/folders/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/addons/{provider}/folders/`


A paginated list of folders retrieved from the associated third-party (provider) service.
#### Permissions
Folders are visible only to the user that authorized the addon.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of addon folder objects. Each resource in the array is a separate addon folder object and contains the full representation of the addon folder, meaning additional requests to a addon folder's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="list-all-addon-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|provider|path|string|true|The unique identifier of the provider|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "folder_id": "/",
        "kind": "folder",
        "name": "/ ()",
        "path": "/",
        "provider": "<provider_id>"
      },
      "id": "/",
      "links": {
        "children": "https://api.osf.io/v2/nodes/<node_id>/addons/<provider_id>/folders/?path=/&id=/",
        "root": "https://api.osf.io/v2/nodes/<node_id>/addons/<provider_id>/folders/"
      },
      "type": "node_addon_folders"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 1000,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-addon-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all child nodes

<a id="opIdnodes_children_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/children/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/children/`


A paginated list of the next level child nodes for the given node. The returned nodes are sorted by their `date_modified`, with the most recently updated child nodes appearing first.

The list will include child nodes that are public, as well as child nodes that are private, if the authenticated user has permission to view them.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 child nodes. If the given node has zero child nodes, the `data` key will contain an empty array. Each resource in the array is a separate node object and contains the full representation of the child node, meaning additional requests to the child node's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/children/?filter[title]=reproducibility.

Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.

Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.

<h3 id="list-all-child-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "communication",
        "collection": false,
        "current_user_can_comment": false,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2015-07-20T17:42:16.496000",
        "date_modified": "2016-11-02T21:25:12.572000",
        "description": "Reproducibility is a defining feature of science, but the extent to which it characterizes current research is unknown. We conducted replications of 100 experimental and correlational studies published in three psychology journals using high-powered designs and original materials when available. Replication effects were half the magnitude of original effects, representing a substantial decline. Ninety-seven percent of original studies had statistically significant results. Thirty-six percent of replications had statistically significant results; 47% of original effect sizes were in the 95% confidence interval of the replication effect size; 39% of effects were subjectively rated to have replicated the original result; and if no bias in original results is assumed, combining original and replication results left 68% with statistically significant effects. Correlational tests suggest that replication success was better predicted by the strength of original evidence than by characteristics of the original and replication teams.",
        "fork": false,
        "node_license": null,
        "preprint": true,
        "public": true,
        "registration": false,
        "tags": [
          "replication",
          "reproducibility",
          "effect size"
        ],
        "title": "Estimating the Reproducibility of Psychological Science"
      },
      "id": "ezum7",
      "links": {
        "html": "https://osf.io/ezum7/",
        "self": "https://api.osf.io/v2/nodes/ezum7/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/ezum7/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/comments/?filter%5Btarget%5D=ezum7",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/contributors/",
              "meta": {}
            }
          }
        },
        "draft_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/draft_registrations/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/files/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/identifiers/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/ezum7/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/logs/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/node_links/",
              "meta": {}
            }
          }
        },
        "parent": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {}
            }
          }
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/preprints/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/registrations/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezum7/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/nodes/ezcuj/children/?page=5",
    "meta": {
      "per_page": 10,
      "total": 49
    },
    "next": "https://api.osf.io/v2/nodes/ezcuj/children/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-child-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a child node

<a id="opIdnodes_children_create"></a>

> Code samples

```bash
curl https://example.com/nodes/string/children/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {
        "category": "software",
        "title": "An Excellent Project Title"
      },
      "type": "nodes"
    }
  }'
```

`POST /nodes/{node_id}/children/`

Creates a new child node.

Note: Creating a child node via this endpoint will function the same as creating a node via the node list endpoint, but the child node will have the given node set as its parent.
#### Permissions
Only write contributors may create children nodes.
#### Required
Required fields for creating a node include:

&nbsp;&nbsp;&nbsp;&nbsp`title`

&nbsp;&nbsp;&nbsp;&nbsp`category`

Note: nodes default to **private** unless the `public` field is explicitly set to **true** in the request payload.
#### Returns
Returns a JSON object with a `data` key containing the representation of the created node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "category": "software",
      "title": "An Excellent Project Title"
    },
    "type": "nodes"
  }
}
```

<h3 id="create-a-child-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|body|body|object|true|none|
|» attributes|body|object|true|The properties of the node entity.|
|» » category|body|string|true|The category of the node, as selected by project contributors.|
|» » description|body|string|false|The description of the node.|
|» » node_license|body|string|false|A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).|
|» » public|body|boolean|false|Whether or not the node is publicly visible. This field is only editable by project administrators.|
|» » tags|body|[string]|false|A list of strings that describe this node, as entered by project contributors.|
|» » template_from|body|string|false|The unique ID of the node from which this node was templated, if this node was created from a template.|
|» » title|body|string|true|The title of the node.|
|» relationships|body|object|false|URLs to other entities or entity collections that have a relationship to the node entity.|
|» type|body|string|true|The type identifier of the node entity (`nodes`).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » category|analysis|
|» » category|communication|
|» » category|data|
|» » category|hypothesis|
|» » category|instrumentation|
|» » category|methods and measures|
|» » category|procedure|
|» » category|project|
|» » category|software|
|» » category|other|

<h3 id="create-a-child-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve citation details

<a id="opIdnodes_citation_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/citation/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/citation/`

The citation details for a node, in CSL format.
#### Returns
Returns a JSON object with a `data` key that contains the representation of the details necessary for the node citation.

<h3 id="retrieve-citation-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "author": [
        {
          "family": "Errington",
          "given": "Timothy M"
        },
        {
          "family": "Vasilevsky",
          "given": "Nicole"
        },
        {
          "family": "Haendel",
          "given": "Melissa A"
        }
      ],
      "publisher": "Open Science Framework",
      "title": "Identification Analysis of RP:CB",
      "type": "webpage"
    },
    "id": "bg4di",
    "links": {
      "self": "osf.io/bg4di"
    },
    "type": "node-citation"
  }
}
```

<h3 id="retrieve-citation-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a styled citation

<a id="opIdnodes_citation_read"></a>

> Code samples

```bash
curl https://example.com/nodes/string/citation/string/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/citation/{style_id}/`

The citation for a node in a specific style.
#### Returns
Returns a JSON object with a `data` key that contains the representation of the node citation, in the requested style.

<h3 id="retrieve-a-styled-citation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|The unique identifier of the citation style.|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "citation": "Aarts, A. A., Anderson, C. J., Anderson, J., van Assen, M. A. L. M., Attridge, P. R., Attwood, A. S., … Grange, J. (2016, December 8). Reproducibility Project: Psychology. Retrieved from osf.io/ezcuj"
    },
    "id": "apa",
    "links": {},
    "type": "styled-citations"
  }
}
```

<h3 id="retrieve-a-styled-citation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all comments

<a id="opIdnodes_comments_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/comments/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/comments/`


A paginated list of comments related to a given node.

The returned comments are sorted by their creation date, with the most recent comments appearing first.
#### Permissions
Comments on public nodes are given read-only access to everyone.

If the node comment-level is `private`, only contributors have permission to comment.

If the comment-level is `public`, any logged-in OSF user can comment.

Comments on private nodes are only visible to contributors and administrators on the parent node.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/comments/?filter[target_id]=jg7sezmdnt93

Nodes may be filtered by their `deleted`, `target_id`, `date_created`, `date_modified`.

Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.

<h3 id="list-all-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "can_edit": false,
        "content": "We have published a Bayesian reanalysis of this project at PLOS ONE: http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0149794\n\nI explain some of the context on my blog: http://alexanderetz.com/2016/02/26/the-bayesian-rpp-take-2/\n\nPlease note that the analysis we use in this paper is very different from the analysis used in the blog I posted in the previous comment, so the results are different as well.",
        "date_created": "2016-02-27T13:50:24.240000",
        "date_modified": "2016-04-01T04:45:44.123000",
        "deleted": false,
        "has_children": false,
        "has_report": false,
        "is_abuse": false,
        "is_ham": false,
        "modified": false,
        "page": "node"
      },
      "id": "jg7sezmdnt93",
      "links": {
        "self": "https://api.osf.io/v2/comments/jg7sezmdnt93/"
      },
      "relationships": {
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {}
            }
          }
        },
        "replies": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/comments/?filter%5Btarget%5D=jg7sezmdnt93",
              "meta": {}
            }
          }
        },
        "reports": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/comments/jg7sezmdnt93/reports/",
              "meta": {}
            }
          }
        },
        "target": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {
                "type": "nodes"
              }
            }
          }
        },
        "user": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/6yc8z/",
              "meta": {}
            }
          }
        }
      },
      "type": "comments"
    },
    {
      "attributes": {
        "can_edit": false,
        "content": "In this blog http://wp.me/p4sgtg-o6 I conduct a Bayesian Re-analysis of the Reproducibility Project that gives a graded measure of replication success. In an attempt to avoid dichotomous success/fail replication outcomes, I calculate a continous outcome (Bayes factor) that answers the question, does the replication result fit more with the original reported effect or a null effect? Many replications are strong successes, many are strong failures, and there are many that lie somewhere in between.",
        "date_created": "2015-08-30T14:50:21.093000",
        "date_modified": "2016-04-01T04:45:37.437000",
        "deleted": false,
        "has_children": false,
        "has_report": false,
        "is_abuse": false,
        "is_ham": false,
        "modified": null,
        "page": "node"
      },
      "id": "23pk9",
      "links": {
        "self": "https://api.osf.io/v2/comments/23pk9/"
      },
      "relationships": {
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {}
            }
          }
        },
        "replies": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/comments/?filter%5Btarget%5D=23pk9",
              "meta": {}
            }
          }
        },
        "reports": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/comments/23pk9/reports/",
              "meta": {}
            }
          }
        },
        "target": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {
                "type": "nodes"
              }
            }
          }
        },
        "user": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/6yc8z/",
              "meta": {}
            }
          }
        }
      },
      "type": "comments"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a comment

<a id="opIdnodes_comment_create"></a>

> Code samples

```bash
curl https://example.com/nodes/string/comments/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {
        "content": "comment content"
      },
      "relationships": {
        "target": {
          "data": {
            "id": "{target_id}",
            "type": "{target_type}"
          }
        }
      },
      "type": "comments"
    }
  }'
```

`POST /nodes/{node_id}/comments/`

Create a comment on a given node overview page or a reply to a comment on that node.

To create a comment on the node overview page, the target `type` would be "nodes" and the target `id` would be the node `id`.

To reply to a comment on this node, the target `type` would be "comments" and the target `id` would be the `id` of the comment to reply to.
#### Required
A relationship object with a `data` key, containing the target (`comments` or `nodes`) type and a target `id` is required.
In addition, the `content` attribute describing the relationship between the node and the comment is required.
#### Returns
Returns a JSON object with a data key containing the representation of the new comment, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "content": "comment content"
    },
    "relationships": {
      "target": {
        "data": {
          "id": "{target_id}",
          "type": "{target_type}"
        }
      }
    },
    "type": "comments"
  }
}
```

<h3 id="create-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node you want to comment on.|
|body|body|object|true|none|
|» attributes|body|object|false|The properties of the comment entity.|
|» » content|body|string|false|The content of the comment.|
|» relationships|body|object|false|URLs to other entities or entity collections that have a relationship to the comment entity.|

<h3 id="create-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all contributors

<a id="opIdnodes_contributors_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/contributors/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/contributors/`

A paginated list of the node's contributors, sorted by their index.

Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/y9jdt/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.

<h3 id="list-all-contributors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "bibliographic": true,
        "index": 0,
        "permission": "admin",
        "unregistered_contributor": null
      },
      "embeds": {
        "users": {
          "data": {
            "attributes": {
              "active": true,
              "date_registered": "2014-03-18T19:11:57.252000",
              "family_name": "Geiger",
              "full_name": "Brian J. Geiger",
              "given_name": "Brian",
              "locale": "en_us",
              "middle_names": "J.",
              "suffix": "",
              "timezone": "America/New_York"
            },
            "id": "typ46",
            "links": {
              "html": "https://osf.io/typ46/",
              "profile_image": "https://secure.gravatar.com/avatar/3dd8757ba100b8406413706886243811?d=identicon",
              "self": "https://api.osf.io/v2/users/typ46/"
            },
            "relationships": {
              "institutions": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/typ46/institutions/",
                    "meta": {}
                  },
                  "self": {
                    "href": "https://api.osf.io/v2/users/typ46/relationships/institutions/",
                    "meta": {}
                  }
                }
              },
              "nodes": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/typ46/nodes/",
                    "meta": {}
                  }
                }
              }
            },
            "type": "users"
          }
        }
      },
      "id": "y9jdt-typ46",
      "links": {
        "self": "https://api.osf.io/v2/nodes/y9jdt/contributors/typ46/"
      },
      "relationships": {
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/y9jdt/",
              "meta": {}
            }
          }
        },
        "users": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/typ46/",
              "meta": {}
            }
          }
        }
      },
      "type": "contributors"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 9,
      "total_bibliographic": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-contributors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a contributor

<a id="opIdnodes_contributors_create"></a>

> Code samples

```bash
curl https://example.com/nodes/string/contributors/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {},
      "relationships": {
        "user": {
          "data": {
            "id": "guid0",
            "type": "users"
          }
        }
      },
      "type": "contributors"
    }
  }'
```

`POST /nodes/{node_id}/contributors/`

Adds a contributor to a node, effectively creating a relationship between the node and a user.

Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.

Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
#### Permissions
Only project administrators can add contributors to a node.
#### Required
A relationship object with a `data` key, containing the `users` type and valid user ID is required.

All attributes describing the relationship between the node and the user are optional.
#### Returns
Returns a JSON object with a `data` key containing the representation of the new contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {},
    "relationships": {
      "user": {
        "data": {
          "id": "guid0",
          "type": "users"
        }
      }
    },
    "type": "contributors"
  }
}
```

<h3 id="create-a-contributor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|body|body|object|true|none|
|» attributes|body|object|false|The properties of the contributor entity.|
|» » bibliographic|body|boolean|false|Whether or not the contributor will be included in citations for the node. The default value is true.|
|» » index|body|integer|false|The position of this contributor in the list of project contributors and in project citations.|
|» » permission|body|string|false|The permission level of the contributor. The default value is 'write'.|
|» relationships|body|object|true|URLs to other entities or entity collections that have a relationship to the contributor entity.|
|» » user|body|string|true|A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » permission|read|
|» » permission|write|
|» » permission|admin|

<h3 id="create-a-contributor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a contributor

<a id="opIdnodes_contributors_read"></a>

> Code samples

```bash
curl https://example.com/nodes/string/contributors/string/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/contributors/{user_id}/`

Retrieves the details of a given contributor.

Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-contributor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|user_id|path|string|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "bibliographic": true,
      "index": 0,
      "permission": "admin",
      "unregistered_contributor": null
    },
    "embeds": {
      "users": {
        "data": {
          "attributes": {
            "active": true,
            "date_registered": "2014-03-18T19:11:57.252000",
            "family_name": "Geiger",
            "full_name": "Brian J. Geiger",
            "given_name": "Brian",
            "locale": "en_us",
            "middle_names": "J.",
            "suffix": "",
            "timezone": "America/New_York"
          },
          "id": "typ46",
          "links": {
            "html": "https://osf.io/typ46/",
            "profile_image": "https://secure.gravatar.com/avatar/3dd8757ba100b8406413706886243811?d=identicon",
            "self": "https://api.osf.io/v2/users/typ46/"
          },
          "relationships": {
            "institutions": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/typ46/institutions/",
                  "meta": {}
                },
                "self": {
                  "href": "https://api.osf.io/v2/users/typ46/relationships/institutions/",
                  "meta": {}
                }
              }
            },
            "nodes": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/typ46/nodes/",
                  "meta": {}
                }
              }
            }
          },
          "type": "users"
        }
      }
    },
    "id": "y9jdt-typ46",
    "links": {
      "self": "https://api.osf.io/v2/nodes/y9jdt/contributors/typ46/"
    },
    "relationships": {
      "node": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/y9jdt/",
            "meta": {}
          }
        }
      },
      "users": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/typ46/",
            "meta": {}
          }
        }
      }
    },
    "type": "contributors"
  }
}
```

<h3 id="retrieve-a-contributor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a contributor

<a id="opIdnodes_contributors_delete"></a>

> Code samples

```bash
curl https://example.com/nodes/string/contributors/string/ \
  -X DELETE
```

`DELETE /nodes/{node_id}/contributors/{user_id}/`

Removes a contributor from a node. This request only removes the relationship between the node and the user, it does not delete the user itself.

A node must always have at least one admin, and attempting to remove the only admin from a node will result in a **400 Bad Request** response.
#### Permissions
A user can remove themselves as a node contributor. Otherwise, only project administrators can remove contributors.
#### Returns
If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="delete-a-contributor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|user_id|path|string|true|The unique identifier of the user.|

<h3 id="delete-a-contributor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a contributor

<a id="opIdnodes_contributors_partial_update"></a>

> Code samples

```bash
curl https://example.com/nodes/string/contributors/string/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {},
      "relationships": {
        "user": {
          "data": {
            "id": "guid0",
            "type": "users"
          }
        }
      },
      "type": "contributors"
    }
  }'
```

`PATCH /nodes/{node_id}/contributors/{user_id}/`

Updates a contributor by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.

Contributors can be updated with either a **PUT** or **PATCH** request. Since this endpoint has no mandatory attributes, PUT and PATCH are functionally the same.
#### Permissions
Only project administrators can update the contributors on a node.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

If the given user is not already in the contributor list, a 404 Not Found error will be returned. A node must always have at least one admin, and any attempt to downgrade the permissions of a sole admin will result in a 400 Bad Request error.

> Body parameter

```json
{
  "data": {
    "attributes": {},
    "relationships": {
      "user": {
        "data": {
          "id": "guid0",
          "type": "users"
        }
      }
    },
    "type": "contributors"
  }
}
```

<h3 id="update-a-contributor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|user_id|path|string|true|The unique identifier of the user.|
|body|body|object|true|none|
|» attributes|body|object|false|The properties of the contributor entity.|
|» » bibliographic|body|boolean|false|Whether or not the contributor will be included in citations for the node. The default value is true.|
|» » index|body|integer|false|The position of this contributor in the list of project contributors and in project citations.|
|» » permission|body|string|false|The permission level of the contributor. The default value is 'write'.|
|» relationships|body|object|true|URLs to other entities or entity collections that have a relationship to the contributor entity.|
|» » user|body|string|true|A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » permission|read|
|» » permission|write|
|» » permission|admin|

<h3 id="update-a-contributor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all draft registrations

<a id="opIdnodes_draft_registrations_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/draft_registrations/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/draft_registrations/`

A paginated list of all of the draft registrations of a given node.

Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.

Your original project remains editable but will now have the draft registration linked to it.
#### Permissions
Only project administrators may view draft registrations.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 draft registrations. Each resource in the array is a separate draft registration object and contains the full representation of the draft registration, meaning additional requests to a draft registration's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="list-all-draft-registrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "",
        "datetime_initiated": "2022-05-03T17:03:50.288542",
        "datetime_updated": "2022-05-03T17:03:50.560153",
        "description": "",
        "node_license": null,
        "registration_metadata": {},
        "registration_responses": {},
        "tags": [],
        "title": "Untitled"
      },
      "id": "62716076d90ebe0017f2bf42",
      "links": {
        "self": "https://api.osf.io/v2/draft_registrations/62716076d90ebe0017f2bf42/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/draft_registrations/62716076d90ebe0017f2bf42/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/draft_registrations/62716076d90ebe0017f2bf42/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "branched_from": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/nmj5w/",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/draft_registrations/62716076d90ebe0017f2bf42/contributors/",
              "meta": {}
            }
          }
        },
        "initiator": {
          "data": {
            "id": "fgvc6",
            "type": "users"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/fgvc6/",
              "meta": {}
            }
          }
        },
        "provider": {
          "data": {
            "id": "osf",
            "type": "registration-providers"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/providers/registrations/osf/",
              "meta": {}
            }
          }
        },
        "registration_schema": {
          "data": {
            "id": "61e02b6c90de34000ae3447a",
            "type": "registration-schemas"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/schemas/registrations/61e02b6c90de34000ae3447a/",
              "meta": {}
            }
          }
        },
        "subjects": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/draft_registrations/62716076d90ebe0017f2bf42/subjects/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/draft_registrations/62716076d90ebe0017f2bf42/relationships/subjects/",
              "meta": {}
            }
          }
        }
      },
      "type": "draft_registrations"
    }
  ],
  "links": {
    "first": "",
    "last": "",
    "meta": {
      "per_page": 10,
      "total": ""
    },
    "next": "",
    "prev": ""
  }
}
```

<h3 id="list-all-draft-registrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a draft registration based on your current project Node.

<a id="opIdnodes_draft_registrations_create"></a>

> Code samples

```bash
curl https://example.com/nodes/string/draft_registrations/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "relationships": {
        "registration_schema": {
          "data": {
            "id": "61e02b6c90de34000ae3447a",
            "type": "registration_schemas"
          }
        }
      },
      "type": "draft_registrations"
    }
  }'
```

`POST /nodes/{node_id}/draft_registrations/`

Initiate a draft registration of the current node.
Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.

Your original project remains editable but will now have the draft registration linked to it.
#### Permissions
Only project administrators may view create registrations.
#### Required
Required fields for creating a draft registration include:

&nbsp;&nbsp;&nbsp;&nbsp;`schema_id`
#### Returns
Returns a JSON object with a `data` key containing the representation of the created draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "relationships": {
      "registration_schema": {
        "data": {
          "id": "61e02b6c90de34000ae3447a",
          "type": "registration_schemas"
        }
      }
    },
    "type": "draft_registrations"
  }
}
```

<h3 id="create-a-draft-registration-based-on-your-current-project-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|body|body|object|true|none|
|» attributes|body|object|true|The properties of the Draft Registration entity.|
|» » category|body|string|false|The category of the Draft Registration.|
|» » description|body|string|false|The description of the Draft Registration.|
|» » node_license|body|object|false|none|
|» » » copyright_holders|body|[string]|false|A list of names of copyright holders for the license.|
|» » » year|body|integer|false|The year the copyright was made.|
|» » registration_metadata|body|object|false|This is a legacy format for `registration_responses`.|
|» » registration_responses|body|object|false|A dictionary of question IDs and responses from the registration schema.|
|» » tags|body|[string]|false|The searchable tags of the Draft Registration.|
|» » title|body|string|false|The title of the Draft Registration.|

<h3 id="create-a-draft-registration-based-on-your-current-project-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a draft registration

<a id="opIdnodes_draft_registrations_delete"></a>

> Code samples

```bash
curl https://example.com/nodes/string/draft_registrations/string/ \
  -X DELETE
```

`DELETE /nodes/{node_id}/draft_registrations/{draft_id}/`

Permanently deletes a draft registration. A draft that has already been registered cannot be deleted.
#### Permissions
Only project administrators may delete draft registrations.
#### Returns
If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

<h3 id="delete-a-draft-registration-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|draft_id|path|string|true|The unique identifier of the draft registration.|

<h3 id="delete-a-draft-registration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a draft registration

<a id="opIdnodes_draft_registrations_partial_update"></a>

> Code samples

```bash
curl https://example.com/nodes/string/draft_registrations/string/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "relationships": {
        "registration_schema": {
          "data": {
            "id": "61e02b6c90de34000ae3447a",
            "type": "registration_schemas"
          }
        }
      },
      "type": "draft_registrations"
    }
  }'
```

`PATCH /nodes/{node_id}/draft_registrations/{draft_id}/`

Updates a draft registration by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.

Draft Registrations contain Registration questions that will become part of the Registration. Answer the questions in the draft registration supplement by sending update requests until you are ready to submit the draft.

The registration supplement of a draft registration cannot be updated after the draft has been created.

When updating a draft registration, `registration_metadata` is required. It must be a dictionary with keys as question ids in the registration form, and values as nested dictionaries matching the specific format in the [registration schema](TODO: link me pls).

If a question is multiple-choice, the question response must exactly match one of the possible choices.
#### Permissions
Only project administrators may update draft registrations.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated draft registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "relationships": {
      "registration_schema": {
        "data": {
          "id": "61e02b6c90de34000ae3447a",
          "type": "registration_schemas"
        }
      }
    },
    "type": "draft_registrations"
  }
}
```

<h3 id="update-a-draft-registration-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|draft_id|path|string|true|The unique identifier of the draft registration.|
|body|body|object|true|none|
|» attributes|body|object|true|The properties of the Draft Registration entity.|
|» » category|body|string|false|The category of the Draft Registration.|
|» » description|body|string|false|The description of the Draft Registration.|
|» » node_license|body|object|false|none|
|» » » copyright_holders|body|[string]|false|A list of names of copyright holders for the license.|
|» » » year|body|integer|false|The year the copyright was made.|
|» » registration_metadata|body|object|false|This is a legacy format for `registration_responses`.|
|» » registration_responses|body|object|false|A dictionary of question IDs and responses from the registration schema.|
|» » tags|body|[string]|false|The searchable tags of the Draft Registration.|
|» » title|body|string|false|The title of the Draft Registration.|

<h3 id="update-a-draft-registration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all storage providers

<a id="opIdnodes_providers_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/files/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/files/`

List of all storage providers that are configured for this node

Users of the OSF may access their data on a [number of cloud-storage services](https://api.osf.io/v2/#storage-providers) that have integrations with the OSF. We call these **providers**. By default, every node has access to the OSF-provided storage but may use as many of the supported providers as desired.


#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of files. Each resource in the array is a separate file object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

Note: In the OSF filesystem model, providers are treated as folders, but with special properties that distinguish them from regular folders. Every provider folder is considered a root folder, and may not be deleted through the regular file API.

<h3 id="list-all-storage-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "kind": "folder",
        "name": "osfstorage",
        "node": "ezcuj",
        "path": "/",
        "provider": "osfstorage"
      },
      "id": "ezcuj:osfstorage",
      "links": {
        "new_folder": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/?kind=folder",
        "storage_addons": "https://api.osf.io/v2/addons/?filter%5Bcategories%5D=storage",
        "upload": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/"
      },
      "relationships": {
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/files/osfstorage/",
              "meta": {}
            }
          }
        }
      },
      "type": "files"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-storage-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a storage provider

<a id="opIdnodes_providers_read"></a>

> Code samples

```bash
curl https://example.com/nodes/string/files/providers/string/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/files/providers/{provider}/`

Retrieves the details of a storage provider enabled on this node.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested file object, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-storage-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|provider|path|string|true|The unique identifier of the storage provider.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "kind": "folder",
        "name": "osfstorage",
        "node": "ezcuj",
        "path": "/",
        "provider": "osfstorage"
      },
      "id": "ezcuj:osfstorage",
      "links": {
        "new_folder": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/?kind=folder",
        "storage_addons": "https://api.osf.io/v2/addons/?filter%5Bcategories%5D=storage",
        "upload": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/"
      },
      "relationships": {
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/files/osfstorage/",
              "meta": {}
            }
          }
        }
      },
      "type": "files"
    }
  ]
}
```

<h3 id="retrieve-a-storage-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all node files

<a id="opIdnodes_files_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/files/string/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/files/{provider}/`

List of all the files/folders that are attached to your project for a given storage provider.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/files/osfstorage/?filter[kind]=file

Node files may be filtered by `id`, `name`, `node`, `kind`, `path`, `provider`, `size`, and `last_touched`.

### Waterbutler API actions

Files can be modified through the Waterbutler API routes found in `links` (`new_folder`, `move`, `upload`, `download`, and `delete`).

#### Download (files)

To download a file, issue a GET request against the download link. The response will have the Content-Disposition header set, which will will trigger a download in a browser.

#### Create Subfolder (folders)

You can create a subfolder of an existing folder by issuing a PUT request against the new_folder link. The ?kind=folder portion of the query parameter is already included in the new_folder link. The name of the new subfolder should be provided in the name query parameter. The response will contain a WaterButler folder entity. If a folder with that name already exists in the parent directory, the server will return a 409 Conflict error response.

#### Upload New File (folders)

To upload a file to a folder, issue a PUT request to the folder's upload link with the raw file data in the request body, and the kind and name query parameters set to 'file' and the desired name of the file. The response will contain a WaterButler file entity that describes the new file. If a file with the same name already exists in the folder, the server will return a 409 Conflict error response.

#### Update Existing File (file)

To update an existing file, issue a PUT request to the file's upload link with the raw file data in the request body and the kind query parameter set to "file". The update action will create a new version of the file. The response will contain a WaterButler file entity that describes the updated file.

#### Rename (files, folders)

To rename a file or folder, issue a POST request to the move link with the action body parameter set to "rename" and the rename body parameter set to the desired name. The response will contain either a folder entity or file entity with the new name.

#### Move & Copy (files, folders)

Move and copy actions both use the same request structure, a POST to the move url, but with different values for the action body parameters. The path parameter is also required and should be the OSF path attribute of the folder being written to. The rename and conflict parameters are optional. If you wish to change the name of the file or folder at its destination, set the rename parameter to the new name. The conflict param governs how name clashes are resolved. Possible values are replace and keep. replace is the default and will overwrite the file that already exists in the target folder. keep will attempt to keep both by adding a suffix to the new file's name until it no longer conflicts. The suffix will be ' (x)' where x is a increasing integer starting from 1. This behavior is intended to mimic that of the OS X Finder. The response will contain either a folder entity or file entity with the new name.
Files and folders can also be moved between nodes and providers. The resource parameter is the id of the node under which the file/folder should be moved. It must agree with the path parameter, that is the path must identify a valid folder under the node identified by resource. Likewise, the provider parameter may be used to move the file/folder to another storage provider, but both the resource and path parameters must belong to a node and folder already extant on that provider. Both resource and provider default to the current node and providers.
If a moved/copied file is overwriting an existing file, a 200 OK response will be returned. Otherwise, a 201 Created will be returned.

#### Delete (file, folders)

To delete a file or folder send a DELETE request to the delete link. Nothing will be returned in the response body.

<h3 id="list-all-node-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|provider|path|string|true|The unique identifier of the storage provider.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "checkout": null,
        "current_user_can_comment": true,
        "current_version": 1,
        "date_created": "2014-10-17T19:24:12.264Z",
        "date_modified": "2014-10-17T19:24:12.264Z",
        "delete_allowed": true,
        "extra": {
          "downloads": 447,
          "hashes": {
            "md5": "44325d4f13b09f3769ede09d7c20a82c",
            "sha256": "2450eb9ff3db92a1bff370368b0552b270bd4b5ca0745b773c37d2662f94df8e"
          }
        },
        "guid": "sejcv",
        "kind": "file",
        "last_touched": "2015-09-18T01:11:16.328000",
        "materialized_path": "/OSC2012.pdf",
        "name": "OSC2012.pdf",
        "path": "/553e69248c5e4a219919ea54",
        "provider": "osfstorage",
        "size": 216945,
        "tags": []
      },
      "id": "553e69248c5e4a219919ea54",
      "links": {
        "delete": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
        "download": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
        "info": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/",
        "move": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
        "self": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/",
        "upload": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54"
      },
      "relationships": {
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/comments/?filter%5Btarget%5D=sejcv",
              "meta": {}
            }
          }
        },
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {}
            }
          }
        },
        "versions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/versions/",
              "meta": {}
            }
          }
        }
      },
      "type": "files"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-node-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a file

<a id="opIdnodes_files_read"></a>

> Code samples

```bash
curl https://example.com/nodes/string/files/string/string/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/files/{provider}/{path}/`

Retrieves the details of a file attached to given node (project or component) for the given storage provider.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested file object, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-file-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|provider|path|string|true|The unique identifier of the storage provider.|
|path|path|string|true|The unique identifier of the file path.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "checkout": null,
      "current_user_can_comment": true,
      "current_version": 1,
      "date_created": "2014-10-17T19:24:12.264Z",
      "date_modified": "2014-10-17T19:24:12.264Z",
      "delete_allowed": true,
      "extra": {
        "downloads": 447,
        "hashes": {
          "md5": "44325d4f13b09f3769ede09d7c20a82c",
          "sha256": "2450eb9ff3db92a1bff370368b0552b270bd4b5ca0745b773c37d2662f94df8e"
        }
      },
      "guid": "sejcv",
      "kind": "file",
      "last_touched": "2015-09-18T01:11:16.328000",
      "materialized_path": "/OSC2012.pdf",
      "name": "OSC2012.pdf",
      "path": "/553e69248c5e4a219919ea54",
      "provider": "osfstorage",
      "size": 216945,
      "tags": []
    },
    "id": "553e69248c5e4a219919ea54",
    "links": {
      "delete": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
      "download": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
      "info": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/",
      "move": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
      "self": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/",
      "upload": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54"
    },
    "relationships": {
      "comments": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/ezcuj/comments/?filter%5Btarget%5D=sejcv",
            "meta": {}
          }
        }
      },
      "node": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/ezcuj/",
            "meta": {}
          }
        }
      },
      "versions": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/versions/",
            "meta": {}
          }
        }
      }
    },
    "type": "files"
  }
}
```

<h3 id="retrieve-a-file-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all forks of this node

<a id="opIdnodes_forks_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/forks/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/forks/`


A paginated list of the current node's forks. The returned fork nodes are sorted by their `forked_date`, with the most recently forked nodes appearing first.

Forking a project creates a copy of an existing node and all of its contents. The fork always points back to the original node, forming a network of nodes.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 forked nodes. If the current node has zero forked nodes, the `data` key will contain an empty array. Each resource in the array is a separate node object and contains the full representation of the forked node, meaning additional requests to the forked node's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.

<h3 id="list-all-forks-of-this-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": true,
        "current_user_permissions": [
          "read",
          "write",
          "admin"
        ],
        "date_created": "2012-04-01T15:49:07.702000",
        "date_modified": "2016-07-23T00:21:05.371000",
        "description": "",
        "fork": true,
        "forked_date": "2016-11-08T15:59:03.114000",
        "node_license": null,
        "preprint": false,
        "public": false,
        "registration": false,
        "tags": [
          "replication",
          "reproducibility",
          "open science",
          "reproduction",
          "psychological science",
          "psychology",
          "metascience",
          "crowdsource"
        ],
        "title": "Fork of Reproducibility Project: Psychology"
      },
      "id": "95q3e",
      "links": {
        "html": "https://osf.io/95q3e/",
        "self": "https://api.osf.io/v2/nodes/95q3e/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/95q3e/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/comments/?filter%5Btarget%5D=95q3e",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/contributors/",
              "meta": {}
            }
          }
        },
        "draft_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/draft_registrations/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/files/",
              "meta": {}
            }
          }
        },
        "forked_from": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/identifiers/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/95q3e/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/logs/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/node_links/",
              "meta": {}
            }
          }
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/preprints/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/registrations/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/95q3e/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-forks-of-this-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a fork of this node

<a id="opIdnodes_forks_create"></a>

> Code samples

```bash
curl https://example.com/nodes/string/forks/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {
        "category": "software",
        "title": "An Excellent Project Title"
      },
      "type": "nodes"
    }
  }'
```

`POST /nodes/{node_id}/forks/`

Creates a fork of the given node.

Forking a project creates a copy of an existing node and all of its contents. The fork always points back to the original node, forming a network of nodes.

You might use a fork to copy another's work to build on and extend. For example, a professor may create an OSF project of materials for individual student use. Each student forks the project to have his or her own copy of the materials to start his/her own work.

When creating a fork, your fork will only contain public components of the current node and components for which you are a contributor. Private components that you do not have access to will not be forked.
#### Required
There are no required attributes when creating a fork, as all of the forked node's attributes will be copied from the current node.

The `title` field is optional, with the default title being "Fork of " prepended to the current node's title.
#### Returns
Returns a JSON object with a `data` key containing the complete srepresentation of the forked node, if the request is successful.
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "category": "software",
      "title": "An Excellent Project Title"
    },
    "type": "nodes"
  }
}
```

<h3 id="create-a-fork-of-this-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|body|body|object|true|none|
|» attributes|body|object|true|The properties of the node entity.|
|» » category|body|string|true|The category of the node, as selected by project contributors.|
|» » description|body|string|false|The description of the node.|
|» » node_license|body|string|false|A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).|
|» » public|body|boolean|false|Whether or not the node is publicly visible. This field is only editable by project administrators.|
|» » tags|body|[string]|false|A list of strings that describe this node, as entered by project contributors.|
|» » template_from|body|string|false|The unique ID of the node from which this node was templated, if this node was created from a template.|
|» » title|body|string|true|The title of the node.|
|» relationships|body|object|false|URLs to other entities or entity collections that have a relationship to the node entity.|
|» type|body|string|true|The type identifier of the node entity (`nodes`).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » category|analysis|
|» » category|communication|
|» » category|data|
|» » category|hypothesis|
|» » category|instrumentation|
|» » category|methods and measures|
|» » category|procedure|
|» » category|project|
|» » category|software|
|» » category|other|

<h3 id="create-a-fork-of-this-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all identifiers

<a id="opIdnodes_identifiers_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/identifiers/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/identifiers/`

List all identifiers associated with a given node.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering

You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/identifiers/?filter[category]=ark

Identifiers may be filtered by their `category` e.g `ark` or `doi`.

<h3 id="list-all-identifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "doi",
        "value": "10.17605/OSF.IO/73PND"
      },
      "id": "57f1641db83f6901ed94b459",
      "links": {
        "self": "https://api.osf.io/v2/identifiers/57f1641db83f6901ed94b459/"
      },
      "relationships": {
        "referent": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/",
              "meta": {}
            }
          }
        }
      },
      "type": "identifiers"
    },
    {
      "attributes": {
        "category": "ark",
        "value": "c7605/osf.io/73pnd"
      },
      "id": "57f1641db83f6901ed94b45a",
      "links": {
        "self": "https://api.osf.io/v2/identifiers/57f1641db83f6901ed94b45a/"
      },
      "relationships": {
        "referent": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/",
              "meta": {}
            }
          }
        }
      },
      "type": "identifiers"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-identifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all institutions

<a id="opIdnodes_institutions_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/institutions/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/institutions/`

List of all institutions affiliated with this node.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 affilited institutions. Each resource in the array is a separate institution object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="list-all-institutions-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "auth_url": null,
        "description": "COS is a non-profit technology company providing free and open services to increase inclusivity and transparency of research. Find out more at <a href=\"https://cos.io\">cos.io</a>.",
        "logo_path": "/static/img/institutions/shields/cos-shield.png",
        "name": "Center For Open Science"
      },
      "id": "cos",
      "links": {
        "self": "https://api.osf.io/v2/institutions/cos/"
      },
      "relationships": {
        "nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/cos/nodes/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/cos/registrations/",
              "meta": {}
            }
          }
        },
        "users": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/cos/users/",
              "meta": {}
            }
          }
        }
      },
      "type": "institutions"
    },
    {
      "attributes": {
        "auth_url": "https://accounts.osf.io/Shibboleth.sso/Login?entityID=urn%3Amace%3Aincommon%3Avirginia.edu",
        "description": "In partnership with the <a href=\"http://www.virginia.edu/vpr/\">Vice President for Research</a>, <a href=\"http://dsi.virginia.edu\">Data Science Institute</a>, <a href=\"https://www.hsl.virginia.edu\">Health Sciences Library</a>, and <a href=\"http://data.library.virginia.edu\">University Library</a>. Learn more about <a href=\"http://cadre.virginia.edu\">UVA resources for computational and data-driven research</a>. Projects must abide by the <a href=\"http://www.virginia.edu/informationpolicy/security.html\">University Security and Data Protection Policies</a>.",
        "logo_path": "/static/img/institutions/shields/uva-shield.png",
        "name": "University of Virginia"
      },
      "id": "uva",
      "links": {
        "self": "https://api.osf.io/v2/institutions/uva/"
      },
      "relationships": {
        "nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/uva/nodes/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/uva/registrations/",
              "meta": {}
            }
          }
        },
        "users": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/uva/users/",
              "meta": {}
            }
          }
        }
      },
      "type": "institutions"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-institutions-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all linked nodes

<a id="opIdnodes_linked_nodes_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/linked_nodes/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/linked_nodes/`

List of all nodes linked to the given node.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/?filter[title]=reproducibility.

Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.

<h3 id="list-all-linked-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": false,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2014-07-28T13:53:04.508000",
        "date_modified": "2017-03-03T05:00:31.512000",
        "description": "This is an independent replication as part of the Reproducibility Project: Psychology.",
        "fork": false,
        "node_license": null,
        "preprint": false,
        "public": true,
        "registration": false,
        "tags": [],
        "title": "Replication of WA Cunningham, JJ Van Bavel, IR Johnsen (2008, PS 19(2))"
      },
      "id": "bifc7",
      "links": {
        "html": "https://osf.io/bifc7/",
        "self": "https://api.osf.io/v2/nodes/bifc7/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/bifc7/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/comments/?filter%5Btarget%5D=bifc7",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/contributors/",
              "meta": {}
            }
          }
        },
        "draft_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/draft_registrations/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/files/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/identifiers/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/bifc7/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/logs/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/node_links/",
              "meta": {}
            }
          }
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/preprints/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/registrations/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    },
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": false,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2012-10-31T18:50:46.111000",
        "date_modified": "2016-10-02T19:50:23.605000",
        "description": null,
        "fork": true,
        "node_license": {
          "copyright_holders": [
            ""
          ],
          "year": "2016"
        },
        "preprint": false,
        "public": true,
        "registration": false,
        "tags": [
          "anxiety",
          "EMG",
          "EEG",
          "motivation",
          "ERN"
        ],
        "title": "Replication of Hajcak &amp; Foti (2008, PS, Study 1)"
      },
      "id": "73pnd",
      "links": {
        "html": "https://osf.io/73pnd/",
        "self": "https://api.osf.io/v2/nodes/73pnd/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/73pnd/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/comments/?filter%5Btarget%5D=73pnd",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/contributors/",
              "meta": {}
            }
          }
        },
        "draft_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/draft_registrations/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/files/",
              "meta": {}
            }
          }
        },
        "forked_from": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/kxhz5/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/identifiers/",
              "meta": {}
            }
          }
        },
        "license": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e96a/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/73pnd/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/logs/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/node_links/",
              "meta": {}
            }
          }
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/preprints/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/registrations/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-linked-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all logs

<a id="opIdnodes_logs_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/logs/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/logs/`

A paginated list of all logs associated with a given node.

The returned logs are sorted by their `date`, with the most recents logs appearing first.

This list includes the logs of the specified node as well as the logs of that node's children to which the current user has read-only access.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/logs/?filter[action]=made_private.

Nodes may be filtered by their `action`, and `date`.

<h3 id="list-all-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "action": "pointer_created",
        "date": "2017-01-23T16:30:07.321000",
        "params": {
          "contributors": [],
          "params_node": {
            "id": "fejxb",
            "title": "Replication of Correll (2008, JPSP, Study 2)"
          },
          "params_project": null,
          "pointer": {
            "category": "project",
            "id": "iraqy",
            "title": "Independent Direct Replication #2 of Correll (2008, JPSP, Study 2)",
            "url": "/iraqy/"
          },
          "preprint_provider": null
        }
      },
      "id": "58862f8f594d9001f547f484",
      "links": {
        "self": "https://api.osf.io/v2/logs/58862f8f594d9001f547f484/"
      },
      "relationships": {
        "linked_node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/iraqy/",
              "meta": {}
            }
          }
        },
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/fejxb/",
              "meta": {}
            }
          }
        },
        "original_node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/fejxb/",
              "meta": {}
            }
          }
        },
        "user": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/2z47w/",
              "meta": {}
            }
          }
        }
      },
      "type": "logs"
    },
    {
      "attributes": {
        "action": "project_registered",
        "date": "2017-01-09T05:00:53.761000",
        "params": {
          "contributors": [],
          "params_node": {
            "id": "rtjws",
            "title": "Analysis Audit"
          },
          "params_project": null,
          "preprint_provider": null
        }
      },
      "id": "5873190554be8101d7e30b3e",
      "links": {
        "self": "https://api.osf.io/v2/logs/5873190554be8101d7e30b3e/"
      },
      "relationships": {
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/rtjws/",
              "meta": {}
            }
          }
        },
        "original_node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/rtjws/",
              "meta": {}
            }
          }
        }
      },
      "type": "logs"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": null,
    "next": null,
    "per_page": 10,
    "prev": null,
    "total": 2
  }
}
```

<h3 id="list-all-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all preprints

<a id="opIdnodes_preprints_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/preprints/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/preprints/`

A paginated list of preprints related to a given node. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.

**Note: This API endpoint is under active development, and is subject to change in the future.**
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 preprints. Each resource in the array is a separate preprint object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="list-all-preprints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "date_created": "2016-08-29T14:53:51.185000",
        "date_modified": "2016-08-29T14:53:51.185000",
        "date_published": "2016-08-29T14:53:51.185000",
        "doi": "10.1371/journal.pbio.1002456",
        "is_preprint_orphan": false,
        "is_published": true,
        "license_record": null,
        "subjects": [
          [
            {
              "id": "584240da54be81056cecac48",
              "text": "Social and Behavioral Sciences"
            },
            {
              "id": "584240da54be81056cecaab8",
              "text": "Public Affairs, Public Policy and Public Administration"
            },
            {
              "id": "584240d954be81056cecaa10",
              "text": "Science and Technology Policy"
            }
          ],
          [
            {
              "id": "584240da54be81056cecac48",
              "text": "Social and Behavioral Sciences"
            },
            {
              "id": "584240da54be81056cecab33",
              "text": "Library and Information Science"
            },
            {
              "id": "584240db54be81056cecacd2",
              "text": "Scholarly Publishing"
            }
          ],
          [
            {
              "id": "584240da54be81056cecac48",
              "text": "Social and Behavioral Sciences"
            },
            {
              "id": "584240da54be81056cecac68",
              "text": "Psychology"
            }
          ],
          [
            {
              "id": "584240da54be81056cecac48",
              "text": "Social and Behavioral Sciences"
            },
            {
              "id": "584240da54be81056cecac68",
              "text": "Psychology"
            }
          ]
        ]
      },
      "id": "khbvy",
      "links": {
        "doi": "https://dx.doi.org/10.1371/journal.pbio.1002456",
        "html": "https://osf.io/khbvy/",
        "self": "https://api.osf.io/v2/preprints/khbvy/"
      },
      "relationships": {
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/khbvy/citation/",
              "meta": {}
            }
          }
        },
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bnzx5/",
              "meta": {}
            }
          }
        },
        "primary_file": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/files/57c44b1e594d90004a421ab1/",
              "meta": {}
            }
          }
        },
        "provider": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprint_providers/osf/",
              "meta": {}
            }
          }
        }
      },
      "type": "preprints"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-preprints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all registrations

<a id="opIdnodes_registrations_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/registrations/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/registrations/`

List of all registrations of the given node.
#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 registrations. Each resource in the array is a separate registrations object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering

You can optionally request that the response only include registrations that match your filters by utilizing the filter query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.

<h3 id="list-all-registrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "category": "project",
      "collection": false,
      "current_user_can_comment": true,
      "current_user_permissions": [
        "read"
      ],
      "date_created": "2017-02-12T18:45:55.063000",
      "date_modified": "2017-02-12T19:22:26.488000",
      "date_registered": "2017-02-12T19:28:48.864000",
      "description": "",
      "embargo_end_date": null,
      "fork": false,
      "node_license": null,
      "node_links": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/node_links/",
            "meta": {}
          }
        }
      },
      "pending_embargo_approval": false,
      "pending_registration_approval": false,
      "pending_withdrawal": false,
      "preprint": false,
      "public": true,
      "registered_meta": {
        "summary": {
          "comments": [],
          "extra": [],
          "value": "This pre-registration is an updated data collection and analysis plan. See https://osf.io/ptcqw/ for original data collection rule and https://osf.io/8jyu8/ for original analysis plan. We are collecting more data given that results after original data collection were inconclusive."
        }
      },
      "registration": true,
      "registration_supplement": "Open-Ended Registration",
      "tags": [],
      "title": "How Awareness Impacts Multiple Forms of Social Bias in Behavior (Final Data Collection and Analysis Plan)",
      "withdrawal_justification": null,
      "withdrawn": false
    },
    "id": "esa63",
    "links": {
      "html": "https://osf.io/esa63/",
      "self": "https://api.osf.io/v2/registrations/esa63/"
    },
    "relationships": {
      "affiliated_institutions": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/institutions/",
            "meta": {}
          }
        }
      },
      "children": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/children/",
            "meta": {}
          }
        }
      },
      "citation": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/citation/",
            "meta": {}
          }
        }
      },
      "comments": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/comments/?filter%5Btarget%5D=esa63",
            "meta": {}
          }
        }
      },
      "contributors": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/contributors/",
            "meta": {}
          }
        }
      },
      "files": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/files/",
            "meta": {}
          }
        }
      },
      "forks": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/forks/",
            "meta": {}
          }
        }
      },
      "identifiers": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/identifiers/",
            "meta": {}
          }
        }
      },
      "linked_nodes": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/linked_nodes/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/registrations/esa63/relationships/linked_nodes/",
            "meta": {}
          }
        }
      },
      "linked_registrations": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/linked_registrations/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/registrations/esa63/relationships/linked_registrations/",
            "meta": {}
          }
        }
      },
      "logs": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/logs/",
            "meta": {}
          }
        }
      },
      "registered_by": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/ztdnp/",
            "meta": {}
          }
        }
      },
      "registered_from": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/dpfyv/",
            "meta": {}
          }
        }
      },
      "registration_schema": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/metaschemas/564d31db8c5e4a7c9694b2be/",
            "meta": {}
          }
        }
      },
      "root": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/",
            "meta": {}
          }
        }
      },
      "view_only_links": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/view_only_links/",
            "meta": {}
          }
        }
      },
      "wikis": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/registrations/esa63/wikis/",
            "meta": {}
          }
        }
      }
    },
    "type": "registrations"
  }
}
```

<h3 id="list-all-registrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all view only links

<a id="opIdnodes_view_only_links_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/view_only_links/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/view_only_links/`

List of view only links on a node.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Permissions

View only links on a node, public or private, are readable and writeable only by users that are administrators on the node.

#### Filtering

You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/view_only_links/?filter[anonymous]=true.

View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.

<h3 id="list-all-view-only-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "anonymous": false,
        "date_created": "2017-03-20T20:15:02.488643",
        "key": "c1df490be3294a9bac01ff05c4097ab7",
        "name": "vol name"
      },
      "id": "58d03846a170c50025baae61",
      "links": {
        "self": "http://api.osf.io/v2/nodes/gaz5n/view_only_links/58d03846a170c50025baae61/"
      },
      "relationships": {
        "creator": {
          "links": {
            "related": {
              "href": "http://api.osf.io/v2/users/4xpu9/",
              "meta": {}
            }
          }
        },
        "nodes": {
          "links": {
            "related": {
              "href": "http://api.osf.io/v2/view_only_links/58d03846a170c50025baae61/nodes/",
              "meta": {}
            },
            "self": {
              "href": "http://api.osf.io/v2/view_only_links/58d03846a170c50025baae61/relationships/nodes/",
              "meta": {}
            }
          }
        }
      },
      "type": "view_only_links"
    },
    {
      "attributes": {
        "anonymous": false,
        "date_created": "2017-03-21T14:26:47.507504",
        "key": "9794ac36085e4d7086ff4dab49daf1cb",
        "name": "vol name"
      },
      "id": "58d13827a170c50025baae6e",
      "links": {
        "self": "http://api.osf.io/v2/nodes/gaz5n/view_only_links/58d13827a170c50025baae6e/"
      },
      "relationships": {
        "creator": {
          "links": {
            "related": {
              "href": "http://api.osf.io/v2/users/4xpu9/",
              "meta": {}
            }
          }
        },
        "nodes": {
          "links": {
            "related": {
              "href": "http://api.osf.io/v2/view_only_links/58d13827a170c50025baae6e/nodes/",
              "meta": {}
            },
            "self": {
              "href": "http://api.osf.io/v2/view_only_links/58d13827a170c50025baae6e/relationships/nodes/",
              "meta": {}
            }
          }
        }
      },
      "type": "view_only_links"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": null,
    "next": null,
    "per_page": 10,
    "prev": null,
    "total": 2
  }
}
```

<h3 id="list-all-view-only-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a view only link

<a id="opIdnodes_view_only_links_read"></a>

> Code samples

```bash
curl https://example.com/nodes/string/view_only_links/string/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/view_only_links/{link_id}/`

Retrieves the details of a view only link on a node.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
#### Permissions

View only links on a node, public or private, are readable and writeable only by users that are administrators on the node.

<h3 id="retrieve-a-view-only-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|
|link_id|path|string|true|The unique identifier of the view only link.|

> Example responses

> 200 Response

```json
null
```

<h3 id="retrieve-a-view-only-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all wikis

<a id="opIdnodes_wikis_list"></a>

> Code samples

```bash
curl https://example.com/nodes/string/wikis/ \
  -H 'Accept: application/json'
```

`GET /nodes/{node_id}/wikis/`

List of wiki pages on a node.
#### Returns
Paginated list of the node's current wiki page versions ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.

Note that if an anonymous view_only key is being used, the user relationship will not be exposed.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
#### Filtering
Wiki pages can be filtered based on their `name` and `date_modified` fields.
+ `filter[name]=<Str>` -- filter wiki pages by name
+ `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.

Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.

<h3 id="list-all-wikis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|node_id|path|string|true|The unique identifier of the node.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "content_type": "text/markdown",
        "current_user_can_comment": true,
        "date_modified": "2017-02-16T15:45:57.671957",
        "extra": {
          "version": 47
        },
        "kind": "file",
        "materialized_path": "/zveyb",
        "name": "home",
        "path": "/zveyb",
        "size": 552
      },
      "id": "xu77p",
      "links": {
        "download": "https://api.osf.io/v2/wikis/zveyb/content/",
        "info": "https://api.osf.io/v2/wikis/zveyb/",
        "self": "https://api.osf.io/v2/wikis/zveyb/"
      },
      "relationships": {
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/tvyxz/comments/?filter%5Btarget%5D=zveyb",
              "meta": {}
            }
          }
        },
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/tvyxz/",
              "meta": {}
            }
          }
        },
        "user": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/5k3hq/",
              "meta": {}
            }
          }
        }
      },
      "type": "wikis"
    }
  ],
  "links": {
    "first": "",
    "last": "https://api.osf.io/v2/wikis/zveyb/?page=2",
    "meta": {
      "per_page": 10,
      "total": 12
    },
    "next": "https://api.osf.io/v2/wikis/zveyb/?page=2",
    "prev": ""
  }
}
```

<h3 id="list-all-wikis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-preprint-providers">Preprint Providers</h1>

## List all preprint providers

<a id="opIdpreprint_provider_list"></a>

> Code samples

```bash
curl https://example.com/preprint_providers/ \
  -H 'Accept: application/json'
```

`GET /preprint_providers/`


A paginated list of all preprint providers. The returned preprint providers are sorted by their creation date, with the most recent preprints appearing first.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include preprint providers that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/?filter[id]=osf.

Preprint Providers may be filtered by their `id`, `name`,  and `description`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "advisory_board": "",
        "banner_path": "/static/img/preprint_providers/cos-logo.png",
        "description": "A scholarly commons to connect the entire research cycle",
        "domain": "osf.io",
        "email_contact": "",
        "email_support": "",
        "example": "khbvy",
        "header_text": "",
        "logo_path": "/static/img/preprint_providers/cos-logo.png",
        "name": "Open Science Framework",
        "social_facebook": "",
        "social_instagram": "",
        "social_twitter": "",
        "subjects_acceptable": []
      },
      "id": "osf",
      "links": {
        "external_url": "https://osf.io/preprints/",
        "preprints": "https://api.osf.io/v2/preprint_providers/osf/preprints/",
        "self": "https://api.osf.io/v2/preprint_providers/osf/"
      },
      "relationships": {
        "licenses_acceptable": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprint_providers/osf/licenses/",
              "meta": {}
            }
          }
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprint_providers/osf/preprints/",
              "meta": {}
            }
          }
        },
        "taxonomies": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprint_providers/osf/taxonomies/",
              "meta": {}
            }
          }
        }
      },
      "type": "preprint_providers"
    }
  ]
}
```

<h3 id="list-all-preprint-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a preprint provider

<a id="opIdpreprint_provider_detail"></a>

> Code samples

```bash
curl https://example.com/preprint_providers/string/ \
  -H 'Accept: application/json'
```

`GET /preprint_providers/{preprint_provider_id}/`

Retrieves the details of a preprint provider.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested preprint provider, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

#### Acceptable Subjects Structure
Each preprint provider specifies acceptable subjects.
`subjects_acceptable` is an array found in `attributes`.
Subjects consist of general parent subjects (e.g., Engineering), more specific child subjects (e.g., Aerospace Engineering), and even more specific grandchild subjects (e.g., Aerodynamics and Fluid Mechanics). Subjects can only be nested 3 deep.


    "subjects_acceptable": [
        [
            [
                # Parent Subject:
                # Architecture
                "584240d954be81056ceca9e5",

                # Child Subject:
                # Architectural Engineering
                "584240da54be81056cecac87"
            ],
            # Include all Architectural Engineering's children:
            true
        ],
        [
            [
                # Parent Subject:
                # Engineering
                "584240da54be81056cecaca9",

                # Child Subject:
                # Aerospace Engineering
                "584240db54be81056cecacd6",

                # Grandchild Subject:
                # Aerodynamics and Fluid Mechanics
                "584240da54be81056cecaa74"
            ],
            # All nestings 3 deep must be false
            false
        ]
    ]

The above structure would allow Architecture, Architectural Engineering, all of Architectural Engineering's children, Engineering, Aerospace Engineering, and Aerodynamics and Fluid Mechanics.

<h3 id="retrieve-a-preprint-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|preprint_provider_id|path|string|true|The unique identifier of the preprint provider.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "advisory_board": "",
      "banner_path": "/static/img/preprint_providers/cos-logo.png",
      "description": "A scholarly commons to connect the entire research cycle",
      "domain": "osf.io",
      "email_contact": "",
      "email_support": "",
      "example": "khbvy",
      "header_text": "",
      "logo_path": "/static/img/preprint_providers/cos-logo.png",
      "name": "Open Science Framework",
      "social_facebook": "",
      "social_instagram": "",
      "social_twitter": "",
      "subjects_acceptable": []
    },
    "id": "osf",
    "links": {
      "external_url": "https://osf.io/preprints/",
      "preprints": "https://api.osf.io/v2/preprint_providers/osf/preprints/",
      "self": "https://api.osf.io/v2/preprint_providers/osf/"
    },
    "relationships": {
      "licenses_acceptable": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/preprint_providers/osf/licenses/",
            "meta": {}
          }
        }
      },
      "preprints": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/preprint_providers/osf/preprints/",
            "meta": {}
          }
        }
      },
      "taxonomies": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/preprint_providers/osf/taxonomies/",
            "meta": {}
          }
        }
      }
    },
    "type": "preprint_providers"
  },
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 5
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="retrieve-a-preprint-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all licenses

<a id="opIdpreprint_provider_licenses_list"></a>

> Code samples

```bash
curl https://example.com/preprint_providers/string/licenses/ \
  -H 'Accept: application/json'
```

`GET /preprint_providers/{preprint_provider_id}/licenses/`


A paginated list of the licenses allowed by a preprint provider.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="list-all-licenses-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|preprint_provider_id|path|string|true|The unique identifier of the preprint provider.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "name": "No license",
        "required_fields": [
          "year",
          "copyrightHolders"
        ],
        "text": "Copyright {{year}} {{copyrightHolders}}"
      },
      "id": "563c1cf88c5e4a3877f9e965",
      "links": {
        "self": "https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e965/"
      },
      "type": "licenses"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 3
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-licenses-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all preprints

<a id="opIdpreprint_providers_preprints_list"></a>

> Code samples

```bash
curl https://example.com/preprint_providers/string/preprints/ \
  -H 'Accept: application/json'
```

`GET /preprint_providers/{preprint_provider_id}/preprints/`


A paginated list of preprints from the specified preprint provider. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.

The `links` key contains a dictionary with keys that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

#### Filtering
You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/osf/preprints/?filter[is_published]=true.

Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.

<h3 id="list-all-preprints-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|preprint_provider_id|path|string|true|The unique identifier of the preprint provider.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "date_created": "2017-02-03T06:16:57.129000",
        "date_modified": "2017-02-03T06:19:00.158000",
        "date_published": "2017-02-03T06:18:59.788000",
        "doi": null,
        "is_preprint_orphan": false,
        "is_published": true,
        "license_record": {
          "copyright_holders": [],
          "year": "2017"
        },
        "subjects": [
          [
            {
              "id": "584240da54be81056cecac48",
              "text": "Social and Behavioral Sciences"
            },
            {
              "id": "584240da54be81056cecac1a",
              "text": "Political Science"
            }
          ]
        ]
      },
      "id": "hqb2p",
      "links": {
        "html": "https://osf.io/preprints/socarxiv/hqb2p/",
        "self": "https://api.osf.io/v2/preprints/hqb2p/"
      },
      "relationships": {
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/hqb2p/citation/",
              "meta": {}
            }
          }
        },
        "license": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e96a/",
              "meta": {}
            }
          }
        },
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/5xuck/",
              "meta": {}
            }
          }
        },
        "primary_file": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/files/5894204f594d900200ed23f2/",
              "meta": {}
            }
          }
        },
        "provider": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprint_providers/socarxiv/",
              "meta": {}
            }
          }
        }
      },
      "type": "preprints"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/preprints/?page=172",
    "meta": {
      "per_page": 10,
      "total": 1720
    },
    "next": "https://api.osf.io/v2/preprints/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-preprints-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all taxonomies

<a id="opIdpreprint_provider_taxonomies_list"></a>

> Code samples

```bash
curl https://example.com/preprint_providers/string/taxonomies/ \
  -H 'Accept: application/json'
```

`GET /preprint_providers/{preprint_provider_id}/taxonomies/`


A paginated list of the taxonomies for a preprint provider. The returned preprint providers taxonomies are sorted by their creation date, with the most recent preprints appearing first.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="list-all-taxonomies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|preprint_provider_id|path|string|true|The unique identifier of the preprint provider.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "child_count": 0,
        "parents": [
          {
            "id": "584240d954be81056ceca97a",
            "text": "Philosophy"
          }
        ],
        "text": "History of Philosophy"
      },
      "id": "584240d854be81056ceca838",
      "links": {
        "parents": [
          "https://api.osf.io/v2/taxonomies/584240d954be81056ceca97a/"
        ],
        "self": "https://api.osf.io/v2/taxonomies/584240d854be81056ceca838/"
      },
      "type": "taxonomies"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/preprint_providers/osf/taxonomies/?page=122",
    "meta": {
      "per_page": 10,
      "total": 1217
    },
    "next": "https://api.osf.io/v2/preprint_providers/osf/taxonomies/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-taxonomies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-preprints">Preprints</h1>

## List all preprints

<a id="opIdpreprints_list"></a>

> Code samples

```bash
curl https://example.com/preprints/ \
  -H 'Accept: application/json'
```

`GET /preprints/`


A paginated list of preprints from all preprint providers. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/?filter[provider]=socarxiv.

Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "date_created": "2017-02-03T06:16:57.129000",
        "date_modified": "2017-02-03T06:19:00.158000",
        "date_published": "2017-02-03T06:18:59.788000",
        "doi": null,
        "is_preprint_orphan": false,
        "is_published": true,
        "license_record": {
          "copyright_holders": [],
          "year": "2017"
        },
        "subjects": [
          [
            {
              "id": "584240da54be81056cecac48",
              "text": "Social and Behavioral Sciences"
            },
            {
              "id": "584240da54be81056cecac1a",
              "text": "Political Science"
            }
          ]
        ]
      },
      "id": "hqb2p",
      "links": {
        "html": "https://osf.io/preprints/socarxiv/hqb2p/",
        "preprint_doi": "https://dx.doi.org/10.5072/FK2OSF.IO/HQB2P",
        "self": "https://api.osf.io/v2/preprints/hqb2p/"
      },
      "relationships": {
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/hqb2p/citation/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/hqb2p/identifiers/",
              "meta": {}
            }
          }
        },
        "license": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e96a/",
              "meta": {}
            }
          }
        },
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/5xuck/",
              "meta": {}
            }
          }
        },
        "primary_file": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/files/5894204f594d900200ed23f2/",
              "meta": {}
            }
          }
        },
        "provider": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprint_providers/socarxiv/",
              "meta": {}
            }
          }
        }
      },
      "type": "preprints"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/preprints/?page=172",
    "meta": {
      "per_page": 10,
      "total": 1720
    },
    "next": "https://api.osf.io/v2/preprints/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-preprints-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a preprint

<a id="opIdpreprints_create"></a>

> Code samples

```bash
curl https://example.com/preprints/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {},
      "relationships": {
        "node": {
          "data": {
            "id": "{node_id}",
            "type": "nodes"
          }
        },
        "primary_file": {
          "data": {
            "id": "{primary_file_id}",
            "type": "primary_files"
          }
        },
        "provider": {
          "data": {
            "id": "{preprint_provider_id}",
            "type": "providers"
          }
        }
      }
    }
  }'
```

`POST /preprints/`

Creates a new preprint.
#### Returns
Returns a JSON object with a `data` key containing the representation of the created preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {},
    "relationships": {
      "node": {
        "data": {
          "id": "{node_id}",
          "type": "nodes"
        }
      },
      "primary_file": {
        "data": {
          "id": "{primary_file_id}",
          "type": "primary_files"
        }
      },
      "provider": {
        "data": {
          "id": "{preprint_provider_id}",
          "type": "providers"
        }
      }
    }
  }
}
```

<h3 id="create-a-preprint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» attributes|body|object|false|The properties of the preprint entity.|
|» » doi|body|string|false|The DOI of the associated journal article, as entered by the user, if the preprint is published.|
|» » license_record|body|string|false|The metadata (copyright year and holder) associated with a license, required for certain licenses.|
|» » subjects|body|[string]|false|A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.|
|» relationships|body|object|true|URLs to other entities or entity collections that have a relationship to the preprint entity.|
|» » bibliographic_contributors|body|string|false|A relationship to the bibliographic contributors that are listed as contributing to this preprint.|
|» » license|body|string|false|A relationship to the license that has been applied to the preprint.|
|» » node|body|string|true|A relationship to the node that was created for the preprint, or from which the preprint was created.|
|» » primary_file|body|string|true|A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.|
|» » provider|body|string|true|A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).|
|» type|body|string|true|The type identifier of the preprint entity (`preprints`).|

<h3 id="create-a-preprint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a preprint

<a id="opIdpreprints_read"></a>

> Code samples

```bash
curl https://example.com/preprints/string/ \
  -H 'Accept: application/json'
```

`GET /preprints/{preprint_id}/`

Retrieves the details of a preprint.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-preprint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|preprint_id|path|string|true|The unique identifier of the preprint.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "date_created": "2016-08-29T14:53:51.185000",
      "date_modified": "2016-08-29T14:53:51.185000",
      "date_published": "2016-08-29T14:53:51.185000",
      "doi": "10.1371/journal.pbio.1002456",
      "is_preprint_orphan": false,
      "is_published": true,
      "license_record": null,
      "subjects": [
        [
          {
            "id": "584240da54be81056cecac48",
            "text": "Social and Behavioral Sciences"
          },
          {
            "id": "584240da54be81056cecaab8",
            "text": "Public Affairs, Public Policy and Public Administration"
          },
          {
            "id": "584240d954be81056cecaa10",
            "text": "Science and Technology Policy"
          }
        ],
        [
          {
            "id": "584240da54be81056cecac48",
            "text": "Social and Behavioral Sciences"
          },
          {
            "id": "584240da54be81056cecab33",
            "text": "Library and Information Science"
          },
          {
            "id": "584240db54be81056cecacd2",
            "text": "Scholarly Publishing"
          }
        ],
        [
          {
            "id": "584240da54be81056cecac48",
            "text": "Social and Behavioral Sciences"
          },
          {
            "id": "584240da54be81056cecac68",
            "text": "Psychology"
          }
        ],
        [
          {
            "id": "584240da54be81056cecac48",
            "text": "Social and Behavioral Sciences"
          },
          {
            "id": "584240da54be81056cecac68",
            "text": "Psychology"
          }
        ]
      ]
    },
    "id": "khbvy",
    "links": {
      "doi": "https://dx.doi.org/10.1371/journal.pbio.1002456",
      "html": "https://osf.io/khbvy/",
      "preprint_doi": "https://dx.doi.org/10.5072/FK2OSF.IO/KHBVY",
      "self": "https://api.osf.io/v2/preprints/khbvy/"
    },
    "relationships": {
      "bibliographic_contributors": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/preprints/khbvy/bibliographic_contributors",
            "meta": {}
          }
        }
      },
      "citation": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/preprints/khbvy/citation/",
            "meta": {}
          }
        }
      },
      "identifiers": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/preprints/khbvy/identifiers/",
            "meta": {}
          }
        }
      },
      "node": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/bnzx5/",
            "meta": {}
          }
        }
      },
      "primary_file": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/files/57c44b1e594d90004a421ab1/",
            "meta": {}
          }
        }
      },
      "provider": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/preprint_providers/osf/",
            "meta": {}
          }
        }
      }
    },
    "type": "preprints"
  }
}
```

<h3 id="retrieve-a-preprint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a preprint

<a id="opIdpreprints_partial_update"></a>

> Code samples

```bash
curl https://example.com/preprints/string/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {
        "doi": "{doi}"
      },
      "id": "{preprint_id}",
      "relationships": {
        "primary_file": {
          "data": {
            "id": "{file_id}",
            "type": "primary_files"
          }
        }
      }
    }
  }'
```

`PATCH /preprints/{preprint_id}/`

Updates the specified preprint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated preprint, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "doi": "{doi}"
    },
    "id": "{preprint_id}",
    "relationships": {
      "primary_file": {
        "data": {
          "id": "{file_id}",
          "type": "primary_files"
        }
      }
    }
  }
}
```

<h3 id="update-a-preprint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|preprint_id|path|string|true|The unique identifier of the preprint.|
|body|body|object|true|none|

<h3 id="update-a-preprint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all Bibliographic Contributors

<a id="opIdpreprints_bibliographic_contributors_list"></a>

> Code samples

```bash
curl https://example.com/preprints/string/bibliographic_contributors/ \
  -H 'Accept: application/json'
```

`GET /preprints/{preprint_id}/bibliographic_contributors/`

A paginated list of the Preprint's Bibliographic Contributors, sorted by their index.
Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/y9jdt/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.

<h3 id="list-all-bibliographic-contributors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|preprint_id|path|string|true|The unique identifier of the preprint.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "bibliographic": true,
        "index": 0,
        "permission": "admin",
        "unregistered_contributor": null
      },
      "embeds": {
        "users": {
          "data": {
            "attributes": {
              "accepted_terms_of_service": true,
              "active": true,
              "can_view_reviews": [],
              "date_registered": "2022-01-13T13:47:07.685511",
              "education": [],
              "employment": [],
              "family_name": "Mercury0",
              "full_name": "Freddie Mercury0",
              "given_name": "Freddie",
              "locale": "en_US",
              "middle_names": "",
              "social": {},
              "suffix": "",
              "timezone": "Etc/UTC"
            },
            "id": "fgvc6",
            "links": {
              "html": "https://osf.io/fgvc6/",
              "profile_image": "https://secure.gravatar.com/avatar/a61b3827662ddbc604c78e1c8f6a3636?d=identicon",
              "self": "https://api.osf.io/v2/users/fgvc6/"
            },
            "relationships": {
              "default_region": {
                "data": {
                  "id": "us",
                  "type": "regions"
                },
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/regions/us/",
                    "meta": {}
                  }
                }
              },
              "emails": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/settings/emails/",
                    "meta": {}
                  }
                }
              },
              "groups": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/groups/",
                    "meta": {}
                  }
                }
              },
              "institutions": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/institutions/",
                    "meta": {}
                  },
                  "self": {
                    "href": "https://api.osf.io/v2/users/fgvc6/relationships/institutions/",
                    "meta": {}
                  }
                }
              },
              "nodes": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/nodes/",
                    "meta": {}
                  }
                }
              },
              "preprints": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/preprints/",
                    "meta": {}
                  }
                }
              },
              "registrations": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/registrations/",
                    "meta": {}
                  }
                }
              },
              "settings": {
                "data": {
                  "id": "fgvc6",
                  "type": "user-settings"
                },
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/settings/",
                    "meta": {}
                  }
                }
              }
            },
            "type": "users"
          }
        }
      },
      "id": "bg8v7-fgvc6",
      "links": {
        "self": "https://api.osf.io/v2/preprints/bg8v7/contributors/fgvc6/"
      },
      "relationships": {
        "preprint": {
          "data": {
            "id": "bg8v7",
            "type": "preprints"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/bg8v7/",
              "meta": {}
            }
          }
        },
        "users": {
          "data": {
            "id": "fgvc6",
            "type": "users"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/fgvc6/",
              "meta": {}
            }
          }
        }
      },
      "type": "contributors"
    },
    {
      "attributes": {
        "bibliographic": true,
        "index": 1,
        "permission": "write",
        "unregistered_contributor": null
      },
      "embeds": {
        "users": {
          "data": {
            "attributes": {
              "active": true,
              "date_registered": "2022-05-04T19:39:33.138339",
              "education": [],
              "employment": [],
              "family_name": "Mercury1",
              "full_name": "Freddie Mercury1",
              "given_name": "Freddie",
              "locale": "en_US",
              "middle_names": "",
              "social": {},
              "suffix": "",
              "timezone": "Etc/UTC"
            },
            "id": "faqpw",
            "links": {
              "html": "https://osf.io/faqpw/",
              "profile_image": "https://secure.gravatar.com/avatar/c9ac5d6cc7964ba7eb2bb96f877bc983?d=identicon",
              "self": "https://api.osf.io/v2/users/faqpw/"
            },
            "relationships": {
              "groups": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/faqpw/groups/",
                    "meta": {}
                  }
                }
              },
              "institutions": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/faqpw/institutions/",
                    "meta": {}
                  },
                  "self": {
                    "href": "https://api.osf.io/v2/users/faqpw/relationships/institutions/",
                    "meta": {}
                  }
                }
              },
              "nodes": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/faqpw/nodes/",
                    "meta": {}
                  }
                }
              },
              "preprints": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/faqpw/preprints/",
                    "meta": {}
                  }
                }
              },
              "registrations": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/faqpw/registrations/",
                    "meta": {}
                  }
                }
              }
            },
            "type": "users"
          }
        }
      },
      "id": "bg8v7-faqpw",
      "links": {
        "self": "https://api.osf.io/v2/preprints/bg8v7/contributors/faqpw/"
      },
      "relationships": {
        "preprint": {
          "data": {
            "id": "bg8v7",
            "type": "preprints"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/bg8v7/",
              "meta": {}
            }
          }
        },
        "users": {
          "data": {
            "id": "faqpw",
            "type": "users"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/faqpw/",
              "meta": {}
            }
          }
        }
      },
      "type": "contributors"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2,
      "total_bibliographic": 2
    },
    "next": null,
    "prev": null
  },
  "meta": {
    "version": "2.0"
  }
}
```

<h3 id="list-all-bibliographic-contributors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve citation details

<a id="opIdpreprints_citation_list"></a>

> Code samples

```bash
curl https://example.com/preprints/string/citation/ \
  -H 'Accept: application/json'
```

`GET /preprints/{preprint_id}/citation/`

The citation details for a preprint, in CSL format.
#### Returns
Returns a JSON object with a `data` key that contains the representation of the details necessary for the preprint citation.

<h3 id="retrieve-citation-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|preprint_id|path|string|true|The unique identifier of the preprint whose citation you wish to retrieve.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "author": [
        {
          "family": "Kidwell",
          "given": "Mallory"
        },
        {
          "family": "Lazarevic",
          "given": "Ljiljana B"
        },
        {
          "family": "Baranski",
          "given": "Erica"
        },
        {
          "family": "Hardwicke",
          "given": "Tom E"
        },
        {
          "family": "Piechowski",
          "given": "Sarah"
        },
        {
          "family": "Falkenberg",
          "given": "Lina-Sophia"
        },
        {
          "family": "Kennett",
          "given": "Curtis A"
        },
        {
          "family": "Slowik",
          "given": "Agnieszka"
        },
        {
          "family": "Sonnleitner",
          "given": "Carina"
        },
        {
          "family": "Hess-Holden",
          "given": "Chelsey L"
        },
        {
          "family": "Errington",
          "given": "Timothy M"
        },
        {
          "family": "Fiedler",
          "given": "Susann"
        },
        {
          "family": "Nosek",
          "given": "Brian A"
        }
      ],
      "publisher": "Open Science Framework",
      "title": "Badges to Acknowledge Open Practices: A Simple, Low-Cost, Effective Method for Increasing Transparency",
      "type": "webpage"
    },
    "id": "khbvy",
    "links": {
      "self": "osf.io/khbvy"
    },
    "type": "preprint-citation"
  }
}
```

<h3 id="retrieve-citation-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a styled citation

<a id="opIdpreprints_citation_read"></a>

> Code samples

```bash
curl https://example.com/preprints/string/citation/string/ \
  -H 'Accept: application/json'
```

`GET /preprints/{preprint_id}/citation/{style_id}/`

The citation for a preprint in a specific style.
#### Returns
Returns a JSON object with a `data` key that contains the representation of the preprint citation, in the requested style.

<h3 id="retrieve-a-styled-citation-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|The unique identifier of the citation style.|
|preprint_id|path|string|true|The unique identifier of the preprint.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "citation": "Kidwell, M., Lazarevic, L. B., Baranski, E., Hardwicke, T. E., Piechowski, S., Falkenberg, L.-S., … Nosek, B. A. (2016, August 29). Badges to Acknowledge Open Practices: A Simple, Low-Cost, Effective Method for Increasing Transparency. http://doi.org/10.1371/journal.pbio.1002456"
    },
    "id": "apa",
    "links": {},
    "type": "styled-citations"
  }
}
```

<h3 id="retrieve-a-styled-citation-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## List all Contributors for a Preprint

<a id="opIdpreprints_contributors_list"></a>

> Code samples

```bash
curl https://example.com/preprints/string/contributors/ \
  -H 'Accept: application/json'
```

`GET /preprints/{preprint_id}/contributors/`

A paginated list of the Preprint's Contributors, sorted by their index.

Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of Contributors, the user relationship will not be exposed and the Contributor ID will be an empty string.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/y9jdt/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.

<h3 id="list-all-contributors-for-a-preprint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|preprint_id|path|string|true|The unique identifier of the preprint.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "bibliographic": true,
        "index": 0,
        "permission": "admin",
        "unregistered_contributor": null
      },
      "embeds": {
        "users": {
          "data": {
            "attributes": {
              "accepted_terms_of_service": true,
              "active": true,
              "can_view_reviews": [],
              "date_registered": "2022-01-13T13:47:07.685511",
              "education": [],
              "employment": [],
              "family_name": "Mercury0",
              "full_name": "Freddie Mercury0",
              "given_name": "Freddie",
              "locale": "en_US",
              "middle_names": "",
              "social": {},
              "suffix": "",
              "timezone": "Etc/UTC"
            },
            "id": "fgvc6",
            "links": {
              "html": "https://osf.io/fgvc6/",
              "profile_image": "https://secure.gravatar.com/avatar/a61b3827662ddbc604c78e1c8f6a3636?d=identicon",
              "self": "https://api.osf.io/v2/users/fgvc6/"
            },
            "relationships": {
              "default_region": {
                "data": {
                  "id": "us",
                  "type": "regions"
                },
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/regions/us/",
                    "meta": {}
                  }
                }
              },
              "emails": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/settings/emails/",
                    "meta": {}
                  }
                }
              },
              "groups": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/groups/",
                    "meta": {}
                  }
                }
              },
              "institutions": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/institutions/",
                    "meta": {}
                  },
                  "self": {
                    "href": "https://api.osf.io/v2/users/fgvc6/relationships/institutions/",
                    "meta": {}
                  }
                }
              },
              "nodes": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/nodes/",
                    "meta": {}
                  }
                }
              },
              "preprints": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/preprints/",
                    "meta": {}
                  }
                }
              },
              "registrations": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/registrations/",
                    "meta": {}
                  }
                }
              },
              "settings": {
                "data": {
                  "id": "fgvc6",
                  "type": "user-settings"
                },
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/fgvc6/settings/",
                    "meta": {}
                  }
                }
              }
            },
            "type": "users"
          }
        }
      },
      "id": "bg8v7-fgvc6",
      "links": {
        "self": "https://api.osf.io/v2/preprints/bg8v7/contributors/fgvc6/"
      },
      "relationships": {
        "preprint": {
          "data": {
            "id": "bg8v7",
            "type": "preprints"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/bg8v7/",
              "meta": {}
            }
          }
        },
        "users": {
          "data": {
            "id": "fgvc6",
            "type": "users"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/fgvc6/",
              "meta": {}
            }
          }
        }
      },
      "type": "contributors"
    },
    {
      "attributes": {
        "bibliographic": true,
        "index": 1,
        "permission": "write",
        "unregistered_contributor": null
      },
      "embeds": {
        "users": {
          "data": {
            "attributes": {
              "active": true,
              "date_registered": "2022-05-04T19:39:33.138339",
              "education": [],
              "employment": [],
              "family_name": "Mercury1",
              "full_name": "Freddie Mercury1",
              "given_name": "Freddie",
              "locale": "en_US",
              "middle_names": "",
              "social": {},
              "suffix": "",
              "timezone": "Etc/UTC"
            },
            "id": "faqpw",
            "links": {
              "html": "https://osf.io/faqpw/",
              "profile_image": "https://secure.gravatar.com/avatar/c9ac5d6cc7964ba7eb2bb96f877bc983?d=identicon",
              "self": "https://api.osf.io/v2/users/faqpw/"
            },
            "relationships": {
              "groups": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/faqpw/groups/",
                    "meta": {}
                  }
                }
              },
              "institutions": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/faqpw/institutions/",
                    "meta": {}
                  },
                  "self": {
                    "href": "https://api.osf.io/v2/users/faqpw/relationships/institutions/",
                    "meta": {}
                  }
                }
              },
              "nodes": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/faqpw/nodes/",
                    "meta": {}
                  }
                }
              },
              "preprints": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/faqpw/preprints/",
                    "meta": {}
                  }
                }
              },
              "registrations": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/faqpw/registrations/",
                    "meta": {}
                  }
                }
              }
            },
            "type": "users"
          }
        }
      },
      "id": "bg8v7-faqpw",
      "links": {
        "self": "https://api.osf.io/v2/preprints/bg8v7/contributors/faqpw/"
      },
      "relationships": {
        "preprint": {
          "data": {
            "id": "bg8v7",
            "type": "preprints"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/bg8v7/",
              "meta": {}
            }
          }
        },
        "users": {
          "data": {
            "id": "faqpw",
            "type": "users"
          },
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/faqpw/",
              "meta": {}
            }
          }
        }
      },
      "type": "contributors"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2,
      "total_bibliographic": 2
    },
    "next": null,
    "prev": null
  },
  "meta": {
    "version": "2.0"
  }
}
```

<h3 id="list-all-contributors-for-a-preprint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Contributor

<a id="opIdpreprints_contributors_create"></a>

> Code samples

```bash
curl https://example.com/preprints/string/contributors/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "attributes": {
      "bibliographic": true,
      "index": 0,
      "permission": "read"
    }
  }'
```

`POST /preprints/{preprint_id}/contributors/`

Adds a contributor to a Preprint, effectively creating a relationship between the Preprint and a user.

Contributors are users who can make changes to the Preprint. Contributors with WRITE permissions may edit preprint details, and ADMIN Contributors may add or remove other Contributors.

Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
#### Permissions
Only project administrators can add contributors to a Preprint.
#### Required
A relationship object with a `data` key, containing the `users` type and valid user ID is required.

All attributes describing the relationship between the Preprint and the user are optional.
#### Returns
Returns a JSON object with a `data` key containing the representation of the new contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "attributes": {
    "bibliographic": true,
    "index": 0,
    "permission": "read"
  }
}
```

<h3 id="create-a-contributor-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|preprint_id|path|string|true|The unique identifier of the Preprint.|
|body|body|object|true|none|
|» attributes|body|object|false|The properties of the contributor entity.|
|» » bibliographic|body|boolean|false|Whether or not the contributor will be included in citations for the Preprint. The default value is true.|
|» » index|body|integer|false|The position of this contributor in the list of Preprint's contributors and in a Preprint's citations.|
|» » permission|body|string|false|The permission level of the contributor. The default value is 'write'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » permission|read|
|» » permission|write|
|» » permission|admin|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "bibliographic": true,
      "index": 1,
      "permission": "write",
      "unregistered_contributor": null
    },
    "embeds": {
      "users": {
        "data": {
          "attributes": {
            "active": true,
            "date_registered": "2022-05-04T19:39:33.138339",
            "education": [],
            "employment": [],
            "family_name": "Mercury1",
            "full_name": "Freddie Mercury1",
            "given_name": "Freddie",
            "locale": "en_US",
            "middle_names": "",
            "social": {},
            "suffix": "",
            "timezone": "Etc/UTC"
          },
          "id": "faqpw",
          "links": {
            "html": "https://osf.io/faqpw/",
            "profile_image": "https://secure.gravatar.com/avatar/c9ac5d6cc7964ba7eb2bb96f877bc983?d=identicon",
            "self": "https://api.osf.io/v2/users/faqpw/"
          },
          "relationships": {
            "groups": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/faqpw/groups/",
                  "meta": {}
                }
              }
            },
            "institutions": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/faqpw/institutions/",
                  "meta": {}
                },
                "self": {
                  "href": "https://api.osf.io/v2/users/faqpw/relationships/institutions/",
                  "meta": {}
                }
              }
            },
            "nodes": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/faqpw/nodes/",
                  "meta": {}
                }
              }
            },
            "preprints": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/faqpw/preprints/",
                  "meta": {}
                }
              }
            },
            "registrations": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/faqpw/registrations/",
                  "meta": {}
                }
              }
            }
          },
          "type": "users"
        }
      }
    },
    "id": "bg8v7-faqpw",
    "links": {
      "self": "https://api.osf.io/v2/preprints/bg8v7/contributors/faqpw/"
    },
    "relationships": {
      "preprint": {
        "data": {
          "id": "bg8v7",
          "type": "preprints"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/preprints/bg8v7/",
            "meta": {}
          }
        }
      },
      "users": {
        "data": {
          "id": "faqpw",
          "type": "users"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/faqpw/",
            "meta": {}
          }
        }
      }
    },
    "type": "contributors"
  },
  "meta": {
    "version": "2.0"
  }
}
```

<h3 id="create-a-contributor-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a contributor

<a id="opIdpreprints_contributor_read"></a>

> Code samples

```bash
curl https://example.com/preprints/string/contributors/string/ \
  -H 'Accept: application/json'
```

`GET /preprints/{preprint_id}/contributors/{user_id}/`

Retrieves the details of a contributor on this Preprint.
Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-contributor-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|preprint_id|path|string|true|The unique identifier of the Preprint.|
|user_id|path|string|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "bibliographic": true,
      "index": 1,
      "permission": "write",
      "unregistered_contributor": null
    },
    "embeds": {
      "users": {
        "data": {
          "attributes": {
            "active": true,
            "date_registered": "2022-05-04T19:39:33.138339",
            "education": [],
            "employment": [],
            "family_name": "Mercury1",
            "full_name": "Freddie Mercury1",
            "given_name": "Freddie",
            "locale": "en_US",
            "middle_names": "",
            "social": {},
            "suffix": "",
            "timezone": "Etc/UTC"
          },
          "id": "faqpw",
          "links": {
            "html": "https://osf.io/faqpw/",
            "profile_image": "https://secure.gravatar.com/avatar/c9ac5d6cc7964ba7eb2bb96f877bc983?d=identicon",
            "self": "https://api.osf.io/v2/users/faqpw/"
          },
          "relationships": {
            "groups": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/faqpw/groups/",
                  "meta": {}
                }
              }
            },
            "institutions": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/faqpw/institutions/",
                  "meta": {}
                },
                "self": {
                  "href": "https://api.osf.io/v2/users/faqpw/relationships/institutions/",
                  "meta": {}
                }
              }
            },
            "nodes": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/faqpw/nodes/",
                  "meta": {}
                }
              }
            },
            "preprints": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/faqpw/preprints/",
                  "meta": {}
                }
              }
            },
            "registrations": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/faqpw/registrations/",
                  "meta": {}
                }
              }
            }
          },
          "type": "users"
        }
      }
    },
    "id": "bg8v7-faqpw",
    "links": {
      "self": "https://api.osf.io/v2/preprints/bg8v7/contributors/faqpw/"
    },
    "relationships": {
      "preprint": {
        "data": {
          "id": "bg8v7",
          "type": "preprints"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/preprints/bg8v7/",
            "meta": {}
          }
        }
      },
      "users": {
        "data": {
          "id": "faqpw",
          "type": "users"
        },
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/faqpw/",
            "meta": {}
          }
        }
      }
    },
    "type": "contributors"
  },
  "meta": {
    "version": "2.0"
  }
}
```

<h3 id="retrieve-a-contributor-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-registrations">Registrations</h1>

## List all registrations

<a id="opIdregistrations_list"></a>

> Code samples

```bash
curl https://example.com/registrations/ \
  -H 'Accept: application/json'
```

`GET /registrations/`

A paginated list of registrations on the OSF to which the user has access.

The returned registrations are those which are public or which the user has access to view.

Non-registered nodes cannot be accessed through this endpoint (use the [nodes](#Nodes_nodes_list) endpoints instead).

#### Registrations
A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted. The *original project* can still be edited, while the registered version cannot.

Registrations can be made public immediately or embargoed for up to 4 years.

#### Withdrawals
Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": false,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2015-05-21T19:38:55.398000",
        "date_modified": "2016-02-04T20:58:11.042000",
        "date_registered": "2015-06-01T14:47:40.064000",
        "date_withdrawn": null,
        "description": "This investigation seeks to evaluate the impact of badges on the availability and accessibility of open data and materials.",
        "embargo_end_date": null,
        "fork": false,
        "node_license": null,
        "pending_embargo_approval": false,
        "pending_registration_approval": false,
        "pending_withdrawal": false,
        "preprint": false,
        "public": true,
        "registered_meta": {
          "comments": {
            "value": ""
          },
          "datacompletion": {
            "value": "No"
          },
          "looked": {
            "value": "No"
          }
        },
        "registration": true,
        "registration_supplement": "OSF-Standard Pre-Data Collection Registration",
        "tags": [
          "badges",
          "methodology",
          "signals",
          "open science",
          "open data",
          "open materials"
        ],
        "title": "The Effect of Badges on Availability of Data and Materials",
        "withdrawal_justification": null,
        "withdrawn": false
      },
      "id": "ipkea",
      "links": {
        "html": "https://osf.io/ipkea/",
        "self": "https://api.osf.io/v2/registrations/ipkea/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/ipkea/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/ipkea/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/ipkea/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/ipkea/comments/?filter%5Btarget%5D=ipkea",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/ipkea/contributors/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/ipkea/files/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/ipkea/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/ipkea/identifiers/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/ipkea/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/registrations/ipkea/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/ipkea/logs/",
              "meta": {}
            }
          }
        },
        "registered_by": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/z2u9w/",
              "meta": {}
            }
          }
        },
        "registered_from": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/rfgdw/",
              "meta": {}
            }
          }
        },
        "registration_schema": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/metaschemas/564d31db8c5e4a7c9694b2c0/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/ipkea/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/ipkea/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/ipkea/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "registrations"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/registrations/?page=856",
    "meta": {
      "per_page": 10,
      "total": 8559
    },
    "next": "https://api.osf.io/v2/registrations/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-registrations-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a registration

<a id="opIdregistrations_read"></a>

> Code samples

```bash
curl https://example.com/registrations/string/
```

`GET /registrations/{registration_id}/`

Retrieve the details of a given registration.
#### Permissions
Only project contributors may retrieve the details of a registration that is embargoed, or has not yet been made public. Attempting to retrieve a private registration for which you are not a contributor will result in a **403 Forbidden** response.

Authentication is not required to view the details of a public registration, as public registrations give read-only access to everyone.
#### Registrations
A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted. The *original project* can still be edited, while the registered version cannot.

Registrations can be made public immediately or embargoed for up to 4 years.

#### Withdrawals
Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|

<h3 id="retrieve-a-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="retrieve-a-registration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|read-only|The properties of the registration entity.|
|» category|string|false|read-only|The category of the registered node.|
|» collection|boolean|false|read-only|Whether or not this registration represents a collection. This value should always be `false`. This field may be deprecated in future versions.|
|» current_user_can_comment|boolean|false|read-only|Whether or not the current user has permission to post comments on this registration. Comments on registrations can be set to allow all users to comment or restricted to only contributors.|
|» current_user_permissions|[string]|false|read-only|A list of strings representing the permissions for the current user on this registration. Valid permissions are "admin", "read", and "write".|
|» date_created|string(date-time)|false|read-only|The time at which the registered node was created, as an iso8601 formatted timestamp.|
|» date_modified|string(date-time)|false|read-only|The time at which the registered node was last modified, as an iso8601 formatted timestamp.|
|» date_registered|string(date-time)|false|read-only|The time at which this registration was created, as an iso8601 formatted timestamp.|
|» date_withdrawn|string(date-time)|false|read-only|The time at which this registration was withdrawn, as an iso8601 formatted timestamp.|
|» description|string|false|read-only|The description of the registered node.|
|» embargo_end_date|string(date-time)|false|read-only|The time at which the embargo on this registration will be lifted and the registration will become public, as an iso8601 formatted timestamp.|
|» fork|boolean|false|read-only|Whether or not this registration represents a fork of another node.|
|» node_license|string|false|read-only|A dictionary containing the metadata (copyright year and holder) associated with the registered node license (required for certain license types).|
|» pending_embargo_approval|boolean|false|read-only|Whether or not the embargo associated with this registration is pending approval from project administrators.|
|» pending_registration_approval|boolean|false|read-only|Whether or not the registration is pending approval from project administrators.|
|» pending_withdrawal|boolean|false|read-only|Whether or not the registration is pending approval for withdrawal from project administrators.|
|» preprint|boolean|false|read-only|Whether or not a preprint has been created from this node, or if this node was created for a preprint.|
|» public|boolean|false|none|Whether or not the registration is publicly visible.|
|» registered_meta|string|false|read-only|A dictionary with supplemental registration questions and responses.|
|» registration|boolean|false|read-only|Whether or not this is a registration. This value should always be `true`. This field may be deprecated in future versions.|
|» registration_supplement|string|false|read-only|The title of the registration schema this registration conforms to.|
|» tags|[string]|false|read-only|A list of strings that describe the registered node.|
|» template_from|string|false|read-only|The unique ID of the node from which the registered node was templated, if the registered node was created from a template.|
|» title|string|false|read-only|The title of the registered node.|
|» withdrawal_justification|string|false|read-only|The reasoning for why this registration was withdrawn, as entered by the administrator that initiated the withdrawal.|
|» withdrawn|boolean|false|read-only|Whether or not this registration has been withdrawn.|
|id|string|true|read-only|The unique identifier of the registration.|
|links|object|true|read-only|URLs to alternative representations of the registrations entity.|
|» html|string(URL)|false|read-only|A link to the registration's page on the OSF.|
|» self|string(URL)|false|read-only|A link to the canonical API endpoint of this registration.|
|relationships|object|true|read-only|URLs to other entities or entity collections that have a relationship to the registration entity.|
|» affiliated_institutions|string|false|read-only|A link to the list of institutions this registration is affiliated with.|
|» children|string|false|read-only|A link to the list of the registered node's children (components).|
|» citation|string|false|read-only|A link to the citation details of this registration.|
|» comments|string|false|read-only|A link to the list of comments on this registration.|
|» contributors|string|false|read-only|A link to the list of contributors on this registration.|
|» files|string|false|read-only|A link to the list of storage providers that have been enabled on this registration.|
|» forks|string|false|read-only|A link to the list of nodes that are forks of this registration.|
|» identifiers|string|false|read-only|A link to the list of identifiers for this registration (i.e. ARK and DOI identifiers).|
|» linked_nodes|string|false|read-only|A link to the list of nodes that are linked to this registration.|
|» logs|string|false|read-only|A link to the list of log actions pertaining to this registration.|
|» node_links|string|false|read-only|A link to the list of nodes that are linked to this registration. This field is deprecated as of verson 2.1; use the linked_nodes link instead.|
|» parent|string|false|read-only|A link to the node that is the direct parent of the current registration, if the current registration is a child registration.|
|» registered_by|string|false|read-only|A link to the user that initiated this registration.|
|» registered_from|string|false|read-only|A link to the node that this registration was registered from.|
|» registration_schema|string|false|read-only|A link to the metaschema that this registration conforms to.|
|» root|string|false|read-only|A link to the node that is the top-level parent of the current registration. If the current registration is the top-level node, the root is the current registration.|
|» view_only_links|string|false|read-only|A link to the list of view only links that have been created for this registration.|
|» wikis|string|false|read-only|A link to the list of wiki pages for this registration.|
|type|string|true|read-only|The type identifier of the registration entity (`registrations`).|

#### Enumerated Values

|Property|Value|
|---|---|
|» category|analysis|
|» category|communication|
|» category|data|
|» category|hypothesis|
|» category|instrumentation|
|» category|methods and measures|
|» category|procedure|
|» category|project|
|» category|software|
|» category|other|

<aside class="success">
This operation does not require authentication
</aside>

## Update a registration

<a id="opIdregistrations_partial_update"></a>

> Code samples

```bash
curl https://example.com/registrations/string/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {
        "draft_registration": "{draft_registration_id}",
        "lift_embargo": "2017-05-10T20:44:03.185000",
        "registration_choice": "embargo"
      },
      "type": "registrations"
    }
  }'
```

`PATCH /registrations/{registration_id}/`

Updates a registration's privacy from **private** to **public**.

Registrations can be updated with either a **PUT** or **PATCH** request. The `public` field is the only field that can be modified on a registration

Registrations can only be turned from private to public, not vice versa.
#### Permissions
Only project administrators may update a registration.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated registration, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "draft_registration": "{draft_registration_id}",
      "lift_embargo": "2017-05-10T20:44:03.185000",
      "registration_choice": "embargo"
    },
    "type": "registrations"
  }
}
```

<h3 id="update-a-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|
|body|body|object|true|none|

<h3 id="update-a-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Created|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all child registrations

<a id="opIdregistrations_children_list"></a>

> Code samples

```bash
curl https://example.com/registrations/string/children/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/children/`


A paginated list of children of a registration.

The list consists of the next level child registrations for the given registration. The returned registrations are sorted by their `date_modified`, with the most recently updated child registrations appearing first.

The list will include child registrations that are public, as well as child registrations that are private, if the authenticated user has permission to view them.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 child registrations. If the given registration has zero child registrations, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the child registration.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering
You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/children/?filter[title]=reproducibility.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.

Most fields are string fields and will be filtered using simple substring matching. Public is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.

<h3 id="list-all-child-registrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": false,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2016-05-23T12:11:14.853000",
        "date_modified": "2016-05-23T14:22:03.885000",
        "date_registered": "2016-05-23T14:24:25.478000",
        "description": "",
        "embargo_end_date": null,
        "fork": false,
        "node_license": null,
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/node_links/",
              "meta": {}
            }
          }
        },
        "pending_embargo_approval": false,
        "pending_registration_approval": false,
        "pending_withdrawal": false,
        "preprint": false,
        "public": true,
        "registered_meta": {
          "comments": {
            "comments": [],
            "extra": [],
            "value": "Data collection for measurement time T1 is underway, but no data has been collected for T2 (when menstrual cycle information will be assessed). Therefore, data cannot be analysed at the time of preregistration."
          },
          "datacompletion": {
            "comments": [],
            "extra": [],
            "value": "Yes, data collection is underway or complete"
          },
          "looked": {
            "comments": [],
            "extra": [],
            "value": "No"
          }
        },
        "registration": true,
        "registration_supplement": "OSF-Standard Pre-Data Collection Registration",
        "tags": [],
        "title": "Full Project Description",
        "withdrawal_justification": null,
        "withdrawn": false
      },
      "id": "4cmnz",
      "links": {
        "html": "https://osf.io/4cmnz/",
        "self": "https://api.osf.io/v2/registrations/4cmnz/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/comments/?filter%5Btarget%5D=4cmnz",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/contributors/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/files/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/identifiers/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/logs/",
              "meta": {}
            }
          }
        },
        "parent": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/wucr8/",
              "meta": {}
            }
          }
        },
        "registered_by": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/7xea5/",
              "meta": {}
            }
          }
        },
        "registered_from": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/5wprs/",
              "meta": {}
            }
          }
        },
        "registration_schema": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/metaschemas/564d31db8c5e4a7c9694b2c0/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/wucr8/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "registrations"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-child-registrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all citation styles

<a id="opIdregistrations_citations_list"></a>

> Code samples

```bash
curl https://example.com/registrations/string/citations/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/citations/`


A paginated list of the registration's alternative citation styles

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 citation styles. Each resource in the array is a separate citation styles object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/citations/?filter[title]=open.

Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.

<h3 id="list-all-citation-styles-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "date_parsed": "2015-02-16T04:16:25.732000",
        "short_title": "AMR",
        "summary": null,
        "title": "Academy of Management Review"
      },
      "id": "academy-of-management-review",
      "links": {},
      "type": "citation-styles"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-citation-styles-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a citation

<a id="opIdregistrations_citation_read"></a>

> Code samples

```bash
curl https://example.com/registrations/string/citations/string/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/citations/{citation_id}/`

Retrieves the citation style details for a registration, in CSL format.
#### Returns
Returns a JSON object with a `data` key that contains the representation of the details necessary for the citation style.

<h3 id="retrieve-a-citation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|
|citation_id|path|string|true|The unique identifier of the citation.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "author": [
        {
          "family": "Errington",
          "given": "Timothy M"
        },
        {
          "family": "Vasilevsky",
          "given": "Nicole"
        },
        {
          "family": "Haendel",
          "given": "Melissa A"
        }
      ],
      "publisher": "Open Science Framework",
      "title": "Identification Analysis of RP:CB",
      "type": "webpage"
    },
    "id": "bg4di",
    "links": {
      "self": "osf.io/bg4di"
    },
    "type": "node-citation"
  }
}
```

<h3 id="retrieve-a-citation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all comments

<a id="opIdregistrations_comments_list"></a>

> Code samples

```bash
curl https://example.com/registrations/string/comments/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/comments/`


A paginated list of the registration's comments.

The returned comments are sorted by their creation date, with the most recent comments appearing first.
#### Permissions
Comments of public registrations are given read-only access to everyone.

If the comment-level is `private`, only registration contributors have permission to comment.

If the comment-level is `public`, any logged-in OSF user can comment.

Comments of private registrations are only visible to contributors and administrators on the registration.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wuerf/comments/?filter[target]=wuerf

Comments may be filtered by their `deleted`, `target`, `date_created`, `date_modified`.

Most fields are string fields and will be filtered using simple substring matching. Deleted is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.

<h3 id="list-all-comments-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "can_edit": false,
        "content": "We have published a Bayesian reanalysis of this project at PLOS ONE: http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0149794\n\nI explain some of the context on my blog: http://alexanderetz.com/2016/02/26/the-bayesian-rpp-take-2/\n\nPlease note that the analysis we use in this paper is very different from the analysis used in the blog I posted in the previous comment, so the results are different as well.",
        "date_created": "2016-02-27T13:50:24.240000",
        "date_modified": "2016-04-01T04:45:44.123000",
        "deleted": false,
        "has_children": false,
        "has_report": false,
        "is_abuse": false,
        "is_ham": false,
        "modified": false,
        "page": "node"
      },
      "id": "jg7sezmdnt93",
      "links": {
        "self": "https://api.osf.io/v2/comments/jg7sezmdnt93/"
      },
      "relationships": {
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {}
            }
          }
        },
        "replies": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/comments/?filter%5Btarget%5D=jg7sezmdnt93",
              "meta": {}
            }
          }
        },
        "reports": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/comments/jg7sezmdnt93/reports/",
              "meta": {}
            }
          }
        },
        "target": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {
                "type": "nodes"
              }
            }
          }
        },
        "user": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/6yc8z/",
              "meta": {}
            }
          }
        }
      },
      "type": "comments"
    },
    {
      "attributes": {
        "can_edit": false,
        "content": "In this blog http://wp.me/p4sgtg-o6 I conduct a Bayesian Re-analysis of the Reproducibility Project that gives a graded measure of replication success. In an attempt to avoid dichotomous success/fail replication outcomes, I calculate a continous outcome (Bayes factor) that answers the question, does the replication result fit more with the original reported effect or a null effect? Many replications are strong successes, many are strong failures, and there are many that lie somewhere in between.",
        "date_created": "2015-08-30T14:50:21.093000",
        "date_modified": "2016-04-01T04:45:37.437000",
        "deleted": false,
        "has_children": false,
        "has_report": false,
        "is_abuse": false,
        "is_ham": false,
        "modified": null,
        "page": "node"
      },
      "id": "23pk9",
      "links": {
        "self": "https://api.osf.io/v2/comments/23pk9/"
      },
      "relationships": {
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {}
            }
          }
        },
        "replies": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/comments/?filter%5Btarget%5D=23pk9",
              "meta": {}
            }
          }
        },
        "reports": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/comments/23pk9/reports/",
              "meta": {}
            }
          }
        },
        "target": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {
                "type": "nodes"
              }
            }
          }
        },
        "user": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/6yc8z/",
              "meta": {}
            }
          }
        }
      },
      "type": "comments"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-comments-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all contributors

<a id="opIdregistrations_contributors_list"></a>

> Code samples

```bash
curl https://example.com/registrations/string/contributors/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/contributors/`

A paginated list of all contributors on this registration.
The returned contributors are sorted by their index.

Contributors are users who can make changes to the registration or, in the case of private registration, have read access to the registration.

Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed in the contributors list on the OSF, while non-bibliographic contributors are not.

Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 contributors. Each resource in the array contains the full representation of the contributor. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/contributors/?filter[bibliographic]=true.

Contributors may be filtered by their `bibliographic` and `permission` attributes.

<h3 id="list-all-contributors-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "bibliographic": true,
        "index": 0,
        "permission": "admin",
        "unregistered_contributor": null
      },
      "embeds": {
        "users": {
          "data": {
            "attributes": {
              "active": true,
              "date_registered": "2014-10-22T13:48:22.652000",
              "family_name": "Anderl",
              "full_name": "Christine Anderl",
              "given_name": "Christine",
              "locale": "de",
              "middle_names": "",
              "suffix": "",
              "timezone": "America/Los_Angeles"
            },
            "id": "7xea5",
            "links": {
              "html": "https://osf.io/7xea5/",
              "profile_image": "https://secure.gravatar.com/avatar/0ddf92ef0f0a7011c21cd07d7940bc32?d=identicon"
            },
            "relationships": {
              "institutions": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/7xea5/institutions/",
                    "meta": {}
                  },
                  "self": {
                    "href": "https://api.osf.io/v2/users/7xea5/relationships/institutions/",
                    "meta": {}
                  }
                }
              },
              "nodes": {
                "links": {
                  "related": {
                    "href": "https://api.osf.io/v2/users/7xea5/nodes/",
                    "meta": {}
                  }
                }
              }
            },
            "type": "users"
          }
        }
      },
      "id": "wucr8-7xea5",
      "links": {
        "self": "https://api.osf.io/v2/registrations/wucr8/contributors/7xea5/"
      },
      "relationships": {
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/wucr8/",
              "meta": {}
            }
          }
        },
        "users": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/7xea5/",
              "meta": {}
            }
          }
        }
      },
      "type": "contributors"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-contributors-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a contributor

<a id="opIdregistrations_contributors_read"></a>

> Code samples

```bash
curl https://example.com/registrations/string/contributors/string/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/contributors/{user_id}/`

Retrieves the details of a contributor on this registration.

#### Returns
Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-contributor-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|
|user_id|path|string|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "bibliographic": true,
      "index": 0,
      "permission": "admin",
      "unregistered_contributor": null
    },
    "embeds": {
      "users": {
        "data": {
          "attributes": {
            "active": true,
            "date_registered": "2014-10-22T13:48:22.652000",
            "family_name": "Anderl",
            "full_name": "Christine Anderl",
            "given_name": "Christine",
            "locale": "de",
            "middle_names": "",
            "suffix": "",
            "timezone": "America/Los_Angeles"
          },
          "id": "7xea5",
          "links": {
            "html": "https://osf.io/7xea5/",
            "profile_image": "https://secure.gravatar.com/avatar/0ddf92ef0f0a7011c21cd07d7940bc32?d=identicon"
          },
          "relationships": {
            "institutions": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/7xea5/institutions/",
                  "meta": {}
                },
                "self": {
                  "href": "https://api.osf.io/v2/users/7xea5/relationships/institutions/",
                  "meta": {}
                }
              }
            },
            "nodes": {
              "links": {
                "related": {
                  "href": "https://api.osf.io/v2/users/7xea5/nodes/",
                  "meta": {}
                }
              }
            }
          },
          "type": "users"
        }
      }
    },
    "id": "wucr8-7xea5",
    "links": {
      "self": "https://api.osf.io/v2/registrations/wucr8/contributors/7xea5/"
    },
    "relationships": {
      "node": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/wucr8/",
            "meta": {}
          }
        }
      },
      "users": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/7xea5/",
            "meta": {}
          }
        }
      }
    },
    "type": "contributors"
  }
}
```

<h3 id="retrieve-a-contributor-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all storage providers

<a id="opIdregistrations_providers_list"></a>

> Code samples

```bash
curl https://example.com/registrations/string/files/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/files/`

A paginated list of storage providers enabled on the registration

Users of the OSF may access their data on a [number of cloud-storage services](https://api.osf.io/v2/#storage-providers) that have integrations with the OSF. We call these **providers**. By default, every node has access to the OSF-provided storage but may use as many of the supported providers as desired.


#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 files. Each resource in the array is a separate file object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

Note: In the OSF filesystem model, providers are treated as folders, but with special properties that distinguish them from regular folders. Every provider folder is considered a root folder, and may not be deleted through the regular file API.

<h3 id="list-all-storage-providers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "kind": "folder",
        "name": "osfstorage",
        "node": "ezcuj",
        "path": "/",
        "provider": "osfstorage"
      },
      "id": "ezcuj:osfstorage",
      "links": {
        "new_folder": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/?kind=folder",
        "storage_addons": "https://api.osf.io/v2/addons/?filter%5Bcategories%5D=storage",
        "upload": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/"
      },
      "relationships": {
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/files/osfstorage/",
              "meta": {}
            }
          }
        }
      },
      "type": "files"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-storage-providers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all files

<a id="opIdregistrations_files_list"></a>

> Code samples

```bash
curl https://example.com/registrations/string/files/string/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/files/{provider}/`

List of all the registration's files/folders for a given storage provider.

#### Returns

Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Filtering

You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/files/osfstorage/?filter[kind]=file

Files may be filtered by `id`, `name`, `node`, `kind`, `path`, `provider`, `size`, and `last_touched`.

<h3 id="list-all-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|
|provider|path|string|true|The unique identifier of the storage provider.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "checkout": null,
        "current_user_can_comment": true,
        "current_version": 1,
        "date_created": "2014-10-17T19:24:12.264Z",
        "date_modified": "2014-10-17T19:24:12.264Z",
        "delete_allowed": true,
        "extra": {
          "downloads": 447,
          "hashes": {
            "md5": "44325d4f13b09f3769ede09d7c20a82c",
            "sha256": "2450eb9ff3db92a1bff370368b0552b270bd4b5ca0745b773c37d2662f94df8e"
          }
        },
        "guid": "sejcv",
        "kind": "file",
        "last_touched": "2015-09-18T01:11:16.328000",
        "materialized_path": "/OSC2012.pdf",
        "name": "OSC2012.pdf",
        "path": "/553e69248c5e4a219919ea54",
        "provider": "osfstorage",
        "size": 216945,
        "tags": []
      },
      "id": "553e69248c5e4a219919ea54",
      "links": {
        "delete": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
        "download": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
        "info": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/",
        "move": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
        "self": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/",
        "upload": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54"
      },
      "relationships": {
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/comments/?filter%5Btarget%5D=sejcv",
              "meta": {}
            }
          }
        },
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/ezcuj/",
              "meta": {}
            }
          }
        },
        "versions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/versions/",
              "meta": {}
            }
          }
        }
      },
      "type": "files"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a file

<a id="opIdregistrations_files_read"></a>

> Code samples

```bash
curl https://example.com/registrations/string/files/string/string/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/files/{provider}/{path}/`

Retrieves the details of a registration file for the given storage provider.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested registration file object, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-file-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|
|provider|path|string|true|The unique identifier of the storage provider.|
|path|path|string|true|The unique identifier of the file path.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "checkout": null,
      "current_user_can_comment": true,
      "current_version": 1,
      "date_created": "2014-10-17T19:24:12.264Z",
      "date_modified": "2014-10-17T19:24:12.264Z",
      "delete_allowed": true,
      "extra": {
        "downloads": 447,
        "hashes": {
          "md5": "44325d4f13b09f3769ede09d7c20a82c",
          "sha256": "2450eb9ff3db92a1bff370368b0552b270bd4b5ca0745b773c37d2662f94df8e"
        }
      },
      "guid": "sejcv",
      "kind": "file",
      "last_touched": "2015-09-18T01:11:16.328000",
      "materialized_path": "/OSC2012.pdf",
      "name": "OSC2012.pdf",
      "path": "/553e69248c5e4a219919ea54",
      "provider": "osfstorage",
      "size": 216945,
      "tags": []
    },
    "id": "553e69248c5e4a219919ea54",
    "links": {
      "delete": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
      "download": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
      "info": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/",
      "move": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54",
      "self": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/",
      "upload": "https://files.osf.io/v1/resources/ezcuj/providers/osfstorage/553e69248c5e4a219919ea54"
    },
    "relationships": {
      "comments": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/ezcuj/comments/?filter%5Btarget%5D=sejcv",
            "meta": {}
          }
        }
      },
      "node": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/ezcuj/",
            "meta": {}
          }
        }
      },
      "versions": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/files/553e69248c5e4a219919ea54/versions/",
            "meta": {}
          }
        }
      }
    },
    "type": "files"
  }
}
```

<h3 id="retrieve-a-file-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all forks

<a id="opIdregistrations_forks_list"></a>

> Code samples

```bash
curl https://example.com/registrations/string/forks/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/forks/`


A paginated list of the registration’s forks

The returned forks are sorted by their `forked_date`, with the most recent forks appearing first.

Forking a registration creates a copy of an existing registration and all of its contents.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 forks. If the current registration has no fork, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the registration's fork.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="list-all-forks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": false,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2016-05-23T12:11:14.853000",
        "date_modified": "2016-05-23T14:22:03.885000",
        "date_registered": "2016-05-23T14:24:25.478000",
        "description": "",
        "embargo_end_date": null,
        "fork": false,
        "node_license": null,
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/node_links/",
              "meta": {}
            }
          }
        },
        "pending_embargo_approval": false,
        "pending_registration_approval": false,
        "pending_withdrawal": false,
        "preprint": false,
        "public": true,
        "registered_meta": {
          "comments": {
            "comments": [],
            "extra": [],
            "value": "Data collection for measurement time T1 is underway, but no data has been collected for T2 (when menstrual cycle information will be assessed). Therefore, data cannot be analysed at the time of preregistration."
          },
          "datacompletion": {
            "comments": [],
            "extra": [],
            "value": "Yes, data collection is underway or complete"
          },
          "looked": {
            "comments": [],
            "extra": [],
            "value": "No"
          }
        },
        "registration": true,
        "registration_supplement": "OSF-Standard Pre-Data Collection Registration",
        "tags": [],
        "title": "Full Project Description",
        "withdrawal_justification": null,
        "withdrawn": false
      },
      "id": "4cmnz",
      "links": {
        "html": "https://osf.io/4cmnz/",
        "self": "https://api.osf.io/v2/registrations/4cmnz/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/comments/?filter%5Btarget%5D=4cmnz",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/contributors/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/files/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/identifiers/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/logs/",
              "meta": {}
            }
          }
        },
        "parent": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/wucr8/",
              "meta": {}
            }
          }
        },
        "registered_by": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/7xea5/",
              "meta": {}
            }
          }
        },
        "registered_from": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/5wprs/",
              "meta": {}
            }
          }
        },
        "registration_schema": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/metaschemas/564d31db8c5e4a7c9694b2c0/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/wucr8/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "registrations"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-forks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a fork

<a id="opIdregistrations_forks_create"></a>

> Code samples

```bash
curl https://example.com/registrations/string/forks/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {
        "draft_registration": "{draft_registration_id}",
        "lift_embargo": "2017-05-10T20:44:03.185000",
        "registration_choice": "embargo"
      },
      "type": "registrations"
    }
  }'
```

`POST /registrations/{registration_id}/forks/`

Creates a fork of the given registration.

Forking a project creates a copy of an existing registration and all of its contents. The fork always points back to the original registration, forming a network of registrations.

You might use a fork to copy another's work to build on and extend. For example, a professor may create an OSF project of materials for individual student use. Each student forks the project to have his or her own copy of the materials to start his/her own work.

When creating a fork, your fork will only contain public components of the current registration and components for which you are a contributor. Private components that you do not have access to will not be forked.
#### Required
There are no required attributes when creating a fork, as all of the forked registration's attributes will be copied from the current registration.

The `title` field is optional, with the default title being "Fork of " prepended to the current registration's title.
#### Returns
Returns a JSON object with a `data` key containing the complete representation of the forked registration, if the request is successful.
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "draft_registration": "{draft_registration_id}",
      "lift_embargo": "2017-05-10T20:44:03.185000",
      "registration_choice": "embargo"
    },
    "type": "registrations"
  }
}
```

<h3 id="create-a-fork-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|
|body|body|object|true|none|

<h3 id="create-a-fork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all identifiers

<a id="opIdregistrations_identifiers_list"></a>

> Code samples

```bash
curl https://example.com/registrations/string/identifiers/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/identifiers/`

A paginated list of the registration's identifiers.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering

You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/identifiers/?filter[category]=ark

Identifiers may be filtered by their `category` e.g `ark` or `doi`.

<h3 id="list-all-identifiers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "doi",
        "value": "10.17605/OSF.IO/73PND"
      },
      "id": "57f1641db83f6901ed94b459",
      "links": {
        "self": "https://api.osf.io/v2/identifiers/57f1641db83f6901ed94b459/"
      },
      "relationships": {
        "referent": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/",
              "meta": {}
            }
          }
        }
      },
      "type": "identifiers"
    },
    {
      "attributes": {
        "category": "ark",
        "value": "c7605/osf.io/73pnd"
      },
      "id": "57f1641db83f6901ed94b45a",
      "links": {
        "self": "https://api.osf.io/v2/identifiers/57f1641db83f6901ed94b45a/"
      },
      "relationships": {
        "referent": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/",
              "meta": {}
            }
          }
        }
      },
      "type": "identifiers"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-identifiers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all institutions

<a id="opIdregistrations_institutions_list"></a>

> Code samples

```bash
curl https://example.com/registrations/string/institutions/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/institutions/`

A paginated list of institutions affiliated with the registration.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 affiliated institutions. Each resource in the array is a separate institution object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="list-all-institutions-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "auth_url": null,
        "description": "COS is a non-profit technology company providing free and open services to increase inclusivity and transparency of research. Find out more at <a href=\"https://cos.io\">cos.io</a>.",
        "logo_path": "/static/img/institutions/shields/cos-shield.png",
        "name": "Center For Open Science"
      },
      "id": "cos",
      "links": {
        "self": "https://api.osf.io/v2/institutions/cos/"
      },
      "relationships": {
        "nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/cos/nodes/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/cos/registrations/",
              "meta": {}
            }
          }
        },
        "users": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/cos/users/",
              "meta": {}
            }
          }
        }
      },
      "type": "institutions"
    },
    {
      "attributes": {
        "auth_url": "https://accounts.osf.io/Shibboleth.sso/Login?entityID=urn%3Amace%3Aincommon%3Avirginia.edu",
        "description": "In partnership with the <a href=\"http://www.virginia.edu/vpr/\">Vice President for Research</a>, <a href=\"http://dsi.virginia.edu\">Data Science Institute</a>, <a href=\"https://www.hsl.virginia.edu\">Health Sciences Library</a>, and <a href=\"http://data.library.virginia.edu\">University Library</a>. Learn more about <a href=\"http://cadre.virginia.edu\">UVA resources for computational and data-driven research</a>. Projects must abide by the <a href=\"http://www.virginia.edu/informationpolicy/security.html\">University Security and Data Protection Policies</a>.",
        "logo_path": "/static/img/institutions/shields/uva-shield.png",
        "name": "University of Virginia"
      },
      "id": "uva",
      "links": {
        "self": "https://api.osf.io/v2/institutions/uva/"
      },
      "relationships": {
        "nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/uva/nodes/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/uva/registrations/",
              "meta": {}
            }
          }
        },
        "users": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/uva/users/",
              "meta": {}
            }
          }
        }
      },
      "type": "institutions"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-institutions-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all linked nodes

<a id="opIdregistrations_linked_nodes_list"></a>

> Code samples

```bash
curl https://example.com/registrations/string/linked_nodes/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/linked_nodes/`

List of all nodes linked to the registration.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/linked_nodes/?filter[title]=reproducibility/?filter[title]=reproducibility.

Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.

<h3 id="list-all-linked-nodes-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": false,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2014-07-28T13:53:04.508000",
        "date_modified": "2017-03-03T05:00:31.512000",
        "description": "This is an independent replication as part of the Reproducibility Project: Psychology.",
        "fork": false,
        "node_license": null,
        "preprint": false,
        "public": true,
        "registration": false,
        "tags": [],
        "title": "Replication of WA Cunningham, JJ Van Bavel, IR Johnsen (2008, PS 19(2))"
      },
      "id": "bifc7",
      "links": {
        "html": "https://osf.io/bifc7/",
        "self": "https://api.osf.io/v2/nodes/bifc7/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/bifc7/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/comments/?filter%5Btarget%5D=bifc7",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/contributors/",
              "meta": {}
            }
          }
        },
        "draft_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/draft_registrations/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/files/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/identifiers/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/bifc7/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/logs/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/node_links/",
              "meta": {}
            }
          }
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/preprints/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/registrations/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    },
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": false,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2012-10-31T18:50:46.111000",
        "date_modified": "2016-10-02T19:50:23.605000",
        "description": null,
        "fork": true,
        "node_license": {
          "copyright_holders": [
            ""
          ],
          "year": "2016"
        },
        "preprint": false,
        "public": true,
        "registration": false,
        "tags": [
          "anxiety",
          "EMG",
          "EEG",
          "motivation",
          "ERN"
        ],
        "title": "Replication of Hajcak &amp; Foti (2008, PS, Study 1)"
      },
      "id": "73pnd",
      "links": {
        "html": "https://osf.io/73pnd/",
        "self": "https://api.osf.io/v2/nodes/73pnd/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/73pnd/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/comments/?filter%5Btarget%5D=73pnd",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/contributors/",
              "meta": {}
            }
          }
        },
        "draft_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/draft_registrations/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/files/",
              "meta": {}
            }
          }
        },
        "forked_from": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/kxhz5/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/identifiers/",
              "meta": {}
            }
          }
        },
        "license": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e96a/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/73pnd/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/logs/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/node_links/",
              "meta": {}
            }
          }
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/preprints/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/registrations/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-linked-nodes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all logs

<a id="opIdregistrations_logs_list"></a>

> Code samples

```bash
curl https://example.com/registrations/string/logs/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/logs/`

A paginated list of the registration's logs.

The returned logs are sorted by their `date`, with the most recents logs appearing first.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/logs/?filter[action]=made_private.

Logs may be filtered by their `action`, and `date`.

<h3 id="list-all-logs-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "action": "osf_storage_file_updated",
        "date": "2016-05-23T14:22:20.142000",
        "params": {
          "contributors": [],
          "params_node": {
            "id": "7eshv",
            "title": "Full Questionnaire [in original language]"
          },
          "params_project": {
            "id": "5wprs",
            "title": "Full Project Description"
          },
          "path": "/StudyMaterials_UEH1.pdf",
          "preprint_provider": null,
          "urls": {
            "download": "/project/7eshv/files/osfstorage/5742f41c6c613b01de5b15dd/?action=download",
            "view": "/project/7eshv/files/osfstorage/5742f41c6c613b01de5b15dd/"
          }
        }
      },
      "id": "57431299594d9001ead7174f",
      "links": {
        "self": "https://api.osf.io/v2/logs/57431299594d9001ead7174f/"
      },
      "relationships": {
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/n32tp/",
              "meta": {}
            }
          }
        },
        "original_node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/7eshv/",
              "meta": {}
            }
          }
        },
        "user": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/7xea5/",
              "meta": {}
            }
          }
        }
      },
      "type": "logs"
    },
    {
      "attributes": {
        "action": "project_created",
        "date": "2016-05-23T12:13:58.371000",
        "params": {
          "contributors": [],
          "params_node": {
            "id": "7eshv",
            "title": "Full Questionnaire [in original language]"
          },
          "params_project": null,
          "preprint_provider": null
        }
      },
      "id": "57431299594d9001ead7174d",
      "links": {
        "self": "https://api.osf.io/v2/logs/57431299594d9001ead7174d/"
      },
      "relationships": {
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/n32tp/",
              "meta": {}
            }
          }
        },
        "original_node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/7eshv/",
              "meta": {}
            }
          }
        },
        "user": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/7xea5/",
              "meta": {}
            }
          }
        }
      },
      "type": "logs"
    },
    {
      "attributes": {
        "action": "project_created",
        "date": "2016-05-23T12:11:14.853000",
        "params": {
          "contributors": [],
          "params_node": {
            "id": "5wprs",
            "title": "Full Project Description"
          },
          "params_project": null,
          "preprint_provider": null
        }
      },
      "id": "57431299594d9001ead71746",
      "links": {
        "self": "https://api.osf.io/v2/logs/57431299594d9001ead71746/"
      },
      "relationships": {
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/4cmnz/",
              "meta": {}
            }
          }
        },
        "original_node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/5wprs/",
              "meta": {}
            }
          }
        },
        "user": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/7xea5/",
              "meta": {}
            }
          }
        }
      },
      "type": "logs"
    },
    {
      "attributes": {
        "action": "project_created",
        "date": "2016-05-23T12:10:48.868000",
        "params": {
          "contributors": [],
          "params_node": {
            "id": "6gbkh",
            "title": "Investigating fluctuations in cooperative preferences across the natural female menstrual cycle in a within-subjects-design"
          },
          "params_project": null,
          "preprint_provider": null
        }
      },
      "id": "57431299594d9001ead71742",
      "links": {
        "self": "https://api.osf.io/v2/logs/57431299594d9001ead71742/"
      },
      "relationships": {
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/wucr8/",
              "meta": {}
            }
          }
        },
        "original_node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/6gbkh/",
              "meta": {}
            }
          }
        },
        "user": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/7xea5/",
              "meta": {}
            }
          }
        }
      },
      "type": "logs"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 5
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-logs-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all view only links

<a id="opIdregistrations_view_only_links_list"></a>

> Code samples

```bash
curl https://example.com/registrations/string/view_only_links/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/view_only_links/`

A paginated list of view only links created for this registration.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

#### Permissions

View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.

#### Filtering

You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/view_only_links/?filter[anonymous]=true.

View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.

<h3 id="list-all-view-only-links-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "anonymous": false,
        "date_created": "2017-03-20T20:15:02.488643",
        "key": "c1df490be3294a9bac01ff05c4097ab7",
        "name": "vol name"
      },
      "id": "58d03846a170c50025baae61",
      "links": {
        "self": "http://api.osf.io/v2/nodes/gaz5n/view_only_links/58d03846a170c50025baae61/"
      },
      "relationships": {
        "creator": {
          "links": {
            "related": {
              "href": "http://api.osf.io/v2/users/4xpu9/",
              "meta": {}
            }
          }
        },
        "nodes": {
          "links": {
            "related": {
              "href": "http://api.osf.io/v2/view_only_links/58d03846a170c50025baae61/nodes/",
              "meta": {}
            },
            "self": {
              "href": "http://api.osf.io/v2/view_only_links/58d03846a170c50025baae61/relationships/nodes/",
              "meta": {}
            }
          }
        }
      },
      "type": "view_only_links"
    },
    {
      "attributes": {
        "anonymous": false,
        "date_created": "2017-03-21T14:26:47.507504",
        "key": "9794ac36085e4d7086ff4dab49daf1cb",
        "name": "vol name"
      },
      "id": "58d13827a170c50025baae6e",
      "links": {
        "self": "http://api.osf.io/v2/nodes/gaz5n/view_only_links/58d13827a170c50025baae6e/"
      },
      "relationships": {
        "creator": {
          "links": {
            "related": {
              "href": "http://api.osf.io/v2/users/4xpu9/",
              "meta": {}
            }
          }
        },
        "nodes": {
          "links": {
            "related": {
              "href": "http://api.osf.io/v2/view_only_links/58d13827a170c50025baae6e/nodes/",
              "meta": {}
            },
            "self": {
              "href": "http://api.osf.io/v2/view_only_links/58d13827a170c50025baae6e/relationships/nodes/",
              "meta": {}
            }
          }
        }
      },
      "type": "view_only_links"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-view-only-links-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a view only link

<a id="opIdregistrations_view_only_links_read"></a>

> Code samples

```bash
curl https://example.com/registrations/string/view_only_links/string/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/view_only_links/{link_id}/`

Retrieves the details of a view only link created from this registration.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
#### Permissions

View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.

<h3 id="retrieve-a-view-only-link-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|
|link_id|path|string|true|The unique identifier of the view only link.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "anonymous": false,
      "date_created": "2017-03-20T20:11:01.603851",
      "key": "<view_only_link_key>",
      "name": "Test View Only Link"
    },
    "id": "<link_id>",
    "relationships": {
      "creator": {
        "links": {
          "related": {
            "href": "http://api.osf.io/v2/users/<user_id>/",
            "meta": {}
          }
        }
      },
      "nodes": {
        "links": {
          "related": {
            "href": "http://api.osf.io/v2/view_only_links/<link_id>/nodes/",
            "meta": {}
          },
          "self": {
            "href": "http://api.osf.io/v2/view_only_links/<link_id>/relationships/nodes/",
            "meta": {}
          }
        }
      }
    },
    "type": "view-only-links"
  }
}
```

<h3 id="retrieve-a-view-only-link-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all wikis

<a id="opIdregistrations_wikis_list"></a>

> Code samples

```bash
curl https://example.com/registrations/string/wikis/ \
  -H 'Accept: application/json'
```

`GET /registrations/{registration_id}/wikis/`

A paginated list of the registration's wiki pages
#### Returns
A list of all registration's current wiki page versions ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
#### Filtering
Wiki pages can be filtered based on their `name` and `date_modified` fields.
+ `filter[name]=<Str>` -- filter wiki pages by name
+ `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.

Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.

<h3 id="list-all-wikis-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration_id|path|string|true|The unique identifier of the registration.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "content_type": "text/markdown",
        "current_user_can_comment": false,
        "date_modified": "2015-02-11T21:16:50.918000",
        "extra": {
          "version": 1
        },
        "kind": "file",
        "materialized_path": "/9rb7g",
        "name": "home",
        "path": "/9rb7g",
        "size": 1544
      },
      "id": "9rb7g",
      "links": {
        "download": "https://api.osf.io/v2/wikis/9rb7g/content/",
        "info": "https://api.osf.io/v2/wikis/9rb7g/",
        "self": "https://api.osf.io/v2/wikis/9rb7g/"
      },
      "relationships": {
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/wu3a4/comments/?filter%5Btarget%5D=9rb7g",
              "meta": {}
            }
          }
        },
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/wu3a4/",
              "meta": {}
            }
          }
        },
        "user": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/edb8y/",
              "meta": {}
            }
          }
        }
      },
      "type": "wikis"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-wikis-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-taxonomies">Taxonomies</h1>

## List all taxonomies

<a id="opIdtaxonomies_list"></a>

> Code samples

```bash
curl https://example.com/taxonomies/ \
  -H 'Accept: application/json'
```

`GET /taxonomies/`


A paginated list of all [bepress disciplines taxonomies](https://www.bepress.com/wp-content/uploads/2016/12/Digital-Commons-Disciplines-taxonomy-2017-01.pdf).
Note: this API endpoint is under active development, and is subject to change in the future.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 taxonomies. Each resource in the array is a separate taxonomy object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include taxonomies that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/taxonomies/?filter['id']='{taxonomy_id}'.

Taxonomies may be filtered by their `id`, `parents`, and `text`.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "child_count": 0,
        "parents": [
          {
            "id": "584240d954be81056ceca97a",
            "text": "Philosophy"
          }
        ],
        "text": "History of Philosophy"
      },
      "id": "584240d854be81056ceca838",
      "links": {
        "parents": [
          "https://api.osf.io/v2/taxonomies/584240d954be81056ceca97a/"
        ],
        "self": "https://api.osf.io/v2/taxonomies/584240d854be81056ceca838/"
      },
      "type": "taxonomies"
    },
    {
      "attributes": {
        "child_count": 0,
        "parents": [
          {
            "id": "584240db54be81056cecacd3",
            "text": "Law"
          }
        ],
        "text": "Animal Law"
      },
      "id": "584240d854be81056ceca839",
      "links": {
        "parents": [
          "https://api.osf.io/v2/taxonomies/584240db54be81056cecacd3/"
        ],
        "self": "https://api.osf.io/v2/taxonomies/584240d854be81056ceca839/"
      },
      "type": "taxonomies"
    },
    {
      "attributes": {
        "child_count": 0,
        "parents": [
          {
            "id": "584240db54be81056cecacd3",
            "text": "Law"
          }
        ],
        "text": "Consumer Protection Law"
      },
      "id": "584240d854be81056ceca83a",
      "links": {
        "parents": [
          "https://api.osf.io/v2/taxonomies/584240db54be81056cecacd3/"
        ],
        "self": "https://api.osf.io/v2/taxonomies/584240d854be81056ceca83a/"
      },
      "type": "taxonomies"
    },
    {
      "attributes": {
        "child_count": 0,
        "parents": [
          {
            "id": "584240da54be81056cecaa9c",
            "text": "Religion"
          }
        ],
        "text": "Missions and World Christianity"
      },
      "id": "584240d854be81056ceca83b",
      "links": {
        "parents": [
          "https://api.osf.io/v2/taxonomies/584240da54be81056cecaa9c/"
        ],
        "self": "https://api.osf.io/v2/taxonomies/584240d854be81056ceca83b/"
      },
      "type": "taxonomies"
    },
    {
      "attributes": {
        "child_count": 0,
        "parents": [
          {
            "id": "584240d954be81056ceca8fd",
            "text": "Teacher Education and Professional Development"
          }
        ],
        "text": "Other Teacher Education and Professional Development"
      },
      "id": "584240d854be81056ceca83c",
      "links": {
        "parents": [
          "https://api.osf.io/v2/taxonomies/584240d954be81056ceca8fd/"
        ],
        "self": "https://api.osf.io/v2/taxonomies/584240d854be81056ceca83c/"
      },
      "type": "taxonomies"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": null,
    "next": null,
    "per_page": 10,
    "prev": null,
    "total": 5
  }
}
```

<h3 id="list-all-taxonomies-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a taxonomy

<a id="opIdtaxonomies_read"></a>

> Code samples

```bash
curl https://example.com/taxonomies/string/ \
  -H 'Accept: application/json'
```

`GET /taxonomies/{taxonomy_id}/`

Retrieves the details of a taxonomy.
#### Returns

Returns a JSON object with a `data` key containing the representation of the requested taxonomy, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-taxonomy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxonomy_id|path|string|true|The unique identifier of the taxonomy.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "child_count": 0,
      "parents": [
        {
          "id": "584240da54be81056cecab8f",
          "text": "Economics"
        }
      ],
      "text": "Public Economics"
    },
    "id": "584240d954be81056ceca841",
    "links": {
      "parents": [
        "https://api.osf.io/v2/taxonomies/584240da54be81056cecab8f/"
      ],
      "self": "https://api.osf.io/v2/taxonomies/584240d954be81056ceca841/"
    },
    "type": "taxonomies"
  }
}
```

<h3 id="retrieve-a-taxonomy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-users">Users</h1>

## List all users

<a id="opIdusers_list"></a>

> Code samples

```bash
curl https://example.com/users/ \
  -H 'Accept: application/json'
```

`GET /users/`


A paginated list of all users registered on the OSF. The returned users are sorted by their `date_registered`, with the most recently registered users appearing first.

The subroute `/users/me/` is a special endpoint that always points to the currently logged-in user.
#### Versioning
As of version `2.3`, merged users will not be returned from this endpoint.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 users. Each resource in the array is a separate users object and contains the full representation of the user, meaning additional requests to a user's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

This request should never return an error.
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/?filter[family_name]=Nosek.

Users may be filtered by their `id`, `full_name`, `given_name`, `middle_name`, or `family_name`.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "active": true,
        "date_registered": "2014-06-15T17:39:06.701000",
        "family_name": "Rollins",
        "full_name": "Casey Rollins",
        "given_name": "Casey",
        "locale": "en_US",
        "middle_names": "",
        "suffix": "",
        "timezone": "America/New_York"
      },
      "id": "q7fts",
      "links": {
        "html": "https://osf.io/q7fts/",
        "profile_image": "https://secure.gravatar.com/avatar/e9d9311ab2f5ab7492a86ac9adb5c8e9?d=identicon",
        "self": "https://api.osf.io/v2/users/q7fts/"
      },
      "relationships": {
        "institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/q7fts/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/users/q7fts/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/q7fts/nodes/",
              "meta": {}
            }
          }
        }
      },
      "type": "users"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/users/?page=4337",
    "meta": {
      "per_page": 10,
      "total": 43370
    },
    "next": "https://api.osf.io/v2/users/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a user

<a id="opIdusers_read"></a>

> Code samples

```bash
curl https://example.com/users/string/ \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/`

Retrieves the details of a given users.

The returned information includes the user's bibliographic information and the date the user was registered.

Additionally, relationships to the list of institutions with which the user is affiliated, and to the list of nodes which the user contributes to (that the requesting user has permission to see) are returned.

If `me` is given as the `user_id` in the request path, the record of the currently logged-in user will be returned.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested user, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "active": true,
      "date_registered": "2014-06-15T17:39:06.701000",
      "family_name": "Rollins",
      "full_name": "Casey Rollins",
      "given_name": "Casey",
      "locale": "en_US",
      "middle_names": "",
      "suffix": "",
      "timezone": "America/New_York"
    },
    "id": "q7fts",
    "links": {
      "html": "https://osf.io/q7fts/",
      "profile_image": "https://secure.gravatar.com/avatar/e9d9311ab2f5ab7492a86ac9adb5c8e9?d=identicon",
      "self": "https://api.osf.io/v2/users/q7fts/"
    },
    "relationships": {
      "institutions": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/q7fts/institutions/",
            "meta": {}
          },
          "self": {
            "href": "https://api.osf.io/v2/users/q7fts/relationships/institutions/",
            "meta": {}
          }
        }
      },
      "nodes": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/q7fts/nodes/",
            "meta": {}
          }
        }
      }
    },
    "type": "users"
  }
}
```

<h3 id="retrieve-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a user

<a id="opIdusers_partial_update"></a>

> Code samples

```bash
curl https://example.com/users/string/ \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "attributes": {
        "full_name": "Casey M. Rollins",
        "middle_names": "Marie"
      },
      "id": "{user_id}",
      "type": "users"
    }
  }'
```

`PATCH /users/{user_id}/`

Updates a user by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.

Users can be updated with either a **PUT** or **PATCH** request. The `full_name` field is mandatory in a **PUT** request, and optional in a **PATCH**.

**Note**: if you make a PUT/PATCH request to the `/users/me/` endpoint, you must still provide your full user ID in the ID field of the request. We do not support using the `me` alias in request bodies at this time.
#### Returns
Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

> Body parameter

```json
{
  "data": {
    "attributes": {
      "full_name": "Casey M. Rollins",
      "middle_names": "Marie"
    },
    "id": "{user_id}",
    "type": "users"
  }
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|body|body|object|true|none|
|» attributes|body|object|true|The properties of the user entity.|
|» » family_name|body|string|false|The family name of the user, used for bibliographic citations.|
|» » full_name|body|string|true|The full name of the user, used for display on the OSF.|
|» » given_name|body|string|false|The given name of the user, used for bibliographic citations.|
|» » locale|body|string|false|The user's locale, e.g. 'en_US'.|
|» » middle_names|body|string|false|The middle names of the user, used for bibliographic citations.|
|» » suffix|body|string|false|The suffix of the user, used for bibliographic citations.|
|» » timezone|body|string|false|The user's timezone, e.g. 'Etc/UTC'.|

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all user addons

<a id="opIdusers_addons_list"></a>

> Code samples

```bash
curl https://example.com/users/string/addons/ \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/addons/`


A paginated list of authorized user addons

#### Permissions

User addons are visible only to the user that authorized the addon.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

Attempting to request the accounts for an addon that is not enabled will result in a **404 Not Found** response.

<h3 id="list-all-user-addons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "user_has_auth": true
      },
      "id": "box",
      "links": {
        "accounts": {
          "562d9acf8c5e4a14112e489e": {
            "account": "https://api.osf.io/v2/users/q7fts/addons/box/accounts/562d9acf8c5e4a14112e489e/",
            "nodes_connected": [
              "https://api.osf.io/v2/nodes/t3y58/"
            ]
          }
        },
        "self": "https://api.osf.io/v2/users/me/addons/box/"
      },
      "type": "user_addons"
    },
    {
      "attributes": {
        "user_has_auth": true
      },
      "id": "dropbox",
      "links": {
        "accounts": {
          "56742db88c5e4a396d689e3e": {
            "account": "https://api.osf.io/v2/users/q7fts/addons/dropbox/accounts/56742db88c5e4a396d689e3e/",
            "nodes_connected": []
          }
        },
        "self": "https://api.osf.io/v2/users/me/addons/dropbox/"
      },
      "type": "user_addons"
    },
    {
      "attributes": {
        "user_has_auth": true
      },
      "id": "github",
      "links": {
        "accounts": {
          "570edf7f9ad5a101f90030f6": {
            "account": "https://api.osf.io/v2/users/q7fts/addons/github/accounts/570edf7f9ad5a101f90030f6/",
            "nodes_connected": [
              "https://api.osf.io/v2/nodes/t3y58/"
            ]
          }
        },
        "self": "https://api.osf.io/v2/users/me/addons/github/"
      },
      "type": "user_addons"
    },
    {
      "attributes": {
        "user_has_auth": true
      },
      "id": "googledrive",
      "links": {
        "accounts": {
          "563c1c518c5e4a36e7dc5450": {
            "account": "https://api.osf.io/v2/users/q7fts/addons/googledrive/accounts/563c1c518c5e4a36e7dc5450/",
            "nodes_connected": [
              "https://api.osf.io/v2/nodes/6y5jf/",
              "https://api.osf.io/v2/nodes/t3y58/"
            ]
          },
          "58fe1cb59ad5a1025c8ae281": {
            "account": "https://api.osf.io/v2/users/q7fts/addons/googledrive/accounts/58fe1cb59ad5a1025c8ae281/",
            "nodes_connected": []
          }
        },
        "self": "https://api.osf.io/v2/users/me/addons/googledrive/"
      },
      "type": "user_addons"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 4
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-user-addons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a user addon

<a id="opIdusers_addons_read"></a>

> Code samples

```bash
curl https://example.com/users/string/addons/string/ \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/addons/{provider}/`

Retrieves the details of an authorized user addon

#### Permissions

User addons are visible only to the user that authorized the addon.

#### Returns
Returns a JSON object with a `data` key containing the representation of the requested user addon, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

Attempting to request the accounts for an addon that is not enabled will result in a **404 Not Found** response.

<h3 id="retrieve-a-user-addon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|provider|path|string|true|The unique identifier of the addon provider.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "user_has_auth": true
    },
    "id": "dropbox",
    "links": {
      "accounts": {
        "58d16ece9ad5a10201025eb4": {
          "account": "https://api.osf.io/v2/users/f542f/addons/dropbox/accounts/58d16ece9ad5a10201025eb4/",
          "nodes_connected": []
        }
      },
      "self": "https://api.osf.io/v2/users/me/addons/dropbox/"
    },
    "type": "user_addons"
  }
}
```

<h3 id="retrieve-a-user-addon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all addon accounts

<a id="opIdUsers_addon_accounts_list"></a>

> Code samples

```bash
curl https://example.com/users/string/addons/string/accounts/ \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/addons/{provider}/accounts/`


A paginated list of addon accounts authorized by this user.

#### Permissions

Addon accounts are visible only to the user that authorized the account.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of at most 10 addon account objects. Each resource in the array is a separate  addon account object and contains the full representation of the addon account.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="list-all-addon-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|provider|path|string|true|The unique identifier of the addon provider.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "display_name": "Fabrice Mizero",
        "profile_url": null,
        "provider": "dropbox"
      },
      "id": "58d16ece9ad5a10201027eb4",
      "links": {
        "self": "https://api.osf.io/v2/users/me/addons/dropbox/accounts/58d16ece9ad5a10201027eb4/"
      },
      "type": "external_accounts"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 1
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-addon-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve an addon account

<a id="opIdUsers_addon_accounts_read"></a>

> Code samples

```bash
curl https://example.com/users/string/addons/string/accounts/string/ \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/addons/{provider}/accounts/{account_id}/`

Retrieves the details of an addon account

#### Permissions

Addon accounts are visible only to the user that authorized the account.

#### Returns
Returns a JSON object with a `data` key containing the representation of the requested addon account, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-an-addon-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|provider|path|string|true|The unique identifier of the addon provider.|
|account_id|path|string|true|The unique identifier of the addon account.|

> Example responses

> 200 Response

```json
{
  "data": {
    "data": {
      "attributes": {
        "display_name": "Fabrice Mizero",
        "profile_url": null,
        "provider": "dropbox"
      },
      "id": "58d16ece9ad5a10201027eb4",
      "links": {
        "self": "https://api.osf.io/v2/users/me/addons/dropbox/accounts/58d16ece9ad5a10201027eb4/"
      },
      "type": "external_accounts"
    }
  }
}
```

<h3 id="retrieve-an-addon-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all institutions

<a id="opIdusers_institutions_list"></a>

> Code samples

```bash
curl https://example.com/users/string/institutions/ \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/institutions/`

A paginated list of institutions that the user is affiliated with.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 institutions. Each resource in the array is a complete institution object and contains the full representation of the institution, meaning additional requests to a institution's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

<h3 id="list-all-institutions-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "auth_url": "https://accounts.osf.io/Shibboleth.sso/Login?entityID=urn%3Amace%3Aincommon%3Avirginia.edu",
        "description": "In partnership with the <a href=\"http://www.virginia.edu/vpr/\">Vice President for Research</a>, <a href=\"http://dsi.virginia.edu\">Data Science Institute</a>, <a href=\"https://www.hsl.virginia.edu\">Health Sciences Library</a>, and <a href=\"http://data.library.virginia.edu\">University Library</a>. Learn more about <a href=\"http://cadre.virginia.edu\">UVA resources for computational and data-driven research</a>. Projects must abide by the <a href=\"http://www.virginia.edu/informationpolicy/security.html\">University Security and Data Protection Policies</a>.",
        "logo_path": "/static/img/institutions/shields/uva-shield.png",
        "name": "University of Virginia"
      },
      "id": "uva",
      "links": {
        "self": "https://api.osf.io/v2/institutions/uva/"
      },
      "relationships": {
        "nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/uva/nodes/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/uva/registrations/",
              "meta": {}
            }
          }
        },
        "users": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/institutions/uva/users/",
              "meta": {}
            }
          }
        }
      },
      "type": "institutions"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 2
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-institutions-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all nodes

<a id="opIdusers_nodes_list"></a>

> Code samples

```bash
curl https://example.com/users/string/nodes/ \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/nodes/`

A paginated list of nodes that the user is a contributor to. The returned nodes are sorted by their `date_modified`, with the most recently updated nodes appearing first.

If the user ID in the path is the same as the logged-in user, all nodes will be returned. Otherwise, only the user's public nodes will be returned.

User registrations are not available at this endpoint.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/nodes/?filter[title]=open.

Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.

<h3 id="list-all-nodes-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": false,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2013-10-22T20:07:57.674000",
        "date_modified": "2017-02-09T20:37:49.060000",
        "description": null,
        "fork": false,
        "node_license": null,
        "preprint": false,
        "public": true,
        "registration": false,
        "tags": [],
        "title": "Study 8: Replication of Hatzivassiliou et al., 2010 (Nature)"
      },
      "id": "0hezb",
      "links": {
        "html": "https://osf.io/0hezb/",
        "self": "https://api.osf.io/v2/nodes/0hezb/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/0hezb/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/comments/?filter%5Btarget%5D=0hezb",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/contributors/",
              "meta": {}
            }
          }
        },
        "draft_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/draft_registrations/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/files/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/identifiers/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/0hezb/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/logs/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/node_links/",
              "meta": {}
            }
          }
        },
        "parent": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/p7ayb/",
              "meta": {}
            }
          }
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/preprints/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/registrations/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/e81xl/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/0hezb/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/users/alh38/nodes/?page=23",
    "meta": {
      "per_page": 10,
      "total": 224
    },
    "next": "https://api.osf.io/v2/users/alh38/nodes/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-nodes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all preprints

<a id="opIdusers_preprints_list"></a>

> Code samples

```bash
curl https://example.com/users/string/preprints/ \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/preprints/`

A paginated list of preprints that the user contributes to. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 preprints. Each resource in the array is a complete preprint object and contains the full representation of the preprint, meaning additional requests to a preprint's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/preprints/?filter[provider]=psyarxiv.

Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.

<h3 id="list-all-preprints-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "date_created": "2016-08-29T14:53:51.185000",
        "date_modified": "2016-08-29T14:53:51.185000",
        "date_published": "2016-08-29T14:53:51.185000",
        "doi": "10.1371/journal.pbio.1002456",
        "is_preprint_orphan": false,
        "is_published": true,
        "license_record": null,
        "subjects": [
          [
            {
              "id": "584240da54be81056cecac48",
              "text": "Social and Behavioral Sciences"
            },
            {
              "id": "584240da54be81056cecaab8",
              "text": "Public Affairs, Public Policy and Public Administration"
            },
            {
              "id": "584240d954be81056cecaa10",
              "text": "Science and Technology Policy"
            }
          ],
          [
            {
              "id": "584240da54be81056cecac48",
              "text": "Social and Behavioral Sciences"
            },
            {
              "id": "584240da54be81056cecab33",
              "text": "Library and Information Science"
            },
            {
              "id": "584240db54be81056cecacd2",
              "text": "Scholarly Publishing"
            }
          ],
          [
            {
              "id": "584240da54be81056cecac48",
              "text": "Social and Behavioral Sciences"
            },
            {
              "id": "584240da54be81056cecac68",
              "text": "Psychology"
            }
          ],
          [
            {
              "id": "584240da54be81056cecac48",
              "text": "Social and Behavioral Sciences"
            },
            {
              "id": "584240da54be81056cecac68",
              "text": "Psychology"
            }
          ]
        ]
      },
      "id": "khbvy",
      "links": {
        "doi": "https://dx.doi.org/10.1371/journal.pbio.1002456",
        "html": "https://osf.io/khbvy/",
        "self": "https://api.osf.io/v2/preprints/khbvy/"
      },
      "relationships": {
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprints/khbvy/citation/",
              "meta": {}
            }
          }
        },
        "node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bnzx5/",
              "meta": {}
            }
          }
        },
        "primary_file": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/files/57c44b1e594d90004a421ab1/",
              "meta": {}
            }
          }
        },
        "provider": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/preprint_providers/osf/",
              "meta": {}
            }
          }
        }
      },
      "type": "preprints"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": {
      "per_page": 10,
      "total": 4
    },
    "next": null,
    "prev": null
  }
}
```

<h3 id="list-all-preprints-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all registrations

<a id="opIdusers_registrations_list"></a>

> Code samples

```bash
curl https://example.com/users/string/registrations/ \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/registrations/`

A paginated list of registrations that the user is a contributor to. The returned registrations are sorted by their `date_modified`, with the most recently updated registrations appearing first.

If the user ID in the path is the same as the logged-in user, all registrations will be returned. Otherwise, only the user's public registrations will be returned.

User nodes are not available at this endpoint.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Filtering
You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/registrations/?filter[title]=replication.

Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.

<h3 id="list-all-registrations-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "communication",
        "collection": false,
        "current_user_can_comment": true,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2016-09-27T01:12:42.135000",
        "date_modified": "2016-11-18T19:14:42.873000",
        "date_registered": "2016-11-18T19:16:56.962000",
        "description": "",
        "embargo_end_date": null,
        "fork": false,
        "node_license": null,
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/d5r99/node_links/",
              "meta": {}
            }
          }
        },
        "pending_embargo_approval": false,
        "pending_registration_approval": false,
        "pending_withdrawal": false,
        "preprint": false,
        "public": true,
        "registered_meta": {
          "comments": {
            "comments": [],
            "extra": [],
            "value": ""
          },
          "datacompletion": {
            "comments": [],
            "extra": [],
            "value": "No, data collection has not begun"
          },
          "looked": {
            "comments": [],
            "extra": [],
            "value": "No"
          }
        },
        "registration": true,
        "registration_supplement": "OSF-Standard Pre-Data Collection Registration",
        "tags": [],
        "title": "Replication Reports",
        "withdrawal_justification": null,
        "withdrawn": false
      },
      "id": "d5r99",
      "links": {
        "html": "https://osf.io/d5r99/",
        "self": "https://api.osf.io/v2/registrations/d5r99/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/d5r99/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/d5r99/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/d5r99/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/d5r99/comments/?filter%5Btarget%5D=d5r99",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/d5r99/contributors/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/d5r99/files/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/d5r99/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/d5r99/identifiers/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/d5r99/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/registrations/d5r99/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/d5r99/logs/",
              "meta": {}
            }
          }
        },
        "parent": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/sdbdx/",
              "meta": {}
            }
          }
        },
        "registered_by": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/users/dnhrw/",
              "meta": {}
            }
          }
        },
        "registered_from": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/qce75/",
              "meta": {}
            }
          }
        },
        "registration_schema": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/metaschemas/564d31db8c5e4a7c9694b2c0/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/sdbdx/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/d5r99/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/registrations/d5r99/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "registrations"
    }
  ],
  "links": {
    "first": null,
    "last": "https://api.osf.io/v2/users/cdi38/registrations/?page=17",
    "meta": {
      "per_page": 10,
      "total": 170
    },
    "next": "https://api.osf.io/v2/users/cdi38/registrations/?page=2",
    "prev": null
  }
}
```

<h3 id="list-all-registrations-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-view-only-links">View Only Links</h1>

## Retrieve a view only link

<a id="opIdview_only_links_read"></a>

> Code samples

```bash
curl https://example.com/view_only_links/string/ \
  -H 'Accept: application/json'
```

`GET /view_only_links/{link_id}/`

Retrieves details about a specific view only link.
#### Permissions
Only project administrators may retrieve the details of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-view-only-link-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|link_id|path|string|true|The unique identifier of the view only link.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "anonymous": false,
      "date_created": "2017-03-20T20:11:01.603851",
      "key": "<view_only_link_key>",
      "name": "Test View Only Link"
    },
    "id": "<link_id>",
    "relationships": {
      "creator": {
        "links": {
          "related": {
            "href": "http://api.osf.io/v2/users/<user_id>/",
            "meta": {}
          }
        }
      },
      "nodes": {
        "links": {
          "related": {
            "href": "http://api.osf.io/v2/view_only_links/<link_id>/nodes/",
            "meta": {}
          },
          "self": {
            "href": "http://api.osf.io/v2/view_only_links/<link_id>/relationships/nodes/",
            "meta": {}
          }
        }
      }
    },
    "type": "view-only-links"
  }
}
```

<h3 id="retrieve-a-view-only-link-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all nodes

<a id="opIdview_only_links_node_list"></a>

> Code samples

```bash
curl https://example.com/view_only_links/string/nodes/ \
  -H 'Accept: application/json'
```

`GET /view_only_links/{link_id}/nodes/`


The list of nodes which this view only link gives read-only access to.
#### Permissions
Only project administrators may retrieve the nodes of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
#### Returns
Returns a JSON object containing `data` and `links` keys.
The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="list-all-nodes-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|link_id|path|string|true|The unique identifier of the view only link.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": false,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2014-07-28T13:53:04.508000",
        "date_modified": "2017-03-03T05:00:31.512000",
        "description": "This is an independent replication as part of the Reproducibility Project: Psychology.",
        "fork": false,
        "node_license": null,
        "preprint": false,
        "public": true,
        "registration": false,
        "tags": [],
        "title": "Replication of WA Cunningham, JJ Van Bavel, IR Johnsen (2008, PS 19(2))"
      },
      "id": "bifc7",
      "links": {
        "html": "https://osf.io/bifc7/",
        "self": "https://api.osf.io/v2/nodes/bifc7/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/bifc7/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/comments/?filter%5Btarget%5D=bifc7",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/contributors/",
              "meta": {}
            }
          }
        },
        "draft_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/draft_registrations/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/files/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/identifiers/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/bifc7/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/logs/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/node_links/",
              "meta": {}
            }
          }
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/preprints/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/registrations/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/bifc7/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    },
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": false,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2012-10-31T18:50:46.111000",
        "date_modified": "2016-10-02T19:50:23.605000",
        "description": null,
        "fork": true,
        "node_license": {
          "copyright_holders": [
            ""
          ],
          "year": "2016"
        },
        "preprint": false,
        "public": true,
        "registration": false,
        "tags": [
          "anxiety",
          "EMG",
          "EEG",
          "motivation",
          "ERN"
        ],
        "title": "Replication of Hajcak &amp; Foti (2008, PS, Study 1)"
      },
      "id": "73pnd",
      "links": {
        "html": "https://osf.io/73pnd/",
        "self": "https://api.osf.io/v2/nodes/73pnd/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/73pnd/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/comments/?filter%5Btarget%5D=73pnd",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/contributors/",
              "meta": {}
            }
          }
        },
        "draft_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/draft_registrations/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/files/",
              "meta": {}
            }
          }
        },
        "forked_from": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/kxhz5/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/identifiers/",
              "meta": {}
            }
          }
        },
        "license": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e96a/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/73pnd/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/logs/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/node_links/",
              "meta": {}
            }
          }
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/preprints/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/registrations/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/73pnd/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    },
    {
      "attributes": {
        "category": "project",
        "collection": false,
        "current_user_can_comment": false,
        "current_user_permissions": [
          "read"
        ],
        "date_created": "2014-09-23T18:58:54.915000",
        "date_modified": "2016-08-31T18:16:25.056000",
        "description": null,
        "fork": false,
        "node_license": null,
        "preprint": false,
        "public": true,
        "registration": false,
        "tags": [],
        "title": "Replication of Winawer, Huk, & Boroditsky (Psychological Science, 2008)"
      },
      "id": "mjasz",
      "links": {
        "html": "https://osf.io/mjasz/",
        "self": "https://api.osf.io/v2/nodes/mjasz/"
      },
      "relationships": {
        "affiliated_institutions": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/institutions/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/mjasz/relationships/institutions/",
              "meta": {}
            }
          }
        },
        "children": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/children/",
              "meta": {}
            }
          }
        },
        "citation": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/citation/",
              "meta": {}
            }
          }
        },
        "comments": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/comments/?filter%5Btarget%5D=mjasz",
              "meta": {}
            }
          }
        },
        "contributors": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/contributors/",
              "meta": {}
            }
          }
        },
        "draft_registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/draft_registrations/",
              "meta": {}
            }
          }
        },
        "files": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/files/",
              "meta": {}
            }
          }
        },
        "forks": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/forks/",
              "meta": {}
            }
          }
        },
        "identifiers": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/identifiers/",
              "meta": {}
            }
          }
        },
        "linked_nodes": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/linked_nodes/",
              "meta": {}
            },
            "self": {
              "href": "https://api.osf.io/v2/nodes/mjasz/relationships/linked_nodes/",
              "meta": {}
            }
          }
        },
        "logs": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/logs/",
              "meta": {}
            }
          }
        },
        "node_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/node_links/",
              "meta": {}
            }
          }
        },
        "preprints": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/preprints/",
              "meta": {}
            }
          }
        },
        "registrations": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/registrations/",
              "meta": {}
            }
          }
        },
        "root": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/",
              "meta": {}
            }
          }
        },
        "template_node": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/3mqkb/",
              "meta": {}
            }
          }
        },
        "view_only_links": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/view_only_links/",
              "meta": {}
            }
          }
        },
        "wikis": {
          "links": {
            "related": {
              "href": "https://api.osf.io/v2/nodes/mjasz/wikis/",
              "meta": {}
            }
          }
        }
      },
      "type": "nodes"
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "meta": null,
    "next": null,
    "per_page": 10,
    "prev": null,
    "total": 3
  }
}
```

<h3 id="list-all-nodes-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="osf-apiv2-documentation-wikis">Wikis</h1>

## Retrieve a Wiki

<a id="opIdwiki_read"></a>

> Code samples

```bash
curl https://example.com/wikis/string/ \
  -H 'Accept: application/json'
```

`GET /wikis/{wiki_id}/`

Retrieves the details about a specific wiki.
A wiki is a collection of markdown text pages that can be used to describe the project or dataset of contained in the attached node.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested wiki, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

<h3 id="retrieve-a-wiki-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wiki_id|path|string|true|The unique identifier of the wiki.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "content_type": "text/markdown",
      "current_user_can_comment": true,
      "date_modified": "2017-02-16T15:45:57.671957",
      "extra": {
        "version": 47
      },
      "kind": "file",
      "materialized_path": "/zveyb",
      "name": "home",
      "path": "/zveyb",
      "size": 552
    },
    "id": "xu77p",
    "links": {
      "download": "https://api.osf.io/v2/wikis/zveyb/content/",
      "info": "https://api.osf.io/v2/wikis/zveyb/",
      "self": "https://api.osf.io/v2/wikis/zveyb/"
    },
    "relationships": {
      "comments": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/tvyxz/comments/?filter%5Btarget%5D=zveyb",
            "meta": {}
          }
        }
      },
      "node": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/nodes/tvyxz/",
            "meta": {}
          }
        }
      },
      "user": {
        "links": {
          "related": {
            "href": "https://api.osf.io/v2/users/5k3hq/",
            "meta": {}
          }
        }
      }
    },
    "type": "wikis"
  }
}
```

<h3 id="retrieve-a-wiki-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve the Content of a Wiki

<a id="opIdwiki_content"></a>

> Code samples

```bash
curl https://example.com/wikis/string/content/
```

`GET /wikis/{wiki_id}/content/`

Retrieves the plaintext content of a wiki in markdown format.
#### Returns
Returns `text/markdown` of the wiki content itself.
If the request is unsuccessful, plaintext with the error message will be displayed.

<h3 id="retrieve-the-content-of-a-wiki-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wiki_id|path|string|true|The unique identifier of the wiki.|

<h3 id="retrieve-the-content-of-a-wiki-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>
