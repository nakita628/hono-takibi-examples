<h1 id="amazon-simple-storage-service">Amazon Simple Storage Service v2006-03-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p/>

Base URLs:

* <a href="http://s3.us-east-1.amazonaws.com">http://s3.us-east-1.amazonaws.com</a> - The Amazon S3 multi-region endpoint

* <a href="https://s3.us-east-1.amazonaws.com">https://s3.us-east-1.amazonaws.com</a> - The Amazon S3 multi-region endpoint

* <a href="http://s3.amazonaws.com">http://s3.amazonaws.com</a> - The general Amazon S3 endpoint for US East (N. Virginia)

* <a href="https://s3.amazonaws.com">https://s3.amazonaws.com</a> - The general Amazon S3 endpoint for US East (N. Virginia)

* <a href="http://s3.us-east-2.amazonaws.com">http://s3.us-east-2.amazonaws.com</a> - The Amazon S3 multi-region endpoint

* <a href="https://s3.us-east-2.amazonaws.com">https://s3.us-east-2.amazonaws.com</a> - The Amazon S3 multi-region endpoint

* <a href="http://s3.cn-north-1.amazonaws.com.cn">http://s3.cn-north-1.amazonaws.com.cn</a> - The Amazon S3 endpoint for China (Beijing) and China (Ningxia)

* <a href="https://s3.cn-north-1.amazonaws.com.cn">https://s3.cn-north-1.amazonaws.com.cn</a> - The Amazon S3 endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/s3/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon S3 signature

<h1 id="amazon-simple-storage-service-default">Default</h1>

## ListParts

<a id="opIdListParts"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#uploadId?uploadId=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}/{Key}#uploadId`

<p>Lists the parts that have been uploaded for a specific multipart upload. This operation must include the upload ID, which you obtain by sending the initiate multipart upload request (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>). This request returns a maximum of 1,000 uploaded parts. The default number of parts returned is 1,000 parts. You can restrict the number of parts returned by specifying the <code>max-parts</code> request parameter. If your multipart upload consists of more than 1,000 parts, the response returns an <code>IsTruncated</code> field with the value of true, and a <code>NextPartNumberMarker</code> element. In subsequent <code>ListParts</code> requests you can include the part-number-marker query string parameter and set its value to the <code>NextPartNumberMarker</code> field value from the previous response.</p> <p>If the upload was created using a checksum algorithm, you will need to have permission to the <code>kms:Decrypt</code> action for the request to succeed. </p> <p>For more information on multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html">Uploading Objects Using Multipart Upload</a>.</p> <p>For information on permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload and Permissions</a>.</p> <p>The following operations are related to <code>ListParts</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html">CompleteMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html">AbortMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html">ListMultipartUploads</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadListParts.html">External documentation</a>

<h3 id="listparts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The name of the bucket to which the parts are being uploaded. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|Object key for which the multipart upload was initiated.|
|max-parts|query|integer|false|Sets the maximum number of parts to return.|
|part-number-marker|query|integer|false|Specifies the part after which listing should begin. Only parts with higher part numbers will be listed.|
|uploadId|query|string|true|Upload ID identifying the multipart upload whose parts are being listed.|
|x-amz-request-payer|header|string|false|none|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-server-side-encryption-customer-algorithm|header|string|false|The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created using a checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-server-side-encryption-customer-key|header|string(password)|false|The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-server-side-encryption-customer-key-MD5|header|string|false|The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the <i>Amazon S3 User Guide</i>.|
|MaxParts|query|string|false|Pagination limit|
|PartNumberMarker|query|string|false|Pagination token|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|

<h3 id="listparts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPartsOutput](#schemalistpartsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CompleteMultipartUpload

<a id="opIdCompleteMultipartUpload"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#uploadId?uploadId=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CompleteMultipartUpload":{"Parts":{}}}'
```

`POST /{Bucket}/{Key}#uploadId`

<p>Completes a multipart upload by assembling previously uploaded parts.</p> <p>You first initiate the multipart upload and then upload all parts using the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a> operation. After successfully uploading all relevant parts of an upload, you call this action to complete the upload. Upon receiving this request, Amazon S3 concatenates all the parts in ascending order by part number to create a new object. In the Complete Multipart Upload request, you must provide the parts list. You must ensure that the parts list is complete. This action concatenates the parts that you provide in the list. For each part in the list, you must provide the part number and the <code>ETag</code> value, returned after that part was uploaded.</p> <p>Processing of a Complete Multipart Upload request could take several minutes to complete. After Amazon S3 begins processing the request, it sends an HTTP response header that specifies a 200 OK response. While processing is in progress, Amazon S3 periodically sends white space characters to keep the connection from timing out. A request could fail after the initial 200 OK response has been sent. This means that a <code>200 OK</code> response can contain either a success or an error. If you call the S3 API directly, make sure to design your application to parse the contents of the response and handle it appropriately. If you use Amazon Web Services SDKs, SDKs handle this condition. The SDKs detect the embedded error and apply error handling per your configuration settings (including automatically retrying the request as appropriate). If the condition persists, the SDKs throws an exception (or, for the SDKs that don't use exceptions, they return the error). </p> <p>Note that if <code>CompleteMultipartUpload</code> fails, applications should be prepared to retry the failed requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ErrorBestPractices.html">Amazon S3 Error Best Practices</a>.</p> <important> <p>You cannot use <code>Content-Type: application/x-www-form-urlencoded</code> with Complete Multipart Upload requests. Also, if you do not provide a <code>Content-Type</code> header, <code>CompleteMultipartUpload</code> returns a 200 OK response.</p> </important> <p>For more information about multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html">Uploading Objects Using Multipart Upload</a>.</p> <p>For information about permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload and Permissions</a>.</p> <p> <code>CompleteMultipartUpload</code> has the following special errors:</p> <ul> <li> <p>Error code: <code>EntityTooSmall</code> </p> <ul> <li> <p>Description: Your proposed upload is smaller than the minimum allowed object size. Each part must be at least 5 MB in size, except the last part.</p> </li> <li> <p>400 Bad Request</p> </li> </ul> </li> <li> <p>Error code: <code>InvalidPart</code> </p> <ul> <li> <p>Description: One or more of the specified parts could not be found. The part might not have been uploaded, or the specified entity tag might not have matched the part's entity tag.</p> </li> <li> <p>400 Bad Request</p> </li> </ul> </li> <li> <p>Error code: <code>InvalidPartOrder</code> </p> <ul> <li> <p>Description: The list of parts was not in ascending order. The parts list must be specified in order by part number.</p> </li> <li> <p>400 Bad Request</p> </li> </ul> </li> <li> <p>Error code: <code>NoSuchUpload</code> </p> <ul> <li> <p>Description: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.</p> </li> <li> <p>404 Not Found</p> </li> </ul> </li> </ul> <p>The following operations are related to <code>CompleteMultipartUpload</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html">AbortMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html">ListMultipartUploads</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadComplete.html">External documentation</a>

> Body parameter

```json
{
  "CompleteMultipartUpload": {
    "Parts": {}
  }
}
```

<h3 id="completemultipartupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>Name of the bucket to which the multipart upload was initiated.</p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|Object key for which the multipart upload was initiated.|
|uploadId|query|string|true|ID for the initiated multipart upload.|
|x-amz-checksum-crc32|header|string|false|This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 32-bit CRC32 checksum of the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-checksum-crc32c|header|string|false|This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 32-bit CRC32C checksum of the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-checksum-sha1|header|string|false|This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 160-bit SHA-1 digest of the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-checksum-sha256|header|string|false|This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 256-bit SHA-256 digest of the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-request-payer|header|string|false|none|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-server-side-encryption-customer-algorithm|header|string|false|The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created using a checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-server-side-encryption-customer-key|header|string(password)|false|The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-server-side-encryption-customer-key-MD5|header|string|false|The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» CompleteMultipartUpload|body|object|false|The container for the completed multipart upload details.|
|» » Parts|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|

<h3 id="completemultipartupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompleteMultipartUploadOutput](#schemacompletemultipartuploadoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AbortMultipartUpload

<a id="opIdAbortMultipartUpload"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#uploadId?uploadId=string' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}/{Key}#uploadId`

<p>This action aborts a multipart upload. After a multipart upload is aborted, no additional parts can be uploaded using that upload ID. The storage consumed by any previously uploaded parts will be freed. However, if any part uploads are currently in progress, those part uploads might or might not succeed. As a result, it might be necessary to abort a given multipart upload multiple times in order to completely free all storage consumed by all parts. </p> <p>To verify that all parts have been removed, so you don't get charged for the part storage, you should call the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a> action and ensure that the parts list is empty.</p> <p>For information about permissions required to use the multipart upload, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload and Permissions</a>.</p> <p>The following operations are related to <code>AbortMultipartUpload</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html">CompleteMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html">ListMultipartUploads</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadAbort.html">External documentation</a>

<h3 id="abortmultipartupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name to which the upload was taking place. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|Key of the object for which the multipart upload was initiated.|
|uploadId|query|string|true|Upload ID that identifies the multipart upload.|
|x-amz-request-payer|header|string|false|none|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|

<h3 id="abortmultipartupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[AbortMultipartUploadOutput](#schemaabortmultipartuploadoutput)|
|480|480|NoSuchUpload|[NoSuchUpload](#schemanosuchupload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CopyObject

<a id="opIdCopyObject"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#x-amz-copy-source' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-copy-source: string' \
  -d '{"x-amz-meta-":{"property1":"string","property2":"string"}}'
```

`PUT /{Bucket}/{Key}#x-amz-copy-source`

<p>Creates a copy of an object that is already stored in Amazon S3.</p> <note> <p>You can store individual objects of up to 5 TB in Amazon S3. You create a copy of your object up to 5 GB in size in a single atomic action using this API. However, to copy an object greater than 5 GB, you must use the multipart upload Upload Part - Copy (UploadPartCopy) API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/CopyingObjctsUsingRESTMPUapi.html">Copy Object Using the REST Multipart Upload API</a>.</p> </note> <p>All copy requests must be authenticated. Additionally, you must have <i>read</i> access to the source object and <i>write</i> access to the destination bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST Authentication</a>. Both the Region that you want to copy the object from and the Region that you want to copy the object to must be enabled for your account.</p> <p>A copy request might return an error when Amazon S3 receives the copy request or while Amazon S3 is copying the files. If the error occurs before the copy action starts, you receive a standard Amazon S3 error. If the error occurs during the copy operation, the error response is embedded in the <code>200 OK</code> response. This means that a <code>200 OK</code> response can contain either a success or an error. If you call the S3 API directly, make sure to design your application to parse the contents of the response and handle it appropriately. If you use Amazon Web Services SDKs, SDKs handle this condition. The SDKs detect the embedded error and apply error handling per your configuration settings (including automatically retrying the request as appropriate). If the condition persists, the SDKs throws an exception (or, for the SDKs that don't use exceptions, they return the error).</p> <p>If the copy is successful, you receive a response with information about the copied object.</p> <note> <p>If the request is an HTTP 1.1 request, the response is chunk encoded. If it were not, it would not contain the content-length, and you would need to read the entire body.</p> </note> <p>The copy request charge is based on the storage class and Region that you specify for the destination object. The request can also result in a data retrieval charge for the source if the source storage class bills for data retrieval. For pricing information, see <a href="http://aws.amazon.com/s3/pricing/">Amazon S3 pricing</a>.</p> <important> <p>Amazon S3 transfer acceleration does not support cross-Region copies. If you request a cross-Region copy using a transfer acceleration endpoint, you get a 400 <code>Bad Request</code> error. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Transfer Acceleration</a>.</p> </important> <dl> <dt>Metadata</dt> <dd> <p>When copying an object, you can preserve all metadata (the default) or specify new metadata. However, the access control list (ACL) is not preserved and is set to private for the user making the request. To override the default ACL setting, specify a new ACL when generating a copy request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3_ACLs_UsingACLs.html">Using ACLs</a>. </p> <p>To specify whether you want the object metadata copied from the source object or replaced with metadata provided in the request, you can optionally add the <code>x-amz-metadata-directive</code> header. When you grant permissions, you can use the <code>s3:x-amz-metadata-directive</code> condition key to enforce certain metadata behavior when objects are uploaded. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html">Specifying Conditions in a Policy</a> in the <i>Amazon S3 User Guide</i>. For a complete list of Amazon S3-specific condition keys, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/list_amazons3.html">Actions, Resources, and Condition Keys for Amazon S3</a>.</p> <note> <p> <code>x-amz-website-redirect-location</code> is unique to each object and must be specified in the request headers to copy the value.</p> </note> </dd> <dt>x-amz-copy-source-if Headers</dt> <dd> <p>To only copy an object under certain conditions, such as whether the <code>Etag</code> matches or whether the object was modified before or after a specified date, use the following request parameters:</p> <ul> <li> <p> <code>x-amz-copy-source-if-match</code> </p> </li> <li> <p> <code>x-amz-copy-source-if-none-match</code> </p> </li> <li> <p> <code>x-amz-copy-source-if-unmodified-since</code> </p> </li> <li> <p> <code>x-amz-copy-source-if-modified-since</code> </p> </li> </ul> <p> If both the <code>x-amz-copy-source-if-match</code> and <code>x-amz-copy-source-if-unmodified-since</code> headers are present in the request and evaluate as follows, Amazon S3 returns <code>200 OK</code> and copies the data:</p> <ul> <li> <p> <code>x-amz-copy-source-if-match</code> condition evaluates to true</p> </li> <li> <p> <code>x-amz-copy-source-if-unmodified-since</code> condition evaluates to false</p> </li> </ul> <p>If both the <code>x-amz-copy-source-if-none-match</code> and <code>x-amz-copy-source-if-modified-since</code> headers are present in the request and evaluate as follows, Amazon S3 returns the <code>412 Precondition Failed</code> response code:</p> <ul> <li> <p> <code>x-amz-copy-source-if-none-match</code> condition evaluates to false</p> </li> <li> <p> <code>x-amz-copy-source-if-modified-since</code> condition evaluates to true</p> </li> </ul> <note> <p>All headers with the <code>x-amz-</code> prefix, including <code>x-amz-copy-source</code>, must be signed.</p> </note> </dd> <dt>Server-side encryption</dt> <dd> <p>Amazon S3 automatically encrypts all new objects that are copied to an S3 bucket. When copying an object, if you don't specify encryption information in your copy request, the encryption setting of the target object is set to the default encryption configuration of the destination bucket. By default, all buckets have a base level of encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). If the destination bucket has a default encryption configuration that uses server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), or server-side encryption with customer-provided encryption keys (SSE-C), Amazon S3 uses the corresponding KMS key, or a customer-provided key to encrypt the target object copy.</p> <p>When you perform a <code>CopyObject</code> operation, if you want to use a different type of encryption setting for the target object, you can use other appropriate encryption-related headers to encrypt the target object with a KMS key, an Amazon S3 managed key, or a customer-provided key. With server-side encryption, Amazon S3 encrypts your data as it writes your data to disks in its data centers and decrypts the data when you access it. If the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence. If the source object for the copy is stored in Amazon S3 using SSE-C, you must provide the necessary encryption information in your request so that Amazon S3 can decrypt the object for copying. For more information about server-side encryption, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">Using Server-Side Encryption</a>.</p> <p>If a target object uses SSE-KMS, you can enable an S3 Bucket Key for the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html">Amazon S3 Bucket Keys</a> in the <i>Amazon S3 User Guide</i>.</p> </dd> <dt>Access Control List (ACL)-Specific Request Headers</dt> <dd> <p>When copying an object, you can optionally use headers to grant ACL-based permissions. By default, all objects are private. Only the owner has full access control. When adding a new object, you can grant permissions to individual Amazon Web Services accounts or to predefined groups that are defined by Amazon S3. These permissions are then added to the ACL on the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL) Overview</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-using-rest-api.html">Managing ACLs Using the REST API</a>. </p> <p>If the bucket that you're copying objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept <code>PUT</code> requests that don't specify an ACL or <code>PUT</code> requests that specify bucket owner full control ACLs, such as the <code>bucket-owner-full-control</code> canned ACL or an equivalent form of this ACL expressed in the XML format.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html"> Controlling ownership of objects and disabling ACLs</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>If your bucket uses the bucket owner enforced setting for Object Ownership, all objects written to the bucket by any account will be owned by the bucket owner.</p> </note> </dd> <dt>Checksums</dt> <dd> <p>When copying an object, if it has a checksum, that checksum will be copied to the new object by default. When you copy the object over, you can optionally specify a different checksum algorithm to use with the <code>x-amz-checksum-algorithm</code> header.</p> </dd> <dt>Storage Class Options</dt> <dd> <p>You can use the <code>CopyObject</code> action to change the storage class of an object that is already stored in Amazon S3 by using the <code>StorageClass</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If the source object's storage class is GLACIER, you must restore a copy of this object before you can use it as a source object for the copy operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html">RestoreObject</a>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/CopyingObjectsExamples.html">Copying Objects</a>.</p> </dd> <dt>Versioning</dt> <dd> <p>By default, <code>x-amz-copy-source</code> header identifies the current version of an object to copy. If the current version is a delete marker, Amazon S3 behaves as if the object was deleted. To copy a different version, use the <code>versionId</code> subresource.</p> <p>If you enable versioning on the target bucket, Amazon S3 generates a unique version ID for the object being copied. This version ID is different from the version ID of the source object. Amazon S3 returns the version ID of the copied object in the <code>x-amz-version-id</code> response header in the response.</p> <p>If you do not enable versioning or suspend it on the target bucket, the version ID that Amazon S3 generates is always null.</p> </dd> </dl> <p>The following operations are related to <code>CopyObject</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectCOPY.html">External documentation</a>

> Body parameter

```json
{
  "x-amz-meta-": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="copyobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-acl|header|string|false|<p>The canned ACL to apply to the object.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|Bucket|path|string|true|<p>The name of the destination bucket.</p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Cache-Control|header|string|false|Specifies caching behavior along the request/reply chain.|
|x-amz-checksum-algorithm|header|string|false|Indicates the algorithm you want Amazon S3 to use to create the checksum for the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|Content-Disposition|header|string|false|Specifies presentational information for the object.|
|Content-Encoding|header|string|false|Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.|
|Content-Language|header|string|false|The language the content is in.|
|Content-Type|header|string|false|A standard MIME type describing the format of the object data.|
|x-amz-copy-source|header|string|true|<p>Specifies the source object for the copy operation. You specify the value in one of two formats, depending on whether you want to access the source object through an <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">access point</a>:</p> <ul> <li> <p>For objects not accessed through an access point, specify the name of the source bucket and the key of the source object, separated by a slash (/). For example, to copy the object <code>reports/january.pdf</code> from the bucket <code>awsexamplebucket</code>, use <code>awsexamplebucket/reports/january.pdf</code>. The value must be URL-encoded.</p> </li> <li> <p>For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format <code>arn:aws:s3:&lt;Region&gt;:&lt;account-id&gt;:accesspoint/&lt;access-point-name&gt;/object/&lt;key&gt;</code>. For example, to copy the object <code>reports/january.pdf</code> through access point <code>my-access-point</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf</code>. The value must be URL encoded.</p> <note> <p>Amazon S3 supports copy operations using access points only when the source and destination buckets are in the same Amazon Web Services Region.</p> </note> <p>Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/object/&lt;key&gt;</code>. For example, to copy the object <code>reports/january.pdf</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf</code>. The value must be URL-encoded. </p> </li> </ul> <p>To copy a specific version of an object, append <code>?versionId=&lt;version-id&gt;</code> to the value (for example, <code>awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893</code>). If you don't specify a version ID, Amazon S3 copies the latest version of the source object.</p>|
|x-amz-copy-source-if-match|header|string|false|Copies the object if its entity tag (ETag) matches the specified tag.|
|x-amz-copy-source-if-modified-since|header|string(date-time)|false|Copies the object if it has been modified since the specified time.|
|x-amz-copy-source-if-none-match|header|string|false|Copies the object if its entity tag (ETag) is different than the specified ETag.|
|x-amz-copy-source-if-unmodified-since|header|string(date-time)|false|Copies the object if it hasn't been modified since the specified time.|
|Expires|header|string(date-time)|false|The date and time at which the object is no longer cacheable.|
|x-amz-grant-full-control|header|string|false|<p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|x-amz-grant-read|header|string|false|<p>Allows grantee to read the object data and its metadata.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|x-amz-grant-read-acp|header|string|false|<p>Allows grantee to read the object ACL.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|x-amz-grant-write-acp|header|string|false|<p>Allows grantee to write the ACL for the applicable object.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|Key|path|string|true|The key of the destination object.|
|x-amz-metadata-directive|header|string|false|Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request.|
|x-amz-tagging-directive|header|string|false|Specifies whether the object tag-set are copied from the source object or replaced with tag-set provided in the request.|
|x-amz-server-side-encryption|header|string|false|The server-side encryption algorithm used when storing this object in Amazon S3 (for example, <code>AES256</code>, <code>aws:kms</code>, <code>aws:kms:dsse</code>).|
|x-amz-storage-class|header|string|false|By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-website-redirect-location|header|string|false|If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. This value is unique to each object and is not copied when using the <code>x-amz-metadata-directive</code> header. Instead, you may opt to provide this header in combination with the directive.|
|x-amz-server-side-encryption-customer-algorithm|header|string|false|Specifies the algorithm to use to when encrypting the object (for example, AES256).|
|x-amz-server-side-encryption-customer-key|header|string(password)|false|Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the <code>x-amz-server-side-encryption-customer-algorithm</code> header.|
|x-amz-server-side-encryption-customer-key-MD5|header|string|false|Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.|
|x-amz-server-side-encryption-aws-kms-key-id|header|string(password)|false|Specifies the KMS key ID to use for object encryption. All GET and PUT requests for an object protected by KMS will fail if they're not made via SSL or using SigV4. For information about configuring any of the officially supported Amazon Web Services SDKs and Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version">Specifying the Signature Version in Request Authentication</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-server-side-encryption-context|header|string(password)|false|Specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.|
|x-amz-server-side-encryption-bucket-key-enabled|header|boolean|false|<p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). Setting this header to <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. </p> <p>Specifying this header with a COPY action doesn’t affect bucket-level settings for S3 Bucket Key.</p>|
|x-amz-copy-source-server-side-encryption-customer-algorithm|header|string|false|Specifies the algorithm to use when decrypting the source object (for example, AES256).|
|x-amz-copy-source-server-side-encryption-customer-key|header|string(password)|false|Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.|
|x-amz-copy-source-server-side-encryption-customer-key-MD5|header|string|false|Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.|
|x-amz-request-payer|header|string|false|none|
|x-amz-tagging|header|string|false|The tag-set for the object destination object this value must be used in conjunction with the <code>TaggingDirective</code>. The tag-set must be encoded as URL Query parameters.|
|x-amz-object-lock-mode|header|string|false|The Object Lock mode that you want to apply to the copied object.|
|x-amz-object-lock-retain-until-date|header|string(date-time)|false|The date and time when you want the copied object's Object Lock to expire.|
|x-amz-object-lock-legal-hold|header|string|false|Specifies whether you want to apply a legal hold to the copied object.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected destination bucket owner. If the destination bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-source-expected-bucket-owner|header|string|false|The account ID of the expected source bucket owner. If the source bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» x-amz-meta-|body|object|false|A map of metadata to store with the object in S3.|
|» » **additionalProperties**|body|[MetadataValue](#schemametadatavalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-acl|private|
|x-amz-acl|public-read|
|x-amz-acl|public-read-write|
|x-amz-acl|authenticated-read|
|x-amz-acl|aws-exec-read|
|x-amz-acl|bucket-owner-read|
|x-amz-acl|bucket-owner-full-control|
|x-amz-checksum-algorithm|CRC32|
|x-amz-checksum-algorithm|CRC32C|
|x-amz-checksum-algorithm|SHA1|
|x-amz-checksum-algorithm|SHA256|
|x-amz-metadata-directive|COPY|
|x-amz-metadata-directive|REPLACE|
|x-amz-tagging-directive|COPY|
|x-amz-tagging-directive|REPLACE|
|x-amz-server-side-encryption|AES256|
|x-amz-server-side-encryption|aws:kms|
|x-amz-server-side-encryption|aws:kms:dsse|
|x-amz-storage-class|STANDARD|
|x-amz-storage-class|REDUCED_REDUNDANCY|
|x-amz-storage-class|STANDARD_IA|
|x-amz-storage-class|ONEZONE_IA|
|x-amz-storage-class|INTELLIGENT_TIERING|
|x-amz-storage-class|GLACIER|
|x-amz-storage-class|DEEP_ARCHIVE|
|x-amz-storage-class|OUTPOSTS|
|x-amz-storage-class|GLACIER_IR|
|x-amz-storage-class|SNOW|
|x-amz-request-payer|requester|
|x-amz-object-lock-mode|GOVERNANCE|
|x-amz-object-lock-mode|COMPLIANCE|
|x-amz-object-lock-legal-hold|ON|
|x-amz-object-lock-legal-hold|OFF|

<h3 id="copyobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopyObjectOutput](#schemacopyobjectoutput)|
|480|480|ObjectNotInActiveTierError|[ObjectNotInActiveTierError](#schemaobjectnotinactivetiererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListObjects

<a id="opIdListObjects"></a>

> Code samples

```bash
curl https://s3.amazonaws.com/string \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}`

<p>Returns some or all (up to 1,000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Be sure to design your application to parse the contents of the response and handle it appropriately.</p> <important> <p>This action has been revised. We recommend that you use the newer version, <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html">ListObjectsV2</a>, when developing applications. For backward compatibility, Amazon S3 continues to support <code>ListObjects</code>.</p> </important> <p>The following operations are related to <code>ListObjects</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html">ListObjectsV2</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html">ListBuckets</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGET.html">External documentation</a>

<h3 id="listobjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The name of the bucket containing the objects.</p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|delimiter|query|string|false|A delimiter is a character that you use to group keys.|
|encoding-type|query|string|false|none|
|marker|query|string|false|Marker is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. Marker can be any key in the bucket.|
|max-keys|query|integer|false|Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more. |
|prefix|query|string|false|Limits the response to keys that begin with the specified prefix.|
|x-amz-request-payer|header|string|false|Confirms that the requester knows that she or he will be charged for the list objects request. Bucket owners need not specify this parameter in their requests.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-optional-object-attributes|header|[[OptionalObjectAttributes](#schemaoptionalobjectattributes)]|false|Specifies the optional fields that you want returned in the response. Fields that you do not specify are not returned.|
|MaxKeys|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|encoding-type|url|
|x-amz-request-payer|requester|
|x-amz-optional-object-attributes|RestoreStatus|

<h3 id="listobjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListObjectsOutput](#schemalistobjectsoutput)|
|480|480|NoSuchBucket|[NoSuchBucket](#schemanosuchbucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBucket

<a id="opIdCreateBucket"></a>

> Code samples

```bash
curl https://s3.amazonaws.com/string \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CreateBucketConfiguration":{"LocationConstraint":{}}}'
```

`PUT /{Bucket}`

<p>Creates a new S3 bucket. To create a bucket, you must register with Amazon S3 and have a valid Amazon Web Services Access Key ID to authenticate requests. Anonymous requests are never allowed to create buckets. By creating the bucket, you become the bucket owner.</p> <p>Not every string is an acceptable bucket name. For information about bucket naming restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">Bucket naming rules</a>.</p> <p>If you want to create an Amazon S3 on Outposts bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">Create Bucket</a>. </p> <p>By default, the bucket is created in the US East (N. Virginia) Region. You can optionally specify a Region in the request body. You might choose a Region to optimize latency, minimize costs, or address regulatory requirements. For example, if you reside in Europe, you will probably find it advantageous to create buckets in the Europe (Ireland) Region. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro">Accessing a bucket</a>.</p> <note> <p>If you send your create bucket request to the <code>s3.amazonaws.com</code> endpoint, the request goes to the <code>us-east-1</code> Region. Accordingly, the signature calculations in Signature Version 4 must use <code>us-east-1</code> as the Region, even if the location constraint in the request specifies another Region where the bucket is to be created. If you create a bucket in a Region other than US East (N. Virginia), your application must be able to handle 307 redirect. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html">Virtual hosting of buckets</a>.</p> </note> <dl> <dt>Permissions</dt> <dd> <p>In addition to <code>s3:CreateBucket</code>, the following permissions are required when your <code>CreateBucket</code> request includes specific headers:</p> <ul> <li> <p> <b>Access control lists (ACLs)</b> - If your <code>CreateBucket</code> request specifies access control list (ACL) permissions and the ACL is public-read, public-read-write, authenticated-read, or if you specify access permissions explicitly through any other ACL, both <code>s3:CreateBucket</code> and <code>s3:PutBucketAcl</code> permissions are needed. If the ACL for the <code>CreateBucket</code> request is private or if the request doesn't specify any ACLs, only <code>s3:CreateBucket</code> permission is needed. </p> </li> <li> <p> <b>Object Lock</b> - If <code>ObjectLockEnabledForBucket</code> is set to true in your <code>CreateBucket</code> request, <code>s3:PutBucketObjectLockConfiguration</code> and <code>s3:PutBucketVersioning</code> permissions are required.</p> </li> <li> <p> <b>S3 Object Ownership</b> - If your <code>CreateBucket</code> request includes the <code>x-amz-object-ownership</code> header, then the <code>s3:PutBucketOwnershipControls</code> permission is required. By default, <code>ObjectOwnership</code> is set to <code>BucketOWnerEnforced</code> and ACLs are disabled. We recommend keeping ACLs disabled, except in uncommon use cases where you must control access for each object individually. If you want to change the <code>ObjectOwnership</code> setting, you can use the <code>x-amz-object-ownership</code> header in your <code>CreateBucket</code> request to set the <code>ObjectOwnership</code> setting of your choice. For more information about S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling object ownership </a> in the <i>Amazon S3 User Guide</i>.</p> </li> <li> <p> <b>S3 Block Public Access</b> - If your specific use case requires granting public access to your S3 resources, you can disable Block Public Access. You can create a new bucket with Block Public Access enabled, then separately call the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeletePublicAccessBlock.html"> <code>DeletePublicAccessBlock</code> </a> API. To use this operation, you must have the <code>s3:PutBucketPublicAccessBlock</code> permission. By default, all Block Public Access settings are enabled for new buckets. To avoid inadvertent exposure of your resources, we recommend keeping the S3 Block Public Access settings enabled. For more information about S3 Block Public Access, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Blocking public access to your Amazon S3 storage </a> in the <i>Amazon S3 User Guide</i>. </p> </li> </ul> </dd> </dl> <important> <p> If your <code>CreateBucket</code> request sets <code>BucketOwnerEnforced</code> for Amazon S3 Object Ownership and specifies a bucket ACL that provides access to an external Amazon Web Services account, your request fails with a <code>400</code> error and returns the <code>InvalidBucketAcLWithObjectOwnership</code> error code. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-ownership-existing-bucket.html">Setting Object Ownership on an existing bucket </a> in the <i>Amazon S3 User Guide</i>. </p> </important> <p>The following operations are related to <code>CreateBucket</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUT.html">External documentation</a>

> Body parameter

```json
{
  "CreateBucketConfiguration": {
    "LocationConstraint": {}
  }
}
```

<h3 id="createbucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-acl|header|string|false|The canned ACL to apply to the bucket.|
|Bucket|path|string|true|The name of the bucket to create.|
|x-amz-grant-full-control|header|string|false|Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.|
|x-amz-grant-read|header|string|false|Allows grantee to list the objects in the bucket.|
|x-amz-grant-read-acp|header|string|false|Allows grantee to read the bucket ACL.|
|x-amz-grant-write|header|string|false|<p>Allows grantee to create new objects in the bucket.</p> <p>For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects.</p>|
|x-amz-grant-write-acp|header|string|false|Allows grantee to write the ACL for the applicable bucket.|
|x-amz-bucket-object-lock-enabled|header|boolean|false|Specifies whether you want S3 Object Lock to be enabled for the new bucket.|
|x-amz-object-ownership|header|string|false|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» CreateBucketConfiguration|body|object|false|The configuration information for the bucket.|
|» » LocationConstraint|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-acl|private|
|x-amz-acl|public-read|
|x-amz-acl|public-read-write|
|x-amz-acl|authenticated-read|
|x-amz-object-ownership|BucketOwnerPreferred|
|x-amz-object-ownership|ObjectWriter|
|x-amz-object-ownership|BucketOwnerEnforced|

<h3 id="createbucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBucketOutput](#schemacreatebucketoutput)|
|480|480|BucketAlreadyExists|[BucketAlreadyExists](#schemabucketalreadyexists)|
|481|481|BucketAlreadyOwnedByYou|[BucketAlreadyOwnedByYou](#schemabucketalreadyownedbyyou)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucket

<a id="opIdDeleteBucket"></a>

> Code samples

```bash
curl https://s3.amazonaws.com/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}`

<p>Deletes the S3 bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted.</p> <p>The following operations are related to <code>DeleteBucket</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETE.html">External documentation</a>

<h3 id="deletebucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|Specifies the bucket being deleted.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-security-token|header|string|false|none|

<h3 id="deletebucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## HeadBucket

<a id="opIdHeadBucket"></a>

> Code samples

```bash
curl https://s3.amazonaws.com/string \
  -X HEAD \
  -H "Authorization: ${API_KEY}"
```

`HEAD /{Bucket}`

<p>This action is useful to determine if a bucket exists and you have permission to access it. The action returns a <code>200 OK</code> if the bucket exists and you have permission to access it.</p> <p>If the bucket does not exist or you do not have permission to access it, the <code>HEAD</code> request returns a generic <code>400 Bad Request</code>, <code>403 Forbidden</code> or <code>404 Not Found</code> code. A message body is not included, so you cannot determine the exception beyond these error codes.</p> <p>To use this operation, you must have permissions to perform the <code>s3:ListBucket</code> action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>To use this API operation against an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using the Amazon Web Services SDKs, you provide the ARN in place of the bucket name. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a>.</p> <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned. For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a>.</p>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketHEAD.html">External documentation</a>

<h3 id="headbucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name.</p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned. For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-security-token|header|string|false|none|

<h3 id="headbucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NoSuchBucket|[NoSuchBucket](#schemanosuchbucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMultipartUpload

<a id="opIdCreateMultipartUpload"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#uploads?uploads=true' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"x-amz-meta-":{"property1":"string","property2":"string"}}'
```

`POST /{Bucket}/{Key}#uploads`

<p>This action initiates a multipart upload and returns an upload ID. This upload ID is used to associate all of the parts in the specific multipart upload. You specify this upload ID in each of your subsequent upload part requests (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>). You also include this upload ID in the final request to either complete or abort the multipart upload request.</p> <p>For more information about multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html">Multipart Upload Overview</a>.</p> <p>If you have configured a lifecycle rule to abort incomplete multipart uploads, the upload must complete within the number of days specified in the bucket lifecycle configuration. Otherwise, the incomplete multipart upload becomes eligible for an abort action and Amazon S3 aborts the multipart upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a>.</p> <p>For information about the permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload and Permissions</a>.</p> <p>For request signing, multipart upload is just a series of regular requests. You initiate a multipart upload, send one or more requests to upload parts, and then complete the multipart upload process. You sign each request individually. There is nothing special about signing multipart upload requests. For more information about signing, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a>.</p> <note> <p>After you initiate a multipart upload and upload one or more parts, to stop being charged for storing the uploaded parts, you must either complete or abort the multipart upload. Amazon S3 frees up the space used to store the parts and stop charging you for storing them only after you either complete or abort a multipart upload. </p> </note> <p>Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. Amazon S3 automatically encrypts all new objects that are uploaded to an S3 bucket. When doing a multipart upload, if you don't specify encryption information in your request, the encryption setting of the uploaded parts is set to the default encryption configuration of the destination bucket. By default, all buckets have a base level of encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). If the destination bucket has a default encryption configuration that uses server-side encryption with an Key Management Service (KMS) key (SSE-KMS), or a customer-provided encryption key (SSE-C), Amazon S3 uses the corresponding KMS key, or a customer-provided key to encrypt the uploaded parts. When you perform a CreateMultipartUpload operation, if you want to use a different type of encryption setting for the uploaded parts, you can request that Amazon S3 encrypts the object with a KMS key, an Amazon S3 managed key, or a customer-provided key. If the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence. If you choose to provide your own encryption key, the request headers you provide in <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html">UploadPartCopy</a> requests must match the headers you used in the request to initiate the upload by using <code>CreateMultipartUpload</code>. You can request that Amazon S3 save the uploaded parts encrypted with server-side encryption with an Amazon S3 managed key (SSE-S3), an Key Management Service (KMS) key (SSE-KMS), or a customer-provided encryption key (SSE-C). </p> <p>To perform a multipart upload with encryption by using an Amazon Web Services KMS key, the requester must have permission to the <code>kms:Decrypt</code> and <code>kms:GenerateDataKey*</code> actions on the key. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html#mpuAndPermissions">Multipart upload API and permissions</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html">Protecting data using server-side encryption with Amazon Web Services KMS</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If your Identity and Access Management (IAM) user or role is in the same Amazon Web Services account as the KMS key, then you must have these permissions on the key policy. If your IAM user or role belongs to a different account than the key, then you must have the permissions on both the key policy and your IAM user or role.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">Protecting Data Using Server-Side Encryption</a>.</p> <dl> <dt>Access Permissions</dt> <dd> <p>When copying an object, you can optionally specify the accounts or groups that should be granted specific permissions on the new object. There are two ways to grant the permissions using the request headers:</p> <ul> <li> <p>Specify a canned ACL with the <code>x-amz-acl</code> request header. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.</p> </li> <li> <p>Specify access permissions explicitly with the <code>x-amz-grant-read</code>, <code>x-amz-grant-read-acp</code>, <code>x-amz-grant-write-acp</code>, and <code>x-amz-grant-full-control</code> headers. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL) Overview</a>.</p> </li> </ul> <p>You can use either a canned ACL or specify access permissions explicitly. You cannot do both.</p> </dd> <dt>Server-Side- Encryption-Specific Request Headers</dt> <dd> <p>Amazon S3 encrypts data by using server-side encryption with an Amazon S3 managed key (SSE-S3) by default. Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. You can request that Amazon S3 encrypts data at rest by using server-side encryption with other key options. The option you use depends on whether you want to use KMS keys (SSE-KMS) or provide your own encryption keys (SSE-C).</p> <ul> <li> <p>Use KMS keys (SSE-KMS) that include the Amazon Web Services managed key (<code>aws/s3</code>) and KMS customer managed keys stored in Key Management Service (KMS) – If you want Amazon Web Services to manage the keys used to encrypt data, specify the following headers in the request.</p> <ul> <li> <p> <code>x-amz-server-side-encryption</code> </p> </li> <li> <p> <code>x-amz-server-side-encryption-aws-kms-key-id</code> </p> </li> <li> <p> <code>x-amz-server-side-encryption-context</code> </p> </li> </ul> <note> <p>If you specify <code>x-amz-server-side-encryption:aws:kms</code>, but don't provide <code>x-amz-server-side-encryption-aws-kms-key-id</code>, Amazon S3 uses the Amazon Web Services managed key (<code>aws/s3</code> key) in KMS to protect the data.</p> </note> <important> <p>All <code>GET</code> and <code>PUT</code> requests for an object protected by KMS fail if you don't make them by using Secure Sockets Layer (SSL), Transport Layer Security (TLS), or Signature Version 4.</p> </important> <p>For more information about server-side encryption with KMS keys (SSE-KMS), see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html">Protecting Data Using Server-Side Encryption with KMS keys</a>.</p> </li> <li> <p>Use customer-provided encryption keys (SSE-C) – If you want to manage your own encryption keys, provide all the following headers in the request.</p> <ul> <li> <p> <code>x-amz-server-side-encryption-customer-algorithm</code> </p> </li> <li> <p> <code>x-amz-server-side-encryption-customer-key</code> </p> </li> <li> <p> <code>x-amz-server-side-encryption-customer-key-MD5</code> </p> </li> </ul> <p>For more information about server-side encryption with customer-provided encryption keys (SSE-C), see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html"> Protecting data using server-side encryption with customer-provided encryption keys (SSE-C)</a>.</p> </li> </ul> </dd> <dt>Access-Control-List (ACL)-Specific Request Headers</dt> <dd> <p>You also can use the following access control–related headers with this operation. By default, all objects are private. Only the owner has full access control. When adding a new object, you can grant permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the access control list (ACL) on the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3_ACLs_UsingACLs.html">Using ACLs</a>. With this operation, you can grant access permissions using one of the following two methods:</p> <ul> <li> <p>Specify a canned ACL (<code>x-amz-acl</code>) — Amazon S3 supports a set of predefined ACLs, known as <i>canned ACLs</i>. Each canned ACL has a predefined set of grantees and permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.</p> </li> <li> <p>Specify access permissions explicitly — To explicitly grant access permissions to specific Amazon Web Services accounts or groups, use the following headers. Each header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL) Overview</a>. In the header, you specify a list of grantees who get the specific permission. To grant permissions explicitly, use:</p> <ul> <li> <p> <code>x-amz-grant-read</code> </p> </li> <li> <p> <code>x-amz-grant-write</code> </p> </li> <li> <p> <code>x-amz-grant-read-acp</code> </p> </li> <li> <p> <code>x-amz-grant-write-acp</code> </p> </li> <li> <p> <code>x-amz-grant-full-control</code> </p> </li> </ul> <p>You specify each grantee as a type=value pair, where the type is one of the following:</p> <ul> <li> <p> <code>id</code> – if the value specified is the canonical user ID of an Amazon Web Services account</p> </li> <li> <p> <code>uri</code> – if you are granting permissions to a predefined group</p> </li> <li> <p> <code>emailAddress</code> – if the value specified is the email address of an Amazon Web Services account</p> <note> <p>Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: </p> <ul> <li> <p>US East (N. Virginia)</p> </li> <li> <p>US West (N. California)</p> </li> <li> <p> US West (Oregon)</p> </li> <li> <p> Asia Pacific (Singapore)</p> </li> <li> <p>Asia Pacific (Sydney)</p> </li> <li> <p>Asia Pacific (Tokyo)</p> </li> <li> <p>Europe (Ireland)</p> </li> <li> <p>South America (São Paulo)</p> </li> </ul> <p>For a list of all the Amazon S3 supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.</p> </note> </li> </ul> <p>For example, the following <code>x-amz-grant-read</code> header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:</p> <p> <code>x-amz-grant-read: id="11112222333", id="444455556666" </code> </p> </li> </ul> </dd> </dl> <p>The following operations are related to <code>CreateMultipartUpload</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html">CompleteMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html">AbortMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html">ListMultipartUploads</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadInitiate.html">External documentation</a>

> Body parameter

```json
{
  "x-amz-meta-": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createmultipartupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-acl|header|string|false|<p>The canned ACL to apply to the object.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|Bucket|path|string|true|<p>The name of the bucket to which to initiate the upload</p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Cache-Control|header|string|false|Specifies caching behavior along the request/reply chain.|
|Content-Disposition|header|string|false|Specifies presentational information for the object.|
|Content-Encoding|header|string|false|Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.|
|Content-Language|header|string|false|The language the content is in.|
|Content-Type|header|string|false|A standard MIME type describing the format of the object data.|
|Expires|header|string(date-time)|false|The date and time at which the object is no longer cacheable.|
|x-amz-grant-full-control|header|string|false|<p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|x-amz-grant-read|header|string|false|<p>Allows grantee to read the object data and its metadata.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|x-amz-grant-read-acp|header|string|false|<p>Allows grantee to read the object ACL.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|x-amz-grant-write-acp|header|string|false|<p>Allows grantee to write the ACL for the applicable object.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|Key|path|string|true|Object key for which the multipart upload is to be initiated.|
|x-amz-server-side-encryption|header|string|false|The server-side encryption algorithm used when storing this object in Amazon S3 (for example, <code>AES256</code>, <code>aws:kms</code>).|
|x-amz-storage-class|header|string|false|By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-website-redirect-location|header|string|false|If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.|
|x-amz-server-side-encryption-customer-algorithm|header|string|false|Specifies the algorithm to use to when encrypting the object (for example, AES256).|
|x-amz-server-side-encryption-customer-key|header|string(password)|false|Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the <code>x-amz-server-side-encryption-customer-algorithm</code> header.|
|x-amz-server-side-encryption-customer-key-MD5|header|string|false|Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.|
|x-amz-server-side-encryption-aws-kms-key-id|header|string(password)|false|Specifies the ID of the symmetric encryption customer managed key to use for object encryption. All GET and PUT requests for an object protected by KMS will fail if they're not made via SSL or using SigV4. For information about configuring any of the officially supported Amazon Web Services SDKs and Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version">Specifying the Signature Version in Request Authentication</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-server-side-encryption-context|header|string(password)|false|Specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.|
|x-amz-server-side-encryption-bucket-key-enabled|header|boolean|false|<p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). Setting this header to <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.</p> <p>Specifying this header with an object action doesn’t affect bucket-level settings for S3 Bucket Key.</p>|
|x-amz-request-payer|header|string|false|none|
|x-amz-tagging|header|string|false|The tag-set for the object. The tag-set must be encoded as URL Query parameters.|
|x-amz-object-lock-mode|header|string|false|Specifies the Object Lock mode that you want to apply to the uploaded object.|
|x-amz-object-lock-retain-until-date|header|string(date-time)|false|Specifies the date and time when you want the Object Lock to expire.|
|x-amz-object-lock-legal-hold|header|string|false|Specifies whether you want to apply a legal hold to the uploaded object.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-checksum-algorithm|header|string|false|Indicates the algorithm you want Amazon S3 to use to create the checksum for the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|uploads|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» x-amz-meta-|body|object|false|A map of metadata to store with the object in S3.|
|» » **additionalProperties**|body|[MetadataValue](#schemametadatavalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-acl|private|
|x-amz-acl|public-read|
|x-amz-acl|public-read-write|
|x-amz-acl|authenticated-read|
|x-amz-acl|aws-exec-read|
|x-amz-acl|bucket-owner-read|
|x-amz-acl|bucket-owner-full-control|
|x-amz-server-side-encryption|AES256|
|x-amz-server-side-encryption|aws:kms|
|x-amz-server-side-encryption|aws:kms:dsse|
|x-amz-storage-class|STANDARD|
|x-amz-storage-class|REDUCED_REDUNDANCY|
|x-amz-storage-class|STANDARD_IA|
|x-amz-storage-class|ONEZONE_IA|
|x-amz-storage-class|INTELLIGENT_TIERING|
|x-amz-storage-class|GLACIER|
|x-amz-storage-class|DEEP_ARCHIVE|
|x-amz-storage-class|OUTPOSTS|
|x-amz-storage-class|GLACIER_IR|
|x-amz-storage-class|SNOW|
|x-amz-request-payer|requester|
|x-amz-object-lock-mode|GOVERNANCE|
|x-amz-object-lock-mode|COMPLIANCE|
|x-amz-object-lock-legal-hold|ON|
|x-amz-object-lock-legal-hold|OFF|
|x-amz-checksum-algorithm|CRC32|
|x-amz-checksum-algorithm|CRC32C|
|x-amz-checksum-algorithm|SHA1|
|x-amz-checksum-algorithm|SHA256|
|uploads|true|

<h3 id="createmultipartupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMultipartUploadOutput](#schemacreatemultipartuploadoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketAnalyticsConfiguration

<a id="opIdGetBucketAnalyticsConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#analytics&id?id=string&analytics=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#analytics&id`

<p>This implementation of the GET action returns an analytics configuration (identified by the analytics configuration ID) from the bucket.</p> <p>To use this operation, you must have permissions to perform the <code>s3:GetAnalyticsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources"> Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a> in the <i>Amazon S3 User Guide</i>. </p> <p>For information about Amazon S3 analytics feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/analytics-storage-class.html">Amazon S3 Analytics – Storage Class Analysis</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following operations are related to <code>GetBucketAnalyticsConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketAnalyticsConfiguration.html">DeleteBucketAnalyticsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketAnalyticsConfigurations.html">ListBucketAnalyticsConfigurations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html">PutBucketAnalyticsConfiguration</a> </p> </li> </ul>

<h3 id="getbucketanalyticsconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket from which an analytics configuration is retrieved.|
|id|query|string|true|The ID that identifies the analytics configuration.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|analytics|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|analytics|true|

<h3 id="getbucketanalyticsconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketAnalyticsConfigurationOutput](#schemagetbucketanalyticsconfigurationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketAnalyticsConfiguration

<a id="opIdPutBucketAnalyticsConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#analytics&id?id=string&analytics=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AnalyticsConfiguration":{"Id":{},"Filter":{"Prefix":{},"Tag":{"Key":{},"Value":{}},"And":{"Prefix":{},"Tags":{}}},"StorageClassAnalysis":{"DataExport":{"OutputSchemaVersion":{},"Destination":{"S3BucketDestination":{"Format":{},"BucketAccountId":{},"Bucket":{},"Prefix":{}}}}}}}'
```

`PUT /{Bucket}#analytics&id`

<p>Sets an analytics configuration for the bucket (specified by the analytics configuration ID). You can have up to 1,000 analytics configurations per bucket.</p> <p>You can choose to have storage class analysis export analysis reports sent to a comma-separated values (CSV) flat file. See the <code>DataExport</code> request element. Reports are updated daily and are based on the object filters that you configure. When selecting data export, you specify a destination bucket and an optional destination prefix where the file is written. You can export the data to a destination bucket in a different account. However, the destination bucket must be in the same Region as the bucket that you are making the PUT analytics configuration to. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/analytics-storage-class.html">Amazon S3 Analytics – Storage Class Analysis</a>. </p> <important> <p>You must create a bucket policy on the destination bucket where the exported file is written to grant permissions to Amazon S3 to write objects to the bucket. For an example policy, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html#example-bucket-policies-use-case-9">Granting Permissions for Amazon S3 Inventory and Storage Class Analysis</a>.</p> </important> <p>To use this operation, you must have permissions to perform the <code>s3:PutAnalyticsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p> <code>PutBucketAnalyticsConfiguration</code> has the following special errors:</p> <ul> <li> <ul> <li> <p> <i>HTTP Error: HTTP 400 Bad Request</i> </p> </li> <li> <p> <i>Code: InvalidArgument</i> </p> </li> <li> <p> <i>Cause: Invalid argument.</i> </p> </li> </ul> </li> <li> <ul> <li> <p> <i>HTTP Error: HTTP 400 Bad Request</i> </p> </li> <li> <p> <i>Code: TooManyConfigurations</i> </p> </li> <li> <p> <i>Cause: You are attempting to create a new configuration but have already reached the 1,000-configuration limit.</i> </p> </li> </ul> </li> <li> <ul> <li> <p> <i>HTTP Error: HTTP 403 Forbidden</i> </p> </li> <li> <p> <i>Code: AccessDenied</i> </p> </li> <li> <p> <i>Cause: You are not the owner of the specified bucket, or you do not have the s3:PutAnalyticsConfiguration bucket permission to set the configuration on the bucket.</i> </p> </li> </ul> </li> </ul> <p>The following operations are related to <code>PutBucketAnalyticsConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html">GetBucketAnalyticsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketAnalyticsConfiguration.html">DeleteBucketAnalyticsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketAnalyticsConfigurations.html">ListBucketAnalyticsConfigurations</a> </p> </li> </ul>

> Body parameter

```json
{
  "AnalyticsConfiguration": {
    "Id": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "And": {
        "Prefix": {},
        "Tags": {}
      }
    },
    "StorageClassAnalysis": {
      "DataExport": {
        "OutputSchemaVersion": {},
        "Destination": {
          "S3BucketDestination": {
            "Format": {},
            "BucketAccountId": {},
            "Bucket": {},
            "Prefix": {}
          }
        }
      }
    }
  }
}
```

<h3 id="putbucketanalyticsconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket to which an analytics configuration is stored.|
|id|query|string|true|The ID that identifies the analytics configuration.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|analytics|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» AnalyticsConfiguration|body|object|true|Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.|
|» » Id|body|object|false|none|
|» » Filter|body|object|false|none|
|» » » Prefix|body|object|false|none|
|» » » Tag|body|object|false|none|
|» » » » Key|body|object|true|none|
|» » » » Value|body|object|true|none|
|» » » And|body|object|false|none|
|» » » » Prefix|body|object|false|none|
|» » » » Tags|body|object|false|none|
|» Key|body|object|true|none|
|» Value|body|object|true|none|
|» » StorageClassAnalysis|body|object|false|none|
|» » » DataExport|body|object|false|none|
|» » » » OutputSchemaVersion|body|object|true|none|
|» » » » Destination|body|object|true|none|
|» » » » » S3BucketDestination|body|object|true|none|
|» » » » » » Format|body|object|true|none|
|» » » » » » BucketAccountId|body|object|false|none|
|» » » » » » Bucket|body|object|true|none|
|» » » » » » Prefix|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|analytics|true|

<h3 id="putbucketanalyticsconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketAnalyticsConfiguration

<a id="opIdDeleteBucketAnalyticsConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#analytics&id?id=string&analytics=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}#analytics&id`

<p>Deletes an analytics configuration for the bucket (specified by the analytics configuration ID).</p> <p>To use this operation, you must have permissions to perform the <code>s3:PutAnalyticsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For information about the Amazon S3 analytics feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/analytics-storage-class.html">Amazon S3 Analytics – Storage Class Analysis</a>. </p> <p>The following operations are related to <code>DeleteBucketAnalyticsConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html">GetBucketAnalyticsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketAnalyticsConfigurations.html">ListBucketAnalyticsConfigurations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html">PutBucketAnalyticsConfiguration</a> </p> </li> </ul>

<h3 id="deletebucketanalyticsconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket from which an analytics configuration is deleted.|
|id|query|string|true|The ID that identifies the analytics configuration.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|analytics|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|analytics|true|

<h3 id="deletebucketanalyticsconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketCors

<a id="opIdGetBucketCors"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#cors?cors=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#cors`

<p>Returns the Cross-Origin Resource Sharing (CORS) configuration information set for the bucket.</p> <p> To use this operation, you must have permission to perform the <code>s3:GetBucketCORS</code> action. By default, the bucket owner has this permission and can grant it to others.</p> <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p> <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned. For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a>.</p> <p> For more information about CORS, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html"> Enabling Cross-Origin Resource Sharing</a>.</p> <p>The following operations are related to <code>GetBucketCors</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html">PutBucketCors</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html">DeleteBucketCors</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETcors.html">External documentation</a>

<h3 id="getbucketcors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name for which to get the cors configuration.</p> <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p> <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned. For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a>.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|cors|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cors|true|

<h3 id="getbucketcors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketCorsOutput](#schemagetbucketcorsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketCors

<a id="opIdPutBucketCors"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#cors?cors=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CORSConfiguration":{"CORSRules":{}}}'
```

`PUT /{Bucket}#cors`

<p>Sets the <code>cors</code> configuration for your bucket. If the configuration exists, Amazon S3 replaces it.</p> <p>To use this operation, you must be allowed to perform the <code>s3:PutBucketCORS</code> action. By default, the bucket owner has this permission and can grant it to others.</p> <p>You set this configuration on a bucket so that the bucket can service cross-origin requests. For example, you might want to enable a request whose origin is <code>http://www.example.com</code> to access your Amazon S3 bucket at <code>my.example.bucket.com</code> by using the browser's <code>XMLHttpRequest</code> capability.</p> <p>To enable cross-origin resource sharing (CORS) on a bucket, you add the <code>cors</code> subresource to the bucket. The <code>cors</code> subresource is an XML document in which you configure rules that identify origins and the HTTP methods that can be executed on your bucket. The document is limited to 64 KB in size. </p> <p>When Amazon S3 receives a cross-origin request (or a pre-flight OPTIONS request) against a bucket, it evaluates the <code>cors</code> configuration on the bucket and uses the first <code>CORSRule</code> rule that matches the incoming browser request to enable a cross-origin request. For a rule to match, the following conditions must be met:</p> <ul> <li> <p>The request's <code>Origin</code> header must match <code>AllowedOrigin</code> elements.</p> </li> <li> <p>The request method (for example, GET, PUT, HEAD, and so on) or the <code>Access-Control-Request-Method</code> header in case of a pre-flight <code>OPTIONS</code> request must be one of the <code>AllowedMethod</code> elements. </p> </li> <li> <p>Every header specified in the <code>Access-Control-Request-Headers</code> request header of a pre-flight request must match an <code>AllowedHeader</code> element. </p> </li> </ul> <p> For more information about CORS, go to <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource Sharing</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following operations are related to <code>PutBucketCors</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html">GetBucketCors</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html">DeleteBucketCors</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTOPTIONSobject.html">RESTOPTIONSobject</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTcors.html">External documentation</a>

> Body parameter

```json
{
  "CORSConfiguration": {
    "CORSRules": {}
  }
}
```

<h3 id="putbucketcors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|Specifies the bucket impacted by the <code>cors</code>configuration.|
|Content-MD5|header|string|false|<p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864.</a> </p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|cors|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» CORSConfiguration|body|object|true|Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource Sharing</a> in the <i>Amazon S3 User Guide</i>.|
|» » CORSRules|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|cors|true|

<h3 id="putbucketcors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketCors

<a id="opIdDeleteBucketCors"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#cors?cors=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}#cors`

<p>Deletes the <code>cors</code> configuration information set for the bucket.</p> <p>To use this operation, you must have permission to perform the <code>s3:PutBucketCORS</code> action. The bucket owner has this permission by default and can grant this permission to others. </p> <p>For information about <code>cors</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource Sharing</a> in the <i>Amazon S3 User Guide</i>.</p> <p class="title"> <b>Related Resources</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html">PutBucketCors</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTOPTIONSobject.html">RESTOPTIONSobject</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEcors.html">External documentation</a>

<h3 id="deletebucketcors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|Specifies the bucket whose <code>cors</code> configuration is being deleted.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|cors|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cors|true|

<h3 id="deletebucketcors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketEncryption

<a id="opIdGetBucketEncryption"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#encryption?encryption=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#encryption`

<p>Returns the default encryption configuration for an Amazon S3 bucket. By default, all buckets have a default encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). For information about the bucket default encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Bucket Default Encryption</a> in the <i>Amazon S3 User Guide</i>.</p> <p>To use this operation, you must have permission to perform the <code>s3:GetEncryptionConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>The following operations are related to <code>GetBucketEncryption</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html">PutBucketEncryption</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketEncryption.html">DeleteBucketEncryption</a> </p> </li> </ul>

<h3 id="getbucketencryption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket from which the server-side encryption configuration is retrieved.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|encryption|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|encryption|true|

<h3 id="getbucketencryption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketEncryptionOutput](#schemagetbucketencryptionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketEncryption

<a id="opIdPutBucketEncryption"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#encryption?encryption=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ServerSideEncryptionConfiguration":{"Rules":{}}}'
```

`PUT /{Bucket}#encryption`

<p>This action uses the <code>encryption</code> subresource to configure default encryption and Amazon S3 Bucket Keys for an existing bucket.</p> <p>By default, all buckets have a default encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). You can optionally configure default encryption for a bucket by using server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), or server-side encryption with customer-provided keys (SSE-C). If you specify default encryption by using SSE-KMS, you can also configure Amazon S3 Bucket Keys. For information about bucket default encryption, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 bucket default encryption</a> in the <i>Amazon S3 User Guide</i>. For more information about S3 Bucket Keys, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html">Amazon S3 Bucket Keys</a> in the <i>Amazon S3 User Guide</i>.</p> <important> <p>This action requires Amazon Web Services Signature Version 4. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html"> Authenticating Requests (Amazon Web Services Signature Version 4)</a>. </p> </important> <p>To use this operation, you must have permission to perform the <code>s3:PutEncryptionConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a> in the <i>Amazon S3 User Guide</i>. </p> <p>The following operations are related to <code>PutBucketEncryption</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html">GetBucketEncryption</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketEncryption.html">DeleteBucketEncryption</a> </p> </li> </ul>

> Body parameter

```json
{
  "ServerSideEncryptionConfiguration": {
    "Rules": {}
  }
}
```

<h3 id="putbucketencryption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|Specifies default encryption for a bucket using server-side encryption with different key options. By default, all buckets have a default encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). You can optionally configure default encryption for a bucket by using server-side encryption with an Amazon Web Services KMS key (SSE-KMS) or a customer-provided key (SSE-C). For information about the bucket default encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Bucket Default Encryption</a> in the <i>Amazon S3 User Guide</i>.|
|Content-MD5|header|string|false|<p>The base64-encoded 128-bit MD5 digest of the server-side encryption configuration.</p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|encryption|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» ServerSideEncryptionConfiguration|body|object|true|Specifies the default server-side-encryption configuration.|
|» » Rules|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|encryption|true|

<h3 id="putbucketencryption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketEncryption

<a id="opIdDeleteBucketEncryption"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#encryption?encryption=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}#encryption`

<p>This implementation of the DELETE action resets the default encryption for the bucket as server-side encryption with Amazon S3 managed keys (SSE-S3). For information about the bucket default encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Bucket Default Encryption</a> in the <i>Amazon S3 User Guide</i>.</p> <p>To use this operation, you must have permissions to perform the <code>s3:PutEncryptionConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to your Amazon S3 Resources</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following operations are related to <code>DeleteBucketEncryption</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html">PutBucketEncryption</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html">GetBucketEncryption</a> </p> </li> </ul>

<h3 id="deletebucketencryption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket containing the server-side encryption configuration to delete.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|encryption|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|encryption|true|

<h3 id="deletebucketencryption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketIntelligentTieringConfiguration

<a id="opIdGetBucketIntelligentTieringConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#intelligent-tiering&id?id=string&intelligent-tiering=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#intelligent-tiering&id`

<p>Gets the S3 Intelligent-Tiering configuration from the specified bucket.</p> <p>The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities.</p> <p>The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p> <p>Operations related to <code>GetBucketIntelligentTieringConfiguration</code> include: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketIntelligentTieringConfiguration.html">DeleteBucketIntelligentTieringConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketIntelligentTieringConfiguration.html">PutBucketIntelligentTieringConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketIntelligentTieringConfigurations.html">ListBucketIntelligentTieringConfigurations</a> </p> </li> </ul>

<h3 id="getbucketintelligenttieringconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.|
|id|query|string|true|The ID used to identify the S3 Intelligent-Tiering configuration.|
|intelligent-tiering|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|intelligent-tiering|true|

<h3 id="getbucketintelligenttieringconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketIntelligentTieringConfigurationOutput](#schemagetbucketintelligenttieringconfigurationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketIntelligentTieringConfiguration

<a id="opIdPutBucketIntelligentTieringConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#intelligent-tiering&id?id=string&intelligent-tiering=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"IntelligentTieringConfiguration":{"Id":{},"Filter":{"Prefix":{},"Tag":{"Key":{},"Value":{}},"And":{"Prefix":{},"Tags":{}}},"Status":{},"Tierings":{}}}'
```

`PUT /{Bucket}#intelligent-tiering&id`

<p>Puts a S3 Intelligent-Tiering configuration to the specified bucket. You can have up to 1,000 S3 Intelligent-Tiering configurations per bucket.</p> <p>The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities.</p> <p>The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p> <p>Operations related to <code>PutBucketIntelligentTieringConfiguration</code> include: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketIntelligentTieringConfiguration.html">DeleteBucketIntelligentTieringConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html">GetBucketIntelligentTieringConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketIntelligentTieringConfigurations.html">ListBucketIntelligentTieringConfigurations</a> </p> </li> </ul> <note> <p>You only need S3 Intelligent-Tiering enabled on a bucket if you want to automatically move objects stored in the S3 Intelligent-Tiering storage class to the Archive Access or Deep Archive Access tier.</p> </note> <p> <code>PutBucketIntelligentTieringConfiguration</code> has the following special errors:</p> <dl> <dt>HTTP 400 Bad Request Error</dt> <dd> <p> <i>Code:</i> InvalidArgument</p> <p> <i>Cause:</i> Invalid Argument</p> </dd> <dt>HTTP 400 Bad Request Error</dt> <dd> <p> <i>Code:</i> TooManyConfigurations</p> <p> <i>Cause:</i> You are attempting to create a new configuration but have already reached the 1,000-configuration limit. </p> </dd> <dt>HTTP 403 Forbidden Error</dt> <dd> <p> <i>Cause:</i> You are not the owner of the specified bucket, or you do not have the <code>s3:PutIntelligentTieringConfiguration</code> bucket permission to set the configuration on the bucket. </p> </dd> </dl>

> Body parameter

```json
{
  "IntelligentTieringConfiguration": {
    "Id": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "And": {
        "Prefix": {},
        "Tags": {}
      }
    },
    "Status": {},
    "Tierings": {}
  }
}
```

<h3 id="putbucketintelligenttieringconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.|
|id|query|string|true|The ID used to identify the S3 Intelligent-Tiering configuration.|
|intelligent-tiering|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» IntelligentTieringConfiguration|body|object|true|<p>Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.</p> <p>For information about the S3 Intelligent-Tiering storage class, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p>|
|» » Id|body|object|false|none|
|» » Filter|body|object|false|none|
|» » » Prefix|body|object|false|none|
|» » » Tag|body|[Tag](#schematag)|false|A container of a key value name pair.|
|» » » And|body|object|false|none|
|» » » » Prefix|body|object|false|none|
|» » » » Tags|body|object|false|none|
|» Key|body|object|true|none|
|» Value|body|object|true|none|
|» » Status|body|object|false|none|
|» » Tierings|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|intelligent-tiering|true|

<h3 id="putbucketintelligenttieringconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketIntelligentTieringConfiguration

<a id="opIdDeleteBucketIntelligentTieringConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#intelligent-tiering&id?id=string&intelligent-tiering=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}#intelligent-tiering&id`

<p>Deletes the S3 Intelligent-Tiering configuration from the specified bucket.</p> <p>The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities.</p> <p>The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p> <p>Operations related to <code>DeleteBucketIntelligentTieringConfiguration</code> include: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html">GetBucketIntelligentTieringConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketIntelligentTieringConfiguration.html">PutBucketIntelligentTieringConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketIntelligentTieringConfigurations.html">ListBucketIntelligentTieringConfigurations</a> </p> </li> </ul>

<h3 id="deletebucketintelligenttieringconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.|
|id|query|string|true|The ID used to identify the S3 Intelligent-Tiering configuration.|
|intelligent-tiering|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|intelligent-tiering|true|

<h3 id="deletebucketintelligenttieringconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketInventoryConfiguration

<a id="opIdGetBucketInventoryConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#inventory&id?id=string&inventory=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#inventory&id`

<p>Returns an inventory configuration (identified by the inventory configuration ID) from the bucket.</p> <p>To use this operation, you must have permissions to perform the <code>s3:GetInventoryConfiguration</code> action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a>.</p> <p>The following operations are related to <code>GetBucketInventoryConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html">DeleteBucketInventoryConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html">ListBucketInventoryConfigurations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html">PutBucketInventoryConfiguration</a> </p> </li> </ul>

<h3 id="getbucketinventoryconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket containing the inventory configuration to retrieve.|
|id|query|string|true|The ID used to identify the inventory configuration.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|inventory|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|inventory|true|

<h3 id="getbucketinventoryconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketInventoryConfigurationOutput](#schemagetbucketinventoryconfigurationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketInventoryConfiguration

<a id="opIdPutBucketInventoryConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#inventory&id?id=string&inventory=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"InventoryConfiguration":{"Destination":{"S3BucketDestination":{"AccountId":{},"Bucket":{},"Format":{},"Prefix":{},"Encryption":{"SSES3":{},"SSEKMS":{"KeyId":{}}}}},"IsEnabled":{},"Filter":{"Prefix":{}},"Id":{},"IncludedObjectVersions":{},"OptionalFields":{},"Schedule":{"Frequency":{}}}}'
```

`PUT /{Bucket}#inventory&id`

<p>This implementation of the <code>PUT</code> action adds an inventory configuration (identified by the inventory ID) to the bucket. You can have up to 1,000 inventory configurations per bucket. </p> <p>Amazon S3 inventory generates inventories of the objects in the bucket on a daily or weekly basis, and the results are published to a flat file. The bucket that is inventoried is called the <i>source</i> bucket, and the bucket where the inventory flat file is stored is called the <i>destination</i> bucket. The <i>destination</i> bucket must be in the same Amazon Web Services Region as the <i>source</i> bucket. </p> <p>When you configure an inventory for a <i>source</i> bucket, you specify the <i>destination</i> bucket where you want the inventory to be stored, and whether to generate the inventory daily or weekly. You can also configure what object metadata to include and whether to inventory all object versions or only current versions. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a> in the Amazon S3 User Guide.</p> <important> <p>You must create a bucket policy on the <i>destination</i> bucket to grant permissions to Amazon S3 to write objects to the bucket in the defined location. For an example policy, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html#example-bucket-policies-use-case-9"> Granting Permissions for Amazon S3 Inventory and Storage Class Analysis</a>.</p> </important> <dl> <dt>Permissions</dt> <dd> <p>To use this operation, you must have permission to perform the <code>s3:PutInventoryConfiguration</code> action. The bucket owner has this permission by default and can grant this permission to others. </p> <p>The <code>s3:PutInventoryConfiguration</code> permission allows a user to create an <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-inventory.html">S3 Inventory</a> report that includes all object metadata fields available and to specify the destination bucket to store the inventory. A user with read access to objects in the destination bucket can also access all object metadata fields that are available in the inventory report. </p> <p>To restrict access to an inventory report, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-use-case-10">Restricting access to an Amazon S3 Inventory report</a> in the <i>Amazon S3 User Guide</i>. For more information about the metadata fields available in S3 Inventory, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-inventory.html#storage-inventory-contents">Amazon S3 Inventory lists</a> in the <i>Amazon S3 User Guide</i>. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions related to bucket subresource operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Identity and access management in Amazon S3</a> in the <i>Amazon S3 User Guide</i>.</p> </dd> </dl> <p> <code>PutBucketInventoryConfiguration</code> has the following special errors:</p> <dl> <dt>HTTP 400 Bad Request Error</dt> <dd> <p> <i>Code:</i> InvalidArgument</p> <p> <i>Cause:</i> Invalid Argument</p> </dd> <dt>HTTP 400 Bad Request Error</dt> <dd> <p> <i>Code:</i> TooManyConfigurations</p> <p> <i>Cause:</i> You are attempting to create a new configuration but have already reached the 1,000-configuration limit. </p> </dd> <dt>HTTP 403 Forbidden Error</dt> <dd> <p> <i>Cause:</i> You are not the owner of the specified bucket, or you do not have the <code>s3:PutInventoryConfiguration</code> bucket permission to set the configuration on the bucket. </p> </dd> </dl> <p>The following operations are related to <code>PutBucketInventoryConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html">GetBucketInventoryConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html">DeleteBucketInventoryConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html">ListBucketInventoryConfigurations</a> </p> </li> </ul>

> Body parameter

```json
{
  "InventoryConfiguration": {
    "Destination": {
      "S3BucketDestination": {
        "AccountId": {},
        "Bucket": {},
        "Format": {},
        "Prefix": {},
        "Encryption": {
          "SSES3": {},
          "SSEKMS": {
            "KeyId": {}
          }
        }
      }
    },
    "IsEnabled": {},
    "Filter": {
      "Prefix": {}
    },
    "Id": {},
    "IncludedObjectVersions": {},
    "OptionalFields": {},
    "Schedule": {
      "Frequency": {}
    }
  }
}
```

<h3 id="putbucketinventoryconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket where the inventory configuration will be stored.|
|id|query|string|true|The ID used to identify the inventory configuration.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|inventory|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» InventoryConfiguration|body|object|true|Specifies the inventory configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html">GET Bucket inventory</a> in the <i>Amazon S3 API Reference</i>. |
|» » Destination|body|object|false|none|
|» » » S3BucketDestination|body|object|true|none|
|» » » » AccountId|body|object|false|none|
|» » » » Bucket|body|object|true|none|
|» » » » Format|body|object|true|none|
|» » » » Prefix|body|object|false|none|
|» » » » Encryption|body|object|false|none|
|» » » » » SSES3|body|object|false|none|
|» » » » » SSEKMS|body|object|false|none|
|» » » » » » KeyId|body|object|true|none|
|» » IsEnabled|body|object|false|none|
|» » Filter|body|object|false|none|
|» » » Prefix|body|object|true|none|
|» » Id|body|object|false|none|
|» » IncludedObjectVersions|body|object|false|none|
|» » OptionalFields|body|object|false|none|
|» » Schedule|body|object|false|none|
|» » » Frequency|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|inventory|true|

<h3 id="putbucketinventoryconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketInventoryConfiguration

<a id="opIdDeleteBucketInventoryConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#inventory&id?id=string&inventory=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}#inventory&id`

<p>Deletes an inventory configuration (identified by the inventory ID) from the bucket.</p> <p>To use this operation, you must have permissions to perform the <code>s3:PutInventoryConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a>.</p> <p>Operations related to <code>DeleteBucketInventoryConfiguration</code> include: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html">GetBucketInventoryConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html">PutBucketInventoryConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html">ListBucketInventoryConfigurations</a> </p> </li> </ul>

<h3 id="deletebucketinventoryconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket containing the inventory configuration to delete.|
|id|query|string|true|The ID used to identify the inventory configuration.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|inventory|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|inventory|true|

<h3 id="deletebucketinventoryconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketLifecycleConfiguration

<a id="opIdGetBucketLifecycleConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#lifecycle?lifecycle=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#lifecycle`

<note> <p>Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, or a combination of both. Accordingly, this section describes the latest API. The response describes the new filter element that you can use to specify a filter to select a subset of objects to which the rule applies. If you are using a previous version of the lifecycle configuration, it still works. For the earlier action, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html">GetBucketLifecycle</a>.</p> </note> <p>Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a>.</p> <p>To use this operation, you must have permission to perform the <code>s3:GetLifecycleConfiguration</code> action. The bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p> <code>GetBucketLifecycleConfiguration</code> has the following special error:</p> <ul> <li> <p>Error code: <code>NoSuchLifecycleConfiguration</code> </p> <ul> <li> <p>Description: The lifecycle configuration does not exist.</p> </li> <li> <p>HTTP Status Code: 404 Not Found</p> </li> <li> <p>SOAP Fault Code Prefix: Client</p> </li> </ul> </li> </ul> <p>The following operations are related to <code>GetBucketLifecycleConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html">GetBucketLifecycle</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycle.html">PutBucketLifecycle</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html">DeleteBucketLifecycle</a> </p> </li> </ul>

<h3 id="getbucketlifecycleconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket for which to get the lifecycle information.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|lifecycle|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lifecycle|true|

<h3 id="getbucketlifecycleconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketLifecycleConfigurationOutput](#schemagetbucketlifecycleconfigurationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketLifecycleConfiguration

<a id="opIdPutBucketLifecycleConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#lifecycle?lifecycle=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LifecycleConfiguration":{"Rules":{}}}'
```

`PUT /{Bucket}#lifecycle`

<p>Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration. Keep in mind that this will overwrite an existing lifecycle configuration, so if you want to retain any configuration details, they must be included in the new lifecycle configuration. For information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html">Managing your storage lifecycle</a>.</p> <note> <p>Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, or a combination of both. Accordingly, this section describes the latest API. The previous version of the API supported filtering based only on an object key name prefix, which is supported for backward compatibility. For the related API description, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycle.html">PutBucketLifecycle</a>.</p> </note> <dl> <dt>Rules</dt> <dd> <p>You specify the lifecycle configuration in your request body. The lifecycle configuration is specified as XML consisting of one or more rules. An Amazon S3 Lifecycle configuration can have up to 1,000 rules. This limit is not adjustable. Each rule consists of the following:</p> <ul> <li> <p>A filter identifying a subset of objects to which the rule applies. The filter can be based on a key name prefix, object tags, or a combination of both.</p> </li> <li> <p>A status indicating whether the rule is in effect.</p> </li> <li> <p>One or more lifecycle transition and expiration actions that you want Amazon S3 to perform on the objects identified by the filter. If the state of your bucket is versioning-enabled or versioning-suspended, you can have many versions of the same object (one current version and zero or more noncurrent versions). Amazon S3 provides predefined actions that you can specify for current and noncurrent object versions.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html">Lifecycle Configuration Elements</a>.</p> </dd> <dt>Permissions</dt> <dd> <p>By default, all Amazon S3 resources are private, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration). Only the resource owner (that is, the Amazon Web Services account that created it) can access the resource. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, a user must get the <code>s3:PutLifecycleConfiguration</code> permission.</p> <p>You can also explicitly deny permissions. An explicit deny also supersedes any other permissions. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them permissions for the following actions:</p> <ul> <li> <p> <code>s3:DeleteObject</code> </p> </li> <li> <p> <code>s3:DeleteObjectVersion</code> </p> </li> <li> <p> <code>s3:PutLifecycleConfiguration</code> </p> </li> </ul> <p>For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> </dd> </dl> <p>The following operations are related to <code>PutBucketLifecycleConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-configuration-examples.html">Examples of Lifecycle Configuration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html">DeleteBucketLifecycle</a> </p> </li> </ul>

> Body parameter

```json
{
  "LifecycleConfiguration": {
    "Rules": {}
  }
}
```

<h3 id="putbucketlifecycleconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket for which to set the configuration.|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|lifecycle|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» LifecycleConfiguration|body|object|false|Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a> in the <i>Amazon S3 User Guide</i>.|
|» » Rules|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|lifecycle|true|

<h3 id="putbucketlifecycleconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketLifecycle

<a id="opIdDeleteBucketLifecycle"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#lifecycle?lifecycle=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}#lifecycle`

<p>Deletes the lifecycle configuration from the specified bucket. Amazon S3 removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration.</p> <p>To use this operation, you must have permission to perform the <code>s3:PutLifecycleConfiguration</code> action. By default, the bucket owner has this permission and the bucket owner can grant this permission to others.</p> <p>There is usually some time lag before lifecycle configuration deletion is fully propagated to all the Amazon S3 systems.</p> <p>For more information about the object expiration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#intro-lifecycle-rules-actions">Elements to Describe Lifecycle Actions</a>.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETElifecycle.html">External documentation</a>

<h3 id="deletebucketlifecycle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The bucket name of the lifecycle to delete.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|lifecycle|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lifecycle|true|

<h3 id="deletebucketlifecycle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketMetricsConfiguration

<a id="opIdGetBucketMetricsConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#metrics&id?id=string&metrics=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#metrics&id`

<p>Gets a metrics configuration (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics.</p> <p> To use this operation, you must have permissions to perform the <code>s3:GetMetricsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p> For information about CloudWatch request metrics for Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon CloudWatch</a>.</p> <p>The following operations are related to <code>GetBucketMetricsConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html">PutBucketMetricsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetricsConfiguration.html">DeleteBucketMetricsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketMetricsConfigurations.html">ListBucketMetricsConfigurations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon CloudWatch</a> </p> </li> </ul>

<h3 id="getbucketmetricsconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket containing the metrics configuration to retrieve.|
|id|query|string|true|The ID used to identify the metrics configuration. The ID has a 64 character limit and can only contain letters, numbers, periods, dashes, and underscores.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|metrics|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|metrics|true|

<h3 id="getbucketmetricsconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketMetricsConfigurationOutput](#schemagetbucketmetricsconfigurationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketMetricsConfiguration

<a id="opIdPutBucketMetricsConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#metrics&id?id=string&metrics=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"MetricsConfiguration":{"Id":{},"Filter":{"Prefix":{},"Tag":{"Key":{},"Value":{}},"AccessPointArn":{},"And":{"Prefix":{},"Tags":{},"AccessPointArn":{}}}}}'
```

`PUT /{Bucket}#metrics&id`

<p>Sets a metrics configuration (specified by the metrics configuration ID) for the bucket. You can have up to 1,000 metrics configurations per bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased.</p> <p>To use this operation, you must have permissions to perform the <code>s3:PutMetricsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For information about CloudWatch request metrics for Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon CloudWatch</a>.</p> <p>The following operations are related to <code>PutBucketMetricsConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetricsConfiguration.html">DeleteBucketMetricsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html">GetBucketMetricsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketMetricsConfigurations.html">ListBucketMetricsConfigurations</a> </p> </li> </ul> <p> <code>PutBucketMetricsConfiguration</code> has the following special error:</p> <ul> <li> <p>Error code: <code>TooManyConfigurations</code> </p> <ul> <li> <p>Description: You are attempting to create a new configuration but have already reached the 1,000-configuration limit.</p> </li> <li> <p>HTTP Status Code: HTTP 400 Bad Request</p> </li> </ul> </li> </ul>

> Body parameter

```json
{
  "MetricsConfiguration": {
    "Id": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "AccessPointArn": {},
      "And": {
        "Prefix": {},
        "Tags": {},
        "AccessPointArn": {}
      }
    }
  }
}
```

<h3 id="putbucketmetricsconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket for which the metrics configuration is set.|
|id|query|string|true|The ID used to identify the metrics configuration. The ID has a 64 character limit and can only contain letters, numbers, periods, dashes, and underscores.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|metrics|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» MetricsConfiguration|body|object|true|Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html">PutBucketMetricsConfiguration</a>.|
|» » Id|body|object|false|none|
|» » Filter|body|object|false|none|
|» » » Prefix|body|object|false|none|
|» » » Tag|body|object|false|none|
|» » » » Key|body|object|true|none|
|» » » » Value|body|object|true|none|
|» » » AccessPointArn|body|object|false|none|
|» » » And|body|object|false|none|
|» » » » Prefix|body|object|false|none|
|» » » » Tags|body|object|false|none|
|» Key|body|object|true|none|
|» Value|body|object|true|none|
|» » » » AccessPointArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|metrics|true|

<h3 id="putbucketmetricsconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketMetricsConfiguration

<a id="opIdDeleteBucketMetricsConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#metrics&id?id=string&metrics=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}#metrics&id`

<p>Deletes a metrics configuration for the Amazon CloudWatch request metrics (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics.</p> <p> To use this operation, you must have permissions to perform the <code>s3:PutMetricsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For information about CloudWatch request metrics for Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon CloudWatch</a>. </p> <p>The following operations are related to <code>DeleteBucketMetricsConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html">GetBucketMetricsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html">PutBucketMetricsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketMetricsConfigurations.html">ListBucketMetricsConfigurations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon CloudWatch</a> </p> </li> </ul>

<h3 id="deletebucketmetricsconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket containing the metrics configuration to delete.|
|id|query|string|true|The ID used to identify the metrics configuration. The ID has a 64 character limit and can only contain letters, numbers, periods, dashes, and underscores.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|metrics|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|metrics|true|

<h3 id="deletebucketmetricsconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketOwnershipControls

<a id="opIdGetBucketOwnershipControls"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#ownershipControls?ownershipControls=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#ownershipControls`

<p>Retrieves <code>OwnershipControls</code> for an Amazon S3 bucket. To use this operation, you must have the <code>s3:GetBucketOwnershipControls</code> permission. For more information about Amazon S3 permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html">Specifying permissions in a policy</a>. </p> <p>For information about Amazon S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Using Object Ownership</a>. </p> <p>The following operations are related to <code>GetBucketOwnershipControls</code>:</p> <ul> <li> <p> <a>PutBucketOwnershipControls</a> </p> </li> <li> <p> <a>DeleteBucketOwnershipControls</a> </p> </li> </ul>

<h3 id="getbucketownershipcontrols-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the Amazon S3 bucket whose <code>OwnershipControls</code> you want to retrieve. |
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|ownershipControls|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownershipControls|true|

<h3 id="getbucketownershipcontrols-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketOwnershipControlsOutput](#schemagetbucketownershipcontrolsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketOwnershipControls

<a id="opIdPutBucketOwnershipControls"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#ownershipControls?ownershipControls=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"OwnershipControls":{"Rules":{}}}'
```

`PUT /{Bucket}#ownershipControls`

<p>Creates or modifies <code>OwnershipControls</code> for an Amazon S3 bucket. To use this operation, you must have the <code>s3:PutBucketOwnershipControls</code> permission. For more information about Amazon S3 permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/user-guide/using-with-s3-actions.html">Specifying permissions in a policy</a>. </p> <p>For information about Amazon S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/user-guide/about-object-ownership.html">Using object ownership</a>. </p> <p>The following operations are related to <code>PutBucketOwnershipControls</code>:</p> <ul> <li> <p> <a>GetBucketOwnershipControls</a> </p> </li> <li> <p> <a>DeleteBucketOwnershipControls</a> </p> </li> </ul>

> Body parameter

```json
{
  "OwnershipControls": {
    "Rules": {}
  }
}
```

<h3 id="putbucketownershipcontrols-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the Amazon S3 bucket whose <code>OwnershipControls</code> you want to set.|
|Content-MD5|header|string|false|<p>The MD5 hash of the <code>OwnershipControls</code> request body. </p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|ownershipControls|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» OwnershipControls|body|object|true|The container element for a bucket's ownership controls.|
|» » Rules|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownershipControls|true|

<h3 id="putbucketownershipcontrols-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketOwnershipControls

<a id="opIdDeleteBucketOwnershipControls"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#ownershipControls?ownershipControls=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}#ownershipControls`

<p>Removes <code>OwnershipControls</code> for an Amazon S3 bucket. To use this operation, you must have the <code>s3:PutBucketOwnershipControls</code> permission. For more information about Amazon S3 permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a Policy</a>.</p> <p>For information about Amazon S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html">Using Object Ownership</a>. </p> <p>The following operations are related to <code>DeleteBucketOwnershipControls</code>:</p> <ul> <li> <p> <a>GetBucketOwnershipControls</a> </p> </li> <li> <p> <a>PutBucketOwnershipControls</a> </p> </li> </ul>

<h3 id="deletebucketownershipcontrols-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The Amazon S3 bucket whose <code>OwnershipControls</code> you want to delete. |
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|ownershipControls|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownershipControls|true|

<h3 id="deletebucketownershipcontrols-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketPolicy

<a id="opIdGetBucketPolicy"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#policy?policy=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#policy`

<p>Returns the policy of a specified bucket. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the <code>GetBucketPolicy</code> permissions on the specified bucket and belong to the bucket owner's account in order to use this operation.</p> <p>If you don't have <code>GetBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error.</p> <important> <p>To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's Amazon Web Services account can perform the <code>GetBucketPolicy</code>, <code>PutBucketPolicy</code>, and <code>DeleteBucketPolicy</code> API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations policies.</p> </important> <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p> <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned. For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a>.</p> <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p> <p>The following action is related to <code>GetBucketPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETpolicy.html">External documentation</a>

<h3 id="getbucketpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name for which to get the bucket policy.</p> <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p> <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned. For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a>.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|policy|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|policy|true|

<h3 id="getbucketpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketPolicyOutput](#schemagetbucketpolicyoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketPolicy

<a id="opIdPutBucketPolicy"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#policy?policy=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Policy":"string"}'
```

`PUT /{Bucket}#policy`

<p>Applies an Amazon S3 bucket policy to an Amazon S3 bucket. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the <code>PutBucketPolicy</code> permissions on the specified bucket and belong to the bucket owner's account in order to use this operation.</p> <p>If you don't have <code>PutBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error.</p> <important> <p>To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's Amazon Web Services account can perform the <code>GetBucketPolicy</code>, <code>PutBucketPolicy</code>, and <code>DeleteBucketPolicy</code> API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations policies.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html">Bucket policy examples</a>.</p> <p>The following operations are related to <code>PutBucketPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTpolicy.html">External documentation</a>

> Body parameter

```json
{
  "Policy": "string"
}
```

<h3 id="putbucketpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket.|
|Content-MD5|header|string|false|<p>The MD5 hash of the request body.</p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-confirm-remove-self-bucket-access|header|boolean|false|Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|policy|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» Policy|body|string|true|The bucket policy as a JSON document.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|policy|true|

<h3 id="putbucketpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketPolicy

<a id="opIdDeleteBucketPolicy"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#policy?policy=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}#policy`

<p>This implementation of the DELETE action uses the policy subresource to delete the policy of a specified bucket. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the <code>DeleteBucketPolicy</code> permissions on the specified bucket and belong to the bucket owner's account to use this operation. </p> <p>If you don't have <code>DeleteBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error. </p> <important> <p>To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's Amazon Web Services account can perform the <code>GetBucketPolicy</code>, <code>PutBucketPolicy</code>, and <code>DeleteBucketPolicy</code> API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations policies.</p> </important> <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and UserPolicies</a>. </p> <p>The following operations are related to <code>DeleteBucketPolicy</code> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEpolicy.html">External documentation</a>

<h3 id="deletebucketpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The bucket name.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|policy|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|policy|true|

<h3 id="deletebucketpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketReplication

<a id="opIdGetBucketReplication"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#replication?replication=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#replication`

<p>Returns the replication configuration of a bucket.</p> <note> <p> It can take a while to propagate the put or delete a replication configuration to all Amazon S3 systems. Therefore, a get request soon after put or delete can return a wrong result. </p> </note> <p> For information about replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">Replication</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This action requires permissions for the <code>s3:GetReplicationConfiguration</code> action. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p> <p>If you include the <code>Filter</code> element in a replication configuration, you must also include the <code>DeleteMarkerReplication</code> and <code>Priority</code> elements. The response also returns those elements.</p> <p>For information about <code>GetBucketReplication</code> errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ReplicationErrorCodeList">List of replication-related error codes</a> </p> <p>The following operations are related to <code>GetBucketReplication</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html">PutBucketReplication</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html">DeleteBucketReplication</a> </p> </li> </ul>

<h3 id="getbucketreplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The bucket name for which to get the replication information.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|replication|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|replication|true|

<h3 id="getbucketreplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketReplicationOutput](#schemagetbucketreplicationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketReplication

<a id="opIdPutBucketReplication"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#replication?replication=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ReplicationConfiguration":{"Role":{},"Rules":{}}}'
```

`PUT /{Bucket}#replication`

<p> Creates a replication configuration or replaces an existing one. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">Replication</a> in the <i>Amazon S3 User Guide</i>. </p> <p>Specify the replication configuration in the request body. In the replication configuration, you provide the name of the destination bucket or buckets where you want Amazon S3 to replicate objects, the IAM role that Amazon S3 can assume to replicate objects on your behalf, and other relevant information.</p> <p>A replication configuration must include at least one rule, and can contain a maximum of 1,000. Each rule identifies a subset of objects to replicate by filtering the objects in the source bucket. To choose additional subsets of objects to replicate, add a rule for each subset.</p> <p>To specify a subset of the objects in the source bucket to apply a replication rule to, add the Filter element as a child of the Rule element. You can filter objects based on an object key prefix, one or more object tags, or both. When you add the Filter element in the configuration, you must also add the following elements: <code>DeleteMarkerReplication</code>, <code>Status</code>, and <code>Priority</code>.</p> <note> <p>If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p> </note> <p>For information about enabling versioning on a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html">Using Versioning</a>.</p> <dl> <dt>Handling Replication of Encrypted Objects</dt> <dd> <p>By default, Amazon S3 doesn't replicate objects that are stored at rest using server-side encryption with KMS keys. To replicate Amazon Web Services KMS-encrypted objects, add the following: <code>SourceSelectionCriteria</code>, <code>SseKmsEncryptedObjects</code>, <code>Status</code>, <code>EncryptionConfiguration</code>, and <code>ReplicaKmsKeyID</code>. For information about replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-config-for-kms-objects.html">Replicating Objects Created with SSE Using KMS keys</a>.</p> <p>For information on <code>PutBucketReplication</code> errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ReplicationErrorCodeList">List of replication-related error codes</a> </p> </dd> <dt>Permissions</dt> <dd> <p>To create a <code>PutBucketReplication</code> request, you must have <code>s3:PutReplicationConfiguration</code> permissions for the bucket. </p> <p>By default, a resource owner, in this case the Amazon Web Services account that created the bucket, can perform this operation. The resource owner can also grant others permissions to perform the operation. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a Policy</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <note> <p>To perform this operation, the user or role performing the action must have the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">iam:PassRole</a> permission.</p> </note> </dd> </dl> <p>The following operations are related to <code>PutBucketReplication</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html">GetBucketReplication</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html">DeleteBucketReplication</a> </p> </li> </ul>

> Body parameter

```json
{
  "ReplicationConfiguration": {
    "Role": {},
    "Rules": {}
  }
}
```

<h3 id="putbucketreplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket|
|Content-MD5|header|string|false|<p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-bucket-object-lock-token|header|string|false|A token to allow Object Lock to be enabled for an existing bucket.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|replication|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» ReplicationConfiguration|body|object|true|A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.|
|» » Role|body|object|false|none|
|» » Rules|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|replication|true|

<h3 id="putbucketreplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketReplication

<a id="opIdDeleteBucketReplication"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#replication?replication=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}#replication`

<p> Deletes the replication configuration from the bucket.</p> <p>To use this operation, you must have permissions to perform the <code>s3:PutReplicationConfiguration</code> action. The bucket owner has these permissions by default and can grant it to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>. </p> <note> <p>It can take a while for the deletion of a replication configuration to fully propagate.</p> </note> <p> For information about replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">Replication</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following operations are related to <code>DeleteBucketReplication</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html">PutBucketReplication</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html">GetBucketReplication</a> </p> </li> </ul>

<h3 id="deletebucketreplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true| The bucket name. |
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|replication|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|replication|true|

<h3 id="deletebucketreplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketTagging

<a id="opIdGetBucketTagging"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#tagging?tagging=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#tagging`

<p>Returns the tag set associated with the bucket.</p> <p>To use this operation, you must have permission to perform the <code>s3:GetBucketTagging</code> action. By default, the bucket owner has this permission and can grant this permission to others.</p> <p> <code>GetBucketTagging</code> has the following special error:</p> <ul> <li> <p>Error code: <code>NoSuchTagSet</code> </p> <ul> <li> <p>Description: There is no tag set associated with the bucket.</p> </li> </ul> </li> </ul> <p>The following operations are related to <code>GetBucketTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html">DeleteBucketTagging</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETtagging.html">External documentation</a>

<h3 id="getbuckettagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket for which to get the tagging information.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|tagging|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tagging|true|

<h3 id="getbuckettagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketTaggingOutput](#schemagetbuckettaggingoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketTagging

<a id="opIdPutBucketTagging"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#tagging?tagging=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Tagging":{"TagSet":{}}}'
```

`PUT /{Bucket}#tagging`

<p>Sets the tags for a bucket.</p> <p>Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this, sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Cost Allocation and Tagging</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/CostAllocTagging.html">Using Cost Allocation in Amazon S3 Bucket Tags</a>.</p> <note> <p> When this operation sets the tags for a bucket, it will overwrite any current tags the bucket already has. You cannot use this operation to add tags to an existing list of tags.</p> </note> <p>To use this operation, you must have permissions to perform the <code>s3:PutBucketTagging</code> action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p> <code>PutBucketTagging</code> has the following special errors:</p> <ul> <li> <p>Error code: <code>InvalidTagError</code> </p> <ul> <li> <p>Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For information about tag restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/aws-tag-restrictions.html">Amazon Web Services-Generated Cost Allocation Tag Restrictions</a>.</p> </li> </ul> </li> <li> <p>Error code: <code>MalformedXMLError</code> </p> <ul> <li> <p>Description: The XML provided does not match the schema.</p> </li> </ul> </li> <li> <p>Error code: <code>OperationAbortedError </code> </p> <ul> <li> <p>Description: A conflicting conditional action is currently in progress against this resource. Please try again.</p> </li> </ul> </li> <li> <p>Error code: <code>InternalError</code> </p> <ul> <li> <p>Description: The service was unable to apply the provided tag to the bucket.</p> </li> </ul> </li> </ul> <p>The following operations are related to <code>PutBucketTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html">GetBucketTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html">DeleteBucketTagging</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTtagging.html">External documentation</a>

> Body parameter

```json
{
  "Tagging": {
    "TagSet": {}
  }
}
```

<h3 id="putbuckettagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The bucket name.|
|Content-MD5|header|string|false|<p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|tagging|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» Tagging|body|object|true|Container for <code>TagSet</code> elements.|
|» » TagSet|body|object|false|none|
|» Key|body|object|true|none|
|» Value|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|tagging|true|

<h3 id="putbuckettagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketTagging

<a id="opIdDeleteBucketTagging"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#tagging?tagging=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}#tagging`

<p>Deletes the tags from the bucket.</p> <p>To use this operation, you must have permission to perform the <code>s3:PutBucketTagging</code> action. By default, the bucket owner has this permission and can grant this permission to others. </p> <p>The following operations are related to <code>DeleteBucketTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html">GetBucketTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEtagging.html">External documentation</a>

<h3 id="deletebuckettagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The bucket that has the tag set to be removed.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|tagging|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tagging|true|

<h3 id="deletebuckettagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketWebsite

<a id="opIdGetBucketWebsite"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#website?website=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#website`

<p>Returns the website configuration for a bucket. To host website on Amazon S3, you can configure a bucket as website by adding a website configuration. For more information about hosting websites, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a>. </p> <p>This GET action requires the <code>S3:GetBucketWebsite</code> permission. By default, only the bucket owner can read the bucket website configuration. However, bucket owners can allow other users to read the website configuration by writing a bucket policy granting them the <code>S3:GetBucketWebsite</code> permission.</p> <p>The following operations are related to <code>GetBucketWebsite</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html">DeleteBucketWebsite</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html">PutBucketWebsite</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETwebsite.html">External documentation</a>

<h3 id="getbucketwebsite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The bucket name for which to get the website configuration.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|website|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|website|true|

<h3 id="getbucketwebsite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketWebsiteOutput](#schemagetbucketwebsiteoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketWebsite

<a id="opIdPutBucketWebsite"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#website?website=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"WebsiteConfiguration":{"ErrorDocument":{"Key":{}},"IndexDocument":{"Suffix":{}},"RedirectAllRequestsTo":{"HostName":{},"Protocol":{}},"RoutingRules":{}}}'
```

`PUT /{Bucket}#website`

<p>Sets the configuration of the website that is specified in the <code>website</code> subresource. To configure a bucket as a website, you can add this subresource on the bucket with website configuration information such as the file name of the index document and any redirect rules. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a>.</p> <p>This PUT action requires the <code>S3:PutBucketWebsite</code> permission. By default, only the bucket owner can configure the website attached to a bucket; however, bucket owners can allow other users to set the website configuration by writing a bucket policy that grants them the <code>S3:PutBucketWebsite</code> permission.</p> <p>To redirect all website requests sent to the bucket's website endpoint, you add a website configuration with the following elements. Because all requests are sent to another website, you don't need to provide index document name for the bucket.</p> <ul> <li> <p> <code>WebsiteConfiguration</code> </p> </li> <li> <p> <code>RedirectAllRequestsTo</code> </p> </li> <li> <p> <code>HostName</code> </p> </li> <li> <p> <code>Protocol</code> </p> </li> </ul> <p>If you want granular control over redirects, you can use the following elements to add routing rules that describe conditions for redirecting requests and information about the redirect destination. In this case, the website configuration must provide an index document for the bucket, because some requests might not be redirected. </p> <ul> <li> <p> <code>WebsiteConfiguration</code> </p> </li> <li> <p> <code>IndexDocument</code> </p> </li> <li> <p> <code>Suffix</code> </p> </li> <li> <p> <code>ErrorDocument</code> </p> </li> <li> <p> <code>Key</code> </p> </li> <li> <p> <code>RoutingRules</code> </p> </li> <li> <p> <code>RoutingRule</code> </p> </li> <li> <p> <code>Condition</code> </p> </li> <li> <p> <code>HttpErrorCodeReturnedEquals</code> </p> </li> <li> <p> <code>KeyPrefixEquals</code> </p> </li> <li> <p> <code>Redirect</code> </p> </li> <li> <p> <code>Protocol</code> </p> </li> <li> <p> <code>HostName</code> </p> </li> <li> <p> <code>ReplaceKeyPrefixWith</code> </p> </li> <li> <p> <code>ReplaceKeyWith</code> </p> </li> <li> <p> <code>HttpRedirectCode</code> </p> </li> </ul> <p>Amazon S3 has a limitation of 50 routing rules per website configuration. If you require more than 50 routing rules, you can use object redirect. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html">Configuring an Object Redirect</a> in the <i>Amazon S3 User Guide</i>.</p>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTwebsite.html">External documentation</a>

> Body parameter

```json
{
  "WebsiteConfiguration": {
    "ErrorDocument": {
      "Key": {}
    },
    "IndexDocument": {
      "Suffix": {}
    },
    "RedirectAllRequestsTo": {
      "HostName": {},
      "Protocol": {}
    },
    "RoutingRules": {}
  }
}
```

<h3 id="putbucketwebsite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The bucket name.|
|Content-MD5|header|string|false|<p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|website|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» WebsiteConfiguration|body|object|true|Specifies website configuration parameters for an Amazon S3 bucket.|
|» » ErrorDocument|body|object|false|none|
|» » » Key|body|object|true|none|
|» » IndexDocument|body|object|false|none|
|» » » Suffix|body|object|true|none|
|» » RedirectAllRequestsTo|body|object|false|none|
|» » » HostName|body|object|true|none|
|» » » Protocol|body|object|false|none|
|» » RoutingRules|body|object|false|none|
|» Condition|body|object|false|none|
|» » HttpErrorCodeReturnedEquals|body|object|false|none|
|» » KeyPrefixEquals|body|object|false|none|
|» Redirect|body|object|true|none|
|» » HostName|body|object|false|none|
|» » HttpRedirectCode|body|object|false|none|
|» » Protocol|body|object|false|none|
|» » ReplaceKeyPrefixWith|body|object|false|none|
|» » ReplaceKeyWith|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|website|true|

<h3 id="putbucketwebsite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketWebsite

<a id="opIdDeleteBucketWebsite"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#website?website=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}#website`

<p>This action removes the website configuration for a bucket. Amazon S3 returns a <code>200 OK</code> response upon successfully deleting a website configuration on the specified bucket. You will get a <code>200 OK</code> response if the website configuration you are trying to delete does not exist on the bucket. Amazon S3 returns a <code>404</code> response if the bucket specified in the request does not exist.</p> <p>This DELETE action requires the <code>S3:DeleteBucketWebsite</code> permission. By default, only the bucket owner can delete the website configuration attached to a bucket. However, bucket owners can grant other users permission to delete the website configuration by writing a bucket policy granting them the <code>S3:DeleteBucketWebsite</code> permission. </p> <p>For more information about hosting websites, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a>. </p> <p>The following operations are related to <code>DeleteBucketWebsite</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html">GetBucketWebsite</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html">PutBucketWebsite</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketDELETEwebsite.html">External documentation</a>

<h3 id="deletebucketwebsite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The bucket name for which you want to remove the website configuration. |
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|website|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|website|true|

<h3 id="deletebucketwebsite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetObject

<a id="opIdGetObject"></a>

> Code samples

```bash
curl https://s3.amazonaws.com/string/string \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}/{Key}`

<p>Retrieves objects from Amazon S3. To use <code>GET</code>, you must have <code>READ</code> access to the object. If you grant <code>READ</code> access to the anonymous user, you can return the object without using an authorization header.</p> <p>An Amazon S3 bucket has no directory hierarchy such as you would find in a typical computer file system. You can, however, create a logical hierarchy by using object key names that imply a folder structure. For example, instead of naming an object <code>sample.jpg</code>, you can name it <code>photos/2006/February/sample.jpg</code>.</p> <p>To get an object from such a logical hierarchy, specify the full key name for the object in the <code>GET</code> operation. For a virtual hosted-style request example, if you have the object <code>photos/2006/February/sample.jpg</code>, specify the resource as <code>/photos/2006/February/sample.jpg</code>. For a path-style request example, if you have the object <code>photos/2006/February/sample.jpg</code> in the bucket named <code>examplebucket</code>, specify the resource as <code>/examplebucket/photos/2006/February/sample.jpg</code>. For more information about request types, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingSpecifyBucket">HTTP Host Header Bucket Specification</a>.</p> <p>For more information about returning the ACL of an object, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html">GetObjectAcl</a>.</p> <p>If the object you are retrieving is stored in the S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage class, or S3 Intelligent-Tiering Archive or S3 Intelligent-Tiering Deep Archive tiers, before you can retrieve the object you must first restore a copy using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html">RestoreObject</a>. Otherwise, this action returns an <code>InvalidObjectState</code> error. For information about restoring archived objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/restoring-objects.html">Restoring Archived Objects</a>.</p> <p>Encryption request headers, like <code>x-amz-server-side-encryption</code>, should not be sent for GET requests if your object uses server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), or server-side encryption with Amazon S3 managed encryption keys (SSE-S3). If your object does use these types of keys, you’ll get an HTTP 400 Bad Request error.</p> <p>If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you GET the object, you must use the following headers:</p> <ul> <li> <p> <code>x-amz-server-side-encryption-customer-algorithm</code> </p> </li> <li> <p> <code>x-amz-server-side-encryption-customer-key</code> </p> </li> <li> <p> <code>x-amz-server-side-encryption-customer-key-MD5</code> </p> </li> </ul> <p>For more information about SSE-C, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption (Using Customer-Provided Encryption Keys)</a>.</p> <p>Assuming you have the relevant permission to read object tags, the response also returns the <code>x-amz-tagging-count</code> header that provides the count of number of tags associated with the object. You can use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a> to retrieve the tag set associated with an object.</p> <dl> <dt>Permissions</dt> <dd> <p>You need the relevant read object (or version) permission for this operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a Policy</a>. If the object that you request doesn’t exist, the error that Amazon S3 returns depends on whether you also have the <code>s3:ListBucket</code> permission.</p> <p>If you have the <code>s3:ListBucket</code> permission on the bucket, Amazon S3 returns an HTTP status code 404 (Not Found) error.</p> <p>If you don’t have the <code>s3:ListBucket</code> permission, Amazon S3 returns an HTTP status code 403 ("access denied") error.</p> </dd> <dt>Versioning</dt> <dd> <p>By default, the <code>GET</code> action returns the current version of an object. To return a different version, use the <code>versionId</code> subresource.</p> <note> <ul> <li> <p> If you supply a <code>versionId</code>, you need the <code>s3:GetObjectVersion</code> permission to access a specific version of an object. If you request a specific version, you do not need to have the <code>s3:GetObject</code> permission. If you request the current version without a specific version ID, only <code>s3:GetObject</code> permission is required. <code>s3:GetObjectVersion</code> permission won't be required.</p> </li> <li> <p>If the current version of the object is a delete marker, Amazon S3 behaves as if the object was deleted and includes <code>x-amz-delete-marker: true</code> in the response.</p> </li> </ul> </note> <p>For more information about versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html">PutBucketVersioning</a>. </p> </dd> <dt>Overriding Response Header Values</dt> <dd> <p>There are times when you want to override certain response header values in a <code>GET</code> response. For example, you might override the <code>Content-Disposition</code> response header value in your <code>GET</code> request.</p> <p>You can override values for a set of response headers using the following query parameters. These response header values are sent only on a successful request, that is, when status code 200 OK is returned. The set of headers you can override using these parameters is a subset of the headers that Amazon S3 accepts when you create an object. The response headers that you can override for the <code>GET</code> response are <code>Content-Type</code>, <code>Content-Language</code>, <code>Expires</code>, <code>Cache-Control</code>, <code>Content-Disposition</code>, and <code>Content-Encoding</code>. To override these header values in the <code>GET</code> response, you use the following request parameters.</p> <note> <p>You must sign the request, either using an Authorization header or a presigned URL, when using these parameters. They cannot be used with an unsigned (anonymous) request.</p> </note> <ul> <li> <p> <code>response-content-type</code> </p> </li> <li> <p> <code>response-content-language</code> </p> </li> <li> <p> <code>response-expires</code> </p> </li> <li> <p> <code>response-cache-control</code> </p> </li> <li> <p> <code>response-content-disposition</code> </p> </li> <li> <p> <code>response-content-encoding</code> </p> </li> </ul> </dd> <dt>Overriding Response Header Values</dt> <dd> <p>If both of the <code>If-Match</code> and <code>If-Unmodified-Since</code> headers are present in the request as follows: <code>If-Match</code> condition evaluates to <code>true</code>, and; <code>If-Unmodified-Since</code> condition evaluates to <code>false</code>; then, S3 returns 200 OK and the data requested. </p> <p>If both of the <code>If-None-Match</code> and <code>If-Modified-Since</code> headers are present in the request as follows:<code> If-None-Match</code> condition evaluates to <code>false</code>, and; <code>If-Modified-Since</code> condition evaluates to <code>true</code>; then, S3 returns 304 Not Modified response code.</p> <p>For more information about conditional requests, see <a href="https://tools.ietf.org/html/rfc7232">RFC 7232</a>.</p> </dd> </dl> <p>The following operations are related to <code>GetObject</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html">ListBuckets</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html">GetObjectAcl</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectGET.html">External documentation</a>

<h3 id="getobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name containing the object. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When using an Object Lambda access point the hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-object-lambda.<i>Region</i>.amazonaws.com.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|If-Match|header|string|false|Return the object only if its entity tag (ETag) is the same as the one specified; otherwise, return a 412 (precondition failed) error.|
|If-Modified-Since|header|string(date-time)|false|Return the object only if it has been modified since the specified time; otherwise, return a 304 (not modified) error.|
|If-None-Match|header|string|false|Return the object only if its entity tag (ETag) is different from the one specified; otherwise, return a 304 (not modified) error.|
|If-Unmodified-Since|header|string(date-time)|false|Return the object only if it has not been modified since the specified time; otherwise, return a 412 (precondition failed) error.|
|Key|path|string|true|Key of the object to get.|
|Range|header|string|false|<p>Downloads the specified range bytes of an object. For more information about the HTTP Range header, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-range">https://www.rfc-editor.org/rfc/rfc9110.html#name-range</a>.</p> <note> <p>Amazon S3 doesn't support retrieving multiple ranges of data per <code>GET</code> request.</p> </note>|
|response-cache-control|query|string|false|Sets the <code>Cache-Control</code> header of the response.|
|response-content-disposition|query|string|false|Sets the <code>Content-Disposition</code> header of the response|
|response-content-encoding|query|string|false|Sets the <code>Content-Encoding</code> header of the response.|
|response-content-language|query|string|false|Sets the <code>Content-Language</code> header of the response.|
|response-content-type|query|string|false|Sets the <code>Content-Type</code> header of the response.|
|response-expires|query|string(date-time)|false|Sets the <code>Expires</code> header of the response.|
|versionId|query|string|false|VersionId used to reference a specific version of the object.|
|x-amz-server-side-encryption-customer-algorithm|header|string|false|Specifies the algorithm to use to when decrypting the object (for example, AES256).|
|x-amz-server-side-encryption-customer-key|header|string(password)|false|Specifies the customer-provided encryption key for Amazon S3 used to encrypt the data. This value is used to decrypt the object when recovering it and must match the one used when storing the data. The key must be appropriate for use with the algorithm specified in the <code>x-amz-server-side-encryption-customer-algorithm</code> header.|
|x-amz-server-side-encryption-customer-key-MD5|header|string|false|Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.|
|x-amz-request-payer|header|string|false|none|
|partNumber|query|integer|false|Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' GET request for the part specified. Useful for downloading just a part of an object.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-checksum-mode|header|string|false|To retrieve the checksum, this mode must be enabled.|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|x-amz-checksum-mode|ENABLED|

<h3 id="getobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetObjectOutput](#schemagetobjectoutput)|
|480|480|NoSuchKey|[NoSuchKey](#schemanosuchkey)|
|481|481|InvalidObjectState|[InvalidObjectState](#schemainvalidobjectstate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutObject

<a id="opIdPutObject"></a>

> Code samples

```bash
curl https://s3.amazonaws.com/string/string \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Body":"string","x-amz-meta-":{"property1":"string","property2":"string"}}'
```

`PUT /{Bucket}/{Key}`

<p>Adds an object to a bucket. You must have WRITE permissions on a bucket to add an object to it.</p> <note> <p>Amazon S3 never adds partial objects; if you receive a success response, Amazon S3 added the entire object to the bucket. You cannot use <code>PutObject</code> to only update a single piece of metadata for an existing object. You must put the entire object with updated metadata if you want to update some values.</p> </note> <p>Amazon S3 is a distributed system. If it receives multiple write requests for the same object simultaneously, it overwrites all but the last object written. To prevent objects from being deleted or overwritten, you can use <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html">Amazon S3 Object Lock</a>.</p> <p>To ensure that data is not corrupted traversing the network, use the <code>Content-MD5</code> header. When you use this header, Amazon S3 checks the object against the provided MD5 value and, if they do not match, returns an error. Additionally, you can calculate the MD5 while putting an object to Amazon S3 and compare the returned ETag to the calculated MD5 value.</p> <note> <ul> <li> <p>To successfully complete the <code>PutObject</code> request, you must have the <code>s3:PutObject</code> in your IAM permissions.</p> </li> <li> <p>To successfully change the objects acl of your <code>PutObject</code> request, you must have the <code>s3:PutObjectAcl</code> in your IAM permissions.</p> </li> <li> <p>To successfully set the tag-set with your <code>PutObject</code> request, you must have the <code>s3:PutObjectTagging</code> in your IAM permissions.</p> </li> <li> <p> The <code>Content-MD5</code> header is required for any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more information about Amazon S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html">Amazon S3 Object Lock Overview</a> in the <i>Amazon S3 User Guide</i>. </p> </li> </ul> </note> <p>You have four mutually exclusive options to protect data using server-side encryption in Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS or DSSE-KMS), and customer-provided keys (SSE-C). Amazon S3 encrypts data with server-side encryption by using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to encrypt data at rest by using server-side encryption with other key options. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html">Using Server-Side Encryption</a>.</p> <p>When adding a new object, you can use headers to grant ACL-based permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the ACL on the object. By default, all objects are private. Only the owner has full access control. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL) Overview</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-using-rest-api.html">Managing ACLs Using the REST API</a>. </p> <p>If the bucket that you're uploading objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept PUT requests that don't specify an ACL or PUT requests that specify bucket owner full control ACLs, such as the <code>bucket-owner-full-control</code> canned ACL or an equivalent form of this ACL expressed in the XML format. PUT requests that contain other ACLs (for example, custom grants to certain Amazon Web Services accounts) fail and return a <code>400</code> error with the error code <code>AccessControlListNotSupported</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html"> Controlling ownership of objects and disabling ACLs</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>If your bucket uses the bucket owner enforced setting for Object Ownership, all objects written to the bucket by any account will be owned by the bucket owner.</p> </note> <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you enable versioning for a bucket, Amazon S3 automatically generates a unique version ID for the object being stored. Amazon S3 returns this ID in the response. When you enable versioning for a bucket, if Amazon S3 receives multiple write requests for the same object simultaneously, it stores all of the objects. For more information about versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/AddingObjectstoVersioningEnabledBuckets.html">Adding Objects to Versioning-Enabled Buckets</a>. For information about returning the versioning state of a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a>. </p> <p>For more information about related Amazon S3 APIs, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectPUT.html">External documentation</a>

> Body parameter

```json
{
  "Body": "string",
  "x-amz-meta-": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="putobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-acl|header|string|false|<p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|Bucket|path|string|true|<p>The bucket name to which the PUT action was initiated. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Cache-Control|header|string|false| Can be used to specify caching behavior along the request/reply chain. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.|
|Content-Disposition|header|string|false|Specifies presentational information for the object. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc6266#section-4">https://www.rfc-editor.org/rfc/rfc6266#section-4</a>.|
|Content-Encoding|header|string|false|Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding">https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding</a>.|
|Content-Language|header|string|false|The language the content is in.|
|Content-Length|header|integer|false|Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length">https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length</a>.|
|Content-MD5|header|string|false|The base64-encoded 128-bit MD5 digest of the message (without the headers) according to RFC 1864. This header can be used as a message integrity check to verify that the data is the same data that was originally sent. Although it is optional, we recommend using the Content-MD5 mechanism as an end-to-end integrity check. For more information about REST request authentication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST Authentication</a>.|
|Content-Type|header|string|false|A standard MIME type describing the format of the contents. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type">https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type</a>.|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-checksum-crc32|header|string|false|This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 32-bit CRC32 checksum of the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-checksum-crc32c|header|string|false|This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 32-bit CRC32C checksum of the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-checksum-sha1|header|string|false|This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 160-bit SHA-1 digest of the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-checksum-sha256|header|string|false|This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 256-bit SHA-256 digest of the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|Expires|header|string(date-time)|false|The date and time at which the object is no longer cacheable. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc7234#section-5.3">https://www.rfc-editor.org/rfc/rfc7234#section-5.3</a>.|
|x-amz-grant-full-control|header|string|false|<p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|x-amz-grant-read|header|string|false|<p>Allows grantee to read the object data and its metadata.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|x-amz-grant-read-acp|header|string|false|<p>Allows grantee to read the object ACL.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|x-amz-grant-write-acp|header|string|false|<p>Allows grantee to write the ACL for the applicable object.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|Key|path|string|true|Object key for which the PUT action was initiated.|
|x-amz-server-side-encryption|header|string|false|The server-side encryption algorithm used when storing this object in Amazon S3 (for example, <code>AES256</code>, <code>aws:kms</code>, <code>aws:kms:dsse</code>).|
|x-amz-storage-class|header|string|false|By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-website-redirect-location|header|string|false|<p>If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. For information about object metadata, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a>.</p> <p>In the following example, the request header sets the redirect to an object (anotherPage.html) in the same bucket:</p> <p> <code>x-amz-website-redirect-location: /anotherPage.html</code> </p> <p>In the following example, the request header sets the object redirect to another website:</p> <p> <code>x-amz-website-redirect-location: http://www.example.com/</code> </p> <p>For more information about website hosting in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html">How to Configure Website Page Redirects</a>. </p>|
|x-amz-server-side-encryption-customer-algorithm|header|string|false|Specifies the algorithm to use to when encrypting the object (for example, AES256).|
|x-amz-server-side-encryption-customer-key|header|string(password)|false|Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the <code>x-amz-server-side-encryption-customer-algorithm</code> header.|
|x-amz-server-side-encryption-customer-key-MD5|header|string|false|Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.|
|x-amz-server-side-encryption-aws-kms-key-id|header|string(password)|false|If <code>x-amz-server-side-encryption</code> has a valid value of <code>aws:kms</code> or <code>aws:kms:dsse</code>, this header specifies the ID of the Key Management Service (KMS) symmetric encryption customer managed key that was used for the object. If you specify <code>x-amz-server-side-encryption:aws:kms</code> or <code>x-amz-server-side-encryption:aws:kms:dsse</code>, but do not provide<code> x-amz-server-side-encryption-aws-kms-key-id</code>, Amazon S3 uses the Amazon Web Services managed key (<code>aws/s3</code>) to protect the data. If the KMS key does not exist in the same account that's issuing the command, you must use the full ARN and not just the ID. |
|x-amz-server-side-encryption-context|header|string(password)|false|Specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs. This value is stored as object metadata and automatically gets passed on to Amazon Web Services KMS for future <code>GetObject</code> or <code>CopyObject</code> operations on this object.|
|x-amz-server-side-encryption-bucket-key-enabled|header|boolean|false|<p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). Setting this header to <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.</p> <p>Specifying this header with a PUT action doesn’t affect bucket-level settings for S3 Bucket Key.</p>|
|x-amz-request-payer|header|string|false|none|
|x-amz-tagging|header|string|false|The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For example, "Key1=Value1")|
|x-amz-object-lock-mode|header|string|false|The Object Lock mode that you want to apply to this object.|
|x-amz-object-lock-retain-until-date|header|string(date-time)|false|The date and time when you want this object's Object Lock to expire. Must be formatted as a timestamp parameter.|
|x-amz-object-lock-legal-hold|header|string|false|Specifies whether a legal hold will be applied to this object. For more information about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object Lock</a>.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» Body|body|string|false|Object data.|
|» x-amz-meta-|body|object|false|A map of metadata to store with the object in S3.|
|» » **additionalProperties**|body|[MetadataValue](#schemametadatavalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-acl|private|
|x-amz-acl|public-read|
|x-amz-acl|public-read-write|
|x-amz-acl|authenticated-read|
|x-amz-acl|aws-exec-read|
|x-amz-acl|bucket-owner-read|
|x-amz-acl|bucket-owner-full-control|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|x-amz-server-side-encryption|AES256|
|x-amz-server-side-encryption|aws:kms|
|x-amz-server-side-encryption|aws:kms:dsse|
|x-amz-storage-class|STANDARD|
|x-amz-storage-class|REDUCED_REDUNDANCY|
|x-amz-storage-class|STANDARD_IA|
|x-amz-storage-class|ONEZONE_IA|
|x-amz-storage-class|INTELLIGENT_TIERING|
|x-amz-storage-class|GLACIER|
|x-amz-storage-class|DEEP_ARCHIVE|
|x-amz-storage-class|OUTPOSTS|
|x-amz-storage-class|GLACIER_IR|
|x-amz-storage-class|SNOW|
|x-amz-request-payer|requester|
|x-amz-object-lock-mode|GOVERNANCE|
|x-amz-object-lock-mode|COMPLIANCE|
|x-amz-object-lock-legal-hold|ON|
|x-amz-object-lock-legal-hold|OFF|

<h3 id="putobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutObjectOutput](#schemaputobjectoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteObject

<a id="opIdDeleteObject"></a>

> Code samples

```bash
curl https://s3.amazonaws.com/string/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}/{Key}`

<p>Removes the null version (if there is one) of an object and inserts a delete marker, which becomes the latest version of the object. If there isn't a null version, Amazon S3 does not remove any objects but will still respond that the command was successful.</p> <p>To remove a specific version, you must use the version Id subresource. Using this subresource permanently deletes the version. If the object deleted is a delete marker, Amazon S3 sets the response header, <code>x-amz-delete-marker</code>, to true. </p> <p>If the object you want to delete is in a bucket where the bucket versioning configuration is MFA Delete enabled, you must include the <code>x-amz-mfa</code> request header in the DELETE <code>versionId</code> request. Requests that include <code>x-amz-mfa</code> must use HTTPS. </p> <p> For more information about MFA Delete, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMFADelete.html">Using MFA Delete</a>. To see sample requests that use versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectDELETE.html#ExampleVersionObjectDelete">Sample Request</a>. </p> <p>You can delete objects by explicitly calling DELETE Object or configure its lifecycle (<a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycle.html">PutBucketLifecycle</a>) to enable Amazon S3 to remove them for you. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them the <code>s3:DeleteObject</code>, <code>s3:DeleteObjectVersion</code>, and <code>s3:PutLifeCycleConfiguration</code> actions. </p> <p>The following action is related to <code>DeleteObject</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectDELETE.html">External documentation</a>

<h3 id="deleteobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name of the bucket containing the object. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|Key name of the object to delete.|
|x-amz-mfa|header|string|false|The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled.|
|versionId|query|string|false|VersionId used to reference a specific version of the object.|
|x-amz-request-payer|header|string|false|none|
|x-amz-bypass-governance-retention|header|boolean|false|Indicates whether S3 Object Lock should bypass Governance-mode restrictions to process this operation. To use this header, you must have the <code>s3:BypassGovernanceRetention</code> permission.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|

<h3 id="deleteobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteObjectOutput](#schemadeleteobjectoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## HeadObject

<a id="opIdHeadObject"></a>

> Code samples

```bash
curl https://s3.amazonaws.com/string/string \
  -X HEAD \
  -H "Authorization: ${API_KEY}"
```

`HEAD /{Bucket}/{Key}`

<p>The <code>HEAD</code> action retrieves metadata from an object without returning the object itself. This action is useful if you're only interested in an object's metadata. To use <code>HEAD</code>, you must have READ access to the object.</p> <p>A <code>HEAD</code> request has the same options as a <code>GET</code> action on an object. The response is identical to the <code>GET</code> response except that there is no response body. Because of this, if the <code>HEAD</code> request generates an error, it returns a generic <code>400 Bad Request</code>, <code>403 Forbidden</code> or <code>404 Not Found</code> code. It is not possible to retrieve the exact exception beyond these error codes.</p> <p>If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you retrieve the metadata from the object, you must use the following headers:</p> <ul> <li> <p> <code>x-amz-server-side-encryption-customer-algorithm</code> </p> </li> <li> <p> <code>x-amz-server-side-encryption-customer-key</code> </p> </li> <li> <p> <code>x-amz-server-side-encryption-customer-key-MD5</code> </p> </li> </ul> <p>For more information about SSE-C, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption (Using Customer-Provided Encryption Keys)</a>.</p> <note> <ul> <li> <p>Encryption request headers, like <code>x-amz-server-side-encryption</code>, should not be sent for <code>GET</code> requests if your object uses server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), or server-side encryption with Amazon S3 managed encryption keys (SSE-S3). If your object does use these types of keys, you’ll get an HTTP 400 Bad Request error.</p> </li> <li> <p> The last modified property in this case is the creation date of the object.</p> </li> </ul> </note> <p>Request headers are limited to 8 KB in size. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTCommonRequestHeaders.html">Common Request Headers</a>.</p> <p>Consider the following when using request headers:</p> <ul> <li> <p> Consideration 1 – If both of the <code>If-Match</code> and <code>If-Unmodified-Since</code> headers are present in the request as follows:</p> <ul> <li> <p> <code>If-Match</code> condition evaluates to <code>true</code>, and;</p> </li> <li> <p> <code>If-Unmodified-Since</code> condition evaluates to <code>false</code>;</p> </li> </ul> <p>Then Amazon S3 returns <code>200 OK</code> and the data requested.</p> </li> <li> <p> Consideration 2 – If both of the <code>If-None-Match</code> and <code>If-Modified-Since</code> headers are present in the request as follows:</p> <ul> <li> <p> <code>If-None-Match</code> condition evaluates to <code>false</code>, and;</p> </li> <li> <p> <code>If-Modified-Since</code> condition evaluates to <code>true</code>;</p> </li> </ul> <p>Then Amazon S3 returns the <code>304 Not Modified</code> response code.</p> </li> </ul> <p>For more information about conditional requests, see <a href="https://tools.ietf.org/html/rfc7232">RFC 7232</a>.</p> <dl> <dt>Permissions</dt> <dd> <p>You need the relevant read object (or version) permission for this operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/list_amazons3.html">Actions, resources, and condition keys for Amazon S3</a>. If the object you request doesn't exist, the error that Amazon S3 returns depends on whether you also have the s3:ListBucket permission.</p> <ul> <li> <p>If you have the <code>s3:ListBucket</code> permission on the bucket, Amazon S3 returns an HTTP status code 404 error.</p> </li> <li> <p>If you don’t have the <code>s3:ListBucket</code> permission, Amazon S3 returns an HTTP status code 403 error.</p> </li> </ul> </dd> </dl> <p>The following actions are related to <code>HeadObject</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectHEAD.html">External documentation</a>

<h3 id="headobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The name of the bucket containing the object.</p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|If-Match|header|string|false|Return the object only if its entity tag (ETag) is the same as the one specified; otherwise, return a 412 (precondition failed) error.|
|If-Modified-Since|header|string(date-time)|false|Return the object only if it has been modified since the specified time; otherwise, return a 304 (not modified) error.|
|If-None-Match|header|string|false|Return the object only if its entity tag (ETag) is different from the one specified; otherwise, return a 304 (not modified) error.|
|If-Unmodified-Since|header|string(date-time)|false|Return the object only if it has not been modified since the specified time; otherwise, return a 412 (precondition failed) error.|
|Key|path|string|true|The object key.|
|Range|header|string|false|HeadObject returns only the metadata for an object. If the Range is satisfiable, only the <code>ContentLength</code> is affected in the response. If the Range is not satisfiable, S3 returns a <code>416 - Requested Range Not Satisfiable</code> error.|
|versionId|query|string|false|VersionId used to reference a specific version of the object.|
|x-amz-server-side-encryption-customer-algorithm|header|string|false|Specifies the algorithm to use to when encrypting the object (for example, AES256).|
|x-amz-server-side-encryption-customer-key|header|string(password)|false|Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the <code>x-amz-server-side-encryption-customer-algorithm</code> header.|
|x-amz-server-side-encryption-customer-key-MD5|header|string|false|Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.|
|x-amz-request-payer|header|string|false|none|
|partNumber|query|integer|false|Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' HEAD request for the part specified. Useful querying about the size of the part and the number of parts in this object.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-checksum-mode|header|string|false|<p>To retrieve the checksum, this parameter must be enabled.</p> <p>In addition, if you enable <code>ChecksumMode</code> and the object is encrypted with Amazon Web Services Key Management Service (Amazon Web Services KMS), you must have permission to use the <code>kms:Decrypt</code> action for the request to succeed.</p>|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|x-amz-checksum-mode|ENABLED|

<h3 id="headobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[HeadObjectOutput](#schemaheadobjectoutput)|
|480|480|NoSuchKey|[NoSuchKey](#schemanosuchkey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetObjectTagging

<a id="opIdGetObjectTagging"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#tagging?tagging=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}/{Key}#tagging`

<p>Returns the tag-set of an object. You send the GET request against the tagging subresource associated with the object.</p> <p>To use this operation, you must have permission to perform the <code>s3:GetObjectTagging</code> action. By default, the GET action returns information about current version of an object. For a versioned bucket, you can have multiple versions of an object in your bucket. To retrieve tags of any other version, use the versionId query parameter. You also need permission for the <code>s3:GetObjectVersionTagging</code> action.</p> <p> By default, the bucket owner has this permission and can grant this permission to others.</p> <p> For information about the Amazon S3 object tagging feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html">Object Tagging</a>.</p> <p>The following actions are related to <code>GetObjectTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html">DeleteObjectTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html">PutObjectTagging</a> </p> </li> </ul>

<h3 id="getobjecttagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name containing the object for which to get the tagging information. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|Object key for which to get the tagging information.|
|versionId|query|string|false|The versionId of the object for which to get the tagging information.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-request-payer|header|string|false|none|
|tagging|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|tagging|true|

<h3 id="getobjecttagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetObjectTaggingOutput](#schemagetobjecttaggingoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutObjectTagging

<a id="opIdPutObjectTagging"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#tagging?tagging=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Tagging":{"TagSet":{}}}'
```

`PUT /{Bucket}/{Key}#tagging`

<p>Sets the supplied tag-set to an object that already exists in a bucket.</p> <p>A tag is a key-value pair. You can associate tags with an object by sending a PUT request against the tagging subresource that is associated with the object. You can retrieve tags by sending a GET request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a>.</p> <p>For tagging-related restrictions related to characters and encodings, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">Tag Restrictions</a>. Note that Amazon S3 limits the maximum number of tags to 10 tags per object.</p> <p>To use this operation, you must have permission to perform the <code>s3:PutObjectTagging</code> action. By default, the bucket owner has this permission and can grant this permission to others.</p> <p>To put tags of any other version, use the <code>versionId</code> query parameter. You also need permission for the <code>s3:PutObjectVersionTagging</code> action.</p> <p>For information about the Amazon S3 object tagging feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html">Object Tagging</a>.</p> <p> <code>PutObjectTagging</code> has the following special errors:</p> <ul> <li> <ul> <li> <p> <i>Code: InvalidTagError </i> </p> </li> <li> <p> <i>Cause: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html">Object Tagging</a>.</i> </p> </li> </ul> </li> <li> <ul> <li> <p> <i>Code: MalformedXMLError </i> </p> </li> <li> <p> <i>Cause: The XML provided does not match the schema.</i> </p> </li> </ul> </li> <li> <ul> <li> <p> <i>Code: OperationAbortedError </i> </p> </li> <li> <p> <i>Cause: A conflicting conditional action is currently in progress against this resource. Please try again.</i> </p> </li> </ul> </li> <li> <ul> <li> <p> <i>Code: InternalError</i> </p> </li> <li> <p> <i>Cause: The service was unable to apply the provided tag to the object.</i> </p> </li> </ul> </li> </ul> <p>The following operations are related to <code>PutObjectTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html">DeleteObjectTagging</a> </p> </li> </ul>

> Body parameter

```json
{
  "Tagging": {
    "TagSet": {}
  }
}
```

<h3 id="putobjecttagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name containing the object. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|Name of the object key.|
|versionId|query|string|false|The versionId of the object that the tag-set will be added to.|
|Content-MD5|header|string|false|<p>The MD5 hash for the request body.</p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-request-payer|header|string|false|none|
|tagging|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» Tagging|body|object|true|Container for <code>TagSet</code> elements.|
|» » TagSet|body|object|false|none|
|» Key|body|object|true|none|
|» Value|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|x-amz-request-payer|requester|
|tagging|true|

<h3 id="putobjecttagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutObjectTaggingOutput](#schemaputobjecttaggingoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteObjectTagging

<a id="opIdDeleteObjectTagging"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#tagging?tagging=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}/{Key}#tagging`

<p>Removes the entire tag set from the specified object. For more information about managing object tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html"> Object Tagging</a>.</p> <p>To use this operation, you must have permission to perform the <code>s3:DeleteObjectTagging</code> action.</p> <p>To delete tags of a specific object version, add the <code>versionId</code> query parameter in the request. You will need permission for the <code>s3:DeleteObjectVersionTagging</code> action.</p> <p>The following operations are related to <code>DeleteObjectTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html">PutObjectTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a> </p> </li> </ul>

<h3 id="deleteobjecttagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name containing the objects from which to remove the tags. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|The key that identifies the object in the bucket from which to remove all tags.|
|versionId|query|string|false|The versionId of the object that the tag-set will be removed from.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|tagging|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tagging|true|

<h3 id="deleteobjecttagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[DeleteObjectTaggingOutput](#schemadeleteobjecttaggingoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteObjects

<a id="opIdDeleteObjects"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#delete?delete=true' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Delete":{"Objects":{},"Quiet":{}}}'
```

`POST /{Bucket}#delete`

<p>This action enables you to delete multiple objects from a bucket using a single HTTP request. If you know the object keys that you want to delete, then this action provides a suitable alternative to sending individual delete requests, reducing per-request overhead.</p> <p>The request contains a list of up to 1000 keys that you want to delete. In the XML, you provide the object key names, and optionally, version IDs if you want to delete a specific version of the object from a versioning-enabled bucket. For each key, Amazon S3 performs a delete action and returns the result of that delete, success, or failure, in the response. Note that if the object specified in the request is not found, Amazon S3 returns the result as deleted.</p> <p> The action supports two modes for the response: verbose and quiet. By default, the action uses verbose mode in which the response includes the result of deletion of each key in your request. In quiet mode the response includes only keys where the delete action encountered an error. For a successful deletion, the action does not return any information about the delete in the response body.</p> <p>When performing this action on an MFA Delete enabled bucket, that attempts to delete any versioned objects, you must include an MFA token. If you do not provide one, the entire request will fail, even if there are non-versioned objects you are trying to delete. If you provide an invalid token, whether there are versioned keys in the request or not, the entire Multi-Object Delete request will fail. For information about MFA Delete, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html#MultiFactorAuthenticationDelete"> MFA Delete</a>.</p> <p>Finally, the Content-MD5 header is required for all Multi-Object Delete requests. Amazon S3 uses the header value to ensure that your request body has not been altered in transit.</p> <p>The following operations are related to <code>DeleteObjects</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html">CompleteMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html">AbortMultipartUpload</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/multiobjectdeleteapi.html">External documentation</a>

> Body parameter

```json
{
  "Delete": {
    "Objects": {},
    "Quiet": {}
  }
}
```

<h3 id="deleteobjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name containing the objects to delete. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|x-amz-mfa|header|string|false|The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled.|
|x-amz-request-payer|header|string|false|none|
|x-amz-bypass-governance-retention|header|boolean|false|Specifies whether you want to delete this object even if it has a Governance-type Object Lock in place. To use this header, you must have the <code>s3:BypassGovernanceRetention</code> permission.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p> <p>This checksum algorithm must be the same for all parts and it match the checksum value supplied in the <code>CreateMultipartUpload</code> request.</p>|
|delete|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» Delete|body|object|true|Container for the objects to delete.|
|» » Objects|body|object|false|none|
|» » Quiet|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|delete|true|

<h3 id="deleteobjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteObjectsOutput](#schemadeleteobjectsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPublicAccessBlock

<a id="opIdGetPublicAccessBlock"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#publicAccessBlock?publicAccessBlock=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#publicAccessBlock`

<p>Retrieves the <code>PublicAccessBlock</code> configuration for an Amazon S3 bucket. To use this operation, you must have the <code>s3:GetBucketPublicAccessBlock</code> permission. For more information about Amazon S3 permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a Policy</a>.</p> <important> <p>When Amazon S3 evaluates the <code>PublicAccessBlock</code> configuration for a bucket or an object, it checks the <code>PublicAccessBlock</code> configuration for both the bucket (or the bucket that contains the object) and the bucket owner's account. If the <code>PublicAccessBlock</code> settings are different between the bucket and the account, Amazon S3 uses the most restrictive combination of the bucket-level and account-level settings.</p> </important> <p>For more information about when Amazon S3 considers a bucket or an object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a>.</p> <p>The following operations are related to <code>GetPublicAccessBlock</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 Block Public Access</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html">PutPublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html">GetPublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a> </p> </li> </ul>

<h3 id="getpublicaccessblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want to retrieve. |
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|publicAccessBlock|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|publicAccessBlock|true|

<h3 id="getpublicaccessblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPublicAccessBlockOutput](#schemagetpublicaccessblockoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPublicAccessBlock

<a id="opIdPutPublicAccessBlock"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#publicAccessBlock?publicAccessBlock=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PublicAccessBlockConfiguration":{"BlockPublicAcls":{},"IgnorePublicAcls":{},"BlockPublicPolicy":{},"RestrictPublicBuckets":{}}}'
```

`PUT /{Bucket}#publicAccessBlock`

<p>Creates or modifies the <code>PublicAccessBlock</code> configuration for an Amazon S3 bucket. To use this operation, you must have the <code>s3:PutBucketPublicAccessBlock</code> permission. For more information about Amazon S3 permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a Policy</a>.</p> <important> <p>When Amazon S3 evaluates the <code>PublicAccessBlock</code> configuration for a bucket or an object, it checks the <code>PublicAccessBlock</code> configuration for both the bucket (or the bucket that contains the object) and the bucket owner's account. If the <code>PublicAccessBlock</code> configurations are different between the bucket and the account, Amazon S3 uses the most restrictive combination of the bucket-level and account-level settings.</p> </important> <p>For more information about when Amazon S3 considers a bucket or an object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a>.</p> <p>The following operations are related to <code>PutPublicAccessBlock</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html">GetPublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html">GetBucketPolicyStatus</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 Block Public Access</a> </p> </li> </ul>

> Body parameter

```json
{
  "PublicAccessBlockConfiguration": {
    "BlockPublicAcls": {},
    "IgnorePublicAcls": {},
    "BlockPublicPolicy": {},
    "RestrictPublicBuckets": {}
  }
}
```

<h3 id="putpublicaccessblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want to set.|
|Content-MD5|header|string|false|<p>The MD5 hash of the <code>PutPublicAccessBlock</code> request body. </p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|publicAccessBlock|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» PublicAccessBlockConfiguration|body|object|true|The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. |
|» » BlockPublicAcls|body|object|false|none|
|» » IgnorePublicAcls|body|object|false|none|
|» » BlockPublicPolicy|body|object|false|none|
|» » RestrictPublicBuckets|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|publicAccessBlock|true|

<h3 id="putpublicaccessblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePublicAccessBlock

<a id="opIdDeletePublicAccessBlock"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#publicAccessBlock?publicAccessBlock=true' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Bucket}#publicAccessBlock`

<p>Removes the <code>PublicAccessBlock</code> configuration for an Amazon S3 bucket. To use this operation, you must have the <code>s3:PutBucketPublicAccessBlock</code> permission. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>The following operations are related to <code>DeletePublicAccessBlock</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 Block Public Access</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html">GetPublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html">PutPublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html">GetBucketPolicyStatus</a> </p> </li> </ul>

<h3 id="deletepublicaccessblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want to delete. |
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|publicAccessBlock|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|publicAccessBlock|true|

<h3 id="deletepublicaccessblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketAccelerateConfiguration

<a id="opIdGetBucketAccelerateConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#accelerate?accelerate=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#accelerate`

<p>This implementation of the GET action uses the <code>accelerate</code> subresource to return the Transfer Acceleration state of a bucket, which is either <code>Enabled</code> or <code>Suspended</code>. Amazon S3 Transfer Acceleration is a bucket-level feature that enables you to perform faster data transfers to and from Amazon S3.</p> <p>To use this operation, you must have permission to perform the <code>s3:GetAccelerateConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to your Amazon S3 Resources</a> in the <i>Amazon S3 User Guide</i>.</p> <p>You set the Transfer Acceleration state of an existing bucket to <code>Enabled</code> or <code>Suspended</code> by using the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html">PutBucketAccelerateConfiguration</a> operation. </p> <p>A GET <code>accelerate</code> request does not return a state value for a bucket that has no transfer acceleration state. A bucket has no Transfer Acceleration state if a state has never been set on the bucket. </p> <p>For more information about transfer acceleration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Transfer Acceleration</a> in the Amazon S3 User Guide.</p> <p>The following operations are related to <code>GetBucketAccelerateConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html">PutBucketAccelerateConfiguration</a> </p> </li> </ul>

<h3 id="getbucketaccelerateconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket for which the accelerate configuration is retrieved.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-request-payer|header|string|false|none|
|accelerate|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|accelerate|true|

<h3 id="getbucketaccelerateconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketAccelerateConfigurationOutput](#schemagetbucketaccelerateconfigurationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketAccelerateConfiguration

<a id="opIdPutBucketAccelerateConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#accelerate?accelerate=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AccelerateConfiguration":{"Status":{}}}'
```

`PUT /{Bucket}#accelerate`

<p>Sets the accelerate configuration of an existing bucket. Amazon S3 Transfer Acceleration is a bucket-level feature that enables you to perform faster data transfers to Amazon S3.</p> <p> To use this operation, you must have permission to perform the <code>s3:PutAccelerateConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p> The Transfer Acceleration state of a bucket can be set to one of the following two values:</p> <ul> <li> <p> Enabled – Enables accelerated data transfers to the bucket.</p> </li> <li> <p> Suspended – Disables accelerated data transfers to the bucket.</p> </li> </ul> <p>The <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html">GetBucketAccelerateConfiguration</a> action returns the transfer acceleration state of a bucket.</p> <p>After setting the Transfer Acceleration state of a bucket to Enabled, it might take up to thirty minutes before the data transfer rates to the bucket increase.</p> <p> The name of the bucket used for Transfer Acceleration must be DNS-compliant and must not contain periods (".").</p> <p> For more information about transfer acceleration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Transfer Acceleration</a>.</p> <p>The following operations are related to <code>PutBucketAccelerateConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html">GetBucketAccelerateConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> </p> </li> </ul>

> Body parameter

```json
{
  "AccelerateConfiguration": {
    "Status": {}
  }
}
```

<h3 id="putbucketaccelerateconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket for which the accelerate configuration is set.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|accelerate|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» AccelerateConfiguration|body|object|true|Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Amazon S3 Transfer Acceleration</a> in the <i>Amazon S3 User Guide</i>.|
|» » Status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|accelerate|true|

<h3 id="putbucketaccelerateconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketAcl

<a id="opIdGetBucketAcl"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#acl?acl=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#acl`

<p>This implementation of the <code>GET</code> action uses the <code>acl</code> subresource to return the access control list (ACL) of a bucket. To use <code>GET</code> to return the ACL of the bucket, you must have <code>READ_ACP</code> access to the bucket. If <code>READ_ACP</code> permission is granted to the anonymous user, you can return the ACL of the bucket without using an authorization header.</p> <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p> <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned. For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a>.</p> <note> <p>If your bucket uses the bucket owner enforced setting for S3 Object Ownership, requests to read ACLs are still supported and return the <code>bucket-owner-full-control</code> ACL with the owner being the account that created the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html"> Controlling object ownership and disabling ACLs</a> in the <i>Amazon S3 User Guide</i>.</p> </note> <p>The following operations are related to <code>GetBucketAcl</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html">ListObjects</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETacl.html">External documentation</a>

<h3 id="getbucketacl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>Specifies the S3 bucket whose ACL is being requested.</p> <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p> <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned. For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a>.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|acl|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|acl|true|

<h3 id="getbucketacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketAclOutput](#schemagetbucketacloutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketAcl

<a id="opIdPutBucketAcl"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#acl?acl=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AccessControlPolicy":{"Grants":{},"Owner":{"DisplayName":{},"ID":{}}}}'
```

`PUT /{Bucket}#acl`

<p>Sets the permissions on an existing bucket using access control lists (ACL). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3_ACLs_UsingACLs.html">Using ACLs</a>. To set the ACL of a bucket, you must have <code>WRITE_ACP</code> permission.</p> <p>You can use one of the following two ways to set a bucket's permissions:</p> <ul> <li> <p>Specify the ACL in the request body</p> </li> <li> <p>Specify permissions using request headers</p> </li> </ul> <note> <p>You cannot specify access permission using both the body and the request headers.</p> </note> <p>Depending on your application needs, you may choose to set the ACL on a bucket using either the request body or the headers. For example, if you have an existing application that updates a bucket ACL using the request body, then you can continue to use that approach.</p> <important> <p>If your bucket uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. You must use policies to grant access to your bucket and the objects in it. Requests to set ACLs or update ACLs fail and return the <code>AccessControlListNotSupported</code> error code. Requests to read ACLs are still supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling object ownership</a> in the <i>Amazon S3 User Guide</i>.</p> </important> <dl> <dt>Permissions</dt> <dd> <p>You can set access permissions by using one of the following methods:</p> <ul> <li> <p>Specify a canned ACL with the <code>x-amz-acl</code> request header. Amazon S3 supports a set of predefined ACLs, known as <i>canned ACLs</i>. Each canned ACL has a predefined set of grantees and permissions. Specify the canned ACL name as the value of <code>x-amz-acl</code>. If you use this header, you cannot use other access control-specific headers in your request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.</p> </li> <li> <p>Specify access permissions explicitly with the <code>x-amz-grant-read</code>, <code>x-amz-grant-read-acp</code>, <code>x-amz-grant-write-acp</code>, and <code>x-amz-grant-full-control</code> headers. When using these headers, you specify explicit access permissions and grantees (Amazon Web Services accounts or Amazon S3 groups) who will receive the permission. If you use these ACL-specific headers, you cannot use the <code>x-amz-acl</code> header to set a canned ACL. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL) Overview</a>.</p> <p>You specify each grantee as a type=value pair, where the type is one of the following:</p> <ul> <li> <p> <code>id</code> – if the value specified is the canonical user ID of an Amazon Web Services account</p> </li> <li> <p> <code>uri</code> – if you are granting permissions to a predefined group</p> </li> <li> <p> <code>emailAddress</code> – if the value specified is the email address of an Amazon Web Services account</p> <note> <p>Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: </p> <ul> <li> <p>US East (N. Virginia)</p> </li> <li> <p>US West (N. California)</p> </li> <li> <p> US West (Oregon)</p> </li> <li> <p> Asia Pacific (Singapore)</p> </li> <li> <p>Asia Pacific (Sydney)</p> </li> <li> <p>Asia Pacific (Tokyo)</p> </li> <li> <p>Europe (Ireland)</p> </li> <li> <p>South America (São Paulo)</p> </li> </ul> <p>For a list of all the Amazon S3 supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.</p> </note> </li> </ul> <p>For example, the following <code>x-amz-grant-write</code> header grants create, overwrite, and delete objects permission to LogDelivery group predefined by Amazon S3 and two Amazon Web Services accounts identified by their email addresses.</p> <p> <code>x-amz-grant-write: uri="http://acs.amazonaws.com/groups/s3/LogDelivery", id="111122223333", id="555566667777" </code> </p> </li> </ul> <p>You can use either a canned ACL or specify access permissions explicitly. You cannot do both.</p> </dd> <dt>Grantee Values</dt> <dd> <p>You can specify the person (grantee) to whom you're assigning access rights (using request elements) in the following ways:</p> <ul> <li> <p>By the person's ID:</p> <p> <code>&lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"&gt;&lt;ID&gt;&lt;&gt;ID&lt;&gt;&lt;/ID&gt;&lt;DisplayName&gt;&lt;&gt;GranteesEmail&lt;&gt;&lt;/DisplayName&gt; &lt;/Grantee&gt;</code> </p> <p>DisplayName is optional and ignored in the request</p> </li> <li> <p>By URI:</p> <p> <code>&lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"&gt;&lt;URI&gt;&lt;&gt;http://acs.amazonaws.com/groups/global/AuthenticatedUsers&lt;&gt;&lt;/URI&gt;&lt;/Grantee&gt;</code> </p> </li> <li> <p>By Email address:</p> <p> <code>&lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"&gt;&lt;EmailAddress&gt;&lt;&gt;Grantees@email.com&lt;&gt;&lt;/EmailAddress&gt;&amp;&lt;/Grantee&gt;</code> </p> <p>The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser. </p> <note> <p>Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: </p> <ul> <li> <p>US East (N. Virginia)</p> </li> <li> <p>US West (N. California)</p> </li> <li> <p> US West (Oregon)</p> </li> <li> <p> Asia Pacific (Singapore)</p> </li> <li> <p>Asia Pacific (Sydney)</p> </li> <li> <p>Asia Pacific (Tokyo)</p> </li> <li> <p>Europe (Ireland)</p> </li> <li> <p>South America (São Paulo)</p> </li> </ul> <p>For a list of all the Amazon S3 supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.</p> </note> </li> </ul> </dd> </dl> <p>The following operations are related to <code>PutBucketAcl</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html">GetObjectAcl</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTacl.html">External documentation</a>

> Body parameter

```json
{
  "AccessControlPolicy": {
    "Grants": {},
    "Owner": {
      "DisplayName": {},
      "ID": {}
    }
  }
}
```

<h3 id="putbucketacl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-acl|header|string|false|The canned ACL to apply to the bucket.|
|Bucket|path|string|true|The bucket to which to apply the ACL.|
|Content-MD5|header|string|false|<p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864.</a> </p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-grant-full-control|header|string|false|Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.|
|x-amz-grant-read|header|string|false|Allows grantee to list the objects in the bucket.|
|x-amz-grant-read-acp|header|string|false|Allows grantee to read the bucket ACL.|
|x-amz-grant-write|header|string|false|<p>Allows grantee to create new objects in the bucket.</p> <p>For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects.</p>|
|x-amz-grant-write-acp|header|string|false|Allows grantee to write the ACL for the applicable bucket.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|acl|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» AccessControlPolicy|body|object|false|Contains the elements that set the ACL permissions for an object per grantee.|
|» » Grants|body|object|false|none|
|» Grantee|body|object|false|none|
|» » DisplayName|body|object|false|none|
|» » EmailAddress|body|object|false|none|
|» » ID|body|object|false|none|
|» » Type|body|object|true|none|
|» » URI|body|object|false|none|
|» Permission|body|object|false|none|
|» » Owner|body|object|false|none|
|» » » DisplayName|body|object|false|none|
|» » » ID|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-acl|private|
|x-amz-acl|public-read|
|x-amz-acl|public-read-write|
|x-amz-acl|authenticated-read|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|acl|true|

<h3 id="putbucketacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketLifecycle

<a id="opIdGetBucketLifecycle"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#lifecycle&deprecated!?lifecycle=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#lifecycle&deprecated!`

<aside class="warning">
This operation is deprecated
</aside>

<important> <p>For an updated version of this API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a>. If you configured a bucket lifecycle using the <code>filter</code> element, you should see the updated version of this topic. This topic is provided for backward compatibility.</p> </important> <p>Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a>.</p> <p> To use this operation, you must have permission to perform the <code>s3:GetLifecycleConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p> <code>GetBucketLifecycle</code> has the following special error:</p> <ul> <li> <p>Error code: <code>NoSuchLifecycleConfiguration</code> </p> <ul> <li> <p>Description: The lifecycle configuration does not exist.</p> </li> <li> <p>HTTP Status Code: 404 Not Found</p> </li> <li> <p>SOAP Fault Code Prefix: Client</p> </li> </ul> </li> </ul> <p>The following operations are related to <code>GetBucketLifecycle</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycle.html">PutBucketLifecycle</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html">DeleteBucketLifecycle</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETlifecycle.html">External documentation</a>

<h3 id="getbucketlifecycle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket for which to get the lifecycle information.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|lifecycle|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lifecycle|true|

<h3 id="getbucketlifecycle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketLifecycleOutput](#schemagetbucketlifecycleoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketLifecycle

<a id="opIdPutBucketLifecycle"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#lifecycle&deprecated!?lifecycle=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LifecycleConfiguration":{"Rules":{}}}'
```

`PUT /{Bucket}#lifecycle&deprecated!`

<aside class="warning">
This operation is deprecated
</aside>

<important> <p>For an updated version of this API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>. This version has been deprecated. Existing lifecycle configurations will work. For new lifecycle configurations, use the updated API. </p> </important> <p>Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration. For information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a> in the <i>Amazon S3 User Guide</i>. </p> <p>By default, all Amazon S3 resources, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration) are private. Only the resource owner, the Amazon Web Services account that created the resource, can access it. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, users must get the <code>s3:PutLifecycleConfiguration</code> permission.</p> <p>You can also explicitly deny permissions. Explicit denial also supersedes any other permissions. If you want to prevent users or accounts from removing or deleting objects from your bucket, you must deny them permissions for the following actions: </p> <ul> <li> <p> <code>s3:DeleteObject</code> </p> </li> <li> <p> <code>s3:DeleteObjectVersion</code> </p> </li> <li> <p> <code>s3:PutLifecycleConfiguration</code> </p> </li> </ul> <p>For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to your Amazon S3 Resources</a> in the <i>Amazon S3 User Guide</i>.</p> <p>For more examples of transitioning objects to storage classes such as STANDARD_IA or ONEZONE_IA, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#lifecycle-configuration-examples">Examples of Lifecycle Configuration</a>.</p> <p>The following operations are related to <code>PutBucketLifecycle</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html">GetBucketLifecycle</a>(Deprecated)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html">RestoreObject</a> </p> </li> <li> <p>By default, a resource owner—in this case, a bucket owner, which is the Amazon Web Services account that created the bucket—can perform any of the operations. A resource owner can also grant others permission to perform the operation. For more information, see the following topics in the Amazon S3 User Guide: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to your Amazon S3 Resources</a> </p> </li> </ul> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTlifecycle.html">External documentation</a>

> Body parameter

```json
{
  "LifecycleConfiguration": {
    "Rules": {}
  }
}
```

<h3 id="putbucketlifecycle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p/>|
|Content-MD5|header|string|false|<p/> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|lifecycle|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» LifecycleConfiguration|body|object|false|<p>Container for lifecycle rules. You can add as many as 1000 rules.</p> <p>For more information see, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html">Managing your storage lifecycle</a> in the <i>Amazon S3 User Guide</i>.</p>|
|» » Rules|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|lifecycle|true|

<h3 id="putbucketlifecycle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketLocation

<a id="opIdGetBucketLocation"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#location?location=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#location`

<p>Returns the Region the bucket resides in. You set the bucket's Region using the <code>LocationConstraint</code> request parameter in a <code>CreateBucket</code> request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>.</p> <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p> <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned. For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a>.</p> <note> <p>We recommend that you use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadBucket.html">HeadBucket</a> to return the Region that a bucket resides in. For backward compatibility, Amazon S3 continues to support GetBucketLocation.</p> </note> <p>The following operations are related to <code>GetBucketLocation</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETlocation.html">External documentation</a>

<h3 id="getbucketlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The name of the bucket for which to get the location.</p> <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p> <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned. For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a>.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|location|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|location|true|

<h3 id="getbucketlocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketLocationOutput](#schemagetbucketlocationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketLogging

<a id="opIdGetBucketLogging"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#logging?logging=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#logging`

<p>Returns the logging status of a bucket and the permissions users have to view and modify that status.</p> <p>The following operations are related to <code>GetBucketLogging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLogging.html">PutBucketLogging</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETlogging.html">External documentation</a>

<h3 id="getbucketlogging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The bucket name for which to get the logging information.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|logging|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|logging|true|

<h3 id="getbucketlogging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketLoggingOutput](#schemagetbucketloggingoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketLogging

<a id="opIdPutBucketLogging"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#logging?logging=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"BucketLoggingStatus":{"LoggingEnabled":{"TargetBucket":{},"TargetGrants":{},"TargetPrefix":{}}}}'
```

`PUT /{Bucket}#logging`

<p>Set the logging parameters for a bucket and to specify permissions for who can view and modify the logging parameters. All logs are saved to buckets in the same Amazon Web Services Region as the source bucket. To set the logging status of a bucket, you must be the bucket owner.</p> <p>The bucket owner is automatically granted FULL_CONTROL to all logs. You use the <code>Grantee</code> request element to grant access to other people. The <code>Permissions</code> request element specifies the kind of access the grantee has to the logs.</p> <important> <p>If the target bucket for log delivery uses the bucket owner enforced setting for S3 Object Ownership, you can't use the <code>Grantee</code> request element to grant access to others. Permissions can only be granted using policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html#grant-log-delivery-permissions-general">Permissions for server access log delivery</a> in the <i>Amazon S3 User Guide</i>.</p> </important> <dl> <dt>Grantee Values</dt> <dd> <p>You can specify the person (grantee) to whom you're assigning access rights (by using request elements) in the following ways:</p> <ul> <li> <p>By the person's ID:</p> <p> <code>&lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"&gt;&lt;ID&gt;&lt;&gt;ID&lt;&gt;&lt;/ID&gt;&lt;DisplayName&gt;&lt;&gt;GranteesEmail&lt;&gt;&lt;/DisplayName&gt; &lt;/Grantee&gt;</code> </p> <p> <code>DisplayName</code> is optional and ignored in the request.</p> </li> <li> <p>By Email address:</p> <p> <code> &lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"&gt;&lt;EmailAddress&gt;&lt;&gt;Grantees@email.com&lt;&gt;&lt;/EmailAddress&gt;&lt;/Grantee&gt;</code> </p> <p>The grantee is resolved to the <code>CanonicalUser</code> and, in a response to a <code>GETObjectAcl</code> request, appears as the CanonicalUser.</p> </li> <li> <p>By URI:</p> <p> <code>&lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"&gt;&lt;URI&gt;&lt;&gt;http://acs.amazonaws.com/groups/global/AuthenticatedUsers&lt;&gt;&lt;/URI&gt;&lt;/Grantee&gt;</code> </p> </li> </ul> </dd> </dl> <p>To enable logging, you use <code>LoggingEnabled</code> and its children request elements. To disable logging, you use an empty <code>BucketLoggingStatus</code> request element:</p> <p> <code>&lt;BucketLoggingStatus xmlns="http://doc.s3.amazonaws.com/2006-03-01" /&gt;</code> </p> <p>For more information about server access logging, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html">Server Access Logging</a> in the <i>Amazon S3 User Guide</i>. </p> <p>For more information about creating a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>. For more information about returning the logging status of a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html">GetBucketLogging</a>.</p> <p>The following operations are related to <code>PutBucketLogging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html">GetBucketLogging</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">External documentation</a>

> Body parameter

```json
{
  "BucketLoggingStatus": {
    "LoggingEnabled": {
      "TargetBucket": {},
      "TargetGrants": {},
      "TargetPrefix": {}
    }
  }
}
```

<h3 id="putbucketlogging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket for which to set the logging parameters.|
|Content-MD5|header|string|false|<p>The MD5 hash of the <code>PutBucketLogging</code> request body.</p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|logging|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» BucketLoggingStatus|body|object|true|Container for logging status information.|
|» » LoggingEnabled|body|[LoggingEnabled](#schemaloggingenabled)|false|Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the <i>Amazon S3 API Reference</i>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|logging|true|

<h3 id="putbucketlogging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketNotificationConfiguration

<a id="opIdGetBucketNotificationConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#notification?notification=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#notification`

<p>Returns the notification configuration of a bucket.</p> <p>If notifications are not enabled on the bucket, the action returns an empty <code>NotificationConfiguration</code> element.</p> <p>By default, you must be the bucket owner to read the notification configuration of a bucket. However, the bucket owner can use a bucket policy to grant permission to other users to read this configuration with the <code>s3:GetBucketNotification</code> permission.</p> <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p> <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned. For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a>.</p> <p>For more information about setting and reading the notification configuration on a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Setting Up Notification of Bucket Events</a>. For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies</a>.</p> <p>The following action is related to <code>GetBucketNotification</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotification.html">PutBucketNotification</a> </p> </li> </ul>

<h3 id="getbucketnotificationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The name of the bucket for which to get the notification configuration.</p> <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p> <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned. For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a>.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|notification|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|notification|true|

<h3 id="getbucketnotificationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotificationConfiguration](#schemanotificationconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketNotificationConfiguration

<a id="opIdPutBucketNotificationConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#notification?notification=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NotificationConfiguration":{"TopicConfigurations":{},"QueueConfigurations":{},"LambdaFunctionConfigurations":{},"EventBridgeConfiguration":{}}}'
```

`PUT /{Bucket}#notification`

<p>Enables notifications of specified events for a bucket. For more information about event notifications, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a>.</p> <p>Using this API, you can replace an existing notification configuration. The configuration is an XML file that defines the event types that you want Amazon S3 to publish and the destination where you want Amazon S3 to publish an event notification when it detects an event of the specified type.</p> <p>By default, your bucket has no event notifications configured. That is, the notification configuration will be an empty <code>NotificationConfiguration</code>.</p> <p> <code>&lt;NotificationConfiguration&gt;</code> </p> <p> <code>&lt;/NotificationConfiguration&gt;</code> </p> <p>This action replaces the existing notification configuration with the configuration you include in the request body.</p> <p>After Amazon S3 receives this request, it first verifies that any Amazon Simple Notification Service (Amazon SNS) or Amazon Simple Queue Service (Amazon SQS) destination exists, and that the bucket owner has permission to publish to it by sending a test notification. In the case of Lambda destinations, Amazon S3 verifies that the Lambda function permissions grant Amazon S3 permission to invoke the function from the Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Notifications for Amazon S3 Events</a>.</p> <p>You can disable notifications by adding the empty NotificationConfiguration element.</p> <p>For more information about the number of event notification configurations that you can create per bucket, see <a href="https://docs.aws.amazon.com/general/latest/gr/s3.html#limits_s3">Amazon S3 service quotas</a> in <i>Amazon Web Services General Reference</i>.</p> <p>By default, only the bucket owner can configure notifications on a bucket. However, bucket owners can use a bucket policy to grant permission to other users to set this configuration with the required <code>s3:PutBucketNotification</code> permission.</p> <note> <p>The PUT notification is an atomic operation. For example, suppose your notification configuration includes SNS topic, SQS queue, and Lambda function configurations. When you send a PUT request with this configuration, Amazon S3 sends test messages to your SNS topic. If the message fails, the entire PUT action will fail, and Amazon S3 will not add the configuration to your bucket.</p> </note> <p>If the configuration in the request body includes only one <code>TopicConfiguration</code> specifying only the <code>s3:ReducedRedundancyLostObject</code> event type, the response will also include the <code>x-amz-sns-test-message-id</code> header containing the message ID of the test notification sent to the topic.</p> <p>The following action is related to <code>PutBucketNotificationConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotificationConfiguration.html">GetBucketNotificationConfiguration</a> </p> </li> </ul>

> Body parameter

```json
{
  "NotificationConfiguration": {
    "TopicConfigurations": {},
    "QueueConfigurations": {},
    "LambdaFunctionConfigurations": {},
    "EventBridgeConfiguration": {}
  }
}
```

<h3 id="putbucketnotificationconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-skip-destination-validation|header|boolean|false|Skips validation of Amazon SQS, Amazon SNS, and Lambda destinations. True or false value.|
|notification|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» NotificationConfiguration|body|object|true|A container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off for the bucket.|
|» » TopicConfigurations|body|object|false|none|
|» » QueueConfigurations|body|object|false|none|
|» » LambdaFunctionConfigurations|body|object|false|none|
|» » EventBridgeConfiguration|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|notification|true|

<h3 id="putbucketnotificationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketNotification

<a id="opIdGetBucketNotification"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#notification&deprecated!?notification=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#notification&deprecated!`

<aside class="warning">
This operation is deprecated
</aside>

 No longer used, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotificationConfiguration.html">GetBucketNotificationConfiguration</a>.

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETnotification.html">External documentation</a>

<h3 id="getbucketnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The name of the bucket for which to get the notification configuration.</p> <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p> <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned. For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a>.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|notification|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|notification|true|

<h3 id="getbucketnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotificationConfigurationDeprecated](#schemanotificationconfigurationdeprecated)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketNotification

<a id="opIdPutBucketNotification"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#notification&deprecated!?notification=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NotificationConfiguration":{"QueueConfiguration":{"Event":"s3:ObjectCreated:Put","Events":["s3:ObjectCreated:Put"],"Id":"MDQ2OGQ4NDEtOTBmNi00YTM4LTk0NzYtZDIwN2I3NWQ1NjIx","Queue":"arn:aws:sqs:us-east-1:acct-id:S3ObjectCreatedEventQueue"},"TopicConfiguration":{"Event":"s3:ObjectCreated:Copy","Events":["s3:ObjectCreated:Copy"],"Id":"YTVkMWEzZGUtNTY1NS00ZmE2LWJjYjktMmRlY2QwODFkNTJi","Topic":"arn:aws:sns:us-east-1:acct-id:S3ObjectCreatedEventTopic"}}}'
```

`PUT /{Bucket}#notification&deprecated!`

<aside class="warning">
This operation is deprecated
</aside>

 No longer used, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotificationConfiguration.html">PutBucketNotificationConfiguration</a> operation.

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTnotification.html">External documentation</a>

> Body parameter

```json
{
  "NotificationConfiguration": {
    "QueueConfiguration": {
      "Event": "s3:ObjectCreated:Put",
      "Events": [
        "s3:ObjectCreated:Put"
      ],
      "Id": "MDQ2OGQ4NDEtOTBmNi00YTM4LTk0NzYtZDIwN2I3NWQ1NjIx",
      "Queue": "arn:aws:sqs:us-east-1:acct-id:S3ObjectCreatedEventQueue"
    },
    "TopicConfiguration": {
      "Event": "s3:ObjectCreated:Copy",
      "Events": [
        "s3:ObjectCreated:Copy"
      ],
      "Id": "YTVkMWEzZGUtNTY1NS00ZmE2LWJjYjktMmRlY2QwODFkNTJi",
      "Topic": "arn:aws:sns:us-east-1:acct-id:S3ObjectCreatedEventTopic"
    }
  }
}
```

<h3 id="putbucketnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket.|
|Content-MD5|header|string|false|<p>The MD5 hash of the <code>PutPublicAccessBlock</code> request body.</p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|notification|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» NotificationConfiguration|body|object|true|The container for the configuration.|
|» » TopicConfiguration|body|object|false|none|
|» » » Id|body|[NotificationId](#schemanotificationid)|false|An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.|
|» » » Events|body|object|false|none|
|» » » Event|body|object|false|none|
|» » » Topic|body|object|false|none|
|» » QueueConfiguration|body|object|false|none|
|» » » Id|body|[NotificationId](#schemanotificationid)|false|An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.|
|» » » Event|body|object|false|none|
|» » » Events|body|object|false|none|
|» » » Queue|body|object|false|none|
|» » CloudFunctionConfiguration|body|object|false|none|
|» » » Id|body|[NotificationId](#schemanotificationid)|false|An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.|
|» » » Event|body|object|false|none|
|» » » Events|body|object|false|none|
|» » » CloudFunction|body|object|false|none|
|» » » InvocationRole|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|notification|true|

<h3 id="putbucketnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketPolicyStatus

<a id="opIdGetBucketPolicyStatus"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#policyStatus?policyStatus=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#policyStatus`

<p>Retrieves the policy status for an Amazon S3 bucket, indicating whether the bucket is public. In order to use this operation, you must have the <code>s3:GetBucketPolicyStatus</code> permission. For more information about Amazon S3 permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a Policy</a>.</p> <p> For more information about when Amazon S3 considers a bucket public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a>. </p> <p>The following operations are related to <code>GetBucketPolicyStatus</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 Block Public Access</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html">GetPublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html">PutPublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a> </p> </li> </ul>

<h3 id="getbucketpolicystatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the Amazon S3 bucket whose policy status you want to retrieve.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|policyStatus|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|policyStatus|true|

<h3 id="getbucketpolicystatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketPolicyStatusOutput](#schemagetbucketpolicystatusoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketRequestPayment

<a id="opIdGetBucketRequestPayment"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#requestPayment?requestPayment=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#requestPayment`

<p>Returns the request payment configuration of a bucket. To use this version of the operation, you must be the bucket owner. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a>.</p> <p>The following operations are related to <code>GetBucketRequestPayment</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html">ListObjects</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTrequestPaymentGET.html">External documentation</a>

<h3 id="getbucketrequestpayment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket for which to get the payment request configuration|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|requestPayment|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|requestPayment|true|

<h3 id="getbucketrequestpayment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketRequestPaymentOutput](#schemagetbucketrequestpaymentoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketRequestPayment

<a id="opIdPutBucketRequestPayment"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#requestPayment?requestPayment=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RequestPaymentConfiguration":{"Payer":{}}}'
```

`PUT /{Bucket}#requestPayment`

<p>Sets the request payment configuration for a bucket. By default, the bucket owner pays for downloads from the bucket. This configuration parameter enables the bucket owner (only) to specify that the person requesting the download will be charged for the download. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a>.</p> <p>The following operations are related to <code>PutBucketRequestPayment</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html">GetBucketRequestPayment</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTrequestPaymentPUT.html">External documentation</a>

> Body parameter

```json
{
  "RequestPaymentConfiguration": {
    "Payer": {}
  }
}
```

<h3 id="putbucketrequestpayment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The bucket name.|
|Content-MD5|header|string|false|<p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|requestPayment|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» RequestPaymentConfiguration|body|object|true|Container for Payer.|
|» » Payer|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|requestPayment|true|

<h3 id="putbucketrequestpayment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketVersioning

<a id="opIdGetBucketVersioning"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#versioning?versioning=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#versioning`

<p>Returns the versioning state of a bucket.</p> <p>To retrieve the versioning state of a bucket, you must be the bucket owner.</p> <p>This implementation also returns the MFA Delete status of the versioning state. If the MFA Delete status is <code>enabled</code>, the bucket owner must use an authentication device to change the versioning state of the bucket.</p> <p>The following operations are related to <code>GetBucketVersioning</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETversioningStatus.html">External documentation</a>

<h3 id="getbucketversioning-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket for which to get the versioning information.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|versioning|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|versioning|true|

<h3 id="getbucketversioning-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketVersioningOutput](#schemagetbucketversioningoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketVersioning

<a id="opIdPutBucketVersioning"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#versioning?versioning=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"VersioningConfiguration":{"MFADelete":{},"Status":{}}}'
```

`PUT /{Bucket}#versioning`

<p>Sets the versioning state of an existing bucket.</p> <p>You can set the versioning state with one of the following values:</p> <p> <b>Enabled</b>—Enables versioning for the objects in the bucket. All objects added to the bucket receive a unique version ID.</p> <p> <b>Suspended</b>—Disables versioning for the objects in the bucket. All objects added to the bucket receive the version ID null.</p> <p>If the versioning state has never been set on a bucket, it has no versioning state; a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a> request does not return a versioning state value.</p> <p>In order to enable MFA Delete, you must be the bucket owner. If you are the bucket owner and want to enable MFA Delete in the bucket versioning configuration, you must include the <code>x-amz-mfa request</code> header and the <code>Status</code> and the <code>MfaDelete</code> request elements in a request to set the versioning state of the bucket.</p> <important> <p>If you have an object expiration lifecycle configuration in your non-versioned bucket and you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration policy. The noncurrent expiration lifecycle configuration will manage the deletes of the noncurrent object versions in the version-enabled bucket. (A version-enabled bucket maintains one current and zero or more noncurrent object versions.) For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html#lifecycle-and-other-bucket-config">Lifecycle and Versioning</a>.</p> </important> <p>The following operations are related to <code>PutBucketVersioning</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">External documentation</a>

> Body parameter

```json
{
  "VersioningConfiguration": {
    "MFADelete": {},
    "Status": {}
  }
}
```

<h3 id="putbucketversioning-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The bucket name.|
|Content-MD5|header|string|false|<p>&gt;The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-mfa|header|string|false|The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|versioning|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» VersioningConfiguration|body|object|true|Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT Bucket versioning</a> in the <i>Amazon S3 API Reference</i>.|
|» » MFADelete|body|object|false|none|
|» » Status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|versioning|true|

<h3 id="putbucketversioning-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetObjectAcl

<a id="opIdGetObjectAcl"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#acl?acl=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}/{Key}#acl`

<p>Returns the access control list (ACL) of an object. To use this operation, you must have <code>s3:GetObjectAcl</code> permissions or <code>READ_ACP</code> access to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#acl-access-policy-permission-mapping">Mapping of ACL permissions and access policy permissions</a> in the <i>Amazon S3 User Guide</i> </p> <p>This action is not supported by Amazon S3 on Outposts.</p> <p>By default, GET returns ACL information about the current version of an object. To return ACL information about a different version, use the versionId subresource.</p> <note> <p>If your bucket uses the bucket owner enforced setting for S3 Object Ownership, requests to read ACLs are still supported and return the <code>bucket-owner-full-control</code> ACL with the owner being the account that created the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html"> Controlling object ownership and disabling ACLs</a> in the <i>Amazon S3 User Guide</i>.</p> </note> <p>The following operations are related to <code>GetObjectAcl</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectGETacl.html">External documentation</a>

<h3 id="getobjectacl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name that contains the object for which to get the ACL information. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|The key of the object for which to get the ACL information.|
|versionId|query|string|false|VersionId used to reference a specific version of the object.|
|x-amz-request-payer|header|string|false|none|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|acl|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|acl|true|

<h3 id="getobjectacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetObjectAclOutput](#schemagetobjectacloutput)|
|480|480|NoSuchKey|[NoSuchKey](#schemanosuchkey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutObjectAcl

<a id="opIdPutObjectAcl"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#acl?acl=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AccessControlPolicy":{"Grants":{},"Owner":{"DisplayName":{},"ID":{}}}}'
```

`PUT /{Bucket}/{Key}#acl`

<p>Uses the <code>acl</code> subresource to set the access control list (ACL) permissions for a new or existing object in an S3 bucket. You must have <code>WRITE_ACP</code> permission to set the ACL of an object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions">What permissions can I grant?</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This action is not supported by Amazon S3 on Outposts.</p> <p>Depending on your application needs, you can choose to set the ACL on an object using either the request body or the headers. For example, if you have an existing application that updates a bucket ACL using the request body, you can continue to use that approach. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL) Overview</a> in the <i>Amazon S3 User Guide</i>.</p> <important> <p>If your bucket uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. You must use policies to grant access to your bucket and the objects in it. Requests to set ACLs or update ACLs fail and return the <code>AccessControlListNotSupported</code> error code. Requests to read ACLs are still supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling object ownership</a> in the <i>Amazon S3 User Guide</i>.</p> </important> <dl> <dt>Permissions</dt> <dd> <p>You can set access permissions using one of the following methods:</p> <ul> <li> <p>Specify a canned ACL with the <code>x-amz-acl</code> request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. Specify the canned ACL name as the value of <code>x-amz-ac</code>l. If you use this header, you cannot use other access control-specific headers in your request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.</p> </li> <li> <p>Specify access permissions explicitly with the <code>x-amz-grant-read</code>, <code>x-amz-grant-read-acp</code>, <code>x-amz-grant-write-acp</code>, and <code>x-amz-grant-full-control</code> headers. When using these headers, you specify explicit access permissions and grantees (Amazon Web Services accounts or Amazon S3 groups) who will receive the permission. If you use these ACL-specific headers, you cannot use <code>x-amz-acl</code> header to set a canned ACL. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL) Overview</a>.</p> <p>You specify each grantee as a type=value pair, where the type is one of the following:</p> <ul> <li> <p> <code>id</code> – if the value specified is the canonical user ID of an Amazon Web Services account</p> </li> <li> <p> <code>uri</code> – if you are granting permissions to a predefined group</p> </li> <li> <p> <code>emailAddress</code> – if the value specified is the email address of an Amazon Web Services account</p> <note> <p>Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: </p> <ul> <li> <p>US East (N. Virginia)</p> </li> <li> <p>US West (N. California)</p> </li> <li> <p> US West (Oregon)</p> </li> <li> <p> Asia Pacific (Singapore)</p> </li> <li> <p>Asia Pacific (Sydney)</p> </li> <li> <p>Asia Pacific (Tokyo)</p> </li> <li> <p>Europe (Ireland)</p> </li> <li> <p>South America (São Paulo)</p> </li> </ul> <p>For a list of all the Amazon S3 supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.</p> </note> </li> </ul> <p>For example, the following <code>x-amz-grant-read</code> header grants list objects permission to the two Amazon Web Services accounts identified by their email addresses.</p> <p> <code>x-amz-grant-read: emailAddress="xyz@amazon.com", emailAddress="abc@amazon.com" </code> </p> </li> </ul> <p>You can use either a canned ACL or specify access permissions explicitly. You cannot do both.</p> </dd> <dt>Grantee Values</dt> <dd> <p>You can specify the person (grantee) to whom you're assigning access rights (using request elements) in the following ways:</p> <ul> <li> <p>By the person's ID:</p> <p> <code>&lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"&gt;&lt;ID&gt;&lt;&gt;ID&lt;&gt;&lt;/ID&gt;&lt;DisplayName&gt;&lt;&gt;GranteesEmail&lt;&gt;&lt;/DisplayName&gt; &lt;/Grantee&gt;</code> </p> <p>DisplayName is optional and ignored in the request.</p> </li> <li> <p>By URI:</p> <p> <code>&lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"&gt;&lt;URI&gt;&lt;&gt;http://acs.amazonaws.com/groups/global/AuthenticatedUsers&lt;&gt;&lt;/URI&gt;&lt;/Grantee&gt;</code> </p> </li> <li> <p>By Email address:</p> <p> <code>&lt;Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"&gt;&lt;EmailAddress&gt;&lt;&gt;Grantees@email.com&lt;&gt;&lt;/EmailAddress&gt;lt;/Grantee&gt;</code> </p> <p>The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser.</p> <note> <p>Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: </p> <ul> <li> <p>US East (N. Virginia)</p> </li> <li> <p>US West (N. California)</p> </li> <li> <p> US West (Oregon)</p> </li> <li> <p> Asia Pacific (Singapore)</p> </li> <li> <p>Asia Pacific (Sydney)</p> </li> <li> <p>Asia Pacific (Tokyo)</p> </li> <li> <p>Europe (Ireland)</p> </li> <li> <p>South America (São Paulo)</p> </li> </ul> <p>For a list of all the Amazon S3 supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.</p> </note> </li> </ul> </dd> <dt>Versioning</dt> <dd> <p>The ACL of an object is set at the object version level. By default, PUT sets the ACL of the current version of an object. To set the ACL of a different version, use the <code>versionId</code> subresource.</p> </dd> </dl> <p>The following operations are related to <code>PutObjectAcl</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectPUTacl.html">External documentation</a>

> Body parameter

```json
{
  "AccessControlPolicy": {
    "Grants": {},
    "Owner": {
      "DisplayName": {},
      "ID": {}
    }
  }
}
```

<h3 id="putobjectacl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-acl|header|string|false|The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.|
|Bucket|path|string|true|<p>The bucket name that contains the object to which you want to attach the ACL. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Content-MD5|header|string|false|<p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864.&gt;</a> </p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-grant-full-control|header|string|false|<p>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|x-amz-grant-read|header|string|false|<p>Allows grantee to list the objects in the bucket.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|x-amz-grant-read-acp|header|string|false|<p>Allows grantee to read the bucket ACL.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|x-amz-grant-write|header|string|false|<p>Allows grantee to create new objects in the bucket.</p> <p>For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects.</p>|
|x-amz-grant-write-acp|header|string|false|<p>Allows grantee to write the ACL for the applicable bucket.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>|
|Key|path|string|true|<p>Key for which the PUT action was initiated.</p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|x-amz-request-payer|header|string|false|none|
|versionId|query|string|false|VersionId used to reference a specific version of the object.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|acl|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» AccessControlPolicy|body|object|false|Contains the elements that set the ACL permissions for an object per grantee.|
|» » Grants|body|object|false|none|
|» Grantee|body|object|false|none|
|» » DisplayName|body|object|false|none|
|» » EmailAddress|body|object|false|none|
|» » ID|body|object|false|none|
|» » Type|body|object|true|none|
|» » URI|body|object|false|none|
|» Permission|body|object|false|none|
|» » Owner|body|object|false|none|
|» » » DisplayName|body|object|false|none|
|» » » ID|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-acl|private|
|x-amz-acl|public-read|
|x-amz-acl|public-read-write|
|x-amz-acl|authenticated-read|
|x-amz-acl|aws-exec-read|
|x-amz-acl|bucket-owner-read|
|x-amz-acl|bucket-owner-full-control|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|x-amz-request-payer|requester|
|acl|true|

<h3 id="putobjectacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutObjectAclOutput](#schemaputobjectacloutput)|
|480|480|NoSuchKey|[NoSuchKey](#schemanosuchkey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetObjectAttributes

<a id="opIdGetObjectAttributes"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#attributes&x-amz-object-attributes?attributes=true' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-object-attributes: ETag'
```

`GET /{Bucket}/{Key}#attributes&x-amz-object-attributes`

<p>Retrieves all the metadata from an object without returning the object itself. This action is useful if you're interested only in an object's metadata. To use <code>GetObjectAttributes</code>, you must have READ access to the object.</p> <p> <code>GetObjectAttributes</code> combines the functionality of <code>HeadObject</code> and <code>ListParts</code>. All of the data returned with each of those individual calls can be returned with a single call to <code>GetObjectAttributes</code>.</p> <p>If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you retrieve the metadata from the object, you must use the following headers:</p> <ul> <li> <p> <code>x-amz-server-side-encryption-customer-algorithm</code> </p> </li> <li> <p> <code>x-amz-server-side-encryption-customer-key</code> </p> </li> <li> <p> <code>x-amz-server-side-encryption-customer-key-MD5</code> </p> </li> </ul> <p>For more information about SSE-C, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption (Using Customer-Provided Encryption Keys)</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <ul> <li> <p>Encryption request headers, such as <code>x-amz-server-side-encryption</code>, should not be sent for GET requests if your object uses server-side encryption with Amazon Web Services KMS keys stored in Amazon Web Services Key Management Service (SSE-KMS) or server-side encryption with Amazon S3 managed keys (SSE-S3). If your object does use these types of keys, you'll get an HTTP <code>400 Bad Request</code> error.</p> </li> <li> <p> The last modified property in this case is the creation date of the object.</p> </li> </ul> </note> <p>Consider the following when using request headers:</p> <ul> <li> <p> If both of the <code>If-Match</code> and <code>If-Unmodified-Since</code> headers are present in the request as follows, then Amazon S3 returns the HTTP status code <code>200 OK</code> and the data requested:</p> <ul> <li> <p> <code>If-Match</code> condition evaluates to <code>true</code>.</p> </li> <li> <p> <code>If-Unmodified-Since</code> condition evaluates to <code>false</code>.</p> </li> </ul> </li> <li> <p>If both of the <code>If-None-Match</code> and <code>If-Modified-Since</code> headers are present in the request as follows, then Amazon S3 returns the HTTP status code <code>304 Not Modified</code>:</p> <ul> <li> <p> <code>If-None-Match</code> condition evaluates to <code>false</code>.</p> </li> <li> <p> <code>If-Modified-Since</code> condition evaluates to <code>true</code>.</p> </li> </ul> </li> </ul> <p>For more information about conditional requests, see <a href="https://tools.ietf.org/html/rfc7232">RFC 7232</a>.</p> <dl> <dt>Permissions</dt> <dd> <p>The permissions that you need to use this operation depend on whether the bucket is versioned. If the bucket is versioned, you need both the <code>s3:GetObjectVersion</code> and <code>s3:GetObjectVersionAttributes</code> permissions for this operation. If the bucket is not versioned, you need the <code>s3:GetObject</code> and <code>s3:GetObjectAttributes</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a Policy</a> in the <i>Amazon S3 User Guide</i>. If the object that you request does not exist, the error Amazon S3 returns depends on whether you also have the <code>s3:ListBucket</code> permission.</p> <ul> <li> <p>If you have the <code>s3:ListBucket</code> permission on the bucket, Amazon S3 returns an HTTP status code <code>404 Not Found</code> ("no such key") error.</p> </li> <li> <p>If you don't have the <code>s3:ListBucket</code> permission, Amazon S3 returns an HTTP status code <code>403 Forbidden</code> ("access denied") error.</p> </li> </ul> </dd> </dl> <p>The following actions are related to <code>GetObjectAttributes</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html">GetObjectAcl</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html">GetObjectLegalHold</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html">GetObjectLockConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html">GetObjectRetention</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html">HeadObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a> </p> </li> </ul>

<h3 id="getobjectattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The name of the bucket that contains the object.</p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|The object key.|
|versionId|query|string|false|The version ID used to reference a specific version of the object.|
|x-amz-max-parts|header|integer|false|Sets the maximum number of parts to return.|
|x-amz-part-number-marker|header|integer|false|Specifies the part after which listing should begin. Only parts with higher part numbers will be listed.|
|x-amz-server-side-encryption-customer-algorithm|header|string|false|Specifies the algorithm to use when encrypting the object (for example, AES256).|
|x-amz-server-side-encryption-customer-key|header|string(password)|false|Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the <code>x-amz-server-side-encryption-customer-algorithm</code> header.|
|x-amz-server-side-encryption-customer-key-MD5|header|string|false|Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.|
|x-amz-request-payer|header|string|false|none|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-object-attributes|header|[[ObjectAttributes](#schemaobjectattributes)]|true|Specifies the fields at the root level that you want returned in the response. Fields that you do not specify are not returned.|
|attributes|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|x-amz-object-attributes|ETag|
|x-amz-object-attributes|Checksum|
|x-amz-object-attributes|ObjectParts|
|x-amz-object-attributes|StorageClass|
|x-amz-object-attributes|ObjectSize|
|attributes|true|

<h3 id="getobjectattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetObjectAttributesOutput](#schemagetobjectattributesoutput)|
|480|480|NoSuchKey|[NoSuchKey](#schemanosuchkey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetObjectLegalHold

<a id="opIdGetObjectLegalHold"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#legal-hold?legal-hold=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}/{Key}#legal-hold`

<p>Gets an object's current legal hold status. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.</p> <p>This action is not supported by Amazon S3 on Outposts.</p> <p>The following action is related to <code>GetObjectLegalHold</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a> </p> </li> </ul>

<h3 id="getobjectlegalhold-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name containing the object whose legal hold status you want to retrieve. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|The key name for the object whose legal hold status you want to retrieve.|
|versionId|query|string|false|The version ID of the object whose legal hold status you want to retrieve.|
|x-amz-request-payer|header|string|false|none|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|legal-hold|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|legal-hold|true|

<h3 id="getobjectlegalhold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetObjectLegalHoldOutput](#schemagetobjectlegalholdoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutObjectLegalHold

<a id="opIdPutObjectLegalHold"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#legal-hold?legal-hold=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"LegalHold":{"Status":{}}}'
```

`PUT /{Bucket}/{Key}#legal-hold`

<p>Applies a legal hold configuration to the specified object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.</p> <p>This action is not supported by Amazon S3 on Outposts.</p>

> Body parameter

```json
{
  "LegalHold": {
    "Status": {}
  }
}
```

<h3 id="putobjectlegalhold-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name containing the object that you want to place a legal hold on. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|The key name for the object that you want to place a legal hold on.|
|x-amz-request-payer|header|string|false|none|
|versionId|query|string|false|The version ID of the object that you want to place a legal hold on.|
|Content-MD5|header|string|false|<p>The MD5 hash for the request body.</p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|legal-hold|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» LegalHold|body|object|false|A legal hold configuration for an object.|
|» » Status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|legal-hold|true|

<h3 id="putobjectlegalhold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutObjectLegalHoldOutput](#schemaputobjectlegalholdoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetObjectLockConfiguration

<a id="opIdGetObjectLockConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#object-lock?object-lock=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#object-lock`

<p>Gets the Object Lock configuration for a bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.</p> <p>The following action is related to <code>GetObjectLockConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a> </p> </li> </ul>

<h3 id="getobjectlockconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket whose Object Lock configuration you want to retrieve.</p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|object-lock|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|object-lock|true|

<h3 id="getobjectlockconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetObjectLockConfigurationOutput](#schemagetobjectlockconfigurationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutObjectLockConfiguration

<a id="opIdPutObjectLockConfiguration"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#object-lock?object-lock=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ObjectLockConfiguration":{"ObjectLockEnabled":{},"Rule":{"DefaultRetention":{"Mode":{},"Days":{},"Years":{}}}}}'
```

`PUT /{Bucket}#object-lock`

<p>Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>. </p> <note> <ul> <li> <p>The <code>DefaultRetention</code> settings require both a mode and a period.</p> </li> <li> <p>The <code>DefaultRetention</code> period can be either <code>Days</code> or <code>Years</code> but you must select one. You cannot specify <code>Days</code> and <code>Years</code> at the same time.</p> </li> <li> <p>You can only enable Object Lock for new buckets. If you want to turn on Object Lock for an existing bucket, contact Amazon Web Services Support.</p> </li> </ul> </note>

> Body parameter

```json
{
  "ObjectLockConfiguration": {
    "ObjectLockEnabled": {},
    "Rule": {
      "DefaultRetention": {
        "Mode": {},
        "Days": {},
        "Years": {}
      }
    }
  }
}
```

<h3 id="putobjectlockconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The bucket whose Object Lock configuration you want to create or replace.|
|x-amz-request-payer|header|string|false|none|
|x-amz-bucket-object-lock-token|header|string|false|A token to allow Object Lock to be enabled for an existing bucket.|
|Content-MD5|header|string|false|<p>The MD5 hash for the request body.</p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|object-lock|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» ObjectLockConfiguration|body|object|false|The container element for Object Lock configuration parameters.|
|» » ObjectLockEnabled|body|object|false|none|
|» » Rule|body|object|false|none|
|» » » DefaultRetention|body|object|false|none|
|» » » » Mode|body|object|false|none|
|» » » » Days|body|object|false|none|
|» » » » Years|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|object-lock|true|

<h3 id="putobjectlockconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutObjectLockConfigurationOutput](#schemaputobjectlockconfigurationoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetObjectRetention

<a id="opIdGetObjectRetention"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#retention?retention=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}/{Key}#retention`

<p>Retrieves an object's retention settings. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.</p> <p>This action is not supported by Amazon S3 on Outposts.</p> <p>The following action is related to <code>GetObjectRetention</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a> </p> </li> </ul>

<h3 id="getobjectretention-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name containing the object whose retention settings you want to retrieve. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|The key name for the object whose retention settings you want to retrieve.|
|versionId|query|string|false|The version ID for the object whose retention settings you want to retrieve.|
|x-amz-request-payer|header|string|false|none|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|retention|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|retention|true|

<h3 id="getobjectretention-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetObjectRetentionOutput](#schemagetobjectretentionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutObjectRetention

<a id="opIdPutObjectRetention"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#retention?retention=true' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Retention":{"Mode":{},"RetainUntilDate":{}}}'
```

`PUT /{Bucket}/{Key}#retention`

<p>Places an Object Retention configuration on an object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>. Users or accounts require the <code>s3:PutObjectRetention</code> permission in order to place an Object Retention configuration on objects. Bypassing a Governance Retention configuration requires the <code>s3:BypassGovernanceRetention</code> permission. </p> <p>This action is not supported by Amazon S3 on Outposts.</p>

> Body parameter

```json
{
  "Retention": {
    "Mode": {},
    "RetainUntilDate": {}
  }
}
```

<h3 id="putobjectretention-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name that contains the object you want to apply this Object Retention configuration to. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|The key name for the object that you want to apply this Object Retention configuration to.|
|x-amz-request-payer|header|string|false|none|
|versionId|query|string|false|The version ID for the object that you want to apply this Object Retention configuration to.|
|x-amz-bypass-governance-retention|header|boolean|false|Indicates whether this action should bypass Governance-mode restrictions.|
|Content-MD5|header|string|false|<p>The MD5 hash for the request body.</p> <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|retention|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» Retention|body|object|false|A Retention configuration for an object.|
|» » Mode|body|object|false|none|
|» » RetainUntilDate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|retention|true|

<h3 id="putobjectretention-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutObjectRetentionOutput](#schemaputobjectretentionoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetObjectTorrent

<a id="opIdGetObjectTorrent"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#torrent?torrent=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}/{Key}#torrent`

<p>Returns torrent files from a bucket. BitTorrent can save you bandwidth when you're distributing large files.</p> <note> <p>You can get torrent only for objects that are less than 5 GB in size, and that are not encrypted using server-side encryption with a customer-provided encryption key.</p> </note> <p>To use GET, you must have READ access to the object.</p> <p>This action is not supported by Amazon S3 on Outposts.</p> <p>The following action is related to <code>GetObjectTorrent</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectGETtorrent.html">External documentation</a>

<h3 id="getobjecttorrent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket containing the object for which to get the torrent files.|
|Key|path|string|true|The object key for which to get the information.|
|x-amz-request-payer|header|string|false|none|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|torrent|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|torrent|true|

<h3 id="getobjecttorrent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetObjectTorrentOutput](#schemagetobjecttorrentoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBucketAnalyticsConfigurations

<a id="opIdListBucketAnalyticsConfigurations"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#analytics?analytics=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#analytics`

<p>Lists the analytics configurations for the bucket. You can have up to 1,000 analytics configurations per bucket.</p> <p>This action supports list pagination and does not return more than 100 configurations at a time. You should always check the <code>IsTruncated</code> element in the response. If there are no more configurations to list, <code>IsTruncated</code> is set to false. If there are more configurations to list, <code>IsTruncated</code> is set to true, and there will be a value in <code>NextContinuationToken</code>. You use the <code>NextContinuationToken</code> value to continue the pagination of the list by passing the value in continuation-token in the request to <code>GET</code> the next page.</p> <p>To use this operation, you must have permissions to perform the <code>s3:GetAnalyticsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For information about Amazon S3 analytics feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/analytics-storage-class.html">Amazon S3 Analytics – Storage Class Analysis</a>. </p> <p>The following operations are related to <code>ListBucketAnalyticsConfigurations</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html">GetBucketAnalyticsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketAnalyticsConfiguration.html">DeleteBucketAnalyticsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html">PutBucketAnalyticsConfiguration</a> </p> </li> </ul>

<h3 id="listbucketanalyticsconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket from which analytics configurations are retrieved.|
|continuation-token|query|string|false|The <code>ContinuationToken</code> that represents a placeholder from where this request should begin.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|analytics|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|analytics|true|

<h3 id="listbucketanalyticsconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBucketAnalyticsConfigurationsOutput](#schemalistbucketanalyticsconfigurationsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBucketIntelligentTieringConfigurations

<a id="opIdListBucketIntelligentTieringConfigurations"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#intelligent-tiering?intelligent-tiering=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#intelligent-tiering`

<p>Lists the S3 Intelligent-Tiering configuration from the specified bucket.</p> <p>The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities.</p> <p>The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p> <p>Operations related to <code>ListBucketIntelligentTieringConfigurations</code> include: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketIntelligentTieringConfiguration.html">DeleteBucketIntelligentTieringConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketIntelligentTieringConfiguration.html">PutBucketIntelligentTieringConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html">GetBucketIntelligentTieringConfiguration</a> </p> </li> </ul>

<h3 id="listbucketintelligenttieringconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.|
|continuation-token|query|string|false|The <code>ContinuationToken</code> that represents a placeholder from where this request should begin.|
|intelligent-tiering|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|intelligent-tiering|true|

<h3 id="listbucketintelligenttieringconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBucketIntelligentTieringConfigurationsOutput](#schemalistbucketintelligenttieringconfigurationsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBucketInventoryConfigurations

<a id="opIdListBucketInventoryConfigurations"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#inventory?inventory=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#inventory`

<p>Returns a list of inventory configurations for the bucket. You can have up to 1,000 analytics configurations per bucket.</p> <p>This action supports list pagination and does not return more than 100 configurations at a time. Always check the <code>IsTruncated</code> element in the response. If there are no more configurations to list, <code>IsTruncated</code> is set to false. If there are more configurations to list, <code>IsTruncated</code> is set to true, and there is a value in <code>NextContinuationToken</code>. You use the <code>NextContinuationToken</code> value to continue the pagination of the list by passing the value in continuation-token in the request to <code>GET</code> the next page.</p> <p> To use this operation, you must have permissions to perform the <code>s3:GetInventoryConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a> </p> <p>The following operations are related to <code>ListBucketInventoryConfigurations</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html">GetBucketInventoryConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html">DeleteBucketInventoryConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html">PutBucketInventoryConfiguration</a> </p> </li> </ul>

<h3 id="listbucketinventoryconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket containing the inventory configurations to retrieve.|
|continuation-token|query|string|false|The marker used to continue an inventory configuration listing that has been truncated. Use the <code>NextContinuationToken</code> from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|inventory|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|inventory|true|

<h3 id="listbucketinventoryconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBucketInventoryConfigurationsOutput](#schemalistbucketinventoryconfigurationsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBucketMetricsConfigurations

<a id="opIdListBucketMetricsConfigurations"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#metrics?metrics=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#metrics`

<p>Lists the metrics configurations for the bucket. The metrics configurations are only for the request metrics of the bucket and do not provide information on daily storage metrics. You can have up to 1,000 configurations per bucket.</p> <p>This action supports list pagination and does not return more than 100 configurations at a time. Always check the <code>IsTruncated</code> element in the response. If there are no more configurations to list, <code>IsTruncated</code> is set to false. If there are more configurations to list, <code>IsTruncated</code> is set to true, and there is a value in <code>NextContinuationToken</code>. You use the <code>NextContinuationToken</code> value to continue the pagination of the list by passing the value in <code>continuation-token</code> in the request to <code>GET</code> the next page.</p> <p>To use this operation, you must have permissions to perform the <code>s3:GetMetricsConfiguration</code> action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>For more information about metrics configurations and CloudWatch request metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon CloudWatch</a>.</p> <p>The following operations are related to <code>ListBucketMetricsConfigurations</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html">PutBucketMetricsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html">GetBucketMetricsConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetricsConfiguration.html">DeleteBucketMetricsConfiguration</a> </p> </li> </ul>

<h3 id="listbucketmetricsconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The name of the bucket containing the metrics configurations to retrieve.|
|continuation-token|query|string|false|The marker that is used to continue a metrics configuration listing that has been truncated. Use the <code>NextContinuationToken</code> from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|metrics|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|metrics|true|

<h3 id="listbucketmetricsconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBucketMetricsConfigurationsOutput](#schemalistbucketmetricsconfigurationsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBuckets

<a id="opIdListBuckets"></a>

> Code samples

```bash
curl https://s3.amazonaws.com/ \
  -H "Authorization: ${API_KEY}"
```

`GET /`

<p>Returns a list of all buckets owned by the authenticated sender of the request. To use this operation, you must have the <code>s3:ListAllMyBuckets</code> permission. </p> <p>For information about Amazon S3 buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html">Creating, configuring, and working with Amazon S3 buckets</a>.</p>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTServiceGET.html">External documentation</a>

<h3 id="listbuckets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-security-token|header|string|false|none|

<h3 id="listbuckets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBucketsOutput](#schemalistbucketsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMultipartUploads

<a id="opIdListMultipartUploads"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#uploads?uploads=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#uploads`

<p>This action lists in-progress multipart uploads. An in-progress multipart upload is a multipart upload that has been initiated using the Initiate Multipart Upload request, but has not yet been completed or aborted.</p> <p>This action returns at most 1,000 multipart uploads in the response. 1,000 multipart uploads is the maximum number of uploads a response can include, which is also the default value. You can further limit the number of uploads in a response by specifying the <code>max-uploads</code> parameter in the response. If additional multipart uploads satisfy the list criteria, the response will contain an <code>IsTruncated</code> element with the value true. To list the additional multipart uploads, use the <code>key-marker</code> and <code>upload-id-marker</code> request parameters.</p> <p>In the response, the uploads are sorted by key. If your application has initiated more than one multipart upload using the same object key, then uploads in the response are first sorted by key. Additionally, uploads are sorted in ascending order within each key by the upload initiation time.</p> <p>For more information on multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html">Uploading Objects Using Multipart Upload</a>.</p> <p>For information on permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload and Permissions</a>.</p> <p>The following operations are related to <code>ListMultipartUploads</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html">CompleteMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html">AbortMultipartUpload</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadListMPUpload.html">External documentation</a>

<h3 id="listmultipartuploads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The name of the bucket to which the multipart upload was initiated. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|delimiter|query|string|false|<p>Character you use to group keys.</p> <p>All keys that contain the same string between the prefix, if specified, and the first occurrence of the delimiter after the prefix are grouped under a single result element, <code>CommonPrefixes</code>. If you don't specify the prefix parameter, then the substring starts at the beginning of the key. The keys that are grouped under <code>CommonPrefixes</code> result element are not returned elsewhere in the response.</p>|
|encoding-type|query|string|false|none|
|key-marker|query|string|false|<p>Together with <code>upload-id-marker</code>, this parameter specifies the multipart upload after which listing should begin.</p> <p>If <code>upload-id-marker</code> is not specified, only the keys lexicographically greater than the specified <code>key-marker</code> will be included in the list.</p> <p>If <code>upload-id-marker</code> is specified, any multipart uploads for a key equal to the <code>key-marker</code> might also be included, provided those multipart uploads have upload IDs lexicographically greater than the specified <code>upload-id-marker</code>.</p>|
|max-uploads|query|integer|false|Sets the maximum number of multipart uploads, from 1 to 1,000, to return in the response body. 1,000 is the maximum number of uploads that can be returned in a response.|
|prefix|query|string|false|Lists in-progress uploads only for those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different grouping of keys. (You can think of using <code>prefix</code> to make groups in the same way that you'd use a folder in a file system.)|
|upload-id-marker|query|string|false|Together with key-marker, specifies the multipart upload after which listing should begin. If key-marker is not specified, the upload-id-marker parameter is ignored. Otherwise, any multipart uploads for a key equal to the key-marker might be included in the list only if they have an upload ID lexicographically greater than the specified <code>upload-id-marker</code>.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-request-payer|header|string|false|none|
|MaxUploads|query|string|false|Pagination limit|
|KeyMarker|query|string|false|Pagination token|
|UploadIdMarker|query|string|false|Pagination token|
|uploads|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|encoding-type|url|
|x-amz-request-payer|requester|
|uploads|true|

<h3 id="listmultipartuploads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMultipartUploadsOutput](#schemalistmultipartuploadsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListObjectVersions

<a id="opIdListObjectVersions"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#versions?versions=true' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#versions`

<p>Returns metadata about all versions of the objects in a bucket. You can also use request parameters as selection criteria to return metadata about a subset of all the object versions.</p> <important> <p> To use this operation, you must have permission to perform the <code>s3:ListBucketVersions</code> action. Be aware of the name difference. </p> </important> <note> <p> A <code>200 OK</code> response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately.</p> </note> <p>To use this operation, you must have READ access to the bucket.</p> <p>This action is not supported by Amazon S3 on Outposts.</p> <p>The following operations are related to <code>ListObjectVersions</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html">ListObjectsV2</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTBucketGETVersion.html">External documentation</a>

<h3 id="listobjectversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The bucket name that contains the objects. |
|delimiter|query|string|false|A delimiter is a character that you specify to group keys. All keys that contain the same string between the <code>prefix</code> and the first occurrence of the delimiter are grouped under a single result element in <code>CommonPrefixes</code>. These groups are counted as one result against the <code>max-keys</code> limitation. These keys are not returned elsewhere in the response.|
|encoding-type|query|string|false|none|
|key-marker|query|string|false|Specifies the key to start with when listing objects in a bucket.|
|max-keys|query|integer|false|Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more. If additional keys satisfy the search criteria, but were not returned because <code>max-keys</code> was exceeded, the response contains <code>&lt;isTruncated&gt;true&lt;/isTruncated&gt;</code>. To return the additional keys, see <code>key-marker</code> and <code>version-id-marker</code>.|
|prefix|query|string|false|Use this parameter to select only those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different groupings of keys. (You can think of using <code>prefix</code> to make groups in the same way that you'd use a folder in a file system.) You can use <code>prefix</code> with <code>delimiter</code> to roll up numerous objects into a single result under <code>CommonPrefixes</code>. |
|version-id-marker|query|string|false|Specifies the object version you want to start listing from.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-request-payer|header|string|false|none|
|x-amz-optional-object-attributes|header|[[OptionalObjectAttributes](#schemaoptionalobjectattributes)]|false|Specifies the optional fields that you want returned in the response. Fields that you do not specify are not returned.|
|MaxKeys|query|string|false|Pagination limit|
|KeyMarker|query|string|false|Pagination token|
|VersionIdMarker|query|string|false|Pagination token|
|versions|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|encoding-type|url|
|x-amz-request-payer|requester|
|x-amz-optional-object-attributes|RestoreStatus|
|versions|true|

<h3 id="listobjectversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListObjectVersionsOutput](#schemalistobjectversionsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListObjectsV2

<a id="opIdListObjectsV2"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string#list-type=2?list-type=2' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Bucket}#list-type=2`

<p>Returns some or all (up to 1,000) of the objects in a bucket with each request. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A <code>200 OK</code> response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately. Objects are returned sorted in an ascending order of the respective key names in the list. For more information about listing objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ListingKeysUsingAPIs.html">Listing object keys programmatically</a> in the <i>Amazon S3 User Guide</i>.</p> <p>To use this operation, you must have READ access to the bucket.</p> <p>To use this action in an Identity and Access Management (IAM) policy, you must have permission to perform the <code>s3:ListBucket</code> action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a> in the <i>Amazon S3 User Guide</i>.</p> <important> <p>This section describes the latest revision of this action. We recommend that you use this revised API operation for application development. For backward compatibility, Amazon S3 continues to support the prior version of this API operation, <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html">ListObjects</a>.</p> </important> <p>To get a list of your buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html">ListBuckets</a>.</p> <p>The following operations are related to <code>ListObjectsV2</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> </p> </li> </ul>

<h3 id="listobjectsv2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>Bucket name to list. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|delimiter|query|string|false|A delimiter is a character that you use to group keys.|
|encoding-type|query|string|false|Encoding type used by Amazon S3 to encode object keys in the response.|
|max-keys|query|integer|false|Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more.|
|prefix|query|string|false|Limits the response to keys that begin with the specified prefix.|
|continuation-token|query|string|false| <code>ContinuationToken</code> indicates to Amazon S3 that the list is being continued on this bucket with a token. <code>ContinuationToken</code> is obfuscated and is not a real key.|
|fetch-owner|query|boolean|false|The owner field is not present in <code>ListObjectsV2</code> by default. If you want to return the owner field with each key in the result, then set the <code>FetchOwner</code> field to <code>true</code>.|
|start-after|query|string|false|StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. StartAfter can be any key in the bucket.|
|x-amz-request-payer|header|string|false|Confirms that the requester knows that she or he will be charged for the list objects request in V2 style. Bucket owners need not specify this parameter in their requests.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-optional-object-attributes|header|[[OptionalObjectAttributes](#schemaoptionalobjectattributes)]|false|Specifies the optional fields that you want returned in the response. Fields that you do not specify are not returned.|
|MaxKeys|query|string|false|Pagination limit|
|ContinuationToken|query|string|false|Pagination token|
|list-type|query|string|true|none|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|encoding-type|url|
|x-amz-request-payer|requester|
|x-amz-optional-object-attributes|RestoreStatus|
|list-type|2|

<h3 id="listobjectsv2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListObjectsV2Output](#schemalistobjectsv2output)|
|480|480|NoSuchBucket|[NoSuchBucket](#schemanosuchbucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreObject

<a id="opIdRestoreObject"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#restore?restore=true' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RestoreRequest":{"Days":{},"GlacierJobParameters":{"Tier":{}},"Type":{},"Tier":{},"Description":{},"SelectParameters":{"InputSerialization":{"CSV":{"FileHeaderInfo":{},"Comments":{},"QuoteEscapeCharacter":{},"RecordDelimiter":{},"FieldDelimiter":{},"QuoteCharacter":{},"AllowQuotedRecordDelimiter":{}},"CompressionType":{},"JSON":{"Type":{}},"Parquet":{}},"ExpressionType":{},"Expression":{},"OutputSerialization":{"CSV":{"QuoteFields":{},"QuoteEscapeCharacter":{},"RecordDelimiter":{},"FieldDelimiter":{},"QuoteCharacter":{}},"JSON":{"RecordDelimiter":{}}}},"OutputLocation":{"S3":{"BucketName":{},"Prefix":{},"Encryption":{"EncryptionType":{},"KMSKeyId":{},"KMSContext":{}},"CannedACL":{},"AccessControlList":{},"Tagging":{"TagSet":{}},"UserMetadata":{},"StorageClass":{}}}}}'
```

`POST /{Bucket}/{Key}#restore`

<p>Restores an archived copy of an object back into Amazon S3</p> <p>This action is not supported by Amazon S3 on Outposts.</p> <p>This action performs the following types of requests: </p> <ul> <li> <p> <code>select</code> - Perform a select query on an archived object</p> </li> <li> <p> <code>restore an archive</code> - Restore an archived object</p> </li> </ul> <p>For more information about the <code>S3</code> structure in the request body, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3_ACLs_UsingACLs.html">Managing Access with ACLs</a> in the <i>Amazon S3 User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">Protecting Data Using Server-Side Encryption</a> in the <i>Amazon S3 User Guide</i> </p> </li> </ul> <p>Define the SQL expression for the <code>SELECT</code> type of restoration for your query in the request body's <code>SelectParameters</code> structure. You can use expressions like the following examples.</p> <ul> <li> <p>The following expression returns all records from the specified object.</p> <p> <code>SELECT * FROM Object</code> </p> </li> <li> <p>Assuming that you are not using any headers for data stored in the object, you can specify columns with positional headers.</p> <p> <code>SELECT s._1, s._2 FROM Object s WHERE s._3 &gt; 100</code> </p> </li> <li> <p>If you have headers and you set the <code>fileHeaderInfo</code> in the <code>CSV</code> structure in the request body to <code>USE</code>, you can specify headers in the query. (If you set the <code>fileHeaderInfo</code> field to <code>IGNORE</code>, the first row is skipped for the query.) You cannot mix ordinal positions with header column names. </p> <p> <code>SELECT s.Id, s.FirstName, s.SSN FROM S3Object s</code> </p> </li> </ul> <p>When making a select request, you can also do the following:</p> <ul> <li> <p>To expedite your queries, specify the <code>Expedited</code> tier. For more information about tiers, see "Restoring Archives," later in this topic.</p> </li> <li> <p>Specify details about the data serialization format of both the input object that is being queried and the serialization of the CSV-encoded query results.</p> </li> </ul> <p>The following are additional important facts about the select feature:</p> <ul> <li> <p>The output results are new Amazon S3 objects. Unlike archive retrievals, they are stored until explicitly deleted-manually or through a lifecycle configuration.</p> </li> <li> <p>You can issue more than one select request on the same Amazon S3 object. Amazon S3 doesn't duplicate requests, so avoid issuing duplicate requests.</p> </li> <li> <p> Amazon S3 accepts a select request even if the object has already been restored. A select request doesn’t return error response <code>409</code>.</p> </li> </ul> <dl> <dt>Permissions</dt> <dd> <p>To use this operation, you must have permissions to perform the <code>s3:RestoreObject</code> action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a> in the <i>Amazon S3 User Guide</i>.</p> </dd> <dt>Restoring objects</dt> <dd> <p>Objects that you archive to the S3 Glacier Flexible Retrieval Flexible Retrieval or S3 Glacier Deep Archive storage class, and S3 Intelligent-Tiering Archive or S3 Intelligent-Tiering Deep Archive tiers, are not accessible in real time. For objects in the S3 Glacier Flexible Retrieval Flexible Retrieval or S3 Glacier Deep Archive storage classes, you must first initiate a restore request, and then wait until a temporary copy of the object is available. If you want a permanent copy of the object, create a copy of it in the Amazon S3 Standard storage class in your S3 bucket. To access an archived object, you must restore the object for the duration (number of days) that you specify. For objects in the Archive Access or Deep Archive Access tiers of S3 Intelligent-Tiering, you must first initiate a restore request, and then wait until the object is moved into the Frequent Access tier.</p> <p>To restore a specific object version, you can provide a version ID. If you don't provide a version ID, Amazon S3 restores the current version.</p> <p>When restoring an archived object, you can specify one of the following data access tier options in the <code>Tier</code> element of the request body: </p> <ul> <li> <p> <code>Expedited</code> - Expedited retrievals allow you to quickly access your data stored in the S3 Glacier Flexible Retrieval Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier when occasional urgent requests for restoring archives are required. For all but the largest archived objects (250 MB+), data accessed using Expedited retrievals is typically made available within 1–5 minutes. Provisioned capacity ensures that retrieval capacity for Expedited retrievals is available when you need it. Expedited retrievals and provisioned capacity are not available for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier.</p> </li> <li> <p> <code>Standard</code> - Standard retrievals allow you to access any of your archived objects within several hours. This is the default option for retrieval requests that do not specify the retrieval option. Standard retrievals typically finish within 3–5 hours for objects stored in the S3 Glacier Flexible Retrieval Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier. They typically finish within 12 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. Standard retrievals are free for objects stored in S3 Intelligent-Tiering.</p> </li> <li> <p> <code>Bulk</code> - Bulk retrievals free for objects stored in the S3 Glacier Flexible Retrieval and S3 Intelligent-Tiering storage classes, enabling you to retrieve large amounts, even petabytes, of data at no cost. Bulk retrievals typically finish within 5–12 hours for objects stored in the S3 Glacier Flexible Retrieval Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier. Bulk retrievals are also the lowest-cost retrieval option when restoring objects from S3 Glacier Deep Archive. They typically finish within 48 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. </p> </li> </ul> <p>For more information about archive retrieval options and provisioned capacity for <code>Expedited</code> data access, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/restoring-objects.html">Restoring Archived Objects</a> in the <i>Amazon S3 User Guide</i>. </p> <p>You can use Amazon S3 restore speed upgrade to change the restore speed to a faster speed while it is in progress. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/restoring-objects.html#restoring-objects-upgrade-tier.title.html"> Upgrading the speed of an in-progress restore</a> in the <i>Amazon S3 User Guide</i>. </p> <p>To get the status of object restoration, you can send a <code>HEAD</code> request. Operations return the <code>x-amz-restore</code> header, which provides information about the restoration status, in the response. You can use Amazon S3 event notifications to notify you when a restore is initiated or completed. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Amazon S3 Event Notifications</a> in the <i>Amazon S3 User Guide</i>.</p> <p>After restoring an archived object, you can update the restoration period by reissuing the request with a new period. Amazon S3 updates the restoration period relative to the current time and charges only for the request-there are no data transfer charges. You cannot update the restoration period when Amazon S3 is actively processing your current restore request for the object.</p> <p>If your bucket has a lifecycle configuration with a rule that includes an expiration action, the object expiration overrides the life span that you specify in a restore request. For example, if you restore an object copy for 10 days, but the object is scheduled to expire in 3 days, Amazon S3 deletes the object in 3 days. For more information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a> in <i>Amazon S3 User Guide</i>.</p> </dd> <dt>Responses</dt> <dd> <p>A successful action returns either the <code>200 OK</code> or <code>202 Accepted</code> status code. </p> <ul> <li> <p>If the object is not previously restored, then Amazon S3 returns <code>202 Accepted</code> in the response. </p> </li> <li> <p>If the object is previously restored, Amazon S3 returns <code>200 OK</code> in the response. </p> </li> </ul> <ul> <li> <p>Special errors:</p> <ul> <li> <p> <i>Code: RestoreAlreadyInProgress</i> </p> </li> <li> <p> <i>Cause: Object restore is already in progress. (This error does not apply to SELECT type requests.)</i> </p> </li> <li> <p> <i>HTTP Status Code: 409 Conflict</i> </p> </li> <li> <p> <i>SOAP Fault Code Prefix: Client</i> </p> </li> </ul> </li> <li> <ul> <li> <p> <i>Code: GlacierExpeditedRetrievalNotAvailable</i> </p> </li> <li> <p> <i>Cause: expedited retrievals are currently not available. Try again later. (Returned if there is insufficient capacity to process the Expedited request. This error applies only to Expedited retrievals and not to S3 Standard or Bulk retrievals.)</i> </p> </li> <li> <p> <i>HTTP Status Code: 503</i> </p> </li> <li> <p> <i>SOAP Fault Code Prefix: N/A</i> </p> </li> </ul> </li> </ul> </dd> </dl> <p>The following operations are related to <code>RestoreObject</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotificationConfiguration.html">GetBucketNotificationConfiguration</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/RESTObjectRestore.html">External documentation</a>

> Body parameter

```json
{
  "RestoreRequest": {
    "Days": {},
    "GlacierJobParameters": {
      "Tier": {}
    },
    "Type": {},
    "Tier": {},
    "Description": {},
    "SelectParameters": {
      "InputSerialization": {
        "CSV": {
          "FileHeaderInfo": {},
          "Comments": {},
          "QuoteEscapeCharacter": {},
          "RecordDelimiter": {},
          "FieldDelimiter": {},
          "QuoteCharacter": {},
          "AllowQuotedRecordDelimiter": {}
        },
        "CompressionType": {},
        "JSON": {
          "Type": {}
        },
        "Parquet": {}
      },
      "ExpressionType": {},
      "Expression": {},
      "OutputSerialization": {
        "CSV": {
          "QuoteFields": {},
          "QuoteEscapeCharacter": {},
          "RecordDelimiter": {},
          "FieldDelimiter": {},
          "QuoteCharacter": {}
        },
        "JSON": {
          "RecordDelimiter": {}
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
          "TagSet": {}
        },
        "UserMetadata": {},
        "StorageClass": {}
      }
    }
  }
}
```

<h3 id="restoreobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name containing the object to restore. </p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Key|path|string|true|Object key for which the action was initiated.|
|versionId|query|string|false|VersionId used to reference a specific version of the object.|
|x-amz-request-payer|header|string|false|none|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p>|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|restore|query|boolean|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» RestoreRequest|body|object|false|Container for restore job parameters.|
|» » Days|body|object|false|none|
|» » GlacierJobParameters|body|object|false|none|
|» » » Tier|body|object|true|none|
|» » Type|body|object|false|none|
|» » Tier|body|object|false|none|
|» » Description|body|object|false|none|
|» » SelectParameters|body|object|false|none|
|» » » InputSerialization|body|object|true|none|
|» » » » CSV|body|object|false|none|
|» » » » » FileHeaderInfo|body|object|false|none|
|» » » » » Comments|body|object|false|none|
|» » » » » QuoteEscapeCharacter|body|object|false|none|
|» » » » » RecordDelimiter|body|object|false|none|
|» » » » » FieldDelimiter|body|object|false|none|
|» » » » » QuoteCharacter|body|object|false|none|
|» » » » » AllowQuotedRecordDelimiter|body|object|false|none|
|» » » » CompressionType|body|object|false|none|
|» » » » JSON|body|object|false|none|
|» » » » » Type|body|object|false|none|
|» » » » Parquet|body|object|false|none|
|» » » ExpressionType|body|object|true|none|
|» » » Expression|body|object|true|none|
|» » » OutputSerialization|body|object|true|none|
|» » » » CSV|body|object|false|none|
|» » » » » QuoteFields|body|object|false|none|
|» » » » » QuoteEscapeCharacter|body|object|false|none|
|» » » » » RecordDelimiter|body|object|false|none|
|» » » » » FieldDelimiter|body|object|false|none|
|» » » » » QuoteCharacter|body|object|false|none|
|» » » » JSON|body|object|false|none|
|» » » » » RecordDelimiter|body|object|false|none|
|» » OutputLocation|body|object|false|none|
|» » » S3|body|object|false|none|
|» » » » BucketName|body|object|true|none|
|» » » » Prefix|body|object|true|none|
|» » » » Encryption|body|[Encryption](#schemaencryption)|false|Contains the type of server-side encryption used.|
|» » » » CannedACL|body|object|false|none|
|» » » » AccessControlList|body|object|false|none|
|» Grantee|body|object|false|none|
|» » DisplayName|body|object|false|none|
|» » EmailAddress|body|object|false|none|
|» » ID|body|object|false|none|
|» » Type|body|object|true|none|
|» » URI|body|object|false|none|
|» Permission|body|object|false|none|
|» » » » Tagging|body|object|false|none|
|» » » » » TagSet|body|object|true|none|
|» Key|body|object|true|none|
|» Value|body|object|true|none|
|» » » » UserMetadata|body|object|false|none|
|» Name|body|object|false|none|
|» Value|body|object|false|none|
|» » » » StorageClass|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|restore|true|

<h3 id="restoreobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreObjectOutput](#schemarestoreobjectoutput)|
|480|480|ObjectAlreadyInActiveTierError|[ObjectAlreadyInActiveTierError](#schemaobjectalreadyinactivetiererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SelectObjectContent

<a id="opIdSelectObjectContent"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#select&select-type=2?select=true&select-type=2' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Expression":"string","ExpressionType":"SQL","RequestProgress":{"Enabled":{}},"InputSerialization":{"CSV":{"FileHeaderInfo":{},"Comments":{},"QuoteEscapeCharacter":{},"RecordDelimiter":{},"FieldDelimiter":{},"QuoteCharacter":{},"AllowQuotedRecordDelimiter":{}},"CompressionType":{},"JSON":{"Type":{}},"Parquet":{}},"OutputSerialization":{"CSV":{"QuoteFields":{},"QuoteEscapeCharacter":{},"RecordDelimiter":{},"FieldDelimiter":{},"QuoteCharacter":{}},"JSON":{"RecordDelimiter":{}}},"ScanRange":{"Start":{},"End":{}}}'
```

`POST /{Bucket}/{Key}#select&select-type=2`

<p>This action filters the contents of an Amazon S3 object based on a simple structured query language (SQL) statement. In the request, along with the SQL expression, you must also specify a data serialization format (JSON, CSV, or Apache Parquet) of the object. Amazon S3 uses this format to parse object data into records, and returns only records that match the specified SQL expression. You must also specify the data serialization format for the response.</p> <p>This action is not supported by Amazon S3 on Outposts.</p> <p>For more information about Amazon S3 Select, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/selecting-content-from-objects.html">Selecting Content from Objects</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html">SELECT Command</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <dl> <dt>Permissions</dt> <dd> <p>You must have <code>s3:GetObject</code> permission for this operation. Amazon S3 Select does not support anonymous access. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a Policy</a> in the <i>Amazon S3 User Guide</i>.</p> </dd> <dt>Object Data Formats</dt> <dd> <p>You can use Amazon S3 Select to query objects that have the following format properties:</p> <ul> <li> <p> <i>CSV, JSON, and Parquet</i> - Objects must be in CSV, JSON, or Parquet format.</p> </li> <li> <p> <i>UTF-8</i> - UTF-8 is the only encoding type Amazon S3 Select supports.</p> </li> <li> <p> <i>GZIP or BZIP2</i> - CSV and JSON files can be compressed using GZIP or BZIP2. GZIP and BZIP2 are the only compression formats that Amazon S3 Select supports for CSV and JSON files. Amazon S3 Select supports columnar compression for Parquet using GZIP or Snappy. Amazon S3 Select does not support whole-object compression for Parquet objects.</p> </li> <li> <p> <i>Server-side encryption</i> - Amazon S3 Select supports querying objects that are protected with server-side encryption.</p> <p>For objects that are encrypted with customer-provided encryption keys (SSE-C), you must use HTTPS, and you must use the headers that are documented in the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>. For more information about SSE-C, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption (Using Customer-Provided Encryption Keys)</a> in the <i>Amazon S3 User Guide</i>.</p> <p>For objects that are encrypted with Amazon S3 managed keys (SSE-S3) and Amazon Web Services KMS keys (SSE-KMS), server-side encryption is handled transparently, so you don't need to specify anything. For more information about server-side encryption, including SSE-S3 and SSE-KMS, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">Protecting Data Using Server-Side Encryption</a> in the <i>Amazon S3 User Guide</i>.</p> </li> </ul> </dd> <dt>Working with the Response Body</dt> <dd> <p>Given the response size is unknown, Amazon S3 Select streams the response as a series of messages and includes a <code>Transfer-Encoding</code> header with <code>chunked</code> as its value in the response. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTSelectObjectAppendix.html">Appendix: SelectObjectContent Response</a>.</p> </dd> <dt>GetObject Support</dt> <dd> <p>The <code>SelectObjectContent</code> action does not support the following <code>GetObject</code> functionality. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>.</p> <ul> <li> <p> <code>Range</code>: Although you can specify a scan range for an Amazon S3 Select request (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_SelectObjectContent.html#AmazonS3-SelectObjectContent-request-ScanRange">SelectObjectContentRequest - ScanRange</a> in the request parameters), you cannot specify the range of bytes of an object to return. </p> </li> <li> <p>The <code>GLACIER</code>, <code>DEEP_ARCHIVE</code>, and <code>REDUCED_REDUNDANCY</code> storage classes, or the <code>ARCHIVE_ACCESS</code> and <code>DEEP_ARCHIVE_ACCESS</code> access tiers of the <code>INTELLIGENT_TIERING</code> storage class: You cannot query objects in the <code>GLACIER</code>, <code>DEEP_ARCHIVE</code>, or <code>REDUCED_REDUNDANCY</code> storage classes, nor objects in the <code>ARCHIVE_ACCESS</code> or <code>DEEP_ARCHIVE_ACCESS</code> access tiers of the <code>INTELLIGENT_TIERING</code> storage class. For more information about storage classes, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html">Using Amazon S3 storage classes</a> in the <i>Amazon S3 User Guide</i>.</p> </li> </ul> </dd> <dt>Special Errors</dt> <dd> <p>For a list of special errors for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#SelectObjectContentErrorCodeList">List of SELECT Object Content Error Codes</a> </p> </dd> </dl> <p>The following operations are related to <code>SelectObjectContent</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> </ul>

> Body parameter

```json
{
  "Expression": "string",
  "ExpressionType": "SQL",
  "RequestProgress": {
    "Enabled": {}
  },
  "InputSerialization": {
    "CSV": {
      "FileHeaderInfo": {},
      "Comments": {},
      "QuoteEscapeCharacter": {},
      "RecordDelimiter": {},
      "FieldDelimiter": {},
      "QuoteCharacter": {},
      "AllowQuotedRecordDelimiter": {}
    },
    "CompressionType": {},
    "JSON": {
      "Type": {}
    },
    "Parquet": {}
  },
  "OutputSerialization": {
    "CSV": {
      "QuoteFields": {},
      "QuoteEscapeCharacter": {},
      "RecordDelimiter": {},
      "FieldDelimiter": {},
      "QuoteCharacter": {}
    },
    "JSON": {
      "RecordDelimiter": {}
    }
  },
  "ScanRange": {
    "Start": {},
    "End": {}
  }
}
```

<h3 id="selectobjectcontent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|The S3 bucket.|
|Key|path|string|true|The object key.|
|x-amz-server-side-encryption-customer-algorithm|header|string|false|The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created using a checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-server-side-encryption-customer-key|header|string(password)|false|The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-server-side-encryption-customer-key-MD5|header|string|false|The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|select|query|boolean|true|none|
|select-type|query|string|true|none|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» Expression|body|string|true|The expression that is used to query the object.|
|» ExpressionType|body|string|true|The type of the provided expression (for example, SQL).|
|» RequestProgress|body|object|false|Container for specifying if periodic <code>QueryProgress</code> messages should be sent.|
|» » Enabled|body|object|false|none|
|» InputSerialization|body|object|true|Describes the serialization format of the object.|
|» » CSV|body|object|false|none|
|» » » FileHeaderInfo|body|object|false|none|
|» » » Comments|body|object|false|none|
|» » » QuoteEscapeCharacter|body|object|false|none|
|» » » RecordDelimiter|body|object|false|none|
|» » » FieldDelimiter|body|object|false|none|
|» » » QuoteCharacter|body|object|false|none|
|» » » AllowQuotedRecordDelimiter|body|object|false|none|
|» » CompressionType|body|object|false|none|
|» » JSON|body|object|false|none|
|» » » Type|body|object|false|none|
|» » Parquet|body|object|false|none|
|» OutputSerialization|body|object|true|Describes how results of the Select job are serialized.|
|» » CSV|body|object|false|none|
|» » » QuoteFields|body|object|false|none|
|» » » QuoteEscapeCharacter|body|object|false|none|
|» » » RecordDelimiter|body|object|false|none|
|» » » FieldDelimiter|body|object|false|none|
|» » » QuoteCharacter|body|object|false|none|
|» » JSON|body|object|false|none|
|» » » RecordDelimiter|body|object|false|none|
|» ScanRange|body|object|false|Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional, but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.|
|» » Start|body|object|false|none|
|» » End|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|select|true|
|select-type|2|
|» ExpressionType|SQL|

<h3 id="selectobjectcontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SelectObjectContentOutput](#schemaselectobjectcontentoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UploadPart

<a id="opIdUploadPart"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#partNumber&uploadId?partNumber=0&uploadId=string' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Body":"string"}'
```

`PUT /{Bucket}/{Key}#partNumber&uploadId`

<p>Uploads a part in a multipart upload.</p> <note> <p>In this operation, you provide part data in your request. However, you have an option to specify your existing Amazon S3 object as a data source for the part you are uploading. To upload a part from an existing object, you use the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html">UploadPartCopy</a> operation. </p> </note> <p>You must initiate a multipart upload (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>) before you can upload any part. In response to your initiate request, Amazon S3 returns an upload ID, a unique identifier, that you must include in your upload part request.</p> <p>Part numbers can be any number from 1 to 10,000, inclusive. A part number uniquely identifies a part and also defines its position within the object being created. If you upload a new part using the same part number that was used with a previous part, the previously uploaded part is overwritten.</p> <p>For information about maximum and minimum part sizes and other multipart upload specifications, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/qfacts.html">Multipart upload limits</a> in the <i>Amazon S3 User Guide</i>.</p> <p>To ensure that data is not corrupted when traversing the network, specify the <code>Content-MD5</code> header in the upload part request. Amazon S3 checks the part data against the provided MD5 value. If they do not match, Amazon S3 returns an error. </p> <p>If the upload request is signed with Signature Version 4, then Amazon Web Services S3 uses the <code>x-amz-content-sha256</code> header as a checksum instead of <code>Content-MD5</code>. For more information see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html">Authenticating Requests: Using the Authorization Header (Amazon Web Services Signature Version 4)</a>. </p> <p> <b>Note:</b> After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, Amazon S3 frees up the parts storage and stops charging you for the parts storage.</p> <p>For more information on multipart uploads, go to <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html">Multipart Upload Overview</a> in the <i>Amazon S3 User Guide </i>.</p> <p>For information on the permissions required to use the multipart upload API, go to <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload and Permissions</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. You have three mutually exclusive options to protect data using server-side encryption in Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS), and Customer-Provided Keys (SSE-C). Amazon S3 encrypts data with server-side encryption using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to encrypt data at rest using server-side encryption with other key options. The option you use depends on whether you want to use KMS keys (SSE-KMS) or provide your own encryption key (SSE-C). If you choose to provide your own encryption key, the request headers you provide in the request must match the headers you used in the request to initiate the upload by using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>. For more information, go to <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html">Using Server-Side Encryption</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Server-side encryption is supported by the S3 Multipart Upload actions. Unless you are using a customer-provided encryption key (SSE-C), you don't need to specify the encryption parameters in each UploadPart request. Instead, you only need to specify the server-side encryption parameters in the initial Initiate Multipart request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>.</p> <p>If you requested server-side encryption using a customer-provided encryption key (SSE-C) in your initiate multipart upload request, you must provide identical encryption information in each part upload using the following headers.</p> <ul> <li> <p>x-amz-server-side-encryption-customer-algorithm</p> </li> <li> <p>x-amz-server-side-encryption-customer-key</p> </li> <li> <p>x-amz-server-side-encryption-customer-key-MD5</p> </li> </ul> <p> <code>UploadPart</code> has the following special errors:</p> <ul> <li> <ul> <li> <p> <i>Code: NoSuchUpload</i> </p> </li> <li> <p> <i>Cause: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.</i> </p> </li> <li> <p> <i> HTTP Status Code: 404 Not Found </i> </p> </li> <li> <p> <i>SOAP Fault Code Prefix: Client</i> </p> </li> </ul> </li> </ul> <p>The following operations are related to <code>UploadPart</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html">CompleteMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html">AbortMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html">ListMultipartUploads</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadUploadPart.html">External documentation</a>

> Body parameter

```json
{
  "Body": "string"
}
```

<h3 id="uploadpart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The name of the bucket to which the multipart upload was initiated.</p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|Content-Length|header|integer|false|Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically.|
|Content-MD5|header|string|false|The base64-encoded 128-bit MD5 digest of the part data. This parameter is auto-populated when using the command from the CLI. This parameter is required if object lock parameters are specified.|
|x-amz-sdk-checksum-algorithm|header|string|false|<p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code> parameter.</p> <p>This checksum algorithm must be the same for all parts and it match the checksum value supplied in the <code>CreateMultipartUpload</code> request.</p>|
|x-amz-checksum-crc32|header|string|false|This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 32-bit CRC32 checksum of the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-checksum-crc32c|header|string|false|This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 32-bit CRC32C checksum of the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-checksum-sha1|header|string|false|This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 160-bit SHA-1 digest of the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|x-amz-checksum-sha256|header|string|false|This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 256-bit SHA-256 digest of the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.|
|Key|path|string|true|Object key for which the multipart upload was initiated.|
|partNumber|query|integer|true|Part number of part being uploaded. This is a positive integer between 1 and 10,000.|
|uploadId|query|string|true|Upload ID identifying the multipart upload whose part is being uploaded.|
|x-amz-server-side-encryption-customer-algorithm|header|string|false|Specifies the algorithm to use to when encrypting the object (for example, AES256).|
|x-amz-server-side-encryption-customer-key|header|string(password)|false|Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the <code>x-amz-server-side-encryption-customer-algorithm header</code>. This must be the same encryption key specified in the initiate multipart upload request.|
|x-amz-server-side-encryption-customer-key-MD5|header|string|false|Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.|
|x-amz-request-payer|header|string|false|none|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» Body|body|string|false|Object data.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-sdk-checksum-algorithm|CRC32|
|x-amz-sdk-checksum-algorithm|CRC32C|
|x-amz-sdk-checksum-algorithm|SHA1|
|x-amz-sdk-checksum-algorithm|SHA256|
|x-amz-request-payer|requester|

<h3 id="uploadpart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UploadPartOutput](#schemauploadpartoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UploadPartCopy

<a id="opIdUploadPartCopy"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/string/string#x-amz-copy-source&partNumber&uploadId?partNumber=0&uploadId=string' \
  -X PUT \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-copy-source: string'
```

`PUT /{Bucket}/{Key}#x-amz-copy-source&partNumber&uploadId`

<p>Uploads a part by copying data from an existing object as data source. You specify the data source by adding the request header <code>x-amz-copy-source</code> in your request and a byte range by adding the request header <code>x-amz-copy-source-range</code> in your request. </p> <p>For information about maximum and minimum part sizes and other multipart upload specifications, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/qfacts.html">Multipart upload limits</a> in the <i>Amazon S3 User Guide</i>. </p> <note> <p>Instead of using an existing object as part data, you might use the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a> action and provide data in your request.</p> </note> <p>You must initiate a multipart upload before you can upload any part. In response to your initiate request. Amazon S3 returns a unique identifier, the upload ID, that you must include in your upload part request.</p> <p>For more information about using the <code>UploadPartCopy</code> operation, see the following:</p> <ul> <li> <p>For conceptual information about multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html">Uploading Objects Using Multipart Upload</a> in the <i>Amazon S3 User Guide</i>.</p> </li> <li> <p>For information about permissions required to use the multipart upload API, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload and Permissions</a> in the <i>Amazon S3 User Guide</i>.</p> </li> <li> <p>For information about copying objects using a single atomic action vs. a multipart upload, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectOperations.html">Operations on Objects</a> in the <i>Amazon S3 User Guide</i>.</p> </li> <li> <p>For information about using server-side encryption with customer-provided encryption keys with the <code>UploadPartCopy</code> operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>.</p> </li> </ul> <p>Note the following additional considerations about the request headers <code>x-amz-copy-source-if-match</code>, <code>x-amz-copy-source-if-none-match</code>, <code>x-amz-copy-source-if-unmodified-since</code>, and <code>x-amz-copy-source-if-modified-since</code>:</p> <p> </p> <ul> <li> <p> <b>Consideration 1</b> - If both of the <code>x-amz-copy-source-if-match</code> and <code>x-amz-copy-source-if-unmodified-since</code> headers are present in the request as follows:</p> <p> <code>x-amz-copy-source-if-match</code> condition evaluates to <code>true</code>, and;</p> <p> <code>x-amz-copy-source-if-unmodified-since</code> condition evaluates to <code>false</code>;</p> <p>Amazon S3 returns <code>200 OK</code> and copies the data. </p> </li> <li> <p> <b>Consideration 2</b> - If both of the <code>x-amz-copy-source-if-none-match</code> and <code>x-amz-copy-source-if-modified-since</code> headers are present in the request as follows:</p> <p> <code>x-amz-copy-source-if-none-match</code> condition evaluates to <code>false</code>, and;</p> <p> <code>x-amz-copy-source-if-modified-since</code> condition evaluates to <code>true</code>;</p> <p>Amazon S3 returns <code>412 Precondition Failed</code> response code. </p> </li> </ul> <dl> <dt>Versioning</dt> <dd> <p>If your bucket has versioning enabled, you could have multiple versions of the same object. By default, <code>x-amz-copy-source</code> identifies the current version of the object to copy. If the current version is a delete marker and you don't specify a versionId in the <code>x-amz-copy-source</code>, Amazon S3 returns a 404 error, because the object does not exist. If you specify versionId in the <code>x-amz-copy-source</code> and the versionId is a delete marker, Amazon S3 returns an HTTP 400 error, because you are not allowed to specify a delete marker as a version for the <code>x-amz-copy-source</code>. </p> <p>You can optionally specify a specific version of the source object to copy by adding the <code>versionId</code> subresource as shown in the following example:</p> <p> <code>x-amz-copy-source: /bucket/object?versionId=version id</code> </p> </dd> <dt>Special errors</dt> <dd> <ul> <li> <ul> <li> <p> <i>Code: NoSuchUpload</i> </p> </li> <li> <p> <i>Cause: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.</i> </p> </li> <li> <p> <i>HTTP Status Code: 404 Not Found</i> </p> </li> </ul> </li> <li> <ul> <li> <p> <i>Code: InvalidRequest</i> </p> </li> <li> <p> <i>Cause: The specified copy source is not supported as a byte-range copy source.</i> </p> </li> <li> <p> <i>HTTP Status Code: 400 Bad Request</i> </p> </li> </ul> </li> </ul> </dd> </dl> <p>The following operations are related to <code>UploadPartCopy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html">CompleteMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html">AbortMultipartUpload</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html">ListMultipartUploads</a> </p> </li> </ul>

<a href="http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadUploadPartCopy.html">External documentation</a>

<h3 id="uploadpartcopy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Bucket|path|string|true|<p>The bucket name.</p> <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code> <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>|
|x-amz-copy-source|header|string|true|<p>Specifies the source object for the copy operation. You specify the value in one of two formats, depending on whether you want to access the source object through an <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">access point</a>:</p> <ul> <li> <p>For objects not accessed through an access point, specify the name of the source bucket and key of the source object, separated by a slash (/). For example, to copy the object <code>reports/january.pdf</code> from the bucket <code>awsexamplebucket</code>, use <code>awsexamplebucket/reports/january.pdf</code>. The value must be URL-encoded.</p> </li> <li> <p>For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format <code>arn:aws:s3:&lt;Region&gt;:&lt;account-id&gt;:accesspoint/&lt;access-point-name&gt;/object/&lt;key&gt;</code>. For example, to copy the object <code>reports/january.pdf</code> through access point <code>my-access-point</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf</code>. The value must be URL encoded.</p> <note> <p>Amazon S3 supports copy operations using access points only when the source and destination buckets are in the same Amazon Web Services Region.</p> </note> <p>Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/object/&lt;key&gt;</code>. For example, to copy the object <code>reports/january.pdf</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf</code>. The value must be URL-encoded. </p> </li> </ul> <p>To copy a specific version of an object, append <code>?versionId=&lt;version-id&gt;</code> to the value (for example, <code>awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893</code>). If you don't specify a version ID, Amazon S3 copies the latest version of the source object.</p>|
|x-amz-copy-source-if-match|header|string|false|Copies the object if its entity tag (ETag) matches the specified tag.|
|x-amz-copy-source-if-modified-since|header|string(date-time)|false|Copies the object if it has been modified since the specified time.|
|x-amz-copy-source-if-none-match|header|string|false|Copies the object if its entity tag (ETag) is different than the specified ETag.|
|x-amz-copy-source-if-unmodified-since|header|string(date-time)|false|Copies the object if it hasn't been modified since the specified time.|
|x-amz-copy-source-range|header|string|false|The range of bytes to copy from the source object. The range value must use the form bytes=first-last, where the first and last are the zero-based byte offsets to copy. For example, bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You can copy a range only if the source object is greater than 5 MB.|
|Key|path|string|true|Object key for which the multipart upload was initiated.|
|partNumber|query|integer|true|Part number of part being copied. This is a positive integer between 1 and 10,000.|
|uploadId|query|string|true|Upload ID identifying the multipart upload whose part is being copied.|
|x-amz-server-side-encryption-customer-algorithm|header|string|false|Specifies the algorithm to use to when encrypting the object (for example, AES256).|
|x-amz-server-side-encryption-customer-key|header|string(password)|false|Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the <code>x-amz-server-side-encryption-customer-algorithm</code> header. This must be the same encryption key specified in the initiate multipart upload request.|
|x-amz-server-side-encryption-customer-key-MD5|header|string|false|Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.|
|x-amz-copy-source-server-side-encryption-customer-algorithm|header|string|false|Specifies the algorithm to use when decrypting the source object (for example, AES256).|
|x-amz-copy-source-server-side-encryption-customer-key|header|string(password)|false|Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.|
|x-amz-copy-source-server-side-encryption-customer-key-MD5|header|string|false|Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.|
|x-amz-request-payer|header|string|false|none|
|x-amz-expected-bucket-owner|header|string|false|The account ID of the expected destination bucket owner. If the destination bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-source-expected-bucket-owner|header|string|false|The account ID of the expected source bucket owner. If the source bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).|
|x-amz-security-token|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-request-payer|requester|

<h3 id="uploadpartcopy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UploadPartCopyOutput](#schemauploadpartcopyoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## WriteGetObjectResponse

<a id="opIdWriteGetObjectResponse"></a>

> Code samples

```bash
curl 'https://s3.amazonaws.com/WriteGetObjectResponse#x-amz-request-route&x-amz-request-token' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-request-route: string' \
  -H 'x-amz-request-token: string' \
  -d '{"Body":"string","x-amz-meta-":{"property1":"string","property2":"string"}}'
```

`POST /WriteGetObjectResponse#x-amz-request-route&x-amz-request-token`

<p>Passes transformed objects to a <code>GetObject</code> operation when using Object Lambda access points. For information about Object Lambda access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html">Transforming objects with Object Lambda access points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This operation supports metadata that can be returned by <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>, in addition to <code>RequestRoute</code>, <code>RequestToken</code>, <code>StatusCode</code>, <code>ErrorCode</code>, and <code>ErrorMessage</code>. The <code>GetObject</code> response metadata is supported so that the <code>WriteGetObjectResponse</code> caller, typically an Lambda function, can provide the same metadata when it internally invokes <code>GetObject</code>. When <code>WriteGetObjectResponse</code> is called by a customer-owned Lambda function, the metadata returned to the end user <code>GetObject</code> call might differ from what Amazon S3 would normally return.</p> <p>You can include any number of metadata headers. When including a metadata header, it should be prefaced with <code>x-amz-meta</code>. For example, <code>x-amz-meta-my-custom-header: MyCustomValue</code>. The primary use case for this is to forward <code>GetObject</code> metadata.</p> <p>Amazon Web Services provides some prebuilt Lambda functions that you can use with S3 Object Lambda to detect and redact personally identifiable information (PII) and decompress S3 objects. These Lambda functions are available in the Amazon Web Services Serverless Application Repository, and can be selected through the Amazon Web Services Management Console when you create your Object Lambda access point.</p> <p>Example 1: PII Access Control - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically detects personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket. </p> <p>Example 2: PII Redaction - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically redacts personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket. </p> <p>Example 3: Decompression - The Lambda function S3ObjectLambdaDecompression, is equipped to decompress objects stored in S3 in one of six compressed file formats including bzip2, gzip, snappy, zlib, zstandard and ZIP. </p> <p>For information on how to view and use these functions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-examples.html">Using Amazon Web Services built Lambda functions</a> in the <i>Amazon S3 User Guide</i>.</p>

> Body parameter

```json
{
  "Body": "string",
  "x-amz-meta-": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="writegetobjectresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-request-route|header|string|true|Route prefix to the HTTP URL generated.|
|x-amz-request-token|header|string|true|A single use encrypted token that maps <code>WriteGetObjectResponse</code> to the end user <code>GetObject</code> request.|
|x-amz-fwd-status|header|integer|false|<p>The integer status code for an HTTP response of a corresponding <code>GetObject</code> request. The following is a list of status codes.</p> <ul> <li> <p> <code>200 - OK</code> </p> </li> <li> <p> <code>206 - Partial Content</code> </p> </li> <li> <p> <code>304 - Not Modified</code> </p> </li> <li> <p> <code>400 - Bad Request</code> </p> </li> <li> <p> <code>401 - Unauthorized</code> </p> </li> <li> <p> <code>403 - Forbidden</code> </p> </li> <li> <p> <code>404 - Not Found</code> </p> </li> <li> <p> <code>405 - Method Not Allowed</code> </p> </li> <li> <p> <code>409 - Conflict</code> </p> </li> <li> <p> <code>411 - Length Required</code> </p> </li> <li> <p> <code>412 - Precondition Failed</code> </p> </li> <li> <p> <code>416 - Range Not Satisfiable</code> </p> </li> <li> <p> <code>500 - Internal Server Error</code> </p> </li> <li> <p> <code>503 - Service Unavailable</code> </p> </li> </ul>|
|x-amz-fwd-error-code|header|string|false|A string that uniquely identifies an error condition. Returned in the &lt;Code&gt; tag of the error XML response for a corresponding <code>GetObject</code> call. Cannot be used with a successful <code>StatusCode</code> header or when the transformed object is provided in the body. All error codes from S3 are sentence-cased. The regular expression (regex) value is <code>"^[A-Z][a-zA-Z]+$"</code>.|
|x-amz-fwd-error-message|header|string|false|Contains a generic description of the error condition. Returned in the &lt;Message&gt; tag of the error XML response for a corresponding <code>GetObject</code> call. Cannot be used with a successful <code>StatusCode</code> header or when the transformed object is provided in body.|
|x-amz-fwd-header-accept-ranges|header|string|false|Indicates that a range of bytes was specified.|
|x-amz-fwd-header-Cache-Control|header|string|false|Specifies caching behavior along the request/reply chain.|
|x-amz-fwd-header-Content-Disposition|header|string|false|Specifies presentational information for the object.|
|x-amz-fwd-header-Content-Encoding|header|string|false|Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.|
|x-amz-fwd-header-Content-Language|header|string|false|The language the content is in.|
|Content-Length|header|integer|false|The size of the content body in bytes.|
|x-amz-fwd-header-Content-Range|header|string|false|The portion of the object returned in the response.|
|x-amz-fwd-header-Content-Type|header|string|false|A standard MIME type describing the format of the object data.|
|x-amz-fwd-header-x-amz-checksum-crc32|header|string|false|<p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the base64-encoded, 32-bit CRC32 checksum of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original <code>GetObject</code> request required checksum validation. For more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail.</p> <p/>|
|x-amz-fwd-header-x-amz-checksum-crc32c|header|string|false|<p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the base64-encoded, 32-bit CRC32C checksum of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original <code>GetObject</code> request required checksum validation. For more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail.</p>|
|x-amz-fwd-header-x-amz-checksum-sha1|header|string|false|<p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the base64-encoded, 160-bit SHA-1 digest of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original <code>GetObject</code> request required checksum validation. For more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail.</p>|
|x-amz-fwd-header-x-amz-checksum-sha256|header|string|false|<p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the base64-encoded, 256-bit SHA-256 digest of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original <code>GetObject</code> request required checksum validation. For more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail.</p>|
|x-amz-fwd-header-x-amz-delete-marker|header|boolean|false|Specifies whether an object stored in Amazon S3 is (<code>true</code>) or is not (<code>false</code>) a delete marker. |
|x-amz-fwd-header-ETag|header|string|false|An opaque identifier assigned by a web server to a specific version of a resource found at a URL. |
|x-amz-fwd-header-Expires|header|string(date-time)|false|The date and time at which the object is no longer cacheable.|
|x-amz-fwd-header-x-amz-expiration|header|string|false|If the object expiration is configured (see PUT Bucket lifecycle), the response includes this header. It includes the <code>expiry-date</code> and <code>rule-id</code> key-value pairs that provide the object expiration information. The value of the <code>rule-id</code> is URL-encoded. |
|x-amz-fwd-header-Last-Modified|header|string(date-time)|false|The date and time that the object was last modified.|
|x-amz-fwd-header-x-amz-missing-meta|header|integer|false|Set to the number of metadata entries not returned in <code>x-amz-meta</code> headers. This can happen if you create metadata using an API like SOAP that supports more flexible metadata than the REST API. For example, using SOAP, you can create metadata whose values are not legal HTTP headers.|
|x-amz-fwd-header-x-amz-object-lock-mode|header|string|false|Indicates whether an object stored in Amazon S3 has Object Lock enabled. For more information about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html">Object Lock</a>.|
|x-amz-fwd-header-x-amz-object-lock-legal-hold|header|string|false|Indicates whether an object stored in Amazon S3 has an active legal hold.|
|x-amz-fwd-header-x-amz-object-lock-retain-until-date|header|string(date-time)|false|The date and time when Object Lock is configured to expire.|
|x-amz-fwd-header-x-amz-mp-parts-count|header|integer|false|The count of parts this object has.|
|x-amz-fwd-header-x-amz-replication-status|header|string|false|Indicates if request involves bucket that is either a source or destination in a Replication rule. For more information about S3 Replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html">Replication</a>.|
|x-amz-fwd-header-x-amz-request-charged|header|string|false|none|
|x-amz-fwd-header-x-amz-restore|header|string|false|Provides information about object restoration operation and expiration time of the restored object copy.|
|x-amz-fwd-header-x-amz-server-side-encryption|header|string|false| The server-side encryption algorithm used when storing requested object in Amazon S3 (for example, AES256, <code>aws:kms</code>).|
|x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm|header|string|false|Encryption algorithm used if server-side encryption with a customer-provided encryption key was specified for object stored in Amazon S3.|
|x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id|header|string(password)|false| If present, specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key that was used for stored in Amazon S3 object. |
|x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5|header|string|false| 128-bit MD5 digest of customer-provided encryption key used in Amazon S3 to encrypt data stored in S3. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html">Protecting data using server-side encryption with customer-provided encryption keys (SSE-C)</a>.|
|x-amz-fwd-header-x-amz-storage-class|header|string|false|<p>Provides storage class information of the object. Amazon S3 returns this header for all objects except for S3 Standard storage class objects.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a>.</p>|
|x-amz-fwd-header-x-amz-tagging-count|header|integer|false|The number of tags, if any, on the object.|
|x-amz-fwd-header-x-amz-version-id|header|string|false|An ID used to reference a specific version of the object.|
|x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled|header|boolean|false| Indicates whether the object stored in Amazon S3 uses an S3 bucket key for server-side encryption with Amazon Web Services KMS (SSE-KMS).|
|x-amz-security-token|header|string|false|none|
|body|body|object|true|none|
|» Body|body|string|false|The object data.|
|» x-amz-meta-|body|object|false|A map of metadata to store with the object in S3.|
|» » **additionalProperties**|body|[MetadataValue](#schemametadatavalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-fwd-header-x-amz-object-lock-mode|GOVERNANCE|
|x-amz-fwd-header-x-amz-object-lock-mode|COMPLIANCE|
|x-amz-fwd-header-x-amz-object-lock-legal-hold|ON|
|x-amz-fwd-header-x-amz-object-lock-legal-hold|OFF|
|x-amz-fwd-header-x-amz-replication-status|COMPLETE|
|x-amz-fwd-header-x-amz-replication-status|PENDING|
|x-amz-fwd-header-x-amz-replication-status|FAILED|
|x-amz-fwd-header-x-amz-replication-status|REPLICA|
|x-amz-fwd-header-x-amz-request-charged|requester|
|x-amz-fwd-header-x-amz-server-side-encryption|AES256|
|x-amz-fwd-header-x-amz-server-side-encryption|aws:kms|
|x-amz-fwd-header-x-amz-server-side-encryption|aws:kms:dsse|
|x-amz-fwd-header-x-amz-storage-class|STANDARD|
|x-amz-fwd-header-x-amz-storage-class|REDUCED_REDUNDANCY|
|x-amz-fwd-header-x-amz-storage-class|STANDARD_IA|
|x-amz-fwd-header-x-amz-storage-class|ONEZONE_IA|
|x-amz-fwd-header-x-amz-storage-class|INTELLIGENT_TIERING|
|x-amz-fwd-header-x-amz-storage-class|GLACIER|
|x-amz-fwd-header-x-amz-storage-class|DEEP_ARCHIVE|
|x-amz-fwd-header-x-amz-storage-class|OUTPOSTS|
|x-amz-fwd-header-x-amz-storage-class|GLACIER_IR|
|x-amz-fwd-header-x-amz-storage-class|SNOW|

<h3 id="writegetobjectresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AbortMultipartUploadOutput">AbortMultipartUploadOutput</h2>
<!-- backwards compatibility -->
<a id="schemaabortmultipartuploadoutput"></a>
<a id="schema_AbortMultipartUploadOutput"></a>
<a id="tocSabortmultipartuploadoutput"></a>
<a id="tocsabortmultipartuploadoutput"></a>

```json
{}
```

<h2 id="tocS_NoSuchUpload">NoSuchUpload</h2>
<!-- backwards compatibility -->
<a id="schemanosuchupload"></a>
<a id="schema_NoSuchUpload"></a>
<a id="tocSnosuchupload"></a>
<a id="tocsnosuchupload"></a>

```json
null
```

<h2 id="tocS_CompleteMultipartUploadOutput">CompleteMultipartUploadOutput</h2>
<!-- backwards compatibility -->
<a id="schemacompletemultipartuploadoutput"></a>
<a id="schema_CompleteMultipartUploadOutput"></a>
<a id="tocScompletemultipartuploadoutput"></a>
<a id="tocscompletemultipartuploadoutput"></a>

```json
{
  "Bucket": "acexamplebucket",
  "ETag": "\"4d9031c7644d8081c2829f4ea23c55f7-2\"",
  "Key": "bigobject",
  "Location": "https://examplebucket.s3.<Region>.amazonaws.com/bigobject"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Location|object|false|none|none|
|Bucket|object|false|none|none|
|Key|object|false|none|none|
|ETag|object|false|none|none|
|ChecksumCRC32|object|false|none|none|
|ChecksumCRC32C|object|false|none|none|
|ChecksumSHA1|object|false|none|none|
|ChecksumSHA256|object|false|none|none|

<h2 id="tocS_CompletedPartList">CompletedPartList</h2>
<!-- backwards compatibility -->
<a id="schemacompletedpartlist"></a>
<a id="schema_CompletedPartList"></a>
<a id="tocScompletedpartlist"></a>
<a id="tocscompletedpartlist"></a>

```json
[
  {
    "ETag": {},
    "ChecksumCRC32": {},
    "ChecksumCRC32C": {},
    "ChecksumSHA1": {},
    "ChecksumSHA256": {},
    "PartNumber": {}
  }
]
```

<h2 id="tocS_CopyObjectOutput">CopyObjectOutput</h2>
<!-- backwards compatibility -->
<a id="schemacopyobjectoutput"></a>
<a id="schema_CopyObjectOutput"></a>
<a id="tocScopyobjectoutput"></a>
<a id="tocscopyobjectoutput"></a>

```json
{
  "CopyObjectResult": {
    "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
    "LastModified": "2016-12-15T17:38:53.000Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CopyObjectResult|object|false|none|none|

<h2 id="tocS_MetadataValue">MetadataValue</h2>
<!-- backwards compatibility -->
<a id="schemametadatavalue"></a>
<a id="schema_MetadataValue"></a>
<a id="tocSmetadatavalue"></a>
<a id="tocsmetadatavalue"></a>

```json
"string"
```

<h2 id="tocS_ObjectNotInActiveTierError">ObjectNotInActiveTierError</h2>
<!-- backwards compatibility -->
<a id="schemaobjectnotinactivetiererror"></a>
<a id="schema_ObjectNotInActiveTierError"></a>
<a id="tocSobjectnotinactivetiererror"></a>
<a id="tocsobjectnotinactivetiererror"></a>

```json
null
```

<h2 id="tocS_CreateBucketOutput">CreateBucketOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebucketoutput"></a>
<a id="schema_CreateBucketOutput"></a>
<a id="tocScreatebucketoutput"></a>
<a id="tocscreatebucketoutput"></a>

```json
{
  "Location": "/examplebucket"
}
```

<h2 id="tocS_BucketLocationConstraint">BucketLocationConstraint</h2>
<!-- backwards compatibility -->
<a id="schemabucketlocationconstraint"></a>
<a id="schema_BucketLocationConstraint"></a>
<a id="tocSbucketlocationconstraint"></a>
<a id="tocsbucketlocationconstraint"></a>

```json
"af-south-1"
```

<h2 id="tocS_BucketAlreadyExists">BucketAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemabucketalreadyexists"></a>
<a id="schema_BucketAlreadyExists"></a>
<a id="tocSbucketalreadyexists"></a>
<a id="tocsbucketalreadyexists"></a>

```json
null
```

<h2 id="tocS_BucketAlreadyOwnedByYou">BucketAlreadyOwnedByYou</h2>
<!-- backwards compatibility -->
<a id="schemabucketalreadyownedbyyou"></a>
<a id="schema_BucketAlreadyOwnedByYou"></a>
<a id="tocSbucketalreadyownedbyyou"></a>
<a id="tocsbucketalreadyownedbyyou"></a>

```json
null
```

<h2 id="tocS_CreateMultipartUploadOutput">CreateMultipartUploadOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatemultipartuploadoutput"></a>
<a id="schema_CreateMultipartUploadOutput"></a>
<a id="tocScreatemultipartuploadoutput"></a>
<a id="tocscreatemultipartuploadoutput"></a>

```json
{
  "Bucket": "examplebucket",
  "Key": "largeobject",
  "UploadId": "ibZBv_75gd9r8lH_gqXatLdxMVpAlj6ZQjEs.OwyF3953YdwbcQnMA2BLGn8Lx12fQNICtMw5KyteFeHw.Sjng--"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|false|none|none|
|Key|object|false|none|none|
|UploadId|object|false|none|none|

<h2 id="tocS_DeleteObjectOutput">DeleteObjectOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobjectoutput"></a>
<a id="schema_DeleteObjectOutput"></a>
<a id="tocSdeleteobjectoutput"></a>
<a id="tocsdeleteobjectoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteObjectTaggingOutput">DeleteObjectTaggingOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobjecttaggingoutput"></a>
<a id="schema_DeleteObjectTaggingOutput"></a>
<a id="tocSdeleteobjecttaggingoutput"></a>
<a id="tocsdeleteobjecttaggingoutput"></a>

```json
{
  "VersionId": "ydlaNkwWm0SfKJR.T1b1fIdPRbldTYRI"
}
```

<h2 id="tocS_DeleteObjectsOutput">DeleteObjectsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobjectsoutput"></a>
<a id="schema_DeleteObjectsOutput"></a>
<a id="tocSdeleteobjectsoutput"></a>
<a id="tocsdeleteobjectsoutput"></a>

```json
{
  "Deleted": [
    {
      "Key": "HappyFace.jpg",
      "VersionId": "yoz3HB.ZhCS_tKVEmIOr7qYyyAaZSKVd"
    },
    {
      "Key": "HappyFace.jpg",
      "VersionId": "2LWg7lQLnY41.maGB5Z6SWW.dcq0vx7b"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Deleted|object|false|none|none|
|Errors|object|false|none|none|

<h2 id="tocS_ObjectIdentifierList">ObjectIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemaobjectidentifierlist"></a>
<a id="schema_ObjectIdentifierList"></a>
<a id="tocSobjectidentifierlist"></a>
<a id="tocsobjectidentifierlist"></a>

```json
[
  {
    "Key": {},
    "VersionId": {}
  }
]
```

<h2 id="tocS_Quiet">Quiet</h2>
<!-- backwards compatibility -->
<a id="schemaquiet"></a>
<a id="schema_Quiet"></a>
<a id="tocSquiet"></a>
<a id="tocsquiet"></a>

```json
true
```

<h2 id="tocS_GetBucketAccelerateConfigurationOutput">GetBucketAccelerateConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketaccelerateconfigurationoutput"></a>
<a id="schema_GetBucketAccelerateConfigurationOutput"></a>
<a id="tocSgetbucketaccelerateconfigurationoutput"></a>
<a id="tocsgetbucketaccelerateconfigurationoutput"></a>

```json
{
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_GetBucketAclOutput">GetBucketAclOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketacloutput"></a>
<a id="schema_GetBucketAclOutput"></a>
<a id="tocSgetbucketacloutput"></a>
<a id="tocsgetbucketacloutput"></a>

```json
{
  "Owner": {
    "DisplayName": {},
    "ID": {}
  },
  "Grants": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Owner|object|false|none|none|
|Grants|object|false|none|none|

<h2 id="tocS_GetBucketAnalyticsConfigurationOutput">GetBucketAnalyticsConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketanalyticsconfigurationoutput"></a>
<a id="schema_GetBucketAnalyticsConfigurationOutput"></a>
<a id="tocSgetbucketanalyticsconfigurationoutput"></a>
<a id="tocsgetbucketanalyticsconfigurationoutput"></a>

```json
{
  "AnalyticsConfiguration": {
    "Id": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "And": {
        "Prefix": {},
        "Tags": {}
      }
    },
    "StorageClassAnalysis": {
      "DataExport": {
        "OutputSchemaVersion": {},
        "Destination": {
          "S3BucketDestination": {
            "Format": {},
            "BucketAccountId": {},
            "Bucket": {},
            "Prefix": {}
          }
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnalyticsConfiguration|object|false|none|none|

<h2 id="tocS_GetBucketCorsOutput">GetBucketCorsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketcorsoutput"></a>
<a id="schema_GetBucketCorsOutput"></a>
<a id="tocSgetbucketcorsoutput"></a>
<a id="tocsgetbucketcorsoutput"></a>

```json
{
  "CORSRules": [
    {
      "AllowedHeaders": [
        "Authorization"
      ],
      "AllowedMethods": [
        "GET"
      ],
      "AllowedOrigins": [
        "*"
      ],
      "MaxAgeSeconds": 3000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CORSRules|object|false|none|none|

<h2 id="tocS_GetBucketEncryptionOutput">GetBucketEncryptionOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketencryptionoutput"></a>
<a id="schema_GetBucketEncryptionOutput"></a>
<a id="tocSgetbucketencryptionoutput"></a>
<a id="tocsgetbucketencryptionoutput"></a>

```json
{
  "ServerSideEncryptionConfiguration": {
    "Rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerSideEncryptionConfiguration|[ServerSideEncryptionConfiguration](#schemaserversideencryptionconfiguration)|false|none|Specifies the default server-side-encryption configuration.|

<h2 id="tocS_GetBucketIntelligentTieringConfigurationOutput">GetBucketIntelligentTieringConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketintelligenttieringconfigurationoutput"></a>
<a id="schema_GetBucketIntelligentTieringConfigurationOutput"></a>
<a id="tocSgetbucketintelligenttieringconfigurationoutput"></a>
<a id="tocsgetbucketintelligenttieringconfigurationoutput"></a>

```json
{
  "IntelligentTieringConfiguration": {
    "Id": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "And": {
        "Prefix": {},
        "Tags": {}
      }
    },
    "Status": {},
    "Tierings": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IntelligentTieringConfiguration|object|false|none|none|

<h2 id="tocS_GetBucketInventoryConfigurationOutput">GetBucketInventoryConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketinventoryconfigurationoutput"></a>
<a id="schema_GetBucketInventoryConfigurationOutput"></a>
<a id="tocSgetbucketinventoryconfigurationoutput"></a>
<a id="tocsgetbucketinventoryconfigurationoutput"></a>

```json
{
  "InventoryConfiguration": {
    "Destination": {
      "S3BucketDestination": {
        "AccountId": {},
        "Bucket": {},
        "Format": {},
        "Prefix": {},
        "Encryption": {
          "SSES3": {},
          "SSEKMS": {
            "KeyId": {}
          }
        }
      }
    },
    "IsEnabled": {},
    "Filter": {
      "Prefix": {}
    },
    "Id": {},
    "IncludedObjectVersions": {},
    "OptionalFields": {},
    "Schedule": {
      "Frequency": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InventoryConfiguration|object|false|none|none|

<h2 id="tocS_GetBucketLifecycleOutput">GetBucketLifecycleOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketlifecycleoutput"></a>
<a id="schema_GetBucketLifecycleOutput"></a>
<a id="tocSgetbucketlifecycleoutput"></a>
<a id="tocsgetbucketlifecycleoutput"></a>

```json
{
  "Rules": [
    {
      "Expiration": {
        "Days": 1
      },
      "ID": "delete logs",
      "Prefix": "123/",
      "Status": "Enabled"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|false|none|none|

<h2 id="tocS_GetBucketLifecycleConfigurationOutput">GetBucketLifecycleConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketlifecycleconfigurationoutput"></a>
<a id="schema_GetBucketLifecycleConfigurationOutput"></a>
<a id="tocSgetbucketlifecycleconfigurationoutput"></a>
<a id="tocsgetbucketlifecycleconfigurationoutput"></a>

```json
{
  "Rules": [
    {
      "ID": "Rule for TaxDocs/",
      "Prefix": "TaxDocs",
      "Status": "Enabled",
      "Transitions": [
        {
          "Days": 365,
          "StorageClass": "STANDARD_IA"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|false|none|none|

<h2 id="tocS_GetBucketLocationOutput">GetBucketLocationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketlocationoutput"></a>
<a id="schema_GetBucketLocationOutput"></a>
<a id="tocSgetbucketlocationoutput"></a>
<a id="tocsgetbucketlocationoutput"></a>

```json
{
  "LocationConstraint": "us-west-2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationConstraint|object|false|none|none|

<h2 id="tocS_GetBucketLoggingOutput">GetBucketLoggingOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketloggingoutput"></a>
<a id="schema_GetBucketLoggingOutput"></a>
<a id="tocSgetbucketloggingoutput"></a>
<a id="tocsgetbucketloggingoutput"></a>

```json
{
  "LoggingEnabled": {
    "TargetBucket": {},
    "TargetGrants": {},
    "TargetPrefix": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingEnabled|[LoggingEnabled](#schemaloggingenabled)|false|none|Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the <i>Amazon S3 API Reference</i>.|

<h2 id="tocS_GetBucketMetricsConfigurationOutput">GetBucketMetricsConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketmetricsconfigurationoutput"></a>
<a id="schema_GetBucketMetricsConfigurationOutput"></a>
<a id="tocSgetbucketmetricsconfigurationoutput"></a>
<a id="tocsgetbucketmetricsconfigurationoutput"></a>

```json
{
  "MetricsConfiguration": {
    "Id": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "AccessPointArn": {},
      "And": {
        "Prefix": {},
        "Tags": {},
        "AccessPointArn": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricsConfiguration|object|false|none|none|

<h2 id="tocS_NotificationConfigurationDeprecated">NotificationConfigurationDeprecated</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfigurationdeprecated"></a>
<a id="schema_NotificationConfigurationDeprecated"></a>
<a id="tocSnotificationconfigurationdeprecated"></a>
<a id="tocsnotificationconfigurationdeprecated"></a>

```json
{
  "QueueConfiguration": {
    "Event": "s3:ObjectCreated:Put",
    "Events": [
      "s3:ObjectCreated:Put"
    ],
    "Id": "MDQ2OGQ4NDEtOTBmNi00YTM4LTk0NzYtZDIwN2I3NWQ1NjIx",
    "Queue": "arn:aws:sqs:us-east-1:acct-id:S3ObjectCreatedEventQueue"
  },
  "TopicConfiguration": {
    "Event": "s3:ObjectCreated:Copy",
    "Events": [
      "s3:ObjectCreated:Copy"
    ],
    "Id": "YTVkMWEzZGUtNTY1NS00ZmE2LWJjYjktMmRlY2QwODFkNTJi",
    "Topic": "arn:aws:sns:us-east-1:acct-id:S3ObjectCreatedEventTopic"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicConfiguration|object|false|none|none|
|QueueConfiguration|object|false|none|none|
|CloudFunctionConfiguration|object|false|none|none|

<h2 id="tocS_NotificationConfiguration">NotificationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfiguration"></a>
<a id="schema_NotificationConfiguration"></a>
<a id="tocSnotificationconfiguration"></a>
<a id="tocsnotificationconfiguration"></a>

```json
{
  "TopicConfigurations": {},
  "QueueConfigurations": {},
  "LambdaFunctionConfigurations": {},
  "EventBridgeConfiguration": {}
}
```

A container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off for the bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicConfigurations|object|false|none|none|
|QueueConfigurations|object|false|none|none|
|LambdaFunctionConfigurations|object|false|none|none|
|EventBridgeConfiguration|object|false|none|none|

<h2 id="tocS_GetBucketOwnershipControlsOutput">GetBucketOwnershipControlsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketownershipcontrolsoutput"></a>
<a id="schema_GetBucketOwnershipControlsOutput"></a>
<a id="tocSgetbucketownershipcontrolsoutput"></a>
<a id="tocsgetbucketownershipcontrolsoutput"></a>

```json
{
  "OwnershipControls": {
    "Rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwnershipControls|object|false|none|none|

<h2 id="tocS_GetBucketPolicyOutput">GetBucketPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketpolicyoutput"></a>
<a id="schema_GetBucketPolicyOutput"></a>
<a id="tocSgetbucketpolicyoutput"></a>
<a id="tocsgetbucketpolicyoutput"></a>

```json
{
  "Policy": "{\"Version\":\"2008-10-17\",\"Id\":\"LogPolicy\",\"Statement\":[{\"Sid\":\"Enables the log delivery group to publish logs to your bucket \",\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"111122223333\"},\"Action\":[\"s3:GetBucketAcl\",\"s3:GetObjectAcl\",\"s3:PutObject\"],\"Resource\":[\"arn:aws:s3:::policytest1/*\",\"arn:aws:s3:::policytest1\"]}]}"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_GetBucketPolicyStatusOutput">GetBucketPolicyStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketpolicystatusoutput"></a>
<a id="schema_GetBucketPolicyStatusOutput"></a>
<a id="tocSgetbucketpolicystatusoutput"></a>
<a id="tocsgetbucketpolicystatusoutput"></a>

```json
{
  "PolicyStatus": {
    "IsPublic": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyStatus|object|false|none|none|

<h2 id="tocS_GetBucketReplicationOutput">GetBucketReplicationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketreplicationoutput"></a>
<a id="schema_GetBucketReplicationOutput"></a>
<a id="tocSgetbucketreplicationoutput"></a>
<a id="tocsgetbucketreplicationoutput"></a>

```json
{
  "ReplicationConfiguration": {
    "Role": "arn:aws:iam::acct-id:role/example-role",
    "Rules": [
      {
        "Destination": {
          "Bucket": "arn:aws:s3:::destination-bucket"
        },
        "ID": "MWIwNTkwZmItMTE3MS00ZTc3LWJkZDEtNzRmODQwYzc1OTQy",
        "Prefix": "Tax",
        "Status": "Enabled"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationConfiguration|[ReplicationConfiguration](#schemareplicationconfiguration)|false|none|A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.|

<h2 id="tocS_GetBucketRequestPaymentOutput">GetBucketRequestPaymentOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketrequestpaymentoutput"></a>
<a id="schema_GetBucketRequestPaymentOutput"></a>
<a id="tocSgetbucketrequestpaymentoutput"></a>
<a id="tocsgetbucketrequestpaymentoutput"></a>

```json
{
  "Payer": "BucketOwner"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Payer|object|false|none|none|

<h2 id="tocS_GetBucketTaggingOutput">GetBucketTaggingOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbuckettaggingoutput"></a>
<a id="schema_GetBucketTaggingOutput"></a>
<a id="tocSgetbuckettaggingoutput"></a>
<a id="tocsgetbuckettaggingoutput"></a>

```json
{
  "TagSet": [
    {
      "Key": "key1",
      "Value": "value1"
    },
    {
      "Key": "key2",
      "Value": "value2"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagSet|object|true|none|none|

<h2 id="tocS_GetBucketVersioningOutput">GetBucketVersioningOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketversioningoutput"></a>
<a id="schema_GetBucketVersioningOutput"></a>
<a id="tocSgetbucketversioningoutput"></a>
<a id="tocsgetbucketversioningoutput"></a>

```json
{
  "MFADelete": "Disabled",
  "Status": "Enabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|MFADelete|object|false|none|none|

<h2 id="tocS_GetBucketWebsiteOutput">GetBucketWebsiteOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketwebsiteoutput"></a>
<a id="schema_GetBucketWebsiteOutput"></a>
<a id="tocSgetbucketwebsiteoutput"></a>
<a id="tocsgetbucketwebsiteoutput"></a>

```json
{
  "ErrorDocument": {
    "Key": "error.html"
  },
  "IndexDocument": {
    "Suffix": "index.html"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RedirectAllRequestsTo|object|false|none|none|
|IndexDocument|object|false|none|none|
|ErrorDocument|object|false|none|none|
|RoutingRules|object|false|none|none|

<h2 id="tocS_GetObjectOutput">GetObjectOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectoutput"></a>
<a id="schema_GetObjectOutput"></a>
<a id="tocSgetobjectoutput"></a>
<a id="tocsgetobjectoutput"></a>

```json
{
  "AcceptRanges": "bytes",
  "ContentLength": "3191",
  "ContentType": "image/jpeg",
  "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
  "LastModified": "Thu, 15 Dec 2016 01:19:41 GMT",
  "Metadata": {},
  "TagCount": 2,
  "VersionId": "null"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|false|none|none|
|Metadata|object|false|none|none|

<h2 id="tocS_NoSuchKey">NoSuchKey</h2>
<!-- backwards compatibility -->
<a id="schemanosuchkey"></a>
<a id="schema_NoSuchKey"></a>
<a id="tocSnosuchkey"></a>
<a id="tocsnosuchkey"></a>

```json
null
```

<h2 id="tocS_InvalidObjectState">InvalidObjectState</h2>
<!-- backwards compatibility -->
<a id="schemainvalidobjectstate"></a>
<a id="schema_InvalidObjectState"></a>
<a id="tocSinvalidobjectstate"></a>
<a id="tocsinvalidobjectstate"></a>

```json
null
```

<h2 id="tocS_GetObjectAclOutput">GetObjectAclOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectacloutput"></a>
<a id="schema_GetObjectAclOutput"></a>
<a id="tocSgetobjectacloutput"></a>
<a id="tocsgetobjectacloutput"></a>

```json
{
  "Grants": [
    {
      "Grantee": {
        "DisplayName": "owner-display-name",
        "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
        "Type": "CanonicalUser"
      },
      "Permission": "WRITE"
    },
    {
      "Grantee": {
        "DisplayName": "owner-display-name",
        "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
        "Type": "CanonicalUser"
      },
      "Permission": "WRITE_ACP"
    },
    {
      "Grantee": {
        "DisplayName": "owner-display-name",
        "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
        "Type": "CanonicalUser"
      },
      "Permission": "READ"
    },
    {
      "Grantee": {
        "DisplayName": "owner-display-name",
        "ID": "852b113eexamplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
        "Type": "CanonicalUser"
      },
      "Permission": "READ_ACP"
    }
  ],
  "Owner": {
    "DisplayName": "owner-display-name",
    "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Owner|object|false|none|none|
|Grants|object|false|none|none|

<h2 id="tocS_GetObjectAttributesOutput">GetObjectAttributesOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectattributesoutput"></a>
<a id="schema_GetObjectAttributesOutput"></a>
<a id="tocSgetobjectattributesoutput"></a>
<a id="tocsgetobjectattributesoutput"></a>

```json
{
  "ETag": {},
  "Checksum": {
    "ChecksumCRC32": {},
    "ChecksumCRC32C": {},
    "ChecksumSHA1": {},
    "ChecksumSHA256": {}
  },
  "ObjectParts": {
    "TotalPartsCount": {},
    "PartNumberMarker": {},
    "NextPartNumberMarker": {},
    "MaxParts": {},
    "IsTruncated": {},
    "Parts": {}
  },
  "StorageClass": {},
  "ObjectSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ETag|object|false|none|none|
|Checksum|object|false|none|none|
|ObjectParts|object|false|none|none|
|StorageClass|object|false|none|none|
|ObjectSize|object|false|none|none|

<h2 id="tocS_ObjectAttributes">ObjectAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaobjectattributes"></a>
<a id="schema_ObjectAttributes"></a>
<a id="tocSobjectattributes"></a>
<a id="tocsobjectattributes"></a>

```json
"ETag"
```

<h2 id="tocS_GetObjectLegalHoldOutput">GetObjectLegalHoldOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectlegalholdoutput"></a>
<a id="schema_GetObjectLegalHoldOutput"></a>
<a id="tocSgetobjectlegalholdoutput"></a>
<a id="tocsgetobjectlegalholdoutput"></a>

```json
{
  "LegalHold": {
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LegalHold|object|false|none|none|

<h2 id="tocS_GetObjectLockConfigurationOutput">GetObjectLockConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectlockconfigurationoutput"></a>
<a id="schema_GetObjectLockConfigurationOutput"></a>
<a id="tocSgetobjectlockconfigurationoutput"></a>
<a id="tocsgetobjectlockconfigurationoutput"></a>

```json
{
  "ObjectLockConfiguration": {
    "ObjectLockEnabled": {},
    "Rule": {
      "DefaultRetention": {
        "Mode": {},
        "Days": {},
        "Years": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectLockConfiguration|object|false|none|none|

<h2 id="tocS_GetObjectRetentionOutput">GetObjectRetentionOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectretentionoutput"></a>
<a id="schema_GetObjectRetentionOutput"></a>
<a id="tocSgetobjectretentionoutput"></a>
<a id="tocsgetobjectretentionoutput"></a>

```json
{
  "Retention": {
    "Mode": {},
    "RetainUntilDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Retention|object|false|none|none|

<h2 id="tocS_GetObjectTaggingOutput">GetObjectTaggingOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetobjecttaggingoutput"></a>
<a id="schema_GetObjectTaggingOutput"></a>
<a id="tocSgetobjecttaggingoutput"></a>
<a id="tocsgetobjecttaggingoutput"></a>

```json
{
  "TagSet": [
    {
      "Key": "Key4",
      "Value": "Value4"
    },
    {
      "Key": "Key3",
      "Value": "Value3"
    }
  ],
  "VersionId": "null"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagSet|object|true|none|none|

<h2 id="tocS_GetObjectTorrentOutput">GetObjectTorrentOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetobjecttorrentoutput"></a>
<a id="schema_GetObjectTorrentOutput"></a>
<a id="tocSgetobjecttorrentoutput"></a>
<a id="tocsgetobjecttorrentoutput"></a>

```json
{}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|false|none|none|

<h2 id="tocS_GetPublicAccessBlockOutput">GetPublicAccessBlockOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetpublicaccessblockoutput"></a>
<a id="schema_GetPublicAccessBlockOutput"></a>
<a id="tocSgetpublicaccessblockoutput"></a>
<a id="tocsgetpublicaccessblockoutput"></a>

```json
{
  "PublicAccessBlockConfiguration": {
    "BlockPublicAcls": {},
    "IgnorePublicAcls": {},
    "BlockPublicPolicy": {},
    "RestrictPublicBuckets": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicAccessBlockConfiguration|object|false|none|none|

<h2 id="tocS_NoSuchBucket">NoSuchBucket</h2>
<!-- backwards compatibility -->
<a id="schemanosuchbucket"></a>
<a id="schema_NoSuchBucket"></a>
<a id="tocSnosuchbucket"></a>
<a id="tocsnosuchbucket"></a>

```json
null
```

<h2 id="tocS_HeadObjectOutput">HeadObjectOutput</h2>
<!-- backwards compatibility -->
<a id="schemaheadobjectoutput"></a>
<a id="schema_HeadObjectOutput"></a>
<a id="tocSheadobjectoutput"></a>
<a id="tocsheadobjectoutput"></a>

```json
{
  "AcceptRanges": "bytes",
  "ContentLength": "3191",
  "ContentType": "image/jpeg",
  "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
  "LastModified": "Thu, 15 Dec 2016 01:19:41 GMT",
  "Metadata": {},
  "VersionId": "null"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|false|none|none|

<h2 id="tocS_ListBucketAnalyticsConfigurationsOutput">ListBucketAnalyticsConfigurationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbucketanalyticsconfigurationsoutput"></a>
<a id="schema_ListBucketAnalyticsConfigurationsOutput"></a>
<a id="tocSlistbucketanalyticsconfigurationsoutput"></a>
<a id="tocslistbucketanalyticsconfigurationsoutput"></a>

```json
{
  "IsTruncated": {},
  "ContinuationToken": {},
  "NextContinuationToken": {},
  "AnalyticsConfigurationList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsTruncated|object|false|none|none|
|ContinuationToken|object|false|none|none|
|NextContinuationToken|object|false|none|none|
|AnalyticsConfigurationList|object|false|none|none|

<h2 id="tocS_ListBucketIntelligentTieringConfigurationsOutput">ListBucketIntelligentTieringConfigurationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbucketintelligenttieringconfigurationsoutput"></a>
<a id="schema_ListBucketIntelligentTieringConfigurationsOutput"></a>
<a id="tocSlistbucketintelligenttieringconfigurationsoutput"></a>
<a id="tocslistbucketintelligenttieringconfigurationsoutput"></a>

```json
{
  "IsTruncated": {},
  "ContinuationToken": {},
  "NextContinuationToken": {},
  "IntelligentTieringConfigurationList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsTruncated|object|false|none|none|
|ContinuationToken|object|false|none|none|
|NextContinuationToken|object|false|none|none|
|IntelligentTieringConfigurationList|object|false|none|none|

<h2 id="tocS_ListBucketInventoryConfigurationsOutput">ListBucketInventoryConfigurationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbucketinventoryconfigurationsoutput"></a>
<a id="schema_ListBucketInventoryConfigurationsOutput"></a>
<a id="tocSlistbucketinventoryconfigurationsoutput"></a>
<a id="tocslistbucketinventoryconfigurationsoutput"></a>

```json
{
  "ContinuationToken": {},
  "InventoryConfigurationList": {},
  "IsTruncated": {},
  "NextContinuationToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinuationToken|object|false|none|none|
|InventoryConfigurationList|object|false|none|none|
|IsTruncated|object|false|none|none|
|NextContinuationToken|object|false|none|none|

<h2 id="tocS_ListBucketMetricsConfigurationsOutput">ListBucketMetricsConfigurationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbucketmetricsconfigurationsoutput"></a>
<a id="schema_ListBucketMetricsConfigurationsOutput"></a>
<a id="tocSlistbucketmetricsconfigurationsoutput"></a>
<a id="tocslistbucketmetricsconfigurationsoutput"></a>

```json
{
  "IsTruncated": {},
  "ContinuationToken": {},
  "NextContinuationToken": {},
  "MetricsConfigurationList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsTruncated|object|false|none|none|
|ContinuationToken|object|false|none|none|
|NextContinuationToken|object|false|none|none|
|MetricsConfigurationList|object|false|none|none|

<h2 id="tocS_ListBucketsOutput">ListBucketsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbucketsoutput"></a>
<a id="schema_ListBucketsOutput"></a>
<a id="tocSlistbucketsoutput"></a>
<a id="tocslistbucketsoutput"></a>

```json
{
  "Buckets": [
    {
      "CreationDate": "2012-02-15T21:03:02.000Z",
      "Name": "examplebucket"
    },
    {
      "CreationDate": "2011-07-24T19:33:50.000Z",
      "Name": "examplebucket2"
    },
    {
      "CreationDate": "2010-12-17T00:56:49.000Z",
      "Name": "examplebucket3"
    }
  ],
  "Owner": {
    "DisplayName": "own-display-name",
    "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Buckets|object|false|none|none|
|Owner|object|false|none|none|

<h2 id="tocS_ListMultipartUploadsOutput">ListMultipartUploadsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistmultipartuploadsoutput"></a>
<a id="schema_ListMultipartUploadsOutput"></a>
<a id="tocSlistmultipartuploadsoutput"></a>
<a id="tocslistmultipartuploadsoutput"></a>

```json
{
  "Bucket": "acl1",
  "IsTruncated": true,
  "KeyMarker": "",
  "MaxUploads": "2",
  "NextKeyMarker": "someobjectkey",
  "NextUploadIdMarker": "examplelo91lv1iwvWpvCiJWugw2xXLPAD7Z8cJyX9.WiIRgNrdG6Ldsn.9FtS63TCl1Uf5faTB.1U5Ckcbmdw--",
  "UploadIdMarker": "",
  "Uploads": [
    {
      "Initiated": "2014-05-01T05:40:58.000Z",
      "Initiator": {
        "DisplayName": "ownder-display-name",
        "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
      },
      "Key": "JavaFile",
      "Owner": {
        "DisplayName": "mohanataws",
        "ID": "852b113e7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
      },
      "StorageClass": "STANDARD",
      "UploadId": "gZ30jIqlUa.CInXklLQtSMJITdUnoZ1Y5GACB5UckOtspm5zbDMCkPF_qkfZzMiFZ6dksmcnqxJyIBvQMG9X9Q--"
    },
    {
      "Initiated": "2014-05-01T05:41:27.000Z",
      "Initiator": {
        "DisplayName": "ownder-display-name",
        "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
      },
      "Key": "JavaFile",
      "Owner": {
        "DisplayName": "ownder-display-name",
        "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
      },
      "StorageClass": "STANDARD",
      "UploadId": "b7tZSqIlo91lv1iwvWpvCiJWugw2xXLPAD7Z8cJyX9.WiIRgNrdG6Ldsn.9FtS63TCl1Uf5faTB.1U5Ckcbmdw--"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|false|none|none|
|KeyMarker|object|false|none|none|
|UploadIdMarker|object|false|none|none|
|NextKeyMarker|object|false|none|none|
|Prefix|object|false|none|none|
|Delimiter|object|false|none|none|
|NextUploadIdMarker|object|false|none|none|
|MaxUploads|object|false|none|none|
|IsTruncated|object|false|none|none|
|Uploads|object|false|none|none|
|CommonPrefixes|object|false|none|none|
|EncodingType|object|false|none|none|

<h2 id="tocS_ListObjectVersionsOutput">ListObjectVersionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectversionsoutput"></a>
<a id="schema_ListObjectVersionsOutput"></a>
<a id="tocSlistobjectversionsoutput"></a>
<a id="tocslistobjectversionsoutput"></a>

```json
{
  "Versions": [
    {
      "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
      "IsLatest": true,
      "Key": "HappyFace.jpg",
      "LastModified": "2016-12-15T01:19:41.000Z",
      "Owner": {
        "DisplayName": "owner-display-name",
        "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
      },
      "Size": 3191,
      "StorageClass": "STANDARD",
      "VersionId": "null"
    },
    {
      "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
      "IsLatest": false,
      "Key": "HappyFace.jpg",
      "LastModified": "2016-12-13T00:58:26.000Z",
      "Owner": {
        "DisplayName": "owner-display-name",
        "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
      },
      "Size": 3191,
      "StorageClass": "STANDARD",
      "VersionId": "PHtexPGjH2y.zBgT8LmB7wwLI2mpbz.k"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsTruncated|object|false|none|none|
|KeyMarker|object|false|none|none|
|VersionIdMarker|object|false|none|none|
|NextKeyMarker|object|false|none|none|
|NextVersionIdMarker|object|false|none|none|
|Versions|object|false|none|none|
|DeleteMarkers|object|false|none|none|
|Name|object|false|none|none|
|Prefix|object|false|none|none|
|Delimiter|object|false|none|none|
|MaxKeys|object|false|none|none|
|CommonPrefixes|object|false|none|none|
|EncodingType|object|false|none|none|

<h2 id="tocS_OptionalObjectAttributes">OptionalObjectAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalobjectattributes"></a>
<a id="schema_OptionalObjectAttributes"></a>
<a id="tocSoptionalobjectattributes"></a>
<a id="tocsoptionalobjectattributes"></a>

```json
"RestoreStatus"
```

<h2 id="tocS_ListObjectsOutput">ListObjectsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectsoutput"></a>
<a id="schema_ListObjectsOutput"></a>
<a id="tocSlistobjectsoutput"></a>
<a id="tocslistobjectsoutput"></a>

```json
{
  "Contents": [
    {
      "ETag": "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
      "Key": "example1.jpg",
      "LastModified": "2014-11-21T19:40:05.000Z",
      "Owner": {
        "DisplayName": "myname",
        "ID": "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
      },
      "Size": 11,
      "StorageClass": "STANDARD"
    },
    {
      "ETag": "\"9c8af9a76df052144598c115ef33e511\"",
      "Key": "example2.jpg",
      "LastModified": "2013-11-15T01:10:49.000Z",
      "Owner": {
        "DisplayName": "myname",
        "ID": "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
      },
      "Size": 713193,
      "StorageClass": "STANDARD"
    }
  ],
  "NextMarker": "eyJNYXJrZXIiOiBudWxsLCAiYm90b190cnVuY2F0ZV9hbW91bnQiOiAyfQ=="
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsTruncated|object|false|none|none|
|Marker|object|false|none|none|
|NextMarker|object|false|none|none|
|Contents|object|false|none|none|
|Name|object|false|none|none|
|Prefix|object|false|none|none|
|Delimiter|object|false|none|none|
|MaxKeys|object|false|none|none|
|CommonPrefixes|object|false|none|none|
|EncodingType|object|false|none|none|

<h2 id="tocS_ListObjectsV2Output">ListObjectsV2Output</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectsv2output"></a>
<a id="schema_ListObjectsV2Output"></a>
<a id="tocSlistobjectsv2output"></a>
<a id="tocslistobjectsv2output"></a>

```json
{
  "Contents": [
    {
      "ETag": "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
      "Key": "happyface.jpg",
      "LastModified": "2014-11-21T19:40:05.000Z",
      "Size": 11,
      "StorageClass": "STANDARD"
    },
    {
      "ETag": "\"becf17f89c30367a9a44495d62ed521a-1\"",
      "Key": "test.jpg",
      "LastModified": "2014-05-02T04:51:50.000Z",
      "Size": 4192256,
      "StorageClass": "STANDARD"
    }
  ],
  "IsTruncated": true,
  "KeyCount": "2",
  "MaxKeys": "2",
  "Name": "DOC-EXAMPLE-BUCKET",
  "NextContinuationToken": "1w41l63U0xa8q7smH50vCxyTQqdxo69O3EmK28Bi5PcROI4wI/EyIJg==",
  "Prefix": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsTruncated|object|false|none|none|
|Contents|object|false|none|none|
|Name|object|false|none|none|
|Prefix|object|false|none|none|
|Delimiter|object|false|none|none|
|MaxKeys|object|false|none|none|
|CommonPrefixes|object|false|none|none|
|EncodingType|object|false|none|none|
|KeyCount|object|false|none|none|
|ContinuationToken|object|false|none|none|
|NextContinuationToken|object|false|none|none|
|StartAfter|object|false|none|none|

<h2 id="tocS_ListPartsOutput">ListPartsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistpartsoutput"></a>
<a id="schema_ListPartsOutput"></a>
<a id="tocSlistpartsoutput"></a>
<a id="tocslistpartsoutput"></a>

```json
{
  "Initiator": {
    "DisplayName": "owner-display-name",
    "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
  },
  "Owner": {
    "DisplayName": "owner-display-name",
    "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
  },
  "Parts": [
    {
      "ETag": "\"d8c2eafd90c266e19ab9dcacc479f8af\"",
      "LastModified": "2016-12-16T00:11:42.000Z",
      "PartNumber": "1",
      "Size": 26246026
    },
    {
      "ETag": "\"d8c2eafd90c266e19ab9dcacc479f8af\"",
      "LastModified": "2016-12-16T00:15:01.000Z",
      "PartNumber": "2",
      "Size": 26246026
    }
  ],
  "StorageClass": "STANDARD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|false|none|none|
|Key|object|false|none|none|
|UploadId|object|false|none|none|
|PartNumberMarker|object|false|none|none|
|NextPartNumberMarker|object|false|none|none|
|MaxParts|object|false|none|none|
|IsTruncated|object|false|none|none|
|Parts|object|false|none|none|
|Initiator|object|false|none|none|
|Owner|object|false|none|none|
|StorageClass|object|false|none|none|
|ChecksumAlgorithm|object|false|none|none|

<h2 id="tocS_BucketAccelerateStatus">BucketAccelerateStatus</h2>
<!-- backwards compatibility -->
<a id="schemabucketacceleratestatus"></a>
<a id="schema_BucketAccelerateStatus"></a>
<a id="tocSbucketacceleratestatus"></a>
<a id="tocsbucketacceleratestatus"></a>

```json
"Enabled"
```

<h2 id="tocS_Grants">Grants</h2>
<!-- backwards compatibility -->
<a id="schemagrants"></a>
<a id="schema_Grants"></a>
<a id="tocSgrants"></a>
<a id="tocsgrants"></a>

```json
[
  {
    "Grantee": {
      "DisplayName": {},
      "EmailAddress": {},
      "ID": {},
      "Type": {},
      "URI": {}
    },
    "Permission": {}
  }
]
```

<h2 id="tocS_Owner">Owner</h2>
<!-- backwards compatibility -->
<a id="schemaowner"></a>
<a id="schema_Owner"></a>
<a id="tocSowner"></a>
<a id="tocsowner"></a>

```json
{
  "DisplayName": {},
  "ID": {}
}
```

Container for the owner's display name and ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayName|object|false|none|none|
|ID|object|false|none|none|

<h2 id="tocS_AnalyticsId">AnalyticsId</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsid"></a>
<a id="schema_AnalyticsId"></a>
<a id="tocSanalyticsid"></a>
<a id="tocsanalyticsid"></a>

```json
"string"
```

<h2 id="tocS_AnalyticsFilter">AnalyticsFilter</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsfilter"></a>
<a id="schema_AnalyticsFilter"></a>
<a id="tocSanalyticsfilter"></a>
<a id="tocsanalyticsfilter"></a>

```json
{
  "Prefix": {},
  "Tag": {
    "Key": {},
    "Value": {}
  },
  "And": {
    "Prefix": {},
    "Tags": {}
  }
}
```

The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tag|object|false|none|none|
|And|object|false|none|none|

<h2 id="tocS_StorageClassAnalysis">StorageClassAnalysis</h2>
<!-- backwards compatibility -->
<a id="schemastorageclassanalysis"></a>
<a id="schema_StorageClassAnalysis"></a>
<a id="tocSstorageclassanalysis"></a>
<a id="tocsstorageclassanalysis"></a>

```json
{
  "DataExport": {
    "OutputSchemaVersion": {},
    "Destination": {
      "S3BucketDestination": {
        "Format": {},
        "BucketAccountId": {},
        "Bucket": {},
        "Prefix": {}
      }
    }
  }
}
```

Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataExport|object|false|none|none|

<h2 id="tocS_CORSRules">CORSRules</h2>
<!-- backwards compatibility -->
<a id="schemacorsrules"></a>
<a id="schema_CORSRules"></a>
<a id="tocScorsrules"></a>
<a id="tocscorsrules"></a>

```json
[
  {
    "ID": {},
    "AllowedHeaders": {},
    "AllowedMethods": {},
    "AllowedOrigins": {},
    "ExposeHeaders": {},
    "MaxAgeSeconds": {}
  }
]
```

<h2 id="tocS_ServerSideEncryptionRules">ServerSideEncryptionRules</h2>
<!-- backwards compatibility -->
<a id="schemaserversideencryptionrules"></a>
<a id="schema_ServerSideEncryptionRules"></a>
<a id="tocSserversideencryptionrules"></a>
<a id="tocsserversideencryptionrules"></a>

```json
[
  {
    "ApplyServerSideEncryptionByDefault": {
      "SSEAlgorithm": {},
      "KMSMasterKeyID": {}
    },
    "BucketKeyEnabled": {}
  }
]
```

<h2 id="tocS_IntelligentTieringId">IntelligentTieringId</h2>
<!-- backwards compatibility -->
<a id="schemaintelligenttieringid"></a>
<a id="schema_IntelligentTieringId"></a>
<a id="tocSintelligenttieringid"></a>
<a id="tocsintelligenttieringid"></a>

```json
"string"
```

<h2 id="tocS_IntelligentTieringFilter">IntelligentTieringFilter</h2>
<!-- backwards compatibility -->
<a id="schemaintelligenttieringfilter"></a>
<a id="schema_IntelligentTieringFilter"></a>
<a id="tocSintelligenttieringfilter"></a>
<a id="tocsintelligenttieringfilter"></a>

```json
{
  "Prefix": {},
  "Tag": {
    "Key": {},
    "Value": {}
  },
  "And": {
    "Prefix": {},
    "Tags": {}
  }
}
```

The <code>Filter</code> is used to identify objects that the S3 Intelligent-Tiering configuration applies to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tag|[Tag](#schematag)|false|none|A container of a key value name pair.|
|And|object|false|none|none|

<h2 id="tocS_IntelligentTieringStatus">IntelligentTieringStatus</h2>
<!-- backwards compatibility -->
<a id="schemaintelligenttieringstatus"></a>
<a id="schema_IntelligentTieringStatus"></a>
<a id="tocSintelligenttieringstatus"></a>
<a id="tocsintelligenttieringstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_TieringList">TieringList</h2>
<!-- backwards compatibility -->
<a id="schematieringlist"></a>
<a id="schema_TieringList"></a>
<a id="tocStieringlist"></a>
<a id="tocstieringlist"></a>

```json
[
  {
    "Days": {},
    "AccessTier": {}
  }
]
```

<h2 id="tocS_InventoryDestination">InventoryDestination</h2>
<!-- backwards compatibility -->
<a id="schemainventorydestination"></a>
<a id="schema_InventoryDestination"></a>
<a id="tocSinventorydestination"></a>
<a id="tocsinventorydestination"></a>

```json
{
  "S3BucketDestination": {
    "AccountId": {},
    "Bucket": {},
    "Format": {},
    "Prefix": {},
    "Encryption": {
      "SSES3": {},
      "SSEKMS": {
        "KeyId": {}
      }
    }
  }
}
```

Specifies the inventory configuration for an Amazon S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketDestination|object|true|none|none|

<h2 id="tocS_IsEnabled">IsEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaisenabled"></a>
<a id="schema_IsEnabled"></a>
<a id="tocSisenabled"></a>
<a id="tocsisenabled"></a>

```json
true
```

<h2 id="tocS_InventoryFilter">InventoryFilter</h2>
<!-- backwards compatibility -->
<a id="schemainventoryfilter"></a>
<a id="schema_InventoryFilter"></a>
<a id="tocSinventoryfilter"></a>
<a id="tocsinventoryfilter"></a>

```json
{
  "Prefix": {}
}
```

Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|true|none|none|

<h2 id="tocS_InventoryId">InventoryId</h2>
<!-- backwards compatibility -->
<a id="schemainventoryid"></a>
<a id="schema_InventoryId"></a>
<a id="tocSinventoryid"></a>
<a id="tocsinventoryid"></a>

```json
"string"
```

<h2 id="tocS_InventoryIncludedObjectVersions">InventoryIncludedObjectVersions</h2>
<!-- backwards compatibility -->
<a id="schemainventoryincludedobjectversions"></a>
<a id="schema_InventoryIncludedObjectVersions"></a>
<a id="tocSinventoryincludedobjectversions"></a>
<a id="tocsinventoryincludedobjectversions"></a>

```json
"All"
```

<h2 id="tocS_InventoryOptionalFields">InventoryOptionalFields</h2>
<!-- backwards compatibility -->
<a id="schemainventoryoptionalfields"></a>
<a id="schema_InventoryOptionalFields"></a>
<a id="tocSinventoryoptionalfields"></a>
<a id="tocsinventoryoptionalfields"></a>

```json
[
  {}
]
```

<h2 id="tocS_InventorySchedule">InventorySchedule</h2>
<!-- backwards compatibility -->
<a id="schemainventoryschedule"></a>
<a id="schema_InventorySchedule"></a>
<a id="tocSinventoryschedule"></a>
<a id="tocsinventoryschedule"></a>

```json
{
  "Frequency": {}
}
```

Specifies the schedule for generating inventory results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Frequency|object|true|none|none|

<h2 id="tocS_Rules">Rules</h2>
<!-- backwards compatibility -->
<a id="schemarules"></a>
<a id="schema_Rules"></a>
<a id="tocSrules"></a>
<a id="tocsrules"></a>

```json
[
  {
    "Expiration": {
      "Date": {},
      "Days": {},
      "ExpiredObjectDeleteMarker": {}
    },
    "ID": {},
    "Prefix": {},
    "Status": {},
    "Transition": {
      "Date": {},
      "Days": {},
      "StorageClass": {}
    },
    "NoncurrentVersionTransition": {
      "NoncurrentDays": {},
      "StorageClass": {},
      "NewerNoncurrentVersions": {}
    },
    "NoncurrentVersionExpiration": {
      "NoncurrentDays": {},
      "NewerNoncurrentVersions": {}
    },
    "AbortIncompleteMultipartUpload": {
      "DaysAfterInitiation": {}
    }
  }
]
```

<h2 id="tocS_LifecycleRules">LifecycleRules</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclerules"></a>
<a id="schema_LifecycleRules"></a>
<a id="tocSlifecyclerules"></a>
<a id="tocslifecyclerules"></a>

```json
[
  {
    "Expiration": {
      "Date": {},
      "Days": {},
      "ExpiredObjectDeleteMarker": {}
    },
    "ID": {},
    "Prefix": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "ObjectSizeGreaterThan": {},
      "ObjectSizeLessThan": {},
      "And": {
        "Prefix": {},
        "Tags": {},
        "ObjectSizeGreaterThan": {},
        "ObjectSizeLessThan": {}
      }
    },
    "Status": {},
    "Transitions": {},
    "NoncurrentVersionTransitions": {},
    "NoncurrentVersionExpiration": {
      "NoncurrentDays": {},
      "NewerNoncurrentVersions": {}
    },
    "AbortIncompleteMultipartUpload": {
      "DaysAfterInitiation": {}
    }
  }
]
```

<h2 id="tocS_LoggingEnabled">LoggingEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaloggingenabled"></a>
<a id="schema_LoggingEnabled"></a>
<a id="tocSloggingenabled"></a>
<a id="tocsloggingenabled"></a>

```json
{
  "TargetBucket": {},
  "TargetGrants": {},
  "TargetPrefix": {}
}
```

Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the <i>Amazon S3 API Reference</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetBucket|object|true|none|none|
|TargetGrants|object|false|none|none|
|TargetPrefix|object|true|none|none|

<h2 id="tocS_MetricsId">MetricsId</h2>
<!-- backwards compatibility -->
<a id="schemametricsid"></a>
<a id="schema_MetricsId"></a>
<a id="tocSmetricsid"></a>
<a id="tocsmetricsid"></a>

```json
"string"
```

<h2 id="tocS_MetricsFilter">MetricsFilter</h2>
<!-- backwards compatibility -->
<a id="schemametricsfilter"></a>
<a id="schema_MetricsFilter"></a>
<a id="tocSmetricsfilter"></a>
<a id="tocsmetricsfilter"></a>

```json
{
  "Prefix": {},
  "Tag": {
    "Key": {},
    "Value": {}
  },
  "AccessPointArn": {},
  "And": {
    "Prefix": {},
    "Tags": {},
    "AccessPointArn": {}
  }
}
```

Specifies a metrics configuration filter. The metrics configuration only includes objects that meet the filter's criteria. A filter must be a prefix, an object tag, an access point ARN, or a conjunction (MetricsAndOperator). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html">PutBucketMetricsConfiguration</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tag|object|false|none|none|
|AccessPointArn|object|false|none|none|
|And|object|false|none|none|

<h2 id="tocS_TopicConfigurationDeprecated">TopicConfigurationDeprecated</h2>
<!-- backwards compatibility -->
<a id="schematopicconfigurationdeprecated"></a>
<a id="schema_TopicConfigurationDeprecated"></a>
<a id="tocStopicconfigurationdeprecated"></a>
<a id="tocstopicconfigurationdeprecated"></a>

```json
{
  "Id": "string",
  "Events": {},
  "Event": {},
  "Topic": {}
}
```

A container for specifying the configuration for publication of messages to an Amazon Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events. This data type is deprecated. Use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_TopicConfiguration.html">TopicConfiguration</a> instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|[NotificationId](#schemanotificationid)|false|none|An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.|
|Events|object|false|none|none|
|Event|object|false|none|none|
|Topic|object|false|none|none|

<h2 id="tocS_QueueConfigurationDeprecated">QueueConfigurationDeprecated</h2>
<!-- backwards compatibility -->
<a id="schemaqueueconfigurationdeprecated"></a>
<a id="schema_QueueConfigurationDeprecated"></a>
<a id="tocSqueueconfigurationdeprecated"></a>
<a id="tocsqueueconfigurationdeprecated"></a>

```json
{
  "Id": "string",
  "Event": {},
  "Events": {},
  "Queue": {}
}
```

This data type is deprecated. Use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_QueueConfiguration.html">QueueConfiguration</a> for the same purposes. This data type specifies the configuration for publishing messages to an Amazon Simple Queue Service (Amazon SQS) queue when Amazon S3 detects specified events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|[NotificationId](#schemanotificationid)|false|none|An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.|
|Event|object|false|none|none|
|Events|object|false|none|none|
|Queue|object|false|none|none|

<h2 id="tocS_CloudFunctionConfiguration">CloudFunctionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacloudfunctionconfiguration"></a>
<a id="schema_CloudFunctionConfiguration"></a>
<a id="tocScloudfunctionconfiguration"></a>
<a id="tocscloudfunctionconfiguration"></a>

```json
{
  "Id": "string",
  "Event": {},
  "Events": {},
  "CloudFunction": {},
  "InvocationRole": {}
}
```

Container for specifying the Lambda notification configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|[NotificationId](#schemanotificationid)|false|none|An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.|
|Event|object|false|none|none|
|Events|object|false|none|none|
|CloudFunction|object|false|none|none|
|InvocationRole|object|false|none|none|

<h2 id="tocS_TopicConfigurationList">TopicConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schematopicconfigurationlist"></a>
<a id="schema_TopicConfigurationList"></a>
<a id="tocStopicconfigurationlist"></a>
<a id="tocstopicconfigurationlist"></a>

```json
[
  {
    "Id": "string",
    "TopicArn": {},
    "Events": {},
    "Filter": {
      "Key": {
        "FilterRules": {}
      }
    }
  }
]
```

<h2 id="tocS_QueueConfigurationList">QueueConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaqueueconfigurationlist"></a>
<a id="schema_QueueConfigurationList"></a>
<a id="tocSqueueconfigurationlist"></a>
<a id="tocsqueueconfigurationlist"></a>

```json
[
  {
    "Id": "string",
    "QueueArn": {},
    "Events": {},
    "Filter": {
      "Key": {
        "FilterRules": {}
      }
    }
  }
]
```

<h2 id="tocS_LambdaFunctionConfigurationList">LambdaFunctionConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionconfigurationlist"></a>
<a id="schema_LambdaFunctionConfigurationList"></a>
<a id="tocSlambdafunctionconfigurationlist"></a>
<a id="tocslambdafunctionconfigurationlist"></a>

```json
[
  {
    "Id": "string",
    "LambdaFunctionArn": {},
    "Events": {},
    "Filter": {
      "Key": {
        "FilterRules": {}
      }
    }
  }
]
```

<h2 id="tocS_EventBridgeConfiguration">EventBridgeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaeventbridgeconfiguration"></a>
<a id="schema_EventBridgeConfiguration"></a>
<a id="tocSeventbridgeconfiguration"></a>
<a id="tocseventbridgeconfiguration"></a>

```json
{}
```

A container for specifying the configuration for Amazon EventBridge.

<h2 id="tocS_OwnershipControlsRules">OwnershipControlsRules</h2>
<!-- backwards compatibility -->
<a id="schemaownershipcontrolsrules"></a>
<a id="schema_OwnershipControlsRules"></a>
<a id="tocSownershipcontrolsrules"></a>
<a id="tocsownershipcontrolsrules"></a>

```json
[
  {
    "ObjectOwnership": "BucketOwnerPreferred"
  }
]
```

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
"string"
```

<h2 id="tocS_ReplicationRules">ReplicationRules</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrules"></a>
<a id="schema_ReplicationRules"></a>
<a id="tocSreplicationrules"></a>
<a id="tocsreplicationrules"></a>

```json
[
  {
    "ID": {},
    "Priority": {},
    "Prefix": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "And": {
        "Prefix": {},
        "Tags": {}
      }
    },
    "Status": {},
    "SourceSelectionCriteria": {
      "SseKmsEncryptedObjects": {
        "Status": {}
      },
      "ReplicaModifications": {
        "Status": {}
      }
    },
    "ExistingObjectReplication": {
      "Status": {}
    },
    "Destination": {
      "Bucket": {},
      "Account": {},
      "StorageClass": {},
      "AccessControlTranslation": {
        "Owner": {}
      },
      "EncryptionConfiguration": {
        "ReplicaKmsKeyID": {}
      },
      "ReplicationTime": {
        "Status": {},
        "Time": {
          "Minutes": {}
        }
      },
      "Metrics": {
        "Status": {},
        "EventThreshold": {
          "Minutes": {}
        }
      }
    },
    "DeleteMarkerReplication": {
      "Status": {}
    }
  }
]
```

<h2 id="tocS_Payer">Payer</h2>
<!-- backwards compatibility -->
<a id="schemapayer"></a>
<a id="schema_Payer"></a>
<a id="tocSpayer"></a>
<a id="tocspayer"></a>

```json
"Requester"
```

<h2 id="tocS_TagSet">TagSet</h2>
<!-- backwards compatibility -->
<a id="schematagset"></a>
<a id="schema_TagSet"></a>
<a id="tocStagset"></a>
<a id="tocstagset"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_MFADelete">MFADelete</h2>
<!-- backwards compatibility -->
<a id="schemamfadelete"></a>
<a id="schema_MFADelete"></a>
<a id="tocSmfadelete"></a>
<a id="tocsmfadelete"></a>

```json
"Enabled"
```

<h2 id="tocS_BucketVersioningStatus">BucketVersioningStatus</h2>
<!-- backwards compatibility -->
<a id="schemabucketversioningstatus"></a>
<a id="schema_BucketVersioningStatus"></a>
<a id="tocSbucketversioningstatus"></a>
<a id="tocsbucketversioningstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_ErrorDocument">ErrorDocument</h2>
<!-- backwards compatibility -->
<a id="schemaerrordocument"></a>
<a id="schema_ErrorDocument"></a>
<a id="tocSerrordocument"></a>
<a id="tocserrordocument"></a>

```json
{
  "Key": {}
}
```

The error information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|

<h2 id="tocS_IndexDocument">IndexDocument</h2>
<!-- backwards compatibility -->
<a id="schemaindexdocument"></a>
<a id="schema_IndexDocument"></a>
<a id="tocSindexdocument"></a>
<a id="tocsindexdocument"></a>

```json
{
  "Suffix": {}
}
```

Container for the <code>Suffix</code> element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Suffix|object|true|none|none|

<h2 id="tocS_RedirectAllRequestsTo">RedirectAllRequestsTo</h2>
<!-- backwards compatibility -->
<a id="schemaredirectallrequeststo"></a>
<a id="schema_RedirectAllRequestsTo"></a>
<a id="tocSredirectallrequeststo"></a>
<a id="tocsredirectallrequeststo"></a>

```json
{
  "HostName": {},
  "Protocol": {}
}
```

Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostName|object|true|none|none|
|Protocol|object|false|none|none|

<h2 id="tocS_RoutingRules">RoutingRules</h2>
<!-- backwards compatibility -->
<a id="schemaroutingrules"></a>
<a id="schema_RoutingRules"></a>
<a id="tocSroutingrules"></a>
<a id="tocsroutingrules"></a>

```json
[
  {
    "Condition": {
      "HttpErrorCodeReturnedEquals": {},
      "KeyPrefixEquals": {}
    },
    "Redirect": {
      "HostName": {},
      "HttpRedirectCode": {},
      "Protocol": {},
      "ReplaceKeyPrefixWith": {},
      "ReplaceKeyWith": {}
    }
  }
]
```

<h2 id="tocS_PutObjectOutput">PutObjectOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputobjectoutput"></a>
<a id="schema_PutObjectOutput"></a>
<a id="tocSputobjectoutput"></a>
<a id="tocsputobjectoutput"></a>

```json
{
  "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
  "VersionId": "Kirh.unyZwjQ69YxcQLA8z4F5j3kJJKr"
}
```

<h2 id="tocS_PutObjectAclOutput">PutObjectAclOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputobjectacloutput"></a>
<a id="schema_PutObjectAclOutput"></a>
<a id="tocSputobjectacloutput"></a>
<a id="tocsputobjectacloutput"></a>

```json
{}
```

<h2 id="tocS_PutObjectLegalHoldOutput">PutObjectLegalHoldOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputobjectlegalholdoutput"></a>
<a id="schema_PutObjectLegalHoldOutput"></a>
<a id="tocSputobjectlegalholdoutput"></a>
<a id="tocsputobjectlegalholdoutput"></a>

```json
{}
```

<h2 id="tocS_ObjectLockLegalHoldStatus">ObjectLockLegalHoldStatus</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlocklegalholdstatus"></a>
<a id="schema_ObjectLockLegalHoldStatus"></a>
<a id="tocSobjectlocklegalholdstatus"></a>
<a id="tocsobjectlocklegalholdstatus"></a>

```json
"ON"
```

<h2 id="tocS_PutObjectLockConfigurationOutput">PutObjectLockConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputobjectlockconfigurationoutput"></a>
<a id="schema_PutObjectLockConfigurationOutput"></a>
<a id="tocSputobjectlockconfigurationoutput"></a>
<a id="tocsputobjectlockconfigurationoutput"></a>

```json
{}
```

<h2 id="tocS_ObjectLockEnabled">ObjectLockEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlockenabled"></a>
<a id="schema_ObjectLockEnabled"></a>
<a id="tocSobjectlockenabled"></a>
<a id="tocsobjectlockenabled"></a>

```json
"Enabled"
```

<h2 id="tocS_ObjectLockRule">ObjectLockRule</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlockrule"></a>
<a id="schema_ObjectLockRule"></a>
<a id="tocSobjectlockrule"></a>
<a id="tocsobjectlockrule"></a>

```json
{
  "DefaultRetention": {
    "Mode": {},
    "Days": {},
    "Years": {}
  }
}
```

The container element for an Object Lock rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultRetention|object|false|none|none|

<h2 id="tocS_PutObjectRetentionOutput">PutObjectRetentionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputobjectretentionoutput"></a>
<a id="schema_PutObjectRetentionOutput"></a>
<a id="tocSputobjectretentionoutput"></a>
<a id="tocsputobjectretentionoutput"></a>

```json
{}
```

<h2 id="tocS_ObjectLockRetentionMode">ObjectLockRetentionMode</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlockretentionmode"></a>
<a id="schema_ObjectLockRetentionMode"></a>
<a id="tocSobjectlockretentionmode"></a>
<a id="tocsobjectlockretentionmode"></a>

```json
"GOVERNANCE"
```

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_PutObjectTaggingOutput">PutObjectTaggingOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputobjecttaggingoutput"></a>
<a id="schema_PutObjectTaggingOutput"></a>
<a id="tocSputobjecttaggingoutput"></a>
<a id="tocsputobjecttaggingoutput"></a>

```json
{
  "VersionId": "null"
}
```

<h2 id="tocS_Setting">Setting</h2>
<!-- backwards compatibility -->
<a id="schemasetting"></a>
<a id="schema_Setting"></a>
<a id="tocSsetting"></a>
<a id="tocssetting"></a>

```json
true
```

<h2 id="tocS_RestoreObjectOutput">RestoreObjectOutput</h2>
<!-- backwards compatibility -->
<a id="schemarestoreobjectoutput"></a>
<a id="schema_RestoreObjectOutput"></a>
<a id="tocSrestoreobjectoutput"></a>
<a id="tocsrestoreobjectoutput"></a>

```json
{}
```

<h2 id="tocS_Days">Days</h2>
<!-- backwards compatibility -->
<a id="schemadays"></a>
<a id="schema_Days"></a>
<a id="tocSdays"></a>
<a id="tocsdays"></a>

```json
0
```

<h2 id="tocS_GlacierJobParameters">GlacierJobParameters</h2>
<!-- backwards compatibility -->
<a id="schemaglacierjobparameters"></a>
<a id="schema_GlacierJobParameters"></a>
<a id="tocSglacierjobparameters"></a>
<a id="tocsglacierjobparameters"></a>

```json
{
  "Tier": {}
}
```

Container for S3 Glacier job parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tier|object|true|none|none|

<h2 id="tocS_RestoreRequestType">RestoreRequestType</h2>
<!-- backwards compatibility -->
<a id="schemarestorerequesttype"></a>
<a id="schema_RestoreRequestType"></a>
<a id="tocSrestorerequesttype"></a>
<a id="tocsrestorerequesttype"></a>

```json
"SELECT"
```

<h2 id="tocS_Tier">Tier</h2>
<!-- backwards compatibility -->
<a id="schematier"></a>
<a id="schema_Tier"></a>
<a id="tocStier"></a>
<a id="tocstier"></a>

```json
"Standard"
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

<h2 id="tocS_SelectParameters">SelectParameters</h2>
<!-- backwards compatibility -->
<a id="schemaselectparameters"></a>
<a id="schema_SelectParameters"></a>
<a id="tocSselectparameters"></a>
<a id="tocsselectparameters"></a>

```json
{
  "InputSerialization": {
    "CSV": {
      "FileHeaderInfo": {},
      "Comments": {},
      "QuoteEscapeCharacter": {},
      "RecordDelimiter": {},
      "FieldDelimiter": {},
      "QuoteCharacter": {},
      "AllowQuotedRecordDelimiter": {}
    },
    "CompressionType": {},
    "JSON": {
      "Type": {}
    },
    "Parquet": {}
  },
  "ExpressionType": {},
  "Expression": {},
  "OutputSerialization": {
    "CSV": {
      "QuoteFields": {},
      "QuoteEscapeCharacter": {},
      "RecordDelimiter": {},
      "FieldDelimiter": {},
      "QuoteCharacter": {}
    },
    "JSON": {
      "RecordDelimiter": {}
    }
  }
}
```

Describes the parameters for Select job types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputSerialization|object|true|none|none|
|ExpressionType|object|true|none|none|
|Expression|object|true|none|none|
|OutputSerialization|object|true|none|none|

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
      "TagSet": {}
    },
    "UserMetadata": {},
    "StorageClass": {}
  }
}
```

Describes the location where the restore job's output is stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3|object|false|none|none|

<h2 id="tocS_ObjectAlreadyInActiveTierError">ObjectAlreadyInActiveTierError</h2>
<!-- backwards compatibility -->
<a id="schemaobjectalreadyinactivetiererror"></a>
<a id="schema_ObjectAlreadyInActiveTierError"></a>
<a id="tocSobjectalreadyinactivetiererror"></a>
<a id="tocsobjectalreadyinactivetiererror"></a>

```json
null
```

<h2 id="tocS_SelectObjectContentOutput">SelectObjectContentOutput</h2>
<!-- backwards compatibility -->
<a id="schemaselectobjectcontentoutput"></a>
<a id="schema_SelectObjectContentOutput"></a>
<a id="tocSselectobjectcontentoutput"></a>
<a id="tocsselectobjectcontentoutput"></a>

```json
{
  "Payload": {
    "Records": {
      "Payload": {}
    },
    "Stats": {
      "Details": {
        "BytesScanned": {},
        "BytesProcessed": {},
        "BytesReturned": {}
      }
    },
    "Progress": {
      "Details": {
        "BytesScanned": {},
        "BytesProcessed": {},
        "BytesReturned": {}
      }
    },
    "Cont": {},
    "End": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Payload|object|false|none|none|

<h2 id="tocS_EnableRequestProgress">EnableRequestProgress</h2>
<!-- backwards compatibility -->
<a id="schemaenablerequestprogress"></a>
<a id="schema_EnableRequestProgress"></a>
<a id="tocSenablerequestprogress"></a>
<a id="tocsenablerequestprogress"></a>

```json
true
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
  "QuoteCharacter": {},
  "AllowQuotedRecordDelimiter": {}
}
```

Describes how an uncompressed comma-separated values (CSV)-formatted input object is formatted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileHeaderInfo|object|false|none|none|
|Comments|object|false|none|none|
|QuoteEscapeCharacter|object|false|none|none|
|RecordDelimiter|object|false|none|none|
|FieldDelimiter|object|false|none|none|
|QuoteCharacter|object|false|none|none|
|AllowQuotedRecordDelimiter|object|false|none|none|

<h2 id="tocS_CompressionType">CompressionType</h2>
<!-- backwards compatibility -->
<a id="schemacompressiontype"></a>
<a id="schema_CompressionType"></a>
<a id="tocScompressiontype"></a>
<a id="tocscompressiontype"></a>

```json
"NONE"
```

<h2 id="tocS_JSONInput">JSONInput</h2>
<!-- backwards compatibility -->
<a id="schemajsoninput"></a>
<a id="schema_JSONInput"></a>
<a id="tocSjsoninput"></a>
<a id="tocsjsoninput"></a>

```json
{
  "Type": {}
}
```

Specifies JSON as object's input serialization format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|

<h2 id="tocS_ParquetInput">ParquetInput</h2>
<!-- backwards compatibility -->
<a id="schemaparquetinput"></a>
<a id="schema_ParquetInput"></a>
<a id="tocSparquetinput"></a>
<a id="tocsparquetinput"></a>

```json
{}
```

Container for Parquet.

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

Describes how uncompressed comma-separated values (CSV)-formatted results are formatted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuoteFields|object|false|none|none|
|QuoteEscapeCharacter|object|false|none|none|
|RecordDelimiter|object|false|none|none|
|FieldDelimiter|object|false|none|none|
|QuoteCharacter|object|false|none|none|

<h2 id="tocS_JSONOutput">JSONOutput</h2>
<!-- backwards compatibility -->
<a id="schemajsonoutput"></a>
<a id="schema_JSONOutput"></a>
<a id="tocSjsonoutput"></a>
<a id="tocsjsonoutput"></a>

```json
{
  "RecordDelimiter": {}
}
```

Specifies JSON as request's output serialization format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordDelimiter|object|false|none|none|

<h2 id="tocS_Start">Start</h2>
<!-- backwards compatibility -->
<a id="schemastart"></a>
<a id="schema_Start"></a>
<a id="tocSstart"></a>
<a id="tocsstart"></a>

```json
0
```

<h2 id="tocS_End">End</h2>
<!-- backwards compatibility -->
<a id="schemaend"></a>
<a id="schema_End"></a>
<a id="tocSend"></a>
<a id="tocsend"></a>

```json
0
```

<h2 id="tocS_UploadPartOutput">UploadPartOutput</h2>
<!-- backwards compatibility -->
<a id="schemauploadpartoutput"></a>
<a id="schema_UploadPartOutput"></a>
<a id="tocSuploadpartoutput"></a>
<a id="tocsuploadpartoutput"></a>

```json
{
  "ETag": "\"d8c2eafd90c266e19ab9dcacc479f8af\""
}
```

<h2 id="tocS_UploadPartCopyOutput">UploadPartCopyOutput</h2>
<!-- backwards compatibility -->
<a id="schemauploadpartcopyoutput"></a>
<a id="schema_UploadPartCopyOutput"></a>
<a id="tocSuploadpartcopyoutput"></a>
<a id="tocsuploadpartcopyoutput"></a>

```json
{
  "CopyPartResult": {
    "ETag": "\"b0c6f0e7e054ab8fa2536a2677f8734d\"",
    "LastModified": "2016-12-29T21:24:43.000Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CopyPartResult|object|false|none|none|

<h2 id="tocS_AbortDate">AbortDate</h2>
<!-- backwards compatibility -->
<a id="schemaabortdate"></a>
<a id="schema_AbortDate"></a>
<a id="tocSabortdate"></a>
<a id="tocsabortdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DaysAfterInitiation">DaysAfterInitiation</h2>
<!-- backwards compatibility -->
<a id="schemadaysafterinitiation"></a>
<a id="schema_DaysAfterInitiation"></a>
<a id="tocSdaysafterinitiation"></a>
<a id="tocsdaysafterinitiation"></a>

```json
0
```

<h2 id="tocS_AbortIncompleteMultipartUpload">AbortIncompleteMultipartUpload</h2>
<!-- backwards compatibility -->
<a id="schemaabortincompletemultipartupload"></a>
<a id="schema_AbortIncompleteMultipartUpload"></a>
<a id="tocSabortincompletemultipartupload"></a>
<a id="tocsabortincompletemultipartupload"></a>

```json
{
  "DaysAfterInitiation": {}
}
```

Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config"> Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DaysAfterInitiation|object|false|none|none|

<h2 id="tocS_RequestCharged">RequestCharged</h2>
<!-- backwards compatibility -->
<a id="schemarequestcharged"></a>
<a id="schema_RequestCharged"></a>
<a id="tocSrequestcharged"></a>
<a id="tocsrequestcharged"></a>

```json
"requester"
```

If present, indicates that the requester was successfully charged for the request.

<h2 id="tocS_BucketName">BucketName</h2>
<!-- backwards compatibility -->
<a id="schemabucketname"></a>
<a id="schema_BucketName"></a>
<a id="tocSbucketname"></a>
<a id="tocsbucketname"></a>

```json
"string"
```

<h2 id="tocS_ObjectKey">ObjectKey</h2>
<!-- backwards compatibility -->
<a id="schemaobjectkey"></a>
<a id="schema_ObjectKey"></a>
<a id="tocSobjectkey"></a>
<a id="tocsobjectkey"></a>

```json
"string"
```

<h2 id="tocS_MultipartUploadId">MultipartUploadId</h2>
<!-- backwards compatibility -->
<a id="schemamultipartuploadid"></a>
<a id="schema_MultipartUploadId"></a>
<a id="tocSmultipartuploadid"></a>
<a id="tocsmultipartuploadid"></a>

```json
"string"
```

<h2 id="tocS_RequestPayer">RequestPayer</h2>
<!-- backwards compatibility -->
<a id="schemarequestpayer"></a>
<a id="schema_RequestPayer"></a>
<a id="tocSrequestpayer"></a>
<a id="tocsrequestpayer"></a>

```json
"requester"
```

Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_AbortMultipartUploadRequest">AbortMultipartUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemaabortmultipartuploadrequest"></a>
<a id="schema_AbortMultipartUploadRequest"></a>
<a id="tocSabortmultipartuploadrequest"></a>
<a id="tocsabortmultipartuploadrequest"></a>

```json
{}
```

<h2 id="tocS_AbortRuleId">AbortRuleId</h2>
<!-- backwards compatibility -->
<a id="schemaabortruleid"></a>
<a id="schema_AbortRuleId"></a>
<a id="tocSabortruleid"></a>
<a id="tocsabortruleid"></a>

```json
"string"
```

<h2 id="tocS_AccelerateConfiguration">AccelerateConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaaccelerateconfiguration"></a>
<a id="schema_AccelerateConfiguration"></a>
<a id="tocSaccelerateconfiguration"></a>
<a id="tocsaccelerateconfiguration"></a>

```json
{
  "Status": {}
}
```

Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Amazon S3 Transfer Acceleration</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_AcceptRanges">AcceptRanges</h2>
<!-- backwards compatibility -->
<a id="schemaacceptranges"></a>
<a id="schema_AcceptRanges"></a>
<a id="tocSacceptranges"></a>
<a id="tocsacceptranges"></a>

```json
"string"
```

<h2 id="tocS_AccessControlPolicy">AccessControlPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolpolicy"></a>
<a id="schema_AccessControlPolicy"></a>
<a id="tocSaccesscontrolpolicy"></a>
<a id="tocsaccesscontrolpolicy"></a>

```json
{
  "Grants": {},
  "Owner": {
    "DisplayName": {},
    "ID": {}
  }
}
```

Contains the elements that set the ACL permissions for an object per grantee.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Grants|object|false|none|none|
|Owner|object|false|none|none|

<h2 id="tocS_OwnerOverride">OwnerOverride</h2>
<!-- backwards compatibility -->
<a id="schemaowneroverride"></a>
<a id="schema_OwnerOverride"></a>
<a id="tocSowneroverride"></a>
<a id="tocsowneroverride"></a>

```json
"Destination"
```

<h2 id="tocS_AccessControlTranslation">AccessControlTranslation</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontroltranslation"></a>
<a id="schema_AccessControlTranslation"></a>
<a id="tocSaccesscontroltranslation"></a>
<a id="tocsaccesscontroltranslation"></a>

```json
{
  "Owner": {}
}
```

A container for information about access control for replicas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Owner|object|true|none|none|

<h2 id="tocS_AccessPointArn">AccessPointArn</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointarn"></a>
<a id="schema_AccessPointArn"></a>
<a id="tocSaccesspointarn"></a>
<a id="tocsaccesspointarn"></a>

```json
"string"
```

<h2 id="tocS_AllowQuotedRecordDelimiter">AllowQuotedRecordDelimiter</h2>
<!-- backwards compatibility -->
<a id="schemaallowquotedrecorddelimiter"></a>
<a id="schema_AllowQuotedRecordDelimiter"></a>
<a id="tocSallowquotedrecorddelimiter"></a>
<a id="tocsallowquotedrecorddelimiter"></a>

```json
true
```

<h2 id="tocS_AllowedHeader">AllowedHeader</h2>
<!-- backwards compatibility -->
<a id="schemaallowedheader"></a>
<a id="schema_AllowedHeader"></a>
<a id="tocSallowedheader"></a>
<a id="tocsallowedheader"></a>

```json
"string"
```

<h2 id="tocS_AllowedHeaders">AllowedHeaders</h2>
<!-- backwards compatibility -->
<a id="schemaallowedheaders"></a>
<a id="schema_AllowedHeaders"></a>
<a id="tocSallowedheaders"></a>
<a id="tocsallowedheaders"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AllowedMethod">AllowedMethod</h2>
<!-- backwards compatibility -->
<a id="schemaallowedmethod"></a>
<a id="schema_AllowedMethod"></a>
<a id="tocSallowedmethod"></a>
<a id="tocsallowedmethod"></a>

```json
"string"
```

<h2 id="tocS_AllowedMethods">AllowedMethods</h2>
<!-- backwards compatibility -->
<a id="schemaallowedmethods"></a>
<a id="schema_AllowedMethods"></a>
<a id="tocSallowedmethods"></a>
<a id="tocsallowedmethods"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AllowedOrigin">AllowedOrigin</h2>
<!-- backwards compatibility -->
<a id="schemaallowedorigin"></a>
<a id="schema_AllowedOrigin"></a>
<a id="tocSallowedorigin"></a>
<a id="tocsallowedorigin"></a>

```json
"string"
```

<h2 id="tocS_AllowedOrigins">AllowedOrigins</h2>
<!-- backwards compatibility -->
<a id="schemaallowedorigins"></a>
<a id="schema_AllowedOrigins"></a>
<a id="tocSallowedorigins"></a>
<a id="tocsallowedorigins"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Prefix">Prefix</h2>
<!-- backwards compatibility -->
<a id="schemaprefix"></a>
<a id="schema_Prefix"></a>
<a id="tocSprefix"></a>
<a id="tocsprefix"></a>

```json
"string"
```

<h2 id="tocS_AnalyticsAndOperator">AnalyticsAndOperator</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsandoperator"></a>
<a id="schema_AnalyticsAndOperator"></a>
<a id="tocSanalyticsandoperator"></a>
<a id="tocsanalyticsandoperator"></a>

```json
{
  "Prefix": {},
  "Tags": {}
}
```

A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates in any combination, and an object must match all of the predicates for the filter to apply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_AnalyticsConfiguration">AnalyticsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsconfiguration"></a>
<a id="schema_AnalyticsConfiguration"></a>
<a id="tocSanalyticsconfiguration"></a>
<a id="tocsanalyticsconfiguration"></a>

```json
{
  "Id": {},
  "Filter": {
    "Prefix": {},
    "Tag": {
      "Key": {},
      "Value": {}
    },
    "And": {
      "Prefix": {},
      "Tags": {}
    }
  },
  "StorageClassAnalysis": {
    "DataExport": {
      "OutputSchemaVersion": {},
      "Destination": {
        "S3BucketDestination": {
          "Format": {},
          "BucketAccountId": {},
          "Bucket": {},
          "Prefix": {}
        }
      }
    }
  }
}
```

Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Filter|object|false|none|none|
|StorageClassAnalysis|object|true|none|none|

<h2 id="tocS_AnalyticsConfigurationList">AnalyticsConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsconfigurationlist"></a>
<a id="schema_AnalyticsConfigurationList"></a>
<a id="tocSanalyticsconfigurationlist"></a>
<a id="tocsanalyticsconfigurationlist"></a>

```json
[
  {
    "Id": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "And": {
        "Prefix": {},
        "Tags": {}
      }
    },
    "StorageClassAnalysis": {
      "DataExport": {
        "OutputSchemaVersion": {},
        "Destination": {
          "S3BucketDestination": {
            "Format": {},
            "BucketAccountId": {},
            "Bucket": {},
            "Prefix": {}
          }
        }
      }
    }
  }
]
```

<h2 id="tocS_AnalyticsS3BucketDestination">AnalyticsS3BucketDestination</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticss3bucketdestination"></a>
<a id="schema_AnalyticsS3BucketDestination"></a>
<a id="tocSanalyticss3bucketdestination"></a>
<a id="tocsanalyticss3bucketdestination"></a>

```json
{
  "Format": {},
  "BucketAccountId": {},
  "Bucket": {},
  "Prefix": {}
}
```

Contains information about where to publish the analytics results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Format|object|true|none|none|
|BucketAccountId|object|false|none|none|
|Bucket|object|true|none|none|
|Prefix|object|false|none|none|

<h2 id="tocS_AnalyticsExportDestination">AnalyticsExportDestination</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsexportdestination"></a>
<a id="schema_AnalyticsExportDestination"></a>
<a id="tocSanalyticsexportdestination"></a>
<a id="tocsanalyticsexportdestination"></a>

```json
{
  "S3BucketDestination": {
    "Format": {},
    "BucketAccountId": {},
    "Bucket": {},
    "Prefix": {}
  }
}
```

Where to publish the analytics results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketDestination|object|true|none|none|

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

A container of a key value name pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_AnalyticsS3ExportFileFormat">AnalyticsS3ExportFileFormat</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticss3exportfileformat"></a>
<a id="schema_AnalyticsS3ExportFileFormat"></a>
<a id="tocSanalyticss3exportfileformat"></a>
<a id="tocsanalyticss3exportfileformat"></a>

```json
"CSV"
```

<h2 id="tocS_ArchiveStatus">ArchiveStatus</h2>
<!-- backwards compatibility -->
<a id="schemaarchivestatus"></a>
<a id="schema_ArchiveStatus"></a>
<a id="tocSarchivestatus"></a>
<a id="tocsarchivestatus"></a>

```json
"ARCHIVE_ACCESS"
```

<h2 id="tocS_Body">Body</h2>
<!-- backwards compatibility -->
<a id="schemabody"></a>
<a id="schema_Body"></a>
<a id="tocSbody"></a>
<a id="tocsbody"></a>

```json
"string"
```

<h2 id="tocS_CreationDate">CreationDate</h2>
<!-- backwards compatibility -->
<a id="schemacreationdate"></a>
<a id="schema_CreationDate"></a>
<a id="tocScreationdate"></a>
<a id="tocscreationdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Bucket">Bucket</h2>
<!-- backwards compatibility -->
<a id="schemabucket"></a>
<a id="schema_Bucket"></a>
<a id="tocSbucket"></a>
<a id="tocsbucket"></a>

```json
{
  "Name": {},
  "CreationDate": {}
}
```

 In terms of implementation, a Bucket is a resource. An Amazon S3 bucket name is globally unique, and the namespace is shared by all Amazon Web Services accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|CreationDate|object|false|none|none|

<h2 id="tocS_BucketCannedACL">BucketCannedACL</h2>
<!-- backwards compatibility -->
<a id="schemabucketcannedacl"></a>
<a id="schema_BucketCannedACL"></a>
<a id="tocSbucketcannedacl"></a>
<a id="tocsbucketcannedacl"></a>

```json
"private"
```

<h2 id="tocS_BucketKeyEnabled">BucketKeyEnabled</h2>
<!-- backwards compatibility -->
<a id="schemabucketkeyenabled"></a>
<a id="schema_BucketKeyEnabled"></a>
<a id="tocSbucketkeyenabled"></a>
<a id="tocsbucketkeyenabled"></a>

```json
true
```

<h2 id="tocS_BucketLifecycleConfiguration">BucketLifecycleConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemabucketlifecycleconfiguration"></a>
<a id="schema_BucketLifecycleConfiguration"></a>
<a id="tocSbucketlifecycleconfiguration"></a>
<a id="tocsbucketlifecycleconfiguration"></a>

```json
{
  "Rules": {}
}
```

Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|true|none|none|

<h2 id="tocS_BucketLoggingStatus">BucketLoggingStatus</h2>
<!-- backwards compatibility -->
<a id="schemabucketloggingstatus"></a>
<a id="schema_BucketLoggingStatus"></a>
<a id="tocSbucketloggingstatus"></a>
<a id="tocsbucketloggingstatus"></a>

```json
{
  "LoggingEnabled": {
    "TargetBucket": {},
    "TargetGrants": {},
    "TargetPrefix": {}
  }
}
```

Container for logging status information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingEnabled|[LoggingEnabled](#schemaloggingenabled)|false|none|Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the <i>Amazon S3 API Reference</i>.|

<h2 id="tocS_BucketLogsPermission">BucketLogsPermission</h2>
<!-- backwards compatibility -->
<a id="schemabucketlogspermission"></a>
<a id="schema_BucketLogsPermission"></a>
<a id="tocSbucketlogspermission"></a>
<a id="tocsbucketlogspermission"></a>

```json
"FULL_CONTROL"
```

<h2 id="tocS_Buckets">Buckets</h2>
<!-- backwards compatibility -->
<a id="schemabuckets"></a>
<a id="schema_Buckets"></a>
<a id="tocSbuckets"></a>
<a id="tocsbuckets"></a>

```json
[
  {
    "Name": {},
    "CreationDate": {}
  }
]
```

<h2 id="tocS_BypassGovernanceRetention">BypassGovernanceRetention</h2>
<!-- backwards compatibility -->
<a id="schemabypassgovernanceretention"></a>
<a id="schema_BypassGovernanceRetention"></a>
<a id="tocSbypassgovernanceretention"></a>
<a id="tocsbypassgovernanceretention"></a>

```json
true
```

<h2 id="tocS_BytesProcessed">BytesProcessed</h2>
<!-- backwards compatibility -->
<a id="schemabytesprocessed"></a>
<a id="schema_BytesProcessed"></a>
<a id="tocSbytesprocessed"></a>
<a id="tocsbytesprocessed"></a>

```json
0
```

<h2 id="tocS_BytesReturned">BytesReturned</h2>
<!-- backwards compatibility -->
<a id="schemabytesreturned"></a>
<a id="schema_BytesReturned"></a>
<a id="tocSbytesreturned"></a>
<a id="tocsbytesreturned"></a>

```json
0
```

<h2 id="tocS_BytesScanned">BytesScanned</h2>
<!-- backwards compatibility -->
<a id="schemabytesscanned"></a>
<a id="schema_BytesScanned"></a>
<a id="tocSbytesscanned"></a>
<a id="tocsbytesscanned"></a>

```json
0
```

<h2 id="tocS_CORSConfiguration">CORSConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacorsconfiguration"></a>
<a id="schema_CORSConfiguration"></a>
<a id="tocScorsconfiguration"></a>
<a id="tocscorsconfiguration"></a>

```json
{
  "CORSRules": {}
}
```

Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource Sharing</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CORSRules|object|true|none|none|

<h2 id="tocS_ID">ID</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_ID"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

<h2 id="tocS_ExposeHeaders">ExposeHeaders</h2>
<!-- backwards compatibility -->
<a id="schemaexposeheaders"></a>
<a id="schema_ExposeHeaders"></a>
<a id="tocSexposeheaders"></a>
<a id="tocsexposeheaders"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MaxAgeSeconds">MaxAgeSeconds</h2>
<!-- backwards compatibility -->
<a id="schemamaxageseconds"></a>
<a id="schema_MaxAgeSeconds"></a>
<a id="tocSmaxageseconds"></a>
<a id="tocsmaxageseconds"></a>

```json
0
```

<h2 id="tocS_CORSRule">CORSRule</h2>
<!-- backwards compatibility -->
<a id="schemacorsrule"></a>
<a id="schema_CORSRule"></a>
<a id="tocScorsrule"></a>
<a id="tocscorsrule"></a>

```json
{
  "ID": {},
  "AllowedHeaders": {},
  "AllowedMethods": {},
  "AllowedOrigins": {},
  "ExposeHeaders": {},
  "MaxAgeSeconds": {}
}
```

Specifies a cross-origin access rule for an Amazon S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|object|false|none|none|
|AllowedHeaders|object|false|none|none|
|AllowedMethods|object|true|none|none|
|AllowedOrigins|object|true|none|none|
|ExposeHeaders|object|false|none|none|
|MaxAgeSeconds|object|false|none|none|

<h2 id="tocS_FileHeaderInfo">FileHeaderInfo</h2>
<!-- backwards compatibility -->
<a id="schemafileheaderinfo"></a>
<a id="schema_FileHeaderInfo"></a>
<a id="tocSfileheaderinfo"></a>
<a id="tocsfileheaderinfo"></a>

```json
"USE"
```

<h2 id="tocS_Comments">Comments</h2>
<!-- backwards compatibility -->
<a id="schemacomments"></a>
<a id="schema_Comments"></a>
<a id="tocScomments"></a>
<a id="tocscomments"></a>

```json
"string"
```

<h2 id="tocS_QuoteEscapeCharacter">QuoteEscapeCharacter</h2>
<!-- backwards compatibility -->
<a id="schemaquoteescapecharacter"></a>
<a id="schema_QuoteEscapeCharacter"></a>
<a id="tocSquoteescapecharacter"></a>
<a id="tocsquoteescapecharacter"></a>

```json
"string"
```

<h2 id="tocS_RecordDelimiter">RecordDelimiter</h2>
<!-- backwards compatibility -->
<a id="schemarecorddelimiter"></a>
<a id="schema_RecordDelimiter"></a>
<a id="tocSrecorddelimiter"></a>
<a id="tocsrecorddelimiter"></a>

```json
"string"
```

<h2 id="tocS_FieldDelimiter">FieldDelimiter</h2>
<!-- backwards compatibility -->
<a id="schemafielddelimiter"></a>
<a id="schema_FieldDelimiter"></a>
<a id="tocSfielddelimiter"></a>
<a id="tocsfielddelimiter"></a>

```json
"string"
```

<h2 id="tocS_QuoteCharacter">QuoteCharacter</h2>
<!-- backwards compatibility -->
<a id="schemaquotecharacter"></a>
<a id="schema_QuoteCharacter"></a>
<a id="tocSquotecharacter"></a>
<a id="tocsquotecharacter"></a>

```json
"string"
```

<h2 id="tocS_QuoteFields">QuoteFields</h2>
<!-- backwards compatibility -->
<a id="schemaquotefields"></a>
<a id="schema_QuoteFields"></a>
<a id="tocSquotefields"></a>
<a id="tocsquotefields"></a>

```json
"ALWAYS"
```

<h2 id="tocS_CacheControl">CacheControl</h2>
<!-- backwards compatibility -->
<a id="schemacachecontrol"></a>
<a id="schema_CacheControl"></a>
<a id="tocScachecontrol"></a>
<a id="tocscachecontrol"></a>

```json
"string"
```

<h2 id="tocS_ChecksumCRC32">ChecksumCRC32</h2>
<!-- backwards compatibility -->
<a id="schemachecksumcrc32"></a>
<a id="schema_ChecksumCRC32"></a>
<a id="tocSchecksumcrc32"></a>
<a id="tocschecksumcrc32"></a>

```json
"string"
```

<h2 id="tocS_ChecksumCRC32C">ChecksumCRC32C</h2>
<!-- backwards compatibility -->
<a id="schemachecksumcrc32c"></a>
<a id="schema_ChecksumCRC32C"></a>
<a id="tocSchecksumcrc32c"></a>
<a id="tocschecksumcrc32c"></a>

```json
"string"
```

<h2 id="tocS_ChecksumSHA1">ChecksumSHA1</h2>
<!-- backwards compatibility -->
<a id="schemachecksumsha1"></a>
<a id="schema_ChecksumSHA1"></a>
<a id="tocSchecksumsha1"></a>
<a id="tocschecksumsha1"></a>

```json
"string"
```

<h2 id="tocS_ChecksumSHA256">ChecksumSHA256</h2>
<!-- backwards compatibility -->
<a id="schemachecksumsha256"></a>
<a id="schema_ChecksumSHA256"></a>
<a id="tocSchecksumsha256"></a>
<a id="tocschecksumsha256"></a>

```json
"string"
```

<h2 id="tocS_Checksum">Checksum</h2>
<!-- backwards compatibility -->
<a id="schemachecksum"></a>
<a id="schema_Checksum"></a>
<a id="tocSchecksum"></a>
<a id="tocschecksum"></a>

```json
{
  "ChecksumCRC32": {},
  "ChecksumCRC32C": {},
  "ChecksumSHA1": {},
  "ChecksumSHA256": {}
}
```

Contains all the possible checksum or digest values for an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChecksumCRC32|object|false|none|none|
|ChecksumCRC32C|object|false|none|none|
|ChecksumSHA1|object|false|none|none|
|ChecksumSHA256|object|false|none|none|

<h2 id="tocS_ChecksumAlgorithm">ChecksumAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemachecksumalgorithm"></a>
<a id="schema_ChecksumAlgorithm"></a>
<a id="tocSchecksumalgorithm"></a>
<a id="tocschecksumalgorithm"></a>

```json
"CRC32"
```

<h2 id="tocS_ChecksumAlgorithmList">ChecksumAlgorithmList</h2>
<!-- backwards compatibility -->
<a id="schemachecksumalgorithmlist"></a>
<a id="schema_ChecksumAlgorithmList"></a>
<a id="tocSchecksumalgorithmlist"></a>
<a id="tocschecksumalgorithmlist"></a>

```json
[
  "CRC32"
]
```

<h2 id="tocS_ChecksumMode">ChecksumMode</h2>
<!-- backwards compatibility -->
<a id="schemachecksummode"></a>
<a id="schema_ChecksumMode"></a>
<a id="tocSchecksummode"></a>
<a id="tocschecksummode"></a>

```json
"ENABLED"
```

<h2 id="tocS_CloudFunction">CloudFunction</h2>
<!-- backwards compatibility -->
<a id="schemacloudfunction"></a>
<a id="schema_CloudFunction"></a>
<a id="tocScloudfunction"></a>
<a id="tocscloudfunction"></a>

```json
"string"
```

<h2 id="tocS_NotificationId">NotificationId</h2>
<!-- backwards compatibility -->
<a id="schemanotificationid"></a>
<a id="schema_NotificationId"></a>
<a id="tocSnotificationid"></a>
<a id="tocsnotificationid"></a>

```json
"string"
```

An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
"s3:ReducedRedundancyLostObject"
```

The bucket event for which to send notifications.

<h2 id="tocS_EventList">EventList</h2>
<!-- backwards compatibility -->
<a id="schemaeventlist"></a>
<a id="schema_EventList"></a>
<a id="tocSeventlist"></a>
<a id="tocseventlist"></a>

```json
[
  "s3:ReducedRedundancyLostObject"
]
```

<h2 id="tocS_CloudFunctionInvocationRole">CloudFunctionInvocationRole</h2>
<!-- backwards compatibility -->
<a id="schemacloudfunctioninvocationrole"></a>
<a id="schema_CloudFunctionInvocationRole"></a>
<a id="tocScloudfunctioninvocationrole"></a>
<a id="tocscloudfunctioninvocationrole"></a>

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

<h2 id="tocS_CommonPrefix">CommonPrefix</h2>
<!-- backwards compatibility -->
<a id="schemacommonprefix"></a>
<a id="schema_CommonPrefix"></a>
<a id="tocScommonprefix"></a>
<a id="tocscommonprefix"></a>

```json
{
  "Prefix": {}
}
```

Container for all (if there are any) keys between Prefix and the next occurrence of the string specified by a delimiter. CommonPrefixes lists keys that act like subdirectories in the directory specified by Prefix. For example, if the prefix is notes/ and the delimiter is a slash (/) as in notes/summer/july, the common prefix is notes/summer/.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|

<h2 id="tocS_CommonPrefixList">CommonPrefixList</h2>
<!-- backwards compatibility -->
<a id="schemacommonprefixlist"></a>
<a id="schema_CommonPrefixList"></a>
<a id="tocScommonprefixlist"></a>
<a id="tocscommonprefixlist"></a>

```json
[
  {
    "Prefix": {}
  }
]
```

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
"string"
```

<h2 id="tocS_Expiration">Expiration</h2>
<!-- backwards compatibility -->
<a id="schemaexpiration"></a>
<a id="schema_Expiration"></a>
<a id="tocSexpiration"></a>
<a id="tocsexpiration"></a>

```json
"string"
```

<h2 id="tocS_ETag">ETag</h2>
<!-- backwards compatibility -->
<a id="schemaetag"></a>
<a id="schema_ETag"></a>
<a id="tocSetag"></a>
<a id="tocsetag"></a>

```json
"string"
```

<h2 id="tocS_ServerSideEncryption">ServerSideEncryption</h2>
<!-- backwards compatibility -->
<a id="schemaserversideencryption"></a>
<a id="schema_ServerSideEncryption"></a>
<a id="tocSserversideencryption"></a>
<a id="tocsserversideencryption"></a>

```json
"AES256"
```

<h2 id="tocS_ObjectVersionId">ObjectVersionId</h2>
<!-- backwards compatibility -->
<a id="schemaobjectversionid"></a>
<a id="schema_ObjectVersionId"></a>
<a id="tocSobjectversionid"></a>
<a id="tocsobjectversionid"></a>

```json
"string"
```

<h2 id="tocS_SSEKMSKeyId">SSEKMSKeyId</h2>
<!-- backwards compatibility -->
<a id="schemassekmskeyid"></a>
<a id="schema_SSEKMSKeyId"></a>
<a id="tocSssekmskeyid"></a>
<a id="tocsssekmskeyid"></a>

```json
"password"
```

<h2 id="tocS_CompletedMultipartUpload">CompletedMultipartUpload</h2>
<!-- backwards compatibility -->
<a id="schemacompletedmultipartupload"></a>
<a id="schema_CompletedMultipartUpload"></a>
<a id="tocScompletedmultipartupload"></a>
<a id="tocscompletedmultipartupload"></a>

```json
{
  "Parts": {}
}
```

The container for the completed multipart upload details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Parts|object|false|none|none|

<h2 id="tocS_SSECustomerAlgorithm">SSECustomerAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemassecustomeralgorithm"></a>
<a id="schema_SSECustomerAlgorithm"></a>
<a id="tocSssecustomeralgorithm"></a>
<a id="tocsssecustomeralgorithm"></a>

```json
"string"
```

<h2 id="tocS_SSECustomerKey">SSECustomerKey</h2>
<!-- backwards compatibility -->
<a id="schemassecustomerkey"></a>
<a id="schema_SSECustomerKey"></a>
<a id="tocSssecustomerkey"></a>
<a id="tocsssecustomerkey"></a>

```json
"password"
```

<h2 id="tocS_SSECustomerKeyMD5">SSECustomerKeyMD5</h2>
<!-- backwards compatibility -->
<a id="schemassecustomerkeymd5"></a>
<a id="schema_SSECustomerKeyMD5"></a>
<a id="tocSssecustomerkeymd5"></a>
<a id="tocsssecustomerkeymd5"></a>

```json
"string"
```

<h2 id="tocS_CompleteMultipartUploadRequest">CompleteMultipartUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompletemultipartuploadrequest"></a>
<a id="schema_CompleteMultipartUploadRequest"></a>
<a id="tocScompletemultipartuploadrequest"></a>
<a id="tocscompletemultipartuploadrequest"></a>

```json
{
  "MultipartUpload": {
    "Parts": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MultipartUpload|object|false|none|none|

<h2 id="tocS_PartNumber">PartNumber</h2>
<!-- backwards compatibility -->
<a id="schemapartnumber"></a>
<a id="schema_PartNumber"></a>
<a id="tocSpartnumber"></a>
<a id="tocspartnumber"></a>

```json
0
```

<h2 id="tocS_CompletedPart">CompletedPart</h2>
<!-- backwards compatibility -->
<a id="schemacompletedpart"></a>
<a id="schema_CompletedPart"></a>
<a id="tocScompletedpart"></a>
<a id="tocscompletedpart"></a>

```json
{
  "ETag": {},
  "ChecksumCRC32": {},
  "ChecksumCRC32C": {},
  "ChecksumSHA1": {},
  "ChecksumSHA256": {},
  "PartNumber": {}
}
```

Details of the parts that were uploaded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ETag|object|false|none|none|
|ChecksumCRC32|object|false|none|none|
|ChecksumCRC32C|object|false|none|none|
|ChecksumSHA1|object|false|none|none|
|ChecksumSHA256|object|false|none|none|
|PartNumber|object|false|none|none|

<h2 id="tocS_HttpErrorCodeReturnedEquals">HttpErrorCodeReturnedEquals</h2>
<!-- backwards compatibility -->
<a id="schemahttperrorcodereturnedequals"></a>
<a id="schema_HttpErrorCodeReturnedEquals"></a>
<a id="tocShttperrorcodereturnedequals"></a>
<a id="tocshttperrorcodereturnedequals"></a>

```json
"string"
```

<h2 id="tocS_KeyPrefixEquals">KeyPrefixEquals</h2>
<!-- backwards compatibility -->
<a id="schemakeyprefixequals"></a>
<a id="schema_KeyPrefixEquals"></a>
<a id="tocSkeyprefixequals"></a>
<a id="tocskeyprefixequals"></a>

```json
"string"
```

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "HttpErrorCodeReturnedEquals": {},
  "KeyPrefixEquals": {}
}
```

A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HttpErrorCodeReturnedEquals|object|false|none|none|
|KeyPrefixEquals|object|false|none|none|

<h2 id="tocS_ConfirmRemoveSelfBucketAccess">ConfirmRemoveSelfBucketAccess</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmremoveselfbucketaccess"></a>
<a id="schema_ConfirmRemoveSelfBucketAccess"></a>
<a id="tocSconfirmremoveselfbucketaccess"></a>
<a id="tocsconfirmremoveselfbucketaccess"></a>

```json
true
```

<h2 id="tocS_ContentDisposition">ContentDisposition</h2>
<!-- backwards compatibility -->
<a id="schemacontentdisposition"></a>
<a id="schema_ContentDisposition"></a>
<a id="tocScontentdisposition"></a>
<a id="tocscontentdisposition"></a>

```json
"string"
```

<h2 id="tocS_ContentEncoding">ContentEncoding</h2>
<!-- backwards compatibility -->
<a id="schemacontentencoding"></a>
<a id="schema_ContentEncoding"></a>
<a id="tocScontentencoding"></a>
<a id="tocscontentencoding"></a>

```json
"string"
```

<h2 id="tocS_ContentLanguage">ContentLanguage</h2>
<!-- backwards compatibility -->
<a id="schemacontentlanguage"></a>
<a id="schema_ContentLanguage"></a>
<a id="tocScontentlanguage"></a>
<a id="tocscontentlanguage"></a>

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

<h2 id="tocS_ContentMD5">ContentMD5</h2>
<!-- backwards compatibility -->
<a id="schemacontentmd5"></a>
<a id="schema_ContentMD5"></a>
<a id="tocScontentmd5"></a>
<a id="tocscontentmd5"></a>

```json
"string"
```

<h2 id="tocS_ContentRange">ContentRange</h2>
<!-- backwards compatibility -->
<a id="schemacontentrange"></a>
<a id="schema_ContentRange"></a>
<a id="tocScontentrange"></a>
<a id="tocscontentrange"></a>

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
"string"
```

<h2 id="tocS_ContinuationEvent">ContinuationEvent</h2>
<!-- backwards compatibility -->
<a id="schemacontinuationevent"></a>
<a id="schema_ContinuationEvent"></a>
<a id="tocScontinuationevent"></a>
<a id="tocscontinuationevent"></a>

```json
{}
```

<p/>

<h2 id="tocS_CopyObjectResult">CopyObjectResult</h2>
<!-- backwards compatibility -->
<a id="schemacopyobjectresult"></a>
<a id="schema_CopyObjectResult"></a>
<a id="tocScopyobjectresult"></a>
<a id="tocscopyobjectresult"></a>

```json
{
  "ETag": {},
  "LastModified": {},
  "ChecksumCRC32": {},
  "ChecksumCRC32C": {},
  "ChecksumSHA1": {},
  "ChecksumSHA256": {}
}
```

Container for all response elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ETag|object|false|none|none|
|LastModified|object|false|none|none|
|ChecksumCRC32|object|false|none|none|
|ChecksumCRC32C|object|false|none|none|
|ChecksumSHA1|object|false|none|none|
|ChecksumSHA256|object|false|none|none|

<h2 id="tocS_CopySourceVersionId">CopySourceVersionId</h2>
<!-- backwards compatibility -->
<a id="schemacopysourceversionid"></a>
<a id="schema_CopySourceVersionId"></a>
<a id="tocScopysourceversionid"></a>
<a id="tocscopysourceversionid"></a>

```json
"string"
```

<h2 id="tocS_SSEKMSEncryptionContext">SSEKMSEncryptionContext</h2>
<!-- backwards compatibility -->
<a id="schemassekmsencryptioncontext"></a>
<a id="schema_SSEKMSEncryptionContext"></a>
<a id="tocSssekmsencryptioncontext"></a>
<a id="tocsssekmsencryptioncontext"></a>

```json
"password"
```

<h2 id="tocS_ObjectCannedACL">ObjectCannedACL</h2>
<!-- backwards compatibility -->
<a id="schemaobjectcannedacl"></a>
<a id="schema_ObjectCannedACL"></a>
<a id="tocSobjectcannedacl"></a>
<a id="tocsobjectcannedacl"></a>

```json
"private"
```

<h2 id="tocS_CopySource">CopySource</h2>
<!-- backwards compatibility -->
<a id="schemacopysource"></a>
<a id="schema_CopySource"></a>
<a id="tocScopysource"></a>
<a id="tocscopysource"></a>

```json
"string"
```

<h2 id="tocS_CopySourceIfMatch">CopySourceIfMatch</h2>
<!-- backwards compatibility -->
<a id="schemacopysourceifmatch"></a>
<a id="schema_CopySourceIfMatch"></a>
<a id="tocScopysourceifmatch"></a>
<a id="tocscopysourceifmatch"></a>

```json
"string"
```

<h2 id="tocS_CopySourceIfModifiedSince">CopySourceIfModifiedSince</h2>
<!-- backwards compatibility -->
<a id="schemacopysourceifmodifiedsince"></a>
<a id="schema_CopySourceIfModifiedSince"></a>
<a id="tocScopysourceifmodifiedsince"></a>
<a id="tocscopysourceifmodifiedsince"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CopySourceIfNoneMatch">CopySourceIfNoneMatch</h2>
<!-- backwards compatibility -->
<a id="schemacopysourceifnonematch"></a>
<a id="schema_CopySourceIfNoneMatch"></a>
<a id="tocScopysourceifnonematch"></a>
<a id="tocscopysourceifnonematch"></a>

```json
"string"
```

<h2 id="tocS_CopySourceIfUnmodifiedSince">CopySourceIfUnmodifiedSince</h2>
<!-- backwards compatibility -->
<a id="schemacopysourceifunmodifiedsince"></a>
<a id="schema_CopySourceIfUnmodifiedSince"></a>
<a id="tocScopysourceifunmodifiedsince"></a>
<a id="tocscopysourceifunmodifiedsince"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Expires">Expires</h2>
<!-- backwards compatibility -->
<a id="schemaexpires"></a>
<a id="schema_Expires"></a>
<a id="tocSexpires"></a>
<a id="tocsexpires"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_GrantFullControl">GrantFullControl</h2>
<!-- backwards compatibility -->
<a id="schemagrantfullcontrol"></a>
<a id="schema_GrantFullControl"></a>
<a id="tocSgrantfullcontrol"></a>
<a id="tocsgrantfullcontrol"></a>

```json
"string"
```

<h2 id="tocS_GrantRead">GrantRead</h2>
<!-- backwards compatibility -->
<a id="schemagrantread"></a>
<a id="schema_GrantRead"></a>
<a id="tocSgrantread"></a>
<a id="tocsgrantread"></a>

```json
"string"
```

<h2 id="tocS_GrantReadACP">GrantReadACP</h2>
<!-- backwards compatibility -->
<a id="schemagrantreadacp"></a>
<a id="schema_GrantReadACP"></a>
<a id="tocSgrantreadacp"></a>
<a id="tocsgrantreadacp"></a>

```json
"string"
```

<h2 id="tocS_GrantWriteACP">GrantWriteACP</h2>
<!-- backwards compatibility -->
<a id="schemagrantwriteacp"></a>
<a id="schema_GrantWriteACP"></a>
<a id="tocSgrantwriteacp"></a>
<a id="tocsgrantwriteacp"></a>

```json
"string"
```

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MetadataValue](#schemametadatavalue)|false|none|none|

<h2 id="tocS_MetadataDirective">MetadataDirective</h2>
<!-- backwards compatibility -->
<a id="schemametadatadirective"></a>
<a id="schema_MetadataDirective"></a>
<a id="tocSmetadatadirective"></a>
<a id="tocsmetadatadirective"></a>

```json
"COPY"
```

<h2 id="tocS_TaggingDirective">TaggingDirective</h2>
<!-- backwards compatibility -->
<a id="schemataggingdirective"></a>
<a id="schema_TaggingDirective"></a>
<a id="tocStaggingdirective"></a>
<a id="tocstaggingdirective"></a>

```json
"COPY"
```

<h2 id="tocS_StorageClass">StorageClass</h2>
<!-- backwards compatibility -->
<a id="schemastorageclass"></a>
<a id="schema_StorageClass"></a>
<a id="tocSstorageclass"></a>
<a id="tocsstorageclass"></a>

```json
"STANDARD"
```

<h2 id="tocS_WebsiteRedirectLocation">WebsiteRedirectLocation</h2>
<!-- backwards compatibility -->
<a id="schemawebsiteredirectlocation"></a>
<a id="schema_WebsiteRedirectLocation"></a>
<a id="tocSwebsiteredirectlocation"></a>
<a id="tocswebsiteredirectlocation"></a>

```json
"string"
```

<h2 id="tocS_CopySourceSSECustomerAlgorithm">CopySourceSSECustomerAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemacopysourcessecustomeralgorithm"></a>
<a id="schema_CopySourceSSECustomerAlgorithm"></a>
<a id="tocScopysourcessecustomeralgorithm"></a>
<a id="tocscopysourcessecustomeralgorithm"></a>

```json
"string"
```

<h2 id="tocS_CopySourceSSECustomerKey">CopySourceSSECustomerKey</h2>
<!-- backwards compatibility -->
<a id="schemacopysourcessecustomerkey"></a>
<a id="schema_CopySourceSSECustomerKey"></a>
<a id="tocScopysourcessecustomerkey"></a>
<a id="tocscopysourcessecustomerkey"></a>

```json
"password"
```

<h2 id="tocS_CopySourceSSECustomerKeyMD5">CopySourceSSECustomerKeyMD5</h2>
<!-- backwards compatibility -->
<a id="schemacopysourcessecustomerkeymd5"></a>
<a id="schema_CopySourceSSECustomerKeyMD5"></a>
<a id="tocScopysourcessecustomerkeymd5"></a>
<a id="tocscopysourcessecustomerkeymd5"></a>

```json
"string"
```

<h2 id="tocS_TaggingHeader">TaggingHeader</h2>
<!-- backwards compatibility -->
<a id="schemataggingheader"></a>
<a id="schema_TaggingHeader"></a>
<a id="tocStaggingheader"></a>
<a id="tocstaggingheader"></a>

```json
"string"
```

<h2 id="tocS_ObjectLockMode">ObjectLockMode</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlockmode"></a>
<a id="schema_ObjectLockMode"></a>
<a id="tocSobjectlockmode"></a>
<a id="tocsobjectlockmode"></a>

```json
"GOVERNANCE"
```

<h2 id="tocS_ObjectLockRetainUntilDate">ObjectLockRetainUntilDate</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlockretainuntildate"></a>
<a id="schema_ObjectLockRetainUntilDate"></a>
<a id="tocSobjectlockretainuntildate"></a>
<a id="tocsobjectlockretainuntildate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CopyObjectRequest">CopyObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacopyobjectrequest"></a>
<a id="schema_CopyObjectRequest"></a>
<a id="tocScopyobjectrequest"></a>
<a id="tocscopyobjectrequest"></a>

```json
{
  "Metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|false|none|none|

<h2 id="tocS_LastModified">LastModified</h2>
<!-- backwards compatibility -->
<a id="schemalastmodified"></a>
<a id="schema_LastModified"></a>
<a id="tocSlastmodified"></a>
<a id="tocslastmodified"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CopyPartResult">CopyPartResult</h2>
<!-- backwards compatibility -->
<a id="schemacopypartresult"></a>
<a id="schema_CopyPartResult"></a>
<a id="tocScopypartresult"></a>
<a id="tocscopypartresult"></a>

```json
{
  "ETag": {},
  "LastModified": {},
  "ChecksumCRC32": {},
  "ChecksumCRC32C": {},
  "ChecksumSHA1": {},
  "ChecksumSHA256": {}
}
```

Container for all response elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ETag|object|false|none|none|
|LastModified|object|false|none|none|
|ChecksumCRC32|object|false|none|none|
|ChecksumCRC32C|object|false|none|none|
|ChecksumSHA1|object|false|none|none|
|ChecksumSHA256|object|false|none|none|

<h2 id="tocS_CopySourceRange">CopySourceRange</h2>
<!-- backwards compatibility -->
<a id="schemacopysourcerange"></a>
<a id="schema_CopySourceRange"></a>
<a id="tocScopysourcerange"></a>
<a id="tocscopysourcerange"></a>

```json
"string"
```

<h2 id="tocS_CreateBucketConfiguration">CreateBucketConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacreatebucketconfiguration"></a>
<a id="schema_CreateBucketConfiguration"></a>
<a id="tocScreatebucketconfiguration"></a>
<a id="tocscreatebucketconfiguration"></a>

```json
{
  "LocationConstraint": {}
}
```

The configuration information for the bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationConstraint|object|false|none|none|

<h2 id="tocS_GrantWrite">GrantWrite</h2>
<!-- backwards compatibility -->
<a id="schemagrantwrite"></a>
<a id="schema_GrantWrite"></a>
<a id="tocSgrantwrite"></a>
<a id="tocsgrantwrite"></a>

```json
"string"
```

<h2 id="tocS_ObjectLockEnabledForBucket">ObjectLockEnabledForBucket</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlockenabledforbucket"></a>
<a id="schema_ObjectLockEnabledForBucket"></a>
<a id="tocSobjectlockenabledforbucket"></a>
<a id="tocsobjectlockenabledforbucket"></a>

```json
true
```

<h2 id="tocS_ObjectOwnership">ObjectOwnership</h2>
<!-- backwards compatibility -->
<a id="schemaobjectownership"></a>
<a id="schema_ObjectOwnership"></a>
<a id="tocSobjectownership"></a>
<a id="tocsobjectownership"></a>

```json
"BucketOwnerPreferred"
```

<p>The container element for object ownership for a bucket's ownership controls.</p> <p>BucketOwnerPreferred - Objects uploaded to the bucket change ownership to the bucket owner if the objects are uploaded with the <code>bucket-owner-full-control</code> canned ACL.</p> <p>ObjectWriter - The uploading account will own the object if the object is uploaded with the <code>bucket-owner-full-control</code> canned ACL.</p> <p>BucketOwnerEnforced - Access control lists (ACLs) are disabled and no longer affect permissions. The bucket owner automatically owns and has full control over every object in the bucket. The bucket only accepts PUT requests that don't specify an ACL or bucket owner full control ACLs, such as the <code>bucket-owner-full-control</code> canned ACL or an equivalent form of this ACL expressed in the XML format.</p>

<h2 id="tocS_CreateBucketRequest">CreateBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebucketrequest"></a>
<a id="schema_CreateBucketRequest"></a>
<a id="tocScreatebucketrequest"></a>
<a id="tocscreatebucketrequest"></a>

```json
{
  "CreateBucketConfiguration": {
    "LocationConstraint": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateBucketConfiguration|object|false|none|none|

<h2 id="tocS_CreateMultipartUploadRequest">CreateMultipartUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemultipartuploadrequest"></a>
<a id="schema_CreateMultipartUploadRequest"></a>
<a id="tocScreatemultipartuploadrequest"></a>
<a id="tocscreatemultipartuploadrequest"></a>

```json
{
  "Metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|false|none|none|

<h2 id="tocS_Years">Years</h2>
<!-- backwards compatibility -->
<a id="schemayears"></a>
<a id="schema_Years"></a>
<a id="tocSyears"></a>
<a id="tocsyears"></a>

```json
0
```

<h2 id="tocS_DefaultRetention">DefaultRetention</h2>
<!-- backwards compatibility -->
<a id="schemadefaultretention"></a>
<a id="schema_DefaultRetention"></a>
<a id="tocSdefaultretention"></a>
<a id="tocsdefaultretention"></a>

```json
{
  "Mode": {},
  "Days": {},
  "Years": {}
}
```

<p>The container element for specifying the default Object Lock retention settings for new objects placed in the specified bucket.</p> <note> <ul> <li> <p>The <code>DefaultRetention</code> settings require both a mode and a period.</p> </li> <li> <p>The <code>DefaultRetention</code> period can be either <code>Days</code> or <code>Years</code> but you must select one. You cannot specify <code>Days</code> and <code>Years</code> at the same time.</p> </li> </ul> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mode|object|false|none|none|
|Days|object|false|none|none|
|Years|object|false|none|none|

<h2 id="tocS_Delete">Delete</h2>
<!-- backwards compatibility -->
<a id="schemadelete"></a>
<a id="schema_Delete"></a>
<a id="tocSdelete"></a>
<a id="tocsdelete"></a>

```json
{
  "Objects": {},
  "Quiet": {}
}
```

Container for the objects to delete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Objects|object|true|none|none|
|Quiet|object|false|none|none|

<h2 id="tocS_DeleteBucketAnalyticsConfigurationRequest">DeleteBucketAnalyticsConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketanalyticsconfigurationrequest"></a>
<a id="schema_DeleteBucketAnalyticsConfigurationRequest"></a>
<a id="tocSdeletebucketanalyticsconfigurationrequest"></a>
<a id="tocsdeletebucketanalyticsconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketCorsRequest">DeleteBucketCorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketcorsrequest"></a>
<a id="schema_DeleteBucketCorsRequest"></a>
<a id="tocSdeletebucketcorsrequest"></a>
<a id="tocsdeletebucketcorsrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketEncryptionRequest">DeleteBucketEncryptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketencryptionrequest"></a>
<a id="schema_DeleteBucketEncryptionRequest"></a>
<a id="tocSdeletebucketencryptionrequest"></a>
<a id="tocsdeletebucketencryptionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketIntelligentTieringConfigurationRequest">DeleteBucketIntelligentTieringConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketintelligenttieringconfigurationrequest"></a>
<a id="schema_DeleteBucketIntelligentTieringConfigurationRequest"></a>
<a id="tocSdeletebucketintelligenttieringconfigurationrequest"></a>
<a id="tocsdeletebucketintelligenttieringconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketInventoryConfigurationRequest">DeleteBucketInventoryConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketinventoryconfigurationrequest"></a>
<a id="schema_DeleteBucketInventoryConfigurationRequest"></a>
<a id="tocSdeletebucketinventoryconfigurationrequest"></a>
<a id="tocsdeletebucketinventoryconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketLifecycleRequest">DeleteBucketLifecycleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketlifecyclerequest"></a>
<a id="schema_DeleteBucketLifecycleRequest"></a>
<a id="tocSdeletebucketlifecyclerequest"></a>
<a id="tocsdeletebucketlifecyclerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketMetricsConfigurationRequest">DeleteBucketMetricsConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketmetricsconfigurationrequest"></a>
<a id="schema_DeleteBucketMetricsConfigurationRequest"></a>
<a id="tocSdeletebucketmetricsconfigurationrequest"></a>
<a id="tocsdeletebucketmetricsconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketOwnershipControlsRequest">DeleteBucketOwnershipControlsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketownershipcontrolsrequest"></a>
<a id="schema_DeleteBucketOwnershipControlsRequest"></a>
<a id="tocSdeletebucketownershipcontrolsrequest"></a>
<a id="tocsdeletebucketownershipcontrolsrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketPolicyRequest">DeleteBucketPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketpolicyrequest"></a>
<a id="schema_DeleteBucketPolicyRequest"></a>
<a id="tocSdeletebucketpolicyrequest"></a>
<a id="tocsdeletebucketpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketReplicationRequest">DeleteBucketReplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketreplicationrequest"></a>
<a id="schema_DeleteBucketReplicationRequest"></a>
<a id="tocSdeletebucketreplicationrequest"></a>
<a id="tocsdeletebucketreplicationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketRequest">DeleteBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketrequest"></a>
<a id="schema_DeleteBucketRequest"></a>
<a id="tocSdeletebucketrequest"></a>
<a id="tocsdeletebucketrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketTaggingRequest">DeleteBucketTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebuckettaggingrequest"></a>
<a id="schema_DeleteBucketTaggingRequest"></a>
<a id="tocSdeletebuckettaggingrequest"></a>
<a id="tocsdeletebuckettaggingrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketWebsiteRequest">DeleteBucketWebsiteRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketwebsiterequest"></a>
<a id="schema_DeleteBucketWebsiteRequest"></a>
<a id="tocSdeletebucketwebsiterequest"></a>
<a id="tocsdeletebucketwebsiterequest"></a>

```json
{}
```

<h2 id="tocS_DeleteMarker">DeleteMarker</h2>
<!-- backwards compatibility -->
<a id="schemadeletemarker"></a>
<a id="schema_DeleteMarker"></a>
<a id="tocSdeletemarker"></a>
<a id="tocsdeletemarker"></a>

```json
true
```

<h2 id="tocS_IsLatest">IsLatest</h2>
<!-- backwards compatibility -->
<a id="schemaislatest"></a>
<a id="schema_IsLatest"></a>
<a id="tocSislatest"></a>
<a id="tocsislatest"></a>

```json
true
```

<h2 id="tocS_DeleteMarkerEntry">DeleteMarkerEntry</h2>
<!-- backwards compatibility -->
<a id="schemadeletemarkerentry"></a>
<a id="schema_DeleteMarkerEntry"></a>
<a id="tocSdeletemarkerentry"></a>
<a id="tocsdeletemarkerentry"></a>

```json
{
  "Owner": {
    "DisplayName": {},
    "ID": {}
  },
  "Key": {},
  "VersionId": {},
  "IsLatest": {},
  "LastModified": {}
}
```

Information about the delete marker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Owner|object|false|none|none|
|Key|object|false|none|none|
|VersionId|object|false|none|none|
|IsLatest|object|false|none|none|
|LastModified|object|false|none|none|

<h2 id="tocS_DeleteMarkerReplicationStatus">DeleteMarkerReplicationStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeletemarkerreplicationstatus"></a>
<a id="schema_DeleteMarkerReplicationStatus"></a>
<a id="tocSdeletemarkerreplicationstatus"></a>
<a id="tocsdeletemarkerreplicationstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_DeleteMarkerReplication">DeleteMarkerReplication</h2>
<!-- backwards compatibility -->
<a id="schemadeletemarkerreplication"></a>
<a id="schema_DeleteMarkerReplication"></a>
<a id="tocSdeletemarkerreplication"></a>
<a id="tocsdeletemarkerreplication"></a>

```json
{
  "Status": {}
}
```

<p>Specifies whether Amazon S3 replicates delete markers. If you specify a <code>Filter</code> in your replication configuration, you must also include a <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a <code>Tag</code> element, the <code>DeleteMarkerReplication</code> <code>Status</code> must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>. </p> <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html">Basic Rule Configuration</a>. </p> <note> <p>If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_DeleteMarkerVersionId">DeleteMarkerVersionId</h2>
<!-- backwards compatibility -->
<a id="schemadeletemarkerversionid"></a>
<a id="schema_DeleteMarkerVersionId"></a>
<a id="tocSdeletemarkerversionid"></a>
<a id="tocsdeletemarkerversionid"></a>

```json
"string"
```

<h2 id="tocS_DeleteMarkers">DeleteMarkers</h2>
<!-- backwards compatibility -->
<a id="schemadeletemarkers"></a>
<a id="schema_DeleteMarkers"></a>
<a id="tocSdeletemarkers"></a>
<a id="tocsdeletemarkers"></a>

```json
[
  {
    "Owner": {
      "DisplayName": {},
      "ID": {}
    },
    "Key": {},
    "VersionId": {},
    "IsLatest": {},
    "LastModified": {}
  }
]
```

<h2 id="tocS_MFA">MFA</h2>
<!-- backwards compatibility -->
<a id="schemamfa"></a>
<a id="schema_MFA"></a>
<a id="tocSmfa"></a>
<a id="tocsmfa"></a>

```json
"string"
```

<h2 id="tocS_DeleteObjectRequest">DeleteObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobjectrequest"></a>
<a id="schema_DeleteObjectRequest"></a>
<a id="tocSdeleteobjectrequest"></a>
<a id="tocsdeleteobjectrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteObjectTaggingRequest">DeleteObjectTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobjecttaggingrequest"></a>
<a id="schema_DeleteObjectTaggingRequest"></a>
<a id="tocSdeleteobjecttaggingrequest"></a>
<a id="tocsdeleteobjecttaggingrequest"></a>

```json
{}
```

<h2 id="tocS_DeletedObjects">DeletedObjects</h2>
<!-- backwards compatibility -->
<a id="schemadeletedobjects"></a>
<a id="schema_DeletedObjects"></a>
<a id="tocSdeletedobjects"></a>
<a id="tocsdeletedobjects"></a>

```json
[
  {
    "Key": {},
    "VersionId": {},
    "DeleteMarker": {},
    "DeleteMarkerVersionId": {}
  }
]
```

<h2 id="tocS_Errors">Errors</h2>
<!-- backwards compatibility -->
<a id="schemaerrors"></a>
<a id="schema_Errors"></a>
<a id="tocSerrors"></a>
<a id="tocserrors"></a>

```json
[
  {
    "Key": {},
    "VersionId": {},
    "Code": {},
    "Message": {}
  }
]
```

<h2 id="tocS_DeleteObjectsRequest">DeleteObjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobjectsrequest"></a>
<a id="schema_DeleteObjectsRequest"></a>
<a id="tocSdeleteobjectsrequest"></a>
<a id="tocsdeleteobjectsrequest"></a>

```json
{
  "Delete": {
    "Objects": {},
    "Quiet": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Delete|object|true|none|none|

<h2 id="tocS_DeletePublicAccessBlockRequest">DeletePublicAccessBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepublicaccessblockrequest"></a>
<a id="schema_DeletePublicAccessBlockRequest"></a>
<a id="tocSdeletepublicaccessblockrequest"></a>
<a id="tocsdeletepublicaccessblockrequest"></a>

```json
{}
```

<h2 id="tocS_DeletedObject">DeletedObject</h2>
<!-- backwards compatibility -->
<a id="schemadeletedobject"></a>
<a id="schema_DeletedObject"></a>
<a id="tocSdeletedobject"></a>
<a id="tocsdeletedobject"></a>

```json
{
  "Key": {},
  "VersionId": {},
  "DeleteMarker": {},
  "DeleteMarkerVersionId": {}
}
```

Information about the deleted object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|VersionId|object|false|none|none|
|DeleteMarker|object|false|none|none|
|DeleteMarkerVersionId|object|false|none|none|

<h2 id="tocS_Delimiter">Delimiter</h2>
<!-- backwards compatibility -->
<a id="schemadelimiter"></a>
<a id="schema_Delimiter"></a>
<a id="tocSdelimiter"></a>
<a id="tocsdelimiter"></a>

```json
"string"
```

<h2 id="tocS_EncryptionConfiguration">EncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfiguration"></a>
<a id="schema_EncryptionConfiguration"></a>
<a id="tocSencryptionconfiguration"></a>
<a id="tocsencryptionconfiguration"></a>

```json
{
  "ReplicaKmsKeyID": {}
}
```

Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicaKmsKeyID|object|false|none|none|

<h2 id="tocS_ReplicationTime">ReplicationTime</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtime"></a>
<a id="schema_ReplicationTime"></a>
<a id="tocSreplicationtime"></a>
<a id="tocsreplicationtime"></a>

```json
{
  "Status": {},
  "Time": {
    "Minutes": {}
  }
}
```

 A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a <code>Metrics</code> block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|Time|object|true|none|none|

<h2 id="tocS_Metrics">Metrics</h2>
<!-- backwards compatibility -->
<a id="schemametrics"></a>
<a id="schema_Metrics"></a>
<a id="tocSmetrics"></a>
<a id="tocsmetrics"></a>

```json
{
  "Status": {},
  "EventThreshold": {
    "Minutes": {}
  }
}
```

 A container specifying replication metrics-related settings enabling replication metrics and events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|EventThreshold|object|false|none|none|

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "Bucket": {},
  "Account": {},
  "StorageClass": {},
  "AccessControlTranslation": {
    "Owner": {}
  },
  "EncryptionConfiguration": {
    "ReplicaKmsKeyID": {}
  },
  "ReplicationTime": {
    "Status": {},
    "Time": {
      "Minutes": {}
    }
  },
  "Metrics": {
    "Status": {},
    "EventThreshold": {
      "Minutes": {}
    }
  }
}
```

Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket and S3 Replication Time Control (S3 RTC).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|Account|object|false|none|none|
|StorageClass|object|false|none|none|
|AccessControlTranslation|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|ReplicationTime|object|false|none|none|
|Metrics|object|false|none|none|

<h2 id="tocS_DisplayName">DisplayName</h2>
<!-- backwards compatibility -->
<a id="schemadisplayname"></a>
<a id="schema_DisplayName"></a>
<a id="tocSdisplayname"></a>
<a id="tocsdisplayname"></a>

```json
"string"
```

<h2 id="tocS_EmailAddress">EmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddress"></a>
<a id="schema_EmailAddress"></a>
<a id="tocSemailaddress"></a>
<a id="tocsemailaddress"></a>

```json
"string"
```

<h2 id="tocS_EncodingType">EncodingType</h2>
<!-- backwards compatibility -->
<a id="schemaencodingtype"></a>
<a id="schema_EncodingType"></a>
<a id="tocSencodingtype"></a>
<a id="tocsencodingtype"></a>

```json
"url"
```

Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key can contain any Unicode character; however, the XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response.

<h2 id="tocS_KMSContext">KMSContext</h2>
<!-- backwards compatibility -->
<a id="schemakmscontext"></a>
<a id="schema_KMSContext"></a>
<a id="tocSkmscontext"></a>
<a id="tocskmscontext"></a>

```json
"string"
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

Contains the type of server-side encryption used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionType|object|true|none|none|
|KMSKeyId|object|false|none|none|
|KMSContext|object|false|none|none|

<h2 id="tocS_ReplicaKmsKeyID">ReplicaKmsKeyID</h2>
<!-- backwards compatibility -->
<a id="schemareplicakmskeyid"></a>
<a id="schema_ReplicaKmsKeyID"></a>
<a id="tocSreplicakmskeyid"></a>
<a id="tocsreplicakmskeyid"></a>

```json
"string"
```

<h2 id="tocS_EndEvent">EndEvent</h2>
<!-- backwards compatibility -->
<a id="schemaendevent"></a>
<a id="schema_EndEvent"></a>
<a id="tocSendevent"></a>
<a id="tocsendevent"></a>

```json
{}
```

A message that indicates the request is complete and no more messages will be sent. You should not assume that the request is complete until the client receives an <code>EndEvent</code>.

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "Key": {},
  "VersionId": {},
  "Code": {},
  "Message": {}
}
```

Container for all error elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|VersionId|object|false|none|none|
|Code|object|false|none|none|
|Message|object|false|none|none|

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

<h2 id="tocS_ExistingObjectReplicationStatus">ExistingObjectReplicationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexistingobjectreplicationstatus"></a>
<a id="schema_ExistingObjectReplicationStatus"></a>
<a id="tocSexistingobjectreplicationstatus"></a>
<a id="tocsexistingobjectreplicationstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_ExistingObjectReplication">ExistingObjectReplication</h2>
<!-- backwards compatibility -->
<a id="schemaexistingobjectreplication"></a>
<a id="schema_ExistingObjectReplication"></a>
<a id="tocSexistingobjectreplication"></a>
<a id="tocsexistingobjectreplication"></a>

```json
{
  "Status": {}
}
```

Optional configuration to replicate existing source bucket objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-what-is-isnot-replicated.html#existing-object-replication">Replicating Existing Objects</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_ExpirationStatus">ExpirationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexpirationstatus"></a>
<a id="schema_ExpirationStatus"></a>
<a id="tocSexpirationstatus"></a>
<a id="tocsexpirationstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_ExpiredObjectDeleteMarker">ExpiredObjectDeleteMarker</h2>
<!-- backwards compatibility -->
<a id="schemaexpiredobjectdeletemarker"></a>
<a id="schema_ExpiredObjectDeleteMarker"></a>
<a id="tocSexpiredobjectdeletemarker"></a>
<a id="tocsexpiredobjectdeletemarker"></a>

```json
true
```

<h2 id="tocS_ExposeHeader">ExposeHeader</h2>
<!-- backwards compatibility -->
<a id="schemaexposeheader"></a>
<a id="schema_ExposeHeader"></a>
<a id="tocSexposeheader"></a>
<a id="tocsexposeheader"></a>

```json
"string"
```

<h2 id="tocS_Expression">Expression</h2>
<!-- backwards compatibility -->
<a id="schemaexpression"></a>
<a id="schema_Expression"></a>
<a id="tocSexpression"></a>
<a id="tocsexpression"></a>

```json
"string"
```

<h2 id="tocS_ExpressionType">ExpressionType</h2>
<!-- backwards compatibility -->
<a id="schemaexpressiontype"></a>
<a id="schema_ExpressionType"></a>
<a id="tocSexpressiontype"></a>
<a id="tocsexpressiontype"></a>

```json
"SQL"
```

<h2 id="tocS_FetchOwner">FetchOwner</h2>
<!-- backwards compatibility -->
<a id="schemafetchowner"></a>
<a id="schema_FetchOwner"></a>
<a id="tocSfetchowner"></a>
<a id="tocsfetchowner"></a>

```json
true
```

<h2 id="tocS_FilterRuleName">FilterRuleName</h2>
<!-- backwards compatibility -->
<a id="schemafilterrulename"></a>
<a id="schema_FilterRuleName"></a>
<a id="tocSfilterrulename"></a>
<a id="tocsfilterrulename"></a>

```json
"prefix"
```

<h2 id="tocS_FilterRuleValue">FilterRuleValue</h2>
<!-- backwards compatibility -->
<a id="schemafilterrulevalue"></a>
<a id="schema_FilterRuleValue"></a>
<a id="tocSfilterrulevalue"></a>
<a id="tocsfilterrulevalue"></a>

```json
"string"
```

<h2 id="tocS_FilterRule">FilterRule</h2>
<!-- backwards compatibility -->
<a id="schemafilterrule"></a>
<a id="schema_FilterRule"></a>
<a id="tocSfilterrule"></a>
<a id="tocsfilterrule"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Specifies the Amazon S3 object key name to filter on and whether to filter on the suffix or prefix of the key name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_FilterRuleList">FilterRuleList</h2>
<!-- backwards compatibility -->
<a id="schemafilterrulelist"></a>
<a id="schema_FilterRuleList"></a>
<a id="tocSfilterrulelist"></a>
<a id="tocsfilterrulelist"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

A list of containers for the key-value pair that defines the criteria for the filter rule.

<h2 id="tocS_GetBucketAccelerateConfigurationRequest">GetBucketAccelerateConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketaccelerateconfigurationrequest"></a>
<a id="schema_GetBucketAccelerateConfigurationRequest"></a>
<a id="tocSgetbucketaccelerateconfigurationrequest"></a>
<a id="tocsgetbucketaccelerateconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketAclRequest">GetBucketAclRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketaclrequest"></a>
<a id="schema_GetBucketAclRequest"></a>
<a id="tocSgetbucketaclrequest"></a>
<a id="tocsgetbucketaclrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketAnalyticsConfigurationRequest">GetBucketAnalyticsConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketanalyticsconfigurationrequest"></a>
<a id="schema_GetBucketAnalyticsConfigurationRequest"></a>
<a id="tocSgetbucketanalyticsconfigurationrequest"></a>
<a id="tocsgetbucketanalyticsconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketCorsRequest">GetBucketCorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketcorsrequest"></a>
<a id="schema_GetBucketCorsRequest"></a>
<a id="tocSgetbucketcorsrequest"></a>
<a id="tocsgetbucketcorsrequest"></a>

```json
{}
```

<h2 id="tocS_ServerSideEncryptionConfiguration">ServerSideEncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaserversideencryptionconfiguration"></a>
<a id="schema_ServerSideEncryptionConfiguration"></a>
<a id="tocSserversideencryptionconfiguration"></a>
<a id="tocsserversideencryptionconfiguration"></a>

```json
{
  "Rules": {}
}
```

Specifies the default server-side-encryption configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|true|none|none|

<h2 id="tocS_GetBucketEncryptionRequest">GetBucketEncryptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketencryptionrequest"></a>
<a id="schema_GetBucketEncryptionRequest"></a>
<a id="tocSgetbucketencryptionrequest"></a>
<a id="tocsgetbucketencryptionrequest"></a>

```json
{}
```

<h2 id="tocS_IntelligentTieringConfiguration">IntelligentTieringConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaintelligenttieringconfiguration"></a>
<a id="schema_IntelligentTieringConfiguration"></a>
<a id="tocSintelligenttieringconfiguration"></a>
<a id="tocsintelligenttieringconfiguration"></a>

```json
{
  "Id": {},
  "Filter": {
    "Prefix": {},
    "Tag": {
      "Key": {},
      "Value": {}
    },
    "And": {
      "Prefix": {},
      "Tags": {}
    }
  },
  "Status": {},
  "Tierings": {}
}
```

<p>Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.</p> <p>For information about the S3 Intelligent-Tiering storage class, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Filter|object|false|none|none|
|Status|object|true|none|none|
|Tierings|object|true|none|none|

<h2 id="tocS_GetBucketIntelligentTieringConfigurationRequest">GetBucketIntelligentTieringConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketintelligenttieringconfigurationrequest"></a>
<a id="schema_GetBucketIntelligentTieringConfigurationRequest"></a>
<a id="tocSgetbucketintelligenttieringconfigurationrequest"></a>
<a id="tocsgetbucketintelligenttieringconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_InventoryConfiguration">InventoryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainventoryconfiguration"></a>
<a id="schema_InventoryConfiguration"></a>
<a id="tocSinventoryconfiguration"></a>
<a id="tocsinventoryconfiguration"></a>

```json
{
  "Destination": {
    "S3BucketDestination": {
      "AccountId": {},
      "Bucket": {},
      "Format": {},
      "Prefix": {},
      "Encryption": {
        "SSES3": {},
        "SSEKMS": {
          "KeyId": {}
        }
      }
    }
  },
  "IsEnabled": {},
  "Filter": {
    "Prefix": {}
  },
  "Id": {},
  "IncludedObjectVersions": {},
  "OptionalFields": {},
  "Schedule": {
    "Frequency": {}
  }
}
```

Specifies the inventory configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html">GET Bucket inventory</a> in the <i>Amazon S3 API Reference</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destination|object|true|none|none|
|IsEnabled|object|true|none|none|
|Filter|object|false|none|none|
|Id|object|true|none|none|
|IncludedObjectVersions|object|true|none|none|
|OptionalFields|object|false|none|none|
|Schedule|object|true|none|none|

<h2 id="tocS_GetBucketInventoryConfigurationRequest">GetBucketInventoryConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketinventoryconfigurationrequest"></a>
<a id="schema_GetBucketInventoryConfigurationRequest"></a>
<a id="tocSgetbucketinventoryconfigurationrequest"></a>
<a id="tocsgetbucketinventoryconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketLifecycleConfigurationRequest">GetBucketLifecycleConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketlifecycleconfigurationrequest"></a>
<a id="schema_GetBucketLifecycleConfigurationRequest"></a>
<a id="tocSgetbucketlifecycleconfigurationrequest"></a>
<a id="tocsgetbucketlifecycleconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketLifecycleRequest">GetBucketLifecycleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketlifecyclerequest"></a>
<a id="schema_GetBucketLifecycleRequest"></a>
<a id="tocSgetbucketlifecyclerequest"></a>
<a id="tocsgetbucketlifecyclerequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketLocationRequest">GetBucketLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketlocationrequest"></a>
<a id="schema_GetBucketLocationRequest"></a>
<a id="tocSgetbucketlocationrequest"></a>
<a id="tocsgetbucketlocationrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketLoggingRequest">GetBucketLoggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketloggingrequest"></a>
<a id="schema_GetBucketLoggingRequest"></a>
<a id="tocSgetbucketloggingrequest"></a>
<a id="tocsgetbucketloggingrequest"></a>

```json
{}
```

<h2 id="tocS_MetricsConfiguration">MetricsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemametricsconfiguration"></a>
<a id="schema_MetricsConfiguration"></a>
<a id="tocSmetricsconfiguration"></a>
<a id="tocsmetricsconfiguration"></a>

```json
{
  "Id": {},
  "Filter": {
    "Prefix": {},
    "Tag": {
      "Key": {},
      "Value": {}
    },
    "AccessPointArn": {},
    "And": {
      "Prefix": {},
      "Tags": {},
      "AccessPointArn": {}
    }
  }
}
```

Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html">PutBucketMetricsConfiguration</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Filter|object|false|none|none|

<h2 id="tocS_GetBucketMetricsConfigurationRequest">GetBucketMetricsConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketmetricsconfigurationrequest"></a>
<a id="schema_GetBucketMetricsConfigurationRequest"></a>
<a id="tocSgetbucketmetricsconfigurationrequest"></a>
<a id="tocsgetbucketmetricsconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketNotificationConfigurationRequest">GetBucketNotificationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketnotificationconfigurationrequest"></a>
<a id="schema_GetBucketNotificationConfigurationRequest"></a>
<a id="tocSgetbucketnotificationconfigurationrequest"></a>
<a id="tocsgetbucketnotificationconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_OwnershipControls">OwnershipControls</h2>
<!-- backwards compatibility -->
<a id="schemaownershipcontrols"></a>
<a id="schema_OwnershipControls"></a>
<a id="tocSownershipcontrols"></a>
<a id="tocsownershipcontrols"></a>

```json
{
  "Rules": {}
}
```

The container element for a bucket's ownership controls.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|true|none|none|

<h2 id="tocS_GetBucketOwnershipControlsRequest">GetBucketOwnershipControlsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketownershipcontrolsrequest"></a>
<a id="schema_GetBucketOwnershipControlsRequest"></a>
<a id="tocSgetbucketownershipcontrolsrequest"></a>
<a id="tocsgetbucketownershipcontrolsrequest"></a>

```json
{}
```

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
"string"
```

<h2 id="tocS_GetBucketPolicyRequest">GetBucketPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketpolicyrequest"></a>
<a id="schema_GetBucketPolicyRequest"></a>
<a id="tocSgetbucketpolicyrequest"></a>
<a id="tocsgetbucketpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_PolicyStatus">PolicyStatus</h2>
<!-- backwards compatibility -->
<a id="schemapolicystatus"></a>
<a id="schema_PolicyStatus"></a>
<a id="tocSpolicystatus"></a>
<a id="tocspolicystatus"></a>

```json
{
  "IsPublic": {}
}
```

The container element for a bucket's policy status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsPublic|object|false|none|none|

<h2 id="tocS_GetBucketPolicyStatusRequest">GetBucketPolicyStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketpolicystatusrequest"></a>
<a id="schema_GetBucketPolicyStatusRequest"></a>
<a id="tocSgetbucketpolicystatusrequest"></a>
<a id="tocsgetbucketpolicystatusrequest"></a>

```json
{}
```

<h2 id="tocS_ReplicationConfiguration">ReplicationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfiguration"></a>
<a id="schema_ReplicationConfiguration"></a>
<a id="tocSreplicationconfiguration"></a>
<a id="tocsreplicationconfiguration"></a>

```json
{
  "Role": {},
  "Rules": {}
}
```

A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Role|object|true|none|none|
|Rules|object|true|none|none|

<h2 id="tocS_GetBucketReplicationRequest">GetBucketReplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketreplicationrequest"></a>
<a id="schema_GetBucketReplicationRequest"></a>
<a id="tocSgetbucketreplicationrequest"></a>
<a id="tocsgetbucketreplicationrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketRequestPaymentRequest">GetBucketRequestPaymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketrequestpaymentrequest"></a>
<a id="schema_GetBucketRequestPaymentRequest"></a>
<a id="tocSgetbucketrequestpaymentrequest"></a>
<a id="tocsgetbucketrequestpaymentrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketTaggingRequest">GetBucketTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbuckettaggingrequest"></a>
<a id="schema_GetBucketTaggingRequest"></a>
<a id="tocSgetbuckettaggingrequest"></a>
<a id="tocsgetbuckettaggingrequest"></a>

```json
{}
```

<h2 id="tocS_MFADeleteStatus">MFADeleteStatus</h2>
<!-- backwards compatibility -->
<a id="schemamfadeletestatus"></a>
<a id="schema_MFADeleteStatus"></a>
<a id="tocSmfadeletestatus"></a>
<a id="tocsmfadeletestatus"></a>

```json
"Enabled"
```

<h2 id="tocS_GetBucketVersioningRequest">GetBucketVersioningRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketversioningrequest"></a>
<a id="schema_GetBucketVersioningRequest"></a>
<a id="tocSgetbucketversioningrequest"></a>
<a id="tocsgetbucketversioningrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketWebsiteRequest">GetBucketWebsiteRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketwebsiterequest"></a>
<a id="schema_GetBucketWebsiteRequest"></a>
<a id="tocSgetbucketwebsiterequest"></a>
<a id="tocsgetbucketwebsiterequest"></a>

```json
{}
```

<h2 id="tocS_GetObjectAclRequest">GetObjectAclRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectaclrequest"></a>
<a id="schema_GetObjectAclRequest"></a>
<a id="tocSgetobjectaclrequest"></a>
<a id="tocsgetobjectaclrequest"></a>

```json
{}
```

<h2 id="tocS_GetObjectAttributesParts">GetObjectAttributesParts</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectattributesparts"></a>
<a id="schema_GetObjectAttributesParts"></a>
<a id="tocSgetobjectattributesparts"></a>
<a id="tocsgetobjectattributesparts"></a>

```json
{
  "TotalPartsCount": {},
  "PartNumberMarker": {},
  "NextPartNumberMarker": {},
  "MaxParts": {},
  "IsTruncated": {},
  "Parts": {}
}
```

A collection of parts associated with a multipart upload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalPartsCount|object|false|none|none|
|PartNumberMarker|object|false|none|none|
|NextPartNumberMarker|object|false|none|none|
|MaxParts|object|false|none|none|
|IsTruncated|object|false|none|none|
|Parts|object|false|none|none|

<h2 id="tocS_ObjectSize">ObjectSize</h2>
<!-- backwards compatibility -->
<a id="schemaobjectsize"></a>
<a id="schema_ObjectSize"></a>
<a id="tocSobjectsize"></a>
<a id="tocsobjectsize"></a>

```json
0
```

<h2 id="tocS_PartsCount">PartsCount</h2>
<!-- backwards compatibility -->
<a id="schemapartscount"></a>
<a id="schema_PartsCount"></a>
<a id="tocSpartscount"></a>
<a id="tocspartscount"></a>

```json
0
```

<h2 id="tocS_PartNumberMarker">PartNumberMarker</h2>
<!-- backwards compatibility -->
<a id="schemapartnumbermarker"></a>
<a id="schema_PartNumberMarker"></a>
<a id="tocSpartnumbermarker"></a>
<a id="tocspartnumbermarker"></a>

```json
0
```

<h2 id="tocS_NextPartNumberMarker">NextPartNumberMarker</h2>
<!-- backwards compatibility -->
<a id="schemanextpartnumbermarker"></a>
<a id="schema_NextPartNumberMarker"></a>
<a id="tocSnextpartnumbermarker"></a>
<a id="tocsnextpartnumbermarker"></a>

```json
0
```

<h2 id="tocS_MaxParts">MaxParts</h2>
<!-- backwards compatibility -->
<a id="schemamaxparts"></a>
<a id="schema_MaxParts"></a>
<a id="tocSmaxparts"></a>
<a id="tocsmaxparts"></a>

```json
0
```

<h2 id="tocS_IsTruncated">IsTruncated</h2>
<!-- backwards compatibility -->
<a id="schemaistruncated"></a>
<a id="schema_IsTruncated"></a>
<a id="tocSistruncated"></a>
<a id="tocsistruncated"></a>

```json
true
```

<h2 id="tocS_PartsList">PartsList</h2>
<!-- backwards compatibility -->
<a id="schemapartslist"></a>
<a id="schema_PartsList"></a>
<a id="tocSpartslist"></a>
<a id="tocspartslist"></a>

```json
[
  {
    "PartNumber": {},
    "Size": {},
    "ChecksumCRC32": {},
    "ChecksumCRC32C": {},
    "ChecksumSHA1": {},
    "ChecksumSHA256": {}
  }
]
```

<h2 id="tocS_ObjectAttributesList">ObjectAttributesList</h2>
<!-- backwards compatibility -->
<a id="schemaobjectattributeslist"></a>
<a id="schema_ObjectAttributesList"></a>
<a id="tocSobjectattributeslist"></a>
<a id="tocsobjectattributeslist"></a>

```json
[
  "ETag"
]
```

<h2 id="tocS_GetObjectAttributesRequest">GetObjectAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectattributesrequest"></a>
<a id="schema_GetObjectAttributesRequest"></a>
<a id="tocSgetobjectattributesrequest"></a>
<a id="tocsgetobjectattributesrequest"></a>

```json
{}
```

<h2 id="tocS_ObjectLockLegalHold">ObjectLockLegalHold</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlocklegalhold"></a>
<a id="schema_ObjectLockLegalHold"></a>
<a id="tocSobjectlocklegalhold"></a>
<a id="tocsobjectlocklegalhold"></a>

```json
{
  "Status": {}
}
```

A legal hold configuration for an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_GetObjectLegalHoldRequest">GetObjectLegalHoldRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectlegalholdrequest"></a>
<a id="schema_GetObjectLegalHoldRequest"></a>
<a id="tocSgetobjectlegalholdrequest"></a>
<a id="tocsgetobjectlegalholdrequest"></a>

```json
{}
```

<h2 id="tocS_ObjectLockConfiguration">ObjectLockConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlockconfiguration"></a>
<a id="schema_ObjectLockConfiguration"></a>
<a id="tocSobjectlockconfiguration"></a>
<a id="tocsobjectlockconfiguration"></a>

```json
{
  "ObjectLockEnabled": {},
  "Rule": {
    "DefaultRetention": {
      "Mode": {},
      "Days": {},
      "Years": {}
    }
  }
}
```

The container element for Object Lock configuration parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectLockEnabled|object|false|none|none|
|Rule|object|false|none|none|

<h2 id="tocS_GetObjectLockConfigurationRequest">GetObjectLockConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectlockconfigurationrequest"></a>
<a id="schema_GetObjectLockConfigurationRequest"></a>
<a id="tocSgetobjectlockconfigurationrequest"></a>
<a id="tocsgetobjectlockconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_Restore">Restore</h2>
<!-- backwards compatibility -->
<a id="schemarestore"></a>
<a id="schema_Restore"></a>
<a id="tocSrestore"></a>
<a id="tocsrestore"></a>

```json
"string"
```

<h2 id="tocS_MissingMeta">MissingMeta</h2>
<!-- backwards compatibility -->
<a id="schemamissingmeta"></a>
<a id="schema_MissingMeta"></a>
<a id="tocSmissingmeta"></a>
<a id="tocsmissingmeta"></a>

```json
0
```

<h2 id="tocS_ReplicationStatus">ReplicationStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplicationstatus"></a>
<a id="schema_ReplicationStatus"></a>
<a id="tocSreplicationstatus"></a>
<a id="tocsreplicationstatus"></a>

```json
"COMPLETE"
```

<h2 id="tocS_TagCount">TagCount</h2>
<!-- backwards compatibility -->
<a id="schematagcount"></a>
<a id="schema_TagCount"></a>
<a id="tocStagcount"></a>
<a id="tocstagcount"></a>

```json
0
```

<h2 id="tocS_IfMatch">IfMatch</h2>
<!-- backwards compatibility -->
<a id="schemaifmatch"></a>
<a id="schema_IfMatch"></a>
<a id="tocSifmatch"></a>
<a id="tocsifmatch"></a>

```json
"string"
```

<h2 id="tocS_IfModifiedSince">IfModifiedSince</h2>
<!-- backwards compatibility -->
<a id="schemaifmodifiedsince"></a>
<a id="schema_IfModifiedSince"></a>
<a id="tocSifmodifiedsince"></a>
<a id="tocsifmodifiedsince"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_IfNoneMatch">IfNoneMatch</h2>
<!-- backwards compatibility -->
<a id="schemaifnonematch"></a>
<a id="schema_IfNoneMatch"></a>
<a id="tocSifnonematch"></a>
<a id="tocsifnonematch"></a>

```json
"string"
```

<h2 id="tocS_IfUnmodifiedSince">IfUnmodifiedSince</h2>
<!-- backwards compatibility -->
<a id="schemaifunmodifiedsince"></a>
<a id="schema_IfUnmodifiedSince"></a>
<a id="tocSifunmodifiedsince"></a>
<a id="tocsifunmodifiedsince"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Range">Range</h2>
<!-- backwards compatibility -->
<a id="schemarange"></a>
<a id="schema_Range"></a>
<a id="tocSrange"></a>
<a id="tocsrange"></a>

```json
"string"
```

<h2 id="tocS_ResponseCacheControl">ResponseCacheControl</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecachecontrol"></a>
<a id="schema_ResponseCacheControl"></a>
<a id="tocSresponsecachecontrol"></a>
<a id="tocsresponsecachecontrol"></a>

```json
"string"
```

<h2 id="tocS_ResponseContentDisposition">ResponseContentDisposition</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecontentdisposition"></a>
<a id="schema_ResponseContentDisposition"></a>
<a id="tocSresponsecontentdisposition"></a>
<a id="tocsresponsecontentdisposition"></a>

```json
"string"
```

<h2 id="tocS_ResponseContentEncoding">ResponseContentEncoding</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecontentencoding"></a>
<a id="schema_ResponseContentEncoding"></a>
<a id="tocSresponsecontentencoding"></a>
<a id="tocsresponsecontentencoding"></a>

```json
"string"
```

<h2 id="tocS_ResponseContentLanguage">ResponseContentLanguage</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecontentlanguage"></a>
<a id="schema_ResponseContentLanguage"></a>
<a id="tocSresponsecontentlanguage"></a>
<a id="tocsresponsecontentlanguage"></a>

```json
"string"
```

<h2 id="tocS_ResponseContentType">ResponseContentType</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecontenttype"></a>
<a id="schema_ResponseContentType"></a>
<a id="tocSresponsecontenttype"></a>
<a id="tocsresponsecontenttype"></a>

```json
"string"
```

<h2 id="tocS_ResponseExpires">ResponseExpires</h2>
<!-- backwards compatibility -->
<a id="schemaresponseexpires"></a>
<a id="schema_ResponseExpires"></a>
<a id="tocSresponseexpires"></a>
<a id="tocsresponseexpires"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_GetObjectRequest">GetObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectrequest"></a>
<a id="schema_GetObjectRequest"></a>
<a id="tocSgetobjectrequest"></a>
<a id="tocsgetobjectrequest"></a>

```json
{}
```

<h2 id="tocS_GetObjectResponseStatusCode">GetObjectResponseStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectresponsestatuscode"></a>
<a id="schema_GetObjectResponseStatusCode"></a>
<a id="tocSgetobjectresponsestatuscode"></a>
<a id="tocsgetobjectresponsestatuscode"></a>

```json
0
```

<h2 id="tocS_ObjectLockRetention">ObjectLockRetention</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlockretention"></a>
<a id="schema_ObjectLockRetention"></a>
<a id="tocSobjectlockretention"></a>
<a id="tocsobjectlockretention"></a>

```json
{
  "Mode": {},
  "RetainUntilDate": {}
}
```

A Retention configuration for an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mode|object|false|none|none|
|RetainUntilDate|object|false|none|none|

<h2 id="tocS_GetObjectRetentionRequest">GetObjectRetentionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectretentionrequest"></a>
<a id="schema_GetObjectRetentionRequest"></a>
<a id="tocSgetobjectretentionrequest"></a>
<a id="tocsgetobjectretentionrequest"></a>

```json
{}
```

<h2 id="tocS_GetObjectTaggingRequest">GetObjectTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetobjecttaggingrequest"></a>
<a id="schema_GetObjectTaggingRequest"></a>
<a id="tocSgetobjecttaggingrequest"></a>
<a id="tocsgetobjecttaggingrequest"></a>

```json
{}
```

<h2 id="tocS_GetObjectTorrentRequest">GetObjectTorrentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetobjecttorrentrequest"></a>
<a id="schema_GetObjectTorrentRequest"></a>
<a id="tocSgetobjecttorrentrequest"></a>
<a id="tocsgetobjecttorrentrequest"></a>

```json
{}
```

<h2 id="tocS_PublicAccessBlockConfiguration">PublicAccessBlockConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapublicaccessblockconfiguration"></a>
<a id="schema_PublicAccessBlockConfiguration"></a>
<a id="tocSpublicaccessblockconfiguration"></a>
<a id="tocspublicaccessblockconfiguration"></a>

```json
{
  "BlockPublicAcls": {},
  "IgnorePublicAcls": {},
  "BlockPublicPolicy": {},
  "RestrictPublicBuckets": {}
}
```

The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockPublicAcls|object|false|none|none|
|IgnorePublicAcls|object|false|none|none|
|BlockPublicPolicy|object|false|none|none|
|RestrictPublicBuckets|object|false|none|none|

<h2 id="tocS_GetPublicAccessBlockRequest">GetPublicAccessBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpublicaccessblockrequest"></a>
<a id="schema_GetPublicAccessBlockRequest"></a>
<a id="tocSgetpublicaccessblockrequest"></a>
<a id="tocsgetpublicaccessblockrequest"></a>

```json
{}
```

<h2 id="tocS_Grantee">Grantee</h2>
<!-- backwards compatibility -->
<a id="schemagrantee"></a>
<a id="schema_Grantee"></a>
<a id="tocSgrantee"></a>
<a id="tocsgrantee"></a>

```json
{
  "DisplayName": {},
  "EmailAddress": {},
  "ID": {},
  "Type": {},
  "URI": {}
}
```

Container for the person being granted permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayName|object|false|none|none|
|EmailAddress|object|false|none|none|
|ID|object|false|none|none|
|Type|object|true|none|none|
|URI|object|false|none|none|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
"FULL_CONTROL"
```

<h2 id="tocS_Grant">Grant</h2>
<!-- backwards compatibility -->
<a id="schemagrant"></a>
<a id="schema_Grant"></a>
<a id="tocSgrant"></a>
<a id="tocsgrant"></a>

```json
{
  "Grantee": {
    "DisplayName": {},
    "EmailAddress": {},
    "ID": {},
    "Type": {},
    "URI": {}
  },
  "Permission": {}
}
```

Container for grant information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Grantee|object|false|none|none|
|Permission|object|false|none|none|

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"CanonicalUser"
```

<h2 id="tocS_URI">URI</h2>
<!-- backwards compatibility -->
<a id="schemauri"></a>
<a id="schema_URI"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
"string"
```

<h2 id="tocS_HeadBucketRequest">HeadBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemaheadbucketrequest"></a>
<a id="schema_HeadBucketRequest"></a>
<a id="tocSheadbucketrequest"></a>
<a id="tocsheadbucketrequest"></a>

```json
{}
```

<h2 id="tocS_HeadObjectRequest">HeadObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaheadobjectrequest"></a>
<a id="schema_HeadObjectRequest"></a>
<a id="tocSheadobjectrequest"></a>
<a id="tocsheadobjectrequest"></a>

```json
{}
```

<h2 id="tocS_HostName">HostName</h2>
<!-- backwards compatibility -->
<a id="schemahostname"></a>
<a id="schema_HostName"></a>
<a id="tocShostname"></a>
<a id="tocshostname"></a>

```json
"string"
```

<h2 id="tocS_HttpRedirectCode">HttpRedirectCode</h2>
<!-- backwards compatibility -->
<a id="schemahttpredirectcode"></a>
<a id="schema_HttpRedirectCode"></a>
<a id="tocShttpredirectcode"></a>
<a id="tocshttpredirectcode"></a>

```json
"string"
```

<h2 id="tocS_Suffix">Suffix</h2>
<!-- backwards compatibility -->
<a id="schemasuffix"></a>
<a id="schema_Suffix"></a>
<a id="tocSsuffix"></a>
<a id="tocssuffix"></a>

```json
"string"
```

<h2 id="tocS_Initiated">Initiated</h2>
<!-- backwards compatibility -->
<a id="schemainitiated"></a>
<a id="schema_Initiated"></a>
<a id="tocSinitiated"></a>
<a id="tocsinitiated"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Initiator">Initiator</h2>
<!-- backwards compatibility -->
<a id="schemainitiator"></a>
<a id="schema_Initiator"></a>
<a id="tocSinitiator"></a>
<a id="tocsinitiator"></a>

```json
{
  "ID": {},
  "DisplayName": {}
}
```

Container element that identifies who initiated the multipart upload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|object|false|none|none|
|DisplayName|object|false|none|none|

<h2 id="tocS_InputSerialization">InputSerialization</h2>
<!-- backwards compatibility -->
<a id="schemainputserialization"></a>
<a id="schema_InputSerialization"></a>
<a id="tocSinputserialization"></a>
<a id="tocsinputserialization"></a>

```json
{
  "CSV": {
    "FileHeaderInfo": {},
    "Comments": {},
    "QuoteEscapeCharacter": {},
    "RecordDelimiter": {},
    "FieldDelimiter": {},
    "QuoteCharacter": {},
    "AllowQuotedRecordDelimiter": {}
  },
  "CompressionType": {},
  "JSON": {
    "Type": {}
  },
  "Parquet": {}
}
```

Describes the serialization format of the object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CSV|object|false|none|none|
|CompressionType|object|false|none|none|
|JSON|object|false|none|none|
|Parquet|object|false|none|none|

<h2 id="tocS_IntelligentTieringAccessTier">IntelligentTieringAccessTier</h2>
<!-- backwards compatibility -->
<a id="schemaintelligenttieringaccesstier"></a>
<a id="schema_IntelligentTieringAccessTier"></a>
<a id="tocSintelligenttieringaccesstier"></a>
<a id="tocsintelligenttieringaccesstier"></a>

```json
"ARCHIVE_ACCESS"
```

<h2 id="tocS_IntelligentTieringAndOperator">IntelligentTieringAndOperator</h2>
<!-- backwards compatibility -->
<a id="schemaintelligenttieringandoperator"></a>
<a id="schema_IntelligentTieringAndOperator"></a>
<a id="tocSintelligenttieringandoperator"></a>
<a id="tocsintelligenttieringandoperator"></a>

```json
{
  "Prefix": {},
  "Tags": {}
}
```

A container for specifying S3 Intelligent-Tiering filters. The filters determine the subset of objects to which the rule applies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_IntelligentTieringConfigurationList">IntelligentTieringConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaintelligenttieringconfigurationlist"></a>
<a id="schema_IntelligentTieringConfigurationList"></a>
<a id="tocSintelligenttieringconfigurationlist"></a>
<a id="tocsintelligenttieringconfigurationlist"></a>

```json
[
  {
    "Id": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "And": {
        "Prefix": {},
        "Tags": {}
      }
    },
    "Status": {},
    "Tierings": {}
  }
]
```

<h2 id="tocS_IntelligentTieringDays">IntelligentTieringDays</h2>
<!-- backwards compatibility -->
<a id="schemaintelligenttieringdays"></a>
<a id="schema_IntelligentTieringDays"></a>
<a id="tocSintelligenttieringdays"></a>
<a id="tocsintelligenttieringdays"></a>

```json
0
```

<h2 id="tocS_InventoryConfigurationList">InventoryConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemainventoryconfigurationlist"></a>
<a id="schema_InventoryConfigurationList"></a>
<a id="tocSinventoryconfigurationlist"></a>
<a id="tocsinventoryconfigurationlist"></a>

```json
[
  {
    "Destination": {
      "S3BucketDestination": {
        "AccountId": {},
        "Bucket": {},
        "Format": {},
        "Prefix": {},
        "Encryption": {
          "SSES3": {},
          "SSEKMS": {
            "KeyId": {}
          }
        }
      }
    },
    "IsEnabled": {},
    "Filter": {
      "Prefix": {}
    },
    "Id": {},
    "IncludedObjectVersions": {},
    "OptionalFields": {},
    "Schedule": {
      "Frequency": {}
    }
  }
]
```

<h2 id="tocS_InventoryS3BucketDestination">InventoryS3BucketDestination</h2>
<!-- backwards compatibility -->
<a id="schemainventorys3bucketdestination"></a>
<a id="schema_InventoryS3BucketDestination"></a>
<a id="tocSinventorys3bucketdestination"></a>
<a id="tocsinventorys3bucketdestination"></a>

```json
{
  "AccountId": {},
  "Bucket": {},
  "Format": {},
  "Prefix": {},
  "Encryption": {
    "SSES3": {},
    "SSEKMS": {
      "KeyId": {}
    }
  }
}
```

Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where inventory results are published.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|object|false|none|none|
|Bucket|object|true|none|none|
|Format|object|true|none|none|
|Prefix|object|false|none|none|
|Encryption|object|false|none|none|

<h2 id="tocS_SSES3">SSES3</h2>
<!-- backwards compatibility -->
<a id="schemasses3"></a>
<a id="schema_SSES3"></a>
<a id="tocSsses3"></a>
<a id="tocssses3"></a>

```json
{}
```

Specifies the use of SSE-S3 to encrypt delivered inventory reports.

<h2 id="tocS_SSEKMS">SSEKMS</h2>
<!-- backwards compatibility -->
<a id="schemassekms"></a>
<a id="schema_SSEKMS"></a>
<a id="tocSssekms"></a>
<a id="tocsssekms"></a>

```json
{
  "KeyId": {}
}
```

Specifies the use of SSE-KMS to encrypt delivered inventory reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|

<h2 id="tocS_InventoryEncryption">InventoryEncryption</h2>
<!-- backwards compatibility -->
<a id="schemainventoryencryption"></a>
<a id="schema_InventoryEncryption"></a>
<a id="tocSinventoryencryption"></a>
<a id="tocsinventoryencryption"></a>

```json
{
  "SSES3": {},
  "SSEKMS": {
    "KeyId": {}
  }
}
```

Contains the type of server-side encryption used to encrypt the inventory results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SSES3|object|false|none|none|
|SSEKMS|object|false|none|none|

<h2 id="tocS_InventoryFormat">InventoryFormat</h2>
<!-- backwards compatibility -->
<a id="schemainventoryformat"></a>
<a id="schema_InventoryFormat"></a>
<a id="tocSinventoryformat"></a>
<a id="tocsinventoryformat"></a>

```json
"CSV"
```

<h2 id="tocS_InventoryFrequency">InventoryFrequency</h2>
<!-- backwards compatibility -->
<a id="schemainventoryfrequency"></a>
<a id="schema_InventoryFrequency"></a>
<a id="tocSinventoryfrequency"></a>
<a id="tocsinventoryfrequency"></a>

```json
"Daily"
```

<h2 id="tocS_InventoryOptionalField">InventoryOptionalField</h2>
<!-- backwards compatibility -->
<a id="schemainventoryoptionalfield"></a>
<a id="schema_InventoryOptionalField"></a>
<a id="tocSinventoryoptionalfield"></a>
<a id="tocsinventoryoptionalfield"></a>

```json
"Size"
```

<h2 id="tocS_IsPublic">IsPublic</h2>
<!-- backwards compatibility -->
<a id="schemaispublic"></a>
<a id="schema_IsPublic"></a>
<a id="tocSispublic"></a>
<a id="tocsispublic"></a>

```json
true
```

<h2 id="tocS_IsRestoreInProgress">IsRestoreInProgress</h2>
<!-- backwards compatibility -->
<a id="schemaisrestoreinprogress"></a>
<a id="schema_IsRestoreInProgress"></a>
<a id="tocSisrestoreinprogress"></a>
<a id="tocsisrestoreinprogress"></a>

```json
true
```

<h2 id="tocS_JSONType">JSONType</h2>
<!-- backwards compatibility -->
<a id="schemajsontype"></a>
<a id="schema_JSONType"></a>
<a id="tocSjsontype"></a>
<a id="tocsjsontype"></a>

```json
"DOCUMENT"
```

<h2 id="tocS_KeyCount">KeyCount</h2>
<!-- backwards compatibility -->
<a id="schemakeycount"></a>
<a id="schema_KeyCount"></a>
<a id="tocSkeycount"></a>
<a id="tocskeycount"></a>

```json
0
```

<h2 id="tocS_KeyMarker">KeyMarker</h2>
<!-- backwards compatibility -->
<a id="schemakeymarker"></a>
<a id="schema_KeyMarker"></a>
<a id="tocSkeymarker"></a>
<a id="tocskeymarker"></a>

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

<h2 id="tocS_NotificationConfigurationFilter">NotificationConfigurationFilter</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfigurationfilter"></a>
<a id="schema_NotificationConfigurationFilter"></a>
<a id="tocSnotificationconfigurationfilter"></a>
<a id="tocsnotificationconfigurationfilter"></a>

```json
{
  "Key": {
    "FilterRules": {}
  }
}
```

Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html">Configuring event notifications using object key name filtering</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|

<h2 id="tocS_LambdaFunctionConfiguration">LambdaFunctionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionconfiguration"></a>
<a id="schema_LambdaFunctionConfiguration"></a>
<a id="tocSlambdafunctionconfiguration"></a>
<a id="tocslambdafunctionconfiguration"></a>

```json
{
  "Id": "string",
  "LambdaFunctionArn": {},
  "Events": {},
  "Filter": {
    "Key": {
      "FilterRules": {}
    }
  }
}
```

A container for specifying the configuration for Lambda notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|[NotificationId](#schemanotificationid)|false|none|An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.|
|LambdaFunctionArn|object|true|none|none|
|Events|object|true|none|none|
|Filter|[NotificationConfigurationFilter](#schemanotificationconfigurationfilter)|false|none|Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html">Configuring event notifications using object key name filtering</a> in the <i>Amazon S3 User Guide</i>.|

<h2 id="tocS_LifecycleConfiguration">LifecycleConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleconfiguration"></a>
<a id="schema_LifecycleConfiguration"></a>
<a id="tocSlifecycleconfiguration"></a>
<a id="tocslifecycleconfiguration"></a>

```json
{
  "Rules": {}
}
```

<p>Container for lifecycle rules. You can add as many as 1000 rules.</p> <p>For more information see, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html">Managing your storage lifecycle</a> in the <i>Amazon S3 User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|true|none|none|

<h2 id="tocS_LifecycleExpiration">LifecycleExpiration</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleexpiration"></a>
<a id="schema_LifecycleExpiration"></a>
<a id="tocSlifecycleexpiration"></a>
<a id="tocslifecycleexpiration"></a>

```json
{
  "Date": {},
  "Days": {},
  "ExpiredObjectDeleteMarker": {}
}
```

<p>Container for the expiration for the lifecycle of the object.</p> <p>For more information see, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html">Managing your storage lifecycle</a> in the <i>Amazon S3 User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|object|false|none|none|
|Days|object|false|none|none|
|ExpiredObjectDeleteMarker|object|false|none|none|

<h2 id="tocS_LifecycleRuleFilter">LifecycleRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclerulefilter"></a>
<a id="schema_LifecycleRuleFilter"></a>
<a id="tocSlifecyclerulefilter"></a>
<a id="tocslifecyclerulefilter"></a>

```json
{
  "Prefix": {},
  "Tag": {
    "Key": {},
    "Value": {}
  },
  "ObjectSizeGreaterThan": {},
  "ObjectSizeLessThan": {},
  "And": {
    "Prefix": {},
    "Tags": {},
    "ObjectSizeGreaterThan": {},
    "ObjectSizeLessThan": {}
  }
}
```

The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or <code>And</code> specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tag|object|false|none|none|
|ObjectSizeGreaterThan|object|false|none|none|
|ObjectSizeLessThan|object|false|none|none|
|And|[LifecycleRuleAndOperator](#schemalifecycleruleandoperator)|false|none|This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator.|

<h2 id="tocS_TransitionList">TransitionList</h2>
<!-- backwards compatibility -->
<a id="schematransitionlist"></a>
<a id="schema_TransitionList"></a>
<a id="tocStransitionlist"></a>
<a id="tocstransitionlist"></a>

```json
[
  {
    "Date": {},
    "Days": {},
    "StorageClass": {}
  }
]
```

<h2 id="tocS_NoncurrentVersionTransitionList">NoncurrentVersionTransitionList</h2>
<!-- backwards compatibility -->
<a id="schemanoncurrentversiontransitionlist"></a>
<a id="schema_NoncurrentVersionTransitionList"></a>
<a id="tocSnoncurrentversiontransitionlist"></a>
<a id="tocsnoncurrentversiontransitionlist"></a>

```json
[
  {
    "NoncurrentDays": {},
    "StorageClass": {},
    "NewerNoncurrentVersions": {}
  }
]
```

<h2 id="tocS_NoncurrentVersionExpiration">NoncurrentVersionExpiration</h2>
<!-- backwards compatibility -->
<a id="schemanoncurrentversionexpiration"></a>
<a id="schema_NoncurrentVersionExpiration"></a>
<a id="tocSnoncurrentversionexpiration"></a>
<a id="tocsnoncurrentversionexpiration"></a>

```json
{
  "NoncurrentDays": {},
  "NewerNoncurrentVersions": {}
}
```

Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NoncurrentDays|object|false|none|none|
|NewerNoncurrentVersions|object|false|none|none|

<h2 id="tocS_LifecycleRule">LifecycleRule</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclerule"></a>
<a id="schema_LifecycleRule"></a>
<a id="tocSlifecyclerule"></a>
<a id="tocslifecyclerule"></a>

```json
{
  "Expiration": {
    "Date": {},
    "Days": {},
    "ExpiredObjectDeleteMarker": {}
  },
  "ID": {},
  "Prefix": {},
  "Filter": {
    "Prefix": {},
    "Tag": {
      "Key": {},
      "Value": {}
    },
    "ObjectSizeGreaterThan": {},
    "ObjectSizeLessThan": {},
    "And": {
      "Prefix": {},
      "Tags": {},
      "ObjectSizeGreaterThan": {},
      "ObjectSizeLessThan": {}
    }
  },
  "Status": {},
  "Transitions": {},
  "NoncurrentVersionTransitions": {},
  "NoncurrentVersionExpiration": {
    "NoncurrentDays": {},
    "NewerNoncurrentVersions": {}
  },
  "AbortIncompleteMultipartUpload": {
    "DaysAfterInitiation": {}
  }
}
```

<p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p> <p>For more information see, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html">Managing your storage lifecycle</a> in the <i>Amazon S3 User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expiration|object|false|none|none|
|ID|object|false|none|none|
|Prefix|object|false|none|none|
|Filter|object|false|none|none|
|Status|object|true|none|none|
|Transitions|object|false|none|none|
|NoncurrentVersionTransitions|object|false|none|none|
|NoncurrentVersionExpiration|[NoncurrentVersionExpiration](#schemanoncurrentversionexpiration)|false|none|Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.|
|AbortIncompleteMultipartUpload|[AbortIncompleteMultipartUpload](#schemaabortincompletemultipartupload)|false|none|Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config"> Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a> in the <i>Amazon S3 User Guide</i>.|

<h2 id="tocS_ObjectSizeGreaterThanBytes">ObjectSizeGreaterThanBytes</h2>
<!-- backwards compatibility -->
<a id="schemaobjectsizegreaterthanbytes"></a>
<a id="schema_ObjectSizeGreaterThanBytes"></a>
<a id="tocSobjectsizegreaterthanbytes"></a>
<a id="tocsobjectsizegreaterthanbytes"></a>

```json
0
```

<h2 id="tocS_ObjectSizeLessThanBytes">ObjectSizeLessThanBytes</h2>
<!-- backwards compatibility -->
<a id="schemaobjectsizelessthanbytes"></a>
<a id="schema_ObjectSizeLessThanBytes"></a>
<a id="tocSobjectsizelessthanbytes"></a>
<a id="tocsobjectsizelessthanbytes"></a>

```json
0
```

<h2 id="tocS_LifecycleRuleAndOperator">LifecycleRuleAndOperator</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleruleandoperator"></a>
<a id="schema_LifecycleRuleAndOperator"></a>
<a id="tocSlifecycleruleandoperator"></a>
<a id="tocslifecycleruleandoperator"></a>

```json
{
  "Prefix": {},
  "Tags": {},
  "ObjectSizeGreaterThan": {},
  "ObjectSizeLessThan": {}
}
```

This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tags|object|false|none|none|
|ObjectSizeGreaterThan|object|false|none|none|
|ObjectSizeLessThan|object|false|none|none|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
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

<h2 id="tocS_ListBucketAnalyticsConfigurationsRequest">ListBucketAnalyticsConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbucketanalyticsconfigurationsrequest"></a>
<a id="schema_ListBucketAnalyticsConfigurationsRequest"></a>
<a id="tocSlistbucketanalyticsconfigurationsrequest"></a>
<a id="tocslistbucketanalyticsconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS_ListBucketIntelligentTieringConfigurationsRequest">ListBucketIntelligentTieringConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbucketintelligenttieringconfigurationsrequest"></a>
<a id="schema_ListBucketIntelligentTieringConfigurationsRequest"></a>
<a id="tocSlistbucketintelligenttieringconfigurationsrequest"></a>
<a id="tocslistbucketintelligenttieringconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS_ListBucketInventoryConfigurationsRequest">ListBucketInventoryConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbucketinventoryconfigurationsrequest"></a>
<a id="schema_ListBucketInventoryConfigurationsRequest"></a>
<a id="tocSlistbucketinventoryconfigurationsrequest"></a>
<a id="tocslistbucketinventoryconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS_MetricsConfigurationList">MetricsConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemametricsconfigurationlist"></a>
<a id="schema_MetricsConfigurationList"></a>
<a id="tocSmetricsconfigurationlist"></a>
<a id="tocsmetricsconfigurationlist"></a>

```json
[
  {
    "Id": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "AccessPointArn": {},
      "And": {
        "Prefix": {},
        "Tags": {},
        "AccessPointArn": {}
      }
    }
  }
]
```

<h2 id="tocS_ListBucketMetricsConfigurationsRequest">ListBucketMetricsConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbucketmetricsconfigurationsrequest"></a>
<a id="schema_ListBucketMetricsConfigurationsRequest"></a>
<a id="tocSlistbucketmetricsconfigurationsrequest"></a>
<a id="tocslistbucketmetricsconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS_UploadIdMarker">UploadIdMarker</h2>
<!-- backwards compatibility -->
<a id="schemauploadidmarker"></a>
<a id="schema_UploadIdMarker"></a>
<a id="tocSuploadidmarker"></a>
<a id="tocsuploadidmarker"></a>

```json
"string"
```

<h2 id="tocS_NextKeyMarker">NextKeyMarker</h2>
<!-- backwards compatibility -->
<a id="schemanextkeymarker"></a>
<a id="schema_NextKeyMarker"></a>
<a id="tocSnextkeymarker"></a>
<a id="tocsnextkeymarker"></a>

```json
"string"
```

<h2 id="tocS_NextUploadIdMarker">NextUploadIdMarker</h2>
<!-- backwards compatibility -->
<a id="schemanextuploadidmarker"></a>
<a id="schema_NextUploadIdMarker"></a>
<a id="tocSnextuploadidmarker"></a>
<a id="tocsnextuploadidmarker"></a>

```json
"string"
```

<h2 id="tocS_MaxUploads">MaxUploads</h2>
<!-- backwards compatibility -->
<a id="schemamaxuploads"></a>
<a id="schema_MaxUploads"></a>
<a id="tocSmaxuploads"></a>
<a id="tocsmaxuploads"></a>

```json
0
```

<h2 id="tocS_MultipartUploadList">MultipartUploadList</h2>
<!-- backwards compatibility -->
<a id="schemamultipartuploadlist"></a>
<a id="schema_MultipartUploadList"></a>
<a id="tocSmultipartuploadlist"></a>
<a id="tocsmultipartuploadlist"></a>

```json
[
  {
    "UploadId": {},
    "Key": {},
    "Initiated": {},
    "StorageClass": {},
    "Owner": {
      "DisplayName": {},
      "ID": {}
    },
    "Initiator": {
      "ID": {},
      "DisplayName": {}
    },
    "ChecksumAlgorithm": {}
  }
]
```

<h2 id="tocS_ListMultipartUploadsRequest">ListMultipartUploadsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmultipartuploadsrequest"></a>
<a id="schema_ListMultipartUploadsRequest"></a>
<a id="tocSlistmultipartuploadsrequest"></a>
<a id="tocslistmultipartuploadsrequest"></a>

```json
{}
```

<h2 id="tocS_VersionIdMarker">VersionIdMarker</h2>
<!-- backwards compatibility -->
<a id="schemaversionidmarker"></a>
<a id="schema_VersionIdMarker"></a>
<a id="tocSversionidmarker"></a>
<a id="tocsversionidmarker"></a>

```json
"string"
```

<h2 id="tocS_NextVersionIdMarker">NextVersionIdMarker</h2>
<!-- backwards compatibility -->
<a id="schemanextversionidmarker"></a>
<a id="schema_NextVersionIdMarker"></a>
<a id="tocSnextversionidmarker"></a>
<a id="tocsnextversionidmarker"></a>

```json
"string"
```

<h2 id="tocS_ObjectVersionList">ObjectVersionList</h2>
<!-- backwards compatibility -->
<a id="schemaobjectversionlist"></a>
<a id="schema_ObjectVersionList"></a>
<a id="tocSobjectversionlist"></a>
<a id="tocsobjectversionlist"></a>

```json
[
  {
    "ETag": {},
    "ChecksumAlgorithm": {},
    "Size": {},
    "StorageClass": {},
    "Key": {},
    "VersionId": {},
    "IsLatest": {},
    "LastModified": {},
    "Owner": {
      "DisplayName": {},
      "ID": {}
    },
    "RestoreStatus": {
      "IsRestoreInProgress": {},
      "RestoreExpiryDate": {}
    }
  }
]
```

<h2 id="tocS_MaxKeys">MaxKeys</h2>
<!-- backwards compatibility -->
<a id="schemamaxkeys"></a>
<a id="schema_MaxKeys"></a>
<a id="tocSmaxkeys"></a>
<a id="tocsmaxkeys"></a>

```json
0
```

<h2 id="tocS_OptionalObjectAttributesList">OptionalObjectAttributesList</h2>
<!-- backwards compatibility -->
<a id="schemaoptionalobjectattributeslist"></a>
<a id="schema_OptionalObjectAttributesList"></a>
<a id="tocSoptionalobjectattributeslist"></a>
<a id="tocsoptionalobjectattributeslist"></a>

```json
[
  "RestoreStatus"
]
```

<h2 id="tocS_ListObjectVersionsRequest">ListObjectVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectversionsrequest"></a>
<a id="schema_ListObjectVersionsRequest"></a>
<a id="tocSlistobjectversionsrequest"></a>
<a id="tocslistobjectversionsrequest"></a>

```json
{}
```

<h2 id="tocS_Marker">Marker</h2>
<!-- backwards compatibility -->
<a id="schemamarker"></a>
<a id="schema_Marker"></a>
<a id="tocSmarker"></a>
<a id="tocsmarker"></a>

```json
"string"
```

<h2 id="tocS_NextMarker">NextMarker</h2>
<!-- backwards compatibility -->
<a id="schemanextmarker"></a>
<a id="schema_NextMarker"></a>
<a id="tocSnextmarker"></a>
<a id="tocsnextmarker"></a>

```json
"string"
```

<h2 id="tocS_ObjectList">ObjectList</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlist"></a>
<a id="schema_ObjectList"></a>
<a id="tocSobjectlist"></a>
<a id="tocsobjectlist"></a>

```json
[
  {
    "Key": {},
    "LastModified": {},
    "ETag": {},
    "ChecksumAlgorithm": {},
    "Size": {},
    "StorageClass": {},
    "Owner": {
      "DisplayName": {},
      "ID": {}
    },
    "RestoreStatus": {
      "IsRestoreInProgress": {},
      "RestoreExpiryDate": {}
    }
  }
]
```

<h2 id="tocS_ListObjectsRequest">ListObjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectsrequest"></a>
<a id="schema_ListObjectsRequest"></a>
<a id="tocSlistobjectsrequest"></a>
<a id="tocslistobjectsrequest"></a>

```json
{}
```

<h2 id="tocS_StartAfter">StartAfter</h2>
<!-- backwards compatibility -->
<a id="schemastartafter"></a>
<a id="schema_StartAfter"></a>
<a id="tocSstartafter"></a>
<a id="tocsstartafter"></a>

```json
"string"
```

<h2 id="tocS_ListObjectsV2Request">ListObjectsV2Request</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectsv2request"></a>
<a id="schema_ListObjectsV2Request"></a>
<a id="tocSlistobjectsv2request"></a>
<a id="tocslistobjectsv2request"></a>

```json
{}
```

<h2 id="tocS_Parts">Parts</h2>
<!-- backwards compatibility -->
<a id="schemaparts"></a>
<a id="schema_Parts"></a>
<a id="tocSparts"></a>
<a id="tocsparts"></a>

```json
[
  {
    "PartNumber": {},
    "LastModified": {},
    "ETag": {},
    "Size": {},
    "ChecksumCRC32": {},
    "ChecksumCRC32C": {},
    "ChecksumSHA1": {},
    "ChecksumSHA256": {}
  }
]
```

<h2 id="tocS_ListPartsRequest">ListPartsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpartsrequest"></a>
<a id="schema_ListPartsRequest"></a>
<a id="tocSlistpartsrequest"></a>
<a id="tocslistpartsrequest"></a>

```json
{}
```

<h2 id="tocS_LocationPrefix">LocationPrefix</h2>
<!-- backwards compatibility -->
<a id="schemalocationprefix"></a>
<a id="schema_LocationPrefix"></a>
<a id="tocSlocationprefix"></a>
<a id="tocslocationprefix"></a>

```json
"string"
```

<h2 id="tocS_TargetBucket">TargetBucket</h2>
<!-- backwards compatibility -->
<a id="schematargetbucket"></a>
<a id="schema_TargetBucket"></a>
<a id="tocStargetbucket"></a>
<a id="tocstargetbucket"></a>

```json
"string"
```

<h2 id="tocS_TargetGrants">TargetGrants</h2>
<!-- backwards compatibility -->
<a id="schematargetgrants"></a>
<a id="schema_TargetGrants"></a>
<a id="tocStargetgrants"></a>
<a id="tocstargetgrants"></a>

```json
[
  {
    "Grantee": {
      "DisplayName": {},
      "EmailAddress": {},
      "ID": {},
      "Type": {},
      "URI": {}
    },
    "Permission": {}
  }
]
```

<h2 id="tocS_TargetPrefix">TargetPrefix</h2>
<!-- backwards compatibility -->
<a id="schematargetprefix"></a>
<a id="schema_TargetPrefix"></a>
<a id="tocStargetprefix"></a>
<a id="tocstargetprefix"></a>

```json
"string"
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

<h2 id="tocS_MetadataEntry">MetadataEntry</h2>
<!-- backwards compatibility -->
<a id="schemametadataentry"></a>
<a id="schema_MetadataEntry"></a>
<a id="tocSmetadataentry"></a>
<a id="tocsmetadataentry"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

A metadata key-value pair to store with an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_MetricsStatus">MetricsStatus</h2>
<!-- backwards compatibility -->
<a id="schemametricsstatus"></a>
<a id="schema_MetricsStatus"></a>
<a id="tocSmetricsstatus"></a>
<a id="tocsmetricsstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_ReplicationTimeValue">ReplicationTimeValue</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtimevalue"></a>
<a id="schema_ReplicationTimeValue"></a>
<a id="tocSreplicationtimevalue"></a>
<a id="tocsreplicationtimevalue"></a>

```json
{
  "Minutes": {}
}
```

 A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics <code>EventThreshold</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Minutes|object|false|none|none|

<h2 id="tocS_MetricsAndOperator">MetricsAndOperator</h2>
<!-- backwards compatibility -->
<a id="schemametricsandoperator"></a>
<a id="schema_MetricsAndOperator"></a>
<a id="tocSmetricsandoperator"></a>
<a id="tocsmetricsandoperator"></a>

```json
{
  "Prefix": {},
  "Tags": {},
  "AccessPointArn": {}
}
```

A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tags|object|false|none|none|
|AccessPointArn|object|false|none|none|

<h2 id="tocS_Minutes">Minutes</h2>
<!-- backwards compatibility -->
<a id="schemaminutes"></a>
<a id="schema_Minutes"></a>
<a id="tocSminutes"></a>
<a id="tocsminutes"></a>

```json
0
```

<h2 id="tocS_MultipartUpload">MultipartUpload</h2>
<!-- backwards compatibility -->
<a id="schemamultipartupload"></a>
<a id="schema_MultipartUpload"></a>
<a id="tocSmultipartupload"></a>
<a id="tocsmultipartupload"></a>

```json
{
  "UploadId": {},
  "Key": {},
  "Initiated": {},
  "StorageClass": {},
  "Owner": {
    "DisplayName": {},
    "ID": {}
  },
  "Initiator": {
    "ID": {},
    "DisplayName": {}
  },
  "ChecksumAlgorithm": {}
}
```

Container for the <code>MultipartUpload</code> for the Amazon S3 object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UploadId|object|false|none|none|
|Key|object|false|none|none|
|Initiated|object|false|none|none|
|StorageClass|object|false|none|none|
|Owner|object|false|none|none|
|Initiator|object|false|none|none|
|ChecksumAlgorithm|object|false|none|none|

<h2 id="tocS_VersionCount">VersionCount</h2>
<!-- backwards compatibility -->
<a id="schemaversioncount"></a>
<a id="schema_VersionCount"></a>
<a id="tocSversioncount"></a>
<a id="tocsversioncount"></a>

```json
0
```

<h2 id="tocS_TransitionStorageClass">TransitionStorageClass</h2>
<!-- backwards compatibility -->
<a id="schematransitionstorageclass"></a>
<a id="schema_TransitionStorageClass"></a>
<a id="tocStransitionstorageclass"></a>
<a id="tocstransitionstorageclass"></a>

```json
"GLACIER"
```

<h2 id="tocS_NoncurrentVersionTransition">NoncurrentVersionTransition</h2>
<!-- backwards compatibility -->
<a id="schemanoncurrentversiontransition"></a>
<a id="schema_NoncurrentVersionTransition"></a>
<a id="tocSnoncurrentversiontransition"></a>
<a id="tocsnoncurrentversiontransition"></a>

```json
{
  "NoncurrentDays": {},
  "StorageClass": {},
  "NewerNoncurrentVersions": {}
}
```

Container for the transition rule that describes when noncurrent objects transition to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER_IR</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER_IR</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class at a specific period in the object's lifetime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NoncurrentDays|object|false|none|none|
|StorageClass|object|false|none|none|
|NewerNoncurrentVersions|object|false|none|none|

<h2 id="tocS_S3KeyFilter">S3KeyFilter</h2>
<!-- backwards compatibility -->
<a id="schemas3keyfilter"></a>
<a id="schema_S3KeyFilter"></a>
<a id="tocSs3keyfilter"></a>
<a id="tocss3keyfilter"></a>

```json
{
  "FilterRules": {}
}
```

A container for object key name prefix and suffix filtering rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterRules|object|false|none|none|

<h2 id="tocS_Size">Size</h2>
<!-- backwards compatibility -->
<a id="schemasize"></a>
<a id="schema_Size"></a>
<a id="tocSsize"></a>
<a id="tocssize"></a>

```json
0
```

<h2 id="tocS_ObjectStorageClass">ObjectStorageClass</h2>
<!-- backwards compatibility -->
<a id="schemaobjectstorageclass"></a>
<a id="schema_ObjectStorageClass"></a>
<a id="tocSobjectstorageclass"></a>
<a id="tocsobjectstorageclass"></a>

```json
"STANDARD"
```

<h2 id="tocS_RestoreStatus">RestoreStatus</h2>
<!-- backwards compatibility -->
<a id="schemarestorestatus"></a>
<a id="schema_RestoreStatus"></a>
<a id="tocSrestorestatus"></a>
<a id="tocsrestorestatus"></a>

```json
{
  "IsRestoreInProgress": {},
  "RestoreExpiryDate": {}
}
```

Specifies the restoration status of an object. Objects in certain storage classes must be restored before they can be retrieved. For more information about these storage classes and how to work with archived objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/archived-objects.html"> Working with archived objects</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsRestoreInProgress|object|false|none|none|
|RestoreExpiryDate|object|false|none|none|

<h2 id="tocS_Object">Object</h2>
<!-- backwards compatibility -->
<a id="schemaobject"></a>
<a id="schema_Object"></a>
<a id="tocSobject"></a>
<a id="tocsobject"></a>

```json
{
  "Key": {},
  "LastModified": {},
  "ETag": {},
  "ChecksumAlgorithm": {},
  "Size": {},
  "StorageClass": {},
  "Owner": {
    "DisplayName": {},
    "ID": {}
  },
  "RestoreStatus": {
    "IsRestoreInProgress": {},
    "RestoreExpiryDate": {}
  }
}
```

An object consists of data and its descriptive metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|LastModified|object|false|none|none|
|ETag|object|false|none|none|
|ChecksumAlgorithm|object|false|none|none|
|Size|object|false|none|none|
|StorageClass|object|false|none|none|
|Owner|object|false|none|none|
|RestoreStatus|object|false|none|none|

<h2 id="tocS_ObjectIdentifier">ObjectIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaobjectidentifier"></a>
<a id="schema_ObjectIdentifier"></a>
<a id="tocSobjectidentifier"></a>
<a id="tocsobjectidentifier"></a>

```json
{
  "Key": {},
  "VersionId": {}
}
```

Object Identifier is unique value to identify objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|VersionId|object|false|none|none|

<h2 id="tocS_ObjectLockToken">ObjectLockToken</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlocktoken"></a>
<a id="schema_ObjectLockToken"></a>
<a id="tocSobjectlocktoken"></a>
<a id="tocsobjectlocktoken"></a>

```json
"string"
```

<h2 id="tocS_ObjectPart">ObjectPart</h2>
<!-- backwards compatibility -->
<a id="schemaobjectpart"></a>
<a id="schema_ObjectPart"></a>
<a id="tocSobjectpart"></a>
<a id="tocsobjectpart"></a>

```json
{
  "PartNumber": {},
  "Size": {},
  "ChecksumCRC32": {},
  "ChecksumCRC32C": {},
  "ChecksumSHA1": {},
  "ChecksumSHA256": {}
}
```

A container for elements related to an individual part.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PartNumber|object|false|none|none|
|Size|object|false|none|none|
|ChecksumCRC32|object|false|none|none|
|ChecksumCRC32C|object|false|none|none|
|ChecksumSHA1|object|false|none|none|
|ChecksumSHA256|object|false|none|none|

<h2 id="tocS_ObjectVersionStorageClass">ObjectVersionStorageClass</h2>
<!-- backwards compatibility -->
<a id="schemaobjectversionstorageclass"></a>
<a id="schema_ObjectVersionStorageClass"></a>
<a id="tocSobjectversionstorageclass"></a>
<a id="tocsobjectversionstorageclass"></a>

```json
"STANDARD"
```

<h2 id="tocS_ObjectVersion">ObjectVersion</h2>
<!-- backwards compatibility -->
<a id="schemaobjectversion"></a>
<a id="schema_ObjectVersion"></a>
<a id="tocSobjectversion"></a>
<a id="tocsobjectversion"></a>

```json
{
  "ETag": {},
  "ChecksumAlgorithm": {},
  "Size": {},
  "StorageClass": {},
  "Key": {},
  "VersionId": {},
  "IsLatest": {},
  "LastModified": {},
  "Owner": {
    "DisplayName": {},
    "ID": {}
  },
  "RestoreStatus": {
    "IsRestoreInProgress": {},
    "RestoreExpiryDate": {}
  }
}
```

The version of an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ETag|object|false|none|none|
|ChecksumAlgorithm|object|false|none|none|
|Size|object|false|none|none|
|StorageClass|object|false|none|none|
|Key|object|false|none|none|
|VersionId|object|false|none|none|
|IsLatest|object|false|none|none|
|LastModified|object|false|none|none|
|Owner|object|false|none|none|
|RestoreStatus|object|false|none|none|

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
    "TagSet": {}
  },
  "UserMetadata": {},
  "StorageClass": {}
}
```

Describes an Amazon S3 location that will receive the results of the restore request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|true|none|none|
|Prefix|object|true|none|none|
|Encryption|[Encryption](#schemaencryption)|false|none|Contains the type of server-side encryption used.|
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
  "CSV": {
    "QuoteFields": {},
    "QuoteEscapeCharacter": {},
    "RecordDelimiter": {},
    "FieldDelimiter": {},
    "QuoteCharacter": {}
  },
  "JSON": {
    "RecordDelimiter": {}
  }
}
```

Describes how results of the Select job are serialized.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CSV|object|false|none|none|
|JSON|object|false|none|none|

<h2 id="tocS_OwnershipControlsRule">OwnershipControlsRule</h2>
<!-- backwards compatibility -->
<a id="schemaownershipcontrolsrule"></a>
<a id="schema_OwnershipControlsRule"></a>
<a id="tocSownershipcontrolsrule"></a>
<a id="tocsownershipcontrolsrule"></a>

```json
{
  "ObjectOwnership": "BucketOwnerPreferred"
}
```

The container element for an ownership control rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectOwnership|[ObjectOwnership](#schemaobjectownership)|true|none|<p>The container element for object ownership for a bucket's ownership controls.</p> <p>BucketOwnerPreferred - Objects uploaded to the bucket change ownership to the bucket owner if the objects are uploaded with the <code>bucket-owner-full-control</code> canned ACL.</p> <p>ObjectWriter - The uploading account will own the object if the object is uploaded with the <code>bucket-owner-full-control</code> canned ACL.</p> <p>BucketOwnerEnforced - Access control lists (ACLs) are disabled and no longer affect permissions. The bucket owner automatically owns and has full control over every object in the bucket. The bucket only accepts PUT requests that don't specify an ACL or bucket owner full control ACLs, such as the <code>bucket-owner-full-control</code> canned ACL or an equivalent form of this ACL expressed in the XML format.</p>|

#### Enumerated Values

|Property|Value|
|---|---|
|ObjectOwnership|BucketOwnerPreferred|
|ObjectOwnership|ObjectWriter|
|ObjectOwnership|BucketOwnerEnforced|

<h2 id="tocS_Part">Part</h2>
<!-- backwards compatibility -->
<a id="schemapart"></a>
<a id="schema_Part"></a>
<a id="tocSpart"></a>
<a id="tocspart"></a>

```json
{
  "PartNumber": {},
  "LastModified": {},
  "ETag": {},
  "Size": {},
  "ChecksumCRC32": {},
  "ChecksumCRC32C": {},
  "ChecksumSHA1": {},
  "ChecksumSHA256": {}
}
```

Container for elements related to a part.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PartNumber|object|false|none|none|
|LastModified|object|false|none|none|
|ETag|object|false|none|none|
|Size|object|false|none|none|
|ChecksumCRC32|object|false|none|none|
|ChecksumCRC32C|object|false|none|none|
|ChecksumSHA1|object|false|none|none|
|ChecksumSHA256|object|false|none|none|

<h2 id="tocS_Priority">Priority</h2>
<!-- backwards compatibility -->
<a id="schemapriority"></a>
<a id="schema_Priority"></a>
<a id="tocSpriority"></a>
<a id="tocspriority"></a>

```json
0
```

<h2 id="tocS_Progress">Progress</h2>
<!-- backwards compatibility -->
<a id="schemaprogress"></a>
<a id="schema_Progress"></a>
<a id="tocSprogress"></a>
<a id="tocsprogress"></a>

```json
{
  "BytesScanned": {},
  "BytesProcessed": {},
  "BytesReturned": {}
}
```

This data type contains information about progress of an operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BytesScanned|object|false|none|none|
|BytesProcessed|object|false|none|none|
|BytesReturned|object|false|none|none|

<h2 id="tocS_ProgressEvent">ProgressEvent</h2>
<!-- backwards compatibility -->
<a id="schemaprogressevent"></a>
<a id="schema_ProgressEvent"></a>
<a id="tocSprogressevent"></a>
<a id="tocsprogressevent"></a>

```json
{
  "Details": {
    "BytesScanned": {},
    "BytesProcessed": {},
    "BytesReturned": {}
  }
}
```

This data type contains information about the progress event of an operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Details|object|false|none|none|

<h2 id="tocS_Protocol">Protocol</h2>
<!-- backwards compatibility -->
<a id="schemaprotocol"></a>
<a id="schema_Protocol"></a>
<a id="tocSprotocol"></a>
<a id="tocsprotocol"></a>

```json
"http"
```

<h2 id="tocS_PutBucketAccelerateConfigurationRequest">PutBucketAccelerateConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketaccelerateconfigurationrequest"></a>
<a id="schema_PutBucketAccelerateConfigurationRequest"></a>
<a id="tocSputbucketaccelerateconfigurationrequest"></a>
<a id="tocsputbucketaccelerateconfigurationrequest"></a>

```json
{
  "AccelerateConfiguration": {
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccelerateConfiguration|object|true|none|none|

<h2 id="tocS_PutBucketAclRequest">PutBucketAclRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketaclrequest"></a>
<a id="schema_PutBucketAclRequest"></a>
<a id="tocSputbucketaclrequest"></a>
<a id="tocsputbucketaclrequest"></a>

```json
{
  "AccessControlPolicy": {
    "Grants": {},
    "Owner": {
      "DisplayName": {},
      "ID": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessControlPolicy|object|false|none|none|

<h2 id="tocS_PutBucketAnalyticsConfigurationRequest">PutBucketAnalyticsConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketanalyticsconfigurationrequest"></a>
<a id="schema_PutBucketAnalyticsConfigurationRequest"></a>
<a id="tocSputbucketanalyticsconfigurationrequest"></a>
<a id="tocsputbucketanalyticsconfigurationrequest"></a>

```json
{
  "AnalyticsConfiguration": {
    "Id": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "And": {
        "Prefix": {},
        "Tags": {}
      }
    },
    "StorageClassAnalysis": {
      "DataExport": {
        "OutputSchemaVersion": {},
        "Destination": {
          "S3BucketDestination": {
            "Format": {},
            "BucketAccountId": {},
            "Bucket": {},
            "Prefix": {}
          }
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnalyticsConfiguration|object|true|none|none|

<h2 id="tocS_PutBucketCorsRequest">PutBucketCorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketcorsrequest"></a>
<a id="schema_PutBucketCorsRequest"></a>
<a id="tocSputbucketcorsrequest"></a>
<a id="tocsputbucketcorsrequest"></a>

```json
{
  "CORSConfiguration": {
    "CORSRules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CORSConfiguration|object|true|none|none|

<h2 id="tocS_PutBucketEncryptionRequest">PutBucketEncryptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketencryptionrequest"></a>
<a id="schema_PutBucketEncryptionRequest"></a>
<a id="tocSputbucketencryptionrequest"></a>
<a id="tocsputbucketencryptionrequest"></a>

```json
{
  "ServerSideEncryptionConfiguration": {
    "Rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerSideEncryptionConfiguration|[ServerSideEncryptionConfiguration](#schemaserversideencryptionconfiguration)|true|none|Specifies the default server-side-encryption configuration.|

<h2 id="tocS_PutBucketIntelligentTieringConfigurationRequest">PutBucketIntelligentTieringConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketintelligenttieringconfigurationrequest"></a>
<a id="schema_PutBucketIntelligentTieringConfigurationRequest"></a>
<a id="tocSputbucketintelligenttieringconfigurationrequest"></a>
<a id="tocsputbucketintelligenttieringconfigurationrequest"></a>

```json
{
  "IntelligentTieringConfiguration": {
    "Id": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "And": {
        "Prefix": {},
        "Tags": {}
      }
    },
    "Status": {},
    "Tierings": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IntelligentTieringConfiguration|object|true|none|none|

<h2 id="tocS_PutBucketInventoryConfigurationRequest">PutBucketInventoryConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketinventoryconfigurationrequest"></a>
<a id="schema_PutBucketInventoryConfigurationRequest"></a>
<a id="tocSputbucketinventoryconfigurationrequest"></a>
<a id="tocsputbucketinventoryconfigurationrequest"></a>

```json
{
  "InventoryConfiguration": {
    "Destination": {
      "S3BucketDestination": {
        "AccountId": {},
        "Bucket": {},
        "Format": {},
        "Prefix": {},
        "Encryption": {
          "SSES3": {},
          "SSEKMS": {
            "KeyId": {}
          }
        }
      }
    },
    "IsEnabled": {},
    "Filter": {
      "Prefix": {}
    },
    "Id": {},
    "IncludedObjectVersions": {},
    "OptionalFields": {},
    "Schedule": {
      "Frequency": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InventoryConfiguration|object|true|none|none|

<h2 id="tocS_PutBucketLifecycleConfigurationRequest">PutBucketLifecycleConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketlifecycleconfigurationrequest"></a>
<a id="schema_PutBucketLifecycleConfigurationRequest"></a>
<a id="tocSputbucketlifecycleconfigurationrequest"></a>
<a id="tocsputbucketlifecycleconfigurationrequest"></a>

```json
{
  "LifecycleConfiguration": {
    "Rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecycleConfiguration|object|false|none|none|

<h2 id="tocS_PutBucketLifecycleRequest">PutBucketLifecycleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketlifecyclerequest"></a>
<a id="schema_PutBucketLifecycleRequest"></a>
<a id="tocSputbucketlifecyclerequest"></a>
<a id="tocsputbucketlifecyclerequest"></a>

```json
{
  "LifecycleConfiguration": {
    "Rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecycleConfiguration|object|false|none|none|

<h2 id="tocS_PutBucketLoggingRequest">PutBucketLoggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketloggingrequest"></a>
<a id="schema_PutBucketLoggingRequest"></a>
<a id="tocSputbucketloggingrequest"></a>
<a id="tocsputbucketloggingrequest"></a>

```json
{
  "BucketLoggingStatus": {
    "LoggingEnabled": {
      "TargetBucket": {},
      "TargetGrants": {},
      "TargetPrefix": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketLoggingStatus|object|true|none|none|

<h2 id="tocS_PutBucketMetricsConfigurationRequest">PutBucketMetricsConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketmetricsconfigurationrequest"></a>
<a id="schema_PutBucketMetricsConfigurationRequest"></a>
<a id="tocSputbucketmetricsconfigurationrequest"></a>
<a id="tocsputbucketmetricsconfigurationrequest"></a>

```json
{
  "MetricsConfiguration": {
    "Id": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "AccessPointArn": {},
      "And": {
        "Prefix": {},
        "Tags": {},
        "AccessPointArn": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricsConfiguration|object|true|none|none|

<h2 id="tocS_SkipValidation">SkipValidation</h2>
<!-- backwards compatibility -->
<a id="schemaskipvalidation"></a>
<a id="schema_SkipValidation"></a>
<a id="tocSskipvalidation"></a>
<a id="tocsskipvalidation"></a>

```json
true
```

<h2 id="tocS_PutBucketNotificationConfigurationRequest">PutBucketNotificationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketnotificationconfigurationrequest"></a>
<a id="schema_PutBucketNotificationConfigurationRequest"></a>
<a id="tocSputbucketnotificationconfigurationrequest"></a>
<a id="tocsputbucketnotificationconfigurationrequest"></a>

```json
{
  "NotificationConfiguration": {
    "TopicConfigurations": {},
    "QueueConfigurations": {},
    "LambdaFunctionConfigurations": {},
    "EventBridgeConfiguration": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationConfiguration|[NotificationConfiguration](#schemanotificationconfiguration)|true|none|A container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off for the bucket.|

<h2 id="tocS_PutBucketNotificationRequest">PutBucketNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketnotificationrequest"></a>
<a id="schema_PutBucketNotificationRequest"></a>
<a id="tocSputbucketnotificationrequest"></a>
<a id="tocsputbucketnotificationrequest"></a>

```json
{
  "NotificationConfiguration": {
    "QueueConfiguration": {
      "Event": "s3:ObjectCreated:Put",
      "Events": [
        "s3:ObjectCreated:Put"
      ],
      "Id": "MDQ2OGQ4NDEtOTBmNi00YTM4LTk0NzYtZDIwN2I3NWQ1NjIx",
      "Queue": "arn:aws:sqs:us-east-1:acct-id:S3ObjectCreatedEventQueue"
    },
    "TopicConfiguration": {
      "Event": "s3:ObjectCreated:Copy",
      "Events": [
        "s3:ObjectCreated:Copy"
      ],
      "Id": "YTVkMWEzZGUtNTY1NS00ZmE2LWJjYjktMmRlY2QwODFkNTJi",
      "Topic": "arn:aws:sns:us-east-1:acct-id:S3ObjectCreatedEventTopic"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationConfiguration|object|true|none|none|

<h2 id="tocS_PutBucketOwnershipControlsRequest">PutBucketOwnershipControlsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketownershipcontrolsrequest"></a>
<a id="schema_PutBucketOwnershipControlsRequest"></a>
<a id="tocSputbucketownershipcontrolsrequest"></a>
<a id="tocsputbucketownershipcontrolsrequest"></a>

```json
{
  "OwnershipControls": {
    "Rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwnershipControls|object|true|none|none|

<h2 id="tocS_PutBucketPolicyRequest">PutBucketPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketpolicyrequest"></a>
<a id="schema_PutBucketPolicyRequest"></a>
<a id="tocSputbucketpolicyrequest"></a>
<a id="tocsputbucketpolicyrequest"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|true|none|none|

<h2 id="tocS_PutBucketReplicationRequest">PutBucketReplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketreplicationrequest"></a>
<a id="schema_PutBucketReplicationRequest"></a>
<a id="tocSputbucketreplicationrequest"></a>
<a id="tocsputbucketreplicationrequest"></a>

```json
{
  "ReplicationConfiguration": {
    "Role": {},
    "Rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationConfiguration|[ReplicationConfiguration](#schemareplicationconfiguration)|true|none|A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.|

<h2 id="tocS_RequestPaymentConfiguration">RequestPaymentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemarequestpaymentconfiguration"></a>
<a id="schema_RequestPaymentConfiguration"></a>
<a id="tocSrequestpaymentconfiguration"></a>
<a id="tocsrequestpaymentconfiguration"></a>

```json
{
  "Payer": {}
}
```

Container for Payer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Payer|object|true|none|none|

<h2 id="tocS_PutBucketRequestPaymentRequest">PutBucketRequestPaymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketrequestpaymentrequest"></a>
<a id="schema_PutBucketRequestPaymentRequest"></a>
<a id="tocSputbucketrequestpaymentrequest"></a>
<a id="tocsputbucketrequestpaymentrequest"></a>

```json
{
  "RequestPaymentConfiguration": {
    "Payer": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestPaymentConfiguration|object|true|none|none|

<h2 id="tocS_Tagging">Tagging</h2>
<!-- backwards compatibility -->
<a id="schematagging"></a>
<a id="schema_Tagging"></a>
<a id="tocStagging"></a>
<a id="tocstagging"></a>

```json
{
  "TagSet": {}
}
```

Container for <code>TagSet</code> elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagSet|object|true|none|none|

<h2 id="tocS_PutBucketTaggingRequest">PutBucketTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbuckettaggingrequest"></a>
<a id="schema_PutBucketTaggingRequest"></a>
<a id="tocSputbuckettaggingrequest"></a>
<a id="tocsputbuckettaggingrequest"></a>

```json
{
  "Tagging": {
    "TagSet": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tagging|object|true|none|none|

<h2 id="tocS_VersioningConfiguration">VersioningConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaversioningconfiguration"></a>
<a id="schema_VersioningConfiguration"></a>
<a id="tocSversioningconfiguration"></a>
<a id="tocsversioningconfiguration"></a>

```json
{
  "MFADelete": {},
  "Status": {}
}
```

Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT Bucket versioning</a> in the <i>Amazon S3 API Reference</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MFADelete|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_PutBucketVersioningRequest">PutBucketVersioningRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketversioningrequest"></a>
<a id="schema_PutBucketVersioningRequest"></a>
<a id="tocSputbucketversioningrequest"></a>
<a id="tocsputbucketversioningrequest"></a>

```json
{
  "VersioningConfiguration": {
    "MFADelete": {},
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VersioningConfiguration|object|true|none|none|

<h2 id="tocS_WebsiteConfiguration">WebsiteConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemawebsiteconfiguration"></a>
<a id="schema_WebsiteConfiguration"></a>
<a id="tocSwebsiteconfiguration"></a>
<a id="tocswebsiteconfiguration"></a>

```json
{
  "ErrorDocument": {
    "Key": {}
  },
  "IndexDocument": {
    "Suffix": {}
  },
  "RedirectAllRequestsTo": {
    "HostName": {},
    "Protocol": {}
  },
  "RoutingRules": {}
}
```

Specifies website configuration parameters for an Amazon S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorDocument|object|false|none|none|
|IndexDocument|object|false|none|none|
|RedirectAllRequestsTo|object|false|none|none|
|RoutingRules|object|false|none|none|

<h2 id="tocS_PutBucketWebsiteRequest">PutBucketWebsiteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketwebsiterequest"></a>
<a id="schema_PutBucketWebsiteRequest"></a>
<a id="tocSputbucketwebsiterequest"></a>
<a id="tocsputbucketwebsiterequest"></a>

```json
{
  "WebsiteConfiguration": {
    "ErrorDocument": {
      "Key": {}
    },
    "IndexDocument": {
      "Suffix": {}
    },
    "RedirectAllRequestsTo": {
      "HostName": {},
      "Protocol": {}
    },
    "RoutingRules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebsiteConfiguration|object|true|none|none|

<h2 id="tocS_PutObjectAclRequest">PutObjectAclRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputobjectaclrequest"></a>
<a id="schema_PutObjectAclRequest"></a>
<a id="tocSputobjectaclrequest"></a>
<a id="tocsputobjectaclrequest"></a>

```json
{
  "AccessControlPolicy": {
    "Grants": {},
    "Owner": {
      "DisplayName": {},
      "ID": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessControlPolicy|object|false|none|none|

<h2 id="tocS_PutObjectLegalHoldRequest">PutObjectLegalHoldRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputobjectlegalholdrequest"></a>
<a id="schema_PutObjectLegalHoldRequest"></a>
<a id="tocSputobjectlegalholdrequest"></a>
<a id="tocsputobjectlegalholdrequest"></a>

```json
{
  "LegalHold": {
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LegalHold|object|false|none|none|

<h2 id="tocS_PutObjectLockConfigurationRequest">PutObjectLockConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputobjectlockconfigurationrequest"></a>
<a id="schema_PutObjectLockConfigurationRequest"></a>
<a id="tocSputobjectlockconfigurationrequest"></a>
<a id="tocsputobjectlockconfigurationrequest"></a>

```json
{
  "ObjectLockConfiguration": {
    "ObjectLockEnabled": {},
    "Rule": {
      "DefaultRetention": {
        "Mode": {},
        "Days": {},
        "Years": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectLockConfiguration|object|false|none|none|

<h2 id="tocS_PutObjectRequest">PutObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputobjectrequest"></a>
<a id="schema_PutObjectRequest"></a>
<a id="tocSputobjectrequest"></a>
<a id="tocsputobjectrequest"></a>

```json
{
  "Body": {},
  "Metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|false|none|none|
|Metadata|object|false|none|none|

<h2 id="tocS_PutObjectRetentionRequest">PutObjectRetentionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputobjectretentionrequest"></a>
<a id="schema_PutObjectRetentionRequest"></a>
<a id="tocSputobjectretentionrequest"></a>
<a id="tocsputobjectretentionrequest"></a>

```json
{
  "Retention": {
    "Mode": {},
    "RetainUntilDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Retention|object|false|none|none|

<h2 id="tocS_PutObjectTaggingRequest">PutObjectTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputobjecttaggingrequest"></a>
<a id="schema_PutObjectTaggingRequest"></a>
<a id="tocSputobjecttaggingrequest"></a>
<a id="tocsputobjecttaggingrequest"></a>

```json
{
  "Tagging": {
    "TagSet": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tagging|object|true|none|none|

<h2 id="tocS_PutPublicAccessBlockRequest">PutPublicAccessBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputpublicaccessblockrequest"></a>
<a id="schema_PutPublicAccessBlockRequest"></a>
<a id="tocSputpublicaccessblockrequest"></a>
<a id="tocsputpublicaccessblockrequest"></a>

```json
{
  "PublicAccessBlockConfiguration": {
    "BlockPublicAcls": {},
    "IgnorePublicAcls": {},
    "BlockPublicPolicy": {},
    "RestrictPublicBuckets": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicAccessBlockConfiguration|object|true|none|none|

<h2 id="tocS_QueueArn">QueueArn</h2>
<!-- backwards compatibility -->
<a id="schemaqueuearn"></a>
<a id="schema_QueueArn"></a>
<a id="tocSqueuearn"></a>
<a id="tocsqueuearn"></a>

```json
"string"
```

<h2 id="tocS_QueueConfiguration">QueueConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaqueueconfiguration"></a>
<a id="schema_QueueConfiguration"></a>
<a id="tocSqueueconfiguration"></a>
<a id="tocsqueueconfiguration"></a>

```json
{
  "Id": "string",
  "QueueArn": {},
  "Events": {},
  "Filter": {
    "Key": {
      "FilterRules": {}
    }
  }
}
```

Specifies the configuration for publishing messages to an Amazon Simple Queue Service (Amazon SQS) queue when Amazon S3 detects specified events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|[NotificationId](#schemanotificationid)|false|none|An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.|
|QueueArn|object|true|none|none|
|Events|object|true|none|none|
|Filter|[NotificationConfigurationFilter](#schemanotificationconfigurationfilter)|false|none|Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html">Configuring event notifications using object key name filtering</a> in the <i>Amazon S3 User Guide</i>.|

<h2 id="tocS_RecordsEvent">RecordsEvent</h2>
<!-- backwards compatibility -->
<a id="schemarecordsevent"></a>
<a id="schema_RecordsEvent"></a>
<a id="tocSrecordsevent"></a>
<a id="tocsrecordsevent"></a>

```json
{
  "Payload": {}
}
```

The container for the records event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Payload|object|false|none|none|

<h2 id="tocS_ReplaceKeyPrefixWith">ReplaceKeyPrefixWith</h2>
<!-- backwards compatibility -->
<a id="schemareplacekeyprefixwith"></a>
<a id="schema_ReplaceKeyPrefixWith"></a>
<a id="tocSreplacekeyprefixwith"></a>
<a id="tocsreplacekeyprefixwith"></a>

```json
"string"
```

<h2 id="tocS_ReplaceKeyWith">ReplaceKeyWith</h2>
<!-- backwards compatibility -->
<a id="schemareplacekeywith"></a>
<a id="schema_ReplaceKeyWith"></a>
<a id="tocSreplacekeywith"></a>
<a id="tocsreplacekeywith"></a>

```json
"string"
```

<h2 id="tocS_Redirect">Redirect</h2>
<!-- backwards compatibility -->
<a id="schemaredirect"></a>
<a id="schema_Redirect"></a>
<a id="tocSredirect"></a>
<a id="tocsredirect"></a>

```json
{
  "HostName": {},
  "HttpRedirectCode": {},
  "Protocol": {},
  "ReplaceKeyPrefixWith": {},
  "ReplaceKeyWith": {}
}
```

Specifies how requests are redirected. In the event of an error, you can specify a different error code to return.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostName|object|false|none|none|
|HttpRedirectCode|object|false|none|none|
|Protocol|object|false|none|none|
|ReplaceKeyPrefixWith|object|false|none|none|
|ReplaceKeyWith|object|false|none|none|

<h2 id="tocS_ReplicaModificationsStatus">ReplicaModificationsStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplicamodificationsstatus"></a>
<a id="schema_ReplicaModificationsStatus"></a>
<a id="tocSreplicamodificationsstatus"></a>
<a id="tocsreplicamodificationsstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_ReplicaModifications">ReplicaModifications</h2>
<!-- backwards compatibility -->
<a id="schemareplicamodifications"></a>
<a id="schema_ReplicaModifications"></a>
<a id="tocSreplicamodifications"></a>
<a id="tocsreplicamodifications"></a>

```json
{
  "Status": {}
}
```

<p>A filter that you can specify for selection for modifications on replicas. Amazon S3 doesn't replicate replica modifications by default. In the latest version of replication configuration (when <code>Filter</code> is specified), you can specify this element and set the status to <code>Enabled</code> to replicate modifications on replicas. </p> <note> <p> If you don't specify the <code>Filter</code> element, Amazon S3 assumes that the replication configuration is the earlier version, V1. In the earlier version, this element is not allowed.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_ReplicationRuleFilter">ReplicationRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrulefilter"></a>
<a id="schema_ReplicationRuleFilter"></a>
<a id="tocSreplicationrulefilter"></a>
<a id="tocsreplicationrulefilter"></a>

```json
{
  "Prefix": {},
  "Tag": {
    "Key": {},
    "Value": {}
  },
  "And": {
    "Prefix": {},
    "Tags": {}
  }
}
```

A filter that identifies the subset of objects to which the replication rule applies. A <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or an <code>And</code> child element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tag|object|false|none|none|
|And|object|false|none|none|

<h2 id="tocS_ReplicationRuleStatus">ReplicationRuleStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrulestatus"></a>
<a id="schema_ReplicationRuleStatus"></a>
<a id="tocSreplicationrulestatus"></a>
<a id="tocsreplicationrulestatus"></a>

```json
"Enabled"
```

<h2 id="tocS_SourceSelectionCriteria">SourceSelectionCriteria</h2>
<!-- backwards compatibility -->
<a id="schemasourceselectioncriteria"></a>
<a id="schema_SourceSelectionCriteria"></a>
<a id="tocSsourceselectioncriteria"></a>
<a id="tocssourceselectioncriteria"></a>

```json
{
  "SseKmsEncryptedObjects": {
    "Status": {}
  },
  "ReplicaModifications": {
    "Status": {}
  }
}
```

A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using a customer managed key stored in Amazon Web Services Key Management Service (SSE-KMS).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SseKmsEncryptedObjects|object|false|none|none|
|ReplicaModifications|object|false|none|none|

<h2 id="tocS_ReplicationRule">ReplicationRule</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrule"></a>
<a id="schema_ReplicationRule"></a>
<a id="tocSreplicationrule"></a>
<a id="tocsreplicationrule"></a>

```json
{
  "ID": {},
  "Priority": {},
  "Prefix": {},
  "Filter": {
    "Prefix": {},
    "Tag": {
      "Key": {},
      "Value": {}
    },
    "And": {
      "Prefix": {},
      "Tags": {}
    }
  },
  "Status": {},
  "SourceSelectionCriteria": {
    "SseKmsEncryptedObjects": {
      "Status": {}
    },
    "ReplicaModifications": {
      "Status": {}
    }
  },
  "ExistingObjectReplication": {
    "Status": {}
  },
  "Destination": {
    "Bucket": {},
    "Account": {},
    "StorageClass": {},
    "AccessControlTranslation": {
      "Owner": {}
    },
    "EncryptionConfiguration": {
      "ReplicaKmsKeyID": {}
    },
    "ReplicationTime": {
      "Status": {},
      "Time": {
        "Minutes": {}
      }
    },
    "Metrics": {
      "Status": {},
      "EventThreshold": {
        "Minutes": {}
      }
    }
  },
  "DeleteMarkerReplication": {
    "Status": {}
  }
}
```

Specifies which Amazon S3 objects to replicate and where to store the replicas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|object|false|none|none|
|Priority|object|false|none|none|
|Prefix|object|false|none|none|
|Filter|[ReplicationRuleFilter](#schemareplicationrulefilter)|false|none|A filter that identifies the subset of objects to which the replication rule applies. A <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or an <code>And</code> child element.|
|Status|object|true|none|none|
|SourceSelectionCriteria|object|false|none|none|
|ExistingObjectReplication|object|false|none|none|
|Destination|object|true|none|none|
|DeleteMarkerReplication|[DeleteMarkerReplication](#schemadeletemarkerreplication)|false|none|<p>Specifies whether Amazon S3 replicates delete markers. If you specify a <code>Filter</code> in your replication configuration, you must also include a <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a <code>Tag</code> element, the <code>DeleteMarkerReplication</code> <code>Status</code> must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>. </p> <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html">Basic Rule Configuration</a>. </p> <note> <p>If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p> </note>|

<h2 id="tocS_ReplicationRuleAndOperator">ReplicationRuleAndOperator</h2>
<!-- backwards compatibility -->
<a id="schemareplicationruleandoperator"></a>
<a id="schema_ReplicationRuleAndOperator"></a>
<a id="tocSreplicationruleandoperator"></a>
<a id="tocsreplicationruleandoperator"></a>

```json
{
  "Prefix": {},
  "Tags": {}
}
```

<p>A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. </p> <p>For example:</p> <ul> <li> <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in an <code>And</code> tag. </p> </li> <li> <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an <code>And</code> tag.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ReplicationTimeStatus">ReplicationTimeStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtimestatus"></a>
<a id="schema_ReplicationTimeStatus"></a>
<a id="tocSreplicationtimestatus"></a>
<a id="tocsreplicationtimestatus"></a>

```json
"Enabled"
```

<h2 id="tocS_RequestProgress">RequestProgress</h2>
<!-- backwards compatibility -->
<a id="schemarequestprogress"></a>
<a id="schema_RequestProgress"></a>
<a id="tocSrequestprogress"></a>
<a id="tocsrequestprogress"></a>

```json
{
  "Enabled": {}
}
```

Container for specifying if periodic <code>QueryProgress</code> messages should be sent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

<h2 id="tocS_RequestRoute">RequestRoute</h2>
<!-- backwards compatibility -->
<a id="schemarequestroute"></a>
<a id="schema_RequestRoute"></a>
<a id="tocSrequestroute"></a>
<a id="tocsrequestroute"></a>

```json
"string"
```

<h2 id="tocS_RequestToken">RequestToken</h2>
<!-- backwards compatibility -->
<a id="schemarequesttoken"></a>
<a id="schema_RequestToken"></a>
<a id="tocSrequesttoken"></a>
<a id="tocsrequesttoken"></a>

```json
"string"
```

<h2 id="tocS_RestoreExpiryDate">RestoreExpiryDate</h2>
<!-- backwards compatibility -->
<a id="schemarestoreexpirydate"></a>
<a id="schema_RestoreExpiryDate"></a>
<a id="tocSrestoreexpirydate"></a>
<a id="tocsrestoreexpirydate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_RestoreOutputPath">RestoreOutputPath</h2>
<!-- backwards compatibility -->
<a id="schemarestoreoutputpath"></a>
<a id="schema_RestoreOutputPath"></a>
<a id="tocSrestoreoutputpath"></a>
<a id="tocsrestoreoutputpath"></a>

```json
"string"
```

<h2 id="tocS_RestoreRequest">RestoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestorerequest"></a>
<a id="schema_RestoreRequest"></a>
<a id="tocSrestorerequest"></a>
<a id="tocsrestorerequest"></a>

```json
{
  "Days": {},
  "GlacierJobParameters": {
    "Tier": {}
  },
  "Type": {},
  "Tier": {},
  "Description": {},
  "SelectParameters": {
    "InputSerialization": {
      "CSV": {
        "FileHeaderInfo": {},
        "Comments": {},
        "QuoteEscapeCharacter": {},
        "RecordDelimiter": {},
        "FieldDelimiter": {},
        "QuoteCharacter": {},
        "AllowQuotedRecordDelimiter": {}
      },
      "CompressionType": {},
      "JSON": {
        "Type": {}
      },
      "Parquet": {}
    },
    "ExpressionType": {},
    "Expression": {},
    "OutputSerialization": {
      "CSV": {
        "QuoteFields": {},
        "QuoteEscapeCharacter": {},
        "RecordDelimiter": {},
        "FieldDelimiter": {},
        "QuoteCharacter": {}
      },
      "JSON": {
        "RecordDelimiter": {}
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
        "TagSet": {}
      },
      "UserMetadata": {},
      "StorageClass": {}
    }
  }
}
```

Container for restore job parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Days|object|false|none|none|
|GlacierJobParameters|object|false|none|none|
|Type|object|false|none|none|
|Tier|object|false|none|none|
|Description|object|false|none|none|
|SelectParameters|object|false|none|none|
|OutputLocation|object|false|none|none|

<h2 id="tocS_RestoreObjectRequest">RestoreObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestoreobjectrequest"></a>
<a id="schema_RestoreObjectRequest"></a>
<a id="tocSrestoreobjectrequest"></a>
<a id="tocsrestoreobjectrequest"></a>

```json
{
  "RestoreRequest": {
    "Days": {},
    "GlacierJobParameters": {
      "Tier": {}
    },
    "Type": {},
    "Tier": {},
    "Description": {},
    "SelectParameters": {
      "InputSerialization": {
        "CSV": {
          "FileHeaderInfo": {},
          "Comments": {},
          "QuoteEscapeCharacter": {},
          "RecordDelimiter": {},
          "FieldDelimiter": {},
          "QuoteCharacter": {},
          "AllowQuotedRecordDelimiter": {}
        },
        "CompressionType": {},
        "JSON": {
          "Type": {}
        },
        "Parquet": {}
      },
      "ExpressionType": {},
      "Expression": {},
      "OutputSerialization": {
        "CSV": {
          "QuoteFields": {},
          "QuoteEscapeCharacter": {},
          "RecordDelimiter": {},
          "FieldDelimiter": {},
          "QuoteCharacter": {}
        },
        "JSON": {
          "RecordDelimiter": {}
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
          "TagSet": {}
        },
        "UserMetadata": {},
        "StorageClass": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RestoreRequest|[RestoreRequest](#schemarestorerequest)|false|none|Container for restore job parameters.|

<h2 id="tocS_RoutingRule">RoutingRule</h2>
<!-- backwards compatibility -->
<a id="schemaroutingrule"></a>
<a id="schema_RoutingRule"></a>
<a id="tocSroutingrule"></a>
<a id="tocsroutingrule"></a>

```json
{
  "Condition": {
    "HttpErrorCodeReturnedEquals": {},
    "KeyPrefixEquals": {}
  },
  "Redirect": {
    "HostName": {},
    "HttpRedirectCode": {},
    "Protocol": {},
    "ReplaceKeyPrefixWith": {},
    "ReplaceKeyWith": {}
  }
}
```

Specifies the redirect behavior and when a redirect is applied. For more information about routing rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html#advanced-conditional-redirects">Configuring advanced conditional redirects</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Condition|object|false|none|none|
|Redirect|object|true|none|none|

<h2 id="tocS_Transition">Transition</h2>
<!-- backwards compatibility -->
<a id="schematransition"></a>
<a id="schema_Transition"></a>
<a id="tocStransition"></a>
<a id="tocstransition"></a>

```json
{
  "Date": {},
  "Days": {},
  "StorageClass": {}
}
```

Specifies when an object transitions to a specified storage class. For more information about Amazon S3 lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html">Transitioning Objects Using Amazon S3 Lifecycle</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|object|false|none|none|
|Days|object|false|none|none|
|StorageClass|object|false|none|none|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "Expiration": {
    "Date": {},
    "Days": {},
    "ExpiredObjectDeleteMarker": {}
  },
  "ID": {},
  "Prefix": {},
  "Status": {},
  "Transition": {
    "Date": {},
    "Days": {},
    "StorageClass": {}
  },
  "NoncurrentVersionTransition": {
    "NoncurrentDays": {},
    "StorageClass": {},
    "NewerNoncurrentVersions": {}
  },
  "NoncurrentVersionExpiration": {
    "NoncurrentDays": {},
    "NewerNoncurrentVersions": {}
  },
  "AbortIncompleteMultipartUpload": {
    "DaysAfterInitiation": {}
  }
}
```

Specifies lifecycle rules for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlifecycle.html">Put Bucket Lifecycle Configuration</a> in the <i>Amazon S3 API Reference</i>. For examples, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html#API_PutBucketLifecycleConfiguration_Examples">Put Bucket Lifecycle Configuration Examples</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expiration|object|false|none|none|
|ID|object|false|none|none|
|Prefix|object|true|none|none|
|Status|object|true|none|none|
|Transition|object|false|none|none|
|NoncurrentVersionTransition|[NoncurrentVersionTransition](#schemanoncurrentversiontransition)|false|none|Container for the transition rule that describes when noncurrent objects transition to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER_IR</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER_IR</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class at a specific period in the object's lifetime.|
|NoncurrentVersionExpiration|[NoncurrentVersionExpiration](#schemanoncurrentversionexpiration)|false|none|Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.|
|AbortIncompleteMultipartUpload|[AbortIncompleteMultipartUpload](#schemaabortincompletemultipartupload)|false|none|Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config"> Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a> in the <i>Amazon S3 User Guide</i>.|

<h2 id="tocS_UserMetadata">UserMetadata</h2>
<!-- backwards compatibility -->
<a id="schemausermetadata"></a>
<a id="schema_UserMetadata"></a>
<a id="tocSusermetadata"></a>
<a id="tocsusermetadata"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ScanRange">ScanRange</h2>
<!-- backwards compatibility -->
<a id="schemascanrange"></a>
<a id="schema_ScanRange"></a>
<a id="tocSscanrange"></a>
<a id="tocsscanrange"></a>

```json
{
  "Start": {},
  "End": {}
}
```

Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional, but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Start|object|false|none|none|
|End|object|false|none|none|

<h2 id="tocS_StatsEvent">StatsEvent</h2>
<!-- backwards compatibility -->
<a id="schemastatsevent"></a>
<a id="schema_StatsEvent"></a>
<a id="tocSstatsevent"></a>
<a id="tocsstatsevent"></a>

```json
{
  "Details": {
    "BytesScanned": {},
    "BytesProcessed": {},
    "BytesReturned": {}
  }
}
```

Container for the Stats Event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Details|object|false|none|none|

<h2 id="tocS_SelectObjectContentEventStream">SelectObjectContentEventStream</h2>
<!-- backwards compatibility -->
<a id="schemaselectobjectcontenteventstream"></a>
<a id="schema_SelectObjectContentEventStream"></a>
<a id="tocSselectobjectcontenteventstream"></a>
<a id="tocsselectobjectcontenteventstream"></a>

```json
{
  "Records": {
    "Payload": {}
  },
  "Stats": {
    "Details": {
      "BytesScanned": {},
      "BytesProcessed": {},
      "BytesReturned": {}
    }
  },
  "Progress": {
    "Details": {
      "BytesScanned": {},
      "BytesProcessed": {},
      "BytesReturned": {}
    }
  },
  "Cont": {},
  "End": {}
}
```

The container for selecting objects from a content event stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Records|object|false|none|none|
|Stats|object|false|none|none|
|Progress|object|false|none|none|
|Cont|object|false|none|none|
|End|object|false|none|none|

<h2 id="tocS_SelectObjectContentRequest">SelectObjectContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaselectobjectcontentrequest"></a>
<a id="schema_SelectObjectContentRequest"></a>
<a id="tocSselectobjectcontentrequest"></a>
<a id="tocsselectobjectcontentrequest"></a>

```json
{
  "Expression": {},
  "ExpressionType": {},
  "RequestProgress": {
    "Enabled": {}
  },
  "InputSerialization": {
    "CSV": {
      "FileHeaderInfo": {},
      "Comments": {},
      "QuoteEscapeCharacter": {},
      "RecordDelimiter": {},
      "FieldDelimiter": {},
      "QuoteCharacter": {},
      "AllowQuotedRecordDelimiter": {}
    },
    "CompressionType": {},
    "JSON": {
      "Type": {}
    },
    "Parquet": {}
  },
  "OutputSerialization": {
    "CSV": {
      "QuoteFields": {},
      "QuoteEscapeCharacter": {},
      "RecordDelimiter": {},
      "FieldDelimiter": {},
      "QuoteCharacter": {}
    },
    "JSON": {
      "RecordDelimiter": {}
    }
  },
  "ScanRange": {
    "Start": {},
    "End": {}
  }
}
```

Request to filter the contents of an Amazon S3 object based on a simple Structured Query Language (SQL) statement. In the request, along with the SQL expression, you must specify a data serialization format (JSON or CSV) of the object. Amazon S3 uses this to parse object data into records. It returns only records that match the specified SQL expression. You must also specify the data serialization format for the response. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html">S3Select API Documentation</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|object|true|none|none|
|ExpressionType|object|true|none|none|
|RequestProgress|object|false|none|none|
|InputSerialization|object|true|none|none|
|OutputSerialization|object|true|none|none|
|ScanRange|object|false|none|none|

<h2 id="tocS_ServerSideEncryptionByDefault">ServerSideEncryptionByDefault</h2>
<!-- backwards compatibility -->
<a id="schemaserversideencryptionbydefault"></a>
<a id="schema_ServerSideEncryptionByDefault"></a>
<a id="tocSserversideencryptionbydefault"></a>
<a id="tocsserversideencryptionbydefault"></a>

```json
{
  "SSEAlgorithm": {},
  "KMSMasterKeyID": {}
}
```

Describes the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied. If you don't specify a customer managed key at configuration, Amazon S3 automatically creates an Amazon Web Services KMS key in your Amazon Web Services account the first time that you add an object encrypted with SSE-KMS to a bucket. By default, Amazon S3 uses this KMS key for SSE-KMS. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html">PUT Bucket encryption</a> in the <i>Amazon S3 API Reference</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SSEAlgorithm|object|true|none|none|
|KMSMasterKeyID|object|false|none|none|

<h2 id="tocS_ServerSideEncryptionRule">ServerSideEncryptionRule</h2>
<!-- backwards compatibility -->
<a id="schemaserversideencryptionrule"></a>
<a id="schema_ServerSideEncryptionRule"></a>
<a id="tocSserversideencryptionrule"></a>
<a id="tocsserversideencryptionrule"></a>

```json
{
  "ApplyServerSideEncryptionByDefault": {
    "SSEAlgorithm": {},
    "KMSMasterKeyID": {}
  },
  "BucketKeyEnabled": {}
}
```

Specifies the default server-side encryption configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplyServerSideEncryptionByDefault|object|false|none|none|
|BucketKeyEnabled|object|false|none|none|

<h2 id="tocS_SseKmsEncryptedObjects">SseKmsEncryptedObjects</h2>
<!-- backwards compatibility -->
<a id="schemassekmsencryptedobjects"></a>
<a id="schema_SseKmsEncryptedObjects"></a>
<a id="tocSssekmsencryptedobjects"></a>
<a id="tocsssekmsencryptedobjects"></a>

```json
{
  "Status": {}
}
```

A container for filter information for the selection of S3 objects encrypted with Amazon Web Services KMS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_SseKmsEncryptedObjectsStatus">SseKmsEncryptedObjectsStatus</h2>
<!-- backwards compatibility -->
<a id="schemassekmsencryptedobjectsstatus"></a>
<a id="schema_SseKmsEncryptedObjectsStatus"></a>
<a id="tocSssekmsencryptedobjectsstatus"></a>
<a id="tocsssekmsencryptedobjectsstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_Stats">Stats</h2>
<!-- backwards compatibility -->
<a id="schemastats"></a>
<a id="schema_Stats"></a>
<a id="tocSstats"></a>
<a id="tocsstats"></a>

```json
{
  "BytesScanned": {},
  "BytesProcessed": {},
  "BytesReturned": {}
}
```

Container for the stats details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BytesScanned|object|false|none|none|
|BytesProcessed|object|false|none|none|
|BytesReturned|object|false|none|none|

<h2 id="tocS_StorageClassAnalysisDataExport">StorageClassAnalysisDataExport</h2>
<!-- backwards compatibility -->
<a id="schemastorageclassanalysisdataexport"></a>
<a id="schema_StorageClassAnalysisDataExport"></a>
<a id="tocSstorageclassanalysisdataexport"></a>
<a id="tocsstorageclassanalysisdataexport"></a>

```json
{
  "OutputSchemaVersion": {},
  "Destination": {
    "S3BucketDestination": {
      "Format": {},
      "BucketAccountId": {},
      "Bucket": {},
      "Prefix": {}
    }
  }
}
```

Container for data related to the storage class analysis for an Amazon S3 bucket for export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputSchemaVersion|object|true|none|none|
|Destination|object|true|none|none|

<h2 id="tocS_StorageClassAnalysisSchemaVersion">StorageClassAnalysisSchemaVersion</h2>
<!-- backwards compatibility -->
<a id="schemastorageclassanalysisschemaversion"></a>
<a id="schema_StorageClassAnalysisSchemaVersion"></a>
<a id="tocSstorageclassanalysisschemaversion"></a>
<a id="tocsstorageclassanalysisschemaversion"></a>

```json
"V_1"
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

<h2 id="tocS_TargetGrant">TargetGrant</h2>
<!-- backwards compatibility -->
<a id="schematargetgrant"></a>
<a id="schema_TargetGrant"></a>
<a id="tocStargetgrant"></a>
<a id="tocstargetgrant"></a>

```json
{
  "Grantee": {
    "DisplayName": {},
    "EmailAddress": {},
    "ID": {},
    "Type": {},
    "URI": {}
  },
  "Permission": {}
}
```

<p>Container for granting information.</p> <p>Buckets that use the bucket owner enforced setting for Object Ownership don't support target grants. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html#grant-log-delivery-permissions-general">Permissions server access log delivery</a> in the <i>Amazon S3 User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Grantee|object|false|none|none|
|Permission|object|false|none|none|

<h2 id="tocS_Tiering">Tiering</h2>
<!-- backwards compatibility -->
<a id="schematiering"></a>
<a id="schema_Tiering"></a>
<a id="tocStiering"></a>
<a id="tocstiering"></a>

```json
{
  "Days": {},
  "AccessTier": {}
}
```

The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without additional operational overhead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Days|object|true|none|none|
|AccessTier|object|true|none|none|

<h2 id="tocS_TopicArn">TopicArn</h2>
<!-- backwards compatibility -->
<a id="schematopicarn"></a>
<a id="schema_TopicArn"></a>
<a id="tocStopicarn"></a>
<a id="tocstopicarn"></a>

```json
"string"
```

<h2 id="tocS_TopicConfiguration">TopicConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematopicconfiguration"></a>
<a id="schema_TopicConfiguration"></a>
<a id="tocStopicconfiguration"></a>
<a id="tocstopicconfiguration"></a>

```json
{
  "Id": "string",
  "TopicArn": {},
  "Events": {},
  "Filter": {
    "Key": {
      "FilterRules": {}
    }
  }
}
```

A container for specifying the configuration for publication of messages to an Amazon Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|[NotificationId](#schemanotificationid)|false|none|An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.|
|TopicArn|object|true|none|none|
|Events|object|true|none|none|
|Filter|[NotificationConfigurationFilter](#schemanotificationconfigurationfilter)|false|none|Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html">Configuring event notifications using object key name filtering</a> in the <i>Amazon S3 User Guide</i>.|

<h2 id="tocS_UploadPartCopyRequest">UploadPartCopyRequest</h2>
<!-- backwards compatibility -->
<a id="schemauploadpartcopyrequest"></a>
<a id="schema_UploadPartCopyRequest"></a>
<a id="tocSuploadpartcopyrequest"></a>
<a id="tocsuploadpartcopyrequest"></a>

```json
{}
```

<h2 id="tocS_UploadPartRequest">UploadPartRequest</h2>
<!-- backwards compatibility -->
<a id="schemauploadpartrequest"></a>
<a id="schema_UploadPartRequest"></a>
<a id="tocSuploadpartrequest"></a>
<a id="tocsuploadpartrequest"></a>

```json
{
  "Body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|false|none|none|

<h2 id="tocS_WriteGetObjectResponseRequest">WriteGetObjectResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemawritegetobjectresponserequest"></a>
<a id="schema_WriteGetObjectResponseRequest"></a>
<a id="tocSwritegetobjectresponserequest"></a>
<a id="tocswritegetobjectresponserequest"></a>

```json
{
  "Body": {},
  "Metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|false|none|none|
|Metadata|object|false|none|none|
