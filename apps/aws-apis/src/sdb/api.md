<h1 id="amazon-simpledb">Amazon SimpleDB v2009-04-15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon SimpleDB is a web service providing the core database functions of data indexing and querying in the cloud. By offloading the time and effort associated with building and operating a web-scale database, SimpleDB provides developers the freedom to focus on application development. <p> A traditional, clustered relational database requires a sizable upfront capital outlay, is complex to design, and often requires extensive and repetitive database administration. Amazon SimpleDB is dramatically simpler, requiring no schema, automatically indexing your data and providing a simple API for storage and access. This approach eliminates the administrative burden of data modeling, index maintenance, and performance tuning. Developers gain access to this functionality within Amazon's proven computing environment, are able to scale instantly, and pay only for what they use. </p> <p> Visit <a href="http://aws.amazon.com/simpledb/">http://aws.amazon.com/simpledb/</a> for more information. </p>

Base URLs:

* <a href="http://sdb.amazonaws.com">http://sdb.amazonaws.com</a> - The general Amazon SimpleDB endpoint for US East (N. Virginia)

* <a href="https://sdb.amazonaws.com">https://sdb.amazonaws.com</a> - The general Amazon SimpleDB endpoint for US East (N. Virginia)

* <a href="http://sdb.us-east-2.amazonaws.com">http://sdb.us-east-2.amazonaws.com</a> - The Amazon SimpleDB multi-region endpoint

* <a href="https://sdb.us-east-2.amazonaws.com">https://sdb.us-east-2.amazonaws.com</a> - The Amazon SimpleDB multi-region endpoint

* <a href="http://sdb.cn-north-1.amazonaws.com.cn">http://sdb.cn-north-1.amazonaws.com.cn</a> - The Amazon SimpleDB endpoint for China (Beijing) and China (Ningxia)

* <a href="https://sdb.cn-north-1.amazonaws.com.cn">https://sdb.cn-north-1.amazonaws.com.cn</a> - The Amazon SimpleDB endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/sdb/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v2

<h1 id="amazon-simpledb-default">Default</h1>

## GET_BatchDeleteAttributes

<a id="opIdGET_BatchDeleteAttributes"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=BatchDeleteAttributes?DomainName=string&Items=%7B%22Name%22%3A%7B%7D%2C%22Attributes%22%3A%5B%7B%22Name%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%7D%5D%7D&Action=BatchDeleteAttributes&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=BatchDeleteAttributes`

<p> Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput. </p> <note> <p> If you specify BatchDeleteAttributes without attributes or values, all the attributes for the item are deleted. </p> <p> BatchDeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute doesn't result in an error. </p> <p> The BatchDeleteAttributes operation succeeds or fails in its entirety. There are no partial deletes. You can execute multiple BatchDeleteAttributes operations and other operations in parallel. However, large numbers of concurrent BatchDeleteAttributes calls can result in Service Unavailable (503) responses. </p> <p> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. </p> <p> This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists. </p> </note> <p> The following limitations are enforced for this operation: <ul> <li>1 MB request size</li> <li>25 item limit per BatchDeleteAttributes operation</li> </ul> </p>

<h3 id="getbatchdeleteattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain in which the attributes are being deleted.|
|Items|query|[object]|true|A list of items on which to perform the operation.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|BatchDeleteAttributes|
|Version|2009-04-15|

<h3 id="getbatchdeleteattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_BatchDeleteAttributes

<a id="opIdPOST_BatchDeleteAttributes"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=BatchDeleteAttributes?Action=BatchDeleteAttributes&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{},"Items":{}}'
```

`POST /#Action=BatchDeleteAttributes`

<p> Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput. </p> <note> <p> If you specify BatchDeleteAttributes without attributes or values, all the attributes for the item are deleted. </p> <p> BatchDeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute doesn't result in an error. </p> <p> The BatchDeleteAttributes operation succeeds or fails in its entirety. There are no partial deletes. You can execute multiple BatchDeleteAttributes operations and other operations in parallel. However, large numbers of concurrent BatchDeleteAttributes calls can result in Service Unavailable (503) responses. </p> <p> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. </p> <p> This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists. </p> </note> <p> The following limitations are enforced for this operation: <ul> <li>1 MB request size</li> <li>25 item limit per BatchDeleteAttributes operation</li> </ul> </p>

> Body parameter

```json
{
  "DomainName": {},
  "Items": {}
}
```

<h3 id="postbatchdeleteattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[BatchDeleteAttributesRequest](#schemabatchdeleteattributesrequest)|false|none|
|» DomainName|body|object|true|none|
|» Items|body|object|true|none|
|» Name|body|object|true|none|
|» Attributes|body|[DeletableAttributeList](#schemadeletableattributelist)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|BatchDeleteAttributes|
|Version|2009-04-15|

<h3 id="postbatchdeleteattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_BatchPutAttributes

<a id="opIdGET_BatchPutAttributes"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=BatchPutAttributes?DomainName=string&Items=%7B%22Name%22%3A%7B%7D%2C%22Attributes%22%3A%7B%7D%7D&Action=BatchPutAttributes&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=BatchPutAttributes`

<p> The <code>BatchPutAttributes</code> operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple <a>PutAttribute</a> operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput. </p> <p> The client may specify the item name with the <code>Item.X.ItemName</code> parameter. The client may specify new attributes using a combination of the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> parameters. The client may specify the first attribute for the first item using the parameters <code>Item.0.Attribute.0.Name</code> and <code>Item.0.Attribute.0.Value</code>, and for the second attribute for the first item by the parameters <code>Item.0.Attribute.1.Name</code> and <code>Item.0.Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", "second_value" }</code>. However, it cannot have two attribute instances where both the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> are the same. </p> <p> Optionally, the requester can supply the <code>Replace</code> parameter for each individual value. Setting this value to <code>true</code> will cause the new attribute values to replace the existing attribute values. For example, if an item <code>I</code> has the attributes <code>{ 'a', '1' }, { 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requester does a BatchPutAttributes of <code>{'I', 'b', '4' }</code> with the Replace parameter set to true, the final attributes of the item will be <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, replacing the previous values of the 'b' attribute with the new value. </p> <note> You cannot specify an empty string as an item or as an attribute name. The <code>BatchPutAttributes</code> operation succeeds or fails in its entirety. There are no partial puts. </note> <important> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using <code>Expected.X.Name</code>, <code>Expected.X.Value</code>, or <code>Expected.X.Exists</code>. </important> <p> You can execute multiple <code>BatchPutAttributes</code> operations and other operations in parallel. However, large numbers of concurrent <code>BatchPutAttributes</code> calls can result in Service Unavailable (503) responses. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 attribute name-value pairs per item</li> <li>1 MB request size</li> <li>1 billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> <li>25 item limit per <code>BatchPutAttributes</code> operation</li> </ul> </p>

<h3 id="getbatchputattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain in which the attributes are being stored.|
|Items|query|[object]|true|A list of items on which to perform the operation.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|BatchPutAttributes|
|Version|2009-04-15|

<h3 id="getbatchputattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|NoSuchDomain|[NoSuchDomain](#schemanosuchdomain)|
|409|Conflict|NumberSubmittedAttributesExceeded|[NumberSubmittedAttributesExceeded](#schemanumbersubmittedattributesexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_BatchPutAttributes

<a id="opIdPOST_BatchPutAttributes"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=BatchPutAttributes?Action=BatchPutAttributes&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{},"Items":{}}'
```

`POST /#Action=BatchPutAttributes`

<p> The <code>BatchPutAttributes</code> operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple <a>PutAttribute</a> operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput. </p> <p> The client may specify the item name with the <code>Item.X.ItemName</code> parameter. The client may specify new attributes using a combination of the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> parameters. The client may specify the first attribute for the first item using the parameters <code>Item.0.Attribute.0.Name</code> and <code>Item.0.Attribute.0.Value</code>, and for the second attribute for the first item by the parameters <code>Item.0.Attribute.1.Name</code> and <code>Item.0.Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", "second_value" }</code>. However, it cannot have two attribute instances where both the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> are the same. </p> <p> Optionally, the requester can supply the <code>Replace</code> parameter for each individual value. Setting this value to <code>true</code> will cause the new attribute values to replace the existing attribute values. For example, if an item <code>I</code> has the attributes <code>{ 'a', '1' }, { 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requester does a BatchPutAttributes of <code>{'I', 'b', '4' }</code> with the Replace parameter set to true, the final attributes of the item will be <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, replacing the previous values of the 'b' attribute with the new value. </p> <note> You cannot specify an empty string as an item or as an attribute name. The <code>BatchPutAttributes</code> operation succeeds or fails in its entirety. There are no partial puts. </note> <important> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using <code>Expected.X.Name</code>, <code>Expected.X.Value</code>, or <code>Expected.X.Exists</code>. </important> <p> You can execute multiple <code>BatchPutAttributes</code> operations and other operations in parallel. However, large numbers of concurrent <code>BatchPutAttributes</code> calls can result in Service Unavailable (503) responses. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 attribute name-value pairs per item</li> <li>1 MB request size</li> <li>1 billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> <li>25 item limit per <code>BatchPutAttributes</code> operation</li> </ul> </p>

> Body parameter

```json
{
  "DomainName": {},
  "Items": {}
}
```

<h3 id="postbatchputattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[BatchPutAttributesRequest](#schemabatchputattributesrequest)|false|none|
|» DomainName|body|object|true|none|
|» Items|body|object|true|none|
|» Name|body|object|true|none|
|» Attributes|body|object|true|none|
|» Name|body|object|true|none|
|» Value|body|object|true|none|
|» Replace|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|BatchPutAttributes|
|Version|2009-04-15|

<h3 id="postbatchputattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|NoSuchDomain|[NoSuchDomain](#schemanosuchdomain)|
|409|Conflict|NumberSubmittedAttributesExceeded|[NumberSubmittedAttributesExceeded](#schemanumbersubmittedattributesexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateDomain

<a id="opIdGET_CreateDomain"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=CreateDomain?DomainName=string&Action=CreateDomain&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDomain`

<p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>

<h3 id="getcreatedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain to create. The name can range between 3 and 255 characters and can contain the following characters: a-z, A-Z, 0-9, '_', '-', and '.'.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateDomain|
|Version|2009-04-15|

<h3 id="getcreatedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|MissingParameter|[MissingParameter](#schemamissingparameter)|
|409|Conflict|NumberDomainsExceeded|[NumberDomainsExceeded](#schemanumberdomainsexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateDomain

<a id="opIdPOST_CreateDomain"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=CreateDomain?Action=CreateDomain&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{}}'
```

`POST /#Action=CreateDomain`

<p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="postcreatedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[CreateDomainRequest](#schemacreatedomainrequest)|false|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateDomain|
|Version|2009-04-15|

<h3 id="postcreatedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|MissingParameter|[MissingParameter](#schemamissingparameter)|
|409|Conflict|NumberDomainsExceeded|[NumberDomainsExceeded](#schemanumberdomainsexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteAttributes

<a id="opIdGET_DeleteAttributes"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=DeleteAttributes?DomainName=string&ItemName=string&Action=DeleteAttributes&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteAttributes`

<p> Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted. </p> <note> If <code>DeleteAttributes</code> is called without being passed any attributes or values specified, all the attributes for the item are deleted. </note> <p> <code>DeleteAttributes</code> is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. </p> <p> Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <code>DeleteAttributes</code> or <a>PutAttributes</a> operation (write) might not return updated item data. </p>

<h3 id="getdeleteattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain in which to perform the operation.|
|ItemName|query|string|true|The name of the item. Similar to rows on a spreadsheet, items represent individual objects that contain one or more value-attribute pairs.|
|Attributes|query|[object]|false|A list of Attributes. Similar to columns on a spreadsheet, attributes represent categories of data that can be assigned to items.|
|Expected|query|object|false|The update condition which, if specified, determines whether the specified attributes will be deleted or not. The update condition must be satisfied in order for this request to be processed and the attributes to be deleted.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteAttributes|
|Version|2009-04-15|

<h3 id="getdeleteattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|NoSuchDomain|[NoSuchDomain](#schemanosuchdomain)|
|404|Not Found|AttributeDoesNotExist|[AttributeDoesNotExist](#schemaattributedoesnotexist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteAttributes

<a id="opIdPOST_DeleteAttributes"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=DeleteAttributes?Action=DeleteAttributes&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{},"ItemName":{},"Attributes":{},"Expected":{"Name":{},"Value":{},"Exists":{}}}'
```

`POST /#Action=DeleteAttributes`

<p> Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted. </p> <note> If <code>DeleteAttributes</code> is called without being passed any attributes or values specified, all the attributes for the item are deleted. </note> <p> <code>DeleteAttributes</code> is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. </p> <p> Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <code>DeleteAttributes</code> or <a>PutAttributes</a> operation (write) might not return updated item data. </p>

> Body parameter

```json
{
  "DomainName": {},
  "ItemName": {},
  "Attributes": {},
  "Expected": {
    "Name": {},
    "Value": {},
    "Exists": {}
  }
}
```

<h3 id="postdeleteattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[DeleteAttributesRequest](#schemadeleteattributesrequest)|false|none|
|» DomainName|body|object|true|none|
|» ItemName|body|object|true|none|
|» Attributes|body|object|false|none|
|» Name|body|object|true|none|
|» Value|body|object|false|none|
|» Expected|body|object|false|none|
|» » Name|body|object|false|none|
|» » Value|body|object|false|none|
|» » Exists|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteAttributes|
|Version|2009-04-15|

<h3 id="postdeleteattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|NoSuchDomain|[NoSuchDomain](#schemanosuchdomain)|
|404|Not Found|AttributeDoesNotExist|[AttributeDoesNotExist](#schemaattributedoesnotexist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteDomain

<a id="opIdGET_DeleteDomain"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=DeleteDomain?DomainName=string&Action=DeleteDomain&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDomain`

<p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>

<h3 id="getdeletedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain to delete.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteDomain|
|Version|2009-04-15|

<h3 id="getdeletedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|MissingParameter|[MissingParameter](#schemamissingparameter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteDomain

<a id="opIdPOST_DeleteDomain"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=DeleteDomain?Action=DeleteDomain&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{}}'
```

`POST /#Action=DeleteDomain`

<p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="postdeletedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[DeleteDomainRequest](#schemadeletedomainrequest)|false|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteDomain|
|Version|2009-04-15|

<h3 id="postdeletedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|MissingParameter|[MissingParameter](#schemamissingparameter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DomainMetadata

<a id="opIdGET_DomainMetadata"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=DomainMetadata?DomainName=string&Action=DomainMetadata&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DomainMetadata`

 Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 

<h3 id="getdomainmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain for which to display the metadata of.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DomainMetadata|
|Version|2009-04-15|

<h3 id="getdomainmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DomainMetadataResult](#schemadomainmetadataresult)|
|400|Bad Request|NoSuchDomain|[NoSuchDomain](#schemanosuchdomain)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DomainMetadata

<a id="opIdPOST_DomainMetadata"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=DomainMetadata?Action=DomainMetadata&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{}}'
```

`POST /#Action=DomainMetadata`

 Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="postdomainmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[DomainMetadataRequest](#schemadomainmetadatarequest)|false|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DomainMetadata|
|Version|2009-04-15|

<h3 id="postdomainmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DomainMetadataResult](#schemadomainmetadataresult)|
|400|Bad Request|NoSuchDomain|[NoSuchDomain](#schemanosuchdomain)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetAttributes

<a id="opIdGET_GetAttributes"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=GetAttributes?DomainName=string&ItemName=string&Action=GetAttributes&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetAttributes`

<p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>

<h3 id="getgetattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain in which to perform the operation.|
|ItemName|query|string|true|The name of the item.|
|AttributeNames|query|[object]|false|The names of the attributes.|
|ConsistentRead|query|boolean|false|Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If <code>true</code>, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetAttributes|
|Version|2009-04-15|

<h3 id="getgetattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAttributesResult](#schemagetattributesresult)|
|400|Bad Request|NoSuchDomain|[NoSuchDomain](#schemanosuchdomain)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetAttributes

<a id="opIdPOST_GetAttributes"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=GetAttributes?Action=GetAttributes&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{},"ItemName":{},"AttributeNames":{},"ConsistentRead":{}}'
```

`POST /#Action=GetAttributes`

<p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>

> Body parameter

```json
{
  "DomainName": {},
  "ItemName": {},
  "AttributeNames": {},
  "ConsistentRead": {}
}
```

<h3 id="postgetattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[GetAttributesRequest](#schemagetattributesrequest)|false|none|
|» DomainName|body|object|true|none|
|» ItemName|body|object|true|none|
|» AttributeNames|body|object|false|none|
|» ConsistentRead|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetAttributes|
|Version|2009-04-15|

<h3 id="postgetattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAttributesResult](#schemagetattributesresult)|
|400|Bad Request|NoSuchDomain|[NoSuchDomain](#schemanosuchdomain)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListDomains

<a id="opIdGET_ListDomains"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=ListDomains?Action=ListDomains&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListDomains`

 The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. 

<h3 id="getlistdomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxNumberOfDomains|query|integer|false|The maximum number of domain names you want returned. The range is 1 to 100. The default setting is 100.|
|NextToken|query|string|false|A string informing Amazon SimpleDB where to start the next list of domain names.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListDomains|
|Version|2009-04-15|

<h3 id="getlistdomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDomainsResult](#schemalistdomainsresult)|
|400|Bad Request|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListDomains

<a id="opIdPOST_ListDomains"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=ListDomains?Action=ListDomains&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"MaxNumberOfDomains":{},"NextToken":{}}'
```

`POST /#Action=ListDomains`

 The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. 

> Body parameter

```json
{
  "MaxNumberOfDomains": {},
  "NextToken": {}
}
```

<h3 id="postlistdomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxNumberOfDomains|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[ListDomainsRequest](#schemalistdomainsrequest)|false|none|
|» MaxNumberOfDomains|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListDomains|
|Version|2009-04-15|

<h3 id="postlistdomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDomainsResult](#schemalistdomainsresult)|
|400|Bad Request|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutAttributes

<a id="opIdGET_PutAttributes"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=PutAttributes?DomainName=string&ItemName=string&Attributes=%7B%22Name%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%2C%22Replace%22%3A%7B%7D%7D&Action=PutAttributes&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutAttributes`

<p> The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> parameters. The client specifies the first attribute by the parameters <code>Attribute.0.Name</code> and <code>Attribute.0.Value</code>, the second attribute by the parameters <code>Attribute.1.Name</code> and <code>Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", second_value" }</code>. However, it cannot have two attribute instances where both the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> are the same. </p> <p> Optionally, the requestor can supply the <code>Replace</code> parameter for each individual attribute. Setting this value to <code>true</code> causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes <code>{ 'a', '1' }</code>, <code>{ 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requestor calls <code>PutAttributes</code> using the attributes <code>{ 'b', '4' }</code> with the <code>Replace</code> parameter set to true, the final attributes of the item are changed to <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, which replaces the previous values of the 'b' attribute with the new value. </p> <note> Using <code>PutAttributes</code> to replace attribute values that do not exist will not result in an error response. </note> <p> You cannot specify an empty string as an attribute name. </p> <p> Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <a>PutAttributes</a> or <a>DeleteAttributes</a> operation (write) might not return the updated data. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 total attribute name-value pairs per item</li> <li>One billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> </ul> </p>

<h3 id="getputattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain in which to perform the operation.|
|ItemName|query|string|true|The name of the item.|
|Attributes|query|[object]|true|The list of attributes.|
|Expected|query|object|false|The update condition which, if specified, determines whether the specified attributes will be updated or not. The update condition must be satisfied in order for this request to be processed and the attributes to be updated.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutAttributes|
|Version|2009-04-15|

<h3 id="getputattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|NoSuchDomain|[NoSuchDomain](#schemanosuchdomain)|
|404|Not Found|AttributeDoesNotExist|[AttributeDoesNotExist](#schemaattributedoesnotexist)|
|409|Conflict|NumberItemAttributesExceeded|[NumberItemAttributesExceeded](#schemanumberitemattributesexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutAttributes

<a id="opIdPOST_PutAttributes"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=PutAttributes?Action=PutAttributes&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{},"ItemName":{},"Attributes":{},"Expected":{"Name":{},"Value":{},"Exists":{}}}'
```

`POST /#Action=PutAttributes`

<p> The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> parameters. The client specifies the first attribute by the parameters <code>Attribute.0.Name</code> and <code>Attribute.0.Value</code>, the second attribute by the parameters <code>Attribute.1.Name</code> and <code>Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", second_value" }</code>. However, it cannot have two attribute instances where both the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> are the same. </p> <p> Optionally, the requestor can supply the <code>Replace</code> parameter for each individual attribute. Setting this value to <code>true</code> causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes <code>{ 'a', '1' }</code>, <code>{ 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requestor calls <code>PutAttributes</code> using the attributes <code>{ 'b', '4' }</code> with the <code>Replace</code> parameter set to true, the final attributes of the item are changed to <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, which replaces the previous values of the 'b' attribute with the new value. </p> <note> Using <code>PutAttributes</code> to replace attribute values that do not exist will not result in an error response. </note> <p> You cannot specify an empty string as an attribute name. </p> <p> Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <a>PutAttributes</a> or <a>DeleteAttributes</a> operation (write) might not return the updated data. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 total attribute name-value pairs per item</li> <li>One billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> </ul> </p>

> Body parameter

```json
{
  "DomainName": {},
  "ItemName": {},
  "Attributes": {},
  "Expected": {
    "Name": {},
    "Value": {},
    "Exists": {}
  }
}
```

<h3 id="postputattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[PutAttributesRequest](#schemaputattributesrequest)|false|none|
|» DomainName|body|object|true|none|
|» ItemName|body|object|true|none|
|» Attributes|body|object|true|none|
|» Name|body|object|true|none|
|» Value|body|object|true|none|
|» Replace|body|object|false|none|
|» Expected|body|object|false|none|
|» » Name|body|object|false|none|
|» » Value|body|object|false|none|
|» » Exists|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutAttributes|
|Version|2009-04-15|

<h3 id="postputattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|NoSuchDomain|[NoSuchDomain](#schemanosuchdomain)|
|404|Not Found|AttributeDoesNotExist|[AttributeDoesNotExist](#schemaattributedoesnotexist)|
|409|Conflict|NumberItemAttributesExceeded|[NumberItemAttributesExceeded](#schemanumberitemattributesexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_Select

<a id="opIdGET_Select"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=Select?SelectExpression=string&Action=Select&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=Select`

<p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>

<h3 id="getselect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SelectExpression|query|string|true|The expression used to query the domain.|
|NextToken|query|string|false|A string informing Amazon SimpleDB where to start the next list of <code>ItemNames</code>.|
|ConsistentRead|query|boolean|false|Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If <code>true</code>, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|Select|
|Version|2009-04-15|

<h3 id="getselect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SelectResult](#schemaselectresult)|
|400|Bad Request|TooManyRequestedAttributes|[TooManyRequestedAttributes](#schematoomanyrequestedattributes)|
|408|Request Timeout|RequestTimeout|[RequestTimeout](#schemarequesttimeout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_Select

<a id="opIdPOST_Select"></a>

> Code samples

```bash
curl 'https://sdb.us-east-1.amazonaws.com/#Action=Select?Action=Select&Version=2009-04-15&AWSAccessKeyId=string&SignatureMethod=string&SignatureVersion=string&Timestamp=string&Signature=string' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"SelectExpression":{},"NextToken":{},"ConsistentRead":{}}'
```

`POST /#Action=Select`

<p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>

> Body parameter

```json
{
  "SelectExpression": {},
  "NextToken": {},
  "ConsistentRead": {}
}
```

<h3 id="postselect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|AWSAccessKeyId|query|string|true|none|
|SignatureMethod|query|string|true|none|
|SignatureVersion|query|string|true|none|
|Timestamp|query|string|true|none|
|Signature|query|string|true|none|
|body|body|[SelectRequest](#schemaselectrequest)|false|none|
|» SelectExpression|body|object|true|none|
|» NextToken|body|object|false|none|
|» ConsistentRead|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|Select|
|Version|2009-04-15|

<h3 id="postselect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SelectResult](#schemaselectresult)|
|400|Bad Request|TooManyRequestedAttributes|[TooManyRequestedAttributes](#schematoomanyrequestedattributes)|
|408|Request Timeout|RequestTimeout|[RequestTimeout](#schemarequesttimeout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DeletableItem">DeletableItem</h2>
<!-- backwards compatibility -->
<a id="schemadeletableitem"></a>
<a id="schema_DeletableItem"></a>
<a id="tocSdeletableitem"></a>
<a id="tocsdeletableitem"></a>

```json
{
  "Name": {},
  "Attributes": [
    {
      "Name": {},
      "Value": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Attributes|[DeletableAttributeList](#schemadeletableattributelist)|false|none|none|

<h2 id="tocS_ReplaceableItem">ReplaceableItem</h2>
<!-- backwards compatibility -->
<a id="schemareplaceableitem"></a>
<a id="schema_ReplaceableItem"></a>
<a id="tocSreplaceableitem"></a>
<a id="tocsreplaceableitem"></a>

```json
{
  "Name": {},
  "Attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Attributes|object|true|none|none|

<h2 id="tocS_DuplicateItemName">DuplicateItemName</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateitemname"></a>
<a id="schema_DuplicateItemName"></a>
<a id="tocSduplicateitemname"></a>
<a id="tocsduplicateitemname"></a>

```json
{
  "BoxUsage": 0
}
```

The item name was specified more than once.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_InvalidParameterValue">InvalidParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametervalue"></a>
<a id="schema_InvalidParameterValue"></a>
<a id="tocSinvalidparametervalue"></a>
<a id="tocsinvalidparametervalue"></a>

```json
{
  "BoxUsage": 0
}
```

The value for a parameter is invalid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_MissingParameter">MissingParameter</h2>
<!-- backwards compatibility -->
<a id="schemamissingparameter"></a>
<a id="schema_MissingParameter"></a>
<a id="tocSmissingparameter"></a>
<a id="tocsmissingparameter"></a>

```json
{
  "BoxUsage": 0
}
```

The request must contain the specified missing parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_NoSuchDomain">NoSuchDomain</h2>
<!-- backwards compatibility -->
<a id="schemanosuchdomain"></a>
<a id="schema_NoSuchDomain"></a>
<a id="tocSnosuchdomain"></a>
<a id="tocsnosuchdomain"></a>

```json
{
  "BoxUsage": 0
}
```

The specified domain does not exist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_NumberItemAttributesExceeded">NumberItemAttributesExceeded</h2>
<!-- backwards compatibility -->
<a id="schemanumberitemattributesexceeded"></a>
<a id="schema_NumberItemAttributesExceeded"></a>
<a id="tocSnumberitemattributesexceeded"></a>
<a id="tocsnumberitemattributesexceeded"></a>

```json
{
  "BoxUsage": 0
}
```

Too many attributes in this item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_NumberDomainAttributesExceeded">NumberDomainAttributesExceeded</h2>
<!-- backwards compatibility -->
<a id="schemanumberdomainattributesexceeded"></a>
<a id="schema_NumberDomainAttributesExceeded"></a>
<a id="tocSnumberdomainattributesexceeded"></a>
<a id="tocsnumberdomainattributesexceeded"></a>

```json
{
  "BoxUsage": 0
}
```

Too many attributes in this domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_NumberDomainBytesExceeded">NumberDomainBytesExceeded</h2>
<!-- backwards compatibility -->
<a id="schemanumberdomainbytesexceeded"></a>
<a id="schema_NumberDomainBytesExceeded"></a>
<a id="tocSnumberdomainbytesexceeded"></a>
<a id="tocsnumberdomainbytesexceeded"></a>

```json
{
  "BoxUsage": 0
}
```

Too many bytes in this domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_NumberSubmittedItemsExceeded">NumberSubmittedItemsExceeded</h2>
<!-- backwards compatibility -->
<a id="schemanumbersubmitteditemsexceeded"></a>
<a id="schema_NumberSubmittedItemsExceeded"></a>
<a id="tocSnumbersubmitteditemsexceeded"></a>
<a id="tocsnumbersubmitteditemsexceeded"></a>

```json
{
  "BoxUsage": 0
}
```

Too many items exist in a single call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_NumberSubmittedAttributesExceeded">NumberSubmittedAttributesExceeded</h2>
<!-- backwards compatibility -->
<a id="schemanumbersubmittedattributesexceeded"></a>
<a id="schema_NumberSubmittedAttributesExceeded"></a>
<a id="tocSnumbersubmittedattributesexceeded"></a>
<a id="tocsnumbersubmittedattributesexceeded"></a>

```json
{
  "BoxUsage": 0
}
```

Too many attributes exist in a single call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_NumberDomainsExceeded">NumberDomainsExceeded</h2>
<!-- backwards compatibility -->
<a id="schemanumberdomainsexceeded"></a>
<a id="schema_NumberDomainsExceeded"></a>
<a id="tocSnumberdomainsexceeded"></a>
<a id="tocsnumberdomainsexceeded"></a>

```json
{
  "BoxUsage": 0
}
```

Too many domains exist per this account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_DeletableAttribute">DeletableAttribute</h2>
<!-- backwards compatibility -->
<a id="schemadeletableattribute"></a>
<a id="schema_DeletableAttribute"></a>
<a id="tocSdeletableattribute"></a>
<a id="tocsdeletableattribute"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

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

<h2 id="tocS_AttributeDoesNotExist">AttributeDoesNotExist</h2>
<!-- backwards compatibility -->
<a id="schemaattributedoesnotexist"></a>
<a id="schema_AttributeDoesNotExist"></a>
<a id="tocSattributedoesnotexist"></a>
<a id="tocsattributedoesnotexist"></a>

```json
{
  "BoxUsage": 0
}
```

The specified attribute does not exist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_DomainMetadataResult">DomainMetadataResult</h2>
<!-- backwards compatibility -->
<a id="schemadomainmetadataresult"></a>
<a id="schema_DomainMetadataResult"></a>
<a id="tocSdomainmetadataresult"></a>
<a id="tocsdomainmetadataresult"></a>

```json
{
  "ItemCount": {},
  "ItemNamesSizeBytes": {},
  "AttributeNameCount": {},
  "AttributeNamesSizeBytes": {},
  "AttributeValueCount": {},
  "AttributeValuesSizeBytes": {},
  "Timestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ItemCount|object|false|none|none|
|ItemNamesSizeBytes|object|false|none|none|
|AttributeNameCount|object|false|none|none|
|AttributeNamesSizeBytes|object|false|none|none|
|AttributeValueCount|object|false|none|none|
|AttributeValuesSizeBytes|object|false|none|none|
|Timestamp|object|false|none|none|

<h2 id="tocS_GetAttributesResult">GetAttributesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetattributesresult"></a>
<a id="schema_GetAttributesResult"></a>
<a id="tocSgetattributesresult"></a>
<a id="tocsgetattributesresult"></a>

```json
{
  "Attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_ListDomainsResult">ListDomainsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsresult"></a>
<a id="schema_ListDomainsResult"></a>
<a id="tocSlistdomainsresult"></a>
<a id="tocslistdomainsresult"></a>

```json
{
  "DomainNames": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainNames|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidNextToken">InvalidNextToken</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttoken"></a>
<a id="schema_InvalidNextToken"></a>
<a id="tocSinvalidnexttoken"></a>
<a id="tocsinvalidnexttoken"></a>

```json
{
  "BoxUsage": 0
}
```

The specified NextToken is not valid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_ReplaceableAttribute">ReplaceableAttribute</h2>
<!-- backwards compatibility -->
<a id="schemareplaceableattribute"></a>
<a id="schema_ReplaceableAttribute"></a>
<a id="tocSreplaceableattribute"></a>
<a id="tocsreplaceableattribute"></a>

```json
{
  "Name": {},
  "Value": {},
  "Replace": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|
|Replace|object|false|none|none|

<h2 id="tocS_SelectResult">SelectResult</h2>
<!-- backwards compatibility -->
<a id="schemaselectresult"></a>
<a id="schema_SelectResult"></a>
<a id="tocSselectresult"></a>
<a id="tocsselectresult"></a>

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

<h2 id="tocS_InvalidNumberPredicates">InvalidNumberPredicates</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnumberpredicates"></a>
<a id="schema_InvalidNumberPredicates"></a>
<a id="tocSinvalidnumberpredicates"></a>
<a id="tocsinvalidnumberpredicates"></a>

```json
{
  "BoxUsage": 0
}
```

Too many predicates exist in the query expression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_InvalidNumberValueTests">InvalidNumberValueTests</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnumbervaluetests"></a>
<a id="schema_InvalidNumberValueTests"></a>
<a id="tocSinvalidnumbervaluetests"></a>
<a id="tocsinvalidnumbervaluetests"></a>

```json
{
  "BoxUsage": 0
}
```

Too many predicates exist in the query expression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_InvalidQueryExpression">InvalidQueryExpression</h2>
<!-- backwards compatibility -->
<a id="schemainvalidqueryexpression"></a>
<a id="schema_InvalidQueryExpression"></a>
<a id="tocSinvalidqueryexpression"></a>
<a id="tocsinvalidqueryexpression"></a>

```json
{
  "BoxUsage": 0
}
```

The specified query expression syntax is not valid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_RequestTimeout">RequestTimeout</h2>
<!-- backwards compatibility -->
<a id="schemarequesttimeout"></a>
<a id="schema_RequestTimeout"></a>
<a id="tocSrequesttimeout"></a>
<a id="tocsrequesttimeout"></a>

```json
{
  "BoxUsage": 0
}
```

A timeout occurred when attempting to query the specified domain with specified query expression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_TooManyRequestedAttributes">TooManyRequestedAttributes</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestedattributes"></a>
<a id="schema_TooManyRequestedAttributes"></a>
<a id="tocStoomanyrequestedattributes"></a>
<a id="tocstoomanyrequestedattributes"></a>

```json
{
  "BoxUsage": 0
}
```

Too many attributes requested.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoxUsage|[Float](#schemafloat)|false|none|none|

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "Name": {},
  "AlternateNameEncoding": {},
  "Value": {},
  "AlternateValueEncoding": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|AlternateNameEncoding|object|false|none|none|
|Value|object|true|none|none|
|AlternateValueEncoding|object|false|none|none|

<h2 id="tocS_Float">Float</h2>
<!-- backwards compatibility -->
<a id="schemafloat"></a>
<a id="schema_Float"></a>
<a id="tocSfloat"></a>
<a id="tocsfloat"></a>

```json
0
```

<h2 id="tocS_AttributeList">AttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaattributelist"></a>
<a id="schema_AttributeList"></a>
<a id="tocSattributelist"></a>
<a id="tocsattributelist"></a>

```json
[
  {
    "Name": {},
    "AlternateNameEncoding": {},
    "Value": {},
    "AlternateValueEncoding": {}
  }
]
```

<h2 id="tocS_AttributeNameList">AttributeNameList</h2>
<!-- backwards compatibility -->
<a id="schemaattributenamelist"></a>
<a id="schema_AttributeNameList"></a>
<a id="tocSattributenamelist"></a>
<a id="tocsattributenamelist"></a>

```json
[
  {}
]
```

<h2 id="tocS_DeletableItemList">DeletableItemList</h2>
<!-- backwards compatibility -->
<a id="schemadeletableitemlist"></a>
<a id="schema_DeletableItemList"></a>
<a id="tocSdeletableitemlist"></a>
<a id="tocsdeletableitemlist"></a>

```json
[
  {
    "Name": {},
    "Attributes": [
      {
        "Name": {},
        "Value": {}
      }
    ]
  }
]
```

<h2 id="tocS_BatchDeleteAttributesRequest">BatchDeleteAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteattributesrequest"></a>
<a id="schema_BatchDeleteAttributesRequest"></a>
<a id="tocSbatchdeleteattributesrequest"></a>
<a id="tocsbatchdeleteattributesrequest"></a>

```json
{
  "DomainName": {},
  "Items": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|Items|object|true|none|none|

<h2 id="tocS_ReplaceableItemList">ReplaceableItemList</h2>
<!-- backwards compatibility -->
<a id="schemareplaceableitemlist"></a>
<a id="schema_ReplaceableItemList"></a>
<a id="tocSreplaceableitemlist"></a>
<a id="tocsreplaceableitemlist"></a>

```json
[
  {
    "Name": {},
    "Attributes": {}
  }
]
```

<h2 id="tocS_BatchPutAttributesRequest">BatchPutAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchputattributesrequest"></a>
<a id="schema_BatchPutAttributesRequest"></a>
<a id="tocSbatchputattributesrequest"></a>
<a id="tocsbatchputattributesrequest"></a>

```json
{
  "DomainName": {},
  "Items": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|Items|object|true|none|none|

<h2 id="tocS_CreateDomainRequest">CreateDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainrequest"></a>
<a id="schema_CreateDomainRequest"></a>
<a id="tocScreatedomainrequest"></a>
<a id="tocscreatedomainrequest"></a>

```json
{
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_DeletableAttributeList">DeletableAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemadeletableattributelist"></a>
<a id="schema_DeletableAttributeList"></a>
<a id="tocSdeletableattributelist"></a>
<a id="tocsdeletableattributelist"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_UpdateCondition">UpdateCondition</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecondition"></a>
<a id="schema_UpdateCondition"></a>
<a id="tocSupdatecondition"></a>
<a id="tocsupdatecondition"></a>

```json
{
  "Name": {},
  "Value": {},
  "Exists": {}
}
```

 Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|
|Exists|object|false|none|none|

<h2 id="tocS_DeleteAttributesRequest">DeleteAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteattributesrequest"></a>
<a id="schema_DeleteAttributesRequest"></a>
<a id="tocSdeleteattributesrequest"></a>
<a id="tocsdeleteattributesrequest"></a>

```json
{
  "DomainName": {},
  "ItemName": {},
  "Attributes": {},
  "Expected": {
    "Name": {},
    "Value": {},
    "Exists": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|ItemName|object|true|none|none|
|Attributes|object|false|none|none|
|Expected|object|false|none|none|

<h2 id="tocS_DeleteDomainRequest">DeleteDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainrequest"></a>
<a id="schema_DeleteDomainRequest"></a>
<a id="tocSdeletedomainrequest"></a>
<a id="tocsdeletedomainrequest"></a>

```json
{
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_DomainMetadataRequest">DomainMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemadomainmetadatarequest"></a>
<a id="schema_DomainMetadataRequest"></a>
<a id="tocSdomainmetadatarequest"></a>
<a id="tocsdomainmetadatarequest"></a>

```json
{
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_DomainNameList">DomainNameList</h2>
<!-- backwards compatibility -->
<a id="schemadomainnamelist"></a>
<a id="schema_DomainNameList"></a>
<a id="tocSdomainnamelist"></a>
<a id="tocsdomainnamelist"></a>

```json
[
  {}
]
```

<h2 id="tocS_GetAttributesRequest">GetAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetattributesrequest"></a>
<a id="schema_GetAttributesRequest"></a>
<a id="tocSgetattributesrequest"></a>
<a id="tocsgetattributesrequest"></a>

```json
{
  "DomainName": {},
  "ItemName": {},
  "AttributeNames": {},
  "ConsistentRead": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|ItemName|object|true|none|none|
|AttributeNames|object|false|none|none|
|ConsistentRead|object|false|none|none|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "Name": {},
  "AlternateNameEncoding": {},
  "Attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|AlternateNameEncoding|object|false|none|none|
|Attributes|object|true|none|none|

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
    "AlternateNameEncoding": {},
    "Attributes": {}
  }
]
```

<h2 id="tocS_ListDomainsRequest">ListDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsrequest"></a>
<a id="schema_ListDomainsRequest"></a>
<a id="tocSlistdomainsrequest"></a>
<a id="tocslistdomainsrequest"></a>

```json
{
  "MaxNumberOfDomains": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxNumberOfDomains|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ReplaceableAttributeList">ReplaceableAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemareplaceableattributelist"></a>
<a id="schema_ReplaceableAttributeList"></a>
<a id="tocSreplaceableattributelist"></a>
<a id="tocsreplaceableattributelist"></a>

```json
[
  {
    "Name": {},
    "Value": {},
    "Replace": {}
  }
]
```

<h2 id="tocS_PutAttributesRequest">PutAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputattributesrequest"></a>
<a id="schema_PutAttributesRequest"></a>
<a id="tocSputattributesrequest"></a>
<a id="tocsputattributesrequest"></a>

```json
{
  "DomainName": {},
  "ItemName": {},
  "Attributes": {},
  "Expected": {
    "Name": {},
    "Value": {},
    "Exists": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|ItemName|object|true|none|none|
|Attributes|object|true|none|none|
|Expected|object|false|none|none|

<h2 id="tocS_SelectRequest">SelectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaselectrequest"></a>
<a id="schema_SelectRequest"></a>
<a id="tocSselectrequest"></a>
<a id="tocsselectrequest"></a>

```json
{
  "SelectExpression": {},
  "NextToken": {},
  "ConsistentRead": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SelectExpression|object|true|none|none|
|NextToken|object|false|none|none|
|ConsistentRead|object|false|none|none|
