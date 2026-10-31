<h1 id="amazon-personalize">Amazon Personalize v2018-05-22</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Personalize is a machine learning service that makes it easy to add individualized recommendations to customers.

Base URLs:

* <a href="http://personalize.us-east-1.amazonaws.com">http://personalize.us-east-1.amazonaws.com</a> - The Amazon Personalize multi-region endpoint

* <a href="https://personalize.us-east-1.amazonaws.com">https://personalize.us-east-1.amazonaws.com</a> - The Amazon Personalize multi-region endpoint

* <a href="http://personalize.cn-north-1.amazonaws.com.cn">http://personalize.cn-north-1.amazonaws.com.cn</a> - The Amazon Personalize endpoint for China (Beijing) and China (Ningxia)

* <a href="https://personalize.cn-north-1.amazonaws.com.cn">https://personalize.cn-north-1.amazonaws.com.cn</a> - The Amazon Personalize endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/personalize/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-personalize-default">Default</h1>

## CreateBatchInferenceJob

<a id="opIdCreateBatchInferenceJob"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateBatchInferenceJob' \
  -d '{
    "jobName": {},
    "solutionVersionArn": {},
    "filterArn": {},
    "numResults": {},
    "jobInput": {
      "s3DataSource": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "jobOutput": {
      "s3DataDestination": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "roleArn": {},
    "batchInferenceJobConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      }
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob`

Creates a batch inference job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/creating-batch-inference-job.html">Creating a batch inference job</a>. 

> Body parameter

```json
{
  "jobName": {},
  "solutionVersionArn": {},
  "filterArn": {},
  "numResults": {},
  "jobInput": {
    "s3DataSource": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "jobOutput": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "roleArn": {},
  "batchInferenceJobConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    }
  },
  "tags": {}
}
```

<h3 id="createbatchinferencejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateBatchInferenceJobRequest](#schemacreatebatchinferencejobrequest)|true|none|
|» jobName|body|object|true|none|
|» solutionVersionArn|body|object|true|none|
|» filterArn|body|object|false|none|
|» numResults|body|object|false|none|
|» jobInput|body|object|true|none|
|» » s3DataSource|body|object|true|none|
|» » » path|body|object|true|none|
|» » » kmsKeyArn|body|object|false|none|
|» jobOutput|body|object|true|none|
|» » s3DataDestination|body|object|true|none|
|» » » path|body|object|true|none|
|» » » kmsKeyArn|body|object|false|none|
|» roleArn|body|object|true|none|
|» batchInferenceJobConfig|body|object|false|none|
|» » itemExplorationConfig|body|object|false|none|
|» » » **additionalProperties**|body|[ParameterValue](#schemaparametervalue)|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateBatchInferenceJob|

> Example responses

> 200 Response

```json
{
  "batchInferenceJobArn": {}
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

<h3 id="createbatchinferencejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBatchInferenceJobResponse](#schemacreatebatchinferencejobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBatchSegmentJob

<a id="opIdCreateBatchSegmentJob"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateBatchSegmentJob' \
  -d '{
    "jobName": {},
    "solutionVersionArn": {},
    "filterArn": {},
    "numResults": {},
    "jobInput": {
      "s3DataSource": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "jobOutput": {
      "s3DataDestination": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "roleArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob`

Creates a batch segment job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recommendations-batch.html">Getting batch recommendations and user segments</a>.

> Body parameter

```json
{
  "jobName": {},
  "solutionVersionArn": {},
  "filterArn": {},
  "numResults": {},
  "jobInput": {
    "s3DataSource": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "jobOutput": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "roleArn": {},
  "tags": {}
}
```

<h3 id="createbatchsegmentjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateBatchSegmentJobRequest](#schemacreatebatchsegmentjobrequest)|true|none|
|» jobName|body|object|true|none|
|» solutionVersionArn|body|object|true|none|
|» filterArn|body|object|false|none|
|» numResults|body|object|false|none|
|» jobInput|body|object|true|none|
|» » s3DataSource|body|[S3DataConfig](#schemas3dataconfig)|true|The configuration details of an Amazon S3 input or output bucket.|
|» jobOutput|body|object|true|none|
|» » s3DataDestination|body|[S3DataConfig](#schemas3dataconfig)|true|The configuration details of an Amazon S3 input or output bucket.|
|» roleArn|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateBatchSegmentJob|

> Example responses

> 200 Response

```json
{
  "batchSegmentJobArn": {}
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

<h3 id="createbatchsegmentjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBatchSegmentJobResponse](#schemacreatebatchsegmentjobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCampaign

<a id="opIdCreateCampaign"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateCampaign' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateCampaign' \
  -d '{
    "name": {},
    "solutionVersionArn": {},
    "minProvisionedTPS": {},
    "campaignConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      }
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateCampaign`

<p>Creates a campaign that deploys a solution version. When a client calls the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> and <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a> APIs, a campaign is specified in the request.</p> <p> <b>Minimum Provisioned TPS and Auto-Scaling</b> </p> <p>A transaction is a single <code>GetRecommendations</code> or <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput and unit of billing for Amazon Personalize. The minimum provisioned TPS (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by Amazon Personalize, and thus, the minimum billing charge. </p> <p> If your TPS increases beyond <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minProvisionedTPS</code>. There's a short time delay while the capacity is increased that might cause loss of transactions.</p> <p>The actual TPS used is calculated as the average requests/second within a 5-minute window. You pay for maximum of either the minimum provisioned TPS or the actual TPS. We recommend starting with a low <code>minProvisionedTPS</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code> as necessary.</p> <p> <b>Status</b> </p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the campaign status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a>.</p> <note> <p>Wait until the <code>status</code> of the campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateCampaign.html">UpdateCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteCampaign.html">DeleteCampaign</a> </p> </li> </ul>

> Body parameter

```json
{
  "name": {},
  "solutionVersionArn": {},
  "minProvisionedTPS": {},
  "campaignConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    }
  },
  "tags": {}
}
```

<h3 id="createcampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateCampaignRequest](#schemacreatecampaignrequest)|true|none|
|» name|body|object|true|none|
|» solutionVersionArn|body|object|true|none|
|» minProvisionedTPS|body|object|false|none|
|» campaignConfig|body|object|false|none|
|» » itemExplorationConfig|body|object|false|none|
|» » » **additionalProperties**|body|[ParameterValue](#schemaparametervalue)|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateCampaign|

> Example responses

> 200 Response

```json
{
  "campaignArn": {}
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

<h3 id="createcampaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCampaignResponse](#schemacreatecampaignresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataset

<a id="opIdCreateDataset"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateDataset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateDataset' \
  -d '{
    "name": {},
    "schemaArn": {},
    "datasetGroupArn": {},
    "datasetType": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateDataset`

<p>Creates an empty dataset and adds it to the specified dataset group. Use <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> to import your training data to a dataset.</p> <p>There are three types of datasets:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>Each dataset type has an associated schema with required field types. Only the <code>Interactions</code> dataset is required in order to train a model (also referred to as creating a solution).</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the dataset, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html">ListDatasets</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html">DeleteDataset</a> </p> </li> </ul>

> Body parameter

```json
{
  "name": {},
  "schemaArn": {},
  "datasetGroupArn": {},
  "datasetType": {},
  "tags": {}
}
```

<h3 id="createdataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateDatasetRequest](#schemacreatedatasetrequest)|true|none|
|» name|body|object|true|none|
|» schemaArn|body|object|true|none|
|» datasetGroupArn|body|object|true|none|
|» datasetType|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateDataset|

> Example responses

> 200 Response

```json
{
  "datasetArn": {}
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

<h3 id="createdataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDatasetResponse](#schemacreatedatasetresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDatasetExportJob

<a id="opIdCreateDatasetExportJob"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateDatasetExportJob' \
  -d '{
    "jobName": {},
    "datasetArn": {},
    "ingestionMode": {},
    "roleArn": {},
    "jobOutput": {
      "s3DataDestination": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob`

<p> Creates a job that exports data from your dataset to an Amazon S3 bucket. To allow Amazon Personalize to export the training data, you must specify an service-linked IAM role that gives Amazon Personalize <code>PutObject</code> permissions for your Amazon S3 bucket. For information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/export-data.html">Exporting a dataset</a> in the Amazon Personalize developer guide. </p> <p> <b>Status</b> </p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p> To get the status of the export job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a>, and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed. </p>

> Body parameter

```json
{
  "jobName": {},
  "datasetArn": {},
  "ingestionMode": {},
  "roleArn": {},
  "jobOutput": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "tags": {}
}
```

<h3 id="createdatasetexportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateDatasetExportJobRequest](#schemacreatedatasetexportjobrequest)|true|none|
|» jobName|body|object|true|none|
|» datasetArn|body|object|true|none|
|» ingestionMode|body|object|false|none|
|» roleArn|body|object|true|none|
|» jobOutput|body|object|true|none|
|» » s3DataDestination|body|[S3DataConfig](#schemas3dataconfig)|true|The configuration details of an Amazon S3 input or output bucket.|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateDatasetExportJob|

> Example responses

> 200 Response

```json
{
  "datasetExportJobArn": {}
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

<h3 id="createdatasetexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDatasetExportJobResponse](#schemacreatedatasetexportjobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDatasetGroup

<a id="opIdCreateDatasetGroup"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateDatasetGroup' \
  -d '{
    "name": {},
    "roleArn": {},
    "kmsKeyArn": {},
    "domain": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup`

<p>Creates an empty dataset group. A dataset group is a container for Amazon Personalize resources. A dataset group can contain at most three datasets, one for each type of dataset:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p> A dataset group can be a Domain dataset group, where you specify a domain and use pre-configured resources like recommenders, or a Custom dataset group, where you use custom resources, such as a solution with a solution version, that you deploy with a campaign. If you start with a Domain dataset group, you can still add custom resources such as solutions and solution versions trained with recipes for custom use cases and deployed with campaigns. </p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul> <p>To get the status of the dataset group, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the creation failed.</p> <note> <p>You must wait until the <code>status</code> of the dataset group is <code>ACTIVE</code> before adding a dataset to the group.</p> </note> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an Identity and Access Management (IAM) role that has permission to access the key.</p> <p class="title"> <b>APIs that require a dataset group ARN in the request</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> </ul> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html">DeleteDatasetGroup</a> </p> </li> </ul>

> Body parameter

```json
{
  "name": {},
  "roleArn": {},
  "kmsKeyArn": {},
  "domain": {},
  "tags": {}
}
```

<h3 id="createdatasetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateDatasetGroupRequest](#schemacreatedatasetgrouprequest)|true|none|
|» name|body|object|true|none|
|» roleArn|body|object|false|none|
|» kmsKeyArn|body|object|false|none|
|» domain|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateDatasetGroup|

> Example responses

> 200 Response

```json
{
  "datasetGroupArn": {},
  "domain": {}
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

<h3 id="createdatasetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDatasetGroupResponse](#schemacreatedatasetgroupresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDatasetImportJob

<a id="opIdCreateDatasetImportJob"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateDatasetImportJob' \
  -d '{
    "jobName": {},
    "datasetArn": {},
    "dataSource": {
      "dataLocation": {}
    },
    "roleArn": {},
    "tags": {},
    "importMode": {},
    "publishAttributionMetricsToS3": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob`

<p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an IAM service role that has permission to read from the data source, as Amazon Personalize makes a copy of your data and processes it internally. For information on granting access to your Amazon S3 bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving Amazon Personalize Access to Amazon S3 Resources</a>. </p> <important> <p>By default, a dataset import job replaces any existing data in the dataset that you imported in bulk. To add new records without replacing existing data, specify INCREMENTAL for the import mode in the CreateDatasetImportJob operation.</p> </important> <p> <b>Status</b> </p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p>To get the status of the import job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <note> <p>Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> </p> </li> </ul>

> Body parameter

```json
{
  "jobName": {},
  "datasetArn": {},
  "dataSource": {
    "dataLocation": {}
  },
  "roleArn": {},
  "tags": {},
  "importMode": {},
  "publishAttributionMetricsToS3": {}
}
```

<h3 id="createdatasetimportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateDatasetImportJobRequest](#schemacreatedatasetimportjobrequest)|true|none|
|» jobName|body|object|true|none|
|» datasetArn|body|object|true|none|
|» dataSource|body|object|true|none|
|» » dataLocation|body|object|false|none|
|» roleArn|body|object|true|none|
|» tags|body|object|false|none|
|» importMode|body|object|false|none|
|» publishAttributionMetricsToS3|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateDatasetImportJob|

> Example responses

> 200 Response

```json
{
  "datasetImportJobArn": {}
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

<h3 id="createdatasetimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDatasetImportJobResponse](#schemacreatedatasetimportjobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEventTracker

<a id="opIdCreateEventTracker"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateEventTracker' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateEventTracker' \
  -d '{
    "name": {},
    "datasetGroupArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateEventTracker`

<p>Creates an event tracker that you use when adding event data to a specified dataset group using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p> <note> <p>Only one event tracker can be associated with a dataset group. You will get an error if you call <code>CreateEventTracker</code> using the same dataset group as an existing event tracker.</p> </note> <p>When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> operation. Amazon Personalize then appends the event data to the Interactions dataset of the dataset group you specify in your event tracker. </p> <p>The event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the event tracker, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>.</p> <note> <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html">ListEventTrackers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html">DeleteEventTracker</a> </p> </li> </ul>

> Body parameter

```json
{
  "name": {},
  "datasetGroupArn": {},
  "tags": {}
}
```

<h3 id="createeventtracker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateEventTrackerRequest](#schemacreateeventtrackerrequest)|true|none|
|» name|body|object|true|none|
|» datasetGroupArn|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateEventTracker|

> Example responses

> 200 Response

```json
{
  "eventTrackerArn": {},
  "trackingId": {}
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

<h3 id="createeventtracker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEventTrackerResponse](#schemacreateeventtrackerresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFilter

<a id="opIdCreateFilter"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateFilter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateFilter' \
  -d '{
    "name": {},
    "datasetGroupArn": {},
    "filterExpression": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateFilter`

Creates a recommendation filter. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.

> Body parameter

```json
{
  "name": {},
  "datasetGroupArn": {},
  "filterExpression": {},
  "tags": {}
}
```

<h3 id="createfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateFilterRequest](#schemacreatefilterrequest)|true|none|
|» name|body|object|true|none|
|» datasetGroupArn|body|object|true|none|
|» filterExpression|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateFilter|

> Example responses

> 200 Response

```json
{
  "filterArn": {}
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

<h3 id="createfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFilterResponse](#schemacreatefilterresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMetricAttribution

<a id="opIdCreateMetricAttribution"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateMetricAttribution' \
  -d '{
    "name": {},
    "datasetGroupArn": {},
    "metrics": {},
    "metricsOutputConfig": {
      "s3DataDestination": {
        "path": {},
        "kmsKeyArn": {}
      },
      "roleArn": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution`

Creates a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.

> Body parameter

```json
{
  "name": {},
  "datasetGroupArn": {},
  "metrics": {},
  "metricsOutputConfig": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    },
    "roleArn": {}
  }
}
```

<h3 id="createmetricattribution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateMetricAttributionRequest](#schemacreatemetricattributionrequest)|true|none|
|» name|body|object|true|none|
|» datasetGroupArn|body|object|true|none|
|» metrics|body|object|true|none|
|» metricsOutputConfig|body|object|true|none|
|» » s3DataDestination|body|[S3DataConfig](#schemas3dataconfig)|false|The configuration details of an Amazon S3 input or output bucket.|
|» » roleArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateMetricAttribution|

> Example responses

> 200 Response

```json
{
  "metricAttributionArn": {}
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

<h3 id="createmetricattribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMetricAttributionResponse](#schemacreatemetricattributionresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRecommender

<a id="opIdCreateRecommender"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateRecommender' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateRecommender' \
  -d '{
    "name": {},
    "datasetGroupArn": {},
    "recipeArn": {},
    "recommenderConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      },
      "minRecommendationRequestsPerSecond": {}
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateRecommender`

<p>Creates a recommender with the recipe (a Domain dataset group use case) you specify. You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. </p> <p> <b>Minimum recommendation requests per second</b> </p> <p>When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second (<code>minRecommendationRequestsPerSecond</code>) specifies the baseline recommendation request throughput provisioned by Amazon Personalize. The default minRecommendationRequestsPerSecond is <code>1</code>. A recommendation request is a single <code>GetRecommendations</code> operation. Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive your requests per hour and the price of your recommender usage. </p> <p> If your requests per second increases beyond <code>minRecommendationRequestsPerSecond</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minRecommendationRequestsPerSecond</code>. There's a short time delay while the capacity is increased that might cause loss of requests.</p> <p> Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond) or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window. We recommend starting with the default <code>minRecommendationRequestsPerSecond</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minRecommendationRequestsPerSecond</code> as necessary. </p> <p> <b>Status</b> </p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the recommender status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>.</p> <note> <p>Wait until the <code>status</code> of the recommender is <code>ACTIVE</code> before asking the recommender for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html">ListRecommenders</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html">UpdateRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html">DeleteRecommender</a> </p> </li> </ul>

> Body parameter

```json
{
  "name": {},
  "datasetGroupArn": {},
  "recipeArn": {},
  "recommenderConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    },
    "minRecommendationRequestsPerSecond": {}
  },
  "tags": {}
}
```

<h3 id="createrecommender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateRecommenderRequest](#schemacreaterecommenderrequest)|true|none|
|» name|body|object|true|none|
|» datasetGroupArn|body|object|true|none|
|» recipeArn|body|object|true|none|
|» recommenderConfig|body|object|false|none|
|» » itemExplorationConfig|body|object|false|none|
|» » » **additionalProperties**|body|[ParameterValue](#schemaparametervalue)|false|none|
|» » minRecommendationRequestsPerSecond|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateRecommender|

> Example responses

> 200 Response

```json
{
  "recommenderArn": {}
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

<h3 id="createrecommender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRecommenderResponse](#schemacreaterecommenderresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSchema

<a id="opIdCreateSchema"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateSchema' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateSchema' \
  -d '{
    "name": {},
    "schema": {},
    "domain": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateSchema`

<p>Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format.</p> <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html">ListSchemas</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html">DeleteSchema</a> </p> </li> </ul>

> Body parameter

```json
{
  "name": {},
  "schema": {},
  "domain": {}
}
```

<h3 id="createschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateSchemaRequest](#schemacreateschemarequest)|true|none|
|» name|body|object|true|none|
|» schema|body|object|true|none|
|» domain|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateSchema|

> Example responses

> 200 Response

```json
{
  "schemaArn": {}
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

<h3 id="createschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSchemaResponse](#schemacreateschemaresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSolution

<a id="opIdCreateSolution"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateSolution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateSolution' \
  -d '{
    "name": {},
    "performHPO": {},
    "performAutoML": {},
    "recipeArn": {},
    "datasetGroupArn": {},
    "eventType": {},
    "solutionConfig": {
      "eventValueThreshold": {},
      "hpoConfig": {
        "hpoObjective": {
          "type": {},
          "metricName": {},
          "metricRegex": {}
        },
        "hpoResourceConfig": {
          "maxNumberOfTrainingJobs": {},
          "maxParallelTrainingJobs": {}
        },
        "algorithmHyperParameterRanges": {
          "integerHyperParameterRanges": {},
          "continuousHyperParameterRanges": {},
          "categoricalHyperParameterRanges": {}
        }
      },
      "algorithmHyperParameters": {
        "property1": "string",
        "property2": "string"
      },
      "featureTransformationParameters": {
        "property1": "string",
        "property2": "string"
      },
      "autoMLConfig": {
        "metricName": {},
        "recipeList": {}
      },
      "optimizationObjective": {
        "itemAttribute": {},
        "objectiveSensitivity": {}
      }
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateSolution`

<p>Creates the configuration for training a model. A trained model is known as a solution. After the configuration is created, you train the model (create a solution) by calling the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> operation. Every time you call <code>CreateSolutionVersion</code>, a new version of the solution is created.</p> <p>After creating a solution version, you check its accuracy by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html">GetSolutionMetrics</a>. When you are satisfied with the version, you deploy it using <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>. The campaign provides recommendations to a client through the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p> <p>To train a model, Amazon Personalize requires training data and a recipe. The training data comes from the dataset group that you provide in the request. A recipe specifies the training algorithm and a feature transformation. You can specify one of the predefined recipes provided by Amazon Personalize. Alternatively, you can specify <code>performAutoML</code> and Amazon Personalize will analyze your data and select the optimum USER_PERSONALIZATION recipe for you.</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> for solution hyperparameter optimization at this time.</p> </note> <p> <b>Status</b> </p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>. Wait until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> </ul>

> Body parameter

```json
{
  "name": {},
  "performHPO": {},
  "performAutoML": {},
  "recipeArn": {},
  "datasetGroupArn": {},
  "eventType": {},
  "solutionConfig": {
    "eventValueThreshold": {},
    "hpoConfig": {
      "hpoObjective": {
        "type": {},
        "metricName": {},
        "metricRegex": {}
      },
      "hpoResourceConfig": {
        "maxNumberOfTrainingJobs": {},
        "maxParallelTrainingJobs": {}
      },
      "algorithmHyperParameterRanges": {
        "integerHyperParameterRanges": {},
        "continuousHyperParameterRanges": {},
        "categoricalHyperParameterRanges": {}
      }
    },
    "algorithmHyperParameters": {
      "property1": "string",
      "property2": "string"
    },
    "featureTransformationParameters": {
      "property1": "string",
      "property2": "string"
    },
    "autoMLConfig": {
      "metricName": {},
      "recipeList": {}
    },
    "optimizationObjective": {
      "itemAttribute": {},
      "objectiveSensitivity": {}
    }
  },
  "tags": {}
}
```

<h3 id="createsolution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateSolutionRequest](#schemacreatesolutionrequest)|true|none|
|» name|body|object|true|none|
|» performHPO|body|object|false|none|
|» performAutoML|body|object|false|none|
|» recipeArn|body|object|false|none|
|» datasetGroupArn|body|object|true|none|
|» eventType|body|object|false|none|
|» solutionConfig|body|object|false|none|
|» » eventValueThreshold|body|object|false|none|
|» » hpoConfig|body|object|false|none|
|» » » hpoObjective|body|object|false|none|
|» » » » type|body|object|false|none|
|» » » » metricName|body|object|false|none|
|» » » » metricRegex|body|object|false|none|
|» » » hpoResourceConfig|body|object|false|none|
|» » » » maxNumberOfTrainingJobs|body|object|false|none|
|» » » » maxParallelTrainingJobs|body|object|false|none|
|» » » algorithmHyperParameterRanges|body|object|false|none|
|» » » » integerHyperParameterRanges|body|object|false|none|
|» » » » continuousHyperParameterRanges|body|object|false|none|
|» » » » categoricalHyperParameterRanges|body|object|false|none|
|» » algorithmHyperParameters|body|object|false|none|
|» » » **additionalProperties**|body|[ParameterValue](#schemaparametervalue)|false|none|
|» » featureTransformationParameters|body|object|false|none|
|» » » **additionalProperties**|body|[ParameterValue](#schemaparametervalue)|false|none|
|» » autoMLConfig|body|object|false|none|
|» » » metricName|body|object|false|none|
|» » » recipeList|body|object|false|none|
|» » optimizationObjective|body|object|false|none|
|» » » itemAttribute|body|object|false|none|
|» » » objectiveSensitivity|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateSolution|

> Example responses

> 200 Response

```json
{
  "solutionArn": {}
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

<h3 id="createsolution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSolutionResponse](#schemacreatesolutionresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSolutionVersion

<a id="opIdCreateSolutionVersion"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.CreateSolutionVersion' \
  -d '{
    "name": {},
    "solutionArn": {},
    "trainingMode": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion`

<p>Trains or retrains an active solution in a Custom dataset group. A solution is created using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> operation and must be in the ACTIVE state before calling <code>CreateSolutionVersion</code>. A new version of the solution is created every time you call this operation.</p> <p> <b>Status</b> </p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING</p> </li> <li> <p>CREATE IN_PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> <li> <p>CREATE STOPPING</p> </li> <li> <p>CREATE STOPPED</p> </li> </ul> <p>To get the status of the version, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>. Wait until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p> <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul>

> Body parameter

```json
{
  "name": {},
  "solutionArn": {},
  "trainingMode": {},
  "tags": {}
}
```

<h3 id="createsolutionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateSolutionVersionRequest](#schemacreatesolutionversionrequest)|true|none|
|» name|body|object|false|none|
|» solutionArn|body|object|true|none|
|» trainingMode|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.CreateSolutionVersion|

> Example responses

> 200 Response

```json
{
  "solutionVersionArn": {}
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

<h3 id="createsolutionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSolutionVersionResponse](#schemacreatesolutionversionresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|485|485|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCampaign

<a id="opIdDeleteCampaign"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DeleteCampaign' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DeleteCampaign' \
  -d '{
    "campaignArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DeleteCampaign`

Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. For information on creating campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.

> Body parameter

```json
{
  "campaignArn": {}
}
```

<h3 id="deletecampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteCampaignRequest](#schemadeletecampaignrequest)|true|none|
|» campaignArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DeleteCampaign|

> Example responses

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

<h3 id="deletecampaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataset

<a id="opIdDeleteDataset"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DeleteDataset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DeleteDataset' \
  -d '{
    "datasetArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DeleteDataset`

Deletes a dataset. You can't delete a dataset if an associated <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

> Body parameter

```json
{
  "datasetArn": {}
}
```

<h3 id="deletedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteDatasetRequest](#schemadeletedatasetrequest)|true|none|
|» datasetArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DeleteDataset|

> Example responses

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
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDatasetGroup

<a id="opIdDeleteDatasetGroup"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DeleteDatasetGroup' \
  -d '{
    "datasetGroupArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup`

<p>Deletes a dataset group. Before you delete a dataset group, you must delete the following:</p> <ul> <li> <p>All associated event trackers.</p> </li> <li> <p>All associated solutions.</p> </li> <li> <p>All datasets in the dataset group.</p> </li> </ul>

> Body parameter

```json
{
  "datasetGroupArn": {}
}
```

<h3 id="deletedatasetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteDatasetGroupRequest](#schemadeletedatasetgrouprequest)|true|none|
|» datasetGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DeleteDatasetGroup|

> Example responses

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

<h3 id="deletedatasetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEventTracker

<a id="opIdDeleteEventTracker"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DeleteEventTracker' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DeleteEventTracker' \
  -d '{
    "eventTrackerArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DeleteEventTracker`

Deletes the event tracker. Does not delete the event-interactions dataset from the associated dataset group. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.

> Body parameter

```json
{
  "eventTrackerArn": {}
}
```

<h3 id="deleteeventtracker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteEventTrackerRequest](#schemadeleteeventtrackerrequest)|true|none|
|» eventTrackerArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DeleteEventTracker|

> Example responses

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

<h3 id="deleteeventtracker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFilter

<a id="opIdDeleteFilter"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DeleteFilter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DeleteFilter' \
  -d '{
    "filterArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DeleteFilter`

Deletes a filter.

> Body parameter

```json
{
  "filterArn": {}
}
```

<h3 id="deletefilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteFilterRequest](#schemadeletefilterrequest)|true|none|
|» filterArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DeleteFilter|

> Example responses

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

<h3 id="deletefilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMetricAttribution

<a id="opIdDeleteMetricAttribution"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DeleteMetricAttribution' \
  -d '{
    "metricAttributionArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution`

Deletes a metric attribution.

> Body parameter

```json
{
  "metricAttributionArn": {}
}
```

<h3 id="deletemetricattribution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteMetricAttributionRequest](#schemadeletemetricattributionrequest)|true|none|
|» metricAttributionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DeleteMetricAttribution|

> Example responses

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

<h3 id="deletemetricattribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRecommender

<a id="opIdDeleteRecommender"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DeleteRecommender' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DeleteRecommender' \
  -d '{
    "recommenderArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DeleteRecommender`

Deactivates and removes a recommender. A deleted recommender can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request.

> Body parameter

```json
{
  "recommenderArn": {}
}
```

<h3 id="deleterecommender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteRecommenderRequest](#schemadeleterecommenderrequest)|true|none|
|» recommenderArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DeleteRecommender|

> Example responses

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

<h3 id="deleterecommender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSchema

<a id="opIdDeleteSchema"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DeleteSchema' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DeleteSchema' \
  -d '{
    "schemaArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DeleteSchema`

Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.

> Body parameter

```json
{
  "schemaArn": {}
}
```

<h3 id="deleteschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteSchemaRequest](#schemadeleteschemarequest)|true|none|
|» schemaArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DeleteSchema|

> Example responses

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

<h3 id="deleteschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSolution

<a id="opIdDeleteSolution"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DeleteSolution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DeleteSolution' \
  -d '{
    "solutionArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DeleteSolution`

Deletes all versions of a solution and the <code>Solution</code> object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution. You can't delete a solution if an associated <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.

> Body parameter

```json
{
  "solutionArn": {}
}
```

<h3 id="deletesolution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteSolutionRequest](#schemadeletesolutionrequest)|true|none|
|» solutionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DeleteSolution|

> Example responses

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

<h3 id="deletesolution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAlgorithm

<a id="opIdDescribeAlgorithm"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeAlgorithm' \
  -d '{
    "algorithmArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm`

Describes the given algorithm.

> Body parameter

```json
{
  "algorithmArn": {}
}
```

<h3 id="describealgorithm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAlgorithmRequest](#schemadescribealgorithmrequest)|true|none|
|» algorithmArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeAlgorithm|

> Example responses

> 200 Response

```json
{
  "algorithm": {
    "name": {},
    "algorithmArn": {},
    "algorithmImage": {
      "name": {},
      "dockerURI": {}
    },
    "defaultHyperParameters": {
      "property1": "string",
      "property2": "string"
    },
    "defaultHyperParameterRanges": {
      "integerHyperParameterRanges": {},
      "continuousHyperParameterRanges": {},
      "categoricalHyperParameterRanges": {}
    },
    "defaultResourceConfig": {
      "property1": "string",
      "property2": "string"
    },
    "trainingInputMode": {},
    "roleArn": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
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

<h3 id="describealgorithm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAlgorithmResponse](#schemadescribealgorithmresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBatchInferenceJob

<a id="opIdDescribeBatchInferenceJob"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeBatchInferenceJob' \
  -d '{
    "batchInferenceJobArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob`

Gets the properties of a batch inference job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate the recommendations.

> Body parameter

```json
{
  "batchInferenceJobArn": {}
}
```

<h3 id="describebatchinferencejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeBatchInferenceJobRequest](#schemadescribebatchinferencejobrequest)|true|none|
|» batchInferenceJobArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeBatchInferenceJob|

> Example responses

> 200 Response

```json
{
  "batchInferenceJob": {
    "jobName": {},
    "batchInferenceJobArn": {},
    "filterArn": {},
    "failureReason": {},
    "solutionVersionArn": {},
    "numResults": {},
    "jobInput": {
      "s3DataSource": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "jobOutput": {
      "s3DataDestination": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "batchInferenceJobConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      }
    },
    "roleArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
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

<h3 id="describebatchinferencejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBatchInferenceJobResponse](#schemadescribebatchinferencejobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBatchSegmentJob

<a id="opIdDescribeBatchSegmentJob"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeBatchSegmentJob' \
  -d '{
    "batchSegmentJobArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob`

Gets the properties of a batch segment job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate segments.

> Body parameter

```json
{
  "batchSegmentJobArn": {}
}
```

<h3 id="describebatchsegmentjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeBatchSegmentJobRequest](#schemadescribebatchsegmentjobrequest)|true|none|
|» batchSegmentJobArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeBatchSegmentJob|

> Example responses

> 200 Response

```json
{
  "batchSegmentJob": {
    "jobName": {},
    "batchSegmentJobArn": {},
    "filterArn": {},
    "failureReason": {},
    "solutionVersionArn": {},
    "numResults": {},
    "jobInput": {
      "s3DataSource": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "jobOutput": {
      "s3DataDestination": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "roleArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
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

<h3 id="describebatchsegmentjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBatchSegmentJobResponse](#schemadescribebatchsegmentjobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCampaign

<a id="opIdDescribeCampaign"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeCampaign' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeCampaign' \
  -d '{
    "campaignArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeCampaign`

<p>Describes the given campaign, including its status.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>

> Body parameter

```json
{
  "campaignArn": {}
}
```

<h3 id="describecampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeCampaignRequest](#schemadescribecampaignrequest)|true|none|
|» campaignArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeCampaign|

> Example responses

> 200 Response

```json
{
  "campaign": {
    "name": {},
    "campaignArn": {},
    "solutionVersionArn": {},
    "minProvisionedTPS": {},
    "campaignConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      }
    },
    "status": {},
    "failureReason": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "latestCampaignUpdate": {
      "solutionVersionArn": {},
      "minProvisionedTPS": {},
      "campaignConfig": {
        "itemExplorationConfig": {
          "property1": "string",
          "property2": "string"
        }
      },
      "status": {},
      "failureReason": {},
      "creationDateTime": {},
      "lastUpdatedDateTime": {}
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

<h3 id="describecampaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCampaignResponse](#schemadescribecampaignresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDataset

<a id="opIdDescribeDataset"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeDataset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeDataset' \
  -d '{
    "datasetArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeDataset`

Describes the given dataset. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

> Body parameter

```json
{
  "datasetArn": {}
}
```

<h3 id="describedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDatasetRequest](#schemadescribedatasetrequest)|true|none|
|» datasetArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeDataset|

> Example responses

> 200 Response

```json
{
  "dataset": {
    "name": {},
    "datasetArn": {},
    "datasetGroupArn": {},
    "datasetType": {},
    "schemaArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
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

<h3 id="describedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatasetResponse](#schemadescribedatasetresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDatasetExportJob

<a id="opIdDescribeDatasetExportJob"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeDatasetExportJob' \
  -d '{
    "datasetExportJobArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob`

Describes the dataset export job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>, including the export job status.

> Body parameter

```json
{
  "datasetExportJobArn": {}
}
```

<h3 id="describedatasetexportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDatasetExportJobRequest](#schemadescribedatasetexportjobrequest)|true|none|
|» datasetExportJobArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeDatasetExportJob|

> Example responses

> 200 Response

```json
{
  "datasetExportJob": {
    "jobName": {},
    "datasetExportJobArn": {},
    "datasetArn": {},
    "ingestionMode": {},
    "roleArn": {},
    "status": {},
    "jobOutput": {
      "s3DataDestination": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {}
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

<h3 id="describedatasetexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatasetExportJobResponse](#schemadescribedatasetexportjobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDatasetGroup

<a id="opIdDescribeDatasetGroup"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeDatasetGroup' \
  -d '{
    "datasetGroupArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup`

Describes the given dataset group. For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.

> Body parameter

```json
{
  "datasetGroupArn": {}
}
```

<h3 id="describedatasetgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDatasetGroupRequest](#schemadescribedatasetgrouprequest)|true|none|
|» datasetGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeDatasetGroup|

> Example responses

> 200 Response

```json
{
  "datasetGroup": {
    "name": {},
    "datasetGroupArn": {},
    "status": {},
    "roleArn": {},
    "kmsKeyArn": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {},
    "domain": {}
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

<h3 id="describedatasetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatasetGroupResponse](#schemadescribedatasetgroupresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDatasetImportJob

<a id="opIdDescribeDatasetImportJob"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeDatasetImportJob' \
  -d '{
    "datasetImportJobArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob`

Describes the dataset import job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>, including the import job status.

> Body parameter

```json
{
  "datasetImportJobArn": {}
}
```

<h3 id="describedatasetimportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDatasetImportJobRequest](#schemadescribedatasetimportjobrequest)|true|none|
|» datasetImportJobArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeDatasetImportJob|

> Example responses

> 200 Response

```json
{
  "datasetImportJob": {
    "jobName": {},
    "datasetImportJobArn": {},
    "datasetArn": {},
    "dataSource": {
      "dataLocation": {}
    },
    "roleArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {},
    "importMode": {},
    "publishAttributionMetricsToS3": {}
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

<h3 id="describedatasetimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatasetImportJobResponse](#schemadescribedatasetimportjobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEventTracker

<a id="opIdDescribeEventTracker"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeEventTracker' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeEventTracker' \
  -d '{
    "eventTrackerArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeEventTracker`

Describes an event tracker. The response includes the <code>trackingId</code> and <code>status</code> of the event tracker. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.

> Body parameter

```json
{
  "eventTrackerArn": {}
}
```

<h3 id="describeeventtracker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEventTrackerRequest](#schemadescribeeventtrackerrequest)|true|none|
|» eventTrackerArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeEventTracker|

> Example responses

> 200 Response

```json
{
  "eventTracker": {
    "name": {},
    "eventTrackerArn": {},
    "accountId": {},
    "trackingId": {},
    "datasetGroupArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
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

<h3 id="describeeventtracker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventTrackerResponse](#schemadescribeeventtrackerresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFeatureTransformation

<a id="opIdDescribeFeatureTransformation"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeFeatureTransformation' \
  -d '{
    "featureTransformationArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation`

Describes the given feature transformation.

> Body parameter

```json
{
  "featureTransformationArn": {}
}
```

<h3 id="describefeaturetransformation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeFeatureTransformationRequest](#schemadescribefeaturetransformationrequest)|true|none|
|» featureTransformationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeFeatureTransformation|

> Example responses

> 200 Response

```json
{
  "featureTransformation": {
    "name": {},
    "featureTransformationArn": {},
    "defaultParameters": {
      "property1": "string",
      "property2": "string"
    },
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
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

<h3 id="describefeaturetransformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFeatureTransformationResponse](#schemadescribefeaturetransformationresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFilter

<a id="opIdDescribeFilter"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeFilter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeFilter' \
  -d '{
    "filterArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeFilter`

Describes a filter's properties.

> Body parameter

```json
{
  "filterArn": {}
}
```

<h3 id="describefilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeFilterRequest](#schemadescribefilterrequest)|true|none|
|» filterArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeFilter|

> Example responses

> 200 Response

```json
{
  "filter": {
    "name": {},
    "filterArn": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "datasetGroupArn": {},
    "failureReason": {},
    "filterExpression": {},
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

<h3 id="describefilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFilterResponse](#schemadescribefilterresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMetricAttribution

<a id="opIdDescribeMetricAttribution"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeMetricAttribution' \
  -d '{
    "metricAttributionArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution`

Describes a metric attribution.

> Body parameter

```json
{
  "metricAttributionArn": {}
}
```

<h3 id="describemetricattribution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMetricAttributionRequest](#schemadescribemetricattributionrequest)|true|none|
|» metricAttributionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeMetricAttribution|

> Example responses

> 200 Response

```json
{
  "metricAttribution": {
    "name": {},
    "metricAttributionArn": {},
    "datasetGroupArn": {},
    "metricsOutputConfig": {
      "s3DataDestination": {
        "path": {},
        "kmsKeyArn": {}
      },
      "roleArn": {}
    },
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {}
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

<h3 id="describemetricattribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMetricAttributionResponse](#schemadescribemetricattributionresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRecipe

<a id="opIdDescribeRecipe"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeRecipe' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeRecipe' \
  -d '{
    "recipeArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeRecipe`

<p>Describes a recipe.</p> <p>A recipe contains three items:</p> <ul> <li> <p>An algorithm that trains a model.</p> </li> <li> <p>Hyperparameters that govern the training.</p> </li> <li> <p>Feature transformation information for modifying the input data before training.</p> </li> </ul> <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> API. <code>CreateSolution</code> trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>

> Body parameter

```json
{
  "recipeArn": {}
}
```

<h3 id="describerecipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeRecipeRequest](#schemadescribereciperequest)|true|none|
|» recipeArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeRecipe|

> Example responses

> 200 Response

```json
{
  "recipe": {
    "name": {},
    "recipeArn": {},
    "algorithmArn": {},
    "featureTransformationArn": {},
    "status": {},
    "description": {},
    "creationDateTime": {},
    "recipeType": {},
    "lastUpdatedDateTime": {}
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

<h3 id="describerecipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRecipeResponse](#schemadescribereciperesponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRecommender

<a id="opIdDescribeRecommender"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeRecommender' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeRecommender' \
  -d '{
    "recommenderArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeRecommender`

<p>Describes the given recommender, including its status.</p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>The <code>modelMetrics</code> key is null when the recommender is being created or deleted.</p> <p>For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.</p>

> Body parameter

```json
{
  "recommenderArn": {}
}
```

<h3 id="describerecommender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeRecommenderRequest](#schemadescriberecommenderrequest)|true|none|
|» recommenderArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeRecommender|

> Example responses

> 200 Response

```json
{
  "recommender": {
    "recommenderArn": {},
    "datasetGroupArn": {},
    "name": {},
    "recipeArn": {},
    "recommenderConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      },
      "minRecommendationRequestsPerSecond": {}
    },
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "status": {},
    "failureReason": {},
    "latestRecommenderUpdate": {
      "recommenderConfig": {
        "itemExplorationConfig": {
          "property1": "string",
          "property2": "string"
        },
        "minRecommendationRequestsPerSecond": {}
      },
      "creationDateTime": {},
      "lastUpdatedDateTime": {},
      "status": {},
      "failureReason": {}
    },
    "modelMetrics": {
      "property1": 0,
      "property2": 0
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

<h3 id="describerecommender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRecommenderResponse](#schemadescriberecommenderresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSchema

<a id="opIdDescribeSchema"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeSchema' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeSchema' \
  -d '{
    "schemaArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeSchema`

Describes a schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.

> Body parameter

```json
{
  "schemaArn": {}
}
```

<h3 id="describeschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeSchemaRequest](#schemadescribeschemarequest)|true|none|
|» schemaArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeSchema|

> Example responses

> 200 Response

```json
{
  "schema": {
    "name": {},
    "schemaArn": {},
    "schema": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "domain": {}
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

<h3 id="describeschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSchemaResponse](#schemadescribeschemaresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSolution

<a id="opIdDescribeSolution"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeSolution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeSolution' \
  -d '{
    "solutionArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeSolution`

Describes a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.

> Body parameter

```json
{
  "solutionArn": {}
}
```

<h3 id="describesolution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeSolutionRequest](#schemadescribesolutionrequest)|true|none|
|» solutionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeSolution|

> Example responses

> 200 Response

```json
{
  "solution": {
    "name": {},
    "solutionArn": {},
    "performHPO": {},
    "performAutoML": {},
    "recipeArn": {},
    "datasetGroupArn": {},
    "eventType": {},
    "solutionConfig": {
      "eventValueThreshold": {},
      "hpoConfig": {
        "hpoObjective": {
          "type": {},
          "metricName": {},
          "metricRegex": {}
        },
        "hpoResourceConfig": {
          "maxNumberOfTrainingJobs": {},
          "maxParallelTrainingJobs": {}
        },
        "algorithmHyperParameterRanges": {
          "integerHyperParameterRanges": {},
          "continuousHyperParameterRanges": {},
          "categoricalHyperParameterRanges": {}
        }
      },
      "algorithmHyperParameters": {
        "property1": "string",
        "property2": "string"
      },
      "featureTransformationParameters": {
        "property1": "string",
        "property2": "string"
      },
      "autoMLConfig": {
        "metricName": {},
        "recipeList": {}
      },
      "optimizationObjective": {
        "itemAttribute": {},
        "objectiveSensitivity": {}
      }
    },
    "autoMLResult": {
      "bestRecipeArn": {}
    },
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "latestSolutionVersion": {
      "solutionVersionArn": {},
      "status": {},
      "creationDateTime": {},
      "lastUpdatedDateTime": {},
      "failureReason": {}
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

<h3 id="describesolution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSolutionResponse](#schemadescribesolutionresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSolutionVersion

<a id="opIdDescribeSolutionVersion"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.DescribeSolutionVersion' \
  -d '{
    "solutionVersionArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion`

Describes a specific version of a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> 

> Body parameter

```json
{
  "solutionVersionArn": {}
}
```

<h3 id="describesolutionversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeSolutionVersionRequest](#schemadescribesolutionversionrequest)|true|none|
|» solutionVersionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.DescribeSolutionVersion|

> Example responses

> 200 Response

```json
{
  "solutionVersion": {
    "name": {},
    "solutionVersionArn": {},
    "solutionArn": {},
    "performHPO": {},
    "performAutoML": {},
    "recipeArn": {},
    "eventType": {},
    "datasetGroupArn": {},
    "solutionConfig": {
      "eventValueThreshold": {},
      "hpoConfig": {
        "hpoObjective": {
          "type": {},
          "metricName": {},
          "metricRegex": {}
        },
        "hpoResourceConfig": {
          "maxNumberOfTrainingJobs": {},
          "maxParallelTrainingJobs": {}
        },
        "algorithmHyperParameterRanges": {
          "integerHyperParameterRanges": {},
          "continuousHyperParameterRanges": {},
          "categoricalHyperParameterRanges": {}
        }
      },
      "algorithmHyperParameters": {
        "property1": "string",
        "property2": "string"
      },
      "featureTransformationParameters": {
        "property1": "string",
        "property2": "string"
      },
      "autoMLConfig": {
        "metricName": {},
        "recipeList": {}
      },
      "optimizationObjective": {
        "itemAttribute": {},
        "objectiveSensitivity": {}
      }
    },
    "trainingHours": {},
    "trainingMode": {},
    "tunedHPOParams": {
      "algorithmHyperParameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "status": {},
    "failureReason": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
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

<h3 id="describesolutionversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSolutionVersionResponse](#schemadescribesolutionversionresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSolutionMetrics

<a id="opIdGetSolutionMetrics"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.GetSolutionMetrics' \
  -d '{
    "solutionVersionArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics`

Gets the metrics for the specified solution version.

> Body parameter

```json
{
  "solutionVersionArn": {}
}
```

<h3 id="getsolutionmetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetSolutionMetricsRequest](#schemagetsolutionmetricsrequest)|true|none|
|» solutionVersionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.GetSolutionMetrics|

> Example responses

> 200 Response

```json
{
  "solutionVersionArn": {},
  "metrics": {
    "property1": 0,
    "property2": 0
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

<h3 id="getsolutionmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSolutionMetricsResponse](#schemagetsolutionmetricsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBatchInferenceJobs

<a id="opIdListBatchInferenceJobs"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListBatchInferenceJobs' \
  -d '{
    "solutionVersionArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs`

Gets a list of the batch inference jobs that have been performed off of a solution version.

> Body parameter

```json
{
  "solutionVersionArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listbatchinferencejobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListBatchInferenceJobsRequest](#schemalistbatchinferencejobsrequest)|true|none|
|» solutionVersionArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListBatchInferenceJobs|

> Example responses

> 200 Response

```json
{
  "batchInferenceJobs": {},
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

<h3 id="listbatchinferencejobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBatchInferenceJobsResponse](#schemalistbatchinferencejobsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBatchSegmentJobs

<a id="opIdListBatchSegmentJobs"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListBatchSegmentJobs' \
  -d '{
    "solutionVersionArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs`

Gets a list of the batch segment jobs that have been performed off of a solution version that you specify.

> Body parameter

```json
{
  "solutionVersionArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listbatchsegmentjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListBatchSegmentJobsRequest](#schemalistbatchsegmentjobsrequest)|true|none|
|» solutionVersionArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListBatchSegmentJobs|

> Example responses

> 200 Response

```json
{
  "batchSegmentJobs": {},
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

<h3 id="listbatchsegmentjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBatchSegmentJobsResponse](#schemalistbatchsegmentjobsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCampaigns

<a id="opIdListCampaigns"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListCampaigns' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListCampaigns' \
  -d '{
    "solutionArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListCampaigns`

Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.

> Body parameter

```json
{
  "solutionArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listcampaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCampaignsRequest](#schemalistcampaignsrequest)|true|none|
|» solutionArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListCampaigns|

> Example responses

> 200 Response

```json
{
  "campaigns": {},
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

<h3 id="listcampaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCampaignsResponse](#schemalistcampaignsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasetExportJobs

<a id="opIdListDatasetExportJobs"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListDatasetExportJobs' \
  -d '{
    "datasetArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs`

Returns a list of dataset export jobs that use the given dataset. When a dataset is not specified, all the dataset export jobs associated with the account are listed. The response provides the properties for each dataset export job, including the Amazon Resource Name (ARN). For more information on dataset export jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

> Body parameter

```json
{
  "datasetArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listdatasetexportjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDatasetExportJobsRequest](#schemalistdatasetexportjobsrequest)|true|none|
|» datasetArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListDatasetExportJobs|

> Example responses

> 200 Response

```json
{
  "datasetExportJobs": {},
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

<h3 id="listdatasetexportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasetExportJobsResponse](#schemalistdatasetexportjobsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasetGroups

<a id="opIdListDatasetGroups"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListDatasetGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListDatasetGroups' \
  -d '{
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListDatasetGroups`

Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.

> Body parameter

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listdatasetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDatasetGroupsRequest](#schemalistdatasetgroupsrequest)|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListDatasetGroups|

> Example responses

> 200 Response

```json
{
  "datasetGroups": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listdatasetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasetGroupsResponse](#schemalistdatasetgroupsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasetImportJobs

<a id="opIdListDatasetImportJobs"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListDatasetImportJobs' \
  -d '{
    "datasetArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs`

Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

> Body parameter

```json
{
  "datasetArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listdatasetimportjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDatasetImportJobsRequest](#schemalistdatasetimportjobsrequest)|true|none|
|» datasetArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListDatasetImportJobs|

> Example responses

> 200 Response

```json
{
  "datasetImportJobs": {},
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

<h3 id="listdatasetimportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasetImportJobsResponse](#schemalistdatasetimportjobsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasets

<a id="opIdListDatasets"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListDatasets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListDatasets' \
  -d '{
    "datasetGroupArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListDatasets`

Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.

> Body parameter

```json
{
  "datasetGroupArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listdatasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDatasetsRequest](#schemalistdatasetsrequest)|true|none|
|» datasetGroupArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListDatasets|

> Example responses

> 200 Response

```json
{
  "datasets": {},
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

<h3 id="listdatasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasetsResponse](#schemalistdatasetsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEventTrackers

<a id="opIdListEventTrackers"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListEventTrackers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListEventTrackers' \
  -d '{
    "datasetGroupArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListEventTrackers`

Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.

> Body parameter

```json
{
  "datasetGroupArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listeventtrackers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListEventTrackersRequest](#schemalisteventtrackersrequest)|true|none|
|» datasetGroupArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListEventTrackers|

> Example responses

> 200 Response

```json
{
  "eventTrackers": {},
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

<h3 id="listeventtrackers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEventTrackersResponse](#schemalisteventtrackersresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFilters

<a id="opIdListFilters"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListFilters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListFilters' \
  -d '{
    "datasetGroupArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListFilters`

Lists all filters that belong to a given dataset group.

> Body parameter

```json
{
  "datasetGroupArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listfilters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListFiltersRequest](#schemalistfiltersrequest)|true|none|
|» datasetGroupArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListFilters|

> Example responses

> 200 Response

```json
{
  "Filters": {},
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

<h3 id="listfilters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFiltersResponse](#schemalistfiltersresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMetricAttributionMetrics

<a id="opIdListMetricAttributionMetrics"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListMetricAttributionMetrics' \
  -d '{
    "metricAttributionArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics`

Lists the metrics for the metric attribution.

> Body parameter

```json
{
  "metricAttributionArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listmetricattributionmetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListMetricAttributionMetricsRequest](#schemalistmetricattributionmetricsrequest)|true|none|
|» metricAttributionArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListMetricAttributionMetrics|

> Example responses

> 200 Response

```json
{
  "metrics": {},
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

<h3 id="listmetricattributionmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMetricAttributionMetricsResponse](#schemalistmetricattributionmetricsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMetricAttributions

<a id="opIdListMetricAttributions"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListMetricAttributions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListMetricAttributions' \
  -d '{
    "datasetGroupArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListMetricAttributions`

Lists metric attributions.

> Body parameter

```json
{
  "datasetGroupArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listmetricattributions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListMetricAttributionsRequest](#schemalistmetricattributionsrequest)|true|none|
|» datasetGroupArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListMetricAttributions|

> Example responses

> 200 Response

```json
{
  "metricAttributions": {},
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

<h3 id="listmetricattributions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMetricAttributionsResponse](#schemalistmetricattributionsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecipes

<a id="opIdListRecipes"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListRecipes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListRecipes' \
  -d '{
    "recipeProvider": {},
    "nextToken": {},
    "maxResults": {},
    "domain": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListRecipes`

Returns a list of available recipes. The response provides the properties for each recipe, including the recipe's Amazon Resource Name (ARN).

> Body parameter

```json
{
  "recipeProvider": {},
  "nextToken": {},
  "maxResults": {},
  "domain": {}
}
```

<h3 id="listrecipes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRecipesRequest](#schemalistrecipesrequest)|true|none|
|» recipeProvider|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» domain|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListRecipes|

> Example responses

> 200 Response

```json
{
  "recipes": {},
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

<h3 id="listrecipes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecipesResponse](#schemalistrecipesresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecommenders

<a id="opIdListRecommenders"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListRecommenders' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListRecommenders' \
  -d '{
    "datasetGroupArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListRecommenders`

Returns a list of recommenders in a given Domain dataset group. When a Domain dataset group is not specified, all the recommenders associated with the account are listed. The response provides the properties for each recommender, including the Amazon Resource Name (ARN). For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.

> Body parameter

```json
{
  "datasetGroupArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listrecommenders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRecommendersRequest](#schemalistrecommendersrequest)|true|none|
|» datasetGroupArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListRecommenders|

> Example responses

> 200 Response

```json
{
  "recommenders": {},
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

<h3 id="listrecommenders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecommendersResponse](#schemalistrecommendersresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSchemas

<a id="opIdListSchemas"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListSchemas' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListSchemas' \
  -d '{
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListSchemas`

Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.

> Body parameter

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listschemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSchemasRequest](#schemalistschemasrequest)|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListSchemas|

> Example responses

> 200 Response

```json
{
  "schemas": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listschemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSchemasResponse](#schemalistschemasresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSolutionVersions

<a id="opIdListSolutionVersions"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListSolutionVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListSolutionVersions' \
  -d '{
    "solutionArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListSolutionVersions`

Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN).

> Body parameter

```json
{
  "solutionArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listsolutionversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSolutionVersionsRequest](#schemalistsolutionversionsrequest)|true|none|
|» solutionArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListSolutionVersions|

> Example responses

> 200 Response

```json
{
  "solutionVersions": {},
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

<h3 id="listsolutionversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSolutionVersionsResponse](#schemalistsolutionversionsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSolutions

<a id="opIdListSolutions"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListSolutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListSolutions' \
  -d '{
    "datasetGroupArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListSolutions`

Returns a list of solutions that use the given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.

> Body parameter

```json
{
  "datasetGroupArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listsolutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSolutionsRequest](#schemalistsolutionsrequest)|true|none|
|» datasetGroupArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListSolutions|

> Example responses

> 200 Response

```json
{
  "solutions": {},
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

<h3 id="listsolutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSolutionsResponse](#schemalistsolutionsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.ListTagsForResource' \
  -d '{
    "resourceArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.ListTagsForResource`

Get a list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> attached to a resource.

> Body parameter

```json
{
  "resourceArn": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» resourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "tags": {}
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
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartRecommender

<a id="opIdStartRecommender"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.StartRecommender' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.StartRecommender' \
  -d '{
    "recommenderArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.StartRecommender`

Starts a recommender that is INACTIVE. Starting a recommender does not create any new models, but resumes billing and automatic retraining for the recommender.

> Body parameter

```json
{
  "recommenderArn": {}
}
```

<h3 id="startrecommender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartRecommenderRequest](#schemastartrecommenderrequest)|true|none|
|» recommenderArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.StartRecommender|

> Example responses

> 200 Response

```json
{
  "recommenderArn": {}
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

<h3 id="startrecommender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartRecommenderResponse](#schemastartrecommenderresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopRecommender

<a id="opIdStopRecommender"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.StopRecommender' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.StopRecommender' \
  -d '{
    "recommenderArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.StopRecommender`

Stops a recommender that is ACTIVE. Stopping a recommender halts billing and automatic retraining for the recommender.

> Body parameter

```json
{
  "recommenderArn": {}
}
```

<h3 id="stoprecommender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StopRecommenderRequest](#schemastoprecommenderrequest)|true|none|
|» recommenderArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.StopRecommender|

> Example responses

> 200 Response

```json
{
  "recommenderArn": {}
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

<h3 id="stoprecommender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopRecommenderResponse](#schemastoprecommenderresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopSolutionVersionCreation

<a id="opIdStopSolutionVersionCreation"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.StopSolutionVersionCreation' \
  -d '{
    "solutionVersionArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation`

<p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS. </p> <p>Depending on the current state of the solution version, the solution version state changes as follows:</p> <ul> <li> <p>CREATE_PENDING &gt; CREATE_STOPPED</p> <p>or</p> </li> <li> <p>CREATE_IN_PROGRESS &gt; CREATE_STOPPING &gt; CREATE_STOPPED</p> </li> </ul> <p>You are billed for all of the training completed up until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>

> Body parameter

```json
{
  "solutionVersionArn": {}
}
```

<h3 id="stopsolutionversioncreation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StopSolutionVersionCreationRequest](#schemastopsolutionversioncreationrequest)|true|none|
|» solutionVersionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.StopSolutionVersionCreation|

> Example responses

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

<h3 id="stopsolutionversioncreation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.TagResource' \
  -d '{
    "resourceArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.TagResource`

Add a list of tags to a resource.

> Body parameter

```json
{
  "resourceArn": {},
  "tags": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» resourceArn|body|object|true|none|
|» tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.UntagResource' \
  -d '{
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.UntagResource`

Remove <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> that are attached to a resource.

> Body parameter

```json
{
  "resourceArn": {},
  "tagKeys": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» resourceArn|body|object|true|none|
|» tagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyTagKeysException|[TooManyTagKeysException](#schematoomanytagkeysexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCampaign

<a id="opIdUpdateCampaign"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.UpdateCampaign' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.UpdateCampaign' \
  -d '{
    "campaignArn": {},
    "solutionVersionArn": {},
    "minProvisionedTPS": {},
    "campaignConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.UpdateCampaign`

<p>Updates a campaign by either deploying a new solution or changing the value of the campaign's <code>minProvisionedTPS</code> parameter.</p> <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> operation.</p> <note> <p>You can still get recommendations from a campaign while an update is in progress. The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is <code>Active</code>. </p> </note> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>

> Body parameter

```json
{
  "campaignArn": {},
  "solutionVersionArn": {},
  "minProvisionedTPS": {},
  "campaignConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="updatecampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateCampaignRequest](#schemaupdatecampaignrequest)|true|none|
|» campaignArn|body|object|true|none|
|» solutionVersionArn|body|object|false|none|
|» minProvisionedTPS|body|object|false|none|
|» campaignConfig|body|object|false|none|
|» » itemExplorationConfig|body|object|false|none|
|» » » **additionalProperties**|body|[ParameterValue](#schemaparametervalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.UpdateCampaign|

> Example responses

> 200 Response

```json
{
  "campaignArn": {}
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

<h3 id="updatecampaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCampaignResponse](#schemaupdatecampaignresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMetricAttribution

<a id="opIdUpdateMetricAttribution"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.UpdateMetricAttribution' \
  -d '{
    "addMetrics": {},
    "removeMetrics": {},
    "metricsOutputConfig": {
      "s3DataDestination": {
        "path": {},
        "kmsKeyArn": {}
      },
      "roleArn": {}
    },
    "metricAttributionArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution`

Updates a metric attribution.

> Body parameter

```json
{
  "addMetrics": {},
  "removeMetrics": {},
  "metricsOutputConfig": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    },
    "roleArn": {}
  },
  "metricAttributionArn": {}
}
```

<h3 id="updatemetricattribution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateMetricAttributionRequest](#schemaupdatemetricattributionrequest)|true|none|
|» addMetrics|body|object|false|none|
|» removeMetrics|body|object|false|none|
|» metricsOutputConfig|body|object|false|none|
|» » s3DataDestination|body|[S3DataConfig](#schemas3dataconfig)|false|The configuration details of an Amazon S3 input or output bucket.|
|» » roleArn|body|object|true|none|
|» metricAttributionArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.UpdateMetricAttribution|

> Example responses

> 200 Response

```json
{
  "metricAttributionArn": {}
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

<h3 id="updatemetricattribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMetricAttributionResponse](#schemaupdatemetricattributionresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRecommender

<a id="opIdUpdateRecommender"></a>

> Code samples

```bash
curl 'https://personalize.us-east-1.amazonaws.com/#X-Amz-Target=AmazonPersonalize.UpdateRecommender' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonPersonalize.UpdateRecommender' \
  -d '{
    "recommenderArn": {},
    "recommenderConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      },
      "minRecommendationRequestsPerSecond": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonPersonalize.UpdateRecommender`

Updates the recommender to modify the recommender configuration.

> Body parameter

```json
{
  "recommenderArn": {},
  "recommenderConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    },
    "minRecommendationRequestsPerSecond": {}
  }
}
```

<h3 id="updaterecommender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateRecommenderRequest](#schemaupdaterecommenderrequest)|true|none|
|» recommenderArn|body|object|true|none|
|» recommenderConfig|body|object|true|none|
|» » itemExplorationConfig|body|object|false|none|
|» » » **additionalProperties**|body|[ParameterValue](#schemaparametervalue)|false|none|
|» » minRecommendationRequestsPerSecond|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonPersonalize.UpdateRecommender|

> Example responses

> 200 Response

```json
{
  "recommenderArn": {}
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

<h3 id="updaterecommender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRecommenderResponse](#schemaupdaterecommenderresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateBatchInferenceJobResponse">CreateBatchInferenceJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchinferencejobresponse"></a>
<a id="schema_CreateBatchInferenceJobResponse"></a>
<a id="tocScreatebatchinferencejobresponse"></a>
<a id="tocscreatebatchinferencejobresponse"></a>

```json
{
  "batchInferenceJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchInferenceJobArn|object|false|none|none|

<h2 id="tocS_CreateBatchInferenceJobRequest">CreateBatchInferenceJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchinferencejobrequest"></a>
<a id="schema_CreateBatchInferenceJobRequest"></a>
<a id="tocScreatebatchinferencejobrequest"></a>
<a id="tocscreatebatchinferencejobrequest"></a>

```json
{
  "jobName": {},
  "solutionVersionArn": {},
  "filterArn": {},
  "numResults": {},
  "jobInput": {
    "s3DataSource": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "jobOutput": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "roleArn": {},
  "batchInferenceJobConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    }
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobName|object|true|none|none|
|solutionVersionArn|object|true|none|none|
|filterArn|object|false|none|none|
|numResults|object|false|none|none|
|jobInput|object|true|none|none|
|jobOutput|object|true|none|none|
|roleArn|object|true|none|none|
|batchInferenceJobConfig|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_InvalidInputException">InvalidInputException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputexception"></a>
<a id="schema_InvalidInputException"></a>
<a id="tocSinvalidinputexception"></a>
<a id="tocsinvalidinputexception"></a>

```json
null
```

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

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

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_CreateBatchSegmentJobResponse">CreateBatchSegmentJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchsegmentjobresponse"></a>
<a id="schema_CreateBatchSegmentJobResponse"></a>
<a id="tocScreatebatchsegmentjobresponse"></a>
<a id="tocscreatebatchsegmentjobresponse"></a>

```json
{
  "batchSegmentJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchSegmentJobArn|object|false|none|none|

<h2 id="tocS_CreateBatchSegmentJobRequest">CreateBatchSegmentJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchsegmentjobrequest"></a>
<a id="schema_CreateBatchSegmentJobRequest"></a>
<a id="tocScreatebatchsegmentjobrequest"></a>
<a id="tocscreatebatchsegmentjobrequest"></a>

```json
{
  "jobName": {},
  "solutionVersionArn": {},
  "filterArn": {},
  "numResults": {},
  "jobInput": {
    "s3DataSource": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "jobOutput": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "roleArn": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobName|object|true|none|none|
|solutionVersionArn|object|true|none|none|
|filterArn|object|false|none|none|
|numResults|object|false|none|none|
|jobInput|object|true|none|none|
|jobOutput|object|true|none|none|
|roleArn|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateCampaignResponse">CreateCampaignResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecampaignresponse"></a>
<a id="schema_CreateCampaignResponse"></a>
<a id="tocScreatecampaignresponse"></a>
<a id="tocscreatecampaignresponse"></a>

```json
{
  "campaignArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignArn|object|false|none|none|

<h2 id="tocS_CreateCampaignRequest">CreateCampaignRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecampaignrequest"></a>
<a id="schema_CreateCampaignRequest"></a>
<a id="tocScreatecampaignrequest"></a>
<a id="tocscreatecampaignrequest"></a>

```json
{
  "name": {},
  "solutionVersionArn": {},
  "minProvisionedTPS": {},
  "campaignConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    }
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|solutionVersionArn|object|true|none|none|
|minProvisionedTPS|object|false|none|none|
|campaignConfig|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateDatasetResponse">CreateDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetresponse"></a>
<a id="schema_CreateDatasetResponse"></a>
<a id="tocScreatedatasetresponse"></a>
<a id="tocscreatedatasetresponse"></a>

```json
{
  "datasetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetArn|object|false|none|none|

<h2 id="tocS_CreateDatasetRequest">CreateDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetrequest"></a>
<a id="schema_CreateDatasetRequest"></a>
<a id="tocScreatedatasetrequest"></a>
<a id="tocscreatedatasetrequest"></a>

```json
{
  "name": {},
  "schemaArn": {},
  "datasetGroupArn": {},
  "datasetType": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|schemaArn|object|true|none|none|
|datasetGroupArn|object|true|none|none|
|datasetType|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateDatasetExportJobResponse">CreateDatasetExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetexportjobresponse"></a>
<a id="schema_CreateDatasetExportJobResponse"></a>
<a id="tocScreatedatasetexportjobresponse"></a>
<a id="tocscreatedatasetexportjobresponse"></a>

```json
{
  "datasetExportJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetExportJobArn|object|false|none|none|

<h2 id="tocS_CreateDatasetExportJobRequest">CreateDatasetExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetexportjobrequest"></a>
<a id="schema_CreateDatasetExportJobRequest"></a>
<a id="tocScreatedatasetexportjobrequest"></a>
<a id="tocscreatedatasetexportjobrequest"></a>

```json
{
  "jobName": {},
  "datasetArn": {},
  "ingestionMode": {},
  "roleArn": {},
  "jobOutput": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobName|object|true|none|none|
|datasetArn|object|true|none|none|
|ingestionMode|object|false|none|none|
|roleArn|object|true|none|none|
|jobOutput|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateDatasetGroupResponse">CreateDatasetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetgroupresponse"></a>
<a id="schema_CreateDatasetGroupResponse"></a>
<a id="tocScreatedatasetgroupresponse"></a>
<a id="tocscreatedatasetgroupresponse"></a>

```json
{
  "datasetGroupArn": {},
  "domain": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetGroupArn|object|false|none|none|
|domain|object|false|none|none|

<h2 id="tocS_CreateDatasetGroupRequest">CreateDatasetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetgrouprequest"></a>
<a id="schema_CreateDatasetGroupRequest"></a>
<a id="tocScreatedatasetgrouprequest"></a>
<a id="tocscreatedatasetgrouprequest"></a>

```json
{
  "name": {},
  "roleArn": {},
  "kmsKeyArn": {},
  "domain": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|roleArn|object|false|none|none|
|kmsKeyArn|object|false|none|none|
|domain|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateDatasetImportJobResponse">CreateDatasetImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetimportjobresponse"></a>
<a id="schema_CreateDatasetImportJobResponse"></a>
<a id="tocScreatedatasetimportjobresponse"></a>
<a id="tocscreatedatasetimportjobresponse"></a>

```json
{
  "datasetImportJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetImportJobArn|object|false|none|none|

<h2 id="tocS_CreateDatasetImportJobRequest">CreateDatasetImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetimportjobrequest"></a>
<a id="schema_CreateDatasetImportJobRequest"></a>
<a id="tocScreatedatasetimportjobrequest"></a>
<a id="tocscreatedatasetimportjobrequest"></a>

```json
{
  "jobName": {},
  "datasetArn": {},
  "dataSource": {
    "dataLocation": {}
  },
  "roleArn": {},
  "tags": {},
  "importMode": {},
  "publishAttributionMetricsToS3": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobName|object|true|none|none|
|datasetArn|object|true|none|none|
|dataSource|object|true|none|none|
|roleArn|object|true|none|none|
|tags|object|false|none|none|
|importMode|object|false|none|none|
|publishAttributionMetricsToS3|object|false|none|none|

<h2 id="tocS_CreateEventTrackerResponse">CreateEventTrackerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventtrackerresponse"></a>
<a id="schema_CreateEventTrackerResponse"></a>
<a id="tocScreateeventtrackerresponse"></a>
<a id="tocscreateeventtrackerresponse"></a>

```json
{
  "eventTrackerArn": {},
  "trackingId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTrackerArn|object|false|none|none|
|trackingId|object|false|none|none|

<h2 id="tocS_CreateEventTrackerRequest">CreateEventTrackerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventtrackerrequest"></a>
<a id="schema_CreateEventTrackerRequest"></a>
<a id="tocScreateeventtrackerrequest"></a>
<a id="tocscreateeventtrackerrequest"></a>

```json
{
  "name": {},
  "datasetGroupArn": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|datasetGroupArn|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateFilterResponse">CreateFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilterresponse"></a>
<a id="schema_CreateFilterResponse"></a>
<a id="tocScreatefilterresponse"></a>
<a id="tocscreatefilterresponse"></a>

```json
{
  "filterArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterArn|object|false|none|none|

<h2 id="tocS_CreateFilterRequest">CreateFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefilterrequest"></a>
<a id="schema_CreateFilterRequest"></a>
<a id="tocScreatefilterrequest"></a>
<a id="tocscreatefilterrequest"></a>

```json
{
  "name": {},
  "datasetGroupArn": {},
  "filterExpression": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|datasetGroupArn|object|true|none|none|
|filterExpression|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateMetricAttributionResponse">CreateMetricAttributionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemetricattributionresponse"></a>
<a id="schema_CreateMetricAttributionResponse"></a>
<a id="tocScreatemetricattributionresponse"></a>
<a id="tocscreatemetricattributionresponse"></a>

```json
{
  "metricAttributionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricAttributionArn|object|false|none|none|

<h2 id="tocS_CreateMetricAttributionRequest">CreateMetricAttributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemetricattributionrequest"></a>
<a id="schema_CreateMetricAttributionRequest"></a>
<a id="tocScreatemetricattributionrequest"></a>
<a id="tocscreatemetricattributionrequest"></a>

```json
{
  "name": {},
  "datasetGroupArn": {},
  "metrics": {},
  "metricsOutputConfig": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    },
    "roleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|datasetGroupArn|object|true|none|none|
|metrics|object|true|none|none|
|metricsOutputConfig|object|true|none|none|

<h2 id="tocS_CreateRecommenderResponse">CreateRecommenderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterecommenderresponse"></a>
<a id="schema_CreateRecommenderResponse"></a>
<a id="tocScreaterecommenderresponse"></a>
<a id="tocscreaterecommenderresponse"></a>

```json
{
  "recommenderArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommenderArn|object|false|none|none|

<h2 id="tocS_CreateRecommenderRequest">CreateRecommenderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterecommenderrequest"></a>
<a id="schema_CreateRecommenderRequest"></a>
<a id="tocScreaterecommenderrequest"></a>
<a id="tocscreaterecommenderrequest"></a>

```json
{
  "name": {},
  "datasetGroupArn": {},
  "recipeArn": {},
  "recommenderConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    },
    "minRecommendationRequestsPerSecond": {}
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|datasetGroupArn|object|true|none|none|
|recipeArn|object|true|none|none|
|recommenderConfig|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateSchemaResponse">CreateSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateschemaresponse"></a>
<a id="schema_CreateSchemaResponse"></a>
<a id="tocScreateschemaresponse"></a>
<a id="tocscreateschemaresponse"></a>

```json
{
  "schemaArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemaArn|object|false|none|none|

<h2 id="tocS_CreateSchemaRequest">CreateSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateschemarequest"></a>
<a id="schema_CreateSchemaRequest"></a>
<a id="tocScreateschemarequest"></a>
<a id="tocscreateschemarequest"></a>

```json
{
  "name": {},
  "schema": {},
  "domain": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|schema|object|true|none|none|
|domain|object|false|none|none|

<h2 id="tocS_CreateSolutionResponse">CreateSolutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesolutionresponse"></a>
<a id="schema_CreateSolutionResponse"></a>
<a id="tocScreatesolutionresponse"></a>
<a id="tocscreatesolutionresponse"></a>

```json
{
  "solutionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionArn|object|false|none|none|

<h2 id="tocS_CreateSolutionRequest">CreateSolutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesolutionrequest"></a>
<a id="schema_CreateSolutionRequest"></a>
<a id="tocScreatesolutionrequest"></a>
<a id="tocscreatesolutionrequest"></a>

```json
{
  "name": {},
  "performHPO": {},
  "performAutoML": {},
  "recipeArn": {},
  "datasetGroupArn": {},
  "eventType": {},
  "solutionConfig": {
    "eventValueThreshold": {},
    "hpoConfig": {
      "hpoObjective": {
        "type": {},
        "metricName": {},
        "metricRegex": {}
      },
      "hpoResourceConfig": {
        "maxNumberOfTrainingJobs": {},
        "maxParallelTrainingJobs": {}
      },
      "algorithmHyperParameterRanges": {
        "integerHyperParameterRanges": {},
        "continuousHyperParameterRanges": {},
        "categoricalHyperParameterRanges": {}
      }
    },
    "algorithmHyperParameters": {
      "property1": "string",
      "property2": "string"
    },
    "featureTransformationParameters": {
      "property1": "string",
      "property2": "string"
    },
    "autoMLConfig": {
      "metricName": {},
      "recipeList": {}
    },
    "optimizationObjective": {
      "itemAttribute": {},
      "objectiveSensitivity": {}
    }
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|performHPO|object|false|none|none|
|performAutoML|object|false|none|none|
|recipeArn|object|false|none|none|
|datasetGroupArn|object|true|none|none|
|eventType|object|false|none|none|
|solutionConfig|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateSolutionVersionResponse">CreateSolutionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesolutionversionresponse"></a>
<a id="schema_CreateSolutionVersionResponse"></a>
<a id="tocScreatesolutionversionresponse"></a>
<a id="tocscreatesolutionversionresponse"></a>

```json
{
  "solutionVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionVersionArn|object|false|none|none|

<h2 id="tocS_CreateSolutionVersionRequest">CreateSolutionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesolutionversionrequest"></a>
<a id="schema_CreateSolutionVersionRequest"></a>
<a id="tocScreatesolutionversionrequest"></a>
<a id="tocscreatesolutionversionrequest"></a>

```json
{
  "name": {},
  "solutionArn": {},
  "trainingMode": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|solutionArn|object|true|none|none|
|trainingMode|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeleteCampaignRequest">DeleteCampaignRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecampaignrequest"></a>
<a id="schema_DeleteCampaignRequest"></a>
<a id="tocSdeletecampaignrequest"></a>
<a id="tocsdeletecampaignrequest"></a>

```json
{
  "campaignArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignArn|object|true|none|none|

<h2 id="tocS_DeleteDatasetRequest">DeleteDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetrequest"></a>
<a id="schema_DeleteDatasetRequest"></a>
<a id="tocSdeletedatasetrequest"></a>
<a id="tocsdeletedatasetrequest"></a>

```json
{
  "datasetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetArn|object|true|none|none|

<h2 id="tocS_DeleteDatasetGroupRequest">DeleteDatasetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetgrouprequest"></a>
<a id="schema_DeleteDatasetGroupRequest"></a>
<a id="tocSdeletedatasetgrouprequest"></a>
<a id="tocsdeletedatasetgrouprequest"></a>

```json
{
  "datasetGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetGroupArn|object|true|none|none|

<h2 id="tocS_DeleteEventTrackerRequest">DeleteEventTrackerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventtrackerrequest"></a>
<a id="schema_DeleteEventTrackerRequest"></a>
<a id="tocSdeleteeventtrackerrequest"></a>
<a id="tocsdeleteeventtrackerrequest"></a>

```json
{
  "eventTrackerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTrackerArn|object|true|none|none|

<h2 id="tocS_DeleteFilterRequest">DeleteFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefilterrequest"></a>
<a id="schema_DeleteFilterRequest"></a>
<a id="tocSdeletefilterrequest"></a>
<a id="tocsdeletefilterrequest"></a>

```json
{
  "filterArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterArn|object|true|none|none|

<h2 id="tocS_DeleteMetricAttributionRequest">DeleteMetricAttributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemetricattributionrequest"></a>
<a id="schema_DeleteMetricAttributionRequest"></a>
<a id="tocSdeletemetricattributionrequest"></a>
<a id="tocsdeletemetricattributionrequest"></a>

```json
{
  "metricAttributionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricAttributionArn|object|true|none|none|

<h2 id="tocS_DeleteRecommenderRequest">DeleteRecommenderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterecommenderrequest"></a>
<a id="schema_DeleteRecommenderRequest"></a>
<a id="tocSdeleterecommenderrequest"></a>
<a id="tocsdeleterecommenderrequest"></a>

```json
{
  "recommenderArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommenderArn|object|true|none|none|

<h2 id="tocS_DeleteSchemaRequest">DeleteSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteschemarequest"></a>
<a id="schema_DeleteSchemaRequest"></a>
<a id="tocSdeleteschemarequest"></a>
<a id="tocsdeleteschemarequest"></a>

```json
{
  "schemaArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemaArn|object|true|none|none|

<h2 id="tocS_DeleteSolutionRequest">DeleteSolutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesolutionrequest"></a>
<a id="schema_DeleteSolutionRequest"></a>
<a id="tocSdeletesolutionrequest"></a>
<a id="tocsdeletesolutionrequest"></a>

```json
{
  "solutionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionArn|object|true|none|none|

<h2 id="tocS_DescribeAlgorithmResponse">DescribeAlgorithmResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribealgorithmresponse"></a>
<a id="schema_DescribeAlgorithmResponse"></a>
<a id="tocSdescribealgorithmresponse"></a>
<a id="tocsdescribealgorithmresponse"></a>

```json
{
  "algorithm": {
    "name": {},
    "algorithmArn": {},
    "algorithmImage": {
      "name": {},
      "dockerURI": {}
    },
    "defaultHyperParameters": {
      "property1": "string",
      "property2": "string"
    },
    "defaultHyperParameterRanges": {
      "integerHyperParameterRanges": {},
      "continuousHyperParameterRanges": {},
      "categoricalHyperParameterRanges": {}
    },
    "defaultResourceConfig": {
      "property1": "string",
      "property2": "string"
    },
    "trainingInputMode": {},
    "roleArn": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|object|false|none|none|

<h2 id="tocS_DescribeAlgorithmRequest">DescribeAlgorithmRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribealgorithmrequest"></a>
<a id="schema_DescribeAlgorithmRequest"></a>
<a id="tocSdescribealgorithmrequest"></a>
<a id="tocsdescribealgorithmrequest"></a>

```json
{
  "algorithmArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithmArn|object|true|none|none|

<h2 id="tocS_DescribeBatchInferenceJobResponse">DescribeBatchInferenceJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebatchinferencejobresponse"></a>
<a id="schema_DescribeBatchInferenceJobResponse"></a>
<a id="tocSdescribebatchinferencejobresponse"></a>
<a id="tocsdescribebatchinferencejobresponse"></a>

```json
{
  "batchInferenceJob": {
    "jobName": {},
    "batchInferenceJobArn": {},
    "filterArn": {},
    "failureReason": {},
    "solutionVersionArn": {},
    "numResults": {},
    "jobInput": {
      "s3DataSource": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "jobOutput": {
      "s3DataDestination": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "batchInferenceJobConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      }
    },
    "roleArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchInferenceJob|object|false|none|none|

<h2 id="tocS_DescribeBatchInferenceJobRequest">DescribeBatchInferenceJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebatchinferencejobrequest"></a>
<a id="schema_DescribeBatchInferenceJobRequest"></a>
<a id="tocSdescribebatchinferencejobrequest"></a>
<a id="tocsdescribebatchinferencejobrequest"></a>

```json
{
  "batchInferenceJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchInferenceJobArn|object|true|none|none|

<h2 id="tocS_DescribeBatchSegmentJobResponse">DescribeBatchSegmentJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebatchsegmentjobresponse"></a>
<a id="schema_DescribeBatchSegmentJobResponse"></a>
<a id="tocSdescribebatchsegmentjobresponse"></a>
<a id="tocsdescribebatchsegmentjobresponse"></a>

```json
{
  "batchSegmentJob": {
    "jobName": {},
    "batchSegmentJobArn": {},
    "filterArn": {},
    "failureReason": {},
    "solutionVersionArn": {},
    "numResults": {},
    "jobInput": {
      "s3DataSource": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "jobOutput": {
      "s3DataDestination": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "roleArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchSegmentJob|object|false|none|none|

<h2 id="tocS_DescribeBatchSegmentJobRequest">DescribeBatchSegmentJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebatchsegmentjobrequest"></a>
<a id="schema_DescribeBatchSegmentJobRequest"></a>
<a id="tocSdescribebatchsegmentjobrequest"></a>
<a id="tocsdescribebatchsegmentjobrequest"></a>

```json
{
  "batchSegmentJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchSegmentJobArn|object|true|none|none|

<h2 id="tocS_DescribeCampaignResponse">DescribeCampaignResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecampaignresponse"></a>
<a id="schema_DescribeCampaignResponse"></a>
<a id="tocSdescribecampaignresponse"></a>
<a id="tocsdescribecampaignresponse"></a>

```json
{
  "campaign": {
    "name": {},
    "campaignArn": {},
    "solutionVersionArn": {},
    "minProvisionedTPS": {},
    "campaignConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      }
    },
    "status": {},
    "failureReason": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "latestCampaignUpdate": {
      "solutionVersionArn": {},
      "minProvisionedTPS": {},
      "campaignConfig": {
        "itemExplorationConfig": {
          "property1": "string",
          "property2": "string"
        }
      },
      "status": {},
      "failureReason": {},
      "creationDateTime": {},
      "lastUpdatedDateTime": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaign|object|false|none|none|

<h2 id="tocS_DescribeCampaignRequest">DescribeCampaignRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecampaignrequest"></a>
<a id="schema_DescribeCampaignRequest"></a>
<a id="tocSdescribecampaignrequest"></a>
<a id="tocsdescribecampaignrequest"></a>

```json
{
  "campaignArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignArn|object|true|none|none|

<h2 id="tocS_DescribeDatasetResponse">DescribeDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetresponse"></a>
<a id="schema_DescribeDatasetResponse"></a>
<a id="tocSdescribedatasetresponse"></a>
<a id="tocsdescribedatasetresponse"></a>

```json
{
  "dataset": {
    "name": {},
    "datasetArn": {},
    "datasetGroupArn": {},
    "datasetType": {},
    "schemaArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|object|false|none|none|

<h2 id="tocS_DescribeDatasetRequest">DescribeDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetrequest"></a>
<a id="schema_DescribeDatasetRequest"></a>
<a id="tocSdescribedatasetrequest"></a>
<a id="tocsdescribedatasetrequest"></a>

```json
{
  "datasetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetArn|object|true|none|none|

<h2 id="tocS_DescribeDatasetExportJobResponse">DescribeDatasetExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetexportjobresponse"></a>
<a id="schema_DescribeDatasetExportJobResponse"></a>
<a id="tocSdescribedatasetexportjobresponse"></a>
<a id="tocsdescribedatasetexportjobresponse"></a>

```json
{
  "datasetExportJob": {
    "jobName": {},
    "datasetExportJobArn": {},
    "datasetArn": {},
    "ingestionMode": {},
    "roleArn": {},
    "status": {},
    "jobOutput": {
      "s3DataDestination": {
        "path": {},
        "kmsKeyArn": {}
      }
    },
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetExportJob|object|false|none|none|

<h2 id="tocS_DescribeDatasetExportJobRequest">DescribeDatasetExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetexportjobrequest"></a>
<a id="schema_DescribeDatasetExportJobRequest"></a>
<a id="tocSdescribedatasetexportjobrequest"></a>
<a id="tocsdescribedatasetexportjobrequest"></a>

```json
{
  "datasetExportJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetExportJobArn|object|true|none|none|

<h2 id="tocS_DescribeDatasetGroupResponse">DescribeDatasetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetgroupresponse"></a>
<a id="schema_DescribeDatasetGroupResponse"></a>
<a id="tocSdescribedatasetgroupresponse"></a>
<a id="tocsdescribedatasetgroupresponse"></a>

```json
{
  "datasetGroup": {
    "name": {},
    "datasetGroupArn": {},
    "status": {},
    "roleArn": {},
    "kmsKeyArn": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {},
    "domain": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetGroup|object|false|none|none|

<h2 id="tocS_DescribeDatasetGroupRequest">DescribeDatasetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetgrouprequest"></a>
<a id="schema_DescribeDatasetGroupRequest"></a>
<a id="tocSdescribedatasetgrouprequest"></a>
<a id="tocsdescribedatasetgrouprequest"></a>

```json
{
  "datasetGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetGroupArn|object|true|none|none|

<h2 id="tocS_DescribeDatasetImportJobResponse">DescribeDatasetImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetimportjobresponse"></a>
<a id="schema_DescribeDatasetImportJobResponse"></a>
<a id="tocSdescribedatasetimportjobresponse"></a>
<a id="tocsdescribedatasetimportjobresponse"></a>

```json
{
  "datasetImportJob": {
    "jobName": {},
    "datasetImportJobArn": {},
    "datasetArn": {},
    "dataSource": {
      "dataLocation": {}
    },
    "roleArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {},
    "importMode": {},
    "publishAttributionMetricsToS3": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetImportJob|object|false|none|none|

<h2 id="tocS_DescribeDatasetImportJobRequest">DescribeDatasetImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetimportjobrequest"></a>
<a id="schema_DescribeDatasetImportJobRequest"></a>
<a id="tocSdescribedatasetimportjobrequest"></a>
<a id="tocsdescribedatasetimportjobrequest"></a>

```json
{
  "datasetImportJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetImportJobArn|object|true|none|none|

<h2 id="tocS_DescribeEventTrackerResponse">DescribeEventTrackerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventtrackerresponse"></a>
<a id="schema_DescribeEventTrackerResponse"></a>
<a id="tocSdescribeeventtrackerresponse"></a>
<a id="tocsdescribeeventtrackerresponse"></a>

```json
{
  "eventTracker": {
    "name": {},
    "eventTrackerArn": {},
    "accountId": {},
    "trackingId": {},
    "datasetGroupArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTracker|object|false|none|none|

<h2 id="tocS_DescribeEventTrackerRequest">DescribeEventTrackerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventtrackerrequest"></a>
<a id="schema_DescribeEventTrackerRequest"></a>
<a id="tocSdescribeeventtrackerrequest"></a>
<a id="tocsdescribeeventtrackerrequest"></a>

```json
{
  "eventTrackerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTrackerArn|object|true|none|none|

<h2 id="tocS_DescribeFeatureTransformationResponse">DescribeFeatureTransformationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefeaturetransformationresponse"></a>
<a id="schema_DescribeFeatureTransformationResponse"></a>
<a id="tocSdescribefeaturetransformationresponse"></a>
<a id="tocsdescribefeaturetransformationresponse"></a>

```json
{
  "featureTransformation": {
    "name": {},
    "featureTransformationArn": {},
    "defaultParameters": {
      "property1": "string",
      "property2": "string"
    },
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featureTransformation|object|false|none|none|

<h2 id="tocS_DescribeFeatureTransformationRequest">DescribeFeatureTransformationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefeaturetransformationrequest"></a>
<a id="schema_DescribeFeatureTransformationRequest"></a>
<a id="tocSdescribefeaturetransformationrequest"></a>
<a id="tocsdescribefeaturetransformationrequest"></a>

```json
{
  "featureTransformationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featureTransformationArn|object|true|none|none|

<h2 id="tocS_DescribeFilterResponse">DescribeFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefilterresponse"></a>
<a id="schema_DescribeFilterResponse"></a>
<a id="tocSdescribefilterresponse"></a>
<a id="tocsdescribefilterresponse"></a>

```json
{
  "filter": {
    "name": {},
    "filterArn": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "datasetGroupArn": {},
    "failureReason": {},
    "filterExpression": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|false|none|none|

<h2 id="tocS_DescribeFilterRequest">DescribeFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefilterrequest"></a>
<a id="schema_DescribeFilterRequest"></a>
<a id="tocSdescribefilterrequest"></a>
<a id="tocsdescribefilterrequest"></a>

```json
{
  "filterArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterArn|object|true|none|none|

<h2 id="tocS_DescribeMetricAttributionResponse">DescribeMetricAttributionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemetricattributionresponse"></a>
<a id="schema_DescribeMetricAttributionResponse"></a>
<a id="tocSdescribemetricattributionresponse"></a>
<a id="tocsdescribemetricattributionresponse"></a>

```json
{
  "metricAttribution": {
    "name": {},
    "metricAttributionArn": {},
    "datasetGroupArn": {},
    "metricsOutputConfig": {
      "s3DataDestination": {
        "path": {},
        "kmsKeyArn": {}
      },
      "roleArn": {}
    },
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricAttribution|object|false|none|none|

<h2 id="tocS_DescribeMetricAttributionRequest">DescribeMetricAttributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemetricattributionrequest"></a>
<a id="schema_DescribeMetricAttributionRequest"></a>
<a id="tocSdescribemetricattributionrequest"></a>
<a id="tocsdescribemetricattributionrequest"></a>

```json
{
  "metricAttributionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricAttributionArn|object|true|none|none|

<h2 id="tocS_DescribeRecipeResponse">DescribeRecipeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereciperesponse"></a>
<a id="schema_DescribeRecipeResponse"></a>
<a id="tocSdescribereciperesponse"></a>
<a id="tocsdescribereciperesponse"></a>

```json
{
  "recipe": {
    "name": {},
    "recipeArn": {},
    "algorithmArn": {},
    "featureTransformationArn": {},
    "status": {},
    "description": {},
    "creationDateTime": {},
    "recipeType": {},
    "lastUpdatedDateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipe|object|false|none|none|

<h2 id="tocS_DescribeRecipeRequest">DescribeRecipeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribereciperequest"></a>
<a id="schema_DescribeRecipeRequest"></a>
<a id="tocSdescribereciperequest"></a>
<a id="tocsdescribereciperequest"></a>

```json
{
  "recipeArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipeArn|object|true|none|none|

<h2 id="tocS_DescribeRecommenderResponse">DescribeRecommenderResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecommenderresponse"></a>
<a id="schema_DescribeRecommenderResponse"></a>
<a id="tocSdescriberecommenderresponse"></a>
<a id="tocsdescriberecommenderresponse"></a>

```json
{
  "recommender": {
    "recommenderArn": {},
    "datasetGroupArn": {},
    "name": {},
    "recipeArn": {},
    "recommenderConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      },
      "minRecommendationRequestsPerSecond": {}
    },
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "status": {},
    "failureReason": {},
    "latestRecommenderUpdate": {
      "recommenderConfig": {
        "itemExplorationConfig": {
          "property1": "string",
          "property2": "string"
        },
        "minRecommendationRequestsPerSecond": {}
      },
      "creationDateTime": {},
      "lastUpdatedDateTime": {},
      "status": {},
      "failureReason": {}
    },
    "modelMetrics": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommender|object|false|none|none|

<h2 id="tocS_DescribeRecommenderRequest">DescribeRecommenderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecommenderrequest"></a>
<a id="schema_DescribeRecommenderRequest"></a>
<a id="tocSdescriberecommenderrequest"></a>
<a id="tocsdescriberecommenderrequest"></a>

```json
{
  "recommenderArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommenderArn|object|true|none|none|

<h2 id="tocS_DescribeSchemaResponse">DescribeSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeschemaresponse"></a>
<a id="schema_DescribeSchemaResponse"></a>
<a id="tocSdescribeschemaresponse"></a>
<a id="tocsdescribeschemaresponse"></a>

```json
{
  "schema": {
    "name": {},
    "schemaArn": {},
    "schema": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "domain": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schema|object|false|none|none|

<h2 id="tocS_DescribeSchemaRequest">DescribeSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeschemarequest"></a>
<a id="schema_DescribeSchemaRequest"></a>
<a id="tocSdescribeschemarequest"></a>
<a id="tocsdescribeschemarequest"></a>

```json
{
  "schemaArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemaArn|object|true|none|none|

<h2 id="tocS_DescribeSolutionResponse">DescribeSolutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesolutionresponse"></a>
<a id="schema_DescribeSolutionResponse"></a>
<a id="tocSdescribesolutionresponse"></a>
<a id="tocsdescribesolutionresponse"></a>

```json
{
  "solution": {
    "name": {},
    "solutionArn": {},
    "performHPO": {},
    "performAutoML": {},
    "recipeArn": {},
    "datasetGroupArn": {},
    "eventType": {},
    "solutionConfig": {
      "eventValueThreshold": {},
      "hpoConfig": {
        "hpoObjective": {
          "type": {},
          "metricName": {},
          "metricRegex": {}
        },
        "hpoResourceConfig": {
          "maxNumberOfTrainingJobs": {},
          "maxParallelTrainingJobs": {}
        },
        "algorithmHyperParameterRanges": {
          "integerHyperParameterRanges": {},
          "continuousHyperParameterRanges": {},
          "categoricalHyperParameterRanges": {}
        }
      },
      "algorithmHyperParameters": {
        "property1": "string",
        "property2": "string"
      },
      "featureTransformationParameters": {
        "property1": "string",
        "property2": "string"
      },
      "autoMLConfig": {
        "metricName": {},
        "recipeList": {}
      },
      "optimizationObjective": {
        "itemAttribute": {},
        "objectiveSensitivity": {}
      }
    },
    "autoMLResult": {
      "bestRecipeArn": {}
    },
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "latestSolutionVersion": {
      "solutionVersionArn": {},
      "status": {},
      "creationDateTime": {},
      "lastUpdatedDateTime": {},
      "failureReason": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solution|object|false|none|none|

<h2 id="tocS_DescribeSolutionRequest">DescribeSolutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesolutionrequest"></a>
<a id="schema_DescribeSolutionRequest"></a>
<a id="tocSdescribesolutionrequest"></a>
<a id="tocsdescribesolutionrequest"></a>

```json
{
  "solutionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionArn|object|true|none|none|

<h2 id="tocS_DescribeSolutionVersionResponse">DescribeSolutionVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesolutionversionresponse"></a>
<a id="schema_DescribeSolutionVersionResponse"></a>
<a id="tocSdescribesolutionversionresponse"></a>
<a id="tocsdescribesolutionversionresponse"></a>

```json
{
  "solutionVersion": {
    "name": {},
    "solutionVersionArn": {},
    "solutionArn": {},
    "performHPO": {},
    "performAutoML": {},
    "recipeArn": {},
    "eventType": {},
    "datasetGroupArn": {},
    "solutionConfig": {
      "eventValueThreshold": {},
      "hpoConfig": {
        "hpoObjective": {
          "type": {},
          "metricName": {},
          "metricRegex": {}
        },
        "hpoResourceConfig": {
          "maxNumberOfTrainingJobs": {},
          "maxParallelTrainingJobs": {}
        },
        "algorithmHyperParameterRanges": {
          "integerHyperParameterRanges": {},
          "continuousHyperParameterRanges": {},
          "categoricalHyperParameterRanges": {}
        }
      },
      "algorithmHyperParameters": {
        "property1": "string",
        "property2": "string"
      },
      "featureTransformationParameters": {
        "property1": "string",
        "property2": "string"
      },
      "autoMLConfig": {
        "metricName": {},
        "recipeList": {}
      },
      "optimizationObjective": {
        "itemAttribute": {},
        "objectiveSensitivity": {}
      }
    },
    "trainingHours": {},
    "trainingMode": {},
    "tunedHPOParams": {
      "algorithmHyperParameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "status": {},
    "failureReason": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionVersion|object|false|none|none|

<h2 id="tocS_DescribeSolutionVersionRequest">DescribeSolutionVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesolutionversionrequest"></a>
<a id="schema_DescribeSolutionVersionRequest"></a>
<a id="tocSdescribesolutionversionrequest"></a>
<a id="tocsdescribesolutionversionrequest"></a>

```json
{
  "solutionVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionVersionArn|object|true|none|none|

<h2 id="tocS_GetSolutionMetricsResponse">GetSolutionMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsolutionmetricsresponse"></a>
<a id="schema_GetSolutionMetricsResponse"></a>
<a id="tocSgetsolutionmetricsresponse"></a>
<a id="tocsgetsolutionmetricsresponse"></a>

```json
{
  "solutionVersionArn": {},
  "metrics": {
    "property1": 0,
    "property2": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionVersionArn|object|false|none|none|
|metrics|object|false|none|none|

<h2 id="tocS_GetSolutionMetricsRequest">GetSolutionMetricsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsolutionmetricsrequest"></a>
<a id="schema_GetSolutionMetricsRequest"></a>
<a id="tocSgetsolutionmetricsrequest"></a>
<a id="tocsgetsolutionmetricsrequest"></a>

```json
{
  "solutionVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionVersionArn|object|true|none|none|

<h2 id="tocS_ListBatchInferenceJobsResponse">ListBatchInferenceJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbatchinferencejobsresponse"></a>
<a id="schema_ListBatchInferenceJobsResponse"></a>
<a id="tocSlistbatchinferencejobsresponse"></a>
<a id="tocslistbatchinferencejobsresponse"></a>

```json
{
  "batchInferenceJobs": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchInferenceJobs|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListBatchInferenceJobsRequest">ListBatchInferenceJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbatchinferencejobsrequest"></a>
<a id="schema_ListBatchInferenceJobsRequest"></a>
<a id="tocSlistbatchinferencejobsrequest"></a>
<a id="tocslistbatchinferencejobsrequest"></a>

```json
{
  "solutionVersionArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionVersionArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListBatchSegmentJobsResponse">ListBatchSegmentJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbatchsegmentjobsresponse"></a>
<a id="schema_ListBatchSegmentJobsResponse"></a>
<a id="tocSlistbatchsegmentjobsresponse"></a>
<a id="tocslistbatchsegmentjobsresponse"></a>

```json
{
  "batchSegmentJobs": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchSegmentJobs|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListBatchSegmentJobsRequest">ListBatchSegmentJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbatchsegmentjobsrequest"></a>
<a id="schema_ListBatchSegmentJobsRequest"></a>
<a id="tocSlistbatchsegmentjobsrequest"></a>
<a id="tocslistbatchsegmentjobsrequest"></a>

```json
{
  "solutionVersionArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionVersionArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListCampaignsResponse">ListCampaignsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcampaignsresponse"></a>
<a id="schema_ListCampaignsResponse"></a>
<a id="tocSlistcampaignsresponse"></a>
<a id="tocslistcampaignsresponse"></a>

```json
{
  "campaigns": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaigns|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListCampaignsRequest">ListCampaignsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcampaignsrequest"></a>
<a id="schema_ListCampaignsRequest"></a>
<a id="tocSlistcampaignsrequest"></a>
<a id="tocslistcampaignsrequest"></a>

```json
{
  "solutionArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListDatasetExportJobsResponse">ListDatasetExportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetexportjobsresponse"></a>
<a id="schema_ListDatasetExportJobsResponse"></a>
<a id="tocSlistdatasetexportjobsresponse"></a>
<a id="tocslistdatasetexportjobsresponse"></a>

```json
{
  "datasetExportJobs": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetExportJobs|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDatasetExportJobsRequest">ListDatasetExportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetexportjobsrequest"></a>
<a id="schema_ListDatasetExportJobsRequest"></a>
<a id="tocSlistdatasetexportjobsrequest"></a>
<a id="tocslistdatasetexportjobsrequest"></a>

```json
{
  "datasetArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListDatasetGroupsResponse">ListDatasetGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetgroupsresponse"></a>
<a id="schema_ListDatasetGroupsResponse"></a>
<a id="tocSlistdatasetgroupsresponse"></a>
<a id="tocslistdatasetgroupsresponse"></a>

```json
{
  "datasetGroups": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetGroups|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDatasetGroupsRequest">ListDatasetGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetgroupsrequest"></a>
<a id="schema_ListDatasetGroupsRequest"></a>
<a id="tocSlistdatasetgroupsrequest"></a>
<a id="tocslistdatasetgroupsrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListDatasetImportJobsResponse">ListDatasetImportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetimportjobsresponse"></a>
<a id="schema_ListDatasetImportJobsResponse"></a>
<a id="tocSlistdatasetimportjobsresponse"></a>
<a id="tocslistdatasetimportjobsresponse"></a>

```json
{
  "datasetImportJobs": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetImportJobs|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDatasetImportJobsRequest">ListDatasetImportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetimportjobsrequest"></a>
<a id="schema_ListDatasetImportJobsRequest"></a>
<a id="tocSlistdatasetimportjobsrequest"></a>
<a id="tocslistdatasetimportjobsrequest"></a>

```json
{
  "datasetArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListDatasetsResponse">ListDatasetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsresponse"></a>
<a id="schema_ListDatasetsResponse"></a>
<a id="tocSlistdatasetsresponse"></a>
<a id="tocslistdatasetsresponse"></a>

```json
{
  "datasets": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasets|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDatasetsRequest">ListDatasetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsrequest"></a>
<a id="schema_ListDatasetsRequest"></a>
<a id="tocSlistdatasetsrequest"></a>
<a id="tocslistdatasetsrequest"></a>

```json
{
  "datasetGroupArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetGroupArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListEventTrackersResponse">ListEventTrackersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventtrackersresponse"></a>
<a id="schema_ListEventTrackersResponse"></a>
<a id="tocSlisteventtrackersresponse"></a>
<a id="tocslisteventtrackersresponse"></a>

```json
{
  "eventTrackers": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTrackers|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListEventTrackersRequest">ListEventTrackersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteventtrackersrequest"></a>
<a id="schema_ListEventTrackersRequest"></a>
<a id="tocSlisteventtrackersrequest"></a>
<a id="tocslisteventtrackersrequest"></a>

```json
{
  "datasetGroupArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetGroupArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListFiltersResponse">ListFiltersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfiltersresponse"></a>
<a id="schema_ListFiltersResponse"></a>
<a id="tocSlistfiltersresponse"></a>
<a id="tocslistfiltersresponse"></a>

```json
{
  "Filters": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListFiltersRequest">ListFiltersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfiltersrequest"></a>
<a id="schema_ListFiltersRequest"></a>
<a id="tocSlistfiltersrequest"></a>
<a id="tocslistfiltersrequest"></a>

```json
{
  "datasetGroupArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetGroupArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListMetricAttributionMetricsResponse">ListMetricAttributionMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmetricattributionmetricsresponse"></a>
<a id="schema_ListMetricAttributionMetricsResponse"></a>
<a id="tocSlistmetricattributionmetricsresponse"></a>
<a id="tocslistmetricattributionmetricsresponse"></a>

```json
{
  "metrics": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListMetricAttributionMetricsRequest">ListMetricAttributionMetricsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmetricattributionmetricsrequest"></a>
<a id="schema_ListMetricAttributionMetricsRequest"></a>
<a id="tocSlistmetricattributionmetricsrequest"></a>
<a id="tocslistmetricattributionmetricsrequest"></a>

```json
{
  "metricAttributionArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricAttributionArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListMetricAttributionsResponse">ListMetricAttributionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmetricattributionsresponse"></a>
<a id="schema_ListMetricAttributionsResponse"></a>
<a id="tocSlistmetricattributionsresponse"></a>
<a id="tocslistmetricattributionsresponse"></a>

```json
{
  "metricAttributions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricAttributions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListMetricAttributionsRequest">ListMetricAttributionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmetricattributionsrequest"></a>
<a id="schema_ListMetricAttributionsRequest"></a>
<a id="tocSlistmetricattributionsrequest"></a>
<a id="tocslistmetricattributionsrequest"></a>

```json
{
  "datasetGroupArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetGroupArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListRecipesResponse">ListRecipesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrecipesresponse"></a>
<a id="schema_ListRecipesResponse"></a>
<a id="tocSlistrecipesresponse"></a>
<a id="tocslistrecipesresponse"></a>

```json
{
  "recipes": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipes|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRecipesRequest">ListRecipesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrecipesrequest"></a>
<a id="schema_ListRecipesRequest"></a>
<a id="tocSlistrecipesrequest"></a>
<a id="tocslistrecipesrequest"></a>

```json
{
  "recipeProvider": {},
  "nextToken": {},
  "maxResults": {},
  "domain": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipeProvider|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|domain|object|false|none|none|

<h2 id="tocS_ListRecommendersResponse">ListRecommendersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendersresponse"></a>
<a id="schema_ListRecommendersResponse"></a>
<a id="tocSlistrecommendersresponse"></a>
<a id="tocslistrecommendersresponse"></a>

```json
{
  "recommenders": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommenders|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRecommendersRequest">ListRecommendersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendersrequest"></a>
<a id="schema_ListRecommendersRequest"></a>
<a id="tocSlistrecommendersrequest"></a>
<a id="tocslistrecommendersrequest"></a>

```json
{
  "datasetGroupArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetGroupArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListSchemasResponse">ListSchemasResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistschemasresponse"></a>
<a id="schema_ListSchemasResponse"></a>
<a id="tocSlistschemasresponse"></a>
<a id="tocslistschemasresponse"></a>

```json
{
  "schemas": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSchemasRequest">ListSchemasRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistschemasrequest"></a>
<a id="schema_ListSchemasRequest"></a>
<a id="tocSlistschemasrequest"></a>
<a id="tocslistschemasrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListSolutionVersionsResponse">ListSolutionVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsolutionversionsresponse"></a>
<a id="schema_ListSolutionVersionsResponse"></a>
<a id="tocSlistsolutionversionsresponse"></a>
<a id="tocslistsolutionversionsresponse"></a>

```json
{
  "solutionVersions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionVersions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSolutionVersionsRequest">ListSolutionVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsolutionversionsrequest"></a>
<a id="schema_ListSolutionVersionsRequest"></a>
<a id="tocSlistsolutionversionsrequest"></a>
<a id="tocslistsolutionversionsrequest"></a>

```json
{
  "solutionArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListSolutionsResponse">ListSolutionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsolutionsresponse"></a>
<a id="schema_ListSolutionsResponse"></a>
<a id="tocSlistsolutionsresponse"></a>
<a id="tocslistsolutionsresponse"></a>

```json
{
  "solutions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSolutionsRequest">ListSolutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsolutionsrequest"></a>
<a id="schema_ListSolutionsRequest"></a>
<a id="tocSlistsolutionsrequest"></a>
<a id="tocslistsolutionsrequest"></a>

```json
{
  "datasetGroupArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetGroupArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|

<h2 id="tocS_StartRecommenderResponse">StartRecommenderResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartrecommenderresponse"></a>
<a id="schema_StartRecommenderResponse"></a>
<a id="tocSstartrecommenderresponse"></a>
<a id="tocsstartrecommenderresponse"></a>

```json
{
  "recommenderArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommenderArn|object|false|none|none|

<h2 id="tocS_StartRecommenderRequest">StartRecommenderRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartrecommenderrequest"></a>
<a id="schema_StartRecommenderRequest"></a>
<a id="tocSstartrecommenderrequest"></a>
<a id="tocsstartrecommenderrequest"></a>

```json
{
  "recommenderArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommenderArn|object|true|none|none|

<h2 id="tocS_StopRecommenderResponse">StopRecommenderResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoprecommenderresponse"></a>
<a id="schema_StopRecommenderResponse"></a>
<a id="tocSstoprecommenderresponse"></a>
<a id="tocsstoprecommenderresponse"></a>

```json
{
  "recommenderArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommenderArn|object|false|none|none|

<h2 id="tocS_StopRecommenderRequest">StopRecommenderRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoprecommenderrequest"></a>
<a id="schema_StopRecommenderRequest"></a>
<a id="tocSstoprecommenderrequest"></a>
<a id="tocsstoprecommenderrequest"></a>

```json
{
  "recommenderArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommenderArn|object|true|none|none|

<h2 id="tocS_StopSolutionVersionCreationRequest">StopSolutionVersionCreationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopsolutionversioncreationrequest"></a>
<a id="schema_StopSolutionVersionCreationRequest"></a>
<a id="tocSstopsolutionversioncreationrequest"></a>
<a id="tocsstopsolutionversioncreationrequest"></a>

```json
{
  "solutionVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionVersionArn|object|true|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "resourceArn": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "resourceArn": {},
  "tagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tagKeys|object|true|none|none|

<h2 id="tocS_TooManyTagKeysException">TooManyTagKeysException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagkeysexception"></a>
<a id="schema_TooManyTagKeysException"></a>
<a id="tocStoomanytagkeysexception"></a>
<a id="tocstoomanytagkeysexception"></a>

```json
null
```

<h2 id="tocS_UpdateCampaignResponse">UpdateCampaignResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecampaignresponse"></a>
<a id="schema_UpdateCampaignResponse"></a>
<a id="tocSupdatecampaignresponse"></a>
<a id="tocsupdatecampaignresponse"></a>

```json
{
  "campaignArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignArn|object|false|none|none|

<h2 id="tocS_UpdateCampaignRequest">UpdateCampaignRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecampaignrequest"></a>
<a id="schema_UpdateCampaignRequest"></a>
<a id="tocSupdatecampaignrequest"></a>
<a id="tocsupdatecampaignrequest"></a>

```json
{
  "campaignArn": {},
  "solutionVersionArn": {},
  "minProvisionedTPS": {},
  "campaignConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignArn|object|true|none|none|
|solutionVersionArn|object|false|none|none|
|minProvisionedTPS|object|false|none|none|
|campaignConfig|object|false|none|none|

<h2 id="tocS_UpdateMetricAttributionResponse">UpdateMetricAttributionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemetricattributionresponse"></a>
<a id="schema_UpdateMetricAttributionResponse"></a>
<a id="tocSupdatemetricattributionresponse"></a>
<a id="tocsupdatemetricattributionresponse"></a>

```json
{
  "metricAttributionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricAttributionArn|object|false|none|none|

<h2 id="tocS_UpdateMetricAttributionRequest">UpdateMetricAttributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemetricattributionrequest"></a>
<a id="schema_UpdateMetricAttributionRequest"></a>
<a id="tocSupdatemetricattributionrequest"></a>
<a id="tocsupdatemetricattributionrequest"></a>

```json
{
  "addMetrics": {},
  "removeMetrics": {},
  "metricsOutputConfig": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    },
    "roleArn": {}
  },
  "metricAttributionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addMetrics|object|false|none|none|
|removeMetrics|object|false|none|none|
|metricsOutputConfig|object|false|none|none|
|metricAttributionArn|object|false|none|none|

<h2 id="tocS_UpdateRecommenderResponse">UpdateRecommenderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterecommenderresponse"></a>
<a id="schema_UpdateRecommenderResponse"></a>
<a id="tocSupdaterecommenderresponse"></a>
<a id="tocsupdaterecommenderresponse"></a>

```json
{
  "recommenderArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommenderArn|object|false|none|none|

<h2 id="tocS_UpdateRecommenderRequest">UpdateRecommenderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterecommenderrequest"></a>
<a id="schema_UpdateRecommenderRequest"></a>
<a id="tocSupdaterecommenderrequest"></a>
<a id="tocsupdaterecommenderrequest"></a>

```json
{
  "recommenderArn": {},
  "recommenderConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    },
    "minRecommendationRequestsPerSecond": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommenderArn|object|true|none|none|
|recommenderConfig|object|true|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AlgorithmImage">AlgorithmImage</h2>
<!-- backwards compatibility -->
<a id="schemaalgorithmimage"></a>
<a id="schema_AlgorithmImage"></a>
<a id="tocSalgorithmimage"></a>
<a id="tocsalgorithmimage"></a>

```json
{
  "name": {},
  "dockerURI": {}
}
```

Describes an algorithm image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|dockerURI|object|true|none|none|

<h2 id="tocS_HyperParameters">HyperParameters</h2>
<!-- backwards compatibility -->
<a id="schemahyperparameters"></a>
<a id="schema_HyperParameters"></a>
<a id="tocShyperparameters"></a>
<a id="tocshyperparameters"></a>

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

<h2 id="tocS_DefaultHyperParameterRanges">DefaultHyperParameterRanges</h2>
<!-- backwards compatibility -->
<a id="schemadefaulthyperparameterranges"></a>
<a id="schema_DefaultHyperParameterRanges"></a>
<a id="tocSdefaulthyperparameterranges"></a>
<a id="tocsdefaulthyperparameterranges"></a>

```json
{
  "integerHyperParameterRanges": {},
  "continuousHyperParameterRanges": {},
  "categoricalHyperParameterRanges": {}
}
```

Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integerHyperParameterRanges|object|false|none|none|
|continuousHyperParameterRanges|object|false|none|none|
|categoricalHyperParameterRanges|object|false|none|none|

<h2 id="tocS_ResourceConfig">ResourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresourceconfig"></a>
<a id="schema_ResourceConfig"></a>
<a id="tocSresourceconfig"></a>
<a id="tocsresourceconfig"></a>

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

<h2 id="tocS_TrainingInputMode">TrainingInputMode</h2>
<!-- backwards compatibility -->
<a id="schematraininginputmode"></a>
<a id="schema_TrainingInputMode"></a>
<a id="tocStraininginputmode"></a>
<a id="tocstraininginputmode"></a>

```json
"string"
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

<h2 id="tocS_Algorithm">Algorithm</h2>
<!-- backwards compatibility -->
<a id="schemaalgorithm"></a>
<a id="schema_Algorithm"></a>
<a id="tocSalgorithm"></a>
<a id="tocsalgorithm"></a>

```json
{
  "name": {},
  "algorithmArn": {},
  "algorithmImage": {
    "name": {},
    "dockerURI": {}
  },
  "defaultHyperParameters": {
    "property1": "string",
    "property2": "string"
  },
  "defaultHyperParameterRanges": {
    "integerHyperParameterRanges": {},
    "continuousHyperParameterRanges": {},
    "categoricalHyperParameterRanges": {}
  },
  "defaultResourceConfig": {
    "property1": "string",
    "property2": "string"
  },
  "trainingInputMode": {},
  "roleArn": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {}
}
```

Describes a custom algorithm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|algorithmArn|object|false|none|none|
|algorithmImage|object|false|none|none|
|defaultHyperParameters|object|false|none|none|
|defaultHyperParameterRanges|object|false|none|none|
|defaultResourceConfig|object|false|none|none|
|trainingInputMode|object|false|none|none|
|roleArn|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_DockerURI">DockerURI</h2>
<!-- backwards compatibility -->
<a id="schemadockeruri"></a>
<a id="schema_DockerURI"></a>
<a id="tocSdockeruri"></a>
<a id="tocsdockeruri"></a>

```json
"string"
```

<h2 id="tocS_ArnList">ArnList</h2>
<!-- backwards compatibility -->
<a id="schemaarnlist"></a>
<a id="schema_ArnList"></a>
<a id="tocSarnlist"></a>
<a id="tocsarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MetricName">MetricName</h2>
<!-- backwards compatibility -->
<a id="schemametricname"></a>
<a id="schema_MetricName"></a>
<a id="tocSmetricname"></a>
<a id="tocsmetricname"></a>

```json
"string"
```

<h2 id="tocS_AutoMLConfig">AutoMLConfig</h2>
<!-- backwards compatibility -->
<a id="schemaautomlconfig"></a>
<a id="schema_AutoMLConfig"></a>
<a id="tocSautomlconfig"></a>
<a id="tocsautomlconfig"></a>

```json
{
  "metricName": {},
  "recipeList": {}
}
```

When the solution performs AutoML (<code>performAutoML</code> is true in <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricName|object|false|none|none|
|recipeList|object|false|none|none|

<h2 id="tocS_AutoMLResult">AutoMLResult</h2>
<!-- backwards compatibility -->
<a id="schemaautomlresult"></a>
<a id="schema_AutoMLResult"></a>
<a id="tocSautomlresult"></a>
<a id="tocsautomlresult"></a>

```json
{
  "bestRecipeArn": {}
}
```

When the solution performs AutoML (<code>performAutoML</code> is true in <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>), specifies the recipe that best optimized the specified metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bestRecipeArn|object|false|none|none|

<h2 id="tocS_AvroSchema">AvroSchema</h2>
<!-- backwards compatibility -->
<a id="schemaavroschema"></a>
<a id="schema_AvroSchema"></a>
<a id="tocSavroschema"></a>
<a id="tocsavroschema"></a>

```json
"string"
```

<h2 id="tocS_FailureReason">FailureReason</h2>
<!-- backwards compatibility -->
<a id="schemafailurereason"></a>
<a id="schema_FailureReason"></a>
<a id="tocSfailurereason"></a>
<a id="tocsfailurereason"></a>

```json
"string"
```

<h2 id="tocS_NumBatchResults">NumBatchResults</h2>
<!-- backwards compatibility -->
<a id="schemanumbatchresults"></a>
<a id="schema_NumBatchResults"></a>
<a id="tocSnumbatchresults"></a>
<a id="tocsnumbatchresults"></a>

```json
0
```

<h2 id="tocS_BatchInferenceJobInput">BatchInferenceJobInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchinferencejobinput"></a>
<a id="schema_BatchInferenceJobInput"></a>
<a id="tocSbatchinferencejobinput"></a>
<a id="tocsbatchinferencejobinput"></a>

```json
{
  "s3DataSource": {
    "path": {},
    "kmsKeyArn": {}
  }
}
```

The input configuration of a batch inference job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3DataSource|object|true|none|none|

<h2 id="tocS_BatchInferenceJobOutput">BatchInferenceJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchinferencejoboutput"></a>
<a id="schema_BatchInferenceJobOutput"></a>
<a id="tocSbatchinferencejoboutput"></a>
<a id="tocsbatchinferencejoboutput"></a>

```json
{
  "s3DataDestination": {
    "path": {},
    "kmsKeyArn": {}
  }
}
```

The output configuration parameters of a batch inference job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3DataDestination|object|true|none|none|

<h2 id="tocS_BatchInferenceJobConfig">BatchInferenceJobConfig</h2>
<!-- backwards compatibility -->
<a id="schemabatchinferencejobconfig"></a>
<a id="schema_BatchInferenceJobConfig"></a>
<a id="tocSbatchinferencejobconfig"></a>
<a id="tocsbatchinferencejobconfig"></a>

```json
{
  "itemExplorationConfig": {
    "property1": "string",
    "property2": "string"
  }
}
```

The configuration details of a batch inference job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemExplorationConfig|object|false|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"string"
```

<h2 id="tocS_BatchInferenceJob">BatchInferenceJob</h2>
<!-- backwards compatibility -->
<a id="schemabatchinferencejob"></a>
<a id="schema_BatchInferenceJob"></a>
<a id="tocSbatchinferencejob"></a>
<a id="tocsbatchinferencejob"></a>

```json
{
  "jobName": {},
  "batchInferenceJobArn": {},
  "filterArn": {},
  "failureReason": {},
  "solutionVersionArn": {},
  "numResults": {},
  "jobInput": {
    "s3DataSource": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "jobOutput": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "batchInferenceJobConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    }
  },
  "roleArn": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {}
}
```

Contains information on a batch inference job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobName|object|false|none|none|
|batchInferenceJobArn|object|false|none|none|
|filterArn|object|false|none|none|
|failureReason|object|false|none|none|
|solutionVersionArn|object|false|none|none|
|numResults|object|false|none|none|
|jobInput|object|false|none|none|
|jobOutput|object|false|none|none|
|batchInferenceJobConfig|object|false|none|none|
|roleArn|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_S3DataConfig">S3DataConfig</h2>
<!-- backwards compatibility -->
<a id="schemas3dataconfig"></a>
<a id="schema_S3DataConfig"></a>
<a id="tocSs3dataconfig"></a>
<a id="tocss3dataconfig"></a>

```json
{
  "path": {},
  "kmsKeyArn": {}
}
```

The configuration details of an Amazon S3 input or output bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|object|true|none|none|
|kmsKeyArn|object|false|none|none|

<h2 id="tocS_BatchInferenceJobSummary">BatchInferenceJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemabatchinferencejobsummary"></a>
<a id="schema_BatchInferenceJobSummary"></a>
<a id="tocSbatchinferencejobsummary"></a>
<a id="tocsbatchinferencejobsummary"></a>

```json
{
  "batchInferenceJobArn": {},
  "jobName": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "failureReason": {},
  "solutionVersionArn": {}
}
```

A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchInferenceJob.html">BatchInferenceJob</a>. The <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchInferenceJobs.html">ListBatchInferenceJobs</a> operation returns a list of batch inference job summaries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchInferenceJobArn|object|false|none|none|
|jobName|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|failureReason|object|false|none|none|
|solutionVersionArn|object|false|none|none|

<h2 id="tocS_BatchInferenceJobs">BatchInferenceJobs</h2>
<!-- backwards compatibility -->
<a id="schemabatchinferencejobs"></a>
<a id="schema_BatchInferenceJobs"></a>
<a id="tocSbatchinferencejobs"></a>
<a id="tocsbatchinferencejobs"></a>

```json
[
  {
    "batchInferenceJobArn": {},
    "jobName": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {},
    "solutionVersionArn": {}
  }
]
```

<h2 id="tocS_BatchSegmentJobInput">BatchSegmentJobInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchsegmentjobinput"></a>
<a id="schema_BatchSegmentJobInput"></a>
<a id="tocSbatchsegmentjobinput"></a>
<a id="tocsbatchsegmentjobinput"></a>

```json
{
  "s3DataSource": {
    "path": {},
    "kmsKeyArn": {}
  }
}
```

The input configuration of a batch segment job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3DataSource|[S3DataConfig](#schemas3dataconfig)|true|none|The configuration details of an Amazon S3 input or output bucket.|

<h2 id="tocS_BatchSegmentJobOutput">BatchSegmentJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchsegmentjoboutput"></a>
<a id="schema_BatchSegmentJobOutput"></a>
<a id="tocSbatchsegmentjoboutput"></a>
<a id="tocsbatchsegmentjoboutput"></a>

```json
{
  "s3DataDestination": {
    "path": {},
    "kmsKeyArn": {}
  }
}
```

The output configuration parameters of a batch segment job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3DataDestination|[S3DataConfig](#schemas3dataconfig)|true|none|The configuration details of an Amazon S3 input or output bucket.|

<h2 id="tocS_BatchSegmentJob">BatchSegmentJob</h2>
<!-- backwards compatibility -->
<a id="schemabatchsegmentjob"></a>
<a id="schema_BatchSegmentJob"></a>
<a id="tocSbatchsegmentjob"></a>
<a id="tocsbatchsegmentjob"></a>

```json
{
  "jobName": {},
  "batchSegmentJobArn": {},
  "filterArn": {},
  "failureReason": {},
  "solutionVersionArn": {},
  "numResults": {},
  "jobInput": {
    "s3DataSource": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "jobOutput": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "roleArn": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {}
}
```

Contains information on a batch segment job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobName|object|false|none|none|
|batchSegmentJobArn|object|false|none|none|
|filterArn|object|false|none|none|
|failureReason|object|false|none|none|
|solutionVersionArn|object|false|none|none|
|numResults|object|false|none|none|
|jobInput|object|false|none|none|
|jobOutput|object|false|none|none|
|roleArn|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_BatchSegmentJobSummary">BatchSegmentJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemabatchsegmentjobsummary"></a>
<a id="schema_BatchSegmentJobSummary"></a>
<a id="tocSbatchsegmentjobsummary"></a>
<a id="tocsbatchsegmentjobsummary"></a>

```json
{
  "batchSegmentJobArn": {},
  "jobName": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "failureReason": {},
  "solutionVersionArn": {}
}
```

A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchSegmentJob.html">BatchSegmentJob</a> datatype. <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchSegmentJobs.html">ListBatchSegmentJobs</a> operation returns a list of batch segment job summaries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchSegmentJobArn|object|false|none|none|
|jobName|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|failureReason|object|false|none|none|
|solutionVersionArn|object|false|none|none|

<h2 id="tocS_BatchSegmentJobs">BatchSegmentJobs</h2>
<!-- backwards compatibility -->
<a id="schemabatchsegmentjobs"></a>
<a id="schema_BatchSegmentJobs"></a>
<a id="tocSbatchsegmentjobs"></a>
<a id="tocsbatchsegmentjobs"></a>

```json
[
  {
    "batchSegmentJobArn": {},
    "jobName": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {},
    "solutionVersionArn": {}
  }
]
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_TransactionsPerSecond">TransactionsPerSecond</h2>
<!-- backwards compatibility -->
<a id="schematransactionspersecond"></a>
<a id="schema_TransactionsPerSecond"></a>
<a id="tocStransactionspersecond"></a>
<a id="tocstransactionspersecond"></a>

```json
1
```

<h2 id="tocS_CampaignConfig">CampaignConfig</h2>
<!-- backwards compatibility -->
<a id="schemacampaignconfig"></a>
<a id="schema_CampaignConfig"></a>
<a id="tocScampaignconfig"></a>
<a id="tocscampaignconfig"></a>

```json
{
  "itemExplorationConfig": {
    "property1": "string",
    "property2": "string"
  }
}
```

The configuration details of a campaign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemExplorationConfig|object|false|none|none|

<h2 id="tocS_CampaignUpdateSummary">CampaignUpdateSummary</h2>
<!-- backwards compatibility -->
<a id="schemacampaignupdatesummary"></a>
<a id="schema_CampaignUpdateSummary"></a>
<a id="tocScampaignupdatesummary"></a>
<a id="tocscampaignupdatesummary"></a>

```json
{
  "solutionVersionArn": {},
  "minProvisionedTPS": {},
  "campaignConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    }
  },
  "status": {},
  "failureReason": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {}
}
```

Provides a summary of the properties of a campaign update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionVersionArn|object|false|none|none|
|minProvisionedTPS|object|false|none|none|
|campaignConfig|[CampaignConfig](#schemacampaignconfig)|false|none|The configuration details of a campaign.|
|status|object|false|none|none|
|failureReason|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_Campaign">Campaign</h2>
<!-- backwards compatibility -->
<a id="schemacampaign"></a>
<a id="schema_Campaign"></a>
<a id="tocScampaign"></a>
<a id="tocscampaign"></a>

```json
{
  "name": {},
  "campaignArn": {},
  "solutionVersionArn": {},
  "minProvisionedTPS": {},
  "campaignConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    }
  },
  "status": {},
  "failureReason": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "latestCampaignUpdate": {
    "solutionVersionArn": {},
    "minProvisionedTPS": {},
    "campaignConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      }
    },
    "status": {},
    "failureReason": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
  }
}
```

An object that describes the deployment of a solution version. For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|campaignArn|object|false|none|none|
|solutionVersionArn|object|false|none|none|
|minProvisionedTPS|object|false|none|none|
|campaignConfig|object|false|none|none|
|status|object|false|none|none|
|failureReason|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|latestCampaignUpdate|[CampaignUpdateSummary](#schemacampaignupdatesummary)|false|none|Provides a summary of the properties of a campaign update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API.|

<h2 id="tocS_CampaignSummary">CampaignSummary</h2>
<!-- backwards compatibility -->
<a id="schemacampaignsummary"></a>
<a id="schema_CampaignSummary"></a>
<a id="tocScampaignsummary"></a>
<a id="tocscampaignsummary"></a>

```json
{
  "name": {},
  "campaignArn": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "failureReason": {}
}
```

Provides a summary of the properties of a campaign. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|campaignArn|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|failureReason|object|false|none|none|

<h2 id="tocS_Campaigns">Campaigns</h2>
<!-- backwards compatibility -->
<a id="schemacampaigns"></a>
<a id="schema_Campaigns"></a>
<a id="tocScampaigns"></a>
<a id="tocscampaigns"></a>

```json
[
  {
    "name": {},
    "campaignArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {}
  }
]
```

<h2 id="tocS_ParameterName">ParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaparametername"></a>
<a id="schema_ParameterName"></a>
<a id="tocSparametername"></a>
<a id="tocsparametername"></a>

```json
"string"
```

<h2 id="tocS_CategoricalValues">CategoricalValues</h2>
<!-- backwards compatibility -->
<a id="schemacategoricalvalues"></a>
<a id="schema_CategoricalValues"></a>
<a id="tocScategoricalvalues"></a>
<a id="tocscategoricalvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CategoricalHyperParameterRange">CategoricalHyperParameterRange</h2>
<!-- backwards compatibility -->
<a id="schemacategoricalhyperparameterrange"></a>
<a id="schema_CategoricalHyperParameterRange"></a>
<a id="tocScategoricalhyperparameterrange"></a>
<a id="tocscategoricalhyperparameterrange"></a>

```json
{
  "name": {},
  "values": {}
}
```

Provides the name and range of a categorical hyperparameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_CategoricalHyperParameterRanges">CategoricalHyperParameterRanges</h2>
<!-- backwards compatibility -->
<a id="schemacategoricalhyperparameterranges"></a>
<a id="schema_CategoricalHyperParameterRanges"></a>
<a id="tocScategoricalhyperparameterranges"></a>
<a id="tocscategoricalhyperparameterranges"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_CategoricalValue">CategoricalValue</h2>
<!-- backwards compatibility -->
<a id="schemacategoricalvalue"></a>
<a id="schema_CategoricalValue"></a>
<a id="tocScategoricalvalue"></a>
<a id="tocscategoricalvalue"></a>

```json
"string"
```

<h2 id="tocS_ContinuousMinValue">ContinuousMinValue</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousminvalue"></a>
<a id="schema_ContinuousMinValue"></a>
<a id="tocScontinuousminvalue"></a>
<a id="tocscontinuousminvalue"></a>

```json
-1000000
```

<h2 id="tocS_ContinuousMaxValue">ContinuousMaxValue</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousmaxvalue"></a>
<a id="schema_ContinuousMaxValue"></a>
<a id="tocScontinuousmaxvalue"></a>
<a id="tocscontinuousmaxvalue"></a>

```json
-1000000
```

<h2 id="tocS_ContinuousHyperParameterRange">ContinuousHyperParameterRange</h2>
<!-- backwards compatibility -->
<a id="schemacontinuoushyperparameterrange"></a>
<a id="schema_ContinuousHyperParameterRange"></a>
<a id="tocScontinuoushyperparameterrange"></a>
<a id="tocscontinuoushyperparameterrange"></a>

```json
{
  "name": {},
  "minValue": {},
  "maxValue": {}
}
```

Provides the name and range of a continuous hyperparameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|minValue|object|false|none|none|
|maxValue|object|false|none|none|

<h2 id="tocS_ContinuousHyperParameterRanges">ContinuousHyperParameterRanges</h2>
<!-- backwards compatibility -->
<a id="schemacontinuoushyperparameterranges"></a>
<a id="schema_ContinuousHyperParameterRanges"></a>
<a id="tocScontinuoushyperparameterranges"></a>
<a id="tocscontinuoushyperparameterranges"></a>

```json
[
  {
    "name": {},
    "minValue": {},
    "maxValue": {}
  }
]
```

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
[
  {
    "tagKey": {},
    "tagValue": {}
  }
]
```

<h2 id="tocS_IngestionMode">IngestionMode</h2>
<!-- backwards compatibility -->
<a id="schemaingestionmode"></a>
<a id="schema_IngestionMode"></a>
<a id="tocSingestionmode"></a>
<a id="tocsingestionmode"></a>

```json
"BULK"
```

<h2 id="tocS_DatasetExportJobOutput">DatasetExportJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemadatasetexportjoboutput"></a>
<a id="schema_DatasetExportJobOutput"></a>
<a id="tocSdatasetexportjoboutput"></a>
<a id="tocsdatasetexportjoboutput"></a>

```json
{
  "s3DataDestination": {
    "path": {},
    "kmsKeyArn": {}
  }
}
```

The output configuration parameters of a dataset export job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3DataDestination|[S3DataConfig](#schemas3dataconfig)|true|none|The configuration details of an Amazon S3 input or output bucket.|

<h2 id="tocS_KmsKeyArn">KmsKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarn"></a>
<a id="schema_KmsKeyArn"></a>
<a id="tocSkmskeyarn"></a>
<a id="tocskmskeyarn"></a>

```json
"string"
```

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
"ECOMMERCE"
```

<h2 id="tocS_DataSource">DataSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_DataSource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
{
  "dataLocation": {}
}
```

Describes the data source that contains the data to upload to a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataLocation|object|false|none|none|

<h2 id="tocS_ImportMode">ImportMode</h2>
<!-- backwards compatibility -->
<a id="schemaimportmode"></a>
<a id="schema_ImportMode"></a>
<a id="tocSimportmode"></a>
<a id="tocsimportmode"></a>

```json
"FULL"
```

<h2 id="tocS_DatasetType">DatasetType</h2>
<!-- backwards compatibility -->
<a id="schemadatasettype"></a>
<a id="schema_DatasetType"></a>
<a id="tocSdatasettype"></a>
<a id="tocsdatasettype"></a>

```json
"string"
```

<h2 id="tocS_TrackingId">TrackingId</h2>
<!-- backwards compatibility -->
<a id="schematrackingid"></a>
<a id="schema_TrackingId"></a>
<a id="tocStrackingid"></a>
<a id="tocstrackingid"></a>

```json
"string"
```

<h2 id="tocS_FilterExpression">FilterExpression</h2>
<!-- backwards compatibility -->
<a id="schemafilterexpression"></a>
<a id="schema_FilterExpression"></a>
<a id="tocSfilterexpression"></a>
<a id="tocsfilterexpression"></a>

```json
"password"
```

<h2 id="tocS_MetricAttributes">MetricAttributes</h2>
<!-- backwards compatibility -->
<a id="schemametricattributes"></a>
<a id="schema_MetricAttributes"></a>
<a id="tocSmetricattributes"></a>
<a id="tocsmetricattributes"></a>

```json
[
  {
    "eventType": {},
    "metricName": {},
    "expression": {}
  }
]
```

<h2 id="tocS_MetricAttributionOutput">MetricAttributionOutput</h2>
<!-- backwards compatibility -->
<a id="schemametricattributionoutput"></a>
<a id="schema_MetricAttributionOutput"></a>
<a id="tocSmetricattributionoutput"></a>
<a id="tocsmetricattributionoutput"></a>

```json
{
  "s3DataDestination": {
    "path": {},
    "kmsKeyArn": {}
  },
  "roleArn": {}
}
```

The output configuration details for a metric attribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3DataDestination|[S3DataConfig](#schemas3dataconfig)|false|none|The configuration details of an Amazon S3 input or output bucket.|
|roleArn|object|true|none|none|

<h2 id="tocS_RecommenderConfig">RecommenderConfig</h2>
<!-- backwards compatibility -->
<a id="schemarecommenderconfig"></a>
<a id="schema_RecommenderConfig"></a>
<a id="tocSrecommenderconfig"></a>
<a id="tocsrecommenderconfig"></a>

```json
{
  "itemExplorationConfig": {
    "property1": "string",
    "property2": "string"
  },
  "minRecommendationRequestsPerSecond": {}
}
```

The configuration details of the recommender.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemExplorationConfig|object|false|none|none|
|minRecommendationRequestsPerSecond|object|false|none|none|

<h2 id="tocS_PerformAutoML">PerformAutoML</h2>
<!-- backwards compatibility -->
<a id="schemaperformautoml"></a>
<a id="schema_PerformAutoML"></a>
<a id="tocSperformautoml"></a>
<a id="tocsperformautoml"></a>

```json
true
```

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"string"
```

<h2 id="tocS_SolutionConfig">SolutionConfig</h2>
<!-- backwards compatibility -->
<a id="schemasolutionconfig"></a>
<a id="schema_SolutionConfig"></a>
<a id="tocSsolutionconfig"></a>
<a id="tocssolutionconfig"></a>

```json
{
  "eventValueThreshold": {},
  "hpoConfig": {
    "hpoObjective": {
      "type": {},
      "metricName": {},
      "metricRegex": {}
    },
    "hpoResourceConfig": {
      "maxNumberOfTrainingJobs": {},
      "maxParallelTrainingJobs": {}
    },
    "algorithmHyperParameterRanges": {
      "integerHyperParameterRanges": {},
      "continuousHyperParameterRanges": {},
      "categoricalHyperParameterRanges": {}
    }
  },
  "algorithmHyperParameters": {
    "property1": "string",
    "property2": "string"
  },
  "featureTransformationParameters": {
    "property1": "string",
    "property2": "string"
  },
  "autoMLConfig": {
    "metricName": {},
    "recipeList": {}
  },
  "optimizationObjective": {
    "itemAttribute": {},
    "objectiveSensitivity": {}
  }
}
```

Describes the configuration properties for the solution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventValueThreshold|object|false|none|none|
|hpoConfig|object|false|none|none|
|algorithmHyperParameters|object|false|none|none|
|featureTransformationParameters|object|false|none|none|
|autoMLConfig|object|false|none|none|
|optimizationObjective|object|false|none|none|

<h2 id="tocS_TrainingMode">TrainingMode</h2>
<!-- backwards compatibility -->
<a id="schematrainingmode"></a>
<a id="schema_TrainingMode"></a>
<a id="tocStrainingmode"></a>
<a id="tocstrainingmode"></a>

```json
"FULL"
```

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
"string"
```

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "name": {},
  "datasetArn": {},
  "datasetGroupArn": {},
  "datasetType": {},
  "schemaArn": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {}
}
```

Provides metadata for a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|datasetArn|object|false|none|none|
|datasetGroupArn|object|false|none|none|
|datasetType|object|false|none|none|
|schemaArn|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_DatasetExportJob">DatasetExportJob</h2>
<!-- backwards compatibility -->
<a id="schemadatasetexportjob"></a>
<a id="schema_DatasetExportJob"></a>
<a id="tocSdatasetexportjob"></a>
<a id="tocsdatasetexportjob"></a>

```json
{
  "jobName": {},
  "datasetExportJobArn": {},
  "datasetArn": {},
  "ingestionMode": {},
  "roleArn": {},
  "status": {},
  "jobOutput": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    }
  },
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "failureReason": {}
}
```

<p>Describes a job that exports a dataset to an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>.</p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobName|object|false|none|none|
|datasetExportJobArn|object|false|none|none|
|datasetArn|object|false|none|none|
|ingestionMode|object|false|none|none|
|roleArn|object|false|none|none|
|status|object|false|none|none|
|jobOutput|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|failureReason|object|false|none|none|

<h2 id="tocS_DatasetExportJobSummary">DatasetExportJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatasetexportjobsummary"></a>
<a id="schema_DatasetExportJobSummary"></a>
<a id="tocSdatasetexportjobsummary"></a>
<a id="tocsdatasetexportjobsummary"></a>

```json
{
  "datasetExportJobArn": {},
  "jobName": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "failureReason": {}
}
```

Provides a summary of the properties of a dataset export job. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetExportJobArn|object|false|none|none|
|jobName|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|failureReason|object|false|none|none|

<h2 id="tocS_DatasetExportJobs">DatasetExportJobs</h2>
<!-- backwards compatibility -->
<a id="schemadatasetexportjobs"></a>
<a id="schema_DatasetExportJobs"></a>
<a id="tocSdatasetexportjobs"></a>
<a id="tocsdatasetexportjobs"></a>

```json
[
  {
    "datasetExportJobArn": {},
    "jobName": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {}
  }
]
```

<h2 id="tocS_DatasetGroup">DatasetGroup</h2>
<!-- backwards compatibility -->
<a id="schemadatasetgroup"></a>
<a id="schema_DatasetGroup"></a>
<a id="tocSdatasetgroup"></a>
<a id="tocsdatasetgroup"></a>

```json
{
  "name": {},
  "datasetGroupArn": {},
  "status": {},
  "roleArn": {},
  "kmsKeyArn": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "failureReason": {},
  "domain": {}
}
```

<p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>. The dataset group is used to create and train a solution by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|datasetGroupArn|object|false|none|none|
|status|object|false|none|none|
|roleArn|object|false|none|none|
|kmsKeyArn|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|failureReason|object|false|none|none|
|domain|object|false|none|none|

<h2 id="tocS_DatasetGroupSummary">DatasetGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatasetgroupsummary"></a>
<a id="schema_DatasetGroupSummary"></a>
<a id="tocSdatasetgroupsummary"></a>
<a id="tocsdatasetgroupsummary"></a>

```json
{
  "name": {},
  "datasetGroupArn": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "failureReason": {},
  "domain": {}
}
```

Provides a summary of the properties of a dataset group. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|datasetGroupArn|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|failureReason|object|false|none|none|
|domain|object|false|none|none|

<h2 id="tocS_DatasetGroups">DatasetGroups</h2>
<!-- backwards compatibility -->
<a id="schemadatasetgroups"></a>
<a id="schema_DatasetGroups"></a>
<a id="tocSdatasetgroups"></a>
<a id="tocsdatasetgroups"></a>

```json
[
  {
    "name": {},
    "datasetGroupArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {},
    "domain": {}
  }
]
```

<h2 id="tocS_DatasetImportJob">DatasetImportJob</h2>
<!-- backwards compatibility -->
<a id="schemadatasetimportjob"></a>
<a id="schema_DatasetImportJob"></a>
<a id="tocSdatasetimportjob"></a>
<a id="tocsdatasetimportjob"></a>

```json
{
  "jobName": {},
  "datasetImportJobArn": {},
  "datasetArn": {},
  "dataSource": {
    "dataLocation": {}
  },
  "roleArn": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "failureReason": {},
  "importMode": {},
  "publishAttributionMetricsToS3": {}
}
```

<p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobName|object|false|none|none|
|datasetImportJobArn|object|false|none|none|
|datasetArn|object|false|none|none|
|dataSource|object|false|none|none|
|roleArn|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|failureReason|object|false|none|none|
|importMode|object|false|none|none|
|publishAttributionMetricsToS3|object|false|none|none|

<h2 id="tocS_DatasetImportJobSummary">DatasetImportJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatasetimportjobsummary"></a>
<a id="schema_DatasetImportJobSummary"></a>
<a id="tocSdatasetimportjobsummary"></a>
<a id="tocsdatasetimportjobsummary"></a>

```json
{
  "datasetImportJobArn": {},
  "jobName": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "failureReason": {},
  "importMode": {}
}
```

Provides a summary of the properties of a dataset import job. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetImportJobArn|object|false|none|none|
|jobName|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|failureReason|object|false|none|none|
|importMode|object|false|none|none|

<h2 id="tocS_DatasetImportJobs">DatasetImportJobs</h2>
<!-- backwards compatibility -->
<a id="schemadatasetimportjobs"></a>
<a id="schema_DatasetImportJobs"></a>
<a id="tocSdatasetimportjobs"></a>
<a id="tocsdatasetimportjobs"></a>

```json
[
  {
    "datasetImportJobArn": {},
    "jobName": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {},
    "importMode": {}
  }
]
```

<h2 id="tocS_DatasetSchema">DatasetSchema</h2>
<!-- backwards compatibility -->
<a id="schemadatasetschema"></a>
<a id="schema_DatasetSchema"></a>
<a id="tocSdatasetschema"></a>
<a id="tocsdatasetschema"></a>

```json
{
  "name": {},
  "schemaArn": {},
  "schema": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "domain": {}
}
```

Describes the schema for a dataset. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|schemaArn|object|false|none|none|
|schema|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|domain|object|false|none|none|

<h2 id="tocS_DatasetSchemaSummary">DatasetSchemaSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatasetschemasummary"></a>
<a id="schema_DatasetSchemaSummary"></a>
<a id="tocSdatasetschemasummary"></a>
<a id="tocsdatasetschemasummary"></a>

```json
{
  "name": {},
  "schemaArn": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "domain": {}
}
```

Provides a summary of the properties of a dataset schema. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|schemaArn|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|domain|object|false|none|none|

<h2 id="tocS_DatasetSummary">DatasetSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatasetsummary"></a>
<a id="schema_DatasetSummary"></a>
<a id="tocSdatasetsummary"></a>
<a id="tocsdatasetsummary"></a>

```json
{
  "name": {},
  "datasetArn": {},
  "datasetType": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {}
}
```

Provides a summary of the properties of a dataset. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|datasetArn|object|false|none|none|
|datasetType|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_Datasets">Datasets</h2>
<!-- backwards compatibility -->
<a id="schemadatasets"></a>
<a id="schema_Datasets"></a>
<a id="tocSdatasets"></a>
<a id="tocsdatasets"></a>

```json
[
  {
    "name": {},
    "datasetArn": {},
    "datasetType": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
  }
]
```

<h2 id="tocS_Tunable">Tunable</h2>
<!-- backwards compatibility -->
<a id="schematunable"></a>
<a id="schema_Tunable"></a>
<a id="tocStunable"></a>
<a id="tocstunable"></a>

```json
true
```

<h2 id="tocS_DefaultCategoricalHyperParameterRange">DefaultCategoricalHyperParameterRange</h2>
<!-- backwards compatibility -->
<a id="schemadefaultcategoricalhyperparameterrange"></a>
<a id="schema_DefaultCategoricalHyperParameterRange"></a>
<a id="tocSdefaultcategoricalhyperparameterrange"></a>
<a id="tocsdefaultcategoricalhyperparameterrange"></a>

```json
{
  "name": {},
  "values": {},
  "isTunable": {}
}
```

Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|
|isTunable|object|false|none|none|

<h2 id="tocS_DefaultCategoricalHyperParameterRanges">DefaultCategoricalHyperParameterRanges</h2>
<!-- backwards compatibility -->
<a id="schemadefaultcategoricalhyperparameterranges"></a>
<a id="schema_DefaultCategoricalHyperParameterRanges"></a>
<a id="tocSdefaultcategoricalhyperparameterranges"></a>
<a id="tocsdefaultcategoricalhyperparameterranges"></a>

```json
[
  {
    "name": {},
    "values": {},
    "isTunable": {}
  }
]
```

<h2 id="tocS_DefaultContinuousHyperParameterRange">DefaultContinuousHyperParameterRange</h2>
<!-- backwards compatibility -->
<a id="schemadefaultcontinuoushyperparameterrange"></a>
<a id="schema_DefaultContinuousHyperParameterRange"></a>
<a id="tocSdefaultcontinuoushyperparameterrange"></a>
<a id="tocsdefaultcontinuoushyperparameterrange"></a>

```json
{
  "name": {},
  "minValue": {},
  "maxValue": {},
  "isTunable": {}
}
```

Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|minValue|object|false|none|none|
|maxValue|object|false|none|none|
|isTunable|object|false|none|none|

<h2 id="tocS_DefaultContinuousHyperParameterRanges">DefaultContinuousHyperParameterRanges</h2>
<!-- backwards compatibility -->
<a id="schemadefaultcontinuoushyperparameterranges"></a>
<a id="schema_DefaultContinuousHyperParameterRanges"></a>
<a id="tocSdefaultcontinuoushyperparameterranges"></a>
<a id="tocsdefaultcontinuoushyperparameterranges"></a>

```json
[
  {
    "name": {},
    "minValue": {},
    "maxValue": {},
    "isTunable": {}
  }
]
```

<h2 id="tocS_DefaultIntegerHyperParameterRanges">DefaultIntegerHyperParameterRanges</h2>
<!-- backwards compatibility -->
<a id="schemadefaultintegerhyperparameterranges"></a>
<a id="schema_DefaultIntegerHyperParameterRanges"></a>
<a id="tocSdefaultintegerhyperparameterranges"></a>
<a id="tocsdefaultintegerhyperparameterranges"></a>

```json
[
  {
    "name": {},
    "minValue": {},
    "maxValue": {},
    "isTunable": {}
  }
]
```

<h2 id="tocS_IntegerMinValue">IntegerMinValue</h2>
<!-- backwards compatibility -->
<a id="schemaintegerminvalue"></a>
<a id="schema_IntegerMinValue"></a>
<a id="tocSintegerminvalue"></a>
<a id="tocsintegerminvalue"></a>

```json
-1000000
```

<h2 id="tocS_IntegerMaxValue">IntegerMaxValue</h2>
<!-- backwards compatibility -->
<a id="schemaintegermaxvalue"></a>
<a id="schema_IntegerMaxValue"></a>
<a id="tocSintegermaxvalue"></a>
<a id="tocsintegermaxvalue"></a>

```json
0
```

<h2 id="tocS_DefaultIntegerHyperParameterRange">DefaultIntegerHyperParameterRange</h2>
<!-- backwards compatibility -->
<a id="schemadefaultintegerhyperparameterrange"></a>
<a id="schema_DefaultIntegerHyperParameterRange"></a>
<a id="tocSdefaultintegerhyperparameterrange"></a>
<a id="tocsdefaultintegerhyperparameterrange"></a>

```json
{
  "name": {},
  "minValue": {},
  "maxValue": {},
  "isTunable": {}
}
```

Provides the name and default range of a integer-valued hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|minValue|object|false|none|none|
|maxValue|object|false|none|none|
|isTunable|object|false|none|none|

<h2 id="tocS_EventTracker">EventTracker</h2>
<!-- backwards compatibility -->
<a id="schemaeventtracker"></a>
<a id="schema_EventTracker"></a>
<a id="tocSeventtracker"></a>
<a id="tocseventtracker"></a>

```json
{
  "name": {},
  "eventTrackerArn": {},
  "accountId": {},
  "trackingId": {},
  "datasetGroupArn": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {}
}
```

Provides information about an event tracker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|eventTrackerArn|object|false|none|none|
|accountId|object|false|none|none|
|trackingId|object|false|none|none|
|datasetGroupArn|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_FeatureTransformation">FeatureTransformation</h2>
<!-- backwards compatibility -->
<a id="schemafeaturetransformation"></a>
<a id="schema_FeatureTransformation"></a>
<a id="tocSfeaturetransformation"></a>
<a id="tocsfeaturetransformation"></a>

```json
{
  "name": {},
  "featureTransformationArn": {},
  "defaultParameters": {
    "property1": "string",
    "property2": "string"
  },
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "status": {}
}
```

Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|featureTransformationArn|object|false|none|none|
|defaultParameters|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "name": {},
  "filterArn": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "datasetGroupArn": {},
  "failureReason": {},
  "filterExpression": {},
  "status": {}
}
```

Contains information on a recommendation filter, including its ARN, status, and filter expression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|filterArn|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|datasetGroupArn|object|false|none|none|
|failureReason|object|false|none|none|
|filterExpression|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_MetricAttribution">MetricAttribution</h2>
<!-- backwards compatibility -->
<a id="schemametricattribution"></a>
<a id="schema_MetricAttribution"></a>
<a id="tocSmetricattribution"></a>
<a id="tocsmetricattribution"></a>

```json
{
  "name": {},
  "metricAttributionArn": {},
  "datasetGroupArn": {},
  "metricsOutputConfig": {
    "s3DataDestination": {
      "path": {},
      "kmsKeyArn": {}
    },
    "roleArn": {}
  },
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "failureReason": {}
}
```

Contains information on a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you import the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|metricAttributionArn|object|false|none|none|
|datasetGroupArn|object|false|none|none|
|metricsOutputConfig|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|failureReason|object|false|none|none|

<h2 id="tocS_Recipe">Recipe</h2>
<!-- backwards compatibility -->
<a id="schemarecipe"></a>
<a id="schema_Recipe"></a>
<a id="tocSrecipe"></a>
<a id="tocsrecipe"></a>

```json
{
  "name": {},
  "recipeArn": {},
  "algorithmArn": {},
  "featureTransformationArn": {},
  "status": {},
  "description": {},
  "creationDateTime": {},
  "recipeType": {},
  "lastUpdatedDateTime": {}
}
```

Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|recipeArn|object|false|none|none|
|algorithmArn|object|false|none|none|
|featureTransformationArn|object|false|none|none|
|status|object|false|none|none|
|description|object|false|none|none|
|creationDateTime|object|false|none|none|
|recipeType|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_Recommender">Recommender</h2>
<!-- backwards compatibility -->
<a id="schemarecommender"></a>
<a id="schema_Recommender"></a>
<a id="tocSrecommender"></a>
<a id="tocsrecommender"></a>

```json
{
  "recommenderArn": {},
  "datasetGroupArn": {},
  "name": {},
  "recipeArn": {},
  "recommenderConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    },
    "minRecommendationRequestsPerSecond": {}
  },
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "status": {},
  "failureReason": {},
  "latestRecommenderUpdate": {
    "recommenderConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      },
      "minRecommendationRequestsPerSecond": {}
    },
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "status": {},
    "failureReason": {}
  },
  "modelMetrics": {
    "property1": 0,
    "property2": 0
  }
}
```

Describes a recommendation generator for a Domain dataset group. You create a recommender in a Domain dataset group for a specific domain use case (domain recipe), and specify the recommender in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommenderArn|object|false|none|none|
|datasetGroupArn|object|false|none|none|
|name|object|false|none|none|
|recipeArn|object|false|none|none|
|recommenderConfig|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|status|object|false|none|none|
|failureReason|object|false|none|none|
|latestRecommenderUpdate|object|false|none|none|
|modelMetrics|object|false|none|none|

<h2 id="tocS_Solution">Solution</h2>
<!-- backwards compatibility -->
<a id="schemasolution"></a>
<a id="schema_Solution"></a>
<a id="tocSsolution"></a>
<a id="tocssolution"></a>

```json
{
  "name": {},
  "solutionArn": {},
  "performHPO": {},
  "performAutoML": {},
  "recipeArn": {},
  "datasetGroupArn": {},
  "eventType": {},
  "solutionConfig": {
    "eventValueThreshold": {},
    "hpoConfig": {
      "hpoObjective": {
        "type": {},
        "metricName": {},
        "metricRegex": {}
      },
      "hpoResourceConfig": {
        "maxNumberOfTrainingJobs": {},
        "maxParallelTrainingJobs": {}
      },
      "algorithmHyperParameterRanges": {
        "integerHyperParameterRanges": {},
        "continuousHyperParameterRanges": {},
        "categoricalHyperParameterRanges": {}
      }
    },
    "algorithmHyperParameters": {
      "property1": "string",
      "property2": "string"
    },
    "featureTransformationParameters": {
      "property1": "string",
      "property2": "string"
    },
    "autoMLConfig": {
      "metricName": {},
      "recipeList": {}
    },
    "optimizationObjective": {
      "itemAttribute": {},
      "objectiveSensitivity": {}
    }
  },
  "autoMLResult": {
    "bestRecipeArn": {}
  },
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "latestSolutionVersion": {
    "solutionVersionArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {}
  }
}
```

An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|solutionArn|object|false|none|none|
|performHPO|object|false|none|none|
|performAutoML|object|false|none|none|
|recipeArn|object|false|none|none|
|datasetGroupArn|object|false|none|none|
|eventType|object|false|none|none|
|solutionConfig|object|false|none|none|
|autoMLResult|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|latestSolutionVersion|object|false|none|none|

<h2 id="tocS_SolutionVersion">SolutionVersion</h2>
<!-- backwards compatibility -->
<a id="schemasolutionversion"></a>
<a id="schema_SolutionVersion"></a>
<a id="tocSsolutionversion"></a>
<a id="tocssolutionversion"></a>

```json
{
  "name": {},
  "solutionVersionArn": {},
  "solutionArn": {},
  "performHPO": {},
  "performAutoML": {},
  "recipeArn": {},
  "eventType": {},
  "datasetGroupArn": {},
  "solutionConfig": {
    "eventValueThreshold": {},
    "hpoConfig": {
      "hpoObjective": {
        "type": {},
        "metricName": {},
        "metricRegex": {}
      },
      "hpoResourceConfig": {
        "maxNumberOfTrainingJobs": {},
        "maxParallelTrainingJobs": {}
      },
      "algorithmHyperParameterRanges": {
        "integerHyperParameterRanges": {},
        "continuousHyperParameterRanges": {},
        "categoricalHyperParameterRanges": {}
      }
    },
    "algorithmHyperParameters": {
      "property1": "string",
      "property2": "string"
    },
    "featureTransformationParameters": {
      "property1": "string",
      "property2": "string"
    },
    "autoMLConfig": {
      "metricName": {},
      "recipeList": {}
    },
    "optimizationObjective": {
      "itemAttribute": {},
      "objectiveSensitivity": {}
    }
  },
  "trainingHours": {},
  "trainingMode": {},
  "tunedHPOParams": {
    "algorithmHyperParameters": {
      "property1": "string",
      "property2": "string"
    }
  },
  "status": {},
  "failureReason": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {}
}
```

An object that provides information about a specific version of a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_Solution.html">Solution</a> in a Custom dataset group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|solutionVersionArn|object|false|none|none|
|solutionArn|object|false|none|none|
|performHPO|object|false|none|none|
|performAutoML|object|false|none|none|
|recipeArn|object|false|none|none|
|eventType|object|false|none|none|
|datasetGroupArn|object|false|none|none|
|solutionConfig|object|false|none|none|
|trainingHours|object|false|none|none|
|trainingMode|object|false|none|none|
|tunedHPOParams|object|false|none|none|
|status|object|false|none|none|
|failureReason|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_EventTrackerSummary">EventTrackerSummary</h2>
<!-- backwards compatibility -->
<a id="schemaeventtrackersummary"></a>
<a id="schema_EventTrackerSummary"></a>
<a id="tocSeventtrackersummary"></a>
<a id="tocseventtrackersummary"></a>

```json
{
  "name": {},
  "eventTrackerArn": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {}
}
```

Provides a summary of the properties of an event tracker. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|eventTrackerArn|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_EventTrackers">EventTrackers</h2>
<!-- backwards compatibility -->
<a id="schemaeventtrackers"></a>
<a id="schema_EventTrackers"></a>
<a id="tocSeventtrackers"></a>
<a id="tocseventtrackers"></a>

```json
[
  {
    "name": {},
    "eventTrackerArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
  }
]
```

<h2 id="tocS_EventValueThreshold">EventValueThreshold</h2>
<!-- backwards compatibility -->
<a id="schemaeventvaluethreshold"></a>
<a id="schema_EventValueThreshold"></a>
<a id="tocSeventvaluethreshold"></a>
<a id="tocseventvaluethreshold"></a>

```json
"string"
```

<h2 id="tocS_FeaturizationParameters">FeaturizationParameters</h2>
<!-- backwards compatibility -->
<a id="schemafeaturizationparameters"></a>
<a id="schema_FeaturizationParameters"></a>
<a id="tocSfeaturizationparameters"></a>
<a id="tocsfeaturizationparameters"></a>

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

<h2 id="tocS_ParameterValue">ParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaparametervalue"></a>
<a id="schema_ParameterValue"></a>
<a id="tocSparametervalue"></a>
<a id="tocsparametervalue"></a>

```json
"string"
```

<h2 id="tocS_FeatureTransformationParameters">FeatureTransformationParameters</h2>
<!-- backwards compatibility -->
<a id="schemafeaturetransformationparameters"></a>
<a id="schema_FeatureTransformationParameters"></a>
<a id="tocSfeaturetransformationparameters"></a>
<a id="tocsfeaturetransformationparameters"></a>

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

<h2 id="tocS_FilterSummary">FilterSummary</h2>
<!-- backwards compatibility -->
<a id="schemafiltersummary"></a>
<a id="schema_FilterSummary"></a>
<a id="tocSfiltersummary"></a>
<a id="tocsfiltersummary"></a>

```json
{
  "name": {},
  "filterArn": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "datasetGroupArn": {},
  "failureReason": {},
  "status": {}
}
```

A short summary of a filter's attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|filterArn|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|datasetGroupArn|object|false|none|none|
|failureReason|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
[
  {
    "name": {},
    "filterArn": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "datasetGroupArn": {},
    "failureReason": {},
    "status": {}
  }
]
```

<h2 id="tocS_Metrics">Metrics</h2>
<!-- backwards compatibility -->
<a id="schemametrics"></a>
<a id="schema_Metrics"></a>
<a id="tocSmetrics"></a>
<a id="tocsmetrics"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MetricValue](#schemametricvalue)|false|none|none|

<h2 id="tocS_HPOObjective">HPOObjective</h2>
<!-- backwards compatibility -->
<a id="schemahpoobjective"></a>
<a id="schema_HPOObjective"></a>
<a id="tocShpoobjective"></a>
<a id="tocshpoobjective"></a>

```json
{
  "type": {},
  "metricName": {},
  "metricRegex": {}
}
```

<p>The metric to optimize during hyperparameter optimization (HPO).</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> at this time.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|metricName|object|false|none|none|
|metricRegex|object|false|none|none|

<h2 id="tocS_HPOResourceConfig">HPOResourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemahporesourceconfig"></a>
<a id="schema_HPOResourceConfig"></a>
<a id="tocShporesourceconfig"></a>
<a id="tocshporesourceconfig"></a>

```json
{
  "maxNumberOfTrainingJobs": {},
  "maxParallelTrainingJobs": {}
}
```

Describes the resource configuration for hyperparameter optimization (HPO).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxNumberOfTrainingJobs|object|false|none|none|
|maxParallelTrainingJobs|object|false|none|none|

<h2 id="tocS_HyperParameterRanges">HyperParameterRanges</h2>
<!-- backwards compatibility -->
<a id="schemahyperparameterranges"></a>
<a id="schema_HyperParameterRanges"></a>
<a id="tocShyperparameterranges"></a>
<a id="tocshyperparameterranges"></a>

```json
{
  "integerHyperParameterRanges": {},
  "continuousHyperParameterRanges": {},
  "categoricalHyperParameterRanges": {}
}
```

Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integerHyperParameterRanges|object|false|none|none|
|continuousHyperParameterRanges|object|false|none|none|
|categoricalHyperParameterRanges|object|false|none|none|

<h2 id="tocS_HPOConfig">HPOConfig</h2>
<!-- backwards compatibility -->
<a id="schemahpoconfig"></a>
<a id="schema_HPOConfig"></a>
<a id="tocShpoconfig"></a>
<a id="tocshpoconfig"></a>

```json
{
  "hpoObjective": {
    "type": {},
    "metricName": {},
    "metricRegex": {}
  },
  "hpoResourceConfig": {
    "maxNumberOfTrainingJobs": {},
    "maxParallelTrainingJobs": {}
  },
  "algorithmHyperParameterRanges": {
    "integerHyperParameterRanges": {},
    "continuousHyperParameterRanges": {},
    "categoricalHyperParameterRanges": {}
  }
}
```

Describes the properties for hyperparameter optimization (HPO).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hpoObjective|object|false|none|none|
|hpoResourceConfig|object|false|none|none|
|algorithmHyperParameterRanges|object|false|none|none|

<h2 id="tocS_HPOObjectiveType">HPOObjectiveType</h2>
<!-- backwards compatibility -->
<a id="schemahpoobjectivetype"></a>
<a id="schema_HPOObjectiveType"></a>
<a id="tocShpoobjectivetype"></a>
<a id="tocshpoobjectivetype"></a>

```json
"string"
```

<h2 id="tocS_MetricRegex">MetricRegex</h2>
<!-- backwards compatibility -->
<a id="schemametricregex"></a>
<a id="schema_MetricRegex"></a>
<a id="tocSmetricregex"></a>
<a id="tocsmetricregex"></a>

```json
"string"
```

<h2 id="tocS_HPOResource">HPOResource</h2>
<!-- backwards compatibility -->
<a id="schemahporesource"></a>
<a id="schema_HPOResource"></a>
<a id="tocShporesource"></a>
<a id="tocshporesource"></a>

```json
"string"
```

<h2 id="tocS_IntegerHyperParameterRanges">IntegerHyperParameterRanges</h2>
<!-- backwards compatibility -->
<a id="schemaintegerhyperparameterranges"></a>
<a id="schema_IntegerHyperParameterRanges"></a>
<a id="tocSintegerhyperparameterranges"></a>
<a id="tocsintegerhyperparameterranges"></a>

```json
[
  {
    "name": {},
    "minValue": {},
    "maxValue": {}
  }
]
```

<h2 id="tocS_IntegerHyperParameterRange">IntegerHyperParameterRange</h2>
<!-- backwards compatibility -->
<a id="schemaintegerhyperparameterrange"></a>
<a id="schema_IntegerHyperParameterRange"></a>
<a id="tocSintegerhyperparameterrange"></a>
<a id="tocsintegerhyperparameterrange"></a>

```json
{
  "name": {},
  "minValue": {},
  "maxValue": {}
}
```

Provides the name and range of an integer-valued hyperparameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|minValue|object|false|none|none|
|maxValue|object|false|none|none|

<h2 id="tocS_ItemAttribute">ItemAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaitemattribute"></a>
<a id="schema_ItemAttribute"></a>
<a id="tocSitemattribute"></a>
<a id="tocsitemattribute"></a>

```json
"string"
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

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_MetricAttributions">MetricAttributions</h2>
<!-- backwards compatibility -->
<a id="schemametricattributions"></a>
<a id="schema_MetricAttributions"></a>
<a id="tocSmetricattributions"></a>
<a id="tocsmetricattributions"></a>

```json
[
  {
    "name": {},
    "metricAttributionArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {}
  }
]
```

<h2 id="tocS_RecipeProvider">RecipeProvider</h2>
<!-- backwards compatibility -->
<a id="schemarecipeprovider"></a>
<a id="schema_RecipeProvider"></a>
<a id="tocSrecipeprovider"></a>
<a id="tocsrecipeprovider"></a>

```json
"SERVICE"
```

<h2 id="tocS_Recipes">Recipes</h2>
<!-- backwards compatibility -->
<a id="schemarecipes"></a>
<a id="schema_Recipes"></a>
<a id="tocSrecipes"></a>
<a id="tocsrecipes"></a>

```json
[
  {
    "name": {},
    "recipeArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "domain": {}
  }
]
```

<h2 id="tocS_Recommenders">Recommenders</h2>
<!-- backwards compatibility -->
<a id="schemarecommenders"></a>
<a id="schema_Recommenders"></a>
<a id="tocSrecommenders"></a>
<a id="tocsrecommenders"></a>

```json
[
  {
    "name": {},
    "recommenderArn": {},
    "datasetGroupArn": {},
    "recipeArn": {},
    "recommenderConfig": {
      "itemExplorationConfig": {
        "property1": "string",
        "property2": "string"
      },
      "minRecommendationRequestsPerSecond": {}
    },
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {}
  }
]
```

<h2 id="tocS_Schemas">Schemas</h2>
<!-- backwards compatibility -->
<a id="schemaschemas"></a>
<a id="schema_Schemas"></a>
<a id="tocSschemas"></a>
<a id="tocsschemas"></a>

```json
[
  {
    "name": {},
    "schemaArn": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "domain": {}
  }
]
```

<h2 id="tocS_SolutionVersions">SolutionVersions</h2>
<!-- backwards compatibility -->
<a id="schemasolutionversions"></a>
<a id="schema_SolutionVersions"></a>
<a id="tocSsolutionversions"></a>
<a id="tocssolutionversions"></a>

```json
[
  {
    "solutionVersionArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "failureReason": {}
  }
]
```

<h2 id="tocS_Solutions">Solutions</h2>
<!-- backwards compatibility -->
<a id="schemasolutions"></a>
<a id="schema_Solutions"></a>
<a id="tocSsolutions"></a>
<a id="tocssolutions"></a>

```json
[
  {
    "name": {},
    "solutionArn": {},
    "status": {},
    "creationDateTime": {},
    "lastUpdatedDateTime": {},
    "recipeArn": {}
  }
]
```

<h2 id="tocS_MetricExpression">MetricExpression</h2>
<!-- backwards compatibility -->
<a id="schemametricexpression"></a>
<a id="schema_MetricExpression"></a>
<a id="tocSmetricexpression"></a>
<a id="tocsmetricexpression"></a>

```json
"string"
```

<h2 id="tocS_MetricAttribute">MetricAttribute</h2>
<!-- backwards compatibility -->
<a id="schemametricattribute"></a>
<a id="schema_MetricAttribute"></a>
<a id="tocSmetricattribute"></a>
<a id="tocsmetricattribute"></a>

```json
{
  "eventType": {},
  "metricName": {},
  "expression": {}
}
```

Contains information on a metric that a metric attribution reports on. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventType|object|true|none|none|
|metricName|object|true|none|none|
|expression|object|true|none|none|

<h2 id="tocS_MetricAttributesNamesList">MetricAttributesNamesList</h2>
<!-- backwards compatibility -->
<a id="schemametricattributesnameslist"></a>
<a id="schema_MetricAttributesNamesList"></a>
<a id="tocSmetricattributesnameslist"></a>
<a id="tocsmetricattributesnameslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MetricAttributionSummary">MetricAttributionSummary</h2>
<!-- backwards compatibility -->
<a id="schemametricattributionsummary"></a>
<a id="schema_MetricAttributionSummary"></a>
<a id="tocSmetricattributionsummary"></a>
<a id="tocsmetricattributionsummary"></a>

```json
{
  "name": {},
  "metricAttributionArn": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "failureReason": {}
}
```

Provides a summary of the properties of a metric attribution. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeMetricAttribution.html">DescribeMetricAttribution</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|metricAttributionArn|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|failureReason|object|false|none|none|

<h2 id="tocS_MetricValue">MetricValue</h2>
<!-- backwards compatibility -->
<a id="schemametricvalue"></a>
<a id="schema_MetricValue"></a>
<a id="tocSmetricvalue"></a>
<a id="tocsmetricvalue"></a>

```json
0
```

<h2 id="tocS_ObjectiveSensitivity">ObjectiveSensitivity</h2>
<!-- backwards compatibility -->
<a id="schemaobjectivesensitivity"></a>
<a id="schema_ObjectiveSensitivity"></a>
<a id="tocSobjectivesensitivity"></a>
<a id="tocsobjectivesensitivity"></a>

```json
"LOW"
```

<h2 id="tocS_OptimizationObjective">OptimizationObjective</h2>
<!-- backwards compatibility -->
<a id="schemaoptimizationobjective"></a>
<a id="schema_OptimizationObjective"></a>
<a id="tocSoptimizationobjective"></a>
<a id="tocsoptimizationobjective"></a>

```json
{
  "itemAttribute": {},
  "objectiveSensitivity": {}
}
```

Describes the additional objective for the solution, such as maximizing streaming minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemAttribute|object|false|none|none|
|objectiveSensitivity|object|false|none|none|

<h2 id="tocS_PerformHPO">PerformHPO</h2>
<!-- backwards compatibility -->
<a id="schemaperformhpo"></a>
<a id="schema_PerformHPO"></a>
<a id="tocSperformhpo"></a>
<a id="tocsperformhpo"></a>

```json
true
```

<h2 id="tocS_RecipeType">RecipeType</h2>
<!-- backwards compatibility -->
<a id="schemarecipetype"></a>
<a id="schema_RecipeType"></a>
<a id="tocSrecipetype"></a>
<a id="tocsrecipetype"></a>

```json
"string"
```

<h2 id="tocS_RecipeSummary">RecipeSummary</h2>
<!-- backwards compatibility -->
<a id="schemarecipesummary"></a>
<a id="schema_RecipeSummary"></a>
<a id="tocSrecipesummary"></a>
<a id="tocsrecipesummary"></a>

```json
{
  "name": {},
  "recipeArn": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "domain": {}
}
```

Provides a summary of the properties of a recipe. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecipe.html">DescribeRecipe</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|recipeArn|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|domain|object|false|none|none|

<h2 id="tocS_RecommenderUpdateSummary">RecommenderUpdateSummary</h2>
<!-- backwards compatibility -->
<a id="schemarecommenderupdatesummary"></a>
<a id="schema_RecommenderUpdateSummary"></a>
<a id="tocSrecommenderupdatesummary"></a>
<a id="tocsrecommenderupdatesummary"></a>

```json
{
  "recommenderConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    },
    "minRecommendationRequestsPerSecond": {}
  },
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "status": {},
  "failureReason": {}
}
```

Provides a summary of the properties of a recommender update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommenderConfig|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|status|object|false|none|none|
|failureReason|object|false|none|none|

<h2 id="tocS_RecommenderSummary">RecommenderSummary</h2>
<!-- backwards compatibility -->
<a id="schemarecommendersummary"></a>
<a id="schema_RecommenderSummary"></a>
<a id="tocSrecommendersummary"></a>
<a id="tocsrecommendersummary"></a>

```json
{
  "name": {},
  "recommenderArn": {},
  "datasetGroupArn": {},
  "recipeArn": {},
  "recommenderConfig": {
    "itemExplorationConfig": {
      "property1": "string",
      "property2": "string"
    },
    "minRecommendationRequestsPerSecond": {}
  },
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {}
}
```

Provides a summary of the properties of the recommender.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|recommenderArn|object|false|none|none|
|datasetGroupArn|object|false|none|none|
|recipeArn|object|false|none|none|
|recommenderConfig|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|

<h2 id="tocS_SolutionVersionSummary">SolutionVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schemasolutionversionsummary"></a>
<a id="schema_SolutionVersionSummary"></a>
<a id="tocSsolutionversionsummary"></a>
<a id="tocssolutionversionsummary"></a>

```json
{
  "solutionVersionArn": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "failureReason": {}
}
```

Provides a summary of the properties of a solution version. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solutionVersionArn|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|failureReason|object|false|none|none|

<h2 id="tocS_SolutionSummary">SolutionSummary</h2>
<!-- backwards compatibility -->
<a id="schemasolutionsummary"></a>
<a id="schema_SolutionSummary"></a>
<a id="tocSsolutionsummary"></a>
<a id="tocssolutionsummary"></a>

```json
{
  "name": {},
  "solutionArn": {},
  "status": {},
  "creationDateTime": {},
  "lastUpdatedDateTime": {},
  "recipeArn": {}
}
```

Provides a summary of the properties of a solution. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|solutionArn|object|false|none|none|
|status|object|false|none|none|
|creationDateTime|object|false|none|none|
|lastUpdatedDateTime|object|false|none|none|
|recipeArn|object|false|none|none|

<h2 id="tocS_TrainingHours">TrainingHours</h2>
<!-- backwards compatibility -->
<a id="schematraininghours"></a>
<a id="schema_TrainingHours"></a>
<a id="tocStraininghours"></a>
<a id="tocstraininghours"></a>

```json
0
```

<h2 id="tocS_TunedHPOParams">TunedHPOParams</h2>
<!-- backwards compatibility -->
<a id="schematunedhpoparams"></a>
<a id="schema_TunedHPOParams"></a>
<a id="tocStunedhpoparams"></a>
<a id="tocstunedhpoparams"></a>

```json
{
  "algorithmHyperParameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithmHyperParameters|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "tagKey": {},
  "tagValue": {}
}
```

The optional metadata that you apply to resources to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">Tagging Personalize resources</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tagKey|object|true|none|none|
|tagValue|object|true|none|none|

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

```json
[
  "string"
]
```
