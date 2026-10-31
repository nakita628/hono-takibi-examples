<h1 id="va-forms">VA Forms v0.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use the VA Forms API to search for VA forms, get the form's PDF link and metadata, and check for new versions.

Visit our VA Lighthouse [Contact Us page](https://developer.va.gov/support) for further assistance.

## Background
This API offers an efficient way to stay up-to-date with the latest VA forms and information. The forms information listed on VA.gov matches the information returned by this API.
- Search by form number, keyword, or title
- Get a link to the form in PDF format
- Get detailed form metadata including the number of pages, related forms, benefit categories, language, and more
- Retrieve the latest date of PDF changes and the SHA256 checksum
- Identify when a form is deleted by the VA

## Technical summary
The VA Forms API collects form data from the official VA Form Repository on a nightly basis.  The Index endpoint can return all available forms or, if an optional query parameter is passed, will return only forms that may relate to the query value. When a valid form name is passed to the Show endpoint, it will return a single form with additional metadata and full revision history. A JSON response is given with the PDF link (if published) and the corresponding form metadata.

### Authentication and authorization
The form information shared by this API is publicly available.  API requests are authorized through a symmetric API token, provided in an HTTP header with name apikey. [Get a sandbox API Key](https://developer.va.gov/apply).

### Testing in sandbox environment
Form data in the sandbox environment is for testing your API only, and is not guaranteed to be up-to-date. This API also has a reduced API rate limit. When you're ready to move to production, be sure to [request a production API key.](https://developer.va.gov/go-live)

### SHA256 revision history
Each form is checked nightly for recent file changes. A corresponding SHA256 checksum is calculated, which provides a record of when the PDF changed and the SHA256 hash that was calculated. This allows end users to know that they have the most recent version and can verify the integrity of a previously downloaded PDF.

### Valid PDF link
Additionally, during the nightly refresh process, the link to the form PDF is verified and the `valid_pdf` metadata is updated accordingly. If marked `true`, the link is valid and is a current form. If marked `false`, the link is either broken or the form has been removed.

### Deleted forms
If the `deleted_at` metadata is set, that means the VA has removed this form from the repository and it is no longer to be used.

Base URLs:

* <a href="https://sandbox-api.va.gov/services/va_forms/v0">https://sandbox-api.va.gov/services/va_forms/v0</a> - VA.gov API sandbox environment

* <a href="https://api.va.gov/services/va_forms/v0">https://api.va.gov/services/va_forms/v0</a> - VA.gov API production environment

# Authentication

* API Key (apikey)
    - Parameter Name: **apikey**, in: header.

<h1 id="va-forms-forms">Forms</h1>

## Returns all VA Forms and their last revision date

<a id="opIdfindForms"></a>

> Code samples

```bash
curl https://example.com/forms \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /forms`

Returns an index of all available VA forms. Optionally, pass a query parameter to filter forms by form number or title.

<h3 id="returns-all-va-forms-and-their-last-revision-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Returns form data based on entered form name.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "benefit_categories": [
          {
            "description": "VA health care",
            "name": "Health care"
          }
        ],
        "deleted_at": "null",
        "first_issued_on": "2016-07-10",
        "form_details_url": "https://www.va.gov/find-forms/about-form-10-10ez",
        "form_name": "10-10EZ",
        "form_tool_intro": "You can apply online instead of filling out and sending us the paper form.",
        "form_tool_url": "https://www.va.gov/health-care/apply/application/introduction",
        "form_type": "benefit",
        "form_usage": "<p>Use VA Form 10-10EZ if you’re a Veteran and want to apply for VA health care. You must be enrolled in...</p>",
        "language": "en",
        "last_revision_on": "2020-01-17",
        "last_sha256_change": "2019-05-30",
        "pages": 5,
        "related_forms": [
          "10-10EZR"
        ],
        "sha256": "6e6465e2e1c89225871daa9b6d86b92d1c263c7b02f98541212af7b35272372b",
        "title": "Instructions and Enrollment Application for Health Benefits",
        "url": "https://www.va.gov/vaforms/medical/pdf/10-10EZ-fillable.pdf",
        "va_form_administration": "Veterans Health Administration",
        "valid_pdf": "true"
      },
      "id": "5403",
      "type": "va_form"
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Invalid authentication credentials"
}
```

> 429 Response

```json
{
  "message": "API rate limit exceeded"
}
```

<h3 id="returns-all-va-forms-and-their-last-revision-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|VA Forms index response|Inline|
|401|Unauthorized|Unauthorized|Inline|
|429|Too Many Requests|Too many requests|Inline|

<h3 id="returns-all-va-forms-and-their-last-revision-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[FormsIndex](#schemaformsindex)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Find form by form name

<a id="opIdfindFormByFormName"></a>

> Code samples

```bash
curl https://example.com/forms/10-10EZ \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /forms/{form_name}`

Returns a single form and the full revision history

<h3 id="find-form-by-form-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|form_name|path|string|true|The VA form_name of the form being requested. The exact form name must be passed, including proper placement of prefixes and/or hyphens.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "benefit_categories": [
        {
          "description": "VA health care",
          "name": "Health care"
        }
      ],
      "created_at": "2021-03-30T16:28:30.338Z",
      "deleted_at": null,
      "first_issued_on": "2016-07-10",
      "form_details_url": "https://www.va.gov/find-forms/about-form-10-10ez",
      "form_name": "10-10EZ",
      "form_tool_intro": "You can apply online instead of filling out and sending us the paper form.",
      "form_tool_url": "https://www.va.gov/health-care/apply/application/introduction",
      "form_type": "benefit",
      "form_usage": "<p>Use VA Form 10-10EZ if you’re a Veteran and want to apply for VA health care. You must be enrolled in...</p>",
      "language": "en",
      "last_revision_on": "2020-01-17",
      "pages": 5,
      "related_forms": [
        "10-10EZR"
      ],
      "sha256": "5fe171299ece147e8b456961a38e17f1391026f26e9e170229317bc95d9827b7",
      "title": "Instructions and Enrollment Application for Health Benefits",
      "url": "https://www.va.gov/vaforms/medical/pdf/10-10EZ-fillable.pdf",
      "va_form_administration": "Veterans Health Administration",
      "valid_pdf": "true",
      "versions": [
        {
          "revision_on": "2012-01-01",
          "sha256": "5fe171299ece147e8b456961a38e17f1391026f26e9e170229317bc95d9827b7"
        }
      ]
    },
    "id": "10-10-EZ",
    "type": "va_form"
  }
}
```

> 401 Response

```json
{
  "message": "Invalid authentication credentials"
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "Form not found"
    }
  ]
}
```

> 429 Response

```json
{
  "message": "API rate limit exceeded"
}
```

<h3 id="find-form-by-form-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|VA Form Show response|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|429|Too Many Requests|Too many requests|Inline|

<h3 id="find-form-by-form-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[FormShow](#schemaformshow)|true|none|Data for a particular VA form, including form version history.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|true|none|none|
|» message|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

# Schemas

<h2 id="tocS_FormShow">FormShow</h2>
<!-- backwards compatibility -->
<a id="schemaformshow"></a>
<a id="schema_FormShow"></a>
<a id="tocSformshow"></a>
<a id="tocsformshow"></a>

```json
{
  "attributes": {
    "benefit_categories": [
      {
        "description": "VA health care",
        "name": "Health care"
      }
    ],
    "created_at": "2021-03-30T16:28:30.338Z",
    "deleted_at": null,
    "first_issued_on": "2016-07-10",
    "form_details_url": "https://www.va.gov/find-forms/about-form-10-10ez",
    "form_name": "10-10EZ",
    "form_tool_intro": "You can apply online instead of filling out and sending us the paper form.",
    "form_tool_url": "https://www.va.gov/health-care/apply/application/introduction",
    "form_type": "benefit",
    "form_usage": "<p>Use VA Form 10-10EZ if you’re a Veteran and want to apply for VA health care. You must be enrolled in...</p>",
    "language": "en",
    "last_revision_on": "2020-01-17",
    "pages": 5,
    "related_forms": [
      "10-10EZR"
    ],
    "sha256": "5fe171299ece147e8b456961a38e17f1391026f26e9e170229317bc95d9827b7",
    "title": "Instructions and Enrollment Application for Health Benefits",
    "url": "https://www.va.gov/vaforms/medical/pdf/10-10EZ-fillable.pdf",
    "va_form_administration": "Veterans Health Administration",
    "valid_pdf": "true",
    "versions": [
      {
        "revision_on": "2012-01-01",
        "sha256": "5fe171299ece147e8b456961a38e17f1391026f26e9e170229317bc95d9827b7"
      }
    ]
  },
  "id": "10-10-EZ",
  "type": "va_form"
}
```

Data for a particular VA form, including form version history.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|id|string|false|none|JSON API identifier|
|type|string|false|none|JSON API type specification|

<h2 id="tocS_FormsIndex">FormsIndex</h2>
<!-- backwards compatibility -->
<a id="schemaformsindex"></a>
<a id="schema_FormsIndex"></a>
<a id="tocSformsindex"></a>
<a id="tocsformsindex"></a>

```json
{
  "attributes": {
    "benefit_categories": [
      {
        "description": "VA health care",
        "name": "Health care"
      }
    ],
    "deleted_at": "null",
    "first_issued_on": "2016-07-10",
    "form_details_url": "https://www.va.gov/find-forms/about-form-10-10ez",
    "form_name": "10-10EZ",
    "form_tool_intro": "You can apply online instead of filling out and sending us the paper form.",
    "form_tool_url": "https://www.va.gov/health-care/apply/application/introduction",
    "form_type": "benefit",
    "form_usage": "<p>Use VA Form 10-10EZ if you’re a Veteran and want to apply for VA health care. You must be enrolled in...</p>",
    "language": "en",
    "last_revision_on": "2020-01-17",
    "last_sha256_change": "2019-05-30",
    "pages": 5,
    "related_forms": [
      "10-10EZR"
    ],
    "sha256": "6e6465e2e1c89225871daa9b6d86b92d1c263c7b02f98541212af7b35272372b",
    "title": "Instructions and Enrollment Application for Health Benefits",
    "url": "https://www.va.gov/vaforms/medical/pdf/10-10EZ-fillable.pdf",
    "va_form_administration": "Veterans Health Administration",
    "valid_pdf": "true"
  },
  "id": "5403",
  "type": "va_form"
}
```

A listing of available VA forms and their location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|id|string|false|none|JSON API identifier|
|type|string|false|none|JSON API type specification|
