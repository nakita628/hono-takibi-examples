<h1 id="xero-files-api">Xero Files API v19.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

These endpoints are specific to Xero Files API

Base URLs:

* <a href="https://api.xero.com/files.xro/1.0/">https://api.xero.com/files.xro/1.0/</a> - Xero Files API

<a href="https://developer.xero.com/xero-developer-platform-terms-conditions/">Terms of service</a>
Email: <a href="mailto:api@xero.com">Xero Platform Team</a> 
Web: <a href="https://developer.xero.com">Xero Platform Team</a> 

# Authentication

- oAuth2 authentication. For more information

    - Flow: authorizationCode
    - Authorization URL = [https://login.xero.com/identity/connect/authorize](https://login.xero.com/identity/connect/authorize)
    - Token URL = [https://identity.xero.com/connect/token](https://identity.xero.com/connect/token)

|Scope|Scope Description|
|---|---|
|email|Grant read-only access to your email|
|openid|Grant read-only access to your open id|
|profile|your profile information|
|files|Grant read-write access to files and folders|
|files.read|Grant read-only access to files and folders|

<h1 id="xero-files-api-files">Files</h1>

Operations available to regular developers

## Retrieves files

<a id="opIdgetFiles"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /Files`

<h3 id="retrieves-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|pass an optional page size value|
|page|query|integer|false|number of records to skip for pagination|
|sort|query|string|false|values to sort by|
|direction|query|string|false|sort direction|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|Name|
|sort|Size|
|sort|CreatedDateUTC|
|direction|ASC|
|direction|DESC|

> Example responses

> 200 Response

```json
"{ \"TotalCount\": 100, \"Page\": 1, \"PerPage\": 2, \"Items\": [ { \"Name\": \"helo-heros.jpg\", \"MimeType\": \"application/jpg\", \"Size\": 2878711, \"CreatedDateUtc\": \"2021-02-10T16:02:54.9930000\", \"UpdatedDateUtc\": \"2021-02-10T16:02:54.9930000\", \"User\": { \"Name\": \"sid.maestre@xero.com\", \"FirstName\": \"Sidney\", \"LastName\": \"Maestre\", \"FullName\": \"Sidney Maestre\", \"Id\": \"740add2a-a703-4b8a-a670-1093919c2040\" }, \"FolderId\": \"bf924975-7097-46f2-a143-1ecfbab3c8c3\", \"Id\": \"3d413bfe-f40f-4807-b953-9a42f834ff15\" }, { \"Name\": \"helo-heros.jpg\", \"MimeType\": \"application/jpg\", \"Size\": 2878711, \"CreatedDateUtc\": \"2021-02-09T21:16:00.6130000\", \"UpdatedDateUtc\": \"2021-02-09T21:16:00.6130000\", \"User\": { \"Name\": \"sid.maestre@xero.com\", \"FirstName\": \"Sidney\", \"LastName\": \"Maestre\", \"FullName\": \"Sidney Maestre\", \"Id\": \"740add2a-a703-4b8a-a670-1093919c2040\" }, \"FolderId\": \"bf924975-7097-46f2-a143-1ecfbab3c8c3\", \"Id\": \"22f87409-cdfd-4813-a868-559481bcb052\" } ] }"
```

<h3 id="retrieves-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Files](#schemafiles)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files files.read )
</aside>

## Uploads a File to the inbox

<a id="opIduploadFile"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Files \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID' \
  -F 'body=@/path/to/file' \
  -F 'name=string' \
  -F 'filename=string' \
  -F 'mimeType=string'
```

`POST /Files`

> Body parameter

```yaml
body: string
name: string
filename: string
mimeType: string
```

<h3 id="uploads-a-file-to-the-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|
|body|body|[UploadObject](#schemauploadobject)|true|none|
|» body|body|string(byte)|true|none|
|» name|body|string|true|exact name of the file you are uploading|
|» filename|body|string|true|none|
|» mimeType|body|string|false|none|

> Example responses

> 201 Response

```json
"{ \"Name\": \"helo-heros.jpg\", \"MimeType\": \"application/jpg\", \"Size\": 2878711, \"CreatedDateUtc\": \"2021-02-10T23:17:50.1930000\", \"UpdatedDateUtc\": \"2021-02-10T23:17:50.1930000\", \"User\": { \"Name\": \"sid.maestre@xero.com\", \"FirstName\": \"Sidney\", \"LastName\": \"Maestre\", \"FullName\": \"Sidney Maestre\", \"Id\": \"740add2a-a703-4b8a-a670-1093919c2040\" }, \"FolderId\": \"bf924975-7097-46f2-a143-1ecfbab3c8c3\", \"Id\": \"22f87409-cdfd-4813-a868-559481bcb052\" }"
```

> 400 Response

```json
"[ { \"type\":\"Validation\", \"title\":\"Validation failure\", \"detail\":\"Extension: boo is not a valid File extension.\" } ]"
```

<h3 id="uploads-a-file-to-the-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful request|[FileObject](#schemafileobject)|
|400|Bad Request|invalid input, object invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files )
</aside>

## Retrieves a file by a unique file ID

<a id="opIdgetFile"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Files/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /Files/{FileId}`

<h3 id="retrieves-a-file-by-a-unique-file-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileId|path|string(uuid)|true|File id for single object|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
"{ \"Name\": \"helo-heros.jpg\", \"MimeType\": \"application/jpg\", \"Size\": 2878711, \"CreatedDateUtc\": \"2021-02-10T23:17:50.1930000\", \"UpdatedDateUtc\": \"2021-02-10T23:17:50.1930000\", \"User\": { \"Name\": \"sid.maestre@xero.com\", \"FirstName\": \"Sidney\", \"LastName\": \"Maestre\", \"FullName\": \"Sidney Maestre\", \"Id\": \"740add2a-a703-4b8a-a670-1093919c2040\" }, \"FolderId\": \"bf924975-7097-46f2-a143-1ecfbab3c8c3\", \"Id\": \"efd77bfc-7018-4da1-b251-7aa2d438382c\" }"
```

<h3 id="retrieves-a-file-by-a-unique-file-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[FileObject](#schemafileobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files files.read )
</aside>

## Update a file

<a id="opIdupdateFile"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Files/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID' \
  -d '"{ \"FolderId\": \"bf924975-7097-46f2-a143-1ecfbab3c8c3\" }"'
```

`PUT /Files/{FileId}`

Updates file properties of a single file

> Body parameter

```json
"{ \"FolderId\": \"bf924975-7097-46f2-a143-1ecfbab3c8c3\" }"
```

<h3 id="update-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|FileId|path|string(uuid)|true|File id for single object|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|
|body|body|[FileObject](#schemafileobject)|true|none|
|» Name|body|string|false|File Name|
|» MimeType|body|string|false|MimeType of the file (image/png, image/jpeg, application/pdf, etc..)|
|» Size|body|integer|false|Numeric value in bytes|
|» CreatedDateUtc|body|string|false|Created date in UTC|
|» UpdatedDateUtc|body|string|false|Updated date in UTC|
|» User|body|[User](#schemauser)|false|none|
|» Id|body|string(uuid)|false|File object's UUID|
|» FolderId|body|string(uuid)|false|Folder relation object's UUID|

> Example responses

> 200 Response

```json
"{ \"Name\": \"helo-heros.jpg\", \"MimeType\": \"application/jpg\", \"Size\": 2878711, \"CreatedDateUtc\": \"2021-02-10T23:17:50.1930000\", \"UpdatedDateUtc\": \"2021-02-10T23:58:54.1000000\", \"User\": { \"Name\": \"sid.maestre@xero.com\", \"FirstName\": \"Sidney\", \"LastName\": \"Maestre\", \"FullName\": \"Sidney Maestre\", \"Id\": \"740add2a-a703-4b8a-a670-1093919c2040\" }, \"FolderId\": \"bf924975-7097-46f2-a143-1ecfbab3c8c3\", \"Id\": \"efd77bfc-7018-4da1-b251-7aa2d438382c\" }"
```

> 400 Response

```json
"[ { \"type\":\"Rename\", \"title\":\"Rename failed\", \"detail\":\"Unable to rename efd77bfc-7018-4da1-b251-7aa2d438382c to FooBar\" } ]"
```

<h3 id="update-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request|[FileObject](#schemafileobject)|
|400|Bad Request|invalid input, object invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files )
</aside>

## Deletes a specific file

<a id="opIddeleteFile"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Files/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`DELETE /Files/{FileId}`

Delete a specific file

<h3 id="deletes-a-specific-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileId|path|string(uuid)|true|File id for single object|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

<h3 id="deletes-a-specific-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful deletion - return response 204 no content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files )
</aside>

## Uploads a File to a specific folder

<a id="opIduploadFileToFolder"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Files/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID' \
  -F 'body=@/path/to/file' \
  -F 'name=string' \
  -F 'filename=string' \
  -F 'mimeType=string'
```

`POST /Files/{FolderId}`

> Body parameter

```yaml
body: string
name: string
filename: string
mimeType: string
```

<h3 id="uploads-a-file-to-a-specific-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|FolderId|path|string(uuid)|true|pass required folder id to save file to specific folder|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|
|body|body|[UploadObject](#schemauploadobject)|true|none|
|» body|body|string(byte)|true|none|
|» name|body|string|true|exact name of the file you are uploading|
|» filename|body|string|true|none|
|» mimeType|body|string|false|none|

> Example responses

> 201 Response

```json
"{ \"Name\": \"helo-heros.jpg\", \"MimeType\": \"application/jpg\", \"Size\": 2878711, \"CreatedDateUtc\": \"2021-02-10T23:17:50.1930000\", \"UpdatedDateUtc\": \"2021-02-10T23:17:50.1930000\", \"User\": { \"Name\": \"sid.maestre@xero.com\", \"FirstName\": \"Sidney\", \"LastName\": \"Maestre\", \"FullName\": \"Sidney Maestre\", \"Id\": \"740add2a-a703-4b8a-a670-1093919c2040\" }, \"FolderId\": \"bf924975-7097-46f2-a143-1ecfbab3c8c3\", \"Id\": \"22f87409-cdfd-4813-a868-559481bcb052\" }"
```

> 400 Response

```json
"[ { \"type\":\"Validation\", \"title\":\"Validation failure\", \"detail\":\"Extension: boo is not a valid File extension.\" } ]"
```

<h3 id="uploads-a-file-to-a-specific-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful request|[FileObject](#schemafileobject)|
|400|Bad Request|invalid input, object invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files )
</aside>

## Retrieves the content of a specific file

<a id="opIdgetFileContent"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Files/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Content \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /Files/{FileId}/Content`

By passing in the appropriate options, retrieve data for specific file

<h3 id="retrieves-the-content-of-a-specific-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileId|path|string(uuid)|true|File id for single object|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

<h3 id="retrieves-the-content-of-a-specific-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns the byte array of the specific file based on id|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files files.read )
</aside>

## Retrieves a specific file associations

<a id="opIdgetFileAssociations"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Files/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Associations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /Files/{FileId}/Associations`

By passing in the appropriate options, 


<h3 id="retrieves-a-specific-file-associations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileId|path|string(uuid)|true|File id for single object|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
"[ { \"FileId\":\"6beccb4a-0d7d-4518-93f3-e0cd1dccb254\", \"ObjectId\":\"1270bf7c-5d18-473a-9231-1e36c4bd33ed\", \"ObjectType\":\"Business\", \"ObjectGroup\":\"Contact\" } ]"
```

<h3 id="retrieves-a-specific-file-associations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|Inline|

<h3 id="retrieves-a-specific-file-associations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Association](#schemaassociation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files files.read )
</aside>

## Creates a new file association

<a id="opIdcreateFileAssociation"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Files/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Associations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID' \
  -d '"{ \"ObjectId\": \"1270bf7c-5d18-473a-9231-1e36c4bd33ed\", \"ObjectGroup\": \"Contact\", \"ObjectType\": \"Business\" }"'
```

`POST /Files/{FileId}/Associations`

By passing in the appropriate options, you can create a new folder

> Body parameter

```json
"{ \"ObjectId\": \"1270bf7c-5d18-473a-9231-1e36c4bd33ed\", \"ObjectGroup\": \"Contact\", \"ObjectType\": \"Business\" }"
```

<h3 id="creates-a-new-file-association-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|FileId|path|string(uuid)|true|File id for single object|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|
|body|body|[Association](#schemaassociation)|true|none|
|» SendWithObject|body|boolean|false|Boolean flag to determines whether the file is sent with the document it is attached to on client facing communications. Note- The SendWithObject element is only returned when using /Associations/{ObjectId} endpoint.|
|» Name|body|string|false|The name of the associated file. Note- The Name element is only returned when using /Associations/{ObjectId} endpoint.|
|» Size|body|integer|false|The size of the associated file in bytes. Note- The Size element is only returned when using /Associations/{ObjectId} endpoint.|
|» CreatedDateUtc|body|string(date-time)|false|The date the file was created (UTC). Note- The CreatedDateUtc element is only returned when using /Associations/{ObjectId} endpoint.|
|» AssociationDateUtc|body|string(date-time)|false|The date the file was associated with the object (UTC). Note- The AssociationDateUtc element is only returned when using /Associations/{ObjectId} endpoint.|
|» FileId|body|string(uuid)|false|The unique identifier of the file|
|» ObjectId|body|string(uuid)|false|The identifier of the object that the file is being associated with (e.g. InvoiceID, BankTransactionID, ContactID)|
|» ObjectGroup|body|[ObjectGroup](#schemaobjectgroup)|false|The Object Group that the object is in. These roughly correlate to the endpoints that can be used to retrieve the object via the core accounting API.|
|» ObjectType|body|[ObjectType](#schemaobjecttype)|false|The Object Type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ObjectGroup|Account|
|» ObjectGroup|BankTransaction|
|» ObjectGroup|Contact|
|» ObjectGroup|CreditNote|
|» ObjectGroup|Invoice|
|» ObjectGroup|Item|
|» ObjectGroup|ManualJournal|
|» ObjectGroup|Overpayment|
|» ObjectGroup|Payment|
|» ObjectGroup|Prepayment|
|» ObjectGroup|Quote|
|» ObjectGroup|Receipt|
|» ObjectType|Unknown|
|» ObjectType|Accpay|
|» ObjectType|AccPayCredit|
|» ObjectType|AccPayPayment|
|» ObjectType|AccRec|
|» ObjectType|AccRecCredit|
|» ObjectType|AccRecPayment|
|» ObjectType|Adjustment|
|» ObjectType|ApCreditPayment|
|» ObjectType|ApOverPayment|
|» ObjectType|ApOverPaymentPayment|
|» ObjectType|ApOverPaymentSourcePayment|
|» ObjectType|ApPrepayment|
|» ObjectType|ApPrepaymentPayment|
|» ObjectType|ApPrepaymentSourcePayment|
|» ObjectType|ArCreditPayment|
|» ObjectType|ArOverPayment|
|» ObjectType|ArOverpaymentPayment|
|» ObjectType|ArOverpaymentSourcePayment|
|» ObjectType|ArPrepayment|
|» ObjectType|ArPrepaymentPayment|
|» ObjectType|ArPrepaymentSourcePayment|
|» ObjectType|CashPaid|
|» ObjectType|CashRec|
|» ObjectType|ExpPayment|
|» ObjectType|ManJournal|
|» ObjectType|PurchaseOrder|
|» ObjectType|Receipt|
|» ObjectType|Transfer|
|» ObjectType|Account|
|» ObjectType|Contact|
|» ObjectType|Business|
|» ObjectType|Employee|
|» ObjectType|Person|
|» ObjectType|User|
|» ObjectType|Org|
|» ObjectType|FixedAsset|
|» ObjectType|PayRun|
|» ObjectType|PriceListItem|
|» ObjectType|Bank|
|» ObjectType|Current|
|» ObjectType|Equity|
|» ObjectType|Expense|
|» ObjectType|Fixed|
|» ObjectType|Liability|
|» ObjectType|Prepayment|
|» ObjectType|Revenue|
|» ObjectType|Sales|
|» ObjectType|Overheads|
|» ObjectType|Depreciatn|
|» ObjectType|OtherIncome|
|» ObjectType|DirectCosts|
|» ObjectType|Currliab|
|» ObjectType|Termliab|
|» ObjectType|NonCurrent|
|» ObjectType|SalesQuote|

> Example responses

> 201 Response

```json
"{ \"FileId\": \"6beccb4a-0d7d-4518-93f3-e0cd1dccb254\", \"ObjectId\": \"1270bf7c-5d18-473a-9231-1e36c4bd33ed\", \"ObjectType\": \"Business\", \"ObjectGroup\": \"Contact\" }"
```

> 400 Response

```json
"[ { \"type\":\"Validation\", \"title\":\"Validation failure\", \"detail\":\"Object is not a Account\" } ]"
```

<h3 id="creates-a-new-file-association-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful request|[Association](#schemaassociation)|
|400|Bad Request|invalid input, object invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files )
</aside>

## Deletes an existing file association

<a id="opIddeleteFileAssociation"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Files/4ff1e5cc-9835-40d5-bb18-09fdb118db9c/Associations/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`DELETE /Files/{FileId}/Associations/{ObjectId}`

By passing in the appropriate options, you can create a new folder

<h3 id="deletes-an-existing-file-association-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileId|path|string(uuid)|true|File id for single object|
|ObjectId|path|string(uuid)|true|Object id for single object|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

<h3 id="deletes-an-existing-file-association-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful deletion - return response 204 no content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files )
</aside>

## Retrieves an association object using a unique object ID

<a id="opIdgetAssociationsByObject"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Associations/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /Associations/{ObjectId}`

By passing in the appropriate options, you can retrieve an association

<h3 id="retrieves-an-association-object-using-a-unique-object-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ObjectId|path|string(uuid)|true|Object id for single object|
|pagesize|query|integer|false|pass an optional page size value|
|page|query|integer|false|number of records to skip for pagination|
|sort|query|string|false|values to sort by|
|direction|query|string|false|direction to sort by|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|Name|
|sort|Size|
|sort|CreatedDateUtc|
|sort|AssociationDateUtc|
|direction|ASC|
|direction|DESC|

> Example responses

> 200 Response

```json
"[ { \"SendWithObject\":false, \"Name\":\"testfile.pdf\", \"Size\":12357, \"CreatedDateUtc\":\"2020-12-10T01:22:00.0000000\", \"AssociationDateUtc\":\"2020-12-10T01:22:00.0000000\", \"FileId\":\"6beccb4a-0d7d-4518-93f3-e0cd1dccb254\", \"ObjectId\":\"1270bf7c-5d18-473a-9231-1e36c4bd33ed\", \"ObjectType\":\"Business\", \"ObjectGroup\":\"Contact\" } ]"
```

<h3 id="retrieves-an-association-object-using-a-unique-object-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|Inline|

<h3 id="retrieves-an-association-object-using-a-unique-object-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Association](#schemaassociation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files files.read )
</aside>

## Retrieves a count of associations for a list of objects.

<a id="opIdgetAssociationsCount"></a>

> Code samples

```bash
curl 'https://api.xero.com/files.xro/1.0/Associations/Count?ObjectIds=1270bf7c-5d18-473a-9231-1e36c4bd33ed' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /Associations/Count`

By passing in the appropriate options, you can retrieve the association count for objects

<h3 id="retrieves-a-count-of-associations-for-a-list-of-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ObjectIds|query|[string(uuid)]|true|A comma-separated list of object ids|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
"{ \"19d4fc59-e799-410f-912b-03d4ab294d73\": 2, \"82195976-5175-45d4-926e-807ff10892e7\": 1, \"a8547af2-2900-4879-98b8-f1a780c78feb\": 0}"
```

<h3 id="retrieves-a-count-of-associations-for-a-list-of-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A dictionary of the object Ids and associations count|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files files.read )
</aside>

## Retrieves folders

<a id="opIdgetFolders"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Folders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /Folders`

By passing in the appropriate options, you can search for available folders

<h3 id="retrieves-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|values to sort by|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|Name|
|sort|Size|
|sort|CreatedDateUTC|

> Example responses

> 200 Response

```json
"[ { \"Name\":\"Inbox\", \"FileCount\":14, \"Email\":\"xero.inbox.jpf4.6oo29retajkhtfus@xerofiles.com\", \"IsInbox\":true, \"Id\":\"bf924975-7097-46f2-a143-1ecfbab3c8c3\" }, { \"Name\":\"Contracts\", \"FileCount\":7, \"IsInbox\":false, \"Id\":\"554ff1ad-4b94-4266-9b45-e29bcb75e6bf\" } ]"
```

<h3 id="retrieves-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|Inline|

<h3 id="retrieves-folders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Folder](#schemafolder)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files files.read )
</aside>

## Creates a new folder

<a id="opIdcreateFolder"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Folders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID' \
  -d '"{ \"Name\": \"My Docs\" }"'
```

`POST /Folders`

By passing in the appropriate properties, you can create a new folder

> Body parameter

```json
"{ \"Name\": \"My Docs\" }"
```

<h3 id="creates-a-new-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|
|body|body|[Folder](#schemafolder)|true|none|
|» Name|body|string|false|The name of the folder|
|» FileCount|body|integer|false|The number of files in the folder|
|» Email|body|string|false|The email address used to email files to the inbox. Only the inbox will have this element.|
|» IsInbox|body|boolean|false|to indicate if the folder is the Inbox. The Inbox cannot be renamed or deleted.|
|» Id|body|string(uuid)|false|Xero unique identifier for a folder  Files|

> Example responses

> 200 Response

```json
"{ \"Name\": \"My Docs\", \"FileCount\": 0, \"IsInbox\": false, \"Id\": \"913970ad-8c8e-4666-8294-35b9cac23206\" }"
```

> 400 Response

```json
"[ { \"type\":\"Validation\", \"title\":\"Validation failure\", \"detail\":\"Name contains one or more bad characters\" } ]"
```

<h3 id="creates-a-new-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Folder](#schemafolder)|
|400|Bad Request|invalid input, object invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files )
</aside>

## Retrieves specific folder by using a unique folder ID

<a id="opIdgetFolder"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Folders/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /Folders/{FolderId}`

By passing in the appropriate ID, you can search for specific folder

<h3 id="retrieves-specific-folder-by-using-a-unique-folder-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FolderId|path|string(uuid)|true|Folder id for single object|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
"{ \"Name\": \"My Docs\", \"FileCount\": 0, \"IsInbox\": false, \"Id\": \"4c5f3fe4-2516-4863-ac88-3029351773bf\" }"
```

<h3 id="retrieves-specific-folder-by-using-a-unique-folder-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Folder](#schemafolder)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files files.read )
</aside>

## Updates an existing folder

<a id="opIdupdateFolder"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Folders/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID' \
  -d '"{ \"Name\": \"Your Docs\" }"'
```

`PUT /Folders/{FolderId}`

By passing in the appropriate ID and properties, you can update a folder

> Body parameter

```json
"{ \"Name\": \"Your Docs\" }"
```

<h3 id="updates-an-existing-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|FolderId|path|string(uuid)|true|Folder id for single object|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|
|body|body|[Folder](#schemafolder)|true|none|
|» Name|body|string|false|The name of the folder|
|» FileCount|body|integer|false|The number of files in the folder|
|» Email|body|string|false|The email address used to email files to the inbox. Only the inbox will have this element.|
|» IsInbox|body|boolean|false|to indicate if the folder is the Inbox. The Inbox cannot be renamed or deleted.|
|» Id|body|string(uuid)|false|Xero unique identifier for a folder  Files|

> Example responses

> 200 Response

```json
"{ \"Name\": \"Your Docs\", \"FileCount\": 0, \"IsInbox\": false, \"Id\": \"4c5f3fe4-2516-4863-ac88-3029351773bf\" }"
```

> 400 Response

```json
"[ { \"type\":\"Validation\", \"title\":\"Validation failure\", \"detail\":\"Name contains one or more bad characters\" } ]"
```

<h3 id="updates-an-existing-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|return the updated object|[Folder](#schemafolder)|
|400|Bad Request|invalid input, object invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files )
</aside>

## Deletes a folder

<a id="opIddeleteFolder"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Folders/4ff1e5cc-9835-40d5-bb18-09fdb118db9c \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`DELETE /Folders/{FolderId}`

By passing in the appropriate ID, you can delete a folder

<h3 id="deletes-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FolderId|path|string(uuid)|true|Folder id for single object|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

<h3 id="deletes-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful deletion - return response 204 no content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files )
</aside>

## Retrieves inbox folder

<a id="opIdgetInbox"></a>

> Code samples

```bash
curl https://api.xero.com/files.xro/1.0/Inbox \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /Inbox`

Search for the user inbox

<h3 id="retrieves-inbox-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
"{ \"Name\": \"Inbox\", \"FileCount\": 14, \"Email\": \"xero.inbox.jpf4.6oo29retajkhtfus@xerofiles.com\", \"IsInbox\": true, \"Id\": \"bf924975-7097-46f2-a143-1ecfbab3c8c3\" }"
```

<h3 id="retrieves-inbox-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Folder](#schemafolder)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: files files.read )
</aside>

# Schemas

<h2 id="tocS_Files">Files</h2>
<!-- backwards compatibility -->
<a id="schemafiles"></a>
<a id="schema_Files"></a>
<a id="tocSfiles"></a>
<a id="tocsfiles"></a>

```json
{
  "TotalCount": 2,
  "Page": 1,
  "PerPage": 50,
  "Items": [
    {
      "Name": "File2.jpg",
      "MimeType": "image/jpeg",
      "Size": 3615,
      "CreatedDateUtc": "2020-12-03T19:04:58.6970000",
      "UpdatedDateUtc": "2020-12-03T19:04:58.6970000",
      "User": {
        "Id": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        "Name": "john.smith@mail.com",
        "FirstName": "John",
        "LastName": "Smith",
        "FullName": "Smith"
      },
      "Id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "FolderId": "0f8ccf21-7267-4268-9167-a1e2c40c84c8"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalCount|integer|false|none|none|
|Page|integer|false|none|none|
|PerPage|integer|false|none|none|
|Items|[[FileObject](#schemafileobject)]|false|none|none|

<h2 id="tocS_FileObject">FileObject</h2>
<!-- backwards compatibility -->
<a id="schemafileobject"></a>
<a id="schema_FileObject"></a>
<a id="tocSfileobject"></a>
<a id="tocsfileobject"></a>

```json
{
  "Name": "File2.jpg",
  "MimeType": "image/jpeg",
  "Size": 3615,
  "CreatedDateUtc": "2020-12-03T19:04:58.6970000",
  "UpdatedDateUtc": "2020-12-03T19:04:58.6970000",
  "User": {
    "Id": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
    "Name": "john.smith@mail.com",
    "FirstName": "John",
    "LastName": "Smith",
    "FullName": "Smith"
  },
  "Id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "FolderId": "0f8ccf21-7267-4268-9167-a1e2c40c84c8"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|File Name|
|MimeType|string|false|none|MimeType of the file (image/png, image/jpeg, application/pdf, etc..)|
|Size|integer|false|none|Numeric value in bytes|
|CreatedDateUtc|string|false|none|Created date in UTC|
|UpdatedDateUtc|string|false|none|Updated date in UTC|
|User|[User](#schemauser)|false|none|none|
|Id|string(uuid)|false|none|File object's UUID|
|FolderId|string(uuid)|false|none|Folder relation object's UUID|

<h2 id="tocS_UploadObject">UploadObject</h2>
<!-- backwards compatibility -->
<a id="schemauploadobject"></a>
<a id="schema_UploadObject"></a>
<a id="tocSuploadobject"></a>
<a id="tocsuploadobject"></a>

```json
{
  "body": "string",
  "name": "string",
  "filename": "string",
  "mimeType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string(byte)|true|none|none|
|name|string|true|none|exact name of the file you are uploading|
|filename|string|true|none|none|
|mimeType|string|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "Id": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
  "Name": "john.smith@mail.com",
  "FirstName": "John",
  "LastName": "Smith",
  "FullName": "Smith"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string(uuid)|true|none|Xero identifier|
|Name|string|false|none|Key is Name, but returns Email address of user who created the file|
|FirstName|string|false|none|First name of user|
|LastName|string|false|none|Last name of user|
|FullName|string|false|none|Last name of user|

<h2 id="tocS_Folders">Folders</h2>
<!-- backwards compatibility -->
<a id="schemafolders"></a>
<a id="schema_Folders"></a>
<a id="tocSfolders"></a>
<a id="tocsfolders"></a>

```json
{
  "Folders": [
    {
      "Name": "assets",
      "FileCount": 5,
      "Email": "foo@bar.com",
      "IsInbox": true,
      "Id": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Folders|[[Folder](#schemafolder)]|false|none|none|

<h2 id="tocS_Folder">Folder</h2>
<!-- backwards compatibility -->
<a id="schemafolder"></a>
<a id="schema_Folder"></a>
<a id="tocSfolder"></a>
<a id="tocsfolder"></a>

```json
{
  "Name": "assets",
  "FileCount": 5,
  "Email": "foo@bar.com",
  "IsInbox": true,
  "Id": "4ff1e5cc-9835-40d5-bb18-09fdb118db9c"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|The name of the folder|
|FileCount|integer|false|none|The number of files in the folder|
|Email|string|false|none|The email address used to email files to the inbox. Only the inbox will have this element.|
|IsInbox|boolean|false|none|to indicate if the folder is the Inbox. The Inbox cannot be renamed or deleted.|
|Id|string(uuid)|false|none|Xero unique identifier for a folder  Files|

<h2 id="tocS_Association">Association</h2>
<!-- backwards compatibility -->
<a id="schemaassociation"></a>
<a id="schema_Association"></a>
<a id="tocSassociation"></a>
<a id="tocsassociation"></a>

```json
{
  "SendWithObject": true,
  "Name": "Test.pdf",
  "Size": 12357,
  "CreatedDateUtc": "2020-12-10T01:22:00.0000000",
  "AssociationDateUtc": "2020-12-10T01:22:00.0000000",
  "FileId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ObjectId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "ObjectGroup": "Account",
  "ObjectType": "Unknown"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SendWithObject|boolean|false|none|Boolean flag to determines whether the file is sent with the document it is attached to on client facing communications. Note- The SendWithObject element is only returned when using /Associations/{ObjectId} endpoint.|
|Name|string|false|none|The name of the associated file. Note- The Name element is only returned when using /Associations/{ObjectId} endpoint.|
|Size|integer|false|none|The size of the associated file in bytes. Note- The Size element is only returned when using /Associations/{ObjectId} endpoint.|
|CreatedDateUtc|string(date-time)|false|none|The date the file was created (UTC). Note- The CreatedDateUtc element is only returned when using /Associations/{ObjectId} endpoint.|
|AssociationDateUtc|string(date-time)|false|none|The date the file was associated with the object (UTC). Note- The AssociationDateUtc element is only returned when using /Associations/{ObjectId} endpoint.|
|FileId|string(uuid)|false|none|The unique identifier of the file|
|ObjectId|string(uuid)|false|none|The identifier of the object that the file is being associated with (e.g. InvoiceID, BankTransactionID, ContactID)|
|ObjectGroup|[ObjectGroup](#schemaobjectgroup)|false|none|The Object Group that the object is in. These roughly correlate to the endpoints that can be used to retrieve the object via the core accounting API.|
|ObjectType|[ObjectType](#schemaobjecttype)|false|none|The Object Type|

#### Enumerated Values

|Property|Value|
|---|---|
|ObjectGroup|Account|
|ObjectGroup|BankTransaction|
|ObjectGroup|Contact|
|ObjectGroup|CreditNote|
|ObjectGroup|Invoice|
|ObjectGroup|Item|
|ObjectGroup|ManualJournal|
|ObjectGroup|Overpayment|
|ObjectGroup|Payment|
|ObjectGroup|Prepayment|
|ObjectGroup|Quote|
|ObjectGroup|Receipt|
|ObjectType|Unknown|
|ObjectType|Accpay|
|ObjectType|AccPayCredit|
|ObjectType|AccPayPayment|
|ObjectType|AccRec|
|ObjectType|AccRecCredit|
|ObjectType|AccRecPayment|
|ObjectType|Adjustment|
|ObjectType|ApCreditPayment|
|ObjectType|ApOverPayment|
|ObjectType|ApOverPaymentPayment|
|ObjectType|ApOverPaymentSourcePayment|
|ObjectType|ApPrepayment|
|ObjectType|ApPrepaymentPayment|
|ObjectType|ApPrepaymentSourcePayment|
|ObjectType|ArCreditPayment|
|ObjectType|ArOverPayment|
|ObjectType|ArOverpaymentPayment|
|ObjectType|ArOverpaymentSourcePayment|
|ObjectType|ArPrepayment|
|ObjectType|ArPrepaymentPayment|
|ObjectType|ArPrepaymentSourcePayment|
|ObjectType|CashPaid|
|ObjectType|CashRec|
|ObjectType|ExpPayment|
|ObjectType|ManJournal|
|ObjectType|PurchaseOrder|
|ObjectType|Receipt|
|ObjectType|Transfer|
|ObjectType|Account|
|ObjectType|Contact|
|ObjectType|Business|
|ObjectType|Employee|
|ObjectType|Person|
|ObjectType|User|
|ObjectType|Org|
|ObjectType|FixedAsset|
|ObjectType|PayRun|
|ObjectType|PriceListItem|
|ObjectType|Bank|
|ObjectType|Current|
|ObjectType|Equity|
|ObjectType|Expense|
|ObjectType|Fixed|
|ObjectType|Liability|
|ObjectType|Prepayment|
|ObjectType|Revenue|
|ObjectType|Sales|
|ObjectType|Overheads|
|ObjectType|Depreciatn|
|ObjectType|OtherIncome|
|ObjectType|DirectCosts|
|ObjectType|Currliab|
|ObjectType|Termliab|
|ObjectType|NonCurrent|
|ObjectType|SalesQuote|

<h2 id="tocS_ObjectGroup">ObjectGroup</h2>
<!-- backwards compatibility -->
<a id="schemaobjectgroup"></a>
<a id="schema_ObjectGroup"></a>
<a id="tocSobjectgroup"></a>
<a id="tocsobjectgroup"></a>

```json
"Account"
```

The Object Group that the object is in. These roughly correlate to the endpoints that can be used to retrieve the object via the core accounting API.

<h2 id="tocS_ObjectType">ObjectType</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttype"></a>
<a id="schema_ObjectType"></a>
<a id="tocSobjecttype"></a>
<a id="tocsobjecttype"></a>

```json
"Unknown"
```

The Object Type
