<h1 id="amazon-qldb-session">Amazon QLDB Session v2019-07-11</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>The transactional data APIs for Amazon QLDB</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>

Base URLs:

* <a href="http://session.qldb.us-east-1.amazonaws.com">http://session.qldb.us-east-1.amazonaws.com</a> - The QLDB Session multi-region endpoint

* <a href="https://session.qldb.us-east-1.amazonaws.com">https://session.qldb.us-east-1.amazonaws.com</a> - The QLDB Session multi-region endpoint

* <a href="http://session.qldb.cn-north-1.amazonaws.com.cn">http://session.qldb.cn-north-1.amazonaws.com.cn</a> - The QLDB Session endpoint for China (Beijing) and China (Ningxia)

* <a href="https://session.qldb.cn-north-1.amazonaws.com.cn">https://session.qldb.cn-north-1.amazonaws.com.cn</a> - The QLDB Session endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/qldb/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-qldb-session-default">Default</h1>

## SendCommand

<a id="opIdSendCommand"></a>

> Code samples

```bash
curl 'https://qldb-session.us-east-1.amazonaws.com/#X-Amz-Target=QLDBSession.SendCommand' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: QLDBSession.SendCommand' \
  -d '{
    "SessionToken": {},
    "StartSession": {
      "LedgerName": {}
    },
    "StartTransaction": {},
    "EndSession": {},
    "CommitTransaction": {
      "TransactionId": {},
      "CommitDigest": {}
    },
    "AbortTransaction": {},
    "ExecuteStatement": {
      "TransactionId": {},
      "Statement": {},
      "Parameters": {}
    },
    "FetchPage": {
      "TransactionId": {},
      "NextPageToken": {}
    }
  }'
```

`POST /#X-Amz-Target=QLDBSession.SendCommand`

<p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>

> Body parameter

```json
{
  "SessionToken": {},
  "StartSession": {
    "LedgerName": {}
  },
  "StartTransaction": {},
  "EndSession": {},
  "CommitTransaction": {
    "TransactionId": {},
    "CommitDigest": {}
  },
  "AbortTransaction": {},
  "ExecuteStatement": {
    "TransactionId": {},
    "Statement": {},
    "Parameters": {}
  },
  "FetchPage": {
    "TransactionId": {},
    "NextPageToken": {}
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
|» SessionToken|body|object|false|none|
|» StartSession|body|object|false|none|
|» » LedgerName|body|object|true|none|
|» StartTransaction|body|object|false|none|
|» EndSession|body|object|false|none|
|» CommitTransaction|body|object|false|none|
|» » TransactionId|body|object|true|none|
|» » CommitDigest|body|object|true|none|
|» AbortTransaction|body|object|false|none|
|» ExecuteStatement|body|object|false|none|
|» » TransactionId|body|object|true|none|
|» » Statement|body|object|true|none|
|» » Parameters|body|object|false|none|
|» FetchPage|body|object|false|none|
|» » TransactionId|body|object|true|none|
|» » NextPageToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|QLDBSession.SendCommand|

> Example responses

> 200 Response

```json
{
  "StartSession": {
    "SessionToken": {},
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    }
  },
  "StartTransaction": {
    "TransactionId": {},
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    }
  },
  "EndSession": {
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    }
  },
  "CommitTransaction": {
    "TransactionId": {},
    "CommitDigest": {},
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    },
    "ConsumedIOs": {
      "ReadIOs": {},
      "WriteIOs": {}
    }
  },
  "AbortTransaction": {
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    }
  },
  "ExecuteStatement": {
    "FirstPage": {
      "Values": {},
      "NextPageToken": {}
    },
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    },
    "ConsumedIOs": {
      "ReadIOs": {},
      "WriteIOs": {}
    }
  },
  "FetchPage": {
    "Page": {
      "Values": {},
      "NextPageToken": {}
    },
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    },
    "ConsumedIOs": {
      "ReadIOs": {},
      "WriteIOs": {}
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

<h3 id="sendcommand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendCommandResult](#schemasendcommandresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InvalidSessionException|[InvalidSessionException](#schemainvalidsessionexception)|
|482|482|OccConflictException|[OccConflictException](#schemaoccconflictexception)|
|483|483|RateExceededException|[RateExceededException](#schemarateexceededexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|CapacityExceededException|[CapacityExceededException](#schemacapacityexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_SendCommandResult">SendCommandResult</h2>
<!-- backwards compatibility -->
<a id="schemasendcommandresult"></a>
<a id="schema_SendCommandResult"></a>
<a id="tocSsendcommandresult"></a>
<a id="tocssendcommandresult"></a>

```json
{
  "StartSession": {
    "SessionToken": {},
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    }
  },
  "StartTransaction": {
    "TransactionId": {},
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    }
  },
  "EndSession": {
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    }
  },
  "CommitTransaction": {
    "TransactionId": {},
    "CommitDigest": {},
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    },
    "ConsumedIOs": {
      "ReadIOs": {},
      "WriteIOs": {}
    }
  },
  "AbortTransaction": {
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    }
  },
  "ExecuteStatement": {
    "FirstPage": {
      "Values": {},
      "NextPageToken": {}
    },
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    },
    "ConsumedIOs": {
      "ReadIOs": {},
      "WriteIOs": {}
    }
  },
  "FetchPage": {
    "Page": {
      "Values": {},
      "NextPageToken": {}
    },
    "TimingInformation": {
      "ProcessingTimeMilliseconds": {}
    },
    "ConsumedIOs": {
      "ReadIOs": {},
      "WriteIOs": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartSession|object|false|none|none|
|StartTransaction|object|false|none|none|
|EndSession|object|false|none|none|
|CommitTransaction|object|false|none|none|
|AbortTransaction|object|false|none|none|
|ExecuteStatement|object|false|none|none|
|FetchPage|object|false|none|none|

<h2 id="tocS_SendCommandRequest">SendCommandRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendcommandrequest"></a>
<a id="schema_SendCommandRequest"></a>
<a id="tocSsendcommandrequest"></a>
<a id="tocssendcommandrequest"></a>

```json
{
  "SessionToken": {},
  "StartSession": {
    "LedgerName": {}
  },
  "StartTransaction": {},
  "EndSession": {},
  "CommitTransaction": {
    "TransactionId": {},
    "CommitDigest": {}
  },
  "AbortTransaction": {},
  "ExecuteStatement": {
    "TransactionId": {},
    "Statement": {},
    "Parameters": {}
  },
  "FetchPage": {
    "TransactionId": {},
    "NextPageToken": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionToken|object|false|none|none|
|StartSession|object|false|none|none|
|StartTransaction|object|false|none|none|
|EndSession|object|false|none|none|
|CommitTransaction|object|false|none|none|
|AbortTransaction|object|false|none|none|
|ExecuteStatement|object|false|none|none|
|FetchPage|object|false|none|none|

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_InvalidSessionException">InvalidSessionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsessionexception"></a>
<a id="schema_InvalidSessionException"></a>
<a id="tocSinvalidsessionexception"></a>
<a id="tocsinvalidsessionexception"></a>

```json
null
```

<h2 id="tocS_OccConflictException">OccConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaoccconflictexception"></a>
<a id="schema_OccConflictException"></a>
<a id="tocSoccconflictexception"></a>
<a id="tocsoccconflictexception"></a>

```json
null
```

<h2 id="tocS_RateExceededException">RateExceededException</h2>
<!-- backwards compatibility -->
<a id="schemarateexceededexception"></a>
<a id="schema_RateExceededException"></a>
<a id="tocSrateexceededexception"></a>
<a id="tocsrateexceededexception"></a>

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

<h2 id="tocS_CapacityExceededException">CapacityExceededException</h2>
<!-- backwards compatibility -->
<a id="schemacapacityexceededexception"></a>
<a id="schema_CapacityExceededException"></a>
<a id="tocScapacityexceededexception"></a>
<a id="tocscapacityexceededexception"></a>

```json
null
```

<h2 id="tocS_AbortTransactionRequest">AbortTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaborttransactionrequest"></a>
<a id="schema_AbortTransactionRequest"></a>
<a id="tocSaborttransactionrequest"></a>
<a id="tocsaborttransactionrequest"></a>

```json
{}
```

Contains the details of the transaction to abort.

<h2 id="tocS_TimingInformation">TimingInformation</h2>
<!-- backwards compatibility -->
<a id="schematiminginformation"></a>
<a id="schema_TimingInformation"></a>
<a id="tocStiminginformation"></a>
<a id="tocstiminginformation"></a>

```json
{
  "ProcessingTimeMilliseconds": {}
}
```

Contains server-side performance information for a command. Amazon QLDB captures timing information between the times when it receives the request and when it sends the corresponding response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProcessingTimeMilliseconds|object|false|none|none|

<h2 id="tocS_AbortTransactionResult">AbortTransactionResult</h2>
<!-- backwards compatibility -->
<a id="schemaaborttransactionresult"></a>
<a id="schema_AbortTransactionResult"></a>
<a id="tocSaborttransactionresult"></a>
<a id="tocsaborttransactionresult"></a>

```json
{
  "TimingInformation": {
    "ProcessingTimeMilliseconds": {}
  }
}
```

Contains the details of the aborted transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimingInformation|object|false|none|none|

<h2 id="tocS_CommitDigest">CommitDigest</h2>
<!-- backwards compatibility -->
<a id="schemacommitdigest"></a>
<a id="schema_CommitDigest"></a>
<a id="tocScommitdigest"></a>
<a id="tocscommitdigest"></a>

```json
"string"
```

<h2 id="tocS_TransactionId">TransactionId</h2>
<!-- backwards compatibility -->
<a id="schematransactionid"></a>
<a id="schema_TransactionId"></a>
<a id="tocStransactionid"></a>
<a id="tocstransactionid"></a>

```json
"stringstringstringstri"
```

<h2 id="tocS_CommitTransactionRequest">CommitTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacommittransactionrequest"></a>
<a id="schema_CommitTransactionRequest"></a>
<a id="tocScommittransactionrequest"></a>
<a id="tocscommittransactionrequest"></a>

```json
{
  "TransactionId": {},
  "CommitDigest": {}
}
```

Contains the details of the transaction to commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionId|object|true|none|none|
|CommitDigest|object|true|none|none|

<h2 id="tocS_IOUsage">IOUsage</h2>
<!-- backwards compatibility -->
<a id="schemaiousage"></a>
<a id="schema_IOUsage"></a>
<a id="tocSiousage"></a>
<a id="tocsiousage"></a>

```json
{
  "ReadIOs": {},
  "WriteIOs": {}
}
```

Contains I/O usage metrics for a command that was invoked.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReadIOs|object|false|none|none|
|WriteIOs|object|false|none|none|

<h2 id="tocS_CommitTransactionResult">CommitTransactionResult</h2>
<!-- backwards compatibility -->
<a id="schemacommittransactionresult"></a>
<a id="schema_CommitTransactionResult"></a>
<a id="tocScommittransactionresult"></a>
<a id="tocscommittransactionresult"></a>

```json
{
  "TransactionId": {},
  "CommitDigest": {},
  "TimingInformation": {
    "ProcessingTimeMilliseconds": {}
  },
  "ConsumedIOs": {
    "ReadIOs": {},
    "WriteIOs": {}
  }
}
```

Contains the details of the committed transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionId|object|false|none|none|
|CommitDigest|object|false|none|none|
|TimingInformation|object|false|none|none|
|ConsumedIOs|object|false|none|none|

<h2 id="tocS_EndSessionRequest">EndSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaendsessionrequest"></a>
<a id="schema_EndSessionRequest"></a>
<a id="tocSendsessionrequest"></a>
<a id="tocsendsessionrequest"></a>

```json
{}
```

Specifies a request to end the session.

<h2 id="tocS_EndSessionResult">EndSessionResult</h2>
<!-- backwards compatibility -->
<a id="schemaendsessionresult"></a>
<a id="schema_EndSessionResult"></a>
<a id="tocSendsessionresult"></a>
<a id="tocsendsessionresult"></a>

```json
{
  "TimingInformation": {
    "ProcessingTimeMilliseconds": {}
  }
}
```

Contains the details of the ended session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimingInformation|object|false|none|none|

<h2 id="tocS_Statement">Statement</h2>
<!-- backwards compatibility -->
<a id="schemastatement"></a>
<a id="schema_Statement"></a>
<a id="tocSstatement"></a>
<a id="tocsstatement"></a>

```json
"string"
```

<h2 id="tocS_StatementParameters">StatementParameters</h2>
<!-- backwards compatibility -->
<a id="schemastatementparameters"></a>
<a id="schema_StatementParameters"></a>
<a id="tocSstatementparameters"></a>
<a id="tocsstatementparameters"></a>

```json
[
  {
    "IonBinary": {},
    "IonText": {}
  }
]
```

<h2 id="tocS_ExecuteStatementRequest">ExecuteStatementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutestatementrequest"></a>
<a id="schema_ExecuteStatementRequest"></a>
<a id="tocSexecutestatementrequest"></a>
<a id="tocsexecutestatementrequest"></a>

```json
{
  "TransactionId": {},
  "Statement": {},
  "Parameters": {}
}
```

Specifies a request to execute a statement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionId|object|true|none|none|
|Statement|object|true|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_Page">Page</h2>
<!-- backwards compatibility -->
<a id="schemapage"></a>
<a id="schema_Page"></a>
<a id="tocSpage"></a>
<a id="tocspage"></a>

```json
{
  "Values": {},
  "NextPageToken": {}
}
```

Contains details of the fetched page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Values|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ExecuteStatementResult">ExecuteStatementResult</h2>
<!-- backwards compatibility -->
<a id="schemaexecutestatementresult"></a>
<a id="schema_ExecuteStatementResult"></a>
<a id="tocSexecutestatementresult"></a>
<a id="tocsexecutestatementresult"></a>

```json
{
  "FirstPage": {
    "Values": {},
    "NextPageToken": {}
  },
  "TimingInformation": {
    "ProcessingTimeMilliseconds": {}
  },
  "ConsumedIOs": {
    "ReadIOs": {},
    "WriteIOs": {}
  }
}
```

Contains the details of the executed statement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstPage|object|false|none|none|
|TimingInformation|object|false|none|none|
|ConsumedIOs|object|false|none|none|

<h2 id="tocS_PageToken">PageToken</h2>
<!-- backwards compatibility -->
<a id="schemapagetoken"></a>
<a id="schema_PageToken"></a>
<a id="tocSpagetoken"></a>
<a id="tocspagetoken"></a>

```json
"string"
```

<h2 id="tocS_FetchPageRequest">FetchPageRequest</h2>
<!-- backwards compatibility -->
<a id="schemafetchpagerequest"></a>
<a id="schema_FetchPageRequest"></a>
<a id="tocSfetchpagerequest"></a>
<a id="tocsfetchpagerequest"></a>

```json
{
  "TransactionId": {},
  "NextPageToken": {}
}
```

Specifies the details of the page to be fetched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionId|object|true|none|none|
|NextPageToken|object|true|none|none|

<h2 id="tocS_FetchPageResult">FetchPageResult</h2>
<!-- backwards compatibility -->
<a id="schemafetchpageresult"></a>
<a id="schema_FetchPageResult"></a>
<a id="tocSfetchpageresult"></a>
<a id="tocsfetchpageresult"></a>

```json
{
  "Page": {
    "Values": {},
    "NextPageToken": {}
  },
  "TimingInformation": {
    "ProcessingTimeMilliseconds": {}
  },
  "ConsumedIOs": {
    "ReadIOs": {},
    "WriteIOs": {}
  }
}
```

Contains the page that was fetched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Page|object|false|none|none|
|TimingInformation|object|false|none|none|
|ConsumedIOs|object|false|none|none|

<h2 id="tocS_ReadIOs">ReadIOs</h2>
<!-- backwards compatibility -->
<a id="schemareadios"></a>
<a id="schema_ReadIOs"></a>
<a id="tocSreadios"></a>
<a id="tocsreadios"></a>

```json
0
```

<h2 id="tocS_WriteIOs">WriteIOs</h2>
<!-- backwards compatibility -->
<a id="schemawriteios"></a>
<a id="schema_WriteIOs"></a>
<a id="tocSwriteios"></a>
<a id="tocswriteios"></a>

```json
0
```

<h2 id="tocS_IonBinary">IonBinary</h2>
<!-- backwards compatibility -->
<a id="schemaionbinary"></a>
<a id="schema_IonBinary"></a>
<a id="tocSionbinary"></a>
<a id="tocsionbinary"></a>

```json
"string"
```

<h2 id="tocS_IonText">IonText</h2>
<!-- backwards compatibility -->
<a id="schemaiontext"></a>
<a id="schema_IonText"></a>
<a id="tocSiontext"></a>
<a id="tocsiontext"></a>

```json
"string"
```

<h2 id="tocS_LedgerName">LedgerName</h2>
<!-- backwards compatibility -->
<a id="schemaledgername"></a>
<a id="schema_LedgerName"></a>
<a id="tocSledgername"></a>
<a id="tocsledgername"></a>

```json
"string"
```

<h2 id="tocS_ValueHolders">ValueHolders</h2>
<!-- backwards compatibility -->
<a id="schemavalueholders"></a>
<a id="schema_ValueHolders"></a>
<a id="tocSvalueholders"></a>
<a id="tocsvalueholders"></a>

```json
[
  {
    "IonBinary": {},
    "IonText": {}
  }
]
```

<h2 id="tocS_ProcessingTimeMilliseconds">ProcessingTimeMilliseconds</h2>
<!-- backwards compatibility -->
<a id="schemaprocessingtimemilliseconds"></a>
<a id="schema_ProcessingTimeMilliseconds"></a>
<a id="tocSprocessingtimemilliseconds"></a>
<a id="tocsprocessingtimemilliseconds"></a>

```json
0
```

<h2 id="tocS_SessionToken">SessionToken</h2>
<!-- backwards compatibility -->
<a id="schemasessiontoken"></a>
<a id="schema_SessionToken"></a>
<a id="tocSsessiontoken"></a>
<a id="tocssessiontoken"></a>

```json
"string"
```

<h2 id="tocS_StartSessionRequest">StartSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartsessionrequest"></a>
<a id="schema_StartSessionRequest"></a>
<a id="tocSstartsessionrequest"></a>
<a id="tocsstartsessionrequest"></a>

```json
{
  "LedgerName": {}
}
```

Specifies a request to start a new session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LedgerName|object|true|none|none|

<h2 id="tocS_StartTransactionRequest">StartTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarttransactionrequest"></a>
<a id="schema_StartTransactionRequest"></a>
<a id="tocSstarttransactionrequest"></a>
<a id="tocsstarttransactionrequest"></a>

```json
{}
```

Specifies a request to start a transaction.

<h2 id="tocS_StartSessionResult">StartSessionResult</h2>
<!-- backwards compatibility -->
<a id="schemastartsessionresult"></a>
<a id="schema_StartSessionResult"></a>
<a id="tocSstartsessionresult"></a>
<a id="tocsstartsessionresult"></a>

```json
{
  "SessionToken": {},
  "TimingInformation": {
    "ProcessingTimeMilliseconds": {}
  }
}
```

Contains the details of the started session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionToken|object|false|none|none|
|TimingInformation|object|false|none|none|

<h2 id="tocS_StartTransactionResult">StartTransactionResult</h2>
<!-- backwards compatibility -->
<a id="schemastarttransactionresult"></a>
<a id="schema_StartTransactionResult"></a>
<a id="tocSstarttransactionresult"></a>
<a id="tocsstarttransactionresult"></a>

```json
{
  "TransactionId": {},
  "TimingInformation": {
    "ProcessingTimeMilliseconds": {}
  }
}
```

Contains the details of the started transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TransactionId|object|false|none|none|
|TimingInformation|object|false|none|none|

<h2 id="tocS_ValueHolder">ValueHolder</h2>
<!-- backwards compatibility -->
<a id="schemavalueholder"></a>
<a id="schema_ValueHolder"></a>
<a id="tocSvalueholder"></a>
<a id="tocsvalueholder"></a>

```json
{
  "IonBinary": {},
  "IonText": {}
}
```

A structure that can contain a value in multiple encoding formats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IonBinary|object|false|none|none|
|IonText|object|false|none|none|
