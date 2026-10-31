<h1 id="amazonmwaa">AmazonMWAA v2020-07-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p><fullname>Amazon Managed Workflows for Apache Airflow</fullname> <p>This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html">What Is Amazon MWAA?</a>.</p> <p> <b>Endpoints</b> </p> <ul> <li> <p> <code>api.airflow.{region}.amazonaws.com</code> - This endpoint is used for environment management.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateEnvironment.html">CreateEnvironment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_DeleteEnvironment.html">DeleteEnvironment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_GetEnvironment.html">GetEnvironment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_ListEnvironments.html">ListEnvironments</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_ListTagsForResource.html">ListTagsForResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_TagResource.html">TagResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_UntagResource.html">UntagResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_UpdateEnvironment.html">UpdateEnvironment</a> </p> </li> </ul> </li> <li> <p> <code>env.airflow.{region}.amazonaws.com</code> - This endpoint is used to operate the Airflow environment.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateCliToken.html ">CreateCliToken</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateWebLoginToken.html">CreateWebLoginToken</a> </p> </li> </ul> </li> <li> <p> <code>ops.airflow.{region}.amazonaws.com</code> - This endpoint is used to push environment metrics that track environment health.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_PublishMetrics.html ">PublishMetrics</a> </p> </li> </ul> </li> </ul> <p> <b>Regions</b> </p> <p>For a list of regions that Amazon MWAA supports, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html#regions-mwaa">Region availability</a> in the <i>Amazon MWAA User Guide</i>.</p></p>

Base URLs:

* <a href="http://airflow.us-east-1.amazonaws.com">http://airflow.us-east-1.amazonaws.com</a> - The AmazonMWAA multi-region endpoint

* <a href="https://airflow.us-east-1.amazonaws.com">https://airflow.us-east-1.amazonaws.com</a> - The AmazonMWAA multi-region endpoint

* <a href="http://airflow.cn-north-1.amazonaws.com.cn">http://airflow.cn-north-1.amazonaws.com.cn</a> - The AmazonMWAA endpoint for China (Beijing) and China (Ningxia)

* <a href="https://airflow.cn-north-1.amazonaws.com.cn">https://airflow.cn-north-1.amazonaws.com.cn</a> - The AmazonMWAA endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/airflow/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazonmwaa-default">Default</h1>

## CreateCliToken

<a id="opIdCreateCliToken"></a>

> Code samples

```bash
curl https://mwaa.us-east-1.amazonaws.com/clitoken/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /clitoken/{Name}`

Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.

<h3 id="createclitoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.|
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
  "CliToken": {},
  "WebServerHostname": {}
}
```

> 480 Response

```json
null
```

<h3 id="createclitoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCliTokenResponse](#schemacreateclitokenresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEnvironment

<a id="opIdGetEnvironment"></a>

> Code samples

```bash
curl https://mwaa.us-east-1.amazonaws.com/environments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /environments/{Name}`

Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

<h3 id="getenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.|
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
  "Environment": {
    "AirflowConfigurationOptions": {
      "property1": "password",
      "property2": "password"
    },
    "AirflowVersion": {},
    "Arn": {},
    "CreatedAt": {},
    "DagS3Path": {},
    "EnvironmentClass": {},
    "ExecutionRoleArn": {},
    "KmsKey": {},
    "LastUpdate": {
      "CreatedAt": {},
      "Error": {
        "ErrorCode": {},
        "ErrorMessage": {}
      },
      "Source": {},
      "Status": {}
    },
    "LoggingConfiguration": {
      "DagProcessingLogs": {
        "CloudWatchLogGroupArn": {},
        "Enabled": {},
        "LogLevel": {}
      },
      "SchedulerLogs": {
        "CloudWatchLogGroupArn": {},
        "Enabled": {},
        "LogLevel": {}
      },
      "TaskLogs": {
        "CloudWatchLogGroupArn": {},
        "Enabled": {},
        "LogLevel": {}
      },
      "WebserverLogs": {
        "CloudWatchLogGroupArn": {},
        "Enabled": {},
        "LogLevel": {}
      },
      "WorkerLogs": {
        "CloudWatchLogGroupArn": {},
        "Enabled": {},
        "LogLevel": {}
      }
    },
    "MaxWorkers": {},
    "MinWorkers": {},
    "Name": {},
    "NetworkConfiguration": {
      "SecurityGroupIds": {},
      "SubnetIds": {}
    },
    "PluginsS3ObjectVersion": {},
    "PluginsS3Path": {},
    "RequirementsS3ObjectVersion": {},
    "RequirementsS3Path": {},
    "Schedulers": {},
    "ServiceRoleArn": {},
    "SourceBucketArn": {},
    "StartupScriptS3ObjectVersion": {},
    "StartupScriptS3Path": {},
    "Status": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "WebserverAccessMode": {},
    "WebserverUrl": {},
    "WeeklyMaintenanceWindowStart": {}
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

<h3 id="getenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEnvironmentOutput](#schemagetenvironmentoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEnvironment

<a id="opIdCreateEnvironment"></a>

> Code samples

```bash
curl https://mwaa.us-east-1.amazonaws.com/environments/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AirflowConfigurationOptions": {
      "property1": "password",
      "property2": "password"
    },
    "AirflowVersion": "string",
    "DagS3Path": "string",
    "EnvironmentClass": "string",
    "ExecutionRoleArn": "string",
    "KmsKey": "string",
    "LoggingConfiguration": {
      "DagProcessingLogs": {
        "Enabled": {},
        "LogLevel": {}
      },
      "SchedulerLogs": {
        "Enabled": {},
        "LogLevel": {}
      },
      "TaskLogs": {
        "Enabled": {},
        "LogLevel": {}
      },
      "WebserverLogs": {
        "Enabled": {},
        "LogLevel": {}
      },
      "WorkerLogs": {
        "Enabled": {},
        "LogLevel": {}
      }
    },
    "MaxWorkers": 1,
    "MinWorkers": 1,
    "NetworkConfiguration": {
      "SecurityGroupIds": {},
      "SubnetIds": {}
    },
    "PluginsS3ObjectVersion": "string",
    "PluginsS3Path": "string",
    "RequirementsS3ObjectVersion": "string",
    "RequirementsS3Path": "string",
    "Schedulers": 0,
    "SourceBucketArn": "string",
    "StartupScriptS3ObjectVersion": "string",
    "StartupScriptS3Path": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "WebserverAccessMode": "PRIVATE_ONLY",
    "WeeklyMaintenanceWindowStart": "string"
  }'
```

`PUT /environments/{Name}`

Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

> Body parameter

```json
{
  "AirflowConfigurationOptions": {
    "property1": "password",
    "property2": "password"
  },
  "AirflowVersion": "string",
  "DagS3Path": "string",
  "EnvironmentClass": "string",
  "ExecutionRoleArn": "string",
  "KmsKey": "string",
  "LoggingConfiguration": {
    "DagProcessingLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "SchedulerLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "TaskLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "WebserverLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "WorkerLogs": {
      "Enabled": {},
      "LogLevel": {}
    }
  },
  "MaxWorkers": 1,
  "MinWorkers": 1,
  "NetworkConfiguration": {
    "SecurityGroupIds": {},
    "SubnetIds": {}
  },
  "PluginsS3ObjectVersion": "string",
  "PluginsS3Path": "string",
  "RequirementsS3ObjectVersion": "string",
  "RequirementsS3Path": "string",
  "Schedulers": 0,
  "SourceBucketArn": "string",
  "StartupScriptS3ObjectVersion": "string",
  "StartupScriptS3Path": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "WebserverAccessMode": "PRIVATE_ONLY",
  "WeeklyMaintenanceWindowStart": "string"
}
```

<h3 id="createenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AirflowConfigurationOptions|body|object|false|A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.|
|» » **additionalProperties**|body|[ConfigValue](#schemaconfigvalue)|false|none|
|» AirflowVersion|body|string|false|The Apache Airflow version for your environment. If no value is specified, it defaults to the latest version. Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, and <code>2.4.3</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html">Apache Airflow versions on Amazon Managed Workflows for Apache Airflow (MWAA)</a>.|
|» DagS3Path|body|string|true|The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.|
|» EnvironmentClass|body|string|false|The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.|
|» ExecutionRoleArn|body|string|true|The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an Amazon Web Services Identity and Access Management (IAM) role that grants MWAA permission to access Amazon Web Services services and resources used by your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.|
|» KmsKey|body|string|false|The Amazon Web Services Key Management Service (KMS) key to encrypt the data in your environment. You can use an Amazon Web Services owned CMK, or a Customer managed CMK (advanced). For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/create-environment.html">Create an Amazon MWAA environment</a>.|
|» LoggingConfiguration|body|object|false|Defines the Apache Airflow log types to send to CloudWatch Logs.|
|» » DagProcessingLogs|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » LogLevel|body|object|true|none|
|» » SchedulerLogs|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » LogLevel|body|object|true|none|
|» » TaskLogs|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » LogLevel|body|object|true|none|
|» » WebserverLogs|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » LogLevel|body|object|true|none|
|» » WorkerLogs|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » LogLevel|body|object|true|none|
|» MaxWorkers|body|integer|false|The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.|
|» MinWorkers|body|integer|false|The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.|
|» NetworkConfiguration|body|object|true|Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.|
|» » SecurityGroupIds|body|object|false|none|
|» » SubnetIds|body|object|false|none|
|» PluginsS3ObjectVersion|body|string|false|The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a plugins.zip file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.|
|» PluginsS3Path|body|string|false|The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the <code>plugins.zip</code> version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.|
|» RequirementsS3ObjectVersion|body|string|false|The version of the <code>requirements.txt</code> file on your Amazon S3 bucket. You must specify a version each time a requirements.txt file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.|
|» RequirementsS3Path|body|string|false|The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.|
|» Schedulers|body|integer|false|<p>The number of Apache Airflow schedulers to run in your environment. Valid values:</p> <ul> <li> <p>v2 - Accepts between 2 to 5. Defaults to 2.</p> </li> <li> <p>v1 - Accepts 1.</p> </li> </ul>|
|» SourceBucketArn|body|string|true|The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.|
|» StartupScriptS3ObjectVersion|body|string|false|<p>The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file every time you update the script. </p> <p> Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: </p> <p> <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code> </p> <p> For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>|
|» StartupScriptS3Path|body|string|false|<p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p> <p> Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>|
|» Tags|body|object|false|The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» WebserverAccessMode|body|string|false|The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.|
|» WeeklyMaintenanceWindowStart|body|string|false|The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» WebserverAccessMode|PRIVATE_ONLY|
|» WebserverAccessMode|PUBLIC_ONLY|

> Example responses

> 200 Response

```json
{
  "Arn": {}
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

<h3 id="createenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEnvironmentOutput](#schemacreateenvironmentoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEnvironment

<a id="opIdDeleteEnvironment"></a>

> Code samples

```bash
curl https://mwaa.us-east-1.amazonaws.com/environments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /environments/{Name}`

Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

<h3 id="deleteenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.|
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

<h3 id="deleteenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEnvironmentOutput](#schemadeleteenvironmentoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEnvironment

<a id="opIdUpdateEnvironment"></a>

> Code samples

```bash
curl https://mwaa.us-east-1.amazonaws.com/environments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AirflowConfigurationOptions": {
      "property1": "password",
      "property2": "password"
    },
    "AirflowVersion": "string",
    "DagS3Path": "string",
    "EnvironmentClass": "string",
    "ExecutionRoleArn": "string",
    "LoggingConfiguration": {
      "DagProcessingLogs": {
        "Enabled": {},
        "LogLevel": {}
      },
      "SchedulerLogs": {
        "Enabled": {},
        "LogLevel": {}
      },
      "TaskLogs": {
        "Enabled": {},
        "LogLevel": {}
      },
      "WebserverLogs": {
        "Enabled": {},
        "LogLevel": {}
      },
      "WorkerLogs": {
        "Enabled": {},
        "LogLevel": {}
      }
    },
    "MaxWorkers": 1,
    "MinWorkers": 1,
    "NetworkConfiguration": {
      "SecurityGroupIds": {}
    },
    "PluginsS3ObjectVersion": "string",
    "PluginsS3Path": "string",
    "RequirementsS3ObjectVersion": "string",
    "RequirementsS3Path": "string",
    "Schedulers": 0,
    "SourceBucketArn": "string",
    "StartupScriptS3ObjectVersion": "string",
    "StartupScriptS3Path": "string",
    "WebserverAccessMode": "PRIVATE_ONLY",
    "WeeklyMaintenanceWindowStart": "string"
  }'
```

`PATCH /environments/{Name}`

Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

> Body parameter

```json
{
  "AirflowConfigurationOptions": {
    "property1": "password",
    "property2": "password"
  },
  "AirflowVersion": "string",
  "DagS3Path": "string",
  "EnvironmentClass": "string",
  "ExecutionRoleArn": "string",
  "LoggingConfiguration": {
    "DagProcessingLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "SchedulerLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "TaskLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "WebserverLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "WorkerLogs": {
      "Enabled": {},
      "LogLevel": {}
    }
  },
  "MaxWorkers": 1,
  "MinWorkers": 1,
  "NetworkConfiguration": {
    "SecurityGroupIds": {}
  },
  "PluginsS3ObjectVersion": "string",
  "PluginsS3Path": "string",
  "RequirementsS3ObjectVersion": "string",
  "RequirementsS3Path": "string",
  "Schedulers": 0,
  "SourceBucketArn": "string",
  "StartupScriptS3ObjectVersion": "string",
  "StartupScriptS3Path": "string",
  "WebserverAccessMode": "PRIVATE_ONLY",
  "WeeklyMaintenanceWindowStart": "string"
}
```

<h3 id="updateenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of your Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AirflowConfigurationOptions|body|object|false|A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.|
|» » **additionalProperties**|body|[ConfigValue](#schemaconfigvalue)|false|none|
|» AirflowVersion|body|string|false|The Apache Airflow version for your environment. If no value is specified, defaults to the latest version. Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, and <code>2.4.3</code>.|
|» DagS3Path|body|string|false|The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.|
|» EnvironmentClass|body|string|false|The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.|
|» ExecutionRoleArn|body|string|false|The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.|
|» LoggingConfiguration|body|object|false|Defines the Apache Airflow log types to send to CloudWatch Logs.|
|» » DagProcessingLogs|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » LogLevel|body|object|true|none|
|» » SchedulerLogs|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » LogLevel|body|object|true|none|
|» » TaskLogs|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » LogLevel|body|object|true|none|
|» » WebserverLogs|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » LogLevel|body|object|true|none|
|» » WorkerLogs|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » LogLevel|body|object|true|none|
|» MaxWorkers|body|integer|false|The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.|
|» MinWorkers|body|integer|false|The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.|
|» NetworkConfiguration|body|object|false|Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.|
|» » SecurityGroupIds|body|object|false|none|
|» PluginsS3ObjectVersion|body|string|false|The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a <code>plugins.zip</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.|
|» PluginsS3Path|body|string|false|The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the plugins.zip version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.|
|» RequirementsS3ObjectVersion|body|string|false|The version of the requirements.txt file on your Amazon S3 bucket. You must specify a version each time a <code>requirements.txt</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.|
|» RequirementsS3Path|body|string|false|The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a file version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.|
|» Schedulers|body|integer|false|The number of Apache Airflow schedulers to run in your Amazon MWAA environment.|
|» SourceBucketArn|body|string|false|The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.|
|» StartupScriptS3ObjectVersion|body|string|false|<p> The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file every time you update the script. </p> <p> Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: </p> <p> <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code> </p> <p> For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>|
|» StartupScriptS3Path|body|string|false|<p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p> <p> Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>|
|» WebserverAccessMode|body|string|false|The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.|
|» WeeklyMaintenanceWindowStart|body|string|false|The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» WebserverAccessMode|PRIVATE_ONLY|
|» WebserverAccessMode|PUBLIC_ONLY|

> Example responses

> 200 Response

```json
{
  "Arn": {}
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

<h3 id="updateenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEnvironmentOutput](#schemaupdateenvironmentoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWebLoginToken

<a id="opIdCreateWebLoginToken"></a>

> Code samples

```bash
curl https://mwaa.us-east-1.amazonaws.com/webtoken/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /webtoken/{Name}`

Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.

<h3 id="createweblogintoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.|
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
  "WebServerHostname": {},
  "WebToken": {}
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

<h3 id="createweblogintoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWebLoginTokenResponse](#schemacreateweblogintokenresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEnvironments

<a id="opIdListEnvironments"></a>

> Code samples

```bash
curl https://mwaa.us-east-1.amazonaws.com/environments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /environments`

Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.

<h3 id="listenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|integer|false|The maximum number of results to retrieve per page. For example, <code>5</code> environments per page.|
|NextToken|query|string|false|Retrieves the next page of the results.|
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
  "Environments": {},
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

<h3 id="listenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEnvironmentsOutput](#schemalistenvironmentsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://mwaa.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{ResourceArn}`

Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>. 

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.|
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
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://mwaa.us-east-1.amazonaws.com/tags/string \
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

Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. 

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
|ResourceArn|path|string|true|The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.|
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
|200|OK|Success|[TagResourceOutput](#schematagresourceoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PublishMetrics

<a id="opIdPublishMetrics"></a>

> Code samples

```bash
curl https://mwaa.us-east-1.amazonaws.com/metrics/environments/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MetricData": [
      {
        "Dimensions": {},
        "MetricName": {},
        "StatisticValues": {
          "Maximum": {},
          "Minimum": {},
          "SampleCount": {},
          "Sum": {}
        },
        "Timestamp": {},
        "Unit": {},
        "Value": {}
      }
    ]
  }'
```

`POST /metrics/environments/{EnvironmentName}`

 <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.

> Body parameter

```json
{
  "MetricData": [
    {
      "Dimensions": {},
      "MetricName": {},
      "StatisticValues": {
        "Maximum": {},
        "Minimum": {},
        "SampleCount": {},
        "Sum": {}
      },
      "Timestamp": {},
      "Unit": {},
      "Value": {}
    }
  ]
}
```

<h3 id="publishmetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EnvironmentName|path|string|true| <b>Internal only</b>. The name of the environment.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MetricData|body|[[MetricDatum](#schemametricdatum)]|true| <b>Internal only</b>. Publishes metrics to Amazon CloudWatch. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.|

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

<h3 id="publishmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublishMetricsOutput](#schemapublishmetricsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://mwaa.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{ResourceArn}#tagKeys`

Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The key-value tag pair you want to remove. For example, <code>"Environment": "Staging"</code>. |
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
|200|OK|Success|[UntagResourceOutput](#schemauntagresourceoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateCliTokenResponse">CreateCliTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateclitokenresponse"></a>
<a id="schema_CreateCliTokenResponse"></a>
<a id="tocScreateclitokenresponse"></a>
<a id="tocscreateclitokenresponse"></a>

```json
{
  "CliToken": {},
  "WebServerHostname": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CliToken|object|false|none|none|
|WebServerHostname|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreateEnvironmentOutput">CreateEnvironmentOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentoutput"></a>
<a id="schema_CreateEnvironmentOutput"></a>
<a id="tocScreateenvironmentoutput"></a>
<a id="tocscreateenvironmentoutput"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|

<h2 id="tocS_ConfigValue">ConfigValue</h2>
<!-- backwards compatibility -->
<a id="schemaconfigvalue"></a>
<a id="schema_ConfigValue"></a>
<a id="tocSconfigvalue"></a>
<a id="tocsconfigvalue"></a>

```json
"password"
```

<h2 id="tocS_ModuleLoggingConfigurationInput">ModuleLoggingConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemamoduleloggingconfigurationinput"></a>
<a id="schema_ModuleLoggingConfigurationInput"></a>
<a id="tocSmoduleloggingconfigurationinput"></a>
<a id="tocsmoduleloggingconfigurationinput"></a>

```json
{
  "Enabled": {},
  "LogLevel": {}
}
```

Enables the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) and defines the log level to send to CloudWatch Logs (e.g. <code>INFO</code>).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|LogLevel|object|true|none|none|

<h2 id="tocS_SecurityGroupList">SecurityGroupList</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygrouplist"></a>
<a id="schema_SecurityGroupList"></a>
<a id="tocSsecuritygrouplist"></a>
<a id="tocssecuritygrouplist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SubnetList">SubnetList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetlist"></a>
<a id="schema_SubnetList"></a>
<a id="tocSsubnetlist"></a>
<a id="tocssubnetlist"></a>

```json
[
  "string",
  "string"
]
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

<h2 id="tocS_CreateWebLoginTokenResponse">CreateWebLoginTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateweblogintokenresponse"></a>
<a id="schema_CreateWebLoginTokenResponse"></a>
<a id="tocScreateweblogintokenresponse"></a>
<a id="tocscreateweblogintokenresponse"></a>

```json
{
  "WebServerHostname": {},
  "WebToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebServerHostname|object|false|none|none|
|WebToken|object|false|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_DeleteEnvironmentOutput">DeleteEnvironmentOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmentoutput"></a>
<a id="schema_DeleteEnvironmentOutput"></a>
<a id="tocSdeleteenvironmentoutput"></a>
<a id="tocsdeleteenvironmentoutput"></a>

```json
{}
```

<h2 id="tocS_GetEnvironmentOutput">GetEnvironmentOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetenvironmentoutput"></a>
<a id="schema_GetEnvironmentOutput"></a>
<a id="tocSgetenvironmentoutput"></a>
<a id="tocsgetenvironmentoutput"></a>

```json
{
  "Environment": {
    "AirflowConfigurationOptions": {
      "property1": "password",
      "property2": "password"
    },
    "AirflowVersion": {},
    "Arn": {},
    "CreatedAt": {},
    "DagS3Path": {},
    "EnvironmentClass": {},
    "ExecutionRoleArn": {},
    "KmsKey": {},
    "LastUpdate": {
      "CreatedAt": {},
      "Error": {
        "ErrorCode": {},
        "ErrorMessage": {}
      },
      "Source": {},
      "Status": {}
    },
    "LoggingConfiguration": {
      "DagProcessingLogs": {
        "CloudWatchLogGroupArn": {},
        "Enabled": {},
        "LogLevel": {}
      },
      "SchedulerLogs": {
        "CloudWatchLogGroupArn": {},
        "Enabled": {},
        "LogLevel": {}
      },
      "TaskLogs": {
        "CloudWatchLogGroupArn": {},
        "Enabled": {},
        "LogLevel": {}
      },
      "WebserverLogs": {
        "CloudWatchLogGroupArn": {},
        "Enabled": {},
        "LogLevel": {}
      },
      "WorkerLogs": {
        "CloudWatchLogGroupArn": {},
        "Enabled": {},
        "LogLevel": {}
      }
    },
    "MaxWorkers": {},
    "MinWorkers": {},
    "Name": {},
    "NetworkConfiguration": {
      "SecurityGroupIds": {},
      "SubnetIds": {}
    },
    "PluginsS3ObjectVersion": {},
    "PluginsS3Path": {},
    "RequirementsS3ObjectVersion": {},
    "RequirementsS3Path": {},
    "Schedulers": {},
    "ServiceRoleArn": {},
    "SourceBucketArn": {},
    "StartupScriptS3ObjectVersion": {},
    "StartupScriptS3Path": {},
    "Status": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "WebserverAccessMode": {},
    "WebserverUrl": {},
    "WeeklyMaintenanceWindowStart": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Environment|object|false|none|none|

<h2 id="tocS_ListEnvironmentsOutput">ListEnvironmentsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentsoutput"></a>
<a id="schema_ListEnvironmentsOutput"></a>
<a id="tocSlistenvironmentsoutput"></a>
<a id="tocslistenvironmentsoutput"></a>

```json
{
  "Environments": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Environments|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceOutput">ListTagsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceoutput"></a>
<a id="schema_ListTagsForResourceOutput"></a>
<a id="tocSlisttagsforresourceoutput"></a>
<a id="tocslisttagsforresourceoutput"></a>

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

<h2 id="tocS_PublishMetricsOutput">PublishMetricsOutput</h2>
<!-- backwards compatibility -->
<a id="schemapublishmetricsoutput"></a>
<a id="schema_PublishMetricsOutput"></a>
<a id="tocSpublishmetricsoutput"></a>
<a id="tocspublishmetricsoutput"></a>

```json
{}
```

<h2 id="tocS_MetricDatum">MetricDatum</h2>
<!-- backwards compatibility -->
<a id="schemametricdatum"></a>
<a id="schema_MetricDatum"></a>
<a id="tocSmetricdatum"></a>
<a id="tocsmetricdatum"></a>

```json
{
  "Dimensions": {},
  "MetricName": {},
  "StatisticValues": {
    "Maximum": {},
    "Minimum": {},
    "SampleCount": {},
    "Sum": {}
  },
  "Timestamp": {},
  "Unit": {},
  "Value": {}
}
```

 <b>Internal only</b>. Collects Apache Airflow metrics. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dimensions|object|false|none|none|
|MetricName|object|true|none|none|
|StatisticValues|object|false|none|none|
|Timestamp|object|true|none|none|
|Unit|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_TagResourceOutput">TagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceoutput"></a>
<a id="schema_TagResourceOutput"></a>
<a id="tocStagresourceoutput"></a>
<a id="tocstagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_UntagResourceOutput">UntagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceoutput"></a>
<a id="schema_UntagResourceOutput"></a>
<a id="tocSuntagresourceoutput"></a>
<a id="tocsuntagresourceoutput"></a>

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

<h2 id="tocS_UpdateEnvironmentOutput">UpdateEnvironmentOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmentoutput"></a>
<a id="schema_UpdateEnvironmentOutput"></a>
<a id="tocSupdateenvironmentoutput"></a>
<a id="tocsupdateenvironmentoutput"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|

<h2 id="tocS_AirflowConfigurationOptions">AirflowConfigurationOptions</h2>
<!-- backwards compatibility -->
<a id="schemaairflowconfigurationoptions"></a>
<a id="schema_AirflowConfigurationOptions"></a>
<a id="tocSairflowconfigurationoptions"></a>
<a id="tocsairflowconfigurationoptions"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ConfigValue](#schemaconfigvalue)|false|none|none|

<h2 id="tocS_AirflowVersion">AirflowVersion</h2>
<!-- backwards compatibility -->
<a id="schemaairflowversion"></a>
<a id="schema_AirflowVersion"></a>
<a id="tocSairflowversion"></a>
<a id="tocsairflowversion"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchLogGroupArn">CloudWatchLogGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggrouparn"></a>
<a id="schema_CloudWatchLogGroupArn"></a>
<a id="tocScloudwatchloggrouparn"></a>
<a id="tocscloudwatchloggrouparn"></a>

```json
"string"
```

<h2 id="tocS_ConfigKey">ConfigKey</h2>
<!-- backwards compatibility -->
<a id="schemaconfigkey"></a>
<a id="schema_ConfigKey"></a>
<a id="tocSconfigkey"></a>
<a id="tocsconfigkey"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentName">EnvironmentName</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentname"></a>
<a id="schema_EnvironmentName"></a>
<a id="tocSenvironmentname"></a>
<a id="tocsenvironmentname"></a>

```json
"string"
```

<h2 id="tocS_CreateCliTokenRequest">CreateCliTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateclitokenrequest"></a>
<a id="schema_CreateCliTokenRequest"></a>
<a id="tocScreateclitokenrequest"></a>
<a id="tocscreateclitokenrequest"></a>

```json
{}
```

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"password"
```

<h2 id="tocS_Hostname">Hostname</h2>
<!-- backwards compatibility -->
<a id="schemahostname"></a>
<a id="schema_Hostname"></a>
<a id="tocShostname"></a>
<a id="tocshostname"></a>

```json
"string"
```

<h2 id="tocS_RelativePath">RelativePath</h2>
<!-- backwards compatibility -->
<a id="schemarelativepath"></a>
<a id="schema_RelativePath"></a>
<a id="tocSrelativepath"></a>
<a id="tocsrelativepath"></a>

```json
"string"
```

<h2 id="tocS_EnvironmentClass">EnvironmentClass</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentclass"></a>
<a id="schema_EnvironmentClass"></a>
<a id="tocSenvironmentclass"></a>
<a id="tocsenvironmentclass"></a>

```json
"string"
```

<h2 id="tocS_IamRoleArn">IamRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IamRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"string"
```

<h2 id="tocS_KmsKey">KmsKey</h2>
<!-- backwards compatibility -->
<a id="schemakmskey"></a>
<a id="schema_KmsKey"></a>
<a id="tocSkmskey"></a>
<a id="tocskmskey"></a>

```json
"string"
```

<h2 id="tocS_LoggingConfigurationInput">LoggingConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfigurationinput"></a>
<a id="schema_LoggingConfigurationInput"></a>
<a id="tocSloggingconfigurationinput"></a>
<a id="tocsloggingconfigurationinput"></a>

```json
{
  "DagProcessingLogs": {
    "Enabled": {},
    "LogLevel": {}
  },
  "SchedulerLogs": {
    "Enabled": {},
    "LogLevel": {}
  },
  "TaskLogs": {
    "Enabled": {},
    "LogLevel": {}
  },
  "WebserverLogs": {
    "Enabled": {},
    "LogLevel": {}
  },
  "WorkerLogs": {
    "Enabled": {},
    "LogLevel": {}
  }
}
```

Defines the Apache Airflow log types to send to CloudWatch Logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DagProcessingLogs|object|false|none|none|
|SchedulerLogs|object|false|none|none|
|TaskLogs|object|false|none|none|
|WebserverLogs|object|false|none|none|
|WorkerLogs|object|false|none|none|

<h2 id="tocS_MaxWorkers">MaxWorkers</h2>
<!-- backwards compatibility -->
<a id="schemamaxworkers"></a>
<a id="schema_MaxWorkers"></a>
<a id="tocSmaxworkers"></a>
<a id="tocsmaxworkers"></a>

```json
1
```

<h2 id="tocS_MinWorkers">MinWorkers</h2>
<!-- backwards compatibility -->
<a id="schemaminworkers"></a>
<a id="schema_MinWorkers"></a>
<a id="tocSminworkers"></a>
<a id="tocsminworkers"></a>

```json
1
```

<h2 id="tocS_NetworkConfiguration">NetworkConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconfiguration"></a>
<a id="schema_NetworkConfiguration"></a>
<a id="tocSnetworkconfiguration"></a>
<a id="tocsnetworkconfiguration"></a>

```json
{
  "SecurityGroupIds": {},
  "SubnetIds": {}
}
```

Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityGroupIds|object|false|none|none|
|SubnetIds|object|false|none|none|

<h2 id="tocS_S3ObjectVersion">S3ObjectVersion</h2>
<!-- backwards compatibility -->
<a id="schemas3objectversion"></a>
<a id="schema_S3ObjectVersion"></a>
<a id="tocSs3objectversion"></a>
<a id="tocss3objectversion"></a>

```json
"string"
```

<h2 id="tocS_Schedulers">Schedulers</h2>
<!-- backwards compatibility -->
<a id="schemaschedulers"></a>
<a id="schema_Schedulers"></a>
<a id="tocSschedulers"></a>
<a id="tocsschedulers"></a>

```json
0
```

<h2 id="tocS_S3BucketArn">S3BucketArn</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketarn"></a>
<a id="schema_S3BucketArn"></a>
<a id="tocSs3bucketarn"></a>
<a id="tocss3bucketarn"></a>

```json
"string"
```

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

<h2 id="tocS_WebserverAccessMode">WebserverAccessMode</h2>
<!-- backwards compatibility -->
<a id="schemawebserveraccessmode"></a>
<a id="schema_WebserverAccessMode"></a>
<a id="tocSwebserveraccessmode"></a>
<a id="tocswebserveraccessmode"></a>

```json
"PRIVATE_ONLY"
```

<h2 id="tocS_WeeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</h2>
<!-- backwards compatibility -->
<a id="schemaweeklymaintenancewindowstart"></a>
<a id="schema_WeeklyMaintenanceWindowStart"></a>
<a id="tocSweeklymaintenancewindowstart"></a>
<a id="tocsweeklymaintenancewindowstart"></a>

```json
"string"
```

<h2 id="tocS_CreateEnvironmentInput">CreateEnvironmentInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentinput"></a>
<a id="schema_CreateEnvironmentInput"></a>
<a id="tocScreateenvironmentinput"></a>
<a id="tocscreateenvironmentinput"></a>

```json
{
  "AirflowConfigurationOptions": {
    "property1": "password",
    "property2": "password"
  },
  "AirflowVersion": {},
  "DagS3Path": {},
  "EnvironmentClass": {},
  "ExecutionRoleArn": {},
  "KmsKey": {},
  "LoggingConfiguration": {
    "DagProcessingLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "SchedulerLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "TaskLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "WebserverLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "WorkerLogs": {
      "Enabled": {},
      "LogLevel": {}
    }
  },
  "MaxWorkers": {},
  "MinWorkers": {},
  "NetworkConfiguration": {
    "SecurityGroupIds": {},
    "SubnetIds": {}
  },
  "PluginsS3ObjectVersion": {},
  "PluginsS3Path": {},
  "RequirementsS3ObjectVersion": {},
  "RequirementsS3Path": {},
  "Schedulers": {},
  "SourceBucketArn": {},
  "StartupScriptS3ObjectVersion": {},
  "StartupScriptS3Path": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "WebserverAccessMode": {},
  "WeeklyMaintenanceWindowStart": {}
}
```

This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation to create an environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/get-started.html">Get started with Amazon Managed Workflows for Apache Airflow</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AirflowConfigurationOptions|object|false|none|none|
|AirflowVersion|object|false|none|none|
|DagS3Path|object|true|none|none|
|EnvironmentClass|object|false|none|none|
|ExecutionRoleArn|object|true|none|none|
|KmsKey|object|false|none|none|
|LoggingConfiguration|object|false|none|none|
|MaxWorkers|object|false|none|none|
|MinWorkers|object|false|none|none|
|NetworkConfiguration|object|true|none|none|
|PluginsS3ObjectVersion|object|false|none|none|
|PluginsS3Path|object|false|none|none|
|RequirementsS3ObjectVersion|object|false|none|none|
|RequirementsS3Path|object|false|none|none|
|Schedulers|object|false|none|none|
|SourceBucketArn|object|true|none|none|
|StartupScriptS3ObjectVersion|object|false|none|none|
|StartupScriptS3Path|object|false|none|none|
|Tags|object|false|none|none|
|WebserverAccessMode|object|false|none|none|
|WeeklyMaintenanceWindowStart|object|false|none|none|

<h2 id="tocS_EnvironmentArn">EnvironmentArn</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentarn"></a>
<a id="schema_EnvironmentArn"></a>
<a id="tocSenvironmentarn"></a>
<a id="tocsenvironmentarn"></a>

```json
"string"
```

<h2 id="tocS_CreateWebLoginTokenRequest">CreateWebLoginTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateweblogintokenrequest"></a>
<a id="schema_CreateWebLoginTokenRequest"></a>
<a id="tocScreateweblogintokenrequest"></a>
<a id="tocscreateweblogintokenrequest"></a>

```json
{}
```

<h2 id="tocS_CreatedAt">CreatedAt</h2>
<!-- backwards compatibility -->
<a id="schemacreatedat"></a>
<a id="schema_CreatedAt"></a>
<a id="tocScreatedat"></a>
<a id="tocscreatedat"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeleteEnvironmentInput">DeleteEnvironmentInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmentinput"></a>
<a id="schema_DeleteEnvironmentInput"></a>
<a id="tocSdeleteenvironmentinput"></a>
<a id="tocsdeleteenvironmentinput"></a>

```json
{}
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

 <b>Internal only</b>. Represents the dimensions of a metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_Dimensions">Dimensions</h2>
<!-- backwards compatibility -->
<a id="schemadimensions"></a>
<a id="schema_Dimensions"></a>
<a id="tocSdimensions"></a>
<a id="tocsdimensions"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_LastUpdate">LastUpdate</h2>
<!-- backwards compatibility -->
<a id="schemalastupdate"></a>
<a id="schema_LastUpdate"></a>
<a id="tocSlastupdate"></a>
<a id="tocslastupdate"></a>

```json
{
  "CreatedAt": {},
  "Error": {
    "ErrorCode": {},
    "ErrorMessage": {}
  },
  "Source": {},
  "Status": {}
}
```

Describes the status of the last update on the environment, and any errors that were encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedAt|object|false|none|none|
|Error|object|false|none|none|
|Source|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_LoggingConfiguration">LoggingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfiguration"></a>
<a id="schema_LoggingConfiguration"></a>
<a id="tocSloggingconfiguration"></a>
<a id="tocsloggingconfiguration"></a>

```json
{
  "DagProcessingLogs": {
    "CloudWatchLogGroupArn": {},
    "Enabled": {},
    "LogLevel": {}
  },
  "SchedulerLogs": {
    "CloudWatchLogGroupArn": {},
    "Enabled": {},
    "LogLevel": {}
  },
  "TaskLogs": {
    "CloudWatchLogGroupArn": {},
    "Enabled": {},
    "LogLevel": {}
  },
  "WebserverLogs": {
    "CloudWatchLogGroupArn": {},
    "Enabled": {},
    "LogLevel": {}
  },
  "WorkerLogs": {
    "CloudWatchLogGroupArn": {},
    "Enabled": {},
    "LogLevel": {}
  }
}
```

Describes the Apache Airflow log types that are published to CloudWatch Logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DagProcessingLogs|object|false|none|none|
|SchedulerLogs|object|false|none|none|
|TaskLogs|object|false|none|none|
|WebserverLogs|object|false|none|none|
|WorkerLogs|object|false|none|none|

<h2 id="tocS_EnvironmentStatus">EnvironmentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentstatus"></a>
<a id="schema_EnvironmentStatus"></a>
<a id="tocSenvironmentstatus"></a>
<a id="tocsenvironmentstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_WebserverUrl">WebserverUrl</h2>
<!-- backwards compatibility -->
<a id="schemawebserverurl"></a>
<a id="schema_WebserverUrl"></a>
<a id="tocSwebserverurl"></a>
<a id="tocswebserverurl"></a>

```json
"string"
```

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "AirflowConfigurationOptions": {
    "property1": "password",
    "property2": "password"
  },
  "AirflowVersion": {},
  "Arn": {},
  "CreatedAt": {},
  "DagS3Path": {},
  "EnvironmentClass": {},
  "ExecutionRoleArn": {},
  "KmsKey": {},
  "LastUpdate": {
    "CreatedAt": {},
    "Error": {
      "ErrorCode": {},
      "ErrorMessage": {}
    },
    "Source": {},
    "Status": {}
  },
  "LoggingConfiguration": {
    "DagProcessingLogs": {
      "CloudWatchLogGroupArn": {},
      "Enabled": {},
      "LogLevel": {}
    },
    "SchedulerLogs": {
      "CloudWatchLogGroupArn": {},
      "Enabled": {},
      "LogLevel": {}
    },
    "TaskLogs": {
      "CloudWatchLogGroupArn": {},
      "Enabled": {},
      "LogLevel": {}
    },
    "WebserverLogs": {
      "CloudWatchLogGroupArn": {},
      "Enabled": {},
      "LogLevel": {}
    },
    "WorkerLogs": {
      "CloudWatchLogGroupArn": {},
      "Enabled": {},
      "LogLevel": {}
    }
  },
  "MaxWorkers": {},
  "MinWorkers": {},
  "Name": {},
  "NetworkConfiguration": {
    "SecurityGroupIds": {},
    "SubnetIds": {}
  },
  "PluginsS3ObjectVersion": {},
  "PluginsS3Path": {},
  "RequirementsS3ObjectVersion": {},
  "RequirementsS3Path": {},
  "Schedulers": {},
  "ServiceRoleArn": {},
  "SourceBucketArn": {},
  "StartupScriptS3ObjectVersion": {},
  "StartupScriptS3Path": {},
  "Status": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "WebserverAccessMode": {},
  "WebserverUrl": {},
  "WeeklyMaintenanceWindowStart": {}
}
```

Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AirflowConfigurationOptions|object|false|none|none|
|AirflowVersion|object|false|none|none|
|Arn|object|false|none|none|
|CreatedAt|object|false|none|none|
|DagS3Path|object|false|none|none|
|EnvironmentClass|object|false|none|none|
|ExecutionRoleArn|object|false|none|none|
|KmsKey|object|false|none|none|
|LastUpdate|object|false|none|none|
|LoggingConfiguration|object|false|none|none|
|MaxWorkers|object|false|none|none|
|MinWorkers|object|false|none|none|
|Name|object|false|none|none|
|NetworkConfiguration|object|false|none|none|
|PluginsS3ObjectVersion|object|false|none|none|
|PluginsS3Path|object|false|none|none|
|RequirementsS3ObjectVersion|object|false|none|none|
|RequirementsS3Path|object|false|none|none|
|Schedulers|object|false|none|none|
|ServiceRoleArn|object|false|none|none|
|SourceBucketArn|object|false|none|none|
|StartupScriptS3ObjectVersion|object|false|none|none|
|StartupScriptS3Path|object|false|none|none|
|Status|object|false|none|none|
|Tags|object|false|none|none|
|WebserverAccessMode|object|false|none|none|
|WebserverUrl|object|false|none|none|
|WeeklyMaintenanceWindowStart|object|false|none|none|

<h2 id="tocS_EnvironmentList">EnvironmentList</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentlist"></a>
<a id="schema_EnvironmentList"></a>
<a id="tocSenvironmentlist"></a>
<a id="tocsenvironmentlist"></a>

```json
[
  "string"
]
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

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_GetEnvironmentInput">GetEnvironmentInput</h2>
<!-- backwards compatibility -->
<a id="schemagetenvironmentinput"></a>
<a id="schema_GetEnvironmentInput"></a>
<a id="tocSgetenvironmentinput"></a>
<a id="tocsgetenvironmentinput"></a>

```json
{}
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_UpdateCreatedAt">UpdateCreatedAt</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecreatedat"></a>
<a id="schema_UpdateCreatedAt"></a>
<a id="tocSupdatecreatedat"></a>
<a id="tocsupdatecreatedat"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_UpdateError">UpdateError</h2>
<!-- backwards compatibility -->
<a id="schemaupdateerror"></a>
<a id="schema_UpdateError"></a>
<a id="tocSupdateerror"></a>
<a id="tocsupdateerror"></a>

```json
{
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Describes the error(s) encountered with the last update of the environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_UpdateSource">UpdateSource</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesource"></a>
<a id="schema_UpdateSource"></a>
<a id="tocSupdatesource"></a>
<a id="tocsupdatesource"></a>

```json
"string"
```

<h2 id="tocS_UpdateStatus">UpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestatus"></a>
<a id="schema_UpdateStatus"></a>
<a id="tocSupdatestatus"></a>
<a id="tocsupdatestatus"></a>

```json
"SUCCESS"
```

<h2 id="tocS_ListEnvironmentsInputMaxResultsInteger">ListEnvironmentsInputMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentsinputmaxresultsinteger"></a>
<a id="schema_ListEnvironmentsInputMaxResultsInteger"></a>
<a id="tocSlistenvironmentsinputmaxresultsinteger"></a>
<a id="tocslistenvironmentsinputmaxresultsinteger"></a>

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

<h2 id="tocS_ListEnvironmentsInput">ListEnvironmentsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentsinput"></a>
<a id="schema_ListEnvironmentsInput"></a>
<a id="tocSlistenvironmentsinput"></a>
<a id="tocslistenvironmentsinput"></a>

```json
{}
```

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{}
```

<h2 id="tocS_ModuleLoggingConfiguration">ModuleLoggingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamoduleloggingconfiguration"></a>
<a id="schema_ModuleLoggingConfiguration"></a>
<a id="tocSmoduleloggingconfiguration"></a>
<a id="tocsmoduleloggingconfiguration"></a>

```json
{
  "CloudWatchLogGroupArn": {},
  "Enabled": {},
  "LogLevel": {}
}
```

Describes the Apache Airflow log details for the log type (e.g. <code>DagProcessingLogs</code>).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchLogGroupArn|object|false|none|none|
|Enabled|object|false|none|none|
|LogLevel|object|false|none|none|

<h2 id="tocS_LoggingEnabled">LoggingEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaloggingenabled"></a>
<a id="schema_LoggingEnabled"></a>
<a id="tocSloggingenabled"></a>
<a id="tocsloggingenabled"></a>

```json
true
```

<h2 id="tocS_LoggingLevel">LoggingLevel</h2>
<!-- backwards compatibility -->
<a id="schemalogginglevel"></a>
<a id="schema_LoggingLevel"></a>
<a id="tocSlogginglevel"></a>
<a id="tocslogginglevel"></a>

```json
"CRITICAL"
```

<h2 id="tocS_MetricData">MetricData</h2>
<!-- backwards compatibility -->
<a id="schemametricdata"></a>
<a id="schema_MetricData"></a>
<a id="tocSmetricdata"></a>
<a id="tocsmetricdata"></a>

```json
[
  {
    "Dimensions": {},
    "MetricName": {},
    "StatisticValues": {
      "Maximum": {},
      "Minimum": {},
      "SampleCount": {},
      "Sum": {}
    },
    "Timestamp": {},
    "Unit": {},
    "Value": {}
  }
]
```

<h2 id="tocS_StatisticSet">StatisticSet</h2>
<!-- backwards compatibility -->
<a id="schemastatisticset"></a>
<a id="schema_StatisticSet"></a>
<a id="tocSstatisticset"></a>
<a id="tocsstatisticset"></a>

```json
{
  "Maximum": {},
  "Minimum": {},
  "SampleCount": {},
  "Sum": {}
}
```

 <b>Internal only</b>. Represents a set of statistics that describe a specific metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Maximum|object|false|none|none|
|Minimum|object|false|none|none|
|SampleCount|object|false|none|none|
|Sum|object|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Unit">Unit</h2>
<!-- backwards compatibility -->
<a id="schemaunit"></a>
<a id="schema_Unit"></a>
<a id="tocSunit"></a>
<a id="tocsunit"></a>

```json
"Seconds"
```

<h2 id="tocS_PublishMetricsInput">PublishMetricsInput</h2>
<!-- backwards compatibility -->
<a id="schemapublishmetricsinput"></a>
<a id="schema_PublishMetricsInput"></a>
<a id="tocSpublishmetricsinput"></a>
<a id="tocspublishmetricsinput"></a>

```json
{
  "MetricData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricData|object|true|none|none|

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

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

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

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

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

```json
{}
```

<h2 id="tocS_UpdateNetworkConfigurationInput">UpdateNetworkConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenetworkconfigurationinput"></a>
<a id="schema_UpdateNetworkConfigurationInput"></a>
<a id="tocSupdatenetworkconfigurationinput"></a>
<a id="tocsupdatenetworkconfigurationinput"></a>

```json
{
  "SecurityGroupIds": {}
}
```

Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityGroupIds|object|true|none|none|

<h2 id="tocS_UpdateEnvironmentInput">UpdateEnvironmentInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateenvironmentinput"></a>
<a id="schema_UpdateEnvironmentInput"></a>
<a id="tocSupdateenvironmentinput"></a>
<a id="tocsupdateenvironmentinput"></a>

```json
{
  "AirflowConfigurationOptions": {
    "property1": "password",
    "property2": "password"
  },
  "AirflowVersion": {},
  "DagS3Path": {},
  "EnvironmentClass": {},
  "ExecutionRoleArn": {},
  "LoggingConfiguration": {
    "DagProcessingLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "SchedulerLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "TaskLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "WebserverLogs": {
      "Enabled": {},
      "LogLevel": {}
    },
    "WorkerLogs": {
      "Enabled": {},
      "LogLevel": {}
    }
  },
  "MaxWorkers": {},
  "MinWorkers": {},
  "NetworkConfiguration": {
    "SecurityGroupIds": {}
  },
  "PluginsS3ObjectVersion": {},
  "PluginsS3Path": {},
  "RequirementsS3ObjectVersion": {},
  "RequirementsS3Path": {},
  "Schedulers": {},
  "SourceBucketArn": {},
  "StartupScriptS3ObjectVersion": {},
  "StartupScriptS3Path": {},
  "WebserverAccessMode": {},
  "WeeklyMaintenanceWindowStart": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AirflowConfigurationOptions|object|false|none|none|
|AirflowVersion|object|false|none|none|
|DagS3Path|object|false|none|none|
|EnvironmentClass|object|false|none|none|
|ExecutionRoleArn|object|false|none|none|
|LoggingConfiguration|object|false|none|none|
|MaxWorkers|object|false|none|none|
|MinWorkers|object|false|none|none|
|NetworkConfiguration|object|false|none|none|
|PluginsS3ObjectVersion|object|false|none|none|
|PluginsS3Path|object|false|none|none|
|RequirementsS3ObjectVersion|object|false|none|none|
|RequirementsS3Path|object|false|none|none|
|Schedulers|object|false|none|none|
|SourceBucketArn|object|false|none|none|
|StartupScriptS3ObjectVersion|object|false|none|none|
|StartupScriptS3Path|object|false|none|none|
|WebserverAccessMode|object|false|none|none|
|WeeklyMaintenanceWindowStart|object|false|none|none|
