<h1 id="amazon-simple-systems-manager-ssm">Amazon Simple Systems Manager (SSM) v2014-11-06</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon Web Services Systems Manager is the operations hub for your Amazon Web Services applications and resources and a secure end-to-end management solution for hybrid cloud environments that enables safe and secure operations at scale.</p> <p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">Amazon Web Services Systems Manager User Guide</a>. To get started, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting up Amazon Web Services Systems Manager</a>.</p> <p class="title"> <b>Related resources</b> </p> <ul> <li> <p>For information about each of the capabilities that comprise Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/systems-manager-capabilities.html">Systems Manager capabilities</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </li> <li> <p>For details about predefined runbooks for Automation, a capability of Amazon Web Services Systems Manager, see the <i> <a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-runbook-reference.html">Systems Manager Automation runbook reference</a> </i>.</p> </li> <li> <p>For information about AppConfig, a capability of Systems Manager, see the <i> <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/">AppConfig User Guide</a> </i> and the <i> <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/">AppConfig API Reference</a> </i>.</p> </li> <li> <p>For information about Incident Manager, a capability of Systems Manager, see the <i> <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/">Systems Manager Incident Manager User Guide</a> </i> and the <i> <a href="https://docs.aws.amazon.com/incident-manager/latest/APIReference/">Systems Manager Incident Manager API Reference</a> </i>.</p> </li> </ul>

Base URLs:

* <a href="http://ssm.us-east-1.amazonaws.com">http://ssm.us-east-1.amazonaws.com</a> - The Amazon SSM multi-region endpoint

* <a href="https://ssm.us-east-1.amazonaws.com">https://ssm.us-east-1.amazonaws.com</a> - The Amazon SSM multi-region endpoint

* <a href="http://ssm.cn-north-1.amazonaws.com.cn">http://ssm.cn-north-1.amazonaws.com.cn</a> - The Amazon SSM endpoint for China (Beijing) and China (Ningxia)

* <a href="https://ssm.cn-north-1.amazonaws.com.cn">https://ssm.cn-north-1.amazonaws.com.cn</a> - The Amazon SSM endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/ssm/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-simple-systems-manager-ssm-default">Default</h1>

## AddTagsToResource

<a id="opIdAddTagsToResource"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.AddTagsToResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.AddTagsToResource' \
  -d '{
    "ResourceType": {},
    "ResourceId": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.AddTagsToResource`

<p>Adds or overwrites one or more tags for the specified resource. <i>Tags</i> are metadata that you can assign to your automations, documents, managed nodes, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed nodes that helps you track each node's owner and stack level. For example:</p> <ul> <li> <p> <code>Key=Owner,Value=DbAdmin</code> </p> </li> <li> <p> <code>Key=Owner,Value=SysAdmin</code> </p> </li> <li> <p> <code>Key=Owner,Value=Dev</code> </p> </li> <li> <p> <code>Key=Stack,Value=Production</code> </p> </li> <li> <p> <code>Key=Stack,Value=Pre-Production</code> </p> </li> <li> <p> <code>Key=Stack,Value=Test</code> </p> </li> </ul> <p>Most resources can have a maximum of 50 tags. Automations can have a maximum of 5 tags.</p> <p>We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to and are interpreted strictly as a string of characters.</p> <p>For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a> in the <i>Amazon EC2 User Guide</i>.</p>

> Body parameter

```json
{
  "ResourceType": {},
  "ResourceId": {},
  "Tags": {}
}
```

<h3 id="addtagstoresource-parameters">Parameters</h3>

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
|body|body|[AddTagsToResourceRequest](#schemaaddtagstoresourcerequest)|true|none|
|» ResourceType|body|object|true|none|
|» ResourceId|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.AddTagsToResource|

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

<h3 id="addtagstoresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddTagsToResourceResult](#schemaaddtagstoresourceresult)|
|480|480|InvalidResourceType|[InvalidResourceType](#schemainvalidresourcetype)|
|481|481|InvalidResourceId|[InvalidResourceId](#schemainvalidresourceid)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|TooManyTagsError|[TooManyTagsError](#schematoomanytagserror)|
|484|484|TooManyUpdates|[TooManyUpdates](#schematoomanyupdates)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateOpsItemRelatedItem

<a id="opIdAssociateOpsItemRelatedItem"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.AssociateOpsItemRelatedItem' \
  -d '{
    "OpsItemId": {},
    "AssociationType": {},
    "ResourceType": {},
    "ResourceUri": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem`

Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are capabilities of Amazon Web Services Systems Manager.

> Body parameter

```json
{
  "OpsItemId": {},
  "AssociationType": {},
  "ResourceType": {},
  "ResourceUri": {}
}
```

<h3 id="associateopsitemrelateditem-parameters">Parameters</h3>

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
|body|body|[AssociateOpsItemRelatedItemRequest](#schemaassociateopsitemrelateditemrequest)|true|none|
|» OpsItemId|body|object|true|none|
|» AssociationType|body|object|true|none|
|» ResourceType|body|object|true|none|
|» ResourceUri|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.AssociateOpsItemRelatedItem|

> Example responses

> 200 Response

```json
{
  "AssociationId": {}
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

<h3 id="associateopsitemrelateditem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateOpsItemRelatedItemResponse](#schemaassociateopsitemrelateditemresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|OpsItemNotFoundException|[OpsItemNotFoundException](#schemaopsitemnotfoundexception)|
|482|482|OpsItemLimitExceededException|[OpsItemLimitExceededException](#schemaopsitemlimitexceededexception)|
|483|483|OpsItemInvalidParameterException|[OpsItemInvalidParameterException](#schemaopsiteminvalidparameterexception)|
|484|484|OpsItemRelatedItemAlreadyExistsException|[OpsItemRelatedItemAlreadyExistsException](#schemaopsitemrelateditemalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelCommand

<a id="opIdCancelCommand"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.CancelCommand' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.CancelCommand' \
  -d '{
    "CommandId": {},
    "InstanceIds": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.CancelCommand`

Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.

> Body parameter

```json
{
  "CommandId": {},
  "InstanceIds": {}
}
```

<h3 id="cancelcommand-parameters">Parameters</h3>

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
|body|body|[CancelCommandRequest](#schemacancelcommandrequest)|true|none|
|» CommandId|body|object|true|none|
|» InstanceIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.CancelCommand|

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

<h3 id="cancelcommand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelCommandResult](#schemacancelcommandresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidCommandId|[InvalidCommandId](#schemainvalidcommandid)|
|482|482|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|483|483|DuplicateInstanceId|[DuplicateInstanceId](#schemaduplicateinstanceid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelMaintenanceWindowExecution

<a id="opIdCancelMaintenanceWindowExecution"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.CancelMaintenanceWindowExecution' \
  -d '{
    "WindowExecutionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution`

Stops a maintenance window execution that is already in progress and cancels any tasks in the window that haven't already starting running. Tasks already in progress will continue to completion.

> Body parameter

```json
{
  "WindowExecutionId": {}
}
```

<h3 id="cancelmaintenancewindowexecution-parameters">Parameters</h3>

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
|body|body|[CancelMaintenanceWindowExecutionRequest](#schemacancelmaintenancewindowexecutionrequest)|true|none|
|» WindowExecutionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.CancelMaintenanceWindowExecution|

> Example responses

> 200 Response

```json
{
  "WindowExecutionId": {}
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

<h3 id="cancelmaintenancewindowexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelMaintenanceWindowExecutionResult](#schemacancelmaintenancewindowexecutionresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateActivation

<a id="opIdCreateActivation"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.CreateActivation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.CreateActivation' \
  -d '{
    "Description": {},
    "DefaultInstanceName": {},
    "IamRole": {},
    "RegistrationLimit": {},
    "ExpirationDate": {},
    "Tags": {},
    "RegistrationMetadata": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.CreateActivation`

<p>Generates an activation code and activation ID you can use to register your on-premises servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises machines using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up Amazon Web Services Systems Manager for hybrid environments</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p> <note> <p>Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are configured for Systems Manager are all called <i>managed nodes</i>.</p> </note>

> Body parameter

```json
{
  "Description": {},
  "DefaultInstanceName": {},
  "IamRole": {},
  "RegistrationLimit": {},
  "ExpirationDate": {},
  "Tags": {},
  "RegistrationMetadata": {}
}
```

<h3 id="createactivation-parameters">Parameters</h3>

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
|body|body|[CreateActivationRequest](#schemacreateactivationrequest)|true|none|
|» Description|body|object|false|none|
|» DefaultInstanceName|body|object|false|none|
|» IamRole|body|object|true|none|
|» RegistrationLimit|body|object|false|none|
|» ExpirationDate|body|object|false|none|
|» Tags|body|object|false|none|
|» RegistrationMetadata|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.CreateActivation|

> Example responses

> 200 Response

```json
{
  "ActivationId": {},
  "ActivationCode": {}
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

<h3 id="createactivation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateActivationResult](#schemacreateactivationresult)|
|480|480|InvalidParameters|[InvalidParameters](#schemainvalidparameters)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAssociation

<a id="opIdCreateAssociation"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.CreateAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.CreateAssociation' \
  -d '{
    "Name": {},
    "DocumentVersion": {},
    "InstanceId": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "Targets": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "AssociationName": {},
    "AutomationTargetParameterName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {},
    "Tags": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonSSM.CreateAssociation`

A State Manager association defines the state that you want to maintain on your managed nodes. For example, an association can specify that anti-virus software must be installed and running on your managed nodes, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a capability of Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software isn't installed, then State Manager installs it. If the software is installed, but the service isn't running, then the association might instruct State Manager to start the service. 

> Body parameter

```json
{
  "Name": {},
  "DocumentVersion": {},
  "InstanceId": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "Targets": {},
  "ScheduleExpression": {},
  "OutputLocation": {
    "S3Location": {
      "OutputS3Region": {},
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {}
    }
  },
  "AssociationName": {},
  "AutomationTargetParameterName": {},
  "MaxErrors": {},
  "MaxConcurrency": {},
  "ComplianceSeverity": {},
  "SyncCompliance": {},
  "ApplyOnlyAtCronInterval": {},
  "CalendarNames": {},
  "TargetLocations": {},
  "ScheduleOffset": {},
  "TargetMaps": {},
  "Tags": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

<h3 id="createassociation-parameters">Parameters</h3>

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
|body|body|[CreateAssociationRequest](#schemacreateassociationrequest)|true|none|
|» Name|body|object|true|none|
|» DocumentVersion|body|object|false|none|
|» InstanceId|body|object|false|none|
|» Parameters|body|object|false|none|
|» » **additionalProperties**|body|[ParameterValueList](#schemaparametervaluelist)|false|none|
|» Targets|body|object|false|none|
|» ScheduleExpression|body|object|false|none|
|» OutputLocation|body|object|false|none|
|» » S3Location|body|object|false|none|
|» » » OutputS3Region|body|object|false|none|
|» » » OutputS3BucketName|body|object|false|none|
|» » » OutputS3KeyPrefix|body|object|false|none|
|» AssociationName|body|object|false|none|
|» AutomationTargetParameterName|body|object|false|none|
|» MaxErrors|body|object|false|none|
|» MaxConcurrency|body|object|false|none|
|» ComplianceSeverity|body|object|false|none|
|» SyncCompliance|body|object|false|none|
|» ApplyOnlyAtCronInterval|body|object|false|none|
|» CalendarNames|body|object|false|none|
|» TargetLocations|body|object|false|none|
|» ScheduleOffset|body|object|false|none|
|» TargetMaps|body|object|false|none|
|» Tags|body|object|false|none|
|» AlarmConfiguration|body|[AlarmConfiguration](#schemaalarmconfiguration)|false|The details for the CloudWatch alarm you want to apply to an automation or command.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.CreateAssociation|

> Example responses

> 200 Response

```json
{
  "AssociationDescription": {
    "Name": {},
    "InstanceId": {},
    "AssociationVersion": {},
    "Date": {},
    "LastUpdateAssociationDate": {},
    "Status": {
      "Date": {},
      "Name": {},
      "Message": {},
      "AdditionalInfo": {}
    },
    "Overview": {
      "Status": {},
      "DetailedStatus": {},
      "AssociationStatusAggregatedCount": {
        "property1": 0,
        "property2": 0
      }
    },
    "DocumentVersion": {},
    "AutomationTargetParameterName": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "AssociationId": {},
    "Targets": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "LastExecutionDate": {},
    "LastSuccessfulExecutionDate": {},
    "AssociationName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

<h3 id="createassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAssociationResult](#schemacreateassociationresult)|
|480|480|AssociationAlreadyExists|[AssociationAlreadyExists](#schemaassociationalreadyexists)|
|481|481|AssociationLimitExceeded|[AssociationLimitExceeded](#schemaassociationlimitexceeded)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|484|484|InvalidDocumentVersion|[InvalidDocumentVersion](#schemainvaliddocumentversion)|
|485|485|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|486|486|UnsupportedPlatformType|[UnsupportedPlatformType](#schemaunsupportedplatformtype)|
|487|487|InvalidOutputLocation|[InvalidOutputLocation](#schemainvalidoutputlocation)|
|488|488|InvalidParameters|[InvalidParameters](#schemainvalidparameters)|
|489|489|InvalidTarget|[InvalidTarget](#schemainvalidtarget)|
|490|490|InvalidSchedule|[InvalidSchedule](#schemainvalidschedule)|
|491|491|InvalidTargetMaps|[InvalidTargetMaps](#schemainvalidtargetmaps)|
|492|492|InvalidTag|[InvalidTag](#schemainvalidtag)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAssociationBatch

<a id="opIdCreateAssociationBatch"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.CreateAssociationBatch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.CreateAssociationBatch' \
  -d '{
    "Entries": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.CreateAssociationBatch`

<p>Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes or targets.</p> <p>When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager Agent (SSM Agent) running on the managed node processes the document and configures the node as specified.</p> <p>If you associate a document with a managed node that already has an associated document, the system returns the AssociationAlreadyExists exception.</p>

> Body parameter

```json
{
  "Entries": {}
}
```

<h3 id="createassociationbatch-parameters">Parameters</h3>

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
|body|body|[CreateAssociationBatchRequest](#schemacreateassociationbatchrequest)|true|none|
|» Entries|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.CreateAssociationBatch|

> Example responses

> 200 Response

```json
{
  "Successful": {},
  "Failed": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="createassociationbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAssociationBatchResult](#schemacreateassociationbatchresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|482|482|InvalidDocumentVersion|[InvalidDocumentVersion](#schemainvaliddocumentversion)|
|483|483|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|484|484|InvalidParameters|[InvalidParameters](#schemainvalidparameters)|
|485|485|DuplicateInstanceId|[DuplicateInstanceId](#schemaduplicateinstanceid)|
|486|486|AssociationLimitExceeded|[AssociationLimitExceeded](#schemaassociationlimitexceeded)|
|487|487|UnsupportedPlatformType|[UnsupportedPlatformType](#schemaunsupportedplatformtype)|
|488|488|InvalidOutputLocation|[InvalidOutputLocation](#schemainvalidoutputlocation)|
|489|489|InvalidTarget|[InvalidTarget](#schemainvalidtarget)|
|490|490|InvalidSchedule|[InvalidSchedule](#schemainvalidschedule)|
|491|491|InvalidTargetMaps|[InvalidTargetMaps](#schemainvalidtargetmaps)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDocument

<a id="opIdCreateDocument"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.CreateDocument' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.CreateDocument' \
  -d '{
    "Content": {},
    "Requires": {},
    "Attachments": {},
    "Name": {},
    "DisplayName": {},
    "VersionName": {},
    "DocumentType": {},
    "DocumentFormat": {},
    "TargetType": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.CreateDocument`

Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs on your managed nodes. For more information about SSM documents, including information about supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">Amazon Web Services Systems Manager Documents</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.

> Body parameter

```json
{
  "Content": {},
  "Requires": {},
  "Attachments": {},
  "Name": {},
  "DisplayName": {},
  "VersionName": {},
  "DocumentType": {},
  "DocumentFormat": {},
  "TargetType": {},
  "Tags": {}
}
```

<h3 id="createdocument-parameters">Parameters</h3>

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
|body|body|[CreateDocumentRequest](#schemacreatedocumentrequest)|true|none|
|» Content|body|object|true|none|
|» Requires|body|object|false|none|
|» Attachments|body|object|false|none|
|» Name|body|object|true|none|
|» DisplayName|body|object|false|none|
|» VersionName|body|object|false|none|
|» DocumentType|body|object|false|none|
|» DocumentFormat|body|object|false|none|
|» TargetType|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.CreateDocument|

> Example responses

> 200 Response

```json
{
  "DocumentDescription": {
    "Sha1": {},
    "Hash": {},
    "HashType": {},
    "Name": {},
    "DisplayName": {},
    "VersionName": {},
    "Owner": {},
    "CreatedDate": {},
    "Status": {},
    "StatusInformation": {},
    "DocumentVersion": {},
    "Description": {},
    "Parameters": {},
    "PlatformTypes": {},
    "DocumentType": {},
    "SchemaVersion": {},
    "LatestVersion": {},
    "DefaultVersion": {},
    "DocumentFormat": {},
    "TargetType": {},
    "Tags": {},
    "AttachmentsInformation": {},
    "Requires": {},
    "Author": {},
    "ReviewInformation": {},
    "ApprovedVersion": {},
    "PendingReviewVersion": {},
    "ReviewStatus": {},
    "Category": {},
    "CategoryEnum": {}
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

<h3 id="createdocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDocumentResult](#schemacreatedocumentresult)|
|480|480|DocumentAlreadyExists|[DocumentAlreadyExists](#schemadocumentalreadyexists)|
|481|481|MaxDocumentSizeExceeded|[MaxDocumentSizeExceeded](#schemamaxdocumentsizeexceeded)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|InvalidDocumentContent|[InvalidDocumentContent](#schemainvaliddocumentcontent)|
|484|484|DocumentLimitExceeded|[DocumentLimitExceeded](#schemadocumentlimitexceeded)|
|485|485|InvalidDocumentSchemaVersion|[InvalidDocumentSchemaVersion](#schemainvaliddocumentschemaversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMaintenanceWindow

<a id="opIdCreateMaintenanceWindow"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.CreateMaintenanceWindow' \
  -d '{
    "Name": {},
    "Description": {},
    "StartDate": {},
    "EndDate": {},
    "Schedule": {},
    "ScheduleTimezone": {},
    "ScheduleOffset": {},
    "Duration": {},
    "Cutoff": {},
    "AllowUnassociatedTargets": {},
    "ClientToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow`

<p>Creates a new maintenance window.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "StartDate": {},
  "EndDate": {},
  "Schedule": {},
  "ScheduleTimezone": {},
  "ScheduleOffset": {},
  "Duration": {},
  "Cutoff": {},
  "AllowUnassociatedTargets": {},
  "ClientToken": {},
  "Tags": {}
}
```

<h3 id="createmaintenancewindow-parameters">Parameters</h3>

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
|body|body|[CreateMaintenanceWindowRequest](#schemacreatemaintenancewindowrequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» StartDate|body|object|false|none|
|» EndDate|body|object|false|none|
|» Schedule|body|object|true|none|
|» ScheduleTimezone|body|object|false|none|
|» ScheduleOffset|body|object|false|none|
|» Duration|body|object|true|none|
|» Cutoff|body|object|true|none|
|» AllowUnassociatedTargets|body|object|true|none|
|» ClientToken|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.CreateMaintenanceWindow|

> Example responses

> 200 Response

```json
{
  "WindowId": {}
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

<h3 id="createmaintenancewindow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMaintenanceWindowResult](#schemacreatemaintenancewindowresult)|
|480|480|IdempotentParameterMismatch|[IdempotentParameterMismatch](#schemaidempotentparametermismatch)|
|481|481|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateOpsItem

<a id="opIdCreateOpsItem"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.CreateOpsItem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.CreateOpsItem' \
  -d '{
    "Description": {},
    "OpsItemType": {},
    "OperationalData": {
      "property1": {
        "Value": {},
        "Type": {}
      },
      "property2": {
        "Value": {},
        "Type": {}
      }
    },
    "Notifications": {},
    "Priority": {},
    "RelatedOpsItems": {},
    "Source": {},
    "Title": {},
    "Tags": {},
    "Category": {},
    "Severity": {},
    "ActualStartTime": {},
    "ActualEndTime": {},
    "PlannedStartTime": {},
    "PlannedEndTime": {},
    "AccountId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.CreateOpsItem`

<p>Creates a new OpsItem. You must have permission in Identity and Access Management (IAM) to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">Amazon Web Services Systems Manager OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

> Body parameter

```json
{
  "Description": {},
  "OpsItemType": {},
  "OperationalData": {
    "property1": {
      "Value": {},
      "Type": {}
    },
    "property2": {
      "Value": {},
      "Type": {}
    }
  },
  "Notifications": {},
  "Priority": {},
  "RelatedOpsItems": {},
  "Source": {},
  "Title": {},
  "Tags": {},
  "Category": {},
  "Severity": {},
  "ActualStartTime": {},
  "ActualEndTime": {},
  "PlannedStartTime": {},
  "PlannedEndTime": {},
  "AccountId": {}
}
```

<h3 id="createopsitem-parameters">Parameters</h3>

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
|body|body|[CreateOpsItemRequest](#schemacreateopsitemrequest)|true|none|
|» Description|body|object|true|none|
|» OpsItemType|body|object|false|none|
|» OperationalData|body|object|false|none|
|» » **additionalProperties**|body|[OpsItemDataValue](#schemaopsitemdatavalue)|false|An object that defines the value of the key and its type in the OperationalData map.|
|» Notifications|body|object|false|none|
|» Priority|body|object|false|none|
|» RelatedOpsItems|body|object|false|none|
|» Source|body|object|true|none|
|» Title|body|object|true|none|
|» Tags|body|object|false|none|
|» Category|body|object|false|none|
|» Severity|body|object|false|none|
|» ActualStartTime|body|object|false|none|
|» ActualEndTime|body|object|false|none|
|» PlannedStartTime|body|object|false|none|
|» PlannedEndTime|body|object|false|none|
|» AccountId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.CreateOpsItem|

> Example responses

> 200 Response

```json
{
  "OpsItemId": {},
  "OpsItemArn": {}
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

<h3 id="createopsitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateOpsItemResponse](#schemacreateopsitemresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|OpsItemAlreadyExistsException|[OpsItemAlreadyExistsException](#schemaopsitemalreadyexistsexception)|
|482|482|OpsItemLimitExceededException|[OpsItemLimitExceededException](#schemaopsitemlimitexceededexception)|
|483|483|OpsItemInvalidParameterException|[OpsItemInvalidParameterException](#schemaopsiteminvalidparameterexception)|
|484|484|OpsItemAccessDeniedException|[OpsItemAccessDeniedException](#schemaopsitemaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateOpsMetadata

<a id="opIdCreateOpsMetadata"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.CreateOpsMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.CreateOpsMetadata' \
  -d '{
    "ResourceId": {},
    "Metadata": {
      "property1": {
        "Value": {}
      },
      "property2": {
        "Value": {}
      }
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.CreateOpsMetadata`

If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify information about the new application, including the application type.

> Body parameter

```json
{
  "ResourceId": {},
  "Metadata": {
    "property1": {
      "Value": {}
    },
    "property2": {
      "Value": {}
    }
  },
  "Tags": {}
}
```

<h3 id="createopsmetadata-parameters">Parameters</h3>

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
|body|body|[CreateOpsMetadataRequest](#schemacreateopsmetadatarequest)|true|none|
|» ResourceId|body|object|true|none|
|» Metadata|body|object|false|none|
|» » **additionalProperties**|body|[MetadataValue](#schemametadatavalue)|false|Metadata to assign to an Application Manager application.|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.CreateOpsMetadata|

> Example responses

> 200 Response

```json
{
  "OpsMetadataArn": {}
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

<h3 id="createopsmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateOpsMetadataResult](#schemacreateopsmetadataresult)|
|480|480|OpsMetadataAlreadyExistsException|[OpsMetadataAlreadyExistsException](#schemaopsmetadataalreadyexistsexception)|
|481|481|OpsMetadataTooManyUpdatesException|[OpsMetadataTooManyUpdatesException](#schemaopsmetadatatoomanyupdatesexception)|
|482|482|OpsMetadataInvalidArgumentException|[OpsMetadataInvalidArgumentException](#schemaopsmetadatainvalidargumentexception)|
|483|483|OpsMetadataLimitExceededException|[OpsMetadataLimitExceededException](#schemaopsmetadatalimitexceededexception)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePatchBaseline

<a id="opIdCreatePatchBaseline"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.CreatePatchBaseline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.CreatePatchBaseline' \
  -d '{
    "OperatingSystem": {},
    "Name": {},
    "GlobalFilters": {
      "PatchFilters": {}
    },
    "ApprovalRules": {
      "PatchRules": {}
    },
    "ApprovedPatches": {},
    "ApprovedPatchesComplianceLevel": {},
    "ApprovedPatchesEnableNonSecurity": {},
    "RejectedPatches": {},
    "RejectedPatchesAction": {},
    "Description": {},
    "Sources": {},
    "ClientToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.CreatePatchBaseline`

<p>Creates a patch baseline.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>

> Body parameter

```json
{
  "OperatingSystem": {},
  "Name": {},
  "GlobalFilters": {
    "PatchFilters": {}
  },
  "ApprovalRules": {
    "PatchRules": {}
  },
  "ApprovedPatches": {},
  "ApprovedPatchesComplianceLevel": {},
  "ApprovedPatchesEnableNonSecurity": {},
  "RejectedPatches": {},
  "RejectedPatchesAction": {},
  "Description": {},
  "Sources": {},
  "ClientToken": {},
  "Tags": {}
}
```

<h3 id="createpatchbaseline-parameters">Parameters</h3>

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
|body|body|[CreatePatchBaselineRequest](#schemacreatepatchbaselinerequest)|true|none|
|» OperatingSystem|body|object|false|none|
|» Name|body|object|true|none|
|» GlobalFilters|body|object|false|none|
|» » PatchFilters|body|object|true|none|
|» ApprovalRules|body|object|false|none|
|» » PatchRules|body|object|true|none|
|» ApprovedPatches|body|object|false|none|
|» ApprovedPatchesComplianceLevel|body|object|false|none|
|» ApprovedPatchesEnableNonSecurity|body|object|false|none|
|» RejectedPatches|body|object|false|none|
|» RejectedPatchesAction|body|object|false|none|
|» Description|body|object|false|none|
|» Sources|body|object|false|none|
|» ClientToken|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.CreatePatchBaseline|

> Example responses

> 200 Response

```json
{
  "BaselineId": {}
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

<h3 id="createpatchbaseline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePatchBaselineResult](#schemacreatepatchbaselineresult)|
|480|480|IdempotentParameterMismatch|[IdempotentParameterMismatch](#schemaidempotentparametermismatch)|
|481|481|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateResourceDataSync

<a id="opIdCreateResourceDataSync"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.CreateResourceDataSync' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.CreateResourceDataSync' \
  -d '{
    "SyncName": {},
    "S3Destination": {
      "BucketName": {},
      "Prefix": {},
      "SyncFormat": {},
      "Region": {},
      "AWSKMSKeyARN": {},
      "DestinationDataSharing": {
        "DestinationDataSharingType": {}
      }
    },
    "SyncType": {},
    "SyncSource": {
      "SourceType": {},
      "AwsOrganizationsSource": {
        "OrganizationSourceType": {},
        "OrganizationalUnits": {}
      },
      "SourceRegions": {},
      "IncludeFutureRegions": {},
      "EnableAllOpsDataSources": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonSSM.CreateResourceDataSync`

<p>A resource data sync helps you view data from multiple sources in a single location. Amazon Web Services Systems Manager offers two types of resource data sync: <code>SyncToDestination</code> and <code>SyncFromSource</code>.</p> <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring resource data sync for Inventory</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple Amazon Web Services accounts and Amazon Web Services Regions or <code>EntireOrganization</code> by using Organizations. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the <a>ListResourceDataSync</a>.</p> <note> <p>By default, data isn't encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy. </p> </note>

> Body parameter

```json
{
  "SyncName": {},
  "S3Destination": {
    "BucketName": {},
    "Prefix": {},
    "SyncFormat": {},
    "Region": {},
    "AWSKMSKeyARN": {},
    "DestinationDataSharing": {
      "DestinationDataSharingType": {}
    }
  },
  "SyncType": {},
  "SyncSource": {
    "SourceType": {},
    "AwsOrganizationsSource": {
      "OrganizationSourceType": {},
      "OrganizationalUnits": {}
    },
    "SourceRegions": {},
    "IncludeFutureRegions": {},
    "EnableAllOpsDataSources": {}
  }
}
```

<h3 id="createresourcedatasync-parameters">Parameters</h3>

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
|body|body|[CreateResourceDataSyncRequest](#schemacreateresourcedatasyncrequest)|true|none|
|» SyncName|body|object|true|none|
|» S3Destination|body|object|false|none|
|» » BucketName|body|object|true|none|
|» » Prefix|body|object|false|none|
|» » SyncFormat|body|object|true|none|
|» » Region|body|object|true|none|
|» » AWSKMSKeyARN|body|object|false|none|
|» » DestinationDataSharing|body|object|false|none|
|» » » DestinationDataSharingType|body|object|false|none|
|» SyncType|body|object|false|none|
|» SyncSource|body|object|false|none|
|» » SourceType|body|object|true|none|
|» » AwsOrganizationsSource|body|object|false|none|
|» » » OrganizationSourceType|body|object|true|none|
|» » » OrganizationalUnits|body|object|false|none|
|» » SourceRegions|body|object|true|none|
|» » IncludeFutureRegions|body|object|false|none|
|» » EnableAllOpsDataSources|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.CreateResourceDataSync|

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

<h3 id="createresourcedatasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateResourceDataSyncResult](#schemacreateresourcedatasyncresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ResourceDataSyncCountExceededException|[ResourceDataSyncCountExceededException](#schemaresourcedatasynccountexceededexception)|
|482|482|ResourceDataSyncAlreadyExistsException|[ResourceDataSyncAlreadyExistsException](#schemaresourcedatasyncalreadyexistsexception)|
|483|483|ResourceDataSyncInvalidConfigurationException|[ResourceDataSyncInvalidConfigurationException](#schemaresourcedatasyncinvalidconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteActivation

<a id="opIdDeleteActivation"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeleteActivation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeleteActivation' \
  -d '{
    "ActivationId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeleteActivation`

Deletes an activation. You aren't required to delete an activation. If you delete an activation, you can no longer use it to register additional managed nodes. Deleting an activation doesn't de-register managed nodes. You must manually de-register managed nodes.

> Body parameter

```json
{
  "ActivationId": {}
}
```

<h3 id="deleteactivation-parameters">Parameters</h3>

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
|body|body|[DeleteActivationRequest](#schemadeleteactivationrequest)|true|none|
|» ActivationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeleteActivation|

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

<h3 id="deleteactivation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteActivationResult](#schemadeleteactivationresult)|
|480|480|InvalidActivationId|[InvalidActivationId](#schemainvalidactivationid)|
|481|481|InvalidActivation|[InvalidActivation](#schemainvalidactivation)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|TooManyUpdates|[TooManyUpdates](#schematoomanyupdates)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAssociation

<a id="opIdDeleteAssociation"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeleteAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeleteAssociation' \
  -d '{
    "Name": {},
    "InstanceId": {},
    "AssociationId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeleteAssociation`

<p>Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified managed node. If you created the association by using the <code>Targets</code> parameter, then you must delete the association by using the association ID.</p> <p>When you disassociate a document from a managed node, it doesn't change the configuration of the node. To change the configuration state of a managed node after you disassociate a document, you must create a new document with the desired configuration and associate it with the node.</p>

> Body parameter

```json
{
  "Name": {},
  "InstanceId": {},
  "AssociationId": {}
}
```

<h3 id="deleteassociation-parameters">Parameters</h3>

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
|body|body|[DeleteAssociationRequest](#schemadeleteassociationrequest)|true|none|
|» Name|body|object|false|none|
|» InstanceId|body|object|false|none|
|» AssociationId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeleteAssociation|

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

<h3 id="deleteassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAssociationResult](#schemadeleteassociationresult)|
|480|480|AssociationDoesNotExist|[AssociationDoesNotExist](#schemaassociationdoesnotexist)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|483|483|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|484|484|TooManyUpdates|[TooManyUpdates](#schematoomanyupdates)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDocument

<a id="opIdDeleteDocument"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeleteDocument' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeleteDocument' \
  -d '{
    "Name": {},
    "DocumentVersion": {},
    "VersionName": {},
    "Force": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeleteDocument`

<p>Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the document.</p> <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all managed nodes that are associated with the document.</p>

> Body parameter

```json
{
  "Name": {},
  "DocumentVersion": {},
  "VersionName": {},
  "Force": {}
}
```

<h3 id="deletedocument-parameters">Parameters</h3>

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
|body|body|[DeleteDocumentRequest](#schemadeletedocumentrequest)|true|none|
|» Name|body|object|true|none|
|» DocumentVersion|body|object|false|none|
|» VersionName|body|object|false|none|
|» Force|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeleteDocument|

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

<h3 id="deletedocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDocumentResult](#schemadeletedocumentresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|482|482|InvalidDocumentOperation|[InvalidDocumentOperation](#schemainvaliddocumentoperation)|
|483|483|AssociatedInstances|[AssociatedInstances](#schemaassociatedinstances)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInventory

<a id="opIdDeleteInventory"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeleteInventory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeleteInventory' \
  -d '{
    "TypeName": {},
    "SchemaDeleteOption": {},
    "DryRun": {},
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeleteInventory`

Delete a custom inventory type or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.

> Body parameter

```json
{
  "TypeName": {},
  "SchemaDeleteOption": {},
  "DryRun": {},
  "ClientToken": {}
}
```

<h3 id="deleteinventory-parameters">Parameters</h3>

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
|body|body|[DeleteInventoryRequest](#schemadeleteinventoryrequest)|true|none|
|» TypeName|body|object|true|none|
|» SchemaDeleteOption|body|object|false|none|
|» DryRun|body|object|false|none|
|» ClientToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeleteInventory|

> Example responses

> 200 Response

```json
{
  "DeletionId": {},
  "TypeName": {},
  "DeletionSummary": {
    "TotalCount": {},
    "RemainingCount": {},
    "SummaryItems": {}
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

<h3 id="deleteinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInventoryResult](#schemadeleteinventoryresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidTypeNameException|[InvalidTypeNameException](#schemainvalidtypenameexception)|
|482|482|InvalidOptionException|[InvalidOptionException](#schemainvalidoptionexception)|
|483|483|InvalidDeleteInventoryParametersException|[InvalidDeleteInventoryParametersException](#schemainvaliddeleteinventoryparametersexception)|
|484|484|InvalidInventoryRequestException|[InvalidInventoryRequestException](#schemainvalidinventoryrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMaintenanceWindow

<a id="opIdDeleteMaintenanceWindow"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeleteMaintenanceWindow' \
  -d '{
    "WindowId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow`

Deletes a maintenance window.

> Body parameter

```json
{
  "WindowId": {}
}
```

<h3 id="deletemaintenancewindow-parameters">Parameters</h3>

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
|body|body|[DeleteMaintenanceWindowRequest](#schemadeletemaintenancewindowrequest)|true|none|
|» WindowId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeleteMaintenanceWindow|

> Example responses

> 200 Response

```json
{
  "WindowId": {}
}
```

> 480 Response

```json
null
```

<h3 id="deletemaintenancewindow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMaintenanceWindowResult](#schemadeletemaintenancewindowresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteOpsMetadata

<a id="opIdDeleteOpsMetadata"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeleteOpsMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeleteOpsMetadata' \
  -d '{
    "OpsMetadataArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeleteOpsMetadata`

Delete OpsMetadata related to an application.

> Body parameter

```json
{
  "OpsMetadataArn": {}
}
```

<h3 id="deleteopsmetadata-parameters">Parameters</h3>

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
|body|body|[DeleteOpsMetadataRequest](#schemadeleteopsmetadatarequest)|true|none|
|» OpsMetadataArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeleteOpsMetadata|

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

<h3 id="deleteopsmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteOpsMetadataResult](#schemadeleteopsmetadataresult)|
|480|480|OpsMetadataNotFoundException|[OpsMetadataNotFoundException](#schemaopsmetadatanotfoundexception)|
|481|481|OpsMetadataInvalidArgumentException|[OpsMetadataInvalidArgumentException](#schemaopsmetadatainvalidargumentexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteParameter

<a id="opIdDeleteParameter"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeleteParameter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeleteParameter' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeleteParameter`

Delete a parameter from the system. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deleteparameter-parameters">Parameters</h3>

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
|body|body|[DeleteParameterRequest](#schemadeleteparameterrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeleteParameter|

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

<h3 id="deleteparameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteParameterResult](#schemadeleteparameterresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ParameterNotFound|[ParameterNotFound](#schemaparameternotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteParameters

<a id="opIdDeleteParameters"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeleteParameters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeleteParameters' \
  -d '{
    "Names": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeleteParameters`

Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.

> Body parameter

```json
{
  "Names": {}
}
```

<h3 id="deleteparameters-parameters">Parameters</h3>

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
|body|body|[DeleteParametersRequest](#schemadeleteparametersrequest)|true|none|
|» Names|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeleteParameters|

> Example responses

> 200 Response

```json
{
  "DeletedParameters": {},
  "InvalidParameters": {}
}
```

> 480 Response

```json
null
```

<h3 id="deleteparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteParametersResult](#schemadeleteparametersresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePatchBaseline

<a id="opIdDeletePatchBaseline"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeletePatchBaseline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeletePatchBaseline' \
  -d '{
    "BaselineId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeletePatchBaseline`

Deletes a patch baseline.

> Body parameter

```json
{
  "BaselineId": {}
}
```

<h3 id="deletepatchbaseline-parameters">Parameters</h3>

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
|body|body|[DeletePatchBaselineRequest](#schemadeletepatchbaselinerequest)|true|none|
|» BaselineId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeletePatchBaseline|

> Example responses

> 200 Response

```json
{
  "BaselineId": {}
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

<h3 id="deletepatchbaseline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePatchBaselineResult](#schemadeletepatchbaselineresult)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourceDataSync

<a id="opIdDeleteResourceDataSync"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeleteResourceDataSync' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeleteResourceDataSync' \
  -d '{
    "SyncName": {},
    "SyncType": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeleteResourceDataSync`

Deletes a resource data sync configuration. After the configuration is deleted, changes to data on managed nodes are no longer synced to or from the target. Deleting a sync configuration doesn't delete data.

> Body parameter

```json
{
  "SyncName": {},
  "SyncType": {}
}
```

<h3 id="deleteresourcedatasync-parameters">Parameters</h3>

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
|body|body|[DeleteResourceDataSyncRequest](#schemadeleteresourcedatasyncrequest)|true|none|
|» SyncName|body|object|true|none|
|» SyncType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeleteResourceDataSync|

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

<h3 id="deleteresourcedatasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourceDataSyncResult](#schemadeleteresourcedatasyncresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ResourceDataSyncNotFoundException|[ResourceDataSyncNotFoundException](#schemaresourcedatasyncnotfoundexception)|
|482|482|ResourceDataSyncInvalidConfigurationException|[ResourceDataSyncInvalidConfigurationException](#schemaresourcedatasyncinvalidconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcePolicy

<a id="opIdDeleteResourcePolicy"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeleteResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeleteResourcePolicy' \
  -d '{
    "ResourceArn": {},
    "PolicyId": {},
    "PolicyHash": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeleteResourcePolicy`

Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).

> Body parameter

```json
{
  "ResourceArn": {},
  "PolicyId": {},
  "PolicyHash": {}
}
```

<h3 id="deleteresourcepolicy-parameters">Parameters</h3>

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
|body|body|[DeleteResourcePolicyRequest](#schemadeleteresourcepolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|
|» PolicyId|body|object|true|none|
|» PolicyHash|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeleteResourcePolicy|

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

<h3 id="deleteresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourcePolicyResponse](#schemadeleteresourcepolicyresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ResourcePolicyInvalidParameterException|[ResourcePolicyInvalidParameterException](#schemaresourcepolicyinvalidparameterexception)|
|482|482|ResourcePolicyConflictException|[ResourcePolicyConflictException](#schemaresourcepolicyconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterManagedInstance

<a id="opIdDeregisterManagedInstance"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeregisterManagedInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeregisterManagedInstance' \
  -d '{
    "InstanceId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeregisterManagedInstance`

Removes the server or virtual machine from the list of registered servers. You can reregister the node again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.

> Body parameter

```json
{
  "InstanceId": {}
}
```

<h3 id="deregistermanagedinstance-parameters">Parameters</h3>

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
|body|body|[DeregisterManagedInstanceRequest](#schemaderegistermanagedinstancerequest)|true|none|
|» InstanceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeregisterManagedInstance|

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

<h3 id="deregistermanagedinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterManagedInstanceResult](#schemaderegistermanagedinstanceresult)|
|480|480|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterPatchBaselineForPatchGroup

<a id="opIdDeregisterPatchBaselineForPatchGroup"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeregisterPatchBaselineForPatchGroup' \
  -d '{
    "BaselineId": {},
    "PatchGroup": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup`

Removes a patch group from a patch baseline.

> Body parameter

```json
{
  "BaselineId": {},
  "PatchGroup": {}
}
```

<h3 id="deregisterpatchbaselineforpatchgroup-parameters">Parameters</h3>

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
|body|body|[DeregisterPatchBaselineForPatchGroupRequest](#schemaderegisterpatchbaselineforpatchgrouprequest)|true|none|
|» BaselineId|body|object|true|none|
|» PatchGroup|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeregisterPatchBaselineForPatchGroup|

> Example responses

> 200 Response

```json
{
  "BaselineId": {},
  "PatchGroup": {}
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

<h3 id="deregisterpatchbaselineforpatchgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterPatchBaselineForPatchGroupResult](#schemaderegisterpatchbaselineforpatchgroupresult)|
|480|480|InvalidResourceId|[InvalidResourceId](#schemainvalidresourceid)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterTargetFromMaintenanceWindow

<a id="opIdDeregisterTargetFromMaintenanceWindow"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeregisterTargetFromMaintenanceWindow' \
  -d '{
    "WindowId": {},
    "WindowTargetId": {},
    "Safe": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow`

Removes a target from a maintenance window.

> Body parameter

```json
{
  "WindowId": {},
  "WindowTargetId": {},
  "Safe": {}
}
```

<h3 id="deregistertargetfrommaintenancewindow-parameters">Parameters</h3>

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
|body|body|[DeregisterTargetFromMaintenanceWindowRequest](#schemaderegistertargetfrommaintenancewindowrequest)|true|none|
|» WindowId|body|object|true|none|
|» WindowTargetId|body|object|true|none|
|» Safe|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeregisterTargetFromMaintenanceWindow|

> Example responses

> 200 Response

```json
{
  "WindowId": {},
  "WindowTargetId": {}
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

<h3 id="deregistertargetfrommaintenancewindow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterTargetFromMaintenanceWindowResult](#schemaderegistertargetfrommaintenancewindowresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|TargetInUseException|[TargetInUseException](#schematargetinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterTaskFromMaintenanceWindow

<a id="opIdDeregisterTaskFromMaintenanceWindow"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DeregisterTaskFromMaintenanceWindow' \
  -d '{
    "WindowId": {},
    "WindowTaskId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow`

Removes a task from a maintenance window.

> Body parameter

```json
{
  "WindowId": {},
  "WindowTaskId": {}
}
```

<h3 id="deregistertaskfrommaintenancewindow-parameters">Parameters</h3>

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
|body|body|[DeregisterTaskFromMaintenanceWindowRequest](#schemaderegistertaskfrommaintenancewindowrequest)|true|none|
|» WindowId|body|object|true|none|
|» WindowTaskId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DeregisterTaskFromMaintenanceWindow|

> Example responses

> 200 Response

```json
{
  "WindowId": {},
  "WindowTaskId": {}
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

<h3 id="deregistertaskfrommaintenancewindow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterTaskFromMaintenanceWindowResult](#schemaderegistertaskfrommaintenancewindowresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeActivations

<a id="opIdDescribeActivations"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeActivations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeActivations' \
  -d '{
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeActivations`

Describes details about the activation, such as the date and time the activation was created, its expiration date, the Identity and Access Management (IAM) role assigned to the managed nodes in the activation, and the number of nodes registered by using this activation.

> Body parameter

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeactivations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeActivationsRequest](#schemadescribeactivationsrequest)|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeActivations|

> Example responses

> 200 Response

```json
{
  "ActivationList": {},
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

<h3 id="describeactivations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeActivationsResult](#schemadescribeactivationsresult)|
|480|480|InvalidFilter|[InvalidFilter](#schemainvalidfilter)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAssociation

<a id="opIdDescribeAssociation"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeAssociation' \
  -d '{
    "Name": {},
    "InstanceId": {},
    "AssociationId": {},
    "AssociationVersion": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeAssociation`

Describes the association for the specified target or managed node. If you created the association by using the <code>Targets</code> parameter, then you must retrieve the association by using the association ID.

> Body parameter

```json
{
  "Name": {},
  "InstanceId": {},
  "AssociationId": {},
  "AssociationVersion": {}
}
```

<h3 id="describeassociation-parameters">Parameters</h3>

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
|body|body|[DescribeAssociationRequest](#schemadescribeassociationrequest)|true|none|
|» Name|body|object|false|none|
|» InstanceId|body|object|false|none|
|» AssociationId|body|object|false|none|
|» AssociationVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeAssociation|

> Example responses

> 200 Response

```json
{
  "AssociationDescription": {
    "Name": {},
    "InstanceId": {},
    "AssociationVersion": {},
    "Date": {},
    "LastUpdateAssociationDate": {},
    "Status": {
      "Date": {},
      "Name": {},
      "Message": {},
      "AdditionalInfo": {}
    },
    "Overview": {
      "Status": {},
      "DetailedStatus": {},
      "AssociationStatusAggregatedCount": {
        "property1": 0,
        "property2": 0
      }
    },
    "DocumentVersion": {},
    "AutomationTargetParameterName": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "AssociationId": {},
    "Targets": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "LastExecutionDate": {},
    "LastSuccessfulExecutionDate": {},
    "AssociationName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
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

<h3 id="describeassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAssociationResult](#schemadescribeassociationresult)|
|480|480|AssociationDoesNotExist|[AssociationDoesNotExist](#schemaassociationdoesnotexist)|
|481|481|InvalidAssociationVersion|[InvalidAssociationVersion](#schemainvalidassociationversion)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|484|484|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAssociationExecutionTargets

<a id="opIdDescribeAssociationExecutionTargets"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeAssociationExecutionTargets' \
  -d '{
    "AssociationId": {},
    "ExecutionId": {},
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets`

Views information about a specific execution of a specific association.

> Body parameter

```json
{
  "AssociationId": {},
  "ExecutionId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeassociationexecutiontargets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAssociationExecutionTargetsRequest](#schemadescribeassociationexecutiontargetsrequest)|true|none|
|» AssociationId|body|object|true|none|
|» ExecutionId|body|object|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeAssociationExecutionTargets|

> Example responses

> 200 Response

```json
{
  "AssociationExecutionTargets": {},
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

<h3 id="describeassociationexecutiontargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAssociationExecutionTargetsResult](#schemadescribeassociationexecutiontargetsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|AssociationDoesNotExist|[AssociationDoesNotExist](#schemaassociationdoesnotexist)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|483|483|AssociationExecutionDoesNotExist|[AssociationExecutionDoesNotExist](#schemaassociationexecutiondoesnotexist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAssociationExecutions

<a id="opIdDescribeAssociationExecutions"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeAssociationExecutions' \
  -d '{
    "AssociationId": {},
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions`

Views all executions for a specific association ID. 

> Body parameter

```json
{
  "AssociationId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeassociationexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAssociationExecutionsRequest](#schemadescribeassociationexecutionsrequest)|true|none|
|» AssociationId|body|object|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeAssociationExecutions|

> Example responses

> 200 Response

```json
{
  "AssociationExecutions": {},
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

<h3 id="describeassociationexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAssociationExecutionsResult](#schemadescribeassociationexecutionsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|AssociationDoesNotExist|[AssociationDoesNotExist](#schemaassociationdoesnotexist)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAutomationExecutions

<a id="opIdDescribeAutomationExecutions"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeAutomationExecutions' \
  -d '{
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions`

Provides details about all active and terminated Automation executions.

> Body parameter

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeautomationexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAutomationExecutionsRequest](#schemadescribeautomationexecutionsrequest)|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeAutomationExecutions|

> Example responses

> 200 Response

```json
{
  "AutomationExecutionMetadataList": {},
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

<h3 id="describeautomationexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAutomationExecutionsResult](#schemadescribeautomationexecutionsresult)|
|480|480|InvalidFilterKey|[InvalidFilterKey](#schemainvalidfilterkey)|
|481|481|InvalidFilterValue|[InvalidFilterValue](#schemainvalidfiltervalue)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAutomationStepExecutions

<a id="opIdDescribeAutomationStepExecutions"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeAutomationStepExecutions' \
  -d '{
    "AutomationExecutionId": {},
    "Filters": {},
    "NextToken": {},
    "MaxResults": {},
    "ReverseOrder": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions`

Information about all active and terminated step executions in an Automation workflow.

> Body parameter

```json
{
  "AutomationExecutionId": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {},
  "ReverseOrder": {}
}
```

<h3 id="describeautomationstepexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAutomationStepExecutionsRequest](#schemadescribeautomationstepexecutionsrequest)|true|none|
|» AutomationExecutionId|body|object|true|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» ReverseOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeAutomationStepExecutions|

> Example responses

> 200 Response

```json
{
  "StepExecutions": {},
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

<h3 id="describeautomationstepexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAutomationStepExecutionsResult](#schemadescribeautomationstepexecutionsresult)|
|480|480|AutomationExecutionNotFoundException|[AutomationExecutionNotFoundException](#schemaautomationexecutionnotfoundexception)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|482|482|InvalidFilterKey|[InvalidFilterKey](#schemainvalidfilterkey)|
|483|483|InvalidFilterValue|[InvalidFilterValue](#schemainvalidfiltervalue)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAvailablePatches

<a id="opIdDescribeAvailablePatches"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeAvailablePatches' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeAvailablePatches' \
  -d '{
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeAvailablePatches`

Lists all patches eligible to be included in a patch baseline.

> Body parameter

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeavailablepatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAvailablePatchesRequest](#schemadescribeavailablepatchesrequest)|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeAvailablePatches|

> Example responses

> 200 Response

```json
{
  "Patches": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeavailablepatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAvailablePatchesResult](#schemadescribeavailablepatchesresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDocument

<a id="opIdDescribeDocument"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeDocument' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeDocument' \
  -d '{
    "Name": {},
    "DocumentVersion": {},
    "VersionName": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeDocument`

Describes the specified Amazon Web Services Systems Manager document (SSM document).

> Body parameter

```json
{
  "Name": {},
  "DocumentVersion": {},
  "VersionName": {}
}
```

<h3 id="describedocument-parameters">Parameters</h3>

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
|body|body|[DescribeDocumentRequest](#schemadescribedocumentrequest)|true|none|
|» Name|body|object|true|none|
|» DocumentVersion|body|object|false|none|
|» VersionName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeDocument|

> Example responses

> 200 Response

```json
{
  "Document": {
    "Sha1": {},
    "Hash": {},
    "HashType": {},
    "Name": {},
    "DisplayName": {},
    "VersionName": {},
    "Owner": {},
    "CreatedDate": {},
    "Status": {},
    "StatusInformation": {},
    "DocumentVersion": {},
    "Description": {},
    "Parameters": {},
    "PlatformTypes": {},
    "DocumentType": {},
    "SchemaVersion": {},
    "LatestVersion": {},
    "DefaultVersion": {},
    "DocumentFormat": {},
    "TargetType": {},
    "Tags": {},
    "AttachmentsInformation": {},
    "Requires": {},
    "Author": {},
    "ReviewInformation": {},
    "ApprovedVersion": {},
    "PendingReviewVersion": {},
    "ReviewStatus": {},
    "Category": {},
    "CategoryEnum": {}
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

<h3 id="describedocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDocumentResult](#schemadescribedocumentresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|482|482|InvalidDocumentVersion|[InvalidDocumentVersion](#schemainvaliddocumentversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDocumentPermission

<a id="opIdDescribeDocumentPermission"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeDocumentPermission' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeDocumentPermission' \
  -d '{
    "Name": {},
    "PermissionType": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeDocumentPermission`

Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's Amazon Web Services account ID) or publicly (<i>All</i>). 

> Body parameter

```json
{
  "Name": {},
  "PermissionType": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describedocumentpermission-parameters">Parameters</h3>

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
|body|body|[DescribeDocumentPermissionRequest](#schemadescribedocumentpermissionrequest)|true|none|
|» Name|body|object|true|none|
|» PermissionType|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeDocumentPermission|

> Example responses

> 200 Response

```json
{
  "AccountIds": {},
  "AccountSharingInfoList": {},
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

<h3 id="describedocumentpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDocumentPermissionResponse](#schemadescribedocumentpermissionresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|483|483|InvalidPermissionType|[InvalidPermissionType](#schemainvalidpermissiontype)|
|484|484|InvalidDocumentOperation|[InvalidDocumentOperation](#schemainvaliddocumentoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEffectiveInstanceAssociations

<a id="opIdDescribeEffectiveInstanceAssociations"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeEffectiveInstanceAssociations' \
  -d '{
    "InstanceId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations`

All associations for the managed node(s).

> Body parameter

```json
{
  "InstanceId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeeffectiveinstanceassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEffectiveInstanceAssociationsRequest](#schemadescribeeffectiveinstanceassociationsrequest)|true|none|
|» InstanceId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeEffectiveInstanceAssociations|

> Example responses

> 200 Response

```json
{
  "Associations": {},
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

<h3 id="describeeffectiveinstanceassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEffectiveInstanceAssociationsResult](#schemadescribeeffectiveinstanceassociationsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEffectivePatchesForPatchBaseline

<a id="opIdDescribeEffectivePatchesForPatchBaseline"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeEffectivePatchesForPatchBaseline' \
  -d '{
    "BaselineId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline`

Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Applies to patch baselines for Windows only.

> Body parameter

```json
{
  "BaselineId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeeffectivepatchesforpatchbaseline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEffectivePatchesForPatchBaselineRequest](#schemadescribeeffectivepatchesforpatchbaselinerequest)|true|none|
|» BaselineId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeEffectivePatchesForPatchBaseline|

> Example responses

> 200 Response

```json
{
  "EffectivePatches": {},
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

<h3 id="describeeffectivepatchesforpatchbaseline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEffectivePatchesForPatchBaselineResult](#schemadescribeeffectivepatchesforpatchbaselineresult)|
|480|480|InvalidResourceId|[InvalidResourceId](#schemainvalidresourceid)|
|481|481|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|482|482|UnsupportedOperatingSystem|[UnsupportedOperatingSystem](#schemaunsupportedoperatingsystem)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInstanceAssociationsStatus

<a id="opIdDescribeInstanceAssociationsStatus"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeInstanceAssociationsStatus' \
  -d '{
    "InstanceId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus`

The status of the associations for the managed node(s).

> Body parameter

```json
{
  "InstanceId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeinstanceassociationsstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeInstanceAssociationsStatusRequest](#schemadescribeinstanceassociationsstatusrequest)|true|none|
|» InstanceId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeInstanceAssociationsStatus|

> Example responses

> 200 Response

```json
{
  "InstanceAssociationStatusInfos": {},
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

<h3 id="describeinstanceassociationsstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstanceAssociationsStatusResult](#schemadescribeinstanceassociationsstatusresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInstanceInformation

<a id="opIdDescribeInstanceInformation"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeInstanceInformation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeInstanceInformation' \
  -d '{
    "InstanceInformationFilterList": {},
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeInstanceInformation`

<p>Provides information about one or more of your managed nodes, including the operating system platform, SSM Agent version, association status, and IP address. This operation does not return information for nodes that are either Stopped or Terminated.</p> <p>If you specify one or more node IDs, the operation returns information for those managed nodes. If you don't specify node IDs, it returns information for all your managed nodes. If you specify a node ID that isn't valid or a node that you don't own, you receive an error.</p> <note> <p>The <code>IamRole</code> field returned for this API operation is the Identity and Access Management (IAM) role assigned to on-premises managed nodes. This operation does not return the IAM role for EC2 instances.</p> </note>

> Body parameter

```json
{
  "InstanceInformationFilterList": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeinstanceinformation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeInstanceInformationRequest](#schemadescribeinstanceinformationrequest)|true|none|
|» InstanceInformationFilterList|body|object|false|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeInstanceInformation|

> Example responses

> 200 Response

```json
{
  "InstanceInformationList": {},
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

<h3 id="describeinstanceinformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstanceInformationResult](#schemadescribeinstanceinformationresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|483|483|InvalidInstanceInformationFilterValue|[InvalidInstanceInformationFilterValue](#schemainvalidinstanceinformationfiltervalue)|
|484|484|InvalidFilterKey|[InvalidFilterKey](#schemainvalidfilterkey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInstancePatchStates

<a id="opIdDescribeInstancePatchStates"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeInstancePatchStates' \
  -d '{
    "InstanceIds": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates`

Retrieves the high-level patch state of one or more managed nodes.

> Body parameter

```json
{
  "InstanceIds": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeinstancepatchstates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeInstancePatchStatesRequest](#schemadescribeinstancepatchstatesrequest)|true|none|
|» InstanceIds|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeInstancePatchStates|

> Example responses

> 200 Response

```json
{
  "InstancePatchStates": {},
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

<h3 id="describeinstancepatchstates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstancePatchStatesResult](#schemadescribeinstancepatchstatesresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInstancePatchStatesForPatchGroup

<a id="opIdDescribeInstancePatchStatesForPatchGroup"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeInstancePatchStatesForPatchGroup' \
  -d '{
    "PatchGroup": {},
    "Filters": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup`

Retrieves the high-level patch state for the managed nodes in the specified patch group.

> Body parameter

```json
{
  "PatchGroup": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeinstancepatchstatesforpatchgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeInstancePatchStatesForPatchGroupRequest](#schemadescribeinstancepatchstatesforpatchgrouprequest)|true|none|
|» PatchGroup|body|object|true|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeInstancePatchStatesForPatchGroup|

> Example responses

> 200 Response

```json
{
  "InstancePatchStates": {},
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

<h3 id="describeinstancepatchstatesforpatchgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstancePatchStatesForPatchGroupResult](#schemadescribeinstancepatchstatesforpatchgroupresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidFilter|[InvalidFilter](#schemainvalidfilter)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInstancePatches

<a id="opIdDescribeInstancePatches"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeInstancePatches' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeInstancePatches' \
  -d '{
    "InstanceId": {},
    "Filters": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeInstancePatches`

Retrieves information about the patches on the specified managed node and their state relative to the patch baseline being used for the node.

> Body parameter

```json
{
  "InstanceId": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeinstancepatches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeInstancePatchesRequest](#schemadescribeinstancepatchesrequest)|true|none|
|» InstanceId|body|object|true|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeInstancePatches|

> Example responses

> 200 Response

```json
{
  "Patches": {},
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

<h3 id="describeinstancepatches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstancePatchesResult](#schemadescribeinstancepatchesresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|482|482|InvalidFilter|[InvalidFilter](#schemainvalidfilter)|
|483|483|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInventoryDeletions

<a id="opIdDescribeInventoryDeletions"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeInventoryDeletions' \
  -d '{
    "DeletionId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions`

Describes a specific delete inventory operation.

> Body parameter

```json
{
  "DeletionId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describeinventorydeletions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeInventoryDeletionsRequest](#schemadescribeinventorydeletionsrequest)|true|none|
|» DeletionId|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeInventoryDeletions|

> Example responses

> 200 Response

```json
{
  "InventoryDeletions": {},
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

<h3 id="describeinventorydeletions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInventoryDeletionsResult](#schemadescribeinventorydeletionsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidDeletionIdException|[InvalidDeletionIdException](#schemainvaliddeletionidexception)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMaintenanceWindowExecutionTaskInvocations

<a id="opIdDescribeMaintenanceWindowExecutionTaskInvocations"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations' \
  -d '{
    "WindowExecutionId": {},
    "TaskId": {},
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations`

Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.

> Body parameter

```json
{
  "WindowExecutionId": {},
  "TaskId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describemaintenancewindowexecutiontaskinvocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMaintenanceWindowExecutionTaskInvocationsRequest](#schemadescribemaintenancewindowexecutiontaskinvocationsrequest)|true|none|
|» WindowExecutionId|body|object|true|none|
|» TaskId|body|object|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations|

> Example responses

> 200 Response

```json
{
  "WindowExecutionTaskInvocationIdentities": {},
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

<h3 id="describemaintenancewindowexecutiontaskinvocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMaintenanceWindowExecutionTaskInvocationsResult](#schemadescribemaintenancewindowexecutiontaskinvocationsresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMaintenanceWindowExecutionTasks

<a id="opIdDescribeMaintenanceWindowExecutionTasks"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeMaintenanceWindowExecutionTasks' \
  -d '{
    "WindowExecutionId": {},
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks`

For a given maintenance window execution, lists the tasks that were run.

> Body parameter

```json
{
  "WindowExecutionId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describemaintenancewindowexecutiontasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMaintenanceWindowExecutionTasksRequest](#schemadescribemaintenancewindowexecutiontasksrequest)|true|none|
|» WindowExecutionId|body|object|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeMaintenanceWindowExecutionTasks|

> Example responses

> 200 Response

```json
{
  "WindowExecutionTaskIdentities": {},
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

<h3 id="describemaintenancewindowexecutiontasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMaintenanceWindowExecutionTasksResult](#schemadescribemaintenancewindowexecutiontasksresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMaintenanceWindowExecutions

<a id="opIdDescribeMaintenanceWindowExecutions"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeMaintenanceWindowExecutions' \
  -d '{
    "WindowId": {},
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions`

Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.

> Body parameter

```json
{
  "WindowId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describemaintenancewindowexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMaintenanceWindowExecutionsRequest](#schemadescribemaintenancewindowexecutionsrequest)|true|none|
|» WindowId|body|object|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeMaintenanceWindowExecutions|

> Example responses

> 200 Response

```json
{
  "WindowExecutions": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describemaintenancewindowexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMaintenanceWindowExecutionsResult](#schemadescribemaintenancewindowexecutionsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMaintenanceWindowSchedule

<a id="opIdDescribeMaintenanceWindowSchedule"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeMaintenanceWindowSchedule' \
  -d '{
    "WindowId": {},
    "Targets": {},
    "ResourceType": {},
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule`

Retrieves information about upcoming executions of a maintenance window.

> Body parameter

```json
{
  "WindowId": {},
  "Targets": {},
  "ResourceType": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describemaintenancewindowschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMaintenanceWindowScheduleRequest](#schemadescribemaintenancewindowschedulerequest)|true|none|
|» WindowId|body|object|false|none|
|» Targets|body|object|false|none|
|» ResourceType|body|object|false|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeMaintenanceWindowSchedule|

> Example responses

> 200 Response

```json
{
  "ScheduledWindowExecutions": {},
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

<h3 id="describemaintenancewindowschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMaintenanceWindowScheduleResult](#schemadescribemaintenancewindowscheduleresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMaintenanceWindowTargets

<a id="opIdDescribeMaintenanceWindowTargets"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeMaintenanceWindowTargets' \
  -d '{
    "WindowId": {},
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets`

Lists the targets registered with the maintenance window.

> Body parameter

```json
{
  "WindowId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describemaintenancewindowtargets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMaintenanceWindowTargetsRequest](#schemadescribemaintenancewindowtargetsrequest)|true|none|
|» WindowId|body|object|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeMaintenanceWindowTargets|

> Example responses

> 200 Response

```json
{
  "Targets": {},
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

<h3 id="describemaintenancewindowtargets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMaintenanceWindowTargetsResult](#schemadescribemaintenancewindowtargetsresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMaintenanceWindowTasks

<a id="opIdDescribeMaintenanceWindowTasks"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeMaintenanceWindowTasks' \
  -d '{
    "WindowId": {},
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks`

<p>Lists the tasks in a maintenance window.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note>

> Body parameter

```json
{
  "WindowId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describemaintenancewindowtasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMaintenanceWindowTasksRequest](#schemadescribemaintenancewindowtasksrequest)|true|none|
|» WindowId|body|object|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeMaintenanceWindowTasks|

> Example responses

> 200 Response

```json
{
  "Tasks": {},
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

<h3 id="describemaintenancewindowtasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMaintenanceWindowTasksResult](#schemadescribemaintenancewindowtasksresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMaintenanceWindows

<a id="opIdDescribeMaintenanceWindows"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeMaintenanceWindows' \
  -d '{
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows`

Retrieves the maintenance windows in an Amazon Web Services account.

> Body parameter

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describemaintenancewindows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMaintenanceWindowsRequest](#schemadescribemaintenancewindowsrequest)|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeMaintenanceWindows|

> Example responses

> 200 Response

```json
{
  "WindowIdentities": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describemaintenancewindows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMaintenanceWindowsResult](#schemadescribemaintenancewindowsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMaintenanceWindowsForTarget

<a id="opIdDescribeMaintenanceWindowsForTarget"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeMaintenanceWindowsForTarget' \
  -d '{
    "Targets": {},
    "ResourceType": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget`

Retrieves information about the maintenance window targets or tasks that a managed node is associated with.

> Body parameter

```json
{
  "Targets": {},
  "ResourceType": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describemaintenancewindowsfortarget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMaintenanceWindowsForTargetRequest](#schemadescribemaintenancewindowsfortargetrequest)|true|none|
|» Targets|body|object|true|none|
|» ResourceType|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeMaintenanceWindowsForTarget|

> Example responses

> 200 Response

```json
{
  "WindowIdentities": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describemaintenancewindowsfortarget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMaintenanceWindowsForTargetResult](#schemadescribemaintenancewindowsfortargetresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOpsItems

<a id="opIdDescribeOpsItems"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeOpsItems' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeOpsItems' \
  -d '{
    "OpsItemFilters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeOpsItems`

<p>Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

> Body parameter

```json
{
  "OpsItemFilters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeopsitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeOpsItemsRequest](#schemadescribeopsitemsrequest)|true|none|
|» OpsItemFilters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeOpsItems|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "OpsItemSummaries": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeopsitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOpsItemsResponse](#schemadescribeopsitemsresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeParameters

<a id="opIdDescribeParameters"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeParameters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeParameters' \
  -d '{
    "Filters": {},
    "ParameterFilters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeParameters`

<p>Get information about a parameter.</p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>DescribeParameters</code> retrieves whatever the original key alias was referencing.</p> </important>

> Body parameter

```json
{
  "Filters": {},
  "ParameterFilters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describeparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeParametersRequest](#schemadescribeparametersrequest)|true|none|
|» Filters|body|object|false|none|
|» ParameterFilters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeParameters|

> Example responses

> 200 Response

```json
{
  "Parameters": {},
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

<h3 id="describeparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeParametersResult](#schemadescribeparametersresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidFilterKey|[InvalidFilterKey](#schemainvalidfilterkey)|
|482|482|InvalidFilterOption|[InvalidFilterOption](#schemainvalidfilteroption)|
|483|483|InvalidFilterValue|[InvalidFilterValue](#schemainvalidfiltervalue)|
|484|484|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePatchBaselines

<a id="opIdDescribePatchBaselines"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribePatchBaselines' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribePatchBaselines' \
  -d '{
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribePatchBaselines`

Lists the patch baselines in your Amazon Web Services account.

> Body parameter

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describepatchbaselines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribePatchBaselinesRequest](#schemadescribepatchbaselinesrequest)|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribePatchBaselines|

> Example responses

> 200 Response

```json
{
  "BaselineIdentities": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describepatchbaselines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePatchBaselinesResult](#schemadescribepatchbaselinesresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePatchGroupState

<a id="opIdDescribePatchGroupState"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribePatchGroupState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribePatchGroupState' \
  -d '{
    "PatchGroup": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribePatchGroupState`

Returns high-level aggregated patch compliance state information for a patch group.

> Body parameter

```json
{
  "PatchGroup": {}
}
```

<h3 id="describepatchgroupstate-parameters">Parameters</h3>

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
|body|body|[DescribePatchGroupStateRequest](#schemadescribepatchgroupstaterequest)|true|none|
|» PatchGroup|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribePatchGroupState|

> Example responses

> 200 Response

```json
{
  "Instances": {},
  "InstancesWithInstalledPatches": {},
  "InstancesWithInstalledOtherPatches": {},
  "InstancesWithInstalledPendingRebootPatches": {},
  "InstancesWithInstalledRejectedPatches": {},
  "InstancesWithMissingPatches": {},
  "InstancesWithFailedPatches": {},
  "InstancesWithNotApplicablePatches": {},
  "InstancesWithUnreportedNotApplicablePatches": {},
  "InstancesWithCriticalNonCompliantPatches": {},
  "InstancesWithSecurityNonCompliantPatches": {},
  "InstancesWithOtherNonCompliantPatches": {}
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

<h3 id="describepatchgroupstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePatchGroupStateResult](#schemadescribepatchgroupstateresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePatchGroups

<a id="opIdDescribePatchGroups"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribePatchGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribePatchGroups' \
  -d '{
    "MaxResults": {},
    "Filters": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribePatchGroups`

Lists all patch groups that have been registered with patch baselines.

> Body parameter

```json
{
  "MaxResults": {},
  "Filters": {},
  "NextToken": {}
}
```

<h3 id="describepatchgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribePatchGroupsRequest](#schemadescribepatchgroupsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribePatchGroups|

> Example responses

> 200 Response

```json
{
  "Mappings": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describepatchgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePatchGroupsResult](#schemadescribepatchgroupsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePatchProperties

<a id="opIdDescribePatchProperties"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribePatchProperties' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribePatchProperties' \
  -d '{
    "OperatingSystem": {},
    "Property": {},
    "PatchSet": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribePatchProperties`

<p>Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for operations such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p> <p>The following section lists the properties that can be used in filters for each major operating system type:</p> <dl> <dt>AMAZON_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>AMAZON_LINUX_2</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>CENTOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>DEBIAN</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>MACOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> </p> </dd> <dt>ORACLE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>REDHAT_ENTERPRISE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>SUSE</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>UBUNTU</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>WINDOWS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRODUCT_FAMILY</code> | <code>CLASSIFICATION</code> | <code>MSRC_SEVERITY</code> </p> </dd> </dl>

> Body parameter

```json
{
  "OperatingSystem": {},
  "Property": {},
  "PatchSet": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="describepatchproperties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribePatchPropertiesRequest](#schemadescribepatchpropertiesrequest)|true|none|
|» OperatingSystem|body|object|true|none|
|» Property|body|object|true|none|
|» PatchSet|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribePatchProperties|

> Example responses

> 200 Response

```json
{
  "Properties": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describepatchproperties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePatchPropertiesResult](#schemadescribepatchpropertiesresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSessions

<a id="opIdDescribeSessions"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DescribeSessions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DescribeSessions' \
  -d '{
    "State": {},
    "MaxResults": {},
    "NextToken": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DescribeSessions`

Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.

> Body parameter

```json
{
  "State": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

<h3 id="describesessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeSessionsRequest](#schemadescribesessionsrequest)|true|none|
|» State|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DescribeSessions|

> Example responses

> 200 Response

```json
{
  "Sessions": {},
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

<h3 id="describesessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSessionsResponse](#schemadescribesessionsresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidFilterKey|[InvalidFilterKey](#schemainvalidfilterkey)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateOpsItemRelatedItem

<a id="opIdDisassociateOpsItemRelatedItem"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.DisassociateOpsItemRelatedItem' \
  -d '{
    "OpsItemId": {},
    "AssociationId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem`

Deletes the association between an OpsItem and a related item. For example, this API operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a capability of Amazon Web Services Systems Manager.

> Body parameter

```json
{
  "OpsItemId": {},
  "AssociationId": {}
}
```

<h3 id="disassociateopsitemrelateditem-parameters">Parameters</h3>

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
|body|body|[DisassociateOpsItemRelatedItemRequest](#schemadisassociateopsitemrelateditemrequest)|true|none|
|» OpsItemId|body|object|true|none|
|» AssociationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.DisassociateOpsItemRelatedItem|

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

<h3 id="disassociateopsitemrelateditem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateOpsItemRelatedItemResponse](#schemadisassociateopsitemrelateditemresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|OpsItemRelatedItemAssociationNotFoundException|[OpsItemRelatedItemAssociationNotFoundException](#schemaopsitemrelateditemassociationnotfoundexception)|
|482|482|OpsItemNotFoundException|[OpsItemNotFoundException](#schemaopsitemnotfoundexception)|
|483|483|OpsItemInvalidParameterException|[OpsItemInvalidParameterException](#schemaopsiteminvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAutomationExecution

<a id="opIdGetAutomationExecution"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetAutomationExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetAutomationExecution' \
  -d '{
    "AutomationExecutionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetAutomationExecution`

Get detailed information about a particular Automation execution.

> Body parameter

```json
{
  "AutomationExecutionId": {}
}
```

<h3 id="getautomationexecution-parameters">Parameters</h3>

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
|body|body|[GetAutomationExecutionRequest](#schemagetautomationexecutionrequest)|true|none|
|» AutomationExecutionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetAutomationExecution|

> Example responses

> 200 Response

```json
{
  "AutomationExecution": {
    "AutomationExecutionId": {},
    "DocumentName": {},
    "DocumentVersion": {},
    "ExecutionStartTime": {},
    "ExecutionEndTime": {},
    "AutomationExecutionStatus": {},
    "StepExecutions": {},
    "StepExecutionsTruncated": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "Outputs": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "FailureMessage": {},
    "Mode": {},
    "ParentAutomationExecutionId": {},
    "ExecutedBy": {},
    "CurrentStepName": {},
    "CurrentAction": {},
    "TargetParameterName": {},
    "Targets": {},
    "TargetMaps": {},
    "ResolvedTargets": {
      "ParameterValues": {},
      "Truncated": {}
    },
    "MaxConcurrency": {},
    "MaxErrors": {},
    "Target": {},
    "TargetLocations": {},
    "ProgressCounters": {
      "TotalSteps": {},
      "SuccessSteps": {},
      "FailedSteps": {},
      "CancelledSteps": {},
      "TimedOutSteps": {}
    },
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {},
    "AutomationSubtype": {},
    "ScheduledTime": {},
    "Runbooks": {},
    "OpsItemId": {},
    "AssociationId": {},
    "ChangeRequestName": {}
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

<h3 id="getautomationexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAutomationExecutionResult](#schemagetautomationexecutionresult)|
|480|480|AutomationExecutionNotFoundException|[AutomationExecutionNotFoundException](#schemaautomationexecutionnotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCalendarState

<a id="opIdGetCalendarState"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetCalendarState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetCalendarState' \
  -d '{
    "CalendarNames": {},
    "AtTime": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetCalendarState`

<p>Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If you specify a time, <code>GetCalendarState</code> returns the state of the calendar at that specific time, and returns the next time that the change calendar state will transition. If you don't specify a time, <code>GetCalendarState</code> uses the current time. Change Calendar entries have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p> <p>If you specify more than one calendar in a request, the command returns the status of <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the request are closed, the status returned is <code>CLOSED</code>.</p> <p>For more information about Change Calendar, a capability of Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">Amazon Web Services Systems Manager Change Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>

> Body parameter

```json
{
  "CalendarNames": {},
  "AtTime": {}
}
```

<h3 id="getcalendarstate-parameters">Parameters</h3>

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
|body|body|[GetCalendarStateRequest](#schemagetcalendarstaterequest)|true|none|
|» CalendarNames|body|object|true|none|
|» AtTime|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetCalendarState|

> Example responses

> 200 Response

```json
{
  "State": {},
  "AtTime": {},
  "NextTransitionTime": {}
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

<h3 id="getcalendarstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCalendarStateResponse](#schemagetcalendarstateresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|482|482|InvalidDocumentType|[InvalidDocumentType](#schemainvaliddocumenttype)|
|483|483|UnsupportedCalendarException|[UnsupportedCalendarException](#schemaunsupportedcalendarexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCommandInvocation

<a id="opIdGetCommandInvocation"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetCommandInvocation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetCommandInvocation' \
  -d '{
    "CommandId": {},
    "InstanceId": {},
    "PluginName": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetCommandInvocation`

<p>Returns detailed information about command execution for an invocation or plugin.</p> <p> <code>GetCommandInvocation</code> only gives the execution status of a plugin in a document. To get the command execution status on a specific managed node, use <a>ListCommandInvocations</a>. To get the command execution status across managed nodes, use <a>ListCommands</a>.</p>

> Body parameter

```json
{
  "CommandId": {},
  "InstanceId": {},
  "PluginName": {}
}
```

<h3 id="getcommandinvocation-parameters">Parameters</h3>

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
|body|body|[GetCommandInvocationRequest](#schemagetcommandinvocationrequest)|true|none|
|» CommandId|body|object|true|none|
|» InstanceId|body|object|true|none|
|» PluginName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetCommandInvocation|

> Example responses

> 200 Response

```json
{
  "CommandId": {},
  "InstanceId": {},
  "Comment": {},
  "DocumentName": {},
  "DocumentVersion": {},
  "PluginName": {},
  "ResponseCode": {},
  "ExecutionStartDateTime": {},
  "ExecutionElapsedTime": {},
  "ExecutionEndDateTime": {},
  "Status": {},
  "StatusDetails": {},
  "StandardOutputContent": {},
  "StandardOutputUrl": {},
  "StandardErrorContent": {},
  "StandardErrorUrl": {},
  "CloudWatchOutputConfig": {
    "CloudWatchLogGroupName": {},
    "CloudWatchOutputEnabled": {}
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

<h3 id="getcommandinvocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCommandInvocationResult](#schemagetcommandinvocationresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidCommandId|[InvalidCommandId](#schemainvalidcommandid)|
|482|482|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|483|483|InvalidPluginName|[InvalidPluginName](#schemainvalidpluginname)|
|484|484|InvocationDoesNotExist|[InvocationDoesNotExist](#schemainvocationdoesnotexist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConnectionStatus

<a id="opIdGetConnectionStatus"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetConnectionStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetConnectionStatus' \
  -d '{
    "Target": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetConnectionStatus`

Retrieves the Session Manager connection status for a managed node to determine whether it is running and ready to receive Session Manager connections.

> Body parameter

```json
{
  "Target": {}
}
```

<h3 id="getconnectionstatus-parameters">Parameters</h3>

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
|body|body|[GetConnectionStatusRequest](#schemagetconnectionstatusrequest)|true|none|
|» Target|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetConnectionStatus|

> Example responses

> 200 Response

```json
{
  "Target": {},
  "Status": {}
}
```

> 480 Response

```json
null
```

<h3 id="getconnectionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConnectionStatusResponse](#schemagetconnectionstatusresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDefaultPatchBaseline

<a id="opIdGetDefaultPatchBaseline"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetDefaultPatchBaseline' \
  -d '{
    "OperatingSystem": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline`

<p>Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.</p> <p>If you don't specify an operating system value, the default patch baseline for Windows is returned.</p>

> Body parameter

```json
{
  "OperatingSystem": {}
}
```

<h3 id="getdefaultpatchbaseline-parameters">Parameters</h3>

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
|body|body|[GetDefaultPatchBaselineRequest](#schemagetdefaultpatchbaselinerequest)|true|none|
|» OperatingSystem|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetDefaultPatchBaseline|

> Example responses

> 200 Response

```json
{
  "BaselineId": {},
  "OperatingSystem": {}
}
```

> 480 Response

```json
null
```

<h3 id="getdefaultpatchbaseline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDefaultPatchBaselineResult](#schemagetdefaultpatchbaselineresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeployablePatchSnapshotForInstance

<a id="opIdGetDeployablePatchSnapshotForInstance"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetDeployablePatchSnapshotForInstance' \
  -d '{
    "InstanceId": {},
    "SnapshotId": {},
    "BaselineOverride": {
      "OperatingSystem": {},
      "GlobalFilters": {
        "PatchFilters": {}
      },
      "ApprovalRules": {
        "PatchRules": {}
      },
      "ApprovedPatches": {},
      "ApprovedPatchesComplianceLevel": {},
      "RejectedPatches": {},
      "RejectedPatchesAction": {},
      "ApprovedPatchesEnableNonSecurity": {},
      "Sources": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance`

<p>Retrieves the current snapshot for the patch baseline the managed node uses. This API is primarily used by the <code>AWS-RunPatchBaseline</code> Systems Manager document (SSM document).</p> <note> <p>If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a capability of Amazon Web Services Systems Manager, with an SSM document that enables you to target a managed node with a script or command. For example, run the command using the <code>AWS-RunShellScript</code> document or the <code>AWS-RunPowerShellScript</code> document.</p> </note>

> Body parameter

```json
{
  "InstanceId": {},
  "SnapshotId": {},
  "BaselineOverride": {
    "OperatingSystem": {},
    "GlobalFilters": {
      "PatchFilters": {}
    },
    "ApprovalRules": {
      "PatchRules": {}
    },
    "ApprovedPatches": {},
    "ApprovedPatchesComplianceLevel": {},
    "RejectedPatches": {},
    "RejectedPatchesAction": {},
    "ApprovedPatchesEnableNonSecurity": {},
    "Sources": {}
  }
}
```

<h3 id="getdeployablepatchsnapshotforinstance-parameters">Parameters</h3>

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
|body|body|[GetDeployablePatchSnapshotForInstanceRequest](#schemagetdeployablepatchsnapshotforinstancerequest)|true|none|
|» InstanceId|body|object|true|none|
|» SnapshotId|body|object|true|none|
|» BaselineOverride|body|object|false|none|
|» » OperatingSystem|body|object|false|none|
|» » GlobalFilters|body|[PatchFilterGroup](#schemapatchfiltergroup)|false|A set of patch filters, typically used for approval rules.|
|» » ApprovalRules|body|[PatchRuleGroup](#schemapatchrulegroup)|false|A set of rules defining the approval rules for a patch baseline.|
|» » ApprovedPatches|body|object|false|none|
|» » ApprovedPatchesComplianceLevel|body|object|false|none|
|» » RejectedPatches|body|object|false|none|
|» » RejectedPatchesAction|body|object|false|none|
|» » ApprovedPatchesEnableNonSecurity|body|object|false|none|
|» » Sources|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetDeployablePatchSnapshotForInstance|

> Example responses

> 200 Response

```json
{
  "InstanceId": {},
  "SnapshotId": {},
  "SnapshotDownloadUrl": {},
  "Product": {}
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

<h3 id="getdeployablepatchsnapshotforinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeployablePatchSnapshotForInstanceResult](#schemagetdeployablepatchsnapshotforinstanceresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|UnsupportedOperatingSystem|[UnsupportedOperatingSystem](#schemaunsupportedoperatingsystem)|
|482|482|UnsupportedFeatureRequiredException|[UnsupportedFeatureRequiredException](#schemaunsupportedfeaturerequiredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDocument

<a id="opIdGetDocument"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetDocument' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetDocument' \
  -d '{
    "Name": {},
    "VersionName": {},
    "DocumentVersion": {},
    "DocumentFormat": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetDocument`

Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).

> Body parameter

```json
{
  "Name": {},
  "VersionName": {},
  "DocumentVersion": {},
  "DocumentFormat": {}
}
```

<h3 id="getdocument-parameters">Parameters</h3>

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
|body|body|[GetDocumentRequest](#schemagetdocumentrequest)|true|none|
|» Name|body|object|true|none|
|» VersionName|body|object|false|none|
|» DocumentVersion|body|object|false|none|
|» DocumentFormat|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetDocument|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "CreatedDate": {},
  "DisplayName": {},
  "VersionName": {},
  "DocumentVersion": {},
  "Status": {},
  "StatusInformation": {},
  "Content": {},
  "DocumentType": {},
  "DocumentFormat": {},
  "Requires": {},
  "AttachmentsContent": {},
  "ReviewStatus": {}
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

<h3 id="getdocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDocumentResult](#schemagetdocumentresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|482|482|InvalidDocumentVersion|[InvalidDocumentVersion](#schemainvaliddocumentversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInventory

<a id="opIdGetInventory"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetInventory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetInventory' \
  -d '{
    "Filters": {},
    "Aggregators": {},
    "ResultAttributes": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetInventory`

Query inventory information. This includes managed node status, such as <code>Stopped</code> or <code>Terminated</code>.

> Body parameter

```json
{
  "Filters": {},
  "Aggregators": {},
  "ResultAttributes": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="getinventory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetInventoryRequest](#schemagetinventoryrequest)|true|none|
|» Filters|body|object|false|none|
|» Aggregators|body|object|false|none|
|» ResultAttributes|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetInventory|

> Example responses

> 200 Response

```json
{
  "Entities": {},
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

> 486 Response

```json
null
```

<h3 id="getinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInventoryResult](#schemagetinventoryresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidFilter|[InvalidFilter](#schemainvalidfilter)|
|482|482|InvalidInventoryGroupException|[InvalidInventoryGroupException](#schemainvalidinventorygroupexception)|
|483|483|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|484|484|InvalidTypeNameException|[InvalidTypeNameException](#schemainvalidtypenameexception)|
|485|485|InvalidAggregatorException|[InvalidAggregatorException](#schemainvalidaggregatorexception)|
|486|486|InvalidResultAttributeException|[InvalidResultAttributeException](#schemainvalidresultattributeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInventorySchema

<a id="opIdGetInventorySchema"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetInventorySchema' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetInventorySchema' \
  -d '{
    "TypeName": {},
    "NextToken": {},
    "MaxResults": {},
    "Aggregator": {},
    "SubType": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetInventorySchema`

Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.

> Body parameter

```json
{
  "TypeName": {},
  "NextToken": {},
  "MaxResults": {},
  "Aggregator": {},
  "SubType": {}
}
```

<h3 id="getinventoryschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetInventorySchemaRequest](#schemagetinventoryschemarequest)|true|none|
|» TypeName|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Aggregator|body|object|false|none|
|» SubType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetInventorySchema|

> Example responses

> 200 Response

```json
{
  "Schemas": {},
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

<h3 id="getinventoryschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInventorySchemaResult](#schemagetinventoryschemaresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidTypeNameException|[InvalidTypeNameException](#schemainvalidtypenameexception)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMaintenanceWindow

<a id="opIdGetMaintenanceWindow"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetMaintenanceWindow' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetMaintenanceWindow' \
  -d '{
    "WindowId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetMaintenanceWindow`

Retrieves a maintenance window.

> Body parameter

```json
{
  "WindowId": {}
}
```

<h3 id="getmaintenancewindow-parameters">Parameters</h3>

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
|body|body|[GetMaintenanceWindowRequest](#schemagetmaintenancewindowrequest)|true|none|
|» WindowId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetMaintenanceWindow|

> Example responses

> 200 Response

```json
{
  "WindowId": {},
  "Name": {},
  "Description": {},
  "StartDate": {},
  "EndDate": {},
  "Schedule": {},
  "ScheduleTimezone": {},
  "ScheduleOffset": {},
  "NextExecutionTime": {},
  "Duration": {},
  "Cutoff": {},
  "AllowUnassociatedTargets": {},
  "Enabled": {},
  "CreatedDate": {},
  "ModifiedDate": {}
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

<h3 id="getmaintenancewindow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMaintenanceWindowResult](#schemagetmaintenancewindowresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMaintenanceWindowExecution

<a id="opIdGetMaintenanceWindowExecution"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetMaintenanceWindowExecution' \
  -d '{
    "WindowExecutionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution`

Retrieves details about a specific a maintenance window execution.

> Body parameter

```json
{
  "WindowExecutionId": {}
}
```

<h3 id="getmaintenancewindowexecution-parameters">Parameters</h3>

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
|body|body|[GetMaintenanceWindowExecutionRequest](#schemagetmaintenancewindowexecutionrequest)|true|none|
|» WindowExecutionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetMaintenanceWindowExecution|

> Example responses

> 200 Response

```json
{
  "WindowExecutionId": {},
  "TaskIds": {},
  "Status": {},
  "StatusDetails": {},
  "StartTime": {},
  "EndTime": {}
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

<h3 id="getmaintenancewindowexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMaintenanceWindowExecutionResult](#schemagetmaintenancewindowexecutionresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMaintenanceWindowExecutionTask

<a id="opIdGetMaintenanceWindowExecutionTask"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetMaintenanceWindowExecutionTask' \
  -d '{
    "WindowExecutionId": {},
    "TaskId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask`

Retrieves the details about a specific task run as part of a maintenance window execution.

> Body parameter

```json
{
  "WindowExecutionId": {},
  "TaskId": {}
}
```

<h3 id="getmaintenancewindowexecutiontask-parameters">Parameters</h3>

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
|body|body|[GetMaintenanceWindowExecutionTaskRequest](#schemagetmaintenancewindowexecutiontaskrequest)|true|none|
|» WindowExecutionId|body|object|true|none|
|» TaskId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetMaintenanceWindowExecutionTask|

> Example responses

> 200 Response

```json
{
  "WindowExecutionId": {},
  "TaskExecutionId": {},
  "TaskArn": {},
  "ServiceRole": {},
  "Type": {},
  "TaskParameters": {},
  "Priority": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "Status": {},
  "StatusDetails": {},
  "StartTime": {},
  "EndTime": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  },
  "TriggeredAlarms": {}
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

<h3 id="getmaintenancewindowexecutiontask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMaintenanceWindowExecutionTaskResult](#schemagetmaintenancewindowexecutiontaskresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMaintenanceWindowExecutionTaskInvocation

<a id="opIdGetMaintenanceWindowExecutionTaskInvocation"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation' \
  -d '{
    "WindowExecutionId": {},
    "TaskId": {},
    "InvocationId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation`

Retrieves information about a specific task running on a specific target.

> Body parameter

```json
{
  "WindowExecutionId": {},
  "TaskId": {},
  "InvocationId": {}
}
```

<h3 id="getmaintenancewindowexecutiontaskinvocation-parameters">Parameters</h3>

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
|body|body|[GetMaintenanceWindowExecutionTaskInvocationRequest](#schemagetmaintenancewindowexecutiontaskinvocationrequest)|true|none|
|» WindowExecutionId|body|object|true|none|
|» TaskId|body|object|true|none|
|» InvocationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation|

> Example responses

> 200 Response

```json
{
  "WindowExecutionId": {},
  "TaskExecutionId": {},
  "InvocationId": {},
  "ExecutionId": {},
  "TaskType": {},
  "Parameters": {},
  "Status": {},
  "StatusDetails": {},
  "StartTime": {},
  "EndTime": {},
  "OwnerInformation": {},
  "WindowTargetId": {}
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

<h3 id="getmaintenancewindowexecutiontaskinvocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMaintenanceWindowExecutionTaskInvocationResult](#schemagetmaintenancewindowexecutiontaskinvocationresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMaintenanceWindowTask

<a id="opIdGetMaintenanceWindowTask"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetMaintenanceWindowTask' \
  -d '{
    "WindowId": {},
    "WindowTaskId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask`

<p>Retrieves the details of a maintenance window task.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note> <p>To retrieve a list of tasks in a maintenance window, instead use the <a>DescribeMaintenanceWindowTasks</a> command.</p>

> Body parameter

```json
{
  "WindowId": {},
  "WindowTaskId": {}
}
```

<h3 id="getmaintenancewindowtask-parameters">Parameters</h3>

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
|body|body|[GetMaintenanceWindowTaskRequest](#schemagetmaintenancewindowtaskrequest)|true|none|
|» WindowId|body|object|true|none|
|» WindowTaskId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetMaintenanceWindowTask|

> Example responses

> 200 Response

```json
{
  "WindowId": {},
  "WindowTaskId": {},
  "Targets": {},
  "TaskArn": {},
  "ServiceRoleArn": {},
  "TaskType": {},
  "TaskParameters": {
    "property1": {
      "Values": {}
    },
    "property2": {
      "Values": {}
    }
  },
  "TaskInvocationParameters": {
    "RunCommand": {
      "Comment": {},
      "CloudWatchOutputConfig": {
        "CloudWatchLogGroupName": {},
        "CloudWatchOutputEnabled": {}
      },
      "DocumentHash": {},
      "DocumentHashType": {},
      "DocumentVersion": {},
      "NotificationConfig": {
        "NotificationArn": {},
        "NotificationEvents": {},
        "NotificationType": {}
      },
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "ServiceRoleArn": {},
      "TimeoutSeconds": {}
    },
    "Automation": {
      "DocumentVersion": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "StepFunctions": {
      "Input": {},
      "Name": {}
    },
    "Lambda": {
      "ClientContext": {},
      "Qualifier": {},
      "Payload": {}
    }
  },
  "Priority": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "LoggingInfo": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "S3Region": {}
  },
  "Name": {},
  "Description": {},
  "CutoffBehavior": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
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

<h3 id="getmaintenancewindowtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMaintenanceWindowTaskResult](#schemagetmaintenancewindowtaskresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOpsItem

<a id="opIdGetOpsItem"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetOpsItem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetOpsItem' \
  -d '{
    "OpsItemId": {},
    "OpsItemArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetOpsItem`

<p>Get information about an OpsItem by using the ID. You must have permission in Identity and Access Management (IAM) to view information about an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

> Body parameter

```json
{
  "OpsItemId": {},
  "OpsItemArn": {}
}
```

<h3 id="getopsitem-parameters">Parameters</h3>

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
|body|body|[GetOpsItemRequest](#schemagetopsitemrequest)|true|none|
|» OpsItemId|body|object|true|none|
|» OpsItemArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetOpsItem|

> Example responses

> 200 Response

```json
{
  "OpsItem": {
    "CreatedBy": {},
    "OpsItemType": {},
    "CreatedTime": {},
    "Description": {},
    "LastModifiedBy": {},
    "LastModifiedTime": {},
    "Notifications": {},
    "Priority": {},
    "RelatedOpsItems": {},
    "Status": {},
    "OpsItemId": {},
    "Version": {},
    "Title": {},
    "Source": {},
    "OperationalData": {
      "property1": {
        "Value": {},
        "Type": {}
      },
      "property2": {
        "Value": {},
        "Type": {}
      }
    },
    "Category": {},
    "Severity": {},
    "ActualStartTime": {},
    "ActualEndTime": {},
    "PlannedStartTime": {},
    "PlannedEndTime": {},
    "OpsItemArn": {}
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

<h3 id="getopsitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOpsItemResponse](#schemagetopsitemresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|OpsItemNotFoundException|[OpsItemNotFoundException](#schemaopsitemnotfoundexception)|
|482|482|OpsItemAccessDeniedException|[OpsItemAccessDeniedException](#schemaopsitemaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOpsMetadata

<a id="opIdGetOpsMetadata"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetOpsMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetOpsMetadata' \
  -d '{
    "OpsMetadataArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetOpsMetadata`

View operational metadata related to an application in Application Manager.

> Body parameter

```json
{
  "OpsMetadataArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="getopsmetadata-parameters">Parameters</h3>

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
|body|body|[GetOpsMetadataRequest](#schemagetopsmetadatarequest)|true|none|
|» OpsMetadataArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetOpsMetadata|

> Example responses

> 200 Response

```json
{
  "ResourceId": {},
  "Metadata": {
    "property1": {
      "Value": {}
    },
    "property2": {
      "Value": {}
    }
  },
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

<h3 id="getopsmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOpsMetadataResult](#schemagetopsmetadataresult)|
|480|480|OpsMetadataNotFoundException|[OpsMetadataNotFoundException](#schemaopsmetadatanotfoundexception)|
|481|481|OpsMetadataInvalidArgumentException|[OpsMetadataInvalidArgumentException](#schemaopsmetadatainvalidargumentexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOpsSummary

<a id="opIdGetOpsSummary"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetOpsSummary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetOpsSummary' \
  -d '{
    "SyncName": {},
    "Filters": {},
    "Aggregators": {},
    "ResultAttributes": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetOpsSummary`

View a summary of operations metadata (OpsData) based on specified filters and aggregators. OpsData can include information about Amazon Web Services Systems Manager OpsCenter operational workitems (OpsItems) as well as information about any Amazon Web Services resource or service configured to report OpsData to Amazon Web Services Systems Manager Explorer. 

> Body parameter

```json
{
  "SyncName": {},
  "Filters": {},
  "Aggregators": {},
  "ResultAttributes": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="getopssummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetOpsSummaryRequest](#schemagetopssummaryrequest)|true|none|
|» SyncName|body|object|false|none|
|» Filters|body|object|false|none|
|» Aggregators|body|object|false|none|
|» ResultAttributes|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetOpsSummary|

> Example responses

> 200 Response

```json
{
  "Entities": {},
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

<h3 id="getopssummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOpsSummaryResult](#schemagetopssummaryresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ResourceDataSyncNotFoundException|[ResourceDataSyncNotFoundException](#schemaresourcedatasyncnotfoundexception)|
|482|482|InvalidFilter|[InvalidFilter](#schemainvalidfilter)|
|483|483|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|484|484|InvalidTypeNameException|[InvalidTypeNameException](#schemainvalidtypenameexception)|
|485|485|InvalidAggregatorException|[InvalidAggregatorException](#schemainvalidaggregatorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetParameter

<a id="opIdGetParameter"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetParameter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetParameter' \
  -d '{
    "Name": {},
    "WithDecryption": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetParameter`

<p>Get information about a single parameter by specifying the parameter name.</p> <note> <p>To get information about more than one parameter at a time, use the <a>GetParameters</a> operation.</p> </note>

> Body parameter

```json
{
  "Name": {},
  "WithDecryption": {}
}
```

<h3 id="getparameter-parameters">Parameters</h3>

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
|body|body|[GetParameterRequest](#schemagetparameterrequest)|true|none|
|» Name|body|object|true|none|
|» WithDecryption|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetParameter|

> Example responses

> 200 Response

```json
{
  "Parameter": {
    "Name": {},
    "Type": {},
    "Value": {},
    "Version": {},
    "Selector": {},
    "SourceResult": {},
    "LastModifiedDate": {},
    "ARN": {},
    "DataType": {}
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

<h3 id="getparameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetParameterResult](#schemagetparameterresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidKeyId|[InvalidKeyId](#schemainvalidkeyid)|
|482|482|ParameterNotFound|[ParameterNotFound](#schemaparameternotfound)|
|483|483|ParameterVersionNotFound|[ParameterVersionNotFound](#schemaparameterversionnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetParameterHistory

<a id="opIdGetParameterHistory"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetParameterHistory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetParameterHistory' \
  -d '{
    "Name": {},
    "WithDecryption": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetParameterHistory`

<p>Retrieves the history of all changes to a parameter.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>GetParameterHistory</code> retrieves whatever the original key alias was referencing.</p> </important>

> Body parameter

```json
{
  "Name": {},
  "WithDecryption": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="getparameterhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetParameterHistoryRequest](#schemagetparameterhistoryrequest)|true|none|
|» Name|body|object|true|none|
|» WithDecryption|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetParameterHistory|

> Example responses

> 200 Response

```json
{
  "Parameters": {},
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

<h3 id="getparameterhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetParameterHistoryResult](#schemagetparameterhistoryresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ParameterNotFound|[ParameterNotFound](#schemaparameternotfound)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|483|483|InvalidKeyId|[InvalidKeyId](#schemainvalidkeyid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetParameters

<a id="opIdGetParameters"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetParameters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetParameters' \
  -d '{
    "Names": {},
    "WithDecryption": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetParameters`

<p>Get information about one or more parameters by specifying multiple parameter names.</p> <note> <p>To get information about a single parameter, you can use the <a>GetParameter</a> operation instead.</p> </note>

> Body parameter

```json
{
  "Names": {},
  "WithDecryption": {}
}
```

<h3 id="getparameters-parameters">Parameters</h3>

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
|body|body|[GetParametersRequest](#schemagetparametersrequest)|true|none|
|» Names|body|object|true|none|
|» WithDecryption|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetParameters|

> Example responses

> 200 Response

```json
{
  "Parameters": {},
  "InvalidParameters": {}
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

<h3 id="getparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetParametersResult](#schemagetparametersresult)|
|480|480|InvalidKeyId|[InvalidKeyId](#schemainvalidkeyid)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetParametersByPath

<a id="opIdGetParametersByPath"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetParametersByPath' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetParametersByPath' \
  -d '{
    "Path": {},
    "Recursive": {},
    "ParameterFilters": {},
    "WithDecryption": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetParametersByPath`

<p>Retrieve information about one or more parameters in a specific hierarchy. </p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p>

> Body parameter

```json
{
  "Path": {},
  "Recursive": {},
  "ParameterFilters": {},
  "WithDecryption": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="getparametersbypath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetParametersByPathRequest](#schemagetparametersbypathrequest)|true|none|
|» Path|body|object|true|none|
|» Recursive|body|object|false|none|
|» ParameterFilters|body|object|false|none|
|» WithDecryption|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetParametersByPath|

> Example responses

> 200 Response

```json
{
  "Parameters": {},
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

<h3 id="getparametersbypath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetParametersByPathResult](#schemagetparametersbypathresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidFilterKey|[InvalidFilterKey](#schemainvalidfilterkey)|
|482|482|InvalidFilterOption|[InvalidFilterOption](#schemainvalidfilteroption)|
|483|483|InvalidFilterValue|[InvalidFilterValue](#schemainvalidfiltervalue)|
|484|484|InvalidKeyId|[InvalidKeyId](#schemainvalidkeyid)|
|485|485|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPatchBaseline

<a id="opIdGetPatchBaseline"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetPatchBaseline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetPatchBaseline' \
  -d '{
    "BaselineId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetPatchBaseline`

Retrieves information about a patch baseline.

> Body parameter

```json
{
  "BaselineId": {}
}
```

<h3 id="getpatchbaseline-parameters">Parameters</h3>

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
|body|body|[GetPatchBaselineRequest](#schemagetpatchbaselinerequest)|true|none|
|» BaselineId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetPatchBaseline|

> Example responses

> 200 Response

```json
{
  "BaselineId": {},
  "Name": {},
  "OperatingSystem": {},
  "GlobalFilters": {
    "PatchFilters": {}
  },
  "ApprovalRules": {
    "PatchRules": {}
  },
  "ApprovedPatches": {},
  "ApprovedPatchesComplianceLevel": {},
  "ApprovedPatchesEnableNonSecurity": {},
  "RejectedPatches": {},
  "RejectedPatchesAction": {},
  "PatchGroups": {},
  "CreatedDate": {},
  "ModifiedDate": {},
  "Description": {},
  "Sources": {}
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

<h3 id="getpatchbaseline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPatchBaselineResult](#schemagetpatchbaselineresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InvalidResourceId|[InvalidResourceId](#schemainvalidresourceid)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPatchBaselineForPatchGroup

<a id="opIdGetPatchBaselineForPatchGroup"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetPatchBaselineForPatchGroup' \
  -d '{
    "PatchGroup": {},
    "OperatingSystem": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup`

Retrieves the patch baseline that should be used for the specified patch group.

> Body parameter

```json
{
  "PatchGroup": {},
  "OperatingSystem": {}
}
```

<h3 id="getpatchbaselineforpatchgroup-parameters">Parameters</h3>

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
|body|body|[GetPatchBaselineForPatchGroupRequest](#schemagetpatchbaselineforpatchgrouprequest)|true|none|
|» PatchGroup|body|object|true|none|
|» OperatingSystem|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetPatchBaselineForPatchGroup|

> Example responses

> 200 Response

```json
{
  "BaselineId": {},
  "PatchGroup": {},
  "OperatingSystem": {}
}
```

> 480 Response

```json
null
```

<h3 id="getpatchbaselineforpatchgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPatchBaselineForPatchGroupResult](#schemagetpatchbaselineforpatchgroupresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourcePolicies

<a id="opIdGetResourcePolicies"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetResourcePolicies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetResourcePolicies' \
  -d '{
    "ResourceArn": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetResourcePolicies`

Returns an array of the <code>Policy</code> object.

> Body parameter

```json
{
  "ResourceArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="getresourcepolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetResourcePoliciesRequest](#schemagetresourcepoliciesrequest)|true|none|
|» ResourceArn|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetResourcePolicies|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Policies": {}
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

<h3 id="getresourcepolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourcePoliciesResponse](#schemagetresourcepoliciesresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ResourcePolicyInvalidParameterException|[ResourcePolicyInvalidParameterException](#schemaresourcepolicyinvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceSetting

<a id="opIdGetServiceSetting"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.GetServiceSetting' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.GetServiceSetting' \
  -d '{
    "SettingId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.GetServiceSetting`

<p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of <code>false</code>. This means the user can't use this feature unless they change the setting to <code>true</code> and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Query the current service setting for the Amazon Web Services account. </p>

> Body parameter

```json
{
  "SettingId": {}
}
```

<h3 id="getservicesetting-parameters">Parameters</h3>

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
|body|body|[GetServiceSettingRequest](#schemagetservicesettingrequest)|true|none|
|» SettingId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.GetServiceSetting|

> Example responses

> 200 Response

```json
{
  "ServiceSetting": {
    "SettingId": {},
    "SettingValue": {},
    "LastModifiedDate": {},
    "LastModifiedUser": {},
    "ARN": {},
    "Status": {}
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

<h3 id="getservicesetting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceSettingResult](#schemagetservicesettingresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ServiceSettingNotFound|[ServiceSettingNotFound](#schemaservicesettingnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## LabelParameterVersion

<a id="opIdLabelParameterVersion"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.LabelParameterVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.LabelParameterVersion' \
  -d '{
    "Name": {},
    "ParameterVersion": {},
    "Labels": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.LabelParameterVersion`

<p>A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions. </p> <p>Parameter labels have the following requirements and restrictions.</p> <ul> <li> <p>A version of a parameter can have a maximum of 10 labels.</p> </li> <li> <p>You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.</p> </li> <li> <p>You can move a label from one version of a parameter to another.</p> </li> <li> <p>You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.</p> </li> <li> <p>If you no longer want to use a parameter label, then you can either delete it or move it to a different version of a parameter.</p> </li> <li> <p>A label can have a maximum of 100 characters.</p> </li> <li> <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).</p> </li> <li> <p>Labels can't begin with a number, "<code>aws</code>" or "<code>ssm</code>" (not case sensitive). If a label fails to meet these requirements, then the label isn't associated with a parameter and the system displays it in the list of InvalidLabels.</p> </li> </ul>

> Body parameter

```json
{
  "Name": {},
  "ParameterVersion": {},
  "Labels": {}
}
```

<h3 id="labelparameterversion-parameters">Parameters</h3>

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
|body|body|[LabelParameterVersionRequest](#schemalabelparameterversionrequest)|true|none|
|» Name|body|object|true|none|
|» ParameterVersion|body|object|false|none|
|» Labels|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.LabelParameterVersion|

> Example responses

> 200 Response

```json
{
  "InvalidLabels": {},
  "ParameterVersion": {}
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

<h3 id="labelparameterversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LabelParameterVersionResult](#schemalabelparameterversionresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|TooManyUpdates|[TooManyUpdates](#schematoomanyupdates)|
|482|482|ParameterNotFound|[ParameterNotFound](#schemaparameternotfound)|
|483|483|ParameterVersionNotFound|[ParameterVersionNotFound](#schemaparameterversionnotfound)|
|484|484|ParameterVersionLabelLimitExceeded|[ParameterVersionLabelLimitExceeded](#schemaparameterversionlabellimitexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssociationVersions

<a id="opIdListAssociationVersions"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListAssociationVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListAssociationVersions' \
  -d '{
    "AssociationId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListAssociationVersions`

Retrieves all versions of an association for a specific association ID.

> Body parameter

```json
{
  "AssociationId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listassociationversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListAssociationVersionsRequest](#schemalistassociationversionsrequest)|true|none|
|» AssociationId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListAssociationVersions|

> Example responses

> 200 Response

```json
{
  "AssociationVersions": {},
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

<h3 id="listassociationversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssociationVersionsResult](#schemalistassociationversionsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|482|482|AssociationDoesNotExist|[AssociationDoesNotExist](#schemaassociationdoesnotexist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssociations

<a id="opIdListAssociations"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListAssociations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListAssociations' \
  -d '{
    "AssociationFilterList": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListAssociations`

Returns all State Manager associations in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results to a specific State Manager association document or managed node by specifying a filter. State Manager is a capability of Amazon Web Services Systems Manager.

> Body parameter

```json
{
  "AssociationFilterList": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListAssociationsRequest](#schemalistassociationsrequest)|true|none|
|» AssociationFilterList|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListAssociations|

> Example responses

> 200 Response

```json
{
  "Associations": {},
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

<h3 id="listassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssociationsResult](#schemalistassociationsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCommandInvocations

<a id="opIdListCommandInvocations"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListCommandInvocations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListCommandInvocations' \
  -d '{
    "CommandId": {},
    "InstanceId": {},
    "MaxResults": {},
    "NextToken": {},
    "Filters": {},
    "Details": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListCommandInvocations`

An invocation is copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs <code>SendCommand</code> against three managed nodes, then a command invocation is created for each requested managed node ID. <code>ListCommandInvocations</code> provide status about command execution.

> Body parameter

```json
{
  "CommandId": {},
  "InstanceId": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {},
  "Details": {}
}
```

<h3 id="listcommandinvocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCommandInvocationsRequest](#schemalistcommandinvocationsrequest)|true|none|
|» CommandId|body|object|false|none|
|» InstanceId|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|
|» Details|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListCommandInvocations|

> Example responses

> 200 Response

```json
{
  "CommandInvocations": {},
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

<h3 id="listcommandinvocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCommandInvocationsResult](#schemalistcommandinvocationsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidCommandId|[InvalidCommandId](#schemainvalidcommandid)|
|482|482|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|483|483|InvalidFilterKey|[InvalidFilterKey](#schemainvalidfilterkey)|
|484|484|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCommands

<a id="opIdListCommands"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListCommands' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListCommands' \
  -d '{
    "CommandId": {},
    "InstanceId": {},
    "MaxResults": {},
    "NextToken": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListCommands`

Lists the commands requested by users of the Amazon Web Services account.

> Body parameter

```json
{
  "CommandId": {},
  "InstanceId": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

<h3 id="listcommands-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCommandsRequest](#schemalistcommandsrequest)|true|none|
|» CommandId|body|object|false|none|
|» InstanceId|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListCommands|

> Example responses

> 200 Response

```json
{
  "Commands": {},
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

<h3 id="listcommands-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCommandsResult](#schemalistcommandsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidCommandId|[InvalidCommandId](#schemainvalidcommandid)|
|482|482|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|483|483|InvalidFilterKey|[InvalidFilterKey](#schemainvalidfilterkey)|
|484|484|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListComplianceItems

<a id="opIdListComplianceItems"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListComplianceItems' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListComplianceItems' \
  -d '{
    "Filters": {},
    "ResourceIds": {},
    "ResourceTypes": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListComplianceItems`

For a specified resource ID, this API operation returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.

> Body parameter

```json
{
  "Filters": {},
  "ResourceIds": {},
  "ResourceTypes": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listcomplianceitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListComplianceItemsRequest](#schemalistcomplianceitemsrequest)|true|none|
|» Filters|body|object|false|none|
|» ResourceIds|body|object|false|none|
|» ResourceTypes|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListComplianceItems|

> Example responses

> 200 Response

```json
{
  "ComplianceItems": {},
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

<h3 id="listcomplianceitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListComplianceItemsResult](#schemalistcomplianceitemsresult)|
|480|480|InvalidResourceType|[InvalidResourceType](#schemainvalidresourcetype)|
|481|481|InvalidResourceId|[InvalidResourceId](#schemainvalidresourceid)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|InvalidFilter|[InvalidFilter](#schemainvalidfilter)|
|484|484|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListComplianceSummaries

<a id="opIdListComplianceSummaries"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListComplianceSummaries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListComplianceSummaries' \
  -d '{
    "Filters": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListComplianceSummaries`

Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify.

> Body parameter

```json
{
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listcompliancesummaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListComplianceSummariesRequest](#schemalistcompliancesummariesrequest)|true|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListComplianceSummaries|

> Example responses

> 200 Response

```json
{
  "ComplianceSummaryItems": {},
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

<h3 id="listcompliancesummaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListComplianceSummariesResult](#schemalistcompliancesummariesresult)|
|480|480|InvalidFilter|[InvalidFilter](#schemainvalidfilter)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDocumentMetadataHistory

<a id="opIdListDocumentMetadataHistory"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListDocumentMetadataHistory' \
  -d '{
    "Name": {},
    "DocumentVersion": {},
    "Metadata": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory`

Information about approval reviews for a version of a change template in Change Manager.

> Body parameter

```json
{
  "Name": {},
  "DocumentVersion": {},
  "Metadata": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdocumentmetadatahistory-parameters">Parameters</h3>

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
|body|body|[ListDocumentMetadataHistoryRequest](#schemalistdocumentmetadatahistoryrequest)|true|none|
|» Name|body|object|true|none|
|» DocumentVersion|body|object|false|none|
|» Metadata|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListDocumentMetadataHistory|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "DocumentVersion": {},
  "Author": {},
  "Metadata": {
    "ReviewerResponse": {}
  },
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

<h3 id="listdocumentmetadatahistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDocumentMetadataHistoryResponse](#schemalistdocumentmetadatahistoryresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|482|482|InvalidDocumentVersion|[InvalidDocumentVersion](#schemainvaliddocumentversion)|
|483|483|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDocumentVersions

<a id="opIdListDocumentVersions"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListDocumentVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListDocumentVersions' \
  -d '{
    "Name": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListDocumentVersions`

List all versions for a document.

> Body parameter

```json
{
  "Name": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listdocumentversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDocumentVersionsRequest](#schemalistdocumentversionsrequest)|true|none|
|» Name|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListDocumentVersions|

> Example responses

> 200 Response

```json
{
  "DocumentVersions": {},
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

<h3 id="listdocumentversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDocumentVersionsResult](#schemalistdocumentversionsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|482|482|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDocuments

<a id="opIdListDocuments"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListDocuments' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListDocuments' \
  -d '{
    "DocumentFilterList": {},
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListDocuments`

Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results of this request by using a filter.

> Body parameter

```json
{
  "DocumentFilterList": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listdocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDocumentsRequest](#schemalistdocumentsrequest)|true|none|
|» DocumentFilterList|body|object|false|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListDocuments|

> Example responses

> 200 Response

```json
{
  "DocumentIdentifiers": {},
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

<h3 id="listdocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDocumentsResult](#schemalistdocumentsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|482|482|InvalidFilterKey|[InvalidFilterKey](#schemainvalidfilterkey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInventoryEntries

<a id="opIdListInventoryEntries"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListInventoryEntries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListInventoryEntries' \
  -d '{
    "InstanceId": {},
    "TypeName": {},
    "Filters": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListInventoryEntries`

A list of inventory items returned by the request.

> Body parameter

```json
{
  "InstanceId": {},
  "TypeName": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listinventoryentries-parameters">Parameters</h3>

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
|body|body|[ListInventoryEntriesRequest](#schemalistinventoryentriesrequest)|true|none|
|» InstanceId|body|object|true|none|
|» TypeName|body|object|true|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListInventoryEntries|

> Example responses

> 200 Response

```json
{
  "TypeName": {},
  "InstanceId": {},
  "SchemaVersion": {},
  "CaptureTime": {},
  "Entries": {},
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

<h3 id="listinventoryentries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInventoryEntriesResult](#schemalistinventoryentriesresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|482|482|InvalidTypeNameException|[InvalidTypeNameException](#schemainvalidtypenameexception)|
|483|483|InvalidFilter|[InvalidFilter](#schemainvalidfilter)|
|484|484|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOpsItemEvents

<a id="opIdListOpsItemEvents"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListOpsItemEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListOpsItemEvents' \
  -d '{
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListOpsItemEvents`

Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can limit the results to events associated with specific OpsItems by specifying a filter.

> Body parameter

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listopsitemevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListOpsItemEventsRequest](#schemalistopsitemeventsrequest)|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListOpsItemEvents|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Summaries": {}
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

<h3 id="listopsitemevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOpsItemEventsResponse](#schemalistopsitemeventsresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|OpsItemNotFoundException|[OpsItemNotFoundException](#schemaopsitemnotfoundexception)|
|482|482|OpsItemLimitExceededException|[OpsItemLimitExceededException](#schemaopsitemlimitexceededexception)|
|483|483|OpsItemInvalidParameterException|[OpsItemInvalidParameterException](#schemaopsiteminvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOpsItemRelatedItems

<a id="opIdListOpsItemRelatedItems"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListOpsItemRelatedItems' \
  -d '{
    "OpsItemId": {},
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems`

Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a capability of Amazon Web Services Systems Manager.

> Body parameter

```json
{
  "OpsItemId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listopsitemrelateditems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListOpsItemRelatedItemsRequest](#schemalistopsitemrelateditemsrequest)|true|none|
|» OpsItemId|body|object|false|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListOpsItemRelatedItems|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Summaries": {}
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

<h3 id="listopsitemrelateditems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOpsItemRelatedItemsResponse](#schemalistopsitemrelateditemsresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|OpsItemInvalidParameterException|[OpsItemInvalidParameterException](#schemaopsiteminvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOpsMetadata

<a id="opIdListOpsMetadata"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListOpsMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListOpsMetadata' \
  -d '{
    "Filters": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListOpsMetadata`

Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or blobs.

> Body parameter

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listopsmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListOpsMetadataRequest](#schemalistopsmetadatarequest)|true|none|
|» Filters|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListOpsMetadata|

> Example responses

> 200 Response

```json
{
  "OpsMetadataList": {},
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

<h3 id="listopsmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOpsMetadataResult](#schemalistopsmetadataresult)|
|480|480|OpsMetadataInvalidArgumentException|[OpsMetadataInvalidArgumentException](#schemaopsmetadatainvalidargumentexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceComplianceSummaries

<a id="opIdListResourceComplianceSummaries"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListResourceComplianceSummaries' \
  -d '{
    "Filters": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries`

Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.

> Body parameter

```json
{
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listresourcecompliancesummaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListResourceComplianceSummariesRequest](#schemalistresourcecompliancesummariesrequest)|true|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListResourceComplianceSummaries|

> Example responses

> 200 Response

```json
{
  "ResourceComplianceSummaryItems": {},
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

<h3 id="listresourcecompliancesummaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceComplianceSummariesResult](#schemalistresourcecompliancesummariesresult)|
|480|480|InvalidFilter|[InvalidFilter](#schemainvalidfilter)|
|481|481|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceDataSync

<a id="opIdListResourceDataSync"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListResourceDataSync' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListResourceDataSync' \
  -d '{
    "SyncType": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListResourceDataSync`

<p>Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed.</p> <p>The number of sync configurations might be too large to return using a single call to <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by using the <code>MaxResults</code> parameter. To determine whether there are more sync configurations to list, check the value of <code>NextToken</code> in the output. If there are more sync configurations to list, you can request them by specifying the <code>NextToken</code> returned in the call to the parameter of a subsequent call. </p>

> Body parameter

```json
{
  "SyncType": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listresourcedatasync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListResourceDataSyncRequest](#schemalistresourcedatasyncrequest)|true|none|
|» SyncType|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListResourceDataSync|

> Example responses

> 200 Response

```json
{
  "ResourceDataSyncItems": {},
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

<h3 id="listresourcedatasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceDataSyncResult](#schemalistresourcedatasyncresult)|
|480|480|ResourceDataSyncInvalidConfigurationException|[ResourceDataSyncInvalidConfigurationException](#schemaresourcedatasyncinvalidconfigurationexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ListTagsForResource' \
  -d '{
    "ResourceType": {},
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ListTagsForResource`

<p>Returns a list of the tags assigned to the specified resource.</p> <p>For information about the ID format for each supported resource type, see <a>AddTagsToResource</a>.</p>

> Body parameter

```json
{
  "ResourceType": {},
  "ResourceId": {}
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
|» ResourceType|body|object|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "TagList": {}
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
|200|OK|Success|[ListTagsForResourceResult](#schemalisttagsforresourceresult)|
|480|480|InvalidResourceType|[InvalidResourceType](#schemainvalidresourcetype)|
|481|481|InvalidResourceId|[InvalidResourceId](#schemainvalidresourceid)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyDocumentPermission

<a id="opIdModifyDocumentPermission"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ModifyDocumentPermission' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ModifyDocumentPermission' \
  -d '{
    "Name": {},
    "PermissionType": {},
    "AccountIdsToAdd": {},
    "AccountIdsToRemove": {},
    "SharedDocumentVersion": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ModifyDocumentPermission`

Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document privately, you must specify the Amazon Web Services user IDs for those people who can use the document. If you share a document publicly, you must specify <i>All</i> as the account ID.

> Body parameter

```json
{
  "Name": {},
  "PermissionType": {},
  "AccountIdsToAdd": {},
  "AccountIdsToRemove": {},
  "SharedDocumentVersion": {}
}
```

<h3 id="modifydocumentpermission-parameters">Parameters</h3>

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
|body|body|[ModifyDocumentPermissionRequest](#schemamodifydocumentpermissionrequest)|true|none|
|» Name|body|object|true|none|
|» PermissionType|body|object|true|none|
|» AccountIdsToAdd|body|object|false|none|
|» AccountIdsToRemove|body|object|false|none|
|» SharedDocumentVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ModifyDocumentPermission|

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

<h3 id="modifydocumentpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyDocumentPermissionResponse](#schemamodifydocumentpermissionresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|482|482|InvalidPermissionType|[InvalidPermissionType](#schemainvalidpermissiontype)|
|483|483|DocumentPermissionLimit|[DocumentPermissionLimit](#schemadocumentpermissionlimit)|
|484|484|DocumentLimitExceeded|[DocumentLimitExceeded](#schemadocumentlimitexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutComplianceItems

<a id="opIdPutComplianceItems"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.PutComplianceItems' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.PutComplianceItems' \
  -d '{
    "ResourceId": {},
    "ResourceType": {},
    "ComplianceType": {},
    "ExecutionSummary": {
      "ExecutionTime": {},
      "ExecutionId": {},
      "ExecutionType": {}
    },
    "Items": {},
    "ItemContentHash": {},
    "UploadType": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.PutComplianceItems`

<p>Registers a compliance type and other compliance details on a designated resource. This operation lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request.</p> <p>ComplianceType can be one of the following:</p> <ul> <li> <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.</p> </li> <li> <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p> </li> <li> <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to the managed node.</p> </li> <li> <p>Id: The patch, association, or custom compliance ID.</p> </li> <li> <p>Title: A title.</p> </li> <li> <p>Status: The status of the compliance item. For example, <code>approved</code> for patches, or <code>Failed</code> for associations.</p> </li> <li> <p>Severity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>DocumentName: An SSM document name. For example, <code>AWS-RunPatchBaseline</code>.</p> </li> <li> <p>DocumentVersion: An SSM document version number. For example, 4.</p> </li> <li> <p>Classification: A patch classification. For example, <code>security updates</code>.</p> </li> <li> <p>PatchBaselineId: A patch baseline ID.</p> </li> <li> <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p> </li> <li> <p>PatchGroup: The name of a patch group.</p> </li> <li> <p>InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p> </li> </ul>

> Body parameter

```json
{
  "ResourceId": {},
  "ResourceType": {},
  "ComplianceType": {},
  "ExecutionSummary": {
    "ExecutionTime": {},
    "ExecutionId": {},
    "ExecutionType": {}
  },
  "Items": {},
  "ItemContentHash": {},
  "UploadType": {}
}
```

<h3 id="putcomplianceitems-parameters">Parameters</h3>

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
|body|body|[PutComplianceItemsRequest](#schemaputcomplianceitemsrequest)|true|none|
|» ResourceId|body|object|true|none|
|» ResourceType|body|object|true|none|
|» ComplianceType|body|object|true|none|
|» ExecutionSummary|body|object|true|none|
|» » ExecutionTime|body|object|true|none|
|» » ExecutionId|body|object|false|none|
|» » ExecutionType|body|object|false|none|
|» Items|body|object|true|none|
|» ItemContentHash|body|object|false|none|
|» UploadType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.PutComplianceItems|

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

<h3 id="putcomplianceitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutComplianceItemsResult](#schemaputcomplianceitemsresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidItemContentException|[InvalidItemContentException](#schemainvaliditemcontentexception)|
|482|482|TotalSizeLimitExceededException|[TotalSizeLimitExceededException](#schematotalsizelimitexceededexception)|
|483|483|ItemSizeLimitExceededException|[ItemSizeLimitExceededException](#schemaitemsizelimitexceededexception)|
|484|484|ComplianceTypeCountLimitExceededException|[ComplianceTypeCountLimitExceededException](#schemacompliancetypecountlimitexceededexception)|
|485|485|InvalidResourceType|[InvalidResourceType](#schemainvalidresourcetype)|
|486|486|InvalidResourceId|[InvalidResourceId](#schemainvalidresourceid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutInventory

<a id="opIdPutInventory"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.PutInventory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.PutInventory' \
  -d '{
    "InstanceId": {},
    "Items": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.PutInventory`

Bulk update custom inventory items on one or more managed nodes. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.

> Body parameter

```json
{
  "InstanceId": {},
  "Items": {}
}
```

<h3 id="putinventory-parameters">Parameters</h3>

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
|body|body|[PutInventoryRequest](#schemaputinventoryrequest)|true|none|
|» InstanceId|body|object|true|none|
|» Items|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.PutInventory|

> Example responses

> 200 Response

```json
{
  "Message": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="putinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutInventoryResult](#schemaputinventoryresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|482|482|InvalidTypeNameException|[InvalidTypeNameException](#schemainvalidtypenameexception)|
|483|483|InvalidItemContentException|[InvalidItemContentException](#schemainvaliditemcontentexception)|
|484|484|TotalSizeLimitExceededException|[TotalSizeLimitExceededException](#schematotalsizelimitexceededexception)|
|485|485|ItemSizeLimitExceededException|[ItemSizeLimitExceededException](#schemaitemsizelimitexceededexception)|
|486|486|ItemContentMismatchException|[ItemContentMismatchException](#schemaitemcontentmismatchexception)|
|487|487|CustomSchemaCountLimitExceededException|[CustomSchemaCountLimitExceededException](#schemacustomschemacountlimitexceededexception)|
|488|488|UnsupportedInventorySchemaVersionException|[UnsupportedInventorySchemaVersionException](#schemaunsupportedinventoryschemaversionexception)|
|489|489|UnsupportedInventoryItemContextException|[UnsupportedInventoryItemContextException](#schemaunsupportedinventoryitemcontextexception)|
|490|490|InvalidInventoryItemContextException|[InvalidInventoryItemContextException](#schemainvalidinventoryitemcontextexception)|
|491|491|SubTypeCountLimitExceededException|[SubTypeCountLimitExceededException](#schemasubtypecountlimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutParameter

<a id="opIdPutParameter"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.PutParameter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.PutParameter' \
  -d '{
    "Name": {},
    "Description": {},
    "Value": {},
    "Type": {},
    "KeyId": {},
    "Overwrite": {},
    "AllowedPattern": {},
    "Tags": {},
    "Tier": {},
    "Policies": {},
    "DataType": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.PutParameter`

Add a parameter to the system.

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "Value": {},
  "Type": {},
  "KeyId": {},
  "Overwrite": {},
  "AllowedPattern": {},
  "Tags": {},
  "Tier": {},
  "Policies": {},
  "DataType": {}
}
```

<h3 id="putparameter-parameters">Parameters</h3>

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
|body|body|[PutParameterRequest](#schemaputparameterrequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» Value|body|object|true|none|
|» Type|body|object|false|none|
|» KeyId|body|object|false|none|
|» Overwrite|body|object|false|none|
|» AllowedPattern|body|object|false|none|
|» Tags|body|object|false|none|
|» Tier|body|object|false|none|
|» Policies|body|object|false|none|
|» DataType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.PutParameter|

> Example responses

> 200 Response

```json
{
  "Version": {},
  "Tier": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

<h3 id="putparameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutParameterResult](#schemaputparameterresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidKeyId|[InvalidKeyId](#schemainvalidkeyid)|
|482|482|ParameterLimitExceeded|[ParameterLimitExceeded](#schemaparameterlimitexceeded)|
|483|483|TooManyUpdates|[TooManyUpdates](#schematoomanyupdates)|
|484|484|ParameterAlreadyExists|[ParameterAlreadyExists](#schemaparameteralreadyexists)|
|485|485|HierarchyLevelLimitExceededException|[HierarchyLevelLimitExceededException](#schemahierarchylevellimitexceededexception)|
|486|486|HierarchyTypeMismatchException|[HierarchyTypeMismatchException](#schemahierarchytypemismatchexception)|
|487|487|InvalidAllowedPatternException|[InvalidAllowedPatternException](#schemainvalidallowedpatternexception)|
|488|488|ParameterMaxVersionLimitExceeded|[ParameterMaxVersionLimitExceeded](#schemaparametermaxversionlimitexceeded)|
|489|489|ParameterPatternMismatchException|[ParameterPatternMismatchException](#schemaparameterpatternmismatchexception)|
|490|490|UnsupportedParameterType|[UnsupportedParameterType](#schemaunsupportedparametertype)|
|491|491|PoliciesLimitExceededException|[PoliciesLimitExceededException](#schemapolicieslimitexceededexception)|
|492|492|InvalidPolicyTypeException|[InvalidPolicyTypeException](#schemainvalidpolicytypeexception)|
|493|493|InvalidPolicyAttributeException|[InvalidPolicyAttributeException](#schemainvalidpolicyattributeexception)|
|494|494|IncompatiblePolicyException|[IncompatiblePolicyException](#schemaincompatiblepolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourcePolicy

<a id="opIdPutResourcePolicy"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.PutResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.PutResourcePolicy' \
  -d '{
    "ResourceArn": {},
    "Policy": {},
    "PolicyId": {},
    "PolicyHash": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.PutResourcePolicy`

Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).

> Body parameter

```json
{
  "ResourceArn": {},
  "Policy": {},
  "PolicyId": {},
  "PolicyHash": {}
}
```

<h3 id="putresourcepolicy-parameters">Parameters</h3>

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
|body|body|[PutResourcePolicyRequest](#schemaputresourcepolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|
|» Policy|body|object|true|none|
|» PolicyId|body|object|false|none|
|» PolicyHash|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.PutResourcePolicy|

> Example responses

> 200 Response

```json
{
  "PolicyId": {},
  "PolicyHash": {}
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

<h3 id="putresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourcePolicyResponse](#schemaputresourcepolicyresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ResourcePolicyInvalidParameterException|[ResourcePolicyInvalidParameterException](#schemaresourcepolicyinvalidparameterexception)|
|482|482|ResourcePolicyLimitExceededException|[ResourcePolicyLimitExceededException](#schemaresourcepolicylimitexceededexception)|
|483|483|ResourcePolicyConflictException|[ResourcePolicyConflictException](#schemaresourcepolicyconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterDefaultPatchBaseline

<a id="opIdRegisterDefaultPatchBaseline"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.RegisterDefaultPatchBaseline' \
  -d '{
    "BaselineId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline`

<p>Defines the default patch baseline for the relevant operating system.</p> <p>To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of <code>pb-0574b43a65ea646ed</code>.</p>

> Body parameter

```json
{
  "BaselineId": {}
}
```

<h3 id="registerdefaultpatchbaseline-parameters">Parameters</h3>

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
|body|body|[RegisterDefaultPatchBaselineRequest](#schemaregisterdefaultpatchbaselinerequest)|true|none|
|» BaselineId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.RegisterDefaultPatchBaseline|

> Example responses

> 200 Response

```json
{
  "BaselineId": {}
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

<h3 id="registerdefaultpatchbaseline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterDefaultPatchBaselineResult](#schemaregisterdefaultpatchbaselineresult)|
|480|480|InvalidResourceId|[InvalidResourceId](#schemainvalidresourceid)|
|481|481|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterPatchBaselineForPatchGroup

<a id="opIdRegisterPatchBaselineForPatchGroup"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.RegisterPatchBaselineForPatchGroup' \
  -d '{
    "BaselineId": {},
    "PatchGroup": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup`

Registers a patch baseline for a patch group.

> Body parameter

```json
{
  "BaselineId": {},
  "PatchGroup": {}
}
```

<h3 id="registerpatchbaselineforpatchgroup-parameters">Parameters</h3>

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
|body|body|[RegisterPatchBaselineForPatchGroupRequest](#schemaregisterpatchbaselineforpatchgrouprequest)|true|none|
|» BaselineId|body|object|true|none|
|» PatchGroup|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.RegisterPatchBaselineForPatchGroup|

> Example responses

> 200 Response

```json
{
  "BaselineId": {},
  "PatchGroup": {}
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

<h3 id="registerpatchbaselineforpatchgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterPatchBaselineForPatchGroupResult](#schemaregisterpatchbaselineforpatchgroupresult)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|482|482|InvalidResourceId|[InvalidResourceId](#schemainvalidresourceid)|
|483|483|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterTargetWithMaintenanceWindow

<a id="opIdRegisterTargetWithMaintenanceWindow"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.RegisterTargetWithMaintenanceWindow' \
  -d '{
    "WindowId": {},
    "ResourceType": {},
    "Targets": {},
    "OwnerInformation": {},
    "Name": {},
    "Description": {},
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow`

Registers a target with a maintenance window.

> Body parameter

```json
{
  "WindowId": {},
  "ResourceType": {},
  "Targets": {},
  "OwnerInformation": {},
  "Name": {},
  "Description": {},
  "ClientToken": {}
}
```

<h3 id="registertargetwithmaintenancewindow-parameters">Parameters</h3>

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
|body|body|[RegisterTargetWithMaintenanceWindowRequest](#schemaregistertargetwithmaintenancewindowrequest)|true|none|
|» WindowId|body|object|true|none|
|» ResourceType|body|object|true|none|
|» Targets|body|object|true|none|
|» OwnerInformation|body|object|false|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» ClientToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.RegisterTargetWithMaintenanceWindow|

> Example responses

> 200 Response

```json
{
  "WindowTargetId": {}
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

<h3 id="registertargetwithmaintenancewindow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterTargetWithMaintenanceWindowResult](#schemaregistertargetwithmaintenancewindowresult)|
|480|480|IdempotentParameterMismatch|[IdempotentParameterMismatch](#schemaidempotentparametermismatch)|
|481|481|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterTaskWithMaintenanceWindow

<a id="opIdRegisterTaskWithMaintenanceWindow"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.RegisterTaskWithMaintenanceWindow' \
  -d '{
    "WindowId": {},
    "Targets": {},
    "TaskArn": {},
    "ServiceRoleArn": {},
    "TaskType": {},
    "TaskParameters": {
      "property1": {
        "Values": {}
      },
      "property2": {
        "Values": {}
      }
    },
    "TaskInvocationParameters": {
      "RunCommand": {
        "Comment": {},
        "CloudWatchOutputConfig": {
          "CloudWatchLogGroupName": {},
          "CloudWatchOutputEnabled": {}
        },
        "DocumentHash": {},
        "DocumentHashType": {},
        "DocumentVersion": {},
        "NotificationConfig": {
          "NotificationArn": {},
          "NotificationEvents": {},
          "NotificationType": {}
        },
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {},
        "Parameters": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "ServiceRoleArn": {},
        "TimeoutSeconds": {}
      },
      "Automation": {
        "DocumentVersion": {},
        "Parameters": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        }
      },
      "StepFunctions": {
        "Input": {},
        "Name": {}
      },
      "Lambda": {
        "ClientContext": {},
        "Qualifier": {},
        "Payload": {}
      }
    },
    "Priority": {},
    "MaxConcurrency": {},
    "MaxErrors": {},
    "LoggingInfo": {
      "S3BucketName": {},
      "S3KeyPrefix": {},
      "S3Region": {}
    },
    "Name": {},
    "Description": {},
    "ClientToken": {},
    "CutoffBehavior": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow`

Adds a new task to a maintenance window.

> Body parameter

```json
{
  "WindowId": {},
  "Targets": {},
  "TaskArn": {},
  "ServiceRoleArn": {},
  "TaskType": {},
  "TaskParameters": {
    "property1": {
      "Values": {}
    },
    "property2": {
      "Values": {}
    }
  },
  "TaskInvocationParameters": {
    "RunCommand": {
      "Comment": {},
      "CloudWatchOutputConfig": {
        "CloudWatchLogGroupName": {},
        "CloudWatchOutputEnabled": {}
      },
      "DocumentHash": {},
      "DocumentHashType": {},
      "DocumentVersion": {},
      "NotificationConfig": {
        "NotificationArn": {},
        "NotificationEvents": {},
        "NotificationType": {}
      },
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "ServiceRoleArn": {},
      "TimeoutSeconds": {}
    },
    "Automation": {
      "DocumentVersion": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "StepFunctions": {
      "Input": {},
      "Name": {}
    },
    "Lambda": {
      "ClientContext": {},
      "Qualifier": {},
      "Payload": {}
    }
  },
  "Priority": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "LoggingInfo": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "S3Region": {}
  },
  "Name": {},
  "Description": {},
  "ClientToken": {},
  "CutoffBehavior": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

<h3 id="registertaskwithmaintenancewindow-parameters">Parameters</h3>

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
|body|body|[RegisterTaskWithMaintenanceWindowRequest](#schemaregistertaskwithmaintenancewindowrequest)|true|none|
|» WindowId|body|object|true|none|
|» Targets|body|object|false|none|
|» TaskArn|body|object|true|none|
|» ServiceRoleArn|body|object|false|none|
|» TaskType|body|object|true|none|
|» TaskParameters|body|object|false|none|
|» » **additionalProperties**|body|[MaintenanceWindowTaskParameterValueExpression](#schemamaintenancewindowtaskparametervalueexpression)|false|Defines the values for a task parameter.|
|» TaskInvocationParameters|body|object|false|none|
|» » RunCommand|body|object|false|none|
|» » » Comment|body|object|false|none|
|» » » CloudWatchOutputConfig|body|[CloudWatchOutputConfig](#schemacloudwatchoutputconfig)|false|Configuration options for sending command output to Amazon CloudWatch Logs.|
|» » » DocumentHash|body|object|false|none|
|» » » DocumentHashType|body|object|false|none|
|» » » DocumentVersion|body|object|false|none|
|» » » NotificationConfig|body|object|false|none|
|» » » » NotificationArn|body|object|false|none|
|» » » » NotificationEvents|body|object|false|none|
|» » » » NotificationType|body|object|false|none|
|» » » OutputS3BucketName|body|object|false|none|
|» » » OutputS3KeyPrefix|body|object|false|none|
|» » » Parameters|body|object|false|none|
|» » » » **additionalProperties**|body|[ParameterValueList](#schemaparametervaluelist)|false|none|
|» » » ServiceRoleArn|body|object|false|none|
|» » » TimeoutSeconds|body|object|false|none|
|» » Automation|body|object|false|none|
|» » » DocumentVersion|body|object|false|none|
|» » » Parameters|body|object|false|none|
|» » » » **additionalProperties**|body|[AutomationParameterValueList](#schemaautomationparametervaluelist)|false|none|
|» » StepFunctions|body|object|false|none|
|» » » Input|body|object|false|none|
|» » » Name|body|object|false|none|
|» » Lambda|body|object|false|none|
|» » » ClientContext|body|object|false|none|
|» » » Qualifier|body|object|false|none|
|» » » Payload|body|object|false|none|
|» Priority|body|object|false|none|
|» MaxConcurrency|body|object|false|none|
|» MaxErrors|body|object|false|none|
|» LoggingInfo|body|object|false|none|
|» » S3BucketName|body|object|true|none|
|» » S3KeyPrefix|body|object|false|none|
|» » S3Region|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» ClientToken|body|object|false|none|
|» CutoffBehavior|body|object|false|none|
|» AlarmConfiguration|body|object|false|none|
|» » IgnorePollAlarmFailure|body|object|false|none|
|» » Alarms|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.RegisterTaskWithMaintenanceWindow|

> Example responses

> 200 Response

```json
{
  "WindowTaskId": {}
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

<h3 id="registertaskwithmaintenancewindow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterTaskWithMaintenanceWindowResult](#schemaregistertaskwithmaintenancewindowresult)|
|480|480|IdempotentParameterMismatch|[IdempotentParameterMismatch](#schemaidempotentparametermismatch)|
|481|481|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|FeatureNotAvailableException|[FeatureNotAvailableException](#schemafeaturenotavailableexception)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTagsFromResource

<a id="opIdRemoveTagsFromResource"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.RemoveTagsFromResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.RemoveTagsFromResource' \
  -d '{
    "ResourceType": {},
    "ResourceId": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.RemoveTagsFromResource`

Removes tag keys from the specified resource.

> Body parameter

```json
{
  "ResourceType": {},
  "ResourceId": {},
  "TagKeys": {}
}
```

<h3 id="removetagsfromresource-parameters">Parameters</h3>

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
|body|body|[RemoveTagsFromResourceRequest](#schemaremovetagsfromresourcerequest)|true|none|
|» ResourceType|body|object|true|none|
|» ResourceId|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.RemoveTagsFromResource|

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

<h3 id="removetagsfromresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveTagsFromResourceResult](#schemaremovetagsfromresourceresult)|
|480|480|InvalidResourceType|[InvalidResourceType](#schemainvalidresourcetype)|
|481|481|InvalidResourceId|[InvalidResourceId](#schemainvalidresourceid)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|TooManyUpdates|[TooManyUpdates](#schematoomanyupdates)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResetServiceSetting

<a id="opIdResetServiceSetting"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ResetServiceSetting' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ResetServiceSetting' \
  -d '{
    "SettingId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ResetServiceSetting`

<p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. </p> <p>Reset the service setting for the account to the default value as provisioned by the Amazon Web Services service team. </p>

> Body parameter

```json
{
  "SettingId": {}
}
```

<h3 id="resetservicesetting-parameters">Parameters</h3>

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
|body|body|[ResetServiceSettingRequest](#schemaresetservicesettingrequest)|true|none|
|» SettingId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ResetServiceSetting|

> Example responses

> 200 Response

```json
{
  "ServiceSetting": {
    "SettingId": {},
    "SettingValue": {},
    "LastModifiedDate": {},
    "LastModifiedUser": {},
    "ARN": {},
    "Status": {}
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

<h3 id="resetservicesetting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResetServiceSettingResult](#schemaresetservicesettingresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ServiceSettingNotFound|[ServiceSettingNotFound](#schemaservicesettingnotfound)|
|482|482|TooManyUpdates|[TooManyUpdates](#schematoomanyupdates)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResumeSession

<a id="opIdResumeSession"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.ResumeSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.ResumeSession' \
  -d '{
    "SessionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.ResumeSession`

<p>Reconnects a session to a managed node after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.</p> <note> <p>This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It isn't intended for any other use.</p> </note>

> Body parameter

```json
{
  "SessionId": {}
}
```

<h3 id="resumesession-parameters">Parameters</h3>

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
|body|body|[ResumeSessionRequest](#schemaresumesessionrequest)|true|none|
|» SessionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.ResumeSession|

> Example responses

> 200 Response

```json
{
  "SessionId": {},
  "TokenValue": {},
  "StreamUrl": {}
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

<h3 id="resumesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResumeSessionResponse](#schemaresumesessionresponse)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendAutomationSignal

<a id="opIdSendAutomationSignal"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.SendAutomationSignal' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.SendAutomationSignal' \
  -d '{
    "AutomationExecutionId": {},
    "SignalType": {},
    "Payload": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  }'
```

`POST /#X-Amz-Target=AmazonSSM.SendAutomationSignal`

Sends a signal to an Automation execution to change the current behavior or status of the execution. 

> Body parameter

```json
{
  "AutomationExecutionId": {},
  "SignalType": {},
  "Payload": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

<h3 id="sendautomationsignal-parameters">Parameters</h3>

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
|body|body|[SendAutomationSignalRequest](#schemasendautomationsignalrequest)|true|none|
|» AutomationExecutionId|body|object|true|none|
|» SignalType|body|object|true|none|
|» Payload|body|object|false|none|
|» » **additionalProperties**|body|[AutomationParameterValueList](#schemaautomationparametervaluelist)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.SendAutomationSignal|

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

<h3 id="sendautomationsignal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendAutomationSignalResult](#schemasendautomationsignalresult)|
|480|480|AutomationExecutionNotFoundException|[AutomationExecutionNotFoundException](#schemaautomationexecutionnotfoundexception)|
|481|481|AutomationStepNotFoundException|[AutomationStepNotFoundException](#schemaautomationstepnotfoundexception)|
|482|482|InvalidAutomationSignalException|[InvalidAutomationSignalException](#schemainvalidautomationsignalexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendCommand

<a id="opIdSendCommand"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.SendCommand' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.SendCommand' \
  -d '{
    "InstanceIds": {},
    "Targets": {},
    "DocumentName": {},
    "DocumentVersion": {},
    "DocumentHash": {},
    "DocumentHashType": {},
    "TimeoutSeconds": {},
    "Comment": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "OutputS3Region": {},
    "OutputS3BucketName": {},
    "OutputS3KeyPrefix": {},
    "MaxConcurrency": {},
    "MaxErrors": {},
    "ServiceRoleArn": {},
    "NotificationConfig": {
      "NotificationArn": {},
      "NotificationEvents": {},
      "NotificationType": {}
    },
    "CloudWatchOutputConfig": {
      "CloudWatchLogGroupName": {},
      "CloudWatchOutputEnabled": {}
    },
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonSSM.SendCommand`

Runs commands on one or more managed nodes.

> Body parameter

```json
{
  "InstanceIds": {},
  "Targets": {},
  "DocumentName": {},
  "DocumentVersion": {},
  "DocumentHash": {},
  "DocumentHashType": {},
  "TimeoutSeconds": {},
  "Comment": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "OutputS3Region": {},
  "OutputS3BucketName": {},
  "OutputS3KeyPrefix": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "ServiceRoleArn": {},
  "NotificationConfig": {
    "NotificationArn": {},
    "NotificationEvents": {},
    "NotificationType": {}
  },
  "CloudWatchOutputConfig": {
    "CloudWatchLogGroupName": {},
    "CloudWatchOutputEnabled": {}
  },
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

<h3 id="sendcommand-parameters">Parameters</h3>

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
|body|body|[SendCommandRequest](#schemasendcommandrequest)|true|none|
|» InstanceIds|body|object|false|none|
|» Targets|body|object|false|none|
|» DocumentName|body|object|true|none|
|» DocumentVersion|body|object|false|none|
|» DocumentHash|body|object|false|none|
|» DocumentHashType|body|object|false|none|
|» TimeoutSeconds|body|object|false|none|
|» Comment|body|object|false|none|
|» Parameters|body|object|false|none|
|» » **additionalProperties**|body|[ParameterValueList](#schemaparametervaluelist)|false|none|
|» OutputS3Region|body|object|false|none|
|» OutputS3BucketName|body|object|false|none|
|» OutputS3KeyPrefix|body|object|false|none|
|» MaxConcurrency|body|object|false|none|
|» MaxErrors|body|object|false|none|
|» ServiceRoleArn|body|object|false|none|
|» NotificationConfig|body|object|false|none|
|» » NotificationArn|body|object|false|none|
|» » NotificationEvents|body|object|false|none|
|» » NotificationType|body|object|false|none|
|» CloudWatchOutputConfig|body|object|false|none|
|» » CloudWatchLogGroupName|body|object|false|none|
|» » CloudWatchOutputEnabled|body|object|false|none|
|» AlarmConfiguration|body|object|false|none|
|» » IgnorePollAlarmFailure|body|object|false|none|
|» » Alarms|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.SendCommand|

> Example responses

> 200 Response

```json
{
  "Command": {
    "CommandId": {},
    "DocumentName": {},
    "DocumentVersion": {},
    "Comment": {},
    "ExpiresAfter": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "InstanceIds": {},
    "Targets": {},
    "RequestedDateTime": {},
    "Status": {},
    "StatusDetails": {},
    "OutputS3Region": {},
    "OutputS3BucketName": {},
    "OutputS3KeyPrefix": {},
    "MaxConcurrency": {},
    "MaxErrors": {},
    "TargetCount": {},
    "CompletedCount": {},
    "ErrorCount": {},
    "DeliveryTimedOutCount": {},
    "ServiceRole": {},
    "NotificationConfig": {
      "NotificationArn": {},
      "NotificationEvents": {},
      "NotificationType": {}
    },
    "CloudWatchOutputConfig": {
      "CloudWatchLogGroupName": {},
      "CloudWatchOutputEnabled": {}
    },
    "TimeoutSeconds": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="sendcommand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendCommandResult](#schemasendcommandresult)|
|480|480|DuplicateInstanceId|[DuplicateInstanceId](#schemaduplicateinstanceid)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|483|483|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|484|484|InvalidDocumentVersion|[InvalidDocumentVersion](#schemainvaliddocumentversion)|
|485|485|InvalidOutputFolder|[InvalidOutputFolder](#schemainvalidoutputfolder)|
|486|486|InvalidParameters|[InvalidParameters](#schemainvalidparameters)|
|487|487|UnsupportedPlatformType|[UnsupportedPlatformType](#schemaunsupportedplatformtype)|
|488|488|MaxDocumentSizeExceeded|[MaxDocumentSizeExceeded](#schemamaxdocumentsizeexceeded)|
|489|489|InvalidRole|[InvalidRole](#schemainvalidrole)|
|490|490|InvalidNotificationConfig|[InvalidNotificationConfig](#schemainvalidnotificationconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartAssociationsOnce

<a id="opIdStartAssociationsOnce"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.StartAssociationsOnce' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.StartAssociationsOnce' \
  -d '{
    "AssociationIds": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.StartAssociationsOnce`

Runs an association immediately and only one time. This operation can be helpful when troubleshooting associations.

> Body parameter

```json
{
  "AssociationIds": {}
}
```

<h3 id="startassociationsonce-parameters">Parameters</h3>

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
|body|body|[StartAssociationsOnceRequest](#schemastartassociationsoncerequest)|true|none|
|» AssociationIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.StartAssociationsOnce|

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

<h3 id="startassociationsonce-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartAssociationsOnceResult](#schemastartassociationsonceresult)|
|480|480|InvalidAssociation|[InvalidAssociation](#schemainvalidassociation)|
|481|481|AssociationDoesNotExist|[AssociationDoesNotExist](#schemaassociationdoesnotexist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartAutomationExecution

<a id="opIdStartAutomationExecution"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.StartAutomationExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.StartAutomationExecution' \
  -d '{
    "DocumentName": {},
    "DocumentVersion": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ClientToken": {},
    "Mode": {},
    "TargetParameterName": {},
    "Targets": {},
    "TargetMaps": {},
    "MaxConcurrency": {},
    "MaxErrors": {},
    "TargetLocations": {},
    "Tags": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonSSM.StartAutomationExecution`

Initiates execution of an Automation runbook.

> Body parameter

```json
{
  "DocumentName": {},
  "DocumentVersion": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "ClientToken": {},
  "Mode": {},
  "TargetParameterName": {},
  "Targets": {},
  "TargetMaps": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "TargetLocations": {},
  "Tags": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

<h3 id="startautomationexecution-parameters">Parameters</h3>

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
|body|body|[StartAutomationExecutionRequest](#schemastartautomationexecutionrequest)|true|none|
|» DocumentName|body|object|true|none|
|» DocumentVersion|body|object|false|none|
|» Parameters|body|object|false|none|
|» » **additionalProperties**|body|[AutomationParameterValueList](#schemaautomationparametervaluelist)|false|none|
|» ClientToken|body|object|false|none|
|» Mode|body|object|false|none|
|» TargetParameterName|body|object|false|none|
|» Targets|body|object|false|none|
|» TargetMaps|body|object|false|none|
|» MaxConcurrency|body|object|false|none|
|» MaxErrors|body|object|false|none|
|» TargetLocations|body|object|false|none|
|» Tags|body|object|false|none|
|» AlarmConfiguration|body|object|false|none|
|» » IgnorePollAlarmFailure|body|object|false|none|
|» » Alarms|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.StartAutomationExecution|

> Example responses

> 200 Response

```json
{
  "AutomationExecutionId": {}
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

<h3 id="startautomationexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartAutomationExecutionResult](#schemastartautomationexecutionresult)|
|480|480|AutomationDefinitionNotFoundException|[AutomationDefinitionNotFoundException](#schemaautomationdefinitionnotfoundexception)|
|481|481|InvalidAutomationExecutionParametersException|[InvalidAutomationExecutionParametersException](#schemainvalidautomationexecutionparametersexception)|
|482|482|AutomationExecutionLimitExceededException|[AutomationExecutionLimitExceededException](#schemaautomationexecutionlimitexceededexception)|
|483|483|AutomationDefinitionVersionNotFoundException|[AutomationDefinitionVersionNotFoundException](#schemaautomationdefinitionversionnotfoundexception)|
|484|484|IdempotentParameterMismatch|[IdempotentParameterMismatch](#schemaidempotentparametermismatch)|
|485|485|InvalidTarget|[InvalidTarget](#schemainvalidtarget)|
|486|486|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartChangeRequestExecution

<a id="opIdStartChangeRequestExecution"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.StartChangeRequestExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.StartChangeRequestExecution' \
  -d '{
    "ScheduledTime": {},
    "DocumentName": {},
    "DocumentVersion": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ChangeRequestName": {},
    "ClientToken": {},
    "AutoApprove": {},
    "Runbooks": {},
    "Tags": {},
    "ScheduledEndTime": {},
    "ChangeDetails": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.StartChangeRequestExecution`

Creates a change request for Change Manager. The Automation runbooks specified in the change request run only after all required approvals for the change request have been received.

> Body parameter

```json
{
  "ScheduledTime": {},
  "DocumentName": {},
  "DocumentVersion": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "ChangeRequestName": {},
  "ClientToken": {},
  "AutoApprove": {},
  "Runbooks": {},
  "Tags": {},
  "ScheduledEndTime": {},
  "ChangeDetails": {}
}
```

<h3 id="startchangerequestexecution-parameters">Parameters</h3>

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
|body|body|[StartChangeRequestExecutionRequest](#schemastartchangerequestexecutionrequest)|true|none|
|» ScheduledTime|body|object|false|none|
|» DocumentName|body|object|true|none|
|» DocumentVersion|body|object|false|none|
|» Parameters|body|object|false|none|
|» » **additionalProperties**|body|[AutomationParameterValueList](#schemaautomationparametervaluelist)|false|none|
|» ChangeRequestName|body|object|false|none|
|» ClientToken|body|object|false|none|
|» AutoApprove|body|object|false|none|
|» Runbooks|body|object|true|none|
|» Tags|body|object|false|none|
|» ScheduledEndTime|body|object|false|none|
|» ChangeDetails|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.StartChangeRequestExecution|

> Example responses

> 200 Response

```json
{
  "AutomationExecutionId": {}
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

<h3 id="startchangerequestexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartChangeRequestExecutionResult](#schemastartchangerequestexecutionresult)|
|480|480|AutomationDefinitionNotFoundException|[AutomationDefinitionNotFoundException](#schemaautomationdefinitionnotfoundexception)|
|481|481|InvalidAutomationExecutionParametersException|[InvalidAutomationExecutionParametersException](#schemainvalidautomationexecutionparametersexception)|
|482|482|AutomationExecutionLimitExceededException|[AutomationExecutionLimitExceededException](#schemaautomationexecutionlimitexceededexception)|
|483|483|AutomationDefinitionVersionNotFoundException|[AutomationDefinitionVersionNotFoundException](#schemaautomationdefinitionversionnotfoundexception)|
|484|484|IdempotentParameterMismatch|[IdempotentParameterMismatch](#schemaidempotentparametermismatch)|
|485|485|InternalServerError|[InternalServerError](#schemainternalservererror)|
|486|486|AutomationDefinitionNotApprovedException|[AutomationDefinitionNotApprovedException](#schemaautomationdefinitionnotapprovedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSession

<a id="opIdStartSession"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.StartSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.StartSession' \
  -d '{
    "Target": {},
    "DocumentName": {},
    "Reason": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  }'
```

`POST /#X-Amz-Target=AmazonSSM.StartSession`

<p>Initiates a connection to a target (for example, a managed node) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.</p> <note> <p>Amazon Web Services CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install the Session Manager plugin for the Amazon Web Services CLI</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Amazon Web Services Tools for PowerShell usage: Start-SSMSession isn't currently supported by Amazon Web Services Tools for PowerShell on Windows local machines.</p> </note>

> Body parameter

```json
{
  "Target": {},
  "DocumentName": {},
  "Reason": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

<h3 id="startsession-parameters">Parameters</h3>

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
|body|body|[StartSessionRequest](#schemastartsessionrequest)|true|none|
|» Target|body|object|true|none|
|» DocumentName|body|object|false|none|
|» Reason|body|object|false|none|
|» Parameters|body|object|false|none|
|» » **additionalProperties**|body|[SessionManagerParameterValueList](#schemasessionmanagerparametervaluelist)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.StartSession|

> Example responses

> 200 Response

```json
{
  "SessionId": {},
  "TokenValue": {},
  "StreamUrl": {}
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

<h3 id="startsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSessionResponse](#schemastartsessionresponse)|
|480|480|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|481|481|TargetNotConnected|[TargetNotConnected](#schematargetnotconnected)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopAutomationExecution

<a id="opIdStopAutomationExecution"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.StopAutomationExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.StopAutomationExecution' \
  -d '{
    "AutomationExecutionId": {},
    "Type": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.StopAutomationExecution`

Stop an Automation that is currently running.

> Body parameter

```json
{
  "AutomationExecutionId": {},
  "Type": {}
}
```

<h3 id="stopautomationexecution-parameters">Parameters</h3>

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
|body|body|[StopAutomationExecutionRequest](#schemastopautomationexecutionrequest)|true|none|
|» AutomationExecutionId|body|object|true|none|
|» Type|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.StopAutomationExecution|

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

<h3 id="stopautomationexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopAutomationExecutionResult](#schemastopautomationexecutionresult)|
|480|480|AutomationExecutionNotFoundException|[AutomationExecutionNotFoundException](#schemaautomationexecutionnotfoundexception)|
|481|481|InvalidAutomationStatusUpdateException|[InvalidAutomationStatusUpdateException](#schemainvalidautomationstatusupdateexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TerminateSession

<a id="opIdTerminateSession"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.TerminateSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.TerminateSession' \
  -d '{
    "SessionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.TerminateSession`

Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the managed node. A terminated session can't be resumed.

> Body parameter

```json
{
  "SessionId": {}
}
```

<h3 id="terminatesession-parameters">Parameters</h3>

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
|body|body|[TerminateSessionRequest](#schematerminatesessionrequest)|true|none|
|» SessionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.TerminateSession|

> Example responses

> 200 Response

```json
{
  "SessionId": {}
}
```

> 480 Response

```json
null
```

<h3 id="terminatesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TerminateSessionResponse](#schematerminatesessionresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnlabelParameterVersion

<a id="opIdUnlabelParameterVersion"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UnlabelParameterVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UnlabelParameterVersion' \
  -d '{
    "Name": {},
    "ParameterVersion": {},
    "Labels": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UnlabelParameterVersion`

Remove a label or labels from a parameter.

> Body parameter

```json
{
  "Name": {},
  "ParameterVersion": {},
  "Labels": {}
}
```

<h3 id="unlabelparameterversion-parameters">Parameters</h3>

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
|body|body|[UnlabelParameterVersionRequest](#schemaunlabelparameterversionrequest)|true|none|
|» Name|body|object|true|none|
|» ParameterVersion|body|object|true|none|
|» Labels|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UnlabelParameterVersion|

> Example responses

> 200 Response

```json
{
  "RemovedLabels": {},
  "InvalidLabels": {}
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

<h3 id="unlabelparameterversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UnlabelParameterVersionResult](#schemaunlabelparameterversionresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|TooManyUpdates|[TooManyUpdates](#schematoomanyupdates)|
|482|482|ParameterNotFound|[ParameterNotFound](#schemaparameternotfound)|
|483|483|ParameterVersionNotFound|[ParameterVersionNotFound](#schemaparameterversionnotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAssociation

<a id="opIdUpdateAssociation"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdateAssociation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdateAssociation' \
  -d '{
    "AssociationId": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "DocumentVersion": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "Name": {},
    "Targets": {},
    "AssociationName": {},
    "AssociationVersion": {},
    "AutomationTargetParameterName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdateAssociation`

<p>Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you call <code>UpdateAssociation</code>, the system removes all optional parameters from the request and overwrites the association with null values for those parameters. This is by design. You must specify all optional parameters in the call, even if you are not changing the parameters. This includes the <code>Name</code> parameter. Before calling this API action, we recommend that you call the <a>DescribeAssociation</a> API operation and make a note of all optional parameters required for your <code>UpdateAssociation</code> call.</p> <p>In order to call this API operation, a user, group, or role must be granted permission to call the <a>DescribeAssociation</a> API operation. If you don't have permission to call <code>DescribeAssociation</code>, then you receive the following error: <code>An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: &lt;user_arn&gt; isn't authorized to perform: ssm:DescribeAssociation on resource: &lt;resource_arn&gt;</code> </p> <important> <p>When you update an association, the association immediately runs against the specified targets. You can add the <code>ApplyOnlyAtCronInterval</code> parameter to run the association during the next schedule run.</p> </important>

> Body parameter

```json
{
  "AssociationId": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "DocumentVersion": {},
  "ScheduleExpression": {},
  "OutputLocation": {
    "S3Location": {
      "OutputS3Region": {},
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {}
    }
  },
  "Name": {},
  "Targets": {},
  "AssociationName": {},
  "AssociationVersion": {},
  "AutomationTargetParameterName": {},
  "MaxErrors": {},
  "MaxConcurrency": {},
  "ComplianceSeverity": {},
  "SyncCompliance": {},
  "ApplyOnlyAtCronInterval": {},
  "CalendarNames": {},
  "TargetLocations": {},
  "ScheduleOffset": {},
  "TargetMaps": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

<h3 id="updateassociation-parameters">Parameters</h3>

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
|body|body|[UpdateAssociationRequest](#schemaupdateassociationrequest)|true|none|
|» AssociationId|body|object|true|none|
|» Parameters|body|object|false|none|
|» » **additionalProperties**|body|[ParameterValueList](#schemaparametervaluelist)|false|none|
|» DocumentVersion|body|object|false|none|
|» ScheduleExpression|body|object|false|none|
|» OutputLocation|body|object|false|none|
|» » S3Location|body|object|false|none|
|» » » OutputS3Region|body|object|false|none|
|» » » OutputS3BucketName|body|object|false|none|
|» » » OutputS3KeyPrefix|body|object|false|none|
|» Name|body|object|false|none|
|» Targets|body|object|false|none|
|» AssociationName|body|object|false|none|
|» AssociationVersion|body|object|false|none|
|» AutomationTargetParameterName|body|object|false|none|
|» MaxErrors|body|object|false|none|
|» MaxConcurrency|body|object|false|none|
|» ComplianceSeverity|body|object|false|none|
|» SyncCompliance|body|object|false|none|
|» ApplyOnlyAtCronInterval|body|object|false|none|
|» CalendarNames|body|object|false|none|
|» TargetLocations|body|object|false|none|
|» ScheduleOffset|body|object|false|none|
|» TargetMaps|body|object|false|none|
|» AlarmConfiguration|body|[AlarmConfiguration](#schemaalarmconfiguration)|false|The details for the CloudWatch alarm you want to apply to an automation or command.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdateAssociation|

> Example responses

> 200 Response

```json
{
  "AssociationDescription": {
    "Name": {},
    "InstanceId": {},
    "AssociationVersion": {},
    "Date": {},
    "LastUpdateAssociationDate": {},
    "Status": {
      "Date": {},
      "Name": {},
      "Message": {},
      "AdditionalInfo": {}
    },
    "Overview": {
      "Status": {},
      "DetailedStatus": {},
      "AssociationStatusAggregatedCount": {
        "property1": 0,
        "property2": 0
      }
    },
    "DocumentVersion": {},
    "AutomationTargetParameterName": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "AssociationId": {},
    "Targets": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "LastExecutionDate": {},
    "LastSuccessfulExecutionDate": {},
    "AssociationName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

<h3 id="updateassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAssociationResult](#schemaupdateassociationresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidSchedule|[InvalidSchedule](#schemainvalidschedule)|
|482|482|InvalidParameters|[InvalidParameters](#schemainvalidparameters)|
|483|483|InvalidOutputLocation|[InvalidOutputLocation](#schemainvalidoutputlocation)|
|484|484|InvalidDocumentVersion|[InvalidDocumentVersion](#schemainvaliddocumentversion)|
|485|485|AssociationDoesNotExist|[AssociationDoesNotExist](#schemaassociationdoesnotexist)|
|486|486|InvalidUpdate|[InvalidUpdate](#schemainvalidupdate)|
|487|487|TooManyUpdates|[TooManyUpdates](#schematoomanyupdates)|
|488|488|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|489|489|InvalidTarget|[InvalidTarget](#schemainvalidtarget)|
|490|490|InvalidAssociationVersion|[InvalidAssociationVersion](#schemainvalidassociationversion)|
|491|491|AssociationVersionLimitExceeded|[AssociationVersionLimitExceeded](#schemaassociationversionlimitexceeded)|
|492|492|InvalidTargetMaps|[InvalidTargetMaps](#schemainvalidtargetmaps)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAssociationStatus

<a id="opIdUpdateAssociationStatus"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdateAssociationStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdateAssociationStatus' \
  -d '{
    "Name": {},
    "InstanceId": {},
    "AssociationStatus": {
      "Date": {},
      "Name": {},
      "Message": {},
      "AdditionalInfo": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdateAssociationStatus`

<p>Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified managed node.</p> <p> <code>UpdateAssociationStatus</code> is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to report status updates about your associations and is only used for associations created with the <code>InstanceId</code> legacy parameter.</p>

> Body parameter

```json
{
  "Name": {},
  "InstanceId": {},
  "AssociationStatus": {
    "Date": {},
    "Name": {},
    "Message": {},
    "AdditionalInfo": {}
  }
}
```

<h3 id="updateassociationstatus-parameters">Parameters</h3>

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
|body|body|[UpdateAssociationStatusRequest](#schemaupdateassociationstatusrequest)|true|none|
|» Name|body|object|true|none|
|» InstanceId|body|object|true|none|
|» AssociationStatus|body|object|true|none|
|» » Date|body|object|true|none|
|» » Name|body|object|true|none|
|» » Message|body|object|true|none|
|» » AdditionalInfo|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdateAssociationStatus|

> Example responses

> 200 Response

```json
{
  "AssociationDescription": {
    "Name": {},
    "InstanceId": {},
    "AssociationVersion": {},
    "Date": {},
    "LastUpdateAssociationDate": {},
    "Status": {
      "Date": {},
      "Name": {},
      "Message": {},
      "AdditionalInfo": {}
    },
    "Overview": {
      "Status": {},
      "DetailedStatus": {},
      "AssociationStatusAggregatedCount": {
        "property1": 0,
        "property2": 0
      }
    },
    "DocumentVersion": {},
    "AutomationTargetParameterName": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "AssociationId": {},
    "Targets": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "LastExecutionDate": {},
    "LastSuccessfulExecutionDate": {},
    "AssociationName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
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

<h3 id="updateassociationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAssociationStatusResult](#schemaupdateassociationstatusresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|482|482|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|483|483|AssociationDoesNotExist|[AssociationDoesNotExist](#schemaassociationdoesnotexist)|
|484|484|StatusUnchanged|[StatusUnchanged](#schemastatusunchanged)|
|485|485|TooManyUpdates|[TooManyUpdates](#schematoomanyupdates)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDocument

<a id="opIdUpdateDocument"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdateDocument' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdateDocument' \
  -d '{
    "Content": {},
    "Attachments": {},
    "Name": {},
    "DisplayName": {},
    "VersionName": {},
    "DocumentVersion": {},
    "DocumentFormat": {},
    "TargetType": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdateDocument`

Updates one or more values for an SSM document.

> Body parameter

```json
{
  "Content": {},
  "Attachments": {},
  "Name": {},
  "DisplayName": {},
  "VersionName": {},
  "DocumentVersion": {},
  "DocumentFormat": {},
  "TargetType": {}
}
```

<h3 id="updatedocument-parameters">Parameters</h3>

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
|body|body|[UpdateDocumentRequest](#schemaupdatedocumentrequest)|true|none|
|» Content|body|object|true|none|
|» Attachments|body|object|false|none|
|» Name|body|object|true|none|
|» DisplayName|body|object|false|none|
|» VersionName|body|object|false|none|
|» DocumentVersion|body|object|false|none|
|» DocumentFormat|body|object|false|none|
|» TargetType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdateDocument|

> Example responses

> 200 Response

```json
{
  "DocumentDescription": {
    "Sha1": {},
    "Hash": {},
    "HashType": {},
    "Name": {},
    "DisplayName": {},
    "VersionName": {},
    "Owner": {},
    "CreatedDate": {},
    "Status": {},
    "StatusInformation": {},
    "DocumentVersion": {},
    "Description": {},
    "Parameters": {},
    "PlatformTypes": {},
    "DocumentType": {},
    "SchemaVersion": {},
    "LatestVersion": {},
    "DefaultVersion": {},
    "DocumentFormat": {},
    "TargetType": {},
    "Tags": {},
    "AttachmentsInformation": {},
    "Requires": {},
    "Author": {},
    "ReviewInformation": {},
    "ApprovedVersion": {},
    "PendingReviewVersion": {},
    "ReviewStatus": {},
    "Category": {},
    "CategoryEnum": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="updatedocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDocumentResult](#schemaupdatedocumentresult)|
|480|480|MaxDocumentSizeExceeded|[MaxDocumentSizeExceeded](#schemamaxdocumentsizeexceeded)|
|481|481|DocumentVersionLimitExceeded|[DocumentVersionLimitExceeded](#schemadocumentversionlimitexceeded)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|DuplicateDocumentContent|[DuplicateDocumentContent](#schemaduplicatedocumentcontent)|
|484|484|DuplicateDocumentVersionName|[DuplicateDocumentVersionName](#schemaduplicatedocumentversionname)|
|485|485|InvalidDocumentContent|[InvalidDocumentContent](#schemainvaliddocumentcontent)|
|486|486|InvalidDocumentVersion|[InvalidDocumentVersion](#schemainvaliddocumentversion)|
|487|487|InvalidDocumentSchemaVersion|[InvalidDocumentSchemaVersion](#schemainvaliddocumentschemaversion)|
|488|488|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|489|489|InvalidDocumentOperation|[InvalidDocumentOperation](#schemainvaliddocumentoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDocumentDefaultVersion

<a id="opIdUpdateDocumentDefaultVersion"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdateDocumentDefaultVersion' \
  -d '{
    "Name": {},
    "DocumentVersion": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion`

<p>Set the default version of a document. </p> <note> <p>If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the <code>apply-only-at-cron-interval</code> parameter.</p> </note>

> Body parameter

```json
{
  "Name": {},
  "DocumentVersion": {}
}
```

<h3 id="updatedocumentdefaultversion-parameters">Parameters</h3>

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
|body|body|[UpdateDocumentDefaultVersionRequest](#schemaupdatedocumentdefaultversionrequest)|true|none|
|» Name|body|object|true|none|
|» DocumentVersion|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdateDocumentDefaultVersion|

> Example responses

> 200 Response

```json
{
  "Description": {
    "Name": {},
    "DefaultVersion": {},
    "DefaultVersionName": {}
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

<h3 id="updatedocumentdefaultversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDocumentDefaultVersionResult](#schemaupdatedocumentdefaultversionresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|482|482|InvalidDocumentVersion|[InvalidDocumentVersion](#schemainvaliddocumentversion)|
|483|483|InvalidDocumentSchemaVersion|[InvalidDocumentSchemaVersion](#schemainvaliddocumentschemaversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDocumentMetadata

<a id="opIdUpdateDocumentMetadata"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdateDocumentMetadata' \
  -d '{
    "Name": {},
    "DocumentVersion": {},
    "DocumentReviews": {
      "Action": {},
      "Comment": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata`

Updates information related to approval reviews for a specific version of a change template in Change Manager.

> Body parameter

```json
{
  "Name": {},
  "DocumentVersion": {},
  "DocumentReviews": {
    "Action": {},
    "Comment": {}
  }
}
```

<h3 id="updatedocumentmetadata-parameters">Parameters</h3>

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
|body|body|[UpdateDocumentMetadataRequest](#schemaupdatedocumentmetadatarequest)|true|none|
|» Name|body|object|true|none|
|» DocumentVersion|body|object|false|none|
|» DocumentReviews|body|object|true|none|
|» » Action|body|object|true|none|
|» » Comment|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdateDocumentMetadata|

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

<h3 id="updatedocumentmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDocumentMetadataResponse](#schemaupdatedocumentmetadataresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|InvalidDocument|[InvalidDocument](#schemainvaliddocument)|
|482|482|InvalidDocumentOperation|[InvalidDocumentOperation](#schemainvaliddocumentoperation)|
|483|483|InvalidDocumentVersion|[InvalidDocumentVersion](#schemainvaliddocumentversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMaintenanceWindow

<a id="opIdUpdateMaintenanceWindow"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdateMaintenanceWindow' \
  -d '{
    "WindowId": {},
    "Name": {},
    "Description": {},
    "StartDate": {},
    "EndDate": {},
    "Schedule": {},
    "ScheduleTimezone": {},
    "ScheduleOffset": {},
    "Duration": {},
    "Cutoff": {},
    "AllowUnassociatedTargets": {},
    "Enabled": {},
    "Replace": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow`

<p>Updates an existing maintenance window. Only specified parameters are modified.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>

> Body parameter

```json
{
  "WindowId": {},
  "Name": {},
  "Description": {},
  "StartDate": {},
  "EndDate": {},
  "Schedule": {},
  "ScheduleTimezone": {},
  "ScheduleOffset": {},
  "Duration": {},
  "Cutoff": {},
  "AllowUnassociatedTargets": {},
  "Enabled": {},
  "Replace": {}
}
```

<h3 id="updatemaintenancewindow-parameters">Parameters</h3>

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
|body|body|[UpdateMaintenanceWindowRequest](#schemaupdatemaintenancewindowrequest)|true|none|
|» WindowId|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» StartDate|body|object|false|none|
|» EndDate|body|object|false|none|
|» Schedule|body|object|false|none|
|» ScheduleTimezone|body|object|false|none|
|» ScheduleOffset|body|object|false|none|
|» Duration|body|object|false|none|
|» Cutoff|body|object|false|none|
|» AllowUnassociatedTargets|body|object|false|none|
|» Enabled|body|object|false|none|
|» Replace|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdateMaintenanceWindow|

> Example responses

> 200 Response

```json
{
  "WindowId": {},
  "Name": {},
  "Description": {},
  "StartDate": {},
  "EndDate": {},
  "Schedule": {},
  "ScheduleTimezone": {},
  "ScheduleOffset": {},
  "Duration": {},
  "Cutoff": {},
  "AllowUnassociatedTargets": {},
  "Enabled": {}
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

<h3 id="updatemaintenancewindow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMaintenanceWindowResult](#schemaupdatemaintenancewindowresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMaintenanceWindowTarget

<a id="opIdUpdateMaintenanceWindowTarget"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdateMaintenanceWindowTarget' \
  -d '{
    "WindowId": {},
    "WindowTargetId": {},
    "Targets": {},
    "OwnerInformation": {},
    "Name": {},
    "Description": {},
    "Replace": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget`

<p>Modifies the target of an existing maintenance window. You can change the following:</p> <ul> <li> <p>Name</p> </li> <li> <p>Description</p> </li> <li> <p>Owner</p> </li> <li> <p>IDs for an ID target</p> </li> <li> <p>Tags for a Tag target</p> </li> <li> <p>From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see <a>Target</a>.</p> </li> </ul> <note> <p>If a parameter is null, then the corresponding field isn't modified.</p> </note>

> Body parameter

```json
{
  "WindowId": {},
  "WindowTargetId": {},
  "Targets": {},
  "OwnerInformation": {},
  "Name": {},
  "Description": {},
  "Replace": {}
}
```

<h3 id="updatemaintenancewindowtarget-parameters">Parameters</h3>

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
|body|body|[UpdateMaintenanceWindowTargetRequest](#schemaupdatemaintenancewindowtargetrequest)|true|none|
|» WindowId|body|object|true|none|
|» WindowTargetId|body|object|true|none|
|» Targets|body|object|false|none|
|» OwnerInformation|body|object|false|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» Replace|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdateMaintenanceWindowTarget|

> Example responses

> 200 Response

```json
{
  "WindowId": {},
  "WindowTargetId": {},
  "Targets": {},
  "OwnerInformation": {},
  "Name": {},
  "Description": {}
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

<h3 id="updatemaintenancewindowtarget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMaintenanceWindowTargetResult](#schemaupdatemaintenancewindowtargetresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMaintenanceWindowTask

<a id="opIdUpdateMaintenanceWindowTask"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdateMaintenanceWindowTask' \
  -d '{
    "WindowId": {},
    "WindowTaskId": {},
    "Targets": {},
    "TaskArn": {},
    "ServiceRoleArn": {},
    "TaskParameters": {
      "property1": {
        "Values": {}
      },
      "property2": {
        "Values": {}
      }
    },
    "TaskInvocationParameters": {
      "RunCommand": {
        "Comment": {},
        "CloudWatchOutputConfig": {
          "CloudWatchLogGroupName": {},
          "CloudWatchOutputEnabled": {}
        },
        "DocumentHash": {},
        "DocumentHashType": {},
        "DocumentVersion": {},
        "NotificationConfig": {
          "NotificationArn": {},
          "NotificationEvents": {},
          "NotificationType": {}
        },
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {},
        "Parameters": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "ServiceRoleArn": {},
        "TimeoutSeconds": {}
      },
      "Automation": {
        "DocumentVersion": {},
        "Parameters": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        }
      },
      "StepFunctions": {
        "Input": {},
        "Name": {}
      },
      "Lambda": {
        "ClientContext": {},
        "Qualifier": {},
        "Payload": {}
      }
    },
    "Priority": {},
    "MaxConcurrency": {},
    "MaxErrors": {},
    "LoggingInfo": {
      "S3BucketName": {},
      "S3KeyPrefix": {},
      "S3Region": {}
    },
    "Name": {},
    "Description": {},
    "Replace": {},
    "CutoffBehavior": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask`

<p>Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:</p> <ul> <li> <p> <code>TaskARN</code>. For example, you can change a <code>RUN_COMMAND</code> task from <code>AWS-RunPowerShellScript</code> to <code>AWS-RunShellScript</code>.</p> </li> <li> <p> <code>ServiceRoleArn</code> </p> </li> <li> <p> <code>TaskInvocationParameters</code> </p> </li> <li> <p> <code>Priority</code> </p> </li> <li> <p> <code>MaxConcurrency</code> </p> </li> <li> <p> <code>MaxErrors</code> </p> </li> </ul> <note> <p>One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering maintenance window tasks without targets</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </note> <p>If the value for a parameter in <code>UpdateMaintenanceWindowTask</code> is null, then the corresponding field isn't modified. If you set <code>Replace</code> to true, then all fields required by the <a>RegisterTaskWithMaintenanceWindow</a> operation are required for this request. Optional fields that aren't specified are set to null.</p> <important> <p>When you update a maintenance window task that has options specified in <code>TaskInvocationParameters</code>, you must provide again all the <code>TaskInvocationParameters</code> values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified <code>TaskInvocationParameters</code> values for <code>Comment</code>, <code>NotificationConfig</code>, and <code>OutputS3BucketName</code>. If you update the maintenance window task and specify only a different <code>OutputS3BucketName</code> value, the values for <code>Comment</code> and <code>NotificationConfig</code> are removed.</p> </important>

> Body parameter

```json
{
  "WindowId": {},
  "WindowTaskId": {},
  "Targets": {},
  "TaskArn": {},
  "ServiceRoleArn": {},
  "TaskParameters": {
    "property1": {
      "Values": {}
    },
    "property2": {
      "Values": {}
    }
  },
  "TaskInvocationParameters": {
    "RunCommand": {
      "Comment": {},
      "CloudWatchOutputConfig": {
        "CloudWatchLogGroupName": {},
        "CloudWatchOutputEnabled": {}
      },
      "DocumentHash": {},
      "DocumentHashType": {},
      "DocumentVersion": {},
      "NotificationConfig": {
        "NotificationArn": {},
        "NotificationEvents": {},
        "NotificationType": {}
      },
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "ServiceRoleArn": {},
      "TimeoutSeconds": {}
    },
    "Automation": {
      "DocumentVersion": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "StepFunctions": {
      "Input": {},
      "Name": {}
    },
    "Lambda": {
      "ClientContext": {},
      "Qualifier": {},
      "Payload": {}
    }
  },
  "Priority": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "LoggingInfo": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "S3Region": {}
  },
  "Name": {},
  "Description": {},
  "Replace": {},
  "CutoffBehavior": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

<h3 id="updatemaintenancewindowtask-parameters">Parameters</h3>

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
|body|body|[UpdateMaintenanceWindowTaskRequest](#schemaupdatemaintenancewindowtaskrequest)|true|none|
|» WindowId|body|object|true|none|
|» WindowTaskId|body|object|true|none|
|» Targets|body|object|false|none|
|» TaskArn|body|object|false|none|
|» ServiceRoleArn|body|object|false|none|
|» TaskParameters|body|object|false|none|
|» » **additionalProperties**|body|[MaintenanceWindowTaskParameterValueExpression](#schemamaintenancewindowtaskparametervalueexpression)|false|Defines the values for a task parameter.|
|» TaskInvocationParameters|body|object|false|none|
|» » RunCommand|body|object|false|none|
|» » » Comment|body|object|false|none|
|» » » CloudWatchOutputConfig|body|[CloudWatchOutputConfig](#schemacloudwatchoutputconfig)|false|Configuration options for sending command output to Amazon CloudWatch Logs.|
|» » » DocumentHash|body|object|false|none|
|» » » DocumentHashType|body|object|false|none|
|» » » DocumentVersion|body|object|false|none|
|» » » NotificationConfig|body|object|false|none|
|» » » » NotificationArn|body|object|false|none|
|» » » » NotificationEvents|body|object|false|none|
|» » » » NotificationType|body|object|false|none|
|» » » OutputS3BucketName|body|object|false|none|
|» » » OutputS3KeyPrefix|body|object|false|none|
|» » » Parameters|body|object|false|none|
|» » » » **additionalProperties**|body|[ParameterValueList](#schemaparametervaluelist)|false|none|
|» » » ServiceRoleArn|body|object|false|none|
|» » » TimeoutSeconds|body|object|false|none|
|» » Automation|body|object|false|none|
|» » » DocumentVersion|body|object|false|none|
|» » » Parameters|body|object|false|none|
|» » » » **additionalProperties**|body|[AutomationParameterValueList](#schemaautomationparametervaluelist)|false|none|
|» » StepFunctions|body|object|false|none|
|» » » Input|body|object|false|none|
|» » » Name|body|object|false|none|
|» » Lambda|body|object|false|none|
|» » » ClientContext|body|object|false|none|
|» » » Qualifier|body|object|false|none|
|» » » Payload|body|object|false|none|
|» Priority|body|object|false|none|
|» MaxConcurrency|body|object|false|none|
|» MaxErrors|body|object|false|none|
|» LoggingInfo|body|object|false|none|
|» » S3BucketName|body|object|true|none|
|» » S3KeyPrefix|body|object|false|none|
|» » S3Region|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» Replace|body|object|false|none|
|» CutoffBehavior|body|object|false|none|
|» AlarmConfiguration|body|object|false|none|
|» » IgnorePollAlarmFailure|body|object|false|none|
|» » Alarms|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdateMaintenanceWindowTask|

> Example responses

> 200 Response

```json
{
  "WindowId": {},
  "WindowTaskId": {},
  "Targets": {},
  "TaskArn": {},
  "ServiceRoleArn": {},
  "TaskParameters": {
    "property1": {
      "Values": {}
    },
    "property2": {
      "Values": {}
    }
  },
  "TaskInvocationParameters": {
    "RunCommand": {
      "Comment": {},
      "CloudWatchOutputConfig": {
        "CloudWatchLogGroupName": {},
        "CloudWatchOutputEnabled": {}
      },
      "DocumentHash": {},
      "DocumentHashType": {},
      "DocumentVersion": {},
      "NotificationConfig": {
        "NotificationArn": {},
        "NotificationEvents": {},
        "NotificationType": {}
      },
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "ServiceRoleArn": {},
      "TimeoutSeconds": {}
    },
    "Automation": {
      "DocumentVersion": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "StepFunctions": {
      "Input": {},
      "Name": {}
    },
    "Lambda": {
      "ClientContext": {},
      "Qualifier": {},
      "Payload": {}
    }
  },
  "Priority": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "LoggingInfo": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "S3Region": {}
  },
  "Name": {},
  "Description": {},
  "CutoffBehavior": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
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

<h3 id="updatemaintenancewindowtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMaintenanceWindowTaskResult](#schemaupdatemaintenancewindowtaskresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateManagedInstanceRole

<a id="opIdUpdateManagedInstanceRole"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdateManagedInstanceRole' \
  -d '{
    "InstanceId": {},
    "IamRole": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole`

Changes the Identity and Access Management (IAM) role that is assigned to the on-premises server, edge device, or virtual machines (VM). IAM roles are first assigned to these hybrid nodes during the activation process. For more information, see <a>CreateActivation</a>.

> Body parameter

```json
{
  "InstanceId": {},
  "IamRole": {}
}
```

<h3 id="updatemanagedinstancerole-parameters">Parameters</h3>

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
|body|body|[UpdateManagedInstanceRoleRequest](#schemaupdatemanagedinstancerolerequest)|true|none|
|» InstanceId|body|object|true|none|
|» IamRole|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdateManagedInstanceRole|

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

<h3 id="updatemanagedinstancerole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateManagedInstanceRoleResult](#schemaupdatemanagedinstanceroleresult)|
|480|480|InvalidInstanceId|[InvalidInstanceId](#schemainvalidinstanceid)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateOpsItem

<a id="opIdUpdateOpsItem"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdateOpsItem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdateOpsItem' \
  -d '{
    "Description": {},
    "OperationalData": {
      "property1": {
        "Value": {},
        "Type": {}
      },
      "property2": {
        "Value": {},
        "Type": {}
      }
    },
    "OperationalDataToDelete": {},
    "Notifications": {},
    "Priority": {},
    "RelatedOpsItems": {},
    "Status": {},
    "OpsItemId": {},
    "Title": {},
    "Category": {},
    "Severity": {},
    "ActualStartTime": {},
    "ActualEndTime": {},
    "PlannedStartTime": {},
    "PlannedEndTime": {},
    "OpsItemArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdateOpsItem`

<p>Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

> Body parameter

```json
{
  "Description": {},
  "OperationalData": {
    "property1": {
      "Value": {},
      "Type": {}
    },
    "property2": {
      "Value": {},
      "Type": {}
    }
  },
  "OperationalDataToDelete": {},
  "Notifications": {},
  "Priority": {},
  "RelatedOpsItems": {},
  "Status": {},
  "OpsItemId": {},
  "Title": {},
  "Category": {},
  "Severity": {},
  "ActualStartTime": {},
  "ActualEndTime": {},
  "PlannedStartTime": {},
  "PlannedEndTime": {},
  "OpsItemArn": {}
}
```

<h3 id="updateopsitem-parameters">Parameters</h3>

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
|body|body|[UpdateOpsItemRequest](#schemaupdateopsitemrequest)|true|none|
|» Description|body|object|false|none|
|» OperationalData|body|object|false|none|
|» » **additionalProperties**|body|[OpsItemDataValue](#schemaopsitemdatavalue)|false|An object that defines the value of the key and its type in the OperationalData map.|
|» OperationalDataToDelete|body|object|false|none|
|» Notifications|body|object|false|none|
|» Priority|body|object|false|none|
|» RelatedOpsItems|body|object|false|none|
|» Status|body|object|false|none|
|» OpsItemId|body|object|true|none|
|» Title|body|object|false|none|
|» Category|body|object|false|none|
|» Severity|body|object|false|none|
|» ActualStartTime|body|object|false|none|
|» ActualEndTime|body|object|false|none|
|» PlannedStartTime|body|object|false|none|
|» PlannedEndTime|body|object|false|none|
|» OpsItemArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdateOpsItem|

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

<h3 id="updateopsitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateOpsItemResponse](#schemaupdateopsitemresponse)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|OpsItemNotFoundException|[OpsItemNotFoundException](#schemaopsitemnotfoundexception)|
|482|482|OpsItemAlreadyExistsException|[OpsItemAlreadyExistsException](#schemaopsitemalreadyexistsexception)|
|483|483|OpsItemLimitExceededException|[OpsItemLimitExceededException](#schemaopsitemlimitexceededexception)|
|484|484|OpsItemInvalidParameterException|[OpsItemInvalidParameterException](#schemaopsiteminvalidparameterexception)|
|485|485|OpsItemAccessDeniedException|[OpsItemAccessDeniedException](#schemaopsitemaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateOpsMetadata

<a id="opIdUpdateOpsMetadata"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdateOpsMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdateOpsMetadata' \
  -d '{
    "OpsMetadataArn": {},
    "MetadataToUpdate": {
      "property1": {
        "Value": {}
      },
      "property2": {
        "Value": {}
      }
    },
    "KeysToDelete": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdateOpsMetadata`

Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.

> Body parameter

```json
{
  "OpsMetadataArn": {},
  "MetadataToUpdate": {
    "property1": {
      "Value": {}
    },
    "property2": {
      "Value": {}
    }
  },
  "KeysToDelete": {}
}
```

<h3 id="updateopsmetadata-parameters">Parameters</h3>

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
|body|body|[UpdateOpsMetadataRequest](#schemaupdateopsmetadatarequest)|true|none|
|» OpsMetadataArn|body|object|true|none|
|» MetadataToUpdate|body|object|false|none|
|» » **additionalProperties**|body|[MetadataValue](#schemametadatavalue)|false|Metadata to assign to an Application Manager application.|
|» KeysToDelete|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdateOpsMetadata|

> Example responses

> 200 Response

```json
{
  "OpsMetadataArn": {}
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

<h3 id="updateopsmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateOpsMetadataResult](#schemaupdateopsmetadataresult)|
|480|480|OpsMetadataNotFoundException|[OpsMetadataNotFoundException](#schemaopsmetadatanotfoundexception)|
|481|481|OpsMetadataInvalidArgumentException|[OpsMetadataInvalidArgumentException](#schemaopsmetadatainvalidargumentexception)|
|482|482|OpsMetadataKeyLimitExceededException|[OpsMetadataKeyLimitExceededException](#schemaopsmetadatakeylimitexceededexception)|
|483|483|OpsMetadataTooManyUpdatesException|[OpsMetadataTooManyUpdatesException](#schemaopsmetadatatoomanyupdatesexception)|
|484|484|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePatchBaseline

<a id="opIdUpdatePatchBaseline"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdatePatchBaseline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdatePatchBaseline' \
  -d '{
    "BaselineId": {},
    "Name": {},
    "GlobalFilters": {
      "PatchFilters": {}
    },
    "ApprovalRules": {
      "PatchRules": {}
    },
    "ApprovedPatches": {},
    "ApprovedPatchesComplianceLevel": {},
    "ApprovedPatchesEnableNonSecurity": {},
    "RejectedPatches": {},
    "RejectedPatchesAction": {},
    "Description": {},
    "Sources": {},
    "Replace": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdatePatchBaseline`

<p>Modifies an existing patch baseline. Fields not specified in the request are left unchanged.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>

> Body parameter

```json
{
  "BaselineId": {},
  "Name": {},
  "GlobalFilters": {
    "PatchFilters": {}
  },
  "ApprovalRules": {
    "PatchRules": {}
  },
  "ApprovedPatches": {},
  "ApprovedPatchesComplianceLevel": {},
  "ApprovedPatchesEnableNonSecurity": {},
  "RejectedPatches": {},
  "RejectedPatchesAction": {},
  "Description": {},
  "Sources": {},
  "Replace": {}
}
```

<h3 id="updatepatchbaseline-parameters">Parameters</h3>

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
|body|body|[UpdatePatchBaselineRequest](#schemaupdatepatchbaselinerequest)|true|none|
|» BaselineId|body|object|true|none|
|» Name|body|object|false|none|
|» GlobalFilters|body|object|false|none|
|» » PatchFilters|body|object|true|none|
|» ApprovalRules|body|object|false|none|
|» » PatchRules|body|object|true|none|
|» ApprovedPatches|body|object|false|none|
|» ApprovedPatchesComplianceLevel|body|object|false|none|
|» ApprovedPatchesEnableNonSecurity|body|object|false|none|
|» RejectedPatches|body|object|false|none|
|» RejectedPatchesAction|body|object|false|none|
|» Description|body|object|false|none|
|» Sources|body|object|false|none|
|» Replace|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdatePatchBaseline|

> Example responses

> 200 Response

```json
{
  "BaselineId": {},
  "Name": {},
  "OperatingSystem": {},
  "GlobalFilters": {
    "PatchFilters": {}
  },
  "ApprovalRules": {
    "PatchRules": {}
  },
  "ApprovedPatches": {},
  "ApprovedPatchesComplianceLevel": {},
  "ApprovedPatchesEnableNonSecurity": {},
  "RejectedPatches": {},
  "RejectedPatchesAction": {},
  "CreatedDate": {},
  "ModifiedDate": {},
  "Description": {},
  "Sources": {}
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

<h3 id="updatepatchbaseline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePatchBaselineResult](#schemaupdatepatchbaselineresult)|
|480|480|DoesNotExistException|[DoesNotExistException](#schemadoesnotexistexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResourceDataSync

<a id="opIdUpdateResourceDataSync"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdateResourceDataSync' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdateResourceDataSync' \
  -d '{
    "SyncName": {},
    "SyncType": {},
    "SyncSource": {
      "SourceType": {},
      "AwsOrganizationsSource": {
        "OrganizationSourceType": {},
        "OrganizationalUnits": {}
      },
      "SourceRegions": {},
      "IncludeFutureRegions": {},
      "EnableAllOpsDataSources": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdateResourceDataSync`

<p>Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the <code>Include only the current account</code> option, you can't edit that sync later and choose the <code>Include all accounts from my Organizations configuration</code> option. Instead, you must delete the first resource data sync, and create a new one.</p> <note> <p>This API operation only supports a resource data sync that was created with a SyncFromSource <code>SyncType</code>.</p> </note>

> Body parameter

```json
{
  "SyncName": {},
  "SyncType": {},
  "SyncSource": {
    "SourceType": {},
    "AwsOrganizationsSource": {
      "OrganizationSourceType": {},
      "OrganizationalUnits": {}
    },
    "SourceRegions": {},
    "IncludeFutureRegions": {},
    "EnableAllOpsDataSources": {}
  }
}
```

<h3 id="updateresourcedatasync-parameters">Parameters</h3>

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
|body|body|[UpdateResourceDataSyncRequest](#schemaupdateresourcedatasyncrequest)|true|none|
|» SyncName|body|object|true|none|
|» SyncType|body|object|true|none|
|» SyncSource|body|object|true|none|
|» » SourceType|body|object|true|none|
|» » AwsOrganizationsSource|body|object|false|none|
|» » » OrganizationSourceType|body|object|true|none|
|» » » OrganizationalUnits|body|object|false|none|
|» » SourceRegions|body|object|true|none|
|» » IncludeFutureRegions|body|object|false|none|
|» » EnableAllOpsDataSources|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdateResourceDataSync|

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

<h3 id="updateresourcedatasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResourceDataSyncResult](#schemaupdateresourcedatasyncresult)|
|480|480|ResourceDataSyncNotFoundException|[ResourceDataSyncNotFoundException](#schemaresourcedatasyncnotfoundexception)|
|481|481|ResourceDataSyncInvalidConfigurationException|[ResourceDataSyncInvalidConfigurationException](#schemaresourcedatasyncinvalidconfigurationexception)|
|482|482|ResourceDataSyncConflictException|[ResourceDataSyncConflictException](#schemaresourcedatasyncconflictexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServiceSetting

<a id="opIdUpdateServiceSetting"></a>

> Code samples

```bash
curl 'https://ssm.us-east-1.amazonaws.com/#X-Amz-Target=AmazonSSM.UpdateServiceSetting' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonSSM.UpdateServiceSetting' \
  -d '{
    "SettingId": {},
    "SettingValue": {}
  }'
```

`POST /#X-Amz-Target=AmazonSSM.UpdateServiceSetting`

<p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Update the service setting for the account. </p>

> Body parameter

```json
{
  "SettingId": {},
  "SettingValue": {}
}
```

<h3 id="updateservicesetting-parameters">Parameters</h3>

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
|body|body|[UpdateServiceSettingRequest](#schemaupdateservicesettingrequest)|true|none|
|» SettingId|body|object|true|none|
|» SettingValue|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonSSM.UpdateServiceSetting|

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

<h3 id="updateservicesetting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceSettingResult](#schemaupdateservicesettingresult)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|
|481|481|ServiceSettingNotFound|[ServiceSettingNotFound](#schemaservicesettingnotfound)|
|482|482|TooManyUpdates|[TooManyUpdates](#schematoomanyupdates)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddTagsToResourceResult">AddTagsToResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstoresourceresult"></a>
<a id="schema_AddTagsToResourceResult"></a>
<a id="tocSaddtagstoresourceresult"></a>
<a id="tocsaddtagstoresourceresult"></a>

```json
{}
```

<h2 id="tocS_AddTagsToResourceRequest">AddTagsToResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstoresourcerequest"></a>
<a id="schema_AddTagsToResourceRequest"></a>
<a id="tocSaddtagstoresourcerequest"></a>
<a id="tocsaddtagstoresourcerequest"></a>

```json
{
  "ResourceType": {},
  "ResourceId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|true|none|none|
|ResourceId|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_InvalidResourceType">InvalidResourceType</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresourcetype"></a>
<a id="schema_InvalidResourceType"></a>
<a id="tocSinvalidresourcetype"></a>
<a id="tocsinvalidresourcetype"></a>

```json
null
```

<h2 id="tocS_InvalidResourceId">InvalidResourceId</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresourceid"></a>
<a id="schema_InvalidResourceId"></a>
<a id="tocSinvalidresourceid"></a>
<a id="tocsinvalidresourceid"></a>

```json
null
```

<h2 id="tocS_InternalServerError">InternalServerError</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror"></a>
<a id="schema_InternalServerError"></a>
<a id="tocSinternalservererror"></a>
<a id="tocsinternalservererror"></a>

```json
null
```

<h2 id="tocS_TooManyTagsError">TooManyTagsError</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagserror"></a>
<a id="schema_TooManyTagsError"></a>
<a id="tocStoomanytagserror"></a>
<a id="tocstoomanytagserror"></a>

```json
null
```

<h2 id="tocS_TooManyUpdates">TooManyUpdates</h2>
<!-- backwards compatibility -->
<a id="schematoomanyupdates"></a>
<a id="schema_TooManyUpdates"></a>
<a id="tocStoomanyupdates"></a>
<a id="tocstoomanyupdates"></a>

```json
null
```

<h2 id="tocS_AssociateOpsItemRelatedItemResponse">AssociateOpsItemRelatedItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateopsitemrelateditemresponse"></a>
<a id="schema_AssociateOpsItemRelatedItemResponse"></a>
<a id="tocSassociateopsitemrelateditemresponse"></a>
<a id="tocsassociateopsitemrelateditemresponse"></a>

```json
{
  "AssociationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|false|none|none|

<h2 id="tocS_AssociateOpsItemRelatedItemRequest">AssociateOpsItemRelatedItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateopsitemrelateditemrequest"></a>
<a id="schema_AssociateOpsItemRelatedItemRequest"></a>
<a id="tocSassociateopsitemrelateditemrequest"></a>
<a id="tocsassociateopsitemrelateditemrequest"></a>

```json
{
  "OpsItemId": {},
  "AssociationType": {},
  "ResourceType": {},
  "ResourceUri": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsItemId|object|true|none|none|
|AssociationType|object|true|none|none|
|ResourceType|object|true|none|none|
|ResourceUri|object|true|none|none|

<h2 id="tocS_OpsItemNotFoundException">OpsItemNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemnotfoundexception"></a>
<a id="schema_OpsItemNotFoundException"></a>
<a id="tocSopsitemnotfoundexception"></a>
<a id="tocsopsitemnotfoundexception"></a>

```json
null
```

<h2 id="tocS_OpsItemLimitExceededException">OpsItemLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemlimitexceededexception"></a>
<a id="schema_OpsItemLimitExceededException"></a>
<a id="tocSopsitemlimitexceededexception"></a>
<a id="tocsopsitemlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_OpsItemInvalidParameterException">OpsItemInvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemaopsiteminvalidparameterexception"></a>
<a id="schema_OpsItemInvalidParameterException"></a>
<a id="tocSopsiteminvalidparameterexception"></a>
<a id="tocsopsiteminvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_OpsItemRelatedItemAlreadyExistsException">OpsItemRelatedItemAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemalreadyexistsexception"></a>
<a id="schema_OpsItemRelatedItemAlreadyExistsException"></a>
<a id="tocSopsitemrelateditemalreadyexistsexception"></a>
<a id="tocsopsitemrelateditemalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_CancelCommandResult">CancelCommandResult</h2>
<!-- backwards compatibility -->
<a id="schemacancelcommandresult"></a>
<a id="schema_CancelCommandResult"></a>
<a id="tocScancelcommandresult"></a>
<a id="tocscancelcommandresult"></a>

```json
{}
```

Whether or not the command was successfully canceled. There is no guarantee that a request can be canceled.

<h2 id="tocS_CancelCommandRequest">CancelCommandRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelcommandrequest"></a>
<a id="schema_CancelCommandRequest"></a>
<a id="tocScancelcommandrequest"></a>
<a id="tocscancelcommandrequest"></a>

```json
{
  "CommandId": {},
  "InstanceIds": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CommandId|object|true|none|none|
|InstanceIds|object|false|none|none|

<h2 id="tocS_InvalidCommandId">InvalidCommandId</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcommandid"></a>
<a id="schema_InvalidCommandId"></a>
<a id="tocSinvalidcommandid"></a>
<a id="tocsinvalidcommandid"></a>

```json
null
```

<h2 id="tocS_InvalidInstanceId">InvalidInstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinstanceid"></a>
<a id="schema_InvalidInstanceId"></a>
<a id="tocSinvalidinstanceid"></a>
<a id="tocsinvalidinstanceid"></a>

```json
null
```

<h2 id="tocS_DuplicateInstanceId">DuplicateInstanceId</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateinstanceid"></a>
<a id="schema_DuplicateInstanceId"></a>
<a id="tocSduplicateinstanceid"></a>
<a id="tocsduplicateinstanceid"></a>

```json
null
```

<h2 id="tocS_CancelMaintenanceWindowExecutionResult">CancelMaintenanceWindowExecutionResult</h2>
<!-- backwards compatibility -->
<a id="schemacancelmaintenancewindowexecutionresult"></a>
<a id="schema_CancelMaintenanceWindowExecutionResult"></a>
<a id="tocScancelmaintenancewindowexecutionresult"></a>
<a id="tocscancelmaintenancewindowexecutionresult"></a>

```json
{
  "WindowExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionId|object|false|none|none|

<h2 id="tocS_CancelMaintenanceWindowExecutionRequest">CancelMaintenanceWindowExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelmaintenancewindowexecutionrequest"></a>
<a id="schema_CancelMaintenanceWindowExecutionRequest"></a>
<a id="tocScancelmaintenancewindowexecutionrequest"></a>
<a id="tocscancelmaintenancewindowexecutionrequest"></a>

```json
{
  "WindowExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionId|object|true|none|none|

<h2 id="tocS_DoesNotExistException">DoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemadoesnotexistexception"></a>
<a id="schema_DoesNotExistException"></a>
<a id="tocSdoesnotexistexception"></a>
<a id="tocsdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_CreateActivationResult">CreateActivationResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateactivationresult"></a>
<a id="schema_CreateActivationResult"></a>
<a id="tocScreateactivationresult"></a>
<a id="tocscreateactivationresult"></a>

```json
{
  "ActivationId": {},
  "ActivationCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivationId|object|false|none|none|
|ActivationCode|object|false|none|none|

<h2 id="tocS_CreateActivationRequest">CreateActivationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateactivationrequest"></a>
<a id="schema_CreateActivationRequest"></a>
<a id="tocScreateactivationrequest"></a>
<a id="tocscreateactivationrequest"></a>

```json
{
  "Description": {},
  "DefaultInstanceName": {},
  "IamRole": {},
  "RegistrationLimit": {},
  "ExpirationDate": {},
  "Tags": {},
  "RegistrationMetadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|DefaultInstanceName|object|false|none|none|
|IamRole|object|true|none|none|
|RegistrationLimit|object|false|none|none|
|ExpirationDate|object|false|none|none|
|Tags|object|false|none|none|
|RegistrationMetadata|object|false|none|none|

<h2 id="tocS_InvalidParameters">InvalidParameters</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameters"></a>
<a id="schema_InvalidParameters"></a>
<a id="tocSinvalidparameters"></a>
<a id="tocsinvalidparameters"></a>

```json
null
```

<h2 id="tocS_CreateAssociationResult">CreateAssociationResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateassociationresult"></a>
<a id="schema_CreateAssociationResult"></a>
<a id="tocScreateassociationresult"></a>
<a id="tocscreateassociationresult"></a>

```json
{
  "AssociationDescription": {
    "Name": {},
    "InstanceId": {},
    "AssociationVersion": {},
    "Date": {},
    "LastUpdateAssociationDate": {},
    "Status": {
      "Date": {},
      "Name": {},
      "Message": {},
      "AdditionalInfo": {}
    },
    "Overview": {
      "Status": {},
      "DetailedStatus": {},
      "AssociationStatusAggregatedCount": {
        "property1": 0,
        "property2": 0
      }
    },
    "DocumentVersion": {},
    "AutomationTargetParameterName": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "AssociationId": {},
    "Targets": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "LastExecutionDate": {},
    "LastSuccessfulExecutionDate": {},
    "AssociationName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationDescription|object|false|none|none|

<h2 id="tocS_CreateAssociationRequest">CreateAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateassociationrequest"></a>
<a id="schema_CreateAssociationRequest"></a>
<a id="tocScreateassociationrequest"></a>
<a id="tocscreateassociationrequest"></a>

```json
{
  "Name": {},
  "DocumentVersion": {},
  "InstanceId": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "Targets": {},
  "ScheduleExpression": {},
  "OutputLocation": {
    "S3Location": {
      "OutputS3Region": {},
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {}
    }
  },
  "AssociationName": {},
  "AutomationTargetParameterName": {},
  "MaxErrors": {},
  "MaxConcurrency": {},
  "ComplianceSeverity": {},
  "SyncCompliance": {},
  "ApplyOnlyAtCronInterval": {},
  "CalendarNames": {},
  "TargetLocations": {},
  "ScheduleOffset": {},
  "TargetMaps": {},
  "Tags": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DocumentVersion|object|false|none|none|
|InstanceId|object|false|none|none|
|Parameters|object|false|none|none|
|Targets|object|false|none|none|
|ScheduleExpression|object|false|none|none|
|OutputLocation|object|false|none|none|
|AssociationName|object|false|none|none|
|AutomationTargetParameterName|object|false|none|none|
|MaxErrors|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|ComplianceSeverity|object|false|none|none|
|SyncCompliance|object|false|none|none|
|ApplyOnlyAtCronInterval|object|false|none|none|
|CalendarNames|object|false|none|none|
|TargetLocations|object|false|none|none|
|ScheduleOffset|object|false|none|none|
|TargetMaps|object|false|none|none|
|Tags|object|false|none|none|
|AlarmConfiguration|[AlarmConfiguration](#schemaalarmconfiguration)|false|none|The details for the CloudWatch alarm you want to apply to an automation or command.|

<h2 id="tocS_AssociationAlreadyExists">AssociationAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemaassociationalreadyexists"></a>
<a id="schema_AssociationAlreadyExists"></a>
<a id="tocSassociationalreadyexists"></a>
<a id="tocsassociationalreadyexists"></a>

```json
null
```

<h2 id="tocS_AssociationLimitExceeded">AssociationLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaassociationlimitexceeded"></a>
<a id="schema_AssociationLimitExceeded"></a>
<a id="tocSassociationlimitexceeded"></a>
<a id="tocsassociationlimitexceeded"></a>

```json
null
```

<h2 id="tocS_InvalidDocument">InvalidDocument</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddocument"></a>
<a id="schema_InvalidDocument"></a>
<a id="tocSinvaliddocument"></a>
<a id="tocsinvaliddocument"></a>

```json
null
```

<h2 id="tocS_InvalidDocumentVersion">InvalidDocumentVersion</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddocumentversion"></a>
<a id="schema_InvalidDocumentVersion"></a>
<a id="tocSinvaliddocumentversion"></a>
<a id="tocsinvaliddocumentversion"></a>

```json
null
```

<h2 id="tocS_UnsupportedPlatformType">UnsupportedPlatformType</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedplatformtype"></a>
<a id="schema_UnsupportedPlatformType"></a>
<a id="tocSunsupportedplatformtype"></a>
<a id="tocsunsupportedplatformtype"></a>

```json
null
```

<h2 id="tocS_InvalidOutputLocation">InvalidOutputLocation</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoutputlocation"></a>
<a id="schema_InvalidOutputLocation"></a>
<a id="tocSinvalidoutputlocation"></a>
<a id="tocsinvalidoutputlocation"></a>

```json
null
```

<h2 id="tocS_InvalidTarget">InvalidTarget</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtarget"></a>
<a id="schema_InvalidTarget"></a>
<a id="tocSinvalidtarget"></a>
<a id="tocsinvalidtarget"></a>

```json
null
```

<h2 id="tocS_InvalidSchedule">InvalidSchedule</h2>
<!-- backwards compatibility -->
<a id="schemainvalidschedule"></a>
<a id="schema_InvalidSchedule"></a>
<a id="tocSinvalidschedule"></a>
<a id="tocsinvalidschedule"></a>

```json
null
```

<h2 id="tocS_InvalidTargetMaps">InvalidTargetMaps</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtargetmaps"></a>
<a id="schema_InvalidTargetMaps"></a>
<a id="tocSinvalidtargetmaps"></a>
<a id="tocsinvalidtargetmaps"></a>

```json
null
```

<h2 id="tocS_InvalidTag">InvalidTag</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtag"></a>
<a id="schema_InvalidTag"></a>
<a id="tocSinvalidtag"></a>
<a id="tocsinvalidtag"></a>

```json
null
```

<h2 id="tocS_CreateAssociationBatchResult">CreateAssociationBatchResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateassociationbatchresult"></a>
<a id="schema_CreateAssociationBatchResult"></a>
<a id="tocScreateassociationbatchresult"></a>
<a id="tocscreateassociationbatchresult"></a>

```json
{
  "Successful": {},
  "Failed": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Successful|object|false|none|none|
|Failed|object|false|none|none|

<h2 id="tocS_CreateAssociationBatchRequest">CreateAssociationBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateassociationbatchrequest"></a>
<a id="schema_CreateAssociationBatchRequest"></a>
<a id="tocScreateassociationbatchrequest"></a>
<a id="tocscreateassociationbatchrequest"></a>

```json
{
  "Entries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entries|object|true|none|none|

<h2 id="tocS_CreateDocumentResult">CreateDocumentResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedocumentresult"></a>
<a id="schema_CreateDocumentResult"></a>
<a id="tocScreatedocumentresult"></a>
<a id="tocscreatedocumentresult"></a>

```json
{
  "DocumentDescription": {
    "Sha1": {},
    "Hash": {},
    "HashType": {},
    "Name": {},
    "DisplayName": {},
    "VersionName": {},
    "Owner": {},
    "CreatedDate": {},
    "Status": {},
    "StatusInformation": {},
    "DocumentVersion": {},
    "Description": {},
    "Parameters": {},
    "PlatformTypes": {},
    "DocumentType": {},
    "SchemaVersion": {},
    "LatestVersion": {},
    "DefaultVersion": {},
    "DocumentFormat": {},
    "TargetType": {},
    "Tags": {},
    "AttachmentsInformation": {},
    "Requires": {},
    "Author": {},
    "ReviewInformation": {},
    "ApprovedVersion": {},
    "PendingReviewVersion": {},
    "ReviewStatus": {},
    "Category": {},
    "CategoryEnum": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentDescription|object|false|none|none|

<h2 id="tocS_CreateDocumentRequest">CreateDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedocumentrequest"></a>
<a id="schema_CreateDocumentRequest"></a>
<a id="tocScreatedocumentrequest"></a>
<a id="tocscreatedocumentrequest"></a>

```json
{
  "Content": {},
  "Requires": {},
  "Attachments": {},
  "Name": {},
  "DisplayName": {},
  "VersionName": {},
  "DocumentType": {},
  "DocumentFormat": {},
  "TargetType": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|true|none|none|
|Requires|object|false|none|none|
|Attachments|object|false|none|none|
|Name|object|true|none|none|
|DisplayName|object|false|none|none|
|VersionName|object|false|none|none|
|DocumentType|object|false|none|none|
|DocumentFormat|object|false|none|none|
|TargetType|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DocumentAlreadyExists">DocumentAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemadocumentalreadyexists"></a>
<a id="schema_DocumentAlreadyExists"></a>
<a id="tocSdocumentalreadyexists"></a>
<a id="tocsdocumentalreadyexists"></a>

```json
null
```

<h2 id="tocS_MaxDocumentSizeExceeded">MaxDocumentSizeExceeded</h2>
<!-- backwards compatibility -->
<a id="schemamaxdocumentsizeexceeded"></a>
<a id="schema_MaxDocumentSizeExceeded"></a>
<a id="tocSmaxdocumentsizeexceeded"></a>
<a id="tocsmaxdocumentsizeexceeded"></a>

```json
null
```

<h2 id="tocS_InvalidDocumentContent">InvalidDocumentContent</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddocumentcontent"></a>
<a id="schema_InvalidDocumentContent"></a>
<a id="tocSinvaliddocumentcontent"></a>
<a id="tocsinvaliddocumentcontent"></a>

```json
null
```

<h2 id="tocS_DocumentLimitExceeded">DocumentLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemadocumentlimitexceeded"></a>
<a id="schema_DocumentLimitExceeded"></a>
<a id="tocSdocumentlimitexceeded"></a>
<a id="tocsdocumentlimitexceeded"></a>

```json
null
```

<h2 id="tocS_InvalidDocumentSchemaVersion">InvalidDocumentSchemaVersion</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddocumentschemaversion"></a>
<a id="schema_InvalidDocumentSchemaVersion"></a>
<a id="tocSinvaliddocumentschemaversion"></a>
<a id="tocsinvaliddocumentschemaversion"></a>

```json
null
```

<h2 id="tocS_CreateMaintenanceWindowResult">CreateMaintenanceWindowResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatemaintenancewindowresult"></a>
<a id="schema_CreateMaintenanceWindowResult"></a>
<a id="tocScreatemaintenancewindowresult"></a>
<a id="tocscreatemaintenancewindowresult"></a>

```json
{
  "WindowId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|

<h2 id="tocS_CreateMaintenanceWindowRequest">CreateMaintenanceWindowRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemaintenancewindowrequest"></a>
<a id="schema_CreateMaintenanceWindowRequest"></a>
<a id="tocScreatemaintenancewindowrequest"></a>
<a id="tocscreatemaintenancewindowrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "StartDate": {},
  "EndDate": {},
  "Schedule": {},
  "ScheduleTimezone": {},
  "ScheduleOffset": {},
  "Duration": {},
  "Cutoff": {},
  "AllowUnassociatedTargets": {},
  "ClientToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|StartDate|object|false|none|none|
|EndDate|object|false|none|none|
|Schedule|object|true|none|none|
|ScheduleTimezone|object|false|none|none|
|ScheduleOffset|object|false|none|none|
|Duration|object|true|none|none|
|Cutoff|object|true|none|none|
|AllowUnassociatedTargets|object|true|none|none|
|ClientToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_IdempotentParameterMismatch">IdempotentParameterMismatch</h2>
<!-- backwards compatibility -->
<a id="schemaidempotentparametermismatch"></a>
<a id="schema_IdempotentParameterMismatch"></a>
<a id="tocSidempotentparametermismatch"></a>
<a id="tocsidempotentparametermismatch"></a>

```json
null
```

<h2 id="tocS_ResourceLimitExceededException">ResourceLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelimitexceededexception"></a>
<a id="schema_ResourceLimitExceededException"></a>
<a id="tocSresourcelimitexceededexception"></a>
<a id="tocsresourcelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateOpsItemResponse">CreateOpsItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateopsitemresponse"></a>
<a id="schema_CreateOpsItemResponse"></a>
<a id="tocScreateopsitemresponse"></a>
<a id="tocscreateopsitemresponse"></a>

```json
{
  "OpsItemId": {},
  "OpsItemArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsItemId|object|false|none|none|
|OpsItemArn|object|false|none|none|

<h2 id="tocS_CreateOpsItemRequest">CreateOpsItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateopsitemrequest"></a>
<a id="schema_CreateOpsItemRequest"></a>
<a id="tocScreateopsitemrequest"></a>
<a id="tocscreateopsitemrequest"></a>

```json
{
  "Description": {},
  "OpsItemType": {},
  "OperationalData": {
    "property1": {
      "Value": {},
      "Type": {}
    },
    "property2": {
      "Value": {},
      "Type": {}
    }
  },
  "Notifications": {},
  "Priority": {},
  "RelatedOpsItems": {},
  "Source": {},
  "Title": {},
  "Tags": {},
  "Category": {},
  "Severity": {},
  "ActualStartTime": {},
  "ActualEndTime": {},
  "PlannedStartTime": {},
  "PlannedEndTime": {},
  "AccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|true|none|none|
|OpsItemType|object|false|none|none|
|OperationalData|object|false|none|none|
|Notifications|object|false|none|none|
|Priority|object|false|none|none|
|RelatedOpsItems|object|false|none|none|
|Source|object|true|none|none|
|Title|object|true|none|none|
|Tags|object|false|none|none|
|Category|object|false|none|none|
|Severity|object|false|none|none|
|ActualStartTime|object|false|none|none|
|ActualEndTime|object|false|none|none|
|PlannedStartTime|object|false|none|none|
|PlannedEndTime|object|false|none|none|
|AccountId|object|false|none|none|

<h2 id="tocS_OpsItemAlreadyExistsException">OpsItemAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemalreadyexistsexception"></a>
<a id="schema_OpsItemAlreadyExistsException"></a>
<a id="tocSopsitemalreadyexistsexception"></a>
<a id="tocsopsitemalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_OpsItemAccessDeniedException">OpsItemAccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemaccessdeniedexception"></a>
<a id="schema_OpsItemAccessDeniedException"></a>
<a id="tocSopsitemaccessdeniedexception"></a>
<a id="tocsopsitemaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_CreateOpsMetadataResult">CreateOpsMetadataResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateopsmetadataresult"></a>
<a id="schema_CreateOpsMetadataResult"></a>
<a id="tocScreateopsmetadataresult"></a>
<a id="tocscreateopsmetadataresult"></a>

```json
{
  "OpsMetadataArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsMetadataArn|object|false|none|none|

<h2 id="tocS_CreateOpsMetadataRequest">CreateOpsMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateopsmetadatarequest"></a>
<a id="schema_CreateOpsMetadataRequest"></a>
<a id="tocScreateopsmetadatarequest"></a>
<a id="tocscreateopsmetadatarequest"></a>

```json
{
  "ResourceId": {},
  "Metadata": {
    "property1": {
      "Value": {}
    },
    "property2": {
      "Value": {}
    }
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|Metadata|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_OpsMetadataAlreadyExistsException">OpsMetadataAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadataalreadyexistsexception"></a>
<a id="schema_OpsMetadataAlreadyExistsException"></a>
<a id="tocSopsmetadataalreadyexistsexception"></a>
<a id="tocsopsmetadataalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_OpsMetadataTooManyUpdatesException">OpsMetadataTooManyUpdatesException</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadatatoomanyupdatesexception"></a>
<a id="schema_OpsMetadataTooManyUpdatesException"></a>
<a id="tocSopsmetadatatoomanyupdatesexception"></a>
<a id="tocsopsmetadatatoomanyupdatesexception"></a>

```json
null
```

<h2 id="tocS_OpsMetadataInvalidArgumentException">OpsMetadataInvalidArgumentException</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadatainvalidargumentexception"></a>
<a id="schema_OpsMetadataInvalidArgumentException"></a>
<a id="tocSopsmetadatainvalidargumentexception"></a>
<a id="tocsopsmetadatainvalidargumentexception"></a>

```json
null
```

<h2 id="tocS_OpsMetadataLimitExceededException">OpsMetadataLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadatalimitexceededexception"></a>
<a id="schema_OpsMetadataLimitExceededException"></a>
<a id="tocSopsmetadatalimitexceededexception"></a>
<a id="tocsopsmetadatalimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreatePatchBaselineResult">CreatePatchBaselineResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatepatchbaselineresult"></a>
<a id="schema_CreatePatchBaselineResult"></a>
<a id="tocScreatepatchbaselineresult"></a>
<a id="tocscreatepatchbaselineresult"></a>

```json
{
  "BaselineId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|false|none|none|

<h2 id="tocS_CreatePatchBaselineRequest">CreatePatchBaselineRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepatchbaselinerequest"></a>
<a id="schema_CreatePatchBaselineRequest"></a>
<a id="tocScreatepatchbaselinerequest"></a>
<a id="tocscreatepatchbaselinerequest"></a>

```json
{
  "OperatingSystem": {},
  "Name": {},
  "GlobalFilters": {
    "PatchFilters": {}
  },
  "ApprovalRules": {
    "PatchRules": {}
  },
  "ApprovedPatches": {},
  "ApprovedPatchesComplianceLevel": {},
  "ApprovedPatchesEnableNonSecurity": {},
  "RejectedPatches": {},
  "RejectedPatchesAction": {},
  "Description": {},
  "Sources": {},
  "ClientToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperatingSystem|object|false|none|none|
|Name|object|true|none|none|
|GlobalFilters|object|false|none|none|
|ApprovalRules|object|false|none|none|
|ApprovedPatches|object|false|none|none|
|ApprovedPatchesComplianceLevel|object|false|none|none|
|ApprovedPatchesEnableNonSecurity|object|false|none|none|
|RejectedPatches|object|false|none|none|
|RejectedPatchesAction|object|false|none|none|
|Description|object|false|none|none|
|Sources|object|false|none|none|
|ClientToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateResourceDataSyncResult">CreateResourceDataSyncResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateresourcedatasyncresult"></a>
<a id="schema_CreateResourceDataSyncResult"></a>
<a id="tocScreateresourcedatasyncresult"></a>
<a id="tocscreateresourcedatasyncresult"></a>

```json
{}
```

<h2 id="tocS_CreateResourceDataSyncRequest">CreateResourceDataSyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateresourcedatasyncrequest"></a>
<a id="schema_CreateResourceDataSyncRequest"></a>
<a id="tocScreateresourcedatasyncrequest"></a>
<a id="tocscreateresourcedatasyncrequest"></a>

```json
{
  "SyncName": {},
  "S3Destination": {
    "BucketName": {},
    "Prefix": {},
    "SyncFormat": {},
    "Region": {},
    "AWSKMSKeyARN": {},
    "DestinationDataSharing": {
      "DestinationDataSharingType": {}
    }
  },
  "SyncType": {},
  "SyncSource": {
    "SourceType": {},
    "AwsOrganizationsSource": {
      "OrganizationSourceType": {},
      "OrganizationalUnits": {}
    },
    "SourceRegions": {},
    "IncludeFutureRegions": {},
    "EnableAllOpsDataSources": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SyncName|object|true|none|none|
|S3Destination|object|false|none|none|
|SyncType|object|false|none|none|
|SyncSource|object|false|none|none|

<h2 id="tocS_ResourceDataSyncCountExceededException">ResourceDataSyncCountExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasynccountexceededexception"></a>
<a id="schema_ResourceDataSyncCountExceededException"></a>
<a id="tocSresourcedatasynccountexceededexception"></a>
<a id="tocsresourcedatasynccountexceededexception"></a>

```json
null
```

<h2 id="tocS_ResourceDataSyncAlreadyExistsException">ResourceDataSyncAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncalreadyexistsexception"></a>
<a id="schema_ResourceDataSyncAlreadyExistsException"></a>
<a id="tocSresourcedatasyncalreadyexistsexception"></a>
<a id="tocsresourcedatasyncalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ResourceDataSyncInvalidConfigurationException">ResourceDataSyncInvalidConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncinvalidconfigurationexception"></a>
<a id="schema_ResourceDataSyncInvalidConfigurationException"></a>
<a id="tocSresourcedatasyncinvalidconfigurationexception"></a>
<a id="tocsresourcedatasyncinvalidconfigurationexception"></a>

```json
null
```

<h2 id="tocS_DeleteActivationResult">DeleteActivationResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteactivationresult"></a>
<a id="schema_DeleteActivationResult"></a>
<a id="tocSdeleteactivationresult"></a>
<a id="tocsdeleteactivationresult"></a>

```json
{}
```

<h2 id="tocS_DeleteActivationRequest">DeleteActivationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteactivationrequest"></a>
<a id="schema_DeleteActivationRequest"></a>
<a id="tocSdeleteactivationrequest"></a>
<a id="tocsdeleteactivationrequest"></a>

```json
{
  "ActivationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivationId|object|true|none|none|

<h2 id="tocS_InvalidActivationId">InvalidActivationId</h2>
<!-- backwards compatibility -->
<a id="schemainvalidactivationid"></a>
<a id="schema_InvalidActivationId"></a>
<a id="tocSinvalidactivationid"></a>
<a id="tocsinvalidactivationid"></a>

```json
null
```

<h2 id="tocS_InvalidActivation">InvalidActivation</h2>
<!-- backwards compatibility -->
<a id="schemainvalidactivation"></a>
<a id="schema_InvalidActivation"></a>
<a id="tocSinvalidactivation"></a>
<a id="tocsinvalidactivation"></a>

```json
null
```

<h2 id="tocS_DeleteAssociationResult">DeleteAssociationResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassociationresult"></a>
<a id="schema_DeleteAssociationResult"></a>
<a id="tocSdeleteassociationresult"></a>
<a id="tocsdeleteassociationresult"></a>

```json
{}
```

<h2 id="tocS_DeleteAssociationRequest">DeleteAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassociationrequest"></a>
<a id="schema_DeleteAssociationRequest"></a>
<a id="tocSdeleteassociationrequest"></a>
<a id="tocsdeleteassociationrequest"></a>

```json
{
  "Name": {},
  "InstanceId": {},
  "AssociationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|InstanceId|object|false|none|none|
|AssociationId|object|false|none|none|

<h2 id="tocS_AssociationDoesNotExist">AssociationDoesNotExist</h2>
<!-- backwards compatibility -->
<a id="schemaassociationdoesnotexist"></a>
<a id="schema_AssociationDoesNotExist"></a>
<a id="tocSassociationdoesnotexist"></a>
<a id="tocsassociationdoesnotexist"></a>

```json
null
```

<h2 id="tocS_DeleteDocumentResult">DeleteDocumentResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedocumentresult"></a>
<a id="schema_DeleteDocumentResult"></a>
<a id="tocSdeletedocumentresult"></a>
<a id="tocsdeletedocumentresult"></a>

```json
{}
```

<h2 id="tocS_DeleteDocumentRequest">DeleteDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedocumentrequest"></a>
<a id="schema_DeleteDocumentRequest"></a>
<a id="tocSdeletedocumentrequest"></a>
<a id="tocsdeletedocumentrequest"></a>

```json
{
  "Name": {},
  "DocumentVersion": {},
  "VersionName": {},
  "Force": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DocumentVersion|object|false|none|none|
|VersionName|object|false|none|none|
|Force|object|false|none|none|

<h2 id="tocS_InvalidDocumentOperation">InvalidDocumentOperation</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddocumentoperation"></a>
<a id="schema_InvalidDocumentOperation"></a>
<a id="tocSinvaliddocumentoperation"></a>
<a id="tocsinvaliddocumentoperation"></a>

```json
null
```

<h2 id="tocS_AssociatedInstances">AssociatedInstances</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedinstances"></a>
<a id="schema_AssociatedInstances"></a>
<a id="tocSassociatedinstances"></a>
<a id="tocsassociatedinstances"></a>

```json
null
```

<h2 id="tocS_DeleteInventoryResult">DeleteInventoryResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinventoryresult"></a>
<a id="schema_DeleteInventoryResult"></a>
<a id="tocSdeleteinventoryresult"></a>
<a id="tocsdeleteinventoryresult"></a>

```json
{
  "DeletionId": {},
  "TypeName": {},
  "DeletionSummary": {
    "TotalCount": {},
    "RemainingCount": {},
    "SummaryItems": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeletionId|object|false|none|none|
|TypeName|object|false|none|none|
|DeletionSummary|object|false|none|none|

<h2 id="tocS_DeleteInventoryRequest">DeleteInventoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinventoryrequest"></a>
<a id="schema_DeleteInventoryRequest"></a>
<a id="tocSdeleteinventoryrequest"></a>
<a id="tocsdeleteinventoryrequest"></a>

```json
{
  "TypeName": {},
  "SchemaDeleteOption": {},
  "DryRun": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeName|object|true|none|none|
|SchemaDeleteOption|object|false|none|none|
|DryRun|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_InvalidTypeNameException">InvalidTypeNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtypenameexception"></a>
<a id="schema_InvalidTypeNameException"></a>
<a id="tocSinvalidtypenameexception"></a>
<a id="tocsinvalidtypenameexception"></a>

```json
null
```

<h2 id="tocS_InvalidOptionException">InvalidOptionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoptionexception"></a>
<a id="schema_InvalidOptionException"></a>
<a id="tocSinvalidoptionexception"></a>
<a id="tocsinvalidoptionexception"></a>

```json
null
```

<h2 id="tocS_InvalidDeleteInventoryParametersException">InvalidDeleteInventoryParametersException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeleteinventoryparametersexception"></a>
<a id="schema_InvalidDeleteInventoryParametersException"></a>
<a id="tocSinvaliddeleteinventoryparametersexception"></a>
<a id="tocsinvaliddeleteinventoryparametersexception"></a>

```json
null
```

<h2 id="tocS_InvalidInventoryRequestException">InvalidInventoryRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinventoryrequestexception"></a>
<a id="schema_InvalidInventoryRequestException"></a>
<a id="tocSinvalidinventoryrequestexception"></a>
<a id="tocsinvalidinventoryrequestexception"></a>

```json
null
```

<h2 id="tocS_DeleteMaintenanceWindowResult">DeleteMaintenanceWindowResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletemaintenancewindowresult"></a>
<a id="schema_DeleteMaintenanceWindowResult"></a>
<a id="tocSdeletemaintenancewindowresult"></a>
<a id="tocsdeletemaintenancewindowresult"></a>

```json
{
  "WindowId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|

<h2 id="tocS_DeleteMaintenanceWindowRequest">DeleteMaintenanceWindowRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemaintenancewindowrequest"></a>
<a id="schema_DeleteMaintenanceWindowRequest"></a>
<a id="tocSdeletemaintenancewindowrequest"></a>
<a id="tocsdeletemaintenancewindowrequest"></a>

```json
{
  "WindowId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|true|none|none|

<h2 id="tocS_DeleteOpsMetadataResult">DeleteOpsMetadataResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteopsmetadataresult"></a>
<a id="schema_DeleteOpsMetadataResult"></a>
<a id="tocSdeleteopsmetadataresult"></a>
<a id="tocsdeleteopsmetadataresult"></a>

```json
{}
```

<h2 id="tocS_DeleteOpsMetadataRequest">DeleteOpsMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteopsmetadatarequest"></a>
<a id="schema_DeleteOpsMetadataRequest"></a>
<a id="tocSdeleteopsmetadatarequest"></a>
<a id="tocsdeleteopsmetadatarequest"></a>

```json
{
  "OpsMetadataArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsMetadataArn|object|true|none|none|

<h2 id="tocS_OpsMetadataNotFoundException">OpsMetadataNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadatanotfoundexception"></a>
<a id="schema_OpsMetadataNotFoundException"></a>
<a id="tocSopsmetadatanotfoundexception"></a>
<a id="tocsopsmetadatanotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteParameterResult">DeleteParameterResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteparameterresult"></a>
<a id="schema_DeleteParameterResult"></a>
<a id="tocSdeleteparameterresult"></a>
<a id="tocsdeleteparameterresult"></a>

```json
{}
```

<h2 id="tocS_DeleteParameterRequest">DeleteParameterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteparameterrequest"></a>
<a id="schema_DeleteParameterRequest"></a>
<a id="tocSdeleteparameterrequest"></a>
<a id="tocsdeleteparameterrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_ParameterNotFound">ParameterNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaparameternotfound"></a>
<a id="schema_ParameterNotFound"></a>
<a id="tocSparameternotfound"></a>
<a id="tocsparameternotfound"></a>

```json
null
```

<h2 id="tocS_DeleteParametersResult">DeleteParametersResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteparametersresult"></a>
<a id="schema_DeleteParametersResult"></a>
<a id="tocSdeleteparametersresult"></a>
<a id="tocsdeleteparametersresult"></a>

```json
{
  "DeletedParameters": {},
  "InvalidParameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeletedParameters|object|false|none|none|
|InvalidParameters|object|false|none|none|

<h2 id="tocS_DeleteParametersRequest">DeleteParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteparametersrequest"></a>
<a id="schema_DeleteParametersRequest"></a>
<a id="tocSdeleteparametersrequest"></a>
<a id="tocsdeleteparametersrequest"></a>

```json
{
  "Names": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|true|none|none|

<h2 id="tocS_DeletePatchBaselineResult">DeletePatchBaselineResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletepatchbaselineresult"></a>
<a id="schema_DeletePatchBaselineResult"></a>
<a id="tocSdeletepatchbaselineresult"></a>
<a id="tocsdeletepatchbaselineresult"></a>

```json
{
  "BaselineId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|false|none|none|

<h2 id="tocS_DeletePatchBaselineRequest">DeletePatchBaselineRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepatchbaselinerequest"></a>
<a id="schema_DeletePatchBaselineRequest"></a>
<a id="tocSdeletepatchbaselinerequest"></a>
<a id="tocsdeletepatchbaselinerequest"></a>

```json
{
  "BaselineId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|true|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_DeleteResourceDataSyncResult">DeleteResourceDataSyncResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcedatasyncresult"></a>
<a id="schema_DeleteResourceDataSyncResult"></a>
<a id="tocSdeleteresourcedatasyncresult"></a>
<a id="tocsdeleteresourcedatasyncresult"></a>

```json
{}
```

<h2 id="tocS_DeleteResourceDataSyncRequest">DeleteResourceDataSyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcedatasyncrequest"></a>
<a id="schema_DeleteResourceDataSyncRequest"></a>
<a id="tocSdeleteresourcedatasyncrequest"></a>
<a id="tocsdeleteresourcedatasyncrequest"></a>

```json
{
  "SyncName": {},
  "SyncType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SyncName|object|true|none|none|
|SyncType|object|false|none|none|

<h2 id="tocS_ResourceDataSyncNotFoundException">ResourceDataSyncNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncnotfoundexception"></a>
<a id="schema_ResourceDataSyncNotFoundException"></a>
<a id="tocSresourcedatasyncnotfoundexception"></a>
<a id="tocsresourcedatasyncnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteResourcePolicyResponse">DeleteResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyresponse"></a>
<a id="schema_DeleteResourcePolicyResponse"></a>
<a id="tocSdeleteresourcepolicyresponse"></a>
<a id="tocsdeleteresourcepolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteResourcePolicyRequest">DeleteResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyrequest"></a>
<a id="schema_DeleteResourcePolicyRequest"></a>
<a id="tocSdeleteresourcepolicyrequest"></a>
<a id="tocsdeleteresourcepolicyrequest"></a>

```json
{
  "ResourceArn": {},
  "PolicyId": {},
  "PolicyHash": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|PolicyId|object|true|none|none|
|PolicyHash|object|true|none|none|

<h2 id="tocS_ResourcePolicyInvalidParameterException">ResourcePolicyInvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicyinvalidparameterexception"></a>
<a id="schema_ResourcePolicyInvalidParameterException"></a>
<a id="tocSresourcepolicyinvalidparameterexception"></a>
<a id="tocsresourcepolicyinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_ResourcePolicyConflictException">ResourcePolicyConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicyconflictexception"></a>
<a id="schema_ResourcePolicyConflictException"></a>
<a id="tocSresourcepolicyconflictexception"></a>
<a id="tocsresourcepolicyconflictexception"></a>

```json
null
```

<h2 id="tocS_DeregisterManagedInstanceResult">DeregisterManagedInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemaderegistermanagedinstanceresult"></a>
<a id="schema_DeregisterManagedInstanceResult"></a>
<a id="tocSderegistermanagedinstanceresult"></a>
<a id="tocsderegistermanagedinstanceresult"></a>

```json
{}
```

<h2 id="tocS_DeregisterManagedInstanceRequest">DeregisterManagedInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegistermanagedinstancerequest"></a>
<a id="schema_DeregisterManagedInstanceRequest"></a>
<a id="tocSderegistermanagedinstancerequest"></a>
<a id="tocsderegistermanagedinstancerequest"></a>

```json
{
  "InstanceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|

<h2 id="tocS_DeregisterPatchBaselineForPatchGroupResult">DeregisterPatchBaselineForPatchGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterpatchbaselineforpatchgroupresult"></a>
<a id="schema_DeregisterPatchBaselineForPatchGroupResult"></a>
<a id="tocSderegisterpatchbaselineforpatchgroupresult"></a>
<a id="tocsderegisterpatchbaselineforpatchgroupresult"></a>

```json
{
  "BaselineId": {},
  "PatchGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|false|none|none|
|PatchGroup|object|false|none|none|

<h2 id="tocS_DeregisterPatchBaselineForPatchGroupRequest">DeregisterPatchBaselineForPatchGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterpatchbaselineforpatchgrouprequest"></a>
<a id="schema_DeregisterPatchBaselineForPatchGroupRequest"></a>
<a id="tocSderegisterpatchbaselineforpatchgrouprequest"></a>
<a id="tocsderegisterpatchbaselineforpatchgrouprequest"></a>

```json
{
  "BaselineId": {},
  "PatchGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|true|none|none|
|PatchGroup|object|true|none|none|

<h2 id="tocS_DeregisterTargetFromMaintenanceWindowResult">DeregisterTargetFromMaintenanceWindowResult</h2>
<!-- backwards compatibility -->
<a id="schemaderegistertargetfrommaintenancewindowresult"></a>
<a id="schema_DeregisterTargetFromMaintenanceWindowResult"></a>
<a id="tocSderegistertargetfrommaintenancewindowresult"></a>
<a id="tocsderegistertargetfrommaintenancewindowresult"></a>

```json
{
  "WindowId": {},
  "WindowTargetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|WindowTargetId|object|false|none|none|

<h2 id="tocS_DeregisterTargetFromMaintenanceWindowRequest">DeregisterTargetFromMaintenanceWindowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegistertargetfrommaintenancewindowrequest"></a>
<a id="schema_DeregisterTargetFromMaintenanceWindowRequest"></a>
<a id="tocSderegistertargetfrommaintenancewindowrequest"></a>
<a id="tocsderegistertargetfrommaintenancewindowrequest"></a>

```json
{
  "WindowId": {},
  "WindowTargetId": {},
  "Safe": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|true|none|none|
|WindowTargetId|object|true|none|none|
|Safe|object|false|none|none|

<h2 id="tocS_TargetInUseException">TargetInUseException</h2>
<!-- backwards compatibility -->
<a id="schematargetinuseexception"></a>
<a id="schema_TargetInUseException"></a>
<a id="tocStargetinuseexception"></a>
<a id="tocstargetinuseexception"></a>

```json
null
```

<h2 id="tocS_DeregisterTaskFromMaintenanceWindowResult">DeregisterTaskFromMaintenanceWindowResult</h2>
<!-- backwards compatibility -->
<a id="schemaderegistertaskfrommaintenancewindowresult"></a>
<a id="schema_DeregisterTaskFromMaintenanceWindowResult"></a>
<a id="tocSderegistertaskfrommaintenancewindowresult"></a>
<a id="tocsderegistertaskfrommaintenancewindowresult"></a>

```json
{
  "WindowId": {},
  "WindowTaskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|WindowTaskId|object|false|none|none|

<h2 id="tocS_DeregisterTaskFromMaintenanceWindowRequest">DeregisterTaskFromMaintenanceWindowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegistertaskfrommaintenancewindowrequest"></a>
<a id="schema_DeregisterTaskFromMaintenanceWindowRequest"></a>
<a id="tocSderegistertaskfrommaintenancewindowrequest"></a>
<a id="tocsderegistertaskfrommaintenancewindowrequest"></a>

```json
{
  "WindowId": {},
  "WindowTaskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|true|none|none|
|WindowTaskId|object|true|none|none|

<h2 id="tocS_DescribeActivationsResult">DescribeActivationsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeactivationsresult"></a>
<a id="schema_DescribeActivationsResult"></a>
<a id="tocSdescribeactivationsresult"></a>
<a id="tocsdescribeactivationsresult"></a>

```json
{
  "ActivationList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivationList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeActivationsRequest">DescribeActivationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeactivationsrequest"></a>
<a id="schema_DescribeActivationsRequest"></a>
<a id="tocSdescribeactivationsrequest"></a>
<a id="tocsdescribeactivationsrequest"></a>

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidFilter">InvalidFilter</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfilter"></a>
<a id="schema_InvalidFilter"></a>
<a id="tocSinvalidfilter"></a>
<a id="tocsinvalidfilter"></a>

```json
null
```

<h2 id="tocS_InvalidNextToken">InvalidNextToken</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttoken"></a>
<a id="schema_InvalidNextToken"></a>
<a id="tocSinvalidnexttoken"></a>
<a id="tocsinvalidnexttoken"></a>

```json
null
```

<h2 id="tocS_DescribeAssociationResult">DescribeAssociationResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassociationresult"></a>
<a id="schema_DescribeAssociationResult"></a>
<a id="tocSdescribeassociationresult"></a>
<a id="tocsdescribeassociationresult"></a>

```json
{
  "AssociationDescription": {
    "Name": {},
    "InstanceId": {},
    "AssociationVersion": {},
    "Date": {},
    "LastUpdateAssociationDate": {},
    "Status": {
      "Date": {},
      "Name": {},
      "Message": {},
      "AdditionalInfo": {}
    },
    "Overview": {
      "Status": {},
      "DetailedStatus": {},
      "AssociationStatusAggregatedCount": {
        "property1": 0,
        "property2": 0
      }
    },
    "DocumentVersion": {},
    "AutomationTargetParameterName": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "AssociationId": {},
    "Targets": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "LastExecutionDate": {},
    "LastSuccessfulExecutionDate": {},
    "AssociationName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationDescription|object|false|none|none|

<h2 id="tocS_DescribeAssociationRequest">DescribeAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassociationrequest"></a>
<a id="schema_DescribeAssociationRequest"></a>
<a id="tocSdescribeassociationrequest"></a>
<a id="tocsdescribeassociationrequest"></a>

```json
{
  "Name": {},
  "InstanceId": {},
  "AssociationId": {},
  "AssociationVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|InstanceId|object|false|none|none|
|AssociationId|object|false|none|none|
|AssociationVersion|object|false|none|none|

<h2 id="tocS_InvalidAssociationVersion">InvalidAssociationVersion</h2>
<!-- backwards compatibility -->
<a id="schemainvalidassociationversion"></a>
<a id="schema_InvalidAssociationVersion"></a>
<a id="tocSinvalidassociationversion"></a>
<a id="tocsinvalidassociationversion"></a>

```json
null
```

<h2 id="tocS_DescribeAssociationExecutionTargetsResult">DescribeAssociationExecutionTargetsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassociationexecutiontargetsresult"></a>
<a id="schema_DescribeAssociationExecutionTargetsResult"></a>
<a id="tocSdescribeassociationexecutiontargetsresult"></a>
<a id="tocsdescribeassociationexecutiontargetsresult"></a>

```json
{
  "AssociationExecutionTargets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationExecutionTargets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAssociationExecutionTargetsRequest">DescribeAssociationExecutionTargetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassociationexecutiontargetsrequest"></a>
<a id="schema_DescribeAssociationExecutionTargetsRequest"></a>
<a id="tocSdescribeassociationexecutiontargetsrequest"></a>
<a id="tocsdescribeassociationexecutiontargetsrequest"></a>

```json
{
  "AssociationId": {},
  "ExecutionId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|true|none|none|
|ExecutionId|object|true|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_AssociationExecutionDoesNotExist">AssociationExecutionDoesNotExist</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecutiondoesnotexist"></a>
<a id="schema_AssociationExecutionDoesNotExist"></a>
<a id="tocSassociationexecutiondoesnotexist"></a>
<a id="tocsassociationexecutiondoesnotexist"></a>

```json
null
```

<h2 id="tocS_DescribeAssociationExecutionsResult">DescribeAssociationExecutionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassociationexecutionsresult"></a>
<a id="schema_DescribeAssociationExecutionsResult"></a>
<a id="tocSdescribeassociationexecutionsresult"></a>
<a id="tocsdescribeassociationexecutionsresult"></a>

```json
{
  "AssociationExecutions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationExecutions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAssociationExecutionsRequest">DescribeAssociationExecutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassociationexecutionsrequest"></a>
<a id="schema_DescribeAssociationExecutionsRequest"></a>
<a id="tocSdescribeassociationexecutionsrequest"></a>
<a id="tocsdescribeassociationexecutionsrequest"></a>

```json
{
  "AssociationId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|true|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAutomationExecutionsResult">DescribeAutomationExecutionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeautomationexecutionsresult"></a>
<a id="schema_DescribeAutomationExecutionsResult"></a>
<a id="tocSdescribeautomationexecutionsresult"></a>
<a id="tocsdescribeautomationexecutionsresult"></a>

```json
{
  "AutomationExecutionMetadataList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomationExecutionMetadataList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAutomationExecutionsRequest">DescribeAutomationExecutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeautomationexecutionsrequest"></a>
<a id="schema_DescribeAutomationExecutionsRequest"></a>
<a id="tocSdescribeautomationexecutionsrequest"></a>
<a id="tocsdescribeautomationexecutionsrequest"></a>

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidFilterKey">InvalidFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfilterkey"></a>
<a id="schema_InvalidFilterKey"></a>
<a id="tocSinvalidfilterkey"></a>
<a id="tocsinvalidfilterkey"></a>

```json
null
```

<h2 id="tocS_InvalidFilterValue">InvalidFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfiltervalue"></a>
<a id="schema_InvalidFilterValue"></a>
<a id="tocSinvalidfiltervalue"></a>
<a id="tocsinvalidfiltervalue"></a>

```json
null
```

<h2 id="tocS_DescribeAutomationStepExecutionsResult">DescribeAutomationStepExecutionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeautomationstepexecutionsresult"></a>
<a id="schema_DescribeAutomationStepExecutionsResult"></a>
<a id="tocSdescribeautomationstepexecutionsresult"></a>
<a id="tocsdescribeautomationstepexecutionsresult"></a>

```json
{
  "StepExecutions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StepExecutions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAutomationStepExecutionsRequest">DescribeAutomationStepExecutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeautomationstepexecutionsrequest"></a>
<a id="schema_DescribeAutomationStepExecutionsRequest"></a>
<a id="tocSdescribeautomationstepexecutionsrequest"></a>
<a id="tocsdescribeautomationstepexecutionsrequest"></a>

```json
{
  "AutomationExecutionId": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {},
  "ReverseOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomationExecutionId|object|true|none|none|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|ReverseOrder|object|false|none|none|

<h2 id="tocS_AutomationExecutionNotFoundException">AutomationExecutionNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutionnotfoundexception"></a>
<a id="schema_AutomationExecutionNotFoundException"></a>
<a id="tocSautomationexecutionnotfoundexception"></a>
<a id="tocsautomationexecutionnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeAvailablePatchesResult">DescribeAvailablePatchesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeavailablepatchesresult"></a>
<a id="schema_DescribeAvailablePatchesResult"></a>
<a id="tocSdescribeavailablepatchesresult"></a>
<a id="tocsdescribeavailablepatchesresult"></a>

```json
{
  "Patches": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Patches|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAvailablePatchesRequest">DescribeAvailablePatchesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeavailablepatchesrequest"></a>
<a id="schema_DescribeAvailablePatchesRequest"></a>
<a id="tocSdescribeavailablepatchesrequest"></a>
<a id="tocsdescribeavailablepatchesrequest"></a>

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeDocumentResult">DescribeDocumentResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribedocumentresult"></a>
<a id="schema_DescribeDocumentResult"></a>
<a id="tocSdescribedocumentresult"></a>
<a id="tocsdescribedocumentresult"></a>

```json
{
  "Document": {
    "Sha1": {},
    "Hash": {},
    "HashType": {},
    "Name": {},
    "DisplayName": {},
    "VersionName": {},
    "Owner": {},
    "CreatedDate": {},
    "Status": {},
    "StatusInformation": {},
    "DocumentVersion": {},
    "Description": {},
    "Parameters": {},
    "PlatformTypes": {},
    "DocumentType": {},
    "SchemaVersion": {},
    "LatestVersion": {},
    "DefaultVersion": {},
    "DocumentFormat": {},
    "TargetType": {},
    "Tags": {},
    "AttachmentsInformation": {},
    "Requires": {},
    "Author": {},
    "ReviewInformation": {},
    "ApprovedVersion": {},
    "PendingReviewVersion": {},
    "ReviewStatus": {},
    "Category": {},
    "CategoryEnum": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Document|object|false|none|none|

<h2 id="tocS_DescribeDocumentRequest">DescribeDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedocumentrequest"></a>
<a id="schema_DescribeDocumentRequest"></a>
<a id="tocSdescribedocumentrequest"></a>
<a id="tocsdescribedocumentrequest"></a>

```json
{
  "Name": {},
  "DocumentVersion": {},
  "VersionName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DocumentVersion|object|false|none|none|
|VersionName|object|false|none|none|

<h2 id="tocS_DescribeDocumentPermissionResponse">DescribeDocumentPermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedocumentpermissionresponse"></a>
<a id="schema_DescribeDocumentPermissionResponse"></a>
<a id="tocSdescribedocumentpermissionresponse"></a>
<a id="tocsdescribedocumentpermissionresponse"></a>

```json
{
  "AccountIds": {},
  "AccountSharingInfoList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|false|none|none|
|AccountSharingInfoList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeDocumentPermissionRequest">DescribeDocumentPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedocumentpermissionrequest"></a>
<a id="schema_DescribeDocumentPermissionRequest"></a>
<a id="tocSdescribedocumentpermissionrequest"></a>
<a id="tocsdescribedocumentpermissionrequest"></a>

```json
{
  "Name": {},
  "PermissionType": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|PermissionType|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidPermissionType">InvalidPermissionType</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpermissiontype"></a>
<a id="schema_InvalidPermissionType"></a>
<a id="tocSinvalidpermissiontype"></a>
<a id="tocsinvalidpermissiontype"></a>

```json
null
```

<h2 id="tocS_DescribeEffectiveInstanceAssociationsResult">DescribeEffectiveInstanceAssociationsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeffectiveinstanceassociationsresult"></a>
<a id="schema_DescribeEffectiveInstanceAssociationsResult"></a>
<a id="tocSdescribeeffectiveinstanceassociationsresult"></a>
<a id="tocsdescribeeffectiveinstanceassociationsresult"></a>

```json
{
  "Associations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Associations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeEffectiveInstanceAssociationsRequest">DescribeEffectiveInstanceAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeffectiveinstanceassociationsrequest"></a>
<a id="schema_DescribeEffectiveInstanceAssociationsRequest"></a>
<a id="tocSdescribeeffectiveinstanceassociationsrequest"></a>
<a id="tocsdescribeeffectiveinstanceassociationsrequest"></a>

```json
{
  "InstanceId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeEffectivePatchesForPatchBaselineResult">DescribeEffectivePatchesForPatchBaselineResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeffectivepatchesforpatchbaselineresult"></a>
<a id="schema_DescribeEffectivePatchesForPatchBaselineResult"></a>
<a id="tocSdescribeeffectivepatchesforpatchbaselineresult"></a>
<a id="tocsdescribeeffectivepatchesforpatchbaselineresult"></a>

```json
{
  "EffectivePatches": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EffectivePatches|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeEffectivePatchesForPatchBaselineRequest">DescribeEffectivePatchesForPatchBaselineRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeffectivepatchesforpatchbaselinerequest"></a>
<a id="schema_DescribeEffectivePatchesForPatchBaselineRequest"></a>
<a id="tocSdescribeeffectivepatchesforpatchbaselinerequest"></a>
<a id="tocsdescribeeffectivepatchesforpatchbaselinerequest"></a>

```json
{
  "BaselineId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_UnsupportedOperatingSystem">UnsupportedOperatingSystem</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedoperatingsystem"></a>
<a id="schema_UnsupportedOperatingSystem"></a>
<a id="tocSunsupportedoperatingsystem"></a>
<a id="tocsunsupportedoperatingsystem"></a>

```json
null
```

<h2 id="tocS_DescribeInstanceAssociationsStatusResult">DescribeInstanceAssociationsStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstanceassociationsstatusresult"></a>
<a id="schema_DescribeInstanceAssociationsStatusResult"></a>
<a id="tocSdescribeinstanceassociationsstatusresult"></a>
<a id="tocsdescribeinstanceassociationsstatusresult"></a>

```json
{
  "InstanceAssociationStatusInfos": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceAssociationStatusInfos|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeInstanceAssociationsStatusRequest">DescribeInstanceAssociationsStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstanceassociationsstatusrequest"></a>
<a id="schema_DescribeInstanceAssociationsStatusRequest"></a>
<a id="tocSdescribeinstanceassociationsstatusrequest"></a>
<a id="tocsdescribeinstanceassociationsstatusrequest"></a>

```json
{
  "InstanceId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeInstanceInformationResult">DescribeInstanceInformationResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstanceinformationresult"></a>
<a id="schema_DescribeInstanceInformationResult"></a>
<a id="tocSdescribeinstanceinformationresult"></a>
<a id="tocsdescribeinstanceinformationresult"></a>

```json
{
  "InstanceInformationList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceInformationList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeInstanceInformationRequest">DescribeInstanceInformationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstanceinformationrequest"></a>
<a id="schema_DescribeInstanceInformationRequest"></a>
<a id="tocSdescribeinstanceinformationrequest"></a>
<a id="tocsdescribeinstanceinformationrequest"></a>

```json
{
  "InstanceInformationFilterList": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceInformationFilterList|object|false|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidInstanceInformationFilterValue">InvalidInstanceInformationFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinstanceinformationfiltervalue"></a>
<a id="schema_InvalidInstanceInformationFilterValue"></a>
<a id="tocSinvalidinstanceinformationfiltervalue"></a>
<a id="tocsinvalidinstanceinformationfiltervalue"></a>

```json
null
```

<h2 id="tocS_DescribeInstancePatchStatesResult">DescribeInstancePatchStatesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancepatchstatesresult"></a>
<a id="schema_DescribeInstancePatchStatesResult"></a>
<a id="tocSdescribeinstancepatchstatesresult"></a>
<a id="tocsdescribeinstancepatchstatesresult"></a>

```json
{
  "InstancePatchStates": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstancePatchStates|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeInstancePatchStatesRequest">DescribeInstancePatchStatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancepatchstatesrequest"></a>
<a id="schema_DescribeInstancePatchStatesRequest"></a>
<a id="tocSdescribeinstancepatchstatesrequest"></a>
<a id="tocsdescribeinstancepatchstatesrequest"></a>

```json
{
  "InstanceIds": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceIds|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeInstancePatchStatesForPatchGroupResult">DescribeInstancePatchStatesForPatchGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancepatchstatesforpatchgroupresult"></a>
<a id="schema_DescribeInstancePatchStatesForPatchGroupResult"></a>
<a id="tocSdescribeinstancepatchstatesforpatchgroupresult"></a>
<a id="tocsdescribeinstancepatchstatesforpatchgroupresult"></a>

```json
{
  "InstancePatchStates": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstancePatchStates|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeInstancePatchStatesForPatchGroupRequest">DescribeInstancePatchStatesForPatchGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancepatchstatesforpatchgrouprequest"></a>
<a id="schema_DescribeInstancePatchStatesForPatchGroupRequest"></a>
<a id="tocSdescribeinstancepatchstatesforpatchgrouprequest"></a>
<a id="tocsdescribeinstancepatchstatesforpatchgrouprequest"></a>

```json
{
  "PatchGroup": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PatchGroup|object|true|none|none|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeInstancePatchesResult">DescribeInstancePatchesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancepatchesresult"></a>
<a id="schema_DescribeInstancePatchesResult"></a>
<a id="tocSdescribeinstancepatchesresult"></a>
<a id="tocsdescribeinstancepatchesresult"></a>

```json
{
  "Patches": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Patches|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeInstancePatchesRequest">DescribeInstancePatchesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancepatchesrequest"></a>
<a id="schema_DescribeInstancePatchesRequest"></a>
<a id="tocSdescribeinstancepatchesrequest"></a>
<a id="tocsdescribeinstancepatchesrequest"></a>

```json
{
  "InstanceId": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeInventoryDeletionsResult">DescribeInventoryDeletionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinventorydeletionsresult"></a>
<a id="schema_DescribeInventoryDeletionsResult"></a>
<a id="tocSdescribeinventorydeletionsresult"></a>
<a id="tocsdescribeinventorydeletionsresult"></a>

```json
{
  "InventoryDeletions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InventoryDeletions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeInventoryDeletionsRequest">DescribeInventoryDeletionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinventorydeletionsrequest"></a>
<a id="schema_DescribeInventoryDeletionsRequest"></a>
<a id="tocSdescribeinventorydeletionsrequest"></a>
<a id="tocsdescribeinventorydeletionsrequest"></a>

```json
{
  "DeletionId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeletionId|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_InvalidDeletionIdException">InvalidDeletionIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeletionidexception"></a>
<a id="schema_InvalidDeletionIdException"></a>
<a id="tocSinvaliddeletionidexception"></a>
<a id="tocsinvaliddeletionidexception"></a>

```json
null
```

<h2 id="tocS_DescribeMaintenanceWindowExecutionTaskInvocationsResult">DescribeMaintenanceWindowExecutionTaskInvocationsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowexecutiontaskinvocationsresult"></a>
<a id="schema_DescribeMaintenanceWindowExecutionTaskInvocationsResult"></a>
<a id="tocSdescribemaintenancewindowexecutiontaskinvocationsresult"></a>
<a id="tocsdescribemaintenancewindowexecutiontaskinvocationsresult"></a>

```json
{
  "WindowExecutionTaskInvocationIdentities": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionTaskInvocationIdentities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowExecutionTaskInvocationsRequest">DescribeMaintenanceWindowExecutionTaskInvocationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowexecutiontaskinvocationsrequest"></a>
<a id="schema_DescribeMaintenanceWindowExecutionTaskInvocationsRequest"></a>
<a id="tocSdescribemaintenancewindowexecutiontaskinvocationsrequest"></a>
<a id="tocsdescribemaintenancewindowexecutiontaskinvocationsrequest"></a>

```json
{
  "WindowExecutionId": {},
  "TaskId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionId|object|true|none|none|
|TaskId|object|true|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowExecutionTasksResult">DescribeMaintenanceWindowExecutionTasksResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowexecutiontasksresult"></a>
<a id="schema_DescribeMaintenanceWindowExecutionTasksResult"></a>
<a id="tocSdescribemaintenancewindowexecutiontasksresult"></a>
<a id="tocsdescribemaintenancewindowexecutiontasksresult"></a>

```json
{
  "WindowExecutionTaskIdentities": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionTaskIdentities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowExecutionTasksRequest">DescribeMaintenanceWindowExecutionTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowexecutiontasksrequest"></a>
<a id="schema_DescribeMaintenanceWindowExecutionTasksRequest"></a>
<a id="tocSdescribemaintenancewindowexecutiontasksrequest"></a>
<a id="tocsdescribemaintenancewindowexecutiontasksrequest"></a>

```json
{
  "WindowExecutionId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionId|object|true|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowExecutionsResult">DescribeMaintenanceWindowExecutionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowexecutionsresult"></a>
<a id="schema_DescribeMaintenanceWindowExecutionsResult"></a>
<a id="tocSdescribemaintenancewindowexecutionsresult"></a>
<a id="tocsdescribemaintenancewindowexecutionsresult"></a>

```json
{
  "WindowExecutions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowExecutionsRequest">DescribeMaintenanceWindowExecutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowexecutionsrequest"></a>
<a id="schema_DescribeMaintenanceWindowExecutionsRequest"></a>
<a id="tocSdescribemaintenancewindowexecutionsrequest"></a>
<a id="tocsdescribemaintenancewindowexecutionsrequest"></a>

```json
{
  "WindowId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|true|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowScheduleResult">DescribeMaintenanceWindowScheduleResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowscheduleresult"></a>
<a id="schema_DescribeMaintenanceWindowScheduleResult"></a>
<a id="tocSdescribemaintenancewindowscheduleresult"></a>
<a id="tocsdescribemaintenancewindowscheduleresult"></a>

```json
{
  "ScheduledWindowExecutions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledWindowExecutions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowScheduleRequest">DescribeMaintenanceWindowScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowschedulerequest"></a>
<a id="schema_DescribeMaintenanceWindowScheduleRequest"></a>
<a id="tocSdescribemaintenancewindowschedulerequest"></a>
<a id="tocsdescribemaintenancewindowschedulerequest"></a>

```json
{
  "WindowId": {},
  "Targets": {},
  "ResourceType": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|Targets|object|false|none|none|
|ResourceType|object|false|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowTargetsResult">DescribeMaintenanceWindowTargetsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowtargetsresult"></a>
<a id="schema_DescribeMaintenanceWindowTargetsResult"></a>
<a id="tocSdescribemaintenancewindowtargetsresult"></a>
<a id="tocsdescribemaintenancewindowtargetsresult"></a>

```json
{
  "Targets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Targets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowTargetsRequest">DescribeMaintenanceWindowTargetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowtargetsrequest"></a>
<a id="schema_DescribeMaintenanceWindowTargetsRequest"></a>
<a id="tocSdescribemaintenancewindowtargetsrequest"></a>
<a id="tocsdescribemaintenancewindowtargetsrequest"></a>

```json
{
  "WindowId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|true|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowTasksResult">DescribeMaintenanceWindowTasksResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowtasksresult"></a>
<a id="schema_DescribeMaintenanceWindowTasksResult"></a>
<a id="tocSdescribemaintenancewindowtasksresult"></a>
<a id="tocsdescribemaintenancewindowtasksresult"></a>

```json
{
  "Tasks": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tasks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowTasksRequest">DescribeMaintenanceWindowTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowtasksrequest"></a>
<a id="schema_DescribeMaintenanceWindowTasksRequest"></a>
<a id="tocSdescribemaintenancewindowtasksrequest"></a>
<a id="tocsdescribemaintenancewindowtasksrequest"></a>

```json
{
  "WindowId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|true|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowsResult">DescribeMaintenanceWindowsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowsresult"></a>
<a id="schema_DescribeMaintenanceWindowsResult"></a>
<a id="tocSdescribemaintenancewindowsresult"></a>
<a id="tocsdescribemaintenancewindowsresult"></a>

```json
{
  "WindowIdentities": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowIdentities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowsRequest">DescribeMaintenanceWindowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowsrequest"></a>
<a id="schema_DescribeMaintenanceWindowsRequest"></a>
<a id="tocSdescribemaintenancewindowsrequest"></a>
<a id="tocsdescribemaintenancewindowsrequest"></a>

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowsForTargetResult">DescribeMaintenanceWindowsForTargetResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowsfortargetresult"></a>
<a id="schema_DescribeMaintenanceWindowsForTargetResult"></a>
<a id="tocSdescribemaintenancewindowsfortargetresult"></a>
<a id="tocsdescribemaintenancewindowsfortargetresult"></a>

```json
{
  "WindowIdentities": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowIdentities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMaintenanceWindowsForTargetRequest">DescribeMaintenanceWindowsForTargetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaintenancewindowsfortargetrequest"></a>
<a id="schema_DescribeMaintenanceWindowsForTargetRequest"></a>
<a id="tocSdescribemaintenancewindowsfortargetrequest"></a>
<a id="tocsdescribemaintenancewindowsfortargetrequest"></a>

```json
{
  "Targets": {},
  "ResourceType": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Targets|object|true|none|none|
|ResourceType|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeOpsItemsResponse">DescribeOpsItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeopsitemsresponse"></a>
<a id="schema_DescribeOpsItemsResponse"></a>
<a id="tocSdescribeopsitemsresponse"></a>
<a id="tocsdescribeopsitemsresponse"></a>

```json
{
  "NextToken": {},
  "OpsItemSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|OpsItemSummaries|object|false|none|none|

<h2 id="tocS_DescribeOpsItemsRequest">DescribeOpsItemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeopsitemsrequest"></a>
<a id="schema_DescribeOpsItemsRequest"></a>
<a id="tocSdescribeopsitemsrequest"></a>
<a id="tocsdescribeopsitemsrequest"></a>

```json
{
  "OpsItemFilters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsItemFilters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeParametersResult">DescribeParametersResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeparametersresult"></a>
<a id="schema_DescribeParametersResult"></a>
<a id="tocSdescribeparametersresult"></a>
<a id="tocsdescribeparametersresult"></a>

```json
{
  "Parameters": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Parameters|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeParametersRequest">DescribeParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeparametersrequest"></a>
<a id="schema_DescribeParametersRequest"></a>
<a id="tocSdescribeparametersrequest"></a>
<a id="tocsdescribeparametersrequest"></a>

```json
{
  "Filters": {},
  "ParameterFilters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|ParameterFilters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidFilterOption">InvalidFilterOption</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfilteroption"></a>
<a id="schema_InvalidFilterOption"></a>
<a id="tocSinvalidfilteroption"></a>
<a id="tocsinvalidfilteroption"></a>

```json
null
```

<h2 id="tocS_DescribePatchBaselinesResult">DescribePatchBaselinesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribepatchbaselinesresult"></a>
<a id="schema_DescribePatchBaselinesResult"></a>
<a id="tocSdescribepatchbaselinesresult"></a>
<a id="tocsdescribepatchbaselinesresult"></a>

```json
{
  "BaselineIdentities": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineIdentities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribePatchBaselinesRequest">DescribePatchBaselinesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepatchbaselinesrequest"></a>
<a id="schema_DescribePatchBaselinesRequest"></a>
<a id="tocSdescribepatchbaselinesrequest"></a>
<a id="tocsdescribepatchbaselinesrequest"></a>

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribePatchGroupStateResult">DescribePatchGroupStateResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribepatchgroupstateresult"></a>
<a id="schema_DescribePatchGroupStateResult"></a>
<a id="tocSdescribepatchgroupstateresult"></a>
<a id="tocsdescribepatchgroupstateresult"></a>

```json
{
  "Instances": {},
  "InstancesWithInstalledPatches": {},
  "InstancesWithInstalledOtherPatches": {},
  "InstancesWithInstalledPendingRebootPatches": {},
  "InstancesWithInstalledRejectedPatches": {},
  "InstancesWithMissingPatches": {},
  "InstancesWithFailedPatches": {},
  "InstancesWithNotApplicablePatches": {},
  "InstancesWithUnreportedNotApplicablePatches": {},
  "InstancesWithCriticalNonCompliantPatches": {},
  "InstancesWithSecurityNonCompliantPatches": {},
  "InstancesWithOtherNonCompliantPatches": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Instances|object|false|none|none|
|InstancesWithInstalledPatches|object|false|none|none|
|InstancesWithInstalledOtherPatches|object|false|none|none|
|InstancesWithInstalledPendingRebootPatches|object|false|none|none|
|InstancesWithInstalledRejectedPatches|object|false|none|none|
|InstancesWithMissingPatches|object|false|none|none|
|InstancesWithFailedPatches|object|false|none|none|
|InstancesWithNotApplicablePatches|object|false|none|none|
|InstancesWithUnreportedNotApplicablePatches|object|false|none|none|
|InstancesWithCriticalNonCompliantPatches|object|false|none|none|
|InstancesWithSecurityNonCompliantPatches|object|false|none|none|
|InstancesWithOtherNonCompliantPatches|object|false|none|none|

<h2 id="tocS_DescribePatchGroupStateRequest">DescribePatchGroupStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepatchgroupstaterequest"></a>
<a id="schema_DescribePatchGroupStateRequest"></a>
<a id="tocSdescribepatchgroupstaterequest"></a>
<a id="tocsdescribepatchgroupstaterequest"></a>

```json
{
  "PatchGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PatchGroup|object|true|none|none|

<h2 id="tocS_DescribePatchGroupsResult">DescribePatchGroupsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribepatchgroupsresult"></a>
<a id="schema_DescribePatchGroupsResult"></a>
<a id="tocSdescribepatchgroupsresult"></a>
<a id="tocsdescribepatchgroupsresult"></a>

```json
{
  "Mappings": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mappings|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribePatchGroupsRequest">DescribePatchGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepatchgroupsrequest"></a>
<a id="schema_DescribePatchGroupsRequest"></a>
<a id="tocSdescribepatchgroupsrequest"></a>
<a id="tocsdescribepatchgroupsrequest"></a>

```json
{
  "MaxResults": {},
  "Filters": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribePatchPropertiesResult">DescribePatchPropertiesResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribepatchpropertiesresult"></a>
<a id="schema_DescribePatchPropertiesResult"></a>
<a id="tocSdescribepatchpropertiesresult"></a>
<a id="tocsdescribepatchpropertiesresult"></a>

```json
{
  "Properties": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Properties|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribePatchPropertiesRequest">DescribePatchPropertiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepatchpropertiesrequest"></a>
<a id="schema_DescribePatchPropertiesRequest"></a>
<a id="tocSdescribepatchpropertiesrequest"></a>
<a id="tocsdescribepatchpropertiesrequest"></a>

```json
{
  "OperatingSystem": {},
  "Property": {},
  "PatchSet": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperatingSystem|object|true|none|none|
|Property|object|true|none|none|
|PatchSet|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeSessionsResponse">DescribeSessionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesessionsresponse"></a>
<a id="schema_DescribeSessionsResponse"></a>
<a id="tocSdescribesessionsresponse"></a>
<a id="tocsdescribesessionsresponse"></a>

```json
{
  "Sessions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sessions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeSessionsRequest">DescribeSessionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesessionsrequest"></a>
<a id="schema_DescribeSessionsRequest"></a>
<a id="tocSdescribesessionsrequest"></a>
<a id="tocsdescribesessionsrequest"></a>

```json
{
  "State": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_DisassociateOpsItemRelatedItemResponse">DisassociateOpsItemRelatedItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateopsitemrelateditemresponse"></a>
<a id="schema_DisassociateOpsItemRelatedItemResponse"></a>
<a id="tocSdisassociateopsitemrelateditemresponse"></a>
<a id="tocsdisassociateopsitemrelateditemresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateOpsItemRelatedItemRequest">DisassociateOpsItemRelatedItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateopsitemrelateditemrequest"></a>
<a id="schema_DisassociateOpsItemRelatedItemRequest"></a>
<a id="tocSdisassociateopsitemrelateditemrequest"></a>
<a id="tocsdisassociateopsitemrelateditemrequest"></a>

```json
{
  "OpsItemId": {},
  "AssociationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsItemId|object|true|none|none|
|AssociationId|object|true|none|none|

<h2 id="tocS_OpsItemRelatedItemAssociationNotFoundException">OpsItemRelatedItemAssociationNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemassociationnotfoundexception"></a>
<a id="schema_OpsItemRelatedItemAssociationNotFoundException"></a>
<a id="tocSopsitemrelateditemassociationnotfoundexception"></a>
<a id="tocsopsitemrelateditemassociationnotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetAutomationExecutionResult">GetAutomationExecutionResult</h2>
<!-- backwards compatibility -->
<a id="schemagetautomationexecutionresult"></a>
<a id="schema_GetAutomationExecutionResult"></a>
<a id="tocSgetautomationexecutionresult"></a>
<a id="tocsgetautomationexecutionresult"></a>

```json
{
  "AutomationExecution": {
    "AutomationExecutionId": {},
    "DocumentName": {},
    "DocumentVersion": {},
    "ExecutionStartTime": {},
    "ExecutionEndTime": {},
    "AutomationExecutionStatus": {},
    "StepExecutions": {},
    "StepExecutionsTruncated": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "Outputs": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "FailureMessage": {},
    "Mode": {},
    "ParentAutomationExecutionId": {},
    "ExecutedBy": {},
    "CurrentStepName": {},
    "CurrentAction": {},
    "TargetParameterName": {},
    "Targets": {},
    "TargetMaps": {},
    "ResolvedTargets": {
      "ParameterValues": {},
      "Truncated": {}
    },
    "MaxConcurrency": {},
    "MaxErrors": {},
    "Target": {},
    "TargetLocations": {},
    "ProgressCounters": {
      "TotalSteps": {},
      "SuccessSteps": {},
      "FailedSteps": {},
      "CancelledSteps": {},
      "TimedOutSteps": {}
    },
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {},
    "AutomationSubtype": {},
    "ScheduledTime": {},
    "Runbooks": {},
    "OpsItemId": {},
    "AssociationId": {},
    "ChangeRequestName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomationExecution|object|false|none|none|

<h2 id="tocS_GetAutomationExecutionRequest">GetAutomationExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetautomationexecutionrequest"></a>
<a id="schema_GetAutomationExecutionRequest"></a>
<a id="tocSgetautomationexecutionrequest"></a>
<a id="tocsgetautomationexecutionrequest"></a>

```json
{
  "AutomationExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomationExecutionId|object|true|none|none|

<h2 id="tocS_GetCalendarStateResponse">GetCalendarStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcalendarstateresponse"></a>
<a id="schema_GetCalendarStateResponse"></a>
<a id="tocSgetcalendarstateresponse"></a>
<a id="tocsgetcalendarstateresponse"></a>

```json
{
  "State": {},
  "AtTime": {},
  "NextTransitionTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|
|AtTime|object|false|none|none|
|NextTransitionTime|object|false|none|none|

<h2 id="tocS_GetCalendarStateRequest">GetCalendarStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcalendarstaterequest"></a>
<a id="schema_GetCalendarStateRequest"></a>
<a id="tocSgetcalendarstaterequest"></a>
<a id="tocsgetcalendarstaterequest"></a>

```json
{
  "CalendarNames": {},
  "AtTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalendarNames|object|true|none|none|
|AtTime|object|false|none|none|

<h2 id="tocS_InvalidDocumentType">InvalidDocumentType</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddocumenttype"></a>
<a id="schema_InvalidDocumentType"></a>
<a id="tocSinvaliddocumenttype"></a>
<a id="tocsinvaliddocumenttype"></a>

```json
null
```

<h2 id="tocS_UnsupportedCalendarException">UnsupportedCalendarException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedcalendarexception"></a>
<a id="schema_UnsupportedCalendarException"></a>
<a id="tocSunsupportedcalendarexception"></a>
<a id="tocsunsupportedcalendarexception"></a>

```json
null
```

<h2 id="tocS_GetCommandInvocationResult">GetCommandInvocationResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcommandinvocationresult"></a>
<a id="schema_GetCommandInvocationResult"></a>
<a id="tocSgetcommandinvocationresult"></a>
<a id="tocsgetcommandinvocationresult"></a>

```json
{
  "CommandId": {},
  "InstanceId": {},
  "Comment": {},
  "DocumentName": {},
  "DocumentVersion": {},
  "PluginName": {},
  "ResponseCode": {},
  "ExecutionStartDateTime": {},
  "ExecutionElapsedTime": {},
  "ExecutionEndDateTime": {},
  "Status": {},
  "StatusDetails": {},
  "StandardOutputContent": {},
  "StandardOutputUrl": {},
  "StandardErrorContent": {},
  "StandardErrorUrl": {},
  "CloudWatchOutputConfig": {
    "CloudWatchLogGroupName": {},
    "CloudWatchOutputEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CommandId|object|false|none|none|
|InstanceId|object|false|none|none|
|Comment|object|false|none|none|
|DocumentName|object|false|none|none|
|DocumentVersion|object|false|none|none|
|PluginName|object|false|none|none|
|ResponseCode|object|false|none|none|
|ExecutionStartDateTime|object|false|none|none|
|ExecutionElapsedTime|object|false|none|none|
|ExecutionEndDateTime|object|false|none|none|
|Status|object|false|none|none|
|StatusDetails|object|false|none|none|
|StandardOutputContent|object|false|none|none|
|StandardOutputUrl|object|false|none|none|
|StandardErrorContent|object|false|none|none|
|StandardErrorUrl|object|false|none|none|
|CloudWatchOutputConfig|object|false|none|none|

<h2 id="tocS_GetCommandInvocationRequest">GetCommandInvocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcommandinvocationrequest"></a>
<a id="schema_GetCommandInvocationRequest"></a>
<a id="tocSgetcommandinvocationrequest"></a>
<a id="tocsgetcommandinvocationrequest"></a>

```json
{
  "CommandId": {},
  "InstanceId": {},
  "PluginName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CommandId|object|true|none|none|
|InstanceId|object|true|none|none|
|PluginName|object|false|none|none|

<h2 id="tocS_InvalidPluginName">InvalidPluginName</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpluginname"></a>
<a id="schema_InvalidPluginName"></a>
<a id="tocSinvalidpluginname"></a>
<a id="tocsinvalidpluginname"></a>

```json
null
```

<h2 id="tocS_InvocationDoesNotExist">InvocationDoesNotExist</h2>
<!-- backwards compatibility -->
<a id="schemainvocationdoesnotexist"></a>
<a id="schema_InvocationDoesNotExist"></a>
<a id="tocSinvocationdoesnotexist"></a>
<a id="tocsinvocationdoesnotexist"></a>

```json
null
```

<h2 id="tocS_GetConnectionStatusResponse">GetConnectionStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectionstatusresponse"></a>
<a id="schema_GetConnectionStatusResponse"></a>
<a id="tocSgetconnectionstatusresponse"></a>
<a id="tocsgetconnectionstatusresponse"></a>

```json
{
  "Target": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Target|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_GetConnectionStatusRequest">GetConnectionStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectionstatusrequest"></a>
<a id="schema_GetConnectionStatusRequest"></a>
<a id="tocSgetconnectionstatusrequest"></a>
<a id="tocsgetconnectionstatusrequest"></a>

```json
{
  "Target": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Target|object|true|none|none|

<h2 id="tocS_GetDefaultPatchBaselineResult">GetDefaultPatchBaselineResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdefaultpatchbaselineresult"></a>
<a id="schema_GetDefaultPatchBaselineResult"></a>
<a id="tocSgetdefaultpatchbaselineresult"></a>
<a id="tocsgetdefaultpatchbaselineresult"></a>

```json
{
  "BaselineId": {},
  "OperatingSystem": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|false|none|none|
|OperatingSystem|object|false|none|none|

<h2 id="tocS_GetDefaultPatchBaselineRequest">GetDefaultPatchBaselineRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdefaultpatchbaselinerequest"></a>
<a id="schema_GetDefaultPatchBaselineRequest"></a>
<a id="tocSgetdefaultpatchbaselinerequest"></a>
<a id="tocsgetdefaultpatchbaselinerequest"></a>

```json
{
  "OperatingSystem": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperatingSystem|object|false|none|none|

<h2 id="tocS_GetDeployablePatchSnapshotForInstanceResult">GetDeployablePatchSnapshotForInstanceResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdeployablepatchsnapshotforinstanceresult"></a>
<a id="schema_GetDeployablePatchSnapshotForInstanceResult"></a>
<a id="tocSgetdeployablepatchsnapshotforinstanceresult"></a>
<a id="tocsgetdeployablepatchsnapshotforinstanceresult"></a>

```json
{
  "InstanceId": {},
  "SnapshotId": {},
  "SnapshotDownloadUrl": {},
  "Product": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|SnapshotId|object|false|none|none|
|SnapshotDownloadUrl|object|false|none|none|
|Product|object|false|none|none|

<h2 id="tocS_GetDeployablePatchSnapshotForInstanceRequest">GetDeployablePatchSnapshotForInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeployablepatchsnapshotforinstancerequest"></a>
<a id="schema_GetDeployablePatchSnapshotForInstanceRequest"></a>
<a id="tocSgetdeployablepatchsnapshotforinstancerequest"></a>
<a id="tocsgetdeployablepatchsnapshotforinstancerequest"></a>

```json
{
  "InstanceId": {},
  "SnapshotId": {},
  "BaselineOverride": {
    "OperatingSystem": {},
    "GlobalFilters": {
      "PatchFilters": {}
    },
    "ApprovalRules": {
      "PatchRules": {}
    },
    "ApprovedPatches": {},
    "ApprovedPatchesComplianceLevel": {},
    "RejectedPatches": {},
    "RejectedPatchesAction": {},
    "ApprovedPatchesEnableNonSecurity": {},
    "Sources": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|SnapshotId|object|true|none|none|
|BaselineOverride|object|false|none|none|

<h2 id="tocS_UnsupportedFeatureRequiredException">UnsupportedFeatureRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedfeaturerequiredexception"></a>
<a id="schema_UnsupportedFeatureRequiredException"></a>
<a id="tocSunsupportedfeaturerequiredexception"></a>
<a id="tocsunsupportedfeaturerequiredexception"></a>

```json
null
```

<h2 id="tocS_GetDocumentResult">GetDocumentResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentresult"></a>
<a id="schema_GetDocumentResult"></a>
<a id="tocSgetdocumentresult"></a>
<a id="tocsgetdocumentresult"></a>

```json
{
  "Name": {},
  "CreatedDate": {},
  "DisplayName": {},
  "VersionName": {},
  "DocumentVersion": {},
  "Status": {},
  "StatusInformation": {},
  "Content": {},
  "DocumentType": {},
  "DocumentFormat": {},
  "Requires": {},
  "AttachmentsContent": {},
  "ReviewStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|CreatedDate|object|false|none|none|
|DisplayName|object|false|none|none|
|VersionName|object|false|none|none|
|DocumentVersion|object|false|none|none|
|Status|object|false|none|none|
|StatusInformation|object|false|none|none|
|Content|object|false|none|none|
|DocumentType|object|false|none|none|
|DocumentFormat|object|false|none|none|
|Requires|object|false|none|none|
|AttachmentsContent|object|false|none|none|
|ReviewStatus|object|false|none|none|

<h2 id="tocS_GetDocumentRequest">GetDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentrequest"></a>
<a id="schema_GetDocumentRequest"></a>
<a id="tocSgetdocumentrequest"></a>
<a id="tocsgetdocumentrequest"></a>

```json
{
  "Name": {},
  "VersionName": {},
  "DocumentVersion": {},
  "DocumentFormat": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|VersionName|object|false|none|none|
|DocumentVersion|object|false|none|none|
|DocumentFormat|object|false|none|none|

<h2 id="tocS_GetInventoryResult">GetInventoryResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinventoryresult"></a>
<a id="schema_GetInventoryResult"></a>
<a id="tocSgetinventoryresult"></a>
<a id="tocsgetinventoryresult"></a>

```json
{
  "Entities": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetInventoryRequest">GetInventoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinventoryrequest"></a>
<a id="schema_GetInventoryRequest"></a>
<a id="tocSgetinventoryrequest"></a>
<a id="tocsgetinventoryrequest"></a>

```json
{
  "Filters": {},
  "Aggregators": {},
  "ResultAttributes": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|Aggregators|object|false|none|none|
|ResultAttributes|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_InvalidInventoryGroupException">InvalidInventoryGroupException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinventorygroupexception"></a>
<a id="schema_InvalidInventoryGroupException"></a>
<a id="tocSinvalidinventorygroupexception"></a>
<a id="tocsinvalidinventorygroupexception"></a>

```json
null
```

<h2 id="tocS_InvalidAggregatorException">InvalidAggregatorException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidaggregatorexception"></a>
<a id="schema_InvalidAggregatorException"></a>
<a id="tocSinvalidaggregatorexception"></a>
<a id="tocsinvalidaggregatorexception"></a>

```json
null
```

<h2 id="tocS_InvalidResultAttributeException">InvalidResultAttributeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresultattributeexception"></a>
<a id="schema_InvalidResultAttributeException"></a>
<a id="tocSinvalidresultattributeexception"></a>
<a id="tocsinvalidresultattributeexception"></a>

```json
null
```

<h2 id="tocS_GetInventorySchemaResult">GetInventorySchemaResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinventoryschemaresult"></a>
<a id="schema_GetInventorySchemaResult"></a>
<a id="tocSgetinventoryschemaresult"></a>
<a id="tocsgetinventoryschemaresult"></a>

```json
{
  "Schemas": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Schemas|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetInventorySchemaRequest">GetInventorySchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinventoryschemarequest"></a>
<a id="schema_GetInventorySchemaRequest"></a>
<a id="tocSgetinventoryschemarequest"></a>
<a id="tocsgetinventoryschemarequest"></a>

```json
{
  "TypeName": {},
  "NextToken": {},
  "MaxResults": {},
  "Aggregator": {},
  "SubType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeName|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Aggregator|object|false|none|none|
|SubType|object|false|none|none|

<h2 id="tocS_GetMaintenanceWindowResult">GetMaintenanceWindowResult</h2>
<!-- backwards compatibility -->
<a id="schemagetmaintenancewindowresult"></a>
<a id="schema_GetMaintenanceWindowResult"></a>
<a id="tocSgetmaintenancewindowresult"></a>
<a id="tocsgetmaintenancewindowresult"></a>

```json
{
  "WindowId": {},
  "Name": {},
  "Description": {},
  "StartDate": {},
  "EndDate": {},
  "Schedule": {},
  "ScheduleTimezone": {},
  "ScheduleOffset": {},
  "NextExecutionTime": {},
  "Duration": {},
  "Cutoff": {},
  "AllowUnassociatedTargets": {},
  "Enabled": {},
  "CreatedDate": {},
  "ModifiedDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|StartDate|object|false|none|none|
|EndDate|object|false|none|none|
|Schedule|object|false|none|none|
|ScheduleTimezone|object|false|none|none|
|ScheduleOffset|object|false|none|none|
|NextExecutionTime|object|false|none|none|
|Duration|object|false|none|none|
|Cutoff|object|false|none|none|
|AllowUnassociatedTargets|object|false|none|none|
|Enabled|object|false|none|none|
|CreatedDate|object|false|none|none|
|ModifiedDate|object|false|none|none|

<h2 id="tocS_GetMaintenanceWindowRequest">GetMaintenanceWindowRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmaintenancewindowrequest"></a>
<a id="schema_GetMaintenanceWindowRequest"></a>
<a id="tocSgetmaintenancewindowrequest"></a>
<a id="tocsgetmaintenancewindowrequest"></a>

```json
{
  "WindowId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|true|none|none|

<h2 id="tocS_GetMaintenanceWindowExecutionResult">GetMaintenanceWindowExecutionResult</h2>
<!-- backwards compatibility -->
<a id="schemagetmaintenancewindowexecutionresult"></a>
<a id="schema_GetMaintenanceWindowExecutionResult"></a>
<a id="tocSgetmaintenancewindowexecutionresult"></a>
<a id="tocsgetmaintenancewindowexecutionresult"></a>

```json
{
  "WindowExecutionId": {},
  "TaskIds": {},
  "Status": {},
  "StatusDetails": {},
  "StartTime": {},
  "EndTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionId|object|false|none|none|
|TaskIds|object|false|none|none|
|Status|object|false|none|none|
|StatusDetails|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_GetMaintenanceWindowExecutionRequest">GetMaintenanceWindowExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmaintenancewindowexecutionrequest"></a>
<a id="schema_GetMaintenanceWindowExecutionRequest"></a>
<a id="tocSgetmaintenancewindowexecutionrequest"></a>
<a id="tocsgetmaintenancewindowexecutionrequest"></a>

```json
{
  "WindowExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionId|object|true|none|none|

<h2 id="tocS_GetMaintenanceWindowExecutionTaskResult">GetMaintenanceWindowExecutionTaskResult</h2>
<!-- backwards compatibility -->
<a id="schemagetmaintenancewindowexecutiontaskresult"></a>
<a id="schema_GetMaintenanceWindowExecutionTaskResult"></a>
<a id="tocSgetmaintenancewindowexecutiontaskresult"></a>
<a id="tocsgetmaintenancewindowexecutiontaskresult"></a>

```json
{
  "WindowExecutionId": {},
  "TaskExecutionId": {},
  "TaskArn": {},
  "ServiceRole": {},
  "Type": {},
  "TaskParameters": {},
  "Priority": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "Status": {},
  "StatusDetails": {},
  "StartTime": {},
  "EndTime": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  },
  "TriggeredAlarms": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionId|object|false|none|none|
|TaskExecutionId|object|false|none|none|
|TaskArn|object|false|none|none|
|ServiceRole|object|false|none|none|
|Type|object|false|none|none|
|TaskParameters|object|false|none|none|
|Priority|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|MaxErrors|object|false|none|none|
|Status|object|false|none|none|
|StatusDetails|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|AlarmConfiguration|object|false|none|none|
|TriggeredAlarms|object|false|none|none|

<h2 id="tocS_GetMaintenanceWindowExecutionTaskRequest">GetMaintenanceWindowExecutionTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmaintenancewindowexecutiontaskrequest"></a>
<a id="schema_GetMaintenanceWindowExecutionTaskRequest"></a>
<a id="tocSgetmaintenancewindowexecutiontaskrequest"></a>
<a id="tocsgetmaintenancewindowexecutiontaskrequest"></a>

```json
{
  "WindowExecutionId": {},
  "TaskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionId|object|true|none|none|
|TaskId|object|true|none|none|

<h2 id="tocS_GetMaintenanceWindowExecutionTaskInvocationResult">GetMaintenanceWindowExecutionTaskInvocationResult</h2>
<!-- backwards compatibility -->
<a id="schemagetmaintenancewindowexecutiontaskinvocationresult"></a>
<a id="schema_GetMaintenanceWindowExecutionTaskInvocationResult"></a>
<a id="tocSgetmaintenancewindowexecutiontaskinvocationresult"></a>
<a id="tocsgetmaintenancewindowexecutiontaskinvocationresult"></a>

```json
{
  "WindowExecutionId": {},
  "TaskExecutionId": {},
  "InvocationId": {},
  "ExecutionId": {},
  "TaskType": {},
  "Parameters": {},
  "Status": {},
  "StatusDetails": {},
  "StartTime": {},
  "EndTime": {},
  "OwnerInformation": {},
  "WindowTargetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionId|object|false|none|none|
|TaskExecutionId|object|false|none|none|
|InvocationId|object|false|none|none|
|ExecutionId|object|false|none|none|
|TaskType|object|false|none|none|
|Parameters|object|false|none|none|
|Status|object|false|none|none|
|StatusDetails|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|OwnerInformation|object|false|none|none|
|WindowTargetId|object|false|none|none|

<h2 id="tocS_GetMaintenanceWindowExecutionTaskInvocationRequest">GetMaintenanceWindowExecutionTaskInvocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmaintenancewindowexecutiontaskinvocationrequest"></a>
<a id="schema_GetMaintenanceWindowExecutionTaskInvocationRequest"></a>
<a id="tocSgetmaintenancewindowexecutiontaskinvocationrequest"></a>
<a id="tocsgetmaintenancewindowexecutiontaskinvocationrequest"></a>

```json
{
  "WindowExecutionId": {},
  "TaskId": {},
  "InvocationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionId|object|true|none|none|
|TaskId|object|true|none|none|
|InvocationId|object|true|none|none|

<h2 id="tocS_GetMaintenanceWindowTaskResult">GetMaintenanceWindowTaskResult</h2>
<!-- backwards compatibility -->
<a id="schemagetmaintenancewindowtaskresult"></a>
<a id="schema_GetMaintenanceWindowTaskResult"></a>
<a id="tocSgetmaintenancewindowtaskresult"></a>
<a id="tocsgetmaintenancewindowtaskresult"></a>

```json
{
  "WindowId": {},
  "WindowTaskId": {},
  "Targets": {},
  "TaskArn": {},
  "ServiceRoleArn": {},
  "TaskType": {},
  "TaskParameters": {
    "property1": {
      "Values": {}
    },
    "property2": {
      "Values": {}
    }
  },
  "TaskInvocationParameters": {
    "RunCommand": {
      "Comment": {},
      "CloudWatchOutputConfig": {
        "CloudWatchLogGroupName": {},
        "CloudWatchOutputEnabled": {}
      },
      "DocumentHash": {},
      "DocumentHashType": {},
      "DocumentVersion": {},
      "NotificationConfig": {
        "NotificationArn": {},
        "NotificationEvents": {},
        "NotificationType": {}
      },
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "ServiceRoleArn": {},
      "TimeoutSeconds": {}
    },
    "Automation": {
      "DocumentVersion": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "StepFunctions": {
      "Input": {},
      "Name": {}
    },
    "Lambda": {
      "ClientContext": {},
      "Qualifier": {},
      "Payload": {}
    }
  },
  "Priority": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "LoggingInfo": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "S3Region": {}
  },
  "Name": {},
  "Description": {},
  "CutoffBehavior": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|WindowTaskId|object|false|none|none|
|Targets|object|false|none|none|
|TaskArn|object|false|none|none|
|ServiceRoleArn|object|false|none|none|
|TaskType|object|false|none|none|
|TaskParameters|object|false|none|none|
|TaskInvocationParameters|object|false|none|none|
|Priority|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|MaxErrors|object|false|none|none|
|LoggingInfo|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|CutoffBehavior|object|false|none|none|
|AlarmConfiguration|object|false|none|none|

<h2 id="tocS_GetMaintenanceWindowTaskRequest">GetMaintenanceWindowTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmaintenancewindowtaskrequest"></a>
<a id="schema_GetMaintenanceWindowTaskRequest"></a>
<a id="tocSgetmaintenancewindowtaskrequest"></a>
<a id="tocsgetmaintenancewindowtaskrequest"></a>

```json
{
  "WindowId": {},
  "WindowTaskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|true|none|none|
|WindowTaskId|object|true|none|none|

<h2 id="tocS_GetOpsItemResponse">GetOpsItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetopsitemresponse"></a>
<a id="schema_GetOpsItemResponse"></a>
<a id="tocSgetopsitemresponse"></a>
<a id="tocsgetopsitemresponse"></a>

```json
{
  "OpsItem": {
    "CreatedBy": {},
    "OpsItemType": {},
    "CreatedTime": {},
    "Description": {},
    "LastModifiedBy": {},
    "LastModifiedTime": {},
    "Notifications": {},
    "Priority": {},
    "RelatedOpsItems": {},
    "Status": {},
    "OpsItemId": {},
    "Version": {},
    "Title": {},
    "Source": {},
    "OperationalData": {
      "property1": {
        "Value": {},
        "Type": {}
      },
      "property2": {
        "Value": {},
        "Type": {}
      }
    },
    "Category": {},
    "Severity": {},
    "ActualStartTime": {},
    "ActualEndTime": {},
    "PlannedStartTime": {},
    "PlannedEndTime": {},
    "OpsItemArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsItem|object|false|none|none|

<h2 id="tocS_GetOpsItemRequest">GetOpsItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetopsitemrequest"></a>
<a id="schema_GetOpsItemRequest"></a>
<a id="tocSgetopsitemrequest"></a>
<a id="tocsgetopsitemrequest"></a>

```json
{
  "OpsItemId": {},
  "OpsItemArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsItemId|object|true|none|none|
|OpsItemArn|object|false|none|none|

<h2 id="tocS_GetOpsMetadataResult">GetOpsMetadataResult</h2>
<!-- backwards compatibility -->
<a id="schemagetopsmetadataresult"></a>
<a id="schema_GetOpsMetadataResult"></a>
<a id="tocSgetopsmetadataresult"></a>
<a id="tocsgetopsmetadataresult"></a>

```json
{
  "ResourceId": {},
  "Metadata": {
    "property1": {
      "Value": {}
    },
    "property2": {
      "Value": {}
    }
  },
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|Metadata|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetOpsMetadataRequest">GetOpsMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetopsmetadatarequest"></a>
<a id="schema_GetOpsMetadataRequest"></a>
<a id="tocSgetopsmetadatarequest"></a>
<a id="tocsgetopsmetadatarequest"></a>

```json
{
  "OpsMetadataArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsMetadataArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetOpsSummaryResult">GetOpsSummaryResult</h2>
<!-- backwards compatibility -->
<a id="schemagetopssummaryresult"></a>
<a id="schema_GetOpsSummaryResult"></a>
<a id="tocSgetopssummaryresult"></a>
<a id="tocsgetopssummaryresult"></a>

```json
{
  "Entities": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetOpsSummaryRequest">GetOpsSummaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetopssummaryrequest"></a>
<a id="schema_GetOpsSummaryRequest"></a>
<a id="tocSgetopssummaryrequest"></a>
<a id="tocsgetopssummaryrequest"></a>

```json
{
  "SyncName": {},
  "Filters": {},
  "Aggregators": {},
  "ResultAttributes": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SyncName|object|false|none|none|
|Filters|object|false|none|none|
|Aggregators|object|false|none|none|
|ResultAttributes|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_GetParameterResult">GetParameterResult</h2>
<!-- backwards compatibility -->
<a id="schemagetparameterresult"></a>
<a id="schema_GetParameterResult"></a>
<a id="tocSgetparameterresult"></a>
<a id="tocsgetparameterresult"></a>

```json
{
  "Parameter": {
    "Name": {},
    "Type": {},
    "Value": {},
    "Version": {},
    "Selector": {},
    "SourceResult": {},
    "LastModifiedDate": {},
    "ARN": {},
    "DataType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Parameter|object|false|none|none|

<h2 id="tocS_GetParameterRequest">GetParameterRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetparameterrequest"></a>
<a id="schema_GetParameterRequest"></a>
<a id="tocSgetparameterrequest"></a>
<a id="tocsgetparameterrequest"></a>

```json
{
  "Name": {},
  "WithDecryption": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|WithDecryption|object|false|none|none|

<h2 id="tocS_InvalidKeyId">InvalidKeyId</h2>
<!-- backwards compatibility -->
<a id="schemainvalidkeyid"></a>
<a id="schema_InvalidKeyId"></a>
<a id="tocSinvalidkeyid"></a>
<a id="tocsinvalidkeyid"></a>

```json
null
```

<h2 id="tocS_ParameterVersionNotFound">ParameterVersionNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaparameterversionnotfound"></a>
<a id="schema_ParameterVersionNotFound"></a>
<a id="tocSparameterversionnotfound"></a>
<a id="tocsparameterversionnotfound"></a>

```json
null
```

<h2 id="tocS_GetParameterHistoryResult">GetParameterHistoryResult</h2>
<!-- backwards compatibility -->
<a id="schemagetparameterhistoryresult"></a>
<a id="schema_GetParameterHistoryResult"></a>
<a id="tocSgetparameterhistoryresult"></a>
<a id="tocsgetparameterhistoryresult"></a>

```json
{
  "Parameters": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Parameters|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetParameterHistoryRequest">GetParameterHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetparameterhistoryrequest"></a>
<a id="schema_GetParameterHistoryRequest"></a>
<a id="tocSgetparameterhistoryrequest"></a>
<a id="tocsgetparameterhistoryrequest"></a>

```json
{
  "Name": {},
  "WithDecryption": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|WithDecryption|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetParametersResult">GetParametersResult</h2>
<!-- backwards compatibility -->
<a id="schemagetparametersresult"></a>
<a id="schema_GetParametersResult"></a>
<a id="tocSgetparametersresult"></a>
<a id="tocsgetparametersresult"></a>

```json
{
  "Parameters": {},
  "InvalidParameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Parameters|object|false|none|none|
|InvalidParameters|object|false|none|none|

<h2 id="tocS_GetParametersRequest">GetParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetparametersrequest"></a>
<a id="schema_GetParametersRequest"></a>
<a id="tocSgetparametersrequest"></a>
<a id="tocsgetparametersrequest"></a>

```json
{
  "Names": {},
  "WithDecryption": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|true|none|none|
|WithDecryption|object|false|none|none|

<h2 id="tocS_GetParametersByPathResult">GetParametersByPathResult</h2>
<!-- backwards compatibility -->
<a id="schemagetparametersbypathresult"></a>
<a id="schema_GetParametersByPathResult"></a>
<a id="tocSgetparametersbypathresult"></a>
<a id="tocsgetparametersbypathresult"></a>

```json
{
  "Parameters": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Parameters|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetParametersByPathRequest">GetParametersByPathRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetparametersbypathrequest"></a>
<a id="schema_GetParametersByPathRequest"></a>
<a id="tocSgetparametersbypathrequest"></a>
<a id="tocsgetparametersbypathrequest"></a>

```json
{
  "Path": {},
  "Recursive": {},
  "ParameterFilters": {},
  "WithDecryption": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Path|object|true|none|none|
|Recursive|object|false|none|none|
|ParameterFilters|object|false|none|none|
|WithDecryption|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetPatchBaselineResult">GetPatchBaselineResult</h2>
<!-- backwards compatibility -->
<a id="schemagetpatchbaselineresult"></a>
<a id="schema_GetPatchBaselineResult"></a>
<a id="tocSgetpatchbaselineresult"></a>
<a id="tocsgetpatchbaselineresult"></a>

```json
{
  "BaselineId": {},
  "Name": {},
  "OperatingSystem": {},
  "GlobalFilters": {
    "PatchFilters": {}
  },
  "ApprovalRules": {
    "PatchRules": {}
  },
  "ApprovedPatches": {},
  "ApprovedPatchesComplianceLevel": {},
  "ApprovedPatchesEnableNonSecurity": {},
  "RejectedPatches": {},
  "RejectedPatchesAction": {},
  "PatchGroups": {},
  "CreatedDate": {},
  "ModifiedDate": {},
  "Description": {},
  "Sources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|false|none|none|
|Name|object|false|none|none|
|OperatingSystem|object|false|none|none|
|GlobalFilters|object|false|none|none|
|ApprovalRules|object|false|none|none|
|ApprovedPatches|object|false|none|none|
|ApprovedPatchesComplianceLevel|object|false|none|none|
|ApprovedPatchesEnableNonSecurity|object|false|none|none|
|RejectedPatches|object|false|none|none|
|RejectedPatchesAction|object|false|none|none|
|PatchGroups|object|false|none|none|
|CreatedDate|object|false|none|none|
|ModifiedDate|object|false|none|none|
|Description|object|false|none|none|
|Sources|object|false|none|none|

<h2 id="tocS_GetPatchBaselineRequest">GetPatchBaselineRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpatchbaselinerequest"></a>
<a id="schema_GetPatchBaselineRequest"></a>
<a id="tocSgetpatchbaselinerequest"></a>
<a id="tocsgetpatchbaselinerequest"></a>

```json
{
  "BaselineId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|true|none|none|

<h2 id="tocS_GetPatchBaselineForPatchGroupResult">GetPatchBaselineForPatchGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemagetpatchbaselineforpatchgroupresult"></a>
<a id="schema_GetPatchBaselineForPatchGroupResult"></a>
<a id="tocSgetpatchbaselineforpatchgroupresult"></a>
<a id="tocsgetpatchbaselineforpatchgroupresult"></a>

```json
{
  "BaselineId": {},
  "PatchGroup": {},
  "OperatingSystem": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|false|none|none|
|PatchGroup|object|false|none|none|
|OperatingSystem|object|false|none|none|

<h2 id="tocS_GetPatchBaselineForPatchGroupRequest">GetPatchBaselineForPatchGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpatchbaselineforpatchgrouprequest"></a>
<a id="schema_GetPatchBaselineForPatchGroupRequest"></a>
<a id="tocSgetpatchbaselineforpatchgrouprequest"></a>
<a id="tocsgetpatchbaselineforpatchgrouprequest"></a>

```json
{
  "PatchGroup": {},
  "OperatingSystem": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PatchGroup|object|true|none|none|
|OperatingSystem|object|false|none|none|

<h2 id="tocS_GetResourcePoliciesResponse">GetResourcePoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepoliciesresponse"></a>
<a id="schema_GetResourcePoliciesResponse"></a>
<a id="tocSgetresourcepoliciesresponse"></a>
<a id="tocsgetresourcepoliciesresponse"></a>

```json
{
  "NextToken": {},
  "Policies": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Policies|object|false|none|none|

<h2 id="tocS_GetResourcePoliciesRequest">GetResourcePoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepoliciesrequest"></a>
<a id="schema_GetResourcePoliciesRequest"></a>
<a id="tocSgetresourcepoliciesrequest"></a>
<a id="tocsgetresourcepoliciesrequest"></a>

```json
{
  "ResourceArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_GetServiceSettingResult">GetServiceSettingResult</h2>
<!-- backwards compatibility -->
<a id="schemagetservicesettingresult"></a>
<a id="schema_GetServiceSettingResult"></a>
<a id="tocSgetservicesettingresult"></a>
<a id="tocsgetservicesettingresult"></a>

```json
{
  "ServiceSetting": {
    "SettingId": {},
    "SettingValue": {},
    "LastModifiedDate": {},
    "LastModifiedUser": {},
    "ARN": {},
    "Status": {}
  }
}
```

The query result body of the GetServiceSetting API operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceSetting|object|false|none|none|

<h2 id="tocS_GetServiceSettingRequest">GetServiceSettingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetservicesettingrequest"></a>
<a id="schema_GetServiceSettingRequest"></a>
<a id="tocSgetservicesettingrequest"></a>
<a id="tocsgetservicesettingrequest"></a>

```json
{
  "SettingId": {}
}
```

The request body of the GetServiceSetting API operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SettingId|object|true|none|none|

<h2 id="tocS_ServiceSettingNotFound">ServiceSettingNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaservicesettingnotfound"></a>
<a id="schema_ServiceSettingNotFound"></a>
<a id="tocSservicesettingnotfound"></a>
<a id="tocsservicesettingnotfound"></a>

```json
null
```

<h2 id="tocS_LabelParameterVersionResult">LabelParameterVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemalabelparameterversionresult"></a>
<a id="schema_LabelParameterVersionResult"></a>
<a id="tocSlabelparameterversionresult"></a>
<a id="tocslabelparameterversionresult"></a>

```json
{
  "InvalidLabels": {},
  "ParameterVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvalidLabels|object|false|none|none|
|ParameterVersion|object|false|none|none|

<h2 id="tocS_LabelParameterVersionRequest">LabelParameterVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemalabelparameterversionrequest"></a>
<a id="schema_LabelParameterVersionRequest"></a>
<a id="tocSlabelparameterversionrequest"></a>
<a id="tocslabelparameterversionrequest"></a>

```json
{
  "Name": {},
  "ParameterVersion": {},
  "Labels": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ParameterVersion|object|false|none|none|
|Labels|object|true|none|none|

<h2 id="tocS_ParameterVersionLabelLimitExceeded">ParameterVersionLabelLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaparameterversionlabellimitexceeded"></a>
<a id="schema_ParameterVersionLabelLimitExceeded"></a>
<a id="tocSparameterversionlabellimitexceeded"></a>
<a id="tocsparameterversionlabellimitexceeded"></a>

```json
null
```

<h2 id="tocS_ListAssociationVersionsResult">ListAssociationVersionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistassociationversionsresult"></a>
<a id="schema_ListAssociationVersionsResult"></a>
<a id="tocSlistassociationversionsresult"></a>
<a id="tocslistassociationversionsresult"></a>

```json
{
  "AssociationVersions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationVersions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAssociationVersionsRequest">ListAssociationVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassociationversionsrequest"></a>
<a id="schema_ListAssociationVersionsRequest"></a>
<a id="tocSlistassociationversionsrequest"></a>
<a id="tocslistassociationversionsrequest"></a>

```json
{
  "AssociationId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAssociationsResult">ListAssociationsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistassociationsresult"></a>
<a id="schema_ListAssociationsResult"></a>
<a id="tocSlistassociationsresult"></a>
<a id="tocslistassociationsresult"></a>

```json
{
  "Associations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Associations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAssociationsRequest">ListAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassociationsrequest"></a>
<a id="schema_ListAssociationsRequest"></a>
<a id="tocSlistassociationsrequest"></a>
<a id="tocslistassociationsrequest"></a>

```json
{
  "AssociationFilterList": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationFilterList|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCommandInvocationsResult">ListCommandInvocationsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistcommandinvocationsresult"></a>
<a id="schema_ListCommandInvocationsResult"></a>
<a id="tocSlistcommandinvocationsresult"></a>
<a id="tocslistcommandinvocationsresult"></a>

```json
{
  "CommandInvocations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CommandInvocations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCommandInvocationsRequest">ListCommandInvocationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcommandinvocationsrequest"></a>
<a id="schema_ListCommandInvocationsRequest"></a>
<a id="tocSlistcommandinvocationsrequest"></a>
<a id="tocslistcommandinvocationsrequest"></a>

```json
{
  "CommandId": {},
  "InstanceId": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {},
  "Details": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CommandId|object|false|none|none|
|InstanceId|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|
|Details|object|false|none|none|

<h2 id="tocS_ListCommandsResult">ListCommandsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistcommandsresult"></a>
<a id="schema_ListCommandsResult"></a>
<a id="tocSlistcommandsresult"></a>
<a id="tocslistcommandsresult"></a>

```json
{
  "Commands": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Commands|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCommandsRequest">ListCommandsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcommandsrequest"></a>
<a id="schema_ListCommandsRequest"></a>
<a id="tocSlistcommandsrequest"></a>
<a id="tocslistcommandsrequest"></a>

```json
{
  "CommandId": {},
  "InstanceId": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CommandId|object|false|none|none|
|InstanceId|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListComplianceItemsResult">ListComplianceItemsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistcomplianceitemsresult"></a>
<a id="schema_ListComplianceItemsResult"></a>
<a id="tocSlistcomplianceitemsresult"></a>
<a id="tocslistcomplianceitemsresult"></a>

```json
{
  "ComplianceItems": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceItems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListComplianceItemsRequest">ListComplianceItemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcomplianceitemsrequest"></a>
<a id="schema_ListComplianceItemsRequest"></a>
<a id="tocSlistcomplianceitemsrequest"></a>
<a id="tocslistcomplianceitemsrequest"></a>

```json
{
  "Filters": {},
  "ResourceIds": {},
  "ResourceTypes": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|ResourceIds|object|false|none|none|
|ResourceTypes|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListComplianceSummariesResult">ListComplianceSummariesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistcompliancesummariesresult"></a>
<a id="schema_ListComplianceSummariesResult"></a>
<a id="tocSlistcompliancesummariesresult"></a>
<a id="tocslistcompliancesummariesresult"></a>

```json
{
  "ComplianceSummaryItems": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceSummaryItems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListComplianceSummariesRequest">ListComplianceSummariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcompliancesummariesrequest"></a>
<a id="schema_ListComplianceSummariesRequest"></a>
<a id="tocSlistcompliancesummariesrequest"></a>
<a id="tocslistcompliancesummariesrequest"></a>

```json
{
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListDocumentMetadataHistoryResponse">ListDocumentMetadataHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdocumentmetadatahistoryresponse"></a>
<a id="schema_ListDocumentMetadataHistoryResponse"></a>
<a id="tocSlistdocumentmetadatahistoryresponse"></a>
<a id="tocslistdocumentmetadatahistoryresponse"></a>

```json
{
  "Name": {},
  "DocumentVersion": {},
  "Author": {},
  "Metadata": {
    "ReviewerResponse": {}
  },
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|DocumentVersion|object|false|none|none|
|Author|object|false|none|none|
|Metadata|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDocumentMetadataHistoryRequest">ListDocumentMetadataHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdocumentmetadatahistoryrequest"></a>
<a id="schema_ListDocumentMetadataHistoryRequest"></a>
<a id="tocSlistdocumentmetadatahistoryrequest"></a>
<a id="tocslistdocumentmetadatahistoryrequest"></a>

```json
{
  "Name": {},
  "DocumentVersion": {},
  "Metadata": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DocumentVersion|object|false|none|none|
|Metadata|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListDocumentVersionsResult">ListDocumentVersionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdocumentversionsresult"></a>
<a id="schema_ListDocumentVersionsResult"></a>
<a id="tocSlistdocumentversionsresult"></a>
<a id="tocslistdocumentversionsresult"></a>

```json
{
  "DocumentVersions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentVersions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDocumentVersionsRequest">ListDocumentVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdocumentversionsrequest"></a>
<a id="schema_ListDocumentVersionsRequest"></a>
<a id="tocSlistdocumentversionsrequest"></a>
<a id="tocslistdocumentversionsrequest"></a>

```json
{
  "Name": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDocumentsResult">ListDocumentsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdocumentsresult"></a>
<a id="schema_ListDocumentsResult"></a>
<a id="tocSlistdocumentsresult"></a>
<a id="tocslistdocumentsresult"></a>

```json
{
  "DocumentIdentifiers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentIdentifiers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDocumentsRequest">ListDocumentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdocumentsrequest"></a>
<a id="schema_ListDocumentsRequest"></a>
<a id="tocSlistdocumentsrequest"></a>
<a id="tocslistdocumentsrequest"></a>

```json
{
  "DocumentFilterList": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentFilterList|object|false|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInventoryEntriesResult">ListInventoryEntriesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistinventoryentriesresult"></a>
<a id="schema_ListInventoryEntriesResult"></a>
<a id="tocSlistinventoryentriesresult"></a>
<a id="tocslistinventoryentriesresult"></a>

```json
{
  "TypeName": {},
  "InstanceId": {},
  "SchemaVersion": {},
  "CaptureTime": {},
  "Entries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeName|object|false|none|none|
|InstanceId|object|false|none|none|
|SchemaVersion|object|false|none|none|
|CaptureTime|object|false|none|none|
|Entries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInventoryEntriesRequest">ListInventoryEntriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinventoryentriesrequest"></a>
<a id="schema_ListInventoryEntriesRequest"></a>
<a id="tocSlistinventoryentriesrequest"></a>
<a id="tocslistinventoryentriesrequest"></a>

```json
{
  "InstanceId": {},
  "TypeName": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|TypeName|object|true|none|none|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListOpsItemEventsResponse">ListOpsItemEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistopsitemeventsresponse"></a>
<a id="schema_ListOpsItemEventsResponse"></a>
<a id="tocSlistopsitemeventsresponse"></a>
<a id="tocslistopsitemeventsresponse"></a>

```json
{
  "NextToken": {},
  "Summaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Summaries|object|false|none|none|

<h2 id="tocS_ListOpsItemEventsRequest">ListOpsItemEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistopsitemeventsrequest"></a>
<a id="schema_ListOpsItemEventsRequest"></a>
<a id="tocSlistopsitemeventsrequest"></a>
<a id="tocslistopsitemeventsrequest"></a>

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOpsItemRelatedItemsResponse">ListOpsItemRelatedItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistopsitemrelateditemsresponse"></a>
<a id="schema_ListOpsItemRelatedItemsResponse"></a>
<a id="tocSlistopsitemrelateditemsresponse"></a>
<a id="tocslistopsitemrelateditemsresponse"></a>

```json
{
  "NextToken": {},
  "Summaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Summaries|object|false|none|none|

<h2 id="tocS_ListOpsItemRelatedItemsRequest">ListOpsItemRelatedItemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistopsitemrelateditemsrequest"></a>
<a id="schema_ListOpsItemRelatedItemsRequest"></a>
<a id="tocSlistopsitemrelateditemsrequest"></a>
<a id="tocslistopsitemrelateditemsrequest"></a>

```json
{
  "OpsItemId": {},
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsItemId|object|false|none|none|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOpsMetadataResult">ListOpsMetadataResult</h2>
<!-- backwards compatibility -->
<a id="schemalistopsmetadataresult"></a>
<a id="schema_ListOpsMetadataResult"></a>
<a id="tocSlistopsmetadataresult"></a>
<a id="tocslistopsmetadataresult"></a>

```json
{
  "OpsMetadataList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsMetadataList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOpsMetadataRequest">ListOpsMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistopsmetadatarequest"></a>
<a id="schema_ListOpsMetadataRequest"></a>
<a id="tocSlistopsmetadatarequest"></a>
<a id="tocslistopsmetadatarequest"></a>

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourceComplianceSummariesResult">ListResourceComplianceSummariesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcecompliancesummariesresult"></a>
<a id="schema_ListResourceComplianceSummariesResult"></a>
<a id="tocSlistresourcecompliancesummariesresult"></a>
<a id="tocslistresourcecompliancesummariesresult"></a>

```json
{
  "ResourceComplianceSummaryItems": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceComplianceSummaryItems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourceComplianceSummariesRequest">ListResourceComplianceSummariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcecompliancesummariesrequest"></a>
<a id="schema_ListResourceComplianceSummariesRequest"></a>
<a id="tocSlistresourcecompliancesummariesrequest"></a>
<a id="tocslistresourcecompliancesummariesrequest"></a>

```json
{
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListResourceDataSyncResult">ListResourceDataSyncResult</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcedatasyncresult"></a>
<a id="schema_ListResourceDataSyncResult"></a>
<a id="tocSlistresourcedatasyncresult"></a>
<a id="tocslistresourcedatasyncresult"></a>

```json
{
  "ResourceDataSyncItems": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceDataSyncItems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourceDataSyncRequest">ListResourceDataSyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcedatasyncrequest"></a>
<a id="schema_ListResourceDataSyncRequest"></a>
<a id="tocSlistresourcedatasyncrequest"></a>
<a id="tocslistresourcedatasyncrequest"></a>

```json
{
  "SyncType": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SyncType|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResult">ListTagsForResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresult"></a>
<a id="schema_ListTagsForResourceResult"></a>
<a id="tocSlisttagsforresourceresult"></a>
<a id="tocslisttagsforresourceresult"></a>

```json
{
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagList|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceType": {},
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|true|none|none|
|ResourceId|object|true|none|none|

<h2 id="tocS_ModifyDocumentPermissionResponse">ModifyDocumentPermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifydocumentpermissionresponse"></a>
<a id="schema_ModifyDocumentPermissionResponse"></a>
<a id="tocSmodifydocumentpermissionresponse"></a>
<a id="tocsmodifydocumentpermissionresponse"></a>

```json
{}
```

<h2 id="tocS_ModifyDocumentPermissionRequest">ModifyDocumentPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifydocumentpermissionrequest"></a>
<a id="schema_ModifyDocumentPermissionRequest"></a>
<a id="tocSmodifydocumentpermissionrequest"></a>
<a id="tocsmodifydocumentpermissionrequest"></a>

```json
{
  "Name": {},
  "PermissionType": {},
  "AccountIdsToAdd": {},
  "AccountIdsToRemove": {},
  "SharedDocumentVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|PermissionType|object|true|none|none|
|AccountIdsToAdd|object|false|none|none|
|AccountIdsToRemove|object|false|none|none|
|SharedDocumentVersion|object|false|none|none|

<h2 id="tocS_DocumentPermissionLimit">DocumentPermissionLimit</h2>
<!-- backwards compatibility -->
<a id="schemadocumentpermissionlimit"></a>
<a id="schema_DocumentPermissionLimit"></a>
<a id="tocSdocumentpermissionlimit"></a>
<a id="tocsdocumentpermissionlimit"></a>

```json
null
```

<h2 id="tocS_PutComplianceItemsResult">PutComplianceItemsResult</h2>
<!-- backwards compatibility -->
<a id="schemaputcomplianceitemsresult"></a>
<a id="schema_PutComplianceItemsResult"></a>
<a id="tocSputcomplianceitemsresult"></a>
<a id="tocsputcomplianceitemsresult"></a>

```json
{}
```

<h2 id="tocS_PutComplianceItemsRequest">PutComplianceItemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputcomplianceitemsrequest"></a>
<a id="schema_PutComplianceItemsRequest"></a>
<a id="tocSputcomplianceitemsrequest"></a>
<a id="tocsputcomplianceitemsrequest"></a>

```json
{
  "ResourceId": {},
  "ResourceType": {},
  "ComplianceType": {},
  "ExecutionSummary": {
    "ExecutionTime": {},
    "ExecutionId": {},
    "ExecutionType": {}
  },
  "Items": {},
  "ItemContentHash": {},
  "UploadType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|ResourceType|object|true|none|none|
|ComplianceType|object|true|none|none|
|ExecutionSummary|object|true|none|none|
|Items|object|true|none|none|
|ItemContentHash|object|false|none|none|
|UploadType|object|false|none|none|

<h2 id="tocS_InvalidItemContentException">InvalidItemContentException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliditemcontentexception"></a>
<a id="schema_InvalidItemContentException"></a>
<a id="tocSinvaliditemcontentexception"></a>
<a id="tocsinvaliditemcontentexception"></a>

```json
null
```

<h2 id="tocS_TotalSizeLimitExceededException">TotalSizeLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schematotalsizelimitexceededexception"></a>
<a id="schema_TotalSizeLimitExceededException"></a>
<a id="tocStotalsizelimitexceededexception"></a>
<a id="tocstotalsizelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ItemSizeLimitExceededException">ItemSizeLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaitemsizelimitexceededexception"></a>
<a id="schema_ItemSizeLimitExceededException"></a>
<a id="tocSitemsizelimitexceededexception"></a>
<a id="tocsitemsizelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ComplianceTypeCountLimitExceededException">ComplianceTypeCountLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemacompliancetypecountlimitexceededexception"></a>
<a id="schema_ComplianceTypeCountLimitExceededException"></a>
<a id="tocScompliancetypecountlimitexceededexception"></a>
<a id="tocscompliancetypecountlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_PutInventoryResult">PutInventoryResult</h2>
<!-- backwards compatibility -->
<a id="schemaputinventoryresult"></a>
<a id="schema_PutInventoryResult"></a>
<a id="tocSputinventoryresult"></a>
<a id="tocsputinventoryresult"></a>

```json
{
  "Message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|

<h2 id="tocS_PutInventoryRequest">PutInventoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputinventoryrequest"></a>
<a id="schema_PutInventoryRequest"></a>
<a id="tocSputinventoryrequest"></a>
<a id="tocsputinventoryrequest"></a>

```json
{
  "InstanceId": {},
  "Items": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|Items|object|true|none|none|

<h2 id="tocS_ItemContentMismatchException">ItemContentMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemaitemcontentmismatchexception"></a>
<a id="schema_ItemContentMismatchException"></a>
<a id="tocSitemcontentmismatchexception"></a>
<a id="tocsitemcontentmismatchexception"></a>

```json
null
```

<h2 id="tocS_CustomSchemaCountLimitExceededException">CustomSchemaCountLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemacustomschemacountlimitexceededexception"></a>
<a id="schema_CustomSchemaCountLimitExceededException"></a>
<a id="tocScustomschemacountlimitexceededexception"></a>
<a id="tocscustomschemacountlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedInventorySchemaVersionException">UnsupportedInventorySchemaVersionException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedinventoryschemaversionexception"></a>
<a id="schema_UnsupportedInventorySchemaVersionException"></a>
<a id="tocSunsupportedinventoryschemaversionexception"></a>
<a id="tocsunsupportedinventoryschemaversionexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedInventoryItemContextException">UnsupportedInventoryItemContextException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedinventoryitemcontextexception"></a>
<a id="schema_UnsupportedInventoryItemContextException"></a>
<a id="tocSunsupportedinventoryitemcontextexception"></a>
<a id="tocsunsupportedinventoryitemcontextexception"></a>

```json
null
```

<h2 id="tocS_InvalidInventoryItemContextException">InvalidInventoryItemContextException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinventoryitemcontextexception"></a>
<a id="schema_InvalidInventoryItemContextException"></a>
<a id="tocSinvalidinventoryitemcontextexception"></a>
<a id="tocsinvalidinventoryitemcontextexception"></a>

```json
null
```

<h2 id="tocS_SubTypeCountLimitExceededException">SubTypeCountLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemasubtypecountlimitexceededexception"></a>
<a id="schema_SubTypeCountLimitExceededException"></a>
<a id="tocSsubtypecountlimitexceededexception"></a>
<a id="tocssubtypecountlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_PutParameterResult">PutParameterResult</h2>
<!-- backwards compatibility -->
<a id="schemaputparameterresult"></a>
<a id="schema_PutParameterResult"></a>
<a id="tocSputparameterresult"></a>
<a id="tocsputparameterresult"></a>

```json
{
  "Version": {},
  "Tier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Version|object|false|none|none|
|Tier|object|false|none|none|

<h2 id="tocS_PutParameterRequest">PutParameterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputparameterrequest"></a>
<a id="schema_PutParameterRequest"></a>
<a id="tocSputparameterrequest"></a>
<a id="tocsputparameterrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "Value": {},
  "Type": {},
  "KeyId": {},
  "Overwrite": {},
  "AllowedPattern": {},
  "Tags": {},
  "Tier": {},
  "Policies": {},
  "DataType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|Value|object|true|none|none|
|Type|object|false|none|none|
|KeyId|object|false|none|none|
|Overwrite|object|false|none|none|
|AllowedPattern|object|false|none|none|
|Tags|object|false|none|none|
|Tier|object|false|none|none|
|Policies|object|false|none|none|
|DataType|object|false|none|none|

<h2 id="tocS_ParameterLimitExceeded">ParameterLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaparameterlimitexceeded"></a>
<a id="schema_ParameterLimitExceeded"></a>
<a id="tocSparameterlimitexceeded"></a>
<a id="tocsparameterlimitexceeded"></a>

```json
null
```

<h2 id="tocS_ParameterAlreadyExists">ParameterAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemaparameteralreadyexists"></a>
<a id="schema_ParameterAlreadyExists"></a>
<a id="tocSparameteralreadyexists"></a>
<a id="tocsparameteralreadyexists"></a>

```json
null
```

<h2 id="tocS_HierarchyLevelLimitExceededException">HierarchyLevelLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemahierarchylevellimitexceededexception"></a>
<a id="schema_HierarchyLevelLimitExceededException"></a>
<a id="tocShierarchylevellimitexceededexception"></a>
<a id="tocshierarchylevellimitexceededexception"></a>

```json
null
```

<h2 id="tocS_HierarchyTypeMismatchException">HierarchyTypeMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemahierarchytypemismatchexception"></a>
<a id="schema_HierarchyTypeMismatchException"></a>
<a id="tocShierarchytypemismatchexception"></a>
<a id="tocshierarchytypemismatchexception"></a>

```json
null
```

<h2 id="tocS_InvalidAllowedPatternException">InvalidAllowedPatternException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidallowedpatternexception"></a>
<a id="schema_InvalidAllowedPatternException"></a>
<a id="tocSinvalidallowedpatternexception"></a>
<a id="tocsinvalidallowedpatternexception"></a>

```json
null
```

<h2 id="tocS_ParameterMaxVersionLimitExceeded">ParameterMaxVersionLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaparametermaxversionlimitexceeded"></a>
<a id="schema_ParameterMaxVersionLimitExceeded"></a>
<a id="tocSparametermaxversionlimitexceeded"></a>
<a id="tocsparametermaxversionlimitexceeded"></a>

```json
null
```

<h2 id="tocS_ParameterPatternMismatchException">ParameterPatternMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemaparameterpatternmismatchexception"></a>
<a id="schema_ParameterPatternMismatchException"></a>
<a id="tocSparameterpatternmismatchexception"></a>
<a id="tocsparameterpatternmismatchexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedParameterType">UnsupportedParameterType</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedparametertype"></a>
<a id="schema_UnsupportedParameterType"></a>
<a id="tocSunsupportedparametertype"></a>
<a id="tocsunsupportedparametertype"></a>

```json
null
```

<h2 id="tocS_PoliciesLimitExceededException">PoliciesLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemapolicieslimitexceededexception"></a>
<a id="schema_PoliciesLimitExceededException"></a>
<a id="tocSpolicieslimitexceededexception"></a>
<a id="tocspolicieslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidPolicyTypeException">InvalidPolicyTypeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpolicytypeexception"></a>
<a id="schema_InvalidPolicyTypeException"></a>
<a id="tocSinvalidpolicytypeexception"></a>
<a id="tocsinvalidpolicytypeexception"></a>

```json
null
```

<h2 id="tocS_InvalidPolicyAttributeException">InvalidPolicyAttributeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpolicyattributeexception"></a>
<a id="schema_InvalidPolicyAttributeException"></a>
<a id="tocSinvalidpolicyattributeexception"></a>
<a id="tocsinvalidpolicyattributeexception"></a>

```json
null
```

<h2 id="tocS_IncompatiblePolicyException">IncompatiblePolicyException</h2>
<!-- backwards compatibility -->
<a id="schemaincompatiblepolicyexception"></a>
<a id="schema_IncompatiblePolicyException"></a>
<a id="tocSincompatiblepolicyexception"></a>
<a id="tocsincompatiblepolicyexception"></a>

```json
null
```

<h2 id="tocS_PutResourcePolicyResponse">PutResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyresponse"></a>
<a id="schema_PutResourcePolicyResponse"></a>
<a id="tocSputresourcepolicyresponse"></a>
<a id="tocsputresourcepolicyresponse"></a>

```json
{
  "PolicyId": {},
  "PolicyHash": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|false|none|none|
|PolicyHash|object|false|none|none|

<h2 id="tocS_PutResourcePolicyRequest">PutResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyrequest"></a>
<a id="schema_PutResourcePolicyRequest"></a>
<a id="tocSputresourcepolicyrequest"></a>
<a id="tocsputresourcepolicyrequest"></a>

```json
{
  "ResourceArn": {},
  "Policy": {},
  "PolicyId": {},
  "PolicyHash": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Policy|object|true|none|none|
|PolicyId|object|false|none|none|
|PolicyHash|object|false|none|none|

<h2 id="tocS_ResourcePolicyLimitExceededException">ResourcePolicyLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicylimitexceededexception"></a>
<a id="schema_ResourcePolicyLimitExceededException"></a>
<a id="tocSresourcepolicylimitexceededexception"></a>
<a id="tocsresourcepolicylimitexceededexception"></a>

```json
null
```

<h2 id="tocS_RegisterDefaultPatchBaselineResult">RegisterDefaultPatchBaselineResult</h2>
<!-- backwards compatibility -->
<a id="schemaregisterdefaultpatchbaselineresult"></a>
<a id="schema_RegisterDefaultPatchBaselineResult"></a>
<a id="tocSregisterdefaultpatchbaselineresult"></a>
<a id="tocsregisterdefaultpatchbaselineresult"></a>

```json
{
  "BaselineId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|false|none|none|

<h2 id="tocS_RegisterDefaultPatchBaselineRequest">RegisterDefaultPatchBaselineRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterdefaultpatchbaselinerequest"></a>
<a id="schema_RegisterDefaultPatchBaselineRequest"></a>
<a id="tocSregisterdefaultpatchbaselinerequest"></a>
<a id="tocsregisterdefaultpatchbaselinerequest"></a>

```json
{
  "BaselineId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|true|none|none|

<h2 id="tocS_RegisterPatchBaselineForPatchGroupResult">RegisterPatchBaselineForPatchGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemaregisterpatchbaselineforpatchgroupresult"></a>
<a id="schema_RegisterPatchBaselineForPatchGroupResult"></a>
<a id="tocSregisterpatchbaselineforpatchgroupresult"></a>
<a id="tocsregisterpatchbaselineforpatchgroupresult"></a>

```json
{
  "BaselineId": {},
  "PatchGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|false|none|none|
|PatchGroup|object|false|none|none|

<h2 id="tocS_RegisterPatchBaselineForPatchGroupRequest">RegisterPatchBaselineForPatchGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterpatchbaselineforpatchgrouprequest"></a>
<a id="schema_RegisterPatchBaselineForPatchGroupRequest"></a>
<a id="tocSregisterpatchbaselineforpatchgrouprequest"></a>
<a id="tocsregisterpatchbaselineforpatchgrouprequest"></a>

```json
{
  "BaselineId": {},
  "PatchGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|true|none|none|
|PatchGroup|object|true|none|none|

<h2 id="tocS_AlreadyExistsException">AlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaalreadyexistsexception"></a>
<a id="schema_AlreadyExistsException"></a>
<a id="tocSalreadyexistsexception"></a>
<a id="tocsalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_RegisterTargetWithMaintenanceWindowResult">RegisterTargetWithMaintenanceWindowResult</h2>
<!-- backwards compatibility -->
<a id="schemaregistertargetwithmaintenancewindowresult"></a>
<a id="schema_RegisterTargetWithMaintenanceWindowResult"></a>
<a id="tocSregistertargetwithmaintenancewindowresult"></a>
<a id="tocsregistertargetwithmaintenancewindowresult"></a>

```json
{
  "WindowTargetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowTargetId|object|false|none|none|

<h2 id="tocS_RegisterTargetWithMaintenanceWindowRequest">RegisterTargetWithMaintenanceWindowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregistertargetwithmaintenancewindowrequest"></a>
<a id="schema_RegisterTargetWithMaintenanceWindowRequest"></a>
<a id="tocSregistertargetwithmaintenancewindowrequest"></a>
<a id="tocsregistertargetwithmaintenancewindowrequest"></a>

```json
{
  "WindowId": {},
  "ResourceType": {},
  "Targets": {},
  "OwnerInformation": {},
  "Name": {},
  "Description": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|true|none|none|
|ResourceType|object|true|none|none|
|Targets|object|true|none|none|
|OwnerInformation|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_RegisterTaskWithMaintenanceWindowResult">RegisterTaskWithMaintenanceWindowResult</h2>
<!-- backwards compatibility -->
<a id="schemaregistertaskwithmaintenancewindowresult"></a>
<a id="schema_RegisterTaskWithMaintenanceWindowResult"></a>
<a id="tocSregistertaskwithmaintenancewindowresult"></a>
<a id="tocsregistertaskwithmaintenancewindowresult"></a>

```json
{
  "WindowTaskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowTaskId|object|false|none|none|

<h2 id="tocS_RegisterTaskWithMaintenanceWindowRequest">RegisterTaskWithMaintenanceWindowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregistertaskwithmaintenancewindowrequest"></a>
<a id="schema_RegisterTaskWithMaintenanceWindowRequest"></a>
<a id="tocSregistertaskwithmaintenancewindowrequest"></a>
<a id="tocsregistertaskwithmaintenancewindowrequest"></a>

```json
{
  "WindowId": {},
  "Targets": {},
  "TaskArn": {},
  "ServiceRoleArn": {},
  "TaskType": {},
  "TaskParameters": {
    "property1": {
      "Values": {}
    },
    "property2": {
      "Values": {}
    }
  },
  "TaskInvocationParameters": {
    "RunCommand": {
      "Comment": {},
      "CloudWatchOutputConfig": {
        "CloudWatchLogGroupName": {},
        "CloudWatchOutputEnabled": {}
      },
      "DocumentHash": {},
      "DocumentHashType": {},
      "DocumentVersion": {},
      "NotificationConfig": {
        "NotificationArn": {},
        "NotificationEvents": {},
        "NotificationType": {}
      },
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "ServiceRoleArn": {},
      "TimeoutSeconds": {}
    },
    "Automation": {
      "DocumentVersion": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "StepFunctions": {
      "Input": {},
      "Name": {}
    },
    "Lambda": {
      "ClientContext": {},
      "Qualifier": {},
      "Payload": {}
    }
  },
  "Priority": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "LoggingInfo": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "S3Region": {}
  },
  "Name": {},
  "Description": {},
  "ClientToken": {},
  "CutoffBehavior": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|true|none|none|
|Targets|object|false|none|none|
|TaskArn|object|true|none|none|
|ServiceRoleArn|object|false|none|none|
|TaskType|object|true|none|none|
|TaskParameters|object|false|none|none|
|TaskInvocationParameters|object|false|none|none|
|Priority|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|MaxErrors|object|false|none|none|
|LoggingInfo|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|ClientToken|object|false|none|none|
|CutoffBehavior|object|false|none|none|
|AlarmConfiguration|object|false|none|none|

<h2 id="tocS_FeatureNotAvailableException">FeatureNotAvailableException</h2>
<!-- backwards compatibility -->
<a id="schemafeaturenotavailableexception"></a>
<a id="schema_FeatureNotAvailableException"></a>
<a id="tocSfeaturenotavailableexception"></a>
<a id="tocsfeaturenotavailableexception"></a>

```json
null
```

<h2 id="tocS_RemoveTagsFromResourceResult">RemoveTagsFromResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromresourceresult"></a>
<a id="schema_RemoveTagsFromResourceResult"></a>
<a id="tocSremovetagsfromresourceresult"></a>
<a id="tocsremovetagsfromresourceresult"></a>

```json
{}
```

<h2 id="tocS_RemoveTagsFromResourceRequest">RemoveTagsFromResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromresourcerequest"></a>
<a id="schema_RemoveTagsFromResourceRequest"></a>
<a id="tocSremovetagsfromresourcerequest"></a>
<a id="tocsremovetagsfromresourcerequest"></a>

```json
{
  "ResourceType": {},
  "ResourceId": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|true|none|none|
|ResourceId|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_ResetServiceSettingResult">ResetServiceSettingResult</h2>
<!-- backwards compatibility -->
<a id="schemaresetservicesettingresult"></a>
<a id="schema_ResetServiceSettingResult"></a>
<a id="tocSresetservicesettingresult"></a>
<a id="tocsresetservicesettingresult"></a>

```json
{
  "ServiceSetting": {
    "SettingId": {},
    "SettingValue": {},
    "LastModifiedDate": {},
    "LastModifiedUser": {},
    "ARN": {},
    "Status": {}
  }
}
```

The result body of the ResetServiceSetting API operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceSetting|object|false|none|none|

<h2 id="tocS_ResetServiceSettingRequest">ResetServiceSettingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetservicesettingrequest"></a>
<a id="schema_ResetServiceSettingRequest"></a>
<a id="tocSresetservicesettingrequest"></a>
<a id="tocsresetservicesettingrequest"></a>

```json
{
  "SettingId": {}
}
```

The request body of the ResetServiceSetting API operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SettingId|object|true|none|none|

<h2 id="tocS_ResumeSessionResponse">ResumeSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresumesessionresponse"></a>
<a id="schema_ResumeSessionResponse"></a>
<a id="tocSresumesessionresponse"></a>
<a id="tocsresumesessionresponse"></a>

```json
{
  "SessionId": {},
  "TokenValue": {},
  "StreamUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|false|none|none|
|TokenValue|object|false|none|none|
|StreamUrl|object|false|none|none|

<h2 id="tocS_ResumeSessionRequest">ResumeSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumesessionrequest"></a>
<a id="schema_ResumeSessionRequest"></a>
<a id="tocSresumesessionrequest"></a>
<a id="tocsresumesessionrequest"></a>

```json
{
  "SessionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|true|none|none|

<h2 id="tocS_SendAutomationSignalResult">SendAutomationSignalResult</h2>
<!-- backwards compatibility -->
<a id="schemasendautomationsignalresult"></a>
<a id="schema_SendAutomationSignalResult"></a>
<a id="tocSsendautomationsignalresult"></a>
<a id="tocssendautomationsignalresult"></a>

```json
{}
```

<h2 id="tocS_SendAutomationSignalRequest">SendAutomationSignalRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendautomationsignalrequest"></a>
<a id="schema_SendAutomationSignalRequest"></a>
<a id="tocSsendautomationsignalrequest"></a>
<a id="tocssendautomationsignalrequest"></a>

```json
{
  "AutomationExecutionId": {},
  "SignalType": {},
  "Payload": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomationExecutionId|object|true|none|none|
|SignalType|object|true|none|none|
|Payload|object|false|none|none|

<h2 id="tocS_AutomationStepNotFoundException">AutomationStepNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaautomationstepnotfoundexception"></a>
<a id="schema_AutomationStepNotFoundException"></a>
<a id="tocSautomationstepnotfoundexception"></a>
<a id="tocsautomationstepnotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidAutomationSignalException">InvalidAutomationSignalException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidautomationsignalexception"></a>
<a id="schema_InvalidAutomationSignalException"></a>
<a id="tocSinvalidautomationsignalexception"></a>
<a id="tocsinvalidautomationsignalexception"></a>

```json
null
```

<h2 id="tocS_SendCommandResult">SendCommandResult</h2>
<!-- backwards compatibility -->
<a id="schemasendcommandresult"></a>
<a id="schema_SendCommandResult"></a>
<a id="tocSsendcommandresult"></a>
<a id="tocssendcommandresult"></a>

```json
{
  "Command": {
    "CommandId": {},
    "DocumentName": {},
    "DocumentVersion": {},
    "Comment": {},
    "ExpiresAfter": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "InstanceIds": {},
    "Targets": {},
    "RequestedDateTime": {},
    "Status": {},
    "StatusDetails": {},
    "OutputS3Region": {},
    "OutputS3BucketName": {},
    "OutputS3KeyPrefix": {},
    "MaxConcurrency": {},
    "MaxErrors": {},
    "TargetCount": {},
    "CompletedCount": {},
    "ErrorCount": {},
    "DeliveryTimedOutCount": {},
    "ServiceRole": {},
    "NotificationConfig": {
      "NotificationArn": {},
      "NotificationEvents": {},
      "NotificationType": {}
    },
    "CloudWatchOutputConfig": {
      "CloudWatchLogGroupName": {},
      "CloudWatchOutputEnabled": {}
    },
    "TimeoutSeconds": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Command|object|false|none|none|

<h2 id="tocS_SendCommandRequest">SendCommandRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendcommandrequest"></a>
<a id="schema_SendCommandRequest"></a>
<a id="tocSsendcommandrequest"></a>
<a id="tocssendcommandrequest"></a>

```json
{
  "InstanceIds": {},
  "Targets": {},
  "DocumentName": {},
  "DocumentVersion": {},
  "DocumentHash": {},
  "DocumentHashType": {},
  "TimeoutSeconds": {},
  "Comment": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "OutputS3Region": {},
  "OutputS3BucketName": {},
  "OutputS3KeyPrefix": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "ServiceRoleArn": {},
  "NotificationConfig": {
    "NotificationArn": {},
    "NotificationEvents": {},
    "NotificationType": {}
  },
  "CloudWatchOutputConfig": {
    "CloudWatchLogGroupName": {},
    "CloudWatchOutputEnabled": {}
  },
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceIds|object|false|none|none|
|Targets|object|false|none|none|
|DocumentName|object|true|none|none|
|DocumentVersion|object|false|none|none|
|DocumentHash|object|false|none|none|
|DocumentHashType|object|false|none|none|
|TimeoutSeconds|object|false|none|none|
|Comment|object|false|none|none|
|Parameters|object|false|none|none|
|OutputS3Region|object|false|none|none|
|OutputS3BucketName|object|false|none|none|
|OutputS3KeyPrefix|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|MaxErrors|object|false|none|none|
|ServiceRoleArn|object|false|none|none|
|NotificationConfig|object|false|none|none|
|CloudWatchOutputConfig|object|false|none|none|
|AlarmConfiguration|object|false|none|none|

<h2 id="tocS_InvalidOutputFolder">InvalidOutputFolder</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoutputfolder"></a>
<a id="schema_InvalidOutputFolder"></a>
<a id="tocSinvalidoutputfolder"></a>
<a id="tocsinvalidoutputfolder"></a>

```json
null
```

<h2 id="tocS_InvalidRole">InvalidRole</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrole"></a>
<a id="schema_InvalidRole"></a>
<a id="tocSinvalidrole"></a>
<a id="tocsinvalidrole"></a>

```json
null
```

<h2 id="tocS_InvalidNotificationConfig">InvalidNotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnotificationconfig"></a>
<a id="schema_InvalidNotificationConfig"></a>
<a id="tocSinvalidnotificationconfig"></a>
<a id="tocsinvalidnotificationconfig"></a>

```json
null
```

<h2 id="tocS_StartAssociationsOnceResult">StartAssociationsOnceResult</h2>
<!-- backwards compatibility -->
<a id="schemastartassociationsonceresult"></a>
<a id="schema_StartAssociationsOnceResult"></a>
<a id="tocSstartassociationsonceresult"></a>
<a id="tocsstartassociationsonceresult"></a>

```json
{}
```

<h2 id="tocS_StartAssociationsOnceRequest">StartAssociationsOnceRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartassociationsoncerequest"></a>
<a id="schema_StartAssociationsOnceRequest"></a>
<a id="tocSstartassociationsoncerequest"></a>
<a id="tocsstartassociationsoncerequest"></a>

```json
{
  "AssociationIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationIds|object|true|none|none|

<h2 id="tocS_InvalidAssociation">InvalidAssociation</h2>
<!-- backwards compatibility -->
<a id="schemainvalidassociation"></a>
<a id="schema_InvalidAssociation"></a>
<a id="tocSinvalidassociation"></a>
<a id="tocsinvalidassociation"></a>

```json
null
```

<h2 id="tocS_StartAutomationExecutionResult">StartAutomationExecutionResult</h2>
<!-- backwards compatibility -->
<a id="schemastartautomationexecutionresult"></a>
<a id="schema_StartAutomationExecutionResult"></a>
<a id="tocSstartautomationexecutionresult"></a>
<a id="tocsstartautomationexecutionresult"></a>

```json
{
  "AutomationExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomationExecutionId|object|false|none|none|

<h2 id="tocS_StartAutomationExecutionRequest">StartAutomationExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartautomationexecutionrequest"></a>
<a id="schema_StartAutomationExecutionRequest"></a>
<a id="tocSstartautomationexecutionrequest"></a>
<a id="tocsstartautomationexecutionrequest"></a>

```json
{
  "DocumentName": {},
  "DocumentVersion": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "ClientToken": {},
  "Mode": {},
  "TargetParameterName": {},
  "Targets": {},
  "TargetMaps": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "TargetLocations": {},
  "Tags": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentName|object|true|none|none|
|DocumentVersion|object|false|none|none|
|Parameters|object|false|none|none|
|ClientToken|object|false|none|none|
|Mode|object|false|none|none|
|TargetParameterName|object|false|none|none|
|Targets|object|false|none|none|
|TargetMaps|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|MaxErrors|object|false|none|none|
|TargetLocations|object|false|none|none|
|Tags|object|false|none|none|
|AlarmConfiguration|object|false|none|none|

<h2 id="tocS_AutomationDefinitionNotFoundException">AutomationDefinitionNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaautomationdefinitionnotfoundexception"></a>
<a id="schema_AutomationDefinitionNotFoundException"></a>
<a id="tocSautomationdefinitionnotfoundexception"></a>
<a id="tocsautomationdefinitionnotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidAutomationExecutionParametersException">InvalidAutomationExecutionParametersException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidautomationexecutionparametersexception"></a>
<a id="schema_InvalidAutomationExecutionParametersException"></a>
<a id="tocSinvalidautomationexecutionparametersexception"></a>
<a id="tocsinvalidautomationexecutionparametersexception"></a>

```json
null
```

<h2 id="tocS_AutomationExecutionLimitExceededException">AutomationExecutionLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutionlimitexceededexception"></a>
<a id="schema_AutomationExecutionLimitExceededException"></a>
<a id="tocSautomationexecutionlimitexceededexception"></a>
<a id="tocsautomationexecutionlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_AutomationDefinitionVersionNotFoundException">AutomationDefinitionVersionNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaautomationdefinitionversionnotfoundexception"></a>
<a id="schema_AutomationDefinitionVersionNotFoundException"></a>
<a id="tocSautomationdefinitionversionnotfoundexception"></a>
<a id="tocsautomationdefinitionversionnotfoundexception"></a>

```json
null
```

<h2 id="tocS_StartChangeRequestExecutionResult">StartChangeRequestExecutionResult</h2>
<!-- backwards compatibility -->
<a id="schemastartchangerequestexecutionresult"></a>
<a id="schema_StartChangeRequestExecutionResult"></a>
<a id="tocSstartchangerequestexecutionresult"></a>
<a id="tocsstartchangerequestexecutionresult"></a>

```json
{
  "AutomationExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomationExecutionId|object|false|none|none|

<h2 id="tocS_StartChangeRequestExecutionRequest">StartChangeRequestExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartchangerequestexecutionrequest"></a>
<a id="schema_StartChangeRequestExecutionRequest"></a>
<a id="tocSstartchangerequestexecutionrequest"></a>
<a id="tocsstartchangerequestexecutionrequest"></a>

```json
{
  "ScheduledTime": {},
  "DocumentName": {},
  "DocumentVersion": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "ChangeRequestName": {},
  "ClientToken": {},
  "AutoApprove": {},
  "Runbooks": {},
  "Tags": {},
  "ScheduledEndTime": {},
  "ChangeDetails": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledTime|object|false|none|none|
|DocumentName|object|true|none|none|
|DocumentVersion|object|false|none|none|
|Parameters|object|false|none|none|
|ChangeRequestName|object|false|none|none|
|ClientToken|object|false|none|none|
|AutoApprove|object|false|none|none|
|Runbooks|object|true|none|none|
|Tags|object|false|none|none|
|ScheduledEndTime|object|false|none|none|
|ChangeDetails|object|false|none|none|

<h2 id="tocS_AutomationDefinitionNotApprovedException">AutomationDefinitionNotApprovedException</h2>
<!-- backwards compatibility -->
<a id="schemaautomationdefinitionnotapprovedexception"></a>
<a id="schema_AutomationDefinitionNotApprovedException"></a>
<a id="tocSautomationdefinitionnotapprovedexception"></a>
<a id="tocsautomationdefinitionnotapprovedexception"></a>

```json
null
```

<h2 id="tocS_StartSessionResponse">StartSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartsessionresponse"></a>
<a id="schema_StartSessionResponse"></a>
<a id="tocSstartsessionresponse"></a>
<a id="tocsstartsessionresponse"></a>

```json
{
  "SessionId": {},
  "TokenValue": {},
  "StreamUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|false|none|none|
|TokenValue|object|false|none|none|
|StreamUrl|object|false|none|none|

<h2 id="tocS_StartSessionRequest">StartSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartsessionrequest"></a>
<a id="schema_StartSessionRequest"></a>
<a id="tocSstartsessionrequest"></a>
<a id="tocsstartsessionrequest"></a>

```json
{
  "Target": {},
  "DocumentName": {},
  "Reason": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Target|object|true|none|none|
|DocumentName|object|false|none|none|
|Reason|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_TargetNotConnected">TargetNotConnected</h2>
<!-- backwards compatibility -->
<a id="schematargetnotconnected"></a>
<a id="schema_TargetNotConnected"></a>
<a id="tocStargetnotconnected"></a>
<a id="tocstargetnotconnected"></a>

```json
null
```

<h2 id="tocS_StopAutomationExecutionResult">StopAutomationExecutionResult</h2>
<!-- backwards compatibility -->
<a id="schemastopautomationexecutionresult"></a>
<a id="schema_StopAutomationExecutionResult"></a>
<a id="tocSstopautomationexecutionresult"></a>
<a id="tocsstopautomationexecutionresult"></a>

```json
{}
```

<h2 id="tocS_StopAutomationExecutionRequest">StopAutomationExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopautomationexecutionrequest"></a>
<a id="schema_StopAutomationExecutionRequest"></a>
<a id="tocSstopautomationexecutionrequest"></a>
<a id="tocsstopautomationexecutionrequest"></a>

```json
{
  "AutomationExecutionId": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomationExecutionId|object|true|none|none|
|Type|object|false|none|none|

<h2 id="tocS_InvalidAutomationStatusUpdateException">InvalidAutomationStatusUpdateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidautomationstatusupdateexception"></a>
<a id="schema_InvalidAutomationStatusUpdateException"></a>
<a id="tocSinvalidautomationstatusupdateexception"></a>
<a id="tocsinvalidautomationstatusupdateexception"></a>

```json
null
```

<h2 id="tocS_TerminateSessionResponse">TerminateSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schematerminatesessionresponse"></a>
<a id="schema_TerminateSessionResponse"></a>
<a id="tocSterminatesessionresponse"></a>
<a id="tocsterminatesessionresponse"></a>

```json
{
  "SessionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|false|none|none|

<h2 id="tocS_TerminateSessionRequest">TerminateSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schematerminatesessionrequest"></a>
<a id="schema_TerminateSessionRequest"></a>
<a id="tocSterminatesessionrequest"></a>
<a id="tocsterminatesessionrequest"></a>

```json
{
  "SessionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|true|none|none|

<h2 id="tocS_UnlabelParameterVersionResult">UnlabelParameterVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemaunlabelparameterversionresult"></a>
<a id="schema_UnlabelParameterVersionResult"></a>
<a id="tocSunlabelparameterversionresult"></a>
<a id="tocsunlabelparameterversionresult"></a>

```json
{
  "RemovedLabels": {},
  "InvalidLabels": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RemovedLabels|object|false|none|none|
|InvalidLabels|object|false|none|none|

<h2 id="tocS_UnlabelParameterVersionRequest">UnlabelParameterVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunlabelparameterversionrequest"></a>
<a id="schema_UnlabelParameterVersionRequest"></a>
<a id="tocSunlabelparameterversionrequest"></a>
<a id="tocsunlabelparameterversionrequest"></a>

```json
{
  "Name": {},
  "ParameterVersion": {},
  "Labels": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ParameterVersion|object|true|none|none|
|Labels|object|true|none|none|

<h2 id="tocS_UpdateAssociationResult">UpdateAssociationResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassociationresult"></a>
<a id="schema_UpdateAssociationResult"></a>
<a id="tocSupdateassociationresult"></a>
<a id="tocsupdateassociationresult"></a>

```json
{
  "AssociationDescription": {
    "Name": {},
    "InstanceId": {},
    "AssociationVersion": {},
    "Date": {},
    "LastUpdateAssociationDate": {},
    "Status": {
      "Date": {},
      "Name": {},
      "Message": {},
      "AdditionalInfo": {}
    },
    "Overview": {
      "Status": {},
      "DetailedStatus": {},
      "AssociationStatusAggregatedCount": {
        "property1": 0,
        "property2": 0
      }
    },
    "DocumentVersion": {},
    "AutomationTargetParameterName": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "AssociationId": {},
    "Targets": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "LastExecutionDate": {},
    "LastSuccessfulExecutionDate": {},
    "AssociationName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationDescription|object|false|none|none|

<h2 id="tocS_UpdateAssociationRequest">UpdateAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassociationrequest"></a>
<a id="schema_UpdateAssociationRequest"></a>
<a id="tocSupdateassociationrequest"></a>
<a id="tocsupdateassociationrequest"></a>

```json
{
  "AssociationId": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "DocumentVersion": {},
  "ScheduleExpression": {},
  "OutputLocation": {
    "S3Location": {
      "OutputS3Region": {},
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {}
    }
  },
  "Name": {},
  "Targets": {},
  "AssociationName": {},
  "AssociationVersion": {},
  "AutomationTargetParameterName": {},
  "MaxErrors": {},
  "MaxConcurrency": {},
  "ComplianceSeverity": {},
  "SyncCompliance": {},
  "ApplyOnlyAtCronInterval": {},
  "CalendarNames": {},
  "TargetLocations": {},
  "ScheduleOffset": {},
  "TargetMaps": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|true|none|none|
|Parameters|object|false|none|none|
|DocumentVersion|object|false|none|none|
|ScheduleExpression|object|false|none|none|
|OutputLocation|object|false|none|none|
|Name|object|false|none|none|
|Targets|object|false|none|none|
|AssociationName|object|false|none|none|
|AssociationVersion|object|false|none|none|
|AutomationTargetParameterName|object|false|none|none|
|MaxErrors|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|ComplianceSeverity|object|false|none|none|
|SyncCompliance|object|false|none|none|
|ApplyOnlyAtCronInterval|object|false|none|none|
|CalendarNames|object|false|none|none|
|TargetLocations|object|false|none|none|
|ScheduleOffset|object|false|none|none|
|TargetMaps|object|false|none|none|
|AlarmConfiguration|[AlarmConfiguration](#schemaalarmconfiguration)|false|none|The details for the CloudWatch alarm you want to apply to an automation or command.|

<h2 id="tocS_InvalidUpdate">InvalidUpdate</h2>
<!-- backwards compatibility -->
<a id="schemainvalidupdate"></a>
<a id="schema_InvalidUpdate"></a>
<a id="tocSinvalidupdate"></a>
<a id="tocsinvalidupdate"></a>

```json
null
```

<h2 id="tocS_AssociationVersionLimitExceeded">AssociationVersionLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaassociationversionlimitexceeded"></a>
<a id="schema_AssociationVersionLimitExceeded"></a>
<a id="tocSassociationversionlimitexceeded"></a>
<a id="tocsassociationversionlimitexceeded"></a>

```json
null
```

<h2 id="tocS_UpdateAssociationStatusResult">UpdateAssociationStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassociationstatusresult"></a>
<a id="schema_UpdateAssociationStatusResult"></a>
<a id="tocSupdateassociationstatusresult"></a>
<a id="tocsupdateassociationstatusresult"></a>

```json
{
  "AssociationDescription": {
    "Name": {},
    "InstanceId": {},
    "AssociationVersion": {},
    "Date": {},
    "LastUpdateAssociationDate": {},
    "Status": {
      "Date": {},
      "Name": {},
      "Message": {},
      "AdditionalInfo": {}
    },
    "Overview": {
      "Status": {},
      "DetailedStatus": {},
      "AssociationStatusAggregatedCount": {
        "property1": 0,
        "property2": 0
      }
    },
    "DocumentVersion": {},
    "AutomationTargetParameterName": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "AssociationId": {},
    "Targets": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "LastExecutionDate": {},
    "LastSuccessfulExecutionDate": {},
    "AssociationName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationDescription|object|false|none|none|

<h2 id="tocS_UpdateAssociationStatusRequest">UpdateAssociationStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassociationstatusrequest"></a>
<a id="schema_UpdateAssociationStatusRequest"></a>
<a id="tocSupdateassociationstatusrequest"></a>
<a id="tocsupdateassociationstatusrequest"></a>

```json
{
  "Name": {},
  "InstanceId": {},
  "AssociationStatus": {
    "Date": {},
    "Name": {},
    "Message": {},
    "AdditionalInfo": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|InstanceId|object|true|none|none|
|AssociationStatus|object|true|none|none|

<h2 id="tocS_StatusUnchanged">StatusUnchanged</h2>
<!-- backwards compatibility -->
<a id="schemastatusunchanged"></a>
<a id="schema_StatusUnchanged"></a>
<a id="tocSstatusunchanged"></a>
<a id="tocsstatusunchanged"></a>

```json
null
```

<h2 id="tocS_UpdateDocumentResult">UpdateDocumentResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedocumentresult"></a>
<a id="schema_UpdateDocumentResult"></a>
<a id="tocSupdatedocumentresult"></a>
<a id="tocsupdatedocumentresult"></a>

```json
{
  "DocumentDescription": {
    "Sha1": {},
    "Hash": {},
    "HashType": {},
    "Name": {},
    "DisplayName": {},
    "VersionName": {},
    "Owner": {},
    "CreatedDate": {},
    "Status": {},
    "StatusInformation": {},
    "DocumentVersion": {},
    "Description": {},
    "Parameters": {},
    "PlatformTypes": {},
    "DocumentType": {},
    "SchemaVersion": {},
    "LatestVersion": {},
    "DefaultVersion": {},
    "DocumentFormat": {},
    "TargetType": {},
    "Tags": {},
    "AttachmentsInformation": {},
    "Requires": {},
    "Author": {},
    "ReviewInformation": {},
    "ApprovedVersion": {},
    "PendingReviewVersion": {},
    "ReviewStatus": {},
    "Category": {},
    "CategoryEnum": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentDescription|object|false|none|none|

<h2 id="tocS_UpdateDocumentRequest">UpdateDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedocumentrequest"></a>
<a id="schema_UpdateDocumentRequest"></a>
<a id="tocSupdatedocumentrequest"></a>
<a id="tocsupdatedocumentrequest"></a>

```json
{
  "Content": {},
  "Attachments": {},
  "Name": {},
  "DisplayName": {},
  "VersionName": {},
  "DocumentVersion": {},
  "DocumentFormat": {},
  "TargetType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|true|none|none|
|Attachments|object|false|none|none|
|Name|object|true|none|none|
|DisplayName|object|false|none|none|
|VersionName|object|false|none|none|
|DocumentVersion|object|false|none|none|
|DocumentFormat|object|false|none|none|
|TargetType|object|false|none|none|

<h2 id="tocS_DocumentVersionLimitExceeded">DocumentVersionLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemadocumentversionlimitexceeded"></a>
<a id="schema_DocumentVersionLimitExceeded"></a>
<a id="tocSdocumentversionlimitexceeded"></a>
<a id="tocsdocumentversionlimitexceeded"></a>

```json
null
```

<h2 id="tocS_DuplicateDocumentContent">DuplicateDocumentContent</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatedocumentcontent"></a>
<a id="schema_DuplicateDocumentContent"></a>
<a id="tocSduplicatedocumentcontent"></a>
<a id="tocsduplicatedocumentcontent"></a>

```json
null
```

<h2 id="tocS_DuplicateDocumentVersionName">DuplicateDocumentVersionName</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatedocumentversionname"></a>
<a id="schema_DuplicateDocumentVersionName"></a>
<a id="tocSduplicatedocumentversionname"></a>
<a id="tocsduplicatedocumentversionname"></a>

```json
null
```

<h2 id="tocS_UpdateDocumentDefaultVersionResult">UpdateDocumentDefaultVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedocumentdefaultversionresult"></a>
<a id="schema_UpdateDocumentDefaultVersionResult"></a>
<a id="tocSupdatedocumentdefaultversionresult"></a>
<a id="tocsupdatedocumentdefaultversionresult"></a>

```json
{
  "Description": {
    "Name": {},
    "DefaultVersion": {},
    "DefaultVersionName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|

<h2 id="tocS_UpdateDocumentDefaultVersionRequest">UpdateDocumentDefaultVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedocumentdefaultversionrequest"></a>
<a id="schema_UpdateDocumentDefaultVersionRequest"></a>
<a id="tocSupdatedocumentdefaultversionrequest"></a>
<a id="tocsupdatedocumentdefaultversionrequest"></a>

```json
{
  "Name": {},
  "DocumentVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DocumentVersion|object|true|none|none|

<h2 id="tocS_UpdateDocumentMetadataResponse">UpdateDocumentMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedocumentmetadataresponse"></a>
<a id="schema_UpdateDocumentMetadataResponse"></a>
<a id="tocSupdatedocumentmetadataresponse"></a>
<a id="tocsupdatedocumentmetadataresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateDocumentMetadataRequest">UpdateDocumentMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedocumentmetadatarequest"></a>
<a id="schema_UpdateDocumentMetadataRequest"></a>
<a id="tocSupdatedocumentmetadatarequest"></a>
<a id="tocsupdatedocumentmetadatarequest"></a>

```json
{
  "Name": {},
  "DocumentVersion": {},
  "DocumentReviews": {
    "Action": {},
    "Comment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DocumentVersion|object|false|none|none|
|DocumentReviews|object|true|none|none|

<h2 id="tocS_UpdateMaintenanceWindowResult">UpdateMaintenanceWindowResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemaintenancewindowresult"></a>
<a id="schema_UpdateMaintenanceWindowResult"></a>
<a id="tocSupdatemaintenancewindowresult"></a>
<a id="tocsupdatemaintenancewindowresult"></a>

```json
{
  "WindowId": {},
  "Name": {},
  "Description": {},
  "StartDate": {},
  "EndDate": {},
  "Schedule": {},
  "ScheduleTimezone": {},
  "ScheduleOffset": {},
  "Duration": {},
  "Cutoff": {},
  "AllowUnassociatedTargets": {},
  "Enabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|StartDate|object|false|none|none|
|EndDate|object|false|none|none|
|Schedule|object|false|none|none|
|ScheduleTimezone|object|false|none|none|
|ScheduleOffset|object|false|none|none|
|Duration|object|false|none|none|
|Cutoff|object|false|none|none|
|AllowUnassociatedTargets|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_UpdateMaintenanceWindowRequest">UpdateMaintenanceWindowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemaintenancewindowrequest"></a>
<a id="schema_UpdateMaintenanceWindowRequest"></a>
<a id="tocSupdatemaintenancewindowrequest"></a>
<a id="tocsupdatemaintenancewindowrequest"></a>

```json
{
  "WindowId": {},
  "Name": {},
  "Description": {},
  "StartDate": {},
  "EndDate": {},
  "Schedule": {},
  "ScheduleTimezone": {},
  "ScheduleOffset": {},
  "Duration": {},
  "Cutoff": {},
  "AllowUnassociatedTargets": {},
  "Enabled": {},
  "Replace": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|StartDate|object|false|none|none|
|EndDate|object|false|none|none|
|Schedule|object|false|none|none|
|ScheduleTimezone|object|false|none|none|
|ScheduleOffset|object|false|none|none|
|Duration|object|false|none|none|
|Cutoff|object|false|none|none|
|AllowUnassociatedTargets|object|false|none|none|
|Enabled|object|false|none|none|
|Replace|object|false|none|none|

<h2 id="tocS_UpdateMaintenanceWindowTargetResult">UpdateMaintenanceWindowTargetResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemaintenancewindowtargetresult"></a>
<a id="schema_UpdateMaintenanceWindowTargetResult"></a>
<a id="tocSupdatemaintenancewindowtargetresult"></a>
<a id="tocsupdatemaintenancewindowtargetresult"></a>

```json
{
  "WindowId": {},
  "WindowTargetId": {},
  "Targets": {},
  "OwnerInformation": {},
  "Name": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|WindowTargetId|object|false|none|none|
|Targets|object|false|none|none|
|OwnerInformation|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateMaintenanceWindowTargetRequest">UpdateMaintenanceWindowTargetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemaintenancewindowtargetrequest"></a>
<a id="schema_UpdateMaintenanceWindowTargetRequest"></a>
<a id="tocSupdatemaintenancewindowtargetrequest"></a>
<a id="tocsupdatemaintenancewindowtargetrequest"></a>

```json
{
  "WindowId": {},
  "WindowTargetId": {},
  "Targets": {},
  "OwnerInformation": {},
  "Name": {},
  "Description": {},
  "Replace": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|true|none|none|
|WindowTargetId|object|true|none|none|
|Targets|object|false|none|none|
|OwnerInformation|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Replace|object|false|none|none|

<h2 id="tocS_UpdateMaintenanceWindowTaskResult">UpdateMaintenanceWindowTaskResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemaintenancewindowtaskresult"></a>
<a id="schema_UpdateMaintenanceWindowTaskResult"></a>
<a id="tocSupdatemaintenancewindowtaskresult"></a>
<a id="tocsupdatemaintenancewindowtaskresult"></a>

```json
{
  "WindowId": {},
  "WindowTaskId": {},
  "Targets": {},
  "TaskArn": {},
  "ServiceRoleArn": {},
  "TaskParameters": {
    "property1": {
      "Values": {}
    },
    "property2": {
      "Values": {}
    }
  },
  "TaskInvocationParameters": {
    "RunCommand": {
      "Comment": {},
      "CloudWatchOutputConfig": {
        "CloudWatchLogGroupName": {},
        "CloudWatchOutputEnabled": {}
      },
      "DocumentHash": {},
      "DocumentHashType": {},
      "DocumentVersion": {},
      "NotificationConfig": {
        "NotificationArn": {},
        "NotificationEvents": {},
        "NotificationType": {}
      },
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "ServiceRoleArn": {},
      "TimeoutSeconds": {}
    },
    "Automation": {
      "DocumentVersion": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "StepFunctions": {
      "Input": {},
      "Name": {}
    },
    "Lambda": {
      "ClientContext": {},
      "Qualifier": {},
      "Payload": {}
    }
  },
  "Priority": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "LoggingInfo": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "S3Region": {}
  },
  "Name": {},
  "Description": {},
  "CutoffBehavior": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|WindowTaskId|object|false|none|none|
|Targets|object|false|none|none|
|TaskArn|object|false|none|none|
|ServiceRoleArn|object|false|none|none|
|TaskParameters|object|false|none|none|
|TaskInvocationParameters|object|false|none|none|
|Priority|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|MaxErrors|object|false|none|none|
|LoggingInfo|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|CutoffBehavior|object|false|none|none|
|AlarmConfiguration|object|false|none|none|

<h2 id="tocS_UpdateMaintenanceWindowTaskRequest">UpdateMaintenanceWindowTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemaintenancewindowtaskrequest"></a>
<a id="schema_UpdateMaintenanceWindowTaskRequest"></a>
<a id="tocSupdatemaintenancewindowtaskrequest"></a>
<a id="tocsupdatemaintenancewindowtaskrequest"></a>

```json
{
  "WindowId": {},
  "WindowTaskId": {},
  "Targets": {},
  "TaskArn": {},
  "ServiceRoleArn": {},
  "TaskParameters": {
    "property1": {
      "Values": {}
    },
    "property2": {
      "Values": {}
    }
  },
  "TaskInvocationParameters": {
    "RunCommand": {
      "Comment": {},
      "CloudWatchOutputConfig": {
        "CloudWatchLogGroupName": {},
        "CloudWatchOutputEnabled": {}
      },
      "DocumentHash": {},
      "DocumentHashType": {},
      "DocumentVersion": {},
      "NotificationConfig": {
        "NotificationArn": {},
        "NotificationEvents": {},
        "NotificationType": {}
      },
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "ServiceRoleArn": {},
      "TimeoutSeconds": {}
    },
    "Automation": {
      "DocumentVersion": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "StepFunctions": {
      "Input": {},
      "Name": {}
    },
    "Lambda": {
      "ClientContext": {},
      "Qualifier": {},
      "Payload": {}
    }
  },
  "Priority": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "LoggingInfo": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "S3Region": {}
  },
  "Name": {},
  "Description": {},
  "Replace": {},
  "CutoffBehavior": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|true|none|none|
|WindowTaskId|object|true|none|none|
|Targets|object|false|none|none|
|TaskArn|object|false|none|none|
|ServiceRoleArn|object|false|none|none|
|TaskParameters|object|false|none|none|
|TaskInvocationParameters|object|false|none|none|
|Priority|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|MaxErrors|object|false|none|none|
|LoggingInfo|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Replace|object|false|none|none|
|CutoffBehavior|object|false|none|none|
|AlarmConfiguration|object|false|none|none|

<h2 id="tocS_UpdateManagedInstanceRoleResult">UpdateManagedInstanceRoleResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemanagedinstanceroleresult"></a>
<a id="schema_UpdateManagedInstanceRoleResult"></a>
<a id="tocSupdatemanagedinstanceroleresult"></a>
<a id="tocsupdatemanagedinstanceroleresult"></a>

```json
{}
```

<h2 id="tocS_UpdateManagedInstanceRoleRequest">UpdateManagedInstanceRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemanagedinstancerolerequest"></a>
<a id="schema_UpdateManagedInstanceRoleRequest"></a>
<a id="tocSupdatemanagedinstancerolerequest"></a>
<a id="tocsupdatemanagedinstancerolerequest"></a>

```json
{
  "InstanceId": {},
  "IamRole": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|IamRole|object|true|none|none|

<h2 id="tocS_UpdateOpsItemResponse">UpdateOpsItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateopsitemresponse"></a>
<a id="schema_UpdateOpsItemResponse"></a>
<a id="tocSupdateopsitemresponse"></a>
<a id="tocsupdateopsitemresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateOpsItemRequest">UpdateOpsItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateopsitemrequest"></a>
<a id="schema_UpdateOpsItemRequest"></a>
<a id="tocSupdateopsitemrequest"></a>
<a id="tocsupdateopsitemrequest"></a>

```json
{
  "Description": {},
  "OperationalData": {
    "property1": {
      "Value": {},
      "Type": {}
    },
    "property2": {
      "Value": {},
      "Type": {}
    }
  },
  "OperationalDataToDelete": {},
  "Notifications": {},
  "Priority": {},
  "RelatedOpsItems": {},
  "Status": {},
  "OpsItemId": {},
  "Title": {},
  "Category": {},
  "Severity": {},
  "ActualStartTime": {},
  "ActualEndTime": {},
  "PlannedStartTime": {},
  "PlannedEndTime": {},
  "OpsItemArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|OperationalData|object|false|none|none|
|OperationalDataToDelete|object|false|none|none|
|Notifications|object|false|none|none|
|Priority|object|false|none|none|
|RelatedOpsItems|object|false|none|none|
|Status|object|false|none|none|
|OpsItemId|object|true|none|none|
|Title|object|false|none|none|
|Category|object|false|none|none|
|Severity|object|false|none|none|
|ActualStartTime|object|false|none|none|
|ActualEndTime|object|false|none|none|
|PlannedStartTime|object|false|none|none|
|PlannedEndTime|object|false|none|none|
|OpsItemArn|object|false|none|none|

<h2 id="tocS_UpdateOpsMetadataResult">UpdateOpsMetadataResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateopsmetadataresult"></a>
<a id="schema_UpdateOpsMetadataResult"></a>
<a id="tocSupdateopsmetadataresult"></a>
<a id="tocsupdateopsmetadataresult"></a>

```json
{
  "OpsMetadataArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsMetadataArn|object|false|none|none|

<h2 id="tocS_UpdateOpsMetadataRequest">UpdateOpsMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateopsmetadatarequest"></a>
<a id="schema_UpdateOpsMetadataRequest"></a>
<a id="tocSupdateopsmetadatarequest"></a>
<a id="tocsupdateopsmetadatarequest"></a>

```json
{
  "OpsMetadataArn": {},
  "MetadataToUpdate": {
    "property1": {
      "Value": {}
    },
    "property2": {
      "Value": {}
    }
  },
  "KeysToDelete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsMetadataArn|object|true|none|none|
|MetadataToUpdate|object|false|none|none|
|KeysToDelete|object|false|none|none|

<h2 id="tocS_OpsMetadataKeyLimitExceededException">OpsMetadataKeyLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadatakeylimitexceededexception"></a>
<a id="schema_OpsMetadataKeyLimitExceededException"></a>
<a id="tocSopsmetadatakeylimitexceededexception"></a>
<a id="tocsopsmetadatakeylimitexceededexception"></a>

```json
null
```

<h2 id="tocS_UpdatePatchBaselineResult">UpdatePatchBaselineResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepatchbaselineresult"></a>
<a id="schema_UpdatePatchBaselineResult"></a>
<a id="tocSupdatepatchbaselineresult"></a>
<a id="tocsupdatepatchbaselineresult"></a>

```json
{
  "BaselineId": {},
  "Name": {},
  "OperatingSystem": {},
  "GlobalFilters": {
    "PatchFilters": {}
  },
  "ApprovalRules": {
    "PatchRules": {}
  },
  "ApprovedPatches": {},
  "ApprovedPatchesComplianceLevel": {},
  "ApprovedPatchesEnableNonSecurity": {},
  "RejectedPatches": {},
  "RejectedPatchesAction": {},
  "CreatedDate": {},
  "ModifiedDate": {},
  "Description": {},
  "Sources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|false|none|none|
|Name|object|false|none|none|
|OperatingSystem|object|false|none|none|
|GlobalFilters|object|false|none|none|
|ApprovalRules|object|false|none|none|
|ApprovedPatches|object|false|none|none|
|ApprovedPatchesComplianceLevel|object|false|none|none|
|ApprovedPatchesEnableNonSecurity|object|false|none|none|
|RejectedPatches|object|false|none|none|
|RejectedPatchesAction|object|false|none|none|
|CreatedDate|object|false|none|none|
|ModifiedDate|object|false|none|none|
|Description|object|false|none|none|
|Sources|object|false|none|none|

<h2 id="tocS_UpdatePatchBaselineRequest">UpdatePatchBaselineRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepatchbaselinerequest"></a>
<a id="schema_UpdatePatchBaselineRequest"></a>
<a id="tocSupdatepatchbaselinerequest"></a>
<a id="tocsupdatepatchbaselinerequest"></a>

```json
{
  "BaselineId": {},
  "Name": {},
  "GlobalFilters": {
    "PatchFilters": {}
  },
  "ApprovalRules": {
    "PatchRules": {}
  },
  "ApprovedPatches": {},
  "ApprovedPatchesComplianceLevel": {},
  "ApprovedPatchesEnableNonSecurity": {},
  "RejectedPatches": {},
  "RejectedPatchesAction": {},
  "Description": {},
  "Sources": {},
  "Replace": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|true|none|none|
|Name|object|false|none|none|
|GlobalFilters|object|false|none|none|
|ApprovalRules|object|false|none|none|
|ApprovedPatches|object|false|none|none|
|ApprovedPatchesComplianceLevel|object|false|none|none|
|ApprovedPatchesEnableNonSecurity|object|false|none|none|
|RejectedPatches|object|false|none|none|
|RejectedPatchesAction|object|false|none|none|
|Description|object|false|none|none|
|Sources|object|false|none|none|
|Replace|object|false|none|none|

<h2 id="tocS_UpdateResourceDataSyncResult">UpdateResourceDataSyncResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcedatasyncresult"></a>
<a id="schema_UpdateResourceDataSyncResult"></a>
<a id="tocSupdateresourcedatasyncresult"></a>
<a id="tocsupdateresourcedatasyncresult"></a>

```json
{}
```

<h2 id="tocS_UpdateResourceDataSyncRequest">UpdateResourceDataSyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcedatasyncrequest"></a>
<a id="schema_UpdateResourceDataSyncRequest"></a>
<a id="tocSupdateresourcedatasyncrequest"></a>
<a id="tocsupdateresourcedatasyncrequest"></a>

```json
{
  "SyncName": {},
  "SyncType": {},
  "SyncSource": {
    "SourceType": {},
    "AwsOrganizationsSource": {
      "OrganizationSourceType": {},
      "OrganizationalUnits": {}
    },
    "SourceRegions": {},
    "IncludeFutureRegions": {},
    "EnableAllOpsDataSources": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SyncName|object|true|none|none|
|SyncType|object|true|none|none|
|SyncSource|object|true|none|none|

<h2 id="tocS_ResourceDataSyncConflictException">ResourceDataSyncConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncconflictexception"></a>
<a id="schema_ResourceDataSyncConflictException"></a>
<a id="tocSresourcedatasyncconflictexception"></a>
<a id="tocsresourcedatasyncconflictexception"></a>

```json
null
```

<h2 id="tocS_UpdateServiceSettingResult">UpdateServiceSettingResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicesettingresult"></a>
<a id="schema_UpdateServiceSettingResult"></a>
<a id="tocSupdateservicesettingresult"></a>
<a id="tocsupdateservicesettingresult"></a>

```json
{}
```

The result body of the UpdateServiceSetting API operation.

<h2 id="tocS_UpdateServiceSettingRequest">UpdateServiceSettingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicesettingrequest"></a>
<a id="schema_UpdateServiceSettingRequest"></a>
<a id="tocSupdateservicesettingrequest"></a>
<a id="tocsupdateservicesettingrequest"></a>

```json
{
  "SettingId": {},
  "SettingValue": {}
}
```

The request body of the UpdateServiceSetting API operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SettingId|object|true|none|none|
|SettingValue|object|true|none|none|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
"string"
```

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_AccountIdList">AccountIdList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountidlist"></a>
<a id="schema_AccountIdList"></a>
<a id="tocSaccountidlist"></a>
<a id="tocsaccountidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SharedDocumentVersion">SharedDocumentVersion</h2>
<!-- backwards compatibility -->
<a id="schemashareddocumentversion"></a>
<a id="schema_SharedDocumentVersion"></a>
<a id="tocSshareddocumentversion"></a>
<a id="tocsshareddocumentversion"></a>

```json
"string"
```

The document version shared with other Amazon Web Services accounts. You can share <code>Latest</code>, <code>Default</code> or <code>All versions</code>.

<h2 id="tocS_AccountSharingInfo">AccountSharingInfo</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsharinginfo"></a>
<a id="schema_AccountSharingInfo"></a>
<a id="tocSaccountsharinginfo"></a>
<a id="tocsaccountsharinginfo"></a>

```json
{
  "AccountId": {},
  "SharedDocumentVersion": {}
}
```

Information includes the Amazon Web Services account ID where the current document is shared and the version shared with that account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|SharedDocumentVersion|object|false|none|none|

<h2 id="tocS_AccountSharingInfoList">AccountSharingInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsharinginfolist"></a>
<a id="schema_AccountSharingInfoList"></a>
<a id="tocSaccountsharinginfolist"></a>
<a id="tocsaccountsharinginfolist"></a>

```json
[
  {
    "AccountId": {},
    "SharedDocumentVersion": {}
  }
]
```

A list of Amazon Web Services accounts where the current document is shared and the version shared with each account.

<h2 id="tocS_Accounts">Accounts</h2>
<!-- backwards compatibility -->
<a id="schemaaccounts"></a>
<a id="schema_Accounts"></a>
<a id="tocSaccounts"></a>
<a id="tocsaccounts"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ActivationId">ActivationId</h2>
<!-- backwards compatibility -->
<a id="schemaactivationid"></a>
<a id="schema_ActivationId"></a>
<a id="tocSactivationid"></a>
<a id="tocsactivationid"></a>

```json
"string"
```

<h2 id="tocS_ActivationDescription">ActivationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaactivationdescription"></a>
<a id="schema_ActivationDescription"></a>
<a id="tocSactivationdescription"></a>
<a id="tocsactivationdescription"></a>

```json
"string"
```

<h2 id="tocS_DefaultInstanceName">DefaultInstanceName</h2>
<!-- backwards compatibility -->
<a id="schemadefaultinstancename"></a>
<a id="schema_DefaultInstanceName"></a>
<a id="tocSdefaultinstancename"></a>
<a id="tocsdefaultinstancename"></a>

```json
"string"
```

<h2 id="tocS_IamRole">IamRole</h2>
<!-- backwards compatibility -->
<a id="schemaiamrole"></a>
<a id="schema_IamRole"></a>
<a id="tocSiamrole"></a>
<a id="tocsiamrole"></a>

```json
"string"
```

<h2 id="tocS_RegistrationLimit">RegistrationLimit</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationlimit"></a>
<a id="schema_RegistrationLimit"></a>
<a id="tocSregistrationlimit"></a>
<a id="tocsregistrationlimit"></a>

```json
1
```

<h2 id="tocS_RegistrationsCount">RegistrationsCount</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationscount"></a>
<a id="schema_RegistrationsCount"></a>
<a id="tocSregistrationscount"></a>
<a id="tocsregistrationscount"></a>

```json
1
```

<h2 id="tocS_ExpirationDate">ExpirationDate</h2>
<!-- backwards compatibility -->
<a id="schemaexpirationdate"></a>
<a id="schema_ExpirationDate"></a>
<a id="tocSexpirationdate"></a>
<a id="tocsexpirationdate"></a>

```json
"1970-01-01T00:00:00Z"
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

<h2 id="tocS_CreatedDate">CreatedDate</h2>
<!-- backwards compatibility -->
<a id="schemacreateddate"></a>
<a id="schema_CreatedDate"></a>
<a id="tocScreateddate"></a>
<a id="tocscreateddate"></a>

```json
"1970-01-01T00:00:00Z"
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

<h2 id="tocS_Activation">Activation</h2>
<!-- backwards compatibility -->
<a id="schemaactivation"></a>
<a id="schema_Activation"></a>
<a id="tocSactivation"></a>
<a id="tocsactivation"></a>

```json
{
  "ActivationId": {},
  "Description": {},
  "DefaultInstanceName": {},
  "IamRole": {},
  "RegistrationLimit": {},
  "RegistrationsCount": {},
  "ExpirationDate": {},
  "Expired": {},
  "CreatedDate": {},
  "Tags": {}
}
```

An activation registers one or more on-premises servers or virtual machines (VMs) with Amazon Web Services so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with Amazon Web Services Systems Manager is called a managed node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivationId|object|false|none|none|
|Description|object|false|none|none|
|DefaultInstanceName|object|false|none|none|
|IamRole|object|false|none|none|
|RegistrationLimit|object|false|none|none|
|RegistrationsCount|object|false|none|none|
|ExpirationDate|object|false|none|none|
|Expired|object|false|none|none|
|CreatedDate|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ActivationCode">ActivationCode</h2>
<!-- backwards compatibility -->
<a id="schemaactivationcode"></a>
<a id="schema_ActivationCode"></a>
<a id="tocSactivationcode"></a>
<a id="tocsactivationcode"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ActivationList">ActivationList</h2>
<!-- backwards compatibility -->
<a id="schemaactivationlist"></a>
<a id="schema_ActivationList"></a>
<a id="tocSactivationlist"></a>
<a id="tocsactivationlist"></a>

```json
[
  {
    "ActivationId": {},
    "Description": {},
    "DefaultInstanceName": {},
    "IamRole": {},
    "RegistrationLimit": {},
    "RegistrationsCount": {},
    "ExpirationDate": {},
    "Expired": {},
    "CreatedDate": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_ResourceTypeForTagging">ResourceTypeForTagging</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypefortagging"></a>
<a id="schema_ResourceTypeForTagging"></a>
<a id="tocSresourcetypefortagging"></a>
<a id="tocsresourcetypefortagging"></a>

```json
"Document"
```

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"string"
```

<h2 id="tocS_AgentErrorCode">AgentErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaagenterrorcode"></a>
<a id="schema_AgentErrorCode"></a>
<a id="tocSagenterrorcode"></a>
<a id="tocsagenterrorcode"></a>

```json
"string"
```

<h2 id="tocS_AggregatorSchemaOnly">AggregatorSchemaOnly</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatorschemaonly"></a>
<a id="schema_AggregatorSchemaOnly"></a>
<a id="tocSaggregatorschemaonly"></a>
<a id="tocsaggregatorschemaonly"></a>

```json
true
```

<h2 id="tocS_AlarmName">AlarmName</h2>
<!-- backwards compatibility -->
<a id="schemaalarmname"></a>
<a id="schema_AlarmName"></a>
<a id="tocSalarmname"></a>
<a id="tocsalarmname"></a>

```json
"string"
```

<h2 id="tocS_Alarm">Alarm</h2>
<!-- backwards compatibility -->
<a id="schemaalarm"></a>
<a id="schema_Alarm"></a>
<a id="tocSalarm"></a>
<a id="tocsalarm"></a>

```json
{
  "Name": {}
}
```

A CloudWatch alarm you apply to an automation or command.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_AlarmList">AlarmList</h2>
<!-- backwards compatibility -->
<a id="schemaalarmlist"></a>
<a id="schema_AlarmList"></a>
<a id="tocSalarmlist"></a>
<a id="tocsalarmlist"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_AlarmConfiguration">AlarmConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaalarmconfiguration"></a>
<a id="schema_AlarmConfiguration"></a>
<a id="tocSalarmconfiguration"></a>
<a id="tocsalarmconfiguration"></a>

```json
{
  "IgnorePollAlarmFailure": {},
  "Alarms": {}
}
```

The details for the CloudWatch alarm you want to apply to an automation or command.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IgnorePollAlarmFailure|object|false|none|none|
|Alarms|object|true|none|none|

<h2 id="tocS_ExternalAlarmState">ExternalAlarmState</h2>
<!-- backwards compatibility -->
<a id="schemaexternalalarmstate"></a>
<a id="schema_ExternalAlarmState"></a>
<a id="tocSexternalalarmstate"></a>
<a id="tocsexternalalarmstate"></a>

```json
"UNKNOWN"
```

<h2 id="tocS_AlarmStateInformation">AlarmStateInformation</h2>
<!-- backwards compatibility -->
<a id="schemaalarmstateinformation"></a>
<a id="schema_AlarmStateInformation"></a>
<a id="tocSalarmstateinformation"></a>
<a id="tocsalarmstateinformation"></a>

```json
{
  "Name": {},
  "State": {}
}
```

The details about the state of your CloudWatch alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|State|object|true|none|none|

<h2 id="tocS_AlarmStateInformationList">AlarmStateInformationList</h2>
<!-- backwards compatibility -->
<a id="schemaalarmstateinformationlist"></a>
<a id="schema_AlarmStateInformationList"></a>
<a id="tocSalarmstateinformationlist"></a>
<a id="tocsalarmstateinformationlist"></a>

```json
[
  {
    "Name": {},
    "State": {}
  }
]
```

<h2 id="tocS_AllowedPattern">AllowedPattern</h2>
<!-- backwards compatibility -->
<a id="schemaallowedpattern"></a>
<a id="schema_AllowedPattern"></a>
<a id="tocSallowedpattern"></a>
<a id="tocsallowedpattern"></a>

```json
"string"
```

<h2 id="tocS_ApplyOnlyAtCronInterval">ApplyOnlyAtCronInterval</h2>
<!-- backwards compatibility -->
<a id="schemaapplyonlyatcroninterval"></a>
<a id="schema_ApplyOnlyAtCronInterval"></a>
<a id="tocSapplyonlyatcroninterval"></a>
<a id="tocsapplyonlyatcroninterval"></a>

```json
true
```

<h2 id="tocS_ApproveAfterDays">ApproveAfterDays</h2>
<!-- backwards compatibility -->
<a id="schemaapproveafterdays"></a>
<a id="schema_ApproveAfterDays"></a>
<a id="tocSapproveafterdays"></a>
<a id="tocsapproveafterdays"></a>

```json
0
```

<h2 id="tocS_OpsItemId">OpsItemId</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemid"></a>
<a id="schema_OpsItemId"></a>
<a id="tocSopsitemid"></a>
<a id="tocsopsitemid"></a>

```json
"string"
```

<h2 id="tocS_OpsItemRelatedItemAssociationType">OpsItemRelatedItemAssociationType</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemassociationtype"></a>
<a id="schema_OpsItemRelatedItemAssociationType"></a>
<a id="tocSopsitemrelateditemassociationtype"></a>
<a id="tocsopsitemrelateditemassociationtype"></a>

```json
"string"
```

<h2 id="tocS_OpsItemRelatedItemAssociationResourceType">OpsItemRelatedItemAssociationResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemassociationresourcetype"></a>
<a id="schema_OpsItemRelatedItemAssociationResourceType"></a>
<a id="tocSopsitemrelateditemassociationresourcetype"></a>
<a id="tocsopsitemrelateditemassociationresourcetype"></a>

```json
"string"
```

<h2 id="tocS_OpsItemRelatedItemAssociationResourceUri">OpsItemRelatedItemAssociationResourceUri</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemassociationresourceuri"></a>
<a id="schema_OpsItemRelatedItemAssociationResourceUri"></a>
<a id="tocSopsitemrelateditemassociationresourceuri"></a>
<a id="tocsopsitemrelateditemassociationresourceuri"></a>

```json
"string"
```

<h2 id="tocS_OpsItemRelatedItemAssociationId">OpsItemRelatedItemAssociationId</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemassociationid"></a>
<a id="schema_OpsItemRelatedItemAssociationId"></a>
<a id="tocSopsitemrelateditemassociationid"></a>
<a id="tocsopsitemrelateditemassociationid"></a>

```json
"string"
```

<h2 id="tocS_DocumentARN">DocumentARN</h2>
<!-- backwards compatibility -->
<a id="schemadocumentarn"></a>
<a id="schema_DocumentARN"></a>
<a id="tocSdocumentarn"></a>
<a id="tocsdocumentarn"></a>

```json
"string"
```

<h2 id="tocS_InstanceId">InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainstanceid"></a>
<a id="schema_InstanceId"></a>
<a id="tocSinstanceid"></a>
<a id="tocsinstanceid"></a>

```json
"string"
```

<h2 id="tocS_AssociationId">AssociationId</h2>
<!-- backwards compatibility -->
<a id="schemaassociationid"></a>
<a id="schema_AssociationId"></a>
<a id="tocSassociationid"></a>
<a id="tocsassociationid"></a>

```json
"string"
```

<h2 id="tocS_AssociationVersion">AssociationVersion</h2>
<!-- backwards compatibility -->
<a id="schemaassociationversion"></a>
<a id="schema_AssociationVersion"></a>
<a id="tocSassociationversion"></a>
<a id="tocsassociationversion"></a>

```json
"string"
```

<h2 id="tocS_DocumentVersion">DocumentVersion</h2>
<!-- backwards compatibility -->
<a id="schemadocumentversion"></a>
<a id="schema_DocumentVersion"></a>
<a id="tocSdocumentversion"></a>
<a id="tocsdocumentversion"></a>

```json
"string"
```

<h2 id="tocS_Targets">Targets</h2>
<!-- backwards compatibility -->
<a id="schematargets"></a>
<a id="schema_Targets"></a>
<a id="tocStargets"></a>
<a id="tocstargets"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
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

<h2 id="tocS_AssociationOverview">AssociationOverview</h2>
<!-- backwards compatibility -->
<a id="schemaassociationoverview"></a>
<a id="schema_AssociationOverview"></a>
<a id="tocSassociationoverview"></a>
<a id="tocsassociationoverview"></a>

```json
{
  "Status": {},
  "DetailedStatus": {},
  "AssociationStatusAggregatedCount": {
    "property1": 0,
    "property2": 0
  }
}
```

Information about the association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|DetailedStatus|object|false|none|none|
|AssociationStatusAggregatedCount|object|false|none|none|

<h2 id="tocS_ScheduleExpression">ScheduleExpression</h2>
<!-- backwards compatibility -->
<a id="schemascheduleexpression"></a>
<a id="schema_ScheduleExpression"></a>
<a id="tocSscheduleexpression"></a>
<a id="tocsscheduleexpression"></a>

```json
"string"
```

<h2 id="tocS_AssociationName">AssociationName</h2>
<!-- backwards compatibility -->
<a id="schemaassociationname"></a>
<a id="schema_AssociationName"></a>
<a id="tocSassociationname"></a>
<a id="tocsassociationname"></a>

```json
"string"
```

<h2 id="tocS_ScheduleOffset">ScheduleOffset</h2>
<!-- backwards compatibility -->
<a id="schemascheduleoffset"></a>
<a id="schema_ScheduleOffset"></a>
<a id="tocSscheduleoffset"></a>
<a id="tocsscheduleoffset"></a>

```json
1
```

<h2 id="tocS_TargetMaps">TargetMaps</h2>
<!-- backwards compatibility -->
<a id="schematargetmaps"></a>
<a id="schema_TargetMaps"></a>
<a id="tocStargetmaps"></a>
<a id="tocstargetmaps"></a>

```json
[
  {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
]
```

<h2 id="tocS_Association">Association</h2>
<!-- backwards compatibility -->
<a id="schemaassociation"></a>
<a id="schema_Association"></a>
<a id="tocSassociation"></a>
<a id="tocsassociation"></a>

```json
{
  "Name": {},
  "InstanceId": {},
  "AssociationId": {},
  "AssociationVersion": {},
  "DocumentVersion": {},
  "Targets": {},
  "LastExecutionDate": {},
  "Overview": {
    "Status": {},
    "DetailedStatus": {},
    "AssociationStatusAggregatedCount": {
      "property1": 0,
      "property2": 0
    }
  },
  "ScheduleExpression": {},
  "AssociationName": {},
  "ScheduleOffset": {},
  "TargetMaps": {}
}
```

Describes an association of a Amazon Web Services Systems Manager document (SSM document) and a managed node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|InstanceId|object|false|none|none|
|AssociationId|object|false|none|none|
|AssociationVersion|object|false|none|none|
|DocumentVersion|object|false|none|none|
|Targets|object|false|none|none|
|LastExecutionDate|object|false|none|none|
|Overview|object|false|none|none|
|ScheduleExpression|object|false|none|none|
|AssociationName|object|false|none|none|
|ScheduleOffset|object|false|none|none|
|TargetMaps|object|false|none|none|

<h2 id="tocS_AssociationComplianceSeverity">AssociationComplianceSeverity</h2>
<!-- backwards compatibility -->
<a id="schemaassociationcomplianceseverity"></a>
<a id="schema_AssociationComplianceSeverity"></a>
<a id="tocSassociationcomplianceseverity"></a>
<a id="tocsassociationcomplianceseverity"></a>

```json
"CRITICAL"
```

<h2 id="tocS_AssociationStatus">AssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaassociationstatus"></a>
<a id="schema_AssociationStatus"></a>
<a id="tocSassociationstatus"></a>
<a id="tocsassociationstatus"></a>

```json
{
  "Date": {},
  "Name": {},
  "Message": {},
  "AdditionalInfo": {}
}
```

Describes an association status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|object|true|none|none|
|Name|object|true|none|none|
|Message|object|true|none|none|
|AdditionalInfo|object|false|none|none|

<h2 id="tocS_AutomationTargetParameterName">AutomationTargetParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaautomationtargetparametername"></a>
<a id="schema_AutomationTargetParameterName"></a>
<a id="tocSautomationtargetparametername"></a>
<a id="tocsautomationtargetparametername"></a>

```json
"string"
```

<h2 id="tocS_Parameters">Parameters</h2>
<!-- backwards compatibility -->
<a id="schemaparameters"></a>
<a id="schema_Parameters"></a>
<a id="tocSparameters"></a>
<a id="tocsparameters"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ParameterValueList](#schemaparametervaluelist)|false|none|none|

<h2 id="tocS_InstanceAssociationOutputLocation">InstanceAssociationOutputLocation</h2>
<!-- backwards compatibility -->
<a id="schemainstanceassociationoutputlocation"></a>
<a id="schema_InstanceAssociationOutputLocation"></a>
<a id="tocSinstanceassociationoutputlocation"></a>
<a id="tocsinstanceassociationoutputlocation"></a>

```json
{
  "S3Location": {
    "OutputS3Region": {},
    "OutputS3BucketName": {},
    "OutputS3KeyPrefix": {}
  }
}
```

<p>An S3 bucket where you want to store the results of this request.</p> <p>For the minimal permissions required to enable Amazon S3 output for an association, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-state-assoc.html">Creating associations</a> in the <i>Systems Manager User Guide</i>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Location|object|false|none|none|

<h2 id="tocS_MaxErrors">MaxErrors</h2>
<!-- backwards compatibility -->
<a id="schemamaxerrors"></a>
<a id="schema_MaxErrors"></a>
<a id="tocSmaxerrors"></a>
<a id="tocsmaxerrors"></a>

```json
"string"
```

<h2 id="tocS_MaxConcurrency">MaxConcurrency</h2>
<!-- backwards compatibility -->
<a id="schemamaxconcurrency"></a>
<a id="schema_MaxConcurrency"></a>
<a id="tocSmaxconcurrency"></a>
<a id="tocsmaxconcurrency"></a>

```json
"string"
```

<h2 id="tocS_AssociationSyncCompliance">AssociationSyncCompliance</h2>
<!-- backwards compatibility -->
<a id="schemaassociationsynccompliance"></a>
<a id="schema_AssociationSyncCompliance"></a>
<a id="tocSassociationsynccompliance"></a>
<a id="tocsassociationsynccompliance"></a>

```json
"AUTO"
```

<h2 id="tocS_CalendarNameOrARNList">CalendarNameOrARNList</h2>
<!-- backwards compatibility -->
<a id="schemacalendarnameorarnlist"></a>
<a id="schema_CalendarNameOrARNList"></a>
<a id="tocScalendarnameorarnlist"></a>
<a id="tocscalendarnameorarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TargetLocations">TargetLocations</h2>
<!-- backwards compatibility -->
<a id="schematargetlocations"></a>
<a id="schema_TargetLocations"></a>
<a id="tocStargetlocations"></a>
<a id="tocstargetlocations"></a>

```json
[
  {
    "Accounts": {},
    "Regions": {},
    "TargetLocationMaxConcurrency": {},
    "TargetLocationMaxErrors": {},
    "ExecutionRoleName": {},
    "TargetLocationAlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    }
  }
]
```

<h2 id="tocS_AssociationDescription">AssociationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaassociationdescription"></a>
<a id="schema_AssociationDescription"></a>
<a id="tocSassociationdescription"></a>
<a id="tocsassociationdescription"></a>

```json
{
  "Name": {},
  "InstanceId": {},
  "AssociationVersion": {},
  "Date": {},
  "LastUpdateAssociationDate": {},
  "Status": {
    "Date": {},
    "Name": {},
    "Message": {},
    "AdditionalInfo": {}
  },
  "Overview": {
    "Status": {},
    "DetailedStatus": {},
    "AssociationStatusAggregatedCount": {
      "property1": 0,
      "property2": 0
    }
  },
  "DocumentVersion": {},
  "AutomationTargetParameterName": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "AssociationId": {},
  "Targets": {},
  "ScheduleExpression": {},
  "OutputLocation": {
    "S3Location": {
      "OutputS3Region": {},
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {}
    }
  },
  "LastExecutionDate": {},
  "LastSuccessfulExecutionDate": {},
  "AssociationName": {},
  "MaxErrors": {},
  "MaxConcurrency": {},
  "ComplianceSeverity": {},
  "SyncCompliance": {},
  "ApplyOnlyAtCronInterval": {},
  "CalendarNames": {},
  "TargetLocations": {},
  "ScheduleOffset": {},
  "TargetMaps": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  },
  "TriggeredAlarms": {}
}
```

Describes the parameters for a document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|InstanceId|object|false|none|none|
|AssociationVersion|object|false|none|none|
|Date|object|false|none|none|
|LastUpdateAssociationDate|object|false|none|none|
|Status|object|false|none|none|
|Overview|object|false|none|none|
|DocumentVersion|object|false|none|none|
|AutomationTargetParameterName|object|false|none|none|
|Parameters|object|false|none|none|
|AssociationId|object|false|none|none|
|Targets|object|false|none|none|
|ScheduleExpression|object|false|none|none|
|OutputLocation|object|false|none|none|
|LastExecutionDate|object|false|none|none|
|LastSuccessfulExecutionDate|object|false|none|none|
|AssociationName|object|false|none|none|
|MaxErrors|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|ComplianceSeverity|object|false|none|none|
|SyncCompliance|object|false|none|none|
|ApplyOnlyAtCronInterval|object|false|none|none|
|CalendarNames|object|false|none|none|
|TargetLocations|object|false|none|none|
|ScheduleOffset|object|false|none|none|
|TargetMaps|object|false|none|none|
|AlarmConfiguration|[AlarmConfiguration](#schemaalarmconfiguration)|false|none|The details for the CloudWatch alarm you want to apply to an automation or command.|
|TriggeredAlarms|object|false|none|none|

<h2 id="tocS_AssociationDescriptionList">AssociationDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemaassociationdescriptionlist"></a>
<a id="schema_AssociationDescriptionList"></a>
<a id="tocSassociationdescriptionlist"></a>
<a id="tocsassociationdescriptionlist"></a>

```json
[
  {
    "Name": {},
    "InstanceId": {},
    "AssociationVersion": {},
    "Date": {},
    "LastUpdateAssociationDate": {},
    "Status": {
      "Date": {},
      "Name": {},
      "Message": {},
      "AdditionalInfo": {}
    },
    "Overview": {
      "Status": {},
      "DetailedStatus": {},
      "AssociationStatusAggregatedCount": {
        "property1": 0,
        "property2": 0
      }
    },
    "DocumentVersion": {},
    "AutomationTargetParameterName": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "AssociationId": {},
    "Targets": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "LastExecutionDate": {},
    "LastSuccessfulExecutionDate": {},
    "AssociationName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
  }
]
```

<h2 id="tocS_AssociationExecutionId">AssociationExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecutionid"></a>
<a id="schema_AssociationExecutionId"></a>
<a id="tocSassociationexecutionid"></a>
<a id="tocsassociationexecutionid"></a>

```json
"string"
```

<h2 id="tocS_StatusName">StatusName</h2>
<!-- backwards compatibility -->
<a id="schemastatusname"></a>
<a id="schema_StatusName"></a>
<a id="tocSstatusname"></a>
<a id="tocsstatusname"></a>

```json
"string"
```

<h2 id="tocS_ResourceCountByStatus">ResourceCountByStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecountbystatus"></a>
<a id="schema_ResourceCountByStatus"></a>
<a id="tocSresourcecountbystatus"></a>
<a id="tocsresourcecountbystatus"></a>

```json
"string"
```

<h2 id="tocS_AssociationExecution">AssociationExecution</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecution"></a>
<a id="schema_AssociationExecution"></a>
<a id="tocSassociationexecution"></a>
<a id="tocsassociationexecution"></a>

```json
{
  "AssociationId": {},
  "AssociationVersion": {},
  "ExecutionId": {},
  "Status": {},
  "DetailedStatus": {},
  "CreatedTime": {},
  "LastExecutionDate": {},
  "ResourceCountByStatus": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  },
  "TriggeredAlarms": {}
}
```

Includes information about the specified association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|false|none|none|
|AssociationVersion|object|false|none|none|
|ExecutionId|object|false|none|none|
|Status|object|false|none|none|
|DetailedStatus|object|false|none|none|
|CreatedTime|object|false|none|none|
|LastExecutionDate|object|false|none|none|
|ResourceCountByStatus|object|false|none|none|
|AlarmConfiguration|[AlarmConfiguration](#schemaalarmconfiguration)|false|none|The details for the CloudWatch alarm you want to apply to an automation or command.|
|TriggeredAlarms|object|false|none|none|

<h2 id="tocS_AssociationExecutionFilterKey">AssociationExecutionFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecutionfilterkey"></a>
<a id="schema_AssociationExecutionFilterKey"></a>
<a id="tocSassociationexecutionfilterkey"></a>
<a id="tocsassociationexecutionfilterkey"></a>

```json
"ExecutionId"
```

<h2 id="tocS_AssociationExecutionFilterValue">AssociationExecutionFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecutionfiltervalue"></a>
<a id="schema_AssociationExecutionFilterValue"></a>
<a id="tocSassociationexecutionfiltervalue"></a>
<a id="tocsassociationexecutionfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_AssociationFilterOperatorType">AssociationFilterOperatorType</h2>
<!-- backwards compatibility -->
<a id="schemaassociationfilteroperatortype"></a>
<a id="schema_AssociationFilterOperatorType"></a>
<a id="tocSassociationfilteroperatortype"></a>
<a id="tocsassociationfilteroperatortype"></a>

```json
"EQUAL"
```

<h2 id="tocS_AssociationExecutionFilter">AssociationExecutionFilter</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecutionfilter"></a>
<a id="schema_AssociationExecutionFilter"></a>
<a id="tocSassociationexecutionfilter"></a>
<a id="tocsassociationexecutionfilter"></a>

```json
{
  "Key": {},
  "Value": {},
  "Type": {}
}
```

Filters used in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_AssociationExecutionFilterList">AssociationExecutionFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecutionfilterlist"></a>
<a id="schema_AssociationExecutionFilterList"></a>
<a id="tocSassociationexecutionfilterlist"></a>
<a id="tocsassociationexecutionfilterlist"></a>

```json
[
  {
    "Key": {},
    "Value": {},
    "Type": {}
  }
]
```

<h2 id="tocS_AssociationResourceId">AssociationResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaassociationresourceid"></a>
<a id="schema_AssociationResourceId"></a>
<a id="tocSassociationresourceid"></a>
<a id="tocsassociationresourceid"></a>

```json
"string"
```

<h2 id="tocS_AssociationResourceType">AssociationResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaassociationresourcetype"></a>
<a id="schema_AssociationResourceType"></a>
<a id="tocSassociationresourcetype"></a>
<a id="tocsassociationresourcetype"></a>

```json
"string"
```

<h2 id="tocS_OutputSource">OutputSource</h2>
<!-- backwards compatibility -->
<a id="schemaoutputsource"></a>
<a id="schema_OutputSource"></a>
<a id="tocSoutputsource"></a>
<a id="tocsoutputsource"></a>

```json
{
  "OutputSourceId": {},
  "OutputSourceType": {}
}
```

Information about the source where the association execution details are stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputSourceId|object|false|none|none|
|OutputSourceType|object|false|none|none|

<h2 id="tocS_AssociationExecutionTarget">AssociationExecutionTarget</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecutiontarget"></a>
<a id="schema_AssociationExecutionTarget"></a>
<a id="tocSassociationexecutiontarget"></a>
<a id="tocsassociationexecutiontarget"></a>

```json
{
  "AssociationId": {},
  "AssociationVersion": {},
  "ExecutionId": {},
  "ResourceId": {},
  "ResourceType": {},
  "Status": {},
  "DetailedStatus": {},
  "LastExecutionDate": {},
  "OutputSource": {
    "OutputSourceId": {},
    "OutputSourceType": {}
  }
}
```

Includes information about the specified association execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|false|none|none|
|AssociationVersion|object|false|none|none|
|ExecutionId|object|false|none|none|
|ResourceId|object|false|none|none|
|ResourceType|object|false|none|none|
|Status|object|false|none|none|
|DetailedStatus|object|false|none|none|
|LastExecutionDate|object|false|none|none|
|OutputSource|object|false|none|none|

<h2 id="tocS_AssociationExecutionTargetsFilterKey">AssociationExecutionTargetsFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecutiontargetsfilterkey"></a>
<a id="schema_AssociationExecutionTargetsFilterKey"></a>
<a id="tocSassociationexecutiontargetsfilterkey"></a>
<a id="tocsassociationexecutiontargetsfilterkey"></a>

```json
"Status"
```

<h2 id="tocS_AssociationExecutionTargetsFilterValue">AssociationExecutionTargetsFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecutiontargetsfiltervalue"></a>
<a id="schema_AssociationExecutionTargetsFilterValue"></a>
<a id="tocSassociationexecutiontargetsfiltervalue"></a>
<a id="tocsassociationexecutiontargetsfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_AssociationExecutionTargetsFilter">AssociationExecutionTargetsFilter</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecutiontargetsfilter"></a>
<a id="schema_AssociationExecutionTargetsFilter"></a>
<a id="tocSassociationexecutiontargetsfilter"></a>
<a id="tocsassociationexecutiontargetsfilter"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Filters for the association execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_AssociationExecutionTargetsFilterList">AssociationExecutionTargetsFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecutiontargetsfilterlist"></a>
<a id="schema_AssociationExecutionTargetsFilterList"></a>
<a id="tocSassociationexecutiontargetsfilterlist"></a>
<a id="tocsassociationexecutiontargetsfilterlist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_AssociationExecutionTargetsList">AssociationExecutionTargetsList</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecutiontargetslist"></a>
<a id="schema_AssociationExecutionTargetsList"></a>
<a id="tocSassociationexecutiontargetslist"></a>
<a id="tocsassociationexecutiontargetslist"></a>

```json
[
  {
    "AssociationId": {},
    "AssociationVersion": {},
    "ExecutionId": {},
    "ResourceId": {},
    "ResourceType": {},
    "Status": {},
    "DetailedStatus": {},
    "LastExecutionDate": {},
    "OutputSource": {
      "OutputSourceId": {},
      "OutputSourceType": {}
    }
  }
]
```

<h2 id="tocS_AssociationExecutionsList">AssociationExecutionsList</h2>
<!-- backwards compatibility -->
<a id="schemaassociationexecutionslist"></a>
<a id="schema_AssociationExecutionsList"></a>
<a id="tocSassociationexecutionslist"></a>
<a id="tocsassociationexecutionslist"></a>

```json
[
  {
    "AssociationId": {},
    "AssociationVersion": {},
    "ExecutionId": {},
    "Status": {},
    "DetailedStatus": {},
    "CreatedTime": {},
    "LastExecutionDate": {},
    "ResourceCountByStatus": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
  }
]
```

<h2 id="tocS_AssociationFilterKey">AssociationFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemaassociationfilterkey"></a>
<a id="schema_AssociationFilterKey"></a>
<a id="tocSassociationfilterkey"></a>
<a id="tocsassociationfilterkey"></a>

```json
"InstanceId"
```

<h2 id="tocS_AssociationFilterValue">AssociationFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaassociationfiltervalue"></a>
<a id="schema_AssociationFilterValue"></a>
<a id="tocSassociationfiltervalue"></a>
<a id="tocsassociationfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_AssociationFilter">AssociationFilter</h2>
<!-- backwards compatibility -->
<a id="schemaassociationfilter"></a>
<a id="schema_AssociationFilter"></a>
<a id="tocSassociationfilter"></a>
<a id="tocsassociationfilter"></a>

```json
{
  "key": {},
  "value": {}
}
```

Describes a filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_AssociationFilterList">AssociationFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaassociationfilterlist"></a>
<a id="schema_AssociationFilterList"></a>
<a id="tocSassociationfilterlist"></a>
<a id="tocsassociationfilterlist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_AssociationIdList">AssociationIdList</h2>
<!-- backwards compatibility -->
<a id="schemaassociationidlist"></a>
<a id="schema_AssociationIdList"></a>
<a id="tocSassociationidlist"></a>
<a id="tocsassociationidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AssociationList">AssociationList</h2>
<!-- backwards compatibility -->
<a id="schemaassociationlist"></a>
<a id="schema_AssociationList"></a>
<a id="tocSassociationlist"></a>
<a id="tocsassociationlist"></a>

```json
[
  {
    "Name": {},
    "InstanceId": {},
    "AssociationId": {},
    "AssociationVersion": {},
    "DocumentVersion": {},
    "Targets": {},
    "LastExecutionDate": {},
    "Overview": {
      "Status": {},
      "DetailedStatus": {},
      "AssociationStatusAggregatedCount": {
        "property1": 0,
        "property2": 0
      }
    },
    "ScheduleExpression": {},
    "AssociationName": {},
    "ScheduleOffset": {},
    "TargetMaps": {}
  }
]
```

<h2 id="tocS_AssociationStatusAggregatedCount">AssociationStatusAggregatedCount</h2>
<!-- backwards compatibility -->
<a id="schemaassociationstatusaggregatedcount"></a>
<a id="schema_AssociationStatusAggregatedCount"></a>
<a id="tocSassociationstatusaggregatedcount"></a>
<a id="tocsassociationstatusaggregatedcount"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[InstanceCount](#schemainstancecount)|false|none|none|

<h2 id="tocS_AssociationStatusName">AssociationStatusName</h2>
<!-- backwards compatibility -->
<a id="schemaassociationstatusname"></a>
<a id="schema_AssociationStatusName"></a>
<a id="tocSassociationstatusname"></a>
<a id="tocsassociationstatusname"></a>

```json
"Pending"
```

<h2 id="tocS_StatusMessage">StatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessage"></a>
<a id="schema_StatusMessage"></a>
<a id="tocSstatusmessage"></a>
<a id="tocsstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_StatusAdditionalInfo">StatusAdditionalInfo</h2>
<!-- backwards compatibility -->
<a id="schemastatusadditionalinfo"></a>
<a id="schema_StatusAdditionalInfo"></a>
<a id="tocSstatusadditionalinfo"></a>
<a id="tocsstatusadditionalinfo"></a>

```json
"string"
```

<h2 id="tocS_InstanceCount">InstanceCount</h2>
<!-- backwards compatibility -->
<a id="schemainstancecount"></a>
<a id="schema_InstanceCount"></a>
<a id="tocSinstancecount"></a>
<a id="tocsinstancecount"></a>

```json
0
```

<h2 id="tocS_AssociationVersionInfo">AssociationVersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaassociationversioninfo"></a>
<a id="schema_AssociationVersionInfo"></a>
<a id="tocSassociationversioninfo"></a>
<a id="tocsassociationversioninfo"></a>

```json
{
  "AssociationId": {},
  "AssociationVersion": {},
  "CreatedDate": {},
  "Name": {},
  "DocumentVersion": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "Targets": {},
  "ScheduleExpression": {},
  "OutputLocation": {
    "S3Location": {
      "OutputS3Region": {},
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {}
    }
  },
  "AssociationName": {},
  "MaxErrors": {},
  "MaxConcurrency": {},
  "ComplianceSeverity": {},
  "SyncCompliance": {},
  "ApplyOnlyAtCronInterval": {},
  "CalendarNames": {},
  "TargetLocations": {},
  "ScheduleOffset": {},
  "TargetMaps": {}
}
```

Information about the association version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|false|none|none|
|AssociationVersion|object|false|none|none|
|CreatedDate|object|false|none|none|
|Name|object|false|none|none|
|DocumentVersion|object|false|none|none|
|Parameters|object|false|none|none|
|Targets|object|false|none|none|
|ScheduleExpression|object|false|none|none|
|OutputLocation|object|false|none|none|
|AssociationName|object|false|none|none|
|MaxErrors|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|ComplianceSeverity|object|false|none|none|
|SyncCompliance|object|false|none|none|
|ApplyOnlyAtCronInterval|object|false|none|none|
|CalendarNames|object|false|none|none|
|TargetLocations|object|false|none|none|
|ScheduleOffset|object|false|none|none|
|TargetMaps|object|false|none|none|

<h2 id="tocS_AssociationVersionList">AssociationVersionList</h2>
<!-- backwards compatibility -->
<a id="schemaassociationversionlist"></a>
<a id="schema_AssociationVersionList"></a>
<a id="tocSassociationversionlist"></a>
<a id="tocsassociationversionlist"></a>

```json
[
  {
    "AssociationId": {},
    "AssociationVersion": {},
    "CreatedDate": {},
    "Name": {},
    "DocumentVersion": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "Targets": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "AssociationName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {}
  }
]
```

<h2 id="tocS_AttachmentName">AttachmentName</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentname"></a>
<a id="schema_AttachmentName"></a>
<a id="tocSattachmentname"></a>
<a id="tocsattachmentname"></a>

```json
"string"
```

<h2 id="tocS_ContentLength">ContentLength</h2>
<!-- backwards compatibility -->
<a id="schemacontentlength"></a>
<a id="schema_ContentLength"></a>
<a id="tocScontentlength"></a>
<a id="tocscontentlength"></a>

```json
0
```

<h2 id="tocS_AttachmentHash">AttachmentHash</h2>
<!-- backwards compatibility -->
<a id="schemaattachmenthash"></a>
<a id="schema_AttachmentHash"></a>
<a id="tocSattachmenthash"></a>
<a id="tocsattachmenthash"></a>

```json
"string"
```

<h2 id="tocS_AttachmentHashType">AttachmentHashType</h2>
<!-- backwards compatibility -->
<a id="schemaattachmenthashtype"></a>
<a id="schema_AttachmentHashType"></a>
<a id="tocSattachmenthashtype"></a>
<a id="tocsattachmenthashtype"></a>

```json
"Sha256"
```

<h2 id="tocS_AttachmentUrl">AttachmentUrl</h2>
<!-- backwards compatibility -->
<a id="schemaattachmenturl"></a>
<a id="schema_AttachmentUrl"></a>
<a id="tocSattachmenturl"></a>
<a id="tocsattachmenturl"></a>

```json
"string"
```

<h2 id="tocS_AttachmentContent">AttachmentContent</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentcontent"></a>
<a id="schema_AttachmentContent"></a>
<a id="tocSattachmentcontent"></a>
<a id="tocsattachmentcontent"></a>

```json
{
  "Name": {},
  "Size": {},
  "Hash": {},
  "HashType": {},
  "Url": {}
}
```

A structure that includes attributes that describe a document attachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Size|object|false|none|none|
|Hash|object|false|none|none|
|HashType|object|false|none|none|
|Url|object|false|none|none|

<h2 id="tocS_AttachmentContentList">AttachmentContentList</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentcontentlist"></a>
<a id="schema_AttachmentContentList"></a>
<a id="tocSattachmentcontentlist"></a>
<a id="tocsattachmentcontentlist"></a>

```json
[
  {
    "Name": {},
    "Size": {},
    "Hash": {},
    "HashType": {},
    "Url": {}
  }
]
```

<h2 id="tocS_AttachmentIdentifier">AttachmentIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentidentifier"></a>
<a id="schema_AttachmentIdentifier"></a>
<a id="tocSattachmentidentifier"></a>
<a id="tocsattachmentidentifier"></a>

```json
"string"
```

<h2 id="tocS_AttachmentInformation">AttachmentInformation</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentinformation"></a>
<a id="schema_AttachmentInformation"></a>
<a id="tocSattachmentinformation"></a>
<a id="tocsattachmentinformation"></a>

```json
{
  "Name": {}
}
```

An attribute of an attachment, such as the attachment name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_AttachmentInformationList">AttachmentInformationList</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentinformationlist"></a>
<a id="schema_AttachmentInformationList"></a>
<a id="tocSattachmentinformationlist"></a>
<a id="tocsattachmentinformationlist"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_AttachmentsSourceKey">AttachmentsSourceKey</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentssourcekey"></a>
<a id="schema_AttachmentsSourceKey"></a>
<a id="tocSattachmentssourcekey"></a>
<a id="tocsattachmentssourcekey"></a>

```json
"SourceUrl"
```

<h2 id="tocS_AttachmentsSourceValues">AttachmentsSourceValues</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentssourcevalues"></a>
<a id="schema_AttachmentsSourceValues"></a>
<a id="tocSattachmentssourcevalues"></a>
<a id="tocsattachmentssourcevalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AttachmentsSource">AttachmentsSource</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentssource"></a>
<a id="schema_AttachmentsSource"></a>
<a id="tocSattachmentssource"></a>
<a id="tocsattachmentssource"></a>

```json
{
  "Key": {},
  "Values": {},
  "Name": {}
}
```

Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_AttachmentsSourceList">AttachmentsSourceList</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentssourcelist"></a>
<a id="schema_AttachmentsSourceList"></a>
<a id="tocSattachmentssourcelist"></a>
<a id="tocsattachmentssourcelist"></a>

```json
[
  {
    "Key": {},
    "Values": {},
    "Name": {}
  }
]
```

<h2 id="tocS_AttachmentsSourceValue">AttachmentsSourceValue</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentssourcevalue"></a>
<a id="schema_AttachmentsSourceValue"></a>
<a id="tocSattachmentssourcevalue"></a>
<a id="tocsattachmentssourcevalue"></a>

```json
"string"
```

<h2 id="tocS_AttributeName">AttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaattributename"></a>
<a id="schema_AttributeName"></a>
<a id="tocSattributename"></a>
<a id="tocsattributename"></a>

```json
"string"
```

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
"string"
```

<h2 id="tocS_AutomationActionName">AutomationActionName</h2>
<!-- backwards compatibility -->
<a id="schemaautomationactionname"></a>
<a id="schema_AutomationActionName"></a>
<a id="tocSautomationactionname"></a>
<a id="tocsautomationactionname"></a>

```json
"string"
```

<h2 id="tocS_AutomationExecutionId">AutomationExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutionid"></a>
<a id="schema_AutomationExecutionId"></a>
<a id="tocSautomationexecutionid"></a>
<a id="tocsautomationexecutionid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_DocumentName">DocumentName</h2>
<!-- backwards compatibility -->
<a id="schemadocumentname"></a>
<a id="schema_DocumentName"></a>
<a id="tocSdocumentname"></a>
<a id="tocsdocumentname"></a>

```json
"string"
```

<h2 id="tocS_AutomationExecutionStatus">AutomationExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutionstatus"></a>
<a id="schema_AutomationExecutionStatus"></a>
<a id="tocSautomationexecutionstatus"></a>
<a id="tocsautomationexecutionstatus"></a>

```json
"Pending"
```

<h2 id="tocS_StepExecutionList">StepExecutionList</h2>
<!-- backwards compatibility -->
<a id="schemastepexecutionlist"></a>
<a id="schema_StepExecutionList"></a>
<a id="tocSstepexecutionlist"></a>
<a id="tocsstepexecutionlist"></a>

```json
[
  {
    "StepName": {},
    "Action": {},
    "TimeoutSeconds": {},
    "OnFailure": {},
    "MaxAttempts": {},
    "ExecutionStartTime": {},
    "ExecutionEndTime": {},
    "StepStatus": {},
    "ResponseCode": {},
    "Inputs": {
      "property1": "string",
      "property2": "string"
    },
    "Outputs": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "Response": {},
    "FailureMessage": {},
    "FailureDetails": {
      "FailureStage": {},
      "FailureType": {},
      "Details": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "StepExecutionId": {},
    "OverriddenParameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "IsEnd": {},
    "NextStep": {},
    "IsCritical": {},
    "ValidNextSteps": {},
    "Targets": {},
    "TargetLocation": {
      "Accounts": {},
      "Regions": {},
      "TargetLocationMaxConcurrency": {},
      "TargetLocationMaxErrors": {},
      "ExecutionRoleName": {},
      "TargetLocationAlarmConfiguration": {
        "IgnorePollAlarmFailure": {},
        "Alarms": {}
      }
    },
    "TriggeredAlarms": {}
  }
]
```

<h2 id="tocS_AutomationParameterMap">AutomationParameterMap</h2>
<!-- backwards compatibility -->
<a id="schemaautomationparametermap"></a>
<a id="schema_AutomationParameterMap"></a>
<a id="tocSautomationparametermap"></a>
<a id="tocsautomationparametermap"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AutomationParameterValueList](#schemaautomationparametervaluelist)|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_ExecutionMode">ExecutionMode</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionmode"></a>
<a id="schema_ExecutionMode"></a>
<a id="tocSexecutionmode"></a>
<a id="tocsexecutionmode"></a>

```json
"Auto"
```

<h2 id="tocS_AutomationParameterKey">AutomationParameterKey</h2>
<!-- backwards compatibility -->
<a id="schemaautomationparameterkey"></a>
<a id="schema_AutomationParameterKey"></a>
<a id="tocSautomationparameterkey"></a>
<a id="tocsautomationparameterkey"></a>

```json
"string"
```

<h2 id="tocS_ResolvedTargets">ResolvedTargets</h2>
<!-- backwards compatibility -->
<a id="schemaresolvedtargets"></a>
<a id="schema_ResolvedTargets"></a>
<a id="tocSresolvedtargets"></a>
<a id="tocsresolvedtargets"></a>

```json
{
  "ParameterValues": {},
  "Truncated": {}
}
```

Information about targets that resolved during the Automation execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterValues|object|false|none|none|
|Truncated|object|false|none|none|

<h2 id="tocS_ProgressCounters">ProgressCounters</h2>
<!-- backwards compatibility -->
<a id="schemaprogresscounters"></a>
<a id="schema_ProgressCounters"></a>
<a id="tocSprogresscounters"></a>
<a id="tocsprogresscounters"></a>

```json
{
  "TotalSteps": {},
  "SuccessSteps": {},
  "FailedSteps": {},
  "CancelledSteps": {},
  "TimedOutSteps": {}
}
```

An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a multi-Region and multi-account Automation execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalSteps|object|false|none|none|
|SuccessSteps|object|false|none|none|
|FailedSteps|object|false|none|none|
|CancelledSteps|object|false|none|none|
|TimedOutSteps|object|false|none|none|

<h2 id="tocS_AutomationSubtype">AutomationSubtype</h2>
<!-- backwards compatibility -->
<a id="schemaautomationsubtype"></a>
<a id="schema_AutomationSubtype"></a>
<a id="tocSautomationsubtype"></a>
<a id="tocsautomationsubtype"></a>

```json
"ChangeRequest"
```

<h2 id="tocS_Runbooks">Runbooks</h2>
<!-- backwards compatibility -->
<a id="schemarunbooks"></a>
<a id="schema_Runbooks"></a>
<a id="tocSrunbooks"></a>
<a id="tocsrunbooks"></a>

```json
[
  {
    "DocumentName": {},
    "DocumentVersion": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "TargetParameterName": {},
    "Targets": {},
    "TargetMaps": {},
    "MaxConcurrency": {},
    "MaxErrors": {},
    "TargetLocations": {}
  }
]
```

<h2 id="tocS_ChangeRequestName">ChangeRequestName</h2>
<!-- backwards compatibility -->
<a id="schemachangerequestname"></a>
<a id="schema_ChangeRequestName"></a>
<a id="tocSchangerequestname"></a>
<a id="tocschangerequestname"></a>

```json
"string"
```

<h2 id="tocS_AutomationExecution">AutomationExecution</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecution"></a>
<a id="schema_AutomationExecution"></a>
<a id="tocSautomationexecution"></a>
<a id="tocsautomationexecution"></a>

```json
{
  "AutomationExecutionId": {},
  "DocumentName": {},
  "DocumentVersion": {},
  "ExecutionStartTime": {},
  "ExecutionEndTime": {},
  "AutomationExecutionStatus": {},
  "StepExecutions": {},
  "StepExecutionsTruncated": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "Outputs": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "FailureMessage": {},
  "Mode": {},
  "ParentAutomationExecutionId": {},
  "ExecutedBy": {},
  "CurrentStepName": {},
  "CurrentAction": {},
  "TargetParameterName": {},
  "Targets": {},
  "TargetMaps": {},
  "ResolvedTargets": {
    "ParameterValues": {},
    "Truncated": {}
  },
  "MaxConcurrency": {},
  "MaxErrors": {},
  "Target": {},
  "TargetLocations": {},
  "ProgressCounters": {
    "TotalSteps": {},
    "SuccessSteps": {},
    "FailedSteps": {},
    "CancelledSteps": {},
    "TimedOutSteps": {}
  },
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  },
  "TriggeredAlarms": {},
  "AutomationSubtype": {},
  "ScheduledTime": {},
  "Runbooks": {},
  "OpsItemId": {},
  "AssociationId": {},
  "ChangeRequestName": {}
}
```

Detailed information about the current state of an individual Automation execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomationExecutionId|object|false|none|none|
|DocumentName|object|false|none|none|
|DocumentVersion|object|false|none|none|
|ExecutionStartTime|object|false|none|none|
|ExecutionEndTime|object|false|none|none|
|AutomationExecutionStatus|object|false|none|none|
|StepExecutions|object|false|none|none|
|StepExecutionsTruncated|object|false|none|none|
|Parameters|object|false|none|none|
|Outputs|object|false|none|none|
|FailureMessage|object|false|none|none|
|Mode|object|false|none|none|
|ParentAutomationExecutionId|object|false|none|none|
|ExecutedBy|object|false|none|none|
|CurrentStepName|object|false|none|none|
|CurrentAction|object|false|none|none|
|TargetParameterName|object|false|none|none|
|Targets|object|false|none|none|
|TargetMaps|object|false|none|none|
|ResolvedTargets|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|MaxErrors|object|false|none|none|
|Target|object|false|none|none|
|TargetLocations|object|false|none|none|
|ProgressCounters|object|false|none|none|
|AlarmConfiguration|object|false|none|none|
|TriggeredAlarms|object|false|none|none|
|AutomationSubtype|object|false|none|none|
|ScheduledTime|object|false|none|none|
|Runbooks|object|false|none|none|
|OpsItemId|object|false|none|none|
|AssociationId|object|false|none|none|
|ChangeRequestName|object|false|none|none|

<h2 id="tocS_AutomationExecutionFilterKey">AutomationExecutionFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutionfilterkey"></a>
<a id="schema_AutomationExecutionFilterKey"></a>
<a id="tocSautomationexecutionfilterkey"></a>
<a id="tocsautomationexecutionfilterkey"></a>

```json
"DocumentNamePrefix"
```

<h2 id="tocS_AutomationExecutionFilterValueList">AutomationExecutionFilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutionfiltervaluelist"></a>
<a id="schema_AutomationExecutionFilterValueList"></a>
<a id="tocSautomationexecutionfiltervaluelist"></a>
<a id="tocsautomationexecutionfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AutomationExecutionFilter">AutomationExecutionFilter</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutionfilter"></a>
<a id="schema_AutomationExecutionFilter"></a>
<a id="tocSautomationexecutionfilter"></a>
<a id="tocsautomationexecutionfilter"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_AutomationExecutionFilterList">AutomationExecutionFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutionfilterlist"></a>
<a id="schema_AutomationExecutionFilterList"></a>
<a id="tocSautomationexecutionfilterlist"></a>
<a id="tocsautomationexecutionfilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_AutomationExecutionFilterValue">AutomationExecutionFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutionfiltervalue"></a>
<a id="schema_AutomationExecutionFilterValue"></a>
<a id="tocSautomationexecutionfiltervalue"></a>
<a id="tocsautomationexecutionfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_AutomationType">AutomationType</h2>
<!-- backwards compatibility -->
<a id="schemaautomationtype"></a>
<a id="schema_AutomationType"></a>
<a id="tocSautomationtype"></a>
<a id="tocsautomationtype"></a>

```json
"CrossAccount"
```

<h2 id="tocS_AutomationExecutionMetadata">AutomationExecutionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutionmetadata"></a>
<a id="schema_AutomationExecutionMetadata"></a>
<a id="tocSautomationexecutionmetadata"></a>
<a id="tocsautomationexecutionmetadata"></a>

```json
{
  "AutomationExecutionId": {},
  "DocumentName": {},
  "DocumentVersion": {},
  "AutomationExecutionStatus": {},
  "ExecutionStartTime": {},
  "ExecutionEndTime": {},
  "ExecutedBy": {},
  "LogFile": {},
  "Outputs": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "Mode": {},
  "ParentAutomationExecutionId": {},
  "CurrentStepName": {},
  "CurrentAction": {},
  "FailureMessage": {},
  "TargetParameterName": {},
  "Targets": {},
  "TargetMaps": {},
  "ResolvedTargets": {
    "ParameterValues": {},
    "Truncated": {}
  },
  "MaxConcurrency": {},
  "MaxErrors": {},
  "Target": {},
  "AutomationType": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  },
  "TriggeredAlarms": {},
  "AutomationSubtype": {},
  "ScheduledTime": {},
  "Runbooks": {},
  "OpsItemId": {},
  "AssociationId": {},
  "ChangeRequestName": {}
}
```

Details about a specific Automation execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomationExecutionId|object|false|none|none|
|DocumentName|object|false|none|none|
|DocumentVersion|object|false|none|none|
|AutomationExecutionStatus|object|false|none|none|
|ExecutionStartTime|object|false|none|none|
|ExecutionEndTime|object|false|none|none|
|ExecutedBy|object|false|none|none|
|LogFile|object|false|none|none|
|Outputs|object|false|none|none|
|Mode|object|false|none|none|
|ParentAutomationExecutionId|object|false|none|none|
|CurrentStepName|object|false|none|none|
|CurrentAction|object|false|none|none|
|FailureMessage|object|false|none|none|
|TargetParameterName|object|false|none|none|
|Targets|object|false|none|none|
|TargetMaps|object|false|none|none|
|ResolvedTargets|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|MaxErrors|object|false|none|none|
|Target|object|false|none|none|
|AutomationType|object|false|none|none|
|AlarmConfiguration|object|false|none|none|
|TriggeredAlarms|object|false|none|none|
|AutomationSubtype|object|false|none|none|
|ScheduledTime|object|false|none|none|
|Runbooks|object|false|none|none|
|OpsItemId|object|false|none|none|
|AssociationId|object|false|none|none|
|ChangeRequestName|object|false|none|none|

<h2 id="tocS_AutomationExecutionMetadataList">AutomationExecutionMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutionmetadatalist"></a>
<a id="schema_AutomationExecutionMetadataList"></a>
<a id="tocSautomationexecutionmetadatalist"></a>
<a id="tocsautomationexecutionmetadatalist"></a>

```json
[
  {
    "AutomationExecutionId": {},
    "DocumentName": {},
    "DocumentVersion": {},
    "AutomationExecutionStatus": {},
    "ExecutionStartTime": {},
    "ExecutionEndTime": {},
    "ExecutedBy": {},
    "LogFile": {},
    "Outputs": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "Mode": {},
    "ParentAutomationExecutionId": {},
    "CurrentStepName": {},
    "CurrentAction": {},
    "FailureMessage": {},
    "TargetParameterName": {},
    "Targets": {},
    "TargetMaps": {},
    "ResolvedTargets": {
      "ParameterValues": {},
      "Truncated": {}
    },
    "MaxConcurrency": {},
    "MaxErrors": {},
    "Target": {},
    "AutomationType": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {},
    "AutomationSubtype": {},
    "ScheduledTime": {},
    "Runbooks": {},
    "OpsItemId": {},
    "AssociationId": {},
    "ChangeRequestName": {}
  }
]
```

<h2 id="tocS_AutomationParameterValueList">AutomationParameterValueList</h2>
<!-- backwards compatibility -->
<a id="schemaautomationparametervaluelist"></a>
<a id="schema_AutomationParameterValueList"></a>
<a id="tocSautomationparametervaluelist"></a>
<a id="tocsautomationparametervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AutomationParameterValue">AutomationParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaautomationparametervalue"></a>
<a id="schema_AutomationParameterValue"></a>
<a id="tocSautomationparametervalue"></a>
<a id="tocsautomationparametervalue"></a>

```json
"string"
```

<h2 id="tocS_BaselineDescription">BaselineDescription</h2>
<!-- backwards compatibility -->
<a id="schemabaselinedescription"></a>
<a id="schema_BaselineDescription"></a>
<a id="tocSbaselinedescription"></a>
<a id="tocsbaselinedescription"></a>

```json
"string"
```

<h2 id="tocS_BaselineId">BaselineId</h2>
<!-- backwards compatibility -->
<a id="schemabaselineid"></a>
<a id="schema_BaselineId"></a>
<a id="tocSbaselineid"></a>
<a id="tocsbaselineid"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_BaselineName">BaselineName</h2>
<!-- backwards compatibility -->
<a id="schemabaselinename"></a>
<a id="schema_BaselineName"></a>
<a id="tocSbaselinename"></a>
<a id="tocsbaselinename"></a>

```json
"string"
```

<h2 id="tocS_OperatingSystem">OperatingSystem</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystem"></a>
<a id="schema_OperatingSystem"></a>
<a id="tocSoperatingsystem"></a>
<a id="tocsoperatingsystem"></a>

```json
"WINDOWS"
```

<h2 id="tocS_PatchFilterGroup">PatchFilterGroup</h2>
<!-- backwards compatibility -->
<a id="schemapatchfiltergroup"></a>
<a id="schema_PatchFilterGroup"></a>
<a id="tocSpatchfiltergroup"></a>
<a id="tocspatchfiltergroup"></a>

```json
{
  "PatchFilters": {}
}
```

A set of patch filters, typically used for approval rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PatchFilters|object|true|none|none|

<h2 id="tocS_PatchRuleGroup">PatchRuleGroup</h2>
<!-- backwards compatibility -->
<a id="schemapatchrulegroup"></a>
<a id="schema_PatchRuleGroup"></a>
<a id="tocSpatchrulegroup"></a>
<a id="tocspatchrulegroup"></a>

```json
{
  "PatchRules": {}
}
```

A set of rules defining the approval rules for a patch baseline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PatchRules|object|true|none|none|

<h2 id="tocS_PatchIdList">PatchIdList</h2>
<!-- backwards compatibility -->
<a id="schemapatchidlist"></a>
<a id="schema_PatchIdList"></a>
<a id="tocSpatchidlist"></a>
<a id="tocspatchidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PatchComplianceLevel">PatchComplianceLevel</h2>
<!-- backwards compatibility -->
<a id="schemapatchcompliancelevel"></a>
<a id="schema_PatchComplianceLevel"></a>
<a id="tocSpatchcompliancelevel"></a>
<a id="tocspatchcompliancelevel"></a>

```json
"CRITICAL"
```

<h2 id="tocS_PatchAction">PatchAction</h2>
<!-- backwards compatibility -->
<a id="schemapatchaction"></a>
<a id="schema_PatchAction"></a>
<a id="tocSpatchaction"></a>
<a id="tocspatchaction"></a>

```json
"ALLOW_AS_DEPENDENCY"
```

<h2 id="tocS_PatchSourceList">PatchSourceList</h2>
<!-- backwards compatibility -->
<a id="schemapatchsourcelist"></a>
<a id="schema_PatchSourceList"></a>
<a id="tocSpatchsourcelist"></a>
<a id="tocspatchsourcelist"></a>

```json
[
  {
    "Name": {},
    "Products": {},
    "Configuration": {}
  }
]
```

<h2 id="tocS_BaselineOverride">BaselineOverride</h2>
<!-- backwards compatibility -->
<a id="schemabaselineoverride"></a>
<a id="schema_BaselineOverride"></a>
<a id="tocSbaselineoverride"></a>
<a id="tocsbaselineoverride"></a>

```json
{
  "OperatingSystem": {},
  "GlobalFilters": {
    "PatchFilters": {}
  },
  "ApprovalRules": {
    "PatchRules": {}
  },
  "ApprovedPatches": {},
  "ApprovedPatchesComplianceLevel": {},
  "RejectedPatches": {},
  "RejectedPatchesAction": {},
  "ApprovedPatchesEnableNonSecurity": {},
  "Sources": {}
}
```

Defines the basic information about a patch baseline override.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperatingSystem|object|false|none|none|
|GlobalFilters|[PatchFilterGroup](#schemapatchfiltergroup)|false|none|A set of patch filters, typically used for approval rules.|
|ApprovalRules|[PatchRuleGroup](#schemapatchrulegroup)|false|none|A set of rules defining the approval rules for a patch baseline.|
|ApprovedPatches|object|false|none|none|
|ApprovedPatchesComplianceLevel|object|false|none|none|
|RejectedPatches|object|false|none|none|
|RejectedPatchesAction|object|false|none|none|
|ApprovedPatchesEnableNonSecurity|object|false|none|none|
|Sources|object|false|none|none|

<h2 id="tocS_BatchErrorMessage">BatchErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemabatcherrormessage"></a>
<a id="schema_BatchErrorMessage"></a>
<a id="tocSbatcherrormessage"></a>
<a id="tocsbatcherrormessage"></a>

```json
"string"
```

<h2 id="tocS_CalendarNameOrARN">CalendarNameOrARN</h2>
<!-- backwards compatibility -->
<a id="schemacalendarnameorarn"></a>
<a id="schema_CalendarNameOrARN"></a>
<a id="tocScalendarnameorarn"></a>
<a id="tocscalendarnameorarn"></a>

```json
"string"
```

<h2 id="tocS_CalendarState">CalendarState</h2>
<!-- backwards compatibility -->
<a id="schemacalendarstate"></a>
<a id="schema_CalendarState"></a>
<a id="tocScalendarstate"></a>
<a id="tocscalendarstate"></a>

```json
"OPEN"
```

<h2 id="tocS_CommandId">CommandId</h2>
<!-- backwards compatibility -->
<a id="schemacommandid"></a>
<a id="schema_CommandId"></a>
<a id="tocScommandid"></a>
<a id="tocscommandid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_InstanceIdList">InstanceIdList</h2>
<!-- backwards compatibility -->
<a id="schemainstanceidlist"></a>
<a id="schema_InstanceIdList"></a>
<a id="tocSinstanceidlist"></a>
<a id="tocsinstanceidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MaintenanceWindowExecutionId">MaintenanceWindowExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecutionid"></a>
<a id="schema_MaintenanceWindowExecutionId"></a>
<a id="tocSmaintenancewindowexecutionid"></a>
<a id="tocsmaintenancewindowexecutionid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
"string"
```

<h2 id="tocS_CategoryEnumList">CategoryEnumList</h2>
<!-- backwards compatibility -->
<a id="schemacategoryenumlist"></a>
<a id="schema_CategoryEnumList"></a>
<a id="tocScategoryenumlist"></a>
<a id="tocscategoryenumlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CategoryList">CategoryList</h2>
<!-- backwards compatibility -->
<a id="schemacategorylist"></a>
<a id="schema_CategoryList"></a>
<a id="tocScategorylist"></a>
<a id="tocscategorylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ChangeDetailsValue">ChangeDetailsValue</h2>
<!-- backwards compatibility -->
<a id="schemachangedetailsvalue"></a>
<a id="schema_ChangeDetailsValue"></a>
<a id="tocSchangedetailsvalue"></a>
<a id="tocschangedetailsvalue"></a>

```json
"string"
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

<h2 id="tocS_CloudWatchLogGroupName">CloudWatchLogGroupName</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggroupname"></a>
<a id="schema_CloudWatchLogGroupName"></a>
<a id="tocScloudwatchloggroupname"></a>
<a id="tocscloudwatchloggroupname"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchOutputEnabled">CloudWatchOutputEnabled</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchoutputenabled"></a>
<a id="schema_CloudWatchOutputEnabled"></a>
<a id="tocScloudwatchoutputenabled"></a>
<a id="tocscloudwatchoutputenabled"></a>

```json
true
```

<h2 id="tocS_CloudWatchOutputConfig">CloudWatchOutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchoutputconfig"></a>
<a id="schema_CloudWatchOutputConfig"></a>
<a id="tocScloudwatchoutputconfig"></a>
<a id="tocscloudwatchoutputconfig"></a>

```json
{
  "CloudWatchLogGroupName": {},
  "CloudWatchOutputEnabled": {}
}
```

Configuration options for sending command output to Amazon CloudWatch Logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchLogGroupName|object|false|none|none|
|CloudWatchOutputEnabled|object|false|none|none|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
"string"
```

<h2 id="tocS_CommandStatus">CommandStatus</h2>
<!-- backwards compatibility -->
<a id="schemacommandstatus"></a>
<a id="schema_CommandStatus"></a>
<a id="tocScommandstatus"></a>
<a id="tocscommandstatus"></a>

```json
"Pending"
```

<h2 id="tocS_StatusDetails">StatusDetails</h2>
<!-- backwards compatibility -->
<a id="schemastatusdetails"></a>
<a id="schema_StatusDetails"></a>
<a id="tocSstatusdetails"></a>
<a id="tocsstatusdetails"></a>

```json
"string"
```

<h2 id="tocS_S3Region">S3Region</h2>
<!-- backwards compatibility -->
<a id="schemas3region"></a>
<a id="schema_S3Region"></a>
<a id="tocSs3region"></a>
<a id="tocss3region"></a>

```json
"string"
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

<h2 id="tocS_S3KeyPrefix">S3KeyPrefix</h2>
<!-- backwards compatibility -->
<a id="schemas3keyprefix"></a>
<a id="schema_S3KeyPrefix"></a>
<a id="tocSs3keyprefix"></a>
<a id="tocss3keyprefix"></a>

```json
"string"
```

<h2 id="tocS_TargetCount">TargetCount</h2>
<!-- backwards compatibility -->
<a id="schematargetcount"></a>
<a id="schema_TargetCount"></a>
<a id="tocStargetcount"></a>
<a id="tocstargetcount"></a>

```json
0
```

<h2 id="tocS_CompletedCount">CompletedCount</h2>
<!-- backwards compatibility -->
<a id="schemacompletedcount"></a>
<a id="schema_CompletedCount"></a>
<a id="tocScompletedcount"></a>
<a id="tocscompletedcount"></a>

```json
0
```

<h2 id="tocS_ErrorCount">ErrorCount</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcount"></a>
<a id="schema_ErrorCount"></a>
<a id="tocSerrorcount"></a>
<a id="tocserrorcount"></a>

```json
0
```

<h2 id="tocS_DeliveryTimedOutCount">DeliveryTimedOutCount</h2>
<!-- backwards compatibility -->
<a id="schemadeliverytimedoutcount"></a>
<a id="schema_DeliveryTimedOutCount"></a>
<a id="tocSdeliverytimedoutcount"></a>
<a id="tocsdeliverytimedoutcount"></a>

```json
0
```

<h2 id="tocS_ServiceRole">ServiceRole</h2>
<!-- backwards compatibility -->
<a id="schemaservicerole"></a>
<a id="schema_ServiceRole"></a>
<a id="tocSservicerole"></a>
<a id="tocsservicerole"></a>

```json
"string"
```

<h2 id="tocS_NotificationConfig">NotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfig"></a>
<a id="schema_NotificationConfig"></a>
<a id="tocSnotificationconfig"></a>
<a id="tocsnotificationconfig"></a>

```json
{
  "NotificationArn": {},
  "NotificationEvents": {},
  "NotificationType": {}
}
```

Configurations for sending notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationArn|object|false|none|none|
|NotificationEvents|object|false|none|none|
|NotificationType|object|false|none|none|

<h2 id="tocS_TimeoutSeconds">TimeoutSeconds</h2>
<!-- backwards compatibility -->
<a id="schematimeoutseconds"></a>
<a id="schema_TimeoutSeconds"></a>
<a id="tocStimeoutseconds"></a>
<a id="tocstimeoutseconds"></a>

```json
30
```

<h2 id="tocS_Command">Command</h2>
<!-- backwards compatibility -->
<a id="schemacommand"></a>
<a id="schema_Command"></a>
<a id="tocScommand"></a>
<a id="tocscommand"></a>

```json
{
  "CommandId": {},
  "DocumentName": {},
  "DocumentVersion": {},
  "Comment": {},
  "ExpiresAfter": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "InstanceIds": {},
  "Targets": {},
  "RequestedDateTime": {},
  "Status": {},
  "StatusDetails": {},
  "OutputS3Region": {},
  "OutputS3BucketName": {},
  "OutputS3KeyPrefix": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "TargetCount": {},
  "CompletedCount": {},
  "ErrorCount": {},
  "DeliveryTimedOutCount": {},
  "ServiceRole": {},
  "NotificationConfig": {
    "NotificationArn": {},
    "NotificationEvents": {},
    "NotificationType": {}
  },
  "CloudWatchOutputConfig": {
    "CloudWatchLogGroupName": {},
    "CloudWatchOutputEnabled": {}
  },
  "TimeoutSeconds": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  },
  "TriggeredAlarms": {}
}
```

Describes a command request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CommandId|object|false|none|none|
|DocumentName|object|false|none|none|
|DocumentVersion|object|false|none|none|
|Comment|object|false|none|none|
|ExpiresAfter|object|false|none|none|
|Parameters|object|false|none|none|
|InstanceIds|object|false|none|none|
|Targets|object|false|none|none|
|RequestedDateTime|object|false|none|none|
|Status|object|false|none|none|
|StatusDetails|object|false|none|none|
|OutputS3Region|object|false|none|none|
|OutputS3BucketName|object|false|none|none|
|OutputS3KeyPrefix|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|MaxErrors|object|false|none|none|
|TargetCount|object|false|none|none|
|CompletedCount|object|false|none|none|
|ErrorCount|object|false|none|none|
|DeliveryTimedOutCount|object|false|none|none|
|ServiceRole|object|false|none|none|
|NotificationConfig|object|false|none|none|
|CloudWatchOutputConfig|object|false|none|none|
|TimeoutSeconds|object|false|none|none|
|AlarmConfiguration|object|false|none|none|
|TriggeredAlarms|object|false|none|none|

<h2 id="tocS_CommandFilterKey">CommandFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemacommandfilterkey"></a>
<a id="schema_CommandFilterKey"></a>
<a id="tocScommandfilterkey"></a>
<a id="tocscommandfilterkey"></a>

```json
"InvokedAfter"
```

<h2 id="tocS_CommandFilterValue">CommandFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemacommandfiltervalue"></a>
<a id="schema_CommandFilterValue"></a>
<a id="tocScommandfiltervalue"></a>
<a id="tocscommandfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_CommandFilter">CommandFilter</h2>
<!-- backwards compatibility -->
<a id="schemacommandfilter"></a>
<a id="schema_CommandFilter"></a>
<a id="tocScommandfilter"></a>
<a id="tocscommandfilter"></a>

```json
{
  "key": {},
  "value": {}
}
```

<p>Describes a command filter.</p> <note> <p>A managed node ID can't be specified when a command status is <code>Pending</code> because the command hasn't run on the node yet.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_CommandFilterList">CommandFilterList</h2>
<!-- backwards compatibility -->
<a id="schemacommandfilterlist"></a>
<a id="schema_CommandFilterList"></a>
<a id="tocScommandfilterlist"></a>
<a id="tocscommandfilterlist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_InstanceTagName">InstanceTagName</h2>
<!-- backwards compatibility -->
<a id="schemainstancetagname"></a>
<a id="schema_InstanceTagName"></a>
<a id="tocSinstancetagname"></a>
<a id="tocsinstancetagname"></a>

```json
"string"
```

<h2 id="tocS_CommandInvocationStatus">CommandInvocationStatus</h2>
<!-- backwards compatibility -->
<a id="schemacommandinvocationstatus"></a>
<a id="schema_CommandInvocationStatus"></a>
<a id="tocScommandinvocationstatus"></a>
<a id="tocscommandinvocationstatus"></a>

```json
"Pending"
```

<h2 id="tocS_InvocationTraceOutput">InvocationTraceOutput</h2>
<!-- backwards compatibility -->
<a id="schemainvocationtraceoutput"></a>
<a id="schema_InvocationTraceOutput"></a>
<a id="tocSinvocationtraceoutput"></a>
<a id="tocsinvocationtraceoutput"></a>

```json
"string"
```

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"string"
```

<h2 id="tocS_CommandPluginList">CommandPluginList</h2>
<!-- backwards compatibility -->
<a id="schemacommandpluginlist"></a>
<a id="schema_CommandPluginList"></a>
<a id="tocScommandpluginlist"></a>
<a id="tocscommandpluginlist"></a>

```json
[
  {
    "Name": {},
    "Status": {},
    "StatusDetails": {},
    "ResponseCode": {},
    "ResponseStartDateTime": {},
    "ResponseFinishDateTime": {},
    "Output": {},
    "StandardOutputUrl": {},
    "StandardErrorUrl": {},
    "OutputS3Region": {},
    "OutputS3BucketName": {},
    "OutputS3KeyPrefix": {}
  }
]
```

<h2 id="tocS_CommandInvocation">CommandInvocation</h2>
<!-- backwards compatibility -->
<a id="schemacommandinvocation"></a>
<a id="schema_CommandInvocation"></a>
<a id="tocScommandinvocation"></a>
<a id="tocscommandinvocation"></a>

```json
{
  "CommandId": {},
  "InstanceId": {},
  "InstanceName": {},
  "Comment": {},
  "DocumentName": {},
  "DocumentVersion": {},
  "RequestedDateTime": {},
  "Status": {},
  "StatusDetails": {},
  "TraceOutput": {},
  "StandardOutputUrl": {},
  "StandardErrorUrl": {},
  "CommandPlugins": {},
  "ServiceRole": {},
  "NotificationConfig": {
    "NotificationArn": {},
    "NotificationEvents": {},
    "NotificationType": {}
  },
  "CloudWatchOutputConfig": {
    "CloudWatchLogGroupName": {},
    "CloudWatchOutputEnabled": {}
  }
}
```

An invocation is a copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs <code>SendCommand</code> against three managed nodes, then a command invocation is created for each requested managed node ID. A command invocation returns status and detail information about a command you ran.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CommandId|object|false|none|none|
|InstanceId|object|false|none|none|
|InstanceName|object|false|none|none|
|Comment|object|false|none|none|
|DocumentName|object|false|none|none|
|DocumentVersion|object|false|none|none|
|RequestedDateTime|object|false|none|none|
|Status|object|false|none|none|
|StatusDetails|object|false|none|none|
|TraceOutput|object|false|none|none|
|StandardOutputUrl|object|false|none|none|
|StandardErrorUrl|object|false|none|none|
|CommandPlugins|object|false|none|none|
|ServiceRole|object|false|none|none|
|NotificationConfig|object|false|none|none|
|CloudWatchOutputConfig|object|false|none|none|

<h2 id="tocS_CommandInvocationList">CommandInvocationList</h2>
<!-- backwards compatibility -->
<a id="schemacommandinvocationlist"></a>
<a id="schema_CommandInvocationList"></a>
<a id="tocScommandinvocationlist"></a>
<a id="tocscommandinvocationlist"></a>

```json
[
  {
    "CommandId": {},
    "InstanceId": {},
    "InstanceName": {},
    "Comment": {},
    "DocumentName": {},
    "DocumentVersion": {},
    "RequestedDateTime": {},
    "Status": {},
    "StatusDetails": {},
    "TraceOutput": {},
    "StandardOutputUrl": {},
    "StandardErrorUrl": {},
    "CommandPlugins": {},
    "ServiceRole": {},
    "NotificationConfig": {
      "NotificationArn": {},
      "NotificationEvents": {},
      "NotificationType": {}
    },
    "CloudWatchOutputConfig": {
      "CloudWatchLogGroupName": {},
      "CloudWatchOutputEnabled": {}
    }
  }
]
```

<h2 id="tocS_CommandList">CommandList</h2>
<!-- backwards compatibility -->
<a id="schemacommandlist"></a>
<a id="schema_CommandList"></a>
<a id="tocScommandlist"></a>
<a id="tocscommandlist"></a>

```json
[
  {
    "CommandId": {},
    "DocumentName": {},
    "DocumentVersion": {},
    "Comment": {},
    "ExpiresAfter": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "InstanceIds": {},
    "Targets": {},
    "RequestedDateTime": {},
    "Status": {},
    "StatusDetails": {},
    "OutputS3Region": {},
    "OutputS3BucketName": {},
    "OutputS3KeyPrefix": {},
    "MaxConcurrency": {},
    "MaxErrors": {},
    "TargetCount": {},
    "CompletedCount": {},
    "ErrorCount": {},
    "DeliveryTimedOutCount": {},
    "ServiceRole": {},
    "NotificationConfig": {
      "NotificationArn": {},
      "NotificationEvents": {},
      "NotificationType": {}
    },
    "CloudWatchOutputConfig": {
      "CloudWatchLogGroupName": {},
      "CloudWatchOutputEnabled": {}
    },
    "TimeoutSeconds": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
  }
]
```

<h2 id="tocS_CommandMaxResults">CommandMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemacommandmaxresults"></a>
<a id="schema_CommandMaxResults"></a>
<a id="tocScommandmaxresults"></a>
<a id="tocscommandmaxresults"></a>

```json
1
```

<h2 id="tocS_CommandPluginName">CommandPluginName</h2>
<!-- backwards compatibility -->
<a id="schemacommandpluginname"></a>
<a id="schema_CommandPluginName"></a>
<a id="tocScommandpluginname"></a>
<a id="tocscommandpluginname"></a>

```json
"string"
```

<h2 id="tocS_CommandPluginStatus">CommandPluginStatus</h2>
<!-- backwards compatibility -->
<a id="schemacommandpluginstatus"></a>
<a id="schema_CommandPluginStatus"></a>
<a id="tocScommandpluginstatus"></a>
<a id="tocscommandpluginstatus"></a>

```json
"Pending"
```

<h2 id="tocS_ResponseCode">ResponseCode</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecode"></a>
<a id="schema_ResponseCode"></a>
<a id="tocSresponsecode"></a>
<a id="tocsresponsecode"></a>

```json
0
```

<h2 id="tocS_CommandPluginOutput">CommandPluginOutput</h2>
<!-- backwards compatibility -->
<a id="schemacommandpluginoutput"></a>
<a id="schema_CommandPluginOutput"></a>
<a id="tocScommandpluginoutput"></a>
<a id="tocscommandpluginoutput"></a>

```json
"string"
```

<h2 id="tocS_CommandPlugin">CommandPlugin</h2>
<!-- backwards compatibility -->
<a id="schemacommandplugin"></a>
<a id="schema_CommandPlugin"></a>
<a id="tocScommandplugin"></a>
<a id="tocscommandplugin"></a>

```json
{
  "Name": {},
  "Status": {},
  "StatusDetails": {},
  "ResponseCode": {},
  "ResponseStartDateTime": {},
  "ResponseFinishDateTime": {},
  "Output": {},
  "StandardOutputUrl": {},
  "StandardErrorUrl": {},
  "OutputS3Region": {},
  "OutputS3BucketName": {},
  "OutputS3KeyPrefix": {}
}
```

Describes plugin details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|
|StatusDetails|object|false|none|none|
|ResponseCode|object|false|none|none|
|ResponseStartDateTime|object|false|none|none|
|ResponseFinishDateTime|object|false|none|none|
|Output|object|false|none|none|
|StandardOutputUrl|object|false|none|none|
|StandardErrorUrl|object|false|none|none|
|OutputS3Region|object|false|none|none|
|OutputS3BucketName|object|false|none|none|
|OutputS3KeyPrefix|object|false|none|none|

<h2 id="tocS_ComplianceExecutionId">ComplianceExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceexecutionid"></a>
<a id="schema_ComplianceExecutionId"></a>
<a id="tocScomplianceexecutionid"></a>
<a id="tocscomplianceexecutionid"></a>

```json
"string"
```

<h2 id="tocS_ComplianceExecutionType">ComplianceExecutionType</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceexecutiontype"></a>
<a id="schema_ComplianceExecutionType"></a>
<a id="tocScomplianceexecutiontype"></a>
<a id="tocscomplianceexecutiontype"></a>

```json
"string"
```

<h2 id="tocS_ComplianceExecutionSummary">ComplianceExecutionSummary</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceexecutionsummary"></a>
<a id="schema_ComplianceExecutionSummary"></a>
<a id="tocScomplianceexecutionsummary"></a>
<a id="tocscomplianceexecutionsummary"></a>

```json
{
  "ExecutionTime": {},
  "ExecutionId": {},
  "ExecutionType": {}
}
```

A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutionTime|object|true|none|none|
|ExecutionId|object|false|none|none|
|ExecutionType|object|false|none|none|

<h2 id="tocS_ComplianceFilterValue">ComplianceFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemacompliancefiltervalue"></a>
<a id="schema_ComplianceFilterValue"></a>
<a id="tocScompliancefiltervalue"></a>
<a id="tocscompliancefiltervalue"></a>

```json
"string"
```

<h2 id="tocS_ComplianceTypeName">ComplianceTypeName</h2>
<!-- backwards compatibility -->
<a id="schemacompliancetypename"></a>
<a id="schema_ComplianceTypeName"></a>
<a id="tocScompliancetypename"></a>
<a id="tocscompliancetypename"></a>

```json
"string"
```

<h2 id="tocS_ComplianceResourceType">ComplianceResourceType</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceresourcetype"></a>
<a id="schema_ComplianceResourceType"></a>
<a id="tocScomplianceresourcetype"></a>
<a id="tocscomplianceresourcetype"></a>

```json
"string"
```

<h2 id="tocS_ComplianceResourceId">ComplianceResourceId</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceresourceid"></a>
<a id="schema_ComplianceResourceId"></a>
<a id="tocScomplianceresourceid"></a>
<a id="tocscomplianceresourceid"></a>

```json
"string"
```

<h2 id="tocS_ComplianceItemId">ComplianceItemId</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceitemid"></a>
<a id="schema_ComplianceItemId"></a>
<a id="tocScomplianceitemid"></a>
<a id="tocscomplianceitemid"></a>

```json
"string"
```

<h2 id="tocS_ComplianceItemTitle">ComplianceItemTitle</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceitemtitle"></a>
<a id="schema_ComplianceItemTitle"></a>
<a id="tocScomplianceitemtitle"></a>
<a id="tocscomplianceitemtitle"></a>

```json
"string"
```

<h2 id="tocS_ComplianceStatus">ComplianceStatus</h2>
<!-- backwards compatibility -->
<a id="schemacompliancestatus"></a>
<a id="schema_ComplianceStatus"></a>
<a id="tocScompliancestatus"></a>
<a id="tocscompliancestatus"></a>

```json
"COMPLIANT"
```

<h2 id="tocS_ComplianceSeverity">ComplianceSeverity</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceseverity"></a>
<a id="schema_ComplianceSeverity"></a>
<a id="tocScomplianceseverity"></a>
<a id="tocscomplianceseverity"></a>

```json
"CRITICAL"
```

<h2 id="tocS_ComplianceItemDetails">ComplianceItemDetails</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceitemdetails"></a>
<a id="schema_ComplianceItemDetails"></a>
<a id="tocScomplianceitemdetails"></a>
<a id="tocscomplianceitemdetails"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none|none|

<h2 id="tocS_ComplianceItem">ComplianceItem</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceitem"></a>
<a id="schema_ComplianceItem"></a>
<a id="tocScomplianceitem"></a>
<a id="tocscomplianceitem"></a>

```json
{
  "ComplianceType": {},
  "ResourceType": {},
  "ResourceId": {},
  "Id": {},
  "Title": {},
  "Status": {},
  "Severity": {},
  "ExecutionSummary": {
    "ExecutionTime": {},
    "ExecutionId": {},
    "ExecutionType": {}
  },
  "Details": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information about the compliance as defined by the resource type. For example, for a patch resource type, <code>Items</code> includes information about the PatchSeverity, Classification, and so on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceType|object|false|none|none|
|ResourceType|object|false|none|none|
|ResourceId|object|false|none|none|
|Id|object|false|none|none|
|Title|object|false|none|none|
|Status|object|false|none|none|
|Severity|object|false|none|none|
|ExecutionSummary|object|false|none|none|
|Details|object|false|none|none|

<h2 id="tocS_ComplianceItemContentHash">ComplianceItemContentHash</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceitemcontenthash"></a>
<a id="schema_ComplianceItemContentHash"></a>
<a id="tocScomplianceitemcontenthash"></a>
<a id="tocscomplianceitemcontenthash"></a>

```json
"string"
```

<h2 id="tocS_ComplianceItemEntry">ComplianceItemEntry</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceitementry"></a>
<a id="schema_ComplianceItemEntry"></a>
<a id="tocScomplianceitementry"></a>
<a id="tocscomplianceitementry"></a>

```json
{
  "Id": {},
  "Title": {},
  "Severity": {},
  "Status": {},
  "Details": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information about a compliance item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Title|object|false|none|none|
|Severity|object|true|none|none|
|Status|object|true|none|none|
|Details|object|false|none|none|

<h2 id="tocS_ComplianceItemEntryList">ComplianceItemEntryList</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceitementrylist"></a>
<a id="schema_ComplianceItemEntryList"></a>
<a id="tocScomplianceitementrylist"></a>
<a id="tocscomplianceitementrylist"></a>

```json
[
  {
    "Id": {},
    "Title": {},
    "Severity": {},
    "Status": {},
    "Details": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ComplianceItemList">ComplianceItemList</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceitemlist"></a>
<a id="schema_ComplianceItemList"></a>
<a id="tocScomplianceitemlist"></a>
<a id="tocscomplianceitemlist"></a>

```json
[
  {
    "ComplianceType": {},
    "ResourceType": {},
    "ResourceId": {},
    "Id": {},
    "Title": {},
    "Status": {},
    "Severity": {},
    "ExecutionSummary": {
      "ExecutionTime": {},
      "ExecutionId": {},
      "ExecutionType": {}
    },
    "Details": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ComplianceQueryOperatorType">ComplianceQueryOperatorType</h2>
<!-- backwards compatibility -->
<a id="schemacompliancequeryoperatortype"></a>
<a id="schema_ComplianceQueryOperatorType"></a>
<a id="tocScompliancequeryoperatortype"></a>
<a id="tocscompliancequeryoperatortype"></a>

```json
"EQUAL"
```

<h2 id="tocS_ComplianceResourceIdList">ComplianceResourceIdList</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceresourceidlist"></a>
<a id="schema_ComplianceResourceIdList"></a>
<a id="tocScomplianceresourceidlist"></a>
<a id="tocscomplianceresourceidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ComplianceResourceTypeList">ComplianceResourceTypeList</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceresourcetypelist"></a>
<a id="schema_ComplianceResourceTypeList"></a>
<a id="tocScomplianceresourcetypelist"></a>
<a id="tocscomplianceresourcetypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ComplianceStringFilterKey">ComplianceStringFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemacompliancestringfilterkey"></a>
<a id="schema_ComplianceStringFilterKey"></a>
<a id="tocScompliancestringfilterkey"></a>
<a id="tocscompliancestringfilterkey"></a>

```json
"string"
```

<h2 id="tocS_ComplianceStringFilterValueList">ComplianceStringFilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemacompliancestringfiltervaluelist"></a>
<a id="schema_ComplianceStringFilterValueList"></a>
<a id="tocScompliancestringfiltervaluelist"></a>
<a id="tocscompliancestringfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ComplianceStringFilter">ComplianceStringFilter</h2>
<!-- backwards compatibility -->
<a id="schemacompliancestringfilter"></a>
<a id="schema_ComplianceStringFilter"></a>
<a id="tocScompliancestringfilter"></a>
<a id="tocscompliancestringfilter"></a>

```json
{
  "Key": {},
  "Values": {},
  "Type": {}
}
```

One or more filters. Use a filter to return a more specific list of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_ComplianceStringFilterList">ComplianceStringFilterList</h2>
<!-- backwards compatibility -->
<a id="schemacompliancestringfilterlist"></a>
<a id="schema_ComplianceStringFilterList"></a>
<a id="tocScompliancestringfilterlist"></a>
<a id="tocscompliancestringfilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {},
    "Type": {}
  }
]
```

<h2 id="tocS_ComplianceSummaryCount">ComplianceSummaryCount</h2>
<!-- backwards compatibility -->
<a id="schemacompliancesummarycount"></a>
<a id="schema_ComplianceSummaryCount"></a>
<a id="tocScompliancesummarycount"></a>
<a id="tocscompliancesummarycount"></a>

```json
0
```

<h2 id="tocS_CompliantSummary">CompliantSummary</h2>
<!-- backwards compatibility -->
<a id="schemacompliantsummary"></a>
<a id="schema_CompliantSummary"></a>
<a id="tocScompliantsummary"></a>
<a id="tocscompliantsummary"></a>

```json
{
  "CompliantCount": {},
  "SeveritySummary": {
    "CriticalCount": {},
    "HighCount": {},
    "MediumCount": {},
    "LowCount": {},
    "InformationalCount": {},
    "UnspecifiedCount": {}
  }
}
```

A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CompliantCount|object|false|none|none|
|SeveritySummary|object|false|none|none|

<h2 id="tocS_NonCompliantSummary">NonCompliantSummary</h2>
<!-- backwards compatibility -->
<a id="schemanoncompliantsummary"></a>
<a id="schema_NonCompliantSummary"></a>
<a id="tocSnoncompliantsummary"></a>
<a id="tocsnoncompliantsummary"></a>

```json
{
  "NonCompliantCount": {},
  "SeveritySummary": {
    "CriticalCount": {},
    "HighCount": {},
    "MediumCount": {},
    "LowCount": {},
    "InformationalCount": {},
    "UnspecifiedCount": {}
  }
}
```

A summary of resources that aren't compliant. The summary is organized according to resource type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NonCompliantCount|object|false|none|none|
|SeveritySummary|object|false|none|none|

<h2 id="tocS_ComplianceSummaryItem">ComplianceSummaryItem</h2>
<!-- backwards compatibility -->
<a id="schemacompliancesummaryitem"></a>
<a id="schema_ComplianceSummaryItem"></a>
<a id="tocScompliancesummaryitem"></a>
<a id="tocscompliancesummaryitem"></a>

```json
{
  "ComplianceType": {},
  "CompliantSummary": {
    "CompliantCount": {},
    "SeveritySummary": {
      "CriticalCount": {},
      "HighCount": {},
      "MediumCount": {},
      "LowCount": {},
      "InformationalCount": {},
      "UnspecifiedCount": {}
    }
  },
  "NonCompliantSummary": {
    "NonCompliantCount": {},
    "SeveritySummary": {
      "CriticalCount": {},
      "HighCount": {},
      "MediumCount": {},
      "LowCount": {},
      "InformationalCount": {},
      "UnspecifiedCount": {}
    }
  }
}
```

A summary of compliance information by compliance type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceType|object|false|none|none|
|CompliantSummary|object|false|none|none|
|NonCompliantSummary|object|false|none|none|

<h2 id="tocS_ComplianceSummaryItemList">ComplianceSummaryItemList</h2>
<!-- backwards compatibility -->
<a id="schemacompliancesummaryitemlist"></a>
<a id="schema_ComplianceSummaryItemList"></a>
<a id="tocScompliancesummaryitemlist"></a>
<a id="tocscompliancesummaryitemlist"></a>

```json
[
  {
    "ComplianceType": {},
    "CompliantSummary": {
      "CompliantCount": {},
      "SeveritySummary": {
        "CriticalCount": {},
        "HighCount": {},
        "MediumCount": {},
        "LowCount": {},
        "InformationalCount": {},
        "UnspecifiedCount": {}
      }
    },
    "NonCompliantSummary": {
      "NonCompliantCount": {},
      "SeveritySummary": {
        "CriticalCount": {},
        "HighCount": {},
        "MediumCount": {},
        "LowCount": {},
        "InformationalCount": {},
        "UnspecifiedCount": {}
      }
    }
  }
]
```

<h2 id="tocS_ComplianceUploadType">ComplianceUploadType</h2>
<!-- backwards compatibility -->
<a id="schemacomplianceuploadtype"></a>
<a id="schema_ComplianceUploadType"></a>
<a id="tocScomplianceuploadtype"></a>
<a id="tocscomplianceuploadtype"></a>

```json
"COMPLETE"
```

<h2 id="tocS_SeveritySummary">SeveritySummary</h2>
<!-- backwards compatibility -->
<a id="schemaseveritysummary"></a>
<a id="schema_SeveritySummary"></a>
<a id="tocSseveritysummary"></a>
<a id="tocsseveritysummary"></a>

```json
{
  "CriticalCount": {},
  "HighCount": {},
  "MediumCount": {},
  "LowCount": {},
  "InformationalCount": {},
  "UnspecifiedCount": {}
}
```

The number of managed nodes found for each patch severity level defined in the request filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CriticalCount|object|false|none|none|
|HighCount|object|false|none|none|
|MediumCount|object|false|none|none|
|LowCount|object|false|none|none|
|InformationalCount|object|false|none|none|
|UnspecifiedCount|object|false|none|none|

<h2 id="tocS_ComputerName">ComputerName</h2>
<!-- backwards compatibility -->
<a id="schemacomputername"></a>
<a id="schema_ComputerName"></a>
<a id="tocScomputername"></a>
<a id="tocscomputername"></a>

```json
"string"
```

<h2 id="tocS_ConnectionStatus">ConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatus"></a>
<a id="schema_ConnectionStatus"></a>
<a id="tocSconnectionstatus"></a>
<a id="tocsconnectionstatus"></a>

```json
"Connected"
```

<h2 id="tocS_RegistrationMetadataList">RegistrationMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationmetadatalist"></a>
<a id="schema_RegistrationMetadataList"></a>
<a id="tocSregistrationmetadatalist"></a>
<a id="tocsregistrationmetadatalist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_CreateAssociationBatchRequestEntries">CreateAssociationBatchRequestEntries</h2>
<!-- backwards compatibility -->
<a id="schemacreateassociationbatchrequestentries"></a>
<a id="schema_CreateAssociationBatchRequestEntries"></a>
<a id="tocScreateassociationbatchrequestentries"></a>
<a id="tocscreateassociationbatchrequestentries"></a>

```json
[
  {
    "Name": {},
    "InstanceId": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "AutomationTargetParameterName": {},
    "DocumentVersion": {},
    "Targets": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "AssociationName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    }
  }
]
```

<h2 id="tocS_CreateAssociationBatchRequestEntry">CreateAssociationBatchRequestEntry</h2>
<!-- backwards compatibility -->
<a id="schemacreateassociationbatchrequestentry"></a>
<a id="schema_CreateAssociationBatchRequestEntry"></a>
<a id="tocScreateassociationbatchrequestentry"></a>
<a id="tocscreateassociationbatchrequestentry"></a>

```json
{
  "Name": {},
  "InstanceId": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "AutomationTargetParameterName": {},
  "DocumentVersion": {},
  "Targets": {},
  "ScheduleExpression": {},
  "OutputLocation": {
    "S3Location": {
      "OutputS3Region": {},
      "OutputS3BucketName": {},
      "OutputS3KeyPrefix": {}
    }
  },
  "AssociationName": {},
  "MaxErrors": {},
  "MaxConcurrency": {},
  "ComplianceSeverity": {},
  "SyncCompliance": {},
  "ApplyOnlyAtCronInterval": {},
  "CalendarNames": {},
  "TargetLocations": {},
  "ScheduleOffset": {},
  "TargetMaps": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

Describes the association of a Amazon Web Services Systems Manager document (SSM document) and a managed node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|InstanceId|object|false|none|none|
|Parameters|object|false|none|none|
|AutomationTargetParameterName|object|false|none|none|
|DocumentVersion|object|false|none|none|
|Targets|object|false|none|none|
|ScheduleExpression|object|false|none|none|
|OutputLocation|object|false|none|none|
|AssociationName|object|false|none|none|
|MaxErrors|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|ComplianceSeverity|object|false|none|none|
|SyncCompliance|object|false|none|none|
|ApplyOnlyAtCronInterval|object|false|none|none|
|CalendarNames|object|false|none|none|
|TargetLocations|object|false|none|none|
|ScheduleOffset|object|false|none|none|
|TargetMaps|object|false|none|none|
|AlarmConfiguration|[AlarmConfiguration](#schemaalarmconfiguration)|false|none|The details for the CloudWatch alarm you want to apply to an automation or command.|

<h2 id="tocS_FailedCreateAssociationList">FailedCreateAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemafailedcreateassociationlist"></a>
<a id="schema_FailedCreateAssociationList"></a>
<a id="tocSfailedcreateassociationlist"></a>
<a id="tocsfailedcreateassociationlist"></a>

```json
[
  {
    "Entry": {
      "Name": {},
      "InstanceId": {},
      "Parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "AutomationTargetParameterName": {},
      "DocumentVersion": {},
      "Targets": {},
      "ScheduleExpression": {},
      "OutputLocation": {
        "S3Location": {
          "OutputS3Region": {},
          "OutputS3BucketName": {},
          "OutputS3KeyPrefix": {}
        }
      },
      "AssociationName": {},
      "MaxErrors": {},
      "MaxConcurrency": {},
      "ComplianceSeverity": {},
      "SyncCompliance": {},
      "ApplyOnlyAtCronInterval": {},
      "CalendarNames": {},
      "TargetLocations": {},
      "ScheduleOffset": {},
      "TargetMaps": {},
      "AlarmConfiguration": {
        "IgnorePollAlarmFailure": {},
        "Alarms": {}
      }
    },
    "Message": {},
    "Fault": {}
  }
]
```

<h2 id="tocS_DocumentContent">DocumentContent</h2>
<!-- backwards compatibility -->
<a id="schemadocumentcontent"></a>
<a id="schema_DocumentContent"></a>
<a id="tocSdocumentcontent"></a>
<a id="tocsdocumentcontent"></a>

```json
"string"
```

<h2 id="tocS_DocumentRequiresList">DocumentRequiresList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentrequireslist"></a>
<a id="schema_DocumentRequiresList"></a>
<a id="tocSdocumentrequireslist"></a>
<a id="tocsdocumentrequireslist"></a>

```json
[
  {
    "Name": {},
    "Version": {},
    "RequireType": {},
    "VersionName": {}
  }
]
```

<h2 id="tocS_DocumentDisplayName">DocumentDisplayName</h2>
<!-- backwards compatibility -->
<a id="schemadocumentdisplayname"></a>
<a id="schema_DocumentDisplayName"></a>
<a id="tocSdocumentdisplayname"></a>
<a id="tocsdocumentdisplayname"></a>

```json
"string"
```

<h2 id="tocS_DocumentVersionName">DocumentVersionName</h2>
<!-- backwards compatibility -->
<a id="schemadocumentversionname"></a>
<a id="schema_DocumentVersionName"></a>
<a id="tocSdocumentversionname"></a>
<a id="tocsdocumentversionname"></a>

```json
"string"
```

<h2 id="tocS_DocumentType">DocumentType</h2>
<!-- backwards compatibility -->
<a id="schemadocumenttype"></a>
<a id="schema_DocumentType"></a>
<a id="tocSdocumenttype"></a>
<a id="tocsdocumenttype"></a>

```json
"Command"
```

<h2 id="tocS_DocumentFormat">DocumentFormat</h2>
<!-- backwards compatibility -->
<a id="schemadocumentformat"></a>
<a id="schema_DocumentFormat"></a>
<a id="tocSdocumentformat"></a>
<a id="tocsdocumentformat"></a>

```json
"YAML"
```

<h2 id="tocS_TargetType">TargetType</h2>
<!-- backwards compatibility -->
<a id="schematargettype"></a>
<a id="schema_TargetType"></a>
<a id="tocStargettype"></a>
<a id="tocstargettype"></a>

```json
"string"
```

<h2 id="tocS_DocumentDescription">DocumentDescription</h2>
<!-- backwards compatibility -->
<a id="schemadocumentdescription"></a>
<a id="schema_DocumentDescription"></a>
<a id="tocSdocumentdescription"></a>
<a id="tocsdocumentdescription"></a>

```json
{
  "Sha1": {},
  "Hash": {},
  "HashType": {},
  "Name": {},
  "DisplayName": {},
  "VersionName": {},
  "Owner": {},
  "CreatedDate": {},
  "Status": {},
  "StatusInformation": {},
  "DocumentVersion": {},
  "Description": {},
  "Parameters": {},
  "PlatformTypes": {},
  "DocumentType": {},
  "SchemaVersion": {},
  "LatestVersion": {},
  "DefaultVersion": {},
  "DocumentFormat": {},
  "TargetType": {},
  "Tags": {},
  "AttachmentsInformation": {},
  "Requires": {},
  "Author": {},
  "ReviewInformation": {},
  "ApprovedVersion": {},
  "PendingReviewVersion": {},
  "ReviewStatus": {},
  "Category": {},
  "CategoryEnum": {}
}
```

Describes an Amazon Web Services Systems Manager document (SSM document).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sha1|object|false|none|none|
|Hash|object|false|none|none|
|HashType|object|false|none|none|
|Name|object|false|none|none|
|DisplayName|object|false|none|none|
|VersionName|object|false|none|none|
|Owner|object|false|none|none|
|CreatedDate|object|false|none|none|
|Status|object|false|none|none|
|StatusInformation|object|false|none|none|
|DocumentVersion|object|false|none|none|
|Description|object|false|none|none|
|Parameters|object|false|none|none|
|PlatformTypes|object|false|none|none|
|DocumentType|object|false|none|none|
|SchemaVersion|object|false|none|none|
|LatestVersion|object|false|none|none|
|DefaultVersion|object|false|none|none|
|DocumentFormat|object|false|none|none|
|TargetType|object|false|none|none|
|Tags|object|false|none|none|
|AttachmentsInformation|object|false|none|none|
|Requires|object|false|none|none|
|Author|object|false|none|none|
|ReviewInformation|object|false|none|none|
|ApprovedVersion|object|false|none|none|
|PendingReviewVersion|object|false|none|none|
|ReviewStatus|object|false|none|none|
|Category|object|false|none|none|
|CategoryEnum|object|false|none|none|

<h2 id="tocS_MaintenanceWindowName">MaintenanceWindowName</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowname"></a>
<a id="schema_MaintenanceWindowName"></a>
<a id="tocSmaintenancewindowname"></a>
<a id="tocsmaintenancewindowname"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowDescription">MaintenanceWindowDescription</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowdescription"></a>
<a id="schema_MaintenanceWindowDescription"></a>
<a id="tocSmaintenancewindowdescription"></a>
<a id="tocsmaintenancewindowdescription"></a>

```json
"password"
```

<h2 id="tocS_MaintenanceWindowStringDateTime">MaintenanceWindowStringDateTime</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowstringdatetime"></a>
<a id="schema_MaintenanceWindowStringDateTime"></a>
<a id="tocSmaintenancewindowstringdatetime"></a>
<a id="tocsmaintenancewindowstringdatetime"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowSchedule">MaintenanceWindowSchedule</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowschedule"></a>
<a id="schema_MaintenanceWindowSchedule"></a>
<a id="tocSmaintenancewindowschedule"></a>
<a id="tocsmaintenancewindowschedule"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowTimezone">MaintenanceWindowTimezone</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtimezone"></a>
<a id="schema_MaintenanceWindowTimezone"></a>
<a id="tocSmaintenancewindowtimezone"></a>
<a id="tocsmaintenancewindowtimezone"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowOffset">MaintenanceWindowOffset</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowoffset"></a>
<a id="schema_MaintenanceWindowOffset"></a>
<a id="tocSmaintenancewindowoffset"></a>
<a id="tocsmaintenancewindowoffset"></a>

```json
1
```

<h2 id="tocS_MaintenanceWindowDurationHours">MaintenanceWindowDurationHours</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowdurationhours"></a>
<a id="schema_MaintenanceWindowDurationHours"></a>
<a id="tocSmaintenancewindowdurationhours"></a>
<a id="tocsmaintenancewindowdurationhours"></a>

```json
1
```

<h2 id="tocS_MaintenanceWindowCutoff">MaintenanceWindowCutoff</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowcutoff"></a>
<a id="schema_MaintenanceWindowCutoff"></a>
<a id="tocSmaintenancewindowcutoff"></a>
<a id="tocsmaintenancewindowcutoff"></a>

```json
0
```

<h2 id="tocS_MaintenanceWindowAllowUnassociatedTargets">MaintenanceWindowAllowUnassociatedTargets</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowallowunassociatedtargets"></a>
<a id="schema_MaintenanceWindowAllowUnassociatedTargets"></a>
<a id="tocSmaintenancewindowallowunassociatedtargets"></a>
<a id="tocsmaintenancewindowallowunassociatedtargets"></a>

```json
true
```

<h2 id="tocS_MaintenanceWindowId">MaintenanceWindowId</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowid"></a>
<a id="schema_MaintenanceWindowId"></a>
<a id="tocSmaintenancewindowid"></a>
<a id="tocsmaintenancewindowid"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_OpsItemDescription">OpsItemDescription</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemdescription"></a>
<a id="schema_OpsItemDescription"></a>
<a id="tocSopsitemdescription"></a>
<a id="tocsopsitemdescription"></a>

```json
"string"
```

<h2 id="tocS_OpsItemType">OpsItemType</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemtype"></a>
<a id="schema_OpsItemType"></a>
<a id="tocSopsitemtype"></a>
<a id="tocsopsitemtype"></a>

```json
"string"
```

<h2 id="tocS_OpsItemOperationalData">OpsItemOperationalData</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemoperationaldata"></a>
<a id="schema_OpsItemOperationalData"></a>
<a id="tocSopsitemoperationaldata"></a>
<a id="tocsopsitemoperationaldata"></a>

```json
{
  "property1": {
    "Value": {},
    "Type": {}
  },
  "property2": {
    "Value": {},
    "Type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[OpsItemDataValue](#schemaopsitemdatavalue)|false|none|An object that defines the value of the key and its type in the OperationalData map.|

<h2 id="tocS_OpsItemNotifications">OpsItemNotifications</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemnotifications"></a>
<a id="schema_OpsItemNotifications"></a>
<a id="tocSopsitemnotifications"></a>
<a id="tocsopsitemnotifications"></a>

```json
[
  {
    "Arn": {}
  }
]
```

<h2 id="tocS_OpsItemPriority">OpsItemPriority</h2>
<!-- backwards compatibility -->
<a id="schemaopsitempriority"></a>
<a id="schema_OpsItemPriority"></a>
<a id="tocSopsitempriority"></a>
<a id="tocsopsitempriority"></a>

```json
1
```

<h2 id="tocS_RelatedOpsItems">RelatedOpsItems</h2>
<!-- backwards compatibility -->
<a id="schemarelatedopsitems"></a>
<a id="schema_RelatedOpsItems"></a>
<a id="tocSrelatedopsitems"></a>
<a id="tocsrelatedopsitems"></a>

```json
[
  {
    "OpsItemId": {}
  }
]
```

<h2 id="tocS_OpsItemSource">OpsItemSource</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemsource"></a>
<a id="schema_OpsItemSource"></a>
<a id="tocSopsitemsource"></a>
<a id="tocsopsitemsource"></a>

```json
"string"
```

<h2 id="tocS_OpsItemTitle">OpsItemTitle</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemtitle"></a>
<a id="schema_OpsItemTitle"></a>
<a id="tocSopsitemtitle"></a>
<a id="tocsopsitemtitle"></a>

```json
"string"
```

<h2 id="tocS_OpsItemCategory">OpsItemCategory</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemcategory"></a>
<a id="schema_OpsItemCategory"></a>
<a id="tocSopsitemcategory"></a>
<a id="tocsopsitemcategory"></a>

```json
"string"
```

<h2 id="tocS_OpsItemSeverity">OpsItemSeverity</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemseverity"></a>
<a id="schema_OpsItemSeverity"></a>
<a id="tocSopsitemseverity"></a>
<a id="tocsopsitemseverity"></a>

```json
"string"
```

<h2 id="tocS_OpsItemAccountId">OpsItemAccountId</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemaccountid"></a>
<a id="schema_OpsItemAccountId"></a>
<a id="tocSopsitemaccountid"></a>
<a id="tocsopsitemaccountid"></a>

```json
"string"
```

<h2 id="tocS_OpsItemArn">OpsItemArn</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemarn"></a>
<a id="schema_OpsItemArn"></a>
<a id="tocSopsitemarn"></a>
<a id="tocsopsitemarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_OpsMetadataResourceId">OpsMetadataResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadataresourceid"></a>
<a id="schema_OpsMetadataResourceId"></a>
<a id="tocSopsmetadataresourceid"></a>
<a id="tocsopsmetadataresourceid"></a>

```json
"string"
```

<h2 id="tocS_MetadataMap">MetadataMap</h2>
<!-- backwards compatibility -->
<a id="schemametadatamap"></a>
<a id="schema_MetadataMap"></a>
<a id="tocSmetadatamap"></a>
<a id="tocsmetadatamap"></a>

```json
{
  "property1": {
    "Value": {}
  },
  "property2": {
    "Value": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MetadataValue](#schemametadatavalue)|false|none|Metadata to assign to an Application Manager application.|

<h2 id="tocS_OpsMetadataArn">OpsMetadataArn</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadataarn"></a>
<a id="schema_OpsMetadataArn"></a>
<a id="tocSopsmetadataarn"></a>
<a id="tocsopsmetadataarn"></a>

```json
"string"
```

<h2 id="tocS_ResourceDataSyncName">ResourceDataSyncName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncname"></a>
<a id="schema_ResourceDataSyncName"></a>
<a id="tocSresourcedatasyncname"></a>
<a id="tocsresourcedatasyncname"></a>

```json
"string"
```

<h2 id="tocS_ResourceDataSyncS3Destination">ResourceDataSyncS3Destination</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncs3destination"></a>
<a id="schema_ResourceDataSyncS3Destination"></a>
<a id="tocSresourcedatasyncs3destination"></a>
<a id="tocsresourcedatasyncs3destination"></a>

```json
{
  "BucketName": {},
  "Prefix": {},
  "SyncFormat": {},
  "Region": {},
  "AWSKMSKeyARN": {},
  "DestinationDataSharing": {
    "DestinationDataSharingType": {}
  }
}
```

Information about the target S3 bucket for the resource data sync.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|true|none|none|
|Prefix|object|false|none|none|
|SyncFormat|object|true|none|none|
|Region|object|true|none|none|
|AWSKMSKeyARN|object|false|none|none|
|DestinationDataSharing|object|false|none|none|

<h2 id="tocS_ResourceDataSyncType">ResourceDataSyncType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasynctype"></a>
<a id="schema_ResourceDataSyncType"></a>
<a id="tocSresourcedatasynctype"></a>
<a id="tocsresourcedatasynctype"></a>

```json
"string"
```

<h2 id="tocS_ResourceDataSyncSource">ResourceDataSyncSource</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncsource"></a>
<a id="schema_ResourceDataSyncSource"></a>
<a id="tocSresourcedatasyncsource"></a>
<a id="tocsresourcedatasyncsource"></a>

```json
{
  "SourceType": {},
  "AwsOrganizationsSource": {
    "OrganizationSourceType": {},
    "OrganizationalUnits": {}
  },
  "SourceRegions": {},
  "IncludeFutureRegions": {},
  "EnableAllOpsDataSources": {}
}
```

Information about the source of the data included in the resource data sync.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceType|object|true|none|none|
|AwsOrganizationsSource|object|false|none|none|
|SourceRegions|object|true|none|none|
|IncludeFutureRegions|object|false|none|none|
|EnableAllOpsDataSources|object|false|none|none|

<h2 id="tocS_DefaultBaseline">DefaultBaseline</h2>
<!-- backwards compatibility -->
<a id="schemadefaultbaseline"></a>
<a id="schema_DefaultBaseline"></a>
<a id="tocSdefaultbaseline"></a>
<a id="tocsdefaultbaseline"></a>

```json
true
```

<h2 id="tocS_InventoryItemTypeName">InventoryItemTypeName</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitemtypename"></a>
<a id="schema_InventoryItemTypeName"></a>
<a id="tocSinventoryitemtypename"></a>
<a id="tocsinventoryitemtypename"></a>

```json
"string"
```

<h2 id="tocS_InventorySchemaDeleteOption">InventorySchemaDeleteOption</h2>
<!-- backwards compatibility -->
<a id="schemainventoryschemadeleteoption"></a>
<a id="schema_InventorySchemaDeleteOption"></a>
<a id="tocSinventoryschemadeleteoption"></a>
<a id="tocsinventoryschemadeleteoption"></a>

```json
"DisableSchema"
```

<h2 id="tocS_DryRun">DryRun</h2>
<!-- backwards compatibility -->
<a id="schemadryrun"></a>
<a id="schema_DryRun"></a>
<a id="tocSdryrun"></a>
<a id="tocsdryrun"></a>

```json
true
```

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"string"
```

<h2 id="tocS_InventoryDeletionSummary">InventoryDeletionSummary</h2>
<!-- backwards compatibility -->
<a id="schemainventorydeletionsummary"></a>
<a id="schema_InventoryDeletionSummary"></a>
<a id="tocSinventorydeletionsummary"></a>
<a id="tocsinventorydeletionsummary"></a>

```json
{
  "TotalCount": {},
  "RemainingCount": {},
  "SummaryItems": {}
}
```

Information about the delete operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalCount|object|false|none|none|
|RemainingCount|object|false|none|none|
|SummaryItems|object|false|none|none|

<h2 id="tocS_PSParameterName">PSParameterName</h2>
<!-- backwards compatibility -->
<a id="schemapsparametername"></a>
<a id="schema_PSParameterName"></a>
<a id="tocSpsparametername"></a>
<a id="tocspsparametername"></a>

```json
"string"
```

<h2 id="tocS_ParameterNameList">ParameterNameList</h2>
<!-- backwards compatibility -->
<a id="schemaparameternamelist"></a>
<a id="schema_ParameterNameList"></a>
<a id="tocSparameternamelist"></a>
<a id="tocsparameternamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceArnString">ResourceArnString</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnstring"></a>
<a id="schema_ResourceArnString"></a>
<a id="tocSresourcearnstring"></a>
<a id="tocsresourcearnstring"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_PolicyId">PolicyId</h2>
<!-- backwards compatibility -->
<a id="schemapolicyid"></a>
<a id="schema_PolicyId"></a>
<a id="tocSpolicyid"></a>
<a id="tocspolicyid"></a>

```json
"string"
```

<h2 id="tocS_PolicyHash">PolicyHash</h2>
<!-- backwards compatibility -->
<a id="schemapolicyhash"></a>
<a id="schema_PolicyHash"></a>
<a id="tocSpolicyhash"></a>
<a id="tocspolicyhash"></a>

```json
"string"
```

<h2 id="tocS_ManagedInstanceId">ManagedInstanceId</h2>
<!-- backwards compatibility -->
<a id="schemamanagedinstanceid"></a>
<a id="schema_ManagedInstanceId"></a>
<a id="tocSmanagedinstanceid"></a>
<a id="tocsmanagedinstanceid"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_PatchGroup">PatchGroup</h2>
<!-- backwards compatibility -->
<a id="schemapatchgroup"></a>
<a id="schema_PatchGroup"></a>
<a id="tocSpatchgroup"></a>
<a id="tocspatchgroup"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowTargetId">MaintenanceWindowTargetId</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtargetid"></a>
<a id="schema_MaintenanceWindowTargetId"></a>
<a id="tocSmaintenancewindowtargetid"></a>
<a id="tocsmaintenancewindowtargetid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_MaintenanceWindowTaskId">MaintenanceWindowTaskId</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtaskid"></a>
<a id="schema_MaintenanceWindowTaskId"></a>
<a id="tocSmaintenancewindowtaskid"></a>
<a id="tocsmaintenancewindowtaskid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_DescribeActivationsFilterKeys">DescribeActivationsFilterKeys</h2>
<!-- backwards compatibility -->
<a id="schemadescribeactivationsfilterkeys"></a>
<a id="schema_DescribeActivationsFilterKeys"></a>
<a id="tocSdescribeactivationsfilterkeys"></a>
<a id="tocsdescribeactivationsfilterkeys"></a>

```json
"ActivationIds"
```

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeActivationsFilter">DescribeActivationsFilter</h2>
<!-- backwards compatibility -->
<a id="schemadescribeactivationsfilter"></a>
<a id="schema_DescribeActivationsFilter"></a>
<a id="tocSdescribeactivationsfilter"></a>
<a id="tocsdescribeactivationsfilter"></a>

```json
{
  "FilterKey": {},
  "FilterValues": {}
}
```

Filter for the DescribeActivation API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterKey|object|false|none|none|
|FilterValues|object|false|none|none|

<h2 id="tocS_DescribeActivationsFilterList">DescribeActivationsFilterList</h2>
<!-- backwards compatibility -->
<a id="schemadescribeactivationsfilterlist"></a>
<a id="schema_DescribeActivationsFilterList"></a>
<a id="tocSdescribeactivationsfilterlist"></a>
<a id="tocsdescribeactivationsfilterlist"></a>

```json
[
  {
    "FilterKey": {},
    "FilterValues": {}
  }
]
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

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_StepExecutionFilterList">StepExecutionFilterList</h2>
<!-- backwards compatibility -->
<a id="schemastepexecutionfilterlist"></a>
<a id="schema_StepExecutionFilterList"></a>
<a id="tocSstepexecutionfilterlist"></a>
<a id="tocsstepexecutionfilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_PatchOrchestratorFilterList">PatchOrchestratorFilterList</h2>
<!-- backwards compatibility -->
<a id="schemapatchorchestratorfilterlist"></a>
<a id="schema_PatchOrchestratorFilterList"></a>
<a id="tocSpatchorchestratorfilterlist"></a>
<a id="tocspatchorchestratorfilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_PatchBaselineMaxResults">PatchBaselineMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemapatchbaselinemaxresults"></a>
<a id="schema_PatchBaselineMaxResults"></a>
<a id="tocSpatchbaselinemaxresults"></a>
<a id="tocspatchbaselinemaxresults"></a>

```json
1
```

<h2 id="tocS_PatchList">PatchList</h2>
<!-- backwards compatibility -->
<a id="schemapatchlist"></a>
<a id="schema_PatchList"></a>
<a id="tocSpatchlist"></a>
<a id="tocspatchlist"></a>

```json
[
  {
    "Id": {},
    "ReleaseDate": {},
    "Title": {},
    "Description": {},
    "ContentUrl": {},
    "Vendor": {},
    "ProductFamily": {},
    "Product": {},
    "Classification": {},
    "MsrcSeverity": {},
    "KbNumber": {},
    "MsrcNumber": {},
    "Language": {},
    "AdvisoryIds": {},
    "BugzillaIds": {},
    "CVEIds": {},
    "Name": {},
    "Epoch": {},
    "Version": {},
    "Release": {},
    "Arch": {},
    "Severity": {},
    "Repository": {}
  }
]
```

<h2 id="tocS_DocumentPermissionType">DocumentPermissionType</h2>
<!-- backwards compatibility -->
<a id="schemadocumentpermissiontype"></a>
<a id="schema_DocumentPermissionType"></a>
<a id="tocSdocumentpermissiontype"></a>
<a id="tocsdocumentpermissiontype"></a>

```json
"Share"
```

<h2 id="tocS_DocumentPermissionMaxResults">DocumentPermissionMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemadocumentpermissionmaxresults"></a>
<a id="schema_DocumentPermissionMaxResults"></a>
<a id="tocSdocumentpermissionmaxresults"></a>
<a id="tocsdocumentpermissionmaxresults"></a>

```json
1
```

<h2 id="tocS_EffectiveInstanceAssociationMaxResults">EffectiveInstanceAssociationMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaeffectiveinstanceassociationmaxresults"></a>
<a id="schema_EffectiveInstanceAssociationMaxResults"></a>
<a id="tocSeffectiveinstanceassociationmaxresults"></a>
<a id="tocseffectiveinstanceassociationmaxresults"></a>

```json
1
```

<h2 id="tocS_InstanceAssociationList">InstanceAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemainstanceassociationlist"></a>
<a id="schema_InstanceAssociationList"></a>
<a id="tocSinstanceassociationlist"></a>
<a id="tocsinstanceassociationlist"></a>

```json
[
  {
    "AssociationId": {},
    "InstanceId": {},
    "Content": {},
    "AssociationVersion": {}
  }
]
```

<h2 id="tocS_EffectivePatchList">EffectivePatchList</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivepatchlist"></a>
<a id="schema_EffectivePatchList"></a>
<a id="tocSeffectivepatchlist"></a>
<a id="tocseffectivepatchlist"></a>

```json
[
  {
    "Patch": {
      "Id": {},
      "ReleaseDate": {},
      "Title": {},
      "Description": {},
      "ContentUrl": {},
      "Vendor": {},
      "ProductFamily": {},
      "Product": {},
      "Classification": {},
      "MsrcSeverity": {},
      "KbNumber": {},
      "MsrcNumber": {},
      "Language": {},
      "AdvisoryIds": {},
      "BugzillaIds": {},
      "CVEIds": {},
      "Name": {},
      "Epoch": {},
      "Version": {},
      "Release": {},
      "Arch": {},
      "Severity": {},
      "Repository": {}
    },
    "PatchStatus": {
      "DeploymentStatus": {},
      "ComplianceLevel": {},
      "ApprovalDate": {}
    }
  }
]
```

<h2 id="tocS_InstanceAssociationStatusInfos">InstanceAssociationStatusInfos</h2>
<!-- backwards compatibility -->
<a id="schemainstanceassociationstatusinfos"></a>
<a id="schema_InstanceAssociationStatusInfos"></a>
<a id="tocSinstanceassociationstatusinfos"></a>
<a id="tocsinstanceassociationstatusinfos"></a>

```json
[
  {
    "AssociationId": {},
    "Name": {},
    "DocumentVersion": {},
    "AssociationVersion": {},
    "InstanceId": {},
    "ExecutionDate": {},
    "Status": {},
    "DetailedStatus": {},
    "ExecutionSummary": {},
    "ErrorCode": {},
    "OutputUrl": {
      "S3OutputUrl": {
        "OutputUrl": {}
      }
    },
    "AssociationName": {}
  }
]
```

<h2 id="tocS_InstanceInformationFilterList">InstanceInformationFilterList</h2>
<!-- backwards compatibility -->
<a id="schemainstanceinformationfilterlist"></a>
<a id="schema_InstanceInformationFilterList"></a>
<a id="tocSinstanceinformationfilterlist"></a>
<a id="tocsinstanceinformationfilterlist"></a>

```json
[
  {
    "key": {},
    "valueSet": {}
  }
]
```

<h2 id="tocS_InstanceInformationStringFilterList">InstanceInformationStringFilterList</h2>
<!-- backwards compatibility -->
<a id="schemainstanceinformationstringfilterlist"></a>
<a id="schema_InstanceInformationStringFilterList"></a>
<a id="tocSinstanceinformationstringfilterlist"></a>
<a id="tocsinstanceinformationstringfilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_MaxResultsEC2Compatible">MaxResultsEC2Compatible</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsec2compatible"></a>
<a id="schema_MaxResultsEC2Compatible"></a>
<a id="tocSmaxresultsec2compatible"></a>
<a id="tocsmaxresultsec2compatible"></a>

```json
5
```

<h2 id="tocS_InstanceInformationList">InstanceInformationList</h2>
<!-- backwards compatibility -->
<a id="schemainstanceinformationlist"></a>
<a id="schema_InstanceInformationList"></a>
<a id="tocSinstanceinformationlist"></a>
<a id="tocsinstanceinformationlist"></a>

```json
[
  {
    "InstanceId": {},
    "PingStatus": {},
    "LastPingDateTime": {},
    "AgentVersion": {},
    "IsLatestVersion": {},
    "PlatformType": {},
    "PlatformName": {},
    "PlatformVersion": {},
    "ActivationId": {},
    "IamRole": {},
    "RegistrationDate": {},
    "ResourceType": {},
    "Name": {},
    "IPAddress": {},
    "ComputerName": {},
    "AssociationStatus": {},
    "LastAssociationExecutionDate": {},
    "LastSuccessfulAssociationExecutionDate": {},
    "AssociationOverview": {
      "DetailedStatus": {},
      "InstanceAssociationStatusAggregatedCount": {
        "property1": 0,
        "property2": 0
      }
    },
    "SourceId": {},
    "SourceType": {}
  }
]
```

<h2 id="tocS_InstancePatchStateFilterList">InstancePatchStateFilterList</h2>
<!-- backwards compatibility -->
<a id="schemainstancepatchstatefilterlist"></a>
<a id="schema_InstancePatchStateFilterList"></a>
<a id="tocSinstancepatchstatefilterlist"></a>
<a id="tocsinstancepatchstatefilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {},
    "Type": {}
  }
]
```

<h2 id="tocS_PatchComplianceMaxResults">PatchComplianceMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemapatchcompliancemaxresults"></a>
<a id="schema_PatchComplianceMaxResults"></a>
<a id="tocSpatchcompliancemaxresults"></a>
<a id="tocspatchcompliancemaxresults"></a>

```json
10
```

<h2 id="tocS_InstancePatchStatesList">InstancePatchStatesList</h2>
<!-- backwards compatibility -->
<a id="schemainstancepatchstateslist"></a>
<a id="schema_InstancePatchStatesList"></a>
<a id="tocSinstancepatchstateslist"></a>
<a id="tocsinstancepatchstateslist"></a>

```json
[
  {
    "InstanceId": {},
    "PatchGroup": {},
    "BaselineId": {},
    "SnapshotId": {},
    "InstallOverrideList": {},
    "OwnerInformation": {},
    "InstalledCount": {},
    "InstalledOtherCount": {},
    "InstalledPendingRebootCount": {},
    "InstalledRejectedCount": {},
    "MissingCount": {},
    "FailedCount": {},
    "UnreportedNotApplicableCount": {},
    "NotApplicableCount": {},
    "OperationStartTime": {},
    "OperationEndTime": {},
    "Operation": {},
    "LastNoRebootInstallOperationTime": {},
    "RebootOption": {},
    "CriticalNonCompliantCount": {},
    "SecurityNonCompliantCount": {},
    "OtherNonCompliantCount": {}
  }
]
```

<h2 id="tocS_InstancePatchStateList">InstancePatchStateList</h2>
<!-- backwards compatibility -->
<a id="schemainstancepatchstatelist"></a>
<a id="schema_InstancePatchStateList"></a>
<a id="tocSinstancepatchstatelist"></a>
<a id="tocsinstancepatchstatelist"></a>

```json
[
  {
    "InstanceId": {},
    "PatchGroup": {},
    "BaselineId": {},
    "SnapshotId": {},
    "InstallOverrideList": {},
    "OwnerInformation": {},
    "InstalledCount": {},
    "InstalledOtherCount": {},
    "InstalledPendingRebootCount": {},
    "InstalledRejectedCount": {},
    "MissingCount": {},
    "FailedCount": {},
    "UnreportedNotApplicableCount": {},
    "NotApplicableCount": {},
    "OperationStartTime": {},
    "OperationEndTime": {},
    "Operation": {},
    "LastNoRebootInstallOperationTime": {},
    "RebootOption": {},
    "CriticalNonCompliantCount": {},
    "SecurityNonCompliantCount": {},
    "OtherNonCompliantCount": {}
  }
]
```

<h2 id="tocS_PatchComplianceDataList">PatchComplianceDataList</h2>
<!-- backwards compatibility -->
<a id="schemapatchcompliancedatalist"></a>
<a id="schema_PatchComplianceDataList"></a>
<a id="tocSpatchcompliancedatalist"></a>
<a id="tocspatchcompliancedatalist"></a>

```json
[
  {
    "Title": {},
    "KBId": {},
    "Classification": {},
    "Severity": {},
    "State": {},
    "InstalledTime": {},
    "CVEIds": {}
  }
]
```

<h2 id="tocS_InventoryDeletionsList">InventoryDeletionsList</h2>
<!-- backwards compatibility -->
<a id="schemainventorydeletionslist"></a>
<a id="schema_InventoryDeletionsList"></a>
<a id="tocSinventorydeletionslist"></a>
<a id="tocsinventorydeletionslist"></a>

```json
[
  {
    "DeletionId": {},
    "TypeName": {},
    "DeletionStartTime": {},
    "LastStatus": {},
    "LastStatusMessage": {},
    "DeletionSummary": {
      "TotalCount": {},
      "RemainingCount": {},
      "SummaryItems": {}
    },
    "LastStatusUpdateTime": {}
  }
]
```

<h2 id="tocS_MaintenanceWindowExecutionTaskId">MaintenanceWindowExecutionTaskId</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecutiontaskid"></a>
<a id="schema_MaintenanceWindowExecutionTaskId"></a>
<a id="tocSmaintenancewindowexecutiontaskid"></a>
<a id="tocsmaintenancewindowexecutiontaskid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_MaintenanceWindowFilterList">MaintenanceWindowFilterList</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowfilterlist"></a>
<a id="schema_MaintenanceWindowFilterList"></a>
<a id="tocSmaintenancewindowfilterlist"></a>
<a id="tocsmaintenancewindowfilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_MaintenanceWindowMaxResults">MaintenanceWindowMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowmaxresults"></a>
<a id="schema_MaintenanceWindowMaxResults"></a>
<a id="tocSmaintenancewindowmaxresults"></a>
<a id="tocsmaintenancewindowmaxresults"></a>

```json
10
```

<h2 id="tocS_MaintenanceWindowExecutionTaskInvocationIdentityList">MaintenanceWindowExecutionTaskInvocationIdentityList</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecutiontaskinvocationidentitylist"></a>
<a id="schema_MaintenanceWindowExecutionTaskInvocationIdentityList"></a>
<a id="tocSmaintenancewindowexecutiontaskinvocationidentitylist"></a>
<a id="tocsmaintenancewindowexecutiontaskinvocationidentitylist"></a>

```json
[
  {
    "WindowExecutionId": {},
    "TaskExecutionId": {},
    "InvocationId": {},
    "ExecutionId": {},
    "TaskType": {},
    "Parameters": {},
    "Status": {},
    "StatusDetails": {},
    "StartTime": {},
    "EndTime": {},
    "OwnerInformation": {},
    "WindowTargetId": {}
  }
]
```

<h2 id="tocS_MaintenanceWindowExecutionTaskIdentityList">MaintenanceWindowExecutionTaskIdentityList</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecutiontaskidentitylist"></a>
<a id="schema_MaintenanceWindowExecutionTaskIdentityList"></a>
<a id="tocSmaintenancewindowexecutiontaskidentitylist"></a>
<a id="tocsmaintenancewindowexecutiontaskidentitylist"></a>

```json
[
  {
    "WindowExecutionId": {},
    "TaskExecutionId": {},
    "Status": {},
    "StatusDetails": {},
    "StartTime": {},
    "EndTime": {},
    "TaskArn": {},
    "TaskType": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    },
    "TriggeredAlarms": {}
  }
]
```

<h2 id="tocS_MaintenanceWindowExecutionList">MaintenanceWindowExecutionList</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecutionlist"></a>
<a id="schema_MaintenanceWindowExecutionList"></a>
<a id="tocSmaintenancewindowexecutionlist"></a>
<a id="tocsmaintenancewindowexecutionlist"></a>

```json
[
  {
    "WindowId": {},
    "WindowExecutionId": {},
    "Status": {},
    "StatusDetails": {},
    "StartTime": {},
    "EndTime": {}
  }
]
```

<h2 id="tocS_MaintenanceWindowResourceType">MaintenanceWindowResourceType</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowresourcetype"></a>
<a id="schema_MaintenanceWindowResourceType"></a>
<a id="tocSmaintenancewindowresourcetype"></a>
<a id="tocsmaintenancewindowresourcetype"></a>

```json
"INSTANCE"
```

<h2 id="tocS_MaintenanceWindowSearchMaxResults">MaintenanceWindowSearchMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowsearchmaxresults"></a>
<a id="schema_MaintenanceWindowSearchMaxResults"></a>
<a id="tocSmaintenancewindowsearchmaxresults"></a>
<a id="tocsmaintenancewindowsearchmaxresults"></a>

```json
1
```

<h2 id="tocS_ScheduledWindowExecutionList">ScheduledWindowExecutionList</h2>
<!-- backwards compatibility -->
<a id="schemascheduledwindowexecutionlist"></a>
<a id="schema_ScheduledWindowExecutionList"></a>
<a id="tocSscheduledwindowexecutionlist"></a>
<a id="tocsscheduledwindowexecutionlist"></a>

```json
[
  {
    "WindowId": {},
    "Name": {},
    "ExecutionTime": {}
  }
]
```

<h2 id="tocS_MaintenanceWindowTargetList">MaintenanceWindowTargetList</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtargetlist"></a>
<a id="schema_MaintenanceWindowTargetList"></a>
<a id="tocSmaintenancewindowtargetlist"></a>
<a id="tocsmaintenancewindowtargetlist"></a>

```json
[
  {
    "WindowId": {},
    "WindowTargetId": {},
    "ResourceType": {},
    "Targets": {},
    "OwnerInformation": {},
    "Name": {},
    "Description": {}
  }
]
```

<h2 id="tocS_MaintenanceWindowTaskList">MaintenanceWindowTaskList</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtasklist"></a>
<a id="schema_MaintenanceWindowTaskList"></a>
<a id="tocSmaintenancewindowtasklist"></a>
<a id="tocsmaintenancewindowtasklist"></a>

```json
[
  {
    "WindowId": {},
    "WindowTaskId": {},
    "TaskArn": {},
    "Type": {},
    "Targets": {},
    "TaskParameters": {
      "property1": {
        "Values": {}
      },
      "property2": {
        "Values": {}
      }
    },
    "Priority": {},
    "LoggingInfo": {
      "S3BucketName": {},
      "S3KeyPrefix": {},
      "S3Region": {}
    },
    "ServiceRoleArn": {},
    "MaxConcurrency": {},
    "MaxErrors": {},
    "Name": {},
    "Description": {},
    "CutoffBehavior": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    }
  }
]
```

<h2 id="tocS_MaintenanceWindowsForTargetList">MaintenanceWindowsForTargetList</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowsfortargetlist"></a>
<a id="schema_MaintenanceWindowsForTargetList"></a>
<a id="tocSmaintenancewindowsfortargetlist"></a>
<a id="tocsmaintenancewindowsfortargetlist"></a>

```json
[
  {
    "WindowId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_MaintenanceWindowIdentityList">MaintenanceWindowIdentityList</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowidentitylist"></a>
<a id="schema_MaintenanceWindowIdentityList"></a>
<a id="tocSmaintenancewindowidentitylist"></a>
<a id="tocsmaintenancewindowidentitylist"></a>

```json
[
  {
    "WindowId": {},
    "Name": {},
    "Description": {},
    "Enabled": {},
    "Duration": {},
    "Cutoff": {},
    "Schedule": {},
    "ScheduleTimezone": {},
    "ScheduleOffset": {},
    "EndDate": {},
    "StartDate": {},
    "NextExecutionTime": {}
  }
]
```

<h2 id="tocS_OpsItemFilters">OpsItemFilters</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemfilters"></a>
<a id="schema_OpsItemFilters"></a>
<a id="tocSopsitemfilters"></a>
<a id="tocsopsitemfilters"></a>

```json
[
  {
    "Key": {},
    "Values": {},
    "Operator": {}
  }
]
```

<h2 id="tocS_OpsItemMaxResults">OpsItemMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemmaxresults"></a>
<a id="schema_OpsItemMaxResults"></a>
<a id="tocSopsitemmaxresults"></a>
<a id="tocsopsitemmaxresults"></a>

```json
1
```

<h2 id="tocS_OpsItemSummaries">OpsItemSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemsummaries"></a>
<a id="schema_OpsItemSummaries"></a>
<a id="tocSopsitemsummaries"></a>
<a id="tocsopsitemsummaries"></a>

```json
[
  {
    "CreatedBy": {},
    "CreatedTime": {},
    "LastModifiedBy": {},
    "LastModifiedTime": {},
    "Priority": {},
    "Source": {},
    "Status": {},
    "OpsItemId": {},
    "Title": {},
    "OperationalData": {
      "property1": {
        "Value": {},
        "Type": {}
      },
      "property2": {
        "Value": {},
        "Type": {}
      }
    },
    "Category": {},
    "Severity": {},
    "OpsItemType": {},
    "ActualStartTime": {},
    "ActualEndTime": {},
    "PlannedStartTime": {},
    "PlannedEndTime": {}
  }
]
```

<h2 id="tocS_ParametersFilterList">ParametersFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaparametersfilterlist"></a>
<a id="schema_ParametersFilterList"></a>
<a id="tocSparametersfilterlist"></a>
<a id="tocsparametersfilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_ParameterStringFilterList">ParameterStringFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaparameterstringfilterlist"></a>
<a id="schema_ParameterStringFilterList"></a>
<a id="tocSparameterstringfilterlist"></a>
<a id="tocsparameterstringfilterlist"></a>

```json
[
  {
    "Key": {},
    "Option": {},
    "Values": {}
  }
]
```

<h2 id="tocS_ParameterMetadataList">ParameterMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemaparametermetadatalist"></a>
<a id="schema_ParameterMetadataList"></a>
<a id="tocSparametermetadatalist"></a>
<a id="tocsparametermetadatalist"></a>

```json
[
  {
    "Name": {},
    "Type": {},
    "KeyId": {},
    "LastModifiedDate": {},
    "LastModifiedUser": {},
    "Description": {},
    "AllowedPattern": {},
    "Version": {},
    "Tier": {},
    "Policies": {},
    "DataType": {}
  }
]
```

<h2 id="tocS_PatchBaselineIdentityList">PatchBaselineIdentityList</h2>
<!-- backwards compatibility -->
<a id="schemapatchbaselineidentitylist"></a>
<a id="schema_PatchBaselineIdentityList"></a>
<a id="tocSpatchbaselineidentitylist"></a>
<a id="tocspatchbaselineidentitylist"></a>

```json
[
  {
    "BaselineId": {},
    "BaselineName": {},
    "OperatingSystem": {},
    "BaselineDescription": {},
    "DefaultBaseline": {}
  }
]
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

<h2 id="tocS_InstancesCount">InstancesCount</h2>
<!-- backwards compatibility -->
<a id="schemainstancescount"></a>
<a id="schema_InstancesCount"></a>
<a id="tocSinstancescount"></a>
<a id="tocsinstancescount"></a>

```json
0
```

<h2 id="tocS_PatchGroupPatchBaselineMappingList">PatchGroupPatchBaselineMappingList</h2>
<!-- backwards compatibility -->
<a id="schemapatchgrouppatchbaselinemappinglist"></a>
<a id="schema_PatchGroupPatchBaselineMappingList"></a>
<a id="tocSpatchgrouppatchbaselinemappinglist"></a>
<a id="tocspatchgrouppatchbaselinemappinglist"></a>

```json
[
  {
    "PatchGroup": {},
    "BaselineIdentity": {
      "BaselineId": {},
      "BaselineName": {},
      "OperatingSystem": {},
      "BaselineDescription": {},
      "DefaultBaseline": {}
    }
  }
]
```

<h2 id="tocS_PatchProperty">PatchProperty</h2>
<!-- backwards compatibility -->
<a id="schemapatchproperty"></a>
<a id="schema_PatchProperty"></a>
<a id="tocSpatchproperty"></a>
<a id="tocspatchproperty"></a>

```json
"PRODUCT"
```

<h2 id="tocS_PatchSet">PatchSet</h2>
<!-- backwards compatibility -->
<a id="schemapatchset"></a>
<a id="schema_PatchSet"></a>
<a id="tocSpatchset"></a>
<a id="tocspatchset"></a>

```json
"OS"
```

<h2 id="tocS_PatchPropertiesList">PatchPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemapatchpropertieslist"></a>
<a id="schema_PatchPropertiesList"></a>
<a id="tocSpatchpropertieslist"></a>
<a id="tocspatchpropertieslist"></a>

```json
[
  {
    "property1": "string",
    "property2": "string"
  }
]
```

<h2 id="tocS_SessionState">SessionState</h2>
<!-- backwards compatibility -->
<a id="schemasessionstate"></a>
<a id="schema_SessionState"></a>
<a id="tocSsessionstate"></a>
<a id="tocssessionstate"></a>

```json
"Active"
```

<h2 id="tocS_SessionMaxResults">SessionMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemasessionmaxresults"></a>
<a id="schema_SessionMaxResults"></a>
<a id="tocSsessionmaxresults"></a>
<a id="tocssessionmaxresults"></a>

```json
1
```

<h2 id="tocS_SessionFilterList">SessionFilterList</h2>
<!-- backwards compatibility -->
<a id="schemasessionfilterlist"></a>
<a id="schema_SessionFilterList"></a>
<a id="tocSsessionfilterlist"></a>
<a id="tocssessionfilterlist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_SessionList">SessionList</h2>
<!-- backwards compatibility -->
<a id="schemasessionlist"></a>
<a id="schema_SessionList"></a>
<a id="tocSsessionlist"></a>
<a id="tocssessionlist"></a>

```json
[
  {
    "SessionId": {},
    "Target": {},
    "Status": {},
    "StartDate": {},
    "EndDate": {},
    "DocumentName": {},
    "Owner": {},
    "Reason": {},
    "Details": {},
    "OutputUrl": {
      "S3OutputUrl": {},
      "CloudWatchOutputUrl": {}
    },
    "MaxSessionDuration": {}
  }
]
```

<h2 id="tocS_DescriptionInDocument">DescriptionInDocument</h2>
<!-- backwards compatibility -->
<a id="schemadescriptionindocument"></a>
<a id="schema_DescriptionInDocument"></a>
<a id="tocSdescriptionindocument"></a>
<a id="tocsdescriptionindocument"></a>

```json
"string"
```

<h2 id="tocS_DocumentAuthor">DocumentAuthor</h2>
<!-- backwards compatibility -->
<a id="schemadocumentauthor"></a>
<a id="schema_DocumentAuthor"></a>
<a id="tocSdocumentauthor"></a>
<a id="tocsdocumentauthor"></a>

```json
"string"
```

<h2 id="tocS_DocumentDefaultVersionDescription">DocumentDefaultVersionDescription</h2>
<!-- backwards compatibility -->
<a id="schemadocumentdefaultversiondescription"></a>
<a id="schema_DocumentDefaultVersionDescription"></a>
<a id="tocSdocumentdefaultversiondescription"></a>
<a id="tocsdocumentdefaultversiondescription"></a>

```json
{
  "Name": {},
  "DefaultVersion": {},
  "DefaultVersionName": {}
}
```

A default version of a document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|DefaultVersion|object|false|none|none|
|DefaultVersionName|object|false|none|none|

<h2 id="tocS_DocumentSha1">DocumentSha1</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsha1"></a>
<a id="schema_DocumentSha1"></a>
<a id="tocSdocumentsha1"></a>
<a id="tocsdocumentsha1"></a>

```json
"string"
```

<h2 id="tocS_DocumentHash">DocumentHash</h2>
<!-- backwards compatibility -->
<a id="schemadocumenthash"></a>
<a id="schema_DocumentHash"></a>
<a id="tocSdocumenthash"></a>
<a id="tocsdocumenthash"></a>

```json
"string"
```

<h2 id="tocS_DocumentHashType">DocumentHashType</h2>
<!-- backwards compatibility -->
<a id="schemadocumenthashtype"></a>
<a id="schema_DocumentHashType"></a>
<a id="tocSdocumenthashtype"></a>
<a id="tocsdocumenthashtype"></a>

```json
"Sha256"
```

<h2 id="tocS_DocumentOwner">DocumentOwner</h2>
<!-- backwards compatibility -->
<a id="schemadocumentowner"></a>
<a id="schema_DocumentOwner"></a>
<a id="tocSdocumentowner"></a>
<a id="tocsdocumentowner"></a>

```json
"string"
```

<h2 id="tocS_DocumentStatus">DocumentStatus</h2>
<!-- backwards compatibility -->
<a id="schemadocumentstatus"></a>
<a id="schema_DocumentStatus"></a>
<a id="tocSdocumentstatus"></a>
<a id="tocsdocumentstatus"></a>

```json
"Creating"
```

The status of a document.

<h2 id="tocS_DocumentStatusInformation">DocumentStatusInformation</h2>
<!-- backwards compatibility -->
<a id="schemadocumentstatusinformation"></a>
<a id="schema_DocumentStatusInformation"></a>
<a id="tocSdocumentstatusinformation"></a>
<a id="tocsdocumentstatusinformation"></a>

```json
"string"
```

<h2 id="tocS_DocumentParameterList">DocumentParameterList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentparameterlist"></a>
<a id="schema_DocumentParameterList"></a>
<a id="tocSdocumentparameterlist"></a>
<a id="tocsdocumentparameterlist"></a>

```json
[
  {
    "Name": {},
    "Type": {},
    "Description": {},
    "DefaultValue": {}
  }
]
```

<h2 id="tocS_PlatformTypeList">PlatformTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaplatformtypelist"></a>
<a id="schema_PlatformTypeList"></a>
<a id="tocSplatformtypelist"></a>
<a id="tocsplatformtypelist"></a>

```json
[
  "Windows"
]
```

<h2 id="tocS_DocumentSchemaVersion">DocumentSchemaVersion</h2>
<!-- backwards compatibility -->
<a id="schemadocumentschemaversion"></a>
<a id="schema_DocumentSchemaVersion"></a>
<a id="tocSdocumentschemaversion"></a>
<a id="tocsdocumentschemaversion"></a>

```json
"string"
```

<h2 id="tocS_ReviewInformationList">ReviewInformationList</h2>
<!-- backwards compatibility -->
<a id="schemareviewinformationlist"></a>
<a id="schema_ReviewInformationList"></a>
<a id="tocSreviewinformationlist"></a>
<a id="tocsreviewinformationlist"></a>

```json
[
  {
    "ReviewedTime": {},
    "Status": {},
    "Reviewer": {}
  }
]
```

<h2 id="tocS_ReviewStatus">ReviewStatus</h2>
<!-- backwards compatibility -->
<a id="schemareviewstatus"></a>
<a id="schema_ReviewStatus"></a>
<a id="tocSreviewstatus"></a>
<a id="tocsreviewstatus"></a>

```json
"APPROVED"
```

<h2 id="tocS_DocumentFilterKey">DocumentFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemadocumentfilterkey"></a>
<a id="schema_DocumentFilterKey"></a>
<a id="tocSdocumentfilterkey"></a>
<a id="tocsdocumentfilterkey"></a>

```json
"Name"
```

<h2 id="tocS_DocumentFilterValue">DocumentFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemadocumentfiltervalue"></a>
<a id="schema_DocumentFilterValue"></a>
<a id="tocSdocumentfiltervalue"></a>
<a id="tocsdocumentfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_DocumentFilter">DocumentFilter</h2>
<!-- backwards compatibility -->
<a id="schemadocumentfilter"></a>
<a id="schema_DocumentFilter"></a>
<a id="tocSdocumentfilter"></a>
<a id="tocsdocumentfilter"></a>

```json
{
  "key": {},
  "value": {}
}
```

This data type is deprecated. Instead, use <a>DocumentKeyValuesFilter</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_DocumentFilterList">DocumentFilterList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentfilterlist"></a>
<a id="schema_DocumentFilterList"></a>
<a id="tocSdocumentfilterlist"></a>
<a id="tocsdocumentfilterlist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_DocumentIdentifier">DocumentIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemadocumentidentifier"></a>
<a id="schema_DocumentIdentifier"></a>
<a id="tocSdocumentidentifier"></a>
<a id="tocsdocumentidentifier"></a>

```json
{
  "Name": {},
  "CreatedDate": {},
  "DisplayName": {},
  "Owner": {},
  "VersionName": {},
  "PlatformTypes": {},
  "DocumentVersion": {},
  "DocumentType": {},
  "SchemaVersion": {},
  "DocumentFormat": {},
  "TargetType": {},
  "Tags": {},
  "Requires": {},
  "ReviewStatus": {},
  "Author": {}
}
```

Describes the name of a SSM document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|CreatedDate|object|false|none|none|
|DisplayName|object|false|none|none|
|Owner|object|false|none|none|
|VersionName|object|false|none|none|
|PlatformTypes|object|false|none|none|
|DocumentVersion|object|false|none|none|
|DocumentType|object|false|none|none|
|SchemaVersion|object|false|none|none|
|DocumentFormat|object|false|none|none|
|TargetType|object|false|none|none|
|Tags|object|false|none|none|
|Requires|object|false|none|none|
|ReviewStatus|object|false|none|none|
|Author|object|false|none|none|

<h2 id="tocS_DocumentIdentifierList">DocumentIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentidentifierlist"></a>
<a id="schema_DocumentIdentifierList"></a>
<a id="tocSdocumentidentifierlist"></a>
<a id="tocsdocumentidentifierlist"></a>

```json
[
  {
    "Name": {},
    "CreatedDate": {},
    "DisplayName": {},
    "Owner": {},
    "VersionName": {},
    "PlatformTypes": {},
    "DocumentVersion": {},
    "DocumentType": {},
    "SchemaVersion": {},
    "DocumentFormat": {},
    "TargetType": {},
    "Tags": {},
    "Requires": {},
    "ReviewStatus": {},
    "Author": {}
  }
]
```

<h2 id="tocS_DocumentKeyValuesFilterKey">DocumentKeyValuesFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemadocumentkeyvaluesfilterkey"></a>
<a id="schema_DocumentKeyValuesFilterKey"></a>
<a id="tocSdocumentkeyvaluesfilterkey"></a>
<a id="tocsdocumentkeyvaluesfilterkey"></a>

```json
"string"
```

<h2 id="tocS_DocumentKeyValuesFilterValues">DocumentKeyValuesFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemadocumentkeyvaluesfiltervalues"></a>
<a id="schema_DocumentKeyValuesFilterValues"></a>
<a id="tocSdocumentkeyvaluesfiltervalues"></a>
<a id="tocsdocumentkeyvaluesfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DocumentKeyValuesFilter">DocumentKeyValuesFilter</h2>
<!-- backwards compatibility -->
<a id="schemadocumentkeyvaluesfilter"></a>
<a id="schema_DocumentKeyValuesFilter"></a>
<a id="tocSdocumentkeyvaluesfilter"></a>
<a id="tocsdocumentkeyvaluesfilter"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

<p>One or more filters. Use a filter to return a more specific list of documents.</p> <p>For keys, you can specify one or more tags that have been applied to a document. </p> <p>You can also use Amazon Web Services-provided keys, some of which have specific allowed values. These keys and their associated values are as follows:</p> <dl> <dt>DocumentType</dt> <dd> <ul> <li> <p> <code>ApplicationConfiguration</code> </p> </li> <li> <p> <code>ApplicationConfigurationSchema</code> </p> </li> <li> <p> <code>Automation</code> </p> </li> <li> <p> <code>ChangeCalendar</code> </p> </li> <li> <p> <code>Command</code> </p> </li> <li> <p> <code>Package</code> </p> </li> <li> <p> <code>Policy</code> </p> </li> <li> <p> <code>Session</code> </p> </li> </ul> </dd> <dt>Owner</dt> <dd> <p>Note that only one <code>Owner</code> can be specified in a request. For example: <code>Key=Owner,Values=Self</code>.</p> <ul> <li> <p> <code>Amazon</code> </p> </li> <li> <p> <code>Private</code> </p> </li> <li> <p> <code>Public</code> </p> </li> <li> <p> <code>Self</code> </p> </li> <li> <p> <code>ThirdParty</code> </p> </li> </ul> </dd> <dt>PlatformTypes</dt> <dd> <ul> <li> <p> <code>Linux</code> </p> </li> <li> <p> <code>Windows</code> </p> </li> </ul> </dd> </dl> <p> <code>Name</code> is another Amazon Web Services-provided key. If you use <code>Name</code> as a key, you can use a name prefix to return a list of documents. For example, in the Amazon Web Services CLI, to return a list of all documents that begin with <code>Te</code>, run the following command:</p> <p> <code>aws ssm list-documents --filters Key=Name,Values=Te</code> </p> <p>You can also use the <code>TargetType</code> Amazon Web Services-provided key. For a list of valid resource type values that can be used with this key, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the <i>CloudFormation User Guide</i>.</p> <p>If you specify more than two keys, only documents that are identified by all the tags are returned in the results. If you specify more than two values for a key, documents that are identified by any of the values are returned in the results.</p> <p>To specify a custom key-value pair, use the format <code>Key=tag:tagName,Values=valueName</code>.</p> <p>For example, if you created a key called region and are using the Amazon Web Services CLI to call the <code>list-documents</code> command: </p> <p> <code>aws ssm list-documents --filters Key=tag:region,Values=east,west Key=Owner,Values=Self</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_DocumentKeyValuesFilterList">DocumentKeyValuesFilterList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentkeyvaluesfilterlist"></a>
<a id="schema_DocumentKeyValuesFilterList"></a>
<a id="tocSdocumentkeyvaluesfilterlist"></a>
<a id="tocsdocumentkeyvaluesfilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_DocumentKeyValuesFilterValue">DocumentKeyValuesFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemadocumentkeyvaluesfiltervalue"></a>
<a id="schema_DocumentKeyValuesFilterValue"></a>
<a id="tocSdocumentkeyvaluesfiltervalue"></a>
<a id="tocsdocumentkeyvaluesfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_DocumentMetadataEnum">DocumentMetadataEnum</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmetadataenum"></a>
<a id="schema_DocumentMetadataEnum"></a>
<a id="tocSdocumentmetadataenum"></a>
<a id="tocsdocumentmetadataenum"></a>

```json
"DocumentReviews"
```

<h2 id="tocS_DocumentReviewerResponseList">DocumentReviewerResponseList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentreviewerresponselist"></a>
<a id="schema_DocumentReviewerResponseList"></a>
<a id="tocSdocumentreviewerresponselist"></a>
<a id="tocsdocumentreviewerresponselist"></a>

```json
[
  {
    "CreateTime": {},
    "UpdatedTime": {},
    "ReviewStatus": {},
    "Comment": {},
    "Reviewer": {}
  }
]
```

<h2 id="tocS_DocumentMetadataResponseInfo">DocumentMetadataResponseInfo</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmetadataresponseinfo"></a>
<a id="schema_DocumentMetadataResponseInfo"></a>
<a id="tocSdocumentmetadataresponseinfo"></a>
<a id="tocsdocumentmetadataresponseinfo"></a>

```json
{
  "ReviewerResponse": {}
}
```

Details about the response to a document review request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReviewerResponse|object|false|none|none|

<h2 id="tocS_DocumentParameterName">DocumentParameterName</h2>
<!-- backwards compatibility -->
<a id="schemadocumentparametername"></a>
<a id="schema_DocumentParameterName"></a>
<a id="tocSdocumentparametername"></a>
<a id="tocsdocumentparametername"></a>

```json
"string"
```

<h2 id="tocS_DocumentParameterType">DocumentParameterType</h2>
<!-- backwards compatibility -->
<a id="schemadocumentparametertype"></a>
<a id="schema_DocumentParameterType"></a>
<a id="tocSdocumentparametertype"></a>
<a id="tocsdocumentparametertype"></a>

```json
"String"
```

<h2 id="tocS_DocumentParameterDescrption">DocumentParameterDescrption</h2>
<!-- backwards compatibility -->
<a id="schemadocumentparameterdescrption"></a>
<a id="schema_DocumentParameterDescrption"></a>
<a id="tocSdocumentparameterdescrption"></a>
<a id="tocsdocumentparameterdescrption"></a>

```json
"string"
```

<h2 id="tocS_DocumentParameterDefaultValue">DocumentParameterDefaultValue</h2>
<!-- backwards compatibility -->
<a id="schemadocumentparameterdefaultvalue"></a>
<a id="schema_DocumentParameterDefaultValue"></a>
<a id="tocSdocumentparameterdefaultvalue"></a>
<a id="tocsdocumentparameterdefaultvalue"></a>

```json
"string"
```

<h2 id="tocS_DocumentParameter">DocumentParameter</h2>
<!-- backwards compatibility -->
<a id="schemadocumentparameter"></a>
<a id="schema_DocumentParameter"></a>
<a id="tocSdocumentparameter"></a>
<a id="tocsdocumentparameter"></a>

```json
{
  "Name": {},
  "Type": {},
  "Description": {},
  "DefaultValue": {}
}
```

Parameters specified in a Systems Manager document that run on the server when the command is run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|false|none|none|
|Description|object|false|none|none|
|DefaultValue|object|false|none|none|

<h2 id="tocS_RequireType">RequireType</h2>
<!-- backwards compatibility -->
<a id="schemarequiretype"></a>
<a id="schema_RequireType"></a>
<a id="tocSrequiretype"></a>
<a id="tocsrequiretype"></a>

```json
"string"
```

<h2 id="tocS_DocumentRequires">DocumentRequires</h2>
<!-- backwards compatibility -->
<a id="schemadocumentrequires"></a>
<a id="schema_DocumentRequires"></a>
<a id="tocSdocumentrequires"></a>
<a id="tocsdocumentrequires"></a>

```json
{
  "Name": {},
  "Version": {},
  "RequireType": {},
  "VersionName": {}
}
```

An SSM document required by the current document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Version|object|false|none|none|
|RequireType|object|false|none|none|
|VersionName|object|false|none|none|

<h2 id="tocS_DocumentReviewAction">DocumentReviewAction</h2>
<!-- backwards compatibility -->
<a id="schemadocumentreviewaction"></a>
<a id="schema_DocumentReviewAction"></a>
<a id="tocSdocumentreviewaction"></a>
<a id="tocsdocumentreviewaction"></a>

```json
"SendForReview"
```

<h2 id="tocS_DocumentReviewComment">DocumentReviewComment</h2>
<!-- backwards compatibility -->
<a id="schemadocumentreviewcomment"></a>
<a id="schema_DocumentReviewComment"></a>
<a id="tocSdocumentreviewcomment"></a>
<a id="tocsdocumentreviewcomment"></a>

```json
"string"
```

<h2 id="tocS_DocumentReviewCommentSource">DocumentReviewCommentSource</h2>
<!-- backwards compatibility -->
<a id="schemadocumentreviewcommentsource"></a>
<a id="schema_DocumentReviewCommentSource"></a>
<a id="tocSdocumentreviewcommentsource"></a>
<a id="tocsdocumentreviewcommentsource"></a>

```json
{
  "Type": {},
  "Content": {}
}
```

Information about comments added to a document review request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Content|object|false|none|none|

<h2 id="tocS_DocumentReviewCommentList">DocumentReviewCommentList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentreviewcommentlist"></a>
<a id="schema_DocumentReviewCommentList"></a>
<a id="tocSdocumentreviewcommentlist"></a>
<a id="tocsdocumentreviewcommentlist"></a>

```json
[
  {
    "Type": {},
    "Content": {}
  }
]
```

<h2 id="tocS_DocumentReviewCommentType">DocumentReviewCommentType</h2>
<!-- backwards compatibility -->
<a id="schemadocumentreviewcommenttype"></a>
<a id="schema_DocumentReviewCommentType"></a>
<a id="tocSdocumentreviewcommenttype"></a>
<a id="tocsdocumentreviewcommenttype"></a>

```json
"Comment"
```

<h2 id="tocS_DocumentReviewerResponseSource">DocumentReviewerResponseSource</h2>
<!-- backwards compatibility -->
<a id="schemadocumentreviewerresponsesource"></a>
<a id="schema_DocumentReviewerResponseSource"></a>
<a id="tocSdocumentreviewerresponsesource"></a>
<a id="tocsdocumentreviewerresponsesource"></a>

```json
{
  "CreateTime": {},
  "UpdatedTime": {},
  "ReviewStatus": {},
  "Comment": {},
  "Reviewer": {}
}
```

Information about a reviewer's response to a document review request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|false|none|none|
|UpdatedTime|object|false|none|none|
|ReviewStatus|object|false|none|none|
|Comment|object|false|none|none|
|Reviewer|object|false|none|none|

<h2 id="tocS_Reviewer">Reviewer</h2>
<!-- backwards compatibility -->
<a id="schemareviewer"></a>
<a id="schema_Reviewer"></a>
<a id="tocSreviewer"></a>
<a id="tocsreviewer"></a>

```json
"string"
```

<h2 id="tocS_DocumentReviews">DocumentReviews</h2>
<!-- backwards compatibility -->
<a id="schemadocumentreviews"></a>
<a id="schema_DocumentReviews"></a>
<a id="tocSdocumentreviews"></a>
<a id="tocsdocumentreviews"></a>

```json
{
  "Action": {},
  "Comment": {}
}
```

Information about a document approval review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|Comment|object|false|none|none|

<h2 id="tocS_DocumentVersionInfo">DocumentVersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemadocumentversioninfo"></a>
<a id="schema_DocumentVersionInfo"></a>
<a id="tocSdocumentversioninfo"></a>
<a id="tocsdocumentversioninfo"></a>

```json
{
  "Name": {},
  "DisplayName": {},
  "DocumentVersion": {},
  "VersionName": {},
  "CreatedDate": {},
  "IsDefaultVersion": {},
  "DocumentFormat": {},
  "Status": {},
  "StatusInformation": {},
  "ReviewStatus": {}
}
```

Version information about the document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|DisplayName|object|false|none|none|
|DocumentVersion|object|false|none|none|
|VersionName|object|false|none|none|
|CreatedDate|object|false|none|none|
|IsDefaultVersion|object|false|none|none|
|DocumentFormat|object|false|none|none|
|Status|object|false|none|none|
|StatusInformation|object|false|none|none|
|ReviewStatus|object|false|none|none|

<h2 id="tocS_DocumentVersionList">DocumentVersionList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentversionlist"></a>
<a id="schema_DocumentVersionList"></a>
<a id="tocSdocumentversionlist"></a>
<a id="tocsdocumentversionlist"></a>

```json
[
  {
    "Name": {},
    "DisplayName": {},
    "DocumentVersion": {},
    "VersionName": {},
    "CreatedDate": {},
    "IsDefaultVersion": {},
    "DocumentFormat": {},
    "Status": {},
    "StatusInformation": {},
    "ReviewStatus": {}
  }
]
```

<h2 id="tocS_DocumentVersionNumber">DocumentVersionNumber</h2>
<!-- backwards compatibility -->
<a id="schemadocumentversionnumber"></a>
<a id="schema_DocumentVersionNumber"></a>
<a id="tocSdocumentversionnumber"></a>
<a id="tocsdocumentversionnumber"></a>

```json
"string"
```

<h2 id="tocS_Patch">Patch</h2>
<!-- backwards compatibility -->
<a id="schemapatch"></a>
<a id="schema_Patch"></a>
<a id="tocSpatch"></a>
<a id="tocspatch"></a>

```json
{
  "Id": {},
  "ReleaseDate": {},
  "Title": {},
  "Description": {},
  "ContentUrl": {},
  "Vendor": {},
  "ProductFamily": {},
  "Product": {},
  "Classification": {},
  "MsrcSeverity": {},
  "KbNumber": {},
  "MsrcNumber": {},
  "Language": {},
  "AdvisoryIds": {},
  "BugzillaIds": {},
  "CVEIds": {},
  "Name": {},
  "Epoch": {},
  "Version": {},
  "Release": {},
  "Arch": {},
  "Severity": {},
  "Repository": {}
}
```

Represents metadata about a patch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|ReleaseDate|object|false|none|none|
|Title|object|false|none|none|
|Description|object|false|none|none|
|ContentUrl|object|false|none|none|
|Vendor|object|false|none|none|
|ProductFamily|object|false|none|none|
|Product|object|false|none|none|
|Classification|object|false|none|none|
|MsrcSeverity|object|false|none|none|
|KbNumber|object|false|none|none|
|MsrcNumber|object|false|none|none|
|Language|object|false|none|none|
|AdvisoryIds|object|false|none|none|
|BugzillaIds|object|false|none|none|
|CVEIds|object|false|none|none|
|Name|object|false|none|none|
|Epoch|object|false|none|none|
|Version|object|false|none|none|
|Release|object|false|none|none|
|Arch|object|false|none|none|
|Severity|object|false|none|none|
|Repository|object|false|none|none|

<h2 id="tocS_PatchStatus">PatchStatus</h2>
<!-- backwards compatibility -->
<a id="schemapatchstatus"></a>
<a id="schema_PatchStatus"></a>
<a id="tocSpatchstatus"></a>
<a id="tocspatchstatus"></a>

```json
{
  "DeploymentStatus": {},
  "ComplianceLevel": {},
  "ApprovalDate": {}
}
```

Information about the approval status of a patch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeploymentStatus|object|false|none|none|
|ComplianceLevel|object|false|none|none|
|ApprovalDate|object|false|none|none|

<h2 id="tocS_EffectivePatch">EffectivePatch</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivepatch"></a>
<a id="schema_EffectivePatch"></a>
<a id="tocSeffectivepatch"></a>
<a id="tocseffectivepatch"></a>

```json
{
  "Patch": {
    "Id": {},
    "ReleaseDate": {},
    "Title": {},
    "Description": {},
    "ContentUrl": {},
    "Vendor": {},
    "ProductFamily": {},
    "Product": {},
    "Classification": {},
    "MsrcSeverity": {},
    "KbNumber": {},
    "MsrcNumber": {},
    "Language": {},
    "AdvisoryIds": {},
    "BugzillaIds": {},
    "CVEIds": {},
    "Name": {},
    "Epoch": {},
    "Version": {},
    "Release": {},
    "Arch": {},
    "Severity": {},
    "Repository": {}
  },
  "PatchStatus": {
    "DeploymentStatus": {},
    "ComplianceLevel": {},
    "ApprovalDate": {}
  }
}
```

The <code>EffectivePatch</code> structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Patch|object|false|none|none|
|PatchStatus|object|false|none|none|

<h2 id="tocS_ExecutionRoleName">ExecutionRoleName</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionrolename"></a>
<a id="schema_ExecutionRoleName"></a>
<a id="tocSexecutionrolename"></a>
<a id="tocsexecutionrolename"></a>

```json
"string"
```

<h2 id="tocS_Fault">Fault</h2>
<!-- backwards compatibility -->
<a id="schemafault"></a>
<a id="schema_Fault"></a>
<a id="tocSfault"></a>
<a id="tocsfault"></a>

```json
"Client"
```

<h2 id="tocS_FailedCreateAssociation">FailedCreateAssociation</h2>
<!-- backwards compatibility -->
<a id="schemafailedcreateassociation"></a>
<a id="schema_FailedCreateAssociation"></a>
<a id="tocSfailedcreateassociation"></a>
<a id="tocsfailedcreateassociation"></a>

```json
{
  "Entry": {
    "Name": {},
    "InstanceId": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "AutomationTargetParameterName": {},
    "DocumentVersion": {},
    "Targets": {},
    "ScheduleExpression": {},
    "OutputLocation": {
      "S3Location": {
        "OutputS3Region": {},
        "OutputS3BucketName": {},
        "OutputS3KeyPrefix": {}
      }
    },
    "AssociationName": {},
    "MaxErrors": {},
    "MaxConcurrency": {},
    "ComplianceSeverity": {},
    "SyncCompliance": {},
    "ApplyOnlyAtCronInterval": {},
    "CalendarNames": {},
    "TargetLocations": {},
    "ScheduleOffset": {},
    "TargetMaps": {},
    "AlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    }
  },
  "Message": {},
  "Fault": {}
}
```

Describes a failed association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entry|object|false|none|none|
|Message|object|false|none|none|
|Fault|object|false|none|none|

<h2 id="tocS_FailureDetails">FailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemafailuredetails"></a>
<a id="schema_FailureDetails"></a>
<a id="tocSfailuredetails"></a>
<a id="tocsfailuredetails"></a>

```json
{
  "FailureStage": {},
  "FailureType": {},
  "Details": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

Information about an Automation failure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailureStage|object|false|none|none|
|FailureType|object|false|none|none|
|Details|object|false|none|none|

<h2 id="tocS_ISO8601String">ISO8601String</h2>
<!-- backwards compatibility -->
<a id="schemaiso8601string"></a>
<a id="schema_ISO8601String"></a>
<a id="tocSiso8601string"></a>
<a id="tocsiso8601string"></a>

```json
"string"
```

<h2 id="tocS_StringDateTime">StringDateTime</h2>
<!-- backwards compatibility -->
<a id="schemastringdatetime"></a>
<a id="schema_StringDateTime"></a>
<a id="tocSstringdatetime"></a>
<a id="tocsstringdatetime"></a>

```json
"string"
```

<h2 id="tocS_StandardOutputContent">StandardOutputContent</h2>
<!-- backwards compatibility -->
<a id="schemastandardoutputcontent"></a>
<a id="schema_StandardOutputContent"></a>
<a id="tocSstandardoutputcontent"></a>
<a id="tocsstandardoutputcontent"></a>

```json
"string"
```

<h2 id="tocS_StandardErrorContent">StandardErrorContent</h2>
<!-- backwards compatibility -->
<a id="schemastandarderrorcontent"></a>
<a id="schema_StandardErrorContent"></a>
<a id="tocSstandarderrorcontent"></a>
<a id="tocsstandarderrorcontent"></a>

```json
"string"
```

<h2 id="tocS_SessionTarget">SessionTarget</h2>
<!-- backwards compatibility -->
<a id="schemasessiontarget"></a>
<a id="schema_SessionTarget"></a>
<a id="tocSsessiontarget"></a>
<a id="tocssessiontarget"></a>

```json
"string"
```

<h2 id="tocS_SnapshotId">SnapshotId</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotid"></a>
<a id="schema_SnapshotId"></a>
<a id="tocSsnapshotid"></a>
<a id="tocssnapshotid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_SnapshotDownloadUrl">SnapshotDownloadUrl</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotdownloadurl"></a>
<a id="schema_SnapshotDownloadUrl"></a>
<a id="tocSsnapshotdownloadurl"></a>
<a id="tocssnapshotdownloadurl"></a>

```json
"string"
```

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
"string"
```

<h2 id="tocS_InventoryFilterList">InventoryFilterList</h2>
<!-- backwards compatibility -->
<a id="schemainventoryfilterlist"></a>
<a id="schema_InventoryFilterList"></a>
<a id="tocSinventoryfilterlist"></a>
<a id="tocsinventoryfilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {},
    "Type": {}
  }
]
```

<h2 id="tocS_InventoryAggregatorList">InventoryAggregatorList</h2>
<!-- backwards compatibility -->
<a id="schemainventoryaggregatorlist"></a>
<a id="schema_InventoryAggregatorList"></a>
<a id="tocSinventoryaggregatorlist"></a>
<a id="tocsinventoryaggregatorlist"></a>

```json
[
  {
    "Expression": {},
    "Aggregators": {},
    "Groups": {}
  }
]
```

<h2 id="tocS_ResultAttributeList">ResultAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaresultattributelist"></a>
<a id="schema_ResultAttributeList"></a>
<a id="tocSresultattributelist"></a>
<a id="tocsresultattributelist"></a>

```json
[
  {
    "TypeName": {}
  }
]
```

<h2 id="tocS_InventoryResultEntityList">InventoryResultEntityList</h2>
<!-- backwards compatibility -->
<a id="schemainventoryresultentitylist"></a>
<a id="schema_InventoryResultEntityList"></a>
<a id="tocSinventoryresultentitylist"></a>
<a id="tocsinventoryresultentitylist"></a>

```json
[
  {
    "Id": {},
    "Data": {
      "property1": {
        "TypeName": {},
        "SchemaVersion": {},
        "CaptureTime": {},
        "ContentHash": {},
        "Content": {}
      },
      "property2": {
        "TypeName": {},
        "SchemaVersion": {},
        "CaptureTime": {},
        "ContentHash": {},
        "Content": {}
      }
    }
  }
]
```

<h2 id="tocS_GetInventorySchemaMaxResults">GetInventorySchemaMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemagetinventoryschemamaxresults"></a>
<a id="schema_GetInventorySchemaMaxResults"></a>
<a id="tocSgetinventoryschemamaxresults"></a>
<a id="tocsgetinventoryschemamaxresults"></a>

```json
50
```

<h2 id="tocS_InventoryItemTypeNameFilter">InventoryItemTypeNameFilter</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitemtypenamefilter"></a>
<a id="schema_InventoryItemTypeNameFilter"></a>
<a id="tocSinventoryitemtypenamefilter"></a>
<a id="tocsinventoryitemtypenamefilter"></a>

```json
"string"
```

<h2 id="tocS_IsSubTypeSchema">IsSubTypeSchema</h2>
<!-- backwards compatibility -->
<a id="schemaissubtypeschema"></a>
<a id="schema_IsSubTypeSchema"></a>
<a id="tocSissubtypeschema"></a>
<a id="tocsissubtypeschema"></a>

```json
true
```

<h2 id="tocS_InventoryItemSchemaResultList">InventoryItemSchemaResultList</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitemschemaresultlist"></a>
<a id="schema_InventoryItemSchemaResultList"></a>
<a id="tocSinventoryitemschemaresultlist"></a>
<a id="tocsinventoryitemschemaresultlist"></a>

```json
[
  {
    "TypeName": {},
    "Version": {},
    "Attributes": {},
    "DisplayName": {}
  }
]
```

<h2 id="tocS_MaintenanceWindowExecutionTaskIdList">MaintenanceWindowExecutionTaskIdList</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecutiontaskidlist"></a>
<a id="schema_MaintenanceWindowExecutionTaskIdList"></a>
<a id="tocSmaintenancewindowexecutiontaskidlist"></a>
<a id="tocsmaintenancewindowexecutiontaskidlist"></a>

```json
[
  "stringstringstringstringstringstring"
]
```

<h2 id="tocS_MaintenanceWindowExecutionStatus">MaintenanceWindowExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecutionstatus"></a>
<a id="schema_MaintenanceWindowExecutionStatus"></a>
<a id="tocSmaintenancewindowexecutionstatus"></a>
<a id="tocsmaintenancewindowexecutionstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_MaintenanceWindowExecutionStatusDetails">MaintenanceWindowExecutionStatusDetails</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecutionstatusdetails"></a>
<a id="schema_MaintenanceWindowExecutionStatusDetails"></a>
<a id="tocSmaintenancewindowexecutionstatusdetails"></a>
<a id="tocsmaintenancewindowexecutionstatusdetails"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowExecutionTaskInvocationId">MaintenanceWindowExecutionTaskInvocationId</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecutiontaskinvocationid"></a>
<a id="schema_MaintenanceWindowExecutionTaskInvocationId"></a>
<a id="tocSmaintenancewindowexecutiontaskinvocationid"></a>
<a id="tocsmaintenancewindowexecutiontaskinvocationid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_MaintenanceWindowExecutionTaskExecutionId">MaintenanceWindowExecutionTaskExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecutiontaskexecutionid"></a>
<a id="schema_MaintenanceWindowExecutionTaskExecutionId"></a>
<a id="tocSmaintenancewindowexecutiontaskexecutionid"></a>
<a id="tocsmaintenancewindowexecutiontaskexecutionid"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowTaskType">MaintenanceWindowTaskType</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtasktype"></a>
<a id="schema_MaintenanceWindowTaskType"></a>
<a id="tocSmaintenancewindowtasktype"></a>
<a id="tocsmaintenancewindowtasktype"></a>

```json
"RUN_COMMAND"
```

<h2 id="tocS_MaintenanceWindowExecutionTaskInvocationParameters">MaintenanceWindowExecutionTaskInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecutiontaskinvocationparameters"></a>
<a id="schema_MaintenanceWindowExecutionTaskInvocationParameters"></a>
<a id="tocSmaintenancewindowexecutiontaskinvocationparameters"></a>
<a id="tocsmaintenancewindowexecutiontaskinvocationparameters"></a>

```json
"password"
```

<h2 id="tocS_OwnerInformation">OwnerInformation</h2>
<!-- backwards compatibility -->
<a id="schemaownerinformation"></a>
<a id="schema_OwnerInformation"></a>
<a id="tocSownerinformation"></a>
<a id="tocsownerinformation"></a>

```json
"password"
```

<h2 id="tocS_MaintenanceWindowTaskTargetId">MaintenanceWindowTaskTargetId</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtasktargetid"></a>
<a id="schema_MaintenanceWindowTaskTargetId"></a>
<a id="tocSmaintenancewindowtasktargetid"></a>
<a id="tocsmaintenancewindowtasktargetid"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowTaskArn">MaintenanceWindowTaskArn</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtaskarn"></a>
<a id="schema_MaintenanceWindowTaskArn"></a>
<a id="tocSmaintenancewindowtaskarn"></a>
<a id="tocsmaintenancewindowtaskarn"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowTaskParametersList">MaintenanceWindowTaskParametersList</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtaskparameterslist"></a>
<a id="schema_MaintenanceWindowTaskParametersList"></a>
<a id="tocSmaintenancewindowtaskparameterslist"></a>
<a id="tocsmaintenancewindowtaskparameterslist"></a>

```json
[
  {
    "property1": {
      "Values": {}
    },
    "property2": {
      "Values": {}
    }
  }
]
```

<h2 id="tocS_MaintenanceWindowTaskPriority">MaintenanceWindowTaskPriority</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtaskpriority"></a>
<a id="schema_MaintenanceWindowTaskPriority"></a>
<a id="tocSmaintenancewindowtaskpriority"></a>
<a id="tocsmaintenancewindowtaskpriority"></a>

```json
0
```

<h2 id="tocS_MaintenanceWindowEnabled">MaintenanceWindowEnabled</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowenabled"></a>
<a id="schema_MaintenanceWindowEnabled"></a>
<a id="tocSmaintenancewindowenabled"></a>
<a id="tocsmaintenancewindowenabled"></a>

```json
true
```

<h2 id="tocS_MaintenanceWindowTaskParameters">MaintenanceWindowTaskParameters</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtaskparameters"></a>
<a id="schema_MaintenanceWindowTaskParameters"></a>
<a id="tocSmaintenancewindowtaskparameters"></a>
<a id="tocsmaintenancewindowtaskparameters"></a>

```json
{
  "property1": {
    "Values": {}
  },
  "property2": {
    "Values": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MaintenanceWindowTaskParameterValueExpression](#schemamaintenancewindowtaskparametervalueexpression)|false|none|Defines the values for a task parameter.|

<h2 id="tocS_MaintenanceWindowTaskInvocationParameters">MaintenanceWindowTaskInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtaskinvocationparameters"></a>
<a id="schema_MaintenanceWindowTaskInvocationParameters"></a>
<a id="tocSmaintenancewindowtaskinvocationparameters"></a>
<a id="tocsmaintenancewindowtaskinvocationparameters"></a>

```json
{
  "RunCommand": {
    "Comment": {},
    "CloudWatchOutputConfig": {
      "CloudWatchLogGroupName": {},
      "CloudWatchOutputEnabled": {}
    },
    "DocumentHash": {},
    "DocumentHashType": {},
    "DocumentVersion": {},
    "NotificationConfig": {
      "NotificationArn": {},
      "NotificationEvents": {},
      "NotificationType": {}
    },
    "OutputS3BucketName": {},
    "OutputS3KeyPrefix": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "ServiceRoleArn": {},
    "TimeoutSeconds": {}
  },
  "Automation": {
    "DocumentVersion": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "StepFunctions": {
    "Input": {},
    "Name": {}
  },
  "Lambda": {
    "ClientContext": {},
    "Qualifier": {},
    "Payload": {}
  }
}
```

The parameters for task execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RunCommand|object|false|none|none|
|Automation|object|false|none|none|
|StepFunctions|object|false|none|none|
|Lambda|object|false|none|none|

<h2 id="tocS_LoggingInfo">LoggingInfo</h2>
<!-- backwards compatibility -->
<a id="schemalogginginfo"></a>
<a id="schema_LoggingInfo"></a>
<a id="tocSlogginginfo"></a>
<a id="tocslogginginfo"></a>

```json
{
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "S3Region": {}
}
```

<p>Information about an Amazon Simple Storage Service (Amazon S3) bucket to write managed node-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketName|object|true|none|none|
|S3KeyPrefix|object|false|none|none|
|S3Region|object|true|none|none|

<h2 id="tocS_MaintenanceWindowTaskCutoffBehavior">MaintenanceWindowTaskCutoffBehavior</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtaskcutoffbehavior"></a>
<a id="schema_MaintenanceWindowTaskCutoffBehavior"></a>
<a id="tocSmaintenancewindowtaskcutoffbehavior"></a>
<a id="tocsmaintenancewindowtaskcutoffbehavior"></a>

```json
"CONTINUE_TASK"
```

<h2 id="tocS_OpsItem">OpsItem</h2>
<!-- backwards compatibility -->
<a id="schemaopsitem"></a>
<a id="schema_OpsItem"></a>
<a id="tocSopsitem"></a>
<a id="tocsopsitem"></a>

```json
{
  "CreatedBy": {},
  "OpsItemType": {},
  "CreatedTime": {},
  "Description": {},
  "LastModifiedBy": {},
  "LastModifiedTime": {},
  "Notifications": {},
  "Priority": {},
  "RelatedOpsItems": {},
  "Status": {},
  "OpsItemId": {},
  "Version": {},
  "Title": {},
  "Source": {},
  "OperationalData": {
    "property1": {
      "Value": {},
      "Type": {}
    },
    "property2": {
      "Value": {},
      "Type": {}
    }
  },
  "Category": {},
  "Severity": {},
  "ActualStartTime": {},
  "ActualEndTime": {},
  "PlannedStartTime": {},
  "PlannedEndTime": {},
  "OpsItemArn": {}
}
```

<p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational work items (OpsItems) impacting the performance and health of their Amazon Web Services resources. OpsCenter is integrated with Amazon EventBridge and Amazon CloudWatch. This means you can configure these services to automatically create an OpsItem in OpsCenter when a CloudWatch alarm enters the ALARM state or when EventBridge processes an event from any Amazon Web Services service that publishes events. Configuring Amazon CloudWatch alarms and EventBridge events to automatically create OpsItems allows you to quickly diagnose and remediate issues with Amazon Web Services resources from a single console.</p> <p>To help you diagnose issues, each OpsItem includes contextually relevant information such as the name and ID of the Amazon Web Services resource that generated the OpsItem, alarm or event details, alarm history, and an alarm timeline graph. For the Amazon Web Services resource, OpsCenter aggregates information from Config, CloudTrail logs, and EventBridge, so you don't have to navigate across multiple console pages during your investigation. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedBy|object|false|none|none|
|OpsItemType|object|false|none|none|
|CreatedTime|object|false|none|none|
|Description|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|Notifications|object|false|none|none|
|Priority|object|false|none|none|
|RelatedOpsItems|object|false|none|none|
|Status|object|false|none|none|
|OpsItemId|object|false|none|none|
|Version|object|false|none|none|
|Title|object|false|none|none|
|Source|object|false|none|none|
|OperationalData|object|false|none|none|
|Category|object|false|none|none|
|Severity|object|false|none|none|
|ActualStartTime|object|false|none|none|
|ActualEndTime|object|false|none|none|
|PlannedStartTime|object|false|none|none|
|PlannedEndTime|object|false|none|none|
|OpsItemArn|object|false|none|none|

<h2 id="tocS_GetOpsMetadataMaxResults">GetOpsMetadataMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemagetopsmetadatamaxresults"></a>
<a id="schema_GetOpsMetadataMaxResults"></a>
<a id="tocSgetopsmetadatamaxresults"></a>
<a id="tocsgetopsmetadatamaxresults"></a>

```json
1
```

<h2 id="tocS_OpsFilterList">OpsFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaopsfilterlist"></a>
<a id="schema_OpsFilterList"></a>
<a id="tocSopsfilterlist"></a>
<a id="tocsopsfilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {},
    "Type": {}
  }
]
```

<h2 id="tocS_OpsAggregatorList">OpsAggregatorList</h2>
<!-- backwards compatibility -->
<a id="schemaopsaggregatorlist"></a>
<a id="schema_OpsAggregatorList"></a>
<a id="tocSopsaggregatorlist"></a>
<a id="tocsopsaggregatorlist"></a>

```json
[
  {
    "AggregatorType": {},
    "TypeName": {},
    "AttributeName": {},
    "Values": {
      "property1": "string",
      "property2": "string"
    },
    "Filters": {},
    "Aggregators": {}
  }
]
```

<h2 id="tocS_OpsResultAttributeList">OpsResultAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaopsresultattributelist"></a>
<a id="schema_OpsResultAttributeList"></a>
<a id="tocSopsresultattributelist"></a>
<a id="tocsopsresultattributelist"></a>

```json
[
  {
    "TypeName": {}
  }
]
```

<h2 id="tocS_OpsEntityList">OpsEntityList</h2>
<!-- backwards compatibility -->
<a id="schemaopsentitylist"></a>
<a id="schema_OpsEntityList"></a>
<a id="tocSopsentitylist"></a>
<a id="tocsopsentitylist"></a>

```json
[
  {
    "Id": {},
    "Data": {
      "property1": {
        "CaptureTime": {},
        "Content": {}
      },
      "property2": {
        "CaptureTime": {},
        "Content": {}
      }
    }
  }
]
```

<h2 id="tocS_ParameterHistoryList">ParameterHistoryList</h2>
<!-- backwards compatibility -->
<a id="schemaparameterhistorylist"></a>
<a id="schema_ParameterHistoryList"></a>
<a id="tocSparameterhistorylist"></a>
<a id="tocsparameterhistorylist"></a>

```json
[
  {
    "Name": {},
    "Type": {},
    "KeyId": {},
    "LastModifiedDate": {},
    "LastModifiedUser": {},
    "Description": {},
    "Value": {},
    "AllowedPattern": {},
    "Version": {},
    "Labels": {},
    "Tier": {},
    "Policies": {},
    "DataType": {}
  }
]
```

<h2 id="tocS_Parameter">Parameter</h2>
<!-- backwards compatibility -->
<a id="schemaparameter"></a>
<a id="schema_Parameter"></a>
<a id="tocSparameter"></a>
<a id="tocsparameter"></a>

```json
{
  "Name": {},
  "Type": {},
  "Value": {},
  "Version": {},
  "Selector": {},
  "SourceResult": {},
  "LastModifiedDate": {},
  "ARN": {},
  "DataType": {}
}
```

An Amazon Web Services Systems Manager parameter in Parameter Store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|false|none|none|
|Value|object|false|none|none|
|Version|object|false|none|none|
|Selector|object|false|none|none|
|SourceResult|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|ARN|object|false|none|none|
|DataType|object|false|none|none|

<h2 id="tocS_GetParametersByPathMaxResults">GetParametersByPathMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemagetparametersbypathmaxresults"></a>
<a id="schema_GetParametersByPathMaxResults"></a>
<a id="tocSgetparametersbypathmaxresults"></a>
<a id="tocsgetparametersbypathmaxresults"></a>

```json
1
```

<h2 id="tocS_ParameterList">ParameterList</h2>
<!-- backwards compatibility -->
<a id="schemaparameterlist"></a>
<a id="schema_ParameterList"></a>
<a id="tocSparameterlist"></a>
<a id="tocsparameterlist"></a>

```json
[
  {
    "Name": {},
    "Type": {},
    "Value": {},
    "Version": {},
    "Selector": {},
    "SourceResult": {},
    "LastModifiedDate": {},
    "ARN": {},
    "DataType": {}
  }
]
```

<h2 id="tocS_PatchGroupList">PatchGroupList</h2>
<!-- backwards compatibility -->
<a id="schemapatchgrouplist"></a>
<a id="schema_PatchGroupList"></a>
<a id="tocSpatchgrouplist"></a>
<a id="tocspatchgrouplist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourcePolicyMaxResults">ResourcePolicyMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicymaxresults"></a>
<a id="schema_ResourcePolicyMaxResults"></a>
<a id="tocSresourcepolicymaxresults"></a>
<a id="tocsresourcepolicymaxresults"></a>

```json
1
```

<h2 id="tocS_GetResourcePoliciesResponseEntries">GetResourcePoliciesResponseEntries</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepoliciesresponseentries"></a>
<a id="schema_GetResourcePoliciesResponseEntries"></a>
<a id="tocSgetresourcepoliciesresponseentries"></a>
<a id="tocsgetresourcepoliciesresponseentries"></a>

```json
[
  {
    "PolicyId": {},
    "PolicyHash": {},
    "Policy": {}
  }
]
```

<h2 id="tocS_GetResourcePoliciesResponseEntry">GetResourcePoliciesResponseEntry</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepoliciesresponseentry"></a>
<a id="schema_GetResourcePoliciesResponseEntry"></a>
<a id="tocSgetresourcepoliciesresponseentry"></a>
<a id="tocsgetresourcepoliciesresponseentry"></a>

```json
{
  "PolicyId": {},
  "PolicyHash": {},
  "Policy": {}
}
```

A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|false|none|none|
|PolicyHash|object|false|none|none|
|Policy|object|false|none|none|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
"string"
```

<h2 id="tocS_ServiceSettingId">ServiceSettingId</h2>
<!-- backwards compatibility -->
<a id="schemaservicesettingid"></a>
<a id="schema_ServiceSettingId"></a>
<a id="tocSservicesettingid"></a>
<a id="tocsservicesettingid"></a>

```json
"string"
```

<h2 id="tocS_ServiceSetting">ServiceSetting</h2>
<!-- backwards compatibility -->
<a id="schemaservicesetting"></a>
<a id="schema_ServiceSetting"></a>
<a id="tocSservicesetting"></a>
<a id="tocsservicesetting"></a>

```json
{
  "SettingId": {},
  "SettingValue": {},
  "LastModifiedDate": {},
  "LastModifiedUser": {},
  "ARN": {},
  "Status": {}
}
```

<p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SettingId|object|false|none|none|
|SettingValue|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|LastModifiedUser|object|false|none|none|
|ARN|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_IPAddress">IPAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IPAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
"string"
```

<h2 id="tocS_IdempotencyToken">IdempotencyToken</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencytoken"></a>
<a id="schema_IdempotencyToken"></a>
<a id="tocSidempotencytoken"></a>
<a id="tocsidempotencytoken"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_InstallOverrideList">InstallOverrideList</h2>
<!-- backwards compatibility -->
<a id="schemainstalloverridelist"></a>
<a id="schema_InstallOverrideList"></a>
<a id="tocSinstalloverridelist"></a>
<a id="tocsinstalloverridelist"></a>

```json
"string"
```

<h2 id="tocS_InstanceAssociationStatusAggregatedCount">InstanceAssociationStatusAggregatedCount</h2>
<!-- backwards compatibility -->
<a id="schemainstanceassociationstatusaggregatedcount"></a>
<a id="schema_InstanceAssociationStatusAggregatedCount"></a>
<a id="tocSinstanceassociationstatusaggregatedcount"></a>
<a id="tocsinstanceassociationstatusaggregatedcount"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[InstanceCount](#schemainstancecount)|false|none|none|

<h2 id="tocS_InstanceAggregatedAssociationOverview">InstanceAggregatedAssociationOverview</h2>
<!-- backwards compatibility -->
<a id="schemainstanceaggregatedassociationoverview"></a>
<a id="schema_InstanceAggregatedAssociationOverview"></a>
<a id="tocSinstanceaggregatedassociationoverview"></a>
<a id="tocsinstanceaggregatedassociationoverview"></a>

```json
{
  "DetailedStatus": {},
  "InstanceAssociationStatusAggregatedCount": {
    "property1": 0,
    "property2": 0
  }
}
```

Status information about the aggregated associations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DetailedStatus|object|false|none|none|
|InstanceAssociationStatusAggregatedCount|object|false|none|none|

<h2 id="tocS_InstanceAssociation">InstanceAssociation</h2>
<!-- backwards compatibility -->
<a id="schemainstanceassociation"></a>
<a id="schema_InstanceAssociation"></a>
<a id="tocSinstanceassociation"></a>
<a id="tocsinstanceassociation"></a>

```json
{
  "AssociationId": {},
  "InstanceId": {},
  "Content": {},
  "AssociationVersion": {}
}
```

One or more association documents on the managed node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|false|none|none|
|InstanceId|object|false|none|none|
|Content|object|false|none|none|
|AssociationVersion|object|false|none|none|

<h2 id="tocS_InstanceAssociationExecutionSummary">InstanceAssociationExecutionSummary</h2>
<!-- backwards compatibility -->
<a id="schemainstanceassociationexecutionsummary"></a>
<a id="schema_InstanceAssociationExecutionSummary"></a>
<a id="tocSinstanceassociationexecutionsummary"></a>
<a id="tocsinstanceassociationexecutionsummary"></a>

```json
"string"
```

<h2 id="tocS_S3OutputLocation">S3OutputLocation</h2>
<!-- backwards compatibility -->
<a id="schemas3outputlocation"></a>
<a id="schema_S3OutputLocation"></a>
<a id="tocSs3outputlocation"></a>
<a id="tocss3outputlocation"></a>

```json
{
  "OutputS3Region": {},
  "OutputS3BucketName": {},
  "OutputS3KeyPrefix": {}
}
```

An S3 bucket where you want to store the results of this request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputS3Region|object|false|none|none|
|OutputS3BucketName|object|false|none|none|
|OutputS3KeyPrefix|object|false|none|none|

<h2 id="tocS_S3OutputUrl">S3OutputUrl</h2>
<!-- backwards compatibility -->
<a id="schemas3outputurl"></a>
<a id="schema_S3OutputUrl"></a>
<a id="tocSs3outputurl"></a>
<a id="tocss3outputurl"></a>

```json
{
  "OutputUrl": {}
}
```

A URL for the Amazon Web Services Systems Manager (Systems Manager) bucket where you want to store the results of this request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputUrl|object|false|none|none|

<h2 id="tocS_InstanceAssociationOutputUrl">InstanceAssociationOutputUrl</h2>
<!-- backwards compatibility -->
<a id="schemainstanceassociationoutputurl"></a>
<a id="schema_InstanceAssociationOutputUrl"></a>
<a id="tocSinstanceassociationoutputurl"></a>
<a id="tocsinstanceassociationoutputurl"></a>

```json
{
  "S3OutputUrl": {
    "OutputUrl": {}
  }
}
```

The URL of S3 bucket where you want to store the results of this request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3OutputUrl|object|false|none|none|

<h2 id="tocS_InstanceAssociationStatusInfo">InstanceAssociationStatusInfo</h2>
<!-- backwards compatibility -->
<a id="schemainstanceassociationstatusinfo"></a>
<a id="schema_InstanceAssociationStatusInfo"></a>
<a id="tocSinstanceassociationstatusinfo"></a>
<a id="tocsinstanceassociationstatusinfo"></a>

```json
{
  "AssociationId": {},
  "Name": {},
  "DocumentVersion": {},
  "AssociationVersion": {},
  "InstanceId": {},
  "ExecutionDate": {},
  "Status": {},
  "DetailedStatus": {},
  "ExecutionSummary": {},
  "ErrorCode": {},
  "OutputUrl": {
    "S3OutputUrl": {
      "OutputUrl": {}
    }
  },
  "AssociationName": {}
}
```

Status information about the association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|false|none|none|
|Name|object|false|none|none|
|DocumentVersion|object|false|none|none|
|AssociationVersion|object|false|none|none|
|InstanceId|object|false|none|none|
|ExecutionDate|object|false|none|none|
|Status|object|false|none|none|
|DetailedStatus|object|false|none|none|
|ExecutionSummary|object|false|none|none|
|ErrorCode|object|false|none|none|
|OutputUrl|object|false|none|none|
|AssociationName|object|false|none|none|

<h2 id="tocS_PingStatus">PingStatus</h2>
<!-- backwards compatibility -->
<a id="schemapingstatus"></a>
<a id="schema_PingStatus"></a>
<a id="tocSpingstatus"></a>
<a id="tocspingstatus"></a>

```json
"Online"
```

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
"string"
```

<h2 id="tocS_PlatformType">PlatformType</h2>
<!-- backwards compatibility -->
<a id="schemaplatformtype"></a>
<a id="schema_PlatformType"></a>
<a id="tocSplatformtype"></a>
<a id="tocsplatformtype"></a>

```json
"Windows"
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"ManagedInstance"
```

<h2 id="tocS_SourceId">SourceId</h2>
<!-- backwards compatibility -->
<a id="schemasourceid"></a>
<a id="schema_SourceId"></a>
<a id="tocSsourceid"></a>
<a id="tocssourceid"></a>

```json
"string"
```

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"AWS::EC2::Instance"
```

<h2 id="tocS_InstanceInformation">InstanceInformation</h2>
<!-- backwards compatibility -->
<a id="schemainstanceinformation"></a>
<a id="schema_InstanceInformation"></a>
<a id="tocSinstanceinformation"></a>
<a id="tocsinstanceinformation"></a>

```json
{
  "InstanceId": {},
  "PingStatus": {},
  "LastPingDateTime": {},
  "AgentVersion": {},
  "IsLatestVersion": {},
  "PlatformType": {},
  "PlatformName": {},
  "PlatformVersion": {},
  "ActivationId": {},
  "IamRole": {},
  "RegistrationDate": {},
  "ResourceType": {},
  "Name": {},
  "IPAddress": {},
  "ComputerName": {},
  "AssociationStatus": {},
  "LastAssociationExecutionDate": {},
  "LastSuccessfulAssociationExecutionDate": {},
  "AssociationOverview": {
    "DetailedStatus": {},
    "InstanceAssociationStatusAggregatedCount": {
      "property1": 0,
      "property2": 0
    }
  },
  "SourceId": {},
  "SourceType": {}
}
```

Describes a filter for a specific list of managed nodes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|PingStatus|object|false|none|none|
|LastPingDateTime|object|false|none|none|
|AgentVersion|object|false|none|none|
|IsLatestVersion|object|false|none|none|
|PlatformType|object|false|none|none|
|PlatformName|object|false|none|none|
|PlatformVersion|object|false|none|none|
|ActivationId|object|false|none|none|
|IamRole|object|false|none|none|
|RegistrationDate|object|false|none|none|
|ResourceType|object|false|none|none|
|Name|object|false|none|none|
|IPAddress|object|false|none|none|
|ComputerName|object|false|none|none|
|AssociationStatus|object|false|none|none|
|LastAssociationExecutionDate|object|false|none|none|
|LastSuccessfulAssociationExecutionDate|object|false|none|none|
|AssociationOverview|object|false|none|none|
|SourceId|object|false|none|none|
|SourceType|object|false|none|none|

<h2 id="tocS_InstanceInformationFilterKey">InstanceInformationFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemainstanceinformationfilterkey"></a>
<a id="schema_InstanceInformationFilterKey"></a>
<a id="tocSinstanceinformationfilterkey"></a>
<a id="tocsinstanceinformationfilterkey"></a>

```json
"InstanceIds"
```

<h2 id="tocS_InstanceInformationFilterValueSet">InstanceInformationFilterValueSet</h2>
<!-- backwards compatibility -->
<a id="schemainstanceinformationfiltervalueset"></a>
<a id="schema_InstanceInformationFilterValueSet"></a>
<a id="tocSinstanceinformationfiltervalueset"></a>
<a id="tocsinstanceinformationfiltervalueset"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InstanceInformationFilter">InstanceInformationFilter</h2>
<!-- backwards compatibility -->
<a id="schemainstanceinformationfilter"></a>
<a id="schema_InstanceInformationFilter"></a>
<a id="tocSinstanceinformationfilter"></a>
<a id="tocsinstanceinformationfilter"></a>

```json
{
  "key": {},
  "valueSet": {}
}
```

<p>Describes a filter for a specific list of managed nodes. You can filter node information by using tags. You specify tags by using a key-value mapping.</p> <p>Use this operation instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The <code>InstanceInformationFilterList</code> method is a legacy method and doesn't support tags. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|valueSet|object|true|none|none|

<h2 id="tocS_InstanceInformationFilterValue">InstanceInformationFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemainstanceinformationfiltervalue"></a>
<a id="schema_InstanceInformationFilterValue"></a>
<a id="tocSinstanceinformationfiltervalue"></a>
<a id="tocsinstanceinformationfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_InstanceInformationStringFilterKey">InstanceInformationStringFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemainstanceinformationstringfilterkey"></a>
<a id="schema_InstanceInformationStringFilterKey"></a>
<a id="tocSinstanceinformationstringfilterkey"></a>
<a id="tocsinstanceinformationstringfilterkey"></a>

```json
"string"
```

<h2 id="tocS_InstanceInformationStringFilter">InstanceInformationStringFilter</h2>
<!-- backwards compatibility -->
<a id="schemainstanceinformationstringfilter"></a>
<a id="schema_InstanceInformationStringFilter"></a>
<a id="tocSinstanceinformationstringfilter"></a>
<a id="tocsinstanceinformationstringfilter"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

The filters to describe or get information about your managed nodes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_PatchInstalledCount">PatchInstalledCount</h2>
<!-- backwards compatibility -->
<a id="schemapatchinstalledcount"></a>
<a id="schema_PatchInstalledCount"></a>
<a id="tocSpatchinstalledcount"></a>
<a id="tocspatchinstalledcount"></a>

```json
0
```

<h2 id="tocS_PatchInstalledOtherCount">PatchInstalledOtherCount</h2>
<!-- backwards compatibility -->
<a id="schemapatchinstalledothercount"></a>
<a id="schema_PatchInstalledOtherCount"></a>
<a id="tocSpatchinstalledothercount"></a>
<a id="tocspatchinstalledothercount"></a>

```json
0
```

<h2 id="tocS_PatchInstalledPendingRebootCount">PatchInstalledPendingRebootCount</h2>
<!-- backwards compatibility -->
<a id="schemapatchinstalledpendingrebootcount"></a>
<a id="schema_PatchInstalledPendingRebootCount"></a>
<a id="tocSpatchinstalledpendingrebootcount"></a>
<a id="tocspatchinstalledpendingrebootcount"></a>

```json
0
```

<h2 id="tocS_PatchInstalledRejectedCount">PatchInstalledRejectedCount</h2>
<!-- backwards compatibility -->
<a id="schemapatchinstalledrejectedcount"></a>
<a id="schema_PatchInstalledRejectedCount"></a>
<a id="tocSpatchinstalledrejectedcount"></a>
<a id="tocspatchinstalledrejectedcount"></a>

```json
0
```

<h2 id="tocS_PatchMissingCount">PatchMissingCount</h2>
<!-- backwards compatibility -->
<a id="schemapatchmissingcount"></a>
<a id="schema_PatchMissingCount"></a>
<a id="tocSpatchmissingcount"></a>
<a id="tocspatchmissingcount"></a>

```json
0
```

<h2 id="tocS_PatchFailedCount">PatchFailedCount</h2>
<!-- backwards compatibility -->
<a id="schemapatchfailedcount"></a>
<a id="schema_PatchFailedCount"></a>
<a id="tocSpatchfailedcount"></a>
<a id="tocspatchfailedcount"></a>

```json
0
```

<h2 id="tocS_PatchUnreportedNotApplicableCount">PatchUnreportedNotApplicableCount</h2>
<!-- backwards compatibility -->
<a id="schemapatchunreportednotapplicablecount"></a>
<a id="schema_PatchUnreportedNotApplicableCount"></a>
<a id="tocSpatchunreportednotapplicablecount"></a>
<a id="tocspatchunreportednotapplicablecount"></a>

```json
0
```

<h2 id="tocS_PatchNotApplicableCount">PatchNotApplicableCount</h2>
<!-- backwards compatibility -->
<a id="schemapatchnotapplicablecount"></a>
<a id="schema_PatchNotApplicableCount"></a>
<a id="tocSpatchnotapplicablecount"></a>
<a id="tocspatchnotapplicablecount"></a>

```json
0
```

<h2 id="tocS_PatchOperationType">PatchOperationType</h2>
<!-- backwards compatibility -->
<a id="schemapatchoperationtype"></a>
<a id="schema_PatchOperationType"></a>
<a id="tocSpatchoperationtype"></a>
<a id="tocspatchoperationtype"></a>

```json
"Scan"
```

<h2 id="tocS_RebootOption">RebootOption</h2>
<!-- backwards compatibility -->
<a id="schemarebootoption"></a>
<a id="schema_RebootOption"></a>
<a id="tocSrebootoption"></a>
<a id="tocsrebootoption"></a>

```json
"RebootIfNeeded"
```

<h2 id="tocS_PatchCriticalNonCompliantCount">PatchCriticalNonCompliantCount</h2>
<!-- backwards compatibility -->
<a id="schemapatchcriticalnoncompliantcount"></a>
<a id="schema_PatchCriticalNonCompliantCount"></a>
<a id="tocSpatchcriticalnoncompliantcount"></a>
<a id="tocspatchcriticalnoncompliantcount"></a>

```json
0
```

<h2 id="tocS_PatchSecurityNonCompliantCount">PatchSecurityNonCompliantCount</h2>
<!-- backwards compatibility -->
<a id="schemapatchsecuritynoncompliantcount"></a>
<a id="schema_PatchSecurityNonCompliantCount"></a>
<a id="tocSpatchsecuritynoncompliantcount"></a>
<a id="tocspatchsecuritynoncompliantcount"></a>

```json
0
```

<h2 id="tocS_PatchOtherNonCompliantCount">PatchOtherNonCompliantCount</h2>
<!-- backwards compatibility -->
<a id="schemapatchothernoncompliantcount"></a>
<a id="schema_PatchOtherNonCompliantCount"></a>
<a id="tocSpatchothernoncompliantcount"></a>
<a id="tocspatchothernoncompliantcount"></a>

```json
0
```

<h2 id="tocS_InstancePatchState">InstancePatchState</h2>
<!-- backwards compatibility -->
<a id="schemainstancepatchstate"></a>
<a id="schema_InstancePatchState"></a>
<a id="tocSinstancepatchstate"></a>
<a id="tocsinstancepatchstate"></a>

```json
{
  "InstanceId": {},
  "PatchGroup": {},
  "BaselineId": {},
  "SnapshotId": {},
  "InstallOverrideList": {},
  "OwnerInformation": {},
  "InstalledCount": {},
  "InstalledOtherCount": {},
  "InstalledPendingRebootCount": {},
  "InstalledRejectedCount": {},
  "MissingCount": {},
  "FailedCount": {},
  "UnreportedNotApplicableCount": {},
  "NotApplicableCount": {},
  "OperationStartTime": {},
  "OperationEndTime": {},
  "Operation": {},
  "LastNoRebootInstallOperationTime": {},
  "RebootOption": {},
  "CriticalNonCompliantCount": {},
  "SecurityNonCompliantCount": {},
  "OtherNonCompliantCount": {}
}
```

Defines the high-level patch compliance state for a managed node, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the managed node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|PatchGroup|object|true|none|none|
|BaselineId|object|true|none|none|
|SnapshotId|object|false|none|none|
|InstallOverrideList|object|false|none|none|
|OwnerInformation|object|false|none|none|
|InstalledCount|object|false|none|none|
|InstalledOtherCount|object|false|none|none|
|InstalledPendingRebootCount|object|false|none|none|
|InstalledRejectedCount|object|false|none|none|
|MissingCount|object|false|none|none|
|FailedCount|object|false|none|none|
|UnreportedNotApplicableCount|object|false|none|none|
|NotApplicableCount|object|false|none|none|
|OperationStartTime|object|true|none|none|
|OperationEndTime|object|true|none|none|
|Operation|object|true|none|none|
|LastNoRebootInstallOperationTime|object|false|none|none|
|RebootOption|object|false|none|none|
|CriticalNonCompliantCount|object|false|none|none|
|SecurityNonCompliantCount|object|false|none|none|
|OtherNonCompliantCount|object|false|none|none|

<h2 id="tocS_InstancePatchStateFilterKey">InstancePatchStateFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemainstancepatchstatefilterkey"></a>
<a id="schema_InstancePatchStateFilterKey"></a>
<a id="tocSinstancepatchstatefilterkey"></a>
<a id="tocsinstancepatchstatefilterkey"></a>

```json
"string"
```

<h2 id="tocS_InstancePatchStateFilterValues">InstancePatchStateFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemainstancepatchstatefiltervalues"></a>
<a id="schema_InstancePatchStateFilterValues"></a>
<a id="tocSinstancepatchstatefiltervalues"></a>
<a id="tocsinstancepatchstatefiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InstancePatchStateOperatorType">InstancePatchStateOperatorType</h2>
<!-- backwards compatibility -->
<a id="schemainstancepatchstateoperatortype"></a>
<a id="schema_InstancePatchStateOperatorType"></a>
<a id="tocSinstancepatchstateoperatortype"></a>
<a id="tocsinstancepatchstateoperatortype"></a>

```json
"Equal"
```

<h2 id="tocS_InstancePatchStateFilter">InstancePatchStateFilter</h2>
<!-- backwards compatibility -->
<a id="schemainstancepatchstatefilter"></a>
<a id="schema_InstancePatchStateFilter"></a>
<a id="tocSinstancepatchstatefilter"></a>
<a id="tocsinstancepatchstatefilter"></a>

```json
{
  "Key": {},
  "Values": {},
  "Type": {}
}
```

<p>Defines a filter used in <a>DescribeInstancePatchStatesForPatchGroup</a> to scope down the information returned by the API.</p> <p> <b>Example</b>: To filter for all managed nodes in a patch group having more than three patches with a <code>FailedCount</code> status, use the following for the filter:</p> <ul> <li> <p>Value for <code>Key</code>: <code>FailedCount</code> </p> </li> <li> <p>Value for <code>Type</code>: <code>GreaterThan</code> </p> </li> <li> <p>Value for <code>Values</code>: <code>3</code> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_InstancePatchStateFilterValue">InstancePatchStateFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemainstancepatchstatefiltervalue"></a>
<a id="schema_InstancePatchStateFilterValue"></a>
<a id="tocSinstancepatchstatefiltervalue"></a>
<a id="tocsinstancepatchstatefiltervalue"></a>

```json
"string"
```

<h2 id="tocS_InventoryAggregatorExpression">InventoryAggregatorExpression</h2>
<!-- backwards compatibility -->
<a id="schemainventoryaggregatorexpression"></a>
<a id="schema_InventoryAggregatorExpression"></a>
<a id="tocSinventoryaggregatorexpression"></a>
<a id="tocsinventoryaggregatorexpression"></a>

```json
"string"
```

<h2 id="tocS_InventoryGroupList">InventoryGroupList</h2>
<!-- backwards compatibility -->
<a id="schemainventorygrouplist"></a>
<a id="schema_InventoryGroupList"></a>
<a id="tocSinventorygrouplist"></a>
<a id="tocsinventorygrouplist"></a>

```json
[
  {
    "Name": {},
    "Filters": {}
  }
]
```

<h2 id="tocS_InventoryAggregator">InventoryAggregator</h2>
<!-- backwards compatibility -->
<a id="schemainventoryaggregator"></a>
<a id="schema_InventoryAggregator"></a>
<a id="tocSinventoryaggregator"></a>
<a id="tocsinventoryaggregator"></a>

```json
{
  "Expression": {},
  "Aggregators": {},
  "Groups": {}
}
```

Specifies the inventory type and attribute for the aggregation execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|object|false|none|none|
|Aggregators|object|false|none|none|
|Groups|object|false|none|none|

<h2 id="tocS_InventoryAttributeDataType">InventoryAttributeDataType</h2>
<!-- backwards compatibility -->
<a id="schemainventoryattributedatatype"></a>
<a id="schema_InventoryAttributeDataType"></a>
<a id="tocSinventoryattributedatatype"></a>
<a id="tocsinventoryattributedatatype"></a>

```json
"string"
```

<h2 id="tocS_InventoryDeletionLastStatusMessage">InventoryDeletionLastStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemainventorydeletionlaststatusmessage"></a>
<a id="schema_InventoryDeletionLastStatusMessage"></a>
<a id="tocSinventorydeletionlaststatusmessage"></a>
<a id="tocsinventorydeletionlaststatusmessage"></a>

```json
"string"
```

<h2 id="tocS_InventoryDeletionLastStatusUpdateTime">InventoryDeletionLastStatusUpdateTime</h2>
<!-- backwards compatibility -->
<a id="schemainventorydeletionlaststatusupdatetime"></a>
<a id="schema_InventoryDeletionLastStatusUpdateTime"></a>
<a id="tocSinventorydeletionlaststatusupdatetime"></a>
<a id="tocsinventorydeletionlaststatusupdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_InventoryDeletionStartTime">InventoryDeletionStartTime</h2>
<!-- backwards compatibility -->
<a id="schemainventorydeletionstarttime"></a>
<a id="schema_InventoryDeletionStartTime"></a>
<a id="tocSinventorydeletionstarttime"></a>
<a id="tocsinventorydeletionstarttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_InventoryDeletionStatus">InventoryDeletionStatus</h2>
<!-- backwards compatibility -->
<a id="schemainventorydeletionstatus"></a>
<a id="schema_InventoryDeletionStatus"></a>
<a id="tocSinventorydeletionstatus"></a>
<a id="tocsinventorydeletionstatus"></a>

```json
"InProgress"
```

<h2 id="tocS_InventoryDeletionStatusItem">InventoryDeletionStatusItem</h2>
<!-- backwards compatibility -->
<a id="schemainventorydeletionstatusitem"></a>
<a id="schema_InventoryDeletionStatusItem"></a>
<a id="tocSinventorydeletionstatusitem"></a>
<a id="tocsinventorydeletionstatusitem"></a>

```json
{
  "DeletionId": {},
  "TypeName": {},
  "DeletionStartTime": {},
  "LastStatus": {},
  "LastStatusMessage": {},
  "DeletionSummary": {
    "TotalCount": {},
    "RemainingCount": {},
    "SummaryItems": {}
  },
  "LastStatusUpdateTime": {}
}
```

Status information returned by the <code>DeleteInventory</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeletionId|object|false|none|none|
|TypeName|object|false|none|none|
|DeletionStartTime|object|false|none|none|
|LastStatus|object|false|none|none|
|LastStatusMessage|object|false|none|none|
|DeletionSummary|object|false|none|none|
|LastStatusUpdateTime|object|false|none|none|

<h2 id="tocS_TotalCount">TotalCount</h2>
<!-- backwards compatibility -->
<a id="schematotalcount"></a>
<a id="schema_TotalCount"></a>
<a id="tocStotalcount"></a>
<a id="tocstotalcount"></a>

```json
0
```

<h2 id="tocS_RemainingCount">RemainingCount</h2>
<!-- backwards compatibility -->
<a id="schemaremainingcount"></a>
<a id="schema_RemainingCount"></a>
<a id="tocSremainingcount"></a>
<a id="tocsremainingcount"></a>

```json
0
```

<h2 id="tocS_InventoryDeletionSummaryItems">InventoryDeletionSummaryItems</h2>
<!-- backwards compatibility -->
<a id="schemainventorydeletionsummaryitems"></a>
<a id="schema_InventoryDeletionSummaryItems"></a>
<a id="tocSinventorydeletionsummaryitems"></a>
<a id="tocsinventorydeletionsummaryitems"></a>

```json
[
  {
    "Version": {},
    "Count": {},
    "RemainingCount": {}
  }
]
```

<h2 id="tocS_InventoryItemSchemaVersion">InventoryItemSchemaVersion</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitemschemaversion"></a>
<a id="schema_InventoryItemSchemaVersion"></a>
<a id="tocSinventoryitemschemaversion"></a>
<a id="tocsinventoryitemschemaversion"></a>

```json
"string"
```

<h2 id="tocS_ResourceCount">ResourceCount</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecount"></a>
<a id="schema_ResourceCount"></a>
<a id="tocSresourcecount"></a>
<a id="tocsresourcecount"></a>

```json
0
```

<h2 id="tocS_InventoryDeletionSummaryItem">InventoryDeletionSummaryItem</h2>
<!-- backwards compatibility -->
<a id="schemainventorydeletionsummaryitem"></a>
<a id="schema_InventoryDeletionSummaryItem"></a>
<a id="tocSinventorydeletionsummaryitem"></a>
<a id="tocsinventorydeletionsummaryitem"></a>

```json
{
  "Version": {},
  "Count": {},
  "RemainingCount": {}
}
```

Either a count, remaining count, or a version number in a delete inventory summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Version|object|false|none|none|
|Count|object|false|none|none|
|RemainingCount|object|false|none|none|

<h2 id="tocS_InventoryFilterKey">InventoryFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemainventoryfilterkey"></a>
<a id="schema_InventoryFilterKey"></a>
<a id="tocSinventoryfilterkey"></a>
<a id="tocsinventoryfilterkey"></a>

```json
"string"
```

<h2 id="tocS_InventoryFilterValueList">InventoryFilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemainventoryfiltervaluelist"></a>
<a id="schema_InventoryFilterValueList"></a>
<a id="tocSinventoryfiltervaluelist"></a>
<a id="tocsinventoryfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InventoryQueryOperatorType">InventoryQueryOperatorType</h2>
<!-- backwards compatibility -->
<a id="schemainventoryqueryoperatortype"></a>
<a id="schema_InventoryQueryOperatorType"></a>
<a id="tocSinventoryqueryoperatortype"></a>
<a id="tocsinventoryqueryoperatortype"></a>

```json
"Equal"
```

<h2 id="tocS_InventoryFilter">InventoryFilter</h2>
<!-- backwards compatibility -->
<a id="schemainventoryfilter"></a>
<a id="schema_InventoryFilter"></a>
<a id="tocSinventoryfilter"></a>
<a id="tocsinventoryfilter"></a>

```json
{
  "Key": {},
  "Values": {},
  "Type": {}
}
```

One or more filters. Use a filter to return a more specific list of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|
|Type|object|false|none|none|

<h2 id="tocS_InventoryFilterValue">InventoryFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemainventoryfiltervalue"></a>
<a id="schema_InventoryFilterValue"></a>
<a id="tocSinventoryfiltervalue"></a>
<a id="tocsinventoryfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_InventoryGroupName">InventoryGroupName</h2>
<!-- backwards compatibility -->
<a id="schemainventorygroupname"></a>
<a id="schema_InventoryGroupName"></a>
<a id="tocSinventorygroupname"></a>
<a id="tocsinventorygroupname"></a>

```json
"string"
```

<h2 id="tocS_InventoryGroup">InventoryGroup</h2>
<!-- backwards compatibility -->
<a id="schemainventorygroup"></a>
<a id="schema_InventoryGroup"></a>
<a id="tocSinventorygroup"></a>
<a id="tocsinventorygroup"></a>

```json
{
  "Name": {},
  "Filters": {}
}
```

A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Filters|object|true|none|none|

<h2 id="tocS_InventoryItemCaptureTime">InventoryItemCaptureTime</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitemcapturetime"></a>
<a id="schema_InventoryItemCaptureTime"></a>
<a id="tocSinventoryitemcapturetime"></a>
<a id="tocsinventoryitemcapturetime"></a>

```json
"string"
```

<h2 id="tocS_InventoryItemContentHash">InventoryItemContentHash</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitemcontenthash"></a>
<a id="schema_InventoryItemContentHash"></a>
<a id="tocSinventoryitemcontenthash"></a>
<a id="tocsinventoryitemcontenthash"></a>

```json
"string"
```

<h2 id="tocS_InventoryItemEntryList">InventoryItemEntryList</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitementrylist"></a>
<a id="schema_InventoryItemEntryList"></a>
<a id="tocSinventoryitementrylist"></a>
<a id="tocsinventoryitementrylist"></a>

```json
[
  {
    "property1": "string",
    "property2": "string"
  }
]
```

<h2 id="tocS_InventoryItemContentContext">InventoryItemContentContext</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitemcontentcontext"></a>
<a id="schema_InventoryItemContentContext"></a>
<a id="tocSinventoryitemcontentcontext"></a>
<a id="tocsinventoryitemcontentcontext"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none|none|

<h2 id="tocS_InventoryItem">InventoryItem</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitem"></a>
<a id="schema_InventoryItem"></a>
<a id="tocSinventoryitem"></a>
<a id="tocsinventoryitem"></a>

```json
{
  "TypeName": {},
  "SchemaVersion": {},
  "CaptureTime": {},
  "ContentHash": {},
  "Content": {},
  "Context": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information collected from managed nodes based on your inventory policy document

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeName|object|true|none|none|
|SchemaVersion|object|true|none|none|
|CaptureTime|object|true|none|none|
|ContentHash|object|false|none|none|
|Content|object|false|none|none|
|Context|object|false|none|none|

<h2 id="tocS_InventoryItemAttributeName">InventoryItemAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitemattributename"></a>
<a id="schema_InventoryItemAttributeName"></a>
<a id="tocSinventoryitemattributename"></a>
<a id="tocsinventoryitemattributename"></a>

```json
"string"
```

<h2 id="tocS_InventoryItemAttribute">InventoryItemAttribute</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitemattribute"></a>
<a id="schema_InventoryItemAttribute"></a>
<a id="tocSinventoryitemattribute"></a>
<a id="tocsinventoryitemattribute"></a>

```json
{
  "Name": {},
  "DataType": {}
}
```

Attributes are the entries within the inventory item content. It contains name and value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DataType|object|true|none|none|

<h2 id="tocS_InventoryItemAttributeList">InventoryItemAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitemattributelist"></a>
<a id="schema_InventoryItemAttributeList"></a>
<a id="tocSinventoryitemattributelist"></a>
<a id="tocsinventoryitemattributelist"></a>

```json
[
  {
    "Name": {},
    "DataType": {}
  }
]
```

<h2 id="tocS_InventoryItemEntry">InventoryItemEntry</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitementry"></a>
<a id="schema_InventoryItemEntry"></a>
<a id="tocSinventoryitementry"></a>
<a id="tocsinventoryitementry"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none|none|

<h2 id="tocS_InventoryItemList">InventoryItemList</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitemlist"></a>
<a id="schema_InventoryItemList"></a>
<a id="tocSinventoryitemlist"></a>
<a id="tocsinventoryitemlist"></a>

```json
[
  {
    "TypeName": {},
    "SchemaVersion": {},
    "CaptureTime": {},
    "ContentHash": {},
    "Content": {},
    "Context": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_InventoryTypeDisplayName">InventoryTypeDisplayName</h2>
<!-- backwards compatibility -->
<a id="schemainventorytypedisplayname"></a>
<a id="schema_InventoryTypeDisplayName"></a>
<a id="tocSinventorytypedisplayname"></a>
<a id="tocsinventorytypedisplayname"></a>

```json
"string"
```

<h2 id="tocS_InventoryItemSchema">InventoryItemSchema</h2>
<!-- backwards compatibility -->
<a id="schemainventoryitemschema"></a>
<a id="schema_InventoryItemSchema"></a>
<a id="tocSinventoryitemschema"></a>
<a id="tocsinventoryitemschema"></a>

```json
{
  "TypeName": {},
  "Version": {},
  "Attributes": {},
  "DisplayName": {}
}
```

The inventory item schema definition. Users can use this to compose inventory query filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeName|object|true|none|none|
|Version|object|false|none|none|
|Attributes|object|true|none|none|
|DisplayName|object|false|none|none|

<h2 id="tocS_InventoryResultEntityId">InventoryResultEntityId</h2>
<!-- backwards compatibility -->
<a id="schemainventoryresultentityid"></a>
<a id="schema_InventoryResultEntityId"></a>
<a id="tocSinventoryresultentityid"></a>
<a id="tocsinventoryresultentityid"></a>

```json
"string"
```

<h2 id="tocS_InventoryResultItemMap">InventoryResultItemMap</h2>
<!-- backwards compatibility -->
<a id="schemainventoryresultitemmap"></a>
<a id="schema_InventoryResultItemMap"></a>
<a id="tocSinventoryresultitemmap"></a>
<a id="tocsinventoryresultitemmap"></a>

```json
{
  "property1": {
    "TypeName": {},
    "SchemaVersion": {},
    "CaptureTime": {},
    "ContentHash": {},
    "Content": {}
  },
  "property2": {
    "TypeName": {},
    "SchemaVersion": {},
    "CaptureTime": {},
    "ContentHash": {},
    "Content": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[InventoryResultItem](#schemainventoryresultitem)|false|none|The inventory result item.|

<h2 id="tocS_InventoryResultEntity">InventoryResultEntity</h2>
<!-- backwards compatibility -->
<a id="schemainventoryresultentity"></a>
<a id="schema_InventoryResultEntity"></a>
<a id="tocSinventoryresultentity"></a>
<a id="tocsinventoryresultentity"></a>

```json
{
  "Id": {},
  "Data": {
    "property1": {
      "TypeName": {},
      "SchemaVersion": {},
      "CaptureTime": {},
      "ContentHash": {},
      "Content": {}
    },
    "property2": {
      "TypeName": {},
      "SchemaVersion": {},
      "CaptureTime": {},
      "ContentHash": {},
      "Content": {}
    }
  }
}
```

Inventory query results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Data|object|false|none|none|

<h2 id="tocS_InventoryResultItem">InventoryResultItem</h2>
<!-- backwards compatibility -->
<a id="schemainventoryresultitem"></a>
<a id="schema_InventoryResultItem"></a>
<a id="tocSinventoryresultitem"></a>
<a id="tocsinventoryresultitem"></a>

```json
{
  "TypeName": {},
  "SchemaVersion": {},
  "CaptureTime": {},
  "ContentHash": {},
  "Content": {}
}
```

The inventory result item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeName|object|true|none|none|
|SchemaVersion|object|true|none|none|
|CaptureTime|object|false|none|none|
|ContentHash|object|false|none|none|
|Content|object|true|none|none|

<h2 id="tocS_InventoryResultItemKey">InventoryResultItemKey</h2>
<!-- backwards compatibility -->
<a id="schemainventoryresultitemkey"></a>
<a id="schema_InventoryResultItemKey"></a>
<a id="tocSinventoryresultitemkey"></a>
<a id="tocsinventoryresultitemkey"></a>

```json
"string"
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

<h2 id="tocS_KeyList">KeyList</h2>
<!-- backwards compatibility -->
<a id="schemakeylist"></a>
<a id="schema_KeyList"></a>
<a id="tocSkeylist"></a>
<a id="tocskeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PSParameterVersion">PSParameterVersion</h2>
<!-- backwards compatibility -->
<a id="schemapsparameterversion"></a>
<a id="schema_PSParameterVersion"></a>
<a id="tocSpsparameterversion"></a>
<a id="tocspsparameterversion"></a>

```json
0
```

<h2 id="tocS_ParameterLabelList">ParameterLabelList</h2>
<!-- backwards compatibility -->
<a id="schemaparameterlabellist"></a>
<a id="schema_ParameterLabelList"></a>
<a id="tocSparameterlabellist"></a>
<a id="tocsparameterlabellist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LastResourceDataSyncMessage">LastResourceDataSyncMessage</h2>
<!-- backwards compatibility -->
<a id="schemalastresourcedatasyncmessage"></a>
<a id="schema_LastResourceDataSyncMessage"></a>
<a id="tocSlastresourcedatasyncmessage"></a>
<a id="tocslastresourcedatasyncmessage"></a>

```json
"string"
```

<h2 id="tocS_LastResourceDataSyncStatus">LastResourceDataSyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemalastresourcedatasyncstatus"></a>
<a id="schema_LastResourceDataSyncStatus"></a>
<a id="tocSlastresourcedatasyncstatus"></a>
<a id="tocslastresourcedatasyncstatus"></a>

```json
"Successful"
```

<h2 id="tocS_LastResourceDataSyncTime">LastResourceDataSyncTime</h2>
<!-- backwards compatibility -->
<a id="schemalastresourcedatasynctime"></a>
<a id="schema_LastResourceDataSyncTime"></a>
<a id="tocSlastresourcedatasynctime"></a>
<a id="tocslastresourcedatasynctime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_LastSuccessfulResourceDataSyncTime">LastSuccessfulResourceDataSyncTime</h2>
<!-- backwards compatibility -->
<a id="schemalastsuccessfulresourcedatasynctime"></a>
<a id="schema_LastSuccessfulResourceDataSyncTime"></a>
<a id="tocSlastsuccessfulresourcedatasynctime"></a>
<a id="tocslastsuccessfulresourcedatasynctime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_OpsItemEventFilters">OpsItemEventFilters</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemeventfilters"></a>
<a id="schema_OpsItemEventFilters"></a>
<a id="tocSopsitemeventfilters"></a>
<a id="tocsopsitemeventfilters"></a>

```json
[
  {
    "Key": {},
    "Values": {},
    "Operator": {}
  }
]
```

<h2 id="tocS_OpsItemEventMaxResults">OpsItemEventMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemeventmaxresults"></a>
<a id="schema_OpsItemEventMaxResults"></a>
<a id="tocSopsitemeventmaxresults"></a>
<a id="tocsopsitemeventmaxresults"></a>

```json
1
```

<h2 id="tocS_OpsItemEventSummaries">OpsItemEventSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemeventsummaries"></a>
<a id="schema_OpsItemEventSummaries"></a>
<a id="tocSopsitemeventsummaries"></a>
<a id="tocsopsitemeventsummaries"></a>

```json
[
  {
    "OpsItemId": {},
    "EventId": {},
    "Source": {},
    "DetailType": {},
    "Detail": {},
    "CreatedBy": {
      "Arn": {}
    },
    "CreatedTime": {}
  }
]
```

<h2 id="tocS_OpsItemRelatedItemsFilters">OpsItemRelatedItemsFilters</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemsfilters"></a>
<a id="schema_OpsItemRelatedItemsFilters"></a>
<a id="tocSopsitemrelateditemsfilters"></a>
<a id="tocsopsitemrelateditemsfilters"></a>

```json
[
  {
    "Key": {},
    "Values": {},
    "Operator": {}
  }
]
```

<h2 id="tocS_OpsItemRelatedItemsMaxResults">OpsItemRelatedItemsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemsmaxresults"></a>
<a id="schema_OpsItemRelatedItemsMaxResults"></a>
<a id="tocSopsitemrelateditemsmaxresults"></a>
<a id="tocsopsitemrelateditemsmaxresults"></a>

```json
1
```

<h2 id="tocS_OpsItemRelatedItemSummaries">OpsItemRelatedItemSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemsummaries"></a>
<a id="schema_OpsItemRelatedItemSummaries"></a>
<a id="tocSopsitemrelateditemsummaries"></a>
<a id="tocsopsitemrelateditemsummaries"></a>

```json
[
  {
    "OpsItemId": {},
    "AssociationId": {},
    "ResourceType": {},
    "AssociationType": {},
    "ResourceUri": {},
    "CreatedBy": {
      "Arn": {}
    },
    "CreatedTime": {},
    "LastModifiedBy": {
      "Arn": {}
    },
    "LastModifiedTime": {}
  }
]
```

<h2 id="tocS_ListOpsMetadataMaxResults">ListOpsMetadataMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistopsmetadatamaxresults"></a>
<a id="schema_ListOpsMetadataMaxResults"></a>
<a id="tocSlistopsmetadatamaxresults"></a>
<a id="tocslistopsmetadatamaxresults"></a>

```json
1
```

<h2 id="tocS_OpsMetadataFilterList">OpsMetadataFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadatafilterlist"></a>
<a id="schema_OpsMetadataFilterList"></a>
<a id="tocSopsmetadatafilterlist"></a>
<a id="tocsopsmetadatafilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_OpsMetadataList">OpsMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadatalist"></a>
<a id="schema_OpsMetadataList"></a>
<a id="tocSopsmetadatalist"></a>
<a id="tocsopsmetadatalist"></a>

```json
[
  {
    "ResourceId": {},
    "OpsMetadataArn": {},
    "LastModifiedDate": {},
    "LastModifiedUser": {},
    "CreationDate": {}
  }
]
```

<h2 id="tocS_ResourceComplianceSummaryItemList">ResourceComplianceSummaryItemList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecompliancesummaryitemlist"></a>
<a id="schema_ResourceComplianceSummaryItemList"></a>
<a id="tocSresourcecompliancesummaryitemlist"></a>
<a id="tocsresourcecompliancesummaryitemlist"></a>

```json
[
  {
    "ComplianceType": {},
    "ResourceType": {},
    "ResourceId": {},
    "Status": {},
    "OverallSeverity": {},
    "ExecutionSummary": {
      "ExecutionTime": {},
      "ExecutionId": {},
      "ExecutionType": {}
    },
    "CompliantSummary": {
      "CompliantCount": {},
      "SeveritySummary": {
        "CriticalCount": {},
        "HighCount": {},
        "MediumCount": {},
        "LowCount": {},
        "InformationalCount": {},
        "UnspecifiedCount": {}
      }
    },
    "NonCompliantSummary": {
      "NonCompliantCount": {},
      "SeveritySummary": {
        "CriticalCount": {},
        "HighCount": {},
        "MediumCount": {},
        "LowCount": {},
        "InformationalCount": {},
        "UnspecifiedCount": {}
      }
    }
  }
]
```

<h2 id="tocS_ResourceDataSyncItemList">ResourceDataSyncItemList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncitemlist"></a>
<a id="schema_ResourceDataSyncItemList"></a>
<a id="tocSresourcedatasyncitemlist"></a>
<a id="tocsresourcedatasyncitemlist"></a>

```json
[
  {
    "SyncName": {},
    "SyncType": {},
    "SyncSource": {
      "SourceType": {},
      "AwsOrganizationsSource": {
        "OrganizationSourceType": {},
        "OrganizationalUnits": {}
      },
      "SourceRegions": {},
      "IncludeFutureRegions": {},
      "State": {},
      "EnableAllOpsDataSources": {}
    },
    "S3Destination": {
      "BucketName": {},
      "Prefix": {},
      "SyncFormat": {},
      "Region": {},
      "AWSKMSKeyARN": {},
      "DestinationDataSharing": {
        "DestinationDataSharingType": {}
      }
    },
    "LastSyncTime": {},
    "LastSuccessfulSyncTime": {},
    "SyncLastModifiedTime": {},
    "LastStatus": {},
    "SyncCreatedTime": {},
    "LastSyncStatusMessage": {}
  }
]
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_MaintenanceWindowAutomationParameters">MaintenanceWindowAutomationParameters</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowautomationparameters"></a>
<a id="schema_MaintenanceWindowAutomationParameters"></a>
<a id="tocSmaintenancewindowautomationparameters"></a>
<a id="tocsmaintenancewindowautomationparameters"></a>

```json
{
  "DocumentVersion": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

The parameters for an <code>AUTOMATION</code> task type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentVersion|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_MaintenanceWindowExecution">MaintenanceWindowExecution</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecution"></a>
<a id="schema_MaintenanceWindowExecution"></a>
<a id="tocSmaintenancewindowexecution"></a>
<a id="tocsmaintenancewindowexecution"></a>

```json
{
  "WindowId": {},
  "WindowExecutionId": {},
  "Status": {},
  "StatusDetails": {},
  "StartTime": {},
  "EndTime": {}
}
```

Describes the information about an execution of a maintenance window.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|WindowExecutionId|object|false|none|none|
|Status|object|false|none|none|
|StatusDetails|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_MaintenanceWindowExecutionTaskIdentity">MaintenanceWindowExecutionTaskIdentity</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecutiontaskidentity"></a>
<a id="schema_MaintenanceWindowExecutionTaskIdentity"></a>
<a id="tocSmaintenancewindowexecutiontaskidentity"></a>
<a id="tocsmaintenancewindowexecutiontaskidentity"></a>

```json
{
  "WindowExecutionId": {},
  "TaskExecutionId": {},
  "Status": {},
  "StatusDetails": {},
  "StartTime": {},
  "EndTime": {},
  "TaskArn": {},
  "TaskType": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  },
  "TriggeredAlarms": {}
}
```

Information about a task execution performed as part of a maintenance window execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionId|object|false|none|none|
|TaskExecutionId|object|false|none|none|
|Status|object|false|none|none|
|StatusDetails|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|TaskArn|object|false|none|none|
|TaskType|object|false|none|none|
|AlarmConfiguration|object|false|none|none|
|TriggeredAlarms|object|false|none|none|

<h2 id="tocS_MaintenanceWindowExecutionTaskInvocationIdentity">MaintenanceWindowExecutionTaskInvocationIdentity</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowexecutiontaskinvocationidentity"></a>
<a id="schema_MaintenanceWindowExecutionTaskInvocationIdentity"></a>
<a id="tocSmaintenancewindowexecutiontaskinvocationidentity"></a>
<a id="tocsmaintenancewindowexecutiontaskinvocationidentity"></a>

```json
{
  "WindowExecutionId": {},
  "TaskExecutionId": {},
  "InvocationId": {},
  "ExecutionId": {},
  "TaskType": {},
  "Parameters": {},
  "Status": {},
  "StatusDetails": {},
  "StartTime": {},
  "EndTime": {},
  "OwnerInformation": {},
  "WindowTargetId": {}
}
```

Describes the information about a task invocation for a particular target as part of a task execution performed as part of a maintenance window execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowExecutionId|object|false|none|none|
|TaskExecutionId|object|false|none|none|
|InvocationId|object|false|none|none|
|ExecutionId|object|false|none|none|
|TaskType|object|false|none|none|
|Parameters|object|false|none|none|
|Status|object|false|none|none|
|StatusDetails|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|OwnerInformation|object|false|none|none|
|WindowTargetId|object|false|none|none|

<h2 id="tocS_MaintenanceWindowFilterKey">MaintenanceWindowFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowfilterkey"></a>
<a id="schema_MaintenanceWindowFilterKey"></a>
<a id="tocSmaintenancewindowfilterkey"></a>
<a id="tocsmaintenancewindowfilterkey"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowFilterValues">MaintenanceWindowFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowfiltervalues"></a>
<a id="schema_MaintenanceWindowFilterValues"></a>
<a id="tocSmaintenancewindowfiltervalues"></a>
<a id="tocsmaintenancewindowfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MaintenanceWindowFilter">MaintenanceWindowFilter</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowfilter"></a>
<a id="schema_MaintenanceWindowFilter"></a>
<a id="tocSmaintenancewindowfilter"></a>
<a id="tocsmaintenancewindowfilter"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

<p>Filter used in the request. Supported filter keys depend on the API operation that includes the filter. API operations that use <code>MaintenanceWindowFilter&gt;</code> include the following:</p> <ul> <li> <p> <a>DescribeMaintenanceWindowExecutions</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowExecutionTaskInvocations</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowExecutionTasks</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindows</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowTargets</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowTasks</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_MaintenanceWindowFilterValue">MaintenanceWindowFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowfiltervalue"></a>
<a id="schema_MaintenanceWindowFilterValue"></a>
<a id="tocSmaintenancewindowfiltervalue"></a>
<a id="tocsmaintenancewindowfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowIdentity">MaintenanceWindowIdentity</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowidentity"></a>
<a id="schema_MaintenanceWindowIdentity"></a>
<a id="tocSmaintenancewindowidentity"></a>
<a id="tocsmaintenancewindowidentity"></a>

```json
{
  "WindowId": {},
  "Name": {},
  "Description": {},
  "Enabled": {},
  "Duration": {},
  "Cutoff": {},
  "Schedule": {},
  "ScheduleTimezone": {},
  "ScheduleOffset": {},
  "EndDate": {},
  "StartDate": {},
  "NextExecutionTime": {}
}
```

Information about the maintenance window.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Enabled|object|false|none|none|
|Duration|object|false|none|none|
|Cutoff|object|false|none|none|
|Schedule|object|false|none|none|
|ScheduleTimezone|object|false|none|none|
|ScheduleOffset|object|false|none|none|
|EndDate|object|false|none|none|
|StartDate|object|false|none|none|
|NextExecutionTime|object|false|none|none|

<h2 id="tocS_MaintenanceWindowIdentityForTarget">MaintenanceWindowIdentityForTarget</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowidentityfortarget"></a>
<a id="schema_MaintenanceWindowIdentityForTarget"></a>
<a id="tocSmaintenancewindowidentityfortarget"></a>
<a id="tocsmaintenancewindowidentityfortarget"></a>

```json
{
  "WindowId": {},
  "Name": {}
}
```

The maintenance window to which the specified target belongs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_MaintenanceWindowLambdaClientContext">MaintenanceWindowLambdaClientContext</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowlambdaclientcontext"></a>
<a id="schema_MaintenanceWindowLambdaClientContext"></a>
<a id="tocSmaintenancewindowlambdaclientcontext"></a>
<a id="tocsmaintenancewindowlambdaclientcontext"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowLambdaQualifier">MaintenanceWindowLambdaQualifier</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowlambdaqualifier"></a>
<a id="schema_MaintenanceWindowLambdaQualifier"></a>
<a id="tocSmaintenancewindowlambdaqualifier"></a>
<a id="tocsmaintenancewindowlambdaqualifier"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowLambdaPayload">MaintenanceWindowLambdaPayload</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowlambdapayload"></a>
<a id="schema_MaintenanceWindowLambdaPayload"></a>
<a id="tocSmaintenancewindowlambdapayload"></a>
<a id="tocsmaintenancewindowlambdapayload"></a>

```json
"password"
```

<h2 id="tocS_MaintenanceWindowLambdaParameters">MaintenanceWindowLambdaParameters</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowlambdaparameters"></a>
<a id="schema_MaintenanceWindowLambdaParameters"></a>
<a id="tocSmaintenancewindowlambdaparameters"></a>
<a id="tocsmaintenancewindowlambdaparameters"></a>

```json
{
  "ClientContext": {},
  "Qualifier": {},
  "Payload": {}
}
```

<p>The parameters for a <code>LAMBDA</code> task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and LoggingInfo.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientContext|object|false|none|none|
|Qualifier|object|false|none|none|
|Payload|object|false|none|none|

<h2 id="tocS_MaintenanceWindowRunCommandParameters">MaintenanceWindowRunCommandParameters</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowruncommandparameters"></a>
<a id="schema_MaintenanceWindowRunCommandParameters"></a>
<a id="tocSmaintenancewindowruncommandparameters"></a>
<a id="tocsmaintenancewindowruncommandparameters"></a>

```json
{
  "Comment": {},
  "CloudWatchOutputConfig": {
    "CloudWatchLogGroupName": {},
    "CloudWatchOutputEnabled": {}
  },
  "DocumentHash": {},
  "DocumentHashType": {},
  "DocumentVersion": {},
  "NotificationConfig": {
    "NotificationArn": {},
    "NotificationEvents": {},
    "NotificationType": {}
  },
  "OutputS3BucketName": {},
  "OutputS3KeyPrefix": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "ServiceRoleArn": {},
  "TimeoutSeconds": {}
}
```

<p>The parameters for a <code>RUN_COMMAND</code> task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For <code>RUN_COMMAND</code> tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|object|false|none|none|
|CloudWatchOutputConfig|[CloudWatchOutputConfig](#schemacloudwatchoutputconfig)|false|none|Configuration options for sending command output to Amazon CloudWatch Logs.|
|DocumentHash|object|false|none|none|
|DocumentHashType|object|false|none|none|
|DocumentVersion|object|false|none|none|
|NotificationConfig|object|false|none|none|
|OutputS3BucketName|object|false|none|none|
|OutputS3KeyPrefix|object|false|none|none|
|Parameters|object|false|none|none|
|ServiceRoleArn|object|false|none|none|
|TimeoutSeconds|object|false|none|none|

<h2 id="tocS_MaintenanceWindowStepFunctionsInput">MaintenanceWindowStepFunctionsInput</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowstepfunctionsinput"></a>
<a id="schema_MaintenanceWindowStepFunctionsInput"></a>
<a id="tocSmaintenancewindowstepfunctionsinput"></a>
<a id="tocsmaintenancewindowstepfunctionsinput"></a>

```json
"password"
```

<h2 id="tocS_MaintenanceWindowStepFunctionsName">MaintenanceWindowStepFunctionsName</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowstepfunctionsname"></a>
<a id="schema_MaintenanceWindowStepFunctionsName"></a>
<a id="tocSmaintenancewindowstepfunctionsname"></a>
<a id="tocsmaintenancewindowstepfunctionsname"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowStepFunctionsParameters">MaintenanceWindowStepFunctionsParameters</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowstepfunctionsparameters"></a>
<a id="schema_MaintenanceWindowStepFunctionsParameters"></a>
<a id="tocSmaintenancewindowstepfunctionsparameters"></a>
<a id="tocsmaintenancewindowstepfunctionsparameters"></a>

```json
{
  "Input": {},
  "Name": {}
}
```

<p>The parameters for a <code>STEP_FUNCTIONS</code> task.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Step Functions tasks, Systems Manager ignores any values specified for <code>TaskParameters</code> and <code>LoggingInfo</code>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Input|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_MaintenanceWindowTarget">MaintenanceWindowTarget</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtarget"></a>
<a id="schema_MaintenanceWindowTarget"></a>
<a id="tocSmaintenancewindowtarget"></a>
<a id="tocsmaintenancewindowtarget"></a>

```json
{
  "WindowId": {},
  "WindowTargetId": {},
  "ResourceType": {},
  "Targets": {},
  "OwnerInformation": {},
  "Name": {},
  "Description": {}
}
```

The target registered with the maintenance window.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|WindowTargetId|object|false|none|none|
|ResourceType|object|false|none|none|
|Targets|object|false|none|none|
|OwnerInformation|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_MaintenanceWindowTask">MaintenanceWindowTask</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtask"></a>
<a id="schema_MaintenanceWindowTask"></a>
<a id="tocSmaintenancewindowtask"></a>
<a id="tocsmaintenancewindowtask"></a>

```json
{
  "WindowId": {},
  "WindowTaskId": {},
  "TaskArn": {},
  "Type": {},
  "Targets": {},
  "TaskParameters": {
    "property1": {
      "Values": {}
    },
    "property2": {
      "Values": {}
    }
  },
  "Priority": {},
  "LoggingInfo": {
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "S3Region": {}
  },
  "ServiceRoleArn": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "Name": {},
  "Description": {},
  "CutoffBehavior": {},
  "AlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

Information about a task defined for a maintenance window.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|WindowTaskId|object|false|none|none|
|TaskArn|object|false|none|none|
|Type|object|false|none|none|
|Targets|object|false|none|none|
|TaskParameters|object|false|none|none|
|Priority|object|false|none|none|
|LoggingInfo|object|false|none|none|
|ServiceRoleArn|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|MaxErrors|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|CutoffBehavior|object|false|none|none|
|AlarmConfiguration|object|false|none|none|

<h2 id="tocS_MaintenanceWindowTaskParameterName">MaintenanceWindowTaskParameterName</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtaskparametername"></a>
<a id="schema_MaintenanceWindowTaskParameterName"></a>
<a id="tocSmaintenancewindowtaskparametername"></a>
<a id="tocsmaintenancewindowtaskparametername"></a>

```json
"string"
```

<h2 id="tocS_MaintenanceWindowTaskParameterValue">MaintenanceWindowTaskParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtaskparametervalue"></a>
<a id="schema_MaintenanceWindowTaskParameterValue"></a>
<a id="tocSmaintenancewindowtaskparametervalue"></a>
<a id="tocsmaintenancewindowtaskparametervalue"></a>

```json
"password"
```

<h2 id="tocS_MaintenanceWindowTaskParameterValueList">MaintenanceWindowTaskParameterValueList</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtaskparametervaluelist"></a>
<a id="schema_MaintenanceWindowTaskParameterValueList"></a>
<a id="tocSmaintenancewindowtaskparametervaluelist"></a>
<a id="tocsmaintenancewindowtaskparametervaluelist"></a>

```json
[
  "password"
]
```

<h2 id="tocS_MaintenanceWindowTaskParameterValueExpression">MaintenanceWindowTaskParameterValueExpression</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindowtaskparametervalueexpression"></a>
<a id="schema_MaintenanceWindowTaskParameterValueExpression"></a>
<a id="tocSmaintenancewindowtaskparametervalueexpression"></a>
<a id="tocsmaintenancewindowtaskparametervalueexpression"></a>

```json
{
  "Values": {}
}
```

Defines the values for a task parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Values|object|false|none|none|

<h2 id="tocS_MaxSessionDuration">MaxSessionDuration</h2>
<!-- backwards compatibility -->
<a id="schemamaxsessionduration"></a>
<a id="schema_MaxSessionDuration"></a>
<a id="tocSmaxsessionduration"></a>
<a id="tocsmaxsessionduration"></a>

```json
"stri"
```

<h2 id="tocS_MetadataKey">MetadataKey</h2>
<!-- backwards compatibility -->
<a id="schemametadatakey"></a>
<a id="schema_MetadataKey"></a>
<a id="tocSmetadatakey"></a>
<a id="tocsmetadatakey"></a>

```json
"string"
```

<h2 id="tocS_MetadataKeysToDeleteList">MetadataKeysToDeleteList</h2>
<!-- backwards compatibility -->
<a id="schemametadatakeystodeletelist"></a>
<a id="schema_MetadataKeysToDeleteList"></a>
<a id="tocSmetadatakeystodeletelist"></a>
<a id="tocsmetadatakeystodeletelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MetadataValue">MetadataValue</h2>
<!-- backwards compatibility -->
<a id="schemametadatavalue"></a>
<a id="schema_MetadataValue"></a>
<a id="tocSmetadatavalue"></a>
<a id="tocsmetadatavalue"></a>

```json
{
  "Value": {}
}
```

Metadata to assign to an Application Manager application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|

<h2 id="tocS_MetadataValueString">MetadataValueString</h2>
<!-- backwards compatibility -->
<a id="schemametadatavaluestring"></a>
<a id="schema_MetadataValueString"></a>
<a id="tocSmetadatavaluestring"></a>
<a id="tocsmetadatavaluestring"></a>

```json
"string"
```

<h2 id="tocS_NormalStringMap">NormalStringMap</h2>
<!-- backwards compatibility -->
<a id="schemanormalstringmap"></a>
<a id="schema_NormalStringMap"></a>
<a id="tocSnormalstringmap"></a>
<a id="tocsnormalstringmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_NotificationArn">NotificationArn</h2>
<!-- backwards compatibility -->
<a id="schemanotificationarn"></a>
<a id="schema_NotificationArn"></a>
<a id="tocSnotificationarn"></a>
<a id="tocsnotificationarn"></a>

```json
"string"
```

<h2 id="tocS_NotificationEventList">NotificationEventList</h2>
<!-- backwards compatibility -->
<a id="schemanotificationeventlist"></a>
<a id="schema_NotificationEventList"></a>
<a id="tocSnotificationeventlist"></a>
<a id="tocsnotificationeventlist"></a>

```json
[
  "All"
]
```

<h2 id="tocS_NotificationType">NotificationType</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtype"></a>
<a id="schema_NotificationType"></a>
<a id="tocSnotificationtype"></a>
<a id="tocsnotificationtype"></a>

```json
"Command"
```

<h2 id="tocS_NotificationEvent">NotificationEvent</h2>
<!-- backwards compatibility -->
<a id="schemanotificationevent"></a>
<a id="schema_NotificationEvent"></a>
<a id="tocSnotificationevent"></a>
<a id="tocsnotificationevent"></a>

```json
"All"
```

<h2 id="tocS_OpsAggregatorType">OpsAggregatorType</h2>
<!-- backwards compatibility -->
<a id="schemaopsaggregatortype"></a>
<a id="schema_OpsAggregatorType"></a>
<a id="tocSopsaggregatortype"></a>
<a id="tocsopsaggregatortype"></a>

```json
"string"
```

<h2 id="tocS_OpsDataTypeName">OpsDataTypeName</h2>
<!-- backwards compatibility -->
<a id="schemaopsdatatypename"></a>
<a id="schema_OpsDataTypeName"></a>
<a id="tocSopsdatatypename"></a>
<a id="tocsopsdatatypename"></a>

```json
"string"
```

<h2 id="tocS_OpsDataAttributeName">OpsDataAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaopsdataattributename"></a>
<a id="schema_OpsDataAttributeName"></a>
<a id="tocSopsdataattributename"></a>
<a id="tocsopsdataattributename"></a>

```json
"string"
```

<h2 id="tocS_OpsAggregatorValueMap">OpsAggregatorValueMap</h2>
<!-- backwards compatibility -->
<a id="schemaopsaggregatorvaluemap"></a>
<a id="schema_OpsAggregatorValueMap"></a>
<a id="tocSopsaggregatorvaluemap"></a>
<a id="tocsopsaggregatorvaluemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[OpsAggregatorValue](#schemaopsaggregatorvalue)|false|none|none|

<h2 id="tocS_OpsAggregator">OpsAggregator</h2>
<!-- backwards compatibility -->
<a id="schemaopsaggregator"></a>
<a id="schema_OpsAggregator"></a>
<a id="tocSopsaggregator"></a>
<a id="tocsopsaggregator"></a>

```json
{
  "AggregatorType": {},
  "TypeName": {},
  "AttributeName": {},
  "Values": {
    "property1": "string",
    "property2": "string"
  },
  "Filters": {},
  "Aggregators": {}
}
```

One or more aggregators for viewing counts of OpsData using different dimensions such as <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a few.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AggregatorType|object|false|none|none|
|TypeName|object|false|none|none|
|AttributeName|object|false|none|none|
|Values|object|false|none|none|
|Filters|object|false|none|none|
|Aggregators|object|false|none|none|

<h2 id="tocS_OpsAggregatorValue">OpsAggregatorValue</h2>
<!-- backwards compatibility -->
<a id="schemaopsaggregatorvalue"></a>
<a id="schema_OpsAggregatorValue"></a>
<a id="tocSopsaggregatorvalue"></a>
<a id="tocsopsaggregatorvalue"></a>

```json
"string"
```

<h2 id="tocS_OpsAggregatorValueKey">OpsAggregatorValueKey</h2>
<!-- backwards compatibility -->
<a id="schemaopsaggregatorvaluekey"></a>
<a id="schema_OpsAggregatorValueKey"></a>
<a id="tocSopsaggregatorvaluekey"></a>
<a id="tocsopsaggregatorvaluekey"></a>

```json
"string"
```

<h2 id="tocS_OpsEntityId">OpsEntityId</h2>
<!-- backwards compatibility -->
<a id="schemaopsentityid"></a>
<a id="schema_OpsEntityId"></a>
<a id="tocSopsentityid"></a>
<a id="tocsopsentityid"></a>

```json
"string"
```

<h2 id="tocS_OpsEntityItemMap">OpsEntityItemMap</h2>
<!-- backwards compatibility -->
<a id="schemaopsentityitemmap"></a>
<a id="schema_OpsEntityItemMap"></a>
<a id="tocSopsentityitemmap"></a>
<a id="tocsopsentityitemmap"></a>

```json
{
  "property1": {
    "CaptureTime": {},
    "Content": {}
  },
  "property2": {
    "CaptureTime": {},
    "Content": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[OpsEntityItem](#schemaopsentityitem)|false|none|The OpsData summary.|

<h2 id="tocS_OpsEntity">OpsEntity</h2>
<!-- backwards compatibility -->
<a id="schemaopsentity"></a>
<a id="schema_OpsEntity"></a>
<a id="tocSopsentity"></a>
<a id="tocsopsentity"></a>

```json
{
  "Id": {},
  "Data": {
    "property1": {
      "CaptureTime": {},
      "Content": {}
    },
    "property2": {
      "CaptureTime": {},
      "Content": {}
    }
  }
}
```

The result of the query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Data|object|false|none|none|

<h2 id="tocS_OpsEntityItemCaptureTime">OpsEntityItemCaptureTime</h2>
<!-- backwards compatibility -->
<a id="schemaopsentityitemcapturetime"></a>
<a id="schema_OpsEntityItemCaptureTime"></a>
<a id="tocSopsentityitemcapturetime"></a>
<a id="tocsopsentityitemcapturetime"></a>

```json
"string"
```

<h2 id="tocS_OpsEntityItemEntryList">OpsEntityItemEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaopsentityitementrylist"></a>
<a id="schema_OpsEntityItemEntryList"></a>
<a id="tocSopsentityitementrylist"></a>
<a id="tocsopsentityitementrylist"></a>

```json
[
  {
    "property1": "string",
    "property2": "string"
  }
]
```

<h2 id="tocS_OpsEntityItem">OpsEntityItem</h2>
<!-- backwards compatibility -->
<a id="schemaopsentityitem"></a>
<a id="schema_OpsEntityItem"></a>
<a id="tocSopsentityitem"></a>
<a id="tocsopsentityitem"></a>

```json
{
  "CaptureTime": {},
  "Content": {}
}
```

The OpsData summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CaptureTime|object|false|none|none|
|Content|object|false|none|none|

<h2 id="tocS_OpsEntityItemEntry">OpsEntityItemEntry</h2>
<!-- backwards compatibility -->
<a id="schemaopsentityitementry"></a>
<a id="schema_OpsEntityItemEntry"></a>
<a id="tocSopsentityitementry"></a>
<a id="tocsopsentityitementry"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none|none|

<h2 id="tocS_OpsEntityItemKey">OpsEntityItemKey</h2>
<!-- backwards compatibility -->
<a id="schemaopsentityitemkey"></a>
<a id="schema_OpsEntityItemKey"></a>
<a id="tocSopsentityitemkey"></a>
<a id="tocsopsentityitemkey"></a>

```json
"string"
```

<h2 id="tocS_OpsFilterKey">OpsFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemaopsfilterkey"></a>
<a id="schema_OpsFilterKey"></a>
<a id="tocSopsfilterkey"></a>
<a id="tocsopsfilterkey"></a>

```json
"string"
```

<h2 id="tocS_OpsFilterValueList">OpsFilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemaopsfiltervaluelist"></a>
<a id="schema_OpsFilterValueList"></a>
<a id="tocSopsfiltervaluelist"></a>
<a id="tocsopsfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OpsFilterOperatorType">OpsFilterOperatorType</h2>
<!-- backwards compatibility -->
<a id="schemaopsfilteroperatortype"></a>
<a id="schema_OpsFilterOperatorType"></a>
<a id="tocSopsfilteroperatortype"></a>
<a id="tocsopsfilteroperatortype"></a>

```json
"Equal"
```

<h2 id="tocS_OpsFilter">OpsFilter</h2>
<!-- backwards compatibility -->
<a id="schemaopsfilter"></a>
<a id="schema_OpsFilter"></a>
<a id="tocSopsfilter"></a>
<a id="tocsopsfilter"></a>

```json
{
  "Key": {},
  "Values": {},
  "Type": {}
}
```

A filter for viewing OpsData summaries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|
|Type|object|false|none|none|

<h2 id="tocS_OpsFilterValue">OpsFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaopsfiltervalue"></a>
<a id="schema_OpsFilterValue"></a>
<a id="tocSopsfiltervalue"></a>
<a id="tocsopsfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_OpsItemStatus">OpsItemStatus</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemstatus"></a>
<a id="schema_OpsItemStatus"></a>
<a id="tocSopsitemstatus"></a>
<a id="tocsopsitemstatus"></a>

```json
"Open"
```

<h2 id="tocS_OpsItemDataKey">OpsItemDataKey</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemdatakey"></a>
<a id="schema_OpsItemDataKey"></a>
<a id="tocSopsitemdatakey"></a>
<a id="tocsopsitemdatakey"></a>

```json
"string"
```

<h2 id="tocS_OpsItemDataType">OpsItemDataType</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemdatatype"></a>
<a id="schema_OpsItemDataType"></a>
<a id="tocSopsitemdatatype"></a>
<a id="tocsopsitemdatatype"></a>

```json
"SearchableString"
```

<h2 id="tocS_OpsItemDataValueString">OpsItemDataValueString</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemdatavaluestring"></a>
<a id="schema_OpsItemDataValueString"></a>
<a id="tocSopsitemdatavaluestring"></a>
<a id="tocsopsitemdatavaluestring"></a>

```json
"string"
```

<h2 id="tocS_OpsItemDataValue">OpsItemDataValue</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemdatavalue"></a>
<a id="schema_OpsItemDataValue"></a>
<a id="tocSopsitemdatavalue"></a>
<a id="tocsopsitemdatavalue"></a>

```json
{
  "Value": {},
  "Type": {}
}
```

An object that defines the value of the key and its type in the OperationalData map.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_OpsItemEventFilterKey">OpsItemEventFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemeventfilterkey"></a>
<a id="schema_OpsItemEventFilterKey"></a>
<a id="tocSopsitemeventfilterkey"></a>
<a id="tocsopsitemeventfilterkey"></a>

```json
"OpsItemId"
```

<h2 id="tocS_OpsItemEventFilterValues">OpsItemEventFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemeventfiltervalues"></a>
<a id="schema_OpsItemEventFilterValues"></a>
<a id="tocSopsitemeventfiltervalues"></a>
<a id="tocsopsitemeventfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OpsItemEventFilterOperator">OpsItemEventFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemeventfilteroperator"></a>
<a id="schema_OpsItemEventFilterOperator"></a>
<a id="tocSopsitemeventfilteroperator"></a>
<a id="tocsopsitemeventfilteroperator"></a>

```json
"Equal"
```

<h2 id="tocS_OpsItemEventFilter">OpsItemEventFilter</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemeventfilter"></a>
<a id="schema_OpsItemEventFilter"></a>
<a id="tocSopsitemeventfilter"></a>
<a id="tocsopsitemeventfilter"></a>

```json
{
  "Key": {},
  "Values": {},
  "Operator": {}
}
```

Describes a filter for a specific list of OpsItem events. You can filter event information by using tags. You specify tags by using a key-value pair mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|
|Operator|object|true|none|none|

<h2 id="tocS_OpsItemEventFilterValue">OpsItemEventFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemeventfiltervalue"></a>
<a id="schema_OpsItemEventFilterValue"></a>
<a id="tocSopsitemeventfiltervalue"></a>
<a id="tocsopsitemeventfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_OpsItemEventSummary">OpsItemEventSummary</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemeventsummary"></a>
<a id="schema_OpsItemEventSummary"></a>
<a id="tocSopsitemeventsummary"></a>
<a id="tocsopsitemeventsummary"></a>

```json
{
  "OpsItemId": {},
  "EventId": {},
  "Source": {},
  "DetailType": {},
  "Detail": {},
  "CreatedBy": {
    "Arn": {}
  },
  "CreatedTime": {}
}
```

Summary information about an OpsItem event or that associated an OpsItem with a related item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsItemId|object|false|none|none|
|EventId|object|false|none|none|
|Source|object|false|none|none|
|DetailType|object|false|none|none|
|Detail|object|false|none|none|
|CreatedBy|object|false|none|none|
|CreatedTime|object|false|none|none|

<h2 id="tocS_OpsItemIdentity">OpsItemIdentity</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemidentity"></a>
<a id="schema_OpsItemIdentity"></a>
<a id="tocSopsitemidentity"></a>
<a id="tocsopsitemidentity"></a>

```json
{
  "Arn": {}
}
```

Information about the user or resource that created an OpsItem event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|

<h2 id="tocS_OpsItemFilterKey">OpsItemFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemfilterkey"></a>
<a id="schema_OpsItemFilterKey"></a>
<a id="tocSopsitemfilterkey"></a>
<a id="tocsopsitemfilterkey"></a>

```json
"Status"
```

<h2 id="tocS_OpsItemFilterValues">OpsItemFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemfiltervalues"></a>
<a id="schema_OpsItemFilterValues"></a>
<a id="tocSopsitemfiltervalues"></a>
<a id="tocsopsitemfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OpsItemFilterOperator">OpsItemFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemfilteroperator"></a>
<a id="schema_OpsItemFilterOperator"></a>
<a id="tocSopsitemfilteroperator"></a>
<a id="tocsopsitemfilteroperator"></a>

```json
"Equal"
```

<h2 id="tocS_OpsItemFilter">OpsItemFilter</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemfilter"></a>
<a id="schema_OpsItemFilter"></a>
<a id="tocSopsitemfilter"></a>
<a id="tocsopsitemfilter"></a>

```json
{
  "Key": {},
  "Values": {},
  "Operator": {}
}
```

Describes an OpsItem filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|
|Operator|object|true|none|none|

<h2 id="tocS_OpsItemFilterValue">OpsItemFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemfiltervalue"></a>
<a id="schema_OpsItemFilterValue"></a>
<a id="tocSopsitemfiltervalue"></a>
<a id="tocsopsitemfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_OpsItemNotification">OpsItemNotification</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemnotification"></a>
<a id="schema_OpsItemNotification"></a>
<a id="tocSopsitemnotification"></a>
<a id="tocsopsitemnotification"></a>

```json
{
  "Arn": {}
}
```

A notification about the OpsItem.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|

<h2 id="tocS_OpsItemOpsDataKeysList">OpsItemOpsDataKeysList</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemopsdatakeyslist"></a>
<a id="schema_OpsItemOpsDataKeysList"></a>
<a id="tocSopsitemopsdatakeyslist"></a>
<a id="tocsopsitemopsdatakeyslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OpsItemRelatedItemSummary">OpsItemRelatedItemSummary</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemsummary"></a>
<a id="schema_OpsItemRelatedItemSummary"></a>
<a id="tocSopsitemrelateditemsummary"></a>
<a id="tocsopsitemrelateditemsummary"></a>

```json
{
  "OpsItemId": {},
  "AssociationId": {},
  "ResourceType": {},
  "AssociationType": {},
  "ResourceUri": {},
  "CreatedBy": {
    "Arn": {}
  },
  "CreatedTime": {},
  "LastModifiedBy": {
    "Arn": {}
  },
  "LastModifiedTime": {}
}
```

Summary information about related-item resources for an OpsItem.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsItemId|object|false|none|none|
|AssociationId|object|false|none|none|
|ResourceType|object|false|none|none|
|AssociationType|object|false|none|none|
|ResourceUri|object|false|none|none|
|CreatedBy|[OpsItemIdentity](#schemaopsitemidentity)|false|none|Information about the user or resource that created an OpsItem event.|
|CreatedTime|object|false|none|none|
|LastModifiedBy|[OpsItemIdentity](#schemaopsitemidentity)|false|none|Information about the user or resource that created an OpsItem event.|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_OpsItemRelatedItemsFilterKey">OpsItemRelatedItemsFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemsfilterkey"></a>
<a id="schema_OpsItemRelatedItemsFilterKey"></a>
<a id="tocSopsitemrelateditemsfilterkey"></a>
<a id="tocsopsitemrelateditemsfilterkey"></a>

```json
"ResourceType"
```

<h2 id="tocS_OpsItemRelatedItemsFilterValues">OpsItemRelatedItemsFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemsfiltervalues"></a>
<a id="schema_OpsItemRelatedItemsFilterValues"></a>
<a id="tocSopsitemrelateditemsfiltervalues"></a>
<a id="tocsopsitemrelateditemsfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OpsItemRelatedItemsFilterOperator">OpsItemRelatedItemsFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemsfilteroperator"></a>
<a id="schema_OpsItemRelatedItemsFilterOperator"></a>
<a id="tocSopsitemrelateditemsfilteroperator"></a>
<a id="tocsopsitemrelateditemsfilteroperator"></a>

```json
"Equal"
```

<h2 id="tocS_OpsItemRelatedItemsFilter">OpsItemRelatedItemsFilter</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemsfilter"></a>
<a id="schema_OpsItemRelatedItemsFilter"></a>
<a id="tocSopsitemrelateditemsfilter"></a>
<a id="tocsopsitemrelateditemsfilter"></a>

```json
{
  "Key": {},
  "Values": {},
  "Operator": {}
}
```

Describes a filter for a specific list of related-item resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|
|Operator|object|true|none|none|

<h2 id="tocS_OpsItemRelatedItemsFilterValue">OpsItemRelatedItemsFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemrelateditemsfiltervalue"></a>
<a id="schema_OpsItemRelatedItemsFilterValue"></a>
<a id="tocSopsitemrelateditemsfiltervalue"></a>
<a id="tocsopsitemrelateditemsfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_OpsItemSummary">OpsItemSummary</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemsummary"></a>
<a id="schema_OpsItemSummary"></a>
<a id="tocSopsitemsummary"></a>
<a id="tocsopsitemsummary"></a>

```json
{
  "CreatedBy": {},
  "CreatedTime": {},
  "LastModifiedBy": {},
  "LastModifiedTime": {},
  "Priority": {},
  "Source": {},
  "Status": {},
  "OpsItemId": {},
  "Title": {},
  "OperationalData": {
    "property1": {
      "Value": {},
      "Type": {}
    },
    "property2": {
      "Value": {},
      "Type": {}
    }
  },
  "Category": {},
  "Severity": {},
  "OpsItemType": {},
  "ActualStartTime": {},
  "ActualEndTime": {},
  "PlannedStartTime": {},
  "PlannedEndTime": {}
}
```

A count of OpsItems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedBy|object|false|none|none|
|CreatedTime|object|false|none|none|
|LastModifiedBy|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|Priority|object|false|none|none|
|Source|object|false|none|none|
|Status|object|false|none|none|
|OpsItemId|object|false|none|none|
|Title|object|false|none|none|
|OperationalData|object|false|none|none|
|Category|object|false|none|none|
|Severity|object|false|none|none|
|OpsItemType|object|false|none|none|
|ActualStartTime|object|false|none|none|
|ActualEndTime|object|false|none|none|
|PlannedStartTime|object|false|none|none|
|PlannedEndTime|object|false|none|none|

<h2 id="tocS_OpsMetadata">OpsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadata"></a>
<a id="schema_OpsMetadata"></a>
<a id="tocSopsmetadata"></a>
<a id="tocsopsmetadata"></a>

```json
{
  "ResourceId": {},
  "OpsMetadataArn": {},
  "LastModifiedDate": {},
  "LastModifiedUser": {},
  "CreationDate": {}
}
```

Operational metadata for an application in Application Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|OpsMetadataArn|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|LastModifiedUser|object|false|none|none|
|CreationDate|object|false|none|none|

<h2 id="tocS_OpsMetadataFilterKey">OpsMetadataFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadatafilterkey"></a>
<a id="schema_OpsMetadataFilterKey"></a>
<a id="tocSopsmetadatafilterkey"></a>
<a id="tocsopsmetadatafilterkey"></a>

```json
"string"
```

<h2 id="tocS_OpsMetadataFilterValueList">OpsMetadataFilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadatafiltervaluelist"></a>
<a id="schema_OpsMetadataFilterValueList"></a>
<a id="tocSopsmetadatafiltervaluelist"></a>
<a id="tocsopsmetadatafiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OpsMetadataFilter">OpsMetadataFilter</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadatafilter"></a>
<a id="schema_OpsMetadataFilter"></a>
<a id="tocSopsmetadatafilter"></a>
<a id="tocsopsmetadatafilter"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

A filter to limit the number of OpsMetadata objects displayed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_OpsMetadataFilterValue">OpsMetadataFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaopsmetadatafiltervalue"></a>
<a id="schema_OpsMetadataFilterValue"></a>
<a id="tocSopsmetadatafiltervalue"></a>
<a id="tocsopsmetadatafiltervalue"></a>

```json
"string"
```

<h2 id="tocS_OpsResultAttribute">OpsResultAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaopsresultattribute"></a>
<a id="schema_OpsResultAttribute"></a>
<a id="tocSopsresultattribute"></a>
<a id="tocsopsresultattribute"></a>

```json
{
  "TypeName": {}
}
```

The OpsItem data type to return.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeName|object|true|none|none|

<h2 id="tocS_OutputSourceId">OutputSourceId</h2>
<!-- backwards compatibility -->
<a id="schemaoutputsourceid"></a>
<a id="schema_OutputSourceId"></a>
<a id="tocSoutputsourceid"></a>
<a id="tocsoutputsourceid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_OutputSourceType">OutputSourceType</h2>
<!-- backwards compatibility -->
<a id="schemaoutputsourcetype"></a>
<a id="schema_OutputSourceType"></a>
<a id="tocSoutputsourcetype"></a>
<a id="tocsoutputsourcetype"></a>

```json
"string"
```

<h2 id="tocS_PSParameterSelector">PSParameterSelector</h2>
<!-- backwards compatibility -->
<a id="schemapsparameterselector"></a>
<a id="schema_PSParameterSelector"></a>
<a id="tocSpsparameterselector"></a>
<a id="tocspsparameterselector"></a>

```json
"string"
```

<h2 id="tocS_PSParameterValue">PSParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemapsparametervalue"></a>
<a id="schema_PSParameterValue"></a>
<a id="tocSpsparametervalue"></a>
<a id="tocspsparametervalue"></a>

```json
"password"
```

<h2 id="tocS_ParameterType">ParameterType</h2>
<!-- backwards compatibility -->
<a id="schemaparametertype"></a>
<a id="schema_ParameterType"></a>
<a id="tocSparametertype"></a>
<a id="tocsparametertype"></a>

```json
"String"
```

<h2 id="tocS_ParameterDataType">ParameterDataType</h2>
<!-- backwards compatibility -->
<a id="schemaparameterdatatype"></a>
<a id="schema_ParameterDataType"></a>
<a id="tocSparameterdatatype"></a>
<a id="tocsparameterdatatype"></a>

```json
"string"
```

<h2 id="tocS_ParameterDescription">ParameterDescription</h2>
<!-- backwards compatibility -->
<a id="schemaparameterdescription"></a>
<a id="schema_ParameterDescription"></a>
<a id="tocSparameterdescription"></a>
<a id="tocsparameterdescription"></a>

```json
"string"
```

<h2 id="tocS_ParameterKeyId">ParameterKeyId</h2>
<!-- backwards compatibility -->
<a id="schemaparameterkeyid"></a>
<a id="schema_ParameterKeyId"></a>
<a id="tocSparameterkeyid"></a>
<a id="tocsparameterkeyid"></a>

```json
"string"
```

<h2 id="tocS_ParameterTier">ParameterTier</h2>
<!-- backwards compatibility -->
<a id="schemaparametertier"></a>
<a id="schema_ParameterTier"></a>
<a id="tocSparametertier"></a>
<a id="tocsparametertier"></a>

```json
"Standard"
```

<h2 id="tocS_ParameterPolicyList">ParameterPolicyList</h2>
<!-- backwards compatibility -->
<a id="schemaparameterpolicylist"></a>
<a id="schema_ParameterPolicyList"></a>
<a id="tocSparameterpolicylist"></a>
<a id="tocsparameterpolicylist"></a>

```json
[
  {
    "PolicyText": {},
    "PolicyType": {},
    "PolicyStatus": {}
  }
]
```

<h2 id="tocS_ParameterHistory">ParameterHistory</h2>
<!-- backwards compatibility -->
<a id="schemaparameterhistory"></a>
<a id="schema_ParameterHistory"></a>
<a id="tocSparameterhistory"></a>
<a id="tocsparameterhistory"></a>

```json
{
  "Name": {},
  "Type": {},
  "KeyId": {},
  "LastModifiedDate": {},
  "LastModifiedUser": {},
  "Description": {},
  "Value": {},
  "AllowedPattern": {},
  "Version": {},
  "Labels": {},
  "Tier": {},
  "Policies": {},
  "DataType": {}
}
```

Information about parameter usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|false|none|none|
|KeyId|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|LastModifiedUser|object|false|none|none|
|Description|object|false|none|none|
|Value|object|false|none|none|
|AllowedPattern|object|false|none|none|
|Version|object|false|none|none|
|Labels|object|false|none|none|
|Tier|object|false|none|none|
|Policies|object|false|none|none|
|DataType|object|false|none|none|

<h2 id="tocS_ParameterInlinePolicy">ParameterInlinePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaparameterinlinepolicy"></a>
<a id="schema_ParameterInlinePolicy"></a>
<a id="tocSparameterinlinepolicy"></a>
<a id="tocsparameterinlinepolicy"></a>

```json
{
  "PolicyText": {},
  "PolicyType": {},
  "PolicyStatus": {}
}
```

One or more policies assigned to a parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyText|object|false|none|none|
|PolicyType|object|false|none|none|
|PolicyStatus|object|false|none|none|

<h2 id="tocS_ParameterLabel">ParameterLabel</h2>
<!-- backwards compatibility -->
<a id="schemaparameterlabel"></a>
<a id="schema_ParameterLabel"></a>
<a id="tocSparameterlabel"></a>
<a id="tocsparameterlabel"></a>

```json
"string"
```

<h2 id="tocS_ParameterMetadata">ParameterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaparametermetadata"></a>
<a id="schema_ParameterMetadata"></a>
<a id="tocSparametermetadata"></a>
<a id="tocsparametermetadata"></a>

```json
{
  "Name": {},
  "Type": {},
  "KeyId": {},
  "LastModifiedDate": {},
  "LastModifiedUser": {},
  "Description": {},
  "AllowedPattern": {},
  "Version": {},
  "Tier": {},
  "Policies": {},
  "DataType": {}
}
```

Metadata includes information like the ARN of the last user and the date/time the parameter was last used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|false|none|none|
|KeyId|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|LastModifiedUser|object|false|none|none|
|Description|object|false|none|none|
|AllowedPattern|object|false|none|none|
|Version|object|false|none|none|
|Tier|object|false|none|none|
|Policies|object|false|none|none|
|DataType|object|false|none|none|

<h2 id="tocS_ParameterName">ParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaparametername"></a>
<a id="schema_ParameterName"></a>
<a id="tocSparametername"></a>
<a id="tocsparametername"></a>

```json
"string"
```

<h2 id="tocS_ParameterPolicies">ParameterPolicies</h2>
<!-- backwards compatibility -->
<a id="schemaparameterpolicies"></a>
<a id="schema_ParameterPolicies"></a>
<a id="tocSparameterpolicies"></a>
<a id="tocsparameterpolicies"></a>

```json
"string"
```

<h2 id="tocS_ParameterStringFilterKey">ParameterStringFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemaparameterstringfilterkey"></a>
<a id="schema_ParameterStringFilterKey"></a>
<a id="tocSparameterstringfilterkey"></a>
<a id="tocsparameterstringfilterkey"></a>

```json
"string"
```

<h2 id="tocS_ParameterStringQueryOption">ParameterStringQueryOption</h2>
<!-- backwards compatibility -->
<a id="schemaparameterstringqueryoption"></a>
<a id="schema_ParameterStringQueryOption"></a>
<a id="tocSparameterstringqueryoption"></a>
<a id="tocsparameterstringqueryoption"></a>

```json
"string"
```

<h2 id="tocS_ParameterStringFilterValueList">ParameterStringFilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemaparameterstringfiltervaluelist"></a>
<a id="schema_ParameterStringFilterValueList"></a>
<a id="tocSparameterstringfiltervaluelist"></a>
<a id="tocsparameterstringfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ParameterStringFilter">ParameterStringFilter</h2>
<!-- backwards compatibility -->
<a id="schemaparameterstringfilter"></a>
<a id="schema_ParameterStringFilter"></a>
<a id="tocSparameterstringfilter"></a>
<a id="tocsparameterstringfilter"></a>

```json
{
  "Key": {},
  "Option": {},
  "Values": {}
}
```

One or more filters. Use a filter to return a more specific list of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Option|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_ParameterStringFilterValue">ParameterStringFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaparameterstringfiltervalue"></a>
<a id="schema_ParameterStringFilterValue"></a>
<a id="tocSparameterstringfiltervalue"></a>
<a id="tocsparameterstringfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_ParameterValue">ParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaparametervalue"></a>
<a id="schema_ParameterValue"></a>
<a id="tocSparametervalue"></a>
<a id="tocsparametervalue"></a>

```json
"string"
```

<h2 id="tocS_ParameterValueList">ParameterValueList</h2>
<!-- backwards compatibility -->
<a id="schemaparametervaluelist"></a>
<a id="schema_ParameterValueList"></a>
<a id="tocSparametervaluelist"></a>
<a id="tocsparametervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ParametersFilterKey">ParametersFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemaparametersfilterkey"></a>
<a id="schema_ParametersFilterKey"></a>
<a id="tocSparametersfilterkey"></a>
<a id="tocsparametersfilterkey"></a>

```json
"Name"
```

<h2 id="tocS_ParametersFilterValueList">ParametersFilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemaparametersfiltervaluelist"></a>
<a id="schema_ParametersFilterValueList"></a>
<a id="tocSparametersfiltervaluelist"></a>
<a id="tocsparametersfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ParametersFilter">ParametersFilter</h2>
<!-- backwards compatibility -->
<a id="schemaparametersfilter"></a>
<a id="schema_ParametersFilter"></a>
<a id="tocSparametersfilter"></a>
<a id="tocsparametersfilter"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

This data type is deprecated. Instead, use <a>ParameterStringFilter</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_ParametersFilterValue">ParametersFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaparametersfiltervalue"></a>
<a id="schema_ParametersFilterValue"></a>
<a id="tocSparametersfiltervalue"></a>
<a id="tocsparametersfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_PatchId">PatchId</h2>
<!-- backwards compatibility -->
<a id="schemapatchid"></a>
<a id="schema_PatchId"></a>
<a id="tocSpatchid"></a>
<a id="tocspatchid"></a>

```json
"string"
```

<h2 id="tocS_PatchTitle">PatchTitle</h2>
<!-- backwards compatibility -->
<a id="schemapatchtitle"></a>
<a id="schema_PatchTitle"></a>
<a id="tocSpatchtitle"></a>
<a id="tocspatchtitle"></a>

```json
"string"
```

<h2 id="tocS_PatchDescription">PatchDescription</h2>
<!-- backwards compatibility -->
<a id="schemapatchdescription"></a>
<a id="schema_PatchDescription"></a>
<a id="tocSpatchdescription"></a>
<a id="tocspatchdescription"></a>

```json
"string"
```

<h2 id="tocS_PatchContentUrl">PatchContentUrl</h2>
<!-- backwards compatibility -->
<a id="schemapatchcontenturl"></a>
<a id="schema_PatchContentUrl"></a>
<a id="tocSpatchcontenturl"></a>
<a id="tocspatchcontenturl"></a>

```json
"string"
```

<h2 id="tocS_PatchVendor">PatchVendor</h2>
<!-- backwards compatibility -->
<a id="schemapatchvendor"></a>
<a id="schema_PatchVendor"></a>
<a id="tocSpatchvendor"></a>
<a id="tocspatchvendor"></a>

```json
"string"
```

<h2 id="tocS_PatchProductFamily">PatchProductFamily</h2>
<!-- backwards compatibility -->
<a id="schemapatchproductfamily"></a>
<a id="schema_PatchProductFamily"></a>
<a id="tocSpatchproductfamily"></a>
<a id="tocspatchproductfamily"></a>

```json
"string"
```

<h2 id="tocS_PatchProduct">PatchProduct</h2>
<!-- backwards compatibility -->
<a id="schemapatchproduct"></a>
<a id="schema_PatchProduct"></a>
<a id="tocSpatchproduct"></a>
<a id="tocspatchproduct"></a>

```json
"string"
```

<h2 id="tocS_PatchClassification">PatchClassification</h2>
<!-- backwards compatibility -->
<a id="schemapatchclassification"></a>
<a id="schema_PatchClassification"></a>
<a id="tocSpatchclassification"></a>
<a id="tocspatchclassification"></a>

```json
"string"
```

<h2 id="tocS_PatchMsrcSeverity">PatchMsrcSeverity</h2>
<!-- backwards compatibility -->
<a id="schemapatchmsrcseverity"></a>
<a id="schema_PatchMsrcSeverity"></a>
<a id="tocSpatchmsrcseverity"></a>
<a id="tocspatchmsrcseverity"></a>

```json
"string"
```

<h2 id="tocS_PatchKbNumber">PatchKbNumber</h2>
<!-- backwards compatibility -->
<a id="schemapatchkbnumber"></a>
<a id="schema_PatchKbNumber"></a>
<a id="tocSpatchkbnumber"></a>
<a id="tocspatchkbnumber"></a>

```json
"string"
```

<h2 id="tocS_PatchMsrcNumber">PatchMsrcNumber</h2>
<!-- backwards compatibility -->
<a id="schemapatchmsrcnumber"></a>
<a id="schema_PatchMsrcNumber"></a>
<a id="tocSpatchmsrcnumber"></a>
<a id="tocspatchmsrcnumber"></a>

```json
"string"
```

<h2 id="tocS_PatchLanguage">PatchLanguage</h2>
<!-- backwards compatibility -->
<a id="schemapatchlanguage"></a>
<a id="schema_PatchLanguage"></a>
<a id="tocSpatchlanguage"></a>
<a id="tocspatchlanguage"></a>

```json
"string"
```

<h2 id="tocS_PatchAdvisoryIdList">PatchAdvisoryIdList</h2>
<!-- backwards compatibility -->
<a id="schemapatchadvisoryidlist"></a>
<a id="schema_PatchAdvisoryIdList"></a>
<a id="tocSpatchadvisoryidlist"></a>
<a id="tocspatchadvisoryidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PatchBugzillaIdList">PatchBugzillaIdList</h2>
<!-- backwards compatibility -->
<a id="schemapatchbugzillaidlist"></a>
<a id="schema_PatchBugzillaIdList"></a>
<a id="tocSpatchbugzillaidlist"></a>
<a id="tocspatchbugzillaidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PatchCVEIdList">PatchCVEIdList</h2>
<!-- backwards compatibility -->
<a id="schemapatchcveidlist"></a>
<a id="schema_PatchCVEIdList"></a>
<a id="tocSpatchcveidlist"></a>
<a id="tocspatchcveidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PatchName">PatchName</h2>
<!-- backwards compatibility -->
<a id="schemapatchname"></a>
<a id="schema_PatchName"></a>
<a id="tocSpatchname"></a>
<a id="tocspatchname"></a>

```json
"string"
```

<h2 id="tocS_PatchEpoch">PatchEpoch</h2>
<!-- backwards compatibility -->
<a id="schemapatchepoch"></a>
<a id="schema_PatchEpoch"></a>
<a id="tocSpatchepoch"></a>
<a id="tocspatchepoch"></a>

```json
0
```

<h2 id="tocS_PatchVersion">PatchVersion</h2>
<!-- backwards compatibility -->
<a id="schemapatchversion"></a>
<a id="schema_PatchVersion"></a>
<a id="tocSpatchversion"></a>
<a id="tocspatchversion"></a>

```json
"string"
```

<h2 id="tocS_PatchRelease">PatchRelease</h2>
<!-- backwards compatibility -->
<a id="schemapatchrelease"></a>
<a id="schema_PatchRelease"></a>
<a id="tocSpatchrelease"></a>
<a id="tocspatchrelease"></a>

```json
"string"
```

<h2 id="tocS_PatchArch">PatchArch</h2>
<!-- backwards compatibility -->
<a id="schemapatcharch"></a>
<a id="schema_PatchArch"></a>
<a id="tocSpatcharch"></a>
<a id="tocspatcharch"></a>

```json
"string"
```

<h2 id="tocS_PatchSeverity">PatchSeverity</h2>
<!-- backwards compatibility -->
<a id="schemapatchseverity"></a>
<a id="schema_PatchSeverity"></a>
<a id="tocSpatchseverity"></a>
<a id="tocspatchseverity"></a>

```json
"string"
```

<h2 id="tocS_PatchRepository">PatchRepository</h2>
<!-- backwards compatibility -->
<a id="schemapatchrepository"></a>
<a id="schema_PatchRepository"></a>
<a id="tocSpatchrepository"></a>
<a id="tocspatchrepository"></a>

```json
"string"
```

<h2 id="tocS_PatchAdvisoryId">PatchAdvisoryId</h2>
<!-- backwards compatibility -->
<a id="schemapatchadvisoryid"></a>
<a id="schema_PatchAdvisoryId"></a>
<a id="tocSpatchadvisoryid"></a>
<a id="tocspatchadvisoryid"></a>

```json
"string"
```

<h2 id="tocS_PatchBaselineIdentity">PatchBaselineIdentity</h2>
<!-- backwards compatibility -->
<a id="schemapatchbaselineidentity"></a>
<a id="schema_PatchBaselineIdentity"></a>
<a id="tocSpatchbaselineidentity"></a>
<a id="tocspatchbaselineidentity"></a>

```json
{
  "BaselineId": {},
  "BaselineName": {},
  "OperatingSystem": {},
  "BaselineDescription": {},
  "DefaultBaseline": {}
}
```

Defines the basic information about a patch baseline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineId|object|false|none|none|
|BaselineName|object|false|none|none|
|OperatingSystem|object|false|none|none|
|BaselineDescription|object|false|none|none|
|DefaultBaseline|object|false|none|none|

<h2 id="tocS_PatchBugzillaId">PatchBugzillaId</h2>
<!-- backwards compatibility -->
<a id="schemapatchbugzillaid"></a>
<a id="schema_PatchBugzillaId"></a>
<a id="tocSpatchbugzillaid"></a>
<a id="tocspatchbugzillaid"></a>

```json
"string"
```

<h2 id="tocS_PatchCVEId">PatchCVEId</h2>
<!-- backwards compatibility -->
<a id="schemapatchcveid"></a>
<a id="schema_PatchCVEId"></a>
<a id="tocSpatchcveid"></a>
<a id="tocspatchcveid"></a>

```json
"string"
```

<h2 id="tocS_PatchCVEIds">PatchCVEIds</h2>
<!-- backwards compatibility -->
<a id="schemapatchcveids"></a>
<a id="schema_PatchCVEIds"></a>
<a id="tocSpatchcveids"></a>
<a id="tocspatchcveids"></a>

```json
"string"
```

<h2 id="tocS_PatchComplianceDataState">PatchComplianceDataState</h2>
<!-- backwards compatibility -->
<a id="schemapatchcompliancedatastate"></a>
<a id="schema_PatchComplianceDataState"></a>
<a id="tocSpatchcompliancedatastate"></a>
<a id="tocspatchcompliancedatastate"></a>

```json
"INSTALLED"
```

<h2 id="tocS_PatchComplianceData">PatchComplianceData</h2>
<!-- backwards compatibility -->
<a id="schemapatchcompliancedata"></a>
<a id="schema_PatchComplianceData"></a>
<a id="tocSpatchcompliancedata"></a>
<a id="tocspatchcompliancedata"></a>

```json
{
  "Title": {},
  "KBId": {},
  "Classification": {},
  "Severity": {},
  "State": {},
  "InstalledTime": {},
  "CVEIds": {}
}
```

Information about the state of a patch on a particular managed node as it relates to the patch baseline used to patch the node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Title|object|true|none|none|
|KBId|object|true|none|none|
|Classification|object|true|none|none|
|Severity|object|true|none|none|
|State|object|true|none|none|
|InstalledTime|object|true|none|none|
|CVEIds|object|false|none|none|

<h2 id="tocS_PatchDeploymentStatus">PatchDeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemapatchdeploymentstatus"></a>
<a id="schema_PatchDeploymentStatus"></a>
<a id="tocSpatchdeploymentstatus"></a>
<a id="tocspatchdeploymentstatus"></a>

```json
"APPROVED"
```

<h2 id="tocS_PatchFilterKey">PatchFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemapatchfilterkey"></a>
<a id="schema_PatchFilterKey"></a>
<a id="tocSpatchfilterkey"></a>
<a id="tocspatchfilterkey"></a>

```json
"ARCH"
```

<h2 id="tocS_PatchFilterValueList">PatchFilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemapatchfiltervaluelist"></a>
<a id="schema_PatchFilterValueList"></a>
<a id="tocSpatchfiltervaluelist"></a>
<a id="tocspatchfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PatchFilter">PatchFilter</h2>
<!-- backwards compatibility -->
<a id="schemapatchfilter"></a>
<a id="schema_PatchFilter"></a>
<a id="tocSpatchfilter"></a>
<a id="tocspatchfilter"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

<p> Defines which patches should be included in a patch baseline.</p> <p>A patch filter consists of a key and a set of values. The filter key is a patch property. For example, the available filter keys for <code>WINDOWS</code> are <code>PATCH_SET</code>, <code>PRODUCT</code>, <code>PRODUCT_FAMILY</code>, <code>CLASSIFICATION</code>, and <code>MSRC_SEVERITY</code>.</p> <p>The filter values define a matching criterion for the patch property indicated by the key. For example, if the filter key is <code>PRODUCT</code> and the filter values are <code>["Office 2013", "Office 2016"]</code>, then the filter accepts all patches where product name is either "Office 2013" or "Office 2016". The filter values can be exact values for the patch property given as a key, or a wildcard (*), which matches all values.</p> <p>You can view lists of valid values for the patch properties by running the <code>DescribePatchProperties</code> command. For information about which patch properties can be used with each major operating system, see <a>DescribePatchProperties</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_PatchFilterList">PatchFilterList</h2>
<!-- backwards compatibility -->
<a id="schemapatchfilterlist"></a>
<a id="schema_PatchFilterList"></a>
<a id="tocSpatchfilterlist"></a>
<a id="tocspatchfilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_PatchFilterValue">PatchFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemapatchfiltervalue"></a>
<a id="schema_PatchFilterValue"></a>
<a id="tocSpatchfiltervalue"></a>
<a id="tocspatchfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_PatchGroupPatchBaselineMapping">PatchGroupPatchBaselineMapping</h2>
<!-- backwards compatibility -->
<a id="schemapatchgrouppatchbaselinemapping"></a>
<a id="schema_PatchGroupPatchBaselineMapping"></a>
<a id="tocSpatchgrouppatchbaselinemapping"></a>
<a id="tocspatchgrouppatchbaselinemapping"></a>

```json
{
  "PatchGroup": {},
  "BaselineIdentity": {
    "BaselineId": {},
    "BaselineName": {},
    "OperatingSystem": {},
    "BaselineDescription": {},
    "DefaultBaseline": {}
  }
}
```

The mapping between a patch group and the patch baseline the patch group is registered with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PatchGroup|object|false|none|none|
|BaselineIdentity|object|false|none|none|

<h2 id="tocS_PatchOrchestratorFilterKey">PatchOrchestratorFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemapatchorchestratorfilterkey"></a>
<a id="schema_PatchOrchestratorFilterKey"></a>
<a id="tocSpatchorchestratorfilterkey"></a>
<a id="tocspatchorchestratorfilterkey"></a>

```json
"string"
```

<h2 id="tocS_PatchOrchestratorFilterValues">PatchOrchestratorFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemapatchorchestratorfiltervalues"></a>
<a id="schema_PatchOrchestratorFilterValues"></a>
<a id="tocSpatchorchestratorfiltervalues"></a>
<a id="tocspatchorchestratorfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PatchOrchestratorFilter">PatchOrchestratorFilter</h2>
<!-- backwards compatibility -->
<a id="schemapatchorchestratorfilter"></a>
<a id="schema_PatchOrchestratorFilter"></a>
<a id="tocSpatchorchestratorfilter"></a>
<a id="tocspatchorchestratorfilter"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

<p>Defines a filter used in Patch Manager APIs. Supported filter keys depend on the API operation that includes the filter. Patch Manager API operations that use <code>PatchOrchestratorFilter</code> include the following:</p> <ul> <li> <p> <a>DescribeAvailablePatches</a> </p> </li> <li> <p> <a>DescribeInstancePatches</a> </p> </li> <li> <p> <a>DescribePatchBaselines</a> </p> </li> <li> <p> <a>DescribePatchGroups</a> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_PatchOrchestratorFilterValue">PatchOrchestratorFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemapatchorchestratorfiltervalue"></a>
<a id="schema_PatchOrchestratorFilterValue"></a>
<a id="tocSpatchorchestratorfiltervalue"></a>
<a id="tocspatchorchestratorfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_PatchPropertyEntry">PatchPropertyEntry</h2>
<!-- backwards compatibility -->
<a id="schemapatchpropertyentry"></a>
<a id="schema_PatchPropertyEntry"></a>
<a id="tocSpatchpropertyentry"></a>
<a id="tocspatchpropertyentry"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none|none|

<h2 id="tocS_PatchStringDateTime">PatchStringDateTime</h2>
<!-- backwards compatibility -->
<a id="schemapatchstringdatetime"></a>
<a id="schema_PatchStringDateTime"></a>
<a id="tocSpatchstringdatetime"></a>
<a id="tocspatchstringdatetime"></a>

```json
"string"
```

<h2 id="tocS_PatchRule">PatchRule</h2>
<!-- backwards compatibility -->
<a id="schemapatchrule"></a>
<a id="schema_PatchRule"></a>
<a id="tocSpatchrule"></a>
<a id="tocspatchrule"></a>

```json
{
  "PatchFilterGroup": {
    "PatchFilters": {}
  },
  "ComplianceLevel": {},
  "ApproveAfterDays": {},
  "ApproveUntilDate": {},
  "EnableNonSecurity": {}
}
```

Defines an approval rule for a patch baseline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PatchFilterGroup|object|true|none|none|
|ComplianceLevel|object|false|none|none|
|ApproveAfterDays|object|false|none|none|
|ApproveUntilDate|object|false|none|none|
|EnableNonSecurity|object|false|none|none|

<h2 id="tocS_PatchRuleList">PatchRuleList</h2>
<!-- backwards compatibility -->
<a id="schemapatchrulelist"></a>
<a id="schema_PatchRuleList"></a>
<a id="tocSpatchrulelist"></a>
<a id="tocspatchrulelist"></a>

```json
[
  {
    "PatchFilterGroup": {
      "PatchFilters": {}
    },
    "ComplianceLevel": {},
    "ApproveAfterDays": {},
    "ApproveUntilDate": {},
    "EnableNonSecurity": {}
  }
]
```

<h2 id="tocS_PatchSourceName">PatchSourceName</h2>
<!-- backwards compatibility -->
<a id="schemapatchsourcename"></a>
<a id="schema_PatchSourceName"></a>
<a id="tocSpatchsourcename"></a>
<a id="tocspatchsourcename"></a>

```json
"string"
```

<h2 id="tocS_PatchSourceProductList">PatchSourceProductList</h2>
<!-- backwards compatibility -->
<a id="schemapatchsourceproductlist"></a>
<a id="schema_PatchSourceProductList"></a>
<a id="tocSpatchsourceproductlist"></a>
<a id="tocspatchsourceproductlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PatchSourceConfiguration">PatchSourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapatchsourceconfiguration"></a>
<a id="schema_PatchSourceConfiguration"></a>
<a id="tocSpatchsourceconfiguration"></a>
<a id="tocspatchsourceconfiguration"></a>

```json
"password"
```

<h2 id="tocS_PatchSource">PatchSource</h2>
<!-- backwards compatibility -->
<a id="schemapatchsource"></a>
<a id="schema_PatchSource"></a>
<a id="tocSpatchsource"></a>
<a id="tocspatchsource"></a>

```json
{
  "Name": {},
  "Products": {},
  "Configuration": {}
}
```

Information about the patches to use to update the managed nodes, including target operating systems and source repository. Applies to Linux managed nodes only.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Products|object|true|none|none|
|Configuration|object|true|none|none|

<h2 id="tocS_PatchSourceProduct">PatchSourceProduct</h2>
<!-- backwards compatibility -->
<a id="schemapatchsourceproduct"></a>
<a id="schema_PatchSourceProduct"></a>
<a id="tocSpatchsourceproduct"></a>
<a id="tocspatchsourceproduct"></a>

```json
"string"
```

<h2 id="tocS_PutInventoryMessage">PutInventoryMessage</h2>
<!-- backwards compatibility -->
<a id="schemaputinventorymessage"></a>
<a id="schema_PutInventoryMessage"></a>
<a id="tocSputinventorymessage"></a>
<a id="tocsputinventorymessage"></a>

```json
"string"
```

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"string"
```

<h2 id="tocS_Regions">Regions</h2>
<!-- backwards compatibility -->
<a id="schemaregions"></a>
<a id="schema_Regions"></a>
<a id="tocSregions"></a>
<a id="tocsregions"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RegistrationMetadataKey">RegistrationMetadataKey</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationmetadatakey"></a>
<a id="schema_RegistrationMetadataKey"></a>
<a id="tocSregistrationmetadatakey"></a>
<a id="tocsregistrationmetadatakey"></a>

```json
"string"
```

<h2 id="tocS_RegistrationMetadataValue">RegistrationMetadataValue</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationmetadatavalue"></a>
<a id="schema_RegistrationMetadataValue"></a>
<a id="tocSregistrationmetadatavalue"></a>
<a id="tocsregistrationmetadatavalue"></a>

```json
"string"
```

<h2 id="tocS_RegistrationMetadataItem">RegistrationMetadataItem</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationmetadataitem"></a>
<a id="schema_RegistrationMetadataItem"></a>
<a id="tocSregistrationmetadataitem"></a>
<a id="tocsregistrationmetadataitem"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Reserved for internal use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_RelatedOpsItem">RelatedOpsItem</h2>
<!-- backwards compatibility -->
<a id="schemarelatedopsitem"></a>
<a id="schema_RelatedOpsItem"></a>
<a id="tocSrelatedopsitem"></a>
<a id="tocsrelatedopsitem"></a>

```json
{
  "OpsItemId": {}
}
```

An OpsItems that shares something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpsItemId|object|true|none|none|

<h2 id="tocS_TargetParameterList">TargetParameterList</h2>
<!-- backwards compatibility -->
<a id="schematargetparameterlist"></a>
<a id="schema_TargetParameterList"></a>
<a id="tocStargetparameterlist"></a>
<a id="tocstargetparameterlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceComplianceSummaryItem">ResourceComplianceSummaryItem</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecompliancesummaryitem"></a>
<a id="schema_ResourceComplianceSummaryItem"></a>
<a id="tocSresourcecompliancesummaryitem"></a>
<a id="tocsresourcecompliancesummaryitem"></a>

```json
{
  "ComplianceType": {},
  "ResourceType": {},
  "ResourceId": {},
  "Status": {},
  "OverallSeverity": {},
  "ExecutionSummary": {
    "ExecutionTime": {},
    "ExecutionId": {},
    "ExecutionType": {}
  },
  "CompliantSummary": {
    "CompliantCount": {},
    "SeveritySummary": {
      "CriticalCount": {},
      "HighCount": {},
      "MediumCount": {},
      "LowCount": {},
      "InformationalCount": {},
      "UnspecifiedCount": {}
    }
  },
  "NonCompliantSummary": {
    "NonCompliantCount": {},
    "SeveritySummary": {
      "CriticalCount": {},
      "HighCount": {},
      "MediumCount": {},
      "LowCount": {},
      "InformationalCount": {},
      "UnspecifiedCount": {}
    }
  }
}
```

Compliance summary information for a specific resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComplianceType|object|false|none|none|
|ResourceType|object|false|none|none|
|ResourceId|object|false|none|none|
|Status|object|false|none|none|
|OverallSeverity|object|false|none|none|
|ExecutionSummary|object|false|none|none|
|CompliantSummary|object|false|none|none|
|NonCompliantSummary|object|false|none|none|

<h2 id="tocS_ResourceDataSyncAWSKMSKeyARN">ResourceDataSyncAWSKMSKeyARN</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncawskmskeyarn"></a>
<a id="schema_ResourceDataSyncAWSKMSKeyARN"></a>
<a id="tocSresourcedatasyncawskmskeyarn"></a>
<a id="tocsresourcedatasyncawskmskeyarn"></a>

```json
"string"
```

<h2 id="tocS_ResourceDataSyncOrganizationSourceType">ResourceDataSyncOrganizationSourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncorganizationsourcetype"></a>
<a id="schema_ResourceDataSyncOrganizationSourceType"></a>
<a id="tocSresourcedatasyncorganizationsourcetype"></a>
<a id="tocsresourcedatasyncorganizationsourcetype"></a>

```json
"string"
```

<h2 id="tocS_ResourceDataSyncOrganizationalUnitList">ResourceDataSyncOrganizationalUnitList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncorganizationalunitlist"></a>
<a id="schema_ResourceDataSyncOrganizationalUnitList"></a>
<a id="tocSresourcedatasyncorganizationalunitlist"></a>
<a id="tocsresourcedatasyncorganizationalunitlist"></a>

```json
[
  {
    "OrganizationalUnitId": {}
  }
]
```

<h2 id="tocS_ResourceDataSyncAwsOrganizationsSource">ResourceDataSyncAwsOrganizationsSource</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncawsorganizationssource"></a>
<a id="schema_ResourceDataSyncAwsOrganizationsSource"></a>
<a id="tocSresourcedatasyncawsorganizationssource"></a>
<a id="tocsresourcedatasyncawsorganizationssource"></a>

```json
{
  "OrganizationSourceType": {},
  "OrganizationalUnits": {}
}
```

Information about the <code>AwsOrganizationsSource</code> resource data sync source. A sync source of this type can synchronize data from Organizations or, if an Amazon Web Services organization isn't present, from multiple Amazon Web Services Regions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationSourceType|object|true|none|none|
|OrganizationalUnits|object|false|none|none|

<h2 id="tocS_ResourceDataSyncCreatedTime">ResourceDataSyncCreatedTime</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasynccreatedtime"></a>
<a id="schema_ResourceDataSyncCreatedTime"></a>
<a id="tocSresourcedatasynccreatedtime"></a>
<a id="tocsresourcedatasynccreatedtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ResourceDataSyncDestinationDataSharingType">ResourceDataSyncDestinationDataSharingType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncdestinationdatasharingtype"></a>
<a id="schema_ResourceDataSyncDestinationDataSharingType"></a>
<a id="tocSresourcedatasyncdestinationdatasharingtype"></a>
<a id="tocsresourcedatasyncdestinationdatasharingtype"></a>

```json
"string"
```

<h2 id="tocS_ResourceDataSyncDestinationDataSharing">ResourceDataSyncDestinationDataSharing</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncdestinationdatasharing"></a>
<a id="schema_ResourceDataSyncDestinationDataSharing"></a>
<a id="tocSresourcedatasyncdestinationdatasharing"></a>
<a id="tocsresourcedatasyncdestinationdatasharing"></a>

```json
{
  "DestinationDataSharingType": {}
}
```

Synchronize Amazon Web Services Systems Manager Inventory data from multiple Amazon Web Services accounts defined in Organizations to a centralized Amazon S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different Amazon Web Services account ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationDataSharingType|object|false|none|none|

<h2 id="tocS_ResourceDataSyncEnableAllOpsDataSources">ResourceDataSyncEnableAllOpsDataSources</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncenableallopsdatasources"></a>
<a id="schema_ResourceDataSyncEnableAllOpsDataSources"></a>
<a id="tocSresourcedatasyncenableallopsdatasources"></a>
<a id="tocsresourcedatasyncenableallopsdatasources"></a>

```json
true
```

<h2 id="tocS_ResourceDataSyncIncludeFutureRegions">ResourceDataSyncIncludeFutureRegions</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncincludefutureregions"></a>
<a id="schema_ResourceDataSyncIncludeFutureRegions"></a>
<a id="tocSresourcedatasyncincludefutureregions"></a>
<a id="tocsresourcedatasyncincludefutureregions"></a>

```json
true
```

<h2 id="tocS_ResourceDataSyncSourceWithState">ResourceDataSyncSourceWithState</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncsourcewithstate"></a>
<a id="schema_ResourceDataSyncSourceWithState"></a>
<a id="tocSresourcedatasyncsourcewithstate"></a>
<a id="tocsresourcedatasyncsourcewithstate"></a>

```json
{
  "SourceType": {},
  "AwsOrganizationsSource": {
    "OrganizationSourceType": {},
    "OrganizationalUnits": {}
  },
  "SourceRegions": {},
  "IncludeFutureRegions": {},
  "State": {},
  "EnableAllOpsDataSources": {}
}
```

<p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Amazon Web Services Systems Manager Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in Organizations.)</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceType|object|false|none|none|
|AwsOrganizationsSource|object|false|none|none|
|SourceRegions|object|false|none|none|
|IncludeFutureRegions|object|false|none|none|
|State|object|false|none|none|
|EnableAllOpsDataSources|object|false|none|none|

<h2 id="tocS_ResourceDataSyncLastModifiedTime">ResourceDataSyncLastModifiedTime</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasynclastmodifiedtime"></a>
<a id="schema_ResourceDataSyncLastModifiedTime"></a>
<a id="tocSresourcedatasynclastmodifiedtime"></a>
<a id="tocsresourcedatasynclastmodifiedtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ResourceDataSyncItem">ResourceDataSyncItem</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncitem"></a>
<a id="schema_ResourceDataSyncItem"></a>
<a id="tocSresourcedatasyncitem"></a>
<a id="tocsresourcedatasyncitem"></a>

```json
{
  "SyncName": {},
  "SyncType": {},
  "SyncSource": {
    "SourceType": {},
    "AwsOrganizationsSource": {
      "OrganizationSourceType": {},
      "OrganizationalUnits": {}
    },
    "SourceRegions": {},
    "IncludeFutureRegions": {},
    "State": {},
    "EnableAllOpsDataSources": {}
  },
  "S3Destination": {
    "BucketName": {},
    "Prefix": {},
    "SyncFormat": {},
    "Region": {},
    "AWSKMSKeyARN": {},
    "DestinationDataSharing": {
      "DestinationDataSharingType": {}
    }
  },
  "LastSyncTime": {},
  "LastSuccessfulSyncTime": {},
  "SyncLastModifiedTime": {},
  "LastStatus": {},
  "SyncCreatedTime": {},
  "LastSyncStatusMessage": {}
}
```

Information about a resource data sync configuration, including its current status and last successful sync.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SyncName|object|false|none|none|
|SyncType|object|false|none|none|
|SyncSource|object|false|none|none|
|S3Destination|object|false|none|none|
|LastSyncTime|object|false|none|none|
|LastSuccessfulSyncTime|object|false|none|none|
|SyncLastModifiedTime|object|false|none|none|
|LastStatus|object|false|none|none|
|SyncCreatedTime|object|false|none|none|
|LastSyncStatusMessage|object|false|none|none|

<h2 id="tocS_ResourceDataSyncOrganizationalUnitId">ResourceDataSyncOrganizationalUnitId</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncorganizationalunitid"></a>
<a id="schema_ResourceDataSyncOrganizationalUnitId"></a>
<a id="tocSresourcedatasyncorganizationalunitid"></a>
<a id="tocsresourcedatasyncorganizationalunitid"></a>

```json
"string"
```

<h2 id="tocS_ResourceDataSyncOrganizationalUnit">ResourceDataSyncOrganizationalUnit</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncorganizationalunit"></a>
<a id="schema_ResourceDataSyncOrganizationalUnit"></a>
<a id="tocSresourcedatasyncorganizationalunit"></a>
<a id="tocsresourcedatasyncorganizationalunit"></a>

```json
{
  "OrganizationalUnitId": {}
}
```

The Organizations organizational unit data source for the sync.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationalUnitId|object|false|none|none|

<h2 id="tocS_ResourceDataSyncS3BucketName">ResourceDataSyncS3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncs3bucketname"></a>
<a id="schema_ResourceDataSyncS3BucketName"></a>
<a id="tocSresourcedatasyncs3bucketname"></a>
<a id="tocsresourcedatasyncs3bucketname"></a>

```json
"string"
```

<h2 id="tocS_ResourceDataSyncS3Prefix">ResourceDataSyncS3Prefix</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncs3prefix"></a>
<a id="schema_ResourceDataSyncS3Prefix"></a>
<a id="tocSresourcedatasyncs3prefix"></a>
<a id="tocsresourcedatasyncs3prefix"></a>

```json
"string"
```

<h2 id="tocS_ResourceDataSyncS3Format">ResourceDataSyncS3Format</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncs3format"></a>
<a id="schema_ResourceDataSyncS3Format"></a>
<a id="tocSresourcedatasyncs3format"></a>
<a id="tocsresourcedatasyncs3format"></a>

```json
"JsonSerDe"
```

<h2 id="tocS_ResourceDataSyncS3Region">ResourceDataSyncS3Region</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncs3region"></a>
<a id="schema_ResourceDataSyncS3Region"></a>
<a id="tocSresourcedatasyncs3region"></a>
<a id="tocsresourcedatasyncs3region"></a>

```json
"string"
```

<h2 id="tocS_ResourceDataSyncSourceType">ResourceDataSyncSourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncsourcetype"></a>
<a id="schema_ResourceDataSyncSourceType"></a>
<a id="tocSresourcedatasyncsourcetype"></a>
<a id="tocsresourcedatasyncsourcetype"></a>

```json
"string"
```

<h2 id="tocS_ResourceDataSyncSourceRegionList">ResourceDataSyncSourceRegionList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncsourceregionlist"></a>
<a id="schema_ResourceDataSyncSourceRegionList"></a>
<a id="tocSresourcedatasyncsourceregionlist"></a>
<a id="tocsresourcedatasyncsourceregionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceDataSyncSourceRegion">ResourceDataSyncSourceRegion</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncsourceregion"></a>
<a id="schema_ResourceDataSyncSourceRegion"></a>
<a id="tocSresourcedatasyncsourceregion"></a>
<a id="tocsresourcedatasyncsourceregion"></a>

```json
"string"
```

<h2 id="tocS_ResourceDataSyncState">ResourceDataSyncState</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedatasyncstate"></a>
<a id="schema_ResourceDataSyncState"></a>
<a id="tocSresourcedatasyncstate"></a>
<a id="tocsresourcedatasyncstate"></a>

```json
"string"
```

<h2 id="tocS_ResultAttribute">ResultAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaresultattribute"></a>
<a id="schema_ResultAttribute"></a>
<a id="tocSresultattribute"></a>
<a id="tocsresultattribute"></a>

```json
{
  "TypeName": {}
}
```

The inventory item result attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeName|object|true|none|none|

<h2 id="tocS_SessionId">SessionId</h2>
<!-- backwards compatibility -->
<a id="schemasessionid"></a>
<a id="schema_SessionId"></a>
<a id="tocSsessionid"></a>
<a id="tocssessionid"></a>

```json
"string"
```

<h2 id="tocS_TokenValue">TokenValue</h2>
<!-- backwards compatibility -->
<a id="schematokenvalue"></a>
<a id="schema_TokenValue"></a>
<a id="tocStokenvalue"></a>
<a id="tocstokenvalue"></a>

```json
"string"
```

<h2 id="tocS_StreamUrl">StreamUrl</h2>
<!-- backwards compatibility -->
<a id="schemastreamurl"></a>
<a id="schema_StreamUrl"></a>
<a id="tocSstreamurl"></a>
<a id="tocsstreamurl"></a>

```json
"string"
```

<h2 id="tocS_ReviewInformation">ReviewInformation</h2>
<!-- backwards compatibility -->
<a id="schemareviewinformation"></a>
<a id="schema_ReviewInformation"></a>
<a id="tocSreviewinformation"></a>
<a id="tocsreviewinformation"></a>

```json
{
  "ReviewedTime": {},
  "Status": {},
  "Reviewer": {}
}
```

Information about the result of a document review request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReviewedTime|object|false|none|none|
|Status|object|false|none|none|
|Reviewer|object|false|none|none|

<h2 id="tocS_Runbook">Runbook</h2>
<!-- backwards compatibility -->
<a id="schemarunbook"></a>
<a id="schema_Runbook"></a>
<a id="tocSrunbook"></a>
<a id="tocsrunbook"></a>

```json
{
  "DocumentName": {},
  "DocumentVersion": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "TargetParameterName": {},
  "Targets": {},
  "TargetMaps": {},
  "MaxConcurrency": {},
  "MaxErrors": {},
  "TargetLocations": {}
}
```

<p>Information about an Automation runbook used in a runbook workflow in Change Manager.</p> <note> <p>The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentName|object|true|none|none|
|DocumentVersion|object|false|none|none|
|Parameters|object|false|none|none|
|TargetParameterName|object|false|none|none|
|Targets|object|false|none|none|
|TargetMaps|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|MaxErrors|object|false|none|none|
|TargetLocations|object|false|none|none|

<h2 id="tocS_ScheduledWindowExecution">ScheduledWindowExecution</h2>
<!-- backwards compatibility -->
<a id="schemascheduledwindowexecution"></a>
<a id="schema_ScheduledWindowExecution"></a>
<a id="tocSscheduledwindowexecution"></a>
<a id="tocsscheduledwindowexecution"></a>

```json
{
  "WindowId": {},
  "Name": {},
  "ExecutionTime": {}
}
```

Information about a scheduled execution for a maintenance window.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WindowId|object|false|none|none|
|Name|object|false|none|none|
|ExecutionTime|object|false|none|none|

<h2 id="tocS_SignalType">SignalType</h2>
<!-- backwards compatibility -->
<a id="schemasignaltype"></a>
<a id="schema_SignalType"></a>
<a id="tocSsignaltype"></a>
<a id="tocssignaltype"></a>

```json
"Approve"
```

<h2 id="tocS_ServiceSettingValue">ServiceSettingValue</h2>
<!-- backwards compatibility -->
<a id="schemaservicesettingvalue"></a>
<a id="schema_ServiceSettingValue"></a>
<a id="tocSservicesettingvalue"></a>
<a id="tocsservicesettingvalue"></a>

```json
"string"
```

<h2 id="tocS_SessionStatus">SessionStatus</h2>
<!-- backwards compatibility -->
<a id="schemasessionstatus"></a>
<a id="schema_SessionStatus"></a>
<a id="tocSsessionstatus"></a>
<a id="tocssessionstatus"></a>

```json
"Connected"
```

<h2 id="tocS_SessionOwner">SessionOwner</h2>
<!-- backwards compatibility -->
<a id="schemasessionowner"></a>
<a id="schema_SessionOwner"></a>
<a id="tocSsessionowner"></a>
<a id="tocssessionowner"></a>

```json
"string"
```

<h2 id="tocS_SessionReason">SessionReason</h2>
<!-- backwards compatibility -->
<a id="schemasessionreason"></a>
<a id="schema_SessionReason"></a>
<a id="tocSsessionreason"></a>
<a id="tocssessionreason"></a>

```json
"string"
```

<h2 id="tocS_SessionDetails">SessionDetails</h2>
<!-- backwards compatibility -->
<a id="schemasessiondetails"></a>
<a id="schema_SessionDetails"></a>
<a id="tocSsessiondetails"></a>
<a id="tocssessiondetails"></a>

```json
"string"
```

<h2 id="tocS_SessionManagerOutputUrl">SessionManagerOutputUrl</h2>
<!-- backwards compatibility -->
<a id="schemasessionmanageroutputurl"></a>
<a id="schema_SessionManagerOutputUrl"></a>
<a id="tocSsessionmanageroutputurl"></a>
<a id="tocssessionmanageroutputurl"></a>

```json
{
  "S3OutputUrl": {},
  "CloudWatchOutputUrl": {}
}
```

Reserved for future use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3OutputUrl|object|false|none|none|
|CloudWatchOutputUrl|object|false|none|none|

<h2 id="tocS_Session">Session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_Session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "SessionId": {},
  "Target": {},
  "Status": {},
  "StartDate": {},
  "EndDate": {},
  "DocumentName": {},
  "Owner": {},
  "Reason": {},
  "Details": {},
  "OutputUrl": {
    "S3OutputUrl": {},
    "CloudWatchOutputUrl": {}
  },
  "MaxSessionDuration": {}
}
```

Information about a Session Manager connection to a managed node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|false|none|none|
|Target|object|false|none|none|
|Status|object|false|none|none|
|StartDate|object|false|none|none|
|EndDate|object|false|none|none|
|DocumentName|object|false|none|none|
|Owner|object|false|none|none|
|Reason|object|false|none|none|
|Details|object|false|none|none|
|OutputUrl|object|false|none|none|
|MaxSessionDuration|object|false|none|none|

<h2 id="tocS_SessionFilterKey">SessionFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemasessionfilterkey"></a>
<a id="schema_SessionFilterKey"></a>
<a id="tocSsessionfilterkey"></a>
<a id="tocssessionfilterkey"></a>

```json
"InvokedAfter"
```

<h2 id="tocS_SessionFilterValue">SessionFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemasessionfiltervalue"></a>
<a id="schema_SessionFilterValue"></a>
<a id="tocSsessionfiltervalue"></a>
<a id="tocssessionfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_SessionFilter">SessionFilter</h2>
<!-- backwards compatibility -->
<a id="schemasessionfilter"></a>
<a id="schema_SessionFilter"></a>
<a id="tocSsessionfilter"></a>
<a id="tocssessionfilter"></a>

```json
{
  "key": {},
  "value": {}
}
```

Describes a filter for Session Manager information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_SessionManagerCloudWatchOutputUrl">SessionManagerCloudWatchOutputUrl</h2>
<!-- backwards compatibility -->
<a id="schemasessionmanagercloudwatchoutputurl"></a>
<a id="schema_SessionManagerCloudWatchOutputUrl"></a>
<a id="tocSsessionmanagercloudwatchoutputurl"></a>
<a id="tocssessionmanagercloudwatchoutputurl"></a>

```json
"string"
```

<h2 id="tocS_SessionManagerS3OutputUrl">SessionManagerS3OutputUrl</h2>
<!-- backwards compatibility -->
<a id="schemasessionmanagers3outputurl"></a>
<a id="schema_SessionManagerS3OutputUrl"></a>
<a id="tocSsessionmanagers3outputurl"></a>
<a id="tocssessionmanagers3outputurl"></a>

```json
"string"
```

<h2 id="tocS_SessionManagerParameterName">SessionManagerParameterName</h2>
<!-- backwards compatibility -->
<a id="schemasessionmanagerparametername"></a>
<a id="schema_SessionManagerParameterName"></a>
<a id="tocSsessionmanagerparametername"></a>
<a id="tocssessionmanagerparametername"></a>

```json
"string"
```

<h2 id="tocS_SessionManagerParameterValue">SessionManagerParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemasessionmanagerparametervalue"></a>
<a id="schema_SessionManagerParameterValue"></a>
<a id="tocSsessionmanagerparametervalue"></a>
<a id="tocssessionmanagerparametervalue"></a>

```json
"string"
```

<h2 id="tocS_SessionManagerParameterValueList">SessionManagerParameterValueList</h2>
<!-- backwards compatibility -->
<a id="schemasessionmanagerparametervaluelist"></a>
<a id="schema_SessionManagerParameterValueList"></a>
<a id="tocSsessionmanagerparametervaluelist"></a>
<a id="tocssessionmanagerparametervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SessionManagerParameters">SessionManagerParameters</h2>
<!-- backwards compatibility -->
<a id="schemasessionmanagerparameters"></a>
<a id="schema_SessionManagerParameters"></a>
<a id="tocSsessionmanagerparameters"></a>
<a id="tocssessionmanagerparameters"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SessionManagerParameterValueList](#schemasessionmanagerparametervaluelist)|false|none|none|

<h2 id="tocS_ValidNextStepList">ValidNextStepList</h2>
<!-- backwards compatibility -->
<a id="schemavalidnextsteplist"></a>
<a id="schema_ValidNextStepList"></a>
<a id="tocSvalidnextsteplist"></a>
<a id="tocsvalidnextsteplist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TargetLocation">TargetLocation</h2>
<!-- backwards compatibility -->
<a id="schematargetlocation"></a>
<a id="schema_TargetLocation"></a>
<a id="tocStargetlocation"></a>
<a id="tocstargetlocation"></a>

```json
{
  "Accounts": {},
  "Regions": {},
  "TargetLocationMaxConcurrency": {},
  "TargetLocationMaxErrors": {},
  "ExecutionRoleName": {},
  "TargetLocationAlarmConfiguration": {
    "IgnorePollAlarmFailure": {},
    "Alarms": {}
  }
}
```

The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accounts|object|false|none|none|
|Regions|object|false|none|none|
|TargetLocationMaxConcurrency|object|false|none|none|
|TargetLocationMaxErrors|object|false|none|none|
|ExecutionRoleName|object|false|none|none|
|TargetLocationAlarmConfiguration|[AlarmConfiguration](#schemaalarmconfiguration)|false|none|The details for the CloudWatch alarm you want to apply to an automation or command.|

<h2 id="tocS_StepExecution">StepExecution</h2>
<!-- backwards compatibility -->
<a id="schemastepexecution"></a>
<a id="schema_StepExecution"></a>
<a id="tocSstepexecution"></a>
<a id="tocsstepexecution"></a>

```json
{
  "StepName": {},
  "Action": {},
  "TimeoutSeconds": {},
  "OnFailure": {},
  "MaxAttempts": {},
  "ExecutionStartTime": {},
  "ExecutionEndTime": {},
  "StepStatus": {},
  "ResponseCode": {},
  "Inputs": {
    "property1": "string",
    "property2": "string"
  },
  "Outputs": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "Response": {},
  "FailureMessage": {},
  "FailureDetails": {
    "FailureStage": {},
    "FailureType": {},
    "Details": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "StepExecutionId": {},
  "OverriddenParameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "IsEnd": {},
  "NextStep": {},
  "IsCritical": {},
  "ValidNextSteps": {},
  "Targets": {},
  "TargetLocation": {
    "Accounts": {},
    "Regions": {},
    "TargetLocationMaxConcurrency": {},
    "TargetLocationMaxErrors": {},
    "ExecutionRoleName": {},
    "TargetLocationAlarmConfiguration": {
      "IgnorePollAlarmFailure": {},
      "Alarms": {}
    }
  },
  "TriggeredAlarms": {}
}
```

Detailed information about an the execution state of an Automation step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StepName|object|false|none|none|
|Action|object|false|none|none|
|TimeoutSeconds|object|false|none|none|
|OnFailure|object|false|none|none|
|MaxAttempts|object|false|none|none|
|ExecutionStartTime|object|false|none|none|
|ExecutionEndTime|object|false|none|none|
|StepStatus|object|false|none|none|
|ResponseCode|object|false|none|none|
|Inputs|object|false|none|none|
|Outputs|object|false|none|none|
|Response|object|false|none|none|
|FailureMessage|object|false|none|none|
|FailureDetails|object|false|none|none|
|StepExecutionId|object|false|none|none|
|OverriddenParameters|object|false|none|none|
|IsEnd|object|false|none|none|
|NextStep|object|false|none|none|
|IsCritical|object|false|none|none|
|ValidNextSteps|object|false|none|none|
|Targets|object|false|none|none|
|TargetLocation|object|false|none|none|
|TriggeredAlarms|object|false|none|none|

<h2 id="tocS_StepExecutionFilterKey">StepExecutionFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemastepexecutionfilterkey"></a>
<a id="schema_StepExecutionFilterKey"></a>
<a id="tocSstepexecutionfilterkey"></a>
<a id="tocsstepexecutionfilterkey"></a>

```json
"StartTimeBefore"
```

<h2 id="tocS_StepExecutionFilterValueList">StepExecutionFilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemastepexecutionfiltervaluelist"></a>
<a id="schema_StepExecutionFilterValueList"></a>
<a id="tocSstepexecutionfiltervaluelist"></a>
<a id="tocsstepexecutionfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StepExecutionFilter">StepExecutionFilter</h2>
<!-- backwards compatibility -->
<a id="schemastepexecutionfilter"></a>
<a id="schema_StepExecutionFilter"></a>
<a id="tocSstepexecutionfilter"></a>
<a id="tocsstepexecutionfilter"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

A filter to limit the amount of step execution information returned by the call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_StepExecutionFilterValue">StepExecutionFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemastepexecutionfiltervalue"></a>
<a id="schema_StepExecutionFilterValue"></a>
<a id="tocSstepexecutionfiltervalue"></a>
<a id="tocsstepexecutionfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_StopType">StopType</h2>
<!-- backwards compatibility -->
<a id="schemastoptype"></a>
<a id="schema_StopType"></a>
<a id="tocSstoptype"></a>
<a id="tocsstoptype"></a>

```json
"Complete"
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
  "Key": {},
  "Value": {}
}
```

Metadata that you assign to your Amazon Web Services resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In Amazon Web Services Systems Manager, you can apply tags to Systems Manager documents (SSM documents), managed nodes, maintenance windows, parameters, patch baselines, OpsItems, and OpsMetadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_TargetKey">TargetKey</h2>
<!-- backwards compatibility -->
<a id="schematargetkey"></a>
<a id="schema_TargetKey"></a>
<a id="tocStargetkey"></a>
<a id="tocstargetkey"></a>

```json
"string"
```

<h2 id="tocS_TargetValues">TargetValues</h2>
<!-- backwards compatibility -->
<a id="schematargetvalues"></a>
<a id="schema_TargetValues"></a>
<a id="tocStargetvalues"></a>
<a id="tocstargetvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

<p>An array of search criteria that targets managed nodes using a key-value pair that you specify.</p> <note> <p> One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering maintenance window tasks without targets</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </note> <p>Supported formats include the following.</p> <ul> <li> <p> <code>Key=InstanceIds,Values=&lt;instance-id-1&gt;,&lt;instance-id-2&gt;,&lt;instance-id-3&gt;</code> </p> </li> <li> <p> <code>Key=tag:&lt;my-tag-key&gt;,Values=&lt;my-tag-value-1&gt;,&lt;my-tag-value-2&gt;</code> </p> </li> <li> <p> <code>Key=tag-key,Values=&lt;my-tag-key-1&gt;,&lt;my-tag-key-2&gt;</code> </p> </li> <li> <p> <b>Run Command and Maintenance window targets only</b>: <code>Key=resource-groups:Name,Values=&lt;resource-group-name&gt;</code> </p> </li> <li> <p> <b>Maintenance window targets only</b>: <code>Key=resource-groups:ResourceTypeFilters,Values=&lt;resource-type-1&gt;,&lt;resource-type-2&gt;</code> </p> </li> <li> <p> <b>Automation targets only</b>: <code>Key=ResourceGroup;Values=&lt;resource-group-name&gt;</code> </p> </li> </ul> <p>For example:</p> <ul> <li> <p> <code>Key=InstanceIds,Values=i-02573cafcfEXAMPLE,i-0471e04240EXAMPLE,i-07782c72faEXAMPLE</code> </p> </li> <li> <p> <code>Key=tag:CostCenter,Values=CostCenter1,CostCenter2,CostCenter3</code> </p> </li> <li> <p> <code>Key=tag-key,Values=Name,Instance-Type,CostCenter</code> </p> </li> <li> <p> <b>Run Command and Maintenance window targets only</b>: <code>Key=resource-groups:Name,Values=ProductionResourceGroup</code> </p> <p>This example demonstrates how to target all resources in the resource group <b>ProductionResourceGroup</b> in your maintenance window.</p> </li> <li> <p> <b>Maintenance window targets only</b>: <code>Key=resource-groups:ResourceTypeFilters,Values=AWS::EC2::INSTANCE,AWS::EC2::VPC</code> </p> <p>This example demonstrates how to target only Amazon Elastic Compute Cloud (Amazon EC2) instances and VPCs in your maintenance window.</p> </li> <li> <p> <b>Automation targets only</b>: <code>Key=ResourceGroup,Values=MyResourceGroup</code> </p> </li> <li> <p> <b>State Manager association targets only</b>: <code>Key=InstanceIds,Values=*</code> </p> <p>This example demonstrates how to target all managed instances in the Amazon Web Services Region where the association was created.</p> </li> </ul> <p>For more information about how to send commands that target managed nodes using <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Targeting multiple instances</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_TargetMapValueList">TargetMapValueList</h2>
<!-- backwards compatibility -->
<a id="schematargetmapvaluelist"></a>
<a id="schema_TargetMapValueList"></a>
<a id="tocStargetmapvaluelist"></a>
<a id="tocstargetmapvaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TargetMap">TargetMap</h2>
<!-- backwards compatibility -->
<a id="schematargetmap"></a>
<a id="schema_TargetMap"></a>
<a id="tocStargetmap"></a>
<a id="tocstargetmap"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TargetMapValueList](#schematargetmapvaluelist)|false|none|none|

<h2 id="tocS_TargetMapKey">TargetMapKey</h2>
<!-- backwards compatibility -->
<a id="schematargetmapkey"></a>
<a id="schema_TargetMapKey"></a>
<a id="tocStargetmapkey"></a>
<a id="tocstargetmapkey"></a>

```json
"string"
```

<h2 id="tocS_TargetMapValue">TargetMapValue</h2>
<!-- backwards compatibility -->
<a id="schematargetmapvalue"></a>
<a id="schema_TargetMapValue"></a>
<a id="tocStargetmapvalue"></a>
<a id="tocstargetmapvalue"></a>

```json
"string"
```

<h2 id="tocS_TargetValue">TargetValue</h2>
<!-- backwards compatibility -->
<a id="schematargetvalue"></a>
<a id="schema_TargetValue"></a>
<a id="tocStargetvalue"></a>
<a id="tocstargetvalue"></a>

```json
"string"
```

<h2 id="tocS_ValidNextStep">ValidNextStep</h2>
<!-- backwards compatibility -->
<a id="schemavalidnextstep"></a>
<a id="schema_ValidNextStep"></a>
<a id="tocSvalidnextstep"></a>
<a id="tocsvalidnextstep"></a>

```json
"string"
```
