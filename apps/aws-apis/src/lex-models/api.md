<h1 id="amazon-lex-model-building-service">Amazon Lex Model Building Service v2017-04-19</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Lex Build-Time Actions</fullname> <p> Amazon Lex is an AWS service for building conversational voice and text interfaces. Use these actions to create, update, and delete conversational bots for new and existing client applications. </p>

Base URLs:

* <a href="http://models.lex.us-east-1.amazonaws.com">http://models.lex.us-east-1.amazonaws.com</a> - The Amazon Lex Model Building Service multi-region endpoint

* <a href="https://models.lex.us-east-1.amazonaws.com">https://models.lex.us-east-1.amazonaws.com</a> - The Amazon Lex Model Building Service multi-region endpoint

* <a href="http://models.lex.cn-north-1.amazonaws.com.cn">http://models.lex.cn-north-1.amazonaws.com.cn</a> - The Amazon Lex Model Building Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://models.lex.cn-north-1.amazonaws.com.cn">https://models.lex.cn-north-1.amazonaws.com.cn</a> - The Amazon Lex Model Building Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/lex/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-lex-model-building-service-default">Default</h1>

## CreateBotVersion

<a id="opIdCreateBotVersion"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "checksum": "string"
  }'
```

`POST /bots/{name}/versions`

<p>Creates a new version of the bot based on the <code>$LATEST</code> version. If the <code>$LATEST</code> version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version.</p> <note> <p>You can update only the <code>$LATEST</code> version of the bot. You can't update the numbered versions that you create with the <code>CreateBotVersion</code> operation.</p> </note> <p> When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p> This operation requires permission for the <code>lex:CreateBotVersion</code> action. </p>

> Body parameter

```json
{
  "checksum": "string"
}
```

<h3 id="createbotversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the bot that you want to create a new version of. The name is case sensitive. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» checksum|body|string|false|Identifies a specific revision of the <code>$LATEST</code> version of the bot. If you specify a checksum and the <code>$LATEST</code> version of the bot has a different checksum, a <code>PreconditionFailedException</code> exception is returned and Amazon Lex doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version.|

> Example responses

> 201 Response

```json
{
  "name": {},
  "description": {},
  "intents": {},
  "clarificationPrompt": {
    "messages": {},
    "maxAttempts": {},
    "responseCard": {}
  },
  "abortStatement": {
    "messages": {},
    "responseCard": {}
  },
  "status": {},
  "failureReason": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "idleSessionTTLInSeconds": {},
  "voiceId": {},
  "checksum": {},
  "version": {},
  "locale": {},
  "childDirected": {},
  "enableModelImprovements": {},
  "detectSentiment": {}
}
```

> 480 Response

```json
null
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

<h3 id="createbotversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateBotVersionResponse](#schemacreatebotversionresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateIntentVersion

<a id="opIdCreateIntentVersion"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/intents/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "checksum": "string"
  }'
```

`POST /intents/{name}/versions`

<p>Creates a new version of an intent based on the <code>$LATEST</code> version of the intent. If the <code>$LATEST</code> version of this intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last version you created.</p> <note> <p>You can update only the <code>$LATEST</code> version of the intent. You can't update the numbered versions that you create with the <code>CreateIntentVersion</code> operation.</p> </note> <p> When you create a version of an intent, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p>This operation requires permissions to perform the <code>lex:CreateIntentVersion</code> action. </p>

> Body parameter

```json
{
  "checksum": "string"
}
```

<h3 id="createintentversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the intent that you want to create a new version of. The name is case sensitive. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» checksum|body|string|false|Checksum of the <code>$LATEST</code> version of the intent that should be used to create the new version. If you specify a checksum and the <code>$LATEST</code> version of the intent has a different checksum, Amazon Lex returns a <code>PreconditionFailedException</code> exception and doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version.|

> Example responses

> 201 Response

```json
{
  "name": {},
  "description": {},
  "slots": {},
  "sampleUtterances": {},
  "confirmationPrompt": {
    "messages": {},
    "maxAttempts": {},
    "responseCard": {}
  },
  "rejectionStatement": {
    "messages": {},
    "responseCard": {}
  },
  "followUpPrompt": {
    "prompt": {
      "messages": {},
      "maxAttempts": {},
      "responseCard": {}
    },
    "rejectionStatement": {
      "messages": {},
      "responseCard": {}
    }
  },
  "conclusionStatement": {
    "messages": {},
    "responseCard": {}
  },
  "dialogCodeHook": {
    "uri": {},
    "messageVersion": {}
  },
  "fulfillmentActivity": {
    "type": {},
    "codeHook": {
      "uri": {},
      "messageVersion": {}
    }
  },
  "parentIntentSignature": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "version": {},
  "checksum": {},
  "kendraConfiguration": {
    "kendraIndex": {},
    "queryFilterString": {},
    "role": {}
  },
  "inputContexts": {},
  "outputContexts": {}
}
```

> 480 Response

```json
null
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

<h3 id="createintentversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateIntentVersionResponse](#schemacreateintentversionresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSlotTypeVersion

<a id="opIdCreateSlotTypeVersion"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/slottypes/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "checksum": "string"
  }'
```

`POST /slottypes/{name}/versions`

<p>Creates a new version of a slot type based on the <code>$LATEST</code> version of the specified slot type. If the <code>$LATEST</code> version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a new version. It returns the last version that you created. </p> <note> <p>You can update only the <code>$LATEST</code> version of a slot type. You can't update the numbered versions that you create with the <code>CreateSlotTypeVersion</code> operation.</p> </note> <p>When you create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p>This operation requires permissions for the <code>lex:CreateSlotTypeVersion</code> action.</p>

> Body parameter

```json
{
  "checksum": "string"
}
```

<h3 id="createslottypeversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the slot type that you want to create a new version for. The name is case sensitive. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» checksum|body|string|false|Checksum for the <code>$LATEST</code> version of the slot type that you want to publish. If you specify a checksum and the <code>$LATEST</code> version of the slot type has a different checksum, Amazon Lex returns a <code>PreconditionFailedException</code> exception and doesn't publish the new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version.|

> Example responses

> 201 Response

```json
{
  "name": {},
  "description": {},
  "enumerationValues": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "version": {},
  "checksum": {},
  "valueSelectionStrategy": {},
  "parentSlotTypeSignature": {},
  "slotTypeConfigurations": {}
}
```

> 480 Response

```json
null
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

<h3 id="createslottypeversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateSlotTypeVersionResponse](#schemacreateslottypeversionresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBot

<a id="opIdDeleteBot"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /bots/{name}`

<p>Deletes all versions of the bot, including the <code>$LATEST</code> version. To delete a specific version of the bot, use the <a>DeleteBotVersion</a> operation. The <code>DeleteBot</code> operation doesn't immediately remove the bot schema. Instead, it is marked for deletion and removed later.</p> <p>Amazon Lex stores utterances indefinitely for improving the ability of your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the utterances, use the <a>DeleteUtterances</a> operation.</p> <p>If a bot has an alias, you can't delete it. Instead, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the <code>DeleteBot</code> operation is successful.</p> <p>This operation requires permissions for the <code>lex:DeleteBot</code> action.</p>

<h3 id="deletebot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the bot. The name is case sensitive. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletebot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBotAlias

<a id="opIdGetBotAlias"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/string/aliases/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /bots/{botName}/aliases/{name}`

<p>Returns information about an Amazon Lex bot alias. For more information about aliases, see <a>versioning-aliases</a>.</p> <p>This operation requires permissions for the <code>lex:GetBotAlias</code> action.</p>

<h3 id="getbotalias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the bot alias. The name is case sensitive.|
|botName|path|string|true|The name of the bot.|
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
  "name": {},
  "description": {},
  "botVersion": {},
  "botName": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "checksum": {},
  "conversationLogs": {
    "logSettings": {},
    "iamRoleArn": {}
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

<h3 id="getbotalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBotAliasResponse](#schemagetbotaliasresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBotAlias

<a id="opIdPutBotAlias"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/string/aliases/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "botVersion": "string",
    "checksum": "string",
    "conversationLogs": {
      "logSettings": {},
      "iamRoleArn": {}
    },
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`PUT /bots/{botName}/aliases/{name}`

<p>Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change the version of the bot that the alias points to, replace the alias. For more information about aliases, see <a>versioning-aliases</a>.</p> <p>This operation requires permissions for the <code>lex:PutBotAlias</code> action. </p>

> Body parameter

```json
{
  "description": "string",
  "botVersion": "string",
  "checksum": "string",
  "conversationLogs": {
    "logSettings": {},
    "iamRoleArn": {}
  },
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="putbotalias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the alias. The name is <i>not</i> case sensitive.|
|botName|path|string|true|The name of the bot.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|A description of the alias.|
|» botVersion|body|string|true|The version of the bot.|
|» checksum|body|string|false|<p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new bot alias, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a bot alias, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>|
|» conversationLogs|body|object|false|Provides the settings needed for conversation logs.|
|» » logSettings|body|object|false|none|
|» » iamRoleArn|body|object|false|none|
|» tags|body|[[Tag](#schematag)]|false|A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the <code>PutBotAlias</code> operation to update the tags on a bot alias. To update tags, use the <code>TagResource</code> operation.|

> Example responses

> 200 Response

```json
{
  "name": {},
  "description": {},
  "botVersion": {},
  "botName": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "checksum": {},
  "conversationLogs": {
    "logSettings": {},
    "iamRoleArn": {}
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

<h3 id="putbotalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutBotAliasResponse](#schemaputbotaliasresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBotAlias

<a id="opIdDeleteBotAlias"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/string/aliases/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /bots/{botName}/aliases/{name}`

<p>Deletes an alias for the specified bot. </p> <p>You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the <code>DeleteBotAlias</code> operation is successful.</p>

<h3 id="deletebotalias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the alias to delete. The name is case sensitive. |
|botName|path|string|true|The name of the bot that the alias points to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletebotalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBotChannelAssociation

<a id="opIdGetBotChannelAssociation"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/string/aliases/string/channels/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /bots/{botName}/aliases/{aliasName}/channels/{name}`

<p>Returns information about the association between an Amazon Lex bot and a messaging platform.</p> <p>This operation requires permissions for the <code>lex:GetBotChannelAssociation</code> action.</p>

<h3 id="getbotchannelassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the association between the bot and the channel. The name is case sensitive. |
|botName|path|string|true|The name of the Amazon Lex bot.|
|aliasName|path|string|true|An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.|
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
  "name": {},
  "description": {},
  "botAlias": {},
  "botName": {},
  "createdDate": {},
  "type": {},
  "botConfiguration": {
    "property1": "string",
    "property2": "string"
  },
  "status": {},
  "failureReason": {}
}
```

> 480 Response

```json
null
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

<h3 id="getbotchannelassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBotChannelAssociationResponse](#schemagetbotchannelassociationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBotChannelAssociation

<a id="opIdDeleteBotChannelAssociation"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/string/aliases/string/channels/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /bots/{botName}/aliases/{aliasName}/channels/{name}`

<p>Deletes the association between an Amazon Lex bot and a messaging platform.</p> <p>This operation requires permission for the <code>lex:DeleteBotChannelAssociation</code> action.</p>

<h3 id="deletebotchannelassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the association. The name is case sensitive. |
|botName|path|string|true|The name of the Amazon Lex bot.|
|aliasName|path|string|true|An alias that points to the specific version of the Amazon Lex bot to which this association is being made.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

> 484 Response

```json
null
```

<h3 id="deletebotchannelassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBotVersion

<a id="opIdDeleteBotVersion"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/string/versions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /bots/{name}/versions/{version}`

<p>Deletes a specific version of a bot. To delete all versions of a bot, use the <a>DeleteBot</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteBotVersion</code> action.</p>

<h3 id="deletebotversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the bot.|
|version|path|string|true|The version of the bot to delete. You cannot delete the <code>$LATEST</code> version of the bot. To delete the <code>$LATEST</code> version, use the <a>DeleteBot</a> operation.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletebotversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIntent

<a id="opIdDeleteIntent"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/intents/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /intents/{name}`

<p>Deletes all versions of the intent, including the <code>$LATEST</code> version. To delete a specific version of the intent, use the <a>DeleteIntentVersion</a> operation.</p> <p> You can delete a version of an intent only if it is not referenced. To delete an intent that is referred to in one or more bots (see <a>how-it-works</a>), you must remove those references first. </p> <note> <p> If you get the <code>ResourceInUseException</code> exception, it provides an example reference that shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it. If you get the same exception when you attempt to delete the intent again, repeat until the intent has no references and the call to <code>DeleteIntent</code> is successful. </p> </note> <p> This operation requires permission for the <code>lex:DeleteIntent</code> action. </p>

<h3 id="deleteintent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the intent. The name is case sensitive. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deleteintent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIntent

<a id="opIdGetIntent"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/intents/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /intents/{name}/versions/{version}`

<p> Returns information about an intent. In addition to the intent name, you must specify the intent version. </p> <p> This operation requires permissions to perform the <code>lex:GetIntent</code> action. </p>

<h3 id="getintent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the intent. The name is case sensitive. |
|version|path|string|true|The version of the intent.|
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
  "version": "$LATEST",
  "name": "DocOrderPizza",
  "checksum": "ca9bc13d-afc8-4706-bbaf-091f7a5935d6",
  "conclusionStatement": {
    "messages": [
      {
        "content": "All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.",
        "contentType": "PlainText"
      },
      {
        "content": "OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.",
        "contentType": "PlainText"
      }
    ],
    "responseCard": "foo"
  },
  "confirmationPrompt": {
    "maxAttempts": 1,
    "messages": [
      {
        "content": "Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?",
        "contentType": "PlainText"
      }
    ]
  },
  "createdDate": 1494359783.453,
  "description": "Order a pizza from a local pizzeria.",
  "fulfillmentActivity": {
    "type": "ReturnIntent"
  },
  "lastUpdatedDate": 1494359783.453,
  "rejectionStatement": {
    "messages": [
      {
        "content": "Ok, I'll cancel your order.",
        "contentType": "PlainText"
      },
      {
        "content": "I cancelled your order.",
        "contentType": "PlainText"
      }
    ]
  },
  "sampleUtterances": [
    "Order me a pizza.",
    "Order me a {Type} pizza.",
    "I want a {Crust} crust {Type} pizza",
    "I want a {Crust} crust {Type} pizza with {Sauce} sauce."
  ],
  "slots": [
    {
      "name": "Type",
      "description": "The type of pizza to order.",
      "priority": 1,
      "sampleUtterances": [
        "Get me a {Type} pizza.",
        "A {Type} pizza please.",
        "I'd like a {Type} pizza."
      ],
      "slotConstraint": "Required",
      "slotType": "DocPizzaType",
      "slotTypeVersion": "$LATEST",
      "valueElicitationPrompt": {
        "maxAttempts": 1,
        "messages": [
          {
            "content": "What type of pizza would you like?",
            "contentType": "PlainText"
          },
          {
            "content": "Vegie or cheese pizza?",
            "contentType": "PlainText"
          },
          {
            "content": "I can get you a vegie or a cheese pizza.",
            "contentType": "PlainText"
          }
        ]
      }
    },
    {
      "name": "Crust",
      "description": "The type of pizza crust to order.",
      "priority": 2,
      "sampleUtterances": [
        "Make it a {Crust} crust.",
        "I'd like a {Crust} crust."
      ],
      "slotConstraint": "Required",
      "slotType": "DocPizzaCrustType",
      "slotTypeVersion": "$LATEST",
      "valueElicitationPrompt": {
        "maxAttempts": 1,
        "messages": [
          {
            "content": "What type of crust would you like?",
            "contentType": "PlainText"
          },
          {
            "content": "Thick or thin crust?",
            "contentType": "PlainText"
          }
        ]
      }
    },
    {
      "name": "Sauce",
      "description": "The type of sauce to use on the pizza.",
      "priority": 3,
      "sampleUtterances": [
        "Make it {Sauce} sauce.",
        "I'd like {Sauce} sauce."
      ],
      "slotConstraint": "Required",
      "slotType": "DocPizzaSauceType",
      "slotTypeVersion": "$LATEST",
      "valueElicitationPrompt": {
        "maxAttempts": 1,
        "messages": [
          {
            "content": "White or red sauce?",
            "contentType": "PlainText"
          },
          {
            "content": "Garlic or tomato sauce?",
            "contentType": "PlainText"
          }
        ]
      }
    }
  ]
}
```

> 480 Response

```json
null
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

<h3 id="getintent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIntentResponse](#schemagetintentresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIntentVersion

<a id="opIdDeleteIntentVersion"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/intents/string/versions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /intents/{name}/versions/{version}`

<p>Deletes a specific version of an intent. To delete all versions of a intent, use the <a>DeleteIntent</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteIntentVersion</code> action.</p>

<h3 id="deleteintentversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the intent.|
|version|path|string|true|The version of the intent to delete. You cannot delete the <code>$LATEST</code> version of the intent. To delete the <code>$LATEST</code> version, use the <a>DeleteIntent</a> operation.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deleteintentversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSlotType

<a id="opIdDeleteSlotType"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/slottypes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /slottypes/{name}`

<p>Deletes all versions of the slot type, including the <code>$LATEST</code> version. To delete a specific version of the slot type, use the <a>DeleteSlotTypeVersion</a> operation.</p> <p> You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first. </p> <note> <p> If you get the <code>ResourceInUseException</code> exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the <code>DeleteSlotType</code> call is successful. </p> </note> <p>This operation requires permission for the <code>lex:DeleteSlotType</code> action.</p>

<h3 id="deleteslottype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the slot type. The name is case sensitive. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deleteslottype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSlotTypeVersion

<a id="opIdDeleteSlotTypeVersion"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/slottypes/string/version/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /slottypes/{name}/version/{version}`

<p>Deletes a specific version of a slot type. To delete all versions of a slot type, use the <a>DeleteSlotType</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteSlotTypeVersion</code> action.</p>

<h3 id="deleteslottypeversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the slot type.|
|version|path|string|true|The version of the slot type to delete. You cannot delete the <code>$LATEST</code> version of the slot type. To delete the <code>$LATEST</code> version, use the <a>DeleteSlotType</a> operation.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deleteslottypeversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUtterances

<a id="opIdDeleteUtterances"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/string/utterances/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /bots/{botName}/utterances/{userId}`

<p>Deletes stored utterances.</p> <p>Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the <a>GetUtterancesView</a> operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input.</p> <p>Use the <code>DeleteUtterances</code> operation to manually delete stored utterances for a specific user. When you use the <code>DeleteUtterances</code> operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the <code>GetUtterancesView</code> operation are deleted after 15 days.</p> <p>This operation requires permissions for the <code>lex:DeleteUtterances</code> action.</p>

<h3 id="deleteutterances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botName|path|string|true|The name of the bot that stored the utterances.|
|userId|path|string|true| The unique identifier for the user that made the utterances. This is the user ID that was sent in the <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> operation request that contained the utterance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deleteutterances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBot

<a id="opIdGetBot"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /bots/{name}/versions/{versionoralias}`

<p>Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias. </p> <p> This operation requires permissions for the <code>lex:GetBot</code> action. </p>

<h3 id="getbot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the bot. The name is case sensitive. |
|versionoralias|path|string|true|The version or alias of the bot.|
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
  "version": "$LATEST",
  "name": "DocOrderPizzaBot",
  "abortStatement": {
    "messages": [
      {
        "content": "I don't understand. Can you try again?",
        "contentType": "PlainText"
      },
      {
        "content": "I'm sorry, I don't understand.",
        "contentType": "PlainText"
      }
    ]
  },
  "checksum": "20172ee3-fa06-49b2-bbc5-667c090303e9",
  "childDirected": true,
  "clarificationPrompt": {
    "maxAttempts": 1,
    "messages": [
      {
        "content": "I'm sorry, I didn't hear that. Can you repeate what you just said?",
        "contentType": "PlainText"
      },
      {
        "content": "Can you say that again?",
        "contentType": "PlainText"
      }
    ]
  },
  "createdDate": 1494360160.133,
  "description": "Orders a pizza from a local pizzeria.",
  "idleSessionTTLInSeconds": 300,
  "intents": [
    {
      "intentName": "DocOrderPizza",
      "intentVersion": "$LATEST"
    }
  ],
  "lastUpdatedDate": 1494360160.133,
  "locale": "en-US",
  "status": "NOT_BUILT"
}
```

> 480 Response

```json
null
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

<h3 id="getbot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBotResponse](#schemagetbotresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBotAliases

<a id="opIdGetBotAliases"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/string/aliases/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /bots/{botName}/aliases/`

<p>Returns a list of aliases for a specified Amazon Lex bot.</p> <p>This operation requires permissions for the <code>lex:GetBotAliases</code> action.</p>

<h3 id="getbotaliases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botName|path|string|true|The name of the bot.|
|nextToken|query|string|false|A pagination token for fetching the next page of aliases. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of aliases, specify the pagination token in the next request. |
|maxResults|query|integer|false|The maximum number of aliases to return in the response. The default is 50. . |
|nameContains|query|string|false|Substring to match in bot alias names. An alias will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."|
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
  "BotAliases": {},
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

<h3 id="getbotaliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBotAliasesResponse](#schemagetbotaliasesresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBotChannelAssociations

<a id="opIdGetBotChannelAssociations"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/string/aliases/string/channels/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /bots/{botName}/aliases/{aliasName}/channels/`

<p> Returns a list of all of the channels associated with the specified bot. </p> <p>The <code>GetBotChannelAssociations</code> operation requires permissions for the <code>lex:GetBotChannelAssociations</code> action.</p>

<h3 id="getbotchannelassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botName|path|string|true|The name of the Amazon Lex bot in the association.|
|aliasName|path|string|true|An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.|
|nextToken|query|string|false|A pagination token for fetching the next page of associations. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of associations, specify the pagination token in the next request. |
|maxResults|query|integer|false|The maximum number of associations to return in the response. The default is 50. |
|nameContains|query|string|false|Substring to match in channel association names. An association will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To return all bot channel associations, use a hyphen ("-") as the <code>nameContains</code> parameter.|
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
  "botChannelAssociations": {},
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

<h3 id="getbotchannelassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBotChannelAssociationsResponse](#schemagetbotchannelassociationsresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBotVersions

<a id="opIdGetBotVersions"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/string/versions/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /bots/{name}/versions/`

<p>Gets information about all of the versions of a bot.</p> <p>The <code>GetBotVersions</code> operation returns a <code>BotMetadata</code> object for each version of a bot. For example, if a bot has three numbered versions, the <code>GetBotVersions</code> operation returns four <code>BotMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetBotVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetBotVersions</code> action.</p>

<h3 id="getbotversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the bot for which versions should be returned.|
|nextToken|query|string|false|A pagination token for fetching the next page of bot versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. |
|maxResults|query|integer|false|The maximum number of bot versions to return in the response. The default is 10.|
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
  "bots": {},
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

<h3 id="getbotversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBotVersionsResponse](#schemagetbotversionsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBots

<a id="opIdGetBots"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/bots/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /bots/`

<p>Returns bot information as follows: </p> <ul> <li> <p>If you provide the <code>nameContains</code> field, the response includes information for the <code>$LATEST</code> version of all bots whose name contains the specified string.</p> </li> <li> <p>If you don't specify the <code>nameContains</code> field, the operation returns information about the <code>$LATEST</code> version of all of your bots.</p> </li> </ul> <p>This operation requires permission for the <code>lex:GetBots</code> action.</p>

<h3 id="getbots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|A pagination token that fetches the next page of bots. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of bots, specify the pagination token in the next request. |
|maxResults|query|integer|false|The maximum number of bots to return in the response that the request will return. The default is 10.|
|nameContains|query|string|false|Substring to match in bot names. A bot will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."|
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
  "bots": [
    {
      "version": "$LATEST",
      "name": "DocOrderPizzaBot",
      "createdDate": 1494360160.133,
      "description": "Orders a pizza from a local pizzeria.",
      "lastUpdatedDate": 1494360160.133,
      "status": "NOT_BUILT"
    }
  ]
}
```

> 480 Response

```json
null
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

<h3 id="getbots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBotsResponse](#schemagetbotsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBuiltinIntent

<a id="opIdGetBuiltinIntent"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/builtins/intents/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /builtins/intents/{signature}`

<p>Returns information about a built-in intent.</p> <p>This operation requires permission for the <code>lex:GetBuiltinIntent</code> action.</p>

<h3 id="getbuiltinintent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature|path|string|true|The unique identifier for a built-in intent. To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.|
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
  "signature": {},
  "supportedLocales": {},
  "slots": {}
}
```

> 480 Response

```json
null
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

<h3 id="getbuiltinintent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBuiltinIntentResponse](#schemagetbuiltinintentresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBuiltinIntents

<a id="opIdGetBuiltinIntents"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/builtins/intents/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /builtins/intents/`

<p>Gets a list of built-in intents that meet the specified criteria.</p> <p>This operation requires permission for the <code>lex:GetBuiltinIntents</code> action.</p>

<h3 id="getbuiltinintents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|A list of locales that the intent supports.|
|signatureContains|query|string|false|Substring to match in built-in intent signatures. An intent will be returned if any part of its signature matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.|
|nextToken|query|string|false|A pagination token that fetches the next page of intents. If this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, use the pagination token in the next request.|
|maxResults|query|integer|false|The maximum number of intents to return in the response. The default is 10.|
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
|locale|de-DE|
|locale|en-AU|
|locale|en-GB|
|locale|en-IN|
|locale|en-US|
|locale|es-419|
|locale|es-ES|
|locale|es-US|
|locale|fr-FR|
|locale|fr-CA|
|locale|it-IT|
|locale|ja-JP|
|locale|ko-KR|

> Example responses

> 200 Response

```json
{
  "intents": {},
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

<h3 id="getbuiltinintents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBuiltinIntentsResponse](#schemagetbuiltinintentsresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBuiltinSlotTypes

<a id="opIdGetBuiltinSlotTypes"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/builtins/slottypes/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /builtins/slottypes/`

<p>Gets a list of built-in slot types that meet the specified criteria.</p> <p>For a list of built-in slot types, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills Kit</i>.</p> <p>This operation requires permission for the <code>lex:GetBuiltInSlotTypes</code> action.</p>

<h3 id="getbuiltinslottypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|A list of locales that the slot type supports.|
|signatureContains|query|string|false|Substring to match in built-in slot type signatures. A slot type will be returned if any part of its signature matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."|
|nextToken|query|string|false|A pagination token that fetches the next page of slot types. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of slot types, specify the pagination token in the next request.|
|maxResults|query|integer|false|The maximum number of slot types to return in the response. The default is 10.|
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
|locale|de-DE|
|locale|en-AU|
|locale|en-GB|
|locale|en-IN|
|locale|en-US|
|locale|es-419|
|locale|es-ES|
|locale|es-US|
|locale|fr-FR|
|locale|fr-CA|
|locale|it-IT|
|locale|ja-JP|
|locale|ko-KR|

> Example responses

> 200 Response

```json
{
  "slotTypes": {},
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

<h3 id="getbuiltinslottypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBuiltinSlotTypesResponse](#schemagetbuiltinslottypesresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetExport

<a id="opIdGetExport"></a>

> Code samples

```bash
curl 'https://lex-models.us-east-1.amazonaws.com/exports/#name&version&resourceType&exportType?name=string&version=string&resourceType=BOT&exportType=ALEXA_SKILLS_KIT' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /exports/#name&version&resourceType&exportType`

Exports the contents of a Amazon Lex resource in a specified format. 

<h3 id="getexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|The name of the bot to export.|
|version|query|string|true|The version of the bot to export.|
|resourceType|query|string|true|The type of resource to export. |
|exportType|query|string|true|The format of the exported data.|
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
|resourceType|BOT|
|resourceType|INTENT|
|resourceType|SLOT_TYPE|
|exportType|ALEXA_SKILLS_KIT|
|exportType|LEX|

> Example responses

> 200 Response

```json
{
  "name": {},
  "version": {},
  "resourceType": {},
  "exportType": {},
  "exportStatus": {},
  "failureReason": {},
  "url": {}
}
```

> 480 Response

```json
null
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

<h3 id="getexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetExportResponse](#schemagetexportresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetImport

<a id="opIdGetImport"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/imports/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /imports/{importId}`

Gets information about an import job started with the <code>StartImport</code> operation.

<h3 id="getimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|importId|path|string|true|The identifier of the import job information to return.|
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
  "name": {},
  "resourceType": {},
  "mergeStrategy": {},
  "importId": {},
  "importStatus": {},
  "failureReason": {},
  "createdDate": {}
}
```

> 480 Response

```json
null
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

<h3 id="getimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetImportResponse](#schemagetimportresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIntentVersions

<a id="opIdGetIntentVersions"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/intents/string/versions/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /intents/{name}/versions/`

<p>Gets information about all of the versions of an intent.</p> <p>The <code>GetIntentVersions</code> operation returns an <code>IntentMetadata</code> object for each version of an intent. For example, if an intent has three numbered versions, the <code>GetIntentVersions</code> operation returns four <code>IntentMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetIntentVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetIntentVersions</code> action.</p>

<h3 id="getintentversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the intent for which versions should be returned.|
|nextToken|query|string|false|A pagination token for fetching the next page of intent versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. |
|maxResults|query|integer|false|The maximum number of intent versions to return in the response. The default is 10.|
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
  "intents": {},
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

<h3 id="getintentversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIntentVersionsResponse](#schemagetintentversionsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIntents

<a id="opIdGetIntents"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/intents/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /intents/`

<p>Returns intent information as follows: </p> <ul> <li> <p>If you specify the <code>nameContains</code> field, returns the <code>$LATEST</code> version of all intents that contain the specified string.</p> </li> <li> <p> If you don't specify the <code>nameContains</code> field, returns information about the <code>$LATEST</code> version of all intents. </p> </li> </ul> <p> The operation requires permission for the <code>lex:GetIntents</code> action. </p>

<h3 id="getintents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|A pagination token that fetches the next page of intents. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, specify the pagination token in the next request. |
|maxResults|query|integer|false|The maximum number of intents to return in the response. The default is 10.|
|nameContains|query|string|false|Substring to match in intent names. An intent will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."|
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
  "intents": [
    {
      "version": "$LATEST",
      "name": "DocOrderPizza",
      "createdDate": 1494359783.453,
      "description": "Order a pizza from a local pizzeria.",
      "lastUpdatedDate": 1494359783.453
    }
  ]
}
```

> 480 Response

```json
null
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

<h3 id="getintents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIntentsResponse](#schemagetintentsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMigration

<a id="opIdGetMigration"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/migrations/stringstri \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /migrations/{migrationId}`

Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon Lex V2 bot. Use this operation to view the migration alerts and warnings related to the migration.

<h3 id="getmigration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|migrationId|path|string|true|The unique identifier of the migration to view. The <code>migrationID</code> is returned by the operation.|
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
  "migrationId": {},
  "v1BotName": {},
  "v1BotVersion": {},
  "v1BotLocale": {},
  "v2BotId": {},
  "v2BotRole": {},
  "migrationStatus": {},
  "migrationStrategy": {},
  "migrationTimestamp": {},
  "alerts": {}
}
```

> 480 Response

```json
null
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

<h3 id="getmigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMigrationResponse](#schemagetmigrationresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMigrations

<a id="opIdGetMigrations"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/migrations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /migrations`

Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.

<h3 id="getmigrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sortByAttribute|query|string|false|The field to sort the list of migrations by. You can sort by the Amazon Lex V1 bot name or the date and time that the migration was started.|
|sortByOrder|query|string|false|The order so sort the list.|
|v1BotNameContains|query|string|false|Filters the list to contain only bots whose name contains the specified string. The string is matched anywhere in bot name.|
|migrationStatusEquals|query|string|false|Filters the list to contain only migrations in the specified state.|
|maxResults|query|integer|false|The maximum number of migrations to return in the response. The default is 10.|
|nextToken|query|string|false|A pagination token that fetches the next page of migrations. If the response to this operation is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of migrations, specify the pagination token in the request.|
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
|sortByAttribute|V1_BOT_NAME|
|sortByAttribute|MIGRATION_DATE_TIME|
|sortByOrder|ASCENDING|
|sortByOrder|DESCENDING|
|migrationStatusEquals|IN_PROGRESS|
|migrationStatusEquals|COMPLETED|
|migrationStatusEquals|FAILED|

> Example responses

> 200 Response

```json
{
  "migrationSummaries": {},
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

<h3 id="getmigrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMigrationsResponse](#schemagetmigrationsresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartMigration

<a id="opIdStartMigration"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/migrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "v1BotName": "string",
    "v1BotVersion": "string",
    "v2BotName": "string",
    "v2BotRole": "stringstringstringst",
    "migrationStrategy": "CREATE_NEW"
  }'
```

`POST /migrations`

<p>Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when you want to take advantage of the new features of Amazon Lex V2.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/migrate.html">Migrating a bot</a> in the <i>Amazon Lex developer guide</i>.</p>

> Body parameter

```json
{
  "v1BotName": "string",
  "v1BotVersion": "string",
  "v2BotName": "string",
  "v2BotRole": "stringstringstringst",
  "migrationStrategy": "CREATE_NEW"
}
```

<h3 id="startmigration-parameters">Parameters</h3>

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
|» v1BotName|body|string|true|The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2.|
|» v1BotVersion|body|string|true|The version of the bot to migrate to Amazon Lex V2. You can migrate the <code>$LATEST</code> version as well as any numbered version.|
|» v2BotName|body|string|true|<p>The name of the Amazon Lex V2 bot that you are migrating the Amazon Lex V1 bot to. </p> <ul> <li> <p>If the Amazon Lex V2 bot doesn't exist, you must use the <code>CREATE_NEW</code> migration strategy.</p> </li> <li> <p>If the Amazon Lex V2 bot exists, you must use the <code>UPDATE_EXISTING</code> migration strategy to change the contents of the Amazon Lex V2 bot.</p> </li> </ul>|
|» v2BotRole|body|string|true|The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.|
|» migrationStrategy|body|string|true|<p>The strategy used to conduct the migration.</p> <ul> <li> <p> <code>CREATE_NEW</code> - Creates a new Amazon Lex V2 bot and migrates the Amazon Lex V1 bot to the new bot.</p> </li> <li> <p> <code>UPDATE_EXISTING</code> - Overwrites the existing Amazon Lex V2 bot metadata and the locale being migrated. It doesn't change any other locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale is created in the Amazon Lex V2 bot.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» migrationStrategy|CREATE_NEW|
|» migrationStrategy|UPDATE_EXISTING|

> Example responses

> 202 Response

```json
{
  "v1BotName": {},
  "v1BotVersion": {},
  "v1BotLocale": {},
  "v2BotId": {},
  "v2BotRole": {},
  "migrationId": {},
  "migrationStrategy": {},
  "migrationTimestamp": {}
}
```

> 480 Response

```json
null
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

<h3 id="startmigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[StartMigrationResponse](#schemastartmigrationresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSlotType

<a id="opIdGetSlotType"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/slottypes/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /slottypes/{name}/versions/{version}`

<p>Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must specify the slot type version.</p> <p>This operation requires permissions for the <code>lex:GetSlotType</code> action.</p>

<h3 id="getslottype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the slot type. The name is case sensitive. |
|version|path|string|true|The version of the slot type. |
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
  "version": "$LATEST",
  "name": "DocPizzaCrustType",
  "checksum": "210b3d5a-90a3-4b22-ac7e-f50c2c71095f",
  "createdDate": 1494359274.403,
  "description": "Available crust types",
  "enumerationValues": [
    {
      "value": "thick"
    },
    {
      "value": "thin"
    }
  ],
  "lastUpdatedDate": 1494359274.403
}
```

> 480 Response

```json
null
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

<h3 id="getslottype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSlotTypeResponse](#schemagetslottyperesponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSlotTypeVersions

<a id="opIdGetSlotTypeVersions"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/slottypes/string/versions/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /slottypes/{name}/versions/`

<p>Gets information about all versions of a slot type.</p> <p>The <code>GetSlotTypeVersions</code> operation returns a <code>SlotTypeMetadata</code> object for each version of a slot type. For example, if a slot type has three numbered versions, the <code>GetSlotTypeVersions</code> operation returns four <code>SlotTypeMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetSlotTypeVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetSlotTypeVersions</code> action.</p>

<h3 id="getslottypeversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the slot type for which versions should be returned.|
|nextToken|query|string|false|A pagination token for fetching the next page of slot type versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. |
|maxResults|query|integer|false|The maximum number of slot type versions to return in the response. The default is 10.|
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
  "slotTypes": {},
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

<h3 id="getslottypeversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSlotTypeVersionsResponse](#schemagetslottypeversionsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSlotTypes

<a id="opIdGetSlotTypes"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/slottypes/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /slottypes/`

<p>Returns slot type information as follows: </p> <ul> <li> <p>If you specify the <code>nameContains</code> field, returns the <code>$LATEST</code> version of all slot types that contain the specified string.</p> </li> <li> <p> If you don't specify the <code>nameContains</code> field, returns information about the <code>$LATEST</code> version of all slot types. </p> </li> </ul> <p> The operation requires permission for the <code>lex:GetSlotTypes</code> action. </p>

<h3 id="getslottypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|A pagination token that fetches the next page of slot types. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch next page of slot types, specify the pagination token in the next request.|
|maxResults|query|integer|false|The maximum number of slot types to return in the response. The default is 10.|
|nameContains|query|string|false|Substring to match in slot type names. A slot type will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."|
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
  "slotTypes": [
    {
      "version": "$LATEST",
      "name": "DocPizzaCrustType",
      "createdDate": 1494359274.403,
      "description": "Available crust types",
      "lastUpdatedDate": 1494359274.403
    },
    {
      "version": "$LATEST",
      "name": "DocPizzaSauceType",
      "createdDate": 1494356442.23,
      "description": "Available pizza sauces",
      "lastUpdatedDate": 1494356442.23
    },
    {
      "version": "$LATEST",
      "name": "DocPizzaType",
      "createdDate": 1494359198.656,
      "description": "Available pizzas",
      "lastUpdatedDate": 1494359198.656
    }
  ]
}
```

> 480 Response

```json
null
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

<h3 id="getslottypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSlotTypesResponse](#schemagetslottypesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUtterancesView

<a id="opIdGetUtterancesView"></a>

> Code samples

```bash
curl 'https://lex-models.us-east-1.amazonaws.com/bots/string/utterances#view=aggregation&bot_versions&status_type?bot_versions=string&status_type=Detected&view=aggregation' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /bots/{botname}/utterances#view=aggregation&bot_versions&status_type`

<p>Use the <code>GetUtterancesView</code> operation to get information about the utterances that your users have made to your bot. You can use this list to tune the utterances that your bot responds to.</p> <p>For example, say that you have created a bot to order flowers. After your users have used your bot for a while, use the <code>GetUtterancesView</code> operation to see the requests that they have made and whether they have been successful. You might find that the utterance "I want flowers" is not being recognized. You could add this utterance to the <code>OrderFlowers</code> intent so that your bot recognizes that utterance.</p> <p>After you publish a new version of a bot, you can get information about the old version and the new so that you can compare the performance across the two versions. </p> <p>Utterance statistics are generated once a day. Data is available for the last 15 days. You can request information for up to 5 versions of your bot in each request. Amazon Lex returns the most frequent utterances received by the bot in the last 15 days. The response contains information about a maximum of 100 utterances for each version.</p> <p>If you set <code>childDirected</code> field to true when you created your bot, if you are using slot obfuscation with one or more slots, or if you opted out of participating in improving Amazon Lex, utterances are not available.</p> <p>This operation requires permissions for the <code>lex:GetUtterancesView</code> action.</p>

<h3 id="getutterancesview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|botname|path|string|true|The name of the bot for which utterance information should be returned.|
|bot_versions|query|[[Version](#schemaversion)]|true|An array of bot versions for which utterance information should be returned. The limit is 5 versions per request.|
|status_type|query|string|true|To return utterances that were recognized and handled, use <code>Detected</code>. To return utterances that were not recognized, use <code>Missed</code>.|
|view|query|string|true|none|
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
|status_type|Detected|
|status_type|Missed|
|view|aggregation|

> Example responses

> 200 Response

```json
{
  "botName": {},
  "utterances": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getutterancesview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUtterancesViewResponse](#schemagetutterancesviewresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Gets a list of tags associated with the specified resource. Only bots, bot aliases, and bot channels can have tags associated with them.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource to get a list of tags for.|
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`POST /tags/{resourceArn}`

Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.

> Body parameter

```json
{
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel to tag.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|[[Tag](#schematag)]|true|A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the new value.|

> Example responses

> 204 Response

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
|204|No Content|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBot

<a id="opIdPutBot"></a>

> Code samples

```bash
curl 'https://lex-models.us-east-1.amazonaws.com/bots/string/versions/$LATEST' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "intents": [
      {
        "intentName": {},
        "intentVersion": {}
      }
    ],
    "enableModelImprovements": true,
    "nluIntentConfidenceThreshold": 0,
    "clarificationPrompt": {
      "messages": {},
      "maxAttempts": {},
      "responseCard": {}
    },
    "abortStatement": {
      "messages": {},
      "responseCard": {}
    },
    "idleSessionTTLInSeconds": 60,
    "voiceId": "string",
    "checksum": "string",
    "processBehavior": "SAVE",
    "locale": "de-DE",
    "childDirected": true,
    "detectSentiment": true,
    "createVersion": true,
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`PUT /bots/{name}/versions/$LATEST`

<p>Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum information, the bot is created or updated but Amazon Lex returns the <code/> response <code>FAILED</code>. You can build the bot after you add one or more intents. For more information about Amazon Lex bots, see <a>how-it-works</a>. </p> <p>If you specify the name of an existing bot, the fields in the request replace the existing values in the <code>$LATEST</code> version of the bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the <code>idleTTLInSeconds</code> and <code>privacySettings</code> fields, which are set to their default values. If you don't specify values for required fields, Amazon Lex throws an exception.</p> <p>This operation requires permissions for the <code>lex:PutBot</code> action. For more information, see <a>security-iam</a>.</p>

> Body parameter

```json
{
  "description": "string",
  "intents": [
    {
      "intentName": {},
      "intentVersion": {}
    }
  ],
  "enableModelImprovements": true,
  "nluIntentConfidenceThreshold": 0,
  "clarificationPrompt": {
    "messages": {},
    "maxAttempts": {},
    "responseCard": {}
  },
  "abortStatement": {
    "messages": {},
    "responseCard": {}
  },
  "idleSessionTTLInSeconds": 60,
  "voiceId": "string",
  "checksum": "string",
  "processBehavior": "SAVE",
  "locale": "de-DE",
  "childDirected": true,
  "detectSentiment": true,
  "createVersion": true,
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="putbot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the bot. The name is <i>not</i> case sensitive. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|A description of the bot.|
|» intents|body|[[Intent](#schemaintent)]|false|An array of <code>Intent</code> objects. Each intent represents a command that a user can express. For example, a pizza ordering bot might support an OrderPizza intent. For more information, see <a>how-it-works</a>.|
|» enableModelImprovements|body|boolean|false|<p>Set to <code>true</code> to enable access to natural language understanding improvements. </p> <p>When you set the <code>enableModelImprovements</code> parameter to <code>true</code> you can use the <code>nluIntentConfidenceThreshold</code> parameter to configure confidence scores. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/confidence-scores.html">Confidence Scores</a>.</p> <p>You can only set the <code>enableModelImprovements</code> parameter in certain Regions. If you set the parameter to <code>true</code>, your bot has access to accuracy improvements.</p> <p>The Regions where you can set the <code>enableModelImprovements</code> parameter to <code>true</code> are:</p> <ul> <li> <p>US East (N. Virginia) (us-east-1)</p> </li> <li> <p>US West (Oregon) (us-west-2)</p> </li> <li> <p>Asia Pacific (Sydney) (ap-southeast-2)</p> </li> <li> <p>EU (Ireland) (eu-west-1)</p> </li> </ul> <p>In other Regions, the <code>enableModelImprovements</code> parameter is set to <code>true</code> by default. In these Regions setting the parameter to <code>false</code> throws a <code>ValidationException</code> exception.</p>|
|» nluIntentConfidenceThreshold|body|number(double)|false|<p>Determines the threshold where Amazon Lex will insert the <code>AMAZON.FallbackIntent</code>, <code>AMAZON.KendraSearchIntent</code>, or both when returning alternative intents in a <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> response. <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> are only inserted if they are configured for the bot.</p> <p>You must set the <code>enableModelImprovements</code> parameter to <code>true</code> to use confidence scores in the following regions.</p> <ul> <li> <p>US East (N. Virginia) (us-east-1)</p> </li> <li> <p>US West (Oregon) (us-west-2)</p> </li> <li> <p>Asia Pacific (Sydney) (ap-southeast-2)</p> </li> <li> <p>EU (Ireland) (eu-west-1)</p> </li> </ul> <p>In other Regions, the <code>enableModelImprovements</code> parameter is set to <code>true</code> by default.</p> <p>For example, suppose a bot is configured with the confidence threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the <code>PostText</code> operation would be:</p> <ul> <li> <p>AMAZON.FallbackIntent</p> </li> <li> <p>IntentA</p> </li> <li> <p>IntentB</p> </li> <li> <p>IntentC</p> </li> </ul>|
|» clarificationPrompt|body|object|false|Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.|
|» » messages|body|object|false|none|
|» » maxAttempts|body|object|false|none|
|» » responseCard|body|object|false|none|
|» abortStatement|body|object|false|A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. |
|» » messages|body|object|false|none|
|» » responseCard|body|object|false|none|
|» idleSessionTTLInSeconds|body|integer|false|<p>The maximum time in seconds that Amazon Lex retains the data gathered in a conversation.</p> <p>A user interaction session remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>For example, suppose that a user chooses the OrderPizza intent, but gets sidetracked halfway through placing an order. If the user doesn't complete the order within the specified time, Amazon Lex discards the slot information that it gathered, and the user must start over.</p> <p>If you don't include the <code>idleSessionTTLInSeconds</code> element in a <code>PutBot</code> operation request, Amazon Lex uses the default value. This is also true if the request replaces an existing bot.</p> <p>The default is 300 seconds (5 minutes).</p>|
|» voiceId|body|string|false|The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale configured for the voice must match the locale of the bot. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Voices in Amazon Polly</a> in the <i>Amazon Polly Developer Guide</i>.|
|» checksum|body|string|false|<p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new bot, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a bot, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>|
|» processBehavior|body|string|false|<p>If you set the <code>processBehavior</code> element to <code>BUILD</code>, Amazon Lex builds the bot so that it can be run. If you set the element to <code>SAVE</code> Amazon Lex saves the bot, but doesn't build it. </p> <p>If you don't specify this value, the default value is <code>BUILD</code>.</p>|
|» locale|body|string|true|<p> Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the bot. </p> <p>The default is <code>en-US</code>.</p>|
|» childDirected|body|boolean|true|<p>For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying <code>true</code> or <code>false</code> in the <code>childDirected</code> field. By specifying <code>true</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying <code>false</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is not</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the <code>childDirected</code> field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.</p> <p>If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a> </p>|
|» detectSentiment|body|boolean|false|When set to <code>true</code> user utterances are sent to Amazon Comprehend for sentiment analysis. If you don't specify <code>detectSentiment</code>, the default is <code>false</code>.|
|» createVersion|body|boolean|false|When set to <code>true</code> a new numbered version of the bot is created. This is the same as calling the <code>CreateBotVersion</code> operation. If you don't specify <code>createVersion</code>, the default is <code>false</code>.|
|» tags|body|[[Tag](#schematag)]|false|A list of tags to add to the bot. You can only add tags when you create a bot, you can't use the <code>PutBot</code> operation to update the tags on a bot. To update tags, use the <code>TagResource</code> operation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» processBehavior|SAVE|
|» processBehavior|BUILD|
|» locale|de-DE|
|» locale|en-AU|
|» locale|en-GB|
|» locale|en-IN|
|» locale|en-US|
|» locale|es-419|
|» locale|es-ES|
|» locale|es-US|
|» locale|fr-FR|
|» locale|fr-CA|
|» locale|it-IT|
|» locale|ja-JP|
|» locale|ko-KR|

> Example responses

> 200 Response

```json
{
  "version": "$LATEST",
  "name": "DocOrderPizzaBot",
  "abortStatement": {
    "messages": [
      {
        "content": "I don't understand. Can you try again?",
        "contentType": "PlainText"
      },
      {
        "content": "I'm sorry, I don't understand.",
        "contentType": "PlainText"
      }
    ]
  },
  "checksum": "20172ee3-fa06-49b2-bbc5-667c090303e9",
  "childDirected": true,
  "clarificationPrompt": {
    "maxAttempts": 1,
    "messages": [
      {
        "content": "I'm sorry, I didn't hear that. Can you repeate what you just said?",
        "contentType": "PlainText"
      },
      {
        "content": "Can you say that again?",
        "contentType": "PlainText"
      }
    ]
  },
  "createdDate": 1494360160.133,
  "description": "Orders a pizza from a local pizzeria.",
  "idleSessionTTLInSeconds": 300,
  "intents": [
    {
      "intentName": "DocOrderPizza",
      "intentVersion": "$LATEST"
    }
  ],
  "lastUpdatedDate": 1494360160.133,
  "locale": "en-US",
  "status": "NOT_BUILT"
}
```

> 480 Response

```json
null
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

<h3 id="putbot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutBotResponse](#schemaputbotresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutIntent

<a id="opIdPutIntent"></a>

> Code samples

```bash
curl 'https://lex-models.us-east-1.amazonaws.com/intents/string/versions/$LATEST' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "slots": [
      {
        "name": {},
        "description": {},
        "slotConstraint": {},
        "slotType": {},
        "slotTypeVersion": {},
        "valueElicitationPrompt": {
          "messages": {},
          "maxAttempts": {},
          "responseCard": {}
        },
        "priority": {},
        "sampleUtterances": {},
        "responseCard": {},
        "obfuscationSetting": {},
        "defaultValueSpec": {
          "defaultValueList": {}
        }
      }
    ],
    "sampleUtterances": [
      "string"
    ],
    "confirmationPrompt": {
      "messages": {},
      "maxAttempts": {},
      "responseCard": {}
    },
    "rejectionStatement": {
      "messages": {},
      "responseCard": {}
    },
    "followUpPrompt": {
      "prompt": {
        "messages": {},
        "maxAttempts": {},
        "responseCard": {}
      },
      "rejectionStatement": {
        "messages": {},
        "responseCard": {}
      }
    },
    "conclusionStatement": {
      "messages": {},
      "responseCard": {}
    },
    "dialogCodeHook": {
      "uri": {},
      "messageVersion": {}
    },
    "fulfillmentActivity": {
      "type": {},
      "codeHook": {
        "uri": {},
        "messageVersion": {}
      }
    },
    "parentIntentSignature": "string",
    "checksum": "string",
    "createVersion": true,
    "kendraConfiguration": {
      "kendraIndex": {},
      "queryFilterString": {},
      "role": {}
    },
    "inputContexts": [
      {
        "name": {}
      }
    ],
    "outputContexts": [
      {
        "name": {},
        "timeToLiveInSeconds": {},
        "turnsToLive": {}
      }
    ]
  }'
```

`PUT /intents/{name}/versions/$LATEST`

<p>Creates an intent or replaces an existing intent.</p> <p>To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an <code>OrderPizza</code> intent. </p> <p>To create an intent or replace an existing intent, you must provide the following:</p> <ul> <li> <p>Intent name. For example, <code>OrderPizza</code>.</p> </li> <li> <p>Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza."</p> </li> <li> <p>Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza.</p> </li> <li> <p>How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application. </p> </li> </ul> <p>You can specify other optional information in the request, such as:</p> <ul> <li> <p>A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?"</p> </li> <li> <p>A conclusion statement to send to the user after the intent has been fulfilled. For example, "I placed your pizza order."</p> </li> <li> <p>A follow-up prompt that asks the user for additional activity. For example, asking "Do you want to order a drink with your pizza?"</p> </li> </ul> <p>If you specify an existing intent name to update the intent, Amazon Lex replaces the values in the <code>$LATEST</code> version of the intent with the values in the request. Amazon Lex removes fields that you don't provide in the request. If you don't specify the required fields, Amazon Lex throws an exception. When you update the <code>$LATEST</code> version of an intent, the <code>status</code> field of any bot that uses the <code>$LATEST</code> version of the intent is set to <code>NOT_BUILT</code>.</p> <p>For more information, see <a>how-it-works</a>.</p> <p>This operation requires permissions for the <code>lex:PutIntent</code> action.</p>

> Body parameter

```json
{
  "description": "string",
  "slots": [
    {
      "name": {},
      "description": {},
      "slotConstraint": {},
      "slotType": {},
      "slotTypeVersion": {},
      "valueElicitationPrompt": {
        "messages": {},
        "maxAttempts": {},
        "responseCard": {}
      },
      "priority": {},
      "sampleUtterances": {},
      "responseCard": {},
      "obfuscationSetting": {},
      "defaultValueSpec": {
        "defaultValueList": {}
      }
    }
  ],
  "sampleUtterances": [
    "string"
  ],
  "confirmationPrompt": {
    "messages": {},
    "maxAttempts": {},
    "responseCard": {}
  },
  "rejectionStatement": {
    "messages": {},
    "responseCard": {}
  },
  "followUpPrompt": {
    "prompt": {
      "messages": {},
      "maxAttempts": {},
      "responseCard": {}
    },
    "rejectionStatement": {
      "messages": {},
      "responseCard": {}
    }
  },
  "conclusionStatement": {
    "messages": {},
    "responseCard": {}
  },
  "dialogCodeHook": {
    "uri": {},
    "messageVersion": {}
  },
  "fulfillmentActivity": {
    "type": {},
    "codeHook": {
      "uri": {},
      "messageVersion": {}
    }
  },
  "parentIntentSignature": "string",
  "checksum": "string",
  "createVersion": true,
  "kendraConfiguration": {
    "kendraIndex": {},
    "queryFilterString": {},
    "role": {}
  },
  "inputContexts": [
    {
      "name": {}
    }
  ],
  "outputContexts": [
    {
      "name": {},
      "timeToLiveInSeconds": {},
      "turnsToLive": {}
    }
  ]
}
```

<h3 id="putintent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|<p>The name of the intent. The name is <i>not</i> case sensitive. </p> <p>The name can't match a built-in intent name, or a built-in intent name with "AMAZON." removed. For example, because there is a built-in intent called <code>AMAZON.HelpIntent</code>, you can't create a custom intent called <code>HelpIntent</code>.</p> <p>For a list of built-in intents, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|A description of the intent.|
|» slots|body|[[Slot](#schemaslot)]|false|An array of intent slots. At runtime, Amazon Lex elicits required slot values from the user using prompts defined in the slots. For more information, see <a>how-it-works</a>. |
|» sampleUtterances|body|[[Utterance](#schemautterance)]|false|<p>An array of utterances (strings) that a user might say to signal the intent. For example, "I want {PizzaSize} pizza", "Order {Quantity} {PizzaSize} pizzas". </p> <p>In each utterance, a slot name is enclosed in curly braces. </p>|
|» confirmationPrompt|body|object|false|Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.|
|» » messages|body|object|false|none|
|» » maxAttempts|body|object|false|none|
|» » responseCard|body|object|false|none|
|» rejectionStatement|body|object|false|A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. |
|» » messages|body|object|false|none|
|» » responseCard|body|object|false|none|
|» followUpPrompt|body|object|false|A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.|
|» » prompt|body|object|false|none|
|» » » messages|body|object|true|none|
|» » » maxAttempts|body|object|true|none|
|» » » responseCard|body|object|false|none|
|» » rejectionStatement|body|object|false|none|
|» » » messages|body|object|true|none|
|» » » responseCard|body|object|false|none|
|» conclusionStatement|body|object|false|A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. |
|» » messages|body|object|false|none|
|» » responseCard|body|object|false|none|
|» dialogCodeHook|body|object|false|Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..|
|» » uri|body|object|false|none|
|» » messageVersion|body|object|false|none|
|» fulfillmentActivity|body|object|false|<p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>|
|» » type|body|object|false|none|
|» » codeHook|body|object|false|none|
|» » » uri|body|object|true|none|
|» » » messageVersion|body|object|true|none|
|» parentIntentSignature|body|string|false|A unique identifier for the built-in intent to base this intent on. To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.|
|» checksum|body|string|false|<p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new intent, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a intent, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>|
|» createVersion|body|boolean|false|When set to <code>true</code> a new numbered version of the intent is created. This is the same as calling the <code>CreateIntentVersion</code> operation. If you do not specify <code>createVersion</code>, the default is <code>false</code>.|
|» kendraConfiguration|body|object|false|Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html"> AMAZON.KendraSearchIntent</a>.|
|» » kendraIndex|body|object|false|none|
|» » queryFilterString|body|object|false|none|
|» » role|body|object|false|none|
|» inputContexts|body|[[InputContext](#schemainputcontext)]|false|An array of <code>InputContext</code> objects that lists the contexts that must be active for Amazon Lex to choose the intent in a conversation with the user.|
|» outputContexts|body|[[OutputContext](#schemaoutputcontext)]|false|An array of <code>OutputContext</code> objects that lists the contexts that the intent activates when the intent is fulfilled.|

> Example responses

> 200 Response

```json
{
  "version": "$LATEST",
  "name": "DocOrderPizza",
  "checksum": "ca9bc13d-afc8-4706-bbaf-091f7a5935d6",
  "conclusionStatement": {
    "messages": [
      {
        "content": "All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.",
        "contentType": "PlainText"
      },
      {
        "content": "OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.",
        "contentType": "PlainText"
      }
    ],
    "responseCard": "foo"
  },
  "confirmationPrompt": {
    "maxAttempts": 1,
    "messages": [
      {
        "content": "Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?",
        "contentType": "PlainText"
      }
    ]
  },
  "createdDate": 1494359783.453,
  "description": "Order a pizza from a local pizzeria.",
  "fulfillmentActivity": {
    "type": "ReturnIntent"
  },
  "lastUpdatedDate": 1494359783.453,
  "rejectionStatement": {
    "messages": [
      {
        "content": "Ok, I'll cancel your order.",
        "contentType": "PlainText"
      },
      {
        "content": "I cancelled your order.",
        "contentType": "PlainText"
      }
    ]
  },
  "sampleUtterances": [
    "Order me a pizza.",
    "Order me a {Type} pizza.",
    "I want a {Crust} crust {Type} pizza",
    "I want a {Crust} crust {Type} pizza with {Sauce} sauce."
  ],
  "slots": [
    {
      "name": "Sauce",
      "description": "The type of sauce to use on the pizza.",
      "priority": 3,
      "sampleUtterances": [
        "Make it {Sauce} sauce.",
        "I'd like {Sauce} sauce."
      ],
      "slotConstraint": "Required",
      "slotType": "DocPizzaSauceType",
      "slotTypeVersion": "$LATEST",
      "valueElicitationPrompt": {
        "maxAttempts": 1,
        "messages": [
          {
            "content": "White or red sauce?",
            "contentType": "PlainText"
          },
          {
            "content": "Garlic or tomato sauce?",
            "contentType": "PlainText"
          }
        ]
      }
    },
    {
      "name": "Type",
      "description": "The type of pizza to order.",
      "priority": 1,
      "sampleUtterances": [
        "Get me a {Type} pizza.",
        "A {Type} pizza please.",
        "I'd like a {Type} pizza."
      ],
      "slotConstraint": "Required",
      "slotType": "DocPizzaType",
      "slotTypeVersion": "$LATEST",
      "valueElicitationPrompt": {
        "maxAttempts": 1,
        "messages": [
          {
            "content": "What type of pizza would you like?",
            "contentType": "PlainText"
          },
          {
            "content": "Vegie or cheese pizza?",
            "contentType": "PlainText"
          },
          {
            "content": "I can get you a vegie or a cheese pizza.",
            "contentType": "PlainText"
          }
        ]
      }
    },
    {
      "name": "Crust",
      "description": "The type of pizza crust to order.",
      "priority": 2,
      "sampleUtterances": [
        "Make it a {Crust} crust.",
        "I'd like a {Crust} crust."
      ],
      "slotConstraint": "Required",
      "slotType": "DocPizzaCrustType",
      "slotTypeVersion": "$LATEST",
      "valueElicitationPrompt": {
        "maxAttempts": 1,
        "messages": [
          {
            "content": "What type of crust would you like?",
            "contentType": "PlainText"
          },
          {
            "content": "Thick or thin crust?",
            "contentType": "PlainText"
          }
        ]
      }
    }
  ]
}
```

> 480 Response

```json
null
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

<h3 id="putintent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutIntentResponse](#schemaputintentresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutSlotType

<a id="opIdPutSlotType"></a>

> Code samples

```bash
curl 'https://lex-models.us-east-1.amazonaws.com/slottypes/string/versions/$LATEST' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "enumerationValues": [
      {
        "value": {},
        "synonyms": {}
      }
    ],
    "checksum": "string",
    "valueSelectionStrategy": "ORIGINAL_VALUE",
    "createVersion": true,
    "parentSlotTypeSignature": "string",
    "slotTypeConfigurations": [
      {
        "regexConfiguration": {
          "pattern": {}
        }
      }
    ]
  }'
```

`PUT /slottypes/{name}/versions/$LATEST`

<p>Creates a custom slot type or replaces an existing custom slot type.</p> <p>To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see <a>how-it-works</a>.</p> <p>If you specify the name of an existing slot type, the fields in the request replace the existing values in the <code>$LATEST</code> version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. When you update the <code>$LATEST</code> version of a slot type, if a bot uses the <code>$LATEST</code> version of an intent that contains the slot type, the bot's <code>status</code> field is set to <code>NOT_BUILT</code>.</p> <p>This operation requires permissions for the <code>lex:PutSlotType</code> action.</p>

> Body parameter

```json
{
  "description": "string",
  "enumerationValues": [
    {
      "value": {},
      "synonyms": {}
    }
  ],
  "checksum": "string",
  "valueSelectionStrategy": "ORIGINAL_VALUE",
  "createVersion": true,
  "parentSlotTypeSignature": "string",
  "slotTypeConfigurations": [
    {
      "regexConfiguration": {
        "pattern": {}
      }
    }
  ]
}
```

<h3 id="putslottype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|<p>The name of the slot type. The name is <i>not</i> case sensitive. </p> <p>The name can't match a built-in slot type name, or a built-in slot type name with "AMAZON." removed. For example, because there is a built-in slot type called <code>AMAZON.DATE</code>, you can't create a custom slot type called <code>DATE</code>.</p> <p>For a list of built-in slot types, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills Kit</i>.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|A description of the slot type.|
|» enumerationValues|body|[[EnumerationValue](#schemaenumerationvalue)]|false|<p>A list of <code>EnumerationValue</code> objects that defines the values that the slot type can take. Each value can have a list of <code>synonyms</code>, which are additional values that help train the machine learning model about the values that it resolves for a slot. </p> <p>A regular expression slot type doesn't require enumeration values. All other slot types require a list of enumeration values.</p> <p>When Amazon Lex resolves a slot value, it generates a resolution list that contains up to five possible values for the slot. If you are using a Lambda function, this resolution list is passed to the function. If you are not using a Lambda function you can choose to return the value that the user entered or the first value in the resolution list as the slot value. The <code>valueSelectionStrategy</code> field indicates the option to use. </p>|
|» checksum|body|string|false|<p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new slot type, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a slot type, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>|
|» valueSelectionStrategy|body|string|false|<p>Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:</p> <ul> <li> <p> <code>ORIGINAL_VALUE</code> - Returns the value entered by the user, if the user value is similar to the slot value.</p> </li> <li> <p> <code>TOP_RESOLUTION</code> - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.</p> </li> </ul> <p>If you don't specify the <code>valueSelectionStrategy</code>, the default is <code>ORIGINAL_VALUE</code>.</p>|
|» createVersion|body|boolean|false|When set to <code>true</code> a new numbered version of the slot type is created. This is the same as calling the <code>CreateSlotTypeVersion</code> operation. If you do not specify <code>createVersion</code>, the default is <code>false</code>.|
|» parentSlotTypeSignature|body|string|false|<p>The built-in slot type used as the parent of the slot type. When you define a parent slot type, the new slot type has all of the same configuration as the parent.</p> <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>|
|» slotTypeConfigurations|body|[[SlotTypeConfiguration](#schemaslottypeconfiguration)]|false|Configuration information that extends the parent built-in slot type. The configuration is added to the settings for the parent slot type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» valueSelectionStrategy|ORIGINAL_VALUE|
|» valueSelectionStrategy|TOP_RESOLUTION|

> Example responses

> 200 Response

```json
{
  "version": "$LATEST",
  "name": "DocPizzaSauceType",
  "checksum": "cfd00ed1-775d-4357-947c-aca7e73b44ba",
  "createdDate": 1494356442.23,
  "description": "Available pizza sauces",
  "enumerationValues": [
    {
      "value": "red"
    },
    {
      "value": "white"
    }
  ],
  "lastUpdatedDate": 1494356442.23
}
```

> 480 Response

```json
null
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

<h3 id="putslottype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutSlotTypeResponse](#schemaputslottyperesponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartImport

<a id="opIdStartImport"></a>

> Code samples

```bash
curl https://lex-models.us-east-1.amazonaws.com/imports/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "payload": "string",
    "resourceType": "BOT",
    "mergeStrategy": "OVERWRITE_LATEST",
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`POST /imports/`

Starts a job to import a resource to Amazon Lex.

> Body parameter

```json
{
  "payload": "string",
  "resourceType": "BOT",
  "mergeStrategy": "OVERWRITE_LATEST",
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="startimport-parameters">Parameters</h3>

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
|» payload|body|string|true|A zip archive in binary format. The archive should contain one file, a JSON file containing the resource to import. The resource should match the type specified in the <code>resourceType</code> field.|
|» resourceType|body|string|true|<p>Specifies the type of resource to export. Each resource also exports any resources that it depends on. </p> <ul> <li> <p>A bot exports dependent intents.</p> </li> <li> <p>An intent exports dependent slot types.</p> </li> </ul>|
|» mergeStrategy|body|string|true|<p>Specifies the action that the <code>StartImport</code> operation should take when there is an existing resource with the same name.</p> <ul> <li> <p>FAIL_ON_CONFLICT - The import operation is stopped on the first conflict between a resource in the import file and an existing resource. The name of the resource causing the conflict is in the <code>failureReason</code> field of the response to the <code>GetImport</code> operation.</p> <p>OVERWRITE_LATEST - The import operation proceeds even if there is a conflict with an existing resource. The $LASTEST version of the existing resource is overwritten with the data from the import file.</p> </li> </ul>|
|» tags|body|[[Tag](#schematag)]|false|A list of tags to add to the imported bot. You can only add tags when you import a bot, you can't add tags to an intent or slot type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» resourceType|BOT|
|» resourceType|INTENT|
|» resourceType|SLOT_TYPE|
|» mergeStrategy|OVERWRITE_LATEST|
|» mergeStrategy|FAIL_ON_CONFLICT|

> Example responses

> 201 Response

```json
{
  "name": {},
  "resourceType": {},
  "mergeStrategy": {},
  "importId": {},
  "importStatus": {},
  "tags": {},
  "createdDate": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="startimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[StartImportResponse](#schemastartimportresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://lex-models.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes tags from a bot, bot alias or bot channel.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource to remove the tags from.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of tag keys to remove from the resource. If a tag key does not exist on the resource, it is ignored.|
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

> 480 Response

```json
null
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
|204|No Content|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateBotVersionResponse">CreateBotVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebotversionresponse"></a>
<a id="schema_CreateBotVersionResponse"></a>
<a id="tocScreatebotversionresponse"></a>
<a id="tocscreatebotversionresponse"></a>

```json
{
  "name": {},
  "description": {},
  "intents": {},
  "clarificationPrompt": {
    "messages": {},
    "maxAttempts": {},
    "responseCard": {}
  },
  "abortStatement": {
    "messages": {},
    "responseCard": {}
  },
  "status": {},
  "failureReason": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "idleSessionTTLInSeconds": {},
  "voiceId": {},
  "checksum": {},
  "version": {},
  "locale": {},
  "childDirected": {},
  "enableModelImprovements": {},
  "detectSentiment": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|intents|object|false|none|none|
|clarificationPrompt|object|false|none|none|
|abortStatement|object|false|none|none|
|status|object|false|none|none|
|failureReason|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|idleSessionTTLInSeconds|object|false|none|none|
|voiceId|object|false|none|none|
|checksum|object|false|none|none|
|version|object|false|none|none|
|locale|object|false|none|none|
|childDirected|object|false|none|none|
|enableModelImprovements|object|false|none|none|
|detectSentiment|object|false|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

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

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InternalFailureException">InternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailureexception"></a>
<a id="schema_InternalFailureException"></a>
<a id="tocSinternalfailureexception"></a>
<a id="tocsinternalfailureexception"></a>

```json
null
```

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_PreconditionFailedException">PreconditionFailedException</h2>
<!-- backwards compatibility -->
<a id="schemapreconditionfailedexception"></a>
<a id="schema_PreconditionFailedException"></a>
<a id="tocSpreconditionfailedexception"></a>
<a id="tocspreconditionfailedexception"></a>

```json
null
```

<h2 id="tocS_CreateIntentVersionResponse">CreateIntentVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateintentversionresponse"></a>
<a id="schema_CreateIntentVersionResponse"></a>
<a id="tocScreateintentversionresponse"></a>
<a id="tocscreateintentversionresponse"></a>

```json
{
  "name": {},
  "description": {},
  "slots": {},
  "sampleUtterances": {},
  "confirmationPrompt": {
    "messages": {},
    "maxAttempts": {},
    "responseCard": {}
  },
  "rejectionStatement": {
    "messages": {},
    "responseCard": {}
  },
  "followUpPrompt": {
    "prompt": {
      "messages": {},
      "maxAttempts": {},
      "responseCard": {}
    },
    "rejectionStatement": {
      "messages": {},
      "responseCard": {}
    }
  },
  "conclusionStatement": {
    "messages": {},
    "responseCard": {}
  },
  "dialogCodeHook": {
    "uri": {},
    "messageVersion": {}
  },
  "fulfillmentActivity": {
    "type": {},
    "codeHook": {
      "uri": {},
      "messageVersion": {}
    }
  },
  "parentIntentSignature": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "version": {},
  "checksum": {},
  "kendraConfiguration": {
    "kendraIndex": {},
    "queryFilterString": {},
    "role": {}
  },
  "inputContexts": {},
  "outputContexts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|slots|object|false|none|none|
|sampleUtterances|object|false|none|none|
|confirmationPrompt|object|false|none|none|
|rejectionStatement|object|false|none|none|
|followUpPrompt|object|false|none|none|
|conclusionStatement|object|false|none|none|
|dialogCodeHook|object|false|none|none|
|fulfillmentActivity|object|false|none|none|
|parentIntentSignature|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|version|object|false|none|none|
|checksum|object|false|none|none|
|kendraConfiguration|object|false|none|none|
|inputContexts|object|false|none|none|
|outputContexts|object|false|none|none|

<h2 id="tocS_CreateSlotTypeVersionResponse">CreateSlotTypeVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateslottypeversionresponse"></a>
<a id="schema_CreateSlotTypeVersionResponse"></a>
<a id="tocScreateslottypeversionresponse"></a>
<a id="tocscreateslottypeversionresponse"></a>

```json
{
  "name": {},
  "description": {},
  "enumerationValues": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "version": {},
  "checksum": {},
  "valueSelectionStrategy": {},
  "parentSlotTypeSignature": {},
  "slotTypeConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|enumerationValues|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|version|object|false|none|none|
|checksum|object|false|none|none|
|valueSelectionStrategy|object|false|none|none|
|parentSlotTypeSignature|object|false|none|none|
|slotTypeConfigurations|object|false|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_GetBotResponse">GetBotResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbotresponse"></a>
<a id="schema_GetBotResponse"></a>
<a id="tocSgetbotresponse"></a>
<a id="tocsgetbotresponse"></a>

```json
{
  "version": "$LATEST",
  "name": "DocOrderPizzaBot",
  "abortStatement": {
    "messages": [
      {
        "content": "I don't understand. Can you try again?",
        "contentType": "PlainText"
      },
      {
        "content": "I'm sorry, I don't understand.",
        "contentType": "PlainText"
      }
    ]
  },
  "checksum": "20172ee3-fa06-49b2-bbc5-667c090303e9",
  "childDirected": true,
  "clarificationPrompt": {
    "maxAttempts": 1,
    "messages": [
      {
        "content": "I'm sorry, I didn't hear that. Can you repeate what you just said?",
        "contentType": "PlainText"
      },
      {
        "content": "Can you say that again?",
        "contentType": "PlainText"
      }
    ]
  },
  "createdDate": 1494360160.133,
  "description": "Orders a pizza from a local pizzeria.",
  "idleSessionTTLInSeconds": 300,
  "intents": [
    {
      "intentName": "DocOrderPizza",
      "intentVersion": "$LATEST"
    }
  ],
  "lastUpdatedDate": 1494360160.133,
  "locale": "en-US",
  "status": "NOT_BUILT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|intents|object|false|none|none|
|enableModelImprovements|object|false|none|none|
|nluIntentConfidenceThreshold|object|false|none|none|
|clarificationPrompt|object|false|none|none|
|abortStatement|object|false|none|none|
|status|object|false|none|none|
|failureReason|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|idleSessionTTLInSeconds|object|false|none|none|
|voiceId|object|false|none|none|
|checksum|object|false|none|none|
|version|object|false|none|none|
|locale|object|false|none|none|
|childDirected|object|false|none|none|
|detectSentiment|object|false|none|none|

<h2 id="tocS_GetBotAliasResponse">GetBotAliasResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbotaliasresponse"></a>
<a id="schema_GetBotAliasResponse"></a>
<a id="tocSgetbotaliasresponse"></a>
<a id="tocsgetbotaliasresponse"></a>

```json
{
  "name": {},
  "description": {},
  "botVersion": {},
  "botName": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "checksum": {},
  "conversationLogs": {
    "logSettings": {},
    "iamRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|botVersion|object|false|none|none|
|botName|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|checksum|object|false|none|none|
|conversationLogs|object|false|none|none|

<h2 id="tocS_GetBotAliasesResponse">GetBotAliasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbotaliasesresponse"></a>
<a id="schema_GetBotAliasesResponse"></a>
<a id="tocSgetbotaliasesresponse"></a>
<a id="tocsgetbotaliasesresponse"></a>

```json
{
  "BotAliases": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BotAliases|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetBotChannelAssociationResponse">GetBotChannelAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbotchannelassociationresponse"></a>
<a id="schema_GetBotChannelAssociationResponse"></a>
<a id="tocSgetbotchannelassociationresponse"></a>
<a id="tocsgetbotchannelassociationresponse"></a>

```json
{
  "name": {},
  "description": {},
  "botAlias": {},
  "botName": {},
  "createdDate": {},
  "type": {},
  "botConfiguration": {
    "property1": "string",
    "property2": "string"
  },
  "status": {},
  "failureReason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|botAlias|object|false|none|none|
|botName|object|false|none|none|
|createdDate|object|false|none|none|
|type|object|false|none|none|
|botConfiguration|object|false|none|none|
|status|object|false|none|none|
|failureReason|object|false|none|none|

<h2 id="tocS_GetBotChannelAssociationsResponse">GetBotChannelAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbotchannelassociationsresponse"></a>
<a id="schema_GetBotChannelAssociationsResponse"></a>
<a id="tocSgetbotchannelassociationsresponse"></a>
<a id="tocsgetbotchannelassociationsresponse"></a>

```json
{
  "botChannelAssociations": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|botChannelAssociations|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetBotVersionsResponse">GetBotVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbotversionsresponse"></a>
<a id="schema_GetBotVersionsResponse"></a>
<a id="tocSgetbotversionsresponse"></a>
<a id="tocsgetbotversionsresponse"></a>

```json
{
  "bots": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bots|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetBotsResponse">GetBotsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbotsresponse"></a>
<a id="schema_GetBotsResponse"></a>
<a id="tocSgetbotsresponse"></a>
<a id="tocsgetbotsresponse"></a>

```json
{
  "bots": [
    {
      "version": "$LATEST",
      "name": "DocOrderPizzaBot",
      "createdDate": 1494360160.133,
      "description": "Orders a pizza from a local pizzeria.",
      "lastUpdatedDate": 1494360160.133,
      "status": "NOT_BUILT"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bots|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetBuiltinIntentResponse">GetBuiltinIntentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbuiltinintentresponse"></a>
<a id="schema_GetBuiltinIntentResponse"></a>
<a id="tocSgetbuiltinintentresponse"></a>
<a id="tocsgetbuiltinintentresponse"></a>

```json
{
  "signature": {},
  "supportedLocales": {},
  "slots": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signature|object|false|none|none|
|supportedLocales|object|false|none|none|
|slots|object|false|none|none|

<h2 id="tocS_GetBuiltinIntentsResponse">GetBuiltinIntentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbuiltinintentsresponse"></a>
<a id="schema_GetBuiltinIntentsResponse"></a>
<a id="tocSgetbuiltinintentsresponse"></a>
<a id="tocsgetbuiltinintentsresponse"></a>

```json
{
  "intents": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intents|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetBuiltinSlotTypesResponse">GetBuiltinSlotTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbuiltinslottypesresponse"></a>
<a id="schema_GetBuiltinSlotTypesResponse"></a>
<a id="tocSgetbuiltinslottypesresponse"></a>
<a id="tocsgetbuiltinslottypesresponse"></a>

```json
{
  "slotTypes": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slotTypes|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetExportResponse">GetExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetexportresponse"></a>
<a id="schema_GetExportResponse"></a>
<a id="tocSgetexportresponse"></a>
<a id="tocsgetexportresponse"></a>

```json
{
  "name": {},
  "version": {},
  "resourceType": {},
  "exportType": {},
  "exportStatus": {},
  "failureReason": {},
  "url": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|version|object|false|none|none|
|resourceType|object|false|none|none|
|exportType|object|false|none|none|
|exportStatus|object|false|none|none|
|failureReason|object|false|none|none|
|url|object|false|none|none|

<h2 id="tocS_GetImportResponse">GetImportResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetimportresponse"></a>
<a id="schema_GetImportResponse"></a>
<a id="tocSgetimportresponse"></a>
<a id="tocsgetimportresponse"></a>

```json
{
  "name": {},
  "resourceType": {},
  "mergeStrategy": {},
  "importId": {},
  "importStatus": {},
  "failureReason": {},
  "createdDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|resourceType|object|false|none|none|
|mergeStrategy|object|false|none|none|
|importId|object|false|none|none|
|importStatus|object|false|none|none|
|failureReason|object|false|none|none|
|createdDate|object|false|none|none|

<h2 id="tocS_GetIntentResponse">GetIntentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetintentresponse"></a>
<a id="schema_GetIntentResponse"></a>
<a id="tocSgetintentresponse"></a>
<a id="tocsgetintentresponse"></a>

```json
{
  "version": "$LATEST",
  "name": "DocOrderPizza",
  "checksum": "ca9bc13d-afc8-4706-bbaf-091f7a5935d6",
  "conclusionStatement": {
    "messages": [
      {
        "content": "All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.",
        "contentType": "PlainText"
      },
      {
        "content": "OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.",
        "contentType": "PlainText"
      }
    ],
    "responseCard": "foo"
  },
  "confirmationPrompt": {
    "maxAttempts": 1,
    "messages": [
      {
        "content": "Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?",
        "contentType": "PlainText"
      }
    ]
  },
  "createdDate": 1494359783.453,
  "description": "Order a pizza from a local pizzeria.",
  "fulfillmentActivity": {
    "type": "ReturnIntent"
  },
  "lastUpdatedDate": 1494359783.453,
  "rejectionStatement": {
    "messages": [
      {
        "content": "Ok, I'll cancel your order.",
        "contentType": "PlainText"
      },
      {
        "content": "I cancelled your order.",
        "contentType": "PlainText"
      }
    ]
  },
  "sampleUtterances": [
    "Order me a pizza.",
    "Order me a {Type} pizza.",
    "I want a {Crust} crust {Type} pizza",
    "I want a {Crust} crust {Type} pizza with {Sauce} sauce."
  ],
  "slots": [
    {
      "name": "Type",
      "description": "The type of pizza to order.",
      "priority": 1,
      "sampleUtterances": [
        "Get me a {Type} pizza.",
        "A {Type} pizza please.",
        "I'd like a {Type} pizza."
      ],
      "slotConstraint": "Required",
      "slotType": "DocPizzaType",
      "slotTypeVersion": "$LATEST",
      "valueElicitationPrompt": {
        "maxAttempts": 1,
        "messages": [
          {
            "content": "What type of pizza would you like?",
            "contentType": "PlainText"
          },
          {
            "content": "Vegie or cheese pizza?",
            "contentType": "PlainText"
          },
          {
            "content": "I can get you a vegie or a cheese pizza.",
            "contentType": "PlainText"
          }
        ]
      }
    },
    {
      "name": "Crust",
      "description": "The type of pizza crust to order.",
      "priority": 2,
      "sampleUtterances": [
        "Make it a {Crust} crust.",
        "I'd like a {Crust} crust."
      ],
      "slotConstraint": "Required",
      "slotType": "DocPizzaCrustType",
      "slotTypeVersion": "$LATEST",
      "valueElicitationPrompt": {
        "maxAttempts": 1,
        "messages": [
          {
            "content": "What type of crust would you like?",
            "contentType": "PlainText"
          },
          {
            "content": "Thick or thin crust?",
            "contentType": "PlainText"
          }
        ]
      }
    },
    {
      "name": "Sauce",
      "description": "The type of sauce to use on the pizza.",
      "priority": 3,
      "sampleUtterances": [
        "Make it {Sauce} sauce.",
        "I'd like {Sauce} sauce."
      ],
      "slotConstraint": "Required",
      "slotType": "DocPizzaSauceType",
      "slotTypeVersion": "$LATEST",
      "valueElicitationPrompt": {
        "maxAttempts": 1,
        "messages": [
          {
            "content": "White or red sauce?",
            "contentType": "PlainText"
          },
          {
            "content": "Garlic or tomato sauce?",
            "contentType": "PlainText"
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|slots|object|false|none|none|
|sampleUtterances|object|false|none|none|
|confirmationPrompt|object|false|none|none|
|rejectionStatement|object|false|none|none|
|followUpPrompt|object|false|none|none|
|conclusionStatement|object|false|none|none|
|dialogCodeHook|object|false|none|none|
|fulfillmentActivity|object|false|none|none|
|parentIntentSignature|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|version|object|false|none|none|
|checksum|object|false|none|none|
|kendraConfiguration|object|false|none|none|
|inputContexts|object|false|none|none|
|outputContexts|object|false|none|none|

<h2 id="tocS_GetIntentVersionsResponse">GetIntentVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetintentversionsresponse"></a>
<a id="schema_GetIntentVersionsResponse"></a>
<a id="tocSgetintentversionsresponse"></a>
<a id="tocsgetintentversionsresponse"></a>

```json
{
  "intents": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intents|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetIntentsResponse">GetIntentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetintentsresponse"></a>
<a id="schema_GetIntentsResponse"></a>
<a id="tocSgetintentsresponse"></a>
<a id="tocsgetintentsresponse"></a>

```json
{
  "intents": [
    {
      "version": "$LATEST",
      "name": "DocOrderPizza",
      "createdDate": 1494359783.453,
      "description": "Order a pizza from a local pizzeria.",
      "lastUpdatedDate": 1494359783.453
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intents|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetMigrationResponse">GetMigrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmigrationresponse"></a>
<a id="schema_GetMigrationResponse"></a>
<a id="tocSgetmigrationresponse"></a>
<a id="tocsgetmigrationresponse"></a>

```json
{
  "migrationId": {},
  "v1BotName": {},
  "v1BotVersion": {},
  "v1BotLocale": {},
  "v2BotId": {},
  "v2BotRole": {},
  "migrationStatus": {},
  "migrationStrategy": {},
  "migrationTimestamp": {},
  "alerts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migrationId|object|false|none|none|
|v1BotName|object|false|none|none|
|v1BotVersion|object|false|none|none|
|v1BotLocale|object|false|none|none|
|v2BotId|object|false|none|none|
|v2BotRole|object|false|none|none|
|migrationStatus|object|false|none|none|
|migrationStrategy|object|false|none|none|
|migrationTimestamp|object|false|none|none|
|alerts|object|false|none|none|

<h2 id="tocS_GetMigrationsResponse">GetMigrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmigrationsresponse"></a>
<a id="schema_GetMigrationsResponse"></a>
<a id="tocSgetmigrationsresponse"></a>
<a id="tocsgetmigrationsresponse"></a>

```json
{
  "migrationSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migrationSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetSlotTypeResponse">GetSlotTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetslottyperesponse"></a>
<a id="schema_GetSlotTypeResponse"></a>
<a id="tocSgetslottyperesponse"></a>
<a id="tocsgetslottyperesponse"></a>

```json
{
  "version": "$LATEST",
  "name": "DocPizzaCrustType",
  "checksum": "210b3d5a-90a3-4b22-ac7e-f50c2c71095f",
  "createdDate": 1494359274.403,
  "description": "Available crust types",
  "enumerationValues": [
    {
      "value": "thick"
    },
    {
      "value": "thin"
    }
  ],
  "lastUpdatedDate": 1494359274.403
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|enumerationValues|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|version|object|false|none|none|
|checksum|object|false|none|none|
|valueSelectionStrategy|object|false|none|none|
|parentSlotTypeSignature|object|false|none|none|
|slotTypeConfigurations|object|false|none|none|

<h2 id="tocS_GetSlotTypeVersionsResponse">GetSlotTypeVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetslottypeversionsresponse"></a>
<a id="schema_GetSlotTypeVersionsResponse"></a>
<a id="tocSgetslottypeversionsresponse"></a>
<a id="tocsgetslottypeversionsresponse"></a>

```json
{
  "slotTypes": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slotTypes|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetSlotTypesResponse">GetSlotTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetslottypesresponse"></a>
<a id="schema_GetSlotTypesResponse"></a>
<a id="tocSgetslottypesresponse"></a>
<a id="tocsgetslottypesresponse"></a>

```json
{
  "slotTypes": [
    {
      "version": "$LATEST",
      "name": "DocPizzaCrustType",
      "createdDate": 1494359274.403,
      "description": "Available crust types",
      "lastUpdatedDate": 1494359274.403
    },
    {
      "version": "$LATEST",
      "name": "DocPizzaSauceType",
      "createdDate": 1494356442.23,
      "description": "Available pizza sauces",
      "lastUpdatedDate": 1494356442.23
    },
    {
      "version": "$LATEST",
      "name": "DocPizzaType",
      "createdDate": 1494359198.656,
      "description": "Available pizzas",
      "lastUpdatedDate": 1494359198.656
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slotTypes|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetUtterancesViewResponse">GetUtterancesViewResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetutterancesviewresponse"></a>
<a id="schema_GetUtterancesViewResponse"></a>
<a id="tocSgetutterancesviewresponse"></a>
<a id="tocsgetutterancesviewresponse"></a>

```json
{
  "botName": {},
  "utterances": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|botName|object|false|none|none|
|utterances|object|false|none|none|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
"string"
```

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

<h2 id="tocS_PutBotResponse">PutBotResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputbotresponse"></a>
<a id="schema_PutBotResponse"></a>
<a id="tocSputbotresponse"></a>
<a id="tocsputbotresponse"></a>

```json
{
  "version": "$LATEST",
  "name": "DocOrderPizzaBot",
  "abortStatement": {
    "messages": [
      {
        "content": "I don't understand. Can you try again?",
        "contentType": "PlainText"
      },
      {
        "content": "I'm sorry, I don't understand.",
        "contentType": "PlainText"
      }
    ]
  },
  "checksum": "20172ee3-fa06-49b2-bbc5-667c090303e9",
  "childDirected": true,
  "clarificationPrompt": {
    "maxAttempts": 1,
    "messages": [
      {
        "content": "I'm sorry, I didn't hear that. Can you repeate what you just said?",
        "contentType": "PlainText"
      },
      {
        "content": "Can you say that again?",
        "contentType": "PlainText"
      }
    ]
  },
  "createdDate": 1494360160.133,
  "description": "Orders a pizza from a local pizzeria.",
  "idleSessionTTLInSeconds": 300,
  "intents": [
    {
      "intentName": "DocOrderPizza",
      "intentVersion": "$LATEST"
    }
  ],
  "lastUpdatedDate": 1494360160.133,
  "locale": "en-US",
  "status": "NOT_BUILT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|intents|object|false|none|none|
|enableModelImprovements|object|false|none|none|
|nluIntentConfidenceThreshold|object|false|none|none|
|clarificationPrompt|object|false|none|none|
|abortStatement|object|false|none|none|
|status|object|false|none|none|
|failureReason|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|idleSessionTTLInSeconds|object|false|none|none|
|voiceId|object|false|none|none|
|checksum|object|false|none|none|
|version|object|false|none|none|
|locale|object|false|none|none|
|childDirected|object|false|none|none|
|createVersion|object|false|none|none|
|detectSentiment|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_Intent">Intent</h2>
<!-- backwards compatibility -->
<a id="schemaintent"></a>
<a id="schema_Intent"></a>
<a id="tocSintent"></a>
<a id="tocsintent"></a>

```json
{
  "intentName": {},
  "intentVersion": {}
}
```

Identifies the specific version of an intent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intentName|object|true|none|none|
|intentVersion|object|true|none|none|

<h2 id="tocS_MessageList">MessageList</h2>
<!-- backwards compatibility -->
<a id="schemamessagelist"></a>
<a id="schema_MessageList"></a>
<a id="tocSmessagelist"></a>
<a id="tocsmessagelist"></a>

```json
[
  {
    "contentType": {},
    "content": {},
    "groupNumber": {}
  }
]
```

<h2 id="tocS_PromptMaxAttempts">PromptMaxAttempts</h2>
<!-- backwards compatibility -->
<a id="schemapromptmaxattempts"></a>
<a id="schema_PromptMaxAttempts"></a>
<a id="tocSpromptmaxattempts"></a>
<a id="tocspromptmaxattempts"></a>

```json
1
```

<h2 id="tocS_ResponseCard">ResponseCard</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecard"></a>
<a id="schema_ResponseCard"></a>
<a id="tocSresponsecard"></a>
<a id="tocsresponsecard"></a>

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

A list of key/value pairs that identify a bot, bot alias, or bot channel. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_PutBotAliasResponse">PutBotAliasResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputbotaliasresponse"></a>
<a id="schema_PutBotAliasResponse"></a>
<a id="tocSputbotaliasresponse"></a>
<a id="tocsputbotaliasresponse"></a>

```json
{
  "name": {},
  "description": {},
  "botVersion": {},
  "botName": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "checksum": {},
  "conversationLogs": {
    "logSettings": {},
    "iamRoleArn": {}
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|botVersion|object|false|none|none|
|botName|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|checksum|object|false|none|none|
|conversationLogs|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_LogSettingsRequestList">LogSettingsRequestList</h2>
<!-- backwards compatibility -->
<a id="schemalogsettingsrequestlist"></a>
<a id="schema_LogSettingsRequestList"></a>
<a id="tocSlogsettingsrequestlist"></a>
<a id="tocslogsettingsrequestlist"></a>

```json
[
  {
    "logType": {},
    "destination": {},
    "kmsKeyArn": {},
    "resourceArn": {}
  }
]
```

<h2 id="tocS_IamRoleArn">IamRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IamRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_PutIntentResponse">PutIntentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputintentresponse"></a>
<a id="schema_PutIntentResponse"></a>
<a id="tocSputintentresponse"></a>
<a id="tocsputintentresponse"></a>

```json
{
  "version": "$LATEST",
  "name": "DocOrderPizza",
  "checksum": "ca9bc13d-afc8-4706-bbaf-091f7a5935d6",
  "conclusionStatement": {
    "messages": [
      {
        "content": "All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.",
        "contentType": "PlainText"
      },
      {
        "content": "OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.",
        "contentType": "PlainText"
      }
    ],
    "responseCard": "foo"
  },
  "confirmationPrompt": {
    "maxAttempts": 1,
    "messages": [
      {
        "content": "Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?",
        "contentType": "PlainText"
      }
    ]
  },
  "createdDate": 1494359783.453,
  "description": "Order a pizza from a local pizzeria.",
  "fulfillmentActivity": {
    "type": "ReturnIntent"
  },
  "lastUpdatedDate": 1494359783.453,
  "rejectionStatement": {
    "messages": [
      {
        "content": "Ok, I'll cancel your order.",
        "contentType": "PlainText"
      },
      {
        "content": "I cancelled your order.",
        "contentType": "PlainText"
      }
    ]
  },
  "sampleUtterances": [
    "Order me a pizza.",
    "Order me a {Type} pizza.",
    "I want a {Crust} crust {Type} pizza",
    "I want a {Crust} crust {Type} pizza with {Sauce} sauce."
  ],
  "slots": [
    {
      "name": "Sauce",
      "description": "The type of sauce to use on the pizza.",
      "priority": 3,
      "sampleUtterances": [
        "Make it {Sauce} sauce.",
        "I'd like {Sauce} sauce."
      ],
      "slotConstraint": "Required",
      "slotType": "DocPizzaSauceType",
      "slotTypeVersion": "$LATEST",
      "valueElicitationPrompt": {
        "maxAttempts": 1,
        "messages": [
          {
            "content": "White or red sauce?",
            "contentType": "PlainText"
          },
          {
            "content": "Garlic or tomato sauce?",
            "contentType": "PlainText"
          }
        ]
      }
    },
    {
      "name": "Type",
      "description": "The type of pizza to order.",
      "priority": 1,
      "sampleUtterances": [
        "Get me a {Type} pizza.",
        "A {Type} pizza please.",
        "I'd like a {Type} pizza."
      ],
      "slotConstraint": "Required",
      "slotType": "DocPizzaType",
      "slotTypeVersion": "$LATEST",
      "valueElicitationPrompt": {
        "maxAttempts": 1,
        "messages": [
          {
            "content": "What type of pizza would you like?",
            "contentType": "PlainText"
          },
          {
            "content": "Vegie or cheese pizza?",
            "contentType": "PlainText"
          },
          {
            "content": "I can get you a vegie or a cheese pizza.",
            "contentType": "PlainText"
          }
        ]
      }
    },
    {
      "name": "Crust",
      "description": "The type of pizza crust to order.",
      "priority": 2,
      "sampleUtterances": [
        "Make it a {Crust} crust.",
        "I'd like a {Crust} crust."
      ],
      "slotConstraint": "Required",
      "slotType": "DocPizzaCrustType",
      "slotTypeVersion": "$LATEST",
      "valueElicitationPrompt": {
        "maxAttempts": 1,
        "messages": [
          {
            "content": "What type of crust would you like?",
            "contentType": "PlainText"
          },
          {
            "content": "Thick or thin crust?",
            "contentType": "PlainText"
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|slots|object|false|none|none|
|sampleUtterances|object|false|none|none|
|confirmationPrompt|object|false|none|none|
|rejectionStatement|object|false|none|none|
|followUpPrompt|object|false|none|none|
|conclusionStatement|object|false|none|none|
|dialogCodeHook|object|false|none|none|
|fulfillmentActivity|object|false|none|none|
|parentIntentSignature|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|version|object|false|none|none|
|checksum|object|false|none|none|
|createVersion|object|false|none|none|
|kendraConfiguration|object|false|none|none|
|inputContexts|object|false|none|none|
|outputContexts|object|false|none|none|

<h2 id="tocS_Slot">Slot</h2>
<!-- backwards compatibility -->
<a id="schemaslot"></a>
<a id="schema_Slot"></a>
<a id="tocSslot"></a>
<a id="tocsslot"></a>

```json
{
  "name": {},
  "description": {},
  "slotConstraint": {},
  "slotType": {},
  "slotTypeVersion": {},
  "valueElicitationPrompt": {
    "messages": {},
    "maxAttempts": {},
    "responseCard": {}
  },
  "priority": {},
  "sampleUtterances": {},
  "responseCard": {},
  "obfuscationSetting": {},
  "defaultValueSpec": {
    "defaultValueList": {}
  }
}
```

Identifies the version of a specific slot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|slotConstraint|object|true|none|none|
|slotType|object|false|none|none|
|slotTypeVersion|object|false|none|none|
|valueElicitationPrompt|object|false|none|none|
|priority|object|false|none|none|
|sampleUtterances|object|false|none|none|
|responseCard|object|false|none|none|
|obfuscationSetting|object|false|none|none|
|defaultValueSpec|object|false|none|none|

<h2 id="tocS_Utterance">Utterance</h2>
<!-- backwards compatibility -->
<a id="schemautterance"></a>
<a id="schema_Utterance"></a>
<a id="tocSutterance"></a>
<a id="tocsutterance"></a>

```json
"string"
```

<h2 id="tocS_Prompt">Prompt</h2>
<!-- backwards compatibility -->
<a id="schemaprompt"></a>
<a id="schema_Prompt"></a>
<a id="tocSprompt"></a>
<a id="tocsprompt"></a>

```json
{
  "messages": {},
  "maxAttempts": {},
  "responseCard": {}
}
```

Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|object|true|none|none|
|maxAttempts|object|true|none|none|
|responseCard|object|false|none|none|

<h2 id="tocS_Statement">Statement</h2>
<!-- backwards compatibility -->
<a id="schemastatement"></a>
<a id="schema_Statement"></a>
<a id="tocSstatement"></a>
<a id="tocsstatement"></a>

```json
{
  "messages": {},
  "responseCard": {}
}
```

A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|object|true|none|none|
|responseCard|object|false|none|none|

<h2 id="tocS_LambdaARN">LambdaARN</h2>
<!-- backwards compatibility -->
<a id="schemalambdaarn"></a>
<a id="schema_LambdaARN"></a>
<a id="tocSlambdaarn"></a>
<a id="tocslambdaarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_MessageVersion">MessageVersion</h2>
<!-- backwards compatibility -->
<a id="schemamessageversion"></a>
<a id="schema_MessageVersion"></a>
<a id="tocSmessageversion"></a>
<a id="tocsmessageversion"></a>

```json
"strin"
```

<h2 id="tocS_FulfillmentActivityType">FulfillmentActivityType</h2>
<!-- backwards compatibility -->
<a id="schemafulfillmentactivitytype"></a>
<a id="schema_FulfillmentActivityType"></a>
<a id="tocSfulfillmentactivitytype"></a>
<a id="tocsfulfillmentactivitytype"></a>

```json
"ReturnIntent"
```

<h2 id="tocS_CodeHook">CodeHook</h2>
<!-- backwards compatibility -->
<a id="schemacodehook"></a>
<a id="schema_CodeHook"></a>
<a id="tocScodehook"></a>
<a id="tocscodehook"></a>

```json
{
  "uri": {},
  "messageVersion": {}
}
```

Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|object|true|none|none|
|messageVersion|object|true|none|none|

<h2 id="tocS_KendraIndexArn">KendraIndexArn</h2>
<!-- backwards compatibility -->
<a id="schemakendraindexarn"></a>
<a id="schema_KendraIndexArn"></a>
<a id="tocSkendraindexarn"></a>
<a id="tocskendraindexarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_QueryFilterString">QueryFilterString</h2>
<!-- backwards compatibility -->
<a id="schemaqueryfilterstring"></a>
<a id="schema_QueryFilterString"></a>
<a id="tocSqueryfilterstring"></a>
<a id="tocsqueryfilterstring"></a>

```json
"string"
```

<h2 id="tocS_roleArn">roleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_roleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_InputContext">InputContext</h2>
<!-- backwards compatibility -->
<a id="schemainputcontext"></a>
<a id="schema_InputContext"></a>
<a id="tocSinputcontext"></a>
<a id="tocsinputcontext"></a>

```json
{
  "name": {}
}
```

The name of a context that must be active for an intent to be selected by Amazon Lex.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_OutputContext">OutputContext</h2>
<!-- backwards compatibility -->
<a id="schemaoutputcontext"></a>
<a id="schema_OutputContext"></a>
<a id="tocSoutputcontext"></a>
<a id="tocsoutputcontext"></a>

```json
{
  "name": {},
  "timeToLiveInSeconds": {},
  "turnsToLive": {}
}
```

The specification of an output context that is set when an intent is fulfilled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|timeToLiveInSeconds|object|true|none|none|
|turnsToLive|object|true|none|none|

<h2 id="tocS_PutSlotTypeResponse">PutSlotTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputslottyperesponse"></a>
<a id="schema_PutSlotTypeResponse"></a>
<a id="tocSputslottyperesponse"></a>
<a id="tocsputslottyperesponse"></a>

```json
{
  "version": "$LATEST",
  "name": "DocPizzaSauceType",
  "checksum": "cfd00ed1-775d-4357-947c-aca7e73b44ba",
  "createdDate": 1494356442.23,
  "description": "Available pizza sauces",
  "enumerationValues": [
    {
      "value": "red"
    },
    {
      "value": "white"
    }
  ],
  "lastUpdatedDate": 1494356442.23
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|enumerationValues|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|version|object|false|none|none|
|checksum|object|false|none|none|
|valueSelectionStrategy|object|false|none|none|
|createVersion|object|false|none|none|
|parentSlotTypeSignature|object|false|none|none|
|slotTypeConfigurations|object|false|none|none|

<h2 id="tocS_EnumerationValue">EnumerationValue</h2>
<!-- backwards compatibility -->
<a id="schemaenumerationvalue"></a>
<a id="schema_EnumerationValue"></a>
<a id="tocSenumerationvalue"></a>
<a id="tocsenumerationvalue"></a>

```json
{
  "value": {},
  "synonyms": {}
}
```

<p>Each slot type can have a set of values. Each enumeration value represents a value the slot type can take. </p> <p>For example, a pizza ordering bot could have a slot type that specifies the type of crust that the pizza should have. The slot type could include the values </p> <ul> <li> <p>thick</p> </li> <li> <p>thin</p> </li> <li> <p>stuffed</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|none|
|synonyms|object|false|none|none|

<h2 id="tocS_SlotTypeConfiguration">SlotTypeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaslottypeconfiguration"></a>
<a id="schema_SlotTypeConfiguration"></a>
<a id="tocSslottypeconfiguration"></a>
<a id="tocsslottypeconfiguration"></a>

```json
{
  "regexConfiguration": {
    "pattern": {}
  }
}
```

Provides configuration information for a slot type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regexConfiguration|object|false|none|none|

<h2 id="tocS_StartImportResponse">StartImportResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartimportresponse"></a>
<a id="schema_StartImportResponse"></a>
<a id="tocSstartimportresponse"></a>
<a id="tocsstartimportresponse"></a>

```json
{
  "name": {},
  "resourceType": {},
  "mergeStrategy": {},
  "importId": {},
  "importStatus": {},
  "tags": {},
  "createdDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|resourceType|object|false|none|none|
|mergeStrategy|object|false|none|none|
|importId|object|false|none|none|
|importStatus|object|false|none|none|
|tags|object|false|none|none|
|createdDate|object|false|none|none|

<h2 id="tocS_StartMigrationResponse">StartMigrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartmigrationresponse"></a>
<a id="schema_StartMigrationResponse"></a>
<a id="tocSstartmigrationresponse"></a>
<a id="tocsstartmigrationresponse"></a>

```json
{
  "v1BotName": {},
  "v1BotVersion": {},
  "v1BotLocale": {},
  "v2BotId": {},
  "v2BotRole": {},
  "migrationId": {},
  "migrationStrategy": {},
  "migrationTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|v1BotName|object|false|none|none|
|v1BotVersion|object|false|none|none|
|v1BotLocale|object|false|none|none|
|v2BotId|object|false|none|none|
|v2BotRole|object|false|none|none|
|migrationId|object|false|none|none|
|migrationStrategy|object|false|none|none|
|migrationTimestamp|object|false|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
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

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_AliasName">AliasName</h2>
<!-- backwards compatibility -->
<a id="schemaaliasname"></a>
<a id="schema_AliasName"></a>
<a id="tocSaliasname"></a>
<a id="tocsaliasname"></a>

```json
"string"
```

<h2 id="tocS_AliasNameOrListAll">AliasNameOrListAll</h2>
<!-- backwards compatibility -->
<a id="schemaaliasnameorlistall"></a>
<a id="schema_AliasNameOrListAll"></a>
<a id="tocSaliasnameorlistall"></a>
<a id="tocsaliasnameorlistall"></a>

```json
"string"
```

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_Blob">Blob</h2>
<!-- backwards compatibility -->
<a id="schemablob"></a>
<a id="schema_Blob"></a>
<a id="tocSblob"></a>
<a id="tocsblob"></a>

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

<h2 id="tocS_BotName">BotName</h2>
<!-- backwards compatibility -->
<a id="schemabotname"></a>
<a id="schema_BotName"></a>
<a id="tocSbotname"></a>
<a id="tocsbotname"></a>

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

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_ConversationLogsResponse">ConversationLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconversationlogsresponse"></a>
<a id="schema_ConversationLogsResponse"></a>
<a id="tocSconversationlogsresponse"></a>
<a id="tocsconversationlogsresponse"></a>

```json
{
  "logSettings": {},
  "iamRoleArn": {}
}
```

Contains information about conversation log settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logSettings|object|false|none|none|
|iamRoleArn|object|false|none|none|

<h2 id="tocS_BotAliasMetadata">BotAliasMetadata</h2>
<!-- backwards compatibility -->
<a id="schemabotaliasmetadata"></a>
<a id="schema_BotAliasMetadata"></a>
<a id="tocSbotaliasmetadata"></a>
<a id="tocsbotaliasmetadata"></a>

```json
{
  "name": {},
  "description": {},
  "botVersion": {},
  "botName": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "checksum": {},
  "conversationLogs": {
    "logSettings": {},
    "iamRoleArn": {}
  }
}
```

Provides information about a bot alias.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|botVersion|object|false|none|none|
|botName|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|checksum|object|false|none|none|
|conversationLogs|object|false|none|none|

<h2 id="tocS_BotAliasMetadataList">BotAliasMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemabotaliasmetadatalist"></a>
<a id="schema_BotAliasMetadataList"></a>
<a id="tocSbotaliasmetadatalist"></a>
<a id="tocsbotaliasmetadatalist"></a>

```json
[
  {
    "name": {},
    "description": {},
    "botVersion": {},
    "botName": {},
    "lastUpdatedDate": {},
    "createdDate": {},
    "checksum": {},
    "conversationLogs": {
      "logSettings": {},
      "iamRoleArn": {}
    }
  }
]
```

<h2 id="tocS_BotChannelName">BotChannelName</h2>
<!-- backwards compatibility -->
<a id="schemabotchannelname"></a>
<a id="schema_BotChannelName"></a>
<a id="tocSbotchannelname"></a>
<a id="tocsbotchannelname"></a>

```json
"string"
```

<h2 id="tocS_ChannelType">ChannelType</h2>
<!-- backwards compatibility -->
<a id="schemachanneltype"></a>
<a id="schema_ChannelType"></a>
<a id="tocSchanneltype"></a>
<a id="tocschanneltype"></a>

```json
"Facebook"
```

<h2 id="tocS_ChannelConfigurationMap">ChannelConfigurationMap</h2>
<!-- backwards compatibility -->
<a id="schemachannelconfigurationmap"></a>
<a id="schema_ChannelConfigurationMap"></a>
<a id="tocSchannelconfigurationmap"></a>
<a id="tocschannelconfigurationmap"></a>

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

<h2 id="tocS_ChannelStatus">ChannelStatus</h2>
<!-- backwards compatibility -->
<a id="schemachannelstatus"></a>
<a id="schema_ChannelStatus"></a>
<a id="tocSchannelstatus"></a>
<a id="tocschannelstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_BotChannelAssociation">BotChannelAssociation</h2>
<!-- backwards compatibility -->
<a id="schemabotchannelassociation"></a>
<a id="schema_BotChannelAssociation"></a>
<a id="tocSbotchannelassociation"></a>
<a id="tocsbotchannelassociation"></a>

```json
{
  "name": {},
  "description": {},
  "botAlias": {},
  "botName": {},
  "createdDate": {},
  "type": {},
  "botConfiguration": {
    "property1": "string",
    "property2": "string"
  },
  "status": {},
  "failureReason": {}
}
```

Represents an association between an Amazon Lex bot and an external messaging platform.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|botAlias|object|false|none|none|
|botName|object|false|none|none|
|createdDate|object|false|none|none|
|type|object|false|none|none|
|botConfiguration|object|false|none|none|
|status|object|false|none|none|
|failureReason|object|false|none|none|

<h2 id="tocS_BotChannelAssociationList">BotChannelAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemabotchannelassociationlist"></a>
<a id="schema_BotChannelAssociationList"></a>
<a id="tocSbotchannelassociationlist"></a>
<a id="tocsbotchannelassociationlist"></a>

```json
[
  {
    "name": {},
    "description": {},
    "botAlias": {},
    "botName": {},
    "createdDate": {},
    "type": {},
    "botConfiguration": {
      "property1": "string",
      "property2": "string"
    },
    "status": {},
    "failureReason": {}
  }
]
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"BUILDING"
```

<h2 id="tocS_BotMetadata">BotMetadata</h2>
<!-- backwards compatibility -->
<a id="schemabotmetadata"></a>
<a id="schema_BotMetadata"></a>
<a id="tocSbotmetadata"></a>
<a id="tocsbotmetadata"></a>

```json
{
  "name": {},
  "description": {},
  "status": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "version": {}
}
```

Provides information about a bot. .

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|status|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|version|object|false|none|none|

<h2 id="tocS_BotMetadataList">BotMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemabotmetadatalist"></a>
<a id="schema_BotMetadataList"></a>
<a id="tocSbotmetadatalist"></a>
<a id="tocsbotmetadatalist"></a>

```json
[
  {
    "name": {},
    "description": {},
    "status": {},
    "lastUpdatedDate": {},
    "createdDate": {},
    "version": {}
  }
]
```

<h2 id="tocS_BotVersions">BotVersions</h2>
<!-- backwards compatibility -->
<a id="schemabotversions"></a>
<a id="schema_BotVersions"></a>
<a id="tocSbotversions"></a>
<a id="tocsbotversions"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BuiltinIntentSignature">BuiltinIntentSignature</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinintentsignature"></a>
<a id="schema_BuiltinIntentSignature"></a>
<a id="tocSbuiltinintentsignature"></a>
<a id="tocsbuiltinintentsignature"></a>

```json
"string"
```

<h2 id="tocS_LocaleList">LocaleList</h2>
<!-- backwards compatibility -->
<a id="schemalocalelist"></a>
<a id="schema_LocaleList"></a>
<a id="tocSlocalelist"></a>
<a id="tocslocalelist"></a>

```json
[
  "de-DE"
]
```

<h2 id="tocS_BuiltinIntentMetadata">BuiltinIntentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinintentmetadata"></a>
<a id="schema_BuiltinIntentMetadata"></a>
<a id="tocSbuiltinintentmetadata"></a>
<a id="tocsbuiltinintentmetadata"></a>

```json
{
  "signature": {},
  "supportedLocales": {}
}
```

Provides metadata for a built-in intent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signature|object|false|none|none|
|supportedLocales|object|false|none|none|

<h2 id="tocS_BuiltinIntentMetadataList">BuiltinIntentMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinintentmetadatalist"></a>
<a id="schema_BuiltinIntentMetadataList"></a>
<a id="tocSbuiltinintentmetadatalist"></a>
<a id="tocsbuiltinintentmetadatalist"></a>

```json
[
  {
    "signature": {},
    "supportedLocales": {}
  }
]
```

<h2 id="tocS_BuiltinIntentSlot">BuiltinIntentSlot</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinintentslot"></a>
<a id="schema_BuiltinIntentSlot"></a>
<a id="tocSbuiltinintentslot"></a>
<a id="tocsbuiltinintentslot"></a>

```json
{
  "name": {}
}
```

Provides information about a slot used in a built-in intent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|

<h2 id="tocS_BuiltinIntentSlotList">BuiltinIntentSlotList</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinintentslotlist"></a>
<a id="schema_BuiltinIntentSlotList"></a>
<a id="tocSbuiltinintentslotlist"></a>
<a id="tocsbuiltinintentslotlist"></a>

```json
[
  {
    "name": {}
  }
]
```

<h2 id="tocS_BuiltinSlotTypeSignature">BuiltinSlotTypeSignature</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinslottypesignature"></a>
<a id="schema_BuiltinSlotTypeSignature"></a>
<a id="tocSbuiltinslottypesignature"></a>
<a id="tocsbuiltinslottypesignature"></a>

```json
"string"
```

<h2 id="tocS_BuiltinSlotTypeMetadata">BuiltinSlotTypeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinslottypemetadata"></a>
<a id="schema_BuiltinSlotTypeMetadata"></a>
<a id="tocSbuiltinslottypemetadata"></a>
<a id="tocsbuiltinslottypemetadata"></a>

```json
{
  "signature": {},
  "supportedLocales": {}
}
```

Provides information about a built in slot type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signature|object|false|none|none|
|supportedLocales|object|false|none|none|

<h2 id="tocS_BuiltinSlotTypeMetadataList">BuiltinSlotTypeMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinslottypemetadatalist"></a>
<a id="schema_BuiltinSlotTypeMetadataList"></a>
<a id="tocSbuiltinslottypemetadatalist"></a>
<a id="tocsbuiltinslottypemetadatalist"></a>

```json
[
  {
    "signature": {},
    "supportedLocales": {}
  }
]
```

<h2 id="tocS_ConfidenceThreshold">ConfidenceThreshold</h2>
<!-- backwards compatibility -->
<a id="schemaconfidencethreshold"></a>
<a id="schema_ConfidenceThreshold"></a>
<a id="tocSconfidencethreshold"></a>
<a id="tocsconfidencethreshold"></a>

```json
0
```

<h2 id="tocS_ContentString">ContentString</h2>
<!-- backwards compatibility -->
<a id="schemacontentstring"></a>
<a id="schema_ContentString"></a>
<a id="tocScontentstring"></a>
<a id="tocscontentstring"></a>

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
"PlainText"
```

<h2 id="tocS_ContextTimeToLiveInSeconds">ContextTimeToLiveInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemacontexttimetoliveinseconds"></a>
<a id="schema_ContextTimeToLiveInSeconds"></a>
<a id="tocScontexttimetoliveinseconds"></a>
<a id="tocscontexttimetoliveinseconds"></a>

```json
5
```

<h2 id="tocS_ContextTurnsToLive">ContextTurnsToLive</h2>
<!-- backwards compatibility -->
<a id="schemacontextturnstolive"></a>
<a id="schema_ContextTurnsToLive"></a>
<a id="tocScontextturnstolive"></a>
<a id="tocscontextturnstolive"></a>

```json
1
```

<h2 id="tocS_ConversationLogsRequest">ConversationLogsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconversationlogsrequest"></a>
<a id="schema_ConversationLogsRequest"></a>
<a id="tocSconversationlogsrequest"></a>
<a id="tocsconversationlogsrequest"></a>

```json
{
  "logSettings": {},
  "iamRoleArn": {}
}
```

Provides the settings needed for conversation logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logSettings|object|true|none|none|
|iamRoleArn|object|true|none|none|

<h2 id="tocS_LogSettingsResponseList">LogSettingsResponseList</h2>
<!-- backwards compatibility -->
<a id="schemalogsettingsresponselist"></a>
<a id="schema_LogSettingsResponseList"></a>
<a id="tocSlogsettingsresponselist"></a>
<a id="tocslogsettingsresponselist"></a>

```json
[
  {
    "logType": {},
    "destination": {},
    "kmsKeyArn": {},
    "resourceArn": {},
    "resourcePrefix": {}
  }
]
```

<h2 id="tocS_Count">Count</h2>
<!-- backwards compatibility -->
<a id="schemacount"></a>
<a id="schema_Count"></a>
<a id="tocScount"></a>
<a id="tocscount"></a>

```json
0
```

<h2 id="tocS_CreateBotVersionRequest">CreateBotVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebotversionrequest"></a>
<a id="schema_CreateBotVersionRequest"></a>
<a id="tocScreatebotversionrequest"></a>
<a id="tocscreatebotversionrequest"></a>

```json
{
  "checksum": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksum|object|false|none|none|

<h2 id="tocS_IntentList">IntentList</h2>
<!-- backwards compatibility -->
<a id="schemaintentlist"></a>
<a id="schema_IntentList"></a>
<a id="tocSintentlist"></a>
<a id="tocsintentlist"></a>

```json
[
  {
    "intentName": {},
    "intentVersion": {}
  }
]
```

<h2 id="tocS_SessionTTL">SessionTTL</h2>
<!-- backwards compatibility -->
<a id="schemasessionttl"></a>
<a id="schema_SessionTTL"></a>
<a id="tocSsessionttl"></a>
<a id="tocssessionttl"></a>

```json
60
```

<h2 id="tocS_Locale">Locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_Locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
"de-DE"
```

<h2 id="tocS_IntentName">IntentName</h2>
<!-- backwards compatibility -->
<a id="schemaintentname"></a>
<a id="schema_IntentName"></a>
<a id="tocSintentname"></a>
<a id="tocsintentname"></a>

```json
"string"
```

<h2 id="tocS_CreateIntentVersionRequest">CreateIntentVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateintentversionrequest"></a>
<a id="schema_CreateIntentVersionRequest"></a>
<a id="tocScreateintentversionrequest"></a>
<a id="tocscreateintentversionrequest"></a>

```json
{
  "checksum": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksum|object|false|none|none|

<h2 id="tocS_SlotList">SlotList</h2>
<!-- backwards compatibility -->
<a id="schemaslotlist"></a>
<a id="schema_SlotList"></a>
<a id="tocSslotlist"></a>
<a id="tocsslotlist"></a>

```json
[
  {
    "name": {},
    "description": {},
    "slotConstraint": {},
    "slotType": {},
    "slotTypeVersion": {},
    "valueElicitationPrompt": {
      "messages": {},
      "maxAttempts": {},
      "responseCard": {}
    },
    "priority": {},
    "sampleUtterances": {},
    "responseCard": {},
    "obfuscationSetting": {},
    "defaultValueSpec": {
      "defaultValueList": {}
    }
  }
]
```

<h2 id="tocS_IntentUtteranceList">IntentUtteranceList</h2>
<!-- backwards compatibility -->
<a id="schemaintentutterancelist"></a>
<a id="schema_IntentUtteranceList"></a>
<a id="tocSintentutterancelist"></a>
<a id="tocsintentutterancelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FollowUpPrompt">FollowUpPrompt</h2>
<!-- backwards compatibility -->
<a id="schemafollowupprompt"></a>
<a id="schema_FollowUpPrompt"></a>
<a id="tocSfollowupprompt"></a>
<a id="tocsfollowupprompt"></a>

```json
{
  "prompt": {
    "messages": {},
    "maxAttempts": {},
    "responseCard": {}
  },
  "rejectionStatement": {
    "messages": {},
    "responseCard": {}
  }
}
```

A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prompt|object|true|none|none|
|rejectionStatement|object|true|none|none|

<h2 id="tocS_FulfillmentActivity">FulfillmentActivity</h2>
<!-- backwards compatibility -->
<a id="schemafulfillmentactivity"></a>
<a id="schema_FulfillmentActivity"></a>
<a id="tocSfulfillmentactivity"></a>
<a id="tocsfulfillmentactivity"></a>

```json
{
  "type": {},
  "codeHook": {
    "uri": {},
    "messageVersion": {}
  }
}
```

<p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|codeHook|object|false|none|none|

<h2 id="tocS_KendraConfiguration">KendraConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemakendraconfiguration"></a>
<a id="schema_KendraConfiguration"></a>
<a id="tocSkendraconfiguration"></a>
<a id="tocskendraconfiguration"></a>

```json
{
  "kendraIndex": {},
  "queryFilterString": {},
  "role": {}
}
```

Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html"> AMAZON.KendraSearchIntent</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kendraIndex|object|true|none|none|
|queryFilterString|object|false|none|none|
|role|object|true|none|none|

<h2 id="tocS_InputContextList">InputContextList</h2>
<!-- backwards compatibility -->
<a id="schemainputcontextlist"></a>
<a id="schema_InputContextList"></a>
<a id="tocSinputcontextlist"></a>
<a id="tocsinputcontextlist"></a>

```json
[
  {
    "name": {}
  }
]
```

<h2 id="tocS_OutputContextList">OutputContextList</h2>
<!-- backwards compatibility -->
<a id="schemaoutputcontextlist"></a>
<a id="schema_OutputContextList"></a>
<a id="tocSoutputcontextlist"></a>
<a id="tocsoutputcontextlist"></a>

```json
[
  {
    "name": {},
    "timeToLiveInSeconds": {},
    "turnsToLive": {}
  }
]
```

<h2 id="tocS_SlotTypeName">SlotTypeName</h2>
<!-- backwards compatibility -->
<a id="schemaslottypename"></a>
<a id="schema_SlotTypeName"></a>
<a id="tocSslottypename"></a>
<a id="tocsslottypename"></a>

```json
"string"
```

<h2 id="tocS_CreateSlotTypeVersionRequest">CreateSlotTypeVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateslottypeversionrequest"></a>
<a id="schema_CreateSlotTypeVersionRequest"></a>
<a id="tocScreateslottypeversionrequest"></a>
<a id="tocscreateslottypeversionrequest"></a>

```json
{
  "checksum": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksum|object|false|none|none|

<h2 id="tocS_EnumerationValues">EnumerationValues</h2>
<!-- backwards compatibility -->
<a id="schemaenumerationvalues"></a>
<a id="schema_EnumerationValues"></a>
<a id="tocSenumerationvalues"></a>
<a id="tocsenumerationvalues"></a>

```json
[
  {
    "value": {},
    "synonyms": {}
  }
]
```

<h2 id="tocS_SlotValueSelectionStrategy">SlotValueSelectionStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaslotvalueselectionstrategy"></a>
<a id="schema_SlotValueSelectionStrategy"></a>
<a id="tocSslotvalueselectionstrategy"></a>
<a id="tocsslotvalueselectionstrategy"></a>

```json
"ORIGINAL_VALUE"
```

<h2 id="tocS_CustomOrBuiltinSlotTypeName">CustomOrBuiltinSlotTypeName</h2>
<!-- backwards compatibility -->
<a id="schemacustomorbuiltinslottypename"></a>
<a id="schema_CustomOrBuiltinSlotTypeName"></a>
<a id="tocScustomorbuiltinslottypename"></a>
<a id="tocscustomorbuiltinslottypename"></a>

```json
"string"
```

<h2 id="tocS_SlotTypeConfigurations">SlotTypeConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaslottypeconfigurations"></a>
<a id="schema_SlotTypeConfigurations"></a>
<a id="tocSslottypeconfigurations"></a>
<a id="tocsslottypeconfigurations"></a>

```json
[
  {
    "regexConfiguration": {
      "pattern": {}
    }
  }
]
```

<h2 id="tocS_DeleteBotAliasRequest">DeleteBotAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebotaliasrequest"></a>
<a id="schema_DeleteBotAliasRequest"></a>
<a id="tocSdeletebotaliasrequest"></a>
<a id="tocsdeletebotaliasrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBotChannelAssociationRequest">DeleteBotChannelAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebotchannelassociationrequest"></a>
<a id="schema_DeleteBotChannelAssociationRequest"></a>
<a id="tocSdeletebotchannelassociationrequest"></a>
<a id="tocsdeletebotchannelassociationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBotRequest">DeleteBotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebotrequest"></a>
<a id="schema_DeleteBotRequest"></a>
<a id="tocSdeletebotrequest"></a>
<a id="tocsdeletebotrequest"></a>

```json
{}
```

<h2 id="tocS_NumericalVersion">NumericalVersion</h2>
<!-- backwards compatibility -->
<a id="schemanumericalversion"></a>
<a id="schema_NumericalVersion"></a>
<a id="tocSnumericalversion"></a>
<a id="tocsnumericalversion"></a>

```json
"string"
```

<h2 id="tocS_DeleteBotVersionRequest">DeleteBotVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebotversionrequest"></a>
<a id="schema_DeleteBotVersionRequest"></a>
<a id="tocSdeletebotversionrequest"></a>
<a id="tocsdeletebotversionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteIntentRequest">DeleteIntentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteintentrequest"></a>
<a id="schema_DeleteIntentRequest"></a>
<a id="tocSdeleteintentrequest"></a>
<a id="tocsdeleteintentrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteIntentVersionRequest">DeleteIntentVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteintentversionrequest"></a>
<a id="schema_DeleteIntentVersionRequest"></a>
<a id="tocSdeleteintentversionrequest"></a>
<a id="tocsdeleteintentversionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteSlotTypeRequest">DeleteSlotTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteslottyperequest"></a>
<a id="schema_DeleteSlotTypeRequest"></a>
<a id="tocSdeleteslottyperequest"></a>
<a id="tocsdeleteslottyperequest"></a>

```json
{}
```

<h2 id="tocS_DeleteSlotTypeVersionRequest">DeleteSlotTypeVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteslottypeversionrequest"></a>
<a id="schema_DeleteSlotTypeVersionRequest"></a>
<a id="tocSdeleteslottypeversionrequest"></a>
<a id="tocsdeleteslottypeversionrequest"></a>

```json
{}
```

<h2 id="tocS_UserId">UserId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_UserId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"string"
```

<h2 id="tocS_DeleteUtterancesRequest">DeleteUtterancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteutterancesrequest"></a>
<a id="schema_DeleteUtterancesRequest"></a>
<a id="tocSdeleteutterancesrequest"></a>
<a id="tocsdeleteutterancesrequest"></a>

```json
{}
```

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
"CLOUDWATCH_LOGS"
```

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
"string"
```

<h2 id="tocS_SynonymList">SynonymList</h2>
<!-- backwards compatibility -->
<a id="schemasynonymlist"></a>
<a id="schema_SynonymList"></a>
<a id="tocSsynonymlist"></a>
<a id="tocssynonymlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ExportStatus">ExportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexportstatus"></a>
<a id="schema_ExportStatus"></a>
<a id="tocSexportstatus"></a>
<a id="tocsexportstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_ExportType">ExportType</h2>
<!-- backwards compatibility -->
<a id="schemaexporttype"></a>
<a id="schema_ExportType"></a>
<a id="tocSexporttype"></a>
<a id="tocsexporttype"></a>

```json
"ALEXA_SKILLS_KIT"
```

<h2 id="tocS_GetBotAliasRequest">GetBotAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbotaliasrequest"></a>
<a id="schema_GetBotAliasRequest"></a>
<a id="tocSgetbotaliasrequest"></a>
<a id="tocsgetbotaliasrequest"></a>

```json
{}
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

<h2 id="tocS_GetBotAliasesRequest">GetBotAliasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbotaliasesrequest"></a>
<a id="schema_GetBotAliasesRequest"></a>
<a id="tocSgetbotaliasesrequest"></a>
<a id="tocsgetbotaliasesrequest"></a>

```json
{}
```

<h2 id="tocS_GetBotChannelAssociationRequest">GetBotChannelAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbotchannelassociationrequest"></a>
<a id="schema_GetBotChannelAssociationRequest"></a>
<a id="tocSgetbotchannelassociationrequest"></a>
<a id="tocsgetbotchannelassociationrequest"></a>

```json
{}
```

<h2 id="tocS_GetBotChannelAssociationsRequest">GetBotChannelAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbotchannelassociationsrequest"></a>
<a id="schema_GetBotChannelAssociationsRequest"></a>
<a id="tocSgetbotchannelassociationsrequest"></a>
<a id="tocsgetbotchannelassociationsrequest"></a>

```json
{}
```

<h2 id="tocS_GetBotRequest">GetBotRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbotrequest"></a>
<a id="schema_GetBotRequest"></a>
<a id="tocSgetbotrequest"></a>
<a id="tocsgetbotrequest"></a>

```json
{}
```

<h2 id="tocS_GetBotVersionsRequest">GetBotVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbotversionsrequest"></a>
<a id="schema_GetBotVersionsRequest"></a>
<a id="tocSgetbotversionsrequest"></a>
<a id="tocsgetbotversionsrequest"></a>

```json
{}
```

<h2 id="tocS_GetBotsRequest">GetBotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbotsrequest"></a>
<a id="schema_GetBotsRequest"></a>
<a id="tocSgetbotsrequest"></a>
<a id="tocsgetbotsrequest"></a>

```json
{}
```

<h2 id="tocS_GetBuiltinIntentRequest">GetBuiltinIntentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbuiltinintentrequest"></a>
<a id="schema_GetBuiltinIntentRequest"></a>
<a id="tocSgetbuiltinintentrequest"></a>
<a id="tocsgetbuiltinintentrequest"></a>

```json
{}
```

<h2 id="tocS_GetBuiltinIntentsRequest">GetBuiltinIntentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbuiltinintentsrequest"></a>
<a id="schema_GetBuiltinIntentsRequest"></a>
<a id="tocSgetbuiltinintentsrequest"></a>
<a id="tocsgetbuiltinintentsrequest"></a>

```json
{}
```

<h2 id="tocS_GetBuiltinSlotTypesRequest">GetBuiltinSlotTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbuiltinslottypesrequest"></a>
<a id="schema_GetBuiltinSlotTypesRequest"></a>
<a id="tocSgetbuiltinslottypesrequest"></a>
<a id="tocsgetbuiltinslottypesrequest"></a>

```json
{}
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

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"BOT"
```

<h2 id="tocS_GetExportRequest">GetExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetexportrequest"></a>
<a id="schema_GetExportRequest"></a>
<a id="tocSgetexportrequest"></a>
<a id="tocsgetexportrequest"></a>

```json
{}
```

<h2 id="tocS_GetImportRequest">GetImportRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetimportrequest"></a>
<a id="schema_GetImportRequest"></a>
<a id="tocSgetimportrequest"></a>
<a id="tocsgetimportrequest"></a>

```json
{}
```

<h2 id="tocS_MergeStrategy">MergeStrategy</h2>
<!-- backwards compatibility -->
<a id="schemamergestrategy"></a>
<a id="schema_MergeStrategy"></a>
<a id="tocSmergestrategy"></a>
<a id="tocsmergestrategy"></a>

```json
"OVERWRITE_LATEST"
```

<h2 id="tocS_ImportStatus">ImportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimportstatus"></a>
<a id="schema_ImportStatus"></a>
<a id="tocSimportstatus"></a>
<a id="tocsimportstatus"></a>

```json
"IN_PROGRESS"
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

<h2 id="tocS_GetIntentRequest">GetIntentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetintentrequest"></a>
<a id="schema_GetIntentRequest"></a>
<a id="tocSgetintentrequest"></a>
<a id="tocsgetintentrequest"></a>

```json
{}
```

<h2 id="tocS_GetIntentVersionsRequest">GetIntentVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetintentversionsrequest"></a>
<a id="schema_GetIntentVersionsRequest"></a>
<a id="tocSgetintentversionsrequest"></a>
<a id="tocsgetintentversionsrequest"></a>

```json
{}
```

<h2 id="tocS_IntentMetadataList">IntentMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemaintentmetadatalist"></a>
<a id="schema_IntentMetadataList"></a>
<a id="tocSintentmetadatalist"></a>
<a id="tocsintentmetadatalist"></a>

```json
[
  {
    "name": {},
    "description": {},
    "lastUpdatedDate": {},
    "createdDate": {},
    "version": {}
  }
]
```

<h2 id="tocS_GetIntentsRequest">GetIntentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetintentsrequest"></a>
<a id="schema_GetIntentsRequest"></a>
<a id="tocSgetintentsrequest"></a>
<a id="tocsgetintentsrequest"></a>

```json
{}
```

<h2 id="tocS_MigrationId">MigrationId</h2>
<!-- backwards compatibility -->
<a id="schemamigrationid"></a>
<a id="schema_MigrationId"></a>
<a id="tocSmigrationid"></a>
<a id="tocsmigrationid"></a>

```json
"stringstri"
```

<h2 id="tocS_GetMigrationRequest">GetMigrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmigrationrequest"></a>
<a id="schema_GetMigrationRequest"></a>
<a id="tocSgetmigrationrequest"></a>
<a id="tocsgetmigrationrequest"></a>

```json
{}
```

<h2 id="tocS_V2BotId">V2BotId</h2>
<!-- backwards compatibility -->
<a id="schemav2botid"></a>
<a id="schema_V2BotId"></a>
<a id="tocSv2botid"></a>
<a id="tocsv2botid"></a>

```json
"stringstri"
```

<h2 id="tocS_MigrationStatus">MigrationStatus</h2>
<!-- backwards compatibility -->
<a id="schemamigrationstatus"></a>
<a id="schema_MigrationStatus"></a>
<a id="tocSmigrationstatus"></a>
<a id="tocsmigrationstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_MigrationStrategy">MigrationStrategy</h2>
<!-- backwards compatibility -->
<a id="schemamigrationstrategy"></a>
<a id="schema_MigrationStrategy"></a>
<a id="tocSmigrationstrategy"></a>
<a id="tocsmigrationstrategy"></a>

```json
"CREATE_NEW"
```

<h2 id="tocS_MigrationAlerts">MigrationAlerts</h2>
<!-- backwards compatibility -->
<a id="schemamigrationalerts"></a>
<a id="schema_MigrationAlerts"></a>
<a id="tocSmigrationalerts"></a>
<a id="tocsmigrationalerts"></a>

```json
[
  {
    "type": {},
    "message": {},
    "details": {},
    "referenceURLs": {}
  }
]
```

<h2 id="tocS_MigrationSortAttribute">MigrationSortAttribute</h2>
<!-- backwards compatibility -->
<a id="schemamigrationsortattribute"></a>
<a id="schema_MigrationSortAttribute"></a>
<a id="tocSmigrationsortattribute"></a>
<a id="tocsmigrationsortattribute"></a>

```json
"V1_BOT_NAME"
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ASCENDING"
```

<h2 id="tocS_GetMigrationsRequest">GetMigrationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmigrationsrequest"></a>
<a id="schema_GetMigrationsRequest"></a>
<a id="tocSgetmigrationsrequest"></a>
<a id="tocsgetmigrationsrequest"></a>

```json
{}
```

<h2 id="tocS_MigrationSummaryList">MigrationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemamigrationsummarylist"></a>
<a id="schema_MigrationSummaryList"></a>
<a id="tocSmigrationsummarylist"></a>
<a id="tocsmigrationsummarylist"></a>

```json
[
  {
    "migrationId": {},
    "v1BotName": {},
    "v1BotVersion": {},
    "v1BotLocale": {},
    "v2BotId": {},
    "v2BotRole": {},
    "migrationStatus": {},
    "migrationStrategy": {},
    "migrationTimestamp": {}
  }
]
```

<h2 id="tocS_GetSlotTypeRequest">GetSlotTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetslottyperequest"></a>
<a id="schema_GetSlotTypeRequest"></a>
<a id="tocSgetslottyperequest"></a>
<a id="tocsgetslottyperequest"></a>

```json
{}
```

<h2 id="tocS_GetSlotTypeVersionsRequest">GetSlotTypeVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetslottypeversionsrequest"></a>
<a id="schema_GetSlotTypeVersionsRequest"></a>
<a id="tocSgetslottypeversionsrequest"></a>
<a id="tocsgetslottypeversionsrequest"></a>

```json
{}
```

<h2 id="tocS_SlotTypeMetadataList">SlotTypeMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemaslottypemetadatalist"></a>
<a id="schema_SlotTypeMetadataList"></a>
<a id="tocSslottypemetadatalist"></a>
<a id="tocsslottypemetadatalist"></a>

```json
[
  {
    "name": {},
    "description": {},
    "lastUpdatedDate": {},
    "createdDate": {},
    "version": {}
  }
]
```

<h2 id="tocS_GetSlotTypesRequest">GetSlotTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetslottypesrequest"></a>
<a id="schema_GetSlotTypesRequest"></a>
<a id="tocSgetslottypesrequest"></a>
<a id="tocsgetslottypesrequest"></a>

```json
{}
```

<h2 id="tocS_StatusType">StatusType</h2>
<!-- backwards compatibility -->
<a id="schemastatustype"></a>
<a id="schema_StatusType"></a>
<a id="tocSstatustype"></a>
<a id="tocsstatustype"></a>

```json
"Detected"
```

<h2 id="tocS_GetUtterancesViewRequest">GetUtterancesViewRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetutterancesviewrequest"></a>
<a id="schema_GetUtterancesViewRequest"></a>
<a id="tocSgetutterancesviewrequest"></a>
<a id="tocsgetutterancesviewrequest"></a>

```json
{}
```

<h2 id="tocS_ListsOfUtterances">ListsOfUtterances</h2>
<!-- backwards compatibility -->
<a id="schemalistsofutterances"></a>
<a id="schema_ListsOfUtterances"></a>
<a id="tocSlistsofutterances"></a>
<a id="tocslistsofutterances"></a>

```json
[
  {
    "botVersion": {},
    "utterances": {}
  }
]
```

<h2 id="tocS_GroupNumber">GroupNumber</h2>
<!-- backwards compatibility -->
<a id="schemagroupnumber"></a>
<a id="schema_GroupNumber"></a>
<a id="tocSgroupnumber"></a>
<a id="tocsgroupnumber"></a>

```json
1
```

<h2 id="tocS_InputContextName">InputContextName</h2>
<!-- backwards compatibility -->
<a id="schemainputcontextname"></a>
<a id="schema_InputContextName"></a>
<a id="tocSinputcontextname"></a>
<a id="tocsinputcontextname"></a>

```json
"string"
```

<h2 id="tocS_IntentMetadata">IntentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaintentmetadata"></a>
<a id="schema_IntentMetadata"></a>
<a id="tocSintentmetadata"></a>
<a id="tocsintentmetadata"></a>

```json
{
  "name": {},
  "description": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "version": {}
}
```

Provides information about an intent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|version|object|false|none|none|

<h2 id="tocS_KmsKeyArn">KmsKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarn"></a>
<a id="schema_KmsKeyArn"></a>
<a id="tocSkmskeyarn"></a>
<a id="tocskmskeyarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_UtteranceData">UtteranceData</h2>
<!-- backwards compatibility -->
<a id="schemautterancedata"></a>
<a id="schema_UtteranceData"></a>
<a id="tocSutterancedata"></a>
<a id="tocsutterancedata"></a>

```json
{
  "utteranceString": {},
  "count": {},
  "distinctUsers": {},
  "firstUtteredDate": {},
  "lastUtteredDate": {}
}
```

Provides information about a single utterance that was made to your bot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|utteranceString|object|false|none|none|
|count|object|false|none|none|
|distinctUsers|object|false|none|none|
|firstUtteredDate|object|false|none|none|
|lastUtteredDate|object|false|none|none|

<h2 id="tocS_ListOfUtterance">ListOfUtterance</h2>
<!-- backwards compatibility -->
<a id="schemalistofutterance"></a>
<a id="schema_ListOfUtterance"></a>
<a id="tocSlistofutterance"></a>
<a id="tocslistofutterance"></a>

```json
[
  {
    "utteranceString": {},
    "count": {},
    "distinctUsers": {},
    "firstUtteredDate": {},
    "lastUtteredDate": {}
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

<h2 id="tocS_UtteranceList">UtteranceList</h2>
<!-- backwards compatibility -->
<a id="schemautterancelist"></a>
<a id="schema_UtteranceList"></a>
<a id="tocSutterancelist"></a>
<a id="tocsutterancelist"></a>

```json
{
  "botVersion": {},
  "utterances": {}
}
```

Provides a list of utterances that have been made to a specific version of your bot. The list contains a maximum of 100 utterances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|botVersion|object|false|none|none|
|utterances|object|false|none|none|

<h2 id="tocS_LogType">LogType</h2>
<!-- backwards compatibility -->
<a id="schemalogtype"></a>
<a id="schema_LogType"></a>
<a id="tocSlogtype"></a>
<a id="tocslogtype"></a>

```json
"AUDIO"
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

<h2 id="tocS_LogSettingsRequest">LogSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalogsettingsrequest"></a>
<a id="schema_LogSettingsRequest"></a>
<a id="tocSlogsettingsrequest"></a>
<a id="tocslogsettingsrequest"></a>

```json
{
  "logType": {},
  "destination": {},
  "kmsKeyArn": {},
  "resourceArn": {}
}
```

Settings used to configure delivery mode and destination for conversation logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logType|object|true|none|none|
|destination|object|true|none|none|
|kmsKeyArn|object|false|none|none|
|resourceArn|object|true|none|none|

<h2 id="tocS_ResourcePrefix">ResourcePrefix</h2>
<!-- backwards compatibility -->
<a id="schemaresourceprefix"></a>
<a id="schema_ResourcePrefix"></a>
<a id="tocSresourceprefix"></a>
<a id="tocsresourceprefix"></a>

```json
"string"
```

<h2 id="tocS_LogSettingsResponse">LogSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalogsettingsresponse"></a>
<a id="schema_LogSettingsResponse"></a>
<a id="tocSlogsettingsresponse"></a>
<a id="tocslogsettingsresponse"></a>

```json
{
  "logType": {},
  "destination": {},
  "kmsKeyArn": {},
  "resourceArn": {},
  "resourcePrefix": {}
}
```

The settings for conversation logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logType|object|false|none|none|
|destination|object|false|none|none|
|kmsKeyArn|object|false|none|none|
|resourceArn|object|false|none|none|
|resourcePrefix|object|false|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "contentType": {},
  "content": {},
  "groupNumber": {}
}
```

The message object that provides the message text and its type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|object|true|none|none|
|content|object|true|none|none|
|groupNumber|object|false|none|none|

<h2 id="tocS_MigrationAlertType">MigrationAlertType</h2>
<!-- backwards compatibility -->
<a id="schemamigrationalerttype"></a>
<a id="schema_MigrationAlertType"></a>
<a id="tocSmigrationalerttype"></a>
<a id="tocsmigrationalerttype"></a>

```json
"ERROR"
```

<h2 id="tocS_MigrationAlertMessage">MigrationAlertMessage</h2>
<!-- backwards compatibility -->
<a id="schemamigrationalertmessage"></a>
<a id="schema_MigrationAlertMessage"></a>
<a id="tocSmigrationalertmessage"></a>
<a id="tocsmigrationalertmessage"></a>

```json
"string"
```

<h2 id="tocS_MigrationAlertDetails">MigrationAlertDetails</h2>
<!-- backwards compatibility -->
<a id="schemamigrationalertdetails"></a>
<a id="schema_MigrationAlertDetails"></a>
<a id="tocSmigrationalertdetails"></a>
<a id="tocsmigrationalertdetails"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MigrationAlertReferenceURLs">MigrationAlertReferenceURLs</h2>
<!-- backwards compatibility -->
<a id="schemamigrationalertreferenceurls"></a>
<a id="schema_MigrationAlertReferenceURLs"></a>
<a id="tocSmigrationalertreferenceurls"></a>
<a id="tocsmigrationalertreferenceurls"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MigrationAlert">MigrationAlert</h2>
<!-- backwards compatibility -->
<a id="schemamigrationalert"></a>
<a id="schema_MigrationAlert"></a>
<a id="tocSmigrationalert"></a>
<a id="tocsmigrationalert"></a>

```json
{
  "type": {},
  "message": {},
  "details": {},
  "referenceURLs": {}
}
```

Provides information about alerts and warnings that Amazon Lex sends during a migration. The alerts include information about how to resolve the issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|message|object|false|none|none|
|details|object|false|none|none|
|referenceURLs|object|false|none|none|

<h2 id="tocS_MigrationAlertDetail">MigrationAlertDetail</h2>
<!-- backwards compatibility -->
<a id="schemamigrationalertdetail"></a>
<a id="schema_MigrationAlertDetail"></a>
<a id="tocSmigrationalertdetail"></a>
<a id="tocsmigrationalertdetail"></a>

```json
"string"
```

<h2 id="tocS_MigrationAlertReferenceURL">MigrationAlertReferenceURL</h2>
<!-- backwards compatibility -->
<a id="schemamigrationalertreferenceurl"></a>
<a id="schema_MigrationAlertReferenceURL"></a>
<a id="tocSmigrationalertreferenceurl"></a>
<a id="tocsmigrationalertreferenceurl"></a>

```json
"string"
```

<h2 id="tocS_MigrationSummary">MigrationSummary</h2>
<!-- backwards compatibility -->
<a id="schemamigrationsummary"></a>
<a id="schema_MigrationSummary"></a>
<a id="tocSmigrationsummary"></a>
<a id="tocsmigrationsummary"></a>

```json
{
  "migrationId": {},
  "v1BotName": {},
  "v1BotVersion": {},
  "v1BotLocale": {},
  "v2BotId": {},
  "v2BotRole": {},
  "migrationStatus": {},
  "migrationStrategy": {},
  "migrationTimestamp": {}
}
```

Provides information about migrating a bot from Amazon Lex V1 to Amazon Lex V2.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migrationId|object|false|none|none|
|v1BotName|object|false|none|none|
|v1BotVersion|object|false|none|none|
|v1BotLocale|object|false|none|none|
|v2BotId|object|false|none|none|
|v2BotRole|object|false|none|none|
|migrationStatus|object|false|none|none|
|migrationStrategy|object|false|none|none|
|migrationTimestamp|object|false|none|none|

<h2 id="tocS_ObfuscationSetting">ObfuscationSetting</h2>
<!-- backwards compatibility -->
<a id="schemaobfuscationsetting"></a>
<a id="schema_ObfuscationSetting"></a>
<a id="tocSobfuscationsetting"></a>
<a id="tocsobfuscationsetting"></a>

```json
"NONE"
```

<h2 id="tocS_OutputContextName">OutputContextName</h2>
<!-- backwards compatibility -->
<a id="schemaoutputcontextname"></a>
<a id="schema_OutputContextName"></a>
<a id="tocSoutputcontextname"></a>
<a id="tocsoutputcontextname"></a>

```json
"string"
```

<h2 id="tocS_Priority">Priority</h2>
<!-- backwards compatibility -->
<a id="schemapriority"></a>
<a id="schema_Priority"></a>
<a id="tocSpriority"></a>
<a id="tocspriority"></a>

```json
0
```

<h2 id="tocS_ProcessBehavior">ProcessBehavior</h2>
<!-- backwards compatibility -->
<a id="schemaprocessbehavior"></a>
<a id="schema_ProcessBehavior"></a>
<a id="tocSprocessbehavior"></a>
<a id="tocsprocessbehavior"></a>

```json
"SAVE"
```

<h2 id="tocS_PutBotAliasRequest">PutBotAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbotaliasrequest"></a>
<a id="schema_PutBotAliasRequest"></a>
<a id="tocSputbotaliasrequest"></a>
<a id="tocsputbotaliasrequest"></a>

```json
{
  "description": {},
  "botVersion": {},
  "checksum": {},
  "conversationLogs": {
    "logSettings": {},
    "iamRoleArn": {}
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|botVersion|object|true|none|none|
|checksum|object|false|none|none|
|conversationLogs|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_PutBotRequest">PutBotRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbotrequest"></a>
<a id="schema_PutBotRequest"></a>
<a id="tocSputbotrequest"></a>
<a id="tocsputbotrequest"></a>

```json
{
  "description": {},
  "intents": {},
  "enableModelImprovements": {},
  "nluIntentConfidenceThreshold": {},
  "clarificationPrompt": {
    "messages": {},
    "maxAttempts": {},
    "responseCard": {}
  },
  "abortStatement": {
    "messages": {},
    "responseCard": {}
  },
  "idleSessionTTLInSeconds": {},
  "voiceId": {},
  "checksum": {},
  "processBehavior": {},
  "locale": {},
  "childDirected": {},
  "detectSentiment": {},
  "createVersion": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|intents|object|false|none|none|
|enableModelImprovements|object|false|none|none|
|nluIntentConfidenceThreshold|object|false|none|none|
|clarificationPrompt|object|false|none|none|
|abortStatement|object|false|none|none|
|idleSessionTTLInSeconds|object|false|none|none|
|voiceId|object|false|none|none|
|checksum|object|false|none|none|
|processBehavior|object|false|none|none|
|locale|object|true|none|none|
|childDirected|object|true|none|none|
|detectSentiment|object|false|none|none|
|createVersion|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_PutIntentRequest">PutIntentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputintentrequest"></a>
<a id="schema_PutIntentRequest"></a>
<a id="tocSputintentrequest"></a>
<a id="tocsputintentrequest"></a>

```json
{
  "description": {},
  "slots": {},
  "sampleUtterances": {},
  "confirmationPrompt": {
    "messages": {},
    "maxAttempts": {},
    "responseCard": {}
  },
  "rejectionStatement": {
    "messages": {},
    "responseCard": {}
  },
  "followUpPrompt": {
    "prompt": {
      "messages": {},
      "maxAttempts": {},
      "responseCard": {}
    },
    "rejectionStatement": {
      "messages": {},
      "responseCard": {}
    }
  },
  "conclusionStatement": {
    "messages": {},
    "responseCard": {}
  },
  "dialogCodeHook": {
    "uri": {},
    "messageVersion": {}
  },
  "fulfillmentActivity": {
    "type": {},
    "codeHook": {
      "uri": {},
      "messageVersion": {}
    }
  },
  "parentIntentSignature": {},
  "checksum": {},
  "createVersion": {},
  "kendraConfiguration": {
    "kendraIndex": {},
    "queryFilterString": {},
    "role": {}
  },
  "inputContexts": {},
  "outputContexts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|slots|object|false|none|none|
|sampleUtterances|object|false|none|none|
|confirmationPrompt|object|false|none|none|
|rejectionStatement|object|false|none|none|
|followUpPrompt|object|false|none|none|
|conclusionStatement|object|false|none|none|
|dialogCodeHook|object|false|none|none|
|fulfillmentActivity|object|false|none|none|
|parentIntentSignature|object|false|none|none|
|checksum|object|false|none|none|
|createVersion|object|false|none|none|
|kendraConfiguration|object|false|none|none|
|inputContexts|object|false|none|none|
|outputContexts|object|false|none|none|

<h2 id="tocS_PutSlotTypeRequest">PutSlotTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputslottyperequest"></a>
<a id="schema_PutSlotTypeRequest"></a>
<a id="tocSputslottyperequest"></a>
<a id="tocsputslottyperequest"></a>

```json
{
  "description": {},
  "enumerationValues": {},
  "checksum": {},
  "valueSelectionStrategy": {},
  "createVersion": {},
  "parentSlotTypeSignature": {},
  "slotTypeConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|enumerationValues|object|false|none|none|
|checksum|object|false|none|none|
|valueSelectionStrategy|object|false|none|none|
|createVersion|object|false|none|none|
|parentSlotTypeSignature|object|false|none|none|
|slotTypeConfigurations|object|false|none|none|

<h2 id="tocS_RegexPattern">RegexPattern</h2>
<!-- backwards compatibility -->
<a id="schemaregexpattern"></a>
<a id="schema_RegexPattern"></a>
<a id="tocSregexpattern"></a>
<a id="tocsregexpattern"></a>

```json
"string"
```

<h2 id="tocS_SlotName">SlotName</h2>
<!-- backwards compatibility -->
<a id="schemaslotname"></a>
<a id="schema_SlotName"></a>
<a id="tocSslotname"></a>
<a id="tocsslotname"></a>

```json
"string"
```

<h2 id="tocS_SlotConstraint">SlotConstraint</h2>
<!-- backwards compatibility -->
<a id="schemaslotconstraint"></a>
<a id="schema_SlotConstraint"></a>
<a id="tocSslotconstraint"></a>
<a id="tocsslotconstraint"></a>

```json
"Required"
```

<h2 id="tocS_SlotUtteranceList">SlotUtteranceList</h2>
<!-- backwards compatibility -->
<a id="schemaslotutterancelist"></a>
<a id="schema_SlotUtteranceList"></a>
<a id="tocSslotutterancelist"></a>
<a id="tocsslotutterancelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SlotDefaultValueSpec">SlotDefaultValueSpec</h2>
<!-- backwards compatibility -->
<a id="schemaslotdefaultvaluespec"></a>
<a id="schema_SlotDefaultValueSpec"></a>
<a id="tocSslotdefaultvaluespec"></a>
<a id="tocsslotdefaultvaluespec"></a>

```json
{
  "defaultValueList": {}
}
```

Contains the default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValueList|object|true|none|none|

<h2 id="tocS_SlotDefaultValueString">SlotDefaultValueString</h2>
<!-- backwards compatibility -->
<a id="schemaslotdefaultvaluestring"></a>
<a id="schema_SlotDefaultValueString"></a>
<a id="tocSslotdefaultvaluestring"></a>
<a id="tocsslotdefaultvaluestring"></a>

```json
"string"
```

<h2 id="tocS_SlotDefaultValue">SlotDefaultValue</h2>
<!-- backwards compatibility -->
<a id="schemaslotdefaultvalue"></a>
<a id="schema_SlotDefaultValue"></a>
<a id="tocSslotdefaultvalue"></a>
<a id="tocsslotdefaultvalue"></a>

```json
{
  "defaultValue": {}
}
```

A default value for a slot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|object|true|none|none|

<h2 id="tocS_SlotDefaultValueList">SlotDefaultValueList</h2>
<!-- backwards compatibility -->
<a id="schemaslotdefaultvaluelist"></a>
<a id="schema_SlotDefaultValueList"></a>
<a id="tocSslotdefaultvaluelist"></a>
<a id="tocsslotdefaultvaluelist"></a>

```json
[
  {
    "defaultValue": {}
  }
]
```

<h2 id="tocS_SlotTypeRegexConfiguration">SlotTypeRegexConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaslottyperegexconfiguration"></a>
<a id="schema_SlotTypeRegexConfiguration"></a>
<a id="tocSslottyperegexconfiguration"></a>
<a id="tocsslottyperegexconfiguration"></a>

```json
{
  "pattern": {}
}
```

Provides a regular expression used to validate the value of a slot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pattern|object|true|none|none|

<h2 id="tocS_SlotTypeMetadata">SlotTypeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaslottypemetadata"></a>
<a id="schema_SlotTypeMetadata"></a>
<a id="tocSslottypemetadata"></a>
<a id="tocsslottypemetadata"></a>

```json
{
  "name": {},
  "description": {},
  "lastUpdatedDate": {},
  "createdDate": {},
  "version": {}
}
```

Provides information about a slot type..

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|createdDate|object|false|none|none|
|version|object|false|none|none|

<h2 id="tocS_StartImportRequest">StartImportRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartimportrequest"></a>
<a id="schema_StartImportRequest"></a>
<a id="tocSstartimportrequest"></a>
<a id="tocsstartimportrequest"></a>

```json
{
  "payload": {},
  "resourceType": {},
  "mergeStrategy": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|object|true|none|none|
|resourceType|object|true|none|none|
|mergeStrategy|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_V2BotName">V2BotName</h2>
<!-- backwards compatibility -->
<a id="schemav2botname"></a>
<a id="schema_V2BotName"></a>
<a id="tocSv2botname"></a>
<a id="tocsv2botname"></a>

```json
"string"
```

<h2 id="tocS_StartMigrationRequest">StartMigrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmigrationrequest"></a>
<a id="schema_StartMigrationRequest"></a>
<a id="tocSstartmigrationrequest"></a>
<a id="tocsstartmigrationrequest"></a>

```json
{
  "v1BotName": {},
  "v1BotVersion": {},
  "v2BotName": {},
  "v2BotRole": {},
  "migrationStrategy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|v1BotName|object|true|none|none|
|v1BotVersion|object|true|none|none|
|v2BotName|object|true|none|none|
|v2BotRole|object|true|none|none|
|migrationStrategy|object|true|none|none|

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
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UtteranceString">UtteranceString</h2>
<!-- backwards compatibility -->
<a id="schemautterancestring"></a>
<a id="schema_UtteranceString"></a>
<a id="tocSutterancestring"></a>
<a id="tocsutterancestring"></a>

```json
"string"
```
