<h1 id="aws-codepipeline">AWS CodePipeline v2015-07-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>CodePipeline</fullname> <p> <b>Overview</b> </p> <p>This is the CodePipeline API Reference. This guide provides descriptions of the actions and data types for CodePipeline. Some functionality for your pipeline can only be configured through the API. For more information, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html">CodePipeline User Guide</a>.</p> <p>You can use the CodePipeline API to work with pipelines, stages, actions, and transitions.</p> <p> <i>Pipelines</i> are models of automated release processes. Each pipeline is uniquely named, and consists of stages, actions, and transitions. </p> <p>You can work with pipelines by calling:</p> <ul> <li> <p> <a>CreatePipeline</a>, which creates a uniquely named pipeline.</p> </li> <li> <p> <a>DeletePipeline</a>, which deletes the specified pipeline.</p> </li> <li> <p> <a>GetPipeline</a>, which returns information about the pipeline structure and pipeline metadata, including the pipeline Amazon Resource Name (ARN).</p> </li> <li> <p> <a>GetPipelineExecution</a>, which returns information about a specific execution of a pipeline.</p> </li> <li> <p> <a>GetPipelineState</a>, which returns information about the current state of the stages and actions of a pipeline.</p> </li> <li> <p> <a>ListActionExecutions</a>, which returns action-level details for past executions. The details include full stage and action-level details, including individual action duration, status, any errors that occurred during the execution, and input and output artifact location details.</p> </li> <li> <p> <a>ListPipelines</a>, which gets a summary of all of the pipelines associated with your account.</p> </li> <li> <p> <a>ListPipelineExecutions</a>, which gets a summary of the most recent executions for a pipeline.</p> </li> <li> <p> <a>StartPipelineExecution</a>, which runs the most recent revision of an artifact through the pipeline.</p> </li> <li> <p> <a>StopPipelineExecution</a>, which stops the specified pipeline execution from continuing through the pipeline.</p> </li> <li> <p> <a>UpdatePipeline</a>, which updates a pipeline with edits or changes to the structure of the pipeline.</p> </li> </ul> <p>Pipelines include <i>stages</i>. Each stage contains one or more actions that must complete before the next stage begins. A stage results in success or failure. If a stage fails, the pipeline stops at that stage and remains stopped until either a new version of an artifact appears in the source location, or a user takes action to rerun the most recent artifact through the pipeline. You can call <a>GetPipelineState</a>, which displays the status of a pipeline, including the status of stages in the pipeline, or <a>GetPipeline</a>, which returns the entire structure of the pipeline, including the stages of that pipeline. For more information about the structure of stages and actions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-structure.html">CodePipeline Pipeline Structure Reference</a>.</p> <p>Pipeline stages include <i>actions</i> that are categorized into categories such as source or build actions performed in a stage of a pipeline. For example, you can use a source action to import artifacts into a pipeline from a source such as Amazon S3. Like stages, you do not work with actions directly in most cases, but you do define and interact with actions when working with pipeline operations such as <a>CreatePipeline</a> and <a>GetPipelineState</a>. Valid action categories are:</p> <ul> <li> <p>Source</p> </li> <li> <p>Build</p> </li> <li> <p>Test</p> </li> <li> <p>Deploy</p> </li> <li> <p>Approval</p> </li> <li> <p>Invoke</p> </li> </ul> <p>Pipelines also include <i>transitions</i>, which allow the transition of artifacts from one stage to the next in a pipeline after the actions in one stage complete.</p> <p>You can work with transitions by calling:</p> <ul> <li> <p> <a>DisableStageTransition</a>, which prevents artifacts from transitioning to the next stage in a pipeline.</p> </li> <li> <p> <a>EnableStageTransition</a>, which enables transition of artifacts between stages in a pipeline. </p> </li> </ul> <p> <b>Using the API to integrate with CodePipeline</b> </p> <p>For third-party integrators or developers who want to create their own integrations with CodePipeline, the expected sequence varies from the standard API user. To integrate with CodePipeline, developers need to work with the following items:</p> <p> <b>Jobs</b>, which are instances of an action. For example, a job for a source action might import a revision of an artifact from a source. </p> <p>You can work with jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeJob</a>, which confirms whether a job worker has received the specified job.</p> </li> <li> <p> <a>GetJobDetails</a>, which returns the details of a job.</p> </li> <li> <p> <a>PollForJobs</a>, which determines whether there are any jobs to act on.</p> </li> <li> <p> <a>PutJobFailureResult</a>, which provides details of a job failure. </p> </li> <li> <p> <a>PutJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul> <p> <b>Third party jobs</b>, which are instances of an action created by a partner action and integrated into CodePipeline. Partner actions are created by members of the Amazon Web Services Partner Network.</p> <p>You can work with third party jobs by calling:</p> <ul> <li> <p> <a>AcknowledgeThirdPartyJob</a>, which confirms whether a job worker has received the specified job.</p> </li> <li> <p> <a>GetThirdPartyJobDetails</a>, which requests the details of a job for a partner action.</p> </li> <li> <p> <a>PollForThirdPartyJobs</a>, which determines whether there are any jobs to act on. </p> </li> <li> <p> <a>PutThirdPartyJobFailureResult</a>, which provides details of a job failure.</p> </li> <li> <p> <a>PutThirdPartyJobSuccessResult</a>, which provides details of a job success.</p> </li> </ul>

Base URLs:

* <a href="http://codepipeline.us-east-1.amazonaws.com">http://codepipeline.us-east-1.amazonaws.com</a> - The CodePipeline multi-region endpoint

* <a href="https://codepipeline.us-east-1.amazonaws.com">https://codepipeline.us-east-1.amazonaws.com</a> - The CodePipeline multi-region endpoint

* <a href="http://codepipeline.cn-north-1.amazonaws.com.cn">http://codepipeline.cn-north-1.amazonaws.com.cn</a> - The CodePipeline endpoint for China (Beijing) and China (Ningxia)

* <a href="https://codepipeline.cn-north-1.amazonaws.com.cn">https://codepipeline.cn-north-1.amazonaws.com.cn</a> - The CodePipeline endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/codepipeline/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-codepipeline-default">Default</h1>

## AcknowledgeJob

<a id="opIdAcknowledgeJob"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.AcknowledgeJob' \
  -d '{
    "jobId": {},
    "nonce": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob`

Returns information about a specified job and whether that job has been received by the job worker. Used for custom actions only.

> Body parameter

```json
{
  "jobId": {},
  "nonce": {}
}
```

<h3 id="acknowledgejob-parameters">Parameters</h3>

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
|body|body|[AcknowledgeJobInput](#schemaacknowledgejobinput)|true|none|
|» jobId|body|object|true|none|
|» nonce|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.AcknowledgeJob|

> Example responses

> 200 Response

```json
{
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

<h3 id="acknowledgejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcknowledgeJobOutput](#schemaacknowledgejoboutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidNonceException|[InvalidNonceException](#schemainvalidnonceexception)|
|482|482|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AcknowledgeThirdPartyJob

<a id="opIdAcknowledgeThirdPartyJob"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.AcknowledgeThirdPartyJob' \
  -d '{
    "jobId": {},
    "nonce": {},
    "clientToken": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob`

Confirms a job worker has received the specified job. Used for partner actions only.

> Body parameter

```json
{
  "jobId": {},
  "nonce": {},
  "clientToken": {}
}
```

<h3 id="acknowledgethirdpartyjob-parameters">Parameters</h3>

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
|body|body|[AcknowledgeThirdPartyJobInput](#schemaacknowledgethirdpartyjobinput)|true|none|
|» jobId|body|object|true|none|
|» nonce|body|object|true|none|
|» clientToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.AcknowledgeThirdPartyJob|

> Example responses

> 200 Response

```json
{
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

<h3 id="acknowledgethirdpartyjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcknowledgeThirdPartyJobOutput](#schemaacknowledgethirdpartyjoboutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidNonceException|[InvalidNonceException](#schemainvalidnonceexception)|
|482|482|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|483|483|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCustomActionType

<a id="opIdCreateCustomActionType"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.CreateCustomActionType' \
  -d '{
    "category": {},
    "provider": {},
    "version": {},
    "settings": {
      "thirdPartyConfigurationUrl": {},
      "entityUrlTemplate": {},
      "executionUrlTemplate": {},
      "revisionUrlTemplate": {}
    },
    "configurationProperties": {},
    "inputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    },
    "outputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType`

Creates a new custom action that can be used in all pipelines associated with the Amazon Web Services account. Only used for custom actions.

> Body parameter

```json
{
  "category": {},
  "provider": {},
  "version": {},
  "settings": {
    "thirdPartyConfigurationUrl": {},
    "entityUrlTemplate": {},
    "executionUrlTemplate": {},
    "revisionUrlTemplate": {}
  },
  "configurationProperties": {},
  "inputArtifactDetails": {
    "minimumCount": {},
    "maximumCount": {}
  },
  "outputArtifactDetails": {
    "minimumCount": {},
    "maximumCount": {}
  },
  "tags": {}
}
```

<h3 id="createcustomactiontype-parameters">Parameters</h3>

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
|body|body|[CreateCustomActionTypeInput](#schemacreatecustomactiontypeinput)|true|none|
|» category|body|object|true|none|
|» provider|body|object|true|none|
|» version|body|object|true|none|
|» settings|body|object|false|none|
|» » thirdPartyConfigurationUrl|body|object|false|none|
|» » entityUrlTemplate|body|object|false|none|
|» » executionUrlTemplate|body|object|false|none|
|» » revisionUrlTemplate|body|object|false|none|
|» configurationProperties|body|object|false|none|
|» inputArtifactDetails|body|object|true|none|
|» » minimumCount|body|object|true|none|
|» » maximumCount|body|object|true|none|
|» outputArtifactDetails|body|object|true|none|
|» » minimumCount|body|object|true|none|
|» » maximumCount|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.CreateCustomActionType|

> Example responses

> 200 Response

```json
{
  "actionType": {
    "id": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "settings": {
      "thirdPartyConfigurationUrl": {},
      "entityUrlTemplate": {},
      "executionUrlTemplate": {},
      "revisionUrlTemplate": {}
    },
    "actionConfigurationProperties": {},
    "inputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    },
    "outputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    }
  },
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createcustomactiontype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCustomActionTypeOutput](#schemacreatecustomactiontypeoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|InvalidTagsException|[InvalidTagsException](#schemainvalidtagsexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePipeline

<a id="opIdCreatePipeline"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.CreatePipeline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.CreatePipeline' \
  -d '{
    "pipeline": {
      "name": {},
      "roleArn": {},
      "artifactStore": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      },
      "artifactStores": {
        "property1": {
          "type": {},
          "location": {},
          "encryptionKey": {
            "id": {},
            "type": {}
          }
        },
        "property2": {
          "type": {},
          "location": {},
          "encryptionKey": {
            "id": {},
            "type": {}
          }
        }
      },
      "stages": {},
      "version": {}
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.CreatePipeline`

<p>Creates a pipeline.</p> <note> <p>In the pipeline structure, you must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>

> Body parameter

```json
{
  "pipeline": {
    "name": {},
    "roleArn": {},
    "artifactStore": {
      "type": {},
      "location": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "artifactStores": {
      "property1": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      },
      "property2": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      }
    },
    "stages": {},
    "version": {}
  },
  "tags": {}
}
```

<h3 id="createpipeline-parameters">Parameters</h3>

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
|body|body|[CreatePipelineInput](#schemacreatepipelineinput)|true|none|
|» pipeline|body|object|true|none|
|» » name|body|object|true|none|
|» » roleArn|body|object|true|none|
|» » artifactStore|body|object|false|none|
|» » » type|body|object|true|none|
|» » » location|body|object|true|none|
|» » » encryptionKey|body|object|false|none|
|» » » » id|body|object|true|none|
|» » » » type|body|object|true|none|
|» » artifactStores|body|object|false|none|
|» » » **additionalProperties**|body|[ArtifactStore](#schemaartifactstore)|false|<p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>|
|» » stages|body|object|true|none|
|» » version|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.CreatePipeline|

> Example responses

> 200 Response

```json
{
  "pipeline": {
    "name": {},
    "roleArn": {},
    "artifactStore": {
      "type": {},
      "location": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "artifactStores": {
      "property1": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      },
      "property2": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      }
    },
    "stages": {},
    "version": {}
  },
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

<h3 id="createpipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePipelineOutput](#schemacreatepipelineoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|PipelineNameInUseException|[PipelineNameInUseException](#schemapipelinenameinuseexception)|
|482|482|InvalidStageDeclarationException|[InvalidStageDeclarationException](#schemainvalidstagedeclarationexception)|
|483|483|InvalidActionDeclarationException|[InvalidActionDeclarationException](#schemainvalidactiondeclarationexception)|
|484|484|InvalidBlockerDeclarationException|[InvalidBlockerDeclarationException](#schemainvalidblockerdeclarationexception)|
|485|485|InvalidStructureException|[InvalidStructureException](#schemainvalidstructureexception)|
|486|486|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|487|487|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|488|488|InvalidTagsException|[InvalidTagsException](#schemainvalidtagsexception)|
|489|489|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCustomActionType

<a id="opIdDeleteCustomActionType"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.DeleteCustomActionType' \
  -d '{
    "category": {},
    "provider": {},
    "version": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType`

<p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action fails after the action is marked for deletion. Used for custom actions only.</p> <important> <p>To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</p> </important>

> Body parameter

```json
{
  "category": {},
  "provider": {},
  "version": {}
}
```

<h3 id="deletecustomactiontype-parameters">Parameters</h3>

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
|body|body|[DeleteCustomActionTypeInput](#schemadeletecustomactiontypeinput)|true|none|
|» category|body|object|true|none|
|» provider|body|object|true|none|
|» version|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.DeleteCustomActionType|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletecustomactiontype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePipeline

<a id="opIdDeletePipeline"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.DeletePipeline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.DeletePipeline' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.DeletePipeline`

Deletes the specified pipeline.

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deletepipeline-parameters">Parameters</h3>

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
|body|body|[DeletePipelineInput](#schemadeletepipelineinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.DeletePipeline|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWebhook

<a id="opIdDeleteWebhook"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.DeleteWebhook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.DeleteWebhook' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.DeleteWebhook`

Deletes a previously created webhook by name. Deleting the webhook stops CodePipeline from starting a pipeline every time an external event occurs. The API returns successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deletewebhook-parameters">Parameters</h3>

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
|body|body|[DeleteWebhookInput](#schemadeletewebhookinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.DeleteWebhook|

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

<h3 id="deletewebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteWebhookOutput](#schemadeletewebhookoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterWebhookWithThirdParty

<a id="opIdDeregisterWebhookWithThirdParty"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.DeregisterWebhookWithThirdParty' \
  -d '{
    "webhookName": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty`

Removes the connection between the webhook that was created by CodePipeline and the external tool with events to be detected. Currently supported only for webhooks that target an action type of GitHub.

> Body parameter

```json
{
  "webhookName": {}
}
```

<h3 id="deregisterwebhookwiththirdparty-parameters">Parameters</h3>

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
|body|body|[DeregisterWebhookWithThirdPartyInput](#schemaderegisterwebhookwiththirdpartyinput)|true|none|
|» webhookName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.DeregisterWebhookWithThirdParty|

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

<h3 id="deregisterwebhookwiththirdparty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterWebhookWithThirdPartyOutput](#schemaderegisterwebhookwiththirdpartyoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|WebhookNotFoundException|[WebhookNotFoundException](#schemawebhooknotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableStageTransition

<a id="opIdDisableStageTransition"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.DisableStageTransition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.DisableStageTransition' \
  -d '{
    "pipelineName": {},
    "stageName": {},
    "transitionType": {},
    "reason": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.DisableStageTransition`

Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.

> Body parameter

```json
{
  "pipelineName": {},
  "stageName": {},
  "transitionType": {},
  "reason": {}
}
```

<h3 id="disablestagetransition-parameters">Parameters</h3>

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
|body|body|[DisableStageTransitionInput](#schemadisablestagetransitioninput)|true|none|
|» pipelineName|body|object|true|none|
|» stageName|body|object|true|none|
|» transitionType|body|object|true|none|
|» reason|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.DisableStageTransition|

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

<h3 id="disablestagetransition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|482|482|StageNotFoundException|[StageNotFoundException](#schemastagenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableStageTransition

<a id="opIdEnableStageTransition"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.EnableStageTransition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.EnableStageTransition' \
  -d '{
    "pipelineName": {},
    "stageName": {},
    "transitionType": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.EnableStageTransition`

Enables artifacts in a pipeline to transition to a stage in a pipeline.

> Body parameter

```json
{
  "pipelineName": {},
  "stageName": {},
  "transitionType": {}
}
```

<h3 id="enablestagetransition-parameters">Parameters</h3>

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
|body|body|[EnableStageTransitionInput](#schemaenablestagetransitioninput)|true|none|
|» pipelineName|body|object|true|none|
|» stageName|body|object|true|none|
|» transitionType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.EnableStageTransition|

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

<h3 id="enablestagetransition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|482|482|StageNotFoundException|[StageNotFoundException](#schemastagenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetActionType

<a id="opIdGetActionType"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.GetActionType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.GetActionType' \
  -d '{
    "category": {},
    "owner": {},
    "provider": {},
    "version": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.GetActionType`

Returns information about an action type created for an external provider, where the action is to be used by customers of the external provider. The action can be created with any supported integration model.

> Body parameter

```json
{
  "category": {},
  "owner": {},
  "provider": {},
  "version": {}
}
```

<h3 id="getactiontype-parameters">Parameters</h3>

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
|body|body|[GetActionTypeInput](#schemagetactiontypeinput)|true|none|
|» category|body|object|true|none|
|» owner|body|object|true|none|
|» provider|body|object|true|none|
|» version|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.GetActionType|

> Example responses

> 200 Response

```json
{
  "actionType": {
    "description": {},
    "executor": {
      "configuration": {
        "lambdaExecutorConfiguration": {
          "lambdaFunctionArn": {}
        },
        "jobWorkerExecutorConfiguration": {
          "pollingAccounts": {},
          "pollingServicePrincipals": {}
        }
      },
      "type": {},
      "policyStatementsTemplate": {},
      "jobTimeout": {}
    },
    "id": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "inputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    },
    "outputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    },
    "permissions": {
      "allowedAccounts": {}
    },
    "properties": null,
    "urls": {
      "configurationUrl": {},
      "entityUrlTemplate": {},
      "executionUrlTemplate": {},
      "revisionUrlTemplate": {}
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

<h3 id="getactiontype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetActionTypeOutput](#schemagetactiontypeoutput)|
|480|480|ActionTypeNotFoundException|[ActionTypeNotFoundException](#schemaactiontypenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetJobDetails

<a id="opIdGetJobDetails"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.GetJobDetails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.GetJobDetails' \
  -d '{
    "jobId": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.GetJobDetails`

<p>Returns information about a job. Used for custom actions only.</p> <important> <p>When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>

> Body parameter

```json
{
  "jobId": {}
}
```

<h3 id="getjobdetails-parameters">Parameters</h3>

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
|body|body|[GetJobDetailsInput](#schemagetjobdetailsinput)|true|none|
|» jobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.GetJobDetails|

> Example responses

> 200 Response

```json
{
  "jobDetails": {
    "id": {},
    "data": {
      "actionTypeId": {
        "category": {},
        "owner": {},
        "provider": {},
        "version": {}
      },
      "actionConfiguration": {
        "configuration": {
          "property1": "string",
          "property2": "string"
        }
      },
      "pipelineContext": {
        "pipelineName": {},
        "stage": {
          "name": {}
        },
        "action": {
          "name": {},
          "actionExecutionId": {}
        },
        "pipelineArn": {},
        "pipelineExecutionId": {}
      },
      "inputArtifacts": {},
      "outputArtifacts": {},
      "artifactCredentials": {
        "accessKeyId": {},
        "secretAccessKey": {},
        "sessionToken": {}
      },
      "continuationToken": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "accountId": {}
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

<h3 id="getjobdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetJobDetailsOutput](#schemagetjobdetailsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPipeline

<a id="opIdGetPipeline"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.GetPipeline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.GetPipeline' \
  -d '{
    "name": {},
    "version": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.GetPipeline`

Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with <a>UpdatePipeline</a>.

> Body parameter

```json
{
  "name": {},
  "version": {}
}
```

<h3 id="getpipeline-parameters">Parameters</h3>

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
|body|body|[GetPipelineInput](#schemagetpipelineinput)|true|none|
|» name|body|object|true|none|
|» version|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.GetPipeline|

> Example responses

> 200 Response

```json
{
  "pipeline": {
    "name": {},
    "roleArn": {},
    "artifactStore": {
      "type": {},
      "location": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "artifactStores": {
      "property1": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      },
      "property2": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      }
    },
    "stages": {},
    "version": {}
  },
  "metadata": {
    "pipelineArn": {},
    "created": {},
    "updated": {},
    "pollingDisabledAt": {}
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

<h3 id="getpipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPipelineOutput](#schemagetpipelineoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|482|482|PipelineVersionNotFoundException|[PipelineVersionNotFoundException](#schemapipelineversionnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPipelineExecution

<a id="opIdGetPipelineExecution"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.GetPipelineExecution' \
  -d '{
    "pipelineName": {},
    "pipelineExecutionId": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution`

Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.

> Body parameter

```json
{
  "pipelineName": {},
  "pipelineExecutionId": {}
}
```

<h3 id="getpipelineexecution-parameters">Parameters</h3>

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
|body|body|[GetPipelineExecutionInput](#schemagetpipelineexecutioninput)|true|none|
|» pipelineName|body|object|true|none|
|» pipelineExecutionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.GetPipelineExecution|

> Example responses

> 200 Response

```json
{
  "pipelineExecution": {
    "pipelineName": {},
    "pipelineVersion": {},
    "pipelineExecutionId": {},
    "status": {},
    "statusSummary": {},
    "artifactRevisions": {}
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

<h3 id="getpipelineexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPipelineExecutionOutput](#schemagetpipelineexecutionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|482|482|PipelineExecutionNotFoundException|[PipelineExecutionNotFoundException](#schemapipelineexecutionnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPipelineState

<a id="opIdGetPipelineState"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.GetPipelineState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.GetPipelineState' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.GetPipelineState`

<p>Returns information about the state of a pipeline, including the stages and actions.</p> <note> <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code> fields indicate the source revision information, such as the commit ID, for the current state.</p> </note>

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="getpipelinestate-parameters">Parameters</h3>

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
|body|body|[GetPipelineStateInput](#schemagetpipelinestateinput)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.GetPipelineState|

> Example responses

> 200 Response

```json
{
  "pipelineName": {},
  "pipelineVersion": {},
  "stageStates": {},
  "created": {},
  "updated": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getpipelinestate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPipelineStateOutput](#schemagetpipelinestateoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetThirdPartyJobDetails

<a id="opIdGetThirdPartyJobDetails"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.GetThirdPartyJobDetails' \
  -d '{
    "jobId": {},
    "clientToken": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails`

<p>Requests the details of a job for a third party action. Used for partner actions only.</p> <important> <p>When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>

> Body parameter

```json
{
  "jobId": {},
  "clientToken": {}
}
```

<h3 id="getthirdpartyjobdetails-parameters">Parameters</h3>

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
|body|body|[GetThirdPartyJobDetailsInput](#schemagetthirdpartyjobdetailsinput)|true|none|
|» jobId|body|object|true|none|
|» clientToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.GetThirdPartyJobDetails|

> Example responses

> 200 Response

```json
{
  "jobDetails": {
    "id": {},
    "data": {
      "actionTypeId": {
        "category": {},
        "owner": {},
        "provider": {},
        "version": {}
      },
      "actionConfiguration": {
        "configuration": {
          "property1": "string",
          "property2": "string"
        }
      },
      "pipelineContext": {
        "pipelineName": {},
        "stage": {
          "name": {}
        },
        "action": {
          "name": {},
          "actionExecutionId": {}
        },
        "pipelineArn": {},
        "pipelineExecutionId": {}
      },
      "inputArtifacts": {},
      "outputArtifacts": {},
      "artifactCredentials": {
        "accessKeyId": {},
        "secretAccessKey": {},
        "sessionToken": {}
      },
      "continuationToken": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "nonce": {}
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

<h3 id="getthirdpartyjobdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetThirdPartyJobDetailsOutput](#schemagetthirdpartyjobdetailsoutput)|
|480|480|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|
|483|483|InvalidJobException|[InvalidJobException](#schemainvalidjobexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListActionExecutions

<a id="opIdListActionExecutions"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.ListActionExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.ListActionExecutions' \
  -d '{
    "pipelineName": {},
    "filter": {
      "pipelineExecutionId": {}
    },
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.ListActionExecutions`

Lists the action executions that have occurred in a pipeline.

> Body parameter

```json
{
  "pipelineName": {},
  "filter": {
    "pipelineExecutionId": {}
  },
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listactionexecutions-parameters">Parameters</h3>

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
|body|body|[ListActionExecutionsInput](#schemalistactionexecutionsinput)|true|none|
|» pipelineName|body|object|true|none|
|» filter|body|object|false|none|
|» » pipelineExecutionId|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.ListActionExecutions|

> Example responses

> 200 Response

```json
{
  "actionExecutionDetails": {},
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

<h3 id="listactionexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListActionExecutionsOutput](#schemalistactionexecutionsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|PipelineExecutionNotFoundException|[PipelineExecutionNotFoundException](#schemapipelineexecutionnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListActionTypes

<a id="opIdListActionTypes"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.ListActionTypes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.ListActionTypes' \
  -d '{
    "actionOwnerFilter": {},
    "nextToken": {},
    "regionFilter": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.ListActionTypes`

Gets a summary of all CodePipeline action types associated with your account.

> Body parameter

```json
{
  "actionOwnerFilter": {},
  "nextToken": {},
  "regionFilter": {}
}
```

<h3 id="listactiontypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListActionTypesInput](#schemalistactiontypesinput)|true|none|
|» actionOwnerFilter|body|object|false|none|
|» nextToken|body|object|false|none|
|» regionFilter|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.ListActionTypes|

> Example responses

> 200 Response

```json
{
  "actionTypes": {},
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

<h3 id="listactiontypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListActionTypesOutput](#schemalistactiontypesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPipelineExecutions

<a id="opIdListPipelineExecutions"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.ListPipelineExecutions' \
  -d '{
    "pipelineName": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions`

Gets a summary of the most recent executions for a pipeline.

> Body parameter

```json
{
  "pipelineName": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="listpipelineexecutions-parameters">Parameters</h3>

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
|body|body|[ListPipelineExecutionsInput](#schemalistpipelineexecutionsinput)|true|none|
|» pipelineName|body|object|true|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.ListPipelineExecutions|

> Example responses

> 200 Response

```json
{
  "pipelineExecutionSummaries": {},
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

<h3 id="listpipelineexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPipelineExecutionsOutput](#schemalistpipelineexecutionsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPipelines

<a id="opIdListPipelines"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.ListPipelines' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.ListPipelines' \
  -d '{
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.ListPipelines`

Gets a summary of all of the pipelines associated with your account.

> Body parameter

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listpipelines-parameters">Parameters</h3>

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
|body|body|[ListPipelinesInput](#schemalistpipelinesinput)|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.ListPipelines|

> Example responses

> 200 Response

```json
{
  "pipelines": {},
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

<h3 id="listpipelines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPipelinesOutput](#schemalistpipelinesoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.ListTagsForResource' \
  -d '{
    "resourceArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.ListTagsForResource`

Gets the set of key-value pairs (metadata) that are used to manage the resource.

> Body parameter

```json
{
  "resourceArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceInput](#schemalisttagsforresourceinput)|true|none|
|» resourceArn|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "tags": {},
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|483|483|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWebhooks

<a id="opIdListWebhooks"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.ListWebhooks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.ListWebhooks' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.ListWebhooks`

Gets a listing of all the webhooks in this Amazon Web Services Region for this account. The output lists all webhooks and includes the webhook URL and ARN and the configuration for each webhook.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listwebhooks-parameters">Parameters</h3>

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
|body|body|[ListWebhooksInput](#schemalistwebhooksinput)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.ListWebhooks|

> Example responses

> 200 Response

```json
{
  "webhooks": {},
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

<h3 id="listwebhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWebhooksOutput](#schemalistwebhooksoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PollForJobs

<a id="opIdPollForJobs"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.PollForJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.PollForJobs' \
  -d '{
    "actionTypeId": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "maxBatchSize": {},
    "queryParam": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.PollForJobs`

<p>Returns information about any jobs for CodePipeline to act on. <code>PollForJobs</code> is valid only for action types with "Custom" in the owner field. If the action type contains <code>AWS</code> or <code>ThirdParty</code> in the owner field, the <code>PollForJobs</code> action returns an error.</p> <important> <p>When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>

> Body parameter

```json
{
  "actionTypeId": {
    "category": {},
    "owner": {},
    "provider": {},
    "version": {}
  },
  "maxBatchSize": {},
  "queryParam": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="pollforjobs-parameters">Parameters</h3>

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
|body|body|[PollForJobsInput](#schemapollforjobsinput)|true|none|
|» actionTypeId|body|object|true|none|
|» » category|body|object|true|none|
|» » owner|body|object|true|none|
|» » provider|body|object|true|none|
|» » version|body|object|true|none|
|» maxBatchSize|body|object|false|none|
|» queryParam|body|object|false|none|
|» » **additionalProperties**|body|[ActionConfigurationQueryableValue](#schemaactionconfigurationqueryablevalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.PollForJobs|

> Example responses

> 200 Response

```json
{
  "jobs": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="pollforjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PollForJobsOutput](#schemapollforjobsoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ActionTypeNotFoundException|[ActionTypeNotFoundException](#schemaactiontypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PollForThirdPartyJobs

<a id="opIdPollForThirdPartyJobs"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.PollForThirdPartyJobs' \
  -d '{
    "actionTypeId": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "maxBatchSize": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs`

<p>Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only.</p> <important> <p>When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.</p> </important>

> Body parameter

```json
{
  "actionTypeId": {
    "category": {},
    "owner": {},
    "provider": {},
    "version": {}
  },
  "maxBatchSize": {}
}
```

<h3 id="pollforthirdpartyjobs-parameters">Parameters</h3>

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
|body|body|[PollForThirdPartyJobsInput](#schemapollforthirdpartyjobsinput)|true|none|
|» actionTypeId|body|object|true|none|
|» » category|body|object|true|none|
|» » owner|body|object|true|none|
|» » provider|body|object|true|none|
|» » version|body|object|true|none|
|» maxBatchSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.PollForThirdPartyJobs|

> Example responses

> 200 Response

```json
{
  "jobs": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="pollforthirdpartyjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PollForThirdPartyJobsOutput](#schemapollforthirdpartyjobsoutput)|
|480|480|ActionTypeNotFoundException|[ActionTypeNotFoundException](#schemaactiontypenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutActionRevision

<a id="opIdPutActionRevision"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.PutActionRevision' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.PutActionRevision' \
  -d '{
    "pipelineName": {},
    "stageName": {},
    "actionName": {},
    "actionRevision": {
      "revisionId": {},
      "revisionChangeId": {},
      "created": {}
    }
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.PutActionRevision`

Provides information to CodePipeline about new revisions to a source.

> Body parameter

```json
{
  "pipelineName": {},
  "stageName": {},
  "actionName": {},
  "actionRevision": {
    "revisionId": {},
    "revisionChangeId": {},
    "created": {}
  }
}
```

<h3 id="putactionrevision-parameters">Parameters</h3>

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
|body|body|[PutActionRevisionInput](#schemaputactionrevisioninput)|true|none|
|» pipelineName|body|object|true|none|
|» stageName|body|object|true|none|
|» actionName|body|object|true|none|
|» actionRevision|body|object|true|none|
|» » revisionId|body|object|true|none|
|» » revisionChangeId|body|object|true|none|
|» » created|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.PutActionRevision|

> Example responses

> 200 Response

```json
{
  "newRevision": {},
  "pipelineExecutionId": {}
}
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

<h3 id="putactionrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutActionRevisionOutput](#schemaputactionrevisionoutput)|
|480|480|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|481|481|StageNotFoundException|[StageNotFoundException](#schemastagenotfoundexception)|
|482|482|ActionNotFoundException|[ActionNotFoundException](#schemaactionnotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutApprovalResult

<a id="opIdPutApprovalResult"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.PutApprovalResult' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.PutApprovalResult' \
  -d '{
    "pipelineName": {},
    "stageName": {},
    "actionName": {},
    "result": {
      "summary": {},
      "status": {}
    },
    "token": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.PutApprovalResult`

Provides the response to a manual approval request to CodePipeline. Valid responses include Approved and Rejected.

> Body parameter

```json
{
  "pipelineName": {},
  "stageName": {},
  "actionName": {},
  "result": {
    "summary": {},
    "status": {}
  },
  "token": {}
}
```

<h3 id="putapprovalresult-parameters">Parameters</h3>

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
|body|body|[PutApprovalResultInput](#schemaputapprovalresultinput)|true|none|
|» pipelineName|body|object|true|none|
|» stageName|body|object|true|none|
|» actionName|body|object|true|none|
|» result|body|object|true|none|
|» » summary|body|object|true|none|
|» » status|body|object|true|none|
|» token|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.PutApprovalResult|

> Example responses

> 200 Response

```json
{
  "approvedAt": {}
}
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

<h3 id="putapprovalresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutApprovalResultOutput](#schemaputapprovalresultoutput)|
|480|480|InvalidApprovalTokenException|[InvalidApprovalTokenException](#schemainvalidapprovaltokenexception)|
|481|481|ApprovalAlreadyCompletedException|[ApprovalAlreadyCompletedException](#schemaapprovalalreadycompletedexception)|
|482|482|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|483|483|StageNotFoundException|[StageNotFoundException](#schemastagenotfoundexception)|
|484|484|ActionNotFoundException|[ActionNotFoundException](#schemaactionnotfoundexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutJobFailureResult

<a id="opIdPutJobFailureResult"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.PutJobFailureResult' \
  -d '{
    "jobId": {},
    "failureDetails": {
      "type": {},
      "message": {},
      "externalExecutionId": {}
    }
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult`

Represents the failure of a job as returned to the pipeline by a job worker. Used for custom actions only.

> Body parameter

```json
{
  "jobId": {},
  "failureDetails": {
    "type": {},
    "message": {},
    "externalExecutionId": {}
  }
}
```

<h3 id="putjobfailureresult-parameters">Parameters</h3>

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
|body|body|[PutJobFailureResultInput](#schemaputjobfailureresultinput)|true|none|
|» jobId|body|object|true|none|
|» failureDetails|body|object|true|none|
|» » type|body|object|true|none|
|» » message|body|object|true|none|
|» » externalExecutionId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.PutJobFailureResult|

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

<h3 id="putjobfailureresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutJobSuccessResult

<a id="opIdPutJobSuccessResult"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.PutJobSuccessResult' \
  -d '{
    "jobId": {},
    "currentRevision": {
      "revision": {},
      "changeIdentifier": {},
      "created": {},
      "revisionSummary": {}
    },
    "continuationToken": {},
    "executionDetails": {
      "summary": {},
      "externalExecutionId": {},
      "percentComplete": {}
    },
    "outputVariables": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult`

Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.

> Body parameter

```json
{
  "jobId": {},
  "currentRevision": {
    "revision": {},
    "changeIdentifier": {},
    "created": {},
    "revisionSummary": {}
  },
  "continuationToken": {},
  "executionDetails": {
    "summary": {},
    "externalExecutionId": {},
    "percentComplete": {}
  },
  "outputVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="putjobsuccessresult-parameters">Parameters</h3>

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
|body|body|[PutJobSuccessResultInput](#schemaputjobsuccessresultinput)|true|none|
|» jobId|body|object|true|none|
|» currentRevision|body|object|false|none|
|» » revision|body|object|true|none|
|» » changeIdentifier|body|object|true|none|
|» » created|body|object|false|none|
|» » revisionSummary|body|object|false|none|
|» continuationToken|body|object|false|none|
|» executionDetails|body|object|false|none|
|» » summary|body|object|false|none|
|» » externalExecutionId|body|object|false|none|
|» » percentComplete|body|object|false|none|
|» outputVariables|body|object|false|none|
|» » **additionalProperties**|body|[OutputVariablesValue](#schemaoutputvariablesvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.PutJobSuccessResult|

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

> 483 Response

```json
null
```

<h3 id="putjobsuccessresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|
|483|483|OutputVariablesSizeExceededException|[OutputVariablesSizeExceededException](#schemaoutputvariablessizeexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutThirdPartyJobFailureResult

<a id="opIdPutThirdPartyJobFailureResult"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.PutThirdPartyJobFailureResult' \
  -d '{
    "jobId": {},
    "clientToken": {},
    "failureDetails": {
      "type": {},
      "message": {},
      "externalExecutionId": {}
    }
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult`

Represents the failure of a third party job as returned to the pipeline by a job worker. Used for partner actions only.

> Body parameter

```json
{
  "jobId": {},
  "clientToken": {},
  "failureDetails": {
    "type": {},
    "message": {},
    "externalExecutionId": {}
  }
}
```

<h3 id="putthirdpartyjobfailureresult-parameters">Parameters</h3>

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
|body|body|[PutThirdPartyJobFailureResultInput](#schemaputthirdpartyjobfailureresultinput)|true|none|
|» jobId|body|object|true|none|
|» clientToken|body|object|true|none|
|» failureDetails|body|object|true|none|
|» » type|body|object|true|none|
|» » message|body|object|true|none|
|» » externalExecutionId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.PutThirdPartyJobFailureResult|

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

> 483 Response

```json
null
```

<h3 id="putthirdpartyjobfailureresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|
|483|483|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutThirdPartyJobSuccessResult

<a id="opIdPutThirdPartyJobSuccessResult"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.PutThirdPartyJobSuccessResult' \
  -d '{
    "jobId": {},
    "clientToken": {},
    "currentRevision": {
      "revision": {},
      "changeIdentifier": {},
      "created": {},
      "revisionSummary": {}
    },
    "continuationToken": {},
    "executionDetails": {
      "summary": {},
      "externalExecutionId": {},
      "percentComplete": {}
    }
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult`

Represents the success of a third party job as returned to the pipeline by a job worker. Used for partner actions only.

> Body parameter

```json
{
  "jobId": {},
  "clientToken": {},
  "currentRevision": {
    "revision": {},
    "changeIdentifier": {},
    "created": {},
    "revisionSummary": {}
  },
  "continuationToken": {},
  "executionDetails": {
    "summary": {},
    "externalExecutionId": {},
    "percentComplete": {}
  }
}
```

<h3 id="putthirdpartyjobsuccessresult-parameters">Parameters</h3>

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
|body|body|[PutThirdPartyJobSuccessResultInput](#schemaputthirdpartyjobsuccessresultinput)|true|none|
|» jobId|body|object|true|none|
|» clientToken|body|object|true|none|
|» currentRevision|body|object|false|none|
|» » revision|body|object|true|none|
|» » changeIdentifier|body|object|true|none|
|» » created|body|object|false|none|
|» » revisionSummary|body|object|false|none|
|» continuationToken|body|object|false|none|
|» executionDetails|body|object|false|none|
|» » summary|body|object|false|none|
|» » externalExecutionId|body|object|false|none|
|» » percentComplete|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.PutThirdPartyJobSuccessResult|

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

> 483 Response

```json
null
```

<h3 id="putthirdpartyjobsuccessresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|InvalidJobStateException|[InvalidJobStateException](#schemainvalidjobstateexception)|
|483|483|InvalidClientTokenException|[InvalidClientTokenException](#schemainvalidclienttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutWebhook

<a id="opIdPutWebhook"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.PutWebhook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.PutWebhook' \
  -d '{
    "webhook": {
      "name": {},
      "targetPipeline": {},
      "targetAction": {},
      "filters": {},
      "authentication": {},
      "authenticationConfiguration": {
        "AllowedIPRange": {},
        "SecretToken": {}
      }
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.PutWebhook`

Defines a webhook and returns a unique webhook URL generated by CodePipeline. This URL can be supplied to third party source hosting providers to call every time there's a code change. When CodePipeline receives a POST request on this URL, the pipeline defined in the webhook is started as long as the POST request satisfied the authentication and filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to automatically configure supported third parties to call the generated webhook URL.

> Body parameter

```json
{
  "webhook": {
    "name": {},
    "targetPipeline": {},
    "targetAction": {},
    "filters": {},
    "authentication": {},
    "authenticationConfiguration": {
      "AllowedIPRange": {},
      "SecretToken": {}
    }
  },
  "tags": {}
}
```

<h3 id="putwebhook-parameters">Parameters</h3>

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
|body|body|[PutWebhookInput](#schemaputwebhookinput)|true|none|
|» webhook|body|object|true|none|
|» » name|body|object|true|none|
|» » targetPipeline|body|object|true|none|
|» » targetAction|body|object|true|none|
|» » filters|body|object|true|none|
|» » authentication|body|object|true|none|
|» » authenticationConfiguration|body|object|true|none|
|» » » AllowedIPRange|body|object|false|none|
|» » » SecretToken|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.PutWebhook|

> Example responses

> 200 Response

```json
{
  "webhook": {
    "definition": {
      "name": {},
      "targetPipeline": {},
      "targetAction": {},
      "filters": {},
      "authentication": {},
      "authenticationConfiguration": {
        "AllowedIPRange": {},
        "SecretToken": {}
      }
    },
    "url": {},
    "errorMessage": {},
    "errorCode": {},
    "lastTriggered": {},
    "arn": {},
    "tags": {}
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

<h3 id="putwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutWebhookOutput](#schemaputwebhookoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InvalidWebhookFilterPatternException|[InvalidWebhookFilterPatternException](#schemainvalidwebhookfilterpatternexception)|
|483|483|InvalidWebhookAuthenticationParametersException|[InvalidWebhookAuthenticationParametersException](#schemainvalidwebhookauthenticationparametersexception)|
|484|484|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|486|486|InvalidTagsException|[InvalidTagsException](#schemainvalidtagsexception)|
|487|487|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterWebhookWithThirdParty

<a id="opIdRegisterWebhookWithThirdParty"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.RegisterWebhookWithThirdParty' \
  -d '{
    "webhookName": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty`

Configures a connection between the webhook that was created and the external tool with events to be detected.

> Body parameter

```json
{
  "webhookName": {}
}
```

<h3 id="registerwebhookwiththirdparty-parameters">Parameters</h3>

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
|body|body|[RegisterWebhookWithThirdPartyInput](#schemaregisterwebhookwiththirdpartyinput)|true|none|
|» webhookName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.RegisterWebhookWithThirdParty|

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

<h3 id="registerwebhookwiththirdparty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterWebhookWithThirdPartyOutput](#schemaregisterwebhookwiththirdpartyoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|WebhookNotFoundException|[WebhookNotFoundException](#schemawebhooknotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RetryStageExecution

<a id="opIdRetryStageExecution"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.RetryStageExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.RetryStageExecution' \
  -d '{
    "pipelineName": {},
    "stageName": {},
    "pipelineExecutionId": {},
    "retryMode": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.RetryStageExecution`

Resumes the pipeline execution by retrying the last failed actions in a stage. You can retry a stage immediately if any of the actions in the stage fail. When you retry, all actions that are still in progress continue working, and failed actions are triggered again.

> Body parameter

```json
{
  "pipelineName": {},
  "stageName": {},
  "pipelineExecutionId": {},
  "retryMode": {}
}
```

<h3 id="retrystageexecution-parameters">Parameters</h3>

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
|body|body|[RetryStageExecutionInput](#schemaretrystageexecutioninput)|true|none|
|» pipelineName|body|object|true|none|
|» stageName|body|object|true|none|
|» pipelineExecutionId|body|object|true|none|
|» retryMode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.RetryStageExecution|

> Example responses

> 200 Response

```json
{
  "pipelineExecutionId": {}
}
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

<h3 id="retrystageexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RetryStageExecutionOutput](#schemaretrystageexecutionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|483|483|StageNotFoundException|[StageNotFoundException](#schemastagenotfoundexception)|
|484|484|StageNotRetryableException|[StageNotRetryableException](#schemastagenotretryableexception)|
|485|485|NotLatestPipelineExecutionException|[NotLatestPipelineExecutionException](#schemanotlatestpipelineexecutionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartPipelineExecution

<a id="opIdStartPipelineExecution"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.StartPipelineExecution' \
  -d '{
    "name": {},
    "clientRequestToken": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution`

Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.

> Body parameter

```json
{
  "name": {},
  "clientRequestToken": {}
}
```

<h3 id="startpipelineexecution-parameters">Parameters</h3>

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
|body|body|[StartPipelineExecutionInput](#schemastartpipelineexecutioninput)|true|none|
|» name|body|object|true|none|
|» clientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.StartPipelineExecution|

> Example responses

> 200 Response

```json
{
  "pipelineExecutionId": {}
}
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

<h3 id="startpipelineexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartPipelineExecutionOutput](#schemastartpipelineexecutionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopPipelineExecution

<a id="opIdStopPipelineExecution"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.StopPipelineExecution' \
  -d '{
    "pipelineName": {},
    "pipelineExecutionId": {},
    "abandon": {},
    "reason": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution`

Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a <code>Stopping</code> state. After all in-progress actions are completed or abandoned, the pipeline execution is in a <code>Stopped</code> state.

> Body parameter

```json
{
  "pipelineName": {},
  "pipelineExecutionId": {},
  "abandon": {},
  "reason": {}
}
```

<h3 id="stoppipelineexecution-parameters">Parameters</h3>

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
|body|body|[StopPipelineExecutionInput](#schemastoppipelineexecutioninput)|true|none|
|» pipelineName|body|object|true|none|
|» pipelineExecutionId|body|object|true|none|
|» abandon|body|object|false|none|
|» reason|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.StopPipelineExecution|

> Example responses

> 200 Response

```json
{
  "pipelineExecutionId": {}
}
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

<h3 id="stoppipelineexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopPipelineExecutionOutput](#schemastoppipelineexecutionoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|PipelineNotFoundException|[PipelineNotFoundException](#schemapipelinenotfoundexception)|
|483|483|PipelineExecutionNotStoppableException|[PipelineExecutionNotStoppableException](#schemapipelineexecutionnotstoppableexception)|
|484|484|DuplicatedStopRequestException|[DuplicatedStopRequestException](#schemaduplicatedstoprequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.TagResource' \
  -d '{
    "resourceArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.TagResource`

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource. 

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
|body|body|[TagResourceInput](#schematagresourceinput)|true|none|
|» resourceArn|body|object|true|none|
|» tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceOutput](#schematagresourceoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|InvalidTagsException|[InvalidTagsException](#schemainvalidtagsexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.UntagResource' \
  -d '{
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.UntagResource`

Removes tags from an Amazon Web Services resource.

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
|body|body|[UntagResourceInput](#schemauntagresourceinput)|true|none|
|» resourceArn|body|object|true|none|
|» tagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceOutput](#schemauntagresourceoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|483|483|InvalidTagsException|[InvalidTagsException](#schemainvalidtagsexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateActionType

<a id="opIdUpdateActionType"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.UpdateActionType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.UpdateActionType' \
  -d '{
    "actionType": {
      "description": {},
      "executor": {
        "configuration": {
          "lambdaExecutorConfiguration": {
            "lambdaFunctionArn": {}
          },
          "jobWorkerExecutorConfiguration": {
            "pollingAccounts": {},
            "pollingServicePrincipals": {}
          }
        },
        "type": {},
        "policyStatementsTemplate": {},
        "jobTimeout": {}
      },
      "id": {
        "category": {},
        "owner": {},
        "provider": {},
        "version": {}
      },
      "inputArtifactDetails": {
        "minimumCount": {},
        "maximumCount": {}
      },
      "outputArtifactDetails": {
        "minimumCount": {},
        "maximumCount": {}
      },
      "permissions": {
        "allowedAccounts": {}
      },
      "properties": null,
      "urls": {
        "configurationUrl": {},
        "entityUrlTemplate": {},
        "executionUrlTemplate": {},
        "revisionUrlTemplate": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.UpdateActionType`

Updates an action type that was created with any supported integration model, where the action type is to be used by customers of the action type provider. Use a JSON file with the action definition and <code>UpdateActionType</code> to provide the full structure.

> Body parameter

```json
{
  "actionType": {
    "description": {},
    "executor": {
      "configuration": {
        "lambdaExecutorConfiguration": {
          "lambdaFunctionArn": {}
        },
        "jobWorkerExecutorConfiguration": {
          "pollingAccounts": {},
          "pollingServicePrincipals": {}
        }
      },
      "type": {},
      "policyStatementsTemplate": {},
      "jobTimeout": {}
    },
    "id": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "inputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    },
    "outputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    },
    "permissions": {
      "allowedAccounts": {}
    },
    "properties": null,
    "urls": {
      "configurationUrl": {},
      "entityUrlTemplate": {},
      "executionUrlTemplate": {},
      "revisionUrlTemplate": {}
    }
  }
}
```

<h3 id="updateactiontype-parameters">Parameters</h3>

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
|body|body|[UpdateActionTypeInput](#schemaupdateactiontypeinput)|true|none|
|» actionType|body|object|true|none|
|» » description|body|object|false|none|
|» » executor|body|object|true|none|
|» » » configuration|body|object|true|none|
|» » » » lambdaExecutorConfiguration|body|object|false|none|
|» » » » » lambdaFunctionArn|body|object|true|none|
|» » » » jobWorkerExecutorConfiguration|body|object|false|none|
|» » » » » pollingAccounts|body|object|false|none|
|» » » » » pollingServicePrincipals|body|object|false|none|
|» » » type|body|object|true|none|
|» » » policyStatementsTemplate|body|object|false|none|
|» » » jobTimeout|body|object|false|none|
|» » id|body|object|true|none|
|» » » category|body|object|true|none|
|» » » owner|body|object|true|none|
|» » » provider|body|object|true|none|
|» » » version|body|object|true|none|
|» » inputArtifactDetails|body|object|true|none|
|» » » minimumCount|body|object|true|none|
|» » » maximumCount|body|object|true|none|
|» » outputArtifactDetails|body|object|true|none|
|» » » minimumCount|body|object|true|none|
|» » » maximumCount|body|object|true|none|
|» » permissions|body|object|false|none|
|» » » allowedAccounts|body|object|true|none|
|» » properties|body|object|false|The properties of the action type to be updated.|
|» » urls|body|object|false|none|
|» » » configurationUrl|body|object|false|none|
|» » » entityUrlTemplate|body|object|false|none|
|» » » executionUrlTemplate|body|object|false|none|
|» » » revisionUrlTemplate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.UpdateActionType|

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

<h3 id="updateactiontype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|RequestFailedException|[RequestFailedException](#schemarequestfailedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ActionTypeNotFoundException|[ActionTypeNotFoundException](#schemaactiontypenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePipeline

<a id="opIdUpdatePipeline"></a>

> Code samples

```bash
curl 'https://codepipeline.us-east-1.amazonaws.com/#X-Amz-Target=CodePipeline_20150709.UpdatePipeline' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodePipeline_20150709.UpdatePipeline' \
  -d '{
    "pipeline": {
      "name": {},
      "roleArn": {},
      "artifactStore": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      },
      "artifactStores": {
        "property1": {
          "type": {},
          "location": {},
          "encryptionKey": {
            "id": {},
            "type": {}
          }
        },
        "property2": {
          "type": {},
          "location": {},
          "encryptionKey": {
            "id": {},
            "type": {}
          }
        }
      },
      "stages": {},
      "version": {}
    }
  }'
```

`POST /#X-Amz-Target=CodePipeline_20150709.UpdatePipeline`

Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure and <code>UpdatePipeline</code> to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.

> Body parameter

```json
{
  "pipeline": {
    "name": {},
    "roleArn": {},
    "artifactStore": {
      "type": {},
      "location": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "artifactStores": {
      "property1": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      },
      "property2": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      }
    },
    "stages": {},
    "version": {}
  }
}
```

<h3 id="updatepipeline-parameters">Parameters</h3>

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
|body|body|[UpdatePipelineInput](#schemaupdatepipelineinput)|true|none|
|» pipeline|body|object|true|none|
|» » name|body|object|true|none|
|» » roleArn|body|object|true|none|
|» » artifactStore|body|object|false|none|
|» » » type|body|object|true|none|
|» » » location|body|object|true|none|
|» » » encryptionKey|body|object|false|none|
|» » » » id|body|object|true|none|
|» » » » type|body|object|true|none|
|» » artifactStores|body|object|false|none|
|» » » **additionalProperties**|body|[ArtifactStore](#schemaartifactstore)|false|<p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>|
|» » stages|body|object|true|none|
|» » version|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodePipeline_20150709.UpdatePipeline|

> Example responses

> 200 Response

```json
{
  "pipeline": {
    "name": {},
    "roleArn": {},
    "artifactStore": {
      "type": {},
      "location": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "artifactStores": {
      "property1": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      },
      "property2": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      }
    },
    "stages": {},
    "version": {}
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

<h3 id="updatepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePipelineOutput](#schemaupdatepipelineoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidStageDeclarationException|[InvalidStageDeclarationException](#schemainvalidstagedeclarationexception)|
|482|482|InvalidActionDeclarationException|[InvalidActionDeclarationException](#schemainvalidactiondeclarationexception)|
|483|483|InvalidBlockerDeclarationException|[InvalidBlockerDeclarationException](#schemainvalidblockerdeclarationexception)|
|484|484|InvalidStructureException|[InvalidStructureException](#schemainvalidstructureexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcknowledgeJobOutput">AcknowledgeJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemaacknowledgejoboutput"></a>
<a id="schema_AcknowledgeJobOutput"></a>
<a id="tocSacknowledgejoboutput"></a>
<a id="tocsacknowledgejoboutput"></a>

```json
{
  "status": {}
}
```

Represents the output of an AcknowledgeJob action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_AcknowledgeJobInput">AcknowledgeJobInput</h2>
<!-- backwards compatibility -->
<a id="schemaacknowledgejobinput"></a>
<a id="schema_AcknowledgeJobInput"></a>
<a id="tocSacknowledgejobinput"></a>
<a id="tocsacknowledgejobinput"></a>

```json
{
  "jobId": {},
  "nonce": {}
}
```

Represents the input of an AcknowledgeJob action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|nonce|object|true|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_InvalidNonceException">InvalidNonceException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnonceexception"></a>
<a id="schema_InvalidNonceException"></a>
<a id="tocSinvalidnonceexception"></a>
<a id="tocsinvalidnonceexception"></a>

```json
null
```

<h2 id="tocS_JobNotFoundException">JobNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemajobnotfoundexception"></a>
<a id="schema_JobNotFoundException"></a>
<a id="tocSjobnotfoundexception"></a>
<a id="tocsjobnotfoundexception"></a>

```json
null
```

<h2 id="tocS_AcknowledgeThirdPartyJobOutput">AcknowledgeThirdPartyJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemaacknowledgethirdpartyjoboutput"></a>
<a id="schema_AcknowledgeThirdPartyJobOutput"></a>
<a id="tocSacknowledgethirdpartyjoboutput"></a>
<a id="tocsacknowledgethirdpartyjoboutput"></a>

```json
{
  "status": {}
}
```

Represents the output of an AcknowledgeThirdPartyJob action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_AcknowledgeThirdPartyJobInput">AcknowledgeThirdPartyJobInput</h2>
<!-- backwards compatibility -->
<a id="schemaacknowledgethirdpartyjobinput"></a>
<a id="schema_AcknowledgeThirdPartyJobInput"></a>
<a id="tocSacknowledgethirdpartyjobinput"></a>
<a id="tocsacknowledgethirdpartyjobinput"></a>

```json
{
  "jobId": {},
  "nonce": {},
  "clientToken": {}
}
```

Represents the input of an AcknowledgeThirdPartyJob action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|nonce|object|true|none|none|
|clientToken|object|true|none|none|

<h2 id="tocS_InvalidClientTokenException">InvalidClientTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidclienttokenexception"></a>
<a id="schema_InvalidClientTokenException"></a>
<a id="tocSinvalidclienttokenexception"></a>
<a id="tocsinvalidclienttokenexception"></a>

```json
null
```

<h2 id="tocS_CreateCustomActionTypeOutput">CreateCustomActionTypeOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomactiontypeoutput"></a>
<a id="schema_CreateCustomActionTypeOutput"></a>
<a id="tocScreatecustomactiontypeoutput"></a>
<a id="tocscreatecustomactiontypeoutput"></a>

```json
{
  "actionType": {
    "id": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "settings": {
      "thirdPartyConfigurationUrl": {},
      "entityUrlTemplate": {},
      "executionUrlTemplate": {},
      "revisionUrlTemplate": {}
    },
    "actionConfigurationProperties": {},
    "inputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    },
    "outputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    }
  },
  "tags": {}
}
```

Represents the output of a <code>CreateCustomActionType</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionType|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateCustomActionTypeInput">CreateCustomActionTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomactiontypeinput"></a>
<a id="schema_CreateCustomActionTypeInput"></a>
<a id="tocScreatecustomactiontypeinput"></a>
<a id="tocscreatecustomactiontypeinput"></a>

```json
{
  "category": {},
  "provider": {},
  "version": {},
  "settings": {
    "thirdPartyConfigurationUrl": {},
    "entityUrlTemplate": {},
    "executionUrlTemplate": {},
    "revisionUrlTemplate": {}
  },
  "configurationProperties": {},
  "inputArtifactDetails": {
    "minimumCount": {},
    "maximumCount": {}
  },
  "outputArtifactDetails": {
    "minimumCount": {},
    "maximumCount": {}
  },
  "tags": {}
}
```

Represents the input of a CreateCustomActionType operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|object|true|none|none|
|provider|object|true|none|none|
|version|object|true|none|none|
|settings|object|false|none|none|
|configurationProperties|object|false|none|none|
|inputArtifactDetails|object|true|none|none|
|outputArtifactDetails|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

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

<h2 id="tocS_InvalidTagsException">InvalidTagsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtagsexception"></a>
<a id="schema_InvalidTagsException"></a>
<a id="tocSinvalidtagsexception"></a>
<a id="tocsinvalidtagsexception"></a>

```json
null
```

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_CreatePipelineOutput">CreatePipelineOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatepipelineoutput"></a>
<a id="schema_CreatePipelineOutput"></a>
<a id="tocScreatepipelineoutput"></a>
<a id="tocscreatepipelineoutput"></a>

```json
{
  "pipeline": {
    "name": {},
    "roleArn": {},
    "artifactStore": {
      "type": {},
      "location": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "artifactStores": {
      "property1": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      },
      "property2": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      }
    },
    "stages": {},
    "version": {}
  },
  "tags": {}
}
```

Represents the output of a <code>CreatePipeline</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipeline|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreatePipelineInput">CreatePipelineInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatepipelineinput"></a>
<a id="schema_CreatePipelineInput"></a>
<a id="tocScreatepipelineinput"></a>
<a id="tocscreatepipelineinput"></a>

```json
{
  "pipeline": {
    "name": {},
    "roleArn": {},
    "artifactStore": {
      "type": {},
      "location": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "artifactStores": {
      "property1": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      },
      "property2": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      }
    },
    "stages": {},
    "version": {}
  },
  "tags": {}
}
```

Represents the input of a <code>CreatePipeline</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipeline|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_PipelineNameInUseException">PipelineNameInUseException</h2>
<!-- backwards compatibility -->
<a id="schemapipelinenameinuseexception"></a>
<a id="schema_PipelineNameInUseException"></a>
<a id="tocSpipelinenameinuseexception"></a>
<a id="tocspipelinenameinuseexception"></a>

```json
null
```

<h2 id="tocS_InvalidStageDeclarationException">InvalidStageDeclarationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidstagedeclarationexception"></a>
<a id="schema_InvalidStageDeclarationException"></a>
<a id="tocSinvalidstagedeclarationexception"></a>
<a id="tocsinvalidstagedeclarationexception"></a>

```json
null
```

<h2 id="tocS_InvalidActionDeclarationException">InvalidActionDeclarationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidactiondeclarationexception"></a>
<a id="schema_InvalidActionDeclarationException"></a>
<a id="tocSinvalidactiondeclarationexception"></a>
<a id="tocsinvalidactiondeclarationexception"></a>

```json
null
```

<h2 id="tocS_InvalidBlockerDeclarationException">InvalidBlockerDeclarationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidblockerdeclarationexception"></a>
<a id="schema_InvalidBlockerDeclarationException"></a>
<a id="tocSinvalidblockerdeclarationexception"></a>
<a id="tocsinvalidblockerdeclarationexception"></a>

```json
null
```

<h2 id="tocS_InvalidStructureException">InvalidStructureException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidstructureexception"></a>
<a id="schema_InvalidStructureException"></a>
<a id="tocSinvalidstructureexception"></a>
<a id="tocsinvalidstructureexception"></a>

```json
null
```

<h2 id="tocS_DeleteCustomActionTypeInput">DeleteCustomActionTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomactiontypeinput"></a>
<a id="schema_DeleteCustomActionTypeInput"></a>
<a id="tocSdeletecustomactiontypeinput"></a>
<a id="tocsdeletecustomactiontypeinput"></a>

```json
{
  "category": {},
  "provider": {},
  "version": {}
}
```

Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|object|true|none|none|
|provider|object|true|none|none|
|version|object|true|none|none|

<h2 id="tocS_DeletePipelineInput">DeletePipelineInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletepipelineinput"></a>
<a id="schema_DeletePipelineInput"></a>
<a id="tocSdeletepipelineinput"></a>
<a id="tocsdeletepipelineinput"></a>

```json
{
  "name": {}
}
```

Represents the input of a <code>DeletePipeline</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DeleteWebhookOutput">DeleteWebhookOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletewebhookoutput"></a>
<a id="schema_DeleteWebhookOutput"></a>
<a id="tocSdeletewebhookoutput"></a>
<a id="tocsdeletewebhookoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteWebhookInput">DeleteWebhookInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletewebhookinput"></a>
<a id="schema_DeleteWebhookInput"></a>
<a id="tocSdeletewebhookinput"></a>
<a id="tocsdeletewebhookinput"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DeregisterWebhookWithThirdPartyOutput">DeregisterWebhookWithThirdPartyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterwebhookwiththirdpartyoutput"></a>
<a id="schema_DeregisterWebhookWithThirdPartyOutput"></a>
<a id="tocSderegisterwebhookwiththirdpartyoutput"></a>
<a id="tocsderegisterwebhookwiththirdpartyoutput"></a>

```json
{}
```

<h2 id="tocS_DeregisterWebhookWithThirdPartyInput">DeregisterWebhookWithThirdPartyInput</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterwebhookwiththirdpartyinput"></a>
<a id="schema_DeregisterWebhookWithThirdPartyInput"></a>
<a id="tocSderegisterwebhookwiththirdpartyinput"></a>
<a id="tocsderegisterwebhookwiththirdpartyinput"></a>

```json
{
  "webhookName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhookName|object|false|none|none|

<h2 id="tocS_WebhookNotFoundException">WebhookNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemawebhooknotfoundexception"></a>
<a id="schema_WebhookNotFoundException"></a>
<a id="tocSwebhooknotfoundexception"></a>
<a id="tocswebhooknotfoundexception"></a>

```json
null
```

<h2 id="tocS_DisableStageTransitionInput">DisableStageTransitionInput</h2>
<!-- backwards compatibility -->
<a id="schemadisablestagetransitioninput"></a>
<a id="schema_DisableStageTransitionInput"></a>
<a id="tocSdisablestagetransitioninput"></a>
<a id="tocsdisablestagetransitioninput"></a>

```json
{
  "pipelineName": {},
  "stageName": {},
  "transitionType": {},
  "reason": {}
}
```

Represents the input of a <code>DisableStageTransition</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|true|none|none|
|stageName|object|true|none|none|
|transitionType|object|true|none|none|
|reason|object|true|none|none|

<h2 id="tocS_PipelineNotFoundException">PipelineNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemapipelinenotfoundexception"></a>
<a id="schema_PipelineNotFoundException"></a>
<a id="tocSpipelinenotfoundexception"></a>
<a id="tocspipelinenotfoundexception"></a>

```json
null
```

<h2 id="tocS_StageNotFoundException">StageNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemastagenotfoundexception"></a>
<a id="schema_StageNotFoundException"></a>
<a id="tocSstagenotfoundexception"></a>
<a id="tocsstagenotfoundexception"></a>

```json
null
```

<h2 id="tocS_EnableStageTransitionInput">EnableStageTransitionInput</h2>
<!-- backwards compatibility -->
<a id="schemaenablestagetransitioninput"></a>
<a id="schema_EnableStageTransitionInput"></a>
<a id="tocSenablestagetransitioninput"></a>
<a id="tocsenablestagetransitioninput"></a>

```json
{
  "pipelineName": {},
  "stageName": {},
  "transitionType": {}
}
```

Represents the input of an <code>EnableStageTransition</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|true|none|none|
|stageName|object|true|none|none|
|transitionType|object|true|none|none|

<h2 id="tocS_GetActionTypeOutput">GetActionTypeOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetactiontypeoutput"></a>
<a id="schema_GetActionTypeOutput"></a>
<a id="tocSgetactiontypeoutput"></a>
<a id="tocsgetactiontypeoutput"></a>

```json
{
  "actionType": {
    "description": {},
    "executor": {
      "configuration": {
        "lambdaExecutorConfiguration": {
          "lambdaFunctionArn": {}
        },
        "jobWorkerExecutorConfiguration": {
          "pollingAccounts": {},
          "pollingServicePrincipals": {}
        }
      },
      "type": {},
      "policyStatementsTemplate": {},
      "jobTimeout": {}
    },
    "id": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "inputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    },
    "outputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    },
    "permissions": {
      "allowedAccounts": {}
    },
    "properties": null,
    "urls": {
      "configurationUrl": {},
      "entityUrlTemplate": {},
      "executionUrlTemplate": {},
      "revisionUrlTemplate": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionType|object|false|none|none|

<h2 id="tocS_GetActionTypeInput">GetActionTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemagetactiontypeinput"></a>
<a id="schema_GetActionTypeInput"></a>
<a id="tocSgetactiontypeinput"></a>
<a id="tocsgetactiontypeinput"></a>

```json
{
  "category": {},
  "owner": {},
  "provider": {},
  "version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|object|true|none|none|
|owner|object|true|none|none|
|provider|object|true|none|none|
|version|object|true|none|none|

<h2 id="tocS_ActionTypeNotFoundException">ActionTypeNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypenotfoundexception"></a>
<a id="schema_ActionTypeNotFoundException"></a>
<a id="tocSactiontypenotfoundexception"></a>
<a id="tocsactiontypenotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetJobDetailsOutput">GetJobDetailsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetjobdetailsoutput"></a>
<a id="schema_GetJobDetailsOutput"></a>
<a id="tocSgetjobdetailsoutput"></a>
<a id="tocsgetjobdetailsoutput"></a>

```json
{
  "jobDetails": {
    "id": {},
    "data": {
      "actionTypeId": {
        "category": {},
        "owner": {},
        "provider": {},
        "version": {}
      },
      "actionConfiguration": {
        "configuration": {
          "property1": "string",
          "property2": "string"
        }
      },
      "pipelineContext": {
        "pipelineName": {},
        "stage": {
          "name": {}
        },
        "action": {
          "name": {},
          "actionExecutionId": {}
        },
        "pipelineArn": {},
        "pipelineExecutionId": {}
      },
      "inputArtifacts": {},
      "outputArtifacts": {},
      "artifactCredentials": {
        "accessKeyId": {},
        "secretAccessKey": {},
        "sessionToken": {}
      },
      "continuationToken": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "accountId": {}
  }
}
```

Represents the output of a <code>GetJobDetails</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobDetails|object|false|none|none|

<h2 id="tocS_GetJobDetailsInput">GetJobDetailsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetjobdetailsinput"></a>
<a id="schema_GetJobDetailsInput"></a>
<a id="tocSgetjobdetailsinput"></a>
<a id="tocsgetjobdetailsinput"></a>

```json
{
  "jobId": {}
}
```

Represents the input of a <code>GetJobDetails</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|

<h2 id="tocS_GetPipelineOutput">GetPipelineOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetpipelineoutput"></a>
<a id="schema_GetPipelineOutput"></a>
<a id="tocSgetpipelineoutput"></a>
<a id="tocsgetpipelineoutput"></a>

```json
{
  "pipeline": {
    "name": {},
    "roleArn": {},
    "artifactStore": {
      "type": {},
      "location": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "artifactStores": {
      "property1": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      },
      "property2": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      }
    },
    "stages": {},
    "version": {}
  },
  "metadata": {
    "pipelineArn": {},
    "created": {},
    "updated": {},
    "pollingDisabledAt": {}
  }
}
```

Represents the output of a <code>GetPipeline</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipeline|object|false|none|none|
|metadata|object|false|none|none|

<h2 id="tocS_GetPipelineInput">GetPipelineInput</h2>
<!-- backwards compatibility -->
<a id="schemagetpipelineinput"></a>
<a id="schema_GetPipelineInput"></a>
<a id="tocSgetpipelineinput"></a>
<a id="tocsgetpipelineinput"></a>

```json
{
  "name": {},
  "version": {}
}
```

Represents the input of a <code>GetPipeline</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|version|object|false|none|none|

<h2 id="tocS_PipelineVersionNotFoundException">PipelineVersionNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemapipelineversionnotfoundexception"></a>
<a id="schema_PipelineVersionNotFoundException"></a>
<a id="tocSpipelineversionnotfoundexception"></a>
<a id="tocspipelineversionnotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetPipelineExecutionOutput">GetPipelineExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetpipelineexecutionoutput"></a>
<a id="schema_GetPipelineExecutionOutput"></a>
<a id="tocSgetpipelineexecutionoutput"></a>
<a id="tocsgetpipelineexecutionoutput"></a>

```json
{
  "pipelineExecution": {
    "pipelineName": {},
    "pipelineVersion": {},
    "pipelineExecutionId": {},
    "status": {},
    "statusSummary": {},
    "artifactRevisions": {}
  }
}
```

Represents the output of a <code>GetPipelineExecution</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineExecution|object|false|none|none|

<h2 id="tocS_GetPipelineExecutionInput">GetPipelineExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemagetpipelineexecutioninput"></a>
<a id="schema_GetPipelineExecutionInput"></a>
<a id="tocSgetpipelineexecutioninput"></a>
<a id="tocsgetpipelineexecutioninput"></a>

```json
{
  "pipelineName": {},
  "pipelineExecutionId": {}
}
```

Represents the input of a <code>GetPipelineExecution</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|true|none|none|
|pipelineExecutionId|object|true|none|none|

<h2 id="tocS_PipelineExecutionNotFoundException">PipelineExecutionNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemapipelineexecutionnotfoundexception"></a>
<a id="schema_PipelineExecutionNotFoundException"></a>
<a id="tocSpipelineexecutionnotfoundexception"></a>
<a id="tocspipelineexecutionnotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetPipelineStateOutput">GetPipelineStateOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetpipelinestateoutput"></a>
<a id="schema_GetPipelineStateOutput"></a>
<a id="tocSgetpipelinestateoutput"></a>
<a id="tocsgetpipelinestateoutput"></a>

```json
{
  "pipelineName": {},
  "pipelineVersion": {},
  "stageStates": {},
  "created": {},
  "updated": {}
}
```

Represents the output of a <code>GetPipelineState</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|false|none|none|
|pipelineVersion|object|false|none|none|
|stageStates|object|false|none|none|
|created|object|false|none|none|
|updated|object|false|none|none|

<h2 id="tocS_GetPipelineStateInput">GetPipelineStateInput</h2>
<!-- backwards compatibility -->
<a id="schemagetpipelinestateinput"></a>
<a id="schema_GetPipelineStateInput"></a>
<a id="tocSgetpipelinestateinput"></a>
<a id="tocsgetpipelinestateinput"></a>

```json
{
  "name": {}
}
```

Represents the input of a <code>GetPipelineState</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_GetThirdPartyJobDetailsOutput">GetThirdPartyJobDetailsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetthirdpartyjobdetailsoutput"></a>
<a id="schema_GetThirdPartyJobDetailsOutput"></a>
<a id="tocSgetthirdpartyjobdetailsoutput"></a>
<a id="tocsgetthirdpartyjobdetailsoutput"></a>

```json
{
  "jobDetails": {
    "id": {},
    "data": {
      "actionTypeId": {
        "category": {},
        "owner": {},
        "provider": {},
        "version": {}
      },
      "actionConfiguration": {
        "configuration": {
          "property1": "string",
          "property2": "string"
        }
      },
      "pipelineContext": {
        "pipelineName": {},
        "stage": {
          "name": {}
        },
        "action": {
          "name": {},
          "actionExecutionId": {}
        },
        "pipelineArn": {},
        "pipelineExecutionId": {}
      },
      "inputArtifacts": {},
      "outputArtifacts": {},
      "artifactCredentials": {
        "accessKeyId": {},
        "secretAccessKey": {},
        "sessionToken": {}
      },
      "continuationToken": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "nonce": {}
  }
}
```

Represents the output of a <code>GetThirdPartyJobDetails</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobDetails|object|false|none|none|

<h2 id="tocS_GetThirdPartyJobDetailsInput">GetThirdPartyJobDetailsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetthirdpartyjobdetailsinput"></a>
<a id="schema_GetThirdPartyJobDetailsInput"></a>
<a id="tocSgetthirdpartyjobdetailsinput"></a>
<a id="tocsgetthirdpartyjobdetailsinput"></a>

```json
{
  "jobId": {},
  "clientToken": {}
}
```

Represents the input of a <code>GetThirdPartyJobDetails</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|clientToken|object|true|none|none|

<h2 id="tocS_InvalidJobException">InvalidJobException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidjobexception"></a>
<a id="schema_InvalidJobException"></a>
<a id="tocSinvalidjobexception"></a>
<a id="tocsinvalidjobexception"></a>

```json
null
```

<h2 id="tocS_ListActionExecutionsOutput">ListActionExecutionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistactionexecutionsoutput"></a>
<a id="schema_ListActionExecutionsOutput"></a>
<a id="tocSlistactionexecutionsoutput"></a>
<a id="tocslistactionexecutionsoutput"></a>

```json
{
  "actionExecutionDetails": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionExecutionDetails|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListActionExecutionsInput">ListActionExecutionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistactionexecutionsinput"></a>
<a id="schema_ListActionExecutionsInput"></a>
<a id="tocSlistactionexecutionsinput"></a>
<a id="tocslistactionexecutionsinput"></a>

```json
{
  "pipelineName": {},
  "filter": {
    "pipelineExecutionId": {}
  },
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|true|none|none|
|filter|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListActionTypesOutput">ListActionTypesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistactiontypesoutput"></a>
<a id="schema_ListActionTypesOutput"></a>
<a id="tocSlistactiontypesoutput"></a>
<a id="tocslistactiontypesoutput"></a>

```json
{
  "actionTypes": {},
  "nextToken": {}
}
```

Represents the output of a <code>ListActionTypes</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionTypes|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListActionTypesInput">ListActionTypesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistactiontypesinput"></a>
<a id="schema_ListActionTypesInput"></a>
<a id="tocSlistactiontypesinput"></a>
<a id="tocslistactiontypesinput"></a>

```json
{
  "actionOwnerFilter": {},
  "nextToken": {},
  "regionFilter": {}
}
```

Represents the input of a <code>ListActionTypes</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionOwnerFilter|object|false|none|none|
|nextToken|object|false|none|none|
|regionFilter|object|false|none|none|

<h2 id="tocS_ListPipelineExecutionsOutput">ListPipelineExecutionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistpipelineexecutionsoutput"></a>
<a id="schema_ListPipelineExecutionsOutput"></a>
<a id="tocSlistpipelineexecutionsoutput"></a>
<a id="tocslistpipelineexecutionsoutput"></a>

```json
{
  "pipelineExecutionSummaries": {},
  "nextToken": {}
}
```

Represents the output of a <code>ListPipelineExecutions</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineExecutionSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPipelineExecutionsInput">ListPipelineExecutionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistpipelineexecutionsinput"></a>
<a id="schema_ListPipelineExecutionsInput"></a>
<a id="tocSlistpipelineexecutionsinput"></a>
<a id="tocslistpipelineexecutionsinput"></a>

```json
{
  "pipelineName": {},
  "maxResults": {},
  "nextToken": {}
}
```

Represents the input of a <code>ListPipelineExecutions</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPipelinesOutput">ListPipelinesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistpipelinesoutput"></a>
<a id="schema_ListPipelinesOutput"></a>
<a id="tocSlistpipelinesoutput"></a>
<a id="tocslistpipelinesoutput"></a>

```json
{
  "pipelines": {},
  "nextToken": {}
}
```

Represents the output of a <code>ListPipelines</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelines|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPipelinesInput">ListPipelinesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistpipelinesinput"></a>
<a id="schema_ListPipelinesInput"></a>
<a id="tocSlistpipelinesinput"></a>
<a id="tocslistpipelinesinput"></a>

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

Represents the input of a <code>ListPipelines</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceOutput">ListTagsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceoutput"></a>
<a id="schema_ListTagsForResourceOutput"></a>
<a id="tocSlisttagsforresourceoutput"></a>
<a id="tocslisttagsforresourceoutput"></a>

```json
{
  "tags": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{
  "resourceArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidArnException">InvalidArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidarnexception"></a>
<a id="schema_InvalidArnException"></a>
<a id="tocSinvalidarnexception"></a>
<a id="tocsinvalidarnexception"></a>

```json
null
```

<h2 id="tocS_ListWebhooksOutput">ListWebhooksOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistwebhooksoutput"></a>
<a id="schema_ListWebhooksOutput"></a>
<a id="tocSlistwebhooksoutput"></a>
<a id="tocslistwebhooksoutput"></a>

```json
{
  "webhooks": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhooks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListWebhooksInput">ListWebhooksInput</h2>
<!-- backwards compatibility -->
<a id="schemalistwebhooksinput"></a>
<a id="schema_ListWebhooksInput"></a>
<a id="tocSlistwebhooksinput"></a>
<a id="tocslistwebhooksinput"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_PollForJobsOutput">PollForJobsOutput</h2>
<!-- backwards compatibility -->
<a id="schemapollforjobsoutput"></a>
<a id="schema_PollForJobsOutput"></a>
<a id="tocSpollforjobsoutput"></a>
<a id="tocspollforjobsoutput"></a>

```json
{
  "jobs": {}
}
```

Represents the output of a <code>PollForJobs</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|object|false|none|none|

<h2 id="tocS_PollForJobsInput">PollForJobsInput</h2>
<!-- backwards compatibility -->
<a id="schemapollforjobsinput"></a>
<a id="schema_PollForJobsInput"></a>
<a id="tocSpollforjobsinput"></a>
<a id="tocspollforjobsinput"></a>

```json
{
  "actionTypeId": {
    "category": {},
    "owner": {},
    "provider": {},
    "version": {}
  },
  "maxBatchSize": {},
  "queryParam": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the input of a <code>PollForJobs</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionTypeId|object|true|none|none|
|maxBatchSize|object|false|none|none|
|queryParam|object|false|none|none|

<h2 id="tocS_PollForThirdPartyJobsOutput">PollForThirdPartyJobsOutput</h2>
<!-- backwards compatibility -->
<a id="schemapollforthirdpartyjobsoutput"></a>
<a id="schema_PollForThirdPartyJobsOutput"></a>
<a id="tocSpollforthirdpartyjobsoutput"></a>
<a id="tocspollforthirdpartyjobsoutput"></a>

```json
{
  "jobs": {}
}
```

Represents the output of a <code>PollForThirdPartyJobs</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|object|false|none|none|

<h2 id="tocS_PollForThirdPartyJobsInput">PollForThirdPartyJobsInput</h2>
<!-- backwards compatibility -->
<a id="schemapollforthirdpartyjobsinput"></a>
<a id="schema_PollForThirdPartyJobsInput"></a>
<a id="tocSpollforthirdpartyjobsinput"></a>
<a id="tocspollforthirdpartyjobsinput"></a>

```json
{
  "actionTypeId": {
    "category": {},
    "owner": {},
    "provider": {},
    "version": {}
  },
  "maxBatchSize": {}
}
```

Represents the input of a <code>PollForThirdPartyJobs</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionTypeId|object|true|none|none|
|maxBatchSize|object|false|none|none|

<h2 id="tocS_PutActionRevisionOutput">PutActionRevisionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputactionrevisionoutput"></a>
<a id="schema_PutActionRevisionOutput"></a>
<a id="tocSputactionrevisionoutput"></a>
<a id="tocsputactionrevisionoutput"></a>

```json
{
  "newRevision": {},
  "pipelineExecutionId": {}
}
```

Represents the output of a <code>PutActionRevision</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newRevision|object|false|none|none|
|pipelineExecutionId|object|false|none|none|

<h2 id="tocS_PutActionRevisionInput">PutActionRevisionInput</h2>
<!-- backwards compatibility -->
<a id="schemaputactionrevisioninput"></a>
<a id="schema_PutActionRevisionInput"></a>
<a id="tocSputactionrevisioninput"></a>
<a id="tocsputactionrevisioninput"></a>

```json
{
  "pipelineName": {},
  "stageName": {},
  "actionName": {},
  "actionRevision": {
    "revisionId": {},
    "revisionChangeId": {},
    "created": {}
  }
}
```

Represents the input of a <code>PutActionRevision</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|true|none|none|
|stageName|object|true|none|none|
|actionName|object|true|none|none|
|actionRevision|object|true|none|none|

<h2 id="tocS_ActionNotFoundException">ActionNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaactionnotfoundexception"></a>
<a id="schema_ActionNotFoundException"></a>
<a id="tocSactionnotfoundexception"></a>
<a id="tocsactionnotfoundexception"></a>

```json
null
```

<h2 id="tocS_PutApprovalResultOutput">PutApprovalResultOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputapprovalresultoutput"></a>
<a id="schema_PutApprovalResultOutput"></a>
<a id="tocSputapprovalresultoutput"></a>
<a id="tocsputapprovalresultoutput"></a>

```json
{
  "approvedAt": {}
}
```

Represents the output of a <code>PutApprovalResult</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvedAt|object|false|none|none|

<h2 id="tocS_PutApprovalResultInput">PutApprovalResultInput</h2>
<!-- backwards compatibility -->
<a id="schemaputapprovalresultinput"></a>
<a id="schema_PutApprovalResultInput"></a>
<a id="tocSputapprovalresultinput"></a>
<a id="tocsputapprovalresultinput"></a>

```json
{
  "pipelineName": {},
  "stageName": {},
  "actionName": {},
  "result": {
    "summary": {},
    "status": {}
  },
  "token": {}
}
```

Represents the input of a <code>PutApprovalResult</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|true|none|none|
|stageName|object|true|none|none|
|actionName|object|true|none|none|
|result|object|true|none|none|
|token|object|true|none|none|

<h2 id="tocS_InvalidApprovalTokenException">InvalidApprovalTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidapprovaltokenexception"></a>
<a id="schema_InvalidApprovalTokenException"></a>
<a id="tocSinvalidapprovaltokenexception"></a>
<a id="tocsinvalidapprovaltokenexception"></a>

```json
null
```

<h2 id="tocS_ApprovalAlreadyCompletedException">ApprovalAlreadyCompletedException</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalalreadycompletedexception"></a>
<a id="schema_ApprovalAlreadyCompletedException"></a>
<a id="tocSapprovalalreadycompletedexception"></a>
<a id="tocsapprovalalreadycompletedexception"></a>

```json
null
```

<h2 id="tocS_PutJobFailureResultInput">PutJobFailureResultInput</h2>
<!-- backwards compatibility -->
<a id="schemaputjobfailureresultinput"></a>
<a id="schema_PutJobFailureResultInput"></a>
<a id="tocSputjobfailureresultinput"></a>
<a id="tocsputjobfailureresultinput"></a>

```json
{
  "jobId": {},
  "failureDetails": {
    "type": {},
    "message": {},
    "externalExecutionId": {}
  }
}
```

Represents the input of a <code>PutJobFailureResult</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|failureDetails|object|true|none|none|

<h2 id="tocS_InvalidJobStateException">InvalidJobStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidjobstateexception"></a>
<a id="schema_InvalidJobStateException"></a>
<a id="tocSinvalidjobstateexception"></a>
<a id="tocsinvalidjobstateexception"></a>

```json
null
```

<h2 id="tocS_PutJobSuccessResultInput">PutJobSuccessResultInput</h2>
<!-- backwards compatibility -->
<a id="schemaputjobsuccessresultinput"></a>
<a id="schema_PutJobSuccessResultInput"></a>
<a id="tocSputjobsuccessresultinput"></a>
<a id="tocsputjobsuccessresultinput"></a>

```json
{
  "jobId": {},
  "currentRevision": {
    "revision": {},
    "changeIdentifier": {},
    "created": {},
    "revisionSummary": {}
  },
  "continuationToken": {},
  "executionDetails": {
    "summary": {},
    "externalExecutionId": {},
    "percentComplete": {}
  },
  "outputVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the input of a <code>PutJobSuccessResult</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|currentRevision|object|false|none|none|
|continuationToken|object|false|none|none|
|executionDetails|object|false|none|none|
|outputVariables|object|false|none|none|

<h2 id="tocS_OutputVariablesSizeExceededException">OutputVariablesSizeExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaoutputvariablessizeexceededexception"></a>
<a id="schema_OutputVariablesSizeExceededException"></a>
<a id="tocSoutputvariablessizeexceededexception"></a>
<a id="tocsoutputvariablessizeexceededexception"></a>

```json
null
```

<h2 id="tocS_PutThirdPartyJobFailureResultInput">PutThirdPartyJobFailureResultInput</h2>
<!-- backwards compatibility -->
<a id="schemaputthirdpartyjobfailureresultinput"></a>
<a id="schema_PutThirdPartyJobFailureResultInput"></a>
<a id="tocSputthirdpartyjobfailureresultinput"></a>
<a id="tocsputthirdpartyjobfailureresultinput"></a>

```json
{
  "jobId": {},
  "clientToken": {},
  "failureDetails": {
    "type": {},
    "message": {},
    "externalExecutionId": {}
  }
}
```

Represents the input of a <code>PutThirdPartyJobFailureResult</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|clientToken|object|true|none|none|
|failureDetails|object|true|none|none|

<h2 id="tocS_PutThirdPartyJobSuccessResultInput">PutThirdPartyJobSuccessResultInput</h2>
<!-- backwards compatibility -->
<a id="schemaputthirdpartyjobsuccessresultinput"></a>
<a id="schema_PutThirdPartyJobSuccessResultInput"></a>
<a id="tocSputthirdpartyjobsuccessresultinput"></a>
<a id="tocsputthirdpartyjobsuccessresultinput"></a>

```json
{
  "jobId": {},
  "clientToken": {},
  "currentRevision": {
    "revision": {},
    "changeIdentifier": {},
    "created": {},
    "revisionSummary": {}
  },
  "continuationToken": {},
  "executionDetails": {
    "summary": {},
    "externalExecutionId": {},
    "percentComplete": {}
  }
}
```

Represents the input of a <code>PutThirdPartyJobSuccessResult</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|clientToken|object|true|none|none|
|currentRevision|object|false|none|none|
|continuationToken|object|false|none|none|
|executionDetails|object|false|none|none|

<h2 id="tocS_PutWebhookOutput">PutWebhookOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputwebhookoutput"></a>
<a id="schema_PutWebhookOutput"></a>
<a id="tocSputwebhookoutput"></a>
<a id="tocsputwebhookoutput"></a>

```json
{
  "webhook": {
    "definition": {
      "name": {},
      "targetPipeline": {},
      "targetAction": {},
      "filters": {},
      "authentication": {},
      "authenticationConfiguration": {
        "AllowedIPRange": {},
        "SecretToken": {}
      }
    },
    "url": {},
    "errorMessage": {},
    "errorCode": {},
    "lastTriggered": {},
    "arn": {},
    "tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|object|false|none|none|

<h2 id="tocS_PutWebhookInput">PutWebhookInput</h2>
<!-- backwards compatibility -->
<a id="schemaputwebhookinput"></a>
<a id="schema_PutWebhookInput"></a>
<a id="tocSputwebhookinput"></a>
<a id="tocsputwebhookinput"></a>

```json
{
  "webhook": {
    "name": {},
    "targetPipeline": {},
    "targetAction": {},
    "filters": {},
    "authentication": {},
    "authenticationConfiguration": {
      "AllowedIPRange": {},
      "SecretToken": {}
    }
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_InvalidWebhookFilterPatternException">InvalidWebhookFilterPatternException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidwebhookfilterpatternexception"></a>
<a id="schema_InvalidWebhookFilterPatternException"></a>
<a id="tocSinvalidwebhookfilterpatternexception"></a>
<a id="tocsinvalidwebhookfilterpatternexception"></a>

```json
null
```

<h2 id="tocS_InvalidWebhookAuthenticationParametersException">InvalidWebhookAuthenticationParametersException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidwebhookauthenticationparametersexception"></a>
<a id="schema_InvalidWebhookAuthenticationParametersException"></a>
<a id="tocSinvalidwebhookauthenticationparametersexception"></a>
<a id="tocsinvalidwebhookauthenticationparametersexception"></a>

```json
null
```

<h2 id="tocS_RegisterWebhookWithThirdPartyOutput">RegisterWebhookWithThirdPartyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaregisterwebhookwiththirdpartyoutput"></a>
<a id="schema_RegisterWebhookWithThirdPartyOutput"></a>
<a id="tocSregisterwebhookwiththirdpartyoutput"></a>
<a id="tocsregisterwebhookwiththirdpartyoutput"></a>

```json
{}
```

<h2 id="tocS_RegisterWebhookWithThirdPartyInput">RegisterWebhookWithThirdPartyInput</h2>
<!-- backwards compatibility -->
<a id="schemaregisterwebhookwiththirdpartyinput"></a>
<a id="schema_RegisterWebhookWithThirdPartyInput"></a>
<a id="tocSregisterwebhookwiththirdpartyinput"></a>
<a id="tocsregisterwebhookwiththirdpartyinput"></a>

```json
{
  "webhookName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhookName|object|false|none|none|

<h2 id="tocS_RetryStageExecutionOutput">RetryStageExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaretrystageexecutionoutput"></a>
<a id="schema_RetryStageExecutionOutput"></a>
<a id="tocSretrystageexecutionoutput"></a>
<a id="tocsretrystageexecutionoutput"></a>

```json
{
  "pipelineExecutionId": {}
}
```

Represents the output of a <code>RetryStageExecution</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineExecutionId|object|false|none|none|

<h2 id="tocS_RetryStageExecutionInput">RetryStageExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemaretrystageexecutioninput"></a>
<a id="schema_RetryStageExecutionInput"></a>
<a id="tocSretrystageexecutioninput"></a>
<a id="tocsretrystageexecutioninput"></a>

```json
{
  "pipelineName": {},
  "stageName": {},
  "pipelineExecutionId": {},
  "retryMode": {}
}
```

Represents the input of a <code>RetryStageExecution</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|true|none|none|
|stageName|object|true|none|none|
|pipelineExecutionId|object|true|none|none|
|retryMode|object|true|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_StageNotRetryableException">StageNotRetryableException</h2>
<!-- backwards compatibility -->
<a id="schemastagenotretryableexception"></a>
<a id="schema_StageNotRetryableException"></a>
<a id="tocSstagenotretryableexception"></a>
<a id="tocsstagenotretryableexception"></a>

```json
null
```

<h2 id="tocS_NotLatestPipelineExecutionException">NotLatestPipelineExecutionException</h2>
<!-- backwards compatibility -->
<a id="schemanotlatestpipelineexecutionexception"></a>
<a id="schema_NotLatestPipelineExecutionException"></a>
<a id="tocSnotlatestpipelineexecutionexception"></a>
<a id="tocsnotlatestpipelineexecutionexception"></a>

```json
null
```

<h2 id="tocS_StartPipelineExecutionOutput">StartPipelineExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartpipelineexecutionoutput"></a>
<a id="schema_StartPipelineExecutionOutput"></a>
<a id="tocSstartpipelineexecutionoutput"></a>
<a id="tocsstartpipelineexecutionoutput"></a>

```json
{
  "pipelineExecutionId": {}
}
```

Represents the output of a <code>StartPipelineExecution</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineExecutionId|object|false|none|none|

<h2 id="tocS_StartPipelineExecutionInput">StartPipelineExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemastartpipelineexecutioninput"></a>
<a id="schema_StartPipelineExecutionInput"></a>
<a id="tocSstartpipelineexecutioninput"></a>
<a id="tocsstartpipelineexecutioninput"></a>

```json
{
  "name": {},
  "clientRequestToken": {}
}
```

Represents the input of a <code>StartPipelineExecution</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_StopPipelineExecutionOutput">StopPipelineExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemastoppipelineexecutionoutput"></a>
<a id="schema_StopPipelineExecutionOutput"></a>
<a id="tocSstoppipelineexecutionoutput"></a>
<a id="tocsstoppipelineexecutionoutput"></a>

```json
{
  "pipelineExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineExecutionId|object|false|none|none|

<h2 id="tocS_StopPipelineExecutionInput">StopPipelineExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemastoppipelineexecutioninput"></a>
<a id="schema_StopPipelineExecutionInput"></a>
<a id="tocSstoppipelineexecutioninput"></a>
<a id="tocsstoppipelineexecutioninput"></a>

```json
{
  "pipelineName": {},
  "pipelineExecutionId": {},
  "abandon": {},
  "reason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|true|none|none|
|pipelineExecutionId|object|true|none|none|
|abandon|object|false|none|none|
|reason|object|false|none|none|

<h2 id="tocS_PipelineExecutionNotStoppableException">PipelineExecutionNotStoppableException</h2>
<!-- backwards compatibility -->
<a id="schemapipelineexecutionnotstoppableexception"></a>
<a id="schema_PipelineExecutionNotStoppableException"></a>
<a id="tocSpipelineexecutionnotstoppableexception"></a>
<a id="tocspipelineexecutionnotstoppableexception"></a>

```json
null
```

<h2 id="tocS_DuplicatedStopRequestException">DuplicatedStopRequestException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatedstoprequestexception"></a>
<a id="schema_DuplicatedStopRequestException"></a>
<a id="tocSduplicatedstoprequestexception"></a>
<a id="tocsduplicatedstoprequestexception"></a>

```json
null
```

<h2 id="tocS_TagResourceOutput">TagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceoutput"></a>
<a id="schema_TagResourceOutput"></a>
<a id="tocStagresourceoutput"></a>
<a id="tocstagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

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

<h2 id="tocS_UntagResourceOutput">UntagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceoutput"></a>
<a id="schema_UntagResourceOutput"></a>
<a id="tocSuntagresourceoutput"></a>
<a id="tocsuntagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

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

<h2 id="tocS_UpdateActionTypeInput">UpdateActionTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateactiontypeinput"></a>
<a id="schema_UpdateActionTypeInput"></a>
<a id="tocSupdateactiontypeinput"></a>
<a id="tocsupdateactiontypeinput"></a>

```json
{
  "actionType": {
    "description": {},
    "executor": {
      "configuration": {
        "lambdaExecutorConfiguration": {
          "lambdaFunctionArn": {}
        },
        "jobWorkerExecutorConfiguration": {
          "pollingAccounts": {},
          "pollingServicePrincipals": {}
        }
      },
      "type": {},
      "policyStatementsTemplate": {},
      "jobTimeout": {}
    },
    "id": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "inputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    },
    "outputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    },
    "permissions": {
      "allowedAccounts": {}
    },
    "properties": null,
    "urls": {
      "configurationUrl": {},
      "entityUrlTemplate": {},
      "executionUrlTemplate": {},
      "revisionUrlTemplate": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionType|object|true|none|none|

<h2 id="tocS_RequestFailedException">RequestFailedException</h2>
<!-- backwards compatibility -->
<a id="schemarequestfailedexception"></a>
<a id="schema_RequestFailedException"></a>
<a id="tocSrequestfailedexception"></a>
<a id="tocsrequestfailedexception"></a>

```json
null
```

<h2 id="tocS_UpdatePipelineOutput">UpdatePipelineOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepipelineoutput"></a>
<a id="schema_UpdatePipelineOutput"></a>
<a id="tocSupdatepipelineoutput"></a>
<a id="tocsupdatepipelineoutput"></a>

```json
{
  "pipeline": {
    "name": {},
    "roleArn": {},
    "artifactStore": {
      "type": {},
      "location": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "artifactStores": {
      "property1": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      },
      "property2": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      }
    },
    "stages": {},
    "version": {}
  }
}
```

Represents the output of an <code>UpdatePipeline</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipeline|object|false|none|none|

<h2 id="tocS_UpdatePipelineInput">UpdatePipelineInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepipelineinput"></a>
<a id="schema_UpdatePipelineInput"></a>
<a id="tocSupdatepipelineinput"></a>
<a id="tocsupdatepipelineinput"></a>

```json
{
  "pipeline": {
    "name": {},
    "roleArn": {},
    "artifactStore": {
      "type": {},
      "location": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "artifactStores": {
      "property1": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      },
      "property2": {
        "type": {},
        "location": {},
        "encryptionKey": {
          "id": {},
          "type": {}
        }
      }
    },
    "stages": {},
    "version": {}
  }
}
```

Represents the input of an <code>UpdatePipeline</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipeline|object|true|none|none|

<h2 id="tocS_AWSRegionName">AWSRegionName</h2>
<!-- backwards compatibility -->
<a id="schemaawsregionname"></a>
<a id="schema_AWSRegionName"></a>
<a id="tocSawsregionname"></a>
<a id="tocsawsregionname"></a>

```json
"string"
```

<h2 id="tocS_AccessKeyId">AccessKeyId</h2>
<!-- backwards compatibility -->
<a id="schemaaccesskeyid"></a>
<a id="schema_AccessKeyId"></a>
<a id="tocSaccesskeyid"></a>
<a id="tocsaccesskeyid"></a>

```json
"password"
```

<h2 id="tocS_SecretAccessKey">SecretAccessKey</h2>
<!-- backwards compatibility -->
<a id="schemasecretaccesskey"></a>
<a id="schema_SecretAccessKey"></a>
<a id="tocSsecretaccesskey"></a>
<a id="tocssecretaccesskey"></a>

```json
"password"
```

<h2 id="tocS_SessionToken">SessionToken</h2>
<!-- backwards compatibility -->
<a id="schemasessiontoken"></a>
<a id="schema_SessionToken"></a>
<a id="tocSsessiontoken"></a>
<a id="tocssessiontoken"></a>

```json
"password"
```

<h2 id="tocS_AWSSessionCredentials">AWSSessionCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaawssessioncredentials"></a>
<a id="schema_AWSSessionCredentials"></a>
<a id="tocSawssessioncredentials"></a>
<a id="tocsawssessioncredentials"></a>

```json
{
  "accessKeyId": {},
  "secretAccessKey": {},
  "sessionToken": {}
}
```

Represents an Amazon Web Services session credentials object. These credentials are temporary credentials that are issued by Amazon Web Services Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in CodePipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyId|object|true|none|none|
|secretAccessKey|object|true|none|none|
|sessionToken|object|true|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"string"
```

<h2 id="tocS_Nonce">Nonce</h2>
<!-- backwards compatibility -->
<a id="schemanonce"></a>
<a id="schema_Nonce"></a>
<a id="tocSnonce"></a>
<a id="tocsnonce"></a>

```json
"string"
```

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"Created"
```

<h2 id="tocS_ThirdPartyJobId">ThirdPartyJobId</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyjobid"></a>
<a id="schema_ThirdPartyJobId"></a>
<a id="tocSthirdpartyjobid"></a>
<a id="tocsthirdpartyjobid"></a>

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

<h2 id="tocS_ActionCategory">ActionCategory</h2>
<!-- backwards compatibility -->
<a id="schemaactioncategory"></a>
<a id="schema_ActionCategory"></a>
<a id="tocSactioncategory"></a>
<a id="tocsactioncategory"></a>

```json
"Source"
```

<h2 id="tocS_ActionConfigurationMap">ActionConfigurationMap</h2>
<!-- backwards compatibility -->
<a id="schemaactionconfigurationmap"></a>
<a id="schema_ActionConfigurationMap"></a>
<a id="tocSactionconfigurationmap"></a>
<a id="tocsactionconfigurationmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ActionConfigurationValue](#schemaactionconfigurationvalue)|false|none|none|

<h2 id="tocS_ActionConfiguration">ActionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaactionconfiguration"></a>
<a id="schema_ActionConfiguration"></a>
<a id="tocSactionconfiguration"></a>
<a id="tocsactionconfiguration"></a>

```json
{
  "configuration": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents information about an action configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|false|none|none|

<h2 id="tocS_ActionConfigurationKey">ActionConfigurationKey</h2>
<!-- backwards compatibility -->
<a id="schemaactionconfigurationkey"></a>
<a id="schema_ActionConfigurationKey"></a>
<a id="tocSactionconfigurationkey"></a>
<a id="tocsactionconfigurationkey"></a>

```json
"string"
```

<h2 id="tocS_ActionConfigurationValue">ActionConfigurationValue</h2>
<!-- backwards compatibility -->
<a id="schemaactionconfigurationvalue"></a>
<a id="schema_ActionConfigurationValue"></a>
<a id="tocSactionconfigurationvalue"></a>
<a id="tocsactionconfigurationvalue"></a>

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

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_ActionConfigurationPropertyType">ActionConfigurationPropertyType</h2>
<!-- backwards compatibility -->
<a id="schemaactionconfigurationpropertytype"></a>
<a id="schema_ActionConfigurationPropertyType"></a>
<a id="tocSactionconfigurationpropertytype"></a>
<a id="tocsactionconfigurationpropertytype"></a>

```json
"String"
```

<h2 id="tocS_ActionConfigurationProperty">ActionConfigurationProperty</h2>
<!-- backwards compatibility -->
<a id="schemaactionconfigurationproperty"></a>
<a id="schema_ActionConfigurationProperty"></a>
<a id="tocSactionconfigurationproperty"></a>
<a id="tocsactionconfigurationproperty"></a>

```json
{
  "name": {},
  "required": {},
  "key": {},
  "secret": {},
  "queryable": {},
  "description": {},
  "type": {}
}
```

Represents information about an action configuration property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|required|object|true|none|none|
|key|object|true|none|none|
|secret|object|true|none|none|
|queryable|object|false|none|none|
|description|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_ActionConfigurationPropertyList">ActionConfigurationPropertyList</h2>
<!-- backwards compatibility -->
<a id="schemaactionconfigurationpropertylist"></a>
<a id="schema_ActionConfigurationPropertyList"></a>
<a id="tocSactionconfigurationpropertylist"></a>
<a id="tocsactionconfigurationpropertylist"></a>

```json
[
  {
    "name": {},
    "required": {},
    "key": {},
    "secret": {},
    "queryable": {},
    "description": {},
    "type": {}
  }
]
```

<h2 id="tocS_ActionConfigurationQueryableValue">ActionConfigurationQueryableValue</h2>
<!-- backwards compatibility -->
<a id="schemaactionconfigurationqueryablevalue"></a>
<a id="schema_ActionConfigurationQueryableValue"></a>
<a id="tocSactionconfigurationqueryablevalue"></a>
<a id="tocsactionconfigurationqueryablevalue"></a>

```json
"string"
```

<h2 id="tocS_ActionName">ActionName</h2>
<!-- backwards compatibility -->
<a id="schemaactionname"></a>
<a id="schema_ActionName"></a>
<a id="tocSactionname"></a>
<a id="tocsactionname"></a>

```json
"string"
```

<h2 id="tocS_ActionExecutionId">ActionExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemaactionexecutionid"></a>
<a id="schema_ActionExecutionId"></a>
<a id="tocSactionexecutionid"></a>
<a id="tocsactionexecutionid"></a>

```json
"string"
```

<h2 id="tocS_ActionContext">ActionContext</h2>
<!-- backwards compatibility -->
<a id="schemaactioncontext"></a>
<a id="schema_ActionContext"></a>
<a id="tocSactioncontext"></a>
<a id="tocsactioncontext"></a>

```json
{
  "name": {},
  "actionExecutionId": {}
}
```

Represents the context of an action in the stage of a pipeline to a job worker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|actionExecutionId|object|false|none|none|

<h2 id="tocS_ActionTypeId">ActionTypeId</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypeid"></a>
<a id="schema_ActionTypeId"></a>
<a id="tocSactiontypeid"></a>
<a id="tocsactiontypeid"></a>

```json
{
  "category": {},
  "owner": {},
  "provider": {},
  "version": {}
}
```

Represents information about an action type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|object|true|none|none|
|owner|object|true|none|none|
|provider|object|true|none|none|
|version|object|true|none|none|

<h2 id="tocS_ActionRunOrder">ActionRunOrder</h2>
<!-- backwards compatibility -->
<a id="schemaactionrunorder"></a>
<a id="schema_ActionRunOrder"></a>
<a id="tocSactionrunorder"></a>
<a id="tocsactionrunorder"></a>

```json
1
```

<h2 id="tocS_OutputArtifactList">OutputArtifactList</h2>
<!-- backwards compatibility -->
<a id="schemaoutputartifactlist"></a>
<a id="schema_OutputArtifactList"></a>
<a id="tocSoutputartifactlist"></a>
<a id="tocsoutputartifactlist"></a>

```json
[
  {
    "name": {}
  }
]
```

<h2 id="tocS_InputArtifactList">InputArtifactList</h2>
<!-- backwards compatibility -->
<a id="schemainputartifactlist"></a>
<a id="schema_InputArtifactList"></a>
<a id="tocSinputartifactlist"></a>
<a id="tocsinputartifactlist"></a>

```json
[
  {
    "name": {}
  }
]
```

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_ActionNamespace">ActionNamespace</h2>
<!-- backwards compatibility -->
<a id="schemaactionnamespace"></a>
<a id="schema_ActionNamespace"></a>
<a id="tocSactionnamespace"></a>
<a id="tocsactionnamespace"></a>

```json
"string"
```

<h2 id="tocS_ActionDeclaration">ActionDeclaration</h2>
<!-- backwards compatibility -->
<a id="schemaactiondeclaration"></a>
<a id="schema_ActionDeclaration"></a>
<a id="tocSactiondeclaration"></a>
<a id="tocsactiondeclaration"></a>

```json
{
  "name": {},
  "actionTypeId": {
    "category": {},
    "owner": {},
    "provider": {},
    "version": {}
  },
  "runOrder": {},
  "configuration": {
    "property1": "string",
    "property2": "string"
  },
  "outputArtifacts": {},
  "inputArtifacts": {},
  "roleArn": {},
  "region": {},
  "namespace": {}
}
```

Represents information about an action declaration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|actionTypeId|object|true|none|none|
|runOrder|object|false|none|none|
|configuration|object|false|none|none|
|outputArtifacts|object|false|none|none|
|inputArtifacts|object|false|none|none|
|roleArn|object|false|none|none|
|region|object|false|none|none|
|namespace|object|false|none|none|

<h2 id="tocS_ActionExecutionStatus">ActionExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaactionexecutionstatus"></a>
<a id="schema_ActionExecutionStatus"></a>
<a id="tocSactionexecutionstatus"></a>
<a id="tocsactionexecutionstatus"></a>

```json
"InProgress"
```

<h2 id="tocS_ExecutionSummary">ExecutionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionsummary"></a>
<a id="schema_ExecutionSummary"></a>
<a id="tocSexecutionsummary"></a>
<a id="tocsexecutionsummary"></a>

```json
"string"
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

<h2 id="tocS_ActionExecutionToken">ActionExecutionToken</h2>
<!-- backwards compatibility -->
<a id="schemaactionexecutiontoken"></a>
<a id="schema_ActionExecutionToken"></a>
<a id="tocSactionexecutiontoken"></a>
<a id="tocsactionexecutiontoken"></a>

```json
"string"
```

<h2 id="tocS_LastUpdatedBy">LastUpdatedBy</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatedby"></a>
<a id="schema_LastUpdatedBy"></a>
<a id="tocSlastupdatedby"></a>
<a id="tocslastupdatedby"></a>

```json
"string"
```

<h2 id="tocS_ExecutionId">ExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionid"></a>
<a id="schema_ExecutionId"></a>
<a id="tocSexecutionid"></a>
<a id="tocsexecutionid"></a>

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

<h2 id="tocS_Percentage">Percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_Percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
0
```

<h2 id="tocS_ErrorDetails">ErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetails"></a>
<a id="schema_ErrorDetails"></a>
<a id="tocSerrordetails"></a>
<a id="tocserrordetails"></a>

```json
{
  "code": {},
  "message": {}
}
```

Represents information about an error in CodePipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_ActionExecution">ActionExecution</h2>
<!-- backwards compatibility -->
<a id="schemaactionexecution"></a>
<a id="schema_ActionExecution"></a>
<a id="tocSactionexecution"></a>
<a id="tocsactionexecution"></a>

```json
{
  "actionExecutionId": {},
  "status": {},
  "summary": {},
  "lastStatusChange": {},
  "token": {},
  "lastUpdatedBy": {},
  "externalExecutionId": {},
  "externalExecutionUrl": {},
  "percentComplete": {},
  "errorDetails": {
    "code": {},
    "message": {}
  }
}
```

Represents information about the run of an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionExecutionId|object|false|none|none|
|status|object|false|none|none|
|summary|object|false|none|none|
|lastStatusChange|object|false|none|none|
|token|object|false|none|none|
|lastUpdatedBy|object|false|none|none|
|externalExecutionId|object|false|none|none|
|externalExecutionUrl|object|false|none|none|
|percentComplete|object|false|none|none|
|errorDetails|object|false|none|none|

<h2 id="tocS_PipelineExecutionId">PipelineExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemapipelineexecutionid"></a>
<a id="schema_PipelineExecutionId"></a>
<a id="tocSpipelineexecutionid"></a>
<a id="tocspipelineexecutionid"></a>

```json
"string"
```

<h2 id="tocS_PipelineVersion">PipelineVersion</h2>
<!-- backwards compatibility -->
<a id="schemapipelineversion"></a>
<a id="schema_PipelineVersion"></a>
<a id="tocSpipelineversion"></a>
<a id="tocspipelineversion"></a>

```json
1
```

<h2 id="tocS_StageName">StageName</h2>
<!-- backwards compatibility -->
<a id="schemastagename"></a>
<a id="schema_StageName"></a>
<a id="tocSstagename"></a>
<a id="tocsstagename"></a>

```json
"string"
```

<h2 id="tocS_ActionExecutionInput">ActionExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemaactionexecutioninput"></a>
<a id="schema_ActionExecutionInput"></a>
<a id="tocSactionexecutioninput"></a>
<a id="tocsactionexecutioninput"></a>

```json
{
  "actionTypeId": {
    "category": {},
    "owner": {},
    "provider": {},
    "version": {}
  },
  "configuration": {
    "property1": "string",
    "property2": "string"
  },
  "resolvedConfiguration": {
    "property1": "string",
    "property2": "string"
  },
  "roleArn": {},
  "region": {},
  "inputArtifacts": {},
  "namespace": {}
}
```

Input information used for an action execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionTypeId|[ActionTypeId](#schemaactiontypeid)|false|none|Represents information about an action type.|
|configuration|object|false|none|none|
|resolvedConfiguration|object|false|none|none|
|roleArn|object|false|none|none|
|region|object|false|none|none|
|inputArtifacts|object|false|none|none|
|namespace|object|false|none|none|

<h2 id="tocS_ActionExecutionOutput">ActionExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaactionexecutionoutput"></a>
<a id="schema_ActionExecutionOutput"></a>
<a id="tocSactionexecutionoutput"></a>
<a id="tocsactionexecutionoutput"></a>

```json
{
  "outputArtifacts": {},
  "executionResult": {
    "externalExecutionId": {},
    "externalExecutionSummary": {},
    "externalExecutionUrl": {}
  },
  "outputVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

Output details listed for an action execution, such as the action execution result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputArtifacts|object|false|none|none|
|executionResult|object|false|none|none|
|outputVariables|object|false|none|none|

<h2 id="tocS_ActionExecutionDetail">ActionExecutionDetail</h2>
<!-- backwards compatibility -->
<a id="schemaactionexecutiondetail"></a>
<a id="schema_ActionExecutionDetail"></a>
<a id="tocSactionexecutiondetail"></a>
<a id="tocsactionexecutiondetail"></a>

```json
{
  "pipelineExecutionId": {},
  "actionExecutionId": {},
  "pipelineVersion": {},
  "stageName": {},
  "actionName": {},
  "startTime": {},
  "lastUpdateTime": {},
  "status": {},
  "input": {
    "actionTypeId": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "configuration": {
      "property1": "string",
      "property2": "string"
    },
    "resolvedConfiguration": {
      "property1": "string",
      "property2": "string"
    },
    "roleArn": {},
    "region": {},
    "inputArtifacts": {},
    "namespace": {}
  },
  "output": {
    "outputArtifacts": {},
    "executionResult": {
      "externalExecutionId": {},
      "externalExecutionSummary": {},
      "externalExecutionUrl": {}
    },
    "outputVariables": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Returns information about an execution of an action, including the action execution ID, and the name, version, and timing of the action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineExecutionId|object|false|none|none|
|actionExecutionId|object|false|none|none|
|pipelineVersion|object|false|none|none|
|stageName|object|false|none|none|
|actionName|object|false|none|none|
|startTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|status|object|false|none|none|
|input|object|false|none|none|
|output|object|false|none|none|

<h2 id="tocS_ActionExecutionDetailList">ActionExecutionDetailList</h2>
<!-- backwards compatibility -->
<a id="schemaactionexecutiondetaillist"></a>
<a id="schema_ActionExecutionDetailList"></a>
<a id="tocSactionexecutiondetaillist"></a>
<a id="tocsactionexecutiondetaillist"></a>

```json
[
  {
    "pipelineExecutionId": {},
    "actionExecutionId": {},
    "pipelineVersion": {},
    "stageName": {},
    "actionName": {},
    "startTime": {},
    "lastUpdateTime": {},
    "status": {},
    "input": {
      "actionTypeId": {
        "category": {},
        "owner": {},
        "provider": {},
        "version": {}
      },
      "configuration": {
        "property1": "string",
        "property2": "string"
      },
      "resolvedConfiguration": {
        "property1": "string",
        "property2": "string"
      },
      "roleArn": {},
      "region": {},
      "inputArtifacts": {},
      "namespace": {}
    },
    "output": {
      "outputArtifacts": {},
      "executionResult": {
        "externalExecutionId": {},
        "externalExecutionSummary": {},
        "externalExecutionUrl": {}
      },
      "outputVariables": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
]
```

<h2 id="tocS_ActionExecutionFilter">ActionExecutionFilter</h2>
<!-- backwards compatibility -->
<a id="schemaactionexecutionfilter"></a>
<a id="schema_ActionExecutionFilter"></a>
<a id="tocSactionexecutionfilter"></a>
<a id="tocsactionexecutionfilter"></a>

```json
{
  "pipelineExecutionId": {}
}
```

Filter values for the action execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineExecutionId|object|false|none|none|

<h2 id="tocS_ResolvedActionConfigurationMap">ResolvedActionConfigurationMap</h2>
<!-- backwards compatibility -->
<a id="schemaresolvedactionconfigurationmap"></a>
<a id="schema_ResolvedActionConfigurationMap"></a>
<a id="tocSresolvedactionconfigurationmap"></a>
<a id="tocsresolvedactionconfigurationmap"></a>

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

<h2 id="tocS_ArtifactDetailList">ArtifactDetailList</h2>
<!-- backwards compatibility -->
<a id="schemaartifactdetaillist"></a>
<a id="schema_ArtifactDetailList"></a>
<a id="tocSartifactdetaillist"></a>
<a id="tocsartifactdetaillist"></a>

```json
[
  {
    "name": {},
    "s3location": {
      "bucket": {},
      "key": {}
    }
  }
]
```

<h2 id="tocS_ActionExecutionResult">ActionExecutionResult</h2>
<!-- backwards compatibility -->
<a id="schemaactionexecutionresult"></a>
<a id="schema_ActionExecutionResult"></a>
<a id="tocSactionexecutionresult"></a>
<a id="tocsactionexecutionresult"></a>

```json
{
  "externalExecutionId": {},
  "externalExecutionSummary": {},
  "externalExecutionUrl": {}
}
```

Execution result information, such as the external execution ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalExecutionId|object|false|none|none|
|externalExecutionSummary|object|false|none|none|
|externalExecutionUrl|object|false|none|none|

<h2 id="tocS_OutputVariablesMap">OutputVariablesMap</h2>
<!-- backwards compatibility -->
<a id="schemaoutputvariablesmap"></a>
<a id="schema_OutputVariablesMap"></a>
<a id="tocSoutputvariablesmap"></a>
<a id="tocsoutputvariablesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[OutputVariablesValue](#schemaoutputvariablesvalue)|false|none|none|

<h2 id="tocS_ExternalExecutionId">ExternalExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemaexternalexecutionid"></a>
<a id="schema_ExternalExecutionId"></a>
<a id="tocSexternalexecutionid"></a>
<a id="tocsexternalexecutionid"></a>

```json
"string"
```

<h2 id="tocS_ExternalExecutionSummary">ExternalExecutionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaexternalexecutionsummary"></a>
<a id="schema_ExternalExecutionSummary"></a>
<a id="tocSexternalexecutionsummary"></a>
<a id="tocsexternalexecutionsummary"></a>

```json
"string"
```

<h2 id="tocS_ActionOwner">ActionOwner</h2>
<!-- backwards compatibility -->
<a id="schemaactionowner"></a>
<a id="schema_ActionOwner"></a>
<a id="tocSactionowner"></a>
<a id="tocsactionowner"></a>

```json
"AWS"
```

<h2 id="tocS_ActionProvider">ActionProvider</h2>
<!-- backwards compatibility -->
<a id="schemaactionprovider"></a>
<a id="schema_ActionProvider"></a>
<a id="tocSactionprovider"></a>
<a id="tocsactionprovider"></a>

```json
"string"
```

<h2 id="tocS_Revision">Revision</h2>
<!-- backwards compatibility -->
<a id="schemarevision"></a>
<a id="schema_Revision"></a>
<a id="tocSrevision"></a>
<a id="tocsrevision"></a>

```json
"string"
```

<h2 id="tocS_RevisionChangeIdentifier">RevisionChangeIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemarevisionchangeidentifier"></a>
<a id="schema_RevisionChangeIdentifier"></a>
<a id="tocSrevisionchangeidentifier"></a>
<a id="tocsrevisionchangeidentifier"></a>

```json
"string"
```

<h2 id="tocS_ActionRevision">ActionRevision</h2>
<!-- backwards compatibility -->
<a id="schemaactionrevision"></a>
<a id="schema_ActionRevision"></a>
<a id="tocSactionrevision"></a>
<a id="tocsactionrevision"></a>

```json
{
  "revisionId": {},
  "revisionChangeId": {},
  "created": {}
}
```

Represents information about the version (or revision) of an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionId|object|true|none|none|
|revisionChangeId|object|true|none|none|
|created|object|true|none|none|

<h2 id="tocS_ActionState">ActionState</h2>
<!-- backwards compatibility -->
<a id="schemaactionstate"></a>
<a id="schema_ActionState"></a>
<a id="tocSactionstate"></a>
<a id="tocsactionstate"></a>

```json
{
  "actionName": {},
  "currentRevision": {
    "revisionId": {},
    "revisionChangeId": {},
    "created": {}
  },
  "latestExecution": {
    "actionExecutionId": {},
    "status": {},
    "summary": {},
    "lastStatusChange": {},
    "token": {},
    "lastUpdatedBy": {},
    "externalExecutionId": {},
    "externalExecutionUrl": {},
    "percentComplete": {},
    "errorDetails": {
      "code": {},
      "message": {}
    }
  },
  "entityUrl": {},
  "revisionUrl": {}
}
```

Represents information about the state of an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionName|object|false|none|none|
|currentRevision|object|false|none|none|
|latestExecution|object|false|none|none|
|entityUrl|object|false|none|none|
|revisionUrl|object|false|none|none|

<h2 id="tocS_ActionStateList">ActionStateList</h2>
<!-- backwards compatibility -->
<a id="schemaactionstatelist"></a>
<a id="schema_ActionStateList"></a>
<a id="tocSactionstatelist"></a>
<a id="tocsactionstatelist"></a>

```json
[
  {
    "actionName": {},
    "currentRevision": {
      "revisionId": {},
      "revisionChangeId": {},
      "created": {}
    },
    "latestExecution": {
      "actionExecutionId": {},
      "status": {},
      "summary": {},
      "lastStatusChange": {},
      "token": {},
      "lastUpdatedBy": {},
      "externalExecutionId": {},
      "externalExecutionUrl": {},
      "percentComplete": {},
      "errorDetails": {
        "code": {},
        "message": {}
      }
    },
    "entityUrl": {},
    "revisionUrl": {}
  }
]
```

<h2 id="tocS_ActionTypeSettings">ActionTypeSettings</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypesettings"></a>
<a id="schema_ActionTypeSettings"></a>
<a id="tocSactiontypesettings"></a>
<a id="tocsactiontypesettings"></a>

```json
{
  "thirdPartyConfigurationUrl": {},
  "entityUrlTemplate": {},
  "executionUrlTemplate": {},
  "revisionUrlTemplate": {}
}
```

Returns information about the settings for an action type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thirdPartyConfigurationUrl|object|false|none|none|
|entityUrlTemplate|object|false|none|none|
|executionUrlTemplate|object|false|none|none|
|revisionUrlTemplate|object|false|none|none|

<h2 id="tocS_ArtifactDetails">ArtifactDetails</h2>
<!-- backwards compatibility -->
<a id="schemaartifactdetails"></a>
<a id="schema_ArtifactDetails"></a>
<a id="tocSartifactdetails"></a>
<a id="tocsartifactdetails"></a>

```json
{
  "minimumCount": {},
  "maximumCount": {}
}
```

Returns information about the details of an artifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minimumCount|object|true|none|none|
|maximumCount|object|true|none|none|

<h2 id="tocS_ActionType">ActionType</h2>
<!-- backwards compatibility -->
<a id="schemaactiontype"></a>
<a id="schema_ActionType"></a>
<a id="tocSactiontype"></a>
<a id="tocsactiontype"></a>

```json
{
  "id": {
    "category": {},
    "owner": {},
    "provider": {},
    "version": {}
  },
  "settings": {
    "thirdPartyConfigurationUrl": {},
    "entityUrlTemplate": {},
    "executionUrlTemplate": {},
    "revisionUrlTemplate": {}
  },
  "actionConfigurationProperties": {},
  "inputArtifactDetails": {
    "minimumCount": {},
    "maximumCount": {}
  },
  "outputArtifactDetails": {
    "minimumCount": {},
    "maximumCount": {}
  }
}
```

Returns information about the details of an action type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|settings|object|false|none|none|
|actionConfigurationProperties|object|false|none|none|
|inputArtifactDetails|object|true|none|none|
|outputArtifactDetails|object|true|none|none|

<h2 id="tocS_MinimumActionTypeArtifactCount">MinimumActionTypeArtifactCount</h2>
<!-- backwards compatibility -->
<a id="schemaminimumactiontypeartifactcount"></a>
<a id="schema_MinimumActionTypeArtifactCount"></a>
<a id="tocSminimumactiontypeartifactcount"></a>
<a id="tocsminimumactiontypeartifactcount"></a>

```json
0
```

<h2 id="tocS_MaximumActionTypeArtifactCount">MaximumActionTypeArtifactCount</h2>
<!-- backwards compatibility -->
<a id="schemamaximumactiontypeartifactcount"></a>
<a id="schema_MaximumActionTypeArtifactCount"></a>
<a id="tocSmaximumactiontypeartifactcount"></a>
<a id="tocsmaximumactiontypeartifactcount"></a>

```json
0
```

<h2 id="tocS_ActionTypeArtifactDetails">ActionTypeArtifactDetails</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypeartifactdetails"></a>
<a id="schema_ActionTypeArtifactDetails"></a>
<a id="tocSactiontypeartifactdetails"></a>
<a id="tocsactiontypeartifactdetails"></a>

```json
{
  "minimumCount": {},
  "maximumCount": {}
}
```

Information about parameters for artifacts associated with the action type, such as the minimum and maximum artifacts allowed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minimumCount|object|true|none|none|
|maximumCount|object|true|none|none|

<h2 id="tocS_ActionTypeDescription">ActionTypeDescription</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypedescription"></a>
<a id="schema_ActionTypeDescription"></a>
<a id="tocSactiontypedescription"></a>
<a id="tocsactiontypedescription"></a>

```json
"string"
```

<h2 id="tocS_ActionTypeExecutor">ActionTypeExecutor</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypeexecutor"></a>
<a id="schema_ActionTypeExecutor"></a>
<a id="tocSactiontypeexecutor"></a>
<a id="tocsactiontypeexecutor"></a>

```json
{
  "configuration": {
    "lambdaExecutorConfiguration": {
      "lambdaFunctionArn": {}
    },
    "jobWorkerExecutorConfiguration": {
      "pollingAccounts": {},
      "pollingServicePrincipals": {}
    }
  },
  "type": {},
  "policyStatementsTemplate": {},
  "jobTimeout": {}
}
```

The action engine, or executor, for an action type created for a provider, where the action is to be used by customers of the provider. The action engine is associated with the model used to create and update the action, such as the Lambda integration model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|true|none|none|
|type|object|true|none|none|
|policyStatementsTemplate|object|false|none|none|
|jobTimeout|object|false|none|none|

<h2 id="tocS_ActionTypeIdentifier">ActionTypeIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypeidentifier"></a>
<a id="schema_ActionTypeIdentifier"></a>
<a id="tocSactiontypeidentifier"></a>
<a id="tocsactiontypeidentifier"></a>

```json
{
  "category": {},
  "owner": {},
  "provider": {},
  "version": {}
}
```

Specifies the category, owner, provider, and version of the action type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|object|true|none|none|
|owner|object|true|none|none|
|provider|object|true|none|none|
|version|object|true|none|none|

<h2 id="tocS_ActionTypePermissions">ActionTypePermissions</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypepermissions"></a>
<a id="schema_ActionTypePermissions"></a>
<a id="tocSactiontypepermissions"></a>
<a id="tocsactiontypepermissions"></a>

```json
{
  "allowedAccounts": {}
}
```

Details identifying the users with permissions to use the action type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedAccounts|object|true|none|none|

<h2 id="tocS_ActionTypeUrls">ActionTypeUrls</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypeurls"></a>
<a id="schema_ActionTypeUrls"></a>
<a id="tocSactiontypeurls"></a>
<a id="tocsactiontypeurls"></a>

```json
{
  "configurationUrl": {},
  "entityUrlTemplate": {},
  "executionUrlTemplate": {},
  "revisionUrlTemplate": {}
}
```

Returns information about URLs for web pages that display to customers as links on the pipeline view, such as an external configuration page for the action type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationUrl|object|false|none|none|
|entityUrlTemplate|object|false|none|none|
|executionUrlTemplate|object|false|none|none|
|revisionUrlTemplate|object|false|none|none|

<h2 id="tocS_ActionTypeDeclaration">ActionTypeDeclaration</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypedeclaration"></a>
<a id="schema_ActionTypeDeclaration"></a>
<a id="tocSactiontypedeclaration"></a>
<a id="tocsactiontypedeclaration"></a>

```json
{
  "description": {},
  "executor": {
    "configuration": {
      "lambdaExecutorConfiguration": {
        "lambdaFunctionArn": {}
      },
      "jobWorkerExecutorConfiguration": {
        "pollingAccounts": {},
        "pollingServicePrincipals": {}
      }
    },
    "type": {},
    "policyStatementsTemplate": {},
    "jobTimeout": {}
  },
  "id": {
    "category": {},
    "owner": {},
    "provider": {},
    "version": {}
  },
  "inputArtifactDetails": {
    "minimumCount": {},
    "maximumCount": {}
  },
  "outputArtifactDetails": {
    "minimumCount": {},
    "maximumCount": {}
  },
  "permissions": {
    "allowedAccounts": {}
  },
  "properties": null,
  "urls": {
    "configurationUrl": {},
    "entityUrlTemplate": {},
    "executionUrlTemplate": {},
    "revisionUrlTemplate": {}
  }
}
```

The parameters for the action type definition that are provided when the action type is created or updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|executor|object|true|none|none|
|id|object|true|none|none|
|inputArtifactDetails|object|true|none|none|
|outputArtifactDetails|object|true|none|none|
|permissions|object|false|none|none|
|properties|object|false|none|The properties of the action type to be updated.|
|urls|object|false|none|none|

<h2 id="tocS_ExecutorConfiguration">ExecutorConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaexecutorconfiguration"></a>
<a id="schema_ExecutorConfiguration"></a>
<a id="tocSexecutorconfiguration"></a>
<a id="tocsexecutorconfiguration"></a>

```json
{
  "lambdaExecutorConfiguration": {
    "lambdaFunctionArn": {}
  },
  "jobWorkerExecutorConfiguration": {
    "pollingAccounts": {},
    "pollingServicePrincipals": {}
  }
}
```

The action engine, or executor, related to the supported integration model used to create and update the action type. The available executor types are <code>Lambda</code> and <code>JobWorker</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lambdaExecutorConfiguration|object|false|none|none|
|jobWorkerExecutorConfiguration|object|false|none|none|

<h2 id="tocS_ExecutorType">ExecutorType</h2>
<!-- backwards compatibility -->
<a id="schemaexecutortype"></a>
<a id="schema_ExecutorType"></a>
<a id="tocSexecutortype"></a>
<a id="tocsexecutortype"></a>

```json
"JobWorker"
```

<h2 id="tocS_PolicyStatementsTemplate">PolicyStatementsTemplate</h2>
<!-- backwards compatibility -->
<a id="schemapolicystatementstemplate"></a>
<a id="schema_PolicyStatementsTemplate"></a>
<a id="tocSpolicystatementstemplate"></a>
<a id="tocspolicystatementstemplate"></a>

```json
"string"
```

<h2 id="tocS_JobTimeout">JobTimeout</h2>
<!-- backwards compatibility -->
<a id="schemajobtimeout"></a>
<a id="schema_JobTimeout"></a>
<a id="tocSjobtimeout"></a>
<a id="tocsjobtimeout"></a>

```json
60
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

<h2 id="tocS_ActionTypeOwner">ActionTypeOwner</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypeowner"></a>
<a id="schema_ActionTypeOwner"></a>
<a id="tocSactiontypeowner"></a>
<a id="tocsactiontypeowner"></a>

```json
"string"
```

<h2 id="tocS_ActionTypeList">ActionTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypelist"></a>
<a id="schema_ActionTypeList"></a>
<a id="tocSactiontypelist"></a>
<a id="tocsactiontypelist"></a>

```json
[
  {
    "id": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "settings": {
      "thirdPartyConfigurationUrl": {},
      "entityUrlTemplate": {},
      "executionUrlTemplate": {},
      "revisionUrlTemplate": {}
    },
    "actionConfigurationProperties": {},
    "inputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    },
    "outputArtifactDetails": {
      "minimumCount": {},
      "maximumCount": {}
    }
  }
]
```

<h2 id="tocS_AllowedAccounts">AllowedAccounts</h2>
<!-- backwards compatibility -->
<a id="schemaallowedaccounts"></a>
<a id="schema_AllowedAccounts"></a>
<a id="tocSallowedaccounts"></a>
<a id="tocsallowedaccounts"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ActionTypeProperty">ActionTypeProperty</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypeproperty"></a>
<a id="schema_ActionTypeProperty"></a>
<a id="tocSactiontypeproperty"></a>
<a id="tocsactiontypeproperty"></a>

```json
{
  "name": {},
  "optional": {},
  "key": {},
  "noEcho": {},
  "queryable": {},
  "description": {}
}
```

Represents information about each property specified in the action configuration, such as the description and key name that display for the customer using the action type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|optional|object|true|none|none|
|key|object|true|none|none|
|noEcho|object|true|none|none|
|queryable|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_ActionTypeProperties">ActionTypeProperties</h2>
<!-- backwards compatibility -->
<a id="schemaactiontypeproperties"></a>
<a id="schema_ActionTypeProperties"></a>
<a id="tocSactiontypeproperties"></a>
<a id="tocsactiontypeproperties"></a>

```json
[
  {
    "name": {},
    "optional": {},
    "key": {},
    "noEcho": {},
    "queryable": {},
    "description": {}
  }
]
```

<h2 id="tocS_PropertyDescription">PropertyDescription</h2>
<!-- backwards compatibility -->
<a id="schemapropertydescription"></a>
<a id="schema_PropertyDescription"></a>
<a id="tocSpropertydescription"></a>
<a id="tocspropertydescription"></a>

```json
"string"
```

<h2 id="tocS_UrlTemplate">UrlTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaurltemplate"></a>
<a id="schema_UrlTemplate"></a>
<a id="tocSurltemplate"></a>
<a id="tocsurltemplate"></a>

```json
"string"
```

<h2 id="tocS_AllowedAccount">AllowedAccount</h2>
<!-- backwards compatibility -->
<a id="schemaallowedaccount"></a>
<a id="schema_AllowedAccount"></a>
<a id="tocSallowedaccount"></a>
<a id="tocsallowedaccount"></a>

```json
"string"
```

<h2 id="tocS_ApprovalSummary">ApprovalSummary</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalsummary"></a>
<a id="schema_ApprovalSummary"></a>
<a id="tocSapprovalsummary"></a>
<a id="tocsapprovalsummary"></a>

```json
"string"
```

<h2 id="tocS_ApprovalStatus">ApprovalStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalstatus"></a>
<a id="schema_ApprovalStatus"></a>
<a id="tocSapprovalstatus"></a>
<a id="tocsapprovalstatus"></a>

```json
"Approved"
```

<h2 id="tocS_ApprovalResult">ApprovalResult</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalresult"></a>
<a id="schema_ApprovalResult"></a>
<a id="tocSapprovalresult"></a>
<a id="tocsapprovalresult"></a>

```json
{
  "summary": {},
  "status": {}
}
```

Represents information about the result of an approval request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_ApprovalToken">ApprovalToken</h2>
<!-- backwards compatibility -->
<a id="schemaapprovaltoken"></a>
<a id="schema_ApprovalToken"></a>
<a id="tocSapprovaltoken"></a>
<a id="tocsapprovaltoken"></a>

```json
"string"
```

<h2 id="tocS_ArtifactName">ArtifactName</h2>
<!-- backwards compatibility -->
<a id="schemaartifactname"></a>
<a id="schema_ArtifactName"></a>
<a id="tocSartifactname"></a>
<a id="tocsartifactname"></a>

```json
"string"
```

<h2 id="tocS_ArtifactLocation">ArtifactLocation</h2>
<!-- backwards compatibility -->
<a id="schemaartifactlocation"></a>
<a id="schema_ArtifactLocation"></a>
<a id="tocSartifactlocation"></a>
<a id="tocsartifactlocation"></a>

```json
{
  "type": {},
  "s3Location": {
    "bucketName": {},
    "objectKey": {}
  }
}
```

Represents information about the location of an artifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|s3Location|object|false|none|none|

<h2 id="tocS_Artifact">Artifact</h2>
<!-- backwards compatibility -->
<a id="schemaartifact"></a>
<a id="schema_Artifact"></a>
<a id="tocSartifact"></a>
<a id="tocsartifact"></a>

```json
{
  "name": {},
  "revision": {},
  "location": {
    "type": {},
    "s3Location": {
      "bucketName": {},
      "objectKey": {}
    }
  }
}
```

Artifacts are the files that are worked on by actions in the pipeline. See the action configuration for each action for details about artifact parameters. For example, the S3 source action artifact is a file name (or file path), and the files are generally provided as a ZIP file. Example artifact name: SampleApp_Windows.zip

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|revision|object|false|none|none|
|location|object|false|none|none|

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
{
  "bucket": {},
  "key": {}
}
```

The Amazon S3 artifact location for an action's artifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|false|none|none|
|key|object|false|none|none|

<h2 id="tocS_ArtifactDetail">ArtifactDetail</h2>
<!-- backwards compatibility -->
<a id="schemaartifactdetail"></a>
<a id="schema_ArtifactDetail"></a>
<a id="tocSartifactdetail"></a>
<a id="tocsartifactdetail"></a>

```json
{
  "name": {},
  "s3location": {
    "bucket": {},
    "key": {}
  }
}
```

Artifact details for the action execution, such as the artifact location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|s3location|object|false|none|none|

<h2 id="tocS_MinimumArtifactCount">MinimumArtifactCount</h2>
<!-- backwards compatibility -->
<a id="schemaminimumartifactcount"></a>
<a id="schema_MinimumArtifactCount"></a>
<a id="tocSminimumartifactcount"></a>
<a id="tocsminimumartifactcount"></a>

```json
0
```

<h2 id="tocS_MaximumArtifactCount">MaximumArtifactCount</h2>
<!-- backwards compatibility -->
<a id="schemamaximumartifactcount"></a>
<a id="schema_MaximumArtifactCount"></a>
<a id="tocSmaximumartifactcount"></a>
<a id="tocsmaximumartifactcount"></a>

```json
0
```

<h2 id="tocS_ArtifactList">ArtifactList</h2>
<!-- backwards compatibility -->
<a id="schemaartifactlist"></a>
<a id="schema_ArtifactList"></a>
<a id="tocSartifactlist"></a>
<a id="tocsartifactlist"></a>

```json
[
  {
    "name": {},
    "revision": {},
    "location": {
      "type": {},
      "s3Location": {
        "bucketName": {},
        "objectKey": {}
      }
    }
  }
]
```

<h2 id="tocS_ArtifactLocationType">ArtifactLocationType</h2>
<!-- backwards compatibility -->
<a id="schemaartifactlocationtype"></a>
<a id="schema_ArtifactLocationType"></a>
<a id="tocSartifactlocationtype"></a>
<a id="tocsartifactlocationtype"></a>

```json
"S3"
```

<h2 id="tocS_S3ArtifactLocation">S3ArtifactLocation</h2>
<!-- backwards compatibility -->
<a id="schemas3artifactlocation"></a>
<a id="schema_S3ArtifactLocation"></a>
<a id="tocSs3artifactlocation"></a>
<a id="tocss3artifactlocation"></a>

```json
{
  "bucketName": {},
  "objectKey": {}
}
```

The location of the S3 bucket that contains a revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|objectKey|object|true|none|none|

<h2 id="tocS_RevisionSummary">RevisionSummary</h2>
<!-- backwards compatibility -->
<a id="schemarevisionsummary"></a>
<a id="schema_RevisionSummary"></a>
<a id="tocSrevisionsummary"></a>
<a id="tocsrevisionsummary"></a>

```json
"string"
```

<h2 id="tocS_ArtifactRevision">ArtifactRevision</h2>
<!-- backwards compatibility -->
<a id="schemaartifactrevision"></a>
<a id="schema_ArtifactRevision"></a>
<a id="tocSartifactrevision"></a>
<a id="tocsartifactrevision"></a>

```json
{
  "name": {},
  "revisionId": {},
  "revisionChangeIdentifier": {},
  "revisionSummary": {},
  "created": {},
  "revisionUrl": {}
}
```

Represents revision details of an artifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|revisionId|object|false|none|none|
|revisionChangeIdentifier|object|false|none|none|
|revisionSummary|object|false|none|none|
|created|object|false|none|none|
|revisionUrl|object|false|none|none|

<h2 id="tocS_ArtifactRevisionList">ArtifactRevisionList</h2>
<!-- backwards compatibility -->
<a id="schemaartifactrevisionlist"></a>
<a id="schema_ArtifactRevisionList"></a>
<a id="tocSartifactrevisionlist"></a>
<a id="tocsartifactrevisionlist"></a>

```json
[
  {
    "name": {},
    "revisionId": {},
    "revisionChangeIdentifier": {},
    "revisionSummary": {},
    "created": {},
    "revisionUrl": {}
  }
]
```

<h2 id="tocS_ArtifactStoreType">ArtifactStoreType</h2>
<!-- backwards compatibility -->
<a id="schemaartifactstoretype"></a>
<a id="schema_ArtifactStoreType"></a>
<a id="tocSartifactstoretype"></a>
<a id="tocsartifactstoretype"></a>

```json
"S3"
```

<h2 id="tocS_ArtifactStoreLocation">ArtifactStoreLocation</h2>
<!-- backwards compatibility -->
<a id="schemaartifactstorelocation"></a>
<a id="schema_ArtifactStoreLocation"></a>
<a id="tocSartifactstorelocation"></a>
<a id="tocsartifactstorelocation"></a>

```json
"string"
```

<h2 id="tocS_EncryptionKey">EncryptionKey</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkey"></a>
<a id="schema_EncryptionKey"></a>
<a id="tocSencryptionkey"></a>
<a id="tocsencryptionkey"></a>

```json
{
  "id": {},
  "type": {}
}
```

Represents information about the key used to encrypt data in the artifact store, such as an Amazon Web Services Key Management Service (Key Management Service) key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_ArtifactStore">ArtifactStore</h2>
<!-- backwards compatibility -->
<a id="schemaartifactstore"></a>
<a id="schema_ArtifactStore"></a>
<a id="tocSartifactstore"></a>
<a id="tocsartifactstore"></a>

```json
{
  "type": {},
  "location": {},
  "encryptionKey": {
    "id": {},
    "type": {}
  }
}
```

<p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|location|object|true|none|none|
|encryptionKey|object|false|none|none|

<h2 id="tocS_ArtifactStoreMap">ArtifactStoreMap</h2>
<!-- backwards compatibility -->
<a id="schemaartifactstoremap"></a>
<a id="schema_ArtifactStoreMap"></a>
<a id="tocSartifactstoremap"></a>
<a id="tocsartifactstoremap"></a>

```json
{
  "property1": {
    "type": {},
    "location": {},
    "encryptionKey": {
      "id": {},
      "type": {}
    }
  },
  "property2": {
    "type": {},
    "location": {},
    "encryptionKey": {
      "id": {},
      "type": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ArtifactStore](#schemaartifactstore)|false|none|<p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>|

<h2 id="tocS_BlockerName">BlockerName</h2>
<!-- backwards compatibility -->
<a id="schemablockername"></a>
<a id="schema_BlockerName"></a>
<a id="tocSblockername"></a>
<a id="tocsblockername"></a>

```json
"string"
```

<h2 id="tocS_BlockerType">BlockerType</h2>
<!-- backwards compatibility -->
<a id="schemablockertype"></a>
<a id="schema_BlockerType"></a>
<a id="tocSblockertype"></a>
<a id="tocsblockertype"></a>

```json
"Schedule"
```

<h2 id="tocS_BlockerDeclaration">BlockerDeclaration</h2>
<!-- backwards compatibility -->
<a id="schemablockerdeclaration"></a>
<a id="schema_BlockerDeclaration"></a>
<a id="tocSblockerdeclaration"></a>
<a id="tocsblockerdeclaration"></a>

```json
{
  "name": {},
  "type": {}
}
```

Reserved for future use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_ClientId">ClientId</h2>
<!-- backwards compatibility -->
<a id="schemaclientid"></a>
<a id="schema_ClientId"></a>
<a id="tocSclientid"></a>
<a id="tocsclientid"></a>

```json
"string"
```

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

<h2 id="tocS_Code">Code</h2>
<!-- backwards compatibility -->
<a id="schemacode"></a>
<a id="schema_Code"></a>
<a id="tocScode"></a>
<a id="tocscode"></a>

```json
"string"
```

<h2 id="tocS_ContinuationToken">ContinuationToken</h2>
<!-- backwards compatibility -->
<a id="schemacontinuationtoken"></a>
<a id="schema_ContinuationToken"></a>
<a id="tocScontinuationtoken"></a>
<a id="tocscontinuationtoken"></a>

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
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_PipelineDeclaration">PipelineDeclaration</h2>
<!-- backwards compatibility -->
<a id="schemapipelinedeclaration"></a>
<a id="schema_PipelineDeclaration"></a>
<a id="tocSpipelinedeclaration"></a>
<a id="tocspipelinedeclaration"></a>

```json
{
  "name": {},
  "roleArn": {},
  "artifactStore": {
    "type": {},
    "location": {},
    "encryptionKey": {
      "id": {},
      "type": {}
    }
  },
  "artifactStores": {
    "property1": {
      "type": {},
      "location": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "property2": {
      "type": {},
      "location": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    }
  },
  "stages": {},
  "version": {}
}
```

Represents the structure of actions and stages to be performed in the pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|roleArn|object|true|none|none|
|artifactStore|object|false|none|none|
|artifactStores|object|false|none|none|
|stages|object|true|none|none|
|version|object|false|none|none|

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CurrentRevision">CurrentRevision</h2>
<!-- backwards compatibility -->
<a id="schemacurrentrevision"></a>
<a id="schema_CurrentRevision"></a>
<a id="tocScurrentrevision"></a>
<a id="tocscurrentrevision"></a>

```json
{
  "revision": {},
  "changeIdentifier": {},
  "created": {},
  "revisionSummary": {}
}
```

Represents information about a current revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revision|object|true|none|none|
|changeIdentifier|object|true|none|none|
|created|object|false|none|none|
|revisionSummary|object|false|none|none|

<h2 id="tocS_PipelineName">PipelineName</h2>
<!-- backwards compatibility -->
<a id="schemapipelinename"></a>
<a id="schema_PipelineName"></a>
<a id="tocSpipelinename"></a>
<a id="tocspipelinename"></a>

```json
"string"
```

<h2 id="tocS_WebhookName">WebhookName</h2>
<!-- backwards compatibility -->
<a id="schemawebhookname"></a>
<a id="schema_WebhookName"></a>
<a id="tocSwebhookname"></a>
<a id="tocswebhookname"></a>

```json
"string"
```

<h2 id="tocS_StageTransitionType">StageTransitionType</h2>
<!-- backwards compatibility -->
<a id="schemastagetransitiontype"></a>
<a id="schema_StageTransitionType"></a>
<a id="tocSstagetransitiontype"></a>
<a id="tocsstagetransitiontype"></a>

```json
"Inbound"
```

<h2 id="tocS_DisabledReason">DisabledReason</h2>
<!-- backwards compatibility -->
<a id="schemadisabledreason"></a>
<a id="schema_DisabledReason"></a>
<a id="tocSdisabledreason"></a>
<a id="tocsdisabledreason"></a>

```json
"string"
```

<h2 id="tocS_Enabled">Enabled</h2>
<!-- backwards compatibility -->
<a id="schemaenabled"></a>
<a id="schema_Enabled"></a>
<a id="tocSenabled"></a>
<a id="tocsenabled"></a>

```json
true
```

<h2 id="tocS_EncryptionKeyId">EncryptionKeyId</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkeyid"></a>
<a id="schema_EncryptionKeyId"></a>
<a id="tocSencryptionkeyid"></a>
<a id="tocsencryptionkeyid"></a>

```json
"string"
```

<h2 id="tocS_EncryptionKeyType">EncryptionKeyType</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkeytype"></a>
<a id="schema_EncryptionKeyType"></a>
<a id="tocSencryptionkeytype"></a>
<a id="tocsencryptionkeytype"></a>

```json
"KMS"
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_ExecutionDetails">ExecutionDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexecutiondetails"></a>
<a id="schema_ExecutionDetails"></a>
<a id="tocSexecutiondetails"></a>
<a id="tocsexecutiondetails"></a>

```json
{
  "summary": {},
  "externalExecutionId": {},
  "percentComplete": {}
}
```

The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|object|false|none|none|
|externalExecutionId|object|false|none|none|
|percentComplete|object|false|none|none|

<h2 id="tocS_TriggerType">TriggerType</h2>
<!-- backwards compatibility -->
<a id="schematriggertype"></a>
<a id="schema_TriggerType"></a>
<a id="tocStriggertype"></a>
<a id="tocstriggertype"></a>

```json
"CreatePipeline"
```

<h2 id="tocS_TriggerDetail">TriggerDetail</h2>
<!-- backwards compatibility -->
<a id="schematriggerdetail"></a>
<a id="schema_TriggerDetail"></a>
<a id="tocStriggerdetail"></a>
<a id="tocstriggerdetail"></a>

```json
"string"
```

<h2 id="tocS_ExecutionTrigger">ExecutionTrigger</h2>
<!-- backwards compatibility -->
<a id="schemaexecutiontrigger"></a>
<a id="schema_ExecutionTrigger"></a>
<a id="tocSexecutiontrigger"></a>
<a id="tocsexecutiontrigger"></a>

```json
{
  "triggerType": {},
  "triggerDetail": {}
}
```

The interaction or event that started a pipeline execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|triggerType|object|false|none|none|
|triggerDetail|object|false|none|none|

<h2 id="tocS_LambdaExecutorConfiguration">LambdaExecutorConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalambdaexecutorconfiguration"></a>
<a id="schema_LambdaExecutorConfiguration"></a>
<a id="tocSlambdaexecutorconfiguration"></a>
<a id="tocslambdaexecutorconfiguration"></a>

```json
{
  "lambdaFunctionArn": {}
}
```

Details about the configuration for the <code>Lambda</code> action engine, or executor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lambdaFunctionArn|object|true|none|none|

<h2 id="tocS_JobWorkerExecutorConfiguration">JobWorkerExecutorConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemajobworkerexecutorconfiguration"></a>
<a id="schema_JobWorkerExecutorConfiguration"></a>
<a id="tocSjobworkerexecutorconfiguration"></a>
<a id="tocsjobworkerexecutorconfiguration"></a>

```json
{
  "pollingAccounts": {},
  "pollingServicePrincipals": {}
}
```

Details about the polling configuration for the <code>JobWorker</code> action engine, or executor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pollingAccounts|object|false|none|none|
|pollingServicePrincipals|object|false|none|none|

<h2 id="tocS_FailureType">FailureType</h2>
<!-- backwards compatibility -->
<a id="schemafailuretype"></a>
<a id="schema_FailureType"></a>
<a id="tocSfailuretype"></a>
<a id="tocsfailuretype"></a>

```json
"JobFailed"
```

<h2 id="tocS_FailureDetails">FailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemafailuredetails"></a>
<a id="schema_FailureDetails"></a>
<a id="tocSfailuredetails"></a>
<a id="tocsfailuredetails"></a>

```json
{
  "type": {},
  "message": {},
  "externalExecutionId": {}
}
```

Represents information about failure details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|message|object|true|none|none|
|externalExecutionId|object|false|none|none|

<h2 id="tocS_JobDetails">JobDetails</h2>
<!-- backwards compatibility -->
<a id="schemajobdetails"></a>
<a id="schema_JobDetails"></a>
<a id="tocSjobdetails"></a>
<a id="tocsjobdetails"></a>

```json
{
  "id": {},
  "data": {
    "actionTypeId": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "actionConfiguration": {
      "configuration": {
        "property1": "string",
        "property2": "string"
      }
    },
    "pipelineContext": {
      "pipelineName": {},
      "stage": {
        "name": {}
      },
      "action": {
        "name": {},
        "actionExecutionId": {}
      },
      "pipelineArn": {},
      "pipelineExecutionId": {}
    },
    "inputArtifacts": {},
    "outputArtifacts": {},
    "artifactCredentials": {
      "accessKeyId": {},
      "secretAccessKey": {},
      "sessionToken": {}
    },
    "continuationToken": {},
    "encryptionKey": {
      "id": {},
      "type": {}
    }
  },
  "accountId": {}
}
```

Represents information about the details of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|data|object|false|none|none|
|accountId|object|false|none|none|

<h2 id="tocS_PipelineExecution">PipelineExecution</h2>
<!-- backwards compatibility -->
<a id="schemapipelineexecution"></a>
<a id="schema_PipelineExecution"></a>
<a id="tocSpipelineexecution"></a>
<a id="tocspipelineexecution"></a>

```json
{
  "pipelineName": {},
  "pipelineVersion": {},
  "pipelineExecutionId": {},
  "status": {},
  "statusSummary": {},
  "artifactRevisions": {}
}
```

Represents information about an execution of a pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|false|none|none|
|pipelineVersion|object|false|none|none|
|pipelineExecutionId|object|false|none|none|
|status|object|false|none|none|
|statusSummary|object|false|none|none|
|artifactRevisions|object|false|none|none|

<h2 id="tocS_PipelineMetadata">PipelineMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapipelinemetadata"></a>
<a id="schema_PipelineMetadata"></a>
<a id="tocSpipelinemetadata"></a>
<a id="tocspipelinemetadata"></a>

```json
{
  "pipelineArn": {},
  "created": {},
  "updated": {},
  "pollingDisabledAt": {}
}
```

Information about a pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineArn|object|false|none|none|
|created|object|false|none|none|
|updated|object|false|none|none|
|pollingDisabledAt|object|false|none|none|

<h2 id="tocS_StageStateList">StageStateList</h2>
<!-- backwards compatibility -->
<a id="schemastagestatelist"></a>
<a id="schema_StageStateList"></a>
<a id="tocSstagestatelist"></a>
<a id="tocsstagestatelist"></a>

```json
[
  {
    "stageName": {},
    "inboundExecution": {
      "pipelineExecutionId": {},
      "status": {}
    },
    "inboundTransitionState": {
      "enabled": {},
      "lastChangedBy": {},
      "lastChangedAt": {},
      "disabledReason": {}
    },
    "actionStates": {},
    "latestExecution": {
      "pipelineExecutionId": {},
      "status": {}
    }
  }
]
```

<h2 id="tocS_ThirdPartyJobDetails">ThirdPartyJobDetails</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyjobdetails"></a>
<a id="schema_ThirdPartyJobDetails"></a>
<a id="tocSthirdpartyjobdetails"></a>
<a id="tocsthirdpartyjobdetails"></a>

```json
{
  "id": {},
  "data": {
    "actionTypeId": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "actionConfiguration": {
      "configuration": {
        "property1": "string",
        "property2": "string"
      }
    },
    "pipelineContext": {
      "pipelineName": {},
      "stage": {
        "name": {}
      },
      "action": {
        "name": {},
        "actionExecutionId": {}
      },
      "pipelineArn": {},
      "pipelineExecutionId": {}
    },
    "inputArtifacts": {},
    "outputArtifacts": {},
    "artifactCredentials": {
      "accessKeyId": {},
      "secretAccessKey": {},
      "sessionToken": {}
    },
    "continuationToken": {},
    "encryptionKey": {
      "id": {},
      "type": {}
    }
  },
  "nonce": {}
}
```

The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|data|object|false|none|none|
|nonce|object|false|none|none|

<h2 id="tocS_InputArtifact">InputArtifact</h2>
<!-- backwards compatibility -->
<a id="schemainputartifact"></a>
<a id="schema_InputArtifact"></a>
<a id="tocSinputartifact"></a>
<a id="tocsinputartifact"></a>

```json
{
  "name": {}
}
```

Represents information about an artifact to be worked on, such as a test or build artifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_JobData">JobData</h2>
<!-- backwards compatibility -->
<a id="schemajobdata"></a>
<a id="schema_JobData"></a>
<a id="tocSjobdata"></a>
<a id="tocsjobdata"></a>

```json
{
  "actionTypeId": {
    "category": {},
    "owner": {},
    "provider": {},
    "version": {}
  },
  "actionConfiguration": {
    "configuration": {
      "property1": "string",
      "property2": "string"
    }
  },
  "pipelineContext": {
    "pipelineName": {},
    "stage": {
      "name": {}
    },
    "action": {
      "name": {},
      "actionExecutionId": {}
    },
    "pipelineArn": {},
    "pipelineExecutionId": {}
  },
  "inputArtifacts": {},
  "outputArtifacts": {},
  "artifactCredentials": {
    "accessKeyId": {},
    "secretAccessKey": {},
    "sessionToken": {}
  },
  "continuationToken": {},
  "encryptionKey": {
    "id": {},
    "type": {}
  }
}
```

Represents other information about a job required for a job worker to complete the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionTypeId|object|false|none|none|
|actionConfiguration|object|false|none|none|
|pipelineContext|object|false|none|none|
|inputArtifacts|object|false|none|none|
|outputArtifacts|object|false|none|none|
|artifactCredentials|object|false|none|none|
|continuationToken|object|false|none|none|
|encryptionKey|object|false|none|none|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "id": {},
  "data": {
    "actionTypeId": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "actionConfiguration": {
      "configuration": {
        "property1": "string",
        "property2": "string"
      }
    },
    "pipelineContext": {
      "pipelineName": {},
      "stage": {
        "name": {}
      },
      "action": {
        "name": {},
        "actionExecutionId": {}
      },
      "pipelineArn": {},
      "pipelineExecutionId": {}
    },
    "inputArtifacts": {},
    "outputArtifacts": {},
    "artifactCredentials": {
      "accessKeyId": {},
      "secretAccessKey": {},
      "sessionToken": {}
    },
    "continuationToken": {},
    "encryptionKey": {
      "id": {},
      "type": {}
    }
  },
  "nonce": {},
  "accountId": {}
}
```

Represents information about a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|data|object|false|none|none|
|nonce|object|false|none|none|
|accountId|object|false|none|none|

<h2 id="tocS_PipelineContext">PipelineContext</h2>
<!-- backwards compatibility -->
<a id="schemapipelinecontext"></a>
<a id="schema_PipelineContext"></a>
<a id="tocSpipelinecontext"></a>
<a id="tocspipelinecontext"></a>

```json
{
  "pipelineName": {},
  "stage": {
    "name": {}
  },
  "action": {
    "name": {},
    "actionExecutionId": {}
  },
  "pipelineArn": {},
  "pipelineExecutionId": {}
}
```

<p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|false|none|none|
|stage|object|false|none|none|
|action|object|false|none|none|
|pipelineArn|object|false|none|none|
|pipelineExecutionId|object|false|none|none|

<h2 id="tocS_JobList">JobList</h2>
<!-- backwards compatibility -->
<a id="schemajoblist"></a>
<a id="schema_JobList"></a>
<a id="tocSjoblist"></a>
<a id="tocsjoblist"></a>

```json
[
  {
    "id": {},
    "data": {
      "actionTypeId": {
        "category": {},
        "owner": {},
        "provider": {},
        "version": {}
      },
      "actionConfiguration": {
        "configuration": {
          "property1": "string",
          "property2": "string"
        }
      },
      "pipelineContext": {
        "pipelineName": {},
        "stage": {
          "name": {}
        },
        "action": {
          "name": {},
          "actionExecutionId": {}
        },
        "pipelineArn": {},
        "pipelineExecutionId": {}
      },
      "inputArtifacts": {},
      "outputArtifacts": {},
      "artifactCredentials": {
        "accessKeyId": {},
        "secretAccessKey": {},
        "sessionToken": {}
      },
      "continuationToken": {},
      "encryptionKey": {
        "id": {},
        "type": {}
      }
    },
    "nonce": {},
    "accountId": {}
  }
]
```

<h2 id="tocS_PollingAccountList">PollingAccountList</h2>
<!-- backwards compatibility -->
<a id="schemapollingaccountlist"></a>
<a id="schema_PollingAccountList"></a>
<a id="tocSpollingaccountlist"></a>
<a id="tocspollingaccountlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PollingServicePrincipalList">PollingServicePrincipalList</h2>
<!-- backwards compatibility -->
<a id="schemapollingserviceprincipallist"></a>
<a id="schema_PollingServicePrincipalList"></a>
<a id="tocSpollingserviceprincipallist"></a>
<a id="tocspollingserviceprincipallist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_JsonPath">JsonPath</h2>
<!-- backwards compatibility -->
<a id="schemajsonpath"></a>
<a id="schema_JsonPath"></a>
<a id="tocSjsonpath"></a>
<a id="tocsjsonpath"></a>

```json
"string"
```

<h2 id="tocS_LambdaFunctionArn">LambdaFunctionArn</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionarn"></a>
<a id="schema_LambdaFunctionArn"></a>
<a id="tocSlambdafunctionarn"></a>
<a id="tocslambdafunctionarn"></a>

```json
"string"
```

<h2 id="tocS_LastChangedAt">LastChangedAt</h2>
<!-- backwards compatibility -->
<a id="schemalastchangedat"></a>
<a id="schema_LastChangedAt"></a>
<a id="tocSlastchangedat"></a>
<a id="tocslastchangedat"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_LastChangedBy">LastChangedBy</h2>
<!-- backwards compatibility -->
<a id="schemalastchangedby"></a>
<a id="schema_LastChangedBy"></a>
<a id="tocSlastchangedby"></a>
<a id="tocslastchangedby"></a>

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

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_PipelineExecutionSummaryList">PipelineExecutionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapipelineexecutionsummarylist"></a>
<a id="schema_PipelineExecutionSummaryList"></a>
<a id="tocSpipelineexecutionsummarylist"></a>
<a id="tocspipelineexecutionsummarylist"></a>

```json
[
  {
    "pipelineExecutionId": {},
    "status": {},
    "startTime": {},
    "lastUpdateTime": {},
    "sourceRevisions": {},
    "trigger": {
      "triggerType": {},
      "triggerDetail": {}
    },
    "stopTrigger": {
      "reason": {}
    }
  }
]
```

<h2 id="tocS_MaxPipelines">MaxPipelines</h2>
<!-- backwards compatibility -->
<a id="schemamaxpipelines"></a>
<a id="schema_MaxPipelines"></a>
<a id="tocSmaxpipelines"></a>
<a id="tocsmaxpipelines"></a>

```json
1
```

<h2 id="tocS_PipelineList">PipelineList</h2>
<!-- backwards compatibility -->
<a id="schemapipelinelist"></a>
<a id="schema_PipelineList"></a>
<a id="tocSpipelinelist"></a>
<a id="tocspipelinelist"></a>

```json
[
  {
    "name": {},
    "version": {},
    "created": {},
    "updated": {}
  }
]
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_WebhookDefinition">WebhookDefinition</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdefinition"></a>
<a id="schema_WebhookDefinition"></a>
<a id="tocSwebhookdefinition"></a>
<a id="tocswebhookdefinition"></a>

```json
{
  "name": {},
  "targetPipeline": {},
  "targetAction": {},
  "filters": {},
  "authentication": {},
  "authenticationConfiguration": {
    "AllowedIPRange": {},
    "SecretToken": {}
  }
}
```

Represents information about a webhook and its definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|targetPipeline|object|true|none|none|
|targetAction|object|true|none|none|
|filters|object|true|none|none|
|authentication|object|true|none|none|
|authenticationConfiguration|object|true|none|none|

<h2 id="tocS_WebhookUrl">WebhookUrl</h2>
<!-- backwards compatibility -->
<a id="schemawebhookurl"></a>
<a id="schema_WebhookUrl"></a>
<a id="tocSwebhookurl"></a>
<a id="tocswebhookurl"></a>

```json
"string"
```

<h2 id="tocS_WebhookErrorMessage">WebhookErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemawebhookerrormessage"></a>
<a id="schema_WebhookErrorMessage"></a>
<a id="tocSwebhookerrormessage"></a>
<a id="tocswebhookerrormessage"></a>

```json
"string"
```

<h2 id="tocS_WebhookErrorCode">WebhookErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemawebhookerrorcode"></a>
<a id="schema_WebhookErrorCode"></a>
<a id="tocSwebhookerrorcode"></a>
<a id="tocswebhookerrorcode"></a>

```json
"string"
```

<h2 id="tocS_WebhookLastTriggered">WebhookLastTriggered</h2>
<!-- backwards compatibility -->
<a id="schemawebhooklasttriggered"></a>
<a id="schema_WebhookLastTriggered"></a>
<a id="tocSwebhooklasttriggered"></a>
<a id="tocswebhooklasttriggered"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_WebhookArn">WebhookArn</h2>
<!-- backwards compatibility -->
<a id="schemawebhookarn"></a>
<a id="schema_WebhookArn"></a>
<a id="tocSwebhookarn"></a>
<a id="tocswebhookarn"></a>

```json
"string"
```

<h2 id="tocS_ListWebhookItem">ListWebhookItem</h2>
<!-- backwards compatibility -->
<a id="schemalistwebhookitem"></a>
<a id="schema_ListWebhookItem"></a>
<a id="tocSlistwebhookitem"></a>
<a id="tocslistwebhookitem"></a>

```json
{
  "definition": {
    "name": {},
    "targetPipeline": {},
    "targetAction": {},
    "filters": {},
    "authentication": {},
    "authenticationConfiguration": {
      "AllowedIPRange": {},
      "SecretToken": {}
    }
  },
  "url": {},
  "errorMessage": {},
  "errorCode": {},
  "lastTriggered": {},
  "arn": {},
  "tags": {}
}
```

The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|definition|object|true|none|none|
|url|object|true|none|none|
|errorMessage|object|false|none|none|
|errorCode|object|false|none|none|
|lastTriggered|object|false|none|none|
|arn|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_WebhookList">WebhookList</h2>
<!-- backwards compatibility -->
<a id="schemawebhooklist"></a>
<a id="schema_WebhookList"></a>
<a id="tocSwebhooklist"></a>
<a id="tocswebhooklist"></a>

```json
[
  {
    "definition": {
      "name": {},
      "targetPipeline": {},
      "targetAction": {},
      "filters": {},
      "authentication": {},
      "authenticationConfiguration": {
        "AllowedIPRange": {},
        "SecretToken": {}
      }
    },
    "url": {},
    "errorMessage": {},
    "errorCode": {},
    "lastTriggered": {},
    "arn": {},
    "tags": {}
  }
]
```

<h2 id="tocS_MatchEquals">MatchEquals</h2>
<!-- backwards compatibility -->
<a id="schemamatchequals"></a>
<a id="schema_MatchEquals"></a>
<a id="tocSmatchequals"></a>
<a id="tocsmatchequals"></a>

```json
"string"
```

<h2 id="tocS_MaxBatchSize">MaxBatchSize</h2>
<!-- backwards compatibility -->
<a id="schemamaxbatchsize"></a>
<a id="schema_MaxBatchSize"></a>
<a id="tocSmaxbatchsize"></a>
<a id="tocsmaxbatchsize"></a>

```json
1
```

<h2 id="tocS_OutputArtifact">OutputArtifact</h2>
<!-- backwards compatibility -->
<a id="schemaoutputartifact"></a>
<a id="schema_OutputArtifact"></a>
<a id="tocSoutputartifact"></a>
<a id="tocsoutputartifact"></a>

```json
{
  "name": {}
}
```

Represents information about the output of an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_OutputVariablesKey">OutputVariablesKey</h2>
<!-- backwards compatibility -->
<a id="schemaoutputvariableskey"></a>
<a id="schema_OutputVariablesKey"></a>
<a id="tocSoutputvariableskey"></a>
<a id="tocsoutputvariableskey"></a>

```json
"string"
```

<h2 id="tocS_OutputVariablesValue">OutputVariablesValue</h2>
<!-- backwards compatibility -->
<a id="schemaoutputvariablesvalue"></a>
<a id="schema_OutputVariablesValue"></a>
<a id="tocSoutputvariablesvalue"></a>
<a id="tocsoutputvariablesvalue"></a>

```json
"string"
```

<h2 id="tocS_PipelineArn">PipelineArn</h2>
<!-- backwards compatibility -->
<a id="schemapipelinearn"></a>
<a id="schema_PipelineArn"></a>
<a id="tocSpipelinearn"></a>
<a id="tocspipelinearn"></a>

```json
"string"
```

<h2 id="tocS_StageContext">StageContext</h2>
<!-- backwards compatibility -->
<a id="schemastagecontext"></a>
<a id="schema_StageContext"></a>
<a id="tocSstagecontext"></a>
<a id="tocsstagecontext"></a>

```json
{
  "name": {}
}
```

Represents information about a stage to a job worker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|

<h2 id="tocS_PipelineStageDeclarationList">PipelineStageDeclarationList</h2>
<!-- backwards compatibility -->
<a id="schemapipelinestagedeclarationlist"></a>
<a id="schema_PipelineStageDeclarationList"></a>
<a id="tocSpipelinestagedeclarationlist"></a>
<a id="tocspipelinestagedeclarationlist"></a>

```json
[
  {
    "name": {},
    "blockers": {},
    "actions": {}
  }
]
```

<h2 id="tocS_PipelineExecutionStatus">PipelineExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemapipelineexecutionstatus"></a>
<a id="schema_PipelineExecutionStatus"></a>
<a id="tocSpipelineexecutionstatus"></a>
<a id="tocspipelineexecutionstatus"></a>

```json
"Cancelled"
```

<h2 id="tocS_PipelineExecutionStatusSummary">PipelineExecutionStatusSummary</h2>
<!-- backwards compatibility -->
<a id="schemapipelineexecutionstatussummary"></a>
<a id="schema_PipelineExecutionStatusSummary"></a>
<a id="tocSpipelineexecutionstatussummary"></a>
<a id="tocspipelineexecutionstatussummary"></a>

```json
"string"
```

<h2 id="tocS_SourceRevisionList">SourceRevisionList</h2>
<!-- backwards compatibility -->
<a id="schemasourcerevisionlist"></a>
<a id="schema_SourceRevisionList"></a>
<a id="tocSsourcerevisionlist"></a>
<a id="tocssourcerevisionlist"></a>

```json
[
  {
    "actionName": {},
    "revisionId": {},
    "revisionSummary": {},
    "revisionUrl": {}
  }
]
```

<h2 id="tocS_StopExecutionTrigger">StopExecutionTrigger</h2>
<!-- backwards compatibility -->
<a id="schemastopexecutiontrigger"></a>
<a id="schema_StopExecutionTrigger"></a>
<a id="tocSstopexecutiontrigger"></a>
<a id="tocsstopexecutiontrigger"></a>

```json
{
  "reason": {}
}
```

The interaction that stopped a pipeline execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|object|false|none|none|

<h2 id="tocS_PipelineExecutionSummary">PipelineExecutionSummary</h2>
<!-- backwards compatibility -->
<a id="schemapipelineexecutionsummary"></a>
<a id="schema_PipelineExecutionSummary"></a>
<a id="tocSpipelineexecutionsummary"></a>
<a id="tocspipelineexecutionsummary"></a>

```json
{
  "pipelineExecutionId": {},
  "status": {},
  "startTime": {},
  "lastUpdateTime": {},
  "sourceRevisions": {},
  "trigger": {
    "triggerType": {},
    "triggerDetail": {}
  },
  "stopTrigger": {
    "reason": {}
  }
}
```

Summary information about a pipeline execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineExecutionId|object|false|none|none|
|status|object|false|none|none|
|startTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|sourceRevisions|object|false|none|none|
|trigger|object|false|none|none|
|stopTrigger|object|false|none|none|

<h2 id="tocS_PipelineSummary">PipelineSummary</h2>
<!-- backwards compatibility -->
<a id="schemapipelinesummary"></a>
<a id="schema_PipelineSummary"></a>
<a id="tocSpipelinesummary"></a>
<a id="tocspipelinesummary"></a>

```json
{
  "name": {},
  "version": {},
  "created": {},
  "updated": {}
}
```

Returns a summary of a pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|version|object|false|none|none|
|created|object|false|none|none|
|updated|object|false|none|none|

<h2 id="tocS_StageDeclaration">StageDeclaration</h2>
<!-- backwards compatibility -->
<a id="schemastagedeclaration"></a>
<a id="schema_StageDeclaration"></a>
<a id="tocSstagedeclaration"></a>
<a id="tocsstagedeclaration"></a>

```json
{
  "name": {},
  "blockers": {},
  "actions": {}
}
```

Represents information about a stage and its definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|blockers|object|false|none|none|
|actions|object|true|none|none|

<h2 id="tocS_QueryParamMap">QueryParamMap</h2>
<!-- backwards compatibility -->
<a id="schemaqueryparammap"></a>
<a id="schema_QueryParamMap"></a>
<a id="tocSqueryparammap"></a>
<a id="tocsqueryparammap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ActionConfigurationQueryableValue](#schemaactionconfigurationqueryablevalue)|false|none|none|

<h2 id="tocS_ThirdPartyJobList">ThirdPartyJobList</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyjoblist"></a>
<a id="schema_ThirdPartyJobList"></a>
<a id="tocSthirdpartyjoblist"></a>
<a id="tocsthirdpartyjoblist"></a>

```json
[
  {
    "clientId": {},
    "jobId": {}
  }
]
```

<h2 id="tocS_ServicePrincipal">ServicePrincipal</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprincipal"></a>
<a id="schema_ServicePrincipal"></a>
<a id="tocSserviceprincipal"></a>
<a id="tocsserviceprincipal"></a>

```json
"string"
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

<h2 id="tocS_StageRetryMode">StageRetryMode</h2>
<!-- backwards compatibility -->
<a id="schemastageretrymode"></a>
<a id="schema_StageRetryMode"></a>
<a id="tocSstageretrymode"></a>
<a id="tocsstageretrymode"></a>

```json
"FAILED_ACTIONS"
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

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
"string"
```

<h2 id="tocS_S3Key">S3Key</h2>
<!-- backwards compatibility -->
<a id="schemas3key"></a>
<a id="schema_S3Key"></a>
<a id="tocSs3key"></a>
<a id="tocss3key"></a>

```json
"string"
```

<h2 id="tocS_SourceRevision">SourceRevision</h2>
<!-- backwards compatibility -->
<a id="schemasourcerevision"></a>
<a id="schema_SourceRevision"></a>
<a id="tocSsourcerevision"></a>
<a id="tocssourcerevision"></a>

```json
{
  "actionName": {},
  "revisionId": {},
  "revisionSummary": {},
  "revisionUrl": {}
}
```

Information about the version (or revision) of a source artifact that initiated a pipeline execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionName|object|true|none|none|
|revisionId|object|false|none|none|
|revisionSummary|object|false|none|none|
|revisionUrl|object|false|none|none|

<h2 id="tocS_StageActionDeclarationList">StageActionDeclarationList</h2>
<!-- backwards compatibility -->
<a id="schemastageactiondeclarationlist"></a>
<a id="schema_StageActionDeclarationList"></a>
<a id="tocSstageactiondeclarationlist"></a>
<a id="tocsstageactiondeclarationlist"></a>

```json
[
  {
    "name": {},
    "actionTypeId": {
      "category": {},
      "owner": {},
      "provider": {},
      "version": {}
    },
    "runOrder": {},
    "configuration": {
      "property1": "string",
      "property2": "string"
    },
    "outputArtifacts": {},
    "inputArtifacts": {},
    "roleArn": {},
    "region": {},
    "namespace": {}
  }
]
```

<h2 id="tocS_StageBlockerDeclarationList">StageBlockerDeclarationList</h2>
<!-- backwards compatibility -->
<a id="schemastageblockerdeclarationlist"></a>
<a id="schema_StageBlockerDeclarationList"></a>
<a id="tocSstageblockerdeclarationlist"></a>
<a id="tocsstageblockerdeclarationlist"></a>

```json
[
  {
    "name": {},
    "type": {}
  }
]
```

<h2 id="tocS_StageExecutionStatus">StageExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemastageexecutionstatus"></a>
<a id="schema_StageExecutionStatus"></a>
<a id="tocSstageexecutionstatus"></a>
<a id="tocsstageexecutionstatus"></a>

```json
"Cancelled"
```

<h2 id="tocS_StageExecution">StageExecution</h2>
<!-- backwards compatibility -->
<a id="schemastageexecution"></a>
<a id="schema_StageExecution"></a>
<a id="tocSstageexecution"></a>
<a id="tocsstageexecution"></a>

```json
{
  "pipelineExecutionId": {},
  "status": {}
}
```

Represents information about the run of a stage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineExecutionId|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_TransitionState">TransitionState</h2>
<!-- backwards compatibility -->
<a id="schematransitionstate"></a>
<a id="schema_TransitionState"></a>
<a id="tocStransitionstate"></a>
<a id="tocstransitionstate"></a>

```json
{
  "enabled": {},
  "lastChangedBy": {},
  "lastChangedAt": {},
  "disabledReason": {}
}
```

Represents information about the state of transitions between one stage and another stage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|object|false|none|none|
|lastChangedBy|object|false|none|none|
|lastChangedAt|object|false|none|none|
|disabledReason|object|false|none|none|

<h2 id="tocS_StageState">StageState</h2>
<!-- backwards compatibility -->
<a id="schemastagestate"></a>
<a id="schema_StageState"></a>
<a id="tocSstagestate"></a>
<a id="tocsstagestate"></a>

```json
{
  "stageName": {},
  "inboundExecution": {
    "pipelineExecutionId": {},
    "status": {}
  },
  "inboundTransitionState": {
    "enabled": {},
    "lastChangedBy": {},
    "lastChangedAt": {},
    "disabledReason": {}
  },
  "actionStates": {},
  "latestExecution": {
    "pipelineExecutionId": {},
    "status": {}
  }
}
```

Represents information about the state of the stage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stageName|object|false|none|none|
|inboundExecution|[StageExecution](#schemastageexecution)|false|none|Represents information about the run of a stage.|
|inboundTransitionState|object|false|none|none|
|actionStates|object|false|none|none|
|latestExecution|object|false|none|none|

<h2 id="tocS_StopPipelineExecutionReason">StopPipelineExecutionReason</h2>
<!-- backwards compatibility -->
<a id="schemastoppipelineexecutionreason"></a>
<a id="schema_StopPipelineExecutionReason"></a>
<a id="tocSstoppipelineexecutionreason"></a>
<a id="tocsstoppipelineexecutionreason"></a>

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
  "key": {},
  "value": {}
}
```

A tag is a key-value pair that is used to manage the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

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

<h2 id="tocS_ThirdPartyJob">ThirdPartyJob</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyjob"></a>
<a id="schema_ThirdPartyJob"></a>
<a id="tocSthirdpartyjob"></a>
<a id="tocsthirdpartyjob"></a>

```json
{
  "clientId": {},
  "jobId": {}
}
```

A response to a <code>PollForThirdPartyJobs</code> request returned by CodePipeline when there is a job to be worked on by a partner action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|object|false|none|none|
|jobId|object|false|none|none|

<h2 id="tocS_ThirdPartyJobData">ThirdPartyJobData</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyjobdata"></a>
<a id="schema_ThirdPartyJobData"></a>
<a id="tocSthirdpartyjobdata"></a>
<a id="tocsthirdpartyjobdata"></a>

```json
{
  "actionTypeId": {
    "category": {},
    "owner": {},
    "provider": {},
    "version": {}
  },
  "actionConfiguration": {
    "configuration": {
      "property1": "string",
      "property2": "string"
    }
  },
  "pipelineContext": {
    "pipelineName": {},
    "stage": {
      "name": {}
    },
    "action": {
      "name": {},
      "actionExecutionId": {}
    },
    "pipelineArn": {},
    "pipelineExecutionId": {}
  },
  "inputArtifacts": {},
  "outputArtifacts": {},
  "artifactCredentials": {
    "accessKeyId": {},
    "secretAccessKey": {},
    "sessionToken": {}
  },
  "continuationToken": {},
  "encryptionKey": {
    "id": {},
    "type": {}
  }
}
```

Represents information about the job data for a partner action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionTypeId|object|false|none|none|
|actionConfiguration|object|false|none|none|
|pipelineContext|object|false|none|none|
|inputArtifacts|object|false|none|none|
|outputArtifacts|object|false|none|none|
|artifactCredentials|object|false|none|none|
|continuationToken|object|false|none|none|
|encryptionKey|object|false|none|none|

<h2 id="tocS_WebhookAuthConfigurationAllowedIPRange">WebhookAuthConfigurationAllowedIPRange</h2>
<!-- backwards compatibility -->
<a id="schemawebhookauthconfigurationallowediprange"></a>
<a id="schema_WebhookAuthConfigurationAllowedIPRange"></a>
<a id="tocSwebhookauthconfigurationallowediprange"></a>
<a id="tocswebhookauthconfigurationallowediprange"></a>

```json
"string"
```

<h2 id="tocS_WebhookAuthConfigurationSecretToken">WebhookAuthConfigurationSecretToken</h2>
<!-- backwards compatibility -->
<a id="schemawebhookauthconfigurationsecrettoken"></a>
<a id="schema_WebhookAuthConfigurationSecretToken"></a>
<a id="tocSwebhookauthconfigurationsecrettoken"></a>
<a id="tocswebhookauthconfigurationsecrettoken"></a>

```json
"string"
```

<h2 id="tocS_WebhookAuthConfiguration">WebhookAuthConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemawebhookauthconfiguration"></a>
<a id="schema_WebhookAuthConfiguration"></a>
<a id="tocSwebhookauthconfiguration"></a>
<a id="tocswebhookauthconfiguration"></a>

```json
{
  "AllowedIPRange": {},
  "SecretToken": {}
}
```

The authentication applied to incoming webhook trigger requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowedIPRange|object|false|none|none|
|SecretToken|object|false|none|none|

<h2 id="tocS_WebhookAuthenticationType">WebhookAuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemawebhookauthenticationtype"></a>
<a id="schema_WebhookAuthenticationType"></a>
<a id="tocSwebhookauthenticationtype"></a>
<a id="tocswebhookauthenticationtype"></a>

```json
"GITHUB_HMAC"
```

<h2 id="tocS_WebhookFilters">WebhookFilters</h2>
<!-- backwards compatibility -->
<a id="schemawebhookfilters"></a>
<a id="schema_WebhookFilters"></a>
<a id="tocSwebhookfilters"></a>
<a id="tocswebhookfilters"></a>

```json
[
  {
    "jsonPath": {},
    "matchEquals": {}
  }
]
```

<h2 id="tocS_WebhookFilterRule">WebhookFilterRule</h2>
<!-- backwards compatibility -->
<a id="schemawebhookfilterrule"></a>
<a id="schema_WebhookFilterRule"></a>
<a id="tocSwebhookfilterrule"></a>
<a id="tocswebhookfilterrule"></a>

```json
{
  "jsonPath": {},
  "matchEquals": {}
}
```

The event criteria that specify when a webhook notification is sent to your URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jsonPath|object|true|none|none|
|matchEquals|object|false|none|none|
