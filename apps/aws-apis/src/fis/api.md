<h1 id="aws-fault-injection-simulator">AWS Fault Injection Simulator v2020-12-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Fault Injection Simulator is a managed service that enables you to perform fault injection experiments on your Amazon Web Services workloads. For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">Fault Injection Simulator User Guide</a>.

Base URLs:

* <a href="http://fis.us-east-1.amazonaws.com">http://fis.us-east-1.amazonaws.com</a> - The FIS multi-region endpoint

* <a href="https://fis.us-east-1.amazonaws.com">https://fis.us-east-1.amazonaws.com</a> - The FIS multi-region endpoint

* <a href="http://fis.cn-north-1.amazonaws.com.cn">http://fis.cn-north-1.amazonaws.com.cn</a> - The FIS endpoint for China (Beijing) and China (Ningxia)

* <a href="https://fis.cn-north-1.amazonaws.com.cn">https://fis.cn-north-1.amazonaws.com.cn</a> - The FIS endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/fis/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-fault-injection-simulator-default">Default</h1>

## ListExperimentTemplates

<a id="opIdListExperimentTemplates"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/experimentTemplates \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /experimentTemplates`

Lists your experiment templates.

<h3 id="listexperimenttemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "experimentTemplates": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listexperimenttemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExperimentTemplatesResponse](#schemalistexperimenttemplatesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateExperimentTemplate

<a id="opIdCreateExperimentTemplate"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/experimentTemplates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "description": "string",
    "stopConditions": [
      {
        "source": {},
        "value": {}
      }
    ],
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      }
    },
    "roleArn": "stringstringstringst",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
    }
  }'
```

`POST /experimentTemplates`

<p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>

> Body parameter

```json
{
  "clientToken": "string",
  "description": "string",
  "stopConditions": [
    {
      "source": {},
      "value": {}
    }
  ],
  "targets": {
    "property1": {
      "resourceType": {},
      "resourceArns": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "filters": {},
      "selectionMode": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "resourceType": {},
      "resourceArns": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "filters": {},
      "selectionMode": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "actions": {
    "property1": {
      "actionId": {},
      "description": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "targets": {
        "property1": "string",
        "property2": "string"
      },
      "startAfter": {}
    },
    "property2": {
      "actionId": {},
      "description": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "targets": {
        "property1": "string",
        "property2": "string"
      },
      "startAfter": {}
    }
  },
  "roleArn": "stringstringstringst",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "logConfiguration": {
    "cloudWatchLogsConfiguration": {
      "logGroupArn": {}
    },
    "s3Configuration": {
      "bucketName": {},
      "prefix": {}
    },
    "logSchemaVersion": {}
  }
}
```

<h3 id="createexperimenttemplate-parameters">Parameters</h3>

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
|» clientToken|body|string|true|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» description|body|string|true|A description for the experiment template.|
|» stopConditions|body|[[CreateExperimentTemplateStopConditionInput](#schemacreateexperimenttemplatestopconditioninput)]|true|The stop conditions.|
|» targets|body|object|false|The targets for the experiment.|
|» » **additionalProperties**|body|[CreateExperimentTemplateTargetInput](#schemacreateexperimenttemplatetargetinput)|false|<p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html">Targets</a> in the <i>Fault Injection Simulator User Guide</i>.</p>|
|» actions|body|object|true|The actions for the experiment.|
|» » **additionalProperties**|body|[CreateExperimentTemplateActionInput](#schemacreateexperimenttemplateactioninput)|false|<p>Specifies an action for an experiment template.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/actions.html">Actions</a> in the <i>Fault Injection Simulator User Guide</i>.</p>|
|» roleArn|body|string|true|The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.|
|» tags|body|object|false|The tags to apply to the experiment template.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» logConfiguration|body|object|false|Specifies the configuration for experiment logging.|
|» » cloudWatchLogsConfiguration|body|object|false|none|
|» » » logGroupArn|body|object|true|none|
|» » s3Configuration|body|object|false|none|
|» » » bucketName|body|object|true|none|
|» » » prefix|body|object|false|none|
|» » logSchemaVersion|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "experimentTemplate": {
    "id": {},
    "description": {},
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "roleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
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

<h3 id="createexperimenttemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateExperimentTemplateResponse](#schemacreateexperimenttemplateresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetExperimentTemplate

<a id="opIdGetExperimentTemplate"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/experimentTemplates/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /experimentTemplates/{id}`

Gets information about the specified experiment template.

<h3 id="getexperimenttemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the experiment template.|
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
  "experimentTemplate": {
    "id": {},
    "description": {},
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "roleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
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

<h3 id="getexperimenttemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetExperimentTemplateResponse](#schemagetexperimenttemplateresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteExperimentTemplate

<a id="opIdDeleteExperimentTemplate"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/experimentTemplates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /experimentTemplates/{id}`

Deletes the specified experiment template.

<h3 id="deleteexperimenttemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the experiment template.|
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
  "experimentTemplate": {
    "id": {},
    "description": {},
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "roleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
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

<h3 id="deleteexperimenttemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteExperimentTemplateResponse](#schemadeleteexperimenttemplateresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateExperimentTemplate

<a id="opIdUpdateExperimentTemplate"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/experimentTemplates/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "stopConditions": [
      {
        "source": {},
        "value": {}
      }
    ],
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      }
    },
    "roleArn": "stringstringstringst",
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
    }
  }'
```

`PATCH /experimentTemplates/{id}`

Updates the specified experiment template.

> Body parameter

```json
{
  "description": "string",
  "stopConditions": [
    {
      "source": {},
      "value": {}
    }
  ],
  "targets": {
    "property1": {
      "resourceType": {},
      "resourceArns": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "filters": {},
      "selectionMode": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "resourceType": {},
      "resourceArns": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "filters": {},
      "selectionMode": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "actions": {
    "property1": {
      "actionId": {},
      "description": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "targets": {
        "property1": "string",
        "property2": "string"
      },
      "startAfter": {}
    },
    "property2": {
      "actionId": {},
      "description": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "targets": {
        "property1": "string",
        "property2": "string"
      },
      "startAfter": {}
    }
  },
  "roleArn": "stringstringstringst",
  "logConfiguration": {
    "cloudWatchLogsConfiguration": {
      "logGroupArn": {}
    },
    "s3Configuration": {
      "bucketName": {},
      "prefix": {}
    },
    "logSchemaVersion": {}
  }
}
```

<h3 id="updateexperimenttemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the experiment template.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|A description for the template.|
|» stopConditions|body|[[UpdateExperimentTemplateStopConditionInput](#schemaupdateexperimenttemplatestopconditioninput)]|false|The stop conditions for the experiment.|
|» targets|body|object|false|The targets for the experiment.|
|» » **additionalProperties**|body|[UpdateExperimentTemplateTargetInput](#schemaupdateexperimenttemplatetargetinput)|false|Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both.|
|» actions|body|object|false|The actions for the experiment.|
|» » **additionalProperties**|body|[UpdateExperimentTemplateActionInputItem](#schemaupdateexperimenttemplateactioninputitem)|false|Specifies an action for an experiment template.|
|» roleArn|body|string|false|The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.|
|» logConfiguration|body|object|false|Specifies the configuration for experiment logging.|
|» » cloudWatchLogsConfiguration|body|object|false|none|
|» » » logGroupArn|body|object|true|none|
|» » s3Configuration|body|object|false|none|
|» » » bucketName|body|object|true|none|
|» » » prefix|body|object|false|none|
|» » logSchemaVersion|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "experimentTemplate": {
    "id": {},
    "description": {},
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "roleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
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

<h3 id="updateexperimenttemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateExperimentTemplateResponse](#schemaupdateexperimenttemplateresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAction

<a id="opIdGetAction"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/actions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /actions/{id}`

Gets information about the specified FIS action.

<h3 id="getaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the action.|
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
  "action": {
    "id": {},
    "description": {},
    "parameters": {
      "property1": {
        "description": {},
        "required": {}
      },
      "property2": {
        "description": {},
        "required": {}
      }
    },
    "targets": {
      "property1": {
        "resourceType": {}
      },
      "property2": {
        "resourceType": {}
      }
    },
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

<h3 id="getaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetActionResponse](#schemagetactionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetExperiment

<a id="opIdGetExperiment"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/experiments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /experiments/{id}`

Gets information about the specified experiment.

<h3 id="getexperiment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the experiment.|
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
  "experiment": {
    "id": {},
    "experimentTemplateId": {},
    "roleArn": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {},
        "state": {
          "status": {},
          "reason": {}
        },
        "startTime": {},
        "endTime": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {},
        "state": {
          "status": {},
          "reason": {}
        },
        "startTime": {},
        "endTime": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "startTime": {},
    "endTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
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

<h3 id="getexperiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetExperimentResponse](#schemagetexperimentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopExperiment

<a id="opIdStopExperiment"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/experiments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /experiments/{id}`

Stops the specified experiment.

<h3 id="stopexperiment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the experiment.|
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
  "experiment": {
    "id": {},
    "experimentTemplateId": {},
    "roleArn": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {},
        "state": {
          "status": {},
          "reason": {}
        },
        "startTime": {},
        "endTime": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {},
        "state": {
          "status": {},
          "reason": {}
        },
        "startTime": {},
        "endTime": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "startTime": {},
    "endTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
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

<h3 id="stopexperiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopExperimentResponse](#schemastopexperimentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTargetResourceType

<a id="opIdGetTargetResourceType"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/targetResourceTypes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /targetResourceTypes/{resourceType}`

Gets information about the specified resource type.

<h3 id="gettargetresourcetype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceType|path|string|true|The resource type.|
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
  "targetResourceType": {
    "resourceType": {},
    "description": {},
    "parameters": {
      "property1": {
        "description": {},
        "required": {}
      },
      "property2": {
        "description": {},
        "required": {}
      }
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

<h3 id="gettargetresourcetype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTargetResourceTypeResponse](#schemagettargetresourcetyperesponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListActions

<a id="opIdListActions"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/actions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /actions`

Lists the available FIS actions.

<h3 id="listactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "actions": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListActionsResponse](#schemalistactionsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListExperiments

<a id="opIdListExperiments"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/experiments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /experiments`

Lists your experiments.

<h3 id="listexperiments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "experiments": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listexperiments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExperimentsResponse](#schemalistexperimentsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartExperiment

<a id="opIdStartExperiment"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/experiments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "experimentTemplateId": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /experiments`

Starts running an experiment from the specified experiment template.

> Body parameter

```json
{
  "clientToken": "string",
  "experimentTemplateId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="startexperiment-parameters">Parameters</h3>

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
|» clientToken|body|string|true|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» experimentTemplateId|body|string|true|The ID of the experiment template.|
|» tags|body|object|false|The tags to apply to the experiment.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "experiment": {
    "id": {},
    "experimentTemplateId": {},
    "roleArn": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {},
        "state": {
          "status": {},
          "reason": {}
        },
        "startTime": {},
        "endTime": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {},
        "state": {
          "status": {},
          "reason": {}
        },
        "startTime": {},
        "endTime": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "startTime": {},
    "endTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
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

<h3 id="startexperiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartExperimentResponse](#schemastartexperimentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/tags/stringstringstringst \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Lists the tags for the specified resource.

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
curl https://fis.us-east-1.amazonaws.com/tags/stringstringstringst \
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

Applies the specified tags to the specified resource.

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
|» tags|body|object|true|The tags for the resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/tags/stringstringstringst \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}`

Removes the specified tags from the specified resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|tagKeys|query|[[TagKey](#schematagkey)]|false|The tag keys to remove.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTargetResourceTypes

<a id="opIdListTargetResourceTypes"></a>

> Code samples

```bash
curl https://fis.us-east-1.amazonaws.com/targetResourceTypes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /targetResourceTypes`

Lists the target resource types.

<h3 id="listtargetresourcetypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.|
|nextToken|query|string|false|The token for the next page of results.|
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
  "targetResourceTypes": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listtargetresourcetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTargetResourceTypesResponse](#schemalisttargetresourcetypesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateExperimentTemplateResponse">CreateExperimentTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimenttemplateresponse"></a>
<a id="schema_CreateExperimentTemplateResponse"></a>
<a id="tocScreateexperimenttemplateresponse"></a>
<a id="tocscreateexperimenttemplateresponse"></a>

```json
{
  "experimentTemplate": {
    "id": {},
    "description": {},
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "roleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experimentTemplate|object|false|none|none|

<h2 id="tocS_CreateExperimentTemplateStopConditionInput">CreateExperimentTemplateStopConditionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimenttemplatestopconditioninput"></a>
<a id="schema_CreateExperimentTemplateStopConditionInput"></a>
<a id="tocScreateexperimenttemplatestopconditioninput"></a>
<a id="tocscreateexperimenttemplatestopconditioninput"></a>

```json
{
  "source": {},
  "value": {}
}
```

Specifies a stop condition for an experiment template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|true|none|none|
|value|object|false|none|none|

<h2 id="tocS_CreateExperimentTemplateTargetInput">CreateExperimentTemplateTargetInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimenttemplatetargetinput"></a>
<a id="schema_CreateExperimentTemplateTargetInput"></a>
<a id="tocScreateexperimenttemplatetargetinput"></a>
<a id="tocscreateexperimenttemplatetargetinput"></a>

```json
{
  "resourceType": {},
  "resourceArns": {},
  "resourceTags": {
    "property1": "string",
    "property2": "string"
  },
  "filters": {},
  "selectionMode": {},
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html">Targets</a> in the <i>Fault Injection Simulator User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resourceArns|object|false|none|none|
|resourceTags|object|false|none|none|
|filters|object|false|none|none|
|selectionMode|object|true|none|none|
|parameters|object|false|none|none|

<h2 id="tocS_CreateExperimentTemplateActionInput">CreateExperimentTemplateActionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimenttemplateactioninput"></a>
<a id="schema_CreateExperimentTemplateActionInput"></a>
<a id="tocScreateexperimenttemplateactioninput"></a>
<a id="tocscreateexperimenttemplateactioninput"></a>

```json
{
  "actionId": {},
  "description": {},
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "targets": {
    "property1": "string",
    "property2": "string"
  },
  "startAfter": {}
}
```

<p>Specifies an action for an experiment template.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/actions.html">Actions</a> in the <i>Fault Injection Simulator User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionId|object|true|none|none|
|description|object|false|none|none|
|parameters|object|false|none|none|
|targets|object|false|none|none|
|startAfter|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTemplateCloudWatchLogsLogConfigurationInput">ExperimentTemplateCloudWatchLogsLogConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatecloudwatchlogslogconfigurationinput"></a>
<a id="schema_ExperimentTemplateCloudWatchLogsLogConfigurationInput"></a>
<a id="tocSexperimenttemplatecloudwatchlogslogconfigurationinput"></a>
<a id="tocsexperimenttemplatecloudwatchlogslogconfigurationinput"></a>

```json
{
  "logGroupArn": {}
}
```

Specifies the configuration for experiment logging to Amazon CloudWatch Logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupArn|object|true|none|none|

<h2 id="tocS_ExperimentTemplateS3LogConfigurationInput">ExperimentTemplateS3LogConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplates3logconfigurationinput"></a>
<a id="schema_ExperimentTemplateS3LogConfigurationInput"></a>
<a id="tocSexperimenttemplates3logconfigurationinput"></a>
<a id="tocsexperimenttemplates3logconfigurationinput"></a>

```json
{
  "bucketName": {},
  "prefix": {}
}
```

Specifies the configuration for experiment logging to Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|prefix|object|false|none|none|

<h2 id="tocS_LogSchemaVersion">LogSchemaVersion</h2>
<!-- backwards compatibility -->
<a id="schemalogschemaversion"></a>
<a id="schema_LogSchemaVersion"></a>
<a id="tocSlogschemaversion"></a>
<a id="tocslogschemaversion"></a>

```json
0
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

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_DeleteExperimentTemplateResponse">DeleteExperimentTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteexperimenttemplateresponse"></a>
<a id="schema_DeleteExperimentTemplateResponse"></a>
<a id="tocSdeleteexperimenttemplateresponse"></a>
<a id="tocsdeleteexperimenttemplateresponse"></a>

```json
{
  "experimentTemplate": {
    "id": {},
    "description": {},
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "roleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experimentTemplate|object|false|none|none|

<h2 id="tocS_GetActionResponse">GetActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetactionresponse"></a>
<a id="schema_GetActionResponse"></a>
<a id="tocSgetactionresponse"></a>
<a id="tocsgetactionresponse"></a>

```json
{
  "action": {
    "id": {},
    "description": {},
    "parameters": {
      "property1": {
        "description": {},
        "required": {}
      },
      "property2": {
        "description": {},
        "required": {}
      }
    },
    "targets": {
      "property1": {
        "resourceType": {}
      },
      "property2": {
        "resourceType": {}
      }
    },
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
|action|object|false|none|none|

<h2 id="tocS_GetExperimentResponse">GetExperimentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetexperimentresponse"></a>
<a id="schema_GetExperimentResponse"></a>
<a id="tocSgetexperimentresponse"></a>
<a id="tocsgetexperimentresponse"></a>

```json
{
  "experiment": {
    "id": {},
    "experimentTemplateId": {},
    "roleArn": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {},
        "state": {
          "status": {},
          "reason": {}
        },
        "startTime": {},
        "endTime": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {},
        "state": {
          "status": {},
          "reason": {}
        },
        "startTime": {},
        "endTime": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "startTime": {},
    "endTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experiment|object|false|none|none|

<h2 id="tocS_GetExperimentTemplateResponse">GetExperimentTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetexperimenttemplateresponse"></a>
<a id="schema_GetExperimentTemplateResponse"></a>
<a id="tocSgetexperimenttemplateresponse"></a>
<a id="tocsgetexperimenttemplateresponse"></a>

```json
{
  "experimentTemplate": {
    "id": {},
    "description": {},
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "roleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experimentTemplate|object|false|none|none|

<h2 id="tocS_GetTargetResourceTypeResponse">GetTargetResourceTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettargetresourcetyperesponse"></a>
<a id="schema_GetTargetResourceTypeResponse"></a>
<a id="tocSgettargetresourcetyperesponse"></a>
<a id="tocsgettargetresourcetyperesponse"></a>

```json
{
  "targetResourceType": {
    "resourceType": {},
    "description": {},
    "parameters": {
      "property1": {
        "description": {},
        "required": {}
      },
      "property2": {
        "description": {},
        "required": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetResourceType|object|false|none|none|

<h2 id="tocS_ListActionsResponse">ListActionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistactionsresponse"></a>
<a id="schema_ListActionsResponse"></a>
<a id="tocSlistactionsresponse"></a>
<a id="tocslistactionsresponse"></a>

```json
{
  "actions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListExperimentTemplatesResponse">ListExperimentTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexperimenttemplatesresponse"></a>
<a id="schema_ListExperimentTemplatesResponse"></a>
<a id="tocSlistexperimenttemplatesresponse"></a>
<a id="tocslistexperimenttemplatesresponse"></a>

```json
{
  "experimentTemplates": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experimentTemplates|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListExperimentsResponse">ListExperimentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexperimentsresponse"></a>
<a id="schema_ListExperimentsResponse"></a>
<a id="tocSlistexperimentsresponse"></a>
<a id="tocslistexperimentsresponse"></a>

```json
{
  "experiments": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experiments|object|false|none|none|
|nextToken|object|false|none|none|

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

<h2 id="tocS_ListTargetResourceTypesResponse">ListTargetResourceTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetresourcetypesresponse"></a>
<a id="schema_ListTargetResourceTypesResponse"></a>
<a id="tocSlisttargetresourcetypesresponse"></a>
<a id="tocslisttargetresourcetypesresponse"></a>

```json
{
  "targetResourceTypes": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetResourceTypes|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_StartExperimentResponse">StartExperimentResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartexperimentresponse"></a>
<a id="schema_StartExperimentResponse"></a>
<a id="tocSstartexperimentresponse"></a>
<a id="tocsstartexperimentresponse"></a>

```json
{
  "experiment": {
    "id": {},
    "experimentTemplateId": {},
    "roleArn": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {},
        "state": {
          "status": {},
          "reason": {}
        },
        "startTime": {},
        "endTime": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {},
        "state": {
          "status": {},
          "reason": {}
        },
        "startTime": {},
        "endTime": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "startTime": {},
    "endTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experiment|object|false|none|none|

<h2 id="tocS_StopExperimentResponse">StopExperimentResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopexperimentresponse"></a>
<a id="schema_StopExperimentResponse"></a>
<a id="tocSstopexperimentresponse"></a>
<a id="tocsstopexperimentresponse"></a>

```json
{
  "experiment": {
    "id": {},
    "experimentTemplateId": {},
    "roleArn": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {},
        "state": {
          "status": {},
          "reason": {}
        },
        "startTime": {},
        "endTime": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {},
        "state": {
          "status": {},
          "reason": {}
        },
        "startTime": {},
        "endTime": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "startTime": {},
    "endTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experiment|object|false|none|none|

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

<h2 id="tocS_UpdateExperimentTemplateResponse">UpdateExperimentTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexperimenttemplateresponse"></a>
<a id="schema_UpdateExperimentTemplateResponse"></a>
<a id="tocSupdateexperimenttemplateresponse"></a>
<a id="tocsupdateexperimenttemplateresponse"></a>

```json
{
  "experimentTemplate": {
    "id": {},
    "description": {},
    "targets": {
      "property1": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "resourceType": {},
        "resourceArns": {},
        "resourceTags": {
          "property1": "string",
          "property2": "string"
        },
        "filters": {},
        "selectionMode": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "actions": {
      "property1": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      },
      "property2": {
        "actionId": {},
        "description": {},
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "targets": {
          "property1": "string",
          "property2": "string"
        },
        "startAfter": {}
      }
    },
    "stopConditions": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "roleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "logConfiguration": {
      "cloudWatchLogsConfiguration": {
        "logGroupArn": {}
      },
      "s3Configuration": {
        "bucketName": {},
        "prefix": {}
      },
      "logSchemaVersion": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experimentTemplate|object|false|none|none|

<h2 id="tocS_UpdateExperimentTemplateStopConditionInput">UpdateExperimentTemplateStopConditionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexperimenttemplatestopconditioninput"></a>
<a id="schema_UpdateExperimentTemplateStopConditionInput"></a>
<a id="tocSupdateexperimenttemplatestopconditioninput"></a>
<a id="tocsupdateexperimenttemplatestopconditioninput"></a>

```json
{
  "source": {},
  "value": {}
}
```

Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|true|none|none|
|value|object|false|none|none|

<h2 id="tocS_UpdateExperimentTemplateTargetInput">UpdateExperimentTemplateTargetInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexperimenttemplatetargetinput"></a>
<a id="schema_UpdateExperimentTemplateTargetInput"></a>
<a id="tocSupdateexperimenttemplatetargetinput"></a>
<a id="tocsupdateexperimenttemplatetargetinput"></a>

```json
{
  "resourceType": {},
  "resourceArns": {},
  "resourceTags": {
    "property1": "string",
    "property2": "string"
  },
  "filters": {},
  "selectionMode": {},
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|true|none|none|
|resourceArns|object|false|none|none|
|resourceTags|object|false|none|none|
|filters|object|false|none|none|
|selectionMode|object|true|none|none|
|parameters|object|false|none|none|

<h2 id="tocS_UpdateExperimentTemplateActionInputItem">UpdateExperimentTemplateActionInputItem</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexperimenttemplateactioninputitem"></a>
<a id="schema_UpdateExperimentTemplateActionInputItem"></a>
<a id="tocSupdateexperimenttemplateactioninputitem"></a>
<a id="tocsupdateexperimenttemplateactioninputitem"></a>

```json
{
  "actionId": {},
  "description": {},
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "targets": {
    "property1": "string",
    "property2": "string"
  },
  "startAfter": {}
}
```

Specifies an action for an experiment template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionId|object|false|none|none|
|description|object|false|none|none|
|parameters|object|false|none|none|
|targets|object|false|none|none|
|startAfter|object|false|none|none|

<h2 id="tocS_ActionId">ActionId</h2>
<!-- backwards compatibility -->
<a id="schemaactionid"></a>
<a id="schema_ActionId"></a>
<a id="tocSactionid"></a>
<a id="tocsactionid"></a>

```json
"string"
```

<h2 id="tocS_ActionDescription">ActionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaactiondescription"></a>
<a id="schema_ActionDescription"></a>
<a id="tocSactiondescription"></a>
<a id="tocsactiondescription"></a>

```json
"string"
```

<h2 id="tocS_ActionParameterMap">ActionParameterMap</h2>
<!-- backwards compatibility -->
<a id="schemaactionparametermap"></a>
<a id="schema_ActionParameterMap"></a>
<a id="tocSactionparametermap"></a>
<a id="tocsactionparametermap"></a>

```json
{
  "property1": {
    "description": {},
    "required": {}
  },
  "property2": {
    "description": {},
    "required": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ActionParameter](#schemaactionparameter)|false|none|Describes a parameter for an action.|

<h2 id="tocS_ActionTargetMap">ActionTargetMap</h2>
<!-- backwards compatibility -->
<a id="schemaactiontargetmap"></a>
<a id="schema_ActionTargetMap"></a>
<a id="tocSactiontargetmap"></a>
<a id="tocsactiontargetmap"></a>

```json
{
  "property1": {
    "resourceType": {}
  },
  "property2": {
    "resourceType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ActionTarget](#schemaactiontarget)|false|none|Describes a target for an action.|

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

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "id": {},
  "description": {},
  "parameters": {
    "property1": {
      "description": {},
      "required": {}
    },
    "property2": {
      "description": {},
      "required": {}
    }
  },
  "targets": {
    "property1": {
      "resourceType": {}
    },
    "property2": {
      "resourceType": {}
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Describes an action. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html">FIS actions</a> in the <i>Fault Injection Simulator User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|description|object|false|none|none|
|parameters|object|false|none|none|
|targets|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ActionParameterDescription">ActionParameterDescription</h2>
<!-- backwards compatibility -->
<a id="schemaactionparameterdescription"></a>
<a id="schema_ActionParameterDescription"></a>
<a id="tocSactionparameterdescription"></a>
<a id="tocsactionparameterdescription"></a>

```json
"string"
```

<h2 id="tocS_ActionParameterRequired">ActionParameterRequired</h2>
<!-- backwards compatibility -->
<a id="schemaactionparameterrequired"></a>
<a id="schema_ActionParameterRequired"></a>
<a id="tocSactionparameterrequired"></a>
<a id="tocsactionparameterrequired"></a>

```json
true
```

<h2 id="tocS_ActionParameter">ActionParameter</h2>
<!-- backwards compatibility -->
<a id="schemaactionparameter"></a>
<a id="schema_ActionParameter"></a>
<a id="tocSactionparameter"></a>
<a id="tocsactionparameter"></a>

```json
{
  "description": {},
  "required": {}
}
```

Describes a parameter for an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|required|object|false|none|none|

<h2 id="tocS_ActionParameterName">ActionParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaactionparametername"></a>
<a id="schema_ActionParameterName"></a>
<a id="tocSactionparametername"></a>
<a id="tocsactionparametername"></a>

```json
"string"
```

<h2 id="tocS_ActionSummary">ActionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaactionsummary"></a>
<a id="schema_ActionSummary"></a>
<a id="tocSactionsummary"></a>
<a id="tocsactionsummary"></a>

```json
{
  "id": {},
  "description": {},
  "targets": {
    "property1": {
      "resourceType": {}
    },
    "property2": {
      "resourceType": {}
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Provides a summary of an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|description|object|false|none|none|
|targets|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ActionSummaryList">ActionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaactionsummarylist"></a>
<a id="schema_ActionSummaryList"></a>
<a id="tocSactionsummarylist"></a>
<a id="tocsactionsummarylist"></a>

```json
[
  {
    "id": {},
    "description": {},
    "targets": {
      "property1": {
        "resourceType": {}
      },
      "property2": {
        "resourceType": {}
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_TargetResourceTypeId">TargetResourceTypeId</h2>
<!-- backwards compatibility -->
<a id="schematargetresourcetypeid"></a>
<a id="schema_TargetResourceTypeId"></a>
<a id="tocStargetresourcetypeid"></a>
<a id="tocstargetresourcetypeid"></a>

```json
"string"
```

<h2 id="tocS_ActionTarget">ActionTarget</h2>
<!-- backwards compatibility -->
<a id="schemaactiontarget"></a>
<a id="schema_ActionTarget"></a>
<a id="tocSactiontarget"></a>
<a id="tocsactiontarget"></a>

```json
{
  "resourceType": {}
}
```

Describes a target for an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|false|none|none|

<h2 id="tocS_ActionTargetName">ActionTargetName</h2>
<!-- backwards compatibility -->
<a id="schemaactiontargetname"></a>
<a id="schema_ActionTargetName"></a>
<a id="tocSactiontargetname"></a>
<a id="tocsactiontargetname"></a>

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

<h2 id="tocS_CloudWatchLogGroupArn">CloudWatchLogGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggrouparn"></a>
<a id="schema_CloudWatchLogGroupArn"></a>
<a id="tocScloudwatchloggrouparn"></a>
<a id="tocscloudwatchloggrouparn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ExperimentTemplateActionDescription">ExperimentTemplateActionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplateactiondescription"></a>
<a id="schema_ExperimentTemplateActionDescription"></a>
<a id="tocSexperimenttemplateactiondescription"></a>
<a id="tocsexperimenttemplateactiondescription"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTemplateActionParameterMap">ExperimentTemplateActionParameterMap</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplateactionparametermap"></a>
<a id="schema_ExperimentTemplateActionParameterMap"></a>
<a id="tocSexperimenttemplateactionparametermap"></a>
<a id="tocsexperimenttemplateactionparametermap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ExperimentTemplateActionParameter](#schemaexperimenttemplateactionparameter)|false|none|none|

<h2 id="tocS_ExperimentTemplateActionTargetMap">ExperimentTemplateActionTargetMap</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplateactiontargetmap"></a>
<a id="schema_ExperimentTemplateActionTargetMap"></a>
<a id="tocSexperimenttemplateactiontargetmap"></a>
<a id="tocsexperimenttemplateactiontargetmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ExperimentTemplateTargetName](#schemaexperimenttemplatetargetname)|false|none|none|

<h2 id="tocS_ExperimentTemplateActionStartAfterList">ExperimentTemplateActionStartAfterList</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplateactionstartafterlist"></a>
<a id="schema_ExperimentTemplateActionStartAfterList"></a>
<a id="tocSexperimenttemplateactionstartafterlist"></a>
<a id="tocsexperimenttemplateactionstartafterlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateExperimentTemplateActionInputMap">CreateExperimentTemplateActionInputMap</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimenttemplateactioninputmap"></a>
<a id="schema_CreateExperimentTemplateActionInputMap"></a>
<a id="tocScreateexperimenttemplateactioninputmap"></a>
<a id="tocscreateexperimenttemplateactioninputmap"></a>

```json
{
  "property1": {
    "actionId": {},
    "description": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "targets": {
      "property1": "string",
      "property2": "string"
    },
    "startAfter": {}
  },
  "property2": {
    "actionId": {},
    "description": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "targets": {
      "property1": "string",
      "property2": "string"
    },
    "startAfter": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[CreateExperimentTemplateActionInput](#schemacreateexperimenttemplateactioninput)|false|none|<p>Specifies an action for an experiment template.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/actions.html">Actions</a> in the <i>Fault Injection Simulator User Guide</i>.</p>|

<h2 id="tocS_CreateExperimentTemplateLogConfigurationInput">CreateExperimentTemplateLogConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimenttemplatelogconfigurationinput"></a>
<a id="schema_CreateExperimentTemplateLogConfigurationInput"></a>
<a id="tocScreateexperimenttemplatelogconfigurationinput"></a>
<a id="tocscreateexperimenttemplatelogconfigurationinput"></a>

```json
{
  "cloudWatchLogsConfiguration": {
    "logGroupArn": {}
  },
  "s3Configuration": {
    "bucketName": {},
    "prefix": {}
  },
  "logSchemaVersion": {}
}
```

Specifies the configuration for experiment logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudWatchLogsConfiguration|object|false|none|none|
|s3Configuration|object|false|none|none|
|logSchemaVersion|object|true|none|none|

<h2 id="tocS_ExperimentTemplateDescription">ExperimentTemplateDescription</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatedescription"></a>
<a id="schema_ExperimentTemplateDescription"></a>
<a id="tocSexperimenttemplatedescription"></a>
<a id="tocsexperimenttemplatedescription"></a>

```json
"string"
```

<h2 id="tocS_CreateExperimentTemplateStopConditionInputList">CreateExperimentTemplateStopConditionInputList</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimenttemplatestopconditioninputlist"></a>
<a id="schema_CreateExperimentTemplateStopConditionInputList"></a>
<a id="tocScreateexperimenttemplatestopconditioninputlist"></a>
<a id="tocscreateexperimenttemplatestopconditioninputlist"></a>

```json
[
  {
    "source": {},
    "value": {}
  }
]
```

<h2 id="tocS_CreateExperimentTemplateTargetInputMap">CreateExperimentTemplateTargetInputMap</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimenttemplatetargetinputmap"></a>
<a id="schema_CreateExperimentTemplateTargetInputMap"></a>
<a id="tocScreateexperimenttemplatetargetinputmap"></a>
<a id="tocscreateexperimenttemplatetargetinputmap"></a>

```json
{
  "property1": {
    "resourceType": {},
    "resourceArns": {},
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "filters": {},
    "selectionMode": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  },
  "property2": {
    "resourceType": {},
    "resourceArns": {},
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "filters": {},
    "selectionMode": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[CreateExperimentTemplateTargetInput](#schemacreateexperimenttemplatetargetinput)|false|none|<p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html">Targets</a> in the <i>Fault Injection Simulator User Guide</i>.</p>|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_CreateExperimentTemplateRequest">CreateExperimentTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimenttemplaterequest"></a>
<a id="schema_CreateExperimentTemplateRequest"></a>
<a id="tocScreateexperimenttemplaterequest"></a>
<a id="tocscreateexperimenttemplaterequest"></a>

```json
{
  "clientToken": {},
  "description": {},
  "stopConditions": {},
  "targets": {
    "property1": {
      "resourceType": {},
      "resourceArns": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "filters": {},
      "selectionMode": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "resourceType": {},
      "resourceArns": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "filters": {},
      "selectionMode": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "actions": {
    "property1": {
      "actionId": {},
      "description": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "targets": {
        "property1": "string",
        "property2": "string"
      },
      "startAfter": {}
    },
    "property2": {
      "actionId": {},
      "description": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "targets": {
        "property1": "string",
        "property2": "string"
      },
      "startAfter": {}
    }
  },
  "roleArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "logConfiguration": {
    "cloudWatchLogsConfiguration": {
      "logGroupArn": {}
    },
    "s3Configuration": {
      "bucketName": {},
      "prefix": {}
    },
    "logSchemaVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|true|none|none|
|description|object|true|none|none|
|stopConditions|object|true|none|none|
|targets|object|false|none|none|
|actions|object|true|none|none|
|roleArn|object|true|none|none|
|tags|object|false|none|none|
|logConfiguration|object|false|none|none|

<h2 id="tocS_ExperimentTemplate">ExperimentTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplate"></a>
<a id="schema_ExperimentTemplate"></a>
<a id="tocSexperimenttemplate"></a>
<a id="tocsexperimenttemplate"></a>

```json
{
  "id": {},
  "description": {},
  "targets": {
    "property1": {
      "resourceType": {},
      "resourceArns": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "filters": {},
      "selectionMode": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "resourceType": {},
      "resourceArns": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "filters": {},
      "selectionMode": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "actions": {
    "property1": {
      "actionId": {},
      "description": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "targets": {
        "property1": "string",
        "property2": "string"
      },
      "startAfter": {}
    },
    "property2": {
      "actionId": {},
      "description": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "targets": {
        "property1": "string",
        "property2": "string"
      },
      "startAfter": {}
    }
  },
  "stopConditions": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "roleArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "logConfiguration": {
    "cloudWatchLogsConfiguration": {
      "logGroupArn": {}
    },
    "s3Configuration": {
      "bucketName": {},
      "prefix": {}
    },
    "logSchemaVersion": {}
  }
}
```

Describes an experiment template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|description|object|false|none|none|
|targets|object|false|none|none|
|actions|object|false|none|none|
|stopConditions|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|roleArn|object|false|none|none|
|tags|object|false|none|none|
|logConfiguration|object|false|none|none|

<h2 id="tocS_StopConditionSource">StopConditionSource</h2>
<!-- backwards compatibility -->
<a id="schemastopconditionsource"></a>
<a id="schema_StopConditionSource"></a>
<a id="tocSstopconditionsource"></a>
<a id="tocsstopconditionsource"></a>

```json
"string"
```

<h2 id="tocS_StopConditionValue">StopConditionValue</h2>
<!-- backwards compatibility -->
<a id="schemastopconditionvalue"></a>
<a id="schema_StopConditionValue"></a>
<a id="tocSstopconditionvalue"></a>
<a id="tocsstopconditionvalue"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ResourceArnList">ResourceArnList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnlist"></a>
<a id="schema_ResourceArnList"></a>
<a id="tocSresourcearnlist"></a>
<a id="tocsresourcearnlist"></a>

```json
[
  "stringstringstringst"
]
```

<h2 id="tocS_ExperimentTemplateTargetFilterInputList">ExperimentTemplateTargetFilterInputList</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetargetfilterinputlist"></a>
<a id="schema_ExperimentTemplateTargetFilterInputList"></a>
<a id="tocSexperimenttemplatetargetfilterinputlist"></a>
<a id="tocsexperimenttemplatetargetfilterinputlist"></a>

```json
[
  {
    "path": {},
    "values": {}
  }
]
```

<h2 id="tocS_ExperimentTemplateTargetSelectionMode">ExperimentTemplateTargetSelectionMode</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetargetselectionmode"></a>
<a id="schema_ExperimentTemplateTargetSelectionMode"></a>
<a id="tocSexperimenttemplatetargetselectionmode"></a>
<a id="tocsexperimenttemplatetargetselectionmode"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTemplateTargetParameterMap">ExperimentTemplateTargetParameterMap</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetargetparametermap"></a>
<a id="schema_ExperimentTemplateTargetParameterMap"></a>
<a id="tocSexperimenttemplatetargetparametermap"></a>
<a id="tocsexperimenttemplatetargetparametermap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ExperimentTemplateTargetParameterValue](#schemaexperimenttemplatetargetparametervalue)|false|none|none|

<h2 id="tocS_CreationTime">CreationTime</h2>
<!-- backwards compatibility -->
<a id="schemacreationtime"></a>
<a id="schema_CreationTime"></a>
<a id="tocScreationtime"></a>
<a id="tocscreationtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ExperimentTemplateId">ExperimentTemplateId</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplateid"></a>
<a id="schema_ExperimentTemplateId"></a>
<a id="tocSexperimenttemplateid"></a>
<a id="tocsexperimenttemplateid"></a>

```json
"string"
```

<h2 id="tocS_DeleteExperimentTemplateRequest">DeleteExperimentTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteexperimenttemplaterequest"></a>
<a id="schema_DeleteExperimentTemplateRequest"></a>
<a id="tocSdeleteexperimenttemplaterequest"></a>
<a id="tocsdeleteexperimenttemplaterequest"></a>

```json
{}
```

<h2 id="tocS_ExperimentId">ExperimentId</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentid"></a>
<a id="schema_ExperimentId"></a>
<a id="tocSexperimentid"></a>
<a id="tocsexperimentid"></a>

```json
"string"
```

<h2 id="tocS_ExperimentState">ExperimentState</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentstate"></a>
<a id="schema_ExperimentState"></a>
<a id="tocSexperimentstate"></a>
<a id="tocsexperimentstate"></a>

```json
{
  "status": {},
  "reason": {}
}
```

Describes the state of an experiment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|reason|object|false|none|none|

<h2 id="tocS_ExperimentTargetMap">ExperimentTargetMap</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttargetmap"></a>
<a id="schema_ExperimentTargetMap"></a>
<a id="tocSexperimenttargetmap"></a>
<a id="tocsexperimenttargetmap"></a>

```json
{
  "property1": {
    "resourceType": {},
    "resourceArns": {},
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "filters": {},
    "selectionMode": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  },
  "property2": {
    "resourceType": {},
    "resourceArns": {},
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "filters": {},
    "selectionMode": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ExperimentTarget](#schemaexperimenttarget)|false|none|Describes a target for an experiment.|

<h2 id="tocS_ExperimentActionMap">ExperimentActionMap</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactionmap"></a>
<a id="schema_ExperimentActionMap"></a>
<a id="tocSexperimentactionmap"></a>
<a id="tocsexperimentactionmap"></a>

```json
{
  "property1": {
    "actionId": {},
    "description": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "targets": {
      "property1": "string",
      "property2": "string"
    },
    "startAfter": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "startTime": {},
    "endTime": {}
  },
  "property2": {
    "actionId": {},
    "description": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "targets": {
      "property1": "string",
      "property2": "string"
    },
    "startAfter": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "startTime": {},
    "endTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ExperimentAction](#schemaexperimentaction)|false|none|Describes the action for an experiment.|

<h2 id="tocS_ExperimentStopConditionList">ExperimentStopConditionList</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentstopconditionlist"></a>
<a id="schema_ExperimentStopConditionList"></a>
<a id="tocSexperimentstopconditionlist"></a>
<a id="tocsexperimentstopconditionlist"></a>

```json
[
  {
    "source": {},
    "value": {}
  }
]
```

<h2 id="tocS_ExperimentStartTime">ExperimentStartTime</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentstarttime"></a>
<a id="schema_ExperimentStartTime"></a>
<a id="tocSexperimentstarttime"></a>
<a id="tocsexperimentstarttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ExperimentEndTime">ExperimentEndTime</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentendtime"></a>
<a id="schema_ExperimentEndTime"></a>
<a id="tocSexperimentendtime"></a>
<a id="tocsexperimentendtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ExperimentLogConfiguration">ExperimentLogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentlogconfiguration"></a>
<a id="schema_ExperimentLogConfiguration"></a>
<a id="tocSexperimentlogconfiguration"></a>
<a id="tocsexperimentlogconfiguration"></a>

```json
{
  "cloudWatchLogsConfiguration": {
    "logGroupArn": {}
  },
  "s3Configuration": {
    "bucketName": {},
    "prefix": {}
  },
  "logSchemaVersion": {}
}
```

Describes the configuration for experiment logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudWatchLogsConfiguration|object|false|none|none|
|s3Configuration|object|false|none|none|
|logSchemaVersion|object|false|none|none|

<h2 id="tocS_Experiment">Experiment</h2>
<!-- backwards compatibility -->
<a id="schemaexperiment"></a>
<a id="schema_Experiment"></a>
<a id="tocSexperiment"></a>
<a id="tocsexperiment"></a>

```json
{
  "id": {},
  "experimentTemplateId": {},
  "roleArn": {},
  "state": {
    "status": {},
    "reason": {}
  },
  "targets": {
    "property1": {
      "resourceType": {},
      "resourceArns": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "filters": {},
      "selectionMode": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "resourceType": {},
      "resourceArns": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "filters": {},
      "selectionMode": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "actions": {
    "property1": {
      "actionId": {},
      "description": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "targets": {
        "property1": "string",
        "property2": "string"
      },
      "startAfter": {},
      "state": {
        "status": {},
        "reason": {}
      },
      "startTime": {},
      "endTime": {}
    },
    "property2": {
      "actionId": {},
      "description": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "targets": {
        "property1": "string",
        "property2": "string"
      },
      "startAfter": {},
      "state": {
        "status": {},
        "reason": {}
      },
      "startTime": {},
      "endTime": {}
    }
  },
  "stopConditions": {},
  "creationTime": {},
  "startTime": {},
  "endTime": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "logConfiguration": {
    "cloudWatchLogsConfiguration": {
      "logGroupArn": {}
    },
    "s3Configuration": {
      "bucketName": {},
      "prefix": {}
    },
    "logSchemaVersion": {}
  }
}
```

Describes an experiment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|experimentTemplateId|object|false|none|none|
|roleArn|object|false|none|none|
|state|object|false|none|none|
|targets|object|false|none|none|
|actions|object|false|none|none|
|stopConditions|object|false|none|none|
|creationTime|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|tags|object|false|none|none|
|logConfiguration|object|false|none|none|

<h2 id="tocS_ExperimentActionDescription">ExperimentActionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactiondescription"></a>
<a id="schema_ExperimentActionDescription"></a>
<a id="tocSexperimentactiondescription"></a>
<a id="tocsexperimentactiondescription"></a>

```json
"string"
```

<h2 id="tocS_ExperimentActionParameterMap">ExperimentActionParameterMap</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactionparametermap"></a>
<a id="schema_ExperimentActionParameterMap"></a>
<a id="tocSexperimentactionparametermap"></a>
<a id="tocsexperimentactionparametermap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ExperimentActionParameter](#schemaexperimentactionparameter)|false|none|none|

<h2 id="tocS_ExperimentActionTargetMap">ExperimentActionTargetMap</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactiontargetmap"></a>
<a id="schema_ExperimentActionTargetMap"></a>
<a id="tocSexperimentactiontargetmap"></a>
<a id="tocsexperimentactiontargetmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ExperimentTargetName](#schemaexperimenttargetname)|false|none|none|

<h2 id="tocS_ExperimentActionStartAfterList">ExperimentActionStartAfterList</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactionstartafterlist"></a>
<a id="schema_ExperimentActionStartAfterList"></a>
<a id="tocSexperimentactionstartafterlist"></a>
<a id="tocsexperimentactionstartafterlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ExperimentActionState">ExperimentActionState</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactionstate"></a>
<a id="schema_ExperimentActionState"></a>
<a id="tocSexperimentactionstate"></a>
<a id="tocsexperimentactionstate"></a>

```json
{
  "status": {},
  "reason": {}
}
```

Describes the state of an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|reason|object|false|none|none|

<h2 id="tocS_ExperimentActionStartTime">ExperimentActionStartTime</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactionstarttime"></a>
<a id="schema_ExperimentActionStartTime"></a>
<a id="tocSexperimentactionstarttime"></a>
<a id="tocsexperimentactionstarttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ExperimentActionEndTime">ExperimentActionEndTime</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactionendtime"></a>
<a id="schema_ExperimentActionEndTime"></a>
<a id="tocSexperimentactionendtime"></a>
<a id="tocsexperimentactionendtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ExperimentAction">ExperimentAction</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentaction"></a>
<a id="schema_ExperimentAction"></a>
<a id="tocSexperimentaction"></a>
<a id="tocsexperimentaction"></a>

```json
{
  "actionId": {},
  "description": {},
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "targets": {
    "property1": "string",
    "property2": "string"
  },
  "startAfter": {},
  "state": {
    "status": {},
    "reason": {}
  },
  "startTime": {},
  "endTime": {}
}
```

Describes the action for an experiment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionId|object|false|none|none|
|description|object|false|none|none|
|parameters|object|false|none|none|
|targets|object|false|none|none|
|startAfter|object|false|none|none|
|state|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|

<h2 id="tocS_ExperimentActionName">ExperimentActionName</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactionname"></a>
<a id="schema_ExperimentActionName"></a>
<a id="tocSexperimentactionname"></a>
<a id="tocsexperimentactionname"></a>

```json
"string"
```

<h2 id="tocS_ExperimentActionParameter">ExperimentActionParameter</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactionparameter"></a>
<a id="schema_ExperimentActionParameter"></a>
<a id="tocSexperimentactionparameter"></a>
<a id="tocsexperimentactionparameter"></a>

```json
"string"
```

<h2 id="tocS_ExperimentActionParameterName">ExperimentActionParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactionparametername"></a>
<a id="schema_ExperimentActionParameterName"></a>
<a id="tocSexperimentactionparametername"></a>
<a id="tocsexperimentactionparametername"></a>

```json
"string"
```

<h2 id="tocS_ExperimentActionStartAfter">ExperimentActionStartAfter</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactionstartafter"></a>
<a id="schema_ExperimentActionStartAfter"></a>
<a id="tocSexperimentactionstartafter"></a>
<a id="tocsexperimentactionstartafter"></a>

```json
"string"
```

<h2 id="tocS_ExperimentActionStatus">ExperimentActionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactionstatus"></a>
<a id="schema_ExperimentActionStatus"></a>
<a id="tocSexperimentactionstatus"></a>
<a id="tocsexperimentactionstatus"></a>

```json
"pending"
```

<h2 id="tocS_ExperimentActionStatusReason">ExperimentActionStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactionstatusreason"></a>
<a id="schema_ExperimentActionStatusReason"></a>
<a id="tocSexperimentactionstatusreason"></a>
<a id="tocsexperimentactionstatusreason"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTargetName">ExperimentTargetName</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttargetname"></a>
<a id="schema_ExperimentTargetName"></a>
<a id="tocSexperimenttargetname"></a>
<a id="tocsexperimenttargetname"></a>

```json
"string"
```

<h2 id="tocS_ExperimentActionTargetName">ExperimentActionTargetName</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentactiontargetname"></a>
<a id="schema_ExperimentActionTargetName"></a>
<a id="tocSexperimentactiontargetname"></a>
<a id="tocsexperimentactiontargetname"></a>

```json
"string"
```

<h2 id="tocS_ExperimentCloudWatchLogsLogConfiguration">ExperimentCloudWatchLogsLogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentcloudwatchlogslogconfiguration"></a>
<a id="schema_ExperimentCloudWatchLogsLogConfiguration"></a>
<a id="tocSexperimentcloudwatchlogslogconfiguration"></a>
<a id="tocsexperimentcloudwatchlogslogconfiguration"></a>

```json
{
  "logGroupArn": {}
}
```

Describes the configuration for experiment logging to Amazon CloudWatch Logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupArn|object|false|none|none|

<h2 id="tocS_ExperimentS3LogConfiguration">ExperimentS3LogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaexperiments3logconfiguration"></a>
<a id="schema_ExperimentS3LogConfiguration"></a>
<a id="tocSexperiments3logconfiguration"></a>
<a id="tocsexperiments3logconfiguration"></a>

```json
{
  "bucketName": {},
  "prefix": {}
}
```

Describes the configuration for experiment logging to Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|false|none|none|
|prefix|object|false|none|none|

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

<h2 id="tocS_ExperimentStatus">ExperimentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentstatus"></a>
<a id="schema_ExperimentStatus"></a>
<a id="tocSexperimentstatus"></a>
<a id="tocsexperimentstatus"></a>

```json
"pending"
```

<h2 id="tocS_ExperimentStatusReason">ExperimentStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentstatusreason"></a>
<a id="schema_ExperimentStatusReason"></a>
<a id="tocSexperimentstatusreason"></a>
<a id="tocsexperimentstatusreason"></a>

```json
"string"
```

<h2 id="tocS_ExperimentStopCondition">ExperimentStopCondition</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentstopcondition"></a>
<a id="schema_ExperimentStopCondition"></a>
<a id="tocSexperimentstopcondition"></a>
<a id="tocsexperimentstopcondition"></a>

```json
{
  "source": {},
  "value": {}
}
```

Describes the stop condition for an experiment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_ExperimentSummary">ExperimentSummary</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentsummary"></a>
<a id="schema_ExperimentSummary"></a>
<a id="tocSexperimentsummary"></a>
<a id="tocsexperimentsummary"></a>

```json
{
  "id": {},
  "experimentTemplateId": {},
  "state": {
    "status": {},
    "reason": {}
  },
  "creationTime": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Provides a summary of an experiment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|experimentTemplateId|object|false|none|none|
|state|object|false|none|none|
|creationTime|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ExperimentSummaryList">ExperimentSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentsummarylist"></a>
<a id="schema_ExperimentSummaryList"></a>
<a id="tocSexperimentsummarylist"></a>
<a id="tocsexperimentsummarylist"></a>

```json
[
  {
    "id": {},
    "experimentTemplateId": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "creationTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ExperimentTargetFilterList">ExperimentTargetFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttargetfilterlist"></a>
<a id="schema_ExperimentTargetFilterList"></a>
<a id="tocSexperimenttargetfilterlist"></a>
<a id="tocsexperimenttargetfilterlist"></a>

```json
[
  {
    "path": {},
    "values": {}
  }
]
```

<h2 id="tocS_ExperimentTargetSelectionMode">ExperimentTargetSelectionMode</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttargetselectionmode"></a>
<a id="schema_ExperimentTargetSelectionMode"></a>
<a id="tocSexperimenttargetselectionmode"></a>
<a id="tocsexperimenttargetselectionmode"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTargetParameterMap">ExperimentTargetParameterMap</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttargetparametermap"></a>
<a id="schema_ExperimentTargetParameterMap"></a>
<a id="tocSexperimenttargetparametermap"></a>
<a id="tocsexperimenttargetparametermap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ExperimentTargetParameterValue](#schemaexperimenttargetparametervalue)|false|none|none|

<h2 id="tocS_ExperimentTarget">ExperimentTarget</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttarget"></a>
<a id="schema_ExperimentTarget"></a>
<a id="tocSexperimenttarget"></a>
<a id="tocsexperimenttarget"></a>

```json
{
  "resourceType": {},
  "resourceArns": {},
  "resourceTags": {
    "property1": "string",
    "property2": "string"
  },
  "filters": {},
  "selectionMode": {},
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

Describes a target for an experiment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|false|none|none|
|resourceArns|object|false|none|none|
|resourceTags|object|false|none|none|
|filters|object|false|none|none|
|selectionMode|object|false|none|none|
|parameters|object|false|none|none|

<h2 id="tocS_ExperimentTargetFilterPath">ExperimentTargetFilterPath</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttargetfilterpath"></a>
<a id="schema_ExperimentTargetFilterPath"></a>
<a id="tocSexperimenttargetfilterpath"></a>
<a id="tocsexperimenttargetfilterpath"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTargetFilterValues">ExperimentTargetFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttargetfiltervalues"></a>
<a id="schema_ExperimentTargetFilterValues"></a>
<a id="tocSexperimenttargetfiltervalues"></a>
<a id="tocsexperimenttargetfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ExperimentTargetFilter">ExperimentTargetFilter</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttargetfilter"></a>
<a id="schema_ExperimentTargetFilter"></a>
<a id="tocSexperimenttargetfilter"></a>
<a id="tocsexperimenttargetfilter"></a>

```json
{
  "path": {},
  "values": {}
}
```

Describes a filter used for the target resources in an experiment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_ExperimentTargetFilterValue">ExperimentTargetFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttargetfiltervalue"></a>
<a id="schema_ExperimentTargetFilterValue"></a>
<a id="tocSexperimenttargetfiltervalue"></a>
<a id="tocsexperimenttargetfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTargetParameterValue">ExperimentTargetParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttargetparametervalue"></a>
<a id="schema_ExperimentTargetParameterValue"></a>
<a id="tocSexperimenttargetparametervalue"></a>
<a id="tocsexperimenttargetparametervalue"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTargetParameterName">ExperimentTargetParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttargetparametername"></a>
<a id="schema_ExperimentTargetParameterName"></a>
<a id="tocSexperimenttargetparametername"></a>
<a id="tocsexperimenttargetparametername"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTemplateTargetMap">ExperimentTemplateTargetMap</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetargetmap"></a>
<a id="schema_ExperimentTemplateTargetMap"></a>
<a id="tocSexperimenttemplatetargetmap"></a>
<a id="tocsexperimenttemplatetargetmap"></a>

```json
{
  "property1": {
    "resourceType": {},
    "resourceArns": {},
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "filters": {},
    "selectionMode": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  },
  "property2": {
    "resourceType": {},
    "resourceArns": {},
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "filters": {},
    "selectionMode": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ExperimentTemplateTarget](#schemaexperimenttemplatetarget)|false|none|Describes a target for an experiment template.|

<h2 id="tocS_ExperimentTemplateActionMap">ExperimentTemplateActionMap</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplateactionmap"></a>
<a id="schema_ExperimentTemplateActionMap"></a>
<a id="tocSexperimenttemplateactionmap"></a>
<a id="tocsexperimenttemplateactionmap"></a>

```json
{
  "property1": {
    "actionId": {},
    "description": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "targets": {
      "property1": "string",
      "property2": "string"
    },
    "startAfter": {}
  },
  "property2": {
    "actionId": {},
    "description": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "targets": {
      "property1": "string",
      "property2": "string"
    },
    "startAfter": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ExperimentTemplateAction](#schemaexperimenttemplateaction)|false|none|Describes an action for an experiment template.|

<h2 id="tocS_ExperimentTemplateStopConditionList">ExperimentTemplateStopConditionList</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatestopconditionlist"></a>
<a id="schema_ExperimentTemplateStopConditionList"></a>
<a id="tocSexperimenttemplatestopconditionlist"></a>
<a id="tocsexperimenttemplatestopconditionlist"></a>

```json
[
  {
    "source": {},
    "value": {}
  }
]
```

<h2 id="tocS_LastUpdateTime">LastUpdateTime</h2>
<!-- backwards compatibility -->
<a id="schemalastupdatetime"></a>
<a id="schema_LastUpdateTime"></a>
<a id="tocSlastupdatetime"></a>
<a id="tocslastupdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ExperimentTemplateLogConfiguration">ExperimentTemplateLogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatelogconfiguration"></a>
<a id="schema_ExperimentTemplateLogConfiguration"></a>
<a id="tocSexperimenttemplatelogconfiguration"></a>
<a id="tocsexperimenttemplatelogconfiguration"></a>

```json
{
  "cloudWatchLogsConfiguration": {
    "logGroupArn": {}
  },
  "s3Configuration": {
    "bucketName": {},
    "prefix": {}
  },
  "logSchemaVersion": {}
}
```

Describes the configuration for experiment logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudWatchLogsConfiguration|object|false|none|none|
|s3Configuration|object|false|none|none|
|logSchemaVersion|object|false|none|none|

<h2 id="tocS_ExperimentTemplateAction">ExperimentTemplateAction</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplateaction"></a>
<a id="schema_ExperimentTemplateAction"></a>
<a id="tocSexperimenttemplateaction"></a>
<a id="tocsexperimenttemplateaction"></a>

```json
{
  "actionId": {},
  "description": {},
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "targets": {
    "property1": "string",
    "property2": "string"
  },
  "startAfter": {}
}
```

Describes an action for an experiment template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionId|object|false|none|none|
|description|object|false|none|none|
|parameters|object|false|none|none|
|targets|object|false|none|none|
|startAfter|object|false|none|none|

<h2 id="tocS_ExperimentTemplateActionName">ExperimentTemplateActionName</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplateactionname"></a>
<a id="schema_ExperimentTemplateActionName"></a>
<a id="tocSexperimenttemplateactionname"></a>
<a id="tocsexperimenttemplateactionname"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTemplateActionParameter">ExperimentTemplateActionParameter</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplateactionparameter"></a>
<a id="schema_ExperimentTemplateActionParameter"></a>
<a id="tocSexperimenttemplateactionparameter"></a>
<a id="tocsexperimenttemplateactionparameter"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTemplateActionParameterName">ExperimentTemplateActionParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplateactionparametername"></a>
<a id="schema_ExperimentTemplateActionParameterName"></a>
<a id="tocSexperimenttemplateactionparametername"></a>
<a id="tocsexperimenttemplateactionparametername"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTemplateActionStartAfter">ExperimentTemplateActionStartAfter</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplateactionstartafter"></a>
<a id="schema_ExperimentTemplateActionStartAfter"></a>
<a id="tocSexperimenttemplateactionstartafter"></a>
<a id="tocsexperimenttemplateactionstartafter"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTemplateTargetName">ExperimentTemplateTargetName</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetargetname"></a>
<a id="schema_ExperimentTemplateTargetName"></a>
<a id="tocSexperimenttemplatetargetname"></a>
<a id="tocsexperimenttemplatetargetname"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTemplateActionTargetName">ExperimentTemplateActionTargetName</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplateactiontargetname"></a>
<a id="schema_ExperimentTemplateActionTargetName"></a>
<a id="tocSexperimenttemplateactiontargetname"></a>
<a id="tocsexperimenttemplateactiontargetname"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTemplateCloudWatchLogsLogConfiguration">ExperimentTemplateCloudWatchLogsLogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatecloudwatchlogslogconfiguration"></a>
<a id="schema_ExperimentTemplateCloudWatchLogsLogConfiguration"></a>
<a id="tocSexperimenttemplatecloudwatchlogslogconfiguration"></a>
<a id="tocsexperimenttemplatecloudwatchlogslogconfiguration"></a>

```json
{
  "logGroupArn": {}
}
```

Describes the configuration for experiment logging to Amazon CloudWatch Logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logGroupArn|object|false|none|none|

<h2 id="tocS_ExperimentTemplateS3LogConfiguration">ExperimentTemplateS3LogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplates3logconfiguration"></a>
<a id="schema_ExperimentTemplateS3LogConfiguration"></a>
<a id="tocSexperimenttemplates3logconfiguration"></a>
<a id="tocsexperimenttemplates3logconfiguration"></a>

```json
{
  "bucketName": {},
  "prefix": {}
}
```

Describes the configuration for experiment logging to Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|false|none|none|
|prefix|object|false|none|none|

<h2 id="tocS_ExperimentTemplateStopCondition">ExperimentTemplateStopCondition</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatestopcondition"></a>
<a id="schema_ExperimentTemplateStopCondition"></a>
<a id="tocSexperimenttemplatestopcondition"></a>
<a id="tocsexperimenttemplatestopcondition"></a>

```json
{
  "source": {},
  "value": {}
}
```

Describes a stop condition for an experiment template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_ExperimentTemplateSummary">ExperimentTemplateSummary</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatesummary"></a>
<a id="schema_ExperimentTemplateSummary"></a>
<a id="tocSexperimenttemplatesummary"></a>
<a id="tocsexperimenttemplatesummary"></a>

```json
{
  "id": {},
  "description": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Provides a summary of an experiment template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|description|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ExperimentTemplateSummaryList">ExperimentTemplateSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatesummarylist"></a>
<a id="schema_ExperimentTemplateSummaryList"></a>
<a id="tocSexperimenttemplatesummarylist"></a>
<a id="tocsexperimenttemplatesummarylist"></a>

```json
[
  {
    "id": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ExperimentTemplateTargetFilterList">ExperimentTemplateTargetFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetargetfilterlist"></a>
<a id="schema_ExperimentTemplateTargetFilterList"></a>
<a id="tocSexperimenttemplatetargetfilterlist"></a>
<a id="tocsexperimenttemplatetargetfilterlist"></a>

```json
[
  {
    "path": {},
    "values": {}
  }
]
```

<h2 id="tocS_ExperimentTemplateTarget">ExperimentTemplateTarget</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetarget"></a>
<a id="schema_ExperimentTemplateTarget"></a>
<a id="tocSexperimenttemplatetarget"></a>
<a id="tocsexperimenttemplatetarget"></a>

```json
{
  "resourceType": {},
  "resourceArns": {},
  "resourceTags": {
    "property1": "string",
    "property2": "string"
  },
  "filters": {},
  "selectionMode": {},
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

Describes a target for an experiment template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|false|none|none|
|resourceArns|object|false|none|none|
|resourceTags|object|false|none|none|
|filters|object|false|none|none|
|selectionMode|object|false|none|none|
|parameters|object|false|none|none|

<h2 id="tocS_ExperimentTemplateTargetFilterPath">ExperimentTemplateTargetFilterPath</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetargetfilterpath"></a>
<a id="schema_ExperimentTemplateTargetFilterPath"></a>
<a id="tocSexperimenttemplatetargetfilterpath"></a>
<a id="tocsexperimenttemplatetargetfilterpath"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTemplateTargetFilterValues">ExperimentTemplateTargetFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetargetfiltervalues"></a>
<a id="schema_ExperimentTemplateTargetFilterValues"></a>
<a id="tocSexperimenttemplatetargetfiltervalues"></a>
<a id="tocsexperimenttemplatetargetfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ExperimentTemplateTargetFilter">ExperimentTemplateTargetFilter</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetargetfilter"></a>
<a id="schema_ExperimentTemplateTargetFilter"></a>
<a id="tocSexperimenttemplatetargetfilter"></a>
<a id="tocsexperimenttemplatetargetfilter"></a>

```json
{
  "path": {},
  "values": {}
}
```

Describes a filter used for the target resources in an experiment template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_ExperimentTemplateTargetInputFilter">ExperimentTemplateTargetInputFilter</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetargetinputfilter"></a>
<a id="schema_ExperimentTemplateTargetInputFilter"></a>
<a id="tocSexperimenttemplatetargetinputfilter"></a>
<a id="tocsexperimenttemplatetargetinputfilter"></a>

```json
{
  "path": {},
  "values": {}
}
```

<p>Specifies a filter used for the target resource input in an experiment template.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters">Resource filters</a> in the <i>Fault Injection Simulator User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|object|true|none|none|
|values|object|true|none|none|

<h2 id="tocS_ExperimentTemplateTargetFilterValue">ExperimentTemplateTargetFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetargetfiltervalue"></a>
<a id="schema_ExperimentTemplateTargetFilterValue"></a>
<a id="tocSexperimenttemplatetargetfiltervalue"></a>
<a id="tocsexperimenttemplatetargetfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTemplateTargetParameterValue">ExperimentTemplateTargetParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetargetparametervalue"></a>
<a id="schema_ExperimentTemplateTargetParameterValue"></a>
<a id="tocSexperimenttemplatetargetparametervalue"></a>
<a id="tocsexperimenttemplatetargetparametervalue"></a>

```json
"string"
```

<h2 id="tocS_ExperimentTemplateTargetParameterName">ExperimentTemplateTargetParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttemplatetargetparametername"></a>
<a id="schema_ExperimentTemplateTargetParameterName"></a>
<a id="tocSexperimenttemplatetargetparametername"></a>
<a id="tocsexperimenttemplatetargetparametername"></a>

```json
"string"
```

<h2 id="tocS_GetActionRequest">GetActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetactionrequest"></a>
<a id="schema_GetActionRequest"></a>
<a id="tocSgetactionrequest"></a>
<a id="tocsgetactionrequest"></a>

```json
{}
```

<h2 id="tocS_GetExperimentRequest">GetExperimentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetexperimentrequest"></a>
<a id="schema_GetExperimentRequest"></a>
<a id="tocSgetexperimentrequest"></a>
<a id="tocsgetexperimentrequest"></a>

```json
{}
```

<h2 id="tocS_GetExperimentTemplateRequest">GetExperimentTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetexperimenttemplaterequest"></a>
<a id="schema_GetExperimentTemplateRequest"></a>
<a id="tocSgetexperimenttemplaterequest"></a>
<a id="tocsgetexperimenttemplaterequest"></a>

```json
{}
```

<h2 id="tocS_GetTargetResourceTypeRequest">GetTargetResourceTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettargetresourcetyperequest"></a>
<a id="schema_GetTargetResourceTypeRequest"></a>
<a id="tocSgettargetresourcetyperequest"></a>
<a id="tocsgettargetresourcetyperequest"></a>

```json
{}
```

<h2 id="tocS_TargetResourceType">TargetResourceType</h2>
<!-- backwards compatibility -->
<a id="schematargetresourcetype"></a>
<a id="schema_TargetResourceType"></a>
<a id="tocStargetresourcetype"></a>
<a id="tocstargetresourcetype"></a>

```json
{
  "resourceType": {},
  "description": {},
  "parameters": {
    "property1": {
      "description": {},
      "required": {}
    },
    "property2": {
      "description": {},
      "required": {}
    }
  }
}
```

Describes a resource type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|false|none|none|
|description|object|false|none|none|
|parameters|object|false|none|none|

<h2 id="tocS_ListActionsMaxResults">ListActionsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistactionsmaxresults"></a>
<a id="schema_ListActionsMaxResults"></a>
<a id="tocSlistactionsmaxresults"></a>
<a id="tocslistactionsmaxresults"></a>

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

<h2 id="tocS_ListActionsRequest">ListActionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistactionsrequest"></a>
<a id="schema_ListActionsRequest"></a>
<a id="tocSlistactionsrequest"></a>
<a id="tocslistactionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListExperimentTemplatesMaxResults">ListExperimentTemplatesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistexperimenttemplatesmaxresults"></a>
<a id="schema_ListExperimentTemplatesMaxResults"></a>
<a id="tocSlistexperimenttemplatesmaxresults"></a>
<a id="tocslistexperimenttemplatesmaxresults"></a>

```json
1
```

<h2 id="tocS_ListExperimentTemplatesRequest">ListExperimentTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistexperimenttemplatesrequest"></a>
<a id="schema_ListExperimentTemplatesRequest"></a>
<a id="tocSlistexperimenttemplatesrequest"></a>
<a id="tocslistexperimenttemplatesrequest"></a>

```json
{}
```

<h2 id="tocS_ListExperimentsMaxResults">ListExperimentsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistexperimentsmaxresults"></a>
<a id="schema_ListExperimentsMaxResults"></a>
<a id="tocSlistexperimentsmaxresults"></a>
<a id="tocslistexperimentsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListExperimentsRequest">ListExperimentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistexperimentsrequest"></a>
<a id="schema_ListExperimentsRequest"></a>
<a id="tocSlistexperimentsrequest"></a>
<a id="tocslistexperimentsrequest"></a>

```json
{}
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"stringstringstringst"
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

<h2 id="tocS_ListTargetResourceTypesMaxResults">ListTargetResourceTypesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetresourcetypesmaxresults"></a>
<a id="schema_ListTargetResourceTypesMaxResults"></a>
<a id="tocSlisttargetresourcetypesmaxresults"></a>
<a id="tocslisttargetresourcetypesmaxresults"></a>

```json
1
```

<h2 id="tocS_ListTargetResourceTypesRequest">ListTargetResourceTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetresourcetypesrequest"></a>
<a id="schema_ListTargetResourceTypesRequest"></a>
<a id="tocSlisttargetresourcetypesrequest"></a>
<a id="tocslisttargetresourcetypesrequest"></a>

```json
{}
```

<h2 id="tocS_TargetResourceTypeSummaryList">TargetResourceTypeSummaryList</h2>
<!-- backwards compatibility -->
<a id="schematargetresourcetypesummarylist"></a>
<a id="schema_TargetResourceTypeSummaryList"></a>
<a id="tocStargetresourcetypesummarylist"></a>
<a id="tocstargetresourcetypesummarylist"></a>

```json
[
  {
    "resourceType": {},
    "description": {}
  }
]
```

<h2 id="tocS_StartExperimentRequest">StartExperimentRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartexperimentrequest"></a>
<a id="schema_StartExperimentRequest"></a>
<a id="tocSstartexperimentrequest"></a>
<a id="tocsstartexperimentrequest"></a>

```json
{
  "clientToken": {},
  "experimentTemplateId": {},
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
|experimentTemplateId|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_StopExperimentRequest">StopExperimentRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopexperimentrequest"></a>
<a id="schema_StopExperimentRequest"></a>
<a id="tocSstopexperimentrequest"></a>
<a id="tocsstopexperimentrequest"></a>

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

<h2 id="tocS_TargetResourceTypeDescription">TargetResourceTypeDescription</h2>
<!-- backwards compatibility -->
<a id="schematargetresourcetypedescription"></a>
<a id="schema_TargetResourceTypeDescription"></a>
<a id="tocStargetresourcetypedescription"></a>
<a id="tocstargetresourcetypedescription"></a>

```json
"string"
```

<h2 id="tocS_TargetResourceTypeParameterMap">TargetResourceTypeParameterMap</h2>
<!-- backwards compatibility -->
<a id="schematargetresourcetypeparametermap"></a>
<a id="schema_TargetResourceTypeParameterMap"></a>
<a id="tocStargetresourcetypeparametermap"></a>
<a id="tocstargetresourcetypeparametermap"></a>

```json
{
  "property1": {
    "description": {},
    "required": {}
  },
  "property2": {
    "description": {},
    "required": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TargetResourceTypeParameter](#schematargetresourcetypeparameter)|false|none|Describes the parameters for a resource type. Use parameters to determine which tasks are identified during target resolution.|

<h2 id="tocS_TargetResourceTypeParameterDescription">TargetResourceTypeParameterDescription</h2>
<!-- backwards compatibility -->
<a id="schematargetresourcetypeparameterdescription"></a>
<a id="schema_TargetResourceTypeParameterDescription"></a>
<a id="tocStargetresourcetypeparameterdescription"></a>
<a id="tocstargetresourcetypeparameterdescription"></a>

```json
"string"
```

<h2 id="tocS_TargetResourceTypeParameterRequired">TargetResourceTypeParameterRequired</h2>
<!-- backwards compatibility -->
<a id="schematargetresourcetypeparameterrequired"></a>
<a id="schema_TargetResourceTypeParameterRequired"></a>
<a id="tocStargetresourcetypeparameterrequired"></a>
<a id="tocstargetresourcetypeparameterrequired"></a>

```json
true
```

<h2 id="tocS_TargetResourceTypeParameter">TargetResourceTypeParameter</h2>
<!-- backwards compatibility -->
<a id="schematargetresourcetypeparameter"></a>
<a id="schema_TargetResourceTypeParameter"></a>
<a id="tocStargetresourcetypeparameter"></a>
<a id="tocstargetresourcetypeparameter"></a>

```json
{
  "description": {},
  "required": {}
}
```

Describes the parameters for a resource type. Use parameters to determine which tasks are identified during target resolution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|required|object|false|none|none|

<h2 id="tocS_TargetResourceTypeParameterName">TargetResourceTypeParameterName</h2>
<!-- backwards compatibility -->
<a id="schematargetresourcetypeparametername"></a>
<a id="schema_TargetResourceTypeParameterName"></a>
<a id="tocStargetresourcetypeparametername"></a>
<a id="tocstargetresourcetypeparametername"></a>

```json
"string"
```

<h2 id="tocS_TargetResourceTypeSummary">TargetResourceTypeSummary</h2>
<!-- backwards compatibility -->
<a id="schematargetresourcetypesummary"></a>
<a id="schema_TargetResourceTypeSummary"></a>
<a id="tocStargetresourcetypesummary"></a>
<a id="tocstargetresourcetypesummary"></a>

```json
{
  "resourceType": {},
  "description": {}
}
```

Describes a resource type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateExperimentTemplateActionInputMap">UpdateExperimentTemplateActionInputMap</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexperimenttemplateactioninputmap"></a>
<a id="schema_UpdateExperimentTemplateActionInputMap"></a>
<a id="tocSupdateexperimenttemplateactioninputmap"></a>
<a id="tocsupdateexperimenttemplateactioninputmap"></a>

```json
{
  "property1": {
    "actionId": {},
    "description": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "targets": {
      "property1": "string",
      "property2": "string"
    },
    "startAfter": {}
  },
  "property2": {
    "actionId": {},
    "description": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "targets": {
      "property1": "string",
      "property2": "string"
    },
    "startAfter": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[UpdateExperimentTemplateActionInputItem](#schemaupdateexperimenttemplateactioninputitem)|false|none|Specifies an action for an experiment template.|

<h2 id="tocS_UpdateExperimentTemplateLogConfigurationInput">UpdateExperimentTemplateLogConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexperimenttemplatelogconfigurationinput"></a>
<a id="schema_UpdateExperimentTemplateLogConfigurationInput"></a>
<a id="tocSupdateexperimenttemplatelogconfigurationinput"></a>
<a id="tocsupdateexperimenttemplatelogconfigurationinput"></a>

```json
{
  "cloudWatchLogsConfiguration": {
    "logGroupArn": {}
  },
  "s3Configuration": {
    "bucketName": {},
    "prefix": {}
  },
  "logSchemaVersion": {}
}
```

Specifies the configuration for experiment logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudWatchLogsConfiguration|object|false|none|none|
|s3Configuration|object|false|none|none|
|logSchemaVersion|object|false|none|none|

<h2 id="tocS_UpdateExperimentTemplateStopConditionInputList">UpdateExperimentTemplateStopConditionInputList</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexperimenttemplatestopconditioninputlist"></a>
<a id="schema_UpdateExperimentTemplateStopConditionInputList"></a>
<a id="tocSupdateexperimenttemplatestopconditioninputlist"></a>
<a id="tocsupdateexperimenttemplatestopconditioninputlist"></a>

```json
[
  {
    "source": {},
    "value": {}
  }
]
```

<h2 id="tocS_UpdateExperimentTemplateTargetInputMap">UpdateExperimentTemplateTargetInputMap</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexperimenttemplatetargetinputmap"></a>
<a id="schema_UpdateExperimentTemplateTargetInputMap"></a>
<a id="tocSupdateexperimenttemplatetargetinputmap"></a>
<a id="tocsupdateexperimenttemplatetargetinputmap"></a>

```json
{
  "property1": {
    "resourceType": {},
    "resourceArns": {},
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "filters": {},
    "selectionMode": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  },
  "property2": {
    "resourceType": {},
    "resourceArns": {},
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "filters": {},
    "selectionMode": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[UpdateExperimentTemplateTargetInput](#schemaupdateexperimenttemplatetargetinput)|false|none|Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both.|

<h2 id="tocS_UpdateExperimentTemplateRequest">UpdateExperimentTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexperimenttemplaterequest"></a>
<a id="schema_UpdateExperimentTemplateRequest"></a>
<a id="tocSupdateexperimenttemplaterequest"></a>
<a id="tocsupdateexperimenttemplaterequest"></a>

```json
{
  "description": {},
  "stopConditions": {},
  "targets": {
    "property1": {
      "resourceType": {},
      "resourceArns": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "filters": {},
      "selectionMode": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "resourceType": {},
      "resourceArns": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "filters": {},
      "selectionMode": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "actions": {
    "property1": {
      "actionId": {},
      "description": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "targets": {
        "property1": "string",
        "property2": "string"
      },
      "startAfter": {}
    },
    "property2": {
      "actionId": {},
      "description": {},
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "targets": {
        "property1": "string",
        "property2": "string"
      },
      "startAfter": {}
    }
  },
  "roleArn": {},
  "logConfiguration": {
    "cloudWatchLogsConfiguration": {
      "logGroupArn": {}
    },
    "s3Configuration": {
      "bucketName": {},
      "prefix": {}
    },
    "logSchemaVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|stopConditions|object|false|none|none|
|targets|object|false|none|none|
|actions|object|false|none|none|
|roleArn|object|false|none|none|
|logConfiguration|object|false|none|none|
