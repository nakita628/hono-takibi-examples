<h1 id="amazon-workdocs">Amazon WorkDocs v2016-05-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>The Amazon WorkDocs API is designed for the following use cases:</p> <ul> <li> <p>File Migration: File migration applications are supported for users who want to migrate their files from an on-premises or off-premises file system or service. Users can insert files into a user directory structure, as well as allow for basic metadata changes, such as modifications to the permissions of files.</p> </li> <li> <p>Security: Support security applications are supported for users who have additional security needs, such as antivirus or data loss prevention. The API actions, along with CloudTrail, allow these applications to detect when changes occur in Amazon WorkDocs. Then, the application can take the necessary actions and replace the target file. If the target file violates the policy, the application can also choose to email the user.</p> </li> <li> <p>eDiscovery/Analytics: General administrative applications are supported, such as eDiscovery and analytics. These applications can choose to mimic or record the actions in an Amazon WorkDocs site, along with CloudTrail, to replicate data for eDiscovery, backup, or analytical applications.</p> </li> </ul> <p>All Amazon WorkDocs API actions are Amazon authenticated and certificate-signed. They not only require the use of the Amazon Web Services SDK, but also allow for the exclusive use of IAM users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the Amazon WorkDocs site, the IAM user gains full administrative visibility into the entire Amazon WorkDocs site (or as set in the IAM policy). This includes, but is not limited to, the ability to modify file permissions and upload any file to any user. This allows developers to perform the three use cases above, as well as give users the ability to grant access on a selective basis using the IAM model.</p> <note> <p>The pricing for Amazon WorkDocs APIs varies depending on the API call type for these actions:</p> <ul> <li> <p> <code>READ (Get*)</code> </p> </li> <li> <p> <code>WRITE (Activate*, Add*, Create*, Deactivate*, Initiate*, Update*)</code> </p> </li> <li> <p> <code>LIST (Describe*)</code> </p> </li> <li> <p> <code>DELETE*, CANCEL</code> </p> </li> </ul> <p>For information about Amazon WorkDocs API pricing, see <a href="https://aws.amazon.com/workdocs/pricing/">Amazon WorkDocs Pricing</a>.</p> </note>

Base URLs:

* <a href="http://workdocs.us-east-1.amazonaws.com">http://workdocs.us-east-1.amazonaws.com</a> - The Amazon WorkDocs multi-region endpoint

* <a href="https://workdocs.us-east-1.amazonaws.com">https://workdocs.us-east-1.amazonaws.com</a> - The Amazon WorkDocs multi-region endpoint

* <a href="http://workdocs.cn-north-1.amazonaws.com.cn">http://workdocs.cn-north-1.amazonaws.com.cn</a> - The Amazon WorkDocs endpoint for China (Beijing) and China (Ningxia)

* <a href="https://workdocs.cn-north-1.amazonaws.com.cn">https://workdocs.cn-north-1.amazonaws.com.cn</a> - The Amazon WorkDocs endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/workdocs/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-workdocs-default">Default</h1>

## GetDocumentVersion

<a id="opIdGetDocumentVersion"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/documents/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/documents/{DocumentId}/versions/{VersionId}`

Retrieves version metadata for the specified document.

<h3 id="getdocumentversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|DocumentId|path|string|true|The ID of the document.|
|VersionId|path|string|true|The version ID of the document.|
|fields|query|string|false|A comma-separated list of values. Specify "SOURCE" to include a URL for the source document.|
|includeCustomMetadata|query|boolean|false|Set this to TRUE to include custom metadata in the response.|
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
  "Metadata": {
    "Id": {},
    "Name": {},
    "ContentType": {},
    "Size": {},
    "Signature": {},
    "Status": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "ContentCreatedTimestamp": {},
    "ContentModifiedTimestamp": {},
    "CreatorId": {},
    "Thumbnail": {
      "property1": "password",
      "property2": "password"
    },
    "Source": {
      "property1": "password",
      "property2": "password"
    }
  },
  "CustomMetadata": {
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

<h3 id="getdocumentversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDocumentVersionResponse](#schemagetdocumentversionresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|486|486|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AbortDocumentVersionUpload

<a id="opIdAbortDocumentVersionUpload"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/documents/string/versions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/documents/{DocumentId}/versions/{VersionId}`

Aborts the upload of the specified document version that was previously initiated by <a>InitiateDocumentVersionUpload</a>. The client should make this call only when it no longer intends to upload the document version, or fails to do so.

<h3 id="abortdocumentversionupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|DocumentId|path|string|true|The ID of the document.|
|VersionId|path|string|true|The ID of the version.|
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

> 486 Response

```json
null
```

<h3 id="abortdocumentversionupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|482|482|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|483|483|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|484|484|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDocumentVersion

<a id="opIdUpdateDocumentVersion"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/documents/string/versions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "VersionStatus": "ACTIVE"
  }'
```

`PATCH /api/v1/documents/{DocumentId}/versions/{VersionId}`

<p>Changes the status of the document version to ACTIVE. </p> <p>Amazon WorkDocs also sets its document container to ACTIVE. This is the last step in a document upload, after the client uploads the document to an S3-presigned URL returned by <a>InitiateDocumentVersionUpload</a>. </p>

> Body parameter

```json
{
  "VersionStatus": "ACTIVE"
}
```

<h3 id="updatedocumentversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|DocumentId|path|string|true|The ID of the document.|
|VersionId|path|string|true|The version ID of the document.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» VersionStatus|body|string|false|The status of the version.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» VersionStatus|ACTIVE|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="updatedocumentversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|484|484|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|485|485|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|486|486|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|487|487|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ActivateUser

<a id="opIdActivateUser"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/users/string/activation \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/v1/users/{UserId}/activation`

Activates the specified user. Only active users can access Amazon WorkDocs.

<h3 id="activateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|path|string|true|The ID of the user.|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
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
  "User": {
    "Id": {},
    "Username": {},
    "EmailAddress": {},
    "GivenName": {},
    "Surname": {},
    "OrganizationId": {},
    "RootFolderId": {},
    "RecycleBinFolderId": {},
    "Status": {},
    "Type": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "TimeZoneId": {},
    "Locale": {},
    "Storage": {
      "StorageUtilizedInBytes": {},
      "StorageRule": {
        "StorageAllocatedInBytes": {},
        "StorageType": {}
      }
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

<h3 id="activateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivateUserResponse](#schemaactivateuserresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeactivateUser

<a id="opIdDeactivateUser"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/users/string/activation \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/users/{UserId}/activation`

Deactivates the specified user, which revokes the user's access to Amazon WorkDocs.

<h3 id="deactivateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|path|string|true|The ID of the user.|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
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

<h3 id="deactivateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeResourcePermissions

<a id="opIdDescribeResourcePermissions"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/resources/string/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/resources/{ResourceId}/permissions`

Describes the permissions of a specified resource.

<h3 id="describeresourcepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|ResourceId|path|string|true|The ID of the resource.|
|principalId|query|string|false|The ID of the principal to filter permissions by.|
|limit|query|integer|false|The maximum number of items to return with this call.|
|marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call)|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
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
  "Principals": {},
  "Marker": {}
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

<h3 id="describeresourcepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeResourcePermissionsResponse](#schemadescriberesourcepermissionsresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddResourcePermissions

<a id="opIdAddResourcePermissions"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/resources/string/permissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Principals": [
      {
        "Id": {},
        "Type": {},
        "Role": {}
      }
    ],
    "NotificationOptions": {
      "SendEmail": {},
      "EmailMessage": {}
    }
  }'
```

`POST /api/v1/resources/{ResourceId}/permissions`

Creates a set of permissions for the specified folder or document. The resource permissions are overwritten if the principals already have different permissions.

> Body parameter

```json
{
  "Principals": [
    {
      "Id": {},
      "Type": {},
      "Role": {}
    }
  ],
  "NotificationOptions": {
    "SendEmail": {},
    "EmailMessage": {}
  }
}
```

<h3 id="addresourcepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|ResourceId|path|string|true|The ID of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Principals|body|[[SharePrincipal](#schemashareprincipal)]|true|The users, groups, or organization being granted permission.|
|» NotificationOptions|body|object|false|Set of options which defines notification preferences of given action.|
|» » SendEmail|body|object|false|none|
|» » EmailMessage|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "ShareResults": {}
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

<h3 id="addresourcepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[AddResourcePermissionsResponse](#schemaaddresourcepermissionsresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|482|482|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveAllResourcePermissions

<a id="opIdRemoveAllResourcePermissions"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/resources/string/permissions \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/resources/{ResourceId}/permissions`

Removes all the permissions from the specified resource.

<h3 id="removeallresourcepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|ResourceId|path|string|true|The ID of the resource.|
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

<h3 id="removeallresourcepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|482|482|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateComment

<a id="opIdCreateComment"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/documents/string/versions/string/comment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ParentId": "string",
    "ThreadId": "string",
    "Text": "password",
    "Visibility": "PUBLIC",
    "NotifyCollaborators": true
  }'
```

`POST /api/v1/documents/{DocumentId}/versions/{VersionId}/comment`

Adds a new comment to the specified document version.

> Body parameter

```json
{
  "ParentId": "string",
  "ThreadId": "string",
  "Text": "password",
  "Visibility": "PUBLIC",
  "NotifyCollaborators": true
}
```

<h3 id="createcomment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|DocumentId|path|string|true|The ID of the document.|
|VersionId|path|string|true|The ID of the document version.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ParentId|body|string|false|The ID of the parent comment.|
|» ThreadId|body|string|false|The ID of the root comment in the thread.|
|» Text|body|string(password)|true|The text of the comment.|
|» Visibility|body|string|false|The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors.|
|» NotifyCollaborators|body|boolean|false|Set this parameter to TRUE to send an email out to the document collaborators after the comment is created.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Visibility|PUBLIC|
|» Visibility|PRIVATE|

> Example responses

> 201 Response

```json
{
  "Comment": {
    "CommentId": {},
    "ParentId": {},
    "ThreadId": {},
    "Text": {},
    "Contributor": {
      "Id": {},
      "Username": {},
      "EmailAddress": {},
      "GivenName": {},
      "Surname": {},
      "OrganizationId": {},
      "RootFolderId": {},
      "RecycleBinFolderId": {},
      "Status": {},
      "Type": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "TimeZoneId": {},
      "Locale": {},
      "Storage": {
        "StorageUtilizedInBytes": {},
        "StorageRule": {
          "StorageAllocatedInBytes": {},
          "StorageType": {}
        }
      }
    },
    "CreatedTimestamp": {},
    "Status": {},
    "Visibility": {},
    "RecipientId": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="createcomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateCommentResponse](#schemacreatecommentresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|482|482|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|483|483|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|484|484|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|DocumentLockedForCommentsException|[DocumentLockedForCommentsException](#schemadocumentlockedforcommentsexception)|
|487|487|InvalidCommentOperationException|[InvalidCommentOperationException](#schemainvalidcommentoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCustomMetadata

<a id="opIdCreateCustomMetadata"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/resources/string/customMetadata \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CustomMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /api/v1/resources/{ResourceId}/customMetadata`

Adds one or more custom properties to the specified resource (a folder, document, or version).

> Body parameter

```json
{
  "CustomMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createcustommetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|ResourceId|path|string|true|The ID of the resource.|
|versionid|query|string|false|The ID of the version, if the custom metadata is being added to a document version.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CustomMetadata|body|object|true|Custom metadata in the form of name-value pairs.|
|» » **additionalProperties**|body|[CustomMetadataValueType](#schemacustommetadatavaluetype)|false|none|

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

<h3 id="createcustommetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCustomMetadataResponse](#schemacreatecustommetadataresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|484|484|CustomMetadataLimitExceededException|[CustomMetadataLimitExceededException](#schemacustommetadatalimitexceededexception)|
|485|485|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCustomMetadata

<a id="opIdDeleteCustomMetadata"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/resources/string/customMetadata \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/resources/{ResourceId}/customMetadata`

Deletes custom metadata from the specified resource.

<h3 id="deletecustommetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|ResourceId|path|string|true|The ID of the resource, either a document or folder.|
|versionId|query|string|false|The ID of the version, if the custom metadata is being deleted from a document version.|
|keys|query|[[CustomMetadataKeyType](#schemacustommetadatakeytype)]|false|List of properties to remove.|
|deleteAll|query|boolean|false|Flag to indicate removal of all custom metadata properties from the specified resource.|
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

<h3 id="deletecustommetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCustomMetadataResponse](#schemadeletecustommetadataresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|484|484|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFolder

<a id="opIdCreateFolder"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/folders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "password",
    "ParentFolderId": "string"
  }'
```

`POST /api/v1/folders`

Creates a folder with the specified name and parent folder.

> Body parameter

```json
{
  "Name": "password",
  "ParentFolderId": "string"
}
```

<h3 id="createfolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string(password)|false|The name of the new folder.|
|» ParentFolderId|body|string|true|The ID of the parent folder.|

> Example responses

> 201 Response

```json
{
  "Metadata": {
    "Id": {},
    "Name": {},
    "CreatorId": {},
    "ParentFolderId": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "ResourceState": {},
    "Signature": {},
    "Labels": {},
    "Size": {},
    "LatestVersionSize": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="createfolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateFolderResponse](#schemacreatefolderresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|EntityAlreadyExistsException|[EntityAlreadyExistsException](#schemaentityalreadyexistsexception)|
|482|482|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|483|483|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|487|487|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|488|488|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|489|489|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLabels

<a id="opIdCreateLabels"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/resources/string/labels \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Labels": [
      "string"
    ]
  }'
```

`PUT /api/v1/resources/{ResourceId}/labels`

Adds the specified list of labels to the given resource (a document or folder)

> Body parameter

```json
{
  "Labels": [
    "string"
  ]
}
```

<h3 id="createlabels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceId|path|string|true|The ID of the resource.|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Labels|body|[[SharedLabel](#schemasharedlabel)]|true|List of labels to add to the resource.|

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

<h3 id="createlabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLabelsResponse](#schemacreatelabelsresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyLabelsException|[TooManyLabelsException](#schematoomanylabelsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLabels

<a id="opIdDeleteLabels"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/resources/string/labels \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/resources/{ResourceId}/labels`

Deletes the specified list of labels from a resource.

<h3 id="deletelabels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceId|path|string|true|The ID of the resource.|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|labels|query|[[SharedLabel](#schemasharedlabel)]|false|List of labels to delete from the resource.|
|deleteAll|query|boolean|false|Flag to request removal of all labels from the specified resource.|
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

<h3 id="deletelabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLabelsResponse](#schemadeletelabelsresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeNotificationSubscriptions

<a id="opIdDescribeNotificationSubscriptions"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/organizations/string/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/organizations/{OrganizationId}/subscriptions`

Lists the specified notification subscriptions.

<h3 id="describenotificationsubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OrganizationId|path|string|true|The ID of the organization.|
|marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|limit|query|integer|false|The maximum number of items to return with this call.|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
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
  "Subscriptions": {},
  "Marker": {}
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

<h3 id="describenotificationsubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeNotificationSubscriptionsResponse](#schemadescribenotificationsubscriptionsresponse)|
|480|480|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|481|481|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateNotificationSubscription

<a id="opIdCreateNotificationSubscription"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/organizations/string/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Endpoint": "string",
    "Protocol": "HTTPS",
    "SubscriptionType": "ALL"
  }'
```

`POST /api/v1/organizations/{OrganizationId}/subscriptions`

<p>Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a confirmation message, and must confirm the subscription.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/manage-notifications.html">Setting up notifications for an IAM user or role</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>

> Body parameter

```json
{
  "Endpoint": "string",
  "Protocol": "HTTPS",
  "SubscriptionType": "ALL"
}
```

<h3 id="createnotificationsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OrganizationId|path|string|true|The ID of the organization.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Endpoint|body|string|true|The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint is a URL that begins with <code>https</code>.|
|» Protocol|body|string|true|The protocol to use. The supported value is https, which delivers JSON-encoded messages using HTTPS POST.|
|» SubscriptionType|body|string|true|The notification type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Protocol|HTTPS|
|» Protocol|SQS|
|» SubscriptionType|ALL|

> Example responses

> 200 Response

```json
{
  "Subscription": {
    "SubscriptionId": {},
    "EndPoint": {},
    "Protocol": {}
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

<h3 id="createnotificationsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateNotificationSubscriptionResponse](#schemacreatenotificationsubscriptionresponse)|
|480|480|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|481|481|TooManySubscriptionsException|[TooManySubscriptionsException](#schematoomanysubscriptionsexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUsers

<a id="opIdDescribeUsers"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/users \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/users`

<p>Describes the specified users. You can describe all users or filter the results (for example, by status or organization).</p> <p>By default, Amazon WorkDocs returns the first 24 active or pending users. If there are more results, the response includes a marker that you can use to request the next set of results.</p>

<h3 id="describeusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|organizationId|query|string|false|The ID of the organization.|
|userIds|query|string|false|The IDs of the users.|
|query|query|string(password)|false|<p>A query to filter users by user name. Remember the following about the <code>Userids</code> and <code>Query</code> parameters:</p> <ul> <li> <p>If you don't use either parameter, the API returns a paginated list of all users on the site.</p> </li> <li> <p>If you use both parameters, the API ignores the <code>Query</code> parameter.</p> </li> <li> <p>The <code>Userid</code> parameter only returns user names that match a corresponding user ID.</p> </li> <li> <p>The <code>Query</code> parameter runs a "prefix" search for users by the <code>GivenName</code>, <code>SurName</code>, or <code>UserName</code> fields included in a <a href="https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateUser.html">CreateUser</a> API call. For example, querying on <code>Ma</code> returns Márcia Oliveira, María García, and Mateo Jackson. If you use multiple characters, the API only returns data that matches all characters. For example, querying on <code>Ma J</code> only returns Mateo Jackson.</p> </li> </ul>|
|include|query|string|false|The state of the users. Specify "ALL" to include inactive users.|
|order|query|string|false|The order for the results.|
|sort|query|string|false|The sorting criteria.|
|marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|limit|query|integer|false|The maximum number of items to return.|
|fields|query|string|false|A comma-separated list of values. Specify "STORAGE_METADATA" to include the user storage quota and utilization information.|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
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
|include|ALL|
|include|ACTIVE_PENDING|
|order|ASCENDING|
|order|DESCENDING|
|sort|USER_NAME|
|sort|FULL_NAME|
|sort|STORAGE_LIMIT|
|sort|USER_STATUS|
|sort|STORAGE_USED|

> Example responses

> 200 Response

```json
{
  "Users": {},
  "TotalNumberOfUsers": {},
  "Marker": {}
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

<h3 id="describeusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUsersResponse](#schemadescribeusersresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|486|486|RequestedEntityTooLargeException|[RequestedEntityTooLargeException](#schemarequestedentitytoolargeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUser

<a id="opIdCreateUser"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "OrganizationId": "string",
    "Username": "password",
    "EmailAddress": "password",
    "GivenName": "password",
    "Surname": "password",
    "Password": "password",
    "TimeZoneId": "string",
    "StorageRule": {
      "StorageAllocatedInBytes": {},
      "StorageType": {}
    }
  }'
```

`POST /api/v1/users`

Creates a user in a Simple AD or Microsoft AD directory. The status of a newly created user is "ACTIVE". New users can access Amazon WorkDocs.

> Body parameter

```json
{
  "OrganizationId": "string",
  "Username": "password",
  "EmailAddress": "password",
  "GivenName": "password",
  "Surname": "password",
  "Password": "password",
  "TimeZoneId": "string",
  "StorageRule": {
    "StorageAllocatedInBytes": {},
    "StorageType": {}
  }
}
```

<h3 id="createuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» OrganizationId|body|string|false|The ID of the organization.|
|» Username|body|string(password)|true|The login name of the user.|
|» EmailAddress|body|string(password)|false|The email address of the user.|
|» GivenName|body|string(password)|true|The given name of the user.|
|» Surname|body|string(password)|true|The surname of the user.|
|» Password|body|string(password)|true|The password of the user.|
|» TimeZoneId|body|string|false|The time zone ID of the user.|
|» StorageRule|body|object|false|Describes the storage for a user.|
|» » StorageAllocatedInBytes|body|object|false|none|
|» » StorageType|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "User": {
    "Id": {},
    "Username": {},
    "EmailAddress": {},
    "GivenName": {},
    "Surname": {},
    "OrganizationId": {},
    "RootFolderId": {},
    "RecycleBinFolderId": {},
    "Status": {},
    "Type": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "TimeZoneId": {},
    "Locale": {},
    "Storage": {
      "StorageUtilizedInBytes": {},
      "StorageRule": {
        "StorageAllocatedInBytes": {},
        "StorageType": {}
      }
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

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateUserResponse](#schemacreateuserresponse)|
|480|480|EntityAlreadyExistsException|[EntityAlreadyExistsException](#schemaentityalreadyexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteComment

<a id="opIdDeleteComment"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/documents/string/versions/string/comment/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}`

Deletes the specified comment from the document version.

<h3 id="deletecomment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|DocumentId|path|string|true|The ID of the document.|
|VersionId|path|string|true|The ID of the document version.|
|CommentId|path|string|true|The ID of the comment.|
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

> 486 Response

```json
null
```

<h3 id="deletecomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|482|482|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|483|483|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|484|484|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|DocumentLockedForCommentsException|[DocumentLockedForCommentsException](#schemadocumentlockedforcommentsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDocument

<a id="opIdGetDocument"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/documents/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/documents/{DocumentId}`

Retrieves details of a document.

<h3 id="getdocument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|DocumentId|path|string|true|The ID of the document.|
|includeCustomMetadata|query|boolean|false|Set this to <code>TRUE</code> to include custom metadata in the response.|
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
  "Metadata": {
    "Id": {},
    "CreatorId": {},
    "ParentFolderId": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "LatestVersionMetadata": {
      "Id": {},
      "Name": {},
      "ContentType": {},
      "Size": {},
      "Signature": {},
      "Status": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "ContentCreatedTimestamp": {},
      "ContentModifiedTimestamp": {},
      "CreatorId": {},
      "Thumbnail": {
        "property1": "password",
        "property2": "password"
      },
      "Source": {
        "property1": "password",
        "property2": "password"
      }
    },
    "ResourceState": {},
    "Labels": {}
  },
  "CustomMetadata": {
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

<h3 id="getdocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDocumentResponse](#schemagetdocumentresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDocument

<a id="opIdDeleteDocument"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/documents/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/documents/{DocumentId}`

Permanently deletes the specified document and its associated metadata.

<h3 id="deletedocument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|DocumentId|path|string|true|The ID of the document.|
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="deletedocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|483|483|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|486|486|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|487|487|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|488|488|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDocument

<a id="opIdUpdateDocument"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/documents/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "password",
    "ParentFolderId": "string",
    "ResourceState": "ACTIVE"
  }'
```

`PATCH /api/v1/documents/{DocumentId}`

Updates the specified attributes of a document. The user must have access to both the document and its parent folder, if applicable.

> Body parameter

```json
{
  "Name": "password",
  "ParentFolderId": "string",
  "ResourceState": "ACTIVE"
}
```

<h3 id="updatedocument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|DocumentId|path|string|true|The ID of the document.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string(password)|false|The name of the document.|
|» ParentFolderId|body|string|false|The ID of the parent folder.|
|» ResourceState|body|string|false|The resource state of the document. Only ACTIVE and RECYCLED are supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ResourceState|ACTIVE|
|» ResourceState|RESTORING|
|» ResourceState|RECYCLING|
|» ResourceState|RECYCLED|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="updatedocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|EntityAlreadyExistsException|[EntityAlreadyExistsException](#schemaentityalreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|484|484|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|486|486|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|487|487|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|488|488|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|489|489|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDocumentVersion

<a id="opIdDeleteDocumentVersion"></a>

> Code samples

```bash
curl 'https://workdocs.us-east-1.amazonaws.com/api/v1/documentVersions/string/versions/string#deletePriorVersions?deletePriorVersions=true' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/documentVersions/{DocumentId}/versions/{VersionId}#deletePriorVersions`

Deletes a specific version of a document.

<h3 id="deletedocumentversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|DocumentId|path|string|true|The ID of the document associated with the version being deleted.|
|VersionId|path|string|true|The ID of the version being deleted.|
|deletePriorVersions|query|boolean|true|Deletes all versions of a document prior to the current version.|
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="deletedocumentversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|482|482|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|485|485|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|486|486|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|487|487|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFolder

<a id="opIdGetFolder"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/folders/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/folders/{FolderId}`

Retrieves the metadata of the specified folder.

<h3 id="getfolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|FolderId|path|string|true|The ID of the folder.|
|includeCustomMetadata|query|boolean|false|Set to TRUE to include custom metadata in the response.|
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
  "Metadata": {
    "Id": {},
    "Name": {},
    "CreatorId": {},
    "ParentFolderId": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "ResourceState": {},
    "Signature": {},
    "Labels": {},
    "Size": {},
    "LatestVersionSize": {}
  },
  "CustomMetadata": {
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

<h3 id="getfolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFolderResponse](#schemagetfolderresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFolder

<a id="opIdDeleteFolder"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/folders/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/folders/{FolderId}`

Permanently deletes the specified folder and its contents.

<h3 id="deletefolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|FolderId|path|string|true|The ID of the folder.|
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="deletefolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|483|483|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|486|486|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|487|487|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|488|488|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFolder

<a id="opIdUpdateFolder"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/folders/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "password",
    "ParentFolderId": "string",
    "ResourceState": "ACTIVE"
  }'
```

`PATCH /api/v1/folders/{FolderId}`

Updates the specified attributes of the specified folder. The user must have access to both the folder and its parent folder, if applicable.

> Body parameter

```json
{
  "Name": "password",
  "ParentFolderId": "string",
  "ResourceState": "ACTIVE"
}
```

<h3 id="updatefolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|FolderId|path|string|true|The ID of the folder.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string(password)|false|The name of the folder.|
|» ParentFolderId|body|string|false|The ID of the parent folder.|
|» ResourceState|body|string|false|The resource state of the folder. Only ACTIVE and RECYCLED are accepted values from the API.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ResourceState|ACTIVE|
|» ResourceState|RESTORING|
|» ResourceState|RECYCLING|
|» ResourceState|RECYCLED|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="updatefolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|EntityAlreadyExistsException|[EntityAlreadyExistsException](#schemaentityalreadyexistsexception)|
|482|482|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|483|483|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|487|487|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|488|488|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|489|489|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFolderContents

<a id="opIdDescribeFolderContents"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/folders/string/contents \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/folders/{FolderId}/contents`

<p>Describes the contents of the specified folder, including its documents and subfolders.</p> <p>By default, Amazon WorkDocs returns the first 100 active document and folder metadata items. If there are more results, the response includes a marker that you can use to request the next set of results. You can also request initialized documents.</p>

<h3 id="describefoldercontents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|FolderId|path|string|true|The ID of the folder.|
|sort|query|string|false|The sorting criteria.|
|order|query|string|false|The order for the contents of the folder.|
|limit|query|integer|false|The maximum number of items to return with this call.|
|marker|query|string|false|The marker for the next set of results. This marker was received from a previous call.|
|type|query|string|false|The type of items.|
|include|query|string|false|The contents to include. Specify "INITIALIZED" to include initialized documents.|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
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
|sort|DATE|
|sort|NAME|
|order|ASCENDING|
|order|DESCENDING|
|type|ALL|
|type|DOCUMENT|
|type|FOLDER|

> Example responses

> 200 Response

```json
{
  "Folders": {},
  "Documents": {},
  "Marker": {}
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

<h3 id="describefoldercontents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFolderContentsResponse](#schemadescribefoldercontentsresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFolderContents

<a id="opIdDeleteFolderContents"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/folders/string/contents \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/folders/{FolderId}/contents`

Deletes the contents of the specified folder.

<h3 id="deletefoldercontents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|FolderId|path|string|true|The ID of the folder.|
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

> 486 Response

```json
null
```

<h3 id="deletefoldercontents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|482|482|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|483|483|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|484|484|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|485|485|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteNotificationSubscription

<a id="opIdDeleteNotificationSubscription"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/organizations/string/subscriptions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}`

Deletes the specified subscription from the specified organization.

<h3 id="deletenotificationsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionId|path|string|true|The ID of the subscription.|
|OrganizationId|path|string|true|The ID of the organization.|
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

<h3 id="deletenotificationsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|481|481|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUser

<a id="opIdDeleteUser"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/users/{UserId}`

<p>Deletes the specified user from a Simple AD or Microsoft AD directory.</p> <important> <p>Deleting a user immediately and permanently deletes all content in that user's folder structure. Site retention policies do NOT apply to this type of deletion.</p> </important>

<h3 id="deleteuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Do not set this field when using administrative API actions, as in accessing the API using Amazon Web Services credentials.|
|UserId|path|string|true|The ID of the user.|
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

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUser

<a id="opIdUpdateUser"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/users/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GivenName": "password",
    "Surname": "password",
    "Type": "USER",
    "StorageRule": {
      "StorageAllocatedInBytes": {},
      "StorageType": {}
    },
    "TimeZoneId": "string",
    "Locale": "en",
    "GrantPoweruserPrivileges": "TRUE"
  }'
```

`PATCH /api/v1/users/{UserId}`

Updates the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.

> Body parameter

```json
{
  "GivenName": "password",
  "Surname": "password",
  "Type": "USER",
  "StorageRule": {
    "StorageAllocatedInBytes": {},
    "StorageType": {}
  },
  "TimeZoneId": "string",
  "Locale": "en",
  "GrantPoweruserPrivileges": "TRUE"
}
```

<h3 id="updateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|UserId|path|string|true|The ID of the user.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» GivenName|body|string(password)|false|The given name of the user.|
|» Surname|body|string(password)|false|The surname of the user.|
|» Type|body|string|false|The type of the user.|
|» StorageRule|body|object|false|Describes the storage for a user.|
|» » StorageAllocatedInBytes|body|object|false|none|
|» » StorageType|body|object|false|none|
|» TimeZoneId|body|string|false|The time zone ID of the user.|
|» Locale|body|string|false|The locale of the user.|
|» GrantPoweruserPrivileges|body|string|false|Boolean value to determine whether the user is granted Power user privileges.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|USER|
|» Type|ADMIN|
|» Type|POWERUSER|
|» Type|MINIMALUSER|
|» Type|WORKSPACESUSER|
|» Locale|en|
|» Locale|fr|
|» Locale|ko|
|» Locale|de|
|» Locale|es|
|» Locale|ja|
|» Locale|ru|
|» Locale|zh_CN|
|» Locale|zh_TW|
|» Locale|pt_BR|
|» Locale|default|
|» GrantPoweruserPrivileges|TRUE|
|» GrantPoweruserPrivileges|FALSE|

> Example responses

> 200 Response

```json
{
  "User": {
    "Id": {},
    "Username": {},
    "EmailAddress": {},
    "GivenName": {},
    "Surname": {},
    "OrganizationId": {},
    "RootFolderId": {},
    "RecycleBinFolderId": {},
    "Status": {},
    "Type": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "TimeZoneId": {},
    "Locale": {},
    "Storage": {
      "StorageUtilizedInBytes": {},
      "StorageRule": {
        "StorageAllocatedInBytes": {},
        "StorageType": {}
      }
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateUserResponse](#schemaupdateuserresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|IllegalUserStateException|[IllegalUserStateException](#schemaillegaluserstateexception)|
|484|484|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|485|485|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|487|487|DeactivatingLastSystemUserException|[DeactivatingLastSystemUserException](#schemadeactivatinglastsystemuserexception)|
|488|488|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeActivities

<a id="opIdDescribeActivities"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/activities \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/activities`

Describes the user activities in a specified time period.

<h3 id="describeactivities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|startTime|query|string(date-time)|false|The timestamp that determines the starting time of the activities. The response includes the activities performed after the specified timestamp.|
|endTime|query|string(date-time)|false|The timestamp that determines the end time of the activities. The response includes the activities performed before the specified timestamp.|
|organizationId|query|string|false|The ID of the organization. This is a mandatory parameter when using administrative API (SigV4) requests.|
|activityTypes|query|string|false|Specifies which activity types to include in the response. If this field is left empty, all activity types are returned.|
|resourceId|query|string|false|The document or folder ID for which to describe activity types.|
|userId|query|string|false|The ID of the user who performed the action. The response includes activities pertaining to this user. This is an optional parameter and is only applicable for administrative API (SigV4) requests.|
|includeIndirectActivities|query|boolean|false|Includes indirect activities. An indirect activity results from a direct activity performed on a parent resource. For example, sharing a parent folder (the direct activity) shares all of the subfolders and documents within the parent folder (the indirect activity).|
|limit|query|integer|false|The maximum number of items to return.|
|marker|query|string|false|The marker for the next set of results.|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
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
  "UserActivities": {},
  "Marker": {}
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

<h3 id="describeactivities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeActivitiesResponse](#schemadescribeactivitiesresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeComments

<a id="opIdDescribeComments"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/documents/string/versions/string/comments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/documents/{DocumentId}/versions/{VersionId}/comments`

List all the comments for the specified document version.

<h3 id="describecomments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|DocumentId|path|string|true|The ID of the document.|
|VersionId|path|string|true|The ID of the document version.|
|limit|query|integer|false|The maximum number of items to return.|
|marker|query|string|false|The marker for the next set of results. This marker was received from a previous call.|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
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
  "Comments": {},
  "Marker": {}
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

<h3 id="describecomments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCommentsResponse](#schemadescribecommentsresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|482|482|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|483|483|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|484|484|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDocumentVersions

<a id="opIdDescribeDocumentVersions"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/documents/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/documents/{DocumentId}/versions`

<p>Retrieves the document versions for the specified document.</p> <p>By default, only active versions are returned.</p>

<h3 id="describedocumentversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|DocumentId|path|string|true|The ID of the document.|
|marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|limit|query|integer|false|The maximum number of versions to return with this call.|
|include|query|string|false|A comma-separated list of values. Specify "INITIALIZED" to include incomplete versions.|
|fields|query|string|false|Specify "SOURCE" to include initialized versions and a URL for the source document.|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
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
  "DocumentVersions": {},
  "Marker": {}
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

<h3 id="describedocumentversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDocumentVersionsResponse](#schemadescribedocumentversionsresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|487|487|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGroups

<a id="opIdDescribeGroups"></a>

> Code samples

```bash
curl 'https://workdocs.us-east-1.amazonaws.com/api/v1/groups#searchQuery?searchQuery=password' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/groups#searchQuery`

Describes the groups specified by the query. Groups are defined by the underlying Active Directory.

<h3 id="describegroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|searchQuery|query|string(password)|true|A query to describe groups by group name.|
|organizationId|query|string|false|The ID of the organization.|
|marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|limit|query|integer|false|The maximum number of items to return with this call.|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
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
  "Groups": {},
  "Marker": {}
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

<h3 id="describegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGroupsResponse](#schemadescribegroupsresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|482|482|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRootFolders

<a id="opIdDescribeRootFolders"></a>

> Code samples

```bash
curl 'https://workdocs.us-east-1.amazonaws.com/api/v1/me/root#Authentication' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'Authentication: password'
```

`GET /api/v1/me/root#Authentication`

<p>Describes the current user's special folders; the <code>RootFolder</code> and the <code>RecycleBin</code>. <code>RootFolder</code> is the root of user's files and folders and <code>RecycleBin</code> is the root of recycled items. This is not a valid action for SigV4 (administrative API) clients.</p> <p>This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access Control for User Applications</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>

<h3 id="describerootfolders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|true|Amazon WorkDocs authentication token.|
|limit|query|integer|false|The maximum number of items to return.|
|marker|query|string|false|The marker for the next set of results. (You received this marker from a previous call.)|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
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
  "Folders": {},
  "Marker": {}
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

<h3 id="describerootfolders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRootFoldersResponse](#schemadescriberootfoldersresponse)|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCurrentUser

<a id="opIdGetCurrentUser"></a>

> Code samples

```bash
curl 'https://workdocs.us-east-1.amazonaws.com/api/v1/me#Authentication' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'Authentication: password'
```

`GET /api/v1/me#Authentication`

<p>Retrieves details of the current user for whom the authentication token was generated. This is not a valid action for SigV4 (administrative API) clients.</p> <p>This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access Control for User Applications</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>

<h3 id="getcurrentuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|true|Amazon WorkDocs authentication token.|
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
  "User": {
    "Id": {},
    "Username": {},
    "EmailAddress": {},
    "GivenName": {},
    "Surname": {},
    "OrganizationId": {},
    "RootFolderId": {},
    "RecycleBinFolderId": {},
    "Status": {},
    "Type": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "TimeZoneId": {},
    "Locale": {},
    "Storage": {
      "StorageUtilizedInBytes": {},
      "StorageRule": {
        "StorageAllocatedInBytes": {},
        "StorageType": {}
      }
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

<h3 id="getcurrentuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCurrentUserResponse](#schemagetcurrentuserresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDocumentPath

<a id="opIdGetDocumentPath"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/documents/string/path \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/documents/{DocumentId}/path`

<p>Retrieves the path information (the hierarchy from the root folder) for the requested document.</p> <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested document and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the names of the parent folders.</p>

<h3 id="getdocumentpath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|DocumentId|path|string|true|The ID of the document.|
|limit|query|integer|false|The maximum number of levels in the hierarchy to return.|
|fields|query|string|false|A comma-separated list of values. Specify <code>NAME</code> to include the names of the parent folders.|
|marker|query|string|false|This value is not supported.|
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
  "Path": {
    "Components": {}
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

<h3 id="getdocumentpath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDocumentPathResponse](#schemagetdocumentpathresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFolderPath

<a id="opIdGetFolderPath"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/folders/string/path \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/folders/{FolderId}/path`

<p>Retrieves the path information (the hierarchy from the root folder) for the specified folder.</p> <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested folder and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the parent folder names.</p>

<h3 id="getfolderpath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|FolderId|path|string|true|The ID of the folder.|
|limit|query|integer|false|The maximum number of levels in the hierarchy to return.|
|fields|query|string|false|A comma-separated list of values. Specify "NAME" to include the names of the parent folders.|
|marker|query|string|false|This value is not supported.|
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
  "Path": {
    "Components": {}
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

<h3 id="getfolderpath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFolderPathResponse](#schemagetfolderpathresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResources

<a id="opIdGetResources"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/resources \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/resources`

Retrieves a collection of resources, including folders and documents. The only <code>CollectionType</code> supported is <code>SHARED_WITH_ME</code>.

<h3 id="getresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|The Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|userId|query|string|false|The user ID for the resource collection. This is a required field for accessing the API operation using IAM credentials.|
|collectionType|query|string|false|The collection type.|
|limit|query|integer|false|The maximum number of resources to return.|
|marker|query|string|false|The marker for the next set of results. This marker was received from a previous call.|
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
|collectionType|SHARED_WITH_ME|

> Example responses

> 200 Response

```json
{
  "Folders": {},
  "Documents": {},
  "Marker": {}
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

<h3 id="getresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourcesResponse](#schemagetresourcesresponse)|
|480|480|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|481|481|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InitiateDocumentVersionUpload

<a id="opIdInitiateDocumentVersionUpload"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Id": "string",
    "Name": "password",
    "ContentCreatedTimestamp": "1970-01-01T00:00:00Z",
    "ContentModifiedTimestamp": "1970-01-01T00:00:00Z",
    "ContentType": "string",
    "DocumentSizeInBytes": 0,
    "ParentFolderId": "string"
  }'
```

`POST /api/v1/documents`

<p>Creates a new document object and version object.</p> <p>The client specifies the parent folder ID and name of the document to upload. The ID is optionally specified when creating a new version of an existing document. This is the first step to upload a document. Next, upload the document to the URL returned from the call, and then call <a>UpdateDocumentVersion</a>.</p> <p>To cancel the document upload, call <a>AbortDocumentVersionUpload</a>.</p>

> Body parameter

```json
{
  "Id": "string",
  "Name": "password",
  "ContentCreatedTimestamp": "1970-01-01T00:00:00Z",
  "ContentModifiedTimestamp": "1970-01-01T00:00:00Z",
  "ContentType": "string",
  "DocumentSizeInBytes": 0,
  "ParentFolderId": "string"
}
```

<h3 id="initiatedocumentversionupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Id|body|string|false|The ID of the document.|
|» Name|body|string(password)|false|The name of the document.|
|» ContentCreatedTimestamp|body|string(date-time)|false|The timestamp when the content of the document was originally created.|
|» ContentModifiedTimestamp|body|string(date-time)|false|The timestamp when the content of the document was modified.|
|» ContentType|body|string|false|The content type of the document.|
|» DocumentSizeInBytes|body|integer|false|The size of the document, in bytes.|
|» ParentFolderId|body|string|false|The ID of the parent folder.|

> Example responses

> 201 Response

```json
{
  "Metadata": {
    "Id": {},
    "CreatorId": {},
    "ParentFolderId": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "LatestVersionMetadata": {
      "Id": {},
      "Name": {},
      "ContentType": {},
      "Size": {},
      "Signature": {},
      "Status": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "ContentCreatedTimestamp": {},
      "ContentModifiedTimestamp": {},
      "CreatorId": {},
      "Thumbnail": {
        "property1": "password",
        "property2": "password"
      },
      "Source": {
        "property1": "password",
        "property2": "password"
      }
    },
    "ResourceState": {},
    "Labels": {}
  },
  "UploadMetadata": {
    "UploadUrl": {},
    "SignedHeaders": {
      "property1": "string",
      "property2": "string"
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

<h3 id="initiatedocumentversionupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[InitiateDocumentVersionUploadResponse](#schemainitiatedocumentversionuploadresponse)|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|EntityAlreadyExistsException|[EntityAlreadyExistsException](#schemaentityalreadyexistsexception)|
|482|482|StorageLimitExceededException|[StorageLimitExceededException](#schemastoragelimitexceededexception)|
|483|483|StorageLimitWillExceedException|[StorageLimitWillExceedException](#schemastoragelimitwillexceedexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|486|486|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|487|487|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|488|488|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|489|489|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|490|490|DraftUploadOutOfSyncException|[DraftUploadOutOfSyncException](#schemadraftuploadoutofsyncexception)|
|491|491|ResourceAlreadyCheckedOutException|[ResourceAlreadyCheckedOutException](#schemaresourcealreadycheckedoutexception)|
|492|492|InvalidPasswordException|[InvalidPasswordException](#schemainvalidpasswordexception)|
|493|493|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveResourcePermission

<a id="opIdRemoveResourcePermission"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/resources/string/permissions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/resources/{ResourceId}/permissions/{PrincipalId}`

Removes the permission for the specified principal from the specified resource.

<h3 id="removeresourcepermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|ResourceId|path|string|true|The ID of the resource.|
|PrincipalId|path|string|true|The principal ID of the resource.|
|type|query|string|false|The principal type of the resource.|
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
|type|USER|
|type|GROUP|
|type|INVITE|
|type|ANONYMOUS|
|type|ORGANIZATION|

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

<h3 id="removeresourcepermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|481|481|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|482|482|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreDocumentVersions

<a id="opIdRestoreDocumentVersions"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/documentVersions/restore/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/v1/documentVersions/restore/{DocumentId}`

Recovers a deleted version of an Amazon WorkDocs document.

<h3 id="restoredocumentversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|DocumentId|path|string|true|The ID of the document.|
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="restoredocumentversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|EntityNotExistsException|[EntityNotExistsException](#schemaentitynotexistsexception)|
|481|481|ProhibitedStateException|[ProhibitedStateException](#schemaprohibitedstateexception)|
|482|482|ConflictingOperationException|[ConflictingOperationException](#schemaconflictingoperationexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|485|485|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|486|486|InvalidOperationException|[InvalidOperationException](#schemainvalidoperationexception)|
|487|487|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchResources

<a id="opIdSearchResources"></a>

> Code samples

```bash
curl https://workdocs.us-east-1.amazonaws.com/api/v1/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "QueryText": "password",
    "QueryScopes": [
      "NAME"
    ],
    "OrganizationId": "string",
    "AdditionalResponseFields": [
      "WEBURL"
    ],
    "Filters": {
      "TextLocales": {},
      "ContentCategories": {},
      "ResourceTypes": {},
      "Labels": {},
      "Principals": {},
      "AncestorIds": {},
      "SearchCollectionTypes": {},
      "SizeRange": {
        "StartValue": {},
        "EndValue": {}
      },
      "CreatedRange": {
        "StartValue": {},
        "EndValue": {}
      },
      "ModifiedRange": {
        "StartValue": {},
        "EndValue": {}
      }
    },
    "OrderBy": [
      {
        "Field": {},
        "Order": {}
      }
    ],
    "Limit": 1,
    "Marker": "string"
  }'
```

`POST /api/v1/search`

Searches metadata and the content of folders, documents, document versions, and comments.

> Body parameter

```json
{
  "QueryText": "password",
  "QueryScopes": [
    "NAME"
  ],
  "OrganizationId": "string",
  "AdditionalResponseFields": [
    "WEBURL"
  ],
  "Filters": {
    "TextLocales": {},
    "ContentCategories": {},
    "ResourceTypes": {},
    "Labels": {},
    "Principals": {},
    "AncestorIds": {},
    "SearchCollectionTypes": {},
    "SizeRange": {
      "StartValue": {},
      "EndValue": {}
    },
    "CreatedRange": {
      "StartValue": {},
      "EndValue": {}
    },
    "ModifiedRange": {
      "StartValue": {},
      "EndValue": {}
    }
  },
  "OrderBy": [
    {
      "Field": {},
      "Order": {}
    }
  ],
  "Limit": 1,
  "Marker": "string"
}
```

<h3 id="searchresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authentication|header|string(password)|false|Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.|
|Limit|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» QueryText|body|string(password)|false|The String to search for. Searches across different text fields based on request parameters. Use double quotes around the query string for exact phrase matches.|
|» QueryScopes|body|[[SearchQueryScopeType](#schemasearchqueryscopetype)]|false|Filter based on the text field type. A Folder has only a name and no content. A Comment has only content and no name. A Document or Document Version has a name and content|
|» OrganizationId|body|string|false|Filters based on the resource owner OrgId. This is a mandatory parameter when using Admin SigV4 credentials.|
|» AdditionalResponseFields|body|[[AdditionalResponseFieldType](#schemaadditionalresponsefieldtype)]|false|A list of attributes to include in the response. Used to request fields that are not normally returned in a standard response.|
|» Filters|body|object|false|Filters results based on entity metadata.|
|» » TextLocales|body|object|false|none|
|» » ContentCategories|body|object|false|none|
|» » ResourceTypes|body|object|false|none|
|» » Labels|body|object|false|none|
|» » Principals|body|object|false|none|
|» » AncestorIds|body|object|false|none|
|» » SearchCollectionTypes|body|object|false|none|
|» » SizeRange|body|object|false|none|
|» » » StartValue|body|object|false|none|
|» » » EndValue|body|object|false|none|
|» » CreatedRange|body|object|false|none|
|» » » StartValue|body|object|false|none|
|» » » EndValue|body|object|false|none|
|» » ModifiedRange|body|object|false|none|
|» » » StartValue|body|object|false|none|
|» » » EndValue|body|object|false|none|
|» OrderBy|body|[[SearchSortResult](#schemasearchsortresult)]|false|Order by results in one or more categories.|
|» Limit|body|integer|false|Max results count per page.|
|» Marker|body|string|false|The marker for the next set of results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» QueryScopes|NAME|
|» QueryScopes|CONTENT|
|» AdditionalResponseFields|WEBURL|

> Example responses

> 200 Response

```json
{
  "Items": {},
  "Marker": {}
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

<h3 id="searchresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchResourcesResponse](#schemasearchresourcesresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|UnauthorizedResourceAccessException|[UnauthorizedResourceAccessException](#schemaunauthorizedresourceaccessexception)|
|482|482|UnauthorizedOperationException|[UnauthorizedOperationException](#schemaunauthorizedoperationexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_EntityNotExistsException">EntityNotExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaentitynotexistsexception"></a>
<a id="schema_EntityNotExistsException"></a>
<a id="tocSentitynotexistsexception"></a>
<a id="tocsentitynotexistsexception"></a>

```json
null
```

<h2 id="tocS_ProhibitedStateException">ProhibitedStateException</h2>
<!-- backwards compatibility -->
<a id="schemaprohibitedstateexception"></a>
<a id="schema_ProhibitedStateException"></a>
<a id="tocSprohibitedstateexception"></a>
<a id="tocsprohibitedstateexception"></a>

```json
null
```

<h2 id="tocS_UnauthorizedOperationException">UnauthorizedOperationException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedoperationexception"></a>
<a id="schema_UnauthorizedOperationException"></a>
<a id="tocSunauthorizedoperationexception"></a>
<a id="tocsunauthorizedoperationexception"></a>

```json
null
```

<h2 id="tocS_UnauthorizedResourceAccessException">UnauthorizedResourceAccessException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedresourceaccessexception"></a>
<a id="schema_UnauthorizedResourceAccessException"></a>
<a id="tocSunauthorizedresourceaccessexception"></a>
<a id="tocsunauthorizedresourceaccessexception"></a>

```json
null
```

<h2 id="tocS_FailedDependencyException">FailedDependencyException</h2>
<!-- backwards compatibility -->
<a id="schemafaileddependencyexception"></a>
<a id="schema_FailedDependencyException"></a>
<a id="tocSfaileddependencyexception"></a>
<a id="tocsfaileddependencyexception"></a>

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

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_ActivateUserResponse">ActivateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactivateuserresponse"></a>
<a id="schema_ActivateUserResponse"></a>
<a id="tocSactivateuserresponse"></a>
<a id="tocsactivateuserresponse"></a>

```json
{
  "User": {
    "Id": {},
    "Username": {},
    "EmailAddress": {},
    "GivenName": {},
    "Surname": {},
    "OrganizationId": {},
    "RootFolderId": {},
    "RecycleBinFolderId": {},
    "Status": {},
    "Type": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "TimeZoneId": {},
    "Locale": {},
    "Storage": {
      "StorageUtilizedInBytes": {},
      "StorageRule": {
        "StorageAllocatedInBytes": {},
        "StorageType": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|

<h2 id="tocS_AddResourcePermissionsResponse">AddResourcePermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddresourcepermissionsresponse"></a>
<a id="schema_AddResourcePermissionsResponse"></a>
<a id="tocSaddresourcepermissionsresponse"></a>
<a id="tocsaddresourcepermissionsresponse"></a>

```json
{
  "ShareResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShareResults|object|false|none|none|

<h2 id="tocS_SharePrincipal">SharePrincipal</h2>
<!-- backwards compatibility -->
<a id="schemashareprincipal"></a>
<a id="schema_SharePrincipal"></a>
<a id="tocSshareprincipal"></a>
<a id="tocsshareprincipal"></a>

```json
{
  "Id": {},
  "Type": {},
  "Role": {}
}
```

Describes the recipient type and ID, if available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Type|object|true|none|none|
|Role|object|true|none|none|

<h2 id="tocS_BooleanType">BooleanType</h2>
<!-- backwards compatibility -->
<a id="schemabooleantype"></a>
<a id="schema_BooleanType"></a>
<a id="tocSbooleantype"></a>
<a id="tocsbooleantype"></a>

```json
true
```

<h2 id="tocS_MessageType">MessageType</h2>
<!-- backwards compatibility -->
<a id="schemamessagetype"></a>
<a id="schema_MessageType"></a>
<a id="tocSmessagetype"></a>
<a id="tocsmessagetype"></a>

```json
"password"
```

<h2 id="tocS_CreateCommentResponse">CreateCommentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecommentresponse"></a>
<a id="schema_CreateCommentResponse"></a>
<a id="tocScreatecommentresponse"></a>
<a id="tocscreatecommentresponse"></a>

```json
{
  "Comment": {
    "CommentId": {},
    "ParentId": {},
    "ThreadId": {},
    "Text": {},
    "Contributor": {
      "Id": {},
      "Username": {},
      "EmailAddress": {},
      "GivenName": {},
      "Surname": {},
      "OrganizationId": {},
      "RootFolderId": {},
      "RecycleBinFolderId": {},
      "Status": {},
      "Type": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "TimeZoneId": {},
      "Locale": {},
      "Storage": {
        "StorageUtilizedInBytes": {},
        "StorageRule": {
          "StorageAllocatedInBytes": {},
          "StorageType": {}
        }
      }
    },
    "CreatedTimestamp": {},
    "Status": {},
    "Visibility": {},
    "RecipientId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|object|false|none|none|

<h2 id="tocS_DocumentLockedForCommentsException">DocumentLockedForCommentsException</h2>
<!-- backwards compatibility -->
<a id="schemadocumentlockedforcommentsexception"></a>
<a id="schema_DocumentLockedForCommentsException"></a>
<a id="tocSdocumentlockedforcommentsexception"></a>
<a id="tocsdocumentlockedforcommentsexception"></a>

```json
null
```

<h2 id="tocS_InvalidCommentOperationException">InvalidCommentOperationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcommentoperationexception"></a>
<a id="schema_InvalidCommentOperationException"></a>
<a id="tocSinvalidcommentoperationexception"></a>
<a id="tocsinvalidcommentoperationexception"></a>

```json
null
```

<h2 id="tocS_CreateCustomMetadataResponse">CreateCustomMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustommetadataresponse"></a>
<a id="schema_CreateCustomMetadataResponse"></a>
<a id="tocScreatecustommetadataresponse"></a>
<a id="tocscreatecustommetadataresponse"></a>

```json
{}
```

<h2 id="tocS_CustomMetadataValueType">CustomMetadataValueType</h2>
<!-- backwards compatibility -->
<a id="schemacustommetadatavaluetype"></a>
<a id="schema_CustomMetadataValueType"></a>
<a id="tocScustommetadatavaluetype"></a>
<a id="tocscustommetadatavaluetype"></a>

```json
"string"
```

<h2 id="tocS_CustomMetadataLimitExceededException">CustomMetadataLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemacustommetadatalimitexceededexception"></a>
<a id="schema_CustomMetadataLimitExceededException"></a>
<a id="tocScustommetadatalimitexceededexception"></a>
<a id="tocscustommetadatalimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateFolderResponse">CreateFolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefolderresponse"></a>
<a id="schema_CreateFolderResponse"></a>
<a id="tocScreatefolderresponse"></a>
<a id="tocscreatefolderresponse"></a>

```json
{
  "Metadata": {
    "Id": {},
    "Name": {},
    "CreatorId": {},
    "ParentFolderId": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "ResourceState": {},
    "Signature": {},
    "Labels": {},
    "Size": {},
    "LatestVersionSize": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|false|none|none|

<h2 id="tocS_EntityAlreadyExistsException">EntityAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaentityalreadyexistsexception"></a>
<a id="schema_EntityAlreadyExistsException"></a>
<a id="tocSentityalreadyexistsexception"></a>
<a id="tocsentityalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ConflictingOperationException">ConflictingOperationException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictingoperationexception"></a>
<a id="schema_ConflictingOperationException"></a>
<a id="tocSconflictingoperationexception"></a>
<a id="tocsconflictingoperationexception"></a>

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

<h2 id="tocS_CreateLabelsResponse">CreateLabelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelabelsresponse"></a>
<a id="schema_CreateLabelsResponse"></a>
<a id="tocScreatelabelsresponse"></a>
<a id="tocscreatelabelsresponse"></a>

```json
{}
```

<h2 id="tocS_SharedLabel">SharedLabel</h2>
<!-- backwards compatibility -->
<a id="schemasharedlabel"></a>
<a id="schema_SharedLabel"></a>
<a id="tocSsharedlabel"></a>
<a id="tocssharedlabel"></a>

```json
"string"
```

<h2 id="tocS_TooManyLabelsException">TooManyLabelsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanylabelsexception"></a>
<a id="schema_TooManyLabelsException"></a>
<a id="tocStoomanylabelsexception"></a>
<a id="tocstoomanylabelsexception"></a>

```json
null
```

<h2 id="tocS_CreateNotificationSubscriptionResponse">CreateNotificationSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatenotificationsubscriptionresponse"></a>
<a id="schema_CreateNotificationSubscriptionResponse"></a>
<a id="tocScreatenotificationsubscriptionresponse"></a>
<a id="tocscreatenotificationsubscriptionresponse"></a>

```json
{
  "Subscription": {
    "SubscriptionId": {},
    "EndPoint": {},
    "Protocol": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subscription|object|false|none|none|

<h2 id="tocS_TooManySubscriptionsException">TooManySubscriptionsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanysubscriptionsexception"></a>
<a id="schema_TooManySubscriptionsException"></a>
<a id="tocStoomanysubscriptionsexception"></a>
<a id="tocstoomanysubscriptionsexception"></a>

```json
null
```

<h2 id="tocS_InvalidArgumentException">InvalidArgumentException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidargumentexception"></a>
<a id="schema_InvalidArgumentException"></a>
<a id="tocSinvalidargumentexception"></a>
<a id="tocsinvalidargumentexception"></a>

```json
null
```

<h2 id="tocS_CreateUserResponse">CreateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserresponse"></a>
<a id="schema_CreateUserResponse"></a>
<a id="tocScreateuserresponse"></a>
<a id="tocscreateuserresponse"></a>

```json
{
  "User": {
    "Id": {},
    "Username": {},
    "EmailAddress": {},
    "GivenName": {},
    "Surname": {},
    "OrganizationId": {},
    "RootFolderId": {},
    "RecycleBinFolderId": {},
    "Status": {},
    "Type": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "TimeZoneId": {},
    "Locale": {},
    "Storage": {
      "StorageUtilizedInBytes": {},
      "StorageRule": {
        "StorageAllocatedInBytes": {},
        "StorageType": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|

<h2 id="tocS_PositiveSizeType">PositiveSizeType</h2>
<!-- backwards compatibility -->
<a id="schemapositivesizetype"></a>
<a id="schema_PositiveSizeType"></a>
<a id="tocSpositivesizetype"></a>
<a id="tocspositivesizetype"></a>

```json
0
```

<h2 id="tocS_StorageType">StorageType</h2>
<!-- backwards compatibility -->
<a id="schemastoragetype"></a>
<a id="schema_StorageType"></a>
<a id="tocSstoragetype"></a>
<a id="tocsstoragetype"></a>

```json
"UNLIMITED"
```

<h2 id="tocS_DeleteCustomMetadataResponse">DeleteCustomMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustommetadataresponse"></a>
<a id="schema_DeleteCustomMetadataResponse"></a>
<a id="tocSdeletecustommetadataresponse"></a>
<a id="tocsdeletecustommetadataresponse"></a>

```json
{}
```

<h2 id="tocS_CustomMetadataKeyType">CustomMetadataKeyType</h2>
<!-- backwards compatibility -->
<a id="schemacustommetadatakeytype"></a>
<a id="schema_CustomMetadataKeyType"></a>
<a id="tocScustommetadatakeytype"></a>
<a id="tocscustommetadatakeytype"></a>

```json
"string"
```

<h2 id="tocS_InvalidOperationException">InvalidOperationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoperationexception"></a>
<a id="schema_InvalidOperationException"></a>
<a id="tocSinvalidoperationexception"></a>
<a id="tocsinvalidoperationexception"></a>

```json
null
```

<h2 id="tocS_DeleteLabelsResponse">DeleteLabelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelabelsresponse"></a>
<a id="schema_DeleteLabelsResponse"></a>
<a id="tocSdeletelabelsresponse"></a>
<a id="tocsdeletelabelsresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeActivitiesResponse">DescribeActivitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeactivitiesresponse"></a>
<a id="schema_DescribeActivitiesResponse"></a>
<a id="tocSdescribeactivitiesresponse"></a>
<a id="tocsdescribeactivitiesresponse"></a>

```json
{
  "UserActivities": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserActivities|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeCommentsResponse">DescribeCommentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecommentsresponse"></a>
<a id="schema_DescribeCommentsResponse"></a>
<a id="tocSdescribecommentsresponse"></a>
<a id="tocsdescribecommentsresponse"></a>

```json
{
  "Comments": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comments|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeDocumentVersionsResponse">DescribeDocumentVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedocumentversionsresponse"></a>
<a id="schema_DescribeDocumentVersionsResponse"></a>
<a id="tocSdescribedocumentversionsresponse"></a>
<a id="tocsdescribedocumentversionsresponse"></a>

```json
{
  "DocumentVersions": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentVersions|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_InvalidPasswordException">InvalidPasswordException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpasswordexception"></a>
<a id="schema_InvalidPasswordException"></a>
<a id="tocSinvalidpasswordexception"></a>
<a id="tocsinvalidpasswordexception"></a>

```json
null
```

<h2 id="tocS_DescribeFolderContentsResponse">DescribeFolderContentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefoldercontentsresponse"></a>
<a id="schema_DescribeFolderContentsResponse"></a>
<a id="tocSdescribefoldercontentsresponse"></a>
<a id="tocsdescribefoldercontentsresponse"></a>

```json
{
  "Folders": {},
  "Documents": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Folders|object|false|none|none|
|Documents|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeGroupsResponse">DescribeGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribegroupsresponse"></a>
<a id="schema_DescribeGroupsResponse"></a>
<a id="tocSdescribegroupsresponse"></a>
<a id="tocsdescribegroupsresponse"></a>

```json
{
  "Groups": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Groups|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeNotificationSubscriptionsResponse">DescribeNotificationSubscriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribenotificationsubscriptionsresponse"></a>
<a id="schema_DescribeNotificationSubscriptionsResponse"></a>
<a id="tocSdescribenotificationsubscriptionsresponse"></a>
<a id="tocsdescribenotificationsubscriptionsresponse"></a>

```json
{
  "Subscriptions": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subscriptions|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeResourcePermissionsResponse">DescribeResourcePermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourcepermissionsresponse"></a>
<a id="schema_DescribeResourcePermissionsResponse"></a>
<a id="tocSdescriberesourcepermissionsresponse"></a>
<a id="tocsdescriberesourcepermissionsresponse"></a>

```json
{
  "Principals": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Principals|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeRootFoldersResponse">DescribeRootFoldersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberootfoldersresponse"></a>
<a id="schema_DescribeRootFoldersResponse"></a>
<a id="tocSdescriberootfoldersresponse"></a>
<a id="tocsdescriberootfoldersresponse"></a>

```json
{
  "Folders": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Folders|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeUsersResponse">DescribeUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeusersresponse"></a>
<a id="schema_DescribeUsersResponse"></a>
<a id="tocSdescribeusersresponse"></a>
<a id="tocsdescribeusersresponse"></a>

```json
{
  "Users": {},
  "TotalNumberOfUsers": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Users|object|false|none|none|
|TotalNumberOfUsers|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_RequestedEntityTooLargeException">RequestedEntityTooLargeException</h2>
<!-- backwards compatibility -->
<a id="schemarequestedentitytoolargeexception"></a>
<a id="schema_RequestedEntityTooLargeException"></a>
<a id="tocSrequestedentitytoolargeexception"></a>
<a id="tocsrequestedentitytoolargeexception"></a>

```json
null
```

<h2 id="tocS_GetCurrentUserResponse">GetCurrentUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcurrentuserresponse"></a>
<a id="schema_GetCurrentUserResponse"></a>
<a id="tocSgetcurrentuserresponse"></a>
<a id="tocsgetcurrentuserresponse"></a>

```json
{
  "User": {
    "Id": {},
    "Username": {},
    "EmailAddress": {},
    "GivenName": {},
    "Surname": {},
    "OrganizationId": {},
    "RootFolderId": {},
    "RecycleBinFolderId": {},
    "Status": {},
    "Type": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "TimeZoneId": {},
    "Locale": {},
    "Storage": {
      "StorageUtilizedInBytes": {},
      "StorageRule": {
        "StorageAllocatedInBytes": {},
        "StorageType": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|

<h2 id="tocS_GetDocumentResponse">GetDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentresponse"></a>
<a id="schema_GetDocumentResponse"></a>
<a id="tocSgetdocumentresponse"></a>
<a id="tocsgetdocumentresponse"></a>

```json
{
  "Metadata": {
    "Id": {},
    "CreatorId": {},
    "ParentFolderId": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "LatestVersionMetadata": {
      "Id": {},
      "Name": {},
      "ContentType": {},
      "Size": {},
      "Signature": {},
      "Status": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "ContentCreatedTimestamp": {},
      "ContentModifiedTimestamp": {},
      "CreatorId": {},
      "Thumbnail": {
        "property1": "password",
        "property2": "password"
      },
      "Source": {
        "property1": "password",
        "property2": "password"
      }
    },
    "ResourceState": {},
    "Labels": {}
  },
  "CustomMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|false|none|none|
|CustomMetadata|object|false|none|none|

<h2 id="tocS_GetDocumentPathResponse">GetDocumentPathResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentpathresponse"></a>
<a id="schema_GetDocumentPathResponse"></a>
<a id="tocSgetdocumentpathresponse"></a>
<a id="tocsgetdocumentpathresponse"></a>

```json
{
  "Path": {
    "Components": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Path|object|false|none|none|

<h2 id="tocS_GetDocumentVersionResponse">GetDocumentVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentversionresponse"></a>
<a id="schema_GetDocumentVersionResponse"></a>
<a id="tocSgetdocumentversionresponse"></a>
<a id="tocsgetdocumentversionresponse"></a>

```json
{
  "Metadata": {
    "Id": {},
    "Name": {},
    "ContentType": {},
    "Size": {},
    "Signature": {},
    "Status": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "ContentCreatedTimestamp": {},
    "ContentModifiedTimestamp": {},
    "CreatorId": {},
    "Thumbnail": {
      "property1": "password",
      "property2": "password"
    },
    "Source": {
      "property1": "password",
      "property2": "password"
    }
  },
  "CustomMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|false|none|none|
|CustomMetadata|object|false|none|none|

<h2 id="tocS_GetFolderResponse">GetFolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfolderresponse"></a>
<a id="schema_GetFolderResponse"></a>
<a id="tocSgetfolderresponse"></a>
<a id="tocsgetfolderresponse"></a>

```json
{
  "Metadata": {
    "Id": {},
    "Name": {},
    "CreatorId": {},
    "ParentFolderId": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "ResourceState": {},
    "Signature": {},
    "Labels": {},
    "Size": {},
    "LatestVersionSize": {}
  },
  "CustomMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|false|none|none|
|CustomMetadata|object|false|none|none|

<h2 id="tocS_GetFolderPathResponse">GetFolderPathResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfolderpathresponse"></a>
<a id="schema_GetFolderPathResponse"></a>
<a id="tocSgetfolderpathresponse"></a>
<a id="tocsgetfolderpathresponse"></a>

```json
{
  "Path": {
    "Components": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Path|object|false|none|none|

<h2 id="tocS_GetResourcesResponse">GetResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcesresponse"></a>
<a id="schema_GetResourcesResponse"></a>
<a id="tocSgetresourcesresponse"></a>
<a id="tocsgetresourcesresponse"></a>

```json
{
  "Folders": {},
  "Documents": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Folders|object|false|none|none|
|Documents|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_InitiateDocumentVersionUploadResponse">InitiateDocumentVersionUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemainitiatedocumentversionuploadresponse"></a>
<a id="schema_InitiateDocumentVersionUploadResponse"></a>
<a id="tocSinitiatedocumentversionuploadresponse"></a>
<a id="tocsinitiatedocumentversionuploadresponse"></a>

```json
{
  "Metadata": {
    "Id": {},
    "CreatorId": {},
    "ParentFolderId": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "LatestVersionMetadata": {
      "Id": {},
      "Name": {},
      "ContentType": {},
      "Size": {},
      "Signature": {},
      "Status": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "ContentCreatedTimestamp": {},
      "ContentModifiedTimestamp": {},
      "CreatorId": {},
      "Thumbnail": {
        "property1": "password",
        "property2": "password"
      },
      "Source": {
        "property1": "password",
        "property2": "password"
      }
    },
    "ResourceState": {},
    "Labels": {}
  },
  "UploadMetadata": {
    "UploadUrl": {},
    "SignedHeaders": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|false|none|none|
|UploadMetadata|object|false|none|none|

<h2 id="tocS_StorageLimitExceededException">StorageLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemastoragelimitexceededexception"></a>
<a id="schema_StorageLimitExceededException"></a>
<a id="tocSstoragelimitexceededexception"></a>
<a id="tocsstoragelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_StorageLimitWillExceedException">StorageLimitWillExceedException</h2>
<!-- backwards compatibility -->
<a id="schemastoragelimitwillexceedexception"></a>
<a id="schema_StorageLimitWillExceedException"></a>
<a id="tocSstoragelimitwillexceedexception"></a>
<a id="tocsstoragelimitwillexceedexception"></a>

```json
null
```

<h2 id="tocS_DraftUploadOutOfSyncException">DraftUploadOutOfSyncException</h2>
<!-- backwards compatibility -->
<a id="schemadraftuploadoutofsyncexception"></a>
<a id="schema_DraftUploadOutOfSyncException"></a>
<a id="tocSdraftuploadoutofsyncexception"></a>
<a id="tocsdraftuploadoutofsyncexception"></a>

```json
null
```

<h2 id="tocS_ResourceAlreadyCheckedOutException">ResourceAlreadyCheckedOutException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadycheckedoutexception"></a>
<a id="schema_ResourceAlreadyCheckedOutException"></a>
<a id="tocSresourcealreadycheckedoutexception"></a>
<a id="tocsresourcealreadycheckedoutexception"></a>

```json
null
```

<h2 id="tocS_SearchResourcesResponse">SearchResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcesresponse"></a>
<a id="schema_SearchResourcesResponse"></a>
<a id="tocSsearchresourcesresponse"></a>
<a id="tocssearchresourcesresponse"></a>

```json
{
  "Items": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_SearchQueryScopeType">SearchQueryScopeType</h2>
<!-- backwards compatibility -->
<a id="schemasearchqueryscopetype"></a>
<a id="schema_SearchQueryScopeType"></a>
<a id="tocSsearchqueryscopetype"></a>
<a id="tocssearchqueryscopetype"></a>

```json
"NAME"
```

<h2 id="tocS_AdditionalResponseFieldType">AdditionalResponseFieldType</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalresponsefieldtype"></a>
<a id="schema_AdditionalResponseFieldType"></a>
<a id="tocSadditionalresponsefieldtype"></a>
<a id="tocsadditionalresponsefieldtype"></a>

```json
"WEBURL"
```

<h2 id="tocS_TextLocaleTypeList">TextLocaleTypeList</h2>
<!-- backwards compatibility -->
<a id="schematextlocaletypelist"></a>
<a id="schema_TextLocaleTypeList"></a>
<a id="tocStextlocaletypelist"></a>
<a id="tocstextlocaletypelist"></a>

```json
[
  "AR"
]
```

<h2 id="tocS_SearchContentCategoryTypeList">SearchContentCategoryTypeList</h2>
<!-- backwards compatibility -->
<a id="schemasearchcontentcategorytypelist"></a>
<a id="schema_SearchContentCategoryTypeList"></a>
<a id="tocSsearchcontentcategorytypelist"></a>
<a id="tocssearchcontentcategorytypelist"></a>

```json
[
  "IMAGE"
]
```

<h2 id="tocS_SearchResourceTypeList">SearchResourceTypeList</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcetypelist"></a>
<a id="schema_SearchResourceTypeList"></a>
<a id="tocSsearchresourcetypelist"></a>
<a id="tocssearchresourcetypelist"></a>

```json
[
  "FOLDER"
]
```

<h2 id="tocS_SearchLabelList">SearchLabelList</h2>
<!-- backwards compatibility -->
<a id="schemasearchlabellist"></a>
<a id="schema_SearchLabelList"></a>
<a id="tocSsearchlabellist"></a>
<a id="tocssearchlabellist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SearchPrincipalTypeList">SearchPrincipalTypeList</h2>
<!-- backwards compatibility -->
<a id="schemasearchprincipaltypelist"></a>
<a id="schema_SearchPrincipalTypeList"></a>
<a id="tocSsearchprincipaltypelist"></a>
<a id="tocssearchprincipaltypelist"></a>

```json
[
  {
    "Id": {},
    "Roles": {}
  }
]
```

<h2 id="tocS_SearchAncestorIdList">SearchAncestorIdList</h2>
<!-- backwards compatibility -->
<a id="schemasearchancestoridlist"></a>
<a id="schema_SearchAncestorIdList"></a>
<a id="tocSsearchancestoridlist"></a>
<a id="tocssearchancestoridlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SearchCollectionTypeList">SearchCollectionTypeList</h2>
<!-- backwards compatibility -->
<a id="schemasearchcollectiontypelist"></a>
<a id="schema_SearchCollectionTypeList"></a>
<a id="tocSsearchcollectiontypelist"></a>
<a id="tocssearchcollectiontypelist"></a>

```json
[
  "OWNED"
]
```

<h2 id="tocS_LongRangeType">LongRangeType</h2>
<!-- backwards compatibility -->
<a id="schemalongrangetype"></a>
<a id="schema_LongRangeType"></a>
<a id="tocSlongrangetype"></a>
<a id="tocslongrangetype"></a>

```json
{
  "StartValue": {},
  "EndValue": {}
}
```

Filter based on size (in bytes).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartValue|object|false|none|none|
|EndValue|object|false|none|none|

<h2 id="tocS_DateRangeType">DateRangeType</h2>
<!-- backwards compatibility -->
<a id="schemadaterangetype"></a>
<a id="schema_DateRangeType"></a>
<a id="tocSdaterangetype"></a>
<a id="tocsdaterangetype"></a>

```json
{
  "StartValue": {},
  "EndValue": {}
}
```

Filters results based on timestamp range (in epochs).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartValue|object|false|none|none|
|EndValue|object|false|none|none|

<h2 id="tocS_SearchSortResult">SearchSortResult</h2>
<!-- backwards compatibility -->
<a id="schemasearchsortresult"></a>
<a id="schema_SearchSortResult"></a>
<a id="tocSsearchsortresult"></a>
<a id="tocssearchsortresult"></a>

```json
{
  "Field": {},
  "Order": {}
}
```

The result of the sort operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Field|object|false|none|none|
|Order|object|false|none|none|

<h2 id="tocS_UpdateUserResponse">UpdateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserresponse"></a>
<a id="schema_UpdateUserResponse"></a>
<a id="tocSupdateuserresponse"></a>
<a id="tocsupdateuserresponse"></a>

```json
{
  "User": {
    "Id": {},
    "Username": {},
    "EmailAddress": {},
    "GivenName": {},
    "Surname": {},
    "OrganizationId": {},
    "RootFolderId": {},
    "RecycleBinFolderId": {},
    "Status": {},
    "Type": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "TimeZoneId": {},
    "Locale": {},
    "Storage": {
      "StorageUtilizedInBytes": {},
      "StorageRule": {
        "StorageAllocatedInBytes": {},
        "StorageType": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|

<h2 id="tocS_IllegalUserStateException">IllegalUserStateException</h2>
<!-- backwards compatibility -->
<a id="schemaillegaluserstateexception"></a>
<a id="schema_IllegalUserStateException"></a>
<a id="tocSillegaluserstateexception"></a>
<a id="tocsillegaluserstateexception"></a>

```json
null
```

<h2 id="tocS_DeactivatingLastSystemUserException">DeactivatingLastSystemUserException</h2>
<!-- backwards compatibility -->
<a id="schemadeactivatinglastsystemuserexception"></a>
<a id="schema_DeactivatingLastSystemUserException"></a>
<a id="tocSdeactivatinglastsystemuserexception"></a>
<a id="tocsdeactivatinglastsystemuserexception"></a>

```json
null
```

<h2 id="tocS_AuthenticationHeaderType">AuthenticationHeaderType</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationheadertype"></a>
<a id="schema_AuthenticationHeaderType"></a>
<a id="tocSauthenticationheadertype"></a>
<a id="tocsauthenticationheadertype"></a>

```json
"password"
```

<h2 id="tocS_ResourceIdType">ResourceIdType</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidtype"></a>
<a id="schema_ResourceIdType"></a>
<a id="tocSresourceidtype"></a>
<a id="tocsresourceidtype"></a>

```json
"string"
```

<h2 id="tocS_DocumentVersionIdType">DocumentVersionIdType</h2>
<!-- backwards compatibility -->
<a id="schemadocumentversionidtype"></a>
<a id="schema_DocumentVersionIdType"></a>
<a id="tocSdocumentversionidtype"></a>
<a id="tocsdocumentversionidtype"></a>

```json
"string"
```

<h2 id="tocS_AbortDocumentVersionUploadRequest">AbortDocumentVersionUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemaabortdocumentversionuploadrequest"></a>
<a id="schema_AbortDocumentVersionUploadRequest"></a>
<a id="tocSabortdocumentversionuploadrequest"></a>
<a id="tocsabortdocumentversionuploadrequest"></a>

```json
{}
```

<h2 id="tocS_IdType">IdType</h2>
<!-- backwards compatibility -->
<a id="schemaidtype"></a>
<a id="schema_IdType"></a>
<a id="tocSidtype"></a>
<a id="tocsidtype"></a>

```json
"string"
```

<h2 id="tocS_ActivateUserRequest">ActivateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactivateuserrequest"></a>
<a id="schema_ActivateUserRequest"></a>
<a id="tocSactivateuserrequest"></a>
<a id="tocsactivateuserrequest"></a>

```json
{}
```

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "Id": {},
  "Username": {},
  "EmailAddress": {},
  "GivenName": {},
  "Surname": {},
  "OrganizationId": {},
  "RootFolderId": {},
  "RecycleBinFolderId": {},
  "Status": {},
  "Type": {},
  "CreatedTimestamp": {},
  "ModifiedTimestamp": {},
  "TimeZoneId": {},
  "Locale": {},
  "Storage": {
    "StorageUtilizedInBytes": {},
    "StorageRule": {
      "StorageAllocatedInBytes": {},
      "StorageType": {}
    }
  }
}
```

Describes a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Username|object|false|none|none|
|EmailAddress|object|false|none|none|
|GivenName|object|false|none|none|
|Surname|object|false|none|none|
|OrganizationId|object|false|none|none|
|RootFolderId|object|false|none|none|
|RecycleBinFolderId|object|false|none|none|
|Status|object|false|none|none|
|Type|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|ModifiedTimestamp|object|false|none|none|
|TimeZoneId|object|false|none|none|
|Locale|object|false|none|none|
|Storage|object|false|none|none|

<h2 id="tocS_ActivityType">ActivityType</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytype"></a>
<a id="schema_ActivityType"></a>
<a id="tocSactivitytype"></a>
<a id="tocsactivitytype"></a>

```json
"DOCUMENT_CHECKED_IN"
```

<h2 id="tocS_TimestampType">TimestampType</h2>
<!-- backwards compatibility -->
<a id="schematimestamptype"></a>
<a id="schema_TimestampType"></a>
<a id="tocStimestamptype"></a>
<a id="tocstimestamptype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_UserMetadata">UserMetadata</h2>
<!-- backwards compatibility -->
<a id="schemausermetadata"></a>
<a id="schema_UserMetadata"></a>
<a id="tocSusermetadata"></a>
<a id="tocsusermetadata"></a>

```json
{
  "Id": {},
  "Username": {},
  "GivenName": {},
  "Surname": {},
  "EmailAddress": {}
}
```

Describes the metadata of the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Username|object|false|none|none|
|GivenName|object|false|none|none|
|Surname|object|false|none|none|
|EmailAddress|object|false|none|none|

<h2 id="tocS_Participants">Participants</h2>
<!-- backwards compatibility -->
<a id="schemaparticipants"></a>
<a id="schema_Participants"></a>
<a id="tocSparticipants"></a>
<a id="tocsparticipants"></a>

```json
{
  "Users": {},
  "Groups": {}
}
```

Describes the users or user groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Users|object|false|none|none|
|Groups|object|false|none|none|

<h2 id="tocS_ResourceMetadata">ResourceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaresourcemetadata"></a>
<a id="schema_ResourceMetadata"></a>
<a id="tocSresourcemetadata"></a>
<a id="tocsresourcemetadata"></a>

```json
{
  "Type": {},
  "Name": {},
  "OriginalName": {},
  "Id": {},
  "VersionId": {},
  "Owner": {
    "Id": {},
    "Username": {},
    "GivenName": {},
    "Surname": {},
    "EmailAddress": {}
  },
  "ParentId": {}
}
```

Describes the metadata of a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Name|object|false|none|none|
|OriginalName|object|false|none|none|
|Id|object|false|none|none|
|VersionId|object|false|none|none|
|Owner|object|false|none|none|
|ParentId|object|false|none|none|

<h2 id="tocS_CommentMetadata">CommentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacommentmetadata"></a>
<a id="schema_CommentMetadata"></a>
<a id="tocScommentmetadata"></a>
<a id="tocscommentmetadata"></a>

```json
{
  "CommentId": {},
  "Contributor": {
    "Id": {},
    "Username": {},
    "EmailAddress": {},
    "GivenName": {},
    "Surname": {},
    "OrganizationId": {},
    "RootFolderId": {},
    "RecycleBinFolderId": {},
    "Status": {},
    "Type": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "TimeZoneId": {},
    "Locale": {},
    "Storage": {
      "StorageUtilizedInBytes": {},
      "StorageRule": {
        "StorageAllocatedInBytes": {},
        "StorageType": {}
      }
    }
  },
  "CreatedTimestamp": {},
  "CommentStatus": {},
  "RecipientId": {},
  "ContributorId": {}
}
```

Describes the metadata of a comment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CommentId|object|false|none|none|
|Contributor|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|CommentStatus|object|false|none|none|
|RecipientId|object|false|none|none|
|ContributorId|object|false|none|none|

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "Type": {},
  "TimeStamp": {},
  "IsIndirectActivity": {},
  "OrganizationId": {},
  "Initiator": {
    "Id": {},
    "Username": {},
    "GivenName": {},
    "Surname": {},
    "EmailAddress": {}
  },
  "Participants": {
    "Users": {},
    "Groups": {}
  },
  "ResourceMetadata": {
    "Type": {},
    "Name": {},
    "OriginalName": {},
    "Id": {},
    "VersionId": {},
    "Owner": {
      "Id": {},
      "Username": {},
      "GivenName": {},
      "Surname": {},
      "EmailAddress": {}
    },
    "ParentId": {}
  },
  "OriginalParent": {
    "Type": {},
    "Name": {},
    "OriginalName": {},
    "Id": {},
    "VersionId": {},
    "Owner": {
      "Id": {},
      "Username": {},
      "GivenName": {},
      "Surname": {},
      "EmailAddress": {}
    },
    "ParentId": {}
  },
  "CommentMetadata": {
    "CommentId": {},
    "Contributor": {
      "Id": {},
      "Username": {},
      "EmailAddress": {},
      "GivenName": {},
      "Surname": {},
      "OrganizationId": {},
      "RootFolderId": {},
      "RecycleBinFolderId": {},
      "Status": {},
      "Type": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "TimeZoneId": {},
      "Locale": {},
      "Storage": {
        "StorageUtilizedInBytes": {},
        "StorageRule": {
          "StorageAllocatedInBytes": {},
          "StorageType": {}
        }
      }
    },
    "CreatedTimestamp": {},
    "CommentStatus": {},
    "RecipientId": {},
    "ContributorId": {}
  }
}
```

Describes the activity information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|TimeStamp|object|false|none|none|
|IsIndirectActivity|object|false|none|none|
|OrganizationId|object|false|none|none|
|Initiator|object|false|none|none|
|Participants|object|false|none|none|
|ResourceMetadata|object|false|none|none|
|OriginalParent|object|false|none|none|
|CommentMetadata|object|false|none|none|

<h2 id="tocS_ActivityNamesFilterType">ActivityNamesFilterType</h2>
<!-- backwards compatibility -->
<a id="schemaactivitynamesfiltertype"></a>
<a id="schema_ActivityNamesFilterType"></a>
<a id="tocSactivitynamesfiltertype"></a>
<a id="tocsactivitynamesfiltertype"></a>

```json
"string"
```

<h2 id="tocS_SharePrincipalList">SharePrincipalList</h2>
<!-- backwards compatibility -->
<a id="schemashareprincipallist"></a>
<a id="schema_SharePrincipalList"></a>
<a id="tocSshareprincipallist"></a>
<a id="tocsshareprincipallist"></a>

```json
[
  {
    "Id": {},
    "Type": {},
    "Role": {}
  }
]
```

<h2 id="tocS_NotificationOptions">NotificationOptions</h2>
<!-- backwards compatibility -->
<a id="schemanotificationoptions"></a>
<a id="schema_NotificationOptions"></a>
<a id="tocSnotificationoptions"></a>
<a id="tocsnotificationoptions"></a>

```json
{
  "SendEmail": {},
  "EmailMessage": {}
}
```

Set of options which defines notification preferences of given action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SendEmail|object|false|none|none|
|EmailMessage|object|false|none|none|

<h2 id="tocS_AddResourcePermissionsRequest">AddResourcePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddresourcepermissionsrequest"></a>
<a id="schema_AddResourcePermissionsRequest"></a>
<a id="tocSaddresourcepermissionsrequest"></a>
<a id="tocsaddresourcepermissionsrequest"></a>

```json
{
  "Principals": {},
  "NotificationOptions": {
    "SendEmail": {},
    "EmailMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Principals|object|true|none|none|
|NotificationOptions|object|false|none|none|

<h2 id="tocS_ShareResultsList">ShareResultsList</h2>
<!-- backwards compatibility -->
<a id="schemashareresultslist"></a>
<a id="schema_ShareResultsList"></a>
<a id="tocSshareresultslist"></a>
<a id="tocsshareresultslist"></a>

```json
[
  {
    "PrincipalId": {},
    "InviteePrincipalId": {},
    "Role": {},
    "Status": {},
    "ShareId": {},
    "StatusMessage": {}
  }
]
```

<h2 id="tocS_AdditionalResponseFieldsList">AdditionalResponseFieldsList</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalresponsefieldslist"></a>
<a id="schema_AdditionalResponseFieldsList"></a>
<a id="tocSadditionalresponsefieldslist"></a>
<a id="tocsadditionalresponsefieldslist"></a>

```json
[
  "WEBURL"
]
```

<h2 id="tocS_BooleanEnumType">BooleanEnumType</h2>
<!-- backwards compatibility -->
<a id="schemabooleanenumtype"></a>
<a id="schema_BooleanEnumType"></a>
<a id="tocSbooleanenumtype"></a>
<a id="tocsbooleanenumtype"></a>

```json
"TRUE"
```

<h2 id="tocS_CommentIdType">CommentIdType</h2>
<!-- backwards compatibility -->
<a id="schemacommentidtype"></a>
<a id="schema_CommentIdType"></a>
<a id="tocScommentidtype"></a>
<a id="tocscommentidtype"></a>

```json
"string"
```

<h2 id="tocS_CommentTextType">CommentTextType</h2>
<!-- backwards compatibility -->
<a id="schemacommenttexttype"></a>
<a id="schema_CommentTextType"></a>
<a id="tocScommenttexttype"></a>
<a id="tocscommenttexttype"></a>

```json
"password"
```

<h2 id="tocS_CommentStatusType">CommentStatusType</h2>
<!-- backwards compatibility -->
<a id="schemacommentstatustype"></a>
<a id="schema_CommentStatusType"></a>
<a id="tocScommentstatustype"></a>
<a id="tocscommentstatustype"></a>

```json
"DRAFT"
```

<h2 id="tocS_CommentVisibilityType">CommentVisibilityType</h2>
<!-- backwards compatibility -->
<a id="schemacommentvisibilitytype"></a>
<a id="schema_CommentVisibilityType"></a>
<a id="tocScommentvisibilitytype"></a>
<a id="tocscommentvisibilitytype"></a>

```json
"PUBLIC"
```

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "CommentId": {},
  "ParentId": {},
  "ThreadId": {},
  "Text": {},
  "Contributor": {
    "Id": {},
    "Username": {},
    "EmailAddress": {},
    "GivenName": {},
    "Surname": {},
    "OrganizationId": {},
    "RootFolderId": {},
    "RecycleBinFolderId": {},
    "Status": {},
    "Type": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "TimeZoneId": {},
    "Locale": {},
    "Storage": {
      "StorageUtilizedInBytes": {},
      "StorageRule": {
        "StorageAllocatedInBytes": {},
        "StorageType": {}
      }
    }
  },
  "CreatedTimestamp": {},
  "Status": {},
  "Visibility": {},
  "RecipientId": {}
}
```

Describes a comment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CommentId|object|true|none|none|
|ParentId|object|false|none|none|
|ThreadId|object|false|none|none|
|Text|object|false|none|none|
|Contributor|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|Status|object|false|none|none|
|Visibility|object|false|none|none|
|RecipientId|object|false|none|none|

<h2 id="tocS_CommentList">CommentList</h2>
<!-- backwards compatibility -->
<a id="schemacommentlist"></a>
<a id="schema_CommentList"></a>
<a id="tocScommentlist"></a>
<a id="tocscommentlist"></a>

```json
[
  {
    "CommentId": {},
    "ParentId": {},
    "ThreadId": {},
    "Text": {},
    "Contributor": {
      "Id": {},
      "Username": {},
      "EmailAddress": {},
      "GivenName": {},
      "Surname": {},
      "OrganizationId": {},
      "RootFolderId": {},
      "RecycleBinFolderId": {},
      "Status": {},
      "Type": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "TimeZoneId": {},
      "Locale": {},
      "Storage": {
        "StorageUtilizedInBytes": {},
        "StorageRule": {
          "StorageAllocatedInBytes": {},
          "StorageType": {}
        }
      }
    },
    "CreatedTimestamp": {},
    "Status": {},
    "Visibility": {},
    "RecipientId": {}
  }
]
```

<h2 id="tocS_ContentCategoryType">ContentCategoryType</h2>
<!-- backwards compatibility -->
<a id="schemacontentcategorytype"></a>
<a id="schema_ContentCategoryType"></a>
<a id="tocScontentcategorytype"></a>
<a id="tocscontentcategorytype"></a>

```json
"IMAGE"
```

<h2 id="tocS_CreateCommentRequest">CreateCommentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecommentrequest"></a>
<a id="schema_CreateCommentRequest"></a>
<a id="tocScreatecommentrequest"></a>
<a id="tocscreatecommentrequest"></a>

```json
{
  "ParentId": {},
  "ThreadId": {},
  "Text": {},
  "Visibility": {},
  "NotifyCollaborators": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParentId|object|false|none|none|
|ThreadId|object|false|none|none|
|Text|object|true|none|none|
|Visibility|object|false|none|none|
|NotifyCollaborators|object|false|none|none|

<h2 id="tocS_CustomMetadataMap">CustomMetadataMap</h2>
<!-- backwards compatibility -->
<a id="schemacustommetadatamap"></a>
<a id="schema_CustomMetadataMap"></a>
<a id="tocScustommetadatamap"></a>
<a id="tocscustommetadatamap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[CustomMetadataValueType](#schemacustommetadatavaluetype)|false|none|none|

<h2 id="tocS_CreateCustomMetadataRequest">CreateCustomMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustommetadatarequest"></a>
<a id="schema_CreateCustomMetadataRequest"></a>
<a id="tocScreatecustommetadatarequest"></a>
<a id="tocscreatecustommetadatarequest"></a>

```json
{
  "CustomMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomMetadata|object|true|none|none|

<h2 id="tocS_ResourceNameType">ResourceNameType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenametype"></a>
<a id="schema_ResourceNameType"></a>
<a id="tocSresourcenametype"></a>
<a id="tocsresourcenametype"></a>

```json
"password"
```

<h2 id="tocS_CreateFolderRequest">CreateFolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefolderrequest"></a>
<a id="schema_CreateFolderRequest"></a>
<a id="tocScreatefolderrequest"></a>
<a id="tocscreatefolderrequest"></a>

```json
{
  "Name": {},
  "ParentFolderId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|ParentFolderId|object|true|none|none|

<h2 id="tocS_FolderMetadata">FolderMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafoldermetadata"></a>
<a id="schema_FolderMetadata"></a>
<a id="tocSfoldermetadata"></a>
<a id="tocsfoldermetadata"></a>

```json
{
  "Id": {},
  "Name": {},
  "CreatorId": {},
  "ParentFolderId": {},
  "CreatedTimestamp": {},
  "ModifiedTimestamp": {},
  "ResourceState": {},
  "Signature": {},
  "Labels": {},
  "Size": {},
  "LatestVersionSize": {}
}
```

Describes a folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|CreatorId|object|false|none|none|
|ParentFolderId|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|ModifiedTimestamp|object|false|none|none|
|ResourceState|object|false|none|none|
|Signature|object|false|none|none|
|Labels|object|false|none|none|
|Size|object|false|none|none|
|LatestVersionSize|object|false|none|none|

<h2 id="tocS_SharedLabels">SharedLabels</h2>
<!-- backwards compatibility -->
<a id="schemasharedlabels"></a>
<a id="schema_SharedLabels"></a>
<a id="tocSsharedlabels"></a>
<a id="tocssharedlabels"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateLabelsRequest">CreateLabelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelabelsrequest"></a>
<a id="schema_CreateLabelsRequest"></a>
<a id="tocScreatelabelsrequest"></a>
<a id="tocscreatelabelsrequest"></a>

```json
{
  "Labels": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Labels|object|true|none|none|

<h2 id="tocS_SubscriptionEndPointType">SubscriptionEndPointType</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionendpointtype"></a>
<a id="schema_SubscriptionEndPointType"></a>
<a id="tocSsubscriptionendpointtype"></a>
<a id="tocssubscriptionendpointtype"></a>

```json
"string"
```

<h2 id="tocS_SubscriptionProtocolType">SubscriptionProtocolType</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionprotocoltype"></a>
<a id="schema_SubscriptionProtocolType"></a>
<a id="tocSsubscriptionprotocoltype"></a>
<a id="tocssubscriptionprotocoltype"></a>

```json
"HTTPS"
```

<h2 id="tocS_SubscriptionType">SubscriptionType</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptiontype"></a>
<a id="schema_SubscriptionType"></a>
<a id="tocSsubscriptiontype"></a>
<a id="tocssubscriptiontype"></a>

```json
"ALL"
```

<h2 id="tocS_CreateNotificationSubscriptionRequest">CreateNotificationSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatenotificationsubscriptionrequest"></a>
<a id="schema_CreateNotificationSubscriptionRequest"></a>
<a id="tocScreatenotificationsubscriptionrequest"></a>
<a id="tocscreatenotificationsubscriptionrequest"></a>

```json
{
  "Endpoint": {},
  "Protocol": {},
  "SubscriptionType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoint|object|true|none|none|
|Protocol|object|true|none|none|
|SubscriptionType|object|true|none|none|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "SubscriptionId": {},
  "EndPoint": {},
  "Protocol": {}
}
```

Describes a subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionId|object|false|none|none|
|EndPoint|object|false|none|none|
|Protocol|object|false|none|none|

<h2 id="tocS_UsernameType">UsernameType</h2>
<!-- backwards compatibility -->
<a id="schemausernametype"></a>
<a id="schema_UsernameType"></a>
<a id="tocSusernametype"></a>
<a id="tocsusernametype"></a>

```json
"password"
```

<h2 id="tocS_EmailAddressType">EmailAddressType</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddresstype"></a>
<a id="schema_EmailAddressType"></a>
<a id="tocSemailaddresstype"></a>
<a id="tocsemailaddresstype"></a>

```json
"password"
```

<h2 id="tocS_UserAttributeValueType">UserAttributeValueType</h2>
<!-- backwards compatibility -->
<a id="schemauserattributevaluetype"></a>
<a id="schema_UserAttributeValueType"></a>
<a id="tocSuserattributevaluetype"></a>
<a id="tocsuserattributevaluetype"></a>

```json
"password"
```

<h2 id="tocS_PasswordType">PasswordType</h2>
<!-- backwards compatibility -->
<a id="schemapasswordtype"></a>
<a id="schema_PasswordType"></a>
<a id="tocSpasswordtype"></a>
<a id="tocspasswordtype"></a>

```json
"password"
```

<h2 id="tocS_TimeZoneIdType">TimeZoneIdType</h2>
<!-- backwards compatibility -->
<a id="schematimezoneidtype"></a>
<a id="schema_TimeZoneIdType"></a>
<a id="tocStimezoneidtype"></a>
<a id="tocstimezoneidtype"></a>

```json
"string"
```

<h2 id="tocS_StorageRuleType">StorageRuleType</h2>
<!-- backwards compatibility -->
<a id="schemastorageruletype"></a>
<a id="schema_StorageRuleType"></a>
<a id="tocSstorageruletype"></a>
<a id="tocsstorageruletype"></a>

```json
{
  "StorageAllocatedInBytes": {},
  "StorageType": {}
}
```

Describes the storage for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageAllocatedInBytes|object|false|none|none|
|StorageType|object|false|none|none|

<h2 id="tocS_CreateUserRequest">CreateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserrequest"></a>
<a id="schema_CreateUserRequest"></a>
<a id="tocScreateuserrequest"></a>
<a id="tocscreateuserrequest"></a>

```json
{
  "OrganizationId": {},
  "Username": {},
  "EmailAddress": {},
  "GivenName": {},
  "Surname": {},
  "Password": {},
  "TimeZoneId": {},
  "StorageRule": {
    "StorageAllocatedInBytes": {},
    "StorageType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|false|none|none|
|Username|object|true|none|none|
|EmailAddress|object|false|none|none|
|GivenName|object|true|none|none|
|Surname|object|true|none|none|
|Password|object|true|none|none|
|TimeZoneId|object|false|none|none|
|StorageRule|object|false|none|none|

<h2 id="tocS_CustomMetadataKeyList">CustomMetadataKeyList</h2>
<!-- backwards compatibility -->
<a id="schemacustommetadatakeylist"></a>
<a id="schema_CustomMetadataKeyList"></a>
<a id="tocScustommetadatakeylist"></a>
<a id="tocscustommetadatakeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeactivateUserRequest">DeactivateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeactivateuserrequest"></a>
<a id="schema_DeactivateUserRequest"></a>
<a id="tocSdeactivateuserrequest"></a>
<a id="tocsdeactivateuserrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteCommentRequest">DeleteCommentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecommentrequest"></a>
<a id="schema_DeleteCommentRequest"></a>
<a id="tocSdeletecommentrequest"></a>
<a id="tocsdeletecommentrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteCustomMetadataRequest">DeleteCustomMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustommetadatarequest"></a>
<a id="schema_DeleteCustomMetadataRequest"></a>
<a id="tocSdeletecustommetadatarequest"></a>
<a id="tocsdeletecustommetadatarequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDocumentRequest">DeleteDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedocumentrequest"></a>
<a id="schema_DeleteDocumentRequest"></a>
<a id="tocSdeletedocumentrequest"></a>
<a id="tocsdeletedocumentrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDocumentVersionRequest">DeleteDocumentVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedocumentversionrequest"></a>
<a id="schema_DeleteDocumentVersionRequest"></a>
<a id="tocSdeletedocumentversionrequest"></a>
<a id="tocsdeletedocumentversionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFolderContentsRequest">DeleteFolderContentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefoldercontentsrequest"></a>
<a id="schema_DeleteFolderContentsRequest"></a>
<a id="tocSdeletefoldercontentsrequest"></a>
<a id="tocsdeletefoldercontentsrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFolderRequest">DeleteFolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefolderrequest"></a>
<a id="schema_DeleteFolderRequest"></a>
<a id="tocSdeletefolderrequest"></a>
<a id="tocsdeletefolderrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteLabelsRequest">DeleteLabelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelabelsrequest"></a>
<a id="schema_DeleteLabelsRequest"></a>
<a id="tocSdeletelabelsrequest"></a>
<a id="tocsdeletelabelsrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteNotificationSubscriptionRequest">DeleteNotificationSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletenotificationsubscriptionrequest"></a>
<a id="schema_DeleteNotificationSubscriptionRequest"></a>
<a id="tocSdeletenotificationsubscriptionrequest"></a>
<a id="tocsdeletenotificationsubscriptionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteUserRequest">DeleteUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserrequest"></a>
<a id="schema_DeleteUserRequest"></a>
<a id="tocSdeleteuserrequest"></a>
<a id="tocsdeleteuserrequest"></a>

```json
{}
```

<h2 id="tocS_LimitType">LimitType</h2>
<!-- backwards compatibility -->
<a id="schemalimittype"></a>
<a id="schema_LimitType"></a>
<a id="tocSlimittype"></a>
<a id="tocslimittype"></a>

```json
1
```

<h2 id="tocS_SearchMarkerType">SearchMarkerType</h2>
<!-- backwards compatibility -->
<a id="schemasearchmarkertype"></a>
<a id="schema_SearchMarkerType"></a>
<a id="tocSsearchmarkertype"></a>
<a id="tocssearchmarkertype"></a>

```json
"string"
```

<h2 id="tocS_DescribeActivitiesRequest">DescribeActivitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeactivitiesrequest"></a>
<a id="schema_DescribeActivitiesRequest"></a>
<a id="tocSdescribeactivitiesrequest"></a>
<a id="tocsdescribeactivitiesrequest"></a>

```json
{}
```

<h2 id="tocS_UserActivities">UserActivities</h2>
<!-- backwards compatibility -->
<a id="schemauseractivities"></a>
<a id="schema_UserActivities"></a>
<a id="tocSuseractivities"></a>
<a id="tocsuseractivities"></a>

```json
[
  {
    "Type": {},
    "TimeStamp": {},
    "IsIndirectActivity": {},
    "OrganizationId": {},
    "Initiator": {
      "Id": {},
      "Username": {},
      "GivenName": {},
      "Surname": {},
      "EmailAddress": {}
    },
    "Participants": {
      "Users": {},
      "Groups": {}
    },
    "ResourceMetadata": {
      "Type": {},
      "Name": {},
      "OriginalName": {},
      "Id": {},
      "VersionId": {},
      "Owner": {
        "Id": {},
        "Username": {},
        "GivenName": {},
        "Surname": {},
        "EmailAddress": {}
      },
      "ParentId": {}
    },
    "OriginalParent": {
      "Type": {},
      "Name": {},
      "OriginalName": {},
      "Id": {},
      "VersionId": {},
      "Owner": {
        "Id": {},
        "Username": {},
        "GivenName": {},
        "Surname": {},
        "EmailAddress": {}
      },
      "ParentId": {}
    },
    "CommentMetadata": {
      "CommentId": {},
      "Contributor": {
        "Id": {},
        "Username": {},
        "EmailAddress": {},
        "GivenName": {},
        "Surname": {},
        "OrganizationId": {},
        "RootFolderId": {},
        "RecycleBinFolderId": {},
        "Status": {},
        "Type": {},
        "CreatedTimestamp": {},
        "ModifiedTimestamp": {},
        "TimeZoneId": {},
        "Locale": {},
        "Storage": {
          "StorageUtilizedInBytes": {},
          "StorageRule": {
            "StorageAllocatedInBytes": {},
            "StorageType": {}
          }
        }
      },
      "CreatedTimestamp": {},
      "CommentStatus": {},
      "RecipientId": {},
      "ContributorId": {}
    }
  }
]
```

<h2 id="tocS_MarkerType">MarkerType</h2>
<!-- backwards compatibility -->
<a id="schemamarkertype"></a>
<a id="schema_MarkerType"></a>
<a id="tocSmarkertype"></a>
<a id="tocsmarkertype"></a>

```json
"string"
```

<h2 id="tocS_DescribeCommentsRequest">DescribeCommentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecommentsrequest"></a>
<a id="schema_DescribeCommentsRequest"></a>
<a id="tocSdescribecommentsrequest"></a>
<a id="tocsdescribecommentsrequest"></a>

```json
{}
```

<h2 id="tocS_PageMarkerType">PageMarkerType</h2>
<!-- backwards compatibility -->
<a id="schemapagemarkertype"></a>
<a id="schema_PageMarkerType"></a>
<a id="tocSpagemarkertype"></a>
<a id="tocspagemarkertype"></a>

```json
"string"
```

<h2 id="tocS_FieldNamesType">FieldNamesType</h2>
<!-- backwards compatibility -->
<a id="schemafieldnamestype"></a>
<a id="schema_FieldNamesType"></a>
<a id="tocSfieldnamestype"></a>
<a id="tocsfieldnamestype"></a>

```json
"string"
```

<h2 id="tocS_DescribeDocumentVersionsRequest">DescribeDocumentVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedocumentversionsrequest"></a>
<a id="schema_DescribeDocumentVersionsRequest"></a>
<a id="tocSdescribedocumentversionsrequest"></a>
<a id="tocsdescribedocumentversionsrequest"></a>

```json
{}
```

<h2 id="tocS_DocumentVersionMetadataList">DocumentVersionMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentversionmetadatalist"></a>
<a id="schema_DocumentVersionMetadataList"></a>
<a id="tocSdocumentversionmetadatalist"></a>
<a id="tocsdocumentversionmetadatalist"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "ContentType": {},
    "Size": {},
    "Signature": {},
    "Status": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "ContentCreatedTimestamp": {},
    "ContentModifiedTimestamp": {},
    "CreatorId": {},
    "Thumbnail": {
      "property1": "password",
      "property2": "password"
    },
    "Source": {
      "property1": "password",
      "property2": "password"
    }
  }
]
```

<h2 id="tocS_ResourceSortType">ResourceSortType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesorttype"></a>
<a id="schema_ResourceSortType"></a>
<a id="tocSresourcesorttype"></a>
<a id="tocsresourcesorttype"></a>

```json
"DATE"
```

<h2 id="tocS_OrderType">OrderType</h2>
<!-- backwards compatibility -->
<a id="schemaordertype"></a>
<a id="schema_OrderType"></a>
<a id="tocSordertype"></a>
<a id="tocsordertype"></a>

```json
"ASCENDING"
```

<h2 id="tocS_FolderContentType">FolderContentType</h2>
<!-- backwards compatibility -->
<a id="schemafoldercontenttype"></a>
<a id="schema_FolderContentType"></a>
<a id="tocSfoldercontenttype"></a>
<a id="tocsfoldercontenttype"></a>

```json
"ALL"
```

<h2 id="tocS_DescribeFolderContentsRequest">DescribeFolderContentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefoldercontentsrequest"></a>
<a id="schema_DescribeFolderContentsRequest"></a>
<a id="tocSdescribefoldercontentsrequest"></a>
<a id="tocsdescribefoldercontentsrequest"></a>

```json
{}
```

<h2 id="tocS_FolderMetadataList">FolderMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemafoldermetadatalist"></a>
<a id="schema_FolderMetadataList"></a>
<a id="tocSfoldermetadatalist"></a>
<a id="tocsfoldermetadatalist"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "CreatorId": {},
    "ParentFolderId": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "ResourceState": {},
    "Signature": {},
    "Labels": {},
    "Size": {},
    "LatestVersionSize": {}
  }
]
```

<h2 id="tocS_DocumentMetadataList">DocumentMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmetadatalist"></a>
<a id="schema_DocumentMetadataList"></a>
<a id="tocSdocumentmetadatalist"></a>
<a id="tocsdocumentmetadatalist"></a>

```json
[
  {
    "Id": {},
    "CreatorId": {},
    "ParentFolderId": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "LatestVersionMetadata": {
      "Id": {},
      "Name": {},
      "ContentType": {},
      "Size": {},
      "Signature": {},
      "Status": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "ContentCreatedTimestamp": {},
      "ContentModifiedTimestamp": {},
      "CreatorId": {},
      "Thumbnail": {
        "property1": "password",
        "property2": "password"
      },
      "Source": {
        "property1": "password",
        "property2": "password"
      }
    },
    "ResourceState": {},
    "Labels": {}
  }
]
```

<h2 id="tocS_SearchQueryType">SearchQueryType</h2>
<!-- backwards compatibility -->
<a id="schemasearchquerytype"></a>
<a id="schema_SearchQueryType"></a>
<a id="tocSsearchquerytype"></a>
<a id="tocssearchquerytype"></a>

```json
"password"
```

<h2 id="tocS_PositiveIntegerType">PositiveIntegerType</h2>
<!-- backwards compatibility -->
<a id="schemapositiveintegertype"></a>
<a id="schema_PositiveIntegerType"></a>
<a id="tocSpositiveintegertype"></a>
<a id="tocspositiveintegertype"></a>

```json
1
```

<h2 id="tocS_DescribeGroupsRequest">DescribeGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribegroupsrequest"></a>
<a id="schema_DescribeGroupsRequest"></a>
<a id="tocSdescribegroupsrequest"></a>
<a id="tocsdescribegroupsrequest"></a>

```json
{}
```

<h2 id="tocS_GroupMetadataList">GroupMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemagroupmetadatalist"></a>
<a id="schema_GroupMetadataList"></a>
<a id="tocSgroupmetadatalist"></a>
<a id="tocsgroupmetadatalist"></a>

```json
[
  {
    "Id": {},
    "Name": {}
  }
]
```

<h2 id="tocS_DescribeNotificationSubscriptionsRequest">DescribeNotificationSubscriptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribenotificationsubscriptionsrequest"></a>
<a id="schema_DescribeNotificationSubscriptionsRequest"></a>
<a id="tocSdescribenotificationsubscriptionsrequest"></a>
<a id="tocsdescribenotificationsubscriptionsrequest"></a>

```json
{}
```

<h2 id="tocS_SubscriptionList">SubscriptionList</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionlist"></a>
<a id="schema_SubscriptionList"></a>
<a id="tocSsubscriptionlist"></a>
<a id="tocssubscriptionlist"></a>

```json
[
  {
    "SubscriptionId": {},
    "EndPoint": {},
    "Protocol": {}
  }
]
```

<h2 id="tocS_DescribeResourcePermissionsRequest">DescribeResourcePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourcepermissionsrequest"></a>
<a id="schema_DescribeResourcePermissionsRequest"></a>
<a id="tocSdescriberesourcepermissionsrequest"></a>
<a id="tocsdescriberesourcepermissionsrequest"></a>

```json
{}
```

<h2 id="tocS_PrincipalList">PrincipalList</h2>
<!-- backwards compatibility -->
<a id="schemaprincipallist"></a>
<a id="schema_PrincipalList"></a>
<a id="tocSprincipallist"></a>
<a id="tocsprincipallist"></a>

```json
[
  {
    "Id": {},
    "Type": {},
    "Roles": {}
  }
]
```

<h2 id="tocS_DescribeRootFoldersRequest">DescribeRootFoldersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberootfoldersrequest"></a>
<a id="schema_DescribeRootFoldersRequest"></a>
<a id="tocSdescriberootfoldersrequest"></a>
<a id="tocsdescriberootfoldersrequest"></a>

```json
{}
```

<h2 id="tocS_UserIdsType">UserIdsType</h2>
<!-- backwards compatibility -->
<a id="schemauseridstype"></a>
<a id="schema_UserIdsType"></a>
<a id="tocSuseridstype"></a>
<a id="tocsuseridstype"></a>

```json
"string"
```

<h2 id="tocS_UserFilterType">UserFilterType</h2>
<!-- backwards compatibility -->
<a id="schemauserfiltertype"></a>
<a id="schema_UserFilterType"></a>
<a id="tocSuserfiltertype"></a>
<a id="tocsuserfiltertype"></a>

```json
"ALL"
```

<h2 id="tocS_UserSortType">UserSortType</h2>
<!-- backwards compatibility -->
<a id="schemausersorttype"></a>
<a id="schema_UserSortType"></a>
<a id="tocSusersorttype"></a>
<a id="tocsusersorttype"></a>

```json
"USER_NAME"
```

<h2 id="tocS_DescribeUsersRequest">DescribeUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeusersrequest"></a>
<a id="schema_DescribeUsersRequest"></a>
<a id="tocSdescribeusersrequest"></a>
<a id="tocsdescribeusersrequest"></a>

```json
{}
```

<h2 id="tocS_OrganizationUserList">OrganizationUserList</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationuserlist"></a>
<a id="schema_OrganizationUserList"></a>
<a id="tocSorganizationuserlist"></a>
<a id="tocsorganizationuserlist"></a>

```json
[
  {
    "Id": {},
    "Username": {},
    "EmailAddress": {},
    "GivenName": {},
    "Surname": {},
    "OrganizationId": {},
    "RootFolderId": {},
    "RecycleBinFolderId": {},
    "Status": {},
    "Type": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "TimeZoneId": {},
    "Locale": {},
    "Storage": {
      "StorageUtilizedInBytes": {},
      "StorageRule": {
        "StorageAllocatedInBytes": {},
        "StorageType": {}
      }
    }
  }
]
```

<h2 id="tocS_SizeType">SizeType</h2>
<!-- backwards compatibility -->
<a id="schemasizetype"></a>
<a id="schema_SizeType"></a>
<a id="tocSsizetype"></a>
<a id="tocssizetype"></a>

```json
0
```

<h2 id="tocS_DocumentContentType">DocumentContentType</h2>
<!-- backwards compatibility -->
<a id="schemadocumentcontenttype"></a>
<a id="schema_DocumentContentType"></a>
<a id="tocSdocumentcontenttype"></a>
<a id="tocsdocumentcontenttype"></a>

```json
"string"
```

<h2 id="tocS_DocumentVersionMetadata">DocumentVersionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadocumentversionmetadata"></a>
<a id="schema_DocumentVersionMetadata"></a>
<a id="tocSdocumentversionmetadata"></a>
<a id="tocsdocumentversionmetadata"></a>

```json
{
  "Id": {},
  "Name": {},
  "ContentType": {},
  "Size": {},
  "Signature": {},
  "Status": {},
  "CreatedTimestamp": {},
  "ModifiedTimestamp": {},
  "ContentCreatedTimestamp": {},
  "ContentModifiedTimestamp": {},
  "CreatorId": {},
  "Thumbnail": {
    "property1": "password",
    "property2": "password"
  },
  "Source": {
    "property1": "password",
    "property2": "password"
  }
}
```

Describes a version of a document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|ContentType|object|false|none|none|
|Size|object|false|none|none|
|Signature|object|false|none|none|
|Status|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|ModifiedTimestamp|object|false|none|none|
|ContentCreatedTimestamp|object|false|none|none|
|ContentModifiedTimestamp|object|false|none|none|
|CreatorId|object|false|none|none|
|Thumbnail|object|false|none|none|
|Source|object|false|none|none|

<h2 id="tocS_ResourceStateType">ResourceStateType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcestatetype"></a>
<a id="schema_ResourceStateType"></a>
<a id="tocSresourcestatetype"></a>
<a id="tocsresourcestatetype"></a>

```json
"ACTIVE"
```

<h2 id="tocS_DocumentMetadata">DocumentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmetadata"></a>
<a id="schema_DocumentMetadata"></a>
<a id="tocSdocumentmetadata"></a>
<a id="tocsdocumentmetadata"></a>

```json
{
  "Id": {},
  "CreatorId": {},
  "ParentFolderId": {},
  "CreatedTimestamp": {},
  "ModifiedTimestamp": {},
  "LatestVersionMetadata": {
    "Id": {},
    "Name": {},
    "ContentType": {},
    "Size": {},
    "Signature": {},
    "Status": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "ContentCreatedTimestamp": {},
    "ContentModifiedTimestamp": {},
    "CreatorId": {},
    "Thumbnail": {
      "property1": "password",
      "property2": "password"
    },
    "Source": {
      "property1": "password",
      "property2": "password"
    }
  },
  "ResourceState": {},
  "Labels": {}
}
```

Describes the document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|CreatorId|object|false|none|none|
|ParentFolderId|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|ModifiedTimestamp|object|false|none|none|
|LatestVersionMetadata|object|false|none|none|
|ResourceState|object|false|none|none|
|Labels|object|false|none|none|

<h2 id="tocS_DocumentSourceType">DocumentSourceType</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsourcetype"></a>
<a id="schema_DocumentSourceType"></a>
<a id="tocSdocumentsourcetype"></a>
<a id="tocsdocumentsourcetype"></a>

```json
"ORIGINAL"
```

<h2 id="tocS_UrlType">UrlType</h2>
<!-- backwards compatibility -->
<a id="schemaurltype"></a>
<a id="schema_UrlType"></a>
<a id="tocSurltype"></a>
<a id="tocsurltype"></a>

```json
"password"
```

<h2 id="tocS_DocumentSourceUrlMap">DocumentSourceUrlMap</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsourceurlmap"></a>
<a id="schema_DocumentSourceUrlMap"></a>
<a id="tocSdocumentsourceurlmap"></a>
<a id="tocsdocumentsourceurlmap"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[UrlType](#schemaurltype)|false|none|none|

<h2 id="tocS_DocumentStatusType">DocumentStatusType</h2>
<!-- backwards compatibility -->
<a id="schemadocumentstatustype"></a>
<a id="schema_DocumentStatusType"></a>
<a id="tocSdocumentstatustype"></a>
<a id="tocsdocumentstatustype"></a>

```json
"INITIALIZED"
```

<h2 id="tocS_DocumentThumbnailType">DocumentThumbnailType</h2>
<!-- backwards compatibility -->
<a id="schemadocumentthumbnailtype"></a>
<a id="schema_DocumentThumbnailType"></a>
<a id="tocSdocumentthumbnailtype"></a>
<a id="tocsdocumentthumbnailtype"></a>

```json
"SMALL"
```

<h2 id="tocS_DocumentThumbnailUrlMap">DocumentThumbnailUrlMap</h2>
<!-- backwards compatibility -->
<a id="schemadocumentthumbnailurlmap"></a>
<a id="schema_DocumentThumbnailUrlMap"></a>
<a id="tocSdocumentthumbnailurlmap"></a>
<a id="tocsdocumentthumbnailurlmap"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[UrlType](#schemaurltype)|false|none|none|

<h2 id="tocS_HashType">HashType</h2>
<!-- backwards compatibility -->
<a id="schemahashtype"></a>
<a id="schema_HashType"></a>
<a id="tocShashtype"></a>
<a id="tocshashtype"></a>

```json
"string"
```

<h2 id="tocS_DocumentVersionStatus">DocumentVersionStatus</h2>
<!-- backwards compatibility -->
<a id="schemadocumentversionstatus"></a>
<a id="schema_DocumentVersionStatus"></a>
<a id="tocSdocumentversionstatus"></a>
<a id="tocsdocumentversionstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
{
  "TextLocales": {},
  "ContentCategories": {},
  "ResourceTypes": {},
  "Labels": {},
  "Principals": {},
  "AncestorIds": {},
  "SearchCollectionTypes": {},
  "SizeRange": {
    "StartValue": {},
    "EndValue": {}
  },
  "CreatedRange": {
    "StartValue": {},
    "EndValue": {}
  },
  "ModifiedRange": {
    "StartValue": {},
    "EndValue": {}
  }
}
```

Filters results based on entity metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextLocales|object|false|none|none|
|ContentCategories|object|false|none|none|
|ResourceTypes|object|false|none|none|
|Labels|object|false|none|none|
|Principals|object|false|none|none|
|AncestorIds|object|false|none|none|
|SearchCollectionTypes|object|false|none|none|
|SizeRange|object|false|none|none|
|CreatedRange|object|false|none|none|
|ModifiedRange|object|false|none|none|

<h2 id="tocS_GetCurrentUserRequest">GetCurrentUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcurrentuserrequest"></a>
<a id="schema_GetCurrentUserRequest"></a>
<a id="tocSgetcurrentuserrequest"></a>
<a id="tocsgetcurrentuserrequest"></a>

```json
{}
```

<h2 id="tocS_GetDocumentPathRequest">GetDocumentPathRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentpathrequest"></a>
<a id="schema_GetDocumentPathRequest"></a>
<a id="tocSgetdocumentpathrequest"></a>
<a id="tocsgetdocumentpathrequest"></a>

```json
{}
```

<h2 id="tocS_ResourcePath">ResourcePath</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepath"></a>
<a id="schema_ResourcePath"></a>
<a id="tocSresourcepath"></a>
<a id="tocsresourcepath"></a>

```json
{
  "Components": {}
}
```

Describes the path information of a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Components|object|false|none|none|

<h2 id="tocS_GetDocumentRequest">GetDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentrequest"></a>
<a id="schema_GetDocumentRequest"></a>
<a id="tocSgetdocumentrequest"></a>
<a id="tocsgetdocumentrequest"></a>

```json
{}
```

<h2 id="tocS_GetDocumentVersionRequest">GetDocumentVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentversionrequest"></a>
<a id="schema_GetDocumentVersionRequest"></a>
<a id="tocSgetdocumentversionrequest"></a>
<a id="tocsgetdocumentversionrequest"></a>

```json
{}
```

<h2 id="tocS_GetFolderPathRequest">GetFolderPathRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfolderpathrequest"></a>
<a id="schema_GetFolderPathRequest"></a>
<a id="tocSgetfolderpathrequest"></a>
<a id="tocsgetfolderpathrequest"></a>

```json
{}
```

<h2 id="tocS_GetFolderRequest">GetFolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfolderrequest"></a>
<a id="schema_GetFolderRequest"></a>
<a id="tocSgetfolderrequest"></a>
<a id="tocsgetfolderrequest"></a>

```json
{}
```

<h2 id="tocS_ResourceCollectionType">ResourceCollectionType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecollectiontype"></a>
<a id="schema_ResourceCollectionType"></a>
<a id="tocSresourcecollectiontype"></a>
<a id="tocsresourcecollectiontype"></a>

```json
"SHARED_WITH_ME"
```

<h2 id="tocS_GetResourcesRequest">GetResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcesrequest"></a>
<a id="schema_GetResourcesRequest"></a>
<a id="tocSgetresourcesrequest"></a>
<a id="tocsgetresourcesrequest"></a>

```json
{}
```

<h2 id="tocS_GroupNameType">GroupNameType</h2>
<!-- backwards compatibility -->
<a id="schemagroupnametype"></a>
<a id="schema_GroupNameType"></a>
<a id="tocSgroupnametype"></a>
<a id="tocsgroupnametype"></a>

```json
"string"
```

<h2 id="tocS_GroupMetadata">GroupMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagroupmetadata"></a>
<a id="schema_GroupMetadata"></a>
<a id="tocSgroupmetadata"></a>
<a id="tocsgroupmetadata"></a>

```json
{
  "Id": {},
  "Name": {}
}
```

Describes the metadata of a user group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_HeaderNameType">HeaderNameType</h2>
<!-- backwards compatibility -->
<a id="schemaheadernametype"></a>
<a id="schema_HeaderNameType"></a>
<a id="tocSheadernametype"></a>
<a id="tocsheadernametype"></a>

```json
"string"
```

<h2 id="tocS_HeaderValueType">HeaderValueType</h2>
<!-- backwards compatibility -->
<a id="schemaheadervaluetype"></a>
<a id="schema_HeaderValueType"></a>
<a id="tocSheadervaluetype"></a>
<a id="tocsheadervaluetype"></a>

```json
"string"
```

<h2 id="tocS_InitiateDocumentVersionUploadRequest">InitiateDocumentVersionUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemainitiatedocumentversionuploadrequest"></a>
<a id="schema_InitiateDocumentVersionUploadRequest"></a>
<a id="tocSinitiatedocumentversionuploadrequest"></a>
<a id="tocsinitiatedocumentversionuploadrequest"></a>

```json
{
  "Id": {},
  "Name": {},
  "ContentCreatedTimestamp": {},
  "ContentModifiedTimestamp": {},
  "ContentType": {},
  "DocumentSizeInBytes": {},
  "ParentFolderId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|ContentCreatedTimestamp|object|false|none|none|
|ContentModifiedTimestamp|object|false|none|none|
|ContentType|object|false|none|none|
|DocumentSizeInBytes|object|false|none|none|
|ParentFolderId|object|false|none|none|

<h2 id="tocS_UploadMetadata">UploadMetadata</h2>
<!-- backwards compatibility -->
<a id="schemauploadmetadata"></a>
<a id="schema_UploadMetadata"></a>
<a id="tocSuploadmetadata"></a>
<a id="tocsuploadmetadata"></a>

```json
{
  "UploadUrl": {},
  "SignedHeaders": {
    "property1": "string",
    "property2": "string"
  }
}
```

Describes the upload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UploadUrl|object|false|none|none|
|SignedHeaders|object|false|none|none|

<h2 id="tocS_LanguageCodeType">LanguageCodeType</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecodetype"></a>
<a id="schema_LanguageCodeType"></a>
<a id="tocSlanguagecodetype"></a>
<a id="tocslanguagecodetype"></a>

```json
"AR"
```

<h2 id="tocS_LocaleType">LocaleType</h2>
<!-- backwards compatibility -->
<a id="schemalocaletype"></a>
<a id="schema_LocaleType"></a>
<a id="tocSlocaletype"></a>
<a id="tocslocaletype"></a>

```json
"en"
```

<h2 id="tocS_LongType">LongType</h2>
<!-- backwards compatibility -->
<a id="schemalongtype"></a>
<a id="schema_LongType"></a>
<a id="tocSlongtype"></a>
<a id="tocslongtype"></a>

```json
0
```

<h2 id="tocS_NextMarkerType">NextMarkerType</h2>
<!-- backwards compatibility -->
<a id="schemanextmarkertype"></a>
<a id="schema_NextMarkerType"></a>
<a id="tocSnextmarkertype"></a>
<a id="tocsnextmarkertype"></a>

```json
"string"
```

<h2 id="tocS_OrderByFieldType">OrderByFieldType</h2>
<!-- backwards compatibility -->
<a id="schemaorderbyfieldtype"></a>
<a id="schema_OrderByFieldType"></a>
<a id="tocSorderbyfieldtype"></a>
<a id="tocsorderbyfieldtype"></a>

```json
"RELEVANCE"
```

<h2 id="tocS_UserMetadataList">UserMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemausermetadatalist"></a>
<a id="schema_UserMetadataList"></a>
<a id="tocSusermetadatalist"></a>
<a id="tocsusermetadatalist"></a>

```json
[
  {
    "Id": {},
    "Username": {},
    "GivenName": {},
    "Surname": {},
    "EmailAddress": {}
  }
]
```

<h2 id="tocS_RoleType">RoleType</h2>
<!-- backwards compatibility -->
<a id="schemaroletype"></a>
<a id="schema_RoleType"></a>
<a id="tocSroletype"></a>
<a id="tocsroletype"></a>

```json
"VIEWER"
```

<h2 id="tocS_RolePermissionType">RolePermissionType</h2>
<!-- backwards compatibility -->
<a id="schemarolepermissiontype"></a>
<a id="schema_RolePermissionType"></a>
<a id="tocSrolepermissiontype"></a>
<a id="tocsrolepermissiontype"></a>

```json
"DIRECT"
```

<h2 id="tocS_PermissionInfo">PermissionInfo</h2>
<!-- backwards compatibility -->
<a id="schemapermissioninfo"></a>
<a id="schema_PermissionInfo"></a>
<a id="tocSpermissioninfo"></a>
<a id="tocspermissioninfo"></a>

```json
{
  "Role": {},
  "Type": {}
}
```

Describes the permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Role|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_PermissionInfoList">PermissionInfoList</h2>
<!-- backwards compatibility -->
<a id="schemapermissioninfolist"></a>
<a id="schema_PermissionInfoList"></a>
<a id="tocSpermissioninfolist"></a>
<a id="tocspermissioninfolist"></a>

```json
[
  {
    "Role": {},
    "Type": {}
  }
]
```

<h2 id="tocS_PrincipalType">PrincipalType</h2>
<!-- backwards compatibility -->
<a id="schemaprincipaltype"></a>
<a id="schema_PrincipalType"></a>
<a id="tocSprincipaltype"></a>
<a id="tocsprincipaltype"></a>

```json
"USER"
```

<h2 id="tocS_Principal">Principal</h2>
<!-- backwards compatibility -->
<a id="schemaprincipal"></a>
<a id="schema_Principal"></a>
<a id="tocSprincipal"></a>
<a id="tocsprincipal"></a>

```json
{
  "Id": {},
  "Type": {},
  "Roles": {}
}
```

Describes a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Type|object|false|none|none|
|Roles|object|false|none|none|

<h2 id="tocS_PrincipalRoleType">PrincipalRoleType</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalroletype"></a>
<a id="schema_PrincipalRoleType"></a>
<a id="tocSprincipalroletype"></a>
<a id="tocsprincipalroletype"></a>

```json
"VIEWER"
```

<h2 id="tocS_RemoveAllResourcePermissionsRequest">RemoveAllResourcePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveallresourcepermissionsrequest"></a>
<a id="schema_RemoveAllResourcePermissionsRequest"></a>
<a id="tocSremoveallresourcepermissionsrequest"></a>
<a id="tocsremoveallresourcepermissionsrequest"></a>

```json
{}
```

<h2 id="tocS_RemoveResourcePermissionRequest">RemoveResourcePermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveresourcepermissionrequest"></a>
<a id="schema_RemoveResourcePermissionRequest"></a>
<a id="tocSremoveresourcepermissionrequest"></a>
<a id="tocsremoveresourcepermissionrequest"></a>

```json
{}
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"FOLDER"
```

<h2 id="tocS_ResourcePathComponentList">ResourcePathComponentList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepathcomponentlist"></a>
<a id="schema_ResourcePathComponentList"></a>
<a id="tocSresourcepathcomponentlist"></a>
<a id="tocsresourcepathcomponentlist"></a>

```json
[
  {
    "Id": {},
    "Name": {}
  }
]
```

<h2 id="tocS_ResourcePathComponent">ResourcePathComponent</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepathcomponent"></a>
<a id="schema_ResourcePathComponent"></a>
<a id="tocSresourcepathcomponent"></a>
<a id="tocsresourcepathcomponent"></a>

```json
{
  "Id": {},
  "Name": {}
}
```

Describes the resource path.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_ResponseItemType">ResponseItemType</h2>
<!-- backwards compatibility -->
<a id="schemaresponseitemtype"></a>
<a id="schema_ResponseItemType"></a>
<a id="tocSresponseitemtype"></a>
<a id="tocsresponseitemtype"></a>

```json
"DOCUMENT"
```

<h2 id="tocS_ResponseItemWebUrl">ResponseItemWebUrl</h2>
<!-- backwards compatibility -->
<a id="schemaresponseitemweburl"></a>
<a id="schema_ResponseItemWebUrl"></a>
<a id="tocSresponseitemweburl"></a>
<a id="tocsresponseitemweburl"></a>

```json
"password"
```

<h2 id="tocS_ResponseItem">ResponseItem</h2>
<!-- backwards compatibility -->
<a id="schemaresponseitem"></a>
<a id="schema_ResponseItem"></a>
<a id="tocSresponseitem"></a>
<a id="tocsresponseitem"></a>

```json
{
  "ResourceType": {},
  "WebUrl": {},
  "DocumentMetadata": {
    "Id": {},
    "CreatorId": {},
    "ParentFolderId": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "LatestVersionMetadata": {
      "Id": {},
      "Name": {},
      "ContentType": {},
      "Size": {},
      "Signature": {},
      "Status": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "ContentCreatedTimestamp": {},
      "ContentModifiedTimestamp": {},
      "CreatorId": {},
      "Thumbnail": {
        "property1": "password",
        "property2": "password"
      },
      "Source": {
        "property1": "password",
        "property2": "password"
      }
    },
    "ResourceState": {},
    "Labels": {}
  },
  "FolderMetadata": {
    "Id": {},
    "Name": {},
    "CreatorId": {},
    "ParentFolderId": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "ResourceState": {},
    "Signature": {},
    "Labels": {},
    "Size": {},
    "LatestVersionSize": {}
  },
  "CommentMetadata": {
    "CommentId": {},
    "Contributor": {
      "Id": {},
      "Username": {},
      "EmailAddress": {},
      "GivenName": {},
      "Surname": {},
      "OrganizationId": {},
      "RootFolderId": {},
      "RecycleBinFolderId": {},
      "Status": {},
      "Type": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "TimeZoneId": {},
      "Locale": {},
      "Storage": {
        "StorageUtilizedInBytes": {},
        "StorageRule": {
          "StorageAllocatedInBytes": {},
          "StorageType": {}
        }
      }
    },
    "CreatedTimestamp": {},
    "CommentStatus": {},
    "RecipientId": {},
    "ContributorId": {}
  },
  "DocumentVersionMetadata": {
    "Id": {},
    "Name": {},
    "ContentType": {},
    "Size": {},
    "Signature": {},
    "Status": {},
    "CreatedTimestamp": {},
    "ModifiedTimestamp": {},
    "ContentCreatedTimestamp": {},
    "ContentModifiedTimestamp": {},
    "CreatorId": {},
    "Thumbnail": {
      "property1": "password",
      "property2": "password"
    },
    "Source": {
      "property1": "password",
      "property2": "password"
    }
  }
}
```

List of Documents, Folders, Comments, and Document Versions matching the query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|WebUrl|object|false|none|none|
|DocumentMetadata|object|false|none|none|
|FolderMetadata|object|false|none|none|
|CommentMetadata|object|false|none|none|
|DocumentVersionMetadata|object|false|none|none|

<h2 id="tocS_ResponseItemsList">ResponseItemsList</h2>
<!-- backwards compatibility -->
<a id="schemaresponseitemslist"></a>
<a id="schema_ResponseItemsList"></a>
<a id="tocSresponseitemslist"></a>
<a id="tocsresponseitemslist"></a>

```json
[
  {
    "ResourceType": {},
    "WebUrl": {},
    "DocumentMetadata": {
      "Id": {},
      "CreatorId": {},
      "ParentFolderId": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "LatestVersionMetadata": {
        "Id": {},
        "Name": {},
        "ContentType": {},
        "Size": {},
        "Signature": {},
        "Status": {},
        "CreatedTimestamp": {},
        "ModifiedTimestamp": {},
        "ContentCreatedTimestamp": {},
        "ContentModifiedTimestamp": {},
        "CreatorId": {},
        "Thumbnail": {
          "property1": "password",
          "property2": "password"
        },
        "Source": {
          "property1": "password",
          "property2": "password"
        }
      },
      "ResourceState": {},
      "Labels": {}
    },
    "FolderMetadata": {
      "Id": {},
      "Name": {},
      "CreatorId": {},
      "ParentFolderId": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "ResourceState": {},
      "Signature": {},
      "Labels": {},
      "Size": {},
      "LatestVersionSize": {}
    },
    "CommentMetadata": {
      "CommentId": {},
      "Contributor": {
        "Id": {},
        "Username": {},
        "EmailAddress": {},
        "GivenName": {},
        "Surname": {},
        "OrganizationId": {},
        "RootFolderId": {},
        "RecycleBinFolderId": {},
        "Status": {},
        "Type": {},
        "CreatedTimestamp": {},
        "ModifiedTimestamp": {},
        "TimeZoneId": {},
        "Locale": {},
        "Storage": {
          "StorageUtilizedInBytes": {},
          "StorageRule": {
            "StorageAllocatedInBytes": {},
            "StorageType": {}
          }
        }
      },
      "CreatedTimestamp": {},
      "CommentStatus": {},
      "RecipientId": {},
      "ContributorId": {}
    },
    "DocumentVersionMetadata": {
      "Id": {},
      "Name": {},
      "ContentType": {},
      "Size": {},
      "Signature": {},
      "Status": {},
      "CreatedTimestamp": {},
      "ModifiedTimestamp": {},
      "ContentCreatedTimestamp": {},
      "ContentModifiedTimestamp": {},
      "CreatorId": {},
      "Thumbnail": {
        "property1": "password",
        "property2": "password"
      },
      "Source": {
        "property1": "password",
        "property2": "password"
      }
    }
  }
]
```

<h2 id="tocS_RestoreDocumentVersionsRequest">RestoreDocumentVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestoredocumentversionsrequest"></a>
<a id="schema_RestoreDocumentVersionsRequest"></a>
<a id="tocSrestoredocumentversionsrequest"></a>
<a id="tocsrestoredocumentversionsrequest"></a>

```json
{}
```

<h2 id="tocS_SearchAncestorId">SearchAncestorId</h2>
<!-- backwards compatibility -->
<a id="schemasearchancestorid"></a>
<a id="schema_SearchAncestorId"></a>
<a id="tocSsearchancestorid"></a>
<a id="tocssearchancestorid"></a>

```json
"string"
```

<h2 id="tocS_SearchCollectionType">SearchCollectionType</h2>
<!-- backwards compatibility -->
<a id="schemasearchcollectiontype"></a>
<a id="schema_SearchCollectionType"></a>
<a id="tocSsearchcollectiontype"></a>
<a id="tocssearchcollectiontype"></a>

```json
"OWNED"
```

<h2 id="tocS_SearchLabel">SearchLabel</h2>
<!-- backwards compatibility -->
<a id="schemasearchlabel"></a>
<a id="schema_SearchLabel"></a>
<a id="tocSsearchlabel"></a>
<a id="tocssearchlabel"></a>

```json
"string"
```

<h2 id="tocS_SearchPrincipalRoleList">SearchPrincipalRoleList</h2>
<!-- backwards compatibility -->
<a id="schemasearchprincipalrolelist"></a>
<a id="schema_SearchPrincipalRoleList"></a>
<a id="tocSsearchprincipalrolelist"></a>
<a id="tocssearchprincipalrolelist"></a>

```json
[
  "VIEWER"
]
```

<h2 id="tocS_SearchPrincipalType">SearchPrincipalType</h2>
<!-- backwards compatibility -->
<a id="schemasearchprincipaltype"></a>
<a id="schema_SearchPrincipalType"></a>
<a id="tocSsearchprincipaltype"></a>
<a id="tocssearchprincipaltype"></a>

```json
{
  "Id": {},
  "Roles": {}
}
```

Filter based on UserIds or GroupIds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Roles|object|false|none|none|

<h2 id="tocS_SearchQueryScopeTypeList">SearchQueryScopeTypeList</h2>
<!-- backwards compatibility -->
<a id="schemasearchqueryscopetypelist"></a>
<a id="schema_SearchQueryScopeTypeList"></a>
<a id="tocSsearchqueryscopetypelist"></a>
<a id="tocssearchqueryscopetypelist"></a>

```json
[
  "NAME"
]
```

<h2 id="tocS_SearchResourceType">SearchResourceType</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcetype"></a>
<a id="schema_SearchResourceType"></a>
<a id="tocSsearchresourcetype"></a>
<a id="tocssearchresourcetype"></a>

```json
"FOLDER"
```

<h2 id="tocS_SearchResultSortList">SearchResultSortList</h2>
<!-- backwards compatibility -->
<a id="schemasearchresultsortlist"></a>
<a id="schema_SearchResultSortList"></a>
<a id="tocSsearchresultsortlist"></a>
<a id="tocssearchresultsortlist"></a>

```json
[
  {
    "Field": {},
    "Order": {}
  }
]
```

<h2 id="tocS_SearchResultsLimitType">SearchResultsLimitType</h2>
<!-- backwards compatibility -->
<a id="schemasearchresultslimittype"></a>
<a id="schema_SearchResultsLimitType"></a>
<a id="tocSsearchresultslimittype"></a>
<a id="tocssearchresultslimittype"></a>

```json
1
```

<h2 id="tocS_SearchResourcesRequest">SearchResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcesrequest"></a>
<a id="schema_SearchResourcesRequest"></a>
<a id="tocSsearchresourcesrequest"></a>
<a id="tocssearchresourcesrequest"></a>

```json
{
  "QueryText": {},
  "QueryScopes": {},
  "OrganizationId": {},
  "AdditionalResponseFields": {},
  "Filters": {
    "TextLocales": {},
    "ContentCategories": {},
    "ResourceTypes": {},
    "Labels": {},
    "Principals": {},
    "AncestorIds": {},
    "SearchCollectionTypes": {},
    "SizeRange": {
      "StartValue": {},
      "EndValue": {}
    },
    "CreatedRange": {
      "StartValue": {},
      "EndValue": {}
    },
    "ModifiedRange": {
      "StartValue": {},
      "EndValue": {}
    }
  },
  "OrderBy": {},
  "Limit": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryText|object|false|none|none|
|QueryScopes|object|false|none|none|
|OrganizationId|object|false|none|none|
|AdditionalResponseFields|object|false|none|none|
|Filters|object|false|none|none|
|OrderBy|object|false|none|none|
|Limit|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ASC"
```

<h2 id="tocS_ShareStatusType">ShareStatusType</h2>
<!-- backwards compatibility -->
<a id="schemasharestatustype"></a>
<a id="schema_ShareStatusType"></a>
<a id="tocSsharestatustype"></a>
<a id="tocssharestatustype"></a>

```json
"SUCCESS"
```

<h2 id="tocS_ShareResult">ShareResult</h2>
<!-- backwards compatibility -->
<a id="schemashareresult"></a>
<a id="schema_ShareResult"></a>
<a id="tocSshareresult"></a>
<a id="tocsshareresult"></a>

```json
{
  "PrincipalId": {},
  "InviteePrincipalId": {},
  "Role": {},
  "Status": {},
  "ShareId": {},
  "StatusMessage": {}
}
```

Describes the share results of a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrincipalId|object|false|none|none|
|InviteePrincipalId|object|false|none|none|
|Role|object|false|none|none|
|Status|object|false|none|none|
|ShareId|object|false|none|none|
|StatusMessage|object|false|none|none|

<h2 id="tocS_SignedHeaderMap">SignedHeaderMap</h2>
<!-- backwards compatibility -->
<a id="schemasignedheadermap"></a>
<a id="schema_SignedHeaderMap"></a>
<a id="tocSsignedheadermap"></a>
<a id="tocssignedheadermap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[HeaderValueType](#schemaheadervaluetype)|false|none|none|

<h2 id="tocS_UpdateDocumentRequest">UpdateDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedocumentrequest"></a>
<a id="schema_UpdateDocumentRequest"></a>
<a id="tocSupdatedocumentrequest"></a>
<a id="tocsupdatedocumentrequest"></a>

```json
{
  "Name": {},
  "ParentFolderId": {},
  "ResourceState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|ParentFolderId|object|false|none|none|
|ResourceState|object|false|none|none|

<h2 id="tocS_UpdateDocumentVersionRequest">UpdateDocumentVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedocumentversionrequest"></a>
<a id="schema_UpdateDocumentVersionRequest"></a>
<a id="tocSupdatedocumentversionrequest"></a>
<a id="tocsupdatedocumentversionrequest"></a>

```json
{
  "VersionStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VersionStatus|object|false|none|none|

<h2 id="tocS_UpdateFolderRequest">UpdateFolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefolderrequest"></a>
<a id="schema_UpdateFolderRequest"></a>
<a id="tocSupdatefolderrequest"></a>
<a id="tocsupdatefolderrequest"></a>

```json
{
  "Name": {},
  "ParentFolderId": {},
  "ResourceState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|ParentFolderId|object|false|none|none|
|ResourceState|object|false|none|none|

<h2 id="tocS_UserType">UserType</h2>
<!-- backwards compatibility -->
<a id="schemausertype"></a>
<a id="schema_UserType"></a>
<a id="tocSusertype"></a>
<a id="tocsusertype"></a>

```json
"USER"
```

<h2 id="tocS_UpdateUserRequest">UpdateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserrequest"></a>
<a id="schema_UpdateUserRequest"></a>
<a id="tocSupdateuserrequest"></a>
<a id="tocsupdateuserrequest"></a>

```json
{
  "GivenName": {},
  "Surname": {},
  "Type": {},
  "StorageRule": {
    "StorageAllocatedInBytes": {},
    "StorageType": {}
  },
  "TimeZoneId": {},
  "Locale": {},
  "GrantPoweruserPrivileges": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GivenName|object|false|none|none|
|Surname|object|false|none|none|
|Type|object|false|none|none|
|StorageRule|object|false|none|none|
|TimeZoneId|object|false|none|none|
|Locale|object|false|none|none|
|GrantPoweruserPrivileges|object|false|none|none|

<h2 id="tocS_UserStatusType">UserStatusType</h2>
<!-- backwards compatibility -->
<a id="schemauserstatustype"></a>
<a id="schema_UserStatusType"></a>
<a id="tocSuserstatustype"></a>
<a id="tocsuserstatustype"></a>

```json
"ACTIVE"
```

<h2 id="tocS_UserStorageMetadata">UserStorageMetadata</h2>
<!-- backwards compatibility -->
<a id="schemauserstoragemetadata"></a>
<a id="schema_UserStorageMetadata"></a>
<a id="tocSuserstoragemetadata"></a>
<a id="tocsuserstoragemetadata"></a>

```json
{
  "StorageUtilizedInBytes": {},
  "StorageRule": {
    "StorageAllocatedInBytes": {},
    "StorageType": {}
  }
}
```

Describes the storage for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageUtilizedInBytes|object|false|none|none|
|StorageRule|object|false|none|none|
