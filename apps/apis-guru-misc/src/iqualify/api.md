<h1 id="iqualify-management-api">iQualify Management API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The iQualify API offers management responses for building
learning experiences using your iQualify instance data.

Once you’ve registered with iQualify, you can request an API access token by
navigating to the API access section of the "Account Settings" area.

Find out how to [Request your API access token](https://www.iqualify.com/help/connecting-iqualify-to-other-systems/api/how-to-access-and-manage-your-api-token)
on our Knowledge base.

All endpoints are only accessible via https and are located at
api.iqualify.com. For instance: you can find your current offerings by
accessing the following URL:

    https://api.iqualify.com/v1/offerings/current

Base URLs:

* <a href="https://api.iqualify.com/v1">https://api.iqualify.com/v1</a>

# Authentication

* API Key (Authorization)
    - Parameter Name: **Authorization**, in: header.

<h1 id="iqualify-management-api-api-info">API info</h1>

## List supported endpoints URLs

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /`

Responds with all supported endpoints URLs for v2 version.

> Example responses

> 200 Response

```json
{}
```

<h3 id="list-supported-endpoints-urls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Supported endpoints|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-course-mappings">Course mappings</h1>

## Find course mappings

> Code samples

```bash
curl https://example.com/course-mappings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /course-mappings`

Returns all course mappings for course offerings.

> Example responses

> 200 Response

```json
{
  "property1": "string",
  "property2": "string"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

<h3 id="find-course-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Course Mappings|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|

<h3 id="find-course-mappings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find course mappings by externalCourseId

> Code samples

```bash
curl https://example.com/course-mappings/externalcourse/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /course-mappings/externalcourse/{externalCourseId}`

Responds with course mapping details by externalCourseId.

<h3 id="find-course-mappings-by-externalcourseid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalCourseId|path|string|true|external course's id|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-course-mappings-by-externalcourseid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Course Mapping|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-course-mappings-by-externalcourseid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find course mappings by offeringId

> Code samples

```bash
curl https://example.com/course-mappings/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /course-mappings/{offeringId}`

Responds with course mapping details by offeringId.

<h3 id="find-course-mappings-by-offeringid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-course-mappings-by-offeringid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Course Mapping|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-course-mappings-by-offeringid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add course mapping

> Code samples

```bash
curl https://example.com/course-mappings/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /course-mappings/{offeringId}/{externalCourseId}`

Creates a mapping between the offering and the externalCourseId.

<h3 id="add-course-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|externalCourseId|path|string|true|external course's id|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="add-course-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Course Mapping|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="add-course-mapping-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Remove course mapping

> Code samples

```bash
curl https://example.com/course-mappings/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /course-mappings/{offeringId}/{externalCourseId}`

Removes the course mapping between the offering and the externalCourseId.

<h3 id="remove-course-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|externalCourseId|path|string|true|external course's id|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="remove-course-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Course Mapping|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="remove-course-mapping-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-courses">Courses</h1>

## Find courses

> Code samples

```bash
curl https://example.com/courses \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /courses`

Responds with all courses (draft and published.)

> Example responses

> 200 Response

```json
[
  {
    "coverImageUrl": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "id": "string",
    "metadata": {
      "learning_outcomes": [
        {
          "description": "string",
          "id": "string"
        }
      ]
    },
    "name": "string"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

<h3 id="find-courses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All courses (draft and published) in the organisation.|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|

<h3 id="find-courses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CourseResponse](#schemacourseresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find course by contentId

> Code samples

```bash
curl https://example.com/courses/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /courses/{contentId}`

Responds with a course matching the contentId.

<h3 id="find-course-by-contentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentId|path|string|true|The content Id|

> Example responses

> 200 Response

```json
{
  "coverImageUrl": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "metadata": {
    "category": "string",
    "learning_outcomes": [
      {
        "description": "string",
        "id": "string"
      }
    ],
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "tasksEnabled": true
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-course-by-contentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Course detail|[CourseMetaResponse](#schemacoursemetaresponse)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find activations for a contentId

> Code samples

```bash
curl https://example.com/courses/string/activations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /courses/{contentId}/activations`

Responds with all activations for the contentId provided.

<h3 id="find-activations-for-a-contentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentId|path|string|true|The content Id|

> Example responses

> 200 Response

```json
{
  "end": "string",
  "id": "string",
  "info": "string",
  "learnersCount": "string",
  "metadata": {
    "rootContentId": "string"
  },
  "name": "string",
  "start": "string"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-activations-for-a-contentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Activation list.|[ActivationResponse](#schemaactivationresponse)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find users who have access to the contentId provided

> Code samples

```bash
curl https://example.com/courses/string/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /courses/{contentId}/permissions`

Responds with users who have access to a specific course by contentId.

<h3 id="find-users-who-have-access-to-the-contentid-provided-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentId|path|string|true|The content Id|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "isBuilder": true,
  "isReviewer": true,
  "name": "string"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-users-who-have-access-to-the-contentid-provided-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of users who have access to the content ID provided.|[UserPermission](#schemauserpermission)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update course access

> Code samples

```bash
curl https://example.com/courses/string/permissions/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "isBuilder": true,
    "isReviewer": false
  }'
```

`POST /courses/{rootContentId}/permissions/{userEmail}`

Provide a user with access to a specific course by rootContentId.

> Body parameter

```json
{
  "isBuilder": true,
  "isReviewer": false
}
```

<h3 id="update-course-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rootContentId|path|string|true|The content Id|
|userEmail|path|string|true|The user email|
|body|body|object|true|none|
|» isBuilder|body|boolean|false|none|
|» isReviewer|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "contentId": "string"
}
```

> 400 Response

```json
{
  "details": "There are multiple permission with value true (isBuilder | isReviewer).",
  "name": "ObjectIsNotError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-course-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|user successfully added to the course with the specified permission.|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="update-course-access-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentId|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-course-metadata">Course metadata</h1>

## Update course category

> Code samples

```bash
curl https://example.com/courses/string/metadata/category \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "category": "string"
  }'
```

`PUT /courses/{contentId}/metadata/category`

Add or update course category in the metadata of a course.

> Body parameter

```json
{
  "category": "string"
}
```

<h3 id="update-course-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentId|path|string|true|The content Id|
|body|body|object|true|none|
|» category|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "coverImageUrl": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "metadata": {
    "category": "string",
    "learning_outcomes": [
      {
        "description": "string",
        "id": "string"
      }
    ],
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "tasksEnabled": true
}
```

> 400 Response

```json
{
  "details": "should NOT have additional properties",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-course-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Course detail|[CourseMetaResponse](#schemacoursemetaresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update course level

> Code samples

```bash
curl https://example.com/courses/string/metadata/level \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "level": "string"
  }'
```

`PUT /courses/{contentId}/metadata/level`

Add or update the course level in the metadata of a course.

> Body parameter

```json
{
  "level": "string"
}
```

<h3 id="update-course-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentId|path|string|true|The content Id|
|body|body|object|true|none|
|» level|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "coverImageUrl": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "metadata": {
    "category": "string",
    "learning_outcomes": [
      {
        "description": "string",
        "id": "string"
      }
    ],
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "tasksEnabled": true
}
```

> 400 Response

```json
{
  "details": "should NOT have additional properties",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-course-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Course detail|[CourseMetaResponse](#schemacoursemetaresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update course tags

> Code samples

```bash
curl https://example.com/courses/string/metadata/tags \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": [
      "string"
    ]
  }'
```

`PUT /courses/{contentId}/metadata/tags`

Add or update course tags in the metadata of a course.

> Body parameter

```json
{
  "tags": [
    "string"
  ]
}
```

<h3 id="update-course-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentId|path|string|true|The content Id|
|body|body|object|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "coverImageUrl": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "metadata": {
    "category": "string",
    "learning_outcomes": [
      {
        "description": "string",
        "id": "string"
      }
    ],
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "tasksEnabled": true
}
```

> 400 Response

```json
{
  "details": "should NOT have additional properties",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-course-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Course detail|[CourseMetaResponse](#schemacoursemetaresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update course topic

> Code samples

```bash
curl https://example.com/courses/string/metadata/topic \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "topic": "string"
  }'
```

`PUT /courses/{contentId}/metadata/topic`

Add or update the course topic in the metadata of a course.

> Body parameter

```json
{
  "topic": "string"
}
```

<h3 id="update-course-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentId|path|string|true|The content Id|
|body|body|object|true|none|
|» topic|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "coverImageUrl": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "metadata": {
    "category": "string",
    "learning_outcomes": [
      {
        "description": "string",
        "id": "string"
      }
    ],
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "tasksEnabled": true
}
```

> 400 Response

```json
{
  "details": "should NOT have additional properties",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-course-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Course detail|[CourseMetaResponse](#schemacoursemetaresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-offerings">Offerings</h1>

## Find current, past and future offerings

> Code samples

```bash
curl https://example.com/offerings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings`

Responds with all offerings for your organisation.

> Example responses

> 200 Response

```json
[
  {
    "contentId": "string",
    "coverImageUrl": "string",
    "currency": "string",
    "description": "string",
    "earlyCloseOffDate": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z",
    "enrollmentLimit": 0,
    "hasEarlyCloseOff": true,
    "id": "string",
    "identifier": "string",
    "isReadonly": true,
    "metadata": {
      "category": "string",
      "level": "string",
      "rootContentId": "string",
      "tags": [
        "string"
      ],
      "topic": "string"
    },
    "name": "string",
    "overview": "string",
    "price": 0,
    "start": "1970-01-01T00:00:00Z",
    "tasksEnabled": true,
    "trailerVideoUrl": "string",
    "useRelativeDates": false
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

<h3 id="find-current-past-and-future-offerings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|all offerings (current, past and future ones)|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|

<h3 id="find-current-past-and-future-offerings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OfferingMetadataResponse](#schemaofferingmetadataresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Create offering

> Code samples

```bash
curl https://example.com/offerings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "badge": {
      "badgeExpiry": {
        "expirationDate": "1970-01-01T00:00:00Z",
        "expires": true,
        "expiryType": "date",
        "timeframeAmount": 0,
        "timeframeUnit": "days"
      },
      "description": "string",
      "requiresApproval": true,
      "title": "string"
    },
    "contentId": "string",
    "createDefaultChannels": false,
    "description": "string",
    "earlyCloseOffDate": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z",
    "hasEarlyCloseOff": true,
    "identifier": "string",
    "isReadonly": true,
    "metadata": {
      "category": "string",
      "level": "string",
      "tags": [
        "string"
      ],
      "topic": "string"
    },
    "name": "string",
    "rootContentId": "string",
    "start": "1970-01-01T00:00:00Z",
    "trailerVideoUrl": "string",
    "useRelativeDates": false
  }'
```

`POST /offerings`

Creates a new offering.

> Body parameter

```json
{
  "badge": {
    "badgeExpiry": {
      "expirationDate": "1970-01-01T00:00:00Z",
      "expires": true,
      "expiryType": "date",
      "timeframeAmount": 0,
      "timeframeUnit": "days"
    },
    "description": "string",
    "requiresApproval": true,
    "title": "string"
  },
  "contentId": "string",
  "createDefaultChannels": false,
  "description": "string",
  "earlyCloseOffDate": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "hasEarlyCloseOff": true,
  "identifier": "string",
  "isReadonly": true,
  "metadata": {
    "category": "string",
    "level": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "rootContentId": "string",
  "start": "1970-01-01T00:00:00Z",
  "trailerVideoUrl": "string",
  "useRelativeDates": false
}
```

<h3 id="create-offering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OfferingRequired](#schemaofferingrequired)|true|none|
|» badge|body|object|false|none|
|» » badgeExpiry|body|[BadgeExpiry](#schemabadgeexpiry)|false|none|
|» » description|body|string|false|none|
|» » requiresApproval|body|boolean|false|none|
|» » title|body|string|false|none|
|» contentId|body|string|false|The identifier for a specific version of a course|
|» createDefaultChannels|body|boolean|false|none|
|» description|body|string|false|none|
|» earlyCloseOffDate|body|string(date-time)|false|none|
|» end|body|string(date-time)|false|none|
|» hasEarlyCloseOff|body|boolean|false|none|
|» identifier|body|string|false|none|
|» isReadonly|body|boolean|false|none|
|» metadata|body|object|false|none|
|» » category|body|string|false|none|
|» » level|body|string|false|none|
|» » tags|body|[string]|false|none|
|» » topic|body|string|false|none|
|» name|body|string|false|none|
|» rootContentId|body|string|false|Every time a course is republished it's assigned a new contentId. rootContentId is the first original contentId associated with a course.|
|» start|body|string(date-time)|true|none|
|» trailerVideoUrl|body|string|false|none|
|» useRelativeDates|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "contentId": "string",
  "coverImageUrl": "string",
  "currency": "string",
  "description": "string",
  "earlyCloseOffDate": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "enrollmentLimit": 0,
  "hasEarlyCloseOff": true,
  "id": "string",
  "identifier": "string",
  "isReadonly": true,
  "metadata": {
    "category": "string",
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "overview": "string",
  "price": 0,
  "start": "1970-01-01T00:00:00Z",
  "tasksEnabled": true,
  "trailerVideoUrl": "string",
  "useRelativeDates": false
}
```

> 400 Response

```json
{
  "details": "A cannot be B when C is D",
  "name": "IncompatibleParametersError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="create-offering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|offering created|[OfferingMetadataResponse](#schemaofferingmetadataresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find active offerings

> Code samples

```bash
curl https://example.com/offerings/current \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/current`

Responds with active offerings for your organisation.

> Example responses

> 200 Response

```json
[
  {
    "contentId": "string",
    "coverImageUrl": "string",
    "currency": "string",
    "description": "string",
    "earlyCloseOffDate": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z",
    "enrollmentLimit": 0,
    "hasEarlyCloseOff": true,
    "id": "string",
    "identifier": "string",
    "isReadonly": true,
    "metadata": {
      "category": "string",
      "level": "string",
      "rootContentId": "string",
      "tags": [
        "string"
      ],
      "topic": "string"
    },
    "name": "string",
    "overview": "string",
    "price": 0,
    "start": "1970-01-01T00:00:00Z",
    "tasksEnabled": true,
    "trailerVideoUrl": "string",
    "useRelativeDates": false
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

<h3 id="find-active-offerings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|current offerings|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|

<h3 id="find-active-offerings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OfferingMetadataResponse](#schemaofferingmetadataresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find scheduled offerings

> Code samples

```bash
curl https://example.com/offerings/future \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/future`

Responds with scheduled offerings for your organisation. Scheduled offerings have a start date after today's date (inclusive).

> Example responses

> 200 Response

```json
[
  {
    "contentId": "string",
    "coverImageUrl": "string",
    "currency": "string",
    "description": "string",
    "earlyCloseOffDate": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z",
    "enrollmentLimit": 0,
    "hasEarlyCloseOff": true,
    "id": "string",
    "identifier": "string",
    "isReadonly": true,
    "metadata": {
      "category": "string",
      "level": "string",
      "rootContentId": "string",
      "tags": [
        "string"
      ],
      "topic": "string"
    },
    "name": "string",
    "overview": "string",
    "price": 0,
    "start": "1970-01-01T00:00:00Z",
    "tasksEnabled": true,
    "trailerVideoUrl": "string",
    "useRelativeDates": false
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

<h3 id="find-scheduled-offerings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|future offerings|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|

<h3 id="find-scheduled-offerings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OfferingMetadataResponse](#schemaofferingmetadataresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find offerings where info field matches the specified textPattern

> Code samples

```bash
curl https://example.com/offerings/info/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/info/{textPattern}`

Find offerings where info field matches the specified text pattern.

<h3 id="find-offerings-where-info-field-matches-the-specified-textpattern-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|textPattern|path|string|true|Text pattern to search for (minimum of 3 characters length).|

> Example responses

> 200 Response

```json
[
  {
    "contentId": "string",
    "end": "1970-01-01T00:00:00Z",
    "id": "string",
    "info": "string",
    "learnersCount": 0,
    "metadata": {
      "rootContentId": "string"
    },
    "name": "string",
    "start": "1970-01-01T00:00:00Z"
  }
]
```

> 400 Response

```json
{
  "details": "Text pattern must be a minimum of 3 characters in length.",
  "name": "TextPatternError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-offerings-where-info-field-matches-the-specified-textpattern-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Offerings|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-offerings-where-info-field-matches-the-specified-textpattern-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PortfolioActivations](#schemaportfolioactivations)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find past offerings

> Code samples

```bash
curl https://example.com/offerings/past \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/past`

Responds with past offerings for your organisation.

> Example responses

> 200 Response

```json
[
  {
    "contentId": "string",
    "coverImageUrl": "string",
    "currency": "string",
    "description": "string",
    "earlyCloseOffDate": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z",
    "enrollmentLimit": 0,
    "hasEarlyCloseOff": true,
    "id": "string",
    "identifier": "string",
    "isReadonly": true,
    "metadata": {
      "category": "string",
      "level": "string",
      "rootContentId": "string",
      "tags": [
        "string"
      ],
      "topic": "string"
    },
    "name": "string",
    "overview": "string",
    "price": 0,
    "start": "1970-01-01T00:00:00Z",
    "tasksEnabled": true,
    "trailerVideoUrl": "string",
    "useRelativeDates": false
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

<h3 id="find-past-offerings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|past offerings|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|

<h3 id="find-past-offerings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OfferingMetadataResponse](#schemaofferingmetadataresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Offerings summary

> Code samples

```bash
curl https://example.com/offerings/summary \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/summary`

Responds with a summary of all offerings for your organisation.

<h3 id="offerings-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$top|query|string|false|Returns only the first n results.|
|$orderby|query|string|false|Sorts the results.|
|$filter|query|string|false|Filters the results, based on a Boolean condition.|

> Example responses

> 200 Response

```json
[
  {
    "contentId": "string",
    "end": "1970-01-01T00:00:00Z",
    "id": "string",
    "info": "string",
    "learnersCount": 0,
    "metadata": {
      "rootContentId": "string"
    },
    "name": "string",
    "start": "1970-01-01T00:00:00Z"
  }
]
```

> 400 Response

```json
{
  "details": "invalid $filter parameter.",
  "name": "ApiValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

<h3 id="offerings-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|all offerings.|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|

<h3 id="offerings-summary-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PortfolioActivations](#schemaportfolioactivations)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find offering by ID

> Code samples

```bash
curl https://example.com/offerings/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}`

Responds with an offering matching the offeringId.

<h3 id="find-offering-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
{
  "contentId": "string",
  "coverImageUrl": "string",
  "currency": "string",
  "description": "string",
  "earlyCloseOffDate": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "enrollmentLimit": 0,
  "hasEarlyCloseOff": true,
  "id": "string",
  "identifier": "string",
  "isReadonly": true,
  "metadata": {
    "category": "string",
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "overview": "string",
  "price": 0,
  "start": "1970-01-01T00:00:00Z",
  "tasksEnabled": true,
  "trailerVideoUrl": "string",
  "useRelativeDates": false
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-offering-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|offering|[OfferingMetadataResponse](#schemaofferingmetadataresponse)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update offering

> Code samples

```bash
curl https://example.com/offerings/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "badge": {
      "badgeExpiry": {
        "expirationDate": "1970-01-01T00:00:00Z",
        "expires": true,
        "expiryType": "date",
        "timeframeAmount": 0,
        "timeframeUnit": "days"
      },
      "description": "string",
      "requiresApproval": true,
      "title": "string"
    },
    "contentId": "string",
    "description": "string",
    "earlyCloseOffDate": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z",
    "hasEarlyCloseOff": true,
    "identifier": "string",
    "isReadonly": true,
    "metadata": {
      "category": "string",
      "level": "string",
      "tags": [
        "string"
      ],
      "topic": "string"
    },
    "name": "string",
    "overview": "string",
    "rootContentId": "string",
    "start": "1970-01-01T00:00:00Z",
    "trailerVideoUrl": "string",
    "useRelativeDates": true
  }'
```

`PATCH /offerings/{offeringId}`

Updates the offering.

> Body parameter

```json
{
  "badge": {
    "badgeExpiry": {
      "expirationDate": "1970-01-01T00:00:00Z",
      "expires": true,
      "expiryType": "date",
      "timeframeAmount": 0,
      "timeframeUnit": "days"
    },
    "description": "string",
    "requiresApproval": true,
    "title": "string"
  },
  "contentId": "string",
  "description": "string",
  "earlyCloseOffDate": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "hasEarlyCloseOff": true,
  "identifier": "string",
  "isReadonly": true,
  "metadata": {
    "category": "string",
    "level": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "overview": "string",
  "rootContentId": "string",
  "start": "1970-01-01T00:00:00Z",
  "trailerVideoUrl": "string",
  "useRelativeDates": true
}
```

<h3 id="update-offering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|body|body|[Offering](#schemaoffering)|true|none|
|» badge|body|object|false|none|
|» » badgeExpiry|body|[BadgeExpiry](#schemabadgeexpiry)|false|none|
|» » description|body|string|false|none|
|» » requiresApproval|body|boolean|false|none|
|» » title|body|string|false|none|
|» contentId|body|string|false|The identifier for a specific version of a course|
|» description|body|string|false|none|
|» earlyCloseOffDate|body|string(date-time)|false|none|
|» end|body|string(date-time)|false|none|
|» hasEarlyCloseOff|body|boolean|false|none|
|» identifier|body|string|false|none|
|» isReadonly|body|boolean|false|none|
|» metadata|body|object|false|none|
|» » category|body|string|false|none|
|» » level|body|string|false|none|
|» » tags|body|[string]|false|none|
|» » topic|body|string|false|none|
|» name|body|string|false|none|
|» overview|body|string|false|none|
|» rootContentId|body|string|false|Every time a course is republished it is assigned a new contentId. rootContentId is the first original contentId associated with a course.|
|» start|body|string(date-time)|false|none|
|» trailerVideoUrl|body|string|false|none|
|» useRelativeDates|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "contentId": "string",
  "coverImageUrl": "string",
  "currency": "string",
  "description": "string",
  "earlyCloseOffDate": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "enrollmentLimit": 0,
  "hasEarlyCloseOff": true,
  "id": "string",
  "identifier": "string",
  "isReadonly": true,
  "metadata": {
    "category": "string",
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "overview": "string",
  "price": 0,
  "start": "1970-01-01T00:00:00Z",
  "tasksEnabled": true,
  "trailerVideoUrl": "string",
  "useRelativeDates": false
}
```

> 400 Response

```json
{
  "details": "A cannot be B when C is D",
  "name": "IncompatibleParametersError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-offering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|offering updated|[OfferingMetadataResponse](#schemaofferingmetadataresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-assessment-management">Assessment management</h1>

## Find offering's activities

> Code samples

```bash
curl https://example.com/offerings/string/activities/openresponse \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/activities/openresponse`

Responds with the activities in a specific offering.

<h3 id="find-offerings-activities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
[
  {
    "activityId": "string",
    "time": 0,
    "title": "string"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-offerings-activities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|offering's learners|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-offerings-activities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OfferingActivitiesResponse](#schemaofferingactivitiesresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find offering's assessments

> Code samples

```bash
curl https://example.com/offerings/string/assessments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/assessments`

Responds with all assessments in an offering matching the offeringId.

<h3 id="find-offerings-assessments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
[
  {
    "content": "string",
    "documents": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "filename": "string",
        "id": "string",
        "mimetype": "string",
        "size": 0,
        "url": "string"
      }
    ],
    "dueDate": "1970-01-01T00:00:00Z",
    "durationMinutes": 0,
    "filename": "string",
    "hidden": false,
    "id": "string",
    "markNumber": "string",
    "markType": "string",
    "maxAttempts": 0,
    "openDate": "1970-01-01T00:00:00Z",
    "pid": "string",
    "points": "string",
    "themes": [
      {
        "filter": "string",
        "numberOfQuestions": "string"
      }
    ],
    "title": "string",
    "totalQuestions": 0,
    "totalThemes": 0,
    "type": "string"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-offerings-assessments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|offering's assessments|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-offerings-assessments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssessmentResponse](#schemaassessmentresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update assessment details

> Code samples

```bash
curl https://example.com/offerings/string/assessments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "content": "string",
    "dueDate": "1970-01-01T00:00:00Z",
    "markNumber": "string",
    "markType": "string",
    "openDate": "1970-01-01T00:00:00Z"
  }'
```

`PATCH /offerings/{offeringId}/assessments/{assessmentId}`

Updates the assessment details for a specified assessment in an offering.

> Body parameter

```json
{
  "content": "string",
  "dueDate": "1970-01-01T00:00:00Z",
  "markNumber": "string",
  "markType": "string",
  "openDate": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-assessment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|assessmentId|path|string|true|assessment's id|
|body|body|[Assessment](#schemaassessment)|true|none|
|» content|body|string|false|none|
|» dueDate|body|string(date-time)|false|none|
|» markNumber|body|string|false|none|
|» markType|body|string|false|none|
|» openDate|body|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "documents": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "filename": "string",
      "id": "string",
      "mimetype": "string",
      "size": 0,
      "url": "string"
    }
  ],
  "dueDate": "1970-01-01T00:00:00Z",
  "durationMinutes": 0,
  "filename": "string",
  "hidden": false,
  "id": "string",
  "markNumber": "string",
  "markType": "string",
  "maxAttempts": 0,
  "openDate": "1970-01-01T00:00:00Z",
  "pid": "string",
  "points": "string",
  "themes": [
    {
      "filter": "string",
      "numberOfQuestions": "string"
    }
  ],
  "title": "string",
  "totalQuestions": 0,
  "totalThemes": 0,
  "type": "string"
}
```

> 400 Response

```json
{
  "details": "PARAMETER_NAME PARAMETER_VALUE should match format \"example\"",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-assessment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|assessment successfully updated|[AssessmentResponse](#schemaassessmentresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Remove assessment document

> Code samples

```bash
curl https://example.com/offerings/string/assessments/string/documents/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /offerings/{offeringId}/assessments/{assessmentId}/documents/{documentId}`

Removes the assessment document file for a specified assessment in an offering.

<h3 id="remove-assessment-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|assessmentId|path|string|true|assessment's id|
|documentId|path|string|true|documents's id|

> Example responses

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="remove-assessment-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|assessment document successfully removed|None|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update the due dates for a learner's quiz attempt

> Code samples

```bash
curl https://example.com/offerings/string/assessments/string/user%40example.com \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "dueDate": "1970-01-01T00:00:00Z"
  }'
```

`PATCH /offerings/{offeringId}/assessments/{assessmentId}/{userEmail}`

Updates the due dates for a learner's quiz attempt specified by the assessmentId.

> Body parameter

```json
{
  "dueDate": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-the-due-dates-for-a-learners-quiz-attempt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|assessmentId|path|string|true|assessment's id|
|userEmail|path|string(email)|true|user's email|
|body|body|object|true|none|
|» dueDate|body|string(date-time)|false|none|

> Example responses

> 400 Response

```json
{
  "details": "The specified parameter file.mimetype (image mimetype) has an invalid value \\'text/plain\\'.",
  "name": "InvalidParameterError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-the-due-dates-for-a-learners-quiz-attempt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully updated assessment due date.|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find learners with assessments pending x days before due date within the specified offeringId

> Code samples

```bash
curl https://example.com/offerings/string/learners/pending-submission \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/learners/pending-submission`

Responds with learners who have one or more assessments due x days before the due date, with each assessment that is due, where x = the number of days specified in the request. The default is 3 days.

<h3 id="find-learners-with-assessments-pending-x-days-before-due-date-within-the-specified-offeringid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|days|query|string|false|days to assessment due date. Default is 3 days|

> Example responses

> 200 Response

```json
[
  {
    "content": "string",
    "documents": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "filename": "string",
        "id": "string",
        "mimetype": "string",
        "size": 0,
        "url": "string"
      }
    ],
    "dueDate": "1970-01-01T00:00:00Z",
    "durationMinutes": 0,
    "filename": "string",
    "hidden": false,
    "id": "string",
    "markNumber": "string",
    "markType": "string",
    "maxAttempts": 0,
    "offeringId": "string",
    "offeringName": "string",
    "openDate": "1970-01-01T00:00:00Z",
    "pid": "string",
    "points": "string",
    "themes": [
      {
        "filter": "string",
        "numberOfQuestions": "string"
      }
    ],
    "title": "string",
    "totalQuestions": 0,
    "totalThemes": 0,
    "type": "string",
    "users": [
      {
        "email": "user@example.com",
        "firstName": "string",
        "lastName": "string",
        "metadata": {
          "tags": [
            "string"
          ]
        },
        "personId": "string",
        "profile": {
          "displayName": "string"
        },
        "sendInvite": true
      }
    ]
  }
]
```

> 400 Response

```json
{
  "details": "[PARAMETER_NAME] PARAMETER_VALUE should be string",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-learners-with-assessments-pending-x-days-before-due-date-within-the-specified-offeringid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|offering's learners|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-learners-with-assessments-pending-x-days-before-due-date-within-the-specified-offeringid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssessmentPendingSubmission](#schemaassessmentpendingsubmission)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Reset user's assessment to draft state

> Code samples

```bash
curl https://example.com/offerings/string/users/user%40example.com/assessments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /offerings/{offeringId}/users/{userEmail}/assessments/{assessmentId}`

Resets the user's submitted assessment to a draft state.

<h3 id="reset-users-assessment-to-draft-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|userEmail|path|string(email)|true|user's email|
|assessmentId|path|string|true|assessment's id|

> Example responses

> 400 Response

```json
{
  "details": "The user alex.doe@test.te has not submitted assessment as1.",
  "name": "AssessmentNotSubmittedError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="reset-users-assessment-to-draft-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|User's assessment successfully moved to draft state.|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find learner's open response assessment submissions

> Code samples

```bash
curl https://example.com/offerings/string/users/user%40example.com/submissions/open-response \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/users/{userEmail}/submissions/open-response`

Responds with open response assessment submissions by a learner in an offering.

<h3 id="find-learners-open-response-assessment-submissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|userEmail|path|string(email)|true|user's email|

> Example responses

> 200 Response

```json
[
  {
    "files": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "filename": "string",
        "id": "string",
        "mimetype": "string",
        "size": 0,
        "url": "string"
      }
    ],
    "marks": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "feedback": "string",
        "id": "string",
        "mark": "string",
        "markFeedback": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "feedback": "string",
            "feedbackBy": "string",
            "id": "string",
            "mark": "string",
            "markerId": "string"
          }
        ],
        "markedBy": "string",
        "markerId": "string"
      }
    ],
    "status": "string",
    "submittedAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
]
```

> 400 Response

```json
{
  "details": "PARAMETER_NAME PARAMETER_VALUE should match format \"email\".",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-learners-open-response-assessment-submissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|user open response submission and mark details|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-learners-open-response-assessment-submissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Assignments](#schemaassignments)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-assessment-data">Assessment data</h1>

## Find open response activity attempts

> Code samples

```bash
curl https://example.com/offerings/string/analytics/activities/responses \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/activities/responses`

Responds with all learner activity attempts for open response activities in an offering matching the offeringId.

<h3 id="find-open-response-activity-attempts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
[
  {
    "activityId": "string",
    "activityType": "string",
    "feedback": {
      "facilitatorEmail": "string",
      "text": "string"
    },
    "learnerEmail": "string",
    "offeringId": "string",
    "responseText": "string",
    "uploadedFiles": {
      "filename": "string",
      "mimetype": "string",
      "size": "string",
      "url": "string"
    }
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-open-response-activity-attempts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Offering activity attempt open responses|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-open-response-activity-attempts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ActivityAttemptOpenResponse](#schemaactivityattemptopenresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find assessment marks

> Code samples

```bash
curl https://example.com/offerings/string/analytics/marks/assignments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/marks/assignments`

Responds with all learner assessment marks in an offering matching the offeringId.

<h3 id="find-assessment-marks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
[
  {
    "assessmentId": "string",
    "assessmentItemDetails": "string",
    "assessmentItemName": "string",
    "courseName": "string",
    "learnerEmail": "string",
    "learnerFirstName": "string",
    "learnerLastName": "string",
    "learnerPersonId": "string",
    "mark": "string",
    "markFeedback": "string",
    "markedBy": "string",
    "markedByEvaluator": true,
    "markedByFacilitator": true,
    "markedByMarker": true,
    "markedDateTime": "1970-01-01T00:00:00Z",
    "submissionDateTime": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-assessment-marks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Assignments marks|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-assessment-marks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssignmentMarkResponse](#schemaassignmentmarkresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find quiz marks

> Code samples

```bash
curl https://example.com/offerings/string/analytics/marks/quizzes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/marks/quizzes`

Responds with all learner quiz marks in an offering matching the offeringId.

<h3 id="find-quiz-marks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
[
  {
    "attempts": 0,
    "lastAttemptAt": "1970-01-01T00:00:00Z",
    "learnerEmail": "string",
    "learnerFullname": "string",
    "learnerPersonId": "string",
    "mark": "string",
    "quizId": "string",
    "quizTitle": "string"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-quiz-marks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Quizzes marks|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-quiz-marks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[QuizMarkResponse](#schemaquizmarkresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find submissions to assessments, including marks if any

> Code samples

```bash
curl https://example.com/offerings/string/analytics/submissions/assignments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/submissions/assignments`

Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.

<h3 id="find-submissions-to-assessments-including-marks-if-any-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
[
  {
    "assessmentId": "string",
    "assessmentItemDetails": "string",
    "assessmentItemName": "string",
    "courseName": "string",
    "learnerEmail": "string",
    "learnerFirstName": "string",
    "learnerLastName": "string",
    "learnerPersonId": "string",
    "mark": "string",
    "markFeedback": "string",
    "markedBy": "string",
    "markedByEvaluator": true,
    "markedByFacilitator": true,
    "markedByMarker": true,
    "markedDateTime": "1970-01-01T00:00:00Z",
    "submissionDateTime": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-submissions-to-assessments-including-marks-if-any-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Assignments submissions|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-submissions-to-assessments-including-marks-if-any-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssignmentMarkResponse](#schemaassignmentmarkresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find submissions to a specified open response assessment, including marks if any

> Code samples

```bash
curl https://example.com/offerings/string/analytics/submissions/open-response/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/submissions/open-response/{assessmentId}`

Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.

<h3 id="find-submissions-to-a-specified-open-response-assessment-including-marks-if-any-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|assessmentId|path|string|true|assessment's id|

> Example responses

> 200 Response

```json
[
  {
    "assessmentId": "string",
    "assessmentItemDetails": "string",
    "assessmentItemName": "string",
    "courseName": "string",
    "files": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "filename": "string",
        "id": "string",
        "mimetype": "string",
        "size": 0,
        "url": "string"
      }
    ],
    "html": "string",
    "learnerEmail": "string",
    "learnerFirstName": "string",
    "learnerLastName": "string",
    "learnerPersonId": "string",
    "marks": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "feedback": "string",
        "id": "string",
        "mark": "string",
        "markFeedback": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "feedback": "string",
            "feedbackBy": "string",
            "id": "string",
            "mark": "string",
            "markerId": "string"
          }
        ],
        "markedBy": "string",
        "markerId": "string"
      }
    ],
    "status": "string",
    "submissionDateTime": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-submissions-to-a-specified-open-response-assessment-including-marks-if-any-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Responds with assignment submissions for the specified assignment.|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-submissions-to-a-specified-open-response-assessment-including-marks-if-any-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SubmissionMarkResponse](#schemasubmissionmarkresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find a learner's submission to a specified assessment, including marks if any

> Code samples

```bash
curl https://example.com/offerings/string/analytics/submissions/user%40example.com/assignments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/submissions/{userEmail}/assignments/{assessmentId}`

Responds with the learner's assessment submission and any marks for the submission.

<h3 id="find-a-learners-submission-to-a-specified-assessment-including-marks-if-any-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|userEmail|path|string(email)|true|user's email|
|assessmentId|path|string|true|assessment's id|

> Example responses

> 200 Response

```json
[
  {
    "assessmentId": "string",
    "assessmentItemDetails": "string",
    "assessmentItemName": "string",
    "courseName": "string",
    "files": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "filename": "string",
        "id": "string",
        "mimetype": "string",
        "size": 0,
        "url": "string"
      }
    ],
    "html": "string",
    "learnerEmail": "string",
    "learnerFirstName": "string",
    "learnerLastName": "string",
    "learnerPersonId": "string",
    "marks": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "feedback": "string",
        "id": "string",
        "mark": "string",
        "markFeedback": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "feedback": "string",
            "feedbackBy": "string",
            "id": "string",
            "mark": "string",
            "markerId": "string"
          }
        ],
        "markedBy": "string",
        "markerId": "string"
      }
    ],
    "status": "string",
    "submissionDateTime": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-a-learners-submission-to-a-specified-assessment-including-marks-if-any-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Responds with the learner's assessment submission and any marks for the submission.|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-a-learners-submission-to-a-specified-assessment-including-marks-if-any-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SubmissionMarkResponse](#schemasubmissionmarkresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-channels">Channels</h1>

## Find comments

> Code samples

```bash
curl https://example.com/offerings/string/analytics/channels/string/comments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/channels/{channelId}/comments`

Responds with a list of comments made in any posts in a specified channel, within an offering.

<h3 id="find-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|channelId|path|string|true|channel's id|

> Example responses

> 200 Response

```json
[
  {
    "content": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "email": "string",
    "id": "string",
    "isFacilitatorPost": true,
    "moderation": {
      "isMuted": true,
      "moderator": {
        "avatarUrl": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      },
      "reason": "string"
    },
    "parentCommentId": "string",
    "postId": "string"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-comments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Comment](#schemacomment)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find posts

> Code samples

```bash
curl https://example.com/offerings/string/analytics/channels/string/posts \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/channels/{channelId}/posts`

Responds with a list of posts made in a specified channel, within an offering.

<h3 id="find-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|channelId|path|string|true|channel's id|

> Example responses

> 200 Response

```json
[
  {
    "attachments": [
      {
        "id": "string",
        "mimetype": "string",
        "size": 0,
        "url": "string"
      }
    ],
    "content": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "email": "string",
    "id": "string",
    "isFacilitatorPost": true,
    "moderation": {
      "isMuted": true,
      "moderator": {
        "avatarUrl": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      },
      "reason": "string"
    },
    "title": "string"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-posts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[httpPost](#schemahttppost)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find replies

> Code samples

```bash
curl https://example.com/offerings/string/analytics/channels/string/replies \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/channels/{channelId}/replies`

Responds with a list of replies to comments in any posts in a specified channel, within an offering.

<h3 id="find-replies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|channelId|path|string|true|channel's id|

> Example responses

> 200 Response

```json
[
  {
    "content": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "email": "string",
    "id": "string",
    "isFacilitatorPost": true,
    "moderation": {
      "isMuted": true,
      "moderator": {
        "avatarUrl": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      },
      "reason": "string"
    },
    "parentCommentId": "string",
    "postId": "string"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-replies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-replies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Comment](#schemacomment)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find channels

> Code samples

```bash
curl https://example.com/offerings/string/channels \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/channels`

Responds with a list of channels in an offering.

<h3 id="find-channels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "isBroadcastOnly": false,
    "title": "string"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Succesful response|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-channels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ChannelResponse](#schemachannelresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add channel

> Code samples

```bash
curl https://example.com/offerings/string/channels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "isBroadcastOnly": false,
    "title": "string"
  }'
```

`POST /offerings/{offeringId}/channels`

Adds new channel to the specified offering.

> Body parameter

```json
{
  "isBroadcastOnly": false,
  "title": "string"
}
```

<h3 id="add-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|body|body|[ChannelRequired](#schemachannelrequired)|true|none|
|» isBroadcastOnly|body|boolean|false|none|
|» title|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "isBroadcastOnly": false,
  "title": "string"
}
```

> 400 Response

```json
{
  "details": "[PARAMETER_NAME] PARAMETER_VALUE should NOT be shorter than 3 characters",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="add-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|channel successfully added|[ChannelResponse](#schemachannelresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update channel

> Code samples

```bash
curl https://example.com/offerings/string/channels/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "group": {
      "autoAssign": true
    },
    "groupDiscussion": true,
    "isBroadcastOnly": true,
    "privateSupport": true,
    "title": "string"
  }'
```

`PATCH /offerings/{offeringId}/channels/{channelId}`

Updates a channel in an offering.

> Body parameter

```json
{
  "group": {
    "autoAssign": true
  },
  "groupDiscussion": true,
  "isBroadcastOnly": true,
  "privateSupport": true,
  "title": "string"
}
```

<h3 id="update-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|channelId|path|string|true|channel's id|
|body|body|[Channel](#schemachannel)|true|none|
|» group|body|object|false|none|
|» » autoAssign|body|boolean|false|none|
|» groupDiscussion|body|boolean|false|none|
|» isBroadcastOnly|body|boolean|false|none|
|» privateSupport|body|boolean|false|none|
|» title|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "isBroadcastOnly": false,
  "title": "string"
}
```

> 400 Response

```json
{
  "details": "[PARAMETER_NAME] PARAMETER_VALUE should NOT be shorter than 3 characters",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|channel successfully updated|[ChannelResponse](#schemachannelresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find learners in a group channel

> Code samples

```bash
curl https://example.com/offerings/string/channels/string/learners \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/channels/{channelId}/learners`

Finds all learners in a specified group channel.

<h3 id="find-learners-in-a-group-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|channelId|path|string|true|channel's id|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "isBroadcastOnly": false,
  "title": "string"
}
```

> 400 Response

```json
{
  "details": "Channel channel1 is not a group discussion channel.",
  "name": "InvalidGroupChannelError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-learners-in-a-group-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|channel data|[ChannelResponse](#schemachannelresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add learners to a group channel

> Code samples

```bash
curl https://example.com/offerings/string/channels/string/learners \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "string"
  }'
```

`POST /offerings/{offeringId}/channels/{channelId}/learners`

Adds a learner to a specified group channel.

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="add-learners-to-a-group-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|channelId|path|string|true|channel's id|
|body|body|object|true|none|
|» email|body|string|false|none|

> Example responses

> 400 Response

```json
{
  "details": "Channel channel1 is not a group discussion channel.",
  "name": "InvalidGroupChannelError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="add-learners-to-a-group-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Learner successfully added to the channel.|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Remove learners from a group channel

> Code samples

```bash
curl https://example.com/offerings/string/channels/string/learners \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "string"
  }'
```

`DELETE /offerings/{offeringId}/channels/{channelId}/learners`

Removes a learner from the specified group channel.

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="remove-learners-from-a-group-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|channelId|path|string|true|channel's id|
|body|body|object|true|none|
|» email|body|string|false|none|

> Example responses

> 400 Response

```json
{
  "details": "Channel channel1 is not a group discussion channel.",
  "name": "InvalidGroupChannelError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="remove-learners-from-a-group-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Learner successfully removed from the channel.|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-learner-activity">Learner activity</h1>

## Find learner progress in a specified offering

> Code samples

```bash
curl https://example.com/offerings/string/analytics/learners-progress \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/learners-progress`

Responds with all learner progress in the offering.

<h3 id="find-learner-progress-in-a-specified-offering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
[
  {
    "completion": "string",
    "courseId": "string",
    "email": "string",
    "firstName": "string",
    "lastLoggedInAt": "1970-01-01T00:00:00Z",
    "lastName": "string",
    "personId": "string"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-learner-progress-in-a-specified-offering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Learners progress|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-learner-progress-in-a-specified-offering-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LearnerProgressResponse](#schemalearnerprogressresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find shared social notes in an offering

> Code samples

```bash
curl https://example.com/offerings/string/analytics/social-notes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/social-notes`

Responds with all shared social notes in a specified offering.

<h3 id="find-shared-social-notes-in-an-offering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
[
  {
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "pageId": "string",
    "personId": "string",
    "social-note-content": "string",
    "social-note-paragraphId": "string",
    "userId": "string"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-shared-social-notes-in-an-offering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Offering social notes|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-shared-social-notes-in-an-offering-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SocialNotesResponse](#schemasocialnotesresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find unit reactions

> Code samples

```bash
curl https://example.com/offerings/string/analytics/unit-reactions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/unit-reactions`

Responds with user reactions to units in a specified offering.

<h3 id="find-unit-reactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
[
  {
    "feedback": {
      "thumbs-down": 0,
      "thumbs-up": 0
    },
    "pageId": true
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-unit-reactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Unit Reactions|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-unit-reactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UnitReactionsAnalyticsResponse](#schemaunitreactionsanalyticsresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find learner progress in all offerings

> Code samples

```bash
curl https://example.com/users/all/progress \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/all/progress`

Responds with all learners' progress in all offerings.

<h3 id="find-learner-progress-in-all-offerings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$top|query|string|false|Returns only the first n results.|
|$orderby|query|string|false|Sorts the results.|
|$filter|query|string|false|Filters the results, based on a Boolean condition.|

> Example responses

> 200 Response

```json
{
  "data": {
    "progress": [
      {
        "email": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "offerings": [
          {
            "completion": "string",
            "id": "string"
          }
        ],
        "personId": "string"
      }
    ]
  },
  "top": 0
}
```

> 400 Response

```json
{
  "details": "invalid $filter parameter.",
  "name": "ApiValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

<h3 id="find-learner-progress-in-all-offerings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Learners progress|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|

<h3 id="find-learner-progress-in-all-offerings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» progress|[[LearnerResponse](#schemalearnerresponse)]|false|none|none|
|top|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find learner's progress in a specified offering

> Code samples

```bash
curl https://example.com/users/user%40example.com/offerings/string/progress \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{userEmail}/offerings/{offeringId}/progress`

Responds with the learner's progress in a specified offering.

<h3 id="find-learners-progress-in-a-specified-offering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userEmail|path|string(email)|true|user's email|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
{
  "completion": "string",
  "email": "string",
  "firstName": "string",
  "id": "string",
  "lastName": "string"
}
```

> 400 Response

```json
{
  "details": "PARAMETER_NAME PARAMETER_VALUE should match format \"email\".",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-learners-progress-in-a-specified-offering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|user's offerings|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-learners-progress-in-a-specified-offering-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion|string|false|none|none|
|email|string|false|none|none|
|firstName|string|false|none|none|
|id|string|false|none|none|
|lastName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find learner's progress in offerings

> Code samples

```bash
curl https://example.com/users/user%40example.com/progress \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{userEmail}/progress`

Responds with the specified learner's progress in all offerings.

<h3 id="find-learners-progress-in-offerings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userEmail|path|string(email)|true|user's email|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "offerings": [
    {
      "completion": "string",
      "id": "string"
    }
  ],
  "personId": "string"
}
```

> 400 Response

```json
{
  "details": "PARAMETER_NAME PARAMETER_VALUE should match format \"email\".",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-learners-progress-in-offerings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Learner Progress|[LearnerResponse](#schemalearnerresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-pulses">Pulses</h1>

## Find all pulse IDs in the specified offering

> Code samples

```bash
curl https://example.com/offerings/string/analytics/pulses \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/pulses`

Responds with the IDs of all pulses that learners have responded to in a specified offering.

<h3 id="find-all-pulse-ids-in-the-specified-offering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-all-pulse-ids-in-the-specified-offering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pulses' ids|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-all-pulse-ids-in-the-specified-offering-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find pulses by offeringId

> Code samples

```bash
curl https://example.com/offerings/string/analytics/pulses/responses \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/pulses/responses`

Responds with pulse's responses in an offering matching the offeringId.

<h3 id="find-pulses-by-offeringid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|pulseType|query|string|false|Filter pulse responses by type.|
|responseTime|query|string \| [string]|false|Filter pulse responses by responseTime. Lower then (`lt`), lower then or equal (`lte`), greater then (`gt`) and greater then or equal (`gte`) operators are available. Example of filtering by time range __gte__2017-03-14T07:30:00Z__|

#### Enumerated Values

|Parameter|Value|
|---|---|
|pulseType|submit_text|
|pulseType|MCQ|
|pulseType|spatial_triangular|
|pulseType|spatial_planar|
|pulseType|spatial_linear|

> Example responses

> 200 Response

```json
[
  {
    "learnerFirstName": "string",
    "learnerId": "string",
    "learnerLastName": "string",
    "pulseBaseId": "string",
    "pulseInstanceId": "string",
    "pulseQuestion": "string",
    "pulseRunDurationMinutes": 0,
    "pulseRunStart": "1970-01-01T00:00:00Z",
    "pulseType": "string",
    "response": {
      "multiChoiceAnswer": [
        {
          "option": "string",
          "value": true
        }
      ],
      "spatialAnswer": [
        {
          "option": "string",
          "value": 0
        }
      ],
      "textAnswer": "string"
    },
    "responseTime": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-pulses-by-offeringid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All pulses' responses|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-pulses-by-offeringid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PulseResponse](#schemapulseresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find pulses by offeringId and pulseId

> Code samples

```bash
curl https://example.com/offerings/string/analytics/pulses/string/responses \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/analytics/pulses/{pulseId}/responses`

Responds with pulse's responses, matching the pulseId, in an offering matching the offeringId.

<h3 id="find-pulses-by-offeringid-and-pulseid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|pulseId|path|string|true|pulse's base id|

> Example responses

> 200 Response

```json
[
  {
    "learnerFirstName": "string",
    "learnerId": "string",
    "learnerLastName": "string",
    "pulseBaseId": "string",
    "pulseInstanceId": "string",
    "pulseQuestion": "string",
    "pulseRunDurationMinutes": 0,
    "pulseRunStart": "1970-01-01T00:00:00Z",
    "pulseType": "string",
    "response": {
      "multiChoiceAnswer": [
        {
          "option": "string",
          "value": true
        }
      ],
      "spatialAnswer": [
        {
          "option": "string",
          "value": 0
        }
      ],
      "textAnswer": "string"
    },
    "responseTime": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-pulses-by-offeringid-and-pulseid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pulse data matching pulseId|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-pulses-by-offeringid-and-pulseid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PulseResponse](#schemapulseresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-badges">Badges</h1>

## Find offering badges

> Code samples

```bash
curl https://example.com/offerings/string/badges \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/badges`

Responds with the badge for an offering matching the offeringId.

<h3 id="find-offering-badges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
{
  "badgeExpiry": {
    "expirationDate": "1970-01-01T00:00:00Z",
    "expires": true,
    "expiryType": "date",
    "timeframeAmount": 0,
    "timeframeUnit": "days"
  },
  "badgeUrl": "string",
  "criterias": {
    "hasCompletedCourse": true,
    "hasPassedMandatoryAssessedQuizzes": true
  },
  "description": "string",
  "openBadge": {
    "criteria": {
      "narrative": "string"
    },
    "description": "string",
    "id": "string",
    "image": "string",
    "issuer": "string",
    "name": "string",
    "type": "string"
  },
  "title": "string"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-offering-badges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|badges|[Badge](#schemabadge)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Award badge

> Code samples

```bash
curl https://example.com/offerings/string/users/user%40example.com/badges/award \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /offerings/{offeringId}/users/{userEmail}/badges/award`

Awards a badge to a user in the offering.

<h3 id="award-badge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|userEmail|path|string(email)|true|user's email|

> Example responses

> 201 Response

```json
{
  "awarded": true,
  "badgeId": "string",
  "badgeUrl": "string"
}
```

> 400 Response

```json
{
  "details": "The field 'Offering Badge' is missing or invalid.",
  "name": "MissingInfoError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="award-badge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Awarded badge response|[AwardedResponse](#schemaawardedresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find user's badges

> Code samples

```bash
curl https://example.com/users/user%40example.com/badges \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{userEmail}/badges`

Responds with all badges that the specified user has been awarded.

<h3 id="find-users-badges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userEmail|path|string(email)|true|user's email|

> Example responses

> 200 Response

```json
[
  {
    "awardedAt": "1970-01-01T00:00:00Z",
    "badgeExpiry": {
      "expirationDate": "1970-01-01T00:00:00Z",
      "expires": true
    },
    "badgeUrl": "string",
    "criterias": {
      "hasCompletedCourse": true,
      "hasPassedMandatoryAssessedQuizzes": true
    },
    "description": "string",
    "offeringId": "string",
    "openBadge": {
      "criteria": {
        "narrative": "string"
      },
      "description": "string",
      "id": "string",
      "image": "string",
      "issuer": "string",
      "name": "string",
      "type": "string"
    },
    "title": "string"
  }
]
```

> 400 Response

```json
{
  "details": "PARAMETER_NAME PARAMETER_VALUE should match format \"email\".",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-users-badges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|user's badges|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-users-badges-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserBadge](#schemauserbadge)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-assessment-groups">Assessment groups</h1>

## Find assessment groups

> Code samples

```bash
curl https://example.com/offerings/string/groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/groups`

Responds with a list of assessment groups in an offering.

<h3 id="find-assessment-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "string",
    "id": "string",
    "title": "string"
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-assessment-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Succesful response|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-assessment-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssessmentGroupResponse](#schemaassessmentgroupresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add an assessment group

> Code samples

```bash
curl https://example.com/offerings/string/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "title": "string"
  }'
```

`POST /offerings/{offeringId}/groups`

Creates a new assessment group in an offering.

> Body parameter

```json
{
  "title": "string"
}
```

<h3 id="add-an-assessment-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|body|body|[AssessmentGroupRequired](#schemaassessmentgrouprequired)|true|none|
|» title|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "createdAt": "string",
  "id": "string",
  "title": "string"
}
```

> 400 Response

```json
{
  "details": "[PARAMETER_NAME] PARAMETER_VALUE should NOT be shorter than 3 characters",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="add-an-assessment-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|assessment group successfully added|[AssessmentGroupResponse](#schemaassessmentgroupresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find learners in an assessment group

> Code samples

```bash
curl https://example.com/offerings/string/groups/string/learners \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/groups/{groupId}/learners`

Responds with a list of learners in a specified assessment group.

<h3 id="find-learners-in-an-assessment-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|groupId|path|string|true|Assessment group id|

> Example responses

> 200 Response

```json
[
  {
    "avatarUrl": "string",
    "email": "user@example.com",
    "firstAccessAt": "1970-01-01T00:00:00Z",
    "firstName": "string",
    "id": "string",
    "invite": {
      "url": "string"
    },
    "lastAccessAt": "1970-01-01T00:00:00Z",
    "lastName": "string",
    "metadata": {
      "tags": [
        "string"
      ]
    },
    "personId": "string",
    "profile": {
      "displayName": "string",
      "mobile": "string"
    }
  }
]
```

> 400 Response

```json
{
  "details": "[PARAMETER_NAME] PARAMETER_VALUE should NOT be shorter than 3 characters",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-learners-in-an-assessment-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Succesful response|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-learners-in-an-assessment-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserResponse](#schemauserresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add a learner to an assessment group

> Code samples

```bash
curl https://example.com/offerings/string/groups/string/learners \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "string"
  }'
```

`POST /offerings/{offeringId}/groups/{groupId}/learners`

Adds a learner into the specified assessment group.

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="add-a-learner-to-an-assessment-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|groupId|path|string|true|Assessment group id|
|body|body|object|true|none|
|» email|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "avatarUrl": "string",
  "email": "user@example.com",
  "firstAccessAt": "1970-01-01T00:00:00Z",
  "firstName": "string",
  "id": "string",
  "invite": {
    "url": "string"
  },
  "lastAccessAt": "1970-01-01T00:00:00Z",
  "lastName": "string",
  "metadata": {
    "tags": [
      "string"
    ]
  },
  "personId": "string",
  "profile": {
    "displayName": "string",
    "mobile": "string"
  }
}
```

> 400 Response

```json
{
  "details": "invalid $filter parameter.",
  "name": "ApiValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="add-a-learner-to-an-assessment-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Succesful response|[UserResponse](#schemauserresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Remove a learner from an assessment group

> Code samples

```bash
curl https://example.com/offerings/string/groups/string/learners/user%40example.com \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /offerings/{offeringId}/groups/{groupId}/learners/{userEmail}`

Removes a learner from the specified assessment group.

<h3 id="remove-a-learner-from-an-assessment-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|groupId|path|string|true|Assessment group id|
|userEmail|path|string(email)|true|user's email|

> Example responses

> 400 Response

```json
{
  "details": "invalid $filter parameter.",
  "name": "ApiValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="remove-a-learner-from-an-assessment-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|user successfully removed from the assessment group|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-offering-metadata">Offering metadata</h1>

## Update offering category metadata

> Code samples

```bash
curl https://example.com/offerings/string/metadata/category \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "category": "string"
  }'
```

`PUT /offerings/{offeringId}/metadata/category`

Updates the offering category metadata.

> Body parameter

```json
{
  "category": "string"
}
```

<h3 id="update-offering-category-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|body|body|object|true|none|
|» category|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "contentId": "string",
  "coverImageUrl": "string",
  "currency": "string",
  "description": "string",
  "earlyCloseOffDate": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "enrollmentLimit": 0,
  "hasEarlyCloseOff": true,
  "id": "string",
  "identifier": "string",
  "isReadonly": true,
  "metadata": {
    "category": "string",
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "overview": "string",
  "price": 0,
  "start": "1970-01-01T00:00:00Z",
  "tasksEnabled": true,
  "trailerVideoUrl": "string",
  "useRelativeDates": false
}
```

> 400 Response

```json
{
  "details": "[PARAMETER_NAME] PARAMETER_VALUE should be string",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-offering-category-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|offering updated|[OfferingMetadataResponse](#schemaofferingmetadataresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update offering level metadata

> Code samples

```bash
curl https://example.com/offerings/string/metadata/level \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "level": "string"
  }'
```

`PUT /offerings/{offeringId}/metadata/level`

Updates the offering level metadata.

> Body parameter

```json
{
  "level": "string"
}
```

<h3 id="update-offering-level-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|body|body|object|true|none|
|» level|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "contentId": "string",
  "coverImageUrl": "string",
  "currency": "string",
  "description": "string",
  "earlyCloseOffDate": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "enrollmentLimit": 0,
  "hasEarlyCloseOff": true,
  "id": "string",
  "identifier": "string",
  "isReadonly": true,
  "metadata": {
    "category": "string",
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "overview": "string",
  "price": 0,
  "start": "1970-01-01T00:00:00Z",
  "tasksEnabled": true,
  "trailerVideoUrl": "string",
  "useRelativeDates": false
}
```

> 400 Response

```json
{
  "details": "[PARAMETER_NAME] PARAMETER_VALUE should be string",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-offering-level-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|offering updated|[OfferingMetadataResponse](#schemaofferingmetadataresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update offering tags metadata

> Code samples

```bash
curl https://example.com/offerings/string/metadata/tags \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": [
      "string"
    ]
  }'
```

`PUT /offerings/{offeringId}/metadata/tags`

Updates the offering tags metadata.

> Body parameter

```json
{
  "tags": [
    "string"
  ]
}
```

<h3 id="update-offering-tags-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|body|body|object|true|none|
|» tags|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "contentId": "string",
  "coverImageUrl": "string",
  "currency": "string",
  "description": "string",
  "earlyCloseOffDate": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "enrollmentLimit": 0,
  "hasEarlyCloseOff": true,
  "id": "string",
  "identifier": "string",
  "isReadonly": true,
  "metadata": {
    "category": "string",
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "overview": "string",
  "price": 0,
  "start": "1970-01-01T00:00:00Z",
  "tasksEnabled": true,
  "trailerVideoUrl": "string",
  "useRelativeDates": false
}
```

> 400 Response

```json
{
  "details": "[PARAMETER_NAME] PARAMETER_VALUE should be string",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-offering-tags-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|offering updated|[OfferingMetadataResponse](#schemaofferingmetadataresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update offering topic metadata

> Code samples

```bash
curl https://example.com/offerings/string/metadata/topic \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "topic": "string"
  }'
```

`PUT /offerings/{offeringId}/metadata/topic`

Updates the offering topic metadata.

> Body parameter

```json
{
  "topic": "string"
}
```

<h3 id="update-offering-topic-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|body|body|object|true|none|
|» topic|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "contentId": "string",
  "coverImageUrl": "string",
  "currency": "string",
  "description": "string",
  "earlyCloseOffDate": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "enrollmentLimit": 0,
  "hasEarlyCloseOff": true,
  "id": "string",
  "identifier": "string",
  "isReadonly": true,
  "metadata": {
    "category": "string",
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "overview": "string",
  "price": 0,
  "start": "1970-01-01T00:00:00Z",
  "tasksEnabled": true,
  "trailerVideoUrl": "string",
  "useRelativeDates": false
}
```

> 400 Response

```json
{
  "details": "[PARAMETER_NAME] PARAMETER_VALUE should be string",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-offering-topic-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|offering updated|[OfferingMetadataResponse](#schemaofferingmetadataresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-offering-learners">Offering learners</h1>

## Find offering's users

> Code samples

```bash
curl https://example.com/offerings/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/users`

Responds with a list of users in the offering (facilitators, learners and markers.).

<h3 id="find-offerings-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|facilitators|query|string|false|If true, facilitators are included in the results.|
|learners|query|string|false|If true, learners are included in the results.|
|markers|query|string|false|If true, markers are included in the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|facilitators|true|
|facilitators|false|
|learners|true|
|learners|false|
|markers|true|
|markers|false|

> Example responses

> 200 Response

```json
[
  {
    "avatarUrl": "string",
    "email": "user@example.com",
    "evaluatedBy": [
      "string"
    ],
    "evaluates": [
      "string"
    ],
    "firstName": "string",
    "id": "string",
    "isFacilitator": false,
    "isMarker": false,
    "isReadonly": false,
    "lastName": "string",
    "markedBy": [
      "string"
    ],
    "marks": [
      "string"
    ],
    "personId": "string",
    "profile": {
      "displayName": "string",
      "mobile": "string"
    }
  }
]
```

> 400 Response

```json
{
  "details": "[PARAMETER_NAME] PARAMETER_VALUE should be equal to one of the allowed values a, b",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-offerings-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|offering's users|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-offerings-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OfferingUserResponse](#schemaofferinguserresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Adds user to the offering

> Code samples

```bash
curl https://example.com/offerings/string/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '[
    {
      "email": "string",
      "firstName": "string",
      "isFacilitator": false,
      "isMarker": false,
      "isReadonly": false,
      "lastName": "string",
      "metadata": {
        "tags": [
          "string"
        ]
      },
      "personId": "string",
      "profile": {
        "displayName": "string"
      },
      "sendInvite": true,
      "sendNotificationEmail": true
    }
  ]'
```

`POST /offerings/{offeringId}/users`

Adds one or more users to the offering.

> Body parameter

```json
[
  {
    "email": "string",
    "firstName": "string",
    "isFacilitator": false,
    "isMarker": false,
    "isReadonly": false,
    "lastName": "string",
    "metadata": {
      "tags": [
        "string"
      ]
    },
    "personId": "string",
    "profile": {
      "displayName": "string"
    },
    "sendInvite": true,
    "sendNotificationEmail": true
  }
]
```

<h3 id="adds-user-to-the-offering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|body|body|[[OfferingUser](#schemaofferinguser)]|true|none|

> Example responses

> 201 Response

```json
[
  {
    "email": "string",
    "firstName": "string",
    "invite": {
      "url": "string"
    },
    "isFacilitator": false,
    "isMarker": false,
    "isReadonly": false,
    "lastName": "string",
    "metadata": {
      "tags": [
        "string"
      ]
    },
    "personId": "string",
    "profile": {
      "displayName": "string"
    },
    "sendInvite": true,
    "sendNotificationEmail": true
  }
]
```

> 207 Response

```json
[
  {
    "email": "string",
    "firstName": "string",
    "invite": {
      "url": "string"
    },
    "isFacilitator": false,
    "isMarker": false,
    "isReadonly": false,
    "lastName": "string",
    "metadata": {
      "tags": [
        "string"
      ]
    },
    "personId": "string",
    "profile": {
      "displayName": "string"
    },
    "sendInvite": true,
    "sendNotificationEmail": true
  }
]
```

> 400 Response

```json
{
  "details": "invalid $filter parameter.",
  "name": "ApiValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="adds-user-to-the-offering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|user successfully added to the offering|Inline|
|207|Multi-Status|Partially successful response|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="adds-user-to-the-offering-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OfferingUserAddResponse](#schemaofferinguseraddresponse)]|false|none|none|

Status Code **207**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OfferingUserAddResponse](#schemaofferinguseraddresponse) \| [Error](#schemaerror)]|false|none|none|
|» *oneOf*|[OfferingUserAddResponse](#schemaofferinguseraddresponse)|false|none|none|
|» *oneOf*|[Error](#schemaerror)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find Learners marked by a coach

> Code samples

```bash
curl https://example.com/offerings/string/users/string/marks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /offerings/{offeringId}/users/{markerEmail}/marks`

Responds with all learners marked by the specified coach.

<h3 id="find-learners-marked-by-a-coach-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|markerEmail|path|string|true|marker's email|

> Example responses

> 200 Response

```json
[
  {
    "email": "string",
    "firstName": "string",
    "isFacilitator": false,
    "isMarker": false,
    "isReadonly": false,
    "lastName": "string",
    "metadata": {
      "tags": [
        "string"
      ]
    },
    "personId": "string",
    "profile": {
      "displayName": "string"
    },
    "sendInvite": true,
    "sendNotificationEmail": true
  }
]
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-learners-marked-by-a-coach-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|learners marked by the marker|Inline|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-learners-marked-by-a-coach-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OfferingUser](#schemaofferinguser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add learners to be marked by a coach

> Code samples

```bash
curl https://example.com/offerings/string/users/string/marks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '[
    "string"
  ]'
```

`POST /offerings/{offeringId}/users/{markerEmail}/marks`

Adds an array of learners to be marked by the specified coach.

> Body parameter

```json
[
  "string"
]
```

<h3 id="add-learners-to-be-marked-by-a-coach-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|markerEmail|path|string|true|marker's email|
|body|body|[string]|true|array of learners e-mails|

> Example responses

> 200 Response

```json
[
  {
    "email": "string",
    "firstName": "string",
    "isFacilitator": false,
    "isMarker": false,
    "isReadonly": false,
    "lastName": "string",
    "metadata": {
      "tags": [
        "string"
      ]
    },
    "personId": "string",
    "profile": {
      "displayName": "string"
    },
    "sendInvite": true,
    "sendNotificationEmail": true
  }
]
```

> 400 Response

```json
{
  "details": "The user john.doe@test.te is not a builder.",
  "name": "ObjectIsNotError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="add-learners-to-be-marked-by-a-coach-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|learners marked by the marker|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="add-learners-to-be-marked-by-a-coach-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OfferingUser](#schemaofferinguser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Remove learners from coach's marking list

> Code samples

```bash
curl https://example.com/offerings/string/users/string/marks \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '[
    "string"
  ]'
```

`DELETE /offerings/{offeringId}/users/{markerEmail}/marks`

Removes an array of learners from coach's marking list.

> Body parameter

```json
[
  "string"
]
```

<h3 id="remove-learners-from-coachs-marking-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|markerEmail|path|string|true|marker's email|
|body|body|[string]|true|array of learners e-mails|

> Example responses

> 200 Response

```json
[
  {
    "email": "string",
    "firstName": "string",
    "isFacilitator": false,
    "isMarker": false,
    "isReadonly": false,
    "lastName": "string",
    "metadata": {
      "tags": [
        "string"
      ]
    },
    "personId": "string",
    "profile": {
      "displayName": "string"
    },
    "sendInvite": true,
    "sendNotificationEmail": true
  }
]
```

> 400 Response

```json
{
  "details": "The user john.doe@test.te is not a builder.",
  "name": "ObjectIsNotError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="remove-learners-from-coachs-marking-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|learners marked by the marker|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="remove-learners-from-coachs-marking-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OfferingUser](#schemaofferinguser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Removes user from the offering

> Code samples

```bash
curl https://example.com/offerings/string/users/user%40example.com \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /offerings/{offeringId}/users/{userEmail}`

Removes a user from the offering.

<h3 id="removes-user-from-the-offering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|path|string|true|offering's id|
|userEmail|path|string(email)|true|user's email|

> Example responses

> 400 Response

```json
{
  "details": "invalid $filter parameter.",
  "name": "ApiValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="removes-user-from-the-offering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|user successfully removed from the offering|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Transfer a user between offerings

> Code samples

```bash
curl https://example.com/users/user%40example.com/transfer \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fromOfferingId": "string",
    "sendInvite": true,
    "toOfferingId": "string"
  }'
```

`PATCH /users/{userEmail}/transfer`

Moves the user's access and progress from one offering to another.

> Body parameter

```json
{
  "fromOfferingId": "string",
  "sendInvite": true,
  "toOfferingId": "string"
}
```

<h3 id="transfer-a-user-between-offerings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userEmail|path|string(email)|true|user's email|
|body|body|[TransferRequest](#schematransferrequest)|true|transfer_data|
|» fromOfferingId|body|string|false|none|
|» sendInvite|body|boolean|false|none|
|» toOfferingId|body|string|false|none|

> Example responses

> 400 Response

```json
{
  "details": "contentId needs to be the same in order to perform the requested operation.",
  "name": "ContentDoNotMatchError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="transfer-a-user-between-offerings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated user information|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-organisation">Organisation</h1>

## Gets the current organisation

> Code samples

```bash
curl https://example.com/org \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /org`

Returns the current organisation info.

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="gets-the-current-organisation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|organisation summary data|[OrgResponse](#schemaorgresponse)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="iqualify-management-api-users-in-iqualify">Users in iQualify</h1>

## Add new user

> Code samples

```bash
curl https://example.com/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "user@example.com",
    "firstName": "string",
    "lastName": "string",
    "metadata": {
      "tags": [
        "string"
      ]
    },
    "personId": "string",
    "profile": {
      "displayName": "string"
    },
    "sendInvite": true
  }'
```

`POST /users`

Creates a new user.

> Body parameter

```json
{
  "email": "user@example.com",
  "firstName": "string",
  "lastName": "string",
  "metadata": {
    "tags": [
      "string"
    ]
  },
  "personId": "string",
  "profile": {
    "displayName": "string"
  },
  "sendInvite": true
}
```

<h3 id="add-new-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[User](#schemauser)|true|user|
|» email|body|string(email)|false|none|
|» firstName|body|string|false|none|
|» lastName|body|string|false|none|
|» metadata|body|[UserMetadata](#schemausermetadata)|false|none|
|» personId|body|string|false|none|
|» profile|body|[UserProfileRequest](#schemauserprofilerequest)|false|none|
|» sendInvite|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "avatarUrl": "string",
  "email": "user@example.com",
  "firstAccessAt": "1970-01-01T00:00:00Z",
  "firstName": "string",
  "id": "string",
  "invite": {
    "url": "string"
  },
  "lastAccessAt": "1970-01-01T00:00:00Z",
  "lastName": "string",
  "metadata": {
    "tags": [
      "string"
    ]
  },
  "personId": "string",
  "profile": {
    "displayName": "string",
    "mobile": "string"
  }
}
```

> 400 Response

```json
{
  "details": "The badge already exists in the offering OFFERING ID.",
  "name": "ObjectExistsError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="add-new-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|user added|[UserResponse](#schemauserresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find user by email

> Code samples

```bash
curl https://example.com/users/user%40example.com \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{userEmail}`

Responds with a user matching the specified email.

<h3 id="find-user-by-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userEmail|path|string(email)|true|user's email|

> Example responses

> 200 Response

```json
{
  "avatarUrl": "string",
  "email": "user@example.com",
  "firstAccessAt": "1970-01-01T00:00:00Z",
  "firstName": "string",
  "id": "string",
  "invite": {
    "url": "string"
  },
  "lastAccessAt": "1970-01-01T00:00:00Z",
  "lastName": "string",
  "metadata": {
    "tags": [
      "string"
    ]
  },
  "personId": "string",
  "profile": {
    "displayName": "string",
    "mobile": "string"
  }
}
```

> 400 Response

```json
{
  "details": "PARAMETER_NAME PARAMETER_VALUE should match format \"email\".",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-user-by-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|user data|[UserResponse](#schemauserresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update user

> Code samples

```bash
curl https://example.com/users/user%40example.com \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "user@example.com",
    "firstName": "string",
    "lastName": "string",
    "metadata": {
      "tags": [
        "string"
      ]
    },
    "personId": "string",
    "profile": {
      "displayName": "string"
    },
    "sendInvite": true
  }'
```

`PATCH /users/{userEmail}`

Updates the specified user by email.

> Body parameter

```json
{
  "email": "user@example.com",
  "firstName": "string",
  "lastName": "string",
  "metadata": {
    "tags": [
      "string"
    ]
  },
  "personId": "string",
  "profile": {
    "displayName": "string"
  },
  "sendInvite": true
}
```

<h3 id="update-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userEmail|path|string(email)|true|user's email|
|body|body|[User](#schemauser)|false|none|
|» email|body|string(email)|false|none|
|» firstName|body|string|false|none|
|» lastName|body|string|false|none|
|» metadata|body|[UserMetadata](#schemausermetadata)|false|none|
|» personId|body|string|false|none|
|» profile|body|[UserProfileRequest](#schemauserprofilerequest)|false|none|
|» sendInvite|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "avatarUrl": "string",
  "email": "user@example.com",
  "firstAccessAt": "1970-01-01T00:00:00Z",
  "firstName": "string",
  "id": "string",
  "invite": {
    "url": "string"
  },
  "lastAccessAt": "1970-01-01T00:00:00Z",
  "lastName": "string",
  "metadata": {
    "tags": [
      "string"
    ]
  },
  "personId": "string",
  "profile": {
    "displayName": "string",
    "mobile": "string"
  }
}
```

> 400 Response

```json
{
  "details": "The badge already exists in the offering OFFERING ID.",
  "name": "ObjectExistsError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="update-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|user updated|[UserResponse](#schemauserresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Resend invitation email

> Code samples

```bash
curl https://example.com/users/user%40example.com/invite-email \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /users/{userEmail}/invite-email`

Re-sends an invitation e-mail to the specified user.

<h3 id="resend-invitation-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userEmail|path|string(email)|true|user's email|

> Example responses

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="resend-invitation-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successfully requested invitation e-mail sending|None|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find user's offerings

> Code samples

```bash
curl https://example.com/users/user%40example.com/offerings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{userEmail}/offerings`

Responds with all offerings that the user in.

<h3 id="find-users-offerings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userEmail|path|string(email)|true|user's email|

> Example responses

> 200 Response

```json
[
  {
    "contentId": "string",
    "coverImageUrl": "string",
    "currency": "string",
    "description": "string",
    "earlyCloseOffDate": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z",
    "enrollmentLimit": 0,
    "hasEarlyCloseOff": true,
    "id": "string",
    "identifier": "string",
    "isReadonly": true,
    "metadata": {
      "category": "string",
      "level": "string",
      "rootContentId": "string",
      "tags": [
        "string"
      ],
      "topic": "string"
    },
    "name": "string",
    "overview": "string",
    "price": 0,
    "start": "1970-01-01T00:00:00Z",
    "tasksEnabled": true,
    "trailerVideoUrl": "string",
    "useRelativeDates": false
  }
]
```

> 400 Response

```json
{
  "details": "PARAMETER_NAME PARAMETER_VALUE should match format \"email\".",
  "name": "SchemaValidationError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="find-users-offerings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|user's offerings|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="find-users-offerings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OfferingMetadataResponse](#schemaofferingmetadataresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Adds the user to the specified offerings as a learner

> Code samples

```bash
curl https://example.com/users/user%40example.com/offerings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '[
    "string"
  ]'
```

`POST /users/{userEmail}/offerings`

Adds a user to an array of offerings by offeringId.

> Body parameter

```json
[
  "string"
]
```

<h3 id="adds-the-user-to-the-specified-offerings-as-a-learner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userEmail|path|string(email)|true|user's email|
|body|body|[string]|true|offering ids|

> Example responses

> 200 Response

```json
[
  {
    "contentId": "string",
    "coverImageUrl": "string",
    "currency": "string",
    "description": "string",
    "earlyCloseOffDate": "1970-01-01T00:00:00Z",
    "end": "1970-01-01T00:00:00Z",
    "enrollmentLimit": 0,
    "hasEarlyCloseOff": true,
    "id": "string",
    "identifier": "string",
    "isReadonly": true,
    "metadata": {
      "category": "string",
      "level": "string",
      "rootContentId": "string",
      "tags": [
        "string"
      ],
      "topic": "string"
    },
    "name": "string",
    "overview": "string",
    "price": 0,
    "start": "1970-01-01T00:00:00Z",
    "tasksEnabled": true,
    "trailerVideoUrl": "string",
    "useRelativeDates": false
  }
]
```

> 400 Response

```json
{
  "details": "The field 'Offering Badge' is missing or invalid.",
  "name": "MissingInfoError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="adds-the-user-to-the-specified-offerings-as-a-learner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|user's offerings|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="adds-the-user-to-the-specified-offerings-as-a-learner-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OfferingMetadataResponse](#schemaofferingmetadataresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add permission to user

> Code samples

```bash
curl https://example.com/users/user%40example.com/permissions/builder \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /users/{userEmail}/permissions/{permissionName}`

Adds additional permissions to the specified user.

<h3 id="add-permission-to-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userEmail|path|string(email)|true|user's email|
|permissionName|path|string|true|permission name|

#### Enumerated Values

|Parameter|Value|
|---|---|
|permissionName|builder|
|permissionName|manager|

> Example responses

> 200 Response

```json
{
  "avatarUrl": "string",
  "email": "user@example.com",
  "firstAccessAt": "1970-01-01T00:00:00Z",
  "firstName": "string",
  "id": "string",
  "invite": {
    "url": "string"
  },
  "lastAccessAt": "1970-01-01T00:00:00Z",
  "lastName": "string",
  "metadata": {
    "tags": [
      "string"
    ]
  },
  "personId": "string",
  "profile": {
    "displayName": "string",
    "mobile": "string"
  }
}
```

> 400 Response

```json
{
  "details": "The field 'Offering Badge' is missing or invalid.",
  "name": "MissingInfoError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="add-permission-to-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|permission successfully added to user|[UserResponse](#schemauserresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Suspend user

> Code samples

```bash
curl https://example.com/users/user%40example.com/suspend \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "suspended": true
  }'
```

`PUT /users/{userEmail}/suspend`

Suspends the specified user's account.

> Body parameter

```json
{
  "suspended": true
}
```

<h3 id="suspend-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userEmail|path|string(email)|true|user's email|
|body|body|[SuspendedRequest](#schemasuspendedrequest)|true|none|
|» suspended|body|boolean|false|none|

> Example responses

> 400 Response

```json
{
  "details": "The specified parameter file.mimetype (image mimetype) has an invalid value \\'text/plain\\'.",
  "name": "InvalidParameterError"
}
```

> 401 Response

```json
{
  "details": "No authorization token was found.",
  "name": "NotAuthorizedError"
}
```

> 403 Response

```json
{
  "details": "You are not allowed to access this resource",
  "name": "AccessDeniedError"
}
```

> 404 Response

```json
{
  "details": "The content badcontentId was not found.",
  "name": "ObjectNotFoundError"
}
```

<h3 id="suspend-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|User suspended.|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|No authorization token was found.|[Error](#schemaerror)|
|403|Forbidden|You are not allowed to access this resource.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

# Schemas

<h2 id="tocS_ActivationResponse">ActivationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactivationresponse"></a>
<a id="schema_ActivationResponse"></a>
<a id="tocSactivationresponse"></a>
<a id="tocsactivationresponse"></a>

```json
{
  "end": "string",
  "id": "string",
  "info": "string",
  "learnersCount": "string",
  "metadata": {
    "rootContentId": "string"
  },
  "name": "string",
  "start": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string|false|none|none|
|id|string|false|none|none|
|info|string|false|none|none|
|learnersCount|string|false|none|number of learners in the offering, excluding facilitators and coaches|
|metadata|object|false|none|none|
|name|string|false|none|none|
|start|string|false|none|none|

<h2 id="tocS_ActivityAttemptOpenResponse">ActivityAttemptOpenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactivityattemptopenresponse"></a>
<a id="schema_ActivityAttemptOpenResponse"></a>
<a id="tocSactivityattemptopenresponse"></a>
<a id="tocsactivityattemptopenresponse"></a>

```json
{
  "activityId": "string",
  "activityType": "string",
  "feedback": {
    "facilitatorEmail": "string",
    "text": "string"
  },
  "learnerEmail": "string",
  "offeringId": "string",
  "responseText": "string",
  "uploadedFiles": {
    "filename": "string",
    "mimetype": "string",
    "size": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityId|string|false|none|none|
|activityType|string|false|none|none|
|feedback|[ActivityAttemptOpenResponseFeedback](#schemaactivityattemptopenresponsefeedback)|false|none|none|
|learnerEmail|string|false|none|none|
|offeringId|string|false|none|none|
|responseText|string|false|none|none|
|uploadedFiles|[ActivityAttemptOpenResponseFiles](#schemaactivityattemptopenresponsefiles)|false|none|none|

<h2 id="tocS_ActivityAttemptOpenResponseFeedback">ActivityAttemptOpenResponseFeedback</h2>
<!-- backwards compatibility -->
<a id="schemaactivityattemptopenresponsefeedback"></a>
<a id="schema_ActivityAttemptOpenResponseFeedback"></a>
<a id="tocSactivityattemptopenresponsefeedback"></a>
<a id="tocsactivityattemptopenresponsefeedback"></a>

```json
{
  "facilitatorEmail": "string",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facilitatorEmail|string|false|none|none|
|text|string|false|none|none|

<h2 id="tocS_ActivityAttemptOpenResponseFiles">ActivityAttemptOpenResponseFiles</h2>
<!-- backwards compatibility -->
<a id="schemaactivityattemptopenresponsefiles"></a>
<a id="schema_ActivityAttemptOpenResponseFiles"></a>
<a id="tocSactivityattemptopenresponsefiles"></a>
<a id="tocsactivityattemptopenresponsefiles"></a>

```json
{
  "filename": "string",
  "mimetype": "string",
  "size": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|string|false|none|none|
|mimetype|string|false|none|none|
|size|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_Assessment">Assessment</h2>
<!-- backwards compatibility -->
<a id="schemaassessment"></a>
<a id="schema_Assessment"></a>
<a id="tocSassessment"></a>
<a id="tocsassessment"></a>

```json
{
  "content": "string",
  "dueDate": "1970-01-01T00:00:00Z",
  "markNumber": "string",
  "markType": "string",
  "openDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|dueDate|string(date-time)|false|none|none|
|markNumber|string|false|none|none|
|markType|string|false|none|none|
|openDate|string(date-time)|false|none|none|

<h2 id="tocS_AssessmentGroupRequired">AssessmentGroupRequired</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentgrouprequired"></a>
<a id="schema_AssessmentGroupRequired"></a>
<a id="tocSassessmentgrouprequired"></a>
<a id="tocsassessmentgrouprequired"></a>

```json
{
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|none|

<h2 id="tocS_AssessmentGroupResponse">AssessmentGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentgroupresponse"></a>
<a id="schema_AssessmentGroupResponse"></a>
<a id="tocSassessmentgroupresponse"></a>
<a id="tocsassessmentgroupresponse"></a>

```json
{
  "createdAt": "string",
  "id": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string|false|none|none|
|id|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_AssessmentPendingSubmission">AssessmentPendingSubmission</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentpendingsubmission"></a>
<a id="schema_AssessmentPendingSubmission"></a>
<a id="tocSassessmentpendingsubmission"></a>
<a id="tocsassessmentpendingsubmission"></a>

```json
{
  "content": "string",
  "documents": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "filename": "string",
      "id": "string",
      "mimetype": "string",
      "size": 0,
      "url": "string"
    }
  ],
  "dueDate": "1970-01-01T00:00:00Z",
  "durationMinutes": 0,
  "filename": "string",
  "hidden": false,
  "id": "string",
  "markNumber": "string",
  "markType": "string",
  "maxAttempts": 0,
  "offeringId": "string",
  "offeringName": "string",
  "openDate": "1970-01-01T00:00:00Z",
  "pid": "string",
  "points": "string",
  "themes": [
    {
      "filter": "string",
      "numberOfQuestions": "string"
    }
  ],
  "title": "string",
  "totalQuestions": 0,
  "totalThemes": 0,
  "type": "string",
  "users": [
    {
      "email": "user@example.com",
      "firstName": "string",
      "lastName": "string",
      "metadata": {
        "tags": [
          "string"
        ]
      },
      "personId": "string",
      "profile": {
        "displayName": "string"
      },
      "sendInvite": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|documents|[[Document](#schemadocument)]|false|none|none|
|dueDate|string(date-time)|false|none|none|
|durationMinutes|integer(int32)|false|none|none|
|filename|string|false|none|none|
|hidden|boolean|false|none|none|
|id|string|false|none|none|
|markNumber|string|false|none|none|
|markType|string|false|none|none|
|maxAttempts|integer(int32)|false|none|none|
|offeringId|string|false|none|none|
|offeringName|string|false|none|none|
|openDate|string(date-time)|false|none|none|
|pid|string|false|none|none|
|points|string|false|none|none|
|themes|[[ThemeResponse](#schemathemeresponse)]|false|none|none|
|title|string|false|none|none|
|totalQuestions|integer(int32)|false|none|none|
|totalThemes|integer(int32)|false|none|none|
|type|string|false|none|none|
|users|[[User](#schemauser)]|false|none|none|

<h2 id="tocS_AssessmentResponse">AssessmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassessmentresponse"></a>
<a id="schema_AssessmentResponse"></a>
<a id="tocSassessmentresponse"></a>
<a id="tocsassessmentresponse"></a>

```json
{
  "content": "string",
  "documents": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "filename": "string",
      "id": "string",
      "mimetype": "string",
      "size": 0,
      "url": "string"
    }
  ],
  "dueDate": "1970-01-01T00:00:00Z",
  "durationMinutes": 0,
  "filename": "string",
  "hidden": false,
  "id": "string",
  "markNumber": "string",
  "markType": "string",
  "maxAttempts": 0,
  "openDate": "1970-01-01T00:00:00Z",
  "pid": "string",
  "points": "string",
  "themes": [
    {
      "filter": "string",
      "numberOfQuestions": "string"
    }
  ],
  "title": "string",
  "totalQuestions": 0,
  "totalThemes": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|documents|[[Document](#schemadocument)]|false|none|none|
|dueDate|string(date-time)|false|none|none|
|durationMinutes|integer(int32)|false|none|none|
|filename|string|false|none|none|
|hidden|boolean|false|none|none|
|id|string|false|none|none|
|markNumber|string|false|none|none|
|markType|string|false|none|none|
|maxAttempts|integer(int32)|false|none|none|
|openDate|string(date-time)|false|none|none|
|pid|string|false|none|none|
|points|string|false|none|none|
|themes|[[ThemeResponse](#schemathemeresponse)]|false|none|none|
|title|string|false|none|none|
|totalQuestions|integer(int32)|false|none|none|
|totalThemes|integer(int32)|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_AssignmentMarkResponse">AssignmentMarkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentmarkresponse"></a>
<a id="schema_AssignmentMarkResponse"></a>
<a id="tocSassignmentmarkresponse"></a>
<a id="tocsassignmentmarkresponse"></a>

```json
{
  "assessmentId": "string",
  "assessmentItemDetails": "string",
  "assessmentItemName": "string",
  "courseName": "string",
  "learnerEmail": "string",
  "learnerFirstName": "string",
  "learnerLastName": "string",
  "learnerPersonId": "string",
  "mark": "string",
  "markFeedback": "string",
  "markedBy": "string",
  "markedByEvaluator": true,
  "markedByFacilitator": true,
  "markedByMarker": true,
  "markedDateTime": "1970-01-01T00:00:00Z",
  "submissionDateTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessmentId|string|false|none|none|
|assessmentItemDetails|string|false|none|none|
|assessmentItemName|string|false|none|none|
|courseName|string|false|none|none|
|learnerEmail|string|false|none|none|
|learnerFirstName|string|false|none|none|
|learnerLastName|string|false|none|none|
|learnerPersonId|string|false|none|none|
|mark|string|false|none|none|
|markFeedback|string|false|none|none|
|markedBy|string|false|none|none|
|markedByEvaluator|boolean|false|none|none|
|markedByFacilitator|boolean|false|none|none|
|markedByMarker|boolean|false|none|none|
|markedDateTime|string(date-time)|false|none|none|
|submissionDateTime|string(date-time)|false|none|none|

<h2 id="tocS_Assignments">Assignments</h2>
<!-- backwards compatibility -->
<a id="schemaassignments"></a>
<a id="schema_Assignments"></a>
<a id="tocSassignments"></a>
<a id="tocsassignments"></a>

```json
{
  "files": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "filename": "string",
      "id": "string",
      "mimetype": "string",
      "size": 0,
      "url": "string"
    }
  ],
  "marks": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "feedback": "string",
      "id": "string",
      "mark": "string",
      "markFeedback": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "feedback": "string",
          "feedbackBy": "string",
          "id": "string",
          "mark": "string",
          "markerId": "string"
        }
      ],
      "markedBy": "string",
      "markerId": "string"
    }
  ],
  "status": "string",
  "submittedAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[[Document](#schemadocument)]|false|none|none|
|marks|[[Mark](#schemamark)]|false|none|none|
|status|string|false|none|none|
|submittedAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|

<h2 id="tocS_AwardedResponse">AwardedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaawardedresponse"></a>
<a id="schema_AwardedResponse"></a>
<a id="tocSawardedresponse"></a>
<a id="tocsawardedresponse"></a>

```json
{
  "awarded": true,
  "badgeId": "string",
  "badgeUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awarded|boolean|false|none|none|
|badgeId|string|false|none|none|
|badgeUrl|string|false|none|none|

<h2 id="tocS_Badge">Badge</h2>
<!-- backwards compatibility -->
<a id="schemabadge"></a>
<a id="schema_Badge"></a>
<a id="tocSbadge"></a>
<a id="tocsbadge"></a>

```json
{
  "badgeExpiry": {
    "expirationDate": "1970-01-01T00:00:00Z",
    "expires": true,
    "expiryType": "date",
    "timeframeAmount": 0,
    "timeframeUnit": "days"
  },
  "badgeUrl": "string",
  "criterias": {
    "hasCompletedCourse": true,
    "hasPassedMandatoryAssessedQuizzes": true
  },
  "description": "string",
  "openBadge": {
    "criteria": {
      "narrative": "string"
    },
    "description": "string",
    "id": "string",
    "image": "string",
    "issuer": "string",
    "name": "string",
    "type": "string"
  },
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badgeExpiry|[BadgeExpiry](#schemabadgeexpiry)|false|none|none|
|badgeUrl|string|false|none|none|
|criterias|object|false|none|none|
|description|string|false|none|none|
|openBadge|object|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_BadgeExpiry">BadgeExpiry</h2>
<!-- backwards compatibility -->
<a id="schemabadgeexpiry"></a>
<a id="schema_BadgeExpiry"></a>
<a id="tocSbadgeexpiry"></a>
<a id="tocsbadgeexpiry"></a>

```json
{
  "expirationDate": "1970-01-01T00:00:00Z",
  "expires": true,
  "expiryType": "date",
  "timeframeAmount": 0,
  "timeframeUnit": "days"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationDate|string(date-time)|false|none|none|
|expires|boolean|false|none|none|
|expiryType|string|false|none|none|
|timeframeAmount|number|false|none|none|
|timeframeUnit|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|expiryType|date|
|expiryType|timeframe|
|timeframeUnit|days|
|timeframeUnit|months|
|timeframeUnit|years|

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "group": {
    "autoAssign": true
  },
  "groupDiscussion": true,
  "isBroadcastOnly": true,
  "privateSupport": true,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|none|
|groupDiscussion|boolean|false|none|none|
|isBroadcastOnly|boolean|false|none|none|
|privateSupport|boolean|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_ChannelRequired">ChannelRequired</h2>
<!-- backwards compatibility -->
<a id="schemachannelrequired"></a>
<a id="schema_ChannelRequired"></a>
<a id="tocSchannelrequired"></a>
<a id="tocschannelrequired"></a>

```json
{
  "isBroadcastOnly": false,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isBroadcastOnly|boolean|false|none|none|
|title|string|true|none|none|

<h2 id="tocS_ChannelResponse">ChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemachannelresponse"></a>
<a id="schema_ChannelResponse"></a>
<a id="tocSchannelresponse"></a>
<a id="tocschannelresponse"></a>

```json
{
  "id": "string",
  "isBroadcastOnly": false,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|isBroadcastOnly|boolean|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "content": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "email": "string",
  "id": "string",
  "isFacilitatorPost": true,
  "moderation": {
    "isMuted": true,
    "moderator": {
      "avatarUrl": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    },
    "reason": "string"
  },
  "parentCommentId": "string",
  "postId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|email|string|false|none|none|
|id|string|false|none|none|
|isFacilitatorPost|boolean|false|none|none|
|moderation|[Moderation](#schemamoderation)|false|none|none|
|parentCommentId|string|false|none|none|
|postId|string|false|none|none|

<h2 id="tocS_CourseMetaResponse">CourseMetaResponse</h2>
<!-- backwards compatibility -->
<a id="schemacoursemetaresponse"></a>
<a id="schema_CourseMetaResponse"></a>
<a id="tocScoursemetaresponse"></a>
<a id="tocscoursemetaresponse"></a>

```json
{
  "coverImageUrl": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "metadata": {
    "category": "string",
    "learning_outcomes": [
      {
        "description": "string",
        "id": "string"
      }
    ],
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "tasksEnabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coverImageUrl|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|id|string|false|none|none|
|metadata|object|false|none|none|
|name|string|false|none|none|
|tasksEnabled|boolean|false|none|none|

<h2 id="tocS_CourseResponse">CourseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacourseresponse"></a>
<a id="schema_CourseResponse"></a>
<a id="tocScourseresponse"></a>
<a id="tocscourseresponse"></a>

```json
{
  "coverImageUrl": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "metadata": {
    "learning_outcomes": [
      {
        "description": "string",
        "id": "string"
      }
    ]
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coverImageUrl|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|id|string|false|none|none|
|metadata|object|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Criteria">Criteria</h2>
<!-- backwards compatibility -->
<a id="schemacriteria"></a>
<a id="schema_Criteria"></a>
<a id="tocScriteria"></a>
<a id="tocscriteria"></a>

```json
{
  "hasCompletedCourse": true,
  "hasPassedMandatoryAssessedQuizzes": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasCompletedCourse|boolean|false|none|none|
|hasPassedMandatoryAssessedQuizzes|boolean|false|none|none|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "filename": "string",
  "id": "string",
  "mimetype": "string",
  "size": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|filename|string|false|none|none|
|id|string|false|none|none|
|mimetype|string|false|none|none|
|size|integer(int64)|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_DocumentResponse">DocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadocumentresponse"></a>
<a id="schema_DocumentResponse"></a>
<a id="tocSdocumentresponse"></a>
<a id="tocsdocumentresponse"></a>

```json
{
  "id": "string",
  "mimetype": "string",
  "size": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|mimetype|string|false|none|none|
|size|integer(int64)|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": {
    "details": "string",
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|

<h2 id="tocS_Invite">Invite</h2>
<!-- backwards compatibility -->
<a id="schemainvite"></a>
<a id="schema_Invite"></a>
<a id="tocSinvite"></a>
<a id="tocsinvite"></a>

```json
{
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|if sendInvite in request is false|

<h2 id="tocS_LearnerOfferingDates">LearnerOfferingDates</h2>
<!-- backwards compatibility -->
<a id="schemalearnerofferingdates"></a>
<a id="schema_LearnerOfferingDates"></a>
<a id="tocSlearnerofferingdates"></a>
<a id="tocslearnerofferingdates"></a>

```json
{
  "start": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string(date-time)|false|none|none|

<h2 id="tocS_LearnerProgressResponse">LearnerProgressResponse</h2>
<!-- backwards compatibility -->
<a id="schemalearnerprogressresponse"></a>
<a id="schema_LearnerProgressResponse"></a>
<a id="tocSlearnerprogressresponse"></a>
<a id="tocslearnerprogressresponse"></a>

```json
{
  "completion": "string",
  "courseId": "string",
  "email": "string",
  "firstName": "string",
  "lastLoggedInAt": "1970-01-01T00:00:00Z",
  "lastName": "string",
  "personId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion|string|false|none|none|
|courseId|string|false|none|none|
|email|string|false|none|none|
|firstName|string|false|none|none|
|lastLoggedInAt|string(date-time)|false|none|none|
|lastName|string|false|none|none|
|personId|string|false|none|none|

<h2 id="tocS_LearnerResponse">LearnerResponse</h2>
<!-- backwards compatibility -->
<a id="schemalearnerresponse"></a>
<a id="schema_LearnerResponse"></a>
<a id="tocSlearnerresponse"></a>
<a id="tocslearnerresponse"></a>

```json
{
  "email": "string",
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "offerings": [
    {
      "completion": "string",
      "id": "string"
    }
  ],
  "personId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|firstName|string|false|none|none|
|id|string|false|none|none|
|lastName|string|false|none|none|
|offerings|[[OfferingProgressRow](#schemaofferingprogressrow)]|false|none|none|
|personId|string|false|none|none|

<h2 id="tocS_LearningOutcomes">LearningOutcomes</h2>
<!-- backwards compatibility -->
<a id="schemalearningoutcomes"></a>
<a id="schema_LearningOutcomes"></a>
<a id="tocSlearningoutcomes"></a>
<a id="tocslearningoutcomes"></a>

```json
{
  "description": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_Mark">Mark</h2>
<!-- backwards compatibility -->
<a id="schemamark"></a>
<a id="schema_Mark"></a>
<a id="tocSmark"></a>
<a id="tocsmark"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "feedback": "string",
  "id": "string",
  "mark": "string",
  "markFeedback": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "feedback": "string",
      "feedbackBy": "string",
      "id": "string",
      "mark": "string",
      "markerId": "string"
    }
  ],
  "markedBy": "string",
  "markerId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|feedback|string|false|none|none|
|id|string|false|none|none|
|mark|string|false|none|none|
|markFeedback|[[MarkFeedback](#schemamarkfeedback)]|false|none|none|
|markedBy|string|false|none|none|
|markerId|string|false|none|none|

<h2 id="tocS_MarkFeedback">MarkFeedback</h2>
<!-- backwards compatibility -->
<a id="schemamarkfeedback"></a>
<a id="schema_MarkFeedback"></a>
<a id="tocSmarkfeedback"></a>
<a id="tocsmarkfeedback"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "feedback": "string",
  "feedbackBy": "string",
  "id": "string",
  "mark": "string",
  "markerId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|feedback|string|false|none|none|
|feedbackBy|string|false|none|none|
|id|string|false|none|none|
|mark|string|false|none|none|
|markerId|string|false|none|none|

<h2 id="tocS_Moderation">Moderation</h2>
<!-- backwards compatibility -->
<a id="schemamoderation"></a>
<a id="schema_Moderation"></a>
<a id="tocSmoderation"></a>
<a id="tocsmoderation"></a>

```json
{
  "isMuted": true,
  "moderator": {
    "avatarUrl": "string",
    "firstName": "string",
    "id": "string",
    "lastName": "string"
  },
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isMuted|boolean|false|none|none|
|moderator|[Moderator](#schemamoderator)|false|none|none|
|reason|string|false|none|none|

<h2 id="tocS_Moderator">Moderator</h2>
<!-- backwards compatibility -->
<a id="schemamoderator"></a>
<a id="schema_Moderator"></a>
<a id="tocSmoderator"></a>
<a id="tocsmoderator"></a>

```json
{
  "avatarUrl": "string",
  "firstName": "string",
  "id": "string",
  "lastName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatarUrl|string|false|none|none|
|firstName|string|false|none|none|
|id|string|false|none|none|
|lastName|string|false|none|none|

<h2 id="tocS_Offering">Offering</h2>
<!-- backwards compatibility -->
<a id="schemaoffering"></a>
<a id="schema_Offering"></a>
<a id="tocSoffering"></a>
<a id="tocsoffering"></a>

```json
{
  "badge": {
    "badgeExpiry": {
      "expirationDate": "1970-01-01T00:00:00Z",
      "expires": true,
      "expiryType": "date",
      "timeframeAmount": 0,
      "timeframeUnit": "days"
    },
    "description": "string",
    "requiresApproval": true,
    "title": "string"
  },
  "contentId": "string",
  "description": "string",
  "earlyCloseOffDate": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "hasEarlyCloseOff": true,
  "identifier": "string",
  "isReadonly": true,
  "metadata": {
    "category": "string",
    "level": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "overview": "string",
  "rootContentId": "string",
  "start": "1970-01-01T00:00:00Z",
  "trailerVideoUrl": "string",
  "useRelativeDates": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badge|object|false|none|none|
|contentId|string|false|none|The identifier for a specific version of a course|
|description|string|false|none|none|
|earlyCloseOffDate|string(date-time)|false|none|none|
|end|string(date-time)|false|none|none|
|hasEarlyCloseOff|boolean|false|none|none|
|identifier|string|false|none|none|
|isReadonly|boolean|false|none|none|
|metadata|object|false|none|none|
|name|string|false|none|none|
|overview|string|false|none|none|
|rootContentId|string|false|none|Every time a course is republished it is assigned a new contentId. rootContentId is the first original contentId associated with a course.|
|start|string(date-time)|false|none|none|
|trailerVideoUrl|string|false|none|none|
|useRelativeDates|boolean|false|none|none|

<h2 id="tocS_OfferingActivitiesResponse">OfferingActivitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaofferingactivitiesresponse"></a>
<a id="schema_OfferingActivitiesResponse"></a>
<a id="tocSofferingactivitiesresponse"></a>
<a id="tocsofferingactivitiesresponse"></a>

```json
{
  "activityId": "string",
  "time": 0,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityId|string|false|none|none|
|time|number|false|none|expected minutes to complete|
|title|string|false|none|none|

<h2 id="tocS_OfferingMetadata">OfferingMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaofferingmetadata"></a>
<a id="schema_OfferingMetadata"></a>
<a id="tocSofferingmetadata"></a>
<a id="tocsofferingmetadata"></a>

```json
{
  "category": "string",
  "level": "string",
  "rootContentId": "string",
  "tags": [
    "string"
  ],
  "topic": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|level|string|false|none|none|
|rootContentId|string|false|none|none|
|tags|[string]|false|none|none|
|topic|string|false|none|none|

<h2 id="tocS_OfferingMetadataResponse">OfferingMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaofferingmetadataresponse"></a>
<a id="schema_OfferingMetadataResponse"></a>
<a id="tocSofferingmetadataresponse"></a>
<a id="tocsofferingmetadataresponse"></a>

```json
{
  "contentId": "string",
  "coverImageUrl": "string",
  "currency": "string",
  "description": "string",
  "earlyCloseOffDate": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "enrollmentLimit": 0,
  "hasEarlyCloseOff": true,
  "id": "string",
  "identifier": "string",
  "isReadonly": true,
  "metadata": {
    "category": "string",
    "level": "string",
    "rootContentId": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "overview": "string",
  "price": 0,
  "start": "1970-01-01T00:00:00Z",
  "tasksEnabled": true,
  "trailerVideoUrl": "string",
  "useRelativeDates": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentId|string|false|none|none|
|coverImageUrl|string|false|none|none|
|currency|string|false|none|none|
|description|string|false|none|none|
|earlyCloseOffDate|string(date-time)|false|none|none|
|end|string(date-time)|false|none|none|
|enrollmentLimit|number|false|none|none|
|hasEarlyCloseOff|boolean|false|none|none|
|id|string|false|none|none|
|identifier|string|false|none|none|
|isReadonly|boolean|false|none|none|
|metadata|[OfferingMetadata](#schemaofferingmetadata)|false|none|none|
|name|string|false|none|none|
|overview|string|false|none|content can contain html|
|price|number|false|none|none|
|start|string(date-time)|false|none|none|
|tasksEnabled|boolean|false|none|none|
|trailerVideoUrl|string|false|none|none|
|useRelativeDates|boolean|false|none|none|

<h2 id="tocS_OfferingProgressRow">OfferingProgressRow</h2>
<!-- backwards compatibility -->
<a id="schemaofferingprogressrow"></a>
<a id="schema_OfferingProgressRow"></a>
<a id="tocSofferingprogressrow"></a>
<a id="tocsofferingprogressrow"></a>

```json
{
  "completion": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion|string|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_OfferingRequired">OfferingRequired</h2>
<!-- backwards compatibility -->
<a id="schemaofferingrequired"></a>
<a id="schema_OfferingRequired"></a>
<a id="tocSofferingrequired"></a>
<a id="tocsofferingrequired"></a>

```json
{
  "badge": {
    "badgeExpiry": {
      "expirationDate": "1970-01-01T00:00:00Z",
      "expires": true,
      "expiryType": "date",
      "timeframeAmount": 0,
      "timeframeUnit": "days"
    },
    "description": "string",
    "requiresApproval": true,
    "title": "string"
  },
  "contentId": "string",
  "createDefaultChannels": false,
  "description": "string",
  "earlyCloseOffDate": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "hasEarlyCloseOff": true,
  "identifier": "string",
  "isReadonly": true,
  "metadata": {
    "category": "string",
    "level": "string",
    "tags": [
      "string"
    ],
    "topic": "string"
  },
  "name": "string",
  "rootContentId": "string",
  "start": "1970-01-01T00:00:00Z",
  "trailerVideoUrl": "string",
  "useRelativeDates": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badge|object|false|none|none|
|contentId|string|false|none|The identifier for a specific version of a course|
|createDefaultChannels|boolean|false|none|none|
|description|string|false|none|none|
|earlyCloseOffDate|string(date-time)|false|none|none|
|end|string(date-time)|false|none|none|
|hasEarlyCloseOff|boolean|false|none|none|
|identifier|string|false|none|none|
|isReadonly|boolean|false|none|none|
|metadata|object|false|none|none|
|name|string|false|none|none|
|rootContentId|string|false|none|Every time a course is republished it's assigned a new contentId. rootContentId is the first original contentId associated with a course.|
|start|string(date-time)|true|none|none|
|trailerVideoUrl|string|false|none|none|
|useRelativeDates|boolean|false|none|none|

<h2 id="tocS_OfferingResponse">OfferingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaofferingresponse"></a>
<a id="schema_OfferingResponse"></a>
<a id="tocSofferingresponse"></a>
<a id="tocsofferingresponse"></a>

```json
{
  "contentId": "string",
  "coverImageUrl": "string",
  "currency": "string",
  "description": "string",
  "earlyCloseOffDate": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "enrollmentLimit": 0,
  "hasEarlyCloseOff": true,
  "id": "string",
  "identifier": "string",
  "isReadonly": true,
  "name": "string",
  "price": 0,
  "start": "1970-01-01T00:00:00Z",
  "tasksEnabled": true,
  "trailerVideoUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentId|string|false|none|none|
|coverImageUrl|string|false|none|none|
|currency|string|false|none|none|
|description|string|false|none|none|
|earlyCloseOffDate|string(date-time)|false|none|none|
|end|string(date-time)|false|none|none|
|enrollmentLimit|number|false|none|none|
|hasEarlyCloseOff|boolean|false|none|none|
|id|string|false|none|none|
|identifier|string|false|none|none|
|isReadonly|boolean|false|none|none|
|name|string|false|none|none|
|price|number|false|none|none|
|start|string(date-time)|false|none|none|
|tasksEnabled|boolean|false|none|none|
|trailerVideoUrl|string|false|none|none|

<h2 id="tocS_OfferingUser">OfferingUser</h2>
<!-- backwards compatibility -->
<a id="schemaofferinguser"></a>
<a id="schema_OfferingUser"></a>
<a id="tocSofferinguser"></a>
<a id="tocsofferinguser"></a>

```json
{
  "email": "string",
  "firstName": "string",
  "isFacilitator": false,
  "isMarker": false,
  "isReadonly": false,
  "lastName": "string",
  "metadata": {
    "tags": [
      "string"
    ]
  },
  "personId": "string",
  "profile": {
    "displayName": "string"
  },
  "sendInvite": true,
  "sendNotificationEmail": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|firstName|string|false|none|none|
|isFacilitator|boolean|false|none|none|
|isMarker|boolean|false|none|none|
|isReadonly|boolean|false|none|none|
|lastName|string|false|none|none|
|metadata|[UserMetadata](#schemausermetadata)|false|none|none|
|personId|string|false|none|none|
|profile|[UserProfileRequest](#schemauserprofilerequest)|false|none|none|
|sendInvite|boolean|false|none|none|
|sendNotificationEmail|boolean|false|none|none|

<h2 id="tocS_OfferingUserAddResponse">OfferingUserAddResponse</h2>
<!-- backwards compatibility -->
<a id="schemaofferinguseraddresponse"></a>
<a id="schema_OfferingUserAddResponse"></a>
<a id="tocSofferinguseraddresponse"></a>
<a id="tocsofferinguseraddresponse"></a>

```json
{
  "email": "string",
  "firstName": "string",
  "invite": {
    "url": "string"
  },
  "isFacilitator": false,
  "isMarker": false,
  "isReadonly": false,
  "lastName": "string",
  "metadata": {
    "tags": [
      "string"
    ]
  },
  "personId": "string",
  "profile": {
    "displayName": "string"
  },
  "sendInvite": true,
  "sendNotificationEmail": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|firstName|string|false|none|none|
|invite|[Invite](#schemainvite)|false|none|none|
|isFacilitator|boolean|false|none|none|
|isMarker|boolean|false|none|none|
|isReadonly|boolean|false|none|none|
|lastName|string|false|none|none|
|metadata|[UserMetadata](#schemausermetadata)|false|none|none|
|personId|string|false|none|none|
|profile|[UserProfileRequest](#schemauserprofilerequest)|false|none|none|
|sendInvite|boolean|false|none|none|
|sendNotificationEmail|boolean|false|none|none|

<h2 id="tocS_OfferingUserResponse">OfferingUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaofferinguserresponse"></a>
<a id="schema_OfferingUserResponse"></a>
<a id="tocSofferinguserresponse"></a>
<a id="tocsofferinguserresponse"></a>

```json
{
  "avatarUrl": "string",
  "email": "user@example.com",
  "evaluatedBy": [
    "string"
  ],
  "evaluates": [
    "string"
  ],
  "firstName": "string",
  "id": "string",
  "isFacilitator": false,
  "isMarker": false,
  "isReadonly": false,
  "lastName": "string",
  "markedBy": [
    "string"
  ],
  "marks": [
    "string"
  ],
  "personId": "string",
  "profile": {
    "displayName": "string",
    "mobile": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatarUrl|string|false|none|none|
|email|string(email)|false|none|none|
|evaluatedBy|[string]|false|none|none|
|evaluates|[string]|false|none|none|
|firstName|string|false|none|none|
|id|string|false|none|none|
|isFacilitator|boolean|false|none|none|
|isMarker|boolean|false|none|none|
|isReadonly|boolean|false|none|none|
|lastName|string|false|none|none|
|markedBy|[string]|false|none|none|
|marks|[string]|false|none|none|
|personId|string|false|none|none|
|profile|[UserProfile](#schemauserprofile)|false|none|none|

<h2 id="tocS_OpenBadgeClass">OpenBadgeClass</h2>
<!-- backwards compatibility -->
<a id="schemaopenbadgeclass"></a>
<a id="schema_OpenBadgeClass"></a>
<a id="tocSopenbadgeclass"></a>
<a id="tocsopenbadgeclass"></a>

```json
{
  "criteria": {
    "narrative": "string"
  },
  "description": "string",
  "id": "string",
  "image": "string",
  "issuer": "string",
  "name": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|criteria|object|false|none|none|
|description|string|false|none|none|
|id|string|false|none|none|
|image|string|false|none|none|
|issuer|string|false|none|none|
|name|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_OrgRequest">OrgRequest</h2>
<!-- backwards compatibility -->
<a id="schemaorgrequest"></a>
<a id="schema_OrgRequest"></a>
<a id="tocSorgrequest"></a>
<a id="tocsorgrequest"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_OrgResponse">OrgResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorgresponse"></a>
<a id="schema_OrgResponse"></a>
<a id="tocSorgresponse"></a>
<a id="tocsorgresponse"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_PortfolioActivations">PortfolioActivations</h2>
<!-- backwards compatibility -->
<a id="schemaportfolioactivations"></a>
<a id="schema_PortfolioActivations"></a>
<a id="tocSportfolioactivations"></a>
<a id="tocsportfolioactivations"></a>

```json
{
  "contentId": "string",
  "end": "1970-01-01T00:00:00Z",
  "id": "string",
  "info": "string",
  "learnersCount": 0,
  "metadata": {
    "rootContentId": "string"
  },
  "name": "string",
  "start": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentId|string|false|none|none|
|end|string(date-time)|false|none|none|
|id|string|false|none|none|
|info|string|false|none|none|
|learnersCount|number|false|none|number of learners in the offering, excluding facilitators and coaches|
|metadata|object|false|none|none|
|name|string|false|none|none|
|start|string(date-time)|false|none|none|

<h2 id="tocS_PortfolioLicenseResponse">PortfolioLicenseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliolicenseresponse"></a>
<a id="schema_PortfolioLicenseResponse"></a>
<a id="tocSportfoliolicenseresponse"></a>
<a id="tocsportfoliolicenseresponse"></a>

```json
{
  "licenses": [
    "string"
  ],
  "owner": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|licenses|[string]|false|none|none|
|owner|string|false|none|none|

<h2 id="tocS_PortfolioMetadata">PortfolioMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliometadata"></a>
<a id="schema_PortfolioMetadata"></a>
<a id="tocSportfoliometadata"></a>
<a id="tocsportfoliometadata"></a>

```json
{
  "category": "string",
  "level": "string",
  "tags": [
    "string"
  ],
  "topic": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|level|string|false|none|none|
|tags|[string]|false|none|none|
|topic|string|false|none|none|

<h2 id="tocS_PulseAnswer">PulseAnswer</h2>
<!-- backwards compatibility -->
<a id="schemapulseanswer"></a>
<a id="schema_PulseAnswer"></a>
<a id="tocSpulseanswer"></a>
<a id="tocspulseanswer"></a>

```json
{
  "multiChoiceAnswer": [
    {
      "option": "string",
      "value": true
    }
  ],
  "spatialAnswer": [
    {
      "option": "string",
      "value": 0
    }
  ],
  "textAnswer": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|multiChoiceAnswer|[[PulseMCQOption](#schemapulsemcqoption)]|false|none|none|
|spatialAnswer|[[PulseSpatialOption](#schemapulsespatialoption)]|false|none|none|
|textAnswer|string|false|none|none|

<h2 id="tocS_PulseMCQOption">PulseMCQOption</h2>
<!-- backwards compatibility -->
<a id="schemapulsemcqoption"></a>
<a id="schema_PulseMCQOption"></a>
<a id="tocSpulsemcqoption"></a>
<a id="tocspulsemcqoption"></a>

```json
{
  "option": "string",
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|option|string|false|none|none|
|value|boolean|false|none|none|

<h2 id="tocS_PulseResponse">PulseResponse</h2>
<!-- backwards compatibility -->
<a id="schemapulseresponse"></a>
<a id="schema_PulseResponse"></a>
<a id="tocSpulseresponse"></a>
<a id="tocspulseresponse"></a>

```json
{
  "learnerFirstName": "string",
  "learnerId": "string",
  "learnerLastName": "string",
  "pulseBaseId": "string",
  "pulseInstanceId": "string",
  "pulseQuestion": "string",
  "pulseRunDurationMinutes": 0,
  "pulseRunStart": "1970-01-01T00:00:00Z",
  "pulseType": "string",
  "response": {
    "multiChoiceAnswer": [
      {
        "option": "string",
        "value": true
      }
    ],
    "spatialAnswer": [
      {
        "option": "string",
        "value": 0
      }
    ],
    "textAnswer": "string"
  },
  "responseTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|learnerFirstName|string|false|none|none|
|learnerId|string|false|none|none|
|learnerLastName|string|false|none|none|
|pulseBaseId|string|false|none|none|
|pulseInstanceId|string|false|none|none|
|pulseQuestion|string|false|none|none|
|pulseRunDurationMinutes|integer|false|none|none|
|pulseRunStart|string(date-time)|false|none|none|
|pulseType|string|false|none|none|
|response|[PulseAnswer](#schemapulseanswer)|false|none|none|
|responseTime|string(date-time)|false|none|none|

<h2 id="tocS_PulseSpatialOption">PulseSpatialOption</h2>
<!-- backwards compatibility -->
<a id="schemapulsespatialoption"></a>
<a id="schema_PulseSpatialOption"></a>
<a id="tocSpulsespatialoption"></a>
<a id="tocspulsespatialoption"></a>

```json
{
  "option": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|option|string|false|none|none|
|value|number(float)|false|none|none|

<h2 id="tocS_QuizMarkResponse">QuizMarkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquizmarkresponse"></a>
<a id="schema_QuizMarkResponse"></a>
<a id="tocSquizmarkresponse"></a>
<a id="tocsquizmarkresponse"></a>

```json
{
  "attempts": 0,
  "lastAttemptAt": "1970-01-01T00:00:00Z",
  "learnerEmail": "string",
  "learnerFullname": "string",
  "learnerPersonId": "string",
  "mark": "string",
  "quizId": "string",
  "quizTitle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attempts|integer(int32)|false|none|none|
|lastAttemptAt|string(date-time)|false|none|none|
|learnerEmail|string|false|none|none|
|learnerFullname|string|false|none|none|
|learnerPersonId|string|false|none|none|
|mark|string|false|none|none|
|quizId|string|false|none|none|
|quizTitle|string|false|none|none|

<h2 id="tocS_RevokedResponse">RevokedResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevokedresponse"></a>
<a id="schema_RevokedResponse"></a>
<a id="tocSrevokedresponse"></a>
<a id="tocsrevokedresponse"></a>

```json
{
  "badgeId": "string",
  "badgeUrl": "string",
  "revocationReason": "string",
  "revoked": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badgeId|string|false|none|none|
|badgeUrl|string|false|none|none|
|revocationReason|string|false|none|none|
|revoked|boolean|false|none|none|

<h2 id="tocS_SocialNotesResponse">SocialNotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasocialnotesresponse"></a>
<a id="schema_SocialNotesResponse"></a>
<a id="tocSsocialnotesresponse"></a>
<a id="tocssocialnotesresponse"></a>

```json
{
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "pageId": "string",
  "personId": "string",
  "social-note-content": "string",
  "social-note-paragraphId": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|pageId|string|false|none|none|
|personId|string|false|none|none|
|social-note-content|string|false|none|none|
|social-note-paragraphId|string|false|none|none|
|userId|string|false|none|none|

<h2 id="tocS_SubmissionMarkResponse">SubmissionMarkResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubmissionmarkresponse"></a>
<a id="schema_SubmissionMarkResponse"></a>
<a id="tocSsubmissionmarkresponse"></a>
<a id="tocssubmissionmarkresponse"></a>

```json
{
  "assessmentId": "string",
  "assessmentItemDetails": "string",
  "assessmentItemName": "string",
  "courseName": "string",
  "files": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "filename": "string",
      "id": "string",
      "mimetype": "string",
      "size": 0,
      "url": "string"
    }
  ],
  "html": "string",
  "learnerEmail": "string",
  "learnerFirstName": "string",
  "learnerLastName": "string",
  "learnerPersonId": "string",
  "marks": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "feedback": "string",
      "id": "string",
      "mark": "string",
      "markFeedback": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "feedback": "string",
          "feedbackBy": "string",
          "id": "string",
          "mark": "string",
          "markerId": "string"
        }
      ],
      "markedBy": "string",
      "markerId": "string"
    }
  ],
  "status": "string",
  "submissionDateTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessmentId|string|false|none|none|
|assessmentItemDetails|string|false|none|none|
|assessmentItemName|string|false|none|none|
|courseName|string|false|none|none|
|files|[[Document](#schemadocument)]|false|none|none|
|html|string|false|none|none|
|learnerEmail|string|false|none|none|
|learnerFirstName|string|false|none|none|
|learnerLastName|string|false|none|none|
|learnerPersonId|string|false|none|none|
|marks|[[Mark](#schemamark)]|false|none|none|
|status|string|false|none|none|
|submissionDateTime|string(date-time)|false|none|none|

<h2 id="tocS_SuspendedRequest">SuspendedRequest</h2>
<!-- backwards compatibility -->
<a id="schemasuspendedrequest"></a>
<a id="schema_SuspendedRequest"></a>
<a id="tocSsuspendedrequest"></a>
<a id="tocssuspendedrequest"></a>

```json
{
  "suspended": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suspended|boolean|false|none|none|

<h2 id="tocS_ThemeResponse">ThemeResponse</h2>
<!-- backwards compatibility -->
<a id="schemathemeresponse"></a>
<a id="schema_ThemeResponse"></a>
<a id="tocSthemeresponse"></a>
<a id="tocsthemeresponse"></a>

```json
{
  "filter": "string",
  "numberOfQuestions": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|none|
|numberOfQuestions|string|false|none|none|

<h2 id="tocS_TransferRequest">TransferRequest</h2>
<!-- backwards compatibility -->
<a id="schematransferrequest"></a>
<a id="schema_TransferRequest"></a>
<a id="tocStransferrequest"></a>
<a id="tocstransferrequest"></a>

```json
{
  "fromOfferingId": "string",
  "sendInvite": true,
  "toOfferingId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromOfferingId|string|false|none|none|
|sendInvite|boolean|false|none|none|
|toOfferingId|string|false|none|none|

<h2 id="tocS_UnitReactionsAnalyticsResponse">UnitReactionsAnalyticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunitreactionsanalyticsresponse"></a>
<a id="schema_UnitReactionsAnalyticsResponse"></a>
<a id="tocSunitreactionsanalyticsresponse"></a>
<a id="tocsunitreactionsanalyticsresponse"></a>

```json
{
  "feedback": {
    "thumbs-down": 0,
    "thumbs-up": 0
  },
  "pageId": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedback|[UnitReactionsFeedback](#schemaunitreactionsfeedback)|false|none|none|
|pageId|boolean|false|none|none|

<h2 id="tocS_UnitReactionsFeedback">UnitReactionsFeedback</h2>
<!-- backwards compatibility -->
<a id="schemaunitreactionsfeedback"></a>
<a id="schema_UnitReactionsFeedback"></a>
<a id="tocSunitreactionsfeedback"></a>
<a id="tocsunitreactionsfeedback"></a>

```json
{
  "thumbs-down": 0,
  "thumbs-up": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thumbs-down|number|false|none|none|
|thumbs-up|number|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "email": "user@example.com",
  "firstName": "string",
  "lastName": "string",
  "metadata": {
    "tags": [
      "string"
    ]
  },
  "personId": "string",
  "profile": {
    "displayName": "string"
  },
  "sendInvite": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|metadata|[UserMetadata](#schemausermetadata)|false|none|none|
|personId|string|false|none|none|
|profile|[UserProfileRequest](#schemauserprofilerequest)|false|none|none|
|sendInvite|boolean|false|none|none|

<h2 id="tocS_UserBadge">UserBadge</h2>
<!-- backwards compatibility -->
<a id="schemauserbadge"></a>
<a id="schema_UserBadge"></a>
<a id="tocSuserbadge"></a>
<a id="tocsuserbadge"></a>

```json
{
  "awardedAt": "1970-01-01T00:00:00Z",
  "badgeExpiry": {
    "expirationDate": "1970-01-01T00:00:00Z",
    "expires": true
  },
  "badgeUrl": "string",
  "criterias": {
    "hasCompletedCourse": true,
    "hasPassedMandatoryAssessedQuizzes": true
  },
  "description": "string",
  "offeringId": "string",
  "openBadge": {
    "criteria": {
      "narrative": "string"
    },
    "description": "string",
    "id": "string",
    "image": "string",
    "issuer": "string",
    "name": "string",
    "type": "string"
  },
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awardedAt|string(date-time)|false|none|none|
|badgeExpiry|object|false|none|none|
|badgeUrl|string|false|none|none|
|criterias|object|false|none|none|
|description|string|false|none|none|
|offeringId|string|false|none|none|
|openBadge|object|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_UserMetadata">UserMetadata</h2>
<!-- backwards compatibility -->
<a id="schemausermetadata"></a>
<a id="schema_UserMetadata"></a>
<a id="tocSusermetadata"></a>
<a id="tocsusermetadata"></a>

```json
{
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[string]|false|none|none|

<h2 id="tocS_UserPermission">UserPermission</h2>
<!-- backwards compatibility -->
<a id="schemauserpermission"></a>
<a id="schema_UserPermission"></a>
<a id="tocSuserpermission"></a>
<a id="tocsuserpermission"></a>

```json
{
  "email": "string",
  "isBuilder": true,
  "isReviewer": true,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|isBuilder|boolean|false|none|none|
|isReviewer|boolean|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_UserProfile">UserProfile</h2>
<!-- backwards compatibility -->
<a id="schemauserprofile"></a>
<a id="schema_UserProfile"></a>
<a id="tocSuserprofile"></a>
<a id="tocsuserprofile"></a>

```json
{
  "displayName": "string",
  "mobile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|none|
|mobile|string|false|none|none|

<h2 id="tocS_UserProfileRequest">UserProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemauserprofilerequest"></a>
<a id="schema_UserProfileRequest"></a>
<a id="tocSuserprofilerequest"></a>
<a id="tocsuserprofilerequest"></a>

```json
{
  "displayName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|none|

<h2 id="tocS_UserResponse">UserResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserresponse"></a>
<a id="schema_UserResponse"></a>
<a id="tocSuserresponse"></a>
<a id="tocsuserresponse"></a>

```json
{
  "avatarUrl": "string",
  "email": "user@example.com",
  "firstAccessAt": "1970-01-01T00:00:00Z",
  "firstName": "string",
  "id": "string",
  "invite": {
    "url": "string"
  },
  "lastAccessAt": "1970-01-01T00:00:00Z",
  "lastName": "string",
  "metadata": {
    "tags": [
      "string"
    ]
  },
  "personId": "string",
  "profile": {
    "displayName": "string",
    "mobile": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatarUrl|string|false|none|none|
|email|string(email)|false|none|none|
|firstAccessAt|string(date-time)|false|none|none|
|firstName|string|false|none|none|
|id|string|false|none|none|
|invite|[Invite](#schemainvite)|false|none|none|
|lastAccessAt|string(date-time)|false|none|none|
|lastName|string|false|none|none|
|metadata|[UserMetadata](#schemausermetadata)|false|none|none|
|personId|string|false|none|none|
|profile|[UserProfile](#schemauserprofile)|false|none|none|

<h2 id="tocS_httpPost">httpPost</h2>
<!-- backwards compatibility -->
<a id="schemahttppost"></a>
<a id="schema_httpPost"></a>
<a id="tocShttppost"></a>
<a id="tocshttppost"></a>

```json
{
  "attachments": [
    {
      "id": "string",
      "mimetype": "string",
      "size": 0,
      "url": "string"
    }
  ],
  "content": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "email": "string",
  "id": "string",
  "isFacilitatorPost": true,
  "moderation": {
    "isMuted": true,
    "moderator": {
      "avatarUrl": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    },
    "reason": "string"
  },
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[DocumentResponse](#schemadocumentresponse)]|false|none|none|
|content|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|email|string|false|none|none|
|id|string|false|none|none|
|isFacilitatorPost|boolean|false|none|none|
|moderation|[Moderation](#schemamoderation)|false|none|none|
|title|string|false|none|none|
