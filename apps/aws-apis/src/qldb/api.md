<h1 id="amazon-qldb">Amazon QLDB v2019-01-02</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The control plane for Amazon QLDB

Base URLs:

* <a href="http://qldb.us-east-1.amazonaws.com">http://qldb.us-east-1.amazonaws.com</a> - The QLDB multi-region endpoint

* <a href="https://qldb.us-east-1.amazonaws.com">https://qldb.us-east-1.amazonaws.com</a> - The QLDB multi-region endpoint

* <a href="http://qldb.cn-north-1.amazonaws.com.cn">http://qldb.cn-north-1.amazonaws.com.cn</a> - The QLDB endpoint for China (Beijing) and China (Ningxia)

* <a href="https://qldb.cn-north-1.amazonaws.com.cn">https://qldb.cn-north-1.amazonaws.com.cn</a> - The QLDB endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/qldb/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-qldb-default">Default</h1>

## DescribeJournalKinesisStream

<a id="opIdDescribeJournalKinesisStream"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string/journal-kinesis-streams/stringstringstringstri \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ledgers/{name}/journal-kinesis-streams/{streamId}`

<p>Returns detailed information about a given Amazon QLDB journal stream. The output includes the Amazon Resource Name (ARN), stream name, current status, creation time, and the parameters of the original stream creation request.</p> <p>This action does not return any expired journal streams. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/streams.create.html#streams.create.states.expiration">Expiration for terminal streams</a> in the <i>Amazon QLDB Developer Guide</i>.</p>

<h3 id="describejournalkinesisstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger.|
|streamId|path|string|true|The UUID (represented in Base62-encoded text) of the QLDB journal stream to describe.|
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
  "Stream": {
    "LedgerName": {},
    "CreationTime": {},
    "InclusiveStartTime": {},
    "ExclusiveEndTime": {},
    "RoleArn": {},
    "StreamId": {},
    "Arn": {},
    "Status": {},
    "KinesisConfiguration": {
      "StreamArn": {},
      "AggregationEnabled": {}
    },
    "ErrorCause": {},
    "StreamName": {}
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

<h3 id="describejournalkinesisstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJournalKinesisStreamResponse](#schemadescribejournalkinesisstreamresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourcePreconditionNotMetException|[ResourcePreconditionNotMetException](#schemaresourcepreconditionnotmetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelJournalKinesisStream

<a id="opIdCancelJournalKinesisStream"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string/journal-kinesis-streams/stringstringstringstri \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /ledgers/{name}/journal-kinesis-streams/{streamId}`

<p>Ends a given Amazon QLDB journal stream. Before a stream can be canceled, its current status must be <code>ACTIVE</code>.</p> <p>You can't restart a stream after you cancel it. Canceled QLDB stream resources are subject to a 7-day retention period, so they are automatically deleted after this limit expires.</p>

<h3 id="canceljournalkinesisstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger.|
|streamId|path|string|true|The UUID (represented in Base62-encoded text) of the QLDB journal stream to be canceled.|
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
  "StreamId": {}
}
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

<h3 id="canceljournalkinesisstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelJournalKinesisStreamResponse](#schemacanceljournalkinesisstreamresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourcePreconditionNotMetException|[ResourcePreconditionNotMetException](#schemaresourcepreconditionnotmetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLedgers

<a id="opIdListLedgers"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ledgers`

<p>Returns an array of ledger summaries that are associated with the current Amazon Web Services account and Region.</p> <p>This action returns a maximum of 100 items and is paginated so that you can retrieve all the items by calling <code>ListLedgers</code> multiple times.</p>

<h3 id="listledgers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max_results|query|integer|false|The maximum number of results to return in a single <code>ListLedgers</code> request. (The actual number of results returned might be fewer.)|
|next_token|query|string|false|A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListLedgers</code> call, then you should use that value as input here.|
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
  "Ledgers": {},
  "NextToken": {}
}
```

<h3 id="listledgers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLedgersResponse](#schemalistledgersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLedger

<a id="opIdCreateLedger"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "PermissionsMode": "ALLOW_ALL",
    "DeletionProtection": true,
    "KmsKey": "string"
  }'
```

`POST /ledgers`

Creates a new ledger in your Amazon Web Services account in the current Region.

> Body parameter

```json
{
  "Name": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "PermissionsMode": "ALLOW_ALL",
  "DeletionProtection": true,
  "KmsKey": "string"
}
```

<h3 id="createledger-parameters">Parameters</h3>

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
|» Name|body|string|true|<p>The name of the ledger that you want to create. The name must be unique among all of the ledgers in your Amazon Web Services account in the current Region.</p> <p>Naming constraints for ledger names are defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer Guide</i>.</p>|
|» Tags|body|object|false|The key-value pairs to add as tags to the ledger that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» PermissionsMode|body|string|true|<p>The permissions mode to assign to the ledger that you want to create. This parameter can have one of the following values:</p> <ul> <li> <p> <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with API-level granularity for ledgers.</p> <p>This mode allows users who have the <code>SendCommand</code> API permission for this ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables in the specified ledger. This mode disregards any table-level or command-level IAM permissions policies that you create for the ledger.</p> </li> <li> <p> <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that enables access control with finer granularity for ledgers, tables, and PartiQL commands.</p> <p>By default, this mode denies all user requests to run any PartiQL commands on any tables in this ledger. To allow PartiQL commands to run, you must create IAM permissions policies for specific table resources and PartiQL actions, in addition to the <code>SendCommand</code> API permission for the ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-standard-mode.html">Getting started with the standard permissions mode</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> </ul> <note> <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize the security of your ledger data.</p> </note>|
|» DeletionProtection|body|boolean|false|<p>The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>.</p>|
|» KmsKey|body|string|false|<p>The key in Key Management Service (KMS) to use for encryption of data at rest in the ledger. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>AWS_OWNED_KMS_KEY</code>: Use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p> </li> <li> <p> <b>Undefined</b>: By default, use an Amazon Web Services owned KMS key.</p> </li> <li> <p> <b>A valid symmetric customer managed KMS key</b>: Use the specified KMS key in your account that you create, own, and manage.</p> <p>Amazon QLDB does not support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> </ul> <p>To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p> <p>For example:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Alias name: <code>alias/ExampleAlias</code> </p> </li> <li> <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a> in the <i>Key Management Service Developer Guide</i>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PermissionsMode|ALLOW_ALL|
|» PermissionsMode|STANDARD|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Arn": {},
  "State": {},
  "CreationDateTime": {},
  "PermissionsMode": {},
  "DeletionProtection": {},
  "KmsKeyArn": {}
}
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

<h3 id="createledger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLedgerResponse](#schemacreateledgerresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLedger

<a id="opIdDescribeLedger"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ledgers/{name}`

Returns information about a ledger, including its state, permissions mode, encryption at rest settings, and when it was created.

<h3 id="describeledger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger that you want to describe.|
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
  "Name": {},
  "Arn": {},
  "State": {},
  "CreationDateTime": {},
  "PermissionsMode": {},
  "DeletionProtection": {},
  "EncryptionDescription": {
    "KmsKeyArn": {},
    "EncryptionStatus": {},
    "InaccessibleKmsKeyDateTime": {}
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

<h3 id="describeledger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLedgerResponse](#schemadescribeledgerresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLedger

<a id="opIdDeleteLedger"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /ledgers/{name}`

<p>Deletes a ledger and all of its contents. This action is irreversible.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>.</p>

<h3 id="deleteledger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger that you want to delete.|
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

<h3 id="deleteledger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourcePreconditionNotMetException|[ResourcePreconditionNotMetException](#schemaresourcepreconditionnotmetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLedger

<a id="opIdUpdateLedger"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DeletionProtection": true,
    "KmsKey": "string"
  }'
```

`PATCH /ledgers/{name}`

Updates properties on a ledger.

> Body parameter

```json
{
  "DeletionProtection": true,
  "KmsKey": "string"
}
```

<h3 id="updateledger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DeletionProtection|body|boolean|false|<p>The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set the flag to <code>false</code>.</p>|
|» KmsKey|body|string|false|<p>The key in Key Management Service (KMS) to use for encryption of data at rest in the ledger. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>AWS_OWNED_KMS_KEY</code>: Use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p> </li> <li> <p> <b>Undefined</b>: Make no changes to the KMS key of the ledger.</p> </li> <li> <p> <b>A valid symmetric customer managed KMS key</b>: Use the specified KMS key in your account that you create, own, and manage.</p> <p>Amazon QLDB does not support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> </ul> <p>To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p> <p>For example:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Alias name: <code>alias/ExampleAlias</code> </p> </li> <li> <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a> in the <i>Key Management Service Developer Guide</i>.</p>|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Arn": {},
  "State": {},
  "CreationDateTime": {},
  "DeletionProtection": {},
  "EncryptionDescription": {
    "KmsKeyArn": {},
    "EncryptionStatus": {},
    "InaccessibleKmsKeyDateTime": {}
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

<h3 id="updateledger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLedgerResponse](#schemaupdateledgerresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeJournalS3Export

<a id="opIdDescribeJournalS3Export"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string/journal-s3-exports/stringstringstringstri \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ledgers/{name}/journal-s3-exports/{exportId}`

<p>Returns information about a journal export job, including the ledger name, export ID, creation time, current status, and the parameters of the original export creation request.</p> <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export job expiration</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>If the export job with the given <code>ExportId</code> doesn't exist, then throws <code>ResourceNotFoundException</code>.</p> <p>If the ledger with the given <code>Name</code> doesn't exist, then throws <code>ResourceNotFoundException</code>.</p>

<h3 id="describejournals3export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger.|
|exportId|path|string|true|The UUID (represented in Base62-encoded text) of the journal export job to describe.|
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
  "ExportDescription": {
    "LedgerName": {},
    "ExportId": {},
    "ExportCreationTime": {},
    "Status": {},
    "InclusiveStartTime": {},
    "ExclusiveEndTime": {},
    "S3ExportConfiguration": {
      "Bucket": {},
      "Prefix": {},
      "EncryptionConfiguration": {
        "ObjectEncryptionType": {},
        "KmsKeyArn": {}
      }
    },
    "RoleArn": {},
    "OutputFormat": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="describejournals3export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJournalS3ExportResponse](#schemadescribejournals3exportresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJournalS3ExportsForLedger

<a id="opIdListJournalS3ExportsForLedger"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string/journal-s3-exports \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ledgers/{name}/journal-s3-exports`

<p>Returns an array of journal export job descriptions for a specified ledger.</p> <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that you can retrieve all the items by calling <code>ListJournalS3ExportsForLedger</code> multiple times.</p> <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export job expiration</a> in the <i>Amazon QLDB Developer Guide</i>.</p>

<h3 id="listjournals3exportsforledger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger.|
|max_results|query|integer|false|The maximum number of results to return in a single <code>ListJournalS3ExportsForLedger</code> request. (The actual number of results returned might be fewer.)|
|next_token|query|string|false|A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListJournalS3ExportsForLedger</code> call, then you should use that value as input here.|
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
  "JournalS3Exports": {},
  "NextToken": {}
}
```

<h3 id="listjournals3exportsforledger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJournalS3ExportsForLedgerResponse](#schemalistjournals3exportsforledgerresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportJournalToS3

<a id="opIdExportJournalToS3"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string/journal-s3-exports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InclusiveStartTime": "1970-01-01T00:00:00Z",
    "ExclusiveEndTime": "1970-01-01T00:00:00Z",
    "S3ExportConfiguration": {
      "Bucket": {},
      "Prefix": {},
      "EncryptionConfiguration": {
        "ObjectEncryptionType": {},
        "KmsKeyArn": {}
      }
    },
    "RoleArn": "stringstringstringst",
    "OutputFormat": "ION_BINARY"
  }'
```

`POST /ledgers/{name}/journal-s3-exports`

<p>Exports journal contents within a date and time range from a ledger into a specified Amazon Simple Storage Service (Amazon S3) bucket. A journal export job can write the data objects in either the text or binary representation of Amazon Ion format, or in <i>JSON Lines</i> text format.</p> <p>In JSON Lines format, each journal block in the exported data object is a valid JSON object that is delimited by a newline. You can use this format to easily integrate JSON exports with analytics tools such as Glue and Amazon Athena because these services can parse newline-delimited JSON automatically. For more information about the format, see <a href="https://jsonlines.org/">JSON Lines</a>.</p> <p>If the ledger with the given <code>Name</code> doesn't exist, then throws <code>ResourceNotFoundException</code>.</p> <p>If the ledger with the given <code>Name</code> is in <code>CREATING</code> status, then throws <code>ResourcePreconditionNotMetException</code>.</p> <p>You can initiate up to two concurrent journal export requests for each ledger. Beyond this limit, journal export requests throw <code>LimitExceededException</code>.</p>

> Body parameter

```json
{
  "InclusiveStartTime": "1970-01-01T00:00:00Z",
  "ExclusiveEndTime": "1970-01-01T00:00:00Z",
  "S3ExportConfiguration": {
    "Bucket": {},
    "Prefix": {},
    "EncryptionConfiguration": {
      "ObjectEncryptionType": {},
      "KmsKeyArn": {}
    }
  },
  "RoleArn": "stringstringstringst",
  "OutputFormat": "ION_BINARY"
}
```

<h3 id="exportjournaltos3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InclusiveStartTime|body|string(date-time)|true|<p>The inclusive start date and time for the range of journal contents to export.</p> <p>The <code>InclusiveStartTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>InclusiveStartTime</code> must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, Amazon QLDB defaults it to the ledger's <code>CreationDateTime</code>.</p>|
|» ExclusiveEndTime|body|string(date-time)|true|<p>The exclusive end date and time for the range of journal contents to export.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>ExclusiveEndTime</code> must be less than or equal to the current UTC date and time.</p>|
|» S3ExportConfiguration|body|object|true|The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents.|
|» » Bucket|body|object|false|none|
|» » Prefix|body|object|false|none|
|» » EncryptionConfiguration|body|object|false|none|
|» » » ObjectEncryptionType|body|object|true|none|
|» » » KmsKeyArn|body|object|false|none|
|» RoleArn|body|string|true|<p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal export job to do the following:</p> <ul> <li> <p>Write objects into your Amazon Simple Storage Service (Amazon S3) bucket.</p> </li> <li> <p>(Optional) Use your customer managed key in Key Management Service (KMS) for server-side encryption of your exported data.</p> </li> </ul> <p>To pass a role to QLDB when requesting a journal export, you must have permissions to perform the <code>iam:PassRole</code> action on the IAM role resource. This is required for all journal export requests.</p>|
|» OutputFormat|body|string|false|The output format of your exported journal data. If this parameter is not specified, the exported data defaults to <code>ION_TEXT</code> format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» OutputFormat|ION_BINARY|
|» OutputFormat|ION_TEXT|
|» OutputFormat|JSON|

> Example responses

> 200 Response

```json
{
  "ExportId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="exportjournaltos3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportJournalToS3Response](#schemaexportjournaltos3response)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourcePreconditionNotMetException|[ResourcePreconditionNotMetException](#schemaresourcepreconditionnotmetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBlock

<a id="opIdGetBlock"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string/block \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "BlockAddress": {
      "IonText": {}
    },
    "DigestTipAddress": {
      "IonText": {}
    }
  }'
```

`POST /ledgers/{name}/block`

<p>Returns a block object at a specified address in a journal. Also returns a proof of the specified block for verification if <code>DigestTipAddress</code> is provided.</p> <p>For information about the data contents in a block, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/journal-contents.html">Journal contents</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>If the specified ledger doesn't exist or is in <code>DELETING</code> status, then throws <code>ResourceNotFoundException</code>.</p> <p>If the specified ledger is in <code>CREATING</code> status, then throws <code>ResourcePreconditionNotMetException</code>.</p> <p>If no block exists with the specified address, then throws <code>InvalidParameterException</code>.</p>

> Body parameter

```json
{
  "BlockAddress": {
    "IonText": {}
  },
  "DigestTipAddress": {
    "IonText": {}
  }
}
```

<h3 id="getblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» BlockAddress|body|object|true|A structure that can contain a value in multiple encoding formats.|
|» » IonText|body|object|false|none|
|» DigestTipAddress|body|object|false|A structure that can contain a value in multiple encoding formats.|
|» » IonText|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Block": {
    "IonText": {}
  },
  "Proof": {
    "IonText": {}
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

<h3 id="getblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBlockResponse](#schemagetblockresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourcePreconditionNotMetException|[ResourcePreconditionNotMetException](#schemaresourcepreconditionnotmetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDigest

<a id="opIdGetDigest"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string/digest \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /ledgers/{name}/digest`

Returns the digest of a ledger at the latest committed block in the journal. The response includes a 256-bit hash value and a block address.

<h3 id="getdigest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger.|
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
  "Digest": {},
  "DigestTipAddress": {
    "IonText": {}
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

<h3 id="getdigest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDigestResponse](#schemagetdigestresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourcePreconditionNotMetException|[ResourcePreconditionNotMetException](#schemaresourcepreconditionnotmetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRevision

<a id="opIdGetRevision"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string/revision \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "BlockAddress": {
      "IonText": {}
    },
    "DocumentId": "stringstringstringstri",
    "DigestTipAddress": {
      "IonText": {}
    }
  }'
```

`POST /ledgers/{name}/revision`

Returns a revision data object for a specified document ID and block address. Also returns a proof of the specified revision for verification if <code>DigestTipAddress</code> is provided.

> Body parameter

```json
{
  "BlockAddress": {
    "IonText": {}
  },
  "DocumentId": "stringstringstringstri",
  "DigestTipAddress": {
    "IonText": {}
  }
}
```

<h3 id="getrevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» BlockAddress|body|object|true|A structure that can contain a value in multiple encoding formats.|
|» » IonText|body|object|false|none|
|» DocumentId|body|string|true|The UUID (represented in Base62-encoded text) of the document to be verified.|
|» DigestTipAddress|body|object|false|A structure that can contain a value in multiple encoding formats.|
|» » IonText|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Proof": {
    "IonText": {}
  },
  "Revision": {
    "IonText": {}
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

<h3 id="getrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRevisionResponse](#schemagetrevisionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourcePreconditionNotMetException|[ResourcePreconditionNotMetException](#schemaresourcepreconditionnotmetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJournalKinesisStreamsForLedger

<a id="opIdListJournalKinesisStreamsForLedger"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string/journal-kinesis-streams \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ledgers/{name}/journal-kinesis-streams`

<p>Returns an array of all Amazon QLDB journal stream descriptors for a given ledger. The output of each stream descriptor includes the same details that are returned by <code>DescribeJournalKinesisStream</code>.</p> <p>This action does not return any expired journal streams. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/streams.create.html#streams.create.states.expiration">Expiration for terminal streams</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>This action returns a maximum of <code>MaxResults</code> items. It is paginated so that you can retrieve all the items by calling <code>ListJournalKinesisStreamsForLedger</code> multiple times.</p>

<h3 id="listjournalkinesisstreamsforledger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger.|
|max_results|query|integer|false|The maximum number of results to return in a single <code>ListJournalKinesisStreamsForLedger</code> request. (The actual number of results returned might be fewer.)|
|next_token|query|string|false|A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListJournalKinesisStreamsForLedger</code> call, you should use that value as input here.|
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
  "Streams": {},
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

<h3 id="listjournalkinesisstreamsforledger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJournalKinesisStreamsForLedgerResponse](#schemalistjournalkinesisstreamsforledgerresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourcePreconditionNotMetException|[ResourcePreconditionNotMetException](#schemaresourcepreconditionnotmetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StreamJournalToKinesis

<a id="opIdStreamJournalToKinesis"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string/journal-kinesis-streams \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "RoleArn": "stringstringstringst",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "InclusiveStartTime": "1970-01-01T00:00:00Z",
    "ExclusiveEndTime": "1970-01-01T00:00:00Z",
    "KinesisConfiguration": {
      "StreamArn": {},
      "AggregationEnabled": {}
    },
    "StreamName": "string"
  }'
```

`POST /ledgers/{name}/journal-kinesis-streams`

Creates a journal stream for a given Amazon QLDB ledger. The stream captures every document revision that is committed to the ledger's journal and delivers the data to a specified Amazon Kinesis Data Streams resource.

> Body parameter

```json
{
  "RoleArn": "stringstringstringst",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "InclusiveStartTime": "1970-01-01T00:00:00Z",
  "ExclusiveEndTime": "1970-01-01T00:00:00Z",
  "KinesisConfiguration": {
    "StreamArn": {},
    "AggregationEnabled": {}
  },
  "StreamName": "string"
}
```

<h3 id="streamjournaltokinesis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» RoleArn|body|string|true|<p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal stream to write data records to a Kinesis Data Streams resource.</p> <p>To pass a role to QLDB when requesting a journal stream, you must have permissions to perform the <code>iam:PassRole</code> action on the IAM role resource. This is required for all journal stream requests.</p>|
|» Tags|body|object|false|The key-value pairs to add as tags to the stream that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» InclusiveStartTime|body|string(date-time)|true|<p>The inclusive start date and time from which to start streaming journal data. This parameter must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>InclusiveStartTime</code> cannot be in the future and must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, QLDB effectively defaults it to the ledger's <code>CreationDateTime</code>.</p>|
|» ExclusiveEndTime|body|string(date-time)|false|<p>The exclusive date and time that specifies when the stream ends. If you don't define this parameter, the stream runs indefinitely until you cancel it.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p>|
|» KinesisConfiguration|body|object|true|The configuration settings of the Amazon Kinesis Data Streams destination for an Amazon QLDB journal stream.|
|» » StreamArn|body|object|false|none|
|» » AggregationEnabled|body|object|false|none|
|» StreamName|body|string|true|<p>The name that you want to assign to the QLDB journal stream. User-defined names can help identify and indicate the purpose of a stream.</p> <p>Your stream name must be unique among other <i>active</i> streams for a given ledger. Stream names have the same naming constraints as ledger names, as defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer Guide</i>.</p>|

> Example responses

> 200 Response

```json
{
  "StreamId": {}
}
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

<h3 id="streamjournaltokinesis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StreamJournalToKinesisResponse](#schemastreamjournaltokinesisresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourcePreconditionNotMetException|[ResourcePreconditionNotMetException](#schemaresourcepreconditionnotmetexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJournalS3Exports

<a id="opIdListJournalS3Exports"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/journal-s3-exports \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /journal-s3-exports`

<p>Returns an array of journal export job descriptions for all ledgers that are associated with the current Amazon Web Services account and Region.</p> <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that you can retrieve all the items by calling <code>ListJournalS3Exports</code> multiple times.</p> <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export job expiration</a> in the <i>Amazon QLDB Developer Guide</i>.</p>

<h3 id="listjournals3exports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max_results|query|integer|false|The maximum number of results to return in a single <code>ListJournalS3Exports</code> request. (The actual number of results returned might be fewer.)|
|next_token|query|string|false|A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListJournalS3Exports</code> call, then you should use that value as input here.|
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
  "JournalS3Exports": {},
  "NextToken": {}
}
```

<h3 id="listjournals3exports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJournalS3ExportsResponse](#schemalistjournals3exportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/tags/stringstringstringst \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Returns all tags for a specified Amazon QLDB resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|<p>The Amazon Resource Name (ARN) for which to list the tags. For example:</p> <p> <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code> </p>|
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/tags/stringstringstringst \
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

`POST /tags/{resourceArn}`

<p>Adds one or more tags to a specified Amazon QLDB resource.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, your request fails and returns an error.</p>

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
|resourceArn|path|string|true|<p>The Amazon Resource Name (ARN) to which you want to add the tags. For example:</p> <p> <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code> </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|The key-value pairs to add as tags to the specified QLDB resource. Tag keys are case sensitive. If you specify a key that already exists for the resource, your request fails and returns an error. Tag values are case sensitive and can be null.|
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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://qldb.us-east-1.amazonaws.com/tags/stringstringstringst#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes one or more tags from a specified Amazon QLDB resource. You can specify up to 50 tag keys to remove.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|<p>The Amazon Resource Name (ARN) from which to remove the tags. For example:</p> <p> <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code> </p>|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The list of tag keys to remove.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLedgerPermissionsMode

<a id="opIdUpdateLedgerPermissionsMode"></a>

> Code samples

```bash
curl https://qldb.us-east-1.amazonaws.com/ledgers/string/permissions-mode \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PermissionsMode": "ALLOW_ALL"
  }'
```

`PATCH /ledgers/{name}/permissions-mode`

<p>Updates the permissions mode of a ledger.</p> <important> <p>Before you switch to the <code>STANDARD</code> permissions mode, you must first create all required IAM policies and table tags to avoid disruption to your users. To learn more, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/ledger-management.basics.html#ledger-mgmt.basics.update-permissions.migrating">Migrating to the standard permissions mode</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </important>

> Body parameter

```json
{
  "PermissionsMode": "ALLOW_ALL"
}
```

<h3 id="updateledgerpermissionsmode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the ledger.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PermissionsMode|body|string|true|<p>The permissions mode to assign to the ledger. This parameter can have one of the following values:</p> <ul> <li> <p> <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with API-level granularity for ledgers.</p> <p>This mode allows users who have the <code>SendCommand</code> API permission for this ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables in the specified ledger. This mode disregards any table-level or command-level IAM permissions policies that you create for the ledger.</p> </li> <li> <p> <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that enables access control with finer granularity for ledgers, tables, and PartiQL commands.</p> <p>By default, this mode denies all user requests to run any PartiQL commands on any tables in this ledger. To allow PartiQL commands to run, you must create IAM permissions policies for specific table resources and PartiQL actions, in addition to the <code>SendCommand</code> API permission for the ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-standard-mode.html">Getting started with the standard permissions mode</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> </ul> <note> <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize the security of your ledger data.</p> </note>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PermissionsMode|ALLOW_ALL|
|» PermissionsMode|STANDARD|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Arn": {},
  "PermissionsMode": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updateledgerpermissionsmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLedgerPermissionsModeResponse](#schemaupdateledgerpermissionsmoderesponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelJournalKinesisStreamResponse">CancelJournalKinesisStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemacanceljournalkinesisstreamresponse"></a>
<a id="schema_CancelJournalKinesisStreamResponse"></a>
<a id="tocScanceljournalkinesisstreamresponse"></a>
<a id="tocscanceljournalkinesisstreamresponse"></a>

```json
{
  "StreamId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamId|object|false|none|none|

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

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

<h2 id="tocS_ResourcePreconditionNotMetException">ResourcePreconditionNotMetException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepreconditionnotmetexception"></a>
<a id="schema_ResourcePreconditionNotMetException"></a>
<a id="tocSresourcepreconditionnotmetexception"></a>
<a id="tocsresourcepreconditionnotmetexception"></a>

```json
null
```

<h2 id="tocS_CreateLedgerResponse">CreateLedgerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateledgerresponse"></a>
<a id="schema_CreateLedgerResponse"></a>
<a id="tocScreateledgerresponse"></a>
<a id="tocscreateledgerresponse"></a>

```json
{
  "Name": {},
  "Arn": {},
  "State": {},
  "CreationDateTime": {},
  "PermissionsMode": {},
  "DeletionProtection": {},
  "KmsKeyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|State|object|false|none|none|
|CreationDateTime|object|false|none|none|
|PermissionsMode|object|false|none|none|
|DeletionProtection|object|false|none|none|
|KmsKeyArn|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
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

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_DescribeJournalKinesisStreamResponse">DescribeJournalKinesisStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribejournalkinesisstreamresponse"></a>
<a id="schema_DescribeJournalKinesisStreamResponse"></a>
<a id="tocSdescribejournalkinesisstreamresponse"></a>
<a id="tocsdescribejournalkinesisstreamresponse"></a>

```json
{
  "Stream": {
    "LedgerName": {},
    "CreationTime": {},
    "InclusiveStartTime": {},
    "ExclusiveEndTime": {},
    "RoleArn": {},
    "StreamId": {},
    "Arn": {},
    "Status": {},
    "KinesisConfiguration": {
      "StreamArn": {},
      "AggregationEnabled": {}
    },
    "ErrorCause": {},
    "StreamName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Stream|object|false|none|none|

<h2 id="tocS_DescribeJournalS3ExportResponse">DescribeJournalS3ExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribejournals3exportresponse"></a>
<a id="schema_DescribeJournalS3ExportResponse"></a>
<a id="tocSdescribejournals3exportresponse"></a>
<a id="tocsdescribejournals3exportresponse"></a>

```json
{
  "ExportDescription": {
    "LedgerName": {},
    "ExportId": {},
    "ExportCreationTime": {},
    "Status": {},
    "InclusiveStartTime": {},
    "ExclusiveEndTime": {},
    "S3ExportConfiguration": {
      "Bucket": {},
      "Prefix": {},
      "EncryptionConfiguration": {
        "ObjectEncryptionType": {},
        "KmsKeyArn": {}
      }
    },
    "RoleArn": {},
    "OutputFormat": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportDescription|object|true|none|none|

<h2 id="tocS_DescribeLedgerResponse">DescribeLedgerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeledgerresponse"></a>
<a id="schema_DescribeLedgerResponse"></a>
<a id="tocSdescribeledgerresponse"></a>
<a id="tocsdescribeledgerresponse"></a>

```json
{
  "Name": {},
  "Arn": {},
  "State": {},
  "CreationDateTime": {},
  "PermissionsMode": {},
  "DeletionProtection": {},
  "EncryptionDescription": {
    "KmsKeyArn": {},
    "EncryptionStatus": {},
    "InaccessibleKmsKeyDateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|State|object|false|none|none|
|CreationDateTime|object|false|none|none|
|PermissionsMode|object|false|none|none|
|DeletionProtection|object|false|none|none|
|EncryptionDescription|object|false|none|none|

<h2 id="tocS_ExportJournalToS3Response">ExportJournalToS3Response</h2>
<!-- backwards compatibility -->
<a id="schemaexportjournaltos3response"></a>
<a id="schema_ExportJournalToS3Response"></a>
<a id="tocSexportjournaltos3response"></a>
<a id="tocsexportjournaltos3response"></a>

```json
{
  "ExportId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportId|object|true|none|none|

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
"string"
```

<h2 id="tocS_S3Prefix">S3Prefix</h2>
<!-- backwards compatibility -->
<a id="schemas3prefix"></a>
<a id="schema_S3Prefix"></a>
<a id="tocSs3prefix"></a>
<a id="tocss3prefix"></a>

```json
"string"
```

<h2 id="tocS_S3EncryptionConfiguration">S3EncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3encryptionconfiguration"></a>
<a id="schema_S3EncryptionConfiguration"></a>
<a id="tocSs3encryptionconfiguration"></a>
<a id="tocss3encryptionconfiguration"></a>

```json
{
  "ObjectEncryptionType": {},
  "KmsKeyArn": {}
}
```

The encryption settings that are used by a journal export job to write data in an Amazon Simple Storage Service (Amazon S3) bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectEncryptionType|object|true|none|none|
|KmsKeyArn|object|false|none|none|

<h2 id="tocS_GetBlockResponse">GetBlockResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetblockresponse"></a>
<a id="schema_GetBlockResponse"></a>
<a id="tocSgetblockresponse"></a>
<a id="tocsgetblockresponse"></a>

```json
{
  "Block": {
    "IonText": {}
  },
  "Proof": {
    "IonText": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Block|object|true|none|none|
|Proof|object|false|none|none|

<h2 id="tocS_IonText">IonText</h2>
<!-- backwards compatibility -->
<a id="schemaiontext"></a>
<a id="schema_IonText"></a>
<a id="tocSiontext"></a>
<a id="tocsiontext"></a>

```json
"password"
```

<h2 id="tocS_GetDigestResponse">GetDigestResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdigestresponse"></a>
<a id="schema_GetDigestResponse"></a>
<a id="tocSgetdigestresponse"></a>
<a id="tocsgetdigestresponse"></a>

```json
{
  "Digest": {},
  "DigestTipAddress": {
    "IonText": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Digest|object|true|none|none|
|DigestTipAddress|object|true|none|none|

<h2 id="tocS_GetRevisionResponse">GetRevisionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrevisionresponse"></a>
<a id="schema_GetRevisionResponse"></a>
<a id="tocSgetrevisionresponse"></a>
<a id="tocsgetrevisionresponse"></a>

```json
{
  "Proof": {
    "IonText": {}
  },
  "Revision": {
    "IonText": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Proof|object|false|none|none|
|Revision|object|true|none|none|

<h2 id="tocS_ListJournalKinesisStreamsForLedgerResponse">ListJournalKinesisStreamsForLedgerResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjournalkinesisstreamsforledgerresponse"></a>
<a id="schema_ListJournalKinesisStreamsForLedgerResponse"></a>
<a id="tocSlistjournalkinesisstreamsforledgerresponse"></a>
<a id="tocslistjournalkinesisstreamsforledgerresponse"></a>

```json
{
  "Streams": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Streams|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListJournalS3ExportsResponse">ListJournalS3ExportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjournals3exportsresponse"></a>
<a id="schema_ListJournalS3ExportsResponse"></a>
<a id="tocSlistjournals3exportsresponse"></a>
<a id="tocslistjournals3exportsresponse"></a>

```json
{
  "JournalS3Exports": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JournalS3Exports|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListJournalS3ExportsForLedgerResponse">ListJournalS3ExportsForLedgerResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjournals3exportsforledgerresponse"></a>
<a id="schema_ListJournalS3ExportsForLedgerResponse"></a>
<a id="tocSlistjournals3exportsforledgerresponse"></a>
<a id="tocslistjournals3exportsforledgerresponse"></a>

```json
{
  "JournalS3Exports": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JournalS3Exports|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLedgersResponse">ListLedgersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistledgersresponse"></a>
<a id="schema_ListLedgersResponse"></a>
<a id="tocSlistledgersresponse"></a>
<a id="tocslistledgersresponse"></a>

```json
{
  "Ledgers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ledgers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

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

<h2 id="tocS_StreamJournalToKinesisResponse">StreamJournalToKinesisResponse</h2>
<!-- backwards compatibility -->
<a id="schemastreamjournaltokinesisresponse"></a>
<a id="schema_StreamJournalToKinesisResponse"></a>
<a id="tocSstreamjournaltokinesisresponse"></a>
<a id="tocsstreamjournaltokinesisresponse"></a>

```json
{
  "StreamId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamId|object|false|none|none|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"stringstringstringst"
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

<h2 id="tocS_UpdateLedgerResponse">UpdateLedgerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateledgerresponse"></a>
<a id="schema_UpdateLedgerResponse"></a>
<a id="tocSupdateledgerresponse"></a>
<a id="tocsupdateledgerresponse"></a>

```json
{
  "Name": {},
  "Arn": {},
  "State": {},
  "CreationDateTime": {},
  "DeletionProtection": {},
  "EncryptionDescription": {
    "KmsKeyArn": {},
    "EncryptionStatus": {},
    "InaccessibleKmsKeyDateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|State|object|false|none|none|
|CreationDateTime|object|false|none|none|
|DeletionProtection|object|false|none|none|
|EncryptionDescription|object|false|none|none|

<h2 id="tocS_UpdateLedgerPermissionsModeResponse">UpdateLedgerPermissionsModeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateledgerpermissionsmoderesponse"></a>
<a id="schema_UpdateLedgerPermissionsModeResponse"></a>
<a id="tocSupdateledgerpermissionsmoderesponse"></a>
<a id="tocsupdateledgerpermissionsmoderesponse"></a>

```json
{
  "Name": {},
  "Arn": {},
  "PermissionsMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|PermissionsMode|object|false|none|none|

<h2 id="tocS_LedgerName">LedgerName</h2>
<!-- backwards compatibility -->
<a id="schemaledgername"></a>
<a id="schema_LedgerName"></a>
<a id="tocSledgername"></a>
<a id="tocsledgername"></a>

```json
"string"
```

<h2 id="tocS_UniqueId">UniqueId</h2>
<!-- backwards compatibility -->
<a id="schemauniqueid"></a>
<a id="schema_UniqueId"></a>
<a id="tocSuniqueid"></a>
<a id="tocsuniqueid"></a>

```json
"stringstringstringstri"
```

<h2 id="tocS_CancelJournalKinesisStreamRequest">CancelJournalKinesisStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceljournalkinesisstreamrequest"></a>
<a id="schema_CancelJournalKinesisStreamRequest"></a>
<a id="tocScanceljournalkinesisstreamrequest"></a>
<a id="tocscanceljournalkinesisstreamrequest"></a>

```json
{}
```

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

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

<h2 id="tocS_PermissionsMode">PermissionsMode</h2>
<!-- backwards compatibility -->
<a id="schemapermissionsmode"></a>
<a id="schema_PermissionsMode"></a>
<a id="tocSpermissionsmode"></a>
<a id="tocspermissionsmode"></a>

```json
"ALLOW_ALL"
```

<h2 id="tocS_DeletionProtection">DeletionProtection</h2>
<!-- backwards compatibility -->
<a id="schemadeletionprotection"></a>
<a id="schema_DeletionProtection"></a>
<a id="tocSdeletionprotection"></a>
<a id="tocsdeletionprotection"></a>

```json
true
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

<h2 id="tocS_CreateLedgerRequest">CreateLedgerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateledgerrequest"></a>
<a id="schema_CreateLedgerRequest"></a>
<a id="tocScreateledgerrequest"></a>
<a id="tocscreateledgerrequest"></a>

```json
{
  "Name": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "PermissionsMode": {},
  "DeletionProtection": {},
  "KmsKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Tags|object|false|none|none|
|PermissionsMode|object|true|none|none|
|DeletionProtection|object|false|none|none|
|KmsKey|object|false|none|none|

<h2 id="tocS_LedgerState">LedgerState</h2>
<!-- backwards compatibility -->
<a id="schemaledgerstate"></a>
<a id="schema_LedgerState"></a>
<a id="tocSledgerstate"></a>
<a id="tocsledgerstate"></a>

```json
"CREATING"
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

<h2 id="tocS_DeleteLedgerRequest">DeleteLedgerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteledgerrequest"></a>
<a id="schema_DeleteLedgerRequest"></a>
<a id="tocSdeleteledgerrequest"></a>
<a id="tocsdeleteledgerrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeJournalKinesisStreamRequest">DescribeJournalKinesisStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribejournalkinesisstreamrequest"></a>
<a id="schema_DescribeJournalKinesisStreamRequest"></a>
<a id="tocSdescribejournalkinesisstreamrequest"></a>
<a id="tocsdescribejournalkinesisstreamrequest"></a>

```json
{}
```

<h2 id="tocS_JournalKinesisStreamDescription">JournalKinesisStreamDescription</h2>
<!-- backwards compatibility -->
<a id="schemajournalkinesisstreamdescription"></a>
<a id="schema_JournalKinesisStreamDescription"></a>
<a id="tocSjournalkinesisstreamdescription"></a>
<a id="tocsjournalkinesisstreamdescription"></a>

```json
{
  "LedgerName": {},
  "CreationTime": {},
  "InclusiveStartTime": {},
  "ExclusiveEndTime": {},
  "RoleArn": {},
  "StreamId": {},
  "Arn": {},
  "Status": {},
  "KinesisConfiguration": {
    "StreamArn": {},
    "AggregationEnabled": {}
  },
  "ErrorCause": {},
  "StreamName": {}
}
```

Information about an Amazon QLDB journal stream, including the Amazon Resource Name (ARN), stream name, creation time, current status, and the parameters of the original stream creation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LedgerName|object|true|none|none|
|CreationTime|object|false|none|none|
|InclusiveStartTime|object|false|none|none|
|ExclusiveEndTime|object|false|none|none|
|RoleArn|object|true|none|none|
|StreamId|object|true|none|none|
|Arn|object|false|none|none|
|Status|object|true|none|none|
|KinesisConfiguration|object|true|none|none|
|ErrorCause|object|false|none|none|
|StreamName|object|true|none|none|

<h2 id="tocS_DescribeJournalS3ExportRequest">DescribeJournalS3ExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribejournals3exportrequest"></a>
<a id="schema_DescribeJournalS3ExportRequest"></a>
<a id="tocSdescribejournals3exportrequest"></a>
<a id="tocsdescribejournals3exportrequest"></a>

```json
{}
```

<h2 id="tocS_JournalS3ExportDescription">JournalS3ExportDescription</h2>
<!-- backwards compatibility -->
<a id="schemajournals3exportdescription"></a>
<a id="schema_JournalS3ExportDescription"></a>
<a id="tocSjournals3exportdescription"></a>
<a id="tocsjournals3exportdescription"></a>

```json
{
  "LedgerName": {},
  "ExportId": {},
  "ExportCreationTime": {},
  "Status": {},
  "InclusiveStartTime": {},
  "ExclusiveEndTime": {},
  "S3ExportConfiguration": {
    "Bucket": {},
    "Prefix": {},
    "EncryptionConfiguration": {
      "ObjectEncryptionType": {},
      "KmsKeyArn": {}
    }
  },
  "RoleArn": {},
  "OutputFormat": {}
}
```

Information about a journal export job, including the ledger name, export ID, creation time, current status, and the parameters of the original export creation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LedgerName|object|true|none|none|
|ExportId|object|true|none|none|
|ExportCreationTime|object|true|none|none|
|Status|object|true|none|none|
|InclusiveStartTime|object|true|none|none|
|ExclusiveEndTime|object|true|none|none|
|S3ExportConfiguration|[S3ExportConfiguration](#schemas3exportconfiguration)|true|none|The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents.|
|RoleArn|object|true|none|none|
|OutputFormat|object|false|none|none|

<h2 id="tocS_DescribeLedgerRequest">DescribeLedgerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeledgerrequest"></a>
<a id="schema_DescribeLedgerRequest"></a>
<a id="tocSdescribeledgerrequest"></a>
<a id="tocsdescribeledgerrequest"></a>

```json
{}
```

<h2 id="tocS_LedgerEncryptionDescription">LedgerEncryptionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaledgerencryptiondescription"></a>
<a id="schema_LedgerEncryptionDescription"></a>
<a id="tocSledgerencryptiondescription"></a>
<a id="tocsledgerencryptiondescription"></a>

```json
{
  "KmsKeyArn": {},
  "EncryptionStatus": {},
  "InaccessibleKmsKeyDateTime": {}
}
```

<p>Information about the encryption of data at rest in an Amazon QLDB ledger. This includes the current status, the key in Key Management Service (KMS), and when the key became inaccessible (in the case of an error).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KmsKeyArn|object|true|none|none|
|EncryptionStatus|object|true|none|none|
|InaccessibleKmsKeyDateTime|object|false|none|none|

<h2 id="tocS_Digest">Digest</h2>
<!-- backwards compatibility -->
<a id="schemadigest"></a>
<a id="schema_Digest"></a>
<a id="tocSdigest"></a>
<a id="tocsdigest"></a>

```json
"stringstringstringstringstringst"
```

<h2 id="tocS_EncryptionStatus">EncryptionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionstatus"></a>
<a id="schema_EncryptionStatus"></a>
<a id="tocSencryptionstatus"></a>
<a id="tocsencryptionstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_ErrorCause">ErrorCause</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcause"></a>
<a id="schema_ErrorCause"></a>
<a id="tocSerrorcause"></a>
<a id="tocserrorcause"></a>

```json
"KINESIS_STREAM_NOT_FOUND"
```

<h2 id="tocS_S3ExportConfiguration">S3ExportConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3exportconfiguration"></a>
<a id="schema_S3ExportConfiguration"></a>
<a id="tocSs3exportconfiguration"></a>
<a id="tocss3exportconfiguration"></a>

```json
{
  "Bucket": {},
  "Prefix": {},
  "EncryptionConfiguration": {
    "ObjectEncryptionType": {},
    "KmsKeyArn": {}
  }
}
```

The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|Prefix|object|true|none|none|
|EncryptionConfiguration|object|true|none|none|

<h2 id="tocS_OutputFormat">OutputFormat</h2>
<!-- backwards compatibility -->
<a id="schemaoutputformat"></a>
<a id="schema_OutputFormat"></a>
<a id="tocSoutputformat"></a>
<a id="tocsoutputformat"></a>

```json
"ION_BINARY"
```

<h2 id="tocS_ExportJournalToS3Request">ExportJournalToS3Request</h2>
<!-- backwards compatibility -->
<a id="schemaexportjournaltos3request"></a>
<a id="schema_ExportJournalToS3Request"></a>
<a id="tocSexportjournaltos3request"></a>
<a id="tocsexportjournaltos3request"></a>

```json
{
  "InclusiveStartTime": {},
  "ExclusiveEndTime": {},
  "S3ExportConfiguration": {
    "Bucket": {},
    "Prefix": {},
    "EncryptionConfiguration": {
      "ObjectEncryptionType": {},
      "KmsKeyArn": {}
    }
  },
  "RoleArn": {},
  "OutputFormat": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InclusiveStartTime|object|true|none|none|
|ExclusiveEndTime|object|true|none|none|
|S3ExportConfiguration|object|true|none|none|
|RoleArn|object|true|none|none|
|OutputFormat|object|false|none|none|

<h2 id="tocS_ExportStatus">ExportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexportstatus"></a>
<a id="schema_ExportStatus"></a>
<a id="tocSexportstatus"></a>
<a id="tocsexportstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_ValueHolder">ValueHolder</h2>
<!-- backwards compatibility -->
<a id="schemavalueholder"></a>
<a id="schema_ValueHolder"></a>
<a id="tocSvalueholder"></a>
<a id="tocsvalueholder"></a>

```json
{
  "IonText": {}
}
```

A structure that can contain a value in multiple encoding formats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IonText|object|false|none|none|

<h2 id="tocS_GetBlockRequest">GetBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetblockrequest"></a>
<a id="schema_GetBlockRequest"></a>
<a id="tocSgetblockrequest"></a>
<a id="tocsgetblockrequest"></a>

```json
{
  "BlockAddress": {
    "IonText": {}
  },
  "DigestTipAddress": {
    "IonText": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockAddress|object|true|none|none|
|DigestTipAddress|object|false|none|none|

<h2 id="tocS_GetDigestRequest">GetDigestRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdigestrequest"></a>
<a id="schema_GetDigestRequest"></a>
<a id="tocSgetdigestrequest"></a>
<a id="tocsgetdigestrequest"></a>

```json
{}
```

<h2 id="tocS_GetRevisionRequest">GetRevisionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrevisionrequest"></a>
<a id="schema_GetRevisionRequest"></a>
<a id="tocSgetrevisionrequest"></a>
<a id="tocsgetrevisionrequest"></a>

```json
{
  "BlockAddress": {
    "IonText": {}
  },
  "DocumentId": {},
  "DigestTipAddress": {
    "IonText": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockAddress|object|true|none|none|
|DocumentId|object|true|none|none|
|DigestTipAddress|object|false|none|none|

<h2 id="tocS_StreamStatus">StreamStatus</h2>
<!-- backwards compatibility -->
<a id="schemastreamstatus"></a>
<a id="schema_StreamStatus"></a>
<a id="tocSstreamstatus"></a>
<a id="tocsstreamstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_KinesisConfiguration">KinesisConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemakinesisconfiguration"></a>
<a id="schema_KinesisConfiguration"></a>
<a id="tocSkinesisconfiguration"></a>
<a id="tocskinesisconfiguration"></a>

```json
{
  "StreamArn": {},
  "AggregationEnabled": {}
}
```

The configuration settings of the Amazon Kinesis Data Streams destination for an Amazon QLDB journal stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamArn|object|true|none|none|
|AggregationEnabled|object|false|none|none|

<h2 id="tocS_StreamName">StreamName</h2>
<!-- backwards compatibility -->
<a id="schemastreamname"></a>
<a id="schema_StreamName"></a>
<a id="tocSstreamname"></a>
<a id="tocsstreamname"></a>

```json
"string"
```

<h2 id="tocS_JournalKinesisStreamDescriptionList">JournalKinesisStreamDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemajournalkinesisstreamdescriptionlist"></a>
<a id="schema_JournalKinesisStreamDescriptionList"></a>
<a id="tocSjournalkinesisstreamdescriptionlist"></a>
<a id="tocsjournalkinesisstreamdescriptionlist"></a>

```json
[
  {
    "LedgerName": {},
    "CreationTime": {},
    "InclusiveStartTime": {},
    "ExclusiveEndTime": {},
    "RoleArn": {},
    "StreamId": {},
    "Arn": {},
    "Status": {},
    "KinesisConfiguration": {
      "StreamArn": {},
      "AggregationEnabled": {}
    },
    "ErrorCause": {},
    "StreamName": {}
  }
]
```

<h2 id="tocS_JournalS3ExportList">JournalS3ExportList</h2>
<!-- backwards compatibility -->
<a id="schemajournals3exportlist"></a>
<a id="schema_JournalS3ExportList"></a>
<a id="tocSjournals3exportlist"></a>
<a id="tocsjournals3exportlist"></a>

```json
[
  {
    "LedgerName": {},
    "ExportId": {},
    "ExportCreationTime": {},
    "Status": {},
    "InclusiveStartTime": {},
    "ExclusiveEndTime": {},
    "S3ExportConfiguration": {
      "Bucket": {},
      "Prefix": {},
      "EncryptionConfiguration": {
        "ObjectEncryptionType": {},
        "KmsKeyArn": {}
      }
    },
    "RoleArn": {},
    "OutputFormat": {}
  }
]
```

<h2 id="tocS_LedgerSummary">LedgerSummary</h2>
<!-- backwards compatibility -->
<a id="schemaledgersummary"></a>
<a id="schema_LedgerSummary"></a>
<a id="tocSledgersummary"></a>
<a id="tocsledgersummary"></a>

```json
{
  "Name": {},
  "State": {},
  "CreationDateTime": {}
}
```

Information about a ledger, including its name, state, and when it was created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|State|object|false|none|none|
|CreationDateTime|object|false|none|none|

<h2 id="tocS_LedgerList">LedgerList</h2>
<!-- backwards compatibility -->
<a id="schemaledgerlist"></a>
<a id="schema_LedgerList"></a>
<a id="tocSledgerlist"></a>
<a id="tocsledgerlist"></a>

```json
[
  {
    "Name": {},
    "State": {},
    "CreationDateTime": {}
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

<h2 id="tocS_ListJournalKinesisStreamsForLedgerRequest">ListJournalKinesisStreamsForLedgerRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjournalkinesisstreamsforledgerrequest"></a>
<a id="schema_ListJournalKinesisStreamsForLedgerRequest"></a>
<a id="tocSlistjournalkinesisstreamsforledgerrequest"></a>
<a id="tocslistjournalkinesisstreamsforledgerrequest"></a>

```json
{}
```

<h2 id="tocS_ListJournalS3ExportsForLedgerRequest">ListJournalS3ExportsForLedgerRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjournals3exportsforledgerrequest"></a>
<a id="schema_ListJournalS3ExportsForLedgerRequest"></a>
<a id="tocSlistjournals3exportsforledgerrequest"></a>
<a id="tocslistjournals3exportsforledgerrequest"></a>

```json
{}
```

<h2 id="tocS_ListJournalS3ExportsRequest">ListJournalS3ExportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjournals3exportsrequest"></a>
<a id="schema_ListJournalS3ExportsRequest"></a>
<a id="tocSlistjournals3exportsrequest"></a>
<a id="tocslistjournals3exportsrequest"></a>

```json
{}
```

<h2 id="tocS_ListLedgersRequest">ListLedgersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistledgersrequest"></a>
<a id="schema_ListLedgersRequest"></a>
<a id="tocSlistledgersrequest"></a>
<a id="tocslistledgersrequest"></a>

```json
{}
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

<h2 id="tocS_S3ObjectEncryptionType">S3ObjectEncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemas3objectencryptiontype"></a>
<a id="schema_S3ObjectEncryptionType"></a>
<a id="tocSs3objectencryptiontype"></a>
<a id="tocss3objectencryptiontype"></a>

```json
"SSE_KMS"
```

<h2 id="tocS_StreamJournalToKinesisRequest">StreamJournalToKinesisRequest</h2>
<!-- backwards compatibility -->
<a id="schemastreamjournaltokinesisrequest"></a>
<a id="schema_StreamJournalToKinesisRequest"></a>
<a id="tocSstreamjournaltokinesisrequest"></a>
<a id="tocsstreamjournaltokinesisrequest"></a>

```json
{
  "RoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "InclusiveStartTime": {},
  "ExclusiveEndTime": {},
  "KinesisConfiguration": {
    "StreamArn": {},
    "AggregationEnabled": {}
  },
  "StreamName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|true|none|none|
|Tags|object|false|none|none|
|InclusiveStartTime|object|true|none|none|
|ExclusiveEndTime|object|false|none|none|
|KinesisConfiguration|object|true|none|none|
|StreamName|object|true|none|none|

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

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateLedgerPermissionsModeRequest">UpdateLedgerPermissionsModeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateledgerpermissionsmoderequest"></a>
<a id="schema_UpdateLedgerPermissionsModeRequest"></a>
<a id="tocSupdateledgerpermissionsmoderequest"></a>
<a id="tocsupdateledgerpermissionsmoderequest"></a>

```json
{
  "PermissionsMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PermissionsMode|object|true|none|none|

<h2 id="tocS_UpdateLedgerRequest">UpdateLedgerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateledgerrequest"></a>
<a id="schema_UpdateLedgerRequest"></a>
<a id="tocSupdateledgerrequest"></a>
<a id="tocsupdateledgerrequest"></a>

```json
{
  "DeletionProtection": {},
  "KmsKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeletionProtection|object|false|none|none|
|KmsKey|object|false|none|none|
