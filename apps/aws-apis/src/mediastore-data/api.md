<h1 id="aws-elemental-mediastore-data-plane">AWS Elemental MediaStore Data Plane v2017-09-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An AWS Elemental MediaStore asset is an object, similar to an object in the Amazon S3 service. Objects are the fundamental entities that are stored in AWS Elemental MediaStore.

Base URLs:

* <a href="http://data.mediastore.us-east-1.amazonaws.com">http://data.mediastore.us-east-1.amazonaws.com</a> - The MediaStore Data multi-region endpoint

* <a href="https://data.mediastore.us-east-1.amazonaws.com">https://data.mediastore.us-east-1.amazonaws.com</a> - The MediaStore Data multi-region endpoint

* <a href="http://data.mediastore.cn-north-1.amazonaws.com.cn">http://data.mediastore.cn-north-1.amazonaws.com.cn</a> - The MediaStore Data endpoint for China (Beijing) and China (Ningxia)

* <a href="https://data.mediastore.cn-north-1.amazonaws.com.cn">https://data.mediastore.cn-north-1.amazonaws.com.cn</a> - The MediaStore Data endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/mediastore/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-elemental-mediastore-data-plane-default">Default</h1>

## GetObject

<a id="opIdGetObject"></a>

> Code samples

```bash
curl https://mediastore-data.us-east-1.amazonaws.com/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{Path}`

Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.

<h3 id="getobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Path|path|string|true|<p>The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;</p> <p>For example, to upload the file <code>mlaw.avi</code> to the folder path <code>premium\canada</code> in the container <code>movies</code>, enter the path <code>premium/canada/mlaw.avi</code>.</p> <p>Do not include the container name in this path.</p> <p>If the path includes any folders that don't exist yet, the service creates them. For example, suppose you have an existing <code>premium/usa</code> subfolder. If you specify <code>premium/canada</code>, the service creates a <code>canada</code> subfolder in the <code>premium</code> folder. You then have two subfolders, <code>usa</code> and <code>canada</code>, in the <code>premium</code> folder. </p> <p>There is no correlation between the path to the source and the path (folders) in the container in AWS Elemental MediaStore.</p> <p>For more information about folders and how they exist in a container, see the <a href="http://docs.aws.amazon.com/mediastore/latest/ug/">AWS Elemental MediaStore User Guide</a>.</p> <p>The file name is the name that is assigned to the file that you upload. The file can have the same name inside and outside of AWS Elemental MediaStore, or it can have the same name. The file name can include or omit an extension. </p>|
|Range|header|string|false|The range bytes of an object to retrieve. For more information about the <code>Range</code> header, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35</a>. AWS Elemental MediaStore ignores this header for partially uploaded objects that have streaming upload availability.|
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
  "Body": {},
  "StatusCode": {}
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

<h3 id="getobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetObjectResponse](#schemagetobjectresponse)|
|480|480|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|481|481|ObjectNotFoundException|[ObjectNotFoundException](#schemaobjectnotfoundexception)|
|482|482|RequestedRangeNotSatisfiableException|[RequestedRangeNotSatisfiableException](#schemarequestedrangenotsatisfiableexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutObject

<a id="opIdPutObject"></a>

> Code samples

```bash
curl https://mediastore-data.us-east-1.amazonaws.com/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Body": "string"
  }'
```

`PUT /{Path}`

Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.

> Body parameter

```json
{
  "Body": "string"
}
```

<h3 id="putobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Path|path|string|true|<p>The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;</p> <p>For example, to upload the file <code>mlaw.avi</code> to the folder path <code>premium\canada</code> in the container <code>movies</code>, enter the path <code>premium/canada/mlaw.avi</code>.</p> <p>Do not include the container name in this path.</p> <p>If the path includes any folders that don't exist yet, the service creates them. For example, suppose you have an existing <code>premium/usa</code> subfolder. If you specify <code>premium/canada</code>, the service creates a <code>canada</code> subfolder in the <code>premium</code> folder. You then have two subfolders, <code>usa</code> and <code>canada</code>, in the <code>premium</code> folder. </p> <p>There is no correlation between the path to the source and the path (folders) in the container in AWS Elemental MediaStore.</p> <p>For more information about folders and how they exist in a container, see the <a href="http://docs.aws.amazon.com/mediastore/latest/ug/">AWS Elemental MediaStore User Guide</a>.</p> <p>The file name is the name that is assigned to the file that you upload. The file can have the same name inside and outside of AWS Elemental MediaStore, or it can have the same name. The file name can include or omit an extension. </p>|
|Content-Type|header|string|false|The content type of the object.|
|Cache-Control|header|string|false|<p>An optional <code>CacheControl</code> header that allows the caller to control the object's cache behavior. Headers can be passed in as specified in the HTTP at <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p> <p>Headers with a custom user-defined value are also accepted.</p>|
|x-amz-storage-class|header|string|false|Indicates the storage class of a <code>Put</code> request. Defaults to high-performance temporal storage class, and objects are persisted into durable storage shortly after being received.|
|x-amz-upload-availability|header|string|false|<p>Indicates the availability of an object while it is still uploading. If the value is set to <code>streaming</code>, the object is available for downloading after some initial buffering but before the object is uploaded completely. If the value is set to <code>standard</code>, the object is available for downloading only when it is uploaded completely. The default value for this header is <code>standard</code>.</p> <p>To use this header, you must also set the HTTP <code>Transfer-Encoding</code> header to <code>chunked</code>.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Body|body|string|true|The bytes to be stored. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-storage-class|TEMPORAL|
|x-amz-upload-availability|STANDARD|
|x-amz-upload-availability|STREAMING|

> Example responses

> 200 Response

```json
{
  "ContentSHA256": {},
  "ETag": {},
  "StorageClass": {}
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

<h3 id="putobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutObjectResponse](#schemaputobjectresponse)|
|480|480|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteObject

<a id="opIdDeleteObject"></a>

> Code samples

```bash
curl https://mediastore-data.us-east-1.amazonaws.com/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /{Path}`

Deletes an object at the specified path.

<h3 id="deleteobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Path|path|string|true|The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;|
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

> 482 Response

```json
null
```

<h3 id="deleteobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteObjectResponse](#schemadeleteobjectresponse)|
|480|480|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|481|481|ObjectNotFoundException|[ObjectNotFoundException](#schemaobjectnotfoundexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeObject

<a id="opIdDescribeObject"></a>

> Code samples

```bash
curl https://mediastore-data.us-east-1.amazonaws.com/string \
  -X HEAD \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`HEAD /{Path}`

Gets the headers for an object at the specified path.

<h3 id="describeobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Path|path|string|true|The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;|
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

> 482 Response

```json
null
```

<h3 id="describeobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeObjectResponse](#schemadescribeobjectresponse)|
|480|480|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|481|481|ObjectNotFoundException|[ObjectNotFoundException](#schemaobjectnotfoundexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListItems

<a id="opIdListItems"></a>

> Code samples

```bash
curl https://mediastore-data.us-east-1.amazonaws.com/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /`

Provides a list of metadata entries about folders and objects in the specified folder.

<h3 id="listitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Path|query|string|false|The path in the container from which to retrieve items. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;|
|MaxResults|query|integer|false|<p>The maximum number of results to return per API request. For example, you submit a <code>ListItems</code> request with <code>MaxResults</code> set at 500. Although 2,000 items match your request, the service returns no more than the first 500 items. (The service also returns a <code>NextToken</code> value that you can use to fetch the next batch of results.) The service might return fewer results than the <code>MaxResults</code> value.</p> <p>If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 1,000 results per page.</p>|
|NextToken|query|string|false|<p>The token that identifies which batch of results that you want to see. For example, you submit a <code>ListItems</code> request with <code>MaxResults</code> set at 500. The service returns the first batch of results (up to 500) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListItems</code> request a second time and specify the <code>NextToken</code> value.</p> <p>Tokens expire after 15 minutes.</p>|
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
  "Items": {},
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

<h3 id="listitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListItemsResponse](#schemalistitemsresponse)|
|480|480|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DeleteObjectResponse">DeleteObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobjectresponse"></a>
<a id="schema_DeleteObjectResponse"></a>
<a id="tocSdeleteobjectresponse"></a>
<a id="tocsdeleteobjectresponse"></a>

```json
{}
```

<h2 id="tocS_ContainerNotFoundException">ContainerNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemacontainernotfoundexception"></a>
<a id="schema_ContainerNotFoundException"></a>
<a id="tocScontainernotfoundexception"></a>
<a id="tocscontainernotfoundexception"></a>

```json
null
```

<h2 id="tocS_ObjectNotFoundException">ObjectNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaobjectnotfoundexception"></a>
<a id="schema_ObjectNotFoundException"></a>
<a id="tocSobjectnotfoundexception"></a>
<a id="tocsobjectnotfoundexception"></a>

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

<h2 id="tocS_DescribeObjectResponse">DescribeObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeobjectresponse"></a>
<a id="schema_DescribeObjectResponse"></a>
<a id="tocSdescribeobjectresponse"></a>
<a id="tocsdescribeobjectresponse"></a>

```json
{}
```

<h2 id="tocS_GetObjectResponse">GetObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectresponse"></a>
<a id="schema_GetObjectResponse"></a>
<a id="tocSgetobjectresponse"></a>
<a id="tocsgetobjectresponse"></a>

```json
{
  "Body": {},
  "StatusCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|false|none|none|
|StatusCode|object|false|none|none|

<h2 id="tocS_RequestedRangeNotSatisfiableException">RequestedRangeNotSatisfiableException</h2>
<!-- backwards compatibility -->
<a id="schemarequestedrangenotsatisfiableexception"></a>
<a id="schema_RequestedRangeNotSatisfiableException"></a>
<a id="tocSrequestedrangenotsatisfiableexception"></a>
<a id="tocsrequestedrangenotsatisfiableexception"></a>

```json
null
```

<h2 id="tocS_ListItemsResponse">ListItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistitemsresponse"></a>
<a id="schema_ListItemsResponse"></a>
<a id="tocSlistitemsresponse"></a>
<a id="tocslistitemsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PutObjectResponse">PutObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputobjectresponse"></a>
<a id="schema_PutObjectResponse"></a>
<a id="tocSputobjectresponse"></a>
<a id="tocsputobjectresponse"></a>

```json
{
  "ContentSHA256": {},
  "ETag": {},
  "StorageClass": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentSHA256|object|false|none|none|
|ETag|object|false|none|none|
|StorageClass|object|false|none|none|

<h2 id="tocS_ContentRangePattern">ContentRangePattern</h2>
<!-- backwards compatibility -->
<a id="schemacontentrangepattern"></a>
<a id="schema_ContentRangePattern"></a>
<a id="tocScontentrangepattern"></a>
<a id="tocscontentrangepattern"></a>

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

<h2 id="tocS_PathNaming">PathNaming</h2>
<!-- backwards compatibility -->
<a id="schemapathnaming"></a>
<a id="schema_PathNaming"></a>
<a id="tocSpathnaming"></a>
<a id="tocspathnaming"></a>

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

<h2 id="tocS_DescribeObjectRequest">DescribeObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeobjectrequest"></a>
<a id="schema_DescribeObjectRequest"></a>
<a id="tocSdescribeobjectrequest"></a>
<a id="tocsdescribeobjectrequest"></a>

```json
{}
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

<h2 id="tocS_NonNegativeLong">NonNegativeLong</h2>
<!-- backwards compatibility -->
<a id="schemanonnegativelong"></a>
<a id="schema_NonNegativeLong"></a>
<a id="tocSnonnegativelong"></a>
<a id="tocsnonnegativelong"></a>

```json
0
```

<h2 id="tocS_StringPrimitive">StringPrimitive</h2>
<!-- backwards compatibility -->
<a id="schemastringprimitive"></a>
<a id="schema_StringPrimitive"></a>
<a id="tocSstringprimitive"></a>
<a id="tocsstringprimitive"></a>

```json
"string"
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

<h2 id="tocS_RangePattern">RangePattern</h2>
<!-- backwards compatibility -->
<a id="schemarangepattern"></a>
<a id="schema_RangePattern"></a>
<a id="tocSrangepattern"></a>
<a id="tocsrangepattern"></a>

```json
"string"
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

<h2 id="tocS_PayloadBlob">PayloadBlob</h2>
<!-- backwards compatibility -->
<a id="schemapayloadblob"></a>
<a id="schema_PayloadBlob"></a>
<a id="tocSpayloadblob"></a>
<a id="tocspayloadblob"></a>

```json
"string"
```

<h2 id="tocS_statusCode">statusCode</h2>
<!-- backwards compatibility -->
<a id="schemastatuscode"></a>
<a id="schema_statusCode"></a>
<a id="tocSstatuscode"></a>
<a id="tocsstatuscode"></a>

```json
0
```

<h2 id="tocS_ItemName">ItemName</h2>
<!-- backwards compatibility -->
<a id="schemaitemname"></a>
<a id="schema_ItemName"></a>
<a id="tocSitemname"></a>
<a id="tocsitemname"></a>

```json
"string"
```

<h2 id="tocS_ItemType">ItemType</h2>
<!-- backwards compatibility -->
<a id="schemaitemtype"></a>
<a id="schema_ItemType"></a>
<a id="tocSitemtype"></a>
<a id="tocsitemtype"></a>

```json
"OBJECT"
```

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "Name": {},
  "Type": {},
  "ETag": {},
  "LastModified": {},
  "ContentType": {},
  "ContentLength": {}
}
```

A metadata entry for a folder or object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|false|none|none|
|ETag|object|false|none|none|
|LastModified|object|false|none|none|
|ContentType|object|false|none|none|
|ContentLength|object|false|none|none|

<h2 id="tocS_ItemList">ItemList</h2>
<!-- backwards compatibility -->
<a id="schemaitemlist"></a>
<a id="schema_ItemList"></a>
<a id="tocSitemlist"></a>
<a id="tocsitemlist"></a>

```json
[
  {
    "Name": {},
    "Type": {},
    "ETag": {},
    "LastModified": {},
    "ContentType": {},
    "ContentLength": {}
  }
]
```

<h2 id="tocS_ListPathNaming">ListPathNaming</h2>
<!-- backwards compatibility -->
<a id="schemalistpathnaming"></a>
<a id="schema_ListPathNaming"></a>
<a id="tocSlistpathnaming"></a>
<a id="tocslistpathnaming"></a>

```json
"string"
```

<h2 id="tocS_ListLimit">ListLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistlimit"></a>
<a id="schema_ListLimit"></a>
<a id="tocSlistlimit"></a>
<a id="tocslistlimit"></a>

```json
1
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_ListItemsRequest">ListItemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistitemsrequest"></a>
<a id="schema_ListItemsRequest"></a>
<a id="tocSlistitemsrequest"></a>
<a id="tocslistitemsrequest"></a>

```json
{}
```

<h2 id="tocS_StorageClass">StorageClass</h2>
<!-- backwards compatibility -->
<a id="schemastorageclass"></a>
<a id="schema_StorageClass"></a>
<a id="tocSstorageclass"></a>
<a id="tocsstorageclass"></a>

```json
"TEMPORAL"
```

<h2 id="tocS_UploadAvailability">UploadAvailability</h2>
<!-- backwards compatibility -->
<a id="schemauploadavailability"></a>
<a id="schema_UploadAvailability"></a>
<a id="tocSuploadavailability"></a>
<a id="tocsuploadavailability"></a>

```json
"STANDARD"
```

<h2 id="tocS_PutObjectRequest">PutObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputobjectrequest"></a>
<a id="schema_PutObjectRequest"></a>
<a id="tocSputobjectrequest"></a>
<a id="tocsputobjectrequest"></a>

```json
{
  "Body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|true|none|none|

<h2 id="tocS_SHA256Hash">SHA256Hash</h2>
<!-- backwards compatibility -->
<a id="schemasha256hash"></a>
<a id="schema_SHA256Hash"></a>
<a id="tocSsha256hash"></a>
<a id="tocssha256hash"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstri"
```
