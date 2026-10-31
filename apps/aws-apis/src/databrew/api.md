<h1 id="aws-glue-databrew">AWS Glue DataBrew v2017-07-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Glue DataBrew is a visual, cloud-scale data-preparation service. DataBrew simplifies data preparation tasks, targeting data issues that are hard to spot and time-consuming to fix. DataBrew empowers users of all technical levels to visualize the data and perform one-click data transformations, with no coding required.

Base URLs:

* <a href="http://databrew.us-east-1.amazonaws.com">http://databrew.us-east-1.amazonaws.com</a> - The AWS Glue DataBrew multi-region endpoint

* <a href="https://databrew.us-east-1.amazonaws.com">https://databrew.us-east-1.amazonaws.com</a> - The AWS Glue DataBrew multi-region endpoint

* <a href="http://databrew.cn-north-1.amazonaws.com.cn">http://databrew.cn-north-1.amazonaws.com.cn</a> - The AWS Glue DataBrew endpoint for China (Beijing) and China (Ningxia)

* <a href="https://databrew.cn-north-1.amazonaws.com.cn">https://databrew.cn-north-1.amazonaws.com.cn</a> - The AWS Glue DataBrew endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/databrew/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-glue-databrew-default">Default</h1>

## BatchDeleteRecipeVersion

<a id="opIdBatchDeleteRecipeVersion"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/recipes/string/batchDeleteRecipeVersion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "RecipeVersions": [
      "string"
    ]
  }'
```

`POST /recipes/{name}/batchDeleteRecipeVersion`

<p>Deletes one or more versions of a recipe at a time.</p> <p>The entire request will be rejected if:</p> <ul> <li> <p>The recipe does not exist.</p> </li> <li> <p>There is an invalid version identifier in the list of versions.</p> </li> <li> <p>The version list is empty.</p> </li> <li> <p>The version list size exceeds 50.</p> </li> <li> <p>The version list contains duplicate entries.</p> </li> </ul> <p>The request will complete successfully, but with partial failures, if:</p> <ul> <li> <p>A version does not exist.</p> </li> <li> <p>A version is being used by a job.</p> </li> <li> <p>You specify <code>LATEST_WORKING</code>, but it's being used by a project.</p> </li> <li> <p>The version fails to be deleted.</p> </li> </ul> <p>The <code>LATEST_WORKING</code> version will only be deleted if the recipe has no other versions. If you try to delete <code>LATEST_WORKING</code> while other versions exist (or if they can't be deleted), then <code>LATEST_WORKING</code> will be listed as partial failure in the response.</p>

> Body parameter

```json
{
  "RecipeVersions": [
    "string"
  ]
}
```

<h3 id="batchdeleterecipeversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the recipe whose versions are to be deleted.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» RecipeVersions|body|[[RecipeVersion](#schemarecipeversion)]|true|An array of version identifiers, for the recipe versions to be deleted. You can specify numeric versions (<code>X.Y</code>) or <code>LATEST_WORKING</code>. <code>LATEST_PUBLISHED</code> is not supported.|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Errors": {}
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

<h3 id="batchdeleterecipeversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteRecipeVersionResponse](#schemabatchdeleterecipeversionresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasets

<a id="opIdListDatasets"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/datasets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datasets`

Lists all of the DataBrew datasets.

<h3 id="listdatasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return in this request. |
|nextToken|query|string|false|The token returned by a previous call to retrieve the next set of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Datasets": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listdatasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasetsResponse](#schemalistdatasetsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataset

<a id="opIdCreateDataset"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/datasets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Format": "CSV",
    "FormatOptions": {
      "Json": {
        "MultiLine": {}
      },
      "Excel": {
        "SheetNames": {},
        "SheetIndexes": {},
        "HeaderRow": {}
      },
      "Csv": {
        "Delimiter": {},
        "HeaderRow": {}
      }
    },
    "Input": {
      "S3InputDefinition": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "DataCatalogInputDefinition": {
        "CatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "TempDirectory": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        }
      },
      "DatabaseInputDefinition": {
        "GlueConnectionName": {},
        "DatabaseTableName": {},
        "TempDirectory": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        },
        "QueryString": {}
      },
      "Metadata": {
        "SourceArn": {}
      }
    },
    "PathOptions": {
      "LastModifiedDateCondition": {
        "Expression": {},
        "ValuesMap": {
          "property1": "string",
          "property2": "string"
        }
      },
      "FilesLimit": {
        "MaxFiles": {},
        "OrderedBy": {},
        "Order": {}
      },
      "Parameters": {
        "property1": {
          "Name": {},
          "Type": {},
          "DatetimeOptions": {
            "Format": {},
            "TimezoneOffset": {},
            "LocaleCode": {}
          },
          "CreateColumn": {},
          "Filter": {
            "Expression": {},
            "ValuesMap": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "property2": {
          "Name": {},
          "Type": {},
          "DatetimeOptions": {
            "Format": {},
            "TimezoneOffset": {},
            "LocaleCode": {}
          },
          "CreateColumn": {},
          "Filter": {
            "Expression": {},
            "ValuesMap": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /datasets`

Creates a new DataBrew dataset.

> Body parameter

```json
{
  "Name": "string",
  "Format": "CSV",
  "FormatOptions": {
    "Json": {
      "MultiLine": {}
    },
    "Excel": {
      "SheetNames": {},
      "SheetIndexes": {},
      "HeaderRow": {}
    },
    "Csv": {
      "Delimiter": {},
      "HeaderRow": {}
    }
  },
  "Input": {
    "S3InputDefinition": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    },
    "DataCatalogInputDefinition": {
      "CatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      }
    },
    "DatabaseInputDefinition": {
      "GlueConnectionName": {},
      "DatabaseTableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "QueryString": {}
    },
    "Metadata": {
      "SourceArn": {}
    }
  },
  "PathOptions": {
    "LastModifiedDateCondition": {
      "Expression": {},
      "ValuesMap": {
        "property1": "string",
        "property2": "string"
      }
    },
    "FilesLimit": {
      "MaxFiles": {},
      "OrderedBy": {},
      "Order": {}
    },
    "Parameters": {
      "property1": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "property2": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createdataset-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the dataset to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.|
|» Format|body|string|false|The file format of a dataset that is created from an Amazon S3 file or folder.|
|» FormatOptions|body|object|false|Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.|
|» » Json|body|object|false|none|
|» » » MultiLine|body|object|false|none|
|» » Excel|body|object|false|none|
|» » » SheetNames|body|object|false|none|
|» » » SheetIndexes|body|object|false|none|
|» » » HeaderRow|body|object|false|none|
|» » Csv|body|object|false|none|
|» » » Delimiter|body|object|false|none|
|» » » HeaderRow|body|object|false|none|
|» Input|body|object|true|Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.|
|» » S3InputDefinition|body|object|false|none|
|» » » Bucket|body|object|true|none|
|» » » Key|body|object|false|none|
|» » » BucketOwner|body|object|false|none|
|» » DataCatalogInputDefinition|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » TableName|body|object|true|none|
|» » » TempDirectory|body|object|false|none|
|» » » » Bucket|body|object|true|none|
|» » » » Key|body|object|false|none|
|» » » » BucketOwner|body|object|false|none|
|» » DatabaseInputDefinition|body|object|false|none|
|» » » GlueConnectionName|body|object|true|none|
|» » » DatabaseTableName|body|object|false|none|
|» » » TempDirectory|body|[S3Location](#schemas3location)|false|Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.|
|» » » QueryString|body|object|false|none|
|» » Metadata|body|object|false|none|
|» » » SourceArn|body|object|false|none|
|» PathOptions|body|object|false|Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset.|
|» » LastModifiedDateCondition|body|object|false|none|
|» » » Expression|body|object|true|none|
|» » » ValuesMap|body|object|true|none|
|» » » » **additionalProperties**|body|[ConditionValue](#schemaconditionvalue)|false|none|
|» » FilesLimit|body|object|false|none|
|» » » MaxFiles|body|object|true|none|
|» » » OrderedBy|body|object|false|none|
|» » » Order|body|object|false|none|
|» » Parameters|body|object|false|none|
|» » » **additionalProperties**|body|[DatasetParameter](#schemadatasetparameter)|false|Represents a dataset parameter that defines type and conditions for a parameter in the Amazon S3 path of the dataset.|
|» Tags|body|object|false|Metadata tags to apply to this dataset.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Format|CSV|
|» Format|JSON|
|» Format|PARQUET|
|» Format|EXCEL|
|» Format|ORC|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="createdataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDatasetResponse](#schemacreatedatasetresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProfileJob

<a id="opIdCreateProfileJob"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/profileJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DatasetName": "string",
    "EncryptionKeyArn": "stringstringstringst",
    "EncryptionMode": "SSE-KMS",
    "Name": "string",
    "LogSubscription": "ENABLE",
    "MaxCapacity": 0,
    "MaxRetries": 0,
    "OutputLocation": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    },
    "Configuration": {
      "DatasetStatisticsConfiguration": {
        "IncludedStatistics": {},
        "Overrides": {}
      },
      "ProfileColumns": {},
      "ColumnStatisticsConfigurations": {},
      "EntityDetectorConfiguration": {
        "EntityTypes": {},
        "AllowedStatistics": {}
      }
    },
    "ValidationConfigurations": [
      {
        "RulesetArn": {},
        "ValidationMode": {}
      }
    ],
    "RoleArn": "stringstringstringst",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Timeout": 0,
    "JobSample": {
      "Mode": {},
      "Size": {}
    }
  }'
```

`POST /profileJobs`

Creates a new job to analyze a dataset and create its data profile.

> Body parameter

```json
{
  "DatasetName": "string",
  "EncryptionKeyArn": "stringstringstringst",
  "EncryptionMode": "SSE-KMS",
  "Name": "string",
  "LogSubscription": "ENABLE",
  "MaxCapacity": 0,
  "MaxRetries": 0,
  "OutputLocation": {
    "Bucket": {},
    "Key": {},
    "BucketOwner": {}
  },
  "Configuration": {
    "DatasetStatisticsConfiguration": {
      "IncludedStatistics": {},
      "Overrides": {}
    },
    "ProfileColumns": {},
    "ColumnStatisticsConfigurations": {},
    "EntityDetectorConfiguration": {
      "EntityTypes": {},
      "AllowedStatistics": {}
    }
  },
  "ValidationConfigurations": [
    {
      "RulesetArn": {},
      "ValidationMode": {}
    }
  ],
  "RoleArn": "stringstringstringst",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Timeout": 0,
  "JobSample": {
    "Mode": {},
    "Size": {}
  }
}
```

<h3 id="createprofilejob-parameters">Parameters</h3>

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
|» DatasetName|body|string|true|The name of the dataset that this job is to act upon.|
|» EncryptionKeyArn|body|string|false|The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.|
|» EncryptionMode|body|string|false|<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - <code>SSE-KMS</code> - Server-side encryption with KMS-managed keys.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>|
|» Name|body|string|true|The name of the job to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.|
|» LogSubscription|body|string|false|Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.|
|» MaxCapacity|body|integer|false|The maximum number of nodes that DataBrew can use when the job processes data.|
|» MaxRetries|body|integer|false|The maximum number of times to retry the job after a job run fails.|
|» OutputLocation|body|object|true|Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.|
|» » Bucket|body|object|false|none|
|» » Key|body|object|false|none|
|» » BucketOwner|body|object|false|none|
|» Configuration|body|object|false|Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns. |
|» » DatasetStatisticsConfiguration|body|object|false|none|
|» » » IncludedStatistics|body|object|false|none|
|» » » Overrides|body|object|false|none|
|» » ProfileColumns|body|object|false|none|
|» » ColumnStatisticsConfigurations|body|object|false|none|
|» » EntityDetectorConfiguration|body|object|false|none|
|» » » EntityTypes|body|object|true|none|
|» » » AllowedStatistics|body|object|false|none|
|» ValidationConfigurations|body|[[ValidationConfiguration](#schemavalidationconfiguration)]|false|List of validation configurations that are applied to the profile job.|
|» RoleArn|body|string|true|The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.|
|» Tags|body|object|false|Metadata tags to apply to this job.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» Timeout|body|integer|false|The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.|
|» JobSample|body|object|false|A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a <code>JobSample</code> value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.|
|» » Mode|body|object|false|none|
|» » Size|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» EncryptionMode|SSE-KMS|
|» EncryptionMode|SSE-S3|
|» LogSubscription|ENABLE|
|» LogSubscription|DISABLE|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="createprofilejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProfileJobResponse](#schemacreateprofilejobresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProjects

<a id="opIdListProjects"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/projects \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects`

Lists all of the DataBrew projects that are defined.

<h3 id="listprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token returned by a previous call to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return in this request. |
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Projects": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProjectsResponse](#schemalistprojectsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProject

<a id="opIdCreateProject"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DatasetName": "string",
    "Name": "string",
    "RecipeName": "string",
    "Sample": {
      "Size": {},
      "Type": {}
    },
    "RoleArn": "stringstringstringst",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /projects`

Creates a new DataBrew project.

> Body parameter

```json
{
  "DatasetName": "string",
  "Name": "string",
  "RecipeName": "string",
  "Sample": {
    "Size": {},
    "Type": {}
  },
  "RoleArn": "stringstringstringst",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createproject-parameters">Parameters</h3>

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
|» DatasetName|body|string|true|The name of an existing dataset to associate this project with.|
|» Name|body|string|true|A unique name for the new project. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.|
|» RecipeName|body|string|true|The name of an existing recipe to associate with the project.|
|» Sample|body|object|false|Represents the sample size and sampling type for DataBrew to use for interactive data analysis.|
|» » Size|body|object|false|none|
|» » Type|body|object|false|none|
|» RoleArn|body|string|true|The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed for this request.|
|» Tags|body|object|false|Metadata tags to apply to this project.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="createproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProjectResponse](#schemacreateprojectresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecipes

<a id="opIdListRecipes"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/recipes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /recipes`

Lists all of the DataBrew recipes that are defined.

<h3 id="listrecipes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return in this request. |
|nextToken|query|string|false|The token returned by a previous call to retrieve the next set of results.|
|recipeVersion|query|string|false|<p>Return only those recipes with a version identifier of <code>LATEST_WORKING</code> or <code>LATEST_PUBLISHED</code>. If <code>RecipeVersion</code> is omitted, <code>ListRecipes</code> returns all of the <code>LATEST_PUBLISHED</code> recipe versions.</p> <p>Valid values: <code>LATEST_WORKING</code> \| <code>LATEST_PUBLISHED</code> </p>|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Recipes": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listrecipes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecipesResponse](#schemalistrecipesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRecipe

<a id="opIdCreateRecipe"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/recipes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "Name": "string",
    "Steps": [
      {
        "Action": {
          "Operation": {},
          "Parameters": {
            "property1": "string",
            "property2": "string"
          }
        },
        "ConditionExpressions": {}
      }
    ],
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /recipes`

Creates a new DataBrew recipe.

> Body parameter

```json
{
  "Description": "string",
  "Name": "string",
  "Steps": [
    {
      "Action": {
        "Operation": {},
        "Parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "ConditionExpressions": {}
    }
  ],
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createrecipe-parameters">Parameters</h3>

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
|» Description|body|string|false|A description for the recipe.|
|» Name|body|string|true|A unique name for the recipe. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.|
|» Steps|body|[[RecipeStep](#schemarecipestep)]|true|An array containing the steps to be performed by the recipe. Each recipe step consists of one recipe action and (optionally) an array of condition expressions.|
|» Tags|body|object|false|Metadata tags to apply to this recipe.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="createrecipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRecipeResponse](#schemacreatereciperesponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRecipeJob

<a id="opIdCreateRecipeJob"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/recipeJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DatasetName": "string",
    "EncryptionKeyArn": "stringstringstringst",
    "EncryptionMode": "SSE-KMS",
    "Name": "string",
    "LogSubscription": "ENABLE",
    "MaxCapacity": 0,
    "MaxRetries": 0,
    "Outputs": [
      {
        "CompressionFormat": {},
        "Format": {},
        "PartitionColumns": {},
        "Location": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        },
        "Overwrite": {},
        "FormatOptions": {
          "Csv": {
            "Delimiter": {}
          }
        },
        "MaxOutputFiles": {}
      }
    ],
    "DataCatalogOutputs": [
      {
        "CatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "S3Options": {
          "Location": {
            "Bucket": {},
            "Key": {},
            "BucketOwner": {}
          }
        },
        "DatabaseOptions": {
          "TempDirectory": {
            "Bucket": {},
            "Key": {},
            "BucketOwner": {}
          },
          "TableName": {}
        },
        "Overwrite": {}
      }
    ],
    "DatabaseOutputs": [
      {
        "GlueConnectionName": {},
        "DatabaseOptions": {
          "TempDirectory": {
            "Bucket": {},
            "Key": {},
            "BucketOwner": {}
          },
          "TableName": {}
        },
        "DatabaseOutputMode": {}
      }
    ],
    "ProjectName": "string",
    "RecipeReference": {
      "Name": {},
      "RecipeVersion": {}
    },
    "RoleArn": "stringstringstringst",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Timeout": 0
  }'
```

`POST /recipeJobs`

Creates a new job to transform input data, using steps defined in an existing Glue DataBrew recipe

> Body parameter

```json
{
  "DatasetName": "string",
  "EncryptionKeyArn": "stringstringstringst",
  "EncryptionMode": "SSE-KMS",
  "Name": "string",
  "LogSubscription": "ENABLE",
  "MaxCapacity": 0,
  "MaxRetries": 0,
  "Outputs": [
    {
      "CompressionFormat": {},
      "Format": {},
      "PartitionColumns": {},
      "Location": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "Overwrite": {},
      "FormatOptions": {
        "Csv": {
          "Delimiter": {}
        }
      },
      "MaxOutputFiles": {}
    }
  ],
  "DataCatalogOutputs": [
    {
      "CatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "S3Options": {
        "Location": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        }
      },
      "DatabaseOptions": {
        "TempDirectory": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        },
        "TableName": {}
      },
      "Overwrite": {}
    }
  ],
  "DatabaseOutputs": [
    {
      "GlueConnectionName": {},
      "DatabaseOptions": {
        "TempDirectory": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        },
        "TableName": {}
      },
      "DatabaseOutputMode": {}
    }
  ],
  "ProjectName": "string",
  "RecipeReference": {
    "Name": {},
    "RecipeVersion": {}
  },
  "RoleArn": "stringstringstringst",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Timeout": 0
}
```

<h3 id="createrecipejob-parameters">Parameters</h3>

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
|» DatasetName|body|string|false|The name of the dataset that this job processes.|
|» EncryptionKeyArn|body|string|false|The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.|
|» EncryptionMode|body|string|false|<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>|
|» Name|body|string|true|A unique name for the job. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.|
|» LogSubscription|body|string|false|Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.|
|» MaxCapacity|body|integer|false|The maximum number of nodes that DataBrew can consume when the job processes data.|
|» MaxRetries|body|integer|false|The maximum number of times to retry the job after a job run fails.|
|» Outputs|body|[[Output](#schemaoutput)]|false|One or more artifacts that represent the output from running the job.|
|» DataCatalogOutputs|body|[[DataCatalogOutput](#schemadatacatalogoutput)]|false|One or more artifacts that represent the Glue Data Catalog output from running the job.|
|» DatabaseOutputs|body|[[DatabaseOutput](#schemadatabaseoutput)]|false|Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write to. |
|» ProjectName|body|string|false|Either the name of an existing project, or a combination of a recipe and a dataset to associate with the recipe.|
|» RecipeReference|body|object|false|Represents the name and version of a DataBrew recipe.|
|» » Name|body|object|false|none|
|» » RecipeVersion|body|object|false|none|
|» RoleArn|body|string|true|The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.|
|» Tags|body|object|false|Metadata tags to apply to this job.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» Timeout|body|integer|false|The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» EncryptionMode|SSE-KMS|
|» EncryptionMode|SSE-S3|
|» LogSubscription|ENABLE|
|» LogSubscription|DISABLE|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="createrecipejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRecipeJobResponse](#schemacreaterecipejobresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRulesets

<a id="opIdListRulesets"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/rulesets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /rulesets`

List all rulesets available in the current account or rulesets associated with a specific resource (dataset).

<h3 id="listrulesets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|targetArn|query|string|false|The Amazon Resource Name (ARN) of a resource (dataset). Using this parameter indicates to return only those rulesets that are associated with the specified resource.|
|maxResults|query|integer|false|The maximum number of results to return in this request.|
|nextToken|query|string|false|A token generated by DataBrew that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the NextToken value from the response object of the previous page call.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Rulesets": {},
  "NextToken": {}
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

<h3 id="listrulesets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRulesetsResponse](#schemalistrulesetsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRuleset

<a id="opIdCreateRuleset"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/rulesets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "TargetArn": "stringstringstringst",
    "Rules": [
      {
        "Name": {},
        "Disabled": {},
        "CheckExpression": {},
        "SubstitutionMap": {
          "property1": "string",
          "property2": "string"
        },
        "Threshold": {
          "Value": {},
          "Type": {},
          "Unit": {}
        },
        "ColumnSelectors": {}
      }
    ],
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /rulesets`

Creates a new ruleset that can be used in a profile job to validate the data quality of a dataset.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "TargetArn": "stringstringstringst",
  "Rules": [
    {
      "Name": {},
      "Disabled": {},
      "CheckExpression": {},
      "SubstitutionMap": {
        "property1": "string",
        "property2": "string"
      },
      "Threshold": {
        "Value": {},
        "Type": {},
        "Unit": {}
      },
      "ColumnSelectors": {}
    }
  ],
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createruleset-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the ruleset to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.|
|» Description|body|string|false|The description of the ruleset.|
|» TargetArn|body|string|true|The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.|
|» Rules|body|[[Rule](#schemarule)]|true|A list of rules that are defined with the ruleset. A rule includes one or more checks to be validated on a DataBrew dataset.|
|» Tags|body|object|false|Metadata tags to apply to the ruleset.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="createruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRulesetResponse](#schemacreaterulesetresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSchedules

<a id="opIdListSchedules"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/schedules \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /schedules`

Lists the DataBrew schedules that are defined.

<h3 id="listschedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobName|query|string|false|The name of the job that these schedules apply to.|
|maxResults|query|integer|false|The maximum number of results to return in this request. |
|nextToken|query|string|false|The token returned by a previous call to retrieve the next set of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Schedules": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listschedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSchedulesResponse](#schemalistschedulesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSchedule

<a id="opIdCreateSchedule"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/schedules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "JobNames": [
      "string"
    ],
    "CronExpression": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Name": "string"
  }'
```

`POST /schedules`

Creates a new schedule for one or more DataBrew jobs. Jobs can be run at a specific date and time, or at regular intervals.

> Body parameter

```json
{
  "JobNames": [
    "string"
  ],
  "CronExpression": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Name": "string"
}
```

<h3 id="createschedule-parameters">Parameters</h3>

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
|» JobNames|body|[[JobName](#schemajobname)]|false|The name or names of one or more jobs to be run.|
|» CronExpression|body|string|true|The date or dates and time or times when the jobs are to be run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the <i>Glue DataBrew Developer Guide</i>.|
|» Tags|body|object|false|Metadata tags to apply to this schedule.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» Name|body|string|true|A unique name for the schedule. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="createschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateScheduleResponse](#schemacreatescheduleresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDataset

<a id="opIdDescribeDataset"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/datasets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datasets/{name}`

Returns the definition of a specific DataBrew dataset.

<h3 id="describedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the dataset to be described.|
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
  "CreatedBy": {},
  "CreateDate": {},
  "Name": {},
  "Format": {},
  "FormatOptions": {
    "Json": {
      "MultiLine": {}
    },
    "Excel": {
      "SheetNames": {},
      "SheetIndexes": {},
      "HeaderRow": {}
    },
    "Csv": {
      "Delimiter": {},
      "HeaderRow": {}
    }
  },
  "Input": {
    "S3InputDefinition": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    },
    "DataCatalogInputDefinition": {
      "CatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      }
    },
    "DatabaseInputDefinition": {
      "GlueConnectionName": {},
      "DatabaseTableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "QueryString": {}
    },
    "Metadata": {
      "SourceArn": {}
    }
  },
  "LastModifiedDate": {},
  "LastModifiedBy": {},
  "Source": {},
  "PathOptions": {
    "LastModifiedDateCondition": {
      "Expression": {},
      "ValuesMap": {
        "property1": "string",
        "property2": "string"
      }
    },
    "FilesLimit": {
      "MaxFiles": {},
      "OrderedBy": {},
      "Order": {}
    },
    "Parameters": {
      "property1": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "property2": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ResourceArn": {}
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

<h3 id="describedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatasetResponse](#schemadescribedatasetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDataset

<a id="opIdUpdateDataset"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/datasets/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Format": "CSV",
    "FormatOptions": {
      "Json": {
        "MultiLine": {}
      },
      "Excel": {
        "SheetNames": {},
        "SheetIndexes": {},
        "HeaderRow": {}
      },
      "Csv": {
        "Delimiter": {},
        "HeaderRow": {}
      }
    },
    "Input": {
      "S3InputDefinition": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "DataCatalogInputDefinition": {
        "CatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "TempDirectory": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        }
      },
      "DatabaseInputDefinition": {
        "GlueConnectionName": {},
        "DatabaseTableName": {},
        "TempDirectory": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        },
        "QueryString": {}
      },
      "Metadata": {
        "SourceArn": {}
      }
    },
    "PathOptions": {
      "LastModifiedDateCondition": {
        "Expression": {},
        "ValuesMap": {
          "property1": "string",
          "property2": "string"
        }
      },
      "FilesLimit": {
        "MaxFiles": {},
        "OrderedBy": {},
        "Order": {}
      },
      "Parameters": {
        "property1": {
          "Name": {},
          "Type": {},
          "DatetimeOptions": {
            "Format": {},
            "TimezoneOffset": {},
            "LocaleCode": {}
          },
          "CreateColumn": {},
          "Filter": {
            "Expression": {},
            "ValuesMap": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "property2": {
          "Name": {},
          "Type": {},
          "DatetimeOptions": {
            "Format": {},
            "TimezoneOffset": {},
            "LocaleCode": {}
          },
          "CreateColumn": {},
          "Filter": {
            "Expression": {},
            "ValuesMap": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      }
    }
  }'
```

`PUT /datasets/{name}`

Modifies the definition of an existing DataBrew dataset.

> Body parameter

```json
{
  "Format": "CSV",
  "FormatOptions": {
    "Json": {
      "MultiLine": {}
    },
    "Excel": {
      "SheetNames": {},
      "SheetIndexes": {},
      "HeaderRow": {}
    },
    "Csv": {
      "Delimiter": {},
      "HeaderRow": {}
    }
  },
  "Input": {
    "S3InputDefinition": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    },
    "DataCatalogInputDefinition": {
      "CatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      }
    },
    "DatabaseInputDefinition": {
      "GlueConnectionName": {},
      "DatabaseTableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "QueryString": {}
    },
    "Metadata": {
      "SourceArn": {}
    }
  },
  "PathOptions": {
    "LastModifiedDateCondition": {
      "Expression": {},
      "ValuesMap": {
        "property1": "string",
        "property2": "string"
      }
    },
    "FilesLimit": {
      "MaxFiles": {},
      "OrderedBy": {},
      "Order": {}
    },
    "Parameters": {
      "property1": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "property2": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  }
}
```

<h3 id="updatedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the dataset to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Format|body|string|false|The file format of a dataset that is created from an Amazon S3 file or folder.|
|» FormatOptions|body|object|false|Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.|
|» » Json|body|object|false|none|
|» » » MultiLine|body|object|false|none|
|» » Excel|body|object|false|none|
|» » » SheetNames|body|object|false|none|
|» » » SheetIndexes|body|object|false|none|
|» » » HeaderRow|body|object|false|none|
|» » Csv|body|object|false|none|
|» » » Delimiter|body|object|false|none|
|» » » HeaderRow|body|object|false|none|
|» Input|body|object|true|Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.|
|» » S3InputDefinition|body|object|false|none|
|» » » Bucket|body|object|true|none|
|» » » Key|body|object|false|none|
|» » » BucketOwner|body|object|false|none|
|» » DataCatalogInputDefinition|body|object|false|none|
|» » » CatalogId|body|object|false|none|
|» » » DatabaseName|body|object|true|none|
|» » » TableName|body|object|true|none|
|» » » TempDirectory|body|object|false|none|
|» » » » Bucket|body|object|true|none|
|» » » » Key|body|object|false|none|
|» » » » BucketOwner|body|object|false|none|
|» » DatabaseInputDefinition|body|object|false|none|
|» » » GlueConnectionName|body|object|true|none|
|» » » DatabaseTableName|body|object|false|none|
|» » » TempDirectory|body|[S3Location](#schemas3location)|false|Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.|
|» » » QueryString|body|object|false|none|
|» » Metadata|body|object|false|none|
|» » » SourceArn|body|object|false|none|
|» PathOptions|body|object|false|Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset.|
|» » LastModifiedDateCondition|body|object|false|none|
|» » » Expression|body|object|true|none|
|» » » ValuesMap|body|object|true|none|
|» » » » **additionalProperties**|body|[ConditionValue](#schemaconditionvalue)|false|none|
|» » FilesLimit|body|object|false|none|
|» » » MaxFiles|body|object|true|none|
|» » » OrderedBy|body|object|false|none|
|» » » Order|body|object|false|none|
|» » Parameters|body|object|false|none|
|» » » **additionalProperties**|body|[DatasetParameter](#schemadatasetparameter)|false|Represents a dataset parameter that defines type and conditions for a parameter in the Amazon S3 path of the dataset.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Format|CSV|
|» Format|JSON|
|» Format|PARQUET|
|» Format|EXCEL|
|» Format|ORC|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="updatedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDatasetResponse](#schemaupdatedatasetresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataset

<a id="opIdDeleteDataset"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/datasets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /datasets/{name}`

Deletes a dataset from DataBrew.

<h3 id="deletedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the dataset to be deleted.|
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
  "Name": {}
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

<h3 id="deletedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDatasetResponse](#schemadeletedatasetresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeJob

<a id="opIdDescribeJob"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /jobs/{name}`

Returns the definition of a specific DataBrew job.

<h3 id="describejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the job to be described.|
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
  "CreateDate": {},
  "CreatedBy": {},
  "DatasetName": {},
  "EncryptionKeyArn": {},
  "EncryptionMode": {},
  "Name": {},
  "Type": {},
  "LastModifiedBy": {},
  "LastModifiedDate": {},
  "LogSubscription": {},
  "MaxCapacity": {},
  "MaxRetries": {},
  "Outputs": {},
  "DataCatalogOutputs": {},
  "DatabaseOutputs": {},
  "ProjectName": {},
  "ProfileConfiguration": {
    "DatasetStatisticsConfiguration": {
      "IncludedStatistics": {},
      "Overrides": {}
    },
    "ProfileColumns": {},
    "ColumnStatisticsConfigurations": {},
    "EntityDetectorConfiguration": {
      "EntityTypes": {},
      "AllowedStatistics": {}
    }
  },
  "ValidationConfigurations": {},
  "RecipeReference": {
    "Name": {},
    "RecipeVersion": {}
  },
  "ResourceArn": {},
  "RoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Timeout": {},
  "JobSample": {
    "Mode": {},
    "Size": {}
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

<h3 id="describejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJobResponse](#schemadescribejobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteJob

<a id="opIdDeleteJob"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/jobs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /jobs/{name}`

Deletes the specified DataBrew job.

<h3 id="deletejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the job to be deleted.|
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
  "Name": {}
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

<h3 id="deletejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteJobResponse](#schemadeletejobresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProject

<a id="opIdDescribeProject"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/projects/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects/{name}`

Returns the definition of a specific DataBrew project.

<h3 id="describeproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the project to be described.|
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
  "CreateDate": {},
  "CreatedBy": {},
  "DatasetName": {},
  "LastModifiedDate": {},
  "LastModifiedBy": {},
  "Name": {},
  "RecipeName": {},
  "ResourceArn": {},
  "Sample": {
    "Size": {},
    "Type": {}
  },
  "RoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "SessionStatus": {},
  "OpenedBy": {},
  "OpenDate": {}
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

<h3 id="describeproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProjectResponse](#schemadescribeprojectresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProject

<a id="opIdUpdateProject"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/projects/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Sample": {
      "Size": {},
      "Type": {}
    },
    "RoleArn": "stringstringstringst"
  }'
```

`PUT /projects/{name}`

Modifies the definition of an existing DataBrew project.

> Body parameter

```json
{
  "Sample": {
    "Size": {},
    "Type": {}
  },
  "RoleArn": "stringstringstringst"
}
```

<h3 id="updateproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the project to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Sample|body|object|false|Represents the sample size and sampling type for DataBrew to use for interactive data analysis.|
|» » Size|body|object|false|none|
|» » Type|body|object|false|none|
|» RoleArn|body|string|true|The Amazon Resource Name (ARN) of the IAM role to be assumed for this request.|

> Example responses

> 200 Response

```json
{
  "LastModifiedDate": {},
  "Name": {}
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

<h3 id="updateproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProjectResponse](#schemaupdateprojectresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProject

<a id="opIdDeleteProject"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/projects/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /projects/{name}`

Deletes an existing DataBrew project.

<h3 id="deleteproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the project to be deleted.|
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
  "Name": {}
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

<h3 id="deleteproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProjectResponse](#schemadeleteprojectresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRecipeVersion

<a id="opIdDeleteRecipeVersion"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/recipes/string/recipeVersion/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /recipes/{name}/recipeVersion/{recipeVersion}`

Deletes a single version of a DataBrew recipe.

<h3 id="deleterecipeversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the recipe.|
|recipeVersion|path|string|true|The version of the recipe to be deleted. You can specify a numeric versions (<code>X.Y</code>) or <code>LATEST_WORKING</code>. <code>LATEST_PUBLISHED</code> is not supported.|
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
  "Name": {},
  "RecipeVersion": {}
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

<h3 id="deleterecipeversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRecipeVersionResponse](#schemadeleterecipeversionresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRuleset

<a id="opIdDescribeRuleset"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/rulesets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /rulesets/{name}`

Retrieves detailed information about the ruleset.

<h3 id="describeruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ruleset to be described.|
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
  "Name": {},
  "Description": {},
  "TargetArn": {},
  "Rules": {},
  "CreateDate": {},
  "CreatedBy": {},
  "LastModifiedBy": {},
  "LastModifiedDate": {},
  "ResourceArn": {},
  "Tags": {
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

<h3 id="describeruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRulesetResponse](#schemadescriberulesetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRuleset

<a id="opIdUpdateRuleset"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/rulesets/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "Rules": [
      {
        "Name": {},
        "Disabled": {},
        "CheckExpression": {},
        "SubstitutionMap": {
          "property1": "string",
          "property2": "string"
        },
        "Threshold": {
          "Value": {},
          "Type": {},
          "Unit": {}
        },
        "ColumnSelectors": {}
      }
    ]
  }'
```

`PUT /rulesets/{name}`

Updates specified ruleset.

> Body parameter

```json
{
  "Description": "string",
  "Rules": [
    {
      "Name": {},
      "Disabled": {},
      "CheckExpression": {},
      "SubstitutionMap": {
        "property1": "string",
        "property2": "string"
      },
      "Threshold": {
        "Value": {},
        "Type": {},
        "Unit": {}
      },
      "ColumnSelectors": {}
    }
  ]
}
```

<h3 id="updateruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ruleset to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|The description of the ruleset.|
|» Rules|body|[[Rule](#schemarule)]|true|A list of rules that are defined with the ruleset. A rule includes one or more checks to be validated on a DataBrew dataset.|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="updateruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRulesetResponse](#schemaupdaterulesetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRuleset

<a id="opIdDeleteRuleset"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/rulesets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /rulesets/{name}`

Deletes a ruleset.

<h3 id="deleteruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ruleset to be deleted.|
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
  "Name": {}
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

<h3 id="deleteruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRulesetResponse](#schemadeleterulesetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSchedule

<a id="opIdDescribeSchedule"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/schedules/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /schedules/{name}`

Returns the definition of a specific DataBrew schedule.

<h3 id="describeschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the schedule to be described.|
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
  "CreateDate": {},
  "CreatedBy": {},
  "JobNames": {},
  "LastModifiedBy": {},
  "LastModifiedDate": {},
  "ResourceArn": {},
  "CronExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Name": {}
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

<h3 id="describeschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeScheduleResponse](#schemadescribescheduleresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSchedule

<a id="opIdUpdateSchedule"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/schedules/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "JobNames": [
      "string"
    ],
    "CronExpression": "string"
  }'
```

`PUT /schedules/{name}`

Modifies the definition of an existing DataBrew schedule.

> Body parameter

```json
{
  "JobNames": [
    "string"
  ],
  "CronExpression": "string"
}
```

<h3 id="updateschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the schedule to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» JobNames|body|[[JobName](#schemajobname)]|false|The name or names of one or more jobs to be run for this schedule.|
|» CronExpression|body|string|true|The date or dates and time or times when the jobs are to be run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the <i>Glue DataBrew Developer Guide</i>.|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="updateschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateScheduleResponse](#schemaupdatescheduleresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSchedule

<a id="opIdDeleteSchedule"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/schedules/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /schedules/{name}`

Deletes the specified DataBrew schedule.

<h3 id="deleteschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the schedule to be deleted.|
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
  "Name": {}
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

<h3 id="deleteschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteScheduleResponse](#schemadeletescheduleresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeJobRun

<a id="opIdDescribeJobRun"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/jobs/string/jobRun/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /jobs/{name}/jobRun/{runId}`

Represents one run of a DataBrew job.

<h3 id="describejobrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the job being processed during this run.|
|runId|path|string|true|The unique identifier of the job run.|
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
  "Attempt": {},
  "CompletedOn": {},
  "DatasetName": {},
  "ErrorMessage": {},
  "ExecutionTime": {},
  "JobName": {},
  "ProfileConfiguration": {
    "DatasetStatisticsConfiguration": {
      "IncludedStatistics": {},
      "Overrides": {}
    },
    "ProfileColumns": {},
    "ColumnStatisticsConfigurations": {},
    "EntityDetectorConfiguration": {
      "EntityTypes": {},
      "AllowedStatistics": {}
    }
  },
  "ValidationConfigurations": {},
  "RunId": {},
  "State": {},
  "LogSubscription": {},
  "LogGroupName": {},
  "Outputs": {},
  "DataCatalogOutputs": {},
  "DatabaseOutputs": {},
  "RecipeReference": {
    "Name": {},
    "RecipeVersion": {}
  },
  "StartedBy": {},
  "StartedOn": {},
  "JobSample": {
    "Mode": {},
    "Size": {}
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

<h3 id="describejobrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJobRunResponse](#schemadescribejobrunresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRecipe

<a id="opIdDescribeRecipe"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/recipes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /recipes/{name}`

Returns the definition of a specific DataBrew recipe corresponding to a particular version.

<h3 id="describerecipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the recipe to be described.|
|recipeVersion|query|string|false|The recipe version identifier. If this parameter isn't specified, then the latest published version is returned.|
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
  "CreatedBy": {},
  "CreateDate": {},
  "LastModifiedBy": {},
  "LastModifiedDate": {},
  "ProjectName": {},
  "PublishedBy": {},
  "PublishedDate": {},
  "Description": {},
  "Name": {},
  "Steps": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ResourceArn": {},
  "RecipeVersion": {}
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

<h3 id="describerecipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRecipeResponse](#schemadescribereciperesponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRecipe

<a id="opIdUpdateRecipe"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/recipes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "Steps": [
      {
        "Action": {
          "Operation": {},
          "Parameters": {
            "property1": "string",
            "property2": "string"
          }
        },
        "ConditionExpressions": {}
      }
    ]
  }'
```

`PUT /recipes/{name}`

Modifies the definition of the <code>LATEST_WORKING</code> version of a DataBrew recipe.

> Body parameter

```json
{
  "Description": "string",
  "Steps": [
    {
      "Action": {
        "Operation": {},
        "Parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "ConditionExpressions": {}
    }
  ]
}
```

<h3 id="updaterecipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the recipe to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|A description of the recipe.|
|» Steps|body|[[RecipeStep](#schemarecipestep)]|false|One or more steps to be performed by the recipe. Each step consists of an action, and the conditions under which the action should succeed.|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="updaterecipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRecipeResponse](#schemaupdatereciperesponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJobRuns

<a id="opIdListJobRuns"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/jobs/string/jobRuns \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /jobs/{name}/jobRuns`

Lists all of the previous runs of a particular DataBrew job.

<h3 id="listjobruns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the job.|
|maxResults|query|integer|false|The maximum number of results to return in this request. |
|nextToken|query|string|false|The token returned by a previous call to retrieve the next set of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "JobRuns": {},
  "NextToken": {}
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

<h3 id="listjobruns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobRunsResponse](#schemalistjobrunsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJobs

<a id="opIdListJobs"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /jobs`

Lists all of the DataBrew jobs that are defined.

<h3 id="listjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetName|query|string|false|The name of a dataset. Using this parameter indicates to return only those jobs that act on the specified dataset.|
|maxResults|query|integer|false|The maximum number of results to return in this request. |
|nextToken|query|string|false|A token generated by DataBrew that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the NextToken value from the response object of the previous page call. |
|projectName|query|string|false|The name of a project. Using this parameter indicates to return only those jobs that are associated with the specified project.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Jobs": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobsResponse](#schemalistjobsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecipeVersions

<a id="opIdListRecipeVersions"></a>

> Code samples

```bash
curl 'https://databrew.us-east-1.amazonaws.com/recipeVersions#name?name=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /recipeVersions#name`

Lists the versions of a particular DataBrew recipe, except for <code>LATEST_WORKING</code>.

<h3 id="listrecipeversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return in this request. |
|nextToken|query|string|false|The token returned by a previous call to retrieve the next set of results.|
|name|query|string|true|The name of the recipe for which to return version information.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "Recipes": {}
}
```

> 480 Response

```json
null
```

<h3 id="listrecipeversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecipeVersionsResponse](#schemalistrecipeversionsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/tags/stringstringstringst \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{ResourceArn}`

Lists all the tags for a DataBrew resource. 

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The Amazon Resource Name (ARN) string that uniquely identifies the DataBrew resource. |
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
  "Tags": {
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/tags/stringstringstringst \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{ResourceArn}`

Adds metadata tags to a DataBrew resource, such as a dataset, project, recipe, job, or schedule.

> Body parameter

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The DataBrew resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN). For DataBrew, you can tag a dataset, a job, a project, or a recipe.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|One or more tags to be assigned to the resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PublishRecipe

<a id="opIdPublishRecipe"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/recipes/string/publishRecipe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string"
  }'
```

`POST /recipes/{name}/publishRecipe`

Publishes a new version of a DataBrew recipe.

> Body parameter

```json
{
  "Description": "string"
}
```

<h3 id="publishrecipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the recipe to be published.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|A description of the recipe to be published, for this version of the recipe.|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="publishrecipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublishRecipeResponse](#schemapublishreciperesponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendProjectSessionAction

<a id="opIdSendProjectSessionAction"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/projects/string/sendProjectSessionAction \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Preview": true,
    "RecipeStep": {
      "Action": {
        "Operation": {},
        "Parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "ConditionExpressions": {}
    },
    "StepIndex": 0,
    "ClientSessionId": "password",
    "ViewFrame": {
      "StartColumnIndex": {},
      "ColumnRange": {},
      "HiddenColumns": {},
      "StartRowIndex": {},
      "RowRange": {},
      "Analytics": {}
    }
  }'
```

`PUT /projects/{name}/sendProjectSessionAction`

Performs a recipe step within an interactive DataBrew session that's currently open.

> Body parameter

```json
{
  "Preview": true,
  "RecipeStep": {
    "Action": {
      "Operation": {},
      "Parameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "ConditionExpressions": {}
  },
  "StepIndex": 0,
  "ClientSessionId": "password",
  "ViewFrame": {
    "StartColumnIndex": {},
    "ColumnRange": {},
    "HiddenColumns": {},
    "StartRowIndex": {},
    "RowRange": {},
    "Analytics": {}
  }
}
```

<h3 id="sendprojectsessionaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the project to apply the action to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Preview|body|boolean|false|If true, the result of the recipe step will be returned, but not applied.|
|» RecipeStep|body|object|false|Represents a single step from a DataBrew recipe to be performed.|
|» » Action|body|object|false|none|
|» » » Operation|body|object|true|none|
|» » » Parameters|body|object|false|none|
|» » » » **additionalProperties**|body|[ParameterValue](#schemaparametervalue)|false|none|
|» » ConditionExpressions|body|object|false|none|
|» StepIndex|body|integer|false|The index from which to preview a step. This index is used to preview the result of steps that have already been applied, so that the resulting view frame is from earlier in the view frame stack.|
|» ClientSessionId|body|string(password)|false|A unique identifier for an interactive session that's currently open and ready for work. The action will be performed on this session.|
|» ViewFrame|body|object|false|Represents the data being transformed during an action.|
|» » StartColumnIndex|body|object|false|none|
|» » ColumnRange|body|object|false|none|
|» » HiddenColumns|body|object|false|none|
|» » StartRowIndex|body|object|false|none|
|» » RowRange|body|object|false|none|
|» » Analytics|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Result": {},
  "Name": {},
  "ActionId": {}
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

<h3 id="sendprojectsessionaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendProjectSessionActionResponse](#schemasendprojectsessionactionresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartJobRun

<a id="opIdStartJobRun"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/jobs/string/startJobRun \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /jobs/{name}/startJobRun`

Runs a DataBrew job.

<h3 id="startjobrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the job to be run.|
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
  "RunId": {}
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

<h3 id="startjobrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartJobRunResponse](#schemastartjobrunresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartProjectSession

<a id="opIdStartProjectSession"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/projects/string/startProjectSession \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AssumeControl": true
  }'
```

`PUT /projects/{name}/startProjectSession`

Creates an interactive session, enabling you to manipulate data in a DataBrew project.

> Body parameter

```json
{
  "AssumeControl": true
}
```

<h3 id="startprojectsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the project to act upon.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AssumeControl|body|boolean|false|A value that, if true, enables you to take control of a session, even if a different client is currently accessing the project.|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "ClientSessionId": {}
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

<h3 id="startprojectsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartProjectSessionResponse](#schemastartprojectsessionresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopJobRun

<a id="opIdStopJobRun"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/jobs/string/jobRun/string/stopJobRun \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /jobs/{name}/jobRun/{runId}/stopJobRun`

Stops a particular run of a job.

<h3 id="stopjobrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the job to be stopped.|
|runId|path|string|true|The ID of the job run to be stopped.|
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
  "RunId": {}
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

<h3 id="stopjobrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopJobRunResponse](#schemastopjobrunresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://databrew.us-east-1.amazonaws.com/tags/stringstringstringst#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{ResourceArn}#tagKeys`

Removes metadata tags from a DataBrew resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|A DataBrew resource from which you want to remove a tag or tags. The value for this parameter is an Amazon Resource Name (ARN). |
|tagKeys|query|[[TagKey](#schematagkey)]|true|The tag keys (names) of one or more tags to be removed.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProfileJob

<a id="opIdUpdateProfileJob"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/profileJobs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Configuration": {
      "DatasetStatisticsConfiguration": {
        "IncludedStatistics": {},
        "Overrides": {}
      },
      "ProfileColumns": {},
      "ColumnStatisticsConfigurations": {},
      "EntityDetectorConfiguration": {
        "EntityTypes": {},
        "AllowedStatistics": {}
      }
    },
    "EncryptionKeyArn": "stringstringstringst",
    "EncryptionMode": "SSE-KMS",
    "LogSubscription": "ENABLE",
    "MaxCapacity": 0,
    "MaxRetries": 0,
    "OutputLocation": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    },
    "ValidationConfigurations": [
      {
        "RulesetArn": {},
        "ValidationMode": {}
      }
    ],
    "RoleArn": "stringstringstringst",
    "Timeout": 0,
    "JobSample": {
      "Mode": {},
      "Size": {}
    }
  }'
```

`PUT /profileJobs/{name}`

Modifies the definition of an existing profile job.

> Body parameter

```json
{
  "Configuration": {
    "DatasetStatisticsConfiguration": {
      "IncludedStatistics": {},
      "Overrides": {}
    },
    "ProfileColumns": {},
    "ColumnStatisticsConfigurations": {},
    "EntityDetectorConfiguration": {
      "EntityTypes": {},
      "AllowedStatistics": {}
    }
  },
  "EncryptionKeyArn": "stringstringstringst",
  "EncryptionMode": "SSE-KMS",
  "LogSubscription": "ENABLE",
  "MaxCapacity": 0,
  "MaxRetries": 0,
  "OutputLocation": {
    "Bucket": {},
    "Key": {},
    "BucketOwner": {}
  },
  "ValidationConfigurations": [
    {
      "RulesetArn": {},
      "ValidationMode": {}
    }
  ],
  "RoleArn": "stringstringstringst",
  "Timeout": 0,
  "JobSample": {
    "Mode": {},
    "Size": {}
  }
}
```

<h3 id="updateprofilejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the job to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Configuration|body|object|false|Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns. |
|» » DatasetStatisticsConfiguration|body|object|false|none|
|» » » IncludedStatistics|body|object|false|none|
|» » » Overrides|body|object|false|none|
|» » ProfileColumns|body|object|false|none|
|» » ColumnStatisticsConfigurations|body|object|false|none|
|» » EntityDetectorConfiguration|body|object|false|none|
|» » » EntityTypes|body|object|true|none|
|» » » AllowedStatistics|body|object|false|none|
|» EncryptionKeyArn|body|string|false|The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.|
|» EncryptionMode|body|string|false|<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>|
|» LogSubscription|body|string|false|Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.|
|» MaxCapacity|body|integer|false|The maximum number of compute nodes that DataBrew can use when the job processes data.|
|» MaxRetries|body|integer|false|The maximum number of times to retry the job after a job run fails.|
|» OutputLocation|body|object|true|Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.|
|» » Bucket|body|object|false|none|
|» » Key|body|object|false|none|
|» » BucketOwner|body|object|false|none|
|» ValidationConfigurations|body|[[ValidationConfiguration](#schemavalidationconfiguration)]|false|List of validation configurations that are applied to the profile job.|
|» RoleArn|body|string|true|The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.|
|» Timeout|body|integer|false|The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.|
|» JobSample|body|object|false|A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a <code>JobSample</code> value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.|
|» » Mode|body|object|false|none|
|» » Size|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» EncryptionMode|SSE-KMS|
|» EncryptionMode|SSE-S3|
|» LogSubscription|ENABLE|
|» LogSubscription|DISABLE|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="updateprofilejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProfileJobResponse](#schemaupdateprofilejobresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRecipeJob

<a id="opIdUpdateRecipeJob"></a>

> Code samples

```bash
curl https://databrew.us-east-1.amazonaws.com/recipeJobs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EncryptionKeyArn": "stringstringstringst",
    "EncryptionMode": "SSE-KMS",
    "LogSubscription": "ENABLE",
    "MaxCapacity": 0,
    "MaxRetries": 0,
    "Outputs": [
      {
        "CompressionFormat": {},
        "Format": {},
        "PartitionColumns": {},
        "Location": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        },
        "Overwrite": {},
        "FormatOptions": {
          "Csv": {
            "Delimiter": {}
          }
        },
        "MaxOutputFiles": {}
      }
    ],
    "DataCatalogOutputs": [
      {
        "CatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "S3Options": {
          "Location": {
            "Bucket": {},
            "Key": {},
            "BucketOwner": {}
          }
        },
        "DatabaseOptions": {
          "TempDirectory": {
            "Bucket": {},
            "Key": {},
            "BucketOwner": {}
          },
          "TableName": {}
        },
        "Overwrite": {}
      }
    ],
    "DatabaseOutputs": [
      {
        "GlueConnectionName": {},
        "DatabaseOptions": {
          "TempDirectory": {
            "Bucket": {},
            "Key": {},
            "BucketOwner": {}
          },
          "TableName": {}
        },
        "DatabaseOutputMode": {}
      }
    ],
    "RoleArn": "stringstringstringst",
    "Timeout": 0
  }'
```

`PUT /recipeJobs/{name}`

Modifies the definition of an existing DataBrew recipe job.

> Body parameter

```json
{
  "EncryptionKeyArn": "stringstringstringst",
  "EncryptionMode": "SSE-KMS",
  "LogSubscription": "ENABLE",
  "MaxCapacity": 0,
  "MaxRetries": 0,
  "Outputs": [
    {
      "CompressionFormat": {},
      "Format": {},
      "PartitionColumns": {},
      "Location": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "Overwrite": {},
      "FormatOptions": {
        "Csv": {
          "Delimiter": {}
        }
      },
      "MaxOutputFiles": {}
    }
  ],
  "DataCatalogOutputs": [
    {
      "CatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "S3Options": {
        "Location": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        }
      },
      "DatabaseOptions": {
        "TempDirectory": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        },
        "TableName": {}
      },
      "Overwrite": {}
    }
  ],
  "DatabaseOutputs": [
    {
      "GlueConnectionName": {},
      "DatabaseOptions": {
        "TempDirectory": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        },
        "TableName": {}
      },
      "DatabaseOutputMode": {}
    }
  ],
  "RoleArn": "stringstringstringst",
  "Timeout": 0
}
```

<h3 id="updaterecipejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the job to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» EncryptionKeyArn|body|string|false|The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.|
|» EncryptionMode|body|string|false|<p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>|
|» LogSubscription|body|string|false|Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.|
|» MaxCapacity|body|integer|false|The maximum number of nodes that DataBrew can consume when the job processes data.|
|» MaxRetries|body|integer|false|The maximum number of times to retry the job after a job run fails.|
|» Outputs|body|[[Output](#schemaoutput)]|false|One or more artifacts that represent the output from running the job. |
|» DataCatalogOutputs|body|[[DataCatalogOutput](#schemadatacatalogoutput)]|false|One or more artifacts that represent the Glue Data Catalog output from running the job.|
|» DatabaseOutputs|body|[[DatabaseOutput](#schemadatabaseoutput)]|false|Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.|
|» RoleArn|body|string|true|The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.|
|» Timeout|body|integer|false|The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» EncryptionMode|SSE-KMS|
|» EncryptionMode|SSE-S3|
|» LogSubscription|ENABLE|
|» LogSubscription|DISABLE|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="updaterecipejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRecipeJobResponse](#schemaupdaterecipejobresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchDeleteRecipeVersionResponse">BatchDeleteRecipeVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleterecipeversionresponse"></a>
<a id="schema_BatchDeleteRecipeVersionResponse"></a>
<a id="tocSbatchdeleterecipeversionresponse"></a>
<a id="tocsbatchdeleterecipeversionresponse"></a>

```json
{
  "Name": {},
  "Errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Errors|object|false|none|none|

<h2 id="tocS_RecipeVersion">RecipeVersion</h2>
<!-- backwards compatibility -->
<a id="schemarecipeversion"></a>
<a id="schema_RecipeVersion"></a>
<a id="tocSrecipeversion"></a>
<a id="tocsrecipeversion"></a>

```json
"string"
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

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
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

<h2 id="tocS_CreateDatasetResponse">CreateDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetresponse"></a>
<a id="schema_CreateDatasetResponse"></a>
<a id="tocScreatedatasetresponse"></a>
<a id="tocscreatedatasetresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_JsonOptions">JsonOptions</h2>
<!-- backwards compatibility -->
<a id="schemajsonoptions"></a>
<a id="schema_JsonOptions"></a>
<a id="tocSjsonoptions"></a>
<a id="tocsjsonoptions"></a>

```json
{
  "MultiLine": {}
}
```

Represents the JSON-specific options that define how input is to be interpreted by Glue DataBrew.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MultiLine|object|false|none|none|

<h2 id="tocS_ExcelOptions">ExcelOptions</h2>
<!-- backwards compatibility -->
<a id="schemaexceloptions"></a>
<a id="schema_ExcelOptions"></a>
<a id="tocSexceloptions"></a>
<a id="tocsexceloptions"></a>

```json
{
  "SheetNames": {},
  "SheetIndexes": {},
  "HeaderRow": {}
}
```

Represents a set of options that define how DataBrew will interpret a Microsoft Excel file when creating a dataset from that file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SheetNames|object|false|none|none|
|SheetIndexes|object|false|none|none|
|HeaderRow|object|false|none|none|

<h2 id="tocS_CsvOptions">CsvOptions</h2>
<!-- backwards compatibility -->
<a id="schemacsvoptions"></a>
<a id="schema_CsvOptions"></a>
<a id="tocScsvoptions"></a>
<a id="tocscsvoptions"></a>

```json
{
  "Delimiter": {},
  "HeaderRow": {}
}
```

Represents a set of options that define how DataBrew will read a comma-separated value (CSV) file when creating a dataset from that file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Delimiter|object|false|none|none|
|HeaderRow|object|false|none|none|

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
{
  "Bucket": {},
  "Key": {},
  "BucketOwner": {}
}
```

Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|Key|object|false|none|none|
|BucketOwner|object|false|none|none|

<h2 id="tocS_DataCatalogInputDefinition">DataCatalogInputDefinition</h2>
<!-- backwards compatibility -->
<a id="schemadatacataloginputdefinition"></a>
<a id="schema_DataCatalogInputDefinition"></a>
<a id="tocSdatacataloginputdefinition"></a>
<a id="tocsdatacataloginputdefinition"></a>

```json
{
  "CatalogId": {},
  "DatabaseName": {},
  "TableName": {},
  "TempDirectory": {
    "Bucket": {},
    "Key": {},
    "BucketOwner": {}
  }
}
```

Represents how metadata stored in the Glue Data Catalog is defined in a DataBrew dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|TempDirectory|object|false|none|none|

<h2 id="tocS_DatabaseInputDefinition">DatabaseInputDefinition</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseinputdefinition"></a>
<a id="schema_DatabaseInputDefinition"></a>
<a id="tocSdatabaseinputdefinition"></a>
<a id="tocsdatabaseinputdefinition"></a>

```json
{
  "GlueConnectionName": {},
  "DatabaseTableName": {},
  "TempDirectory": {
    "Bucket": {},
    "Key": {},
    "BucketOwner": {}
  },
  "QueryString": {}
}
```

Connection information for dataset input files stored in a database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlueConnectionName|object|true|none|none|
|DatabaseTableName|object|false|none|none|
|TempDirectory|[S3Location](#schemas3location)|false|none|Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.|
|QueryString|object|false|none|none|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "SourceArn": {}
}
```

Contains additional resource information needed for specific datasets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceArn|object|false|none|none|

<h2 id="tocS_FilterExpression">FilterExpression</h2>
<!-- backwards compatibility -->
<a id="schemafilterexpression"></a>
<a id="schema_FilterExpression"></a>
<a id="tocSfilterexpression"></a>
<a id="tocsfilterexpression"></a>

```json
{
  "Expression": {},
  "ValuesMap": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents a structure for defining parameter conditions. Supported conditions are described here: <a href="https://docs.aws.amazon.com/databrew/latest/dg/datasets.multiple-files.html#conditions.for.dynamic.datasets">Supported conditions for dynamic datasets</a> in the <i>Glue DataBrew Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|object|true|none|none|
|ValuesMap|object|true|none|none|

<h2 id="tocS_FilesLimit">FilesLimit</h2>
<!-- backwards compatibility -->
<a id="schemafileslimit"></a>
<a id="schema_FilesLimit"></a>
<a id="tocSfileslimit"></a>
<a id="tocsfileslimit"></a>

```json
{
  "MaxFiles": {},
  "OrderedBy": {},
  "Order": {}
}
```

Represents a limit imposed on number of Amazon S3 files that should be selected for a dataset from a connected Amazon S3 path.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxFiles|object|true|none|none|
|OrderedBy|object|false|none|none|
|Order|object|false|none|none|

<h2 id="tocS_PathParametersMap">PathParametersMap</h2>
<!-- backwards compatibility -->
<a id="schemapathparametersmap"></a>
<a id="schema_PathParametersMap"></a>
<a id="tocSpathparametersmap"></a>
<a id="tocspathparametersmap"></a>

```json
{
  "property1": {
    "Name": {},
    "Type": {},
    "DatetimeOptions": {
      "Format": {},
      "TimezoneOffset": {},
      "LocaleCode": {}
    },
    "CreateColumn": {},
    "Filter": {
      "Expression": {},
      "ValuesMap": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "property2": {
    "Name": {},
    "Type": {},
    "DatetimeOptions": {
      "Format": {},
      "TimezoneOffset": {},
      "LocaleCode": {}
    },
    "CreateColumn": {},
    "Filter": {
      "Expression": {},
      "ValuesMap": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

A structure that map names of parameters used in the Amazon S3 path of a dataset to their definitions. A definition includes parameter type and conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DatasetParameter](#schemadatasetparameter)|false|none|Represents a dataset parameter that defines type and conditions for a parameter in the Amazon S3 path of the dataset.|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
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

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateProfileJobResponse">CreateProfileJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprofilejobresponse"></a>
<a id="schema_CreateProfileJobResponse"></a>
<a id="tocScreateprofilejobresponse"></a>
<a id="tocscreateprofilejobresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_Bucket">Bucket</h2>
<!-- backwards compatibility -->
<a id="schemabucket"></a>
<a id="schema_Bucket"></a>
<a id="tocSbucket"></a>
<a id="tocsbucket"></a>

```json
"string"
```

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
"string"
```

<h2 id="tocS_BucketOwner">BucketOwner</h2>
<!-- backwards compatibility -->
<a id="schemabucketowner"></a>
<a id="schema_BucketOwner"></a>
<a id="tocSbucketowner"></a>
<a id="tocsbucketowner"></a>

```json
"stringstring"
```

<h2 id="tocS_StatisticsConfiguration">StatisticsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemastatisticsconfiguration"></a>
<a id="schema_StatisticsConfiguration"></a>
<a id="tocSstatisticsconfiguration"></a>
<a id="tocsstatisticsconfiguration"></a>

```json
{
  "IncludedStatistics": {},
  "Overrides": {}
}
```

Configuration of evaluations for a profile job. This configuration can be used to select evaluations and override the parameters of selected evaluations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IncludedStatistics|object|false|none|none|
|Overrides|object|false|none|none|

<h2 id="tocS_ColumnSelectorList">ColumnSelectorList</h2>
<!-- backwards compatibility -->
<a id="schemacolumnselectorlist"></a>
<a id="schema_ColumnSelectorList"></a>
<a id="tocScolumnselectorlist"></a>
<a id="tocscolumnselectorlist"></a>

```json
[
  {
    "Regex": {},
    "Name": {}
  }
]
```

<h2 id="tocS_ColumnStatisticsConfigurationList">ColumnStatisticsConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemacolumnstatisticsconfigurationlist"></a>
<a id="schema_ColumnStatisticsConfigurationList"></a>
<a id="tocScolumnstatisticsconfigurationlist"></a>
<a id="tocscolumnstatisticsconfigurationlist"></a>

```json
[
  {
    "Selectors": {},
    "Statistics": {
      "IncludedStatistics": {},
      "Overrides": {}
    }
  }
]
```

<h2 id="tocS_EntityDetectorConfiguration">EntityDetectorConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaentitydetectorconfiguration"></a>
<a id="schema_EntityDetectorConfiguration"></a>
<a id="tocSentitydetectorconfiguration"></a>
<a id="tocsentitydetectorconfiguration"></a>

```json
{
  "EntityTypes": {},
  "AllowedStatistics": {}
}
```

Configuration of entity detection for a profile job. When undefined, entity detection is disabled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityTypes|object|true|none|none|
|AllowedStatistics|object|false|none|none|

<h2 id="tocS_ValidationConfiguration">ValidationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavalidationconfiguration"></a>
<a id="schema_ValidationConfiguration"></a>
<a id="tocSvalidationconfiguration"></a>
<a id="tocsvalidationconfiguration"></a>

```json
{
  "RulesetArn": {},
  "ValidationMode": {}
}
```

Configuration for data quality validation. Used to select the Rulesets and Validation Mode to be used in the profile job. When ValidationConfiguration is null, the profile job will run without data quality validation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RulesetArn|object|true|none|none|
|ValidationMode|object|false|none|none|

<h2 id="tocS_SampleMode">SampleMode</h2>
<!-- backwards compatibility -->
<a id="schemasamplemode"></a>
<a id="schema_SampleMode"></a>
<a id="tocSsamplemode"></a>
<a id="tocssamplemode"></a>

```json
"FULL_DATASET"
```

<h2 id="tocS_JobSize">JobSize</h2>
<!-- backwards compatibility -->
<a id="schemajobsize"></a>
<a id="schema_JobSize"></a>
<a id="tocSjobsize"></a>
<a id="tocsjobsize"></a>

```json
0
```

<h2 id="tocS_CreateProjectResponse">CreateProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectresponse"></a>
<a id="schema_CreateProjectResponse"></a>
<a id="tocScreateprojectresponse"></a>
<a id="tocscreateprojectresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_SampleSize">SampleSize</h2>
<!-- backwards compatibility -->
<a id="schemasamplesize"></a>
<a id="schema_SampleSize"></a>
<a id="tocSsamplesize"></a>
<a id="tocssamplesize"></a>

```json
1
```

<h2 id="tocS_SampleType">SampleType</h2>
<!-- backwards compatibility -->
<a id="schemasampletype"></a>
<a id="schema_SampleType"></a>
<a id="tocSsampletype"></a>
<a id="tocssampletype"></a>

```json
"FIRST_N"
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

<h2 id="tocS_CreateRecipeResponse">CreateRecipeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatereciperesponse"></a>
<a id="schema_CreateRecipeResponse"></a>
<a id="tocScreatereciperesponse"></a>
<a id="tocscreatereciperesponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_RecipeStep">RecipeStep</h2>
<!-- backwards compatibility -->
<a id="schemarecipestep"></a>
<a id="schema_RecipeStep"></a>
<a id="tocSrecipestep"></a>
<a id="tocsrecipestep"></a>

```json
{
  "Action": {
    "Operation": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    }
  },
  "ConditionExpressions": {}
}
```

Represents a single step from a DataBrew recipe to be performed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|ConditionExpressions|object|false|none|none|

<h2 id="tocS_CreateRecipeJobResponse">CreateRecipeJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterecipejobresponse"></a>
<a id="schema_CreateRecipeJobResponse"></a>
<a id="tocScreaterecipejobresponse"></a>
<a id="tocscreaterecipejobresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_Output">Output</h2>
<!-- backwards compatibility -->
<a id="schemaoutput"></a>
<a id="schema_Output"></a>
<a id="tocSoutput"></a>
<a id="tocsoutput"></a>

```json
{
  "CompressionFormat": {},
  "Format": {},
  "PartitionColumns": {},
  "Location": {
    "Bucket": {},
    "Key": {},
    "BucketOwner": {}
  },
  "Overwrite": {},
  "FormatOptions": {
    "Csv": {
      "Delimiter": {}
    }
  },
  "MaxOutputFiles": {}
}
```

Represents options that specify how and where in Amazon S3 DataBrew writes the output generated by recipe jobs or profile jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CompressionFormat|object|false|none|none|
|Format|object|false|none|none|
|PartitionColumns|object|false|none|none|
|Location|object|true|none|none|
|Overwrite|object|false|none|none|
|FormatOptions|object|false|none|none|
|MaxOutputFiles|object|false|none|none|

<h2 id="tocS_DataCatalogOutput">DataCatalogOutput</h2>
<!-- backwards compatibility -->
<a id="schemadatacatalogoutput"></a>
<a id="schema_DataCatalogOutput"></a>
<a id="tocSdatacatalogoutput"></a>
<a id="tocsdatacatalogoutput"></a>

```json
{
  "CatalogId": {},
  "DatabaseName": {},
  "TableName": {},
  "S3Options": {
    "Location": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    }
  },
  "DatabaseOptions": {
    "TempDirectory": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    },
    "TableName": {}
  },
  "Overwrite": {}
}
```

Represents options that specify how and where in the Glue Data Catalog DataBrew writes the output generated by recipe jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogId|object|false|none|none|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|S3Options|object|false|none|none|
|DatabaseOptions|object|false|none|none|
|Overwrite|object|false|none|none|

<h2 id="tocS_DatabaseOutput">DatabaseOutput</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseoutput"></a>
<a id="schema_DatabaseOutput"></a>
<a id="tocSdatabaseoutput"></a>
<a id="tocsdatabaseoutput"></a>

```json
{
  "GlueConnectionName": {},
  "DatabaseOptions": {
    "TempDirectory": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    },
    "TableName": {}
  },
  "DatabaseOutputMode": {}
}
```

Represents a JDBC database output object which defines the output destination for a DataBrew recipe job to write into.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlueConnectionName|object|true|none|none|
|DatabaseOptions|object|true|none|none|
|DatabaseOutputMode|object|false|none|none|

<h2 id="tocS_RecipeName">RecipeName</h2>
<!-- backwards compatibility -->
<a id="schemarecipename"></a>
<a id="schema_RecipeName"></a>
<a id="tocSrecipename"></a>
<a id="tocsrecipename"></a>

```json
"string"
```

<h2 id="tocS_CreateRulesetResponse">CreateRulesetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterulesetresponse"></a>
<a id="schema_CreateRulesetResponse"></a>
<a id="tocScreaterulesetresponse"></a>
<a id="tocscreaterulesetresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "Name": {},
  "Disabled": {},
  "CheckExpression": {},
  "SubstitutionMap": {
    "property1": "string",
    "property2": "string"
  },
  "Threshold": {
    "Value": {},
    "Type": {},
    "Unit": {}
  },
  "ColumnSelectors": {}
}
```

Represents a single data quality requirement that should be validated in the scope of this dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Disabled|object|false|none|none|
|CheckExpression|object|true|none|none|
|SubstitutionMap|object|false|none|none|
|Threshold|object|false|none|none|
|ColumnSelectors|object|false|none|none|

<h2 id="tocS_CreateScheduleResponse">CreateScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatescheduleresponse"></a>
<a id="schema_CreateScheduleResponse"></a>
<a id="tocScreatescheduleresponse"></a>
<a id="tocscreatescheduleresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_JobName">JobName</h2>
<!-- backwards compatibility -->
<a id="schemajobname"></a>
<a id="schema_JobName"></a>
<a id="tocSjobname"></a>
<a id="tocsjobname"></a>

```json
"string"
```

<h2 id="tocS_DeleteDatasetResponse">DeleteDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetresponse"></a>
<a id="schema_DeleteDatasetResponse"></a>
<a id="tocSdeletedatasetresponse"></a>
<a id="tocsdeletedatasetresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteJobResponse">DeleteJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletejobresponse"></a>
<a id="schema_DeleteJobResponse"></a>
<a id="tocSdeletejobresponse"></a>
<a id="tocsdeletejobresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteProjectResponse">DeleteProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectresponse"></a>
<a id="schema_DeleteProjectResponse"></a>
<a id="tocSdeleteprojectresponse"></a>
<a id="tocsdeleteprojectresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteRecipeVersionResponse">DeleteRecipeVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleterecipeversionresponse"></a>
<a id="schema_DeleteRecipeVersionResponse"></a>
<a id="tocSdeleterecipeversionresponse"></a>
<a id="tocsdeleterecipeversionresponse"></a>

```json
{
  "Name": {},
  "RecipeVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|RecipeVersion|object|true|none|none|

<h2 id="tocS_DeleteRulesetResponse">DeleteRulesetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulesetresponse"></a>
<a id="schema_DeleteRulesetResponse"></a>
<a id="tocSdeleterulesetresponse"></a>
<a id="tocsdeleterulesetresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteScheduleResponse">DeleteScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletescheduleresponse"></a>
<a id="schema_DeleteScheduleResponse"></a>
<a id="tocSdeletescheduleresponse"></a>
<a id="tocsdeletescheduleresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DescribeDatasetResponse">DescribeDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetresponse"></a>
<a id="schema_DescribeDatasetResponse"></a>
<a id="tocSdescribedatasetresponse"></a>
<a id="tocsdescribedatasetresponse"></a>

```json
{
  "CreatedBy": {},
  "CreateDate": {},
  "Name": {},
  "Format": {},
  "FormatOptions": {
    "Json": {
      "MultiLine": {}
    },
    "Excel": {
      "SheetNames": {},
      "SheetIndexes": {},
      "HeaderRow": {}
    },
    "Csv": {
      "Delimiter": {},
      "HeaderRow": {}
    }
  },
  "Input": {
    "S3InputDefinition": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    },
    "DataCatalogInputDefinition": {
      "CatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      }
    },
    "DatabaseInputDefinition": {
      "GlueConnectionName": {},
      "DatabaseTableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "QueryString": {}
    },
    "Metadata": {
      "SourceArn": {}
    }
  },
  "LastModifiedDate": {},
  "LastModifiedBy": {},
  "Source": {},
  "PathOptions": {
    "LastModifiedDateCondition": {
      "Expression": {},
      "ValuesMap": {
        "property1": "string",
        "property2": "string"
      }
    },
    "FilesLimit": {
      "MaxFiles": {},
      "OrderedBy": {},
      "Order": {}
    },
    "Parameters": {
      "property1": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "property2": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedBy|object|false|none|none|
|CreateDate|object|false|none|none|
|Name|object|true|none|none|
|Format|object|false|none|none|
|FormatOptions|[FormatOptions](#schemaformatoptions)|false|none|Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.|
|Input|[Input](#schemainput)|true|none|Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.|
|LastModifiedDate|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|Source|object|false|none|none|
|PathOptions|object|false|none|none|
|Tags|object|false|none|none|
|ResourceArn|object|false|none|none|

<h2 id="tocS_DescribeJobResponse">DescribeJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobresponse"></a>
<a id="schema_DescribeJobResponse"></a>
<a id="tocSdescribejobresponse"></a>
<a id="tocsdescribejobresponse"></a>

```json
{
  "CreateDate": {},
  "CreatedBy": {},
  "DatasetName": {},
  "EncryptionKeyArn": {},
  "EncryptionMode": {},
  "Name": {},
  "Type": {},
  "LastModifiedBy": {},
  "LastModifiedDate": {},
  "LogSubscription": {},
  "MaxCapacity": {},
  "MaxRetries": {},
  "Outputs": {},
  "DataCatalogOutputs": {},
  "DatabaseOutputs": {},
  "ProjectName": {},
  "ProfileConfiguration": {
    "DatasetStatisticsConfiguration": {
      "IncludedStatistics": {},
      "Overrides": {}
    },
    "ProfileColumns": {},
    "ColumnStatisticsConfigurations": {},
    "EntityDetectorConfiguration": {
      "EntityTypes": {},
      "AllowedStatistics": {}
    }
  },
  "ValidationConfigurations": {},
  "RecipeReference": {
    "Name": {},
    "RecipeVersion": {}
  },
  "ResourceArn": {},
  "RoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Timeout": {},
  "JobSample": {
    "Mode": {},
    "Size": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateDate|object|false|none|none|
|CreatedBy|object|false|none|none|
|DatasetName|object|false|none|none|
|EncryptionKeyArn|object|false|none|none|
|EncryptionMode|object|false|none|none|
|Name|object|true|none|none|
|Type|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|LogSubscription|object|false|none|none|
|MaxCapacity|object|false|none|none|
|MaxRetries|object|false|none|none|
|Outputs|object|false|none|none|
|DataCatalogOutputs|object|false|none|none|
|DatabaseOutputs|object|false|none|none|
|ProjectName|object|false|none|none|
|ProfileConfiguration|object|false|none|none|
|ValidationConfigurations|object|false|none|none|
|RecipeReference|[RecipeReference](#schemarecipereference)|false|none|Represents the name and version of a DataBrew recipe.|
|ResourceArn|object|false|none|none|
|RoleArn|object|false|none|none|
|Tags|object|false|none|none|
|Timeout|object|false|none|none|
|JobSample|object|false|none|none|

<h2 id="tocS_DescribeJobRunResponse">DescribeJobRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobrunresponse"></a>
<a id="schema_DescribeJobRunResponse"></a>
<a id="tocSdescribejobrunresponse"></a>
<a id="tocsdescribejobrunresponse"></a>

```json
{
  "Attempt": {},
  "CompletedOn": {},
  "DatasetName": {},
  "ErrorMessage": {},
  "ExecutionTime": {},
  "JobName": {},
  "ProfileConfiguration": {
    "DatasetStatisticsConfiguration": {
      "IncludedStatistics": {},
      "Overrides": {}
    },
    "ProfileColumns": {},
    "ColumnStatisticsConfigurations": {},
    "EntityDetectorConfiguration": {
      "EntityTypes": {},
      "AllowedStatistics": {}
    }
  },
  "ValidationConfigurations": {},
  "RunId": {},
  "State": {},
  "LogSubscription": {},
  "LogGroupName": {},
  "Outputs": {},
  "DataCatalogOutputs": {},
  "DatabaseOutputs": {},
  "RecipeReference": {
    "Name": {},
    "RecipeVersion": {}
  },
  "StartedBy": {},
  "StartedOn": {},
  "JobSample": {
    "Mode": {},
    "Size": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attempt|object|false|none|none|
|CompletedOn|object|false|none|none|
|DatasetName|object|false|none|none|
|ErrorMessage|object|false|none|none|
|ExecutionTime|object|false|none|none|
|JobName|object|true|none|none|
|ProfileConfiguration|object|false|none|none|
|ValidationConfigurations|object|false|none|none|
|RunId|object|false|none|none|
|State|object|false|none|none|
|LogSubscription|object|false|none|none|
|LogGroupName|object|false|none|none|
|Outputs|object|false|none|none|
|DataCatalogOutputs|object|false|none|none|
|DatabaseOutputs|object|false|none|none|
|RecipeReference|[RecipeReference](#schemarecipereference)|false|none|Represents the name and version of a DataBrew recipe.|
|StartedBy|object|false|none|none|
|StartedOn|object|false|none|none|
|JobSample|object|false|none|none|

<h2 id="tocS_DescribeProjectResponse">DescribeProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprojectresponse"></a>
<a id="schema_DescribeProjectResponse"></a>
<a id="tocSdescribeprojectresponse"></a>
<a id="tocsdescribeprojectresponse"></a>

```json
{
  "CreateDate": {},
  "CreatedBy": {},
  "DatasetName": {},
  "LastModifiedDate": {},
  "LastModifiedBy": {},
  "Name": {},
  "RecipeName": {},
  "ResourceArn": {},
  "Sample": {
    "Size": {},
    "Type": {}
  },
  "RoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "SessionStatus": {},
  "OpenedBy": {},
  "OpenDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateDate|object|false|none|none|
|CreatedBy|object|false|none|none|
|DatasetName|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|Name|object|true|none|none|
|RecipeName|object|false|none|none|
|ResourceArn|object|false|none|none|
|Sample|[Sample](#schemasample)|false|none|Represents the sample size and sampling type for DataBrew to use for interactive data analysis.|
|RoleArn|object|false|none|none|
|Tags|object|false|none|none|
|SessionStatus|object|false|none|none|
|OpenedBy|object|false|none|none|
|OpenDate|object|false|none|none|

<h2 id="tocS_DescribeRecipeResponse">DescribeRecipeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereciperesponse"></a>
<a id="schema_DescribeRecipeResponse"></a>
<a id="tocSdescribereciperesponse"></a>
<a id="tocsdescribereciperesponse"></a>

```json
{
  "CreatedBy": {},
  "CreateDate": {},
  "LastModifiedBy": {},
  "LastModifiedDate": {},
  "ProjectName": {},
  "PublishedBy": {},
  "PublishedDate": {},
  "Description": {},
  "Name": {},
  "Steps": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ResourceArn": {},
  "RecipeVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedBy|object|false|none|none|
|CreateDate|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|ProjectName|object|false|none|none|
|PublishedBy|object|false|none|none|
|PublishedDate|object|false|none|none|
|Description|object|false|none|none|
|Name|object|true|none|none|
|Steps|object|false|none|none|
|Tags|object|false|none|none|
|ResourceArn|object|false|none|none|
|RecipeVersion|object|false|none|none|

<h2 id="tocS_DescribeRulesetResponse">DescribeRulesetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberulesetresponse"></a>
<a id="schema_DescribeRulesetResponse"></a>
<a id="tocSdescriberulesetresponse"></a>
<a id="tocsdescriberulesetresponse"></a>

```json
{
  "Name": {},
  "Description": {},
  "TargetArn": {},
  "Rules": {},
  "CreateDate": {},
  "CreatedBy": {},
  "LastModifiedBy": {},
  "LastModifiedDate": {},
  "ResourceArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|TargetArn|object|false|none|none|
|Rules|object|false|none|none|
|CreateDate|object|false|none|none|
|CreatedBy|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|ResourceArn|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeScheduleResponse">DescribeScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribescheduleresponse"></a>
<a id="schema_DescribeScheduleResponse"></a>
<a id="tocSdescribescheduleresponse"></a>
<a id="tocsdescribescheduleresponse"></a>

```json
{
  "CreateDate": {},
  "CreatedBy": {},
  "JobNames": {},
  "LastModifiedBy": {},
  "LastModifiedDate": {},
  "ResourceArn": {},
  "CronExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateDate|object|false|none|none|
|CreatedBy|object|false|none|none|
|JobNames|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|ResourceArn|object|false|none|none|
|CronExpression|object|false|none|none|
|Tags|object|false|none|none|
|Name|object|true|none|none|

<h2 id="tocS_ListDatasetsResponse">ListDatasetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsresponse"></a>
<a id="schema_ListDatasetsResponse"></a>
<a id="tocSlistdatasetsresponse"></a>
<a id="tocslistdatasetsresponse"></a>

```json
{
  "Datasets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Datasets|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListJobRunsResponse">ListJobRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobrunsresponse"></a>
<a id="schema_ListJobRunsResponse"></a>
<a id="tocSlistjobrunsresponse"></a>
<a id="tocslistjobrunsresponse"></a>

```json
{
  "JobRuns": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobRuns|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListJobsResponse">ListJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsresponse"></a>
<a id="schema_ListJobsResponse"></a>
<a id="tocSlistjobsresponse"></a>
<a id="tocslistjobsresponse"></a>

```json
{
  "Jobs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Jobs|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListProjectsResponse">ListProjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsresponse"></a>
<a id="schema_ListProjectsResponse"></a>
<a id="tocSlistprojectsresponse"></a>
<a id="tocslistprojectsresponse"></a>

```json
{
  "Projects": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Projects|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRecipeVersionsResponse">ListRecipeVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrecipeversionsresponse"></a>
<a id="schema_ListRecipeVersionsResponse"></a>
<a id="tocSlistrecipeversionsresponse"></a>
<a id="tocslistrecipeversionsresponse"></a>

```json
{
  "NextToken": {},
  "Recipes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Recipes|object|true|none|none|

<h2 id="tocS_ListRecipesResponse">ListRecipesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrecipesresponse"></a>
<a id="schema_ListRecipesResponse"></a>
<a id="tocSlistrecipesresponse"></a>
<a id="tocslistrecipesresponse"></a>

```json
{
  "Recipes": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Recipes|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRulesetsResponse">ListRulesetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrulesetsresponse"></a>
<a id="schema_ListRulesetsResponse"></a>
<a id="tocSlistrulesetsresponse"></a>
<a id="tocslistrulesetsresponse"></a>

```json
{
  "Rulesets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rulesets|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSchedulesResponse">ListSchedulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistschedulesresponse"></a>
<a id="schema_ListSchedulesResponse"></a>
<a id="tocSlistschedulesresponse"></a>
<a id="tocslistschedulesresponse"></a>

```json
{
  "Schedules": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Schedules|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_PublishRecipeResponse">PublishRecipeResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublishreciperesponse"></a>
<a id="schema_PublishRecipeResponse"></a>
<a id="tocSpublishreciperesponse"></a>
<a id="tocspublishreciperesponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_SendProjectSessionActionResponse">SendProjectSessionActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendprojectsessionactionresponse"></a>
<a id="schema_SendProjectSessionActionResponse"></a>
<a id="tocSsendprojectsessionactionresponse"></a>
<a id="tocssendprojectsessionactionresponse"></a>

```json
{
  "Result": {},
  "Name": {},
  "ActionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Result|object|false|none|none|
|Name|object|true|none|none|
|ActionId|object|false|none|none|

<h2 id="tocS_RecipeAction">RecipeAction</h2>
<!-- backwards compatibility -->
<a id="schemarecipeaction"></a>
<a id="schema_RecipeAction"></a>
<a id="tocSrecipeaction"></a>
<a id="tocsrecipeaction"></a>

```json
{
  "Operation": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents a transformation and associated parameters that are used to apply a change to a DataBrew dataset. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-actions-reference.html">Recipe actions reference</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Operation|object|true|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_ConditionExpressionList">ConditionExpressionList</h2>
<!-- backwards compatibility -->
<a id="schemaconditionexpressionlist"></a>
<a id="schema_ConditionExpressionList"></a>
<a id="tocSconditionexpressionlist"></a>
<a id="tocsconditionexpressionlist"></a>

```json
[
  {
    "Condition": {},
    "Value": {},
    "TargetColumn": {}
  }
]
```

<h2 id="tocS_StartColumnIndex">StartColumnIndex</h2>
<!-- backwards compatibility -->
<a id="schemastartcolumnindex"></a>
<a id="schema_StartColumnIndex"></a>
<a id="tocSstartcolumnindex"></a>
<a id="tocsstartcolumnindex"></a>

```json
0
```

<h2 id="tocS_ColumnRange">ColumnRange</h2>
<!-- backwards compatibility -->
<a id="schemacolumnrange"></a>
<a id="schema_ColumnRange"></a>
<a id="tocScolumnrange"></a>
<a id="tocscolumnrange"></a>

```json
0
```

<h2 id="tocS_HiddenColumnList">HiddenColumnList</h2>
<!-- backwards compatibility -->
<a id="schemahiddencolumnlist"></a>
<a id="schema_HiddenColumnList"></a>
<a id="tocShiddencolumnlist"></a>
<a id="tocshiddencolumnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StartRowIndex">StartRowIndex</h2>
<!-- backwards compatibility -->
<a id="schemastartrowindex"></a>
<a id="schema_StartRowIndex"></a>
<a id="tocSstartrowindex"></a>
<a id="tocsstartrowindex"></a>

```json
0
```

<h2 id="tocS_RowRange">RowRange</h2>
<!-- backwards compatibility -->
<a id="schemarowrange"></a>
<a id="schema_RowRange"></a>
<a id="tocSrowrange"></a>
<a id="tocsrowrange"></a>

```json
0
```

<h2 id="tocS_AnalyticsMode">AnalyticsMode</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsmode"></a>
<a id="schema_AnalyticsMode"></a>
<a id="tocSanalyticsmode"></a>
<a id="tocsanalyticsmode"></a>

```json
"ENABLE"
```

<h2 id="tocS_StartJobRunResponse">StartJobRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartjobrunresponse"></a>
<a id="schema_StartJobRunResponse"></a>
<a id="tocSstartjobrunresponse"></a>
<a id="tocsstartjobrunresponse"></a>

```json
{
  "RunId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RunId|object|true|none|none|

<h2 id="tocS_StartProjectSessionResponse">StartProjectSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartprojectsessionresponse"></a>
<a id="schema_StartProjectSessionResponse"></a>
<a id="tocSstartprojectsessionresponse"></a>
<a id="tocsstartprojectsessionresponse"></a>

```json
{
  "Name": {},
  "ClientSessionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ClientSessionId|object|false|none|none|

<h2 id="tocS_StopJobRunResponse">StopJobRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopjobrunresponse"></a>
<a id="schema_StopJobRunResponse"></a>
<a id="tocSstopjobrunresponse"></a>
<a id="tocsstopjobrunresponse"></a>

```json
{
  "RunId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RunId|object|true|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateDatasetResponse">UpdateDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetresponse"></a>
<a id="schema_UpdateDatasetResponse"></a>
<a id="tocSupdatedatasetresponse"></a>
<a id="tocsupdatedatasetresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_UpdateProfileJobResponse">UpdateProfileJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprofilejobresponse"></a>
<a id="schema_UpdateProfileJobResponse"></a>
<a id="tocSupdateprofilejobresponse"></a>
<a id="tocsupdateprofilejobresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_UpdateProjectResponse">UpdateProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectresponse"></a>
<a id="schema_UpdateProjectResponse"></a>
<a id="tocSupdateprojectresponse"></a>
<a id="tocsupdateprojectresponse"></a>

```json
{
  "LastModifiedDate": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LastModifiedDate|object|false|none|none|
|Name|object|true|none|none|

<h2 id="tocS_UpdateRecipeResponse">UpdateRecipeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereciperesponse"></a>
<a id="schema_UpdateRecipeResponse"></a>
<a id="tocSupdatereciperesponse"></a>
<a id="tocsupdatereciperesponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_UpdateRecipeJobResponse">UpdateRecipeJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterecipejobresponse"></a>
<a id="schema_UpdateRecipeJobResponse"></a>
<a id="tocSupdaterecipejobresponse"></a>
<a id="tocsupdaterecipejobresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_UpdateRulesetResponse">UpdateRulesetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulesetresponse"></a>
<a id="schema_UpdateRulesetResponse"></a>
<a id="tocSupdaterulesetresponse"></a>
<a id="tocsupdaterulesetresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_UpdateScheduleResponse">UpdateScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatescheduleresponse"></a>
<a id="schema_UpdateScheduleResponse"></a>
<a id="tocSupdatescheduleresponse"></a>
<a id="tocsupdatescheduleresponse"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_ActionId">ActionId</h2>
<!-- backwards compatibility -->
<a id="schemaactionid"></a>
<a id="schema_ActionId"></a>
<a id="tocSactionid"></a>
<a id="tocsactionid"></a>

```json
0
```

<h2 id="tocS_AllowedStatistics">AllowedStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaallowedstatistics"></a>
<a id="schema_AllowedStatistics"></a>
<a id="tocSallowedstatistics"></a>
<a id="tocsallowedstatistics"></a>

```json
{
  "Statistics": {}
}
```

Configuration of statistics that are allowed to be run on columns that contain detected entities. When undefined, no statistics will be computed on columns that contain detected entities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statistics|object|true|none|none|

<h2 id="tocS_AllowedStatisticList">AllowedStatisticList</h2>
<!-- backwards compatibility -->
<a id="schemaallowedstatisticlist"></a>
<a id="schema_AllowedStatisticList"></a>
<a id="tocSallowedstatisticlist"></a>
<a id="tocsallowedstatisticlist"></a>

```json
[
  {
    "Statistics": {}
  }
]
```

<h2 id="tocS_StatisticList">StatisticList</h2>
<!-- backwards compatibility -->
<a id="schemastatisticlist"></a>
<a id="schema_StatisticList"></a>
<a id="tocSstatisticlist"></a>
<a id="tocsstatisticlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_AssumeControl">AssumeControl</h2>
<!-- backwards compatibility -->
<a id="schemaassumecontrol"></a>
<a id="schema_AssumeControl"></a>
<a id="tocSassumecontrol"></a>
<a id="tocsassumecontrol"></a>

```json
true
```

<h2 id="tocS_Attempt">Attempt</h2>
<!-- backwards compatibility -->
<a id="schemaattempt"></a>
<a id="schema_Attempt"></a>
<a id="tocSattempt"></a>
<a id="tocsattempt"></a>

```json
0
```

<h2 id="tocS_RecipeVersionList">RecipeVersionList</h2>
<!-- backwards compatibility -->
<a id="schemarecipeversionlist"></a>
<a id="schema_RecipeVersionList"></a>
<a id="tocSrecipeversionlist"></a>
<a id="tocsrecipeversionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchDeleteRecipeVersionRequest">BatchDeleteRecipeVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleterecipeversionrequest"></a>
<a id="schema_BatchDeleteRecipeVersionRequest"></a>
<a id="tocSbatchdeleterecipeversionrequest"></a>
<a id="tocsbatchdeleterecipeversionrequest"></a>

```json
{
  "RecipeVersions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecipeVersions|object|true|none|none|

<h2 id="tocS_RecipeErrorList">RecipeErrorList</h2>
<!-- backwards compatibility -->
<a id="schemarecipeerrorlist"></a>
<a id="schema_RecipeErrorList"></a>
<a id="tocSrecipeerrorlist"></a>
<a id="tocsrecipeerrorlist"></a>

```json
[
  {
    "ErrorCode": {},
    "ErrorMessage": {},
    "RecipeVersion": {}
  }
]
```

<h2 id="tocS_CatalogId">CatalogId</h2>
<!-- backwards compatibility -->
<a id="schemacatalogid"></a>
<a id="schema_CatalogId"></a>
<a id="tocScatalogid"></a>
<a id="tocscatalogid"></a>

```json
"string"
```

<h2 id="tocS_ClientSessionId">ClientSessionId</h2>
<!-- backwards compatibility -->
<a id="schemaclientsessionid"></a>
<a id="schema_ClientSessionId"></a>
<a id="tocSclientsessionid"></a>
<a id="tocsclientsessionid"></a>

```json
"password"
```

<h2 id="tocS_ColumnName">ColumnName</h2>
<!-- backwards compatibility -->
<a id="schemacolumnname"></a>
<a id="schema_ColumnName"></a>
<a id="tocScolumnname"></a>
<a id="tocscolumnname"></a>

```json
"string"
```

<h2 id="tocS_ColumnNameList">ColumnNameList</h2>
<!-- backwards compatibility -->
<a id="schemacolumnnamelist"></a>
<a id="schema_ColumnNameList"></a>
<a id="tocScolumnnamelist"></a>
<a id="tocscolumnnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ColumnSelector">ColumnSelector</h2>
<!-- backwards compatibility -->
<a id="schemacolumnselector"></a>
<a id="schema_ColumnSelector"></a>
<a id="tocScolumnselector"></a>
<a id="tocscolumnselector"></a>

```json
{
  "Regex": {},
  "Name": {}
}
```

Selector of a column from a dataset for profile job configuration. One selector includes either a column name or a regular expression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Regex|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_ColumnStatisticsConfiguration">ColumnStatisticsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacolumnstatisticsconfiguration"></a>
<a id="schema_ColumnStatisticsConfiguration"></a>
<a id="tocScolumnstatisticsconfiguration"></a>
<a id="tocscolumnstatisticsconfiguration"></a>

```json
{
  "Selectors": {},
  "Statistics": {
    "IncludedStatistics": {},
    "Overrides": {}
  }
}
```

Configuration for column evaluations for a profile job. ColumnStatisticsConfiguration can be used to select evaluations and override parameters of evaluations for particular columns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Selectors|object|false|none|none|
|Statistics|object|true|none|none|

<h2 id="tocS_CompressionFormat">CompressionFormat</h2>
<!-- backwards compatibility -->
<a id="schemacompressionformat"></a>
<a id="schema_CompressionFormat"></a>
<a id="tocScompressionformat"></a>
<a id="tocscompressionformat"></a>

```json
"GZIP"
```

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
"string"
```

<h2 id="tocS_ConditionValue">ConditionValue</h2>
<!-- backwards compatibility -->
<a id="schemaconditionvalue"></a>
<a id="schema_ConditionValue"></a>
<a id="tocSconditionvalue"></a>
<a id="tocsconditionvalue"></a>

```json
"string"
```

<h2 id="tocS_TargetColumn">TargetColumn</h2>
<!-- backwards compatibility -->
<a id="schematargetcolumn"></a>
<a id="schema_TargetColumn"></a>
<a id="tocStargetcolumn"></a>
<a id="tocstargetcolumn"></a>

```json
"string"
```

<h2 id="tocS_ConditionExpression">ConditionExpression</h2>
<!-- backwards compatibility -->
<a id="schemaconditionexpression"></a>
<a id="schema_ConditionExpression"></a>
<a id="tocSconditionexpression"></a>
<a id="tocsconditionexpression"></a>

```json
{
  "Condition": {},
  "Value": {},
  "TargetColumn": {}
}
```

<p>Represents an individual condition that evaluates to true or false.</p> <p>Conditions are used with recipe actions. The action is only performed for column values where the condition evaluates to true.</p> <p>If a recipe requires more than one condition, then the recipe must specify multiple <code>ConditionExpression</code> elements. Each condition is applied to the rows in a dataset first, before the recipe action is performed.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Condition|object|true|none|none|
|Value|object|false|none|none|
|TargetColumn|object|true|none|none|

<h2 id="tocS_CreateColumn">CreateColumn</h2>
<!-- backwards compatibility -->
<a id="schemacreatecolumn"></a>
<a id="schema_CreateColumn"></a>
<a id="tocScreatecolumn"></a>
<a id="tocscreatecolumn"></a>

```json
true
```

<h2 id="tocS_DatasetName">DatasetName</h2>
<!-- backwards compatibility -->
<a id="schemadatasetname"></a>
<a id="schema_DatasetName"></a>
<a id="tocSdatasetname"></a>
<a id="tocsdatasetname"></a>

```json
"string"
```

<h2 id="tocS_InputFormat">InputFormat</h2>
<!-- backwards compatibility -->
<a id="schemainputformat"></a>
<a id="schema_InputFormat"></a>
<a id="tocSinputformat"></a>
<a id="tocsinputformat"></a>

```json
"CSV"
```

<h2 id="tocS_FormatOptions">FormatOptions</h2>
<!-- backwards compatibility -->
<a id="schemaformatoptions"></a>
<a id="schema_FormatOptions"></a>
<a id="tocSformatoptions"></a>
<a id="tocsformatoptions"></a>

```json
{
  "Json": {
    "MultiLine": {}
  },
  "Excel": {
    "SheetNames": {},
    "SheetIndexes": {},
    "HeaderRow": {}
  },
  "Csv": {
    "Delimiter": {},
    "HeaderRow": {}
  }
}
```

Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Json|object|false|none|none|
|Excel|object|false|none|none|
|Csv|object|false|none|none|

<h2 id="tocS_Input">Input</h2>
<!-- backwards compatibility -->
<a id="schemainput"></a>
<a id="schema_Input"></a>
<a id="tocSinput"></a>
<a id="tocsinput"></a>

```json
{
  "S3InputDefinition": {
    "Bucket": {},
    "Key": {},
    "BucketOwner": {}
  },
  "DataCatalogInputDefinition": {
    "CatalogId": {},
    "DatabaseName": {},
    "TableName": {},
    "TempDirectory": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    }
  },
  "DatabaseInputDefinition": {
    "GlueConnectionName": {},
    "DatabaseTableName": {},
    "TempDirectory": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    },
    "QueryString": {}
  },
  "Metadata": {
    "SourceArn": {}
  }
}
```

Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3InputDefinition|object|false|none|none|
|DataCatalogInputDefinition|object|false|none|none|
|DatabaseInputDefinition|object|false|none|none|
|Metadata|object|false|none|none|

<h2 id="tocS_PathOptions">PathOptions</h2>
<!-- backwards compatibility -->
<a id="schemapathoptions"></a>
<a id="schema_PathOptions"></a>
<a id="tocSpathoptions"></a>
<a id="tocspathoptions"></a>

```json
{
  "LastModifiedDateCondition": {
    "Expression": {},
    "ValuesMap": {
      "property1": "string",
      "property2": "string"
    }
  },
  "FilesLimit": {
    "MaxFiles": {},
    "OrderedBy": {},
    "Order": {}
  },
  "Parameters": {
    "property1": {
      "Name": {},
      "Type": {},
      "DatetimeOptions": {
        "Format": {},
        "TimezoneOffset": {},
        "LocaleCode": {}
      },
      "CreateColumn": {},
      "Filter": {
        "Expression": {},
        "ValuesMap": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "property2": {
      "Name": {},
      "Type": {},
      "DatetimeOptions": {
        "Format": {},
        "TimezoneOffset": {},
        "LocaleCode": {}
      },
      "CreateColumn": {},
      "Filter": {
        "Expression": {},
        "ValuesMap": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  }
}
```

Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LastModifiedDateCondition|object|false|none|none|
|FilesLimit|object|false|none|none|
|Parameters|object|false|none|none|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_CreateDatasetRequest">CreateDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetrequest"></a>
<a id="schema_CreateDatasetRequest"></a>
<a id="tocScreatedatasetrequest"></a>
<a id="tocscreatedatasetrequest"></a>

```json
{
  "Name": {},
  "Format": {},
  "FormatOptions": {
    "Json": {
      "MultiLine": {}
    },
    "Excel": {
      "SheetNames": {},
      "SheetIndexes": {},
      "HeaderRow": {}
    },
    "Csv": {
      "Delimiter": {},
      "HeaderRow": {}
    }
  },
  "Input": {
    "S3InputDefinition": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    },
    "DataCatalogInputDefinition": {
      "CatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      }
    },
    "DatabaseInputDefinition": {
      "GlueConnectionName": {},
      "DatabaseTableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "QueryString": {}
    },
    "Metadata": {
      "SourceArn": {}
    }
  },
  "PathOptions": {
    "LastModifiedDateCondition": {
      "Expression": {},
      "ValuesMap": {
        "property1": "string",
        "property2": "string"
      }
    },
    "FilesLimit": {
      "MaxFiles": {},
      "OrderedBy": {},
      "Order": {}
    },
    "Parameters": {
      "property1": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "property2": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Format|object|false|none|none|
|FormatOptions|[FormatOptions](#schemaformatoptions)|false|none|Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.|
|Input|[Input](#schemainput)|true|none|Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.|
|PathOptions|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_EncryptionKeyArn">EncryptionKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkeyarn"></a>
<a id="schema_EncryptionKeyArn"></a>
<a id="tocSencryptionkeyarn"></a>
<a id="tocsencryptionkeyarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_EncryptionMode">EncryptionMode</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionmode"></a>
<a id="schema_EncryptionMode"></a>
<a id="tocSencryptionmode"></a>
<a id="tocsencryptionmode"></a>

```json
"SSE-KMS"
```

<h2 id="tocS_LogSubscription">LogSubscription</h2>
<!-- backwards compatibility -->
<a id="schemalogsubscription"></a>
<a id="schema_LogSubscription"></a>
<a id="tocSlogsubscription"></a>
<a id="tocslogsubscription"></a>

```json
"ENABLE"
```

<h2 id="tocS_MaxCapacity">MaxCapacity</h2>
<!-- backwards compatibility -->
<a id="schemamaxcapacity"></a>
<a id="schema_MaxCapacity"></a>
<a id="tocSmaxcapacity"></a>
<a id="tocsmaxcapacity"></a>

```json
0
```

<h2 id="tocS_MaxRetries">MaxRetries</h2>
<!-- backwards compatibility -->
<a id="schemamaxretries"></a>
<a id="schema_MaxRetries"></a>
<a id="tocSmaxretries"></a>
<a id="tocsmaxretries"></a>

```json
0
```

<h2 id="tocS_ProfileConfiguration">ProfileConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaprofileconfiguration"></a>
<a id="schema_ProfileConfiguration"></a>
<a id="tocSprofileconfiguration"></a>
<a id="tocsprofileconfiguration"></a>

```json
{
  "DatasetStatisticsConfiguration": {
    "IncludedStatistics": {},
    "Overrides": {}
  },
  "ProfileColumns": {},
  "ColumnStatisticsConfigurations": {},
  "EntityDetectorConfiguration": {
    "EntityTypes": {},
    "AllowedStatistics": {}
  }
}
```

Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetStatisticsConfiguration|object|false|none|none|
|ProfileColumns|object|false|none|none|
|ColumnStatisticsConfigurations|object|false|none|none|
|EntityDetectorConfiguration|object|false|none|none|

<h2 id="tocS_ValidationConfigurationList">ValidationConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemavalidationconfigurationlist"></a>
<a id="schema_ValidationConfigurationList"></a>
<a id="tocSvalidationconfigurationlist"></a>
<a id="tocsvalidationconfigurationlist"></a>

```json
[
  {
    "RulesetArn": {},
    "ValidationMode": {}
  }
]
```

<h2 id="tocS_Timeout">Timeout</h2>
<!-- backwards compatibility -->
<a id="schematimeout"></a>
<a id="schema_Timeout"></a>
<a id="tocStimeout"></a>
<a id="tocstimeout"></a>

```json
0
```

<h2 id="tocS_JobSample">JobSample</h2>
<!-- backwards compatibility -->
<a id="schemajobsample"></a>
<a id="schema_JobSample"></a>
<a id="tocSjobsample"></a>
<a id="tocsjobsample"></a>

```json
{
  "Mode": {},
  "Size": {}
}
```

A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a <code>JobSample</code> value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mode|object|false|none|none|
|Size|object|false|none|none|

<h2 id="tocS_CreateProfileJobRequest">CreateProfileJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprofilejobrequest"></a>
<a id="schema_CreateProfileJobRequest"></a>
<a id="tocScreateprofilejobrequest"></a>
<a id="tocscreateprofilejobrequest"></a>

```json
{
  "DatasetName": {},
  "EncryptionKeyArn": {},
  "EncryptionMode": {},
  "Name": {},
  "LogSubscription": {},
  "MaxCapacity": {},
  "MaxRetries": {},
  "OutputLocation": {
    "Bucket": {},
    "Key": {},
    "BucketOwner": {}
  },
  "Configuration": {
    "DatasetStatisticsConfiguration": {
      "IncludedStatistics": {},
      "Overrides": {}
    },
    "ProfileColumns": {},
    "ColumnStatisticsConfigurations": {},
    "EntityDetectorConfiguration": {
      "EntityTypes": {},
      "AllowedStatistics": {}
    }
  },
  "ValidationConfigurations": {},
  "RoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Timeout": {},
  "JobSample": {
    "Mode": {},
    "Size": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetName|object|true|none|none|
|EncryptionKeyArn|object|false|none|none|
|EncryptionMode|object|false|none|none|
|Name|object|true|none|none|
|LogSubscription|object|false|none|none|
|MaxCapacity|object|false|none|none|
|MaxRetries|object|false|none|none|
|OutputLocation|[S3Location](#schemas3location)|true|none|Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.|
|Configuration|object|false|none|none|
|ValidationConfigurations|object|false|none|none|
|RoleArn|object|true|none|none|
|Tags|object|false|none|none|
|Timeout|object|false|none|none|
|JobSample|object|false|none|none|

<h2 id="tocS_ProjectName">ProjectName</h2>
<!-- backwards compatibility -->
<a id="schemaprojectname"></a>
<a id="schema_ProjectName"></a>
<a id="tocSprojectname"></a>
<a id="tocsprojectname"></a>

```json
"string"
```

<h2 id="tocS_Sample">Sample</h2>
<!-- backwards compatibility -->
<a id="schemasample"></a>
<a id="schema_Sample"></a>
<a id="tocSsample"></a>
<a id="tocssample"></a>

```json
{
  "Size": {},
  "Type": {}
}
```

Represents the sample size and sampling type for DataBrew to use for interactive data analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Size|object|false|none|none|
|Type|object|true|none|none|

<h2 id="tocS_CreateProjectRequest">CreateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectrequest"></a>
<a id="schema_CreateProjectRequest"></a>
<a id="tocScreateprojectrequest"></a>
<a id="tocscreateprojectrequest"></a>

```json
{
  "DatasetName": {},
  "Name": {},
  "RecipeName": {},
  "Sample": {
    "Size": {},
    "Type": {}
  },
  "RoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetName|object|true|none|none|
|Name|object|true|none|none|
|RecipeName|object|true|none|none|
|Sample|[Sample](#schemasample)|false|none|Represents the sample size and sampling type for DataBrew to use for interactive data analysis.|
|RoleArn|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_OutputList">OutputList</h2>
<!-- backwards compatibility -->
<a id="schemaoutputlist"></a>
<a id="schema_OutputList"></a>
<a id="tocSoutputlist"></a>
<a id="tocsoutputlist"></a>

```json
[
  {
    "CompressionFormat": {},
    "Format": {},
    "PartitionColumns": {},
    "Location": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    },
    "Overwrite": {},
    "FormatOptions": {
      "Csv": {
        "Delimiter": {}
      }
    },
    "MaxOutputFiles": {}
  }
]
```

<h2 id="tocS_DataCatalogOutputList">DataCatalogOutputList</h2>
<!-- backwards compatibility -->
<a id="schemadatacatalogoutputlist"></a>
<a id="schema_DataCatalogOutputList"></a>
<a id="tocSdatacatalogoutputlist"></a>
<a id="tocsdatacatalogoutputlist"></a>

```json
[
  {
    "CatalogId": {},
    "DatabaseName": {},
    "TableName": {},
    "S3Options": {
      "Location": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      }
    },
    "DatabaseOptions": {
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "TableName": {}
    },
    "Overwrite": {}
  }
]
```

<h2 id="tocS_DatabaseOutputList">DatabaseOutputList</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseoutputlist"></a>
<a id="schema_DatabaseOutputList"></a>
<a id="tocSdatabaseoutputlist"></a>
<a id="tocsdatabaseoutputlist"></a>

```json
[
  {
    "GlueConnectionName": {},
    "DatabaseOptions": {
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "TableName": {}
    },
    "DatabaseOutputMode": {}
  }
]
```

<h2 id="tocS_RecipeReference">RecipeReference</h2>
<!-- backwards compatibility -->
<a id="schemarecipereference"></a>
<a id="schema_RecipeReference"></a>
<a id="tocSrecipereference"></a>
<a id="tocsrecipereference"></a>

```json
{
  "Name": {},
  "RecipeVersion": {}
}
```

Represents the name and version of a DataBrew recipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|RecipeVersion|object|false|none|none|

<h2 id="tocS_CreateRecipeJobRequest">CreateRecipeJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterecipejobrequest"></a>
<a id="schema_CreateRecipeJobRequest"></a>
<a id="tocScreaterecipejobrequest"></a>
<a id="tocscreaterecipejobrequest"></a>

```json
{
  "DatasetName": {},
  "EncryptionKeyArn": {},
  "EncryptionMode": {},
  "Name": {},
  "LogSubscription": {},
  "MaxCapacity": {},
  "MaxRetries": {},
  "Outputs": {},
  "DataCatalogOutputs": {},
  "DatabaseOutputs": {},
  "ProjectName": {},
  "RecipeReference": {
    "Name": {},
    "RecipeVersion": {}
  },
  "RoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Timeout": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetName|object|false|none|none|
|EncryptionKeyArn|object|false|none|none|
|EncryptionMode|object|false|none|none|
|Name|object|true|none|none|
|LogSubscription|object|false|none|none|
|MaxCapacity|object|false|none|none|
|MaxRetries|object|false|none|none|
|Outputs|object|false|none|none|
|DataCatalogOutputs|object|false|none|none|
|DatabaseOutputs|object|false|none|none|
|ProjectName|object|false|none|none|
|RecipeReference|[RecipeReference](#schemarecipereference)|false|none|Represents the name and version of a DataBrew recipe.|
|RoleArn|object|true|none|none|
|Tags|object|false|none|none|
|Timeout|object|false|none|none|

<h2 id="tocS_RecipeDescription">RecipeDescription</h2>
<!-- backwards compatibility -->
<a id="schemarecipedescription"></a>
<a id="schema_RecipeDescription"></a>
<a id="tocSrecipedescription"></a>
<a id="tocsrecipedescription"></a>

```json
"string"
```

<h2 id="tocS_RecipeStepList">RecipeStepList</h2>
<!-- backwards compatibility -->
<a id="schemarecipesteplist"></a>
<a id="schema_RecipeStepList"></a>
<a id="tocSrecipesteplist"></a>
<a id="tocsrecipesteplist"></a>

```json
[
  {
    "Action": {
      "Operation": {},
      "Parameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "ConditionExpressions": {}
  }
]
```

<h2 id="tocS_CreateRecipeRequest">CreateRecipeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatereciperequest"></a>
<a id="schema_CreateRecipeRequest"></a>
<a id="tocScreatereciperequest"></a>
<a id="tocscreatereciperequest"></a>

```json
{
  "Description": {},
  "Name": {},
  "Steps": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Name|object|true|none|none|
|Steps|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_RulesetName">RulesetName</h2>
<!-- backwards compatibility -->
<a id="schemarulesetname"></a>
<a id="schema_RulesetName"></a>
<a id="tocSrulesetname"></a>
<a id="tocsrulesetname"></a>

```json
"string"
```

<h2 id="tocS_RulesetDescription">RulesetDescription</h2>
<!-- backwards compatibility -->
<a id="schemarulesetdescription"></a>
<a id="schema_RulesetDescription"></a>
<a id="tocSrulesetdescription"></a>
<a id="tocsrulesetdescription"></a>

```json
"string"
```

<h2 id="tocS_RuleList">RuleList</h2>
<!-- backwards compatibility -->
<a id="schemarulelist"></a>
<a id="schema_RuleList"></a>
<a id="tocSrulelist"></a>
<a id="tocsrulelist"></a>

```json
[
  {
    "Name": {},
    "Disabled": {},
    "CheckExpression": {},
    "SubstitutionMap": {
      "property1": "string",
      "property2": "string"
    },
    "Threshold": {
      "Value": {},
      "Type": {},
      "Unit": {}
    },
    "ColumnSelectors": {}
  }
]
```

<h2 id="tocS_CreateRulesetRequest">CreateRulesetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterulesetrequest"></a>
<a id="schema_CreateRulesetRequest"></a>
<a id="tocScreaterulesetrequest"></a>
<a id="tocscreaterulesetrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "TargetArn": {},
  "Rules": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|TargetArn|object|true|none|none|
|Rules|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_JobNameList">JobNameList</h2>
<!-- backwards compatibility -->
<a id="schemajobnamelist"></a>
<a id="schema_JobNameList"></a>
<a id="tocSjobnamelist"></a>
<a id="tocsjobnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CronExpression">CronExpression</h2>
<!-- backwards compatibility -->
<a id="schemacronexpression"></a>
<a id="schema_CronExpression"></a>
<a id="tocScronexpression"></a>
<a id="tocscronexpression"></a>

```json
"string"
```

<h2 id="tocS_ScheduleName">ScheduleName</h2>
<!-- backwards compatibility -->
<a id="schemaschedulename"></a>
<a id="schema_ScheduleName"></a>
<a id="tocSschedulename"></a>
<a id="tocsschedulename"></a>

```json
"string"
```

<h2 id="tocS_CreateScheduleRequest">CreateScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateschedulerequest"></a>
<a id="schema_CreateScheduleRequest"></a>
<a id="tocScreateschedulerequest"></a>
<a id="tocscreateschedulerequest"></a>

```json
{
  "JobNames": {},
  "CronExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobNames|object|false|none|none|
|CronExpression|object|true|none|none|
|Tags|object|false|none|none|
|Name|object|true|none|none|

<h2 id="tocS_CreatedBy">CreatedBy</h2>
<!-- backwards compatibility -->
<a id="schemacreatedby"></a>
<a id="schema_CreatedBy"></a>
<a id="tocScreatedby"></a>
<a id="tocscreatedby"></a>

```json
"string"
```

<h2 id="tocS_Delimiter">Delimiter</h2>
<!-- backwards compatibility -->
<a id="schemadelimiter"></a>
<a id="schema_Delimiter"></a>
<a id="tocSdelimiter"></a>
<a id="tocsdelimiter"></a>

```json
"s"
```

<h2 id="tocS_HeaderRow">HeaderRow</h2>
<!-- backwards compatibility -->
<a id="schemaheaderrow"></a>
<a id="schema_HeaderRow"></a>
<a id="tocSheaderrow"></a>
<a id="tocsheaderrow"></a>

```json
true
```

<h2 id="tocS_CsvOutputOptions">CsvOutputOptions</h2>
<!-- backwards compatibility -->
<a id="schemacsvoutputoptions"></a>
<a id="schema_CsvOutputOptions"></a>
<a id="tocScsvoutputoptions"></a>
<a id="tocscsvoutputoptions"></a>

```json
{
  "Delimiter": {}
}
```

Represents a set of options that define how DataBrew will write a comma-separated value (CSV) file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Delimiter|object|false|none|none|

<h2 id="tocS_DatabaseName">DatabaseName</h2>
<!-- backwards compatibility -->
<a id="schemadatabasename"></a>
<a id="schema_DatabaseName"></a>
<a id="tocSdatabasename"></a>
<a id="tocsdatabasename"></a>

```json
"string"
```

<h2 id="tocS_TableName">TableName</h2>
<!-- backwards compatibility -->
<a id="schematablename"></a>
<a id="schema_TableName"></a>
<a id="tocStablename"></a>
<a id="tocstablename"></a>

```json
"string"
```

<h2 id="tocS_S3TableOutputOptions">S3TableOutputOptions</h2>
<!-- backwards compatibility -->
<a id="schemas3tableoutputoptions"></a>
<a id="schema_S3TableOutputOptions"></a>
<a id="tocSs3tableoutputoptions"></a>
<a id="tocss3tableoutputoptions"></a>

```json
{
  "Location": {
    "Bucket": {},
    "Key": {},
    "BucketOwner": {}
  }
}
```

Represents options that specify how and where DataBrew writes the Amazon S3 output generated by recipe jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Location|object|true|none|none|

<h2 id="tocS_DatabaseTableOutputOptions">DatabaseTableOutputOptions</h2>
<!-- backwards compatibility -->
<a id="schemadatabasetableoutputoptions"></a>
<a id="schema_DatabaseTableOutputOptions"></a>
<a id="tocSdatabasetableoutputoptions"></a>
<a id="tocsdatabasetableoutputoptions"></a>

```json
{
  "TempDirectory": {
    "Bucket": {},
    "Key": {},
    "BucketOwner": {}
  },
  "TableName": {}
}
```

Represents options that specify how and where DataBrew writes the database output generated by recipe jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TempDirectory|object|false|none|none|
|TableName|object|true|none|none|

<h2 id="tocS_OverwriteOutput">OverwriteOutput</h2>
<!-- backwards compatibility -->
<a id="schemaoverwriteoutput"></a>
<a id="schema_OverwriteOutput"></a>
<a id="tocSoverwriteoutput"></a>
<a id="tocsoverwriteoutput"></a>

```json
true
```

<h2 id="tocS_GlueConnectionName">GlueConnectionName</h2>
<!-- backwards compatibility -->
<a id="schemaglueconnectionname"></a>
<a id="schema_GlueConnectionName"></a>
<a id="tocSglueconnectionname"></a>
<a id="tocsglueconnectionname"></a>

```json
"string"
```

<h2 id="tocS_DatabaseTableName">DatabaseTableName</h2>
<!-- backwards compatibility -->
<a id="schemadatabasetablename"></a>
<a id="schema_DatabaseTableName"></a>
<a id="tocSdatabasetablename"></a>
<a id="tocsdatabasetablename"></a>

```json
"string"
```

<h2 id="tocS_QueryString">QueryString</h2>
<!-- backwards compatibility -->
<a id="schemaquerystring"></a>
<a id="schema_QueryString"></a>
<a id="tocSquerystring"></a>
<a id="tocsquerystring"></a>

```json
"string"
```

<h2 id="tocS_DatabaseOutputMode">DatabaseOutputMode</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseoutputmode"></a>
<a id="schema_DatabaseOutputMode"></a>
<a id="tocSdatabaseoutputmode"></a>
<a id="tocsdatabaseoutputmode"></a>

```json
"NEW_TABLE"
```

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_LastModifiedBy">LastModifiedBy</h2>
<!-- backwards compatibility -->
<a id="schemalastmodifiedby"></a>
<a id="schema_LastModifiedBy"></a>
<a id="tocSlastmodifiedby"></a>
<a id="tocslastmodifiedby"></a>

```json
"string"
```

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
"S3"
```

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "AccountId": {},
  "CreatedBy": {},
  "CreateDate": {},
  "Name": {},
  "Format": {},
  "FormatOptions": {
    "Json": {
      "MultiLine": {}
    },
    "Excel": {
      "SheetNames": {},
      "SheetIndexes": {},
      "HeaderRow": {}
    },
    "Csv": {
      "Delimiter": {},
      "HeaderRow": {}
    }
  },
  "Input": {
    "S3InputDefinition": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    },
    "DataCatalogInputDefinition": {
      "CatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      }
    },
    "DatabaseInputDefinition": {
      "GlueConnectionName": {},
      "DatabaseTableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "QueryString": {}
    },
    "Metadata": {
      "SourceArn": {}
    }
  },
  "LastModifiedDate": {},
  "LastModifiedBy": {},
  "Source": {},
  "PathOptions": {
    "LastModifiedDateCondition": {
      "Expression": {},
      "ValuesMap": {
        "property1": "string",
        "property2": "string"
      }
    },
    "FilesLimit": {
      "MaxFiles": {},
      "OrderedBy": {},
      "Order": {}
    },
    "Parameters": {
      "property1": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "property2": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ResourceArn": {}
}
```

Represents a dataset that can be processed by DataBrew.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|CreatedBy|object|false|none|none|
|CreateDate|object|false|none|none|
|Name|object|true|none|none|
|Format|object|false|none|none|
|FormatOptions|object|false|none|none|
|Input|object|true|none|none|
|LastModifiedDate|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|Source|object|false|none|none|
|PathOptions|object|false|none|none|
|Tags|object|false|none|none|
|ResourceArn|object|false|none|none|

<h2 id="tocS_DatasetList">DatasetList</h2>
<!-- backwards compatibility -->
<a id="schemadatasetlist"></a>
<a id="schema_DatasetList"></a>
<a id="tocSdatasetlist"></a>
<a id="tocsdatasetlist"></a>

```json
[
  {
    "AccountId": {},
    "CreatedBy": {},
    "CreateDate": {},
    "Name": {},
    "Format": {},
    "FormatOptions": {
      "Json": {
        "MultiLine": {}
      },
      "Excel": {
        "SheetNames": {},
        "SheetIndexes": {},
        "HeaderRow": {}
      },
      "Csv": {
        "Delimiter": {},
        "HeaderRow": {}
      }
    },
    "Input": {
      "S3InputDefinition": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "DataCatalogInputDefinition": {
        "CatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "TempDirectory": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        }
      },
      "DatabaseInputDefinition": {
        "GlueConnectionName": {},
        "DatabaseTableName": {},
        "TempDirectory": {
          "Bucket": {},
          "Key": {},
          "BucketOwner": {}
        },
        "QueryString": {}
      },
      "Metadata": {
        "SourceArn": {}
      }
    },
    "LastModifiedDate": {},
    "LastModifiedBy": {},
    "Source": {},
    "PathOptions": {
      "LastModifiedDateCondition": {
        "Expression": {},
        "ValuesMap": {
          "property1": "string",
          "property2": "string"
        }
      },
      "FilesLimit": {
        "MaxFiles": {},
        "OrderedBy": {},
        "Order": {}
      },
      "Parameters": {
        "property1": {
          "Name": {},
          "Type": {},
          "DatetimeOptions": {
            "Format": {},
            "TimezoneOffset": {},
            "LocaleCode": {}
          },
          "CreateColumn": {},
          "Filter": {
            "Expression": {},
            "ValuesMap": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "property2": {
          "Name": {},
          "Type": {},
          "DatetimeOptions": {
            "Format": {},
            "TimezoneOffset": {},
            "LocaleCode": {}
          },
          "CreateColumn": {},
          "Filter": {
            "Expression": {},
            "ValuesMap": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ResourceArn": {}
  }
]
```

<h2 id="tocS_PathParameterName">PathParameterName</h2>
<!-- backwards compatibility -->
<a id="schemapathparametername"></a>
<a id="schema_PathParameterName"></a>
<a id="tocSpathparametername"></a>
<a id="tocspathparametername"></a>

```json
"string"
```

<h2 id="tocS_ParameterType">ParameterType</h2>
<!-- backwards compatibility -->
<a id="schemaparametertype"></a>
<a id="schema_ParameterType"></a>
<a id="tocSparametertype"></a>
<a id="tocsparametertype"></a>

```json
"Datetime"
```

<h2 id="tocS_DatetimeOptions">DatetimeOptions</h2>
<!-- backwards compatibility -->
<a id="schemadatetimeoptions"></a>
<a id="schema_DatetimeOptions"></a>
<a id="tocSdatetimeoptions"></a>
<a id="tocsdatetimeoptions"></a>

```json
{
  "Format": {},
  "TimezoneOffset": {},
  "LocaleCode": {}
}
```

Represents additional options for correct interpretation of datetime parameters used in the Amazon S3 path of a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Format|object|true|none|none|
|TimezoneOffset|object|false|none|none|
|LocaleCode|object|false|none|none|

<h2 id="tocS_DatasetParameter">DatasetParameter</h2>
<!-- backwards compatibility -->
<a id="schemadatasetparameter"></a>
<a id="schema_DatasetParameter"></a>
<a id="tocSdatasetparameter"></a>
<a id="tocsdatasetparameter"></a>

```json
{
  "Name": {},
  "Type": {},
  "DatetimeOptions": {
    "Format": {},
    "TimezoneOffset": {},
    "LocaleCode": {}
  },
  "CreateColumn": {},
  "Filter": {
    "Expression": {},
    "ValuesMap": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Represents a dataset parameter that defines type and conditions for a parameter in the Amazon S3 path of the dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Type|object|true|none|none|
|DatetimeOptions|object|false|none|none|
|CreateColumn|object|false|none|none|
|Filter|object|false|none|none|

<h2 id="tocS_DatetimeFormat">DatetimeFormat</h2>
<!-- backwards compatibility -->
<a id="schemadatetimeformat"></a>
<a id="schema_DatetimeFormat"></a>
<a id="tocSdatetimeformat"></a>
<a id="tocsdatetimeformat"></a>

```json
"string"
```

<h2 id="tocS_TimezoneOffset">TimezoneOffset</h2>
<!-- backwards compatibility -->
<a id="schematimezoneoffset"></a>
<a id="schema_TimezoneOffset"></a>
<a id="tocStimezoneoffset"></a>
<a id="tocstimezoneoffset"></a>

```json
"string"
```

<h2 id="tocS_LocaleCode">LocaleCode</h2>
<!-- backwards compatibility -->
<a id="schemalocalecode"></a>
<a id="schema_LocaleCode"></a>
<a id="tocSlocalecode"></a>
<a id="tocslocalecode"></a>

```json
"string"
```

<h2 id="tocS_DeleteDatasetRequest">DeleteDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetrequest"></a>
<a id="schema_DeleteDatasetRequest"></a>
<a id="tocSdeletedatasetrequest"></a>
<a id="tocsdeletedatasetrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteJobRequest">DeleteJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletejobrequest"></a>
<a id="schema_DeleteJobRequest"></a>
<a id="tocSdeletejobrequest"></a>
<a id="tocsdeletejobrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteProjectRequest">DeleteProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectrequest"></a>
<a id="schema_DeleteProjectRequest"></a>
<a id="tocSdeleteprojectrequest"></a>
<a id="tocsdeleteprojectrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRecipeVersionRequest">DeleteRecipeVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterecipeversionrequest"></a>
<a id="schema_DeleteRecipeVersionRequest"></a>
<a id="tocSdeleterecipeversionrequest"></a>
<a id="tocsdeleterecipeversionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRulesetRequest">DeleteRulesetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulesetrequest"></a>
<a id="schema_DeleteRulesetRequest"></a>
<a id="tocSdeleterulesetrequest"></a>
<a id="tocsdeleterulesetrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteScheduleRequest">DeleteScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteschedulerequest"></a>
<a id="schema_DeleteScheduleRequest"></a>
<a id="tocSdeleteschedulerequest"></a>
<a id="tocsdeleteschedulerequest"></a>

```json
{}
```

<h2 id="tocS_DescribeDatasetRequest">DescribeDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetrequest"></a>
<a id="schema_DescribeDatasetRequest"></a>
<a id="tocSdescribedatasetrequest"></a>
<a id="tocsdescribedatasetrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeJobRequest">DescribeJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobrequest"></a>
<a id="schema_DescribeJobRequest"></a>
<a id="tocSdescribejobrequest"></a>
<a id="tocsdescribejobrequest"></a>

```json
{}
```

<h2 id="tocS_JobType">JobType</h2>
<!-- backwards compatibility -->
<a id="schemajobtype"></a>
<a id="schema_JobType"></a>
<a id="tocSjobtype"></a>
<a id="tocsjobtype"></a>

```json
"PROFILE"
```

<h2 id="tocS_JobRunId">JobRunId</h2>
<!-- backwards compatibility -->
<a id="schemajobrunid"></a>
<a id="schema_JobRunId"></a>
<a id="tocSjobrunid"></a>
<a id="tocsjobrunid"></a>

```json
"string"
```

<h2 id="tocS_DescribeJobRunRequest">DescribeJobRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobrunrequest"></a>
<a id="schema_DescribeJobRunRequest"></a>
<a id="tocSdescribejobrunrequest"></a>
<a id="tocsdescribejobrunrequest"></a>

```json
{}
```

<h2 id="tocS_JobRunErrorMessage">JobRunErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemajobrunerrormessage"></a>
<a id="schema_JobRunErrorMessage"></a>
<a id="tocSjobrunerrormessage"></a>
<a id="tocsjobrunerrormessage"></a>

```json
"string"
```

<h2 id="tocS_ExecutionTime">ExecutionTime</h2>
<!-- backwards compatibility -->
<a id="schemaexecutiontime"></a>
<a id="schema_ExecutionTime"></a>
<a id="tocSexecutiontime"></a>
<a id="tocsexecutiontime"></a>

```json
0
```

<h2 id="tocS_JobRunState">JobRunState</h2>
<!-- backwards compatibility -->
<a id="schemajobrunstate"></a>
<a id="schema_JobRunState"></a>
<a id="tocSjobrunstate"></a>
<a id="tocsjobrunstate"></a>

```json
"STARTING"
```

<h2 id="tocS_LogGroupName">LogGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaloggroupname"></a>
<a id="schema_LogGroupName"></a>
<a id="tocSloggroupname"></a>
<a id="tocsloggroupname"></a>

```json
"string"
```

<h2 id="tocS_StartedBy">StartedBy</h2>
<!-- backwards compatibility -->
<a id="schemastartedby"></a>
<a id="schema_StartedBy"></a>
<a id="tocSstartedby"></a>
<a id="tocsstartedby"></a>

```json
"string"
```

<h2 id="tocS_DescribeProjectRequest">DescribeProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprojectrequest"></a>
<a id="schema_DescribeProjectRequest"></a>
<a id="tocSdescribeprojectrequest"></a>
<a id="tocsdescribeprojectrequest"></a>

```json
{}
```

<h2 id="tocS_SessionStatus">SessionStatus</h2>
<!-- backwards compatibility -->
<a id="schemasessionstatus"></a>
<a id="schema_SessionStatus"></a>
<a id="tocSsessionstatus"></a>
<a id="tocssessionstatus"></a>

```json
"ASSIGNED"
```

<h2 id="tocS_OpenedBy">OpenedBy</h2>
<!-- backwards compatibility -->
<a id="schemaopenedby"></a>
<a id="schema_OpenedBy"></a>
<a id="tocSopenedby"></a>
<a id="tocsopenedby"></a>

```json
"string"
```

<h2 id="tocS_DescribeRecipeRequest">DescribeRecipeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribereciperequest"></a>
<a id="schema_DescribeRecipeRequest"></a>
<a id="tocSdescribereciperequest"></a>
<a id="tocsdescribereciperequest"></a>

```json
{}
```

<h2 id="tocS_PublishedBy">PublishedBy</h2>
<!-- backwards compatibility -->
<a id="schemapublishedby"></a>
<a id="schema_PublishedBy"></a>
<a id="tocSpublishedby"></a>
<a id="tocspublishedby"></a>

```json
"string"
```

<h2 id="tocS_DescribeRulesetRequest">DescribeRulesetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberulesetrequest"></a>
<a id="schema_DescribeRulesetRequest"></a>
<a id="tocSdescriberulesetrequest"></a>
<a id="tocsdescriberulesetrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeScheduleRequest">DescribeScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeschedulerequest"></a>
<a id="schema_DescribeScheduleRequest"></a>
<a id="tocSdescribeschedulerequest"></a>
<a id="tocsdescribeschedulerequest"></a>

```json
{}
```

<h2 id="tocS_Disabled">Disabled</h2>
<!-- backwards compatibility -->
<a id="schemadisabled"></a>
<a id="schema_Disabled"></a>
<a id="tocSdisabled"></a>
<a id="tocsdisabled"></a>

```json
true
```

<h2 id="tocS_EntityTypeList">EntityTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaentitytypelist"></a>
<a id="schema_EntityTypeList"></a>
<a id="tocSentitytypelist"></a>
<a id="tocsentitytypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EntityType">EntityType</h2>
<!-- backwards compatibility -->
<a id="schemaentitytype"></a>
<a id="schema_EntityType"></a>
<a id="tocSentitytype"></a>
<a id="tocsentitytype"></a>

```json
"string"
```

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"string"
```

<h2 id="tocS_SheetNameList">SheetNameList</h2>
<!-- backwards compatibility -->
<a id="schemasheetnamelist"></a>
<a id="schema_SheetNameList"></a>
<a id="tocSsheetnamelist"></a>
<a id="tocssheetnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SheetIndexList">SheetIndexList</h2>
<!-- backwards compatibility -->
<a id="schemasheetindexlist"></a>
<a id="schema_SheetIndexList"></a>
<a id="tocSsheetindexlist"></a>
<a id="tocssheetindexlist"></a>

```json
[
  0
]
```

<h2 id="tocS_Expression">Expression</h2>
<!-- backwards compatibility -->
<a id="schemaexpression"></a>
<a id="schema_Expression"></a>
<a id="tocSexpression"></a>
<a id="tocsexpression"></a>

```json
"string"
```

<h2 id="tocS_MaxFiles">MaxFiles</h2>
<!-- backwards compatibility -->
<a id="schemamaxfiles"></a>
<a id="schema_MaxFiles"></a>
<a id="tocSmaxfiles"></a>
<a id="tocsmaxfiles"></a>

```json
1
```

<h2 id="tocS_OrderedBy">OrderedBy</h2>
<!-- backwards compatibility -->
<a id="schemaorderedby"></a>
<a id="schema_OrderedBy"></a>
<a id="tocSorderedby"></a>
<a id="tocsorderedby"></a>

```json
"LAST_MODIFIED_DATE"
```

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
"DESCENDING"
```

<h2 id="tocS_ValuesMap">ValuesMap</h2>
<!-- backwards compatibility -->
<a id="schemavaluesmap"></a>
<a id="schema_ValuesMap"></a>
<a id="tocSvaluesmap"></a>
<a id="tocsvaluesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ConditionValue](#schemaconditionvalue)|false|none|none|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "AccountId": {},
  "CreatedBy": {},
  "CreateDate": {},
  "DatasetName": {},
  "EncryptionKeyArn": {},
  "EncryptionMode": {},
  "Name": {},
  "Type": {},
  "LastModifiedBy": {},
  "LastModifiedDate": {},
  "LogSubscription": {},
  "MaxCapacity": {},
  "MaxRetries": {},
  "Outputs": {},
  "DataCatalogOutputs": {},
  "DatabaseOutputs": {},
  "ProjectName": {},
  "RecipeReference": {
    "Name": {},
    "RecipeVersion": {}
  },
  "ResourceArn": {},
  "RoleArn": {},
  "Timeout": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "JobSample": {
    "Mode": {},
    "Size": {}
  },
  "ValidationConfigurations": {}
}
```

Represents all of the attributes of a DataBrew job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|CreatedBy|object|false|none|none|
|CreateDate|object|false|none|none|
|DatasetName|object|false|none|none|
|EncryptionKeyArn|object|false|none|none|
|EncryptionMode|object|false|none|none|
|Name|object|true|none|none|
|Type|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|LogSubscription|object|false|none|none|
|MaxCapacity|object|false|none|none|
|MaxRetries|object|false|none|none|
|Outputs|object|false|none|none|
|DataCatalogOutputs|object|false|none|none|
|DatabaseOutputs|object|false|none|none|
|ProjectName|object|false|none|none|
|RecipeReference|object|false|none|none|
|ResourceArn|object|false|none|none|
|RoleArn|object|false|none|none|
|Timeout|object|false|none|none|
|Tags|object|false|none|none|
|JobSample|object|false|none|none|
|ValidationConfigurations|object|false|none|none|

<h2 id="tocS_JobList">JobList</h2>
<!-- backwards compatibility -->
<a id="schemajoblist"></a>
<a id="schema_JobList"></a>
<a id="tocSjoblist"></a>
<a id="tocsjoblist"></a>

```json
[
  {
    "AccountId": {},
    "CreatedBy": {},
    "CreateDate": {},
    "DatasetName": {},
    "EncryptionKeyArn": {},
    "EncryptionMode": {},
    "Name": {},
    "Type": {},
    "LastModifiedBy": {},
    "LastModifiedDate": {},
    "LogSubscription": {},
    "MaxCapacity": {},
    "MaxRetries": {},
    "Outputs": {},
    "DataCatalogOutputs": {},
    "DatabaseOutputs": {},
    "ProjectName": {},
    "RecipeReference": {
      "Name": {},
      "RecipeVersion": {}
    },
    "ResourceArn": {},
    "RoleArn": {},
    "Timeout": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "JobSample": {
      "Mode": {},
      "Size": {}
    },
    "ValidationConfigurations": {}
  }
]
```

<h2 id="tocS_JobRun">JobRun</h2>
<!-- backwards compatibility -->
<a id="schemajobrun"></a>
<a id="schema_JobRun"></a>
<a id="tocSjobrun"></a>
<a id="tocsjobrun"></a>

```json
{
  "Attempt": {},
  "CompletedOn": {},
  "DatasetName": {},
  "ErrorMessage": {},
  "ExecutionTime": {},
  "JobName": {},
  "RunId": {},
  "State": {},
  "LogSubscription": {},
  "LogGroupName": {},
  "Outputs": {},
  "DataCatalogOutputs": {},
  "DatabaseOutputs": {},
  "RecipeReference": {
    "Name": {},
    "RecipeVersion": {}
  },
  "StartedBy": {},
  "StartedOn": {},
  "JobSample": {
    "Mode": {},
    "Size": {}
  },
  "ValidationConfigurations": {}
}
```

Represents one run of a DataBrew job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attempt|object|false|none|none|
|CompletedOn|object|false|none|none|
|DatasetName|object|false|none|none|
|ErrorMessage|object|false|none|none|
|ExecutionTime|object|false|none|none|
|JobName|object|false|none|none|
|RunId|object|false|none|none|
|State|object|false|none|none|
|LogSubscription|object|false|none|none|
|LogGroupName|object|false|none|none|
|Outputs|object|false|none|none|
|DataCatalogOutputs|object|false|none|none|
|DatabaseOutputs|object|false|none|none|
|RecipeReference|object|false|none|none|
|StartedBy|object|false|none|none|
|StartedOn|object|false|none|none|
|JobSample|object|false|none|none|
|ValidationConfigurations|object|false|none|none|

<h2 id="tocS_JobRunList">JobRunList</h2>
<!-- backwards compatibility -->
<a id="schemajobrunlist"></a>
<a id="schema_JobRunList"></a>
<a id="tocSjobrunlist"></a>
<a id="tocsjobrunlist"></a>

```json
[
  {
    "Attempt": {},
    "CompletedOn": {},
    "DatasetName": {},
    "ErrorMessage": {},
    "ExecutionTime": {},
    "JobName": {},
    "RunId": {},
    "State": {},
    "LogSubscription": {},
    "LogGroupName": {},
    "Outputs": {},
    "DataCatalogOutputs": {},
    "DatabaseOutputs": {},
    "RecipeReference": {
      "Name": {},
      "RecipeVersion": {}
    },
    "StartedBy": {},
    "StartedOn": {},
    "JobSample": {
      "Mode": {},
      "Size": {}
    },
    "ValidationConfigurations": {}
  }
]
```

<h2 id="tocS_MultiLine">MultiLine</h2>
<!-- backwards compatibility -->
<a id="schemamultiline"></a>
<a id="schema_MultiLine"></a>
<a id="tocSmultiline"></a>
<a id="tocsmultiline"></a>

```json
true
```

<h2 id="tocS_MaxResults100">MaxResults100</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults100"></a>
<a id="schema_MaxResults100"></a>
<a id="tocSmaxresults100"></a>
<a id="tocsmaxresults100"></a>

```json
1
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

<h2 id="tocS_ListDatasetsRequest">ListDatasetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsrequest"></a>
<a id="schema_ListDatasetsRequest"></a>
<a id="tocSlistdatasetsrequest"></a>
<a id="tocslistdatasetsrequest"></a>

```json
{}
```

<h2 id="tocS_ListJobRunsRequest">ListJobRunsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjobrunsrequest"></a>
<a id="schema_ListJobRunsRequest"></a>
<a id="tocSlistjobrunsrequest"></a>
<a id="tocslistjobrunsrequest"></a>

```json
{}
```

<h2 id="tocS_ListJobsRequest">ListJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsrequest"></a>
<a id="schema_ListJobsRequest"></a>
<a id="tocSlistjobsrequest"></a>
<a id="tocslistjobsrequest"></a>

```json
{}
```

<h2 id="tocS_ListProjectsRequest">ListProjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsrequest"></a>
<a id="schema_ListProjectsRequest"></a>
<a id="tocSlistprojectsrequest"></a>
<a id="tocslistprojectsrequest"></a>

```json
{}
```

<h2 id="tocS_ProjectList">ProjectList</h2>
<!-- backwards compatibility -->
<a id="schemaprojectlist"></a>
<a id="schema_ProjectList"></a>
<a id="tocSprojectlist"></a>
<a id="tocsprojectlist"></a>

```json
[
  {
    "AccountId": {},
    "CreateDate": {},
    "CreatedBy": {},
    "DatasetName": {},
    "LastModifiedDate": {},
    "LastModifiedBy": {},
    "Name": {},
    "RecipeName": {},
    "ResourceArn": {},
    "Sample": {
      "Size": {},
      "Type": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "RoleArn": {},
    "OpenedBy": {},
    "OpenDate": {}
  }
]
```

<h2 id="tocS_ListRecipeVersionsRequest">ListRecipeVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrecipeversionsrequest"></a>
<a id="schema_ListRecipeVersionsRequest"></a>
<a id="tocSlistrecipeversionsrequest"></a>
<a id="tocslistrecipeversionsrequest"></a>

```json
{}
```

<h2 id="tocS_RecipeList">RecipeList</h2>
<!-- backwards compatibility -->
<a id="schemarecipelist"></a>
<a id="schema_RecipeList"></a>
<a id="tocSrecipelist"></a>
<a id="tocsrecipelist"></a>

```json
[
  {
    "CreatedBy": {},
    "CreateDate": {},
    "LastModifiedBy": {},
    "LastModifiedDate": {},
    "ProjectName": {},
    "PublishedBy": {},
    "PublishedDate": {},
    "Description": {},
    "Name": {},
    "ResourceArn": {},
    "Steps": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "RecipeVersion": {}
  }
]
```

<h2 id="tocS_ListRecipesRequest">ListRecipesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrecipesrequest"></a>
<a id="schema_ListRecipesRequest"></a>
<a id="tocSlistrecipesrequest"></a>
<a id="tocslistrecipesrequest"></a>

```json
{}
```

<h2 id="tocS_ListRulesetsRequest">ListRulesetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrulesetsrequest"></a>
<a id="schema_ListRulesetsRequest"></a>
<a id="tocSlistrulesetsrequest"></a>
<a id="tocslistrulesetsrequest"></a>

```json
{}
```

<h2 id="tocS_RulesetItemList">RulesetItemList</h2>
<!-- backwards compatibility -->
<a id="schemarulesetitemlist"></a>
<a id="schema_RulesetItemList"></a>
<a id="tocSrulesetitemlist"></a>
<a id="tocsrulesetitemlist"></a>

```json
[
  {
    "AccountId": {},
    "CreatedBy": {},
    "CreateDate": {},
    "Description": {},
    "LastModifiedBy": {},
    "LastModifiedDate": {},
    "Name": {},
    "ResourceArn": {},
    "RuleCount": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "TargetArn": {}
  }
]
```

<h2 id="tocS_ListSchedulesRequest">ListSchedulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistschedulesrequest"></a>
<a id="schema_ListSchedulesRequest"></a>
<a id="tocSlistschedulesrequest"></a>
<a id="tocslistschedulesrequest"></a>

```json
{}
```

<h2 id="tocS_ScheduleList">ScheduleList</h2>
<!-- backwards compatibility -->
<a id="schemaschedulelist"></a>
<a id="schema_ScheduleList"></a>
<a id="tocSschedulelist"></a>
<a id="tocsschedulelist"></a>

```json
[
  {
    "AccountId": {},
    "CreatedBy": {},
    "CreateDate": {},
    "JobNames": {},
    "LastModifiedBy": {},
    "LastModifiedDate": {},
    "ResourceArn": {},
    "CronExpression": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Name": {}
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

<h2 id="tocS_MaxOutputFiles">MaxOutputFiles</h2>
<!-- backwards compatibility -->
<a id="schemamaxoutputfiles"></a>
<a id="schema_MaxOutputFiles"></a>
<a id="tocSmaxoutputfiles"></a>
<a id="tocsmaxoutputfiles"></a>

```json
1
```

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
"string"
```

<h2 id="tocS_OutputFormat">OutputFormat</h2>
<!-- backwards compatibility -->
<a id="schemaoutputformat"></a>
<a id="schema_OutputFormat"></a>
<a id="tocSoutputformat"></a>
<a id="tocsoutputformat"></a>

```json
"CSV"
```

<h2 id="tocS_OutputFormatOptions">OutputFormatOptions</h2>
<!-- backwards compatibility -->
<a id="schemaoutputformatoptions"></a>
<a id="schema_OutputFormatOptions"></a>
<a id="tocSoutputformatoptions"></a>
<a id="tocsoutputformatoptions"></a>

```json
{
  "Csv": {
    "Delimiter": {}
  }
}
```

Represents a set of options that define the structure of comma-separated (CSV) job output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Csv|object|false|none|none|

<h2 id="tocS_ParameterValue">ParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaparametervalue"></a>
<a id="schema_ParameterValue"></a>
<a id="tocSparametervalue"></a>
<a id="tocsparametervalue"></a>

```json
"string"
```

<h2 id="tocS_ParameterMap">ParameterMap</h2>
<!-- backwards compatibility -->
<a id="schemaparametermap"></a>
<a id="schema_ParameterMap"></a>
<a id="tocSparametermap"></a>
<a id="tocsparametermap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ParameterValue](#schemaparametervalue)|false|none|none|

<h2 id="tocS_ParameterName">ParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaparametername"></a>
<a id="schema_ParameterName"></a>
<a id="tocSparametername"></a>
<a id="tocsparametername"></a>

```json
"string"
```

<h2 id="tocS_Preview">Preview</h2>
<!-- backwards compatibility -->
<a id="schemapreview"></a>
<a id="schema_Preview"></a>
<a id="tocSpreview"></a>
<a id="tocspreview"></a>

```json
true
```

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "AccountId": {},
  "CreateDate": {},
  "CreatedBy": {},
  "DatasetName": {},
  "LastModifiedDate": {},
  "LastModifiedBy": {},
  "Name": {},
  "RecipeName": {},
  "ResourceArn": {},
  "Sample": {
    "Size": {},
    "Type": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "RoleArn": {},
  "OpenedBy": {},
  "OpenDate": {}
}
```

Represents all of the attributes of a DataBrew project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|CreateDate|object|false|none|none|
|CreatedBy|object|false|none|none|
|DatasetName|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|Name|object|true|none|none|
|RecipeName|object|true|none|none|
|ResourceArn|object|false|none|none|
|Sample|object|false|none|none|
|Tags|object|false|none|none|
|RoleArn|object|false|none|none|
|OpenedBy|object|false|none|none|
|OpenDate|object|false|none|none|

<h2 id="tocS_PublishRecipeRequest">PublishRecipeRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublishreciperequest"></a>
<a id="schema_PublishRecipeRequest"></a>
<a id="tocSpublishreciperequest"></a>
<a id="tocspublishreciperequest"></a>

```json
{
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|

<h2 id="tocS_Recipe">Recipe</h2>
<!-- backwards compatibility -->
<a id="schemarecipe"></a>
<a id="schema_Recipe"></a>
<a id="tocSrecipe"></a>
<a id="tocsrecipe"></a>

```json
{
  "CreatedBy": {},
  "CreateDate": {},
  "LastModifiedBy": {},
  "LastModifiedDate": {},
  "ProjectName": {},
  "PublishedBy": {},
  "PublishedDate": {},
  "Description": {},
  "Name": {},
  "ResourceArn": {},
  "Steps": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "RecipeVersion": {}
}
```

Represents one or more actions to be performed on a DataBrew dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedBy|object|false|none|none|
|CreateDate|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|ProjectName|object|false|none|none|
|PublishedBy|object|false|none|none|
|PublishedDate|object|false|none|none|
|Description|object|false|none|none|
|Name|object|true|none|none|
|ResourceArn|object|false|none|none|
|Steps|object|false|none|none|
|Tags|object|false|none|none|
|RecipeVersion|object|false|none|none|

<h2 id="tocS_RecipeVersionErrorDetail">RecipeVersionErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemarecipeversionerrordetail"></a>
<a id="schema_RecipeVersionErrorDetail"></a>
<a id="tocSrecipeversionerrordetail"></a>
<a id="tocsrecipeversionerrordetail"></a>

```json
{
  "ErrorCode": {},
  "ErrorMessage": {},
  "RecipeVersion": {}
}
```

Represents any errors encountered when attempting to delete multiple recipe versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|
|RecipeVersion|object|false|none|none|

<h2 id="tocS_RecipeErrorMessage">RecipeErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemarecipeerrormessage"></a>
<a id="schema_RecipeErrorMessage"></a>
<a id="tocSrecipeerrormessage"></a>
<a id="tocsrecipeerrormessage"></a>

```json
"string"
```

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
"string"
```

<h2 id="tocS_RuleName">RuleName</h2>
<!-- backwards compatibility -->
<a id="schemarulename"></a>
<a id="schema_RuleName"></a>
<a id="tocSrulename"></a>
<a id="tocsrulename"></a>

```json
"string"
```

<h2 id="tocS_Threshold">Threshold</h2>
<!-- backwards compatibility -->
<a id="schemathreshold"></a>
<a id="schema_Threshold"></a>
<a id="tocSthreshold"></a>
<a id="tocsthreshold"></a>

```json
{
  "Value": {},
  "Type": {},
  "Unit": {}
}
```

The threshold used with a non-aggregate check expression. The non-aggregate check expression will be applied to each row in a specific column. Then the threshold will be used to determine whether the validation succeeds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|true|none|none|
|Type|object|false|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_RuleCount">RuleCount</h2>
<!-- backwards compatibility -->
<a id="schemarulecount"></a>
<a id="schema_RuleCount"></a>
<a id="tocSrulecount"></a>
<a id="tocsrulecount"></a>

```json
0
```

<h2 id="tocS_RulesetItem">RulesetItem</h2>
<!-- backwards compatibility -->
<a id="schemarulesetitem"></a>
<a id="schema_RulesetItem"></a>
<a id="tocSrulesetitem"></a>
<a id="tocsrulesetitem"></a>

```json
{
  "AccountId": {},
  "CreatedBy": {},
  "CreateDate": {},
  "Description": {},
  "LastModifiedBy": {},
  "LastModifiedDate": {},
  "Name": {},
  "ResourceArn": {},
  "RuleCount": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TargetArn": {}
}
```

Contains metadata about the ruleset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|CreatedBy|object|false|none|none|
|CreateDate|object|false|none|none|
|Description|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|Name|object|true|none|none|
|ResourceArn|object|false|none|none|
|RuleCount|object|false|none|none|
|Tags|object|false|none|none|
|TargetArn|object|true|none|none|

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "AccountId": {},
  "CreatedBy": {},
  "CreateDate": {},
  "JobNames": {},
  "LastModifiedBy": {},
  "LastModifiedDate": {},
  "ResourceArn": {},
  "CronExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Name": {}
}
```

Represents one or more dates and times when a job is to run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|CreatedBy|object|false|none|none|
|CreateDate|object|false|none|none|
|JobNames|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|ResourceArn|object|false|none|none|
|CronExpression|object|false|none|none|
|Tags|object|false|none|none|
|Name|object|true|none|none|

<h2 id="tocS_StepIndex">StepIndex</h2>
<!-- backwards compatibility -->
<a id="schemastepindex"></a>
<a id="schema_StepIndex"></a>
<a id="tocSstepindex"></a>
<a id="tocsstepindex"></a>

```json
0
```

<h2 id="tocS_ViewFrame">ViewFrame</h2>
<!-- backwards compatibility -->
<a id="schemaviewframe"></a>
<a id="schema_ViewFrame"></a>
<a id="tocSviewframe"></a>
<a id="tocsviewframe"></a>

```json
{
  "StartColumnIndex": {},
  "ColumnRange": {},
  "HiddenColumns": {},
  "StartRowIndex": {},
  "RowRange": {},
  "Analytics": {}
}
```

Represents the data being transformed during an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartColumnIndex|object|true|none|none|
|ColumnRange|object|false|none|none|
|HiddenColumns|object|false|none|none|
|StartRowIndex|object|false|none|none|
|RowRange|object|false|none|none|
|Analytics|object|false|none|none|

<h2 id="tocS_SendProjectSessionActionRequest">SendProjectSessionActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendprojectsessionactionrequest"></a>
<a id="schema_SendProjectSessionActionRequest"></a>
<a id="tocSsendprojectsessionactionrequest"></a>
<a id="tocssendprojectsessionactionrequest"></a>

```json
{
  "Preview": {},
  "RecipeStep": {
    "Action": {
      "Operation": {},
      "Parameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "ConditionExpressions": {}
  },
  "StepIndex": {},
  "ClientSessionId": {},
  "ViewFrame": {
    "StartColumnIndex": {},
    "ColumnRange": {},
    "HiddenColumns": {},
    "StartRowIndex": {},
    "RowRange": {},
    "Analytics": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Preview|object|false|none|none|
|RecipeStep|[RecipeStep](#schemarecipestep)|false|none|Represents a single step from a DataBrew recipe to be performed.|
|StepIndex|object|false|none|none|
|ClientSessionId|object|false|none|none|
|ViewFrame|[ViewFrame](#schemaviewframe)|false|none|Represents the data being transformed during an action.|

<h2 id="tocS_SheetIndex">SheetIndex</h2>
<!-- backwards compatibility -->
<a id="schemasheetindex"></a>
<a id="schema_SheetIndex"></a>
<a id="tocSsheetindex"></a>
<a id="tocssheetindex"></a>

```json
0
```

<h2 id="tocS_SheetName">SheetName</h2>
<!-- backwards compatibility -->
<a id="schemasheetname"></a>
<a id="schema_SheetName"></a>
<a id="tocSsheetname"></a>
<a id="tocssheetname"></a>

```json
"string"
```

<h2 id="tocS_StartJobRunRequest">StartJobRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartjobrunrequest"></a>
<a id="schema_StartJobRunRequest"></a>
<a id="tocSstartjobrunrequest"></a>
<a id="tocsstartjobrunrequest"></a>

```json
{}
```

<h2 id="tocS_StartProjectSessionRequest">StartProjectSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartprojectsessionrequest"></a>
<a id="schema_StartProjectSessionRequest"></a>
<a id="tocSstartprojectsessionrequest"></a>
<a id="tocsstartprojectsessionrequest"></a>

```json
{
  "AssumeControl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssumeControl|object|false|none|none|

<h2 id="tocS_Statistic">Statistic</h2>
<!-- backwards compatibility -->
<a id="schemastatistic"></a>
<a id="schema_Statistic"></a>
<a id="tocSstatistic"></a>
<a id="tocsstatistic"></a>

```json
"string"
```

<h2 id="tocS_StatisticOverride">StatisticOverride</h2>
<!-- backwards compatibility -->
<a id="schemastatisticoverride"></a>
<a id="schema_StatisticOverride"></a>
<a id="tocSstatisticoverride"></a>
<a id="tocsstatisticoverride"></a>

```json
{
  "Statistic": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

Override of a particular evaluation for a profile job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statistic|object|true|none|none|
|Parameters|object|true|none|none|

<h2 id="tocS_StatisticOverrideList">StatisticOverrideList</h2>
<!-- backwards compatibility -->
<a id="schemastatisticoverridelist"></a>
<a id="schema_StatisticOverrideList"></a>
<a id="tocSstatisticoverridelist"></a>
<a id="tocsstatisticoverridelist"></a>

```json
[
  {
    "Statistic": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_StopJobRunRequest">StopJobRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopjobrunrequest"></a>
<a id="schema_StopJobRunRequest"></a>
<a id="tocSstopjobrunrequest"></a>
<a id="tocsstopjobrunrequest"></a>

```json
{}
```

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_ThresholdValue">ThresholdValue</h2>
<!-- backwards compatibility -->
<a id="schemathresholdvalue"></a>
<a id="schema_ThresholdValue"></a>
<a id="tocSthresholdvalue"></a>
<a id="tocsthresholdvalue"></a>

```json
0
```

<h2 id="tocS_ThresholdType">ThresholdType</h2>
<!-- backwards compatibility -->
<a id="schemathresholdtype"></a>
<a id="schema_ThresholdType"></a>
<a id="tocSthresholdtype"></a>
<a id="tocsthresholdtype"></a>

```json
"GREATER_THAN_OR_EQUAL"
```

<h2 id="tocS_ThresholdUnit">ThresholdUnit</h2>
<!-- backwards compatibility -->
<a id="schemathresholdunit"></a>
<a id="schema_ThresholdUnit"></a>
<a id="tocSthresholdunit"></a>
<a id="tocsthresholdunit"></a>

```json
"COUNT"
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateDatasetRequest">UpdateDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetrequest"></a>
<a id="schema_UpdateDatasetRequest"></a>
<a id="tocSupdatedatasetrequest"></a>
<a id="tocsupdatedatasetrequest"></a>

```json
{
  "Format": {},
  "FormatOptions": {
    "Json": {
      "MultiLine": {}
    },
    "Excel": {
      "SheetNames": {},
      "SheetIndexes": {},
      "HeaderRow": {}
    },
    "Csv": {
      "Delimiter": {},
      "HeaderRow": {}
    }
  },
  "Input": {
    "S3InputDefinition": {
      "Bucket": {},
      "Key": {},
      "BucketOwner": {}
    },
    "DataCatalogInputDefinition": {
      "CatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      }
    },
    "DatabaseInputDefinition": {
      "GlueConnectionName": {},
      "DatabaseTableName": {},
      "TempDirectory": {
        "Bucket": {},
        "Key": {},
        "BucketOwner": {}
      },
      "QueryString": {}
    },
    "Metadata": {
      "SourceArn": {}
    }
  },
  "PathOptions": {
    "LastModifiedDateCondition": {
      "Expression": {},
      "ValuesMap": {
        "property1": "string",
        "property2": "string"
      }
    },
    "FilesLimit": {
      "MaxFiles": {},
      "OrderedBy": {},
      "Order": {}
    },
    "Parameters": {
      "property1": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "property2": {
        "Name": {},
        "Type": {},
        "DatetimeOptions": {
          "Format": {},
          "TimezoneOffset": {},
          "LocaleCode": {}
        },
        "CreateColumn": {},
        "Filter": {
          "Expression": {},
          "ValuesMap": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Format|object|false|none|none|
|FormatOptions|[FormatOptions](#schemaformatoptions)|false|none|Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.|
|Input|[Input](#schemainput)|true|none|Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.|
|PathOptions|object|false|none|none|

<h2 id="tocS_UpdateProfileJobRequest">UpdateProfileJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprofilejobrequest"></a>
<a id="schema_UpdateProfileJobRequest"></a>
<a id="tocSupdateprofilejobrequest"></a>
<a id="tocsupdateprofilejobrequest"></a>

```json
{
  "Configuration": {
    "DatasetStatisticsConfiguration": {
      "IncludedStatistics": {},
      "Overrides": {}
    },
    "ProfileColumns": {},
    "ColumnStatisticsConfigurations": {},
    "EntityDetectorConfiguration": {
      "EntityTypes": {},
      "AllowedStatistics": {}
    }
  },
  "EncryptionKeyArn": {},
  "EncryptionMode": {},
  "LogSubscription": {},
  "MaxCapacity": {},
  "MaxRetries": {},
  "OutputLocation": {
    "Bucket": {},
    "Key": {},
    "BucketOwner": {}
  },
  "ValidationConfigurations": {},
  "RoleArn": {},
  "Timeout": {},
  "JobSample": {
    "Mode": {},
    "Size": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configuration|object|false|none|none|
|EncryptionKeyArn|object|false|none|none|
|EncryptionMode|object|false|none|none|
|LogSubscription|object|false|none|none|
|MaxCapacity|object|false|none|none|
|MaxRetries|object|false|none|none|
|OutputLocation|[S3Location](#schemas3location)|true|none|Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.|
|ValidationConfigurations|object|false|none|none|
|RoleArn|object|true|none|none|
|Timeout|object|false|none|none|
|JobSample|object|false|none|none|

<h2 id="tocS_UpdateProjectRequest">UpdateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectrequest"></a>
<a id="schema_UpdateProjectRequest"></a>
<a id="tocSupdateprojectrequest"></a>
<a id="tocsupdateprojectrequest"></a>

```json
{
  "Sample": {
    "Size": {},
    "Type": {}
  },
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sample|[Sample](#schemasample)|false|none|Represents the sample size and sampling type for DataBrew to use for interactive data analysis.|
|RoleArn|object|true|none|none|

<h2 id="tocS_UpdateRecipeJobRequest">UpdateRecipeJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterecipejobrequest"></a>
<a id="schema_UpdateRecipeJobRequest"></a>
<a id="tocSupdaterecipejobrequest"></a>
<a id="tocsupdaterecipejobrequest"></a>

```json
{
  "EncryptionKeyArn": {},
  "EncryptionMode": {},
  "LogSubscription": {},
  "MaxCapacity": {},
  "MaxRetries": {},
  "Outputs": {},
  "DataCatalogOutputs": {},
  "DatabaseOutputs": {},
  "RoleArn": {},
  "Timeout": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionKeyArn|object|false|none|none|
|EncryptionMode|object|false|none|none|
|LogSubscription|object|false|none|none|
|MaxCapacity|object|false|none|none|
|MaxRetries|object|false|none|none|
|Outputs|object|false|none|none|
|DataCatalogOutputs|object|false|none|none|
|DatabaseOutputs|object|false|none|none|
|RoleArn|object|true|none|none|
|Timeout|object|false|none|none|

<h2 id="tocS_UpdateRecipeRequest">UpdateRecipeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereciperequest"></a>
<a id="schema_UpdateRecipeRequest"></a>
<a id="tocSupdatereciperequest"></a>
<a id="tocsupdatereciperequest"></a>

```json
{
  "Description": {},
  "Steps": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Steps|object|false|none|none|

<h2 id="tocS_UpdateRulesetRequest">UpdateRulesetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulesetrequest"></a>
<a id="schema_UpdateRulesetRequest"></a>
<a id="tocSupdaterulesetrequest"></a>
<a id="tocsupdaterulesetrequest"></a>

```json
{
  "Description": {},
  "Rules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Rules|object|true|none|none|

<h2 id="tocS_UpdateScheduleRequest">UpdateScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateschedulerequest"></a>
<a id="schema_UpdateScheduleRequest"></a>
<a id="tocSupdateschedulerequest"></a>
<a id="tocsupdateschedulerequest"></a>

```json
{
  "JobNames": {},
  "CronExpression": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobNames|object|false|none|none|
|CronExpression|object|true|none|none|

<h2 id="tocS_ValidationMode">ValidationMode</h2>
<!-- backwards compatibility -->
<a id="schemavalidationmode"></a>
<a id="schema_ValidationMode"></a>
<a id="tocSvalidationmode"></a>
<a id="tocsvalidationmode"></a>

```json
"CHECK_ALL"
```

<h2 id="tocS_ValueReference">ValueReference</h2>
<!-- backwards compatibility -->
<a id="schemavaluereference"></a>
<a id="schema_ValueReference"></a>
<a id="tocSvaluereference"></a>
<a id="tocsvaluereference"></a>

```json
"string"
```
