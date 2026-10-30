<h1 id="files-files">Files Files v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|files.ui_hidden.read||
|files.ui_hidden.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="files-files-files">Files</h1>

## Upload file

<a id="opIdpost-/files/2026-09/files"></a>

> Code samples

```bash
curl https://api.hubapi.com/files/2026-09/files \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /files/2026-09/files`

Upload a new file to the HubSpot file manager. This endpoint allows you to specify the file, its name, and the folder where it should be stored. It supports additional options such as specifying a character set or additional options for the file.

> Body parameter

```yaml
null
```

<h3 id="upload-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» charsetHunch|body|string|false|none|
|» file|body|string(binary)|false|none|
|» fileName|body|string|false|none|
|» folderId|body|string|false|none|
|» folderPath|body|string|false|none|
|» options|body|string|false|none|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="upload-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[File](#schemafile)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.write )
</aside>

## Import File

<a id="opIdpost-/files/2026-09/files/import-from-url/async"></a>

> Code samples

```bash
curl https://api.hubapi.com/files/2026-09/files/import-from-url/async \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /files/2026-09/files/import-from-url/async`

Import a file asynchronously from a specified URL into the HubSpot file manager. This endpoint allows you to specify various parameters such as access level, duplicate validation strategy, and whether to overwrite existing files. The operation is processed asynchronously, and a task locator is returned to check the status of the import.

> Body parameter

```json
null
```

<h3 id="import-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportFromUrlInput](#schemaimportfromurlinput)|true|none|
|» access|body|string|true|Specifies the access level of the file. Valid values include 'PUBLIC_INDEXABLE', 'PUBLIC_NOT_INDEXABLE', 'HIDDEN_INDEXABLE', 'HIDDEN_NOT_INDEXABLE', 'HIDDEN_PRIVATE', 'PRIVATE', 'HIDDEN_SENSITIVE', and 'SENSITIVE'.|
|» duplicateValidationScope|body|string|true|Optional: Specifies the scope for duplicate validation. Valid values include 'ENTIRE_PORTAL' and 'EXACT_FOLDER'.|
|» duplicateValidationStrategy|body|string|true|Defines the strategy for handling duplicate files. Valid values are 'NONE', 'REJECT', and 'RETURN_EXISTING'.|
|» expiresAt|body|string(date-time)|false|Optional: Epoch time when the file will expire, in ISO 8601 format. Do not set if the file should live indefinitely|
|» folderId|body|string|false|The ID of the folder where the file will be stored. This or folderPath must be set|
|» folderPath|body|string|false|The path of the folder where the file will be stored. This or FolderId must be set.|
|» name|body|string|false|The name of the file to be imported.|
|» overwrite|body|boolean|true|Optional  boolean indicating whether to overwrite an existing file at the same location.|
|» ttl|body|string|false|Deprecated Do Not use. Optional: String representing the time-to-live for the file, same a expiresAt but takes a Period String.|
|» url|body|string|false|The URL from which the file will be imported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» access|HIDDEN_INDEXABLE|
|» access|HIDDEN_NOT_INDEXABLE|
|» access|HIDDEN_PRIVATE|
|» access|HIDDEN_SENSITIVE|
|» access|PRIVATE|
|» access|PUBLIC_INDEXABLE|
|» access|PUBLIC_NOT_INDEXABLE|
|» access|SENSITIVE|
|» duplicateValidationScope|ENTIRE_PORTAL|
|» duplicateValidationScope|EXACT_FOLDER|
|» duplicateValidationStrategy|NONE|
|» duplicateValidationStrategy|REJECT|
|» duplicateValidationStrategy|RETURN_EXISTING|

> Example responses

> 202 Response

```json
null
```

> default Response

```json
null
```

<h3 id="import-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|accepted|[ImportFromUrlTaskLocator](#schemaimportfromurltasklocator)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.write )
</aside>

## Retrieve status

<a id="opIdget-/files/2026-09/files/import-from-url/async/tasks/{taskId}/status"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/files/import-from-url/async/tasks/{taskId}/status' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/2026-09/files/import-from-url/async/tasks/{taskId}/status`

Retrieve the status of an asynchronous file import task using the task ID. This endpoint provides information about the current state of the task, such as whether it is pending, processing, canceled, or complete.

<h3 id="retrieve-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|The ID of the asynchronous file import task.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FileActionResponse](#schemafileactionresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.read )
</aside>

## Search files

<a id="opIdget-/files/2026-09/files/search"></a>

> Code samples

```bash
curl https://api.hubapi.com/files/2026-09/files/search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/2026-09/files/search`

Search for files in the HubSpot account using various filters and criteria. This endpoint allows you to specify multiple query parameters to narrow down the search results based on properties like creation date, size, type, and more. It supports pagination and sorting to manage large sets of data effectively.

<h3 id="search-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|A cursor token for pagination, indicating the last successfully read resource.|
|allowsAnonymousAccess|query|boolean|false|Filter files based on whether they allow anonymous access.|
|before|query|string|false|A cursor token for pagination, indicating the first successfully read resource.|
|createdAt|query|string(date-time)|false|Filter files created at this specific date and time.|
|createdAtGte|query|string(date-time)|false|Filter files created on or after this date and time.|
|createdAtLte|query|string(date-time)|false|Filter files created on or before this date and time.|
|encoding|query|string|false|Filter files by their encoding type.|
|expiresAt|query|string(date-time)|false|Filter files by their expiration date and time.|
|expiresAtGte|query|string(date-time)|false|Filter files expiring on or after this date and time.|
|expiresAtLte|query|string(date-time)|false|Filter files expiring on or before this date and time.|
|extension|query|string|false|Filter files by their file extension.|
|fileMd5|query|string|false|Filter files by their MD5 hash.|
|height|query|integer(int32)|false|Filter files by their exact height.|
|heightGte|query|integer(int32)|false|Filter files with height greater than or equal to this value.|
|heightLte|query|integer(int32)|false|Filter files with height less than or equal to this value.|
|idGte|query|integer(int64)|false|Filter files with IDs greater than or equal to this value.|
|idLte|query|integer(int64)|false|Filter files with IDs less than or equal to this value.|
|ids|query|[integer(int64)]|false|A list of file IDs to filter the results.|
|isUsableInContent|query|boolean|false|Filter files based on whether they are usable in content.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|name|query|string|false|Filter files by name.|
|parentFolderIds|query|[integer(int64)]|false|A list of parent folder IDs to filter the results.|
|path|query|string|false|Filter files by their path.|
|properties|query|[string]|false|A list of property names to include in the response.|
|size|query|integer(int64)|false|Filter files by their exact size.|
|sizeGte|query|integer(int64)|false|Filter files with size greater than or equal to this value.|
|sizeLte|query|integer(int64)|false|Filter files with size less than or equal to this value.|
|sort|query|[string]|false|A list of fields to sort the results by.|
|type|query|string|false|Filter files by their type.|
|updatedAt|query|string(date-time)|false|Filter files updated at this specific date and time.|
|updatedAtGte|query|string(date-time)|false|Filter files updated on or after this date and time.|
|updatedAtLte|query|string(date-time)|false|Filter files updated on or before this date and time.|
|url|query|string|false|Filter files by their URL.|
|width|query|integer(int32)|false|Filter files by their exact width.|
|widthGte|query|integer(int32)|false|Filter files with width greater than or equal to this value.|
|widthLte|query|integer(int32)|false|Filter files with width less than or equal to this value.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="search-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseFile](#schemacollectionresponsefile)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.read )
</aside>

## Retrieve file stats

<a id="opIdget-/files/2026-09/files/stat/{path}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/files/stat/{path}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/2026-09/files/stat/{path}`

Retrieve detailed statistics for a specific file or folder identified by its path. This endpoint provides information about the file or folder, which can be useful for managing and organizing files within your HubSpot account.

<h3 id="retrieve-file-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|The path of the file or folder for which statistics are being retrieved. This is a required parameter and must be a valid path string.|
|properties|query|[string]|false|A list of specific properties to include in the response. This parameter is optional and can be used to customize the data returned.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-file-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FileStat](#schemafilestat)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.read )
</aside>

## Retrieve file

<a id="opIdget-/files/2026-09/files/{fileId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/files/{fileId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/2026-09/files/{fileId}`

Retrieve file metadata using its ID.

<h3 id="retrieve-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The unique identifier of the file to retrieve.|
|properties|query|[string]|false|A comma-separated list of property names to include in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[File](#schemafile)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.read )
</aside>

## Update file

<a id="opIdput-/files/2026-09/files/{fileId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/files/{fileId}' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /files/2026-09/files/{fileId}`

Update an existing file in your HubSpot account by specifying the file ID. This operation allows you to modify the file's content and other attributes. It requires the file to be identified by its unique fileId.

> Body parameter

```yaml
null
```

<h3 id="update-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The unique identifier of the file to update.|
|body|body|object|false|none|
|» charsetHunch|body|string|false|none|
|» file|body|string(binary)|false|none|
|» options|body|string|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[File](#schemafile)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.write )
</aside>

## Delete file

<a id="opIddelete-/files/2026-09/files/{fileId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/files/{fileId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /files/2026-09/files/{fileId}`

Delete a specific file from your HubSpot account using its ID. This will delete it from the FileManager and make its url inaccessible

<h3 id="delete-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.write )
</aside>

## Update file

<a id="opIdpatch-/files/2026-09/files/{fileId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/files/{fileId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /files/2026-09/files/{fileId}`

Update the details of a specific file in your HubSpot account using its unique identifier. This operation allows you to modify file properties such as name, parent folder, and access settings. It is useful for managing file metadata and ensuring files are organized and accessible as needed.

> Body parameter

```json
null
```

<h3 id="update-file-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file to update.|
|body|body|[FileUpdateInput](#schemafileupdateinput)|true|none|
|» access|body|string|false|The access level to update the file to. Valid values include 'PUBLIC_INDEXABLE', 'PUBLIC_NOT_INDEXABLE', 'HIDDEN_INDEXABLE', 'HIDDEN_NOT_INDEXABLE', 'HIDDEN_PRIVATE', 'PRIVATE', 'HIDDEN_SENSITIVE', and 'SENSITIVE'.|
|» clearExpires|body|boolean|true|A boolean indicating whether to clear the expires TTL on the file.|
|» expiresAt|body|string(date-time)|false|The date and time when the file will expire, represented in ISO 8601 format.|
|» isUsableInContent|body|boolean|false|A boolean indicating whether the file can be used in content.|
|» name|body|string|false|New Name to rename the file to.|
|» parentFolderId|body|string|false|The ID of the parent folder where the file should be moved. This cannot be set in tandem with parentFolderPath.|
|» parentFolderPath|body|string|false|The new parentFolder path to move the file to. This cannot be set in tandem with parentFolderId.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» access|HIDDEN_INDEXABLE|
|» access|HIDDEN_NOT_INDEXABLE|
|» access|HIDDEN_PRIVATE|
|» access|HIDDEN_SENSITIVE|
|» access|PRIVATE|
|» access|PUBLIC_INDEXABLE|
|» access|PUBLIC_NOT_INDEXABLE|
|» access|SENSITIVE|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-file-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[File](#schemafile)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.write )
</aside>

## Download file

<a id="opIdget-/files/2026-09/files/{fileId}/download"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/files/{fileId}/download' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/2026-09/files/{fileId}/download`

Download a specific file from your HubSpot account using its ID. It is recommended that this endpoint is only used to access for SENSITIVE files. For PUBLIC files access via the public url. For PRIVATE files access via the signedUrl.

<h3 id="download-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file to download.|

> Example responses

> default Response

```json
null
```

<h3 id="download-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.read )
</aside>

## GDPR Delete file

<a id="opIddelete-/files/2026-09/files/{fileId}/gdpr-delete"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/files/{fileId}/gdpr-delete' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /files/2026-09/files/{fileId}/gdpr-delete`

Delete a file from your HubSpot account in compliance with GDPR regulations. This operation ensures that the specified file is permanently removed and cannot be recovered.

<h3 id="gdpr-delete-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The ID of the file to be deleted.|

> Example responses

> default Response

```json
null
```

<h3 id="gdpr-delete-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.write )
</aside>

## Generate signed URL

<a id="opIdget-/files/2026-09/files/{fileId}/signed-url"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/files/{fileId}/signed-url' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/2026-09/files/{fileId}/signed-url`

Generate a signed URL for a specific file in your HubSpot account. This endpoint allows you to specify the size of the file, the expiration time for the URL, and whether the image should be upscaled. It is useful for securely sharing files with a limited lifespan.

<h3 id="generate-signed-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|The unique identifier of the file for which to generate a signed URL.|
|expirationSeconds|query|integer(int64)|false|The duration in seconds for which the signed URL will remain valid.|
|size|query|string|false|The desired size of the file. Valid values are 'thumb', 'icon', 'medium', and 'preview'.|
|upscale|query|boolean|false|A boolean indicating whether the image should be upscaled if necessary.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|size|icon|
|size|medium|
|size|preview|
|size|thumb|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="generate-signed-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignedUrl](#schemasignedurl)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.read )
</aside>

<h1 id="files-files-folders">Folders</h1>

## Create folder

<a id="opIdpost-/files/2026-09/folders"></a>

> Code samples

```bash
curl https://api.hubapi.com/files/2026-09/folders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /files/2026-09/folders`

Create a new folder in the HubSpot file manager. This endpoint allows you to organize files by creating folders, which can be nested within other folders by specifying a parent folder ID or path.

> Body parameter

```json
null
```

<h3 id="create-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FolderInput](#schemafolderinput)|true|none|
|» name|body|string|true|The name of the folder to be created. This is a required string property.|
|» parentFolderId|body|string|false|The ID of the parent folder under which the new folder will be created. This is an optional string field.|
|» parentPath|body|string|false|The path of the parent folder under which the new folder will be created. This is an optional string property.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[Folder](#schemafolder)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.write )
</aside>

## Search folders

<a id="opIdget-/files/2026-09/folders/search"></a>

> Code samples

```bash
curl https://api.hubapi.com/files/2026-09/folders/search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/2026-09/folders/search`

Search for folders in the HubSpot file manager using various query parameters to filter results. This endpoint allows you to retrieve folders based on specific criteria such as creation date, update date, folder name, and parent folder IDs. It supports pagination and sorting to help manage large sets of data efficiently.

<h3 id="search-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|A cursor token for pagination. Use the value from the previous response's paging.next.after field.|
|before|query|string|false|A cursor token for pagination. Use the value from the previous response's paging.prev.before field.|
|createdAt|query|string(date-time)|false|Filter folders created at this exact epoch timestamp.|
|createdAtGte|query|string(date-time)|false|Filter results where the creation date is greater than or equal to this epoch timestamp.|
|createdAtLte|query|string(date-time)|false|Filter results to folders created before or at this epoch timestamp.|
|idGte|query|integer(int64)|false|Filter results to include only folders with IDs greater than or equal to this value.|
|idLte|query|integer(int64)|false|Filter to include folders with IDs less than or equal to this value.|
|ids|query|[integer(int64)]|false|A list of folder IDs to filter the results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|name|query|string|false|Filter folders by this name.|
|parentFolderIds|query|[integer(int64)]|false|A list of parent folder IDs to filter the results.|
|path|query|string|false|Filter results to folders with this specific path.|
|properties|query|[string]|false|A list of property names to include in the response.|
|sort|query|[string]|false|A list of property names to sort by in the response.|
|updatedAt|query|string(date-time)|false|Filter results to include only folders updated at this exact epoch timestamp.|
|updatedAtGte|query|string(date-time)|false|Filter results to folders updated at or after this epoch timestamp.|
|updatedAtLte|query|string(date-time)|false|Filter folders updated at or before this epoch timestamp.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="search-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseFolder](#schemacollectionresponsefolder)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.read )
</aside>

## Retrieve folder

<a id="opIdget-/files/2026-09/folders/{folderId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/folders/{folderId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/2026-09/folders/{folderId}`

Retrieve folder metadata by its ID.

<h3 id="retrieve-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|path|string|true|The ID of the folder to retrieve.|
|properties|query|[string]|false|A comma-separated list of folder property names to include in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Folder](#schemafolder)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.read )
</aside>

## Delete folder by ID

<a id="opIddelete-/files/2026-09/folders/{folderId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/folders/{folderId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /files/2026-09/folders/{folderId}`

Delete a folder in your HubSpot account using its ID. This operation deletes the folder and its contents recursively.

<h3 id="delete-folder-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|path|string|true|The ID of the folder to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-folder-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.write )
</aside>

## Update folder

<a id="opIdpatch-/files/2026-09/folders/{folderId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/folders/{folderId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /files/2026-09/folders/{folderId}`

Update the details of a specific folder in the file manager by providing the folder's unique identifier. This operation allows you to modify folder attributes such as its name or parent folder ID.

> Body parameter

```json
null
```

<h3 id="update-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|path|string|true|The ID of the folder to update.|
|body|body|[FolderUpdateInput](#schemafolderupdateinput)|true|none|
|» name|body|string|false|The new name for the folder.|
|» parentFolderId|body|integer(int64)|false|The ID of the parent folder to which this folder will be moved. |

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Folder](#schemafolder)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.write )
</aside>

## Retrieve folder by path

<a id="opIdget-/files/2026-09/folders/{folderPath}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/folders/{folderPath}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/2026-09/folders/{folderPath}`

Retrieve details about a specific folder in the file manager using its path.

<h3 id="retrieve-folder-by-path-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderPath|path|string|true|The path of the folder to retrieve.|
|properties|query|[string]|false|A comma-separated list of property names to include in the response. This allows you to specify which folder properties you want to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-folder-by-path-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Folder](#schemafolder)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.read )
</aside>

## Delete folder by path

<a id="opIddelete-/files/2026-09/folders/{folderPath}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/files/2026-09/folders/{folderPath}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /files/2026-09/folders/{folderPath}`

Delete a folder in your HubSpot account using its path. This operation deletes the folder and its contents recursively.

<h3 id="delete-folder-by-path-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderPath|path|string|true|The path of the folder to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-folder-by-path-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: files.ui_hidden.write )
</aside>

# Schemas

<h2 id="tocS_CollectionResponseFile">CollectionResponseFile</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsefile"></a>
<a id="schema_CollectionResponseFile"></a>
<a id="tocScollectionresponsefile"></a>
<a id="tocscollectionresponsefile"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[File](#schemafile)]|true|none|An array of file objects, each representing a file with its associated metadata.|

<h2 id="tocS_CollectionResponseFolder">CollectionResponseFolder</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsefolder"></a>
<a id="schema_CollectionResponseFolder"></a>
<a id="tocScollectionresponsefolder"></a>
<a id="tocscollectionresponsefolder"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[Folder](#schemafolder)]|true|none|An array of folder objects, each representing a folder within the file manager.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category, represented as a string.|
|context|object|false|none|Context about the error condition, represented as an object with additional properties that are arrays of strings.|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets. It is a string in UUID format.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|An array providing further information about the error, with each item being an ErrorDetail object.|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps, represented as an object with string properties.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. It is a string.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error. It is a string.|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail.|
|context|object|false|none|Context about the error condition, represented as an object with additional properties that are arrays of strings.|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. It is a string.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error. This is a string.|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string|false|none|The access level of the file, represented as a string. Valid values include 'PUBLIC_INDEXABLE', 'PUBLIC_NOT_INDEXABLE', 'HIDDEN_INDEXABLE', 'HIDDEN_NOT_INDEXABLE', 'HIDDEN_PRIVATE', 'PRIVATE', 'HIDDEN_SENSITIVE', and 'SENSITIVE'.|
|archived|boolean|true|none|A boolean indicating whether the file is archived.|
|archivedAt|string(date-time)|false|none|The date and time when the file was deleted, in ISO 8601 format.|
|createdAt|string(date-time)|true|none|The date and time when the file was created, in ISO 8601 format.|
|defaultHostingUrl|string|false|none|The static cdn URL where the file is hosted.|
|encoding|string|false|none|The encoding of the file.|
|expiresAt|integer(int64)|false|none|The expiration epoch timestamp, if set.|
|extension|string|false|none|The file extension.|
|fileMd5|string|false|none|The MD5 hash of the file.|
|height|integer(int32)|false|none|The height of the file in pixels, applicable if the file is an image or video.|
|id|string|true|none|The ID of the file.|
|isUsableInContent|boolean|false|none|A boolean indicating whether the file can be used in content.|
|name|string|false|none|The name of the file.|
|parentFolderId|string|false|none|The unique identifier of the parent folder containing the file, represented as a string.|
|path|string|false|none|The path of the file within the file manager.|
|size|integer(int64)|false|none|The size of the file in bytes.|
|sourceGroup|string|false|none|The source group of the file, with possible values including 'UNKNOWN', 'CONTENT', 'FORMS', 'CONVERSATIONS', and 'UI_EXTENSIONS'.|
|type|string|false|none|The type of the file. Values include: IMG, DOCUMENT, AUDIO, MOVIE, OTHER.|
|updatedAt|string(date-time)|true|none|The date and time when the file was last updated, in ISO 8601 format.|
|url|string|false|none|The URL where the file can be accessed, represented as a string.|
|width|integer(int32)|false|none|The width of the file in pixels, applicable if the file is an image or video.|

#### Enumerated Values

|Property|Value|
|---|---|
|access|HIDDEN_INDEXABLE|
|access|HIDDEN_NOT_INDEXABLE|
|access|HIDDEN_PRIVATE|
|access|HIDDEN_SENSITIVE|
|access|PRIVATE|
|access|PUBLIC_INDEXABLE|
|access|PUBLIC_NOT_INDEXABLE|
|access|SENSITIVE|
|sourceGroup|CONTENT|
|sourceGroup|CONVERSATIONS|
|sourceGroup|FORMS|
|sourceGroup|UI_EXTENSIONS|
|sourceGroup|UNKNOWN|

<h2 id="tocS_FileActionResponse">FileActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemafileactionresponse"></a>
<a id="schema_FileActionResponse"></a>
<a id="tocSfileactionresponse"></a>
<a id="tocsfileactionresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the file action was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of StandardError objects detailing any errors that occurred during the file action.|
|links|object|false|none|A map of link names to associated URIs, providing additional information about the file action.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the file action, represented as an integer.|
|requestedAt|string(date-time)|false|none|The date and time when the file action was requested, in ISO 8601 format.|
|result|[File](#schemafile)|false|none|none|
|startedAt|string(date-time)|true|none|The date and time when the file action started, in ISO 8601 format.|
|status|string|true|none|The current status of the file action. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|
|taskId|string|true|none|The unique identifier for the task associated with the file action.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_FileStat">FileStat</h2>
<!-- backwards compatibility -->
<a id="schemafilestat"></a>
<a id="schema_FileStat"></a>
<a id="tocSfilestat"></a>
<a id="tocsfilestat"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|[File](#schemafile)|false|none|none|
|folder|[Folder](#schemafolder)|false|none|none|

<h2 id="tocS_FileUpdateInput">FileUpdateInput</h2>
<!-- backwards compatibility -->
<a id="schemafileupdateinput"></a>
<a id="schema_FileUpdateInput"></a>
<a id="tocSfileupdateinput"></a>
<a id="tocsfileupdateinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string|false|none|The access level to update the file to. Valid values include 'PUBLIC_INDEXABLE', 'PUBLIC_NOT_INDEXABLE', 'HIDDEN_INDEXABLE', 'HIDDEN_NOT_INDEXABLE', 'HIDDEN_PRIVATE', 'PRIVATE', 'HIDDEN_SENSITIVE', and 'SENSITIVE'.|
|clearExpires|boolean|true|none|A boolean indicating whether to clear the expires TTL on the file.|
|expiresAt|string(date-time)|false|none|The date and time when the file will expire, represented in ISO 8601 format.|
|isUsableInContent|boolean|false|none|A boolean indicating whether the file can be used in content.|
|name|string|false|none|New Name to rename the file to.|
|parentFolderId|string|false|none|The ID of the parent folder where the file should be moved. This cannot be set in tandem with parentFolderPath.|
|parentFolderPath|string|false|none|The new parentFolder path to move the file to. This cannot be set in tandem with parentFolderId.|

#### Enumerated Values

|Property|Value|
|---|---|
|access|HIDDEN_INDEXABLE|
|access|HIDDEN_NOT_INDEXABLE|
|access|HIDDEN_PRIVATE|
|access|HIDDEN_SENSITIVE|
|access|PRIVATE|
|access|PUBLIC_INDEXABLE|
|access|PUBLIC_NOT_INDEXABLE|
|access|SENSITIVE|

<h2 id="tocS_Folder">Folder</h2>
<!-- backwards compatibility -->
<a id="schemafolder"></a>
<a id="schema_Folder"></a>
<a id="tocSfolder"></a>
<a id="tocsfolder"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether the folder is archived.|
|archivedAt|string(date-time)|false|none|The date and time when the folder was archived, in ISO 8601 format.|
|createdAt|string(date-time)|true|none|The date and time when the folder was created, in ISO 8601 format.|
|id|string|true|none|The unique ID for the folder, represented as a string.|
|name|string|false|none|The name of the folder, represented as a string.|
|parentFolderId|string|false|none|The unique identifier of the parent folder, represented as a string.|
|path|string|false|none|The path of the folder within the file system, represented as a string.|
|updatedAt|string(date-time)|true|none|The date and time when the folder was last updated, in ISO 8601 format.|

<h2 id="tocS_FolderInput">FolderInput</h2>
<!-- backwards compatibility -->
<a id="schemafolderinput"></a>
<a id="schema_FolderInput"></a>
<a id="tocSfolderinput"></a>
<a id="tocsfolderinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the folder to be created. This is a required string property.|
|parentFolderId|string|false|none|The ID of the parent folder under which the new folder will be created. This is an optional string field.|
|parentPath|string|false|none|The path of the parent folder under which the new folder will be created. This is an optional string property.|

<h2 id="tocS_FolderUpdateInput">FolderUpdateInput</h2>
<!-- backwards compatibility -->
<a id="schemafolderupdateinput"></a>
<a id="schema_FolderUpdateInput"></a>
<a id="tocSfolderupdateinput"></a>
<a id="tocsfolderupdateinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The new name for the folder.|
|parentFolderId|integer(int64)|false|none|The ID of the parent folder to which this folder will be moved. |

<h2 id="tocS_ImportFromUrlInput">ImportFromUrlInput</h2>
<!-- backwards compatibility -->
<a id="schemaimportfromurlinput"></a>
<a id="schema_ImportFromUrlInput"></a>
<a id="tocSimportfromurlinput"></a>
<a id="tocsimportfromurlinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string|true|none|Specifies the access level of the file. Valid values include 'PUBLIC_INDEXABLE', 'PUBLIC_NOT_INDEXABLE', 'HIDDEN_INDEXABLE', 'HIDDEN_NOT_INDEXABLE', 'HIDDEN_PRIVATE', 'PRIVATE', 'HIDDEN_SENSITIVE', and 'SENSITIVE'.|
|duplicateValidationScope|string|true|none|Optional: Specifies the scope for duplicate validation. Valid values include 'ENTIRE_PORTAL' and 'EXACT_FOLDER'.|
|duplicateValidationStrategy|string|true|none|Defines the strategy for handling duplicate files. Valid values are 'NONE', 'REJECT', and 'RETURN_EXISTING'.|
|expiresAt|string(date-time)|false|none|Optional: Epoch time when the file will expire, in ISO 8601 format. Do not set if the file should live indefinitely|
|folderId|string|false|none|The ID of the folder where the file will be stored. This or folderPath must be set|
|folderPath|string|false|none|The path of the folder where the file will be stored. This or FolderId must be set.|
|name|string|false|none|The name of the file to be imported.|
|overwrite|boolean|true|none|Optional  boolean indicating whether to overwrite an existing file at the same location.|
|ttl|string|false|none|Deprecated Do Not use. Optional: String representing the time-to-live for the file, same a expiresAt but takes a Period String.|
|url|string|false|none|The URL from which the file will be imported.|

#### Enumerated Values

|Property|Value|
|---|---|
|access|HIDDEN_INDEXABLE|
|access|HIDDEN_NOT_INDEXABLE|
|access|HIDDEN_PRIVATE|
|access|HIDDEN_SENSITIVE|
|access|PRIVATE|
|access|PUBLIC_INDEXABLE|
|access|PUBLIC_NOT_INDEXABLE|
|access|SENSITIVE|
|duplicateValidationScope|ENTIRE_PORTAL|
|duplicateValidationScope|EXACT_FOLDER|
|duplicateValidationStrategy|NONE|
|duplicateValidationStrategy|REJECT|
|duplicateValidationStrategy|RETURN_EXISTING|

<h2 id="tocS_ImportFromUrlTaskLocator">ImportFromUrlTaskLocator</h2>
<!-- backwards compatibility -->
<a id="schemaimportfromurltasklocator"></a>
<a id="schema_ImportFromUrlTaskLocator"></a>
<a id="tocSimportfromurltasklocator"></a>
<a id="tocsimportfromurltasklocator"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the import task.|
|links|object|false|none|A map of link names to associated URIs related to the import task. Each entry in the map is a string.|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|A string token used to retrieve the next page of results.|
|link|string|false|none|A string URL that provides the link to access the next page of results.|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
null
```

Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|
|prev|[PreviousPage](#schemapreviouspage)|false|none|specifies the paging information needed to retrieve the previous set of results in a paginated API response|

<h2 id="tocS_PreviousPage">PreviousPage</h2>
<!-- backwards compatibility -->
<a id="schemapreviouspage"></a>
<a id="schema_PreviousPage"></a>
<a id="tocSpreviouspage"></a>
<a id="tocspreviouspage"></a>

```json
null
```

specifies the paging information needed to retrieve the previous set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|before|string|true|none|A string token representing the cursor for the previous page of results.|
|link|string|false|none|A string URL that provides a link to the previous page of results.|

<h2 id="tocS_SignedUrl">SignedUrl</h2>
<!-- backwards compatibility -->
<a id="schemasignedurl"></a>
<a id="schema_SignedUrl"></a>
<a id="tocSsignedurl"></a>
<a id="tocssignedurl"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiresAt|string(date-time)|true|none|The date and time when the URL expires, in ISO 8601 format.|
|extension|string|false|none|The file extension of the file.|
|height|integer(int32)|false|none|The height of the file in pixels.|
|name|string|false|none|The name of the file.|
|size|integer(int64)|false|none|The size of the file in bytes.|
|type|string|false|none|The type of the file.|
|url|string|true|none|The signed URL string that provides access to the file.|
|width|integer(int32)|false|none|The width of the file in pixels.|

<h2 id="tocS_StandardError">StandardError</h2>
<!-- backwards compatibility -->
<a id="schemastandarderror"></a>
<a id="schema_StandardError"></a>
<a id="tocSstandarderror"></a>
<a id="tocsstandarderror"></a>

```json
null
```

Ye olde error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|A string that categorizes the type of error.|
|context|object|true|none|An object containing additional context about the error condition, with properties as arrays of strings.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects that provide further information about the error.|
|id|string|false|none|A string representing a unique identifier for the error.|
|links|object|true|none|An object mapping link names to associated URIs with documentation or remediation steps for the error.|
|message|string|true|none|A string containing a human-readable message describing the error.|
|status|string|true|none|A string indicating the status of the error.|
|subCategory|object|false|none|An object providing more specific details about the error category.|
