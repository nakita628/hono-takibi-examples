<h1 id="amazon-lookout-for-vision">Amazon Lookout for Vision v2020-11-20</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>This is the Amazon Lookout for Vision API Reference. It provides descriptions of actions, data types, common parameters, and common errors.</p> <p>Amazon Lookout for Vision enables you to find visual defects in industrial products, accurately and at scale. It uses computer vision to identify missing components in an industrial product, damage to vehicles or structures, irregularities in production lines, and even minuscule defects in silicon wafers — or any other physical item where quality is important such as a missing capacitor on printed circuit boards.</p>

Base URLs:

* <a href="http://lookoutvision.us-east-1.amazonaws.com">http://lookoutvision.us-east-1.amazonaws.com</a> - The Amazon Lookout for Vision multi-region endpoint

* <a href="https://lookoutvision.us-east-1.amazonaws.com">https://lookoutvision.us-east-1.amazonaws.com</a> - The Amazon Lookout for Vision multi-region endpoint

* <a href="http://lookoutvision.cn-north-1.amazonaws.com.cn">http://lookoutvision.cn-north-1.amazonaws.com.cn</a> - The Amazon Lookout for Vision endpoint for China (Beijing) and China (Ningxia)

* <a href="https://lookoutvision.cn-north-1.amazonaws.com.cn">https://lookoutvision.cn-north-1.amazonaws.com.cn</a> - The Amazon Lookout for Vision endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/lookoutvision/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-lookout-for-vision-default">Default</h1>

## CreateDataset

<a id="opIdCreateDataset"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/datasets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DatasetType": "string",
    "DatasetSource": {
      "GroundTruthManifest": {
        "S3Object": {
          "Bucket": {},
          "Key": {},
          "VersionId": {}
        }
      }
    }
  }'
```

`POST /2020-11-20/projects/{projectName}/datasets`

<p>Creates a new dataset in an Amazon Lookout for Vision project. <code>CreateDataset</code> can create a training or a test dataset from a valid dataset source (<code>DatasetSource</code>).</p> <p>If you want a single dataset project, specify <code>train</code> for the value of <code>DatasetType</code>.</p> <p>To have a project with separate training and test datasets, call <code>CreateDataset</code> twice. On the first call, specify <code>train</code> for the value of <code>DatasetType</code>. On the second call, specify <code>test</code> for the value of <code>DatasetType</code>. </p> <p>This operation requires permissions to perform the <code>lookoutvision:CreateDataset</code> operation.</p>

> Body parameter

```json
{
  "DatasetType": "string",
  "DatasetSource": {
    "GroundTruthManifest": {
      "S3Object": {
        "Bucket": {},
        "Key": {},
        "VersionId": {}
      }
    }
  }
}
```

<h3 id="createdataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project in which you want to create a dataset.|
|X-Amzn-Client-Token|header|string|false|<p>ClientToken is an idempotency token that ensures a call to <code>CreateDataset</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>CreateDataset</code>. In this case, safely retry your call to <code>CreateDataset</code> by using the same <code>ClientToken</code> parameter value.</p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple dataset creation requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>CreateDataset</code>. An idempotency token is active for 8 hours. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DatasetType|body|string|true|The type of the dataset. Specify <code>train</code> for a training dataset. Specify <code>test</code> for a test dataset.|
|» DatasetSource|body|object|false|Information about the location of a manifest file that Amazon Lookout for Vision uses to to create a dataset.|
|» » GroundTruthManifest|body|object|false|none|
|» » » S3Object|body|object|false|none|
|» » » » Bucket|body|object|true|none|
|» » » » Key|body|object|true|none|
|» » » » VersionId|body|object|false|none|

> Example responses

> 202 Response

```json
{
  "DatasetMetadata": {
    "DatasetType": {},
    "CreationTimestamp": {},
    "Status": {},
    "StatusMessage": {}
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

<h3 id="createdataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[CreateDatasetResponse](#schemacreatedatasetresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListModels

<a id="opIdListModels"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/models \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-11-20/projects/{projectName}/models`

<p>Lists the versions of a model in an Amazon Lookout for Vision project.</p> <p>The <code>ListModels</code> operation is eventually consistent. Recent calls to <code>CreateModel</code> might take a while to appear in the response from <code>ListProjects</code>.</p> <p>This operation requires permissions to perform the <code>lookoutvision:ListModels</code> operation.</p>

<h3 id="listmodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project that contains the model versions that you want to list.|
|nextToken|query|string|false|If the previous response was incomplete (because there is more data to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of models.|
|maxResults|query|integer|false|The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.|
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
  "Models": {},
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

<h3 id="listmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListModelsResponse](#schemalistmodelsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateModel

<a id="opIdCreateModel"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "OutputConfig": {
      "S3Location": {
        "Bucket": {},
        "Prefix": {}
      }
    },
    "KmsKeyId": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /2020-11-20/projects/{projectName}/models`

<p>Creates a new version of a model within an an Amazon Lookout for Vision project. <code>CreateModel</code> is an asynchronous operation in which Amazon Lookout for Vision trains, tests, and evaluates a new version of a model. </p> <p>To get the current status, check the <code>Status</code> field returned in the response from <a>DescribeModel</a>.</p> <p>If the project has a single dataset, Amazon Lookout for Vision internally splits the dataset to create a training and a test dataset. If the project has a training and a test dataset, Lookout for Vision uses the respective datasets to train and test the model. </p> <p>After training completes, the evaluation metrics are stored at the location specified in <code>OutputConfig</code>. </p> <p>This operation requires permissions to perform the <code>lookoutvision:CreateModel</code> operation. If you want to tag your model, you also require permission to the <code>lookoutvision:TagResource</code> operation.</p>

> Body parameter

```json
{
  "Description": "string",
  "OutputConfig": {
    "S3Location": {
      "Bucket": {},
      "Prefix": {}
    }
  },
  "KmsKeyId": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project in which you want to create a model version.|
|X-Amzn-Client-Token|header|string|false|<p>ClientToken is an idempotency token that ensures a call to <code>CreateModel</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>CreateModel</code>. In this case, safely retry your call to <code>CreateModel</code> by using the same <code>ClientToken</code> parameter value. </p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from starting multiple training jobs. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>CreateModel</code>. An idempotency token is active for 8 hours.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|A description for the version of the model.|
|» OutputConfig|body|object|true|The S3 location where Amazon Lookout for Vision saves model training files.|
|» » S3Location|body|object|false|none|
|» » » Bucket|body|object|true|none|
|» » » Prefix|body|object|false|none|
|» KmsKeyId|body|string|false|The identifier for your AWS KMS key. The key is used to encrypt training and test images copied into the service for model training. Your source images are unaffected. If this parameter is not specified, the copied images are encrypted by a key that AWS owns and manages.|
|» Tags|body|[[Tag](#schematag)]|false|A set of tags (key-value pairs) that you want to attach to the model.|

> Example responses

> 202 Response

```json
{
  "ModelMetadata": {
    "CreationTimestamp": {},
    "ModelVersion": {},
    "ModelArn": {},
    "Description": {},
    "Status": {},
    "StatusMessage": {},
    "Performance": {
      "F1Score": {},
      "Recall": {},
      "Precision": {}
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

<h3 id="createmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[CreateModelResponse](#schemacreatemodelresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProjects

<a id="opIdListProjects"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-11-20/projects`

<p>Lists the Amazon Lookout for Vision projects in your AWS account that are in the AWS Region in which you call <code>ListProjects</code>.</p> <p>The <code>ListProjects</code> operation is eventually consistent. Recent calls to <code>CreateProject</code> and <code>DeleteProject</code> might take a while to appear in the response from <code>ListProjects</code>.</p> <p>This operation requires permissions to perform the <code>lookoutvision:ListProjects</code> operation.</p>

<h3 id="listprojects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|If the previous response was incomplete (because there is more data to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of projects.|
|maxResults|query|integer|false|The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.|
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

<h3 id="listprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProjectsResponse](#schemalistprojectsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProject

<a id="opIdCreateProject"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ProjectName": "string"
  }'
```

`POST /2020-11-20/projects`

<p>Creates an empty Amazon Lookout for Vision project. After you create the project, add a dataset by calling <a>CreateDataset</a>.</p> <p>This operation requires permissions to perform the <code>lookoutvision:CreateProject</code> operation.</p>

> Body parameter

```json
{
  "ProjectName": "string"
}
```

<h3 id="createproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amzn-Client-Token|header|string|false|<p>ClientToken is an idempotency token that ensures a call to <code>CreateProject</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>CreateProject</code>. In this case, safely retry your call to <code>CreateProject</code> by using the same <code>ClientToken</code> parameter value. </p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple project creation requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>CreateProject</code>. An idempotency token is active for 8 hours.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ProjectName|body|string|true|The name for the project.|

> Example responses

> 200 Response

```json
{
  "ProjectMetadata": {
    "ProjectArn": {},
    "ProjectName": {},
    "CreationTimestamp": {}
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

<h3 id="createproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProjectResponse](#schemacreateprojectresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDataset

<a id="opIdDescribeDataset"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/datasets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-11-20/projects/{projectName}/datasets/{datasetType}`

<p>Describe an Amazon Lookout for Vision dataset.</p> <p>This operation requires permissions to perform the <code>lookoutvision:DescribeDataset</code> operation.</p>

<h3 id="describedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project that contains the dataset that you want to describe.|
|datasetType|path|string|true|The type of the dataset to describe. Specify <code>train</code> to describe the training dataset. Specify <code>test</code> to describe the test dataset. If you have a single dataset project, specify <code>train</code> |
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
  "DatasetDescription": {
    "ProjectName": {},
    "DatasetType": {},
    "CreationTimestamp": {},
    "LastUpdatedTimestamp": {},
    "Status": {},
    "StatusMessage": {},
    "ImageStats": {
      "Total": {},
      "Labeled": {},
      "Normal": {},
      "Anomaly": {}
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

<h3 id="describedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatasetResponse](#schemadescribedatasetresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataset

<a id="opIdDeleteDataset"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/datasets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-11-20/projects/{projectName}/datasets/{datasetType}`

<p>Deletes an existing Amazon Lookout for Vision <code>dataset</code>. </p> <p>If your the project has a single dataset, you must create a new dataset before you can create a model.</p> <p>If you project has a training dataset and a test dataset consider the following. </p> <ul> <li> <p>If you delete the test dataset, your project reverts to a single dataset project. If you then train the model, Amazon Lookout for Vision internally splits the remaining dataset into a training and test dataset.</p> </li> <li> <p>If you delete the training dataset, you must create a training dataset before you can create a model.</p> </li> </ul> <p>This operation requires permissions to perform the <code>lookoutvision:DeleteDataset</code> operation.</p>

<h3 id="deletedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project that contains the dataset that you want to delete.|
|datasetType|path|string|true|The type of the dataset to delete. Specify <code>train</code> to delete the training dataset. Specify <code>test</code> to delete the test dataset. To delete the dataset in a single dataset project, specify <code>train</code>.|
|X-Amzn-Client-Token|header|string|false|<p>ClientToken is an idempotency token that ensures a call to <code>DeleteDataset</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>DeleteDataset</code>. In this case, safely retry your call to <code>DeleteDataset</code> by using the same <code>ClientToken</code> parameter value. </p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple deletetion requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>DeleteDataset</code>. An idempotency token is active for 8 hours.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

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

<h3 id="deletedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeleteDatasetResponse](#schemadeletedatasetresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeModel

<a id="opIdDescribeModel"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/models/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-11-20/projects/{projectName}/models/{modelVersion}`

<p>Describes a version of an Amazon Lookout for Vision model.</p> <p>This operation requires permissions to perform the <code>lookoutvision:DescribeModel</code> operation.</p>

<h3 id="describemodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The project that contains the version of a model that you want to describe.|
|modelVersion|path|string|true|The version of the model that you want to describe.|
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
  "ModelDescription": {
    "ModelVersion": {},
    "ModelArn": {},
    "CreationTimestamp": {},
    "Description": {},
    "Status": {},
    "StatusMessage": {},
    "Performance": {
      "F1Score": {},
      "Recall": {},
      "Precision": {}
    },
    "OutputConfig": {
      "S3Location": {
        "Bucket": {},
        "Prefix": {}
      }
    },
    "EvaluationManifest": {
      "Bucket": {},
      "Key": {}
    },
    "EvaluationResult": {
      "Bucket": {},
      "Key": {}
    },
    "EvaluationEndTimestamp": {},
    "KmsKeyId": {},
    "MinInferenceUnits": {},
    "MaxInferenceUnits": {}
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

<h3 id="describemodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeModelResponse](#schemadescribemodelresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteModel

<a id="opIdDeleteModel"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/models/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-11-20/projects/{projectName}/models/{modelVersion}`

<p>Deletes an Amazon Lookout for Vision model. You can't delete a running model. To stop a running model, use the <a>StopModel</a> operation.</p> <p>It might take a few seconds to delete a model. To determine if a model has been deleted, call <a>ListModels</a> and check if the version of the model (<code>ModelVersion</code>) is in the <code>Models</code> array. </p> <p/> <p>This operation requires permissions to perform the <code>lookoutvision:DeleteModel</code> operation.</p>

<h3 id="deletemodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project that contains the model that you want to delete.|
|modelVersion|path|string|true|The version of the model that you want to delete.|
|X-Amzn-Client-Token|header|string|false|<p>ClientToken is an idempotency token that ensures a call to <code>DeleteModel</code> completes only once. You choose the value to pass. For example, an issue might prevent you from getting a response from <code>DeleteModel</code>. In this case, safely retry your call to <code>DeleteModel</code> by using the same <code>ClientToken</code> parameter value.</p> <p>If you don't supply a value for ClientToken, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple model deletion requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>DeleteModel</code>. An idempotency token is active for 8 hours.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

```json
{
  "ModelArn": {}
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

<h3 id="deletemodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeleteModelResponse](#schemadeletemodelresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProject

<a id="opIdDescribeProject"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-11-20/projects/{projectName}`

<p>Describes an Amazon Lookout for Vision project.</p> <p>This operation requires permissions to perform the <code>lookoutvision:DescribeProject</code> operation.</p>

<h3 id="describeproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project that you want to describe.|
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
  "ProjectDescription": {
    "ProjectArn": {},
    "ProjectName": {},
    "CreationTimestamp": {},
    "Datasets": {}
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

<h3 id="describeproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProjectResponse](#schemadescribeprojectresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProject

<a id="opIdDeleteProject"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-11-20/projects/{projectName}`

<p>Deletes an Amazon Lookout for Vision project.</p> <p>To delete a project, you must first delete each version of the model associated with the project. To delete a model use the <a>DeleteModel</a> operation.</p> <p>You also have to delete the dataset(s) associated with the model. For more information, see <a>DeleteDataset</a>. The images referenced by the training and test datasets aren't deleted. </p> <p>This operation requires permissions to perform the <code>lookoutvision:DeleteProject</code> operation.</p>

<h3 id="deleteproject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project to delete.|
|X-Amzn-Client-Token|header|string|false|<p>ClientToken is an idempotency token that ensures a call to <code>DeleteProject</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>DeleteProject</code>. In this case, safely retry your call to <code>DeleteProject</code> by using the same <code>ClientToken</code> parameter value. </p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple project deletion requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>DeleteProject</code>. An idempotency token is active for 8 hours.</p>|
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
  "ProjectArn": {}
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

<h3 id="deleteproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProjectResponse](#schemadeleteprojectresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeModelPackagingJob

<a id="opIdDescribeModelPackagingJob"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/modelpackagingjobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-11-20/projects/{projectName}/modelpackagingjobs/{jobName}`

<p>Describes an Amazon Lookout for Vision model packaging job. </p> <p>This operation requires permissions to perform the <code>lookoutvision:DescribeModelPackagingJob</code> operation.</p> <p>For more information, see <i>Using your Amazon Lookout for Vision model on an edge device</i> in the Amazon Lookout for Vision Developer Guide. </p>

<h3 id="describemodelpackagingjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project that contains the model packaging job that you want to describe. |
|jobName|path|string|true|The job name for the model packaging job. |
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
  "ModelPackagingDescription": {
    "JobName": {},
    "ProjectName": {},
    "ModelVersion": {},
    "ModelPackagingConfiguration": {
      "Greengrass": {
        "CompilerOptions": {},
        "TargetDevice": {},
        "TargetPlatform": {
          "Os": {},
          "Arch": {},
          "Accelerator": {}
        },
        "S3OutputLocation": {
          "Bucket": {},
          "Prefix": {}
        },
        "ComponentName": {},
        "ComponentVersion": {},
        "ComponentDescription": {},
        "Tags": {}
      }
    },
    "ModelPackagingJobDescription": {},
    "ModelPackagingMethod": {},
    "ModelPackagingOutputDetails": {
      "Greengrass": {
        "ComponentVersionArn": {},
        "ComponentName": {},
        "ComponentVersion": {}
      }
    },
    "Status": {},
    "StatusMessage": {},
    "CreationTimestamp": {},
    "LastUpdatedTimestamp": {}
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

<h3 id="describemodelpackagingjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeModelPackagingJobResponse](#schemadescribemodelpackagingjobresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetectAnomalies

<a id="opIdDetectAnomalies"></a>

> Code samples

```bash
curl 'https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/models/string/detect#Content-Type' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Body": "string"
  }'
```

`POST /2020-11-20/projects/{projectName}/models/{modelVersion}/detect#Content-Type`

<p>Detects anomalies in an image that you supply. </p> <p>The response from <code>DetectAnomalies</code> includes a boolean prediction that the image contains one or more anomalies and a confidence value for the prediction. If the model is an image segmentation model, the response also includes segmentation information for each type of anomaly found in the image.</p> <note> <p>Before calling <code>DetectAnomalies</code>, you must first start your model with the <a>StartModel</a> operation. You are charged for the amount of time, in minutes, that a model runs and for the number of anomaly detection units that your model uses. If you are not using a model, use the <a>StopModel</a> operation to stop your model. </p> </note> <p>For more information, see <i>Detecting anomalies in an image</i> in the Amazon Lookout for Vision developer guide.</p> <p>This operation requires permissions to perform the <code>lookoutvision:DetectAnomalies</code> operation.</p>

> Body parameter

```json
{
  "Body": "string"
}
```

<h3 id="detectanomalies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project that contains the model version that you want to use.|
|modelVersion|path|string|true|The version of the model that you want to use.|
|Content-Type|header|string|true|The type of the image passed in <code>Body</code>. Valid values are <code>image/png</code> (PNG format images) and <code>image/jpeg</code> (JPG format images). |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Body|body|string|true|The unencrypted image bytes that you want to analyze. |

> Example responses

> 200 Response

```json
{
  "DetectAnomalyResult": {
    "Source": {
      "Type": {}
    },
    "IsAnomalous": {},
    "Confidence": {},
    "Anomalies": {},
    "AnomalyMask": {}
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

<h3 id="detectanomalies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectAnomaliesResponse](#schemadetectanomaliesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasetEntries

<a id="opIdListDatasetEntries"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/datasets/string/entries \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-11-20/projects/{projectName}/datasets/{datasetType}/entries`

<p>Lists the JSON Lines within a dataset. An Amazon Lookout for Vision JSON Line contains the anomaly information for a single image, including the image location and the assigned label.</p> <p>This operation requires permissions to perform the <code>lookoutvision:ListDatasetEntries</code> operation.</p>

<h3 id="listdatasetentries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project that contains the dataset that you want to list.|
|datasetType|path|string|true|The type of the dataset that you want to list. Specify <code>train</code> to list the training dataset. Specify <code>test</code> to list the test dataset. If you have a single dataset project, specify <code>train</code>.|
|labeled|query|boolean|false|Specify <code>true</code> to include labeled entries, otherwise specify <code>false</code>. If you don't specify a value, Lookout for Vision returns all entries.|
|anomalyClass|query|string|false|Specify <code>normal</code> to include only normal images. Specify <code>anomaly</code> to only include anomalous entries. If you don't specify a value, Amazon Lookout for Vision returns normal and anomalous images.|
|createdBefore|query|string(date-time)|false|Only includes entries before the specified date in the response. For example, <code>2020-06-23T00:00:00</code>.|
|createdAfter|query|string(date-time)|false|Only includes entries after the specified date in the response. For example, <code>2020-06-23T00:00:00</code>.|
|nextToken|query|string|false|If the previous response was incomplete (because there is more data to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of dataset entries.|
|maxResults|query|integer|false|The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.|
|sourceRefContains|query|string|false|Perform a "contains" search on the values of the <code>source-ref</code> key within the dataset. For example a value of "IMG_17" returns all JSON Lines where the <code>source-ref</code> key value matches <i>*IMG_17*</i>.|
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
  "DatasetEntries": {},
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

<h3 id="listdatasetentries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasetEntriesResponse](#schemalistdatasetentriesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDatasetEntries

<a id="opIdUpdateDatasetEntries"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/datasets/string/entries \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Changes": "string"
  }'
```

`PATCH /2020-11-20/projects/{projectName}/datasets/{datasetType}/entries`

<p>Adds or updates one or more JSON Line entries in a dataset. A JSON Line includes information about an image used for training or testing an Amazon Lookout for Vision model.</p> <p>To update an existing JSON Line, use the <code>source-ref</code> field to identify the JSON Line. The JSON line that you supply replaces the existing JSON line. Any existing annotations that are not in the new JSON line are removed from the dataset. </p> <p>For more information, see <i>Defining JSON lines for anomaly classification</i> in the Amazon Lookout for Vision Developer Guide. </p> <note> <p>The images you reference in the <code>source-ref</code> field of a JSON line, must be in the same S3 bucket as the existing images in the dataset. </p> </note> <p>Updating a dataset might take a while to complete. To check the current status, call <a>DescribeDataset</a> and check the <code>Status</code> field in the response.</p> <p>This operation requires permissions to perform the <code>lookoutvision:UpdateDatasetEntries</code> operation.</p>

> Body parameter

```json
{
  "Changes": "string"
}
```

<h3 id="updatedatasetentries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project that contains the dataset that you want to update.|
|datasetType|path|string|true|The type of the dataset that you want to update. Specify <code>train</code> to update the training dataset. Specify <code>test</code> to update the test dataset. If you have a single dataset project, specify <code>train</code>.|
|X-Amzn-Client-Token|header|string|false|<p>ClientToken is an idempotency token that ensures a call to <code>UpdateDatasetEntries</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>UpdateDatasetEntries</code>. In this case, safely retry your call to <code>UpdateDatasetEntries</code> by using the same <code>ClientToken</code> parameter value.</p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple updates with the same dataset entries. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>UpdateDatasetEntries</code>. An idempotency token is active for 8 hours. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Changes|body|string|true|The entries to add to the dataset.|

> Example responses

> 202 Response

```json
{
  "Status": {}
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

<h3 id="updatedatasetentries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[UpdateDatasetEntriesResponse](#schemaupdatedatasetentriesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListModelPackagingJobs

<a id="opIdListModelPackagingJobs"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/modelpackagingjobs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-11-20/projects/{projectName}/modelpackagingjobs`

<p> Lists the model packaging jobs created for an Amazon Lookout for Vision project. </p> <p>This operation requires permissions to perform the <code>lookoutvision:ListModelPackagingJobs</code> operation. </p> <p>For more information, see <i>Using your Amazon Lookout for Vision model on an edge device</i> in the Amazon Lookout for Vision Developer Guide. </p>

<h3 id="listmodelpackagingjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true| The name of the project for which you want to list the model packaging jobs. |
|nextToken|query|string|false|If the previous response was incomplete (because there is more results to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. |
|maxResults|query|integer|false|The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100. |
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
  "ModelPackagingJobs": {},
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

<h3 id="listmodelpackagingjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListModelPackagingJobsResponse](#schemalistmodelpackagingjobsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartModelPackagingJob

<a id="opIdStartModelPackagingJob"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/modelpackagingjobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ModelVersion": "string",
    "JobName": "string",
    "Configuration": {
      "Greengrass": {
        "CompilerOptions": {},
        "TargetDevice": {},
        "TargetPlatform": {
          "Os": {},
          "Arch": {},
          "Accelerator": {}
        },
        "S3OutputLocation": {
          "Bucket": {},
          "Prefix": {}
        },
        "ComponentName": {},
        "ComponentVersion": {},
        "ComponentDescription": {},
        "Tags": {}
      }
    },
    "Description": "string"
  }'
```

`POST /2020-11-20/projects/{projectName}/modelpackagingjobs`

<p>Starts an Amazon Lookout for Vision model packaging job. A model packaging job creates an AWS IoT Greengrass component for a Lookout for Vision model. You can use the component to deploy your model to an edge device managed by Greengrass. </p> <p>Use the <a>DescribeModelPackagingJob</a> API to determine the current status of the job. The model packaging job is complete if the value of <code>Status</code> is <code>SUCCEEDED</code>.</p> <p>To deploy the component to the target device, use the component name and component version with the AWS IoT Greengrass <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CreateDeployment.html">CreateDeployment</a> API.</p> <p>This operation requires the following permissions:</p> <ul> <li> <p> <code>lookoutvision:StartModelPackagingJob</code> </p> </li> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>kms:GenerateDataKey</code> </p> </li> <li> <p> <code>greengrass:CreateComponentVersion</code> </p> </li> <li> <p> <code>greengrass:DescribeComponent</code> </p> </li> <li> <p>(Optional) <code>greengrass:TagResource</code>. Only required if you want to tag the component.</p> </li> </ul> <p>For more information, see <i>Using your Amazon Lookout for Vision model on an edge device</i> in the Amazon Lookout for Vision Developer Guide. </p>

> Body parameter

```json
{
  "ModelVersion": "string",
  "JobName": "string",
  "Configuration": {
    "Greengrass": {
      "CompilerOptions": {},
      "TargetDevice": {},
      "TargetPlatform": {
        "Os": {},
        "Arch": {},
        "Accelerator": {}
      },
      "S3OutputLocation": {
        "Bucket": {},
        "Prefix": {}
      },
      "ComponentName": {},
      "ComponentVersion": {},
      "ComponentDescription": {},
      "Tags": {}
    }
  },
  "Description": "string"
}
```

<h3 id="startmodelpackagingjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true| The name of the project which contains the version of the model that you want to package. |
|X-Amzn-Client-Token|header|string|false|<p>ClientToken is an idempotency token that ensures a call to <code>StartModelPackagingJob</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>StartModelPackagingJob</code>. In this case, safely retry your call to <code>StartModelPackagingJob</code> by using the same <code>ClientToken</code> parameter value.</p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple dataset creation requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>StartModelPackagingJob</code>. An idempotency token is active for 8 hours. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ModelVersion|body|string|true| The version of the model within the project that you want to package. |
|» JobName|body|string|false|A name for the model packaging job. If you don't supply a value, the service creates a job name for you. |
|» Configuration|body|object|true| Configuration information for a Amazon Lookout for Vision model packaging job. For more information, see <a>StartModelPackagingJob</a>. |
|» » Greengrass|body|object|false|none|
|» » » CompilerOptions|body|object|false|none|
|» » » TargetDevice|body|object|false|none|
|» » » TargetPlatform|body|object|false|none|
|» » » » Os|body|object|true|none|
|» » » » Arch|body|object|true|none|
|» » » » Accelerator|body|object|false|none|
|» » » S3OutputLocation|body|object|true|none|
|» » » » Bucket|body|object|true|none|
|» » » » Prefix|body|object|false|none|
|» » » ComponentName|body|object|true|none|
|» » » ComponentVersion|body|object|false|none|
|» » » ComponentDescription|body|object|false|none|
|» » » Tags|body|object|false|none|
|» Description|body|string|false|A description for the model packaging job. |

> Example responses

> 200 Response

```json
{
  "JobName": {}
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

<h3 id="startmodelpackagingjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartModelPackagingJobResponse](#schemastartmodelpackagingjobresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-11-20/tags/{resourceArn}`

<p>Returns a list of tags attached to the specified Amazon Lookout for Vision model.</p> <p>This operation requires permissions to perform the <code>lookoutvision:ListTagsForResource</code> operation.</p>

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the model for which you want to list tags. |
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
  "Tags": {}
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /2020-11-20/tags/{resourceArn}`

<p>Adds one or more key-value tags to an Amazon Lookout for Vision model. For more information, see <i>Tagging a model</i> in the <i>Amazon Lookout for Vision Developer Guide</i>. </p> <p>This operation requires permissions to perform the <code>lookoutvision:TagResource</code> operation.</p>

> Body parameter

```json
{
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the model to assign the tags.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|[[Tag](#schematag)]|true|The key-value tags to assign to the model.|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartModel

<a id="opIdStartModel"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/models/string/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MinInferenceUnits": 1,
    "MaxInferenceUnits": 1
  }'
```

`POST /2020-11-20/projects/{projectName}/models/{modelVersion}/start`

<p>Starts the running of the version of an Amazon Lookout for Vision model. Starting a model takes a while to complete. To check the current state of the model, use <a>DescribeModel</a>.</p> <p>A model is ready to use when its status is <code>HOSTED</code>.</p> <p>Once the model is running, you can detect custom labels in new images by calling <a>DetectAnomalies</a>.</p> <note> <p>You are charged for the amount of time that the model is running. To stop a running model, call <a>StopModel</a>.</p> </note> <p>This operation requires permissions to perform the <code>lookoutvision:StartModel</code> operation.</p>

> Body parameter

```json
{
  "MinInferenceUnits": 1,
  "MaxInferenceUnits": 1
}
```

<h3 id="startmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project that contains the model that you want to start.|
|modelVersion|path|string|true|The version of the model that you want to start.|
|X-Amzn-Client-Token|header|string|false|<p>ClientToken is an idempotency token that ensures a call to <code>StartModel</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>StartModel</code>. In this case, safely retry your call to <code>StartModel</code> by using the same <code>ClientToken</code> parameter value. </p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple start requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>StartModel</code>. An idempotency token is active for 8 hours. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MinInferenceUnits|body|integer|true|The minimum number of inference units to use. A single inference unit represents 1 hour of processing. Use a higher number to increase the TPS throughput of your model. You are charged for the number of inference units that you use. |
|» MaxInferenceUnits|body|integer|false|The maximum number of inference units to use for auto-scaling the model. If you don't specify a value, Amazon Lookout for Vision doesn't auto-scale the model.|

> Example responses

> 202 Response

```json
{
  "Status": {}
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

<h3 id="startmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[StartModelResponse](#schemastartmodelresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopModel

<a id="opIdStopModel"></a>

> Code samples

```bash
curl https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/string/models/string/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /2020-11-20/projects/{projectName}/models/{modelVersion}/stop`

<p>Stops the hosting of a running model. The operation might take a while to complete. To check the current status, call <a>DescribeModel</a>. </p> <p>After the model hosting stops, the <code>Status</code> of the model is <code>TRAINED</code>.</p> <p>This operation requires permissions to perform the <code>lookoutvision:StopModel</code> operation.</p>

<h3 id="stopmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|The name of the project that contains the model that you want to stop.|
|modelVersion|path|string|true|The version of the model that you want to stop.|
|X-Amzn-Client-Token|header|string|false|<p>ClientToken is an idempotency token that ensures a call to <code>StopModel</code> completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from <code>StopModel</code>. In this case, safely retry your call to <code>StopModel</code> by using the same <code>ClientToken</code> parameter value.</p> <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple stop requests. You'll need to provide your own value for other use cases. </p> <p>An error occurs if the other input parameters are not the same as in the first request. Using a different value for <code>ClientToken</code> is considered a new call to <code>StopModel</code>. An idempotency token is active for 8 hours. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

```json
{
  "Status": {}
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

<h3 id="stopmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[StopModelResponse](#schemastopmodelresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-11-20/tags/{resourceArn}#tagKeys`

<p>Removes one or more tags from an Amazon Lookout for Vision model. For more information, see <i>Tagging a model</i> in the <i>Amazon Lookout for Vision Developer Guide</i>. </p> <p>This operation requires permissions to perform the <code>lookoutvision:UntagResource</code> operation.</p>

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the model from which you want to remove tags. |
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of the keys of the tags that you want to remove.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateDatasetResponse">CreateDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetresponse"></a>
<a id="schema_CreateDatasetResponse"></a>
<a id="tocScreatedatasetresponse"></a>
<a id="tocscreatedatasetresponse"></a>

```json
{
  "DatasetMetadata": {
    "DatasetType": {},
    "CreationTimestamp": {},
    "Status": {},
    "StatusMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetMetadata|object|false|none|none|

<h2 id="tocS_DatasetGroundTruthManifest">DatasetGroundTruthManifest</h2>
<!-- backwards compatibility -->
<a id="schemadatasetgroundtruthmanifest"></a>
<a id="schema_DatasetGroundTruthManifest"></a>
<a id="tocSdatasetgroundtruthmanifest"></a>
<a id="tocsdatasetgroundtruthmanifest"></a>

```json
{
  "S3Object": {
    "Bucket": {},
    "Key": {},
    "VersionId": {}
  }
}
```

Location information about a manifest file. You can use a manifest file to create a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Object|object|false|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

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

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateModelResponse">CreateModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodelresponse"></a>
<a id="schema_CreateModelResponse"></a>
<a id="tocScreatemodelresponse"></a>
<a id="tocscreatemodelresponse"></a>

```json
{
  "ModelMetadata": {
    "CreationTimestamp": {},
    "ModelVersion": {},
    "ModelArn": {},
    "Description": {},
    "Status": {},
    "StatusMessage": {},
    "Performance": {
      "F1Score": {},
      "Recall": {},
      "Precision": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelMetadata|object|false|none|none|

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
{
  "Bucket": {},
  "Prefix": {}
}
```

Information about the location of training output or the output of a model packaging job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|Prefix|object|false|none|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

A key and value pair that is attached to the specified Amazon Lookout for Vision model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_CreateProjectResponse">CreateProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectresponse"></a>
<a id="schema_CreateProjectResponse"></a>
<a id="tocScreateprojectresponse"></a>
<a id="tocscreateprojectresponse"></a>

```json
{
  "ProjectMetadata": {
    "ProjectArn": {},
    "ProjectName": {},
    "CreationTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProjectMetadata|object|false|none|none|

<h2 id="tocS_DeleteDatasetResponse">DeleteDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetresponse"></a>
<a id="schema_DeleteDatasetResponse"></a>
<a id="tocSdeletedatasetresponse"></a>
<a id="tocsdeletedatasetresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteModelResponse">DeleteModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemodelresponse"></a>
<a id="schema_DeleteModelResponse"></a>
<a id="tocSdeletemodelresponse"></a>
<a id="tocsdeletemodelresponse"></a>

```json
{
  "ModelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelArn|object|false|none|none|

<h2 id="tocS_DeleteProjectResponse">DeleteProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectresponse"></a>
<a id="schema_DeleteProjectResponse"></a>
<a id="tocSdeleteprojectresponse"></a>
<a id="tocsdeleteprojectresponse"></a>

```json
{
  "ProjectArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProjectArn|object|false|none|none|

<h2 id="tocS_DescribeDatasetResponse">DescribeDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetresponse"></a>
<a id="schema_DescribeDatasetResponse"></a>
<a id="tocSdescribedatasetresponse"></a>
<a id="tocsdescribedatasetresponse"></a>

```json
{
  "DatasetDescription": {
    "ProjectName": {},
    "DatasetType": {},
    "CreationTimestamp": {},
    "LastUpdatedTimestamp": {},
    "Status": {},
    "StatusMessage": {},
    "ImageStats": {
      "Total": {},
      "Labeled": {},
      "Normal": {},
      "Anomaly": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetDescription|object|false|none|none|

<h2 id="tocS_DescribeModelResponse">DescribeModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemodelresponse"></a>
<a id="schema_DescribeModelResponse"></a>
<a id="tocSdescribemodelresponse"></a>
<a id="tocsdescribemodelresponse"></a>

```json
{
  "ModelDescription": {
    "ModelVersion": {},
    "ModelArn": {},
    "CreationTimestamp": {},
    "Description": {},
    "Status": {},
    "StatusMessage": {},
    "Performance": {
      "F1Score": {},
      "Recall": {},
      "Precision": {}
    },
    "OutputConfig": {
      "S3Location": {
        "Bucket": {},
        "Prefix": {}
      }
    },
    "EvaluationManifest": {
      "Bucket": {},
      "Key": {}
    },
    "EvaluationResult": {
      "Bucket": {},
      "Key": {}
    },
    "EvaluationEndTimestamp": {},
    "KmsKeyId": {},
    "MinInferenceUnits": {},
    "MaxInferenceUnits": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelDescription|object|false|none|none|

<h2 id="tocS_DescribeModelPackagingJobResponse">DescribeModelPackagingJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemodelpackagingjobresponse"></a>
<a id="schema_DescribeModelPackagingJobResponse"></a>
<a id="tocSdescribemodelpackagingjobresponse"></a>
<a id="tocsdescribemodelpackagingjobresponse"></a>

```json
{
  "ModelPackagingDescription": {
    "JobName": {},
    "ProjectName": {},
    "ModelVersion": {},
    "ModelPackagingConfiguration": {
      "Greengrass": {
        "CompilerOptions": {},
        "TargetDevice": {},
        "TargetPlatform": {
          "Os": {},
          "Arch": {},
          "Accelerator": {}
        },
        "S3OutputLocation": {
          "Bucket": {},
          "Prefix": {}
        },
        "ComponentName": {},
        "ComponentVersion": {},
        "ComponentDescription": {},
        "Tags": {}
      }
    },
    "ModelPackagingJobDescription": {},
    "ModelPackagingMethod": {},
    "ModelPackagingOutputDetails": {
      "Greengrass": {
        "ComponentVersionArn": {},
        "ComponentName": {},
        "ComponentVersion": {}
      }
    },
    "Status": {},
    "StatusMessage": {},
    "CreationTimestamp": {},
    "LastUpdatedTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelPackagingDescription|object|false|none|none|

<h2 id="tocS_DescribeProjectResponse">DescribeProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprojectresponse"></a>
<a id="schema_DescribeProjectResponse"></a>
<a id="tocSdescribeprojectresponse"></a>
<a id="tocsdescribeprojectresponse"></a>

```json
{
  "ProjectDescription": {
    "ProjectArn": {},
    "ProjectName": {},
    "CreationTimestamp": {},
    "Datasets": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProjectDescription|object|false|none|none|

<h2 id="tocS_DetectAnomaliesResponse">DetectAnomaliesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetectanomaliesresponse"></a>
<a id="schema_DetectAnomaliesResponse"></a>
<a id="tocSdetectanomaliesresponse"></a>
<a id="tocsdetectanomaliesresponse"></a>

```json
{
  "DetectAnomalyResult": {
    "Source": {
      "Type": {}
    },
    "IsAnomalous": {},
    "Confidence": {},
    "Anomalies": {},
    "AnomalyMask": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DetectAnomalyResult|object|false|none|none|

<h2 id="tocS_ListDatasetEntriesResponse">ListDatasetEntriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetentriesresponse"></a>
<a id="schema_ListDatasetEntriesResponse"></a>
<a id="tocSlistdatasetentriesresponse"></a>
<a id="tocslistdatasetentriesresponse"></a>

```json
{
  "DatasetEntries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetEntries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListModelPackagingJobsResponse">ListModelPackagingJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelpackagingjobsresponse"></a>
<a id="schema_ListModelPackagingJobsResponse"></a>
<a id="tocSlistmodelpackagingjobsresponse"></a>
<a id="tocslistmodelpackagingjobsresponse"></a>

```json
{
  "ModelPackagingJobs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelPackagingJobs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListModelsResponse">ListModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelsresponse"></a>
<a id="schema_ListModelsResponse"></a>
<a id="tocSlistmodelsresponse"></a>
<a id="tocslistmodelsresponse"></a>

```json
{
  "Models": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Models|object|false|none|none|
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
|Projects|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_StartModelResponse">StartModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartmodelresponse"></a>
<a id="schema_StartModelResponse"></a>
<a id="tocSstartmodelresponse"></a>
<a id="tocsstartmodelresponse"></a>

```json
{
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_StartModelPackagingJobResponse">StartModelPackagingJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartmodelpackagingjobresponse"></a>
<a id="schema_StartModelPackagingJobResponse"></a>
<a id="tocSstartmodelpackagingjobresponse"></a>
<a id="tocsstartmodelpackagingjobresponse"></a>

```json
{
  "JobName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|

<h2 id="tocS_GreengrassConfiguration">GreengrassConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemagreengrassconfiguration"></a>
<a id="schema_GreengrassConfiguration"></a>
<a id="tocSgreengrassconfiguration"></a>
<a id="tocsgreengrassconfiguration"></a>

```json
{
  "CompilerOptions": {},
  "TargetDevice": {},
  "TargetPlatform": {
    "Os": {},
    "Arch": {},
    "Accelerator": {}
  },
  "S3OutputLocation": {
    "Bucket": {},
    "Prefix": {}
  },
  "ComponentName": {},
  "ComponentVersion": {},
  "ComponentDescription": {},
  "Tags": {}
}
```

<p>Configuration information for the AWS IoT Greengrass component created in a model packaging job. For more information, see <a>StartModelPackagingJob</a>. </p> <note> <p>You can't specify a component with the same <code>ComponentName</code> and <code>Componentversion</code> as an existing component with the same component name and component version.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CompilerOptions|object|false|none|none|
|TargetDevice|object|false|none|none|
|TargetPlatform|object|false|none|none|
|S3OutputLocation|object|true|none|none|
|ComponentName|object|true|none|none|
|ComponentVersion|object|false|none|none|
|ComponentDescription|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_StopModelResponse">StopModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopmodelresponse"></a>
<a id="schema_StopModelResponse"></a>
<a id="tocSstopmodelresponse"></a>
<a id="tocsstopmodelresponse"></a>

```json
{
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

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

<h2 id="tocS_UpdateDatasetEntriesResponse">UpdateDatasetEntriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetentriesresponse"></a>
<a id="schema_UpdateDatasetEntriesResponse"></a>
<a id="tocSupdatedatasetentriesresponse"></a>
<a id="tocsupdatedatasetentriesresponse"></a>

```json
{
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_AnomalyName">AnomalyName</h2>
<!-- backwards compatibility -->
<a id="schemaanomalyname"></a>
<a id="schema_AnomalyName"></a>
<a id="tocSanomalyname"></a>
<a id="tocsanomalyname"></a>

```json
"string"
```

<h2 id="tocS_PixelAnomaly">PixelAnomaly</h2>
<!-- backwards compatibility -->
<a id="schemapixelanomaly"></a>
<a id="schema_PixelAnomaly"></a>
<a id="tocSpixelanomaly"></a>
<a id="tocspixelanomaly"></a>

```json
{
  "TotalPercentageArea": {},
  "Color": {}
}
```

Information about the pixels in an anomaly mask. For more information, see <a>Anomaly</a>. <code>PixelAnomaly</code> is only returned by image segmentation models.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalPercentageArea|object|false|none|none|
|Color|object|false|none|none|

<h2 id="tocS_Anomaly">Anomaly</h2>
<!-- backwards compatibility -->
<a id="schemaanomaly"></a>
<a id="schema_Anomaly"></a>
<a id="tocSanomaly"></a>
<a id="tocsanomaly"></a>

```json
{
  "Name": {},
  "PixelAnomaly": {
    "TotalPercentageArea": {},
    "Color": {}
  }
}
```

Information about an anomaly type found on an image by an image segmentation model. For more information, see <a>DetectAnomalies</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|PixelAnomaly|object|false|none|none|

<h2 id="tocS_AnomalyClassFilter">AnomalyClassFilter</h2>
<!-- backwards compatibility -->
<a id="schemaanomalyclassfilter"></a>
<a id="schema_AnomalyClassFilter"></a>
<a id="tocSanomalyclassfilter"></a>
<a id="tocsanomalyclassfilter"></a>

```json
"string"
```

<h2 id="tocS_AnomalyList">AnomalyList</h2>
<!-- backwards compatibility -->
<a id="schemaanomalylist"></a>
<a id="schema_AnomalyList"></a>
<a id="tocSanomalylist"></a>
<a id="tocsanomalylist"></a>

```json
[
  {
    "Name": {},
    "PixelAnomaly": {
      "TotalPercentageArea": {},
      "Color": {}
    }
  }
]
```

<h2 id="tocS_AnomalyMask">AnomalyMask</h2>
<!-- backwards compatibility -->
<a id="schemaanomalymask"></a>
<a id="schema_AnomalyMask"></a>
<a id="tocSanomalymask"></a>
<a id="tocsanomalymask"></a>

```json
"string"
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

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_Color">Color</h2>
<!-- backwards compatibility -->
<a id="schemacolor"></a>
<a id="schema_Color"></a>
<a id="tocScolor"></a>
<a id="tocscolor"></a>

```json
"strings"
```

<h2 id="tocS_CompilerOptions">CompilerOptions</h2>
<!-- backwards compatibility -->
<a id="schemacompileroptions"></a>
<a id="schema_CompilerOptions"></a>
<a id="tocScompileroptions"></a>
<a id="tocscompileroptions"></a>

```json
"string"
```

<h2 id="tocS_ComponentDescription">ComponentDescription</h2>
<!-- backwards compatibility -->
<a id="schemacomponentdescription"></a>
<a id="schema_ComponentDescription"></a>
<a id="tocScomponentdescription"></a>
<a id="tocscomponentdescription"></a>

```json
"string"
```

<h2 id="tocS_ComponentName">ComponentName</h2>
<!-- backwards compatibility -->
<a id="schemacomponentname"></a>
<a id="schema_ComponentName"></a>
<a id="tocScomponentname"></a>
<a id="tocscomponentname"></a>

```json
"string"
```

<h2 id="tocS_ComponentVersion">ComponentVersion</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversion"></a>
<a id="schema_ComponentVersion"></a>
<a id="tocScomponentversion"></a>
<a id="tocscomponentversion"></a>

```json
"string"
```

<h2 id="tocS_ComponentVersionArn">ComponentVersionArn</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversionarn"></a>
<a id="schema_ComponentVersionArn"></a>
<a id="tocScomponentversionarn"></a>
<a id="tocscomponentversionarn"></a>

```json
"string"
```

<h2 id="tocS_ContentType">ContentType</h2>
<!-- backwards compatibility -->
<a id="schemacontenttype"></a>
<a id="schema_ContentType"></a>
<a id="tocScontenttype"></a>
<a id="tocscontenttype"></a>

```json
"string"
```

<h2 id="tocS_ProjectName">ProjectName</h2>
<!-- backwards compatibility -->
<a id="schemaprojectname"></a>
<a id="schema_ProjectName"></a>
<a id="tocSprojectname"></a>
<a id="tocsprojectname"></a>

```json
"string"
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

<h2 id="tocS_DatasetSource">DatasetSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasetsource"></a>
<a id="schema_DatasetSource"></a>
<a id="tocSdatasetsource"></a>
<a id="tocsdatasetsource"></a>

```json
{
  "GroundTruthManifest": {
    "S3Object": {
      "Bucket": {},
      "Key": {},
      "VersionId": {}
    }
  }
}
```

Information about the location of a manifest file that Amazon Lookout for Vision uses to to create a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroundTruthManifest|object|false|none|none|

<h2 id="tocS_CreateDatasetRequest">CreateDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetrequest"></a>
<a id="schema_CreateDatasetRequest"></a>
<a id="tocScreatedatasetrequest"></a>
<a id="tocscreatedatasetrequest"></a>

```json
{
  "DatasetType": {},
  "DatasetSource": {
    "GroundTruthManifest": {
      "S3Object": {
        "Bucket": {},
        "Key": {},
        "VersionId": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetType|object|true|none|none|
|DatasetSource|object|false|none|none|

<h2 id="tocS_DatasetMetadata">DatasetMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadatasetmetadata"></a>
<a id="schema_DatasetMetadata"></a>
<a id="tocSdatasetmetadata"></a>
<a id="tocsdatasetmetadata"></a>

```json
{
  "DatasetType": {},
  "CreationTimestamp": {},
  "Status": {},
  "StatusMessage": {}
}
```

Summary information for an Amazon Lookout for Vision dataset. For more information, see <a>DescribeDataset</a> and <a>ProjectDescription</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetType|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|

<h2 id="tocS_ModelDescriptionMessage">ModelDescriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodeldescriptionmessage"></a>
<a id="schema_ModelDescriptionMessage"></a>
<a id="tocSmodeldescriptionmessage"></a>
<a id="tocsmodeldescriptionmessage"></a>

```json
"string"
```

<h2 id="tocS_OutputConfig">OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoutputconfig"></a>
<a id="schema_OutputConfig"></a>
<a id="tocSoutputconfig"></a>
<a id="tocsoutputconfig"></a>

```json
{
  "S3Location": {
    "Bucket": {},
    "Prefix": {}
  }
}
```

The S3 location where Amazon Lookout for Vision saves model training files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Location|object|true|none|none|

<h2 id="tocS_KmsKeyId">KmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyid"></a>
<a id="schema_KmsKeyId"></a>
<a id="tocSkmskeyid"></a>
<a id="tocskmskeyid"></a>

```json
"string"
```

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_CreateModelRequest">CreateModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodelrequest"></a>
<a id="schema_CreateModelRequest"></a>
<a id="tocScreatemodelrequest"></a>
<a id="tocscreatemodelrequest"></a>

```json
{
  "Description": {},
  "OutputConfig": {
    "S3Location": {
      "Bucket": {},
      "Prefix": {}
    }
  },
  "KmsKeyId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|OutputConfig|object|true|none|none|
|KmsKeyId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ModelMetadata">ModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamodelmetadata"></a>
<a id="schema_ModelMetadata"></a>
<a id="tocSmodelmetadata"></a>
<a id="tocsmodelmetadata"></a>

```json
{
  "CreationTimestamp": {},
  "ModelVersion": {},
  "ModelArn": {},
  "Description": {},
  "Status": {},
  "StatusMessage": {},
  "Performance": {
    "F1Score": {},
    "Recall": {},
    "Precision": {}
  }
}
```

Describes an Amazon Lookout for Vision model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationTimestamp|object|false|none|none|
|ModelVersion|object|false|none|none|
|ModelArn|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|Performance|object|false|none|none|

<h2 id="tocS_CreateProjectRequest">CreateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectrequest"></a>
<a id="schema_CreateProjectRequest"></a>
<a id="tocScreateprojectrequest"></a>
<a id="tocscreateprojectrequest"></a>

```json
{
  "ProjectName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProjectName|object|true|none|none|

<h2 id="tocS_ProjectMetadata">ProjectMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaprojectmetadata"></a>
<a id="schema_ProjectMetadata"></a>
<a id="tocSprojectmetadata"></a>
<a id="tocsprojectmetadata"></a>

```json
{
  "ProjectArn": {},
  "ProjectName": {},
  "CreationTimestamp": {}
}
```

Metadata about an Amazon Lookout for Vision project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProjectArn|object|false|none|none|
|ProjectName|object|false|none|none|
|CreationTimestamp|object|false|none|none|

<h2 id="tocS_DatasetChanges">DatasetChanges</h2>
<!-- backwards compatibility -->
<a id="schemadatasetchanges"></a>
<a id="schema_DatasetChanges"></a>
<a id="tocSdatasetchanges"></a>
<a id="tocsdatasetchanges"></a>

```json
"string"
```

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DatasetStatus">DatasetStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatasetstatus"></a>
<a id="schema_DatasetStatus"></a>
<a id="tocSdatasetstatus"></a>
<a id="tocsdatasetstatus"></a>

```json
"CREATE_IN_PROGRESS"
```

<h2 id="tocS_DatasetStatusMessage">DatasetStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemadatasetstatusmessage"></a>
<a id="schema_DatasetStatusMessage"></a>
<a id="tocSdatasetstatusmessage"></a>
<a id="tocsdatasetstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_DatasetImageStats">DatasetImageStats</h2>
<!-- backwards compatibility -->
<a id="schemadatasetimagestats"></a>
<a id="schema_DatasetImageStats"></a>
<a id="tocSdatasetimagestats"></a>
<a id="tocsdatasetimagestats"></a>

```json
{
  "Total": {},
  "Labeled": {},
  "Normal": {},
  "Anomaly": {}
}
```

Statistics about the images in a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Total|object|false|none|none|
|Labeled|object|false|none|none|
|Normal|object|false|none|none|
|Anomaly|object|false|none|none|

<h2 id="tocS_DatasetDescription">DatasetDescription</h2>
<!-- backwards compatibility -->
<a id="schemadatasetdescription"></a>
<a id="schema_DatasetDescription"></a>
<a id="tocSdatasetdescription"></a>
<a id="tocsdatasetdescription"></a>

```json
{
  "ProjectName": {},
  "DatasetType": {},
  "CreationTimestamp": {},
  "LastUpdatedTimestamp": {},
  "Status": {},
  "StatusMessage": {},
  "ImageStats": {
    "Total": {},
    "Labeled": {},
    "Normal": {},
    "Anomaly": {}
  }
}
```

The description for a dataset. For more information, see <a>DescribeDataset</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProjectName|object|false|none|none|
|DatasetType|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|ImageStats|object|false|none|none|

<h2 id="tocS_DatasetEntry">DatasetEntry</h2>
<!-- backwards compatibility -->
<a id="schemadatasetentry"></a>
<a id="schema_DatasetEntry"></a>
<a id="tocSdatasetentry"></a>
<a id="tocsdatasetentry"></a>

```json
"string"
```

<h2 id="tocS_DatasetEntryList">DatasetEntryList</h2>
<!-- backwards compatibility -->
<a id="schemadatasetentrylist"></a>
<a id="schema_DatasetEntryList"></a>
<a id="tocSdatasetentrylist"></a>
<a id="tocsdatasetentrylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InputS3Object">InputS3Object</h2>
<!-- backwards compatibility -->
<a id="schemainputs3object"></a>
<a id="schema_InputS3Object"></a>
<a id="tocSinputs3object"></a>
<a id="tocsinputs3object"></a>

```json
{
  "Bucket": {},
  "Key": {},
  "VersionId": {}
}
```

Amazon S3 Location information for an input manifest file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|Key|object|true|none|none|
|VersionId|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_DatasetMetadataList">DatasetMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemadatasetmetadatalist"></a>
<a id="schema_DatasetMetadataList"></a>
<a id="tocSdatasetmetadatalist"></a>
<a id="tocsdatasetmetadatalist"></a>

```json
[
  {
    "DatasetType": {},
    "CreationTimestamp": {},
    "Status": {},
    "StatusMessage": {}
  }
]
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

<h2 id="tocS_ModelVersionNoLatest">ModelVersionNoLatest</h2>
<!-- backwards compatibility -->
<a id="schemamodelversionnolatest"></a>
<a id="schema_ModelVersionNoLatest"></a>
<a id="tocSmodelversionnolatest"></a>
<a id="tocsmodelversionnolatest"></a>

```json
"string"
```

<h2 id="tocS_DeleteModelRequest">DeleteModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemodelrequest"></a>
<a id="schema_DeleteModelRequest"></a>
<a id="tocSdeletemodelrequest"></a>
<a id="tocsdeletemodelrequest"></a>

```json
{}
```

<h2 id="tocS_ModelArn">ModelArn</h2>
<!-- backwards compatibility -->
<a id="schemamodelarn"></a>
<a id="schema_ModelArn"></a>
<a id="tocSmodelarn"></a>
<a id="tocsmodelarn"></a>

```json
"string"
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

<h2 id="tocS_ProjectArn">ProjectArn</h2>
<!-- backwards compatibility -->
<a id="schemaprojectarn"></a>
<a id="schema_ProjectArn"></a>
<a id="tocSprojectarn"></a>
<a id="tocsprojectarn"></a>

```json
"string"
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

<h2 id="tocS_ModelPackagingJobName">ModelPackagingJobName</h2>
<!-- backwards compatibility -->
<a id="schemamodelpackagingjobname"></a>
<a id="schema_ModelPackagingJobName"></a>
<a id="tocSmodelpackagingjobname"></a>
<a id="tocsmodelpackagingjobname"></a>

```json
"string"
```

<h2 id="tocS_DescribeModelPackagingJobRequest">DescribeModelPackagingJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemodelpackagingjobrequest"></a>
<a id="schema_DescribeModelPackagingJobRequest"></a>
<a id="tocSdescribemodelpackagingjobrequest"></a>
<a id="tocsdescribemodelpackagingjobrequest"></a>

```json
{}
```

<h2 id="tocS_ModelPackagingDescription">ModelPackagingDescription</h2>
<!-- backwards compatibility -->
<a id="schemamodelpackagingdescription"></a>
<a id="schema_ModelPackagingDescription"></a>
<a id="tocSmodelpackagingdescription"></a>
<a id="tocsmodelpackagingdescription"></a>

```json
{
  "JobName": {},
  "ProjectName": {},
  "ModelVersion": {},
  "ModelPackagingConfiguration": {
    "Greengrass": {
      "CompilerOptions": {},
      "TargetDevice": {},
      "TargetPlatform": {
        "Os": {},
        "Arch": {},
        "Accelerator": {}
      },
      "S3OutputLocation": {
        "Bucket": {},
        "Prefix": {}
      },
      "ComponentName": {},
      "ComponentVersion": {},
      "ComponentDescription": {},
      "Tags": {}
    }
  },
  "ModelPackagingJobDescription": {},
  "ModelPackagingMethod": {},
  "ModelPackagingOutputDetails": {
    "Greengrass": {
      "ComponentVersionArn": {},
      "ComponentName": {},
      "ComponentVersion": {}
    }
  },
  "Status": {},
  "StatusMessage": {},
  "CreationTimestamp": {},
  "LastUpdatedTimestamp": {}
}
```

 Information about a model packaging job. For more information, see <a>DescribeModelPackagingJob</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|ProjectName|object|false|none|none|
|ModelVersion|object|false|none|none|
|ModelPackagingConfiguration|object|false|none|none|
|ModelPackagingJobDescription|object|false|none|none|
|ModelPackagingMethod|object|false|none|none|
|ModelPackagingOutputDetails|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|

<h2 id="tocS_ModelVersion">ModelVersion</h2>
<!-- backwards compatibility -->
<a id="schemamodelversion"></a>
<a id="schema_ModelVersion"></a>
<a id="tocSmodelversion"></a>
<a id="tocsmodelversion"></a>

```json
"string"
```

<h2 id="tocS_DescribeModelRequest">DescribeModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemodelrequest"></a>
<a id="schema_DescribeModelRequest"></a>
<a id="tocSdescribemodelrequest"></a>
<a id="tocsdescribemodelrequest"></a>

```json
{}
```

<h2 id="tocS_ModelDescription">ModelDescription</h2>
<!-- backwards compatibility -->
<a id="schemamodeldescription"></a>
<a id="schema_ModelDescription"></a>
<a id="tocSmodeldescription"></a>
<a id="tocsmodeldescription"></a>

```json
{
  "ModelVersion": {},
  "ModelArn": {},
  "CreationTimestamp": {},
  "Description": {},
  "Status": {},
  "StatusMessage": {},
  "Performance": {
    "F1Score": {},
    "Recall": {},
    "Precision": {}
  },
  "OutputConfig": {
    "S3Location": {
      "Bucket": {},
      "Prefix": {}
    }
  },
  "EvaluationManifest": {
    "Bucket": {},
    "Key": {}
  },
  "EvaluationResult": {
    "Bucket": {},
    "Key": {}
  },
  "EvaluationEndTimestamp": {},
  "KmsKeyId": {},
  "MinInferenceUnits": {},
  "MaxInferenceUnits": {}
}
```

Describes an Amazon Lookout for Vision model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelVersion|object|false|none|none|
|ModelArn|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|Performance|object|false|none|none|
|OutputConfig|object|false|none|none|
|EvaluationManifest|object|false|none|none|
|EvaluationResult|object|false|none|none|
|EvaluationEndTimestamp|object|false|none|none|
|KmsKeyId|object|false|none|none|
|MinInferenceUnits|object|false|none|none|
|MaxInferenceUnits|object|false|none|none|

<h2 id="tocS_DescribeProjectRequest">DescribeProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprojectrequest"></a>
<a id="schema_DescribeProjectRequest"></a>
<a id="tocSdescribeprojectrequest"></a>
<a id="tocsdescribeprojectrequest"></a>

```json
{}
```

<h2 id="tocS_ProjectDescription">ProjectDescription</h2>
<!-- backwards compatibility -->
<a id="schemaprojectdescription"></a>
<a id="schema_ProjectDescription"></a>
<a id="tocSprojectdescription"></a>
<a id="tocsprojectdescription"></a>

```json
{
  "ProjectArn": {},
  "ProjectName": {},
  "CreationTimestamp": {},
  "Datasets": {}
}
```

Describe an Amazon Lookout for Vision project. For more information, see <a>DescribeProject</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProjectArn|object|false|none|none|
|ProjectName|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|Datasets|object|false|none|none|

<h2 id="tocS_Stream">Stream</h2>
<!-- backwards compatibility -->
<a id="schemastream"></a>
<a id="schema_Stream"></a>
<a id="tocSstream"></a>
<a id="tocsstream"></a>

```json
"string"
```

<h2 id="tocS_DetectAnomaliesRequest">DetectAnomaliesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetectanomaliesrequest"></a>
<a id="schema_DetectAnomaliesRequest"></a>
<a id="tocSdetectanomaliesrequest"></a>
<a id="tocsdetectanomaliesrequest"></a>

```json
{
  "Body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|true|none|none|

<h2 id="tocS_DetectAnomalyResult">DetectAnomalyResult</h2>
<!-- backwards compatibility -->
<a id="schemadetectanomalyresult"></a>
<a id="schema_DetectAnomalyResult"></a>
<a id="tocSdetectanomalyresult"></a>
<a id="tocsdetectanomalyresult"></a>

```json
{
  "Source": {
    "Type": {}
  },
  "IsAnomalous": {},
  "Confidence": {},
  "Anomalies": {},
  "AnomalyMask": {}
}
```

The prediction results from a call to <a>DetectAnomalies</a>. <code>DetectAnomalyResult</code> includes classification information for the prediction (<code>IsAnomalous</code> and <code>Confidence</code>). If the model you use is an image segementation model, <code>DetectAnomalyResult</code> also includes segmentation information (<code>Anomalies</code> and <code>AnomalyMask</code>). Classification information is calculated separately from segmentation information and you shouldn't assume a relationship between them.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Source|object|false|none|none|
|IsAnomalous|object|false|none|none|
|Confidence|object|false|none|none|
|Anomalies|object|false|none|none|
|AnomalyMask|object|false|none|none|

<h2 id="tocS_ImageSource">ImageSource</h2>
<!-- backwards compatibility -->
<a id="schemaimagesource"></a>
<a id="schema_ImageSource"></a>
<a id="tocSimagesource"></a>
<a id="tocsimagesource"></a>

```json
{
  "Type": {}
}
```

The source for an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|

<h2 id="tocS_Float">Float</h2>
<!-- backwards compatibility -->
<a id="schemafloat"></a>
<a id="schema_Float"></a>
<a id="tocSfloat"></a>
<a id="tocsfloat"></a>

```json
0
```

<h2 id="tocS_TargetDevice">TargetDevice</h2>
<!-- backwards compatibility -->
<a id="schematargetdevice"></a>
<a id="schema_TargetDevice"></a>
<a id="tocStargetdevice"></a>
<a id="tocstargetdevice"></a>

```json
"jetson_xavier"
```

<h2 id="tocS_TargetPlatform">TargetPlatform</h2>
<!-- backwards compatibility -->
<a id="schematargetplatform"></a>
<a id="schema_TargetPlatform"></a>
<a id="tocStargetplatform"></a>
<a id="tocstargetplatform"></a>

```json
{
  "Os": {},
  "Arch": {},
  "Accelerator": {}
}
```

The platform on which a model runs on an AWS IoT Greengrass core device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Os|object|true|none|none|
|Arch|object|true|none|none|
|Accelerator|object|false|none|none|

<h2 id="tocS_GreengrassOutputDetails">GreengrassOutputDetails</h2>
<!-- backwards compatibility -->
<a id="schemagreengrassoutputdetails"></a>
<a id="schema_GreengrassOutputDetails"></a>
<a id="tocSgreengrassoutputdetails"></a>
<a id="tocsgreengrassoutputdetails"></a>

```json
{
  "ComponentVersionArn": {},
  "ComponentName": {},
  "ComponentVersion": {}
}
```

Information about the AWS IoT Greengrass component created by a model packaging job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComponentVersionArn|object|false|none|none|
|ComponentName|object|false|none|none|
|ComponentVersion|object|false|none|none|

<h2 id="tocS_ImageSourceType">ImageSourceType</h2>
<!-- backwards compatibility -->
<a id="schemaimagesourcetype"></a>
<a id="schema_ImageSourceType"></a>
<a id="tocSimagesourcetype"></a>
<a id="tocsimagesourcetype"></a>

```json
"string"
```

<h2 id="tocS_InferenceUnits">InferenceUnits</h2>
<!-- backwards compatibility -->
<a id="schemainferenceunits"></a>
<a id="schema_InferenceUnits"></a>
<a id="tocSinferenceunits"></a>
<a id="tocsinferenceunits"></a>

```json
1
```

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_S3ObjectKey">S3ObjectKey</h2>
<!-- backwards compatibility -->
<a id="schemas3objectkey"></a>
<a id="schema_S3ObjectKey"></a>
<a id="tocSs3objectkey"></a>
<a id="tocss3objectkey"></a>

```json
"string"
```

<h2 id="tocS_S3ObjectVersion">S3ObjectVersion</h2>
<!-- backwards compatibility -->
<a id="schemas3objectversion"></a>
<a id="schema_S3ObjectVersion"></a>
<a id="tocSs3objectversion"></a>
<a id="tocss3objectversion"></a>

```json
"string"
```

<h2 id="tocS_IsLabeled">IsLabeled</h2>
<!-- backwards compatibility -->
<a id="schemaislabeled"></a>
<a id="schema_IsLabeled"></a>
<a id="tocSislabeled"></a>
<a id="tocsislabeled"></a>

```json
true
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_PageSize">PageSize</h2>
<!-- backwards compatibility -->
<a id="schemapagesize"></a>
<a id="schema_PageSize"></a>
<a id="tocSpagesize"></a>
<a id="tocspagesize"></a>

```json
1
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

<h2 id="tocS_ListDatasetEntriesRequest">ListDatasetEntriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetentriesrequest"></a>
<a id="schema_ListDatasetEntriesRequest"></a>
<a id="tocSlistdatasetentriesrequest"></a>
<a id="tocslistdatasetentriesrequest"></a>

```json
{}
```

<h2 id="tocS_ListModelPackagingJobsRequest">ListModelPackagingJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelpackagingjobsrequest"></a>
<a id="schema_ListModelPackagingJobsRequest"></a>
<a id="tocSlistmodelpackagingjobsrequest"></a>
<a id="tocslistmodelpackagingjobsrequest"></a>

```json
{}
```

<h2 id="tocS_ModelPackagingJobsList">ModelPackagingJobsList</h2>
<!-- backwards compatibility -->
<a id="schemamodelpackagingjobslist"></a>
<a id="schema_ModelPackagingJobsList"></a>
<a id="tocSmodelpackagingjobslist"></a>
<a id="tocsmodelpackagingjobslist"></a>

```json
[
  {
    "JobName": {},
    "ProjectName": {},
    "ModelVersion": {},
    "ModelPackagingJobDescription": {},
    "ModelPackagingMethod": {},
    "Status": {},
    "StatusMessage": {},
    "CreationTimestamp": {},
    "LastUpdatedTimestamp": {}
  }
]
```

<h2 id="tocS_ListModelsRequest">ListModelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelsrequest"></a>
<a id="schema_ListModelsRequest"></a>
<a id="tocSlistmodelsrequest"></a>
<a id="tocslistmodelsrequest"></a>

```json
{}
```

<h2 id="tocS_ModelMetadataList">ModelMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemamodelmetadatalist"></a>
<a id="schema_ModelMetadataList"></a>
<a id="tocSmodelmetadatalist"></a>
<a id="tocsmodelmetadatalist"></a>

```json
[
  {
    "CreationTimestamp": {},
    "ModelVersion": {},
    "ModelArn": {},
    "Description": {},
    "Status": {},
    "StatusMessage": {},
    "Performance": {
      "F1Score": {},
      "Recall": {},
      "Precision": {}
    }
  }
]
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

<h2 id="tocS_ProjectMetadataList">ProjectMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemaprojectmetadatalist"></a>
<a id="schema_ProjectMetadataList"></a>
<a id="tocSprojectmetadatalist"></a>
<a id="tocsprojectmetadatalist"></a>

```json
[
  {
    "ProjectArn": {},
    "ProjectName": {},
    "CreationTimestamp": {}
  }
]
```

<h2 id="tocS_TagArn">TagArn</h2>
<!-- backwards compatibility -->
<a id="schematagarn"></a>
<a id="schema_TagArn"></a>
<a id="tocStagarn"></a>
<a id="tocstagarn"></a>

```json
"string"
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

<h2 id="tocS_ModelStatus">ModelStatus</h2>
<!-- backwards compatibility -->
<a id="schemamodelstatus"></a>
<a id="schema_ModelStatus"></a>
<a id="tocSmodelstatus"></a>
<a id="tocsmodelstatus"></a>

```json
"TRAINING"
```

<h2 id="tocS_ModelStatusMessage">ModelStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodelstatusmessage"></a>
<a id="schema_ModelStatusMessage"></a>
<a id="tocSmodelstatusmessage"></a>
<a id="tocsmodelstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_ModelPerformance">ModelPerformance</h2>
<!-- backwards compatibility -->
<a id="schemamodelperformance"></a>
<a id="schema_ModelPerformance"></a>
<a id="tocSmodelperformance"></a>
<a id="tocsmodelperformance"></a>

```json
{
  "F1Score": {},
  "Recall": {},
  "Precision": {}
}
```

Information about the evaluation performance of a trained model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|F1Score|object|false|none|none|
|Recall|object|false|none|none|
|Precision|object|false|none|none|

<h2 id="tocS_OutputS3Object">OutputS3Object</h2>
<!-- backwards compatibility -->
<a id="schemaoutputs3object"></a>
<a id="schema_OutputS3Object"></a>
<a id="tocSoutputs3object"></a>
<a id="tocsoutputs3object"></a>

```json
{
  "Bucket": {},
  "Key": {}
}
```

The S3 location where Amazon Lookout for Vision saves training output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|Key|object|true|none|none|

<h2 id="tocS_ModelHostingStatus">ModelHostingStatus</h2>
<!-- backwards compatibility -->
<a id="schemamodelhostingstatus"></a>
<a id="schema_ModelHostingStatus"></a>
<a id="tocSmodelhostingstatus"></a>
<a id="tocsmodelhostingstatus"></a>

```json
"STARTING_HOSTING"
```

<h2 id="tocS_ModelPackagingConfiguration">ModelPackagingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamodelpackagingconfiguration"></a>
<a id="schema_ModelPackagingConfiguration"></a>
<a id="tocSmodelpackagingconfiguration"></a>
<a id="tocsmodelpackagingconfiguration"></a>

```json
{
  "Greengrass": {
    "CompilerOptions": {},
    "TargetDevice": {},
    "TargetPlatform": {
      "Os": {},
      "Arch": {},
      "Accelerator": {}
    },
    "S3OutputLocation": {
      "Bucket": {},
      "Prefix": {}
    },
    "ComponentName": {},
    "ComponentVersion": {},
    "ComponentDescription": {},
    "Tags": {}
  }
}
```

 Configuration information for a Amazon Lookout for Vision model packaging job. For more information, see <a>StartModelPackagingJob</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Greengrass|object|true|none|none|

<h2 id="tocS_ModelPackagingJobDescription">ModelPackagingJobDescription</h2>
<!-- backwards compatibility -->
<a id="schemamodelpackagingjobdescription"></a>
<a id="schema_ModelPackagingJobDescription"></a>
<a id="tocSmodelpackagingjobdescription"></a>
<a id="tocsmodelpackagingjobdescription"></a>

```json
"string"
```

<h2 id="tocS_ModelPackagingMethod">ModelPackagingMethod</h2>
<!-- backwards compatibility -->
<a id="schemamodelpackagingmethod"></a>
<a id="schema_ModelPackagingMethod"></a>
<a id="tocSmodelpackagingmethod"></a>
<a id="tocsmodelpackagingmethod"></a>

```json
"string"
```

<h2 id="tocS_ModelPackagingOutputDetails">ModelPackagingOutputDetails</h2>
<!-- backwards compatibility -->
<a id="schemamodelpackagingoutputdetails"></a>
<a id="schema_ModelPackagingOutputDetails"></a>
<a id="tocSmodelpackagingoutputdetails"></a>
<a id="tocsmodelpackagingoutputdetails"></a>

```json
{
  "Greengrass": {
    "ComponentVersionArn": {},
    "ComponentName": {},
    "ComponentVersion": {}
  }
}
```

 Information about the output from a model packaging job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Greengrass|object|false|none|none|

<h2 id="tocS_ModelPackagingJobStatus">ModelPackagingJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemamodelpackagingjobstatus"></a>
<a id="schema_ModelPackagingJobStatus"></a>
<a id="tocSmodelpackagingjobstatus"></a>
<a id="tocsmodelpackagingjobstatus"></a>

```json
"CREATED"
```

<h2 id="tocS_ModelPackagingStatusMessage">ModelPackagingStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodelpackagingstatusmessage"></a>
<a id="schema_ModelPackagingStatusMessage"></a>
<a id="tocSmodelpackagingstatusmessage"></a>
<a id="tocsmodelpackagingstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_ModelPackagingJobMetadata">ModelPackagingJobMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamodelpackagingjobmetadata"></a>
<a id="schema_ModelPackagingJobMetadata"></a>
<a id="tocSmodelpackagingjobmetadata"></a>
<a id="tocsmodelpackagingjobmetadata"></a>

```json
{
  "JobName": {},
  "ProjectName": {},
  "ModelVersion": {},
  "ModelPackagingJobDescription": {},
  "ModelPackagingMethod": {},
  "Status": {},
  "StatusMessage": {},
  "CreationTimestamp": {},
  "LastUpdatedTimestamp": {}
}
```

 Metadata for a model packaging job. For more information, see <a>ListModelPackagingJobs</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|ProjectName|object|false|none|none|
|ModelVersion|object|false|none|none|
|ModelPackagingJobDescription|object|false|none|none|
|ModelPackagingMethod|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|CreationTimestamp|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|

<h2 id="tocS_S3KeyPrefix">S3KeyPrefix</h2>
<!-- backwards compatibility -->
<a id="schemas3keyprefix"></a>
<a id="schema_S3KeyPrefix"></a>
<a id="tocSs3keyprefix"></a>
<a id="tocss3keyprefix"></a>

```json
"string"
```

<h2 id="tocS_StartModelPackagingJobRequest">StartModelPackagingJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmodelpackagingjobrequest"></a>
<a id="schema_StartModelPackagingJobRequest"></a>
<a id="tocSstartmodelpackagingjobrequest"></a>
<a id="tocsstartmodelpackagingjobrequest"></a>

```json
{
  "ModelVersion": {},
  "JobName": {},
  "Configuration": {
    "Greengrass": {
      "CompilerOptions": {},
      "TargetDevice": {},
      "TargetPlatform": {
        "Os": {},
        "Arch": {},
        "Accelerator": {}
      },
      "S3OutputLocation": {
        "Bucket": {},
        "Prefix": {}
      },
      "ComponentName": {},
      "ComponentVersion": {},
      "ComponentDescription": {},
      "Tags": {}
    }
  },
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelVersion|object|true|none|none|
|JobName|object|false|none|none|
|Configuration|object|true|none|none|
|Description|object|false|none|none|

<h2 id="tocS_StartModelRequest">StartModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmodelrequest"></a>
<a id="schema_StartModelRequest"></a>
<a id="tocSstartmodelrequest"></a>
<a id="tocsstartmodelrequest"></a>

```json
{
  "MinInferenceUnits": {},
  "MaxInferenceUnits": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinInferenceUnits|object|true|none|none|
|MaxInferenceUnits|object|false|none|none|

<h2 id="tocS_StopModelRequest">StopModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopmodelrequest"></a>
<a id="schema_StopModelRequest"></a>
<a id="tocSstopmodelrequest"></a>
<a id="tocsstopmodelrequest"></a>

```json
{}
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
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_TargetPlatformOs">TargetPlatformOs</h2>
<!-- backwards compatibility -->
<a id="schematargetplatformos"></a>
<a id="schema_TargetPlatformOs"></a>
<a id="tocStargetplatformos"></a>
<a id="tocstargetplatformos"></a>

```json
"LINUX"
```

<h2 id="tocS_TargetPlatformArch">TargetPlatformArch</h2>
<!-- backwards compatibility -->
<a id="schematargetplatformarch"></a>
<a id="schema_TargetPlatformArch"></a>
<a id="tocStargetplatformarch"></a>
<a id="tocstargetplatformarch"></a>

```json
"ARM64"
```

<h2 id="tocS_TargetPlatformAccelerator">TargetPlatformAccelerator</h2>
<!-- backwards compatibility -->
<a id="schematargetplatformaccelerator"></a>
<a id="schema_TargetPlatformAccelerator"></a>
<a id="tocStargetplatformaccelerator"></a>
<a id="tocstargetplatformaccelerator"></a>

```json
"NVIDIA"
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

<h2 id="tocS_UpdateDatasetEntriesRequest">UpdateDatasetEntriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetentriesrequest"></a>
<a id="schema_UpdateDatasetEntriesRequest"></a>
<a id="tocSupdatedatasetentriesrequest"></a>
<a id="tocsupdatedatasetentriesrequest"></a>

```json
{
  "Changes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Changes|object|true|none|none|
