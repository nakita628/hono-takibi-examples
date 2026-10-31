<h1 id="amazon-emr-containers">Amazon EMR Containers v2020-10-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With this deployment option, you can focus on running analytics workloads while Amazon EMR on EKS builds, configures, and manages containers for open-source applications. For more information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is shared id="EMR-EKS"/&gt;</a>.</p> <p> <i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The <code>emr-containers</code> prefix is used in the following scenarios: </p> <ul> <li> <p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example, <code>aws emr-containers start-job-run</code>.</p> </li> <li> <p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For example, <code>"Action": [ "emr-containers:StartJobRun"]</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p> </li> <li> <p>It is the prefix used in Amazon EMR on EKS service endpoints. For example, <code>emr-containers.us-east-2.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKSService Endpoints</a>.</p> </li> </ul>

Base URLs:

* <a href="http://emr-containers.us-east-1.amazonaws.com">http://emr-containers.us-east-1.amazonaws.com</a> - The Amazon EMR Containers multi-region endpoint

* <a href="https://emr-containers.us-east-1.amazonaws.com">https://emr-containers.us-east-1.amazonaws.com</a> - The Amazon EMR Containers multi-region endpoint

* <a href="http://emr-containers.cn-north-1.amazonaws.com.cn">http://emr-containers.cn-north-1.amazonaws.com.cn</a> - The Amazon EMR Containers endpoint for China (Beijing) and China (Ningxia)

* <a href="https://emr-containers.cn-north-1.amazonaws.com.cn">https://emr-containers.cn-north-1.amazonaws.com.cn</a> - The Amazon EMR Containers endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/emr-containers/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-emr-containers-default">Default</h1>

## DescribeJobRun

<a id="opIdDescribeJobRun"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/virtualclusters/string/jobruns/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualclusters/{virtualClusterId}/jobruns/{jobRunId}`

Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

<h3 id="describejobrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobRunId|path|string|true|The ID of the job run request. |
|virtualClusterId|path|string|true|The ID of the virtual cluster for which the job run is submitted.|
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
  "jobRun": {
    "id": {},
    "name": {},
    "virtualClusterId": {},
    "arn": {},
    "state": {},
    "clientToken": {},
    "executionRoleArn": {},
    "releaseLabel": {},
    "configurationOverrides": {
      "applicationConfiguration": {},
      "monitoringConfiguration": {
        "persistentAppUI": {},
        "cloudWatchMonitoringConfiguration": {
          "logGroupName": {},
          "logStreamNamePrefix": {}
        },
        "s3MonitoringConfiguration": {
          "logUri": {}
        }
      }
    },
    "jobDriver": {
      "sparkSubmitJobDriver": {
        "entryPoint": {},
        "entryPointArguments": {},
        "sparkSubmitParameters": {}
      },
      "sparkSqlJobDriver": {
        "entryPoint": {},
        "sparkSqlParameters": {}
      }
    },
    "createdAt": {},
    "createdBy": {},
    "finishedAt": {},
    "stateDetails": {},
    "failureReason": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "retryPolicyConfiguration": {
      "maxAttempts": {}
    },
    "retryPolicyExecution": {
      "currentAttemptCount": {}
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

<h3 id="describejobrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJobRunResponse](#schemadescribejobrunresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelJobRun

<a id="opIdCancelJobRun"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/virtualclusters/string/jobruns/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /virtualclusters/{virtualClusterId}/jobruns/{jobRunId}`

Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

<h3 id="canceljobrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobRunId|path|string|true|The ID of the job run to cancel.|
|virtualClusterId|path|string|true|The ID of the virtual cluster for which the job run will be canceled.|
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
  "virtualClusterId": {}
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

<h3 id="canceljobrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelJobRunResponse](#schemacanceljobrunresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJobTemplates

<a id="opIdListJobTemplates"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/jobtemplates \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /jobtemplates`

Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

<h3 id="listjobtemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|createdAfter|query|string(date-time)|false|The date and time after which the job templates were created.|
|createdBefore|query|string(date-time)|false| The date and time before which the job templates were created.|
|maxResults|query|integer|false| The maximum number of job templates that can be listed.|
|nextToken|query|string|false| The token for the next set of job templates to return.|
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
  "templates": {},
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

<h3 id="listjobtemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobTemplatesResponse](#schemalistjobtemplatesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateJobTemplate

<a id="opIdCreateJobTemplate"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/jobtemplates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "clientToken": "string",
    "jobTemplateData": {
      "executionRoleArn": {},
      "releaseLabel": {},
      "configurationOverrides": {
        "applicationConfiguration": {},
        "monitoringConfiguration": {
          "persistentAppUI": {},
          "cloudWatchMonitoringConfiguration": {
            "logGroupName": {},
            "logStreamNamePrefix": {}
          },
          "s3MonitoringConfiguration": {
            "logUri": {}
          }
        }
      },
      "jobDriver": {
        "sparkSubmitJobDriver": {
          "entryPoint": {},
          "entryPointArguments": {},
          "sparkSubmitParameters": {}
        },
        "sparkSqlJobDriver": {
          "entryPoint": {},
          "sparkSqlParameters": {}
        }
      },
      "parameterConfiguration": {
        "property1": {
          "type": {},
          "defaultValue": {}
        },
        "property2": {
          "type": {},
          "defaultValue": {}
        }
      },
      "jobTags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "kmsKeyArn": "string"
  }'
```

`POST /jobtemplates`

Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

> Body parameter

```json
{
  "name": "string",
  "clientToken": "string",
  "jobTemplateData": {
    "executionRoleArn": {},
    "releaseLabel": {},
    "configurationOverrides": {
      "applicationConfiguration": {},
      "monitoringConfiguration": {
        "persistentAppUI": {},
        "cloudWatchMonitoringConfiguration": {
          "logGroupName": {},
          "logStreamNamePrefix": {}
        },
        "s3MonitoringConfiguration": {
          "logUri": {}
        }
      }
    },
    "jobDriver": {
      "sparkSubmitJobDriver": {
        "entryPoint": {},
        "entryPointArguments": {},
        "sparkSubmitParameters": {}
      },
      "sparkSqlJobDriver": {
        "entryPoint": {},
        "sparkSqlParameters": {}
      }
    },
    "parameterConfiguration": {
      "property1": {
        "type": {},
        "defaultValue": {}
      },
      "property2": {
        "type": {},
        "defaultValue": {}
      }
    },
    "jobTags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "kmsKeyArn": "string"
}
```

<h3 id="createjobtemplate-parameters">Parameters</h3>

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
|» name|body|string|true|The specified name of the job template.|
|» clientToken|body|string|true|The client token of the job template.|
|» jobTemplateData|body|object|true|The values of StartJobRun API requests used in job runs started using the job template.|
|» » executionRoleArn|body|object|false|none|
|» » releaseLabel|body|object|false|none|
|» » configurationOverrides|body|object|false|none|
|» » » applicationConfiguration|body|object|false|none|
|» » » monitoringConfiguration|body|object|false|none|
|» » » » persistentAppUI|body|object|false|none|
|» » » » cloudWatchMonitoringConfiguration|body|object|false|none|
|» » » » » logGroupName|body|object|false|none|
|» » » » » logStreamNamePrefix|body|object|false|none|
|» » » » s3MonitoringConfiguration|body|object|false|none|
|» » » » » logUri|body|object|false|none|
|» » jobDriver|body|[JobDriver](#schemajobdriver)|false|Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.|
|» » parameterConfiguration|body|object|false|none|
|» » » **additionalProperties**|body|[TemplateParameterConfiguration](#schematemplateparameterconfiguration)|false|The configuration of a job template parameter.|
|» » jobTags|body|object|false|none|
|» » » **additionalProperties**|body|[StringEmpty256](#schemastringempty256)|false|none|
|» tags|body|object|false|The tags that are associated with the job template.|
|» » **additionalProperties**|body|[StringEmpty256](#schemastringempty256)|false|none|
|» kmsKeyArn|body|string|false|The KMS key ARN used to encrypt the job template.|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "arn": {},
  "createdAt": {}
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

<h3 id="createjobtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateJobTemplateResponse](#schemacreatejobtemplateresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListManagedEndpoints

<a id="opIdListManagedEndpoints"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/virtualclusters/string/endpoints \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualclusters/{virtualClusterId}/endpoints`

Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

<h3 id="listmanagedendpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|virtualClusterId|path|string|true|The ID of the virtual cluster.|
|createdBefore|query|string(date-time)|false|The date and time before which the endpoints are created.|
|createdAfter|query|string(date-time)|false| The date and time after which the endpoints are created.|
|types|query|[[EndpointType](#schemaendpointtype)]|false|The types of the managed endpoints.|
|states|query|[[EndpointState](#schemaendpointstate)]|false|The states of the managed endpoints.|
|maxResults|query|integer|false|The maximum number of managed endpoints that can be listed.|
|nextToken|query|string|false| The token for the next set of managed endpoints to return. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|states|CREATING|
|states|ACTIVE|
|states|TERMINATING|
|states|TERMINATED|
|states|TERMINATED_WITH_ERRORS|

> Example responses

> 200 Response

```json
{
  "endpoints": {},
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

<h3 id="listmanagedendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListManagedEndpointsResponse](#schemalistmanagedendpointsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateManagedEndpoint

<a id="opIdCreateManagedEndpoint"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/virtualclusters/string/endpoints \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "type": "string",
    "releaseLabel": "string",
    "executionRoleArn": "stringstringstringst",
    "certificateArn": "stringstringstringstringstringstringstringst",
    "configurationOverrides": {
      "applicationConfiguration": {},
      "monitoringConfiguration": {
        "persistentAppUI": {},
        "cloudWatchMonitoringConfiguration": {
          "logGroupName": {},
          "logStreamNamePrefix": {}
        },
        "s3MonitoringConfiguration": {
          "logUri": {}
        }
      }
    },
    "clientToken": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /virtualclusters/{virtualClusterId}/endpoints`

Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

> Body parameter

```json
{
  "name": "string",
  "type": "string",
  "releaseLabel": "string",
  "executionRoleArn": "stringstringstringst",
  "certificateArn": "stringstringstringstringstringstringstringst",
  "configurationOverrides": {
    "applicationConfiguration": {},
    "monitoringConfiguration": {
      "persistentAppUI": {},
      "cloudWatchMonitoringConfiguration": {
        "logGroupName": {},
        "logStreamNamePrefix": {}
      },
      "s3MonitoringConfiguration": {
        "logUri": {}
      }
    }
  },
  "clientToken": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createmanagedendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|virtualClusterId|path|string|true|The ID of the virtual cluster for which a managed endpoint is created.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|The name of the managed endpoint.|
|» type|body|string|true|The type of the managed endpoint.|
|» releaseLabel|body|string|true|The Amazon EMR release version.|
|» executionRoleArn|body|string|true|The ARN of the execution role.|
|» certificateArn|body|string|false|The certificate ARN provided by users for the managed endpoint. This field is under deprecation and will be removed in future releases.|
|» configurationOverrides|body|object|false|A configuration specification to be used to override existing configurations.|
|» » applicationConfiguration|body|object|false|none|
|» » monitoringConfiguration|body|object|false|none|
|» » » persistentAppUI|body|object|false|none|
|» » » cloudWatchMonitoringConfiguration|body|object|false|none|
|» » » » logGroupName|body|object|true|none|
|» » » » logStreamNamePrefix|body|object|false|none|
|» » » s3MonitoringConfiguration|body|object|false|none|
|» » » » logUri|body|object|true|none|
|» clientToken|body|string|true|The client idempotency token for this create call.|
|» tags|body|object|false|The tags of the managed endpoint. |
|» » **additionalProperties**|body|[StringEmpty256](#schemastringempty256)|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "arn": {},
  "virtualClusterId": {}
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

<h3 id="createmanagedendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateManagedEndpointResponse](#schemacreatemanagedendpointresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVirtualClusters

<a id="opIdListVirtualClusters"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/virtualclusters \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualclusters`

Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

<h3 id="listvirtualclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|containerProviderId|query|string|false|The container provider ID of the virtual cluster.|
|containerProviderType|query|string|false|The container provider type of the virtual cluster. Amazon EKS is the only supported type as of now.|
|createdAfter|query|string(date-time)|false|The date and time after which the virtual clusters are created.|
|createdBefore|query|string(date-time)|false|The date and time before which the virtual clusters are created.|
|states|query|[[VirtualClusterState](#schemavirtualclusterstate)]|false|The states of the requested virtual clusters.|
|maxResults|query|integer|false|The maximum number of virtual clusters that can be listed.|
|nextToken|query|string|false|The token for the next set of virtual clusters to return. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|containerProviderType|EKS|
|states|RUNNING|
|states|TERMINATING|
|states|TERMINATED|
|states|ARRESTED|

> Example responses

> 200 Response

```json
{
  "virtualClusters": {},
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

<h3 id="listvirtualclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVirtualClustersResponse](#schemalistvirtualclustersresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVirtualCluster

<a id="opIdCreateVirtualCluster"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/virtualclusters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "containerProvider": {
      "type": {},
      "id": {},
      "info": {
        "eksInfo": {
          "namespace": {}
        }
      }
    },
    "clientToken": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /virtualclusters`

Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

> Body parameter

```json
{
  "name": "string",
  "containerProvider": {
    "type": {},
    "id": {},
    "info": {
      "eksInfo": {
        "namespace": {}
      }
    }
  },
  "clientToken": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createvirtualcluster-parameters">Parameters</h3>

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
|» name|body|string|true|The specified name of the virtual cluster.|
|» containerProvider|body|object|true|The information about the container provider.|
|» » type|body|object|false|none|
|» » id|body|object|false|none|
|» » info|body|object|false|none|
|» » » eksInfo|body|object|false|none|
|» » » » namespace|body|object|false|none|
|» clientToken|body|string|true|The client token of the virtual cluster.|
|» tags|body|object|false|The tags assigned to the virtual cluster.|
|» » **additionalProperties**|body|[StringEmpty256](#schemastringempty256)|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
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

<h3 id="createvirtualcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVirtualClusterResponse](#schemacreatevirtualclusterresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeJobTemplate

<a id="opIdDescribeJobTemplate"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/jobtemplates/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /jobtemplates/{templateId}`

Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

<h3 id="describejobtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|path|string|true|The ID of the job template that will be described.|
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
  "jobTemplate": {
    "name": {},
    "id": {},
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "jobTemplateData": {
      "executionRoleArn": {},
      "releaseLabel": {},
      "configurationOverrides": {
        "applicationConfiguration": {},
        "monitoringConfiguration": {
          "persistentAppUI": {},
          "cloudWatchMonitoringConfiguration": {
            "logGroupName": {},
            "logStreamNamePrefix": {}
          },
          "s3MonitoringConfiguration": {
            "logUri": {}
          }
        }
      },
      "jobDriver": {
        "sparkSubmitJobDriver": {
          "entryPoint": {},
          "entryPointArguments": {},
          "sparkSubmitParameters": {}
        },
        "sparkSqlJobDriver": {
          "entryPoint": {},
          "sparkSqlParameters": {}
        }
      },
      "parameterConfiguration": {
        "property1": {
          "type": {},
          "defaultValue": {}
        },
        "property2": {
          "type": {},
          "defaultValue": {}
        }
      },
      "jobTags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "kmsKeyArn": {},
    "decryptionError": {}
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

<h3 id="describejobtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJobTemplateResponse](#schemadescribejobtemplateresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteJobTemplate

<a id="opIdDeleteJobTemplate"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/jobtemplates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /jobtemplates/{templateId}`

Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

<h3 id="deletejobtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|path|string|true|The ID of the job template that will be deleted.|
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

<h3 id="deletejobtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteJobTemplateResponse](#schemadeletejobtemplateresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeManagedEndpoint

<a id="opIdDescribeManagedEndpoint"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/virtualclusters/string/endpoints/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualclusters/{virtualClusterId}/endpoints/{endpointId}`

Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

<h3 id="describemanagedendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpointId|path|string|true|This output displays ID of the managed endpoint.|
|virtualClusterId|path|string|true|The ID of the endpoint's virtual cluster.|
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
  "endpoint": {
    "id": {},
    "name": {},
    "arn": {},
    "virtualClusterId": {},
    "type": {},
    "state": {},
    "releaseLabel": {},
    "executionRoleArn": {},
    "certificateArn": {},
    "certificateAuthority": {
      "certificateArn": {},
      "certificateData": {}
    },
    "configurationOverrides": {
      "applicationConfiguration": {},
      "monitoringConfiguration": {
        "persistentAppUI": {},
        "cloudWatchMonitoringConfiguration": {
          "logGroupName": {},
          "logStreamNamePrefix": {}
        },
        "s3MonitoringConfiguration": {
          "logUri": {}
        }
      }
    },
    "serverUrl": {},
    "createdAt": {},
    "securityGroup": {},
    "subnetIds": {},
    "stateDetails": {},
    "failureReason": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="describemanagedendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeManagedEndpointResponse](#schemadescribemanagedendpointresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteManagedEndpoint

<a id="opIdDeleteManagedEndpoint"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/virtualclusters/string/endpoints/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /virtualclusters/{virtualClusterId}/endpoints/{endpointId}`

Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

<h3 id="deletemanagedendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpointId|path|string|true|The ID of the managed endpoint.|
|virtualClusterId|path|string|true|The ID of the endpoint's virtual cluster.|
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
  "virtualClusterId": {}
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

<h3 id="deletemanagedendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteManagedEndpointResponse](#schemadeletemanagedendpointresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVirtualCluster

<a id="opIdDescribeVirtualCluster"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/virtualclusters/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualclusters/{virtualClusterId}`

Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

<h3 id="describevirtualcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|virtualClusterId|path|string|true|The ID of the virtual cluster that will be described.|
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
  "virtualCluster": {
    "id": {},
    "name": {},
    "arn": {},
    "state": {},
    "containerProvider": {
      "type": {},
      "id": {},
      "info": {
        "eksInfo": {
          "namespace": {}
        }
      }
    },
    "createdAt": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="describevirtualcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVirtualClusterResponse](#schemadescribevirtualclusterresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVirtualCluster

<a id="opIdDeleteVirtualCluster"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/virtualclusters/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /virtualclusters/{virtualClusterId}`

Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

<h3 id="deletevirtualcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|virtualClusterId|path|string|true|The ID of the virtual cluster that will be deleted.|
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

<h3 id="deletevirtualcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVirtualClusterResponse](#schemadeletevirtualclusterresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJobRuns

<a id="opIdListJobRuns"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/virtualclusters/string/jobruns \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /virtualclusters/{virtualClusterId}/jobruns`

Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

<h3 id="listjobruns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|virtualClusterId|path|string|true|The ID of the virtual cluster for which to list the job run. |
|createdBefore|query|string(date-time)|false|The date and time before which the job runs were submitted.|
|createdAfter|query|string(date-time)|false|The date and time after which the job runs were submitted.|
|name|query|string|false|The name of the job run.|
|states|query|[[JobRunState](#schemajobrunstate)]|false|The states of the job run.|
|maxResults|query|integer|false|The maximum number of job runs that can be listed.|
|nextToken|query|string|false|The token for the next set of job runs to return.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|states|PENDING|
|states|SUBMITTED|
|states|RUNNING|
|states|FAILED|
|states|CANCELLED|
|states|CANCEL_PENDING|
|states|COMPLETED|

> Example responses

> 200 Response

```json
{
  "jobRuns": {},
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

<h3 id="listjobruns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobRunsResponse](#schemalistjobrunsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartJobRun

<a id="opIdStartJobRun"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/virtualclusters/string/jobruns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "clientToken": "string",
    "executionRoleArn": "stringstringstringst",
    "releaseLabel": "string",
    "jobDriver": {
      "sparkSubmitJobDriver": {
        "entryPoint": {},
        "entryPointArguments": {},
        "sparkSubmitParameters": {}
      },
      "sparkSqlJobDriver": {
        "entryPoint": {},
        "sparkSqlParameters": {}
      }
    },
    "configurationOverrides": {
      "applicationConfiguration": {},
      "monitoringConfiguration": {
        "persistentAppUI": {},
        "cloudWatchMonitoringConfiguration": {
          "logGroupName": {},
          "logStreamNamePrefix": {}
        },
        "s3MonitoringConfiguration": {
          "logUri": {}
        }
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "jobTemplateId": "string",
    "jobTemplateParameters": {
      "property1": "string",
      "property2": "string"
    },
    "retryPolicyConfiguration": {
      "maxAttempts": {}
    }
  }'
```

`POST /virtualclusters/{virtualClusterId}/jobruns`

Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

> Body parameter

```json
{
  "name": "string",
  "clientToken": "string",
  "executionRoleArn": "stringstringstringst",
  "releaseLabel": "string",
  "jobDriver": {
    "sparkSubmitJobDriver": {
      "entryPoint": {},
      "entryPointArguments": {},
      "sparkSubmitParameters": {}
    },
    "sparkSqlJobDriver": {
      "entryPoint": {},
      "sparkSqlParameters": {}
    }
  },
  "configurationOverrides": {
    "applicationConfiguration": {},
    "monitoringConfiguration": {
      "persistentAppUI": {},
      "cloudWatchMonitoringConfiguration": {
        "logGroupName": {},
        "logStreamNamePrefix": {}
      },
      "s3MonitoringConfiguration": {
        "logUri": {}
      }
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "jobTemplateId": "string",
  "jobTemplateParameters": {
    "property1": "string",
    "property2": "string"
  },
  "retryPolicyConfiguration": {
    "maxAttempts": {}
  }
}
```

<h3 id="startjobrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|virtualClusterId|path|string|true|The virtual cluster ID for which the job run request is submitted.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|false|The name of the job run.|
|» clientToken|body|string|true|The client idempotency token of the job run request. |
|» executionRoleArn|body|string|false|The execution role ARN for the job run.|
|» releaseLabel|body|string|false|The Amazon EMR release version to use for the job run.|
|» jobDriver|body|object|false|Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.|
|» » sparkSubmitJobDriver|body|object|false|none|
|» » » entryPoint|body|object|true|none|
|» » » entryPointArguments|body|object|false|none|
|» » » sparkSubmitParameters|body|object|false|none|
|» » sparkSqlJobDriver|body|object|false|none|
|» » » entryPoint|body|object|false|none|
|» » » sparkSqlParameters|body|object|false|none|
|» configurationOverrides|body|object|false|A configuration specification to be used to override existing configurations.|
|» » applicationConfiguration|body|object|false|none|
|» » monitoringConfiguration|body|object|false|none|
|» » » persistentAppUI|body|object|false|none|
|» » » cloudWatchMonitoringConfiguration|body|object|false|none|
|» » » » logGroupName|body|object|true|none|
|» » » » logStreamNamePrefix|body|object|false|none|
|» » » s3MonitoringConfiguration|body|object|false|none|
|» » » » logUri|body|object|true|none|
|» tags|body|object|false|The tags assigned to job runs.|
|» » **additionalProperties**|body|[StringEmpty256](#schemastringempty256)|false|none|
|» jobTemplateId|body|string|false|The job template ID to be used to start the job run.|
|» jobTemplateParameters|body|object|false|The values of job template parameters to start a job run.|
|» » **additionalProperties**|body|[String1024](#schemastring1024)|false|none|
|» retryPolicyConfiguration|body|object|false|The configuration of the retry policy that the job runs on.|
|» » maxAttempts|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "arn": {},
  "virtualClusterId": {}
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

<h3 id="startjobrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartJobRunResponse](#schemastartjobrunresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/tags/stringstringstringstringstringstringstringstringstringstring \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Lists the tags assigned to the resources.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of tagged resources.|
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
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://emr-containers.us-east-1.amazonaws.com/tags/stringstringstringstringstringstringstringstringstringstring \
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

Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.

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
|resourceArn|path|string|true|The ARN of resources.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The tags assigned to resources.|
|» » **additionalProperties**|body|[StringEmpty256](#schemastringempty256)|false|none|

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
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://emr-containers.us-east-1.amazonaws.com/tags/stringstringstringstringstringstringstringstringstringstring#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes tags from resources.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The ARN of resources.|
|tagKeys|query|[[String128](#schemastring128)]|true|The tag keys of the resources.|
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
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelJobRunResponse">CancelJobRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemacanceljobrunresponse"></a>
<a id="schema_CancelJobRunResponse"></a>
<a id="tocScanceljobrunresponse"></a>
<a id="tocscanceljobrunresponse"></a>

```json
{
  "id": {},
  "virtualClusterId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|virtualClusterId|object|false|none|none|

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

<h2 id="tocS_CreateJobTemplateResponse">CreateJobTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobtemplateresponse"></a>
<a id="schema_CreateJobTemplateResponse"></a>
<a id="tocScreatejobtemplateresponse"></a>
<a id="tocscreatejobtemplateresponse"></a>

```json
{
  "id": {},
  "name": {},
  "arn": {},
  "createdAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|arn|object|false|none|none|
|createdAt|object|false|none|none|

<h2 id="tocS_ParametricIAMRoleArn">ParametricIAMRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaparametriciamrolearn"></a>
<a id="schema_ParametricIAMRoleArn"></a>
<a id="tocSparametriciamrolearn"></a>
<a id="tocsparametriciamrolearn"></a>

```json
"string"
```

<h2 id="tocS_ParametricReleaseLabel">ParametricReleaseLabel</h2>
<!-- backwards compatibility -->
<a id="schemaparametricreleaselabel"></a>
<a id="schema_ParametricReleaseLabel"></a>
<a id="tocSparametricreleaselabel"></a>
<a id="tocsparametricreleaselabel"></a>

```json
"string"
```

<h2 id="tocS_ParametricConfigurationOverrides">ParametricConfigurationOverrides</h2>
<!-- backwards compatibility -->
<a id="schemaparametricconfigurationoverrides"></a>
<a id="schema_ParametricConfigurationOverrides"></a>
<a id="tocSparametricconfigurationoverrides"></a>
<a id="tocsparametricconfigurationoverrides"></a>

```json
{
  "applicationConfiguration": {},
  "monitoringConfiguration": {
    "persistentAppUI": {},
    "cloudWatchMonitoringConfiguration": {
      "logGroupName": {},
      "logStreamNamePrefix": {}
    },
    "s3MonitoringConfiguration": {
      "logUri": {}
    }
  }
}
```

 A configuration specification to be used to override existing configurations. This data type allows job template parameters to be specified within.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationConfiguration|object|false|none|none|
|monitoringConfiguration|object|false|none|none|

<h2 id="tocS_JobDriver">JobDriver</h2>
<!-- backwards compatibility -->
<a id="schemajobdriver"></a>
<a id="schema_JobDriver"></a>
<a id="tocSjobdriver"></a>
<a id="tocsjobdriver"></a>

```json
{
  "sparkSubmitJobDriver": {
    "entryPoint": {},
    "entryPointArguments": {},
    "sparkSubmitParameters": {}
  },
  "sparkSqlJobDriver": {
    "entryPoint": {},
    "sparkSqlParameters": {}
  }
}
```

Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sparkSubmitJobDriver|object|false|none|none|
|sparkSqlJobDriver|object|false|none|none|

<h2 id="tocS_TemplateParameterConfigurationMap">TemplateParameterConfigurationMap</h2>
<!-- backwards compatibility -->
<a id="schematemplateparameterconfigurationmap"></a>
<a id="schema_TemplateParameterConfigurationMap"></a>
<a id="tocStemplateparameterconfigurationmap"></a>
<a id="tocstemplateparameterconfigurationmap"></a>

```json
{
  "property1": {
    "type": {},
    "defaultValue": {}
  },
  "property2": {
    "type": {},
    "defaultValue": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TemplateParameterConfiguration](#schematemplateparameterconfiguration)|false|none|The configuration of a job template parameter.|

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
|**additionalProperties**|[StringEmpty256](#schemastringempty256)|false|none|none|

<h2 id="tocS_StringEmpty256">StringEmpty256</h2>
<!-- backwards compatibility -->
<a id="schemastringempty256"></a>
<a id="schema_StringEmpty256"></a>
<a id="tocSstringempty256"></a>
<a id="tocsstringempty256"></a>

```json
"string"
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

<h2 id="tocS_CreateManagedEndpointResponse">CreateManagedEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemanagedendpointresponse"></a>
<a id="schema_CreateManagedEndpointResponse"></a>
<a id="tocScreatemanagedendpointresponse"></a>
<a id="tocscreatemanagedendpointresponse"></a>

```json
{
  "id": {},
  "name": {},
  "arn": {},
  "virtualClusterId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|arn|object|false|none|none|
|virtualClusterId|object|false|none|none|

<h2 id="tocS_ConfigurationList">ConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationlist"></a>
<a id="schema_ConfigurationList"></a>
<a id="tocSconfigurationlist"></a>
<a id="tocsconfigurationlist"></a>

```json
[
  {
    "classification": {},
    "properties": null,
    "configurations": {}
  }
]
```

<h2 id="tocS_MonitoringConfiguration">MonitoringConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringconfiguration"></a>
<a id="schema_MonitoringConfiguration"></a>
<a id="tocSmonitoringconfiguration"></a>
<a id="tocsmonitoringconfiguration"></a>

```json
{
  "persistentAppUI": {},
  "cloudWatchMonitoringConfiguration": {
    "logGroupName": {},
    "logStreamNamePrefix": {}
  },
  "s3MonitoringConfiguration": {
    "logUri": {}
  }
}
```

Configuration setting for monitoring.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|persistentAppUI|object|false|none|none|
|cloudWatchMonitoringConfiguration|object|false|none|none|
|s3MonitoringConfiguration|object|false|none|none|

<h2 id="tocS_CreateVirtualClusterResponse">CreateVirtualClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevirtualclusterresponse"></a>
<a id="schema_CreateVirtualClusterResponse"></a>
<a id="tocScreatevirtualclusterresponse"></a>
<a id="tocscreatevirtualclusterresponse"></a>

```json
{
  "id": {},
  "name": {},
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_ContainerProviderType">ContainerProviderType</h2>
<!-- backwards compatibility -->
<a id="schemacontainerprovidertype"></a>
<a id="schema_ContainerProviderType"></a>
<a id="tocScontainerprovidertype"></a>
<a id="tocscontainerprovidertype"></a>

```json
"EKS"
```

<h2 id="tocS_ClusterId">ClusterId</h2>
<!-- backwards compatibility -->
<a id="schemaclusterid"></a>
<a id="schema_ClusterId"></a>
<a id="tocSclusterid"></a>
<a id="tocsclusterid"></a>

```json
"string"
```

<h2 id="tocS_ContainerInfo">ContainerInfo</h2>
<!-- backwards compatibility -->
<a id="schemacontainerinfo"></a>
<a id="schema_ContainerInfo"></a>
<a id="tocScontainerinfo"></a>
<a id="tocscontainerinfo"></a>

```json
{
  "eksInfo": {
    "namespace": {}
  }
}
```

The information about the container used for a job run or a managed endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eksInfo|object|false|none|none|

<h2 id="tocS_DeleteJobTemplateResponse">DeleteJobTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletejobtemplateresponse"></a>
<a id="schema_DeleteJobTemplateResponse"></a>
<a id="tocSdeletejobtemplateresponse"></a>
<a id="tocsdeletejobtemplateresponse"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|

<h2 id="tocS_DeleteManagedEndpointResponse">DeleteManagedEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemanagedendpointresponse"></a>
<a id="schema_DeleteManagedEndpointResponse"></a>
<a id="tocSdeletemanagedendpointresponse"></a>
<a id="tocsdeletemanagedendpointresponse"></a>

```json
{
  "id": {},
  "virtualClusterId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|virtualClusterId|object|false|none|none|

<h2 id="tocS_DeleteVirtualClusterResponse">DeleteVirtualClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletevirtualclusterresponse"></a>
<a id="schema_DeleteVirtualClusterResponse"></a>
<a id="tocSdeletevirtualclusterresponse"></a>
<a id="tocsdeletevirtualclusterresponse"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|

<h2 id="tocS_DescribeJobRunResponse">DescribeJobRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobrunresponse"></a>
<a id="schema_DescribeJobRunResponse"></a>
<a id="tocSdescribejobrunresponse"></a>
<a id="tocsdescribejobrunresponse"></a>

```json
{
  "jobRun": {
    "id": {},
    "name": {},
    "virtualClusterId": {},
    "arn": {},
    "state": {},
    "clientToken": {},
    "executionRoleArn": {},
    "releaseLabel": {},
    "configurationOverrides": {
      "applicationConfiguration": {},
      "monitoringConfiguration": {
        "persistentAppUI": {},
        "cloudWatchMonitoringConfiguration": {
          "logGroupName": {},
          "logStreamNamePrefix": {}
        },
        "s3MonitoringConfiguration": {
          "logUri": {}
        }
      }
    },
    "jobDriver": {
      "sparkSubmitJobDriver": {
        "entryPoint": {},
        "entryPointArguments": {},
        "sparkSubmitParameters": {}
      },
      "sparkSqlJobDriver": {
        "entryPoint": {},
        "sparkSqlParameters": {}
      }
    },
    "createdAt": {},
    "createdBy": {},
    "finishedAt": {},
    "stateDetails": {},
    "failureReason": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "retryPolicyConfiguration": {
      "maxAttempts": {}
    },
    "retryPolicyExecution": {
      "currentAttemptCount": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobRun|object|false|none|none|

<h2 id="tocS_DescribeJobTemplateResponse">DescribeJobTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobtemplateresponse"></a>
<a id="schema_DescribeJobTemplateResponse"></a>
<a id="tocSdescribejobtemplateresponse"></a>
<a id="tocsdescribejobtemplateresponse"></a>

```json
{
  "jobTemplate": {
    "name": {},
    "id": {},
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "jobTemplateData": {
      "executionRoleArn": {},
      "releaseLabel": {},
      "configurationOverrides": {
        "applicationConfiguration": {},
        "monitoringConfiguration": {
          "persistentAppUI": {},
          "cloudWatchMonitoringConfiguration": {
            "logGroupName": {},
            "logStreamNamePrefix": {}
          },
          "s3MonitoringConfiguration": {
            "logUri": {}
          }
        }
      },
      "jobDriver": {
        "sparkSubmitJobDriver": {
          "entryPoint": {},
          "entryPointArguments": {},
          "sparkSubmitParameters": {}
        },
        "sparkSqlJobDriver": {
          "entryPoint": {},
          "sparkSqlParameters": {}
        }
      },
      "parameterConfiguration": {
        "property1": {
          "type": {},
          "defaultValue": {}
        },
        "property2": {
          "type": {},
          "defaultValue": {}
        }
      },
      "jobTags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "kmsKeyArn": {},
    "decryptionError": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobTemplate|object|false|none|none|

<h2 id="tocS_DescribeManagedEndpointResponse">DescribeManagedEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemanagedendpointresponse"></a>
<a id="schema_DescribeManagedEndpointResponse"></a>
<a id="tocSdescribemanagedendpointresponse"></a>
<a id="tocsdescribemanagedendpointresponse"></a>

```json
{
  "endpoint": {
    "id": {},
    "name": {},
    "arn": {},
    "virtualClusterId": {},
    "type": {},
    "state": {},
    "releaseLabel": {},
    "executionRoleArn": {},
    "certificateArn": {},
    "certificateAuthority": {
      "certificateArn": {},
      "certificateData": {}
    },
    "configurationOverrides": {
      "applicationConfiguration": {},
      "monitoringConfiguration": {
        "persistentAppUI": {},
        "cloudWatchMonitoringConfiguration": {
          "logGroupName": {},
          "logStreamNamePrefix": {}
        },
        "s3MonitoringConfiguration": {
          "logUri": {}
        }
      }
    },
    "serverUrl": {},
    "createdAt": {},
    "securityGroup": {},
    "subnetIds": {},
    "stateDetails": {},
    "failureReason": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|object|false|none|none|

<h2 id="tocS_DescribeVirtualClusterResponse">DescribeVirtualClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribevirtualclusterresponse"></a>
<a id="schema_DescribeVirtualClusterResponse"></a>
<a id="tocSdescribevirtualclusterresponse"></a>
<a id="tocsdescribevirtualclusterresponse"></a>

```json
{
  "virtualCluster": {
    "id": {},
    "name": {},
    "arn": {},
    "state": {},
    "containerProvider": {
      "type": {},
      "id": {},
      "info": {
        "eksInfo": {
          "namespace": {}
        }
      }
    },
    "createdAt": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualCluster|object|false|none|none|

<h2 id="tocS_ListJobRunsResponse">ListJobRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobrunsresponse"></a>
<a id="schema_ListJobRunsResponse"></a>
<a id="tocSlistjobrunsresponse"></a>
<a id="tocslistjobrunsresponse"></a>

```json
{
  "jobRuns": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobRuns|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_JobRunState">JobRunState</h2>
<!-- backwards compatibility -->
<a id="schemajobrunstate"></a>
<a id="schema_JobRunState"></a>
<a id="tocSjobrunstate"></a>
<a id="tocsjobrunstate"></a>

```json
"PENDING"
```

<h2 id="tocS_ListJobTemplatesResponse">ListJobTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobtemplatesresponse"></a>
<a id="schema_ListJobTemplatesResponse"></a>
<a id="tocSlistjobtemplatesresponse"></a>
<a id="tocslistjobtemplatesresponse"></a>

```json
{
  "templates": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templates|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListManagedEndpointsResponse">ListManagedEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmanagedendpointsresponse"></a>
<a id="schema_ListManagedEndpointsResponse"></a>
<a id="tocSlistmanagedendpointsresponse"></a>
<a id="tocslistmanagedendpointsresponse"></a>

```json
{
  "endpoints": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoints|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_EndpointType">EndpointType</h2>
<!-- backwards compatibility -->
<a id="schemaendpointtype"></a>
<a id="schema_EndpointType"></a>
<a id="tocSendpointtype"></a>
<a id="tocsendpointtype"></a>

```json
"string"
```

<h2 id="tocS_EndpointState">EndpointState</h2>
<!-- backwards compatibility -->
<a id="schemaendpointstate"></a>
<a id="schema_EndpointState"></a>
<a id="tocSendpointstate"></a>
<a id="tocsendpointstate"></a>

```json
"CREATING"
```

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

<h2 id="tocS_ListVirtualClustersResponse">ListVirtualClustersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualclustersresponse"></a>
<a id="schema_ListVirtualClustersResponse"></a>
<a id="tocSlistvirtualclustersresponse"></a>
<a id="tocslistvirtualclustersresponse"></a>

```json
{
  "virtualClusters": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|virtualClusters|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_VirtualClusterState">VirtualClusterState</h2>
<!-- backwards compatibility -->
<a id="schemavirtualclusterstate"></a>
<a id="schema_VirtualClusterState"></a>
<a id="tocSvirtualclusterstate"></a>
<a id="tocsvirtualclusterstate"></a>

```json
"RUNNING"
```

<h2 id="tocS_StartJobRunResponse">StartJobRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartjobrunresponse"></a>
<a id="schema_StartJobRunResponse"></a>
<a id="tocSstartjobrunresponse"></a>
<a id="tocsstartjobrunresponse"></a>

```json
{
  "id": {},
  "name": {},
  "arn": {},
  "virtualClusterId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|arn|object|false|none|none|
|virtualClusterId|object|false|none|none|

<h2 id="tocS_SparkSubmitJobDriver">SparkSubmitJobDriver</h2>
<!-- backwards compatibility -->
<a id="schemasparksubmitjobdriver"></a>
<a id="schema_SparkSubmitJobDriver"></a>
<a id="tocSsparksubmitjobdriver"></a>
<a id="tocssparksubmitjobdriver"></a>

```json
{
  "entryPoint": {},
  "entryPointArguments": {},
  "sparkSubmitParameters": {}
}
```

The information about job driver for Spark submit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryPoint|object|true|none|none|
|entryPointArguments|object|false|none|none|
|sparkSubmitParameters|object|false|none|none|

<h2 id="tocS_SparkSqlJobDriver">SparkSqlJobDriver</h2>
<!-- backwards compatibility -->
<a id="schemasparksqljobdriver"></a>
<a id="schema_SparkSqlJobDriver"></a>
<a id="tocSsparksqljobdriver"></a>
<a id="tocssparksqljobdriver"></a>

```json
{
  "entryPoint": {},
  "sparkSqlParameters": {}
}
```

The job driver for job type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryPoint|object|false|none|none|
|sparkSqlParameters|object|false|none|none|

<h2 id="tocS_String1024">String1024</h2>
<!-- backwards compatibility -->
<a id="schemastring1024"></a>
<a id="schema_String1024"></a>
<a id="tocSstring1024"></a>
<a id="tocsstring1024"></a>

```json
"string"
```

<h2 id="tocS_JavaInteger">JavaInteger</h2>
<!-- backwards compatibility -->
<a id="schemajavainteger"></a>
<a id="schema_JavaInteger"></a>
<a id="tocSjavainteger"></a>
<a id="tocsjavainteger"></a>

```json
0
```

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

<h2 id="tocS_String128">String128</h2>
<!-- backwards compatibility -->
<a id="schemastring128"></a>
<a id="schema_String128"></a>
<a id="tocSstring128"></a>
<a id="tocsstring128"></a>

```json
"string"
```

<h2 id="tocS_ACMCertArn">ACMCertArn</h2>
<!-- backwards compatibility -->
<a id="schemaacmcertarn"></a>
<a id="schema_ACMCertArn"></a>
<a id="tocSacmcertarn"></a>
<a id="tocsacmcertarn"></a>

```json
"stringstringstringstringstringstringstringst"
```

<h2 id="tocS_Base64Encoded">Base64Encoded</h2>
<!-- backwards compatibility -->
<a id="schemabase64encoded"></a>
<a id="schema_Base64Encoded"></a>
<a id="tocSbase64encoded"></a>
<a id="tocsbase64encoded"></a>

```json
"string"
```

<h2 id="tocS_ResourceIdString">ResourceIdString</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidstring"></a>
<a id="schema_ResourceIdString"></a>
<a id="tocSresourceidstring"></a>
<a id="tocsresourceidstring"></a>

```json
"string"
```

<h2 id="tocS_CancelJobRunRequest">CancelJobRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceljobrunrequest"></a>
<a id="schema_CancelJobRunRequest"></a>
<a id="tocScanceljobrunrequest"></a>
<a id="tocscanceljobrunrequest"></a>

```json
{}
```

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
{
  "certificateArn": {},
  "certificateData": {}
}
```

The entity representing certificate data generated for managed endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateArn|object|false|none|none|
|certificateData|object|false|none|none|

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
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

<h2 id="tocS_String256">String256</h2>
<!-- backwards compatibility -->
<a id="schemastring256"></a>
<a id="schema_String256"></a>
<a id="tocSstring256"></a>
<a id="tocsstring256"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchMonitoringConfiguration">CloudWatchMonitoringConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmonitoringconfiguration"></a>
<a id="schema_CloudWatchMonitoringConfiguration"></a>
<a id="tocScloudwatchmonitoringconfiguration"></a>
<a id="tocscloudwatchmonitoringconfiguration"></a>

```json
{
  "logGroupName": {},
  "logStreamNamePrefix": {}
}
```

A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|true|none|none|
|logStreamNamePrefix|object|false|none|none|

<h2 id="tocS_Configuration">Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_Configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
{
  "classification": {},
  "properties": null,
  "configurations": {}
}
```

A configuration specification to be used when provisioning virtual clusters, which can include configurations for applications and software bundled with Amazon EMR on EKS. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|object|true|none|none|
|properties|object|false|none|A set of properties specified within a configuration classification.|
|configurations|object|false|none|none|

<h2 id="tocS_ConfigurationOverrides">ConfigurationOverrides</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationoverrides"></a>
<a id="schema_ConfigurationOverrides"></a>
<a id="tocSconfigurationoverrides"></a>
<a id="tocsconfigurationoverrides"></a>

```json
{
  "applicationConfiguration": {},
  "monitoringConfiguration": {
    "persistentAppUI": {},
    "cloudWatchMonitoringConfiguration": {
      "logGroupName": {},
      "logStreamNamePrefix": {}
    },
    "s3MonitoringConfiguration": {
      "logUri": {}
    }
  }
}
```

A configuration specification to be used to override existing configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationConfiguration|object|false|none|none|
|monitoringConfiguration|object|false|none|none|

<h2 id="tocS_EksInfo">EksInfo</h2>
<!-- backwards compatibility -->
<a id="schemaeksinfo"></a>
<a id="schema_EksInfo"></a>
<a id="tocSeksinfo"></a>
<a id="tocseksinfo"></a>

```json
{
  "namespace": {}
}
```

The information about the Amazon EKS cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|object|false|none|none|

<h2 id="tocS_ContainerProvider">ContainerProvider</h2>
<!-- backwards compatibility -->
<a id="schemacontainerprovider"></a>
<a id="schema_ContainerProvider"></a>
<a id="tocScontainerprovider"></a>
<a id="tocscontainerprovider"></a>

```json
{
  "type": {},
  "id": {},
  "info": {
    "eksInfo": {
      "namespace": {}
    }
  }
}
```

The information about the container provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|id|object|true|none|none|
|info|object|false|none|none|

<h2 id="tocS_ResourceNameString">ResourceNameString</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenamestring"></a>
<a id="schema_ResourceNameString"></a>
<a id="tocSresourcenamestring"></a>
<a id="tocsresourcenamestring"></a>

```json
"string"
```

<h2 id="tocS_JobTemplateData">JobTemplateData</h2>
<!-- backwards compatibility -->
<a id="schemajobtemplatedata"></a>
<a id="schema_JobTemplateData"></a>
<a id="tocSjobtemplatedata"></a>
<a id="tocsjobtemplatedata"></a>

```json
{
  "executionRoleArn": {},
  "releaseLabel": {},
  "configurationOverrides": {
    "applicationConfiguration": {},
    "monitoringConfiguration": {
      "persistentAppUI": {},
      "cloudWatchMonitoringConfiguration": {
        "logGroupName": {},
        "logStreamNamePrefix": {}
      },
      "s3MonitoringConfiguration": {
        "logUri": {}
      }
    }
  },
  "jobDriver": {
    "sparkSubmitJobDriver": {
      "entryPoint": {},
      "entryPointArguments": {},
      "sparkSubmitParameters": {}
    },
    "sparkSqlJobDriver": {
      "entryPoint": {},
      "sparkSqlParameters": {}
    }
  },
  "parameterConfiguration": {
    "property1": {
      "type": {},
      "defaultValue": {}
    },
    "property2": {
      "type": {},
      "defaultValue": {}
    }
  },
  "jobTags": {
    "property1": "string",
    "property2": "string"
  }
}
```

The values of StartJobRun API requests used in job runs started using the job template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionRoleArn|object|true|none|none|
|releaseLabel|object|true|none|none|
|configurationOverrides|object|false|none|none|
|jobDriver|[JobDriver](#schemajobdriver)|true|none|Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.|
|parameterConfiguration|object|false|none|none|
|jobTags|object|false|none|none|

<h2 id="tocS_KmsKeyArn">KmsKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarn"></a>
<a id="schema_KmsKeyArn"></a>
<a id="tocSkmskeyarn"></a>
<a id="tocskmskeyarn"></a>

```json
"string"
```

<h2 id="tocS_CreateJobTemplateRequest">CreateJobTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobtemplaterequest"></a>
<a id="schema_CreateJobTemplateRequest"></a>
<a id="tocScreatejobtemplaterequest"></a>
<a id="tocscreatejobtemplaterequest"></a>

```json
{
  "name": {},
  "clientToken": {},
  "jobTemplateData": {
    "executionRoleArn": {},
    "releaseLabel": {},
    "configurationOverrides": {
      "applicationConfiguration": {},
      "monitoringConfiguration": {
        "persistentAppUI": {},
        "cloudWatchMonitoringConfiguration": {
          "logGroupName": {},
          "logStreamNamePrefix": {}
        },
        "s3MonitoringConfiguration": {
          "logUri": {}
        }
      }
    },
    "jobDriver": {
      "sparkSubmitJobDriver": {
        "entryPoint": {},
        "entryPointArguments": {},
        "sparkSubmitParameters": {}
      },
      "sparkSqlJobDriver": {
        "entryPoint": {},
        "sparkSqlParameters": {}
      }
    },
    "parameterConfiguration": {
      "property1": {
        "type": {},
        "defaultValue": {}
      },
      "property2": {
        "type": {},
        "defaultValue": {}
      }
    },
    "jobTags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "kmsKeyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|clientToken|object|true|none|none|
|jobTemplateData|object|true|none|none|
|tags|object|false|none|none|
|kmsKeyArn|object|false|none|none|

<h2 id="tocS_JobTemplateArn">JobTemplateArn</h2>
<!-- backwards compatibility -->
<a id="schemajobtemplatearn"></a>
<a id="schema_JobTemplateArn"></a>
<a id="tocSjobtemplatearn"></a>
<a id="tocsjobtemplatearn"></a>

```json
"stringstringstringstringstringstringstringstringstringstring"
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

<h2 id="tocS_ReleaseLabel">ReleaseLabel</h2>
<!-- backwards compatibility -->
<a id="schemareleaselabel"></a>
<a id="schema_ReleaseLabel"></a>
<a id="tocSreleaselabel"></a>
<a id="tocsreleaselabel"></a>

```json
"string"
```

<h2 id="tocS_IAMRoleArn">IAMRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IAMRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_CreateManagedEndpointRequest">CreateManagedEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemanagedendpointrequest"></a>
<a id="schema_CreateManagedEndpointRequest"></a>
<a id="tocScreatemanagedendpointrequest"></a>
<a id="tocscreatemanagedendpointrequest"></a>

```json
{
  "name": {},
  "type": {},
  "releaseLabel": {},
  "executionRoleArn": {},
  "certificateArn": {},
  "configurationOverrides": {
    "applicationConfiguration": {},
    "monitoringConfiguration": {
      "persistentAppUI": {},
      "cloudWatchMonitoringConfiguration": {
        "logGroupName": {},
        "logStreamNamePrefix": {}
      },
      "s3MonitoringConfiguration": {
        "logUri": {}
      }
    }
  },
  "clientToken": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|type|object|true|none|none|
|releaseLabel|object|true|none|none|
|executionRoleArn|object|true|none|none|
|certificateArn|object|false|none|none|
|configurationOverrides|object|false|none|none|
|clientToken|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_EndpointArn">EndpointArn</h2>
<!-- backwards compatibility -->
<a id="schemaendpointarn"></a>
<a id="schema_EndpointArn"></a>
<a id="tocSendpointarn"></a>
<a id="tocsendpointarn"></a>

```json
"stringstringstringstringstringstringstringstringstringstring"
```

<h2 id="tocS_CreateVirtualClusterRequest">CreateVirtualClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevirtualclusterrequest"></a>
<a id="schema_CreateVirtualClusterRequest"></a>
<a id="tocScreatevirtualclusterrequest"></a>
<a id="tocscreatevirtualclusterrequest"></a>

```json
{
  "name": {},
  "containerProvider": {
    "type": {},
    "id": {},
    "info": {
      "eksInfo": {
        "namespace": {}
      }
    }
  },
  "clientToken": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|containerProvider|object|true|none|none|
|clientToken|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_VirtualClusterArn">VirtualClusterArn</h2>
<!-- backwards compatibility -->
<a id="schemavirtualclusterarn"></a>
<a id="schema_VirtualClusterArn"></a>
<a id="tocSvirtualclusterarn"></a>
<a id="tocsvirtualclusterarn"></a>

```json
"stringstringstringstringstringstringstringstringstringstring"
```

<h2 id="tocS_DeleteJobTemplateRequest">DeleteJobTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletejobtemplaterequest"></a>
<a id="schema_DeleteJobTemplateRequest"></a>
<a id="tocSdeletejobtemplaterequest"></a>
<a id="tocsdeletejobtemplaterequest"></a>

```json
{}
```

<h2 id="tocS_DeleteManagedEndpointRequest">DeleteManagedEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemanagedendpointrequest"></a>
<a id="schema_DeleteManagedEndpointRequest"></a>
<a id="tocSdeletemanagedendpointrequest"></a>
<a id="tocsdeletemanagedendpointrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteVirtualClusterRequest">DeleteVirtualClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevirtualclusterrequest"></a>
<a id="schema_DeleteVirtualClusterRequest"></a>
<a id="tocSdeletevirtualclusterrequest"></a>
<a id="tocsdeletevirtualclusterrequest"></a>

```json
{}
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

<h2 id="tocS_JobRun">JobRun</h2>
<!-- backwards compatibility -->
<a id="schemajobrun"></a>
<a id="schema_JobRun"></a>
<a id="tocSjobrun"></a>
<a id="tocsjobrun"></a>

```json
{
  "id": {},
  "name": {},
  "virtualClusterId": {},
  "arn": {},
  "state": {},
  "clientToken": {},
  "executionRoleArn": {},
  "releaseLabel": {},
  "configurationOverrides": {
    "applicationConfiguration": {},
    "monitoringConfiguration": {
      "persistentAppUI": {},
      "cloudWatchMonitoringConfiguration": {
        "logGroupName": {},
        "logStreamNamePrefix": {}
      },
      "s3MonitoringConfiguration": {
        "logUri": {}
      }
    }
  },
  "jobDriver": {
    "sparkSubmitJobDriver": {
      "entryPoint": {},
      "entryPointArguments": {},
      "sparkSubmitParameters": {}
    },
    "sparkSqlJobDriver": {
      "entryPoint": {},
      "sparkSqlParameters": {}
    }
  },
  "createdAt": {},
  "createdBy": {},
  "finishedAt": {},
  "stateDetails": {},
  "failureReason": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "retryPolicyConfiguration": {
    "maxAttempts": {}
  },
  "retryPolicyExecution": {
    "currentAttemptCount": {}
  }
}
```

This entity describes a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|virtualClusterId|object|false|none|none|
|arn|object|false|none|none|
|state|object|false|none|none|
|clientToken|object|false|none|none|
|executionRoleArn|object|false|none|none|
|releaseLabel|object|false|none|none|
|configurationOverrides|object|false|none|none|
|jobDriver|object|false|none|none|
|createdAt|object|false|none|none|
|createdBy|object|false|none|none|
|finishedAt|object|false|none|none|
|stateDetails|object|false|none|none|
|failureReason|object|false|none|none|
|tags|object|false|none|none|
|retryPolicyConfiguration|object|false|none|none|
|retryPolicyExecution|object|false|none|none|

<h2 id="tocS_DescribeJobTemplateRequest">DescribeJobTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobtemplaterequest"></a>
<a id="schema_DescribeJobTemplateRequest"></a>
<a id="tocSdescribejobtemplaterequest"></a>
<a id="tocsdescribejobtemplaterequest"></a>

```json
{}
```

<h2 id="tocS_JobTemplate">JobTemplate</h2>
<!-- backwards compatibility -->
<a id="schemajobtemplate"></a>
<a id="schema_JobTemplate"></a>
<a id="tocSjobtemplate"></a>
<a id="tocsjobtemplate"></a>

```json
{
  "name": {},
  "id": {},
  "arn": {},
  "createdAt": {},
  "createdBy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "jobTemplateData": {
    "executionRoleArn": {},
    "releaseLabel": {},
    "configurationOverrides": {
      "applicationConfiguration": {},
      "monitoringConfiguration": {
        "persistentAppUI": {},
        "cloudWatchMonitoringConfiguration": {
          "logGroupName": {},
          "logStreamNamePrefix": {}
        },
        "s3MonitoringConfiguration": {
          "logUri": {}
        }
      }
    },
    "jobDriver": {
      "sparkSubmitJobDriver": {
        "entryPoint": {},
        "entryPointArguments": {},
        "sparkSubmitParameters": {}
      },
      "sparkSqlJobDriver": {
        "entryPoint": {},
        "sparkSqlParameters": {}
      }
    },
    "parameterConfiguration": {
      "property1": {
        "type": {},
        "defaultValue": {}
      },
      "property2": {
        "type": {},
        "defaultValue": {}
      }
    },
    "jobTags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "kmsKeyArn": {},
  "decryptionError": {}
}
```

This entity describes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|id|object|false|none|none|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|createdBy|object|false|none|none|
|tags|object|false|none|none|
|jobTemplateData|object|true|none|none|
|kmsKeyArn|object|false|none|none|
|decryptionError|object|false|none|none|

<h2 id="tocS_DescribeManagedEndpointRequest">DescribeManagedEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemanagedendpointrequest"></a>
<a id="schema_DescribeManagedEndpointRequest"></a>
<a id="tocSdescribemanagedendpointrequest"></a>
<a id="tocsdescribemanagedendpointrequest"></a>

```json
{}
```

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "id": {},
  "name": {},
  "arn": {},
  "virtualClusterId": {},
  "type": {},
  "state": {},
  "releaseLabel": {},
  "executionRoleArn": {},
  "certificateArn": {},
  "certificateAuthority": {
    "certificateArn": {},
    "certificateData": {}
  },
  "configurationOverrides": {
    "applicationConfiguration": {},
    "monitoringConfiguration": {
      "persistentAppUI": {},
      "cloudWatchMonitoringConfiguration": {
        "logGroupName": {},
        "logStreamNamePrefix": {}
      },
      "s3MonitoringConfiguration": {
        "logUri": {}
      }
    }
  },
  "serverUrl": {},
  "createdAt": {},
  "securityGroup": {},
  "subnetIds": {},
  "stateDetails": {},
  "failureReason": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

This entity represents the endpoint that is managed by Amazon EMR on EKS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|arn|object|false|none|none|
|virtualClusterId|object|false|none|none|
|type|object|false|none|none|
|state|object|false|none|none|
|releaseLabel|object|false|none|none|
|executionRoleArn|object|false|none|none|
|certificateArn|object|false|none|none|
|certificateAuthority|object|false|none|none|
|configurationOverrides|object|false|none|none|
|serverUrl|object|false|none|none|
|createdAt|object|false|none|none|
|securityGroup|object|false|none|none|
|subnetIds|object|false|none|none|
|stateDetails|object|false|none|none|
|failureReason|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DescribeVirtualClusterRequest">DescribeVirtualClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribevirtualclusterrequest"></a>
<a id="schema_DescribeVirtualClusterRequest"></a>
<a id="tocSdescribevirtualclusterrequest"></a>
<a id="tocsdescribevirtualclusterrequest"></a>

```json
{}
```

<h2 id="tocS_VirtualCluster">VirtualCluster</h2>
<!-- backwards compatibility -->
<a id="schemavirtualcluster"></a>
<a id="schema_VirtualCluster"></a>
<a id="tocSvirtualcluster"></a>
<a id="tocsvirtualcluster"></a>

```json
{
  "id": {},
  "name": {},
  "arn": {},
  "state": {},
  "containerProvider": {
    "type": {},
    "id": {},
    "info": {
      "eksInfo": {
        "namespace": {}
      }
    }
  },
  "createdAt": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

This entity describes a virtual cluster. A virtual cluster is a Kubernetes namespace that Amazon EMR is registered with. Amazon EMR uses virtual clusters to run jobs and host endpoints. Multiple virtual clusters can be backed by the same physical cluster. However, each virtual cluster maps to one namespace on an Amazon EKS cluster. Virtual clusters do not create any active resources that contribute to your bill or that require lifecycle management outside the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|arn|object|false|none|none|
|state|object|false|none|none|
|containerProvider|object|false|none|none|
|createdAt|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_KubernetesNamespace">KubernetesNamespace</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesnamespace"></a>
<a id="schema_KubernetesNamespace"></a>
<a id="tocSkubernetesnamespace"></a>
<a id="tocskubernetesnamespace"></a>

```json
"string"
```

<h2 id="tocS_UriString">UriString</h2>
<!-- backwards compatibility -->
<a id="schemauristring"></a>
<a id="schema_UriString"></a>
<a id="tocSuristring"></a>
<a id="tocsuristring"></a>

```json
"string"
```

<h2 id="tocS_SubnetIds">SubnetIds</h2>
<!-- backwards compatibility -->
<a id="schemasubnetids"></a>
<a id="schema_SubnetIds"></a>
<a id="tocSsubnetids"></a>
<a id="tocssubnetids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FailureReason">FailureReason</h2>
<!-- backwards compatibility -->
<a id="schemafailurereason"></a>
<a id="schema_FailureReason"></a>
<a id="tocSfailurereason"></a>
<a id="tocsfailurereason"></a>

```json
"INTERNAL_ERROR"
```

<h2 id="tocS_EndpointStates">EndpointStates</h2>
<!-- backwards compatibility -->
<a id="schemaendpointstates"></a>
<a id="schema_EndpointStates"></a>
<a id="tocSendpointstates"></a>
<a id="tocsendpointstates"></a>

```json
[
  "CREATING"
]
```

<h2 id="tocS_EndpointTypes">EndpointTypes</h2>
<!-- backwards compatibility -->
<a id="schemaendpointtypes"></a>
<a id="schema_EndpointTypes"></a>
<a id="tocSendpointtypes"></a>
<a id="tocsendpointtypes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Endpoints">Endpoints</h2>
<!-- backwards compatibility -->
<a id="schemaendpoints"></a>
<a id="schema_Endpoints"></a>
<a id="tocSendpoints"></a>
<a id="tocsendpoints"></a>

```json
[
  {
    "id": {},
    "name": {},
    "arn": {},
    "virtualClusterId": {},
    "type": {},
    "state": {},
    "releaseLabel": {},
    "executionRoleArn": {},
    "certificateArn": {},
    "certificateAuthority": {
      "certificateArn": {},
      "certificateData": {}
    },
    "configurationOverrides": {
      "applicationConfiguration": {},
      "monitoringConfiguration": {
        "persistentAppUI": {},
        "cloudWatchMonitoringConfiguration": {
          "logGroupName": {},
          "logStreamNamePrefix": {}
        },
        "s3MonitoringConfiguration": {
          "logUri": {}
        }
      }
    },
    "serverUrl": {},
    "createdAt": {},
    "securityGroup": {},
    "subnetIds": {},
    "stateDetails": {},
    "failureReason": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_EntryPointArgument">EntryPointArgument</h2>
<!-- backwards compatibility -->
<a id="schemaentrypointargument"></a>
<a id="schema_EntryPointArgument"></a>
<a id="tocSentrypointargument"></a>
<a id="tocsentrypointargument"></a>

```json
"password"
```

<h2 id="tocS_EntryPointArguments">EntryPointArguments</h2>
<!-- backwards compatibility -->
<a id="schemaentrypointarguments"></a>
<a id="schema_EntryPointArguments"></a>
<a id="tocSentrypointarguments"></a>
<a id="tocsentrypointarguments"></a>

```json
[
  "password"
]
```

<h2 id="tocS_EntryPointPath">EntryPointPath</h2>
<!-- backwards compatibility -->
<a id="schemaentrypointpath"></a>
<a id="schema_EntryPointPath"></a>
<a id="tocSentrypointpath"></a>
<a id="tocsentrypointpath"></a>

```json
"password"
```

<h2 id="tocS_JobArn">JobArn</h2>
<!-- backwards compatibility -->
<a id="schemajobarn"></a>
<a id="schema_JobArn"></a>
<a id="tocSjobarn"></a>
<a id="tocsjobarn"></a>

```json
"stringstringstringstringstringstringstringstringstringstring"
```

<h2 id="tocS_RequestIdentityUserArn">RequestIdentityUserArn</h2>
<!-- backwards compatibility -->
<a id="schemarequestidentityuserarn"></a>
<a id="schema_RequestIdentityUserArn"></a>
<a id="tocSrequestidentityuserarn"></a>
<a id="tocsrequestidentityuserarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_RetryPolicyConfiguration">RetryPolicyConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaretrypolicyconfiguration"></a>
<a id="schema_RetryPolicyConfiguration"></a>
<a id="tocSretrypolicyconfiguration"></a>
<a id="tocsretrypolicyconfiguration"></a>

```json
{
  "maxAttempts": {}
}
```

The configuration of the retry policy that the job runs on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxAttempts|object|true|none|none|

<h2 id="tocS_RetryPolicyExecution">RetryPolicyExecution</h2>
<!-- backwards compatibility -->
<a id="schemaretrypolicyexecution"></a>
<a id="schema_RetryPolicyExecution"></a>
<a id="tocSretrypolicyexecution"></a>
<a id="tocsretrypolicyexecution"></a>

```json
{
  "currentAttemptCount": {}
}
```

The current status of the retry policy executed on the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentAttemptCount|object|true|none|none|

<h2 id="tocS_JobRunStates">JobRunStates</h2>
<!-- backwards compatibility -->
<a id="schemajobrunstates"></a>
<a id="schema_JobRunStates"></a>
<a id="tocSjobrunstates"></a>
<a id="tocsjobrunstates"></a>

```json
[
  "PENDING"
]
```

<h2 id="tocS_JobRuns">JobRuns</h2>
<!-- backwards compatibility -->
<a id="schemajobruns"></a>
<a id="schema_JobRuns"></a>
<a id="tocSjobruns"></a>
<a id="tocsjobruns"></a>

```json
[
  {
    "id": {},
    "name": {},
    "virtualClusterId": {},
    "arn": {},
    "state": {},
    "clientToken": {},
    "executionRoleArn": {},
    "releaseLabel": {},
    "configurationOverrides": {
      "applicationConfiguration": {},
      "monitoringConfiguration": {
        "persistentAppUI": {},
        "cloudWatchMonitoringConfiguration": {
          "logGroupName": {},
          "logStreamNamePrefix": {}
        },
        "s3MonitoringConfiguration": {
          "logUri": {}
        }
      }
    },
    "jobDriver": {
      "sparkSubmitJobDriver": {
        "entryPoint": {},
        "entryPointArguments": {},
        "sparkSubmitParameters": {}
      },
      "sparkSqlJobDriver": {
        "entryPoint": {},
        "sparkSqlParameters": {}
      }
    },
    "createdAt": {},
    "createdBy": {},
    "finishedAt": {},
    "stateDetails": {},
    "failureReason": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "retryPolicyConfiguration": {
      "maxAttempts": {}
    },
    "retryPolicyExecution": {
      "currentAttemptCount": {}
    }
  }
]
```

<h2 id="tocS_String2048">String2048</h2>
<!-- backwards compatibility -->
<a id="schemastring2048"></a>
<a id="schema_String2048"></a>
<a id="tocSstring2048"></a>
<a id="tocsstring2048"></a>

```json
"string"
```

<h2 id="tocS_JobTemplates">JobTemplates</h2>
<!-- backwards compatibility -->
<a id="schemajobtemplates"></a>
<a id="schema_JobTemplates"></a>
<a id="tocSjobtemplates"></a>
<a id="tocsjobtemplates"></a>

```json
[
  {
    "name": {},
    "id": {},
    "arn": {},
    "createdAt": {},
    "createdBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "jobTemplateData": {
      "executionRoleArn": {},
      "releaseLabel": {},
      "configurationOverrides": {
        "applicationConfiguration": {},
        "monitoringConfiguration": {
          "persistentAppUI": {},
          "cloudWatchMonitoringConfiguration": {
            "logGroupName": {},
            "logStreamNamePrefix": {}
          },
          "s3MonitoringConfiguration": {
            "logUri": {}
          }
        }
      },
      "jobDriver": {
        "sparkSubmitJobDriver": {
          "entryPoint": {},
          "entryPointArguments": {},
          "sparkSubmitParameters": {}
        },
        "sparkSqlJobDriver": {
          "entryPoint": {},
          "sparkSqlParameters": {}
        }
      },
      "parameterConfiguration": {
        "property1": {
          "type": {},
          "defaultValue": {}
        },
        "property2": {
          "type": {},
          "defaultValue": {}
        }
      },
      "jobTags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "kmsKeyArn": {},
    "decryptionError": {}
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

<h2 id="tocS_ListJobRunsRequest">ListJobRunsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjobrunsrequest"></a>
<a id="schema_ListJobRunsRequest"></a>
<a id="tocSlistjobrunsrequest"></a>
<a id="tocslistjobrunsrequest"></a>

```json
{}
```

<h2 id="tocS_ListJobTemplatesRequest">ListJobTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjobtemplatesrequest"></a>
<a id="schema_ListJobTemplatesRequest"></a>
<a id="tocSlistjobtemplatesrequest"></a>
<a id="tocslistjobtemplatesrequest"></a>

```json
{}
```

<h2 id="tocS_ListManagedEndpointsRequest">ListManagedEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmanagedendpointsrequest"></a>
<a id="schema_ListManagedEndpointsRequest"></a>
<a id="tocSlistmanagedendpointsrequest"></a>
<a id="tocslistmanagedendpointsrequest"></a>

```json
{}
```

<h2 id="tocS_RsiArn">RsiArn</h2>
<!-- backwards compatibility -->
<a id="schemarsiarn"></a>
<a id="schema_RsiArn"></a>
<a id="tocSrsiarn"></a>
<a id="tocsrsiarn"></a>

```json
"stringstringstringstringstringstringstringstringstringstring"
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

<h2 id="tocS_VirtualClusterStates">VirtualClusterStates</h2>
<!-- backwards compatibility -->
<a id="schemavirtualclusterstates"></a>
<a id="schema_VirtualClusterStates"></a>
<a id="tocSvirtualclusterstates"></a>
<a id="tocsvirtualclusterstates"></a>

```json
[
  "RUNNING"
]
```

<h2 id="tocS_ListVirtualClustersRequest">ListVirtualClustersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvirtualclustersrequest"></a>
<a id="schema_ListVirtualClustersRequest"></a>
<a id="tocSlistvirtualclustersrequest"></a>
<a id="tocslistvirtualclustersrequest"></a>

```json
{}
```

<h2 id="tocS_VirtualClusters">VirtualClusters</h2>
<!-- backwards compatibility -->
<a id="schemavirtualclusters"></a>
<a id="schema_VirtualClusters"></a>
<a id="tocSvirtualclusters"></a>
<a id="tocsvirtualclusters"></a>

```json
[
  {
    "id": {},
    "name": {},
    "arn": {},
    "state": {},
    "containerProvider": {
      "type": {},
      "id": {},
      "info": {
        "eksInfo": {
          "namespace": {}
        }
      }
    },
    "createdAt": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_PersistentAppUI">PersistentAppUI</h2>
<!-- backwards compatibility -->
<a id="schemapersistentappui"></a>
<a id="schema_PersistentAppUI"></a>
<a id="tocSpersistentappui"></a>
<a id="tocspersistentappui"></a>

```json
"ENABLED"
```

<h2 id="tocS_S3MonitoringConfiguration">S3MonitoringConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3monitoringconfiguration"></a>
<a id="schema_S3MonitoringConfiguration"></a>
<a id="tocSs3monitoringconfiguration"></a>
<a id="tocss3monitoringconfiguration"></a>

```json
{
  "logUri": {}
}
```

 Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logUri|object|true|none|none|

<h2 id="tocS_TemplateParameter">TemplateParameter</h2>
<!-- backwards compatibility -->
<a id="schematemplateparameter"></a>
<a id="schema_TemplateParameter"></a>
<a id="tocStemplateparameter"></a>
<a id="tocstemplateparameter"></a>

```json
"string"
```

<h2 id="tocS_ParametricCloudWatchMonitoringConfiguration">ParametricCloudWatchMonitoringConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaparametriccloudwatchmonitoringconfiguration"></a>
<a id="schema_ParametricCloudWatchMonitoringConfiguration"></a>
<a id="tocSparametriccloudwatchmonitoringconfiguration"></a>
<a id="tocsparametriccloudwatchmonitoringconfiguration"></a>

```json
{
  "logGroupName": {},
  "logStreamNamePrefix": {}
}
```

 A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs. This data type allows job template parameters to be specified within.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupName|object|false|none|none|
|logStreamNamePrefix|object|false|none|none|

<h2 id="tocS_ParametricMonitoringConfiguration">ParametricMonitoringConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaparametricmonitoringconfiguration"></a>
<a id="schema_ParametricMonitoringConfiguration"></a>
<a id="tocSparametricmonitoringconfiguration"></a>
<a id="tocsparametricmonitoringconfiguration"></a>

```json
{
  "persistentAppUI": {},
  "cloudWatchMonitoringConfiguration": {
    "logGroupName": {},
    "logStreamNamePrefix": {}
  },
  "s3MonitoringConfiguration": {
    "logUri": {}
  }
}
```

 Configuration setting for monitoring. This data type allows job template parameters to be specified within.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|persistentAppUI|object|false|none|none|
|cloudWatchMonitoringConfiguration|object|false|none|none|
|s3MonitoringConfiguration|object|false|none|none|

<h2 id="tocS_ParametricS3MonitoringConfiguration">ParametricS3MonitoringConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaparametrics3monitoringconfiguration"></a>
<a id="schema_ParametricS3MonitoringConfiguration"></a>
<a id="tocSparametrics3monitoringconfiguration"></a>
<a id="tocsparametrics3monitoringconfiguration"></a>

```json
{
  "logUri": {}
}
```

 Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3. This data type allows job template parameters to be specified within.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logUri|object|false|none|none|

<h2 id="tocS_SensitivePropertiesMap">SensitivePropertiesMap</h2>
<!-- backwards compatibility -->
<a id="schemasensitivepropertiesmap"></a>
<a id="schema_SensitivePropertiesMap"></a>
<a id="tocSsensitivepropertiesmap"></a>
<a id="tocssensitivepropertiesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String1024](#schemastring1024)|false|none|none|

<h2 id="tocS_SparkSqlParameters">SparkSqlParameters</h2>
<!-- backwards compatibility -->
<a id="schemasparksqlparameters"></a>
<a id="schema_SparkSqlParameters"></a>
<a id="tocSsparksqlparameters"></a>
<a id="tocssparksqlparameters"></a>

```json
"password"
```

<h2 id="tocS_SparkSubmitParameters">SparkSubmitParameters</h2>
<!-- backwards compatibility -->
<a id="schemasparksubmitparameters"></a>
<a id="schema_SparkSubmitParameters"></a>
<a id="tocSsparksubmitparameters"></a>
<a id="tocssparksubmitparameters"></a>

```json
"password"
```

<h2 id="tocS_TemplateParameterInputMap">TemplateParameterInputMap</h2>
<!-- backwards compatibility -->
<a id="schematemplateparameterinputmap"></a>
<a id="schema_TemplateParameterInputMap"></a>
<a id="tocStemplateparameterinputmap"></a>
<a id="tocstemplateparameterinputmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String1024](#schemastring1024)|false|none|none|

<h2 id="tocS_StartJobRunRequest">StartJobRunRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartjobrunrequest"></a>
<a id="schema_StartJobRunRequest"></a>
<a id="tocSstartjobrunrequest"></a>
<a id="tocsstartjobrunrequest"></a>

```json
{
  "name": {},
  "clientToken": {},
  "executionRoleArn": {},
  "releaseLabel": {},
  "jobDriver": {
    "sparkSubmitJobDriver": {
      "entryPoint": {},
      "entryPointArguments": {},
      "sparkSubmitParameters": {}
    },
    "sparkSqlJobDriver": {
      "entryPoint": {},
      "sparkSqlParameters": {}
    }
  },
  "configurationOverrides": {
    "applicationConfiguration": {},
    "monitoringConfiguration": {
      "persistentAppUI": {},
      "cloudWatchMonitoringConfiguration": {
        "logGroupName": {},
        "logStreamNamePrefix": {}
      },
      "s3MonitoringConfiguration": {
        "logUri": {}
      }
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "jobTemplateId": {},
  "jobTemplateParameters": {
    "property1": "string",
    "property2": "string"
  },
  "retryPolicyConfiguration": {
    "maxAttempts": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|clientToken|object|true|none|none|
|executionRoleArn|object|false|none|none|
|releaseLabel|object|false|none|none|
|jobDriver|object|false|none|none|
|configurationOverrides|object|false|none|none|
|tags|object|false|none|none|
|jobTemplateId|object|false|none|none|
|jobTemplateParameters|object|false|none|none|
|retryPolicyConfiguration|object|false|none|none|

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

<h2 id="tocS_TemplateParameterDataType">TemplateParameterDataType</h2>
<!-- backwards compatibility -->
<a id="schematemplateparameterdatatype"></a>
<a id="schema_TemplateParameterDataType"></a>
<a id="tocStemplateparameterdatatype"></a>
<a id="tocstemplateparameterdatatype"></a>

```json
"NUMBER"
```

<h2 id="tocS_TemplateParameterConfiguration">TemplateParameterConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematemplateparameterconfiguration"></a>
<a id="schema_TemplateParameterConfiguration"></a>
<a id="tocStemplateparameterconfiguration"></a>
<a id="tocstemplateparameterconfiguration"></a>

```json
{
  "type": {},
  "defaultValue": {}
}
```

The configuration of a job template parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|defaultValue|object|false|none|none|

<h2 id="tocS_TemplateParameterName">TemplateParameterName</h2>
<!-- backwards compatibility -->
<a id="schematemplateparametername"></a>
<a id="schema_TemplateParameterName"></a>
<a id="tocStemplateparametername"></a>
<a id="tocstemplateparametername"></a>

```json
"string"
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
