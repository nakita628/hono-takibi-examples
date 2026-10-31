<h1 id="amazon-elastic-block-store">Amazon Elastic Block Store v2019-11-02</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>You can use the Amazon Elastic Block Store (Amazon EBS) direct APIs to create Amazon EBS snapshots, write data directly to your snapshots, read data on your snapshots, and identify the differences or changes between two snapshots. If you’re an independent software vendor (ISV) who offers backup services for Amazon EBS, the EBS direct APIs make it more efficient and cost-effective to track incremental changes on your Amazon EBS volumes through snapshots. This can be done without having to create new volumes from snapshots, and then use Amazon Elastic Compute Cloud (Amazon EC2) instances to compare the differences.</p> <p>You can create incremental snapshots directly from data on-premises into volumes and the cloud to use for quick disaster recovery. With the ability to write and read snapshots, you can write your on-premises data to an snapshot during a disaster. Then after recovery, you can restore it back to Amazon Web Services or on-premises from the snapshot. You no longer need to build and maintain complex mechanisms to copy data to and from Amazon EBS.</p> <p>This API reference provides detailed information about the actions, data types, parameters, and errors of the EBS direct APIs. For more information about the elements that make up the EBS direct APIs, and examples of how to use them effectively, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html">Accessing the Contents of an Amazon EBS Snapshot</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about the supported Amazon Web Services Regions, endpoints, and service quotas for the EBS direct APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/ebs-service.html">Amazon Elastic Block Store Endpoints and Quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>

Base URLs:

* <a href="http://ebs.us-east-1.amazonaws.com">http://ebs.us-east-1.amazonaws.com</a> - The Amazon EBS multi-region endpoint

* <a href="https://ebs.us-east-1.amazonaws.com">https://ebs.us-east-1.amazonaws.com</a> - The Amazon EBS multi-region endpoint

* <a href="http://ebs.cn-north-1.amazonaws.com.cn">http://ebs.cn-north-1.amazonaws.com.cn</a> - The Amazon EBS endpoint for China (Beijing) and China (Ningxia)

* <a href="https://ebs.cn-north-1.amazonaws.com.cn">https://ebs.cn-north-1.amazonaws.com.cn</a> - The Amazon EBS endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/ebs/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-elastic-block-store-default">Default</h1>

## CompleteSnapshot

<a id="opIdCompleteSnapshot"></a>

> Code samples

```bash
curl 'https://ebs.us-east-1.amazonaws.com/snapshots/completion/string#x-amz-ChangedBlocksCount' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-ChangedBlocksCount: 0'
```

`POST /snapshots/completion/{snapshotId}#x-amz-ChangedBlocksCount`

Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing the snapshot changes the status to <code>completed</code>. You cannot write new blocks to a snapshot after it has been completed.

<h3 id="completesnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|snapshotId|path|string|true|The ID of the snapshot.|
|x-amz-ChangedBlocksCount|header|integer|true|The number of blocks that were written to the snapshot.|
|x-amz-Checksum|header|string|false|<p>An aggregated Base-64 SHA256 checksum based on the checksums of each written block.</p> <p>To generate the aggregated checksum using the linear aggregation method, arrange the checksums for each written block in ascending order of their block index, concatenate them to form a single string, and then generate the checksum on the entire string using the SHA256 algorithm.</p>|
|x-amz-Checksum-Algorithm|header|string|false|The algorithm used to generate the checksum. Currently, the only supported algorithm is <code>SHA256</code>.|
|x-amz-Checksum-Aggregation-Method|header|string|false|The aggregation method used to generate the checksum. Currently, the only supported aggregation method is <code>LINEAR</code>.|
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
|x-amz-Checksum-Algorithm|SHA256|
|x-amz-Checksum-Aggregation-Method|LINEAR|

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

<h3 id="completesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[CompleteSnapshotResponse](#schemacompletesnapshotresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|RequestThrottledException|[RequestThrottledException](#schemarequestthrottledexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSnapshotBlock

<a id="opIdGetSnapshotBlock"></a>

> Code samples

```bash
curl 'https://ebs.us-east-1.amazonaws.com/snapshots/string/blocks/0#blockToken?blockToken=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /snapshots/{snapshotId}/blocks/{blockIndex}#blockToken`

Returns the data in a block in an Amazon Elastic Block Store snapshot.

<h3 id="getsnapshotblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|snapshotId|path|string|true|<p>The ID of the snapshot containing the block from which to get data.</p> <important> <p>If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>|
|blockIndex|path|integer|true|The block index of the block in which to read the data. A block index is a logical index in units of <code>512</code> KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/<code>524288</code>). The logical offset of the data must be <code>512</code> KiB aligned.|
|blockToken|query|string|true|The block token of the block from which to get data. You can obtain the <code>BlockToken</code> by running the <code>ListChangedBlocks</code> or <code>ListSnapshotBlocks</code> operations.|
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
  "BlockData": {}
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

<h3 id="getsnapshotblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSnapshotBlockResponse](#schemagetsnapshotblockresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|RequestThrottledException|[RequestThrottledException](#schemarequestthrottledexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChangedBlocks

<a id="opIdListChangedBlocks"></a>

> Code samples

```bash
curl https://ebs.us-east-1.amazonaws.com/snapshots/string/changedblocks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /snapshots/{secondSnapshotId}/changedblocks`

Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.

<h3 id="listchangedblocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstSnapshotId|query|string|false|<p>The ID of the first snapshot to use for the comparison.</p> <important> <p>The <code>FirstSnapshotID</code> parameter must be specified with a <code>SecondSnapshotId</code> parameter; otherwise, an error occurs.</p> </important>|
|secondSnapshotId|path|string|true|<p>The ID of the second snapshot to use for the comparison.</p> <important> <p>The <code>SecondSnapshotId</code> parameter must be specified with a <code>FirstSnapshotID</code> parameter; otherwise, an error occurs.</p> </important>|
|pageToken|query|string|false|<p>The token to request the next page of results.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>|
|maxResults|query|integer|false|<p>The maximum number of blocks to be returned by the request.</p> <p>Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than <b>MaxResults</b> or an empty array of blocks.</p> <p>To retrieve the next set of blocks from the snapshot, make another request with the returned <b>NextToken</b> value. The value of <b>NextToken</b> is <code>null</code> when there are no more blocks to return.</p>|
|startingBlockIndex|query|integer|false|<p>The block index from which the comparison should start.</p> <p>The list in the response will start from this block index or the next valid block index in the snapshots.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>|
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
  "ChangedBlocks": {},
  "ExpiryTime": {},
  "VolumeSize": {},
  "BlockSize": {},
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

<h3 id="listchangedblocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChangedBlocksResponse](#schemalistchangedblocksresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|RequestThrottledException|[RequestThrottledException](#schemarequestthrottledexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSnapshotBlocks

<a id="opIdListSnapshotBlocks"></a>

> Code samples

```bash
curl https://ebs.us-east-1.amazonaws.com/snapshots/string/blocks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /snapshots/{snapshotId}/blocks`

Returns information about the blocks in an Amazon Elastic Block Store snapshot.

<h3 id="listsnapshotblocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|snapshotId|path|string|true|The ID of the snapshot from which to get block indexes and block tokens.|
|pageToken|query|string|false|<p>The token to request the next page of results.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>|
|maxResults|query|integer|false|<p>The maximum number of blocks to be returned by the request.</p> <p>Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than <b>MaxResults</b> or an empty array of blocks.</p> <p>To retrieve the next set of blocks from the snapshot, make another request with the returned <b>NextToken</b> value. The value of <b>NextToken</b> is <code>null</code> when there are no more blocks to return.</p>|
|startingBlockIndex|query|integer|false|<p>The block index from which the list should start. The list in the response will start from this block index or the next valid block index in the snapshot.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>|
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
  "Blocks": {},
  "ExpiryTime": {},
  "VolumeSize": {},
  "BlockSize": {},
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

<h3 id="listsnapshotblocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSnapshotBlocksResponse](#schemalistsnapshotblocksresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|RequestThrottledException|[RequestThrottledException](#schemarequestthrottledexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutSnapshotBlock

<a id="opIdPutSnapshotBlock"></a>

> Code samples

```bash
curl 'https://ebs.us-east-1.amazonaws.com/snapshots/string/blocks/0#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-Data-Length: 0' \
  -H 'x-amz-Checksum: string' \
  -H 'x-amz-Checksum-Algorithm: SHA256' \
  -d '{
    "BlockData": "password"
  }'
```

`PUT /snapshots/{snapshotId}/blocks/{blockIndex}#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm`

<p>Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten. The target snapshot must be in the <code>pending</code> state.</p> <p>Data written to a snapshot must be aligned with 512-KiB sectors.</p>

> Body parameter

```json
{
  "BlockData": "password"
}
```

<h3 id="putsnapshotblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|snapshotId|path|string|true|<p>The ID of the snapshot.</p> <important> <p>If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>..</p> </important>|
|blockIndex|path|integer|true|The block index of the block in which to write the data. A block index is a logical index in units of <code>512</code> KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/<code>524288</code>). The logical offset of the data must be <code>512</code> KiB aligned.|
|x-amz-Data-Length|header|integer|true|<p>The size of the data to write to the block, in bytes. Currently, the only supported size is <code>524288</code> bytes.</p> <p>Valid values: <code>524288</code> </p>|
|x-amz-Progress|header|integer|false|The progress of the write process, as a percentage.|
|x-amz-Checksum|header|string|true|A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are supported.|
|x-amz-Checksum-Algorithm|header|string|true|The algorithm used to generate the checksum. Currently, the only supported algorithm is <code>SHA256</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» BlockData|body|string(password)|true|<p>The data to write to the block.</p> <p>The block data is not signed as part of the Signature Version 4 signing process. As a result, you must generate and provide a Base64-encoded SHA256 checksum for the block data using the <b>x-amz-Checksum</b> header. Also, you must specify the checksum algorithm using the <b>x-amz-Checksum-Algorithm</b> header. The checksum that you provide is part of the Signature Version 4 signing process. It is validated against a checksum generated by Amazon EBS to ensure the validity and authenticity of the data. If the checksums do not correspond, the request fails. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapis-using-checksums"> Using checksums with the EBS direct APIs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-Checksum-Algorithm|SHA256|

> Example responses

> 201 Response

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

<h3 id="putsnapshotblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[PutSnapshotBlockResponse](#schemaputsnapshotblockresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|RequestThrottledException|[RequestThrottledException](#schemarequestthrottledexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSnapshot

<a id="opIdStartSnapshot"></a>

> Code samples

```bash
curl https://ebs.us-east-1.amazonaws.com/snapshots \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "VolumeSize": 1,
    "ParentSnapshotId": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "Description": "string",
    "ClientToken": "string",
    "Encrypted": true,
    "KmsKeyArn": "password",
    "Timeout": 10
  }'
```

`POST /snapshots`

<p>Creates a new Amazon EBS snapshot. The new snapshot enters the <code>pending</code> state after the request completes. </p> <p>After creating the snapshot, use <a href="https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html"> PutSnapshotBlock</a> to write blocks of data to the snapshot.</p>

> Body parameter

```json
{
  "VolumeSize": 1,
  "ParentSnapshotId": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "Description": "string",
  "ClientToken": "string",
  "Encrypted": true,
  "KmsKeyArn": "password",
  "Timeout": 10
}
```

<h3 id="startsnapshot-parameters">Parameters</h3>

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
|» VolumeSize|body|integer|true|The size of the volume, in GiB. The maximum size is <code>65536</code> GiB (64 TiB).|
|» ParentSnapshotId|body|string|false|<p>The ID of the parent snapshot. If there is no parent snapshot, or if you are creating the first snapshot for an on-premises volume, omit this parameter.</p> <p>You can't specify <b>ParentSnapshotId</b> and <b>Encrypted</b> in the same request. If you specify both parameters, the request fails with <code>ValidationException</code>.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>If you specify an encrypted parent snapshot, you must have permission to use the KMS key that was used to encrypt the parent snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>|
|» Tags|body|[[Tag](#schematag)]|false|The tags to apply to the snapshot.|
|» Description|body|string|false|A description for the snapshot.|
|» ClientToken|body|string|false|<p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-direct-api-idempotency.html"> Idempotency for StartSnapshot API</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>|
|» Encrypted|body|boolean|false|<p>Indicates whether to encrypt the snapshot.</p> <p>You can't specify <b>Encrypted</b> and <b> ParentSnapshotId</b> in the same request. If you specify both parameters, the request fails with <code>ValidationException</code>.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>|
|» KmsKeyArn|body|string(password)|false|<p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key to be used to encrypt the snapshot.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>|
|» Timeout|body|integer|false|<p>The amount of time (in minutes) after which the snapshot is automatically cancelled if:</p> <ul> <li> <p>No blocks are written to the snapshot.</p> </li> <li> <p>The snapshot is not completed after writing the last block of data.</p> </li> </ul> <p>If no value is specified, the timeout defaults to <code>60</code> minutes.</p>|

> Example responses

> 201 Response

```json
{
  "Description": {},
  "SnapshotId": {},
  "OwnerId": {},
  "Status": {},
  "StartTime": {},
  "VolumeSize": {},
  "BlockSize": {},
  "Tags": {},
  "ParentSnapshotId": {},
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

<h3 id="startsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[StartSnapshotResponse](#schemastartsnapshotresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|RequestThrottledException|[RequestThrottledException](#schemarequestthrottledexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|486|486|ConcurrentLimitExceededException|[ConcurrentLimitExceededException](#schemaconcurrentlimitexceededexception)|
|487|487|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CompleteSnapshotResponse">CompleteSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompletesnapshotresponse"></a>
<a id="schema_CompleteSnapshotResponse"></a>
<a id="tocScompletesnapshotresponse"></a>
<a id="tocscompletesnapshotresponse"></a>

```json
{
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

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

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_RequestThrottledException">RequestThrottledException</h2>
<!-- backwards compatibility -->
<a id="schemarequestthrottledexception"></a>
<a id="schema_RequestThrottledException"></a>
<a id="tocSrequestthrottledexception"></a>
<a id="tocsrequestthrottledexception"></a>

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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_GetSnapshotBlockResponse">GetSnapshotBlockResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsnapshotblockresponse"></a>
<a id="schema_GetSnapshotBlockResponse"></a>
<a id="tocSgetsnapshotblockresponse"></a>
<a id="tocsgetsnapshotblockresponse"></a>

```json
{
  "BlockData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockData|object|false|none|none|

<h2 id="tocS_ListChangedBlocksResponse">ListChangedBlocksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchangedblocksresponse"></a>
<a id="schema_ListChangedBlocksResponse"></a>
<a id="tocSlistchangedblocksresponse"></a>
<a id="tocslistchangedblocksresponse"></a>

```json
{
  "ChangedBlocks": {},
  "ExpiryTime": {},
  "VolumeSize": {},
  "BlockSize": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangedBlocks|object|false|none|none|
|ExpiryTime|object|false|none|none|
|VolumeSize|object|false|none|none|
|BlockSize|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSnapshotBlocksResponse">ListSnapshotBlocksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsnapshotblocksresponse"></a>
<a id="schema_ListSnapshotBlocksResponse"></a>
<a id="tocSlistsnapshotblocksresponse"></a>
<a id="tocslistsnapshotblocksresponse"></a>

```json
{
  "Blocks": {},
  "ExpiryTime": {},
  "VolumeSize": {},
  "BlockSize": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Blocks|object|false|none|none|
|ExpiryTime|object|false|none|none|
|VolumeSize|object|false|none|none|
|BlockSize|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PutSnapshotBlockResponse">PutSnapshotBlockResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputsnapshotblockresponse"></a>
<a id="schema_PutSnapshotBlockResponse"></a>
<a id="tocSputsnapshotblockresponse"></a>
<a id="tocsputsnapshotblockresponse"></a>

```json
{}
```

<h2 id="tocS_StartSnapshotResponse">StartSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartsnapshotresponse"></a>
<a id="schema_StartSnapshotResponse"></a>
<a id="tocSstartsnapshotresponse"></a>
<a id="tocsstartsnapshotresponse"></a>

```json
{
  "Description": {},
  "SnapshotId": {},
  "OwnerId": {},
  "Status": {},
  "StartTime": {},
  "VolumeSize": {},
  "BlockSize": {},
  "Tags": {},
  "ParentSnapshotId": {},
  "KmsKeyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|SnapshotId|object|false|none|none|
|OwnerId|object|false|none|none|
|Status|object|false|none|none|
|StartTime|object|false|none|none|
|VolumeSize|object|false|none|none|
|BlockSize|object|false|none|none|
|Tags|object|false|none|none|
|ParentSnapshotId|object|false|none|none|
|KmsKeyArn|object|false|none|none|

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

Describes a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_ConcurrentLimitExceededException">ConcurrentLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentlimitexceededexception"></a>
<a id="schema_ConcurrentLimitExceededException"></a>
<a id="tocSconcurrentlimitexceededexception"></a>
<a id="tocsconcurrentlimitexceededexception"></a>

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

<h2 id="tocS_BlockIndex">BlockIndex</h2>
<!-- backwards compatibility -->
<a id="schemablockindex"></a>
<a id="schema_BlockIndex"></a>
<a id="tocSblockindex"></a>
<a id="tocsblockindex"></a>

```json
0
```

<h2 id="tocS_BlockToken">BlockToken</h2>
<!-- backwards compatibility -->
<a id="schemablocktoken"></a>
<a id="schema_BlockToken"></a>
<a id="tocSblocktoken"></a>
<a id="tocsblocktoken"></a>

```json
"string"
```

<h2 id="tocS_Block">Block</h2>
<!-- backwards compatibility -->
<a id="schemablock"></a>
<a id="schema_Block"></a>
<a id="tocSblock"></a>
<a id="tocsblock"></a>

```json
{
  "BlockIndex": {},
  "BlockToken": {}
}
```

A block of data in an Amazon Elastic Block Store snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockIndex|object|false|none|none|
|BlockToken|object|false|none|none|

<h2 id="tocS_BlockData">BlockData</h2>
<!-- backwards compatibility -->
<a id="schemablockdata"></a>
<a id="schema_BlockData"></a>
<a id="tocSblockdata"></a>
<a id="tocsblockdata"></a>

```json
"password"
```

<h2 id="tocS_BlockSize">BlockSize</h2>
<!-- backwards compatibility -->
<a id="schemablocksize"></a>
<a id="schema_BlockSize"></a>
<a id="tocSblocksize"></a>
<a id="tocsblocksize"></a>

```json
0
```

<h2 id="tocS_Blocks">Blocks</h2>
<!-- backwards compatibility -->
<a id="schemablocks"></a>
<a id="schema_Blocks"></a>
<a id="tocSblocks"></a>
<a id="tocsblocks"></a>

```json
[
  {
    "BlockIndex": {},
    "BlockToken": {}
  }
]
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

<h2 id="tocS_ChangedBlock">ChangedBlock</h2>
<!-- backwards compatibility -->
<a id="schemachangedblock"></a>
<a id="schema_ChangedBlock"></a>
<a id="tocSchangedblock"></a>
<a id="tocschangedblock"></a>

```json
{
  "BlockIndex": {},
  "FirstBlockToken": {},
  "SecondBlockToken": {}
}
```

A block of data in an Amazon Elastic Block Store snapshot that is different from another snapshot of the same volume/snapshot lineage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockIndex|object|false|none|none|
|FirstBlockToken|object|false|none|none|
|SecondBlockToken|object|false|none|none|

<h2 id="tocS_ChangedBlocks">ChangedBlocks</h2>
<!-- backwards compatibility -->
<a id="schemachangedblocks"></a>
<a id="schema_ChangedBlocks"></a>
<a id="tocSchangedblocks"></a>
<a id="tocschangedblocks"></a>

```json
[
  {
    "BlockIndex": {},
    "FirstBlockToken": {},
    "SecondBlockToken": {}
  }
]
```

<h2 id="tocS_ChangedBlocksCount">ChangedBlocksCount</h2>
<!-- backwards compatibility -->
<a id="schemachangedblockscount"></a>
<a id="schema_ChangedBlocksCount"></a>
<a id="tocSchangedblockscount"></a>
<a id="tocschangedblockscount"></a>

```json
0
```

<h2 id="tocS_Checksum">Checksum</h2>
<!-- backwards compatibility -->
<a id="schemachecksum"></a>
<a id="schema_Checksum"></a>
<a id="tocSchecksum"></a>
<a id="tocschecksum"></a>

```json
"string"
```

<h2 id="tocS_ChecksumAggregationMethod">ChecksumAggregationMethod</h2>
<!-- backwards compatibility -->
<a id="schemachecksumaggregationmethod"></a>
<a id="schema_ChecksumAggregationMethod"></a>
<a id="tocSchecksumaggregationmethod"></a>
<a id="tocschecksumaggregationmethod"></a>

```json
"LINEAR"
```

<h2 id="tocS_ChecksumAlgorithm">ChecksumAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemachecksumalgorithm"></a>
<a id="schema_ChecksumAlgorithm"></a>
<a id="tocSchecksumalgorithm"></a>
<a id="tocschecksumalgorithm"></a>

```json
"SHA256"
```

<h2 id="tocS_SnapshotId">SnapshotId</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotid"></a>
<a id="schema_SnapshotId"></a>
<a id="tocSsnapshotid"></a>
<a id="tocssnapshotid"></a>

```json
"string"
```

<h2 id="tocS_CompleteSnapshotRequest">CompleteSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompletesnapshotrequest"></a>
<a id="schema_CompleteSnapshotRequest"></a>
<a id="tocScompletesnapshotrequest"></a>
<a id="tocscompletesnapshotrequest"></a>

```json
{}
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"completed"
```

<h2 id="tocS_DataLength">DataLength</h2>
<!-- backwards compatibility -->
<a id="schemadatalength"></a>
<a id="schema_DataLength"></a>
<a id="tocSdatalength"></a>
<a id="tocsdatalength"></a>

```json
0
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

<h2 id="tocS_GetSnapshotBlockRequest">GetSnapshotBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsnapshotblockrequest"></a>
<a id="schema_GetSnapshotBlockRequest"></a>
<a id="tocSgetsnapshotblockrequest"></a>
<a id="tocsgetsnapshotblockrequest"></a>

```json
{}
```

<h2 id="tocS_IdempotencyToken">IdempotencyToken</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencytoken"></a>
<a id="schema_IdempotencyToken"></a>
<a id="tocSidempotencytoken"></a>
<a id="tocsidempotencytoken"></a>

```json
"string"
```

<h2 id="tocS_KmsKeyArn">KmsKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarn"></a>
<a id="schema_KmsKeyArn"></a>
<a id="tocSkmskeyarn"></a>
<a id="tocskmskeyarn"></a>

```json
"password"
```

<h2 id="tocS_PageToken">PageToken</h2>
<!-- backwards compatibility -->
<a id="schemapagetoken"></a>
<a id="schema_PageToken"></a>
<a id="tocSpagetoken"></a>
<a id="tocspagetoken"></a>

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
100
```

<h2 id="tocS_ListChangedBlocksRequest">ListChangedBlocksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchangedblocksrequest"></a>
<a id="schema_ListChangedBlocksRequest"></a>
<a id="tocSlistchangedblocksrequest"></a>
<a id="tocslistchangedblocksrequest"></a>

```json
{}
```

<h2 id="tocS_TimeStamp">TimeStamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_TimeStamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_VolumeSize">VolumeSize</h2>
<!-- backwards compatibility -->
<a id="schemavolumesize"></a>
<a id="schema_VolumeSize"></a>
<a id="tocSvolumesize"></a>
<a id="tocsvolumesize"></a>

```json
1
```

<h2 id="tocS_ListSnapshotBlocksRequest">ListSnapshotBlocksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsnapshotblocksrequest"></a>
<a id="schema_ListSnapshotBlocksRequest"></a>
<a id="tocSlistsnapshotblocksrequest"></a>
<a id="tocslistsnapshotblocksrequest"></a>

```json
{}
```

<h2 id="tocS_OwnerId">OwnerId</h2>
<!-- backwards compatibility -->
<a id="schemaownerid"></a>
<a id="schema_OwnerId"></a>
<a id="tocSownerid"></a>
<a id="tocsownerid"></a>

```json
"string"
```

<h2 id="tocS_Progress">Progress</h2>
<!-- backwards compatibility -->
<a id="schemaprogress"></a>
<a id="schema_Progress"></a>
<a id="tocSprogress"></a>
<a id="tocsprogress"></a>

```json
0
```

<h2 id="tocS_PutSnapshotBlockRequest">PutSnapshotBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputsnapshotblockrequest"></a>
<a id="schema_PutSnapshotBlockRequest"></a>
<a id="tocSputsnapshotblockrequest"></a>
<a id="tocsputsnapshotblockrequest"></a>

```json
{
  "BlockData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockData|object|true|none|none|

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Timeout">Timeout</h2>
<!-- backwards compatibility -->
<a id="schematimeout"></a>
<a id="schema_Timeout"></a>
<a id="tocStimeout"></a>
<a id="tocstimeout"></a>

```json
10
```

<h2 id="tocS_StartSnapshotRequest">StartSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartsnapshotrequest"></a>
<a id="schema_StartSnapshotRequest"></a>
<a id="tocSstartsnapshotrequest"></a>
<a id="tocsstartsnapshotrequest"></a>

```json
{
  "VolumeSize": {},
  "ParentSnapshotId": {},
  "Tags": {},
  "Description": {},
  "ClientToken": {},
  "Encrypted": {},
  "KmsKeyArn": {},
  "Timeout": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeSize|object|true|none|none|
|ParentSnapshotId|object|false|none|none|
|Tags|object|false|none|none|
|Description|object|false|none|none|
|ClientToken|object|false|none|none|
|Encrypted|object|false|none|none|
|KmsKeyArn|object|false|none|none|
|Timeout|object|false|none|none|

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
