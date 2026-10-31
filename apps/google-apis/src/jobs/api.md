<h1 id="cloud-talent-solution-api">Cloud Talent Solution API v3p1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Cloud Talent Solution provides the capability to create, read, update, and delete job postings, as well as search jobs based on keywords and filters.

Base URLs:

* <a href="https://jobs.googleapis.com/">https://jobs.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/talent-solution/job-search/docs/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/jobs|Manage job postings|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/jobs|Manage job postings|

<h1 id="cloud-talent-solution-api-projects">projects</h1>

## jobs.projects.operations.get

<a id="opIdjobs.projects.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3p1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3p1beta1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="jobsprojectsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource.|
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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="jobsprojectsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/jobs ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/jobs )
</aside>

## jobs.projects.jobs.delete

<a id="opIdjobs.projects.jobs.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3p1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v3p1beta1/{name}`

Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

<h3 id="jobsprojectsjobsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the job to be deleted. The format is "projects/{project_id}/jobs/{job_id}", for example, "projects/api-test-project/jobs/1234".|
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

<h3 id="jobsprojectsjobsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/jobs ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/jobs )
</aside>

## jobs.projects.jobs.patch

<a id="opIdjobs.projects.jobs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3p1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "job": {
      "addresses": [
        "string"
      ],
      "applicationInfo": {
        "emails": [
          "string"
        ],
        "instruction": "string",
        "uris": [
          "string"
        ]
      },
      "companyDisplayName": "string",
      "companyName": "string",
      "compensationInfo": {
        "annualizedBaseCompensationRange": {
          "maxCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "minCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "annualizedTotalCompensationRange": {
          "maxCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "minCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "entries": [
          {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "description": "string",
            "expectedUnitsPerYear": 0,
            "range": {
              "maxCompensation": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "minCompensation": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            },
            "type": "COMPENSATION_TYPE_UNSPECIFIED",
            "unit": "COMPENSATION_UNIT_UNSPECIFIED"
          }
        ]
      },
      "customAttributes": {
        "property1": {
          "filterable": true,
          "longValues": [
            "string"
          ],
          "stringValues": [
            "string"
          ]
        },
        "property2": {
          "filterable": true,
          "longValues": [
            "string"
          ],
          "stringValues": [
            "string"
          ]
        }
      },
      "degreeTypes": [
        "DEGREE_TYPE_UNSPECIFIED"
      ],
      "department": "string",
      "derivedInfo": {
        "jobCategories": [
          "JOB_CATEGORY_UNSPECIFIED"
        ],
        "locations": [
          {
            "latLng": {
              "latitude": 0,
              "longitude": 0
            },
            "locationType": "LOCATION_TYPE_UNSPECIFIED",
            "postalAddress": {
              "addressLines": [
                "string"
              ],
              "administrativeArea": "string",
              "languageCode": "string",
              "locality": "string",
              "organization": "string",
              "postalCode": "string",
              "recipients": [
                "string"
              ],
              "regionCode": "string",
              "revision": 0,
              "sortingCode": "string",
              "sublocality": "string"
            },
            "radiusInMiles": 0
          }
        ]
      },
      "description": "string",
      "employmentTypes": [
        "EMPLOYMENT_TYPE_UNSPECIFIED"
      ],
      "incentives": "string",
      "jobBenefits": [
        "JOB_BENEFIT_UNSPECIFIED"
      ],
      "jobEndTime": "string",
      "jobLevel": "JOB_LEVEL_UNSPECIFIED",
      "jobStartTime": "string",
      "languageCode": "string",
      "name": "string",
      "postingCreateTime": "string",
      "postingExpireTime": "string",
      "postingPublishTime": "string",
      "postingRegion": "POSTING_REGION_UNSPECIFIED",
      "postingUpdateTime": "string",
      "processingOptions": {
        "disableStreetAddressResolution": true,
        "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
      },
      "promotionValue": 0,
      "qualifications": "string",
      "requisitionId": "string",
      "responsibilities": "string",
      "title": "string",
      "visibility": "VISIBILITY_UNSPECIFIED"
    },
    "updateMask": "string"
  }'
```

`PATCH /v3p1beta1/{name}`

Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

> Body parameter

```json
{
  "job": {
    "addresses": [
      "string"
    ],
    "applicationInfo": {
      "emails": [
        "string"
      ],
      "instruction": "string",
      "uris": [
        "string"
      ]
    },
    "companyDisplayName": "string",
    "companyName": "string",
    "compensationInfo": {
      "annualizedBaseCompensationRange": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "annualizedTotalCompensationRange": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "entries": [
        {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "description": "string",
          "expectedUnitsPerYear": 0,
          "range": {
            "maxCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "minCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "type": "COMPENSATION_TYPE_UNSPECIFIED",
          "unit": "COMPENSATION_UNIT_UNSPECIFIED"
        }
      ]
    },
    "customAttributes": {
      "property1": {
        "filterable": true,
        "longValues": [
          "string"
        ],
        "stringValues": [
          "string"
        ]
      },
      "property2": {
        "filterable": true,
        "longValues": [
          "string"
        ],
        "stringValues": [
          "string"
        ]
      }
    },
    "degreeTypes": [
      "DEGREE_TYPE_UNSPECIFIED"
    ],
    "department": "string",
    "derivedInfo": {
      "jobCategories": [
        "JOB_CATEGORY_UNSPECIFIED"
      ],
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          },
          "locationType": "LOCATION_TYPE_UNSPECIFIED",
          "postalAddress": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "radiusInMiles": 0
        }
      ]
    },
    "description": "string",
    "employmentTypes": [
      "EMPLOYMENT_TYPE_UNSPECIFIED"
    ],
    "incentives": "string",
    "jobBenefits": [
      "JOB_BENEFIT_UNSPECIFIED"
    ],
    "jobEndTime": "string",
    "jobLevel": "JOB_LEVEL_UNSPECIFIED",
    "jobStartTime": "string",
    "languageCode": "string",
    "name": "string",
    "postingCreateTime": "string",
    "postingExpireTime": "string",
    "postingPublishTime": "string",
    "postingRegion": "POSTING_REGION_UNSPECIFIED",
    "postingUpdateTime": "string",
    "processingOptions": {
      "disableStreetAddressResolution": true,
      "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
    },
    "promotionValue": 0,
    "qualifications": "string",
    "requisitionId": "string",
    "responsibilities": "string",
    "title": "string",
    "visibility": "VISIBILITY_UNSPECIFIED"
  },
  "updateMask": "string"
}
```

<h3 id="jobsprojectsjobspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required during job update. The resource name for the job. This is generated by the service when a job is created. The format is "projects/{project_id}/jobs/{job_id}", for example, "projects/api-test-project/jobs/1234". Use of this field in job queries and API calls is preferred over the use of requisition_id since this value is unique.|
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
|body|body|[UpdateJobRequest](#schemaupdatejobrequest)|false|none|
|» job|body|[Job](#schemajob)|false|Required. The Job to be updated.|
|» updateMask|body|string(google-fieldmask)|false|Optional but strongly recommended to be provided for the best service experience. If update_mask is provided, only the specified fields in job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported.|

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
  "addresses": [
    "string"
  ],
  "applicationInfo": {
    "emails": [
      "string"
    ],
    "instruction": "string",
    "uris": [
      "string"
    ]
  },
  "companyDisplayName": "string",
  "companyName": "string",
  "compensationInfo": {
    "annualizedBaseCompensationRange": {
      "maxCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "minCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    },
    "annualizedTotalCompensationRange": {
      "maxCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "minCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    },
    "entries": [
      {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "description": "string",
        "expectedUnitsPerYear": 0,
        "range": {
          "maxCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "minCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "type": "COMPENSATION_TYPE_UNSPECIFIED",
        "unit": "COMPENSATION_UNIT_UNSPECIFIED"
      }
    ]
  },
  "customAttributes": {
    "property1": {
      "filterable": true,
      "longValues": [
        "string"
      ],
      "stringValues": [
        "string"
      ]
    },
    "property2": {
      "filterable": true,
      "longValues": [
        "string"
      ],
      "stringValues": [
        "string"
      ]
    }
  },
  "degreeTypes": [
    "DEGREE_TYPE_UNSPECIFIED"
  ],
  "department": "string",
  "derivedInfo": {
    "jobCategories": [
      "JOB_CATEGORY_UNSPECIFIED"
    ],
    "locations": [
      {
        "latLng": {
          "latitude": 0,
          "longitude": 0
        },
        "locationType": "LOCATION_TYPE_UNSPECIFIED",
        "postalAddress": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "radiusInMiles": 0
      }
    ]
  },
  "description": "string",
  "employmentTypes": [
    "EMPLOYMENT_TYPE_UNSPECIFIED"
  ],
  "incentives": "string",
  "jobBenefits": [
    "JOB_BENEFIT_UNSPECIFIED"
  ],
  "jobEndTime": "string",
  "jobLevel": "JOB_LEVEL_UNSPECIFIED",
  "jobStartTime": "string",
  "languageCode": "string",
  "name": "string",
  "postingCreateTime": "string",
  "postingExpireTime": "string",
  "postingPublishTime": "string",
  "postingRegion": "POSTING_REGION_UNSPECIFIED",
  "postingUpdateTime": "string",
  "processingOptions": {
    "disableStreetAddressResolution": true,
    "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
  },
  "promotionValue": 0,
  "qualifications": "string",
  "requisitionId": "string",
  "responsibilities": "string",
  "title": "string",
  "visibility": "VISIBILITY_UNSPECIFIED"
}
```

<h3 id="jobsprojectsjobspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/jobs ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/jobs )
</aside>

## jobs.projects.complete

<a id="opIdjobs.projects.complete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3p1beta1/string:complete \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3p1beta1/{name}:complete`

Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.

<h3 id="jobsprojectscomplete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of project the completion is performed within. The format is "projects/{project_id}", for example, "projects/api-test-project".|
|companyName|query|string|false|Optional. If provided, restricts completion to specified company. The format is "projects/{project_id}/companies/{company_id}", for example, "projects/api-test-project/companies/foo".|
|languageCode|query|string|false|Deprecated. Use language_codes instead. Optional. The language of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). For CompletionType.JOB_TITLE type, only open jobs with the same language_code are returned. For CompletionType.COMPANY_NAME type, only companies having open jobs with the same language_code are returned. For CompletionType.COMBINED type, only open jobs with the same language_code or companies having open jobs with the same language_code are returned. The maximum number of allowed characters is 255.|
|languageCodes|query|[string]|false|Optional. The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). For CompletionType.JOB_TITLE type, only open jobs with the same language_codes are returned. For CompletionType.COMPANY_NAME type, only companies having open jobs with the same language_codes are returned. For CompletionType.COMBINED type, only open jobs with the same language_codes or companies having open jobs with the same language_codes are returned. The maximum number of allowed characters is 255.|
|pageSize|query|integer|false|Required. Completion result count. The maximum allowed page size is 10.|
|query|query|string|false|Required. The query used to generate suggestions. The maximum number of allowed characters is 255.|
|scope|query|string|false|Optional. The scope of the completion. The defaults is CompletionScope.PUBLIC.|
|type|query|string|false|Optional. The completion topic. The default is CompletionType.COMBINED.|
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
|scope|COMPLETION_SCOPE_UNSPECIFIED|
|scope|TENANT|
|scope|PUBLIC|
|type|COMPLETION_TYPE_UNSPECIFIED|
|type|JOB_TITLE|
|type|COMPANY_NAME|
|type|COMBINED|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "completionResults": [
    {
      "imageUri": "string",
      "suggestion": "string",
      "type": "COMPLETION_TYPE_UNSPECIFIED"
    }
  ],
  "metadata": {
    "requestId": "string"
  }
}
```

<h3 id="jobsprojectscomplete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CompleteQueryResponse](#schemacompletequeryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/jobs ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/jobs )
</aside>

## jobs.projects.clientEvents.create

<a id="opIdjobs.projects.clientEvents.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3p1beta1/string/clientEvents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientEvent": {
      "createTime": "string",
      "eventId": "string",
      "extraInfo": {
        "property1": "string",
        "property2": "string"
      },
      "jobEvent": {
        "jobs": [
          "string"
        ],
        "type": "JOB_EVENT_TYPE_UNSPECIFIED"
      },
      "parentEventId": "string",
      "requestId": "string"
    }
  }'
```

`POST /v3p1beta1/{parent}/clientEvents`

Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.

> Body parameter

```json
{
  "clientEvent": {
    "createTime": "string",
    "eventId": "string",
    "extraInfo": {
      "property1": "string",
      "property2": "string"
    },
    "jobEvent": {
      "jobs": [
        "string"
      ],
      "type": "JOB_EVENT_TYPE_UNSPECIFIED"
    },
    "parentEventId": "string",
    "requestId": "string"
  }
}
```

<h3 id="jobsprojectsclienteventscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent project name.|
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
|body|body|[CreateClientEventRequest](#schemacreateclienteventrequest)|false|none|
|» clientEvent|body|[ClientEvent](#schemaclientevent)|false|Required. Events issued when end user interacts with customer's application that uses Cloud Talent Solution.|

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
  "createTime": "string",
  "eventId": "string",
  "extraInfo": {
    "property1": "string",
    "property2": "string"
  },
  "jobEvent": {
    "jobs": [
      "string"
    ],
    "type": "JOB_EVENT_TYPE_UNSPECIFIED"
  },
  "parentEventId": "string",
  "requestId": "string"
}
```

<h3 id="jobsprojectsclienteventscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ClientEvent](#schemaclientevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/jobs ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/jobs )
</aside>

## jobs.projects.companies.list

<a id="opIdjobs.projects.companies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3p1beta1/string/companies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3p1beta1/{parent}/companies`

Lists all companies associated with the service account.

<h3 id="jobsprojectscompanieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the project under which the company is created. The format is "projects/{project_id}", for example, "projects/api-test-project".|
|pageSize|query|integer|false|Optional. The maximum number of companies to be returned, at most 100. Default is 100 if a non-positive number is provided.|
|pageToken|query|string|false|Optional. The starting indicator from which to return results.|
|requireOpenJobs|query|boolean|false|Optional. Set to true if the companies requested must have open jobs. Defaults to false. If true, at most page_size of companies are fetched, among which only those with open jobs are returned.|
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
  "companies": [
    {
      "careerSiteUri": "string",
      "derivedInfo": {
        "headquartersLocation": {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          },
          "locationType": "LOCATION_TYPE_UNSPECIFIED",
          "postalAddress": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "radiusInMiles": 0
        }
      },
      "displayName": "string",
      "eeoText": "string",
      "externalId": "string",
      "headquartersAddress": "string",
      "hiringAgency": true,
      "imageUri": "string",
      "keywordSearchableJobCustomAttributes": [
        "string"
      ],
      "name": "string",
      "size": "COMPANY_SIZE_UNSPECIFIED",
      "suspended": true,
      "websiteUri": "string"
    }
  ],
  "metadata": {
    "requestId": "string"
  },
  "nextPageToken": "string"
}
```

<h3 id="jobsprojectscompanieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCompaniesResponse](#schemalistcompaniesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/jobs ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/jobs )
</aside>

## jobs.projects.companies.create

<a id="opIdjobs.projects.companies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3p1beta1/string/companies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company": {
      "careerSiteUri": "string",
      "derivedInfo": {
        "headquartersLocation": {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          },
          "locationType": "LOCATION_TYPE_UNSPECIFIED",
          "postalAddress": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "radiusInMiles": 0
        }
      },
      "displayName": "string",
      "eeoText": "string",
      "externalId": "string",
      "headquartersAddress": "string",
      "hiringAgency": true,
      "imageUri": "string",
      "keywordSearchableJobCustomAttributes": [
        "string"
      ],
      "name": "string",
      "size": "COMPANY_SIZE_UNSPECIFIED",
      "suspended": true,
      "websiteUri": "string"
    }
  }'
```

`POST /v3p1beta1/{parent}/companies`

Creates a new company entity.

> Body parameter

```json
{
  "company": {
    "careerSiteUri": "string",
    "derivedInfo": {
      "headquartersLocation": {
        "latLng": {
          "latitude": 0,
          "longitude": 0
        },
        "locationType": "LOCATION_TYPE_UNSPECIFIED",
        "postalAddress": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "radiusInMiles": 0
      }
    },
    "displayName": "string",
    "eeoText": "string",
    "externalId": "string",
    "headquartersAddress": "string",
    "hiringAgency": true,
    "imageUri": "string",
    "keywordSearchableJobCustomAttributes": [
      "string"
    ],
    "name": "string",
    "size": "COMPANY_SIZE_UNSPECIFIED",
    "suspended": true,
    "websiteUri": "string"
  }
}
```

<h3 id="jobsprojectscompaniescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the project under which the company is created. The format is "projects/{project_id}", for example, "projects/api-test-project".|
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
|body|body|[CreateCompanyRequest](#schemacreatecompanyrequest)|false|none|
|» company|body|[Company](#schemacompany)|false|Required. The company to be created.|

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
  "careerSiteUri": "string",
  "derivedInfo": {
    "headquartersLocation": {
      "latLng": {
        "latitude": 0,
        "longitude": 0
      },
      "locationType": "LOCATION_TYPE_UNSPECIFIED",
      "postalAddress": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "radiusInMiles": 0
    }
  },
  "displayName": "string",
  "eeoText": "string",
  "externalId": "string",
  "headquartersAddress": "string",
  "hiringAgency": true,
  "imageUri": "string",
  "keywordSearchableJobCustomAttributes": [
    "string"
  ],
  "name": "string",
  "size": "COMPANY_SIZE_UNSPECIFIED",
  "suspended": true,
  "websiteUri": "string"
}
```

<h3 id="jobsprojectscompaniescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Company](#schemacompany)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/jobs ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/jobs )
</aside>

## jobs.projects.jobs.list

<a id="opIdjobs.projects.jobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3p1beta1/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3p1beta1/{parent}/jobs`

Lists jobs by filter.

<h3 id="jobsprojectsjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the project under which the job is created. The format is "projects/{project_id}", for example, "projects/api-test-project".|
|filter|query|string|false|Required. The filter string specifies the jobs to be enumerated. Supported operator: =, AND The fields eligible for filtering are: * `companyName` * `requisitionId` * `status` Available values: OPEN, EXPIRED, ALL. Defaults to OPEN if no value is specified. At least one of `companyName` and `requisitionId` must present or an INVALID_ARGUMENT error is thrown. Sample Query: * companyName = "projects/api-test-project/companies/123" * companyName = "projects/api-test-project/companies/123" AND requisitionId = "req-1" * companyName = "projects/api-test-project/companies/123" AND status = "EXPIRED" * requisitionId = "req-1" * requisitionId = "req-1" AND status = "EXPIRED"|
|jobView|query|string|false|Optional. The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_FULL if no value is specified.|
|pageSize|query|integer|false|Optional. The maximum number of jobs to be returned per page of results. If job_view is set to JobView.JOB_VIEW_ID_ONLY, the maximum allowed page size is 1000. Otherwise, the maximum allowed page size is 100. Default is 100 if empty or a number < 1 is specified.|
|pageToken|query|string|false|Optional. The starting point of a query result.|
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
|jobView|JOB_VIEW_UNSPECIFIED|
|jobView|JOB_VIEW_ID_ONLY|
|jobView|JOB_VIEW_MINIMAL|
|jobView|JOB_VIEW_SMALL|
|jobView|JOB_VIEW_FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "jobs": [
    {
      "addresses": [
        "string"
      ],
      "applicationInfo": {
        "emails": [
          "string"
        ],
        "instruction": "string",
        "uris": [
          "string"
        ]
      },
      "companyDisplayName": "string",
      "companyName": "string",
      "compensationInfo": {
        "annualizedBaseCompensationRange": {
          "maxCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "minCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "annualizedTotalCompensationRange": {
          "maxCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "minCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "entries": [
          {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "description": "string",
            "expectedUnitsPerYear": 0,
            "range": {
              "maxCompensation": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "minCompensation": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            },
            "type": "COMPENSATION_TYPE_UNSPECIFIED",
            "unit": "COMPENSATION_UNIT_UNSPECIFIED"
          }
        ]
      },
      "customAttributes": {
        "property1": {
          "filterable": true,
          "longValues": [
            "string"
          ],
          "stringValues": [
            "string"
          ]
        },
        "property2": {
          "filterable": true,
          "longValues": [
            "string"
          ],
          "stringValues": [
            "string"
          ]
        }
      },
      "degreeTypes": [
        "DEGREE_TYPE_UNSPECIFIED"
      ],
      "department": "string",
      "derivedInfo": {
        "jobCategories": [
          "JOB_CATEGORY_UNSPECIFIED"
        ],
        "locations": [
          {
            "latLng": {
              "latitude": 0,
              "longitude": 0
            },
            "locationType": "LOCATION_TYPE_UNSPECIFIED",
            "postalAddress": {
              "addressLines": [
                "string"
              ],
              "administrativeArea": "string",
              "languageCode": "string",
              "locality": "string",
              "organization": "string",
              "postalCode": "string",
              "recipients": [
                "string"
              ],
              "regionCode": "string",
              "revision": 0,
              "sortingCode": "string",
              "sublocality": "string"
            },
            "radiusInMiles": 0
          }
        ]
      },
      "description": "string",
      "employmentTypes": [
        "EMPLOYMENT_TYPE_UNSPECIFIED"
      ],
      "incentives": "string",
      "jobBenefits": [
        "JOB_BENEFIT_UNSPECIFIED"
      ],
      "jobEndTime": "string",
      "jobLevel": "JOB_LEVEL_UNSPECIFIED",
      "jobStartTime": "string",
      "languageCode": "string",
      "name": "string",
      "postingCreateTime": "string",
      "postingExpireTime": "string",
      "postingPublishTime": "string",
      "postingRegion": "POSTING_REGION_UNSPECIFIED",
      "postingUpdateTime": "string",
      "processingOptions": {
        "disableStreetAddressResolution": true,
        "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
      },
      "promotionValue": 0,
      "qualifications": "string",
      "requisitionId": "string",
      "responsibilities": "string",
      "title": "string",
      "visibility": "VISIBILITY_UNSPECIFIED"
    }
  ],
  "metadata": {
    "requestId": "string"
  },
  "nextPageToken": "string"
}
```

<h3 id="jobsprojectsjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListJobsResponse](#schemalistjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/jobs ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/jobs )
</aside>

## jobs.projects.jobs.create

<a id="opIdjobs.projects.jobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3p1beta1/string/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "job": {
      "addresses": [
        "string"
      ],
      "applicationInfo": {
        "emails": [
          "string"
        ],
        "instruction": "string",
        "uris": [
          "string"
        ]
      },
      "companyDisplayName": "string",
      "companyName": "string",
      "compensationInfo": {
        "annualizedBaseCompensationRange": {
          "maxCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "minCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "annualizedTotalCompensationRange": {
          "maxCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "minCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "entries": [
          {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "description": "string",
            "expectedUnitsPerYear": 0,
            "range": {
              "maxCompensation": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "minCompensation": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            },
            "type": "COMPENSATION_TYPE_UNSPECIFIED",
            "unit": "COMPENSATION_UNIT_UNSPECIFIED"
          }
        ]
      },
      "customAttributes": {
        "property1": {
          "filterable": true,
          "longValues": [
            "string"
          ],
          "stringValues": [
            "string"
          ]
        },
        "property2": {
          "filterable": true,
          "longValues": [
            "string"
          ],
          "stringValues": [
            "string"
          ]
        }
      },
      "degreeTypes": [
        "DEGREE_TYPE_UNSPECIFIED"
      ],
      "department": "string",
      "derivedInfo": {
        "jobCategories": [
          "JOB_CATEGORY_UNSPECIFIED"
        ],
        "locations": [
          {
            "latLng": {
              "latitude": 0,
              "longitude": 0
            },
            "locationType": "LOCATION_TYPE_UNSPECIFIED",
            "postalAddress": {
              "addressLines": [
                "string"
              ],
              "administrativeArea": "string",
              "languageCode": "string",
              "locality": "string",
              "organization": "string",
              "postalCode": "string",
              "recipients": [
                "string"
              ],
              "regionCode": "string",
              "revision": 0,
              "sortingCode": "string",
              "sublocality": "string"
            },
            "radiusInMiles": 0
          }
        ]
      },
      "description": "string",
      "employmentTypes": [
        "EMPLOYMENT_TYPE_UNSPECIFIED"
      ],
      "incentives": "string",
      "jobBenefits": [
        "JOB_BENEFIT_UNSPECIFIED"
      ],
      "jobEndTime": "string",
      "jobLevel": "JOB_LEVEL_UNSPECIFIED",
      "jobStartTime": "string",
      "languageCode": "string",
      "name": "string",
      "postingCreateTime": "string",
      "postingExpireTime": "string",
      "postingPublishTime": "string",
      "postingRegion": "POSTING_REGION_UNSPECIFIED",
      "postingUpdateTime": "string",
      "processingOptions": {
        "disableStreetAddressResolution": true,
        "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
      },
      "promotionValue": 0,
      "qualifications": "string",
      "requisitionId": "string",
      "responsibilities": "string",
      "title": "string",
      "visibility": "VISIBILITY_UNSPECIFIED"
    }
  }'
```

`POST /v3p1beta1/{parent}/jobs`

Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

> Body parameter

```json
{
  "job": {
    "addresses": [
      "string"
    ],
    "applicationInfo": {
      "emails": [
        "string"
      ],
      "instruction": "string",
      "uris": [
        "string"
      ]
    },
    "companyDisplayName": "string",
    "companyName": "string",
    "compensationInfo": {
      "annualizedBaseCompensationRange": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "annualizedTotalCompensationRange": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "entries": [
        {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "description": "string",
          "expectedUnitsPerYear": 0,
          "range": {
            "maxCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "minCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "type": "COMPENSATION_TYPE_UNSPECIFIED",
          "unit": "COMPENSATION_UNIT_UNSPECIFIED"
        }
      ]
    },
    "customAttributes": {
      "property1": {
        "filterable": true,
        "longValues": [
          "string"
        ],
        "stringValues": [
          "string"
        ]
      },
      "property2": {
        "filterable": true,
        "longValues": [
          "string"
        ],
        "stringValues": [
          "string"
        ]
      }
    },
    "degreeTypes": [
      "DEGREE_TYPE_UNSPECIFIED"
    ],
    "department": "string",
    "derivedInfo": {
      "jobCategories": [
        "JOB_CATEGORY_UNSPECIFIED"
      ],
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          },
          "locationType": "LOCATION_TYPE_UNSPECIFIED",
          "postalAddress": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "radiusInMiles": 0
        }
      ]
    },
    "description": "string",
    "employmentTypes": [
      "EMPLOYMENT_TYPE_UNSPECIFIED"
    ],
    "incentives": "string",
    "jobBenefits": [
      "JOB_BENEFIT_UNSPECIFIED"
    ],
    "jobEndTime": "string",
    "jobLevel": "JOB_LEVEL_UNSPECIFIED",
    "jobStartTime": "string",
    "languageCode": "string",
    "name": "string",
    "postingCreateTime": "string",
    "postingExpireTime": "string",
    "postingPublishTime": "string",
    "postingRegion": "POSTING_REGION_UNSPECIFIED",
    "postingUpdateTime": "string",
    "processingOptions": {
      "disableStreetAddressResolution": true,
      "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
    },
    "promotionValue": 0,
    "qualifications": "string",
    "requisitionId": "string",
    "responsibilities": "string",
    "title": "string",
    "visibility": "VISIBILITY_UNSPECIFIED"
  }
}
```

<h3 id="jobsprojectsjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the project under which the job is created. The format is "projects/{project_id}", for example, "projects/api-test-project".|
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
|body|body|[CreateJobRequest](#schemacreatejobrequest)|false|none|
|» job|body|[Job](#schemajob)|false|Required. The Job to be created.|

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
  "addresses": [
    "string"
  ],
  "applicationInfo": {
    "emails": [
      "string"
    ],
    "instruction": "string",
    "uris": [
      "string"
    ]
  },
  "companyDisplayName": "string",
  "companyName": "string",
  "compensationInfo": {
    "annualizedBaseCompensationRange": {
      "maxCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "minCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    },
    "annualizedTotalCompensationRange": {
      "maxCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "minCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    },
    "entries": [
      {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "description": "string",
        "expectedUnitsPerYear": 0,
        "range": {
          "maxCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "minCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "type": "COMPENSATION_TYPE_UNSPECIFIED",
        "unit": "COMPENSATION_UNIT_UNSPECIFIED"
      }
    ]
  },
  "customAttributes": {
    "property1": {
      "filterable": true,
      "longValues": [
        "string"
      ],
      "stringValues": [
        "string"
      ]
    },
    "property2": {
      "filterable": true,
      "longValues": [
        "string"
      ],
      "stringValues": [
        "string"
      ]
    }
  },
  "degreeTypes": [
    "DEGREE_TYPE_UNSPECIFIED"
  ],
  "department": "string",
  "derivedInfo": {
    "jobCategories": [
      "JOB_CATEGORY_UNSPECIFIED"
    ],
    "locations": [
      {
        "latLng": {
          "latitude": 0,
          "longitude": 0
        },
        "locationType": "LOCATION_TYPE_UNSPECIFIED",
        "postalAddress": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "radiusInMiles": 0
      }
    ]
  },
  "description": "string",
  "employmentTypes": [
    "EMPLOYMENT_TYPE_UNSPECIFIED"
  ],
  "incentives": "string",
  "jobBenefits": [
    "JOB_BENEFIT_UNSPECIFIED"
  ],
  "jobEndTime": "string",
  "jobLevel": "JOB_LEVEL_UNSPECIFIED",
  "jobStartTime": "string",
  "languageCode": "string",
  "name": "string",
  "postingCreateTime": "string",
  "postingExpireTime": "string",
  "postingPublishTime": "string",
  "postingRegion": "POSTING_REGION_UNSPECIFIED",
  "postingUpdateTime": "string",
  "processingOptions": {
    "disableStreetAddressResolution": true,
    "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
  },
  "promotionValue": 0,
  "qualifications": "string",
  "requisitionId": "string",
  "responsibilities": "string",
  "title": "string",
  "visibility": "VISIBILITY_UNSPECIFIED"
}
```

<h3 id="jobsprojectsjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/jobs ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/jobs )
</aside>

## jobs.projects.jobs.batchDelete

<a id="opIdjobs.projects.jobs.batchDelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3p1beta1/string/jobs:batchDelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filter": "string"
  }'
```

`POST /v3p1beta1/{parent}/jobs:batchDelete`

Deletes a list of Jobs by filter.

> Body parameter

```json
{
  "filter": "string"
}
```

<h3 id="jobsprojectsjobsbatchdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the project under which the job is created. The format is "projects/{project_id}", for example, "projects/api-test-project".|
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
|body|body|[BatchDeleteJobsRequest](#schemabatchdeletejobsrequest)|false|none|
|» filter|body|string|false|Required. The filter string specifies the jobs to be deleted. Supported operator: =, AND The fields eligible for filtering are: * `companyName` (Required) * `requisitionId` (Required) Sample Query: companyName = "projects/api-test-project/companies/123" AND requisitionId = "req-1"|

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

<h3 id="jobsprojectsjobsbatchdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/jobs ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/jobs )
</aside>

## jobs.projects.jobs.search

<a id="opIdjobs.projects.jobs.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3p1beta1/string/jobs:search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customRankingInfo": {
      "importanceLevel": "IMPORTANCE_LEVEL_UNSPECIFIED",
      "rankingExpression": "string"
    },
    "disableKeywordMatch": true,
    "diversificationLevel": "DIVERSIFICATION_LEVEL_UNSPECIFIED",
    "enableBroadening": true,
    "histogramFacets": {
      "compensationHistogramFacets": [
        {
          "bucketingOption": {
            "bucketBounds": [
              0
            ],
            "requiresMinMax": true
          },
          "type": "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
        }
      ],
      "customAttributeHistogramFacets": [
        {
          "key": "string",
          "longValueHistogramBucketingOption": {
            "bucketBounds": [
              0
            ],
            "requiresMinMax": true
          },
          "stringValueHistogram": true
        }
      ],
      "simpleHistogramFacets": [
        "SEARCH_TYPE_UNSPECIFIED"
      ]
    },
    "histogramQueries": [
      {
        "histogramQuery": "string"
      }
    ],
    "jobQuery": {
      "commuteFilter": {
        "allowImpreciseAddresses": true,
        "commuteMethod": "COMMUTE_METHOD_UNSPECIFIED",
        "departureTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "roadTraffic": "ROAD_TRAFFIC_UNSPECIFIED",
        "startCoordinates": {
          "latitude": 0,
          "longitude": 0
        },
        "travelDuration": "string"
      },
      "companyDisplayNames": [
        "string"
      ],
      "companyNames": [
        "string"
      ],
      "compensationFilter": {
        "includeJobsWithUnspecifiedCompensationRange": true,
        "range": {
          "maxCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "minCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "type": "FILTER_TYPE_UNSPECIFIED",
        "units": [
          "COMPENSATION_UNIT_UNSPECIFIED"
        ]
      },
      "customAttributeFilter": "string",
      "disableSpellCheck": true,
      "employmentTypes": [
        "EMPLOYMENT_TYPE_UNSPECIFIED"
      ],
      "excludedJobs": [
        "string"
      ],
      "jobCategories": [
        "JOB_CATEGORY_UNSPECIFIED"
      ],
      "languageCodes": [
        "string"
      ],
      "locationFilters": [
        {
          "address": "string",
          "distanceInMiles": 0,
          "latLng": {
            "latitude": 0,
            "longitude": 0
          },
          "regionCode": "string",
          "telecommutePreference": "TELECOMMUTE_PREFERENCE_UNSPECIFIED"
        }
      ],
      "publishTimeRange": {
        "endTime": "string",
        "startTime": "string"
      },
      "query": "string",
      "queryLanguageCode": "string"
    },
    "jobView": "JOB_VIEW_UNSPECIFIED",
    "offset": 0,
    "orderBy": "string",
    "pageSize": 0,
    "pageToken": "string",
    "requestMetadata": {
      "deviceInfo": {
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "id": "string"
      },
      "domain": "string",
      "sessionId": "string",
      "userId": "string"
    },
    "requirePreciseResultSize": true,
    "searchMode": "SEARCH_MODE_UNSPECIFIED"
  }'
```

`POST /v3p1beta1/{parent}/jobs:search`

Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.

> Body parameter

```json
{
  "customRankingInfo": {
    "importanceLevel": "IMPORTANCE_LEVEL_UNSPECIFIED",
    "rankingExpression": "string"
  },
  "disableKeywordMatch": true,
  "diversificationLevel": "DIVERSIFICATION_LEVEL_UNSPECIFIED",
  "enableBroadening": true,
  "histogramFacets": {
    "compensationHistogramFacets": [
      {
        "bucketingOption": {
          "bucketBounds": [
            0
          ],
          "requiresMinMax": true
        },
        "type": "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
      }
    ],
    "customAttributeHistogramFacets": [
      {
        "key": "string",
        "longValueHistogramBucketingOption": {
          "bucketBounds": [
            0
          ],
          "requiresMinMax": true
        },
        "stringValueHistogram": true
      }
    ],
    "simpleHistogramFacets": [
      "SEARCH_TYPE_UNSPECIFIED"
    ]
  },
  "histogramQueries": [
    {
      "histogramQuery": "string"
    }
  ],
  "jobQuery": {
    "commuteFilter": {
      "allowImpreciseAddresses": true,
      "commuteMethod": "COMMUTE_METHOD_UNSPECIFIED",
      "departureTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "roadTraffic": "ROAD_TRAFFIC_UNSPECIFIED",
      "startCoordinates": {
        "latitude": 0,
        "longitude": 0
      },
      "travelDuration": "string"
    },
    "companyDisplayNames": [
      "string"
    ],
    "companyNames": [
      "string"
    ],
    "compensationFilter": {
      "includeJobsWithUnspecifiedCompensationRange": true,
      "range": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "type": "FILTER_TYPE_UNSPECIFIED",
      "units": [
        "COMPENSATION_UNIT_UNSPECIFIED"
      ]
    },
    "customAttributeFilter": "string",
    "disableSpellCheck": true,
    "employmentTypes": [
      "EMPLOYMENT_TYPE_UNSPECIFIED"
    ],
    "excludedJobs": [
      "string"
    ],
    "jobCategories": [
      "JOB_CATEGORY_UNSPECIFIED"
    ],
    "languageCodes": [
      "string"
    ],
    "locationFilters": [
      {
        "address": "string",
        "distanceInMiles": 0,
        "latLng": {
          "latitude": 0,
          "longitude": 0
        },
        "regionCode": "string",
        "telecommutePreference": "TELECOMMUTE_PREFERENCE_UNSPECIFIED"
      }
    ],
    "publishTimeRange": {
      "endTime": "string",
      "startTime": "string"
    },
    "query": "string",
    "queryLanguageCode": "string"
  },
  "jobView": "JOB_VIEW_UNSPECIFIED",
  "offset": 0,
  "orderBy": "string",
  "pageSize": 0,
  "pageToken": "string",
  "requestMetadata": {
    "deviceInfo": {
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "id": "string"
    },
    "domain": "string",
    "sessionId": "string",
    "userId": "string"
  },
  "requirePreciseResultSize": true,
  "searchMode": "SEARCH_MODE_UNSPECIFIED"
}
```

<h3 id="jobsprojectsjobssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the project to search within. The format is "projects/{project_id}", for example, "projects/api-test-project".|
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
|body|body|[SearchJobsRequest](#schemasearchjobsrequest)|false|none|
|» customRankingInfo|body|[CustomRankingInfo](#schemacustomrankinginfo)|false|Optional. Controls over how job documents get ranked on top of existing relevance score (determined by API algorithm).|
|» disableKeywordMatch|body|boolean|false|Optional. Controls whether to disable exact keyword match on Job.job_title, Job.description, Job.company_display_name, Job.locations, Job.qualifications. When disable keyword match is turned off, a keyword match returns jobs that do not match given category filters when there are matching keywords. For example, the query "program manager," a result is returned even if the job posting has the title "software developer," which does not fall into "program manager" ontology, but does have "program manager" appearing in its description. For queries like "cloud" that does not contain title or location specific ontology, jobs with "cloud" keyword matches are returned regardless of this flag's value. Please use Company.keyword_searchable_custom_fields or Company.keyword_searchable_custom_attributes if company specific globally matched custom field/attribute string values is needed. Enabling keyword match improves recall of subsequent search requests. Defaults to false.|
|» diversificationLevel|body|string|false|Optional. Controls whether highly similar jobs are returned next to each other in the search results. Jobs are identified as highly similar based on their titles, job categories, and locations. Highly similar results are clustered so that only one representative job of the cluster is displayed to the job seeker higher up in the results, with the other jobs being displayed lower down in the results. Defaults to DiversificationLevel.SIMPLE if no value is specified.|
|» enableBroadening|body|boolean|false|Optional. Controls whether to broaden the search when it produces sparse results. Broadened queries append results to the end of the matching results list. Defaults to false.|
|» histogramFacets|body|[HistogramFacets](#schemahistogramfacets)|false|Optional. Histogram requests for jobs matching JobQuery.|
|» histogramQueries|body|[[HistogramQuery](#schemahistogramquery)]|false|Optional. Expression based histogram requests for jobs matching JobQuery.|
|» jobQuery|body|[JobQuery](#schemajobquery)|false|Optional. Query used to search against jobs, such as keyword, location filters, etc.|
|» jobView|body|string|false|Optional. The desired job attributes returned for jobs in the search response. Defaults to JobView.SMALL if no value is specified.|
|» offset|body|integer(int32)|false|Optional. An integer that specifies the current offset (that is, starting result location, amongst the jobs deemed by the API as relevant) in search results. This field is only considered if page_token is unset. The maximum allowed value is 5000. Otherwise an error is thrown. For example, 0 means to return results starting from the first matching job, and 10 means to return from the 11th job. This can be used for pagination, (for example, pageSize = 10 and offset = 10 means to return from the second page).|
|» orderBy|body|string|false|Optional. The criteria determining how search results are sorted. Default is "relevance desc". Supported options are: * `"relevance desc"`: By relevance descending, as determined by the API algorithms. Relevance thresholding of query results is only available with this ordering. * `"posting_publish_time desc"`: By Job.posting_publish_time descending. * `"posting_update_time desc"`: By Job.posting_update_time descending. * `"title"`: By Job.title ascending. * `"title desc"`: By Job.title descending. * `"annualized_base_compensation"`: By job's CompensationInfo.annualized_base_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_base_compensation desc"`: By job's CompensationInfo.annualized_base_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation"`: By job's CompensationInfo.annualized_total_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation desc"`: By job's CompensationInfo.annualized_total_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"custom_ranking desc"`: By the relevance score adjusted to the SearchJobsRequest.custom_ranking_info.ranking_expression with weight factor assigned by SearchJobsRequest.custom_ranking_info.importance_level in descending order. * Location sorting: Use the special syntax to order jobs by distance: "`distance_from('Hawaii')`": Order by distance from Hawaii. "`distance_from(19.89, 155.5)`": Order by distance from a coordinate. "`distance_from('Hawaii'), distance_from('Puerto Rico')`": Order by multiple locations. See details below. "`distance_from('Hawaii'), distance_from(19.89, 155.5)`": Order by multiple locations. See details below. The string can have a maximum of 256 characters. When multiple distance centers are provided, a job that is close to any of the distance centers would have a high rank. When a job has multiple locations, the job location closest to one of the distance centers will be used. Jobs that don't have locations will be ranked at the bottom. Distance is calculated with a precision of 11.3 meters (37.4 feet). Diversification strategy is still applied unless explicitly disabled in diversification_level.|
|» pageSize|body|integer(int32)|false|Optional. A limit on the number of jobs returned in the search results. Increasing this value above the default value of 10 can increase search response time. The value can be between 1 and 100.|
|» pageToken|body|string|false|Optional. The token specifying the current offset within search results. See SearchJobsResponse.next_page_token for an explanation of how to obtain the next set of query results.|
|» requestMetadata|body|[RequestMetadata](#schemarequestmetadata)|false|Required. The meta information collected about the job searcher, used to improve the search quality of the service. The identifiers (such as `user_id`) are provided by users, and must be unique and consistent.|
|» requirePreciseResultSize|body|boolean|false|This field is deprecated.|
|» searchMode|body|string|false|Optional. Mode of a search. Defaults to SearchMode.JOB_SEARCH.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» diversificationLevel|DIVERSIFICATION_LEVEL_UNSPECIFIED|
|» diversificationLevel|DISABLED|
|» diversificationLevel|SIMPLE|
|» jobView|JOB_VIEW_UNSPECIFIED|
|» jobView|JOB_VIEW_ID_ONLY|
|» jobView|JOB_VIEW_MINIMAL|
|» jobView|JOB_VIEW_SMALL|
|» jobView|JOB_VIEW_FULL|
|» searchMode|SEARCH_MODE_UNSPECIFIED|
|» searchMode|JOB_SEARCH|
|» searchMode|FEATURED_JOB_SEARCH|

> Example responses

> 200 Response

```json
{
  "broadenedQueryJobsCount": 0,
  "estimatedTotalSize": 0,
  "histogramQueryResults": [
    {
      "histogram": {
        "property1": "string",
        "property2": "string"
      },
      "histogramQuery": "string"
    }
  ],
  "histogramResults": {
    "compensationHistogramResults": [
      {
        "result": {
          "counts": [
            {
              "count": 0,
              "range": {
                "from": 0,
                "to": 0
              }
            }
          ],
          "maxValue": 0,
          "minValue": 0
        },
        "type": "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
      }
    ],
    "customAttributeHistogramResults": [
      {
        "key": "string",
        "longValueHistogramResult": {
          "counts": [
            {
              "count": 0,
              "range": {
                "from": 0,
                "to": 0
              }
            }
          ],
          "maxValue": 0,
          "minValue": 0
        },
        "stringValueHistogramResult": {
          "property1": 0,
          "property2": 0
        }
      }
    ],
    "simpleHistogramResults": [
      {
        "searchType": "SEARCH_TYPE_UNSPECIFIED",
        "values": {
          "property1": 0,
          "property2": 0
        }
      }
    ]
  },
  "locationFilters": [
    {
      "latLng": {
        "latitude": 0,
        "longitude": 0
      },
      "locationType": "LOCATION_TYPE_UNSPECIFIED",
      "postalAddress": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "radiusInMiles": 0
    }
  ],
  "matchingJobs": [
    {
      "commuteInfo": {
        "jobLocation": {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          },
          "locationType": "LOCATION_TYPE_UNSPECIFIED",
          "postalAddress": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "radiusInMiles": 0
        },
        "travelDuration": "string"
      },
      "job": {
        "addresses": [
          "string"
        ],
        "applicationInfo": {
          "emails": [
            "string"
          ],
          "instruction": "string",
          "uris": [
            "string"
          ]
        },
        "companyDisplayName": "string",
        "companyName": "string",
        "compensationInfo": {
          "annualizedBaseCompensationRange": {
            "maxCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "minCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "annualizedTotalCompensationRange": {
            "maxCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "minCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "entries": [
            {
              "amount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "description": "string",
              "expectedUnitsPerYear": 0,
              "range": {
                "maxCompensation": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "minCompensation": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                }
              },
              "type": "COMPENSATION_TYPE_UNSPECIFIED",
              "unit": "COMPENSATION_UNIT_UNSPECIFIED"
            }
          ]
        },
        "customAttributes": {
          "property1": {
            "filterable": true,
            "longValues": [
              "string"
            ],
            "stringValues": [
              "string"
            ]
          },
          "property2": {
            "filterable": true,
            "longValues": [
              "string"
            ],
            "stringValues": [
              "string"
            ]
          }
        },
        "degreeTypes": [
          "DEGREE_TYPE_UNSPECIFIED"
        ],
        "department": "string",
        "derivedInfo": {
          "jobCategories": [
            "JOB_CATEGORY_UNSPECIFIED"
          ],
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              },
              "locationType": "LOCATION_TYPE_UNSPECIFIED",
              "postalAddress": {
                "addressLines": [
                  "string"
                ],
                "administrativeArea": "string",
                "languageCode": "string",
                "locality": "string",
                "organization": "string",
                "postalCode": "string",
                "recipients": [
                  "string"
                ],
                "regionCode": "string",
                "revision": 0,
                "sortingCode": "string",
                "sublocality": "string"
              },
              "radiusInMiles": 0
            }
          ]
        },
        "description": "string",
        "employmentTypes": [
          "EMPLOYMENT_TYPE_UNSPECIFIED"
        ],
        "incentives": "string",
        "jobBenefits": [
          "JOB_BENEFIT_UNSPECIFIED"
        ],
        "jobEndTime": "string",
        "jobLevel": "JOB_LEVEL_UNSPECIFIED",
        "jobStartTime": "string",
        "languageCode": "string",
        "name": "string",
        "postingCreateTime": "string",
        "postingExpireTime": "string",
        "postingPublishTime": "string",
        "postingRegion": "POSTING_REGION_UNSPECIFIED",
        "postingUpdateTime": "string",
        "processingOptions": {
          "disableStreetAddressResolution": true,
          "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
        },
        "promotionValue": 0,
        "qualifications": "string",
        "requisitionId": "string",
        "responsibilities": "string",
        "title": "string",
        "visibility": "VISIBILITY_UNSPECIFIED"
      },
      "jobSummary": "string",
      "jobTitleSnippet": "string",
      "searchTextSnippet": "string"
    }
  ],
  "metadata": {
    "requestId": "string"
  },
  "nextPageToken": "string",
  "spellCorrection": {
    "corrected": true,
    "correctedText": "string"
  },
  "totalSize": 0
}
```

<h3 id="jobsprojectsjobssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchJobsResponse](#schemasearchjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/jobs ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/jobs )
</aside>

## jobs.projects.jobs.searchForAlert

<a id="opIdjobs.projects.jobs.searchForAlert"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3p1beta1/string/jobs:searchForAlert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customRankingInfo": {
      "importanceLevel": "IMPORTANCE_LEVEL_UNSPECIFIED",
      "rankingExpression": "string"
    },
    "disableKeywordMatch": true,
    "diversificationLevel": "DIVERSIFICATION_LEVEL_UNSPECIFIED",
    "enableBroadening": true,
    "histogramFacets": {
      "compensationHistogramFacets": [
        {
          "bucketingOption": {
            "bucketBounds": [
              0
            ],
            "requiresMinMax": true
          },
          "type": "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
        }
      ],
      "customAttributeHistogramFacets": [
        {
          "key": "string",
          "longValueHistogramBucketingOption": {
            "bucketBounds": [
              0
            ],
            "requiresMinMax": true
          },
          "stringValueHistogram": true
        }
      ],
      "simpleHistogramFacets": [
        "SEARCH_TYPE_UNSPECIFIED"
      ]
    },
    "histogramQueries": [
      {
        "histogramQuery": "string"
      }
    ],
    "jobQuery": {
      "commuteFilter": {
        "allowImpreciseAddresses": true,
        "commuteMethod": "COMMUTE_METHOD_UNSPECIFIED",
        "departureTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "roadTraffic": "ROAD_TRAFFIC_UNSPECIFIED",
        "startCoordinates": {
          "latitude": 0,
          "longitude": 0
        },
        "travelDuration": "string"
      },
      "companyDisplayNames": [
        "string"
      ],
      "companyNames": [
        "string"
      ],
      "compensationFilter": {
        "includeJobsWithUnspecifiedCompensationRange": true,
        "range": {
          "maxCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "minCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "type": "FILTER_TYPE_UNSPECIFIED",
        "units": [
          "COMPENSATION_UNIT_UNSPECIFIED"
        ]
      },
      "customAttributeFilter": "string",
      "disableSpellCheck": true,
      "employmentTypes": [
        "EMPLOYMENT_TYPE_UNSPECIFIED"
      ],
      "excludedJobs": [
        "string"
      ],
      "jobCategories": [
        "JOB_CATEGORY_UNSPECIFIED"
      ],
      "languageCodes": [
        "string"
      ],
      "locationFilters": [
        {
          "address": "string",
          "distanceInMiles": 0,
          "latLng": {
            "latitude": 0,
            "longitude": 0
          },
          "regionCode": "string",
          "telecommutePreference": "TELECOMMUTE_PREFERENCE_UNSPECIFIED"
        }
      ],
      "publishTimeRange": {
        "endTime": "string",
        "startTime": "string"
      },
      "query": "string",
      "queryLanguageCode": "string"
    },
    "jobView": "JOB_VIEW_UNSPECIFIED",
    "offset": 0,
    "orderBy": "string",
    "pageSize": 0,
    "pageToken": "string",
    "requestMetadata": {
      "deviceInfo": {
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "id": "string"
      },
      "domain": "string",
      "sessionId": "string",
      "userId": "string"
    },
    "requirePreciseResultSize": true,
    "searchMode": "SEARCH_MODE_UNSPECIFIED"
  }'
```

`POST /v3p1beta1/{parent}/jobs:searchForAlert`

Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

> Body parameter

```json
{
  "customRankingInfo": {
    "importanceLevel": "IMPORTANCE_LEVEL_UNSPECIFIED",
    "rankingExpression": "string"
  },
  "disableKeywordMatch": true,
  "diversificationLevel": "DIVERSIFICATION_LEVEL_UNSPECIFIED",
  "enableBroadening": true,
  "histogramFacets": {
    "compensationHistogramFacets": [
      {
        "bucketingOption": {
          "bucketBounds": [
            0
          ],
          "requiresMinMax": true
        },
        "type": "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
      }
    ],
    "customAttributeHistogramFacets": [
      {
        "key": "string",
        "longValueHistogramBucketingOption": {
          "bucketBounds": [
            0
          ],
          "requiresMinMax": true
        },
        "stringValueHistogram": true
      }
    ],
    "simpleHistogramFacets": [
      "SEARCH_TYPE_UNSPECIFIED"
    ]
  },
  "histogramQueries": [
    {
      "histogramQuery": "string"
    }
  ],
  "jobQuery": {
    "commuteFilter": {
      "allowImpreciseAddresses": true,
      "commuteMethod": "COMMUTE_METHOD_UNSPECIFIED",
      "departureTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "roadTraffic": "ROAD_TRAFFIC_UNSPECIFIED",
      "startCoordinates": {
        "latitude": 0,
        "longitude": 0
      },
      "travelDuration": "string"
    },
    "companyDisplayNames": [
      "string"
    ],
    "companyNames": [
      "string"
    ],
    "compensationFilter": {
      "includeJobsWithUnspecifiedCompensationRange": true,
      "range": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "type": "FILTER_TYPE_UNSPECIFIED",
      "units": [
        "COMPENSATION_UNIT_UNSPECIFIED"
      ]
    },
    "customAttributeFilter": "string",
    "disableSpellCheck": true,
    "employmentTypes": [
      "EMPLOYMENT_TYPE_UNSPECIFIED"
    ],
    "excludedJobs": [
      "string"
    ],
    "jobCategories": [
      "JOB_CATEGORY_UNSPECIFIED"
    ],
    "languageCodes": [
      "string"
    ],
    "locationFilters": [
      {
        "address": "string",
        "distanceInMiles": 0,
        "latLng": {
          "latitude": 0,
          "longitude": 0
        },
        "regionCode": "string",
        "telecommutePreference": "TELECOMMUTE_PREFERENCE_UNSPECIFIED"
      }
    ],
    "publishTimeRange": {
      "endTime": "string",
      "startTime": "string"
    },
    "query": "string",
    "queryLanguageCode": "string"
  },
  "jobView": "JOB_VIEW_UNSPECIFIED",
  "offset": 0,
  "orderBy": "string",
  "pageSize": 0,
  "pageToken": "string",
  "requestMetadata": {
    "deviceInfo": {
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "id": "string"
    },
    "domain": "string",
    "sessionId": "string",
    "userId": "string"
  },
  "requirePreciseResultSize": true,
  "searchMode": "SEARCH_MODE_UNSPECIFIED"
}
```

<h3 id="jobsprojectsjobssearchforalert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the project to search within. The format is "projects/{project_id}", for example, "projects/api-test-project".|
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
|body|body|[SearchJobsRequest](#schemasearchjobsrequest)|false|none|
|» customRankingInfo|body|[CustomRankingInfo](#schemacustomrankinginfo)|false|Optional. Controls over how job documents get ranked on top of existing relevance score (determined by API algorithm).|
|» disableKeywordMatch|body|boolean|false|Optional. Controls whether to disable exact keyword match on Job.job_title, Job.description, Job.company_display_name, Job.locations, Job.qualifications. When disable keyword match is turned off, a keyword match returns jobs that do not match given category filters when there are matching keywords. For example, the query "program manager," a result is returned even if the job posting has the title "software developer," which does not fall into "program manager" ontology, but does have "program manager" appearing in its description. For queries like "cloud" that does not contain title or location specific ontology, jobs with "cloud" keyword matches are returned regardless of this flag's value. Please use Company.keyword_searchable_custom_fields or Company.keyword_searchable_custom_attributes if company specific globally matched custom field/attribute string values is needed. Enabling keyword match improves recall of subsequent search requests. Defaults to false.|
|» diversificationLevel|body|string|false|Optional. Controls whether highly similar jobs are returned next to each other in the search results. Jobs are identified as highly similar based on their titles, job categories, and locations. Highly similar results are clustered so that only one representative job of the cluster is displayed to the job seeker higher up in the results, with the other jobs being displayed lower down in the results. Defaults to DiversificationLevel.SIMPLE if no value is specified.|
|» enableBroadening|body|boolean|false|Optional. Controls whether to broaden the search when it produces sparse results. Broadened queries append results to the end of the matching results list. Defaults to false.|
|» histogramFacets|body|[HistogramFacets](#schemahistogramfacets)|false|Optional. Histogram requests for jobs matching JobQuery.|
|» histogramQueries|body|[[HistogramQuery](#schemahistogramquery)]|false|Optional. Expression based histogram requests for jobs matching JobQuery.|
|» jobQuery|body|[JobQuery](#schemajobquery)|false|Optional. Query used to search against jobs, such as keyword, location filters, etc.|
|» jobView|body|string|false|Optional. The desired job attributes returned for jobs in the search response. Defaults to JobView.SMALL if no value is specified.|
|» offset|body|integer(int32)|false|Optional. An integer that specifies the current offset (that is, starting result location, amongst the jobs deemed by the API as relevant) in search results. This field is only considered if page_token is unset. The maximum allowed value is 5000. Otherwise an error is thrown. For example, 0 means to return results starting from the first matching job, and 10 means to return from the 11th job. This can be used for pagination, (for example, pageSize = 10 and offset = 10 means to return from the second page).|
|» orderBy|body|string|false|Optional. The criteria determining how search results are sorted. Default is "relevance desc". Supported options are: * `"relevance desc"`: By relevance descending, as determined by the API algorithms. Relevance thresholding of query results is only available with this ordering. * `"posting_publish_time desc"`: By Job.posting_publish_time descending. * `"posting_update_time desc"`: By Job.posting_update_time descending. * `"title"`: By Job.title ascending. * `"title desc"`: By Job.title descending. * `"annualized_base_compensation"`: By job's CompensationInfo.annualized_base_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_base_compensation desc"`: By job's CompensationInfo.annualized_base_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation"`: By job's CompensationInfo.annualized_total_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation desc"`: By job's CompensationInfo.annualized_total_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"custom_ranking desc"`: By the relevance score adjusted to the SearchJobsRequest.custom_ranking_info.ranking_expression with weight factor assigned by SearchJobsRequest.custom_ranking_info.importance_level in descending order. * Location sorting: Use the special syntax to order jobs by distance: "`distance_from('Hawaii')`": Order by distance from Hawaii. "`distance_from(19.89, 155.5)`": Order by distance from a coordinate. "`distance_from('Hawaii'), distance_from('Puerto Rico')`": Order by multiple locations. See details below. "`distance_from('Hawaii'), distance_from(19.89, 155.5)`": Order by multiple locations. See details below. The string can have a maximum of 256 characters. When multiple distance centers are provided, a job that is close to any of the distance centers would have a high rank. When a job has multiple locations, the job location closest to one of the distance centers will be used. Jobs that don't have locations will be ranked at the bottom. Distance is calculated with a precision of 11.3 meters (37.4 feet). Diversification strategy is still applied unless explicitly disabled in diversification_level.|
|» pageSize|body|integer(int32)|false|Optional. A limit on the number of jobs returned in the search results. Increasing this value above the default value of 10 can increase search response time. The value can be between 1 and 100.|
|» pageToken|body|string|false|Optional. The token specifying the current offset within search results. See SearchJobsResponse.next_page_token for an explanation of how to obtain the next set of query results.|
|» requestMetadata|body|[RequestMetadata](#schemarequestmetadata)|false|Required. The meta information collected about the job searcher, used to improve the search quality of the service. The identifiers (such as `user_id`) are provided by users, and must be unique and consistent.|
|» requirePreciseResultSize|body|boolean|false|This field is deprecated.|
|» searchMode|body|string|false|Optional. Mode of a search. Defaults to SearchMode.JOB_SEARCH.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» diversificationLevel|DIVERSIFICATION_LEVEL_UNSPECIFIED|
|» diversificationLevel|DISABLED|
|» diversificationLevel|SIMPLE|
|» jobView|JOB_VIEW_UNSPECIFIED|
|» jobView|JOB_VIEW_ID_ONLY|
|» jobView|JOB_VIEW_MINIMAL|
|» jobView|JOB_VIEW_SMALL|
|» jobView|JOB_VIEW_FULL|
|» searchMode|SEARCH_MODE_UNSPECIFIED|
|» searchMode|JOB_SEARCH|
|» searchMode|FEATURED_JOB_SEARCH|

> Example responses

> 200 Response

```json
{
  "broadenedQueryJobsCount": 0,
  "estimatedTotalSize": 0,
  "histogramQueryResults": [
    {
      "histogram": {
        "property1": "string",
        "property2": "string"
      },
      "histogramQuery": "string"
    }
  ],
  "histogramResults": {
    "compensationHistogramResults": [
      {
        "result": {
          "counts": [
            {
              "count": 0,
              "range": {
                "from": 0,
                "to": 0
              }
            }
          ],
          "maxValue": 0,
          "minValue": 0
        },
        "type": "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
      }
    ],
    "customAttributeHistogramResults": [
      {
        "key": "string",
        "longValueHistogramResult": {
          "counts": [
            {
              "count": 0,
              "range": {
                "from": 0,
                "to": 0
              }
            }
          ],
          "maxValue": 0,
          "minValue": 0
        },
        "stringValueHistogramResult": {
          "property1": 0,
          "property2": 0
        }
      }
    ],
    "simpleHistogramResults": [
      {
        "searchType": "SEARCH_TYPE_UNSPECIFIED",
        "values": {
          "property1": 0,
          "property2": 0
        }
      }
    ]
  },
  "locationFilters": [
    {
      "latLng": {
        "latitude": 0,
        "longitude": 0
      },
      "locationType": "LOCATION_TYPE_UNSPECIFIED",
      "postalAddress": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "radiusInMiles": 0
    }
  ],
  "matchingJobs": [
    {
      "commuteInfo": {
        "jobLocation": {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          },
          "locationType": "LOCATION_TYPE_UNSPECIFIED",
          "postalAddress": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "radiusInMiles": 0
        },
        "travelDuration": "string"
      },
      "job": {
        "addresses": [
          "string"
        ],
        "applicationInfo": {
          "emails": [
            "string"
          ],
          "instruction": "string",
          "uris": [
            "string"
          ]
        },
        "companyDisplayName": "string",
        "companyName": "string",
        "compensationInfo": {
          "annualizedBaseCompensationRange": {
            "maxCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "minCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "annualizedTotalCompensationRange": {
            "maxCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "minCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "entries": [
            {
              "amount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "description": "string",
              "expectedUnitsPerYear": 0,
              "range": {
                "maxCompensation": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "minCompensation": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                }
              },
              "type": "COMPENSATION_TYPE_UNSPECIFIED",
              "unit": "COMPENSATION_UNIT_UNSPECIFIED"
            }
          ]
        },
        "customAttributes": {
          "property1": {
            "filterable": true,
            "longValues": [
              "string"
            ],
            "stringValues": [
              "string"
            ]
          },
          "property2": {
            "filterable": true,
            "longValues": [
              "string"
            ],
            "stringValues": [
              "string"
            ]
          }
        },
        "degreeTypes": [
          "DEGREE_TYPE_UNSPECIFIED"
        ],
        "department": "string",
        "derivedInfo": {
          "jobCategories": [
            "JOB_CATEGORY_UNSPECIFIED"
          ],
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              },
              "locationType": "LOCATION_TYPE_UNSPECIFIED",
              "postalAddress": {
                "addressLines": [
                  "string"
                ],
                "administrativeArea": "string",
                "languageCode": "string",
                "locality": "string",
                "organization": "string",
                "postalCode": "string",
                "recipients": [
                  "string"
                ],
                "regionCode": "string",
                "revision": 0,
                "sortingCode": "string",
                "sublocality": "string"
              },
              "radiusInMiles": 0
            }
          ]
        },
        "description": "string",
        "employmentTypes": [
          "EMPLOYMENT_TYPE_UNSPECIFIED"
        ],
        "incentives": "string",
        "jobBenefits": [
          "JOB_BENEFIT_UNSPECIFIED"
        ],
        "jobEndTime": "string",
        "jobLevel": "JOB_LEVEL_UNSPECIFIED",
        "jobStartTime": "string",
        "languageCode": "string",
        "name": "string",
        "postingCreateTime": "string",
        "postingExpireTime": "string",
        "postingPublishTime": "string",
        "postingRegion": "POSTING_REGION_UNSPECIFIED",
        "postingUpdateTime": "string",
        "processingOptions": {
          "disableStreetAddressResolution": true,
          "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
        },
        "promotionValue": 0,
        "qualifications": "string",
        "requisitionId": "string",
        "responsibilities": "string",
        "title": "string",
        "visibility": "VISIBILITY_UNSPECIFIED"
      },
      "jobSummary": "string",
      "jobTitleSnippet": "string",
      "searchTextSnippet": "string"
    }
  ],
  "metadata": {
    "requestId": "string"
  },
  "nextPageToken": "string",
  "spellCorrection": {
    "corrected": true,
    "correctedText": "string"
  },
  "totalSize": 0
}
```

<h3 id="jobsprojectsjobssearchforalert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchJobsResponse](#schemasearchjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/jobs ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/jobs )
</aside>

# Schemas

<h2 id="tocS_ApplicationInfo">ApplicationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationinfo"></a>
<a id="schema_ApplicationInfo"></a>
<a id="tocSapplicationinfo"></a>
<a id="tocsapplicationinfo"></a>

```json
{
  "emails": [
    "string"
  ],
  "instruction": "string",
  "uris": [
    "string"
  ]
}
```

Application related details of a job posting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[string]|false|none|Optional but at least one of uris, emails or instruction must be specified. Use this field to specify email address(es) to which resumes or applications can be sent. The maximum number of allowed characters for each entry is 255.|
|instruction|string|false|none|Optional but at least one of uris, emails or instruction must be specified. Use this field to provide instructions, such as "Mail your application to ...", that a candidate can follow to apply for the job. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 3,000.|
|uris|[string]|false|none|Optional but at least one of uris, emails or instruction must be specified. Use this URI field to direct an applicant to a website, for example to link to an online application form. The maximum number of allowed characters for each entry is 2,000.|

<h2 id="tocS_BatchDeleteJobsRequest">BatchDeleteJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletejobsrequest"></a>
<a id="schema_BatchDeleteJobsRequest"></a>
<a id="tocSbatchdeletejobsrequest"></a>
<a id="tocsbatchdeletejobsrequest"></a>

```json
{
  "filter": "string"
}
```

Input only. Batch delete jobs request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|Required. The filter string specifies the jobs to be deleted. Supported operator: =, AND The fields eligible for filtering are: * `companyName` (Required) * `requisitionId` (Required) Sample Query: companyName = "projects/api-test-project/companies/123" AND requisitionId = "req-1"|

<h2 id="tocS_BucketRange">BucketRange</h2>
<!-- backwards compatibility -->
<a id="schemabucketrange"></a>
<a id="schema_BucketRange"></a>
<a id="tocSbucketrange"></a>
<a id="tocsbucketrange"></a>

```json
{
  "from": 0,
  "to": 0
}
```

Represents starting and ending value of a range in double.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|number(double)|false|none|Starting value of the bucket range.|
|to|number(double)|false|none|Ending value of the bucket range.|

<h2 id="tocS_BucketizedCount">BucketizedCount</h2>
<!-- backwards compatibility -->
<a id="schemabucketizedcount"></a>
<a id="schema_BucketizedCount"></a>
<a id="tocSbucketizedcount"></a>
<a id="tocsbucketizedcount"></a>

```json
{
  "count": 0,
  "range": {
    "from": 0,
    "to": 0
  }
}
```

Represents count of jobs within one bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|Number of jobs whose numeric field value fall into `range`.|
|range|[BucketRange](#schemabucketrange)|false|none|Bucket range on which histogram was performed for the numeric field, that is, the count represents number of jobs in this range.|

<h2 id="tocS_ClientEvent">ClientEvent</h2>
<!-- backwards compatibility -->
<a id="schemaclientevent"></a>
<a id="schema_ClientEvent"></a>
<a id="tocSclientevent"></a>
<a id="tocsclientevent"></a>

```json
{
  "createTime": "string",
  "eventId": "string",
  "extraInfo": {
    "property1": "string",
    "property2": "string"
  },
  "jobEvent": {
    "jobs": [
      "string"
    ],
    "type": "JOB_EVENT_TYPE_UNSPECIFIED"
  },
  "parentEventId": "string",
  "requestId": "string"
}
```

An event issued when an end user interacts with the application that implements Cloud Talent Solution. Providing this information improves the quality of search and recommendation for the API clients, enabling the service to perform optimally. The number of events sent must be consistent with other calls, such as job searches, issued to the service by the client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Required. The timestamp of the event.|
|eventId|string|false|none|Required. A unique identifier, generated by the client application. This `event_id` is used to establish the relationship between different events (see parent_event_id).|
|extraInfo|object|false|none|Optional. Extra information about this event. Used for storing information with no matching field in event payload, for example, user application specific context or details. At most 20 keys are supported. The maximum total size of all keys and values is 2 KB.|
|jobEvent|[JobEvent](#schemajobevent)|false|none|A event issued when a job seeker interacts with the application that implements Cloud Talent Solution.|
|parentEventId|string|false|none|Optional. The event_id of an event that resulted in the current event. For example, a Job view event usually follows a parent impression event: A job seeker first does a search where a list of jobs appears (impression). The job seeker then selects a result and views the description of a particular job (Job view).|
|requestId|string|false|none|Required. A unique ID generated in the API responses. It can be found in ResponseMetadata.request_id.|

<h2 id="tocS_CommuteFilter">CommuteFilter</h2>
<!-- backwards compatibility -->
<a id="schemacommutefilter"></a>
<a id="schema_CommuteFilter"></a>
<a id="tocScommutefilter"></a>
<a id="tocscommutefilter"></a>

```json
{
  "allowImpreciseAddresses": true,
  "commuteMethod": "COMMUTE_METHOD_UNSPECIFIED",
  "departureTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "roadTraffic": "ROAD_TRAFFIC_UNSPECIFIED",
  "startCoordinates": {
    "latitude": 0,
    "longitude": 0
  },
  "travelDuration": "string"
}
```

Input only. Parameters needed for commute search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowImpreciseAddresses|boolean|false|none|Optional. If true, jobs without "precise" addresses (street level addresses or GPS coordinates) might also be returned. For city and coarser level addresses, text matching is used. If this field is set to false or is not specified, only jobs that include precise addresses are returned by Commute Search. Note: If `allow_imprecise_addresses` is set to true, Commute Search is not able to calculate accurate commute times to jobs with city level and coarser address information. Jobs with imprecise addresses will return a `travel_duration` time of 0 regardless of distance from the job seeker.|
|commuteMethod|string|false|none|Required. The method of transportation for which to calculate the commute time.|
|departureTime|[TimeOfDay](#schematimeofday)|false|none|Optional. The departure time used to calculate traffic impact, represented as google.type.TimeOfDay in local time zone. Currently traffic model is restricted to hour level resolution.|
|roadTraffic|string|false|none|Optional. Specifies the traffic density to use when calculating commute time.|
|startCoordinates|[LatLng](#schemalatlng)|false|none|Required. The latitude and longitude of the location from which to calculate the commute time.|
|travelDuration|string(google-duration)|false|none|Required. The maximum travel time in seconds. The maximum allowed value is `3600s` (one hour). Format is `123s`.|

#### Enumerated Values

|Property|Value|
|---|---|
|commuteMethod|COMMUTE_METHOD_UNSPECIFIED|
|commuteMethod|DRIVING|
|commuteMethod|TRANSIT|
|commuteMethod|WALKING|
|commuteMethod|CYCLING|
|roadTraffic|ROAD_TRAFFIC_UNSPECIFIED|
|roadTraffic|TRAFFIC_FREE|
|roadTraffic|BUSY_HOUR|

<h2 id="tocS_CommuteInfo">CommuteInfo</h2>
<!-- backwards compatibility -->
<a id="schemacommuteinfo"></a>
<a id="schema_CommuteInfo"></a>
<a id="tocScommuteinfo"></a>
<a id="tocscommuteinfo"></a>

```json
{
  "jobLocation": {
    "latLng": {
      "latitude": 0,
      "longitude": 0
    },
    "locationType": "LOCATION_TYPE_UNSPECIFIED",
    "postalAddress": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "radiusInMiles": 0
  },
  "travelDuration": "string"
}
```

Output only. Commute details related to this job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobLocation|[Location](#schemalocation)|false|none|Location used as the destination in the commute calculation.|
|travelDuration|string(google-duration)|false|none|The number of seconds required to travel to the job location from the query location. A duration of 0 seconds indicates that the job is not reachable within the requested duration, but was returned as part of an expanded query.|

<h2 id="tocS_Company">Company</h2>
<!-- backwards compatibility -->
<a id="schemacompany"></a>
<a id="schema_Company"></a>
<a id="tocScompany"></a>
<a id="tocscompany"></a>

```json
{
  "careerSiteUri": "string",
  "derivedInfo": {
    "headquartersLocation": {
      "latLng": {
        "latitude": 0,
        "longitude": 0
      },
      "locationType": "LOCATION_TYPE_UNSPECIFIED",
      "postalAddress": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "radiusInMiles": 0
    }
  },
  "displayName": "string",
  "eeoText": "string",
  "externalId": "string",
  "headquartersAddress": "string",
  "hiringAgency": true,
  "imageUri": "string",
  "keywordSearchableJobCustomAttributes": [
    "string"
  ],
  "name": "string",
  "size": "COMPANY_SIZE_UNSPECIFIED",
  "suspended": true,
  "websiteUri": "string"
}
```

A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|careerSiteUri|string|false|none|Optional. The URI to employer's career site or careers page on the employer's web site, for example, "https://careers.google.com".|
|derivedInfo|[CompanyDerivedInfo](#schemacompanyderivedinfo)|false|none|Output only. Derived details about the company.|
|displayName|string|false|none|Required. The display name of the company, for example, "Google LLC".|
|eeoText|string|false|none|Optional. Equal Employment Opportunity legal disclaimer text to be associated with all jobs, and typically to be displayed in all roles. The maximum number of allowed characters is 500.|
|externalId|string|false|none|Required. Client side company identifier, used to uniquely identify the company. The maximum number of allowed characters is 255.|
|headquartersAddress|string|false|none|Optional. The street address of the company's main headquarters, which may be different from the job location. The service attempts to geolocate the provided address, and populates a more specific location wherever possible in DerivedInfo.headquarters_location.|
|hiringAgency|boolean|false|none|Optional. Set to true if it is the hiring agency that post jobs for other employers. Defaults to false if not provided.|
|imageUri|string|false|none|Optional. A URI that hosts the employer's company logo.|
|keywordSearchableJobCustomAttributes|[string]|false|none|Optional. This field is deprecated. Please set the searchability of the custom attribute in the Job.custom_attributes going forward. A list of keys of filterable Job.custom_attributes, whose corresponding `string_values` are used in keyword search. Jobs with `string_values` under these specified field keys are returned if any of the values matches the search keyword. Custom field values with parenthesis, brackets and special symbols won't be properly searchable, and those keyword queries need to be surrounded by quotes.|
|name|string|false|none|Required during company update. The resource name for a company. This is generated by the service when a company is created. The format is "projects/{project_id}/companies/{company_id}", for example, "projects/api-test-project/companies/foo".|
|size|string|false|none|Optional. The employer's company size.|
|suspended|boolean|false|none|Output only. Indicates whether a company is flagged to be suspended from public availability by the service when job content appears suspicious, abusive, or spammy.|
|websiteUri|string|false|none|Optional. The URI representing the company's primary web site or home page, for example, "https://www.google.com". The maximum number of allowed characters is 255.|

#### Enumerated Values

|Property|Value|
|---|---|
|size|COMPANY_SIZE_UNSPECIFIED|
|size|MINI|
|size|SMALL|
|size|SMEDIUM|
|size|MEDIUM|
|size|BIG|
|size|BIGGER|
|size|GIANT|

<h2 id="tocS_CompanyDerivedInfo">CompanyDerivedInfo</h2>
<!-- backwards compatibility -->
<a id="schemacompanyderivedinfo"></a>
<a id="schema_CompanyDerivedInfo"></a>
<a id="tocScompanyderivedinfo"></a>
<a id="tocscompanyderivedinfo"></a>

```json
{
  "headquartersLocation": {
    "latLng": {
      "latitude": 0,
      "longitude": 0
    },
    "locationType": "LOCATION_TYPE_UNSPECIFIED",
    "postalAddress": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "radiusInMiles": 0
  }
}
```

Derived details about the company.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headquartersLocation|[Location](#schemalocation)|false|none|A structured headquarters location of the company, resolved from Company.hq_location if provided.|

<h2 id="tocS_CompensationEntry">CompensationEntry</h2>
<!-- backwards compatibility -->
<a id="schemacompensationentry"></a>
<a id="schema_CompensationEntry"></a>
<a id="tocScompensationentry"></a>
<a id="tocscompensationentry"></a>

```json
{
  "amount": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "description": "string",
  "expectedUnitsPerYear": 0,
  "range": {
    "maxCompensation": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "minCompensation": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  },
  "type": "COMPENSATION_TYPE_UNSPECIFIED",
  "unit": "COMPENSATION_UNIT_UNSPECIFIED"
}
```

A compensation entry that represents one component of compensation, such as base pay, bonus, or other compensation type. Annualization: One compensation entry can be annualized if - it contains valid amount or range. - and its expected_units_per_year is set or can be derived. Its annualized range is determined as (amount or range) times expected_units_per_year.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Money](#schemamoney)|false|none|Optional. Compensation amount.|
|description|string|false|none|Optional. Compensation description. For example, could indicate equity terms or provide additional context to an estimated bonus.|
|expectedUnitsPerYear|number(double)|false|none|Optional. Expected number of units paid each year. If not specified, when Job.employment_types is FULLTIME, a default value is inferred based on unit. Default values: - HOURLY: 2080 - DAILY: 260 - WEEKLY: 52 - MONTHLY: 12 - ANNUAL: 1|
|range|[CompensationRange](#schemacompensationrange)|false|none|Optional. Compensation range.|
|type|string|false|none|Optional. Compensation type. Default is CompensationUnit.COMPENSATION_TYPE_UNSPECIFIED.|
|unit|string|false|none|Optional. Frequency of the specified amount. Default is CompensationUnit.COMPENSATION_UNIT_UNSPECIFIED.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|COMPENSATION_TYPE_UNSPECIFIED|
|type|BASE|
|type|BONUS|
|type|SIGNING_BONUS|
|type|EQUITY|
|type|PROFIT_SHARING|
|type|COMMISSIONS|
|type|TIPS|
|type|OTHER_COMPENSATION_TYPE|
|unit|COMPENSATION_UNIT_UNSPECIFIED|
|unit|HOURLY|
|unit|DAILY|
|unit|WEEKLY|
|unit|MONTHLY|
|unit|YEARLY|
|unit|ONE_TIME|
|unit|OTHER_COMPENSATION_UNIT|

<h2 id="tocS_CompensationFilter">CompensationFilter</h2>
<!-- backwards compatibility -->
<a id="schemacompensationfilter"></a>
<a id="schema_CompensationFilter"></a>
<a id="tocScompensationfilter"></a>
<a id="tocscompensationfilter"></a>

```json
{
  "includeJobsWithUnspecifiedCompensationRange": true,
  "range": {
    "maxCompensation": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "minCompensation": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  },
  "type": "FILTER_TYPE_UNSPECIFIED",
  "units": [
    "COMPENSATION_UNIT_UNSPECIFIED"
  ]
}
```

Input only. Filter on job compensation type and amount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeJobsWithUnspecifiedCompensationRange|boolean|false|none|Optional. If set to true, jobs with unspecified compensation range fields are included.|
|range|[CompensationRange](#schemacompensationrange)|false|none|Optional. Compensation range.|
|type|string|false|none|Required. Type of filter.|
|units|[string]|false|none|Required. Specify desired `base compensation entry's` CompensationInfo.CompensationUnit.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FILTER_TYPE_UNSPECIFIED|
|type|UNIT_ONLY|
|type|UNIT_AND_AMOUNT|
|type|ANNUALIZED_BASE_AMOUNT|
|type|ANNUALIZED_TOTAL_AMOUNT|
|units|COMPENSATION_UNIT_UNSPECIFIED|
|units|HOURLY|
|units|DAILY|
|units|WEEKLY|
|units|MONTHLY|
|units|YEARLY|
|units|ONE_TIME|
|units|OTHER_COMPENSATION_UNIT|

<h2 id="tocS_CompensationHistogramRequest">CompensationHistogramRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompensationhistogramrequest"></a>
<a id="schema_CompensationHistogramRequest"></a>
<a id="tocScompensationhistogramrequest"></a>
<a id="tocscompensationhistogramrequest"></a>

```json
{
  "bucketingOption": {
    "bucketBounds": [
      0
    ],
    "requiresMinMax": true
  },
  "type": "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
}
```

Input only. Compensation based histogram request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketingOption|[NumericBucketingOption](#schemanumericbucketingoption)|false|none|Required. Numeric histogram options, like buckets, whether include min or max value.|
|type|string|false|none|Required. Type of the request, representing which field the histogramming should be performed over. A single request can only specify one histogram of each `CompensationHistogramRequestType`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED|
|type|BASE|
|type|ANNUALIZED_BASE|
|type|ANNUALIZED_TOTAL|

<h2 id="tocS_CompensationHistogramResult">CompensationHistogramResult</h2>
<!-- backwards compatibility -->
<a id="schemacompensationhistogramresult"></a>
<a id="schema_CompensationHistogramResult"></a>
<a id="tocScompensationhistogramresult"></a>
<a id="tocscompensationhistogramresult"></a>

```json
{
  "result": {
    "counts": [
      {
        "count": 0,
        "range": {
          "from": 0,
          "to": 0
        }
      }
    ],
    "maxValue": 0,
    "minValue": 0
  },
  "type": "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
}
```

Output only. Compensation based histogram result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[NumericBucketingResult](#schemanumericbucketingresult)|false|none|Histogram result.|
|type|string|false|none|Type of the request, corresponding to CompensationHistogramRequest.type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED|
|type|BASE|
|type|ANNUALIZED_BASE|
|type|ANNUALIZED_TOTAL|

<h2 id="tocS_CompensationInfo">CompensationInfo</h2>
<!-- backwards compatibility -->
<a id="schemacompensationinfo"></a>
<a id="schema_CompensationInfo"></a>
<a id="tocScompensationinfo"></a>
<a id="tocscompensationinfo"></a>

```json
{
  "annualizedBaseCompensationRange": {
    "maxCompensation": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "minCompensation": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  },
  "annualizedTotalCompensationRange": {
    "maxCompensation": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "minCompensation": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  },
  "entries": [
    {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "description": "string",
      "expectedUnitsPerYear": 0,
      "range": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "type": "COMPENSATION_TYPE_UNSPECIFIED",
      "unit": "COMPENSATION_UNIT_UNSPECIFIED"
    }
  ]
}
```

Job compensation details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annualizedBaseCompensationRange|[CompensationRange](#schemacompensationrange)|false|none|Output only. Annualized base compensation range. Computed as base compensation entry's CompensationEntry.compensation times CompensationEntry.expected_units_per_year. See CompensationEntry for explanation on compensation annualization.|
|annualizedTotalCompensationRange|[CompensationRange](#schemacompensationrange)|false|none|Output only. Annualized total compensation range. Computed as all compensation entries' CompensationEntry.compensation times CompensationEntry.expected_units_per_year. See CompensationEntry for explanation on compensation annualization.|
|entries|[[CompensationEntry](#schemacompensationentry)]|false|none|Optional. Job compensation information. At most one entry can be of type CompensationInfo.CompensationType.BASE, which is referred as ** base compensation entry ** for the job.|

<h2 id="tocS_CompensationRange">CompensationRange</h2>
<!-- backwards compatibility -->
<a id="schemacompensationrange"></a>
<a id="schema_CompensationRange"></a>
<a id="tocScompensationrange"></a>
<a id="tocscompensationrange"></a>

```json
{
  "maxCompensation": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "minCompensation": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

Compensation range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxCompensation|[Money](#schemamoney)|false|none|Optional. The maximum amount of compensation. If left empty, the value is set to a maximal compensation value and the currency code is set to match the currency code of min_compensation.|
|minCompensation|[Money](#schemamoney)|false|none|Optional. The minimum amount of compensation. If left empty, the value is set to zero and the currency code is set to match the currency code of max_compensation.|

<h2 id="tocS_CompleteQueryResponse">CompleteQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompletequeryresponse"></a>
<a id="schema_CompleteQueryResponse"></a>
<a id="tocScompletequeryresponse"></a>
<a id="tocscompletequeryresponse"></a>

```json
{
  "completionResults": [
    {
      "imageUri": "string",
      "suggestion": "string",
      "type": "COMPLETION_TYPE_UNSPECIFIED"
    }
  ],
  "metadata": {
    "requestId": "string"
  }
}
```

Output only. Response of auto-complete query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completionResults|[[CompletionResult](#schemacompletionresult)]|false|none|Results of the matching job/company candidates.|
|metadata|[ResponseMetadata](#schemaresponsemetadata)|false|none|Additional information for the API invocation, such as the request tracking id.|

<h2 id="tocS_CompletionResult">CompletionResult</h2>
<!-- backwards compatibility -->
<a id="schemacompletionresult"></a>
<a id="schema_CompletionResult"></a>
<a id="tocScompletionresult"></a>
<a id="tocscompletionresult"></a>

```json
{
  "imageUri": "string",
  "suggestion": "string",
  "type": "COMPLETION_TYPE_UNSPECIFIED"
}
```

Output only. Resource that represents completion results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageUri|string|false|none|The URI of the company image for CompletionType.COMPANY_NAME.|
|suggestion|string|false|none|The suggestion for the query.|
|type|string|false|none|The completion topic.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|COMPLETION_TYPE_UNSPECIFIED|
|type|JOB_TITLE|
|type|COMPANY_NAME|
|type|COMBINED|

<h2 id="tocS_CreateClientEventRequest">CreateClientEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateclienteventrequest"></a>
<a id="schema_CreateClientEventRequest"></a>
<a id="tocScreateclienteventrequest"></a>
<a id="tocscreateclienteventrequest"></a>

```json
{
  "clientEvent": {
    "createTime": "string",
    "eventId": "string",
    "extraInfo": {
      "property1": "string",
      "property2": "string"
    },
    "jobEvent": {
      "jobs": [
        "string"
      ],
      "type": "JOB_EVENT_TYPE_UNSPECIFIED"
    },
    "parentEventId": "string",
    "requestId": "string"
  }
}
```

The report event request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientEvent|[ClientEvent](#schemaclientevent)|false|none|Required. Events issued when end user interacts with customer's application that uses Cloud Talent Solution.|

<h2 id="tocS_CreateCompanyRequest">CreateCompanyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecompanyrequest"></a>
<a id="schema_CreateCompanyRequest"></a>
<a id="tocScreatecompanyrequest"></a>
<a id="tocscreatecompanyrequest"></a>

```json
{
  "company": {
    "careerSiteUri": "string",
    "derivedInfo": {
      "headquartersLocation": {
        "latLng": {
          "latitude": 0,
          "longitude": 0
        },
        "locationType": "LOCATION_TYPE_UNSPECIFIED",
        "postalAddress": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "radiusInMiles": 0
      }
    },
    "displayName": "string",
    "eeoText": "string",
    "externalId": "string",
    "headquartersAddress": "string",
    "hiringAgency": true,
    "imageUri": "string",
    "keywordSearchableJobCustomAttributes": [
      "string"
    ],
    "name": "string",
    "size": "COMPANY_SIZE_UNSPECIFIED",
    "suspended": true,
    "websiteUri": "string"
  }
}
```

Input only. The Request of the CreateCompany method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|[Company](#schemacompany)|false|none|Required. The company to be created.|

<h2 id="tocS_CreateJobRequest">CreateJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobrequest"></a>
<a id="schema_CreateJobRequest"></a>
<a id="tocScreatejobrequest"></a>
<a id="tocscreatejobrequest"></a>

```json
{
  "job": {
    "addresses": [
      "string"
    ],
    "applicationInfo": {
      "emails": [
        "string"
      ],
      "instruction": "string",
      "uris": [
        "string"
      ]
    },
    "companyDisplayName": "string",
    "companyName": "string",
    "compensationInfo": {
      "annualizedBaseCompensationRange": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "annualizedTotalCompensationRange": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "entries": [
        {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "description": "string",
          "expectedUnitsPerYear": 0,
          "range": {
            "maxCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "minCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "type": "COMPENSATION_TYPE_UNSPECIFIED",
          "unit": "COMPENSATION_UNIT_UNSPECIFIED"
        }
      ]
    },
    "customAttributes": {
      "property1": {
        "filterable": true,
        "longValues": [
          "string"
        ],
        "stringValues": [
          "string"
        ]
      },
      "property2": {
        "filterable": true,
        "longValues": [
          "string"
        ],
        "stringValues": [
          "string"
        ]
      }
    },
    "degreeTypes": [
      "DEGREE_TYPE_UNSPECIFIED"
    ],
    "department": "string",
    "derivedInfo": {
      "jobCategories": [
        "JOB_CATEGORY_UNSPECIFIED"
      ],
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          },
          "locationType": "LOCATION_TYPE_UNSPECIFIED",
          "postalAddress": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "radiusInMiles": 0
        }
      ]
    },
    "description": "string",
    "employmentTypes": [
      "EMPLOYMENT_TYPE_UNSPECIFIED"
    ],
    "incentives": "string",
    "jobBenefits": [
      "JOB_BENEFIT_UNSPECIFIED"
    ],
    "jobEndTime": "string",
    "jobLevel": "JOB_LEVEL_UNSPECIFIED",
    "jobStartTime": "string",
    "languageCode": "string",
    "name": "string",
    "postingCreateTime": "string",
    "postingExpireTime": "string",
    "postingPublishTime": "string",
    "postingRegion": "POSTING_REGION_UNSPECIFIED",
    "postingUpdateTime": "string",
    "processingOptions": {
      "disableStreetAddressResolution": true,
      "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
    },
    "promotionValue": 0,
    "qualifications": "string",
    "requisitionId": "string",
    "responsibilities": "string",
    "title": "string",
    "visibility": "VISIBILITY_UNSPECIFIED"
  }
}
```

Input only. Create job request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[Job](#schemajob)|false|none|Required. The Job to be created.|

<h2 id="tocS_CustomAttribute">CustomAttribute</h2>
<!-- backwards compatibility -->
<a id="schemacustomattribute"></a>
<a id="schema_CustomAttribute"></a>
<a id="tocScustomattribute"></a>
<a id="tocscustomattribute"></a>

```json
{
  "filterable": true,
  "longValues": [
    "string"
  ],
  "stringValues": [
    "string"
  ]
}
```

Custom attribute values that are either filterable or non-filterable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterable|boolean|false|none|Optional. If the `filterable` flag is true, the custom field values may be used for custom attribute filters JobQuery.custom_attribute_filter. If false, these values may not be used for custom attribute filters. Default is false.|
|longValues|[string(int64)]|false|none|Optional but exactly one of string_values or long_values must be specified. This field is used to perform number range search. (`EQ`, `GT`, `GE`, `LE`, `LT`) over filterable `long_value`. Currently at most 1 long_values is supported.|
|stringValues|[string]|false|none|Optional but exactly one of string_values or long_values must be specified. This field is used to perform a string match (`CASE_SENSITIVE_MATCH` or `CASE_INSENSITIVE_MATCH`) search. For filterable `string_value`s, a maximum total number of 200 values is allowed, with each `string_value` has a byte size of no more than 500B. For unfilterable `string_values`, the maximum total byte size of unfilterable `string_values` is 50KB. Empty string is not allowed.|

<h2 id="tocS_CustomAttributeHistogramRequest">CustomAttributeHistogramRequest</h2>
<!-- backwards compatibility -->
<a id="schemacustomattributehistogramrequest"></a>
<a id="schema_CustomAttributeHistogramRequest"></a>
<a id="tocScustomattributehistogramrequest"></a>
<a id="tocscustomattributehistogramrequest"></a>

```json
{
  "key": "string",
  "longValueHistogramBucketingOption": {
    "bucketBounds": [
      0
    ],
    "requiresMinMax": true
  },
  "stringValueHistogram": true
}
```

Custom attributes histogram request. An error is thrown if neither string_value_histogram or long_value_histogram_bucketing_option has been defined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Required. Specifies the custom field key to perform a histogram on. If specified without `long_value_histogram_bucketing_option`, histogram on string values of the given `key` is triggered, otherwise histogram is performed on long values.|
|longValueHistogramBucketingOption|[NumericBucketingOption](#schemanumericbucketingoption)|false|none|Optional. Specifies buckets used to perform a range histogram on Job's filterable long custom field values, or min/max value requirements.|
|stringValueHistogram|boolean|false|none|Optional. If set to true, the response includes the histogram value for each key as a string.|

<h2 id="tocS_CustomAttributeHistogramResult">CustomAttributeHistogramResult</h2>
<!-- backwards compatibility -->
<a id="schemacustomattributehistogramresult"></a>
<a id="schema_CustomAttributeHistogramResult"></a>
<a id="tocScustomattributehistogramresult"></a>
<a id="tocscustomattributehistogramresult"></a>

```json
{
  "key": "string",
  "longValueHistogramResult": {
    "counts": [
      {
        "count": 0,
        "range": {
          "from": 0,
          "to": 0
        }
      }
    ],
    "maxValue": 0,
    "minValue": 0
  },
  "stringValueHistogramResult": {
    "property1": 0,
    "property2": 0
  }
}
```

Output only. Custom attribute histogram result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Stores the key of custom attribute the histogram is performed on.|
|longValueHistogramResult|[NumericBucketingResult](#schemanumericbucketingresult)|false|none|Stores bucketed histogram counting result or min/max values for custom attribute long values associated with `key`.|
|stringValueHistogramResult|object|false|none|Stores a map from the values of string custom field associated with `key` to the number of jobs with that value in this histogram result.|

<h2 id="tocS_CustomRankingInfo">CustomRankingInfo</h2>
<!-- backwards compatibility -->
<a id="schemacustomrankinginfo"></a>
<a id="schema_CustomRankingInfo"></a>
<a id="tocScustomrankinginfo"></a>
<a id="tocscustomrankinginfo"></a>

```json
{
  "importanceLevel": "IMPORTANCE_LEVEL_UNSPECIFIED",
  "rankingExpression": "string"
}
```

Input only. Custom ranking information for SearchJobsRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importanceLevel|string|false|none|Required. Controls over how important the score of CustomRankingInfo.ranking_expression gets applied to job's final ranking position. An error is thrown if not specified.|
|rankingExpression|string|false|none|Required. Controls over how job documents get ranked on top of existing relevance score (determined by API algorithm). A combination of the ranking expression and relevance score is used to determine job's final ranking position. The syntax for this expression is a subset of Google SQL syntax. Supported operators are: +, -, *, /, where the left and right side of the operator is either a numeric Job.custom_attributes key, integer/double value or an expression that can be evaluated to a number. Parenthesis are supported to adjust calculation precedence. The expression must be < 200 characters in length. The expression is considered invalid for a job if the expression references custom attributes that are not populated on the job or if the expression results in a divide by zero. If an expression is invalid for a job, that job is demoted to the end of the results. Sample ranking expression (year + 25) * 0.25 - (freshness / 0.5)|

#### Enumerated Values

|Property|Value|
|---|---|
|importanceLevel|IMPORTANCE_LEVEL_UNSPECIFIED|
|importanceLevel|NONE|
|importanceLevel|LOW|
|importanceLevel|MILD|
|importanceLevel|MEDIUM|
|importanceLevel|HIGH|
|importanceLevel|EXTREME|

<h2 id="tocS_DeviceInfo">DeviceInfo</h2>
<!-- backwards compatibility -->
<a id="schemadeviceinfo"></a>
<a id="schema_DeviceInfo"></a>
<a id="tocSdeviceinfo"></a>
<a id="tocsdeviceinfo"></a>

```json
{
  "deviceType": "DEVICE_TYPE_UNSPECIFIED",
  "id": "string"
}
```

Device information collected from the job seeker, candidate, or other entity conducting the job search. Providing this information improves the quality of the search results across devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceType|string|false|none|Optional. Type of the device.|
|id|string|false|none|Optional. A device-specific ID. The ID must be a unique identifier that distinguishes the device from other devices.|

#### Enumerated Values

|Property|Value|
|---|---|
|deviceType|DEVICE_TYPE_UNSPECIFIED|
|deviceType|WEB|
|deviceType|MOBILE_WEB|
|deviceType|ANDROID|
|deviceType|IOS|
|deviceType|BOT|
|deviceType|OTHER|

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

<h2 id="tocS_HistogramFacets">HistogramFacets</h2>
<!-- backwards compatibility -->
<a id="schemahistogramfacets"></a>
<a id="schema_HistogramFacets"></a>
<a id="tocShistogramfacets"></a>
<a id="tocshistogramfacets"></a>

```json
{
  "compensationHistogramFacets": [
    {
      "bucketingOption": {
        "bucketBounds": [
          0
        ],
        "requiresMinMax": true
      },
      "type": "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
    }
  ],
  "customAttributeHistogramFacets": [
    {
      "key": "string",
      "longValueHistogramBucketingOption": {
        "bucketBounds": [
          0
        ],
        "requiresMinMax": true
      },
      "stringValueHistogram": true
    }
  ],
  "simpleHistogramFacets": [
    "SEARCH_TYPE_UNSPECIFIED"
  ]
}
```

Input only. Histogram facets to be specified in SearchJobsRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compensationHistogramFacets|[[CompensationHistogramRequest](#schemacompensationhistogramrequest)]|false|none|Optional. Specifies compensation field-based histogram requests. Duplicate values of CompensationHistogramRequest.type are not allowed.|
|customAttributeHistogramFacets|[[CustomAttributeHistogramRequest](#schemacustomattributehistogramrequest)]|false|none|Optional. Specifies the custom attributes histogram requests. Duplicate values of CustomAttributeHistogramRequest.key are not allowed.|
|simpleHistogramFacets|[string]|false|none|Optional. Specifies the simple type of histogram facets, for example, `COMPANY_SIZE`, `EMPLOYMENT_TYPE` etc.|

#### Enumerated Values

|Property|Value|
|---|---|
|simpleHistogramFacets|SEARCH_TYPE_UNSPECIFIED|
|simpleHistogramFacets|COMPANY_ID|
|simpleHistogramFacets|EMPLOYMENT_TYPE|
|simpleHistogramFacets|COMPANY_SIZE|
|simpleHistogramFacets|DATE_PUBLISHED|
|simpleHistogramFacets|EDUCATION_LEVEL|
|simpleHistogramFacets|EXPERIENCE_LEVEL|
|simpleHistogramFacets|ADMIN_1|
|simpleHistogramFacets|COUNTRY|
|simpleHistogramFacets|CITY|
|simpleHistogramFacets|LOCALE|
|simpleHistogramFacets|LANGUAGE|
|simpleHistogramFacets|CATEGORY|
|simpleHistogramFacets|CITY_COORDINATE|
|simpleHistogramFacets|ADMIN_1_COUNTRY|
|simpleHistogramFacets|COMPANY_DISPLAY_NAME|
|simpleHistogramFacets|BASE_COMPENSATION_UNIT|

<h2 id="tocS_HistogramQuery">HistogramQuery</h2>
<!-- backwards compatibility -->
<a id="schemahistogramquery"></a>
<a id="schema_HistogramQuery"></a>
<a id="tocShistogramquery"></a>
<a id="tocshistogramquery"></a>

```json
{
  "histogramQuery": "string"
}
```

Input Only. The histogram request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|histogramQuery|string|false|none|An expression specifies a histogram request against matching resources (for example, jobs) for searches. Expression syntax is a aggregation function call with histogram facets and other options. Available aggregation function calls are: * `count(string_histogram_facet)`: Count the number of matching entity, for each distinct attribute value. * `count(numeric_histogram_facet, list of buckets)`: Count the number of matching entity within each bucket. A maximum of 200 histogram buckets are supported. Data types: * Histogram facet: facet names with format a-zA-Z+. * String: string like "any string with backslash escape for quote(\")." * Number: whole number and floating point number like 10, -1 and -0.01. * List: list of elements with comma(,) separator surrounded by square brackets. For example, [1, 2, 3] and ["one", "two", "three"]. Built-in constants: * MIN (minimum number similar to java Double.MIN_VALUE) * MAX (maximum number similar to java Double.MAX_VALUE) Built-in functions: * bucket(start, end[, label]): bucket built-in function creates a bucket with range of start, end). Note that the end is exclusive. For example, bucket(1, MAX, "positive number") or bucket(1, 10). Job histogram facets: * company_id: histogram by [Job.distributor_company_id. * company_display_name: histogram by Job.company_display_name. * employment_type: histogram by Job.employment_types. For example, "FULL_TIME", "PART_TIME". * company_size (DEPRECATED): histogram by CompanySize, for example, "SMALL", "MEDIUM", "BIG". * publish_time_in_day: histogram by the Job.publish_time in days. Must specify list of numeric buckets in spec. * publish_time_in_month: histogram by the Job.publish_time in months. Must specify list of numeric buckets in spec. * publish_time_in_year: histogram by the Job.publish_time in years. Must specify list of numeric buckets in spec. * degree_type: histogram by the Job.degree_type. For example, "Bachelors", "Masters". * job_level: histogram by the Job.job_level. For example, "Entry Level". * country: histogram by the country code of jobs. For example, "US", "FR". * admin1: histogram by the admin1 code of jobs, which is a global placeholder referring to the state, province, or the particular term a country uses to define the geographic structure below the country level. For example, "CA", "IL". * city: histogram by a combination of the "city name, admin1 code". For example, "Mountain View, CA", "New York, NY". * admin1_country: histogram by a combination of the "admin1 code, country". For example, "CA, US", "IL, US". * city_coordinate: histogram by the city center's GPS coordinates (latitude and longitude). For example, 37.4038522,-122.0987765. Since the coordinates of a city center can change, customers may need to refresh them periodically. * locale: histogram by the Job.language_code. For example, "en-US", "fr-FR". * language: histogram by the language subtag of the Job.language_code. For example, "en", "fr". * category: histogram by the JobCategory. For example, "COMPUTER_AND_IT", "HEALTHCARE". * base_compensation_unit: histogram by the CompensationUnit of base salary. For example, "WEEKLY", "MONTHLY". * base_compensation: histogram by the base salary. Must specify list of numeric buckets to group results by. * annualized_base_compensation: histogram by the base annualized salary. Must specify list of numeric buckets to group results by. * annualized_total_compensation: histogram by the total annualized salary. Must specify list of numeric buckets to group results by. * string_custom_attribute: histogram by string Job.custom_attributes. Values can be accessed via square bracket notations like string_custom_attribute["key1"]. * numeric_custom_attribute: histogram by numeric Job.custom_attributes. Values can be accessed via square bracket notations like numeric_custom_attribute["key1"]. Must specify list of numeric buckets to group results by. Example expressions: * count(admin1) * count(base_compensation, [bucket(1000, 10000), bucket(10000, 100000), bucket(100000, MAX)]) * count(string_custom_attribute["some-string-custom-attribute"]) * count(numeric_custom_attribute["some-numeric-custom-attribute"], [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative")])|

<h2 id="tocS_HistogramQueryResult">HistogramQueryResult</h2>
<!-- backwards compatibility -->
<a id="schemahistogramqueryresult"></a>
<a id="schema_HistogramQueryResult"></a>
<a id="tocShistogramqueryresult"></a>
<a id="tocshistogramqueryresult"></a>

```json
{
  "histogram": {
    "property1": "string",
    "property2": "string"
  },
  "histogramQuery": "string"
}
```

Output only. Histogram result that matches HistogramSpec specified in searches.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|histogram|object|false|none|A map from the values of the facet associated with distinct values to the number of matching entries with corresponding value. The key format is: * (for string histogram) string values stored in the field. * (for named numeric bucket) name specified in `bucket()` function, like for `bucket(0, MAX, "non-negative")`, the key will be `non-negative`. * (for anonymous numeric bucket) range formatted as `-`, for example, `0-1000`, `MIN-0`, and `0-MAX`.|
|histogramQuery|string|false|none|Requested histogram expression.|

<h2 id="tocS_HistogramResult">HistogramResult</h2>
<!-- backwards compatibility -->
<a id="schemahistogramresult"></a>
<a id="schema_HistogramResult"></a>
<a id="tocShistogramresult"></a>
<a id="tocshistogramresult"></a>

```json
{
  "searchType": "SEARCH_TYPE_UNSPECIFIED",
  "values": {
    "property1": 0,
    "property2": 0
  }
}
```

Output only. Result of a histogram call. The response contains the histogram map for the search type specified by HistogramResult.field. The response is a map of each filter value to the corresponding count of jobs for that filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchType|string|false|none|The Histogram search filters.|
|values|object|false|none|A map from the values of field to the number of jobs with that value in this search result. Key: search type (filter names, such as the companyName). Values: the count of jobs that match the filter for this search.|

#### Enumerated Values

|Property|Value|
|---|---|
|searchType|SEARCH_TYPE_UNSPECIFIED|
|searchType|COMPANY_ID|
|searchType|EMPLOYMENT_TYPE|
|searchType|COMPANY_SIZE|
|searchType|DATE_PUBLISHED|
|searchType|EDUCATION_LEVEL|
|searchType|EXPERIENCE_LEVEL|
|searchType|ADMIN_1|
|searchType|COUNTRY|
|searchType|CITY|
|searchType|LOCALE|
|searchType|LANGUAGE|
|searchType|CATEGORY|
|searchType|CITY_COORDINATE|
|searchType|ADMIN_1_COUNTRY|
|searchType|COMPANY_DISPLAY_NAME|
|searchType|BASE_COMPENSATION_UNIT|

<h2 id="tocS_HistogramResults">HistogramResults</h2>
<!-- backwards compatibility -->
<a id="schemahistogramresults"></a>
<a id="schema_HistogramResults"></a>
<a id="tocShistogramresults"></a>
<a id="tocshistogramresults"></a>

```json
{
  "compensationHistogramResults": [
    {
      "result": {
        "counts": [
          {
            "count": 0,
            "range": {
              "from": 0,
              "to": 0
            }
          }
        ],
        "maxValue": 0,
        "minValue": 0
      },
      "type": "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
    }
  ],
  "customAttributeHistogramResults": [
    {
      "key": "string",
      "longValueHistogramResult": {
        "counts": [
          {
            "count": 0,
            "range": {
              "from": 0,
              "to": 0
            }
          }
        ],
        "maxValue": 0,
        "minValue": 0
      },
      "stringValueHistogramResult": {
        "property1": 0,
        "property2": 0
      }
    }
  ],
  "simpleHistogramResults": [
    {
      "searchType": "SEARCH_TYPE_UNSPECIFIED",
      "values": {
        "property1": 0,
        "property2": 0
      }
    }
  ]
}
```

Output only. Histogram results that match HistogramFacets specified in SearchJobsRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compensationHistogramResults|[[CompensationHistogramResult](#schemacompensationhistogramresult)]|false|none|Specifies compensation field-based histogram results that match HistogramFacets.compensation_histogram_requests.|
|customAttributeHistogramResults|[[CustomAttributeHistogramResult](#schemacustomattributehistogramresult)]|false|none|Specifies histogram results for custom attributes that match HistogramFacets.custom_attribute_histogram_facets.|
|simpleHistogramResults|[[HistogramResult](#schemahistogramresult)]|false|none|Specifies histogram results that matches HistogramFacets.simple_histogram_facets.|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "addresses": [
    "string"
  ],
  "applicationInfo": {
    "emails": [
      "string"
    ],
    "instruction": "string",
    "uris": [
      "string"
    ]
  },
  "companyDisplayName": "string",
  "companyName": "string",
  "compensationInfo": {
    "annualizedBaseCompensationRange": {
      "maxCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "minCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    },
    "annualizedTotalCompensationRange": {
      "maxCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "minCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    },
    "entries": [
      {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "description": "string",
        "expectedUnitsPerYear": 0,
        "range": {
          "maxCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "minCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "type": "COMPENSATION_TYPE_UNSPECIFIED",
        "unit": "COMPENSATION_UNIT_UNSPECIFIED"
      }
    ]
  },
  "customAttributes": {
    "property1": {
      "filterable": true,
      "longValues": [
        "string"
      ],
      "stringValues": [
        "string"
      ]
    },
    "property2": {
      "filterable": true,
      "longValues": [
        "string"
      ],
      "stringValues": [
        "string"
      ]
    }
  },
  "degreeTypes": [
    "DEGREE_TYPE_UNSPECIFIED"
  ],
  "department": "string",
  "derivedInfo": {
    "jobCategories": [
      "JOB_CATEGORY_UNSPECIFIED"
    ],
    "locations": [
      {
        "latLng": {
          "latitude": 0,
          "longitude": 0
        },
        "locationType": "LOCATION_TYPE_UNSPECIFIED",
        "postalAddress": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "radiusInMiles": 0
      }
    ]
  },
  "description": "string",
  "employmentTypes": [
    "EMPLOYMENT_TYPE_UNSPECIFIED"
  ],
  "incentives": "string",
  "jobBenefits": [
    "JOB_BENEFIT_UNSPECIFIED"
  ],
  "jobEndTime": "string",
  "jobLevel": "JOB_LEVEL_UNSPECIFIED",
  "jobStartTime": "string",
  "languageCode": "string",
  "name": "string",
  "postingCreateTime": "string",
  "postingExpireTime": "string",
  "postingPublishTime": "string",
  "postingRegion": "POSTING_REGION_UNSPECIFIED",
  "postingUpdateTime": "string",
  "processingOptions": {
    "disableStreetAddressResolution": true,
    "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
  },
  "promotionValue": 0,
  "qualifications": "string",
  "requisitionId": "string",
  "responsibilities": "string",
  "title": "string",
  "visibility": "VISIBILITY_UNSPECIFIED"
}
```

A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[string]|false|none|Optional but strongly recommended for the best service experience. Location(s) where the employer is looking to hire for this job posting. Specifying the full street address(es) of the hiring location enables better API results, especially job searches by commute time. At most 50 locations are allowed for best search performance. If a job has more locations, it is suggested to split it into multiple jobs with unique requisition_ids (e.g. 'ReqA' becomes 'ReqA-1', 'ReqA-2', etc.) as multiple jobs with the same company_name, language_code and requisition_id are not allowed. If the original requisition_id must be preserved, a custom field should be used for storage. It is also suggested to group the locations that close to each other in the same job for better search experience. Jobs with multiple addresses must have their addresses with the same LocationType to allow location filtering to work properly. (For example, a Job with addresses "1600 Amphitheatre Parkway, Mountain View, CA, USA" and "London, UK" may not have location filters applied correctly at search time since the first is a LocationType.STREET_ADDRESS and the second is a LocationType.LOCALITY.) If a job needs to have multiple addresses, it is suggested to split it into multiple jobs with same LocationTypes. The maximum number of allowed characters is 500.|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Required. At least one field within ApplicationInfo must be specified. Job application information.|
|companyDisplayName|string|false|none|Output only. Display name of the company listing the job.|
|companyName|string|false|none|Required. The resource name of the company listing the job, such as "projects/api-test-project/companies/foo".|
|compensationInfo|[CompensationInfo](#schemacompensationinfo)|false|none|Optional. Job compensation information.|
|customAttributes|object|false|none|Optional. A map of fields to hold both filterable and non-filterable custom job attributes that are not covered by the provided structured fields. The keys of the map are strings up to 64 bytes and must match the pattern: a-zA-Z*. For example, key0LikeThis or KEY_1_LIKE_THIS. At most 100 filterable and at most 100 unfilterable keys are supported. For filterable `string_values`, across all keys at most 200 values are allowed, with each string no more than 255 characters. For unfilterable `string_values`, the maximum total size of `string_values` across all keys is 50KB.|
|degreeTypes|[string]|false|none|Optional. The desired education degrees for the job, such as Bachelors, Masters.|
|department|string|false|none|Optional. The department or functional area within the company with the open position. The maximum number of allowed characters is 255.|
|derivedInfo|[JobDerivedInfo](#schemajobderivedinfo)|false|none|Output only. Derived details about the job posting.|
|description|string|false|none|Required. The description of the job, which typically includes a multi-paragraph description of the company and related information. Separate fields are provided on the job object for responsibilities, qualifications, and other job characteristics. Use of these separate job fields is recommended. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 100,000.|
|employmentTypes|[string]|false|none|Optional. The employment type(s) of a job, for example, full time or part time.|
|incentives|string|false|none|Optional. A description of bonus, commission, and other compensation incentives associated with the job not including salary or pay. The maximum number of allowed characters is 10,000.|
|jobBenefits|[string]|false|none|Optional. The benefits included with the job.|
|jobEndTime|string(google-datetime)|false|none|Optional. The end timestamp of the job. Typically this field is used for contracting engagements. Invalid timestamps are ignored.|
|jobLevel|string|false|none|Optional. The experience level associated with the job, such as "Entry Level".|
|jobStartTime|string(google-datetime)|false|none|Optional. The start timestamp of the job in UTC time zone. Typically this field is used for contracting engagements. Invalid timestamps are ignored.|
|languageCode|string|false|none|Optional. The language of the posting. This field is distinct from any requirements for fluency that are associated with the job. Language codes must be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47){: class="external" target="_blank" }. If this field is unspecified and Job.description is present, detected language code based on Job.description is assigned, otherwise defaults to 'en_US'.|
|name|string|false|none|Required during job update. The resource name for the job. This is generated by the service when a job is created. The format is "projects/{project_id}/jobs/{job_id}", for example, "projects/api-test-project/jobs/1234". Use of this field in job queries and API calls is preferred over the use of requisition_id since this value is unique.|
|postingCreateTime|string(google-datetime)|false|none|Output only. The timestamp when this job posting was created.|
|postingExpireTime|string(google-datetime)|false|none|Optional but strongly recommended for the best service experience. The expiration timestamp of the job. After this timestamp, the job is marked as expired, and it no longer appears in search results. The expired job can't be deleted or listed by the DeleteJob and ListJobs APIs, but it can be retrieved with the GetJob API or updated with the UpdateJob API. An expired job can be updated and opened again by using a future expiration timestamp. Updating an expired job fails if there is another existing open job with same company_name, language_code and requisition_id. The expired jobs are retained in our system for 90 days. However, the overall expired job count cannot exceed 3 times the maximum of open jobs count over the past week, otherwise jobs with earlier expire time are cleaned first. Expired jobs are no longer accessible after they are cleaned out. Invalid timestamps are ignored, and treated as expire time not provided. Timestamp before the instant request is made is considered valid, the job will be treated as expired immediately. If this value is not provided at the time of job creation or is invalid, the job posting expires after 30 days from the job's creation time. For example, if the job was created on 2017/01/01 13:00AM UTC with an unspecified expiration date, the job expires after 2017/01/31 13:00AM UTC. If this value is not provided on job update, it depends on the field masks set by UpdateJobRequest.update_mask. If the field masks include expiry_time, or the masks are empty meaning that every field is updated, the job posting expires after 30 days from the job's last update time. Otherwise the expiration date isn't updated.|
|postingPublishTime|string(google-datetime)|false|none|Optional. The timestamp this job posting was most recently published. The default value is the time the request arrives at the server. Invalid timestamps are ignored.|
|postingRegion|string|false|none|Optional. The job PostingRegion (for example, state, country) throughout which the job is available. If this field is set, a LocationFilter in a search query within the job region finds this job posting if an exact location match isn't specified. If this field is set to PostingRegion.NATION or PostingRegion.ADMINISTRATIVE_AREA, setting job Job.addresses to the same location level as this field is strongly recommended.|
|postingUpdateTime|string(google-datetime)|false|none|Output only. The timestamp when this job posting was last updated.|
|processingOptions|[ProcessingOptions](#schemaprocessingoptions)|false|none|Optional. Options for job processing.|
|promotionValue|integer(int32)|false|none|Optional. A promotion value of the job, as determined by the client. The value determines the sort order of the jobs returned when searching for jobs using the featured jobs search call, with higher promotional values being returned first and ties being resolved by relevance sort. Only the jobs with a promotionValue >0 are returned in a FEATURED_JOB_SEARCH. Default value is 0, and negative values are treated as 0.|
|qualifications|string|false|none|Optional. A description of the qualifications required to perform the job. The use of this field is recommended as an alternative to using the more general description field. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 10,000.|
|requisitionId|string|false|none|Required. The requisition ID, also referred to as the posting ID, assigned by the client to identify a job. This field is intended to be used by clients for client identification and tracking of postings. A job is not allowed to be created if there is another job with the same [company_name], language_code and requisition_id. The maximum number of allowed characters is 255.|
|responsibilities|string|false|none|Optional. A description of job responsibilities. The use of this field is recommended as an alternative to using the more general description field. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 10,000.|
|title|string|false|none|Required. The title of the job, such as "Software Engineer" The maximum number of allowed characters is 500.|
|visibility|string|false|none|Deprecated. The job is only visible to the owner. The visibility of the job. Defaults to Visibility.ACCOUNT_ONLY if not specified.|

#### Enumerated Values

|Property|Value|
|---|---|
|degreeTypes|DEGREE_TYPE_UNSPECIFIED|
|degreeTypes|PRIMARY_EDUCATION|
|degreeTypes|LOWER_SECONDARY_EDUCATION|
|degreeTypes|UPPER_SECONDARY_EDUCATION|
|degreeTypes|ADULT_REMEDIAL_EDUCATION|
|degreeTypes|ASSOCIATES_OR_EQUIVALENT|
|degreeTypes|BACHELORS_OR_EQUIVALENT|
|degreeTypes|MASTERS_OR_EQUIVALENT|
|degreeTypes|DOCTORAL_OR_EQUIVALENT|
|employmentTypes|EMPLOYMENT_TYPE_UNSPECIFIED|
|employmentTypes|FULL_TIME|
|employmentTypes|PART_TIME|
|employmentTypes|CONTRACTOR|
|employmentTypes|CONTRACT_TO_HIRE|
|employmentTypes|TEMPORARY|
|employmentTypes|INTERN|
|employmentTypes|VOLUNTEER|
|employmentTypes|PER_DIEM|
|employmentTypes|FLY_IN_FLY_OUT|
|employmentTypes|OTHER_EMPLOYMENT_TYPE|
|jobBenefits|JOB_BENEFIT_UNSPECIFIED|
|jobBenefits|CHILD_CARE|
|jobBenefits|DENTAL|
|jobBenefits|DOMESTIC_PARTNER|
|jobBenefits|FLEXIBLE_HOURS|
|jobBenefits|MEDICAL|
|jobBenefits|LIFE_INSURANCE|
|jobBenefits|PARENTAL_LEAVE|
|jobBenefits|RETIREMENT_PLAN|
|jobBenefits|SICK_DAYS|
|jobBenefits|VACATION|
|jobBenefits|VISION|
|jobLevel|JOB_LEVEL_UNSPECIFIED|
|jobLevel|ENTRY_LEVEL|
|jobLevel|EXPERIENCED|
|jobLevel|MANAGER|
|jobLevel|DIRECTOR|
|jobLevel|EXECUTIVE|
|postingRegion|POSTING_REGION_UNSPECIFIED|
|postingRegion|ADMINISTRATIVE_AREA|
|postingRegion|NATION|
|postingRegion|TELECOMMUTE|
|visibility|VISIBILITY_UNSPECIFIED|
|visibility|ACCOUNT_ONLY|
|visibility|SHARED_WITH_GOOGLE|
|visibility|SHARED_WITH_PUBLIC|

<h2 id="tocS_JobDerivedInfo">JobDerivedInfo</h2>
<!-- backwards compatibility -->
<a id="schemajobderivedinfo"></a>
<a id="schema_JobDerivedInfo"></a>
<a id="tocSjobderivedinfo"></a>
<a id="tocsjobderivedinfo"></a>

```json
{
  "jobCategories": [
    "JOB_CATEGORY_UNSPECIFIED"
  ],
  "locations": [
    {
      "latLng": {
        "latitude": 0,
        "longitude": 0
      },
      "locationType": "LOCATION_TYPE_UNSPECIFIED",
      "postalAddress": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "radiusInMiles": 0
    }
  ]
}
```

Output only. Derived details about the job posting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobCategories|[string]|false|none|Job categories derived from Job.title and Job.description.|
|locations|[[Location](#schemalocation)]|false|none|Structured locations of the job, resolved from Job.addresses. locations are exactly matched to Job.addresses in the same order.|

#### Enumerated Values

|Property|Value|
|---|---|
|jobCategories|JOB_CATEGORY_UNSPECIFIED|
|jobCategories|ACCOUNTING_AND_FINANCE|
|jobCategories|ADMINISTRATIVE_AND_OFFICE|
|jobCategories|ADVERTISING_AND_MARKETING|
|jobCategories|ANIMAL_CARE|
|jobCategories|ART_FASHION_AND_DESIGN|
|jobCategories|BUSINESS_OPERATIONS|
|jobCategories|CLEANING_AND_FACILITIES|
|jobCategories|COMPUTER_AND_IT|
|jobCategories|CONSTRUCTION|
|jobCategories|CUSTOMER_SERVICE|
|jobCategories|EDUCATION|
|jobCategories|ENTERTAINMENT_AND_TRAVEL|
|jobCategories|FARMING_AND_OUTDOORS|
|jobCategories|HEALTHCARE|
|jobCategories|HUMAN_RESOURCES|
|jobCategories|INSTALLATION_MAINTENANCE_AND_REPAIR|
|jobCategories|LEGAL|
|jobCategories|MANAGEMENT|
|jobCategories|MANUFACTURING_AND_WAREHOUSE|
|jobCategories|MEDIA_COMMUNICATIONS_AND_WRITING|
|jobCategories|OIL_GAS_AND_MINING|
|jobCategories|PERSONAL_CARE_AND_SERVICES|
|jobCategories|PROTECTIVE_SERVICES|
|jobCategories|REAL_ESTATE|
|jobCategories|RESTAURANT_AND_HOSPITALITY|
|jobCategories|SALES_AND_RETAIL|
|jobCategories|SCIENCE_AND_ENGINEERING|
|jobCategories|SOCIAL_SERVICES_AND_NON_PROFIT|
|jobCategories|SPORTS_FITNESS_AND_RECREATION|
|jobCategories|TRANSPORTATION_AND_LOGISTICS|

<h2 id="tocS_JobEvent">JobEvent</h2>
<!-- backwards compatibility -->
<a id="schemajobevent"></a>
<a id="schema_JobEvent"></a>
<a id="tocSjobevent"></a>
<a id="tocsjobevent"></a>

```json
{
  "jobs": [
    "string"
  ],
  "type": "JOB_EVENT_TYPE_UNSPECIFIED"
}
```

An event issued when a job seeker interacts with the application that implements Cloud Talent Solution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[string]|false|none|Required. The job name(s) associated with this event. For example, if this is an impression event, this field contains the identifiers of all jobs shown to the job seeker. If this was a view event, this field contains the identifier of the viewed job.|
|type|string|false|none|Required. The type of the event (see JobEventType).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|JOB_EVENT_TYPE_UNSPECIFIED|
|type|IMPRESSION|
|type|VIEW|
|type|VIEW_REDIRECT|
|type|APPLICATION_START|
|type|APPLICATION_FINISH|
|type|APPLICATION_QUICK_SUBMISSION|
|type|APPLICATION_REDIRECT|
|type|APPLICATION_START_FROM_SEARCH|
|type|APPLICATION_REDIRECT_FROM_SEARCH|
|type|APPLICATION_COMPANY_SUBMIT|
|type|BOOKMARK|
|type|NOTIFICATION|
|type|HIRED|
|type|SENT_CV|
|type|INTERVIEW_GRANTED|
|type|NOT_INTERESTED|

<h2 id="tocS_JobQuery">JobQuery</h2>
<!-- backwards compatibility -->
<a id="schemajobquery"></a>
<a id="schema_JobQuery"></a>
<a id="tocSjobquery"></a>
<a id="tocsjobquery"></a>

```json
{
  "commuteFilter": {
    "allowImpreciseAddresses": true,
    "commuteMethod": "COMMUTE_METHOD_UNSPECIFIED",
    "departureTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "roadTraffic": "ROAD_TRAFFIC_UNSPECIFIED",
    "startCoordinates": {
      "latitude": 0,
      "longitude": 0
    },
    "travelDuration": "string"
  },
  "companyDisplayNames": [
    "string"
  ],
  "companyNames": [
    "string"
  ],
  "compensationFilter": {
    "includeJobsWithUnspecifiedCompensationRange": true,
    "range": {
      "maxCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "minCompensation": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    },
    "type": "FILTER_TYPE_UNSPECIFIED",
    "units": [
      "COMPENSATION_UNIT_UNSPECIFIED"
    ]
  },
  "customAttributeFilter": "string",
  "disableSpellCheck": true,
  "employmentTypes": [
    "EMPLOYMENT_TYPE_UNSPECIFIED"
  ],
  "excludedJobs": [
    "string"
  ],
  "jobCategories": [
    "JOB_CATEGORY_UNSPECIFIED"
  ],
  "languageCodes": [
    "string"
  ],
  "locationFilters": [
    {
      "address": "string",
      "distanceInMiles": 0,
      "latLng": {
        "latitude": 0,
        "longitude": 0
      },
      "regionCode": "string",
      "telecommutePreference": "TELECOMMUTE_PREFERENCE_UNSPECIFIED"
    }
  ],
  "publishTimeRange": {
    "endTime": "string",
    "startTime": "string"
  },
  "query": "string",
  "queryLanguageCode": "string"
}
```

Input only. The query required to perform a search query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commuteFilter|[CommuteFilter](#schemacommutefilter)|false|none|Optional. Allows filtering jobs by commute time with different travel methods (for example, driving or public transit). Note: This only works with COMMUTE MODE. When specified, [JobQuery.location_filters] is ignored. Currently we don't support sorting by commute time.|
|companyDisplayNames|[string]|false|none|Optional. This filter specifies the company Company.display_name of the jobs to search against. The company name must match the value exactly. Alternatively, the value being searched for can be wrapped in different match operators. `SUBSTRING_MATCH([value])` The company name must contain a case insensitive substring match of the value. Using this function may increase latency. Sample Value: `SUBSTRING_MATCH(google)` `MULTI_WORD_TOKEN_MATCH([value])` The value will be treated as a multi word token and the company name must contain a case insensitive match of the value. Using this function may increase latency. Sample Value: `MULTI_WORD_TOKEN_MATCH(google)` If a value isn't specified, jobs within the search results are associated with any company. If multiple values are specified, jobs within the search results may be associated with any of the specified companies. At most 20 company display name filters are allowed.|
|companyNames|[string]|false|none|Optional. This filter specifies the company entities to search against. If a value isn't specified, jobs are searched for against all companies. If multiple values are specified, jobs are searched against the companies specified. The format is "projects/{project_id}/companies/{company_id}", for example, "projects/api-test-project/companies/foo". At most 20 company filters are allowed.|
|compensationFilter|[CompensationFilter](#schemacompensationfilter)|false|none|Optional. This search filter is applied only to Job.compensation_info. For example, if the filter is specified as "Hourly job with per-hour compensation > $15", only jobs meeting these criteria are searched. If a filter isn't defined, all open jobs are searched.|
|customAttributeFilter|string|false|none|Optional. This filter specifies a structured syntax to match against the Job.custom_attributes marked as `filterable`. The syntax for this expression is a subset of SQL syntax. Supported operators are: `=`, `!=`, `<`, `<=`, `>`, and `>=` where the left of the operator is a custom field key and the right of the operator is a number or a quoted string. You must escape backslash (\\) and quote (\") characters. Supported functions are `LOWER([field_name])` to perform a case insensitive match and `EMPTY([field_name])` to filter on the existence of a key. Boolean expressions (AND/OR/NOT) are supported up to 3 levels of nesting (for example, "((A AND B AND C) OR NOT D) AND E"), a maximum of 100 comparisons or functions are allowed in the expression. The expression must be < 10000 bytes in length. Sample Query: `(LOWER(driving_license)="class \"a\"" OR EMPTY(driving_license)) AND driving_years > 10`|
|disableSpellCheck|boolean|false|none|Optional. This flag controls the spell-check feature. If false, the service attempts to correct a misspelled query, for example, "enginee" is corrected to "engineer". Defaults to false: a spell check is performed.|
|employmentTypes|[string]|false|none|Optional. The employment type filter specifies the employment type of jobs to search against, such as EmploymentType.FULL_TIME. If a value is not specified, jobs in the search results includes any employment type. If multiple values are specified, jobs in the search results include any of the specified employment types.|
|excludedJobs|[string]|false|none|Optional. This filter specifies a list of job names to be excluded during search. At most 400 excluded job names are allowed.|
|jobCategories|[string]|false|none|Optional. The category filter specifies the categories of jobs to search against. See Category for more information. If a value is not specified, jobs from any category are searched against. If multiple values are specified, jobs from any of the specified categories are searched against.|
|languageCodes|[string]|false|none|Optional. This filter specifies the locale of jobs to search against, for example, "en-US". If a value isn't specified, the search results can contain jobs in any locale. Language codes should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). At most 10 language code filters are allowed.|
|locationFilters|[[LocationFilter](#schemalocationfilter)]|false|none|Optional. The location filter specifies geo-regions containing the jobs to search against. See LocationFilter for more information. If a location value isn't specified, jobs fitting the other search criteria are retrieved regardless of where they're located. If multiple values are specified, jobs are retrieved from any of the specified locations. If different values are specified for the LocationFilter.distance_in_miles parameter, the maximum provided distance is used for all locations. At most 5 location filters are allowed.|
|publishTimeRange|[TimestampRange](#schematimestamprange)|false|none|Optional. Jobs published within a range specified by this filter are searched against.|
|query|string|false|none|Optional. The query string that matches against the job title, description, and location fields. The maximum number of allowed characters is 255.|
|queryLanguageCode|string|false|none|The language code of query. For example, "en-US". This field helps to better interpret the query. If a value isn't specified, the query language code is automatically detected, which may not be accurate. Language code should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).|

#### Enumerated Values

|Property|Value|
|---|---|
|employmentTypes|EMPLOYMENT_TYPE_UNSPECIFIED|
|employmentTypes|FULL_TIME|
|employmentTypes|PART_TIME|
|employmentTypes|CONTRACTOR|
|employmentTypes|CONTRACT_TO_HIRE|
|employmentTypes|TEMPORARY|
|employmentTypes|INTERN|
|employmentTypes|VOLUNTEER|
|employmentTypes|PER_DIEM|
|employmentTypes|FLY_IN_FLY_OUT|
|employmentTypes|OTHER_EMPLOYMENT_TYPE|
|jobCategories|JOB_CATEGORY_UNSPECIFIED|
|jobCategories|ACCOUNTING_AND_FINANCE|
|jobCategories|ADMINISTRATIVE_AND_OFFICE|
|jobCategories|ADVERTISING_AND_MARKETING|
|jobCategories|ANIMAL_CARE|
|jobCategories|ART_FASHION_AND_DESIGN|
|jobCategories|BUSINESS_OPERATIONS|
|jobCategories|CLEANING_AND_FACILITIES|
|jobCategories|COMPUTER_AND_IT|
|jobCategories|CONSTRUCTION|
|jobCategories|CUSTOMER_SERVICE|
|jobCategories|EDUCATION|
|jobCategories|ENTERTAINMENT_AND_TRAVEL|
|jobCategories|FARMING_AND_OUTDOORS|
|jobCategories|HEALTHCARE|
|jobCategories|HUMAN_RESOURCES|
|jobCategories|INSTALLATION_MAINTENANCE_AND_REPAIR|
|jobCategories|LEGAL|
|jobCategories|MANAGEMENT|
|jobCategories|MANUFACTURING_AND_WAREHOUSE|
|jobCategories|MEDIA_COMMUNICATIONS_AND_WRITING|
|jobCategories|OIL_GAS_AND_MINING|
|jobCategories|PERSONAL_CARE_AND_SERVICES|
|jobCategories|PROTECTIVE_SERVICES|
|jobCategories|REAL_ESTATE|
|jobCategories|RESTAURANT_AND_HOSPITALITY|
|jobCategories|SALES_AND_RETAIL|
|jobCategories|SCIENCE_AND_ENGINEERING|
|jobCategories|SOCIAL_SERVICES_AND_NON_PROFIT|
|jobCategories|SPORTS_FITNESS_AND_RECREATION|
|jobCategories|TRANSPORTATION_AND_LOGISTICS|

<h2 id="tocS_LatLng">LatLng</h2>
<!-- backwards compatibility -->
<a id="schemalatlng"></a>
<a id="schema_LatLng"></a>
<a id="tocSlatlng"></a>
<a id="tocslatlng"></a>

```json
{
  "latitude": 0,
  "longitude": 0
}
```

An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number(double)|false|none|The latitude in degrees. It must be in the range [-90.0, +90.0].|
|longitude|number(double)|false|none|The longitude in degrees. It must be in the range [-180.0, +180.0].|

<h2 id="tocS_ListCompaniesResponse">ListCompaniesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcompaniesresponse"></a>
<a id="schema_ListCompaniesResponse"></a>
<a id="tocSlistcompaniesresponse"></a>
<a id="tocslistcompaniesresponse"></a>

```json
{
  "companies": [
    {
      "careerSiteUri": "string",
      "derivedInfo": {
        "headquartersLocation": {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          },
          "locationType": "LOCATION_TYPE_UNSPECIFIED",
          "postalAddress": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "radiusInMiles": 0
        }
      },
      "displayName": "string",
      "eeoText": "string",
      "externalId": "string",
      "headquartersAddress": "string",
      "hiringAgency": true,
      "imageUri": "string",
      "keywordSearchableJobCustomAttributes": [
        "string"
      ],
      "name": "string",
      "size": "COMPANY_SIZE_UNSPECIFIED",
      "suspended": true,
      "websiteUri": "string"
    }
  ],
  "metadata": {
    "requestId": "string"
  },
  "nextPageToken": "string"
}
```

Output only. The List companies response object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companies|[[Company](#schemacompany)]|false|none|Companies for the current client.|
|metadata|[ResponseMetadata](#schemaresponsemetadata)|false|none|Additional information for the API invocation, such as the request tracking id.|
|nextPageToken|string|false|none|A token to retrieve the next page of results.|

<h2 id="tocS_ListJobsResponse">ListJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsresponse"></a>
<a id="schema_ListJobsResponse"></a>
<a id="tocSlistjobsresponse"></a>
<a id="tocslistjobsresponse"></a>

```json
{
  "jobs": [
    {
      "addresses": [
        "string"
      ],
      "applicationInfo": {
        "emails": [
          "string"
        ],
        "instruction": "string",
        "uris": [
          "string"
        ]
      },
      "companyDisplayName": "string",
      "companyName": "string",
      "compensationInfo": {
        "annualizedBaseCompensationRange": {
          "maxCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "minCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "annualizedTotalCompensationRange": {
          "maxCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "minCompensation": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "entries": [
          {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "description": "string",
            "expectedUnitsPerYear": 0,
            "range": {
              "maxCompensation": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "minCompensation": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            },
            "type": "COMPENSATION_TYPE_UNSPECIFIED",
            "unit": "COMPENSATION_UNIT_UNSPECIFIED"
          }
        ]
      },
      "customAttributes": {
        "property1": {
          "filterable": true,
          "longValues": [
            "string"
          ],
          "stringValues": [
            "string"
          ]
        },
        "property2": {
          "filterable": true,
          "longValues": [
            "string"
          ],
          "stringValues": [
            "string"
          ]
        }
      },
      "degreeTypes": [
        "DEGREE_TYPE_UNSPECIFIED"
      ],
      "department": "string",
      "derivedInfo": {
        "jobCategories": [
          "JOB_CATEGORY_UNSPECIFIED"
        ],
        "locations": [
          {
            "latLng": {
              "latitude": 0,
              "longitude": 0
            },
            "locationType": "LOCATION_TYPE_UNSPECIFIED",
            "postalAddress": {
              "addressLines": [
                "string"
              ],
              "administrativeArea": "string",
              "languageCode": "string",
              "locality": "string",
              "organization": "string",
              "postalCode": "string",
              "recipients": [
                "string"
              ],
              "regionCode": "string",
              "revision": 0,
              "sortingCode": "string",
              "sublocality": "string"
            },
            "radiusInMiles": 0
          }
        ]
      },
      "description": "string",
      "employmentTypes": [
        "EMPLOYMENT_TYPE_UNSPECIFIED"
      ],
      "incentives": "string",
      "jobBenefits": [
        "JOB_BENEFIT_UNSPECIFIED"
      ],
      "jobEndTime": "string",
      "jobLevel": "JOB_LEVEL_UNSPECIFIED",
      "jobStartTime": "string",
      "languageCode": "string",
      "name": "string",
      "postingCreateTime": "string",
      "postingExpireTime": "string",
      "postingPublishTime": "string",
      "postingRegion": "POSTING_REGION_UNSPECIFIED",
      "postingUpdateTime": "string",
      "processingOptions": {
        "disableStreetAddressResolution": true,
        "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
      },
      "promotionValue": 0,
      "qualifications": "string",
      "requisitionId": "string",
      "responsibilities": "string",
      "title": "string",
      "visibility": "VISIBILITY_UNSPECIFIED"
    }
  ],
  "metadata": {
    "requestId": "string"
  },
  "nextPageToken": "string"
}
```

Output only. List jobs response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[Job](#schemajob)]|false|none|The Jobs for a given company. The maximum number of items returned is based on the limit field provided in the request.|
|metadata|[ResponseMetadata](#schemaresponsemetadata)|false|none|Additional information for the API invocation, such as the request tracking id.|
|nextPageToken|string|false|none|A token to retrieve the next page of results.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "latLng": {
    "latitude": 0,
    "longitude": 0
  },
  "locationType": "LOCATION_TYPE_UNSPECIFIED",
  "postalAddress": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "radiusInMiles": 0
}
```

Output only. A resource that represents a location with full geographic information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latLng|[LatLng](#schemalatlng)|false|none|An object representing a latitude/longitude pair.|
|locationType|string|false|none|The type of a location, which corresponds to the address lines field of PostalAddress. For example, "Downtown, Atlanta, GA, USA" has a type of LocationType#NEIGHBORHOOD, and "Kansas City, KS, USA" has a type of LocationType#LOCALITY.|
|postalAddress|[PostalAddress](#schemapostaladdress)|false|none|Postal address of the location that includes human readable information, such as postal delivery and payments addresses. Given a postal address, a postal service can deliver items to a premises, P.O. Box, or other delivery location.|
|radiusInMiles|number(double)|false|none|Radius in miles of the job location. This value is derived from the location bounding box in which a circle with the specified radius centered from LatLng covers the area associated with the job location. For example, currently, "Mountain View, CA, USA" has a radius of 6.17 miles.|

#### Enumerated Values

|Property|Value|
|---|---|
|locationType|LOCATION_TYPE_UNSPECIFIED|
|locationType|COUNTRY|
|locationType|ADMINISTRATIVE_AREA|
|locationType|SUB_ADMINISTRATIVE_AREA|
|locationType|LOCALITY|
|locationType|POSTAL_CODE|
|locationType|SUB_LOCALITY|
|locationType|SUB_LOCALITY_1|
|locationType|SUB_LOCALITY_2|
|locationType|NEIGHBORHOOD|
|locationType|STREET_ADDRESS|

<h2 id="tocS_LocationFilter">LocationFilter</h2>
<!-- backwards compatibility -->
<a id="schemalocationfilter"></a>
<a id="schema_LocationFilter"></a>
<a id="tocSlocationfilter"></a>
<a id="tocslocationfilter"></a>

```json
{
  "address": "string",
  "distanceInMiles": 0,
  "latLng": {
    "latitude": 0,
    "longitude": 0
  },
  "regionCode": "string",
  "telecommutePreference": "TELECOMMUTE_PREFERENCE_UNSPECIFIED"
}
```

Input only. Geographic region of the search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Optional. The address name, such as "Mountain View" or "Bay Area".|
|distanceInMiles|number(double)|false|none|Optional. The distance_in_miles is applied when the location being searched for is identified as a city or smaller. When the location being searched for is a state or larger, this field is ignored.|
|latLng|[LatLng](#schemalatlng)|false|none|Optional. The latitude and longitude of the geographic center from which to search. This field's ignored if `address` is provided.|
|regionCode|string|false|none|Optional. CLDR region code of the country/region. This field may be used in two ways: 1) If telecommute preference is not set, this field is used address ambiguity of the user-input address. For example, "Liverpool" may refer to "Liverpool, NY, US" or "Liverpool, UK". This region code biases the address resolution toward a specific country or territory. If this field is not set, address resolution is biased toward the United States by default. 2) If telecommute preference is set to TELECOMMUTE_ALLOWED, the telecommute location filter will be limited to the region specified in this field. If this field is not set, the telecommute job locations will not be limited. See https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_information.html for details. Example: "CH" for Switzerland.|
|telecommutePreference|string|false|none|Optional. Allows the client to return jobs without a set location, specifically, telecommuting jobs (telecommuting is considered by the service as a special location). Job.posting_region indicates if a job permits telecommuting. If this field is set to TelecommutePreference.TELECOMMUTE_ALLOWED, telecommuting jobs are searched, and address and lat_lng are ignored. If not set or set to TelecommutePreference.TELECOMMUTE_EXCLUDED, the telecommute status of the jobs is ignored. Jobs that have PostingRegion.TELECOMMUTE and have additional Job.addresses may still be matched based on other location filters using address or latlng. This filter can be used by itself to search exclusively for telecommuting jobs, or it can be combined with another location filter to search for a combination of job locations, such as "Mountain View" or "telecommuting" jobs. However, when used in combination with other location filters, telecommuting jobs can be treated as less relevant than other jobs in the search response.|

#### Enumerated Values

|Property|Value|
|---|---|
|telecommutePreference|TELECOMMUTE_PREFERENCE_UNSPECIFIED|
|telecommutePreference|TELECOMMUTE_EXCLUDED|
|telecommutePreference|TELECOMMUTE_ALLOWED|
|telecommutePreference|TELECOMMUTE_JOBS_EXCLUDED|

<h2 id="tocS_MatchingJob">MatchingJob</h2>
<!-- backwards compatibility -->
<a id="schemamatchingjob"></a>
<a id="schema_MatchingJob"></a>
<a id="tocSmatchingjob"></a>
<a id="tocsmatchingjob"></a>

```json
{
  "commuteInfo": {
    "jobLocation": {
      "latLng": {
        "latitude": 0,
        "longitude": 0
      },
      "locationType": "LOCATION_TYPE_UNSPECIFIED",
      "postalAddress": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "radiusInMiles": 0
    },
    "travelDuration": "string"
  },
  "job": {
    "addresses": [
      "string"
    ],
    "applicationInfo": {
      "emails": [
        "string"
      ],
      "instruction": "string",
      "uris": [
        "string"
      ]
    },
    "companyDisplayName": "string",
    "companyName": "string",
    "compensationInfo": {
      "annualizedBaseCompensationRange": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "annualizedTotalCompensationRange": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "entries": [
        {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "description": "string",
          "expectedUnitsPerYear": 0,
          "range": {
            "maxCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "minCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "type": "COMPENSATION_TYPE_UNSPECIFIED",
          "unit": "COMPENSATION_UNIT_UNSPECIFIED"
        }
      ]
    },
    "customAttributes": {
      "property1": {
        "filterable": true,
        "longValues": [
          "string"
        ],
        "stringValues": [
          "string"
        ]
      },
      "property2": {
        "filterable": true,
        "longValues": [
          "string"
        ],
        "stringValues": [
          "string"
        ]
      }
    },
    "degreeTypes": [
      "DEGREE_TYPE_UNSPECIFIED"
    ],
    "department": "string",
    "derivedInfo": {
      "jobCategories": [
        "JOB_CATEGORY_UNSPECIFIED"
      ],
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          },
          "locationType": "LOCATION_TYPE_UNSPECIFIED",
          "postalAddress": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "radiusInMiles": 0
        }
      ]
    },
    "description": "string",
    "employmentTypes": [
      "EMPLOYMENT_TYPE_UNSPECIFIED"
    ],
    "incentives": "string",
    "jobBenefits": [
      "JOB_BENEFIT_UNSPECIFIED"
    ],
    "jobEndTime": "string",
    "jobLevel": "JOB_LEVEL_UNSPECIFIED",
    "jobStartTime": "string",
    "languageCode": "string",
    "name": "string",
    "postingCreateTime": "string",
    "postingExpireTime": "string",
    "postingPublishTime": "string",
    "postingRegion": "POSTING_REGION_UNSPECIFIED",
    "postingUpdateTime": "string",
    "processingOptions": {
      "disableStreetAddressResolution": true,
      "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
    },
    "promotionValue": 0,
    "qualifications": "string",
    "requisitionId": "string",
    "responsibilities": "string",
    "title": "string",
    "visibility": "VISIBILITY_UNSPECIFIED"
  },
  "jobSummary": "string",
  "jobTitleSnippet": "string",
  "searchTextSnippet": "string"
}
```

Output only. Job entry with metadata inside SearchJobsResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commuteInfo|[CommuteInfo](#schemacommuteinfo)|false|none|Commute information which is generated based on specified CommuteFilter.|
|job|[Job](#schemajob)|false|none|Job resource that matches the specified SearchJobsRequest.|
|jobSummary|string|false|none|A summary of the job with core information that's displayed on the search results listing page.|
|jobTitleSnippet|string|false|none|Contains snippets of text from the Job.job_title field most closely matching a search query's keywords, if available. The matching query keywords are enclosed in HTML bold tags.|
|searchTextSnippet|string|false|none|Contains snippets of text from the Job.description and similar fields that most closely match a search query's keywords, if available. All HTML tags in the original fields are stripped when returned in this field, and matching query keywords are enclosed in HTML bold tags.|

<h2 id="tocS_MendelDebugInput">MendelDebugInput</h2>
<!-- backwards compatibility -->
<a id="schemamendeldebuginput"></a>
<a id="schema_MendelDebugInput"></a>
<a id="tocSmendeldebuginput"></a>
<a id="tocsmendeldebuginput"></a>

```json
{
  "namespacedDebugInput": {
    "property1": {
      "absolutelyForcedExpNames": [
        "string"
      ],
      "absolutelyForcedExpTags": [
        "string"
      ],
      "absolutelyForcedExps": [
        0
      ],
      "conditionallyForcedExpNames": [
        "string"
      ],
      "conditionallyForcedExpTags": [
        "string"
      ],
      "conditionallyForcedExps": [
        0
      ],
      "disableAutomaticEnrollmentSelection": true,
      "disableExpNames": [
        "string"
      ],
      "disableExpTags": [
        "string"
      ],
      "disableExps": [
        0
      ],
      "disableManualEnrollmentSelection": true,
      "disableOrganicSelection": true,
      "forcedFlags": {
        "property1": "string",
        "property2": "string"
      },
      "forcedRollouts": {
        "property1": true,
        "property2": true
      },
      "testingMode": "TESTING_MODE_UNSPECIFIED"
    },
    "property2": {
      "absolutelyForcedExpNames": [
        "string"
      ],
      "absolutelyForcedExpTags": [
        "string"
      ],
      "absolutelyForcedExps": [
        0
      ],
      "conditionallyForcedExpNames": [
        "string"
      ],
      "conditionallyForcedExpTags": [
        "string"
      ],
      "conditionallyForcedExps": [
        0
      ],
      "disableAutomaticEnrollmentSelection": true,
      "disableExpNames": [
        "string"
      ],
      "disableExpTags": [
        "string"
      ],
      "disableExps": [
        0
      ],
      "disableManualEnrollmentSelection": true,
      "disableOrganicSelection": true,
      "forcedFlags": {
        "property1": "string",
        "property2": "string"
      },
      "forcedRollouts": {
        "property1": true,
        "property2": true
      },
      "testingMode": "TESTING_MODE_UNSPECIFIED"
    }
  }
}
```

Message representing input to a Mendel server for debug forcing. See go/mendel-debug-forcing for more details. Next ID: 2

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespacedDebugInput|object|false|none|When a request spans multiple servers, a MendelDebugInput may travel with the request and take effect in all the servers. This field is a map of namespaces to NamespacedMendelDebugInput protos. In a single server, up to two NamespacedMendelDebugInput protos are applied: 1. NamespacedMendelDebugInput with the global namespace (key == ""). 2. NamespacedMendelDebugInput with the server's namespace. When both NamespacedMendelDebugInput protos are present, they are merged. See go/mendel-debug-forcing for more details.|

<h2 id="tocS_Money">Money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_Money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

```json
{
  "currencyCode": "string",
  "nanos": 0,
  "units": "string"
}
```

Represents an amount of money with its currency type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|The three-letter currency code defined in ISO 4217.|
|nanos|integer(int32)|false|none|Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.|
|units|string(int64)|false|none|The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.|

<h2 id="tocS_NamespacedDebugInput">NamespacedDebugInput</h2>
<!-- backwards compatibility -->
<a id="schemanamespaceddebuginput"></a>
<a id="schema_NamespacedDebugInput"></a>
<a id="tocSnamespaceddebuginput"></a>
<a id="tocsnamespaceddebuginput"></a>

```json
{
  "absolutelyForcedExpNames": [
    "string"
  ],
  "absolutelyForcedExpTags": [
    "string"
  ],
  "absolutelyForcedExps": [
    0
  ],
  "conditionallyForcedExpNames": [
    "string"
  ],
  "conditionallyForcedExpTags": [
    "string"
  ],
  "conditionallyForcedExps": [
    0
  ],
  "disableAutomaticEnrollmentSelection": true,
  "disableExpNames": [
    "string"
  ],
  "disableExpTags": [
    "string"
  ],
  "disableExps": [
    0
  ],
  "disableManualEnrollmentSelection": true,
  "disableOrganicSelection": true,
  "forcedFlags": {
    "property1": "string",
    "property2": "string"
  },
  "forcedRollouts": {
    "property1": true,
    "property2": true
  },
  "testingMode": "TESTING_MODE_UNSPECIFIED"
}
```

Next ID: 16

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absolutelyForcedExpNames|[string]|false|none|Set of experiment names to be absolutely forced. These experiments will be forced without evaluating the conditions.|
|absolutelyForcedExpTags|[string]|false|none|Set of experiment tags to be absolutely forced. The experiments with these tags will be forced without evaluating the conditions.|
|absolutelyForcedExps|[integer(int32)]|false|none|Set of experiment ids to be absolutely forced. These ids will be forced without evaluating the conditions.|
|conditionallyForcedExpNames|[string]|false|none|Set of experiment names to be conditionally forced. These experiments will be forced only if their conditions and their parent domain's conditions are true.|
|conditionallyForcedExpTags|[string]|false|none|Set of experiment tags to be conditionally forced. The experiments with these tags will be forced only if their conditions and their parent domain's conditions are true.|
|conditionallyForcedExps|[integer(int32)]|false|none|Set of experiment ids to be conditionally forced. These ids will be forced only if their conditions and their parent domain's conditions are true.|
|disableAutomaticEnrollmentSelection|boolean|false|none|If true, disable automatic enrollment selection (at all diversion points). Automatic enrollment selection means experiment selection process based on the experiment's automatic enrollment condition. This does not disable selection of forced experiments. Setting this field to false does not change anything in the experiment selection process.|
|disableExpNames|[string]|false|none|Set of experiment names to be disabled. If an experiment is disabled, it is never selected nor forced. If an aggregate experiment is disabled, its partitions are disabled together. If an experiment with an enrollment is disabled, the enrollment is disabled together. If a name corresponds to a domain, the domain itself and all descendant experiments and domains are disabled together.|
|disableExpTags|[string]|false|none|Set of experiment tags to be disabled. All experiments that are tagged with one or more of these tags are disabled. If an experiment is disabled, it is never selected nor forced. If an aggregate experiment is disabled, its partitions are disabled together. If an experiment with an enrollment is disabled, the enrollment is disabled together.|
|disableExps|[integer(int32)]|false|none|Set of experiment ids to be disabled. If an experiment is disabled, it is never selected nor forced. If an aggregate experiment is disabled, its partitions are disabled together. If an experiment with an enrollment is disabled, the enrollment is disabled together. If an ID corresponds to a domain, the domain itself and all descendant experiments and domains are disabled together.|
|disableManualEnrollmentSelection|boolean|false|none|If true, disable manual enrollment selection (at all diversion points). Manual enrollment selection means experiment selection process based on the request's manual enrollment states (a.k.a. opt-in experiments). This does not disable selection of forced experiments. Setting this field to false does not change anything in the experiment selection process.|
|disableOrganicSelection|boolean|false|none|If true, disable organic experiment selection (at all diversion points). Organic selection means experiment selection process based on traffic allocation and diversion condition evaluation. This does not disable selection of forced experiments. This is useful in cases when it is not known whether experiment selection behavior is responsible for a error or breakage. Disabling organic selection may help to isolate the cause of a given problem. Setting this field to false does not change anything in the experiment selection process.|
|forcedFlags|object|false|none|Flags to force in a particular experiment state. Map from flag name to flag value.|
|forcedRollouts|object|false|none|Rollouts to force in a particular experiment state. Map from rollout name to rollout value.|
|testingMode|string|false|none|Sets different testing modes. See the documentation in the TestingMode message for more information.|

#### Enumerated Values

|Property|Value|
|---|---|
|testingMode|TESTING_MODE_UNSPECIFIED|
|testingMode|TESTING_MODE_ALL_OFF|
|testingMode|TESTING_MODE_ALL_ON|

<h2 id="tocS_NumericBucketingOption">NumericBucketingOption</h2>
<!-- backwards compatibility -->
<a id="schemanumericbucketingoption"></a>
<a id="schema_NumericBucketingOption"></a>
<a id="tocSnumericbucketingoption"></a>
<a id="tocsnumericbucketingoption"></a>

```json
{
  "bucketBounds": [
    0
  ],
  "requiresMinMax": true
}
```

Input only. Use this field to specify bucketing option for the histogram search response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketBounds|[number(double)]|false|none|Required. Two adjacent values form a histogram bucket. Values should be in ascending order. For example, if [5, 10, 15] are provided, four buckets are created: (-inf, 5), 5, 10), [10, 15), [15, inf). At most 20 [buckets_bound is supported.|
|requiresMinMax|boolean|false|none|Optional. If set to true, the histogram result includes minimum/maximum value of the numeric field.|

<h2 id="tocS_NumericBucketingResult">NumericBucketingResult</h2>
<!-- backwards compatibility -->
<a id="schemanumericbucketingresult"></a>
<a id="schema_NumericBucketingResult"></a>
<a id="tocSnumericbucketingresult"></a>
<a id="tocsnumericbucketingresult"></a>

```json
{
  "counts": [
    {
      "count": 0,
      "range": {
        "from": 0,
        "to": 0
      }
    }
  ],
  "maxValue": 0,
  "minValue": 0
}
```

Output only. Custom numeric bucketing result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counts|[[BucketizedCount](#schemabucketizedcount)]|false|none|Count within each bucket. Its size is the length of NumericBucketingOption.bucket_bounds plus 1.|
|maxValue|number(double)|false|none|Stores the maximum value of the numeric field. Is populated only if [NumericBucketingOption.requires_min_max] is set to true.|
|minValue|number(double)|false|none|Stores the minimum value of the numeric field. Will be populated only if [NumericBucketingOption.requires_min_max] is set to true.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_PostalAddress">PostalAddress</h2>
<!-- backwards compatibility -->
<a id="schemapostaladdress"></a>
<a id="schema_PostalAddress"></a>
<a id="tocSpostaladdress"></a>
<a id="tocspostaladdress"></a>

```json
{
  "addressLines": [
    "string"
  ],
  "administrativeArea": "string",
  "languageCode": "string",
  "locality": "string",
  "organization": "string",
  "postalCode": "string",
  "recipients": [
    "string"
  ],
  "regionCode": "string",
  "revision": 0,
  "sortingCode": "string",
  "sublocality": "string"
}
```

Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLines|[string]|false|none|Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).|
|administrativeArea|string|false|none|Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.|
|languageCode|string|false|none|Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".|
|locality|string|false|none|Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.|
|organization|string|false|none|Optional. The name of the organization at the address.|
|postalCode|string|false|none|Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).|
|recipients|[string]|false|none|Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.|
|regionCode|string|false|none|Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.|
|revision|integer(int32)|false|none|The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.|
|sortingCode|string|false|none|Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).|
|sublocality|string|false|none|Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.|

<h2 id="tocS_ProcessingOptions">ProcessingOptions</h2>
<!-- backwards compatibility -->
<a id="schemaprocessingoptions"></a>
<a id="schema_ProcessingOptions"></a>
<a id="tocSprocessingoptions"></a>
<a id="tocsprocessingoptions"></a>

```json
{
  "disableStreetAddressResolution": true,
  "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
}
```

Input only. Options for job processing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableStreetAddressResolution|boolean|false|none|Optional. If set to `true`, the service does not attempt to resolve a more precise address for the job.|
|htmlSanitization|string|false|none|Optional. Option for job HTML content sanitization. Applied fields are: * description * applicationInfo.instruction * incentives * qualifications * responsibilities HTML tags in these fields may be stripped if sanitiazation is not disabled. Defaults to HtmlSanitization.SIMPLE_FORMATTING_ONLY.|

#### Enumerated Values

|Property|Value|
|---|---|
|htmlSanitization|HTML_SANITIZATION_UNSPECIFIED|
|htmlSanitization|HTML_SANITIZATION_DISABLED|
|htmlSanitization|SIMPLE_FORMATTING_ONLY|

<h2 id="tocS_RequestMetadata">RequestMetadata</h2>
<!-- backwards compatibility -->
<a id="schemarequestmetadata"></a>
<a id="schema_RequestMetadata"></a>
<a id="tocSrequestmetadata"></a>
<a id="tocsrequestmetadata"></a>

```json
{
  "deviceInfo": {
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "id": "string"
  },
  "domain": "string",
  "sessionId": "string",
  "userId": "string"
}
```

Input only. Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceInfo|[DeviceInfo](#schemadeviceinfo)|false|none|Optional. The type of device used by the job seeker at the time of the call to the service.|
|domain|string|false|none|Required. The client-defined scope or source of the service call, which typically is the domain on which the service has been implemented and is currently being run. For example, if the service is being run by client *Foo, Inc.*, on job board www.foo.com and career site www.bar.com, then this field is set to "foo.com" for use on the job board, and "bar.com" for use on the career site. If this field isn't available for some reason, send "UNKNOWN". Any improvements to the model for a particular tenant site rely on this field being set correctly to a domain. The maximum number of allowed characters is 255.|
|sessionId|string|false|none|Required. A unique session identification string. A session is defined as the duration of an end user's interaction with the service over a certain period. Obfuscate this field for privacy concerns before providing it to the service. If this field is not available for some reason, send "UNKNOWN". Note that any improvements to the model for a particular tenant site, rely on this field being set correctly to some unique session_id. The maximum number of allowed characters is 255.|
|userId|string|false|none|Required. A unique user identification string, as determined by the client. To have the strongest positive impact on search quality make sure the client-level is unique. Obfuscate this field for privacy concerns before providing it to the service. If this field is not available for some reason, send "UNKNOWN". Note that any improvements to the model for a particular tenant site, rely on this field being set correctly to a unique user_id. The maximum number of allowed characters is 255.|

<h2 id="tocS_ResponseMetadata">ResponseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaresponsemetadata"></a>
<a id="schema_ResponseMetadata"></a>
<a id="tocSresponsemetadata"></a>
<a id="tocsresponsemetadata"></a>

```json
{
  "requestId": "string"
}
```

Output only. Additional information returned to client, such as debugging information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|A unique id associated with this call. This id is logged for tracking purposes.|

<h2 id="tocS_SearchJobsRequest">SearchJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchjobsrequest"></a>
<a id="schema_SearchJobsRequest"></a>
<a id="tocSsearchjobsrequest"></a>
<a id="tocssearchjobsrequest"></a>

```json
{
  "customRankingInfo": {
    "importanceLevel": "IMPORTANCE_LEVEL_UNSPECIFIED",
    "rankingExpression": "string"
  },
  "disableKeywordMatch": true,
  "diversificationLevel": "DIVERSIFICATION_LEVEL_UNSPECIFIED",
  "enableBroadening": true,
  "histogramFacets": {
    "compensationHistogramFacets": [
      {
        "bucketingOption": {
          "bucketBounds": [
            0
          ],
          "requiresMinMax": true
        },
        "type": "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
      }
    ],
    "customAttributeHistogramFacets": [
      {
        "key": "string",
        "longValueHistogramBucketingOption": {
          "bucketBounds": [
            0
          ],
          "requiresMinMax": true
        },
        "stringValueHistogram": true
      }
    ],
    "simpleHistogramFacets": [
      "SEARCH_TYPE_UNSPECIFIED"
    ]
  },
  "histogramQueries": [
    {
      "histogramQuery": "string"
    }
  ],
  "jobQuery": {
    "commuteFilter": {
      "allowImpreciseAddresses": true,
      "commuteMethod": "COMMUTE_METHOD_UNSPECIFIED",
      "departureTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "roadTraffic": "ROAD_TRAFFIC_UNSPECIFIED",
      "startCoordinates": {
        "latitude": 0,
        "longitude": 0
      },
      "travelDuration": "string"
    },
    "companyDisplayNames": [
      "string"
    ],
    "companyNames": [
      "string"
    ],
    "compensationFilter": {
      "includeJobsWithUnspecifiedCompensationRange": true,
      "range": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "type": "FILTER_TYPE_UNSPECIFIED",
      "units": [
        "COMPENSATION_UNIT_UNSPECIFIED"
      ]
    },
    "customAttributeFilter": "string",
    "disableSpellCheck": true,
    "employmentTypes": [
      "EMPLOYMENT_TYPE_UNSPECIFIED"
    ],
    "excludedJobs": [
      "string"
    ],
    "jobCategories": [
      "JOB_CATEGORY_UNSPECIFIED"
    ],
    "languageCodes": [
      "string"
    ],
    "locationFilters": [
      {
        "address": "string",
        "distanceInMiles": 0,
        "latLng": {
          "latitude": 0,
          "longitude": 0
        },
        "regionCode": "string",
        "telecommutePreference": "TELECOMMUTE_PREFERENCE_UNSPECIFIED"
      }
    ],
    "publishTimeRange": {
      "endTime": "string",
      "startTime": "string"
    },
    "query": "string",
    "queryLanguageCode": "string"
  },
  "jobView": "JOB_VIEW_UNSPECIFIED",
  "offset": 0,
  "orderBy": "string",
  "pageSize": 0,
  "pageToken": "string",
  "requestMetadata": {
    "deviceInfo": {
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "id": "string"
    },
    "domain": "string",
    "sessionId": "string",
    "userId": "string"
  },
  "requirePreciseResultSize": true,
  "searchMode": "SEARCH_MODE_UNSPECIFIED"
}
```

Input only. The Request body of the `SearchJobs` call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customRankingInfo|[CustomRankingInfo](#schemacustomrankinginfo)|false|none|Optional. Controls over how job documents get ranked on top of existing relevance score (determined by API algorithm).|
|disableKeywordMatch|boolean|false|none|Optional. Controls whether to disable exact keyword match on Job.job_title, Job.description, Job.company_display_name, Job.locations, Job.qualifications. When disable keyword match is turned off, a keyword match returns jobs that do not match given category filters when there are matching keywords. For example, the query "program manager," a result is returned even if the job posting has the title "software developer," which does not fall into "program manager" ontology, but does have "program manager" appearing in its description. For queries like "cloud" that does not contain title or location specific ontology, jobs with "cloud" keyword matches are returned regardless of this flag's value. Please use Company.keyword_searchable_custom_fields or Company.keyword_searchable_custom_attributes if company specific globally matched custom field/attribute string values is needed. Enabling keyword match improves recall of subsequent search requests. Defaults to false.|
|diversificationLevel|string|false|none|Optional. Controls whether highly similar jobs are returned next to each other in the search results. Jobs are identified as highly similar based on their titles, job categories, and locations. Highly similar results are clustered so that only one representative job of the cluster is displayed to the job seeker higher up in the results, with the other jobs being displayed lower down in the results. Defaults to DiversificationLevel.SIMPLE if no value is specified.|
|enableBroadening|boolean|false|none|Optional. Controls whether to broaden the search when it produces sparse results. Broadened queries append results to the end of the matching results list. Defaults to false.|
|histogramFacets|[HistogramFacets](#schemahistogramfacets)|false|none|Optional. Histogram requests for jobs matching JobQuery.|
|histogramQueries|[[HistogramQuery](#schemahistogramquery)]|false|none|Optional. Expression based histogram requests for jobs matching JobQuery.|
|jobQuery|[JobQuery](#schemajobquery)|false|none|Optional. Query used to search against jobs, such as keyword, location filters, etc.|
|jobView|string|false|none|Optional. The desired job attributes returned for jobs in the search response. Defaults to JobView.SMALL if no value is specified.|
|offset|integer(int32)|false|none|Optional. An integer that specifies the current offset (that is, starting result location, amongst the jobs deemed by the API as relevant) in search results. This field is only considered if page_token is unset. The maximum allowed value is 5000. Otherwise an error is thrown. For example, 0 means to return results starting from the first matching job, and 10 means to return from the 11th job. This can be used for pagination, (for example, pageSize = 10 and offset = 10 means to return from the second page).|
|orderBy|string|false|none|Optional. The criteria determining how search results are sorted. Default is "relevance desc". Supported options are: * `"relevance desc"`: By relevance descending, as determined by the API algorithms. Relevance thresholding of query results is only available with this ordering. * `"posting_publish_time desc"`: By Job.posting_publish_time descending. * `"posting_update_time desc"`: By Job.posting_update_time descending. * `"title"`: By Job.title ascending. * `"title desc"`: By Job.title descending. * `"annualized_base_compensation"`: By job's CompensationInfo.annualized_base_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_base_compensation desc"`: By job's CompensationInfo.annualized_base_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation"`: By job's CompensationInfo.annualized_total_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation desc"`: By job's CompensationInfo.annualized_total_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"custom_ranking desc"`: By the relevance score adjusted to the SearchJobsRequest.custom_ranking_info.ranking_expression with weight factor assigned by SearchJobsRequest.custom_ranking_info.importance_level in descending order. * Location sorting: Use the special syntax to order jobs by distance: "`distance_from('Hawaii')`": Order by distance from Hawaii. "`distance_from(19.89, 155.5)`": Order by distance from a coordinate. "`distance_from('Hawaii'), distance_from('Puerto Rico')`": Order by multiple locations. See details below. "`distance_from('Hawaii'), distance_from(19.89, 155.5)`": Order by multiple locations. See details below. The string can have a maximum of 256 characters. When multiple distance centers are provided, a job that is close to any of the distance centers would have a high rank. When a job has multiple locations, the job location closest to one of the distance centers will be used. Jobs that don't have locations will be ranked at the bottom. Distance is calculated with a precision of 11.3 meters (37.4 feet). Diversification strategy is still applied unless explicitly disabled in diversification_level.|
|pageSize|integer(int32)|false|none|Optional. A limit on the number of jobs returned in the search results. Increasing this value above the default value of 10 can increase search response time. The value can be between 1 and 100.|
|pageToken|string|false|none|Optional. The token specifying the current offset within search results. See SearchJobsResponse.next_page_token for an explanation of how to obtain the next set of query results.|
|requestMetadata|[RequestMetadata](#schemarequestmetadata)|false|none|Required. The meta information collected about the job searcher, used to improve the search quality of the service. The identifiers (such as `user_id`) are provided by users, and must be unique and consistent.|
|requirePreciseResultSize|boolean|false|none|This field is deprecated.|
|searchMode|string|false|none|Optional. Mode of a search. Defaults to SearchMode.JOB_SEARCH.|

#### Enumerated Values

|Property|Value|
|---|---|
|diversificationLevel|DIVERSIFICATION_LEVEL_UNSPECIFIED|
|diversificationLevel|DISABLED|
|diversificationLevel|SIMPLE|
|jobView|JOB_VIEW_UNSPECIFIED|
|jobView|JOB_VIEW_ID_ONLY|
|jobView|JOB_VIEW_MINIMAL|
|jobView|JOB_VIEW_SMALL|
|jobView|JOB_VIEW_FULL|
|searchMode|SEARCH_MODE_UNSPECIFIED|
|searchMode|JOB_SEARCH|
|searchMode|FEATURED_JOB_SEARCH|

<h2 id="tocS_SearchJobsResponse">SearchJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchjobsresponse"></a>
<a id="schema_SearchJobsResponse"></a>
<a id="tocSsearchjobsresponse"></a>
<a id="tocssearchjobsresponse"></a>

```json
{
  "broadenedQueryJobsCount": 0,
  "estimatedTotalSize": 0,
  "histogramQueryResults": [
    {
      "histogram": {
        "property1": "string",
        "property2": "string"
      },
      "histogramQuery": "string"
    }
  ],
  "histogramResults": {
    "compensationHistogramResults": [
      {
        "result": {
          "counts": [
            {
              "count": 0,
              "range": {
                "from": 0,
                "to": 0
              }
            }
          ],
          "maxValue": 0,
          "minValue": 0
        },
        "type": "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
      }
    ],
    "customAttributeHistogramResults": [
      {
        "key": "string",
        "longValueHistogramResult": {
          "counts": [
            {
              "count": 0,
              "range": {
                "from": 0,
                "to": 0
              }
            }
          ],
          "maxValue": 0,
          "minValue": 0
        },
        "stringValueHistogramResult": {
          "property1": 0,
          "property2": 0
        }
      }
    ],
    "simpleHistogramResults": [
      {
        "searchType": "SEARCH_TYPE_UNSPECIFIED",
        "values": {
          "property1": 0,
          "property2": 0
        }
      }
    ]
  },
  "locationFilters": [
    {
      "latLng": {
        "latitude": 0,
        "longitude": 0
      },
      "locationType": "LOCATION_TYPE_UNSPECIFIED",
      "postalAddress": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "radiusInMiles": 0
    }
  ],
  "matchingJobs": [
    {
      "commuteInfo": {
        "jobLocation": {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          },
          "locationType": "LOCATION_TYPE_UNSPECIFIED",
          "postalAddress": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "radiusInMiles": 0
        },
        "travelDuration": "string"
      },
      "job": {
        "addresses": [
          "string"
        ],
        "applicationInfo": {
          "emails": [
            "string"
          ],
          "instruction": "string",
          "uris": [
            "string"
          ]
        },
        "companyDisplayName": "string",
        "companyName": "string",
        "compensationInfo": {
          "annualizedBaseCompensationRange": {
            "maxCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "minCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "annualizedTotalCompensationRange": {
            "maxCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "minCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "entries": [
            {
              "amount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "description": "string",
              "expectedUnitsPerYear": 0,
              "range": {
                "maxCompensation": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "minCompensation": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                }
              },
              "type": "COMPENSATION_TYPE_UNSPECIFIED",
              "unit": "COMPENSATION_UNIT_UNSPECIFIED"
            }
          ]
        },
        "customAttributes": {
          "property1": {
            "filterable": true,
            "longValues": [
              "string"
            ],
            "stringValues": [
              "string"
            ]
          },
          "property2": {
            "filterable": true,
            "longValues": [
              "string"
            ],
            "stringValues": [
              "string"
            ]
          }
        },
        "degreeTypes": [
          "DEGREE_TYPE_UNSPECIFIED"
        ],
        "department": "string",
        "derivedInfo": {
          "jobCategories": [
            "JOB_CATEGORY_UNSPECIFIED"
          ],
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              },
              "locationType": "LOCATION_TYPE_UNSPECIFIED",
              "postalAddress": {
                "addressLines": [
                  "string"
                ],
                "administrativeArea": "string",
                "languageCode": "string",
                "locality": "string",
                "organization": "string",
                "postalCode": "string",
                "recipients": [
                  "string"
                ],
                "regionCode": "string",
                "revision": 0,
                "sortingCode": "string",
                "sublocality": "string"
              },
              "radiusInMiles": 0
            }
          ]
        },
        "description": "string",
        "employmentTypes": [
          "EMPLOYMENT_TYPE_UNSPECIFIED"
        ],
        "incentives": "string",
        "jobBenefits": [
          "JOB_BENEFIT_UNSPECIFIED"
        ],
        "jobEndTime": "string",
        "jobLevel": "JOB_LEVEL_UNSPECIFIED",
        "jobStartTime": "string",
        "languageCode": "string",
        "name": "string",
        "postingCreateTime": "string",
        "postingExpireTime": "string",
        "postingPublishTime": "string",
        "postingRegion": "POSTING_REGION_UNSPECIFIED",
        "postingUpdateTime": "string",
        "processingOptions": {
          "disableStreetAddressResolution": true,
          "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
        },
        "promotionValue": 0,
        "qualifications": "string",
        "requisitionId": "string",
        "responsibilities": "string",
        "title": "string",
        "visibility": "VISIBILITY_UNSPECIFIED"
      },
      "jobSummary": "string",
      "jobTitleSnippet": "string",
      "searchTextSnippet": "string"
    }
  ],
  "metadata": {
    "requestId": "string"
  },
  "nextPageToken": "string",
  "spellCorrection": {
    "corrected": true,
    "correctedText": "string"
  },
  "totalSize": 0
}
```

Output only. Response for SearchJob method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadenedQueryJobsCount|integer(int32)|false|none|If query broadening is enabled, we may append additional results from the broadened query. This number indicates how many of the jobs returned in the jobs field are from the broadened query. These results are always at the end of the jobs list. In particular, a value of 0, or if the field isn't set, all the jobs in the jobs list are from the original (without broadening) query. If this field is non-zero, subsequent requests with offset after this result set should contain all broadened results.|
|estimatedTotalSize|integer(int32)|false|none|An estimation of the number of jobs that match the specified query. This number is not guaranteed to be accurate. For accurate results, see SearchJobsResponse.total_size.|
|histogramQueryResults|[[HistogramQueryResult](#schemahistogramqueryresult)]|false|none|The histogram results that match with specified SearchJobsRequest.histogram_queries.|
|histogramResults|[HistogramResults](#schemahistogramresults)|false|none|The histogram results that match specified SearchJobsRequest.histogram_facets.|
|locationFilters|[[Location](#schemalocation)]|false|none|The location filters that the service applied to the specified query. If any filters are lat-lng based, the JobLocation.location_type is JobLocation.LocationType#LOCATION_TYPE_UNSPECIFIED.|
|matchingJobs|[[MatchingJob](#schemamatchingjob)]|false|none|The Job entities that match the specified SearchJobsRequest.|
|metadata|[ResponseMetadata](#schemaresponsemetadata)|false|none|Additional information for the API invocation, such as the request tracking id.|
|nextPageToken|string|false|none|The token that specifies the starting position of the next page of results. This field is empty if there are no more results.|
|spellCorrection|[SpellingCorrection](#schemaspellingcorrection)|false|none|The spell checking result, and correction.|
|totalSize|integer(int32)|false|none|The precise result count with limit 100,000.|

<h2 id="tocS_SpellingCorrection">SpellingCorrection</h2>
<!-- backwards compatibility -->
<a id="schemaspellingcorrection"></a>
<a id="schema_SpellingCorrection"></a>
<a id="tocSspellingcorrection"></a>
<a id="tocsspellingcorrection"></a>

```json
{
  "corrected": true,
  "correctedText": "string"
}
```

Output only. Spell check result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corrected|boolean|false|none|Indicates if the query was corrected by the spell checker.|
|correctedText|string|false|none|Correction output consisting of the corrected keyword string.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_TimeOfDay">TimeOfDay</h2>
<!-- backwards compatibility -->
<a id="schematimeofday"></a>
<a id="schema_TimeOfDay"></a>
<a id="tocStimeofday"></a>
<a id="tocstimeofday"></a>

```json
{
  "hours": 0,
  "minutes": 0,
  "nanos": 0,
  "seconds": 0
}
```

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|integer(int32)|false|none|Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Minutes of hour of day. Must be from 0 to 59.|
|nanos|integer(int32)|false|none|Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.|
|seconds|integer(int32)|false|none|Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.|

<h2 id="tocS_TimestampRange">TimestampRange</h2>
<!-- backwards compatibility -->
<a id="schematimestamprange"></a>
<a id="schema_TimestampRange"></a>
<a id="tocStimestamprange"></a>
<a id="tocstimestamprange"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

Message representing a period of time between two timestamps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|End of the period.|
|startTime|string(google-datetime)|false|none|Begin of the period.|

<h2 id="tocS_UpdateCompanyRequest">UpdateCompanyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecompanyrequest"></a>
<a id="schema_UpdateCompanyRequest"></a>
<a id="tocSupdatecompanyrequest"></a>
<a id="tocsupdatecompanyrequest"></a>

```json
{
  "company": {
    "careerSiteUri": "string",
    "derivedInfo": {
      "headquartersLocation": {
        "latLng": {
          "latitude": 0,
          "longitude": 0
        },
        "locationType": "LOCATION_TYPE_UNSPECIFIED",
        "postalAddress": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "radiusInMiles": 0
      }
    },
    "displayName": "string",
    "eeoText": "string",
    "externalId": "string",
    "headquartersAddress": "string",
    "hiringAgency": true,
    "imageUri": "string",
    "keywordSearchableJobCustomAttributes": [
      "string"
    ],
    "name": "string",
    "size": "COMPANY_SIZE_UNSPECIFIED",
    "suspended": true,
    "websiteUri": "string"
  },
  "updateMask": "string"
}
```

Input only. Request for updating a specified company.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|[Company](#schemacompany)|false|none|Required. The company resource to replace the current resource in the system.|
|updateMask|string(google-fieldmask)|false|none|Optional but strongly recommended for the best service experience. If update_mask is provided, only the specified fields in company are updated. Otherwise all the fields are updated. A field mask to specify the company fields to be updated. Only top level fields of Company are supported.|

<h2 id="tocS_UpdateJobRequest">UpdateJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobrequest"></a>
<a id="schema_UpdateJobRequest"></a>
<a id="tocSupdatejobrequest"></a>
<a id="tocsupdatejobrequest"></a>

```json
{
  "job": {
    "addresses": [
      "string"
    ],
    "applicationInfo": {
      "emails": [
        "string"
      ],
      "instruction": "string",
      "uris": [
        "string"
      ]
    },
    "companyDisplayName": "string",
    "companyName": "string",
    "compensationInfo": {
      "annualizedBaseCompensationRange": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "annualizedTotalCompensationRange": {
        "maxCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "minCompensation": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "entries": [
        {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "description": "string",
          "expectedUnitsPerYear": 0,
          "range": {
            "maxCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "minCompensation": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "type": "COMPENSATION_TYPE_UNSPECIFIED",
          "unit": "COMPENSATION_UNIT_UNSPECIFIED"
        }
      ]
    },
    "customAttributes": {
      "property1": {
        "filterable": true,
        "longValues": [
          "string"
        ],
        "stringValues": [
          "string"
        ]
      },
      "property2": {
        "filterable": true,
        "longValues": [
          "string"
        ],
        "stringValues": [
          "string"
        ]
      }
    },
    "degreeTypes": [
      "DEGREE_TYPE_UNSPECIFIED"
    ],
    "department": "string",
    "derivedInfo": {
      "jobCategories": [
        "JOB_CATEGORY_UNSPECIFIED"
      ],
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          },
          "locationType": "LOCATION_TYPE_UNSPECIFIED",
          "postalAddress": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "radiusInMiles": 0
        }
      ]
    },
    "description": "string",
    "employmentTypes": [
      "EMPLOYMENT_TYPE_UNSPECIFIED"
    ],
    "incentives": "string",
    "jobBenefits": [
      "JOB_BENEFIT_UNSPECIFIED"
    ],
    "jobEndTime": "string",
    "jobLevel": "JOB_LEVEL_UNSPECIFIED",
    "jobStartTime": "string",
    "languageCode": "string",
    "name": "string",
    "postingCreateTime": "string",
    "postingExpireTime": "string",
    "postingPublishTime": "string",
    "postingRegion": "POSTING_REGION_UNSPECIFIED",
    "postingUpdateTime": "string",
    "processingOptions": {
      "disableStreetAddressResolution": true,
      "htmlSanitization": "HTML_SANITIZATION_UNSPECIFIED"
    },
    "promotionValue": 0,
    "qualifications": "string",
    "requisitionId": "string",
    "responsibilities": "string",
    "title": "string",
    "visibility": "VISIBILITY_UNSPECIFIED"
  },
  "updateMask": "string"
}
```

Input only. Update job request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[Job](#schemajob)|false|none|Required. The Job to be updated.|
|updateMask|string(google-fieldmask)|false|none|Optional but strongly recommended to be provided for the best service experience. If update_mask is provided, only the specified fields in job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported.|
