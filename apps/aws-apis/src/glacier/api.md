<h1 id="amazon-glacier">Amazon Glacier v2012-06-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p> Amazon S3 Glacier (Glacier) is a storage solution for "cold data."</p> <p>Glacier is an extremely low-cost storage service that provides secure, durable, and easy-to-use storage for data backup and archival. With Glacier, customers can store their data cost effectively for months, years, or decades. Glacier also enables customers to offload the administrative burdens of operating and scaling storage to AWS, so they don't have to worry about capacity planning, hardware provisioning, data replication, hardware failure and recovery, or time-consuming hardware migrations.</p> <p>Glacier is a great storage choice when low storage cost is paramount and your data is rarely retrieved. If your application requires fast or frequent access to your data, consider using Amazon S3. For more information, see <a href="http://aws.amazon.com/s3/">Amazon Simple Storage Service (Amazon S3)</a>.</p> <p>You can store any kind of data in any format. There is no maximum limit on the total amount of data you can store in Glacier.</p> <p>If you are a first-time user of Glacier, we recommend that you begin by reading the following sections in the <i>Amazon S3 Glacier Developer Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html">What is Amazon S3 Glacier</a> - This section of the Developer Guide describes the underlying data model, the operations it supports, and the AWS SDKs that you can use to interact with the service.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-getting-started.html">Getting Started with Amazon S3 Glacier</a> - The Getting Started section walks you through the process of creating a vault, uploading archives, creating jobs to download archives, retrieving the job output, and deleting archives.</p> </li> </ul>

Base URLs:

* <a href="http://glacier.us-east-1.amazonaws.com">http://glacier.us-east-1.amazonaws.com</a> - The Amazon Glacier multi-region endpoint

* <a href="https://glacier.us-east-1.amazonaws.com">https://glacier.us-east-1.amazonaws.com</a> - The Amazon Glacier multi-region endpoint

* <a href="http://glacier.cn-north-1.amazonaws.com.cn">http://glacier.cn-north-1.amazonaws.com.cn</a> - The Amazon Glacier endpoint for China (Beijing) and China (Ningxia)

* <a href="https://glacier.cn-north-1.amazonaws.com.cn">https://glacier.cn-north-1.amazonaws.com.cn</a> - The Amazon Glacier endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/glacier/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-glacier-default">Default</h1>

## ListParts

<a id="opIdListParts"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/multipart-uploads/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}`

<p>This operation lists the parts of an archive that have been uploaded in a specific multipart upload. You can make this request at any time during an in-progress multipart upload before you complete the upload (see <a>CompleteMultipartUpload</a>. List Parts returns an error for completed uploads. The list returned in the List Parts response is sorted by part range. </p> <p>The List Parts operation supports pagination. By default, this operation returns up to 50 uploaded parts in the response. You should always check the response for a <code>marker</code> at which to continue the list; if there are no more items the <code>marker</code> is <code>null</code>. To return a list of parts that begins at a specific part, set the <code>marker</code> request parameter to the value you obtained from a previous List Parts request. You can also limit the number of parts returned in the response by specifying the <code>limit</code> parameter in the request. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html">List Parts</a> in the <i>Amazon Glacier Developer Guide</i>.</p>

<h3 id="listparts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. |
|vaultName|path|string|true|The name of the vault.|
|uploadId|path|string|true|The upload ID of the multipart upload.|
|marker|query|string|false|An opaque string used for pagination. This value specifies the part at which the listing of parts should begin. Get the marker value from the response of a previous List Parts response. You need only include the marker if you are continuing the pagination of results started in a previous List Parts request.|
|limit|query|string|false|The maximum number of parts to be returned. The default limit is 50. The number of parts returned might be fewer than the specified limit, but the number of returned parts never exceeds the limit.|
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
  "ArchiveDescription": "archive description",
  "CreationDate": "2012-03-20T17:03:43.221Z",
  "Marker": "null",
  "MultipartUploadId": "OW2fM5iVylEpFEMM9_HpKowRapC3vn5sSL39_396UW9zLFUWVrnRHaPjUJddQ5OxSHVXjYtrN47NBZ-khxOjyEXAMPLE",
  "PartSizeInBytes": 4194304,
  "Parts": [
    {
      "RangeInBytes": "0-4194303",
      "SHA256TreeHash": "01d34dabf7be316472c93b1ef80721f5d4"
    },
    {
      "RangeInBytes": "4194304-8388607",
      "SHA256TreeHash": "0195875365afda349fc21c84c099987164"
    }
  ],
  "VaultARN": "arn:aws:glacier:us-west-2:012345678901:vaults/demo1-vault"
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

<h3 id="listparts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPartsOutput](#schemalistpartsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UploadMultipartPart

<a id="opIdUploadMultipartPart"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/multipart-uploads/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "body": "string"
  }'
```

`PUT /{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}`

<p>This operation uploads a part of an archive. You can upload archive parts in any order. You can also upload them in parallel. You can upload up to 10,000 parts for a multipart upload.</p> <p>Amazon Glacier rejects your upload part request if any of the following conditions is true:</p> <ul> <li> <p> <b>SHA256 tree hash does not match</b>To ensure that part data is not corrupted in transmission, you compute a SHA256 tree hash of the part and include it in your request. Upon receiving the part data, Amazon S3 Glacier also computes a SHA256 tree hash. If these hash values don't match, the operation fails. For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>.</p> </li> <li> <p> <b>Part size does not match</b>The size of each part except the last must match the size specified in the corresponding <a>InitiateMultipartUpload</a> request. The size of the last part must be the same size as, or smaller than, the specified size.</p> <note> <p>If you upload a part whose size is smaller than the part size you specified in your initiate multipart upload request and that part is not the last part, then the upload part request will succeed. However, the subsequent Complete Multipart Upload request will fail.</p> </note> </li> <li> <p> <b>Range does not align</b>The byte range value in the request does not align with the part size specified in the corresponding initiate request. For example, if you specify a part size of 4194304 bytes (4 MB), then 0 to 4194303 bytes (4 MB - 1) and 4194304 (4 MB) to 8388607 (8 MB - 1) are valid part ranges. However, if you set a range value of 2 MB to 6 MB, the range does not align with the part size and the upload will fail. </p> </li> </ul> <p>This operation is idempotent. If you upload the same part multiple times, the data included in the most recent request overwrites the previously uploaded data.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html">Upload Part </a> in the <i>Amazon Glacier Developer Guide</i>.</p>

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="uploadmultipartpart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. |
|vaultName|path|string|true|The name of the vault.|
|uploadId|path|string|true|The upload ID of the multipart upload.|
|x-amz-sha256-tree-hash|header|string|false|The SHA256 tree hash of the data being uploaded.|
|Content-Range|header|string|false|Identifies the range of bytes in the assembled archive that will be uploaded in this part. Amazon S3 Glacier uses this information to assemble the archive in the proper sequence. The format of this header follows RFC 2616. An example header is Content-Range:bytes 0-4194303/*.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» body|body|string|false|The data to upload.|

> Example responses

> 204 Response

```json
{
  "checksum": "c06f7cd4baacb087002a99a5f48bf953"
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

<h3 id="uploadmultipartpart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UploadMultipartPartOutput](#schemauploadmultipartpartoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CompleteMultipartUpload

<a id="opIdCompleteMultipartUpload"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/multipart-uploads/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}`

<p>You call this operation to inform Amazon S3 Glacier (Glacier) that all the archive parts have been uploaded and that Glacier can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Glacier returns the URI path of the newly created archive resource. Using the URI path, you can then access the archive. After you upload an archive, you should save the archive ID returned to retrieve the archive at a later point. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see <a>InitiateJob</a>.</p> <p>In the request, you must include the computed SHA256 tree hash of the entire archive you have uploaded. For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>. On the server side, Glacier also constructs the SHA256 tree hash of the assembled archive. If the values match, Glacier saves the archive to the vault; otherwise, it returns an error, and the operation fails. The <a>ListParts</a> operation returns a list of parts uploaded for a specific multipart upload. It includes checksum information for each uploaded part that can be used to debug a bad checksum issue.</p> <p>Additionally, Glacier also checks for any missing content ranges when assembling the archive, if missing content ranges are found, Glacier returns an error and the operation fails.</p> <p>Complete Multipart Upload is an idempotent operation. After your first successful complete multipart upload, if you call the operation again within a short period, the operation will succeed and return the same archive ID. This is useful in the event you experience a network issue that causes an aborted connection or receive a 500 server error, in which case you can repeat your Complete Multipart Upload request and get the same archive ID without creating duplicate archives. Note, however, that after the multipart upload completes, you cannot call the List Parts operation and the multipart upload will not appear in List Multipart Uploads response, even if idempotent complete is possible.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html">Complete Multipart Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>

<h3 id="completemultipartupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
|uploadId|path|string|true|The upload ID of the multipart upload.|
|x-amz-archive-size|header|string|false|The total size, in bytes, of the entire archive. This value should be the sum of all the sizes of the individual parts that you uploaded.|
|x-amz-sha256-tree-hash|header|string|false|The SHA256 tree hash of the entire archive. It is the tree hash of SHA256 tree hash of the individual parts. If the value you specify in the request does not match the SHA256 tree hash of the final assembled archive as computed by Amazon S3 Glacier (Glacier), Glacier returns an error and the request fails.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 201 Response

```json
{
  "archiveId": "kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw",
  "checksum": "969fb39823836d81f0cc028195fcdbcbbe76cdde932d4646fa7de5f21e18aa67",
  "location": "/0123456789012/vaults/my-vault/archives/kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw"
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

<h3 id="completemultipartupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[ArchiveCreationOutput](#schemaarchivecreationoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AbortMultipartUpload

<a id="opIdAbortMultipartUpload"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/multipart-uploads/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}`

<p>This operation aborts a multipart upload identified by the upload ID.</p> <p>After the Abort Multipart Upload request succeeds, you cannot upload any more parts to the multipart upload or complete the multipart upload. Aborting a completed upload fails. However, aborting an already-aborted upload will succeed, for a short time. For more information about uploading a part and completing a multipart upload, see <a>UploadMultipartPart</a> and <a>CompleteMultipartUpload</a>.</p> <p>This operation is idempotent.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>

<h3 id="abortmultipartupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
|uploadId|path|string|true|The upload ID of the multipart upload to delete.|
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

<h3 id="abortmultipartupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVaultLock

<a id="opIdGetVaultLock"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/lock-policy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{accountId}/vaults/{vaultName}/lock-policy`

<p>This operation retrieves the following attributes from the <code>lock-policy</code> subresource set on the specified vault: </p> <ul> <li> <p>The vault lock policy set on the vault.</p> </li> <li> <p>The state of the vault lock, which is either <code>InProgess</code> or <code>Locked</code>.</p> </li> <li> <p>When the lock ID expires. The lock ID is used to complete the vault locking process.</p> </li> <li> <p>When the vault lock was initiated and put into the <code>InProgress</code> state.</p> </li> </ul> <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by calling <a>CompleteVaultLock</a>. You can abort the vault locking process by calling <a>AbortVaultLock</a>. For more information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. </p> <p>If there is no vault lock policy set on the vault, the operation returns a <code>404 Not found</code> error. For more information about vault lock policies, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with Vault Lock Policies</a>. </p>

<h3 id="getvaultlock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
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
  "CreationDate": "exampledate",
  "ExpirationDate": "exampledate",
  "Policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"Define-vault-lock\",\"Effect\":\"Deny\",\"Principal\":{\"AWS\":\"arn:aws:iam::999999999999:root\"},\"Action\":\"glacier:DeleteArchive\",\"Resource\":\"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault\",\"Condition\":{\"NumericLessThanEquals\":{\"glacier:ArchiveAgeinDays\":\"365\"}}}]}",
  "State": "InProgress"
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

<h3 id="getvaultlock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVaultLockOutput](#schemagetvaultlockoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InitiateVaultLock

<a id="opIdInitiateVaultLock"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/lock-policy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "policy": {
      "Policy": {}
    }
  }'
```

`POST /{accountId}/vaults/{vaultName}/lock-policy`

<p>This operation initiates the vault locking process by doing the following:</p> <ul> <li> <p>Installing a vault lock policy on the specified vault.</p> </li> <li> <p>Setting the lock state of vault lock to <code>InProgress</code>.</p> </li> <li> <p>Returning a lock ID, which is used to complete the vault locking process.</p> </li> </ul> <p>You can set one vault lock policy for each vault and this policy can be up to 20 KB in size. For more information about vault lock policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with Vault Lock Policies</a>. </p> <p>You must complete the vault locking process within 24 hours after the vault lock enters the <code>InProgress</code> state. After the 24 hour window ends, the lock ID expires, the vault automatically exits the <code>InProgress</code> state, and the vault lock policy is removed from the vault. You call <a>CompleteVaultLock</a> to complete the vault locking process by setting the state of the vault lock to <code>Locked</code>. </p> <p>After a vault lock is in the <code>Locked</code> state, you cannot initiate a new vault lock for the vault.</p> <p>You can abort the vault locking process by calling <a>AbortVaultLock</a>. You can get the state of the vault lock by calling <a>GetVaultLock</a>. For more information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>.</p> <p>If this operation is called when the vault lock is in the <code>InProgress</code> state, the operation returns an <code>AccessDeniedException</code> error. When the vault lock is in the <code>InProgress</code> state you must call <a>AbortVaultLock</a> before you can initiate a new vault lock policy. </p>

> Body parameter

```json
{
  "policy": {
    "Policy": {}
  }
}
```

<h3 id="initiatevaultlock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» policy|body|object|false|Contains the vault lock policy.|
|» » Policy|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "lockId": "AE863rKkWZU53SLW5be4DUcW"
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

<h3 id="initiatevaultlock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[InitiateVaultLockOutput](#schemainitiatevaultlockoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AbortVaultLock

<a id="opIdAbortVaultLock"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/lock-policy \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{accountId}/vaults/{vaultName}/lock-policy`

<p>This operation aborts the vault locking process if the vault lock is not in the <code>Locked</code> state. If the vault lock is in the <code>Locked</code> state when this operation is requested, the operation returns an <code>AccessDeniedException</code> error. Aborting the vault locking process removes the vault lock policy from the specified vault. </p> <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by calling <a>CompleteVaultLock</a>. You can get the state of a vault lock by calling <a>GetVaultLock</a>. For more information about the vault locking process, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. For more information about vault lock policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with Vault Lock Policies</a>. </p> <p>This operation is idempotent. You can successfully invoke this operation multiple times, if the vault lock is in the <code>InProgress</code> state or if there is no policy associated with the vault.</p>

<h3 id="abortvaultlock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
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

<h3 id="abortvaultlock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddTagsToVault

<a id="opIdAddTagsToVault"></a>

> Code samples

```bash
curl 'https://glacier.us-east-1.amazonaws.com/string/vaults/string/tags#operation=add?operation=add' \
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

`POST /{accountId}/vaults/{vaultName}/tags#operation=add`

This operation adds the specified tags to a vault. Each tag is composed of a key and a value. Each vault can have up to 10 tags. If your request would cause the tag limit for the vault to be exceeded, the operation throws the <code>LimitExceededException</code> error. If a tag already exists on the vault under a specified key, the existing key value will be overwritten. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>. 

> Body parameter

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="addtagstovault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|false|The tags to add to the vault. Each tag is composed of a key and a value. The value can be an empty string.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|add|

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

<h3 id="addtagstovault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CompleteVaultLock

<a id="opIdCompleteVaultLock"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/lock-policy/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /{accountId}/vaults/{vaultName}/lock-policy/{lockId}`

<p>This operation completes the vault locking process by transitioning the vault lock from the <code>InProgress</code> state to the <code>Locked</code> state, which causes the vault lock policy to become unchangeable. A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. You can obtain the state of the vault lock by calling <a>GetVaultLock</a>. For more information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. </p> <p>This operation is idempotent. This request is always successful if the vault lock is in the <code>Locked</code> state and the provided lock ID matches the lock ID originally used to lock the vault.</p> <p>If an invalid lock ID is passed in the request when the vault lock is in the <code>Locked</code> state, the operation returns an <code>AccessDeniedException</code> error. If an invalid lock ID is passed in the request when the vault lock is in the <code>InProgress</code> state, the operation throws an <code>InvalidParameter</code> error.</p>

<h3 id="completevaultlock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
|lockId|path|string|true|The <code>lockId</code> value is the lock ID obtained from a <a>InitiateVaultLock</a> request.|
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

<h3 id="completevaultlock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVault

<a id="opIdDescribeVault"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{accountId}/vaults/{vaultName}`

<p>This operation returns information about a vault, including the vault's Amazon Resource Name (ARN), the date the vault was created, the number of archives it contains, and the total size of all the archives in the vault. The number of archives and their total size are as of the last inventory generation. This means that if you add or remove an archive from a vault, and then immediately use Describe Vault, the change in contents will not be immediately reflected. If you want to retrieve the latest inventory of the vault, use <a>InitiateJob</a>. Amazon S3 Glacier generates vault inventories approximately daily. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a Vault Inventory in Amazon S3 Glacier</a>. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get.html">Describe Vault </a> in the <i>Amazon Glacier Developer Guide</i>. </p>

<h3 id="describevault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. |
|vaultName|path|string|true|The name of the vault.|
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
  "CreationDate": "2016-09-23T19:27:18.665Z",
  "NumberOfArchives": 0,
  "SizeInBytes": 0,
  "VaultARN": "arn:aws:glacier:us-west-2:111122223333:vaults/my-vault",
  "VaultName": "my-vault"
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

<h3 id="describevault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVaultOutput](#schemadescribevaultoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVault

<a id="opIdCreateVault"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /{accountId}/vaults/{vaultName}`

<p>This operation creates a new vault with the specified name. The name of the vault must be unique within a region for an AWS account. You can create up to 1,000 vaults per account. If you need to create more vaults, contact Amazon S3 Glacier.</p> <p>You must use the following guidelines when naming a vault.</p> <ul> <li> <p>Names can be between 1 and 255 characters long.</p> </li> <li> <p>Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.' (period).</p> </li> </ul> <p>This operation is idempotent.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/creating-vaults.html">Creating a Vault in Amazon Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html">Create Vault </a> in the <i>Amazon Glacier Developer Guide</i>. </p>

<h3 id="createvault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 201 Response

```json
{
  "location": "/111122223333/vaults/my-vault"
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

<h3 id="createvault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateVaultOutput](#schemacreatevaultoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVault

<a id="opIdDeleteVault"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{accountId}/vaults/{vaultName}`

<p>This operation deletes a vault. Amazon S3 Glacier will delete a vault only if there are no archives in the vault as of the last inventory and there have been no writes to the vault since the last inventory. If either of these conditions is not satisfied, the vault deletion fails (that is, the vault is not removed) and Amazon S3 Glacier returns an error. You can use <a>DescribeVault</a> to return the number of archives in a vault, and you can use <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate a Job (POST jobs)</a> to initiate a new inventory retrieval for a vault. The inventory contains the archive IDs you use to delete archives using <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive (DELETE archive)</a>.</p> <p>This operation is idempotent.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-vaults.html">Deleting a Vault in Amazon Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html">Delete Vault </a> in the <i>Amazon S3 Glacier Developer Guide</i>. </p>

<h3 id="deletevault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
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

<h3 id="deletevault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteArchive

<a id="opIdDeleteArchive"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/archives/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{accountId}/vaults/{vaultName}/archives/{archiveId}`

<p>This operation deletes an archive from a vault. Subsequent requests to initiate a retrieval of this archive will fail. Archive retrievals that are in progress for this archive ID may or may not succeed according to the following scenarios:</p> <ul> <li> <p>If the archive retrieval job is actively preparing the data for download when Amazon S3 Glacier receives the delete archive request, the archival retrieval operation might fail.</p> </li> <li> <p>If the archive retrieval job has successfully prepared the archive for download when Amazon S3 Glacier receives the delete archive request, you will be able to download the output.</p> </li> </ul> <p>This operation is idempotent. Attempting to delete an already-deleted archive does not result in an error.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-an-archive.html">Deleting an Archive in Amazon Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive</a> in the <i>Amazon Glacier Developer Guide</i>. </p>

<h3 id="deletearchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
|archiveId|path|string|true|The ID of the archive to delete.|
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

<h3 id="deletearchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVaultAccessPolicy

<a id="opIdGetVaultAccessPolicy"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/access-policy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{accountId}/vaults/{vaultName}/access-policy`

This operation retrieves the <code>access-policy</code> subresource set on the vault; for more information on setting this subresource, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html">Set Vault Access Policy (PUT access-policy)</a>. If there is no access policy set on the vault, the operation returns a <code>404 Not found</code> error. For more information about vault access policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>.

<h3 id="getvaultaccesspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
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
  "policy": {
    "Policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"Define-owner-access-rights\",\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::999999999999:root\"},\"Action\":\"glacier:DeleteArchive\",\"Resource\":\"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault\"}]}"
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

<h3 id="getvaultaccesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVaultAccessPolicyOutput](#schemagetvaultaccesspolicyoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetVaultAccessPolicy

<a id="opIdSetVaultAccessPolicy"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/access-policy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "policy": {
      "Policy": {}
    }
  }'
```

`PUT /{accountId}/vaults/{vaultName}/access-policy`

This operation configures an access policy for a vault and will overwrite an existing policy. To configure a vault access policy, send a PUT request to the <code>access-policy</code> subresource of the vault. An access policy is specific to a vault and is also called a vault subresource. You can set one access policy per vault and the policy can be up to 20 KB in size. For more information about vault access policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. 

> Body parameter

```json
{
  "policy": {
    "Policy": {}
  }
}
```

<h3 id="setvaultaccesspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» policy|body|object|false|Contains the vault access policy.|
|» » Policy|body|object|false|none|

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

<h3 id="setvaultaccesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVaultAccessPolicy

<a id="opIdDeleteVaultAccessPolicy"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/access-policy \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{accountId}/vaults/{vaultName}/access-policy`

<p>This operation deletes the access policy associated with the specified vault. The operation is eventually consistent; that is, it might take some time for Amazon S3 Glacier to completely remove the access policy, and you might still see the effect of the policy for a short time after you send the delete request.</p> <p>This operation is idempotent. You can invoke delete multiple times, even if there is no policy associated with the vault. For more information about vault access policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. </p>

<h3 id="deletevaultaccesspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. |
|vaultName|path|string|true|The name of the vault.|
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

<h3 id="deletevaultaccesspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVaultNotifications

<a id="opIdGetVaultNotifications"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/notification-configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{accountId}/vaults/{vaultName}/notification-configuration`

<p>This operation retrieves the <code>notification-configuration</code> subresource of the specified vault.</p> <p>For information about setting a notification configuration on a vault, see <a>SetVaultNotifications</a>. If a notification configuration for a vault is not set, the operation returns a <code>404 Not Found</code> error. For more information about vault notifications, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon S3 Glacier</a>. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html">Get Vault Notification Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>

<h3 id="getvaultnotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
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
  "vaultNotificationConfig": {
    "Events": [
      "InventoryRetrievalCompleted",
      "ArchiveRetrievalCompleted"
    ],
    "SNSTopic": "arn:aws:sns:us-west-2:0123456789012:my-vault"
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

<h3 id="getvaultnotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVaultNotificationsOutput](#schemagetvaultnotificationsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetVaultNotifications

<a id="opIdSetVaultNotifications"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/notification-configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "vaultNotificationConfig": {
      "SNSTopic": {},
      "Events": {}
    }
  }'
```

`PUT /{accountId}/vaults/{vaultName}/notification-configuration`

<p>This operation configures notifications that will be sent when specific events happen to a vault. By default, you don't get any notifications.</p> <p>To configure vault notifications, send a PUT request to the <code>notification-configuration</code> subresource of the vault. The request should include a JSON document that provides an Amazon SNS topic and specific events for which you want Amazon S3 Glacier to send notifications to the topic.</p> <p>Amazon SNS topics must grant permission to the vault to be allowed to publish notifications to the topic. You can configure a vault to publish a notification for the following vault events:</p> <ul> <li> <p> <b>ArchiveRetrievalCompleted</b> This event occurs when a job that was initiated for an archive retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from <a>DescribeJob</a>. </p> </li> <li> <p> <b>InventoryRetrievalCompleted</b> This event occurs when a job that was initiated for an inventory retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from <a>DescribeJob</a>. </p> </li> </ul> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html">Set Vault Notification Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>

> Body parameter

```json
{
  "vaultNotificationConfig": {
    "SNSTopic": {},
    "Events": {}
  }
}
```

<h3 id="setvaultnotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» vaultNotificationConfig|body|object|false|Represents a vault's notification configuration.|
|» » SNSTopic|body|object|false|none|
|» » Events|body|object|false|none|

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

<h3 id="setvaultnotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVaultNotifications

<a id="opIdDeleteVaultNotifications"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/notification-configuration \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{accountId}/vaults/{vaultName}/notification-configuration`

<p>This operation deletes the notification configuration set for a vault. The operation is eventually consistent; that is, it might take some time for Amazon S3 Glacier to completely disable the notifications and you might still receive some notifications for a short time after you send the delete request.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html">Delete Vault Notification Configuration </a> in the Amazon S3 Glacier Developer Guide. </p>

<h3 id="deletevaultnotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. |
|vaultName|path|string|true|The name of the vault.|
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

<h3 id="deletevaultnotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeJob

<a id="opIdDescribeJob"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{accountId}/vaults/{vaultName}/jobs/{jobId}`

<p>This operation returns information about a job you previously initiated, including the job initiation date, the user who initiated the job, the job status code/message and the Amazon SNS topic to notify after Amazon S3 Glacier (Glacier) completes the job. For more information about initiating a job, see <a>InitiateJob</a>. </p> <note> <p>This operation enables you to check the status of your job. However, it is strongly recommended that you set up an Amazon SNS topic and specify it in your initiate job request so that Glacier can notify the topic after it completes the job.</p> </note> <p>A job ID will not expire for at least 24 hours after Glacier completes the job.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For more information about using this operation, see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html">Describe Job</a> in the <i>Amazon Glacier Developer Guide</i>. </p>

<h3 id="describejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. |
|vaultName|path|string|true|The name of the vault.|
|jobId|path|string|true|The ID of the job to describe.|
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
  "Action": "InventoryRetrieval",
  "Completed": false,
  "CreationDate": "2015-07-17T20:23:41.616Z",
  "InventoryRetrievalParameters": {
    "Format": "JSON"
  },
  "JobId": "zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4CnMW",
  "StatusCode": "InProgress",
  "VaultARN": "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault"
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

<h3 id="describejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GlacierJobDescription](#schemaglacierjobdescription)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataRetrievalPolicy

<a id="opIdGetDataRetrievalPolicy"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/policies/data-retrieval \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{accountId}/policies/data-retrieval`

This operation returns the current data retrieval policy for the account and region specified in the GET request. For more information about data retrieval policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>.

<h3 id="getdataretrievalpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID. |
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
  "Policy": {
    "Rules": [
      {
        "BytesPerHour": 10737418240,
        "Strategy": "BytesPerHour"
      }
    ]
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

<h3 id="getdataretrievalpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataRetrievalPolicyOutput](#schemagetdataretrievalpolicyoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetDataRetrievalPolicy

<a id="opIdSetDataRetrievalPolicy"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/policies/data-retrieval \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Policy": {
      "Rules": {}
    }
  }'
```

`PUT /{accountId}/policies/data-retrieval`

<p>This operation sets and then enacts a data retrieval policy in the region specified in the PUT request. You can set one policy per region for an AWS account. The policy is enacted within a few minutes of a successful PUT operation.</p> <p>The set policy operation does not affect retrieval jobs that were in progress before the policy was enacted. For more information about data retrieval policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>. </p>

> Body parameter

```json
{
  "Policy": {
    "Rules": {}
  }
}
```

<h3 id="setdataretrievalpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Policy|body|object|false|Data retrieval policy.|
|» » Rules|body|object|false|none|

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

<h3 id="setdataretrievalpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetJobOutput

<a id="opIdGetJobOutput"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/jobs/string/output \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{accountId}/vaults/{vaultName}/jobs/{jobId}/output`

<p>This operation downloads the output of the job you initiated using <a>InitiateJob</a>. Depending on the job type you specified when you initiated the job, the output will be either the content of an archive or a vault inventory.</p> <p>You can download all the job output or download a portion of the output by specifying a byte range. In the case of an archive retrieval job, depending on the byte range you specify, Amazon S3 Glacier (Glacier) returns the checksum for the portion of the data. You can compute the checksum on the client and verify that the values match to ensure the portion you downloaded is the correct data.</p> <p>A job ID will not expire for at least 24 hours after Glacier completes the job. That a byte range. For both archive and inventory retrieval jobs, you should verify the downloaded size against the size returned in the headers from the <b>Get Job Output</b> response.</p> <p>For archive retrieval jobs, you should also verify that the size is what you expected. If you download a portion of the output, the expected size is based on the range of bytes you specified. For example, if you specify a range of <code>bytes=0-1048575</code>, you should verify your download size is 1,048,576 bytes. If you download an entire archive, the expected size is the size of the archive when you uploaded it to Amazon S3 Glacier The expected size is also returned in the headers from the <b>Get Job Output</b> response.</p> <p>In the case of an archive retrieval job, depending on the byte range you specify, Glacier returns the checksum for the portion of the data. To ensure the portion you downloaded is the correct data, compute the checksum on the client, verify that the values match, and verify that the size is what you expected.</p> <p>A job ID does not expire for at least 24 hours after Glacier completes the job. That is, you can download the job output within the 24 hours period after Amazon Glacier completes the job.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a Vault Inventory</a>, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive.html">Downloading an Archive</a>, and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html">Get Job Output </a> </p>

<h3 id="getjoboutput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
|jobId|path|string|true|The job ID whose data is downloaded.|
|Range|header|string|false|<p>The range of bytes to retrieve from the output. For example, if you want to download the first 1,048,576 bytes, specify the range as <code>bytes=0-1048575</code>. By default, this operation downloads the entire output.</p> <p>If the job output is large, then you can use a range to retrieve a portion of the output. This allows you to download the entire output in smaller chunks of bytes. For example, suppose you have 1 GB of job output you want to download and you decide to download 128 MB chunks of data at a time, which is a total of eight Get Job Output requests. You use the following process to download the job output:</p> <ol> <li> <p>Download a 128 MB chunk of output by specifying the appropriate byte range. Verify that all 128 MB of data was received.</p> </li> <li> <p>Along with the data, the response includes a SHA256 tree hash of the payload. You compute the checksum of the payload on the client and compare it with the checksum you received in the response to ensure you received all the expected data.</p> </li> <li> <p>Repeat steps 1 and 2 for all the eight 128 MB chunks of output data, each time specifying the appropriate byte range.</p> </li> <li> <p>After downloading all the parts of the job output, you have a list of eight checksum values. Compute the tree hash of these values to find the checksum of the entire output. Using the <a>DescribeJob</a> API, obtain job information of the job that provided you the output. The response includes the checksum of the entire archive stored in Amazon S3 Glacier. You compare this value with the checksum you computed to ensure you have downloaded the entire archive content with no errors.</p> <p/> </li> </ol>|
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
  "acceptRanges": "bytes",
  "body": "inventory-data",
  "contentType": "application/json",
  "status": 200
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

<h3 id="getjoboutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetJobOutputOutput](#schemagetjoboutputoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJobs

<a id="opIdListJobs"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{accountId}/vaults/{vaultName}/jobs`

<p>This operation lists jobs for a vault, including jobs that are in-progress and jobs that have recently finished. The List Job operation returns a list of these jobs sorted by job initiation time.</p> <note> <p>Amazon Glacier retains recently completed jobs for a period before deleting them; however, it eventually removes completed jobs. The output of completed jobs can be retrieved. Retaining completed jobs for a period of time after they have completed enables you to get a job output in the event you miss the job completion notification or your first attempt to download it fails. For example, suppose you start an archive retrieval job to download an archive. After the job completes, you start to download the archive but encounter a network error. In this scenario, you can retry and download the archive while the job exists.</p> </note> <p>The List Jobs operation supports pagination. You should always check the response <code>Marker</code> field. If there are no more jobs to list, the <code>Marker</code> field is set to <code>null</code>. If there are more jobs to list, the <code>Marker</code> field is set to a non-null value, which you can use to continue the pagination of the list. To return a list of jobs that begins at a specific job, set the marker request parameter to the <code>Marker</code> value for that job that you obtained from a previous List Jobs request.</p> <p>You can set a maximum limit for the number of jobs returned in the response by specifying the <code>limit</code> parameter in the request. The default limit is 50. The number of jobs returned might be fewer than the limit, but the number of returned jobs never exceeds the limit.</p> <p>Additionally, you can filter the jobs list returned by specifying the optional <code>statuscode</code> parameter or <code>completed</code> parameter, or both. Using the <code>statuscode</code> parameter, you can specify to return only jobs that match either the <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code> status. Using the <code>completed</code> parameter, you can specify to return only jobs that were completed (<code>true</code>) or jobs that were not completed (<code>false</code>).</p> <p>For more information about using this operation, see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html">List Jobs</a>. </p>

<h3 id="listjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. |
|vaultName|path|string|true|The name of the vault.|
|limit|query|string|false|The maximum number of jobs to be returned. The default limit is 50. The number of jobs returned might be fewer than the specified limit, but the number of returned jobs never exceeds the limit.|
|marker|query|string|false|An opaque string used for pagination. This value specifies the job at which the listing of jobs should begin. Get the marker value from a previous List Jobs response. You only need to include the marker if you are continuing the pagination of results started in a previous List Jobs request.|
|statuscode|query|string|false|The type of job status to return. You can specify the following values: <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code>.|
|completed|query|string|false|The state of the jobs to return. You can specify <code>true</code> or <code>false</code>.|
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
  "JobList": [
    {
      "Action": "ArchiveRetrieval",
      "ArchiveId": "kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw",
      "ArchiveSHA256TreeHash": "9628195fcdbcbbe76cdde932d4646fa7de5f219fb39823836d81f0cc0e18aa67",
      "ArchiveSizeInBytes": 3145728,
      "Completed": false,
      "CreationDate": "2015-07-17T21:16:13.840Z",
      "JobDescription": "Retrieve archive on 2015-07-17",
      "JobId": "l7IL5-EkXyEY9Ws95fClzIbk2O5uLYaFdAYOi-azsX_Z8V6NH4yERHzars8wTKYQMX6nBDI9cMNHzyZJO59-8N9aHWav",
      "RetrievalByteRange": "0-3145727",
      "SHA256TreeHash": "9628195fcdbcbbe76cdde932d4646fa7de5f219fb39823836d81f0cc0e18aa67",
      "SNSTopic": "arn:aws:sns:us-west-2:0123456789012:my-vault",
      "StatusCode": "InProgress",
      "VaultARN": "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault"
    },
    {
      "Action": "InventoryRetrieval",
      "Completed": false,
      "CreationDate": "2015-07-17T20:23:41.616Z",
      "InventoryRetrievalParameters": {
        "Format": "JSON"
      },
      "JobId": "zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4CnMW",
      "StatusCode": "InProgress",
      "VaultARN": "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault"
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

<h3 id="listjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobsOutput](#schemalistjobsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InitiateJob

<a id="opIdInitiateJob"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobParameters": {
      "Format": {},
      "Type": {},
      "ArchiveId": {},
      "Description": {},
      "SNSTopic": {},
      "RetrievalByteRange": {},
      "Tier": {},
      "InventoryRetrievalParameters": {
        "StartDate": {},
        "EndDate": {},
        "Limit": {},
        "Marker": {}
      },
      "SelectParameters": {
        "InputSerialization": {
          "csv": {
            "FileHeaderInfo": {},
            "Comments": {},
            "QuoteEscapeCharacter": {},
            "RecordDelimiter": {},
            "FieldDelimiter": {},
            "QuoteCharacter": {}
          }
        },
        "ExpressionType": {},
        "Expression": {},
        "OutputSerialization": {
          "csv": {
            "QuoteFields": {},
            "QuoteEscapeCharacter": {},
            "RecordDelimiter": {},
            "FieldDelimiter": {},
            "QuoteCharacter": {}
          }
        }
      },
      "OutputLocation": {
        "S3": {
          "BucketName": {},
          "Prefix": {},
          "Encryption": {
            "EncryptionType": {},
            "KMSKeyId": {},
            "KMSContext": {}
          },
          "CannedACL": {},
          "AccessControlList": {},
          "Tagging": {
            "property1": "string",
            "property2": "string"
          },
          "UserMetadata": {
            "property1": "string",
            "property2": "string"
          },
          "StorageClass": {}
        }
      }
    }
  }'
```

`POST /{accountId}/vaults/{vaultName}/jobs`

This operation initiates a job of the specified type, which can be a select, an archival retrieval, or a vault retrieval. For more information about using this operation, see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate a Job</a>. 

> Body parameter

```json
{
  "jobParameters": {
    "Format": {},
    "Type": {},
    "ArchiveId": {},
    "Description": {},
    "SNSTopic": {},
    "RetrievalByteRange": {},
    "Tier": {},
    "InventoryRetrievalParameters": {
      "StartDate": {},
      "EndDate": {},
      "Limit": {},
      "Marker": {}
    },
    "SelectParameters": {
      "InputSerialization": {
        "csv": {
          "FileHeaderInfo": {},
          "Comments": {},
          "QuoteEscapeCharacter": {},
          "RecordDelimiter": {},
          "FieldDelimiter": {},
          "QuoteCharacter": {}
        }
      },
      "ExpressionType": {},
      "Expression": {},
      "OutputSerialization": {
        "csv": {
          "QuoteFields": {},
          "QuoteEscapeCharacter": {},
          "RecordDelimiter": {},
          "FieldDelimiter": {},
          "QuoteCharacter": {}
        }
      }
    },
    "OutputLocation": {
      "S3": {
        "BucketName": {},
        "Prefix": {},
        "Encryption": {
          "EncryptionType": {},
          "KMSKeyId": {},
          "KMSContext": {}
        },
        "CannedACL": {},
        "AccessControlList": {},
        "Tagging": {
          "property1": "string",
          "property2": "string"
        },
        "UserMetadata": {
          "property1": "string",
          "property2": "string"
        },
        "StorageClass": {}
      }
    }
  }
}
```

<h3 id="initiatejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobParameters|body|object|false|Provides options for defining a job.|
|» » Format|body|object|false|none|
|» » Type|body|object|false|none|
|» » ArchiveId|body|object|false|none|
|» » Description|body|object|false|none|
|» » SNSTopic|body|object|false|none|
|» » RetrievalByteRange|body|object|false|none|
|» » Tier|body|object|false|none|
|» » InventoryRetrievalParameters|body|object|false|none|
|» » » StartDate|body|object|false|none|
|» » » EndDate|body|object|false|none|
|» » » Limit|body|object|false|none|
|» » » Marker|body|object|false|none|
|» » SelectParameters|body|object|false|none|
|» » » InputSerialization|body|object|false|none|
|» » » » csv|body|object|false|none|
|» » » » » FileHeaderInfo|body|object|false|none|
|» » » » » Comments|body|object|false|none|
|» » » » » QuoteEscapeCharacter|body|object|false|none|
|» » » » » RecordDelimiter|body|object|false|none|
|» » » » » FieldDelimiter|body|object|false|none|
|» » » » » QuoteCharacter|body|object|false|none|
|» » » ExpressionType|body|object|false|none|
|» » » Expression|body|object|false|none|
|» » » OutputSerialization|body|object|false|none|
|» » » » csv|body|object|false|none|
|» » » » » QuoteFields|body|object|false|none|
|» » » » » QuoteEscapeCharacter|body|object|false|none|
|» » » » » RecordDelimiter|body|object|false|none|
|» » » » » FieldDelimiter|body|object|false|none|
|» » » » » QuoteCharacter|body|object|false|none|
|» » OutputLocation|body|object|false|none|
|» » » S3|body|object|false|none|
|» » » » BucketName|body|object|false|none|
|» » » » Prefix|body|object|false|none|
|» » » » Encryption|body|object|false|none|
|» » » » » EncryptionType|body|object|false|none|
|» » » » » KMSKeyId|body|object|false|none|
|» » » » » KMSContext|body|object|false|none|
|» » » » CannedACL|body|object|false|none|
|» » » » AccessControlList|body|object|false|none|
|» » » » Tagging|body|object|false|none|
|» » » » » **additionalProperties**|body|[string](#schemastring)|false|none|
|» » » » UserMetadata|body|object|false|none|
|» » » » » **additionalProperties**|body|[string](#schemastring)|false|none|
|» » » » StorageClass|body|object|false|none|

> Example responses

> 202 Response

```json
{
  "jobId": " HkF9p6o7yjhFx-K3CGl6fuSm6VzW9T7esGQfco8nUXVYwS0jlb5gq1JZ55yHgt5vP54ZShjoQzQVVh7vEXAMPLEjobID",
  "location": "/111122223333/vaults/examplevault/jobs/HkF9p6o7yjhFx-K3CGl6fuSm6VzW9T7esGQfco8nUXVYwS0jlb5gq1JZ55yHgt5vP54ZShjoQzQVVh7vEXAMPLEjobID"
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

<h3 id="initiatejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[InitiateJobOutput](#schemainitiatejoboutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|PolicyEnforcedException|[PolicyEnforcedException](#schemapolicyenforcedexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|484|484|InsufficientCapacityException|[InsufficientCapacityException](#schemainsufficientcapacityexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMultipartUploads

<a id="opIdListMultipartUploads"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/multipart-uploads \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{accountId}/vaults/{vaultName}/multipart-uploads`

<p>This operation lists in-progress multipart uploads for the specified vault. An in-progress multipart upload is a multipart upload that has been initiated by an <a>InitiateMultipartUpload</a> request, but has not yet been completed or aborted. The list returned in the List Multipart Upload response has no guaranteed order. </p> <p>The List Multipart Uploads operation supports pagination. By default, this operation returns up to 50 multipart uploads in the response. You should always check the response for a <code>marker</code> at which to continue the list; if there are no more items the <code>marker</code> is <code>null</code>. To return a list of multipart uploads that begins at a specific upload, set the <code>marker</code> request parameter to the value you obtained from a previous List Multipart Upload request. You can also limit the number of uploads returned in the response by specifying the <code>limit</code> parameter in the request.</p> <p>Note the difference between this operation and listing parts (<a>ListParts</a>). The List Multipart Uploads operation lists all multipart uploads for a vault and does not require a multipart upload ID. The List Parts operation requires a multipart upload ID since parts are associated with a single upload.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html">List Multipart Uploads </a> in the <i>Amazon Glacier Developer Guide</i>.</p>

<h3 id="listmultipartuploads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. |
|vaultName|path|string|true|The name of the vault.|
|marker|query|string|false|An opaque string used for pagination. This value specifies the upload at which the listing of uploads should begin. Get the marker value from a previous List Uploads response. You need only include the marker if you are continuing the pagination of results started in a previous List Uploads request.|
|limit|query|string|false|Specifies the maximum number of uploads returned in the response body. If this value is not specified, the List Uploads operation returns up to 50 uploads.|
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
  "Marker": "null",
  "UploadsList": [
    {
      "ArchiveDescription": "archive 1",
      "CreationDate": "2012-03-19T23:20:59.130Z",
      "MultipartUploadId": "xsQdFIRsfJr20CW2AbZBKpRZAFTZSJIMtL2hYf8mvp8dM0m4RUzlaqoEye6g3h3ecqB_zqwB7zLDMeSWhwo65re4C4Ev",
      "PartSizeInBytes": 4194304,
      "VaultARN": "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
    },
    {
      "ArchiveDescription": "archive 2",
      "CreationDate": "2012-04-01T15:00:00.000Z",
      "MultipartUploadId": "nPyGOnyFcx67qqX7E-0tSGiRi88hHMOwOxR-_jNyM6RjVMFfV29lFqZ3rNsSaWBugg6OP92pRtufeHdQH7ClIpSF6uJc",
      "PartSizeInBytes": 4194304,
      "VaultARN": "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
    },
    {
      "ArchiveDescription": "archive 3",
      "CreationDate": "2012-03-20T17:03:43.221Z",
      "MultipartUploadId": "qt-RBst_7yO8gVIonIBsAxr2t-db0pE4s8MNeGjKjGdNpuU-cdSAcqG62guwV9r5jh5mLyFPzFEitTpNE7iQfHiu1XoV",
      "PartSizeInBytes": 4194304,
      "VaultARN": "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
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

<h3 id="listmultipartuploads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMultipartUploadsOutput](#schemalistmultipartuploadsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InitiateMultipartUpload

<a id="opIdInitiateMultipartUpload"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/multipart-uploads \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /{accountId}/vaults/{vaultName}/multipart-uploads`

<p>This operation initiates a multipart upload. Amazon S3 Glacier creates a multipart upload resource and returns its ID in the response. The multipart upload ID is used in subsequent requests to upload parts of an archive (see <a>UploadMultipartPart</a>).</p> <p>When you initiate a multipart upload, you specify the part size in number of bytes. The part size must be a megabyte (1024 KB) multiplied by a power of 2-for example, 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB.</p> <p>Every part you upload to this resource (see <a>UploadMultipartPart</a>), except the last one, must have the same size. The last one can be the same size or smaller. For example, suppose you want to upload a 16.2 MB file. If you initiate the multipart upload with a part size of 4 MB, you will upload four parts of 4 MB each and one part of 0.2 MB. </p> <note> <p>You don't need to know the size of the archive when you start a multipart upload because Amazon S3 Glacier does not require you to specify the overall archive size.</p> </note> <p>After you complete the multipart upload, Amazon S3 Glacier (Glacier) removes the multipart upload resource referenced by the ID. Glacier also removes the multipart upload resource if you cancel the multipart upload or it may be removed if there is no activity for a period of 24 hours.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html">Initiate Multipart Upload</a> in the <i>Amazon Glacier Developer Guide</i>.</p>

<h3 id="initiatemultipartupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. |
|vaultName|path|string|true|The name of the vault.|
|x-amz-archive-description|header|string|false|<p>The archive description that you are uploading in parts.</p> <p>The part size must be a megabyte (1024 KB) multiplied by a power of 2, for example 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB (4096 MB).</p>|
|x-amz-part-size|header|string|false|The size of each part except the last, in bytes. The last part can be smaller than this part size.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 201 Response

```json
{
  "location": "/111122223333/vaults/my-vault/multipart-uploads/19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ",
  "uploadId": "19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ"
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

<h3 id="initiatemultipartupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[InitiateMultipartUploadOutput](#schemainitiatemultipartuploadoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProvisionedCapacity

<a id="opIdListProvisionedCapacity"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/provisioned-capacity \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{accountId}/provisioned-capacity`

This operation lists the provisioned capacity units for the specified AWS account.

<h3 id="listprovisionedcapacity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, don't include any hyphens ('-') in the ID. |
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
  "ProvisionedCapacityList": [
    {
      "CapacityId": "zSaq7NzHFQDANTfQkDen4V7z",
      "ExpirationDate": "2016-12-12T00:00:00.000Z",
      "StartDate": "2016-11-11T20:11:51.095Z"
    },
    {
      "CapacityId": "yXaq7NzHFQNADTfQkDen4V7z",
      "ExpirationDate": "2017-01-15T00:00:00.000Z",
      "StartDate": "2016-12-13T20:11:51.095Z"
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

<h3 id="listprovisionedcapacity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProvisionedCapacityOutput](#schemalistprovisionedcapacityoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PurchaseProvisionedCapacity

<a id="opIdPurchaseProvisionedCapacity"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/provisioned-capacity \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /{accountId}/provisioned-capacity`

This operation purchases a provisioned capacity unit for an AWS account. 

<h3 id="purchaseprovisionedcapacity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, don't include any hyphens ('-') in the ID. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 201 Response

```json
{
  "capacityId": "zSaq7NzHFQDANTfQkDen4V7z"
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

<h3 id="purchaseprovisionedcapacity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[PurchaseProvisionedCapacityOutput](#schemapurchaseprovisionedcapacityoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForVault

<a id="opIdListTagsForVault"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/tags \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{accountId}/vaults/{vaultName}/tags`

This operation lists all the tags attached to a vault. The operation returns an empty map if there are no tags. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.

<h3 id="listtagsforvault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
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
    "date": "july2015",
    "id": "1234"
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

<h3 id="listtagsforvault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForVaultOutput](#schemalisttagsforvaultoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVaults

<a id="opIdListVaults"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{accountId}/vaults`

<p>This operation lists all vaults owned by the calling user's account. The list returned in the response is ASCII-sorted by vault name.</p> <p>By default, this operation returns up to 10 items. If there are more vaults to list, the response <code>marker</code> field contains the vault Amazon Resource Name (ARN) at which to continue the list with a new List Vaults request; otherwise, the <code>marker</code> field is <code>null</code>. To return a list of vaults that begins at a specific vault, set the <code>marker</code> request parameter to the vault ARN you obtained from a previous List Vaults request. You can also limit the number of vaults returned in the response by specifying the <code>limit</code> parameter in the request. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html">List Vaults </a> in the <i>Amazon Glacier Developer Guide</i>. </p>

<h3 id="listvaults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.|
|marker|query|string|false|A string used for pagination. The marker specifies the vault ARN after which the listing of vaults should begin.|
|limit|query|string|false|The maximum number of vaults to be returned. The default limit is 10. The number of vaults returned might be fewer than the specified limit, but the number of returned vaults never exceeds the limit.|
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
  "VaultList": [
    {
      "CreationDate": "2015-04-06T21:23:45.708Z",
      "LastInventoryDate": "2015-04-07T00:26:19.028Z",
      "NumberOfArchives": 1,
      "SizeInBytes": 3178496,
      "VaultARN": "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault",
      "VaultName": "my-vault"
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

<h3 id="listvaults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVaultsOutput](#schemalistvaultsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTagsFromVault

<a id="opIdRemoveTagsFromVault"></a>

> Code samples

```bash
curl 'https://glacier.us-east-1.amazonaws.com/string/vaults/string/tags#operation=remove?operation=remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TagKeys": [
      "string"
    ]
  }'
```

`POST /{accountId}/vaults/{vaultName}/tags#operation=remove`

This operation removes one or more tags from the set of tags attached to a vault. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>. This operation is idempotent. The operation will be successful, even if there are no tags attached to the vault. 

> Body parameter

```json
{
  "TagKeys": [
    "string"
  ]
}
```

<h3 id="removetagsfromvault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.|
|vaultName|path|string|true|The name of the vault.|
|operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TagKeys|body|[[string](#schemastring)]|false|A list of tag keys. Each corresponding tag is removed from the vault.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operation|remove|

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

<h3 id="removetagsfromvault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UploadArchive

<a id="opIdUploadArchive"></a>

> Code samples

```bash
curl https://glacier.us-east-1.amazonaws.com/string/vaults/string/archives \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "body": "string"
  }'
```

`POST /{accountId}/vaults/{vaultName}/archives`

<p>This operation adds an archive to a vault. This is a synchronous operation, and for a successful upload, your data is durably persisted. Amazon S3 Glacier returns the archive ID in the <code>x-amz-archive-id</code> header of the response. </p> <p>You must use the archive ID to access your data in Amazon S3 Glacier. After you upload an archive, you should save the archive ID returned so that you can retrieve or delete the archive later. Besides saving the archive ID, you can also index it and give it a friendly name to allow for better searching. You can also use the optional archive description field to specify how the archive is referred to in an external index of archives, such as you might create in Amazon DynamoDB. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see <a>InitiateJob</a>. </p> <p>You must provide a SHA256 tree hash of the data you are uploading. For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>. </p> <p>You can optionally specify an archive description of up to 1,024 printable ASCII characters. You can get the archive description when you either retrieve the archive or get the vault inventory. For more information, see <a>InitiateJob</a>. Amazon Glacier does not interpret the description in any way. An archive description does not need to be unique. You cannot use the description to retrieve or sort the archive list. </p> <p>Archives are immutable. After you upload an archive, you cannot edit the archive or its description.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-an-archive.html">Uploading an Archive in Amazon Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a> in the <i>Amazon Glacier Developer Guide</i>. </p>

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="uploadarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vaultName|path|string|true|The name of the vault.|
|accountId|path|string|true|The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. |
|x-amz-archive-description|header|string|false|The optional description of the archive you are uploading.|
|x-amz-sha256-tree-hash|header|string|false|The SHA256 tree hash of the data being uploaded.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» body|body|string|false|The data to upload.|

> Example responses

> 201 Response

```json
{
  "archiveId": "kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw",
  "checksum": "969fb39823836d81f0cc028195fcdbcbbe76cdde932d4646fa7de5f21e18aa67",
  "location": "/0123456789012/vaults/my-vault/archives/kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw"
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

<h3 id="uploadarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[ArchiveCreationOutput](#schemaarchivecreationoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingParameterValueException|[MissingParameterValueException](#schemamissingparametervalueexception)|
|483|483|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterValueException">InvalidParameterValueException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametervalueexception"></a>
<a id="schema_InvalidParameterValueException"></a>
<a id="tocSinvalidparametervalueexception"></a>
<a id="tocsinvalidparametervalueexception"></a>

```json
null
```

<h2 id="tocS_MissingParameterValueException">MissingParameterValueException</h2>
<!-- backwards compatibility -->
<a id="schemamissingparametervalueexception"></a>
<a id="schema_MissingParameterValueException"></a>
<a id="tocSmissingparametervalueexception"></a>
<a id="tocsmissingparametervalueexception"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
null
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

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ArchiveCreationOutput">ArchiveCreationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaarchivecreationoutput"></a>
<a id="schema_ArchiveCreationOutput"></a>
<a id="tocSarchivecreationoutput"></a>
<a id="tocsarchivecreationoutput"></a>

```json
{
  "archiveId": "kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw",
  "checksum": "969fb39823836d81f0cc028195fcdbcbbe76cdde932d4646fa7de5f21e18aa67",
  "location": "/0123456789012/vaults/my-vault/archives/kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw"
}
```

<p>Contains the Amazon S3 Glacier response to your request.</p> <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a>.</p>

<h2 id="tocS_CreateVaultOutput">CreateVaultOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevaultoutput"></a>
<a id="schema_CreateVaultOutput"></a>
<a id="tocScreatevaultoutput"></a>
<a id="tocscreatevaultoutput"></a>

```json
{
  "location": "/111122223333/vaults/my-vault"
}
```

Contains the Amazon S3 Glacier response to your request.

<h2 id="tocS_GlacierJobDescription">GlacierJobDescription</h2>
<!-- backwards compatibility -->
<a id="schemaglacierjobdescription"></a>
<a id="schema_GlacierJobDescription"></a>
<a id="tocSglacierjobdescription"></a>
<a id="tocsglacierjobdescription"></a>

```json
{
  "Action": "InventoryRetrieval",
  "Completed": false,
  "CreationDate": "2015-07-17T20:23:41.616Z",
  "InventoryRetrievalParameters": {
    "Format": "JSON"
  },
  "JobId": "zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4CnMW",
  "StatusCode": "InProgress",
  "VaultARN": "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault"
}
```

Contains the description of an Amazon S3 Glacier job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobDescription|object|false|none|none|
|Action|object|false|none|none|
|ArchiveId|object|false|none|none|
|VaultARN|object|false|none|none|
|CreationDate|object|false|none|none|
|Completed|object|false|none|none|
|StatusCode|object|false|none|none|
|StatusMessage|object|false|none|none|
|ArchiveSizeInBytes|object|false|none|none|
|InventorySizeInBytes|object|false|none|none|
|SNSTopic|object|false|none|none|
|CompletionDate|object|false|none|none|
|SHA256TreeHash|object|false|none|none|
|ArchiveSHA256TreeHash|object|false|none|none|
|RetrievalByteRange|object|false|none|none|
|Tier|object|false|none|none|
|InventoryRetrievalParameters|object|false|none|none|
|JobOutputPath|object|false|none|none|
|SelectParameters|object|false|none|none|
|OutputLocation|object|false|none|none|

<h2 id="tocS_DescribeVaultOutput">DescribeVaultOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevaultoutput"></a>
<a id="schema_DescribeVaultOutput"></a>
<a id="tocSdescribevaultoutput"></a>
<a id="tocsdescribevaultoutput"></a>

```json
{
  "CreationDate": "2016-09-23T19:27:18.665Z",
  "NumberOfArchives": 0,
  "SizeInBytes": 0,
  "VaultARN": "arn:aws:glacier:us-west-2:111122223333:vaults/my-vault",
  "VaultName": "my-vault"
}
```

Contains the Amazon S3 Glacier response to your request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VaultARN|object|false|none|none|
|VaultName|object|false|none|none|
|CreationDate|object|false|none|none|
|LastInventoryDate|object|false|none|none|
|NumberOfArchives|object|false|none|none|
|SizeInBytes|object|false|none|none|

<h2 id="tocS_GetDataRetrievalPolicyOutput">GetDataRetrievalPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetdataretrievalpolicyoutput"></a>
<a id="schema_GetDataRetrievalPolicyOutput"></a>
<a id="tocSgetdataretrievalpolicyoutput"></a>
<a id="tocsgetdataretrievalpolicyoutput"></a>

```json
{
  "Policy": {
    "Rules": [
      {
        "BytesPerHour": 10737418240,
        "Strategy": "BytesPerHour"
      }
    ]
  }
}
```

Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_GetJobOutputOutput">GetJobOutputOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetjoboutputoutput"></a>
<a id="schema_GetJobOutputOutput"></a>
<a id="tocSgetjoboutputoutput"></a>
<a id="tocsgetjoboutputoutput"></a>

```json
{
  "acceptRanges": "bytes",
  "body": "inventory-data",
  "contentType": "application/json",
  "status": 200
}
```

Contains the Amazon S3 Glacier response to your request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_GetVaultAccessPolicyOutput">GetVaultAccessPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetvaultaccesspolicyoutput"></a>
<a id="schema_GetVaultAccessPolicyOutput"></a>
<a id="tocSgetvaultaccesspolicyoutput"></a>
<a id="tocsgetvaultaccesspolicyoutput"></a>

```json
{
  "policy": {
    "Policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"Define-owner-access-rights\",\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::999999999999:root\"},\"Action\":\"glacier:DeleteArchive\",\"Resource\":\"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault\"}]}"
  }
}
```

Output for GetVaultAccessPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|false|none|none|

<h2 id="tocS_GetVaultLockOutput">GetVaultLockOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetvaultlockoutput"></a>
<a id="schema_GetVaultLockOutput"></a>
<a id="tocSgetvaultlockoutput"></a>
<a id="tocsgetvaultlockoutput"></a>

```json
{
  "CreationDate": "exampledate",
  "ExpirationDate": "exampledate",
  "Policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"Define-vault-lock\",\"Effect\":\"Deny\",\"Principal\":{\"AWS\":\"arn:aws:iam::999999999999:root\"},\"Action\":\"glacier:DeleteArchive\",\"Resource\":\"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault\",\"Condition\":{\"NumericLessThanEquals\":{\"glacier:ArchiveAgeinDays\":\"365\"}}}]}",
  "State": "InProgress"
}
```

Contains the Amazon S3 Glacier response to your request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|
|State|object|false|none|none|
|ExpirationDate|object|false|none|none|
|CreationDate|object|false|none|none|

<h2 id="tocS_GetVaultNotificationsOutput">GetVaultNotificationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetvaultnotificationsoutput"></a>
<a id="schema_GetVaultNotificationsOutput"></a>
<a id="tocSgetvaultnotificationsoutput"></a>
<a id="tocsgetvaultnotificationsoutput"></a>

```json
{
  "vaultNotificationConfig": {
    "Events": [
      "InventoryRetrievalCompleted",
      "ArchiveRetrievalCompleted"
    ],
    "SNSTopic": "arn:aws:sns:us-west-2:0123456789012:my-vault"
  }
}
```

Contains the Amazon S3 Glacier response to your request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vaultNotificationConfig|object|false|none|none|

<h2 id="tocS_InitiateJobOutput">InitiateJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemainitiatejoboutput"></a>
<a id="schema_InitiateJobOutput"></a>
<a id="tocSinitiatejoboutput"></a>
<a id="tocsinitiatejoboutput"></a>

```json
{
  "jobId": " HkF9p6o7yjhFx-K3CGl6fuSm6VzW9T7esGQfco8nUXVYwS0jlb5gq1JZ55yHgt5vP54ZShjoQzQVVh7vEXAMPLEjobID",
  "location": "/111122223333/vaults/examplevault/jobs/HkF9p6o7yjhFx-K3CGl6fuSm6VzW9T7esGQfco8nUXVYwS0jlb5gq1JZ55yHgt5vP54ZShjoQzQVVh7vEXAMPLEjobID"
}
```

Contains the Amazon S3 Glacier response to your request.

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_string"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_InventoryRetrievalJobInput">InventoryRetrievalJobInput</h2>
<!-- backwards compatibility -->
<a id="schemainventoryretrievaljobinput"></a>
<a id="schema_InventoryRetrievalJobInput"></a>
<a id="tocSinventoryretrievaljobinput"></a>
<a id="tocsinventoryretrievaljobinput"></a>

```json
{
  "StartDate": {},
  "EndDate": {},
  "Limit": {},
  "Marker": {}
}
```

Provides options for specifying a range inventory retrieval job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartDate|object|false|none|none|
|EndDate|object|false|none|none|
|Limit|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_SelectParameters">SelectParameters</h2>
<!-- backwards compatibility -->
<a id="schemaselectparameters"></a>
<a id="schema_SelectParameters"></a>
<a id="tocSselectparameters"></a>
<a id="tocsselectparameters"></a>

```json
{
  "InputSerialization": {
    "csv": {
      "FileHeaderInfo": {},
      "Comments": {},
      "QuoteEscapeCharacter": {},
      "RecordDelimiter": {},
      "FieldDelimiter": {},
      "QuoteCharacter": {}
    }
  },
  "ExpressionType": {},
  "Expression": {},
  "OutputSerialization": {
    "csv": {
      "QuoteFields": {},
      "QuoteEscapeCharacter": {},
      "RecordDelimiter": {},
      "FieldDelimiter": {},
      "QuoteCharacter": {}
    }
  }
}
```

Contains information about the parameters used for a select.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputSerialization|object|false|none|none|
|ExpressionType|object|false|none|none|
|Expression|object|false|none|none|
|OutputSerialization|object|false|none|none|

<h2 id="tocS_OutputLocation">OutputLocation</h2>
<!-- backwards compatibility -->
<a id="schemaoutputlocation"></a>
<a id="schema_OutputLocation"></a>
<a id="tocSoutputlocation"></a>
<a id="tocsoutputlocation"></a>

```json
{
  "S3": {
    "BucketName": {},
    "Prefix": {},
    "Encryption": {
      "EncryptionType": {},
      "KMSKeyId": {},
      "KMSContext": {}
    },
    "CannedACL": {},
    "AccessControlList": {},
    "Tagging": {
      "property1": "string",
      "property2": "string"
    },
    "UserMetadata": {
      "property1": "string",
      "property2": "string"
    },
    "StorageClass": {}
  }
}
```

Contains information about the location where the select job results are stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3|object|false|none|none|

<h2 id="tocS_PolicyEnforcedException">PolicyEnforcedException</h2>
<!-- backwards compatibility -->
<a id="schemapolicyenforcedexception"></a>
<a id="schema_PolicyEnforcedException"></a>
<a id="tocSpolicyenforcedexception"></a>
<a id="tocspolicyenforcedexception"></a>

```json
null
```

<h2 id="tocS_InsufficientCapacityException">InsufficientCapacityException</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientcapacityexception"></a>
<a id="schema_InsufficientCapacityException"></a>
<a id="tocSinsufficientcapacityexception"></a>
<a id="tocsinsufficientcapacityexception"></a>

```json
null
```

<h2 id="tocS_InitiateMultipartUploadOutput">InitiateMultipartUploadOutput</h2>
<!-- backwards compatibility -->
<a id="schemainitiatemultipartuploadoutput"></a>
<a id="schema_InitiateMultipartUploadOutput"></a>
<a id="tocSinitiatemultipartuploadoutput"></a>
<a id="tocsinitiatemultipartuploadoutput"></a>

```json
{
  "location": "/111122223333/vaults/my-vault/multipart-uploads/19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ",
  "uploadId": "19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ"
}
```

The Amazon S3 Glacier response to your request.

<h2 id="tocS_InitiateVaultLockOutput">InitiateVaultLockOutput</h2>
<!-- backwards compatibility -->
<a id="schemainitiatevaultlockoutput"></a>
<a id="schema_InitiateVaultLockOutput"></a>
<a id="tocSinitiatevaultlockoutput"></a>
<a id="tocsinitiatevaultlockoutput"></a>

```json
{
  "lockId": "AE863rKkWZU53SLW5be4DUcW"
}
```

Contains the Amazon S3 Glacier response to your request.

<h2 id="tocS_ListJobsOutput">ListJobsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsoutput"></a>
<a id="schema_ListJobsOutput"></a>
<a id="tocSlistjobsoutput"></a>
<a id="tocslistjobsoutput"></a>

```json
{
  "JobList": [
    {
      "Action": "ArchiveRetrieval",
      "ArchiveId": "kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw",
      "ArchiveSHA256TreeHash": "9628195fcdbcbbe76cdde932d4646fa7de5f219fb39823836d81f0cc0e18aa67",
      "ArchiveSizeInBytes": 3145728,
      "Completed": false,
      "CreationDate": "2015-07-17T21:16:13.840Z",
      "JobDescription": "Retrieve archive on 2015-07-17",
      "JobId": "l7IL5-EkXyEY9Ws95fClzIbk2O5uLYaFdAYOi-azsX_Z8V6NH4yERHzars8wTKYQMX6nBDI9cMNHzyZJO59-8N9aHWav",
      "RetrievalByteRange": "0-3145727",
      "SHA256TreeHash": "9628195fcdbcbbe76cdde932d4646fa7de5f219fb39823836d81f0cc0e18aa67",
      "SNSTopic": "arn:aws:sns:us-west-2:0123456789012:my-vault",
      "StatusCode": "InProgress",
      "VaultARN": "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault"
    },
    {
      "Action": "InventoryRetrieval",
      "Completed": false,
      "CreationDate": "2015-07-17T20:23:41.616Z",
      "InventoryRetrievalParameters": {
        "Format": "JSON"
      },
      "JobId": "zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4CnMW",
      "StatusCode": "InProgress",
      "VaultARN": "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault"
    }
  ]
}
```

Contains the Amazon S3 Glacier response to your request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobList|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListMultipartUploadsOutput">ListMultipartUploadsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistmultipartuploadsoutput"></a>
<a id="schema_ListMultipartUploadsOutput"></a>
<a id="tocSlistmultipartuploadsoutput"></a>
<a id="tocslistmultipartuploadsoutput"></a>

```json
{
  "Marker": "null",
  "UploadsList": [
    {
      "ArchiveDescription": "archive 1",
      "CreationDate": "2012-03-19T23:20:59.130Z",
      "MultipartUploadId": "xsQdFIRsfJr20CW2AbZBKpRZAFTZSJIMtL2hYf8mvp8dM0m4RUzlaqoEye6g3h3ecqB_zqwB7zLDMeSWhwo65re4C4Ev",
      "PartSizeInBytes": 4194304,
      "VaultARN": "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
    },
    {
      "ArchiveDescription": "archive 2",
      "CreationDate": "2012-04-01T15:00:00.000Z",
      "MultipartUploadId": "nPyGOnyFcx67qqX7E-0tSGiRi88hHMOwOxR-_jNyM6RjVMFfV29lFqZ3rNsSaWBugg6OP92pRtufeHdQH7ClIpSF6uJc",
      "PartSizeInBytes": 4194304,
      "VaultARN": "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
    },
    {
      "ArchiveDescription": "archive 3",
      "CreationDate": "2012-03-20T17:03:43.221Z",
      "MultipartUploadId": "qt-RBst_7yO8gVIonIBsAxr2t-db0pE4s8MNeGjKjGdNpuU-cdSAcqG62guwV9r5jh5mLyFPzFEitTpNE7iQfHiu1XoV",
      "PartSizeInBytes": 4194304,
      "VaultARN": "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
    }
  ]
}
```

Contains the Amazon S3 Glacier response to your request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UploadsList|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListPartsOutput">ListPartsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistpartsoutput"></a>
<a id="schema_ListPartsOutput"></a>
<a id="tocSlistpartsoutput"></a>
<a id="tocslistpartsoutput"></a>

```json
{
  "ArchiveDescription": "archive description",
  "CreationDate": "2012-03-20T17:03:43.221Z",
  "Marker": "null",
  "MultipartUploadId": "OW2fM5iVylEpFEMM9_HpKowRapC3vn5sSL39_396UW9zLFUWVrnRHaPjUJddQ5OxSHVXjYtrN47NBZ-khxOjyEXAMPLE",
  "PartSizeInBytes": 4194304,
  "Parts": [
    {
      "RangeInBytes": "0-4194303",
      "SHA256TreeHash": "01d34dabf7be316472c93b1ef80721f5d4"
    },
    {
      "RangeInBytes": "4194304-8388607",
      "SHA256TreeHash": "0195875365afda349fc21c84c099987164"
    }
  ],
  "VaultARN": "arn:aws:glacier:us-west-2:012345678901:vaults/demo1-vault"
}
```

Contains the Amazon S3 Glacier response to your request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MultipartUploadId|object|false|none|none|
|VaultARN|object|false|none|none|
|ArchiveDescription|object|false|none|none|
|PartSizeInBytes|object|false|none|none|
|CreationDate|object|false|none|none|
|Parts|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_ListProvisionedCapacityOutput">ListProvisionedCapacityOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistprovisionedcapacityoutput"></a>
<a id="schema_ListProvisionedCapacityOutput"></a>
<a id="tocSlistprovisionedcapacityoutput"></a>
<a id="tocslistprovisionedcapacityoutput"></a>

```json
{
  "ProvisionedCapacityList": [
    {
      "CapacityId": "zSaq7NzHFQDANTfQkDen4V7z",
      "ExpirationDate": "2016-12-12T00:00:00.000Z",
      "StartDate": "2016-11-11T20:11:51.095Z"
    },
    {
      "CapacityId": "yXaq7NzHFQNADTfQkDen4V7z",
      "ExpirationDate": "2017-01-15T00:00:00.000Z",
      "StartDate": "2016-12-13T20:11:51.095Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisionedCapacityList|object|false|none|none|

<h2 id="tocS_ListTagsForVaultOutput">ListTagsForVaultOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforvaultoutput"></a>
<a id="schema_ListTagsForVaultOutput"></a>
<a id="tocSlisttagsforvaultoutput"></a>
<a id="tocslisttagsforvaultoutput"></a>

```json
{
  "Tags": {
    "date": "july2015",
    "id": "1234"
  }
}
```

Contains the Amazon S3 Glacier response to your request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListVaultsOutput">ListVaultsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistvaultsoutput"></a>
<a id="schema_ListVaultsOutput"></a>
<a id="tocSlistvaultsoutput"></a>
<a id="tocslistvaultsoutput"></a>

```json
{
  "VaultList": [
    {
      "CreationDate": "2015-04-06T21:23:45.708Z",
      "LastInventoryDate": "2015-04-07T00:26:19.028Z",
      "NumberOfArchives": 1,
      "SizeInBytes": 3178496,
      "VaultARN": "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault",
      "VaultName": "my-vault"
    }
  ]
}
```

Contains the Amazon S3 Glacier response to your request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VaultList|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_PurchaseProvisionedCapacityOutput">PurchaseProvisionedCapacityOutput</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseprovisionedcapacityoutput"></a>
<a id="schema_PurchaseProvisionedCapacityOutput"></a>
<a id="tocSpurchaseprovisionedcapacityoutput"></a>
<a id="tocspurchaseprovisionedcapacityoutput"></a>

```json
{
  "capacityId": "zSaq7NzHFQDANTfQkDen4V7z"
}
```

<h2 id="tocS_DataRetrievalRulesList">DataRetrievalRulesList</h2>
<!-- backwards compatibility -->
<a id="schemadataretrievalruleslist"></a>
<a id="schema_DataRetrievalRulesList"></a>
<a id="tocSdataretrievalruleslist"></a>
<a id="tocsdataretrievalruleslist"></a>

```json
[
  {
    "Strategy": {},
    "BytesPerHour": {}
  }
]
```

<h2 id="tocS_NotificationEventList">NotificationEventList</h2>
<!-- backwards compatibility -->
<a id="schemanotificationeventlist"></a>
<a id="schema_NotificationEventList"></a>
<a id="tocSnotificationeventlist"></a>
<a id="tocsnotificationeventlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RequestTimeoutException">RequestTimeoutException</h2>
<!-- backwards compatibility -->
<a id="schemarequesttimeoutexception"></a>
<a id="schema_RequestTimeoutException"></a>
<a id="tocSrequesttimeoutexception"></a>
<a id="tocsrequesttimeoutexception"></a>

```json
null
```

<h2 id="tocS_UploadMultipartPartOutput">UploadMultipartPartOutput</h2>
<!-- backwards compatibility -->
<a id="schemauploadmultipartpartoutput"></a>
<a id="schema_UploadMultipartPartOutput"></a>
<a id="tocSuploadmultipartpartoutput"></a>
<a id="tocsuploadmultipartpartoutput"></a>

```json
{
  "checksum": "c06f7cd4baacb087002a99a5f48bf953"
}
```

Contains the Amazon S3 Glacier response to your request.

<h2 id="tocS_AbortMultipartUploadInput">AbortMultipartUploadInput</h2>
<!-- backwards compatibility -->
<a id="schemaabortmultipartuploadinput"></a>
<a id="schema_AbortMultipartUploadInput"></a>
<a id="tocSabortmultipartuploadinput"></a>
<a id="tocsabortmultipartuploadinput"></a>

```json
{}
```

<p>Provides options to abort a multipart upload identified by the upload ID.</p> <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart Upload</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a>.</p>

<h2 id="tocS_AbortVaultLockInput">AbortVaultLockInput</h2>
<!-- backwards compatibility -->
<a id="schemaabortvaultlockinput"></a>
<a id="schema_AbortVaultLockInput"></a>
<a id="tocSabortvaultlockinput"></a>
<a id="tocsabortvaultlockinput"></a>

```json
{}
```

The input values for <code>AbortVaultLock</code>.

<h2 id="tocS_Grant">Grant</h2>
<!-- backwards compatibility -->
<a id="schemagrant"></a>
<a id="schema_Grant"></a>
<a id="tocSgrant"></a>
<a id="tocsgrant"></a>

```json
{
  "Grantee": {
    "Type": {},
    "DisplayName": {},
    "URI": {},
    "ID": {},
    "EmailAddress": {}
  },
  "Permission": {}
}
```

Contains information about a grant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Grantee|object|false|none|none|
|Permission|object|false|none|none|

<h2 id="tocS_AccessControlPolicyList">AccessControlPolicyList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolpolicylist"></a>
<a id="schema_AccessControlPolicyList"></a>
<a id="tocSaccesscontrolpolicylist"></a>
<a id="tocsaccesscontrolpolicylist"></a>

```json
[
  {
    "Grantee": {
      "Type": {},
      "DisplayName": {},
      "URI": {},
      "ID": {},
      "EmailAddress": {}
    },
    "Permission": {}
  }
]
```

<h2 id="tocS_ActionCode">ActionCode</h2>
<!-- backwards compatibility -->
<a id="schemaactioncode"></a>
<a id="schema_ActionCode"></a>
<a id="tocSactioncode"></a>
<a id="tocsactioncode"></a>

```json
"ArchiveRetrieval"
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

<h2 id="tocS_AddTagsToVaultInput">AddTagsToVaultInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstovaultinput"></a>
<a id="schema_AddTagsToVaultInput"></a>
<a id="tocSaddtagstovaultinput"></a>
<a id="tocsaddtagstovaultinput"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

The input values for <code>AddTagsToVault</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_FileHeaderInfo">FileHeaderInfo</h2>
<!-- backwards compatibility -->
<a id="schemafileheaderinfo"></a>
<a id="schema_FileHeaderInfo"></a>
<a id="tocSfileheaderinfo"></a>
<a id="tocsfileheaderinfo"></a>

```json
"USE"
```

<h2 id="tocS_CSVInput">CSVInput</h2>
<!-- backwards compatibility -->
<a id="schemacsvinput"></a>
<a id="schema_CSVInput"></a>
<a id="tocScsvinput"></a>
<a id="tocscsvinput"></a>

```json
{
  "FileHeaderInfo": {},
  "Comments": {},
  "QuoteEscapeCharacter": {},
  "RecordDelimiter": {},
  "FieldDelimiter": {},
  "QuoteCharacter": {}
}
```

Contains information about the comma-separated value (CSV) file to select from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileHeaderInfo|object|false|none|none|
|Comments|object|false|none|none|
|QuoteEscapeCharacter|object|false|none|none|
|RecordDelimiter|object|false|none|none|
|FieldDelimiter|object|false|none|none|
|QuoteCharacter|object|false|none|none|

<h2 id="tocS_QuoteFields">QuoteFields</h2>
<!-- backwards compatibility -->
<a id="schemaquotefields"></a>
<a id="schema_QuoteFields"></a>
<a id="tocSquotefields"></a>
<a id="tocsquotefields"></a>

```json
"ALWAYS"
```

<h2 id="tocS_CSVOutput">CSVOutput</h2>
<!-- backwards compatibility -->
<a id="schemacsvoutput"></a>
<a id="schema_CSVOutput"></a>
<a id="tocScsvoutput"></a>
<a id="tocscsvoutput"></a>

```json
{
  "QuoteFields": {},
  "QuoteEscapeCharacter": {},
  "RecordDelimiter": {},
  "FieldDelimiter": {},
  "QuoteCharacter": {}
}
```

Contains information about the comma-separated value (CSV) file that the job results are stored in.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuoteFields|object|false|none|none|
|QuoteEscapeCharacter|object|false|none|none|
|RecordDelimiter|object|false|none|none|
|FieldDelimiter|object|false|none|none|
|QuoteCharacter|object|false|none|none|

<h2 id="tocS_CannedACL">CannedACL</h2>
<!-- backwards compatibility -->
<a id="schemacannedacl"></a>
<a id="schema_CannedACL"></a>
<a id="tocScannedacl"></a>
<a id="tocscannedacl"></a>

```json
"private"
```

<h2 id="tocS_CompleteMultipartUploadInput">CompleteMultipartUploadInput</h2>
<!-- backwards compatibility -->
<a id="schemacompletemultipartuploadinput"></a>
<a id="schema_CompleteMultipartUploadInput"></a>
<a id="tocScompletemultipartuploadinput"></a>
<a id="tocscompletemultipartuploadinput"></a>

```json
{}
```

Provides options to complete a multipart upload operation. This informs Amazon Glacier that all the archive parts have been uploaded and Amazon S3 Glacier (Glacier) can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Glacier returns the URI path of the newly created archive resource.

<h2 id="tocS_CompleteVaultLockInput">CompleteVaultLockInput</h2>
<!-- backwards compatibility -->
<a id="schemacompletevaultlockinput"></a>
<a id="schema_CompleteVaultLockInput"></a>
<a id="tocScompletevaultlockinput"></a>
<a id="tocscompletevaultlockinput"></a>

```json
{}
```

The input values for <code>CompleteVaultLock</code>.

<h2 id="tocS_CreateVaultInput">CreateVaultInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevaultinput"></a>
<a id="schema_CreateVaultInput"></a>
<a id="tocScreatevaultinput"></a>
<a id="tocscreatevaultinput"></a>

```json
{}
```

Provides options to create a vault.

<h2 id="tocS_DataRetrievalPolicy">DataRetrievalPolicy</h2>
<!-- backwards compatibility -->
<a id="schemadataretrievalpolicy"></a>
<a id="schema_DataRetrievalPolicy"></a>
<a id="tocSdataretrievalpolicy"></a>
<a id="tocsdataretrievalpolicy"></a>

```json
{
  "Rules": {}
}
```

Data retrieval policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|false|none|none|

<h2 id="tocS_NullableLong">NullableLong</h2>
<!-- backwards compatibility -->
<a id="schemanullablelong"></a>
<a id="schema_NullableLong"></a>
<a id="tocSnullablelong"></a>
<a id="tocsnullablelong"></a>

```json
0
```

<h2 id="tocS_DataRetrievalRule">DataRetrievalRule</h2>
<!-- backwards compatibility -->
<a id="schemadataretrievalrule"></a>
<a id="schema_DataRetrievalRule"></a>
<a id="tocSdataretrievalrule"></a>
<a id="tocsdataretrievalrule"></a>

```json
{
  "Strategy": {},
  "BytesPerHour": {}
}
```

Data retrieval policy rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Strategy|object|false|none|none|
|BytesPerHour|object|false|none|none|

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"string"
```

<h2 id="tocS_DeleteArchiveInput">DeleteArchiveInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletearchiveinput"></a>
<a id="schema_DeleteArchiveInput"></a>
<a id="tocSdeletearchiveinput"></a>
<a id="tocsdeletearchiveinput"></a>

```json
{}
```

Provides options for deleting an archive from an Amazon S3 Glacier vault.

<h2 id="tocS_DeleteVaultAccessPolicyInput">DeleteVaultAccessPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevaultaccesspolicyinput"></a>
<a id="schema_DeleteVaultAccessPolicyInput"></a>
<a id="tocSdeletevaultaccesspolicyinput"></a>
<a id="tocsdeletevaultaccesspolicyinput"></a>

```json
{}
```

DeleteVaultAccessPolicy input.

<h2 id="tocS_DeleteVaultInput">DeleteVaultInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevaultinput"></a>
<a id="schema_DeleteVaultInput"></a>
<a id="tocSdeletevaultinput"></a>
<a id="tocsdeletevaultinput"></a>

```json
{}
```

Provides options for deleting a vault from Amazon S3 Glacier.

<h2 id="tocS_DeleteVaultNotificationsInput">DeleteVaultNotificationsInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevaultnotificationsinput"></a>
<a id="schema_DeleteVaultNotificationsInput"></a>
<a id="tocSdeletevaultnotificationsinput"></a>
<a id="tocsdeletevaultnotificationsinput"></a>

```json
{}
```

Provides options for deleting a vault notification configuration from an Amazon Glacier vault.

<h2 id="tocS_DescribeJobInput">DescribeJobInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobinput"></a>
<a id="schema_DescribeJobInput"></a>
<a id="tocSdescribejobinput"></a>
<a id="tocsdescribejobinput"></a>

```json
{}
```

Provides options for retrieving a job description.

<h2 id="tocS_DescribeVaultInput">DescribeVaultInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevaultinput"></a>
<a id="schema_DescribeVaultInput"></a>
<a id="tocSdescribevaultinput"></a>
<a id="tocsdescribevaultinput"></a>

```json
{}
```

Provides options for retrieving metadata for a specific vault in Amazon Glacier.

<h2 id="tocS_long">long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_EncryptionType">EncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemaencryptiontype"></a>
<a id="schema_EncryptionType"></a>
<a id="tocSencryptiontype"></a>
<a id="tocsencryptiontype"></a>

```json
"aws:kms"
```

<h2 id="tocS_Encryption">Encryption</h2>
<!-- backwards compatibility -->
<a id="schemaencryption"></a>
<a id="schema_Encryption"></a>
<a id="tocSencryption"></a>
<a id="tocsencryption"></a>

```json
{
  "EncryptionType": {},
  "KMSKeyId": {},
  "KMSContext": {}
}
```

Contains information about the encryption used to store the job results in Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionType|object|false|none|none|
|KMSKeyId|object|false|none|none|
|KMSContext|object|false|none|none|

<h2 id="tocS_ExpressionType">ExpressionType</h2>
<!-- backwards compatibility -->
<a id="schemaexpressiontype"></a>
<a id="schema_ExpressionType"></a>
<a id="tocSexpressiontype"></a>
<a id="tocsexpressiontype"></a>

```json
"SQL"
```

<h2 id="tocS_GetDataRetrievalPolicyInput">GetDataRetrievalPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdataretrievalpolicyinput"></a>
<a id="schema_GetDataRetrievalPolicyInput"></a>
<a id="tocSgetdataretrievalpolicyinput"></a>
<a id="tocsgetdataretrievalpolicyinput"></a>

```json
{}
```

Input for GetDataRetrievalPolicy.

<h2 id="tocS_GetJobOutputInput">GetJobOutputInput</h2>
<!-- backwards compatibility -->
<a id="schemagetjoboutputinput"></a>
<a id="schema_GetJobOutputInput"></a>
<a id="tocSgetjoboutputinput"></a>
<a id="tocsgetjoboutputinput"></a>

```json
{}
```

Provides options for downloading output of an Amazon S3 Glacier job.

<h2 id="tocS_Stream">Stream</h2>
<!-- backwards compatibility -->
<a id="schemastream"></a>
<a id="schema_Stream"></a>
<a id="tocSstream"></a>
<a id="tocsstream"></a>

```json
"string"
```

<h2 id="tocS_httpstatus">httpstatus</h2>
<!-- backwards compatibility -->
<a id="schemahttpstatus"></a>
<a id="schema_httpstatus"></a>
<a id="tocShttpstatus"></a>
<a id="tocshttpstatus"></a>

```json
0
```

<h2 id="tocS_GetVaultAccessPolicyInput">GetVaultAccessPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemagetvaultaccesspolicyinput"></a>
<a id="schema_GetVaultAccessPolicyInput"></a>
<a id="tocSgetvaultaccesspolicyinput"></a>
<a id="tocsgetvaultaccesspolicyinput"></a>

```json
{}
```

Input for GetVaultAccessPolicy.

<h2 id="tocS_VaultAccessPolicy">VaultAccessPolicy</h2>
<!-- backwards compatibility -->
<a id="schemavaultaccesspolicy"></a>
<a id="schema_VaultAccessPolicy"></a>
<a id="tocSvaultaccesspolicy"></a>
<a id="tocsvaultaccesspolicy"></a>

```json
{
  "Policy": {}
}
```

Contains the vault access policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_GetVaultLockInput">GetVaultLockInput</h2>
<!-- backwards compatibility -->
<a id="schemagetvaultlockinput"></a>
<a id="schema_GetVaultLockInput"></a>
<a id="tocSgetvaultlockinput"></a>
<a id="tocsgetvaultlockinput"></a>

```json
{}
```

The input values for <code>GetVaultLock</code>.

<h2 id="tocS_GetVaultNotificationsInput">GetVaultNotificationsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetvaultnotificationsinput"></a>
<a id="schema_GetVaultNotificationsInput"></a>
<a id="tocSgetvaultnotificationsinput"></a>
<a id="tocsgetvaultnotificationsinput"></a>

```json
{}
```

Provides options for retrieving the notification configuration set on an Amazon Glacier vault.

<h2 id="tocS_VaultNotificationConfig">VaultNotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemavaultnotificationconfig"></a>
<a id="schema_VaultNotificationConfig"></a>
<a id="tocSvaultnotificationconfig"></a>
<a id="tocsvaultnotificationconfig"></a>

```json
{
  "SNSTopic": {},
  "Events": {}
}
```

Represents a vault's notification configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SNSTopic|object|false|none|none|
|Events|object|false|none|none|

<h2 id="tocS_boolean">boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_StatusCode">StatusCode</h2>
<!-- backwards compatibility -->
<a id="schemastatuscode"></a>
<a id="schema_StatusCode"></a>
<a id="tocSstatuscode"></a>
<a id="tocsstatuscode"></a>

```json
"InProgress"
```

<h2 id="tocS_Size">Size</h2>
<!-- backwards compatibility -->
<a id="schemasize"></a>
<a id="schema_Size"></a>
<a id="tocSsize"></a>
<a id="tocssize"></a>

```json
0
```

<h2 id="tocS_InventoryRetrievalJobDescription">InventoryRetrievalJobDescription</h2>
<!-- backwards compatibility -->
<a id="schemainventoryretrievaljobdescription"></a>
<a id="schema_InventoryRetrievalJobDescription"></a>
<a id="tocSinventoryretrievaljobdescription"></a>
<a id="tocsinventoryretrievaljobdescription"></a>

```json
{
  "Format": {},
  "StartDate": {},
  "EndDate": {},
  "Limit": {},
  "Marker": {}
}
```

Describes the options for a range inventory retrieval job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Format|object|false|none|none|
|StartDate|object|false|none|none|
|EndDate|object|false|none|none|
|Limit|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_Grantee">Grantee</h2>
<!-- backwards compatibility -->
<a id="schemagrantee"></a>
<a id="schema_Grantee"></a>
<a id="tocSgrantee"></a>
<a id="tocsgrantee"></a>

```json
{
  "Type": {},
  "DisplayName": {},
  "URI": {},
  "ID": {},
  "EmailAddress": {}
}
```

Contains information about the grantee.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|DisplayName|object|false|none|none|
|URI|object|false|none|none|
|ID|object|false|none|none|
|EmailAddress|object|false|none|none|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
"FULL_CONTROL"
```

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"AmazonCustomerByEmail"
```

<h2 id="tocS_JobParameters">JobParameters</h2>
<!-- backwards compatibility -->
<a id="schemajobparameters"></a>
<a id="schema_JobParameters"></a>
<a id="tocSjobparameters"></a>
<a id="tocsjobparameters"></a>

```json
{
  "Format": {},
  "Type": {},
  "ArchiveId": {},
  "Description": {},
  "SNSTopic": {},
  "RetrievalByteRange": {},
  "Tier": {},
  "InventoryRetrievalParameters": {
    "StartDate": {},
    "EndDate": {},
    "Limit": {},
    "Marker": {}
  },
  "SelectParameters": {
    "InputSerialization": {
      "csv": {
        "FileHeaderInfo": {},
        "Comments": {},
        "QuoteEscapeCharacter": {},
        "RecordDelimiter": {},
        "FieldDelimiter": {},
        "QuoteCharacter": {}
      }
    },
    "ExpressionType": {},
    "Expression": {},
    "OutputSerialization": {
      "csv": {
        "QuoteFields": {},
        "QuoteEscapeCharacter": {},
        "RecordDelimiter": {},
        "FieldDelimiter": {},
        "QuoteCharacter": {}
      }
    }
  },
  "OutputLocation": {
    "S3": {
      "BucketName": {},
      "Prefix": {},
      "Encryption": {
        "EncryptionType": {},
        "KMSKeyId": {},
        "KMSContext": {}
      },
      "CannedACL": {},
      "AccessControlList": {},
      "Tagging": {
        "property1": "string",
        "property2": "string"
      },
      "UserMetadata": {
        "property1": "string",
        "property2": "string"
      },
      "StorageClass": {}
    }
  }
}
```

Provides options for defining a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Format|object|false|none|none|
|Type|object|false|none|none|
|ArchiveId|object|false|none|none|
|Description|object|false|none|none|
|SNSTopic|object|false|none|none|
|RetrievalByteRange|object|false|none|none|
|Tier|object|false|none|none|
|InventoryRetrievalParameters|object|false|none|none|
|SelectParameters|object|false|none|none|
|OutputLocation|object|false|none|none|

<h2 id="tocS_InitiateJobInput">InitiateJobInput</h2>
<!-- backwards compatibility -->
<a id="schemainitiatejobinput"></a>
<a id="schema_InitiateJobInput"></a>
<a id="tocSinitiatejobinput"></a>
<a id="tocsinitiatejobinput"></a>

```json
{
  "jobParameters": {
    "Format": {},
    "Type": {},
    "ArchiveId": {},
    "Description": {},
    "SNSTopic": {},
    "RetrievalByteRange": {},
    "Tier": {},
    "InventoryRetrievalParameters": {
      "StartDate": {},
      "EndDate": {},
      "Limit": {},
      "Marker": {}
    },
    "SelectParameters": {
      "InputSerialization": {
        "csv": {
          "FileHeaderInfo": {},
          "Comments": {},
          "QuoteEscapeCharacter": {},
          "RecordDelimiter": {},
          "FieldDelimiter": {},
          "QuoteCharacter": {}
        }
      },
      "ExpressionType": {},
      "Expression": {},
      "OutputSerialization": {
        "csv": {
          "QuoteFields": {},
          "QuoteEscapeCharacter": {},
          "RecordDelimiter": {},
          "FieldDelimiter": {},
          "QuoteCharacter": {}
        }
      }
    },
    "OutputLocation": {
      "S3": {
        "BucketName": {},
        "Prefix": {},
        "Encryption": {
          "EncryptionType": {},
          "KMSKeyId": {},
          "KMSContext": {}
        },
        "CannedACL": {},
        "AccessControlList": {},
        "Tagging": {
          "property1": "string",
          "property2": "string"
        },
        "UserMetadata": {
          "property1": "string",
          "property2": "string"
        },
        "StorageClass": {}
      }
    }
  }
}
```

Provides options for initiating an Amazon S3 Glacier job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobParameters|object|false|none|none|

<h2 id="tocS_InitiateMultipartUploadInput">InitiateMultipartUploadInput</h2>
<!-- backwards compatibility -->
<a id="schemainitiatemultipartuploadinput"></a>
<a id="schema_InitiateMultipartUploadInput"></a>
<a id="tocSinitiatemultipartuploadinput"></a>
<a id="tocsinitiatemultipartuploadinput"></a>

```json
{}
```

Provides options for initiating a multipart upload to an Amazon S3 Glacier vault.

<h2 id="tocS_VaultLockPolicy">VaultLockPolicy</h2>
<!-- backwards compatibility -->
<a id="schemavaultlockpolicy"></a>
<a id="schema_VaultLockPolicy"></a>
<a id="tocSvaultlockpolicy"></a>
<a id="tocsvaultlockpolicy"></a>

```json
{
  "Policy": {}
}
```

Contains the vault lock policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_InitiateVaultLockInput">InitiateVaultLockInput</h2>
<!-- backwards compatibility -->
<a id="schemainitiatevaultlockinput"></a>
<a id="schema_InitiateVaultLockInput"></a>
<a id="tocSinitiatevaultlockinput"></a>
<a id="tocsinitiatevaultlockinput"></a>

```json
{
  "policy": {
    "Policy": {}
  }
}
```

The input values for <code>InitiateVaultLock</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|false|none|none|

<h2 id="tocS_InputSerialization">InputSerialization</h2>
<!-- backwards compatibility -->
<a id="schemainputserialization"></a>
<a id="schema_InputSerialization"></a>
<a id="tocSinputserialization"></a>
<a id="tocsinputserialization"></a>

```json
{
  "csv": {
    "FileHeaderInfo": {},
    "Comments": {},
    "QuoteEscapeCharacter": {},
    "RecordDelimiter": {},
    "FieldDelimiter": {},
    "QuoteCharacter": {}
  }
}
```

Describes how the archive is serialized.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csv|object|false|none|none|

<h2 id="tocS_JobList">JobList</h2>
<!-- backwards compatibility -->
<a id="schemajoblist"></a>
<a id="schema_JobList"></a>
<a id="tocSjoblist"></a>
<a id="tocsjoblist"></a>

```json
[
  {
    "Action": "InventoryRetrieval",
    "Completed": false,
    "CreationDate": "2015-07-17T20:23:41.616Z",
    "InventoryRetrievalParameters": {
      "Format": "JSON"
    },
    "JobId": "zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4CnMW",
    "StatusCode": "InProgress",
    "VaultARN": "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault"
  }
]
```

<h2 id="tocS_ListJobsInput">ListJobsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsinput"></a>
<a id="schema_ListJobsInput"></a>
<a id="tocSlistjobsinput"></a>
<a id="tocslistjobsinput"></a>

```json
{}
```

Provides options for retrieving a job list for an Amazon S3 Glacier vault.

<h2 id="tocS_ListMultipartUploadsInput">ListMultipartUploadsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistmultipartuploadsinput"></a>
<a id="schema_ListMultipartUploadsInput"></a>
<a id="tocSlistmultipartuploadsinput"></a>
<a id="tocslistmultipartuploadsinput"></a>

```json
{}
```

Provides options for retrieving list of in-progress multipart uploads for an Amazon Glacier vault.

<h2 id="tocS_UploadsList">UploadsList</h2>
<!-- backwards compatibility -->
<a id="schemauploadslist"></a>
<a id="schema_UploadsList"></a>
<a id="tocSuploadslist"></a>
<a id="tocsuploadslist"></a>

```json
[
  {
    "MultipartUploadId": {},
    "VaultARN": {},
    "ArchiveDescription": {},
    "PartSizeInBytes": {},
    "CreationDate": {}
  }
]
```

<h2 id="tocS_ListPartsInput">ListPartsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistpartsinput"></a>
<a id="schema_ListPartsInput"></a>
<a id="tocSlistpartsinput"></a>
<a id="tocslistpartsinput"></a>

```json
{}
```

Provides options for retrieving a list of parts of an archive that have been uploaded in a specific multipart upload.

<h2 id="tocS_PartList">PartList</h2>
<!-- backwards compatibility -->
<a id="schemapartlist"></a>
<a id="schema_PartList"></a>
<a id="tocSpartlist"></a>
<a id="tocspartlist"></a>

```json
[
  {
    "RangeInBytes": {},
    "SHA256TreeHash": {}
  }
]
```

<h2 id="tocS_ListProvisionedCapacityInput">ListProvisionedCapacityInput</h2>
<!-- backwards compatibility -->
<a id="schemalistprovisionedcapacityinput"></a>
<a id="schema_ListProvisionedCapacityInput"></a>
<a id="tocSlistprovisionedcapacityinput"></a>
<a id="tocslistprovisionedcapacityinput"></a>

```json
{}
```

<h2 id="tocS_ProvisionedCapacityList">ProvisionedCapacityList</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedcapacitylist"></a>
<a id="schema_ProvisionedCapacityList"></a>
<a id="tocSprovisionedcapacitylist"></a>
<a id="tocsprovisionedcapacitylist"></a>

```json
[
  {
    "CapacityId": {},
    "StartDate": {},
    "ExpirationDate": {}
  }
]
```

<h2 id="tocS_ListTagsForVaultInput">ListTagsForVaultInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforvaultinput"></a>
<a id="schema_ListTagsForVaultInput"></a>
<a id="tocSlisttagsforvaultinput"></a>
<a id="tocslisttagsforvaultinput"></a>

```json
{}
```

The input value for <code>ListTagsForVaultInput</code>.

<h2 id="tocS_ListVaultsInput">ListVaultsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistvaultsinput"></a>
<a id="schema_ListVaultsInput"></a>
<a id="tocSlistvaultsinput"></a>
<a id="tocslistvaultsinput"></a>

```json
{}
```

Provides options to retrieve the vault list owned by the calling user's account. The list provides metadata information for each vault.

<h2 id="tocS_VaultList">VaultList</h2>
<!-- backwards compatibility -->
<a id="schemavaultlist"></a>
<a id="schema_VaultList"></a>
<a id="tocSvaultlist"></a>
<a id="tocsvaultlist"></a>

```json
[
  {
    "CreationDate": "2016-09-23T19:27:18.665Z",
    "NumberOfArchives": 0,
    "SizeInBytes": 0,
    "VaultARN": "arn:aws:glacier:us-west-2:111122223333:vaults/my-vault",
    "VaultName": "my-vault"
  }
]
```

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
{
  "BucketName": {},
  "Prefix": {},
  "Encryption": {
    "EncryptionType": {},
    "KMSKeyId": {},
    "KMSContext": {}
  },
  "CannedACL": {},
  "AccessControlList": {},
  "Tagging": {
    "property1": "string",
    "property2": "string"
  },
  "UserMetadata": {
    "property1": "string",
    "property2": "string"
  },
  "StorageClass": {}
}
```

Contains information about the location in Amazon S3 where the select job results are stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|false|none|none|
|Prefix|object|false|none|none|
|Encryption|object|false|none|none|
|CannedACL|object|false|none|none|
|AccessControlList|object|false|none|none|
|Tagging|object|false|none|none|
|UserMetadata|object|false|none|none|
|StorageClass|object|false|none|none|

<h2 id="tocS_OutputSerialization">OutputSerialization</h2>
<!-- backwards compatibility -->
<a id="schemaoutputserialization"></a>
<a id="schema_OutputSerialization"></a>
<a id="tocSoutputserialization"></a>
<a id="tocsoutputserialization"></a>

```json
{
  "csv": {
    "QuoteFields": {},
    "QuoteEscapeCharacter": {},
    "RecordDelimiter": {},
    "FieldDelimiter": {},
    "QuoteCharacter": {}
  }
}
```

Describes how the select output is serialized.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csv|object|false|none|none|

<h2 id="tocS_PartListElement">PartListElement</h2>
<!-- backwards compatibility -->
<a id="schemapartlistelement"></a>
<a id="schema_PartListElement"></a>
<a id="tocSpartlistelement"></a>
<a id="tocspartlistelement"></a>

```json
{
  "RangeInBytes": {},
  "SHA256TreeHash": {}
}
```

A list of the part sizes of the multipart upload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RangeInBytes|object|false|none|none|
|SHA256TreeHash|object|false|none|none|

<h2 id="tocS_ProvisionedCapacityDescription">ProvisionedCapacityDescription</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedcapacitydescription"></a>
<a id="schema_ProvisionedCapacityDescription"></a>
<a id="tocSprovisionedcapacitydescription"></a>
<a id="tocsprovisionedcapacitydescription"></a>

```json
{
  "CapacityId": {},
  "StartDate": {},
  "ExpirationDate": {}
}
```

The definition for a provisioned capacity unit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CapacityId|object|false|none|none|
|StartDate|object|false|none|none|
|ExpirationDate|object|false|none|none|

<h2 id="tocS_PurchaseProvisionedCapacityInput">PurchaseProvisionedCapacityInput</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseprovisionedcapacityinput"></a>
<a id="schema_PurchaseProvisionedCapacityInput"></a>
<a id="tocSpurchaseprovisionedcapacityinput"></a>
<a id="tocspurchaseprovisionedcapacityinput"></a>

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

<h2 id="tocS_RemoveTagsFromVaultInput">RemoveTagsFromVaultInput</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromvaultinput"></a>
<a id="schema_RemoveTagsFromVaultInput"></a>
<a id="tocSremovetagsfromvaultinput"></a>
<a id="tocsremovetagsfromvaultinput"></a>

```json
{
  "TagKeys": {}
}
```

The input value for <code>RemoveTagsFromVaultInput</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKeys|object|false|none|none|

<h2 id="tocS_hashmap">hashmap</h2>
<!-- backwards compatibility -->
<a id="schemahashmap"></a>
<a id="schema_hashmap"></a>
<a id="tocShashmap"></a>
<a id="tocshashmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string](#schemastring)|false|none|none|

<h2 id="tocS_StorageClass">StorageClass</h2>
<!-- backwards compatibility -->
<a id="schemastorageclass"></a>
<a id="schema_StorageClass"></a>
<a id="tocSstorageclass"></a>
<a id="tocsstorageclass"></a>

```json
"STANDARD"
```

<h2 id="tocS_SetDataRetrievalPolicyInput">SetDataRetrievalPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemasetdataretrievalpolicyinput"></a>
<a id="schema_SetDataRetrievalPolicyInput"></a>
<a id="tocSsetdataretrievalpolicyinput"></a>
<a id="tocssetdataretrievalpolicyinput"></a>

```json
{
  "Policy": {
    "Rules": {}
  }
}
```

SetDataRetrievalPolicy input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_SetVaultAccessPolicyInput">SetVaultAccessPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemasetvaultaccesspolicyinput"></a>
<a id="schema_SetVaultAccessPolicyInput"></a>
<a id="tocSsetvaultaccesspolicyinput"></a>
<a id="tocssetvaultaccesspolicyinput"></a>

```json
{
  "policy": {
    "Policy": {}
  }
}
```

SetVaultAccessPolicy input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|false|none|none|

<h2 id="tocS_SetVaultNotificationsInput">SetVaultNotificationsInput</h2>
<!-- backwards compatibility -->
<a id="schemasetvaultnotificationsinput"></a>
<a id="schema_SetVaultNotificationsInput"></a>
<a id="tocSsetvaultnotificationsinput"></a>
<a id="tocssetvaultnotificationsinput"></a>

```json
{
  "vaultNotificationConfig": {
    "SNSTopic": {},
    "Events": {}
  }
}
```

Provides options to configure notifications that will be sent when specific events happen to a vault.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vaultNotificationConfig|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UploadArchiveInput">UploadArchiveInput</h2>
<!-- backwards compatibility -->
<a id="schemauploadarchiveinput"></a>
<a id="schema_UploadArchiveInput"></a>
<a id="tocSuploadarchiveinput"></a>
<a id="tocsuploadarchiveinput"></a>

```json
{
  "body": {}
}
```

Provides options to add an archive to a vault.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|false|none|none|

<h2 id="tocS_UploadListElement">UploadListElement</h2>
<!-- backwards compatibility -->
<a id="schemauploadlistelement"></a>
<a id="schema_UploadListElement"></a>
<a id="tocSuploadlistelement"></a>
<a id="tocsuploadlistelement"></a>

```json
{
  "MultipartUploadId": {},
  "VaultARN": {},
  "ArchiveDescription": {},
  "PartSizeInBytes": {},
  "CreationDate": {}
}
```

A list of in-progress multipart uploads for a vault.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MultipartUploadId|object|false|none|none|
|VaultARN|object|false|none|none|
|ArchiveDescription|object|false|none|none|
|PartSizeInBytes|object|false|none|none|
|CreationDate|object|false|none|none|

<h2 id="tocS_UploadMultipartPartInput">UploadMultipartPartInput</h2>
<!-- backwards compatibility -->
<a id="schemauploadmultipartpartinput"></a>
<a id="schema_UploadMultipartPartInput"></a>
<a id="tocSuploadmultipartpartinput"></a>
<a id="tocsuploadmultipartpartinput"></a>

```json
{
  "body": {}
}
```

Provides options to upload a part of an archive in a multipart upload operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|false|none|none|
