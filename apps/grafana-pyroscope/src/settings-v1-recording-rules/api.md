<h1 id="settingsv1">settings.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="settingsv1-settingsv1recordingrulesservice">settings.v1.RecordingRulesService</h1>

## DeleteRecordingRule

<a id="opIdsettings.v1.RecordingRulesService.DeleteRecordingRule"></a>

> Code samples

```bash
curl http://localhost:4040/settings.v1.RecordingRulesService/DeleteRecordingRule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "id": "string"
  }'
```

`POST /settings.v1.RecordingRulesService/DeleteRecordingRule`

> Body parameter

```json
{
  "id": "string"
}
```

<h3 id="deleterecordingrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[settings.v1.DeleteRecordingRuleRequest](#schemasettings.v1.deleterecordingrulerequest)|true|none|
|» id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="deleterecordingrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[settings.v1.DeleteRecordingRuleResponse](#schemasettings.v1.deleterecordingruleresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## GetRecordingRule

<a id="opIdsettings.v1.RecordingRulesService.GetRecordingRule"></a>

> Code samples

```bash
curl http://localhost:4040/settings.v1.RecordingRulesService/GetRecordingRule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "id": "string"
  }'
```

`POST /settings.v1.RecordingRulesService/GetRecordingRule`

> Body parameter

```json
{
  "id": "string"
}
```

<h3 id="getrecordingrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[settings.v1.GetRecordingRuleRequest](#schemasettings.v1.getrecordingrulerequest)|true|none|
|» id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "rule": {
    "id": "string",
    "metricName": "string",
    "profileType": "string",
    "matchers": [
      "string"
    ],
    "groupBy": [
      "string"
    ],
    "externalLabels": [
      {
        "name": "service_name",
        "value": "my_service"
      }
    ],
    "generation": 0,
    "stacktraceFilter": {
      "functionName": {
        "functionName": "string",
        "metricType": "TOTAL"
      }
    },
    "provisioned": true
  }
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="getrecordingrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[settings.v1.GetRecordingRuleResponse](#schemasettings.v1.getrecordingruleresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## ListRecordingRules

<a id="opIdsettings.v1.RecordingRulesService.ListRecordingRules"></a>

> Code samples

```bash
curl http://localhost:4040/settings.v1.RecordingRulesService/ListRecordingRules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{}'
```

`POST /settings.v1.RecordingRulesService/ListRecordingRules`

> Body parameter

```json
{}
```

<h3 id="listrecordingrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[settings.v1.ListRecordingRulesRequest](#schemasettings.v1.listrecordingrulesrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "id": "string",
      "metricName": "string",
      "profileType": "string",
      "matchers": [
        "string"
      ],
      "groupBy": [
        "string"
      ],
      "externalLabels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "generation": 0,
      "stacktraceFilter": {
        "functionName": {
          "functionName": "string",
          "metricType": "TOTAL"
        }
      },
      "provisioned": true
    }
  ]
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="listrecordingrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[settings.v1.ListRecordingRulesResponse](#schemasettings.v1.listrecordingrulesresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## UpsertRecordingRule

<a id="opIdsettings.v1.RecordingRulesService.UpsertRecordingRule"></a>

> Code samples

```bash
curl http://localhost:4040/settings.v1.RecordingRulesService/UpsertRecordingRule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "id": "string",
    "metricName": "string",
    "matchers": [
      "string"
    ],
    "groupBy": [
      "string"
    ],
    "externalLabels": [
      {
        "name": "service_name",
        "value": "my_service"
      }
    ],
    "generation": 0,
    "stacktraceFilter": {
      "functionName": {
        "functionName": "string",
        "metricType": "TOTAL"
      }
    }
  }'
```

`POST /settings.v1.RecordingRulesService/UpsertRecordingRule`

> Body parameter

```json
{
  "id": "string",
  "metricName": "string",
  "matchers": [
    "string"
  ],
  "groupBy": [
    "string"
  ],
  "externalLabels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "generation": 0,
  "stacktraceFilter": {
    "functionName": {
      "functionName": "string",
      "metricType": "TOTAL"
    }
  }
}
```

<h3 id="upsertrecordingrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[settings.v1.UpsertRecordingRuleRequest](#schemasettings.v1.upsertrecordingrulerequest)|true|none|
|» id|body|string|false|The unique id of the recording rule. If an id is not provided, this will<br> create a new recording rule. If an id is provided, it will replace the<br> existing recording rule.|
|» metricName|body|string|false|none|
|» matchers|body|[string]|false|none|
|» groupBy|body|[string]|false|none|
|» externalLabels|body|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|
|» generation|body|integer \| string(int64)|false|The observed generation of this recording rule. If this value does not<br> match the generation stored in the database, this upsert will be rejected.|
|» stacktraceFilter|body|[settings.v1.StacktraceFilter](#schemasettings.v1.stacktracefilter)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "rule": {
    "id": "string",
    "metricName": "string",
    "profileType": "string",
    "matchers": [
      "string"
    ],
    "groupBy": [
      "string"
    ],
    "externalLabels": [
      {
        "name": "service_name",
        "value": "my_service"
      }
    ],
    "generation": 0,
    "stacktraceFilter": {
      "functionName": {
        "functionName": "string",
        "metricType": "TOTAL"
      }
    },
    "provisioned": true
  }
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="upsertrecordingrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[settings.v1.UpsertRecordingRuleResponse](#schemasettings.v1.upsertrecordingruleresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_connect-protocol-version">connect-protocol-version</h2>
<!-- backwards compatibility -->
<a id="schemaconnect-protocol-version"></a>
<a id="schema_connect-protocol-version"></a>
<a id="tocSconnect-protocol-version"></a>
<a id="tocsconnect-protocol-version"></a>

```json
1
```

Define the version of the Connect protocol

<h2 id="tocS_connect-timeout-header">connect-timeout-header</h2>
<!-- backwards compatibility -->
<a id="schemaconnect-timeout-header"></a>
<a id="schema_connect-timeout-header"></a>
<a id="tocSconnect-timeout-header"></a>
<a id="tocsconnect-timeout-header"></a>

```json
0
```

Define the timeout, in ms

<h2 id="tocS_connect.error">connect.error</h2>
<!-- backwards compatibility -->
<a id="schemaconnect.error"></a>
<a id="schema_connect.error"></a>
<a id="tocSconnect.error"></a>
<a id="tocsconnect.error"></a>

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

Error type returned by Connect: https://connectrpc.com/docs/go/errors/#http-representation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.|
|details|[[connect.error_details.Any](#schemaconnect.error_details.any)]|false|none|A list of messages that carry the error details. There is no limit on the number of messages.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|canceled|
|code|unknown|
|code|invalid_argument|
|code|deadline_exceeded|
|code|not_found|
|code|already_exists|
|code|permission_denied|
|code|resource_exhausted|
|code|failed_precondition|
|code|aborted|
|code|out_of_range|
|code|unimplemented|
|code|internal|
|code|unavailable|
|code|data_loss|
|code|unauthenticated|

<h2 id="tocS_connect.error_details.Any">connect.error_details.Any</h2>
<!-- backwards compatibility -->
<a id="schemaconnect.error_details.any"></a>
<a id="schema_connect.error_details.Any"></a>
<a id="tocSconnect.error_details.any"></a>
<a id="tocsconnect.error_details.any"></a>

```json
{
  "type": "string",
  "value": "string",
  "debug": {}
}
```

Contains an arbitrary serialized message along with a @type that describes the type of the serialized message, with an additional debug field for ConnectRPC error details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|A URL that acts as a globally unique identifier for the type of the serialized message. For example: `type.googleapis.com/google.rpc.ErrorInfo`. This is used to determine the schema of the data in the `value` field and is the discriminator for the `debug` field.|
|value|string(binary)|false|none|The Protobuf message, serialized as bytes and base64-encoded. The specific message type is identified by the `type` field.|
|debug|object|false|none|Deserialized error detail payload. The 'type' field indicates the schema. This field is for easier debugging and should not be relied upon for application logic.|

<h2 id="tocS_settings.v1.DeleteRecordingRuleRequest">settings.v1.DeleteRecordingRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.deleterecordingrulerequest"></a>
<a id="schema_settings.v1.DeleteRecordingRuleRequest"></a>
<a id="tocSsettings.v1.deleterecordingrulerequest"></a>
<a id="tocssettings.v1.deleterecordingrulerequest"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<h2 id="tocS_settings.v1.DeleteRecordingRuleResponse">settings.v1.DeleteRecordingRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.deleterecordingruleresponse"></a>
<a id="schema_settings.v1.DeleteRecordingRuleResponse"></a>
<a id="tocSsettings.v1.deleterecordingruleresponse"></a>
<a id="tocssettings.v1.deleterecordingruleresponse"></a>

```json
{}
```

<h2 id="tocS_settings.v1.GetRecordingRuleRequest">settings.v1.GetRecordingRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.getrecordingrulerequest"></a>
<a id="schema_settings.v1.GetRecordingRuleRequest"></a>
<a id="tocSsettings.v1.getrecordingrulerequest"></a>
<a id="tocssettings.v1.getrecordingrulerequest"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<h2 id="tocS_settings.v1.GetRecordingRuleResponse">settings.v1.GetRecordingRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.getrecordingruleresponse"></a>
<a id="schema_settings.v1.GetRecordingRuleResponse"></a>
<a id="tocSsettings.v1.getrecordingruleresponse"></a>
<a id="tocssettings.v1.getrecordingruleresponse"></a>

```json
{
  "rule": {
    "id": "string",
    "metricName": "string",
    "profileType": "string",
    "matchers": [
      "string"
    ],
    "groupBy": [
      "string"
    ],
    "externalLabels": [
      {
        "name": "service_name",
        "value": "my_service"
      }
    ],
    "generation": 0,
    "stacktraceFilter": {
      "functionName": {
        "functionName": "string",
        "metricType": "TOTAL"
      }
    },
    "provisioned": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|[settings.v1.RecordingRule](#schemasettings.v1.recordingrule)|false|none|none|

<h2 id="tocS_settings.v1.ListRecordingRulesRequest">settings.v1.ListRecordingRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.listrecordingrulesrequest"></a>
<a id="schema_settings.v1.ListRecordingRulesRequest"></a>
<a id="tocSsettings.v1.listrecordingrulesrequest"></a>
<a id="tocssettings.v1.listrecordingrulesrequest"></a>

```json
{}
```

<h2 id="tocS_settings.v1.ListRecordingRulesResponse">settings.v1.ListRecordingRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.listrecordingrulesresponse"></a>
<a id="schema_settings.v1.ListRecordingRulesResponse"></a>
<a id="tocSsettings.v1.listrecordingrulesresponse"></a>
<a id="tocssettings.v1.listrecordingrulesresponse"></a>

```json
{
  "rules": [
    {
      "id": "string",
      "metricName": "string",
      "profileType": "string",
      "matchers": [
        "string"
      ],
      "groupBy": [
        "string"
      ],
      "externalLabels": [
        {
          "name": "service_name",
          "value": "my_service"
        }
      ],
      "generation": 0,
      "stacktraceFilter": {
        "functionName": {
          "functionName": "string",
          "metricType": "TOTAL"
        }
      },
      "provisioned": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rules|[[settings.v1.RecordingRule](#schemasettings.v1.recordingrule)]|false|none|none|

<h2 id="tocS_settings.v1.MetricType">settings.v1.MetricType</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.metrictype"></a>
<a id="schema_settings.v1.MetricType"></a>
<a id="tocSsettings.v1.metrictype"></a>
<a id="tocssettings.v1.metrictype"></a>

```json
"TOTAL"
```

<h2 id="tocS_settings.v1.RecordingRule">settings.v1.RecordingRule</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.recordingrule"></a>
<a id="schema_settings.v1.RecordingRule"></a>
<a id="tocSsettings.v1.recordingrule"></a>
<a id="tocssettings.v1.recordingrule"></a>

```json
{
  "id": "string",
  "metricName": "string",
  "profileType": "string",
  "matchers": [
    "string"
  ],
  "groupBy": [
    "string"
  ],
  "externalLabels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "generation": 0,
  "stacktraceFilter": {
    "functionName": {
      "functionName": "string",
      "metricType": "TOTAL"
    }
  },
  "provisioned": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique id of the recording rule.|
|metricName|string|false|none|The name of the recording rule, this does not necessarily need to be<br> unique.|
|profileType|string|false|none|Used in the UI to display what type of profile type this recording rule is<br> generated from.<br><br> This should be the standard format of:<br><br>   <name>:<sample-type>:<sample-unit>:<period-type>:<period-unit><br><br> For example:<br><br>   process_cpu:cpu:nanoseconds:cpu:nanoseconds|
|matchers|[string]|false|none|none|
|groupBy|[string]|false|none|none|
|externalLabels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|none|
|generation|integer \| string(int64)|false|none|The observed generation of this recording rule. This value should be<br> provided when making updates to this record, to avoid conflicting<br> concurrent updates.|
|stacktraceFilter|[settings.v1.StacktraceFilter](#schemasettings.v1.stacktracefilter)|false|none|The stacktrace filter allows filtering on particular function names in the stacktrace.<br> This allows recording rules to focus on specific functions and calculate their "total"<br> resource usage.|
|provisioned|boolean|false|none|Provisioned rules are added by config and can't be Upsert or Deleted|

<h2 id="tocS_settings.v1.StacktraceFilter">settings.v1.StacktraceFilter</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.stacktracefilter"></a>
<a id="schema_settings.v1.StacktraceFilter"></a>
<a id="tocSsettings.v1.stacktracefilter"></a>
<a id="tocssettings.v1.stacktracefilter"></a>

```json
{
  "functionName": {
    "functionName": "string",
    "metricType": "TOTAL"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionName|[settings.v1.StacktraceFilterFunctionName](#schemasettings.v1.stacktracefilterfunctionname)|false|none|none|

<h2 id="tocS_settings.v1.StacktraceFilterFunctionName">settings.v1.StacktraceFilterFunctionName</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.stacktracefilterfunctionname"></a>
<a id="schema_settings.v1.StacktraceFilterFunctionName"></a>
<a id="tocSsettings.v1.stacktracefilterfunctionname"></a>
<a id="tocssettings.v1.stacktracefilterfunctionname"></a>

```json
{
  "functionName": "string",
  "metricType": "TOTAL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionName|string|false|none|none|
|metricType|[settings.v1.MetricType](#schemasettings.v1.metrictype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|metricType|TOTAL|

<h2 id="tocS_settings.v1.UpsertRecordingRuleRequest">settings.v1.UpsertRecordingRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.upsertrecordingrulerequest"></a>
<a id="schema_settings.v1.UpsertRecordingRuleRequest"></a>
<a id="tocSsettings.v1.upsertrecordingrulerequest"></a>
<a id="tocssettings.v1.upsertrecordingrulerequest"></a>

```json
{
  "id": "string",
  "metricName": "string",
  "matchers": [
    "string"
  ],
  "groupBy": [
    "string"
  ],
  "externalLabels": [
    {
      "name": "service_name",
      "value": "my_service"
    }
  ],
  "generation": 0,
  "stacktraceFilter": {
    "functionName": {
      "functionName": "string",
      "metricType": "TOTAL"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique id of the recording rule. If an id is not provided, this will<br> create a new recording rule. If an id is provided, it will replace the<br> existing recording rule.|
|metricName|string|false|none|none|
|matchers|[string]|false|none|none|
|groupBy|[string]|false|none|none|
|externalLabels|[[types.v1.LabelPair](#schematypes.v1.labelpair)]|false|none|none|
|generation|integer \| string(int64)|false|none|The observed generation of this recording rule. If this value does not<br> match the generation stored in the database, this upsert will be rejected.|
|stacktraceFilter|[settings.v1.StacktraceFilter](#schemasettings.v1.stacktracefilter)|false|none|none|

<h2 id="tocS_settings.v1.UpsertRecordingRuleResponse">settings.v1.UpsertRecordingRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemasettings.v1.upsertrecordingruleresponse"></a>
<a id="schema_settings.v1.UpsertRecordingRuleResponse"></a>
<a id="tocSsettings.v1.upsertrecordingruleresponse"></a>
<a id="tocssettings.v1.upsertrecordingruleresponse"></a>

```json
{
  "rule": {
    "id": "string",
    "metricName": "string",
    "profileType": "string",
    "matchers": [
      "string"
    ],
    "groupBy": [
      "string"
    ],
    "externalLabels": [
      {
        "name": "service_name",
        "value": "my_service"
      }
    ],
    "generation": 0,
    "stacktraceFilter": {
      "functionName": {
        "functionName": "string",
        "metricType": "TOTAL"
      }
    },
    "provisioned": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|[settings.v1.RecordingRule](#schemasettings.v1.recordingrule)|false|none|none|

<h2 id="tocS_types.v1.LabelPair">types.v1.LabelPair</h2>
<!-- backwards compatibility -->
<a id="schematypes.v1.labelpair"></a>
<a id="schema_types.v1.LabelPair"></a>
<a id="tocStypes.v1.labelpair"></a>
<a id="tocstypes.v1.labelpair"></a>

```json
{
  "name": "service_name",
  "value": "my_service"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Label name|
|value|string|false|none|Label value|
