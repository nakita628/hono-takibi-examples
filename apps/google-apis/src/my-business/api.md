<h1 id="google-my-business-api">Google My Business API v4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google My Business API provides an interface for managing business location information on Google.

Base URLs:

* <a href="https://mybusiness.googleapis.com/">https://mybusiness.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/my-business/">External documentation</a>

<h1 id="google-my-business-api-accounts">accounts</h1>

## mybusiness.accounts.list

<a id="opIdmybusiness.accounts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/accounts \
  -H 'Accept: application/json'
```

`GET /v4/accounts`

Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

<h3 id="mybusinessaccountslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|A filter constraining the accounts to return. The response includes only entries that match the filter. If `filter` is empty, then no constraints are applied and all accounts (paginated) are retrieved for the requested account. For example, a request with the filter `type=USER_GROUP` will only return user groups.|
|name|query|string|false|The resource name of the account for which the list of directly accessible accounts is to be retrieved. This only makes sense for Organizations and User Groups. If empty, will return `ListAccounts` for the authenticated user.|
|pageSize|query|integer|false|How many accounts to fetch per page. Default is 20, minimum is 2, and maximum page size is 20.|
|pageToken|query|string|false|If specified, the next page of accounts is retrieved. The `pageToken` is returned when a call to `accounts.list` returns more results than can fit into the requested page size.|
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
  "accounts": [
    {
      "accountName": "string",
      "accountNumber": "string",
      "name": "string",
      "organizationInfo": {
        "phoneNumber": "string",
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
        "registeredDomain": "string"
      },
      "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
      "role": "ACCOUNT_ROLE_UNSPECIFIED",
      "state": {
        "status": "ACCOUNT_STATUS_UNSPECIFIED"
      },
      "type": "ACCOUNT_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="mybusinessaccountslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAccountsResponse](#schemalistaccountsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.create

<a id="opIdmybusiness.accounts.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accountName": "string",
    "accountNumber": "string",
    "name": "string",
    "organizationInfo": {
      "phoneNumber": "string",
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
      "registeredDomain": "string"
    },
    "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
    "role": "ACCOUNT_ROLE_UNSPECIFIED",
    "state": {
      "status": "ACCOUNT_STATUS_UNSPECIFIED"
    },
    "type": "ACCOUNT_TYPE_UNSPECIFIED"
  }'
```

`POST /v4/accounts`

Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups. 

> Body parameter

```json
{
  "accountName": "string",
  "accountNumber": "string",
  "name": "string",
  "organizationInfo": {
    "phoneNumber": "string",
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
    "registeredDomain": "string"
  },
  "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
  "role": "ACCOUNT_ROLE_UNSPECIFIED",
  "state": {
    "status": "ACCOUNT_STATUS_UNSPECIFIED"
  },
  "type": "ACCOUNT_TYPE_UNSPECIFIED"
}
```

<h3 id="mybusinessaccountscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primaryOwner|query|string|false|The resource name of the account which will be the primary owner of the account being created. It should be of the form `accounts/{account_id}/`.|
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
|body|body|[Account](#schemaaccount)|false|none|
|» accountName|body|string|false|The name of the account. *Note:* For an account with AccountType `PERSONAL`, this is the first and last name of the user account.|
|» accountNumber|body|string|false|Account reference number if provisioned.|
|» name|body|string|false|The resource name, in the format `accounts/{account_id}`.|
|» organizationInfo|body|[OrganizationInfo](#schemaorganizationinfo)|false|Additional info for an organization. This is populated only for an organization account.|
|» permissionLevel|body|string|false|Output only. Specifies the PermissionLevel the caller has for this account.|
|» role|body|string|false|Output only. Specifies the AccountRole the caller has for this account.|
|» state|body|[AccountState](#schemaaccountstate)|false|Output only. Indicates the AccountState of this account.|
|» type|body|string|false|Output only. Specifies the AccountType of this account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» permissionLevel|PERMISSION_LEVEL_UNSPECIFIED|
|» permissionLevel|OWNER_LEVEL|
|» permissionLevel|MEMBER_LEVEL|
|» role|ACCOUNT_ROLE_UNSPECIFIED|
|» role|OWNER|
|» role|CO_OWNER|
|» role|MANAGER|
|» role|COMMUNITY_MANAGER|
|» type|ACCOUNT_TYPE_UNSPECIFIED|
|» type|PERSONAL|
|» type|LOCATION_GROUP|
|» type|USER_GROUP|
|» type|ORGANIZATION|

> Example responses

> 200 Response

```json
{
  "accountName": "string",
  "accountNumber": "string",
  "name": "string",
  "organizationInfo": {
    "phoneNumber": "string",
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
    "registeredDomain": "string"
  },
  "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
  "role": "ACCOUNT_ROLE_UNSPECIFIED",
  "state": {
    "status": "ACCOUNT_STATUS_UNSPECIFIED"
  },
  "type": "ACCOUNT_TYPE_UNSPECIFIED"
}
```

<h3 id="mybusinessaccountscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Account](#schemaaccount)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.updateNotifications

<a id="opIdmybusiness.accounts.updateNotifications"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "notificationTypes": [
      "NOTIFICATION_TYPE_UNSPECIFIED"
    ],
    "topicName": "string"
  }'
```

`PUT /v4/{name}`

Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.

> Body parameter

```json
{
  "name": "string",
  "notificationTypes": [
    "NOTIFICATION_TYPE_UNSPECIFIED"
  ],
  "topicName": "string"
}
```

<h3 id="mybusinessaccountsupdatenotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The notification settings resource name.|
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
|body|body|[Notifications](#schemanotifications)|false|none|
|» name|body|string|false|Output only. The notifications resource name.|
|» notificationTypes|body|[string]|false|The types of notifications that will be sent to the Cloud Pub/Sub topic. At least one must be specified. To stop receiving notifications entirely, use DeleteNotifications.|
|» topicName|body|string|false|The Google Cloud Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Cloud Pub/Sub topic.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» notificationTypes|NOTIFICATION_TYPE_UNSPECIFIED|
|» notificationTypes|GOOGLE_UPDATE|
|» notificationTypes|NEW_REVIEW|
|» notificationTypes|UPDATED_REVIEW|
|» notificationTypes|NEW_CUSTOMER_MEDIA|
|» notificationTypes|NEW_QUESTION|
|» notificationTypes|UPDATED_QUESTION|
|» notificationTypes|NEW_ANSWER|
|» notificationTypes|UPDATED_ANSWER|
|» notificationTypes|UPDATED_LOCATION_STATE|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "notificationTypes": [
    "NOTIFICATION_TYPE_UNSPECIFIED"
  ],
  "topicName": "string"
}
```

<h3 id="mybusinessaccountsupdatenotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Notifications](#schemanotifications)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.questions.delete

<a id="opIdmybusiness.accounts.locations.questions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v4/{name}`

Deletes a specific question written by the current user.

<h3 id="mybusinessaccountslocationsquestionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the question to delete.|
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

<h3 id="mybusinessaccountslocationsquestionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.questions.patch

<a id="opIdmybusiness.accounts.locations.questions.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "author": {
      "displayName": "string",
      "profilePhotoUrl": "string",
      "type": "AUTHOR_TYPE_UNSPECIFIED"
    },
    "createTime": "string",
    "name": "string",
    "text": "string",
    "topAnswers": [
      {
        "author": {
          "displayName": "string",
          "profilePhotoUrl": "string",
          "type": "AUTHOR_TYPE_UNSPECIFIED"
        },
        "createTime": "string",
        "name": "string",
        "text": "string",
        "updateTime": "string",
        "upvoteCount": 0
      }
    ],
    "totalAnswerCount": 0,
    "updateTime": "string",
    "upvoteCount": 0
  }'
```

`PATCH /v4/{name}`

Updates a specific question written by the current user.

> Body parameter

```json
{
  "author": {
    "displayName": "string",
    "profilePhotoUrl": "string",
    "type": "AUTHOR_TYPE_UNSPECIFIED"
  },
  "createTime": "string",
  "name": "string",
  "text": "string",
  "topAnswers": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUrl": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "totalAnswerCount": 0,
  "updateTime": "string",
  "upvoteCount": 0
}
```

<h3 id="mybusinessaccountslocationsquestionspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the question to update.|
|updateMask|query|string|false|The specific fields to update. If no mask is specified, then this is treated as a full update and all editable fields are set to the values passed in.|
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
|body|body|[Question](#schemaquestion)|false|none|
|» author|body|[Author](#schemaauthor)|false|Output only. The author of the question.|
|» createTime|body|string(google-datetime)|false|Output only. The timestamp for when the question was written.|
|» name|body|string|false|Output only. The unique name for the question. accounts/*/locations/*/questions/*|
|» text|body|string|false|The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters.|
|» topAnswers|body|[[Answer](#schemaanswer)]|false|Output only. A list of answers to the question, sorted by upvotes. This may not be a complete list of answers depending on the request parameters (answers_per_question)|
|» totalAnswerCount|body|integer(int32)|false|Output only. The total number of answers posted for this question.|
|» updateTime|body|string(google-datetime)|false|Output only. The timestamp for when the question was last modified.|
|» upvoteCount|body|integer(int32)|false|Output only. The number of upvotes for the question.|

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
  "author": {
    "displayName": "string",
    "profilePhotoUrl": "string",
    "type": "AUTHOR_TYPE_UNSPECIFIED"
  },
  "createTime": "string",
  "name": "string",
  "text": "string",
  "topAnswers": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUrl": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "totalAnswerCount": 0,
  "updateTime": "string",
  "upvoteCount": 0
}
```

<h3 id="mybusinessaccountslocationsquestionspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Question](#schemaquestion)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.localPosts.reportInsights

<a id="opIdmybusiness.accounts.locations.localPosts.reportInsights"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/localPosts:reportInsights \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "basicRequest": {
      "metricRequests": [
        {
          "metric": "METRIC_UNSPECIFIED",
          "options": [
            "METRIC_OPTION_UNSPECIFIED"
          ]
        }
      ],
      "timeRange": {
        "endTime": "string",
        "startTime": "string"
      }
    },
    "localPostNames": [
      "string"
    ]
  }'
```

`POST /v4/{name}/localPosts:reportInsights`

Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.

> Body parameter

```json
{
  "basicRequest": {
    "metricRequests": [
      {
        "metric": "METRIC_UNSPECIFIED",
        "options": [
          "METRIC_OPTION_UNSPECIFIED"
        ]
      }
    ],
    "timeRange": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "localPostNames": [
    "string"
  ]
}
```

<h3 id="mybusinessaccountslocationslocalpostsreportinsights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the location for which to fetch insights.|
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
|body|body|[ReportLocalPostInsightsRequest](#schemareportlocalpostinsightsrequest)|false|none|
|» basicRequest|body|[BasicMetricsRequest](#schemabasicmetricsrequest)|false|A request to include basic metric insights in the report. This request applies to all posts requested.|
|» localPostNames|body|[string]|false|Required. The list of posts for which to fetch insights data. All posts have to belong to the location whose name is specified in the `name` field.|

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
  "localPostMetrics": [
    {
      "localPostName": "string",
      "metricValues": [
        {
          "dimensionalValues": [
            {
              "metricOption": "METRIC_OPTION_UNSPECIFIED",
              "timeDimension": {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "timeOfDay": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "timeRange": {
                  "endTime": "string",
                  "startTime": "string"
                }
              },
              "value": "string"
            }
          ],
          "metric": "METRIC_UNSPECIFIED",
          "totalValue": {
            "metricOption": "METRIC_OPTION_UNSPECIFIED",
            "timeDimension": {
              "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
              "timeOfDay": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "timeRange": {
                "endTime": "string",
                "startTime": "string"
              }
            },
            "value": "string"
          }
        }
      ]
    }
  ],
  "name": "string",
  "timeZone": "string"
}
```

<h3 id="mybusinessaccountslocationslocalpostsreportinsights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReportLocalPostInsightsResponse](#schemareportlocalpostinsightsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.batchGet

<a id="opIdmybusiness.accounts.locations.batchGet"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/locations:batchGet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "locationNames": [
      "string"
    ]
  }'
```

`POST /v4/{name}/locations:batchGet`

Gets all of the specified locations in the given account.

> Body parameter

```json
{
  "locationNames": [
    "string"
  ]
}
```

<h3 id="mybusinessaccountslocationsbatchget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the account from which to fetch locations.|
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
|body|body|[BatchGetLocationsRequest](#schemabatchgetlocationsrequest)|false|none|
|» locationNames|body|[string]|false|A collection of locations to fetch, specified by their names.|

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
  "locations": [
    {
      "adWordsLocationExtensions": {
        "adPhone": "string"
      },
      "additionalCategories": [
        {
          "categoryId": "string",
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        }
      ],
      "additionalPhones": [
        "string"
      ],
      "address": {
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
      "attributes": [
        {
          "attributeId": "string",
          "repeatedEnumValue": {
            "setValues": [
              "string"
            ],
            "unsetValues": [
              "string"
            ]
          },
          "urlValues": [
            {
              "url": "string"
            }
          ],
          "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
          "values": [
            null
          ]
        }
      ],
      "labels": [
        "string"
      ],
      "languageCode": "string",
      "latlng": {
        "latitude": 0,
        "longitude": 0
      },
      "locationKey": {
        "explicitNoPlaceId": true,
        "placeId": "string",
        "plusPageId": "string",
        "requestId": "string"
      },
      "locationName": "string",
      "locationState": {
        "canDelete": true,
        "canHaveFoodMenus": true,
        "canModifyServiceList": true,
        "canOperateHealthData": true,
        "canOperateLodgingData": true,
        "canUpdate": true,
        "hasPendingEdits": true,
        "hasPendingVerification": true,
        "isDisabled": true,
        "isDisconnected": true,
        "isDuplicate": true,
        "isGoogleUpdated": true,
        "isLocalPostApiDisabled": true,
        "isPendingReview": true,
        "isPublished": true,
        "isSuspended": true,
        "isVerified": true,
        "needsReverification": true
      },
      "metadata": {
        "duplicate": {
          "access": "ACCESS_UNSPECIFIED",
          "locationName": "string",
          "placeId": "string"
        },
        "mapsUrl": "string",
        "newReviewUrl": "string"
      },
      "moreHours": [
        {
          "hoursTypeId": "string",
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": "string",
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": "string"
            }
          ]
        }
      ],
      "name": "string",
      "openInfo": {
        "canReopen": true,
        "openingDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
      },
      "priceLists": [
        {
          "labels": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ],
          "priceListId": "string",
          "sections": [
            {
              "items": [
                {
                  "itemId": "string",
                  "labels": [
                    {
                      "description": "string",
                      "displayName": "string",
                      "languageCode": "string"
                    }
                  ],
                  "price": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  }
                }
              ],
              "labels": [
                {
                  "description": "string",
                  "displayName": "string",
                  "languageCode": "string"
                }
              ],
              "sectionId": "string",
              "sectionType": "SECTION_TYPE_UNSPECIFIED"
            }
          ],
          "sourceUrl": "string"
        }
      ],
      "primaryCategory": {
        "categoryId": "string",
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      },
      "primaryPhone": "string",
      "profile": {
        "description": "string"
      },
      "regularHours": {
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": "string",
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": "string"
          }
        ]
      },
      "relationshipData": {
        "parentChain": "string"
      },
      "serviceArea": {
        "businessType": "BUSINESS_TYPE_UNSPECIFIED",
        "places": {
          "placeInfos": [
            {
              "name": "string",
              "placeId": "string"
            }
          ]
        },
        "radius": {
          "latlng": {
            "latitude": 0,
            "longitude": 0
          },
          "radiusKm": 0
        }
      },
      "specialHours": {
        "specialHourPeriods": [
          {
            "closeTime": "string",
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "isClosed": true,
            "openTime": "string",
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            }
          }
        ]
      },
      "storeCode": "string",
      "websiteUrl": "string"
    }
  ]
}
```

<h3 id="mybusinessaccountslocationsbatchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchGetLocationsResponse](#schemabatchgetlocationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.batchGetReviews

<a id="opIdmybusiness.accounts.locations.batchGetReviews"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/locations:batchGetReviews \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ignoreRatingOnlyReviews": true,
    "locationNames": [
      "string"
    ],
    "orderBy": "string",
    "pageSize": 0,
    "pageToken": "string"
  }'
```

`POST /v4/{name}/locations:batchGetReviews`

Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.

> Body parameter

```json
{
  "ignoreRatingOnlyReviews": true,
  "locationNames": [
    "string"
  ],
  "orderBy": "string",
  "pageSize": 0,
  "pageToken": "string"
}
```

<h3 id="mybusinessaccountslocationsbatchgetreviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the account from which to retrieve a list of reviews across multiple locations.|
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
|body|body|[BatchGetReviewsRequest](#schemabatchgetreviewsrequest)|false|none|
|» ignoreRatingOnlyReviews|body|boolean|false|Whether to ignore rating-only reviews.|
|» locationNames|body|[string]|false|A collection of locations to fetch reviews for, specified by their names.|
|» orderBy|body|string|false|Optional. Specifies the field to sort reviews by. If unspecified, the order of reviews returned will default to `update_time desc`. Valid orders to sort by are `rating`, `rating desc` and `update_time desc`. `rating` will return reviews in ascending order. `update_time`(i.e. ascending order) is not supported.|
|» pageSize|body|integer(int32)|false|How many reviews to fetch per page. The default value is 200.|
|» pageToken|body|string|false|If specified, it fetches the next page of reviews.|

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
  "locationReviews": [
    {
      "name": "string",
      "review": {
        "comment": "string",
        "createTime": "string",
        "name": "string",
        "reviewId": "string",
        "reviewReply": {
          "comment": "string",
          "updateTime": "string"
        },
        "reviewer": {
          "displayName": "string",
          "isAnonymous": true,
          "profilePhotoUrl": "string"
        },
        "starRating": "STAR_RATING_UNSPECIFIED",
        "updateTime": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="mybusinessaccountslocationsbatchgetreviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchGetReviewsResponse](#schemabatchgetreviewsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.reportInsights

<a id="opIdmybusiness.accounts.locations.reportInsights"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/locations:reportInsights \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "basicRequest": {
      "metricRequests": [
        {
          "metric": "METRIC_UNSPECIFIED",
          "options": [
            "METRIC_OPTION_UNSPECIFIED"
          ]
        }
      ],
      "timeRange": {
        "endTime": "string",
        "startTime": "string"
      }
    },
    "drivingDirectionsRequest": {
      "languageCode": "string",
      "numDays": "SEVEN"
    },
    "locationNames": [
      "string"
    ]
  }'
```

`POST /v4/{name}/locations:reportInsights`

Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.

> Body parameter

```json
{
  "basicRequest": {
    "metricRequests": [
      {
        "metric": "METRIC_UNSPECIFIED",
        "options": [
          "METRIC_OPTION_UNSPECIFIED"
        ]
      }
    ],
    "timeRange": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "drivingDirectionsRequest": {
    "languageCode": "string",
    "numDays": "SEVEN"
  },
  "locationNames": [
    "string"
  ]
}
```

<h3 id="mybusinessaccountslocationsreportinsights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The account resource name.|
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
|body|body|[ReportLocationInsightsRequest](#schemareportlocationinsightsrequest)|false|none|
|» basicRequest|body|[BasicMetricsRequest](#schemabasicmetricsrequest)|false|A request to include basic metric insights in the report.|
|» drivingDirectionsRequest|body|[DrivingDirectionMetricsRequest](#schemadrivingdirectionmetricsrequest)|false|A request to include insights about driving-direction requests in the report.|
|» locationNames|body|[string]|false|A collection of locations to fetch insights for, specified by their names.|

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
  "locationDrivingDirectionMetrics": [
    {
      "locationName": "string",
      "timeZone": "string",
      "topDirectionSources": [
        {
          "dayCount": 0,
          "regionCounts": [
            {
              "count": "string",
              "label": "string",
              "latlng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ]
        }
      ]
    }
  ],
  "locationMetrics": [
    {
      "locationName": "string",
      "metricValues": [
        {
          "dimensionalValues": [
            {
              "metricOption": "METRIC_OPTION_UNSPECIFIED",
              "timeDimension": {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "timeOfDay": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "timeRange": {
                  "endTime": "string",
                  "startTime": "string"
                }
              },
              "value": "string"
            }
          ],
          "metric": "METRIC_UNSPECIFIED",
          "totalValue": {
            "metricOption": "METRIC_OPTION_UNSPECIFIED",
            "timeDimension": {
              "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
              "timeOfDay": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "timeRange": {
                "endTime": "string",
                "startTime": "string"
              }
            },
            "value": "string"
          }
        }
      ],
      "timeZone": "string"
    }
  ]
}
```

<h3 id="mybusinessaccountslocationsreportinsights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReportLocationInsightsResponse](#schemareportlocationinsightsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.reviews.updateReply

<a id="opIdmybusiness.accounts.locations.reviews.updateReply"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/reply \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "comment": "string",
    "updateTime": "string"
  }'
```

`PUT /v4/{name}/reply`

Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.

> Body parameter

```json
{
  "comment": "string",
  "updateTime": "string"
}
```

<h3 id="mybusinessaccountslocationsreviewsupdatereply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the review to respond to.|
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
|body|body|[ReviewReply](#schemareviewreply)|false|none|
|» comment|body|string|false|The body of the reply as plain text with markups. The maximum length is 4096 bytes.|
|» updateTime|body|string(google-datetime)|false|Output only. The timestamp for when the reply was last modified.|

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
  "comment": "string",
  "updateTime": "string"
}
```

<h3 id="mybusinessaccountslocationsreviewsupdatereply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReviewReply](#schemareviewreply)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.reviews.deleteReply

<a id="opIdmybusiness.accounts.locations.reviews.deleteReply"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/reply \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v4/{name}/reply`

Deletes the response to the specified review. This operation is only valid if the specified location is verified.

<h3 id="mybusinessaccountslocationsreviewsdeletereply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the review reply to delete.|
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

<h3 id="mybusinessaccountslocationsreviewsdeletereply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.invitations.accept

<a id="opIdmybusiness.accounts.invitations.accept"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v4/{name}:accept`

Accepts the specified invitation.

> Body parameter

```json
{}
```

<h3 id="mybusinessaccountsinvitationsaccept-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the invitation that is being accepted.|
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
|body|body|[AcceptInvitationRequest](#schemaacceptinvitationrequest)|false|none|

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

<h3 id="mybusinessaccountsinvitationsaccept-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.associate

<a id="opIdmybusiness.accounts.locations.associate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:associate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "placeId": "string"
  }'
```

`POST /v4/{name}:associate`

Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.

> Body parameter

```json
{
  "placeId": "string"
}
```

<h3 id="mybusinessaccountslocationsassociate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the location to associate.|
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
|body|body|[AssociateLocationRequest](#schemaassociatelocationrequest)|false|none|
|» placeId|body|string|false|The association to establish. If not set, it indicates no match.|

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

<h3 id="mybusinessaccountslocationsassociate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.clearAssociation

<a id="opIdmybusiness.accounts.locations.clearAssociation"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:clearAssociation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v4/{name}:clearAssociation`

Clears an association between a location and its place ID. This operation is only valid if the location is unverified.

> Body parameter

```json
{}
```

<h3 id="mybusinessaccountslocationsclearassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the location to disassociate.|
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
|body|body|[ClearLocationAssociationRequest](#schemaclearlocationassociationrequest)|false|none|

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

<h3 id="mybusinessaccountslocationsclearassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.verifications.complete

<a id="opIdmybusiness.accounts.locations.verifications.complete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:complete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "pin": "string"
  }'
```

`POST /v4/{name}:complete`

Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.

> Body parameter

```json
{
  "pin": "string"
}
```

<h3 id="mybusinessaccountslocationsverificationscomplete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Resource name of the verification to complete.|
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
|body|body|[CompleteVerificationRequest](#schemacompleteverificationrequest)|false|none|
|» pin|body|string|false|PIN code received by the merchant to complete the verification.|

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
  "verification": {
    "createTime": "string",
    "method": "VERIFICATION_METHOD_UNSPECIFIED",
    "name": "string",
    "state": "VERIFICATION_STATE_UNSPECIFIED"
  }
}
```

<h3 id="mybusinessaccountslocationsverificationscomplete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CompleteVerificationResponse](#schemacompleteverificationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.invitations.decline

<a id="opIdmybusiness.accounts.invitations.decline"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:decline \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v4/{name}:decline`

Declines the specified invitation.

> Body parameter

```json
{}
```

<h3 id="mybusinessaccountsinvitationsdecline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the account invitation that is being declined.|
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
|body|body|[DeclineInvitationRequest](#schemadeclineinvitationrequest)|false|none|

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

<h3 id="mybusinessaccountsinvitationsdecline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.fetchVerificationOptions

<a id="opIdmybusiness.accounts.locations.fetchVerificationOptions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:fetchVerificationOptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "context": {
      "address": {
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
    },
    "languageCode": "string"
  }'
```

`POST /v4/{name}:fetchVerificationOptions`

Reports all eligible verification options for a location in a specific language.

> Body parameter

```json
{
  "context": {
    "address": {
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
  },
  "languageCode": "string"
}
```

<h3 id="mybusinessaccountslocationsfetchverificationoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Resource name of the location to verify.|
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
|body|body|[FetchVerificationOptionsRequest](#schemafetchverificationoptionsrequest)|false|none|
|» context|body|[ServiceBusinessContext](#schemaservicebusinesscontext)|false|Extra context information for the verification of service businesses. Required for the locations whose business type is CUSTOMER_LOCATION_ONLY. INVALID_ARGUMENT will be thrown if it is set for other business types of locations.|
|» languageCode|body|string|false|The BCP 47 language code representing the language that is to be used for the verification process. Available options vary by language.|

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
  "options": [
    {
      "addressData": {
        "address": {
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
        "businessName": "string"
      },
      "emailData": {
        "domainName": "string",
        "isUserNameEditable": true,
        "userName": "string"
      },
      "phoneData": {
        "phoneNumber": "string"
      },
      "verificationMethod": "VERIFICATION_METHOD_UNSPECIFIED"
    }
  ]
}
```

<h3 id="mybusinessaccountslocationsfetchverificationoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FetchVerificationOptionsResponse](#schemafetchverificationoptionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.findMatches

<a id="opIdmybusiness.accounts.locations.findMatches"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:findMatches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "languageCode": "string",
    "maxCacheDuration": "string",
    "numResults": 0
  }'
```

`POST /v4/{name}:findMatches`

Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.

> Body parameter

```json
{
  "languageCode": "string",
  "maxCacheDuration": "string",
  "numResults": 0
}
```

<h3 id="mybusinessaccountslocationsfindmatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the location to find matches for.|
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
|body|body|[FindMatchingLocationsRequest](#schemafindmatchinglocationsrequest)|false|none|
|» languageCode|body|string|false|The preferred language for the matching location (in BCP-47 format).|
|» maxCacheDuration|body|string(google-duration)|false|Deprecated. This field is ignored for all requests.|
|» numResults|body|integer(int32)|false|The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination.|

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
  "matchTime": "string",
  "matchedLocations": [
    {
      "isExactMatch": true,
      "location": {
        "adWordsLocationExtensions": {
          "adPhone": "string"
        },
        "additionalCategories": [
          {
            "categoryId": "string",
            "displayName": "string",
            "moreHoursTypes": [
              {
                "displayName": "string",
                "hoursTypeId": "string",
                "localizedDisplayName": "string"
              }
            ],
            "serviceTypes": [
              {
                "displayName": "string",
                "serviceTypeId": "string"
              }
            ]
          }
        ],
        "additionalPhones": [
          "string"
        ],
        "address": {
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
        "attributes": [
          {
            "attributeId": "string",
            "repeatedEnumValue": {
              "setValues": [
                "string"
              ],
              "unsetValues": [
                "string"
              ]
            },
            "urlValues": [
              {
                "url": "string"
              }
            ],
            "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
            "values": [
              null
            ]
          }
        ],
        "labels": [
          "string"
        ],
        "languageCode": "string",
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "locationKey": {
          "explicitNoPlaceId": true,
          "placeId": "string",
          "plusPageId": "string",
          "requestId": "string"
        },
        "locationName": "string",
        "locationState": {
          "canDelete": true,
          "canHaveFoodMenus": true,
          "canModifyServiceList": true,
          "canOperateHealthData": true,
          "canOperateLodgingData": true,
          "canUpdate": true,
          "hasPendingEdits": true,
          "hasPendingVerification": true,
          "isDisabled": true,
          "isDisconnected": true,
          "isDuplicate": true,
          "isGoogleUpdated": true,
          "isLocalPostApiDisabled": true,
          "isPendingReview": true,
          "isPublished": true,
          "isSuspended": true,
          "isVerified": true,
          "needsReverification": true
        },
        "metadata": {
          "duplicate": {
            "access": "ACCESS_UNSPECIFIED",
            "locationName": "string",
            "placeId": "string"
          },
          "mapsUrl": "string",
          "newReviewUrl": "string"
        },
        "moreHours": [
          {
            "hoursTypeId": "string",
            "periods": [
              {
                "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
                "closeTime": "string",
                "openDay": "DAY_OF_WEEK_UNSPECIFIED",
                "openTime": "string"
              }
            ]
          }
        ],
        "name": "string",
        "openInfo": {
          "canReopen": true,
          "openingDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
        },
        "priceLists": [
          {
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ],
            "priceListId": "string",
            "sections": [
              {
                "items": [
                  {
                    "itemId": "string",
                    "labels": [
                      {
                        "description": "string",
                        "displayName": "string",
                        "languageCode": "string"
                      }
                    ],
                    "price": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    }
                  }
                ],
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ],
                "sectionId": "string",
                "sectionType": "SECTION_TYPE_UNSPECIFIED"
              }
            ],
            "sourceUrl": "string"
          }
        ],
        "primaryCategory": {
          "categoryId": "string",
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        },
        "primaryPhone": "string",
        "profile": {
          "description": "string"
        },
        "regularHours": {
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": "string",
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": "string"
            }
          ]
        },
        "relationshipData": {
          "parentChain": "string"
        },
        "serviceArea": {
          "businessType": "BUSINESS_TYPE_UNSPECIFIED",
          "places": {
            "placeInfos": [
              {
                "name": "string",
                "placeId": "string"
              }
            ]
          },
          "radius": {
            "latlng": {
              "latitude": 0,
              "longitude": 0
            },
            "radiusKm": 0
          }
        },
        "specialHours": {
          "specialHourPeriods": [
            {
              "closeTime": "string",
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "isClosed": true,
              "openTime": "string",
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              }
            }
          ]
        },
        "storeCode": "string",
        "websiteUrl": "string"
      }
    }
  ]
}
```

<h3 id="mybusinessaccountslocationsfindmatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FindMatchingLocationsResponse](#schemafindmatchinglocationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.generateAccountNumber

<a id="opIdmybusiness.accounts.generateAccountNumber"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:generateAccountNumber \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v4/{name}:generateAccountNumber`

Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.

> Body parameter

```json
{}
```

<h3 id="mybusinessaccountsgenerateaccountnumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the account to generate an account number for.|
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
|body|body|[GenerateAccountNumberRequest](#schemagenerateaccountnumberrequest)|false|none|

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
  "accountName": "string",
  "accountNumber": "string",
  "name": "string",
  "organizationInfo": {
    "phoneNumber": "string",
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
    "registeredDomain": "string"
  },
  "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
  "role": "ACCOUNT_ROLE_UNSPECIFIED",
  "state": {
    "status": "ACCOUNT_STATUS_UNSPECIFIED"
  },
  "type": "ACCOUNT_TYPE_UNSPECIFIED"
}
```

<h3 id="mybusinessaccountsgenerateaccountnumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Account](#schemaaccount)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.lodging.getGoogleUpdated

<a id="opIdmybusiness.accounts.locations.lodging.getGoogleUpdated"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:getGoogleUpdated \
  -H 'Accept: application/json'
```

`GET /v4/{name}:getGoogleUpdated`

Returns the Google updated Lodging of a specific location.

<h3 id="mybusinessaccountslocationslodginggetgoogleupdated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/lodging`|
|readMask|query|string|false|Optional. The specific fields to return. If no mask is specified, then it returns the full Lodging (same as "*"). Repeated field items cannot be individually specified.|
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
  "diffMask": "string",
  "lodging": {
    "accessibility": {
      "mobilityAccessible": true,
      "mobilityAccessibleElevator": true,
      "mobilityAccessibleElevatorException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleParking": true,
      "mobilityAccessibleParkingException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessiblePool": true,
      "mobilityAccessiblePoolException": "EXCEPTION_UNSPECIFIED"
    },
    "activities": {
      "beachAccess": true,
      "beachAccessException": "EXCEPTION_UNSPECIFIED",
      "beachFront": true,
      "beachFrontException": "EXCEPTION_UNSPECIFIED",
      "bicycleRental": true,
      "bicycleRentalException": "EXCEPTION_UNSPECIFIED",
      "boutiqueStores": true,
      "boutiqueStoresException": "EXCEPTION_UNSPECIFIED",
      "casino": true,
      "casinoException": "EXCEPTION_UNSPECIFIED",
      "freeBicycleRental": true,
      "freeBicycleRentalException": "EXCEPTION_UNSPECIFIED",
      "freeWatercraftRental": true,
      "freeWatercraftRentalException": "EXCEPTION_UNSPECIFIED",
      "gameRoom": true,
      "gameRoomException": "EXCEPTION_UNSPECIFIED",
      "golf": true,
      "golfException": "EXCEPTION_UNSPECIFIED",
      "horsebackRiding": true,
      "horsebackRidingException": "EXCEPTION_UNSPECIFIED",
      "nightclub": true,
      "nightclubException": "EXCEPTION_UNSPECIFIED",
      "privateBeach": true,
      "privateBeachException": "EXCEPTION_UNSPECIFIED",
      "scuba": true,
      "scubaException": "EXCEPTION_UNSPECIFIED",
      "snorkeling": true,
      "snorkelingException": "EXCEPTION_UNSPECIFIED",
      "tennis": true,
      "tennisException": "EXCEPTION_UNSPECIFIED",
      "waterSkiing": true,
      "waterSkiingException": "EXCEPTION_UNSPECIFIED",
      "watercraftRental": true,
      "watercraftRentalException": "EXCEPTION_UNSPECIFIED"
    },
    "allUnits": {
      "bungalowOrVilla": true,
      "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
      "connectingUnitAvailable": true,
      "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
      "executiveFloor": true,
      "executiveFloorException": "EXCEPTION_UNSPECIFIED",
      "maxAdultOccupantsCount": 0,
      "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxChildOccupantsCount": 0,
      "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxOccupantsCount": 0,
      "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "privateHome": true,
      "privateHomeException": "EXCEPTION_UNSPECIFIED",
      "suite": true,
      "suiteException": "EXCEPTION_UNSPECIFIED",
      "tier": "UNIT_TIER_UNSPECIFIED",
      "tierException": "EXCEPTION_UNSPECIFIED",
      "totalLivingAreas": {
        "accessibility": {
          "adaCompliantUnit": true,
          "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleDoorbell": true,
          "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleFireAlarm": true,
          "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleUnit": true,
          "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleBathtub": true,
          "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleShower": true,
          "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleToilet": true,
          "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleUnit": true,
          "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
        },
        "eating": {
          "coffeeMaker": true,
          "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
          "cookware": true,
          "cookwareException": "EXCEPTION_UNSPECIFIED",
          "dishwasher": true,
          "dishwasherException": "EXCEPTION_UNSPECIFIED",
          "indoorGrill": true,
          "indoorGrillException": "EXCEPTION_UNSPECIFIED",
          "kettle": true,
          "kettleException": "EXCEPTION_UNSPECIFIED",
          "kitchenAvailable": true,
          "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
          "microwave": true,
          "microwaveException": "EXCEPTION_UNSPECIFIED",
          "minibar": true,
          "minibarException": "EXCEPTION_UNSPECIFIED",
          "outdoorGrill": true,
          "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
          "oven": true,
          "ovenException": "EXCEPTION_UNSPECIFIED",
          "refrigerator": true,
          "refrigeratorException": "EXCEPTION_UNSPECIFIED",
          "sink": true,
          "sinkException": "EXCEPTION_UNSPECIFIED",
          "snackbar": true,
          "snackbarException": "EXCEPTION_UNSPECIFIED",
          "stove": true,
          "stoveException": "EXCEPTION_UNSPECIFIED",
          "teaStation": true,
          "teaStationException": "EXCEPTION_UNSPECIFIED",
          "toaster": true,
          "toasterException": "EXCEPTION_UNSPECIFIED"
        },
        "features": {
          "airConditioning": true,
          "airConditioningException": "EXCEPTION_UNSPECIFIED",
          "bathtub": true,
          "bathtubException": "EXCEPTION_UNSPECIFIED",
          "bidet": true,
          "bidetException": "EXCEPTION_UNSPECIFIED",
          "dryer": true,
          "dryerException": "EXCEPTION_UNSPECIFIED",
          "electronicRoomKey": true,
          "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
          "fireplace": true,
          "fireplaceException": "EXCEPTION_UNSPECIFIED",
          "hairdryer": true,
          "hairdryerException": "EXCEPTION_UNSPECIFIED",
          "heating": true,
          "heatingException": "EXCEPTION_UNSPECIFIED",
          "inunitSafe": true,
          "inunitSafeException": "EXCEPTION_UNSPECIFIED",
          "inunitWifiAvailable": true,
          "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
          "ironingEquipment": true,
          "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
          "payPerViewMovies": true,
          "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
          "privateBathroom": true,
          "privateBathroomException": "EXCEPTION_UNSPECIFIED",
          "shower": true,
          "showerException": "EXCEPTION_UNSPECIFIED",
          "toilet": true,
          "toiletException": "EXCEPTION_UNSPECIFIED",
          "tv": true,
          "tvCasting": true,
          "tvCastingException": "EXCEPTION_UNSPECIFIED",
          "tvException": "EXCEPTION_UNSPECIFIED",
          "tvStreaming": true,
          "tvStreamingException": "EXCEPTION_UNSPECIFIED",
          "universalPowerAdapters": true,
          "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
          "washer": true,
          "washerException": "EXCEPTION_UNSPECIFIED"
        },
        "layout": {
          "balcony": true,
          "balconyException": "EXCEPTION_UNSPECIFIED",
          "livingAreaSqMeters": 0,
          "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
          "loft": true,
          "loftException": "EXCEPTION_UNSPECIFIED",
          "nonSmoking": true,
          "nonSmokingException": "EXCEPTION_UNSPECIFIED",
          "patio": true,
          "patioException": "EXCEPTION_UNSPECIFIED",
          "stairs": true,
          "stairsException": "EXCEPTION_UNSPECIFIED"
        },
        "sleeping": {
          "bedsCount": 0,
          "bedsCountException": "EXCEPTION_UNSPECIFIED",
          "bunkBedsCount": 0,
          "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
          "cribsCount": 0,
          "cribsCountException": "EXCEPTION_UNSPECIFIED",
          "doubleBedsCount": 0,
          "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
          "featherPillows": true,
          "featherPillowsException": "EXCEPTION_UNSPECIFIED",
          "hypoallergenicBedding": true,
          "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
          "kingBedsCount": 0,
          "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
          "memoryFoamPillows": true,
          "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
          "otherBedsCount": 0,
          "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
          "queenBedsCount": 0,
          "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
          "rollAwayBedsCount": 0,
          "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
          "singleOrTwinBedsCount": 0,
          "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
          "sofaBedsCount": 0,
          "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
          "syntheticPillows": true,
          "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
        }
      },
      "views": {
        "beachView": true,
        "beachViewException": "EXCEPTION_UNSPECIFIED",
        "cityView": true,
        "cityViewException": "EXCEPTION_UNSPECIFIED",
        "gardenView": true,
        "gardenViewException": "EXCEPTION_UNSPECIFIED",
        "lakeView": true,
        "lakeViewException": "EXCEPTION_UNSPECIFIED",
        "landmarkView": true,
        "landmarkViewException": "EXCEPTION_UNSPECIFIED",
        "oceanView": true,
        "oceanViewException": "EXCEPTION_UNSPECIFIED",
        "poolView": true,
        "poolViewException": "EXCEPTION_UNSPECIFIED",
        "valleyView": true,
        "valleyViewException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "business": {
      "businessCenter": true,
      "businessCenterException": "EXCEPTION_UNSPECIFIED",
      "meetingRooms": true,
      "meetingRoomsCount": 0,
      "meetingRoomsCountException": "EXCEPTION_UNSPECIFIED",
      "meetingRoomsException": "EXCEPTION_UNSPECIFIED"
    },
    "commonLivingArea": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "connectivity": {
      "freeWifi": true,
      "freeWifiException": "EXCEPTION_UNSPECIFIED",
      "publicAreaWifiAvailable": true,
      "publicAreaWifiAvailableException": "EXCEPTION_UNSPECIFIED",
      "publicInternetTerminal": true,
      "publicInternetTerminalException": "EXCEPTION_UNSPECIFIED",
      "wifiAvailable": true,
      "wifiAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "families": {
      "babysitting": true,
      "babysittingException": "EXCEPTION_UNSPECIFIED",
      "kidsActivities": true,
      "kidsActivitiesException": "EXCEPTION_UNSPECIFIED",
      "kidsClub": true,
      "kidsClubException": "EXCEPTION_UNSPECIFIED"
    },
    "foodAndDrink": {
      "bar": true,
      "barException": "EXCEPTION_UNSPECIFIED",
      "breakfastAvailable": true,
      "breakfastAvailableException": "EXCEPTION_UNSPECIFIED",
      "breakfastBuffet": true,
      "breakfastBuffetException": "EXCEPTION_UNSPECIFIED",
      "buffet": true,
      "buffetException": "EXCEPTION_UNSPECIFIED",
      "dinnerBuffet": true,
      "dinnerBuffetException": "EXCEPTION_UNSPECIFIED",
      "freeBreakfast": true,
      "freeBreakfastException": "EXCEPTION_UNSPECIFIED",
      "restaurant": true,
      "restaurantException": "EXCEPTION_UNSPECIFIED",
      "restaurantsCount": 0,
      "restaurantsCountException": "EXCEPTION_UNSPECIFIED",
      "roomService": true,
      "roomServiceException": "EXCEPTION_UNSPECIFIED",
      "tableService": true,
      "tableServiceException": "EXCEPTION_UNSPECIFIED",
      "twentyFourHourRoomService": true,
      "twentyFourHourRoomServiceException": "EXCEPTION_UNSPECIFIED",
      "vendingMachine": true,
      "vendingMachineException": "EXCEPTION_UNSPECIFIED"
    },
    "guestUnits": [
      {
        "codes": [
          "string"
        ],
        "features": {
          "bungalowOrVilla": true,
          "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
          "connectingUnitAvailable": true,
          "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
          "executiveFloor": true,
          "executiveFloorException": "EXCEPTION_UNSPECIFIED",
          "maxAdultOccupantsCount": 0,
          "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "maxChildOccupantsCount": 0,
          "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "maxOccupantsCount": 0,
          "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "privateHome": true,
          "privateHomeException": "EXCEPTION_UNSPECIFIED",
          "suite": true,
          "suiteException": "EXCEPTION_UNSPECIFIED",
          "tier": "UNIT_TIER_UNSPECIFIED",
          "tierException": "EXCEPTION_UNSPECIFIED",
          "totalLivingAreas": {
            "accessibility": {
              "adaCompliantUnit": true,
              "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleDoorbell": true,
              "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleFireAlarm": true,
              "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleUnit": true,
              "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleBathtub": true,
              "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleShower": true,
              "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleToilet": true,
              "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleUnit": true,
              "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
            },
            "eating": {
              "coffeeMaker": true,
              "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
              "cookware": true,
              "cookwareException": "EXCEPTION_UNSPECIFIED",
              "dishwasher": true,
              "dishwasherException": "EXCEPTION_UNSPECIFIED",
              "indoorGrill": true,
              "indoorGrillException": "EXCEPTION_UNSPECIFIED",
              "kettle": true,
              "kettleException": "EXCEPTION_UNSPECIFIED",
              "kitchenAvailable": true,
              "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
              "microwave": true,
              "microwaveException": "EXCEPTION_UNSPECIFIED",
              "minibar": true,
              "minibarException": "EXCEPTION_UNSPECIFIED",
              "outdoorGrill": true,
              "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
              "oven": true,
              "ovenException": "EXCEPTION_UNSPECIFIED",
              "refrigerator": true,
              "refrigeratorException": "EXCEPTION_UNSPECIFIED",
              "sink": true,
              "sinkException": "EXCEPTION_UNSPECIFIED",
              "snackbar": true,
              "snackbarException": "EXCEPTION_UNSPECIFIED",
              "stove": true,
              "stoveException": "EXCEPTION_UNSPECIFIED",
              "teaStation": true,
              "teaStationException": "EXCEPTION_UNSPECIFIED",
              "toaster": true,
              "toasterException": "EXCEPTION_UNSPECIFIED"
            },
            "features": {
              "airConditioning": true,
              "airConditioningException": "EXCEPTION_UNSPECIFIED",
              "bathtub": true,
              "bathtubException": "EXCEPTION_UNSPECIFIED",
              "bidet": true,
              "bidetException": "EXCEPTION_UNSPECIFIED",
              "dryer": true,
              "dryerException": "EXCEPTION_UNSPECIFIED",
              "electronicRoomKey": true,
              "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
              "fireplace": true,
              "fireplaceException": "EXCEPTION_UNSPECIFIED",
              "hairdryer": true,
              "hairdryerException": "EXCEPTION_UNSPECIFIED",
              "heating": true,
              "heatingException": "EXCEPTION_UNSPECIFIED",
              "inunitSafe": true,
              "inunitSafeException": "EXCEPTION_UNSPECIFIED",
              "inunitWifiAvailable": true,
              "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
              "ironingEquipment": true,
              "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
              "payPerViewMovies": true,
              "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
              "privateBathroom": true,
              "privateBathroomException": "EXCEPTION_UNSPECIFIED",
              "shower": true,
              "showerException": "EXCEPTION_UNSPECIFIED",
              "toilet": true,
              "toiletException": "EXCEPTION_UNSPECIFIED",
              "tv": true,
              "tvCasting": true,
              "tvCastingException": "EXCEPTION_UNSPECIFIED",
              "tvException": "EXCEPTION_UNSPECIFIED",
              "tvStreaming": true,
              "tvStreamingException": "EXCEPTION_UNSPECIFIED",
              "universalPowerAdapters": true,
              "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
              "washer": true,
              "washerException": "EXCEPTION_UNSPECIFIED"
            },
            "layout": {
              "balcony": true,
              "balconyException": "EXCEPTION_UNSPECIFIED",
              "livingAreaSqMeters": 0,
              "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
              "loft": true,
              "loftException": "EXCEPTION_UNSPECIFIED",
              "nonSmoking": true,
              "nonSmokingException": "EXCEPTION_UNSPECIFIED",
              "patio": true,
              "patioException": "EXCEPTION_UNSPECIFIED",
              "stairs": true,
              "stairsException": "EXCEPTION_UNSPECIFIED"
            },
            "sleeping": {
              "bedsCount": 0,
              "bedsCountException": "EXCEPTION_UNSPECIFIED",
              "bunkBedsCount": 0,
              "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
              "cribsCount": 0,
              "cribsCountException": "EXCEPTION_UNSPECIFIED",
              "doubleBedsCount": 0,
              "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
              "featherPillows": true,
              "featherPillowsException": "EXCEPTION_UNSPECIFIED",
              "hypoallergenicBedding": true,
              "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
              "kingBedsCount": 0,
              "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
              "memoryFoamPillows": true,
              "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
              "otherBedsCount": 0,
              "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
              "queenBedsCount": 0,
              "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
              "rollAwayBedsCount": 0,
              "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
              "singleOrTwinBedsCount": 0,
              "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
              "sofaBedsCount": 0,
              "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
              "syntheticPillows": true,
              "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
            }
          },
          "views": {
            "beachView": true,
            "beachViewException": "EXCEPTION_UNSPECIFIED",
            "cityView": true,
            "cityViewException": "EXCEPTION_UNSPECIFIED",
            "gardenView": true,
            "gardenViewException": "EXCEPTION_UNSPECIFIED",
            "lakeView": true,
            "lakeViewException": "EXCEPTION_UNSPECIFIED",
            "landmarkView": true,
            "landmarkViewException": "EXCEPTION_UNSPECIFIED",
            "oceanView": true,
            "oceanViewException": "EXCEPTION_UNSPECIFIED",
            "poolView": true,
            "poolViewException": "EXCEPTION_UNSPECIFIED",
            "valleyView": true,
            "valleyViewException": "EXCEPTION_UNSPECIFIED"
          }
        },
        "label": "string"
      }
    ],
    "healthAndSafety": {
      "enhancedCleaning": {
        "commercialGradeDisinfectantCleaning": true,
        "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
        "commonAreasEnhancedCleaning": true,
        "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
        "employeesTrainedCleaningProcedures": true,
        "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
        "employeesTrainedThoroughHandWashing": true,
        "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
        "employeesWearProtectiveEquipment": true,
        "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
        "guestRoomsEnhancedCleaning": true,
        "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
      },
      "increasedFoodSafety": {
        "diningAreasAdditionalSanitation": true,
        "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
        "disposableFlatware": true,
        "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
        "foodPreparationAndServingAdditionalSafety": true,
        "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
        "individualPackagedMeals": true,
        "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
        "singleUseFoodMenus": true,
        "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
      },
      "minimizedContact": {
        "contactlessCheckinCheckout": true,
        "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
        "digitalGuestRoomKeys": true,
        "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
        "housekeepingScheduledRequestOnly": true,
        "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
        "noHighTouchItemsCommonAreas": true,
        "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
        "noHighTouchItemsGuestRooms": true,
        "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
        "plasticKeycardsDisinfected": true,
        "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
        "roomBookingsBuffer": true,
        "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
      },
      "personalProtection": {
        "commonAreasOfferSanitizingItems": true,
        "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
        "faceMaskRequired": true,
        "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
        "guestRoomHygieneKitsAvailable": true,
        "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
        "protectiveEquipmentAvailable": true,
        "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
      },
      "physicalDistancing": {
        "commonAreasPhysicalDistancingArranged": true,
        "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
        "physicalDistancingRequired": true,
        "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
        "safetyDividers": true,
        "safetyDividersException": "EXCEPTION_UNSPECIFIED",
        "sharedAreasLimitedOccupancy": true,
        "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
        "wellnessAreasHavePrivateSpaces": true,
        "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "housekeeping": {
      "dailyHousekeeping": true,
      "dailyHousekeepingException": "EXCEPTION_UNSPECIFIED",
      "housekeepingAvailable": true,
      "housekeepingAvailableException": "EXCEPTION_UNSPECIFIED",
      "turndownService": true,
      "turndownServiceException": "EXCEPTION_UNSPECIFIED"
    },
    "metadata": {
      "updateTime": "string"
    },
    "name": "string",
    "parking": {
      "electricCarChargingStations": true,
      "electricCarChargingStationsException": "EXCEPTION_UNSPECIFIED",
      "freeParking": true,
      "freeParkingException": "EXCEPTION_UNSPECIFIED",
      "freeSelfParking": true,
      "freeSelfParkingException": "EXCEPTION_UNSPECIFIED",
      "freeValetParking": true,
      "freeValetParkingException": "EXCEPTION_UNSPECIFIED",
      "parkingAvailable": true,
      "parkingAvailableException": "EXCEPTION_UNSPECIFIED",
      "selfParkingAvailable": true,
      "selfParkingAvailableException": "EXCEPTION_UNSPECIFIED",
      "valetParkingAvailable": true,
      "valetParkingAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "pets": {
      "catsAllowed": true,
      "catsAllowedException": "EXCEPTION_UNSPECIFIED",
      "dogsAllowed": true,
      "dogsAllowedException": "EXCEPTION_UNSPECIFIED",
      "petsAllowed": true,
      "petsAllowedException": "EXCEPTION_UNSPECIFIED",
      "petsAllowedFree": true,
      "petsAllowedFreeException": "EXCEPTION_UNSPECIFIED"
    },
    "policies": {
      "allInclusiveAvailable": true,
      "allInclusiveAvailableException": "EXCEPTION_UNSPECIFIED",
      "allInclusiveOnly": true,
      "allInclusiveOnlyException": "EXCEPTION_UNSPECIFIED",
      "checkinTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "checkinTimeException": "EXCEPTION_UNSPECIFIED",
      "checkoutTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "checkoutTimeException": "EXCEPTION_UNSPECIFIED",
      "kidsStayFree": true,
      "kidsStayFreeException": "EXCEPTION_UNSPECIFIED",
      "maxChildAge": 0,
      "maxChildAgeException": "EXCEPTION_UNSPECIFIED",
      "maxKidsStayFreeCount": 0,
      "maxKidsStayFreeCountException": "EXCEPTION_UNSPECIFIED",
      "paymentOptions": {
        "cash": true,
        "cashException": "EXCEPTION_UNSPECIFIED",
        "cheque": true,
        "chequeException": "EXCEPTION_UNSPECIFIED",
        "creditCard": true,
        "creditCardException": "EXCEPTION_UNSPECIFIED",
        "debitCard": true,
        "debitCardException": "EXCEPTION_UNSPECIFIED",
        "mobileNfc": true,
        "mobileNfcException": "EXCEPTION_UNSPECIFIED"
      },
      "smokeFreeProperty": true,
      "smokeFreePropertyException": "EXCEPTION_UNSPECIFIED"
    },
    "pools": {
      "adultPool": true,
      "adultPoolException": "EXCEPTION_UNSPECIFIED",
      "hotTub": true,
      "hotTubException": "EXCEPTION_UNSPECIFIED",
      "indoorPool": true,
      "indoorPoolException": "EXCEPTION_UNSPECIFIED",
      "indoorPoolsCount": 0,
      "indoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
      "lazyRiver": true,
      "lazyRiverException": "EXCEPTION_UNSPECIFIED",
      "lifeguard": true,
      "lifeguardException": "EXCEPTION_UNSPECIFIED",
      "outdoorPool": true,
      "outdoorPoolException": "EXCEPTION_UNSPECIFIED",
      "outdoorPoolsCount": 0,
      "outdoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
      "pool": true,
      "poolException": "EXCEPTION_UNSPECIFIED",
      "poolsCount": 0,
      "poolsCountException": "EXCEPTION_UNSPECIFIED",
      "wadingPool": true,
      "wadingPoolException": "EXCEPTION_UNSPECIFIED",
      "waterPark": true,
      "waterParkException": "EXCEPTION_UNSPECIFIED",
      "waterslide": true,
      "waterslideException": "EXCEPTION_UNSPECIFIED",
      "wavePool": true,
      "wavePoolException": "EXCEPTION_UNSPECIFIED"
    },
    "property": {
      "builtYear": 0,
      "builtYearException": "EXCEPTION_UNSPECIFIED",
      "floorsCount": 0,
      "floorsCountException": "EXCEPTION_UNSPECIFIED",
      "lastRenovatedYear": 0,
      "lastRenovatedYearException": "EXCEPTION_UNSPECIFIED",
      "roomsCount": 0,
      "roomsCountException": "EXCEPTION_UNSPECIFIED"
    },
    "services": {
      "baggageStorage": true,
      "baggageStorageException": "EXCEPTION_UNSPECIFIED",
      "concierge": true,
      "conciergeException": "EXCEPTION_UNSPECIFIED",
      "convenienceStore": true,
      "convenienceStoreException": "EXCEPTION_UNSPECIFIED",
      "currencyExchange": true,
      "currencyExchangeException": "EXCEPTION_UNSPECIFIED",
      "elevator": true,
      "elevatorException": "EXCEPTION_UNSPECIFIED",
      "frontDesk": true,
      "frontDeskException": "EXCEPTION_UNSPECIFIED",
      "fullServiceLaundry": true,
      "fullServiceLaundryException": "EXCEPTION_UNSPECIFIED",
      "giftShop": true,
      "giftShopException": "EXCEPTION_UNSPECIFIED",
      "languagesSpoken": {
        "arabicSpoken": true,
        "arabicSpokenException": "EXCEPTION_UNSPECIFIED",
        "cantoneseSpoken": true,
        "cantoneseSpokenException": "EXCEPTION_UNSPECIFIED",
        "dutchSpoken": true,
        "dutchSpokenException": "EXCEPTION_UNSPECIFIED",
        "englishSpoken": true,
        "englishSpokenException": "EXCEPTION_UNSPECIFIED",
        "filipinoSpoken": true,
        "filipinoSpokenException": "EXCEPTION_UNSPECIFIED",
        "frenchSpoken": true,
        "frenchSpokenException": "EXCEPTION_UNSPECIFIED",
        "germanSpoken": true,
        "germanSpokenException": "EXCEPTION_UNSPECIFIED",
        "hindiSpoken": true,
        "hindiSpokenException": "EXCEPTION_UNSPECIFIED",
        "indonesianSpoken": true,
        "indonesianSpokenException": "EXCEPTION_UNSPECIFIED",
        "italianSpoken": true,
        "italianSpokenException": "EXCEPTION_UNSPECIFIED",
        "japaneseSpoken": true,
        "japaneseSpokenException": "EXCEPTION_UNSPECIFIED",
        "koreanSpoken": true,
        "koreanSpokenException": "EXCEPTION_UNSPECIFIED",
        "mandarinSpoken": true,
        "mandarinSpokenException": "EXCEPTION_UNSPECIFIED",
        "portugueseSpoken": true,
        "portugueseSpokenException": "EXCEPTION_UNSPECIFIED",
        "russianSpoken": true,
        "russianSpokenException": "EXCEPTION_UNSPECIFIED",
        "spanishSpoken": true,
        "spanishSpokenException": "EXCEPTION_UNSPECIFIED",
        "vietnameseSpoken": true,
        "vietnameseSpokenException": "EXCEPTION_UNSPECIFIED"
      },
      "selfServiceLaundry": true,
      "selfServiceLaundryException": "EXCEPTION_UNSPECIFIED",
      "socialHour": true,
      "socialHourException": "EXCEPTION_UNSPECIFIED",
      "twentyFourHourFrontDesk": true,
      "twentyFourHourFrontDeskException": "EXCEPTION_UNSPECIFIED",
      "wakeUpCalls": true,
      "wakeUpCallsException": "EXCEPTION_UNSPECIFIED"
    },
    "someUnits": {
      "bungalowOrVilla": true,
      "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
      "connectingUnitAvailable": true,
      "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
      "executiveFloor": true,
      "executiveFloorException": "EXCEPTION_UNSPECIFIED",
      "maxAdultOccupantsCount": 0,
      "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxChildOccupantsCount": 0,
      "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxOccupantsCount": 0,
      "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "privateHome": true,
      "privateHomeException": "EXCEPTION_UNSPECIFIED",
      "suite": true,
      "suiteException": "EXCEPTION_UNSPECIFIED",
      "tier": "UNIT_TIER_UNSPECIFIED",
      "tierException": "EXCEPTION_UNSPECIFIED",
      "totalLivingAreas": {
        "accessibility": {
          "adaCompliantUnit": true,
          "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleDoorbell": true,
          "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleFireAlarm": true,
          "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleUnit": true,
          "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleBathtub": true,
          "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleShower": true,
          "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleToilet": true,
          "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleUnit": true,
          "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
        },
        "eating": {
          "coffeeMaker": true,
          "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
          "cookware": true,
          "cookwareException": "EXCEPTION_UNSPECIFIED",
          "dishwasher": true,
          "dishwasherException": "EXCEPTION_UNSPECIFIED",
          "indoorGrill": true,
          "indoorGrillException": "EXCEPTION_UNSPECIFIED",
          "kettle": true,
          "kettleException": "EXCEPTION_UNSPECIFIED",
          "kitchenAvailable": true,
          "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
          "microwave": true,
          "microwaveException": "EXCEPTION_UNSPECIFIED",
          "minibar": true,
          "minibarException": "EXCEPTION_UNSPECIFIED",
          "outdoorGrill": true,
          "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
          "oven": true,
          "ovenException": "EXCEPTION_UNSPECIFIED",
          "refrigerator": true,
          "refrigeratorException": "EXCEPTION_UNSPECIFIED",
          "sink": true,
          "sinkException": "EXCEPTION_UNSPECIFIED",
          "snackbar": true,
          "snackbarException": "EXCEPTION_UNSPECIFIED",
          "stove": true,
          "stoveException": "EXCEPTION_UNSPECIFIED",
          "teaStation": true,
          "teaStationException": "EXCEPTION_UNSPECIFIED",
          "toaster": true,
          "toasterException": "EXCEPTION_UNSPECIFIED"
        },
        "features": {
          "airConditioning": true,
          "airConditioningException": "EXCEPTION_UNSPECIFIED",
          "bathtub": true,
          "bathtubException": "EXCEPTION_UNSPECIFIED",
          "bidet": true,
          "bidetException": "EXCEPTION_UNSPECIFIED",
          "dryer": true,
          "dryerException": "EXCEPTION_UNSPECIFIED",
          "electronicRoomKey": true,
          "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
          "fireplace": true,
          "fireplaceException": "EXCEPTION_UNSPECIFIED",
          "hairdryer": true,
          "hairdryerException": "EXCEPTION_UNSPECIFIED",
          "heating": true,
          "heatingException": "EXCEPTION_UNSPECIFIED",
          "inunitSafe": true,
          "inunitSafeException": "EXCEPTION_UNSPECIFIED",
          "inunitWifiAvailable": true,
          "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
          "ironingEquipment": true,
          "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
          "payPerViewMovies": true,
          "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
          "privateBathroom": true,
          "privateBathroomException": "EXCEPTION_UNSPECIFIED",
          "shower": true,
          "showerException": "EXCEPTION_UNSPECIFIED",
          "toilet": true,
          "toiletException": "EXCEPTION_UNSPECIFIED",
          "tv": true,
          "tvCasting": true,
          "tvCastingException": "EXCEPTION_UNSPECIFIED",
          "tvException": "EXCEPTION_UNSPECIFIED",
          "tvStreaming": true,
          "tvStreamingException": "EXCEPTION_UNSPECIFIED",
          "universalPowerAdapters": true,
          "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
          "washer": true,
          "washerException": "EXCEPTION_UNSPECIFIED"
        },
        "layout": {
          "balcony": true,
          "balconyException": "EXCEPTION_UNSPECIFIED",
          "livingAreaSqMeters": 0,
          "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
          "loft": true,
          "loftException": "EXCEPTION_UNSPECIFIED",
          "nonSmoking": true,
          "nonSmokingException": "EXCEPTION_UNSPECIFIED",
          "patio": true,
          "patioException": "EXCEPTION_UNSPECIFIED",
          "stairs": true,
          "stairsException": "EXCEPTION_UNSPECIFIED"
        },
        "sleeping": {
          "bedsCount": 0,
          "bedsCountException": "EXCEPTION_UNSPECIFIED",
          "bunkBedsCount": 0,
          "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
          "cribsCount": 0,
          "cribsCountException": "EXCEPTION_UNSPECIFIED",
          "doubleBedsCount": 0,
          "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
          "featherPillows": true,
          "featherPillowsException": "EXCEPTION_UNSPECIFIED",
          "hypoallergenicBedding": true,
          "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
          "kingBedsCount": 0,
          "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
          "memoryFoamPillows": true,
          "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
          "otherBedsCount": 0,
          "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
          "queenBedsCount": 0,
          "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
          "rollAwayBedsCount": 0,
          "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
          "singleOrTwinBedsCount": 0,
          "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
          "sofaBedsCount": 0,
          "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
          "syntheticPillows": true,
          "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
        }
      },
      "views": {
        "beachView": true,
        "beachViewException": "EXCEPTION_UNSPECIFIED",
        "cityView": true,
        "cityViewException": "EXCEPTION_UNSPECIFIED",
        "gardenView": true,
        "gardenViewException": "EXCEPTION_UNSPECIFIED",
        "lakeView": true,
        "lakeViewException": "EXCEPTION_UNSPECIFIED",
        "landmarkView": true,
        "landmarkViewException": "EXCEPTION_UNSPECIFIED",
        "oceanView": true,
        "oceanViewException": "EXCEPTION_UNSPECIFIED",
        "poolView": true,
        "poolViewException": "EXCEPTION_UNSPECIFIED",
        "valleyView": true,
        "valleyViewException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "transportation": {
      "airportShuttle": true,
      "airportShuttleException": "EXCEPTION_UNSPECIFIED",
      "carRentalOnProperty": true,
      "carRentalOnPropertyException": "EXCEPTION_UNSPECIFIED",
      "freeAirportShuttle": true,
      "freeAirportShuttleException": "EXCEPTION_UNSPECIFIED",
      "freePrivateCarService": true,
      "freePrivateCarServiceException": "EXCEPTION_UNSPECIFIED",
      "localShuttle": true,
      "localShuttleException": "EXCEPTION_UNSPECIFIED",
      "privateCarService": true,
      "privateCarServiceException": "EXCEPTION_UNSPECIFIED",
      "transfer": true,
      "transferException": "EXCEPTION_UNSPECIFIED"
    },
    "wellness": {
      "doctorOnCall": true,
      "doctorOnCallException": "EXCEPTION_UNSPECIFIED",
      "ellipticalMachine": true,
      "ellipticalMachineException": "EXCEPTION_UNSPECIFIED",
      "fitnessCenter": true,
      "fitnessCenterException": "EXCEPTION_UNSPECIFIED",
      "freeFitnessCenter": true,
      "freeFitnessCenterException": "EXCEPTION_UNSPECIFIED",
      "freeWeights": true,
      "freeWeightsException": "EXCEPTION_UNSPECIFIED",
      "massage": true,
      "massageException": "EXCEPTION_UNSPECIFIED",
      "salon": true,
      "salonException": "EXCEPTION_UNSPECIFIED",
      "sauna": true,
      "saunaException": "EXCEPTION_UNSPECIFIED",
      "spa": true,
      "spaException": "EXCEPTION_UNSPECIFIED",
      "treadmill": true,
      "treadmillException": "EXCEPTION_UNSPECIFIED",
      "weightMachine": true,
      "weightMachineException": "EXCEPTION_UNSPECIFIED"
    }
  }
}
```

<h3 id="mybusinessaccountslocationslodginggetgoogleupdated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetGoogleUpdatedLodgingResponse](#schemagetgoogleupdatedlodgingresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.getGoogleUpdated

<a id="opIdmybusiness.accounts.locations.getGoogleUpdated"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:googleUpdated \
  -H 'Accept: application/json'
```

`GET /v4/{name}:googleUpdated`

Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.

<h3 id="mybusinessaccountslocationsgetgoogleupdated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the location to fetch.|
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
  "diffMask": "string",
  "location": {
    "adWordsLocationExtensions": {
      "adPhone": "string"
    },
    "additionalCategories": [
      {
        "categoryId": "string",
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      }
    ],
    "additionalPhones": [
      "string"
    ],
    "address": {
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
    "attributes": [
      {
        "attributeId": "string",
        "repeatedEnumValue": {
          "setValues": [
            "string"
          ],
          "unsetValues": [
            "string"
          ]
        },
        "urlValues": [
          {
            "url": "string"
          }
        ],
        "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
        "values": [
          null
        ]
      }
    ],
    "labels": [
      "string"
    ],
    "languageCode": "string",
    "latlng": {
      "latitude": 0,
      "longitude": 0
    },
    "locationKey": {
      "explicitNoPlaceId": true,
      "placeId": "string",
      "plusPageId": "string",
      "requestId": "string"
    },
    "locationName": "string",
    "locationState": {
      "canDelete": true,
      "canHaveFoodMenus": true,
      "canModifyServiceList": true,
      "canOperateHealthData": true,
      "canOperateLodgingData": true,
      "canUpdate": true,
      "hasPendingEdits": true,
      "hasPendingVerification": true,
      "isDisabled": true,
      "isDisconnected": true,
      "isDuplicate": true,
      "isGoogleUpdated": true,
      "isLocalPostApiDisabled": true,
      "isPendingReview": true,
      "isPublished": true,
      "isSuspended": true,
      "isVerified": true,
      "needsReverification": true
    },
    "metadata": {
      "duplicate": {
        "access": "ACCESS_UNSPECIFIED",
        "locationName": "string",
        "placeId": "string"
      },
      "mapsUrl": "string",
      "newReviewUrl": "string"
    },
    "moreHours": [
      {
        "hoursTypeId": "string",
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": "string",
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": "string"
          }
        ]
      }
    ],
    "name": "string",
    "openInfo": {
      "canReopen": true,
      "openingDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
    },
    "priceLists": [
      {
        "labels": [
          {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        ],
        "priceListId": "string",
        "sections": [
          {
            "items": [
              {
                "itemId": "string",
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ],
                "price": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                }
              }
            ],
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ],
            "sectionId": "string",
            "sectionType": "SECTION_TYPE_UNSPECIFIED"
          }
        ],
        "sourceUrl": "string"
      }
    ],
    "primaryCategory": {
      "categoryId": "string",
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    },
    "primaryPhone": "string",
    "profile": {
      "description": "string"
    },
    "regularHours": {
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": "string",
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": "string"
        }
      ]
    },
    "relationshipData": {
      "parentChain": "string"
    },
    "serviceArea": {
      "businessType": "BUSINESS_TYPE_UNSPECIFIED",
      "places": {
        "placeInfos": [
          {
            "name": "string",
            "placeId": "string"
          }
        ]
      },
      "radius": {
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "radiusKm": 0
      }
    },
    "specialHours": {
      "specialHourPeriods": [
        {
          "closeTime": "string",
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "isClosed": true,
          "openTime": "string",
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "storeCode": "string",
    "websiteUrl": "string"
  }
}
```

<h3 id="mybusinessaccountslocationsgetgoogleupdated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleUpdatedLocation](#schemagoogleupdatedlocation)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.listRecommendGoogleLocations

<a id="opIdmybusiness.accounts.listRecommendGoogleLocations"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:recommendGoogleLocations \
  -H 'Accept: application/json'
```

`GET /v4/{name}:recommendGoogleLocations`

List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.

<h3 id="mybusinessaccountslistrecommendgooglelocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the account resource to fetch recommended Google locations for.|
|pageSize|query|integer|false|How many locations to fetch per page. Default is 25, minimum is 1, and maximum page size is 100.|
|pageToken|query|string|false|If specified, the next page of locations is retrieved.|
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
  "googleLocations": [
    {
      "location": {
        "adWordsLocationExtensions": {
          "adPhone": "string"
        },
        "additionalCategories": [
          {
            "categoryId": "string",
            "displayName": "string",
            "moreHoursTypes": [
              {
                "displayName": "string",
                "hoursTypeId": "string",
                "localizedDisplayName": "string"
              }
            ],
            "serviceTypes": [
              {
                "displayName": "string",
                "serviceTypeId": "string"
              }
            ]
          }
        ],
        "additionalPhones": [
          "string"
        ],
        "address": {
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
        "attributes": [
          {
            "attributeId": "string",
            "repeatedEnumValue": {
              "setValues": [
                "string"
              ],
              "unsetValues": [
                "string"
              ]
            },
            "urlValues": [
              {
                "url": "string"
              }
            ],
            "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
            "values": [
              null
            ]
          }
        ],
        "labels": [
          "string"
        ],
        "languageCode": "string",
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "locationKey": {
          "explicitNoPlaceId": true,
          "placeId": "string",
          "plusPageId": "string",
          "requestId": "string"
        },
        "locationName": "string",
        "locationState": {
          "canDelete": true,
          "canHaveFoodMenus": true,
          "canModifyServiceList": true,
          "canOperateHealthData": true,
          "canOperateLodgingData": true,
          "canUpdate": true,
          "hasPendingEdits": true,
          "hasPendingVerification": true,
          "isDisabled": true,
          "isDisconnected": true,
          "isDuplicate": true,
          "isGoogleUpdated": true,
          "isLocalPostApiDisabled": true,
          "isPendingReview": true,
          "isPublished": true,
          "isSuspended": true,
          "isVerified": true,
          "needsReverification": true
        },
        "metadata": {
          "duplicate": {
            "access": "ACCESS_UNSPECIFIED",
            "locationName": "string",
            "placeId": "string"
          },
          "mapsUrl": "string",
          "newReviewUrl": "string"
        },
        "moreHours": [
          {
            "hoursTypeId": "string",
            "periods": [
              {
                "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
                "closeTime": "string",
                "openDay": "DAY_OF_WEEK_UNSPECIFIED",
                "openTime": "string"
              }
            ]
          }
        ],
        "name": "string",
        "openInfo": {
          "canReopen": true,
          "openingDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
        },
        "priceLists": [
          {
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ],
            "priceListId": "string",
            "sections": [
              {
                "items": [
                  {
                    "itemId": "string",
                    "labels": [
                      {
                        "description": "string",
                        "displayName": "string",
                        "languageCode": "string"
                      }
                    ],
                    "price": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    }
                  }
                ],
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ],
                "sectionId": "string",
                "sectionType": "SECTION_TYPE_UNSPECIFIED"
              }
            ],
            "sourceUrl": "string"
          }
        ],
        "primaryCategory": {
          "categoryId": "string",
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        },
        "primaryPhone": "string",
        "profile": {
          "description": "string"
        },
        "regularHours": {
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": "string",
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": "string"
            }
          ]
        },
        "relationshipData": {
          "parentChain": "string"
        },
        "serviceArea": {
          "businessType": "BUSINESS_TYPE_UNSPECIFIED",
          "places": {
            "placeInfos": [
              {
                "name": "string",
                "placeId": "string"
              }
            ]
          },
          "radius": {
            "latlng": {
              "latitude": 0,
              "longitude": 0
            },
            "radiusKm": 0
          }
        },
        "specialHours": {
          "specialHourPeriods": [
            {
              "closeTime": "string",
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "isClosed": true,
              "openTime": "string",
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              }
            }
          ]
        },
        "storeCode": "string",
        "websiteUrl": "string"
      },
      "name": "string",
      "requestAdminRightsUrl": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="mybusinessaccountslistrecommendgooglelocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRecommendedGoogleLocationsResponse](#schemalistrecommendedgooglelocationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.transfer

<a id="opIdmybusiness.accounts.locations.transfer"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:transfer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "toAccount": "string"
  }'
```

`POST /v4/{name}:transfer`

Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.

> Body parameter

```json
{
  "toAccount": "string"
}
```

<h3 id="mybusinessaccountslocationstransfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the location to transfer.|
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
|body|body|[TransferLocationRequest](#schematransferlocationrequest)|false|none|
|» toAccount|body|string|false|Name of the account resource to transfer the location to (for example, "accounts/8675309").|

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
  "adWordsLocationExtensions": {
    "adPhone": "string"
  },
  "additionalCategories": [
    {
      "categoryId": "string",
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  ],
  "additionalPhones": [
    "string"
  ],
  "address": {
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
  "attributes": [
    {
      "attributeId": "string",
      "repeatedEnumValue": {
        "setValues": [
          "string"
        ],
        "unsetValues": [
          "string"
        ]
      },
      "urlValues": [
        {
          "url": "string"
        }
      ],
      "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
      "values": [
        null
      ]
    }
  ],
  "labels": [
    "string"
  ],
  "languageCode": "string",
  "latlng": {
    "latitude": 0,
    "longitude": 0
  },
  "locationKey": {
    "explicitNoPlaceId": true,
    "placeId": "string",
    "plusPageId": "string",
    "requestId": "string"
  },
  "locationName": "string",
  "locationState": {
    "canDelete": true,
    "canHaveFoodMenus": true,
    "canModifyServiceList": true,
    "canOperateHealthData": true,
    "canOperateLodgingData": true,
    "canUpdate": true,
    "hasPendingEdits": true,
    "hasPendingVerification": true,
    "isDisabled": true,
    "isDisconnected": true,
    "isDuplicate": true,
    "isGoogleUpdated": true,
    "isLocalPostApiDisabled": true,
    "isPendingReview": true,
    "isPublished": true,
    "isSuspended": true,
    "isVerified": true,
    "needsReverification": true
  },
  "metadata": {
    "duplicate": {
      "access": "ACCESS_UNSPECIFIED",
      "locationName": "string",
      "placeId": "string"
    },
    "mapsUrl": "string",
    "newReviewUrl": "string"
  },
  "moreHours": [
    {
      "hoursTypeId": "string",
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": "string",
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": "string"
        }
      ]
    }
  ],
  "name": "string",
  "openInfo": {
    "canReopen": true,
    "openingDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
  },
  "priceLists": [
    {
      "labels": [
        {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      ],
      "priceListId": "string",
      "sections": [
        {
          "items": [
            {
              "itemId": "string",
              "labels": [
                {
                  "description": "string",
                  "displayName": "string",
                  "languageCode": "string"
                }
              ],
              "price": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            }
          ],
          "labels": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ],
          "sectionId": "string",
          "sectionType": "SECTION_TYPE_UNSPECIFIED"
        }
      ],
      "sourceUrl": "string"
    }
  ],
  "primaryCategory": {
    "categoryId": "string",
    "displayName": "string",
    "moreHoursTypes": [
      {
        "displayName": "string",
        "hoursTypeId": "string",
        "localizedDisplayName": "string"
      }
    ],
    "serviceTypes": [
      {
        "displayName": "string",
        "serviceTypeId": "string"
      }
    ]
  },
  "primaryPhone": "string",
  "profile": {
    "description": "string"
  },
  "regularHours": {
    "periods": [
      {
        "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
        "closeTime": "string",
        "openDay": "DAY_OF_WEEK_UNSPECIFIED",
        "openTime": "string"
      }
    ]
  },
  "relationshipData": {
    "parentChain": "string"
  },
  "serviceArea": {
    "businessType": "BUSINESS_TYPE_UNSPECIFIED",
    "places": {
      "placeInfos": [
        {
          "name": "string",
          "placeId": "string"
        }
      ]
    },
    "radius": {
      "latlng": {
        "latitude": 0,
        "longitude": 0
      },
      "radiusKm": 0
    }
  },
  "specialHours": {
    "specialHourPeriods": [
      {
        "closeTime": "string",
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "isClosed": true,
        "openTime": "string",
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      }
    ]
  },
  "storeCode": "string",
  "websiteUrl": "string"
}
```

<h3 id="mybusinessaccountslocationstransfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Location](#schemalocation)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.verify

<a id="opIdmybusiness.accounts.locations.verify"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "addressInput": {
      "mailerContactName": "string"
    },
    "context": {
      "address": {
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
    },
    "emailInput": {
      "emailAddress": "string"
    },
    "languageCode": "string",
    "method": "VERIFICATION_METHOD_UNSPECIFIED",
    "phoneInput": {
      "phoneNumber": "string"
    }
  }'
```

`POST /v4/{name}:verify`

Starts the verification process for a location.

> Body parameter

```json
{
  "addressInput": {
    "mailerContactName": "string"
  },
  "context": {
    "address": {
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
  },
  "emailInput": {
    "emailAddress": "string"
  },
  "languageCode": "string",
  "method": "VERIFICATION_METHOD_UNSPECIFIED",
  "phoneInput": {
    "phoneNumber": "string"
  }
}
```

<h3 id="mybusinessaccountslocationsverify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Resource name of the location to verify.|
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
|body|body|[VerifyLocationRequest](#schemaverifylocationrequest)|false|none|
|» addressInput|body|[AddressInput](#schemaaddressinput)|false|The input for ADDRESS method.|
|» context|body|[ServiceBusinessContext](#schemaservicebusinesscontext)|false|Extra context information for the verification of service businesses. Required for the locations whose business type is CUSTOMER_LOCATION_ONLY. For ADDRESS verification, the address will be used to send out postcard. For other methods, it should be the same as the one that is passed to FetchVerificationOptions. INVALID_ARGUMENT will be thrown if it is set for other types of business locations.|
|» emailInput|body|[EmailInput](#schemaemailinput)|false|The input for EMAIL method.|
|» languageCode|body|string|false|The BCP 47 language code representing the language that is to be used for the verification process.|
|» method|body|string|false|Verification method.|
|» phoneInput|body|[PhoneInput](#schemaphoneinput)|false|The input for PHONE_CALL/SMS method|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» method|VERIFICATION_METHOD_UNSPECIFIED|
|» method|ADDRESS|
|» method|EMAIL|
|» method|PHONE_CALL|
|» method|SMS|
|» method|AUTO|

> Example responses

> 200 Response

```json
{
  "verification": {
    "createTime": "string",
    "method": "VERIFICATION_METHOD_UNSPECIFIED",
    "name": "string",
    "state": "VERIFICATION_STATE_UNSPECIFIED"
  }
}
```

<h3 id="mybusinessaccountslocationsverify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VerifyLocationResponse](#schemaverifylocationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.admins.list

<a id="opIdmybusiness.accounts.locations.admins.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/admins \
  -H 'Accept: application/json'
```

`GET /v4/{parent}/admins`

Lists all of the admins for the specified location.

<h3 id="mybusinessaccountslocationsadminslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the location to list admins of.|
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
  "admins": [
    {
      "adminName": "string",
      "name": "string",
      "pendingInvitation": true,
      "role": "ADMIN_ROLE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="mybusinessaccountslocationsadminslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationAdminsResponse](#schemalistlocationadminsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.admins.create

<a id="opIdmybusiness.accounts.locations.admins.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/admins \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "adminName": "string",
    "name": "string",
    "pendingInvitation": true,
    "role": "ADMIN_ROLE_UNSPECIFIED"
  }'
```

`POST /v4/{parent}/admins`

Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.

> Body parameter

```json
{
  "adminName": "string",
  "name": "string",
  "pendingInvitation": true,
  "role": "ADMIN_ROLE_UNSPECIFIED"
}
```

<h3 id="mybusinessaccountslocationsadminscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the location this admin is created for.|
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
|body|body|[Admin](#schemaadmin)|false|none|
|» adminName|body|string|false|The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names.|
|» name|body|string|false|The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `accounts/{account_id}/locations/{location_id}/admins/{admin_id}`|
|» pendingInvitation|body|boolean|false|Output only. Indicates whether this admin has a pending invitation for the specified resource.|
|» role|body|string|false|Specifies the AdminRole that this admin uses with the specified Account or Location resource.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» role|ADMIN_ROLE_UNSPECIFIED|
|» role|OWNER|
|» role|CO_OWNER|
|» role|MANAGER|
|» role|COMMUNITY_MANAGER|

> Example responses

> 200 Response

```json
{
  "adminName": "string",
  "name": "string",
  "pendingInvitation": true,
  "role": "ADMIN_ROLE_UNSPECIFIED"
}
```

<h3 id="mybusinessaccountslocationsadminscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Admin](#schemaadmin)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.questions.answers.list

<a id="opIdmybusiness.accounts.locations.questions.answers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/answers \
  -H 'Accept: application/json'
```

`GET /v4/{parent}/answers`

Returns the paginated list of answers for a specified question.

<h3 id="mybusinessaccountslocationsquestionsanswerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the question to fetch answers for.|
|orderBy|query|string|false|The order to return the answers. Valid options include 'update_time desc' and 'upvote_count desc', which will return the answers sorted descendingly by the requested field. The default sort order is 'update_time desc'.|
|pageSize|query|integer|false|How many answers to fetch per page. The default and maximum `page_size` values are 10.|
|pageToken|query|string|false|If specified, the next page of answers is retrieved.|
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
  "answers": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUrl": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="mybusinessaccountslocationsquestionsanswerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAnswersResponse](#schemalistanswersresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.questions.answers.delete

<a id="opIdmybusiness.accounts.locations.questions.answers.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/answers:delete \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v4/{parent}/answers:delete`

Deletes the answer written by the current user to a question.

<h3 id="mybusinessaccountslocationsquestionsanswersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the question to delete an answer for.|
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

<h3 id="mybusinessaccountslocationsquestionsanswersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.questions.answers.upsert

<a id="opIdmybusiness.accounts.locations.questions.answers.upsert"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/answers:upsert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "answer": {
      "author": {
        "displayName": "string",
        "profilePhotoUrl": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "updateTime": "string",
      "upvoteCount": 0
    }
  }'
```

`POST /v4/{parent}/answers:upsert`

Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.

> Body parameter

```json
{
  "answer": {
    "author": {
      "displayName": "string",
      "profilePhotoUrl": "string",
      "type": "AUTHOR_TYPE_UNSPECIFIED"
    },
    "createTime": "string",
    "name": "string",
    "text": "string",
    "updateTime": "string",
    "upvoteCount": 0
  }
}
```

<h3 id="mybusinessaccountslocationsquestionsanswersupsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the question to write an answer for.|
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
|body|body|[UpsertAnswerRequest](#schemaupsertanswerrequest)|false|none|
|» answer|body|[Answer](#schemaanswer)|false|The new answer.|

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
  "author": {
    "displayName": "string",
    "profilePhotoUrl": "string",
    "type": "AUTHOR_TYPE_UNSPECIFIED"
  },
  "createTime": "string",
  "name": "string",
  "text": "string",
  "updateTime": "string",
  "upvoteCount": 0
}
```

<h3 id="mybusinessaccountslocationsquestionsanswersupsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Answer](#schemaanswer)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.insuranceNetworks.list

<a id="opIdmybusiness.accounts.locations.insuranceNetworks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/insuranceNetworks \
  -H 'Accept: application/json'
```

`GET /v4/{parent}/insuranceNetworks`

Returns a list of all insurance networks supported by Google.

<h3 id="mybusinessaccountslocationsinsurancenetworkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the location whose insurance networks will be listed. The name is in the form: accounts/{account_id}/locations/{location_id}|
|languageCode|query|string|false|Optional. The BCP 47 code for the language. If a language code is not provided, it defaults to English. Right now only 'en' is supported.|
|pageSize|query|integer|false|How many insurance networks to return per page. The default value is 5000. Maximum page size is 10000.|
|pageToken|query|string|false|If specified, returns the next page of insurance networks.|
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
  "networks": [
    {
      "networkId": "string",
      "networkNames": {
        "property1": "string",
        "property2": "string"
      },
      "payerNames": {
        "property1": "string",
        "property2": "string"
      },
      "state": "NETWORK_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="mybusinessaccountslocationsinsurancenetworkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInsuranceNetworksResponse](#schemalistinsurancenetworksresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.invitations.list

<a id="opIdmybusiness.accounts.invitations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/invitations \
  -H 'Accept: application/json'
```

`GET /v4/{parent}/invitations`

Lists pending invitations for the specified account.

<h3 id="mybusinessaccountsinvitationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the account from which the list of invitations is being retrieved.|
|targetType|query|string|false|Specifies which target types should appear in the response.|
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
|targetType|ALL|
|targetType|ACCOUNTS_ONLY|
|targetType|LOCATIONS_ONLY|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "invitations": [
    {
      "name": "string",
      "role": "ADMIN_ROLE_UNSPECIFIED",
      "targetAccount": {
        "accountName": "string",
        "accountNumber": "string",
        "name": "string",
        "organizationInfo": {
          "phoneNumber": "string",
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
          "registeredDomain": "string"
        },
        "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
        "role": "ACCOUNT_ROLE_UNSPECIFIED",
        "state": {
          "status": "ACCOUNT_STATUS_UNSPECIFIED"
        },
        "type": "ACCOUNT_TYPE_UNSPECIFIED"
      },
      "targetLocation": {
        "locationAddress": "string",
        "locationName": "string"
      }
    }
  ]
}
```

<h3 id="mybusinessaccountsinvitationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInvitationsResponse](#schemalistinvitationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.localPosts.list

<a id="opIdmybusiness.accounts.locations.localPosts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/localPosts \
  -H 'Accept: application/json'
```

`GET /v4/{parent}/localPosts`

Returns a list of local posts associated with a location.

<h3 id="mybusinessaccountslocationslocalpostslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the location whose local posts will be listed.|
|pageSize|query|integer|false|How many local posts to return per page. Default of 20. The minimum is 1, and maximum page size is 100.|
|pageToken|query|string|false|If specified, returns the next page of local posts.|
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
  "localPosts": [
    {
      "alertType": "ALERT_TYPE_UNSPECIFIED",
      "callToAction": {
        "actionType": "ACTION_TYPE_UNSPECIFIED",
        "url": "string"
      },
      "createTime": "string",
      "event": {
        "schedule": {
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "endTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "startTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        },
        "title": "string"
      },
      "languageCode": "string",
      "media": [
        {
          "attribution": {
            "profileName": "string",
            "profilePhotoUrl": "string",
            "profileUrl": "string",
            "takedownUrl": "string"
          },
          "createTime": "string",
          "dataRef": {
            "resourceName": "string"
          },
          "description": "string",
          "dimensions": {
            "heightPixels": 0,
            "widthPixels": 0
          },
          "googleUrl": "string",
          "insights": {
            "viewCount": "string"
          },
          "locationAssociation": {
            "category": "CATEGORY_UNSPECIFIED",
            "priceListItemId": "string"
          },
          "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
          "name": "string",
          "sourceUrl": "string",
          "thumbnailUrl": "string"
        }
      ],
      "name": "string",
      "offer": {
        "couponCode": "string",
        "redeemOnlineUrl": "string",
        "termsConditions": "string"
      },
      "searchUrl": "string",
      "state": "LOCAL_POST_STATE_UNSPECIFIED",
      "summary": "string",
      "topicType": "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="mybusinessaccountslocationslocalpostslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocalPostsResponse](#schemalistlocalpostsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.localPosts.create

<a id="opIdmybusiness.accounts.locations.localPosts.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/localPosts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "alertType": "ALERT_TYPE_UNSPECIFIED",
    "callToAction": {
      "actionType": "ACTION_TYPE_UNSPECIFIED",
      "url": "string"
    },
    "createTime": "string",
    "event": {
      "schedule": {
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "endTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "startTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      },
      "title": "string"
    },
    "languageCode": "string",
    "media": [
      {
        "attribution": {
          "profileName": "string",
          "profilePhotoUrl": "string",
          "profileUrl": "string",
          "takedownUrl": "string"
        },
        "createTime": "string",
        "dataRef": {
          "resourceName": "string"
        },
        "description": "string",
        "dimensions": {
          "heightPixels": 0,
          "widthPixels": 0
        },
        "googleUrl": "string",
        "insights": {
          "viewCount": "string"
        },
        "locationAssociation": {
          "category": "CATEGORY_UNSPECIFIED",
          "priceListItemId": "string"
        },
        "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
        "name": "string",
        "sourceUrl": "string",
        "thumbnailUrl": "string"
      }
    ],
    "name": "string",
    "offer": {
      "couponCode": "string",
      "redeemOnlineUrl": "string",
      "termsConditions": "string"
    },
    "searchUrl": "string",
    "state": "LOCAL_POST_STATE_UNSPECIFIED",
    "summary": "string",
    "topicType": "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED",
    "updateTime": "string"
  }'
```

`POST /v4/{parent}/localPosts`

Creates a new local post associated with the specified location, and returns it.

> Body parameter

```json
{
  "alertType": "ALERT_TYPE_UNSPECIFIED",
  "callToAction": {
    "actionType": "ACTION_TYPE_UNSPECIFIED",
    "url": "string"
  },
  "createTime": "string",
  "event": {
    "schedule": {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "endTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    },
    "title": "string"
  },
  "languageCode": "string",
  "media": [
    {
      "attribution": {
        "profileName": "string",
        "profilePhotoUrl": "string",
        "profileUrl": "string",
        "takedownUrl": "string"
      },
      "createTime": "string",
      "dataRef": {
        "resourceName": "string"
      },
      "description": "string",
      "dimensions": {
        "heightPixels": 0,
        "widthPixels": 0
      },
      "googleUrl": "string",
      "insights": {
        "viewCount": "string"
      },
      "locationAssociation": {
        "category": "CATEGORY_UNSPECIFIED",
        "priceListItemId": "string"
      },
      "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
      "name": "string",
      "sourceUrl": "string",
      "thumbnailUrl": "string"
    }
  ],
  "name": "string",
  "offer": {
    "couponCode": "string",
    "redeemOnlineUrl": "string",
    "termsConditions": "string"
  },
  "searchUrl": "string",
  "state": "LOCAL_POST_STATE_UNSPECIFIED",
  "summary": "string",
  "topicType": "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="mybusinessaccountslocationslocalpostscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the location in which to create this local post.|
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
|body|body|[LocalPost](#schemalocalpost)|false|none|
|» alertType|body|string|false|The type of alert the post is created for. This field is only applicable for posts of topic_type Alert, and behaves as a sub-type of Alerts.|
|» callToAction|body|[CallToAction](#schemacalltoaction)|false|The URL that users are sent to when clicking through the promotion. Ignored for topic type `OFFER`.|
|» createTime|body|string(google-datetime)|false|Output only. Time of the creation of the post.|
|» event|body|[LocalPostEvent](#schemalocalpostevent)|false|Event information. Required for topic types `EVENT` and `OFFER`.|
|» languageCode|body|string|false|The language of the local post.|
|» media|body|[[MediaItem](#schemamediaitem)]|false|The media associated with the post. source_url is the only supported data field for a LocalPost MediaItem.|
|» name|body|string|false|Output only. Google identifier for this local post in the form: `accounts/{account_id}/locations/{location_id}/localPosts/{local_post_id}`|
|» offer|body|[LocalPostOffer](#schemalocalpostoffer)|false|Additional data for offer posts. This should only be set when the topic_type is OFFER.|
|» searchUrl|body|string|false|Output only. The link to the local post in Google search. This link can be used to share the post via social media, email, text, etc.|
|» state|body|string|false|Output only. The state of the post, indicating what part of its lifecycle it is in.|
|» summary|body|string|false|Description/body of the local post.|
|» topicType|body|string|false|Required. The topic type of the post: standard, event, offer, or alert.|
|» updateTime|body|string(google-datetime)|false|Output only. Time of the last modification of the post made by the user.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» alertType|ALERT_TYPE_UNSPECIFIED|
|» alertType|COVID_19|
|» state|LOCAL_POST_STATE_UNSPECIFIED|
|» state|REJECTED|
|» state|LIVE|
|» state|PROCESSING|
|» topicType|LOCAL_POST_TOPIC_TYPE_UNSPECIFIED|
|» topicType|STANDARD|
|» topicType|EVENT|
|» topicType|OFFER|
|» topicType|ALERT|

> Example responses

> 200 Response

```json
{
  "alertType": "ALERT_TYPE_UNSPECIFIED",
  "callToAction": {
    "actionType": "ACTION_TYPE_UNSPECIFIED",
    "url": "string"
  },
  "createTime": "string",
  "event": {
    "schedule": {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "endTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    },
    "title": "string"
  },
  "languageCode": "string",
  "media": [
    {
      "attribution": {
        "profileName": "string",
        "profilePhotoUrl": "string",
        "profileUrl": "string",
        "takedownUrl": "string"
      },
      "createTime": "string",
      "dataRef": {
        "resourceName": "string"
      },
      "description": "string",
      "dimensions": {
        "heightPixels": 0,
        "widthPixels": 0
      },
      "googleUrl": "string",
      "insights": {
        "viewCount": "string"
      },
      "locationAssociation": {
        "category": "CATEGORY_UNSPECIFIED",
        "priceListItemId": "string"
      },
      "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
      "name": "string",
      "sourceUrl": "string",
      "thumbnailUrl": "string"
    }
  ],
  "name": "string",
  "offer": {
    "couponCode": "string",
    "redeemOnlineUrl": "string",
    "termsConditions": "string"
  },
  "searchUrl": "string",
  "state": "LOCAL_POST_STATE_UNSPECIFIED",
  "summary": "string",
  "topicType": "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="mybusinessaccountslocationslocalpostscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LocalPost](#schemalocalpost)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.list

<a id="opIdmybusiness.accounts.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/locations \
  -H 'Accept: application/json'
```

`GET /v4/{parent}/locations`

Lists the locations for the specified account.

<h3 id="mybusinessaccountslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the account to fetch locations from. If the Account is of AccountType PERSONAL, only Locations that are directly owned by the Account are returned, otherwise it will return all accessible locations from the Account, either directly or indirectly.|
|filter|query|string|false|A filter constraining the locations to return. The response includes only entries that match the filter. If `filter` is empty, then constraints are applied and all locations (paginated) are retrieved for the requested account. For more information about valid fields and example usage, see [Work with Location Data Guide](https://developers.google.com/my-business/content/location-data#filter_results_when_you_list_locations).|
|languageCode|query|string|false|The BCP 47 code of language to get display location properties in. If this language is not available, they will be provided in the language of the location. If neither is available, they will be provided in English. Deprecated. After August 15th, 2020, this field will no longer be applied. Instead, the language of the location will always be used.|
|orderBy|query|string|false|Sorting order for the request. Multiple fields should be comma-separated, following SQL syntax. The default sorting order is ascending. To specify descending order, a suffix " desc" should be added. Valid fields to order_by are location_name and store_code. For example: "location_name, store_code desc" or "location_name" or "store_code desc"|
|pageSize|query|integer|false|How many locations to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.|
|pageToken|query|string|false|If specified, it fetches the next `page` of locations. The page token is returned by previous calls to `ListLocations` when there were more locations than could fit in the requested page size.|
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
  "locations": [
    {
      "adWordsLocationExtensions": {
        "adPhone": "string"
      },
      "additionalCategories": [
        {
          "categoryId": "string",
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        }
      ],
      "additionalPhones": [
        "string"
      ],
      "address": {
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
      "attributes": [
        {
          "attributeId": "string",
          "repeatedEnumValue": {
            "setValues": [
              "string"
            ],
            "unsetValues": [
              "string"
            ]
          },
          "urlValues": [
            {
              "url": "string"
            }
          ],
          "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
          "values": [
            null
          ]
        }
      ],
      "labels": [
        "string"
      ],
      "languageCode": "string",
      "latlng": {
        "latitude": 0,
        "longitude": 0
      },
      "locationKey": {
        "explicitNoPlaceId": true,
        "placeId": "string",
        "plusPageId": "string",
        "requestId": "string"
      },
      "locationName": "string",
      "locationState": {
        "canDelete": true,
        "canHaveFoodMenus": true,
        "canModifyServiceList": true,
        "canOperateHealthData": true,
        "canOperateLodgingData": true,
        "canUpdate": true,
        "hasPendingEdits": true,
        "hasPendingVerification": true,
        "isDisabled": true,
        "isDisconnected": true,
        "isDuplicate": true,
        "isGoogleUpdated": true,
        "isLocalPostApiDisabled": true,
        "isPendingReview": true,
        "isPublished": true,
        "isSuspended": true,
        "isVerified": true,
        "needsReverification": true
      },
      "metadata": {
        "duplicate": {
          "access": "ACCESS_UNSPECIFIED",
          "locationName": "string",
          "placeId": "string"
        },
        "mapsUrl": "string",
        "newReviewUrl": "string"
      },
      "moreHours": [
        {
          "hoursTypeId": "string",
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": "string",
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": "string"
            }
          ]
        }
      ],
      "name": "string",
      "openInfo": {
        "canReopen": true,
        "openingDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
      },
      "priceLists": [
        {
          "labels": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ],
          "priceListId": "string",
          "sections": [
            {
              "items": [
                {
                  "itemId": "string",
                  "labels": [
                    {
                      "description": "string",
                      "displayName": "string",
                      "languageCode": "string"
                    }
                  ],
                  "price": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  }
                }
              ],
              "labels": [
                {
                  "description": "string",
                  "displayName": "string",
                  "languageCode": "string"
                }
              ],
              "sectionId": "string",
              "sectionType": "SECTION_TYPE_UNSPECIFIED"
            }
          ],
          "sourceUrl": "string"
        }
      ],
      "primaryCategory": {
        "categoryId": "string",
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      },
      "primaryPhone": "string",
      "profile": {
        "description": "string"
      },
      "regularHours": {
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": "string",
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": "string"
          }
        ]
      },
      "relationshipData": {
        "parentChain": "string"
      },
      "serviceArea": {
        "businessType": "BUSINESS_TYPE_UNSPECIFIED",
        "places": {
          "placeInfos": [
            {
              "name": "string",
              "placeId": "string"
            }
          ]
        },
        "radius": {
          "latlng": {
            "latitude": 0,
            "longitude": 0
          },
          "radiusKm": 0
        }
      },
      "specialHours": {
        "specialHourPeriods": [
          {
            "closeTime": "string",
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "isClosed": true,
            "openTime": "string",
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            }
          }
        ]
      },
      "storeCode": "string",
      "websiteUrl": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="mybusinessaccountslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.create

<a id="opIdmybusiness.accounts.locations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/locations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "adWordsLocationExtensions": {
      "adPhone": "string"
    },
    "additionalCategories": [
      {
        "categoryId": "string",
        "displayName": "string",
        "serviceTypes": [
          {}
        ]
      }
    ],
    "additionalPhones": [
      "string"
    ],
    "address": {
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
    "attributes": [
      {
        "attributeId": "string",
        "repeatedEnumValue": {
          "setValues": [
            "string"
          ],
          "unsetValues": [
            "string"
          ]
        },
        "urlValues": [
          {
            "url": "string"
          }
        ],
        "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
        "values": [
          null
        ]
      }
    ],
    "labels": [
      "string"
    ],
    "languageCode": "string",
    "latlng": {
      "latitude": 0,
      "longitude": 0
    },
    "locationKey": {
      "explicitNoPlaceId": true,
      "placeId": "string",
      "plusPageId": "string",
      "requestId": "string"
    },
    "locationName": "string",
    "locationState": {
      "canDelete": true,
      "canUpdate": true,
      "hasPendingEdits": true,
      "hasPendingVerification": true,
      "isDisabled": true,
      "isDisconnected": true,
      "isDuplicate": true,
      "isGoogleUpdated": true,
      "isLocalPostApiDisabled": true,
      "isPendingReview": true,
      "isPublished": true,
      "isSuspended": true,
      "isVerified": true,
      "needsReverification": true
    },
    "metadata": {
      "duplicate": {
        "access": "ACCESS_UNSPECIFIED",
        "locationName": "string",
        "placeId": "string"
      },
      "mapsUrl": "string",
      "newReviewUrl": "string"
    },
    "moreHours": [
      {
        "hoursTypeId": "string",
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": "string",
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": "string"
          }
        ]
      }
    ],
    "name": "string",
    "openInfo": {
      "canReopen": true,
      "openingDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
    },
    "priceLists": [
      {
        "labels": [
          {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        ],
        "priceListId": "string",
        "sections": [
          {
            "items": [
              {
                "itemId": "string",
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ],
                "price": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                }
              }
            ],
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ],
            "sectionId": "string",
            "sectionType": "SECTION_TYPE_UNSPECIFIED"
          }
        ],
        "sourceUrl": "string"
      }
    ],
    "primaryCategory": {
      "categoryId": "string",
      "displayName": "string",
      "serviceTypes": [
        {}
      ]
    },
    "primaryPhone": "string",
    "profile": {
      "description": "string"
    },
    "regularHours": {
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": "string",
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": "string"
        }
      ]
    },
    "relationshipData": {
      "parentChain": "string"
    },
    "serviceArea": {
      "businessType": "BUSINESS_TYPE_UNSPECIFIED",
      "places": {
        "placeInfos": [
          {
            "name": "string",
            "placeId": "string"
          }
        ]
      },
      "radius": {
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "radiusKm": 0
      }
    },
    "specialHours": {
      "specialHourPeriods": [
        {
          "closeTime": "string",
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "isClosed": true,
          "openTime": "string",
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "storeCode": "string",
    "websiteUrl": "string"
  }'
```

`POST /v4/{parent}/locations`

Creates a new location owned by the specified account, and returns it.

> Body parameter

```json
{
  "adWordsLocationExtensions": {
    "adPhone": "string"
  },
  "additionalCategories": [
    {
      "categoryId": "string",
      "displayName": "string",
      "serviceTypes": [
        {}
      ]
    }
  ],
  "additionalPhones": [
    "string"
  ],
  "address": {
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
  "attributes": [
    {
      "attributeId": "string",
      "repeatedEnumValue": {
        "setValues": [
          "string"
        ],
        "unsetValues": [
          "string"
        ]
      },
      "urlValues": [
        {
          "url": "string"
        }
      ],
      "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
      "values": [
        null
      ]
    }
  ],
  "labels": [
    "string"
  ],
  "languageCode": "string",
  "latlng": {
    "latitude": 0,
    "longitude": 0
  },
  "locationKey": {
    "explicitNoPlaceId": true,
    "placeId": "string",
    "plusPageId": "string",
    "requestId": "string"
  },
  "locationName": "string",
  "locationState": {
    "canDelete": true,
    "canUpdate": true,
    "hasPendingEdits": true,
    "hasPendingVerification": true,
    "isDisabled": true,
    "isDisconnected": true,
    "isDuplicate": true,
    "isGoogleUpdated": true,
    "isLocalPostApiDisabled": true,
    "isPendingReview": true,
    "isPublished": true,
    "isSuspended": true,
    "isVerified": true,
    "needsReverification": true
  },
  "metadata": {
    "duplicate": {
      "access": "ACCESS_UNSPECIFIED",
      "locationName": "string",
      "placeId": "string"
    },
    "mapsUrl": "string",
    "newReviewUrl": "string"
  },
  "moreHours": [
    {
      "hoursTypeId": "string",
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": "string",
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": "string"
        }
      ]
    }
  ],
  "name": "string",
  "openInfo": {
    "canReopen": true,
    "openingDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
  },
  "priceLists": [
    {
      "labels": [
        {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      ],
      "priceListId": "string",
      "sections": [
        {
          "items": [
            {
              "itemId": "string",
              "labels": [
                {
                  "description": "string",
                  "displayName": "string",
                  "languageCode": "string"
                }
              ],
              "price": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            }
          ],
          "labels": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ],
          "sectionId": "string",
          "sectionType": "SECTION_TYPE_UNSPECIFIED"
        }
      ],
      "sourceUrl": "string"
    }
  ],
  "primaryCategory": {
    "categoryId": "string",
    "displayName": "string",
    "serviceTypes": [
      {}
    ]
  },
  "primaryPhone": "string",
  "profile": {
    "description": "string"
  },
  "regularHours": {
    "periods": [
      {
        "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
        "closeTime": "string",
        "openDay": "DAY_OF_WEEK_UNSPECIFIED",
        "openTime": "string"
      }
    ]
  },
  "relationshipData": {
    "parentChain": "string"
  },
  "serviceArea": {
    "businessType": "BUSINESS_TYPE_UNSPECIFIED",
    "places": {
      "placeInfos": [
        {
          "name": "string",
          "placeId": "string"
        }
      ]
    },
    "radius": {
      "latlng": {
        "latitude": 0,
        "longitude": 0
      },
      "radiusKm": 0
    }
  },
  "specialHours": {
    "specialHourPeriods": [
      {
        "closeTime": "string",
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "isClosed": true,
        "openTime": "string",
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      }
    ]
  },
  "storeCode": "string",
  "websiteUrl": "string"
}
```

<h3 id="mybusinessaccountslocationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the account in which to create this location.|
|requestId|query|string|false|A unique request ID for the server to detect duplicated requests. We recommend using UUIDs. Max length is 50 characters.|
|validateOnly|query|boolean|false|If true, the request is validated without actually creating the location.|
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
|body|body|[Location](#schemalocation)|false|none|
|» adWordsLocationExtensions|body|[AdWordsLocationExtensions](#schemaadwordslocationextensions)|false|Additional information that is surfaced in AdWords.|
|» additionalCategories|body|[[Category](#schemacategory)]|false|Additional categories to describe your business. Categories help your customers find accurate, specific results for services they're interested in. To keep your business information accurate and live, make sure that you use as few categories as possible to describe your overall core business. Choose categories that are as specific as possible, but representative of your main business.|
|» additionalPhones|body|[string]|false|Up to two phone numbers (mobile or landline, no fax) at which your business can be called, in addition to your primary phone number.|
|» address|body|[PostalAddress](#schemapostaladdress)|false|A precise, accurate address to describe your business location. PO boxes or mailboxes located at remote locations are not acceptable. At this time, you can specify a maximum of five `address_lines` values in the address.|
|» attributes|body|[[Attribute](#schemaattribute)]|false|Attributes for this location.|
|» labels|body|[string]|false|A collection of free-form strings to allow you to tag your business. These labels are NOT user facing; only you can see them. Limited to 255 characters (per label).|
|» languageCode|body|string|false|The language of the location. Set during creation and not updateable.|
|» latlng|body|[LatLng](#schemalatlng)|false|User-provided latitude and longitude. When creating a location, this field is ignored if the provided address geocodes successfully. This field is only returned on get requests if the user-provided `latlng` value was accepted during create, or the `latlng` value was updated through the Business Profile website. This field cannot be updated.|
|» locationKey|body|[LocationKey](#schemalocationkey)|false|A collection of keys that link this business to other Google properties, such as a Google+ page and Google Maps Places.|
|» locationName|body|string|false|Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade").|
|» locationState|body|[LocationState](#schemalocationstate)|false|Output only. A set of booleans that reflects the [state of a location.](https://support.google.com/business/answer/3480862)|
|» metadata|body|[Metadata](#schemametadata)|false|Output Only. Additional non-user-editable information.|
|» moreHours|body|[[MoreHours](#schemamorehours)]|false|More hours for a business's different departments or specific customers.|
|» name|body|string|false|Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}` In the context of matches, this field will not be populated.|
|» openInfo|body|[OpenInfo](#schemaopeninfo)|false|A flag that indicates whether the location is currently open for business.|
|» priceLists|body|[[PriceList](#schemapricelist)]|false|Price list information for this location.|
|» primaryCategory|body|[Category](#schemacategory)|false|Category that best describes the core business this location engages in.|
|» primaryPhone|body|string|false|A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible.|
|» profile|body|[Profile](#schemaprofile)|false|Describes your business in your own voice and shares with users the unique story of your business and offerings.|
|» regularHours|body|[BusinessHours](#schemabusinesshours)|false|Operating hours for the business.|
|» relationshipData|body|[RelationshipData](#schemarelationshipdata)|false|All locations and chain related to this one.|
|» serviceArea|body|[ServiceAreaBusiness](#schemaserviceareabusiness)|false|Service area businesses provide their service at the customer's location. If this business is a service area business, this field describes the area(s) serviced by the business.|
|» specialHours|body|[SpecialHours](#schemaspecialhours)|false|Special hours for the business. This typically includes holiday hours, and other times outside of regular operating hours. These override regular business hours.|
|» storeCode|body|string|false|External identifier for this location, which must be unique inside a given account. This is a means of associating the location with your own records.|
|» websiteUrl|body|string|false|A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand.|

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
  "adWordsLocationExtensions": {
    "adPhone": "string"
  },
  "additionalCategories": [
    {
      "categoryId": "string",
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  ],
  "additionalPhones": [
    "string"
  ],
  "address": {
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
  "attributes": [
    {
      "attributeId": "string",
      "repeatedEnumValue": {
        "setValues": [
          "string"
        ],
        "unsetValues": [
          "string"
        ]
      },
      "urlValues": [
        {
          "url": "string"
        }
      ],
      "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
      "values": [
        null
      ]
    }
  ],
  "labels": [
    "string"
  ],
  "languageCode": "string",
  "latlng": {
    "latitude": 0,
    "longitude": 0
  },
  "locationKey": {
    "explicitNoPlaceId": true,
    "placeId": "string",
    "plusPageId": "string",
    "requestId": "string"
  },
  "locationName": "string",
  "locationState": {
    "canDelete": true,
    "canHaveFoodMenus": true,
    "canModifyServiceList": true,
    "canOperateHealthData": true,
    "canOperateLodgingData": true,
    "canUpdate": true,
    "hasPendingEdits": true,
    "hasPendingVerification": true,
    "isDisabled": true,
    "isDisconnected": true,
    "isDuplicate": true,
    "isGoogleUpdated": true,
    "isLocalPostApiDisabled": true,
    "isPendingReview": true,
    "isPublished": true,
    "isSuspended": true,
    "isVerified": true,
    "needsReverification": true
  },
  "metadata": {
    "duplicate": {
      "access": "ACCESS_UNSPECIFIED",
      "locationName": "string",
      "placeId": "string"
    },
    "mapsUrl": "string",
    "newReviewUrl": "string"
  },
  "moreHours": [
    {
      "hoursTypeId": "string",
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": "string",
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": "string"
        }
      ]
    }
  ],
  "name": "string",
  "openInfo": {
    "canReopen": true,
    "openingDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
  },
  "priceLists": [
    {
      "labels": [
        {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      ],
      "priceListId": "string",
      "sections": [
        {
          "items": [
            {
              "itemId": "string",
              "labels": [
                {
                  "description": "string",
                  "displayName": "string",
                  "languageCode": "string"
                }
              ],
              "price": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            }
          ],
          "labels": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ],
          "sectionId": "string",
          "sectionType": "SECTION_TYPE_UNSPECIFIED"
        }
      ],
      "sourceUrl": "string"
    }
  ],
  "primaryCategory": {
    "categoryId": "string",
    "displayName": "string",
    "moreHoursTypes": [
      {
        "displayName": "string",
        "hoursTypeId": "string",
        "localizedDisplayName": "string"
      }
    ],
    "serviceTypes": [
      {
        "displayName": "string",
        "serviceTypeId": "string"
      }
    ]
  },
  "primaryPhone": "string",
  "profile": {
    "description": "string"
  },
  "regularHours": {
    "periods": [
      {
        "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
        "closeTime": "string",
        "openDay": "DAY_OF_WEEK_UNSPECIFIED",
        "openTime": "string"
      }
    ]
  },
  "relationshipData": {
    "parentChain": "string"
  },
  "serviceArea": {
    "businessType": "BUSINESS_TYPE_UNSPECIFIED",
    "places": {
      "placeInfos": [
        {
          "name": "string",
          "placeId": "string"
        }
      ]
    },
    "radius": {
      "latlng": {
        "latitude": 0,
        "longitude": 0
      },
      "radiusKm": 0
    }
  },
  "specialHours": {
    "specialHourPeriods": [
      {
        "closeTime": "string",
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "isClosed": true,
        "openTime": "string",
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      }
    ]
  },
  "storeCode": "string",
  "websiteUrl": "string"
}
```

<h3 id="mybusinessaccountslocationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Location](#schemalocation)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.media.list

<a id="opIdmybusiness.accounts.locations.media.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/media \
  -H 'Accept: application/json'
```

`GET /v4/{parent}/media`

Returns a list of media items associated with a location.

<h3 id="mybusinessaccountslocationsmedialist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the location whose media items will be listed.|
|pageSize|query|integer|false|How many media items to return per page. The default value is 100, which is also the maximum supported number of media items able to be added to a location with the Google My Business API. Maximum page size is 2500.|
|pageToken|query|string|false|If specified, returns the next page of media items.|
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
  "mediaItems": [
    {
      "attribution": {
        "profileName": "string",
        "profilePhotoUrl": "string",
        "profileUrl": "string",
        "takedownUrl": "string"
      },
      "createTime": "string",
      "dataRef": {
        "resourceName": "string"
      },
      "description": "string",
      "dimensions": {
        "heightPixels": 0,
        "widthPixels": 0
      },
      "googleUrl": "string",
      "insights": {
        "viewCount": "string"
      },
      "locationAssociation": {
        "category": "CATEGORY_UNSPECIFIED",
        "priceListItemId": "string"
      },
      "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
      "name": "string",
      "sourceUrl": "string",
      "thumbnailUrl": "string"
    }
  ],
  "nextPageToken": "string",
  "totalMediaItemCount": 0
}
```

<h3 id="mybusinessaccountslocationsmedialist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListMediaItemsResponse](#schemalistmediaitemsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.media.create

<a id="opIdmybusiness.accounts.locations.media.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/media \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "attribution": {
      "profileName": "string",
      "profilePhotoUrl": "string",
      "profileUrl": "string",
      "takedownUrl": "string"
    },
    "createTime": "string",
    "dataRef": {
      "resourceName": "string"
    },
    "description": "string",
    "dimensions": {
      "heightPixels": 0,
      "widthPixels": 0
    },
    "googleUrl": "string",
    "insights": {
      "viewCount": "string"
    },
    "locationAssociation": {
      "category": "CATEGORY_UNSPECIFIED",
      "priceListItemId": "string"
    },
    "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
    "name": "string",
    "sourceUrl": "string",
    "thumbnailUrl": "string"
  }'
```

`POST /v4/{parent}/media`

Creates a new media item for the location.

> Body parameter

```json
{
  "attribution": {
    "profileName": "string",
    "profilePhotoUrl": "string",
    "profileUrl": "string",
    "takedownUrl": "string"
  },
  "createTime": "string",
  "dataRef": {
    "resourceName": "string"
  },
  "description": "string",
  "dimensions": {
    "heightPixels": 0,
    "widthPixels": 0
  },
  "googleUrl": "string",
  "insights": {
    "viewCount": "string"
  },
  "locationAssociation": {
    "category": "CATEGORY_UNSPECIFIED",
    "priceListItemId": "string"
  },
  "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
  "name": "string",
  "sourceUrl": "string",
  "thumbnailUrl": "string"
}
```

<h3 id="mybusinessaccountslocationsmediacreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the location where this media item will be created.|
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
|body|body|[MediaItem](#schemamediaitem)|false|none|
|» attribution|body|[Attribution](#schemaattribution)|false|Output only. Attribution information for customer media items. You must display this attribution as provided to your users and must not delete or alter the attribution.|
|» createTime|body|string(google-datetime)|false|Output only. Creation time of this media item.|
|» dataRef|body|[MediaItemDataRef](#schemamediaitemdataref)|false|Input only. A reference to media item binary data as obtained by the `StartUploadMediaItemData` method. When creating a media item, either sourceUrl or dataRef must be set.|
|» description|body|string|false|Description for this media item. Descriptions cannot be modified through the Google My Business API, but can be set when creating a new media item that is not a cover photo.|
|» dimensions|body|[Dimensions](#schemadimensions)|false|Output only. The dimensions (width and height) in pixels.|
|» googleUrl|body|string|false|Output only. Google-hosted URL for this media item. This URL is not static since it may change over time. For video this will be a preview image with an overlaid play icon.|
|» insights|body|[MediaInsights](#schemamediainsights)|false|Output only. Statistics for this media item.|
|» locationAssociation|body|[LocationAssociation](#schemalocationassociation)|false|Required when calling `CreatePhoto`. Describes how this media item is connected to its location. Must be either a category (for example, EXTERIOR) or the ID of a price list item. This is required when adding new media to a location with `CreateMediaItem`. For other types of media, for example, photos on local posts, this will not be present.|
|» mediaFormat|body|string|false|The format of this media item. Must be set when the media item is created, and is read-only on all other requests. Cannot be updated.|
|» name|body|string|false|The resource name for this media item. `accounts/{account_id}/locations/{location_id}/media/{media_key}`|
|» sourceUrl|body|string|false|A publicly accessible URL where the media item can be retrieved from. When creating one of this or data_ref must be set to specify the source of the media item. If `source_url` was used when creating a media item, it will be populated with that source URL when the media item is retrieved. This field cannot be updated.|
|» thumbnailUrl|body|string|false|Output only. Where provided, the URL of a thumbnail image for this media item.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» mediaFormat|MEDIA_FORMAT_UNSPECIFIED|
|» mediaFormat|PHOTO|
|» mediaFormat|VIDEO|

> Example responses

> 200 Response

```json
{
  "attribution": {
    "profileName": "string",
    "profilePhotoUrl": "string",
    "profileUrl": "string",
    "takedownUrl": "string"
  },
  "createTime": "string",
  "dataRef": {
    "resourceName": "string"
  },
  "description": "string",
  "dimensions": {
    "heightPixels": 0,
    "widthPixels": 0
  },
  "googleUrl": "string",
  "insights": {
    "viewCount": "string"
  },
  "locationAssociation": {
    "category": "CATEGORY_UNSPECIFIED",
    "priceListItemId": "string"
  },
  "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
  "name": "string",
  "sourceUrl": "string",
  "thumbnailUrl": "string"
}
```

<h3 id="mybusinessaccountslocationsmediacreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MediaItem](#schemamediaitem)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.media.customers.list

<a id="opIdmybusiness.accounts.locations.media.customers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/media/customers \
  -H 'Accept: application/json'
```

`GET /v4/{parent}/media/customers`

Returns a list of media items associated with a location that have been contributed by customers.

<h3 id="mybusinessaccountslocationsmediacustomerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the location whose customer media items will be listed.|
|pageSize|query|integer|false|How many media items to return per page. The default value is 100, the maximum supported page size is 200.|
|pageToken|query|string|false|If specified, returns the next page of media items.|
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
  "mediaItems": [
    {
      "attribution": {
        "profileName": "string",
        "profilePhotoUrl": "string",
        "profileUrl": "string",
        "takedownUrl": "string"
      },
      "createTime": "string",
      "dataRef": {
        "resourceName": "string"
      },
      "description": "string",
      "dimensions": {
        "heightPixels": 0,
        "widthPixels": 0
      },
      "googleUrl": "string",
      "insights": {
        "viewCount": "string"
      },
      "locationAssociation": {
        "category": "CATEGORY_UNSPECIFIED",
        "priceListItemId": "string"
      },
      "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
      "name": "string",
      "sourceUrl": "string",
      "thumbnailUrl": "string"
    }
  ],
  "nextPageToken": "string",
  "totalMediaItemCount": 0
}
```

<h3 id="mybusinessaccountslocationsmediacustomerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCustomerMediaItemsResponse](#schemalistcustomermediaitemsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.media.startUpload

<a id="opIdmybusiness.accounts.locations.media.startUpload"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/media:startUpload \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v4/{parent}/media:startUpload`

Generates a `MediaItemDataRef` for media item uploading.

> Body parameter

```json
{}
```

<h3 id="mybusinessaccountslocationsmediastartupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the location this media item is to be added to.|
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
|body|body|[StartUploadMediaItemDataRequest](#schemastartuploadmediaitemdatarequest)|false|none|

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
  "resourceName": "string"
}
```

<h3 id="mybusinessaccountslocationsmediastartupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MediaItemDataRef](#schemamediaitemdataref)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.questions.list

<a id="opIdmybusiness.accounts.locations.questions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/questions \
  -H 'Accept: application/json'
```

`GET /v4/{parent}/questions`

Returns the paginated list of questions and some of its answers for a specified location.

<h3 id="mybusinessaccountslocationsquestionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the location to fetch questions for.|
|answersPerQuestion|query|integer|false|How many answers to fetch per question. The default and maximum `answers_per_question` values are 10.|
|filter|query|string|false|A filter constraining the questions to return. The only filter currently supported is "ignore_answered=true"|
|orderBy|query|string|false|The order to return the questions. Valid options include 'update_time desc' and 'upvote_count desc', which will return the questions sorted descendingly by the requested field. The default sort order is 'update_time desc'.|
|pageSize|query|integer|false|How many questions to fetch per page. The default and maximum `page_size` values are 10.|
|pageToken|query|string|false|If specified, the next page of questions is retrieved.|
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
  "questions": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUrl": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "topAnswers": [
        {
          "author": {
            "displayName": "string",
            "profilePhotoUrl": "string",
            "type": "AUTHOR_TYPE_UNSPECIFIED"
          },
          "createTime": "string",
          "name": "string",
          "text": "string",
          "updateTime": "string",
          "upvoteCount": 0
        }
      ],
      "totalAnswerCount": 0,
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "totalSize": 0
}
```

<h3 id="mybusinessaccountslocationsquestionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListQuestionsResponse](#schemalistquestionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.questions.create

<a id="opIdmybusiness.accounts.locations.questions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/questions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "author": {
      "displayName": "string",
      "profilePhotoUrl": "string",
      "type": "AUTHOR_TYPE_UNSPECIFIED"
    },
    "createTime": "string",
    "name": "string",
    "text": "string",
    "topAnswers": [
      {
        "author": {
          "displayName": "string",
          "profilePhotoUrl": "string",
          "type": "AUTHOR_TYPE_UNSPECIFIED"
        },
        "createTime": "string",
        "name": "string",
        "text": "string",
        "updateTime": "string",
        "upvoteCount": 0
      }
    ],
    "totalAnswerCount": 0,
    "updateTime": "string",
    "upvoteCount": 0
  }'
```

`POST /v4/{parent}/questions`

Adds a question for the specified location.

> Body parameter

```json
{
  "author": {
    "displayName": "string",
    "profilePhotoUrl": "string",
    "type": "AUTHOR_TYPE_UNSPECIFIED"
  },
  "createTime": "string",
  "name": "string",
  "text": "string",
  "topAnswers": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUrl": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "totalAnswerCount": 0,
  "updateTime": "string",
  "upvoteCount": 0
}
```

<h3 id="mybusinessaccountslocationsquestionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the location to write a question for.|
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
|body|body|[Question](#schemaquestion)|false|none|
|» author|body|[Author](#schemaauthor)|false|Output only. The author of the question.|
|» createTime|body|string(google-datetime)|false|Output only. The timestamp for when the question was written.|
|» name|body|string|false|Output only. The unique name for the question. accounts/*/locations/*/questions/*|
|» text|body|string|false|The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters.|
|» topAnswers|body|[[Answer](#schemaanswer)]|false|Output only. A list of answers to the question, sorted by upvotes. This may not be a complete list of answers depending on the request parameters (answers_per_question)|
|» totalAnswerCount|body|integer(int32)|false|Output only. The total number of answers posted for this question.|
|» updateTime|body|string(google-datetime)|false|Output only. The timestamp for when the question was last modified.|
|» upvoteCount|body|integer(int32)|false|Output only. The number of upvotes for the question.|

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
  "author": {
    "displayName": "string",
    "profilePhotoUrl": "string",
    "type": "AUTHOR_TYPE_UNSPECIFIED"
  },
  "createTime": "string",
  "name": "string",
  "text": "string",
  "topAnswers": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUrl": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "totalAnswerCount": 0,
  "updateTime": "string",
  "upvoteCount": 0
}
```

<h3 id="mybusinessaccountslocationsquestionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Question](#schemaquestion)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.reviews.list

<a id="opIdmybusiness.accounts.locations.reviews.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/reviews \
  -H 'Accept: application/json'
```

`GET /v4/{parent}/reviews`

Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.

<h3 id="mybusinessaccountslocationsreviewslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the location to fetch reviews for.|
|orderBy|query|string|false|Specifies the field to sort reviews by. If unspecified, the order of reviews returned will default to `update_time desc`. Valid orders to sort by are `rating`, `rating desc` and `update_time desc`.|
|pageSize|query|integer|false|How many reviews to fetch per page. The maximum `page_size` is 50.|
|pageToken|query|string|false|If specified, it fetches the next page of reviews.|
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
  "averageRating": 0,
  "nextPageToken": "string",
  "reviews": [
    {
      "comment": "string",
      "createTime": "string",
      "name": "string",
      "reviewId": "string",
      "reviewReply": {
        "comment": "string",
        "updateTime": "string"
      },
      "reviewer": {
        "displayName": "string",
        "isAnonymous": true,
        "profilePhotoUrl": "string"
      },
      "starRating": "STAR_RATING_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "totalReviewCount": 0
}
```

<h3 id="mybusinessaccountslocationsreviewslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReviewsResponse](#schemalistreviewsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.accounts.locations.verifications.list

<a id="opIdmybusiness.accounts.locations.verifications.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string/verifications \
  -H 'Accept: application/json'
```

`GET /v4/{parent}/verifications`

List verifications of a location, ordered by create time.

<h3 id="mybusinessaccountslocationsverificationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Resource name of the location that verification requests belong to.|
|pageSize|query|integer|false|How many verification to include per page. If not set, return all.|
|pageToken|query|string|false|If specified, returns the next page of verifications.|
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
  "verifications": [
    {
      "createTime": "string",
      "method": "VERIFICATION_METHOD_UNSPECIFIED",
      "name": "string",
      "state": "VERIFICATION_STATE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="mybusinessaccountslocationsverificationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVerificationsResponse](#schemalistverificationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="google-my-business-api-attributes">attributes</h1>

## mybusiness.attributes.list

<a id="opIdmybusiness.attributes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/attributes \
  -H 'Accept: application/json'
```

`GET /v4/attributes`

Returns the list of available attributes that would be available for a location with the given primary category and country.

<h3 id="mybusinessattributeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|categoryId|query|string|false|The primary category stable ID to find available attributes.|
|country|query|string|false|The ISO 3166-1 alpha-2 country code to find available attributes.|
|languageCode|query|string|false|The BCP 47 code of language to get attribute display names in. If this language is not available, they will be provided in English.|
|name|query|string|false|Resource name of the location to look up available attributes.|
|pageSize|query|integer|false|How many attributes to include per page. Default is 200, minimum is 1.|
|pageToken|query|string|false|If specified, the next page of attribute metadata is retrieved. The `pageToken` is returned when a call to `attributes.list` returns more results than can fit into the requested page size.|
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
  "attributes": [
    {
      "attributeId": "string",
      "displayName": "string",
      "groupDisplayName": "string",
      "isDeprecated": true,
      "isRepeatable": true,
      "valueMetadata": [
        {
          "displayName": "string",
          "value": null
        }
      ],
      "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="mybusinessattributeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAttributeMetadataResponse](#schemalistattributemetadataresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="google-my-business-api-categories">categories</h1>

## mybusiness.categories.list

<a id="opIdmybusiness.categories.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/categories \
  -H 'Accept: application/json'
```

`GET /v4/categories`

Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

<h3 id="mybusinesscategorieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|languageCode|query|string|false|The BCP 47 code of language. If the language is not available, it will default to English.|
|pageSize|query|integer|false|How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.|
|pageToken|query|string|false|If specified, the next page of categories will be fetched.|
|regionCode|query|string|false|The ISO 3166-1 alpha-2 country code.|
|searchTerm|query|string|false|Optional filter string from user.|
|view|query|string|false|Optional. Specifies which parts to the Category resource should be returned in the response.|
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
|view|CATEGORY_VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "categories": [
    {
      "categoryId": "string",
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string",
  "totalCategoryCount": 0
}
```

<h3 id="mybusinesscategorieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBusinessCategoriesResponse](#schemalistbusinesscategoriesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.categories.batchGet

<a id="opIdmybusiness.categories.batchGet"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/categories:batchGet \
  -H 'Accept: application/json'
```

`GET /v4/categories:batchGet`

Returns a list of business categories for the provided language and GConcept ids.

<h3 id="mybusinesscategoriesbatchget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|categoryIds|query|[string]|false|Required. At least one name must be set. The GConcept ids the localized category names should be returned for.|
|languageCode|query|string|false|Required. The BCP 47 code of language that the category names should be returned in.|
|regionCode|query|string|false|Optional. The ISO 3166-1 alpha-2 country code used to infer non-standard language.|
|view|query|string|false|Required. Specifies which parts to the Category resource should be returned in the response.|
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
|view|CATEGORY_VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "categories": [
    {
      "categoryId": "string",
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  ]
}
```

<h3 id="mybusinesscategoriesbatchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchGetBusinessCategoriesResponse](#schemabatchgetbusinesscategoriesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="google-my-business-api-chains">chains</h1>

## mybusiness.chains.search

<a id="opIdmybusiness.chains.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/chains:search \
  -H 'Accept: application/json'
```

`GET /v4/chains:search`

Searches the chain based on chain name.

<h3 id="mybusinesschainssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chainDisplayName|query|string|false|Search for a chain by its name. Exact/partial/fuzzy/related queries are supported. Examples: "walmart", "wal-mart", "walmmmart", "沃尔玛"|
|resultCount|query|integer|false|The maximum number of matched chains to return from this query. The default is 10. The maximum possible value is 500.|
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
  "chains": [
    {
      "chainNames": [
        {
          "displayName": "string",
          "languageCode": "string"
        }
      ],
      "locationCount": 0,
      "name": "string",
      "websites": [
        {
          "url": "string"
        }
      ]
    }
  ]
}
```

<h3 id="mybusinesschainssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchChainsResponse](#schemasearchchainsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.chains.get

<a id="opIdmybusiness.chains.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string \
  -H 'Accept: application/json'
```

`GET /v4/{name}`

Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.

<h3 id="mybusinesschainsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The chain's resource name, in the format `chains/{chain_place_id}`.|
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
  "chainNames": [
    {
      "displayName": "string",
      "languageCode": "string"
    }
  ],
  "locationCount": 0,
  "name": "string",
  "websites": [
    {
      "url": "string"
    }
  ]
}
```

<h3 id="mybusinesschainsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Chain](#schemachain)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="google-my-business-api-googlelocations">googleLocations</h1>

## mybusiness.googleLocations.search

<a id="opIdmybusiness.googleLocations.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/googleLocations:search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "location": {
      "adWordsLocationExtensions": {
        "adPhone": "string"
      },
      "additionalCategories": [
        {
          "categoryId": "string",
          "displayName": "string",
          "serviceTypes": [
            {}
          ]
        }
      ],
      "additionalPhones": [
        "string"
      ],
      "address": {
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
      "attributes": [
        {
          "attributeId": "string",
          "repeatedEnumValue": {
            "setValues": [
              "string"
            ],
            "unsetValues": [
              "string"
            ]
          },
          "urlValues": [
            {
              "url": "string"
            }
          ],
          "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
          "values": [
            null
          ]
        }
      ],
      "labels": [
        "string"
      ],
      "languageCode": "string",
      "latlng": {
        "latitude": 0,
        "longitude": 0
      },
      "locationKey": {
        "explicitNoPlaceId": true,
        "placeId": "string",
        "plusPageId": "string",
        "requestId": "string"
      },
      "locationName": "string",
      "locationState": {
        "canDelete": true,
        "canUpdate": true,
        "hasPendingEdits": true,
        "hasPendingVerification": true,
        "isDisabled": true,
        "isDisconnected": true,
        "isDuplicate": true,
        "isGoogleUpdated": true,
        "isLocalPostApiDisabled": true,
        "isPendingReview": true,
        "isPublished": true,
        "isSuspended": true,
        "isVerified": true,
        "needsReverification": true
      },
      "metadata": {
        "duplicate": {
          "access": "ACCESS_UNSPECIFIED",
          "locationName": "string",
          "placeId": "string"
        },
        "mapsUrl": "string",
        "newReviewUrl": "string"
      },
      "moreHours": [
        {
          "hoursTypeId": "string",
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": "string",
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": "string"
            }
          ]
        }
      ],
      "name": "string",
      "openInfo": {
        "canReopen": true,
        "openingDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
      },
      "priceLists": [
        {
          "labels": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ],
          "priceListId": "string",
          "sections": [
            {
              "items": [
                {
                  "itemId": "string",
                  "labels": [
                    {
                      "description": "string",
                      "displayName": "string",
                      "languageCode": "string"
                    }
                  ],
                  "price": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  }
                }
              ],
              "labels": [
                {
                  "description": "string",
                  "displayName": "string",
                  "languageCode": "string"
                }
              ],
              "sectionId": "string",
              "sectionType": "SECTION_TYPE_UNSPECIFIED"
            }
          ],
          "sourceUrl": "string"
        }
      ],
      "primaryCategory": {
        "categoryId": "string",
        "displayName": "string",
        "serviceTypes": [
          {}
        ]
      },
      "primaryPhone": "string",
      "profile": {
        "description": "string"
      },
      "regularHours": {
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": "string",
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": "string"
          }
        ]
      },
      "relationshipData": {
        "parentChain": "string"
      },
      "serviceArea": {
        "businessType": "BUSINESS_TYPE_UNSPECIFIED",
        "places": {
          "placeInfos": [
            {
              "name": "string",
              "placeId": "string"
            }
          ]
        },
        "radius": {
          "latlng": {
            "latitude": 0,
            "longitude": 0
          },
          "radiusKm": 0
        }
      },
      "specialHours": {
        "specialHourPeriods": [
          {
            "closeTime": "string",
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "isClosed": true,
            "openTime": "string",
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            }
          }
        ]
      },
      "storeCode": "string",
      "websiteUrl": "string"
    },
    "query": "string",
    "resultCount": 0
  }'
```

`POST /v4/googleLocations:search`

Search all of the possible locations that are a match to the specified request.

> Body parameter

```json
{
  "location": {
    "adWordsLocationExtensions": {
      "adPhone": "string"
    },
    "additionalCategories": [
      {
        "categoryId": "string",
        "displayName": "string",
        "serviceTypes": [
          {}
        ]
      }
    ],
    "additionalPhones": [
      "string"
    ],
    "address": {
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
    "attributes": [
      {
        "attributeId": "string",
        "repeatedEnumValue": {
          "setValues": [
            "string"
          ],
          "unsetValues": [
            "string"
          ]
        },
        "urlValues": [
          {
            "url": "string"
          }
        ],
        "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
        "values": [
          null
        ]
      }
    ],
    "labels": [
      "string"
    ],
    "languageCode": "string",
    "latlng": {
      "latitude": 0,
      "longitude": 0
    },
    "locationKey": {
      "explicitNoPlaceId": true,
      "placeId": "string",
      "plusPageId": "string",
      "requestId": "string"
    },
    "locationName": "string",
    "locationState": {
      "canDelete": true,
      "canUpdate": true,
      "hasPendingEdits": true,
      "hasPendingVerification": true,
      "isDisabled": true,
      "isDisconnected": true,
      "isDuplicate": true,
      "isGoogleUpdated": true,
      "isLocalPostApiDisabled": true,
      "isPendingReview": true,
      "isPublished": true,
      "isSuspended": true,
      "isVerified": true,
      "needsReverification": true
    },
    "metadata": {
      "duplicate": {
        "access": "ACCESS_UNSPECIFIED",
        "locationName": "string",
        "placeId": "string"
      },
      "mapsUrl": "string",
      "newReviewUrl": "string"
    },
    "moreHours": [
      {
        "hoursTypeId": "string",
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": "string",
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": "string"
          }
        ]
      }
    ],
    "name": "string",
    "openInfo": {
      "canReopen": true,
      "openingDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
    },
    "priceLists": [
      {
        "labels": [
          {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        ],
        "priceListId": "string",
        "sections": [
          {
            "items": [
              {
                "itemId": "string",
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ],
                "price": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                }
              }
            ],
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ],
            "sectionId": "string",
            "sectionType": "SECTION_TYPE_UNSPECIFIED"
          }
        ],
        "sourceUrl": "string"
      }
    ],
    "primaryCategory": {
      "categoryId": "string",
      "displayName": "string",
      "serviceTypes": [
        {}
      ]
    },
    "primaryPhone": "string",
    "profile": {
      "description": "string"
    },
    "regularHours": {
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": "string",
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": "string"
        }
      ]
    },
    "relationshipData": {
      "parentChain": "string"
    },
    "serviceArea": {
      "businessType": "BUSINESS_TYPE_UNSPECIFIED",
      "places": {
        "placeInfos": [
          {
            "name": "string",
            "placeId": "string"
          }
        ]
      },
      "radius": {
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "radiusKm": 0
      }
    },
    "specialHours": {
      "specialHourPeriods": [
        {
          "closeTime": "string",
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "isClosed": true,
          "openTime": "string",
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "storeCode": "string",
    "websiteUrl": "string"
  },
  "query": "string",
  "resultCount": 0
}
```

<h3 id="mybusinessgooglelocationssearch-parameters">Parameters</h3>

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
|body|body|[SearchGoogleLocationsRequest](#schemasearchgooglelocationsrequest)|false|none|
|» location|body|[Location](#schemalocation)|false|Location to search for. If provided, will find locations which match the provided location details.|
|» query|body|string|false|Text query to search for. The search results from a query string will be less accurate than if providing an exact location, but can provide more inexact matches.|
|» resultCount|body|integer(int32)|false|The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination.|

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
  "googleLocations": [
    {
      "location": {
        "adWordsLocationExtensions": {
          "adPhone": "string"
        },
        "additionalCategories": [
          {
            "categoryId": "string",
            "displayName": "string",
            "moreHoursTypes": [
              {
                "displayName": "string",
                "hoursTypeId": "string",
                "localizedDisplayName": "string"
              }
            ],
            "serviceTypes": [
              {
                "displayName": "string",
                "serviceTypeId": "string"
              }
            ]
          }
        ],
        "additionalPhones": [
          "string"
        ],
        "address": {
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
        "attributes": [
          {
            "attributeId": "string",
            "repeatedEnumValue": {
              "setValues": [
                "string"
              ],
              "unsetValues": [
                "string"
              ]
            },
            "urlValues": [
              {
                "url": "string"
              }
            ],
            "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
            "values": [
              null
            ]
          }
        ],
        "labels": [
          "string"
        ],
        "languageCode": "string",
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "locationKey": {
          "explicitNoPlaceId": true,
          "placeId": "string",
          "plusPageId": "string",
          "requestId": "string"
        },
        "locationName": "string",
        "locationState": {
          "canDelete": true,
          "canHaveFoodMenus": true,
          "canModifyServiceList": true,
          "canOperateHealthData": true,
          "canOperateLodgingData": true,
          "canUpdate": true,
          "hasPendingEdits": true,
          "hasPendingVerification": true,
          "isDisabled": true,
          "isDisconnected": true,
          "isDuplicate": true,
          "isGoogleUpdated": true,
          "isLocalPostApiDisabled": true,
          "isPendingReview": true,
          "isPublished": true,
          "isSuspended": true,
          "isVerified": true,
          "needsReverification": true
        },
        "metadata": {
          "duplicate": {
            "access": "ACCESS_UNSPECIFIED",
            "locationName": "string",
            "placeId": "string"
          },
          "mapsUrl": "string",
          "newReviewUrl": "string"
        },
        "moreHours": [
          {
            "hoursTypeId": "string",
            "periods": [
              {
                "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
                "closeTime": "string",
                "openDay": "DAY_OF_WEEK_UNSPECIFIED",
                "openTime": "string"
              }
            ]
          }
        ],
        "name": "string",
        "openInfo": {
          "canReopen": true,
          "openingDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
        },
        "priceLists": [
          {
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ],
            "priceListId": "string",
            "sections": [
              {
                "items": [
                  {
                    "itemId": "string",
                    "labels": [
                      {
                        "description": "string",
                        "displayName": "string",
                        "languageCode": "string"
                      }
                    ],
                    "price": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    }
                  }
                ],
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ],
                "sectionId": "string",
                "sectionType": "SECTION_TYPE_UNSPECIFIED"
              }
            ],
            "sourceUrl": "string"
          }
        ],
        "primaryCategory": {
          "categoryId": "string",
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        },
        "primaryPhone": "string",
        "profile": {
          "description": "string"
        },
        "regularHours": {
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": "string",
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": "string"
            }
          ]
        },
        "relationshipData": {
          "parentChain": "string"
        },
        "serviceArea": {
          "businessType": "BUSINESS_TYPE_UNSPECIFIED",
          "places": {
            "placeInfos": [
              {
                "name": "string",
                "placeId": "string"
              }
            ]
          },
          "radius": {
            "latlng": {
              "latitude": 0,
              "longitude": 0
            },
            "radiusKm": 0
          }
        },
        "specialHours": {
          "specialHourPeriods": [
            {
              "closeTime": "string",
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "isClosed": true,
              "openTime": "string",
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              }
            }
          ]
        },
        "storeCode": "string",
        "websiteUrl": "string"
      },
      "name": "string",
      "requestAdminRightsUrl": "string"
    }
  ]
}
```

<h3 id="mybusinessgooglelocationssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchGoogleLocationsResponse](#schemasearchgooglelocationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusiness.googleLocations.report

<a id="opIdmybusiness.googleLocations.report"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/string:report \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "locationGroupName": "string",
    "reportReasonBadLocation": "BAD_LOCATION_REASON_UNSPECIFIED",
    "reportReasonBadRecommendation": "BAD_RECOMMENDATION_REASON_UNSPECIFIED",
    "reportReasonElaboration": "string",
    "reportReasonLanguageCode": "string"
  }'
```

`POST /v4/{name}:report`

Report a GoogleLocation.

> Body parameter

```json
{
  "locationGroupName": "string",
  "reportReasonBadLocation": "BAD_LOCATION_REASON_UNSPECIFIED",
  "reportReasonBadRecommendation": "BAD_RECOMMENDATION_REASON_UNSPECIFIED",
  "reportReasonElaboration": "string",
  "reportReasonLanguageCode": "string"
}
```

<h3 id="mybusinessgooglelocationsreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Resource name of a [GoogleLocation], in the format `googleLocations/{googleLocationId}`.|
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
|body|body|[ReportGoogleLocationRequest](#schemareportgooglelocationrequest)|false|none|
|» locationGroupName|body|string|false|Optional. The resource name of the location group that this Google Location is being reported for, in the format `accounts/{account_id}`.|
|» reportReasonBadLocation|body|string|false|The reason for which the user is reporting this location when the issue is with the location itself.|
|» reportReasonBadRecommendation|body|string|false|The reason for which the user is reporting this location when the issue is with the recommendation. This report is useful if the location has been recommended to the Business Profile account.|
|» reportReasonElaboration|body|string|false|Optional. A text entry for elaborating on the reason for which the user is reporting this location. The maximum length is 512 characters.|
|» reportReasonLanguageCode|body|string|false|Optional. The BCP 47 code of language used in `report_reason_elaboration`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» reportReasonBadLocation|BAD_LOCATION_REASON_UNSPECIFIED|
|» reportReasonBadLocation|NOT_A_LOCATION|
|» reportReasonBadLocation|PERMANENTLY_CLOSED|
|» reportReasonBadLocation|DOES_NOT_EXIST|
|» reportReasonBadLocation|SPAM|
|» reportReasonBadLocation|NOT_A_BUSINESS|
|» reportReasonBadLocation|MOVED|
|» reportReasonBadLocation|DUPLICATE|
|» reportReasonBadRecommendation|BAD_RECOMMENDATION_REASON_UNSPECIFIED|
|» reportReasonBadRecommendation|NOT_A_STORE_FRONT|
|» reportReasonBadRecommendation|NOT_PART_OF_SUGGESTED_CHAIN|
|» reportReasonBadRecommendation|IRRELEVANT|

> Example responses

> 200 Response

```json
{}
```

<h3 id="mybusinessgooglelocationsreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AcceptInvitationRequest">AcceptInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptinvitationrequest"></a>
<a id="schema_AcceptInvitationRequest"></a>
<a id="tocSacceptinvitationrequest"></a>
<a id="tocsacceptinvitationrequest"></a>

```json
{}
```

Request message for AccessControl.AcceptInvitation.

<h2 id="tocS_Accessibility">Accessibility</h2>
<!-- backwards compatibility -->
<a id="schemaaccessibility"></a>
<a id="schema_Accessibility"></a>
<a id="tocSaccessibility"></a>
<a id="tocsaccessibility"></a>

```json
{
  "mobilityAccessible": true,
  "mobilityAccessibleElevator": true,
  "mobilityAccessibleElevatorException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessibleException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessibleParking": true,
  "mobilityAccessibleParkingException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessiblePool": true,
  "mobilityAccessiblePoolException": "EXCEPTION_UNSPECIFIED"
}
```

Physical adaptations made to the property in consideration of varying levels of human physical ability.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mobilityAccessible|boolean|false|none|Mobility accessible. Throughout the property there are physical adaptations to ease the stay of a person in a wheelchair, such as auto-opening doors, wide elevators, wide bathrooms or ramps.|
|mobilityAccessibleElevator|boolean|false|none|Mobility accessible elevator. A lift that transports people from one level to another and is built to accommodate a wheelchair-using passenger owing to the width of its doors and placement of call buttons.|
|mobilityAccessibleElevatorException|string|false|none|Mobility accessible elevator exception.|
|mobilityAccessibleException|string|false|none|Mobility accessible exception.|
|mobilityAccessibleParking|boolean|false|none|Mobility accessible parking. The presence of a marked, designated area of prescribed size in which only registered, labeled vehicles transporting a person with physical challenges may park.|
|mobilityAccessibleParkingException|string|false|none|Mobility accessible parking exception.|
|mobilityAccessiblePool|boolean|false|none|Mobility accessible pool. A swimming pool equipped with a mechanical chair that can be lowered and raised for the purpose of moving physically challenged guests into and out of the pool. May be powered by electricity or water. Also known as pool lift.|
|mobilityAccessiblePoolException|string|false|none|Mobility accessible pool exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|mobilityAccessibleElevatorException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleElevatorException|UNDER_CONSTRUCTION|
|mobilityAccessibleElevatorException|DEPENDENT_ON_SEASON|
|mobilityAccessibleElevatorException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessibleException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleException|UNDER_CONSTRUCTION|
|mobilityAccessibleException|DEPENDENT_ON_SEASON|
|mobilityAccessibleException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessibleParkingException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleParkingException|UNDER_CONSTRUCTION|
|mobilityAccessibleParkingException|DEPENDENT_ON_SEASON|
|mobilityAccessibleParkingException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessiblePoolException|EXCEPTION_UNSPECIFIED|
|mobilityAccessiblePoolException|UNDER_CONSTRUCTION|
|mobilityAccessiblePoolException|DEPENDENT_ON_SEASON|
|mobilityAccessiblePoolException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "accountName": "string",
  "accountNumber": "string",
  "name": "string",
  "organizationInfo": {
    "phoneNumber": "string",
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
    "registeredDomain": "string"
  },
  "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
  "role": "ACCOUNT_ROLE_UNSPECIFIED",
  "state": {
    "status": "ACCOUNT_STATUS_UNSPECIFIED"
  },
  "type": "ACCOUNT_TYPE_UNSPECIFIED"
}
```

An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|The name of the account. *Note:* For an account with AccountType `PERSONAL`, this is the first and last name of the user account.|
|accountNumber|string|false|none|Account reference number if provisioned.|
|name|string|false|none|The resource name, in the format `accounts/{account_id}`.|
|organizationInfo|[OrganizationInfo](#schemaorganizationinfo)|false|none|Additional info for an organization. This is populated only for an organization account.|
|permissionLevel|string|false|none|Output only. Specifies the PermissionLevel the caller has for this account.|
|role|string|false|none|Output only. Specifies the AccountRole the caller has for this account.|
|state|[AccountState](#schemaaccountstate)|false|none|Output only. Indicates the AccountState of this account.|
|type|string|false|none|Output only. Specifies the AccountType of this account.|

#### Enumerated Values

|Property|Value|
|---|---|
|permissionLevel|PERMISSION_LEVEL_UNSPECIFIED|
|permissionLevel|OWNER_LEVEL|
|permissionLevel|MEMBER_LEVEL|
|role|ACCOUNT_ROLE_UNSPECIFIED|
|role|OWNER|
|role|CO_OWNER|
|role|MANAGER|
|role|COMMUNITY_MANAGER|
|type|ACCOUNT_TYPE_UNSPECIFIED|
|type|PERSONAL|
|type|LOCATION_GROUP|
|type|USER_GROUP|
|type|ORGANIZATION|

<h2 id="tocS_AccountState">AccountState</h2>
<!-- backwards compatibility -->
<a id="schemaaccountstate"></a>
<a id="schema_AccountState"></a>
<a id="tocSaccountstate"></a>
<a id="tocsaccountstate"></a>

```json
{
  "status": "ACCOUNT_STATUS_UNSPECIFIED"
}
```

Indicates status of the account, such as whether the account has been verified by Google.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACCOUNT_STATUS_UNSPECIFIED|
|status|VERIFIED|
|status|UNVERIFIED|
|status|VERIFICATION_REQUESTED|

<h2 id="tocS_Activities">Activities</h2>
<!-- backwards compatibility -->
<a id="schemaactivities"></a>
<a id="schema_Activities"></a>
<a id="tocSactivities"></a>
<a id="tocsactivities"></a>

```json
{
  "beachAccess": true,
  "beachAccessException": "EXCEPTION_UNSPECIFIED",
  "beachFront": true,
  "beachFrontException": "EXCEPTION_UNSPECIFIED",
  "bicycleRental": true,
  "bicycleRentalException": "EXCEPTION_UNSPECIFIED",
  "boutiqueStores": true,
  "boutiqueStoresException": "EXCEPTION_UNSPECIFIED",
  "casino": true,
  "casinoException": "EXCEPTION_UNSPECIFIED",
  "freeBicycleRental": true,
  "freeBicycleRentalException": "EXCEPTION_UNSPECIFIED",
  "freeWatercraftRental": true,
  "freeWatercraftRentalException": "EXCEPTION_UNSPECIFIED",
  "gameRoom": true,
  "gameRoomException": "EXCEPTION_UNSPECIFIED",
  "golf": true,
  "golfException": "EXCEPTION_UNSPECIFIED",
  "horsebackRiding": true,
  "horsebackRidingException": "EXCEPTION_UNSPECIFIED",
  "nightclub": true,
  "nightclubException": "EXCEPTION_UNSPECIFIED",
  "privateBeach": true,
  "privateBeachException": "EXCEPTION_UNSPECIFIED",
  "scuba": true,
  "scubaException": "EXCEPTION_UNSPECIFIED",
  "snorkeling": true,
  "snorkelingException": "EXCEPTION_UNSPECIFIED",
  "tennis": true,
  "tennisException": "EXCEPTION_UNSPECIFIED",
  "waterSkiing": true,
  "waterSkiingException": "EXCEPTION_UNSPECIFIED",
  "watercraftRental": true,
  "watercraftRentalException": "EXCEPTION_UNSPECIFIED"
}
```

Amenities and features related to leisure and play.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beachAccess|boolean|false|none|Beach access. The hotel property is in close proximity to a beach and offers a way to get to that beach. This can include a route to the beach such as stairs down if hotel is on a bluff, or a short trail. Not the same as beachfront (with beach access, the hotel's proximity is close to but not right on the beach).|
|beachAccessException|string|false|none|Beach access exception.|
|beachFront|boolean|false|none|Breach front. The hotel property is physically located on the beach alongside an ocean, sea, gulf, or bay. It is not on a lake, river, stream, or pond. The hotel is not separated from the beach by a public road allowing vehicular, pedestrian, or bicycle traffic.|
|beachFrontException|string|false|none|Beach front exception.|
|bicycleRental|boolean|false|none|Bicycle rental. The hotel owns bicycles that it permits guests to borrow and use. Can be free or for a fee.|
|bicycleRentalException|string|false|none|Bicycle rental exception.|
|boutiqueStores|boolean|false|none|Boutique stores. There are stores selling clothing, jewelry, art and decor either on hotel premises or very close by. Does not refer to the hotel gift shop or convenience store.|
|boutiqueStoresException|string|false|none|Boutique stores exception.|
|casino|boolean|false|none|Casino. A space designated for gambling and gaming featuring croupier-run table and card games, as well as electronic slot machines. May be on hotel premises or located nearby.|
|casinoException|string|false|none|Casino exception.|
|freeBicycleRental|boolean|false|none|Free bicycle rental. The hotel owns bicycles that it permits guests to borrow and use for free.|
|freeBicycleRentalException|string|false|none|Free bicycle rental exception.|
|freeWatercraftRental|boolean|false|none|Free watercraft rental. The hotel owns watercraft that it permits guests to borrow and use for free.|
|freeWatercraftRentalException|string|false|none|Free Watercraft rental exception.|
|gameRoom|boolean|false|none|Game room. There is a room at the hotel containing electronic machines for play such as pinball, prize machines, driving simulators, and other items commonly found at a family fun center or arcade. May also include non-electronic games like pool, foosball, darts, and more. May or may not be designed for children. Also known as arcade, fun room, or family fun center.|
|gameRoomException|string|false|none|Game room exception.|
|golf|boolean|false|none|Golf. There is a golf course on hotel grounds or there is a nearby, independently run golf course that allows use by hotel guests. Can be free or for a fee.|
|golfException|string|false|none|Golf exception.|
|horsebackRiding|boolean|false|none|Horseback riding. The hotel has a horse barn onsite or an affiliation with a nearby barn to allow for guests to sit astride a horse and direct it to walk, trot, cantor, gallop and/or jump. Can be in a riding ring, on designated paths, or in the wilderness. May or may not involve instruction.|
|horsebackRidingException|string|false|none|Horseback riding exception.|
|nightclub|boolean|false|none|Nightclub. There is a room at the hotel with a bar, a dance floor, and seating where designated staffers play dance music. There may also be a designated area for the performance of live music, singing and comedy acts.|
|nightclubException|string|false|none|Nightclub exception.|
|privateBeach|boolean|false|none|Private beach. The beach which is in close proximity to the hotel is open only to guests.|
|privateBeachException|string|false|none|Private beach exception.|
|scuba|boolean|false|none|Scuba. The provision for guests to dive under naturally occurring water fitted with a self-contained underwater breathing apparatus (SCUBA) for the purpose of exploring underwater life. Apparatus consists of a tank providing oxygen to the diver through a mask. Requires certification of the diver and supervision. The hotel may have the activity at its own waterfront or have an affiliation with a nearby facility. Required equipment is most often supplied to guests. Can be free or for a fee. Not snorkeling. Not done in a swimming pool.|
|scubaException|string|false|none|Scuba exception.|
|snorkeling|boolean|false|none|Snorkeling. The provision for guests to participate in a recreational water activity in which swimmers wear a diving mask, a simple, shaped breathing tube and flippers/swim fins for the purpose of exploring below the surface of an ocean, gulf or lake. Does not usually require user certification or professional supervision. Equipment may or may not be available for rent or purchase. Not scuba diving.|
|snorkelingException|string|false|none|Snorkeling exception.|
|tennis|boolean|false|none|Tennis. The hotel has the requisite court(s) on site or has an affiliation with a nearby facility for the purpose of providing guests with the opportunity to play a two-sided court-based game in which players use a stringed racquet to hit a ball across a net to the side of the opposing player. The court can be indoors or outdoors. Instructors, racquets and balls may or may not be provided.|
|tennisException|string|false|none|Tennis exception.|
|waterSkiing|boolean|false|none|Water skiing. The provision of giving guests the opportunity to be pulled across naturally occurring water while standing on skis and holding a tow rope attached to a motorboat. Can occur on hotel premises or at a nearby waterfront. Most often performed in a lake or ocean.|
|waterSkiingException|string|false|none|Water skiing exception.|
|watercraftRental|boolean|false|none|Watercraft rental. The hotel owns water vessels that it permits guests to borrow and use. Can be free or for a fee. Watercraft may include boats, pedal boats, rowboats, sailboats, powerboats, canoes, kayaks, or personal watercraft (such as a Jet Ski).|
|watercraftRentalException|string|false|none|Watercraft rental exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|beachAccessException|EXCEPTION_UNSPECIFIED|
|beachAccessException|UNDER_CONSTRUCTION|
|beachAccessException|DEPENDENT_ON_SEASON|
|beachAccessException|DEPENDENT_ON_DAY_OF_WEEK|
|beachFrontException|EXCEPTION_UNSPECIFIED|
|beachFrontException|UNDER_CONSTRUCTION|
|beachFrontException|DEPENDENT_ON_SEASON|
|beachFrontException|DEPENDENT_ON_DAY_OF_WEEK|
|bicycleRentalException|EXCEPTION_UNSPECIFIED|
|bicycleRentalException|UNDER_CONSTRUCTION|
|bicycleRentalException|DEPENDENT_ON_SEASON|
|bicycleRentalException|DEPENDENT_ON_DAY_OF_WEEK|
|boutiqueStoresException|EXCEPTION_UNSPECIFIED|
|boutiqueStoresException|UNDER_CONSTRUCTION|
|boutiqueStoresException|DEPENDENT_ON_SEASON|
|boutiqueStoresException|DEPENDENT_ON_DAY_OF_WEEK|
|casinoException|EXCEPTION_UNSPECIFIED|
|casinoException|UNDER_CONSTRUCTION|
|casinoException|DEPENDENT_ON_SEASON|
|casinoException|DEPENDENT_ON_DAY_OF_WEEK|
|freeBicycleRentalException|EXCEPTION_UNSPECIFIED|
|freeBicycleRentalException|UNDER_CONSTRUCTION|
|freeBicycleRentalException|DEPENDENT_ON_SEASON|
|freeBicycleRentalException|DEPENDENT_ON_DAY_OF_WEEK|
|freeWatercraftRentalException|EXCEPTION_UNSPECIFIED|
|freeWatercraftRentalException|UNDER_CONSTRUCTION|
|freeWatercraftRentalException|DEPENDENT_ON_SEASON|
|freeWatercraftRentalException|DEPENDENT_ON_DAY_OF_WEEK|
|gameRoomException|EXCEPTION_UNSPECIFIED|
|gameRoomException|UNDER_CONSTRUCTION|
|gameRoomException|DEPENDENT_ON_SEASON|
|gameRoomException|DEPENDENT_ON_DAY_OF_WEEK|
|golfException|EXCEPTION_UNSPECIFIED|
|golfException|UNDER_CONSTRUCTION|
|golfException|DEPENDENT_ON_SEASON|
|golfException|DEPENDENT_ON_DAY_OF_WEEK|
|horsebackRidingException|EXCEPTION_UNSPECIFIED|
|horsebackRidingException|UNDER_CONSTRUCTION|
|horsebackRidingException|DEPENDENT_ON_SEASON|
|horsebackRidingException|DEPENDENT_ON_DAY_OF_WEEK|
|nightclubException|EXCEPTION_UNSPECIFIED|
|nightclubException|UNDER_CONSTRUCTION|
|nightclubException|DEPENDENT_ON_SEASON|
|nightclubException|DEPENDENT_ON_DAY_OF_WEEK|
|privateBeachException|EXCEPTION_UNSPECIFIED|
|privateBeachException|UNDER_CONSTRUCTION|
|privateBeachException|DEPENDENT_ON_SEASON|
|privateBeachException|DEPENDENT_ON_DAY_OF_WEEK|
|scubaException|EXCEPTION_UNSPECIFIED|
|scubaException|UNDER_CONSTRUCTION|
|scubaException|DEPENDENT_ON_SEASON|
|scubaException|DEPENDENT_ON_DAY_OF_WEEK|
|snorkelingException|EXCEPTION_UNSPECIFIED|
|snorkelingException|UNDER_CONSTRUCTION|
|snorkelingException|DEPENDENT_ON_SEASON|
|snorkelingException|DEPENDENT_ON_DAY_OF_WEEK|
|tennisException|EXCEPTION_UNSPECIFIED|
|tennisException|UNDER_CONSTRUCTION|
|tennisException|DEPENDENT_ON_SEASON|
|tennisException|DEPENDENT_ON_DAY_OF_WEEK|
|waterSkiingException|EXCEPTION_UNSPECIFIED|
|waterSkiingException|UNDER_CONSTRUCTION|
|waterSkiingException|DEPENDENT_ON_SEASON|
|waterSkiingException|DEPENDENT_ON_DAY_OF_WEEK|
|watercraftRentalException|EXCEPTION_UNSPECIFIED|
|watercraftRentalException|UNDER_CONSTRUCTION|
|watercraftRentalException|DEPENDENT_ON_SEASON|
|watercraftRentalException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_AdWordsLocationExtensions">AdWordsLocationExtensions</h2>
<!-- backwards compatibility -->
<a id="schemaadwordslocationextensions"></a>
<a id="schema_AdWordsLocationExtensions"></a>
<a id="tocSadwordslocationextensions"></a>
<a id="tocsadwordslocationextensions"></a>

```json
{
  "adPhone": "string"
}
```

Additional information that is surfaced in AdWords.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adPhone|string|false|none|An alternate phone number to display on AdWords location extensions instead of the location's primary phone number.|

<h2 id="tocS_AddressInput">AddressInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddressinput"></a>
<a id="schema_AddressInput"></a>
<a id="tocSaddressinput"></a>
<a id="tocsaddressinput"></a>

```json
{
  "mailerContactName": "string"
}
```

Input for ADDRESS verification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mailerContactName|string|false|none|Contact name the mail should be sent to.|

<h2 id="tocS_AddressVerificationData">AddressVerificationData</h2>
<!-- backwards compatibility -->
<a id="schemaaddressverificationdata"></a>
<a id="schema_AddressVerificationData"></a>
<a id="tocSaddressverificationdata"></a>
<a id="tocsaddressverificationdata"></a>

```json
{
  "address": {
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
  "businessName": "string"
}
```

Display data for verifications through postcard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[PostalAddress](#schemapostaladdress)|false|none|Address that a postcard can be sent to.|
|businessName|string|false|none|Merchant's business name.|

<h2 id="tocS_Admin">Admin</h2>
<!-- backwards compatibility -->
<a id="schemaadmin"></a>
<a id="schema_Admin"></a>
<a id="tocSadmin"></a>
<a id="tocsadmin"></a>

```json
{
  "adminName": "string",
  "name": "string",
  "pendingInvitation": true,
  "role": "ADMIN_ROLE_UNSPECIFIED"
}
```

An administrator of an Account or a Location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminName|string|false|none|The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names.|
|name|string|false|none|The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `accounts/{account_id}/locations/{location_id}/admins/{admin_id}`|
|pendingInvitation|boolean|false|none|Output only. Indicates whether this admin has a pending invitation for the specified resource.|
|role|string|false|none|Specifies the AdminRole that this admin uses with the specified Account or Location resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|ADMIN_ROLE_UNSPECIFIED|
|role|OWNER|
|role|CO_OWNER|
|role|MANAGER|
|role|COMMUNITY_MANAGER|

<h2 id="tocS_Answer">Answer</h2>
<!-- backwards compatibility -->
<a id="schemaanswer"></a>
<a id="schema_Answer"></a>
<a id="tocSanswer"></a>
<a id="tocsanswer"></a>

```json
{
  "author": {
    "displayName": "string",
    "profilePhotoUrl": "string",
    "type": "AUTHOR_TYPE_UNSPECIFIED"
  },
  "createTime": "string",
  "name": "string",
  "text": "string",
  "updateTime": "string",
  "upvoteCount": 0
}
```

Represents an answer to a question

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|[Author](#schemaauthor)|false|none|Output only. The author of the answer.|
|createTime|string(google-datetime)|false|none|Output only. The timestamp for when the answer was written.|
|name|string|false|none|Output only. The unique name for the answer accounts/*/locations/*/questions/*/answers/*|
|text|string|false|none|The text of the answer. It should contain at least one non-whitespace character. The maximum length is 4096 characters.|
|updateTime|string(google-datetime)|false|none|Output only. The timestamp for when the answer was last modified.|
|upvoteCount|integer(int32)|false|none|Output only. The number of upvotes for the answer.|

<h2 id="tocS_AssociateLocationRequest">AssociateLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatelocationrequest"></a>
<a id="schema_AssociateLocationRequest"></a>
<a id="tocSassociatelocationrequest"></a>
<a id="tocsassociatelocationrequest"></a>

```json
{
  "placeId": "string"
}
```

Request message for Locations.AssociateLocationRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placeId|string|false|none|The association to establish. If not set, it indicates no match.|

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "attributeId": "string",
  "repeatedEnumValue": {
    "setValues": [
      "string"
    ],
    "unsetValues": [
      "string"
    ]
  },
  "urlValues": [
    {
      "url": "string"
    }
  ],
  "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
  "values": [
    null
  ]
}
```

A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeId|string|false|none|The ID of the attribute. Attribute IDs are provided by Google.|
|repeatedEnumValue|[RepeatedEnumAttributeValue](#schemarepeatedenumattributevalue)|false|none|When the attribute value type is REPEATED_ENUM, this contains the attribute value, and the other values fields must be empty.|
|urlValues|[[UrlAttributeValue](#schemaurlattributevalue)]|false|none|When the attribute value type is URL, this field contains the value(s) for this attribute, and the other values fields must be empty.|
|valueType|string|false|none|Output only. The type of value that this attribute contains. This should be used to determine how to interpret the value.|
|values|[object]|false|none|The values for this attribute. The type of the values supplied must match that expected for that attribute; see [AttributeValueType](/my-business/reference/rest/v4/AttributeValueType). This is a repeated field where multiple attribute values may be provided. Attribute types only support one value.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|ATTRIBUTE_VALUE_TYPE_UNSPECIFIED|
|valueType|BOOL|
|valueType|ENUM|
|valueType|URL|
|valueType|REPEATED_ENUM|

<h2 id="tocS_AttributeMetadata">AttributeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaattributemetadata"></a>
<a id="schema_AttributeMetadata"></a>
<a id="tocSattributemetadata"></a>
<a id="tocsattributemetadata"></a>

```json
{
  "attributeId": "string",
  "displayName": "string",
  "groupDisplayName": "string",
  "isDeprecated": true,
  "isRepeatable": true,
  "valueMetadata": [
    {
      "displayName": "string",
      "value": null
    }
  ],
  "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
}
```

Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeId|string|false|none|The ID of the attribute.|
|displayName|string|false|none|The localized display name for the attribute, if available; otherwise, the English display name.|
|groupDisplayName|string|false|none|The localized display name of the group that contains this attribute, if available; otherwise, the English group name. Related attributes are collected into a group and should be displayed together under the heading given here.|
|isDeprecated|boolean|false|none|If true, the attribute is deprecated and should no longer be used. If deprecated, updating this attribute will not result in an error, but updates will not be saved. At some point after being deprecated, the attribute will be removed entirely and it will become an error.|
|isRepeatable|boolean|false|none|If true, the attribute supports multiple values. If false, only a single value should be provided.|
|valueMetadata|[[AttributeValueMetadata](#schemaattributevaluemetadata)]|false|none|For some types of attributes (for example, enums), a list of supported values and corresponding display names for those values is provided.|
|valueType|string|false|none|The value type for the attribute. Values set and retrieved should be expected to be of this type.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|ATTRIBUTE_VALUE_TYPE_UNSPECIFIED|
|valueType|BOOL|
|valueType|ENUM|
|valueType|URL|
|valueType|REPEATED_ENUM|

<h2 id="tocS_AttributeValueMetadata">AttributeValueMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaattributevaluemetadata"></a>
<a id="schema_AttributeValueMetadata"></a>
<a id="tocSattributevaluemetadata"></a>
<a id="tocsattributevaluemetadata"></a>

```json
{
  "displayName": "string",
  "value": null
}
```

Metadata for supported attribute values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name for this value, localized where available; otherwise, in English. The value display name is intended to be used in context with the attribute display name. For example, for a "WiFi" enum attribute, this could contain "Paid" to represent paid Wi-Fi.|
|value|object|false|none|The attribute value.|

<h2 id="tocS_Attribution">Attribution</h2>
<!-- backwards compatibility -->
<a id="schemaattribution"></a>
<a id="schema_Attribution"></a>
<a id="tocSattribution"></a>
<a id="tocsattribution"></a>

```json
{
  "profileName": "string",
  "profilePhotoUrl": "string",
  "profileUrl": "string",
  "takedownUrl": "string"
}
```

Attribution information for customer media items, such as the contributor's name and profile picture.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileName|string|false|none|The user name to attribute the media item to.|
|profilePhotoUrl|string|false|none|URL of the attributed user's profile photo thumbnail.|
|profileUrl|string|false|none|The URL of the attributed user's Google Maps profile page.|
|takedownUrl|string|false|none|The URL of the takedown page, where the media item can be reported if it is inappropriate.|

<h2 id="tocS_Author">Author</h2>
<!-- backwards compatibility -->
<a id="schemaauthor"></a>
<a id="schema_Author"></a>
<a id="tocSauthor"></a>
<a id="tocsauthor"></a>

```json
{
  "displayName": "string",
  "profilePhotoUrl": "string",
  "type": "AUTHOR_TYPE_UNSPECIFIED"
}
```

Represents the author of a question or answer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name of the user|
|profilePhotoUrl|string|false|none|The profile photo URL of the user.|
|type|string|false|none|The type of user the author is.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|AUTHOR_TYPE_UNSPECIFIED|
|type|REGULAR_USER|
|type|LOCAL_GUIDE|
|type|MERCHANT|

<h2 id="tocS_BasicMetricsRequest">BasicMetricsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabasicmetricsrequest"></a>
<a id="schema_BasicMetricsRequest"></a>
<a id="tocSbasicmetricsrequest"></a>
<a id="tocsbasicmetricsrequest"></a>

```json
{
  "metricRequests": [
    {
      "metric": "METRIC_UNSPECIFIED",
      "options": [
        "METRIC_OPTION_UNSPECIFIED"
      ]
    }
  ],
  "timeRange": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

A request for basic metric insights.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricRequests|[[MetricRequest](#schemametricrequest)]|false|none|A collection of metrics to return values for including the options for how the data should be returned.|
|timeRange|[TimeRange](#schematimerange)|false|none|The range to gather metrics for. The maximum range is 18 months from the request date. In some cases, the data may still be missing for days close to the request date. Missing data will be specified in the `metricValues` in the response.|

<h2 id="tocS_BatchGetBusinessCategoriesResponse">BatchGetBusinessCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetbusinesscategoriesresponse"></a>
<a id="schema_BatchGetBusinessCategoriesResponse"></a>
<a id="tocSbatchgetbusinesscategoriesresponse"></a>
<a id="tocsbatchgetbusinesscategoriesresponse"></a>

```json
{
  "categories": [
    {
      "categoryId": "string",
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  ]
}
```

Response message for BusinessCategories.BatchGetBusinessCategories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[Category](#schemacategory)]|false|none|Categories that match the GConcept ids provided in the request. They will not come in the same order as category ids in the request.|

<h2 id="tocS_BatchGetLocationsRequest">BatchGetLocationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetlocationsrequest"></a>
<a id="schema_BatchGetLocationsRequest"></a>
<a id="tocSbatchgetlocationsrequest"></a>
<a id="tocsbatchgetlocationsrequest"></a>

```json
{
  "locationNames": [
    "string"
  ]
}
```

Request message for Locations.BatchGetLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationNames|[string]|false|none|A collection of locations to fetch, specified by their names.|

<h2 id="tocS_BatchGetLocationsResponse">BatchGetLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetlocationsresponse"></a>
<a id="schema_BatchGetLocationsResponse"></a>
<a id="tocSbatchgetlocationsresponse"></a>
<a id="tocsbatchgetlocationsresponse"></a>

```json
{
  "locations": [
    {
      "adWordsLocationExtensions": {
        "adPhone": "string"
      },
      "additionalCategories": [
        {
          "categoryId": "string",
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        }
      ],
      "additionalPhones": [
        "string"
      ],
      "address": {
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
      "attributes": [
        {
          "attributeId": "string",
          "repeatedEnumValue": {
            "setValues": [
              "string"
            ],
            "unsetValues": [
              "string"
            ]
          },
          "urlValues": [
            {
              "url": "string"
            }
          ],
          "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
          "values": [
            null
          ]
        }
      ],
      "labels": [
        "string"
      ],
      "languageCode": "string",
      "latlng": {
        "latitude": 0,
        "longitude": 0
      },
      "locationKey": {
        "explicitNoPlaceId": true,
        "placeId": "string",
        "plusPageId": "string",
        "requestId": "string"
      },
      "locationName": "string",
      "locationState": {
        "canDelete": true,
        "canHaveFoodMenus": true,
        "canModifyServiceList": true,
        "canOperateHealthData": true,
        "canOperateLodgingData": true,
        "canUpdate": true,
        "hasPendingEdits": true,
        "hasPendingVerification": true,
        "isDisabled": true,
        "isDisconnected": true,
        "isDuplicate": true,
        "isGoogleUpdated": true,
        "isLocalPostApiDisabled": true,
        "isPendingReview": true,
        "isPublished": true,
        "isSuspended": true,
        "isVerified": true,
        "needsReverification": true
      },
      "metadata": {
        "duplicate": {
          "access": "ACCESS_UNSPECIFIED",
          "locationName": "string",
          "placeId": "string"
        },
        "mapsUrl": "string",
        "newReviewUrl": "string"
      },
      "moreHours": [
        {
          "hoursTypeId": "string",
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": "string",
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": "string"
            }
          ]
        }
      ],
      "name": "string",
      "openInfo": {
        "canReopen": true,
        "openingDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
      },
      "priceLists": [
        {
          "labels": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ],
          "priceListId": "string",
          "sections": [
            {
              "items": [
                {
                  "itemId": "string",
                  "labels": [
                    {
                      "description": "string",
                      "displayName": "string",
                      "languageCode": "string"
                    }
                  ],
                  "price": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  }
                }
              ],
              "labels": [
                {
                  "description": "string",
                  "displayName": "string",
                  "languageCode": "string"
                }
              ],
              "sectionId": "string",
              "sectionType": "SECTION_TYPE_UNSPECIFIED"
            }
          ],
          "sourceUrl": "string"
        }
      ],
      "primaryCategory": {
        "categoryId": "string",
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      },
      "primaryPhone": "string",
      "profile": {
        "description": "string"
      },
      "regularHours": {
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": "string",
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": "string"
          }
        ]
      },
      "relationshipData": {
        "parentChain": "string"
      },
      "serviceArea": {
        "businessType": "BUSINESS_TYPE_UNSPECIFIED",
        "places": {
          "placeInfos": [
            {
              "name": "string",
              "placeId": "string"
            }
          ]
        },
        "radius": {
          "latlng": {
            "latitude": 0,
            "longitude": 0
          },
          "radiusKm": 0
        }
      },
      "specialHours": {
        "specialHourPeriods": [
          {
            "closeTime": "string",
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "isClosed": true,
            "openTime": "string",
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            }
          }
        ]
      },
      "storeCode": "string",
      "websiteUrl": "string"
    }
  ]
}
```

Response message for Locations.BatchGetLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|A collection of locations.|

<h2 id="tocS_BatchGetReviewsRequest">BatchGetReviewsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetreviewsrequest"></a>
<a id="schema_BatchGetReviewsRequest"></a>
<a id="tocSbatchgetreviewsrequest"></a>
<a id="tocsbatchgetreviewsrequest"></a>

```json
{
  "ignoreRatingOnlyReviews": true,
  "locationNames": [
    "string"
  ],
  "orderBy": "string",
  "pageSize": 0,
  "pageToken": "string"
}
```

Request message for Reviews.BatchGetReviews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignoreRatingOnlyReviews|boolean|false|none|Whether to ignore rating-only reviews.|
|locationNames|[string]|false|none|A collection of locations to fetch reviews for, specified by their names.|
|orderBy|string|false|none|Optional. Specifies the field to sort reviews by. If unspecified, the order of reviews returned will default to `update_time desc`. Valid orders to sort by are `rating`, `rating desc` and `update_time desc`. `rating` will return reviews in ascending order. `update_time`(i.e. ascending order) is not supported.|
|pageSize|integer(int32)|false|none|How many reviews to fetch per page. The default value is 200.|
|pageToken|string|false|none|If specified, it fetches the next page of reviews.|

<h2 id="tocS_BatchGetReviewsResponse">BatchGetReviewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetreviewsresponse"></a>
<a id="schema_BatchGetReviewsResponse"></a>
<a id="tocSbatchgetreviewsresponse"></a>
<a id="tocsbatchgetreviewsresponse"></a>

```json
{
  "locationReviews": [
    {
      "name": "string",
      "review": {
        "comment": "string",
        "createTime": "string",
        "name": "string",
        "reviewId": "string",
        "reviewReply": {
          "comment": "string",
          "updateTime": "string"
        },
        "reviewer": {
          "displayName": "string",
          "isAnonymous": true,
          "profilePhotoUrl": "string"
        },
        "starRating": "STAR_RATING_UNSPECIFIED",
        "updateTime": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for Reviews.BatchGetReviews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationReviews|[[LocationReview](#schemalocationreview)]|false|none|Reviews with location information.|
|nextPageToken|string|false|none|If the number of reviews exceeded the requested page size, this field is populated with a token to fetch the next page of reviews on a subsequent calls. If there are no more reviews, this field will not be present in the response.|

<h2 id="tocS_Business">Business</h2>
<!-- backwards compatibility -->
<a id="schemabusiness"></a>
<a id="schema_Business"></a>
<a id="tocSbusiness"></a>
<a id="tocsbusiness"></a>

```json
{
  "businessCenter": true,
  "businessCenterException": "EXCEPTION_UNSPECIFIED",
  "meetingRooms": true,
  "meetingRoomsCount": 0,
  "meetingRoomsCountException": "EXCEPTION_UNSPECIFIED",
  "meetingRoomsException": "EXCEPTION_UNSPECIFIED"
}
```

Features of the property of specific interest to the business traveler.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessCenter|boolean|false|none|Business center. A designated room at the hotel with one or more desks and equipped with guest-use computers, printers, fax machines and/or photocopiers. May or may not be open 24/7. May or may not require a key to access. Not a meeting room or conference room.|
|businessCenterException|string|false|none|Business center exception.|
|meetingRooms|boolean|false|none|Meeting rooms. Rooms at the hotel designated for business-related gatherings. Rooms are usually equipped with tables or desks, office chairs and audio/visual facilities to allow for presentations and conference calls. Also known as conference rooms.|
|meetingRoomsCount|integer(int32)|false|none|Meeting rooms count. The number of meeting rooms at the property.|
|meetingRoomsCountException|string|false|none|Meeting rooms count exception.|
|meetingRoomsException|string|false|none|Meeting rooms exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|businessCenterException|EXCEPTION_UNSPECIFIED|
|businessCenterException|UNDER_CONSTRUCTION|
|businessCenterException|DEPENDENT_ON_SEASON|
|businessCenterException|DEPENDENT_ON_DAY_OF_WEEK|
|meetingRoomsCountException|EXCEPTION_UNSPECIFIED|
|meetingRoomsCountException|UNDER_CONSTRUCTION|
|meetingRoomsCountException|DEPENDENT_ON_SEASON|
|meetingRoomsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|meetingRoomsException|EXCEPTION_UNSPECIFIED|
|meetingRoomsException|UNDER_CONSTRUCTION|
|meetingRoomsException|DEPENDENT_ON_SEASON|
|meetingRoomsException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_BusinessHours">BusinessHours</h2>
<!-- backwards compatibility -->
<a id="schemabusinesshours"></a>
<a id="schema_BusinessHours"></a>
<a id="tocSbusinesshours"></a>
<a id="tocsbusinesshours"></a>

```json
{
  "periods": [
    {
      "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
      "closeTime": "string",
      "openDay": "DAY_OF_WEEK_UNSPECIFIED",
      "openTime": "string"
    }
  ]
}
```

Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|periods|[[TimePeriod](#schematimeperiod)]|false|none|A collection of times that this location is open for business. Each period represents a range of hours when the location is open during the week.|

<h2 id="tocS_CallToAction">CallToAction</h2>
<!-- backwards compatibility -->
<a id="schemacalltoaction"></a>
<a id="schema_CallToAction"></a>
<a id="tocScalltoaction"></a>
<a id="tocscalltoaction"></a>

```json
{
  "actionType": "ACTION_TYPE_UNSPECIFIED",
  "url": "string"
}
```

An action that is performed when the user clicks through the post

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionType|string|false|none|The type of action that will be performed.|
|url|string|false|none|The URL the user will be directed to upon clicking. This field should be left unset for Call CTA.|

#### Enumerated Values

|Property|Value|
|---|---|
|actionType|ACTION_TYPE_UNSPECIFIED|
|actionType|BOOK|
|actionType|ORDER|
|actionType|SHOP|
|actionType|LEARN_MORE|
|actionType|SIGN_UP|
|actionType|GET_OFFER|
|actionType|CALL|

<h2 id="tocS_CaloriesFact">CaloriesFact</h2>
<!-- backwards compatibility -->
<a id="schemacaloriesfact"></a>
<a id="schema_CaloriesFact"></a>
<a id="tocScaloriesfact"></a>
<a id="tocscaloriesfact"></a>

```json
{
  "lowerAmount": 0,
  "unit": "ENERGY_UNIT_UNSPECIFIED",
  "upperAmount": 0
}
```

This message denotes calories information with an upper bound and lower bound range. Lower amount must be specified. Both lower and upper amounts are non-negative numbers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lowerAmount|integer(int32)|false|none|Required. Lower amount of calories|
|unit|string|false|none|Required. Unit of the given calories information.|
|upperAmount|integer(int32)|false|none|Optional. Upper amount of calories|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|ENERGY_UNIT_UNSPECIFIED|
|unit|CALORIE|
|unit|JOULE|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "categoryId": "string",
  "displayName": "string",
  "moreHoursTypes": [
    {
      "displayName": "string",
      "hoursTypeId": "string",
      "localizedDisplayName": "string"
    }
  ],
  "serviceTypes": [
    {
      "displayName": "string",
      "serviceTypeId": "string"
    }
  ]
}
```

A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|string|false|none|@OutputOnly. A stable ID (provided by Google) for this category. The `category_id` must be specified when modifying the category (when creating or updating a location).|
|displayName|string|false|none|@OutputOnly. The human-readable name of the category. This is set when reading the location. When modifying the location, `category_id` must be set.|
|moreHoursTypes|[[MoreHoursType](#schemamorehourstype)]|false|read-only|Output only. More hours types that are available for this business category.|
|serviceTypes|[[ServiceType](#schemaservicetype)]|false|none|@OutputOnly. A list of all the service types that are available for this business category.|

<h2 id="tocS_Chain">Chain</h2>
<!-- backwards compatibility -->
<a id="schemachain"></a>
<a id="schema_Chain"></a>
<a id="tocSchain"></a>
<a id="tocschain"></a>

```json
{
  "chainNames": [
    {
      "displayName": "string",
      "languageCode": "string"
    }
  ],
  "locationCount": 0,
  "name": "string",
  "websites": [
    {
      "url": "string"
    }
  ]
}
```

A chain is a brand that your business's locations can be affiliated with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chainNames|[[ChainName](#schemachainname)]|false|none|Names of the chain.|
|locationCount|integer(int32)|false|none|Number of locations that are part of this chain.|
|name|string|false|none|The chain's resource name, in the format `chains/{chain_place_id}`.|
|websites|[[ChainUrl](#schemachainurl)]|false|none|Websites of the chain.|

<h2 id="tocS_ChainName">ChainName</h2>
<!-- backwards compatibility -->
<a id="schemachainname"></a>
<a id="schema_ChainName"></a>
<a id="tocSchainname"></a>
<a id="tocschainname"></a>

```json
{
  "displayName": "string",
  "languageCode": "string"
}
```

Name to be used when displaying the chain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name for this chain.|
|languageCode|string|false|none|The BCP 47 code of language of the name.|

<h2 id="tocS_ChainUrl">ChainUrl</h2>
<!-- backwards compatibility -->
<a id="schemachainurl"></a>
<a id="schema_ChainUrl"></a>
<a id="tocSchainurl"></a>
<a id="tocschainurl"></a>

```json
{
  "url": "string"
}
```

Url to be used when displaying the chain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|The url for this chain.|

<h2 id="tocS_ClearLocationAssociationRequest">ClearLocationAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclearlocationassociationrequest"></a>
<a id="schema_ClearLocationAssociationRequest"></a>
<a id="tocSclearlocationassociationrequest"></a>
<a id="tocsclearlocationassociationrequest"></a>

```json
{}
```

Request message for Locations.ClearLocationAssociationRequest.

<h2 id="tocS_CompleteVerificationRequest">CompleteVerificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompleteverificationrequest"></a>
<a id="schema_CompleteVerificationRequest"></a>
<a id="tocScompleteverificationrequest"></a>
<a id="tocscompleteverificationrequest"></a>

```json
{
  "pin": "string"
}
```

Request message for Verifications.CompleteVerificationAction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pin|string|false|none|PIN code received by the merchant to complete the verification.|

<h2 id="tocS_CompleteVerificationResponse">CompleteVerificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompleteverificationresponse"></a>
<a id="schema_CompleteVerificationResponse"></a>
<a id="tocScompleteverificationresponse"></a>
<a id="tocscompleteverificationresponse"></a>

```json
{
  "verification": {
    "createTime": "string",
    "method": "VERIFICATION_METHOD_UNSPECIFIED",
    "name": "string",
    "state": "VERIFICATION_STATE_UNSPECIFIED"
  }
}
```

Response message for Verifications.CompleteVerificationAction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verification|[Verification](#schemaverification)|false|none|The completed verification.|

<h2 id="tocS_Connectivity">Connectivity</h2>
<!-- backwards compatibility -->
<a id="schemaconnectivity"></a>
<a id="schema_Connectivity"></a>
<a id="tocSconnectivity"></a>
<a id="tocsconnectivity"></a>

```json
{
  "freeWifi": true,
  "freeWifiException": "EXCEPTION_UNSPECIFIED",
  "publicAreaWifiAvailable": true,
  "publicAreaWifiAvailableException": "EXCEPTION_UNSPECIFIED",
  "publicInternetTerminal": true,
  "publicInternetTerminalException": "EXCEPTION_UNSPECIFIED",
  "wifiAvailable": true,
  "wifiAvailableException": "EXCEPTION_UNSPECIFIED"
}
```

The ways in which the property provides guests with the ability to access the internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|freeWifi|boolean|false|none|Free wifi. The hotel offers guests wifi for free.|
|freeWifiException|string|false|none|Free wifi exception.|
|publicAreaWifiAvailable|boolean|false|none|Public area wifi available. Guests have the ability to wirelessly connect to the internet in the areas of the hotel accessible to anyone. Can be free or for a fee.|
|publicAreaWifiAvailableException|string|false|none|Public area wifi available exception.|
|publicInternetTerminal|boolean|false|none|Public internet terminal. An area of the hotel supplied with computers and designated for the purpose of providing guests with the ability to access the internet.|
|publicInternetTerminalException|string|false|none|Public internet terminal exception.|
|wifiAvailable|boolean|false|none|Wifi available. The hotel provides the ability for guests to wirelessly connect to the internet. Can be in the public areas of the hotel and/or in the guest rooms. Can be free or for a fee.|
|wifiAvailableException|string|false|none|Wifi available exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|freeWifiException|EXCEPTION_UNSPECIFIED|
|freeWifiException|UNDER_CONSTRUCTION|
|freeWifiException|DEPENDENT_ON_SEASON|
|freeWifiException|DEPENDENT_ON_DAY_OF_WEEK|
|publicAreaWifiAvailableException|EXCEPTION_UNSPECIFIED|
|publicAreaWifiAvailableException|UNDER_CONSTRUCTION|
|publicAreaWifiAvailableException|DEPENDENT_ON_SEASON|
|publicAreaWifiAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|publicInternetTerminalException|EXCEPTION_UNSPECIFIED|
|publicInternetTerminalException|UNDER_CONSTRUCTION|
|publicInternetTerminalException|DEPENDENT_ON_SEASON|
|publicInternetTerminalException|DEPENDENT_ON_DAY_OF_WEEK|
|wifiAvailableException|EXCEPTION_UNSPECIFIED|
|wifiAvailableException|UNDER_CONSTRUCTION|
|wifiAvailableException|DEPENDENT_ON_SEASON|
|wifiAvailableException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_DeclineInvitationRequest">DeclineInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeclineinvitationrequest"></a>
<a id="schema_DeclineInvitationRequest"></a>
<a id="tocSdeclineinvitationrequest"></a>
<a id="tocsdeclineinvitationrequest"></a>

```json
{}
```

Request message for AccessControl.DeclineInvitation.

<h2 id="tocS_DimensionalMetricValue">DimensionalMetricValue</h2>
<!-- backwards compatibility -->
<a id="schemadimensionalmetricvalue"></a>
<a id="schema_DimensionalMetricValue"></a>
<a id="tocSdimensionalmetricvalue"></a>
<a id="tocsdimensionalmetricvalue"></a>

```json
{
  "metricOption": "METRIC_OPTION_UNSPECIFIED",
  "timeDimension": {
    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
    "timeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "timeRange": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "value": "string"
}
```

A value for a single metric with a given time dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricOption|string|false|none|The option that requested this dimensional value.|
|timeDimension|[TimeDimension](#schematimedimension)|false|none|The dimension for the value.|
|value|string(int64)|false|none|The value. If no value is set, then the requested data is missing.|

#### Enumerated Values

|Property|Value|
|---|---|
|metricOption|METRIC_OPTION_UNSPECIFIED|
|metricOption|AGGREGATED_TOTAL|
|metricOption|AGGREGATED_DAILY|
|metricOption|BREAKDOWN_DAY_OF_WEEK|
|metricOption|BREAKDOWN_HOUR_OF_DAY|

<h2 id="tocS_Dimensions">Dimensions</h2>
<!-- backwards compatibility -->
<a id="schemadimensions"></a>
<a id="schema_Dimensions"></a>
<a id="tocSdimensions"></a>
<a id="tocsdimensions"></a>

```json
{
  "heightPixels": 0,
  "widthPixels": 0
}
```

Dimensions of the media item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|heightPixels|integer(int32)|false|none|Height of the media item, in pixels.|
|widthPixels|integer(int32)|false|none|Width of the media item, in pixels.|

<h2 id="tocS_DrivingDirectionMetricsRequest">DrivingDirectionMetricsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadrivingdirectionmetricsrequest"></a>
<a id="schema_DrivingDirectionMetricsRequest"></a>
<a id="tocSdrivingdirectionmetricsrequest"></a>
<a id="tocsdrivingdirectionmetricsrequest"></a>

```json
{
  "languageCode": "string",
  "numDays": "SEVEN"
}
```

A request for driving direction insights.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The BCP 47 code for the language. If a language code is not provided, it defaults to English.|
|numDays|string|false|none|The number of days to aggregate data for. Results returned will be available data over the last number of requested days. Valid values are 7, 30, and 90.|

#### Enumerated Values

|Property|Value|
|---|---|
|numDays|SEVEN|
|numDays|THIRTY|
|numDays|NINETY|

<h2 id="tocS_Duplicate">Duplicate</h2>
<!-- backwards compatibility -->
<a id="schemaduplicate"></a>
<a id="schema_Duplicate"></a>
<a id="tocSduplicate"></a>
<a id="tocsduplicate"></a>

```json
{
  "access": "ACCESS_UNSPECIFIED",
  "locationName": "string",
  "placeId": "string"
}
```

Information about the location that this location duplicates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string|false|none|Indicates whether the user has access to the location it duplicates.|
|locationName|string|false|none|The resource name of the location that this duplicates. Only populated if the authenticated user has access rights to that location and that location is not deleted.|
|placeId|string|false|none|The place ID of the location that this duplicates.|

#### Enumerated Values

|Property|Value|
|---|---|
|access|ACCESS_UNSPECIFIED|
|access|ACCESS_UNKNOWN|
|access|ALLOWED|
|access|INSUFFICIENT|

<h2 id="tocS_EmailInput">EmailInput</h2>
<!-- backwards compatibility -->
<a id="schemaemailinput"></a>
<a id="schema_EmailInput"></a>
<a id="tocSemailinput"></a>
<a id="tocsemailinput"></a>

```json
{
  "emailAddress": "string"
}
```

Input for EMAIL verification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailAddress|string|false|none|Email address where the PIN should be sent to. An email address is accepted only if it is one of the addresses provided by FetchVerificationOptions. If the EmailVerificationData has is_user_name_editable set to true, the client may specify a different user name (local-part) but must match the domain name.|

<h2 id="tocS_EmailVerificationData">EmailVerificationData</h2>
<!-- backwards compatibility -->
<a id="schemaemailverificationdata"></a>
<a id="schema_EmailVerificationData"></a>
<a id="tocSemailverificationdata"></a>
<a id="tocsemailverificationdata"></a>

```json
{
  "domainName": "string",
  "isUserNameEditable": true,
  "userName": "string"
}
```

Display data for verifications through email.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|string|false|none|Domain name in the email address. e.g. "gmail.com" in foo@gmail.com|
|isUserNameEditable|boolean|false|none|Whether client is allowed to provide a different user name.|
|userName|string|false|none|User name in the email address. e.g. "foo" in foo@gmail.com|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

<h2 id="tocS_EnhancedCleaning">EnhancedCleaning</h2>
<!-- backwards compatibility -->
<a id="schemaenhancedcleaning"></a>
<a id="schema_EnhancedCleaning"></a>
<a id="tocSenhancedcleaning"></a>
<a id="tocsenhancedcleaning"></a>

```json
{
  "commercialGradeDisinfectantCleaning": true,
  "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
  "commonAreasEnhancedCleaning": true,
  "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
  "employeesTrainedCleaningProcedures": true,
  "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
  "employeesTrainedThoroughHandWashing": true,
  "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
  "employeesWearProtectiveEquipment": true,
  "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
  "guestRoomsEnhancedCleaning": true,
  "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
}
```

Enhanced cleaning measures implemented by the hotel during COVID-19.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commercialGradeDisinfectantCleaning|boolean|false|none|Commercial-grade disinfectant used to clean the property.|
|commercialGradeDisinfectantCleaningException|string|false|none|Commercial grade disinfectant cleaning exception.|
|commonAreasEnhancedCleaning|boolean|false|none|Enhanced cleaning of common areas.|
|commonAreasEnhancedCleaningException|string|false|none|Common areas enhanced cleaning exception.|
|employeesTrainedCleaningProcedures|boolean|false|none|Employees trained in COVID-19 cleaning procedures.|
|employeesTrainedCleaningProceduresException|string|false|none|Employees trained cleaning procedures exception.|
|employeesTrainedThoroughHandWashing|boolean|false|none|Employees trained in thorough hand-washing.|
|employeesTrainedThoroughHandWashingException|string|false|none|Employees trained thorough hand washing exception.|
|employeesWearProtectiveEquipment|boolean|false|none|Employees wear masks, face shields, and/or gloves.|
|employeesWearProtectiveEquipmentException|string|false|none|Employees wear protective equipment exception.|
|guestRoomsEnhancedCleaning|boolean|false|none|Enhanced cleaning of guest rooms.|
|guestRoomsEnhancedCleaningException|string|false|none|Guest rooms enhanced cleaning exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|commercialGradeDisinfectantCleaningException|EXCEPTION_UNSPECIFIED|
|commercialGradeDisinfectantCleaningException|UNDER_CONSTRUCTION|
|commercialGradeDisinfectantCleaningException|DEPENDENT_ON_SEASON|
|commercialGradeDisinfectantCleaningException|DEPENDENT_ON_DAY_OF_WEEK|
|commonAreasEnhancedCleaningException|EXCEPTION_UNSPECIFIED|
|commonAreasEnhancedCleaningException|UNDER_CONSTRUCTION|
|commonAreasEnhancedCleaningException|DEPENDENT_ON_SEASON|
|commonAreasEnhancedCleaningException|DEPENDENT_ON_DAY_OF_WEEK|
|employeesTrainedCleaningProceduresException|EXCEPTION_UNSPECIFIED|
|employeesTrainedCleaningProceduresException|UNDER_CONSTRUCTION|
|employeesTrainedCleaningProceduresException|DEPENDENT_ON_SEASON|
|employeesTrainedCleaningProceduresException|DEPENDENT_ON_DAY_OF_WEEK|
|employeesTrainedThoroughHandWashingException|EXCEPTION_UNSPECIFIED|
|employeesTrainedThoroughHandWashingException|UNDER_CONSTRUCTION|
|employeesTrainedThoroughHandWashingException|DEPENDENT_ON_SEASON|
|employeesTrainedThoroughHandWashingException|DEPENDENT_ON_DAY_OF_WEEK|
|employeesWearProtectiveEquipmentException|EXCEPTION_UNSPECIFIED|
|employeesWearProtectiveEquipmentException|UNDER_CONSTRUCTION|
|employeesWearProtectiveEquipmentException|DEPENDENT_ON_SEASON|
|employeesWearProtectiveEquipmentException|DEPENDENT_ON_DAY_OF_WEEK|
|guestRoomsEnhancedCleaningException|EXCEPTION_UNSPECIFIED|
|guestRoomsEnhancedCleaningException|UNDER_CONSTRUCTION|
|guestRoomsEnhancedCleaningException|DEPENDENT_ON_SEASON|
|guestRoomsEnhancedCleaningException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Families">Families</h2>
<!-- backwards compatibility -->
<a id="schemafamilies"></a>
<a id="schema_Families"></a>
<a id="tocSfamilies"></a>
<a id="tocsfamilies"></a>

```json
{
  "babysitting": true,
  "babysittingException": "EXCEPTION_UNSPECIFIED",
  "kidsActivities": true,
  "kidsActivitiesException": "EXCEPTION_UNSPECIFIED",
  "kidsClub": true,
  "kidsClubException": "EXCEPTION_UNSPECIFIED"
}
```

Services and amenities for families and young guests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|babysitting|boolean|false|none|Babysitting. Child care that is offered by hotel staffers or coordinated by hotel staffers with local child care professionals. Can be free or for a fee.|
|babysittingException|string|false|none|Babysitting exception.|
|kidsActivities|boolean|false|none|Kids activities. Recreational options such as sports, films, crafts and games designed for the enjoyment of children and offered at the hotel. May or may not be supervised. May or may not be at a designated time or place. Cab be free or for a fee.|
|kidsActivitiesException|string|false|none|Kids activities exception.|
|kidsClub|boolean|false|none|Kids club. An organized program of group activities held at the hotel and designed for the enjoyment of children. Facilitated by hotel staff (or staff procured by the hotel) in an area(s) designated for the purpose of entertaining children without their parents. May include games, outings, water sports, team sports, arts and crafts, and films. Usually has set hours. Can be free or for a fee. Also known as Kids Camp or Kids program.|
|kidsClubException|string|false|none|Kids club exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|babysittingException|EXCEPTION_UNSPECIFIED|
|babysittingException|UNDER_CONSTRUCTION|
|babysittingException|DEPENDENT_ON_SEASON|
|babysittingException|DEPENDENT_ON_DAY_OF_WEEK|
|kidsActivitiesException|EXCEPTION_UNSPECIFIED|
|kidsActivitiesException|UNDER_CONSTRUCTION|
|kidsActivitiesException|DEPENDENT_ON_SEASON|
|kidsActivitiesException|DEPENDENT_ON_DAY_OF_WEEK|
|kidsClubException|EXCEPTION_UNSPECIFIED|
|kidsClubException|UNDER_CONSTRUCTION|
|kidsClubException|DEPENDENT_ON_SEASON|
|kidsClubException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_FetchVerificationOptionsRequest">FetchVerificationOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemafetchverificationoptionsrequest"></a>
<a id="schema_FetchVerificationOptionsRequest"></a>
<a id="tocSfetchverificationoptionsrequest"></a>
<a id="tocsfetchverificationoptionsrequest"></a>

```json
{
  "context": {
    "address": {
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
  },
  "languageCode": "string"
}
```

Request message for Verifications.FetchVerificationOptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[ServiceBusinessContext](#schemaservicebusinesscontext)|false|none|Extra context information for the verification of service businesses. Required for the locations whose business type is CUSTOMER_LOCATION_ONLY. INVALID_ARGUMENT will be thrown if it is set for other business types of locations.|
|languageCode|string|false|none|The BCP 47 language code representing the language that is to be used for the verification process. Available options vary by language.|

<h2 id="tocS_FetchVerificationOptionsResponse">FetchVerificationOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchverificationoptionsresponse"></a>
<a id="schema_FetchVerificationOptionsResponse"></a>
<a id="tocSfetchverificationoptionsresponse"></a>
<a id="tocsfetchverificationoptionsresponse"></a>

```json
{
  "options": [
    {
      "addressData": {
        "address": {
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
        "businessName": "string"
      },
      "emailData": {
        "domainName": "string",
        "isUserNameEditable": true,
        "userName": "string"
      },
      "phoneData": {
        "phoneNumber": "string"
      },
      "verificationMethod": "VERIFICATION_METHOD_UNSPECIFIED"
    }
  ]
}
```

Response message for Verifications.FetchVerificationOptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[[VerificationOption](#schemaverificationoption)]|false|none|The available verification options.|

<h2 id="tocS_FindMatchingLocationsRequest">FindMatchingLocationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemafindmatchinglocationsrequest"></a>
<a id="schema_FindMatchingLocationsRequest"></a>
<a id="tocSfindmatchinglocationsrequest"></a>
<a id="tocsfindmatchinglocationsrequest"></a>

```json
{
  "languageCode": "string",
  "maxCacheDuration": "string",
  "numResults": 0
}
```

Request message for Locations.FindMatchingLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The preferred language for the matching location (in BCP-47 format).|
|maxCacheDuration|string(google-duration)|false|none|Deprecated. This field is ignored for all requests.|
|numResults|integer(int32)|false|none|The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination.|

<h2 id="tocS_FindMatchingLocationsResponse">FindMatchingLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemafindmatchinglocationsresponse"></a>
<a id="schema_FindMatchingLocationsResponse"></a>
<a id="tocSfindmatchinglocationsresponse"></a>
<a id="tocsfindmatchinglocationsresponse"></a>

```json
{
  "matchTime": "string",
  "matchedLocations": [
    {
      "isExactMatch": true,
      "location": {
        "adWordsLocationExtensions": {
          "adPhone": "string"
        },
        "additionalCategories": [
          {
            "categoryId": "string",
            "displayName": "string",
            "moreHoursTypes": [
              {
                "displayName": "string",
                "hoursTypeId": "string",
                "localizedDisplayName": "string"
              }
            ],
            "serviceTypes": [
              {
                "displayName": "string",
                "serviceTypeId": "string"
              }
            ]
          }
        ],
        "additionalPhones": [
          "string"
        ],
        "address": {
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
        "attributes": [
          {
            "attributeId": "string",
            "repeatedEnumValue": {
              "setValues": [
                "string"
              ],
              "unsetValues": [
                "string"
              ]
            },
            "urlValues": [
              {
                "url": "string"
              }
            ],
            "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
            "values": [
              null
            ]
          }
        ],
        "labels": [
          "string"
        ],
        "languageCode": "string",
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "locationKey": {
          "explicitNoPlaceId": true,
          "placeId": "string",
          "plusPageId": "string",
          "requestId": "string"
        },
        "locationName": "string",
        "locationState": {
          "canDelete": true,
          "canHaveFoodMenus": true,
          "canModifyServiceList": true,
          "canOperateHealthData": true,
          "canOperateLodgingData": true,
          "canUpdate": true,
          "hasPendingEdits": true,
          "hasPendingVerification": true,
          "isDisabled": true,
          "isDisconnected": true,
          "isDuplicate": true,
          "isGoogleUpdated": true,
          "isLocalPostApiDisabled": true,
          "isPendingReview": true,
          "isPublished": true,
          "isSuspended": true,
          "isVerified": true,
          "needsReverification": true
        },
        "metadata": {
          "duplicate": {
            "access": "ACCESS_UNSPECIFIED",
            "locationName": "string",
            "placeId": "string"
          },
          "mapsUrl": "string",
          "newReviewUrl": "string"
        },
        "moreHours": [
          {
            "hoursTypeId": "string",
            "periods": [
              {
                "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
                "closeTime": "string",
                "openDay": "DAY_OF_WEEK_UNSPECIFIED",
                "openTime": "string"
              }
            ]
          }
        ],
        "name": "string",
        "openInfo": {
          "canReopen": true,
          "openingDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
        },
        "priceLists": [
          {
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ],
            "priceListId": "string",
            "sections": [
              {
                "items": [
                  {
                    "itemId": "string",
                    "labels": [
                      {
                        "description": "string",
                        "displayName": "string",
                        "languageCode": "string"
                      }
                    ],
                    "price": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    }
                  }
                ],
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ],
                "sectionId": "string",
                "sectionType": "SECTION_TYPE_UNSPECIFIED"
              }
            ],
            "sourceUrl": "string"
          }
        ],
        "primaryCategory": {
          "categoryId": "string",
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        },
        "primaryPhone": "string",
        "profile": {
          "description": "string"
        },
        "regularHours": {
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": "string",
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": "string"
            }
          ]
        },
        "relationshipData": {
          "parentChain": "string"
        },
        "serviceArea": {
          "businessType": "BUSINESS_TYPE_UNSPECIFIED",
          "places": {
            "placeInfos": [
              {
                "name": "string",
                "placeId": "string"
              }
            ]
          },
          "radius": {
            "latlng": {
              "latitude": 0,
              "longitude": 0
            },
            "radiusKm": 0
          }
        },
        "specialHours": {
          "specialHourPeriods": [
            {
              "closeTime": "string",
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "isClosed": true,
              "openTime": "string",
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              }
            }
          ]
        },
        "storeCode": "string",
        "websiteUrl": "string"
      }
    }
  ]
}
```

Response message for Locations.FindMatchingLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchTime|string(google-datetime)|false|none|When the matching algorithm was last executed for this location.|
|matchedLocations|[[MatchedLocation](#schemamatchedlocation)]|false|none|A collection of locations that are potential matches to the specified location, listed in order from best to least match. If there is an exact match, it will be in the first position.|

<h2 id="tocS_FollowersMetadata">FollowersMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafollowersmetadata"></a>
<a id="schema_FollowersMetadata"></a>
<a id="tocSfollowersmetadata"></a>
<a id="tocsfollowersmetadata"></a>

```json
{
  "count": "string",
  "name": "string"
}
```

Follower metadata for a location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(uint64)|false|none|Total number of followers for the location.|
|name|string|false|none|The resource name for this. accounts/{account_id}/locations/{location_id}/followers/metadata|

<h2 id="tocS_FoodAndDrink">FoodAndDrink</h2>
<!-- backwards compatibility -->
<a id="schemafoodanddrink"></a>
<a id="schema_FoodAndDrink"></a>
<a id="tocSfoodanddrink"></a>
<a id="tocsfoodanddrink"></a>

```json
{
  "bar": true,
  "barException": "EXCEPTION_UNSPECIFIED",
  "breakfastAvailable": true,
  "breakfastAvailableException": "EXCEPTION_UNSPECIFIED",
  "breakfastBuffet": true,
  "breakfastBuffetException": "EXCEPTION_UNSPECIFIED",
  "buffet": true,
  "buffetException": "EXCEPTION_UNSPECIFIED",
  "dinnerBuffet": true,
  "dinnerBuffetException": "EXCEPTION_UNSPECIFIED",
  "freeBreakfast": true,
  "freeBreakfastException": "EXCEPTION_UNSPECIFIED",
  "restaurant": true,
  "restaurantException": "EXCEPTION_UNSPECIFIED",
  "restaurantsCount": 0,
  "restaurantsCountException": "EXCEPTION_UNSPECIFIED",
  "roomService": true,
  "roomServiceException": "EXCEPTION_UNSPECIFIED",
  "tableService": true,
  "tableServiceException": "EXCEPTION_UNSPECIFIED",
  "twentyFourHourRoomService": true,
  "twentyFourHourRoomServiceException": "EXCEPTION_UNSPECIFIED",
  "vendingMachine": true,
  "vendingMachineException": "EXCEPTION_UNSPECIFIED"
}
```

Meals, snacks, and beverages available at the property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bar|boolean|false|none|Bar. A designated room, lounge or area of an on-site restaurant with seating at a counter behind which a hotel staffer takes the guest's order and provides the requested alcoholic drink. Can be indoors or outdoors. Also known as Pub.|
|barException|string|false|none|Bar exception.|
|breakfastAvailable|boolean|false|none|Breakfast available. The morning meal is offered to all guests. Can be free or for a fee.|
|breakfastAvailableException|string|false|none|Breakfast available exception.|
|breakfastBuffet|boolean|false|none|Breakfast buffet. Breakfast meal service where guests serve themselves from a variety of dishes/foods that are put out on a table.|
|breakfastBuffetException|string|false|none|Breakfast buffet exception.|
|buffet|boolean|false|none|Buffet. A type of meal where guests serve themselves from a variety of dishes/foods that are put out on a table. Includes lunch and/or dinner meals. A breakfast-only buffet is not sufficient.|
|buffetException|string|false|none|Buffet exception.|
|dinnerBuffet|boolean|false|none|Dinner buffet. Dinner meal service where guests serve themselves from a variety of dishes/foods that are put out on a table.|
|dinnerBuffetException|string|false|none|Dinner buffet exception.|
|freeBreakfast|boolean|false|none|Free breakfast. Breakfast is offered for free to all guests. Does not apply if limited to certain room packages.|
|freeBreakfastException|string|false|none|Free breakfast exception.|
|restaurant|boolean|false|none|Restaurant. A business onsite at the hotel that is open to the public as well as guests, and offers meals and beverages to consume at tables or counters. May or may not include table service. Also known as cafe, buffet, eatery. A "breakfast room" where the hotel serves breakfast only to guests (not the general public) does not count as a restaurant.|
|restaurantException|string|false|none|Restaurant exception.|
|restaurantsCount|integer(int32)|false|none|Restaurants count. The number of restaurants at the hotel.|
|restaurantsCountException|string|false|none|Restaurants count exception.|
|roomService|boolean|false|none|Room service. A hotel staffer delivers meals prepared onsite to a guest's room as per their request. May or may not be available during specific hours. Services should be available to all guests (not based on rate/room booked/reward program, etc).|
|roomServiceException|string|false|none|Room service exception.|
|tableService|boolean|false|none|Table service. A restaurant in which a staff member is assigned to a guest's table to take their order, deliver and clear away food, and deliver the bill, if applicable. Also known as sit-down restaurant.|
|tableServiceException|string|false|none|Table service exception.|
|twentyFourHourRoomService|boolean|false|none|24hr room service. Room service is available 24 hours a day.|
|twentyFourHourRoomServiceException|string|false|none|24hr room service exception.|
|vendingMachine|boolean|false|none|Vending machine. A glass-fronted mechanized cabinet displaying and dispensing snacks and beverages for purchase by coins, paper money and/or credit cards.|
|vendingMachineException|string|false|none|Vending machine exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|barException|EXCEPTION_UNSPECIFIED|
|barException|UNDER_CONSTRUCTION|
|barException|DEPENDENT_ON_SEASON|
|barException|DEPENDENT_ON_DAY_OF_WEEK|
|breakfastAvailableException|EXCEPTION_UNSPECIFIED|
|breakfastAvailableException|UNDER_CONSTRUCTION|
|breakfastAvailableException|DEPENDENT_ON_SEASON|
|breakfastAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|breakfastBuffetException|EXCEPTION_UNSPECIFIED|
|breakfastBuffetException|UNDER_CONSTRUCTION|
|breakfastBuffetException|DEPENDENT_ON_SEASON|
|breakfastBuffetException|DEPENDENT_ON_DAY_OF_WEEK|
|buffetException|EXCEPTION_UNSPECIFIED|
|buffetException|UNDER_CONSTRUCTION|
|buffetException|DEPENDENT_ON_SEASON|
|buffetException|DEPENDENT_ON_DAY_OF_WEEK|
|dinnerBuffetException|EXCEPTION_UNSPECIFIED|
|dinnerBuffetException|UNDER_CONSTRUCTION|
|dinnerBuffetException|DEPENDENT_ON_SEASON|
|dinnerBuffetException|DEPENDENT_ON_DAY_OF_WEEK|
|freeBreakfastException|EXCEPTION_UNSPECIFIED|
|freeBreakfastException|UNDER_CONSTRUCTION|
|freeBreakfastException|DEPENDENT_ON_SEASON|
|freeBreakfastException|DEPENDENT_ON_DAY_OF_WEEK|
|restaurantException|EXCEPTION_UNSPECIFIED|
|restaurantException|UNDER_CONSTRUCTION|
|restaurantException|DEPENDENT_ON_SEASON|
|restaurantException|DEPENDENT_ON_DAY_OF_WEEK|
|restaurantsCountException|EXCEPTION_UNSPECIFIED|
|restaurantsCountException|UNDER_CONSTRUCTION|
|restaurantsCountException|DEPENDENT_ON_SEASON|
|restaurantsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|roomServiceException|EXCEPTION_UNSPECIFIED|
|roomServiceException|UNDER_CONSTRUCTION|
|roomServiceException|DEPENDENT_ON_SEASON|
|roomServiceException|DEPENDENT_ON_DAY_OF_WEEK|
|tableServiceException|EXCEPTION_UNSPECIFIED|
|tableServiceException|UNDER_CONSTRUCTION|
|tableServiceException|DEPENDENT_ON_SEASON|
|tableServiceException|DEPENDENT_ON_DAY_OF_WEEK|
|twentyFourHourRoomServiceException|EXCEPTION_UNSPECIFIED|
|twentyFourHourRoomServiceException|UNDER_CONSTRUCTION|
|twentyFourHourRoomServiceException|DEPENDENT_ON_SEASON|
|twentyFourHourRoomServiceException|DEPENDENT_ON_DAY_OF_WEEK|
|vendingMachineException|EXCEPTION_UNSPECIFIED|
|vendingMachineException|UNDER_CONSTRUCTION|
|vendingMachineException|DEPENDENT_ON_SEASON|
|vendingMachineException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_FoodMenu">FoodMenu</h2>
<!-- backwards compatibility -->
<a id="schemafoodmenu"></a>
<a id="schema_FoodMenu"></a>
<a id="tocSfoodmenu"></a>
<a id="tocsfoodmenu"></a>

```json
{
  "cuisines": [
    "CUISINE_UNSPECIFIED"
  ],
  "labels": [
    {
      "description": "string",
      "displayName": "string",
      "languageCode": "string"
    }
  ],
  "sections": [
    {
      "items": [
        {
          "attributes": {
            "allergen": [
              "ALLERGEN_UNSPECIFIED"
            ],
            "dietaryRestriction": [
              "DIETARY_RESTRICTION_UNSPECIFIED"
            ],
            "ingredients": [
              {
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ]
              }
            ],
            "mediaKeys": [
              "string"
            ],
            "nutritionFacts": {
              "calories": {
                "lowerAmount": 0,
                "unit": "ENERGY_UNIT_UNSPECIFIED",
                "upperAmount": 0
              },
              "cholesterol": {
                "lowerAmount": 0,
                "unit": "MASS_UNIT_UNSPECIFIED",
                "upperAmount": 0
              },
              "protein": {
                "lowerAmount": 0,
                "unit": "MASS_UNIT_UNSPECIFIED",
                "upperAmount": 0
              },
              "sodium": {
                "lowerAmount": 0,
                "unit": "MASS_UNIT_UNSPECIFIED",
                "upperAmount": 0
              },
              "totalCarbohydrate": {
                "lowerAmount": 0,
                "unit": "MASS_UNIT_UNSPECIFIED",
                "upperAmount": 0
              },
              "totalFat": {
                "lowerAmount": 0,
                "unit": "MASS_UNIT_UNSPECIFIED",
                "upperAmount": 0
              }
            },
            "portionSize": {
              "quantity": 0,
              "unit": [
                {
                  "description": "string",
                  "displayName": "string",
                  "languageCode": "string"
                }
              ]
            },
            "preparationMethods": [
              "PREPARATION_METHOD_UNSPECIFIED"
            ],
            "price": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "servesNumPeople": 0,
            "spiciness": "SPICINESS_UNSPECIFIED"
          },
          "labels": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ],
          "options": [
            {
              "attributes": {
                "allergen": [
                  "ALLERGEN_UNSPECIFIED"
                ],
                "dietaryRestriction": [
                  "DIETARY_RESTRICTION_UNSPECIFIED"
                ],
                "ingredients": [
                  {
                    "labels": [
                      {
                        "description": "string",
                        "displayName": "string",
                        "languageCode": "string"
                      }
                    ]
                  }
                ],
                "mediaKeys": [
                  "string"
                ],
                "nutritionFacts": {
                  "calories": {
                    "lowerAmount": 0,
                    "unit": "ENERGY_UNIT_UNSPECIFIED",
                    "upperAmount": 0
                  },
                  "cholesterol": {
                    "lowerAmount": 0,
                    "unit": "MASS_UNIT_UNSPECIFIED",
                    "upperAmount": 0
                  },
                  "protein": {
                    "lowerAmount": 0,
                    "unit": "MASS_UNIT_UNSPECIFIED",
                    "upperAmount": 0
                  },
                  "sodium": {
                    "lowerAmount": 0,
                    "unit": "MASS_UNIT_UNSPECIFIED",
                    "upperAmount": 0
                  },
                  "totalCarbohydrate": {
                    "lowerAmount": 0,
                    "unit": "MASS_UNIT_UNSPECIFIED",
                    "upperAmount": 0
                  },
                  "totalFat": {
                    "lowerAmount": 0,
                    "unit": "MASS_UNIT_UNSPECIFIED",
                    "upperAmount": 0
                  }
                },
                "portionSize": {
                  "quantity": 0,
                  "unit": [
                    {
                      "description": "string",
                      "displayName": "string",
                      "languageCode": "string"
                    }
                  ]
                },
                "preparationMethods": [
                  "PREPARATION_METHOD_UNSPECIFIED"
                ],
                "price": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "servesNumPeople": 0,
                "spiciness": "SPICINESS_UNSPECIFIED"
              },
              "labels": [
                {
                  "description": "string",
                  "displayName": "string",
                  "languageCode": "string"
                }
              ]
            }
          ]
        }
      ],
      "labels": [
        {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      ]
    }
  ],
  "sourceUrl": "string"
}
```

Menu of a business that serves food dishes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cuisines|[string]|false|none|Optional. Cuisine information for the food menu. It is highly recommended to provide this field.|
|labels|[[MenuLabel](#schemamenulabel)]|false|none|Required. Language-tagged labels for the menu. E.g. "menu", "lunch special". Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required.|
|sections|[[FoodMenuSection](#schemafoodmenusection)]|false|none|Required. Sections of the menu.|
|sourceUrl|string|false|none|Optional. Source URL of menu if there is a webpage to go to.|

#### Enumerated Values

|Property|Value|
|---|---|
|cuisines|CUISINE_UNSPECIFIED|
|cuisines|AMERICAN|
|cuisines|ASIAN|
|cuisines|BRAZILIAN|
|cuisines|BREAK_FAST|
|cuisines|BRUNCH|
|cuisines|CHICKEN|
|cuisines|CHINESE|
|cuisines|FAMILY|
|cuisines|FAST_FOOD|
|cuisines|FRENCH|
|cuisines|GREEK|
|cuisines|GERMAN|
|cuisines|HAMBURGER|
|cuisines|INDIAN|
|cuisines|INDONESIAN|
|cuisines|ITALIAN|
|cuisines|JAPANESE|
|cuisines|KOREAN|
|cuisines|LATIN_AMERICAN|
|cuisines|MEDITERRANEAN|
|cuisines|MEXICAN|
|cuisines|PAKISTANI|
|cuisines|PIZZA|
|cuisines|SEAFOOD|
|cuisines|SPANISH|
|cuisines|SUSHI|
|cuisines|THAI|
|cuisines|TURKISH|
|cuisines|VEGETARIAN|
|cuisines|VIETNAMESE|
|cuisines|OTHER_CUISINE|

<h2 id="tocS_FoodMenuItem">FoodMenuItem</h2>
<!-- backwards compatibility -->
<a id="schemafoodmenuitem"></a>
<a id="schema_FoodMenuItem"></a>
<a id="tocSfoodmenuitem"></a>
<a id="tocsfoodmenuitem"></a>

```json
{
  "attributes": {
    "allergen": [
      "ALLERGEN_UNSPECIFIED"
    ],
    "dietaryRestriction": [
      "DIETARY_RESTRICTION_UNSPECIFIED"
    ],
    "ingredients": [
      {
        "labels": [
          {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        ]
      }
    ],
    "mediaKeys": [
      "string"
    ],
    "nutritionFacts": {
      "calories": {
        "lowerAmount": 0,
        "unit": "ENERGY_UNIT_UNSPECIFIED",
        "upperAmount": 0
      },
      "cholesterol": {
        "lowerAmount": 0,
        "unit": "MASS_UNIT_UNSPECIFIED",
        "upperAmount": 0
      },
      "protein": {
        "lowerAmount": 0,
        "unit": "MASS_UNIT_UNSPECIFIED",
        "upperAmount": 0
      },
      "sodium": {
        "lowerAmount": 0,
        "unit": "MASS_UNIT_UNSPECIFIED",
        "upperAmount": 0
      },
      "totalCarbohydrate": {
        "lowerAmount": 0,
        "unit": "MASS_UNIT_UNSPECIFIED",
        "upperAmount": 0
      },
      "totalFat": {
        "lowerAmount": 0,
        "unit": "MASS_UNIT_UNSPECIFIED",
        "upperAmount": 0
      }
    },
    "portionSize": {
      "quantity": 0,
      "unit": [
        {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      ]
    },
    "preparationMethods": [
      "PREPARATION_METHOD_UNSPECIFIED"
    ],
    "price": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "servesNumPeople": 0,
    "spiciness": "SPICINESS_UNSPECIFIED"
  },
  "labels": [
    {
      "description": "string",
      "displayName": "string",
      "languageCode": "string"
    }
  ],
  "options": [
    {
      "attributes": {
        "allergen": [
          "ALLERGEN_UNSPECIFIED"
        ],
        "dietaryRestriction": [
          "DIETARY_RESTRICTION_UNSPECIFIED"
        ],
        "ingredients": [
          {
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ]
          }
        ],
        "mediaKeys": [
          "string"
        ],
        "nutritionFacts": {
          "calories": {
            "lowerAmount": 0,
            "unit": "ENERGY_UNIT_UNSPECIFIED",
            "upperAmount": 0
          },
          "cholesterol": {
            "lowerAmount": 0,
            "unit": "MASS_UNIT_UNSPECIFIED",
            "upperAmount": 0
          },
          "protein": {
            "lowerAmount": 0,
            "unit": "MASS_UNIT_UNSPECIFIED",
            "upperAmount": 0
          },
          "sodium": {
            "lowerAmount": 0,
            "unit": "MASS_UNIT_UNSPECIFIED",
            "upperAmount": 0
          },
          "totalCarbohydrate": {
            "lowerAmount": 0,
            "unit": "MASS_UNIT_UNSPECIFIED",
            "upperAmount": 0
          },
          "totalFat": {
            "lowerAmount": 0,
            "unit": "MASS_UNIT_UNSPECIFIED",
            "upperAmount": 0
          }
        },
        "portionSize": {
          "quantity": 0,
          "unit": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ]
        },
        "preparationMethods": [
          "PREPARATION_METHOD_UNSPECIFIED"
        ],
        "price": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "servesNumPeople": 0,
        "spiciness": "SPICINESS_UNSPECIFIED"
      },
      "labels": [
        {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      ]
    }
  ]
}
```

Item of a Section. It can be the dish itself, or can contain multiple FoodMenuItemOption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[FoodMenuItemAttributes](#schemafoodmenuitemattributes)|false|none|Required. Detailed attributes of the item. When item options are specified, this is considered as the base attributes and populate to each options.|
|labels|[[MenuLabel](#schemamenulabel)]|false|none|Required. Language tagged labels for this menu item. Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required.|
|options|[[FoodMenuItemOption](#schemafoodmenuitemoption)]|false|none|Optional. This is for an item that comes in multiple different options, and users are required to make choices. E.g. "regular" vs. "large" pizza. When options are specified, labels and attributes at item level will automatically become the first option's labels and attributes. Clients only need to specify other additional food options in this field.|

<h2 id="tocS_FoodMenuItemAttributes">FoodMenuItemAttributes</h2>
<!-- backwards compatibility -->
<a id="schemafoodmenuitemattributes"></a>
<a id="schema_FoodMenuItemAttributes"></a>
<a id="tocSfoodmenuitemattributes"></a>
<a id="tocsfoodmenuitemattributes"></a>

```json
{
  "allergen": [
    "ALLERGEN_UNSPECIFIED"
  ],
  "dietaryRestriction": [
    "DIETARY_RESTRICTION_UNSPECIFIED"
  ],
  "ingredients": [
    {
      "labels": [
        {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      ]
    }
  ],
  "mediaKeys": [
    "string"
  ],
  "nutritionFacts": {
    "calories": {
      "lowerAmount": 0,
      "unit": "ENERGY_UNIT_UNSPECIFIED",
      "upperAmount": 0
    },
    "cholesterol": {
      "lowerAmount": 0,
      "unit": "MASS_UNIT_UNSPECIFIED",
      "upperAmount": 0
    },
    "protein": {
      "lowerAmount": 0,
      "unit": "MASS_UNIT_UNSPECIFIED",
      "upperAmount": 0
    },
    "sodium": {
      "lowerAmount": 0,
      "unit": "MASS_UNIT_UNSPECIFIED",
      "upperAmount": 0
    },
    "totalCarbohydrate": {
      "lowerAmount": 0,
      "unit": "MASS_UNIT_UNSPECIFIED",
      "upperAmount": 0
    },
    "totalFat": {
      "lowerAmount": 0,
      "unit": "MASS_UNIT_UNSPECIFIED",
      "upperAmount": 0
    }
  },
  "portionSize": {
    "quantity": 0,
    "unit": [
      {
        "description": "string",
        "displayName": "string",
        "languageCode": "string"
      }
    ]
  },
  "preparationMethods": [
    "PREPARATION_METHOD_UNSPECIFIED"
  ],
  "price": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "servesNumPeople": 0,
  "spiciness": "SPICINESS_UNSPECIFIED"
}
```

Attributes of a food item/dish.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allergen|[string]|false|none|Optional. Allergens associated with the food dish. It is highly recommended to provide this field.|
|dietaryRestriction|[string]|false|none|Optional. Dietary information of the food dish. It is highly recommended to provide this field.|
|ingredients|[[Ingredient](#schemaingredient)]|false|none|Optional. Ingredients of the food dish option.|
|mediaKeys|[string]|false|none|Optional. The media keys of the media associated with the dish. Only photo media is supported. When there are multiple photos associated, the first photo is considered as the preferred photo.|
|nutritionFacts|[NutritionFacts](#schemanutritionfacts)|false|none|Optional. Nutrition facts of the food dish option. It is highly recommended to provide this field.|
|portionSize|[PortionSize](#schemaportionsize)|false|none|Optional. Size of the order, represented in units of items. (e.g. 4 "skewers", 6 "pieces")|
|preparationMethods|[string]|false|none|Optional. Methods on how the food dish option is prepared.|
|price|[Money](#schemamoney)|false|none|Required. Price of the food dish.|
|servesNumPeople|integer(int32)|false|none|Optional. Number of people can be served by this food dish option.|
|spiciness|string|false|none|Optional. Spiciness level of the food dish.|

#### Enumerated Values

|Property|Value|
|---|---|
|allergen|ALLERGEN_UNSPECIFIED|
|allergen|DAIRY|
|allergen|EGG|
|allergen|FISH|
|allergen|PEANUT|
|allergen|SHELLFISH|
|allergen|SOY|
|allergen|TREE_NUT|
|allergen|WHEAT|
|dietaryRestriction|DIETARY_RESTRICTION_UNSPECIFIED|
|dietaryRestriction|HALAL|
|dietaryRestriction|KOSHER|
|dietaryRestriction|ORGANIC|
|dietaryRestriction|VEGAN|
|dietaryRestriction|VEGETARIAN|
|preparationMethods|PREPARATION_METHOD_UNSPECIFIED|
|preparationMethods|BAKED|
|preparationMethods|BARBECUED|
|preparationMethods|BASTED|
|preparationMethods|BLANCHED|
|preparationMethods|BOILED|
|preparationMethods|BRAISED|
|preparationMethods|CODDLED|
|preparationMethods|FERMENTED|
|preparationMethods|FRIED|
|preparationMethods|GRILLED|
|preparationMethods|KNEADED|
|preparationMethods|MARINATED|
|preparationMethods|PAN_FRIED|
|preparationMethods|PICKLED|
|preparationMethods|PRESSURE_COOKED|
|preparationMethods|ROASTED|
|preparationMethods|SAUTEED|
|preparationMethods|SEARED|
|preparationMethods|SIMMERED|
|preparationMethods|SMOKED|
|preparationMethods|STEAMED|
|preparationMethods|STEEPED|
|preparationMethods|STIR_FRIED|
|preparationMethods|OTHER_METHOD|
|spiciness|SPICINESS_UNSPECIFIED|
|spiciness|MILD|
|spiciness|MEDIUM|
|spiciness|HOT|

<h2 id="tocS_FoodMenuItemOption">FoodMenuItemOption</h2>
<!-- backwards compatibility -->
<a id="schemafoodmenuitemoption"></a>
<a id="schema_FoodMenuItemOption"></a>
<a id="tocSfoodmenuitemoption"></a>
<a id="tocsfoodmenuitemoption"></a>

```json
{
  "attributes": {
    "allergen": [
      "ALLERGEN_UNSPECIFIED"
    ],
    "dietaryRestriction": [
      "DIETARY_RESTRICTION_UNSPECIFIED"
    ],
    "ingredients": [
      {
        "labels": [
          {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        ]
      }
    ],
    "mediaKeys": [
      "string"
    ],
    "nutritionFacts": {
      "calories": {
        "lowerAmount": 0,
        "unit": "ENERGY_UNIT_UNSPECIFIED",
        "upperAmount": 0
      },
      "cholesterol": {
        "lowerAmount": 0,
        "unit": "MASS_UNIT_UNSPECIFIED",
        "upperAmount": 0
      },
      "protein": {
        "lowerAmount": 0,
        "unit": "MASS_UNIT_UNSPECIFIED",
        "upperAmount": 0
      },
      "sodium": {
        "lowerAmount": 0,
        "unit": "MASS_UNIT_UNSPECIFIED",
        "upperAmount": 0
      },
      "totalCarbohydrate": {
        "lowerAmount": 0,
        "unit": "MASS_UNIT_UNSPECIFIED",
        "upperAmount": 0
      },
      "totalFat": {
        "lowerAmount": 0,
        "unit": "MASS_UNIT_UNSPECIFIED",
        "upperAmount": 0
      }
    },
    "portionSize": {
      "quantity": 0,
      "unit": [
        {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      ]
    },
    "preparationMethods": [
      "PREPARATION_METHOD_UNSPECIFIED"
    ],
    "price": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "servesNumPeople": 0,
    "spiciness": "SPICINESS_UNSPECIFIED"
  },
  "labels": [
    {
      "description": "string",
      "displayName": "string",
      "languageCode": "string"
    }
  ]
}
```

Option of an Item. It requires an explicit user selection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[FoodMenuItemAttributes](#schemafoodmenuitemattributes)|false|none|Required. Detailed attributes of the item option. Individual unspecified attributes will be inherited from the item-level attibutes as the base.|
|labels|[[MenuLabel](#schemamenulabel)]|false|none|Required. Language tagged labels for this menu item option. E.g.: "beef pad thai", "veggie pad thai", "small pizza", "large pizza". Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required.|

<h2 id="tocS_FoodMenuSection">FoodMenuSection</h2>
<!-- backwards compatibility -->
<a id="schemafoodmenusection"></a>
<a id="schema_FoodMenuSection"></a>
<a id="tocSfoodmenusection"></a>
<a id="tocsfoodmenusection"></a>

```json
{
  "items": [
    {
      "attributes": {
        "allergen": [
          "ALLERGEN_UNSPECIFIED"
        ],
        "dietaryRestriction": [
          "DIETARY_RESTRICTION_UNSPECIFIED"
        ],
        "ingredients": [
          {
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ]
          }
        ],
        "mediaKeys": [
          "string"
        ],
        "nutritionFacts": {
          "calories": {
            "lowerAmount": 0,
            "unit": "ENERGY_UNIT_UNSPECIFIED",
            "upperAmount": 0
          },
          "cholesterol": {
            "lowerAmount": 0,
            "unit": "MASS_UNIT_UNSPECIFIED",
            "upperAmount": 0
          },
          "protein": {
            "lowerAmount": 0,
            "unit": "MASS_UNIT_UNSPECIFIED",
            "upperAmount": 0
          },
          "sodium": {
            "lowerAmount": 0,
            "unit": "MASS_UNIT_UNSPECIFIED",
            "upperAmount": 0
          },
          "totalCarbohydrate": {
            "lowerAmount": 0,
            "unit": "MASS_UNIT_UNSPECIFIED",
            "upperAmount": 0
          },
          "totalFat": {
            "lowerAmount": 0,
            "unit": "MASS_UNIT_UNSPECIFIED",
            "upperAmount": 0
          }
        },
        "portionSize": {
          "quantity": 0,
          "unit": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ]
        },
        "preparationMethods": [
          "PREPARATION_METHOD_UNSPECIFIED"
        ],
        "price": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "servesNumPeople": 0,
        "spiciness": "SPICINESS_UNSPECIFIED"
      },
      "labels": [
        {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      ],
      "options": [
        {
          "attributes": {
            "allergen": [
              "ALLERGEN_UNSPECIFIED"
            ],
            "dietaryRestriction": [
              "DIETARY_RESTRICTION_UNSPECIFIED"
            ],
            "ingredients": [
              {
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ]
              }
            ],
            "mediaKeys": [
              "string"
            ],
            "nutritionFacts": {
              "calories": {
                "lowerAmount": 0,
                "unit": "ENERGY_UNIT_UNSPECIFIED",
                "upperAmount": 0
              },
              "cholesterol": {
                "lowerAmount": 0,
                "unit": "MASS_UNIT_UNSPECIFIED",
                "upperAmount": 0
              },
              "protein": {
                "lowerAmount": 0,
                "unit": "MASS_UNIT_UNSPECIFIED",
                "upperAmount": 0
              },
              "sodium": {
                "lowerAmount": 0,
                "unit": "MASS_UNIT_UNSPECIFIED",
                "upperAmount": 0
              },
              "totalCarbohydrate": {
                "lowerAmount": 0,
                "unit": "MASS_UNIT_UNSPECIFIED",
                "upperAmount": 0
              },
              "totalFat": {
                "lowerAmount": 0,
                "unit": "MASS_UNIT_UNSPECIFIED",
                "upperAmount": 0
              }
            },
            "portionSize": {
              "quantity": 0,
              "unit": [
                {
                  "description": "string",
                  "displayName": "string",
                  "languageCode": "string"
                }
              ]
            },
            "preparationMethods": [
              "PREPARATION_METHOD_UNSPECIFIED"
            ],
            "price": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "servesNumPeople": 0,
            "spiciness": "SPICINESS_UNSPECIFIED"
          },
          "labels": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ]
        }
      ]
    }
  ],
  "labels": [
    {
      "description": "string",
      "displayName": "string",
      "languageCode": "string"
    }
  ]
}
```

Section of a menu. It can contain multiple items/dishes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[FoodMenuItem](#schemafoodmenuitem)]|false|none|Required. Items of the section. Each Section must have at least an item.|
|labels|[[MenuLabel](#schemamenulabel)]|false|none|Required. Language tagged labels for this menu section. Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required.|

<h2 id="tocS_FoodMenus">FoodMenus</h2>
<!-- backwards compatibility -->
<a id="schemafoodmenus"></a>
<a id="schema_FoodMenus"></a>
<a id="tocSfoodmenus"></a>
<a id="tocsfoodmenus"></a>

```json
{
  "menus": [
    {
      "cuisines": [
        "CUISINE_UNSPECIFIED"
      ],
      "labels": [
        {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      ],
      "sections": [
        {
          "items": [
            {
              "attributes": {
                "allergen": [
                  "ALLERGEN_UNSPECIFIED"
                ],
                "dietaryRestriction": [
                  "DIETARY_RESTRICTION_UNSPECIFIED"
                ],
                "ingredients": [
                  {
                    "labels": [
                      {
                        "description": "string",
                        "displayName": "string",
                        "languageCode": "string"
                      }
                    ]
                  }
                ],
                "mediaKeys": [
                  "string"
                ],
                "nutritionFacts": {
                  "calories": {
                    "lowerAmount": 0,
                    "unit": "ENERGY_UNIT_UNSPECIFIED",
                    "upperAmount": 0
                  },
                  "cholesterol": {
                    "lowerAmount": 0,
                    "unit": "MASS_UNIT_UNSPECIFIED",
                    "upperAmount": 0
                  },
                  "protein": {
                    "lowerAmount": 0,
                    "unit": "MASS_UNIT_UNSPECIFIED",
                    "upperAmount": 0
                  },
                  "sodium": {
                    "lowerAmount": 0,
                    "unit": "MASS_UNIT_UNSPECIFIED",
                    "upperAmount": 0
                  },
                  "totalCarbohydrate": {
                    "lowerAmount": 0,
                    "unit": "MASS_UNIT_UNSPECIFIED",
                    "upperAmount": 0
                  },
                  "totalFat": {
                    "lowerAmount": 0,
                    "unit": "MASS_UNIT_UNSPECIFIED",
                    "upperAmount": 0
                  }
                },
                "portionSize": {
                  "quantity": 0,
                  "unit": [
                    {
                      "description": "string",
                      "displayName": "string",
                      "languageCode": "string"
                    }
                  ]
                },
                "preparationMethods": [
                  "PREPARATION_METHOD_UNSPECIFIED"
                ],
                "price": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "servesNumPeople": 0,
                "spiciness": "SPICINESS_UNSPECIFIED"
              },
              "labels": [
                {
                  "description": "string",
                  "displayName": "string",
                  "languageCode": "string"
                }
              ],
              "options": [
                {
                  "attributes": {
                    "allergen": [
                      "ALLERGEN_UNSPECIFIED"
                    ],
                    "dietaryRestriction": [
                      "DIETARY_RESTRICTION_UNSPECIFIED"
                    ],
                    "ingredients": [
                      {
                        "labels": [
                          {
                            "description": "string",
                            "displayName": "string",
                            "languageCode": "string"
                          }
                        ]
                      }
                    ],
                    "mediaKeys": [
                      "string"
                    ],
                    "nutritionFacts": {
                      "calories": {
                        "lowerAmount": 0,
                        "unit": "ENERGY_UNIT_UNSPECIFIED",
                        "upperAmount": 0
                      },
                      "cholesterol": {
                        "lowerAmount": 0,
                        "unit": "MASS_UNIT_UNSPECIFIED",
                        "upperAmount": 0
                      },
                      "protein": {
                        "lowerAmount": 0,
                        "unit": "MASS_UNIT_UNSPECIFIED",
                        "upperAmount": 0
                      },
                      "sodium": {
                        "lowerAmount": 0,
                        "unit": "MASS_UNIT_UNSPECIFIED",
                        "upperAmount": 0
                      },
                      "totalCarbohydrate": {
                        "lowerAmount": 0,
                        "unit": "MASS_UNIT_UNSPECIFIED",
                        "upperAmount": 0
                      },
                      "totalFat": {
                        "lowerAmount": 0,
                        "unit": "MASS_UNIT_UNSPECIFIED",
                        "upperAmount": 0
                      }
                    },
                    "portionSize": {
                      "quantity": 0,
                      "unit": [
                        {
                          "description": "string",
                          "displayName": "string",
                          "languageCode": "string"
                        }
                      ]
                    },
                    "preparationMethods": [
                      "PREPARATION_METHOD_UNSPECIFIED"
                    ],
                    "price": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "servesNumPeople": 0,
                    "spiciness": "SPICINESS_UNSPECIFIED"
                  },
                  "labels": [
                    {
                      "description": "string",
                      "displayName": "string",
                      "languageCode": "string"
                    }
                  ]
                }
              ]
            }
          ],
          "labels": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ]
        }
      ],
      "sourceUrl": "string"
    }
  ],
  "name": "string"
}
```

Menus of a business that serve food dishes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|menus|[[FoodMenu](#schemafoodmenu)]|false|none|Optional. A collection of food menus.|
|name|string|false|none|Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/foodMenus`|

<h2 id="tocS_FreeFormServiceItem">FreeFormServiceItem</h2>
<!-- backwards compatibility -->
<a id="schemafreeformserviceitem"></a>
<a id="schema_FreeFormServiceItem"></a>
<a id="tocSfreeformserviceitem"></a>
<a id="tocsfreeformserviceitem"></a>

```json
{
  "categoryId": "string",
  "label": {
    "description": "string",
    "displayName": "string",
    "languageCode": "string"
  }
}
```

Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|string|false|none|Required. The `category_id` and `service_type_id` should match the possible combinations provided in the `Category` message.|
|label|[Label](#schemalabel)|false|none|Required. Language-tagged labels for the item. We recommend that item names be 140 characters or less, and descriptions 250 characters or less. This field should only be set if the input is a custom service item. Standardized service types should be updated via service_type_id.|

<h2 id="tocS_GenerateAccountNumberRequest">GenerateAccountNumberRequest</h2>
<!-- backwards compatibility -->
<a id="schemagenerateaccountnumberrequest"></a>
<a id="schema_GenerateAccountNumberRequest"></a>
<a id="tocSgenerateaccountnumberrequest"></a>
<a id="tocsgenerateaccountnumberrequest"></a>

```json
{}
```

Request message for Accounts.GenerateAccountNumber.

<h2 id="tocS_GetGoogleUpdatedLodgingResponse">GetGoogleUpdatedLodgingResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgoogleupdatedlodgingresponse"></a>
<a id="schema_GetGoogleUpdatedLodgingResponse"></a>
<a id="tocSgetgoogleupdatedlodgingresponse"></a>
<a id="tocsgetgoogleupdatedlodgingresponse"></a>

```json
{
  "diffMask": "string",
  "lodging": {
    "accessibility": {
      "mobilityAccessible": true,
      "mobilityAccessibleElevator": true,
      "mobilityAccessibleElevatorException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleParking": true,
      "mobilityAccessibleParkingException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessiblePool": true,
      "mobilityAccessiblePoolException": "EXCEPTION_UNSPECIFIED"
    },
    "activities": {
      "beachAccess": true,
      "beachAccessException": "EXCEPTION_UNSPECIFIED",
      "beachFront": true,
      "beachFrontException": "EXCEPTION_UNSPECIFIED",
      "bicycleRental": true,
      "bicycleRentalException": "EXCEPTION_UNSPECIFIED",
      "boutiqueStores": true,
      "boutiqueStoresException": "EXCEPTION_UNSPECIFIED",
      "casino": true,
      "casinoException": "EXCEPTION_UNSPECIFIED",
      "freeBicycleRental": true,
      "freeBicycleRentalException": "EXCEPTION_UNSPECIFIED",
      "freeWatercraftRental": true,
      "freeWatercraftRentalException": "EXCEPTION_UNSPECIFIED",
      "gameRoom": true,
      "gameRoomException": "EXCEPTION_UNSPECIFIED",
      "golf": true,
      "golfException": "EXCEPTION_UNSPECIFIED",
      "horsebackRiding": true,
      "horsebackRidingException": "EXCEPTION_UNSPECIFIED",
      "nightclub": true,
      "nightclubException": "EXCEPTION_UNSPECIFIED",
      "privateBeach": true,
      "privateBeachException": "EXCEPTION_UNSPECIFIED",
      "scuba": true,
      "scubaException": "EXCEPTION_UNSPECIFIED",
      "snorkeling": true,
      "snorkelingException": "EXCEPTION_UNSPECIFIED",
      "tennis": true,
      "tennisException": "EXCEPTION_UNSPECIFIED",
      "waterSkiing": true,
      "waterSkiingException": "EXCEPTION_UNSPECIFIED",
      "watercraftRental": true,
      "watercraftRentalException": "EXCEPTION_UNSPECIFIED"
    },
    "allUnits": {
      "bungalowOrVilla": true,
      "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
      "connectingUnitAvailable": true,
      "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
      "executiveFloor": true,
      "executiveFloorException": "EXCEPTION_UNSPECIFIED",
      "maxAdultOccupantsCount": 0,
      "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxChildOccupantsCount": 0,
      "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxOccupantsCount": 0,
      "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "privateHome": true,
      "privateHomeException": "EXCEPTION_UNSPECIFIED",
      "suite": true,
      "suiteException": "EXCEPTION_UNSPECIFIED",
      "tier": "UNIT_TIER_UNSPECIFIED",
      "tierException": "EXCEPTION_UNSPECIFIED",
      "totalLivingAreas": {
        "accessibility": {
          "adaCompliantUnit": true,
          "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleDoorbell": true,
          "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleFireAlarm": true,
          "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleUnit": true,
          "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleBathtub": true,
          "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleShower": true,
          "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleToilet": true,
          "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleUnit": true,
          "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
        },
        "eating": {
          "coffeeMaker": true,
          "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
          "cookware": true,
          "cookwareException": "EXCEPTION_UNSPECIFIED",
          "dishwasher": true,
          "dishwasherException": "EXCEPTION_UNSPECIFIED",
          "indoorGrill": true,
          "indoorGrillException": "EXCEPTION_UNSPECIFIED",
          "kettle": true,
          "kettleException": "EXCEPTION_UNSPECIFIED",
          "kitchenAvailable": true,
          "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
          "microwave": true,
          "microwaveException": "EXCEPTION_UNSPECIFIED",
          "minibar": true,
          "minibarException": "EXCEPTION_UNSPECIFIED",
          "outdoorGrill": true,
          "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
          "oven": true,
          "ovenException": "EXCEPTION_UNSPECIFIED",
          "refrigerator": true,
          "refrigeratorException": "EXCEPTION_UNSPECIFIED",
          "sink": true,
          "sinkException": "EXCEPTION_UNSPECIFIED",
          "snackbar": true,
          "snackbarException": "EXCEPTION_UNSPECIFIED",
          "stove": true,
          "stoveException": "EXCEPTION_UNSPECIFIED",
          "teaStation": true,
          "teaStationException": "EXCEPTION_UNSPECIFIED",
          "toaster": true,
          "toasterException": "EXCEPTION_UNSPECIFIED"
        },
        "features": {
          "airConditioning": true,
          "airConditioningException": "EXCEPTION_UNSPECIFIED",
          "bathtub": true,
          "bathtubException": "EXCEPTION_UNSPECIFIED",
          "bidet": true,
          "bidetException": "EXCEPTION_UNSPECIFIED",
          "dryer": true,
          "dryerException": "EXCEPTION_UNSPECIFIED",
          "electronicRoomKey": true,
          "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
          "fireplace": true,
          "fireplaceException": "EXCEPTION_UNSPECIFIED",
          "hairdryer": true,
          "hairdryerException": "EXCEPTION_UNSPECIFIED",
          "heating": true,
          "heatingException": "EXCEPTION_UNSPECIFIED",
          "inunitSafe": true,
          "inunitSafeException": "EXCEPTION_UNSPECIFIED",
          "inunitWifiAvailable": true,
          "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
          "ironingEquipment": true,
          "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
          "payPerViewMovies": true,
          "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
          "privateBathroom": true,
          "privateBathroomException": "EXCEPTION_UNSPECIFIED",
          "shower": true,
          "showerException": "EXCEPTION_UNSPECIFIED",
          "toilet": true,
          "toiletException": "EXCEPTION_UNSPECIFIED",
          "tv": true,
          "tvCasting": true,
          "tvCastingException": "EXCEPTION_UNSPECIFIED",
          "tvException": "EXCEPTION_UNSPECIFIED",
          "tvStreaming": true,
          "tvStreamingException": "EXCEPTION_UNSPECIFIED",
          "universalPowerAdapters": true,
          "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
          "washer": true,
          "washerException": "EXCEPTION_UNSPECIFIED"
        },
        "layout": {
          "balcony": true,
          "balconyException": "EXCEPTION_UNSPECIFIED",
          "livingAreaSqMeters": 0,
          "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
          "loft": true,
          "loftException": "EXCEPTION_UNSPECIFIED",
          "nonSmoking": true,
          "nonSmokingException": "EXCEPTION_UNSPECIFIED",
          "patio": true,
          "patioException": "EXCEPTION_UNSPECIFIED",
          "stairs": true,
          "stairsException": "EXCEPTION_UNSPECIFIED"
        },
        "sleeping": {
          "bedsCount": 0,
          "bedsCountException": "EXCEPTION_UNSPECIFIED",
          "bunkBedsCount": 0,
          "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
          "cribsCount": 0,
          "cribsCountException": "EXCEPTION_UNSPECIFIED",
          "doubleBedsCount": 0,
          "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
          "featherPillows": true,
          "featherPillowsException": "EXCEPTION_UNSPECIFIED",
          "hypoallergenicBedding": true,
          "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
          "kingBedsCount": 0,
          "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
          "memoryFoamPillows": true,
          "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
          "otherBedsCount": 0,
          "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
          "queenBedsCount": 0,
          "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
          "rollAwayBedsCount": 0,
          "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
          "singleOrTwinBedsCount": 0,
          "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
          "sofaBedsCount": 0,
          "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
          "syntheticPillows": true,
          "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
        }
      },
      "views": {
        "beachView": true,
        "beachViewException": "EXCEPTION_UNSPECIFIED",
        "cityView": true,
        "cityViewException": "EXCEPTION_UNSPECIFIED",
        "gardenView": true,
        "gardenViewException": "EXCEPTION_UNSPECIFIED",
        "lakeView": true,
        "lakeViewException": "EXCEPTION_UNSPECIFIED",
        "landmarkView": true,
        "landmarkViewException": "EXCEPTION_UNSPECIFIED",
        "oceanView": true,
        "oceanViewException": "EXCEPTION_UNSPECIFIED",
        "poolView": true,
        "poolViewException": "EXCEPTION_UNSPECIFIED",
        "valleyView": true,
        "valleyViewException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "business": {
      "businessCenter": true,
      "businessCenterException": "EXCEPTION_UNSPECIFIED",
      "meetingRooms": true,
      "meetingRoomsCount": 0,
      "meetingRoomsCountException": "EXCEPTION_UNSPECIFIED",
      "meetingRoomsException": "EXCEPTION_UNSPECIFIED"
    },
    "commonLivingArea": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "connectivity": {
      "freeWifi": true,
      "freeWifiException": "EXCEPTION_UNSPECIFIED",
      "publicAreaWifiAvailable": true,
      "publicAreaWifiAvailableException": "EXCEPTION_UNSPECIFIED",
      "publicInternetTerminal": true,
      "publicInternetTerminalException": "EXCEPTION_UNSPECIFIED",
      "wifiAvailable": true,
      "wifiAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "families": {
      "babysitting": true,
      "babysittingException": "EXCEPTION_UNSPECIFIED",
      "kidsActivities": true,
      "kidsActivitiesException": "EXCEPTION_UNSPECIFIED",
      "kidsClub": true,
      "kidsClubException": "EXCEPTION_UNSPECIFIED"
    },
    "foodAndDrink": {
      "bar": true,
      "barException": "EXCEPTION_UNSPECIFIED",
      "breakfastAvailable": true,
      "breakfastAvailableException": "EXCEPTION_UNSPECIFIED",
      "breakfastBuffet": true,
      "breakfastBuffetException": "EXCEPTION_UNSPECIFIED",
      "buffet": true,
      "buffetException": "EXCEPTION_UNSPECIFIED",
      "dinnerBuffet": true,
      "dinnerBuffetException": "EXCEPTION_UNSPECIFIED",
      "freeBreakfast": true,
      "freeBreakfastException": "EXCEPTION_UNSPECIFIED",
      "restaurant": true,
      "restaurantException": "EXCEPTION_UNSPECIFIED",
      "restaurantsCount": 0,
      "restaurantsCountException": "EXCEPTION_UNSPECIFIED",
      "roomService": true,
      "roomServiceException": "EXCEPTION_UNSPECIFIED",
      "tableService": true,
      "tableServiceException": "EXCEPTION_UNSPECIFIED",
      "twentyFourHourRoomService": true,
      "twentyFourHourRoomServiceException": "EXCEPTION_UNSPECIFIED",
      "vendingMachine": true,
      "vendingMachineException": "EXCEPTION_UNSPECIFIED"
    },
    "guestUnits": [
      {
        "codes": [
          "string"
        ],
        "features": {
          "bungalowOrVilla": true,
          "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
          "connectingUnitAvailable": true,
          "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
          "executiveFloor": true,
          "executiveFloorException": "EXCEPTION_UNSPECIFIED",
          "maxAdultOccupantsCount": 0,
          "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "maxChildOccupantsCount": 0,
          "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "maxOccupantsCount": 0,
          "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
          "privateHome": true,
          "privateHomeException": "EXCEPTION_UNSPECIFIED",
          "suite": true,
          "suiteException": "EXCEPTION_UNSPECIFIED",
          "tier": "UNIT_TIER_UNSPECIFIED",
          "tierException": "EXCEPTION_UNSPECIFIED",
          "totalLivingAreas": {
            "accessibility": {
              "adaCompliantUnit": true,
              "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleDoorbell": true,
              "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleFireAlarm": true,
              "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
              "hearingAccessibleUnit": true,
              "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleBathtub": true,
              "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleShower": true,
              "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleToilet": true,
              "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
              "mobilityAccessibleUnit": true,
              "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
            },
            "eating": {
              "coffeeMaker": true,
              "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
              "cookware": true,
              "cookwareException": "EXCEPTION_UNSPECIFIED",
              "dishwasher": true,
              "dishwasherException": "EXCEPTION_UNSPECIFIED",
              "indoorGrill": true,
              "indoorGrillException": "EXCEPTION_UNSPECIFIED",
              "kettle": true,
              "kettleException": "EXCEPTION_UNSPECIFIED",
              "kitchenAvailable": true,
              "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
              "microwave": true,
              "microwaveException": "EXCEPTION_UNSPECIFIED",
              "minibar": true,
              "minibarException": "EXCEPTION_UNSPECIFIED",
              "outdoorGrill": true,
              "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
              "oven": true,
              "ovenException": "EXCEPTION_UNSPECIFIED",
              "refrigerator": true,
              "refrigeratorException": "EXCEPTION_UNSPECIFIED",
              "sink": true,
              "sinkException": "EXCEPTION_UNSPECIFIED",
              "snackbar": true,
              "snackbarException": "EXCEPTION_UNSPECIFIED",
              "stove": true,
              "stoveException": "EXCEPTION_UNSPECIFIED",
              "teaStation": true,
              "teaStationException": "EXCEPTION_UNSPECIFIED",
              "toaster": true,
              "toasterException": "EXCEPTION_UNSPECIFIED"
            },
            "features": {
              "airConditioning": true,
              "airConditioningException": "EXCEPTION_UNSPECIFIED",
              "bathtub": true,
              "bathtubException": "EXCEPTION_UNSPECIFIED",
              "bidet": true,
              "bidetException": "EXCEPTION_UNSPECIFIED",
              "dryer": true,
              "dryerException": "EXCEPTION_UNSPECIFIED",
              "electronicRoomKey": true,
              "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
              "fireplace": true,
              "fireplaceException": "EXCEPTION_UNSPECIFIED",
              "hairdryer": true,
              "hairdryerException": "EXCEPTION_UNSPECIFIED",
              "heating": true,
              "heatingException": "EXCEPTION_UNSPECIFIED",
              "inunitSafe": true,
              "inunitSafeException": "EXCEPTION_UNSPECIFIED",
              "inunitWifiAvailable": true,
              "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
              "ironingEquipment": true,
              "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
              "payPerViewMovies": true,
              "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
              "privateBathroom": true,
              "privateBathroomException": "EXCEPTION_UNSPECIFIED",
              "shower": true,
              "showerException": "EXCEPTION_UNSPECIFIED",
              "toilet": true,
              "toiletException": "EXCEPTION_UNSPECIFIED",
              "tv": true,
              "tvCasting": true,
              "tvCastingException": "EXCEPTION_UNSPECIFIED",
              "tvException": "EXCEPTION_UNSPECIFIED",
              "tvStreaming": true,
              "tvStreamingException": "EXCEPTION_UNSPECIFIED",
              "universalPowerAdapters": true,
              "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
              "washer": true,
              "washerException": "EXCEPTION_UNSPECIFIED"
            },
            "layout": {
              "balcony": true,
              "balconyException": "EXCEPTION_UNSPECIFIED",
              "livingAreaSqMeters": 0,
              "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
              "loft": true,
              "loftException": "EXCEPTION_UNSPECIFIED",
              "nonSmoking": true,
              "nonSmokingException": "EXCEPTION_UNSPECIFIED",
              "patio": true,
              "patioException": "EXCEPTION_UNSPECIFIED",
              "stairs": true,
              "stairsException": "EXCEPTION_UNSPECIFIED"
            },
            "sleeping": {
              "bedsCount": 0,
              "bedsCountException": "EXCEPTION_UNSPECIFIED",
              "bunkBedsCount": 0,
              "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
              "cribsCount": 0,
              "cribsCountException": "EXCEPTION_UNSPECIFIED",
              "doubleBedsCount": 0,
              "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
              "featherPillows": true,
              "featherPillowsException": "EXCEPTION_UNSPECIFIED",
              "hypoallergenicBedding": true,
              "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
              "kingBedsCount": 0,
              "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
              "memoryFoamPillows": true,
              "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
              "otherBedsCount": 0,
              "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
              "queenBedsCount": 0,
              "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
              "rollAwayBedsCount": 0,
              "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
              "singleOrTwinBedsCount": 0,
              "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
              "sofaBedsCount": 0,
              "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
              "syntheticPillows": true,
              "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
            }
          },
          "views": {
            "beachView": true,
            "beachViewException": "EXCEPTION_UNSPECIFIED",
            "cityView": true,
            "cityViewException": "EXCEPTION_UNSPECIFIED",
            "gardenView": true,
            "gardenViewException": "EXCEPTION_UNSPECIFIED",
            "lakeView": true,
            "lakeViewException": "EXCEPTION_UNSPECIFIED",
            "landmarkView": true,
            "landmarkViewException": "EXCEPTION_UNSPECIFIED",
            "oceanView": true,
            "oceanViewException": "EXCEPTION_UNSPECIFIED",
            "poolView": true,
            "poolViewException": "EXCEPTION_UNSPECIFIED",
            "valleyView": true,
            "valleyViewException": "EXCEPTION_UNSPECIFIED"
          }
        },
        "label": "string"
      }
    ],
    "healthAndSafety": {
      "enhancedCleaning": {
        "commercialGradeDisinfectantCleaning": true,
        "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
        "commonAreasEnhancedCleaning": true,
        "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
        "employeesTrainedCleaningProcedures": true,
        "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
        "employeesTrainedThoroughHandWashing": true,
        "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
        "employeesWearProtectiveEquipment": true,
        "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
        "guestRoomsEnhancedCleaning": true,
        "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
      },
      "increasedFoodSafety": {
        "diningAreasAdditionalSanitation": true,
        "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
        "disposableFlatware": true,
        "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
        "foodPreparationAndServingAdditionalSafety": true,
        "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
        "individualPackagedMeals": true,
        "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
        "singleUseFoodMenus": true,
        "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
      },
      "minimizedContact": {
        "contactlessCheckinCheckout": true,
        "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
        "digitalGuestRoomKeys": true,
        "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
        "housekeepingScheduledRequestOnly": true,
        "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
        "noHighTouchItemsCommonAreas": true,
        "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
        "noHighTouchItemsGuestRooms": true,
        "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
        "plasticKeycardsDisinfected": true,
        "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
        "roomBookingsBuffer": true,
        "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
      },
      "personalProtection": {
        "commonAreasOfferSanitizingItems": true,
        "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
        "faceMaskRequired": true,
        "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
        "guestRoomHygieneKitsAvailable": true,
        "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
        "protectiveEquipmentAvailable": true,
        "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
      },
      "physicalDistancing": {
        "commonAreasPhysicalDistancingArranged": true,
        "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
        "physicalDistancingRequired": true,
        "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
        "safetyDividers": true,
        "safetyDividersException": "EXCEPTION_UNSPECIFIED",
        "sharedAreasLimitedOccupancy": true,
        "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
        "wellnessAreasHavePrivateSpaces": true,
        "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "housekeeping": {
      "dailyHousekeeping": true,
      "dailyHousekeepingException": "EXCEPTION_UNSPECIFIED",
      "housekeepingAvailable": true,
      "housekeepingAvailableException": "EXCEPTION_UNSPECIFIED",
      "turndownService": true,
      "turndownServiceException": "EXCEPTION_UNSPECIFIED"
    },
    "metadata": {
      "updateTime": "string"
    },
    "name": "string",
    "parking": {
      "electricCarChargingStations": true,
      "electricCarChargingStationsException": "EXCEPTION_UNSPECIFIED",
      "freeParking": true,
      "freeParkingException": "EXCEPTION_UNSPECIFIED",
      "freeSelfParking": true,
      "freeSelfParkingException": "EXCEPTION_UNSPECIFIED",
      "freeValetParking": true,
      "freeValetParkingException": "EXCEPTION_UNSPECIFIED",
      "parkingAvailable": true,
      "parkingAvailableException": "EXCEPTION_UNSPECIFIED",
      "selfParkingAvailable": true,
      "selfParkingAvailableException": "EXCEPTION_UNSPECIFIED",
      "valetParkingAvailable": true,
      "valetParkingAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "pets": {
      "catsAllowed": true,
      "catsAllowedException": "EXCEPTION_UNSPECIFIED",
      "dogsAllowed": true,
      "dogsAllowedException": "EXCEPTION_UNSPECIFIED",
      "petsAllowed": true,
      "petsAllowedException": "EXCEPTION_UNSPECIFIED",
      "petsAllowedFree": true,
      "petsAllowedFreeException": "EXCEPTION_UNSPECIFIED"
    },
    "policies": {
      "allInclusiveAvailable": true,
      "allInclusiveAvailableException": "EXCEPTION_UNSPECIFIED",
      "allInclusiveOnly": true,
      "allInclusiveOnlyException": "EXCEPTION_UNSPECIFIED",
      "checkinTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "checkinTimeException": "EXCEPTION_UNSPECIFIED",
      "checkoutTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "checkoutTimeException": "EXCEPTION_UNSPECIFIED",
      "kidsStayFree": true,
      "kidsStayFreeException": "EXCEPTION_UNSPECIFIED",
      "maxChildAge": 0,
      "maxChildAgeException": "EXCEPTION_UNSPECIFIED",
      "maxKidsStayFreeCount": 0,
      "maxKidsStayFreeCountException": "EXCEPTION_UNSPECIFIED",
      "paymentOptions": {
        "cash": true,
        "cashException": "EXCEPTION_UNSPECIFIED",
        "cheque": true,
        "chequeException": "EXCEPTION_UNSPECIFIED",
        "creditCard": true,
        "creditCardException": "EXCEPTION_UNSPECIFIED",
        "debitCard": true,
        "debitCardException": "EXCEPTION_UNSPECIFIED",
        "mobileNfc": true,
        "mobileNfcException": "EXCEPTION_UNSPECIFIED"
      },
      "smokeFreeProperty": true,
      "smokeFreePropertyException": "EXCEPTION_UNSPECIFIED"
    },
    "pools": {
      "adultPool": true,
      "adultPoolException": "EXCEPTION_UNSPECIFIED",
      "hotTub": true,
      "hotTubException": "EXCEPTION_UNSPECIFIED",
      "indoorPool": true,
      "indoorPoolException": "EXCEPTION_UNSPECIFIED",
      "indoorPoolsCount": 0,
      "indoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
      "lazyRiver": true,
      "lazyRiverException": "EXCEPTION_UNSPECIFIED",
      "lifeguard": true,
      "lifeguardException": "EXCEPTION_UNSPECIFIED",
      "outdoorPool": true,
      "outdoorPoolException": "EXCEPTION_UNSPECIFIED",
      "outdoorPoolsCount": 0,
      "outdoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
      "pool": true,
      "poolException": "EXCEPTION_UNSPECIFIED",
      "poolsCount": 0,
      "poolsCountException": "EXCEPTION_UNSPECIFIED",
      "wadingPool": true,
      "wadingPoolException": "EXCEPTION_UNSPECIFIED",
      "waterPark": true,
      "waterParkException": "EXCEPTION_UNSPECIFIED",
      "waterslide": true,
      "waterslideException": "EXCEPTION_UNSPECIFIED",
      "wavePool": true,
      "wavePoolException": "EXCEPTION_UNSPECIFIED"
    },
    "property": {
      "builtYear": 0,
      "builtYearException": "EXCEPTION_UNSPECIFIED",
      "floorsCount": 0,
      "floorsCountException": "EXCEPTION_UNSPECIFIED",
      "lastRenovatedYear": 0,
      "lastRenovatedYearException": "EXCEPTION_UNSPECIFIED",
      "roomsCount": 0,
      "roomsCountException": "EXCEPTION_UNSPECIFIED"
    },
    "services": {
      "baggageStorage": true,
      "baggageStorageException": "EXCEPTION_UNSPECIFIED",
      "concierge": true,
      "conciergeException": "EXCEPTION_UNSPECIFIED",
      "convenienceStore": true,
      "convenienceStoreException": "EXCEPTION_UNSPECIFIED",
      "currencyExchange": true,
      "currencyExchangeException": "EXCEPTION_UNSPECIFIED",
      "elevator": true,
      "elevatorException": "EXCEPTION_UNSPECIFIED",
      "frontDesk": true,
      "frontDeskException": "EXCEPTION_UNSPECIFIED",
      "fullServiceLaundry": true,
      "fullServiceLaundryException": "EXCEPTION_UNSPECIFIED",
      "giftShop": true,
      "giftShopException": "EXCEPTION_UNSPECIFIED",
      "languagesSpoken": {
        "arabicSpoken": true,
        "arabicSpokenException": "EXCEPTION_UNSPECIFIED",
        "cantoneseSpoken": true,
        "cantoneseSpokenException": "EXCEPTION_UNSPECIFIED",
        "dutchSpoken": true,
        "dutchSpokenException": "EXCEPTION_UNSPECIFIED",
        "englishSpoken": true,
        "englishSpokenException": "EXCEPTION_UNSPECIFIED",
        "filipinoSpoken": true,
        "filipinoSpokenException": "EXCEPTION_UNSPECIFIED",
        "frenchSpoken": true,
        "frenchSpokenException": "EXCEPTION_UNSPECIFIED",
        "germanSpoken": true,
        "germanSpokenException": "EXCEPTION_UNSPECIFIED",
        "hindiSpoken": true,
        "hindiSpokenException": "EXCEPTION_UNSPECIFIED",
        "indonesianSpoken": true,
        "indonesianSpokenException": "EXCEPTION_UNSPECIFIED",
        "italianSpoken": true,
        "italianSpokenException": "EXCEPTION_UNSPECIFIED",
        "japaneseSpoken": true,
        "japaneseSpokenException": "EXCEPTION_UNSPECIFIED",
        "koreanSpoken": true,
        "koreanSpokenException": "EXCEPTION_UNSPECIFIED",
        "mandarinSpoken": true,
        "mandarinSpokenException": "EXCEPTION_UNSPECIFIED",
        "portugueseSpoken": true,
        "portugueseSpokenException": "EXCEPTION_UNSPECIFIED",
        "russianSpoken": true,
        "russianSpokenException": "EXCEPTION_UNSPECIFIED",
        "spanishSpoken": true,
        "spanishSpokenException": "EXCEPTION_UNSPECIFIED",
        "vietnameseSpoken": true,
        "vietnameseSpokenException": "EXCEPTION_UNSPECIFIED"
      },
      "selfServiceLaundry": true,
      "selfServiceLaundryException": "EXCEPTION_UNSPECIFIED",
      "socialHour": true,
      "socialHourException": "EXCEPTION_UNSPECIFIED",
      "twentyFourHourFrontDesk": true,
      "twentyFourHourFrontDeskException": "EXCEPTION_UNSPECIFIED",
      "wakeUpCalls": true,
      "wakeUpCallsException": "EXCEPTION_UNSPECIFIED"
    },
    "someUnits": {
      "bungalowOrVilla": true,
      "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
      "connectingUnitAvailable": true,
      "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
      "executiveFloor": true,
      "executiveFloorException": "EXCEPTION_UNSPECIFIED",
      "maxAdultOccupantsCount": 0,
      "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxChildOccupantsCount": 0,
      "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "maxOccupantsCount": 0,
      "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
      "privateHome": true,
      "privateHomeException": "EXCEPTION_UNSPECIFIED",
      "suite": true,
      "suiteException": "EXCEPTION_UNSPECIFIED",
      "tier": "UNIT_TIER_UNSPECIFIED",
      "tierException": "EXCEPTION_UNSPECIFIED",
      "totalLivingAreas": {
        "accessibility": {
          "adaCompliantUnit": true,
          "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleDoorbell": true,
          "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleFireAlarm": true,
          "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
          "hearingAccessibleUnit": true,
          "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleBathtub": true,
          "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleShower": true,
          "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleToilet": true,
          "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
          "mobilityAccessibleUnit": true,
          "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
        },
        "eating": {
          "coffeeMaker": true,
          "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
          "cookware": true,
          "cookwareException": "EXCEPTION_UNSPECIFIED",
          "dishwasher": true,
          "dishwasherException": "EXCEPTION_UNSPECIFIED",
          "indoorGrill": true,
          "indoorGrillException": "EXCEPTION_UNSPECIFIED",
          "kettle": true,
          "kettleException": "EXCEPTION_UNSPECIFIED",
          "kitchenAvailable": true,
          "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
          "microwave": true,
          "microwaveException": "EXCEPTION_UNSPECIFIED",
          "minibar": true,
          "minibarException": "EXCEPTION_UNSPECIFIED",
          "outdoorGrill": true,
          "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
          "oven": true,
          "ovenException": "EXCEPTION_UNSPECIFIED",
          "refrigerator": true,
          "refrigeratorException": "EXCEPTION_UNSPECIFIED",
          "sink": true,
          "sinkException": "EXCEPTION_UNSPECIFIED",
          "snackbar": true,
          "snackbarException": "EXCEPTION_UNSPECIFIED",
          "stove": true,
          "stoveException": "EXCEPTION_UNSPECIFIED",
          "teaStation": true,
          "teaStationException": "EXCEPTION_UNSPECIFIED",
          "toaster": true,
          "toasterException": "EXCEPTION_UNSPECIFIED"
        },
        "features": {
          "airConditioning": true,
          "airConditioningException": "EXCEPTION_UNSPECIFIED",
          "bathtub": true,
          "bathtubException": "EXCEPTION_UNSPECIFIED",
          "bidet": true,
          "bidetException": "EXCEPTION_UNSPECIFIED",
          "dryer": true,
          "dryerException": "EXCEPTION_UNSPECIFIED",
          "electronicRoomKey": true,
          "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
          "fireplace": true,
          "fireplaceException": "EXCEPTION_UNSPECIFIED",
          "hairdryer": true,
          "hairdryerException": "EXCEPTION_UNSPECIFIED",
          "heating": true,
          "heatingException": "EXCEPTION_UNSPECIFIED",
          "inunitSafe": true,
          "inunitSafeException": "EXCEPTION_UNSPECIFIED",
          "inunitWifiAvailable": true,
          "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
          "ironingEquipment": true,
          "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
          "payPerViewMovies": true,
          "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
          "privateBathroom": true,
          "privateBathroomException": "EXCEPTION_UNSPECIFIED",
          "shower": true,
          "showerException": "EXCEPTION_UNSPECIFIED",
          "toilet": true,
          "toiletException": "EXCEPTION_UNSPECIFIED",
          "tv": true,
          "tvCasting": true,
          "tvCastingException": "EXCEPTION_UNSPECIFIED",
          "tvException": "EXCEPTION_UNSPECIFIED",
          "tvStreaming": true,
          "tvStreamingException": "EXCEPTION_UNSPECIFIED",
          "universalPowerAdapters": true,
          "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
          "washer": true,
          "washerException": "EXCEPTION_UNSPECIFIED"
        },
        "layout": {
          "balcony": true,
          "balconyException": "EXCEPTION_UNSPECIFIED",
          "livingAreaSqMeters": 0,
          "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
          "loft": true,
          "loftException": "EXCEPTION_UNSPECIFIED",
          "nonSmoking": true,
          "nonSmokingException": "EXCEPTION_UNSPECIFIED",
          "patio": true,
          "patioException": "EXCEPTION_UNSPECIFIED",
          "stairs": true,
          "stairsException": "EXCEPTION_UNSPECIFIED"
        },
        "sleeping": {
          "bedsCount": 0,
          "bedsCountException": "EXCEPTION_UNSPECIFIED",
          "bunkBedsCount": 0,
          "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
          "cribsCount": 0,
          "cribsCountException": "EXCEPTION_UNSPECIFIED",
          "doubleBedsCount": 0,
          "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
          "featherPillows": true,
          "featherPillowsException": "EXCEPTION_UNSPECIFIED",
          "hypoallergenicBedding": true,
          "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
          "kingBedsCount": 0,
          "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
          "memoryFoamPillows": true,
          "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
          "otherBedsCount": 0,
          "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
          "queenBedsCount": 0,
          "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
          "rollAwayBedsCount": 0,
          "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
          "singleOrTwinBedsCount": 0,
          "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
          "sofaBedsCount": 0,
          "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
          "syntheticPillows": true,
          "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
        }
      },
      "views": {
        "beachView": true,
        "beachViewException": "EXCEPTION_UNSPECIFIED",
        "cityView": true,
        "cityViewException": "EXCEPTION_UNSPECIFIED",
        "gardenView": true,
        "gardenViewException": "EXCEPTION_UNSPECIFIED",
        "lakeView": true,
        "lakeViewException": "EXCEPTION_UNSPECIFIED",
        "landmarkView": true,
        "landmarkViewException": "EXCEPTION_UNSPECIFIED",
        "oceanView": true,
        "oceanViewException": "EXCEPTION_UNSPECIFIED",
        "poolView": true,
        "poolViewException": "EXCEPTION_UNSPECIFIED",
        "valleyView": true,
        "valleyViewException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "transportation": {
      "airportShuttle": true,
      "airportShuttleException": "EXCEPTION_UNSPECIFIED",
      "carRentalOnProperty": true,
      "carRentalOnPropertyException": "EXCEPTION_UNSPECIFIED",
      "freeAirportShuttle": true,
      "freeAirportShuttleException": "EXCEPTION_UNSPECIFIED",
      "freePrivateCarService": true,
      "freePrivateCarServiceException": "EXCEPTION_UNSPECIFIED",
      "localShuttle": true,
      "localShuttleException": "EXCEPTION_UNSPECIFIED",
      "privateCarService": true,
      "privateCarServiceException": "EXCEPTION_UNSPECIFIED",
      "transfer": true,
      "transferException": "EXCEPTION_UNSPECIFIED"
    },
    "wellness": {
      "doctorOnCall": true,
      "doctorOnCallException": "EXCEPTION_UNSPECIFIED",
      "ellipticalMachine": true,
      "ellipticalMachineException": "EXCEPTION_UNSPECIFIED",
      "fitnessCenter": true,
      "fitnessCenterException": "EXCEPTION_UNSPECIFIED",
      "freeFitnessCenter": true,
      "freeFitnessCenterException": "EXCEPTION_UNSPECIFIED",
      "freeWeights": true,
      "freeWeightsException": "EXCEPTION_UNSPECIFIED",
      "massage": true,
      "massageException": "EXCEPTION_UNSPECIFIED",
      "salon": true,
      "salonException": "EXCEPTION_UNSPECIFIED",
      "sauna": true,
      "saunaException": "EXCEPTION_UNSPECIFIED",
      "spa": true,
      "spaException": "EXCEPTION_UNSPECIFIED",
      "treadmill": true,
      "treadmillException": "EXCEPTION_UNSPECIFIED",
      "weightMachine": true,
      "weightMachineException": "EXCEPTION_UNSPECIFIED"
    }
  }
}
```

Response message for LodgingService.GetGoogleUpdatedLodging

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diffMask|string(google-fieldmask)|false|none|Required. The fields in the Lodging that have been updated by Google. Repeated field items are not individually specified.|
|lodging|[Lodging](#schemalodging)|false|none|Required. The Google updated Lodging.|

<h2 id="tocS_GoogleLocation">GoogleLocation</h2>
<!-- backwards compatibility -->
<a id="schemagooglelocation"></a>
<a id="schema_GoogleLocation"></a>
<a id="tocSgooglelocation"></a>
<a id="tocsgooglelocation"></a>

```json
{
  "location": {
    "adWordsLocationExtensions": {
      "adPhone": "string"
    },
    "additionalCategories": [
      {
        "categoryId": "string",
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      }
    ],
    "additionalPhones": [
      "string"
    ],
    "address": {
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
    "attributes": [
      {
        "attributeId": "string",
        "repeatedEnumValue": {
          "setValues": [
            "string"
          ],
          "unsetValues": [
            "string"
          ]
        },
        "urlValues": [
          {
            "url": "string"
          }
        ],
        "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
        "values": [
          null
        ]
      }
    ],
    "labels": [
      "string"
    ],
    "languageCode": "string",
    "latlng": {
      "latitude": 0,
      "longitude": 0
    },
    "locationKey": {
      "explicitNoPlaceId": true,
      "placeId": "string",
      "plusPageId": "string",
      "requestId": "string"
    },
    "locationName": "string",
    "locationState": {
      "canDelete": true,
      "canHaveFoodMenus": true,
      "canModifyServiceList": true,
      "canOperateHealthData": true,
      "canOperateLodgingData": true,
      "canUpdate": true,
      "hasPendingEdits": true,
      "hasPendingVerification": true,
      "isDisabled": true,
      "isDisconnected": true,
      "isDuplicate": true,
      "isGoogleUpdated": true,
      "isLocalPostApiDisabled": true,
      "isPendingReview": true,
      "isPublished": true,
      "isSuspended": true,
      "isVerified": true,
      "needsReverification": true
    },
    "metadata": {
      "duplicate": {
        "access": "ACCESS_UNSPECIFIED",
        "locationName": "string",
        "placeId": "string"
      },
      "mapsUrl": "string",
      "newReviewUrl": "string"
    },
    "moreHours": [
      {
        "hoursTypeId": "string",
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": "string",
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": "string"
          }
        ]
      }
    ],
    "name": "string",
    "openInfo": {
      "canReopen": true,
      "openingDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
    },
    "priceLists": [
      {
        "labels": [
          {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        ],
        "priceListId": "string",
        "sections": [
          {
            "items": [
              {
                "itemId": "string",
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ],
                "price": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                }
              }
            ],
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ],
            "sectionId": "string",
            "sectionType": "SECTION_TYPE_UNSPECIFIED"
          }
        ],
        "sourceUrl": "string"
      }
    ],
    "primaryCategory": {
      "categoryId": "string",
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    },
    "primaryPhone": "string",
    "profile": {
      "description": "string"
    },
    "regularHours": {
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": "string",
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": "string"
        }
      ]
    },
    "relationshipData": {
      "parentChain": "string"
    },
    "serviceArea": {
      "businessType": "BUSINESS_TYPE_UNSPECIFIED",
      "places": {
        "placeInfos": [
          {
            "name": "string",
            "placeId": "string"
          }
        ]
      },
      "radius": {
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "radiusKm": 0
      }
    },
    "specialHours": {
      "specialHourPeriods": [
        {
          "closeTime": "string",
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "isClosed": true,
          "openTime": "string",
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "storeCode": "string",
    "websiteUrl": "string"
  },
  "name": "string",
  "requestAdminRightsUrl": "string"
}
```

Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[Location](#schemalocation)|false|none|The sparsely populated Location information. This field can be re-used in CreateLocation if it is not currently claimed by a user.|
|name|string|false|none|Resource name of this GoogleLocation, in the format `googleLocations/{googleLocationId}`.|
|requestAdminRightsUrl|string|false|none|A URL that will redirect the user to the request admin rights UI. This field is only present if the location has already been claimed by any user, including the current user.|

<h2 id="tocS_GoogleUpdatedLocation">GoogleUpdatedLocation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleupdatedlocation"></a>
<a id="schema_GoogleUpdatedLocation"></a>
<a id="tocSgoogleupdatedlocation"></a>
<a id="tocsgoogleupdatedlocation"></a>

```json
{
  "diffMask": "string",
  "location": {
    "adWordsLocationExtensions": {
      "adPhone": "string"
    },
    "additionalCategories": [
      {
        "categoryId": "string",
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      }
    ],
    "additionalPhones": [
      "string"
    ],
    "address": {
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
    "attributes": [
      {
        "attributeId": "string",
        "repeatedEnumValue": {
          "setValues": [
            "string"
          ],
          "unsetValues": [
            "string"
          ]
        },
        "urlValues": [
          {
            "url": "string"
          }
        ],
        "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
        "values": [
          null
        ]
      }
    ],
    "labels": [
      "string"
    ],
    "languageCode": "string",
    "latlng": {
      "latitude": 0,
      "longitude": 0
    },
    "locationKey": {
      "explicitNoPlaceId": true,
      "placeId": "string",
      "plusPageId": "string",
      "requestId": "string"
    },
    "locationName": "string",
    "locationState": {
      "canDelete": true,
      "canHaveFoodMenus": true,
      "canModifyServiceList": true,
      "canOperateHealthData": true,
      "canOperateLodgingData": true,
      "canUpdate": true,
      "hasPendingEdits": true,
      "hasPendingVerification": true,
      "isDisabled": true,
      "isDisconnected": true,
      "isDuplicate": true,
      "isGoogleUpdated": true,
      "isLocalPostApiDisabled": true,
      "isPendingReview": true,
      "isPublished": true,
      "isSuspended": true,
      "isVerified": true,
      "needsReverification": true
    },
    "metadata": {
      "duplicate": {
        "access": "ACCESS_UNSPECIFIED",
        "locationName": "string",
        "placeId": "string"
      },
      "mapsUrl": "string",
      "newReviewUrl": "string"
    },
    "moreHours": [
      {
        "hoursTypeId": "string",
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": "string",
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": "string"
          }
        ]
      }
    ],
    "name": "string",
    "openInfo": {
      "canReopen": true,
      "openingDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
    },
    "priceLists": [
      {
        "labels": [
          {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        ],
        "priceListId": "string",
        "sections": [
          {
            "items": [
              {
                "itemId": "string",
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ],
                "price": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                }
              }
            ],
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ],
            "sectionId": "string",
            "sectionType": "SECTION_TYPE_UNSPECIFIED"
          }
        ],
        "sourceUrl": "string"
      }
    ],
    "primaryCategory": {
      "categoryId": "string",
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    },
    "primaryPhone": "string",
    "profile": {
      "description": "string"
    },
    "regularHours": {
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": "string",
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": "string"
        }
      ]
    },
    "relationshipData": {
      "parentChain": "string"
    },
    "serviceArea": {
      "businessType": "BUSINESS_TYPE_UNSPECIFIED",
      "places": {
        "placeInfos": [
          {
            "name": "string",
            "placeId": "string"
          }
        ]
      },
      "radius": {
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "radiusKm": 0
      }
    },
    "specialHours": {
      "specialHourPeriods": [
        {
          "closeTime": "string",
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "isClosed": true,
          "openTime": "string",
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "storeCode": "string",
    "websiteUrl": "string"
  }
}
```

Represents a location that was modified by Google.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diffMask|string(google-fieldmask)|false|none|The fields that Google updated.|
|location|[Location](#schemalocation)|false|none|The Google-updated version of this location.|

<h2 id="tocS_GuestUnitFeatures">GuestUnitFeatures</h2>
<!-- backwards compatibility -->
<a id="schemaguestunitfeatures"></a>
<a id="schema_GuestUnitFeatures"></a>
<a id="tocSguestunitfeatures"></a>
<a id="tocsguestunitfeatures"></a>

```json
{
  "bungalowOrVilla": true,
  "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
  "connectingUnitAvailable": true,
  "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
  "executiveFloor": true,
  "executiveFloorException": "EXCEPTION_UNSPECIFIED",
  "maxAdultOccupantsCount": 0,
  "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
  "maxChildOccupantsCount": 0,
  "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
  "maxOccupantsCount": 0,
  "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
  "privateHome": true,
  "privateHomeException": "EXCEPTION_UNSPECIFIED",
  "suite": true,
  "suiteException": "EXCEPTION_UNSPECIFIED",
  "tier": "UNIT_TIER_UNSPECIFIED",
  "tierException": "EXCEPTION_UNSPECIFIED",
  "totalLivingAreas": {
    "accessibility": {
      "adaCompliantUnit": true,
      "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleDoorbell": true,
      "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleFireAlarm": true,
      "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleUnit": true,
      "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleBathtub": true,
      "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleShower": true,
      "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleToilet": true,
      "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleUnit": true,
      "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
    },
    "eating": {
      "coffeeMaker": true,
      "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
      "cookware": true,
      "cookwareException": "EXCEPTION_UNSPECIFIED",
      "dishwasher": true,
      "dishwasherException": "EXCEPTION_UNSPECIFIED",
      "indoorGrill": true,
      "indoorGrillException": "EXCEPTION_UNSPECIFIED",
      "kettle": true,
      "kettleException": "EXCEPTION_UNSPECIFIED",
      "kitchenAvailable": true,
      "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
      "microwave": true,
      "microwaveException": "EXCEPTION_UNSPECIFIED",
      "minibar": true,
      "minibarException": "EXCEPTION_UNSPECIFIED",
      "outdoorGrill": true,
      "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
      "oven": true,
      "ovenException": "EXCEPTION_UNSPECIFIED",
      "refrigerator": true,
      "refrigeratorException": "EXCEPTION_UNSPECIFIED",
      "sink": true,
      "sinkException": "EXCEPTION_UNSPECIFIED",
      "snackbar": true,
      "snackbarException": "EXCEPTION_UNSPECIFIED",
      "stove": true,
      "stoveException": "EXCEPTION_UNSPECIFIED",
      "teaStation": true,
      "teaStationException": "EXCEPTION_UNSPECIFIED",
      "toaster": true,
      "toasterException": "EXCEPTION_UNSPECIFIED"
    },
    "features": {
      "airConditioning": true,
      "airConditioningException": "EXCEPTION_UNSPECIFIED",
      "bathtub": true,
      "bathtubException": "EXCEPTION_UNSPECIFIED",
      "bidet": true,
      "bidetException": "EXCEPTION_UNSPECIFIED",
      "dryer": true,
      "dryerException": "EXCEPTION_UNSPECIFIED",
      "electronicRoomKey": true,
      "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
      "fireplace": true,
      "fireplaceException": "EXCEPTION_UNSPECIFIED",
      "hairdryer": true,
      "hairdryerException": "EXCEPTION_UNSPECIFIED",
      "heating": true,
      "heatingException": "EXCEPTION_UNSPECIFIED",
      "inunitSafe": true,
      "inunitSafeException": "EXCEPTION_UNSPECIFIED",
      "inunitWifiAvailable": true,
      "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
      "ironingEquipment": true,
      "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
      "payPerViewMovies": true,
      "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
      "privateBathroom": true,
      "privateBathroomException": "EXCEPTION_UNSPECIFIED",
      "shower": true,
      "showerException": "EXCEPTION_UNSPECIFIED",
      "toilet": true,
      "toiletException": "EXCEPTION_UNSPECIFIED",
      "tv": true,
      "tvCasting": true,
      "tvCastingException": "EXCEPTION_UNSPECIFIED",
      "tvException": "EXCEPTION_UNSPECIFIED",
      "tvStreaming": true,
      "tvStreamingException": "EXCEPTION_UNSPECIFIED",
      "universalPowerAdapters": true,
      "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
      "washer": true,
      "washerException": "EXCEPTION_UNSPECIFIED"
    },
    "layout": {
      "balcony": true,
      "balconyException": "EXCEPTION_UNSPECIFIED",
      "livingAreaSqMeters": 0,
      "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
      "loft": true,
      "loftException": "EXCEPTION_UNSPECIFIED",
      "nonSmoking": true,
      "nonSmokingException": "EXCEPTION_UNSPECIFIED",
      "patio": true,
      "patioException": "EXCEPTION_UNSPECIFIED",
      "stairs": true,
      "stairsException": "EXCEPTION_UNSPECIFIED"
    },
    "sleeping": {
      "bedsCount": 0,
      "bedsCountException": "EXCEPTION_UNSPECIFIED",
      "bunkBedsCount": 0,
      "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
      "cribsCount": 0,
      "cribsCountException": "EXCEPTION_UNSPECIFIED",
      "doubleBedsCount": 0,
      "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
      "featherPillows": true,
      "featherPillowsException": "EXCEPTION_UNSPECIFIED",
      "hypoallergenicBedding": true,
      "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
      "kingBedsCount": 0,
      "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
      "memoryFoamPillows": true,
      "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
      "otherBedsCount": 0,
      "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
      "queenBedsCount": 0,
      "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
      "rollAwayBedsCount": 0,
      "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
      "singleOrTwinBedsCount": 0,
      "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
      "sofaBedsCount": 0,
      "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
      "syntheticPillows": true,
      "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "views": {
    "beachView": true,
    "beachViewException": "EXCEPTION_UNSPECIFIED",
    "cityView": true,
    "cityViewException": "EXCEPTION_UNSPECIFIED",
    "gardenView": true,
    "gardenViewException": "EXCEPTION_UNSPECIFIED",
    "lakeView": true,
    "lakeViewException": "EXCEPTION_UNSPECIFIED",
    "landmarkView": true,
    "landmarkViewException": "EXCEPTION_UNSPECIFIED",
    "oceanView": true,
    "oceanViewException": "EXCEPTION_UNSPECIFIED",
    "poolView": true,
    "poolViewException": "EXCEPTION_UNSPECIFIED",
    "valleyView": true,
    "valleyViewException": "EXCEPTION_UNSPECIFIED"
  }
}
```

Features and available amenities in the guest unit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bungalowOrVilla|boolean|false|none|Bungalow or villa. An independent structure that is part of a hotel or resort that is rented to one party for a vacation stay. The hotel or resort may be completely comprised of bungalows or villas, or they may be one of several guestroom options. Guests in the bungalows or villas most often have the same, if not more, amenities and services offered to guests in other guestroom types.|
|bungalowOrVillaException|string|false|none|Bungalow or villa exception.|
|connectingUnitAvailable|boolean|false|none|Connecting unit available. A guestroom type that features access to an adjacent guestroom for the purpose of booking both rooms. Most often used by families who need more than one room to accommodate the number of people in their group.|
|connectingUnitAvailableException|string|false|none|Connecting unit available exception.|
|executiveFloor|boolean|false|none|Executive floor. A floor of the hotel where the guestrooms are only bookable by members of the hotel's frequent guest membership program. Benefits of this room class include access to a designated lounge which may or may not feature free breakfast, cocktails or other perks specific to members of the program.|
|executiveFloorException|string|false|none|Executive floor exception.|
|maxAdultOccupantsCount|integer(int32)|false|none|Max adult occupants count. The total number of adult guests allowed to stay overnight in the guestroom.|
|maxAdultOccupantsCountException|string|false|none|Max adult occupants count exception.|
|maxChildOccupantsCount|integer(int32)|false|none|Max child occupants count. The total number of children allowed to stay overnight in the room.|
|maxChildOccupantsCountException|string|false|none|Max child occupants count exception.|
|maxOccupantsCount|integer(int32)|false|none|Max occupants count. The total number of guests allowed to stay overnight in the guestroom.|
|maxOccupantsCountException|string|false|none|Max occupants count exception.|
|privateHome|boolean|false|none|Private home. A privately owned home (house, townhouse, apartment, cabin, bungalow etc) that may or not serve as the owner's residence, but is rented out in its entirety or by the room(s) to paying guest(s) for vacation stays. Not for lease-based, long-term residency.|
|privateHomeException|string|false|none|Private home exception.|
|suite|boolean|false|none|Suite. A guestroom category that implies both a bedroom area and a separate living area. There may or may not be full walls and doors separating the two areas, but regardless, they are very distinct. Does not mean a couch or chair in a bedroom.|
|suiteException|string|false|none|Suite exception.|
|tier|string|false|none|Tier. Classification of the unit based on available features/amenities. A non-standard tier is only permitted if at least one other unit type falls under the standard tier.|
|tierException|string|false|none|Tier exception.|
|totalLivingAreas|[LivingArea](#schemalivingarea)|false|none|Features available in the living areas in the guest unit.|
|views|[ViewsFromUnit](#schemaviewsfromunit)|false|none|Views available from the guest unit itself.|

#### Enumerated Values

|Property|Value|
|---|---|
|bungalowOrVillaException|EXCEPTION_UNSPECIFIED|
|bungalowOrVillaException|UNDER_CONSTRUCTION|
|bungalowOrVillaException|DEPENDENT_ON_SEASON|
|bungalowOrVillaException|DEPENDENT_ON_DAY_OF_WEEK|
|connectingUnitAvailableException|EXCEPTION_UNSPECIFIED|
|connectingUnitAvailableException|UNDER_CONSTRUCTION|
|connectingUnitAvailableException|DEPENDENT_ON_SEASON|
|connectingUnitAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|executiveFloorException|EXCEPTION_UNSPECIFIED|
|executiveFloorException|UNDER_CONSTRUCTION|
|executiveFloorException|DEPENDENT_ON_SEASON|
|executiveFloorException|DEPENDENT_ON_DAY_OF_WEEK|
|maxAdultOccupantsCountException|EXCEPTION_UNSPECIFIED|
|maxAdultOccupantsCountException|UNDER_CONSTRUCTION|
|maxAdultOccupantsCountException|DEPENDENT_ON_SEASON|
|maxAdultOccupantsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|maxChildOccupantsCountException|EXCEPTION_UNSPECIFIED|
|maxChildOccupantsCountException|UNDER_CONSTRUCTION|
|maxChildOccupantsCountException|DEPENDENT_ON_SEASON|
|maxChildOccupantsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|maxOccupantsCountException|EXCEPTION_UNSPECIFIED|
|maxOccupantsCountException|UNDER_CONSTRUCTION|
|maxOccupantsCountException|DEPENDENT_ON_SEASON|
|maxOccupantsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|privateHomeException|EXCEPTION_UNSPECIFIED|
|privateHomeException|UNDER_CONSTRUCTION|
|privateHomeException|DEPENDENT_ON_SEASON|
|privateHomeException|DEPENDENT_ON_DAY_OF_WEEK|
|suiteException|EXCEPTION_UNSPECIFIED|
|suiteException|UNDER_CONSTRUCTION|
|suiteException|DEPENDENT_ON_SEASON|
|suiteException|DEPENDENT_ON_DAY_OF_WEEK|
|tier|UNIT_TIER_UNSPECIFIED|
|tier|STANDARD_UNIT|
|tier|DELUXE_UNIT|
|tierException|EXCEPTION_UNSPECIFIED|
|tierException|UNDER_CONSTRUCTION|
|tierException|DEPENDENT_ON_SEASON|
|tierException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_GuestUnitType">GuestUnitType</h2>
<!-- backwards compatibility -->
<a id="schemaguestunittype"></a>
<a id="schema_GuestUnitType"></a>
<a id="tocSguestunittype"></a>
<a id="tocsguestunittype"></a>

```json
{
  "codes": [
    "string"
  ],
  "features": {
    "bungalowOrVilla": true,
    "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
    "connectingUnitAvailable": true,
    "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
    "executiveFloor": true,
    "executiveFloorException": "EXCEPTION_UNSPECIFIED",
    "maxAdultOccupantsCount": 0,
    "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxChildOccupantsCount": 0,
    "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxOccupantsCount": 0,
    "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "privateHome": true,
    "privateHomeException": "EXCEPTION_UNSPECIFIED",
    "suite": true,
    "suiteException": "EXCEPTION_UNSPECIFIED",
    "tier": "UNIT_TIER_UNSPECIFIED",
    "tierException": "EXCEPTION_UNSPECIFIED",
    "totalLivingAreas": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "views": {
      "beachView": true,
      "beachViewException": "EXCEPTION_UNSPECIFIED",
      "cityView": true,
      "cityViewException": "EXCEPTION_UNSPECIFIED",
      "gardenView": true,
      "gardenViewException": "EXCEPTION_UNSPECIFIED",
      "lakeView": true,
      "lakeViewException": "EXCEPTION_UNSPECIFIED",
      "landmarkView": true,
      "landmarkViewException": "EXCEPTION_UNSPECIFIED",
      "oceanView": true,
      "oceanViewException": "EXCEPTION_UNSPECIFIED",
      "poolView": true,
      "poolViewException": "EXCEPTION_UNSPECIFIED",
      "valleyView": true,
      "valleyViewException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "label": "string"
}
```

A specific type of unit primarily defined by its features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codes|[string]|false|none|Required. Unit or room code identifiers for a single GuestUnitType. Each code must be unique within a Lodging instance.|
|features|[GuestUnitFeatures](#schemaguestunitfeatures)|false|none|Features and available amenities of the GuestUnitType.|
|label|string|false|none|Required. Short, English label or name of the GuestUnitType. Target <50 chars.|

<h2 id="tocS_HealthAndSafety">HealthAndSafety</h2>
<!-- backwards compatibility -->
<a id="schemahealthandsafety"></a>
<a id="schema_HealthAndSafety"></a>
<a id="tocShealthandsafety"></a>
<a id="tocshealthandsafety"></a>

```json
{
  "enhancedCleaning": {
    "commercialGradeDisinfectantCleaning": true,
    "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
    "commonAreasEnhancedCleaning": true,
    "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
    "employeesTrainedCleaningProcedures": true,
    "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
    "employeesTrainedThoroughHandWashing": true,
    "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
    "employeesWearProtectiveEquipment": true,
    "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
    "guestRoomsEnhancedCleaning": true,
    "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
  },
  "increasedFoodSafety": {
    "diningAreasAdditionalSanitation": true,
    "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
    "disposableFlatware": true,
    "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
    "foodPreparationAndServingAdditionalSafety": true,
    "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
    "individualPackagedMeals": true,
    "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
    "singleUseFoodMenus": true,
    "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
  },
  "minimizedContact": {
    "contactlessCheckinCheckout": true,
    "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
    "digitalGuestRoomKeys": true,
    "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
    "housekeepingScheduledRequestOnly": true,
    "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
    "noHighTouchItemsCommonAreas": true,
    "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
    "noHighTouchItemsGuestRooms": true,
    "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
    "plasticKeycardsDisinfected": true,
    "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
    "roomBookingsBuffer": true,
    "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
  },
  "personalProtection": {
    "commonAreasOfferSanitizingItems": true,
    "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
    "faceMaskRequired": true,
    "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
    "guestRoomHygieneKitsAvailable": true,
    "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
    "protectiveEquipmentAvailable": true,
    "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
  },
  "physicalDistancing": {
    "commonAreasPhysicalDistancingArranged": true,
    "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
    "physicalDistancingRequired": true,
    "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
    "safetyDividers": true,
    "safetyDividersException": "EXCEPTION_UNSPECIFIED",
    "sharedAreasLimitedOccupancy": true,
    "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
    "wellnessAreasHavePrivateSpaces": true,
    "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
  }
}
```

Health and safety measures implemented by the hotel during COVID-19.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enhancedCleaning|[EnhancedCleaning](#schemaenhancedcleaning)|false|none|Enhanced cleaning measures implemented by the hotel during COVID-19.|
|increasedFoodSafety|[IncreasedFoodSafety](#schemaincreasedfoodsafety)|false|none|Increased food safety measures implemented by the hotel during COVID-19.|
|minimizedContact|[MinimizedContact](#schemaminimizedcontact)|false|none|Minimized contact measures implemented by the hotel during COVID-19.|
|personalProtection|[PersonalProtection](#schemapersonalprotection)|false|none|Personal protection measures implemented by the hotel during COVID-19.|
|physicalDistancing|[PhysicalDistancing](#schemaphysicaldistancing)|false|none|Physical distancing measures implemented by the hotel during COVID-19.|

<h2 id="tocS_HealthProviderAttributes">HealthProviderAttributes</h2>
<!-- backwards compatibility -->
<a id="schemahealthproviderattributes"></a>
<a id="schema_HealthProviderAttributes"></a>
<a id="tocShealthproviderattributes"></a>
<a id="tocshealthproviderattributes"></a>

```json
{
  "insuranceNetworks": [
    {
      "networkId": "string",
      "networkNames": {
        "property1": "string",
        "property2": "string"
      },
      "payerNames": {
        "property1": "string",
        "property2": "string"
      },
      "state": "NETWORK_STATE_UNSPECIFIED"
    }
  ],
  "name": "string"
}
```

The Health provider attributes linked with this location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insuranceNetworks|[[InsuranceNetwork](#schemainsurancenetwork)]|false|none|Optional. A list of insurance networks accpected by this location.|
|name|string|false|none|Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/healthProviderAttributes`|

<h2 id="tocS_Housekeeping">Housekeeping</h2>
<!-- backwards compatibility -->
<a id="schemahousekeeping"></a>
<a id="schema_Housekeeping"></a>
<a id="tocShousekeeping"></a>
<a id="tocshousekeeping"></a>

```json
{
  "dailyHousekeeping": true,
  "dailyHousekeepingException": "EXCEPTION_UNSPECIFIED",
  "housekeepingAvailable": true,
  "housekeepingAvailableException": "EXCEPTION_UNSPECIFIED",
  "turndownService": true,
  "turndownServiceException": "EXCEPTION_UNSPECIFIED"
}
```

Conveniences provided in guest units to facilitate an easier, more comfortable stay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyHousekeeping|boolean|false|none|Daily housekeeping. Guest units are cleaned by hotel staff daily during guest's stay.|
|dailyHousekeepingException|string|false|none|Daily housekeeping exception.|
|housekeepingAvailable|boolean|false|none|Housekeeping available. Guest units are cleaned by hotel staff during guest's stay. Schedule may vary from daily, weekly, or specific days of the week.|
|housekeepingAvailableException|string|false|none|Housekeeping available exception.|
|turndownService|boolean|false|none|Turndown service. Hotel staff enters guest units to prepare the bed for sleep use. May or may not include some light housekeeping. May or may not include an evening snack or candy. Also known as evening service.|
|turndownServiceException|string|false|none|Turndown service exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|dailyHousekeepingException|EXCEPTION_UNSPECIFIED|
|dailyHousekeepingException|UNDER_CONSTRUCTION|
|dailyHousekeepingException|DEPENDENT_ON_SEASON|
|dailyHousekeepingException|DEPENDENT_ON_DAY_OF_WEEK|
|housekeepingAvailableException|EXCEPTION_UNSPECIFIED|
|housekeepingAvailableException|UNDER_CONSTRUCTION|
|housekeepingAvailableException|DEPENDENT_ON_SEASON|
|housekeepingAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|turndownServiceException|EXCEPTION_UNSPECIFIED|
|turndownServiceException|UNDER_CONSTRUCTION|
|turndownServiceException|DEPENDENT_ON_SEASON|
|turndownServiceException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_IncreasedFoodSafety">IncreasedFoodSafety</h2>
<!-- backwards compatibility -->
<a id="schemaincreasedfoodsafety"></a>
<a id="schema_IncreasedFoodSafety"></a>
<a id="tocSincreasedfoodsafety"></a>
<a id="tocsincreasedfoodsafety"></a>

```json
{
  "diningAreasAdditionalSanitation": true,
  "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
  "disposableFlatware": true,
  "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
  "foodPreparationAndServingAdditionalSafety": true,
  "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
  "individualPackagedMeals": true,
  "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
  "singleUseFoodMenus": true,
  "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
}
```

Increased food safety measures implemented by the hotel during COVID-19.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diningAreasAdditionalSanitation|boolean|false|none|Additional sanitation in dining areas.|
|diningAreasAdditionalSanitationException|string|false|none|Dining areas additional sanitation exception.|
|disposableFlatware|boolean|false|none|Disposable flatware.|
|disposableFlatwareException|string|false|none|Disposable flatware exception.|
|foodPreparationAndServingAdditionalSafety|boolean|false|none|Additional safety measures during food prep and serving.|
|foodPreparationAndServingAdditionalSafetyException|string|false|none|Food preparation and serving additional safety exception.|
|individualPackagedMeals|boolean|false|none|Individually-packaged meals.|
|individualPackagedMealsException|string|false|none|Individual packaged meals exception.|
|singleUseFoodMenus|boolean|false|none|Single-use menus.|
|singleUseFoodMenusException|string|false|none|Single use food menus exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|diningAreasAdditionalSanitationException|EXCEPTION_UNSPECIFIED|
|diningAreasAdditionalSanitationException|UNDER_CONSTRUCTION|
|diningAreasAdditionalSanitationException|DEPENDENT_ON_SEASON|
|diningAreasAdditionalSanitationException|DEPENDENT_ON_DAY_OF_WEEK|
|disposableFlatwareException|EXCEPTION_UNSPECIFIED|
|disposableFlatwareException|UNDER_CONSTRUCTION|
|disposableFlatwareException|DEPENDENT_ON_SEASON|
|disposableFlatwareException|DEPENDENT_ON_DAY_OF_WEEK|
|foodPreparationAndServingAdditionalSafetyException|EXCEPTION_UNSPECIFIED|
|foodPreparationAndServingAdditionalSafetyException|UNDER_CONSTRUCTION|
|foodPreparationAndServingAdditionalSafetyException|DEPENDENT_ON_SEASON|
|foodPreparationAndServingAdditionalSafetyException|DEPENDENT_ON_DAY_OF_WEEK|
|individualPackagedMealsException|EXCEPTION_UNSPECIFIED|
|individualPackagedMealsException|UNDER_CONSTRUCTION|
|individualPackagedMealsException|DEPENDENT_ON_SEASON|
|individualPackagedMealsException|DEPENDENT_ON_DAY_OF_WEEK|
|singleUseFoodMenusException|EXCEPTION_UNSPECIFIED|
|singleUseFoodMenusException|UNDER_CONSTRUCTION|
|singleUseFoodMenusException|DEPENDENT_ON_SEASON|
|singleUseFoodMenusException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Ingredient">Ingredient</h2>
<!-- backwards compatibility -->
<a id="schemaingredient"></a>
<a id="schema_Ingredient"></a>
<a id="tocSingredient"></a>
<a id="tocsingredient"></a>

```json
{
  "labels": [
    {
      "description": "string",
      "displayName": "string",
      "languageCode": "string"
    }
  ]
}
```

This message denotes an ingredient information of a food dish.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[[MenuLabel](#schemamenulabel)]|false|none|Required. Labels to describe ingredient. Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required.|

<h2 id="tocS_InsuranceNetwork">InsuranceNetwork</h2>
<!-- backwards compatibility -->
<a id="schemainsurancenetwork"></a>
<a id="schema_InsuranceNetwork"></a>
<a id="tocSinsurancenetwork"></a>
<a id="tocsinsurancenetwork"></a>

```json
{
  "networkId": "string",
  "networkNames": {
    "property1": "string",
    "property2": "string"
  },
  "payerNames": {
    "property1": "string",
    "property2": "string"
  },
  "state": "NETWORK_STATE_UNSPECIFIED"
}
```

A single insurance network. Next id: 5

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkId|string|false|none|Required. The id of this insurance network generated by Google.|
|networkNames|object|false|read-only|Output only. A map of network display names in requested languages where the language is the key and localized display name is the value. The display name in English is set by default.|
|payerNames|object|false|read-only|Output only. A map of payer display names in requested languages where the language is the key and localized display name is the value. The display name in English is set by default.|
|state|string|false|read-only|Output only. The state of this insurance network.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|NETWORK_STATE_UNSPECIFIED|
|state|ACCEPTED|
|state|PENDING_ADD|
|state|PENDING_DELETE|
|state|NOT_ACCEPTED|

<h2 id="tocS_Invitation">Invitation</h2>
<!-- backwards compatibility -->
<a id="schemainvitation"></a>
<a id="schema_Invitation"></a>
<a id="tocSinvitation"></a>
<a id="tocsinvitation"></a>

```json
{
  "name": "string",
  "role": "ADMIN_ROLE_UNSPECIFIED",
  "targetAccount": {
    "accountName": "string",
    "accountNumber": "string",
    "name": "string",
    "organizationInfo": {
      "phoneNumber": "string",
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
      "registeredDomain": "string"
    },
    "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
    "role": "ACCOUNT_ROLE_UNSPECIFIED",
    "state": {
      "status": "ACCOUNT_STATUS_UNSPECIFIED"
    },
    "type": "ACCOUNT_TYPE_UNSPECIFIED"
  },
  "targetLocation": {
    "locationAddress": "string",
    "locationName": "string"
  }
}
```

Output only. Represents a pending invitation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The resource name for the invitation.|
|role|string|false|none|The invited role on the account.|
|targetAccount|[Account](#schemaaccount)|false|none|The sparsely populated account this invitation is for.|
|targetLocation|[TargetLocation](#schematargetlocation)|false|none|The target location this invitation is for.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|ADMIN_ROLE_UNSPECIFIED|
|role|OWNER|
|role|CO_OWNER|
|role|MANAGER|
|role|COMMUNITY_MANAGER|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "itemId": "string",
  "labels": [
    {
      "description": "string",
      "displayName": "string",
      "languageCode": "string"
    }
  ],
  "price": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

A single list item. Each variation of an item in the price list should have its own Item with its own price data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemId|string|false|none|Required. ID for the item. Price list, section, and item IDs cannot be duplicated within this Location.|
|labels|[[Label](#schemalabel)]|false|none|Required. Language-tagged labels for the item. We recommend that item names be 140 characters or less, and descriptions 250 characters or less. At least one set of labels is required.|
|price|[Money](#schemamoney)|false|none|Optional. Price of the item.|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "languageCode": "string"
}
```

Label to be used when displaying the price list, section, or item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the price list, section, or item.|
|displayName|string|false|none|Required. Display name for the price list, section, or item.|
|languageCode|string|false|none|Optional. The BCP-47 language code that these strings apply for. Only one set of labels may be set per language.|

<h2 id="tocS_LanguagesSpoken">LanguagesSpoken</h2>
<!-- backwards compatibility -->
<a id="schemalanguagesspoken"></a>
<a id="schema_LanguagesSpoken"></a>
<a id="tocSlanguagesspoken"></a>
<a id="tocslanguagesspoken"></a>

```json
{
  "arabicSpoken": true,
  "arabicSpokenException": "EXCEPTION_UNSPECIFIED",
  "cantoneseSpoken": true,
  "cantoneseSpokenException": "EXCEPTION_UNSPECIFIED",
  "dutchSpoken": true,
  "dutchSpokenException": "EXCEPTION_UNSPECIFIED",
  "englishSpoken": true,
  "englishSpokenException": "EXCEPTION_UNSPECIFIED",
  "filipinoSpoken": true,
  "filipinoSpokenException": "EXCEPTION_UNSPECIFIED",
  "frenchSpoken": true,
  "frenchSpokenException": "EXCEPTION_UNSPECIFIED",
  "germanSpoken": true,
  "germanSpokenException": "EXCEPTION_UNSPECIFIED",
  "hindiSpoken": true,
  "hindiSpokenException": "EXCEPTION_UNSPECIFIED",
  "indonesianSpoken": true,
  "indonesianSpokenException": "EXCEPTION_UNSPECIFIED",
  "italianSpoken": true,
  "italianSpokenException": "EXCEPTION_UNSPECIFIED",
  "japaneseSpoken": true,
  "japaneseSpokenException": "EXCEPTION_UNSPECIFIED",
  "koreanSpoken": true,
  "koreanSpokenException": "EXCEPTION_UNSPECIFIED",
  "mandarinSpoken": true,
  "mandarinSpokenException": "EXCEPTION_UNSPECIFIED",
  "portugueseSpoken": true,
  "portugueseSpokenException": "EXCEPTION_UNSPECIFIED",
  "russianSpoken": true,
  "russianSpokenException": "EXCEPTION_UNSPECIFIED",
  "spanishSpoken": true,
  "spanishSpokenException": "EXCEPTION_UNSPECIFIED",
  "vietnameseSpoken": true,
  "vietnameseSpokenException": "EXCEPTION_UNSPECIFIED"
}
```

Languages spoken by at least one staff member.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arabicSpoken|boolean|false|none|Arabic. At least one staff member speaks Arabic.|
|arabicSpokenException|string|false|none|Arabic exception.|
|cantoneseSpoken|boolean|false|none|Cantonese. At least one staff member speaks Cantonese.|
|cantoneseSpokenException|string|false|none|Cantonese exception.|
|dutchSpoken|boolean|false|none|Dutch. At least one staff member speaks Dutch.|
|dutchSpokenException|string|false|none|Dutch exception.|
|englishSpoken|boolean|false|none|English. At least one staff member speaks English.|
|englishSpokenException|string|false|none|English exception.|
|filipinoSpoken|boolean|false|none|Filipino. At least one staff member speaks Filipino.|
|filipinoSpokenException|string|false|none|Filipino exception.|
|frenchSpoken|boolean|false|none|French. At least one staff member speaks French.|
|frenchSpokenException|string|false|none|French exception.|
|germanSpoken|boolean|false|none|German. At least one staff member speaks German.|
|germanSpokenException|string|false|none|German exception.|
|hindiSpoken|boolean|false|none|Hindi. At least one staff member speaks Hindi.|
|hindiSpokenException|string|false|none|Hindi exception.|
|indonesianSpoken|boolean|false|none|Indonesian. At least one staff member speaks Indonesian.|
|indonesianSpokenException|string|false|none|Indonesian exception.|
|italianSpoken|boolean|false|none|Italian. At least one staff member speaks Italian.|
|italianSpokenException|string|false|none|Italian exception.|
|japaneseSpoken|boolean|false|none|Japanese. At least one staff member speaks Japanese.|
|japaneseSpokenException|string|false|none|Japanese exception.|
|koreanSpoken|boolean|false|none|Korean. At least one staff member speaks Korean.|
|koreanSpokenException|string|false|none|Korean exception.|
|mandarinSpoken|boolean|false|none|Mandarin. At least one staff member speaks Mandarin.|
|mandarinSpokenException|string|false|none|Mandarin exception.|
|portugueseSpoken|boolean|false|none|Portuguese. At least one staff member speaks Portuguese.|
|portugueseSpokenException|string|false|none|Portuguese exception.|
|russianSpoken|boolean|false|none|Russian. At least one staff member speaks Russian.|
|russianSpokenException|string|false|none|Russian exception.|
|spanishSpoken|boolean|false|none|Spanish. At least one staff member speaks Spanish.|
|spanishSpokenException|string|false|none|Spanish exception.|
|vietnameseSpoken|boolean|false|none|Vietnamese. At least one staff member speaks Vietnamese.|
|vietnameseSpokenException|string|false|none|Vietnamese exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|arabicSpokenException|EXCEPTION_UNSPECIFIED|
|arabicSpokenException|UNDER_CONSTRUCTION|
|arabicSpokenException|DEPENDENT_ON_SEASON|
|arabicSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|cantoneseSpokenException|EXCEPTION_UNSPECIFIED|
|cantoneseSpokenException|UNDER_CONSTRUCTION|
|cantoneseSpokenException|DEPENDENT_ON_SEASON|
|cantoneseSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|dutchSpokenException|EXCEPTION_UNSPECIFIED|
|dutchSpokenException|UNDER_CONSTRUCTION|
|dutchSpokenException|DEPENDENT_ON_SEASON|
|dutchSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|englishSpokenException|EXCEPTION_UNSPECIFIED|
|englishSpokenException|UNDER_CONSTRUCTION|
|englishSpokenException|DEPENDENT_ON_SEASON|
|englishSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|filipinoSpokenException|EXCEPTION_UNSPECIFIED|
|filipinoSpokenException|UNDER_CONSTRUCTION|
|filipinoSpokenException|DEPENDENT_ON_SEASON|
|filipinoSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|frenchSpokenException|EXCEPTION_UNSPECIFIED|
|frenchSpokenException|UNDER_CONSTRUCTION|
|frenchSpokenException|DEPENDENT_ON_SEASON|
|frenchSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|germanSpokenException|EXCEPTION_UNSPECIFIED|
|germanSpokenException|UNDER_CONSTRUCTION|
|germanSpokenException|DEPENDENT_ON_SEASON|
|germanSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|hindiSpokenException|EXCEPTION_UNSPECIFIED|
|hindiSpokenException|UNDER_CONSTRUCTION|
|hindiSpokenException|DEPENDENT_ON_SEASON|
|hindiSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|indonesianSpokenException|EXCEPTION_UNSPECIFIED|
|indonesianSpokenException|UNDER_CONSTRUCTION|
|indonesianSpokenException|DEPENDENT_ON_SEASON|
|indonesianSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|italianSpokenException|EXCEPTION_UNSPECIFIED|
|italianSpokenException|UNDER_CONSTRUCTION|
|italianSpokenException|DEPENDENT_ON_SEASON|
|italianSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|japaneseSpokenException|EXCEPTION_UNSPECIFIED|
|japaneseSpokenException|UNDER_CONSTRUCTION|
|japaneseSpokenException|DEPENDENT_ON_SEASON|
|japaneseSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|koreanSpokenException|EXCEPTION_UNSPECIFIED|
|koreanSpokenException|UNDER_CONSTRUCTION|
|koreanSpokenException|DEPENDENT_ON_SEASON|
|koreanSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|mandarinSpokenException|EXCEPTION_UNSPECIFIED|
|mandarinSpokenException|UNDER_CONSTRUCTION|
|mandarinSpokenException|DEPENDENT_ON_SEASON|
|mandarinSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|portugueseSpokenException|EXCEPTION_UNSPECIFIED|
|portugueseSpokenException|UNDER_CONSTRUCTION|
|portugueseSpokenException|DEPENDENT_ON_SEASON|
|portugueseSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|russianSpokenException|EXCEPTION_UNSPECIFIED|
|russianSpokenException|UNDER_CONSTRUCTION|
|russianSpokenException|DEPENDENT_ON_SEASON|
|russianSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|spanishSpokenException|EXCEPTION_UNSPECIFIED|
|spanishSpokenException|UNDER_CONSTRUCTION|
|spanishSpokenException|DEPENDENT_ON_SEASON|
|spanishSpokenException|DEPENDENT_ON_DAY_OF_WEEK|
|vietnameseSpokenException|EXCEPTION_UNSPECIFIED|
|vietnameseSpokenException|UNDER_CONSTRUCTION|
|vietnameseSpokenException|DEPENDENT_ON_SEASON|
|vietnameseSpokenException|DEPENDENT_ON_DAY_OF_WEEK|

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

An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number(double)|false|none|The latitude in degrees. It must be in the range [-90.0, +90.0].|
|longitude|number(double)|false|none|The longitude in degrees. It must be in the range [-180.0, +180.0].|

<h2 id="tocS_ListAccountAdminsResponse">ListAccountAdminsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountadminsresponse"></a>
<a id="schema_ListAccountAdminsResponse"></a>
<a id="tocSlistaccountadminsresponse"></a>
<a id="tocslistaccountadminsresponse"></a>

```json
{
  "admins": [
    {
      "adminName": "string",
      "name": "string",
      "pendingInvitation": true,
      "role": "ADMIN_ROLE_UNSPECIFIED"
    }
  ]
}
```

Response message for AccessControl.ListAccountAdmins.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admins|[[Admin](#schemaadmin)]|false|none|A collection of Admin instances.|

<h2 id="tocS_ListAccountsResponse">ListAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsresponse"></a>
<a id="schema_ListAccountsResponse"></a>
<a id="tocSlistaccountsresponse"></a>
<a id="tocslistaccountsresponse"></a>

```json
{
  "accounts": [
    {
      "accountName": "string",
      "accountNumber": "string",
      "name": "string",
      "organizationInfo": {
        "phoneNumber": "string",
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
        "registeredDomain": "string"
      },
      "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
      "role": "ACCOUNT_ROLE_UNSPECIFIED",
      "state": {
        "status": "ACCOUNT_STATUS_UNSPECIFIED"
      },
      "type": "ACCOUNT_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for Accounts.ListAccounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[Account](#schemaaccount)]|false|none|A collection of accounts to which the user has access. The personal account of the user doing the query will always be the first item of the result, unless it is filtered out.|
|nextPageToken|string|false|none|If the number of accounts exceeds the requested page size, this field is populated with a token to fetch the next page of accounts on a subsequent call to `accounts.list`. If there are no more accounts, this field is not present in the response.|

<h2 id="tocS_ListAnswersResponse">ListAnswersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistanswersresponse"></a>
<a id="schema_ListAnswersResponse"></a>
<a id="tocSlistanswersresponse"></a>
<a id="tocslistanswersresponse"></a>

```json
{
  "answers": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUrl": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response message for QuestionsAndAnswers.ListAnswers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answers|[[Answer](#schemaanswer)]|false|none|The requested answers.|
|nextPageToken|string|false|none|If the number of answers exceeds the requested max page size, this field is populated with a token to fetch the next page of answers on a subsequent call. If there are no more answers, this field is not present in the response.|
|totalSize|integer(int32)|false|none|The total number of answers posted for this question across all pages.|

<h2 id="tocS_ListAttributeMetadataResponse">ListAttributeMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattributemetadataresponse"></a>
<a id="schema_ListAttributeMetadataResponse"></a>
<a id="tocSlistattributemetadataresponse"></a>
<a id="tocslistattributemetadataresponse"></a>

```json
{
  "attributes": [
    {
      "attributeId": "string",
      "displayName": "string",
      "groupDisplayName": "string",
      "isDeprecated": true,
      "isRepeatable": true,
      "valueMetadata": [
        {
          "displayName": "string",
          "value": null
        }
      ],
      "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for Locations.ListAttributeMetadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[AttributeMetadata](#schemaattributemetadata)]|false|none|A collection of attribute metadata for the available attributes.|
|nextPageToken|string|false|none|If the number of attributes exceeded the requested page size, this field will be populated with a token to fetch the next page of attributes on a subsequent call to `attributes.list`. If there are no more attributes, this field will not be present in the response.|

<h2 id="tocS_ListBusinessCategoriesResponse">ListBusinessCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbusinesscategoriesresponse"></a>
<a id="schema_ListBusinessCategoriesResponse"></a>
<a id="tocSlistbusinesscategoriesresponse"></a>
<a id="tocslistbusinesscategoriesresponse"></a>

```json
{
  "categories": [
    {
      "categoryId": "string",
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string",
  "totalCategoryCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[Category](#schemacategory)]|false|none|The categories. Categories are BASIC view. They don't contain any ServiceType information.|
|nextPageToken|string|false|none|If the number of categories exceeded the requested page size, this field will be populated with a token to fetch the next page of categories on a subsequent call to `ListBusinessCategories`.|
|totalCategoryCount|integer(int32)|false|none|The total number of categories for the request parameters.|

<h2 id="tocS_ListCustomerMediaItemsResponse">ListCustomerMediaItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomermediaitemsresponse"></a>
<a id="schema_ListCustomerMediaItemsResponse"></a>
<a id="tocSlistcustomermediaitemsresponse"></a>
<a id="tocslistcustomermediaitemsresponse"></a>

```json
{
  "mediaItems": [
    {
      "attribution": {
        "profileName": "string",
        "profilePhotoUrl": "string",
        "profileUrl": "string",
        "takedownUrl": "string"
      },
      "createTime": "string",
      "dataRef": {
        "resourceName": "string"
      },
      "description": "string",
      "dimensions": {
        "heightPixels": 0,
        "widthPixels": 0
      },
      "googleUrl": "string",
      "insights": {
        "viewCount": "string"
      },
      "locationAssociation": {
        "category": "CATEGORY_UNSPECIFIED",
        "priceListItemId": "string"
      },
      "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
      "name": "string",
      "sourceUrl": "string",
      "thumbnailUrl": "string"
    }
  ],
  "nextPageToken": "string",
  "totalMediaItemCount": 0
}
```

Response message for Media.ListCustomerMediaItems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediaItems|[[MediaItem](#schemamediaitem)]|false|none|The returned list of media items.|
|nextPageToken|string|false|none|If there are more media items than the requested page size, then this field is populated with a token to fetch the next page of media items on a subsequent call to ListCustomerMediaItems.|
|totalMediaItemCount|integer(int32)|false|none|The total number of media items for this location, irrespective of pagination. This number is approximate, particularly when there are multiple pages of results.|

<h2 id="tocS_ListInsuranceNetworksResponse">ListInsuranceNetworksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinsurancenetworksresponse"></a>
<a id="schema_ListInsuranceNetworksResponse"></a>
<a id="tocSlistinsurancenetworksresponse"></a>
<a id="tocslistinsurancenetworksresponse"></a>

```json
{
  "networks": [
    {
      "networkId": "string",
      "networkNames": {
        "property1": "string",
        "property2": "string"
      },
      "payerNames": {
        "property1": "string",
        "property2": "string"
      },
      "state": "NETWORK_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for InsuranceNetworkService.ListInsuranceNetworks

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networks|[[InsuranceNetwork](#schemainsurancenetwork)]|false|none|A list of insurance networks that are supported by Google.|
|nextPageToken|string|false|none|If there are more insurance networks than the requested page size, then this field is populated with a token to fetch the next page of insurance networks on a subsequent call to ListInsuranceNetworks.|

<h2 id="tocS_ListInvitationsResponse">ListInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinvitationsresponse"></a>
<a id="schema_ListInvitationsResponse"></a>
<a id="tocSlistinvitationsresponse"></a>
<a id="tocslistinvitationsresponse"></a>

```json
{
  "invitations": [
    {
      "name": "string",
      "role": "ADMIN_ROLE_UNSPECIFIED",
      "targetAccount": {
        "accountName": "string",
        "accountNumber": "string",
        "name": "string",
        "organizationInfo": {
          "phoneNumber": "string",
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
          "registeredDomain": "string"
        },
        "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
        "role": "ACCOUNT_ROLE_UNSPECIFIED",
        "state": {
          "status": "ACCOUNT_STATUS_UNSPECIFIED"
        },
        "type": "ACCOUNT_TYPE_UNSPECIFIED"
      },
      "targetLocation": {
        "locationAddress": "string",
        "locationName": "string"
      }
    }
  ]
}
```

Response message for AccessControl.ListInvitations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invitations|[[Invitation](#schemainvitation)]|false|none|A collection of location invitations that are pending for the account. The number of invitations listed here cannot exceed 1000.|

<h2 id="tocS_ListLocalPostsResponse">ListLocalPostsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocalpostsresponse"></a>
<a id="schema_ListLocalPostsResponse"></a>
<a id="tocSlistlocalpostsresponse"></a>
<a id="tocslistlocalpostsresponse"></a>

```json
{
  "localPosts": [
    {
      "alertType": "ALERT_TYPE_UNSPECIFIED",
      "callToAction": {
        "actionType": "ACTION_TYPE_UNSPECIFIED",
        "url": "string"
      },
      "createTime": "string",
      "event": {
        "schedule": {
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "endTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "startTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        },
        "title": "string"
      },
      "languageCode": "string",
      "media": [
        {
          "attribution": {
            "profileName": "string",
            "profilePhotoUrl": "string",
            "profileUrl": "string",
            "takedownUrl": "string"
          },
          "createTime": "string",
          "dataRef": {
            "resourceName": "string"
          },
          "description": "string",
          "dimensions": {
            "heightPixels": 0,
            "widthPixels": 0
          },
          "googleUrl": "string",
          "insights": {
            "viewCount": "string"
          },
          "locationAssociation": {
            "category": "CATEGORY_UNSPECIFIED",
            "priceListItemId": "string"
          },
          "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
          "name": "string",
          "sourceUrl": "string",
          "thumbnailUrl": "string"
        }
      ],
      "name": "string",
      "offer": {
        "couponCode": "string",
        "redeemOnlineUrl": "string",
        "termsConditions": "string"
      },
      "searchUrl": "string",
      "state": "LOCAL_POST_STATE_UNSPECIFIED",
      "summary": "string",
      "topicType": "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListLocalPosts

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|localPosts|[[LocalPost](#schemalocalpost)]|false|none|The returned list of local posts.|
|nextPageToken|string|false|none|If there are more local posts than the requested page size, then this field is populated with a token to fetch the next page of local posts on a subsequent call to `ListLocalPosts`.|

<h2 id="tocS_ListLocationAdminsResponse">ListLocationAdminsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationadminsresponse"></a>
<a id="schema_ListLocationAdminsResponse"></a>
<a id="tocSlistlocationadminsresponse"></a>
<a id="tocslistlocationadminsresponse"></a>

```json
{
  "admins": [
    {
      "adminName": "string",
      "name": "string",
      "pendingInvitation": true,
      "role": "ADMIN_ROLE_UNSPECIFIED"
    }
  ]
}
```

Response message for AccessControl.ListLocationAdmins.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admins|[[Admin](#schemaadmin)]|false|none|A collection of Admin instances.|

<h2 id="tocS_ListLocationsResponse">ListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsresponse"></a>
<a id="schema_ListLocationsResponse"></a>
<a id="tocSlistlocationsresponse"></a>
<a id="tocslistlocationsresponse"></a>

```json
{
  "locations": [
    {
      "adWordsLocationExtensions": {
        "adPhone": "string"
      },
      "additionalCategories": [
        {
          "categoryId": "string",
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        }
      ],
      "additionalPhones": [
        "string"
      ],
      "address": {
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
      "attributes": [
        {
          "attributeId": "string",
          "repeatedEnumValue": {
            "setValues": [
              "string"
            ],
            "unsetValues": [
              "string"
            ]
          },
          "urlValues": [
            {
              "url": "string"
            }
          ],
          "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
          "values": [
            null
          ]
        }
      ],
      "labels": [
        "string"
      ],
      "languageCode": "string",
      "latlng": {
        "latitude": 0,
        "longitude": 0
      },
      "locationKey": {
        "explicitNoPlaceId": true,
        "placeId": "string",
        "plusPageId": "string",
        "requestId": "string"
      },
      "locationName": "string",
      "locationState": {
        "canDelete": true,
        "canHaveFoodMenus": true,
        "canModifyServiceList": true,
        "canOperateHealthData": true,
        "canOperateLodgingData": true,
        "canUpdate": true,
        "hasPendingEdits": true,
        "hasPendingVerification": true,
        "isDisabled": true,
        "isDisconnected": true,
        "isDuplicate": true,
        "isGoogleUpdated": true,
        "isLocalPostApiDisabled": true,
        "isPendingReview": true,
        "isPublished": true,
        "isSuspended": true,
        "isVerified": true,
        "needsReverification": true
      },
      "metadata": {
        "duplicate": {
          "access": "ACCESS_UNSPECIFIED",
          "locationName": "string",
          "placeId": "string"
        },
        "mapsUrl": "string",
        "newReviewUrl": "string"
      },
      "moreHours": [
        {
          "hoursTypeId": "string",
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": "string",
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": "string"
            }
          ]
        }
      ],
      "name": "string",
      "openInfo": {
        "canReopen": true,
        "openingDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
      },
      "priceLists": [
        {
          "labels": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ],
          "priceListId": "string",
          "sections": [
            {
              "items": [
                {
                  "itemId": "string",
                  "labels": [
                    {
                      "description": "string",
                      "displayName": "string",
                      "languageCode": "string"
                    }
                  ],
                  "price": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  }
                }
              ],
              "labels": [
                {
                  "description": "string",
                  "displayName": "string",
                  "languageCode": "string"
                }
              ],
              "sectionId": "string",
              "sectionType": "SECTION_TYPE_UNSPECIFIED"
            }
          ],
          "sourceUrl": "string"
        }
      ],
      "primaryCategory": {
        "categoryId": "string",
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      },
      "primaryPhone": "string",
      "profile": {
        "description": "string"
      },
      "regularHours": {
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": "string",
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": "string"
          }
        ]
      },
      "relationshipData": {
        "parentChain": "string"
      },
      "serviceArea": {
        "businessType": "BUSINESS_TYPE_UNSPECIFIED",
        "places": {
          "placeInfos": [
            {
              "name": "string",
              "placeId": "string"
            }
          ]
        },
        "radius": {
          "latlng": {
            "latitude": 0,
            "longitude": 0
          },
          "radiusKm": 0
        }
      },
      "specialHours": {
        "specialHourPeriods": [
          {
            "closeTime": "string",
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "isClosed": true,
            "openTime": "string",
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            }
          }
        ]
      },
      "storeCode": "string",
      "websiteUrl": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response message for Locations.ListLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|The locations.|
|nextPageToken|string|false|none|If the number of locations exceeded the requested page size, this field is populated with a token to fetch the next page of locations on a subsequent call to `ListLocations`. If there are no more locations, this field is not present in the response.|
|totalSize|integer(int32)|false|none|The approximate number of Locations in the list irrespective of pagination.|

<h2 id="tocS_ListMediaItemsResponse">ListMediaItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmediaitemsresponse"></a>
<a id="schema_ListMediaItemsResponse"></a>
<a id="tocSlistmediaitemsresponse"></a>
<a id="tocslistmediaitemsresponse"></a>

```json
{
  "mediaItems": [
    {
      "attribution": {
        "profileName": "string",
        "profilePhotoUrl": "string",
        "profileUrl": "string",
        "takedownUrl": "string"
      },
      "createTime": "string",
      "dataRef": {
        "resourceName": "string"
      },
      "description": "string",
      "dimensions": {
        "heightPixels": 0,
        "widthPixels": 0
      },
      "googleUrl": "string",
      "insights": {
        "viewCount": "string"
      },
      "locationAssociation": {
        "category": "CATEGORY_UNSPECIFIED",
        "priceListItemId": "string"
      },
      "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
      "name": "string",
      "sourceUrl": "string",
      "thumbnailUrl": "string"
    }
  ],
  "nextPageToken": "string",
  "totalMediaItemCount": 0
}
```

Response message for Media.ListMediaItems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediaItems|[[MediaItem](#schemamediaitem)]|false|none|The returned list of media items.|
|nextPageToken|string|false|none|If there are more media items than the requested page size, then this field is populated with a token to fetch the next page of media items on a subsequent call to ListMediaItems.|
|totalMediaItemCount|integer(int32)|false|none|The total number of media items for this location, irrespective of pagination.|

<h2 id="tocS_ListQuestionsResponse">ListQuestionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistquestionsresponse"></a>
<a id="schema_ListQuestionsResponse"></a>
<a id="tocSlistquestionsresponse"></a>
<a id="tocslistquestionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "questions": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUrl": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "topAnswers": [
        {
          "author": {
            "displayName": "string",
            "profilePhotoUrl": "string",
            "type": "AUTHOR_TYPE_UNSPECIFIED"
          },
          "createTime": "string",
          "name": "string",
          "text": "string",
          "updateTime": "string",
          "upvoteCount": 0
        }
      ],
      "totalAnswerCount": 0,
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "totalSize": 0
}
```

Response message for QuestionsAndAnswers.ListQuestions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If the number of questions exceeds the requested max page size, this field is populated with a token to fetch the next page of questions on a subsequent call. If there are no more questions, this field is not present in the response.|
|questions|[[Question](#schemaquestion)]|false|none|The requested questions,|
|totalSize|integer(int32)|false|none|The total number of questions posted for this location across all pages.|

<h2 id="tocS_ListRecommendedGoogleLocationsResponse">ListRecommendedGoogleLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendedgooglelocationsresponse"></a>
<a id="schema_ListRecommendedGoogleLocationsResponse"></a>
<a id="tocSlistrecommendedgooglelocationsresponse"></a>
<a id="tocslistrecommendedgooglelocationsresponse"></a>

```json
{
  "googleLocations": [
    {
      "location": {
        "adWordsLocationExtensions": {
          "adPhone": "string"
        },
        "additionalCategories": [
          {
            "categoryId": "string",
            "displayName": "string",
            "moreHoursTypes": [
              {
                "displayName": "string",
                "hoursTypeId": "string",
                "localizedDisplayName": "string"
              }
            ],
            "serviceTypes": [
              {
                "displayName": "string",
                "serviceTypeId": "string"
              }
            ]
          }
        ],
        "additionalPhones": [
          "string"
        ],
        "address": {
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
        "attributes": [
          {
            "attributeId": "string",
            "repeatedEnumValue": {
              "setValues": [
                "string"
              ],
              "unsetValues": [
                "string"
              ]
            },
            "urlValues": [
              {
                "url": "string"
              }
            ],
            "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
            "values": [
              null
            ]
          }
        ],
        "labels": [
          "string"
        ],
        "languageCode": "string",
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "locationKey": {
          "explicitNoPlaceId": true,
          "placeId": "string",
          "plusPageId": "string",
          "requestId": "string"
        },
        "locationName": "string",
        "locationState": {
          "canDelete": true,
          "canHaveFoodMenus": true,
          "canModifyServiceList": true,
          "canOperateHealthData": true,
          "canOperateLodgingData": true,
          "canUpdate": true,
          "hasPendingEdits": true,
          "hasPendingVerification": true,
          "isDisabled": true,
          "isDisconnected": true,
          "isDuplicate": true,
          "isGoogleUpdated": true,
          "isLocalPostApiDisabled": true,
          "isPendingReview": true,
          "isPublished": true,
          "isSuspended": true,
          "isVerified": true,
          "needsReverification": true
        },
        "metadata": {
          "duplicate": {
            "access": "ACCESS_UNSPECIFIED",
            "locationName": "string",
            "placeId": "string"
          },
          "mapsUrl": "string",
          "newReviewUrl": "string"
        },
        "moreHours": [
          {
            "hoursTypeId": "string",
            "periods": [
              {
                "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
                "closeTime": "string",
                "openDay": "DAY_OF_WEEK_UNSPECIFIED",
                "openTime": "string"
              }
            ]
          }
        ],
        "name": "string",
        "openInfo": {
          "canReopen": true,
          "openingDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
        },
        "priceLists": [
          {
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ],
            "priceListId": "string",
            "sections": [
              {
                "items": [
                  {
                    "itemId": "string",
                    "labels": [
                      {
                        "description": "string",
                        "displayName": "string",
                        "languageCode": "string"
                      }
                    ],
                    "price": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    }
                  }
                ],
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ],
                "sectionId": "string",
                "sectionType": "SECTION_TYPE_UNSPECIFIED"
              }
            ],
            "sourceUrl": "string"
          }
        ],
        "primaryCategory": {
          "categoryId": "string",
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        },
        "primaryPhone": "string",
        "profile": {
          "description": "string"
        },
        "regularHours": {
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": "string",
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": "string"
            }
          ]
        },
        "relationshipData": {
          "parentChain": "string"
        },
        "serviceArea": {
          "businessType": "BUSINESS_TYPE_UNSPECIFIED",
          "places": {
            "placeInfos": [
              {
                "name": "string",
                "placeId": "string"
              }
            ]
          },
          "radius": {
            "latlng": {
              "latitude": 0,
              "longitude": 0
            },
            "radiusKm": 0
          }
        },
        "specialHours": {
          "specialHourPeriods": [
            {
              "closeTime": "string",
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "isClosed": true,
              "openTime": "string",
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              }
            }
          ]
        },
        "storeCode": "string",
        "websiteUrl": "string"
      },
      "name": "string",
      "requestAdminRightsUrl": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googleLocations|[[GoogleLocation](#schemagooglelocation)]|false|none|The locations recommended to a Business Profile account. Each of these represents a GoogleLocation that is present on Maps. The locations are sorted in decreasing order of relevance to the Business Profile account.|
|nextPageToken|string|false|none|During pagination, if there are more locations available to be fetched in the next page, this field is populated with a token to fetch the next page of locations in a subsequent call. If there are no more locations to be fetched, this field is not present in the response.|
|totalSize|integer(int32)|false|none|The total number of recommended locations for this Business Profile account, irrespective of pagination.|

<h2 id="tocS_ListReviewsResponse">ListReviewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreviewsresponse"></a>
<a id="schema_ListReviewsResponse"></a>
<a id="tocSlistreviewsresponse"></a>
<a id="tocslistreviewsresponse"></a>

```json
{
  "averageRating": 0,
  "nextPageToken": "string",
  "reviews": [
    {
      "comment": "string",
      "createTime": "string",
      "name": "string",
      "reviewId": "string",
      "reviewReply": {
        "comment": "string",
        "updateTime": "string"
      },
      "reviewer": {
        "displayName": "string",
        "isAnonymous": true,
        "profilePhotoUrl": "string"
      },
      "starRating": "STAR_RATING_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "totalReviewCount": 0
}
```

Response message for Reviews.ListReviews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageRating|number(double)|false|none|The average star rating of all reviews for this location on a scale of 1 to 5, where 5 is the highest rating.|
|nextPageToken|string|false|none|If the number of reviews exceeded the requested page size, this field is populated with a token to fetch the next page of reviews on a subsequent call to ListReviews. If there are no more reviews, this field is not present in the response.|
|reviews|[[Review](#schemareview)]|false|none|The reviews.|
|totalReviewCount|integer(int32)|false|none|The total number of reviews for this location.|

<h2 id="tocS_ListVerificationsResponse">ListVerificationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistverificationsresponse"></a>
<a id="schema_ListVerificationsResponse"></a>
<a id="tocSlistverificationsresponse"></a>
<a id="tocslistverificationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "verifications": [
    {
      "createTime": "string",
      "method": "VERIFICATION_METHOD_UNSPECIFIED",
      "name": "string",
      "state": "VERIFICATION_STATE_UNSPECIFIED"
    }
  ]
}
```

Response message for Verifications.ListVerifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If the number of verifications exceeded the requested page size, this field will be populated with a token to fetch the next page of verification on a subsequent call. If there are no more attributes, this field will not be present in the response.|
|verifications|[[Verification](#schemaverification)]|false|none|List of the verifications.|

<h2 id="tocS_LivingArea">LivingArea</h2>
<!-- backwards compatibility -->
<a id="schemalivingarea"></a>
<a id="schema_LivingArea"></a>
<a id="tocSlivingarea"></a>
<a id="tocslivingarea"></a>

```json
{
  "accessibility": {
    "adaCompliantUnit": true,
    "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
    "hearingAccessibleDoorbell": true,
    "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
    "hearingAccessibleFireAlarm": true,
    "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
    "hearingAccessibleUnit": true,
    "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleBathtub": true,
    "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleShower": true,
    "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleToilet": true,
    "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleUnit": true,
    "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
  },
  "eating": {
    "coffeeMaker": true,
    "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
    "cookware": true,
    "cookwareException": "EXCEPTION_UNSPECIFIED",
    "dishwasher": true,
    "dishwasherException": "EXCEPTION_UNSPECIFIED",
    "indoorGrill": true,
    "indoorGrillException": "EXCEPTION_UNSPECIFIED",
    "kettle": true,
    "kettleException": "EXCEPTION_UNSPECIFIED",
    "kitchenAvailable": true,
    "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
    "microwave": true,
    "microwaveException": "EXCEPTION_UNSPECIFIED",
    "minibar": true,
    "minibarException": "EXCEPTION_UNSPECIFIED",
    "outdoorGrill": true,
    "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
    "oven": true,
    "ovenException": "EXCEPTION_UNSPECIFIED",
    "refrigerator": true,
    "refrigeratorException": "EXCEPTION_UNSPECIFIED",
    "sink": true,
    "sinkException": "EXCEPTION_UNSPECIFIED",
    "snackbar": true,
    "snackbarException": "EXCEPTION_UNSPECIFIED",
    "stove": true,
    "stoveException": "EXCEPTION_UNSPECIFIED",
    "teaStation": true,
    "teaStationException": "EXCEPTION_UNSPECIFIED",
    "toaster": true,
    "toasterException": "EXCEPTION_UNSPECIFIED"
  },
  "features": {
    "airConditioning": true,
    "airConditioningException": "EXCEPTION_UNSPECIFIED",
    "bathtub": true,
    "bathtubException": "EXCEPTION_UNSPECIFIED",
    "bidet": true,
    "bidetException": "EXCEPTION_UNSPECIFIED",
    "dryer": true,
    "dryerException": "EXCEPTION_UNSPECIFIED",
    "electronicRoomKey": true,
    "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
    "fireplace": true,
    "fireplaceException": "EXCEPTION_UNSPECIFIED",
    "hairdryer": true,
    "hairdryerException": "EXCEPTION_UNSPECIFIED",
    "heating": true,
    "heatingException": "EXCEPTION_UNSPECIFIED",
    "inunitSafe": true,
    "inunitSafeException": "EXCEPTION_UNSPECIFIED",
    "inunitWifiAvailable": true,
    "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
    "ironingEquipment": true,
    "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
    "payPerViewMovies": true,
    "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
    "privateBathroom": true,
    "privateBathroomException": "EXCEPTION_UNSPECIFIED",
    "shower": true,
    "showerException": "EXCEPTION_UNSPECIFIED",
    "toilet": true,
    "toiletException": "EXCEPTION_UNSPECIFIED",
    "tv": true,
    "tvCasting": true,
    "tvCastingException": "EXCEPTION_UNSPECIFIED",
    "tvException": "EXCEPTION_UNSPECIFIED",
    "tvStreaming": true,
    "tvStreamingException": "EXCEPTION_UNSPECIFIED",
    "universalPowerAdapters": true,
    "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
    "washer": true,
    "washerException": "EXCEPTION_UNSPECIFIED"
  },
  "layout": {
    "balcony": true,
    "balconyException": "EXCEPTION_UNSPECIFIED",
    "livingAreaSqMeters": 0,
    "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
    "loft": true,
    "loftException": "EXCEPTION_UNSPECIFIED",
    "nonSmoking": true,
    "nonSmokingException": "EXCEPTION_UNSPECIFIED",
    "patio": true,
    "patioException": "EXCEPTION_UNSPECIFIED",
    "stairs": true,
    "stairsException": "EXCEPTION_UNSPECIFIED"
  },
  "sleeping": {
    "bedsCount": 0,
    "bedsCountException": "EXCEPTION_UNSPECIFIED",
    "bunkBedsCount": 0,
    "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
    "cribsCount": 0,
    "cribsCountException": "EXCEPTION_UNSPECIFIED",
    "doubleBedsCount": 0,
    "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
    "featherPillows": true,
    "featherPillowsException": "EXCEPTION_UNSPECIFIED",
    "hypoallergenicBedding": true,
    "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
    "kingBedsCount": 0,
    "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
    "memoryFoamPillows": true,
    "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
    "otherBedsCount": 0,
    "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
    "queenBedsCount": 0,
    "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
    "rollAwayBedsCount": 0,
    "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
    "singleOrTwinBedsCount": 0,
    "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
    "sofaBedsCount": 0,
    "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
    "syntheticPillows": true,
    "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
  }
}
```

An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessibility|[LivingAreaAccessibility](#schemalivingareaaccessibility)|false|none|Accessibility features of the living area.|
|eating|[LivingAreaEating](#schemalivingareaeating)|false|none|Information about eating features in the living area.|
|features|[LivingAreaFeatures](#schemalivingareafeatures)|false|none|Features in the living area.|
|layout|[LivingAreaLayout](#schemalivingarealayout)|false|none|Information about the layout of the living area.|
|sleeping|[LivingAreaSleeping](#schemalivingareasleeping)|false|none|Information about sleeping features in the living area.|

<h2 id="tocS_LivingAreaAccessibility">LivingAreaAccessibility</h2>
<!-- backwards compatibility -->
<a id="schemalivingareaaccessibility"></a>
<a id="schema_LivingAreaAccessibility"></a>
<a id="tocSlivingareaaccessibility"></a>
<a id="tocslivingareaaccessibility"></a>

```json
{
  "adaCompliantUnit": true,
  "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
  "hearingAccessibleDoorbell": true,
  "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
  "hearingAccessibleFireAlarm": true,
  "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
  "hearingAccessibleUnit": true,
  "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessibleBathtub": true,
  "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessibleShower": true,
  "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessibleToilet": true,
  "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
  "mobilityAccessibleUnit": true,
  "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
}
```

Accessibility features of the living area.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adaCompliantUnit|boolean|false|none|ADA compliant unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues, as determined by legislative policy. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged.|
|adaCompliantUnitException|string|false|none|ADA compliant unit exception.|
|hearingAccessibleDoorbell|boolean|false|none|Hearing-accessible doorbell. A visual indicator(s) of a knock or ring at the door.|
|hearingAccessibleDoorbellException|string|false|none|Hearing-accessible doorbell exception.|
|hearingAccessibleFireAlarm|boolean|false|none|Hearing-accessible fire alarm. A device that gives warning of a fire through flashing lights.|
|hearingAccessibleFireAlarmException|string|false|none|Hearing-accessible fire alarm exception.|
|hearingAccessibleUnit|boolean|false|none|Hearing-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with auditory issues.|
|hearingAccessibleUnitException|string|false|none|Hearing-accessible unit exception.|
|mobilityAccessibleBathtub|boolean|false|none|Mobility-accessible bathtub. A bathtub that accomodates the physically challenged with additional railings or hand grips, a transfer seat or lift, and/or a door to enable walking into the tub.|
|mobilityAccessibleBathtubException|string|false|none|Mobility-accessible bathtub exception.|
|mobilityAccessibleShower|boolean|false|none|Mobility-accessible shower. A shower with an enlarged door or access point to accommodate a wheelchair or a waterproof seat for the physically challenged.|
|mobilityAccessibleShowerException|string|false|none|Mobility-accessible shower exception.|
|mobilityAccessibleToilet|boolean|false|none|Mobility-accessible toilet. A toilet with a higher seat, grab bars, and/or a larger area around it to accommodate the physically challenged.|
|mobilityAccessibleToiletException|string|false|none|Mobility-accessible toilet exception.|
|mobilityAccessibleUnit|boolean|false|none|Mobility-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged.|
|mobilityAccessibleUnitException|string|false|none|Mobility-accessible unit exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|adaCompliantUnitException|EXCEPTION_UNSPECIFIED|
|adaCompliantUnitException|UNDER_CONSTRUCTION|
|adaCompliantUnitException|DEPENDENT_ON_SEASON|
|adaCompliantUnitException|DEPENDENT_ON_DAY_OF_WEEK|
|hearingAccessibleDoorbellException|EXCEPTION_UNSPECIFIED|
|hearingAccessibleDoorbellException|UNDER_CONSTRUCTION|
|hearingAccessibleDoorbellException|DEPENDENT_ON_SEASON|
|hearingAccessibleDoorbellException|DEPENDENT_ON_DAY_OF_WEEK|
|hearingAccessibleFireAlarmException|EXCEPTION_UNSPECIFIED|
|hearingAccessibleFireAlarmException|UNDER_CONSTRUCTION|
|hearingAccessibleFireAlarmException|DEPENDENT_ON_SEASON|
|hearingAccessibleFireAlarmException|DEPENDENT_ON_DAY_OF_WEEK|
|hearingAccessibleUnitException|EXCEPTION_UNSPECIFIED|
|hearingAccessibleUnitException|UNDER_CONSTRUCTION|
|hearingAccessibleUnitException|DEPENDENT_ON_SEASON|
|hearingAccessibleUnitException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessibleBathtubException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleBathtubException|UNDER_CONSTRUCTION|
|mobilityAccessibleBathtubException|DEPENDENT_ON_SEASON|
|mobilityAccessibleBathtubException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessibleShowerException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleShowerException|UNDER_CONSTRUCTION|
|mobilityAccessibleShowerException|DEPENDENT_ON_SEASON|
|mobilityAccessibleShowerException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessibleToiletException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleToiletException|UNDER_CONSTRUCTION|
|mobilityAccessibleToiletException|DEPENDENT_ON_SEASON|
|mobilityAccessibleToiletException|DEPENDENT_ON_DAY_OF_WEEK|
|mobilityAccessibleUnitException|EXCEPTION_UNSPECIFIED|
|mobilityAccessibleUnitException|UNDER_CONSTRUCTION|
|mobilityAccessibleUnitException|DEPENDENT_ON_SEASON|
|mobilityAccessibleUnitException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_LivingAreaEating">LivingAreaEating</h2>
<!-- backwards compatibility -->
<a id="schemalivingareaeating"></a>
<a id="schema_LivingAreaEating"></a>
<a id="tocSlivingareaeating"></a>
<a id="tocslivingareaeating"></a>

```json
{
  "coffeeMaker": true,
  "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
  "cookware": true,
  "cookwareException": "EXCEPTION_UNSPECIFIED",
  "dishwasher": true,
  "dishwasherException": "EXCEPTION_UNSPECIFIED",
  "indoorGrill": true,
  "indoorGrillException": "EXCEPTION_UNSPECIFIED",
  "kettle": true,
  "kettleException": "EXCEPTION_UNSPECIFIED",
  "kitchenAvailable": true,
  "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
  "microwave": true,
  "microwaveException": "EXCEPTION_UNSPECIFIED",
  "minibar": true,
  "minibarException": "EXCEPTION_UNSPECIFIED",
  "outdoorGrill": true,
  "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
  "oven": true,
  "ovenException": "EXCEPTION_UNSPECIFIED",
  "refrigerator": true,
  "refrigeratorException": "EXCEPTION_UNSPECIFIED",
  "sink": true,
  "sinkException": "EXCEPTION_UNSPECIFIED",
  "snackbar": true,
  "snackbarException": "EXCEPTION_UNSPECIFIED",
  "stove": true,
  "stoveException": "EXCEPTION_UNSPECIFIED",
  "teaStation": true,
  "teaStationException": "EXCEPTION_UNSPECIFIED",
  "toaster": true,
  "toasterException": "EXCEPTION_UNSPECIFIED"
}
```

Information about eating features in the living area.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coffeeMaker|boolean|false|none|Coffee maker. An electric appliance that brews coffee by heating and forcing water through ground coffee.|
|coffeeMakerException|string|false|none|Coffee maker exception.|
|cookware|boolean|false|none|Cookware. Kitchen pots, pans and utensils used in connection with the preparation of food.|
|cookwareException|string|false|none|Cookware exception.|
|dishwasher|boolean|false|none|Dishwasher. A counter-height electrical cabinet containing racks for dirty dishware, cookware and cutlery, and a dispenser for soap built into the pull-down door. The cabinet is attached to the plumbing system to facilitate the automatic cleaning of its contents.|
|dishwasherException|string|false|none|Dishwasher exception.|
|indoorGrill|boolean|false|none|Indoor grill. Metal grates built into an indoor cooktop on which food is cooked over an open flame or electric heat source.|
|indoorGrillException|string|false|none|Indoor grill exception.|
|kettle|boolean|false|none|Kettle. A covered container with a handle and a spout used for boiling water.|
|kettleException|string|false|none|Kettle exception.|
|kitchenAvailable|boolean|false|none|Kitchen available. An area of the guestroom designated for the preparation and storage of food via the presence of a refrigerator, cook top, oven and sink, as well as cutlery, dishes and cookware. Usually includes small appliances such a coffee maker and a microwave. May or may not include an automatic dishwasher.|
|kitchenAvailableException|string|false|none|Kitchen available exception.|
|microwave|boolean|false|none|Microwave. An electric oven that quickly cooks and heats food by microwave energy. Smaller than a standing or wall mounted oven. Usually placed on a kitchen counter, a shelf or tabletop or mounted above a cooktop.|
|microwaveException|string|false|none|Microwave exception.|
|minibar|boolean|false|none|Minibar. A small refrigerated cabinet in the guestroom containing bottles/cans of soft drinks, mini bottles of alcohol, and snacks. The items are most commonly available for a fee.|
|minibarException|string|false|none|Minibar exception.|
|outdoorGrill|boolean|false|none|Outdoor grill. Metal grates on which food is cooked over an open flame or electric heat source. Part of an outdoor apparatus that supports the grates. Also known as barbecue grill or barbecue.|
|outdoorGrillException|string|false|none|Outdoor grill exception.|
|oven|boolean|false|none|Oven. A temperature controlled, heated metal cabinet powered by gas or electricity in which food is placed for the purpose of cooking or reheating.|
|ovenException|string|false|none|Oven exception.|
|refrigerator|boolean|false|none|Refrigerator. A large, climate-controlled electrical cabinet with vertical doors. Built for the purpose of chilling and storing perishable foods.|
|refrigeratorException|string|false|none|Refrigerator exception.|
|sink|boolean|false|none|Sink. A basin with a faucet attached to a water source and used for the purpose of washing and rinsing.|
|sinkException|string|false|none|Sink exception.|
|snackbar|boolean|false|none|Snackbar. A small cabinet in the guestroom containing snacks. The items are most commonly available for a fee.|
|snackbarException|string|false|none|Snackbar exception.|
|stove|boolean|false|none|Stove. A kitchen appliance powered by gas or electricity for the purpose of creating a flame or hot surface on which pots of food can be cooked. Also known as cooktop or hob.|
|stoveException|string|false|none|Stove exception.|
|teaStation|boolean|false|none|Tea station. A small area with the supplies needed to heat water and make tea.|
|teaStationException|string|false|none|Tea station exception.|
|toaster|boolean|false|none|Toaster. A small, temperature controlled electric appliance with rectangular slots at the top that are lined with heated coils for the purpose of browning slices of bread products.|
|toasterException|string|false|none|Toaster exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|coffeeMakerException|EXCEPTION_UNSPECIFIED|
|coffeeMakerException|UNDER_CONSTRUCTION|
|coffeeMakerException|DEPENDENT_ON_SEASON|
|coffeeMakerException|DEPENDENT_ON_DAY_OF_WEEK|
|cookwareException|EXCEPTION_UNSPECIFIED|
|cookwareException|UNDER_CONSTRUCTION|
|cookwareException|DEPENDENT_ON_SEASON|
|cookwareException|DEPENDENT_ON_DAY_OF_WEEK|
|dishwasherException|EXCEPTION_UNSPECIFIED|
|dishwasherException|UNDER_CONSTRUCTION|
|dishwasherException|DEPENDENT_ON_SEASON|
|dishwasherException|DEPENDENT_ON_DAY_OF_WEEK|
|indoorGrillException|EXCEPTION_UNSPECIFIED|
|indoorGrillException|UNDER_CONSTRUCTION|
|indoorGrillException|DEPENDENT_ON_SEASON|
|indoorGrillException|DEPENDENT_ON_DAY_OF_WEEK|
|kettleException|EXCEPTION_UNSPECIFIED|
|kettleException|UNDER_CONSTRUCTION|
|kettleException|DEPENDENT_ON_SEASON|
|kettleException|DEPENDENT_ON_DAY_OF_WEEK|
|kitchenAvailableException|EXCEPTION_UNSPECIFIED|
|kitchenAvailableException|UNDER_CONSTRUCTION|
|kitchenAvailableException|DEPENDENT_ON_SEASON|
|kitchenAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|microwaveException|EXCEPTION_UNSPECIFIED|
|microwaveException|UNDER_CONSTRUCTION|
|microwaveException|DEPENDENT_ON_SEASON|
|microwaveException|DEPENDENT_ON_DAY_OF_WEEK|
|minibarException|EXCEPTION_UNSPECIFIED|
|minibarException|UNDER_CONSTRUCTION|
|minibarException|DEPENDENT_ON_SEASON|
|minibarException|DEPENDENT_ON_DAY_OF_WEEK|
|outdoorGrillException|EXCEPTION_UNSPECIFIED|
|outdoorGrillException|UNDER_CONSTRUCTION|
|outdoorGrillException|DEPENDENT_ON_SEASON|
|outdoorGrillException|DEPENDENT_ON_DAY_OF_WEEK|
|ovenException|EXCEPTION_UNSPECIFIED|
|ovenException|UNDER_CONSTRUCTION|
|ovenException|DEPENDENT_ON_SEASON|
|ovenException|DEPENDENT_ON_DAY_OF_WEEK|
|refrigeratorException|EXCEPTION_UNSPECIFIED|
|refrigeratorException|UNDER_CONSTRUCTION|
|refrigeratorException|DEPENDENT_ON_SEASON|
|refrigeratorException|DEPENDENT_ON_DAY_OF_WEEK|
|sinkException|EXCEPTION_UNSPECIFIED|
|sinkException|UNDER_CONSTRUCTION|
|sinkException|DEPENDENT_ON_SEASON|
|sinkException|DEPENDENT_ON_DAY_OF_WEEK|
|snackbarException|EXCEPTION_UNSPECIFIED|
|snackbarException|UNDER_CONSTRUCTION|
|snackbarException|DEPENDENT_ON_SEASON|
|snackbarException|DEPENDENT_ON_DAY_OF_WEEK|
|stoveException|EXCEPTION_UNSPECIFIED|
|stoveException|UNDER_CONSTRUCTION|
|stoveException|DEPENDENT_ON_SEASON|
|stoveException|DEPENDENT_ON_DAY_OF_WEEK|
|teaStationException|EXCEPTION_UNSPECIFIED|
|teaStationException|UNDER_CONSTRUCTION|
|teaStationException|DEPENDENT_ON_SEASON|
|teaStationException|DEPENDENT_ON_DAY_OF_WEEK|
|toasterException|EXCEPTION_UNSPECIFIED|
|toasterException|UNDER_CONSTRUCTION|
|toasterException|DEPENDENT_ON_SEASON|
|toasterException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_LivingAreaFeatures">LivingAreaFeatures</h2>
<!-- backwards compatibility -->
<a id="schemalivingareafeatures"></a>
<a id="schema_LivingAreaFeatures"></a>
<a id="tocSlivingareafeatures"></a>
<a id="tocslivingareafeatures"></a>

```json
{
  "airConditioning": true,
  "airConditioningException": "EXCEPTION_UNSPECIFIED",
  "bathtub": true,
  "bathtubException": "EXCEPTION_UNSPECIFIED",
  "bidet": true,
  "bidetException": "EXCEPTION_UNSPECIFIED",
  "dryer": true,
  "dryerException": "EXCEPTION_UNSPECIFIED",
  "electronicRoomKey": true,
  "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
  "fireplace": true,
  "fireplaceException": "EXCEPTION_UNSPECIFIED",
  "hairdryer": true,
  "hairdryerException": "EXCEPTION_UNSPECIFIED",
  "heating": true,
  "heatingException": "EXCEPTION_UNSPECIFIED",
  "inunitSafe": true,
  "inunitSafeException": "EXCEPTION_UNSPECIFIED",
  "inunitWifiAvailable": true,
  "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
  "ironingEquipment": true,
  "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
  "payPerViewMovies": true,
  "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
  "privateBathroom": true,
  "privateBathroomException": "EXCEPTION_UNSPECIFIED",
  "shower": true,
  "showerException": "EXCEPTION_UNSPECIFIED",
  "toilet": true,
  "toiletException": "EXCEPTION_UNSPECIFIED",
  "tv": true,
  "tvCasting": true,
  "tvCastingException": "EXCEPTION_UNSPECIFIED",
  "tvException": "EXCEPTION_UNSPECIFIED",
  "tvStreaming": true,
  "tvStreamingException": "EXCEPTION_UNSPECIFIED",
  "universalPowerAdapters": true,
  "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
  "washer": true,
  "washerException": "EXCEPTION_UNSPECIFIED"
}
```

Features in the living area.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airConditioning|boolean|false|none|Air conditioning. An electrical machine used to cool the temperature of the guestroom.|
|airConditioningException|string|false|none|Air conditioning exception.|
|bathtub|boolean|false|none|Bathtub. A fixed plumbing feature set on the floor and consisting of a large container that accommodates the body of an adult for the purpose of seated bathing. Includes knobs or fixtures to control the temperature of the water, a faucet through which the water flows, and a drain that can be closed for filling and opened for draining.|
|bathtubException|string|false|none|Bathtub exception.|
|bidet|boolean|false|none|Bidet. A plumbing fixture attached to a toilet or a low, fixed sink designed for the purpose of washing after toilet use.|
|bidetException|string|false|none|Bidet exception.|
|dryer|boolean|false|none|Dryer. An electrical machine designed to dry clothing.|
|dryerException|string|false|none|Dryer exception.|
|electronicRoomKey|boolean|false|none|Electronic room key. A card coded by the check-in computer that is read by the lock on the hotel guestroom door to allow for entry.|
|electronicRoomKeyException|string|false|none|Electronic room key exception.|
|fireplace|boolean|false|none|Fireplace. A framed opening (aka hearth) at the base of a chimney in which logs or an electrical fire feature are burned to provide a relaxing ambiance or to heat the room. Often made of bricks or stone.|
|fireplaceException|string|false|none|Fireplace exception.|
|hairdryer|boolean|false|none|Hairdryer. A handheld electric appliance that blows temperature-controlled air for the purpose of drying wet hair. Can be mounted to a bathroom wall or a freestanding device stored in the guestroom's bathroom or closet.|
|hairdryerException|string|false|none|Hairdryer exception.|
|heating|boolean|false|none|Heating. An electrical machine used to warm the temperature of the guestroom.|
|heatingException|string|false|none|Heating exception.|
|inunitSafe|boolean|false|none|In-unit safe. A strong fireproof cabinet with a programmable lock, used for the protected storage of valuables in a guestroom. Often built into a closet.|
|inunitSafeException|string|false|none|In-unit safe exception.|
|inunitWifiAvailable|boolean|false|none|In-unit Wifi available. Guests can wirelessly connect to the Internet in the guestroom. Can be free or for a fee.|
|inunitWifiAvailableException|string|false|none|In-unit Wifi available exception.|
|ironingEquipment|boolean|false|none|Ironing equipment. A device, usually with a flat metal base, that is heated to smooth, finish, or press clothes and a flat, padded, cloth-covered surface on which the clothes are worked.|
|ironingEquipmentException|string|false|none|Ironing equipment exception.|
|payPerViewMovies|boolean|false|none|Pay per view movies. Televisions with channels that offer films that can be viewed for a fee, and have an interface to allow the viewer to accept the terms and approve payment.|
|payPerViewMoviesException|string|false|none|Pay per view movies exception.|
|privateBathroom|boolean|false|none|Private bathroom. A bathroom designated for the express use of the guests staying in a specific guestroom.|
|privateBathroomException|string|false|none|Private bathroom exception.|
|shower|boolean|false|none|Shower. A fixed plumbing fixture for standing bathing that features a tall spray spout or faucet through which water flows, a knob or knobs that control the water's temperature, and a drain in the floor.|
|showerException|string|false|none|Shower exception.|
|toilet|boolean|false|none|Toilet. A fixed bathroom feature connected to a sewer or septic system and consisting of a water-flushed bowl with a seat, as well as a device that elicites the water-flushing action. Used for the process and disposal of human waste.|
|toiletException|string|false|none|Toilet exception.|
|tv|boolean|false|none|TV. A television is available in the guestroom.|
|tvCasting|boolean|false|none|TV casting. A television equipped with a device through which the video entertainment accessed on a personal computer, phone or tablet can be wirelessly delivered to and viewed on the guestroom's television.|
|tvCastingException|string|false|none|TV exception.|
|tvException|string|false|none|TV exception.|
|tvStreaming|boolean|false|none|TV streaming. Televisions that embed a range of web-based apps to allow for watching media from those apps.|
|tvStreamingException|string|false|none|TV streaming exception.|
|universalPowerAdapters|boolean|false|none|Universal power adapters. A power supply for electronic devices which plugs into a wall for the purpose of converting AC to a single DC voltage. Also know as AC adapter or charger.|
|universalPowerAdaptersException|string|false|none|Universal power adapters exception.|
|washer|boolean|false|none|Washer. An electrical machine connected to a running water source designed to launder clothing.|
|washerException|string|false|none|Washer exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|airConditioningException|EXCEPTION_UNSPECIFIED|
|airConditioningException|UNDER_CONSTRUCTION|
|airConditioningException|DEPENDENT_ON_SEASON|
|airConditioningException|DEPENDENT_ON_DAY_OF_WEEK|
|bathtubException|EXCEPTION_UNSPECIFIED|
|bathtubException|UNDER_CONSTRUCTION|
|bathtubException|DEPENDENT_ON_SEASON|
|bathtubException|DEPENDENT_ON_DAY_OF_WEEK|
|bidetException|EXCEPTION_UNSPECIFIED|
|bidetException|UNDER_CONSTRUCTION|
|bidetException|DEPENDENT_ON_SEASON|
|bidetException|DEPENDENT_ON_DAY_OF_WEEK|
|dryerException|EXCEPTION_UNSPECIFIED|
|dryerException|UNDER_CONSTRUCTION|
|dryerException|DEPENDENT_ON_SEASON|
|dryerException|DEPENDENT_ON_DAY_OF_WEEK|
|electronicRoomKeyException|EXCEPTION_UNSPECIFIED|
|electronicRoomKeyException|UNDER_CONSTRUCTION|
|electronicRoomKeyException|DEPENDENT_ON_SEASON|
|electronicRoomKeyException|DEPENDENT_ON_DAY_OF_WEEK|
|fireplaceException|EXCEPTION_UNSPECIFIED|
|fireplaceException|UNDER_CONSTRUCTION|
|fireplaceException|DEPENDENT_ON_SEASON|
|fireplaceException|DEPENDENT_ON_DAY_OF_WEEK|
|hairdryerException|EXCEPTION_UNSPECIFIED|
|hairdryerException|UNDER_CONSTRUCTION|
|hairdryerException|DEPENDENT_ON_SEASON|
|hairdryerException|DEPENDENT_ON_DAY_OF_WEEK|
|heatingException|EXCEPTION_UNSPECIFIED|
|heatingException|UNDER_CONSTRUCTION|
|heatingException|DEPENDENT_ON_SEASON|
|heatingException|DEPENDENT_ON_DAY_OF_WEEK|
|inunitSafeException|EXCEPTION_UNSPECIFIED|
|inunitSafeException|UNDER_CONSTRUCTION|
|inunitSafeException|DEPENDENT_ON_SEASON|
|inunitSafeException|DEPENDENT_ON_DAY_OF_WEEK|
|inunitWifiAvailableException|EXCEPTION_UNSPECIFIED|
|inunitWifiAvailableException|UNDER_CONSTRUCTION|
|inunitWifiAvailableException|DEPENDENT_ON_SEASON|
|inunitWifiAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|ironingEquipmentException|EXCEPTION_UNSPECIFIED|
|ironingEquipmentException|UNDER_CONSTRUCTION|
|ironingEquipmentException|DEPENDENT_ON_SEASON|
|ironingEquipmentException|DEPENDENT_ON_DAY_OF_WEEK|
|payPerViewMoviesException|EXCEPTION_UNSPECIFIED|
|payPerViewMoviesException|UNDER_CONSTRUCTION|
|payPerViewMoviesException|DEPENDENT_ON_SEASON|
|payPerViewMoviesException|DEPENDENT_ON_DAY_OF_WEEK|
|privateBathroomException|EXCEPTION_UNSPECIFIED|
|privateBathroomException|UNDER_CONSTRUCTION|
|privateBathroomException|DEPENDENT_ON_SEASON|
|privateBathroomException|DEPENDENT_ON_DAY_OF_WEEK|
|showerException|EXCEPTION_UNSPECIFIED|
|showerException|UNDER_CONSTRUCTION|
|showerException|DEPENDENT_ON_SEASON|
|showerException|DEPENDENT_ON_DAY_OF_WEEK|
|toiletException|EXCEPTION_UNSPECIFIED|
|toiletException|UNDER_CONSTRUCTION|
|toiletException|DEPENDENT_ON_SEASON|
|toiletException|DEPENDENT_ON_DAY_OF_WEEK|
|tvCastingException|EXCEPTION_UNSPECIFIED|
|tvCastingException|UNDER_CONSTRUCTION|
|tvCastingException|DEPENDENT_ON_SEASON|
|tvCastingException|DEPENDENT_ON_DAY_OF_WEEK|
|tvException|EXCEPTION_UNSPECIFIED|
|tvException|UNDER_CONSTRUCTION|
|tvException|DEPENDENT_ON_SEASON|
|tvException|DEPENDENT_ON_DAY_OF_WEEK|
|tvStreamingException|EXCEPTION_UNSPECIFIED|
|tvStreamingException|UNDER_CONSTRUCTION|
|tvStreamingException|DEPENDENT_ON_SEASON|
|tvStreamingException|DEPENDENT_ON_DAY_OF_WEEK|
|universalPowerAdaptersException|EXCEPTION_UNSPECIFIED|
|universalPowerAdaptersException|UNDER_CONSTRUCTION|
|universalPowerAdaptersException|DEPENDENT_ON_SEASON|
|universalPowerAdaptersException|DEPENDENT_ON_DAY_OF_WEEK|
|washerException|EXCEPTION_UNSPECIFIED|
|washerException|UNDER_CONSTRUCTION|
|washerException|DEPENDENT_ON_SEASON|
|washerException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_LivingAreaLayout">LivingAreaLayout</h2>
<!-- backwards compatibility -->
<a id="schemalivingarealayout"></a>
<a id="schema_LivingAreaLayout"></a>
<a id="tocSlivingarealayout"></a>
<a id="tocslivingarealayout"></a>

```json
{
  "balcony": true,
  "balconyException": "EXCEPTION_UNSPECIFIED",
  "livingAreaSqMeters": 0,
  "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
  "loft": true,
  "loftException": "EXCEPTION_UNSPECIFIED",
  "nonSmoking": true,
  "nonSmokingException": "EXCEPTION_UNSPECIFIED",
  "patio": true,
  "patioException": "EXCEPTION_UNSPECIFIED",
  "stairs": true,
  "stairsException": "EXCEPTION_UNSPECIFIED"
}
```

Information about the layout of the living area.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balcony|boolean|false|none|Balcony. An outdoor platform attached to a building and surrounded by a short wall, fence or other safety railing. The balcony is accessed through a door in a guestroom or suite and is for use by the guest staying in that room. May or may not include seating or outdoor furniture. Is not located on the ground floor. Also lanai.|
|balconyException|string|false|none|Balcony exception.|
|livingAreaSqMeters|number(float)|false|none|Living area sq meters. The measurement in meters of the area of a guestroom's living space.|
|livingAreaSqMetersException|string|false|none|Living area sq meters exception.|
|loft|boolean|false|none|Loft. A three-walled upper area accessed by stairs or a ladder that overlooks the lower area of a room.|
|loftException|string|false|none|Loft exception.|
|nonSmoking|boolean|false|none|Non smoking. A guestroom in which the smoking of cigarettes, cigars and pipes is prohibited.|
|nonSmokingException|string|false|none|Non smoking exception.|
|patio|boolean|false|none|Patio. A paved, outdoor area with seating attached to and accessed through a ground-floor guestroom for use by the occupants of the guestroom.|
|patioException|string|false|none|Patio exception.|
|stairs|boolean|false|none|Stairs. There are steps leading from one level or story to another in the unit.|
|stairsException|string|false|none|Stairs exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|balconyException|EXCEPTION_UNSPECIFIED|
|balconyException|UNDER_CONSTRUCTION|
|balconyException|DEPENDENT_ON_SEASON|
|balconyException|DEPENDENT_ON_DAY_OF_WEEK|
|livingAreaSqMetersException|EXCEPTION_UNSPECIFIED|
|livingAreaSqMetersException|UNDER_CONSTRUCTION|
|livingAreaSqMetersException|DEPENDENT_ON_SEASON|
|livingAreaSqMetersException|DEPENDENT_ON_DAY_OF_WEEK|
|loftException|EXCEPTION_UNSPECIFIED|
|loftException|UNDER_CONSTRUCTION|
|loftException|DEPENDENT_ON_SEASON|
|loftException|DEPENDENT_ON_DAY_OF_WEEK|
|nonSmokingException|EXCEPTION_UNSPECIFIED|
|nonSmokingException|UNDER_CONSTRUCTION|
|nonSmokingException|DEPENDENT_ON_SEASON|
|nonSmokingException|DEPENDENT_ON_DAY_OF_WEEK|
|patioException|EXCEPTION_UNSPECIFIED|
|patioException|UNDER_CONSTRUCTION|
|patioException|DEPENDENT_ON_SEASON|
|patioException|DEPENDENT_ON_DAY_OF_WEEK|
|stairsException|EXCEPTION_UNSPECIFIED|
|stairsException|UNDER_CONSTRUCTION|
|stairsException|DEPENDENT_ON_SEASON|
|stairsException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_LivingAreaSleeping">LivingAreaSleeping</h2>
<!-- backwards compatibility -->
<a id="schemalivingareasleeping"></a>
<a id="schema_LivingAreaSleeping"></a>
<a id="tocSlivingareasleeping"></a>
<a id="tocslivingareasleeping"></a>

```json
{
  "bedsCount": 0,
  "bedsCountException": "EXCEPTION_UNSPECIFIED",
  "bunkBedsCount": 0,
  "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
  "cribsCount": 0,
  "cribsCountException": "EXCEPTION_UNSPECIFIED",
  "doubleBedsCount": 0,
  "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
  "featherPillows": true,
  "featherPillowsException": "EXCEPTION_UNSPECIFIED",
  "hypoallergenicBedding": true,
  "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
  "kingBedsCount": 0,
  "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
  "memoryFoamPillows": true,
  "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
  "otherBedsCount": 0,
  "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
  "queenBedsCount": 0,
  "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
  "rollAwayBedsCount": 0,
  "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
  "singleOrTwinBedsCount": 0,
  "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
  "sofaBedsCount": 0,
  "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
  "syntheticPillows": true,
  "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
}
```

Information about sleeping features in the living area.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bedsCount|integer(int32)|false|none|Beds count. The number of permanent beds present in a guestroom. Does not include rollaway beds, cribs or sofabeds.|
|bedsCountException|string|false|none|Beds count exception.|
|bunkBedsCount|integer(int32)|false|none|Bunk beds count. The number of furniture pieces in which one framed mattress is fixed directly above another by means of a physical frame. This allows one person(s) to sleep in the bottom bunk and one person(s) to sleep in the top bunk. Also known as double decker bed.|
|bunkBedsCountException|string|false|none|Bunk beds count exception.|
|cribsCount|integer(int32)|false|none|Cribs count. The number of small beds for an infant or toddler that the guestroom can obtain. The bed is surrounded by a high railing to prevent the child from falling or climbing out of the bed|
|cribsCountException|string|false|none|Cribs count exception.|
|doubleBedsCount|integer(int32)|false|none|Double beds count. The number of medium beds measuring 53"W x 75"L (135cm x 191cm). Also known as full size bed.|
|doubleBedsCountException|string|false|none|Double beds count exception.|
|featherPillows|boolean|false|none|Feather pillows. The option for guests to obtain bed pillows that are stuffed with the feathers and down of ducks or geese.|
|featherPillowsException|string|false|none|Feather pillows exception.|
|hypoallergenicBedding|boolean|false|none|Hypoallergenic bedding. Bedding such as linens, pillows, mattress covers and/or mattresses that are made of materials known to be resistant to allergens such as mold, dust and dander.|
|hypoallergenicBeddingException|string|false|none|Hypoallergenic bedding exception.|
|kingBedsCount|integer(int32)|false|none|King beds count. The number of large beds measuring 76"W x 80"L (193cm x 102cm). Most often meant to accompany two people. Includes California king and super king.|
|kingBedsCountException|string|false|none|King beds count exception.|
|memoryFoamPillows|boolean|false|none|Memory foam pillows. The option for guests to obtain bed pillows that are stuffed with a man-made foam that responds to body heat by conforming to the body closely, and then recovers its shape when the pillow cools down.|
|memoryFoamPillowsException|string|false|none|Memory foam pillows exception.|
|otherBedsCount|integer(int32)|false|none|Other beds count. The number of beds that are not standard mattress and boxspring setups such as Japanese tatami mats, trundle beds, air mattresses and cots.|
|otherBedsCountException|string|false|none|Other beds count exception.|
|queenBedsCount|integer(int32)|false|none|Queen beds count. The number of medium-large beds measuring 60"W x 80"L (152cm x 102cm).|
|queenBedsCountException|string|false|none|Queen beds count exception.|
|rollAwayBedsCount|integer(int32)|false|none|Roll away beds count. The number of mattresses on wheeled frames that can be folded in half and rolled away for easy storage that the guestroom can obtain upon request.|
|rollAwayBedsCountException|string|false|none|Roll away beds count exception.|
|singleOrTwinBedsCount|integer(int32)|false|none|Single or twin count beds. The number of smaller beds measuring 38"W x 75"L (97cm x 191cm) that can accommodate one adult.|
|singleOrTwinBedsCountException|string|false|none|Single or twin beds count exception.|
|sofaBedsCount|integer(int32)|false|none|Sofa beds count. The number of specially designed sofas that can be made to serve as a bed by lowering its hinged upholstered back to horizontal position or by pulling out a concealed mattress.|
|sofaBedsCountException|string|false|none|Sofa beds count exception.|
|syntheticPillows|boolean|false|none|Synthetic pillows. The option for guests to obtain bed pillows stuffed with polyester material crafted to reproduce the feel of a pillow stuffed with down and feathers.|
|syntheticPillowsException|string|false|none|Synthetic pillows exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|bedsCountException|EXCEPTION_UNSPECIFIED|
|bedsCountException|UNDER_CONSTRUCTION|
|bedsCountException|DEPENDENT_ON_SEASON|
|bedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|bunkBedsCountException|EXCEPTION_UNSPECIFIED|
|bunkBedsCountException|UNDER_CONSTRUCTION|
|bunkBedsCountException|DEPENDENT_ON_SEASON|
|bunkBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|cribsCountException|EXCEPTION_UNSPECIFIED|
|cribsCountException|UNDER_CONSTRUCTION|
|cribsCountException|DEPENDENT_ON_SEASON|
|cribsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|doubleBedsCountException|EXCEPTION_UNSPECIFIED|
|doubleBedsCountException|UNDER_CONSTRUCTION|
|doubleBedsCountException|DEPENDENT_ON_SEASON|
|doubleBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|featherPillowsException|EXCEPTION_UNSPECIFIED|
|featherPillowsException|UNDER_CONSTRUCTION|
|featherPillowsException|DEPENDENT_ON_SEASON|
|featherPillowsException|DEPENDENT_ON_DAY_OF_WEEK|
|hypoallergenicBeddingException|EXCEPTION_UNSPECIFIED|
|hypoallergenicBeddingException|UNDER_CONSTRUCTION|
|hypoallergenicBeddingException|DEPENDENT_ON_SEASON|
|hypoallergenicBeddingException|DEPENDENT_ON_DAY_OF_WEEK|
|kingBedsCountException|EXCEPTION_UNSPECIFIED|
|kingBedsCountException|UNDER_CONSTRUCTION|
|kingBedsCountException|DEPENDENT_ON_SEASON|
|kingBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|memoryFoamPillowsException|EXCEPTION_UNSPECIFIED|
|memoryFoamPillowsException|UNDER_CONSTRUCTION|
|memoryFoamPillowsException|DEPENDENT_ON_SEASON|
|memoryFoamPillowsException|DEPENDENT_ON_DAY_OF_WEEK|
|otherBedsCountException|EXCEPTION_UNSPECIFIED|
|otherBedsCountException|UNDER_CONSTRUCTION|
|otherBedsCountException|DEPENDENT_ON_SEASON|
|otherBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|queenBedsCountException|EXCEPTION_UNSPECIFIED|
|queenBedsCountException|UNDER_CONSTRUCTION|
|queenBedsCountException|DEPENDENT_ON_SEASON|
|queenBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|rollAwayBedsCountException|EXCEPTION_UNSPECIFIED|
|rollAwayBedsCountException|UNDER_CONSTRUCTION|
|rollAwayBedsCountException|DEPENDENT_ON_SEASON|
|rollAwayBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|singleOrTwinBedsCountException|EXCEPTION_UNSPECIFIED|
|singleOrTwinBedsCountException|UNDER_CONSTRUCTION|
|singleOrTwinBedsCountException|DEPENDENT_ON_SEASON|
|singleOrTwinBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|sofaBedsCountException|EXCEPTION_UNSPECIFIED|
|sofaBedsCountException|UNDER_CONSTRUCTION|
|sofaBedsCountException|DEPENDENT_ON_SEASON|
|sofaBedsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|syntheticPillowsException|EXCEPTION_UNSPECIFIED|
|syntheticPillowsException|UNDER_CONSTRUCTION|
|syntheticPillowsException|DEPENDENT_ON_SEASON|
|syntheticPillowsException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_LocalPost">LocalPost</h2>
<!-- backwards compatibility -->
<a id="schemalocalpost"></a>
<a id="schema_LocalPost"></a>
<a id="tocSlocalpost"></a>
<a id="tocslocalpost"></a>

```json
{
  "alertType": "ALERT_TYPE_UNSPECIFIED",
  "callToAction": {
    "actionType": "ACTION_TYPE_UNSPECIFIED",
    "url": "string"
  },
  "createTime": "string",
  "event": {
    "schedule": {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "endTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    },
    "title": "string"
  },
  "languageCode": "string",
  "media": [
    {
      "attribution": {
        "profileName": "string",
        "profilePhotoUrl": "string",
        "profileUrl": "string",
        "takedownUrl": "string"
      },
      "createTime": "string",
      "dataRef": {
        "resourceName": "string"
      },
      "description": "string",
      "dimensions": {
        "heightPixels": 0,
        "widthPixels": 0
      },
      "googleUrl": "string",
      "insights": {
        "viewCount": "string"
      },
      "locationAssociation": {
        "category": "CATEGORY_UNSPECIFIED",
        "priceListItemId": "string"
      },
      "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
      "name": "string",
      "sourceUrl": "string",
      "thumbnailUrl": "string"
    }
  ],
  "name": "string",
  "offer": {
    "couponCode": "string",
    "redeemOnlineUrl": "string",
    "termsConditions": "string"
  },
  "searchUrl": "string",
  "state": "LOCAL_POST_STATE_UNSPECIFIED",
  "summary": "string",
  "topicType": "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED",
  "updateTime": "string"
}
```

Represents a [local post](https://support.google.com/business/answer/7662907) for a location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertType|string|false|none|The type of alert the post is created for. This field is only applicable for posts of topic_type Alert, and behaves as a sub-type of Alerts.|
|callToAction|[CallToAction](#schemacalltoaction)|false|none|The URL that users are sent to when clicking through the promotion. Ignored for topic type `OFFER`.|
|createTime|string(google-datetime)|false|none|Output only. Time of the creation of the post.|
|event|[LocalPostEvent](#schemalocalpostevent)|false|none|Event information. Required for topic types `EVENT` and `OFFER`.|
|languageCode|string|false|none|The language of the local post.|
|media|[[MediaItem](#schemamediaitem)]|false|none|The media associated with the post. source_url is the only supported data field for a LocalPost MediaItem.|
|name|string|false|none|Output only. Google identifier for this local post in the form: `accounts/{account_id}/locations/{location_id}/localPosts/{local_post_id}`|
|offer|[LocalPostOffer](#schemalocalpostoffer)|false|none|Additional data for offer posts. This should only be set when the topic_type is OFFER.|
|searchUrl|string|false|none|Output only. The link to the local post in Google search. This link can be used to share the post via social media, email, text, etc.|
|state|string|false|none|Output only. The state of the post, indicating what part of its lifecycle it is in.|
|summary|string|false|none|Description/body of the local post.|
|topicType|string|false|none|Required. The topic type of the post: standard, event, offer, or alert.|
|updateTime|string(google-datetime)|false|none|Output only. Time of the last modification of the post made by the user.|

#### Enumerated Values

|Property|Value|
|---|---|
|alertType|ALERT_TYPE_UNSPECIFIED|
|alertType|COVID_19|
|state|LOCAL_POST_STATE_UNSPECIFIED|
|state|REJECTED|
|state|LIVE|
|state|PROCESSING|
|topicType|LOCAL_POST_TOPIC_TYPE_UNSPECIFIED|
|topicType|STANDARD|
|topicType|EVENT|
|topicType|OFFER|
|topicType|ALERT|

<h2 id="tocS_LocalPostEvent">LocalPostEvent</h2>
<!-- backwards compatibility -->
<a id="schemalocalpostevent"></a>
<a id="schema_LocalPostEvent"></a>
<a id="tocSlocalpostevent"></a>
<a id="tocslocalpostevent"></a>

```json
{
  "schedule": {
    "endDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "endTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "startDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "startTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    }
  },
  "title": "string"
}
```

All the information pertaining to an event featured in a local post.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|[TimeInterval](#schematimeinterval)|false|none|Event start and end date/time.|
|title|string|false|none|Name of the event.|

<h2 id="tocS_LocalPostMetrics">LocalPostMetrics</h2>
<!-- backwards compatibility -->
<a id="schemalocalpostmetrics"></a>
<a id="schema_LocalPostMetrics"></a>
<a id="tocSlocalpostmetrics"></a>
<a id="tocslocalpostmetrics"></a>

```json
{
  "localPostName": "string",
  "metricValues": [
    {
      "dimensionalValues": [
        {
          "metricOption": "METRIC_OPTION_UNSPECIFIED",
          "timeDimension": {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "timeOfDay": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "timeRange": {
              "endTime": "string",
              "startTime": "string"
            }
          },
          "value": "string"
        }
      ],
      "metric": "METRIC_UNSPECIFIED",
      "totalValue": {
        "metricOption": "METRIC_OPTION_UNSPECIFIED",
        "timeDimension": {
          "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
          "timeOfDay": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "timeRange": {
            "endTime": "string",
            "startTime": "string"
          }
        },
        "value": "string"
      }
    }
  ]
}
```

All the metrics requested for a Local Post.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|localPostName|string|false|none|none|
|metricValues|[[MetricValue](#schemametricvalue)]|false|none|A list of values for the requested metrics.|

<h2 id="tocS_LocalPostOffer">LocalPostOffer</h2>
<!-- backwards compatibility -->
<a id="schemalocalpostoffer"></a>
<a id="schema_LocalPostOffer"></a>
<a id="tocSlocalpostoffer"></a>
<a id="tocslocalpostoffer"></a>

```json
{
  "couponCode": "string",
  "redeemOnlineUrl": "string",
  "termsConditions": "string"
}
```

Specific fields for offer posts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|couponCode|string|false|none|Optional. Offer code that is usable in store or online.|
|redeemOnlineUrl|string|false|none|Optional. Online link to redeem offer.|
|termsConditions|string|false|none|Optional. Offer terms and conditions.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "adWordsLocationExtensions": {
    "adPhone": "string"
  },
  "additionalCategories": [
    {
      "categoryId": "string",
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  ],
  "additionalPhones": [
    "string"
  ],
  "address": {
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
  "attributes": [
    {
      "attributeId": "string",
      "repeatedEnumValue": {
        "setValues": [
          "string"
        ],
        "unsetValues": [
          "string"
        ]
      },
      "urlValues": [
        {
          "url": "string"
        }
      ],
      "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
      "values": [
        null
      ]
    }
  ],
  "labels": [
    "string"
  ],
  "languageCode": "string",
  "latlng": {
    "latitude": 0,
    "longitude": 0
  },
  "locationKey": {
    "explicitNoPlaceId": true,
    "placeId": "string",
    "plusPageId": "string",
    "requestId": "string"
  },
  "locationName": "string",
  "locationState": {
    "canDelete": true,
    "canHaveFoodMenus": true,
    "canModifyServiceList": true,
    "canOperateHealthData": true,
    "canOperateLodgingData": true,
    "canUpdate": true,
    "hasPendingEdits": true,
    "hasPendingVerification": true,
    "isDisabled": true,
    "isDisconnected": true,
    "isDuplicate": true,
    "isGoogleUpdated": true,
    "isLocalPostApiDisabled": true,
    "isPendingReview": true,
    "isPublished": true,
    "isSuspended": true,
    "isVerified": true,
    "needsReverification": true
  },
  "metadata": {
    "duplicate": {
      "access": "ACCESS_UNSPECIFIED",
      "locationName": "string",
      "placeId": "string"
    },
    "mapsUrl": "string",
    "newReviewUrl": "string"
  },
  "moreHours": [
    {
      "hoursTypeId": "string",
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": "string",
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": "string"
        }
      ]
    }
  ],
  "name": "string",
  "openInfo": {
    "canReopen": true,
    "openingDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
  },
  "priceLists": [
    {
      "labels": [
        {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      ],
      "priceListId": "string",
      "sections": [
        {
          "items": [
            {
              "itemId": "string",
              "labels": [
                {
                  "description": "string",
                  "displayName": "string",
                  "languageCode": "string"
                }
              ],
              "price": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            }
          ],
          "labels": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ],
          "sectionId": "string",
          "sectionType": "SECTION_TYPE_UNSPECIFIED"
        }
      ],
      "sourceUrl": "string"
    }
  ],
  "primaryCategory": {
    "categoryId": "string",
    "displayName": "string",
    "moreHoursTypes": [
      {
        "displayName": "string",
        "hoursTypeId": "string",
        "localizedDisplayName": "string"
      }
    ],
    "serviceTypes": [
      {
        "displayName": "string",
        "serviceTypeId": "string"
      }
    ]
  },
  "primaryPhone": "string",
  "profile": {
    "description": "string"
  },
  "regularHours": {
    "periods": [
      {
        "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
        "closeTime": "string",
        "openDay": "DAY_OF_WEEK_UNSPECIFIED",
        "openTime": "string"
      }
    ]
  },
  "relationshipData": {
    "parentChain": "string"
  },
  "serviceArea": {
    "businessType": "BUSINESS_TYPE_UNSPECIFIED",
    "places": {
      "placeInfos": [
        {
          "name": "string",
          "placeId": "string"
        }
      ]
    },
    "radius": {
      "latlng": {
        "latitude": 0,
        "longitude": 0
      },
      "radiusKm": 0
    }
  },
  "specialHours": {
    "specialHourPeriods": [
      {
        "closeTime": "string",
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "isClosed": true,
        "openTime": "string",
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      }
    ]
  },
  "storeCode": "string",
  "websiteUrl": "string"
}
```

A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adWordsLocationExtensions|[AdWordsLocationExtensions](#schemaadwordslocationextensions)|false|none|Additional information that is surfaced in AdWords.|
|additionalCategories|[[Category](#schemacategory)]|false|none|Additional categories to describe your business. Categories help your customers find accurate, specific results for services they're interested in. To keep your business information accurate and live, make sure that you use as few categories as possible to describe your overall core business. Choose categories that are as specific as possible, but representative of your main business.|
|additionalPhones|[string]|false|none|Up to two phone numbers (mobile or landline, no fax) at which your business can be called, in addition to your primary phone number.|
|address|[PostalAddress](#schemapostaladdress)|false|none|A precise, accurate address to describe your business location. PO boxes or mailboxes located at remote locations are not acceptable. At this time, you can specify a maximum of five `address_lines` values in the address.|
|attributes|[[Attribute](#schemaattribute)]|false|none|Attributes for this location.|
|labels|[string]|false|none|A collection of free-form strings to allow you to tag your business. These labels are NOT user facing; only you can see them. Limited to 255 characters (per label).|
|languageCode|string|false|none|The language of the location. Set during creation and not updateable.|
|latlng|[LatLng](#schemalatlng)|false|none|User-provided latitude and longitude. When creating a location, this field is ignored if the provided address geocodes successfully. This field is only returned on get requests if the user-provided `latlng` value was accepted during create, or the `latlng` value was updated through the Business Profile website. This field cannot be updated.|
|locationKey|[LocationKey](#schemalocationkey)|false|none|A collection of keys that link this business to other Google properties, such as a Google+ page and Google Maps Places.|
|locationName|string|false|none|Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade").|
|locationState|[LocationState](#schemalocationstate)|false|none|Output only. A set of booleans that reflects the [state of a location.](https://support.google.com/business/answer/3480862)|
|metadata|[Metadata](#schemametadata)|false|none|Output Only. Additional non-user-editable information.|
|moreHours|[[MoreHours](#schemamorehours)]|false|none|More hours for a business's different departments or specific customers.|
|name|string|false|none|Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}` In the context of matches, this field will not be populated.|
|openInfo|[OpenInfo](#schemaopeninfo)|false|none|A flag that indicates whether the location is currently open for business.|
|priceLists|[[PriceList](#schemapricelist)]|false|none|Price list information for this location.|
|primaryCategory|[Category](#schemacategory)|false|none|Category that best describes the core business this location engages in.|
|primaryPhone|string|false|none|A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible.|
|profile|[Profile](#schemaprofile)|false|none|Describes your business in your own voice and shares with users the unique story of your business and offerings.|
|regularHours|[BusinessHours](#schemabusinesshours)|false|none|Operating hours for the business.|
|relationshipData|[RelationshipData](#schemarelationshipdata)|false|none|All locations and chain related to this one.|
|serviceArea|[ServiceAreaBusiness](#schemaserviceareabusiness)|false|none|Service area businesses provide their service at the customer's location. If this business is a service area business, this field describes the area(s) serviced by the business.|
|specialHours|[SpecialHours](#schemaspecialhours)|false|none|Special hours for the business. This typically includes holiday hours, and other times outside of regular operating hours. These override regular business hours.|
|storeCode|string|false|none|External identifier for this location, which must be unique inside a given account. This is a means of associating the location with your own records.|
|websiteUrl|string|false|none|A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand.|

<h2 id="tocS_LocationAssociation">LocationAssociation</h2>
<!-- backwards compatibility -->
<a id="schemalocationassociation"></a>
<a id="schema_LocationAssociation"></a>
<a id="tocSlocationassociation"></a>
<a id="tocslocationassociation"></a>

```json
{
  "category": "CATEGORY_UNSPECIFIED",
  "priceListItemId": "string"
}
```

How the media item is associated with its location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The category that this location photo belongs to.|
|priceListItemId|string|false|none|The ID of a price list item that this location photo is associated with.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|CATEGORY_UNSPECIFIED|
|category|COVER|
|category|PROFILE|
|category|LOGO|
|category|EXTERIOR|
|category|INTERIOR|
|category|PRODUCT|
|category|AT_WORK|
|category|FOOD_AND_DRINK|
|category|MENU|
|category|COMMON_AREA|
|category|ROOMS|
|category|TEAMS|
|category|ADDITIONAL|

<h2 id="tocS_LocationDrivingDirectionMetrics">LocationDrivingDirectionMetrics</h2>
<!-- backwards compatibility -->
<a id="schemalocationdrivingdirectionmetrics"></a>
<a id="schema_LocationDrivingDirectionMetrics"></a>
<a id="tocSlocationdrivingdirectionmetrics"></a>
<a id="tocslocationdrivingdirectionmetrics"></a>

```json
{
  "locationName": "string",
  "timeZone": "string",
  "topDirectionSources": [
    {
      "dayCount": 0,
      "regionCounts": [
        {
          "count": "string",
          "label": "string",
          "latlng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ]
    }
  ]
}
```

A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationName|string|false|none|The location resource name this metric value belongs to.|
|timeZone|string|false|none|Time zone (IANA timezone IDs, for example, 'Europe/London') of the location.|
|topDirectionSources|[[TopDirectionSources](#schematopdirectionsources)]|false|none|Driving-direction requests by source region. By convention, these are sorted by count with at most 10 results.|

<h2 id="tocS_LocationKey">LocationKey</h2>
<!-- backwards compatibility -->
<a id="schemalocationkey"></a>
<a id="schema_LocationKey"></a>
<a id="tocSlocationkey"></a>
<a id="tocslocationkey"></a>

```json
{
  "explicitNoPlaceId": true,
  "placeId": "string",
  "plusPageId": "string",
  "requestId": "string"
}
```

Alternate/surrogate key references for a location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|explicitNoPlaceId|boolean|false|none|Output only. A value of true indicates that an unset place ID is deliberate, which is different from no association being made yet.|
|placeId|string|false|none|If this location has been verified and is connected to/appears on Google Maps, this field is populated with the place ID for the location. This ID can be used in various Places APIs. If this location is unverified, this field may be populated if the location has been associated with a place that appears on Google Maps. This field can be set during Create calls, but not for Update. The additional `explicit_no_place_id` bool qualifies whether an unset place ID is deliberate or not.|
|plusPageId|string|false|none|Output only. If this location has a Google+ page associated with it, this is populated with the Google+ page ID for this location.|
|requestId|string|false|none|Output only. The `request_id` used to create this location. May be empty if this location was created outside of the Google My Business API or Business Profile Locations.|

<h2 id="tocS_LocationMetrics">LocationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemalocationmetrics"></a>
<a id="schema_LocationMetrics"></a>
<a id="tocSlocationmetrics"></a>
<a id="tocslocationmetrics"></a>

```json
{
  "locationName": "string",
  "metricValues": [
    {
      "dimensionalValues": [
        {
          "metricOption": "METRIC_OPTION_UNSPECIFIED",
          "timeDimension": {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "timeOfDay": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "timeRange": {
              "endTime": "string",
              "startTime": "string"
            }
          },
          "value": "string"
        }
      ],
      "metric": "METRIC_UNSPECIFIED",
      "totalValue": {
        "metricOption": "METRIC_OPTION_UNSPECIFIED",
        "timeDimension": {
          "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
          "timeOfDay": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "timeRange": {
            "endTime": "string",
            "startTime": "string"
          }
        },
        "value": "string"
      }
    }
  ],
  "timeZone": "string"
}
```

A series of Metrics and BreakdownMetrics associated with a Location over some time range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationName|string|false|none|The location resource name these values belong to.|
|metricValues|[[MetricValue](#schemametricvalue)]|false|none|A list of values for the requested metrics.|
|timeZone|string|false|none|IANA timezone for the location.|

<h2 id="tocS_LocationReview">LocationReview</h2>
<!-- backwards compatibility -->
<a id="schemalocationreview"></a>
<a id="schema_LocationReview"></a>
<a id="tocSlocationreview"></a>
<a id="tocslocationreview"></a>

```json
{
  "name": "string",
  "review": {
    "comment": "string",
    "createTime": "string",
    "name": "string",
    "reviewId": "string",
    "reviewReply": {
      "comment": "string",
      "updateTime": "string"
    },
    "reviewer": {
      "displayName": "string",
      "isAnonymous": true,
      "profilePhotoUrl": "string"
    },
    "starRating": "STAR_RATING_UNSPECIFIED",
    "updateTime": "string"
  }
}
```

Represents a review with location information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Location resource name.|
|review|[Review](#schemareview)|false|none|A review for the location.|

<h2 id="tocS_LocationState">LocationState</h2>
<!-- backwards compatibility -->
<a id="schemalocationstate"></a>
<a id="schema_LocationState"></a>
<a id="tocSlocationstate"></a>
<a id="tocslocationstate"></a>

```json
{
  "canDelete": true,
  "canHaveFoodMenus": true,
  "canModifyServiceList": true,
  "canOperateHealthData": true,
  "canOperateLodgingData": true,
  "canUpdate": true,
  "hasPendingEdits": true,
  "hasPendingVerification": true,
  "isDisabled": true,
  "isDisconnected": true,
  "isDuplicate": true,
  "isGoogleUpdated": true,
  "isLocalPostApiDisabled": true,
  "isPendingReview": true,
  "isPublished": true,
  "isSuspended": true,
  "isVerified": true,
  "needsReverification": true
}
```

Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canDelete|boolean|false|none|Output only. Indicates whether the location can be deleted using the Google My Business API.|
|canHaveFoodMenus|boolean|false|read-only|Output only. Indicates if the listing is eligible for food menu.|
|canModifyServiceList|boolean|false|read-only|Output only. Indicates if the listing can modify a ServiceList.|
|canOperateHealthData|boolean|false|read-only|Output only. Indicates whether the location can operate on Health data.|
|canOperateLodgingData|boolean|false|read-only|Output only. Indicates whether the location can operate on Lodging data.|
|canUpdate|boolean|false|none|Output only. Indicates whether the location can be updated.|
|hasPendingEdits|boolean|false|none|Output only. Indicates whether any of this Location's properties are in the edit pending state.|
|hasPendingVerification|boolean|false|none|Output only. Indicates whether the location has pending verification requests.|
|isDisabled|boolean|false|none|Output only. Indicates whether the location is disabled.|
|isDisconnected|boolean|false|none|Output only. Indicates whether the location is disconnected from a place on Google Maps.|
|isDuplicate|boolean|false|none|Output only. Indicates whether the location is a duplicate of another location.|
|isGoogleUpdated|boolean|false|none|Output only. Indicates whether the place ID associated with this location has updates.|
|isLocalPostApiDisabled|boolean|false|none|Output only. Indicates whether [accounts.locations.localPosts](/my-business/reference/rest/v4/accounts.locations.localPosts) is disabled for this location.|
|isPendingReview|boolean|false|none|Output only. Indicates whether the review of the location is pending.|
|isPublished|boolean|false|none|Output only. Indicates whether the location is published.|
|isSuspended|boolean|false|none|Output only. Indicates whether the location is suspended. Suspended locations are not visible to end users in Google products. If you believe this was a mistake, see the [help center article] (https://support.google.com/business/answer/4569145).|
|isVerified|boolean|false|none|Output only. Indicates whether the location is verified.|
|needsReverification|boolean|false|none|Output only. Indicates whether the location requires reverification.|

<h2 id="tocS_Lodging">Lodging</h2>
<!-- backwards compatibility -->
<a id="schemalodging"></a>
<a id="schema_Lodging"></a>
<a id="tocSlodging"></a>
<a id="tocslodging"></a>

```json
{
  "accessibility": {
    "mobilityAccessible": true,
    "mobilityAccessibleElevator": true,
    "mobilityAccessibleElevatorException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessibleParking": true,
    "mobilityAccessibleParkingException": "EXCEPTION_UNSPECIFIED",
    "mobilityAccessiblePool": true,
    "mobilityAccessiblePoolException": "EXCEPTION_UNSPECIFIED"
  },
  "activities": {
    "beachAccess": true,
    "beachAccessException": "EXCEPTION_UNSPECIFIED",
    "beachFront": true,
    "beachFrontException": "EXCEPTION_UNSPECIFIED",
    "bicycleRental": true,
    "bicycleRentalException": "EXCEPTION_UNSPECIFIED",
    "boutiqueStores": true,
    "boutiqueStoresException": "EXCEPTION_UNSPECIFIED",
    "casino": true,
    "casinoException": "EXCEPTION_UNSPECIFIED",
    "freeBicycleRental": true,
    "freeBicycleRentalException": "EXCEPTION_UNSPECIFIED",
    "freeWatercraftRental": true,
    "freeWatercraftRentalException": "EXCEPTION_UNSPECIFIED",
    "gameRoom": true,
    "gameRoomException": "EXCEPTION_UNSPECIFIED",
    "golf": true,
    "golfException": "EXCEPTION_UNSPECIFIED",
    "horsebackRiding": true,
    "horsebackRidingException": "EXCEPTION_UNSPECIFIED",
    "nightclub": true,
    "nightclubException": "EXCEPTION_UNSPECIFIED",
    "privateBeach": true,
    "privateBeachException": "EXCEPTION_UNSPECIFIED",
    "scuba": true,
    "scubaException": "EXCEPTION_UNSPECIFIED",
    "snorkeling": true,
    "snorkelingException": "EXCEPTION_UNSPECIFIED",
    "tennis": true,
    "tennisException": "EXCEPTION_UNSPECIFIED",
    "waterSkiing": true,
    "waterSkiingException": "EXCEPTION_UNSPECIFIED",
    "watercraftRental": true,
    "watercraftRentalException": "EXCEPTION_UNSPECIFIED"
  },
  "allUnits": {
    "bungalowOrVilla": true,
    "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
    "connectingUnitAvailable": true,
    "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
    "executiveFloor": true,
    "executiveFloorException": "EXCEPTION_UNSPECIFIED",
    "maxAdultOccupantsCount": 0,
    "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxChildOccupantsCount": 0,
    "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxOccupantsCount": 0,
    "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "privateHome": true,
    "privateHomeException": "EXCEPTION_UNSPECIFIED",
    "suite": true,
    "suiteException": "EXCEPTION_UNSPECIFIED",
    "tier": "UNIT_TIER_UNSPECIFIED",
    "tierException": "EXCEPTION_UNSPECIFIED",
    "totalLivingAreas": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "views": {
      "beachView": true,
      "beachViewException": "EXCEPTION_UNSPECIFIED",
      "cityView": true,
      "cityViewException": "EXCEPTION_UNSPECIFIED",
      "gardenView": true,
      "gardenViewException": "EXCEPTION_UNSPECIFIED",
      "lakeView": true,
      "lakeViewException": "EXCEPTION_UNSPECIFIED",
      "landmarkView": true,
      "landmarkViewException": "EXCEPTION_UNSPECIFIED",
      "oceanView": true,
      "oceanViewException": "EXCEPTION_UNSPECIFIED",
      "poolView": true,
      "poolViewException": "EXCEPTION_UNSPECIFIED",
      "valleyView": true,
      "valleyViewException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "business": {
    "businessCenter": true,
    "businessCenterException": "EXCEPTION_UNSPECIFIED",
    "meetingRooms": true,
    "meetingRoomsCount": 0,
    "meetingRoomsCountException": "EXCEPTION_UNSPECIFIED",
    "meetingRoomsException": "EXCEPTION_UNSPECIFIED"
  },
  "commonLivingArea": {
    "accessibility": {
      "adaCompliantUnit": true,
      "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleDoorbell": true,
      "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleFireAlarm": true,
      "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
      "hearingAccessibleUnit": true,
      "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleBathtub": true,
      "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleShower": true,
      "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleToilet": true,
      "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
      "mobilityAccessibleUnit": true,
      "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
    },
    "eating": {
      "coffeeMaker": true,
      "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
      "cookware": true,
      "cookwareException": "EXCEPTION_UNSPECIFIED",
      "dishwasher": true,
      "dishwasherException": "EXCEPTION_UNSPECIFIED",
      "indoorGrill": true,
      "indoorGrillException": "EXCEPTION_UNSPECIFIED",
      "kettle": true,
      "kettleException": "EXCEPTION_UNSPECIFIED",
      "kitchenAvailable": true,
      "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
      "microwave": true,
      "microwaveException": "EXCEPTION_UNSPECIFIED",
      "minibar": true,
      "minibarException": "EXCEPTION_UNSPECIFIED",
      "outdoorGrill": true,
      "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
      "oven": true,
      "ovenException": "EXCEPTION_UNSPECIFIED",
      "refrigerator": true,
      "refrigeratorException": "EXCEPTION_UNSPECIFIED",
      "sink": true,
      "sinkException": "EXCEPTION_UNSPECIFIED",
      "snackbar": true,
      "snackbarException": "EXCEPTION_UNSPECIFIED",
      "stove": true,
      "stoveException": "EXCEPTION_UNSPECIFIED",
      "teaStation": true,
      "teaStationException": "EXCEPTION_UNSPECIFIED",
      "toaster": true,
      "toasterException": "EXCEPTION_UNSPECIFIED"
    },
    "features": {
      "airConditioning": true,
      "airConditioningException": "EXCEPTION_UNSPECIFIED",
      "bathtub": true,
      "bathtubException": "EXCEPTION_UNSPECIFIED",
      "bidet": true,
      "bidetException": "EXCEPTION_UNSPECIFIED",
      "dryer": true,
      "dryerException": "EXCEPTION_UNSPECIFIED",
      "electronicRoomKey": true,
      "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
      "fireplace": true,
      "fireplaceException": "EXCEPTION_UNSPECIFIED",
      "hairdryer": true,
      "hairdryerException": "EXCEPTION_UNSPECIFIED",
      "heating": true,
      "heatingException": "EXCEPTION_UNSPECIFIED",
      "inunitSafe": true,
      "inunitSafeException": "EXCEPTION_UNSPECIFIED",
      "inunitWifiAvailable": true,
      "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
      "ironingEquipment": true,
      "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
      "payPerViewMovies": true,
      "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
      "privateBathroom": true,
      "privateBathroomException": "EXCEPTION_UNSPECIFIED",
      "shower": true,
      "showerException": "EXCEPTION_UNSPECIFIED",
      "toilet": true,
      "toiletException": "EXCEPTION_UNSPECIFIED",
      "tv": true,
      "tvCasting": true,
      "tvCastingException": "EXCEPTION_UNSPECIFIED",
      "tvException": "EXCEPTION_UNSPECIFIED",
      "tvStreaming": true,
      "tvStreamingException": "EXCEPTION_UNSPECIFIED",
      "universalPowerAdapters": true,
      "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
      "washer": true,
      "washerException": "EXCEPTION_UNSPECIFIED"
    },
    "layout": {
      "balcony": true,
      "balconyException": "EXCEPTION_UNSPECIFIED",
      "livingAreaSqMeters": 0,
      "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
      "loft": true,
      "loftException": "EXCEPTION_UNSPECIFIED",
      "nonSmoking": true,
      "nonSmokingException": "EXCEPTION_UNSPECIFIED",
      "patio": true,
      "patioException": "EXCEPTION_UNSPECIFIED",
      "stairs": true,
      "stairsException": "EXCEPTION_UNSPECIFIED"
    },
    "sleeping": {
      "bedsCount": 0,
      "bedsCountException": "EXCEPTION_UNSPECIFIED",
      "bunkBedsCount": 0,
      "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
      "cribsCount": 0,
      "cribsCountException": "EXCEPTION_UNSPECIFIED",
      "doubleBedsCount": 0,
      "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
      "featherPillows": true,
      "featherPillowsException": "EXCEPTION_UNSPECIFIED",
      "hypoallergenicBedding": true,
      "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
      "kingBedsCount": 0,
      "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
      "memoryFoamPillows": true,
      "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
      "otherBedsCount": 0,
      "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
      "queenBedsCount": 0,
      "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
      "rollAwayBedsCount": 0,
      "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
      "singleOrTwinBedsCount": 0,
      "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
      "sofaBedsCount": 0,
      "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
      "syntheticPillows": true,
      "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "connectivity": {
    "freeWifi": true,
    "freeWifiException": "EXCEPTION_UNSPECIFIED",
    "publicAreaWifiAvailable": true,
    "publicAreaWifiAvailableException": "EXCEPTION_UNSPECIFIED",
    "publicInternetTerminal": true,
    "publicInternetTerminalException": "EXCEPTION_UNSPECIFIED",
    "wifiAvailable": true,
    "wifiAvailableException": "EXCEPTION_UNSPECIFIED"
  },
  "families": {
    "babysitting": true,
    "babysittingException": "EXCEPTION_UNSPECIFIED",
    "kidsActivities": true,
    "kidsActivitiesException": "EXCEPTION_UNSPECIFIED",
    "kidsClub": true,
    "kidsClubException": "EXCEPTION_UNSPECIFIED"
  },
  "foodAndDrink": {
    "bar": true,
    "barException": "EXCEPTION_UNSPECIFIED",
    "breakfastAvailable": true,
    "breakfastAvailableException": "EXCEPTION_UNSPECIFIED",
    "breakfastBuffet": true,
    "breakfastBuffetException": "EXCEPTION_UNSPECIFIED",
    "buffet": true,
    "buffetException": "EXCEPTION_UNSPECIFIED",
    "dinnerBuffet": true,
    "dinnerBuffetException": "EXCEPTION_UNSPECIFIED",
    "freeBreakfast": true,
    "freeBreakfastException": "EXCEPTION_UNSPECIFIED",
    "restaurant": true,
    "restaurantException": "EXCEPTION_UNSPECIFIED",
    "restaurantsCount": 0,
    "restaurantsCountException": "EXCEPTION_UNSPECIFIED",
    "roomService": true,
    "roomServiceException": "EXCEPTION_UNSPECIFIED",
    "tableService": true,
    "tableServiceException": "EXCEPTION_UNSPECIFIED",
    "twentyFourHourRoomService": true,
    "twentyFourHourRoomServiceException": "EXCEPTION_UNSPECIFIED",
    "vendingMachine": true,
    "vendingMachineException": "EXCEPTION_UNSPECIFIED"
  },
  "guestUnits": [
    {
      "codes": [
        "string"
      ],
      "features": {
        "bungalowOrVilla": true,
        "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
        "connectingUnitAvailable": true,
        "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
        "executiveFloor": true,
        "executiveFloorException": "EXCEPTION_UNSPECIFIED",
        "maxAdultOccupantsCount": 0,
        "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "maxChildOccupantsCount": 0,
        "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "maxOccupantsCount": 0,
        "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
        "privateHome": true,
        "privateHomeException": "EXCEPTION_UNSPECIFIED",
        "suite": true,
        "suiteException": "EXCEPTION_UNSPECIFIED",
        "tier": "UNIT_TIER_UNSPECIFIED",
        "tierException": "EXCEPTION_UNSPECIFIED",
        "totalLivingAreas": {
          "accessibility": {
            "adaCompliantUnit": true,
            "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleDoorbell": true,
            "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleFireAlarm": true,
            "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
            "hearingAccessibleUnit": true,
            "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleBathtub": true,
            "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleShower": true,
            "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleToilet": true,
            "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
            "mobilityAccessibleUnit": true,
            "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
          },
          "eating": {
            "coffeeMaker": true,
            "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
            "cookware": true,
            "cookwareException": "EXCEPTION_UNSPECIFIED",
            "dishwasher": true,
            "dishwasherException": "EXCEPTION_UNSPECIFIED",
            "indoorGrill": true,
            "indoorGrillException": "EXCEPTION_UNSPECIFIED",
            "kettle": true,
            "kettleException": "EXCEPTION_UNSPECIFIED",
            "kitchenAvailable": true,
            "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
            "microwave": true,
            "microwaveException": "EXCEPTION_UNSPECIFIED",
            "minibar": true,
            "minibarException": "EXCEPTION_UNSPECIFIED",
            "outdoorGrill": true,
            "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
            "oven": true,
            "ovenException": "EXCEPTION_UNSPECIFIED",
            "refrigerator": true,
            "refrigeratorException": "EXCEPTION_UNSPECIFIED",
            "sink": true,
            "sinkException": "EXCEPTION_UNSPECIFIED",
            "snackbar": true,
            "snackbarException": "EXCEPTION_UNSPECIFIED",
            "stove": true,
            "stoveException": "EXCEPTION_UNSPECIFIED",
            "teaStation": true,
            "teaStationException": "EXCEPTION_UNSPECIFIED",
            "toaster": true,
            "toasterException": "EXCEPTION_UNSPECIFIED"
          },
          "features": {
            "airConditioning": true,
            "airConditioningException": "EXCEPTION_UNSPECIFIED",
            "bathtub": true,
            "bathtubException": "EXCEPTION_UNSPECIFIED",
            "bidet": true,
            "bidetException": "EXCEPTION_UNSPECIFIED",
            "dryer": true,
            "dryerException": "EXCEPTION_UNSPECIFIED",
            "electronicRoomKey": true,
            "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
            "fireplace": true,
            "fireplaceException": "EXCEPTION_UNSPECIFIED",
            "hairdryer": true,
            "hairdryerException": "EXCEPTION_UNSPECIFIED",
            "heating": true,
            "heatingException": "EXCEPTION_UNSPECIFIED",
            "inunitSafe": true,
            "inunitSafeException": "EXCEPTION_UNSPECIFIED",
            "inunitWifiAvailable": true,
            "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
            "ironingEquipment": true,
            "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
            "payPerViewMovies": true,
            "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
            "privateBathroom": true,
            "privateBathroomException": "EXCEPTION_UNSPECIFIED",
            "shower": true,
            "showerException": "EXCEPTION_UNSPECIFIED",
            "toilet": true,
            "toiletException": "EXCEPTION_UNSPECIFIED",
            "tv": true,
            "tvCasting": true,
            "tvCastingException": "EXCEPTION_UNSPECIFIED",
            "tvException": "EXCEPTION_UNSPECIFIED",
            "tvStreaming": true,
            "tvStreamingException": "EXCEPTION_UNSPECIFIED",
            "universalPowerAdapters": true,
            "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
            "washer": true,
            "washerException": "EXCEPTION_UNSPECIFIED"
          },
          "layout": {
            "balcony": true,
            "balconyException": "EXCEPTION_UNSPECIFIED",
            "livingAreaSqMeters": 0,
            "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
            "loft": true,
            "loftException": "EXCEPTION_UNSPECIFIED",
            "nonSmoking": true,
            "nonSmokingException": "EXCEPTION_UNSPECIFIED",
            "patio": true,
            "patioException": "EXCEPTION_UNSPECIFIED",
            "stairs": true,
            "stairsException": "EXCEPTION_UNSPECIFIED"
          },
          "sleeping": {
            "bedsCount": 0,
            "bedsCountException": "EXCEPTION_UNSPECIFIED",
            "bunkBedsCount": 0,
            "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
            "cribsCount": 0,
            "cribsCountException": "EXCEPTION_UNSPECIFIED",
            "doubleBedsCount": 0,
            "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
            "featherPillows": true,
            "featherPillowsException": "EXCEPTION_UNSPECIFIED",
            "hypoallergenicBedding": true,
            "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
            "kingBedsCount": 0,
            "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
            "memoryFoamPillows": true,
            "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
            "otherBedsCount": 0,
            "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
            "queenBedsCount": 0,
            "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
            "rollAwayBedsCount": 0,
            "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
            "singleOrTwinBedsCount": 0,
            "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
            "sofaBedsCount": 0,
            "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
            "syntheticPillows": true,
            "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
          }
        },
        "views": {
          "beachView": true,
          "beachViewException": "EXCEPTION_UNSPECIFIED",
          "cityView": true,
          "cityViewException": "EXCEPTION_UNSPECIFIED",
          "gardenView": true,
          "gardenViewException": "EXCEPTION_UNSPECIFIED",
          "lakeView": true,
          "lakeViewException": "EXCEPTION_UNSPECIFIED",
          "landmarkView": true,
          "landmarkViewException": "EXCEPTION_UNSPECIFIED",
          "oceanView": true,
          "oceanViewException": "EXCEPTION_UNSPECIFIED",
          "poolView": true,
          "poolViewException": "EXCEPTION_UNSPECIFIED",
          "valleyView": true,
          "valleyViewException": "EXCEPTION_UNSPECIFIED"
        }
      },
      "label": "string"
    }
  ],
  "healthAndSafety": {
    "enhancedCleaning": {
      "commercialGradeDisinfectantCleaning": true,
      "commercialGradeDisinfectantCleaningException": "EXCEPTION_UNSPECIFIED",
      "commonAreasEnhancedCleaning": true,
      "commonAreasEnhancedCleaningException": "EXCEPTION_UNSPECIFIED",
      "employeesTrainedCleaningProcedures": true,
      "employeesTrainedCleaningProceduresException": "EXCEPTION_UNSPECIFIED",
      "employeesTrainedThoroughHandWashing": true,
      "employeesTrainedThoroughHandWashingException": "EXCEPTION_UNSPECIFIED",
      "employeesWearProtectiveEquipment": true,
      "employeesWearProtectiveEquipmentException": "EXCEPTION_UNSPECIFIED",
      "guestRoomsEnhancedCleaning": true,
      "guestRoomsEnhancedCleaningException": "EXCEPTION_UNSPECIFIED"
    },
    "increasedFoodSafety": {
      "diningAreasAdditionalSanitation": true,
      "diningAreasAdditionalSanitationException": "EXCEPTION_UNSPECIFIED",
      "disposableFlatware": true,
      "disposableFlatwareException": "EXCEPTION_UNSPECIFIED",
      "foodPreparationAndServingAdditionalSafety": true,
      "foodPreparationAndServingAdditionalSafetyException": "EXCEPTION_UNSPECIFIED",
      "individualPackagedMeals": true,
      "individualPackagedMealsException": "EXCEPTION_UNSPECIFIED",
      "singleUseFoodMenus": true,
      "singleUseFoodMenusException": "EXCEPTION_UNSPECIFIED"
    },
    "minimizedContact": {
      "contactlessCheckinCheckout": true,
      "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
      "digitalGuestRoomKeys": true,
      "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
      "housekeepingScheduledRequestOnly": true,
      "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
      "noHighTouchItemsCommonAreas": true,
      "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
      "noHighTouchItemsGuestRooms": true,
      "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
      "plasticKeycardsDisinfected": true,
      "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
      "roomBookingsBuffer": true,
      "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
    },
    "personalProtection": {
      "commonAreasOfferSanitizingItems": true,
      "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
      "faceMaskRequired": true,
      "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
      "guestRoomHygieneKitsAvailable": true,
      "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
      "protectiveEquipmentAvailable": true,
      "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
    },
    "physicalDistancing": {
      "commonAreasPhysicalDistancingArranged": true,
      "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
      "physicalDistancingRequired": true,
      "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
      "safetyDividers": true,
      "safetyDividersException": "EXCEPTION_UNSPECIFIED",
      "sharedAreasLimitedOccupancy": true,
      "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
      "wellnessAreasHavePrivateSpaces": true,
      "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "housekeeping": {
    "dailyHousekeeping": true,
    "dailyHousekeepingException": "EXCEPTION_UNSPECIFIED",
    "housekeepingAvailable": true,
    "housekeepingAvailableException": "EXCEPTION_UNSPECIFIED",
    "turndownService": true,
    "turndownServiceException": "EXCEPTION_UNSPECIFIED"
  },
  "metadata": {
    "updateTime": "string"
  },
  "name": "string",
  "parking": {
    "electricCarChargingStations": true,
    "electricCarChargingStationsException": "EXCEPTION_UNSPECIFIED",
    "freeParking": true,
    "freeParkingException": "EXCEPTION_UNSPECIFIED",
    "freeSelfParking": true,
    "freeSelfParkingException": "EXCEPTION_UNSPECIFIED",
    "freeValetParking": true,
    "freeValetParkingException": "EXCEPTION_UNSPECIFIED",
    "parkingAvailable": true,
    "parkingAvailableException": "EXCEPTION_UNSPECIFIED",
    "selfParkingAvailable": true,
    "selfParkingAvailableException": "EXCEPTION_UNSPECIFIED",
    "valetParkingAvailable": true,
    "valetParkingAvailableException": "EXCEPTION_UNSPECIFIED"
  },
  "pets": {
    "catsAllowed": true,
    "catsAllowedException": "EXCEPTION_UNSPECIFIED",
    "dogsAllowed": true,
    "dogsAllowedException": "EXCEPTION_UNSPECIFIED",
    "petsAllowed": true,
    "petsAllowedException": "EXCEPTION_UNSPECIFIED",
    "petsAllowedFree": true,
    "petsAllowedFreeException": "EXCEPTION_UNSPECIFIED"
  },
  "policies": {
    "allInclusiveAvailable": true,
    "allInclusiveAvailableException": "EXCEPTION_UNSPECIFIED",
    "allInclusiveOnly": true,
    "allInclusiveOnlyException": "EXCEPTION_UNSPECIFIED",
    "checkinTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "checkinTimeException": "EXCEPTION_UNSPECIFIED",
    "checkoutTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    },
    "checkoutTimeException": "EXCEPTION_UNSPECIFIED",
    "kidsStayFree": true,
    "kidsStayFreeException": "EXCEPTION_UNSPECIFIED",
    "maxChildAge": 0,
    "maxChildAgeException": "EXCEPTION_UNSPECIFIED",
    "maxKidsStayFreeCount": 0,
    "maxKidsStayFreeCountException": "EXCEPTION_UNSPECIFIED",
    "paymentOptions": {
      "cash": true,
      "cashException": "EXCEPTION_UNSPECIFIED",
      "cheque": true,
      "chequeException": "EXCEPTION_UNSPECIFIED",
      "creditCard": true,
      "creditCardException": "EXCEPTION_UNSPECIFIED",
      "debitCard": true,
      "debitCardException": "EXCEPTION_UNSPECIFIED",
      "mobileNfc": true,
      "mobileNfcException": "EXCEPTION_UNSPECIFIED"
    },
    "smokeFreeProperty": true,
    "smokeFreePropertyException": "EXCEPTION_UNSPECIFIED"
  },
  "pools": {
    "adultPool": true,
    "adultPoolException": "EXCEPTION_UNSPECIFIED",
    "hotTub": true,
    "hotTubException": "EXCEPTION_UNSPECIFIED",
    "indoorPool": true,
    "indoorPoolException": "EXCEPTION_UNSPECIFIED",
    "indoorPoolsCount": 0,
    "indoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
    "lazyRiver": true,
    "lazyRiverException": "EXCEPTION_UNSPECIFIED",
    "lifeguard": true,
    "lifeguardException": "EXCEPTION_UNSPECIFIED",
    "outdoorPool": true,
    "outdoorPoolException": "EXCEPTION_UNSPECIFIED",
    "outdoorPoolsCount": 0,
    "outdoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
    "pool": true,
    "poolException": "EXCEPTION_UNSPECIFIED",
    "poolsCount": 0,
    "poolsCountException": "EXCEPTION_UNSPECIFIED",
    "wadingPool": true,
    "wadingPoolException": "EXCEPTION_UNSPECIFIED",
    "waterPark": true,
    "waterParkException": "EXCEPTION_UNSPECIFIED",
    "waterslide": true,
    "waterslideException": "EXCEPTION_UNSPECIFIED",
    "wavePool": true,
    "wavePoolException": "EXCEPTION_UNSPECIFIED"
  },
  "property": {
    "builtYear": 0,
    "builtYearException": "EXCEPTION_UNSPECIFIED",
    "floorsCount": 0,
    "floorsCountException": "EXCEPTION_UNSPECIFIED",
    "lastRenovatedYear": 0,
    "lastRenovatedYearException": "EXCEPTION_UNSPECIFIED",
    "roomsCount": 0,
    "roomsCountException": "EXCEPTION_UNSPECIFIED"
  },
  "services": {
    "baggageStorage": true,
    "baggageStorageException": "EXCEPTION_UNSPECIFIED",
    "concierge": true,
    "conciergeException": "EXCEPTION_UNSPECIFIED",
    "convenienceStore": true,
    "convenienceStoreException": "EXCEPTION_UNSPECIFIED",
    "currencyExchange": true,
    "currencyExchangeException": "EXCEPTION_UNSPECIFIED",
    "elevator": true,
    "elevatorException": "EXCEPTION_UNSPECIFIED",
    "frontDesk": true,
    "frontDeskException": "EXCEPTION_UNSPECIFIED",
    "fullServiceLaundry": true,
    "fullServiceLaundryException": "EXCEPTION_UNSPECIFIED",
    "giftShop": true,
    "giftShopException": "EXCEPTION_UNSPECIFIED",
    "languagesSpoken": {
      "arabicSpoken": true,
      "arabicSpokenException": "EXCEPTION_UNSPECIFIED",
      "cantoneseSpoken": true,
      "cantoneseSpokenException": "EXCEPTION_UNSPECIFIED",
      "dutchSpoken": true,
      "dutchSpokenException": "EXCEPTION_UNSPECIFIED",
      "englishSpoken": true,
      "englishSpokenException": "EXCEPTION_UNSPECIFIED",
      "filipinoSpoken": true,
      "filipinoSpokenException": "EXCEPTION_UNSPECIFIED",
      "frenchSpoken": true,
      "frenchSpokenException": "EXCEPTION_UNSPECIFIED",
      "germanSpoken": true,
      "germanSpokenException": "EXCEPTION_UNSPECIFIED",
      "hindiSpoken": true,
      "hindiSpokenException": "EXCEPTION_UNSPECIFIED",
      "indonesianSpoken": true,
      "indonesianSpokenException": "EXCEPTION_UNSPECIFIED",
      "italianSpoken": true,
      "italianSpokenException": "EXCEPTION_UNSPECIFIED",
      "japaneseSpoken": true,
      "japaneseSpokenException": "EXCEPTION_UNSPECIFIED",
      "koreanSpoken": true,
      "koreanSpokenException": "EXCEPTION_UNSPECIFIED",
      "mandarinSpoken": true,
      "mandarinSpokenException": "EXCEPTION_UNSPECIFIED",
      "portugueseSpoken": true,
      "portugueseSpokenException": "EXCEPTION_UNSPECIFIED",
      "russianSpoken": true,
      "russianSpokenException": "EXCEPTION_UNSPECIFIED",
      "spanishSpoken": true,
      "spanishSpokenException": "EXCEPTION_UNSPECIFIED",
      "vietnameseSpoken": true,
      "vietnameseSpokenException": "EXCEPTION_UNSPECIFIED"
    },
    "selfServiceLaundry": true,
    "selfServiceLaundryException": "EXCEPTION_UNSPECIFIED",
    "socialHour": true,
    "socialHourException": "EXCEPTION_UNSPECIFIED",
    "twentyFourHourFrontDesk": true,
    "twentyFourHourFrontDeskException": "EXCEPTION_UNSPECIFIED",
    "wakeUpCalls": true,
    "wakeUpCallsException": "EXCEPTION_UNSPECIFIED"
  },
  "someUnits": {
    "bungalowOrVilla": true,
    "bungalowOrVillaException": "EXCEPTION_UNSPECIFIED",
    "connectingUnitAvailable": true,
    "connectingUnitAvailableException": "EXCEPTION_UNSPECIFIED",
    "executiveFloor": true,
    "executiveFloorException": "EXCEPTION_UNSPECIFIED",
    "maxAdultOccupantsCount": 0,
    "maxAdultOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxChildOccupantsCount": 0,
    "maxChildOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "maxOccupantsCount": 0,
    "maxOccupantsCountException": "EXCEPTION_UNSPECIFIED",
    "privateHome": true,
    "privateHomeException": "EXCEPTION_UNSPECIFIED",
    "suite": true,
    "suiteException": "EXCEPTION_UNSPECIFIED",
    "tier": "UNIT_TIER_UNSPECIFIED",
    "tierException": "EXCEPTION_UNSPECIFIED",
    "totalLivingAreas": {
      "accessibility": {
        "adaCompliantUnit": true,
        "adaCompliantUnitException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleDoorbell": true,
        "hearingAccessibleDoorbellException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleFireAlarm": true,
        "hearingAccessibleFireAlarmException": "EXCEPTION_UNSPECIFIED",
        "hearingAccessibleUnit": true,
        "hearingAccessibleUnitException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleBathtub": true,
        "mobilityAccessibleBathtubException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleShower": true,
        "mobilityAccessibleShowerException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleToilet": true,
        "mobilityAccessibleToiletException": "EXCEPTION_UNSPECIFIED",
        "mobilityAccessibleUnit": true,
        "mobilityAccessibleUnitException": "EXCEPTION_UNSPECIFIED"
      },
      "eating": {
        "coffeeMaker": true,
        "coffeeMakerException": "EXCEPTION_UNSPECIFIED",
        "cookware": true,
        "cookwareException": "EXCEPTION_UNSPECIFIED",
        "dishwasher": true,
        "dishwasherException": "EXCEPTION_UNSPECIFIED",
        "indoorGrill": true,
        "indoorGrillException": "EXCEPTION_UNSPECIFIED",
        "kettle": true,
        "kettleException": "EXCEPTION_UNSPECIFIED",
        "kitchenAvailable": true,
        "kitchenAvailableException": "EXCEPTION_UNSPECIFIED",
        "microwave": true,
        "microwaveException": "EXCEPTION_UNSPECIFIED",
        "minibar": true,
        "minibarException": "EXCEPTION_UNSPECIFIED",
        "outdoorGrill": true,
        "outdoorGrillException": "EXCEPTION_UNSPECIFIED",
        "oven": true,
        "ovenException": "EXCEPTION_UNSPECIFIED",
        "refrigerator": true,
        "refrigeratorException": "EXCEPTION_UNSPECIFIED",
        "sink": true,
        "sinkException": "EXCEPTION_UNSPECIFIED",
        "snackbar": true,
        "snackbarException": "EXCEPTION_UNSPECIFIED",
        "stove": true,
        "stoveException": "EXCEPTION_UNSPECIFIED",
        "teaStation": true,
        "teaStationException": "EXCEPTION_UNSPECIFIED",
        "toaster": true,
        "toasterException": "EXCEPTION_UNSPECIFIED"
      },
      "features": {
        "airConditioning": true,
        "airConditioningException": "EXCEPTION_UNSPECIFIED",
        "bathtub": true,
        "bathtubException": "EXCEPTION_UNSPECIFIED",
        "bidet": true,
        "bidetException": "EXCEPTION_UNSPECIFIED",
        "dryer": true,
        "dryerException": "EXCEPTION_UNSPECIFIED",
        "electronicRoomKey": true,
        "electronicRoomKeyException": "EXCEPTION_UNSPECIFIED",
        "fireplace": true,
        "fireplaceException": "EXCEPTION_UNSPECIFIED",
        "hairdryer": true,
        "hairdryerException": "EXCEPTION_UNSPECIFIED",
        "heating": true,
        "heatingException": "EXCEPTION_UNSPECIFIED",
        "inunitSafe": true,
        "inunitSafeException": "EXCEPTION_UNSPECIFIED",
        "inunitWifiAvailable": true,
        "inunitWifiAvailableException": "EXCEPTION_UNSPECIFIED",
        "ironingEquipment": true,
        "ironingEquipmentException": "EXCEPTION_UNSPECIFIED",
        "payPerViewMovies": true,
        "payPerViewMoviesException": "EXCEPTION_UNSPECIFIED",
        "privateBathroom": true,
        "privateBathroomException": "EXCEPTION_UNSPECIFIED",
        "shower": true,
        "showerException": "EXCEPTION_UNSPECIFIED",
        "toilet": true,
        "toiletException": "EXCEPTION_UNSPECIFIED",
        "tv": true,
        "tvCasting": true,
        "tvCastingException": "EXCEPTION_UNSPECIFIED",
        "tvException": "EXCEPTION_UNSPECIFIED",
        "tvStreaming": true,
        "tvStreamingException": "EXCEPTION_UNSPECIFIED",
        "universalPowerAdapters": true,
        "universalPowerAdaptersException": "EXCEPTION_UNSPECIFIED",
        "washer": true,
        "washerException": "EXCEPTION_UNSPECIFIED"
      },
      "layout": {
        "balcony": true,
        "balconyException": "EXCEPTION_UNSPECIFIED",
        "livingAreaSqMeters": 0,
        "livingAreaSqMetersException": "EXCEPTION_UNSPECIFIED",
        "loft": true,
        "loftException": "EXCEPTION_UNSPECIFIED",
        "nonSmoking": true,
        "nonSmokingException": "EXCEPTION_UNSPECIFIED",
        "patio": true,
        "patioException": "EXCEPTION_UNSPECIFIED",
        "stairs": true,
        "stairsException": "EXCEPTION_UNSPECIFIED"
      },
      "sleeping": {
        "bedsCount": 0,
        "bedsCountException": "EXCEPTION_UNSPECIFIED",
        "bunkBedsCount": 0,
        "bunkBedsCountException": "EXCEPTION_UNSPECIFIED",
        "cribsCount": 0,
        "cribsCountException": "EXCEPTION_UNSPECIFIED",
        "doubleBedsCount": 0,
        "doubleBedsCountException": "EXCEPTION_UNSPECIFIED",
        "featherPillows": true,
        "featherPillowsException": "EXCEPTION_UNSPECIFIED",
        "hypoallergenicBedding": true,
        "hypoallergenicBeddingException": "EXCEPTION_UNSPECIFIED",
        "kingBedsCount": 0,
        "kingBedsCountException": "EXCEPTION_UNSPECIFIED",
        "memoryFoamPillows": true,
        "memoryFoamPillowsException": "EXCEPTION_UNSPECIFIED",
        "otherBedsCount": 0,
        "otherBedsCountException": "EXCEPTION_UNSPECIFIED",
        "queenBedsCount": 0,
        "queenBedsCountException": "EXCEPTION_UNSPECIFIED",
        "rollAwayBedsCount": 0,
        "rollAwayBedsCountException": "EXCEPTION_UNSPECIFIED",
        "singleOrTwinBedsCount": 0,
        "singleOrTwinBedsCountException": "EXCEPTION_UNSPECIFIED",
        "sofaBedsCount": 0,
        "sofaBedsCountException": "EXCEPTION_UNSPECIFIED",
        "syntheticPillows": true,
        "syntheticPillowsException": "EXCEPTION_UNSPECIFIED"
      }
    },
    "views": {
      "beachView": true,
      "beachViewException": "EXCEPTION_UNSPECIFIED",
      "cityView": true,
      "cityViewException": "EXCEPTION_UNSPECIFIED",
      "gardenView": true,
      "gardenViewException": "EXCEPTION_UNSPECIFIED",
      "lakeView": true,
      "lakeViewException": "EXCEPTION_UNSPECIFIED",
      "landmarkView": true,
      "landmarkViewException": "EXCEPTION_UNSPECIFIED",
      "oceanView": true,
      "oceanViewException": "EXCEPTION_UNSPECIFIED",
      "poolView": true,
      "poolViewException": "EXCEPTION_UNSPECIFIED",
      "valleyView": true,
      "valleyViewException": "EXCEPTION_UNSPECIFIED"
    }
  },
  "transportation": {
    "airportShuttle": true,
    "airportShuttleException": "EXCEPTION_UNSPECIFIED",
    "carRentalOnProperty": true,
    "carRentalOnPropertyException": "EXCEPTION_UNSPECIFIED",
    "freeAirportShuttle": true,
    "freeAirportShuttleException": "EXCEPTION_UNSPECIFIED",
    "freePrivateCarService": true,
    "freePrivateCarServiceException": "EXCEPTION_UNSPECIFIED",
    "localShuttle": true,
    "localShuttleException": "EXCEPTION_UNSPECIFIED",
    "privateCarService": true,
    "privateCarServiceException": "EXCEPTION_UNSPECIFIED",
    "transfer": true,
    "transferException": "EXCEPTION_UNSPECIFIED"
  },
  "wellness": {
    "doctorOnCall": true,
    "doctorOnCallException": "EXCEPTION_UNSPECIFIED",
    "ellipticalMachine": true,
    "ellipticalMachineException": "EXCEPTION_UNSPECIFIED",
    "fitnessCenter": true,
    "fitnessCenterException": "EXCEPTION_UNSPECIFIED",
    "freeFitnessCenter": true,
    "freeFitnessCenterException": "EXCEPTION_UNSPECIFIED",
    "freeWeights": true,
    "freeWeightsException": "EXCEPTION_UNSPECIFIED",
    "massage": true,
    "massageException": "EXCEPTION_UNSPECIFIED",
    "salon": true,
    "salonException": "EXCEPTION_UNSPECIFIED",
    "sauna": true,
    "saunaException": "EXCEPTION_UNSPECIFIED",
    "spa": true,
    "spaException": "EXCEPTION_UNSPECIFIED",
    "treadmill": true,
    "treadmillException": "EXCEPTION_UNSPECIFIED",
    "weightMachine": true,
    "weightMachineException": "EXCEPTION_UNSPECIFIED"
  }
}
```

Lodging of a location that provides accomodations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessibility|[Accessibility](#schemaaccessibility)|false|none|Physical adaptations made to the property in consideration of varying levels of human physical ability.|
|activities|[Activities](#schemaactivities)|false|none|Amenities and features related to leisure and play.|
|allUnits|[GuestUnitFeatures](#schemaguestunitfeatures)|false|none|All units on the property have at least these attributes.|
|business|[Business](#schemabusiness)|false|none|Features of the property of specific interest to the business traveler.|
|commonLivingArea|[LivingArea](#schemalivingarea)|false|none|Features of the shared living areas available in this Lodging.|
|connectivity|[Connectivity](#schemaconnectivity)|false|none|The ways in which the property provides guests with the ability to access the internet.|
|families|[Families](#schemafamilies)|false|none|Services and amenities for families and young guests.|
|foodAndDrink|[FoodAndDrink](#schemafoodanddrink)|false|none|Meals, snacks, and beverages available at the property.|
|guestUnits|[[GuestUnitType](#schemaguestunittype)]|false|none|Individual GuestUnitTypes that are available in this Lodging.|
|healthAndSafety|[HealthAndSafety](#schemahealthandsafety)|false|none|Health and safety measures implemented by the hotel during COVID-19.|
|housekeeping|[Housekeeping](#schemahousekeeping)|false|none|Conveniences provided in guest units to facilitate an easier, more comfortable stay.|
|metadata|[LodgingMetadata](#schemalodgingmetadata)|false|none|Required. Metadata for the lodging.|
|name|string|false|none|Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/lodging`|
|parking|[Parking](#schemaparking)|false|none|Parking options at the property.|
|pets|[Pets](#schemapets)|false|none|Policies regarding guest-owned animals.|
|policies|[Policies](#schemapolicies)|false|none|Property rules that impact guests.|
|pools|[Pools](#schemapools)|false|none|Swimming pool or recreational water facilities available at the hotel.|
|property|[Property](#schemaproperty)|false|none|General factual information about the property's physical structure and important dates.|
|services|[Services](#schemaservices)|false|none|Conveniences or help provided by the property to facilitate an easier, more comfortable stay.|
|someUnits|[GuestUnitFeatures](#schemaguestunitfeatures)|false|none|Some units on the property have as much as these attributes.|
|transportation|[Transportation](#schematransportation)|false|none|Vehicles or vehicular services facilitated or owned by the property.|
|wellness|[Wellness](#schemawellness)|false|none|Guest facilities at the property to promote or maintain health, beauty, and fitness.|

<h2 id="tocS_LodgingMetadata">LodgingMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalodgingmetadata"></a>
<a id="schema_LodgingMetadata"></a>
<a id="tocSlodgingmetadata"></a>
<a id="tocslodgingmetadata"></a>

```json
{
  "updateTime": "string"
}
```

Metadata for the Lodging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|updateTime|string(google-datetime)|false|none|Required. The latest time at which the Lodging data is asserted to be true in the real world. This is not necessarily the time at which the request is made.|

<h2 id="tocS_MatchedLocation">MatchedLocation</h2>
<!-- backwards compatibility -->
<a id="schemamatchedlocation"></a>
<a id="schema_MatchedLocation"></a>
<a id="tocSmatchedlocation"></a>
<a id="tocsmatchedlocation"></a>

```json
{
  "isExactMatch": true,
  "location": {
    "adWordsLocationExtensions": {
      "adPhone": "string"
    },
    "additionalCategories": [
      {
        "categoryId": "string",
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      }
    ],
    "additionalPhones": [
      "string"
    ],
    "address": {
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
    "attributes": [
      {
        "attributeId": "string",
        "repeatedEnumValue": {
          "setValues": [
            "string"
          ],
          "unsetValues": [
            "string"
          ]
        },
        "urlValues": [
          {
            "url": "string"
          }
        ],
        "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
        "values": [
          null
        ]
      }
    ],
    "labels": [
      "string"
    ],
    "languageCode": "string",
    "latlng": {
      "latitude": 0,
      "longitude": 0
    },
    "locationKey": {
      "explicitNoPlaceId": true,
      "placeId": "string",
      "plusPageId": "string",
      "requestId": "string"
    },
    "locationName": "string",
    "locationState": {
      "canDelete": true,
      "canHaveFoodMenus": true,
      "canModifyServiceList": true,
      "canOperateHealthData": true,
      "canOperateLodgingData": true,
      "canUpdate": true,
      "hasPendingEdits": true,
      "hasPendingVerification": true,
      "isDisabled": true,
      "isDisconnected": true,
      "isDuplicate": true,
      "isGoogleUpdated": true,
      "isLocalPostApiDisabled": true,
      "isPendingReview": true,
      "isPublished": true,
      "isSuspended": true,
      "isVerified": true,
      "needsReverification": true
    },
    "metadata": {
      "duplicate": {
        "access": "ACCESS_UNSPECIFIED",
        "locationName": "string",
        "placeId": "string"
      },
      "mapsUrl": "string",
      "newReviewUrl": "string"
    },
    "moreHours": [
      {
        "hoursTypeId": "string",
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": "string",
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": "string"
          }
        ]
      }
    ],
    "name": "string",
    "openInfo": {
      "canReopen": true,
      "openingDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
    },
    "priceLists": [
      {
        "labels": [
          {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        ],
        "priceListId": "string",
        "sections": [
          {
            "items": [
              {
                "itemId": "string",
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ],
                "price": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                }
              }
            ],
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ],
            "sectionId": "string",
            "sectionType": "SECTION_TYPE_UNSPECIFIED"
          }
        ],
        "sourceUrl": "string"
      }
    ],
    "primaryCategory": {
      "categoryId": "string",
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    },
    "primaryPhone": "string",
    "profile": {
      "description": "string"
    },
    "regularHours": {
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": "string",
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": "string"
        }
      ]
    },
    "relationshipData": {
      "parentChain": "string"
    },
    "serviceArea": {
      "businessType": "BUSINESS_TYPE_UNSPECIFIED",
      "places": {
        "placeInfos": [
          {
            "name": "string",
            "placeId": "string"
          }
        ]
      },
      "radius": {
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "radiusKm": 0
      }
    },
    "specialHours": {
      "specialHourPeriods": [
        {
          "closeTime": "string",
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "isClosed": true,
          "openTime": "string",
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "storeCode": "string",
    "websiteUrl": "string"
  }
}
```

Represents a possible match to a location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isExactMatch|boolean|false|none|Is this an exact match?|
|location|[Location](#schemalocation)|false|none|The sparsely populated location that is a potential match. Unpopulated fields include, but may not be limited to: name (the matched location cannot be retrieved via `GetLocation` nor `BatchGetLocations`); `store_code`; `service_area` coverage area details; `labels`; `ad_words_location_extensions`; `photos`|

<h2 id="tocS_MediaInsights">MediaInsights</h2>
<!-- backwards compatibility -->
<a id="schemamediainsights"></a>
<a id="schema_MediaInsights"></a>
<a id="tocSmediainsights"></a>
<a id="tocsmediainsights"></a>

```json
{
  "viewCount": "string"
}
```

Insights and statistics for the media item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|viewCount|string(int64)|false|none|Output only. The number of times the media item has been viewed.|

<h2 id="tocS_MediaItem">MediaItem</h2>
<!-- backwards compatibility -->
<a id="schemamediaitem"></a>
<a id="schema_MediaItem"></a>
<a id="tocSmediaitem"></a>
<a id="tocsmediaitem"></a>

```json
{
  "attribution": {
    "profileName": "string",
    "profilePhotoUrl": "string",
    "profileUrl": "string",
    "takedownUrl": "string"
  },
  "createTime": "string",
  "dataRef": {
    "resourceName": "string"
  },
  "description": "string",
  "dimensions": {
    "heightPixels": 0,
    "widthPixels": 0
  },
  "googleUrl": "string",
  "insights": {
    "viewCount": "string"
  },
  "locationAssociation": {
    "category": "CATEGORY_UNSPECIFIED",
    "priceListItemId": "string"
  },
  "mediaFormat": "MEDIA_FORMAT_UNSPECIFIED",
  "name": "string",
  "sourceUrl": "string",
  "thumbnailUrl": "string"
}
```

A single media item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribution|[Attribution](#schemaattribution)|false|none|Output only. Attribution information for customer media items. You must display this attribution as provided to your users and must not delete or alter the attribution.|
|createTime|string(google-datetime)|false|none|Output only. Creation time of this media item.|
|dataRef|[MediaItemDataRef](#schemamediaitemdataref)|false|none|Input only. A reference to media item binary data as obtained by the `StartUploadMediaItemData` method. When creating a media item, either sourceUrl or dataRef must be set.|
|description|string|false|none|Description for this media item. Descriptions cannot be modified through the Google My Business API, but can be set when creating a new media item that is not a cover photo.|
|dimensions|[Dimensions](#schemadimensions)|false|none|Output only. The dimensions (width and height) in pixels.|
|googleUrl|string|false|none|Output only. Google-hosted URL for this media item. This URL is not static since it may change over time. For video this will be a preview image with an overlaid play icon.|
|insights|[MediaInsights](#schemamediainsights)|false|none|Output only. Statistics for this media item.|
|locationAssociation|[LocationAssociation](#schemalocationassociation)|false|none|Required when calling `CreatePhoto`. Describes how this media item is connected to its location. Must be either a category (for example, EXTERIOR) or the ID of a price list item. This is required when adding new media to a location with `CreateMediaItem`. For other types of media, for example, photos on local posts, this will not be present.|
|mediaFormat|string|false|none|The format of this media item. Must be set when the media item is created, and is read-only on all other requests. Cannot be updated.|
|name|string|false|none|The resource name for this media item. `accounts/{account_id}/locations/{location_id}/media/{media_key}`|
|sourceUrl|string|false|none|A publicly accessible URL where the media item can be retrieved from. When creating one of this or data_ref must be set to specify the source of the media item. If `source_url` was used when creating a media item, it will be populated with that source URL when the media item is retrieved. This field cannot be updated.|
|thumbnailUrl|string|false|none|Output only. Where provided, the URL of a thumbnail image for this media item.|

#### Enumerated Values

|Property|Value|
|---|---|
|mediaFormat|MEDIA_FORMAT_UNSPECIFIED|
|mediaFormat|PHOTO|
|mediaFormat|VIDEO|

<h2 id="tocS_MediaItemDataRef">MediaItemDataRef</h2>
<!-- backwards compatibility -->
<a id="schemamediaitemdataref"></a>
<a id="schema_MediaItemDataRef"></a>
<a id="tocSmediaitemdataref"></a>
<a id="tocsmediaitemdataref"></a>

```json
{
  "resourceName": "string"
}
```

Reference to the photo binary data of a `MediaItem` uploaded through the Google My Business API. Create a data ref using StartUploadMediaItemData, and use this ref when uploading bytes to [UpdateMedia] and subsequently calling CreateMediaItem.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|none|The unique ID for this media item's binary data. Used to upload the photo data with [UpdateMedia] and when creating a new media item from those bytes with CreateMediaItem. Example of uploading bytes: `curl -X POST -T{path_to_file} "http://mybusiness.googleapis.com/upload/v1/media/{resource_name}?upload_type=media"` For CreateMediaItem calls, set this as the `MediaItem` `data_ref`.|

<h2 id="tocS_MenuLabel">MenuLabel</h2>
<!-- backwards compatibility -->
<a id="schemamenulabel"></a>
<a id="schema_MenuLabel"></a>
<a id="tocSmenulabel"></a>
<a id="tocsmenulabel"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "languageCode": "string"
}
```

Label to be used when displaying the menu and its various sub-components.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Supplementary information of the component.|
|displayName|string|false|none|Required. Display name of the component.|
|languageCode|string|false|none|Optional. The BCP 47 code of language. If the language is not available, it will default to English.|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "duplicate": {
    "access": "ACCESS_UNSPECIFIED",
    "locationName": "string",
    "placeId": "string"
  },
  "mapsUrl": "string",
  "newReviewUrl": "string"
}
```

Additional non-user-editable information about the location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duplicate|[Duplicate](#schemaduplicate)|false|none|Information about the location that this location duplicates. Only present when `location_state.is_duplicate` is true. Deprecated: We are no longer supporting detailed information for duplicates.|
|mapsUrl|string|false|none|A link to the location on Maps.|
|newReviewUrl|string|false|none|A link to the page on Google Search where a customer can leave a review for the location.|

<h2 id="tocS_MetricRequest">MetricRequest</h2>
<!-- backwards compatibility -->
<a id="schemametricrequest"></a>
<a id="schema_MetricRequest"></a>
<a id="tocSmetricrequest"></a>
<a id="tocsmetricrequest"></a>

```json
{
  "metric": "METRIC_UNSPECIFIED",
  "options": [
    "METRIC_OPTION_UNSPECIFIED"
  ]
}
```

A request to return values for one metric and the options for how those values should be returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metric|string|false|none|The requested metric.|
|options|[string]|false|none|How the values should appear when returned.|

#### Enumerated Values

|Property|Value|
|---|---|
|metric|METRIC_UNSPECIFIED|
|metric|ALL|
|metric|QUERIES_DIRECT|
|metric|QUERIES_INDIRECT|
|metric|QUERIES_CHAIN|
|metric|VIEWS_MAPS|
|metric|VIEWS_SEARCH|
|metric|ACTIONS_WEBSITE|
|metric|ACTIONS_PHONE|
|metric|ACTIONS_DRIVING_DIRECTIONS|
|metric|PHOTOS_VIEWS_MERCHANT|
|metric|PHOTOS_VIEWS_CUSTOMERS|
|metric|PHOTOS_COUNT_MERCHANT|
|metric|PHOTOS_COUNT_CUSTOMERS|
|metric|LOCAL_POST_VIEWS_SEARCH|
|metric|LOCAL_POST_ACTIONS_CALL_TO_ACTION|
|options|METRIC_OPTION_UNSPECIFIED|
|options|AGGREGATED_TOTAL|
|options|AGGREGATED_DAILY|
|options|BREAKDOWN_DAY_OF_WEEK|
|options|BREAKDOWN_HOUR_OF_DAY|

<h2 id="tocS_MetricValue">MetricValue</h2>
<!-- backwards compatibility -->
<a id="schemametricvalue"></a>
<a id="schema_MetricValue"></a>
<a id="tocSmetricvalue"></a>
<a id="tocsmetricvalue"></a>

```json
{
  "dimensionalValues": [
    {
      "metricOption": "METRIC_OPTION_UNSPECIFIED",
      "timeDimension": {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
        "timeOfDay": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "timeRange": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "value": "string"
    }
  ],
  "metric": "METRIC_UNSPECIFIED",
  "totalValue": {
    "metricOption": "METRIC_OPTION_UNSPECIFIED",
    "timeDimension": {
      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
      "timeOfDay": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "timeRange": {
        "endTime": "string",
        "startTime": "string"
      }
    },
    "value": "string"
  }
}
```

A value for a single Metric from a starting time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionalValues|[[DimensionalMetricValue](#schemadimensionalmetricvalue)]|false|none|Dimensional values for this metric.|
|metric|string|false|none|The metric for which the value applies.|
|totalValue|[DimensionalMetricValue](#schemadimensionalmetricvalue)|false|none|The total aggregated value for this metric. Set for the AGGREGATED_TOTAL option.|

#### Enumerated Values

|Property|Value|
|---|---|
|metric|METRIC_UNSPECIFIED|
|metric|ALL|
|metric|QUERIES_DIRECT|
|metric|QUERIES_INDIRECT|
|metric|QUERIES_CHAIN|
|metric|VIEWS_MAPS|
|metric|VIEWS_SEARCH|
|metric|ACTIONS_WEBSITE|
|metric|ACTIONS_PHONE|
|metric|ACTIONS_DRIVING_DIRECTIONS|
|metric|PHOTOS_VIEWS_MERCHANT|
|metric|PHOTOS_VIEWS_CUSTOMERS|
|metric|PHOTOS_COUNT_MERCHANT|
|metric|PHOTOS_COUNT_CUSTOMERS|
|metric|LOCAL_POST_VIEWS_SEARCH|
|metric|LOCAL_POST_ACTIONS_CALL_TO_ACTION|

<h2 id="tocS_MinimizedContact">MinimizedContact</h2>
<!-- backwards compatibility -->
<a id="schemaminimizedcontact"></a>
<a id="schema_MinimizedContact"></a>
<a id="tocSminimizedcontact"></a>
<a id="tocsminimizedcontact"></a>

```json
{
  "contactlessCheckinCheckout": true,
  "contactlessCheckinCheckoutException": "EXCEPTION_UNSPECIFIED",
  "digitalGuestRoomKeys": true,
  "digitalGuestRoomKeysException": "EXCEPTION_UNSPECIFIED",
  "housekeepingScheduledRequestOnly": true,
  "housekeepingScheduledRequestOnlyException": "EXCEPTION_UNSPECIFIED",
  "noHighTouchItemsCommonAreas": true,
  "noHighTouchItemsCommonAreasException": "EXCEPTION_UNSPECIFIED",
  "noHighTouchItemsGuestRooms": true,
  "noHighTouchItemsGuestRoomsException": "EXCEPTION_UNSPECIFIED",
  "plasticKeycardsDisinfected": true,
  "plasticKeycardsDisinfectedException": "EXCEPTION_UNSPECIFIED",
  "roomBookingsBuffer": true,
  "roomBookingsBufferException": "EXCEPTION_UNSPECIFIED"
}
```

Minimized contact measures implemented by the hotel during COVID-19.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactlessCheckinCheckout|boolean|false|none|No-contact check-in and check-out.|
|contactlessCheckinCheckoutException|string|false|none|Contactless check-in check-out exception.|
|digitalGuestRoomKeys|boolean|false|none|Keyless mobile entry to guest rooms.|
|digitalGuestRoomKeysException|string|false|none|Digital guest room keys exception.|
|housekeepingScheduledRequestOnly|boolean|false|none|Housekeeping scheduled by request only.|
|housekeepingScheduledRequestOnlyException|string|false|none|Housekeeping scheduled request only exception.|
|noHighTouchItemsCommonAreas|boolean|false|none|High-touch items, such as magazines, removed from common areas.|
|noHighTouchItemsCommonAreasException|string|false|none|No high touch items common areas exception.|
|noHighTouchItemsGuestRooms|boolean|false|none|High-touch items, such as decorative pillows, removed from guest rooms.|
|noHighTouchItemsGuestRoomsException|string|false|none|No high touch items guest rooms exception.|
|plasticKeycardsDisinfected|boolean|false|none|Plastic key cards are disinfected or discarded.|
|plasticKeycardsDisinfectedException|string|false|none|Plastic keycards disinfected exception.|
|roomBookingsBuffer|boolean|false|none|Buffer maintained between room bookings.|
|roomBookingsBufferException|string|false|none|Room bookings buffer exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|contactlessCheckinCheckoutException|EXCEPTION_UNSPECIFIED|
|contactlessCheckinCheckoutException|UNDER_CONSTRUCTION|
|contactlessCheckinCheckoutException|DEPENDENT_ON_SEASON|
|contactlessCheckinCheckoutException|DEPENDENT_ON_DAY_OF_WEEK|
|digitalGuestRoomKeysException|EXCEPTION_UNSPECIFIED|
|digitalGuestRoomKeysException|UNDER_CONSTRUCTION|
|digitalGuestRoomKeysException|DEPENDENT_ON_SEASON|
|digitalGuestRoomKeysException|DEPENDENT_ON_DAY_OF_WEEK|
|housekeepingScheduledRequestOnlyException|EXCEPTION_UNSPECIFIED|
|housekeepingScheduledRequestOnlyException|UNDER_CONSTRUCTION|
|housekeepingScheduledRequestOnlyException|DEPENDENT_ON_SEASON|
|housekeepingScheduledRequestOnlyException|DEPENDENT_ON_DAY_OF_WEEK|
|noHighTouchItemsCommonAreasException|EXCEPTION_UNSPECIFIED|
|noHighTouchItemsCommonAreasException|UNDER_CONSTRUCTION|
|noHighTouchItemsCommonAreasException|DEPENDENT_ON_SEASON|
|noHighTouchItemsCommonAreasException|DEPENDENT_ON_DAY_OF_WEEK|
|noHighTouchItemsGuestRoomsException|EXCEPTION_UNSPECIFIED|
|noHighTouchItemsGuestRoomsException|UNDER_CONSTRUCTION|
|noHighTouchItemsGuestRoomsException|DEPENDENT_ON_SEASON|
|noHighTouchItemsGuestRoomsException|DEPENDENT_ON_DAY_OF_WEEK|
|plasticKeycardsDisinfectedException|EXCEPTION_UNSPECIFIED|
|plasticKeycardsDisinfectedException|UNDER_CONSTRUCTION|
|plasticKeycardsDisinfectedException|DEPENDENT_ON_SEASON|
|plasticKeycardsDisinfectedException|DEPENDENT_ON_DAY_OF_WEEK|
|roomBookingsBufferException|EXCEPTION_UNSPECIFIED|
|roomBookingsBufferException|UNDER_CONSTRUCTION|
|roomBookingsBufferException|DEPENDENT_ON_SEASON|
|roomBookingsBufferException|DEPENDENT_ON_DAY_OF_WEEK|

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

<h2 id="tocS_MoreHours">MoreHours</h2>
<!-- backwards compatibility -->
<a id="schemamorehours"></a>
<a id="schema_MoreHours"></a>
<a id="tocSmorehours"></a>
<a id="tocsmorehours"></a>

```json
{
  "hoursTypeId": "string",
  "periods": [
    {
      "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
      "closeTime": "string",
      "openDay": "DAY_OF_WEEK_UNSPECIFIED",
      "openTime": "string"
    }
  ]
}
```

The time periods during which a location is open for certain types of business.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hoursTypeId|string|false|none|Required. Type of hours. Clients should call {#link businessCategories:BatchGet} to get supported hours types for categories of their locations.|
|periods|[[TimePeriod](#schematimeperiod)]|false|none|Required. A collection of times that this location is open. Each period represents a range of hours when the location is open during the week.|

<h2 id="tocS_MoreHoursType">MoreHoursType</h2>
<!-- backwards compatibility -->
<a id="schemamorehourstype"></a>
<a id="schema_MoreHoursType"></a>
<a id="tocSmorehourstype"></a>
<a id="tocsmorehourstype"></a>

```json
{
  "displayName": "string",
  "hoursTypeId": "string",
  "localizedDisplayName": "string"
}
```

More hours types that a business can offers, in addition to its regular hours.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|read-only|Output only. The human-readable English display name for the hours type.|
|hoursTypeId|string|false|read-only|Output only. A stable ID provided by Google for this hours type.|
|localizedDisplayName|string|false|read-only|Output only. The human-readable localized display name for the hours type.|

<h2 id="tocS_Notifications">Notifications</h2>
<!-- backwards compatibility -->
<a id="schemanotifications"></a>
<a id="schema_Notifications"></a>
<a id="tocSnotifications"></a>
<a id="tocsnotifications"></a>

```json
{
  "name": "string",
  "notificationTypes": [
    "NOTIFICATION_TYPE_UNSPECIFIED"
  ],
  "topicName": "string"
}
```

A Google Cloud Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification settings resource per-account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Output only. The notifications resource name.|
|notificationTypes|[string]|false|none|The types of notifications that will be sent to the Cloud Pub/Sub topic. At least one must be specified. To stop receiving notifications entirely, use DeleteNotifications.|
|topicName|string|false|none|The Google Cloud Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Cloud Pub/Sub topic.|

#### Enumerated Values

|Property|Value|
|---|---|
|notificationTypes|NOTIFICATION_TYPE_UNSPECIFIED|
|notificationTypes|GOOGLE_UPDATE|
|notificationTypes|NEW_REVIEW|
|notificationTypes|UPDATED_REVIEW|
|notificationTypes|NEW_CUSTOMER_MEDIA|
|notificationTypes|NEW_QUESTION|
|notificationTypes|UPDATED_QUESTION|
|notificationTypes|NEW_ANSWER|
|notificationTypes|UPDATED_ANSWER|
|notificationTypes|UPDATED_LOCATION_STATE|

<h2 id="tocS_NutritionFact">NutritionFact</h2>
<!-- backwards compatibility -->
<a id="schemanutritionfact"></a>
<a id="schema_NutritionFact"></a>
<a id="tocSnutritionfact"></a>
<a id="tocsnutritionfact"></a>

```json
{
  "lowerAmount": 0,
  "unit": "MASS_UNIT_UNSPECIFIED",
  "upperAmount": 0
}
```

This message denotes nutrition information with an upper bound and lower bound range and can be represented by mass unit. Lower amount must be specified. Both lower and upper amounts are non-negative numbers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lowerAmount|number(double)|false|none|Required. Lower amount of nutrition|
|unit|string|false|none|Required. Unit of the given nutrition information.|
|upperAmount|number(double)|false|none|Optional. Upper amount of nutrition|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|MASS_UNIT_UNSPECIFIED|
|unit|GRAM|
|unit|MILLIGRAM|

<h2 id="tocS_NutritionFacts">NutritionFacts</h2>
<!-- backwards compatibility -->
<a id="schemanutritionfacts"></a>
<a id="schema_NutritionFacts"></a>
<a id="tocSnutritionfacts"></a>
<a id="tocsnutritionfacts"></a>

```json
{
  "calories": {
    "lowerAmount": 0,
    "unit": "ENERGY_UNIT_UNSPECIFIED",
    "upperAmount": 0
  },
  "cholesterol": {
    "lowerAmount": 0,
    "unit": "MASS_UNIT_UNSPECIFIED",
    "upperAmount": 0
  },
  "protein": {
    "lowerAmount": 0,
    "unit": "MASS_UNIT_UNSPECIFIED",
    "upperAmount": 0
  },
  "sodium": {
    "lowerAmount": 0,
    "unit": "MASS_UNIT_UNSPECIFIED",
    "upperAmount": 0
  },
  "totalCarbohydrate": {
    "lowerAmount": 0,
    "unit": "MASS_UNIT_UNSPECIFIED",
    "upperAmount": 0
  },
  "totalFat": {
    "lowerAmount": 0,
    "unit": "MASS_UNIT_UNSPECIFIED",
    "upperAmount": 0
  }
}
```

This message represents nutrition facts for a food dish.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calories|[CaloriesFact](#schemacaloriesfact)|false|none|Optional. Calories of the dish.|
|cholesterol|[NutritionFact](#schemanutritionfact)|false|none|Optional. Cholesterol information for a given food dish.|
|protein|[NutritionFact](#schemanutritionfact)|false|none|Optional. Protein information for a given food dish.|
|sodium|[NutritionFact](#schemanutritionfact)|false|none|Optional. Sodium information for a given food dish.|
|totalCarbohydrate|[NutritionFact](#schemanutritionfact)|false|none|Optional. Carbohydrate information for a given food dish.|
|totalFat|[NutritionFact](#schemanutritionfact)|false|none|Optional. Fat information for a given food dish.|

<h2 id="tocS_OpenInfo">OpenInfo</h2>
<!-- backwards compatibility -->
<a id="schemaopeninfo"></a>
<a id="schema_OpenInfo"></a>
<a id="tocSopeninfo"></a>
<a id="tocsopeninfo"></a>

```json
{
  "canReopen": true,
  "openingDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
}
```

Information related to the opening state of the business.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canReopen|boolean|false|none|Output only. Indicates whether this business is eligible for re-open.|
|openingDate|[Date](#schemadate)|false|none|The date on which the location first opened. If the exact day is not known, month and year only can be provided. The date must be in the past or be no more than one year in the future.|
|status|string|false|none|Indicates whether or not the Location is currently open for business. All locations are open by default, unless updated to be closed.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OPEN_FOR_BUSINESS_UNSPECIFIED|
|status|OPEN|
|status|CLOSED_PERMANENTLY|
|status|CLOSED_TEMPORARILY|

<h2 id="tocS_OrganizationInfo">OrganizationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationinfo"></a>
<a id="schema_OrganizationInfo"></a>
<a id="tocSorganizationinfo"></a>
<a id="tocsorganizationinfo"></a>

```json
{
  "phoneNumber": "string",
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
  "registeredDomain": "string"
}
```

Additional Info stored for an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneNumber|string|false|none|The contact number for the organization.|
|postalAddress|[PostalAddress](#schemapostaladdress)|false|none|The postal address for the account.|
|registeredDomain|string|false|none|The registered domain for the account.|

<h2 id="tocS_Parking">Parking</h2>
<!-- backwards compatibility -->
<a id="schemaparking"></a>
<a id="schema_Parking"></a>
<a id="tocSparking"></a>
<a id="tocsparking"></a>

```json
{
  "electricCarChargingStations": true,
  "electricCarChargingStationsException": "EXCEPTION_UNSPECIFIED",
  "freeParking": true,
  "freeParkingException": "EXCEPTION_UNSPECIFIED",
  "freeSelfParking": true,
  "freeSelfParkingException": "EXCEPTION_UNSPECIFIED",
  "freeValetParking": true,
  "freeValetParkingException": "EXCEPTION_UNSPECIFIED",
  "parkingAvailable": true,
  "parkingAvailableException": "EXCEPTION_UNSPECIFIED",
  "selfParkingAvailable": true,
  "selfParkingAvailableException": "EXCEPTION_UNSPECIFIED",
  "valetParkingAvailable": true,
  "valetParkingAvailableException": "EXCEPTION_UNSPECIFIED"
}
```

Parking options at the property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|electricCarChargingStations|boolean|false|none|Electric car charging stations. Electric power stations, usually located outdoors, into which guests plug their electric cars to receive a charge.|
|electricCarChargingStationsException|string|false|none|Electric car charging stations exception.|
|freeParking|boolean|false|none|Free parking. The hotel allows the cars of guests to be parked for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff. Free parking must be available to all guests (limited conditions does not apply).|
|freeParkingException|string|false|none|Free parking exception.|
|freeSelfParking|boolean|false|none|Free self parking. Guests park their own cars for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply.|
|freeSelfParkingException|string|false|none|Free self parking exception.|
|freeValetParking|boolean|false|none|Free valet parking. Hotel staff member parks the cars of guests. Parking with this service is free.|
|freeValetParkingException|string|false|none|Free valet parking exception.|
|parkingAvailable|boolean|false|none|Parking available. The hotel allows the cars of guests to be parked. Can be free or for a fee. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff.|
|parkingAvailableException|string|false|none|Parking available exception.|
|selfParkingAvailable|boolean|false|none|Self parking available. Guests park their own cars. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Can be free or for a fee.|
|selfParkingAvailableException|string|false|none|Self parking available exception.|
|valetParkingAvailable|boolean|false|none|Valet parking available. Hotel staff member parks the cars of guests. Parking with this service can be free or for a fee.|
|valetParkingAvailableException|string|false|none|Valet parking available exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|electricCarChargingStationsException|EXCEPTION_UNSPECIFIED|
|electricCarChargingStationsException|UNDER_CONSTRUCTION|
|electricCarChargingStationsException|DEPENDENT_ON_SEASON|
|electricCarChargingStationsException|DEPENDENT_ON_DAY_OF_WEEK|
|freeParkingException|EXCEPTION_UNSPECIFIED|
|freeParkingException|UNDER_CONSTRUCTION|
|freeParkingException|DEPENDENT_ON_SEASON|
|freeParkingException|DEPENDENT_ON_DAY_OF_WEEK|
|freeSelfParkingException|EXCEPTION_UNSPECIFIED|
|freeSelfParkingException|UNDER_CONSTRUCTION|
|freeSelfParkingException|DEPENDENT_ON_SEASON|
|freeSelfParkingException|DEPENDENT_ON_DAY_OF_WEEK|
|freeValetParkingException|EXCEPTION_UNSPECIFIED|
|freeValetParkingException|UNDER_CONSTRUCTION|
|freeValetParkingException|DEPENDENT_ON_SEASON|
|freeValetParkingException|DEPENDENT_ON_DAY_OF_WEEK|
|parkingAvailableException|EXCEPTION_UNSPECIFIED|
|parkingAvailableException|UNDER_CONSTRUCTION|
|parkingAvailableException|DEPENDENT_ON_SEASON|
|parkingAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|selfParkingAvailableException|EXCEPTION_UNSPECIFIED|
|selfParkingAvailableException|UNDER_CONSTRUCTION|
|selfParkingAvailableException|DEPENDENT_ON_SEASON|
|selfParkingAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|valetParkingAvailableException|EXCEPTION_UNSPECIFIED|
|valetParkingAvailableException|UNDER_CONSTRUCTION|
|valetParkingAvailableException|DEPENDENT_ON_SEASON|
|valetParkingAvailableException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_PaymentOptions">PaymentOptions</h2>
<!-- backwards compatibility -->
<a id="schemapaymentoptions"></a>
<a id="schema_PaymentOptions"></a>
<a id="tocSpaymentoptions"></a>
<a id="tocspaymentoptions"></a>

```json
{
  "cash": true,
  "cashException": "EXCEPTION_UNSPECIFIED",
  "cheque": true,
  "chequeException": "EXCEPTION_UNSPECIFIED",
  "creditCard": true,
  "creditCardException": "EXCEPTION_UNSPECIFIED",
  "debitCard": true,
  "debitCardException": "EXCEPTION_UNSPECIFIED",
  "mobileNfc": true,
  "mobileNfcException": "EXCEPTION_UNSPECIFIED"
}
```

Forms of payment accepted at the property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cash|boolean|false|none|Cash. The hotel accepts payment by paper/coin currency.|
|cashException|string|false|none|Cash exception.|
|cheque|boolean|false|none|Cheque. The hotel accepts a printed document issued by the guest's bank in the guest's name as a form of payment.|
|chequeException|string|false|none|Cheque exception.|
|creditCard|boolean|false|none|Credit card. The hotel accepts payment by a card issued by a bank or credit card company. Also known as charge card, debit card, bank card, or charge plate.|
|creditCardException|string|false|none|Credit card exception.|
|debitCard|boolean|false|none|Debit card. The hotel accepts a bank-issued card that immediately deducts the charged funds from the guest's bank account upon processing.|
|debitCardException|string|false|none|Debit card exception.|
|mobileNfc|boolean|false|none|Mobile nfc. The hotel has the compatible computer hardware terminal that reads and charges a payment app on the guest's smartphone without requiring the two devices to make physical contact. Also known as Apple Pay, Google Pay, Samsung Pay.|
|mobileNfcException|string|false|none|Mobile nfc exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|cashException|EXCEPTION_UNSPECIFIED|
|cashException|UNDER_CONSTRUCTION|
|cashException|DEPENDENT_ON_SEASON|
|cashException|DEPENDENT_ON_DAY_OF_WEEK|
|chequeException|EXCEPTION_UNSPECIFIED|
|chequeException|UNDER_CONSTRUCTION|
|chequeException|DEPENDENT_ON_SEASON|
|chequeException|DEPENDENT_ON_DAY_OF_WEEK|
|creditCardException|EXCEPTION_UNSPECIFIED|
|creditCardException|UNDER_CONSTRUCTION|
|creditCardException|DEPENDENT_ON_SEASON|
|creditCardException|DEPENDENT_ON_DAY_OF_WEEK|
|debitCardException|EXCEPTION_UNSPECIFIED|
|debitCardException|UNDER_CONSTRUCTION|
|debitCardException|DEPENDENT_ON_SEASON|
|debitCardException|DEPENDENT_ON_DAY_OF_WEEK|
|mobileNfcException|EXCEPTION_UNSPECIFIED|
|mobileNfcException|UNDER_CONSTRUCTION|
|mobileNfcException|DEPENDENT_ON_SEASON|
|mobileNfcException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_PersonalProtection">PersonalProtection</h2>
<!-- backwards compatibility -->
<a id="schemapersonalprotection"></a>
<a id="schema_PersonalProtection"></a>
<a id="tocSpersonalprotection"></a>
<a id="tocspersonalprotection"></a>

```json
{
  "commonAreasOfferSanitizingItems": true,
  "commonAreasOfferSanitizingItemsException": "EXCEPTION_UNSPECIFIED",
  "faceMaskRequired": true,
  "faceMaskRequiredException": "EXCEPTION_UNSPECIFIED",
  "guestRoomHygieneKitsAvailable": true,
  "guestRoomHygieneKitsAvailableException": "EXCEPTION_UNSPECIFIED",
  "protectiveEquipmentAvailable": true,
  "protectiveEquipmentAvailableException": "EXCEPTION_UNSPECIFIED"
}
```

Personal protection measures implemented by the hotel during COVID-19.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonAreasOfferSanitizingItems|boolean|false|none|Hand-sanitizer and/or sanitizing wipes are offered in common areas.|
|commonAreasOfferSanitizingItemsException|string|false|none|Common areas offer sanitizing items exception.|
|faceMaskRequired|boolean|false|none|Masks required on the property.|
|faceMaskRequiredException|string|false|none|Face mask required exception.|
|guestRoomHygieneKitsAvailable|boolean|false|none|In-room hygiene kits with masks, hand sanitizer, and/or antibacterial wipes.|
|guestRoomHygieneKitsAvailableException|string|false|none|Guest room hygiene kits available exception.|
|protectiveEquipmentAvailable|boolean|false|none|Masks and/or gloves available for guests.|
|protectiveEquipmentAvailableException|string|false|none|Protective equipment available exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|commonAreasOfferSanitizingItemsException|EXCEPTION_UNSPECIFIED|
|commonAreasOfferSanitizingItemsException|UNDER_CONSTRUCTION|
|commonAreasOfferSanitizingItemsException|DEPENDENT_ON_SEASON|
|commonAreasOfferSanitizingItemsException|DEPENDENT_ON_DAY_OF_WEEK|
|faceMaskRequiredException|EXCEPTION_UNSPECIFIED|
|faceMaskRequiredException|UNDER_CONSTRUCTION|
|faceMaskRequiredException|DEPENDENT_ON_SEASON|
|faceMaskRequiredException|DEPENDENT_ON_DAY_OF_WEEK|
|guestRoomHygieneKitsAvailableException|EXCEPTION_UNSPECIFIED|
|guestRoomHygieneKitsAvailableException|UNDER_CONSTRUCTION|
|guestRoomHygieneKitsAvailableException|DEPENDENT_ON_SEASON|
|guestRoomHygieneKitsAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|protectiveEquipmentAvailableException|EXCEPTION_UNSPECIFIED|
|protectiveEquipmentAvailableException|UNDER_CONSTRUCTION|
|protectiveEquipmentAvailableException|DEPENDENT_ON_SEASON|
|protectiveEquipmentAvailableException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Pets">Pets</h2>
<!-- backwards compatibility -->
<a id="schemapets"></a>
<a id="schema_Pets"></a>
<a id="tocSpets"></a>
<a id="tocspets"></a>

```json
{
  "catsAllowed": true,
  "catsAllowedException": "EXCEPTION_UNSPECIFIED",
  "dogsAllowed": true,
  "dogsAllowedException": "EXCEPTION_UNSPECIFIED",
  "petsAllowed": true,
  "petsAllowedException": "EXCEPTION_UNSPECIFIED",
  "petsAllowedFree": true,
  "petsAllowedFreeException": "EXCEPTION_UNSPECIFIED"
}
```

Policies regarding guest-owned animals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catsAllowed|boolean|false|none|Cats allowed. Domesticated felines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee.|
|catsAllowedException|string|false|none|Cats allowed exception.|
|dogsAllowed|boolean|false|none|Dogs allowed. Domesticated canines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee.|
|dogsAllowedException|string|false|none|Dogs allowed exception.|
|petsAllowed|boolean|false|none|Pets allowed. Household animals are allowed at the property and in the specific guest room of their owner. May or may not include dogs, cats, reptiles and/or fish. May or may not require a fee. Service animals are not considered to be pets, so not governed by this policy.|
|petsAllowedException|string|false|none|Pets allowed exception.|
|petsAllowedFree|boolean|false|none|Pets allowed free. Household animals are allowed at the property and in the specific guest room of their owner for free. May or may not include dogs, cats, reptiles, and/or fish.|
|petsAllowedFreeException|string|false|none|Pets allowed free exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|catsAllowedException|EXCEPTION_UNSPECIFIED|
|catsAllowedException|UNDER_CONSTRUCTION|
|catsAllowedException|DEPENDENT_ON_SEASON|
|catsAllowedException|DEPENDENT_ON_DAY_OF_WEEK|
|dogsAllowedException|EXCEPTION_UNSPECIFIED|
|dogsAllowedException|UNDER_CONSTRUCTION|
|dogsAllowedException|DEPENDENT_ON_SEASON|
|dogsAllowedException|DEPENDENT_ON_DAY_OF_WEEK|
|petsAllowedException|EXCEPTION_UNSPECIFIED|
|petsAllowedException|UNDER_CONSTRUCTION|
|petsAllowedException|DEPENDENT_ON_SEASON|
|petsAllowedException|DEPENDENT_ON_DAY_OF_WEEK|
|petsAllowedFreeException|EXCEPTION_UNSPECIFIED|
|petsAllowedFreeException|UNDER_CONSTRUCTION|
|petsAllowedFreeException|DEPENDENT_ON_SEASON|
|petsAllowedFreeException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_PhoneInput">PhoneInput</h2>
<!-- backwards compatibility -->
<a id="schemaphoneinput"></a>
<a id="schema_PhoneInput"></a>
<a id="tocSphoneinput"></a>
<a id="tocsphoneinput"></a>

```json
{
  "phoneNumber": "string"
}
```

Input for PHONE_CALL/SMS verification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneNumber|string|false|none|The phone number that should be called or be sent SMS to. It must be one of the phone numbers in the eligible options.|

<h2 id="tocS_PhoneVerificationData">PhoneVerificationData</h2>
<!-- backwards compatibility -->
<a id="schemaphoneverificationdata"></a>
<a id="schema_PhoneVerificationData"></a>
<a id="tocSphoneverificationdata"></a>
<a id="tocsphoneverificationdata"></a>

```json
{
  "phoneNumber": "string"
}
```

Display Data for verifications through phone, e.g. phone call, sms.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneNumber|string|false|none|Phone number that the PIN will be sent to.|

<h2 id="tocS_PhysicalDistancing">PhysicalDistancing</h2>
<!-- backwards compatibility -->
<a id="schemaphysicaldistancing"></a>
<a id="schema_PhysicalDistancing"></a>
<a id="tocSphysicaldistancing"></a>
<a id="tocsphysicaldistancing"></a>

```json
{
  "commonAreasPhysicalDistancingArranged": true,
  "commonAreasPhysicalDistancingArrangedException": "EXCEPTION_UNSPECIFIED",
  "physicalDistancingRequired": true,
  "physicalDistancingRequiredException": "EXCEPTION_UNSPECIFIED",
  "safetyDividers": true,
  "safetyDividersException": "EXCEPTION_UNSPECIFIED",
  "sharedAreasLimitedOccupancy": true,
  "sharedAreasLimitedOccupancyException": "EXCEPTION_UNSPECIFIED",
  "wellnessAreasHavePrivateSpaces": true,
  "wellnessAreasHavePrivateSpacesException": "EXCEPTION_UNSPECIFIED"
}
```

Physical distancing measures implemented by the hotel during COVID-19.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonAreasPhysicalDistancingArranged|boolean|false|none|Common areas arranged to maintain physical distancing.|
|commonAreasPhysicalDistancingArrangedException|string|false|none|Common areas physical distancing arranged exception.|
|physicalDistancingRequired|boolean|false|none|Physical distancing required.|
|physicalDistancingRequiredException|string|false|none|Physical distancing required exception.|
|safetyDividers|boolean|false|none|Safety dividers at front desk and other locations.|
|safetyDividersException|string|false|none|Safety dividers exception.|
|sharedAreasLimitedOccupancy|boolean|false|none|Guest occupancy limited within shared facilities.|
|sharedAreasLimitedOccupancyException|string|false|none|Shared areas limited occupancy exception.|
|wellnessAreasHavePrivateSpaces|boolean|false|none|Private spaces designated in spa and wellness areas.|
|wellnessAreasHavePrivateSpacesException|string|false|none|Wellness areas have private spaces exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|commonAreasPhysicalDistancingArrangedException|EXCEPTION_UNSPECIFIED|
|commonAreasPhysicalDistancingArrangedException|UNDER_CONSTRUCTION|
|commonAreasPhysicalDistancingArrangedException|DEPENDENT_ON_SEASON|
|commonAreasPhysicalDistancingArrangedException|DEPENDENT_ON_DAY_OF_WEEK|
|physicalDistancingRequiredException|EXCEPTION_UNSPECIFIED|
|physicalDistancingRequiredException|UNDER_CONSTRUCTION|
|physicalDistancingRequiredException|DEPENDENT_ON_SEASON|
|physicalDistancingRequiredException|DEPENDENT_ON_DAY_OF_WEEK|
|safetyDividersException|EXCEPTION_UNSPECIFIED|
|safetyDividersException|UNDER_CONSTRUCTION|
|safetyDividersException|DEPENDENT_ON_SEASON|
|safetyDividersException|DEPENDENT_ON_DAY_OF_WEEK|
|sharedAreasLimitedOccupancyException|EXCEPTION_UNSPECIFIED|
|sharedAreasLimitedOccupancyException|UNDER_CONSTRUCTION|
|sharedAreasLimitedOccupancyException|DEPENDENT_ON_SEASON|
|sharedAreasLimitedOccupancyException|DEPENDENT_ON_DAY_OF_WEEK|
|wellnessAreasHavePrivateSpacesException|EXCEPTION_UNSPECIFIED|
|wellnessAreasHavePrivateSpacesException|UNDER_CONSTRUCTION|
|wellnessAreasHavePrivateSpacesException|DEPENDENT_ON_SEASON|
|wellnessAreasHavePrivateSpacesException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_PlaceInfo">PlaceInfo</h2>
<!-- backwards compatibility -->
<a id="schemaplaceinfo"></a>
<a id="schema_PlaceInfo"></a>
<a id="tocSplaceinfo"></a>
<a id="tocsplaceinfo"></a>

```json
{
  "name": "string",
  "placeId": "string"
}
```

Defines an area that's represented by a place ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The localized name of the place. For example, `Scottsdale, AZ`.|
|placeId|string|false|none|The ID of the place. Must correspond to a [region.] (https://developers.google.com/places/web-service/supported_types#table3)|

<h2 id="tocS_Places">Places</h2>
<!-- backwards compatibility -->
<a id="schemaplaces"></a>
<a id="schema_Places"></a>
<a id="tocSplaces"></a>
<a id="tocsplaces"></a>

```json
{
  "placeInfos": [
    {
      "name": "string",
      "placeId": "string"
    }
  ]
}
```

Defines the union of areas represented by a set of places.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placeInfos|[[PlaceInfo](#schemaplaceinfo)]|false|none|The areas represented by place IDs. Limited to a maximum of 20 places.|

<h2 id="tocS_PointRadius">PointRadius</h2>
<!-- backwards compatibility -->
<a id="schemapointradius"></a>
<a id="schema_PointRadius"></a>
<a id="tocSpointradius"></a>
<a id="tocspointradius"></a>

```json
{
  "latlng": {
    "latitude": 0,
    "longitude": 0
  },
  "radiusKm": 0
}
```

A radius around a particular point (latitude/longitude).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latlng|[LatLng](#schemalatlng)|false|none|The latitude/longitude that specifies the center of an area defined by the radius.|
|radiusKm|number(float)|false|none|The distance in kilometers of the area around the point.|

<h2 id="tocS_Policies">Policies</h2>
<!-- backwards compatibility -->
<a id="schemapolicies"></a>
<a id="schema_Policies"></a>
<a id="tocSpolicies"></a>
<a id="tocspolicies"></a>

```json
{
  "allInclusiveAvailable": true,
  "allInclusiveAvailableException": "EXCEPTION_UNSPECIFIED",
  "allInclusiveOnly": true,
  "allInclusiveOnlyException": "EXCEPTION_UNSPECIFIED",
  "checkinTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "checkinTimeException": "EXCEPTION_UNSPECIFIED",
  "checkoutTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "checkoutTimeException": "EXCEPTION_UNSPECIFIED",
  "kidsStayFree": true,
  "kidsStayFreeException": "EXCEPTION_UNSPECIFIED",
  "maxChildAge": 0,
  "maxChildAgeException": "EXCEPTION_UNSPECIFIED",
  "maxKidsStayFreeCount": 0,
  "maxKidsStayFreeCountException": "EXCEPTION_UNSPECIFIED",
  "paymentOptions": {
    "cash": true,
    "cashException": "EXCEPTION_UNSPECIFIED",
    "cheque": true,
    "chequeException": "EXCEPTION_UNSPECIFIED",
    "creditCard": true,
    "creditCardException": "EXCEPTION_UNSPECIFIED",
    "debitCard": true,
    "debitCardException": "EXCEPTION_UNSPECIFIED",
    "mobileNfc": true,
    "mobileNfcException": "EXCEPTION_UNSPECIFIED"
  },
  "smokeFreeProperty": true,
  "smokeFreePropertyException": "EXCEPTION_UNSPECIFIED"
}
```

Property rules that impact guests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allInclusiveAvailable|boolean|false|none|All inclusive available. The hotel offers a rate option that includes the cost of the room, meals, activities, and other amenities that might otherwise be charged separately.|
|allInclusiveAvailableException|string|false|none|All inclusive available exception.|
|allInclusiveOnly|boolean|false|none|All inclusive only. The only rate option offered by the hotel is a rate that includes the cost of the room, meals, activities and other amenities that might otherwise be charged separately.|
|allInclusiveOnlyException|string|false|none|All inclusive only exception.|
|checkinTime|[TimeOfDay](#schematimeofday)|false|none|Check-in time. The time of the day at which the hotel begins providing guests access to their unit at the beginning of their stay.|
|checkinTimeException|string|false|none|Check-in time exception.|
|checkoutTime|[TimeOfDay](#schematimeofday)|false|none|Check-out time. The time of the day on the last day of a guest's reserved stay at which the guest must vacate their room and settle their bill. Some hotels may offer late or early check out for a fee.|
|checkoutTimeException|string|false|none|Check-out time exception.|
|kidsStayFree|boolean|false|none|Kids stay free. The children of guests are allowed to stay in the room/suite of a parent or adult without an additional fee. The policy may or may not stipulate a limit of the child's age or the overall number of children allowed.|
|kidsStayFreeException|string|false|none|Kids stay free exception.|
|maxChildAge|integer(int32)|false|none|Max child age. The hotel allows children up to a certain age to stay in the room/suite of a parent or adult without an additional fee.|
|maxChildAgeException|string|false|none|Max child age exception.|
|maxKidsStayFreeCount|integer(int32)|false|none|Max kids stay free count. The hotel allows a specific, defined number of children to stay in the room/suite of a parent or adult without an additional fee.|
|maxKidsStayFreeCountException|string|false|none|Max kids stay free count exception.|
|paymentOptions|[PaymentOptions](#schemapaymentoptions)|false|none|Forms of payment accepted at the property.|
|smokeFreeProperty|boolean|false|none|Smoke free property. Smoking is not allowed inside the building, on balconies, or in outside spaces. Hotels that offer a designated area for guests to smoke are not considered smoke-free properties.|
|smokeFreePropertyException|string|false|none|Smoke free property exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|allInclusiveAvailableException|EXCEPTION_UNSPECIFIED|
|allInclusiveAvailableException|UNDER_CONSTRUCTION|
|allInclusiveAvailableException|DEPENDENT_ON_SEASON|
|allInclusiveAvailableException|DEPENDENT_ON_DAY_OF_WEEK|
|allInclusiveOnlyException|EXCEPTION_UNSPECIFIED|
|allInclusiveOnlyException|UNDER_CONSTRUCTION|
|allInclusiveOnlyException|DEPENDENT_ON_SEASON|
|allInclusiveOnlyException|DEPENDENT_ON_DAY_OF_WEEK|
|checkinTimeException|EXCEPTION_UNSPECIFIED|
|checkinTimeException|UNDER_CONSTRUCTION|
|checkinTimeException|DEPENDENT_ON_SEASON|
|checkinTimeException|DEPENDENT_ON_DAY_OF_WEEK|
|checkoutTimeException|EXCEPTION_UNSPECIFIED|
|checkoutTimeException|UNDER_CONSTRUCTION|
|checkoutTimeException|DEPENDENT_ON_SEASON|
|checkoutTimeException|DEPENDENT_ON_DAY_OF_WEEK|
|kidsStayFreeException|EXCEPTION_UNSPECIFIED|
|kidsStayFreeException|UNDER_CONSTRUCTION|
|kidsStayFreeException|DEPENDENT_ON_SEASON|
|kidsStayFreeException|DEPENDENT_ON_DAY_OF_WEEK|
|maxChildAgeException|EXCEPTION_UNSPECIFIED|
|maxChildAgeException|UNDER_CONSTRUCTION|
|maxChildAgeException|DEPENDENT_ON_SEASON|
|maxChildAgeException|DEPENDENT_ON_DAY_OF_WEEK|
|maxKidsStayFreeCountException|EXCEPTION_UNSPECIFIED|
|maxKidsStayFreeCountException|UNDER_CONSTRUCTION|
|maxKidsStayFreeCountException|DEPENDENT_ON_SEASON|
|maxKidsStayFreeCountException|DEPENDENT_ON_DAY_OF_WEEK|
|smokeFreePropertyException|EXCEPTION_UNSPECIFIED|
|smokeFreePropertyException|UNDER_CONSTRUCTION|
|smokeFreePropertyException|DEPENDENT_ON_SEASON|
|smokeFreePropertyException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Pools">Pools</h2>
<!-- backwards compatibility -->
<a id="schemapools"></a>
<a id="schema_Pools"></a>
<a id="tocSpools"></a>
<a id="tocspools"></a>

```json
{
  "adultPool": true,
  "adultPoolException": "EXCEPTION_UNSPECIFIED",
  "hotTub": true,
  "hotTubException": "EXCEPTION_UNSPECIFIED",
  "indoorPool": true,
  "indoorPoolException": "EXCEPTION_UNSPECIFIED",
  "indoorPoolsCount": 0,
  "indoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
  "lazyRiver": true,
  "lazyRiverException": "EXCEPTION_UNSPECIFIED",
  "lifeguard": true,
  "lifeguardException": "EXCEPTION_UNSPECIFIED",
  "outdoorPool": true,
  "outdoorPoolException": "EXCEPTION_UNSPECIFIED",
  "outdoorPoolsCount": 0,
  "outdoorPoolsCountException": "EXCEPTION_UNSPECIFIED",
  "pool": true,
  "poolException": "EXCEPTION_UNSPECIFIED",
  "poolsCount": 0,
  "poolsCountException": "EXCEPTION_UNSPECIFIED",
  "wadingPool": true,
  "wadingPoolException": "EXCEPTION_UNSPECIFIED",
  "waterPark": true,
  "waterParkException": "EXCEPTION_UNSPECIFIED",
  "waterslide": true,
  "waterslideException": "EXCEPTION_UNSPECIFIED",
  "wavePool": true,
  "wavePoolException": "EXCEPTION_UNSPECIFIED"
}
```

Swimming pool or recreational water facilities available at the hotel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adultPool|boolean|false|none|Adult pool. A pool restricted for use by adults only. Can be indoors or outdoors.|
|adultPoolException|string|false|none|Adult pool exception.|
|hotTub|boolean|false|none|Hot tub. A man-made pool containing bubbling water maintained at a higher temperature and circulated by aerating jets for the purpose of soaking, relaxation and hydrotherapy. Can be indoors or outdoors. Not used for active swimming. Also known as Jacuzzi. Hot tub must be in a common area where all guests can access it. Does not apply to room-specific hot tubs that are only accessible to guest occupying that room.|
|hotTubException|string|false|none|Hot tub exception.|
|indoorPool|boolean|false|none|Indoor pool. A pool located inside the hotel and available for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children.|
|indoorPoolException|string|false|none|Indoor pool exception.|
|indoorPoolsCount|integer(int32)|false|none|Indoor pools count. The sum of all indoor pools at the hotel.|
|indoorPoolsCountException|string|false|none|Indoor pools count exception.|
|lazyRiver|boolean|false|none|Lazy river. A man-made pool or several interconnected recreational pools built to mimic the shape and current of a winding river where guests float in the water on inflated rubber tubes. Can be indoors or outdoors.|
|lazyRiverException|string|false|none|Lazy river exception.|
|lifeguard|boolean|false|none|Lifeguard. A trained member of the hotel staff stationed by the hotel's indoor or outdoor swimming area and responsible for the safety of swimming guests.|
|lifeguardException|string|false|none|Lifeguard exception.|
|outdoorPool|boolean|false|none|Outdoor pool. A pool located outside on the grounds of the hotel and available for guests to use for swimming, soaking or recreation. Use may or may not be restricted to adults and/or children.|
|outdoorPoolException|string|false|none|Outdoor pool exception.|
|outdoorPoolsCount|integer(int32)|false|none|Outdoor pools count. The sum of all outdoor pools at the hotel.|
|outdoorPoolsCountException|string|false|none|Outdoor pools count exception.|
|pool|boolean|false|none|Pool. The presence of a pool, either indoors or outdoors, for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children.|
|poolException|string|false|none|Pool exception.|
|poolsCount|integer(int32)|false|none|Pools count. The sum of all pools at the hotel.|
|poolsCountException|string|false|none|Pools count exception.|
|wadingPool|boolean|false|none|Wading pool. A shallow pool designed for small children to play in. Can be indoors or outdoors. Also known as kiddie pool.|
|wadingPoolException|string|false|none|Wading pool exception.|
|waterPark|boolean|false|none|Water park. An aquatic recreation area with a large pool or series of pools that has features such as a water slide or tube, wavepool, fountains, rope swings, and/or obstacle course. Can be indoors or outdoors. Also known as adventure pool.|
|waterParkException|string|false|none|Water park exception.|
|waterslide|boolean|false|none|Waterslide. A continuously wetted chute positioned by an indoor or outdoor pool which people slide down into the water.|
|waterslideException|string|false|none|Waterslide exception.|
|wavePool|boolean|false|none|Wave pool. A large indoor or outdoor pool with a machine that produces water currents to mimic the ocean's crests.|
|wavePoolException|string|false|none|Wave pool exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|adultPoolException|EXCEPTION_UNSPECIFIED|
|adultPoolException|UNDER_CONSTRUCTION|
|adultPoolException|DEPENDENT_ON_SEASON|
|adultPoolException|DEPENDENT_ON_DAY_OF_WEEK|
|hotTubException|EXCEPTION_UNSPECIFIED|
|hotTubException|UNDER_CONSTRUCTION|
|hotTubException|DEPENDENT_ON_SEASON|
|hotTubException|DEPENDENT_ON_DAY_OF_WEEK|
|indoorPoolException|EXCEPTION_UNSPECIFIED|
|indoorPoolException|UNDER_CONSTRUCTION|
|indoorPoolException|DEPENDENT_ON_SEASON|
|indoorPoolException|DEPENDENT_ON_DAY_OF_WEEK|
|indoorPoolsCountException|EXCEPTION_UNSPECIFIED|
|indoorPoolsCountException|UNDER_CONSTRUCTION|
|indoorPoolsCountException|DEPENDENT_ON_SEASON|
|indoorPoolsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|lazyRiverException|EXCEPTION_UNSPECIFIED|
|lazyRiverException|UNDER_CONSTRUCTION|
|lazyRiverException|DEPENDENT_ON_SEASON|
|lazyRiverException|DEPENDENT_ON_DAY_OF_WEEK|
|lifeguardException|EXCEPTION_UNSPECIFIED|
|lifeguardException|UNDER_CONSTRUCTION|
|lifeguardException|DEPENDENT_ON_SEASON|
|lifeguardException|DEPENDENT_ON_DAY_OF_WEEK|
|outdoorPoolException|EXCEPTION_UNSPECIFIED|
|outdoorPoolException|UNDER_CONSTRUCTION|
|outdoorPoolException|DEPENDENT_ON_SEASON|
|outdoorPoolException|DEPENDENT_ON_DAY_OF_WEEK|
|outdoorPoolsCountException|EXCEPTION_UNSPECIFIED|
|outdoorPoolsCountException|UNDER_CONSTRUCTION|
|outdoorPoolsCountException|DEPENDENT_ON_SEASON|
|outdoorPoolsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|poolException|EXCEPTION_UNSPECIFIED|
|poolException|UNDER_CONSTRUCTION|
|poolException|DEPENDENT_ON_SEASON|
|poolException|DEPENDENT_ON_DAY_OF_WEEK|
|poolsCountException|EXCEPTION_UNSPECIFIED|
|poolsCountException|UNDER_CONSTRUCTION|
|poolsCountException|DEPENDENT_ON_SEASON|
|poolsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|wadingPoolException|EXCEPTION_UNSPECIFIED|
|wadingPoolException|UNDER_CONSTRUCTION|
|wadingPoolException|DEPENDENT_ON_SEASON|
|wadingPoolException|DEPENDENT_ON_DAY_OF_WEEK|
|waterParkException|EXCEPTION_UNSPECIFIED|
|waterParkException|UNDER_CONSTRUCTION|
|waterParkException|DEPENDENT_ON_SEASON|
|waterParkException|DEPENDENT_ON_DAY_OF_WEEK|
|waterslideException|EXCEPTION_UNSPECIFIED|
|waterslideException|UNDER_CONSTRUCTION|
|waterslideException|DEPENDENT_ON_SEASON|
|waterslideException|DEPENDENT_ON_DAY_OF_WEEK|
|wavePoolException|EXCEPTION_UNSPECIFIED|
|wavePoolException|UNDER_CONSTRUCTION|
|wavePoolException|DEPENDENT_ON_SEASON|
|wavePoolException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_PortionSize">PortionSize</h2>
<!-- backwards compatibility -->
<a id="schemaportionsize"></a>
<a id="schema_PortionSize"></a>
<a id="tocSportionsize"></a>
<a id="tocsportionsize"></a>

```json
{
  "quantity": 0,
  "unit": [
    {
      "description": "string",
      "displayName": "string",
      "languageCode": "string"
    }
  ]
}
```

Serving portion size of a food dish.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quantity|integer(int32)|false|none|Required. Number of the portion.|
|unit|[[MenuLabel](#schemamenulabel)]|false|none|Required. The repeated name_info field is for the unit in multiple languages.|

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

Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478

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
|regionCode|string|false|none|Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.|
|revision|integer(int32)|false|none|The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.|
|sortingCode|string|false|none|Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).|
|sublocality|string|false|none|Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.|

<h2 id="tocS_PriceList">PriceList</h2>
<!-- backwards compatibility -->
<a id="schemapricelist"></a>
<a id="schema_PriceList"></a>
<a id="tocSpricelist"></a>
<a id="tocspricelist"></a>

```json
{
  "labels": [
    {
      "description": "string",
      "displayName": "string",
      "languageCode": "string"
    }
  ],
  "priceListId": "string",
  "sections": [
    {
      "items": [
        {
          "itemId": "string",
          "labels": [
            {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          ],
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        }
      ],
      "labels": [
        {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      ],
      "sectionId": "string",
      "sectionType": "SECTION_TYPE_UNSPECIFIED"
    }
  ],
  "sourceUrl": "string"
}
```

A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[[Label](#schemalabel)]|false|none|Required. Language-tagged labels for the price list.|
|priceListId|string|false|none|Required. ID for the price list. Price list, section, and item IDs cannot be duplicated within this Location.|
|sections|[[Section](#schemasection)]|false|none|Required. Sections for this price list. Each price list must contain at least one section.|
|sourceUrl|string|false|none|Optional source URL of where the price list was retrieved from. For example, this could be the URL of the page that was automatically scraped to populate the menu information.|

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "description": "string"
}
```

All information pertaining to the location's profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the location in your own voice, not editable by anyone else.|

<h2 id="tocS_Property">Property</h2>
<!-- backwards compatibility -->
<a id="schemaproperty"></a>
<a id="schema_Property"></a>
<a id="tocSproperty"></a>
<a id="tocsproperty"></a>

```json
{
  "builtYear": 0,
  "builtYearException": "EXCEPTION_UNSPECIFIED",
  "floorsCount": 0,
  "floorsCountException": "EXCEPTION_UNSPECIFIED",
  "lastRenovatedYear": 0,
  "lastRenovatedYearException": "EXCEPTION_UNSPECIFIED",
  "roomsCount": 0,
  "roomsCountException": "EXCEPTION_UNSPECIFIED"
}
```

General factual information about the property's physical structure and important dates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|builtYear|integer(int32)|false|none|Built year. The year that construction of the property was completed.|
|builtYearException|string|false|none|Built year exception.|
|floorsCount|integer(int32)|false|none|Floors count. The number of stories the building has from the ground floor to the top floor that are accessible to guests.|
|floorsCountException|string|false|none|Floors count exception.|
|lastRenovatedYear|integer(int32)|false|none|Last renovated year. The year when the most recent renovation of the property was completed. Renovation may include all or any combination of the following: the units, the public spaces, the exterior, or the interior.|
|lastRenovatedYearException|string|false|none|Last renovated year exception.|
|roomsCount|integer(int32)|false|none|Rooms count. The total number of rooms and suites bookable by guests for an overnight stay. Does not include event space, public spaces, conference rooms, fitness rooms, business centers, spa, salon, restaurants/bars, or shops.|
|roomsCountException|string|false|none|Rooms count exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|builtYearException|EXCEPTION_UNSPECIFIED|
|builtYearException|UNDER_CONSTRUCTION|
|builtYearException|DEPENDENT_ON_SEASON|
|builtYearException|DEPENDENT_ON_DAY_OF_WEEK|
|floorsCountException|EXCEPTION_UNSPECIFIED|
|floorsCountException|UNDER_CONSTRUCTION|
|floorsCountException|DEPENDENT_ON_SEASON|
|floorsCountException|DEPENDENT_ON_DAY_OF_WEEK|
|lastRenovatedYearException|EXCEPTION_UNSPECIFIED|
|lastRenovatedYearException|UNDER_CONSTRUCTION|
|lastRenovatedYearException|DEPENDENT_ON_SEASON|
|lastRenovatedYearException|DEPENDENT_ON_DAY_OF_WEEK|
|roomsCountException|EXCEPTION_UNSPECIFIED|
|roomsCountException|UNDER_CONSTRUCTION|
|roomsCountException|DEPENDENT_ON_SEASON|
|roomsCountException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Question">Question</h2>
<!-- backwards compatibility -->
<a id="schemaquestion"></a>
<a id="schema_Question"></a>
<a id="tocSquestion"></a>
<a id="tocsquestion"></a>

```json
{
  "author": {
    "displayName": "string",
    "profilePhotoUrl": "string",
    "type": "AUTHOR_TYPE_UNSPECIFIED"
  },
  "createTime": "string",
  "name": "string",
  "text": "string",
  "topAnswers": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUrl": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "totalAnswerCount": 0,
  "updateTime": "string",
  "upvoteCount": 0
}
```

Represents a single question and some of its answers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|[Author](#schemaauthor)|false|none|Output only. The author of the question.|
|createTime|string(google-datetime)|false|none|Output only. The timestamp for when the question was written.|
|name|string|false|none|Output only. The unique name for the question. accounts/*/locations/*/questions/*|
|text|string|false|none|The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters.|
|topAnswers|[[Answer](#schemaanswer)]|false|none|Output only. A list of answers to the question, sorted by upvotes. This may not be a complete list of answers depending on the request parameters (answers_per_question)|
|totalAnswerCount|integer(int32)|false|none|Output only. The total number of answers posted for this question.|
|updateTime|string(google-datetime)|false|none|Output only. The timestamp for when the question was last modified.|
|upvoteCount|integer(int32)|false|none|Output only. The number of upvotes for the question.|

<h2 id="tocS_RegionCount">RegionCount</h2>
<!-- backwards compatibility -->
<a id="schemaregioncount"></a>
<a id="schema_RegionCount"></a>
<a id="tocSregioncount"></a>
<a id="tocsregioncount"></a>

```json
{
  "count": "string",
  "label": "string",
  "latlng": {
    "latitude": 0,
    "longitude": 0
  }
}
```

A region with its associated request count.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|Number of driving-direction requests from this region.|
|label|string|false|none|Human-readable label for the region.|
|latlng|[LatLng](#schemalatlng)|false|none|Center of region.|

<h2 id="tocS_RelationshipData">RelationshipData</h2>
<!-- backwards compatibility -->
<a id="schemarelationshipdata"></a>
<a id="schema_RelationshipData"></a>
<a id="tocSrelationshipdata"></a>
<a id="tocsrelationshipdata"></a>

```json
{
  "parentChain": "string"
}
```

Information of all parent and children locations related to this one.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parentChain|string|false|none|The resource name of the Chain that this location is member of. How to find Chain ID|

<h2 id="tocS_RepeatedEnumAttributeValue">RepeatedEnumAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemarepeatedenumattributevalue"></a>
<a id="schema_RepeatedEnumAttributeValue"></a>
<a id="tocSrepeatedenumattributevalue"></a>
<a id="tocsrepeatedenumattributevalue"></a>

```json
{
  "setValues": [
    "string"
  ],
  "unsetValues": [
    "string"
  ]
}
```

Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|setValues|[string]|false|none|Enum values that are set.|
|unsetValues|[string]|false|none|Enum values that are unset.|

<h2 id="tocS_ReportGoogleLocationRequest">ReportGoogleLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemareportgooglelocationrequest"></a>
<a id="schema_ReportGoogleLocationRequest"></a>
<a id="tocSreportgooglelocationrequest"></a>
<a id="tocsreportgooglelocationrequest"></a>

```json
{
  "locationGroupName": "string",
  "reportReasonBadLocation": "BAD_LOCATION_REASON_UNSPECIFIED",
  "reportReasonBadRecommendation": "BAD_RECOMMENDATION_REASON_UNSPECIFIED",
  "reportReasonElaboration": "string",
  "reportReasonLanguageCode": "string"
}
```

Request message for reporting a GoogleLocation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationGroupName|string|false|none|Optional. The resource name of the location group that this Google Location is being reported for, in the format `accounts/{account_id}`.|
|reportReasonBadLocation|string|false|none|The reason for which the user is reporting this location when the issue is with the location itself.|
|reportReasonBadRecommendation|string|false|none|The reason for which the user is reporting this location when the issue is with the recommendation. This report is useful if the location has been recommended to the Business Profile account.|
|reportReasonElaboration|string|false|none|Optional. A text entry for elaborating on the reason for which the user is reporting this location. The maximum length is 512 characters.|
|reportReasonLanguageCode|string|false|none|Optional. The BCP 47 code of language used in `report_reason_elaboration`.|

#### Enumerated Values

|Property|Value|
|---|---|
|reportReasonBadLocation|BAD_LOCATION_REASON_UNSPECIFIED|
|reportReasonBadLocation|NOT_A_LOCATION|
|reportReasonBadLocation|PERMANENTLY_CLOSED|
|reportReasonBadLocation|DOES_NOT_EXIST|
|reportReasonBadLocation|SPAM|
|reportReasonBadLocation|NOT_A_BUSINESS|
|reportReasonBadLocation|MOVED|
|reportReasonBadLocation|DUPLICATE|
|reportReasonBadRecommendation|BAD_RECOMMENDATION_REASON_UNSPECIFIED|
|reportReasonBadRecommendation|NOT_A_STORE_FRONT|
|reportReasonBadRecommendation|NOT_PART_OF_SUGGESTED_CHAIN|
|reportReasonBadRecommendation|IRRELEVANT|

<h2 id="tocS_ReportLocalPostInsightsRequest">ReportLocalPostInsightsRequest</h2>
<!-- backwards compatibility -->
<a id="schemareportlocalpostinsightsrequest"></a>
<a id="schema_ReportLocalPostInsightsRequest"></a>
<a id="tocSreportlocalpostinsightsrequest"></a>
<a id="tocsreportlocalpostinsightsrequest"></a>

```json
{
  "basicRequest": {
    "metricRequests": [
      {
        "metric": "METRIC_UNSPECIFIED",
        "options": [
          "METRIC_OPTION_UNSPECIFIED"
        ]
      }
    ],
    "timeRange": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "localPostNames": [
    "string"
  ]
}
```

Request message for Insights.ReportLocalPostInsights

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicRequest|[BasicMetricsRequest](#schemabasicmetricsrequest)|false|none|A request to include basic metric insights in the report. This request applies to all posts requested.|
|localPostNames|[string]|false|none|Required. The list of posts for which to fetch insights data. All posts have to belong to the location whose name is specified in the `name` field.|

<h2 id="tocS_ReportLocalPostInsightsResponse">ReportLocalPostInsightsResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportlocalpostinsightsresponse"></a>
<a id="schema_ReportLocalPostInsightsResponse"></a>
<a id="tocSreportlocalpostinsightsresponse"></a>
<a id="tocsreportlocalpostinsightsresponse"></a>

```json
{
  "localPostMetrics": [
    {
      "localPostName": "string",
      "metricValues": [
        {
          "dimensionalValues": [
            {
              "metricOption": "METRIC_OPTION_UNSPECIFIED",
              "timeDimension": {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "timeOfDay": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "timeRange": {
                  "endTime": "string",
                  "startTime": "string"
                }
              },
              "value": "string"
            }
          ],
          "metric": "METRIC_UNSPECIFIED",
          "totalValue": {
            "metricOption": "METRIC_OPTION_UNSPECIFIED",
            "timeDimension": {
              "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
              "timeOfDay": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "timeRange": {
                "endTime": "string",
                "startTime": "string"
              }
            },
            "value": "string"
          }
        }
      ]
    }
  ],
  "name": "string",
  "timeZone": "string"
}
```

Response message for Insights.ReportLocalPostInsights

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|localPostMetrics|[[LocalPostMetrics](#schemalocalpostmetrics)]|false|none|One entry per requested post corresponding to this location.|
|name|string|false|none|none|
|timeZone|string|false|none|Time zone (IANA timezone IDs, eg, 'Europe/London') of the location.|

<h2 id="tocS_ReportLocationInsightsRequest">ReportLocationInsightsRequest</h2>
<!-- backwards compatibility -->
<a id="schemareportlocationinsightsrequest"></a>
<a id="schema_ReportLocationInsightsRequest"></a>
<a id="tocSreportlocationinsightsrequest"></a>
<a id="tocsreportlocationinsightsrequest"></a>

```json
{
  "basicRequest": {
    "metricRequests": [
      {
        "metric": "METRIC_UNSPECIFIED",
        "options": [
          "METRIC_OPTION_UNSPECIFIED"
        ]
      }
    ],
    "timeRange": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "drivingDirectionsRequest": {
    "languageCode": "string",
    "numDays": "SEVEN"
  },
  "locationNames": [
    "string"
  ]
}
```

Request message for Insights.ReportLocationInsights.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicRequest|[BasicMetricsRequest](#schemabasicmetricsrequest)|false|none|A request to include basic metric insights in the report.|
|drivingDirectionsRequest|[DrivingDirectionMetricsRequest](#schemadrivingdirectionmetricsrequest)|false|none|A request to include insights about driving-direction requests in the report.|
|locationNames|[string]|false|none|A collection of locations to fetch insights for, specified by their names.|

<h2 id="tocS_ReportLocationInsightsResponse">ReportLocationInsightsResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportlocationinsightsresponse"></a>
<a id="schema_ReportLocationInsightsResponse"></a>
<a id="tocSreportlocationinsightsresponse"></a>
<a id="tocsreportlocationinsightsresponse"></a>

```json
{
  "locationDrivingDirectionMetrics": [
    {
      "locationName": "string",
      "timeZone": "string",
      "topDirectionSources": [
        {
          "dayCount": 0,
          "regionCounts": [
            {
              "count": "string",
              "label": "string",
              "latlng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ]
        }
      ]
    }
  ],
  "locationMetrics": [
    {
      "locationName": "string",
      "metricValues": [
        {
          "dimensionalValues": [
            {
              "metricOption": "METRIC_OPTION_UNSPECIFIED",
              "timeDimension": {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "timeOfDay": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "timeRange": {
                  "endTime": "string",
                  "startTime": "string"
                }
              },
              "value": "string"
            }
          ],
          "metric": "METRIC_UNSPECIFIED",
          "totalValue": {
            "metricOption": "METRIC_OPTION_UNSPECIFIED",
            "timeDimension": {
              "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
              "timeOfDay": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "timeRange": {
                "endTime": "string",
                "startTime": "string"
              }
            },
            "value": "string"
          }
        }
      ],
      "timeZone": "string"
    }
  ]
}
```

Response message for `Insights.ReportLocationInsights`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationDrivingDirectionMetrics|[[LocationDrivingDirectionMetrics](#schemalocationdrivingdirectionmetrics)]|false|none|A collection of values for driving direction-related metrics.|
|locationMetrics|[[LocationMetrics](#schemalocationmetrics)]|false|none|A collection of metric values by location.|

<h2 id="tocS_Review">Review</h2>
<!-- backwards compatibility -->
<a id="schemareview"></a>
<a id="schema_Review"></a>
<a id="tocSreview"></a>
<a id="tocsreview"></a>

```json
{
  "comment": "string",
  "createTime": "string",
  "name": "string",
  "reviewId": "string",
  "reviewReply": {
    "comment": "string",
    "updateTime": "string"
  },
  "reviewer": {
    "displayName": "string",
    "isAnonymous": true,
    "profilePhotoUrl": "string"
  },
  "starRating": "STAR_RATING_UNSPECIFIED",
  "updateTime": "string"
}
```

Output only. Represents a review for a location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|The body of the review as plain text with markups.|
|createTime|string(google-datetime)|false|none|The timestamp for when the review was written.|
|name|string|false|none|The resource name. For Review it is of the form `accounts/{account_id}/locations/{location_id}/reviews/{review_id}`|
|reviewId|string|false|none|The encrypted unique identifier.|
|reviewReply|[ReviewReply](#schemareviewreply)|false|none|The owner/manager of this location's reply to this review.|
|reviewer|[Reviewer](#schemareviewer)|false|none|The author of the review.|
|starRating|string|false|none|The star rating of the review.|
|updateTime|string(google-datetime)|false|none|The timestamp for when the review was last modified.|

#### Enumerated Values

|Property|Value|
|---|---|
|starRating|STAR_RATING_UNSPECIFIED|
|starRating|ONE|
|starRating|TWO|
|starRating|THREE|
|starRating|FOUR|
|starRating|FIVE|

<h2 id="tocS_ReviewReply">ReviewReply</h2>
<!-- backwards compatibility -->
<a id="schemareviewreply"></a>
<a id="schema_ReviewReply"></a>
<a id="tocSreviewreply"></a>
<a id="tocsreviewreply"></a>

```json
{
  "comment": "string",
  "updateTime": "string"
}
```

Represents the location owner/manager's reply to a review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|The body of the reply as plain text with markups. The maximum length is 4096 bytes.|
|updateTime|string(google-datetime)|false|none|Output only. The timestamp for when the reply was last modified.|

<h2 id="tocS_Reviewer">Reviewer</h2>
<!-- backwards compatibility -->
<a id="schemareviewer"></a>
<a id="schema_Reviewer"></a>
<a id="tocSreviewer"></a>
<a id="tocsreviewer"></a>

```json
{
  "displayName": "string",
  "isAnonymous": true,
  "profilePhotoUrl": "string"
}
```

Represents the author of the review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The name of the reviewer. Only populated with the reviewer's real name if `is_anonymous` is false.|
|isAnonymous|boolean|false|none|Indicates whether the reviewer has opted to remain anonymous.|
|profilePhotoUrl|string|false|none|The profile photo link of the reviewer. Only populated if `is_anonymous` is false.|

<h2 id="tocS_SearchChainsResponse">SearchChainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchchainsresponse"></a>
<a id="schema_SearchChainsResponse"></a>
<a id="tocSsearchchainsresponse"></a>
<a id="tocssearchchainsresponse"></a>

```json
{
  "chains": [
    {
      "chainNames": [
        {
          "displayName": "string",
          "languageCode": "string"
        }
      ],
      "locationCount": 0,
      "name": "string",
      "websites": [
        {
          "url": "string"
        }
      ]
    }
  ]
}
```

Response message for Locations.SearchChains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chains|[[Chain](#schemachain)]|false|none|Chains that match the queried chain_display_name in SearchChainsRequest. If there are no matches, this field will be empty. Results are listed in order of relevance.|

<h2 id="tocS_SearchGoogleLocationsRequest">SearchGoogleLocationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchgooglelocationsrequest"></a>
<a id="schema_SearchGoogleLocationsRequest"></a>
<a id="tocSsearchgooglelocationsrequest"></a>
<a id="tocssearchgooglelocationsrequest"></a>

```json
{
  "location": {
    "adWordsLocationExtensions": {
      "adPhone": "string"
    },
    "additionalCategories": [
      {
        "categoryId": "string",
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      }
    ],
    "additionalPhones": [
      "string"
    ],
    "address": {
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
    "attributes": [
      {
        "attributeId": "string",
        "repeatedEnumValue": {
          "setValues": [
            "string"
          ],
          "unsetValues": [
            "string"
          ]
        },
        "urlValues": [
          {
            "url": "string"
          }
        ],
        "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
        "values": [
          null
        ]
      }
    ],
    "labels": [
      "string"
    ],
    "languageCode": "string",
    "latlng": {
      "latitude": 0,
      "longitude": 0
    },
    "locationKey": {
      "explicitNoPlaceId": true,
      "placeId": "string",
      "plusPageId": "string",
      "requestId": "string"
    },
    "locationName": "string",
    "locationState": {
      "canDelete": true,
      "canHaveFoodMenus": true,
      "canModifyServiceList": true,
      "canOperateHealthData": true,
      "canOperateLodgingData": true,
      "canUpdate": true,
      "hasPendingEdits": true,
      "hasPendingVerification": true,
      "isDisabled": true,
      "isDisconnected": true,
      "isDuplicate": true,
      "isGoogleUpdated": true,
      "isLocalPostApiDisabled": true,
      "isPendingReview": true,
      "isPublished": true,
      "isSuspended": true,
      "isVerified": true,
      "needsReverification": true
    },
    "metadata": {
      "duplicate": {
        "access": "ACCESS_UNSPECIFIED",
        "locationName": "string",
        "placeId": "string"
      },
      "mapsUrl": "string",
      "newReviewUrl": "string"
    },
    "moreHours": [
      {
        "hoursTypeId": "string",
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": "string",
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": "string"
          }
        ]
      }
    ],
    "name": "string",
    "openInfo": {
      "canReopen": true,
      "openingDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
    },
    "priceLists": [
      {
        "labels": [
          {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        ],
        "priceListId": "string",
        "sections": [
          {
            "items": [
              {
                "itemId": "string",
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ],
                "price": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                }
              }
            ],
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ],
            "sectionId": "string",
            "sectionType": "SECTION_TYPE_UNSPECIFIED"
          }
        ],
        "sourceUrl": "string"
      }
    ],
    "primaryCategory": {
      "categoryId": "string",
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    },
    "primaryPhone": "string",
    "profile": {
      "description": "string"
    },
    "regularHours": {
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": "string",
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": "string"
        }
      ]
    },
    "relationshipData": {
      "parentChain": "string"
    },
    "serviceArea": {
      "businessType": "BUSINESS_TYPE_UNSPECIFIED",
      "places": {
        "placeInfos": [
          {
            "name": "string",
            "placeId": "string"
          }
        ]
      },
      "radius": {
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "radiusKm": 0
      }
    },
    "specialHours": {
      "specialHourPeriods": [
        {
          "closeTime": "string",
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "isClosed": true,
          "openTime": "string",
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "storeCode": "string",
    "websiteUrl": "string"
  },
  "query": "string",
  "resultCount": 0
}
```

Request message for GoogleLocations.SearchGoogleLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[Location](#schemalocation)|false|none|Location to search for. If provided, will find locations which match the provided location details.|
|query|string|false|none|Text query to search for. The search results from a query string will be less accurate than if providing an exact location, but can provide more inexact matches.|
|resultCount|integer(int32)|false|none|The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination.|

<h2 id="tocS_SearchGoogleLocationsResponse">SearchGoogleLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchgooglelocationsresponse"></a>
<a id="schema_SearchGoogleLocationsResponse"></a>
<a id="tocSsearchgooglelocationsresponse"></a>
<a id="tocssearchgooglelocationsresponse"></a>

```json
{
  "googleLocations": [
    {
      "location": {
        "adWordsLocationExtensions": {
          "adPhone": "string"
        },
        "additionalCategories": [
          {
            "categoryId": "string",
            "displayName": "string",
            "moreHoursTypes": [
              {
                "displayName": "string",
                "hoursTypeId": "string",
                "localizedDisplayName": "string"
              }
            ],
            "serviceTypes": [
              {
                "displayName": "string",
                "serviceTypeId": "string"
              }
            ]
          }
        ],
        "additionalPhones": [
          "string"
        ],
        "address": {
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
        "attributes": [
          {
            "attributeId": "string",
            "repeatedEnumValue": {
              "setValues": [
                "string"
              ],
              "unsetValues": [
                "string"
              ]
            },
            "urlValues": [
              {
                "url": "string"
              }
            ],
            "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
            "values": [
              null
            ]
          }
        ],
        "labels": [
          "string"
        ],
        "languageCode": "string",
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "locationKey": {
          "explicitNoPlaceId": true,
          "placeId": "string",
          "plusPageId": "string",
          "requestId": "string"
        },
        "locationName": "string",
        "locationState": {
          "canDelete": true,
          "canHaveFoodMenus": true,
          "canModifyServiceList": true,
          "canOperateHealthData": true,
          "canOperateLodgingData": true,
          "canUpdate": true,
          "hasPendingEdits": true,
          "hasPendingVerification": true,
          "isDisabled": true,
          "isDisconnected": true,
          "isDuplicate": true,
          "isGoogleUpdated": true,
          "isLocalPostApiDisabled": true,
          "isPendingReview": true,
          "isPublished": true,
          "isSuspended": true,
          "isVerified": true,
          "needsReverification": true
        },
        "metadata": {
          "duplicate": {
            "access": "ACCESS_UNSPECIFIED",
            "locationName": "string",
            "placeId": "string"
          },
          "mapsUrl": "string",
          "newReviewUrl": "string"
        },
        "moreHours": [
          {
            "hoursTypeId": "string",
            "periods": [
              {
                "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
                "closeTime": "string",
                "openDay": "DAY_OF_WEEK_UNSPECIFIED",
                "openTime": "string"
              }
            ]
          }
        ],
        "name": "string",
        "openInfo": {
          "canReopen": true,
          "openingDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
        },
        "priceLists": [
          {
            "labels": [
              {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            ],
            "priceListId": "string",
            "sections": [
              {
                "items": [
                  {
                    "itemId": "string",
                    "labels": [
                      {
                        "description": "string",
                        "displayName": "string",
                        "languageCode": "string"
                      }
                    ],
                    "price": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    }
                  }
                ],
                "labels": [
                  {
                    "description": "string",
                    "displayName": "string",
                    "languageCode": "string"
                  }
                ],
                "sectionId": "string",
                "sectionType": "SECTION_TYPE_UNSPECIFIED"
              }
            ],
            "sourceUrl": "string"
          }
        ],
        "primaryCategory": {
          "categoryId": "string",
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        },
        "primaryPhone": "string",
        "profile": {
          "description": "string"
        },
        "regularHours": {
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": "string",
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": "string"
            }
          ]
        },
        "relationshipData": {
          "parentChain": "string"
        },
        "serviceArea": {
          "businessType": "BUSINESS_TYPE_UNSPECIFIED",
          "places": {
            "placeInfos": [
              {
                "name": "string",
                "placeId": "string"
              }
            ]
          },
          "radius": {
            "latlng": {
              "latitude": 0,
              "longitude": 0
            },
            "radiusKm": 0
          }
        },
        "specialHours": {
          "specialHourPeriods": [
            {
              "closeTime": "string",
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "isClosed": true,
              "openTime": "string",
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              }
            }
          ]
        },
        "storeCode": "string",
        "websiteUrl": "string"
      },
      "name": "string",
      "requestAdminRightsUrl": "string"
    }
  ]
}
```

Response message for GoogleLocations.SearchGoogleLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googleLocations|[[GoogleLocation](#schemagooglelocation)]|false|none|A collection of GoogleLocations that are potential matches to the specified request, listed in order from most to least accuracy.|

<h2 id="tocS_Section">Section</h2>
<!-- backwards compatibility -->
<a id="schemasection"></a>
<a id="schema_Section"></a>
<a id="tocSsection"></a>
<a id="tocssection"></a>

```json
{
  "items": [
    {
      "itemId": "string",
      "labels": [
        {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      ],
      "price": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    }
  ],
  "labels": [
    {
      "description": "string",
      "displayName": "string",
      "languageCode": "string"
    }
  ],
  "sectionId": "string",
  "sectionType": "SECTION_TYPE_UNSPECIFIED"
}
```

A section of the price list containing one or more items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Item](#schemaitem)]|false|none|Items that are contained within this section of the price list.|
|labels|[[Label](#schemalabel)]|false|none|Required. Language-tagged labels for the section. We recommend that section names and descriptions be 140 characters or less. At least one set of labels is required.|
|sectionId|string|false|none|Required. ID for the section. Price list, section, and item IDs cannot be duplicated within this Location.|
|sectionType|string|false|none|Optional. Type of the current price list section. Default value is FOOD.|

#### Enumerated Values

|Property|Value|
|---|---|
|sectionType|SECTION_TYPE_UNSPECIFIED|
|sectionType|FOOD|
|sectionType|SERVICES|

<h2 id="tocS_ServiceAreaBusiness">ServiceAreaBusiness</h2>
<!-- backwards compatibility -->
<a id="schemaserviceareabusiness"></a>
<a id="schema_ServiceAreaBusiness"></a>
<a id="tocSserviceareabusiness"></a>
<a id="tocsserviceareabusiness"></a>

```json
{
  "businessType": "BUSINESS_TYPE_UNSPECIFIED",
  "places": {
    "placeInfos": [
      {
        "name": "string",
        "placeId": "string"
      }
    ]
  },
  "radius": {
    "latlng": {
      "latitude": 0,
      "longitude": 0
    },
    "radiusKm": 0
  }
}
```

Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessType|string|false|none|Indicates the type of the service area business.|
|places|[Places](#schemaplaces)|false|none|The area that this business serves defined through a set of places.|
|radius|[PointRadius](#schemapointradius)|false|none|Output only. The area that this business serves centered around a point.|

#### Enumerated Values

|Property|Value|
|---|---|
|businessType|BUSINESS_TYPE_UNSPECIFIED|
|businessType|CUSTOMER_LOCATION_ONLY|
|businessType|CUSTOMER_AND_BUSINESS_LOCATION|

<h2 id="tocS_ServiceBusinessContext">ServiceBusinessContext</h2>
<!-- backwards compatibility -->
<a id="schemaservicebusinesscontext"></a>
<a id="schema_ServiceBusinessContext"></a>
<a id="tocSservicebusinesscontext"></a>
<a id="tocsservicebusinesscontext"></a>

```json
{
  "address": {
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
}
```

Additional data for service business verification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[PostalAddress](#schemapostaladdress)|false|none|The verification address of the location. It is used to either enable more verification options or send a postcard.|

<h2 id="tocS_ServiceItem">ServiceItem</h2>
<!-- backwards compatibility -->
<a id="schemaserviceitem"></a>
<a id="schema_ServiceItem"></a>
<a id="tocSserviceitem"></a>
<a id="tocsserviceitem"></a>

```json
{
  "freeFormServiceItem": {
    "categoryId": "string",
    "label": {
      "description": "string",
      "displayName": "string",
      "languageCode": "string"
    }
  },
  "isOffered": true,
  "price": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "structuredServiceItem": {
    "description": "string",
    "serviceTypeId": "string"
  }
}
```

A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|freeFormServiceItem|[FreeFormServiceItem](#schemafreeformserviceitem)|false|none|This field will be set case of free-form services data.|
|isOffered|boolean|false|none|Optional. This field decides whether or not the input service is offered by the merchant.|
|price|[Money](#schemamoney)|false|none|Optional. Represents the monetary price of the service item. We recommend that currency_code and units should be set when including a price.|
|structuredServiceItem|[StructuredServiceItem](#schemastructuredserviceitem)|false|none|This field will be set case of structured services data.|

<h2 id="tocS_ServiceList">ServiceList</h2>
<!-- backwards compatibility -->
<a id="schemaservicelist"></a>
<a id="schema_ServiceList"></a>
<a id="tocSservicelist"></a>
<a id="tocsservicelist"></a>

```json
{
  "name": "string",
  "serviceItems": [
    {
      "freeFormServiceItem": {
        "categoryId": "string",
        "label": {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      },
      "isOffered": true,
      "price": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "structuredServiceItem": {
        "description": "string",
        "serviceTypeId": "string"
      }
    }
  ]
}
```

A service list containing one or more service items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/serviceList`|
|serviceItems|[[ServiceItem](#schemaserviceitem)]|false|none|Service items that are contained within this service list. Duplicated service items will be removed automatically.|

<h2 id="tocS_ServiceType">ServiceType</h2>
<!-- backwards compatibility -->
<a id="schemaservicetype"></a>
<a id="schema_ServiceType"></a>
<a id="tocSservicetype"></a>
<a id="tocsservicetype"></a>

```json
{
  "displayName": "string",
  "serviceTypeId": "string"
}
```

A message describing a service type that the business offers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|read-only|Output only. The human-readable display name for the service type.|
|serviceTypeId|string|false|read-only|Output only. A stable ID (provided by Google) for this service type.|

<h2 id="tocS_Services">Services</h2>
<!-- backwards compatibility -->
<a id="schemaservices"></a>
<a id="schema_Services"></a>
<a id="tocSservices"></a>
<a id="tocsservices"></a>

```json
{
  "baggageStorage": true,
  "baggageStorageException": "EXCEPTION_UNSPECIFIED",
  "concierge": true,
  "conciergeException": "EXCEPTION_UNSPECIFIED",
  "convenienceStore": true,
  "convenienceStoreException": "EXCEPTION_UNSPECIFIED",
  "currencyExchange": true,
  "currencyExchangeException": "EXCEPTION_UNSPECIFIED",
  "elevator": true,
  "elevatorException": "EXCEPTION_UNSPECIFIED",
  "frontDesk": true,
  "frontDeskException": "EXCEPTION_UNSPECIFIED",
  "fullServiceLaundry": true,
  "fullServiceLaundryException": "EXCEPTION_UNSPECIFIED",
  "giftShop": true,
  "giftShopException": "EXCEPTION_UNSPECIFIED",
  "languagesSpoken": {
    "arabicSpoken": true,
    "arabicSpokenException": "EXCEPTION_UNSPECIFIED",
    "cantoneseSpoken": true,
    "cantoneseSpokenException": "EXCEPTION_UNSPECIFIED",
    "dutchSpoken": true,
    "dutchSpokenException": "EXCEPTION_UNSPECIFIED",
    "englishSpoken": true,
    "englishSpokenException": "EXCEPTION_UNSPECIFIED",
    "filipinoSpoken": true,
    "filipinoSpokenException": "EXCEPTION_UNSPECIFIED",
    "frenchSpoken": true,
    "frenchSpokenException": "EXCEPTION_UNSPECIFIED",
    "germanSpoken": true,
    "germanSpokenException": "EXCEPTION_UNSPECIFIED",
    "hindiSpoken": true,
    "hindiSpokenException": "EXCEPTION_UNSPECIFIED",
    "indonesianSpoken": true,
    "indonesianSpokenException": "EXCEPTION_UNSPECIFIED",
    "italianSpoken": true,
    "italianSpokenException": "EXCEPTION_UNSPECIFIED",
    "japaneseSpoken": true,
    "japaneseSpokenException": "EXCEPTION_UNSPECIFIED",
    "koreanSpoken": true,
    "koreanSpokenException": "EXCEPTION_UNSPECIFIED",
    "mandarinSpoken": true,
    "mandarinSpokenException": "EXCEPTION_UNSPECIFIED",
    "portugueseSpoken": true,
    "portugueseSpokenException": "EXCEPTION_UNSPECIFIED",
    "russianSpoken": true,
    "russianSpokenException": "EXCEPTION_UNSPECIFIED",
    "spanishSpoken": true,
    "spanishSpokenException": "EXCEPTION_UNSPECIFIED",
    "vietnameseSpoken": true,
    "vietnameseSpokenException": "EXCEPTION_UNSPECIFIED"
  },
  "selfServiceLaundry": true,
  "selfServiceLaundryException": "EXCEPTION_UNSPECIFIED",
  "socialHour": true,
  "socialHourException": "EXCEPTION_UNSPECIFIED",
  "twentyFourHourFrontDesk": true,
  "twentyFourHourFrontDeskException": "EXCEPTION_UNSPECIFIED",
  "wakeUpCalls": true,
  "wakeUpCallsException": "EXCEPTION_UNSPECIFIED"
}
```

Conveniences or help provided by the property to facilitate an easier, more comfortable stay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baggageStorage|boolean|false|none|Baggage storage. A provision for guests to leave their bags at the hotel when they arrive for their stay before the official check-in time. May or may not apply for guests who wish to leave their bags after check-out and before departing the locale. Also known as bag dropoff.|
|baggageStorageException|string|false|none|Baggage storage exception.|
|concierge|boolean|false|none|Concierge. Hotel staff member(s) responsible for facilitating an easy, comfortable stay through making reservations for meals, sourcing theater tickets, arranging tours, finding a doctor, making recommendations, and answering questions.|
|conciergeException|string|false|none|Concierge exception.|
|convenienceStore|boolean|false|none|Convenience store. A shop at the hotel primarily selling snacks, drinks, non-prescription medicines, health and beauty aids, magazines and newspapers.|
|convenienceStoreException|string|false|none|Convenience store exception.|
|currencyExchange|boolean|false|none|Currency exchange. A staff member or automated machine tasked with the transaction of providing the native currency of the hotel's locale in exchange for the foreign currency provided by a guest.|
|currencyExchangeException|string|false|none|Currency exchange exception.|
|elevator|boolean|false|none|Elevator. A passenger elevator that transports guests from one story to another. Also known as lift.|
|elevatorException|string|false|none|Elevator exception.|
|frontDesk|boolean|false|none|Front desk. A counter or desk in the lobby or the immediate interior of the hotel where a member of the staff greets guests and processes the information related to their stay (including check-in and check-out). May or may not be manned and open 24/7.|
|frontDeskException|string|false|none|Front desk exception.|
|fullServiceLaundry|boolean|false|none|Full service laundry. Laundry and dry cleaning facilitated and handled by the hotel on behalf of the guest. Does not include the provision for guests to do their own laundry in on-site machines.|
|fullServiceLaundryException|string|false|none|Full service laundry exception.|
|giftShop|boolean|false|none|Gift shop. An on-site store primarily selling souvenirs, mementos and other gift items. May or may not also sell sundries, magazines and newspapers, clothing, or snacks.|
|giftShopException|string|false|none|Gift shop exception.|
|languagesSpoken|[LanguagesSpoken](#schemalanguagesspoken)|false|none|Languages spoken by at least one staff member.|
|selfServiceLaundry|boolean|false|none|Self service laundry. On-site clothes washers and dryers accessible to guests for the purpose of washing and drying their own clothes. May or may not require payment to use the machines.|
|selfServiceLaundryException|string|false|none|Self service laundry exception.|
|socialHour|boolean|false|none|Social hour. A reception with complimentary soft drinks, tea, coffee, wine and/or cocktails in the afternoon or evening. Can be hosted by hotel staff or guests may serve themselves. Also known as wine hour. The availability of coffee/tea in the lobby throughout the day does not constitute a social or wine hour.|
|socialHourException|string|false|none|Social hour exception.|
|twentyFourHourFrontDesk|boolean|false|none|24hr front desk. Front desk is staffed 24 hours a day.|
|twentyFourHourFrontDeskException|string|false|none|24hr front desk exception.|
|wakeUpCalls|boolean|false|none|Wake up calls. By direction of the guest, a hotel staff member will phone the guest unit at the requested hour. Also known as morning call.|
|wakeUpCallsException|string|false|none|Wake up calls exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|baggageStorageException|EXCEPTION_UNSPECIFIED|
|baggageStorageException|UNDER_CONSTRUCTION|
|baggageStorageException|DEPENDENT_ON_SEASON|
|baggageStorageException|DEPENDENT_ON_DAY_OF_WEEK|
|conciergeException|EXCEPTION_UNSPECIFIED|
|conciergeException|UNDER_CONSTRUCTION|
|conciergeException|DEPENDENT_ON_SEASON|
|conciergeException|DEPENDENT_ON_DAY_OF_WEEK|
|convenienceStoreException|EXCEPTION_UNSPECIFIED|
|convenienceStoreException|UNDER_CONSTRUCTION|
|convenienceStoreException|DEPENDENT_ON_SEASON|
|convenienceStoreException|DEPENDENT_ON_DAY_OF_WEEK|
|currencyExchangeException|EXCEPTION_UNSPECIFIED|
|currencyExchangeException|UNDER_CONSTRUCTION|
|currencyExchangeException|DEPENDENT_ON_SEASON|
|currencyExchangeException|DEPENDENT_ON_DAY_OF_WEEK|
|elevatorException|EXCEPTION_UNSPECIFIED|
|elevatorException|UNDER_CONSTRUCTION|
|elevatorException|DEPENDENT_ON_SEASON|
|elevatorException|DEPENDENT_ON_DAY_OF_WEEK|
|frontDeskException|EXCEPTION_UNSPECIFIED|
|frontDeskException|UNDER_CONSTRUCTION|
|frontDeskException|DEPENDENT_ON_SEASON|
|frontDeskException|DEPENDENT_ON_DAY_OF_WEEK|
|fullServiceLaundryException|EXCEPTION_UNSPECIFIED|
|fullServiceLaundryException|UNDER_CONSTRUCTION|
|fullServiceLaundryException|DEPENDENT_ON_SEASON|
|fullServiceLaundryException|DEPENDENT_ON_DAY_OF_WEEK|
|giftShopException|EXCEPTION_UNSPECIFIED|
|giftShopException|UNDER_CONSTRUCTION|
|giftShopException|DEPENDENT_ON_SEASON|
|giftShopException|DEPENDENT_ON_DAY_OF_WEEK|
|selfServiceLaundryException|EXCEPTION_UNSPECIFIED|
|selfServiceLaundryException|UNDER_CONSTRUCTION|
|selfServiceLaundryException|DEPENDENT_ON_SEASON|
|selfServiceLaundryException|DEPENDENT_ON_DAY_OF_WEEK|
|socialHourException|EXCEPTION_UNSPECIFIED|
|socialHourException|UNDER_CONSTRUCTION|
|socialHourException|DEPENDENT_ON_SEASON|
|socialHourException|DEPENDENT_ON_DAY_OF_WEEK|
|twentyFourHourFrontDeskException|EXCEPTION_UNSPECIFIED|
|twentyFourHourFrontDeskException|UNDER_CONSTRUCTION|
|twentyFourHourFrontDeskException|DEPENDENT_ON_SEASON|
|twentyFourHourFrontDeskException|DEPENDENT_ON_DAY_OF_WEEK|
|wakeUpCallsException|EXCEPTION_UNSPECIFIED|
|wakeUpCallsException|UNDER_CONSTRUCTION|
|wakeUpCallsException|DEPENDENT_ON_SEASON|
|wakeUpCallsException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_SpecialHourPeriod">SpecialHourPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaspecialhourperiod"></a>
<a id="schema_SpecialHourPeriod"></a>
<a id="tocSspecialhourperiod"></a>
<a id="tocsspecialhourperiod"></a>

```json
{
  "closeTime": "string",
  "endDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "isClosed": true,
  "openTime": "string",
  "startDate": {
    "day": 0,
    "month": 0,
    "year": 0
  }
}
```

Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closeTime|string|false|none|The wall time on `end_date` when a location closes, expressed in 24hr ISO 8601 extended format. (hh:mm) Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. Must be specified if `is_closed` is false.|
|endDate|[Date](#schemadate)|false|none|The calendar date this special hour period ends on. If `end_date` field is not set, default to the date specified in `start_date`. If set, this field must be equal to or at most 1 day after `start_date`.|
|isClosed|boolean|false|none|If true, `end_date`, `open_time`, and `close_time` are ignored, and the date specified in `start_date` is treated as the location being closed for the entire day.|
|openTime|string|false|none|The wall time on `start_date` when a location opens, expressed in 24hr ISO 8601 extended format. (hh:mm) Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. Must be specified if `is_closed` is false.|
|startDate|[Date](#schemadate)|false|none|The calendar date this special hour period starts on.|

<h2 id="tocS_SpecialHours">SpecialHours</h2>
<!-- backwards compatibility -->
<a id="schemaspecialhours"></a>
<a id="schema_SpecialHours"></a>
<a id="tocSspecialhours"></a>
<a id="tocsspecialhours"></a>

```json
{
  "specialHourPeriods": [
    {
      "closeTime": "string",
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "isClosed": true,
      "openTime": "string",
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    }
  ]
}
```

Represents a set of time periods when a location's operational hours differ from its normal business hours.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|specialHourPeriods|[[SpecialHourPeriod](#schemaspecialhourperiod)]|false|none|A list of exceptions to the business's regular hours.|

<h2 id="tocS_StartUploadMediaItemDataRequest">StartUploadMediaItemDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartuploadmediaitemdatarequest"></a>
<a id="schema_StartUploadMediaItemDataRequest"></a>
<a id="tocSstartuploadmediaitemdatarequest"></a>
<a id="tocsstartuploadmediaitemdatarequest"></a>

```json
{}
```

Request message for Media.StartUploadMediaItemData.

<h2 id="tocS_StructuredServiceItem">StructuredServiceItem</h2>
<!-- backwards compatibility -->
<a id="schemastructuredserviceitem"></a>
<a id="schema_StructuredServiceItem"></a>
<a id="tocSstructuredserviceitem"></a>
<a id="tocsstructuredserviceitem"></a>

```json
{
  "description": "string",
  "serviceTypeId": "string"
}
```

Represents a structured service offered by the merchant. For eg: toilet_installation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of structured service item. The character limit is 300.|
|serviceTypeId|string|false|none|Required. The `service_type_id` field is a Google provided unique ID that can be found in `ServiceTypeMetadata`. This information is provided by BatchGetBusinessCategories rpc service.|

<h2 id="tocS_TargetLocation">TargetLocation</h2>
<!-- backwards compatibility -->
<a id="schematargetlocation"></a>
<a id="schema_TargetLocation"></a>
<a id="tocStargetlocation"></a>
<a id="tocstargetlocation"></a>

```json
{
  "locationAddress": "string",
  "locationName": "string"
}
```

Represents a target location for a pending invitation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationAddress|string|false|none|The address of the location to which the user is invited.|
|locationName|string|false|none|The name of the location to which the user is invited.|

<h2 id="tocS_TimeDimension">TimeDimension</h2>
<!-- backwards compatibility -->
<a id="schematimedimension"></a>
<a id="schema_TimeDimension"></a>
<a id="tocStimedimension"></a>
<a id="tocstimedimension"></a>

```json
{
  "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
  "timeOfDay": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "timeRange": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

The dimension for which data is divided over.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|string|false|none|The day of the week ("MONDAY" to "SUNDAY") this value corresponds to. Set for BREAKDOWN_DAY_OF_WEEK option.|
|timeOfDay|[TimeOfDay](#schematimeofday)|false|none|The hour of the day (0 to 23) this value corresponds to. Set for BREAKDOWN_HOUR_OF_DAY option.|
|timeRange|[TimeRange](#schematimerange)|false|none|The range of time this value covers. Set for AGGREGATED_TOTAL and AGGREGATED_DAILY options.|

#### Enumerated Values

|Property|Value|
|---|---|
|dayOfWeek|DAY_OF_WEEK_UNSPECIFIED|
|dayOfWeek|MONDAY|
|dayOfWeek|TUESDAY|
|dayOfWeek|WEDNESDAY|
|dayOfWeek|THURSDAY|
|dayOfWeek|FRIDAY|
|dayOfWeek|SATURDAY|
|dayOfWeek|SUNDAY|

<h2 id="tocS_TimeInterval">TimeInterval</h2>
<!-- backwards compatibility -->
<a id="schematimeinterval"></a>
<a id="schema_TimeInterval"></a>
<a id="tocStimeinterval"></a>
<a id="tocstimeinterval"></a>

```json
{
  "endDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "endTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "startDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "startTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

An interval of time, inclusive. It must contain all fields to be valid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|[Date](#schemadate)|false|none|The end date of this period.|
|endTime|[TimeOfDay](#schematimeofday)|false|none|The end time of this period.|
|startDate|[Date](#schemadate)|false|none|The start date of this period.|
|startTime|[TimeOfDay](#schematimeofday)|false|none|The start time of this period.|

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

<h2 id="tocS_TimePeriod">TimePeriod</h2>
<!-- backwards compatibility -->
<a id="schematimeperiod"></a>
<a id="schema_TimePeriod"></a>
<a id="tocStimeperiod"></a>
<a id="tocstimeperiod"></a>

```json
{
  "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
  "closeTime": "string",
  "openDay": "DAY_OF_WEEK_UNSPECIFIED",
  "openTime": "string"
}
```

Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closeDay|string|false|none|Indicates the day of the week this period ends on.|
|closeTime|string|false|none|Time in 24hr ISO 8601 extended format (hh:mm). Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field.|
|openDay|string|false|none|Indicates the day of the week this period starts on.|
|openTime|string|false|none|Time in 24hr ISO 8601 extended format (hh:mm). Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field.|

#### Enumerated Values

|Property|Value|
|---|---|
|closeDay|DAY_OF_WEEK_UNSPECIFIED|
|closeDay|MONDAY|
|closeDay|TUESDAY|
|closeDay|WEDNESDAY|
|closeDay|THURSDAY|
|closeDay|FRIDAY|
|closeDay|SATURDAY|
|closeDay|SUNDAY|
|openDay|DAY_OF_WEEK_UNSPECIFIED|
|openDay|MONDAY|
|openDay|TUESDAY|
|openDay|WEDNESDAY|
|openDay|THURSDAY|
|openDay|FRIDAY|
|openDay|SATURDAY|
|openDay|SUNDAY|

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

A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|Epoch timestamp for the end of the range (exclusive).|
|startTime|string(google-datetime)|false|none|Epoch timestamp for the start of the range (inclusive).|

<h2 id="tocS_TopDirectionSources">TopDirectionSources</h2>
<!-- backwards compatibility -->
<a id="schematopdirectionsources"></a>
<a id="schema_TopDirectionSources"></a>
<a id="tocStopdirectionsources"></a>
<a id="tocstopdirectionsources"></a>

```json
{
  "dayCount": 0,
  "regionCounts": [
    {
      "count": "string",
      "label": "string",
      "latlng": {
        "latitude": 0,
        "longitude": 0
      }
    }
  ]
}
```

Top regions where driving-direction requests originated from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayCount|integer(int32)|false|none|The number of days data is aggregated over.|
|regionCounts|[[RegionCount](#schemaregioncount)]|false|none|Regions sorted in descending order by count.|

<h2 id="tocS_TransferLocationRequest">TransferLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schematransferlocationrequest"></a>
<a id="schema_TransferLocationRequest"></a>
<a id="tocStransferlocationrequest"></a>
<a id="tocstransferlocationrequest"></a>

```json
{
  "toAccount": "string"
}
```

Request message for Locations.TransferLocation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|toAccount|string|false|none|Name of the account resource to transfer the location to (for example, "accounts/8675309").|

<h2 id="tocS_Transportation">Transportation</h2>
<!-- backwards compatibility -->
<a id="schematransportation"></a>
<a id="schema_Transportation"></a>
<a id="tocStransportation"></a>
<a id="tocstransportation"></a>

```json
{
  "airportShuttle": true,
  "airportShuttleException": "EXCEPTION_UNSPECIFIED",
  "carRentalOnProperty": true,
  "carRentalOnPropertyException": "EXCEPTION_UNSPECIFIED",
  "freeAirportShuttle": true,
  "freeAirportShuttleException": "EXCEPTION_UNSPECIFIED",
  "freePrivateCarService": true,
  "freePrivateCarServiceException": "EXCEPTION_UNSPECIFIED",
  "localShuttle": true,
  "localShuttleException": "EXCEPTION_UNSPECIFIED",
  "privateCarService": true,
  "privateCarServiceException": "EXCEPTION_UNSPECIFIED",
  "transfer": true,
  "transferException": "EXCEPTION_UNSPECIFIED"
}
```

Vehicles or vehicular services facilitated or owned by the property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airportShuttle|boolean|false|none|Airport shuttle. The hotel provides guests with a chauffeured van or bus to and from the airport. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them. Applies if the hotel has a third-party shuttle service (office/desk etc.) within the hotel. As long as hotel provides this service, it doesn't matter if it's directly with them or a third party they work with. Does not apply if guest has to coordinate with an entity outside/other than the hotel.|
|airportShuttleException|string|false|none|Airport shuttle exception.|
|carRentalOnProperty|boolean|false|none|Car rental on property. A branch of a rental car company with a processing desk in the hotel. Available cars for rent may be awaiting at the hotel or in a nearby lot.|
|carRentalOnPropertyException|string|false|none|Car rental on property exception.|
|freeAirportShuttle|boolean|false|none|Free airport shuttle. Airport shuttle is free to guests. Must be free to all guests without any conditions.|
|freeAirportShuttleException|string|false|none|Free airport shuttle exception.|
|freePrivateCarService|boolean|false|none|Free private car service. Private chauffeured car service is free to guests.|
|freePrivateCarServiceException|string|false|none|Free private car service exception.|
|localShuttle|boolean|false|none|Local shuttle. A car, van or bus provided by the hotel to transport guests to destinations within a specified range of distance around the hotel. Usually shopping and/or convention centers, downtown districts, or beaches. Can be free or for a fee.|
|localShuttleException|string|false|none|Local shuttle exception.|
|privateCarService|boolean|false|none|Private car service. Hotel provides a private chauffeured car to transport guests to destinations. Passengers in the car are either alone or are known to one another and have requested the car together. Service can be free or for a fee and travel distance is usually limited to a specific range. Not a taxi.|
|privateCarServiceException|string|false|none|Private car service exception.|
|transfer|boolean|false|none|Transfer. Hotel provides a shuttle service or car service to take guests to and from the nearest airport or train station. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them.|
|transferException|string|false|none|Transfer exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|airportShuttleException|EXCEPTION_UNSPECIFIED|
|airportShuttleException|UNDER_CONSTRUCTION|
|airportShuttleException|DEPENDENT_ON_SEASON|
|airportShuttleException|DEPENDENT_ON_DAY_OF_WEEK|
|carRentalOnPropertyException|EXCEPTION_UNSPECIFIED|
|carRentalOnPropertyException|UNDER_CONSTRUCTION|
|carRentalOnPropertyException|DEPENDENT_ON_SEASON|
|carRentalOnPropertyException|DEPENDENT_ON_DAY_OF_WEEK|
|freeAirportShuttleException|EXCEPTION_UNSPECIFIED|
|freeAirportShuttleException|UNDER_CONSTRUCTION|
|freeAirportShuttleException|DEPENDENT_ON_SEASON|
|freeAirportShuttleException|DEPENDENT_ON_DAY_OF_WEEK|
|freePrivateCarServiceException|EXCEPTION_UNSPECIFIED|
|freePrivateCarServiceException|UNDER_CONSTRUCTION|
|freePrivateCarServiceException|DEPENDENT_ON_SEASON|
|freePrivateCarServiceException|DEPENDENT_ON_DAY_OF_WEEK|
|localShuttleException|EXCEPTION_UNSPECIFIED|
|localShuttleException|UNDER_CONSTRUCTION|
|localShuttleException|DEPENDENT_ON_SEASON|
|localShuttleException|DEPENDENT_ON_DAY_OF_WEEK|
|privateCarServiceException|EXCEPTION_UNSPECIFIED|
|privateCarServiceException|UNDER_CONSTRUCTION|
|privateCarServiceException|DEPENDENT_ON_SEASON|
|privateCarServiceException|DEPENDENT_ON_DAY_OF_WEEK|
|transferException|EXCEPTION_UNSPECIFIED|
|transferException|UNDER_CONSTRUCTION|
|transferException|DEPENDENT_ON_SEASON|
|transferException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_UpsertAnswerRequest">UpsertAnswerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupsertanswerrequest"></a>
<a id="schema_UpsertAnswerRequest"></a>
<a id="tocSupsertanswerrequest"></a>
<a id="tocsupsertanswerrequest"></a>

```json
{
  "answer": {
    "author": {
      "displayName": "string",
      "profilePhotoUrl": "string",
      "type": "AUTHOR_TYPE_UNSPECIFIED"
    },
    "createTime": "string",
    "name": "string",
    "text": "string",
    "updateTime": "string",
    "upvoteCount": 0
  }
}
```

Request message for QuestionsAndAnswers.UpsertAnswer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|[Answer](#schemaanswer)|false|none|The new answer.|

<h2 id="tocS_UrlAttributeValue">UrlAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaurlattributevalue"></a>
<a id="schema_UrlAttributeValue"></a>
<a id="tocSurlattributevalue"></a>
<a id="tocsurlattributevalue"></a>

```json
{
  "url": "string"
}
```

Values for an attribute with a `value_type` of URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|The URL.|

<h2 id="tocS_Verification">Verification</h2>
<!-- backwards compatibility -->
<a id="schemaverification"></a>
<a id="schema_Verification"></a>
<a id="tocSverification"></a>
<a id="tocsverification"></a>

```json
{
  "createTime": "string",
  "method": "VERIFICATION_METHOD_UNSPECIFIED",
  "name": "string",
  "state": "VERIFICATION_STATE_UNSPECIFIED"
}
```

A verification represents a verification attempt on a location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The timestamp when the verification is requested.|
|method|string|false|none|The method of the verification.|
|name|string|false|none|Resource name of the verification.|
|state|string|false|none|The state of the verification.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|VERIFICATION_METHOD_UNSPECIFIED|
|method|ADDRESS|
|method|EMAIL|
|method|PHONE_CALL|
|method|SMS|
|method|AUTO|
|state|VERIFICATION_STATE_UNSPECIFIED|
|state|PENDING|
|state|COMPLETED|
|state|FAILED|

<h2 id="tocS_VerificationOption">VerificationOption</h2>
<!-- backwards compatibility -->
<a id="schemaverificationoption"></a>
<a id="schema_VerificationOption"></a>
<a id="tocSverificationoption"></a>
<a id="tocsverificationoption"></a>

```json
{
  "addressData": {
    "address": {
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
    "businessName": "string"
  },
  "emailData": {
    "domainName": "string",
    "isUserNameEditable": true,
    "userName": "string"
  },
  "phoneData": {
    "phoneNumber": "string"
  },
  "verificationMethod": "VERIFICATION_METHOD_UNSPECIFIED"
}
```

The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressData|[AddressVerificationData](#schemaaddressverificationdata)|false|none|Set only if the method is MAIL.|
|emailData|[EmailVerificationData](#schemaemailverificationdata)|false|none|Set only if the method is EMAIL.|
|phoneData|[PhoneVerificationData](#schemaphoneverificationdata)|false|none|Set only if the method is PHONE_CALL or SMS.|
|verificationMethod|string|false|none|Method to verify the location.|

#### Enumerated Values

|Property|Value|
|---|---|
|verificationMethod|VERIFICATION_METHOD_UNSPECIFIED|
|verificationMethod|ADDRESS|
|verificationMethod|EMAIL|
|verificationMethod|PHONE_CALL|
|verificationMethod|SMS|
|verificationMethod|AUTO|

<h2 id="tocS_VerifyLocationRequest">VerifyLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifylocationrequest"></a>
<a id="schema_VerifyLocationRequest"></a>
<a id="tocSverifylocationrequest"></a>
<a id="tocsverifylocationrequest"></a>

```json
{
  "addressInput": {
    "mailerContactName": "string"
  },
  "context": {
    "address": {
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
  },
  "emailInput": {
    "emailAddress": "string"
  },
  "languageCode": "string",
  "method": "VERIFICATION_METHOD_UNSPECIFIED",
  "phoneInput": {
    "phoneNumber": "string"
  }
}
```

Request message for Verifications.VerifyLocation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressInput|[AddressInput](#schemaaddressinput)|false|none|The input for ADDRESS method.|
|context|[ServiceBusinessContext](#schemaservicebusinesscontext)|false|none|Extra context information for the verification of service businesses. Required for the locations whose business type is CUSTOMER_LOCATION_ONLY. For ADDRESS verification, the address will be used to send out postcard. For other methods, it should be the same as the one that is passed to FetchVerificationOptions. INVALID_ARGUMENT will be thrown if it is set for other types of business locations.|
|emailInput|[EmailInput](#schemaemailinput)|false|none|The input for EMAIL method.|
|languageCode|string|false|none|The BCP 47 language code representing the language that is to be used for the verification process.|
|method|string|false|none|Verification method.|
|phoneInput|[PhoneInput](#schemaphoneinput)|false|none|The input for PHONE_CALL/SMS method|

#### Enumerated Values

|Property|Value|
|---|---|
|method|VERIFICATION_METHOD_UNSPECIFIED|
|method|ADDRESS|
|method|EMAIL|
|method|PHONE_CALL|
|method|SMS|
|method|AUTO|

<h2 id="tocS_VerifyLocationResponse">VerifyLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifylocationresponse"></a>
<a id="schema_VerifyLocationResponse"></a>
<a id="tocSverifylocationresponse"></a>
<a id="tocsverifylocationresponse"></a>

```json
{
  "verification": {
    "createTime": "string",
    "method": "VERIFICATION_METHOD_UNSPECIFIED",
    "name": "string",
    "state": "VERIFICATION_STATE_UNSPECIFIED"
  }
}
```

Response message for Verifications.VerifyLocation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verification|[Verification](#schemaverification)|false|none|The created verification request.|

<h2 id="tocS_ViewsFromUnit">ViewsFromUnit</h2>
<!-- backwards compatibility -->
<a id="schemaviewsfromunit"></a>
<a id="schema_ViewsFromUnit"></a>
<a id="tocSviewsfromunit"></a>
<a id="tocsviewsfromunit"></a>

```json
{
  "beachView": true,
  "beachViewException": "EXCEPTION_UNSPECIFIED",
  "cityView": true,
  "cityViewException": "EXCEPTION_UNSPECIFIED",
  "gardenView": true,
  "gardenViewException": "EXCEPTION_UNSPECIFIED",
  "lakeView": true,
  "lakeViewException": "EXCEPTION_UNSPECIFIED",
  "landmarkView": true,
  "landmarkViewException": "EXCEPTION_UNSPECIFIED",
  "oceanView": true,
  "oceanViewException": "EXCEPTION_UNSPECIFIED",
  "poolView": true,
  "poolViewException": "EXCEPTION_UNSPECIFIED",
  "valleyView": true,
  "valleyViewException": "EXCEPTION_UNSPECIFIED"
}
```

Views available from the guest unit itself.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beachView|boolean|false|none|Beach view. A guestroom that features a window through which guests can see the beach.|
|beachViewException|string|false|none|Beach view exception.|
|cityView|boolean|false|none|City view. A guestroom that features a window through which guests can see the buildings, parks and/or streets of the city.|
|cityViewException|string|false|none|City view exception.|
|gardenView|boolean|false|none|Garden view. A guestroom that features a window through which guests can see a garden.|
|gardenViewException|string|false|none|Garden view exception.|
|lakeView|boolean|false|none|Lake view.|
|lakeViewException|string|false|none|Lake view exception.|
|landmarkView|boolean|false|none|Landmark view. A guestroom that features a window through which guests can see a landmark such as the countryside, a golf course, the forest, a park, a rain forst, a mountain or a slope.|
|landmarkViewException|string|false|none|Landmark view exception.|
|oceanView|boolean|false|none|Ocean view. A guestroom that features a window through which guests can see the ocean.|
|oceanViewException|string|false|none|Ocean view exception.|
|poolView|boolean|false|none|Pool view. A guestroom that features a window through which guests can see the hotel's swimming pool.|
|poolViewException|string|false|none|Pool view exception.|
|valleyView|boolean|false|none|Valley view. A guestroom that features a window through which guests can see over a valley.|
|valleyViewException|string|false|none|Valley view exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|beachViewException|EXCEPTION_UNSPECIFIED|
|beachViewException|UNDER_CONSTRUCTION|
|beachViewException|DEPENDENT_ON_SEASON|
|beachViewException|DEPENDENT_ON_DAY_OF_WEEK|
|cityViewException|EXCEPTION_UNSPECIFIED|
|cityViewException|UNDER_CONSTRUCTION|
|cityViewException|DEPENDENT_ON_SEASON|
|cityViewException|DEPENDENT_ON_DAY_OF_WEEK|
|gardenViewException|EXCEPTION_UNSPECIFIED|
|gardenViewException|UNDER_CONSTRUCTION|
|gardenViewException|DEPENDENT_ON_SEASON|
|gardenViewException|DEPENDENT_ON_DAY_OF_WEEK|
|lakeViewException|EXCEPTION_UNSPECIFIED|
|lakeViewException|UNDER_CONSTRUCTION|
|lakeViewException|DEPENDENT_ON_SEASON|
|lakeViewException|DEPENDENT_ON_DAY_OF_WEEK|
|landmarkViewException|EXCEPTION_UNSPECIFIED|
|landmarkViewException|UNDER_CONSTRUCTION|
|landmarkViewException|DEPENDENT_ON_SEASON|
|landmarkViewException|DEPENDENT_ON_DAY_OF_WEEK|
|oceanViewException|EXCEPTION_UNSPECIFIED|
|oceanViewException|UNDER_CONSTRUCTION|
|oceanViewException|DEPENDENT_ON_SEASON|
|oceanViewException|DEPENDENT_ON_DAY_OF_WEEK|
|poolViewException|EXCEPTION_UNSPECIFIED|
|poolViewException|UNDER_CONSTRUCTION|
|poolViewException|DEPENDENT_ON_SEASON|
|poolViewException|DEPENDENT_ON_DAY_OF_WEEK|
|valleyViewException|EXCEPTION_UNSPECIFIED|
|valleyViewException|UNDER_CONSTRUCTION|
|valleyViewException|DEPENDENT_ON_SEASON|
|valleyViewException|DEPENDENT_ON_DAY_OF_WEEK|

<h2 id="tocS_Wellness">Wellness</h2>
<!-- backwards compatibility -->
<a id="schemawellness"></a>
<a id="schema_Wellness"></a>
<a id="tocSwellness"></a>
<a id="tocswellness"></a>

```json
{
  "doctorOnCall": true,
  "doctorOnCallException": "EXCEPTION_UNSPECIFIED",
  "ellipticalMachine": true,
  "ellipticalMachineException": "EXCEPTION_UNSPECIFIED",
  "fitnessCenter": true,
  "fitnessCenterException": "EXCEPTION_UNSPECIFIED",
  "freeFitnessCenter": true,
  "freeFitnessCenterException": "EXCEPTION_UNSPECIFIED",
  "freeWeights": true,
  "freeWeightsException": "EXCEPTION_UNSPECIFIED",
  "massage": true,
  "massageException": "EXCEPTION_UNSPECIFIED",
  "salon": true,
  "salonException": "EXCEPTION_UNSPECIFIED",
  "sauna": true,
  "saunaException": "EXCEPTION_UNSPECIFIED",
  "spa": true,
  "spaException": "EXCEPTION_UNSPECIFIED",
  "treadmill": true,
  "treadmillException": "EXCEPTION_UNSPECIFIED",
  "weightMachine": true,
  "weightMachineException": "EXCEPTION_UNSPECIFIED"
}
```

Guest facilities at the property to promote or maintain health, beauty, and fitness.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doctorOnCall|boolean|false|none|Doctor on call. The hotel has a contract with a medical professional who provides services to hotel guests should they fall ill during their stay. The doctor may or may not have an on-site office or be at the hotel at all times.|
|doctorOnCallException|string|false|none|Doctor on call exception.|
|ellipticalMachine|boolean|false|none|Elliptical machine. An electric, stationary fitness machine with pedals that simulates climbing, walking or running and provides a user-controlled range of speeds and tensions. May not have arm-controlled levers to work out the upper body as well. Commonly found in a gym, fitness room, health center, or health club.|
|ellipticalMachineException|string|false|none|Elliptical machine exception.|
|fitnessCenter|boolean|false|none|Fitness center. A room or building at the hotel containing equipment to promote physical activity, such as treadmills, elliptical machines, stationary bikes, weight machines, free weights, and/or stretching mats. Use of the fitness center can be free or for a fee. May or may not be staffed. May or may not offer instructor-led classes in various styles of physical conditioning. May or may not be open 24/7. May or may not include locker rooms and showers. Also known as health club, gym, fitness room, health center.|
|fitnessCenterException|string|false|none|Fitness center exception.|
|freeFitnessCenter|boolean|false|none|Free fitness center. Guests may use the fitness center for free.|
|freeFitnessCenterException|string|false|none|Free fitness center exception.|
|freeWeights|boolean|false|none|Free weights. Individual handheld fitness equipment of varied weights used for upper body strength training or bodybuilding. Also known as barbells, dumbbells, or kettlebells. Often stored on a rack with the weights arranged from light to heavy. Commonly found in a gym, fitness room, health center, or health club.|
|freeWeightsException|string|false|none|Free weights exception.|
|massage|boolean|false|none|Massage. A service provided by a trained massage therapist involving the physical manipulation of a guest's muscles in order to achieve relaxation or pain relief.|
|massageException|string|false|none|Massage exception.|
|salon|boolean|false|none|Salon. A room at the hotel where professionals provide hair styling services such as shampooing, blow drying, hair dos, hair cutting and hair coloring. Also known as hairdresser or beauty salon.|
|salonException|string|false|none|Salon exception.|
|sauna|boolean|false|none|Sauna. A wood-paneled room heated to a high temperature where guests sit on built-in wood benches for the purpose of perspiring and relaxing their muscles. Can be dry or slightly wet heat. Not a steam room.|
|saunaException|string|false|none|Sauna exception.|
|spa|boolean|false|none|Spa. A designated area, room or building at the hotel offering health and beauty treatment through such means as steam baths, exercise equipment, and massage. May also offer facials, nail care, and hair care. Services are usually available by appointment and for an additional fee. Does not apply if hotel only offers a steam room; must offer other beauty and/or health treatments as well.|
|spaException|string|false|none|Spa exception.|
|treadmill|boolean|false|none|Treadmill. An electric stationary fitness machine that simulates a moving path to promote walking or running within a range of user-controlled speeds and inclines. Also known as running machine. Commonly found in a gym, fitness room, health center, or health club.|
|treadmillException|string|false|none|Treadmill exception.|
|weightMachine|boolean|false|none|Weight machine. Non-electronic fitness equipment designed for the user to target the exertion of different muscles. Usually incorporates a padded seat, a stack of flat weights and various bars and pulleys. May be designed for toning a specific part of the body or may involve different user-controlled settings, hardware and pulleys so as to provide an overall workout in one machine. Commonly found in a gym, fitness center, fitness room, or health club.|
|weightMachineException|string|false|none|Weight machine exception.|

#### Enumerated Values

|Property|Value|
|---|---|
|doctorOnCallException|EXCEPTION_UNSPECIFIED|
|doctorOnCallException|UNDER_CONSTRUCTION|
|doctorOnCallException|DEPENDENT_ON_SEASON|
|doctorOnCallException|DEPENDENT_ON_DAY_OF_WEEK|
|ellipticalMachineException|EXCEPTION_UNSPECIFIED|
|ellipticalMachineException|UNDER_CONSTRUCTION|
|ellipticalMachineException|DEPENDENT_ON_SEASON|
|ellipticalMachineException|DEPENDENT_ON_DAY_OF_WEEK|
|fitnessCenterException|EXCEPTION_UNSPECIFIED|
|fitnessCenterException|UNDER_CONSTRUCTION|
|fitnessCenterException|DEPENDENT_ON_SEASON|
|fitnessCenterException|DEPENDENT_ON_DAY_OF_WEEK|
|freeFitnessCenterException|EXCEPTION_UNSPECIFIED|
|freeFitnessCenterException|UNDER_CONSTRUCTION|
|freeFitnessCenterException|DEPENDENT_ON_SEASON|
|freeFitnessCenterException|DEPENDENT_ON_DAY_OF_WEEK|
|freeWeightsException|EXCEPTION_UNSPECIFIED|
|freeWeightsException|UNDER_CONSTRUCTION|
|freeWeightsException|DEPENDENT_ON_SEASON|
|freeWeightsException|DEPENDENT_ON_DAY_OF_WEEK|
|massageException|EXCEPTION_UNSPECIFIED|
|massageException|UNDER_CONSTRUCTION|
|massageException|DEPENDENT_ON_SEASON|
|massageException|DEPENDENT_ON_DAY_OF_WEEK|
|salonException|EXCEPTION_UNSPECIFIED|
|salonException|UNDER_CONSTRUCTION|
|salonException|DEPENDENT_ON_SEASON|
|salonException|DEPENDENT_ON_DAY_OF_WEEK|
|saunaException|EXCEPTION_UNSPECIFIED|
|saunaException|UNDER_CONSTRUCTION|
|saunaException|DEPENDENT_ON_SEASON|
|saunaException|DEPENDENT_ON_DAY_OF_WEEK|
|spaException|EXCEPTION_UNSPECIFIED|
|spaException|UNDER_CONSTRUCTION|
|spaException|DEPENDENT_ON_SEASON|
|spaException|DEPENDENT_ON_DAY_OF_WEEK|
|treadmillException|EXCEPTION_UNSPECIFIED|
|treadmillException|UNDER_CONSTRUCTION|
|treadmillException|DEPENDENT_ON_SEASON|
|treadmillException|DEPENDENT_ON_DAY_OF_WEEK|
|weightMachineException|EXCEPTION_UNSPECIFIED|
|weightMachineException|UNDER_CONSTRUCTION|
|weightMachineException|DEPENDENT_ON_SEASON|
|weightMachineException|DEPENDENT_ON_DAY_OF_WEEK|
