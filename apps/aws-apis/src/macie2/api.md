<h1 id="amazon-macie-2">Amazon Macie 2 v2020-01-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Macie

Base URLs:

* <a href="http://macie2.us-east-1.amazonaws.com">http://macie2.us-east-1.amazonaws.com</a> - The Amazon Macie 2 multi-region endpoint

* <a href="https://macie2.us-east-1.amazonaws.com">https://macie2.us-east-1.amazonaws.com</a> - The Amazon Macie 2 multi-region endpoint

* <a href="http://macie2.cn-north-1.amazonaws.com.cn">http://macie2.cn-north-1.amazonaws.com.cn</a> - The Amazon Macie 2 endpoint for China (Beijing) and China (Ningxia)

* <a href="https://macie2.cn-north-1.amazonaws.com.cn">https://macie2.cn-north-1.amazonaws.com.cn</a> - The Amazon Macie 2 endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/macie2/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-macie-2-default">Default</h1>

## AcceptInvitation

<a id="opIdAcceptInvitation"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/invitations/accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "administratorAccountId": "string",
    "invitationId": "string",
    "masterAccount": "string"
  }'
```

`POST /invitations/accept`

Accepts an Amazon Macie membership invitation that was received from a specific account.

> Body parameter

```json
{
  "administratorAccountId": "string",
  "invitationId": "string",
  "masterAccount": "string"
}
```

<h3 id="acceptinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» administratorAccountId|body|string|false|The Amazon Web Services account ID for the account that sent the invitation.|
|» invitationId|body|string|true|The unique identifier for the invitation to accept.|
|» masterAccount|body|string|false|(Deprecated) The Amazon Web Services account ID for the account that sent the invitation. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="acceptinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptInvitationResponse](#schemaacceptinvitationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetCustomDataIdentifiers

<a id="opIdBatchGetCustomDataIdentifiers"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/custom-data-identifiers/get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`POST /custom-data-identifiers/get`

Retrieves information about one or more custom data identifiers.

> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="batchgetcustomdataidentifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ids|body|[[__string](#schema__string)]|false|An array of custom data identifier IDs, one for each custom data identifier to retrieve information about.|

> Example responses

> 200 Response

```json
{
  "customDataIdentifiers": {},
  "notFoundIdentifierIds": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="batchgetcustomdataidentifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetCustomDataIdentifiersResponse](#schemabatchgetcustomdataidentifiersresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAllowLists

<a id="opIdListAllowLists"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/allow-lists \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /allow-lists`

Retrieves a subset of information about all the allow lists for an account.

<h3 id="listallowlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of items to include in each page of a paginated response.|
|nextToken|query|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "allowLists": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listallowlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAllowListsResponse](#schemalistallowlistsresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAllowList

<a id="opIdCreateAllowList"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/allow-lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "criteria": {
      "regex": {},
      "s3WordsList": {
        "bucketName": {},
        "objectKey": {}
      }
    },
    "description": "string",
    "name": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /allow-lists`

Creates and defines the settings for an allow list.

> Body parameter

```json
{
  "clientToken": "string",
  "criteria": {
    "regex": {},
    "s3WordsList": {
      "bucketName": {},
      "objectKey": {}
    }
  },
  "description": "string",
  "name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createallowlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|true|A unique, case-sensitive token that you provide to ensure the idempotency of the request.|
|» criteria|body|object|true|Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.|
|» » regex|body|object|false|none|
|» » s3WordsList|body|object|false|none|
|» » » bucketName|body|object|true|none|
|» » » objectKey|body|object|true|none|
|» description|body|string|false|A custom description of the allow list. The description can contain as many as 512 characters.|
|» name|body|string|true|A custom name for the allow list. The name can contain as many as 128 characters.|
|» tags|body|object|false|A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "id": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createallowlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAllowListResponse](#schemacreateallowlistresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateClassificationJob

<a id="opIdCreateClassificationJob"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "allowListIds": [
      "string"
    ],
    "clientToken": "string",
    "customDataIdentifierIds": [
      "string"
    ],
    "description": "string",
    "initialRun": true,
    "jobType": "ONE_TIME",
    "managedDataIdentifierIds": [
      "string"
    ],
    "managedDataIdentifierSelector": "ALL",
    "name": "string",
    "s3JobDefinition": {
      "bucketCriteria": {
        "excludes": {
          "and": {}
        },
        "includes": {
          "and": {}
        }
      },
      "bucketDefinitions": {},
      "scoping": {
        "excludes": {
          "and": {}
        },
        "includes": {
          "and": {}
        }
      }
    },
    "samplingPercentage": 0,
    "scheduleFrequency": {
      "dailySchedule": {},
      "monthlySchedule": {
        "dayOfMonth": {}
      },
      "weeklySchedule": {
        "dayOfWeek": {}
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /jobs`

Creates and defines the settings for a classification job.

> Body parameter

```json
{
  "allowListIds": [
    "string"
  ],
  "clientToken": "string",
  "customDataIdentifierIds": [
    "string"
  ],
  "description": "string",
  "initialRun": true,
  "jobType": "ONE_TIME",
  "managedDataIdentifierIds": [
    "string"
  ],
  "managedDataIdentifierSelector": "ALL",
  "name": "string",
  "s3JobDefinition": {
    "bucketCriteria": {
      "excludes": {
        "and": {}
      },
      "includes": {
        "and": {}
      }
    },
    "bucketDefinitions": {},
    "scoping": {
      "excludes": {
        "and": {}
      },
      "includes": {
        "and": {}
      }
    }
  },
  "samplingPercentage": 0,
  "scheduleFrequency": {
    "dailySchedule": {},
    "monthlySchedule": {
      "dayOfMonth": {}
    },
    "weeklySchedule": {
      "dayOfWeek": {}
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createclassificationjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» allowListIds|body|[[__string](#schema__string)]|false|An array of unique identifiers, one for each allow list for the job to use when it analyzes data.|
|» clientToken|body|string|true|A unique, case-sensitive token that you provide to ensure the idempotency of the request.|
|» customDataIdentifierIds|body|[[__string](#schema__string)]|false|An array of unique identifiers, one for each custom data identifier for the job to use when it analyzes data. To use only managed data identifiers, don't specify a value for this property and specify a value other than NONE for the managedDataIdentifierSelector property.|
|» description|body|string|false|A custom description of the job. The description can contain as many as 200 characters.|
|» initialRun|body|boolean|false|<p>For a recurring job, specifies whether to analyze all existing, eligible objects immediately after the job is created (true). To analyze only those objects that are created or changed after you create the job and before the job's first scheduled run, set this value to false.</p> <p>If you configure the job to run only once, don't specify a value for this property.</p>|
|» jobType|body|string|true|The schedule for running a classification job. Valid values are:|
|» managedDataIdentifierIds|body|[[__string](#schema__string)]|false|<p>An array of unique identifiers, one for each managed data identifier for the job to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type that you specify for the job (managedDataIdentifierSelector).</p> <p>To retrieve a list of valid values for this property, use the ListManagedDataIdentifiers operation.</p>|
|» managedDataIdentifierSelector|body|string|false|The selection type that determines which managed data identifiers a classification job uses to analyze data. Valid values are:|
|» name|body|string|true|A custom name for the job. The name can contain as many as 500 characters.|
|» s3JobDefinition|body|object|true|Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.|
|» » bucketCriteria|body|object|false|none|
|» » » excludes|body|object|false|none|
|» » » » and|body|object|false|none|
|» » » includes|body|object|false|none|
|» » » » and|body|object|false|none|
|» » bucketDefinitions|body|object|false|none|
|» » scoping|body|object|false|none|
|» » » excludes|body|object|false|none|
|» » » » and|body|object|false|none|
|» » » includes|body|object|false|none|
|» » » » and|body|object|false|none|
|» samplingPercentage|body|integer|false|The sampling depth, as a percentage, for the job to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects.|
|» scheduleFrequency|body|object|false|Specifies the recurrence pattern for running a classification job.|
|» » dailySchedule|body|object|false|none|
|» » monthlySchedule|body|object|false|none|
|» » » dayOfMonth|body|object|false|none|
|» » weeklySchedule|body|object|false|none|
|» » » dayOfWeek|body|object|false|none|
|» tags|body|object|false|A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» jobType|ONE_TIME|
|» jobType|SCHEDULED|
|» managedDataIdentifierSelector|ALL|
|» managedDataIdentifierSelector|EXCLUDE|
|» managedDataIdentifierSelector|INCLUDE|
|» managedDataIdentifierSelector|NONE|

> Example responses

> 200 Response

```json
{
  "jobArn": {},
  "jobId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createclassificationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateClassificationJobResponse](#schemacreateclassificationjobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCustomDataIdentifier

<a id="opIdCreateCustomDataIdentifier"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/custom-data-identifiers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "description": "string",
    "ignoreWords": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "maximumMatchDistance": 0,
    "name": "string",
    "regex": "string",
    "severityLevels": [
      {
        "occurrencesThreshold": {},
        "severity": {}
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /custom-data-identifiers`

Creates and defines the criteria and other settings for a custom data identifier.

> Body parameter

```json
{
  "clientToken": "string",
  "description": "string",
  "ignoreWords": [
    "string"
  ],
  "keywords": [
    "string"
  ],
  "maximumMatchDistance": 0,
  "name": "string",
  "regex": "string",
  "severityLevels": [
    {
      "occurrencesThreshold": {},
      "severity": {}
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createcustomdataidentifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|A unique, case-sensitive token that you provide to ensure the idempotency of the request.|
|» description|body|string|false|<p>A custom description of the custom data identifier. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>|
|» ignoreWords|body|[[__string](#schema__string)]|false|An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.|
|» keywords|body|[[__string](#schema__string)]|false|An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.|
|» maximumMatchDistance|body|integer|false|The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50.|
|» name|body|string|true|<p>A custom name for the custom data identifier. The name can contain as many as 128 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>|
|» regex|body|string|true|The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.|
|» severityLevels|body|[[SeverityLevel](#schemaseveritylevel)]|false|<p>The severity to assign to findings that the custom data identifier produces, based on the number of occurrences of text that matches the custom data identifier's detection criteria. You can specify as many as three SeverityLevel objects in this array, one for each severity: LOW, MEDIUM, or HIGH. If you specify more than one, the occurrences thresholds must be in ascending order by severity, moving from LOW to HIGH. For example, 1 for LOW, 50 for MEDIUM, and 100 for HIGH. If an S3 object contains fewer occurrences than the lowest specified threshold, Amazon Macie doesn't create a finding.</p> <p>If you don't specify any values for this array, Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie automatically assigns the MEDIUM severity to those findings.</p>|
|» tags|body|object|false|A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "customDataIdentifierId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createcustomdataidentifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCustomDataIdentifierResponse](#schemacreatecustomdataidentifierresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFindingsFilters

<a id="opIdListFindingsFilters"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/findingsfilters \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /findingsfilters`

Retrieves a subset of information about all the findings filters for an account.

<h3 id="listfindingsfilters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of items to include in each page of a paginated response.|
|nextToken|query|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "findingsFilterListItems": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listfindingsfilters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFindingsFiltersResponse](#schemalistfindingsfiltersresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFindingsFilter

<a id="opIdCreateFindingsFilter"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/findingsfilters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "action": "ARCHIVE",
    "clientToken": "string",
    "description": "string",
    "findingCriteria": {
      "criterion": {
        "property1": {
          "eq": {},
          "eqExactMatch": {},
          "gt": {},
          "gte": {},
          "lt": {},
          "lte": {},
          "neq": {}
        },
        "property2": {
          "eq": {},
          "eqExactMatch": {},
          "gt": {},
          "gte": {},
          "lt": {},
          "lte": {},
          "neq": {}
        }
      }
    },
    "name": "string",
    "position": 0,
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /findingsfilters`

Creates and defines the criteria and other settings for a findings filter.

> Body parameter

```json
{
  "action": "ARCHIVE",
  "clientToken": "string",
  "description": "string",
  "findingCriteria": {
    "criterion": {
      "property1": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      },
      "property2": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      }
    }
  },
  "name": "string",
  "position": 0,
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createfindingsfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» action|body|string|true|The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are:|
|» clientToken|body|string|false|A unique, case-sensitive token that you provide to ensure the idempotency of the request.|
|» description|body|string|false|<p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>|
|» findingCriteria|body|object|true|Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.|
|» » criterion|body|object|false|none|
|» » » **additionalProperties**|body|[CriterionAdditionalProperties](#schemacriterionadditionalproperties)|false|Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.|
|» name|body|string|true|<p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>|
|» position|body|integer|false|The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.|
|» tags|body|object|false|A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|ARCHIVE|
|» action|NOOP|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "id": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createfindingsfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFindingsFilterResponse](#schemacreatefindingsfilterresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInvitations

<a id="opIdListInvitations"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/invitations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /invitations`

Retrieves information about the Amazon Macie membership invitations that were received by an account.

<h3 id="listinvitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of items to include in each page of a paginated response.|
|nextToken|query|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "invitations": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInvitationsResponse](#schemalistinvitationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInvitations

<a id="opIdCreateInvitations"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/invitations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "string"
    ],
    "disableEmailNotification": true,
    "message": "string"
  }'
```

`POST /invitations`

Sends an Amazon Macie membership invitation to one or more accounts.

> Body parameter

```json
{
  "accountIds": [
    "string"
  ],
  "disableEmailNotification": true,
  "message": "string"
}
```

<h3 id="createinvitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountIds|body|[[__string](#schema__string)]|true|An array that lists Amazon Web Services account IDs, one for each account to send the invitation to.|
|» disableEmailNotification|body|boolean|false|Specifies whether to send the invitation as an email message. If this value is false, Amazon Macie sends the invitation (as an email message) to the email address that you specified for the recipient's account when you associated the account with your account. The default value is false.|
|» message|body|string|false|Custom text to include in the email message that contains the invitation. The text can contain as many as 80 alphanumeric characters.|

> Example responses

> 200 Response

```json
{
  "unprocessedAccounts": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateInvitationsResponse](#schemacreateinvitationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMembers

<a id="opIdListMembers"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/members \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /members`

Retrieves information about the accounts that are associated with an Amazon Macie administrator account.

<h3 id="listmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of items to include in each page of a paginated response.|
|nextToken|query|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|onlyAssociated|query|string|false|Specifies which accounts to include in the response, based on the status of an account's relationship with the administrator account. By default, the response includes only current member accounts. To include all accounts, set this value to false.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "members": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMembersResponse](#schemalistmembersresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMember

<a id="opIdCreateMember"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "account": {
      "accountId": {},
      "email": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /members`

Associates an account with an Amazon Macie administrator account.

> Body parameter

```json
{
  "account": {
    "accountId": {},
    "email": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» account|body|object|true|Specifies the details of an account to associate with an Amazon Macie administrator account.|
|» » accountId|body|object|false|none|
|» » email|body|object|false|none|
|» tags|body|object|false|A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMemberResponse](#schemacreatememberresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSampleFindings

<a id="opIdCreateSampleFindings"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/findings/sample \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "findingTypes": [
      "SensitiveData:S3Object/Multiple"
    ]
  }'
```

`POST /findings/sample`

Creates sample findings.

> Body parameter

```json
{
  "findingTypes": [
    "SensitiveData:S3Object/Multiple"
  ]
}
```

<h3 id="createsamplefindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» findingTypes|body|[[FindingType](#schemafindingtype)]|false|An array of finding types, one for each type of sample finding to create. To create a sample of every type of finding that Amazon Macie supports, don't include this array in your request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» findingTypes|SensitiveData:S3Object/Multiple|
|» findingTypes|SensitiveData:S3Object/Financial|
|» findingTypes|SensitiveData:S3Object/Personal|
|» findingTypes|SensitiveData:S3Object/Credentials|
|» findingTypes|SensitiveData:S3Object/CustomIdentifier|
|» findingTypes|Policy:IAMUser/S3BucketPublic|
|» findingTypes|Policy:IAMUser/S3BucketSharedExternally|
|» findingTypes|Policy:IAMUser/S3BucketReplicatedExternally|
|» findingTypes|Policy:IAMUser/S3BucketEncryptionDisabled|
|» findingTypes|Policy:IAMUser/S3BlockPublicAccessDisabled|
|» findingTypes|Policy:IAMUser/S3BucketSharedWithCloudFront|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createsamplefindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSampleFindingsResponse](#schemacreatesamplefindingsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeclineInvitations

<a id="opIdDeclineInvitations"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/invitations/decline \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "string"
    ]
  }'
```

`POST /invitations/decline`

Declines Amazon Macie membership invitations that were received from specific accounts.

> Body parameter

```json
{
  "accountIds": [
    "string"
  ]
}
```

<h3 id="declineinvitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountIds|body|[[__string](#schema__string)]|true|An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to decline.|

> Example responses

> 200 Response

```json
{
  "unprocessedAccounts": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="declineinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeclineInvitationsResponse](#schemadeclineinvitationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAllowList

<a id="opIdGetAllowList"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/allow-lists/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /allow-lists/{id}`

Retrieves the settings and status of an allow list.

<h3 id="getallowlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "createdAt": {},
  "criteria": {
    "regex": {},
    "s3WordsList": {
      "bucketName": {},
      "objectKey": {}
    }
  },
  "description": {},
  "id": {},
  "name": {},
  "status": {
    "code": {},
    "description": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "updatedAt": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getallowlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAllowListResponse](#schemagetallowlistresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAllowList

<a id="opIdUpdateAllowList"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/allow-lists/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "criteria": {
      "regex": {},
      "s3WordsList": {
        "bucketName": {},
        "objectKey": {}
      }
    },
    "description": "string",
    "name": "string"
  }'
```

`PUT /allow-lists/{id}`

Updates the settings for an allow list.

> Body parameter

```json
{
  "criteria": {
    "regex": {},
    "s3WordsList": {
      "bucketName": {},
      "objectKey": {}
    }
  },
  "description": "string",
  "name": "string"
}
```

<h3 id="updateallowlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» criteria|body|object|true|Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.|
|» » regex|body|object|false|none|
|» » s3WordsList|body|object|false|none|
|» » » bucketName|body|object|true|none|
|» » » objectKey|body|object|true|none|
|» description|body|string|false|A custom description of the allow list. The description can contain as many as 512 characters.|
|» name|body|string|true|A custom name for the allow list. The name can contain as many as 128 characters.|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "id": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updateallowlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAllowListResponse](#schemaupdateallowlistresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAllowList

<a id="opIdDeleteAllowList"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/allow-lists/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /allow-lists/{id}`

Deletes an allow list.

<h3 id="deleteallowlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|ignoreJobChecks|query|string|false|<p>Specifies whether to force deletion of the allow list, even if active classification jobs are configured to use the list.</p> <p>When you try to delete an allow list, Amazon Macie checks for classification jobs that use the list and have a status other than COMPLETE or CANCELLED. By default, Macie rejects your request if any jobs meet these criteria. To skip these checks and delete the list, set this value to true. To delete the list only if no active jobs are configured to use it, set this value to false.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteallowlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAllowListResponse](#schemadeleteallowlistresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCustomDataIdentifier

<a id="opIdGetCustomDataIdentifier"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/custom-data-identifiers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /custom-data-identifiers/{id}`

Retrieves the criteria and other settings for a custom data identifier.

<h3 id="getcustomdataidentifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "createdAt": {},
  "deleted": {},
  "description": {},
  "id": {},
  "ignoreWords": {},
  "keywords": {},
  "maximumMatchDistance": {},
  "name": {},
  "regex": {},
  "severityLevels": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getcustomdataidentifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCustomDataIdentifierResponse](#schemagetcustomdataidentifierresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCustomDataIdentifier

<a id="opIdDeleteCustomDataIdentifier"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/custom-data-identifiers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /custom-data-identifiers/{id}`

Soft deletes a custom data identifier.

<h3 id="deletecustomdataidentifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="deletecustomdataidentifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCustomDataIdentifierResponse](#schemadeletecustomdataidentifierresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFindingsFilter

<a id="opIdGetFindingsFilter"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/findingsfilters/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /findingsfilters/{id}`

Retrieves the criteria and other settings for a findings filter.

<h3 id="getfindingsfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "action": {},
  "arn": {},
  "description": {},
  "findingCriteria": {
    "criterion": {
      "property1": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      },
      "property2": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      }
    }
  },
  "id": {},
  "name": {},
  "position": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getfindingsfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFindingsFilterResponse](#schemagetfindingsfilterresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFindingsFilter

<a id="opIdDeleteFindingsFilter"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/findingsfilters/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /findingsfilters/{id}`

Deletes a findings filter.

<h3 id="deletefindingsfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="deletefindingsfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFindingsFilterResponse](#schemadeletefindingsfilterresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFindingsFilter

<a id="opIdUpdateFindingsFilter"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/findingsfilters/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "action": "ARCHIVE",
    "clientToken": "string",
    "description": "string",
    "findingCriteria": {
      "criterion": {
        "property1": {
          "eq": {},
          "eqExactMatch": {},
          "gt": {},
          "gte": {},
          "lt": {},
          "lte": {},
          "neq": {}
        },
        "property2": {
          "eq": {},
          "eqExactMatch": {},
          "gt": {},
          "gte": {},
          "lt": {},
          "lte": {},
          "neq": {}
        }
      }
    },
    "name": "string",
    "position": 0
  }'
```

`PATCH /findingsfilters/{id}`

Updates the criteria and other settings for a findings filter.

> Body parameter

```json
{
  "action": "ARCHIVE",
  "clientToken": "string",
  "description": "string",
  "findingCriteria": {
    "criterion": {
      "property1": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      },
      "property2": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      }
    }
  },
  "name": "string",
  "position": 0
}
```

<h3 id="updatefindingsfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» action|body|string|false|The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are:|
|» clientToken|body|string|false|A unique, case-sensitive token that you provide to ensure the idempotency of the request.|
|» description|body|string|false|<p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>|
|» findingCriteria|body|object|false|Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.|
|» » criterion|body|object|false|none|
|» » » **additionalProperties**|body|[CriterionAdditionalProperties](#schemacriterionadditionalproperties)|false|Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.|
|» name|body|string|false|<p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>|
|» position|body|integer|false|The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|ARCHIVE|
|» action|NOOP|

> Example responses

> 200 Response

```json
{
  "arn": {},
  "id": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updatefindingsfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFindingsFilterResponse](#schemaupdatefindingsfilterresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInvitations

<a id="opIdDeleteInvitations"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/invitations/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountIds": [
      "string"
    ]
  }'
```

`POST /invitations/delete`

Deletes Amazon Macie membership invitations that were received from specific accounts.

> Body parameter

```json
{
  "accountIds": [
    "string"
  ]
}
```

<h3 id="deleteinvitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountIds|body|[[__string](#schema__string)]|true|An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to delete.|

> Example responses

> 200 Response

```json
{
  "unprocessedAccounts": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="deleteinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInvitationsResponse](#schemadeleteinvitationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMember

<a id="opIdGetMember"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/members/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /members/{id}`

Retrieves information about an account that's associated with an Amazon Macie administrator account.

<h3 id="getmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "accountId": {},
  "administratorAccountId": {},
  "arn": {},
  "email": {},
  "invitedAt": {},
  "masterAccountId": {},
  "relationshipStatus": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "updatedAt": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMemberResponse](#schemagetmemberresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMember

<a id="opIdDeleteMember"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/members/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /members/{id}`

Deletes the association between an Amazon Macie administrator account and an account.

<h3 id="deletemember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="deletemember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMemberResponse](#schemadeletememberresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBuckets

<a id="opIdDescribeBuckets"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/datasources/s3 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "criteria": {
      "property1": {
        "eq": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {},
        "prefix": {}
      },
      "property2": {
        "eq": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {},
        "prefix": {}
      }
    },
    "maxResults": 0,
    "nextToken": "string",
    "sortCriteria": {
      "attributeName": {},
      "orderBy": {}
    }
  }'
```

`POST /datasources/s3`

Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.

> Body parameter

```json
{
  "criteria": {
    "property1": {
      "eq": {},
      "gt": {},
      "gte": {},
      "lt": {},
      "lte": {},
      "neq": {},
      "prefix": {}
    },
    "property2": {
      "eq": {},
      "gt": {},
      "gte": {},
      "lt": {},
      "lte": {},
      "neq": {},
      "prefix": {}
    }
  },
  "maxResults": 0,
  "nextToken": "string",
  "sortCriteria": {
    "attributeName": {},
    "orderBy": {}
  }
}
```

<h3 id="describebuckets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» criteria|body|object|false|Specifies, as a map, one or more property-based conditions that filter the results of a query for information about S3 buckets.|
|» » **additionalProperties**|body|[BucketCriteriaAdditionalProperties](#schemabucketcriteriaadditionalproperties)|false|Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.|
|» maxResults|body|integer|false|The maximum number of items to include in each page of the response. The default value is 50.|
|» nextToken|body|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|» sortCriteria|body|object|false|Specifies criteria for sorting the results of a query for information about S3 buckets.|
|» » attributeName|body|object|false|none|
|» » orderBy|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "buckets": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="describebuckets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBucketsResponse](#schemadescribebucketsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeClassificationJob

<a id="opIdDescribeClassificationJob"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /jobs/{jobId}`

Retrieves the status and settings for a classification job.

<h3 id="describeclassificationjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The unique identifier for the classification job.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "allowListIds": {},
  "clientToken": {},
  "createdAt": {},
  "customDataIdentifierIds": {},
  "description": {},
  "initialRun": {},
  "jobArn": {},
  "jobId": {},
  "jobStatus": {},
  "jobType": {},
  "lastRunErrorStatus": {
    "code": {}
  },
  "lastRunTime": {},
  "managedDataIdentifierIds": {},
  "managedDataIdentifierSelector": {},
  "name": {},
  "s3JobDefinition": {
    "bucketCriteria": {
      "excludes": {
        "and": {}
      },
      "includes": {
        "and": {}
      }
    },
    "bucketDefinitions": {},
    "scoping": {
      "excludes": {
        "and": {}
      },
      "includes": {
        "and": {}
      }
    }
  },
  "samplingPercentage": {},
  "scheduleFrequency": {
    "dailySchedule": {},
    "monthlySchedule": {
      "dayOfMonth": {}
    },
    "weeklySchedule": {
      "dayOfWeek": {}
    }
  },
  "statistics": {
    "approximateNumberOfObjectsToProcess": {},
    "numberOfRuns": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userPausedDetails": {
    "jobExpiresAt": {},
    "jobImminentExpirationHealthEventArn": {},
    "jobPausedAt": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="describeclassificationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClassificationJobResponse](#schemadescribeclassificationjobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateClassificationJob

<a id="opIdUpdateClassificationJob"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/jobs/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobStatus": "RUNNING"
  }'
```

`PATCH /jobs/{jobId}`

Changes the status of a classification job.

> Body parameter

```json
{
  "jobStatus": "RUNNING"
}
```

<h3 id="updateclassificationjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The unique identifier for the classification job.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobStatus|body|string|true|The status of a classification job. Possible values are:|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» jobStatus|RUNNING|
|» jobStatus|PAUSED|
|» jobStatus|CANCELLED|
|» jobStatus|COMPLETE|
|» jobStatus|IDLE|
|» jobStatus|USER_PAUSED|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updateclassificationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateClassificationJobResponse](#schemaupdateclassificationjobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrganizationConfiguration

<a id="opIdDescribeOrganizationConfiguration"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/admin/configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /admin/configuration`

Retrieves the Amazon Macie configuration settings for an organization in Organizations.

<h3 id="describeorganizationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "autoEnable": {},
  "maxAccountLimitReached": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="describeorganizationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrganizationConfigurationResponse](#schemadescribeorganizationconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateOrganizationConfiguration

<a id="opIdUpdateOrganizationConfiguration"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/admin/configuration \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "autoEnable": true
  }'
```

`PATCH /admin/configuration`

Updates the Amazon Macie configuration settings for an organization in Organizations.

> Body parameter

```json
{
  "autoEnable": true
}
```

<h3 id="updateorganizationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» autoEnable|body|boolean|true|Specifies whether to enable Amazon Macie automatically for an account when the account is added to the organization in Organizations.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updateorganizationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateOrganizationConfigurationResponse](#schemaupdateorganizationconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMacieSession

<a id="opIdGetMacieSession"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/macie \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /macie`

Retrieves the status and configuration settings for an Amazon Macie account.

<h3 id="getmaciesession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "createdAt": {},
  "findingPublishingFrequency": {},
  "serviceRole": {},
  "status": {},
  "updatedAt": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getmaciesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMacieSessionResponse](#schemagetmaciesessionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableMacie

<a id="opIdEnableMacie"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/macie \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "findingPublishingFrequency": "FIFTEEN_MINUTES",
    "status": "PAUSED"
  }'
```

`POST /macie`

Enables Amazon Macie and specifies the configuration settings for a Macie account.

> Body parameter

```json
{
  "clientToken": "string",
  "findingPublishingFrequency": "FIFTEEN_MINUTES",
  "status": "PAUSED"
}
```

<h3 id="enablemacie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|A unique, case-sensitive token that you provide to ensure the idempotency of the request.|
|» findingPublishingFrequency|body|string|false|The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html">Monitoring and processing findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are:|
|» status|body|string|false|The status of an Amazon Macie account. Valid values are:|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» findingPublishingFrequency|FIFTEEN_MINUTES|
|» findingPublishingFrequency|ONE_HOUR|
|» findingPublishingFrequency|SIX_HOURS|
|» status|PAUSED|
|» status|ENABLED|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="enablemacie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableMacieResponse](#schemaenablemacieresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableMacie

<a id="opIdDisableMacie"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/macie \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /macie`

Disables Amazon Macie and deletes all settings and resources for a Macie account.

<h3 id="disablemacie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="disablemacie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableMacieResponse](#schemadisablemacieresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMacieSession

<a id="opIdUpdateMacieSession"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/macie \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "findingPublishingFrequency": "FIFTEEN_MINUTES",
    "status": "PAUSED"
  }'
```

`PATCH /macie`

Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.

> Body parameter

```json
{
  "findingPublishingFrequency": "FIFTEEN_MINUTES",
  "status": "PAUSED"
}
```

<h3 id="updatemaciesession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» findingPublishingFrequency|body|string|false|The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html">Monitoring and processing findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are:|
|» status|body|string|false|The status of an Amazon Macie account. Valid values are:|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» findingPublishingFrequency|FIFTEEN_MINUTES|
|» findingPublishingFrequency|ONE_HOUR|
|» findingPublishingFrequency|SIX_HOURS|
|» status|PAUSED|
|» status|ENABLED|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updatemaciesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMacieSessionResponse](#schemaupdatemaciesessionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableOrganizationAdminAccount

<a id="opIdDisableOrganizationAdminAccount"></a>

> Code samples

```bash
curl 'https://macie2.us-east-1.amazonaws.com/admin#adminAccountId?adminAccountId=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /admin#adminAccountId`

Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.

<h3 id="disableorganizationadminaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adminAccountId|query|string|true|The Amazon Web Services account ID of the delegated Amazon Macie administrator account.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="disableorganizationadminaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableOrganizationAdminAccountResponse](#schemadisableorganizationadminaccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateFromAdministratorAccount

<a id="opIdDisassociateFromAdministratorAccount"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/administrator/disassociate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /administrator/disassociate`

Disassociates a member account from its Amazon Macie administrator account.

<h3 id="disassociatefromadministratoraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="disassociatefromadministratoraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateFromAdministratorAccountResponse](#schemadisassociatefromadministratoraccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateFromMasterAccount

<a id="opIdDisassociateFromMasterAccount"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/master/disassociate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /master/disassociate`

(Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.

<h3 id="disassociatefrommasteraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="disassociatefrommasteraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateFromMasterAccountResponse](#schemadisassociatefrommasteraccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateMember

<a id="opIdDisassociateMember"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/members/disassociate/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /members/disassociate/{id}`

Disassociates an Amazon Macie administrator account from a member account.

<h3 id="disassociatemember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="disassociatemember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateMemberResponse](#schemadisassociatememberresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOrganizationAdminAccounts

<a id="opIdListOrganizationAdminAccounts"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/admin \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /admin`

Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.

<h3 id="listorganizationadminaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of items to include in each page of a paginated response.|
|nextToken|query|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "adminAccounts": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listorganizationadminaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOrganizationAdminAccountsResponse](#schemalistorganizationadminaccountsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableOrganizationAdminAccount

<a id="opIdEnableOrganizationAdminAccount"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/admin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "adminAccountId": "string",
    "clientToken": "string"
  }'
```

`POST /admin`

Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.

> Body parameter

```json
{
  "adminAccountId": "string",
  "clientToken": "string"
}
```

<h3 id="enableorganizationadminaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» adminAccountId|body|string|true|The Amazon Web Services account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.|
|» clientToken|body|string|false|A unique, case-sensitive token that you provide to ensure the idempotency of the request.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="enableorganizationadminaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableOrganizationAdminAccountResponse](#schemaenableorganizationadminaccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAdministratorAccount

<a id="opIdGetAdministratorAccount"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/administrator \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /administrator`

Retrieves information about the Amazon Macie administrator account for an account.

<h3 id="getadministratoraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "administrator": {
    "accountId": {},
    "invitationId": {},
    "invitedAt": {},
    "relationshipStatus": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getadministratoraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAdministratorAccountResponse](#schemagetadministratoraccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAutomatedDiscoveryConfiguration

<a id="opIdGetAutomatedDiscoveryConfiguration"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/automated-discovery/configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /automated-discovery/configuration`

Retrieves the configuration settings and status of automated sensitive data discovery for an account.

<h3 id="getautomateddiscoveryconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "classificationScopeId": {},
  "disabledAt": {},
  "firstEnabledAt": {},
  "lastUpdatedAt": {},
  "sensitivityInspectionTemplateId": {},
  "status": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getautomateddiscoveryconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAutomatedDiscoveryConfigurationResponse](#schemagetautomateddiscoveryconfigurationresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAutomatedDiscoveryConfiguration

<a id="opIdUpdateAutomatedDiscoveryConfiguration"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/automated-discovery/configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "status": "ENABLED"
  }'
```

`PUT /automated-discovery/configuration`

Enables or disables automated sensitive data discovery for an account.

> Body parameter

```json
{
  "status": "ENABLED"
}
```

<h3 id="updateautomateddiscoveryconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» status|body|string|true|The status of the automated sensitive data discovery configuration for an Amazon Macie account. Valid values are:|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ENABLED|
|» status|DISABLED|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="updateautomateddiscoveryconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAutomatedDiscoveryConfigurationResponse](#schemaupdateautomateddiscoveryconfigurationresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketStatistics

<a id="opIdGetBucketStatistics"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/datasources/s3/statistics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountId": "string"
  }'
```

`POST /datasources/s3/statistics`

Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.

> Body parameter

```json
{
  "accountId": "string"
}
```

<h3 id="getbucketstatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accountId|body|string|false|The unique identifier for the Amazon Web Services account.|

> Example responses

> 200 Response

```json
{
  "bucketCount": {},
  "bucketCountByEffectivePermission": {
    "publiclyAccessible": {},
    "publiclyReadable": {},
    "publiclyWritable": {},
    "unknown": {}
  },
  "bucketCountByEncryptionType": {
    "kmsManaged": {},
    "s3Managed": {},
    "unencrypted": {},
    "unknown": {}
  },
  "bucketCountByObjectEncryptionRequirement": {
    "allowsUnencryptedObjectUploads": {},
    "deniesUnencryptedObjectUploads": {},
    "unknown": {}
  },
  "bucketCountBySharedAccessType": {
    "external": {},
    "internal": {},
    "notShared": {},
    "unknown": {}
  },
  "bucketStatisticsBySensitivity": {
    "classificationError": {
      "classifiableSizeInBytes": {},
      "publiclyAccessibleCount": {},
      "totalCount": {},
      "totalSizeInBytes": {}
    },
    "notClassified": {
      "classifiableSizeInBytes": {},
      "publiclyAccessibleCount": {},
      "totalCount": {},
      "totalSizeInBytes": {}
    },
    "notSensitive": {
      "classifiableSizeInBytes": {},
      "publiclyAccessibleCount": {},
      "totalCount": {},
      "totalSizeInBytes": {}
    },
    "sensitive": {
      "classifiableSizeInBytes": {},
      "publiclyAccessibleCount": {},
      "totalCount": {},
      "totalSizeInBytes": {}
    }
  },
  "classifiableObjectCount": {},
  "classifiableSizeInBytes": {},
  "lastUpdated": {},
  "objectCount": {},
  "sizeInBytes": {},
  "sizeInBytesCompressed": {},
  "unclassifiableObjectCount": {
    "fileType": {},
    "storageClass": {},
    "total": {}
  },
  "unclassifiableObjectSizeInBytes": {
    "fileType": {},
    "storageClass": {},
    "total": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getbucketstatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketStatisticsResponse](#schemagetbucketstatisticsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetClassificationExportConfiguration

<a id="opIdGetClassificationExportConfiguration"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/classification-export-configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /classification-export-configuration`

Retrieves the configuration settings for storing data classification results.

<h3 id="getclassificationexportconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "configuration": {
    "s3Destination": {
      "bucketName": {},
      "keyPrefix": {},
      "kmsKeyArn": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getclassificationexportconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetClassificationExportConfigurationResponse](#schemagetclassificationexportconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutClassificationExportConfiguration

<a id="opIdPutClassificationExportConfiguration"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/classification-export-configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "configuration": {
      "s3Destination": {
        "bucketName": {},
        "keyPrefix": {},
        "kmsKeyArn": {}
      }
    }
  }'
```

`PUT /classification-export-configuration`

Creates or updates the configuration settings for storing data classification results.

> Body parameter

```json
{
  "configuration": {
    "s3Destination": {
      "bucketName": {},
      "keyPrefix": {},
      "kmsKeyArn": {}
    }
  }
}
```

<h3 id="putclassificationexportconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» configuration|body|object|true|Specifies where to store data classification results, and the encryption settings to use when storing results in that location. The location must be an S3 bucket.|
|» » s3Destination|body|object|false|none|
|» » » bucketName|body|object|true|none|
|» » » keyPrefix|body|object|false|none|
|» » » kmsKeyArn|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "configuration": {
    "s3Destination": {
      "bucketName": {},
      "keyPrefix": {},
      "kmsKeyArn": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="putclassificationexportconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutClassificationExportConfigurationResponse](#schemaputclassificationexportconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetClassificationScope

<a id="opIdGetClassificationScope"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/classification-scopes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /classification-scopes/{id}`

Retrieves the classification scope settings for an account.

<h3 id="getclassificationscope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "s3": {
    "excludes": {
      "bucketNames": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getclassificationscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetClassificationScopeResponse](#schemagetclassificationscoperesponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateClassificationScope

<a id="opIdUpdateClassificationScope"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/classification-scopes/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "s3": {
      "excludes": {
        "bucketNames": {},
        "operation": {}
      }
    }
  }'
```

`PATCH /classification-scopes/{id}`

Updates the classification scope settings for an account.

> Body parameter

```json
{
  "s3": {
    "excludes": {
      "bucketNames": {},
      "operation": {}
    }
  }
}
```

<h3 id="updateclassificationscope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» s3|body|object|false|Specifies changes to the list of S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.|
|» » excludes|body|object|false|none|
|» » » bucketNames|body|object|true|none|
|» » » operation|body|object|true|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updateclassificationscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateClassificationScopeResponse](#schemaupdateclassificationscoperesponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFindingStatistics

<a id="opIdGetFindingStatistics"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/findings/statistics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "findingCriteria": {
      "criterion": {
        "property1": {
          "eq": {},
          "eqExactMatch": {},
          "gt": {},
          "gte": {},
          "lt": {},
          "lte": {},
          "neq": {}
        },
        "property2": {
          "eq": {},
          "eqExactMatch": {},
          "gt": {},
          "gte": {},
          "lt": {},
          "lte": {},
          "neq": {}
        }
      }
    },
    "groupBy": "resourcesAffected.s3Bucket.name",
    "size": 0,
    "sortCriteria": {
      "attributeName": {},
      "orderBy": {}
    }
  }'
```

`POST /findings/statistics`

 <p>Retrieves (queries) aggregated statistical data about findings.</p>

> Body parameter

```json
{
  "findingCriteria": {
    "criterion": {
      "property1": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      },
      "property2": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      }
    }
  },
  "groupBy": "resourcesAffected.s3Bucket.name",
  "size": 0,
  "sortCriteria": {
    "attributeName": {},
    "orderBy": {}
  }
}
```

<h3 id="getfindingstatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» findingCriteria|body|object|false|Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.|
|» » criterion|body|object|false|none|
|» » » **additionalProperties**|body|[CriterionAdditionalProperties](#schemacriterionadditionalproperties)|false|Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.|
|» groupBy|body|string|true|<p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity level of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>|
|» size|body|integer|false|The maximum number of items to include in each page of the response.|
|» sortCriteria|body|object|false|Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.|
|» » attributeName|body|object|false|none|
|» » orderBy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» groupBy|resourcesAffected.s3Bucket.name|
|» groupBy|type|
|» groupBy|classificationDetails.jobId|
|» groupBy|severity.description|

> Example responses

> 200 Response

```json
{
  "countsByGroup": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getfindingstatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFindingStatisticsResponse](#schemagetfindingstatisticsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFindings

<a id="opIdGetFindings"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/findings/describe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "findingIds": [
      "string"
    ],
    "sortCriteria": {
      "attributeName": {},
      "orderBy": {}
    }
  }'
```

`POST /findings/describe`

Retrieves the details of one or more findings.

> Body parameter

```json
{
  "findingIds": [
    "string"
  ],
  "sortCriteria": {
    "attributeName": {},
    "orderBy": {}
  }
}
```

<h3 id="getfindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» findingIds|body|[[__string](#schema__string)]|true|An array of strings that lists the unique identifiers for the findings to retrieve. You can specify as many as 50 unique identifiers in this array.|
|» sortCriteria|body|object|false|Specifies criteria for sorting the results of a request for findings.|
|» » attributeName|body|object|false|none|
|» » orderBy|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "findings": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getfindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFindingsResponse](#schemagetfindingsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFindingsPublicationConfiguration

<a id="opIdGetFindingsPublicationConfiguration"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/findings-publication-configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /findings-publication-configuration`

Retrieves the configuration settings for publishing findings to Security Hub.

<h3 id="getfindingspublicationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "securityHubConfiguration": {
    "publishClassificationFindings": {},
    "publishPolicyFindings": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getfindingspublicationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFindingsPublicationConfigurationResponse](#schemagetfindingspublicationconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutFindingsPublicationConfiguration

<a id="opIdPutFindingsPublicationConfiguration"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/findings-publication-configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "securityHubConfiguration": {
      "publishClassificationFindings": {},
      "publishPolicyFindings": {}
    }
  }'
```

`PUT /findings-publication-configuration`

Updates the configuration settings for publishing findings to Security Hub.

> Body parameter

```json
{
  "clientToken": "string",
  "securityHubConfiguration": {
    "publishClassificationFindings": {},
    "publishPolicyFindings": {}
  }
}
```

<h3 id="putfindingspublicationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|A unique, case-sensitive token that you provide to ensure the idempotency of the request.|
|» securityHubConfiguration|body|object|false|Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.|
|» » publishClassificationFindings|body|object|false|none|
|» » publishPolicyFindings|body|object|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="putfindingspublicationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutFindingsPublicationConfigurationResponse](#schemaputfindingspublicationconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInvitationsCount

<a id="opIdGetInvitationsCount"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/invitations/count \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /invitations/count`

Retrieves the count of Amazon Macie membership invitations that were received by an account.

<h3 id="getinvitationscount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "invitationsCount": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getinvitationscount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInvitationsCountResponse](#schemagetinvitationscountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMasterAccount

<a id="opIdGetMasterAccount"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/master \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /master`

(Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.

<h3 id="getmasteraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "master": {
    "accountId": {},
    "invitationId": {},
    "invitedAt": {},
    "relationshipStatus": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getmasteraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMasterAccountResponse](#schemagetmasteraccountresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourceProfile

<a id="opIdGetResourceProfile"></a>

> Code samples

```bash
curl 'https://macie2.us-east-1.amazonaws.com/resource-profiles#resourceArn?resourceArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resource-profiles#resourceArn`

Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.

<h3 id="getresourceprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "profileUpdatedAt": {},
  "sensitivityScore": {},
  "sensitivityScoreOverridden": {},
  "statistics": {
    "totalBytesClassified": {},
    "totalDetections": {},
    "totalDetectionsSuppressed": {},
    "totalItemsClassified": {},
    "totalItemsSensitive": {},
    "totalItemsSkipped": {},
    "totalItemsSkippedInvalidEncryption": {},
    "totalItemsSkippedInvalidKms": {},
    "totalItemsSkippedPermissionDenied": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="getresourceprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourceProfileResponse](#schemagetresourceprofileresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResourceProfile

<a id="opIdUpdateResourceProfile"></a>

> Code samples

```bash
curl 'https://macie2.us-east-1.amazonaws.com/resource-profiles#resourceArn?resourceArn=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sensitivityScoreOverride": 0
  }'
```

`PATCH /resource-profiles#resourceArn`

Updates the sensitivity score for an S3 bucket.

> Body parameter

```json
{
  "sensitivityScoreOverride": 0
}
```

<h3 id="updateresourceprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» sensitivityScoreOverride|body|integer|false|The new sensitivity score for the bucket. Valid values are: 100, assign the maximum score and apply the <i>Sensitive</i> label to the bucket; and, null (empty), assign a score that Amazon Macie calculates automatically after you submit the request.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updateresourceprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResourceProfileResponse](#schemaupdateresourceprofileresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRevealConfiguration

<a id="opIdGetRevealConfiguration"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/reveal-configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /reveal-configuration`

Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.

<h3 id="getrevealconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "configuration": {
    "kmsKeyId": {},
    "status": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getrevealconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRevealConfigurationResponse](#schemagetrevealconfigurationresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRevealConfiguration

<a id="opIdUpdateRevealConfiguration"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/reveal-configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "configuration": {
      "kmsKeyId": {},
      "status": {}
    }
  }'
```

`PUT /reveal-configuration`

Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.

> Body parameter

```json
{
  "configuration": {
    "kmsKeyId": {},
    "status": {}
  }
}
```

<h3 id="updaterevealconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» configuration|body|object|true|Specifies the configuration settings for retrieving occurrences of sensitive data reported by findings, and the status of the configuration for an Amazon Macie account. When you enable the configuration for the first time, your request must specify an Key Management Service (KMS) key. Otherwise, an error occurs. Macie uses the specified key to encrypt the sensitive data that you retrieve.|
|» » kmsKeyId|body|object|false|none|
|» » status|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "configuration": {
    "kmsKeyId": {},
    "status": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="updaterevealconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRevealConfigurationResponse](#schemaupdaterevealconfigurationresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSensitiveDataOccurrences

<a id="opIdGetSensitiveDataOccurrences"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/findings/string/reveal \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /findings/{findingId}/reveal`

Retrieves occurrences of sensitive data reported by a finding.

<h3 id="getsensitivedataoccurrences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|findingId|path|string|true|The unique identifier for the finding.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "error": {},
  "sensitiveDataOccurrences": {
    "property1": [
      {
        "value": {}
      }
    ],
    "property2": [
      {
        "value": {}
      }
    ]
  },
  "status": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="getsensitivedataoccurrences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSensitiveDataOccurrencesResponse](#schemagetsensitivedataoccurrencesresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSensitiveDataOccurrencesAvailability

<a id="opIdGetSensitiveDataOccurrencesAvailability"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/findings/string/reveal/availability \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /findings/{findingId}/reveal/availability`

Checks whether occurrences of sensitive data can be retrieved for a finding.

<h3 id="getsensitivedataoccurrencesavailability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|findingId|path|string|true|The unique identifier for the finding.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": {},
  "reasons": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getsensitivedataoccurrencesavailability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSensitiveDataOccurrencesAvailabilityResponse](#schemagetsensitivedataoccurrencesavailabilityresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSensitivityInspectionTemplate

<a id="opIdGetSensitivityInspectionTemplate"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/templates/sensitivity-inspections/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /templates/sensitivity-inspections/{id}`

 <p>Retrieves the settings for the sensitivity inspection template for an account.</p>

<h3 id="getsensitivityinspectiontemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "description": {},
  "excludes": {
    "managedDataIdentifierIds": {}
  },
  "includes": {
    "allowListIds": {},
    "customDataIdentifierIds": {},
    "managedDataIdentifierIds": {}
  },
  "name": {},
  "sensitivityInspectionTemplateId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getsensitivityinspectiontemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSensitivityInspectionTemplateResponse](#schemagetsensitivityinspectiontemplateresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSensitivityInspectionTemplate

<a id="opIdUpdateSensitivityInspectionTemplate"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/templates/sensitivity-inspections/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "excludes": {
      "managedDataIdentifierIds": {}
    },
    "includes": {
      "allowListIds": {},
      "customDataIdentifierIds": {},
      "managedDataIdentifierIds": {}
    }
  }'
```

`PUT /templates/sensitivity-inspections/{id}`

 <p>Updates the settings for the sensitivity inspection template for an account.</p>

> Body parameter

```json
{
  "description": "string",
  "excludes": {
    "managedDataIdentifierIds": {}
  },
  "includes": {
    "allowListIds": {},
    "customDataIdentifierIds": {},
    "managedDataIdentifierIds": {}
  }
}
```

<h3 id="updatesensitivityinspectiontemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|A custom description of the template. The description can contain as many as 200 characters.|
|» excludes|body|object|false|Specifies managed data identifiers to exclude (not use) when performing automated sensitive data discovery for an Amazon Macie account. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.|
|» » managedDataIdentifierIds|body|object|false|none|
|» includes|body|object|false|Specifies the allow lists, custom data identifiers, and managed data identifiers to include (use) when performing automated sensitive data discovery for an Amazon Macie account. The configuration must specify at least one custom data identifier or managed data identifier. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.|
|» » allowListIds|body|object|false|none|
|» » customDataIdentifierIds|body|object|false|none|
|» » managedDataIdentifierIds|body|object|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatesensitivityinspectiontemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSensitivityInspectionTemplateResponse](#schemaupdatesensitivityinspectiontemplateresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUsageStatistics

<a id="opIdGetUsageStatistics"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/usage/statistics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filterBy": [
      {
        "comparator": {},
        "key": {},
        "values": {}
      }
    ],
    "maxResults": 0,
    "nextToken": "string",
    "sortBy": {
      "key": {},
      "orderBy": {}
    },
    "timeRange": "MONTH_TO_DATE"
  }'
```

`POST /usage/statistics`

Retrieves (queries) quotas and aggregated usage data for one or more accounts.

> Body parameter

```json
{
  "filterBy": [
    {
      "comparator": {},
      "key": {},
      "values": {}
    }
  ],
  "maxResults": 0,
  "nextToken": "string",
  "sortBy": {
    "key": {},
    "orderBy": {}
  },
  "timeRange": "MONTH_TO_DATE"
}
```

<h3 id="getusagestatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» filterBy|body|[[UsageStatisticsFilter](#schemausagestatisticsfilter)]|false|An array of objects, one for each condition to use to filter the query results. If you specify more than one condition, Amazon Macie uses an AND operator to join the conditions.|
|» maxResults|body|integer|false|The maximum number of items to include in each page of the response.|
|» nextToken|body|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|» sortBy|body|object|false|Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.|
|» » key|body|object|false|none|
|» » orderBy|body|object|false|none|
|» timeRange|body|string|false|An inclusive time period that Amazon Macie usage data applies to. Possible values are:|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» timeRange|MONTH_TO_DATE|
|» timeRange|PAST_30_DAYS|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "records": {},
  "timeRange": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getusagestatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUsageStatisticsResponse](#schemagetusagestatisticsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUsageTotals

<a id="opIdGetUsageTotals"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/usage \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /usage`

Retrieves (queries) aggregated usage data for an account.

<h3 id="getusagetotals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeRange|query|string|false|The inclusive time period to retrieve the data for. Valid values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days. If you don't specify a value for this parameter, Amazon Macie provides aggregated usage data for the preceding 30 days.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "timeRange": {},
  "usageTotals": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getusagetotals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUsageTotalsResponse](#schemagetusagetotalsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClassificationJobs

<a id="opIdListClassificationJobs"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/jobs/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filterCriteria": {
      "excludes": {},
      "includes": {}
    },
    "maxResults": 0,
    "nextToken": "string",
    "sortCriteria": {
      "attributeName": {},
      "orderBy": {}
    }
  }'
```

`POST /jobs/list`

Retrieves a subset of information about one or more classification jobs.

> Body parameter

```json
{
  "filterCriteria": {
    "excludes": {},
    "includes": {}
  },
  "maxResults": 0,
  "nextToken": "string",
  "sortCriteria": {
    "attributeName": {},
    "orderBy": {}
  }
}
```

<h3 id="listclassificationjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» filterCriteria|body|object|false|Specifies criteria for filtering the results of a request for information about classification jobs.|
|» » excludes|body|object|false|none|
|» » includes|body|object|false|none|
|» maxResults|body|integer|false|The maximum number of items to include in each page of the response.|
|» nextToken|body|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|» sortCriteria|body|object|false|Specifies criteria for sorting the results of a request for information about classification jobs.|
|» » attributeName|body|object|false|none|
|» » orderBy|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "items": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listclassificationjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListClassificationJobsResponse](#schemalistclassificationjobsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClassificationScopes

<a id="opIdListClassificationScopes"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/classification-scopes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /classification-scopes`

Retrieves a subset of information about the classification scope for an account.

<h3 id="listclassificationscopes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The name of the classification scope to retrieve the unique identifier for.|
|nextToken|query|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "classificationScopes": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listclassificationscopes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListClassificationScopesResponse](#schemalistclassificationscopesresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCustomDataIdentifiers

<a id="opIdListCustomDataIdentifiers"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/custom-data-identifiers/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxResults": 0,
    "nextToken": "string"
  }'
```

`POST /custom-data-identifiers/list`

Retrieves a subset of information about all the custom data identifiers for an account.

> Body parameter

```json
{
  "maxResults": 0,
  "nextToken": "string"
}
```

<h3 id="listcustomdataidentifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» maxResults|body|integer|false|The maximum number of items to include in each page of the response.|
|» nextToken|body|string|false|The nextToken string that specifies which page of results to return in a paginated response.|

> Example responses

> 200 Response

```json
{
  "items": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listcustomdataidentifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCustomDataIdentifiersResponse](#schemalistcustomdataidentifiersresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFindings

<a id="opIdListFindings"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/findings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "findingCriteria": {
      "criterion": {
        "property1": {
          "eq": {},
          "eqExactMatch": {},
          "gt": {},
          "gte": {},
          "lt": {},
          "lte": {},
          "neq": {}
        },
        "property2": {
          "eq": {},
          "eqExactMatch": {},
          "gt": {},
          "gte": {},
          "lt": {},
          "lte": {},
          "neq": {}
        }
      }
    },
    "maxResults": 0,
    "nextToken": "string",
    "sortCriteria": {
      "attributeName": {},
      "orderBy": {}
    }
  }'
```

`POST /findings`

Retrieves a subset of information about one or more findings.

> Body parameter

```json
{
  "findingCriteria": {
    "criterion": {
      "property1": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      },
      "property2": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      }
    }
  },
  "maxResults": 0,
  "nextToken": "string",
  "sortCriteria": {
    "attributeName": {},
    "orderBy": {}
  }
}
```

<h3 id="listfindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» findingCriteria|body|object|false|Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.|
|» » criterion|body|object|false|none|
|» » » **additionalProperties**|body|[CriterionAdditionalProperties](#schemacriterionadditionalproperties)|false|Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.|
|» maxResults|body|integer|false|The maximum number of items to include in each page of the response.|
|» nextToken|body|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|» sortCriteria|body|object|false|Specifies criteria for sorting the results of a request for findings.|
|» » attributeName|body|object|false|none|
|» » orderBy|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "findingIds": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listfindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFindingsResponse](#schemalistfindingsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListManagedDataIdentifiers

<a id="opIdListManagedDataIdentifiers"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/managed-data-identifiers/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nextToken": "string"
  }'
```

`POST /managed-data-identifiers/list`

Retrieves information about all the managed data identifiers that Amazon Macie currently provides.

> Body parameter

```json
{
  "nextToken": "string"
}
```

<h3 id="listmanageddataidentifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» nextToken|body|string|false|The nextToken string that specifies which page of results to return in a paginated response.|

> Example responses

> 200 Response

```json
{
  "items": {},
  "nextToken": {}
}
```

<h3 id="listmanageddataidentifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListManagedDataIdentifiersResponse](#schemalistmanageddataidentifiersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceProfileArtifacts

<a id="opIdListResourceProfileArtifacts"></a>

> Code samples

```bash
curl 'https://macie2.us-east-1.amazonaws.com/resource-profiles/artifacts#resourceArn?resourceArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resource-profiles/artifacts#resourceArn`

Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.

<h3 id="listresourceprofileartifacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "artifacts": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listresourceprofileartifacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceProfileArtifactsResponse](#schemalistresourceprofileartifactsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceProfileDetections

<a id="opIdListResourceProfileDetections"></a>

> Code samples

```bash
curl 'https://macie2.us-east-1.amazonaws.com/resource-profiles/detections#resourceArn?resourceArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resource-profiles/detections#resourceArn`

Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.

<h3 id="listresourceprofiledetections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of items to include in each page of a paginated response.|
|nextToken|query|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "detections": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listresourceprofiledetections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceProfileDetectionsResponse](#schemalistresourceprofiledetectionsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResourceProfileDetections

<a id="opIdUpdateResourceProfileDetections"></a>

> Code samples

```bash
curl 'https://macie2.us-east-1.amazonaws.com/resource-profiles/detections#resourceArn?resourceArn=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "suppressDataIdentifiers": [
      {
        "id": {},
        "type": {}
      }
    ]
  }'
```

`PATCH /resource-profiles/detections#resourceArn`

Updates the sensitivity scoring settings for an S3 bucket.

> Body parameter

```json
{
  "suppressDataIdentifiers": [
    {
      "id": {},
      "type": {}
    }
  ]
}
```

<h3 id="updateresourceprofiledetections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» suppressDataIdentifiers|body|[[SuppressDataIdentifier](#schemasuppressdataidentifier)]|false|An array of objects, one for each custom data identifier or managed data identifier that detected the type of sensitive data to start excluding or including in the bucket's score. To start including all sensitive data types in the score, don't specify any values for this array.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updateresourceprofiledetections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResourceProfileDetectionsResponse](#schemaupdateresourceprofiledetectionsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSensitivityInspectionTemplates

<a id="opIdListSensitivityInspectionTemplates"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/templates/sensitivity-inspections \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /templates/sensitivity-inspections`

 <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>

<h3 id="listsensitivityinspectiontemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of items to include in each page of a paginated response.|
|nextToken|query|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "sensitivityInspectionTemplates": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listsensitivityinspectiontemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSensitivityInspectionTemplatesResponse](#schemalistsensitivityinspectiontemplatesresponse)|
|480|480|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{resourceArn}`

Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 204 Response

```json
{}
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[TagResourceResponse](#schematagresourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchResources

<a id="opIdSearchResources"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/datasources/search-resources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "bucketCriteria": {
      "excludes": {
        "and": {}
      },
      "includes": {
        "and": {}
      }
    },
    "maxResults": 0,
    "nextToken": "string",
    "sortCriteria": {
      "attributeName": {},
      "orderBy": {}
    }
  }'
```

`POST /datasources/search-resources`

Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.

> Body parameter

```json
{
  "bucketCriteria": {
    "excludes": {
      "and": {}
    },
    "includes": {
      "and": {}
    }
  },
  "maxResults": 0,
  "nextToken": "string",
  "sortCriteria": {
    "attributeName": {},
    "orderBy": {}
  }
}
```

<h3 id="searchresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» bucketCriteria|body|object|false|Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.|
|» » excludes|body|object|false|none|
|» » » and|body|object|false|none|
|» » includes|body|object|false|none|
|» » » and|body|object|false|none|
|» maxResults|body|integer|false|The maximum number of items to include in each page of the response. The default value is 50.|
|» nextToken|body|string|false|The nextToken string that specifies which page of results to return in a paginated response.|
|» sortCriteria|body|object|false|Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.|
|» » attributeName|body|object|false|none|
|» » orderBy|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "matchingResources": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="searchresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchResourcesResponse](#schemasearchresourcesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestCustomDataIdentifier

<a id="opIdTestCustomDataIdentifier"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/custom-data-identifiers/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ignoreWords": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "maximumMatchDistance": 0,
    "regex": "string",
    "sampleText": "string"
  }'
```

`POST /custom-data-identifiers/test`

Tests a custom data identifier.

> Body parameter

```json
{
  "ignoreWords": [
    "string"
  ],
  "keywords": [
    "string"
  ],
  "maximumMatchDistance": 0,
  "regex": "string",
  "sampleText": "string"
}
```

<h3 id="testcustomdataidentifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ignoreWords|body|[[__string](#schema__string)]|false|An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.|
|» keywords|body|[[__string](#schema__string)]|false|An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.|
|» maximumMatchDistance|body|integer|false|The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50.|
|» regex|body|string|true|The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.|
|» sampleText|body|string|true|The sample text to inspect by using the custom data identifier. The text can contain as many as 1,000 characters.|

> Example responses

> 200 Response

```json
{
  "matchCount": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="testcustomdataidentifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestCustomDataIdentifierResponse](#schematestcustomdataidentifierresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://macie2.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes one or more tags (keys and values) from an Amazon Macie resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|tagKeys|query|[[__string](#schema__string)]|true|One or more tags (keys) to remove from the resource. In an HTTP request to remove multiple tags, append the tagKeys parameter and argument for each tag to remove, separated by an ampersand (&amp;).|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 204 Response

```json
{}
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UntagResourceResponse](#schemauntagresourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMemberSession

<a id="opIdUpdateMemberSession"></a>

> Code samples

```bash
curl https://macie2.us-east-1.amazonaws.com/macie/members/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "status": "PAUSED"
  }'
```

`PATCH /macie/members/{id}`

Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.

> Body parameter

```json
{
  "status": "PAUSED"
}
```

<h3 id="updatemembersession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the Amazon Macie resource that the request applies to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» status|body|string|true|The status of an Amazon Macie account. Valid values are:|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|PAUSED|
|» status|ENABLED|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updatemembersession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMemberSessionResponse](#schemaupdatemembersessionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptInvitationResponse">AcceptInvitationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaacceptinvitationresponse"></a>
<a id="schema_AcceptInvitationResponse"></a>
<a id="tocSacceptinvitationresponse"></a>
<a id="tocsacceptinvitationresponse"></a>

```json
{}
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_BatchGetCustomDataIdentifiersResponse">BatchGetCustomDataIdentifiersResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetcustomdataidentifiersresponse"></a>
<a id="schema_BatchGetCustomDataIdentifiersResponse"></a>
<a id="tocSbatchgetcustomdataidentifiersresponse"></a>
<a id="tocsbatchgetcustomdataidentifiersresponse"></a>

```json
{
  "customDataIdentifiers": {},
  "notFoundIdentifierIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customDataIdentifiers|object|false|none|none|
|notFoundIdentifierIds|object|false|none|none|

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
```

<h2 id="tocS_CreateAllowListResponse">CreateAllowListResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateallowlistresponse"></a>
<a id="schema_CreateAllowListResponse"></a>
<a id="tocScreateallowlistresponse"></a>
<a id="tocscreateallowlistresponse"></a>

```json
{
  "arn": {},
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|id|object|false|none|none|

<h2 id="tocS___stringMin1Max512PatternSS">__stringMin1Max512PatternSS</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin1max512patternss"></a>
<a id="schema___stringMin1Max512PatternSS"></a>
<a id="tocS__stringmin1max512patternss"></a>
<a id="tocs__stringmin1max512patternss"></a>

```json
"string"
```

<h2 id="tocS_S3WordsList">S3WordsList</h2>
<!-- backwards compatibility -->
<a id="schemas3wordslist"></a>
<a id="schema_S3WordsList"></a>
<a id="tocSs3wordslist"></a>
<a id="tocss3wordslist"></a>

```json
{
  "bucketName": {},
  "objectKey": {}
}
```

Provides information about an S3 object that lists specific text to ignore.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|objectKey|object|true|none|none|

<h2 id="tocS_CreateClassificationJobResponse">CreateClassificationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateclassificationjobresponse"></a>
<a id="schema_CreateClassificationJobResponse"></a>
<a id="tocScreateclassificationjobresponse"></a>
<a id="tocscreateclassificationjobresponse"></a>

```json
{
  "jobArn": {},
  "jobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobArn|object|false|none|none|
|jobId|object|false|none|none|

<h2 id="tocS_S3BucketCriteriaForJob">S3BucketCriteriaForJob</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketcriteriaforjob"></a>
<a id="schema_S3BucketCriteriaForJob"></a>
<a id="tocSs3bucketcriteriaforjob"></a>
<a id="tocss3bucketcriteriaforjob"></a>

```json
{
  "excludes": {
    "and": {}
  },
  "includes": {
    "and": {}
  }
}
```

Specifies property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. Exclude conditions take precedence over include conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludes|object|false|none|none|
|includes|object|false|none|none|

<h2 id="tocS___listOfS3BucketDefinitionForJob">__listOfS3BucketDefinitionForJob</h2>
<!-- backwards compatibility -->
<a id="schema__listofs3bucketdefinitionforjob"></a>
<a id="schema___listOfS3BucketDefinitionForJob"></a>
<a id="tocS__listofs3bucketdefinitionforjob"></a>
<a id="tocs__listofs3bucketdefinitionforjob"></a>

```json
[
  {
    "accountId": {},
    "buckets": {}
  }
]
```

<h2 id="tocS_Scoping">Scoping</h2>
<!-- backwards compatibility -->
<a id="schemascoping"></a>
<a id="schema_Scoping"></a>
<a id="tocSscoping"></a>
<a id="tocsscoping"></a>

```json
{
  "excludes": {
    "and": {}
  },
  "includes": {
    "and": {}
  }
}
```

Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludes|object|false|none|none|
|includes|object|false|none|none|

<h2 id="tocS_DailySchedule">DailySchedule</h2>
<!-- backwards compatibility -->
<a id="schemadailyschedule"></a>
<a id="schema_DailySchedule"></a>
<a id="tocSdailyschedule"></a>
<a id="tocsdailyschedule"></a>

```json
{}
```

Specifies that a classification job runs once a day, every day. This is an empty object.

<h2 id="tocS_MonthlySchedule">MonthlySchedule</h2>
<!-- backwards compatibility -->
<a id="schemamonthlyschedule"></a>
<a id="schema_MonthlySchedule"></a>
<a id="tocSmonthlyschedule"></a>
<a id="tocsmonthlyschedule"></a>

```json
{
  "dayOfMonth": {}
}
```

Specifies a monthly recurrence pattern for running a classification job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfMonth|object|false|none|none|

<h2 id="tocS_WeeklySchedule">WeeklySchedule</h2>
<!-- backwards compatibility -->
<a id="schemaweeklyschedule"></a>
<a id="schema_WeeklySchedule"></a>
<a id="tocSweeklyschedule"></a>
<a id="tocsweeklyschedule"></a>

```json
{
  "dayOfWeek": {}
}
```

Specifies a weekly recurrence pattern for running a classification job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|object|false|none|none|

<h2 id="tocS_CreateCustomDataIdentifierResponse">CreateCustomDataIdentifierResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomdataidentifierresponse"></a>
<a id="schema_CreateCustomDataIdentifierResponse"></a>
<a id="tocScreatecustomdataidentifierresponse"></a>
<a id="tocscreatecustomdataidentifierresponse"></a>

```json
{
  "customDataIdentifierId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customDataIdentifierId|object|false|none|none|

<h2 id="tocS_SeverityLevel">SeverityLevel</h2>
<!-- backwards compatibility -->
<a id="schemaseveritylevel"></a>
<a id="schema_SeverityLevel"></a>
<a id="tocSseveritylevel"></a>
<a id="tocsseveritylevel"></a>

```json
{
  "occurrencesThreshold": {},
  "severity": {}
}
```

Specifies a severity level for findings that a custom data identifier produces. A severity level determines which severity is assigned to the findings, based on the number of occurrences of text that matches the custom data identifier's detection criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|occurrencesThreshold|object|true|none|none|
|severity|object|true|none|none|

<h2 id="tocS_CreateFindingsFilterResponse">CreateFindingsFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefindingsfilterresponse"></a>
<a id="schema_CreateFindingsFilterResponse"></a>
<a id="tocScreatefindingsfilterresponse"></a>
<a id="tocscreatefindingsfilterresponse"></a>

```json
{
  "arn": {},
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|id|object|false|none|none|

<h2 id="tocS_Criterion">Criterion</h2>
<!-- backwards compatibility -->
<a id="schemacriterion"></a>
<a id="schema_Criterion"></a>
<a id="tocScriterion"></a>
<a id="tocscriterion"></a>

```json
{
  "property1": {
    "eq": {},
    "eqExactMatch": {},
    "gt": {},
    "gte": {},
    "lt": {},
    "lte": {},
    "neq": {}
  },
  "property2": {
    "eq": {},
    "eqExactMatch": {},
    "gt": {},
    "gte": {},
    "lt": {},
    "lte": {},
    "neq": {}
  }
}
```

Specifies a condition that defines a property, operator, and one or more values to filter the results of a query for findings. The number of values depends on the property and operator specified by the condition. For information about defining filter conditions, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[CriterionAdditionalProperties](#schemacriterionadditionalproperties)|false|none|Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.|

<h2 id="tocS_CreateInvitationsResponse">CreateInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateinvitationsresponse"></a>
<a id="schema_CreateInvitationsResponse"></a>
<a id="tocScreateinvitationsresponse"></a>
<a id="tocscreateinvitationsresponse"></a>

```json
{
  "unprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unprocessedAccounts|object|false|none|none|

<h2 id="tocS_CreateMemberResponse">CreateMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatememberresponse"></a>
<a id="schema_CreateMemberResponse"></a>
<a id="tocScreatememberresponse"></a>
<a id="tocscreatememberresponse"></a>

```json
{
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|

<h2 id="tocS_CreateSampleFindingsResponse">CreateSampleFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesamplefindingsresponse"></a>
<a id="schema_CreateSampleFindingsResponse"></a>
<a id="tocScreatesamplefindingsresponse"></a>
<a id="tocscreatesamplefindingsresponse"></a>

```json
{}
```

<h2 id="tocS_FindingType">FindingType</h2>
<!-- backwards compatibility -->
<a id="schemafindingtype"></a>
<a id="schema_FindingType"></a>
<a id="tocSfindingtype"></a>
<a id="tocsfindingtype"></a>

```json
"SensitiveData:S3Object/Multiple"
```

The type of finding. For details about each type, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-types.html">Types of Amazon Macie findings</a> in the <i>Amazon Macie User Guide</i>. Possible values are:

<h2 id="tocS_DeclineInvitationsResponse">DeclineInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeclineinvitationsresponse"></a>
<a id="schema_DeclineInvitationsResponse"></a>
<a id="tocSdeclineinvitationsresponse"></a>
<a id="tocsdeclineinvitationsresponse"></a>

```json
{
  "unprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unprocessedAccounts|object|false|none|none|

<h2 id="tocS_DeleteAllowListResponse">DeleteAllowListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteallowlistresponse"></a>
<a id="schema_DeleteAllowListResponse"></a>
<a id="tocSdeleteallowlistresponse"></a>
<a id="tocsdeleteallowlistresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteCustomDataIdentifierResponse">DeleteCustomDataIdentifierResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomdataidentifierresponse"></a>
<a id="schema_DeleteCustomDataIdentifierResponse"></a>
<a id="tocSdeletecustomdataidentifierresponse"></a>
<a id="tocsdeletecustomdataidentifierresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteFindingsFilterResponse">DeleteFindingsFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefindingsfilterresponse"></a>
<a id="schema_DeleteFindingsFilterResponse"></a>
<a id="tocSdeletefindingsfilterresponse"></a>
<a id="tocsdeletefindingsfilterresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteInvitationsResponse">DeleteInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinvitationsresponse"></a>
<a id="schema_DeleteInvitationsResponse"></a>
<a id="tocSdeleteinvitationsresponse"></a>
<a id="tocsdeleteinvitationsresponse"></a>

```json
{
  "unprocessedAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unprocessedAccounts|object|false|none|none|

<h2 id="tocS_DeleteMemberResponse">DeleteMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletememberresponse"></a>
<a id="schema_DeleteMemberResponse"></a>
<a id="tocSdeletememberresponse"></a>
<a id="tocsdeletememberresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeBucketsResponse">DescribeBucketsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebucketsresponse"></a>
<a id="schema_DescribeBucketsResponse"></a>
<a id="tocSdescribebucketsresponse"></a>
<a id="tocsdescribebucketsresponse"></a>

```json
{
  "buckets": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buckets|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_BucketCriteriaAdditionalProperties">BucketCriteriaAdditionalProperties</h2>
<!-- backwards compatibility -->
<a id="schemabucketcriteriaadditionalproperties"></a>
<a id="schema_BucketCriteriaAdditionalProperties"></a>
<a id="tocSbucketcriteriaadditionalproperties"></a>
<a id="tocsbucketcriteriaadditionalproperties"></a>

```json
{
  "eq": {},
  "gt": {},
  "gte": {},
  "lt": {},
  "lte": {},
  "neq": {},
  "prefix": {}
}
```

Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eq|object|false|none|none|
|gt|object|false|none|none|
|gte|object|false|none|none|
|lt|object|false|none|none|
|lte|object|false|none|none|
|neq|object|false|none|none|
|prefix|object|false|none|none|

<h2 id="tocS_OrderBy">OrderBy</h2>
<!-- backwards compatibility -->
<a id="schemaorderby"></a>
<a id="schema_OrderBy"></a>
<a id="tocSorderby"></a>
<a id="tocsorderby"></a>

```json
"ASC"
```

<h2 id="tocS_DescribeClassificationJobResponse">DescribeClassificationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclassificationjobresponse"></a>
<a id="schema_DescribeClassificationJobResponse"></a>
<a id="tocSdescribeclassificationjobresponse"></a>
<a id="tocsdescribeclassificationjobresponse"></a>

```json
{
  "allowListIds": {},
  "clientToken": {},
  "createdAt": {},
  "customDataIdentifierIds": {},
  "description": {},
  "initialRun": {},
  "jobArn": {},
  "jobId": {},
  "jobStatus": {},
  "jobType": {},
  "lastRunErrorStatus": {
    "code": {}
  },
  "lastRunTime": {},
  "managedDataIdentifierIds": {},
  "managedDataIdentifierSelector": {},
  "name": {},
  "s3JobDefinition": {
    "bucketCriteria": {
      "excludes": {
        "and": {}
      },
      "includes": {
        "and": {}
      }
    },
    "bucketDefinitions": {},
    "scoping": {
      "excludes": {
        "and": {}
      },
      "includes": {
        "and": {}
      }
    }
  },
  "samplingPercentage": {},
  "scheduleFrequency": {
    "dailySchedule": {},
    "monthlySchedule": {
      "dayOfMonth": {}
    },
    "weeklySchedule": {
      "dayOfWeek": {}
    }
  },
  "statistics": {
    "approximateNumberOfObjectsToProcess": {},
    "numberOfRuns": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "userPausedDetails": {
    "jobExpiresAt": {},
    "jobImminentExpirationHealthEventArn": {},
    "jobPausedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowListIds|object|false|none|none|
|clientToken|object|false|none|none|
|createdAt|object|false|none|none|
|customDataIdentifierIds|object|false|none|none|
|description|object|false|none|none|
|initialRun|object|false|none|none|
|jobArn|object|false|none|none|
|jobId|object|false|none|none|
|jobStatus|object|false|none|none|
|jobType|object|false|none|none|
|lastRunErrorStatus|object|false|none|none|
|lastRunTime|object|false|none|none|
|managedDataIdentifierIds|object|false|none|none|
|managedDataIdentifierSelector|object|false|none|none|
|name|object|false|none|none|
|s3JobDefinition|object|false|none|none|
|samplingPercentage|object|false|none|none|
|scheduleFrequency|object|false|none|none|
|statistics|object|false|none|none|
|tags|object|false|none|none|
|userPausedDetails|object|false|none|none|

<h2 id="tocS_DescribeOrganizationConfigurationResponse">DescribeOrganizationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconfigurationresponse"></a>
<a id="schema_DescribeOrganizationConfigurationResponse"></a>
<a id="tocSdescribeorganizationconfigurationresponse"></a>
<a id="tocsdescribeorganizationconfigurationresponse"></a>

```json
{
  "autoEnable": {},
  "maxAccountLimitReached": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoEnable|object|false|none|none|
|maxAccountLimitReached|object|false|none|none|

<h2 id="tocS_DisableMacieResponse">DisableMacieResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisablemacieresponse"></a>
<a id="schema_DisableMacieResponse"></a>
<a id="tocSdisablemacieresponse"></a>
<a id="tocsdisablemacieresponse"></a>

```json
{}
```

<h2 id="tocS_DisableOrganizationAdminAccountResponse">DisableOrganizationAdminAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisableorganizationadminaccountresponse"></a>
<a id="schema_DisableOrganizationAdminAccountResponse"></a>
<a id="tocSdisableorganizationadminaccountresponse"></a>
<a id="tocsdisableorganizationadminaccountresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateFromAdministratorAccountResponse">DisassociateFromAdministratorAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefromadministratoraccountresponse"></a>
<a id="schema_DisassociateFromAdministratorAccountResponse"></a>
<a id="tocSdisassociatefromadministratoraccountresponse"></a>
<a id="tocsdisassociatefromadministratoraccountresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateFromMasterAccountResponse">DisassociateFromMasterAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefrommasteraccountresponse"></a>
<a id="schema_DisassociateFromMasterAccountResponse"></a>
<a id="tocSdisassociatefrommasteraccountresponse"></a>
<a id="tocsdisassociatefrommasteraccountresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateMemberResponse">DisassociateMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatememberresponse"></a>
<a id="schema_DisassociateMemberResponse"></a>
<a id="tocSdisassociatememberresponse"></a>
<a id="tocsdisassociatememberresponse"></a>

```json
{}
```

<h2 id="tocS_EnableMacieResponse">EnableMacieResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenablemacieresponse"></a>
<a id="schema_EnableMacieResponse"></a>
<a id="tocSenablemacieresponse"></a>
<a id="tocsenablemacieresponse"></a>

```json
{}
```

<h2 id="tocS_EnableOrganizationAdminAccountResponse">EnableOrganizationAdminAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenableorganizationadminaccountresponse"></a>
<a id="schema_EnableOrganizationAdminAccountResponse"></a>
<a id="tocSenableorganizationadminaccountresponse"></a>
<a id="tocsenableorganizationadminaccountresponse"></a>

```json
{}
```

<h2 id="tocS_GetAdministratorAccountResponse">GetAdministratorAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetadministratoraccountresponse"></a>
<a id="schema_GetAdministratorAccountResponse"></a>
<a id="tocSgetadministratoraccountresponse"></a>
<a id="tocsgetadministratoraccountresponse"></a>

```json
{
  "administrator": {
    "accountId": {},
    "invitationId": {},
    "invitedAt": {},
    "relationshipStatus": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administrator|object|false|none|none|

<h2 id="tocS_GetAllowListResponse">GetAllowListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetallowlistresponse"></a>
<a id="schema_GetAllowListResponse"></a>
<a id="tocSgetallowlistresponse"></a>
<a id="tocsgetallowlistresponse"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "criteria": {
    "regex": {},
    "s3WordsList": {
      "bucketName": {},
      "objectKey": {}
    }
  },
  "description": {},
  "id": {},
  "name": {},
  "status": {
    "code": {},
    "description": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "updatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|criteria|object|false|none|none|
|description|object|false|none|none|
|id|object|false|none|none|
|name|object|false|none|none|
|status|object|false|none|none|
|tags|object|false|none|none|
|updatedAt|object|false|none|none|

<h2 id="tocS_GetAutomatedDiscoveryConfigurationResponse">GetAutomatedDiscoveryConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetautomateddiscoveryconfigurationresponse"></a>
<a id="schema_GetAutomatedDiscoveryConfigurationResponse"></a>
<a id="tocSgetautomateddiscoveryconfigurationresponse"></a>
<a id="tocsgetautomateddiscoveryconfigurationresponse"></a>

```json
{
  "classificationScopeId": {},
  "disabledAt": {},
  "firstEnabledAt": {},
  "lastUpdatedAt": {},
  "sensitivityInspectionTemplateId": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classificationScopeId|object|false|none|none|
|disabledAt|object|false|none|none|
|firstEnabledAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|sensitivityInspectionTemplateId|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_GetBucketStatisticsResponse">GetBucketStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketstatisticsresponse"></a>
<a id="schema_GetBucketStatisticsResponse"></a>
<a id="tocSgetbucketstatisticsresponse"></a>
<a id="tocsgetbucketstatisticsresponse"></a>

```json
{
  "bucketCount": {},
  "bucketCountByEffectivePermission": {
    "publiclyAccessible": {},
    "publiclyReadable": {},
    "publiclyWritable": {},
    "unknown": {}
  },
  "bucketCountByEncryptionType": {
    "kmsManaged": {},
    "s3Managed": {},
    "unencrypted": {},
    "unknown": {}
  },
  "bucketCountByObjectEncryptionRequirement": {
    "allowsUnencryptedObjectUploads": {},
    "deniesUnencryptedObjectUploads": {},
    "unknown": {}
  },
  "bucketCountBySharedAccessType": {
    "external": {},
    "internal": {},
    "notShared": {},
    "unknown": {}
  },
  "bucketStatisticsBySensitivity": {
    "classificationError": {
      "classifiableSizeInBytes": {},
      "publiclyAccessibleCount": {},
      "totalCount": {},
      "totalSizeInBytes": {}
    },
    "notClassified": {
      "classifiableSizeInBytes": {},
      "publiclyAccessibleCount": {},
      "totalCount": {},
      "totalSizeInBytes": {}
    },
    "notSensitive": {
      "classifiableSizeInBytes": {},
      "publiclyAccessibleCount": {},
      "totalCount": {},
      "totalSizeInBytes": {}
    },
    "sensitive": {
      "classifiableSizeInBytes": {},
      "publiclyAccessibleCount": {},
      "totalCount": {},
      "totalSizeInBytes": {}
    }
  },
  "classifiableObjectCount": {},
  "classifiableSizeInBytes": {},
  "lastUpdated": {},
  "objectCount": {},
  "sizeInBytes": {},
  "sizeInBytesCompressed": {},
  "unclassifiableObjectCount": {
    "fileType": {},
    "storageClass": {},
    "total": {}
  },
  "unclassifiableObjectSizeInBytes": {
    "fileType": {},
    "storageClass": {},
    "total": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketCount|object|false|none|none|
|bucketCountByEffectivePermission|object|false|none|none|
|bucketCountByEncryptionType|object|false|none|none|
|bucketCountByObjectEncryptionRequirement|object|false|none|none|
|bucketCountBySharedAccessType|object|false|none|none|
|bucketStatisticsBySensitivity|object|false|none|none|
|classifiableObjectCount|object|false|none|none|
|classifiableSizeInBytes|object|false|none|none|
|lastUpdated|object|false|none|none|
|objectCount|object|false|none|none|
|sizeInBytes|object|false|none|none|
|sizeInBytesCompressed|object|false|none|none|
|unclassifiableObjectCount|object|false|none|none|
|unclassifiableObjectSizeInBytes|object|false|none|none|

<h2 id="tocS_GetClassificationExportConfigurationResponse">GetClassificationExportConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetclassificationexportconfigurationresponse"></a>
<a id="schema_GetClassificationExportConfigurationResponse"></a>
<a id="tocSgetclassificationexportconfigurationresponse"></a>
<a id="tocsgetclassificationexportconfigurationresponse"></a>

```json
{
  "configuration": {
    "s3Destination": {
      "bucketName": {},
      "keyPrefix": {},
      "kmsKeyArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|false|none|none|

<h2 id="tocS_GetClassificationScopeResponse">GetClassificationScopeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetclassificationscoperesponse"></a>
<a id="schema_GetClassificationScopeResponse"></a>
<a id="tocSgetclassificationscoperesponse"></a>
<a id="tocsgetclassificationscoperesponse"></a>

```json
{
  "id": {},
  "name": {},
  "s3": {
    "excludes": {
      "bucketNames": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|s3|object|false|none|none|

<h2 id="tocS_GetCustomDataIdentifierResponse">GetCustomDataIdentifierResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomdataidentifierresponse"></a>
<a id="schema_GetCustomDataIdentifierResponse"></a>
<a id="tocSgetcustomdataidentifierresponse"></a>
<a id="tocsgetcustomdataidentifierresponse"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "deleted": {},
  "description": {},
  "id": {},
  "ignoreWords": {},
  "keywords": {},
  "maximumMatchDistance": {},
  "name": {},
  "regex": {},
  "severityLevels": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|deleted|object|false|none|none|
|description|object|false|none|none|
|id|object|false|none|none|
|ignoreWords|object|false|none|none|
|keywords|object|false|none|none|
|maximumMatchDistance|object|false|none|none|
|name|object|false|none|none|
|regex|object|false|none|none|
|severityLevels|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetFindingStatisticsResponse">GetFindingStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingstatisticsresponse"></a>
<a id="schema_GetFindingStatisticsResponse"></a>
<a id="tocSgetfindingstatisticsresponse"></a>
<a id="tocsgetfindingstatisticsresponse"></a>

```json
{
  "countsByGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countsByGroup|object|false|none|none|

<h2 id="tocS_FindingStatisticsSortAttributeName">FindingStatisticsSortAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemafindingstatisticssortattributename"></a>
<a id="schema_FindingStatisticsSortAttributeName"></a>
<a id="tocSfindingstatisticssortattributename"></a>
<a id="tocsfindingstatisticssortattributename"></a>

```json
"groupKey"
```

The grouping to sort the results by. Valid values are:

<h2 id="tocS_GetFindingsResponse">GetFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingsresponse"></a>
<a id="schema_GetFindingsResponse"></a>
<a id="tocSgetfindingsresponse"></a>
<a id="tocsgetfindingsresponse"></a>

```json
{
  "findings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findings|object|false|none|none|

<h2 id="tocS_GetFindingsFilterResponse">GetFindingsFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingsfilterresponse"></a>
<a id="schema_GetFindingsFilterResponse"></a>
<a id="tocSgetfindingsfilterresponse"></a>
<a id="tocsgetfindingsfilterresponse"></a>

```json
{
  "action": {},
  "arn": {},
  "description": {},
  "findingCriteria": {
    "criterion": {
      "property1": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      },
      "property2": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      }
    }
  },
  "id": {},
  "name": {},
  "position": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|arn|object|false|none|none|
|description|object|false|none|none|
|findingCriteria|object|false|none|none|
|id|object|false|none|none|
|name|object|false|none|none|
|position|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetFindingsPublicationConfigurationResponse">GetFindingsPublicationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingspublicationconfigurationresponse"></a>
<a id="schema_GetFindingsPublicationConfigurationResponse"></a>
<a id="tocSgetfindingspublicationconfigurationresponse"></a>
<a id="tocsgetfindingspublicationconfigurationresponse"></a>

```json
{
  "securityHubConfiguration": {
    "publishClassificationFindings": {},
    "publishPolicyFindings": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|securityHubConfiguration|object|false|none|none|

<h2 id="tocS_GetInvitationsCountResponse">GetInvitationsCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinvitationscountresponse"></a>
<a id="schema_GetInvitationsCountResponse"></a>
<a id="tocSgetinvitationscountresponse"></a>
<a id="tocsgetinvitationscountresponse"></a>

```json
{
  "invitationsCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invitationsCount|object|false|none|none|

<h2 id="tocS_GetMacieSessionResponse">GetMacieSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmaciesessionresponse"></a>
<a id="schema_GetMacieSessionResponse"></a>
<a id="tocSgetmaciesessionresponse"></a>
<a id="tocsgetmaciesessionresponse"></a>

```json
{
  "createdAt": {},
  "findingPublishingFrequency": {},
  "serviceRole": {},
  "status": {},
  "updatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|object|false|none|none|
|findingPublishingFrequency|object|false|none|none|
|serviceRole|object|false|none|none|
|status|object|false|none|none|
|updatedAt|object|false|none|none|

<h2 id="tocS_GetMasterAccountResponse">GetMasterAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmasteraccountresponse"></a>
<a id="schema_GetMasterAccountResponse"></a>
<a id="tocSgetmasteraccountresponse"></a>
<a id="tocsgetmasteraccountresponse"></a>

```json
{
  "master": {
    "accountId": {},
    "invitationId": {},
    "invitedAt": {},
    "relationshipStatus": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|master|object|false|none|none|

<h2 id="tocS_GetMemberResponse">GetMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmemberresponse"></a>
<a id="schema_GetMemberResponse"></a>
<a id="tocSgetmemberresponse"></a>
<a id="tocsgetmemberresponse"></a>

```json
{
  "accountId": {},
  "administratorAccountId": {},
  "arn": {},
  "email": {},
  "invitedAt": {},
  "masterAccountId": {},
  "relationshipStatus": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "updatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|administratorAccountId|object|false|none|none|
|arn|object|false|none|none|
|email|object|false|none|none|
|invitedAt|object|false|none|none|
|masterAccountId|object|false|none|none|
|relationshipStatus|object|false|none|none|
|tags|object|false|none|none|
|updatedAt|object|false|none|none|

<h2 id="tocS_GetResourceProfileResponse">GetResourceProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceprofileresponse"></a>
<a id="schema_GetResourceProfileResponse"></a>
<a id="tocSgetresourceprofileresponse"></a>
<a id="tocsgetresourceprofileresponse"></a>

```json
{
  "profileUpdatedAt": {},
  "sensitivityScore": {},
  "sensitivityScoreOverridden": {},
  "statistics": {
    "totalBytesClassified": {},
    "totalDetections": {},
    "totalDetectionsSuppressed": {},
    "totalItemsClassified": {},
    "totalItemsSensitive": {},
    "totalItemsSkipped": {},
    "totalItemsSkippedInvalidEncryption": {},
    "totalItemsSkippedInvalidKms": {},
    "totalItemsSkippedPermissionDenied": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileUpdatedAt|object|false|none|none|
|sensitivityScore|object|false|none|none|
|sensitivityScoreOverridden|object|false|none|none|
|statistics|object|false|none|none|

<h2 id="tocS_GetRevealConfigurationResponse">GetRevealConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrevealconfigurationresponse"></a>
<a id="schema_GetRevealConfigurationResponse"></a>
<a id="tocSgetrevealconfigurationresponse"></a>
<a id="tocsgetrevealconfigurationresponse"></a>

```json
{
  "configuration": {
    "kmsKeyId": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|false|none|none|

<h2 id="tocS_GetSensitiveDataOccurrencesResponse">GetSensitiveDataOccurrencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsensitivedataoccurrencesresponse"></a>
<a id="schema_GetSensitiveDataOccurrencesResponse"></a>
<a id="tocSgetsensitivedataoccurrencesresponse"></a>
<a id="tocsgetsensitivedataoccurrencesresponse"></a>

```json
{
  "error": {},
  "sensitiveDataOccurrences": {
    "property1": [
      {
        "value": {}
      }
    ],
    "property2": [
      {
        "value": {}
      }
    ]
  },
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|sensitiveDataOccurrences|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_UnprocessableEntityException">UnprocessableEntityException</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessableentityexception"></a>
<a id="schema_UnprocessableEntityException"></a>
<a id="tocSunprocessableentityexception"></a>
<a id="tocsunprocessableentityexception"></a>

```json
null
```

<h2 id="tocS_GetSensitiveDataOccurrencesAvailabilityResponse">GetSensitiveDataOccurrencesAvailabilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsensitivedataoccurrencesavailabilityresponse"></a>
<a id="schema_GetSensitiveDataOccurrencesAvailabilityResponse"></a>
<a id="tocSgetsensitivedataoccurrencesavailabilityresponse"></a>
<a id="tocsgetsensitivedataoccurrencesavailabilityresponse"></a>

```json
{
  "code": {},
  "reasons": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|reasons|object|false|none|none|

<h2 id="tocS_GetSensitivityInspectionTemplateResponse">GetSensitivityInspectionTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsensitivityinspectiontemplateresponse"></a>
<a id="schema_GetSensitivityInspectionTemplateResponse"></a>
<a id="tocSgetsensitivityinspectiontemplateresponse"></a>
<a id="tocsgetsensitivityinspectiontemplateresponse"></a>

```json
{
  "description": {},
  "excludes": {
    "managedDataIdentifierIds": {}
  },
  "includes": {
    "allowListIds": {},
    "customDataIdentifierIds": {},
    "managedDataIdentifierIds": {}
  },
  "name": {},
  "sensitivityInspectionTemplateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|excludes|object|false|none|none|
|includes|object|false|none|none|
|name|object|false|none|none|
|sensitivityInspectionTemplateId|object|false|none|none|

<h2 id="tocS_GetUsageStatisticsResponse">GetUsageStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetusagestatisticsresponse"></a>
<a id="schema_GetUsageStatisticsResponse"></a>
<a id="tocSgetusagestatisticsresponse"></a>
<a id="tocsgetusagestatisticsresponse"></a>

```json
{
  "nextToken": {},
  "records": {},
  "timeRange": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|records|object|false|none|none|
|timeRange|object|false|none|none|

<h2 id="tocS_UsageStatisticsFilter">UsageStatisticsFilter</h2>
<!-- backwards compatibility -->
<a id="schemausagestatisticsfilter"></a>
<a id="schema_UsageStatisticsFilter"></a>
<a id="tocSusagestatisticsfilter"></a>
<a id="tocsusagestatisticsfilter"></a>

```json
{
  "comparator": {},
  "key": {},
  "values": {}
}
```

Specifies a condition for filtering the results of a query for quota and usage data for one or more Amazon Macie accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|object|false|none|none|
|key|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_UsageStatisticsSortKey">UsageStatisticsSortKey</h2>
<!-- backwards compatibility -->
<a id="schemausagestatisticssortkey"></a>
<a id="schema_UsageStatisticsSortKey"></a>
<a id="tocSusagestatisticssortkey"></a>
<a id="tocsusagestatisticssortkey"></a>

```json
"accountId"
```

The field to use to sort the results of a query for Amazon Macie account quotas and usage data. Valid values are:

<h2 id="tocS_GetUsageTotalsResponse">GetUsageTotalsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetusagetotalsresponse"></a>
<a id="schema_GetUsageTotalsResponse"></a>
<a id="tocSgetusagetotalsresponse"></a>
<a id="tocsgetusagetotalsresponse"></a>

```json
{
  "timeRange": {},
  "usageTotals": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeRange|object|false|none|none|
|usageTotals|object|false|none|none|

<h2 id="tocS_ListAllowListsResponse">ListAllowListsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistallowlistsresponse"></a>
<a id="schema_ListAllowListsResponse"></a>
<a id="tocSlistallowlistsresponse"></a>
<a id="tocslistallowlistsresponse"></a>

```json
{
  "allowLists": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowLists|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListClassificationJobsResponse">ListClassificationJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclassificationjobsresponse"></a>
<a id="schema_ListClassificationJobsResponse"></a>
<a id="tocSlistclassificationjobsresponse"></a>
<a id="tocslistclassificationjobsresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS___listOfListJobsFilterTerm">__listOfListJobsFilterTerm</h2>
<!-- backwards compatibility -->
<a id="schema__listoflistjobsfilterterm"></a>
<a id="schema___listOfListJobsFilterTerm"></a>
<a id="tocS__listoflistjobsfilterterm"></a>
<a id="tocs__listoflistjobsfilterterm"></a>

```json
[
  {
    "comparator": {},
    "key": {},
    "values": {}
  }
]
```

<h2 id="tocS_ListJobsSortAttributeName">ListJobsSortAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemalistjobssortattributename"></a>
<a id="schema_ListJobsSortAttributeName"></a>
<a id="tocSlistjobssortattributename"></a>
<a id="tocslistjobssortattributename"></a>

```json
"createdAt"
```

The property to sort the results by. Valid values are:

<h2 id="tocS_ListClassificationScopesResponse">ListClassificationScopesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclassificationscopesresponse"></a>
<a id="schema_ListClassificationScopesResponse"></a>
<a id="tocSlistclassificationscopesresponse"></a>
<a id="tocslistclassificationscopesresponse"></a>

```json
{
  "classificationScopes": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classificationScopes|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListCustomDataIdentifiersResponse">ListCustomDataIdentifiersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomdataidentifiersresponse"></a>
<a id="schema_ListCustomDataIdentifiersResponse"></a>
<a id="tocSlistcustomdataidentifiersresponse"></a>
<a id="tocslistcustomdataidentifiersresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListFindingsResponse">ListFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfindingsresponse"></a>
<a id="schema_ListFindingsResponse"></a>
<a id="tocSlistfindingsresponse"></a>
<a id="tocslistfindingsresponse"></a>

```json
{
  "findingIds": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findingIds|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListFindingsFiltersResponse">ListFindingsFiltersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfindingsfiltersresponse"></a>
<a id="schema_ListFindingsFiltersResponse"></a>
<a id="tocSlistfindingsfiltersresponse"></a>
<a id="tocslistfindingsfiltersresponse"></a>

```json
{
  "findingsFilterListItems": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findingsFilterListItems|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListInvitationsResponse">ListInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinvitationsresponse"></a>
<a id="schema_ListInvitationsResponse"></a>
<a id="tocSlistinvitationsresponse"></a>
<a id="tocslistinvitationsresponse"></a>

```json
{
  "invitations": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invitations|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListManagedDataIdentifiersResponse">ListManagedDataIdentifiersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmanageddataidentifiersresponse"></a>
<a id="schema_ListManagedDataIdentifiersResponse"></a>
<a id="tocSlistmanageddataidentifiersresponse"></a>
<a id="tocslistmanageddataidentifiersresponse"></a>

```json
{
  "items": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListMembersResponse">ListMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmembersresponse"></a>
<a id="schema_ListMembersResponse"></a>
<a id="tocSlistmembersresponse"></a>
<a id="tocslistmembersresponse"></a>

```json
{
  "members": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListOrganizationAdminAccountsResponse">ListOrganizationAdminAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationadminaccountsresponse"></a>
<a id="schema_ListOrganizationAdminAccountsResponse"></a>
<a id="tocSlistorganizationadminaccountsresponse"></a>
<a id="tocslistorganizationadminaccountsresponse"></a>

```json
{
  "adminAccounts": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminAccounts|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListResourceProfileArtifactsResponse">ListResourceProfileArtifactsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourceprofileartifactsresponse"></a>
<a id="schema_ListResourceProfileArtifactsResponse"></a>
<a id="tocSlistresourceprofileartifactsresponse"></a>
<a id="tocslistresourceprofileartifactsresponse"></a>

```json
{
  "artifacts": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifacts|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListResourceProfileDetectionsResponse">ListResourceProfileDetectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourceprofiledetectionsresponse"></a>
<a id="schema_ListResourceProfileDetectionsResponse"></a>
<a id="tocSlistresourceprofiledetectionsresponse"></a>
<a id="tocslistresourceprofiledetectionsresponse"></a>

```json
{
  "detections": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detections|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSensitivityInspectionTemplatesResponse">ListSensitivityInspectionTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsensitivityinspectiontemplatesresponse"></a>
<a id="schema_ListSensitivityInspectionTemplatesResponse"></a>
<a id="tocSlistsensitivityinspectiontemplatesresponse"></a>
<a id="tocslistsensitivityinspectiontemplatesresponse"></a>

```json
{
  "nextToken": {},
  "sensitivityInspectionTemplates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|sensitivityInspectionTemplates|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_PutClassificationExportConfigurationResponse">PutClassificationExportConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputclassificationexportconfigurationresponse"></a>
<a id="schema_PutClassificationExportConfigurationResponse"></a>
<a id="tocSputclassificationexportconfigurationresponse"></a>
<a id="tocsputclassificationexportconfigurationresponse"></a>

```json
{
  "configuration": {
    "s3Destination": {
      "bucketName": {},
      "keyPrefix": {},
      "kmsKeyArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|false|none|none|

<h2 id="tocS_S3Destination">S3Destination</h2>
<!-- backwards compatibility -->
<a id="schemas3destination"></a>
<a id="schema_S3Destination"></a>
<a id="tocSs3destination"></a>
<a id="tocss3destination"></a>

```json
{
  "bucketName": {},
  "keyPrefix": {},
  "kmsKeyArn": {}
}
```

Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|keyPrefix|object|false|none|none|
|kmsKeyArn|object|true|none|none|

<h2 id="tocS_PutFindingsPublicationConfigurationResponse">PutFindingsPublicationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputfindingspublicationconfigurationresponse"></a>
<a id="schema_PutFindingsPublicationConfigurationResponse"></a>
<a id="tocSputfindingspublicationconfigurationresponse"></a>
<a id="tocsputfindingspublicationconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS___boolean">__boolean</h2>
<!-- backwards compatibility -->
<a id="schema__boolean"></a>
<a id="schema___boolean"></a>
<a id="tocS__boolean"></a>
<a id="tocs__boolean"></a>

```json
true
```

<h2 id="tocS_SearchResourcesResponse">SearchResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcesresponse"></a>
<a id="schema_SearchResourcesResponse"></a>
<a id="tocSsearchresourcesresponse"></a>
<a id="tocssearchresourcesresponse"></a>

```json
{
  "matchingResources": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchingResources|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SearchResourcesCriteriaBlock">SearchResourcesCriteriaBlock</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcescriteriablock"></a>
<a id="schema_SearchResourcesCriteriaBlock"></a>
<a id="tocSsearchresourcescriteriablock"></a>
<a id="tocssearchresourcescriteriablock"></a>

```json
{
  "and": {}
}
```

Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|and|object|false|none|none|

<h2 id="tocS_SearchResourcesSortAttributeName">SearchResourcesSortAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcessortattributename"></a>
<a id="schema_SearchResourcesSortAttributeName"></a>
<a id="tocSsearchresourcessortattributename"></a>
<a id="tocssearchresourcessortattributename"></a>

```json
"ACCOUNT_ID"
```

The property to sort the query results by. Valid values are:

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TestCustomDataIdentifierResponse">TestCustomDataIdentifierResponse</h2>
<!-- backwards compatibility -->
<a id="schematestcustomdataidentifierresponse"></a>
<a id="schema_TestCustomDataIdentifierResponse"></a>
<a id="tocStestcustomdataidentifierresponse"></a>
<a id="tocstestcustomdataidentifierresponse"></a>

```json
{
  "matchCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchCount|object|false|none|none|

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateAllowListResponse">UpdateAllowListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateallowlistresponse"></a>
<a id="schema_UpdateAllowListResponse"></a>
<a id="tocSupdateallowlistresponse"></a>
<a id="tocsupdateallowlistresponse"></a>

```json
{
  "arn": {},
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|id|object|false|none|none|

<h2 id="tocS_UpdateAutomatedDiscoveryConfigurationResponse">UpdateAutomatedDiscoveryConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateautomateddiscoveryconfigurationresponse"></a>
<a id="schema_UpdateAutomatedDiscoveryConfigurationResponse"></a>
<a id="tocSupdateautomateddiscoveryconfigurationresponse"></a>
<a id="tocsupdateautomateddiscoveryconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateClassificationJobResponse">UpdateClassificationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclassificationjobresponse"></a>
<a id="schema_UpdateClassificationJobResponse"></a>
<a id="tocSupdateclassificationjobresponse"></a>
<a id="tocsupdateclassificationjobresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateClassificationScopeResponse">UpdateClassificationScopeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclassificationscoperesponse"></a>
<a id="schema_UpdateClassificationScopeResponse"></a>
<a id="tocSupdateclassificationscoperesponse"></a>
<a id="tocsupdateclassificationscoperesponse"></a>

```json
{}
```

<h2 id="tocS_S3ClassificationScopeExclusionUpdate">S3ClassificationScopeExclusionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemas3classificationscopeexclusionupdate"></a>
<a id="schema_S3ClassificationScopeExclusionUpdate"></a>
<a id="tocSs3classificationscopeexclusionupdate"></a>
<a id="tocss3classificationscopeexclusionupdate"></a>

```json
{
  "bucketNames": {},
  "operation": {}
}
```

Specifies S3 buckets to add or remove from the exclusion list defined by the classification scope for an Amazon Macie account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketNames|object|true|none|none|
|operation|object|true|none|none|

<h2 id="tocS_UpdateFindingsFilterResponse">UpdateFindingsFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefindingsfilterresponse"></a>
<a id="schema_UpdateFindingsFilterResponse"></a>
<a id="tocSupdatefindingsfilterresponse"></a>
<a id="tocsupdatefindingsfilterresponse"></a>

```json
{
  "arn": {},
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|id|object|false|none|none|

<h2 id="tocS_UpdateMacieSessionResponse">UpdateMacieSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemaciesessionresponse"></a>
<a id="schema_UpdateMacieSessionResponse"></a>
<a id="tocSupdatemaciesessionresponse"></a>
<a id="tocsupdatemaciesessionresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateMemberSessionResponse">UpdateMemberSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemembersessionresponse"></a>
<a id="schema_UpdateMemberSessionResponse"></a>
<a id="tocSupdatemembersessionresponse"></a>
<a id="tocsupdatemembersessionresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateOrganizationConfigurationResponse">UpdateOrganizationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorganizationconfigurationresponse"></a>
<a id="schema_UpdateOrganizationConfigurationResponse"></a>
<a id="tocSupdateorganizationconfigurationresponse"></a>
<a id="tocsupdateorganizationconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateResourceProfileResponse">UpdateResourceProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourceprofileresponse"></a>
<a id="schema_UpdateResourceProfileResponse"></a>
<a id="tocSupdateresourceprofileresponse"></a>
<a id="tocsupdateresourceprofileresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateResourceProfileDetectionsResponse">UpdateResourceProfileDetectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourceprofiledetectionsresponse"></a>
<a id="schema_UpdateResourceProfileDetectionsResponse"></a>
<a id="tocSupdateresourceprofiledetectionsresponse"></a>
<a id="tocsupdateresourceprofiledetectionsresponse"></a>

```json
{}
```

<h2 id="tocS_SuppressDataIdentifier">SuppressDataIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemasuppressdataidentifier"></a>
<a id="schema_SuppressDataIdentifier"></a>
<a id="tocSsuppressdataidentifier"></a>
<a id="tocssuppressdataidentifier"></a>

```json
{
  "id": {},
  "type": {}
}
```

Specifies a custom data identifier or managed data identifier that detected a type of sensitive data to start excluding or including in an S3 bucket's sensitivity score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_UpdateRevealConfigurationResponse">UpdateRevealConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterevealconfigurationresponse"></a>
<a id="schema_UpdateRevealConfigurationResponse"></a>
<a id="tocSupdaterevealconfigurationresponse"></a>
<a id="tocsupdaterevealconfigurationresponse"></a>

```json
{
  "configuration": {
    "kmsKeyId": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|false|none|none|

<h2 id="tocS___stringMin1Max2048">__stringMin1Max2048</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin1max2048"></a>
<a id="schema___stringMin1Max2048"></a>
<a id="tocS__stringmin1max2048"></a>
<a id="tocs__stringmin1max2048"></a>

```json
"string"
```

<h2 id="tocS_RevealStatus">RevealStatus</h2>
<!-- backwards compatibility -->
<a id="schemarevealstatus"></a>
<a id="schema_RevealStatus"></a>
<a id="tocSrevealstatus"></a>
<a id="tocsrevealstatus"></a>

```json
"ENABLED"
```

The status of the configuration for retrieving occurrences of sensitive data reported by findings. Valid values are:

<h2 id="tocS_UpdateSensitivityInspectionTemplateResponse">UpdateSensitivityInspectionTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesensitivityinspectiontemplateresponse"></a>
<a id="schema_UpdateSensitivityInspectionTemplateResponse"></a>
<a id="tocSupdatesensitivityinspectiontemplateresponse"></a>
<a id="tocsupdatesensitivityinspectiontemplateresponse"></a>

```json
{}
```

<h2 id="tocS___listOf__string">__listOf__string</h2>
<!-- backwards compatibility -->
<a id="schema__listof__string"></a>
<a id="schema___listOf__string"></a>
<a id="tocS__listof__string"></a>
<a id="tocs__listof__string"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AcceptInvitationRequest">AcceptInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptinvitationrequest"></a>
<a id="schema_AcceptInvitationRequest"></a>
<a id="tocSacceptinvitationrequest"></a>
<a id="tocsacceptinvitationrequest"></a>

```json
{
  "administratorAccountId": {},
  "invitationId": {},
  "masterAccount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administratorAccountId|object|false|none|none|
|invitationId|object|true|none|none|
|masterAccount|object|false|none|none|

<h2 id="tocS_AccessControlList">AccessControlList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrollist"></a>
<a id="schema_AccessControlList"></a>
<a id="tocSaccesscontrollist"></a>
<a id="tocsaccesscontrollist"></a>

```json
{
  "allowsPublicReadAccess": {},
  "allowsPublicWriteAccess": {}
}
```

Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowsPublicReadAccess|object|false|none|none|
|allowsPublicWriteAccess|object|false|none|none|

<h2 id="tocS_AccountDetail">AccountDetail</h2>
<!-- backwards compatibility -->
<a id="schemaaccountdetail"></a>
<a id="schema_AccountDetail"></a>
<a id="tocSaccountdetail"></a>
<a id="tocsaccountdetail"></a>

```json
{
  "accountId": {},
  "email": {}
}
```

Specifies the details of an account to associate with an Amazon Macie administrator account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|true|none|none|
|email|object|true|none|none|

<h2 id="tocS_BlockPublicAccess">BlockPublicAccess</h2>
<!-- backwards compatibility -->
<a id="schemablockpublicaccess"></a>
<a id="schema_BlockPublicAccess"></a>
<a id="tocSblockpublicaccess"></a>
<a id="tocsblockpublicaccess"></a>

```json
{
  "blockPublicAcls": {},
  "blockPublicPolicy": {},
  "ignorePublicAcls": {},
  "restrictPublicBuckets": {}
}
```

Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html">Blocking public access to your Amazon S3 storage</a> in the <i>Amazon Simple Storage Service User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockPublicAcls|object|false|none|none|
|blockPublicPolicy|object|false|none|none|
|ignorePublicAcls|object|false|none|none|
|restrictPublicBuckets|object|false|none|none|

<h2 id="tocS_AccountLevelPermissions">AccountLevelPermissions</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlevelpermissions"></a>
<a id="schema_AccountLevelPermissions"></a>
<a id="tocSaccountlevelpermissions"></a>
<a id="tocsaccountlevelpermissions"></a>

```json
{
  "blockPublicAccess": {
    "blockPublicAcls": {},
    "blockPublicPolicy": {},
    "ignorePublicAcls": {},
    "restrictPublicBuckets": {}
  }
}
```

Provides information about the account-level permissions settings that apply to an S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockPublicAccess|object|false|none|none|

<h2 id="tocS_AdminStatus">AdminStatus</h2>
<!-- backwards compatibility -->
<a id="schemaadminstatus"></a>
<a id="schema_AdminStatus"></a>
<a id="tocSadminstatus"></a>
<a id="tocsadminstatus"></a>

```json
"ENABLED"
```

The current status of an account as the delegated Amazon Macie administrator account for an organization in Organizations. Possible values are:

<h2 id="tocS_AdminAccount">AdminAccount</h2>
<!-- backwards compatibility -->
<a id="schemaadminaccount"></a>
<a id="schema_AdminAccount"></a>
<a id="tocSadminaccount"></a>
<a id="tocsadminaccount"></a>

```json
{
  "accountId": {},
  "status": {}
}
```

Provides information about the delegated Amazon Macie administrator account for an organization in Organizations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_AllowListCriteria">AllowListCriteria</h2>
<!-- backwards compatibility -->
<a id="schemaallowlistcriteria"></a>
<a id="schema_AllowListCriteria"></a>
<a id="tocSallowlistcriteria"></a>
<a id="tocsallowlistcriteria"></a>

```json
{
  "regex": {},
  "s3WordsList": {
    "bucketName": {},
    "objectKey": {}
  }
}
```

Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regex|object|false|none|none|
|s3WordsList|object|false|none|none|

<h2 id="tocS_AllowListStatusCode">AllowListStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaallowliststatuscode"></a>
<a id="schema_AllowListStatusCode"></a>
<a id="tocSallowliststatuscode"></a>
<a id="tocsallowliststatuscode"></a>

```json
"OK"
```

Indicates the current status of an allow list. Depending on the type of criteria that the list specifies, possible values are:

<h2 id="tocS___stringMin1Max1024PatternSS">__stringMin1Max1024PatternSS</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin1max1024patternss"></a>
<a id="schema___stringMin1Max1024PatternSS"></a>
<a id="tocS__stringmin1max1024patternss"></a>
<a id="tocs__stringmin1max1024patternss"></a>

```json
"string"
```

<h2 id="tocS_AllowListStatus">AllowListStatus</h2>
<!-- backwards compatibility -->
<a id="schemaallowliststatus"></a>
<a id="schema_AllowListStatus"></a>
<a id="tocSallowliststatus"></a>
<a id="tocsallowliststatus"></a>

```json
{
  "code": {},
  "description": {}
}
```

Provides information about the current status of an allow list, which indicates whether Amazon Macie can access and use the list's criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|true|none|none|
|description|object|false|none|none|

<h2 id="tocS___stringMin71Max89PatternArnAwsAwsCnAwsUsGovMacie2AZ19920D12AllowListAZ0922">__stringMin71Max89PatternArnAwsAwsCnAwsUsGovMacie2AZ19920D12AllowListAZ0922</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin71max89patternarnawsawscnawsusgovmacie2az19920d12allowlistaz0922"></a>
<a id="schema___stringMin71Max89PatternArnAwsAwsCnAwsUsGovMacie2AZ19920D12AllowListAZ0922"></a>
<a id="tocS__stringmin71max89patternarnawsawscnawsusgovmacie2az19920d12allowlistaz0922"></a>
<a id="tocs__stringmin71max89patternarnawsawscnawsusgovmacie2az19920d12allowlistaz0922"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstringstrin"
```

<h2 id="tocS___timestampIso8601">__timestampIso8601</h2>
<!-- backwards compatibility -->
<a id="schema__timestampiso8601"></a>
<a id="schema___timestampIso8601"></a>
<a id="tocS__timestampiso8601"></a>
<a id="tocs__timestampiso8601"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS___stringMin22Max22PatternAZ0922">__stringMin22Max22PatternAZ0922</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin22max22patternaz0922"></a>
<a id="schema___stringMin22Max22PatternAZ0922"></a>
<a id="tocS__stringmin22max22patternaz0922"></a>
<a id="tocs__stringmin22max22patternaz0922"></a>

```json
"stringstringstringstri"
```

<h2 id="tocS___stringMin1Max128Pattern">__stringMin1Max128Pattern</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin1max128pattern"></a>
<a id="schema___stringMin1Max128Pattern"></a>
<a id="tocS__stringmin1max128pattern"></a>
<a id="tocs__stringmin1max128pattern"></a>

```json
"string"
```

<h2 id="tocS_AllowListSummary">AllowListSummary</h2>
<!-- backwards compatibility -->
<a id="schemaallowlistsummary"></a>
<a id="schema_AllowListSummary"></a>
<a id="tocSallowlistsummary"></a>
<a id="tocsallowlistsummary"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "description": {},
  "id": {},
  "name": {},
  "updatedAt": {}
}
```

Provides a subset of information about an allow list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|description|object|false|none|none|
|id|object|false|none|none|
|name|object|false|none|none|
|updatedAt|object|false|none|none|

<h2 id="tocS_AllowsUnencryptedObjectUploads">AllowsUnencryptedObjectUploads</h2>
<!-- backwards compatibility -->
<a id="schemaallowsunencryptedobjectuploads"></a>
<a id="schema_AllowsUnencryptedObjectUploads"></a>
<a id="tocSallowsunencryptedobjectuploads"></a>
<a id="tocsallowsunencryptedobjectuploads"></a>

```json
"TRUE"
```

<h2 id="tocS_ApiCallDetails">ApiCallDetails</h2>
<!-- backwards compatibility -->
<a id="schemaapicalldetails"></a>
<a id="schema_ApiCallDetails"></a>
<a id="tocSapicalldetails"></a>
<a id="tocsapicalldetails"></a>

```json
{
  "api": {},
  "apiServiceName": {},
  "firstSeen": {},
  "lastSeen": {}
}
```

Provides information about an API operation that an entity invoked for an affected resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|object|false|none|none|
|apiServiceName|object|false|none|none|
|firstSeen|object|false|none|none|
|lastSeen|object|false|none|none|

<h2 id="tocS_SessionContext">SessionContext</h2>
<!-- backwards compatibility -->
<a id="schemasessioncontext"></a>
<a id="schema_SessionContext"></a>
<a id="tocSsessioncontext"></a>
<a id="tocssessioncontext"></a>

```json
{
  "attributes": {
    "creationDate": {},
    "mfaAuthenticated": {}
  },
  "sessionIssuer": {
    "accountId": {},
    "arn": {},
    "principalId": {},
    "type": {},
    "userName": {}
  }
}
```

Provides information about a session that was created for an entity that performed an action by using temporary security credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|sessionIssuer|object|false|none|none|

<h2 id="tocS_AssumedRole">AssumedRole</h2>
<!-- backwards compatibility -->
<a id="schemaassumedrole"></a>
<a id="schema_AssumedRole"></a>
<a id="tocSassumedrole"></a>
<a id="tocsassumedrole"></a>

```json
{
  "accessKeyId": {},
  "accountId": {},
  "arn": {},
  "principalId": {},
  "sessionContext": {
    "attributes": {
      "creationDate": {},
      "mfaAuthenticated": {}
    },
    "sessionIssuer": {
      "accountId": {},
      "arn": {},
      "principalId": {},
      "type": {},
      "userName": {}
    }
  }
}
```

Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the AssumeRole operation of the Security Token Service (STS) API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyId|object|false|none|none|
|accountId|object|false|none|none|
|arn|object|false|none|none|
|principalId|object|false|none|none|
|sessionContext|object|false|none|none|

<h2 id="tocS_AutomatedDiscoveryStatus">AutomatedDiscoveryStatus</h2>
<!-- backwards compatibility -->
<a id="schemaautomateddiscoverystatus"></a>
<a id="schema_AutomatedDiscoveryStatus"></a>
<a id="tocSautomateddiscoverystatus"></a>
<a id="tocsautomateddiscoverystatus"></a>

```json
"ENABLED"
```

The status of the automated sensitive data discovery configuration for an Amazon Macie account. Valid values are:

<h2 id="tocS_AvailabilityCode">AvailabilityCode</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilitycode"></a>
<a id="schema_AvailabilityCode"></a>
<a id="tocSavailabilitycode"></a>
<a id="tocsavailabilitycode"></a>

```json
"AVAILABLE"
```

Specifies whether occurrences of sensitive data can be retrieved for a finding. Possible values are:

<h2 id="tocS_AwsAccount">AwsAccount</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccount"></a>
<a id="schema_AwsAccount"></a>
<a id="tocSawsaccount"></a>
<a id="tocsawsaccount"></a>

```json
{
  "accountId": {},
  "principalId": {}
}
```

Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for an Amazon Web Services account other than your own account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|principalId|object|false|none|none|

<h2 id="tocS_AwsService">AwsService</h2>
<!-- backwards compatibility -->
<a id="schemaawsservice"></a>
<a id="schema_AwsService"></a>
<a id="tocSawsservice"></a>
<a id="tocsawsservice"></a>

```json
{
  "invokedBy": {}
}
```

Provides information about an Amazon Web Service that performed an action on an affected resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invokedBy|object|false|none|none|

<h2 id="tocS_BatchGetCustomDataIdentifierSummary">BatchGetCustomDataIdentifierSummary</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetcustomdataidentifiersummary"></a>
<a id="schema_BatchGetCustomDataIdentifierSummary"></a>
<a id="tocSbatchgetcustomdataidentifiersummary"></a>
<a id="tocsbatchgetcustomdataidentifiersummary"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "deleted": {},
  "description": {},
  "id": {},
  "name": {}
}
```

Provides information about a custom data identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|deleted|object|false|none|none|
|description|object|false|none|none|
|id|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_BatchGetCustomDataIdentifiersRequest">BatchGetCustomDataIdentifiersRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetcustomdataidentifiersrequest"></a>
<a id="schema_BatchGetCustomDataIdentifiersRequest"></a>
<a id="tocSbatchgetcustomdataidentifiersrequest"></a>
<a id="tocsbatchgetcustomdataidentifiersrequest"></a>

```json
{
  "ids": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|object|false|none|none|

<h2 id="tocS___listOfBatchGetCustomDataIdentifierSummary">__listOfBatchGetCustomDataIdentifierSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofbatchgetcustomdataidentifiersummary"></a>
<a id="schema___listOfBatchGetCustomDataIdentifierSummary"></a>
<a id="tocS__listofbatchgetcustomdataidentifiersummary"></a>
<a id="tocs__listofbatchgetcustomdataidentifiersummary"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "deleted": {},
    "description": {},
    "id": {},
    "name": {}
  }
]
```

<h2 id="tocS___long">__long</h2>
<!-- backwards compatibility -->
<a id="schema__long"></a>
<a id="schema___long"></a>
<a id="tocS__long"></a>
<a id="tocs__long"></a>

```json
0
```

<h2 id="tocS_BucketCountByEffectivePermission">BucketCountByEffectivePermission</h2>
<!-- backwards compatibility -->
<a id="schemabucketcountbyeffectivepermission"></a>
<a id="schema_BucketCountByEffectivePermission"></a>
<a id="tocSbucketcountbyeffectivepermission"></a>
<a id="tocsbucketcountbyeffectivepermission"></a>

```json
{
  "publiclyAccessible": {},
  "publiclyReadable": {},
  "publiclyWritable": {},
  "unknown": {}
}
```

Provides information about the number of S3 buckets that are publicly accessible due to a combination of permissions settings for each bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publiclyAccessible|object|false|none|none|
|publiclyReadable|object|false|none|none|
|publiclyWritable|object|false|none|none|
|unknown|object|false|none|none|

<h2 id="tocS_BucketCountByEncryptionType">BucketCountByEncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemabucketcountbyencryptiontype"></a>
<a id="schema_BucketCountByEncryptionType"></a>
<a id="tocSbucketcountbyencryptiontype"></a>
<a id="tocsbucketcountbyencryptiontype"></a>

```json
{
  "kmsManaged": {},
  "s3Managed": {},
  "unencrypted": {},
  "unknown": {}
}
```

Provides information about the number of S3 buckets whose settings do or don't specify default server-side encryption behavior for objects that are added to the buckets. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsManaged|object|false|none|none|
|s3Managed|object|false|none|none|
|unencrypted|object|false|none|none|
|unknown|object|false|none|none|

<h2 id="tocS_BucketCountBySharedAccessType">BucketCountBySharedAccessType</h2>
<!-- backwards compatibility -->
<a id="schemabucketcountbysharedaccesstype"></a>
<a id="schema_BucketCountBySharedAccessType"></a>
<a id="tocSbucketcountbysharedaccesstype"></a>
<a id="tocsbucketcountbysharedaccesstype"></a>

```json
{
  "external": {},
  "internal": {},
  "notShared": {},
  "unknown": {}
}
```

Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts, Amazon CloudFront origin access identities (OAIs), or CloudFront origin access controls (OACs). In this data, an <i>Amazon Macie organization</i> is defined as a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external|object|false|none|none|
|internal|object|false|none|none|
|notShared|object|false|none|none|
|unknown|object|false|none|none|

<h2 id="tocS_BucketCountPolicyAllowsUnencryptedObjectUploads">BucketCountPolicyAllowsUnencryptedObjectUploads</h2>
<!-- backwards compatibility -->
<a id="schemabucketcountpolicyallowsunencryptedobjectuploads"></a>
<a id="schema_BucketCountPolicyAllowsUnencryptedObjectUploads"></a>
<a id="tocSbucketcountpolicyallowsunencryptedobjectuploads"></a>
<a id="tocsbucketcountpolicyallowsunencryptedobjectuploads"></a>

```json
{
  "allowsUnencryptedObjectUploads": {},
  "deniesUnencryptedObjectUploads": {},
  "unknown": {}
}
```

Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are added to the buckets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowsUnencryptedObjectUploads|object|false|none|none|
|deniesUnencryptedObjectUploads|object|false|none|none|
|unknown|object|false|none|none|

<h2 id="tocS_BucketCriteria">BucketCriteria</h2>
<!-- backwards compatibility -->
<a id="schemabucketcriteria"></a>
<a id="schema_BucketCriteria"></a>
<a id="tocSbucketcriteria"></a>
<a id="tocsbucketcriteria"></a>

```json
{
  "property1": {
    "eq": {},
    "gt": {},
    "gte": {},
    "lt": {},
    "lte": {},
    "neq": {},
    "prefix": {}
  },
  "property2": {
    "eq": {},
    "gt": {},
    "gte": {},
    "lt": {},
    "lte": {},
    "neq": {},
    "prefix": {}
  }
}
```

Specifies, as a map, one or more property-based conditions that filter the results of a query for information about S3 buckets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[BucketCriteriaAdditionalProperties](#schemabucketcriteriaadditionalproperties)|false|none|Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.|

<h2 id="tocS_BucketPolicy">BucketPolicy</h2>
<!-- backwards compatibility -->
<a id="schemabucketpolicy"></a>
<a id="schema_BucketPolicy"></a>
<a id="tocSbucketpolicy"></a>
<a id="tocsbucketpolicy"></a>

```json
{
  "allowsPublicReadAccess": {},
  "allowsPublicWriteAccess": {}
}
```

Provides information about the permissions settings of the bucket policy for an S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowsPublicReadAccess|object|false|none|none|
|allowsPublicWriteAccess|object|false|none|none|

<h2 id="tocS_BucketLevelPermissions">BucketLevelPermissions</h2>
<!-- backwards compatibility -->
<a id="schemabucketlevelpermissions"></a>
<a id="schema_BucketLevelPermissions"></a>
<a id="tocSbucketlevelpermissions"></a>
<a id="tocsbucketlevelpermissions"></a>

```json
{
  "accessControlList": {
    "allowsPublicReadAccess": {},
    "allowsPublicWriteAccess": {}
  },
  "blockPublicAccess": {
    "blockPublicAcls": {},
    "blockPublicPolicy": {},
    "ignorePublicAcls": {},
    "restrictPublicBuckets": {}
  },
  "bucketPolicy": {
    "allowsPublicReadAccess": {},
    "allowsPublicWriteAccess": {}
  }
}
```

Provides information about the bucket-level permissions settings for an S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessControlList|object|false|none|none|
|blockPublicAccess|object|false|none|none|
|bucketPolicy|object|false|none|none|

<h2 id="tocS_BucketMetadataErrorCode">BucketMetadataErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemabucketmetadataerrorcode"></a>
<a id="schema_BucketMetadataErrorCode"></a>
<a id="tocSbucketmetadataerrorcode"></a>
<a id="tocsbucketmetadataerrorcode"></a>

```json
"ACCESS_DENIED"
```

The error code for an error that prevented Amazon Macie from retrieving and processing metadata from Amazon S3 for an S3 bucket and the bucket's objects.

<h2 id="tocS_JobDetails">JobDetails</h2>
<!-- backwards compatibility -->
<a id="schemajobdetails"></a>
<a id="schema_JobDetails"></a>
<a id="tocSjobdetails"></a>
<a id="tocsjobdetails"></a>

```json
{
  "isDefinedInJob": {},
  "isMonitoredByJob": {},
  "lastJobId": {},
  "lastJobRunTime": {}
}
```

Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isDefinedInJob|object|false|none|none|
|isMonitoredByJob|object|false|none|none|
|lastJobId|object|false|none|none|
|lastJobRunTime|object|false|none|none|

<h2 id="tocS_ObjectCountByEncryptionType">ObjectCountByEncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemaobjectcountbyencryptiontype"></a>
<a id="schema_ObjectCountByEncryptionType"></a>
<a id="tocSobjectcountbyencryptiontype"></a>
<a id="tocsobjectcountbyencryptiontype"></a>

```json
{
  "customerManaged": {},
  "kmsManaged": {},
  "s3Managed": {},
  "unencrypted": {},
  "unknown": {}
}
```

Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerManaged|object|false|none|none|
|kmsManaged|object|false|none|none|
|s3Managed|object|false|none|none|
|unencrypted|object|false|none|none|
|unknown|object|false|none|none|

<h2 id="tocS_BucketPublicAccess">BucketPublicAccess</h2>
<!-- backwards compatibility -->
<a id="schemabucketpublicaccess"></a>
<a id="schema_BucketPublicAccess"></a>
<a id="tocSbucketpublicaccess"></a>
<a id="tocsbucketpublicaccess"></a>

```json
{
  "effectivePermission": {},
  "permissionConfiguration": {
    "accountLevelPermissions": {
      "blockPublicAccess": {
        "blockPublicAcls": {},
        "blockPublicPolicy": {},
        "ignorePublicAcls": {},
        "restrictPublicBuckets": {}
      }
    },
    "bucketLevelPermissions": {
      "accessControlList": {
        "allowsPublicReadAccess": {},
        "allowsPublicWriteAccess": {}
      },
      "blockPublicAccess": {
        "blockPublicAcls": {},
        "blockPublicPolicy": {},
        "ignorePublicAcls": {},
        "restrictPublicBuckets": {}
      },
      "bucketPolicy": {
        "allowsPublicReadAccess": {},
        "allowsPublicWriteAccess": {}
      }
    }
  }
}
```

Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effectivePermission|object|false|none|none|
|permissionConfiguration|object|false|none|none|

<h2 id="tocS_ReplicationDetails">ReplicationDetails</h2>
<!-- backwards compatibility -->
<a id="schemareplicationdetails"></a>
<a id="schema_ReplicationDetails"></a>
<a id="tocSreplicationdetails"></a>
<a id="tocsreplicationdetails"></a>

```json
{
  "replicated": {},
  "replicatedExternally": {},
  "replicationAccounts": {}
}
```

Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicated|object|false|none|none|
|replicatedExternally|object|false|none|none|
|replicationAccounts|object|false|none|none|

<h2 id="tocS___integer">__integer</h2>
<!-- backwards compatibility -->
<a id="schema__integer"></a>
<a id="schema___integer"></a>
<a id="tocS__integer"></a>
<a id="tocs__integer"></a>

```json
0
```

<h2 id="tocS_BucketServerSideEncryption">BucketServerSideEncryption</h2>
<!-- backwards compatibility -->
<a id="schemabucketserversideencryption"></a>
<a id="schema_BucketServerSideEncryption"></a>
<a id="tocSbucketserversideencryption"></a>
<a id="tocsbucketserversideencryption"></a>

```json
{
  "kmsMasterKeyId": {},
  "type": {}
}
```

Provides information about the default server-side encryption settings for an S3 bucket. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsMasterKeyId|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_SharedAccess">SharedAccess</h2>
<!-- backwards compatibility -->
<a id="schemasharedaccess"></a>
<a id="schema_SharedAccess"></a>
<a id="tocSsharedaccess"></a>
<a id="tocssharedaccess"></a>

```json
"EXTERNAL"
```

<h2 id="tocS___listOfKeyValuePair">__listOfKeyValuePair</h2>
<!-- backwards compatibility -->
<a id="schema__listofkeyvaluepair"></a>
<a id="schema___listOfKeyValuePair"></a>
<a id="tocS__listofkeyvaluepair"></a>
<a id="tocs__listofkeyvaluepair"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_ObjectLevelStatistics">ObjectLevelStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlevelstatistics"></a>
<a id="schema_ObjectLevelStatistics"></a>
<a id="tocSobjectlevelstatistics"></a>
<a id="tocsobjectlevelstatistics"></a>

```json
{
  "fileType": {},
  "storageClass": {},
  "total": {}
}
```

Provides information about the total storage size (in bytes) or number of objects that Amazon Macie can't analyze in one or more S3 buckets. In a BucketMetadata or MatchingBucket object, this data is for a specific bucket. In a GetBucketStatisticsResponse object, this data is aggregated for all the buckets in the query results. If versioning is enabled for a bucket, storage size values are based on the size of the latest version of each applicable object in the bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileType|object|false|none|none|
|storageClass|object|false|none|none|
|total|object|false|none|none|

<h2 id="tocS_BucketMetadata">BucketMetadata</h2>
<!-- backwards compatibility -->
<a id="schemabucketmetadata"></a>
<a id="schema_BucketMetadata"></a>
<a id="tocSbucketmetadata"></a>
<a id="tocsbucketmetadata"></a>

```json
{
  "accountId": {},
  "allowsUnencryptedObjectUploads": {},
  "bucketArn": {},
  "bucketCreatedAt": {},
  "bucketName": {},
  "classifiableObjectCount": {},
  "classifiableSizeInBytes": {},
  "errorCode": {},
  "errorMessage": {},
  "jobDetails": {
    "isDefinedInJob": {},
    "isMonitoredByJob": {},
    "lastJobId": {},
    "lastJobRunTime": {}
  },
  "lastAutomatedDiscoveryTime": {},
  "lastUpdated": {},
  "objectCount": {},
  "objectCountByEncryptionType": {
    "customerManaged": {},
    "kmsManaged": {},
    "s3Managed": {},
    "unencrypted": {},
    "unknown": {}
  },
  "publicAccess": {
    "effectivePermission": {},
    "permissionConfiguration": {
      "accountLevelPermissions": {
        "blockPublicAccess": {
          "blockPublicAcls": {},
          "blockPublicPolicy": {},
          "ignorePublicAcls": {},
          "restrictPublicBuckets": {}
        }
      },
      "bucketLevelPermissions": {
        "accessControlList": {
          "allowsPublicReadAccess": {},
          "allowsPublicWriteAccess": {}
        },
        "blockPublicAccess": {
          "blockPublicAcls": {},
          "blockPublicPolicy": {},
          "ignorePublicAcls": {},
          "restrictPublicBuckets": {}
        },
        "bucketPolicy": {
          "allowsPublicReadAccess": {},
          "allowsPublicWriteAccess": {}
        }
      }
    }
  },
  "region": {},
  "replicationDetails": {
    "replicated": {},
    "replicatedExternally": {},
    "replicationAccounts": {}
  },
  "sensitivityScore": {},
  "serverSideEncryption": {
    "kmsMasterKeyId": {},
    "type": {}
  },
  "sharedAccess": {},
  "sizeInBytes": {},
  "sizeInBytesCompressed": {},
  "tags": {},
  "unclassifiableObjectCount": {
    "fileType": {},
    "storageClass": {},
    "total": {}
  },
  "unclassifiableObjectSizeInBytes": {
    "fileType": {},
    "storageClass": {},
    "total": {}
  },
  "versioning": {}
}
```

<p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html">How Macie monitors Amazon S3 data security</a> in the <i>Amazon Macie User Guide</i>.</p> <p>If an error occurs when Macie attempts to retrieve and process metadata from Amazon S3 for the bucket or the bucket's objects, the value for the versioning property is false and the value for most other properties is null. Key exceptions are accountId, bucketArn, bucketCreatedAt, bucketName, lastUpdated, and region. To identify the cause of the error, refer to the errorCode and errorMessage values.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|allowsUnencryptedObjectUploads|object|false|none|none|
|bucketArn|object|false|none|none|
|bucketCreatedAt|object|false|none|none|
|bucketName|object|false|none|none|
|classifiableObjectCount|object|false|none|none|
|classifiableSizeInBytes|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|
|jobDetails|object|false|none|none|
|lastAutomatedDiscoveryTime|object|false|none|none|
|lastUpdated|object|false|none|none|
|objectCount|object|false|none|none|
|objectCountByEncryptionType|object|false|none|none|
|publicAccess|object|false|none|none|
|region|object|false|none|none|
|replicationDetails|object|false|none|none|
|sensitivityScore|object|false|none|none|
|serverSideEncryption|object|false|none|none|
|sharedAccess|object|false|none|none|
|sizeInBytes|object|false|none|none|
|sizeInBytesCompressed|object|false|none|none|
|tags|object|false|none|none|
|unclassifiableObjectCount|object|false|none|none|
|unclassifiableObjectSizeInBytes|object|false|none|none|
|versioning|object|false|none|none|

<h2 id="tocS_BucketPermissionConfiguration">BucketPermissionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemabucketpermissionconfiguration"></a>
<a id="schema_BucketPermissionConfiguration"></a>
<a id="tocSbucketpermissionconfiguration"></a>
<a id="tocsbucketpermissionconfiguration"></a>

```json
{
  "accountLevelPermissions": {
    "blockPublicAccess": {
      "blockPublicAcls": {},
      "blockPublicPolicy": {},
      "ignorePublicAcls": {},
      "restrictPublicBuckets": {}
    }
  },
  "bucketLevelPermissions": {
    "accessControlList": {
      "allowsPublicReadAccess": {},
      "allowsPublicWriteAccess": {}
    },
    "blockPublicAccess": {
      "blockPublicAcls": {},
      "blockPublicPolicy": {},
      "ignorePublicAcls": {},
      "restrictPublicBuckets": {}
    },
    "bucketPolicy": {
      "allowsPublicReadAccess": {},
      "allowsPublicWriteAccess": {}
    }
  }
}
```

Provides information about the account-level and bucket-level permissions settings for an S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountLevelPermissions|object|false|none|none|
|bucketLevelPermissions|object|false|none|none|

<h2 id="tocS_EffectivePermission">EffectivePermission</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivepermission"></a>
<a id="schema_EffectivePermission"></a>
<a id="tocSeffectivepermission"></a>
<a id="tocseffectivepermission"></a>

```json
"PUBLIC"
```

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"NONE"
```

<h2 id="tocS_BucketSortCriteria">BucketSortCriteria</h2>
<!-- backwards compatibility -->
<a id="schemabucketsortcriteria"></a>
<a id="schema_BucketSortCriteria"></a>
<a id="tocSbucketsortcriteria"></a>
<a id="tocsbucketsortcriteria"></a>

```json
{
  "attributeName": {},
  "orderBy": {}
}
```

Specifies criteria for sorting the results of a query for information about S3 buckets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeName|object|false|none|none|
|orderBy|object|false|none|none|

<h2 id="tocS_SensitivityAggregations">SensitivityAggregations</h2>
<!-- backwards compatibility -->
<a id="schemasensitivityaggregations"></a>
<a id="schema_SensitivityAggregations"></a>
<a id="tocSsensitivityaggregations"></a>
<a id="tocssensitivityaggregations"></a>

```json
{
  "classifiableSizeInBytes": {},
  "publiclyAccessibleCount": {},
  "totalCount": {},
  "totalSizeInBytes": {}
}
```

Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets. Each field contains aggregated data for all the buckets that have a sensitivity score (sensitivityScore) of a specified value or within a specified range (BucketStatisticsBySensitivity). If automated sensitive data discovery is currently disabled for your account, the value for each field is 0.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classifiableSizeInBytes|object|false|none|none|
|publiclyAccessibleCount|object|false|none|none|
|totalCount|object|false|none|none|
|totalSizeInBytes|object|false|none|none|

<h2 id="tocS_BucketStatisticsBySensitivity">BucketStatisticsBySensitivity</h2>
<!-- backwards compatibility -->
<a id="schemabucketstatisticsbysensitivity"></a>
<a id="schema_BucketStatisticsBySensitivity"></a>
<a id="tocSbucketstatisticsbysensitivity"></a>
<a id="tocsbucketstatisticsbysensitivity"></a>

```json
{
  "classificationError": {
    "classifiableSizeInBytes": {},
    "publiclyAccessibleCount": {},
    "totalCount": {},
    "totalSizeInBytes": {}
  },
  "notClassified": {
    "classifiableSizeInBytes": {},
    "publiclyAccessibleCount": {},
    "totalCount": {},
    "totalSizeInBytes": {}
  },
  "notSensitive": {
    "classifiableSizeInBytes": {},
    "publiclyAccessibleCount": {},
    "totalCount": {},
    "totalSizeInBytes": {}
  },
  "sensitive": {
    "classifiableSizeInBytes": {},
    "publiclyAccessibleCount": {},
    "totalCount": {},
    "totalSizeInBytes": {}
  }
}
```

Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets, grouped by bucket sensitivity score (sensitivityScore). If automated sensitive data discovery is currently disabled for your account, the value for each metric is 0.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classificationError|object|false|none|none|
|notClassified|object|false|none|none|
|notSensitive|object|false|none|none|
|sensitive|object|false|none|none|

<h2 id="tocS_Cell">Cell</h2>
<!-- backwards compatibility -->
<a id="schemacell"></a>
<a id="schema_Cell"></a>
<a id="tocScell"></a>
<a id="tocscell"></a>

```json
{
  "cellReference": {},
  "column": {},
  "columnName": {},
  "row": {}
}
```

Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellReference|object|false|none|none|
|column|object|false|none|none|
|columnName|object|false|none|none|
|row|object|false|none|none|

<h2 id="tocS_Cells">Cells</h2>
<!-- backwards compatibility -->
<a id="schemacells"></a>
<a id="schema_Cells"></a>
<a id="tocScells"></a>
<a id="tocscells"></a>

```json
[
  {
    "cellReference": {},
    "column": {},
    "columnName": {},
    "row": {}
  }
]
```

Specifies the location of occurrences of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.

<h2 id="tocS_OriginType">OriginType</h2>
<!-- backwards compatibility -->
<a id="schemaorigintype"></a>
<a id="schema_OriginType"></a>
<a id="tocSorigintype"></a>
<a id="tocsorigintype"></a>

```json
"SENSITIVE_DATA_DISCOVERY_JOB"
```

Specifies how Amazon Macie found the sensitive data that produced a finding. Possible values are:

<h2 id="tocS_ClassificationResult">ClassificationResult</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationresult"></a>
<a id="schema_ClassificationResult"></a>
<a id="tocSclassificationresult"></a>
<a id="tocsclassificationresult"></a>

```json
{
  "additionalOccurrences": {},
  "customDataIdentifiers": {
    "detections": {},
    "totalCount": {}
  },
  "mimeType": {},
  "sensitiveData": {},
  "sizeClassified": {},
  "status": {
    "code": {},
    "reason": {}
  }
}
```

Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalOccurrences|object|false|none|none|
|customDataIdentifiers|object|false|none|none|
|mimeType|object|false|none|none|
|sensitiveData|object|false|none|none|
|sizeClassified|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_ClassificationDetails">ClassificationDetails</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationdetails"></a>
<a id="schema_ClassificationDetails"></a>
<a id="tocSclassificationdetails"></a>
<a id="tocsclassificationdetails"></a>

```json
{
  "detailedResultsLocation": {},
  "jobArn": {},
  "jobId": {},
  "originType": {},
  "result": {
    "additionalOccurrences": {},
    "customDataIdentifiers": {
      "detections": {},
      "totalCount": {}
    },
    "mimeType": {},
    "sensitiveData": {},
    "sizeClassified": {},
    "status": {
      "code": {},
      "reason": {}
    }
  }
}
```

Provides information about a sensitive data finding and the details of the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detailedResultsLocation|object|false|none|none|
|jobArn|object|false|none|none|
|jobId|object|false|none|none|
|originType|object|false|none|none|
|result|object|false|none|none|

<h2 id="tocS_ClassificationExportConfiguration">ClassificationExportConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationexportconfiguration"></a>
<a id="schema_ClassificationExportConfiguration"></a>
<a id="tocSclassificationexportconfiguration"></a>
<a id="tocsclassificationexportconfiguration"></a>

```json
{
  "s3Destination": {
    "bucketName": {},
    "keyPrefix": {},
    "kmsKeyArn": {}
  }
}
```

Specifies where to store data classification results, and the encryption settings to use when storing results in that location. The location must be an S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Destination|object|false|none|none|

<h2 id="tocS_CustomDataIdentifiers">CustomDataIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemacustomdataidentifiers"></a>
<a id="schema_CustomDataIdentifiers"></a>
<a id="tocScustomdataidentifiers"></a>
<a id="tocscustomdataidentifiers"></a>

```json
{
  "detections": {},
  "totalCount": {}
}
```

Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detections|object|false|none|none|
|totalCount|object|false|none|none|

<h2 id="tocS_SensitiveData">SensitiveData</h2>
<!-- backwards compatibility -->
<a id="schemasensitivedata"></a>
<a id="schema_SensitiveData"></a>
<a id="tocSsensitivedata"></a>
<a id="tocssensitivedata"></a>

```json
[
  {
    "category": {},
    "detections": {},
    "totalCount": {}
  }
]
```

Provides information about the category and number of occurrences of sensitive data that produced a finding.

<h2 id="tocS_ClassificationResultStatus">ClassificationResultStatus</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationresultstatus"></a>
<a id="schema_ClassificationResultStatus"></a>
<a id="tocSclassificationresultstatus"></a>
<a id="tocsclassificationresultstatus"></a>

```json
{
  "code": {},
  "reason": {}
}
```

Provides information about the status of a sensitive data finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|reason|object|false|none|none|

<h2 id="tocS_ClassificationScopeId">ClassificationScopeId</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationscopeid"></a>
<a id="schema_ClassificationScopeId"></a>
<a id="tocSclassificationscopeid"></a>
<a id="tocsclassificationscopeid"></a>

```json
"string"
```

The unique identifier the classification scope.

<h2 id="tocS_ClassificationScopeName">ClassificationScopeName</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationscopename"></a>
<a id="schema_ClassificationScopeName"></a>
<a id="tocSclassificationscopename"></a>
<a id="tocsclassificationscopename"></a>

```json
"string"
```

The name of the classification scope.

<h2 id="tocS_ClassificationScopeSummary">ClassificationScopeSummary</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationscopesummary"></a>
<a id="schema_ClassificationScopeSummary"></a>
<a id="tocSclassificationscopesummary"></a>
<a id="tocsclassificationscopesummary"></a>

```json
{
  "id": {},
  "name": {}
}
```

Provides information about the classification scope for an Amazon Macie account. Macie uses the scope's settings when it performs automated sensitive data discovery for the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_ClassificationScopeUpdateOperation">ClassificationScopeUpdateOperation</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationscopeupdateoperation"></a>
<a id="schema_ClassificationScopeUpdateOperation"></a>
<a id="tocSclassificationscopeupdateoperation"></a>
<a id="tocsclassificationscopeupdateoperation"></a>

```json
"ADD"
```

Specifies how to apply changes to the S3 bucket exclusion list defined by the classification scope for an Amazon Macie account. Valid values are:

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__string](#schema__string)|false|none|none|

<h2 id="tocS_CreateAllowListRequest">CreateAllowListRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateallowlistrequest"></a>
<a id="schema_CreateAllowListRequest"></a>
<a id="tocScreateallowlistrequest"></a>
<a id="tocscreateallowlistrequest"></a>

```json
{
  "clientToken": {},
  "criteria": {
    "regex": {},
    "s3WordsList": {
      "bucketName": {},
      "objectKey": {}
    }
  },
  "description": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|true|none|none|
|criteria|object|true|none|none|
|description|object|false|none|none|
|name|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_JobType">JobType</h2>
<!-- backwards compatibility -->
<a id="schemajobtype"></a>
<a id="schema_JobType"></a>
<a id="tocSjobtype"></a>
<a id="tocsjobtype"></a>

```json
"ONE_TIME"
```

The schedule for running a classification job. Valid values are:

<h2 id="tocS_ManagedDataIdentifierSelector">ManagedDataIdentifierSelector</h2>
<!-- backwards compatibility -->
<a id="schemamanageddataidentifierselector"></a>
<a id="schema_ManagedDataIdentifierSelector"></a>
<a id="tocSmanageddataidentifierselector"></a>
<a id="tocsmanageddataidentifierselector"></a>

```json
"ALL"
```

The selection type that determines which managed data identifiers a classification job uses to analyze data. Valid values are:

<h2 id="tocS_S3JobDefinition">S3JobDefinition</h2>
<!-- backwards compatibility -->
<a id="schemas3jobdefinition"></a>
<a id="schema_S3JobDefinition"></a>
<a id="tocSs3jobdefinition"></a>
<a id="tocss3jobdefinition"></a>

```json
{
  "bucketCriteria": {
    "excludes": {
      "and": {}
    },
    "includes": {
      "and": {}
    }
  },
  "bucketDefinitions": {},
  "scoping": {
    "excludes": {
      "and": {}
    },
    "includes": {
      "and": {}
    }
  }
}
```

Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketCriteria|object|false|none|none|
|bucketDefinitions|object|false|none|none|
|scoping|object|false|none|none|

<h2 id="tocS_JobScheduleFrequency">JobScheduleFrequency</h2>
<!-- backwards compatibility -->
<a id="schemajobschedulefrequency"></a>
<a id="schema_JobScheduleFrequency"></a>
<a id="tocSjobschedulefrequency"></a>
<a id="tocsjobschedulefrequency"></a>

```json
{
  "dailySchedule": {},
  "monthlySchedule": {
    "dayOfMonth": {}
  },
  "weeklySchedule": {
    "dayOfWeek": {}
  }
}
```

Specifies the recurrence pattern for running a classification job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailySchedule|object|false|none|none|
|monthlySchedule|object|false|none|none|
|weeklySchedule|object|false|none|none|

<h2 id="tocS_CreateClassificationJobRequest">CreateClassificationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateclassificationjobrequest"></a>
<a id="schema_CreateClassificationJobRequest"></a>
<a id="tocScreateclassificationjobrequest"></a>
<a id="tocscreateclassificationjobrequest"></a>

```json
{
  "allowListIds": {},
  "clientToken": {},
  "customDataIdentifierIds": {},
  "description": {},
  "initialRun": {},
  "jobType": {},
  "managedDataIdentifierIds": {},
  "managedDataIdentifierSelector": {},
  "name": {},
  "s3JobDefinition": {
    "bucketCriteria": {
      "excludes": {
        "and": {}
      },
      "includes": {
        "and": {}
      }
    },
    "bucketDefinitions": {},
    "scoping": {
      "excludes": {
        "and": {}
      },
      "includes": {
        "and": {}
      }
    }
  },
  "samplingPercentage": {},
  "scheduleFrequency": {
    "dailySchedule": {},
    "monthlySchedule": {
      "dayOfMonth": {}
    },
    "weeklySchedule": {
      "dayOfWeek": {}
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowListIds|object|false|none|none|
|clientToken|object|true|none|none|
|customDataIdentifierIds|object|false|none|none|
|description|object|false|none|none|
|initialRun|object|false|none|none|
|jobType|object|true|none|none|
|managedDataIdentifierIds|object|false|none|none|
|managedDataIdentifierSelector|object|false|none|none|
|name|object|true|none|none|
|s3JobDefinition|object|true|none|none|
|samplingPercentage|object|false|none|none|
|scheduleFrequency|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_SeverityLevelList">SeverityLevelList</h2>
<!-- backwards compatibility -->
<a id="schemaseveritylevellist"></a>
<a id="schema_SeverityLevelList"></a>
<a id="tocSseveritylevellist"></a>
<a id="tocsseveritylevellist"></a>

```json
[
  {
    "occurrencesThreshold": {},
    "severity": {}
  }
]
```

<p>The severity to assign to findings that the custom data identifier produces, based on the number of occurrences of text that matches the custom data identifier's detection criteria. You can specify as many as three SeverityLevel objects in this array, one for each severity: LOW, MEDIUM, or HIGH. If you specify more than one, the occurrences thresholds must be in ascending order by severity, moving from LOW to HIGH. For example, 1 for LOW, 50 for MEDIUM, and 100 for HIGH. If an S3 object contains fewer occurrences than the lowest specified threshold, Amazon Macie doesn't create a finding.</p> <p>If you don't specify any values for this array, Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie automatically assigns the MEDIUM severity to those findings.</p>

<h2 id="tocS_CreateCustomDataIdentifierRequest">CreateCustomDataIdentifierRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomdataidentifierrequest"></a>
<a id="schema_CreateCustomDataIdentifierRequest"></a>
<a id="tocScreatecustomdataidentifierrequest"></a>
<a id="tocscreatecustomdataidentifierrequest"></a>

```json
{
  "clientToken": {},
  "description": {},
  "ignoreWords": {},
  "keywords": {},
  "maximumMatchDistance": {},
  "name": {},
  "regex": {},
  "severityLevels": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|description|object|false|none|none|
|ignoreWords|object|false|none|none|
|keywords|object|false|none|none|
|maximumMatchDistance|object|false|none|none|
|name|object|true|none|none|
|regex|object|true|none|none|
|severityLevels|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_FindingsFilterAction">FindingsFilterAction</h2>
<!-- backwards compatibility -->
<a id="schemafindingsfilteraction"></a>
<a id="schema_FindingsFilterAction"></a>
<a id="tocSfindingsfilteraction"></a>
<a id="tocsfindingsfilteraction"></a>

```json
"ARCHIVE"
```

The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are:

<h2 id="tocS_FindingCriteria">FindingCriteria</h2>
<!-- backwards compatibility -->
<a id="schemafindingcriteria"></a>
<a id="schema_FindingCriteria"></a>
<a id="tocSfindingcriteria"></a>
<a id="tocsfindingcriteria"></a>

```json
{
  "criterion": {
    "property1": {
      "eq": {},
      "eqExactMatch": {},
      "gt": {},
      "gte": {},
      "lt": {},
      "lte": {},
      "neq": {}
    },
    "property2": {
      "eq": {},
      "eqExactMatch": {},
      "gt": {},
      "gte": {},
      "lt": {},
      "lte": {},
      "neq": {}
    }
  }
}
```

Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|criterion|object|false|none|none|

<h2 id="tocS_CreateFindingsFilterRequest">CreateFindingsFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefindingsfilterrequest"></a>
<a id="schema_CreateFindingsFilterRequest"></a>
<a id="tocScreatefindingsfilterrequest"></a>
<a id="tocscreatefindingsfilterrequest"></a>

```json
{
  "action": {},
  "clientToken": {},
  "description": {},
  "findingCriteria": {
    "criterion": {
      "property1": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      },
      "property2": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      }
    }
  },
  "name": {},
  "position": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|true|none|none|
|clientToken|object|false|none|none|
|description|object|false|none|none|
|findingCriteria|object|true|none|none|
|name|object|true|none|none|
|position|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateInvitationsRequest">CreateInvitationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinvitationsrequest"></a>
<a id="schema_CreateInvitationsRequest"></a>
<a id="tocScreateinvitationsrequest"></a>
<a id="tocscreateinvitationsrequest"></a>

```json
{
  "accountIds": {},
  "disableEmailNotification": {},
  "message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|object|true|none|none|
|disableEmailNotification|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS___listOfUnprocessedAccount">__listOfUnprocessedAccount</h2>
<!-- backwards compatibility -->
<a id="schema__listofunprocessedaccount"></a>
<a id="schema___listOfUnprocessedAccount"></a>
<a id="tocS__listofunprocessedaccount"></a>
<a id="tocs__listofunprocessedaccount"></a>

```json
[
  {
    "accountId": {},
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_CreateMemberRequest">CreateMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatememberrequest"></a>
<a id="schema_CreateMemberRequest"></a>
<a id="tocScreatememberrequest"></a>
<a id="tocscreatememberrequest"></a>

```json
{
  "account": {
    "accountId": {},
    "email": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS___listOfFindingType">__listOfFindingType</h2>
<!-- backwards compatibility -->
<a id="schema__listoffindingtype"></a>
<a id="schema___listOfFindingType"></a>
<a id="tocS__listoffindingtype"></a>
<a id="tocs__listoffindingtype"></a>

```json
[
  "SensitiveData:S3Object/Multiple"
]
```

<h2 id="tocS_CreateSampleFindingsRequest">CreateSampleFindingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesamplefindingsrequest"></a>
<a id="schema_CreateSampleFindingsRequest"></a>
<a id="tocScreatesamplefindingsrequest"></a>
<a id="tocscreatesamplefindingsrequest"></a>

```json
{
  "findingTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findingTypes|object|false|none|none|

<h2 id="tocS___listOfCriteriaForJob">__listOfCriteriaForJob</h2>
<!-- backwards compatibility -->
<a id="schema__listofcriteriaforjob"></a>
<a id="schema___listOfCriteriaForJob"></a>
<a id="tocS__listofcriteriaforjob"></a>
<a id="tocs__listofcriteriaforjob"></a>

```json
[
  {
    "simpleCriterion": {
      "comparator": {},
      "key": {},
      "values": {}
    },
    "tagCriterion": {
      "comparator": {},
      "tagValues": {}
    }
  }
]
```

<h2 id="tocS_CriteriaBlockForJob">CriteriaBlockForJob</h2>
<!-- backwards compatibility -->
<a id="schemacriteriablockforjob"></a>
<a id="schema_CriteriaBlockForJob"></a>
<a id="tocScriteriablockforjob"></a>
<a id="tocscriteriablockforjob"></a>

```json
{
  "and": {}
}
```

Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|and|object|false|none|none|

<h2 id="tocS_SimpleCriterionForJob">SimpleCriterionForJob</h2>
<!-- backwards compatibility -->
<a id="schemasimplecriterionforjob"></a>
<a id="schema_SimpleCriterionForJob"></a>
<a id="tocSsimplecriterionforjob"></a>
<a id="tocssimplecriterionforjob"></a>

```json
{
  "comparator": {},
  "key": {},
  "values": {}
}
```

Specifies a property-based condition that determines whether an S3 bucket is included or excluded from a classification job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|object|false|none|none|
|key|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_TagCriterionForJob">TagCriterionForJob</h2>
<!-- backwards compatibility -->
<a id="schematagcriterionforjob"></a>
<a id="schema_TagCriterionForJob"></a>
<a id="tocStagcriterionforjob"></a>
<a id="tocstagcriterionforjob"></a>

```json
{
  "comparator": {},
  "tagValues": {}
}
```

Specifies a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|object|false|none|none|
|tagValues|object|false|none|none|

<h2 id="tocS_CriteriaForJob">CriteriaForJob</h2>
<!-- backwards compatibility -->
<a id="schemacriteriaforjob"></a>
<a id="schema_CriteriaForJob"></a>
<a id="tocScriteriaforjob"></a>
<a id="tocscriteriaforjob"></a>

```json
{
  "simpleCriterion": {
    "comparator": {},
    "key": {},
    "values": {}
  },
  "tagCriterion": {
    "comparator": {},
    "tagValues": {}
  }
}
```

Specifies a property- or tag-based condition that defines criteria for including or excluding S3 buckets from a classification job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|simpleCriterion|object|false|none|none|
|tagCriterion|object|false|none|none|

<h2 id="tocS_CriterionAdditionalProperties">CriterionAdditionalProperties</h2>
<!-- backwards compatibility -->
<a id="schemacriterionadditionalproperties"></a>
<a id="schema_CriterionAdditionalProperties"></a>
<a id="tocScriterionadditionalproperties"></a>
<a id="tocscriterionadditionalproperties"></a>

```json
{
  "eq": {},
  "eqExactMatch": {},
  "gt": {},
  "gte": {},
  "lt": {},
  "lte": {},
  "neq": {}
}
```

Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eq|object|false|none|none|
|eqExactMatch|object|false|none|none|
|gt|object|false|none|none|
|gte|object|false|none|none|
|lt|object|false|none|none|
|lte|object|false|none|none|
|neq|object|false|none|none|

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
"USD"
```

The type of currency that the data for an Amazon Macie usage metric is reported in. Possible values are:

<h2 id="tocS_CustomDataIdentifierSummary">CustomDataIdentifierSummary</h2>
<!-- backwards compatibility -->
<a id="schemacustomdataidentifiersummary"></a>
<a id="schema_CustomDataIdentifierSummary"></a>
<a id="tocScustomdataidentifiersummary"></a>
<a id="tocscustomdataidentifiersummary"></a>

```json
{
  "arn": {},
  "createdAt": {},
  "description": {},
  "id": {},
  "name": {}
}
```

Provides information about a custom data identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|description|object|false|none|none|
|id|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_CustomDetections">CustomDetections</h2>
<!-- backwards compatibility -->
<a id="schemacustomdetections"></a>
<a id="schema_CustomDetections"></a>
<a id="tocScustomdetections"></a>
<a id="tocscustomdetections"></a>

```json
[
  {
    "arn": {},
    "count": {},
    "name": {},
    "occurrences": {
      "cells": {},
      "lineRanges": {},
      "offsetRanges": {},
      "pages": {},
      "records": {}
    }
  }
]
```

Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that each identifier detected.

<h2 id="tocS_Occurrences">Occurrences</h2>
<!-- backwards compatibility -->
<a id="schemaoccurrences"></a>
<a id="schema_Occurrences"></a>
<a id="tocSoccurrences"></a>
<a id="tocsoccurrences"></a>

```json
{
  "cells": {},
  "lineRanges": {},
  "offsetRanges": {},
  "pages": {},
  "records": {}
}
```

Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cells|object|false|none|none|
|lineRanges|object|false|none|none|
|offsetRanges|object|false|none|none|
|pages|object|false|none|none|
|records|object|false|none|none|

<h2 id="tocS_CustomDetection">CustomDetection</h2>
<!-- backwards compatibility -->
<a id="schemacustomdetection"></a>
<a id="schema_CustomDetection"></a>
<a id="tocScustomdetection"></a>
<a id="tocscustomdetection"></a>

```json
{
  "arn": {},
  "count": {},
  "name": {},
  "occurrences": {
    "cells": {},
    "lineRanges": {},
    "offsetRanges": {},
    "pages": {},
    "records": {}
  }
}
```

Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|count|object|false|none|none|
|name|object|false|none|none|
|occurrences|object|false|none|none|

<h2 id="tocS_DataIdentifierSeverity">DataIdentifierSeverity</h2>
<!-- backwards compatibility -->
<a id="schemadataidentifierseverity"></a>
<a id="schema_DataIdentifierSeverity"></a>
<a id="tocSdataidentifierseverity"></a>
<a id="tocsdataidentifierseverity"></a>

```json
"LOW"
```

The severity of a finding, ranging from LOW, for least severe, to HIGH, for most severe. Valid values are:

<h2 id="tocS_DataIdentifierType">DataIdentifierType</h2>
<!-- backwards compatibility -->
<a id="schemadataidentifiertype"></a>
<a id="schema_DataIdentifierType"></a>
<a id="tocSdataidentifiertype"></a>
<a id="tocsdataidentifiertype"></a>

```json
"CUSTOM"
```

The type of data identifier that detected a specific type of sensitive data in an S3 bucket. Possible values are:

<h2 id="tocS_DayOfWeek">DayOfWeek</h2>
<!-- backwards compatibility -->
<a id="schemadayofweek"></a>
<a id="schema_DayOfWeek"></a>
<a id="tocSdayofweek"></a>
<a id="tocsdayofweek"></a>

```json
"SUNDAY"
```

<h2 id="tocS_DeclineInvitationsRequest">DeclineInvitationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeclineinvitationsrequest"></a>
<a id="schema_DeclineInvitationsRequest"></a>
<a id="tocSdeclineinvitationsrequest"></a>
<a id="tocsdeclineinvitationsrequest"></a>

```json
{
  "accountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|object|true|none|none|

<h2 id="tocS_DefaultDetection">DefaultDetection</h2>
<!-- backwards compatibility -->
<a id="schemadefaultdetection"></a>
<a id="schema_DefaultDetection"></a>
<a id="tocSdefaultdetection"></a>
<a id="tocsdefaultdetection"></a>

```json
{
  "count": {},
  "occurrences": {
    "cells": {},
    "lineRanges": {},
    "offsetRanges": {},
    "pages": {},
    "records": {}
  },
  "type": {}
}
```

Provides information about a type of sensitive data that was detected by a managed data identifier and produced a sensitive data finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|object|false|none|none|
|occurrences|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_DefaultDetections">DefaultDetections</h2>
<!-- backwards compatibility -->
<a id="schemadefaultdetections"></a>
<a id="schema_DefaultDetections"></a>
<a id="tocSdefaultdetections"></a>
<a id="tocsdefaultdetections"></a>

```json
[
  {
    "count": {},
    "occurrences": {
      "cells": {},
      "lineRanges": {},
      "offsetRanges": {},
      "pages": {},
      "records": {}
    },
    "type": {}
  }
]
```

Provides information about sensitive data that was detected by managed data identifiers and produced a sensitive data finding, and the number of occurrences of each type of sensitive data that was detected.

<h2 id="tocS_DeleteAllowListRequest">DeleteAllowListRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteallowlistrequest"></a>
<a id="schema_DeleteAllowListRequest"></a>
<a id="tocSdeleteallowlistrequest"></a>
<a id="tocsdeleteallowlistrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteCustomDataIdentifierRequest">DeleteCustomDataIdentifierRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomdataidentifierrequest"></a>
<a id="schema_DeleteCustomDataIdentifierRequest"></a>
<a id="tocSdeletecustomdataidentifierrequest"></a>
<a id="tocsdeletecustomdataidentifierrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFindingsFilterRequest">DeleteFindingsFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefindingsfilterrequest"></a>
<a id="schema_DeleteFindingsFilterRequest"></a>
<a id="tocSdeletefindingsfilterrequest"></a>
<a id="tocsdeletefindingsfilterrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteInvitationsRequest">DeleteInvitationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinvitationsrequest"></a>
<a id="schema_DeleteInvitationsRequest"></a>
<a id="tocSdeleteinvitationsrequest"></a>
<a id="tocsdeleteinvitationsrequest"></a>

```json
{
  "accountIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|object|true|none|none|

<h2 id="tocS_DeleteMemberRequest">DeleteMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletememberrequest"></a>
<a id="schema_DeleteMemberRequest"></a>
<a id="tocSdeletememberrequest"></a>
<a id="tocsdeletememberrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeBucketsRequest">DescribeBucketsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebucketsrequest"></a>
<a id="schema_DescribeBucketsRequest"></a>
<a id="tocSdescribebucketsrequest"></a>
<a id="tocsdescribebucketsrequest"></a>

```json
{
  "criteria": {
    "property1": {
      "eq": {},
      "gt": {},
      "gte": {},
      "lt": {},
      "lte": {},
      "neq": {},
      "prefix": {}
    },
    "property2": {
      "eq": {},
      "gt": {},
      "gte": {},
      "lt": {},
      "lte": {},
      "neq": {},
      "prefix": {}
    }
  },
  "maxResults": {},
  "nextToken": {},
  "sortCriteria": {
    "attributeName": {},
    "orderBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|criteria|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|sortCriteria|object|false|none|none|

<h2 id="tocS___listOfBucketMetadata">__listOfBucketMetadata</h2>
<!-- backwards compatibility -->
<a id="schema__listofbucketmetadata"></a>
<a id="schema___listOfBucketMetadata"></a>
<a id="tocS__listofbucketmetadata"></a>
<a id="tocs__listofbucketmetadata"></a>

```json
[
  {
    "accountId": {},
    "allowsUnencryptedObjectUploads": {},
    "bucketArn": {},
    "bucketCreatedAt": {},
    "bucketName": {},
    "classifiableObjectCount": {},
    "classifiableSizeInBytes": {},
    "errorCode": {},
    "errorMessage": {},
    "jobDetails": {
      "isDefinedInJob": {},
      "isMonitoredByJob": {},
      "lastJobId": {},
      "lastJobRunTime": {}
    },
    "lastAutomatedDiscoveryTime": {},
    "lastUpdated": {},
    "objectCount": {},
    "objectCountByEncryptionType": {
      "customerManaged": {},
      "kmsManaged": {},
      "s3Managed": {},
      "unencrypted": {},
      "unknown": {}
    },
    "publicAccess": {
      "effectivePermission": {},
      "permissionConfiguration": {
        "accountLevelPermissions": {
          "blockPublicAccess": {
            "blockPublicAcls": {},
            "blockPublicPolicy": {},
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          }
        },
        "bucketLevelPermissions": {
          "accessControlList": {
            "allowsPublicReadAccess": {},
            "allowsPublicWriteAccess": {}
          },
          "blockPublicAccess": {
            "blockPublicAcls": {},
            "blockPublicPolicy": {},
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          },
          "bucketPolicy": {
            "allowsPublicReadAccess": {},
            "allowsPublicWriteAccess": {}
          }
        }
      }
    },
    "region": {},
    "replicationDetails": {
      "replicated": {},
      "replicatedExternally": {},
      "replicationAccounts": {}
    },
    "sensitivityScore": {},
    "serverSideEncryption": {
      "kmsMasterKeyId": {},
      "type": {}
    },
    "sharedAccess": {},
    "sizeInBytes": {},
    "sizeInBytesCompressed": {},
    "tags": {},
    "unclassifiableObjectCount": {
      "fileType": {},
      "storageClass": {},
      "total": {}
    },
    "unclassifiableObjectSizeInBytes": {
      "fileType": {},
      "storageClass": {},
      "total": {}
    },
    "versioning": {}
  }
]
```

<h2 id="tocS_DescribeClassificationJobRequest">DescribeClassificationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclassificationjobrequest"></a>
<a id="schema_DescribeClassificationJobRequest"></a>
<a id="tocSdescribeclassificationjobrequest"></a>
<a id="tocsdescribeclassificationjobrequest"></a>

```json
{}
```

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"RUNNING"
```

The status of a classification job. Possible values are:

<h2 id="tocS_LastRunErrorStatus">LastRunErrorStatus</h2>
<!-- backwards compatibility -->
<a id="schemalastrunerrorstatus"></a>
<a id="schema_LastRunErrorStatus"></a>
<a id="tocSlastrunerrorstatus"></a>
<a id="tocslastrunerrorstatus"></a>

```json
{
  "code": {}
}
```

Specifies whether any account- or bucket-level access errors occurred when a classification job ran. For information about using logging data to investigate these errors, see <a href="https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-monitor-cw-logs.html">Monitoring sensitive data discovery jobs</a> in the <i>Amazon Macie User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|

<h2 id="tocS_Statistics">Statistics</h2>
<!-- backwards compatibility -->
<a id="schemastatistics"></a>
<a id="schema_Statistics"></a>
<a id="tocSstatistics"></a>
<a id="tocsstatistics"></a>

```json
{
  "approximateNumberOfObjectsToProcess": {},
  "numberOfRuns": {}
}
```

Provides processing statistics for a classification job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approximateNumberOfObjectsToProcess|object|false|none|none|
|numberOfRuns|object|false|none|none|

<h2 id="tocS_UserPausedDetails">UserPausedDetails</h2>
<!-- backwards compatibility -->
<a id="schemauserpauseddetails"></a>
<a id="schema_UserPausedDetails"></a>
<a id="tocSuserpauseddetails"></a>
<a id="tocsuserpauseddetails"></a>

```json
{
  "jobExpiresAt": {},
  "jobImminentExpirationHealthEventArn": {},
  "jobPausedAt": {}
}
```

Provides information about when a classification job was paused. For a one-time job, this object also specifies when the job will expire and be cancelled if it isn't resumed. For a recurring job, this object also specifies when the paused job run will expire and be cancelled if it isn't resumed. This object is present only if a job's current status (jobStatus) is USER_PAUSED. The information in this object applies only to a job that was paused while it had a status of RUNNING.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobExpiresAt|object|false|none|none|
|jobImminentExpirationHealthEventArn|object|false|none|none|
|jobPausedAt|object|false|none|none|

<h2 id="tocS_DescribeOrganizationConfigurationRequest">DescribeOrganizationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorganizationconfigurationrequest"></a>
<a id="schema_DescribeOrganizationConfigurationRequest"></a>
<a id="tocSdescribeorganizationconfigurationrequest"></a>
<a id="tocsdescribeorganizationconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS___stringMin1Max128">__stringMin1Max128</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin1max128"></a>
<a id="schema___stringMin1Max128"></a>
<a id="tocS__stringmin1max128"></a>
<a id="tocs__stringmin1max128"></a>

```json
"string"
```

<h2 id="tocS_DetectedDataDetails">DetectedDataDetails</h2>
<!-- backwards compatibility -->
<a id="schemadetecteddatadetails"></a>
<a id="schema_DetectedDataDetails"></a>
<a id="tocSdetecteddatadetails"></a>
<a id="tocsdetecteddatadetails"></a>

```json
{
  "value": {}
}
```

Specifies 1-10 occurrences of a specific type of sensitive data reported by a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|none|

<h2 id="tocS_Detection">Detection</h2>
<!-- backwards compatibility -->
<a id="schemadetection"></a>
<a id="schema_Detection"></a>
<a id="tocSdetection"></a>
<a id="tocsdetection"></a>

```json
{
  "arn": {},
  "count": {},
  "id": {},
  "name": {},
  "suppressed": {},
  "type": {}
}
```

Provides information about a type of sensitive data that Amazon Macie found in an S3 bucket while performing automated sensitive data discovery for the bucket. The information also specifies the custom data identifier or managed data identifier that detected the data. This information is available only if automated sensitive data discovery is currently enabled for your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|count|object|false|none|none|
|id|object|false|none|none|
|name|object|false|none|none|
|suppressed|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_DisableMacieRequest">DisableMacieRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisablemacierequest"></a>
<a id="schema_DisableMacieRequest"></a>
<a id="tocSdisablemacierequest"></a>
<a id="tocsdisablemacierequest"></a>

```json
{}
```

<h2 id="tocS_DisableOrganizationAdminAccountRequest">DisableOrganizationAdminAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisableorganizationadminaccountrequest"></a>
<a id="schema_DisableOrganizationAdminAccountRequest"></a>
<a id="tocSdisableorganizationadminaccountrequest"></a>
<a id="tocsdisableorganizationadminaccountrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateFromAdministratorAccountRequest">DisassociateFromAdministratorAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefromadministratoraccountrequest"></a>
<a id="schema_DisassociateFromAdministratorAccountRequest"></a>
<a id="tocSdisassociatefromadministratoraccountrequest"></a>
<a id="tocsdisassociatefromadministratoraccountrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateFromMasterAccountRequest">DisassociateFromMasterAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatefrommasteraccountrequest"></a>
<a id="schema_DisassociateFromMasterAccountRequest"></a>
<a id="tocSdisassociatefrommasteraccountrequest"></a>
<a id="tocsdisassociatefrommasteraccountrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateMemberRequest">DisassociateMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatememberrequest"></a>
<a id="schema_DisassociateMemberRequest"></a>
<a id="tocSdisassociatememberrequest"></a>
<a id="tocsdisassociatememberrequest"></a>

```json
{}
```

<h2 id="tocS_DomainDetails">DomainDetails</h2>
<!-- backwards compatibility -->
<a id="schemadomaindetails"></a>
<a id="schema_DomainDetails"></a>
<a id="tocSdomaindetails"></a>
<a id="tocsdomaindetails"></a>

```json
{
  "domainName": {}
}
```

Provides information about the domain name of the device that an entity used to perform an action on an affected resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|false|none|none|

<h2 id="tocS_FindingPublishingFrequency">FindingPublishingFrequency</h2>
<!-- backwards compatibility -->
<a id="schemafindingpublishingfrequency"></a>
<a id="schema_FindingPublishingFrequency"></a>
<a id="tocSfindingpublishingfrequency"></a>
<a id="tocsfindingpublishingfrequency"></a>

```json
"FIFTEEN_MINUTES"
```

The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html">Monitoring and processing findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are:

<h2 id="tocS_MacieStatus">MacieStatus</h2>
<!-- backwards compatibility -->
<a id="schemamaciestatus"></a>
<a id="schema_MacieStatus"></a>
<a id="tocSmaciestatus"></a>
<a id="tocsmaciestatus"></a>

```json
"PAUSED"
```

The status of an Amazon Macie account. Valid values are:

<h2 id="tocS_EnableMacieRequest">EnableMacieRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenablemacierequest"></a>
<a id="schema_EnableMacieRequest"></a>
<a id="tocSenablemacierequest"></a>
<a id="tocsenablemacierequest"></a>

```json
{
  "clientToken": {},
  "findingPublishingFrequency": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|findingPublishingFrequency|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_EnableOrganizationAdminAccountRequest">EnableOrganizationAdminAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableorganizationadminaccountrequest"></a>
<a id="schema_EnableOrganizationAdminAccountRequest"></a>
<a id="tocSenableorganizationadminaccountrequest"></a>
<a id="tocsenableorganizationadminaccountrequest"></a>

```json
{
  "adminAccountId": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminAccountId|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_EncryptionType">EncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemaencryptiontype"></a>
<a id="schema_EncryptionType"></a>
<a id="tocSencryptiontype"></a>
<a id="tocsencryptiontype"></a>

```json
"NONE"
```

The server-side encryption algorithm that was used to encrypt an S3 object or is used by default to encrypt objects that are added to an S3 bucket. Possible values are:

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"ClientError"
```

The source of an issue or delay. Possible values are:

<h2 id="tocS_FederatedUser">FederatedUser</h2>
<!-- backwards compatibility -->
<a id="schemafederateduser"></a>
<a id="schema_FederatedUser"></a>
<a id="tocSfederateduser"></a>
<a id="tocsfederateduser"></a>

```json
{
  "accessKeyId": {},
  "accountId": {},
  "arn": {},
  "principalId": {},
  "sessionContext": {
    "attributes": {
      "creationDate": {},
      "mfaAuthenticated": {}
    },
    "sessionIssuer": {
      "accountId": {},
      "arn": {},
      "principalId": {},
      "type": {},
      "userName": {}
    }
  }
}
```

Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the Security Token Service (STS) API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyId|object|false|none|none|
|accountId|object|false|none|none|
|arn|object|false|none|none|
|principalId|object|false|none|none|
|sessionContext|object|false|none|none|

<h2 id="tocS_FindingCategory">FindingCategory</h2>
<!-- backwards compatibility -->
<a id="schemafindingcategory"></a>
<a id="schema_FindingCategory"></a>
<a id="tocSfindingcategory"></a>
<a id="tocsfindingcategory"></a>

```json
"CLASSIFICATION"
```

The category of the finding. Possible values are:

<h2 id="tocS_PolicyDetails">PolicyDetails</h2>
<!-- backwards compatibility -->
<a id="schemapolicydetails"></a>
<a id="schema_PolicyDetails"></a>
<a id="tocSpolicydetails"></a>
<a id="tocspolicydetails"></a>

```json
{
  "action": {
    "actionType": {},
    "apiCallDetails": {
      "api": {},
      "apiServiceName": {},
      "firstSeen": {},
      "lastSeen": {}
    }
  },
  "actor": {
    "domainDetails": {
      "domainName": {}
    },
    "ipAddressDetails": {
      "ipAddressV4": {},
      "ipCity": {
        "name": {}
      },
      "ipCountry": {
        "code": {},
        "name": {}
      },
      "ipGeoLocation": {
        "lat": {},
        "lon": {}
      },
      "ipOwner": {
        "asn": {},
        "asnOrg": {},
        "isp": {},
        "org": {}
      }
    },
    "userIdentity": {
      "assumedRole": {
        "accessKeyId": {},
        "accountId": {},
        "arn": {},
        "principalId": {},
        "sessionContext": {
          "attributes": {
            "creationDate": {},
            "mfaAuthenticated": {}
          },
          "sessionIssuer": {
            "accountId": {},
            "arn": {},
            "principalId": {},
            "type": {},
            "userName": {}
          }
        }
      },
      "awsAccount": {
        "accountId": {},
        "principalId": {}
      },
      "awsService": {
        "invokedBy": {}
      },
      "federatedUser": {
        "accessKeyId": {},
        "accountId": {},
        "arn": {},
        "principalId": {},
        "sessionContext": {
          "attributes": {
            "creationDate": {},
            "mfaAuthenticated": {}
          },
          "sessionIssuer": {
            "accountId": {},
            "arn": {},
            "principalId": {},
            "type": {},
            "userName": {}
          }
        }
      },
      "iamUser": {
        "accountId": {},
        "arn": {},
        "principalId": {},
        "userName": {}
      },
      "root": {
        "accountId": {},
        "arn": {},
        "principalId": {}
      },
      "type": {}
    }
  }
}
```

Provides the details of a policy finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|actor|object|false|none|none|

<h2 id="tocS_ResourcesAffected">ResourcesAffected</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesaffected"></a>
<a id="schema_ResourcesAffected"></a>
<a id="tocSresourcesaffected"></a>
<a id="tocsresourcesaffected"></a>

```json
{
  "s3Bucket": {
    "allowsUnencryptedObjectUploads": {},
    "arn": {},
    "createdAt": {},
    "defaultServerSideEncryption": {
      "encryptionType": {},
      "kmsMasterKeyId": {}
    },
    "name": {},
    "owner": {
      "displayName": {},
      "id": {}
    },
    "publicAccess": {
      "effectivePermission": {},
      "permissionConfiguration": {
        "accountLevelPermissions": {
          "blockPublicAccess": {
            "blockPublicAcls": {},
            "blockPublicPolicy": {},
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          }
        },
        "bucketLevelPermissions": {
          "accessControlList": {
            "allowsPublicReadAccess": {},
            "allowsPublicWriteAccess": {}
          },
          "blockPublicAccess": {
            "blockPublicAcls": {},
            "blockPublicPolicy": {},
            "ignorePublicAcls": {},
            "restrictPublicBuckets": {}
          },
          "bucketPolicy": {
            "allowsPublicReadAccess": {},
            "allowsPublicWriteAccess": {}
          }
        }
      }
    },
    "tags": {}
  },
  "s3Object": {
    "bucketArn": {},
    "eTag": {},
    "extension": {},
    "key": {},
    "lastModified": {},
    "path": {},
    "publicAccess": {},
    "serverSideEncryption": {
      "encryptionType": {},
      "kmsMasterKeyId": {}
    },
    "size": {},
    "storageClass": {},
    "tags": {},
    "versionId": {}
  }
}
```

Provides information about the resources that a finding applies to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Bucket|object|false|none|none|
|s3Object|object|false|none|none|

<h2 id="tocS_Severity">Severity</h2>
<!-- backwards compatibility -->
<a id="schemaseverity"></a>
<a id="schema_Severity"></a>
<a id="tocSseverity"></a>
<a id="tocsseverity"></a>

```json
{
  "description": {},
  "score": {}
}
```

Provides the numerical and qualitative representations of a finding's severity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|score|object|false|none|none|

<h2 id="tocS_Finding">Finding</h2>
<!-- backwards compatibility -->
<a id="schemafinding"></a>
<a id="schema_Finding"></a>
<a id="tocSfinding"></a>
<a id="tocsfinding"></a>

```json
{
  "accountId": {},
  "archived": {},
  "category": {},
  "classificationDetails": {
    "detailedResultsLocation": {},
    "jobArn": {},
    "jobId": {},
    "originType": {},
    "result": {
      "additionalOccurrences": {},
      "customDataIdentifiers": {
        "detections": {},
        "totalCount": {}
      },
      "mimeType": {},
      "sensitiveData": {},
      "sizeClassified": {},
      "status": {
        "code": {},
        "reason": {}
      }
    }
  },
  "count": {},
  "createdAt": {},
  "description": {},
  "id": {},
  "partition": {},
  "policyDetails": {
    "action": {
      "actionType": {},
      "apiCallDetails": {
        "api": {},
        "apiServiceName": {},
        "firstSeen": {},
        "lastSeen": {}
      }
    },
    "actor": {
      "domainDetails": {
        "domainName": {}
      },
      "ipAddressDetails": {
        "ipAddressV4": {},
        "ipCity": {
          "name": {}
        },
        "ipCountry": {
          "code": {},
          "name": {}
        },
        "ipGeoLocation": {
          "lat": {},
          "lon": {}
        },
        "ipOwner": {
          "asn": {},
          "asnOrg": {},
          "isp": {},
          "org": {}
        }
      },
      "userIdentity": {
        "assumedRole": {
          "accessKeyId": {},
          "accountId": {},
          "arn": {},
          "principalId": {},
          "sessionContext": {
            "attributes": {
              "creationDate": {},
              "mfaAuthenticated": {}
            },
            "sessionIssuer": {
              "accountId": {},
              "arn": {},
              "principalId": {},
              "type": {},
              "userName": {}
            }
          }
        },
        "awsAccount": {
          "accountId": {},
          "principalId": {}
        },
        "awsService": {
          "invokedBy": {}
        },
        "federatedUser": {
          "accessKeyId": {},
          "accountId": {},
          "arn": {},
          "principalId": {},
          "sessionContext": {
            "attributes": {
              "creationDate": {},
              "mfaAuthenticated": {}
            },
            "sessionIssuer": {
              "accountId": {},
              "arn": {},
              "principalId": {},
              "type": {},
              "userName": {}
            }
          }
        },
        "iamUser": {
          "accountId": {},
          "arn": {},
          "principalId": {},
          "userName": {}
        },
        "root": {
          "accountId": {},
          "arn": {},
          "principalId": {}
        },
        "type": {}
      }
    }
  },
  "region": {},
  "resourcesAffected": {
    "s3Bucket": {
      "allowsUnencryptedObjectUploads": {},
      "arn": {},
      "createdAt": {},
      "defaultServerSideEncryption": {
        "encryptionType": {},
        "kmsMasterKeyId": {}
      },
      "name": {},
      "owner": {
        "displayName": {},
        "id": {}
      },
      "publicAccess": {
        "effectivePermission": {},
        "permissionConfiguration": {
          "accountLevelPermissions": {
            "blockPublicAccess": {
              "blockPublicAcls": {},
              "blockPublicPolicy": {},
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            }
          },
          "bucketLevelPermissions": {
            "accessControlList": {
              "allowsPublicReadAccess": {},
              "allowsPublicWriteAccess": {}
            },
            "blockPublicAccess": {
              "blockPublicAcls": {},
              "blockPublicPolicy": {},
              "ignorePublicAcls": {},
              "restrictPublicBuckets": {}
            },
            "bucketPolicy": {
              "allowsPublicReadAccess": {},
              "allowsPublicWriteAccess": {}
            }
          }
        }
      },
      "tags": {}
    },
    "s3Object": {
      "bucketArn": {},
      "eTag": {},
      "extension": {},
      "key": {},
      "lastModified": {},
      "path": {},
      "publicAccess": {},
      "serverSideEncryption": {
        "encryptionType": {},
        "kmsMasterKeyId": {}
      },
      "size": {},
      "storageClass": {},
      "tags": {},
      "versionId": {}
    }
  },
  "sample": {},
  "schemaVersion": {},
  "severity": {
    "description": {},
    "score": {}
  },
  "title": {},
  "type": {},
  "updatedAt": {}
}
```

Provides the details of a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|archived|object|false|none|none|
|category|object|false|none|none|
|classificationDetails|object|false|none|none|
|count|object|false|none|none|
|createdAt|object|false|none|none|
|description|object|false|none|none|
|id|object|false|none|none|
|partition|object|false|none|none|
|policyDetails|object|false|none|none|
|region|object|false|none|none|
|resourcesAffected|object|false|none|none|
|sample|object|false|none|none|
|schemaVersion|object|false|none|none|
|severity|object|false|none|none|
|title|object|false|none|none|
|type|object|false|none|none|
|updatedAt|object|false|none|none|

<h2 id="tocS_FindingActionType">FindingActionType</h2>
<!-- backwards compatibility -->
<a id="schemafindingactiontype"></a>
<a id="schema_FindingActionType"></a>
<a id="tocSfindingactiontype"></a>
<a id="tocsfindingactiontype"></a>

```json
"AWS_API_CALL"
```

The type of action that occurred for the resource and produced the policy finding:

<h2 id="tocS_FindingAction">FindingAction</h2>
<!-- backwards compatibility -->
<a id="schemafindingaction"></a>
<a id="schema_FindingAction"></a>
<a id="tocSfindingaction"></a>
<a id="tocsfindingaction"></a>

```json
{
  "actionType": {},
  "apiCallDetails": {
    "api": {},
    "apiServiceName": {},
    "firstSeen": {},
    "lastSeen": {}
  }
}
```

Provides information about an action that occurred for a resource and produced a policy finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionType|object|false|none|none|
|apiCallDetails|object|false|none|none|

<h2 id="tocS_IpAddressDetails">IpAddressDetails</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressdetails"></a>
<a id="schema_IpAddressDetails"></a>
<a id="tocSipaddressdetails"></a>
<a id="tocsipaddressdetails"></a>

```json
{
  "ipAddressV4": {},
  "ipCity": {
    "name": {}
  },
  "ipCountry": {
    "code": {},
    "name": {}
  },
  "ipGeoLocation": {
    "lat": {},
    "lon": {}
  },
  "ipOwner": {
    "asn": {},
    "asnOrg": {},
    "isp": {},
    "org": {}
  }
}
```

Provides information about the IP address of the device that an entity used to perform an action on an affected resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipAddressV4|object|false|none|none|
|ipCity|object|false|none|none|
|ipCountry|object|false|none|none|
|ipGeoLocation|object|false|none|none|
|ipOwner|object|false|none|none|

<h2 id="tocS_UserIdentity">UserIdentity</h2>
<!-- backwards compatibility -->
<a id="schemauseridentity"></a>
<a id="schema_UserIdentity"></a>
<a id="tocSuseridentity"></a>
<a id="tocsuseridentity"></a>

```json
{
  "assumedRole": {
    "accessKeyId": {},
    "accountId": {},
    "arn": {},
    "principalId": {},
    "sessionContext": {
      "attributes": {
        "creationDate": {},
        "mfaAuthenticated": {}
      },
      "sessionIssuer": {
        "accountId": {},
        "arn": {},
        "principalId": {},
        "type": {},
        "userName": {}
      }
    }
  },
  "awsAccount": {
    "accountId": {},
    "principalId": {}
  },
  "awsService": {
    "invokedBy": {}
  },
  "federatedUser": {
    "accessKeyId": {},
    "accountId": {},
    "arn": {},
    "principalId": {},
    "sessionContext": {
      "attributes": {
        "creationDate": {},
        "mfaAuthenticated": {}
      },
      "sessionIssuer": {
        "accountId": {},
        "arn": {},
        "principalId": {},
        "type": {},
        "userName": {}
      }
    }
  },
  "iamUser": {
    "accountId": {},
    "arn": {},
    "principalId": {},
    "userName": {}
  },
  "root": {
    "accountId": {},
    "arn": {},
    "principalId": {}
  },
  "type": {}
}
```

Provides information about the type and other characteristics of an entity that performed an action on an affected resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assumedRole|object|false|none|none|
|awsAccount|object|false|none|none|
|awsService|object|false|none|none|
|federatedUser|object|false|none|none|
|iamUser|object|false|none|none|
|root|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_FindingActor">FindingActor</h2>
<!-- backwards compatibility -->
<a id="schemafindingactor"></a>
<a id="schema_FindingActor"></a>
<a id="tocSfindingactor"></a>
<a id="tocsfindingactor"></a>

```json
{
  "domainDetails": {
    "domainName": {}
  },
  "ipAddressDetails": {
    "ipAddressV4": {},
    "ipCity": {
      "name": {}
    },
    "ipCountry": {
      "code": {},
      "name": {}
    },
    "ipGeoLocation": {
      "lat": {},
      "lon": {}
    },
    "ipOwner": {
      "asn": {},
      "asnOrg": {},
      "isp": {},
      "org": {}
    }
  },
  "userIdentity": {
    "assumedRole": {
      "accessKeyId": {},
      "accountId": {},
      "arn": {},
      "principalId": {},
      "sessionContext": {
        "attributes": {
          "creationDate": {},
          "mfaAuthenticated": {}
        },
        "sessionIssuer": {
          "accountId": {},
          "arn": {},
          "principalId": {},
          "type": {},
          "userName": {}
        }
      }
    },
    "awsAccount": {
      "accountId": {},
      "principalId": {}
    },
    "awsService": {
      "invokedBy": {}
    },
    "federatedUser": {
      "accessKeyId": {},
      "accountId": {},
      "arn": {},
      "principalId": {},
      "sessionContext": {
        "attributes": {
          "creationDate": {},
          "mfaAuthenticated": {}
        },
        "sessionIssuer": {
          "accountId": {},
          "arn": {},
          "principalId": {},
          "type": {},
          "userName": {}
        }
      }
    },
    "iamUser": {
      "accountId": {},
      "arn": {},
      "principalId": {},
      "userName": {}
    },
    "root": {
      "accountId": {},
      "arn": {},
      "principalId": {}
    },
    "type": {}
  }
}
```

Provides information about an entity that performed an action that produced a policy finding for a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainDetails|object|false|none|none|
|ipAddressDetails|object|false|none|none|
|userIdentity|object|false|none|none|

<h2 id="tocS_FindingStatisticsSortCriteria">FindingStatisticsSortCriteria</h2>
<!-- backwards compatibility -->
<a id="schemafindingstatisticssortcriteria"></a>
<a id="schema_FindingStatisticsSortCriteria"></a>
<a id="tocSfindingstatisticssortcriteria"></a>
<a id="tocsfindingstatisticssortcriteria"></a>

```json
{
  "attributeName": {},
  "orderBy": {}
}
```

Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeName|object|false|none|none|
|orderBy|object|false|none|none|

<h2 id="tocS_FindingsFilterListItem">FindingsFilterListItem</h2>
<!-- backwards compatibility -->
<a id="schemafindingsfilterlistitem"></a>
<a id="schema_FindingsFilterListItem"></a>
<a id="tocSfindingsfilterlistitem"></a>
<a id="tocsfindingsfilterlistitem"></a>

```json
{
  "action": {},
  "arn": {},
  "id": {},
  "name": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Provides information about a findings filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|arn|object|false|none|none|
|id|object|false|none|none|
|name|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetAdministratorAccountRequest">GetAdministratorAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetadministratoraccountrequest"></a>
<a id="schema_GetAdministratorAccountRequest"></a>
<a id="tocSgetadministratoraccountrequest"></a>
<a id="tocsgetadministratoraccountrequest"></a>

```json
{}
```

<h2 id="tocS_Invitation">Invitation</h2>
<!-- backwards compatibility -->
<a id="schemainvitation"></a>
<a id="schema_Invitation"></a>
<a id="tocSinvitation"></a>
<a id="tocsinvitation"></a>

```json
{
  "accountId": {},
  "invitationId": {},
  "invitedAt": {},
  "relationshipStatus": {}
}
```

Provides information about an Amazon Macie membership invitation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|invitationId|object|false|none|none|
|invitedAt|object|false|none|none|
|relationshipStatus|object|false|none|none|

<h2 id="tocS_GetAllowListRequest">GetAllowListRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetallowlistrequest"></a>
<a id="schema_GetAllowListRequest"></a>
<a id="tocSgetallowlistrequest"></a>
<a id="tocsgetallowlistrequest"></a>

```json
{}
```

<h2 id="tocS_GetAutomatedDiscoveryConfigurationRequest">GetAutomatedDiscoveryConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetautomateddiscoveryconfigurationrequest"></a>
<a id="schema_GetAutomatedDiscoveryConfigurationRequest"></a>
<a id="tocSgetautomateddiscoveryconfigurationrequest"></a>
<a id="tocsgetautomateddiscoveryconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

Specifies a date and time in UTC and extended ISO 8601 format.

<h2 id="tocS_SensitivityInspectionTemplateId">SensitivityInspectionTemplateId</h2>
<!-- backwards compatibility -->
<a id="schemasensitivityinspectiontemplateid"></a>
<a id="schema_SensitivityInspectionTemplateId"></a>
<a id="tocSsensitivityinspectiontemplateid"></a>
<a id="tocssensitivityinspectiontemplateid"></a>

```json
"string"
```

The unique identifier for the sensitivity inspection template.

<h2 id="tocS_GetBucketStatisticsRequest">GetBucketStatisticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketstatisticsrequest"></a>
<a id="schema_GetBucketStatisticsRequest"></a>
<a id="tocSgetbucketstatisticsrequest"></a>
<a id="tocsgetbucketstatisticsrequest"></a>

```json
{
  "accountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|

<h2 id="tocS_GetClassificationExportConfigurationRequest">GetClassificationExportConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetclassificationexportconfigurationrequest"></a>
<a id="schema_GetClassificationExportConfigurationRequest"></a>
<a id="tocSgetclassificationexportconfigurationrequest"></a>
<a id="tocsgetclassificationexportconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetClassificationScopeRequest">GetClassificationScopeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetclassificationscoperequest"></a>
<a id="schema_GetClassificationScopeRequest"></a>
<a id="tocSgetclassificationscoperequest"></a>
<a id="tocsgetclassificationscoperequest"></a>

```json
{}
```

<h2 id="tocS_S3ClassificationScope">S3ClassificationScope</h2>
<!-- backwards compatibility -->
<a id="schemas3classificationscope"></a>
<a id="schema_S3ClassificationScope"></a>
<a id="tocSs3classificationscope"></a>
<a id="tocss3classificationscope"></a>

```json
{
  "excludes": {
    "bucketNames": {}
  }
}
```

Specifies the S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludes|object|true|none|none|

<h2 id="tocS_GetCustomDataIdentifierRequest">GetCustomDataIdentifierRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomdataidentifierrequest"></a>
<a id="schema_GetCustomDataIdentifierRequest"></a>
<a id="tocSgetcustomdataidentifierrequest"></a>
<a id="tocsgetcustomdataidentifierrequest"></a>

```json
{}
```

<h2 id="tocS_GroupBy">GroupBy</h2>
<!-- backwards compatibility -->
<a id="schemagroupby"></a>
<a id="schema_GroupBy"></a>
<a id="tocSgroupby"></a>
<a id="tocsgroupby"></a>

```json
"resourcesAffected.s3Bucket.name"
```

<h2 id="tocS_GetFindingStatisticsRequest">GetFindingStatisticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingstatisticsrequest"></a>
<a id="schema_GetFindingStatisticsRequest"></a>
<a id="tocSgetfindingstatisticsrequest"></a>
<a id="tocsgetfindingstatisticsrequest"></a>

```json
{
  "findingCriteria": {
    "criterion": {
      "property1": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      },
      "property2": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      }
    }
  },
  "groupBy": {},
  "size": {},
  "sortCriteria": {
    "attributeName": {},
    "orderBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findingCriteria|object|false|none|none|
|groupBy|object|true|none|none|
|size|object|false|none|none|
|sortCriteria|object|false|none|none|

<h2 id="tocS___listOfGroupCount">__listOfGroupCount</h2>
<!-- backwards compatibility -->
<a id="schema__listofgroupcount"></a>
<a id="schema___listOfGroupCount"></a>
<a id="tocS__listofgroupcount"></a>
<a id="tocs__listofgroupcount"></a>

```json
[
  {
    "count": {},
    "groupKey": {}
  }
]
```

<h2 id="tocS_GetFindingsFilterRequest">GetFindingsFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingsfilterrequest"></a>
<a id="schema_GetFindingsFilterRequest"></a>
<a id="tocSgetfindingsfilterrequest"></a>
<a id="tocsgetfindingsfilterrequest"></a>

```json
{}
```

<h2 id="tocS_GetFindingsPublicationConfigurationRequest">GetFindingsPublicationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingspublicationconfigurationrequest"></a>
<a id="schema_GetFindingsPublicationConfigurationRequest"></a>
<a id="tocSgetfindingspublicationconfigurationrequest"></a>
<a id="tocsgetfindingspublicationconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_SecurityHubConfiguration">SecurityHubConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasecurityhubconfiguration"></a>
<a id="schema_SecurityHubConfiguration"></a>
<a id="tocSsecurityhubconfiguration"></a>
<a id="tocssecurityhubconfiguration"></a>

```json
{
  "publishClassificationFindings": {},
  "publishPolicyFindings": {}
}
```

Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publishClassificationFindings|object|true|none|none|
|publishPolicyFindings|object|true|none|none|

<h2 id="tocS_SortCriteria">SortCriteria</h2>
<!-- backwards compatibility -->
<a id="schemasortcriteria"></a>
<a id="schema_SortCriteria"></a>
<a id="tocSsortcriteria"></a>
<a id="tocssortcriteria"></a>

```json
{
  "attributeName": {},
  "orderBy": {}
}
```

Specifies criteria for sorting the results of a request for findings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeName|object|false|none|none|
|orderBy|object|false|none|none|

<h2 id="tocS_GetFindingsRequest">GetFindingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfindingsrequest"></a>
<a id="schema_GetFindingsRequest"></a>
<a id="tocSgetfindingsrequest"></a>
<a id="tocsgetfindingsrequest"></a>

```json
{
  "findingIds": {},
  "sortCriteria": {
    "attributeName": {},
    "orderBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findingIds|object|true|none|none|
|sortCriteria|object|false|none|none|

<h2 id="tocS___listOfFinding">__listOfFinding</h2>
<!-- backwards compatibility -->
<a id="schema__listoffinding"></a>
<a id="schema___listOfFinding"></a>
<a id="tocS__listoffinding"></a>
<a id="tocs__listoffinding"></a>

```json
[
  {
    "accountId": {},
    "archived": {},
    "category": {},
    "classificationDetails": {
      "detailedResultsLocation": {},
      "jobArn": {},
      "jobId": {},
      "originType": {},
      "result": {
        "additionalOccurrences": {},
        "customDataIdentifiers": {
          "detections": {},
          "totalCount": {}
        },
        "mimeType": {},
        "sensitiveData": {},
        "sizeClassified": {},
        "status": {
          "code": {},
          "reason": {}
        }
      }
    },
    "count": {},
    "createdAt": {},
    "description": {},
    "id": {},
    "partition": {},
    "policyDetails": {
      "action": {
        "actionType": {},
        "apiCallDetails": {
          "api": {},
          "apiServiceName": {},
          "firstSeen": {},
          "lastSeen": {}
        }
      },
      "actor": {
        "domainDetails": {
          "domainName": {}
        },
        "ipAddressDetails": {
          "ipAddressV4": {},
          "ipCity": {
            "name": {}
          },
          "ipCountry": {
            "code": {},
            "name": {}
          },
          "ipGeoLocation": {
            "lat": {},
            "lon": {}
          },
          "ipOwner": {
            "asn": {},
            "asnOrg": {},
            "isp": {},
            "org": {}
          }
        },
        "userIdentity": {
          "assumedRole": {
            "accessKeyId": {},
            "accountId": {},
            "arn": {},
            "principalId": {},
            "sessionContext": {
              "attributes": {
                "creationDate": {},
                "mfaAuthenticated": {}
              },
              "sessionIssuer": {
                "accountId": {},
                "arn": {},
                "principalId": {},
                "type": {},
                "userName": {}
              }
            }
          },
          "awsAccount": {
            "accountId": {},
            "principalId": {}
          },
          "awsService": {
            "invokedBy": {}
          },
          "federatedUser": {
            "accessKeyId": {},
            "accountId": {},
            "arn": {},
            "principalId": {},
            "sessionContext": {
              "attributes": {
                "creationDate": {},
                "mfaAuthenticated": {}
              },
              "sessionIssuer": {
                "accountId": {},
                "arn": {},
                "principalId": {},
                "type": {},
                "userName": {}
              }
            }
          },
          "iamUser": {
            "accountId": {},
            "arn": {},
            "principalId": {},
            "userName": {}
          },
          "root": {
            "accountId": {},
            "arn": {},
            "principalId": {}
          },
          "type": {}
        }
      }
    },
    "region": {},
    "resourcesAffected": {
      "s3Bucket": {
        "allowsUnencryptedObjectUploads": {},
        "arn": {},
        "createdAt": {},
        "defaultServerSideEncryption": {
          "encryptionType": {},
          "kmsMasterKeyId": {}
        },
        "name": {},
        "owner": {
          "displayName": {},
          "id": {}
        },
        "publicAccess": {
          "effectivePermission": {},
          "permissionConfiguration": {
            "accountLevelPermissions": {
              "blockPublicAccess": {
                "blockPublicAcls": {},
                "blockPublicPolicy": {},
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              }
            },
            "bucketLevelPermissions": {
              "accessControlList": {
                "allowsPublicReadAccess": {},
                "allowsPublicWriteAccess": {}
              },
              "blockPublicAccess": {
                "blockPublicAcls": {},
                "blockPublicPolicy": {},
                "ignorePublicAcls": {},
                "restrictPublicBuckets": {}
              },
              "bucketPolicy": {
                "allowsPublicReadAccess": {},
                "allowsPublicWriteAccess": {}
              }
            }
          }
        },
        "tags": {}
      },
      "s3Object": {
        "bucketArn": {},
        "eTag": {},
        "extension": {},
        "key": {},
        "lastModified": {},
        "path": {},
        "publicAccess": {},
        "serverSideEncryption": {
          "encryptionType": {},
          "kmsMasterKeyId": {}
        },
        "size": {},
        "storageClass": {},
        "tags": {},
        "versionId": {}
      }
    },
    "sample": {},
    "schemaVersion": {},
    "severity": {
      "description": {},
      "score": {}
    },
    "title": {},
    "type": {},
    "updatedAt": {}
  }
]
```

<h2 id="tocS_GetInvitationsCountRequest">GetInvitationsCountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinvitationscountrequest"></a>
<a id="schema_GetInvitationsCountRequest"></a>
<a id="tocSgetinvitationscountrequest"></a>
<a id="tocsgetinvitationscountrequest"></a>

```json
{}
```

<h2 id="tocS_GetMacieSessionRequest">GetMacieSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmaciesessionrequest"></a>
<a id="schema_GetMacieSessionRequest"></a>
<a id="tocSgetmaciesessionrequest"></a>
<a id="tocsgetmaciesessionrequest"></a>

```json
{}
```

<h2 id="tocS_GetMasterAccountRequest">GetMasterAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmasteraccountrequest"></a>
<a id="schema_GetMasterAccountRequest"></a>
<a id="tocSgetmasteraccountrequest"></a>
<a id="tocsgetmasteraccountrequest"></a>

```json
{}
```

<h2 id="tocS_GetMemberRequest">GetMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmemberrequest"></a>
<a id="schema_GetMemberRequest"></a>
<a id="tocSgetmemberrequest"></a>
<a id="tocsgetmemberrequest"></a>

```json
{}
```

<h2 id="tocS_RelationshipStatus">RelationshipStatus</h2>
<!-- backwards compatibility -->
<a id="schemarelationshipstatus"></a>
<a id="schema_RelationshipStatus"></a>
<a id="tocSrelationshipstatus"></a>
<a id="tocsrelationshipstatus"></a>

```json
"Enabled"
```

The current status of the relationship between an account and an associated Amazon Macie administrator account. Possible values are:

<h2 id="tocS_GetResourceProfileRequest">GetResourceProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourceprofilerequest"></a>
<a id="schema_GetResourceProfileRequest"></a>
<a id="tocSgetresourceprofilerequest"></a>
<a id="tocsgetresourceprofilerequest"></a>

```json
{}
```

<h2 id="tocS_ResourceStatistics">ResourceStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaresourcestatistics"></a>
<a id="schema_ResourceStatistics"></a>
<a id="tocSresourcestatistics"></a>
<a id="tocsresourcestatistics"></a>

```json
{
  "totalBytesClassified": {},
  "totalDetections": {},
  "totalDetectionsSuppressed": {},
  "totalItemsClassified": {},
  "totalItemsSensitive": {},
  "totalItemsSkipped": {},
  "totalItemsSkippedInvalidEncryption": {},
  "totalItemsSkippedInvalidKms": {},
  "totalItemsSkippedPermissionDenied": {}
}
```

Provides statistical data for sensitive data discovery metrics that apply to an S3 bucket that Amazon Macie monitors and analyzes for your account. The statistics capture the results of automated sensitive data discovery activities that Macie has performed for the bucket. The data is available only if automated sensitive data discovery is currently enabled for your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalBytesClassified|object|false|none|none|
|totalDetections|object|false|none|none|
|totalDetectionsSuppressed|object|false|none|none|
|totalItemsClassified|object|false|none|none|
|totalItemsSensitive|object|false|none|none|
|totalItemsSkipped|object|false|none|none|
|totalItemsSkippedInvalidEncryption|object|false|none|none|
|totalItemsSkippedInvalidKms|object|false|none|none|
|totalItemsSkippedPermissionDenied|object|false|none|none|

<h2 id="tocS_GetRevealConfigurationRequest">GetRevealConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrevealconfigurationrequest"></a>
<a id="schema_GetRevealConfigurationRequest"></a>
<a id="tocSgetrevealconfigurationrequest"></a>
<a id="tocsgetrevealconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_RevealConfiguration">RevealConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemarevealconfiguration"></a>
<a id="schema_RevealConfiguration"></a>
<a id="tocSrevealconfiguration"></a>
<a id="tocsrevealconfiguration"></a>

```json
{
  "kmsKeyId": {},
  "status": {}
}
```

Specifies the configuration settings for retrieving occurrences of sensitive data reported by findings, and the status of the configuration for an Amazon Macie account. When you enable the configuration for the first time, your request must specify an Key Management Service (KMS) key. Otherwise, an error occurs. Macie uses the specified key to encrypt the sensitive data that you retrieve.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKeyId|object|false|none|none|
|status|object|true|none|none|

<h2 id="tocS_GetSensitiveDataOccurrencesAvailabilityRequest">GetSensitiveDataOccurrencesAvailabilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsensitivedataoccurrencesavailabilityrequest"></a>
<a id="schema_GetSensitiveDataOccurrencesAvailabilityRequest"></a>
<a id="tocSgetsensitivedataoccurrencesavailabilityrequest"></a>
<a id="tocsgetsensitivedataoccurrencesavailabilityrequest"></a>

```json
{}
```

<h2 id="tocS___listOfUnavailabilityReasonCode">__listOfUnavailabilityReasonCode</h2>
<!-- backwards compatibility -->
<a id="schema__listofunavailabilityreasoncode"></a>
<a id="schema___listOfUnavailabilityReasonCode"></a>
<a id="tocS__listofunavailabilityreasoncode"></a>
<a id="tocs__listofunavailabilityreasoncode"></a>

```json
[
  "OBJECT_EXCEEDS_SIZE_QUOTA"
]
```

<h2 id="tocS_GetSensitiveDataOccurrencesRequest">GetSensitiveDataOccurrencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsensitivedataoccurrencesrequest"></a>
<a id="schema_GetSensitiveDataOccurrencesRequest"></a>
<a id="tocSgetsensitivedataoccurrencesrequest"></a>
<a id="tocsgetsensitivedataoccurrencesrequest"></a>

```json
{}
```

<h2 id="tocS_SensitiveDataOccurrences">SensitiveDataOccurrences</h2>
<!-- backwards compatibility -->
<a id="schemasensitivedataoccurrences"></a>
<a id="schema_SensitiveDataOccurrences"></a>
<a id="tocSsensitivedataoccurrences"></a>
<a id="tocssensitivedataoccurrences"></a>

```json
{
  "property1": [
    {
      "value": {}
    }
  ],
  "property2": [
    {
      "value": {}
    }
  ]
}
```

Specifies a type of sensitive data reported by a finding and provides occurrences of the specified type of sensitive data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__listOfDetectedDataDetails](#schema__listofdetecteddatadetails)|false|none|none|

<h2 id="tocS_RevealRequestStatus">RevealRequestStatus</h2>
<!-- backwards compatibility -->
<a id="schemarevealrequeststatus"></a>
<a id="schema_RevealRequestStatus"></a>
<a id="tocSrevealrequeststatus"></a>
<a id="tocsrevealrequeststatus"></a>

```json
"SUCCESS"
```

The status of a request to retrieve occurrences of sensitive data reported by a finding. Possible values are:

<h2 id="tocS_GetSensitivityInspectionTemplateRequest">GetSensitivityInspectionTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsensitivityinspectiontemplaterequest"></a>
<a id="schema_GetSensitivityInspectionTemplateRequest"></a>
<a id="tocSgetsensitivityinspectiontemplaterequest"></a>
<a id="tocsgetsensitivityinspectiontemplaterequest"></a>

```json
{}
```

<h2 id="tocS_SensitivityInspectionTemplateExcludes">SensitivityInspectionTemplateExcludes</h2>
<!-- backwards compatibility -->
<a id="schemasensitivityinspectiontemplateexcludes"></a>
<a id="schema_SensitivityInspectionTemplateExcludes"></a>
<a id="tocSsensitivityinspectiontemplateexcludes"></a>
<a id="tocssensitivityinspectiontemplateexcludes"></a>

```json
{
  "managedDataIdentifierIds": {}
}
```

Specifies managed data identifiers to exclude (not use) when performing automated sensitive data discovery for an Amazon Macie account. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managedDataIdentifierIds|object|false|none|none|

<h2 id="tocS_SensitivityInspectionTemplateIncludes">SensitivityInspectionTemplateIncludes</h2>
<!-- backwards compatibility -->
<a id="schemasensitivityinspectiontemplateincludes"></a>
<a id="schema_SensitivityInspectionTemplateIncludes"></a>
<a id="tocSsensitivityinspectiontemplateincludes"></a>
<a id="tocssensitivityinspectiontemplateincludes"></a>

```json
{
  "allowListIds": {},
  "customDataIdentifierIds": {},
  "managedDataIdentifierIds": {}
}
```

Specifies the allow lists, custom data identifiers, and managed data identifiers to include (use) when performing automated sensitive data discovery for an Amazon Macie account. The configuration must specify at least one custom data identifier or managed data identifier. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowListIds|object|false|none|none|
|customDataIdentifierIds|object|false|none|none|
|managedDataIdentifierIds|object|false|none|none|

<h2 id="tocS___listOfUsageStatisticsFilter">__listOfUsageStatisticsFilter</h2>
<!-- backwards compatibility -->
<a id="schema__listofusagestatisticsfilter"></a>
<a id="schema___listOfUsageStatisticsFilter"></a>
<a id="tocS__listofusagestatisticsfilter"></a>
<a id="tocs__listofusagestatisticsfilter"></a>

```json
[
  {
    "comparator": {},
    "key": {},
    "values": {}
  }
]
```

<h2 id="tocS_UsageStatisticsSortBy">UsageStatisticsSortBy</h2>
<!-- backwards compatibility -->
<a id="schemausagestatisticssortby"></a>
<a id="schema_UsageStatisticsSortBy"></a>
<a id="tocSusagestatisticssortby"></a>
<a id="tocsusagestatisticssortby"></a>

```json
{
  "key": {},
  "orderBy": {}
}
```

Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|orderBy|object|false|none|none|

<h2 id="tocS_TimeRange">TimeRange</h2>
<!-- backwards compatibility -->
<a id="schematimerange"></a>
<a id="schema_TimeRange"></a>
<a id="tocStimerange"></a>
<a id="tocstimerange"></a>

```json
"MONTH_TO_DATE"
```

An inclusive time period that Amazon Macie usage data applies to. Possible values are:

<h2 id="tocS_GetUsageStatisticsRequest">GetUsageStatisticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetusagestatisticsrequest"></a>
<a id="schema_GetUsageStatisticsRequest"></a>
<a id="tocSgetusagestatisticsrequest"></a>
<a id="tocsgetusagestatisticsrequest"></a>

```json
{
  "filterBy": {},
  "maxResults": {},
  "nextToken": {},
  "sortBy": {
    "key": {},
    "orderBy": {}
  },
  "timeRange": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterBy|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|sortBy|object|false|none|none|
|timeRange|object|false|none|none|

<h2 id="tocS___listOfUsageRecord">__listOfUsageRecord</h2>
<!-- backwards compatibility -->
<a id="schema__listofusagerecord"></a>
<a id="schema___listOfUsageRecord"></a>
<a id="tocS__listofusagerecord"></a>
<a id="tocs__listofusagerecord"></a>

```json
[
  {
    "accountId": {},
    "automatedDiscoveryFreeTrialStartDate": {},
    "freeTrialStartDate": {},
    "usage": {}
  }
]
```

<h2 id="tocS_GetUsageTotalsRequest">GetUsageTotalsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetusagetotalsrequest"></a>
<a id="schema_GetUsageTotalsRequest"></a>
<a id="tocSgetusagetotalsrequest"></a>
<a id="tocsgetusagetotalsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfUsageTotal">__listOfUsageTotal</h2>
<!-- backwards compatibility -->
<a id="schema__listofusagetotal"></a>
<a id="schema___listOfUsageTotal"></a>
<a id="tocS__listofusagetotal"></a>
<a id="tocs__listofusagetotal"></a>

```json
[
  {
    "currency": {},
    "estimatedCost": {},
    "type": {}
  }
]
```

<h2 id="tocS_GroupCount">GroupCount</h2>
<!-- backwards compatibility -->
<a id="schemagroupcount"></a>
<a id="schema_GroupCount"></a>
<a id="tocSgroupcount"></a>
<a id="tocsgroupcount"></a>

```json
{
  "count": {},
  "groupKey": {}
}
```

Provides a group of results for a query that retrieved aggregated statistical data about findings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|object|false|none|none|
|groupKey|object|false|none|none|

<h2 id="tocS_IamUser">IamUser</h2>
<!-- backwards compatibility -->
<a id="schemaiamuser"></a>
<a id="schema_IamUser"></a>
<a id="tocSiamuser"></a>
<a id="tocsiamuser"></a>

```json
{
  "accountId": {},
  "arn": {},
  "principalId": {},
  "userName": {}
}
```

Provides information about an Identity and Access Management (IAM) user who performed an action on an affected resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|arn|object|false|none|none|
|principalId|object|false|none|none|
|userName|object|false|none|none|

<h2 id="tocS_IpCity">IpCity</h2>
<!-- backwards compatibility -->
<a id="schemaipcity"></a>
<a id="schema_IpCity"></a>
<a id="tocSipcity"></a>
<a id="tocsipcity"></a>

```json
{
  "name": {}
}
```

Provides information about the city that an IP address originated from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|

<h2 id="tocS_IpCountry">IpCountry</h2>
<!-- backwards compatibility -->
<a id="schemaipcountry"></a>
<a id="schema_IpCountry"></a>
<a id="tocSipcountry"></a>
<a id="tocsipcountry"></a>

```json
{
  "code": {},
  "name": {}
}
```

Provides information about the country that an IP address originated from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_IpGeoLocation">IpGeoLocation</h2>
<!-- backwards compatibility -->
<a id="schemaipgeolocation"></a>
<a id="schema_IpGeoLocation"></a>
<a id="tocSipgeolocation"></a>
<a id="tocsipgeolocation"></a>

```json
{
  "lat": {},
  "lon": {}
}
```

Provides geographic coordinates that indicate where a specified IP address originated from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|object|false|none|none|
|lon|object|false|none|none|

<h2 id="tocS_IpOwner">IpOwner</h2>
<!-- backwards compatibility -->
<a id="schemaipowner"></a>
<a id="schema_IpOwner"></a>
<a id="tocSipowner"></a>
<a id="tocsipowner"></a>

```json
{
  "asn": {},
  "asnOrg": {},
  "isp": {},
  "org": {}
}
```

Provides information about the registered owner of an IP address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asn|object|false|none|none|
|asnOrg|object|false|none|none|
|isp|object|false|none|none|
|org|object|false|none|none|

<h2 id="tocS___double">__double</h2>
<!-- backwards compatibility -->
<a id="schema__double"></a>
<a id="schema___double"></a>
<a id="tocS__double"></a>
<a id="tocs__double"></a>

```json
0
```

<h2 id="tocS_IsDefinedInJob">IsDefinedInJob</h2>
<!-- backwards compatibility -->
<a id="schemaisdefinedinjob"></a>
<a id="schema_IsDefinedInJob"></a>
<a id="tocSisdefinedinjob"></a>
<a id="tocsisdefinedinjob"></a>

```json
"TRUE"
```

<h2 id="tocS_IsMonitoredByJob">IsMonitoredByJob</h2>
<!-- backwards compatibility -->
<a id="schemaismonitoredbyjob"></a>
<a id="schema_IsMonitoredByJob"></a>
<a id="tocSismonitoredbyjob"></a>
<a id="tocsismonitoredbyjob"></a>

```json
"TRUE"
```

<h2 id="tocS_JobComparator">JobComparator</h2>
<!-- backwards compatibility -->
<a id="schemajobcomparator"></a>
<a id="schema_JobComparator"></a>
<a id="tocSjobcomparator"></a>
<a id="tocsjobcomparator"></a>

```json
"EQ"
```

The operator to use in a condition. Depending on the type of condition, possible values are:

<h2 id="tocS_SimpleScopeTerm">SimpleScopeTerm</h2>
<!-- backwards compatibility -->
<a id="schemasimplescopeterm"></a>
<a id="schema_SimpleScopeTerm"></a>
<a id="tocSsimplescopeterm"></a>
<a id="tocssimplescopeterm"></a>

```json
{
  "comparator": {},
  "key": {},
  "values": {}
}
```

Specifies a property-based condition that determines whether an S3 object is included or excluded from a classification job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|object|false|none|none|
|key|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_TagScopeTerm">TagScopeTerm</h2>
<!-- backwards compatibility -->
<a id="schematagscopeterm"></a>
<a id="schema_TagScopeTerm"></a>
<a id="tocStagscopeterm"></a>
<a id="tocstagscopeterm"></a>

```json
{
  "comparator": {},
  "key": {},
  "tagValues": {},
  "target": {}
}
```

Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|object|false|none|none|
|key|object|false|none|none|
|tagValues|object|false|none|none|
|target|object|false|none|none|

<h2 id="tocS_JobScopeTerm">JobScopeTerm</h2>
<!-- backwards compatibility -->
<a id="schemajobscopeterm"></a>
<a id="schema_JobScopeTerm"></a>
<a id="tocSjobscopeterm"></a>
<a id="tocsjobscopeterm"></a>

```json
{
  "simpleScopeTerm": {
    "comparator": {},
    "key": {},
    "values": {}
  },
  "tagScopeTerm": {
    "comparator": {},
    "key": {},
    "tagValues": {},
    "target": {}
  }
}
```

Specifies a property- or tag-based condition that defines criteria for including or excluding S3 objects from a classification job. A JobScopeTerm object can contain only one simpleScopeTerm object or one tagScopeTerm object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|simpleScopeTerm|object|false|none|none|
|tagScopeTerm|object|false|none|none|

<h2 id="tocS___listOfJobScopeTerm">__listOfJobScopeTerm</h2>
<!-- backwards compatibility -->
<a id="schema__listofjobscopeterm"></a>
<a id="schema___listOfJobScopeTerm"></a>
<a id="tocS__listofjobscopeterm"></a>
<a id="tocs__listofjobscopeterm"></a>

```json
[
  {
    "simpleScopeTerm": {
      "comparator": {},
      "key": {},
      "values": {}
    },
    "tagScopeTerm": {
      "comparator": {},
      "key": {},
      "tagValues": {},
      "target": {}
    }
  }
]
```

<h2 id="tocS_JobScopingBlock">JobScopingBlock</h2>
<!-- backwards compatibility -->
<a id="schemajobscopingblock"></a>
<a id="schema_JobScopingBlock"></a>
<a id="tocSjobscopingblock"></a>
<a id="tocsjobscopingblock"></a>

```json
{
  "and": {}
}
```

Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|and|object|false|none|none|

<h2 id="tocS_JobSummary">JobSummary</h2>
<!-- backwards compatibility -->
<a id="schemajobsummary"></a>
<a id="schema_JobSummary"></a>
<a id="tocSjobsummary"></a>
<a id="tocsjobsummary"></a>

```json
{
  "bucketCriteria": {
    "excludes": {
      "and": {}
    },
    "includes": {
      "and": {}
    }
  },
  "bucketDefinitions": {},
  "createdAt": {},
  "jobId": {},
  "jobStatus": {},
  "jobType": {},
  "lastRunErrorStatus": {
    "code": {}
  },
  "name": {},
  "userPausedDetails": {
    "jobExpiresAt": {},
    "jobImminentExpirationHealthEventArn": {},
    "jobPausedAt": {}
  }
}
```

Provides information about a classification job, including the current status of the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketCriteria|object|false|none|none|
|bucketDefinitions|object|false|none|none|
|createdAt|object|false|none|none|
|jobId|object|false|none|none|
|jobStatus|object|false|none|none|
|jobType|object|false|none|none|
|lastRunErrorStatus|object|false|none|none|
|name|object|false|none|none|
|userPausedDetails|object|false|none|none|

<h2 id="tocS_KeyValuePair">KeyValuePair</h2>
<!-- backwards compatibility -->
<a id="schemakeyvaluepair"></a>
<a id="schema_KeyValuePair"></a>
<a id="tocSkeyvaluepair"></a>
<a id="tocskeyvaluepair"></a>

```json
{
  "key": {},
  "value": {}
}
```

Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_KeyValuePairList">KeyValuePairList</h2>
<!-- backwards compatibility -->
<a id="schemakeyvaluepairlist"></a>
<a id="schema_KeyValuePairList"></a>
<a id="tocSkeyvaluepairlist"></a>
<a id="tocskeyvaluepairlist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.

<h2 id="tocS_LastRunErrorStatusCode">LastRunErrorStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemalastrunerrorstatuscode"></a>
<a id="schema_LastRunErrorStatusCode"></a>
<a id="tocSlastrunerrorstatuscode"></a>
<a id="tocslastrunerrorstatuscode"></a>

```json
"NONE"
```

Specifies whether any account- or bucket-level access errors occurred during the run of a one-time classification job or the most recent run of a recurring classification job. Possible values are:

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListAllowListsRequest">ListAllowListsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistallowlistsrequest"></a>
<a id="schema_ListAllowListsRequest"></a>
<a id="tocSlistallowlistsrequest"></a>
<a id="tocslistallowlistsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfAllowListSummary">__listOfAllowListSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofallowlistsummary"></a>
<a id="schema___listOfAllowListSummary"></a>
<a id="tocS__listofallowlistsummary"></a>
<a id="tocs__listofallowlistsummary"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "description": {},
    "id": {},
    "name": {},
    "updatedAt": {}
  }
]
```

<h2 id="tocS_ListJobsFilterCriteria">ListJobsFilterCriteria</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsfiltercriteria"></a>
<a id="schema_ListJobsFilterCriteria"></a>
<a id="tocSlistjobsfiltercriteria"></a>
<a id="tocslistjobsfiltercriteria"></a>

```json
{
  "excludes": {},
  "includes": {}
}
```

Specifies criteria for filtering the results of a request for information about classification jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludes|object|false|none|none|
|includes|object|false|none|none|

<h2 id="tocS_ListJobsSortCriteria">ListJobsSortCriteria</h2>
<!-- backwards compatibility -->
<a id="schemalistjobssortcriteria"></a>
<a id="schema_ListJobsSortCriteria"></a>
<a id="tocSlistjobssortcriteria"></a>
<a id="tocslistjobssortcriteria"></a>

```json
{
  "attributeName": {},
  "orderBy": {}
}
```

Specifies criteria for sorting the results of a request for information about classification jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeName|object|false|none|none|
|orderBy|object|false|none|none|

<h2 id="tocS_ListClassificationJobsRequest">ListClassificationJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistclassificationjobsrequest"></a>
<a id="schema_ListClassificationJobsRequest"></a>
<a id="tocSlistclassificationjobsrequest"></a>
<a id="tocslistclassificationjobsrequest"></a>

```json
{
  "filterCriteria": {
    "excludes": {},
    "includes": {}
  },
  "maxResults": {},
  "nextToken": {},
  "sortCriteria": {
    "attributeName": {},
    "orderBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterCriteria|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|sortCriteria|object|false|none|none|

<h2 id="tocS___listOfJobSummary">__listOfJobSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofjobsummary"></a>
<a id="schema___listOfJobSummary"></a>
<a id="tocS__listofjobsummary"></a>
<a id="tocs__listofjobsummary"></a>

```json
[
  {
    "bucketCriteria": {
      "excludes": {
        "and": {}
      },
      "includes": {
        "and": {}
      }
    },
    "bucketDefinitions": {},
    "createdAt": {},
    "jobId": {},
    "jobStatus": {},
    "jobType": {},
    "lastRunErrorStatus": {
      "code": {}
    },
    "name": {},
    "userPausedDetails": {
      "jobExpiresAt": {},
      "jobImminentExpirationHealthEventArn": {},
      "jobPausedAt": {}
    }
  }
]
```

<h2 id="tocS_ListClassificationScopesRequest">ListClassificationScopesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistclassificationscopesrequest"></a>
<a id="schema_ListClassificationScopesRequest"></a>
<a id="tocSlistclassificationscopesrequest"></a>
<a id="tocslistclassificationscopesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfClassificationScopeSummary">__listOfClassificationScopeSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofclassificationscopesummary"></a>
<a id="schema___listOfClassificationScopeSummary"></a>
<a id="tocS__listofclassificationscopesummary"></a>
<a id="tocs__listofclassificationscopesummary"></a>

```json
[
  {
    "id": {},
    "name": {}
  }
]
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

Specifies which page of results to return in a paginated response.

<h2 id="tocS_ListCustomDataIdentifiersRequest">ListCustomDataIdentifiersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomdataidentifiersrequest"></a>
<a id="schema_ListCustomDataIdentifiersRequest"></a>
<a id="tocSlistcustomdataidentifiersrequest"></a>
<a id="tocslistcustomdataidentifiersrequest"></a>

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS___listOfCustomDataIdentifierSummary">__listOfCustomDataIdentifierSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofcustomdataidentifiersummary"></a>
<a id="schema___listOfCustomDataIdentifierSummary"></a>
<a id="tocS__listofcustomdataidentifiersummary"></a>
<a id="tocs__listofcustomdataidentifiersummary"></a>

```json
[
  {
    "arn": {},
    "createdAt": {},
    "description": {},
    "id": {},
    "name": {}
  }
]
```

<h2 id="tocS_ListFindingsFiltersRequest">ListFindingsFiltersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfindingsfiltersrequest"></a>
<a id="schema_ListFindingsFiltersRequest"></a>
<a id="tocSlistfindingsfiltersrequest"></a>
<a id="tocslistfindingsfiltersrequest"></a>

```json
{}
```

<h2 id="tocS___listOfFindingsFilterListItem">__listOfFindingsFilterListItem</h2>
<!-- backwards compatibility -->
<a id="schema__listoffindingsfilterlistitem"></a>
<a id="schema___listOfFindingsFilterListItem"></a>
<a id="tocS__listoffindingsfilterlistitem"></a>
<a id="tocs__listoffindingsfilterlistitem"></a>

```json
[
  {
    "action": {},
    "arn": {},
    "id": {},
    "name": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ListFindingsRequest">ListFindingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfindingsrequest"></a>
<a id="schema_ListFindingsRequest"></a>
<a id="tocSlistfindingsrequest"></a>
<a id="tocslistfindingsrequest"></a>

```json
{
  "findingCriteria": {
    "criterion": {
      "property1": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      },
      "property2": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      }
    }
  },
  "maxResults": {},
  "nextToken": {},
  "sortCriteria": {
    "attributeName": {},
    "orderBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findingCriteria|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|sortCriteria|object|false|none|none|

<h2 id="tocS_ListInvitationsRequest">ListInvitationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinvitationsrequest"></a>
<a id="schema_ListInvitationsRequest"></a>
<a id="tocSlistinvitationsrequest"></a>
<a id="tocslistinvitationsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfInvitation">__listOfInvitation</h2>
<!-- backwards compatibility -->
<a id="schema__listofinvitation"></a>
<a id="schema___listOfInvitation"></a>
<a id="tocS__listofinvitation"></a>
<a id="tocs__listofinvitation"></a>

```json
[
  {
    "accountId": {},
    "invitationId": {},
    "invitedAt": {},
    "relationshipStatus": {}
  }
]
```

<h2 id="tocS_ListJobsFilterKey">ListJobsFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsfilterkey"></a>
<a id="schema_ListJobsFilterKey"></a>
<a id="tocSlistjobsfilterkey"></a>
<a id="tocslistjobsfilterkey"></a>

```json
"jobType"
```

The property to use to filter the results. Valid values are:

<h2 id="tocS_ListJobsFilterTerm">ListJobsFilterTerm</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsfilterterm"></a>
<a id="schema_ListJobsFilterTerm"></a>
<a id="tocSlistjobsfilterterm"></a>
<a id="tocslistjobsfilterterm"></a>

```json
{
  "comparator": {},
  "key": {},
  "values": {}
}
```

Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|object|false|none|none|
|key|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_ListManagedDataIdentifiersRequest">ListManagedDataIdentifiersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmanageddataidentifiersrequest"></a>
<a id="schema_ListManagedDataIdentifiersRequest"></a>
<a id="tocSlistmanageddataidentifiersrequest"></a>
<a id="tocslistmanageddataidentifiersrequest"></a>

```json
{
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|

<h2 id="tocS___listOfManagedDataIdentifierSummary">__listOfManagedDataIdentifierSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofmanageddataidentifiersummary"></a>
<a id="schema___listOfManagedDataIdentifierSummary"></a>
<a id="tocS__listofmanageddataidentifiersummary"></a>
<a id="tocs__listofmanageddataidentifiersummary"></a>

```json
[
  {
    "category": {},
    "id": {}
  }
]
```

<h2 id="tocS_ListMembersRequest">ListMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmembersrequest"></a>
<a id="schema_ListMembersRequest"></a>
<a id="tocSlistmembersrequest"></a>
<a id="tocslistmembersrequest"></a>

```json
{}
```

<h2 id="tocS___listOfMember">__listOfMember</h2>
<!-- backwards compatibility -->
<a id="schema__listofmember"></a>
<a id="schema___listOfMember"></a>
<a id="tocS__listofmember"></a>
<a id="tocs__listofmember"></a>

```json
[
  {
    "accountId": {},
    "administratorAccountId": {},
    "arn": {},
    "email": {},
    "invitedAt": {},
    "masterAccountId": {},
    "relationshipStatus": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "updatedAt": {}
  }
]
```

<h2 id="tocS_ListOrganizationAdminAccountsRequest">ListOrganizationAdminAccountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationadminaccountsrequest"></a>
<a id="schema_ListOrganizationAdminAccountsRequest"></a>
<a id="tocSlistorganizationadminaccountsrequest"></a>
<a id="tocslistorganizationadminaccountsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfAdminAccount">__listOfAdminAccount</h2>
<!-- backwards compatibility -->
<a id="schema__listofadminaccount"></a>
<a id="schema___listOfAdminAccount"></a>
<a id="tocS__listofadminaccount"></a>
<a id="tocs__listofadminaccount"></a>

```json
[
  {
    "accountId": {},
    "status": {}
  }
]
```

<h2 id="tocS_ListResourceProfileArtifactsRequest">ListResourceProfileArtifactsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourceprofileartifactsrequest"></a>
<a id="schema_ListResourceProfileArtifactsRequest"></a>
<a id="tocSlistresourceprofileartifactsrequest"></a>
<a id="tocslistresourceprofileartifactsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfResourceProfileArtifact">__listOfResourceProfileArtifact</h2>
<!-- backwards compatibility -->
<a id="schema__listofresourceprofileartifact"></a>
<a id="schema___listOfResourceProfileArtifact"></a>
<a id="tocS__listofresourceprofileartifact"></a>
<a id="tocs__listofresourceprofileartifact"></a>

```json
[
  {
    "arn": {},
    "classificationResultStatus": {},
    "sensitive": {}
  }
]
```

<h2 id="tocS_ListResourceProfileDetectionsRequest">ListResourceProfileDetectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourceprofiledetectionsrequest"></a>
<a id="schema_ListResourceProfileDetectionsRequest"></a>
<a id="tocSlistresourceprofiledetectionsrequest"></a>
<a id="tocslistresourceprofiledetectionsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfDetection">__listOfDetection</h2>
<!-- backwards compatibility -->
<a id="schema__listofdetection"></a>
<a id="schema___listOfDetection"></a>
<a id="tocS__listofdetection"></a>
<a id="tocs__listofdetection"></a>

```json
[
  {
    "arn": {},
    "count": {},
    "id": {},
    "name": {},
    "suppressed": {},
    "type": {}
  }
]
```

<h2 id="tocS_ListSensitivityInspectionTemplatesRequest">ListSensitivityInspectionTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsensitivityinspectiontemplatesrequest"></a>
<a id="schema_ListSensitivityInspectionTemplatesRequest"></a>
<a id="tocSlistsensitivityinspectiontemplatesrequest"></a>
<a id="tocslistsensitivityinspectiontemplatesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfSensitivityInspectionTemplatesEntry">__listOfSensitivityInspectionTemplatesEntry</h2>
<!-- backwards compatibility -->
<a id="schema__listofsensitivityinspectiontemplatesentry"></a>
<a id="schema___listOfSensitivityInspectionTemplatesEntry"></a>
<a id="tocS__listofsensitivityinspectiontemplatesentry"></a>
<a id="tocs__listofsensitivityinspectiontemplatesentry"></a>

```json
[
  {
    "id": {},
    "name": {}
  }
]
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_SensitiveDataItemCategory">SensitiveDataItemCategory</h2>
<!-- backwards compatibility -->
<a id="schemasensitivedataitemcategory"></a>
<a id="schema_SensitiveDataItemCategory"></a>
<a id="tocSsensitivedataitemcategory"></a>
<a id="tocssensitivedataitemcategory"></a>

```json
"FINANCIAL_INFORMATION"
```

For a finding, the category of sensitive data that was detected and produced the finding. For a managed data identifier, the category of sensitive data that the managed data identifier detects. Possible values are:

<h2 id="tocS_ManagedDataIdentifierSummary">ManagedDataIdentifierSummary</h2>
<!-- backwards compatibility -->
<a id="schemamanageddataidentifiersummary"></a>
<a id="schema_ManagedDataIdentifierSummary"></a>
<a id="tocSmanageddataidentifiersummary"></a>
<a id="tocsmanageddataidentifiersummary"></a>

```json
{
  "category": {},
  "id": {}
}
```

Provides information about a managed data identifier. For additional information, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|object|false|none|none|
|id|object|false|none|none|

<h2 id="tocS_MatchingBucket">MatchingBucket</h2>
<!-- backwards compatibility -->
<a id="schemamatchingbucket"></a>
<a id="schema_MatchingBucket"></a>
<a id="tocSmatchingbucket"></a>
<a id="tocsmatchingbucket"></a>

```json
{
  "accountId": {},
  "bucketName": {},
  "classifiableObjectCount": {},
  "classifiableSizeInBytes": {},
  "errorCode": {},
  "errorMessage": {},
  "jobDetails": {
    "isDefinedInJob": {},
    "isMonitoredByJob": {},
    "lastJobId": {},
    "lastJobRunTime": {}
  },
  "lastAutomatedDiscoveryTime": {},
  "objectCount": {},
  "objectCountByEncryptionType": {
    "customerManaged": {},
    "kmsManaged": {},
    "s3Managed": {},
    "unencrypted": {},
    "unknown": {}
  },
  "sensitivityScore": {},
  "sizeInBytes": {},
  "sizeInBytesCompressed": {},
  "unclassifiableObjectCount": {
    "fileType": {},
    "storageClass": {},
    "total": {}
  },
  "unclassifiableObjectSizeInBytes": {
    "fileType": {},
    "storageClass": {},
    "total": {}
  }
}
```

<p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html">How Macie monitors Amazon S3 data security</a> in the <i>Amazon Macie User Guide</i>.</p> <p>If an error occurs when Macie attempts to retrieve and process information about the bucket or the bucket's objects, the value for most of these properties is null. Key exceptions are accountId and bucketName. To identify the cause of the error, refer to the errorCode and errorMessage values.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|bucketName|object|false|none|none|
|classifiableObjectCount|object|false|none|none|
|classifiableSizeInBytes|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|
|jobDetails|object|false|none|none|
|lastAutomatedDiscoveryTime|object|false|none|none|
|objectCount|object|false|none|none|
|objectCountByEncryptionType|object|false|none|none|
|sensitivityScore|object|false|none|none|
|sizeInBytes|object|false|none|none|
|sizeInBytesCompressed|object|false|none|none|
|unclassifiableObjectCount|object|false|none|none|
|unclassifiableObjectSizeInBytes|object|false|none|none|

<h2 id="tocS_MatchingResource">MatchingResource</h2>
<!-- backwards compatibility -->
<a id="schemamatchingresource"></a>
<a id="schema_MatchingResource"></a>
<a id="tocSmatchingresource"></a>
<a id="tocsmatchingresource"></a>

```json
{
  "matchingBucket": {
    "accountId": {},
    "bucketName": {},
    "classifiableObjectCount": {},
    "classifiableSizeInBytes": {},
    "errorCode": {},
    "errorMessage": {},
    "jobDetails": {
      "isDefinedInJob": {},
      "isMonitoredByJob": {},
      "lastJobId": {},
      "lastJobRunTime": {}
    },
    "lastAutomatedDiscoveryTime": {},
    "objectCount": {},
    "objectCountByEncryptionType": {
      "customerManaged": {},
      "kmsManaged": {},
      "s3Managed": {},
      "unencrypted": {},
      "unknown": {}
    },
    "sensitivityScore": {},
    "sizeInBytes": {},
    "sizeInBytesCompressed": {},
    "unclassifiableObjectCount": {
      "fileType": {},
      "storageClass": {},
      "total": {}
    },
    "unclassifiableObjectSizeInBytes": {
      "fileType": {},
      "storageClass": {},
      "total": {}
    }
  }
}
```

Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes for your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchingBucket|object|false|none|none|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "accountId": {},
  "administratorAccountId": {},
  "arn": {},
  "email": {},
  "invitedAt": {},
  "masterAccountId": {},
  "relationshipStatus": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "updatedAt": {}
}
```

Provides information about an account that's associated with an Amazon Macie administrator account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|administratorAccountId|object|false|none|none|
|arn|object|false|none|none|
|email|object|false|none|none|
|invitedAt|object|false|none|none|
|masterAccountId|object|false|none|none|
|relationshipStatus|object|false|none|none|
|tags|object|false|none|none|
|updatedAt|object|false|none|none|

<h2 id="tocS_Ranges">Ranges</h2>
<!-- backwards compatibility -->
<a id="schemaranges"></a>
<a id="schema_Ranges"></a>
<a id="tocSranges"></a>
<a id="tocsranges"></a>

```json
[
  {
    "end": {},
    "start": {},
    "startColumn": {}
  }
]
```

Specifies the locations of occurrences of sensitive data in a non-binary text file.

<h2 id="tocS_Pages">Pages</h2>
<!-- backwards compatibility -->
<a id="schemapages"></a>
<a id="schema_Pages"></a>
<a id="tocSpages"></a>
<a id="tocspages"></a>

```json
[
  {
    "lineRange": {
      "end": {},
      "start": {},
      "startColumn": {}
    },
    "offsetRange": {
      "end": {},
      "start": {},
      "startColumn": {}
    },
    "pageNumber": {}
  }
]
```

Specifies the location of occurrences of sensitive data in an Adobe Portable Document Format file.

<h2 id="tocS_Records">Records</h2>
<!-- backwards compatibility -->
<a id="schemarecords"></a>
<a id="schema_Records"></a>
<a id="tocSrecords"></a>
<a id="tocsrecords"></a>

```json
[
  {
    "jsonPath": {},
    "recordIndex": {}
  }
]
```

Specifies the locations of occurrences of sensitive data in an Apache Avro object container or a structured data file.

<h2 id="tocS_Range">Range</h2>
<!-- backwards compatibility -->
<a id="schemarange"></a>
<a id="schema_Range"></a>
<a id="tocSrange"></a>
<a id="tocsrange"></a>

```json
{
  "end": {},
  "start": {},
  "startColumn": {}
}
```

Specifies the location of an occurrence of sensitive data in an email message or a non-binary text file such as an HTML, TXT, or XML file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|object|false|none|none|
|start|object|false|none|none|
|startColumn|object|false|none|none|

<h2 id="tocS_Page">Page</h2>
<!-- backwards compatibility -->
<a id="schemapage"></a>
<a id="schema_Page"></a>
<a id="tocSpage"></a>
<a id="tocspage"></a>

```json
{
  "lineRange": {
    "end": {},
    "start": {},
    "startColumn": {}
  },
  "offsetRange": {
    "end": {},
    "start": {},
    "startColumn": {}
  },
  "pageNumber": {}
}
```

Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineRange|object|false|none|none|
|offsetRange|object|false|none|none|
|pageNumber|object|false|none|none|

<h2 id="tocS_PutClassificationExportConfigurationRequest">PutClassificationExportConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputclassificationexportconfigurationrequest"></a>
<a id="schema_PutClassificationExportConfigurationRequest"></a>
<a id="tocSputclassificationexportconfigurationrequest"></a>
<a id="tocsputclassificationexportconfigurationrequest"></a>

```json
{
  "configuration": {
    "s3Destination": {
      "bucketName": {},
      "keyPrefix": {},
      "kmsKeyArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|true|none|none|

<h2 id="tocS_PutFindingsPublicationConfigurationRequest">PutFindingsPublicationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputfindingspublicationconfigurationrequest"></a>
<a id="schema_PutFindingsPublicationConfigurationRequest"></a>
<a id="tocSputfindingspublicationconfigurationrequest"></a>
<a id="tocsputfindingspublicationconfigurationrequest"></a>

```json
{
  "clientToken": {},
  "securityHubConfiguration": {
    "publishClassificationFindings": {},
    "publishPolicyFindings": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|securityHubConfiguration|object|false|none|none|

<h2 id="tocS_Record">Record</h2>
<!-- backwards compatibility -->
<a id="schemarecord"></a>
<a id="schema_Record"></a>
<a id="tocSrecord"></a>
<a id="tocsrecord"></a>

```json
{
  "jsonPath": {},
  "recordIndex": {}
}
```

Specifies the location of an occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jsonPath|object|false|none|none|
|recordIndex|object|false|none|none|

<h2 id="tocS_ResourceProfileArtifact">ResourceProfileArtifact</h2>
<!-- backwards compatibility -->
<a id="schemaresourceprofileartifact"></a>
<a id="schema_ResourceProfileArtifact"></a>
<a id="tocSresourceprofileartifact"></a>
<a id="tocsresourceprofileartifact"></a>

```json
{
  "arn": {},
  "classificationResultStatus": {},
  "sensitive": {}
}
```

Provides information about an S3 object that Amazon Macie selected for analysis while performing automated sensitive data discovery for an S3 bucket, and the status and results of the analysis. This information is available only if automated sensitive data discovery is currently enabled for your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|classificationResultStatus|object|true|none|none|
|sensitive|object|false|none|none|

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
{
  "allowsUnencryptedObjectUploads": {},
  "arn": {},
  "createdAt": {},
  "defaultServerSideEncryption": {
    "encryptionType": {},
    "kmsMasterKeyId": {}
  },
  "name": {},
  "owner": {
    "displayName": {},
    "id": {}
  },
  "publicAccess": {
    "effectivePermission": {},
    "permissionConfiguration": {
      "accountLevelPermissions": {
        "blockPublicAccess": {
          "blockPublicAcls": {},
          "blockPublicPolicy": {},
          "ignorePublicAcls": {},
          "restrictPublicBuckets": {}
        }
      },
      "bucketLevelPermissions": {
        "accessControlList": {
          "allowsPublicReadAccess": {},
          "allowsPublicWriteAccess": {}
        },
        "blockPublicAccess": {
          "blockPublicAcls": {},
          "blockPublicPolicy": {},
          "ignorePublicAcls": {},
          "restrictPublicBuckets": {}
        },
        "bucketPolicy": {
          "allowsPublicReadAccess": {},
          "allowsPublicWriteAccess": {}
        }
      }
    }
  },
  "tags": {}
}
```

Provides information about the S3 bucket that a finding applies to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowsUnencryptedObjectUploads|object|false|none|none|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|defaultServerSideEncryption|object|false|none|none|
|name|object|false|none|none|
|owner|object|false|none|none|
|publicAccess|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_S3Object">S3Object</h2>
<!-- backwards compatibility -->
<a id="schemas3object"></a>
<a id="schema_S3Object"></a>
<a id="tocSs3object"></a>
<a id="tocss3object"></a>

```json
{
  "bucketArn": {},
  "eTag": {},
  "extension": {},
  "key": {},
  "lastModified": {},
  "path": {},
  "publicAccess": {},
  "serverSideEncryption": {
    "encryptionType": {},
    "kmsMasterKeyId": {}
  },
  "size": {},
  "storageClass": {},
  "tags": {},
  "versionId": {}
}
```

Provides information about the S3 object that a finding applies to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketArn|object|false|none|none|
|eTag|object|false|none|none|
|extension|object|false|none|none|
|key|object|false|none|none|
|lastModified|object|false|none|none|
|path|object|false|none|none|
|publicAccess|object|false|none|none|
|serverSideEncryption|object|false|none|none|
|size|object|false|none|none|
|storageClass|object|false|none|none|
|tags|object|false|none|none|
|versionId|object|false|none|none|

<h2 id="tocS_ServerSideEncryption">ServerSideEncryption</h2>
<!-- backwards compatibility -->
<a id="schemaserversideencryption"></a>
<a id="schema_ServerSideEncryption"></a>
<a id="tocSserversideencryption"></a>
<a id="tocsserversideencryption"></a>

```json
{
  "encryptionType": {},
  "kmsMasterKeyId": {}
}
```

Provides information about the default server-side encryption settings for an S3 bucket or the encryption settings for an S3 object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionType|object|false|none|none|
|kmsMasterKeyId|object|false|none|none|

<h2 id="tocS_S3BucketOwner">S3BucketOwner</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketowner"></a>
<a id="schema_S3BucketOwner"></a>
<a id="tocSs3bucketowner"></a>
<a id="tocss3bucketowner"></a>

```json
{
  "displayName": {},
  "id": {}
}
```

Provides information about the Amazon Web Services account that owns an S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|object|false|none|none|
|id|object|false|none|none|

<h2 id="tocS_S3BucketDefinitionForJob">S3BucketDefinitionForJob</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketdefinitionforjob"></a>
<a id="schema_S3BucketDefinitionForJob"></a>
<a id="tocSs3bucketdefinitionforjob"></a>
<a id="tocss3bucketdefinitionforjob"></a>

```json
{
  "accountId": {},
  "buckets": {}
}
```

Specifies an Amazon Web Services account that owns S3 buckets for a classification job to analyze, and one or more specific buckets to analyze for that account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|true|none|none|
|buckets|object|true|none|none|

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

The name of an S3 bucket.

<h2 id="tocS_S3ClassificationScopeExclusion">S3ClassificationScopeExclusion</h2>
<!-- backwards compatibility -->
<a id="schemas3classificationscopeexclusion"></a>
<a id="schema_S3ClassificationScopeExclusion"></a>
<a id="tocSs3classificationscopeexclusion"></a>
<a id="tocss3classificationscopeexclusion"></a>

```json
{
  "bucketNames": {}
}
```

Specifies the names of the S3 buckets that are excluded from automated sensitive data discovery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketNames|object|true|none|none|

<h2 id="tocS___listOfS3BucketName">__listOfS3BucketName</h2>
<!-- backwards compatibility -->
<a id="schema__listofs3bucketname"></a>
<a id="schema___listOfS3BucketName"></a>
<a id="tocS__listofs3bucketname"></a>
<a id="tocs__listofs3bucketname"></a>

```json
[
  "string"
]
```

<h2 id="tocS_S3ClassificationScopeUpdate">S3ClassificationScopeUpdate</h2>
<!-- backwards compatibility -->
<a id="schemas3classificationscopeupdate"></a>
<a id="schema_S3ClassificationScopeUpdate"></a>
<a id="tocSs3classificationscopeupdate"></a>
<a id="tocss3classificationscopeupdate"></a>

```json
{
  "excludes": {
    "bucketNames": {},
    "operation": {}
  }
}
```

Specifies changes to the list of S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludes|object|true|none|none|

<h2 id="tocS_StorageClass">StorageClass</h2>
<!-- backwards compatibility -->
<a id="schemastorageclass"></a>
<a id="schema_StorageClass"></a>
<a id="tocSstorageclass"></a>
<a id="tocsstorageclass"></a>

```json
"STANDARD"
```

The storage class of the S3 object. Possible values are:

<h2 id="tocS___stringMin3Max255PatternAZaZ093255">__stringMin3Max255PatternAZaZ093255</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin3max255patternazaz093255"></a>
<a id="schema___stringMin3Max255PatternAZaZ093255"></a>
<a id="tocS__stringmin3max255patternazaz093255"></a>
<a id="tocs__stringmin3max255patternazaz093255"></a>

```json
"string"
```

<h2 id="tocS_ScopeFilterKey">ScopeFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemascopefilterkey"></a>
<a id="schema_ScopeFilterKey"></a>
<a id="tocSscopefilterkey"></a>
<a id="tocsscopefilterkey"></a>

```json
"OBJECT_EXTENSION"
```

The property to use in a condition that determines whether an S3 object is included or excluded from a classification job. Valid values are:

<h2 id="tocS_SearchResourcesBucketCriteria">SearchResourcesBucketCriteria</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcesbucketcriteria"></a>
<a id="schema_SearchResourcesBucketCriteria"></a>
<a id="tocSsearchresourcesbucketcriteria"></a>
<a id="tocssearchresourcesbucketcriteria"></a>

```json
{
  "excludes": {
    "and": {}
  },
  "includes": {
    "and": {}
  }
}
```

Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludes|object|false|none|none|
|includes|object|false|none|none|

<h2 id="tocS_SearchResourcesComparator">SearchResourcesComparator</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcescomparator"></a>
<a id="schema_SearchResourcesComparator"></a>
<a id="tocSsearchresourcescomparator"></a>
<a id="tocssearchresourcescomparator"></a>

```json
"EQ"
```

The operator to use in a condition that filters the results of a query. Valid values are:

<h2 id="tocS_SearchResourcesSimpleCriterion">SearchResourcesSimpleCriterion</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcessimplecriterion"></a>
<a id="schema_SearchResourcesSimpleCriterion"></a>
<a id="tocSsearchresourcessimplecriterion"></a>
<a id="tocssearchresourcessimplecriterion"></a>

```json
{
  "comparator": {},
  "key": {},
  "values": {}
}
```

Specifies a property-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|object|false|none|none|
|key|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_SearchResourcesTagCriterion">SearchResourcesTagCriterion</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcestagcriterion"></a>
<a id="schema_SearchResourcesTagCriterion"></a>
<a id="tocSsearchresourcestagcriterion"></a>
<a id="tocssearchresourcestagcriterion"></a>

```json
{
  "comparator": {},
  "tagValues": {}
}
```

Specifies a tag-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparator|object|false|none|none|
|tagValues|object|false|none|none|

<h2 id="tocS_SearchResourcesCriteria">SearchResourcesCriteria</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcescriteria"></a>
<a id="schema_SearchResourcesCriteria"></a>
<a id="tocSsearchresourcescriteria"></a>
<a id="tocssearchresourcescriteria"></a>

```json
{
  "simpleCriterion": {
    "comparator": {},
    "key": {},
    "values": {}
  },
  "tagCriterion": {
    "comparator": {},
    "tagValues": {}
  }
}
```

Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|simpleCriterion|object|false|none|none|
|tagCriterion|object|false|none|none|

<h2 id="tocS___listOfSearchResourcesCriteria">__listOfSearchResourcesCriteria</h2>
<!-- backwards compatibility -->
<a id="schema__listofsearchresourcescriteria"></a>
<a id="schema___listOfSearchResourcesCriteria"></a>
<a id="tocS__listofsearchresourcescriteria"></a>
<a id="tocs__listofsearchresourcescriteria"></a>

```json
[
  {
    "simpleCriterion": {
      "comparator": {},
      "key": {},
      "values": {}
    },
    "tagCriterion": {
      "comparator": {},
      "tagValues": {}
    }
  }
]
```

<h2 id="tocS_SearchResourcesSortCriteria">SearchResourcesSortCriteria</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcessortcriteria"></a>
<a id="schema_SearchResourcesSortCriteria"></a>
<a id="tocSsearchresourcessortcriteria"></a>
<a id="tocssearchresourcessortcriteria"></a>

```json
{
  "attributeName": {},
  "orderBy": {}
}
```

Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeName|object|false|none|none|
|orderBy|object|false|none|none|

<h2 id="tocS_SearchResourcesRequest">SearchResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcesrequest"></a>
<a id="schema_SearchResourcesRequest"></a>
<a id="tocSsearchresourcesrequest"></a>
<a id="tocssearchresourcesrequest"></a>

```json
{
  "bucketCriteria": {
    "excludes": {
      "and": {}
    },
    "includes": {
      "and": {}
    }
  },
  "maxResults": {},
  "nextToken": {},
  "sortCriteria": {
    "attributeName": {},
    "orderBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketCriteria|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|sortCriteria|object|false|none|none|

<h2 id="tocS___listOfMatchingResource">__listOfMatchingResource</h2>
<!-- backwards compatibility -->
<a id="schema__listofmatchingresource"></a>
<a id="schema___listOfMatchingResource"></a>
<a id="tocS__listofmatchingresource"></a>
<a id="tocs__listofmatchingresource"></a>

```json
[
  {
    "matchingBucket": {
      "accountId": {},
      "bucketName": {},
      "classifiableObjectCount": {},
      "classifiableSizeInBytes": {},
      "errorCode": {},
      "errorMessage": {},
      "jobDetails": {
        "isDefinedInJob": {},
        "isMonitoredByJob": {},
        "lastJobId": {},
        "lastJobRunTime": {}
      },
      "lastAutomatedDiscoveryTime": {},
      "objectCount": {},
      "objectCountByEncryptionType": {
        "customerManaged": {},
        "kmsManaged": {},
        "s3Managed": {},
        "unencrypted": {},
        "unknown": {}
      },
      "sensitivityScore": {},
      "sizeInBytes": {},
      "sizeInBytesCompressed": {},
      "unclassifiableObjectCount": {
        "fileType": {},
        "storageClass": {},
        "total": {}
      },
      "unclassifiableObjectSizeInBytes": {
        "fileType": {},
        "storageClass": {},
        "total": {}
      }
    }
  }
]
```

<h2 id="tocS_SearchResourcesSimpleCriterionKey">SearchResourcesSimpleCriterionKey</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcessimplecriterionkey"></a>
<a id="schema_SearchResourcesSimpleCriterionKey"></a>
<a id="tocSsearchresourcessimplecriterionkey"></a>
<a id="tocssearchresourcessimplecriterionkey"></a>

```json
"ACCOUNT_ID"
```

The property to use in a condition that filters the query results. Valid values are:

<h2 id="tocS___listOfSearchResourcesTagCriterionPair">__listOfSearchResourcesTagCriterionPair</h2>
<!-- backwards compatibility -->
<a id="schema__listofsearchresourcestagcriterionpair"></a>
<a id="schema___listOfSearchResourcesTagCriterionPair"></a>
<a id="tocS__listofsearchresourcestagcriterionpair"></a>
<a id="tocs__listofsearchresourcestagcriterionpair"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_SearchResourcesTagCriterionPair">SearchResourcesTagCriterionPair</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcestagcriterionpair"></a>
<a id="schema_SearchResourcesTagCriterionPair"></a>
<a id="tocSsearchresourcestagcriterionpair"></a>
<a id="tocssearchresourcestagcriterionpair"></a>

```json
{
  "key": {},
  "value": {}
}
```

Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based filter condition for a query. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based filter conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_SensitiveDataItem">SensitiveDataItem</h2>
<!-- backwards compatibility -->
<a id="schemasensitivedataitem"></a>
<a id="schema_SensitiveDataItem"></a>
<a id="tocSsensitivedataitem"></a>
<a id="tocssensitivedataitem"></a>

```json
{
  "category": {},
  "detections": {},
  "totalCount": {}
}
```

Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|object|false|none|none|
|detections|object|false|none|none|
|totalCount|object|false|none|none|

<h2 id="tocS___listOfDetectedDataDetails">__listOfDetectedDataDetails</h2>
<!-- backwards compatibility -->
<a id="schema__listofdetecteddatadetails"></a>
<a id="schema___listOfDetectedDataDetails"></a>
<a id="tocS__listofdetecteddatadetails"></a>
<a id="tocs__listofdetecteddatadetails"></a>

```json
[
  {
    "value": {}
  }
]
```

<h2 id="tocS_SensitivityInspectionTemplatesEntry">SensitivityInspectionTemplatesEntry</h2>
<!-- backwards compatibility -->
<a id="schemasensitivityinspectiontemplatesentry"></a>
<a id="schema_SensitivityInspectionTemplatesEntry"></a>
<a id="tocSsensitivityinspectiontemplatesentry"></a>
<a id="tocssensitivityinspectiontemplatesentry"></a>

```json
{
  "id": {},
  "name": {}
}
```

Provides information about the sensitivity inspection template for an Amazon Macie account. Macie uses the template's settings when it performs automated sensitive data discovery for the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_Unit">Unit</h2>
<!-- backwards compatibility -->
<a id="schemaunit"></a>
<a id="schema_Unit"></a>
<a id="tocSunit"></a>
<a id="tocsunit"></a>

```json
"TERABYTES"
```

<h2 id="tocS_ServiceLimit">ServiceLimit</h2>
<!-- backwards compatibility -->
<a id="schemaservicelimit"></a>
<a id="schema_ServiceLimit"></a>
<a id="tocSservicelimit"></a>
<a id="tocsservicelimit"></a>

```json
{
  "isServiceLimited": {},
  "unit": {},
  "value": {}
}
```

Specifies a current quota for an Amazon Macie account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isServiceLimited|object|false|none|none|
|unit|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_SessionContextAttributes">SessionContextAttributes</h2>
<!-- backwards compatibility -->
<a id="schemasessioncontextattributes"></a>
<a id="schema_SessionContextAttributes"></a>
<a id="tocSsessioncontextattributes"></a>
<a id="tocssessioncontextattributes"></a>

```json
{
  "creationDate": {},
  "mfaAuthenticated": {}
}
```

Provides information about the context in which temporary security credentials were issued to an entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|object|false|none|none|
|mfaAuthenticated|object|false|none|none|

<h2 id="tocS_SessionIssuer">SessionIssuer</h2>
<!-- backwards compatibility -->
<a id="schemasessionissuer"></a>
<a id="schema_SessionIssuer"></a>
<a id="tocSsessionissuer"></a>
<a id="tocssessionissuer"></a>

```json
{
  "accountId": {},
  "arn": {},
  "principalId": {},
  "type": {},
  "userName": {}
}
```

Provides information about the source and type of temporary security credentials that were issued to an entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|arn|object|false|none|none|
|principalId|object|false|none|none|
|type|object|false|none|none|
|userName|object|false|none|none|

<h2 id="tocS_SeverityDescription">SeverityDescription</h2>
<!-- backwards compatibility -->
<a id="schemaseveritydescription"></a>
<a id="schema_SeverityDescription"></a>
<a id="tocSseveritydescription"></a>
<a id="tocsseveritydescription"></a>

```json
"Low"
```

The qualitative representation of the finding's severity. Possible values are:

<h2 id="tocS_SimpleCriterionKeyForJob">SimpleCriterionKeyForJob</h2>
<!-- backwards compatibility -->
<a id="schemasimplecriterionkeyforjob"></a>
<a id="schema_SimpleCriterionKeyForJob"></a>
<a id="tocSsimplecriterionkeyforjob"></a>
<a id="tocssimplecriterionkeyforjob"></a>

```json
"ACCOUNT_ID"
```

The property to use in a condition that determines whether an S3 bucket is included or excluded from a classification job. Valid values are:

<h2 id="tocS___listOfTagCriterionPairForJob">__listOfTagCriterionPairForJob</h2>
<!-- backwards compatibility -->
<a id="schema__listoftagcriterionpairforjob"></a>
<a id="schema___listOfTagCriterionPairForJob"></a>
<a id="tocS__listoftagcriterionpairforjob"></a>
<a id="tocs__listoftagcriterionpairforjob"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_TagCriterionPairForJob">TagCriterionPairForJob</h2>
<!-- backwards compatibility -->
<a id="schematagcriterionpairforjob"></a>
<a id="schema_TagCriterionPairForJob"></a>
<a id="tocStagcriterionpairforjob"></a>
<a id="tocstagcriterionpairforjob"></a>

```json
{
  "key": {},
  "value": {}
}
```

 <p>Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS___listOfTagValuePair">__listOfTagValuePair</h2>
<!-- backwards compatibility -->
<a id="schema__listoftagvaluepair"></a>
<a id="schema___listOfTagValuePair"></a>
<a id="tocS__listoftagvaluepair"></a>
<a id="tocs__listoftagvaluepair"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_TagTarget">TagTarget</h2>
<!-- backwards compatibility -->
<a id="schematagtarget"></a>
<a id="schema_TagTarget"></a>
<a id="tocStagtarget"></a>
<a id="tocstagtarget"></a>

```json
"S3_OBJECT"
```

The type of object to apply a tag-based condition to. Valid values are:

<h2 id="tocS_TagValuePair">TagValuePair</h2>
<!-- backwards compatibility -->
<a id="schematagvaluepair"></a>
<a id="schema_TagValuePair"></a>
<a id="tocStagvaluepair"></a>
<a id="tocstagvaluepair"></a>

```json
{
  "key": {},
  "value": {}
}
```

Specifies a tag key or tag key and value pair to use in a tag-based condition that determines whether an S3 object is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_TestCustomDataIdentifierRequest">TestCustomDataIdentifierRequest</h2>
<!-- backwards compatibility -->
<a id="schematestcustomdataidentifierrequest"></a>
<a id="schema_TestCustomDataIdentifierRequest"></a>
<a id="tocStestcustomdataidentifierrequest"></a>
<a id="tocstestcustomdataidentifierrequest"></a>

```json
{
  "ignoreWords": {},
  "keywords": {},
  "maximumMatchDistance": {},
  "regex": {},
  "sampleText": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignoreWords|object|false|none|none|
|keywords|object|false|none|none|
|maximumMatchDistance|object|false|none|none|
|regex|object|true|none|none|
|sampleText|object|true|none|none|

<h2 id="tocS_UnavailabilityReasonCode">UnavailabilityReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemaunavailabilityreasoncode"></a>
<a id="schema_UnavailabilityReasonCode"></a>
<a id="tocSunavailabilityreasoncode"></a>
<a id="tocsunavailabilityreasoncode"></a>

```json
"OBJECT_EXCEEDS_SIZE_QUOTA"
```

Specifies why occurrences of sensitive data can't be retrieved for a finding. Possible values are:

<h2 id="tocS_UnprocessedAccount">UnprocessedAccount</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedaccount"></a>
<a id="schema_UnprocessedAccount"></a>
<a id="tocSunprocessedaccount"></a>
<a id="tocsunprocessedaccount"></a>

```json
{
  "accountId": {},
  "errorCode": {},
  "errorMessage": {}
}
```

 <p>Provides information about an account-related request that hasn't been processed.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateAllowListRequest">UpdateAllowListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateallowlistrequest"></a>
<a id="schema_UpdateAllowListRequest"></a>
<a id="tocSupdateallowlistrequest"></a>
<a id="tocsupdateallowlistrequest"></a>

```json
{
  "criteria": {
    "regex": {},
    "s3WordsList": {
      "bucketName": {},
      "objectKey": {}
    }
  },
  "description": {},
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|criteria|object|true|none|none|
|description|object|false|none|none|
|name|object|true|none|none|

<h2 id="tocS_UpdateAutomatedDiscoveryConfigurationRequest">UpdateAutomatedDiscoveryConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateautomateddiscoveryconfigurationrequest"></a>
<a id="schema_UpdateAutomatedDiscoveryConfigurationRequest"></a>
<a id="tocSupdateautomateddiscoveryconfigurationrequest"></a>
<a id="tocsupdateautomateddiscoveryconfigurationrequest"></a>

```json
{
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_UpdateClassificationJobRequest">UpdateClassificationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclassificationjobrequest"></a>
<a id="schema_UpdateClassificationJobRequest"></a>
<a id="tocSupdateclassificationjobrequest"></a>
<a id="tocsupdateclassificationjobrequest"></a>

```json
{
  "jobStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobStatus|object|true|none|none|

<h2 id="tocS_UpdateClassificationScopeRequest">UpdateClassificationScopeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclassificationscoperequest"></a>
<a id="schema_UpdateClassificationScopeRequest"></a>
<a id="tocSupdateclassificationscoperequest"></a>
<a id="tocsupdateclassificationscoperequest"></a>

```json
{
  "s3": {
    "excludes": {
      "bucketNames": {},
      "operation": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3|object|false|none|none|

<h2 id="tocS_UpdateFindingsFilterRequest">UpdateFindingsFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefindingsfilterrequest"></a>
<a id="schema_UpdateFindingsFilterRequest"></a>
<a id="tocSupdatefindingsfilterrequest"></a>
<a id="tocsupdatefindingsfilterrequest"></a>

```json
{
  "action": {},
  "clientToken": {},
  "description": {},
  "findingCriteria": {
    "criterion": {
      "property1": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      },
      "property2": {
        "eq": {},
        "eqExactMatch": {},
        "gt": {},
        "gte": {},
        "lt": {},
        "lte": {},
        "neq": {}
      }
    }
  },
  "name": {},
  "position": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|
|clientToken|object|false|none|none|
|description|object|false|none|none|
|findingCriteria|object|false|none|none|
|name|object|false|none|none|
|position|object|false|none|none|

<h2 id="tocS_UpdateMacieSessionRequest">UpdateMacieSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemaciesessionrequest"></a>
<a id="schema_UpdateMacieSessionRequest"></a>
<a id="tocSupdatemaciesessionrequest"></a>
<a id="tocsupdatemaciesessionrequest"></a>

```json
{
  "findingPublishingFrequency": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findingPublishingFrequency|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_UpdateMemberSessionRequest">UpdateMemberSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemembersessionrequest"></a>
<a id="schema_UpdateMemberSessionRequest"></a>
<a id="tocSupdatemembersessionrequest"></a>
<a id="tocsupdatemembersessionrequest"></a>

```json
{
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_UpdateOrganizationConfigurationRequest">UpdateOrganizationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorganizationconfigurationrequest"></a>
<a id="schema_UpdateOrganizationConfigurationRequest"></a>
<a id="tocSupdateorganizationconfigurationrequest"></a>
<a id="tocsupdateorganizationconfigurationrequest"></a>

```json
{
  "autoEnable": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoEnable|object|true|none|none|

<h2 id="tocS___listOfSuppressDataIdentifier">__listOfSuppressDataIdentifier</h2>
<!-- backwards compatibility -->
<a id="schema__listofsuppressdataidentifier"></a>
<a id="schema___listOfSuppressDataIdentifier"></a>
<a id="tocS__listofsuppressdataidentifier"></a>
<a id="tocs__listofsuppressdataidentifier"></a>

```json
[
  {
    "id": {},
    "type": {}
  }
]
```

<h2 id="tocS_UpdateResourceProfileDetectionsRequest">UpdateResourceProfileDetectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourceprofiledetectionsrequest"></a>
<a id="schema_UpdateResourceProfileDetectionsRequest"></a>
<a id="tocSupdateresourceprofiledetectionsrequest"></a>
<a id="tocsupdateresourceprofiledetectionsrequest"></a>

```json
{
  "suppressDataIdentifiers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suppressDataIdentifiers|object|false|none|none|

<h2 id="tocS_UpdateResourceProfileRequest">UpdateResourceProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourceprofilerequest"></a>
<a id="schema_UpdateResourceProfileRequest"></a>
<a id="tocSupdateresourceprofilerequest"></a>
<a id="tocsupdateresourceprofilerequest"></a>

```json
{
  "sensitivityScoreOverride": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sensitivityScoreOverride|object|false|none|none|

<h2 id="tocS_UpdateRevealConfigurationRequest">UpdateRevealConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterevealconfigurationrequest"></a>
<a id="schema_UpdateRevealConfigurationRequest"></a>
<a id="tocSupdaterevealconfigurationrequest"></a>
<a id="tocsupdaterevealconfigurationrequest"></a>

```json
{
  "configuration": {
    "kmsKeyId": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|true|none|none|

<h2 id="tocS_UpdateSensitivityInspectionTemplateRequest">UpdateSensitivityInspectionTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesensitivityinspectiontemplaterequest"></a>
<a id="schema_UpdateSensitivityInspectionTemplateRequest"></a>
<a id="tocSupdatesensitivityinspectiontemplaterequest"></a>
<a id="tocsupdatesensitivityinspectiontemplaterequest"></a>

```json
{
  "description": {},
  "excludes": {
    "managedDataIdentifierIds": {}
  },
  "includes": {
    "allowListIds": {},
    "customDataIdentifierIds": {},
    "managedDataIdentifierIds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|excludes|object|false|none|none|
|includes|object|false|none|none|

<h2 id="tocS_UsageType">UsageType</h2>
<!-- backwards compatibility -->
<a id="schemausagetype"></a>
<a id="schema_UsageType"></a>
<a id="tocSusagetype"></a>
<a id="tocsusagetype"></a>

```json
"DATA_INVENTORY_EVALUATION"
```

The name of an Amazon Macie usage metric for an account. Possible values are:

<h2 id="tocS_UsageByAccount">UsageByAccount</h2>
<!-- backwards compatibility -->
<a id="schemausagebyaccount"></a>
<a id="schema_UsageByAccount"></a>
<a id="tocSusagebyaccount"></a>
<a id="tocsusagebyaccount"></a>

```json
{
  "currency": {},
  "estimatedCost": {},
  "serviceLimit": {
    "isServiceLimited": {},
    "unit": {},
    "value": {}
  },
  "type": {}
}
```

Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|object|false|none|none|
|estimatedCost|object|false|none|none|
|serviceLimit|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS___listOfUsageByAccount">__listOfUsageByAccount</h2>
<!-- backwards compatibility -->
<a id="schema__listofusagebyaccount"></a>
<a id="schema___listOfUsageByAccount"></a>
<a id="tocS__listofusagebyaccount"></a>
<a id="tocs__listofusagebyaccount"></a>

```json
[
  {
    "currency": {},
    "estimatedCost": {},
    "serviceLimit": {
      "isServiceLimited": {},
      "unit": {},
      "value": {}
    },
    "type": {}
  }
]
```

<h2 id="tocS_UsageRecord">UsageRecord</h2>
<!-- backwards compatibility -->
<a id="schemausagerecord"></a>
<a id="schema_UsageRecord"></a>
<a id="tocSusagerecord"></a>
<a id="tocsusagerecord"></a>

```json
{
  "accountId": {},
  "automatedDiscoveryFreeTrialStartDate": {},
  "freeTrialStartDate": {},
  "usage": {}
}
```

Provides quota and aggregated usage data for an Amazon Macie account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|automatedDiscoveryFreeTrialStartDate|object|false|none|none|
|freeTrialStartDate|object|false|none|none|
|usage|object|false|none|none|

<h2 id="tocS_UsageStatisticsFilterComparator">UsageStatisticsFilterComparator</h2>
<!-- backwards compatibility -->
<a id="schemausagestatisticsfiltercomparator"></a>
<a id="schema_UsageStatisticsFilterComparator"></a>
<a id="tocSusagestatisticsfiltercomparator"></a>
<a id="tocsusagestatisticsfiltercomparator"></a>

```json
"GT"
```

The operator to use in a condition that filters the results of a query for Amazon Macie account quotas and usage data. Valid values are:

<h2 id="tocS_UsageStatisticsFilterKey">UsageStatisticsFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemausagestatisticsfilterkey"></a>
<a id="schema_UsageStatisticsFilterKey"></a>
<a id="tocSusagestatisticsfilterkey"></a>
<a id="tocsusagestatisticsfilterkey"></a>

```json
"accountId"
```

The field to use in a condition that filters the results of a query for Amazon Macie account quotas and usage data. Valid values are:

<h2 id="tocS_UsageTotal">UsageTotal</h2>
<!-- backwards compatibility -->
<a id="schemausagetotal"></a>
<a id="schema_UsageTotal"></a>
<a id="tocSusagetotal"></a>
<a id="tocsusagetotal"></a>

```json
{
  "currency": {},
  "estimatedCost": {},
  "type": {}
}
```

Provides aggregated data for an Amazon Macie usage metric. The value for the metric reports estimated usage data for an account for the preceding 30 days or the current calendar month to date, depending on the time period (timeRange) specified in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|object|false|none|none|
|estimatedCost|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_UserIdentityRoot">UserIdentityRoot</h2>
<!-- backwards compatibility -->
<a id="schemauseridentityroot"></a>
<a id="schema_UserIdentityRoot"></a>
<a id="tocSuseridentityroot"></a>
<a id="tocsuseridentityroot"></a>

```json
{
  "accountId": {},
  "arn": {},
  "principalId": {}
}
```

Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for your Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|arn|object|false|none|none|
|principalId|object|false|none|none|

<h2 id="tocS_UserIdentityType">UserIdentityType</h2>
<!-- backwards compatibility -->
<a id="schemauseridentitytype"></a>
<a id="schema_UserIdentityType"></a>
<a id="tocSuseridentitytype"></a>
<a id="tocsuseridentitytype"></a>

```json
"AssumedRole"
```

The type of entity that performed the action on the affected resource. Possible values are:
